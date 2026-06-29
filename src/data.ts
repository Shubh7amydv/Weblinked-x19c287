export interface ERPModule {
  id: string;
  name: string;
  category: 'Academics' | 'Administration' | 'Communication' | 'Finance';
  description: string;
  features: string[];
  iconName: string;
}

export interface Advantage {
  id: string;
  title: string;
  description: string;
  iconName: string;
  techTag: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  schoolName: string;
  board: string;
  rating: number;
}

export interface ShowcaseSchool {
  id: string;
  name: string;
  city: string;
  tag: string;
  image: string;
  achievement: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  bullets?: string[];
  isCurrent?: boolean;
}

export const ERP_MODULES: ERPModule[] = [
  // Row 1
  {
    id: 'transport',
    name: 'Transport Management System',
    category: 'Administration',
    description: 'The transport management software helps students, parents, staff and management.',
    features: ['Live Route GPS Tracking', 'Driver bio-verification', 'Vehicle speed safety alerts', 'Offline boarding registries'],
    iconName: 'Bus'
  },
  {
    id: 'library',
    name: 'Library Management System',
    category: 'Administration',
    description: 'The Library management software helps in operating library with an automated system.',
    features: ['Book issue & return tracker', 'Auto late fine calculations', 'Barcoded catalog scanning', 'Digital subscription library'],
    iconName: 'BookOpen'
  },
  {
    id: 'timetable',
    name: 'Timetable Management',
    category: 'Academics',
    description: 'Teachers and administrators can generate and alter timetables using easily.',
    features: ['Proxy allocation matrix', 'Room overlap auto-checker', 'Teacher schedule dashboard', 'Dynamic batch splits'],
    iconName: 'Calendar'
  },
  // Row 2
  {
    id: 'fee-management',
    name: 'Accounting: Managing School Fee System',
    category: 'Finance',
    description: 'This Software helps in managing student fee collection records.',
    features: ['UPI checkout integration', 'Instant printed receipts', 'Fee rebate & waiver manager', 'Tally XML / CSV ledger imports'],
    iconName: 'CreditCard'
  },
  {
    id: 'alerts',
    name: 'Alert Management System',
    category: 'Communication',
    description: 'Alert management system Helps to keep track of ongoing tasks and their current status.',
    features: ['Real-time push alerts', 'Instant absenteeism broadcast alerts', 'Auto-scheduling trigger notifications', 'Multi-channel dispatch'],
    iconName: 'Bell'
  },
  {
    id: 'parent-portal',
    name: 'Parent — Teacher Interaction Module',
    category: 'Communication',
    description: 'School ERP software helps parents to get real-time access to their child\'s daily performance.',
    features: ['One-click direct teacher text', 'Homework progress reports', 'Parent feedback loops', 'Instant behavior notifications'],
    iconName: 'Heart'
  },
  // Row 3
  {
    id: 'visitor',
    name: 'Visitor Management System',
    category: 'Administration',
    description: 'This system helps to create a appropriate visitor management record for school.',
    features: ['OTP gate pass generation', 'Visitor photo database', 'Overstay alerts & logs', 'Security terminal monitoring'],
    iconName: 'FileText'
  },
  {
    id: 'attendance',
    name: 'Attendance Management System',
    category: 'Academics',
    description: 'Attendance management system helps to keep track of daily attendance in real-time.',
    features: ['RFID card swipe reader', 'Biometric fingertip registry', 'Subject-wise session tracker', 'Late arrival automatic triggers'],
    iconName: 'CheckSquare'
  },
  {
    id: 'discipline',
    name: 'Discipline Management System',
    category: 'Academics',
    description: 'This module assist to monitor and maintain student discipline and run a school with a good and productive atmosphere.',
    features: ['Merit/demerit score logs', 'Incident reporting dashboard', 'Parent warning system', 'Suspension & counsel track files'],
    iconName: 'Shield'
  },
  // Row 4
  {
    id: 'leave',
    name: 'Leave Management System',
    category: 'Administration',
    description: 'This software simplifies the process and status of leave, daily attendance record.',
    features: ['Sick leave application flow', 'Teacher sub duty requests', 'Monthly balance analyzer', 'Multi-level approval loops'],
    iconName: 'Clock'
  },
  {
    id: 'elearning',
    name: 'E-Learning System: Virtual Classroom',
    category: 'Academics',
    description: 'This system helps to conduct real-time online web classes.',
    features: ['HD class video streams', 'Cloud digital notes storage', 'Live whiteboard markers', 'Interactive home assignment sheets'],
    iconName: 'Monitor'
  },
  {
    id: 'tc-generation',
    name: 'Transfer Certificate Generation System',
    category: 'Administration',
    description: 'It helps in easy, effortless and time saving generation of transfer certificate.',
    features: ['NOC clearance checks', 'Verified PDF signatures', 'Serial key certificate ledger', 'Alumni list archives'],
    iconName: 'FileSpreadsheet'
  }
];

