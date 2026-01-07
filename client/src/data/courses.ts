// Course data with associated images and details
export interface CourseImage {
  src: string;
  alt: string;
  type: 'office' | 'students' | 'aircraft' | 'info' | 'consulting';
}

export interface CourseDetail {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  duration: string;
  eligibility: string;
  highlights: string[];
  images: CourseImage[];
  category: 'aviation-core' | 'engineering' | 'medical-global';
}

export const courses: CourseDetail[] = [
  {
    id: 'cpl',
    title: 'Commercial Pilot (CPL)',
    description: 'Comprehensive ground classes and flying training to earn your Commercial Pilot License with DGCA standards.',
    fullDescription: 'Our Commercial Pilot License (CPL) program provides comprehensive ground classes and extensive flying training to help you earn your Commercial Pilot License meeting DGCA standards. This program is designed for aspiring pilots who want to pursue a career in commercial aviation.',
    duration: '18-24 Months',
    eligibility: '12th Grade (Any Stream) with Physics, Chemistry, and Mathematics',
    highlights: [
      'DGCA approved training program',
      'State-of-the-art flight simulators',
      'Experienced certified instructors',
      '100% placement assistance',
      'International flight training opportunities',
      'Medical certification support'
    ],
    images: [
      { src: '/assets/aero-careers.jpg', alt: 'Aviation Careers', type: 'aircraft' },
      { src: '/assets/hero-student.jpg', alt: 'Student Pilot', type: 'students' },
      { src: '/assets/services-flyer.jpg', alt: 'Aviation Services', type: 'info' },
      { src: 'https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?auto=format&fit=crop&q=80&w=800', alt: 'Pilot Training', type: 'aircraft' }
    ],
    category: 'aviation-core'
  },
  {
    id: 'bba-aviation',
    title: 'BBA Aviation / Airport Management',
    description: 'A 3-year degree program combining management principles with specialized aviation industry knowledge.',
    fullDescription: 'The BBA in Aviation Management (Airport Management) is a 3-year full-time undergraduate program designed to prepare you for diverse roles in the aviation industry. This program combines core business management principles with specialized aviation industry knowledge, covering airport operations, airline management, cargo handling, and customer service.',
    duration: '3 Years',
    eligibility: '12th Grade (Any Stream)',
    highlights: [
      'Industry-recognized degree program',
      'Practical training at airports',
      'Internship opportunities with leading airlines',
      'Career guidance and placement support',
      'Global aviation industry exposure',
      'Expert faculty with industry experience'
    ],
    images: [
      { src: '/assets/services-flyer.jpg', alt: 'Aviation Management', type: 'info' },
      { src: '/assets/aero-careers.jpg', alt: 'Aviation Careers', type: 'office' },
      { src: '/assets/hero-student.jpg', alt: 'Aviation Students', type: 'students' },
      { src: 'https://images.unsplash.com/photo-1513573516-f1adf8f2f69e?auto=format&fit=crop&q=80&w=800', alt: 'Airport Management', type: 'office' }
    ],
    category: 'aviation-core'
  },
  {
    id: 'ame',
    title: 'Aircraft Maintenance Engineering (AME)',
    description: 'Become a licensed Aircraft Maintenance Engineer. Learn to service and repair aircraft systems.',
    fullDescription: 'Our Aircraft Maintenance Engineering (AME) program offers comprehensive training to become a licensed Aircraft Maintenance Engineer. The program includes 6-month OJT (On-Job Training) and 1-year apprenticeship opportunities at DGCA & EASA approved domestic and international airlines & MROs. Learn to service, repair, and maintain aircraft systems to the highest safety standards.',
    duration: '3 Years + 6 Months OJT / 1 Year Apprenticeship',
    eligibility: '12th Grade with Physics, Chemistry, and Mathematics',
    highlights: [
      'DGCA & EASA approved training',
      '6-month OJT at approved airlines',
      '1-year apprenticeship programs',
      'Hands-on training with real aircraft',
      'International placement opportunities',
      'Licensed AME certification'
    ],
    images: [
      { src: '/assets/aero-careers.jpg', alt: 'Aircraft Maintenance', type: 'aircraft' },
      { src: '/assets/services-flyer.jpg', alt: 'Maintenance Training', type: 'info' },
      { src: '/assets/hero-student.jpg', alt: 'Maintenance Students', type: 'students' },
      { src: 'https://images.unsplash.com/photo-1485633308149-3903a40df9f3?auto=format&fit=crop&q=80&w=800', alt: 'Aircraft Engine', type: 'aircraft' }
    ],
    category: 'aviation-core'
  },
  {
    id: 'aeronautical-eng',
    title: 'B.E Aeronautical Engineering',
    description: 'Deep dive into the design, manufacturing, and testing of aircraft and aerospace systems.',
    fullDescription: 'The B.E in Aeronautical Engineering is a 4-year comprehensive program that provides in-depth knowledge of aircraft design, manufacturing, testing, and aerospace systems. Students learn about aerodynamics, propulsion systems, aircraft structures, and avionics, preparing them for careers in aerospace engineering and research.',
    duration: '4 Years',
    eligibility: '12th Grade with Physics, Chemistry, and Mathematics (MPC)',
    highlights: [
      'Comprehensive engineering curriculum',
      'Advanced laboratory facilities',
      'Industry projects and internships',
      'Research opportunities',
      'Placement in aerospace companies',
      'Expert faculty from industry'
    ],
    images: [
      { src: '/assets/aero-careers.jpg', alt: 'Aeronautical Engineering', type: 'aircraft' },
      { src: '/assets/hero-student.jpg', alt: 'Engineering Students', type: 'students' }
    ],
    category: 'aviation-core'
  },
  {
    id: 'cse',
    title: 'CSE (Computer Science)',
    description: 'Master software development, AI, and emerging technologies shaping the aviation industry.',
    fullDescription: 'The Computer Science Engineering program focuses on software development, artificial intelligence, and emerging technologies that are transforming the aviation industry. Students learn programming, data structures, algorithms, AI/ML, and aviation-specific software applications.',
    duration: '4 Years',
    eligibility: '12th Grade with Physics, Chemistry, and Mathematics',
    highlights: [
      'Modern curriculum with AI/ML focus',
      'Aviation software specialization',
      'Industry-standard programming languages',
      'Project-based learning',
      'Internship opportunities',
      'High placement rate'
    ],
    images: [
      { src: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1200', alt: 'Computer Science Students', type: 'students' },
      { src: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200', alt: 'Coding and Programming', type: 'office' },
      { src: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200', alt: 'AI and Technology', type: 'info' },
      { src: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&q=80&w=1200', alt: 'Software Development', type: 'office' }
    ],
    category: 'engineering'
  },
  {
    id: 'ece',
    title: 'ECE (Electronics & Communication)',
    description: 'Specialize in avionics, communication systems, and electronic aircraft components.',
    fullDescription: 'The Electronics & Communication Engineering program specializes in avionics, communication systems, and electronic aircraft components. Students learn about signal processing, embedded systems, wireless communication, and aviation electronics.',
    duration: '4 Years',
    eligibility: '12th Grade with Physics, Chemistry, and Mathematics',
    highlights: [
      'Avionics specialization',
      'Communication systems expertise',
      'Embedded systems training',
      'Industry-standard equipment',
      'Research opportunities',
      'Excellent placement prospects'
    ],
    images: [
      { src: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200', alt: 'Electronics Engineering', type: 'office' },
      { src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=1200', alt: 'Circuit Design', type: 'info' },
      { src: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=1200', alt: 'Electronic Components', type: 'office' }
    ],
    category: 'engineering'
  },
  {
    id: 'eee',
    title: 'EEE (Electrical Engineering)',
    description: 'Learn power systems and electrical components critical to modern aircraft operations.',
    fullDescription: 'The Electrical Engineering program focuses on power systems and electrical components critical to modern aircraft operations. Students learn about electrical circuits, power generation, control systems, and aircraft electrical systems.',
    duration: '4 Years',
    eligibility: '12th Grade with Physics, Chemistry, and Mathematics',
    highlights: [
      'Power systems expertise',
      'Aircraft electrical systems',
      'Control systems training',
      'Practical lab experience',
      'Industry partnerships',
      'Strong career prospects'
    ],
    images: [
      { src: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=1200', alt: 'Electrical Engineering', type: 'office' },
      { src: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?auto=format&fit=crop&q=80&w=1200', alt: 'Power Systems', type: 'info' },
      { src: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1200', alt: 'Electrical Components', type: 'office' }
    ],
    category: 'engineering'
  },
  {
    id: 'civil',
    title: 'Civil Engineering',
    description: 'Build expertise in airport infrastructure, runway design, and aviation facilities.',
    fullDescription: 'The Civil Engineering program builds expertise in airport infrastructure, runway design, and aviation facilities. Students learn about structural engineering, transportation systems, airport planning, and construction management.',
    duration: '4 Years',
    eligibility: '12th Grade with Physics, Chemistry, and Mathematics',
    highlights: [
      'Airport infrastructure focus',
      'Runway design expertise',
      'Structural engineering',
      'Construction management',
      'Industry projects',
      'Infrastructure development'
    ],
    images: [
      { src: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200', alt: 'Civil Engineering', type: 'office' },
      { src: 'https://images.unsplash.com/photo-1504307651254-35680f293033?auto=format&fit=crop&q=80&w=1200', alt: 'Construction Site', type: 'info' },
      { src: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1200', alt: 'Infrastructure Design', type: 'office' }
    ],
    category: 'engineering'
  },
  {
    id: 'mechanical',
    title: 'Mechanical Engineering',
    description: 'Understand mechanical systems essential for aircraft propulsion and structural integrity.',
    fullDescription: 'The Mechanical Engineering program focuses on mechanical systems essential for aircraft propulsion and structural integrity. Students learn about thermodynamics, fluid mechanics, materials science, and aircraft design.',
    duration: '4 Years',
    eligibility: '12th Grade with Physics, Chemistry, and Mathematics',
    highlights: [
      'Aircraft propulsion systems',
      'Mechanical design expertise',
      'Materials science',
      'Thermodynamics and fluid mechanics',
      'CAD/CAM training',
      'Aerospace applications'
    ],
    images: [
      { src: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1200', alt: 'Mechanical Engineering', type: 'office' },
      { src: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?auto=format&fit=crop&q=80&w=1200', alt: 'Mechanical Systems', type: 'info' },
      { src: 'https://images.unsplash.com/photo-1581091226825-a6a2a2aee158?auto=format&fit=crop&q=80&w=1200', alt: 'Engineering Workshop', type: 'office' }
    ],
    category: 'engineering'
  },
  {
    id: 'ai-robotics',
    title: 'AI & Robotics',
    description: 'Cutting-edge programs in artificial intelligence and automation for aerospace applications.',
    fullDescription: 'The AI & Robotics program offers cutting-edge education in artificial intelligence and automation for aerospace applications. Students learn machine learning, robotics, automation systems, and AI applications in aviation.',
    duration: '4 Years',
    eligibility: '12th Grade with Physics, Chemistry, and Mathematics',
    highlights: [
      'AI and machine learning',
      'Robotics and automation',
      'Aerospace AI applications',
      'Industry-leading curriculum',
      'Research opportunities',
      'Future-ready skills'
    ],
    images: [
      { src: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=1200', alt: 'AI and Robotics', type: 'info' },
      { src: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1200', alt: 'Robotics Technology', type: 'office' },
      { src: 'https://images.unsplash.com/photo-1555255707-c07966088b7b?auto=format&fit=crop&q=80&w=1200', alt: 'Artificial Intelligence', type: 'info' }
    ],
    category: 'engineering'
  },
  {
    id: 'data-science',
    title: 'Data Science',
    description: 'Analytics and data-driven solutions for aviation operations and management.',
    fullDescription: 'The Data Science program focuses on analytics and data-driven solutions for aviation operations and management. Students learn data analysis, machine learning, statistical modeling, and big data technologies.',
    duration: '4 Years',
    eligibility: '12th Grade with Physics, Chemistry, and Mathematics',
    highlights: [
      'Data analytics expertise',
      'Machine learning applications',
      'Big data technologies',
      'Aviation data solutions',
      'Industry projects',
      'High demand field'
    ],
    images: [
      { src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200', alt: 'Data Science', type: 'info' },
      { src: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200', alt: 'Data Analytics', type: 'office' },
      { src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200', alt: 'Data Visualization', type: 'info' }
    ],
    category: 'engineering'
  },
  {
    id: 'mbbs-abroad',
    title: 'MBBS Abroad',
    description: 'Specialized guidance for medical aspirants to study MBBS in top universities worldwide with visa support.',
    fullDescription: 'We provide comprehensive guidance for medical aspirants to study MBBS in top universities worldwide. Our services include university selection, admission assistance, visa processing, and complete support throughout your medical education journey abroad.',
    duration: '5-6 Years',
    eligibility: '12th Grade with Physics, Chemistry, and Biology (BiPC)',
    highlights: [
      'Top international medical universities',
      'Complete visa assistance',
      'Admission guidance',
      'Scholarship opportunities',
      'Post-graduation support',
      'Licensing exam preparation'
    ],
    images: [
      { src: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?auto=format&fit=crop&q=80&w=1200', alt: 'Medical Students', type: 'students' },
      { src: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&q=80&w=1200', alt: 'Medical Education', type: 'info' },
      { src: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&q=80&w=1200', alt: 'Medical Laboratory', type: 'office' },
      { src: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&q=80&w=1200', alt: 'Medical University', type: 'info' }
    ],
    category: 'medical-global'
  },
  {
    id: 'study-abroad',
    title: 'Study Abroad Services',
    description: 'Complete guidance for USA, UK, Canada, Australia, Germany, and Russia with visa and admission support.',
    fullDescription: 'Our Study Abroad Services provide complete guidance for students wishing to study in USA, UK, Canada, Australia, Germany, and Russia. We assist with university selection, application process, visa documentation, passport assistance, and provide ongoing support throughout your educational journey.',
    duration: 'Varies by Program',
    eligibility: '12th Grade or Graduation (depending on program)',
    highlights: [
      'Multiple country options',
      'Visa & passport assistance',
      'University admission support',
      'Scholarship guidance',
      'Pre-departure orientation',
      'Post-arrival support'
    ],
    images: [
      { src: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=1200', alt: 'International Students', type: 'students' },
      { src: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1200', alt: 'Study Abroad', type: 'info' },
      { src: 'https://images.unsplash.com/photo-1497633762265-9d179a990a6e?auto=format&fit=crop&q=80&w=1200', alt: 'Global Education', type: 'office' },
      { src: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=1200', alt: 'University Campus', type: 'info' }
    ],
    category: 'medical-global'
  },
  {
    id: 'ojt-internships',
    title: 'Internships & OJT',
    description: 'On-the-job training and internship programs with leading aviation companies nationally and internationally.',
    fullDescription: 'We assist in internships and On-Job Training (OJT) programs for Aircraft Maintenance Engineering. Our programs include 6-month OJT and 1-year apprenticeships at DGCA & EASA approved domestic and international airlines & MROs. Limited slots available for hands-on training with real aircraft.',
    duration: '6 Months OJT / 1 Year Apprenticeship',
    eligibility: 'AME students or graduates',
    highlights: [
      'DGCA & EASA approved programs',
      'National & international opportunities',
      'Hands-on aircraft training',
      'Industry-recognized certification',
      'Placement assistance',
      'Limited slots available'
    ],
    images: [
      { src: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=1200', alt: 'Internship Training', type: 'students' },
      { src: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1200', alt: 'Professional Development', type: 'office' },
      { src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200', alt: 'On-Job Training', type: 'info' },
      { src: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=1200', alt: 'Industry Experience', type: 'consulting' }
    ],
    category: 'medical-global'
  }
];

export function getCourseById(id: string): CourseDetail | undefined {
  return courses.find(course => course.id === id);
}

export function getCoursesByCategory(category: string): CourseDetail[] {
  return courses.filter(course => course.category === category);
}

