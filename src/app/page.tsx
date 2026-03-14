import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Certificate from "@/components/Certificate";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-emerald-500/30">
      <Navbar />
      <div className="max-w-[1428px] mx-auto px-6 md:px-[122px] space-y-16 pb-12">
        <Hero />
        <Skills />
        <Projects />
        <Experience />
        <Certificate />
        <Contact />
      </div>
      <Footer />
    </main>
  );
}