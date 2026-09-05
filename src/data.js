export const profile = {
  name: 'Bishwajit Dhar',
  role: 'Full-Stack Development Intern',
  availability: 'Open to internships from September 2026',
  location: 'Hoofddorp, Netherlands',
  lede:
    "Second-year IT student at Inholland University of Applied Sciences, building full-stack applications with C#, ASP.NET MVC, PHP, JavaScript and Vue.js — from Figma prototype to working backend. Based in Hoofddorp, Netherlands.",
  email: 'bishwajitdhar61140@gmail.com',
  phone: '+31 6 16555337',
  phoneHref: 'tel:+31616555337',
  github: 'https://github.com/Bishwajit-hub',
  linkedin: 'https://linkedin.com/in/bishwajit-dhar-868880316',
  linkedinLabel: 'linkedin.com/in/bishwajit-dhar-868880316',
  cv: '/Bishwajit_Dhar_CV.pdf',
  photo: '/profile-photo.jpg',
}

export const journey = [
  {
    kind: 'PROJECT',
    date: 'Mar 2026 – May 2026',
    title: 'Haarlem Festival — Multi-Event Website',
    org: 'Inholland group project',
    bullets: [
      'Built the "Stories" event section of a dynamic festival website in PHP, taking it from Figma prototype to working web pages.',
      'Designed the MySQL database schema and wrote the queries powering event listings, filtering, and the ticket booking flow.',
      'Developed responsive frontend pages with event cards and age-based filtering, refined through documented usability testing.',
    ],
    tags: ['PHP', 'MySQL', 'HTML5', 'CSS3', 'JavaScript', 'Figma'],
    link: 'https://github.com/KaamiAhmed/Haarlem-Festival',
    type: 'project',
  },
  {
    kind: 'PROJECT',
    date: 'Sep 2025 – Nov 2025',
    title: 'Jetto — Inventory Management System',
    org: 'Personal project',
    bullets: [
      'Built a full inventory management system in plain PHP with an MVC-style structure — controllers, models, views, and a repository/service layer for products, stock movements, and users.',
      'Implemented core inventory features: product and category management, stock quantity updates, and tracking of sales, purchases, waste, and adjustments, plus a dashboard summarizing totals and recent activity.',
      'Added user authentication (login, registration, logout, password reset) with hashed passwords and secure, httpOnly/SameSite session cookies, and containerized the app with Docker for local setup.',
    ],
    tags: ['PHP', 'MySQL', 'JavaScript', 'Docker'],
    link: 'https://github.com/Bishwajit-hub/inventory-management-system',
    type: 'project',
  },
  {
    kind: 'PROJECT',
    date: 'Apr 2025 – Jun 2025',
    title: 'Chapeau — Restaurant Ordering System',
    org: 'Inholland academic project',
    bullets: [
      'Designed the full UI/UX in Figma, then developed a complete ordering system covering table management, order flow, and kitchen/bar views.',
      'Implemented database design and CRUD functionality in C# with MS SQL Server, focusing on data integrity and fast lookups.',
    ],
    tags: ['C#', 'MS SQL Server', 'Figma'],
    link: 'https://github.com/Rakib730066/Chapeau-ordering-system/tree/Developer',
    type: 'project',
  },
  {
    kind: 'PROJECT',
    date: 'Feb 2025 – Apr 2025',
    title: 'Someren Database Project',
    org: 'Inholland academic project',
    bullets: [
      'Built a management application to organize activities, participants, and supervisors for a residential program.',
      'Implemented a layered architecture (UI, service, and data-access layers) to keep the codebase maintainable and testable.',
    ],
    tags: ['C#', 'MS SQL Server'],
    link: 'https://github.com/Milen714/Database-Project-1A-Group4',
    type: 'project',
  },
  {
    kind: 'WORK',
    date: 'Sep 2024 – Present',
    title: 'Front Desk Receptionist',
    org: 'The Times Hotel, Amsterdam',
    bullets: [
      'Manage guest check-ins, check-outs, reservations, and payment processing with accuracy and a welcoming, professional manner.',
      'Handle phone, email, and third-party platform enquiries (e.g. Booking.com) in English, while ensuring guest and premises safety.',
    ],
    tags: [],
    link: null,
    type: 'work',
  },
  {
    kind: 'EDUCATION',
    date: '2024 – Present',
    title: 'BSc Information Technology',
    org: 'Inholland University of Applied Sciences, Haarlem, Netherlands',
    bullets: [],
    tags: [],
    link: null,
    type: 'education',
  },
]

export const skills = [
  {
    group: 'Languages & Frameworks',
    items: ['C#', 'ASP.NET MVC', 'PHP', 'JavaScript', 'Vue.js', 'HTML5', 'CSS3'],
  },
  {
    group: 'Databases',
    items: ['MS SQL Server', 'MySQL', 'MongoDB'],
  },
  {
    group: 'Cloud & Tools',
    items: ['Microsoft Azure', 'Git & GitHub', 'Docker', 'REST APIs', 'Figma'],
  },
  {
    group: 'Practices',
    items: ['Object-Oriented Programming', 'Agile/Scrum', 'Responsive Design', 'UI/UX Prototyping'],
  },
]

export const languages = [
  { name: 'Bengali', level: 'Native' },
  { name: 'English', level: 'C1 reading · B2 speaking/writing' },
  { name: 'Hindi / Urdu', level: 'Basic' },
]
