import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";
import { sendScholarshipNotification, sendEnquiryNotification, sendExamRegistrationNotification } from "./email";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // Scholarship Registration
  app.post(api.scholarship.create.path, async (req, res) => {
    try {
      const input = api.scholarship.create.input.parse(req.body);
      const registration = await storage.createScholarshipRegistration(input);
      
      // Send email notification (non-blocking)
      sendScholarshipNotification(input).catch(err => {
        console.error('Email notification failed:', err.message);
      });
      
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

  // Student Exam Registration (NEW)
  app.post(api.studentExamRegister.create.path, async (req, res) => {
    try {
      const input = api.studentExamRegister.create.input.parse(req.body);
      const registration = await storage.createStudentExamRegister(input);
      
      // Send email notification (non-blocking)
      sendExamRegistrationNotification(registration).catch(err => {
        console.error('Email notification failed:', err.message);
      });
      
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

  app.get(api.studentExamRegister.list.path, async (req, res) => {
    const registrations = await storage.getStudentExamRegisters();
    res.json(registrations);
  });

  // Visitor Tracking (NEW)
  app.post(api.visitorTrack.create.path, async (req, res) => {
    try {
      // Get IP address from request
      const ipAddress = (req.headers['x-forwarded-for'] as string)?.split(',')[0] || 
                       req.socket.remoteAddress || 
                       'unknown';
      
      const visitorData = {
        ...req.body,
        ipAddress,
        userAgent: req.headers['user-agent'],
      };

      const input = api.visitorTrack.create.input.parse(visitorData);
      const visitor = await storage.createOrUpdateVisitor(input);
      res.status(201).json(visitor);
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({
          message: err.errors[0].message,
          field: err.errors[0].path.join('.'),
        });
      }
      console.error("Visitor tracking error:", err);
      throw err;
    }
  });

  app.get(api.visitorTrack.list.path, async (req, res) => {
    const visitors = await storage.getVisitors();
    res.json(visitors);
  });

  app.get(api.visitorTrack.stats.path, async (req, res) => {
    const visitors = await storage.getVisitors();
    const uniqueIPs = new Set(visitors.map(v => v.ipAddress).filter(Boolean));
    const totalVisits = visitors.reduce((sum, v) => sum + v.visitCount, 0);
    
    res.json({
      totalVisitors: visitors.length,
      uniqueVisitors: uniqueIPs.size,
      totalVisits,
    });
  });

  // Enquiries
  app.post(api.enquiries.create.path, async (req, res) => {
    try {
      const input = api.enquiries.create.input.parse(req.body);
      const enquiry = await storage.createEnquiry(input);
      
      // Send email notification (non-blocking)
      sendEnquiryNotification(input).catch(err => {
        console.error('Email notification failed:', err.message);
      });
      
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

  // Seed Data (non-blocking, runs in background)
  storage.getEnquiries()
    .then((enquiries) => {
      if (enquiries.length === 0) {
        return Promise.all([
          storage.createEnquiry({
            name: "John Doe",
            phone: "9876543210",
            email: "john@example.com",
            service: "BBA Aviation",
            message: "Interested in admission details.",
          }),
          storage.createEnquiry({
            name: "Jane Smith",
            phone: "8765432109",
            email: "jane@example.com",
            service: "Pilot Training (CPL)",
            message: "How much does it cost?",
          }),
        ]);
      }
    })
    .catch((err) => {
      console.warn("⚠️ Seed data skipped:", err.message);
    });

  return httpServer;
}
