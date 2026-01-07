import { useLocation } from 'wouter';
import { motion } from 'framer-motion';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { 
  ArrowLeft, 
  Globe, 
  MapPin, 
  GraduationCap,
  Users,
  Award,
  CheckCircle2,
  Plane
} from 'lucide-react';

const countries = [
  {
    id: 'usa',
    name: 'United States',
    flag: '🇺🇸',
    image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&q=80&w=1200',
    description: 'Home to world-renowned universities and cutting-edge aviation programs with excellent career prospects.',
    topUniversities: ['MIT', 'Stanford University', 'Embry-Riddle Aeronautical University', 'Purdue University'],
    popularCourses: ['Aerospace Engineering', 'Aviation Management', 'Commercial Pilot Training', 'Aircraft Maintenance'],
    averageFees: '$30,000 - $60,000 per year',
    visaRequirements: 'F-1 Student Visa required',
    workOpportunities: 'OPT allows 12-36 months post-study work',
    scholarships: 'Multiple scholarships available for international students',
  },
  {
    id: 'uk',
    name: 'United Kingdom',
    flag: '🇬🇧',
    image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&q=80&w=1200',
    description: 'World-class education system with rich aviation history and excellent research facilities.',
    topUniversities: ['Imperial College London', 'University of Bristol', 'Cranfield University', 'University of Southampton'],
    popularCourses: ['Aeronautical Engineering', 'Aviation Operations', 'Air Transport Management', 'Pilot Training'],
    averageFees: '£15,000 - £35,000 per year',
    visaRequirements: 'Tier 4 Student Visa required',
    workOpportunities: 'Graduate Route visa allows 2 years post-study work',
    scholarships: 'Chevening Scholarships and university-specific grants available',
  },
  {
    id: 'canada',
    name: 'Canada',
    flag: '🇨🇦',
    image: 'https://images.unsplash.com/photo-1517935706615-2717063c2225?auto=format&fit=crop&q=80&w=1200',
    description: 'Affordable education with excellent post-study work opportunities and pathway to permanent residency.',
    topUniversities: ['University of Toronto', 'McGill University', 'University of British Columbia', 'Carleton University'],
    popularCourses: ['Aerospace Engineering', 'Aviation Technology', 'Flight Operations', 'Aircraft Systems'],
    averageFees: 'CAD 20,000 - 40,000 per year',
    visaRequirements: 'Study Permit required',
    workOpportunities: 'PGWP allows 3 years post-study work, PR pathways available',
    scholarships: 'Various provincial and federal scholarships available',
  },
  {
    id: 'australia',
    name: 'Australia',
    flag: '🇦🇺',
    image: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&q=80&w=1200',
    description: 'High quality of life with excellent aviation programs and strong industry connections.',
    topUniversities: ['UNSW Sydney', 'RMIT University', 'Swinburne University', 'Queensland University of Technology'],
    popularCourses: ['Aviation Management', 'Aerospace Engineering', 'Professional Pilot Training', 'Aviation Safety'],
    averageFees: 'AUD 25,000 - 45,000 per year',
    visaRequirements: 'Student Visa (Subclass 500) required',
    workOpportunities: 'Temporary Graduate visa allows 2-4 years post-study work',
    scholarships: 'Australia Awards and university scholarships available',
  },
  {
    id: 'germany',
    name: 'Germany',
    flag: '🇩🇪',
    image: 'https://images.unsplash.com/photo-1467269204594-9661b133dd2b?auto=format&fit=crop&q=80&w=1200',
    description: 'Low tuition fees with world-class engineering programs and strong industrial partnerships.',
    topUniversities: ['Technical University of Munich', 'RWTH Aachen University', 'University of Stuttgart', 'TU Berlin'],
    popularCourses: ['Aerospace Engineering', 'Aircraft Design', 'Aviation Management', 'Mechatronics'],
    averageFees: '€0 - €3,000 per year (public universities)',
    visaRequirements: 'German Student Visa required',
    workOpportunities: '18 months post-study work permit to find employment',
    scholarships: 'DAAD scholarships and other opportunities available',
  },
  {
    id: 'russia',
    name: 'Russia',
    flag: '🇷🇺',
    image: 'https://images.unsplash.com/photo-1513326738677-b964603b136d?auto=format&fit=crop&q=80&w=1200',
    description: 'Affordable education with strong aerospace tradition and comprehensive programs.',
    topUniversities: ['Bauman Moscow State Technical University', 'MAI (Moscow Aviation Institute)', 'MIPT', 'Saint Petersburg State University'],
    popularCourses: ['Aircraft Engineering', 'Space Systems', 'Aviation Electronics', 'Rocket Science'],
    averageFees: '$2,000 - $8,000 per year',
    visaRequirements: 'Russian Student Visa required',
    workOpportunities: 'Work permit available with employer sponsorship',
    scholarships: 'Russian Government scholarships for international students',
  },
];

