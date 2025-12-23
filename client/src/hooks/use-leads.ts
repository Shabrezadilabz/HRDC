import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { api, type InsertScholarshipRegistration, type InsertEnquiry } from "@shared/routes";
import { useToast } from "@/hooks/use-toast";

// ============================================
// SCHOLARSHIP HOOKS
// ============================================

export function useScholarshipRegistrations() {
  return useQuery({
    queryKey: [api.scholarship.list.path],
    queryFn: async () => {
      const res = await fetch(api.scholarship.list.path);
      if (!res.ok) throw new Error("Failed to fetch registrations");
      return api.scholarship.list.responses[200].parse(await res.json());
    },
  });
}

export function useRegisterScholarship() {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  return useMutation({
    mutationFn: async (data: InsertScholarshipRegistration) => {
      const res = await fetch(api.scholarship.create.path, {
        method: api.scholarship.create.method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      
      if (!res.ok) {
        if (res.status === 400) {
          const error = api.scholarship.create.responses[400].parse(await res.json());
          throw new Error(error.message);
        }
        throw new Error("Failed to register");
      }
      return api.scholarship.create.responses[201].parse(await res.json());
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [api.scholarship.list.path] });
      toast({
        title: "Registration Successful!",
        description: "Good luck on your scholarship exam.",
        className: "bg-green-600 text-white border-none",
      });
    },
    onError: (error) => {
      toast({
        title: "Registration Failed",
        description: error.message,
        variant: "destructive",
      });
    },
  });
}

// ============================================
// ENQUIRY HOOKS
// ============================================

export function useEnquiries() {
  return useQuery({
    queryKey: [api.enquiries.list.path],
    queryFn: async () => {
      const res = await fetch(api.enquiries.list.path);
      if (!res.ok) throw new Error("Failed to fetch enquiries");
      return api.enquiries.list.responses[200].parse(await res.json());
    },
  });
}

export function useCreateEnquiry() {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  return useMutation({
    mutationFn: async (data: InsertEnquiry) => {
      const res = await fetch(api.enquiries.create.path, {
        method: api.enquiries.create.method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        if (res.status === 400) {
          const error = api.enquiries.create.responses[400].parse(await res.json());
          throw new Error(error.message);
        }
        throw new Error("Failed to submit enquiry");
      }
      return api.enquiries.create.responses[201].parse(await res.json());
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [api.enquiries.list.path] });
      toast({
        title: "Enquiry Sent",
        description: "Our admissions team will contact you shortly.",
        className: "bg-primary text-primary-foreground border-none",
      });
    },
    onError: (error) => {
      toast({
        title: "Submission Failed",
        description: error.message,
        variant: "destructive",
      });
    },
  });
}
