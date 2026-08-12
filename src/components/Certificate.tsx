"use client";

import { useState, useEffect } from "react";
import { X, ArrowRight } from "lucide-react";

type CertificateItem = {
  title: string;
  issuer: string;
  date?: string;
  credentialId?: string;
  image?: string;
  link: string;
};

const certificates: CertificateItem[] = [
  {
    title: "AI Productivity and AI API Integration for Developers",
    issuer: "Hacktiv8 Indonesia",
    date: "Jul 2026",
    image: "/images/certificates/hacktiv8-ai-productivity.webp",
    link: "https://students.hacktiv8.com/certificates/7b14b42d-d831-4f55-b85b-e40d0144a71f"
  },
  {
    title: "Google Agile Essentials",
    issuer: "Google",
    date: "Jul 2026",
    image: "/images/certificates/google-agile-essentials.webp",
    link: "https://coursera.org/share/2ff6f41cb1b15c203aa45e38cfa6c04f"
  },
  {
    title: "Google Business Intelligence",
    issuer: "Google",
    date: "Jul 2026",
    image: "/images/certificates/google-business-intelligence.webp",
    link: "https://www.coursera.org/account/accomplishments/professional-cert/UFGBNXSZH7WM"
  },
  {
    title: "Google AI",
    issuer: "Google",
    date: "Jul 2026",
    image: "/images/certificates/google-ai.webp",
    link: "https://www.coursera.org/account/accomplishments/professional-cert/JC7AKXHOK23R"
  },
  {
    title: "AI for Content Creation",
    issuer: "Google",
    date: "Jul 2026",
    image: "/images/certificates/google-ai-content-creation.webp",
    link: "https://www.coursera.org/account/accomplishments/verify/6HTTUTZMAIL5"
  },
  {
    title: "Foundations of Agile Project Management",
    issuer: "Google",
    date: "Jul 2026",
    image: "/images/certificates/google-agile-project-management.webp",
    link: "https://www.coursera.org/account/accomplishments/verify/OBRMG0E2ZOPR"
  },
  {
    title: "Building Machine Learning Systems",
    issuer: "Dicoding Indonesia",
    date: "Jun 2026 – Jun 2029",
    image: "/images/certificates/dicoding-ml-systems.webp",
    link: "https://www.dicoding.com/certificates/2VX30EK03XYQ"
  },
  {
    title: "AI-Enabled Applications for Customer Service",
    issuer: "IBM",
    date: "May 2026",
    image: "/images/certificates/ibm-ai-customer-service.webp",
    link: "https://www.credly.com/badges/e8713288-4090-47fd-a21d-756a8892073c/linked_in_profile"
  },
  {
    title: "Make Agentic AI Work for You",
    issuer: "IBM",
    date: "May 2026",
    image: "/images/certificates/ibm-agentic-ai.webp",
    link: "https://www.credly.com/badges/d9630596-56cb-478e-8315-c1b6c43141c4/linked_in_profile"
  },
  {
    title: "Spec-Driven Development with Kiro",
    issuer: "Dicoding Indonesia",
    date: "May 2026 – May 2029",
    image: "/images/certificates/dicoding-spec-driven.webp",
    link: "https://www.dicoding.com/certificates/1RXYWWRM9ZVM"
  },
  {
    title: "Learning Cloud Basics and Gen AI on AWS",
    issuer: "Dicoding Indonesia",
    date: "May 2026 – May 2029",
    image: "/images/certificates/dicoding-dasar-cloud.webp",
    link: "https://www.dicoding.com/certificates/ERZRLL32OZYV"
  },
  {
    title: "Certificate of Achievement – Bank Mandiri Mobile Apps Developer Project Based Internship Program",
    issuer: "PT Bank Mandiri (Persero) Tbk.",
    date: "May 2026",
    image: "/images/certificates/mandiri-mobile-apps.webp",
    link: "#"
  },
  {
    title: "Learning AI Basics",
    issuer: "Dicoding Indonesia",
    date: "Apr 2026 – Apr 2029",
    image: "/images/certificates/dicoding-dasar-ai.webp",
    link: "https://www.dicoding.com/certificates/L4PQ9122OPO1"
  },
  {
    title: "Starting Programming with Python",
    issuer: "Dicoding Indonesia",
    date: "Apr 2026 – Apr 2029",
    image: "/images/certificates/dicoding-python.webp",
    link: "https://www.dicoding.com/certificates/EYX4QJDK6PDL"
  },
  {
    title: "Learning Data Science Application with Microsoft Fabric",
    issuer: "Dicoding Indonesia",
    date: "Apr 2026 – Apr 2029",
    image: "/images/certificates/dicoding-data-science.webp",
    link: "https://www.dicoding.com/certificates/KEXLQ7000PG2"
  },
  {
    title: "Learning Machine Learning for Beginners",
    issuer: "Dicoding Indonesia",
    date: "Apr 2026 – Apr 2029",
    image: "/images/certificates/dicoding-machine-learning.webp",
    link: "https://www.dicoding.com/certificates/98XW0E549XM3"
  },
  {
    title: "Building Gen AI Applications with Microsoft Azure",
    issuer: "Dicoding Indonesia",
    date: "Apr 2026 – Apr 2029",
    image: "/images/certificates/dicoding-gen-ai-azure.webp",
    link: "https://www.dicoding.com/certificates/JMZVOE39RXN9"
  },
  {
    title: "Prompt Engineering for Software Developers",
    issuer: "Dicoding Indonesia",
    date: "Apr 2026 – Apr 2029",
    image: "/images/certificates/dicoding-prompt-engineering.webp",
    link: "https://www.dicoding.com/certificates/1OP8R4JKVZQK"
  },
  {
    title: "Fundamental Deep Learning",
    issuer: "Dicoding Indonesia",
    date: "May 2026 – May 2029",
    image: "/images/certificates/dicoding-deep-learning.webp",
    link: "https://www.dicoding.com/certificates/53XE1KO9VZRN"
  },
  {
    title: "Retrieval-Augmented Generation for Enhanced AI Outputs",
    issuer: "IBM",
    date: "May 2026",
    image: "/images/certificates/ibm-rag.webp",
    link: "https://www.credly.com/badges/8eba4149-ca37-40a7-85e3-5de589989dbe/linked_in_profile"
  },
  {
    title: "Generative AI Essentials: Using LLMs to Work with Data",
    issuer: "IBM",
    date: "May 2026",
    image: "/images/certificates/ibm-gen-ai-essentials.webp",
    link: "https://www.credly.com/badges/560894de-1492-4cd2-9180-aaaca0231da9/linked_in_profile"
  },
  {
    title: "Data Fundamentals",
    issuer: "IBM",
    date: "May 2026",
    image: "/images/certificates/ibm-data-fundamentals.webp",
    link: "https://www.credly.com/badges/34e6b954-0fb1-4de3-a9ba-1689e08ab757/linked_in_profile"
  },
  {
    title: "Artificial Intelligence Fundamentals",
    issuer: "IBM",
    date: "Apr 2026",
    image: "/images/certificates/ibm-ai-fundamentals.webp",
    link: "https://www.credly.com/badges/0292115d-ce29-42be-bcf5-2afed2f10ea2/linked_in_profile"
  },
  {
    title: "Alumni Gathering",
    issuer: "Project Manager • PUMA Informatics",
    date: "Dec 2024 – Jan 2025",
    image: "/images/certificates/temualumni-1.webp",
    link: "#"
  },
  {
    title: "Alumni Workshop",
    issuer: "Supervisor • PUMA Informatics",
    date: "2024",
    image: "/images/certificates/workshop-2.webp",
    link: "#"
  },
  {
    title: "Company Visit",
    issuer: "Fundraising & FnB • PUMA Informatics",
    date: "2024",
    image: "/images/certificates/fr-2.webp",
    link: "#"
  },
  {
    title: "Comsphere PUFA Computer Science",
    issuer: "Exhibition • President University",
    date: "2025",
    image: "/images/certificates/compshere-3.webp",
    link: "#"
  },
  {
    title: "Samsung SIC Logic Test",
    issuer: "Samsung Innovation Campus & Hacktiv8",
    date: "2025",
    image: "/images/certificates/samsung.webp",
    link: "#"
  },
  {
    title: "30 Juz Quran Memorization Certificate",
    issuer: "Ulumul Qur'an Education Foundation (YPUQ)",
    date: "2023",
    image: "/images/certificates/hafalan.webp",
    link: "#"
  },
  {
    title: "OSDIQ Certificate (Insan Qurani Dayah Student Organization)",
    issuer: "Dayah Insan Qurani",
    date: "2022",
    image: "/images/certificates/osdiq.webp",
    link: "#"
  },
  {
    title: "UKBI Certificate (Indonesian Language Proficiency Test)",
    issuer: "Ministry of Education and Culture (Kemendikbudristek)",
    date: "2025",
    image: "/images/certificates/ukbi.webp",
    link: "#"
  },
  {
    title: "Vespa 2.0 Webinar",
    issuer: "Surabaya Excellence Scholarship Community",
    date: "2024",
    image: "/images/certificates/vespa.webp",
    link: "#"
  }
];