export const WHY_CHOOSE_US_ROWS = [
  {
    id: 'setup-migration',
    number: '01',
    title: 'Go Live in 4 Hours & Seamless Migration',
    tagline: 'RAPID ONBOARDING ENGINE',
    description: 'Your school is fully operational on Dettroin ERP within 4 hours of signup. No lengthy installations, no local IT team required — just log in and start managing. Migrate from any existing database in minutes. Export student records, fee history, and reports to Excel or PDF instantly with no vendor lock-in.',
    bullets: [
      'Zero setup friction: 100% cloud-native web console ready for use instantly.',
      'Import student profiles, parents directories, and billing templates in under 30 minutes.',
      'Complimentary initial training sessions provided for teachers, clerks, and administrators.'
    ],
    imageUrl: '/why-dettroin-1.jpg',
    alt: 'Modern workspace demonstrating school digital setup and migration'
  },
  {
    id: 'uptime-security',
    number: '02',
    title: '99.99% Uptime SLA & Encrypted Security',
    tagline: 'ENTERPRISE INFRASTRUCTURE',
    description: 'We back our platform with a 99.99% uptime Service Level Agreement. Your school operations never stop — not during admissions, not during exams, not ever. Your school\'s data is encrypted end-to-end, stored on secure Indian servers, and backed up automatically. ISO 27001 certified and fully compliant with Indian data protection norms.',
    bullets: [
      'Cloud-native architecture powered by real-time databases and failover systems.',
      'ISO 27001 certified data practices keeping parents and student profiles safe.',
      'Bank-grade AES-256 encryption at rest and secure SSL connections in transit.'
    ],
    imageUrl: '/why-dettroin-2.jpg',
    alt: 'High tech server room representing school database uptime SLA and security'
  },
  {
    id: 'automation-support',
    number: '03',
    title: 'Experience the Automation Jump & 24x7 Support',
    tagline: 'ALWAYS-ON CUSTOMER CARE',
    description: 'Eliminate repetitive admin work overnight. Fee reminders, attendance alerts, report card generation, and WhatsApp invoices — all automated so your staff focuses on students. Backed by round-the-clock support via call, WhatsApp, and chat in Hindi and English. A real person picks up every time, day or night.',
    bullets: [
      'Instant human support available 24/7/365 with fluent bilingual specialists.',
      'Automated dispatch logs for parent notification cards and WhatsApp notifications.',
      'Dynamic real-time dashboards mapping billing recovery, schedules, and alerts.'
    ],
    imageUrl: '/why-dettroin-3.jpg',
    alt: 'Customer support specialist working on school queries at desk'
  }
];

