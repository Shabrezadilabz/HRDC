import express, { type Express } from "express";
import { createServer as createViteServer, createLogger } from "vite";
import { type Server } from "http";
import viteConfig from "../vite.config";
import fs from "fs";
import path from "path";
import { nanoid } from "nanoid";

const viteLogger = createLogger();

export async function setupVite(server: Server, app: Express) {
  try {
    console.log("🔄 Setting up Vite dev server...");
    
    const serverOptions = {
      middlewareMode: true,
      hmr: { server, path: "/vite-hmr" },
      allowedHosts: true as const,
    };

    const vite = await createViteServer({
      ...viteConfig,
      configFile: false,
      customLogger: {
        ...viteLogger,
        error: (msg, options) => {
          viteLogger.error(msg, options);
        },
      },
      server: serverOptions,
      appType: "custom",
    });

    // Vite middleware must come before static files
    app.use(vite.middlewares);
    console.log("✅ Vite middleware installed");

    // Serve assets from client/public/assets in development
    const assetsPath = path.resolve(import.meta.dirname, "..", "client", "public", "assets");
    if (fs.existsSync(assetsPath)) {
      app.use("/assets", express.static(assetsPath));
      console.log("✅ Assets serving from:", assetsPath);
    }

    // Catch-all route for SPA - must be LAST
    app.get("*", async (req, res, next) => {
      const url = req.originalUrl;

      // Skip API routes, test route, and static assets
      if (
        url.startsWith("/api") || 
        url.startsWith("/test") || 
        url.startsWith("/assets") || 
        url.startsWith("/vite-hmr") ||
        url.startsWith("/@")
      ) {
        return next();
      }

      try {
        const clientTemplate = path.resolve(
          import.meta.dirname,
          "..",
          "client",
          "index.html",
        );

        console.log(`📄 Serving frontend for: ${url}`);
        console.log(`📁 Template path: ${clientTemplate}`);

        if (!fs.existsSync(clientTemplate)) {
          console.error(`❌ index.html not found at: ${clientTemplate}`);
          return res.status(404).send(`
            <h1>Frontend Not Found</h1>
            <p>index.html not found at: ${clientTemplate}</p>
            <p>Please check that client/index.html exists.</p>
          `);
        }

        // Read and transform the HTML
        let template = await fs.promises.readFile(clientTemplate, "utf-8");
        template = template.replace(
          `src="/src/main.tsx"`,
          `src="/src/main.tsx?v=${nanoid()}"`,
        );
        
        const page = await vite.transformIndexHtml(url, template);
        res.status(200).set({ "Content-Type": "text/html" }).end(page);
        console.log(`✅ Served frontend for: ${url}`);
      } catch (e) {
        console.error("❌ Vite error serving frontend:", e);
        if (e instanceof Error) {
          console.error("Error details:", e.message);
          console.error("Stack:", e.stack);
        }
        vite.ssrFixStacktrace(e as Error);
        res.status(500).send(`
          <h1>Vite Error</h1>
          <pre>${e instanceof Error ? e.message : String(e)}</pre>
        `);
      }
    });
    
    console.log("✅ Vite dev server ready");
  } catch (error) {
    console.error("❌ Failed to setup Vite:", error);
    if (error instanceof Error) {
      console.error("Error details:", error.message);
      console.error("Stack:", error.stack);
    }
    throw error;
  }
}