export default function Certificate() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openModal = (imageSrc: string) => {
    setSelectedImage(imageSrc);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  useEffect(() => {
    if (selectedImage === null) return;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [selectedImage]);

  return (
    <section id="certificates" className="w-full pt-8 md:pt-32 pb-20 bg-black flex flex-col items-center min-h-screen">
      <div className="w-full max-w-[1200px] px-6 md:px-12 flex flex-col items-center">
        {/* Section Title */}
        <h2 className="text-white text-[32px] md:text-[40px] font-bold leading-tight font-Inter tracking-tight mb-12 text-center">
          Licenses & certifications
        </h2>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10 w-full transition-all duration-500">
          {certificates.map((cert, index) => (
            <div 
              key={index} 
              className={`flex flex-col group animate-fadeIn ${cert.image ? "cursor-pointer" : ""}`}
              onClick={() => cert.image && openModal(cert.image)}
            >
              {/* Image Container */}
              <div className="w-full aspect-[4/3] rounded-xl overflow-hidden border border-white/10 bg-[#0D0D0D] mb-5">
                {cert.image ? (
                  <img
                    src={cert.image}
                    alt={cert.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-contain p-1.5 group-hover:scale-105 transition-transform duration-500"
                    // Fallback if image not found, using a gray background
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "https://via.placeholder.com/600x450/1A1A1A/FFFFFF?text=Certificate";
                    }}
                  />
                ) : (
                  <div className="flex h-full w-full flex-col justify-between bg-gradient-to-br from-white to-[#f2f2f2] p-7 text-[#202124]">
                    <span className="text-4xl font-bold tracking-tight"><span className="text-[#4285F4]">G</span><span className="text-[#EA4335]">o</span><span className="text-[#FBBC05]">o</span><span className="text-[#4285F4]">g</span><span className="text-[#34A853]">l</span><span className="text-[#EA4335]">e</span></span>
                    <div>
                      <p className="text-sm text-[#5f6368]">Google Career Certificates</p>
                      <p className="mt-2 text-xl font-semibold leading-tight">{cert.title}</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Content Box */}
              <div className="flex flex-col flex-1">
                <h3 className="text-white text-[18px] sm:text-[20px] font-bold leading-[28px] font-Inter mb-2 line-clamp-2">
                  {cert.title}
                </h3>
                
                <p className="text-[#99A1AF] text-[15px] font-normal leading-[24px] font-Inter mb-1">
                  {cert.issuer}{cert.date && ` • ${cert.date}`}
                </p>
                {cert.credentialId && (
                  <p className="text-[#99A1AF] text-[13px] font-normal leading-[20px] font-Inter mb-3">
                    Credential ID: {cert.credentialId}
                  </p>
                )}

                {cert.link && cert.link !== "#" && (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#00E5FF] hover:text-[#00b3cc] text-[14px] font-medium leading-[24px] font-Inter flex items-center transition-colors w-fit mt-auto"
                    onClick={(e) => e.stopPropagation()}
                  >
                    View Credential <ArrowRight size={16} className="ml-1.5" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ===== POPUP MODAL ===== */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-md p-4"
          onClick={closeModal}
        >
          <div
            className="relative bg-transparent max-w-5xl w-full max-h-[90vh] flex flex-col items-center justify-center animate-fadeIn"
            onClick={(e) => e.stopPropagation()} // Prevent click from closing modal when clicking the image
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 md:-top-12 md:-right-12 z-10 w-10 h-10 bg-black/50 md:bg-white/10 hover:bg-black/80 md:hover:bg-white/20 rounded-full flex items-center justify-center border border-white/20 transition-all backdrop-blur-sm shadow-xl"
            >
              <X size={24} className="text-white" />
            </button>

            {/* High-res Image */}
            <img 
              src={selectedImage} 
              alt="High-resolution Certificate" 
              className="w-full h-auto max-h-[85vh] object-contain rounded-xl border border-white/10 shadow-2xl"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = "https://via.placeholder.com/1200x900/1A1A1A/FFFFFF?text=Certificate";
              }}
            />
          </div>
        </div>
      )}
    </section>
  );
}
