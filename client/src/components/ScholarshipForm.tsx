import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertScholarshipSchema, type InsertScholarshipRegistration } from "@shared/routes";
import { useRegisterScholarship } from "@/hooks/use-leads";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { motion } from "framer-motion";
import { Loader2, Sparkles } from "lucide-react";

export function ScholarshipForm() {
  const mutation = useRegisterScholarship();

  const form = useForm<InsertScholarshipRegistration>({
    resolver: zodResolver(insertScholarshipSchema),
    defaultValues: {
      name: "",
      stream: "",
      city: "",
      phone: "",
    },
  });

  const onSubmit = (data: InsertScholarshipRegistration) => {
    mutation.mutate(data, {
      onSuccess: () => form.reset(),
    });
  };

  return (
    <div className="glass p-8 rounded-2xl border-t-4 border-primary shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-[60px] rounded-full pointer-events-none" />

      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-2">
          <Sparkles className="w-5 h-5 text-primary animate-pulse" />
          <h3 className="text-xl font-bold text-white font-display uppercase tracking-wider">
            Register Now
          </h3>
        </div>
        <p className="text-muted-foreground mb-6 text-sm">
          Secure your seat for the National Aviation Scholarship Exam 2024-25.
        </p>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white/80">Full Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your full name" className="bg-background/50 border-white/10 text-white focus:border-primary/50" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="stream"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white/80">12th Grade Stream</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="bg-background/50 border-white/10 text-white focus:border-primary/50">
                        <SelectValue placeholder="Select stream" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="MPC">MPC (Maths, Physics, Chem)</SelectItem>
                      <SelectItem value="BiPC">BiPC (Biology, Physics, Chem)</SelectItem>
                      <SelectItem value="CEC">CEC (Commerce)</SelectItem>
                      <SelectItem value="Other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="city"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white/80">City</FormLabel>
                    <FormControl>
                      <Input placeholder="City" className="bg-background/50 border-white/10 text-white focus:border-primary/50" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white/80">Phone</FormLabel>
                    <FormControl>
                      <Input placeholder="Mobile Number" className="bg-background/50 border-white/10 text-white focus:border-primary/50" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <Button
              type="submit"
              disabled={mutation.isPending}
              className="w-full h-12 mt-4 bg-gradient-to-r from-primary to-yellow-500 hover:from-yellow-400 hover:to-yellow-600 text-primary-foreground font-bold text-lg shadow-lg hover:shadow-primary/30 transition-all duration-300"
            >
              {mutation.isPending ? (
                <>
                  <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                  Processing...
                </>
              ) : (
                "Register for Exam"
              )}
            </Button>
            
            <p className="text-xs text-center text-white/40 mt-4">
              Limited seats available. Registration closes soon.
            </p>
          </form>
        </Form>
      </div>
    </div>
  );
}
