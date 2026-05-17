"use client";

import { useState } from "react";
import { X, ArrowRight } from "lucide-react";

const certificates = [
  {
    title: "Spec-Driven Development with Kiro",
    issuer: "Dicoding Indonesia",
    date: "May 2026 – May 2029",
    image: "/images/certificates/dicoding-spec-driven.jpg",
    link: "https://www.dicoding.com/certificates/1RXYWWRM9ZVM"
  },
  {
    title: "Learning Cloud Basics and Gen AI on AWS",
    issuer: "Dicoding Indonesia",
    date: "May 2026 – May 2029",
    image: "/images/certificates/dicoding-dasar-cloud.jpg",
    link: "https://www.dicoding.com/certificates/ERZRLL32OZYV"
  },
  {
    title: "Certificate of Achievement – Bank Mandiri Mobile Apps Developer Project Based Internship Program",
    issuer: "PT Bank Mandiri (Persero) Tbk.",
    date: "May 2026",
    image: "/images/certificates/mandiri-mobile-apps.jpg",
    link: "#"
  },
  {
    title: "Learning AI Basics",
    issuer: "Dicoding Indonesia",
    date: "Apr 2026 – Apr 2029",
    image: "/images/certificates/dicoding-dasar-ai.jpg",
    link: "https://www.dicoding.com/certificates/L4PQ9122OPO1"
  },
  {
    title: "Starting Programming with Python",
    issuer: "Dicoding Indonesia",
    date: "Apr 2026 – Apr 2029",
    image: "/images/certificates/dicoding-python.jpg",
    link: "https://www.dicoding.com/certificates/EYX4QJDK6PDL"
  },
  {
    title: "Learning Data Science Application with Microsoft Fabric",
    issuer: "Dicoding Indonesia",
    date: "Apr 2026 – Apr 2029",
    image: "/images/certificates/dicoding-data-science.jpg",
    link: "https://www.dicoding.com/certificates/KEXLQ7000PG2"
  },
  {
    title: "Learning Machine Learning for Beginners",
    issuer: "Dicoding Indonesia",
    date: "Apr 2026 – Apr 2029",
    image: "/images/certificates/dicoding-machine-learning.jpg",
    link: "https://www.dicoding.com/certificates/98XW0E549XM3"
  },
  {
    title: "Building Gen AI Applications with Microsoft Azure",
    issuer: "Dicoding Indonesia",
    date: "Apr 2026 – Apr 2029",
    image: "/images/certificates/dicoding-gen-ai-azure.jpg",
    link: "https://www.dicoding.com/certificates/JMZVOE39RXN9"
  },
  {
    title: "Prompt Engineering for Software Developers",
    issuer: "Dicoding Indonesia",
    date: "Apr 2026 – Apr 2029",
    image: "/images/certificates/dicoding-prompt-engineering.jpg",
    link: "https://www.dicoding.com/certificates/1OP8R4JKVZQK"
  },
  {
    title: "Fundamental Deep Learning",
    issuer: "Dicoding Indonesia",
    date: "May 2026 – May 2029",
    image: "/images/certificates/dicoding-deep-learning.jpg",
    link: "https://www.dicoding.com/certificates/53XE1KO9VZRN"
  },
  {
    title: "Retrieval-Augmented Generation for Enhanced AI Outputs",
    issuer: "IBM",
    date: "May 2026",
    image: "/images/certificates/ibm-rag.jpg",
    link: "https://www.credly.com/badges/8eba4149-ca37-40a7-85e3-5de589989dbe/linked_in_profile"
  },
  {
    title: "Generative AI Essentials: Using LLMs to Work with Data",
    issuer: "IBM",
    date: "May 2026",
    image: "/images/certificates/ibm-gen-ai-essentials.jpg",
    link: "https://www.credly.com/badges/560894de-1492-4cd2-9180-aaaca0231da9/linked_in_profile"
  },
  {
    title: "Data Fundamentals",
    issuer: "IBM",
    date: "May 2026",
    image: "/images/certificates/ibm-data-fundamentals.jpg",
    link: "https://www.credly.com/badges/34e6b954-0fb1-4de3-a9ba-1689e08ab757/linked_in_profile"
  },
  {
    title: "Artificial Intelligence Fundamentals",
    issuer: "IBM",
    date: "Apr 2026",
    image: "/images/certificates/ibm-ai-fundamentals.jpg",
    link: "https://www.credly.com/badges/0292115d-ce29-42be-bcf5-2afed2f10ea2/linked_in_profile"
  },
  {
    title: "Alumni Gathering",
    issuer: "Project Manager • PUMA Informatics",
    date: "Dec 2024 – Jan 2025",
    image: "/images/certificates/temualumni-1.png",
    link: "#"
  },
  {
    title: "Alumni Workshop",
    issuer: "Supervisor • PUMA Informatics",
    date: "2024",
    image: "/images/certificates/workshop-2.png",
    link: "#"
  },
  {
    title: "Company Visit",
    issuer: "Fundraising & FnB • PUMA Informatics",
    date: "2024",
    image: "/images/certificates/fr-2.png",
    link: "#"
  },
  {
    title: "Comsphere PUFA Computer Science",
    issuer: "Exhibition • President University",
    date: "2025",
    image: "/images/certificates/compshere-3.png",
    link: "#"
  },
  {
    title: "Samsung SIC Logic Test",
    issuer: "Samsung Innovation Campus & Hacktiv8",
    date: "2025",
    image: "/images/certificates/samsung.jpg",
    link: "#"
  },
  {
    title: "30 Juz Quran Memorization Certificate",
    issuer: "Ulumul Qur'an Education Foundation (YPUQ)",
    date: "2023",
    image: "/images/certificates/hafalan.jpg",
    link: "#"
  },
  {
    title: "OSDIQ Certificate (Insan Qurani Dayah Student Organization)",
    issuer: "Dayah Insan Qurani",
    date: "2022",
    image: "/images/certificates/osdiq.jpg",
    link: "#"
  },
  {
    title: "UKBI Certificate (Indonesian Language Proficiency Test)",
    issuer: "Ministry of Education and Culture (Kemendikbudristek)",
    date: "2025",
    image: "/images/certificates/ukbi.jpg",
    link: "#"
  },
  {
    title: "Vespa 2.0 Webinar",
    issuer: "Surabaya Excellence Scholarship Community",
    date: "2024",
    image: "/images/certificates/vespa.png",
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
              className="flex flex-col group cursor-pointer animate-fadeIn"
              onClick={() => openModal(cert.image)}
            >
              {/* Image Container */}
              <div className="w-full aspect-[4/3] rounded-xl overflow-hidden border border-white/10 bg-[#0D0D0D] mb-5">
                <img 
                  src={cert.image} 
                  alt={cert.title}
                  className="w-full h-full object-cover"
                  // Fallback if image not found, using a gray background
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https://via.placeholder.com/600x450/1A1A1A/FFFFFF?text=Certificate";
                  }}
                />
              </div>

              {/* Content Box */}
              <div className="flex flex-col flex-1">
                <h3 className="text-white text-[18px] sm:text-[20px] font-bold leading-[28px] font-Inter mb-2 line-clamp-2">
                  {cert.title}
                </h3>
                
                <p className="text-[#99A1AF] text-[15px] font-normal leading-[24px] font-Inter mb-3">
                  {cert.issuer} • {cert.date}
                </p>

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