import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ScholarshipForm } from "@/components/ScholarshipForm";
import { ServiceCard } from "@/components/ServiceCard";
import { CourseModal } from "@/components/CourseModal";
import { AchievementsCarousel } from "@/components/AchievementsCarousel";
import { CookieConsent } from "@/components/CookieConsent";
import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown, Timer, Trophy, Globe, Plane, GraduationCap, Award, Building2, MessageCircle } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertEnquirySchema, type InsertEnquiry } from "@shared/routes";
import { useCreateEnquiry } from "@/hooks/use-leads";
import { useVisitorTracking, updateVisitorDetails } from "@/hooks/use-visitor-tracking";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Loader2 } from "lucide-react";
import { useState, useEffect } from "react";
import { CourseDetail, courses } from "@/data/courses";

// Dynamic Countdown Timer Component
const CountdownTimer = () => {
  const [time, setTime] = useState({
    days: 4,
    hours: 12,
    mins: 45,
    secs: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prevTime) => {
        let { days, hours, mins, secs } = prevTime;
        
        if (secs > 0) {
          secs--;
        } else if (mins > 0) {
          mins--;
          secs = 59;
        } else if (hours > 0) {
          hours--;
          mins = 59;
          secs = 59;
        } else if (days > 0) {
          days--;
          hours = 23;
          mins = 59;
          secs = 59;
        }
        
        return { days, hours, mins, secs };
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const padZero = (num: number) => String(num).padStart(2, '0');

  return (
    <div className="flex gap-4 text-white text-center">
      {[
        { val: padZero(time.days), label: "Days" },
        { val: padZero(time.hours), label: "Hours" },
        { val: padZero(time.mins), label: "Mins" },
        { val: padZero(time.secs), label: "Secs" },
      ].map((item, i) => (
        <div key={i} className="bg-black/40 backdrop-blur-sm border border-primary/30 rounded-lg p-3 min-w-[70px]">
          <div className="text-2xl font-bold font-mono text-primary">{item.val}</div>
          <div className="text-[10px] uppercase tracking-wider opacity-70">{item.label}</div>
        </div>
      ))}
    </div>
  );
};

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
  
  // Track visitor on page load
  useVisitorTracking();
  
  // Course modal state
  const [selectedCourse, setSelectedCourse] = useState<CourseDetail | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleLearnMore = (course: CourseDetail) => {
    setSelectedCourse(course);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    // Clear selected course after animation
    setTimeout(() => setSelectedCourse(null), 300);
  };

  // Country images mapping for Study International section
  const getCountryImage = (country: string): string => {
    const countryImages: Record<string, string> = {
      'USA': 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&q=80&w=1200',
      'UK': 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&q=80&w=1200',
      'Canada': 'https://images.unsplash.com/photo-1517935706615-2717063c2225?auto=format&fit=crop&q=80&w=1200',
      'Australia': 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&q=80&w=1200',
      'Germany': 'https://images.unsplash.com/photo-1467269204594-9661b133dd2b?auto=format&fit=crop&q=80&w=1200',
      'Russia': 'https://images.unsplash.com/photo-1513326738677-b964603b136d?auto=format&fit=crop&q=80&w=1200',
    };
    return countryImages[country] || 'https://images.unsplash.com/photo-1485738422979-f5c462d49f74?auto=format&fit=crop&q=80&w=1200';
  };
  
  // Hero Background Carousel - Aviation Education, Scholarships, and Student Success
  const heroImages = [
    "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=2000", // Students studying
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=2000", // Group of students
    "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=2000", // Education/classroom
    "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=2000", // Aviation/airport
    "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=2000", // Airport scene
    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=2000", // Students learning
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

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
      onSuccess: () => {
        enquiryForm.reset();
        // Update visitor details with form data
        updateVisitorDetails({
          name: data.name,
          email: data.email,
          phone: data.phone,
        });
      },
    });
  };

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      
      {/* Cookie Consent Banner */}
      <CookieConsent />
      
      {/* HERO SECTION */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Rotating Parallax Background */}
        <motion.div 
          style={{ y: y1 }}
          className="absolute inset-0 z-0"
          key={currentImageIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/40 to-background z-10" />
          <img 
            src={heroImages[currentImageIndex]} 
            alt="Hero Background" 
            className="w-full h-full object-cover"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              // Fallback to a working image
              target.src = 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=2000';
            }}
            loading="eager"
            key={currentImageIndex}
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
              {/* Andhra Govt Collaboration Badge */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-gradient-to-r from-green-600/40 via-green-500/30 to-green-400/20 border-2 border-green-400/60 text-white text-sm font-bold mb-4 backdrop-blur-md shadow-xl shadow-green-500/30 hover:shadow-green-500/50 transition-all duration-300"
              >
                <div className="flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-green-300" />
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-green-200 font-semibold">In Collaboration with</span>
                  <span className="text-white font-extrabold text-base">ANDHRA PRADESH GOVERNMENT</span>
                  <Award className="w-4 h-4 text-yellow-400" />
                </div>
              </motion.div>

              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 border border-primary/30 text-primary text-sm font-semibold mb-6">
                <Trophy className="w-4 h-4" />
                <span>#1 Aviation Academy in India</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-display font-bold text-white leading-tight mb-6">
                Let Your Dreams <br />
                <span className="text-gradient">Be Your Wings</span>
              </h1>
              
              <p className="text-lg text-white/80 mb-4 max-w-xl leading-relaxed">
                Join the elite league of aviation professionals. We provide world-class training in piloting, engineering, and management to help you soar higher.
              </p>

              {/* Scholarship Highlight */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mb-8 p-4 rounded-xl bg-gradient-to-r from-primary/20 via-primary/10 to-transparent border border-primary/30 backdrop-blur-sm"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/30">
                    <GraduationCap className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-white font-bold text-lg">Spreading Our Wings for Your Future</p>
                    <p className="text-white/70 text-sm">Up to 100% Scholarships Available • Government Supported Programs</p>
                  </div>
                </div>
              </motion.div>
              <div className="flex flex-wrap gap-4">
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-yellow-400 text-primary-foreground font-bold h-14 px-8 rounded-xl shadow-lg shadow-primary/25"
                  onClick={() => {
                    document.getElementById("scholarship")?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Apply for Scholarship
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white/20 text-white hover:bg-white/10 h-14 px-8 rounded-xl backdrop-blur-sm"
                  onClick={() => {
                    document.getElementById("courses")?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Explore Courses
                </Button>
              </div>

              {/* Stats/Highlights */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="mt-8 grid grid-cols-3 gap-4 max-w-xl"
              >
                <div className="text-center p-3 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10">
                  <div className="text-3xl font-bold text-primary mb-1">100%</div>
                  <div className="text-xs text-white/70">Scholarship Support</div>
                </div>
                <div className="text-center p-3 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10">
                  <div className="text-3xl font-bold text-primary mb-1">Govt</div>
                  <div className="text-xs text-white/70">Collaboration</div>
                </div>
                <div className="text-center p-3 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10">
                  <div className="text-3xl font-bold text-primary mb-1">1000+</div>
                  <div className="text-xs text-white/70">Students Placed</div>
                </div>
              </motion.div>
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
                    {/* Student studying for scholarship exam */}
                    <img 
                      src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1200" 
                      alt="Student studying for scholarship exam" 
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        // Fallback to a reliable scholarship/education image
                        target.src = 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=1200';
                      }}
                      loading="lazy"
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
              Comprehensive courses designed by industry experts to launch your career in aviation and beyond.
            </p>
          </div>

          {/* Aviation Core Courses */}
          <div className="mb-12">
            <h3 className="text-2xl font-display font-bold text-white mb-8">
              <span className="text-primary">Aviation Core Programs</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {courses
                .filter(course => course.category === 'aviation-core')
                .map((course, index) => (
                  <ServiceCard 
                    key={course.id}
                    title={course.title}
                    description={course.description}
                    icon={course.id === 'cpl' ? 'pilot' : course.id.includes('eng') ? 'engineer' : 'degree'}
                    delay={0.1 * (index + 1)}
                    image={course.images[0]?.src}
                    courseId={course.id}
                    onLearnMore={handleLearnMore}
                  />
                ))}
            </div>
          </div>

          {/* Engineering Programs */}
          <div className="mb-12">
            <h3 className="text-2xl font-display font-bold text-white mb-8">
              <span className="text-primary">B.Tech Engineering Programs</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {courses
                .filter(course => course.category === 'engineering')
                .map((course, index) => (
                  <ServiceCard 
                    key={course.id}
                    title={course.title}
                    description={course.description}
                    icon={course.id.includes('eng') || course.id === 'ece' || course.id === 'eee' || course.id === 'mechanical' ? 'engineer' : 'degree'}
                    delay={0.1 * (index + 1)}
                    image={course.images[0]?.src}
                    courseId={course.id}
                    onLearnMore={handleLearnMore}
                  />
                ))}
            </div>
          </div>

          {/* Medical & Allied */}
          <div>
            <h3 className="text-2xl font-display font-bold text-white mb-8">
              <span className="text-primary">Medical & Global Education</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {courses
                .filter(course => course.category === 'medical-global')
                .map((course, index) => (
                  <ServiceCard 
                    key={course.id}
                    title={course.title}
                    description={course.description}
                    icon={course.id === 'mbbs-abroad' ? 'medical' : course.id === 'study-abroad' ? 'global' : 'degree'}
                    delay={0.1 * (index + 1)}
                    image={course.images[0]?.src}
                    courseId={course.id}
                    onLearnMore={handleLearnMore}
                  />
                ))}
            </div>
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
            <Button 
              variant="outline" 
              onClick={() => {
                // Use wouter's navigation
                window.location.href = '/study-abroad';
              }}
              className="mt-4 md:mt-0 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
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
                <img 
                  src={getCountryImage(country)}
                  alt={country}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    // Fallback to a reliable image
                    target.src = 'https://images.unsplash.com/photo-1485738422979-f5c462d49f74?auto=format&fit=crop&q=80&w=1200';
                  }}
                  loading="lazy"
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

      {/* ACHIEVEMENTS & SUCCESS STORIES CAROUSEL */}
      <AchievementsCarousel />

      {/* CONTACT SECTION */}
      <section id="contact" className="py-24 relative overflow-hidden">
        {/* Decorative background element */}
        <div className="absolute -left-20 top-20 w-96 h-96 bg-primary/5 rounded-full blur-[100px]" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto glass rounded-3xl p-8 md:p-12 border border-white/10">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-display font-bold text-white mb-4">Get In Touch</h2>
            <p className="text-muted-foreground mb-6">Have questions about our courses or admission process?</p>
            
            {/* WhatsApp Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <a
                href="https://wa.me/919182272317?text=Hello%20Aviation%20Research%20%26%20Development!%20I%27m%20interested%20in%20learning%20more%20about%20your%20aviation%20courses%20and%20scholarship%20opportunities.%20Could%20you%20please%20provide%20me%20with%20more%20information%3F"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-400 text-white font-bold text-lg shadow-lg shadow-green-500/30 hover:shadow-green-500/50 transition-all duration-300 group"
              >
                <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform" />
                <span>Connect on WhatsApp</span>
                <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-white/20 text-sm">
                  <span>📱</span>
                  <span>9182272317</span>
                </div>
              </a>
              <p className="text-white/60 text-sm mt-3">Quick response guaranteed • Available 24/7</p>
            </motion.div>
            
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full" />
              <p className="relative text-muted-foreground">Or fill out the form below</p>
            </div>
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
                          <Input 
                            placeholder="Your Name" 
                            autoComplete="name"
                            className="bg-white/5 border-white/10 text-white" 
                            {...field} 
                          />
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
                          <Input 
                            placeholder="Mobile Number" 
                            type="tel"
                            autoComplete="tel"
                            className="bg-white/5 border-white/10 text-white" 
                            {...field} 
                          />
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
                          <Input 
                            placeholder="Email Address" 
                            type="email"
                            autoComplete="email"
                            className="bg-white/5 border-white/10 text-white" 
                            {...field} 
                          />
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
                            <SelectItem value="CPL">Commercial Pilot Training (CPL)</SelectItem>
                            <SelectItem value="BBA">BBA Aviation / Airport Management</SelectItem>
                            <SelectItem value="AME">Aircraft Maintenance Engineering</SelectItem>
                            <SelectItem value="Aero">B.E Aeronautical Engineering</SelectItem>
                            <SelectItem value="CSE">B.Tech CSE</SelectItem>
                            <SelectItem value="ECE">B.Tech ECE</SelectItem>
                            <SelectItem value="EEE">B.Tech EEE</SelectItem>
                            <SelectItem value="Civil">B.Tech Civil</SelectItem>
                            <SelectItem value="Mech">B.Tech Mechanical</SelectItem>
                            <SelectItem value="AI">B.Tech AI & Robotics</SelectItem>
                            <SelectItem value="DS">B.Tech Data Science</SelectItem>
                            <SelectItem value="MBBS">MBBS Abroad</SelectItem>
                            <SelectItem value="StudyAbroad">Study Abroad Services</SelectItem>
                            <SelectItem value="OJT">Internships & OJT Programs</SelectItem>
                            <SelectItem value="Career">Career Counselling</SelectItem>
                            <SelectItem value="Visa">Visa & Passport Assistance</SelectItem>
                            <SelectItem value="HR">HR Recruitment Services</SelectItem>
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
      
      {/* Course Modal */}
      <CourseModal 
        course={selectedCourse}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
      
      {/* Mobile Sticky Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-background/95 backdrop-blur-lg border-t border-white/10 p-2 z-50 flex justify-between gap-1.5">
        <a href="https://wa.me/919182272317" className="flex-1">
          <Button className="flex-1 bg-green-600 hover:bg-green-700 text-white text-xs h-10 rounded-md">WhatsApp</Button>
        </a>
        <a href="tel:+919182272317" className="flex-1">
          <Button className="flex-1 bg-primary hover:bg-yellow-500 text-primary-foreground text-xs h-10 rounded-md">Call: 9182272317</Button>
        </a>
        <a href="mailto:info@aviationresearch.in" className="flex-1">
          <Button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-xs h-10 rounded-md">Email</Button>
        </a>
      </div>
    </div>
  );
}
