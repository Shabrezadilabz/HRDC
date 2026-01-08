// Load environment variables FIRST - this must be imported before anything else
import { config } from "dotenv";
import { resolve } from "path";

// Load .env file from project root
config({ path: resolve(process.cwd(), ".env") });

// Verify required environment variables
if (!process.env.MONGODB_URI) {
  console.error("❌ ERROR: MONGODB_URI is not set in .env file!");
  console.error("Please create a .env file in the root directory with:");
  console.error("MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/dbname");
  process.exit(1);
}

export {};



