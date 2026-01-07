import { motion, AnimatePresence } from "framer-motion";
import { X, Clock, Users, CheckCircle2, ChevronLeft, ChevronRight } from "lucide-react";
import { CourseDetail } from "@/data/courses";
import { useState } from "react";
import { Button } from "@/components/ui/button";

interface CourseModalProps {
  course: CourseDetail | null;
  isOpen: boolean;
  onClose: () => void;
}

export function CourseModal({ course, isOpen, onClose }: CourseModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!course) return null;

  const currentImage = course.images[currentImageIndex] || course.images[0];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % course.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + course.images.length) % course.images.length);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed inset-4 md:inset-auto md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 z-50 bg-background rounded-2xl border border-white/10 shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="relative h-64 md:h-80 overflow-hidden">
              {/* Image Gallery */}
              {course.images.length > 0 && (
                <>
                  <img
                    src={currentImage.src}
                    alt={currentImage.alt}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // Fallback to a placeholder if image fails to load
                      const target = e.target as HTMLImageElement;
                      target.src = 'https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?auto=format&fit=crop&q=80&w=800';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                  
                  {/* Image Navigation */}
                  {course.images.length > 1 && (
                    <>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          prevImage();
                        }}
                        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 hover:bg-black/70 backdrop-blur-sm text-white transition-colors"
                        aria-label="Previous image"
                      >
                        <ChevronLeft className="w-6 h-6" />
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          nextImage();
                        }}
                        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 hover:bg-black/70 backdrop-blur-sm text-white transition-colors"
                        aria-label="Next image"
                      >
                        <ChevronRight className="w-6 h-6" />
                      </button>
                      
                      {/* Image Indicators */}
                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                        {course.images.map((_, index) => (
                          <button
                            key={index}
                            onClick={(e) => {
                              e.stopPropagation();
                              setCurrentImageIndex(index);
                            }}
                            className={`w-2 h-2 rounded-full transition-all ${
                              index === currentImageIndex
                                ? "bg-primary w-8"
                                : "bg-white/50 hover:bg-white/70"
                            }`}
                            aria-label={`Go to image ${index + 1}`}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </>
              )}

              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 rounded-full bg-black/50 hover:bg-black/70 backdrop-blur-sm text-white transition-colors z-10"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Title Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-2">
                  {course.title}
                </h2>
                <p className="text-white/80 text-sm md:text-base">{course.description}</p>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto">
              <div className="p-6 md:p-8 space-y-6">
                {/* Course Info Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="glass-card p-4 rounded-xl border border-white/10">
                    <div className="flex items-center gap-3 mb-2">
                      <Clock className="w-5 h-5 text-primary" />
                      <span className="font-semibold text-white">Duration</span>
                    </div>
                    <p className="text-muted-foreground">{course.duration}</p>
                  </div>
                  <div className="glass-card p-4 rounded-xl border border-white/10">
                    <div className="flex items-center gap-3 mb-2">
                      <Users className="w-5 h-5 text-primary" />
                      <span className="font-semibold text-white">Eligibility</span>
                    </div>
                    <p className="text-muted-foreground">{course.eligibility}</p>
                  </div>
                </div>

                {/* Full Description */}
                <div>
                  <h3 className="text-xl font-display font-bold text-white mb-3">About This Program</h3>
                  <p className="text-muted-foreground leading-relaxed">{course.fullDescription}</p>
                </div>

                {/* Highlights */}
                <div>
                  <h3 className="text-xl font-display font-bold text-white mb-4">Program Highlights</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {course.highlights.map((highlight, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-start gap-3 glass-card p-4 rounded-lg border border-white/10"
                      >
                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{highlight}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Image Gallery Thumbnails (if multiple images) */}
                {course.images.length > 1 && (
                  <div>
                    <h3 className="text-xl font-display font-bold text-white mb-4">Gallery</h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {course.images.map((image, index) => (
                        <motion.button
                          key={index}
                          onClick={() => setCurrentImageIndex(index)}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className={`relative aspect-video rounded-lg overflow-hidden border-2 transition-all ${
                            index === currentImageIndex
                              ? "border-primary"
                              : "border-white/10 hover:border-white/30"
                          }`}
                        >
                          <img
                            src={image.src}
                            alt={image.alt}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.src = 'https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?auto=format&fit=crop&q=80&w=800';
                            }}
                          />
                          {index === currentImageIndex && (
                            <div className="absolute inset-0 bg-primary/20" />
                          )}
                        </motion.button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Footer */}
            <div className="p-6 border-t border-white/10 bg-slate-900/50">
              <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
                <p className="text-sm text-muted-foreground text-center sm:text-left">
                  Interested in this program? Contact us for more information.
                </p>
                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    onClick={onClose}
                    className="border-white/20 text-white hover:bg-white/10"
                  >
                    Close
                  </Button>
                  <Button
                    onClick={() => {
                      onClose();
                      // Scroll to contact form
                      setTimeout(() => {
                        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                      }, 100);
                    }}
                    className="bg-primary hover:bg-yellow-400 text-primary-foreground"
                  >
                    Enquire Now
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

