import { pgTable, text, serial, timestamp, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const scholarshipRegistrations = pgTable("scholarship_registrations", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  stream: text("stream").notNull(), // 12th Grade Stream (MPC/BiPC/etc.)
  city: text("city").notNull(),
  phone: text("phone").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const enquiries = pgTable("enquiries", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  phone: text("phone").notNull(),
  email: text("email").notNull(),
  service: text("service").notNull(), // Selected Course/Service
  message: text("message"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertScholarshipSchema = createInsertSchema(scholarshipRegistrations).omit({
  id: true,
  createdAt: true,
});

export const insertEnquirySchema = createInsertSchema(enquiries).omit({
  id: true,
  createdAt: true,
});

export type ScholarshipRegistration = typeof scholarshipRegistrations.$inferSelect;
export type InsertScholarshipRegistration = z.infer<typeof insertScholarshipSchema>;

export type Enquiry = typeof enquiries.$inferSelect;
export type InsertEnquiry = z.infer<typeof insertEnquirySchema>;
