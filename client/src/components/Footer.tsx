import { Plane, Mail, Phone, MapPin, Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-white/10 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-primary p-1.5 rounded-md">
                <Plane className="w-5 h-5 text-primary-foreground transform -rotate-45" />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-lg text-white">AVIATION</span>
                <span className="font-body text-[10px] text-primary tracking-[0.2em] font-medium">ACADEMY</span>
              </div>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Empowering the next generation of aviation professionals with world-class training and global opportunities.
            </p>
            <div className="flex gap-4 pt-2">
              {[Facebook, Instagram, Twitter, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-primary hover:text-primary-foreground transition-all">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              {['About Us', 'Admissions', 'Scholarship Exam', 'Placement Cell', 'Alumni'].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-primary transition-colors flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-primary" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h4 className="font-display font-bold text-white mb-6">Our Courses</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              {['BBA Aviation', 'Pilot Training (CPL)', 'Aircraft Maintenance', 'Aeronautical Eng.', 'Cabin Crew'].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-primary transition-colors flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-primary" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-white mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0" />
                <span>123 Aviation Drive, Aero City,<br />Hyderabad, Telangana 500081</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <span>admissions@aviation.edu</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <p>© 2024 Aviation Academy. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
