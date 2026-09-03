import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import ProjectDetail from "@/components/ProjectDetail";
import { getProjectBySlug, getAllProjectSlugs, projects } from "@/data/projects";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const slugs = getAllProjectSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found – Muhammad Dzaki Abrar",
    };
  }

  return {
    title: `${project.title} – Muhammad Dzaki Abrar`,
    description: project.tagline || project.desc,
    openGraph: {
      title: `${project.title} | Case Study`,
      description: project.tagline || project.desc,
      images: project.images.length > 0 ? [project.images[0]] : [],
    },
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-black text-white selection:bg-cyan-500/30 relative">
      {/* Background Glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[150px]" />
        <div className="absolute top-1/2 right-10 w-[450px] h-[450px] bg-blue-500/10 rounded-full blur-[160px]" />
      </div>

      <Navbar />

      <ProjectDetail project={project} />

      <div className="max-w-[1428px] mx-auto px-6 md:px-[122px] space-y-16 pb-28 md:pb-12">
        <Contact />
      </div>

      <Footer />
    </main>
  );
}
