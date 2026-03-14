export interface Experience {
  company: string;
  role: string;
  period: string;
  points: string[];
  color: string;
  category: "professional" | "leadership" | "coordination";
  images?: string[];
}

export const experiences: Experience[] = [
  // ── Professional Experience ──
  {
    company: "Diskominfosantik (Kominfo)",
    role: "Software Developer Intern",
    period: "2025 - Present",
    category: "professional",
    points: [
      "Developed a full-stack Digital Selection & Training Management System (Web Disnaker) using React (Vite), Tailwind CSS, and Express.js.",
      "Engineered complex app routing and robust backend structures for efficient job vacancy management.",
      "Created interactive admin dashboards featuring dynamic SVG data visualizations for real-time monitoring.",
      "Transformed static UI/UX prototypes into a scalable, production-ready application for public service digital initiatives."
    ],
    color: "#2B7FFF",
    images: [
      "/images/experience/kominfo-1.png",
    
    ]
  },

  // ── Organizational Leadership ──
  {
    company: "PUMA Informatics",
    role: "Vice Head of HRD",
    period: "2024 - 2025",
    category: "leadership",
    points: [
      "Monitor and evaluate the performance of 50+ organization members and monthly event execution through data-driven tracking systems.",
      "Lead the \"Informatics Aspiration\" program to bridge communication between students and the faculty.",
      "Organize \"Division Gatherings\" and internal bonding programs to maintain organizational synergy and member retention.",
      "Oversee internal projects like \"Pormatics\" to foster a competitive and collaborative environment within the major."
    ],
    color: "#FDC700",
    images: [
      "/images/experience/puma-1.jpeg",
      "/images/experience/puma-2.png",
      "/images/experience/puma-3.jpeg",
    ]
  },
  {
    company: "PUMA Informatics",
    role: "Project Manager — Temu Alumni",
    period: "2024",
    category: "leadership",
    points: [
      "Directed the end-to-end execution of a high-profile networking event, connecting current students with professional alumni.",
      "Supervised a multidisciplinary team, overseeing concept development, financial budgeting, and strict timeline execution.",
      "Facilitated professional collaboration opportunities by managing high-level coordination with alumni representatives."
    ],
    color: "#A855F7",
    images: [
      "/images/experience/temualumni-1.png",
      "/images/experience/temualumni-2.JPG",
      "/images/experience/temualumni-3.jpeg",
    ]
  },
  {
    company: "PUMA Informatics",
    role: "Supervisor — Workshop Alumni",
    period: "2024",
    category: "leadership",
    points: [
      "Supervised the execution of alumni workshop events, ensuring alignment with organizational goals and participant engagement.",
      "Guided the event committee in logistics, scheduling, and smooth professional coordination with guest alumni."
    ],
    color: "#EF4444",
    images: [
      "/images/experience/workshop-1.JPG",
      "/images/experience/workshop-2.png",
    ]
  },

  // ── Project & Event Coordination ──
  {
    company: "Klik-Klik Coddoc",
    role: "PIC Logistic & Event Organizer",
    period: "2024",
    category: "coordination",
    points: [
      "Managed all technical and venue logistics for a social project aimed at introducing digital literacy to elementary school students.",
      "Ensured smooth operation by coordinating equipment deployment and team roles during interactive tech demonstrations."
    ],
    color: "#F97316",
    images: [
      "/images/experience/coddoc-1.jpeg",
      "/images/experience/coddoc-2.jpeg",
    ]
  },
  {
    company: "Unitics (Welcoming Member)",
    role: "PIC Event Organizer",
    period: "2024",
    category: "coordination",
    points: [
      "Planned and executed the official onboarding event for new Informatics students to ensure successful cultural integration.",
      "Designed the event flow and activities to foster a sense of belonging and community among incoming members."
    ],
    color: "#10B981",
    images: [
      "/images/experience/unitics-1.jpeg",
      "/images/experience/unitics-2.jpeg",
    ]
  },
  {
    company: "PUMA Informatics",
    role: "Fundraising (FR) & F&B — Company Visit",
    period: "2024",
    category: "coordination",
    points: [
      "Strategized and executed fundraising initiatives to secure financial support for industrial visit programs.",
      "Developed sponsorship proposals and managed relationships with external partners to meet project budget requirements."
    ],
    color: "#EC4899",
    images: [
      "/images/experience/fr-1.JPG",
      "/images/experience/fr-2.png",
    ]
  },
  {
    company: "PUMA Informatics",
    role: "PIC Food & Beverage — Infoorum (Farewell)",
    period: "2024",
    category: "coordination",
    points: [
      "Supervised the hospitality and logistical management of catering services for the PUMA Informatics farewell ceremony.",
      "Managed budget allocation for food and beverages while ensuring high-quality service for all attendees."
    ],
    color: "#06B6D4",
    images: [
      "/images/experience/infoorum-1.jpeg",
    ]
  },
  {
    company: "PUFA Computer Science",
    role: "Exhibition Division — Compshere",
    period: "2024",
    category: "coordination",
    points: [
      "Organized and managed the exhibition of standout and final-year student projects to showcase academic achievements.",
      "Ensured maximum visibility and engagement by carefully curating the presentation of sensational technology projects."
    ],
    color: "#8B5CF6", // A distinct purple color
    images: [
      "/images/experience/compshere-1.jpeg",
      "/images/experience/compshere-2.jpeg",
      "/images/experience/compshere-3.png",
    ]
  },
];