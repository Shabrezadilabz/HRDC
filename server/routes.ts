import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // Scholarship Registration
  app.post(api.scholarship.create.path, async (req, res) => {
    try {
      const input = api.scholarship.create.input.parse(req.body);
      const registration = await storage.createScholarshipRegistration(input);
      res.status(201).json(registration);
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({
          message: err.errors[0].message,
          field: err.errors[0].path.join('.'),
        });
      }
      throw err;
    }
  });

  app.get(api.scholarship.list.path, async (req, res) => {
    const registrations = await storage.getScholarshipRegistrations();
    res.json(registrations);
  });

  // Enquiries
  app.post(api.enquiries.create.path, async (req, res) => {
    try {
      const input = api.enquiries.create.input.parse(req.body);
      const enquiry = await storage.createEnquiry(input);
      res.status(201).json(enquiry);
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({
          message: err.errors[0].message,
          field: err.errors[0].path.join('.'),
        });
      }
      throw err;
    }
  });

  app.get(api.enquiries.list.path, async (req, res) => {
    const enquiries = await storage.getEnquiries();
    res.json(enquiries);
  });

  // Seed Data
  const existingEnquiries = await storage.getEnquiries();
  if (existingEnquiries.length === 0) {
    await storage.createEnquiry({
      name: "John Doe",
      phone: "9876543210",
      email: "john@example.com",
      service: "BBA Aviation",
      message: "Interested in admission details.",
    });
    await storage.createEnquiry({
      name: "Jane Smith",
      phone: "8765432109",
      email: "jane@example.com",
      service: "Pilot Training (CPL)",
      message: "How much does it cost?",
    });
  }

  return httpServer;
}
