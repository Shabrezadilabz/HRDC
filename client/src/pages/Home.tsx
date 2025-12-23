import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ScholarshipForm } from "@/components/ScholarshipForm";
import { ServiceCard } from "@/components/ServiceCard";
import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown, Timer, Trophy, Globe, Plane, GraduationCap } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertEnquirySchema, type InsertEnquiry } from "@shared/routes";
import { useCreateEnquiry } from "@/hooks/use-leads";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Loader2 } from "lucide-react";

// Countdown Timer Component
const CountdownTimer = () => (
  <div className="flex gap-4 text-white text-center">
    {[
      { val: "04", label: "Days" },
      { val: "12", label: "Hours" },
      { val: "45", label: "Mins" },
    ].map((item, i) => (
      <div key={i} className="bg-black/40 backdrop-blur-sm border border-primary/30 rounded-lg p-3 min-w-[70px]">
        <div className="text-2xl font-bold font-mono text-primary">{item.val}</div>
        <div className="text-[10px] uppercase tracking-wider opacity-70">{item.label}</div>
      </div>
    ))}
  </div>
);

// Marquee Component
const Marquee = () => (
  <div className="bg-primary text-primary-foreground py-2 overflow-hidden whitespace-nowrap relative z-40">
    <motion.div
      animate={{ x: [0, -1000] }}
      transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
      className="inline-block font-bold text-sm tracking-wide"
    >
      HURRY UP • LIMITED SEATS AVAILABLE FOR SCHOLARSHIP EXAM • REGISTER TODAY TO SECURE YOUR FUTURE • 100% PLACEMENT ASSISTANCE • WORLD CLASS INFRASTRUCTURE • 
      HURRY UP • LIMITED SEATS AVAILABLE FOR SCHOLARSHIP EXAM • REGISTER TODAY TO SECURE YOUR FUTURE • 100% PLACEMENT ASSISTANCE • WORLD CLASS INFRASTRUCTURE •
    </motion.div>
  </div>
);

