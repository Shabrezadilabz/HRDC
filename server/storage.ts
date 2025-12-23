import { db } from "./db";
import {
  enquiries,
  scholarshipRegistrations,
  type InsertEnquiry,
  type InsertScholarshipRegistration,
  type Enquiry,
  type ScholarshipRegistration,
} from "@shared/schema";
import { desc } from "drizzle-orm";

export interface IStorage {
  createEnquiry(enquiry: InsertEnquiry): Promise<Enquiry>;
  getEnquiries(): Promise<Enquiry[]>;
  createScholarshipRegistration(registration: InsertScholarshipRegistration): Promise<ScholarshipRegistration>;
  getScholarshipRegistrations(): Promise<ScholarshipRegistration[]>;
}

export class DatabaseStorage implements IStorage {
  async createEnquiry(enquiry: InsertEnquiry): Promise<Enquiry> {
    const [created] = await db.insert(enquiries).values(enquiry).returning();
    return created;
  }

  async getEnquiries(): Promise<Enquiry[]> {
    return await db.select().from(enquiries).orderBy(desc(enquiries.createdAt));
  }

  async createScholarshipRegistration(registration: InsertScholarshipRegistration): Promise<ScholarshipRegistration> {
    const [created] = await db.insert(scholarshipRegistrations).values(registration).returning();
    return created;
  }

  async getScholarshipRegistrations(): Promise<ScholarshipRegistration[]> {
    return await db.select().from(scholarshipRegistrations).orderBy(desc(scholarshipRegistrations.createdAt));
  }
}

export const storage = new DatabaseStorage();
