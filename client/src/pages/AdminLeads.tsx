import { useScholarshipRegistrations, useEnquiries } from "@/hooks/use-leads";
import { Loader2, Users, FileQuestion, Download } from "lucide-react";
import { Link } from "wouter";

export default function AdminLeads() {
  const { data: scholarships, isLoading: isLoadingSch } = useScholarshipRegistrations();
  const { data: enquiries, isLoading: isLoadingEnq } = useEnquiries();

  if (isLoadingSch || isLoadingEnq) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Loader2 className="w-10 h-10 text-primary animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-display font-bold text-white">Admin Dashboard</h1>
          <Link href="/" className="text-primary hover:underline">Back to Website</Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Scholarships Card */}
          <div className="bg-card border border-white/10 rounded-xl overflow-hidden">
            <div className="p-6 border-b border-white/10 flex justify-between items-center bg-white/5">
              <div className="flex items-center gap-3">
                <Users className="w-5 h-5 text-primary" />
                <h2 className="text-xl font-bold text-white">Scholarship Registrations</h2>
              </div>
              <span className="text-sm bg-primary/20 text-primary px-3 py-1 rounded-full">
                {scholarships?.length || 0} Leads
              </span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left text-muted-foreground">
                <thead className="text-xs text-white uppercase bg-white/5">
                  <tr>
                    <th className="px-6 py-3">Name</th>
                    <th className="px-6 py-3">Phone</th>
                    <th className="px-6 py-3">Stream</th>
                    <th className="px-6 py-3">City</th>
                  </tr>
                </thead>
                <tbody>
                  {scholarships?.map((lead) => (
                    <tr key={lead.id} className="border-b border-white/5 hover:bg-white/5">
                      <td className="px-6 py-4 font-medium text-white">{lead.name}</td>
                      <td className="px-6 py-4">{lead.phone}</td>
                      <td className="px-6 py-4">{lead.stream}</td>
                      <td className="px-6 py-4">{lead.city}</td>
                    </tr>
                  ))}
                  {scholarships?.length === 0 && (
                    <tr>
                      <td colSpan={4} className="px-6 py-8 text-center text-muted-foreground">
                        No registrations yet.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>

          {/* Enquiries Card */}
          <div className="bg-card border border-white/10 rounded-xl overflow-hidden">
            <div className="p-6 border-b border-white/10 flex justify-between items-center bg-white/5">
              <div className="flex items-center gap-3">
                <FileQuestion className="w-5 h-5 text-blue-400" />
                <h2 className="text-xl font-bold text-white">General Enquiries</h2>
              </div>
              <span className="text-sm bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full">
                {enquiries?.length || 0} Leads
              </span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left text-muted-foreground">
                <thead className="text-xs text-white uppercase bg-white/5">
                  <tr>
                    <th className="px-6 py-3">Name</th>
                    <th className="px-6 py-3">Contact</th>
                    <th className="px-6 py-3">Interest</th>
                  </tr>
                </thead>
                <tbody>
                  {enquiries?.map((lead) => (
                    <tr key={lead.id} className="border-b border-white/5 hover:bg-white/5">
                      <td className="px-6 py-4 font-medium text-white">
                        {lead.name}
                        <div className="text-xs text-muted-foreground">{lead.email}</div>
                      </td>
                      <td className="px-6 py-4">{lead.phone}</td>
                      <td className="px-6 py-4">
                        <span className="bg-white/10 px-2 py-1 rounded text-xs text-white">
                          {lead.service}
                        </span>
                      </td>
                    </tr>
                  ))}
                  {enquiries?.length === 0 && (
                    <tr>
                      <td colSpan={3} className="px-6 py-8 text-center text-muted-foreground">
                        No enquiries yet.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
