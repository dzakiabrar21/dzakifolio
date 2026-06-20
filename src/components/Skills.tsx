import { Code2, Layout, Brain, Database, Wrench, FileCode2, Terminal, Monitor, Sparkles, Server, Cloud } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const skillCategories = [
  {
    title: "Programming Languages",
    description: "Proficient in multiple programming languages for various application domains, ranging from web development to data science and software engineering.",
    skills: [
      { name: "Python", icon: <Terminal size={14} /> },
      { name: "JavaScript", icon: <FileCode2 size={14} /> },
      { name: "TypeScript", icon: <FileCode2 size={14} /> },
      { name: "Java", icon: <Code2 size={14} /> },
      { name: "C++", icon: <Code2 size={14} /> },
      { name: "PHP", icon: <Code2 size={14} /> },
      { name: "Dart", icon: <Code2 size={14} /> },
    ]
  },
  {
    title: "Modern Web Development",
    description: "Experienced in building responsive, fast, and scalable applications using the modern frontend and backend ecosystems.",
    skills: [
      { name: "React", icon: <Layout size={14} /> },
      { name: "Next.js", icon: <Monitor size={14} /> },
      { name: "Node.js", icon: <Server size={14} /> },
      { name: "Tailwind CSS", icon: <Layout size={14} /> },
      { name: "CodeIgniter", icon: <Code2 size={14} /> },
      { name: "Laravel", icon: <Code2 size={14} /> },
      { name: "Flutter", icon: <Monitor size={14} /> },
    ]
  },
  {
    title: "AI & Machine Learning",
    description: "Passionate about creating intelligent systems with deep learning, computer vision, and NLP using industry-standard frameworks.",
    skills: [
      { name: "TensorFlow", icon: <Brain size={14} /> },
      { name: "PyTorch", icon: <Brain size={14} /> },
      { name: "Scikit-learn", icon: <Sparkles size={14} /> },
      { name: "Computer Vision", icon: <Monitor size={14} /> },
      { name: "NLP", icon: <FileCode2 size={14} /> },
      { name: "RAG", icon: <Sparkles size={14} /> },
    ]
  },
  {
    title: "Database & Cloud Infrastructure",
    description: "Managing databases, authentication, and deployment using modern cloud solutions to ensure scalability and reliability.",
    skills: [
      { name: "MySQL", icon: <Database size={14} /> },
      { name: "PostgreSQL", icon: <Database size={14} /> },
      { name: "SQL Server", icon: <Database size={14} /> },
      { name: "SSMS", icon: <Database size={14} /> },
      { name: "Supabase", icon: <Cloud size={14} /> },
      { name: "Firebase", icon: <Cloud size={14} /> },
      { name: "Google Cloud", icon: <Cloud size={14} /> },
      { name: "Microsoft Azure", icon: <Cloud size={14} /> },
      { name: "Microsoft Fabric", icon: <Cloud size={14} /> },
      { name: "Vercel", icon: <Server size={14} /> },
    ]
  },
  {
    title: "Tools & Design",
    description: "Utilizing modern development tools, version control, and design software to streamline workflows and create intuitive user interfaces.",
    skills: [
      { name: "Git", icon: <Wrench size={14} /> },
      { name: "GitHub", icon: <Code2 size={14} /> },
      { name: "Figma", icon: <Layout size={14} /> },
      { name: "Jupyter Notebook", icon: <Terminal size={14} /> },
      { name: "Power BI", icon: <Monitor size={14} /> },
      { name: "Power Automate", icon: <Wrench size={14} /> },
      { name: "Blender 3D", icon: <Monitor size={14} /> },
    ]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-10 md:py-14 scroll-mt-8 border-t border-white/[0.08]">
      {/* Section Title */}
      <h2 className="text-white text-[26px] md:text-[32px] font-bold leading-tight font-Inter tracking-tight mb-8 md:mb-10">
        Technical Skills
      </h2>

      {/* Categories List */}
      <div className="flex flex-col gap-10">
        {skillCategories.map((category) => (
          <ScrollReveal key={category.title} className="flex flex-col gap-3">
            <h3 className="reveal text-white text-[18px] md:text-[20px] font-bold font-Inter">
              {category.title}
            </h3>
            <p className="reveal text-white/60 text-[14px] md:text-[15px] font-normal leading-relaxed font-Inter max-w-2xl">
              {category.description}
            </p>
            <div className="reveal flex flex-wrap gap-3 mt-2">
              {category.skills.map((skill) => (
                <div 
                  key={skill.name} 
                  className="flex items-center gap-2 bg-transparent border border-white/10 rounded-lg px-3 py-1.5 hover:bg-white/[0.02] transition-colors"
                >
                  <div className="text-white">
                    {skill.icon}
                  </div>
                  <span className="text-white/90 text-[13px] font-medium font-Inter">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}