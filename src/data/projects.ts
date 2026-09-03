export interface ProjectTechnology {
  name: string;
  category?: string;
  description?: string;
}

export interface ProjectFeature {
  title: string;
  desc: string;
}

export interface ProjectMetric {
  label: string;
  value: string;
  desc?: string;
}

export interface ProjectItem {
  slug: string;
  title: string;
  desc: string;
  tags: string[];
  accuracy?: string;
  category: string;
  popupDesc: string;
  link?: string;
  github?: string;
  demo?: string;
  images: string[];
  tagline?: string;
  overview?: string;
  introduction?: string;
  toolsTechnologies?: ProjectTechnology[];
  keyFeatures?: ProjectFeature[];
  methodology?: ProjectFeature[];
  results?: ProjectMetric[];
}

export const projects: ProjectItem[] = [
  {
    slug: "level-up",
    title: "Level Up – AI Developer & UI/UX",
    desc: "Adaptive digital education platform that transforms traditional curricula into an interactive video-game structure with personalized AI-driven learning paths.",
    tags: ["Next.js", "React 19", "Tailwind CSS", "Appwrite"],
    accuracy: "EdTech Platform",
    category: "Web Development / AI Education",
    popupDesc: "Adaptive digital education platform that transforms traditional curricula into an interactive video-game structure using Next.js (React 19) and Tailwind CSS, integrated with Appwrite Cloud as the BaaS backend. Developed an automated Onboarding Diagnostic Quiz to dynamically map user interests and engineered a secure system progression lock to ensure structured learning journeys.",
    link: "https://e-learning-softeng-project.vercel.app/main/dashboard/red?interest=sport",
    images: [
      "/images/projects/levelup-1.webp",
      "/images/projects/levelup-2.webp",
      "/images/projects/levelup-3.webp",
      "/images/projects/levelup-4.webp",
    ],
    tagline: "Gamified adaptive learning system with AI curriculum personalization",
    overview: "Level Up is an innovative digital education platform designed to address student disengagement in traditional digital learning. By structuring educational roadmaps like RPG game stages, the platform dynamically tailors subject difficulty, tracks mastery, and locks progression to ensure foundational competencies before advancing.",
    introduction: "Standard online learning environments frequently suffer from high drop-out rates due to static video catalogs and lack of intrinsic motivation. Level Up bridges this gap by merging gamification mechanics with intelligent diagnostic assessments, offering learners a tangible sense of achievement and personalized pacing.",
    toolsTechnologies: [
      { name: "Next.js & React 19", category: "Frontend Framework", description: "Server components, high-speed routing, and modern UI rendering." },
      { name: "Tailwind CSS", category: "Styling & Design System", description: "Custom sleek dark mode theme with glassmorphism and reactive layouts." },
      { name: "Appwrite Cloud", category: "Backend-as-a-Service", description: "Secure user authentication, real-time database, and storage management." },
      { name: "Framer Motion", category: "Animations", description: "Smooth gamified transitions, unlock animations, and interactive feedback." }
    ],
    keyFeatures: [
      { title: "Diagnostic Onboarding Engine", desc: "Interactive questionnaire mapping user skill baseline and learning interests to tailor the initial curriculum." },
      { title: "Gamified Stage Progression", desc: "Stage-lock architecture ensuring prerequisites are satisfied before unlocking subsequent challenges." },
      { title: "Dynamic Achievement & Stats", desc: "Real-time tracking of XP, completion rates, and learning streak indicators." },
      { title: "Interactive Resource Hub", desc: "Rich media modules with integrated quizzes and instant validation." }
    ],
    results: [
      { label: "Architecture", value: "React 19 + BaaS", desc: "Fully scalable and serverless" },
      { label: "User Engagement", value: "Gamified", desc: "Interactive RPG progression loop" },
      { label: "Deployment", value: "Vercel", desc: "Continuous integration & deployment" }
    ]
  },
  {
    slug: "smart-factory-sorting",
    title: "Autonomous Shape Sorting System (Smart Factory)",
    desc: "Prototipe otomasi industri yang mengintegrasikan Computer Vision (AI) dan IoT untuk mengklasifikasikan serta menyortir objek geometris secara otomatis di atas sabuk konveyor.",
    tags: ["YOLOv11", "ESP32", "React", "FastAPI"],
    accuracy: "Smart Factory",
    category: "AI / Robotics",
    popupDesc: "Prototipe otomasi industri yang mengintegrasikan Computer Vision (AI) dan IoT untuk mengklasifikasikan serta menyortir objek geometris secara otomatis di atas sabuk konveyor. Membandingkan YOLOv8 dan YOLOv11; memilih YOLOv11 karena 15% lebih sedikit parameter dan 25% lebih rendah GFLOPs. Mengembangkan logika non-blocking state-machine pada ESP32 untuk sinkronisasi presisi antara deteksi kamera dan gerakan pendorong mekanik, serta membangun dashboard interaktif untuk kontrol sensitivitas visi dan pemantauan statistik produksi.",
    github: "https://github.com/dzakiabrar21/robotics-final.git",
    demo: "https://drive.google.com/file/d/1XJywHTe0Ny16rTqlXwfeLATpLe-MeJYc/view?usp=sharing",
    images: [
      "/images/projects/robotics-1.webp",
      "/images/projects/robotics-2.webp",
      "/images/projects/robotics-3.webp",
      "/images/projects/robotics-4.webp",
      "/images/projects/robotics-5.webp",
      "/images/projects/robotics-6.webp",
    ],
    tagline: "Industrial IoT & Computer Vision Sorting Conveyor System",
    overview: "Sistem otomasi penyortir bentuk otomatis terintegrasi yang menghubungkan deteksi objek berbasis Deep Learning (YOLOv11), backend microservice FastAPI, mikrokontroler ESP32, dan aktuator servo mekanik pada konveyor mini. Dirancang untuk mensimulasikan lingkungan smart factory dengan pemantauan analitik real-time.",
    introduction: "Penyortiran manual pada jalur produksi manufaktur rentan terhadap kelelahan manusia dan ketidakkonsistenan kecepatan. Proyek ini menyelesaikan tantangan tersebut dengan membangun pipeline visi komputer terkalibrasi yang berkomunikasi secara instan dengan hardware sortir fisik melalui protokol asinkron.",
    toolsTechnologies: [
      { name: "YOLOv11 Nano", category: "Deep Learning", description: "Model deteksi objek efisien dengan latensi inferensi ultra rendah." },
      { name: "FastAPI Backend", category: "API & Vision Server", description: "Pemrosesan frame kamera dan koordinasi instruksi penyortiran." },
      { name: "ESP32 (C++/Arduino)", category: "Firmware / Embedded", description: "Logika non-blocking state-machine pengendali motor stepper & servo." },
      { name: "React & Tailwind", category: "Operator Dashboard", description: "Monitoring live telemetry, statistik batch, dan pengaturan sensitivitas threshold." }
    ],
    keyFeatures: [
      { title: "Real-Time Shape & Color Classification", desc: "Mendeteksi kubus, silinder, dan bentuk custom di atas konveyor bergerak tanpa jeda." },
      { title: "Precision Mechanical Actuation", desc: "Kalkulasi waktu tempuh objek menuju aktuator servo untuk eksekusi dorong tepat sasaran." },
      { title: "Interactive Control Dashboard", desc: "Antarmuka web untuk menyalakan/mematikan konveyor, kalibrasi threshold, dan grafik laju sortir." },
      { title: "Non-Blocking Architecture", desc: "Mencegah buffer overflow sinyal kendali hardware saat traffic deteksi tinggi." }
    ],
    results: [
      { label: "Efficiency Gain", value: "25% Lower GFLOPs", desc: "YOLOv11 dibanding generasi sebelumnya" },
      { label: "Latency", value: "< 45ms", desc: "End-to-end detection to servo trigger" },
      { label: "Accuracy", value: "98.4%", desc: "Reliable object geometric sorting" }
    ]
  },
  {
    slug: "realtime-trash-detection",
    title: "Real-time Trash Detection",
    desc: "An advanced object detection system using YOLOv11 architecture for real-time waste classification.",
    tags: ["YOLOv11", "PyTorch", "AI"],
    accuracy: "85.12% mAP",
    category: "AI / Computer Vision",
    popupDesc: "A real-time trash detection system built with YOLOv11 architecture that classifies different types of waste materials. The model achieves 85.12% mAP accuracy and can process video feeds in real-time for automated waste sorting applications.",
    images: [
      "/images/projects/trash-1.webp",
      "/images/projects/trash-2.webp",
      "/images/projects/trash-3.webp",
      "/images/projects/trash-4.webp",
      "/images/projects/trash-5.webp",
      "/images/projects/trash-6.webp",
    ],
    tagline: "Automated Waste Classification with YOLOv11 Computer Vision",
    overview: "An automated vision system designed to identify and classify municipal solid waste into distinct categories (plastic, organic, paper, metal, glass) in real-time. Fine-tuned on specialized waste datasets to operate reliably under variable lighting and occlusions.",
    introduction: "Inadequate waste segregation at source poses a major global environmental challenge. Manual sorting is hazardous and inefficient. This project applies high-performance lightweight object detection models to empower automated sorting facilities and smart waste bins.",
    toolsTechnologies: [
      { name: "YOLOv11", category: "Model Architecture", description: "State-of-the-art detector with enhanced feature pyramid representation." },
      { name: "PyTorch & Ultralytics", category: "Deep Learning Framework", description: "Model training, hyperparameter tuning, and data augmentation pipelines." },
      { name: "OpenCV", category: "Computer Vision", description: "Camera stream capture, preprocessing, and real-time bounding box visualization." }
    ],
    keyFeatures: [
      { title: "Multi-Category Waste Classification", desc: "Accurately distinguishes diverse waste items across overlapping scenarios." },
      { title: "High-Speed Inference", desc: "Optimized for edge deployment on embedded vision hardware." },
      { title: "Robust under Occlusion", desc: "Trained with advanced Mosaic and MixUp augmentations to handle crumpled or partially hidden trash." }
    ],
    results: [
      { label: "Model Accuracy", value: "85.12% mAP@0.5", desc: "Mean Average Precision across all classes" },
      { label: "Inference Speed", value: "~60 FPS", desc: "Real-time processing capability" },
      { label: "Classes", value: "6+ Categories", desc: "Organic, Plastic, Paper, Metal, Glass, General" }
    ]
  },
  {
    slug: "nlp-hybrid-chatbot",
    title: "NLP Hybrid Chatbot (RAG)",
    desc: "An intelligent chatbot leveraging Retrieval-Augmented Generation to deliver context-aware answers from documents.",
    tags: ["Llama 3", "Groq API", "FAISS"],
    accuracy: "Groq Powered",
    category: "AI / NLP",
    popupDesc: "An intelligent chatbot leveraging Retrieval-Augmented Generation (RAG) with Llama 3 and Groq API. It retrieves relevant document context using FAISS vector search to provide accurate, context-aware responses.",
    github: "https://github.com/SapiOwO/AIUI",
    images: [
      "/images/projects/chatbot-1.webp",
      "/images/projects/chatbot-2.webp",
      "/images/projects/chatbot-3.webp",
    ],
    tagline: "Ultra-fast Document Q&A powered by Llama 3 and FAISS Vector Search",
    overview: "A hybrid conversational AI assistant combining semantic vector search with large language models through Retrieval-Augmented Generation (RAG). By integrating FAISS vector indices with Groq's high-speed inference engine, the system delivers millisecond response times on complex document queries.",
    introduction: "Standard LLMs suffer from hallucination and lack up-to-date or domain-specific context. This hybrid RAG architecture grounds language models on curated knowledge bases, ensuring responses are verifiable, hallucination-resistant, and instantly sourced from reference materials.",
    toolsTechnologies: [
      { name: "Llama 3 (via Groq LPUs)", category: "LLM & Inference", description: "Ultra-low latency LLM inference producing natural, detailed answers." },
      { name: "FAISS (Facebook AI Similarity Search)", category: "Vector Store", description: "High-dimensional vector indexing for sub-second semantic retrieval." },
      { name: "LangChain / Embeddings", category: "NLP Pipeline", description: "Document chunking, vector embedding generation, and prompt engineering." }
    ],
    keyFeatures: [
      { title: "Context-Grounded Retrieval", desc: "Extracts top-k semantic chunks from uploaded documents to provide accurate answers." },
      { title: "Sub-Second Groq Generation", desc: "Leverages specialized LPU hardware for unprecedented token generation speeds." },
      { title: "Source Attribution", desc: "Cites document references to prevent hallucinations and establish trust." }
    ],
    results: [
      { label: "Inference Engine", value: "Groq LPU", desc: "Sub-second token throughput" },
      { label: "Vector Search", value: "FAISS", desc: "Dense cosine similarity retrieval" },
      { label: "LLM", value: "Llama 3 8B/70B", desc: "High reasoning capability" }
    ]
  },
  {
    slug: "ai-roadmap-elearning",
    title: "AI Roadmap Adaptive E-Learning",
    desc: "An AI-powered educational platform that provides personalized, adaptive learning paths tailored to individual user needs.",
    tags: ["AI Logic", "Figma", "UI/UX"],
    accuracy: "Adaptive AI",
    category: "AI / Education",
    popupDesc: "An AI-powered educational platform that provides personalized, adaptive learning paths tailored to individual user needs and progress. Focuses on integrating AI logic into digital curricula to automatically determine the next optimal learning steps for each user.",
    images: [
      "/images/projects/elearning-1.webp",
      "/images/projects/elearning-2.webp",
      "/images/projects/elearning-3.webp",
    ],
    tagline: "Personalized intelligent learning path generator and UI/UX design system",
    overview: "A forward-looking conceptual and prototype framework for adaptive educational learning trees. The system assesses real-time learning bottlenecks and automatically restructures module recommendations according to individual mastery curves.",
    introduction: "Traditional static syllabi force all learners into a rigid schedule regardless of their background knowledge. This project explores adaptive knowledge trees that branch and dynamically reconfigure based on user assessment milestones.",
    toolsTechnologies: [
      { name: "Figma & Design Systems", category: "UI/UX & Prototyping", description: "Comprehensive user journey mapping, design tokens, and high-fidelity prototypes." },
      { name: "Adaptive Logic Trees", category: "Algorithm Design", description: "Branching heuristics to calculate next best learning activity." },
      { name: "React Frontend", category: "Interactive Prototype", description: "Visual interactive tree nodes with responsive state management." }
    ],
    keyFeatures: [
      { title: "Dynamic Curriculum Branching", desc: "Algorithms that dynamically unlock remediation or accelerated content." },
      { title: "Intuitive Knowledge Tree Interface", desc: "Visual roadmap graph allowing learners to preview upcoming topics and milestones." },
      { title: "Progress Analytics", desc: "Skill mastery radar charts and estimated time-to-completion metrics." }
    ],
    results: [
      { label: "Design System", value: "100% Custom", desc: "Complete UI kit and interaction patterns" },
      { label: "Workflow", value: "Adaptive", desc: "Individualized learner pacing" }
    ]
  },
  {
    slug: "schoncraft",
    title: "PT. Schon Craft Indonesia",
    desc: "A professional web platform for a local handicraft company, fully rewritten from WordPress to a modern architecture.",
    tags: ["Next.js", "React", "Tailwind CSS", "Figma"],
    accuracy: "Professional Web",
    category: "Web Development",
    popupDesc: "A professional web platform built for a local handicraft product company. This project involved a complete code rewrite to replace the old WordPress-based site. The primary focus was on improving site performance, page load speed, and scalability while maintaining a responsive and modern user experience.",
    link: "https://schoncraft.com",
    images: [
      "/images/projects/schoncraft-1.webp",
      "/images/projects/schoncraft-2.webp",
      "/images/projects/schoncraft-3.webp",
    ],
    tagline: "High-performance modern brand website and catalog rewrite",
    overview: "A complete transformation of PT. Schon Craft Indonesia's digital presence. Rebuilt from an outdated, sluggish WordPress site into a modern, lightning-fast Next.js web application with a sleek corporate presentation and optimized media catalog.",
    introduction: "The company's legacy platform suffered from slow load times, poor mobile optimization, and high maintenance overhead. The rebuild focused on visual elegance, maximum performance, and SEO optimization to showcase artisanal handicraft products to international clients.",
    toolsTechnologies: [
      { name: "Next.js & React", category: "Web Framework", description: "Static site generation (SSG) for instantaneous page loading." },
      { name: "Tailwind CSS", category: "Styling", description: "Custom minimalist styling highlighting high-resolution product photography." },
      { name: "Modern Image Optimization", category: "Performance", description: "Automated WebP compression and responsive image delivery." }
    ],
    keyFeatures: [
      { title: "Product Showcase Catalog", desc: "Categorized interactive showcase with detailed material and craftsmanship specifications." },
      { title: "International Inquiry Flow", desc: "Direct inquiry triggers and streamlined contact channels for B2B export clients." },
      { title: "Mobile-First Responsiveness", desc: "Flawless rendering across mobile, tablet, and ultra-wide desktop viewports." }
    ],
    results: [
      { label: "Lighthouse Score", value: "98+", desc: "Performance, Accessibility & SEO" },
      { label: "Load Time", value: "< 0.8s", desc: "Dramatic improvement over legacy site" },
      { label: "Status", value: "Live", desc: "Active company commercial portal" }
    ]
  },
  {
    slug: "design-anything",
    title: "Design Anything",
    desc: "A full-stack image editing platform integrating various AI-powered features with a Microservices architecture.",
    tags: ["Microservices", "AI Features", "JavaScript"],
    accuracy: "Full Stack",
    category: "Web Development",
    popupDesc: "A full-stack image editing platform that integrates various AI-powered features to enhance user creativity. Built with a Microservices architecture to separate core application functions, ensuring system stability and ease of future development.",
    images: [
      "/images/projects/designanything-1.webp",
      "/images/projects/designanything-2.webp",
      "/images/projects/designanything-3.webp",
    ],
    tagline: "Microservices-driven creative suite with AI image processing tools",
    overview: "A comprehensive cloud image editing suite that decouples CPU/GPU-intensive AI algorithms into independent microservices. Users can apply generative filters, automated background removals, and canvas adjustments inside a unified browser interface.",
    introduction: "Monolithic image processing web apps often crash or become unresponsive when processing heavy transformation workloads. By deploying separate microservice workers for AI processing, the client interface remains silky smooth.",
    toolsTechnologies: [
      { name: "Microservices Architecture", category: "Backend Infrastructure", description: "Decoupled API endpoints handling specific AI workloads." },
      { name: "HTML5 Canvas & JavaScript", category: "Frontend Engine", description: "Client-side pixel rendering, layer manipulations, and transformations." },
      { name: "AI Processing Pipelines", category: "Computer Vision", description: "Automated background segmentation and image enhancement filters." }
    ],
    keyFeatures: [
      { title: "Interactive Canvas Suite", desc: "Multi-layer image editing, cropping, filters, and real-time previews." },
      { title: "Asynchronous AI Tasks", desc: "Queue-backed processing ensuring UI responsiveness during complex neural transformations." },
      { title: "Export & Asset Management", desc: "Instant export into multiple formats and resolutions." }
    ],
    results: [
      { label: "Architecture", value: "Microservices", desc: "Scalable compute isolation" },
      { label: "Frontend", value: "Zero Delay", desc: "Non-blocking background jobs" }
    ]
  },
  {
    slug: "meet-and-fight",
    title: "Meet and Fight",
    desc: "A cross-platform mobile application developed as a final project for the Wireless Mobile Programming course.",
    tags: ["Flutter", "Dart", "Mobile"],
    accuracy: "Cross-Platform",
    category: "Mobile Development",
    popupDesc: "A cross-platform mobile application developed as a final project for the Wireless Mobile Programming course. Focused on building a responsive user interface and implementing modern mobile application functionalities.",
    link: "https://meetandfight.vercel.app",
    images: [
      "/images/projects/meetfight-1.webp",
      "/images/projects/meetfight-2.webp",
      "/images/projects/meetfight-3.webp",
      "/images/projects/meetfight-4.webp",
    ],
    tagline: "Cross-platform mobile matchmaking and combat matchmaking interface",
    overview: "Meet and Fight is a cross-platform mobile application developed in Flutter & Dart. It brings gamers and sparring partners together through a streamlined matchmaking dashboard, interactive profiles, and event lobbies.",
    introduction: "Finding gaming community matchups with equivalent skill ratings across various platforms often lacks dedicated community tools. This project explores unified mobile interfaces for matchmaking and local tournament tracking.",
    toolsTechnologies: [
      { name: "Flutter SDK", category: "Mobile Framework", description: "Single codebase compiling natively to iOS, Android, and Web." },
      { name: "Dart", category: "Programming Language", description: "Typed, object-oriented language optimized for UI reactivity." },
      { name: "State Management", category: "Architecture", description: "Predictable state architecture for match queues and user profiles." }
    ],
    keyFeatures: [
      { title: "Player Discovery & Profiles", desc: "Customizable gamer cards displaying rank, specialties, and match history." },
      { title: "Matchmaking Lobby", desc: "Real-time room creation and challenge invites." },
      { title: "Responsive Cross-Platform UI", desc: "Fluid animations adapted to various screen aspect ratios." }
    ],
    results: [
      { label: "Framework", value: "Flutter & Dart", desc: "Single codebase multi-platform" },
      { label: "Performance", value: "60 FPS", desc: "Fluid UI rendering" }
    ]
  },
  {
    slug: "student-management-system",
    title: "Student Management System",
    desc: "A desktop application for systematic student data management (CRUD) built with Object-Oriented Programming principles.",
    tags: ["Java Swing", "MySQL", "OOP"],
    accuracy: "Desktop App",
    category: "Desktop Application",
    popupDesc: "A desktop application designed for systematic student data management (CRUD operations). Implements Object-Oriented Programming (OOP) principles to maintain a modular and efficient code structure.",
    images: [
      "/images/projects/studentmgmt-1.png",
      "/images/projects/studentmgmt-2.png",
      "/images/projects/studentmgmt-3.png",
    ],
    tagline: "Robust desktop database management application using Java Swing & MySQL",
    overview: "A desktop application built using Java Swing and JDBC for comprehensive student academic record management. Emphasizes clean Object-Oriented Programming architecture, data validation, and secure SQL transaction queries.",
    introduction: "Educational institutions require reliable offline and local-network desktop systems to manage student enrollments, course assignments, and academic records without cloud dependency.",
    toolsTechnologies: [
      { name: "Java & Swing GUI", category: "Core Desktop", description: "Object-oriented desktop UI with custom table models and dialog handlers." },
      { name: "MySQL Database", category: "Relational DB", description: "Normalized relational schema with foreign key constraints and indexed queries." },
      { name: "JDBC Driver", category: "Database Connectivity", description: "Secure prepared statements preventing SQL injection." }
    ],
    keyFeatures: [
      { title: "Complete CRUD Capabilities", desc: "Create, read, update, and soft-delete student profiles and grades." },
      { title: "Advanced Search & Filters", desc: "Instant filtering by student ID, cohort, major, and GPA thresholds." },
      { title: "Report Generation", desc: "Summary statistics and record export formatting." }
    ],
    results: [
      { label: "Architecture", value: "Strict OOP", desc: "Modular MVC separation" },
      { label: "Database", value: "MySQL Relational", desc: "ACID transaction integrity" }
    ]
  },
  {
    slug: "industrial-escape",
    title: "Industrial Escape: The Abandoned Factory",
    desc: "A fully immersive 3D Roblox puzzle-escape game requiring players to collect components to repair security systems.",
    tags: ["Roblox Studio", "Lua", "Blender 3D"],
    accuracy: "Game Dev",
    category: "Game Development",
    popupDesc: "Trapped at night in an abandoned industrial factory controlled by a hostile presence, players must scavenge for components to manually repair the security system and unlock the main gate to escape. Features a fully playable 3D level implementing the 'Collect → Activate → Unlock' gameplay loop, utilizing Server/Client-side Lua scripts and a minimum of 10 custom 3D assets created in Blender.",
    link: "http://roblox.com/id/games/101945798277987/Final-Project",
    images: [
      "/images/projects/roblox-1.webp",
      "/images/projects/roblox-2.webp",
      "/images/projects/roblox-3.webp",
      "/images/projects/roblox-4.webp",
    ],
    tagline: "Immersive 3D Atmospheric Escape & Puzzle Game in Roblox Studio",
    overview: "An atmospheric 3D puzzle-survival game crafted in Roblox Studio with custom 3D models from Blender. Players navigate a decayed factory facility, evade environmental hazards, solve electrical panel puzzles, and cooperate to power up the escape gateway.",
    introduction: "Building engaging game experiences requires balancing spatial level design, atmospheric lighting, responsive client-side controls, and synchronized server-side game state replication.",
    toolsTechnologies: [
      { name: "Roblox Studio & Lua", category: "Game Engine & Scripting", description: "Server-side replication, client UI interactions, and state machines." },
      { name: "Blender 3D", category: "3D Asset Modeling", description: "Custom industrial machinery, tools, and optimized environmental props." },
      { name: "Spatial Audio & Lighting", category: "Atmosphere", description: "Dynamic shadow casting and localized 3D audio cues." }
    ],
    keyFeatures: [
      { title: "Collect → Activate → Unlock Loop", desc: "Core gameplay progression requiring item discovery and circuit board restoration." },
      { title: "Interactive 3D Props", desc: "Fully custom Blender-modeled props with collision fidelity and material shaders." },
      { title: "Multiplayer Synchronization", desc: "Shared puzzle progress and live synchronized game state across all players." }
    ],
    results: [
      { label: "Game Engine", value: "Roblox Studio", desc: "Lua client/server networking" },
      { label: "Assets", value: "10+ Custom 3D Models", desc: "Crafted in Blender" },
      { label: "Status", value: "Playable", desc: "Published on Roblox platform" }
    ]
  }
];

export function getProjectBySlug(slug: string): ProjectItem | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return projects.map((p) => p.slug);
}