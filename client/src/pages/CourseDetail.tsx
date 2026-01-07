import { useLocation } from 'wouter';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { courses } from '@/data/courses';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { 
  ArrowLeft, 
  Clock, 
  BookOpen, 
  Award, 
  Users, 
  GraduationCap,
  CheckCircle2
} from 'lucide-react';

interface CourseDetailProps {
  params: { id: string };
}

export default function CourseDetail({ params }: CourseDetailProps) {
  const [, setLocation] = useLocation();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const course = courses.find(c => c.id === params.id);

  if (!course) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Navbar />
        <div className="text-center mt-20">
          <h1 className="text-4xl font-bold text-white mb-4">Course Not Found</h1>
          <Button onClick={() => setLocation('/')}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section with Course Image */}
      <section className="relative h-[60vh] overflow-hidden">
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/60 to-background z-10" />
          <img
            src={course.images[currentImageIndex]?.src || course.images[0]?.src}
            alt={course.title}
            className="w-full h-full object-cover"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=2000';
            }}
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
                Back to Courses
              </Button>

              <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
                {course.title}
              </h1>
              <p className="text-xl text-white/80 mb-8 max-w-2xl">
                {course.description}
              </p>

              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
                  <Clock className="w-4 h-4 text-primary" />
                  <span className="text-white">{course.duration}</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
                  <Award className="w-4 h-4 text-primary" />
                  <span className="text-white">{course.eligibility}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      {course.images.length > 1 && (
        <section className="py-8 bg-slate-900/50">
          <div className="container mx-auto px-4">
            <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
              {course.images.map((img, idx) => (
                <motion.button
                  key={idx}
                  onClick={() => setCurrentImageIndex(idx)}
                  className={`flex-shrink-0 w-32 h-24 rounded-lg overflow-hidden border-2 transition-all ${
                    currentImageIndex === idx
                      ? 'border-primary scale-105'
                      : 'border-white/20 hover:border-white/40'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <img
                    src={img.src}
                    alt={img.caption}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=400';
                    }}
                  />
                </motion.button>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Course Overview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass p-8 rounded-2xl mb-12 border border-white/10"
            >
              <h2 className="text-3xl font-display font-bold text-white mb-6 flex items-center gap-3">
                <BookOpen className="w-8 h-8 text-primary" />
                Course Overview
              </h2>
              <p className="text-white/80 text-lg leading-relaxed mb-6">
                {course.fullDescription || course.description}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="flex items-start gap-3">
                  <Clock className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-white font-bold mb-1">Duration</h3>
                    <p className="text-white/70">{course.duration}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Award className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-white font-bold mb-1">Eligibility</h3>
                    <p className="text-white/70">{course.eligibility}</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Course Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass p-8 rounded-2xl mb-12 border border-white/10"
            >
              <h2 className="text-3xl font-display font-bold text-white mb-6 flex items-center gap-3">
                <GraduationCap className="w-8 h-8 text-primary" />
                Course Highlights
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {course.highlights.map((highlight, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-start gap-3 p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                  >
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <p className="text-white/80">{highlight}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Career Opportunities */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass p-8 rounded-2xl mb-12 border border-white/10"
            >
              <h2 className="text-3xl font-display font-bold text-white mb-6 flex items-center gap-3">
                <Users className="w-8 h-8 text-primary" />
                Career Opportunities
              </h2>
              <p className="text-white/80 mb-4">
                Graduates of this program can pursue exciting careers in:
              </p>
              <ul className="space-y-3">
                {['Airlines and Aviation Companies', 'Airport Management', 'Aircraft Manufacturing', 'Government Aviation Departments', 'International Organizations', 'Defense Services'].map((career, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-center gap-3 text-white/80"
                  >
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    {career}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-primary/20 to-yellow-600/20 border border-primary/30 rounded-2xl p-8 text-center"
            >
              <h2 className="text-3xl font-display font-bold text-white mb-4">
                Ready to Start Your Journey?
              </h2>
              <p className="text-white/80 mb-8 max-w-2xl mx-auto">
                Take the first step towards an exciting career in aviation. Register now for our scholarship exam!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  onClick={() => {
                    setLocation('/');
                    setTimeout(() => {
                      document.getElementById('scholarship')?.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  }}
                  className="bg-primary hover:bg-yellow-400 text-primary-foreground font-bold"
                >
                  Apply for Scholarship
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => {
                    setLocation('/');
                    setTimeout(() => {
                      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  }}
                  className="border-primary text-primary hover:bg-primary/10"
                >
                  Get More Information
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