export default function StudyAbroad() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[50vh] overflow-hidden">
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/90 via-slate-900/70 to-background z-10" />
          <img
            src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=2000"
            alt="Study Abroad"
            className="w-full h-full object-cover"
          />
        </motion.div>

        <div className="container mx-auto px-4 relative z-20 h-full flex items-center">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Button
                variant="ghost"
                onClick={() => setLocation('/')}
                className="mb-6 text-white hover:bg-white/10"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>

              <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
                Study Internationally
              </h1>
              <p className="text-xl text-white/80 max-w-2xl">
                Explore world-class aviation education opportunities across the globe. Your gateway to international universities and global career prospects.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Countries Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {countries.map((country, idx) => (
              <motion.div
                key={country.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass rounded-2xl overflow-hidden border border-white/10 hover:border-primary/30 transition-all group"
              >
                {/* Country Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={country.image}
                    alt={country.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = 'https://images.unsplash.com/photo-1485738422979-f5c462d49f74?auto=format&fit=crop&q=80&w=1200';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-3">
                      <span className="text-4xl">{country.flag}</span>
                      <h3 className="text-2xl font-display font-bold text-white">{country.name}</h3>
                    </div>
                  </div>
                </div>

                {/* Country Details */}
                <div className="p-6">
                  <p className="text-white/80 mb-4">{country.description}</p>

                  {/* Key Info */}
                  <div className="space-y-3 mb-6">
                    <div className="flex items-start gap-2">
                      <Award className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm font-bold text-white">Average Fees</p>
                        <p className="text-sm text-white/70">{country.averageFees}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <Users className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm font-bold text-white">Post-Study Work</p>
                        <p className="text-sm text-white/70">{country.workOpportunities}</p>
                      </div>
                    </div>
                  </div>

                  {/* Top Universities */}
                  <div className="mb-6">
                    <p className="text-sm font-bold text-white mb-2 flex items-center gap-2">
                      <GraduationCap className="w-4 h-4 text-primary" />
                      Top Universities
                    </p>
                    <ul className="space-y-1">
                      {country.topUniversities.slice(0, 3).map((uni, i) => (
                        <li key={i} className="text-sm text-white/70 flex items-center gap-2">
                          <CheckCircle2 className="w-3 h-3 text-primary" />
                          {uni}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA */}
                  <Button
                    onClick={() => {
                      setLocation('/');
                      setTimeout(() => {
                        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                      }, 100);
                    }}
                    className="w-full bg-primary hover:bg-yellow-400 text-primary-foreground"
                  >
                    Get Admission Guidance
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-primary/20 to-yellow-600/20 border border-primary/30 rounded-2xl p-12"
            >
              <Globe className="w-16 h-16 text-primary mx-auto mb-6" />
              <h2 className="text-4xl font-display font-bold text-white mb-4">
                Ready to Study Abroad?
              </h2>
              <p className="text-white/80 mb-8 text-lg">
                Our expert counselors will guide you through the entire process - from university selection to visa assistance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  onClick={() => {
                    setLocation('/');
                    setTimeout(() => {
                      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  }}
                  className="bg-primary hover:bg-yellow-400 text-primary-foreground font-bold"
                >
                  Book Free Consultation
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => setLocation('/')}
                  className="border-primary text-primary hover:bg-primary/10"
                >
                  Explore Courses
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}


