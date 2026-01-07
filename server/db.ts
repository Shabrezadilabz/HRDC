import mongoose from "mongoose";
import * as schema from "@shared/schema";

// Note: MONGODB_URI is loaded by server/config.ts which must be imported first

if (!process.env.MONGODB_URI) {
  throw new Error(
    "MONGODB_URI must be set. Did you forget to set the MongoDB connection string in .env file?",
  );
}

// MongoDB connection options
const mongooseOptions = {
  serverSelectionTimeoutMS: 30000, // 30 seconds timeout
  socketTimeoutMS: 45000, // 45 seconds socket timeout
  connectTimeoutMS: 30000, // 30 seconds connection timeout
};

// Connect to MongoDB and return a promise
export async function connectToDatabase(): Promise<void> {
  try {
    await mongoose.connect(process.env.MONGODB_URI!, mongooseOptions);
    console.log("✅ Connected to MongoDB successfully");
  } catch (err) {
    console.error("❌ MongoDB connection error:", err);
    throw err;
  }
}

export const db = mongoose.connection;

// Export models
export const ScholarshipRegistration = schema.ScholarshipRegistration;
export const Enquiry = schema.Enquiry;