export default function Home() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  // Enquiry Form Logic
  const enquiryMutation = useCreateEnquiry();
  const enquiryForm = useForm<InsertEnquiry>({
    resolver: zodResolver(insertEnquirySchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      service: "",
      message: "",
    },
  });

  const onEnquirySubmit = (data: InsertEnquiry) => {
    enquiryMutation.mutate(data, {
      onSuccess: () => enquiryForm.reset(),
    });
  };

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      
      {/* HERO SECTION */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Parallax Background */}
        <motion.div 
          style={{ y: y1 }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/40 to-background z-10" />
          {/* Using Unsplash image for Hero - Plane in sky */}
          <img 
            src="https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?auto=format&fit=crop&q=80&w=2000" 
            alt="Hero Background" 
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Hero Content */}
        <div className="container mx-auto px-4 relative z-20 pt-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 border border-primary/30 text-primary text-sm font-semibold mb-6">
                <Trophy className="w-4 h-4" />
                <span>#1 Aviation Academy in India</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-display font-bold text-white leading-tight mb-6">
                Let Your Dreams <br />
                <span className="text-gradient">Be Your Wings</span>
              </h1>
              <p className="text-lg text-white/80 mb-8 max-w-xl leading-relaxed">
                Join the elite league of aviation professionals. We provide world-class training in piloting, engineering, and management to help you soar higher.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-primary hover:bg-yellow-400 text-primary-foreground font-bold h-14 px-8 rounded-xl shadow-lg shadow-primary/25">
                  Start Your Journey
                </Button>
                <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 h-14 px-8 rounded-xl backdrop-blur-sm">
                  Explore Courses
                </Button>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hidden lg:block relative"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-yellow-600 rounded-2xl blur opacity-30 animate-pulse" />
              <div className="relative">
                {/* Scholarship Card acts as Hero Image overlay content */}
                <ScholarshipForm />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          style={{ opacity }}
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50"
        >
          <ChevronDown className="w-8 h-8" />
        </motion.div>
      </section>

      <Marquee />

      {/* SCHOLARSHIP SECTION (Mobile/Tablet specific focus or secondary placement) */}
      <section id="scholarship" className="py-20 bg-gradient-to-b from-background to-slate-900 relative">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-primary/10 to-transparent border border-primary/20 rounded-3xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[100px] rounded-full" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
              <div>
                <div className="flex items-center gap-3 mb-4 text-primary font-bold tracking-wider uppercase text-sm">
                  <Timer className="w-5 h-5" />
                  <span>Limited Time Offer</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
                  National Aviation <br /><span className="text-primary">Scholarship Exam</span>
                </h2>
                <p className="text-muted-foreground mb-8 text-lg">
                  Get up to 100% scholarship on tuition fees. Top performers get direct placement opportunities with partner airlines.
                </p>
                <CountdownTimer />
              </div>
              <div className="lg:hidden">
                {/* Visible only on small screens where hero form is hidden */}
                <ScholarshipForm />
              </div>
              <div className="hidden lg:block">
                 {/* Visual element for desktop scholarship section since form is in hero */}
                 <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
                    {/* Unsplash image - Student studying/exam */}
                    <img 
                      src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=1000" 
                      alt="Student" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-8">
                      <p className="text-white font-medium italic">"The scholarship changed my life. I'm now a commercial pilot." - Rahul S.</p>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ACADEMIC HUB */}
      <section id="courses" className="py-24 bg-background relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">Academic Hub</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6" />
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive courses designed by industry experts to launch your career in the skies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ServiceCard 
              title="Commercial Pilot (CPL)" 
              description="Comprehensive ground classes and flying training to earn your Commercial Pilot License with DGCA standards."
              icon="pilot"
              delay={0.1}
            />
            <ServiceCard 
              title="BBA Aviation" 
              description="A 3-year degree program combining management principles with specialized aviation industry knowledge."
              icon="degree"
              delay={0.2}
            />
            <ServiceCard 
              title="Aircraft Maintenance" 
              description="Become a licensed Aircraft Maintenance Engineer (AME). Learn to service and repair aircraft systems."
              icon="engineer"
              delay={0.3}
            />
            <ServiceCard 
              title="Aeronautical Engineering" 
              description="Deep dive into the design, manufacturing, and testing of aircraft and spacecraft systems."
              icon="engineer"
              delay={0.4}
            />
            <ServiceCard 
              title="MBBS Abroad" 
              description="Specialized guidance for medical aspirants looking to study in top universities worldwide."
              icon="medical"
              delay={0.5}
            />
            <ServiceCard 
              title="Study Abroad" 
              description="Visa counseling and admission assistance for USA, UK, Canada, Australia, and Germany."
              icon="global"
              delay={0.6}
            />
          </div>
        </div>
      </section>

      {/* GLOBAL PRESENCE */}
      <section id="abroad" className="py-24 bg-slate-900/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-2">Study Internationally</h2>
              <p className="text-muted-foreground">Gateway to global universities</p>
            </div>
            <Button variant="outline" className="mt-4 md:mt-0 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              View All Countries
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {['USA', 'UK', 'Canada', 'Australia', 'Germany', 'Russia'].map((country, idx) => (
              <motion.div
                key={country}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group relative aspect-[3/4] rounded-xl overflow-hidden cursor-pointer"
              >
                {/* Placeholder images for countries - using colored gradients for abstract look if specific images not avail, 
                    but let's try to use generic city/country vibes from Unsplash */}
                <img 
                  src={`https://source.unsplash.com/random/400x600?${country},landmark`} // Note: source.unsplash is deprecated but good for quick mockups. 
                  // Better to use static URLs. I'll use a reliable fallback pattern or solid colors if needed.
                  // Switching to specific Unsplash IDs for reliability
                  srcSet={`
                    ${country === 'USA' ? 'https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=400&q=80' : ''}
                    ${country === 'UK' ? 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=400&q=80' : ''}
                    ${country === 'Canada' ? 'https://images.unsplash.com/photo-1517935706615-2717063c2225?w=400&q=80' : ''}
                    ${country === 'Australia' ? 'https://images.unsplash.com/photo-1523482580672-01e6f06378c5?w=400&q=80' : ''}
                    ${country === 'Germany' ? 'https://images.unsplash.com/photo-1467269204594-9661b133dd2b?w=400&q=80' : ''}
                    ${country === 'Russia' ? 'https://images.unsplash.com/photo-1513326738677-b964603b136d?w=400&q=80' : ''}
                  `}
                  alt={country}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent p-4 flex flex-col justify-end">
                  <h3 className="text-white font-bold font-display">{country}</h3>
                  <p className="text-xs text-white/70 h-0 overflow-hidden group-hover:h-auto transition-all duration-300">
                    Top Universities & Visa Support
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-24 relative overflow-hidden">
        {/* Decorative background element */}
        <div className="absolute -left-20 top-20 w-96 h-96 bg-primary/5 rounded-full blur-[100px]" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto glass rounded-3xl p-8 md:p-12 border border-white/10">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-display font-bold text-white mb-4">Get In Touch</h2>
              <p className="text-muted-foreground">Have questions about our courses or admission process?</p>
            </div>

            <Form {...enquiryForm}>
              <form onSubmit={enquiryForm.handleSubmit(onEnquirySubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={enquiryForm.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Your Name" className="bg-white/5 border-white/10 text-white" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={enquiryForm.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">Phone</FormLabel>
                        <FormControl>
                          <Input placeholder="Mobile Number" className="bg-white/5 border-white/10 text-white" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={enquiryForm.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">Email</FormLabel>
                        <FormControl>
                          <Input placeholder="Email Address" className="bg-white/5 border-white/10 text-white" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={enquiryForm.control}
                    name="service"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">Interested Course</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="bg-white/5 border-white/10 text-white">
                              <SelectValue placeholder="Select Course" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="CPL">Commercial Pilot Training</SelectItem>
                            <SelectItem value="BBA">BBA Aviation</SelectItem>
                            <SelectItem value="AME">Aircraft Maintenance</SelectItem>
                            <SelectItem value="Eng">Aeronautical Engineering</SelectItem>
                            <SelectItem value="StudyAbroad">Study Abroad</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={enquiryForm.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Message (Optional)</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Any specific questions?" className="bg-white/5 border-white/10 text-white min-h-[100px]" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button 
                  type="submit" 
                  disabled={enquiryMutation.isPending}
                  className="w-full bg-white text-black hover:bg-gray-200 font-bold h-12"
                >
                  {enquiryMutation.isPending ? <Loader2 className="w-5 h-5 animate-spin" /> : "Submit Enquiry"}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </section>

      <Footer />
      
      {/* Mobile Sticky Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-background/90 backdrop-blur-lg border-t border-white/10 p-3 z-50 flex justify-between gap-2">
        <Button className="flex-1 bg-green-600 hover:bg-green-700 text-white text-xs h-10">WhatsApp</Button>
        <Button className="flex-1 bg-primary hover:bg-yellow-500 text-primary-foreground text-xs h-10">Call Now</Button>
      </div>
    </div>
  );
}
