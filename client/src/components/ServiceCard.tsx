import { motion } from "framer-motion";
import { LucideIcon, Plane, GraduationCap, Briefcase, Users, Building2, Globe, Stethoscope, Cog } from "lucide-react";
import { Button } from "./ui/button";
import { useLocation } from "wouter";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  delay: number;
  image?: string;
  courseId: string;
  onLearnMore?: (courseId: string) => void;
}

const iconMap: Record<string, LucideIcon> = {
  plane: Plane,
  degree: GraduationCap,
  briefcase: Briefcase,
  users: Users,
  building: Building2,
  globe: Globe,
  medical: Stethoscope,
  engineer: Cog,
};

export function ServiceCard({ 
  title, 
  description, 
  icon, 
  delay, 
  image,
  courseId,
  onLearnMore 
}: ServiceCardProps) {
  const Icon = iconMap[icon] || GraduationCap;
  const [, setLocation] = useLocation();

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="glass group hover:border-primary/50 border border-white/10 rounded-xl p-6 transition-all duration-300 hover:scale-105 overflow-hidden relative"
    >
      {/* Background Image */}
      {image && (
        <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
            }}
          />
        </div>
      )}

      <div className="relative z-10">
        <div className="flex items-center gap-4 mb-4">
          <div className="p-3 bg-primary/20 rounded-lg group-hover:bg-primary/30 transition-colors">
            <Icon className="w-6 h-6 text-primary" />
          </div>
          <h3 className="text-xl font-bold text-white font-display">{title}</h3>
        </div>
        <p className="text-muted-foreground mb-6 line-clamp-3">{description}</p>
        <Button
          onClick={() => setLocation(`/course/${courseId}`)}
          variant="outline"
          className="w-full border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground"
        >
          Learn More
        </Button>
      </div>
    </motion.div>
  );
}
