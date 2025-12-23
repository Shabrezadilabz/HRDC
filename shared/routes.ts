import { z } from 'zod';
import { insertEnquirySchema, insertScholarshipSchema, enquiries, scholarshipRegistrations } from './schema';

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
        201: z.custom<typeof scholarshipRegistrations.$inferSelect>(),
        400: errorSchemas.validation,
      },
    },
    list: {
      method: 'GET' as const,
      path: '/api/scholarship-registrations',
      responses: {
        200: z.array(z.custom<typeof scholarshipRegistrations.$inferSelect>()),
      },
    },
  },
  enquiries: {
    create: {
      method: 'POST' as const,
      path: '/api/enquiries',
      input: insertEnquirySchema,
      responses: {
        201: z.custom<typeof enquiries.$inferSelect>(),
        400: errorSchemas.validation,
      },
    },
    list: {
      method: 'GET' as const,
      path: '/api/enquiries',
      responses: {
        200: z.array(z.custom<typeof enquiries.$inferSelect>()),
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
