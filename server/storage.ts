import {
  Enquiry,
  ScholarshipRegistration,
  StudentExamRegister,
  VisitorDetails,
  type InsertEnquiry,
  type InsertScholarshipRegistration,
  type InsertStudentExamRegister,
  type InsertVisitorDetails,
  type IEnquiry,
  type IScholarshipRegistration,
  type IStudentExamRegister,
  type IVisitorDetails,
} from "@shared/schema";

export interface IStorage {
  createEnquiry(enquiry: InsertEnquiry): Promise<IEnquiry>;
  getEnquiries(): Promise<IEnquiry[]>;
  createScholarshipRegistration(registration: InsertScholarshipRegistration): Promise<IScholarshipRegistration>;
  getScholarshipRegistrations(): Promise<IScholarshipRegistration[]>;
  createStudentExamRegister(registration: InsertStudentExamRegister): Promise<IStudentExamRegister>;
  getStudentExamRegisters(): Promise<IStudentExamRegister[]>;
  createOrUpdateVisitor(visitor: InsertVisitorDetails): Promise<IVisitorDetails>;
  getVisitors(): Promise<IVisitorDetails[]>;
}

export class DatabaseStorage implements IStorage {
  async createEnquiry(enquiry: InsertEnquiry): Promise<IEnquiry> {
    const created = await Enquiry.create(enquiry);
    return created;
  }

  async getEnquiries(): Promise<IEnquiry[]> {
    return await Enquiry.find().sort({ createdAt: -1 }).exec();
  }

  async createScholarshipRegistration(registration: InsertScholarshipRegistration): Promise<IScholarshipRegistration> {
    const created = await ScholarshipRegistration.create(registration);
    return created;
  }

  async getScholarshipRegistrations(): Promise<IScholarshipRegistration[]> {
    return await ScholarshipRegistration.find().sort({ createdAt: -1 }).exec();
  }

  async createStudentExamRegister(registration: InsertStudentExamRegister): Promise<IStudentExamRegister> {
    const created = await StudentExamRegister.create(registration);
    return created;
  }

  async getStudentExamRegisters(): Promise<IStudentExamRegister[]> {
    return await StudentExamRegister.find().sort({ createdAt: -1 }).exec();
  }

  async createOrUpdateVisitor(visitorData: InsertVisitorDetails): Promise<IVisitorDetails> {
    const { sessionId, ipAddress, email } = visitorData;
    
    // Try to find existing visitor by sessionId, email, or IP
    let visitor = null;
    if (sessionId) {
      visitor = await VisitorDetails.findOne({ sessionId });
    } else if (email) {
      visitor = await VisitorDetails.findOne({ email });
    } else if (ipAddress) {
      visitor = await VisitorDetails.findOne({ ipAddress });
    }

    if (visitor) {
      // Update existing visitor
      visitor.visitCount += 1;
      visitor.lastVisit = new Date();
      if (visitorData.name) visitor.name = visitorData.name;
      if (visitorData.email) visitor.email = visitorData.email;
      if (visitorData.phone) visitor.phone = visitorData.phone;
      if (visitorData.userAgent) visitor.userAgent = visitorData.userAgent;
      if (visitorData.browser) visitor.browser = visitorData.browser;
      if (visitorData.os) visitor.os = visitorData.os;
      if (visitorData.device) visitor.device = visitorData.device;
      if (visitorData.country) visitor.country = visitorData.country;
      if (visitorData.city) visitor.city = visitorData.city;
      
      return await visitor.save();
    } else {
      // Create new visitor
      return await VisitorDetails.create(visitorData);
    }
  }

  async getVisitors(): Promise<IVisitorDetails[]> {
    return await VisitorDetails.find().sort({ lastVisit: -1 }).exec();
  }
}

export const storage = new DatabaseStorage();