export const ERP_ADVANTAGES: Advantage[] = [
  {
    id: 'cloud',
    title: '99.9% Cloud Uptime Guarantee',
    description: 'Hosted on premium AWS & GCP clusters in Mumbai, ensuring latency-free database reading even under high-scale result updates.',
    iconName: 'CloudLightning',
    techTag: 'AWS / GCP Mumbai Core'
  },
  {
    id: 'integration',
    title: 'Tally & Accounting Handshake',
    description: 'Export structured ledger XML maps or CSV sheets designed to fit standard accounting packages without reformatting.',
    iconName: 'RefreshCw',
    techTag: 'Double Entry Integrity'
  },
  {
    id: 'security',
    title: 'ISO 27001 Data Privacy Standard',
    description: 'We apply AES-256 state encryption at rest, secure-socket layers for transfers, and strict custom user access parameters.',
    iconName: 'ShieldCheck',
    techTag: 'AES-256 & SSL'
  },
  {
    id: 'support',
    title: '24/7 Ground Operations Support',
    description: 'From system layout planning and roster importing to on-call database modifications, our engineers are accessible.',
    iconName: 'Headphones',
    techTag: 'Dedicated Relationship Manager'
  },
  {
    id: 'pwa',
    title: 'Offline-First Progressive Web App',
    description: 'Our mobile interfaces function perfectly in rural areas with interrupted connectivity, storing entries locally to sync on network resume.',
    iconName: 'WifiOff',
    techTag: 'IndexedDB Offline Cache'
  },
  {
    id: 'whatsapp',
    title: 'Official WhatsApp Business Api',
    description: 'Send fully formatted invoice PDFs or urgent rain holidays circulars directly into conversational windows with full tracing.',
    iconName: 'MessageSquareText',
    techTag: 'Official API Rerouting'
  }
];

export const CAPABILITIES = [
  {
    id: 'team',
    num: '45',
    suffix: '+',
    label: 'ON-FIELD SYSTEM ENGINEERS',
    text: 'Dedicated support experts spread across major Indian tier-1 and tier-2 clusters.'
  },
  {
    id: 'uptime',
    num: '99.99',
    suffix: '%',
    label: 'HISTORIC SYSTEM STABILITY',
    text: 'Redundant server mirroring to protect your institutional workflows from offline outages.'
  },
  {
    id: 'speed',
    num: '500',
    suffix: 'ms',
    label: 'AVERAGE DATABASE TRANSACTIONS',
    text: 'Engineered for smooth navigation on basic smartphones and average 4G limits.'
  }
];

export const TIMELINE: TimelineEvent[] = [
  {
    year: '2020',
    title: 'Foundation Year',
    description: 'Started with a vision to provide innovative IT solutions and software development services.'
  },
  {
    year: '2021',
    title: 'Building the Foundation',
    description: 'Constructed initial stability and customer relation frameworks.',
    bullets: [
      'Worked on initial client projects.',
      'Built relationships with early clients and partners.'
    ]
  },
  {
    year: '2022',
    title: 'Service Expansion',
    description: 'Extended our technology capabilities and broadened stack solutions.',
    bullets: [
      'Started offering custom software development services.',
      'Added new technology stacks and business solutions.'
    ]
  },
  {
    year: '2023',
    title: 'Growth & Recognition',
    description: 'Successfully scaled project completion and bolstered professional credibility.',
    bullets: [
      'Successfully completed multiple client projects.',
      'Strengthened company reputation through quality work.',
      'Focused on scalable software architecture and business applications.'
    ]
  },
  {
    year: '2024',
    title: 'ERP Development Phase',
    description: 'Entered the ERP and enterprise software domain.',
    bullets: [
      'Developed modules for Student Management.',
      'Designed systems for HR Management.',
      'Engineered Finance & Accounts modules.',
      'Constructed robust Inventory Management systems.'
    ]
  },
  {
    year: '2025',
    title: 'Scaling Operations',
    description: 'Enhanced cloud engineering, scale operations, and enterprise integration.',
    bullets: [
      'Worked on larger and more complex ERP projects.',
      'Enhanced software architecture and cloud deployment capabilities.',
      'Improved client support and maintenance services.',
      'Focused on automation, integrations, and digital transformation solutions.'
    ]
  },
  {
    year: '2026',
    title: 'Innovation & Future Vision',
    description: 'Established Dettroin as a growing technology and ERP solutions company.',
    bullets: [
      'Focused on AI-Powered Business Solutions.',
      'Constructed next-generation Enterprise ERP Systems.',
      'Developed High-Performance Cloud Applications.',
      'Engineered Workflow Automation Platforms.',
      'Created leading-edge Custom Software Development pipelines.'
    ],
    isCurrent: true
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    quote: "Dettroin totally transformed our fee management. We went from chasing parents over spreadsheets to 94% fee recovery within the first 10 days of the term. The automated WhatsApp bills are incredibly effective.",
    author: "Revathi Parthasarathy",
    role: "Managing Director",
    schoolName: "Vidyalankar International School",
    board: "CBSE Affiliated, Chennai",
    rating: 5
  },
  {
    id: 'test-2',
    quote: "The custom school website Dettroin designed and integrated with their ERP completely modernized our public image. Managing new online inquiries is now automated, saving our admission desk endless hours.",
    author: "Principal Sanjay Mehta",
    role: "In-charge Principal",
    schoolName: "Sardar Patel Higher Secondary Academy",
    board: "GSEB Affiliated, Vadodara",
    rating: 5
  },
  {
    id: 'test-3',
    quote: "As a multi-school trustee, keeping tabs on attendance, audit ledgers, and staff payroll was a nightmare. This unified dashboard gives me detailed analytics of 4 campuses from a single account.",
    author: "Dr. K. Raghavan",
    role: "Chairman & Founder",
    schoolName: "Apex Group of Institutions",
    board: "ICSE & State Board, Bengaluru",
    rating: 5
  }
];

