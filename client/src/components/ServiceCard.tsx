import { motion } from "framer-motion";
import { ArrowRight, Plane, Globe, BookOpen, User, Wrench } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: "pilot" | "engineer" | "degree" | "global" | "medical";
  delay?: number;
}

const icons = {
  pilot: Plane,
  engineer: Wrench,
  degree: BookOpen,
  global: Globe,
  medical: User,
};

export function ServiceCard({ title, description, icon, delay = 0 }: ServiceCardProps) {
  const Icon = icons[icon];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="group relative h-full"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="glass-card relative p-8 rounded-2xl h-full flex flex-col items-start border border-white/10 hover:border-primary/50 transition-colors duration-300">
        <div className="mb-6 p-4 rounded-xl bg-gradient-to-br from-primary/10 to-transparent border border-primary/20 group-hover:scale-110 transition-transform duration-300">
          <Icon className="w-8 h-8 text-primary" />
        </div>
        
        <h3 className="text-xl font-bold text-white mb-3 font-display group-hover:text-primary transition-colors">
          {title}
        </h3>
        
        <p className="text-muted-foreground mb-6 leading-relaxed flex-grow">
          {description}
        </p>

        <div className="flex items-center text-sm font-semibold text-primary/80 group-hover:text-primary cursor-pointer transition-colors">
          Learn more <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </motion.div>
  );
}
