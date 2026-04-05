// ─── Types ───────────────────────────────────────────────────────────────────

interface ExperienceEntry {
  company: string;
  role: string;
  period: string;
  location: string;
  highlights: string[];
}

interface CaseStudy {
  problem: string;
  solution: string;
  result: string;
}

interface Project {
  name: string;
  period: string;
  stack: string[];
  github: string;
  live: string;
  image: string;
  featured: boolean;
  caseStudy: CaseStudy | null;
  highlights: string[];
}

interface Certification {
  name: string;
  issuer: string;
  url: string;
  year: string;
}

interface LeadershipEntry {
  role: string;
  org: string;
  period: string;
  highlights: string[];
}

interface Education {
  institution: string;
  location: string;
  degree: string;
  period: string;
  cgpa: string;
}

interface GitHubStatsData {
  username: string;
  streakUrl: string;
  statsUrl: string;
}

interface Data {
  name: string;
  title: string;
  tagline: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  photo: string;
  resumeUrl: string;
  currentlyWorkingOn: string;
  about: string;
  githubStats: GitHubStatsData;
  experience: ExperienceEntry[];
  projects: Project[];
  skills: Record<string, string[]>;
  certifications: Certification[];
  coursework: string[];
  leadership: LeadershipEntry[];
  education: Education;
  interests: string[];
}

// ─── Data ────────────────────────────────────────────────────────────────────