export const SHOWCASE_SCHOOLS: ShowcaseSchool[] = [
  {
    id: 'sch-1',
    name: 'Sanskriti International Academy',
    city: 'New Delhi',
    tag: 'Elite CBSE Campus',
    image: 'https://images.unsplash.com/photo-1562774053-701939374585?w=600',
    achievement: 'Integrated GPS Tracking & Automated Fee Collection'
  },
  {
    id: 'sch-2',
    name: 'Metropolitan Public School',
    city: 'Mumbai Hub',
    tag: 'Premium ICSE Center',
    image: 'https://images.unsplash.com/photo-1604176354204-9268737828e4?w=600',
    achievement: 'Biometric Gate Security Syncing with 2,400 Parents'
  },
  {
    id: 'sch-3',
    name: 'Silver Oak Residential Academy',
    city: 'Dehradun Valley',
    tag: 'Premium Boarding School',
    image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?w=600',
    achievement: 'Custom Immersive Website & Hostel Inventory ERP'
  }
];

export const FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'How long does it take to migrate our existing student rosters into Dettroin?',
    answer: 'Complete migration takes between 3 to 7 business days. Our ground engineers import all your historical registers, student folders, fee templates, and teacher profiles, verifying them through our automated Excel checkers before the system goes live.',
    category: 'Onboarding'
  },
  {
    id: 'faq-2',
    question: 'Can the system handle regional Indian languages for notice broadcasts?',
    answer: 'Absolutely. Dettroin notice panels feature standard translation triggers supporting Hindi, Gujarati, Marathi, Tamil, Telugu, Kannada, Bengali, and Punjabi. Circulars can be generated in English and auto-translated to regional options on the parent portal.',
    category: 'Features'
  },
  {
    id: 'faq-3',
    question: 'Does your fee collection engine charge heavy commissions per payment transaction?',
    answer: 'No. Dettroin integrates directly with top Payment Gateways (Razorpay, Cashfree, Easebuzz) on your school credentials. UPI transactions are routed at 0% fees, while credit card/netbanking commissions go directly to secure processor paths with no hidden markups.',
    category: 'Pricing & Security'
  },
  {
    id: 'faq-4',
    question: 'Is student database privacy secure under Indian digital storage standards?',
    answer: 'Yes, Dettroin is ISO 27001 certified and fully compliant with Indian IT Act provisions for personal data. Database environments are hosted in AWS/GCP clusters in Mumbai with real-time replication and scheduled binary volume backups.',
    category: 'Pricing & Security'
  },
  {
    id: 'faq-5',
    question: 'What happens if our school has bad cellular connectivity during rains?',
    answer: 'Dettroin Progressive Apps run with an active local SQLite / IndexedDB cache memory. Teachers can still mark attendance, sync offline registers, or check schedules. State objects queue silently to merge back the split second standard signals resume.',
    category: 'Technical'
  }
];
