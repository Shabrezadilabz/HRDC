// Import config FIRST to load environment variables
import "./config";

import express, { type Request, Response, NextFunction } from "express";
import cors from "cors";
import { registerRoutes } from "./routes";
import { serveStatic } from "./static";
import { createServer } from "http";
import { connectToDatabase } from "./db";
import path from "path";
import fs from "fs";

const app = express();
const httpServer = createServer(app);

declare module "http" {
  interface IncomingMessage {
    rawBody: unknown;
  }
}

app.use(
  express.json({
    verify: (req, _res, buf) => {
      req.rawBody = buf;
    },
  }),
);

app.use(express.urlencoded({ extended: false }));

// Enable CORS for frontend-backend separation
app.use(cors({
  origin: process.env.FRONTEND_URL || "*",
  credentials: true,
}));

// Serve assets in development too
if (process.env.NODE_ENV === "development") {
  const assetsPath = path.resolve(process.cwd(), "client", "public", "assets");
  if (fs.existsSync(assetsPath)) {
    app.use("/assets", express.static(assetsPath));
  }
}

export function log(message: string, source = "express") {
  const formattedTime = new Date().toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });

  console.log(`${formattedTime} [${source}] ${message}`);
}

app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;
  let capturedJsonResponse: Record<string, any> | undefined = undefined;

  const originalResJson = res.json;
  res.json = function (bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path.startsWith("/api")) {
      let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }

      log(logLine);
    }
  });

  next();
});

(async () => {
  try {
    // Connect to MongoDB FIRST before registering routes
    console.log("🔄 Connecting to MongoDB...");
    const maskedUri = process.env.MONGODB_URI!.replace(/:[^:@]+@/, ":****@");
    console.log("📍 Connection:", maskedUri);
    await connectToDatabase();
    
    // Test route to verify server is working (must be before Vite catch-all)
    app.get("/test", (req, res) => {
      res.json({ 
        message: "Server is working!", 
        timestamp: new Date().toISOString(),
        routes: {
          test: "/test",
          api: "/api/enquiries",
          frontend: "/"
        }
      });
    });

    // Now register routes (which may query the database)
    await registerRoutes(httpServer, app);
    console.log("✅ API routes registered");

    // importantly only setup vite in development and after
    // setting up all the other routes so the catch-all route
    // doesn't interfere with the other routes
    if (process.env.NODE_ENV === "production") {
      serveStatic(app);
    } else {
      console.log("🔄 Setting up Vite dev server for frontend...");
      const { setupVite } = await import("./vite");
      await setupVite(httpServer, app);
      console.log("✅ Vite dev server configured");
    }

    // Error handler must be AFTER all routes
    app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
      const status = err.status || err.statusCode || 500;
      const message = err.message || "Internal Server Error";

      console.error("❌ Server error:", err);
      res.status(status).json({ message });
    });

    // ALWAYS serve the app on the port specified in the environment variable PORT
    // Other ports are firewalled. Default to 5000 if not specified.
    // this serves both the API and the client.
    // It is the only port that is not firewalled.
    const port = parseInt(process.env.PORT || "5000", 10);
    
    // Start server
    httpServer.listen(port, "0.0.0.0", () => {
      console.log("");
      console.log("=".repeat(50));
      console.log("✅ SERVER STARTED SUCCESSFULLY!");
      console.log("=".repeat(50));
      console.log(`🌐 Frontend: http://localhost:${port}`);
      console.log(`🔌 API:      http://localhost:${port}/api`);
      console.log(`🧪 Test:     http://localhost:${port}/test`);
      console.log("=".repeat(50));
      console.log("");
      
      // Verify routes are registered
      console.log("📋 Registered routes:");
      console.log("   GET  /test");
      console.log("   GET  /api/scholarship-registrations");
      console.log("   POST /api/scholarship-registrations");
      console.log("   GET  /api/enquiries");
      console.log("   POST /api/enquiries");
      console.log("   GET  /* (Vite catch-all for frontend)");
      console.log("");
    });
  } catch (error) {
    console.error("❌ Failed to start server:", error);
    process.exit(1);
  }
})();
