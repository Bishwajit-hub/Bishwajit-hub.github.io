export const profile = {
  name: 'Bishwajit Dhar',
  initials: 'BD',
  role: 'Full-Stack Development Intern',
  availability: 'Open to internships from September 2026',
  location: 'Hoofddorp, Netherlands',
  lede:
    "Second-year IT student at Inholland University of Applied Sciences, building full-stack applications with C#, ASP.NET MVC, PHP, JavaScript and Vue.js — from Figma prototype to working backend.",
  email: 'bishwajitdhar61140@gmail.com',
  phone: '+31 6 16555337',
  phoneHref: 'tel:+31616555337',
  github: 'https://github.com/Bishwajit-hub',
  linkedin: 'https://linkedin.com/in/bishwajit-dhar-868880316',
  linkedinLabel: 'linkedin.com/in/bishwajit-dhar-868880316',
  cv: '/Bishwajit_Dhar_CV.pdf',
  photo: '/profile-photo.jpg',
}

export const stats = [
  { value: '4+', label: 'Full-stack projects shipped' },
  { value: '3', label: 'Languages spoken' },
  { value: '2026', label: 'Graduating & internship-ready' },
]

export const projects = [
  {
    date: 'Mar 2026 – May 2026',
    title: 'Haarlem Festival',
    subtitle: 'Multi-Event Website',
    org: 'Inholland group project',
    gradient: 'from-blue-500 to-cyan-400',
    bullets: [
      'Built the "Stories" event section of a dynamic festival website in PHP, taking it from Figma prototype to working web pages.',
      'Designed the MySQL database schema and wrote the queries powering event listings, filtering, and the ticket booking flow.',
      'Developed responsive frontend pages with event cards and age-based filtering, refined through documented usability testing.',
    ],
    tags: ['PHP', 'MySQL', 'HTML5', 'CSS3', 'JavaScript', 'Figma'],
    link: 'https://github.com/KaamiAhmed/Haarlem-Festival',
  },
  {
    date: 'Sep 2025 – Nov 2025',
    title: 'Jetto',
    subtitle: 'Inventory Management System',
    org: 'Personal project',
    gradient: 'from-emerald-500 to-teal-400',
    bullets: [
      'Built a full inventory management system in plain PHP with an MVC-style structure — controllers, models, views, and a repository/service layer for products, stock movements, and users.',
      'Implemented core inventory features: product/category management, stock tracking, and a dashboard summarizing totals and recent activity.',
      'Added authentication with hashed passwords and secure, httpOnly/SameSite session cookies, and containerized the app with Docker.',
    ],
    tags: ['PHP', 'MySQL', 'JavaScript', 'Docker'],
    link: 'https://github.com/Bishwajit-hub/inventory-management-system',
  },
  {
    date: 'Apr 2025 – Jun 2025',
    title: 'Chapeau',
    subtitle: 'Restaurant Ordering System',
    org: 'Inholland academic project',
    gradient: 'from-orange-500 to-amber-400',
    bullets: [
      'Designed the full UI/UX in Figma, then developed a complete ordering system covering table management, order flow, and kitchen/bar views.',
      'Implemented database design and CRUD functionality in C# with MS SQL Server, focusing on data integrity and fast lookups.',
    ],
    tags: ['C#', 'MS SQL Server', 'Figma'],
    link: 'https://github.com/Rakib730066/Chapeau-ordering-system/tree/Developer',
  },
  {
    date: 'Feb 2025 – Apr 2025',
    title: 'Someren',
    subtitle: 'Database Project',
    org: 'Inholland academic project',
    gradient: 'from-violet-500 to-purple-400',
    bullets: [
      'Built a management application to organize activities, participants, and supervisors for a residential program.',
      'Implemented a layered architecture (UI, service, and data-access layers) to keep the codebase maintainable and testable.',
    ],
    tags: ['C#', 'MS SQL Server'],
    link: 'https://github.com/Milen714/Database-Project-1A-Group4',
  },
]

export const timeline = [
  {
    kind: 'WORK',
    date: 'Sep 2024 – Present',
    title: 'Front Desk Receptionist',
    org: 'The Times Hotel, Amsterdam',
    bullets: [
      'Manage guest check-ins, check-outs, reservations, and payment processing with accuracy and a welcoming, professional manner.',
      'Handle phone, email, and third-party platform enquiries (e.g. Booking.com) in English, while ensuring guest and premises safety.',
    ],
    type: 'work',
  },
  {
    kind: 'EDUCATION',
    date: '2024 – Present',
    title: 'BSc Information Technology',
    org: 'Inholland University of Applied Sciences, Haarlem, Netherlands',
    bullets: [],
    type: 'education',
  },
]

export const skills = [
  {
    group: 'Languages & Frameworks',
    icon: 'Code2',
    items: ['C#', 'ASP.NET MVC', 'PHP', 'JavaScript', 'Vue.js', 'HTML5', 'CSS3'],
  },
  {
    group: 'Databases',
    icon: 'Database',
    items: ['MS SQL Server', 'MySQL', 'MongoDB'],
  },
  {
    group: 'Cloud & Tools',
    icon: 'Cloud',
    items: ['Microsoft Azure', 'Git & GitHub', 'Docker', 'REST APIs', 'Figma'],
  },
  {
    group: 'Practices',
    icon: 'ListChecks',
    items: ['Object-Oriented Programming', 'Agile/Scrum', 'Responsive Design', 'UI/UX Prototyping'],
  },
]

export const languages = [
  { name: 'Bengali', level: 'Native', pct: 100 },
  { name: 'English', level: 'C1 reading · B2 speaking/writing', pct: 80 },
  { name: 'Hindi / Urdu', level: 'Basic', pct: 40 },
]
