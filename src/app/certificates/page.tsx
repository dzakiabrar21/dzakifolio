import Navbar from "@/components/Navbar";
import Certificate from "@/components/Certificate";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";

export default function CertificatesPage() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-emerald-500/30">
      <Navbar />
      <div className="max-w-[1428px] mx-auto px-6 md:px-[122px] space-y-16 pb-28 md:pb-12">
        <Certificate />
        <Contact />
      </div>
      <Footer />
    </main>
  );
}
