import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ProfileSidebar from "@/components/ProfileSidebar";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-emerald-500/30 relative">
      {/* Ambient Glow Background Lights — isolated overflow layer */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-1/4 left-10 w-[450px] h-[450px] bg-emerald-500/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-1/3 right-10 w-[550px] h-[550px] bg-cyan-500/10 rounded-full blur-[160px]" />
      </div>

      <Navbar />

      {/* Diperkecil max-width nya agar lebih ke tengah */}
      <div className="max-w-[1150px] mx-auto px-6 md:px-12 pt-6 md:pt-24">
        <div className="flex flex-col md:flex-row gap-10 md:gap-16 relative">

          {/* LEFT SIDEBAR — 40% width, Fixed/Sticky */}
          <aside className="w-full md:w-[40%] flex-shrink-0 md:sticky md:top-24 md:h-fit pt-4 md:pt-8">
            <ProfileSidebar />
          </aside>

          {/* RIGHT CONTENT — 60% width, Scrollable, ditambahkan padding kanan agar tidak mepet */}
          <div className="w-full md:w-[60%] min-w-0 pt-4 md:pt-8 pb-28 md:pb-12 md:pr-8 lg:pr-12">
            <Hero />
            <Experience />
            <Skills />
            <Contact />
          </div>

        </div>
      </div>
      
      <Footer />
    </main>
  );
}