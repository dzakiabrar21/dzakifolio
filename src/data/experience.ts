export interface Experience {
  company: string;
  role: string;
  period: string;
  points: string[];
  color: string;
  category: "professional" | "leadership" | "coordination";
  images?: string[];
  logo?: string;
}

export const experiences: Experience[] = [
  // ── Professional Experience ──
  {
    company: "PT Bank Mandiri Tbk x Rakamin Academy",
    role: "Project-Based Intern — Mobile Application Developer",
    period: "May 2026 - Present",
    category: "professional",
    points: [
      "Engages in a project-based internship to develop a scalable mobile application within a simulated banking environment, focusing on delivering high-quality user experiences.",
      "Utilizes a modern technical stack to build cross-platform features, ensuring performance optimization and adherence to fintech industry standards.",
      "Collaborates on end-to-end mobile development tasks, from UI/UX implementation to integrating functional components for financial services."
    ],
    color: "#0ea5e9",
    logo: "/images/experience/logo-mandiri.jpg",
    images: []
  },
  {
    company: "Diskominfosantik (Kominfo)",
    role: "Software Developer Intern",
    period: "Oct 2025 - March 2026",
    category: "professional",
    points: [
      "Developed a full-stack Digital Selection & Training System (Web Disnaker) using React, Tailwind CSS, and Express.js.",
      "Built robust backend structures and complex routing for efficient job vacancy management.",
      "Created interactive admin dashboards with dynamic SVG data visualizations."
    ],
    color: "#2B7FFF",
    logo: "/images/experience/logo-kominfo.jpg",
    images: [
      "/images/experience/kominfo-1.png",
    ]
  },
  {
    company: "CodSoft",
    role: "Machine Learning Intern",
    period: "May 2026 – June 2026",
    category: "professional",
    points: [
      "Execute assigned machine learning tasks and projects to gain hands-on technical knowledge in the field.",
      "Focused on developing and mastering new skills through an intensive 1-month virtual internship program."
    ],
    color: "#10B981",
    logo: "/images/experience/logo-codsoft.jpg",
    images: [
      "/images/experience/codsoft-1.png",
    ]
  },

  // ── Organizational Leadership ──
  {
    company: "HANAPU (Himpunan Mahasiswa Aceh President University)",
    role: "Vice Chairperson",
    period: "2025 - Present",
    category: "leadership",
    points: [
      "Spearheads the strategic planning and internal management of the Acehnese student organization to ensure operational alignment with its core mission.",
      "Directs the preparation and creative branding for major university-wide events to highlight Acehnese cultural identity.",
      "Facilitates high-level coordination between various internal departments to streamline project execution and enhance member engagement."
    ],
    color: "#10B981",
    logo: "/images/experience/logo-hanapu.jpeg",
    images: [
      "/images/experience/hanapu-1.jpeg",
      "/images/experience/hanapu-2.jpeg",
    ]
  },
  {
    company: "PUMA Informatics",
    role: "Vice Head of HRD",
    period: "2024 - 2025",
    category: "leadership",
    points: [
      "Monitored and evaluated the performance of 50+ members through data-driven tracking systems.",
      "Led the 'Informatics Aspiration' program to bridge student-faculty communication.",
      "Organized internal bonding programs and gatherings to maintain organizational synergy.",
      "Supervised internal projects like 'Pormatics' to foster a collaborative environment."
    ],
    color: "#FDC700",
    logo: "/images/experience/logo-puma.png",
    images: [
      "/images/experience/puma-1.jpeg",
      "/images/experience/puma-2.png",
      "/images/experience/puma-3.jpeg",
    ]
  },
  {
    company: "OSDIQ (Organisasi Santri Dayah Insan Qur'ani)",
    role: "Head of Health and Cleanliness Division",
    period: "2023 - 2024",
    category: "leadership",
    points: [
      "Spearheaded health and cleanliness initiatives to maintain high-quality living and environmental standards for the student community.",
      "Supervised the implementation of routine hygiene protocols and sanitary maintenance across all campus facilities.",
      "Managed resources and coordinated with division members to ensure the health and well-being of fellow students throughout the 2023-2024 term."
    ],
    color: "#06B6D4",
    logo: "/images/experience/logo-osdiq.png",
    images: [
      "/images/experience/osdiq-1.png",
      "/images/experience/osdiq-2.png",
      "/images/experience/osdiq-3.png",
    ]
  },
  // ── Project & Event Coordination ──
  {
    company: "Temu Alumni",
    role: "Project Manager • PUMA Informatics",
    period: "2024",
    category: "coordination",
    points: [
      "Directed the end-to-end execution of a networking event connecting students with alumni.",
      "Supervised the team across concept development, budgeting, and timeline execution.",
      "Managed high-level coordination with alumni representatives."
    ],
    color: "#A855F7",
    images: [
      "/images/experience/temualumni-1.png",
      "/images/experience/temualumni-2.JPG",
      "/images/experience/temualumni-3.jpeg",
    ]
  },
  {
    company: "Workshop Alumni",
    role: "Supervisor • PUMA Informatics",
    period: "2024",
    category: "coordination",
    points: [
      "Supervised alumni workshop events, ensuring participant engagement and goal alignment.",
      "Guided the committee in logistics, scheduling, and coordination with guest alumni."
    ],
    color: "#EF4444",
    images: [
      "/images/experience/workshop-1.JPG",
      "/images/experience/workshop-2.png",
    ]
  },
  {
    company: "Klik-Klik Coddoc",
    role: "PIC Logistic & Event Organizer",
    period: "2024",
    category: "coordination",
    points: [
      "Managed technical and venue logistics for a digital literacy social project.",
      "Coordinated equipment deployment and team roles during interactive tech demonstrations."
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
      "Planned and executed the official onboarding event for new Informatics students.",
      "Designed event activities to foster a sense of belonging among incoming members."
    ],
    color: "#10B981",
    images: [
      "/images/experience/unitics-1.jpeg",
      "/images/experience/unitics-2.jpeg",
    ]
  },
  {
    company: "Company Visit",
    role: "Fundraising (FR) & F&B • PUMA Informatics",
    period: "2024",
    category: "coordination",
    points: [
      "Executed fundraising initiatives to secure support for industrial visit programs.",
      "Developed sponsorship proposals and managed relationships with external partners."
    ],
    color: "#EC4899",
    images: [
      "/images/experience/fr-1.JPG",
      "/images/experience/fr-2.png",
    ]
  },
  {
    company: "Infoorum (Farewell)",
    role: "PIC Food & Beverage • PUMA Informatics",
    period: "2024",
    category: "coordination",
    points: [
      "Supervised hospitality and logistical management of catering for the farewell ceremony.",
      "Managed budget allocation for food and beverages, ensuring high-quality service."
    ],
    color: "#06B6D4",
    images: [
      "/images/experience/infoorum-1.jpeg",
      "/images/experience/infoorum-2.jpeg",
    ]
  },
  {
    company: "Compshere",
    role: "Exhibition Division • PUFA Computer Science",
    period: "2024",
    category: "coordination",
    points: [
      "Organized the exhibition of standout student projects to showcase academic achievements.",
      "Curated project presentations to ensure maximum visibility and engagement."
    ],
    color: "#8B5CF6",
    images: [
      "/images/experience/compshere-1.jpeg",
      "/images/experience/compshere-2.jpeg",
      "/images/experience/compshere-3.png",
    ]
  },
  {
    company: "Company Visit",
    role: "PR Internal • PUMA Informatics",
    period: "2024",
    category: "coordination",
    points: [
      "Managed internal communications and announcements to engage and inform informatics students about the event.",
      "Produced live reports and creative digital content to document the industry visit in real-time."
    ],
    color: "#F59E0B",
    images: [
      "/images/experience/printernal-1.jpg",
      "/images/experience/printernal-2.jpeg",
    ]
  },
  {
    company: "Guest Lecture",
    role: "PR Moderator • PUMA Informatics",
    period: "2024",
    category: "coordination",
    points: [
      "Served as the official moderator, bridging the professional dialogue between guest lecturers and student participants.",
      "Facilitated and managed Q&A sessions to ensure a structured and insightful exchange of knowledge."
    ],
    color: "#EF4444",
    images: [
       "/images/experience/guestlecture-1.jpeg",
      
    ]
  },
];