import mongoose, { Schema, Document } from "mongoose";
import { z } from "zod";

// Scholarship Registration Schema
export interface IScholarshipRegistration extends Document {
  name: string;
  stream: string;
  city: string;
  phone: string;
  createdAt: Date;
}

const scholarshipRegistrationSchema = new Schema<IScholarshipRegistration>({
  name: { type: String, required: true },
  stream: { type: String, required: true },
  city: { type: String, required: true },
  phone: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

export const ScholarshipRegistration = mongoose.model<IScholarshipRegistration>(
  "ScholarshipRegistration",
  scholarshipRegistrationSchema
);

// Student Exam Registration Schema (NEW)
export interface IStudentExamRegister extends Document {
  name: string;
  email: string;
  phone: string;
  course: string;
  educationLevel: string;
  city?: string;
  state?: string;
  examDate?: Date;
  preferredTime?: string;
  createdAt: Date;
}

const studentExamRegisterSchema = new Schema<IStudentExamRegister>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  course: { type: String, required: true },
  educationLevel: { type: String, required: true },
  city: { type: String },
  state: { type: String },
  examDate: { type: Date },
  preferredTime: { type: String },
  createdAt: { type: Date, default: Date.now }
});

export const StudentExamRegister = mongoose.model<IStudentExamRegister>(
  "students_exams_register",
  studentExamRegisterSchema
);

// Visitor Details Schema (NEW)
export interface IVisitorDetails extends Document {
  name?: string;
  email?: string;
  phone?: string;
  ipAddress?: string;
  userAgent?: string;
  browser?: string;
  os?: string;
  device?: string;
  country?: string;
  city?: string;
  sessionId?: string;
  visitCount: number;
  firstVisit: Date;
  lastVisit: Date;
  createdAt: Date;
}

const visitorDetailsSchema = new Schema<IVisitorDetails>({
  name: { type: String },
  email: { type: String },
  phone: { type: String },
  ipAddress: { type: String },
  userAgent: { type: String },
  browser: { type: String },
  os: { type: String },
  device: { type: String },
  country: { type: String },
  city: { type: String },
  sessionId: { type: String },
  visitCount: { type: Number, default: 1 },
  firstVisit: { type: Date, default: Date.now },
  lastVisit: { type: Date, default: Date.now },
  createdAt: { type: Date, default: Date.now }
});

export const VisitorDetails = mongoose.model<IVisitorDetails>(
  "visit_ppl_details",
  visitorDetailsSchema
);

// Enquiry Schema
export interface IEnquiry extends Document {
  name: string;
  phone: string;
  email: string;
  service: string;
  message?: string;
  createdAt: Date;
}

const enquirySchema = new Schema<IEnquiry>({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true },
  service: { type: String, required: true },
  message: { type: String },
  createdAt: { type: Date, default: Date.now },
});

export const Enquiry = mongoose.model<IEnquiry>("Enquiry", enquirySchema);

// Zod schemas for validation
export const insertScholarshipSchema = z.object({
  name: z.string().min(1, "Name is required"),
  stream: z.string().min(1, "Stream is required"),
  city: z.string().min(1, "City is required"),
  phone: z.string().min(1, "Phone is required"),
});

export const insertStudentExamRegisterSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  course: z.string().min(1, "Course selection is required"),
  educationLevel: z.string().min(1, "Education level is required"),
  city: z.string().optional(),
  state: z.string().optional(),
  examDate: z.string().optional(),
  preferredTime: z.string().optional(),
});

export const insertVisitorDetailsSchema = z.object({
  name: z.string().optional(),
  email: z.string().optional(),
  phone: z.string().optional(),
  ipAddress: z.string().optional(),
  userAgent: z.string().optional(),
  browser: z.string().optional(),
  os: z.string().optional(),
  device: z.string().optional(),
  country: z.string().optional(),
  city: z.string().optional(),
  sessionId: z.string().optional(),
});

export const insertEnquirySchema = z.object({
  name: z.string().min(1, "Name is required"),
  phone: z.string().min(1, "Phone is required"),
  email: z.string().email("Invalid email address"),
  service: z.string().min(1, "Service is required"),
  message: z.string().optional(),
});

export type ScholarshipRegistration = IScholarshipRegistration;
export type InsertScholarshipRegistration = z.infer<typeof insertScholarshipSchema>;

export type StudentExamRegister = IStudentExamRegister;
export type InsertStudentExamRegister = z.infer<typeof insertStudentExamRegisterSchema>;

export type VisitorDetails = IVisitorDetails;
export type InsertVisitorDetails = z.infer<typeof insertVisitorDetailsSchema>;

export type Enquiry = IEnquiry;
export type InsertEnquiry = z.infer<typeof insertEnquirySchema>;
