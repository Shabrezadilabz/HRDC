import { z } from 'zod';
import { 
  insertEnquirySchema, 
  insertScholarshipSchema, 
  insertStudentExamRegisterSchema, 
  insertVisitorDetailsSchema,
  type Enquiry, 
  type ScholarshipRegistration,
  type StudentExamRegister,
  type VisitorDetails
} from './schema';

export * from './schema';

export const errorSchemas = {
  validation: z.object({
    message: z.string(),
    field: z.string().optional(),
  }),
  notFound: z.object({
    message: z.string(),
  }),
  internal: z.object({
    message: z.string(),
  }),
};

export const api = {
  scholarship: {
    create: {
      method: 'POST' as const,
      path: '/api/scholarship-registrations',
      input: insertScholarshipSchema,
      responses: {
        201: z.custom<ScholarshipRegistration>(),
        400: errorSchemas.validation,
      },
    },
    list: {
      method: 'GET' as const,
      path: '/api/scholarship-registrations',
      responses: {
        200: z.array(z.custom<ScholarshipRegistration>()),
      },
    },
  },
  studentExamRegister: {
    create: {
      method: 'POST' as const,
      path: '/api/student-exam-register',
      input: insertStudentExamRegisterSchema,
      responses: {
        201: z.custom<StudentExamRegister>(),
        400: errorSchemas.validation,
      },
    },
    list: {
      method: 'GET' as const,
      path: '/api/student-exam-register',
      responses: {
        200: z.array(z.custom<StudentExamRegister>()),
      },
    },
  },
  enquiries: {
    create: {
      method: 'POST' as const,
      path: '/api/enquiries',
      input: insertEnquirySchema,
      responses: {
        201: z.custom<Enquiry>(),
        400: errorSchemas.validation,
      },
    },
    list: {
      method: 'GET' as const,
      path: '/api/enquiries',
      responses: {
        200: z.array(z.custom<Enquiry>()),
      },
    },
  },
  visitorTrack: {
    create: {
      method: 'POST' as const,
      path: '/api/visitor-track',
      input: insertVisitorDetailsSchema,
      responses: {
        201: z.custom<VisitorDetails>(),
        400: errorSchemas.validation,
      },
    },
    list: {
      method: 'GET' as const,
      path: '/api/visitors',
      responses: {
        200: z.array(z.custom<VisitorDetails>()),
      },
    },
    stats: {
      method: 'GET' as const,
      path: '/api/visitor-stats',
      responses: {
        200: z.object({
          totalVisitors: z.number(),
          uniqueVisitors: z.number(),
          totalVisits: z.number(),
        }),
      },
    },
  },
};

export function buildUrl(path: string, params?: Record<string, string | number>): string {
  let url = path;
  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      if (url.includes(`:${key}`)) {
        url = url.replace(`:${key}`, String(value));
      }
    });
  }
  return url;
}
