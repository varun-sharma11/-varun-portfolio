// All website content lives here. Edit this file to update the site.
// NOTE: Items marked "TODO" are placeholders — replace them with your real details.

export const profile = {
  name: "Varun Sharma",
  firstName: "Varun",
  initials: "VS",
  role: "Software Engineer",
  org: "Amity University Gwalior",
  location: "Gwalior, Madhya Pradesh, India",
  email: "varun.sharma@example.com", // TODO: your real email
  phone: "+91 00000 00000", // TODO: your real phone (or remove)
  resumeUrl: "#", // TODO: link to your resume PDF (put it in /public)
  tagline:
    "I design and build fast, reliable and beautiful software — from scalable backends to pixel-perfect interfaces — at Amity University Gwalior.",
  roles: [
    "Software Engineer",
    "Full-Stack Developer",
    "Cloud & DevOps Enthusiast",
    "Problem Solver",
  ],
  about: [
    "I'm a Software Engineer at Amity University Gwalior, where I build and maintain digital systems that serve students, faculty and administration every day.",
    "I enjoy turning complex problems into simple, elegant products. My work spans modern web frontends, robust APIs, databases and cloud infrastructure — always with a focus on performance, security and great user experience.",
  ],
  socials: {
    github: "https://github.com/", // TODO
    linkedin: "https://www.linkedin.com/", // TODO
    twitter: "https://x.com/", // TODO
  },
};

export const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "services", label: "Services" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Journey" },
  { id: "faq", label: "FAQ" },
  { id: "contact", label: "Contact" },
];

// TODO: replace with your real numbers
export const stats = [
  { value: 3, suffix: "+", label: "Years Coding" },
  { value: 25, suffix: "+", label: "Projects Built" },
  { value: 10, suffix: "k+", label: "Users Served" },
  { value: 15, suffix: "+", label: "Technologies" },
];

export const techStrip = [
  "React", "Next.js", "TypeScript", "Node.js", "Python", "Java", "PostgreSQL",
  "MongoDB", "Docker", "AWS", "Tailwind CSS", "Git", "Linux", "REST & GraphQL",
];

export const skillGroups = [
  {
    name: "Frontend",
    skills: [
      { name: "React / Next.js", level: 92 },
      { name: "TypeScript", level: 88 },
      { name: "Tailwind CSS", level: 90 },
      { name: "UI / UX Design", level: 78 },
    ],
  },
  {
    name: "Backend",
    skills: [
      { name: "Node.js / Express", level: 88 },
      { name: "Python", level: 82 },
      { name: "Java / Spring", level: 74 },
      { name: "SQL & NoSQL Databases", level: 85 },
    ],
  },
  {
    name: "Cloud & DevOps",
    skills: [
      { name: "Docker", level: 80 },
      { name: "AWS", level: 72 },
      { name: "CI / CD", level: 76 },
      { name: "Linux Administration", level: 82 },
    ],
  },
  {
    name: "Core",
    skills: [
      { name: "Data Structures & Algorithms", level: 86 },
      { name: "System Design", level: 76 },
      { name: "Testing", level: 78 },
      { name: "Git & Collaboration", level: 92 },
    ],
  },
];

export const services = [
  { icon: "code", title: "Web Development", text: "Modern, responsive web apps with React and Next.js — fast, accessible and SEO-friendly." },
  { icon: "server", title: "Backend & APIs", text: "Secure, scalable REST and GraphQL APIs with clean architecture and solid data models." },
  { icon: "cloud", title: "Cloud & DevOps", text: "Containerised deployments, CI/CD pipelines and cloud infrastructure that just works." },
  { icon: "database", title: "Data & Databases", text: "Schema design, query optimisation and dashboards that turn data into decisions." },
  { icon: "smartphone", title: "Responsive UI", text: "Interfaces that feel great on every screen — from phones to ultra-wide monitors." },
  { icon: "shield", title: "Security First", text: "Authentication, authorisation and best practices baked in from day one." },
];

// TODO: replace with your real projects
export const projects = [
  { title: "Campus Connect", category: "Web", description: "A unified student portal for timetables, results, notices and fee payments.", tags: ["Next.js", "Node.js", "PostgreSQL"], gradient: "from-cyan-500 to-blue-600", live: "#", code: "#" },
  { title: "SmartAttend", category: "AI/ML", description: "Face-recognition based attendance system with real-time analytics for faculty.", tags: ["Python", "OpenCV", "FastAPI"], gradient: "from-violet-500 to-fuchsia-600", live: "#", code: "#" },
  { title: "EduAnalytics", category: "Web", description: "Interactive dashboard visualising academic performance trends across departments.", tags: ["React", "D3.js", "MongoDB"], gradient: "from-emerald-500 to-teal-600", live: "#", code: "#" },
  { title: "DeployKit", category: "Cloud", description: "One-click CI/CD templates that containerise and ship apps to the cloud.", tags: ["Docker", "GitHub Actions", "AWS"], gradient: "from-orange-500 to-rose-600", live: "#", code: "#" },
  { title: "StudyBuddy AI", category: "AI/ML", description: "AI study assistant that summarises notes and generates practice quizzes.", tags: ["TypeScript", "LLMs", "Next.js"], gradient: "from-pink-500 to-purple-600", live: "#", code: "#" },
  { title: "EventHub", category: "Mobile", description: "Mobile app for discovering, registering and checking in to campus events.", tags: ["React Native", "Firebase"], gradient: "from-sky-500 to-indigo-600", live: "#", code: "#" },
];

// TODO: update with your real dates and history
export const journey = [
  { type: "work", title: "Software Engineer", org: "Amity University Gwalior", period: "Present", text: "Building and maintaining university software systems, internal tools and web platforms used across campus." },
  { type: "work", title: "Software Engineering Intern", org: "Company Name", period: "Earlier", text: "Shipped features for production web applications and learned to work in an agile team." },
  { type: "edu", title: "B.Tech, Computer Science", org: "Your Institute", period: "Graduated", text: "Focused on software engineering, data structures, databases and distributed systems." },
];

export const faqs = [
  { q: "What kind of projects do you work on?", a: "Mostly full-stack web applications, internal tools, APIs and cloud deployments — especially in education technology." },
  { q: "Which tech stack do you prefer?", a: "TypeScript with React / Next.js on the frontend, Node.js or Python on the backend, PostgreSQL or MongoDB for data, and Docker for deployment." },
  { q: "Are you open to collaborations?", a: "Yes! I'm happy to collaborate on interesting projects, open source and research. Use the contact form below to reach out." },
  { q: "How quickly do you reply?", a: "Usually within 24–48 hours." },
];
