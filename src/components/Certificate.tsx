"use client";

import { useState } from "react";
import { X } from "lucide-react";

const certificates = [
  {
    title: "Project Manager — Temu Alumni",
    issuer: "PUMA Informatics",
    date: "Des 2024 – Jan 2025",
    image: "/images/certificates/temualumni-1.png",
    link: "#"
  },
  {
    title: "Supervisor — Workshop Alumni",
    issuer: "PUMA Informatics",
    date: "2024",
    image: "/images/certificates/workshop-2.png",
    link: "#"
  },
  {
    title: "Fundraising and FnB (FR) — Company Visit",
    issuer: "PUMA Informatics",
    date: "2024",
    image: "/images/certificates/fr-2.png",
    link: "#"
  },
  {
    title: "Exhibition — Comsphere PUFA Computer Science",
    issuer: "President University",
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
    title: "Sertifikat Hafalan 30 Juz",
    issuer: "Yayasan Pendidikan Ulumul Qur'an (YPUQ)",
    date: "2023",
    image: "/images/certificates/hafalan.jpg",
    link: "#"
  },
  {
    title: "Sertifikat OSDIQ (Organisasi Santri Dayah Insan Qurani)",
    issuer: "Dayah Insan Qurani",
    date: "2022",
    image: "/images/certificates/osdiq.jpg",
    link: "#"
  },
  {
    title: "Sertifikat UKBI (Uji Kemahiran Berbahasa Indonesia)",
    issuer: "Badan Bahasa Kemendikbudristek",
    date: "2025",
    image: "/images/certificates/ukbi.jpg",
    link: "#"
  },
  {
    title: "Webinar Vespa 2.0",
    issuer: "Komunitas Beasiswa Unggulan Surabaya",
    date: "2024",
    image: "/images/certificates/vespa.png",
    link: "#"
  }
];

export default function Certificate() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [showAll, setShowAll] = useState(false); // State for toggling "Show More"

  const displayedCertificates = showAll ? certificates : certificates.slice(0, 3); // Display logic

  const openModal = (imageSrc: string) => {
    setSelectedImage(imageSrc);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <section id="certificates" className="w-full py-20 bg-black flex flex-col items-center border-t border-white/10">
      <div className="w-full max-w-[1200px] px-6 md:px-12 flex flex-col items-center">
        {/* Section Title */}
        <h2 className="text-white text-[32px] md:text-[40px] font-bold leading-tight font-Inter tracking-tight mb-12 text-center">
          Certifications
        </h2>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10 w-full transition-all duration-500">
          {displayedCertificates.map((cert, index) => (
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
                
                <p className="text-[#99A1AF] text-[15px] font-normal leading-[24px] font-Inter">
                  {cert.issuer} • {cert.date}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Show More / Show Less Button */}
        {certificates.length > 3 && (
          <button
            onClick={() => setShowAll(!showAll)}
            className="mt-12 w-12 h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all group"
            aria-label={showAll ? "Show less certificates" : "Show more certificates"}
          >
            <svg 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className={`transition-transform duration-500 ease-in-out ${showAll ? 'rotate-180' : ''}`}
            >
              <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        )}
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