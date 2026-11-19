import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import FeaturedProjects from "@/components/FeaturedProjects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ProfileSidebar from "@/components/ProfileSidebar";
import IntroHero from "@/components/IntroHero";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-[#d6a56a]/30 relative">
      <Navbar />

      <IntroHero />

      {/* Profile + about content. The sticky sidebar ends with this block, so it
          scrolls away before the full-width Projects section begins. */}
      <div className="max-w-[1150px] mx-auto px-6 md:px-12 pt-6 md:pt-16">
        <div className="flex flex-col md:flex-row gap-10 md:gap-16 relative">
          {/* LEFT SIDEBAR — 40% width, Fixed/Sticky */}
          <aside className="w-full md:w-[40%] flex-shrink-0 md:sticky md:top-24 md:h-fit pt-4 md:pt-8">
            <ProfileSidebar />
          </aside>

          {/* RIGHT CONTENT — 60% width */}
          <div className="w-full md:w-[60%] min-w-0 pt-4 md:pt-8 md:pr-8 lg:pr-12">
            <Hero />
            <Experience />
            <Skills />
          </div>
        </div>
      </div>


      {/* Full-width stacked projects */}
      <FeaturedProjects />

      {/* Same width as the footer so the two line up */}
      <div className="max-w-[1428px] mx-auto px-6 md:px-[122px] pt-4 pb-20 md:pb-10">
        <Contact />
      </div>

      <Footer />
    </main>
  );
}