export const data: Data = {
  name: "Garvita Dalmia",
  title: "Frontend Developer",
  tagline:
    "Specializing in scalable, high-performance web applications using React, Next.js, and TypeScript.",
  email: "garvitadalmia2004@gmail.com",
  phone: "+91 9550195466",
  linkedin: "https://linkedin.com/in/garvita-dalmia",
  github: "https://github.com/garvita-d",
  photo: "/photo.jpeg",
  resumeUrl: "/GARVITA DALMIA RESUME.pdf",

  currentlyWorkingOn:
    "Frontend Intern @ Analytics Quad4 — AntD styling, Recharts, React",

  about: `I'm a final year Computer Science student at Mahindra University, Hyderabad, with hands-on experience building production-grade web applications. I care deeply about performance, clean code, and pixel-perfect UIs — from achieving 100/100 PageSpeed scores to building real-time analytics dashboards that reduced client reporting time by 40%.`,

  githubStats: {
    username: "garvita-d",
    streakUrl:
      "https://streak-stats.demolab.com?user=garvita-d&theme=transparent&hide_border=true&ring=c85a2e&fire=c85a2e&currStreakLabel=c85a2e",
    statsUrl: "https://ghchart.rshah.org/c85a2e/garvita-d",
  },

  experience: [
    {
      company: "Analytics Quad4",
      role: "Frontend Developer Intern",
      period: "Feb 2026 – Present",
      location: "Bangalore, India (In-office)",
      highlights: [
        "Engineered real-time analytics dashboard processing live booking data, reducing client reporting time by ~40% using React, Ant Design, Recharts, and dayjs.",
        "Built 6+ interactive data visualizations (revenue segmentation, booking trends), optimizing with useMemo and reducing re-renders by ~30%.",
        "Converted Figma designs into responsive, pixel-accurate UI using React hooks and reusable components.",
      ],
    },
    {
      company: "What Next Studio",
      role: "Frontend Developer Intern",
      period: "Nov 2025 – Jan 2026",
      location: "Hyderabad, India (Remote)",
      highlights: [
        "Delivered 6+ features across 2 production codebases (Next.js, TypeScript) — dark/light mode, About Us page, blog integration, footer redesign from Figma.",
        "Achieved 100/100 PageSpeed score across all Core Web Vitals by eliminating render-blocking resources and optimizing for Vercel deployment.",
        "Implemented full SEO infrastructure (robots.txt, llms.txt, sitemap.xml, RSS feeds, Open Graph, meta descriptions) and set up n8n automation, reducing manual effort by ~60%.",
        "Followed professional Git workflows: feature branching, PR creation with screen-recorded demos, and async collaboration via Discord.",
      ],
    },
  ],

  projects: [
    {
      name: "inFlow – Financial Dashboard",
      period: "March – April 2026",
      stack: [
        "React",
        "Ant Design",
        "Recharts",
        "Supabase",
        "Zustand",
        "TanStack Query",
      ],
      github: "https://github.com/garvita-d/finance-dashboard",
      live: "https://finance-dashboard-one-neon.vercel.app",
      image: "/screenshots/inflow.png",
      featured: true,
      caseStudy: {
        problem:
          "Needed a personal finance tool that was actually pleasant to use — most apps feel cluttered or require a backend to manage.",
        solution:
          "Built a full-stack dashboard using Supabase as a zero-backend BaaS: auth, PostgreSQL, and Row Level Security keep each user's data completely isolated without writing a single server function.",
        result:
          "Clean, responsive UI with dark/light mode, Recharts visualisations, and CSV export — deployed on Vercel in under a minute.",
      },
      highlights: [
        "Full-stack finance dashboard with Supabase Auth and Row Level Security ensuring per-user data isolation — zero custom backend code.",
        "Responsive UI with SCSS Modules, mobile bottom navigation, and system-aware dark/light theming via CSS custom properties.",
        "Integrated Recharts with custom tooltips; TanStack React Query for server state, Zustand for global state.",
      ],
    },
    {
      name: "Dalmia Hardware — Live Business Website",
      period: "Dec 2025 – Jan 2026",
      stack: ["Next.js", "React", "TypeScript", "Google Analytics", "SEO"],
      github: "",
      live: "https://dalmiahardware.com",
      image: "/screenshots/dalmia.png",
      featured: false,
      caseStudy: null,
      highlights: [
        "Built and deployed a production business website with dynamic product listings and full SEO strategy.",
        "Integrated Google Analytics and meta tag automation, achieving measurable improvements in traffic tracking.",
      ],
    },
    {
      name: "Medicine Reminder PWA",
      period: "June – Aug 2025",
      stack: [
        "React",
        "JavaScript ES6+",
        "CSS3",
        "Web Notifications API",
        "Google Calendar API",
      ],
      github: "https://github.com/garvita-d/medicines-tracker",
      live: "",
      image: "/screenshots/medicines.png",
      featured: false,
      caseStudy: null,
      highlights: [
        "PWA managing 12+ daily medications for 2 users with inventory alerts, voice assistant integration, and offline support.",
        "Deployed on Netlify with cross-device accessibility and Google Calendar sync.",
      ],
    },
  ],

  skills: {
    Languages: [
      "JavaScript (ES6+)",
      "TypeScript",
      "Python",
      "Java",
      "C",
      "SQL",
    ],
    Frontend: [
      "React.js",
      "Next.js",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "SCSS Modules",
      "Ant Design",
      "Vite",
    ],
    "State & Data": [
      "Zustand",
      "TanStack React Query",
      "Supabase (PostgreSQL)",
      "REST APIs",
    ],
    "Visualization & ML": [
      "Recharts",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "Matplotlib",
    ],
    "Performance & SEO": [
      "Core Web Vitals",
      "PageSpeed Optimization",
      "Open Graph",
      "Sanity CMS",
      "sitemap.xml",
      "llms.txt",
    ],
    Tools: [
      "Git",
      "GitHub",
      "Vercel",
      "Netlify",
      "Postman",
      "VS Code",
      "n8n",
      "Google Analytics",
    ],
  },

  certifications: [
    {
      name: "Full-Stack Web Development Bootcamp",
      issuer: "Udemy",
      url: "https://www.udemy.com/certificate/UC-7601deee-029f-4e13-bc27-4e3d4d635f59/",
      year: "2025",
    },
  ],

  coursework: [
    "Object-Oriented Programming",
    "Data Structures & Algorithms",
    "Operating Systems",
    "Database Management Systems",
    "Software Engineering",
    "Machine Learning",
  ],

  leadership: [
    {
      role: "Media & Content Officer",
      org: "Mahindra Alumni Relations Center",
      period: "2024 – Present",
      highlights: [
        "Managed official social media platforms and increased engagement by 30% through targeted content strategies.",
        "Led visual content creation including posters and digital campaigns for alumni events.",
      ],
    },
    {
      role: "Student Ambassador",
      org: "Mahindra University",
      period: "2023 – Oct 2025",
      highlights: [
        "Guided prospective students and parents through the Univiser platform with personalized campus information.",
        "Recognized among Top 3 Ambassadors university-wide for 2024–2025.",
      ],
    },
  ],

  education: {
    institution: "Mahindra University",
    location: "Hyderabad, Telangana",
    degree: "B.Tech in Computer Science and Engineering",
    period: "Sept 2022 – Present",
    cgpa: "7.4 / 10 (till 7th semester)",
  },

  interests: ["Painting", "Badminton", "Movies"],
};
