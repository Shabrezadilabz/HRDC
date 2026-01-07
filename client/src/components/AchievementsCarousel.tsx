import { motion } from "framer-motion";
import { Trophy, Users, Award, GraduationCap } from "lucide-react";

interface Achievement {
  id: number;
  image: string;
  title: string;
  category: string;
}

const achievements: Achievement[] = [
  {
    id: 1,
    image: "/assets/WhatsApp Image 2026-01-05 at 4.28.09 AM.jpeg",
    title: "Expert Guidance & Counseling",
    category: "Professional Team"
  },
  {
    id: 2,
    image: "/assets/WhatsApp Image 2026-01-05 at 4.28.08 AM (1).jpeg",
    title: "Hands-On Aircraft Training",
    category: "Practical Training"
  },
  {
    id: 3,
    image: "/assets/WhatsApp Image 2026-01-05 at 4.28.08 AM.jpeg",
    title: "Real Aviation Experience",
    category: "Student Success"
  },
  {
    id: 4,
    image: "/assets/WhatsApp Image 2025-12-21 at 1.08.54 AM (2).jpeg",
    title: "Professional Pilot Training",
    category: "Flight Training"
  },
  {
    id: 5,
    image: "/assets/WhatsApp Image 2025-12-21 at 1.08.54 AM (1).jpeg",
    title: "Modern Computer Labs",
    category: "Infrastructure"
  },
  {
    id: 6,
    image: "/assets/WhatsApp Image 2025-12-21 at 1.08.54 AM.jpeg",
    title: "Career Guidance Sessions",
    category: "Mentorship"
  },
  {
    id: 7,
    image: "/assets/WhatsApp Image 2025-12-21 at 1.08.53 AM (1).jpeg",
    title: "Scholarship Counseling",
    category: "Support"
  },
  {
    id: 8,
    image: "/assets/WhatsApp Image 2025-12-21 at 1.08.53 AM.jpeg",
    title: "Successful Placements",
    category: "Achievements"
  },
  {
    id: 9,
    image: "/assets/WhatsApp Image 2025-12-21 at 1.08.52 AM (1).jpeg",
    title: "World-Class Facilities",
    category: "Campus"
  },
  {
    id: 10,
    image: "/assets/WhatsApp Image 2025-12-21 at 1.08.52 AM.jpeg",
    title: "Future Aviation Professionals",
    category: "Students"
  },
  {
    id: 11,
    image: "/assets/WhatsApp Image 2025-12-21 at 1.08.51 AM (1).jpeg",
    title: "Aviation Dreams Taking Flight",
    category: "Success Stories"
  },
  {
    id: 12,
    image: "/assets/WhatsApp Image 2025-12-21 at 1.08.51 AM.jpeg",
    title: "Excellence in Training",
    category: "Education"
  },
  {
    id: 13,
    image: "/assets/WhatsApp Image 2025-12-21 at 1.08.46 AM (2).jpeg",
    title: "Building Future Aviators",
    category: "Students"
  }
];

export function AchievementsCarousel() {
  return (
    <section className="py-20 bg-gradient-to-b from-slate-900 to-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
      
      <div className="container mx-auto px-4 relative z-10 mb-12">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-semibold mb-4">
            <Trophy className="w-4 h-4" />
            <span>Our Success Story</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            Achievements, Placements & <span className="text-gradient">Scholarship Guidance</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto mb-8">
            From expert guidance to successful placements - witness our commitment to shaping future aviation professionals
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <div className="glass rounded-xl p-4 border border-white/10">
              <GraduationCap className="w-6 h-6 text-primary mx-auto mb-2" />
              <div className="text-2xl font-bold text-white mb-1">1000+</div>
              <div className="text-xs text-white/70">Students Placed</div>
            </div>
            <div className="glass rounded-xl p-4 border border-white/10">
              <Award className="w-6 h-6 text-primary mx-auto mb-2" />
              <div className="text-2xl font-bold text-white mb-1">100%</div>
              <div className="text-xs text-white/70">Scholarship Support</div>
            </div>
            <div className="glass rounded-xl p-4 border border-white/10">
              <Users className="w-6 h-6 text-primary mx-auto mb-2" />
              <div className="text-2xl font-bold text-white mb-1">50+</div>
              <div className="text-xs text-white/70">Expert Mentors</div>
            </div>
            <div className="glass rounded-xl p-4 border border-white/10">
              <Trophy className="w-6 h-6 text-primary mx-auto mb-2" />
              <div className="text-2xl font-bold text-white mb-1">15+</div>
              <div className="text-xs text-white/70">Years Excellence</div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Infinite Horizontal Scrolling Carousel - Bigger Boxes */}
      <div className="relative">
        <div className="overflow-hidden">
          <div className="flex gap-8 animate-infinite-scroll">
            {/* First set */}
            {achievements.map((achievement) => (
              <div
                key={`first-${achievement.id}`}
                className="flex-shrink-0 w-[500px] md:w-[600px] h-[550px] md:h-[650px] relative rounded-3xl overflow-hidden border-2 border-white/20 shadow-2xl group"
              >
                <img 
                  src={achievement.image} 
                  alt={achievement.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1200';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="inline-block px-4 py-2 rounded-full bg-primary/40 border-2 border-primary text-primary text-sm font-bold mb-4 backdrop-blur-sm">
                    {achievement.category}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">{achievement.title}</h3>
                  <div className="h-0 group-hover:h-auto overflow-hidden transition-all duration-300">
                    <p className="text-white/90 text-base">Aviation Research & Development Pvt. Ltd.</p>
                  </div>
                </div>
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {achievements.map((achievement) => (
              <div
                key={`second-${achievement.id}`}
                className="flex-shrink-0 w-[500px] md:w-[600px] h-[550px] md:h-[650px] relative rounded-3xl overflow-hidden border-2 border-white/20 shadow-2xl group"
              >
                <img 
                  src={achievement.image} 
                  alt={achievement.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1200';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="inline-block px-4 py-2 rounded-full bg-primary/40 border-2 border-primary text-primary text-sm font-bold mb-4 backdrop-blur-sm">
                    {achievement.category}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">{achievement.title}</h3>
                  <div className="h-0 group-hover:h-auto overflow-hidden transition-all duration-300">
                    <p className="text-white/90 text-base">Aviation Research & Development Pvt. Ltd.</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Gradient overlays for smooth fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-slate-900 to-transparent pointer-events-none z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-background to-transparent pointer-events-none z-10" />
      </div>

      <style>{`
        @keyframes infinite-scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
        
        .animate-infinite-scroll {
          animation: infinite-scroll 40s linear infinite;
        }
        
        .animate-infinite-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}

