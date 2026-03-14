import { Code2, Layout, Brain, Database, Wrench, Cloud } from 'lucide-react';

const skillGroups = [
  { 
    title: "Languages", 
    icon: <Code2 size={18} />, 
    skills: ["Python", "Java", "JavaScript", "TypeScript", "PHP", "HTML5", "C++", "Dart", "SQL"]
  },
  { 
    title: "Frameworks & Libraries", 
    icon: <Layout size={18} />, 
    skills: ["React", "Next.js", "Node.js", "Express", "FastAPI", "Flask", "Laravel", "Tailwind CSS" , "Flutter"]
  },
  { 
    title: "AI & Machine Learning", 
    icon: <Brain size={18} />, 
    skills: ["TensorFlow", "PyTorch", "Ultralytics", "Computer Vision", "Deep Learning", "NLP", "Transformers", "Scikit-learn", "Keras"]
  },
  { 
    title: "Databases", 
    icon: <Database size={18} />, 
    skills: ["MySQL", "PostgreSQL", "Firebase", "Supabase", "Oracle", "SQLite"]
  },
  { 
    title: "Tools & Technologies", 
    icon: <Wrench size={18} />, 
    skills: ["Git", "GitHub", "Vite", "Figma" , "Google Colab" , "Jupyter Notebook" , "NetBeans" , "Roblox Studio", "Blender 3D Graphics", "Cisco"]
  },
  { 
    title: "Cloud & DevOps", 
    icon: <Cloud size={18} />, 
    skills: ["Google Cloud", "Cisco Networking", "Vercel", "Netlify", "API Integration", "GitHub"]
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-16 md:py-20 space-y-12 md:space-y-16 px-6 md:px-0">
      {/* Judul Seksi dengan ukuran font presisi 30.39px  */}
      <h2 className="text-white text-3xl md:text-[30.39px] text-center font-bold leading-tight md:leading-[45.58px] font-Inter">
        Skills & Tools
      </h2>

      {/* Grid Container untuk menampung kartu skill  */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillGroups.map((group) => (
          <div 
            key={group.title} 
            className="bg-[#18181B] rounded-[11.16px] border border-white/10 p-6 flex flex-col gap-6 hover:border-white/20 transition-all duration-300"
          >
            {/* Header Kartu: Icon dan Nama Kategori  */}
            <div className="flex items-center gap-4">
              <div className="w-[36.24px] h-[38.20px] bg-white/5 rounded-[9.30px] flex items-center justify-center text-white">
                {group.icon}
              </div>
              <h3 className="text-white text-[14.88px] font-semibold leading-[22.33px] font-Inter">
                {group.title}
              </h3>
            </div>

            {/* List Item Skill: Badge dengan ukuran presisi  */}
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <div 
                  key={skill} 
                  className="bg-white/5 border border-white/10 rounded-[5.58px] px-[11.78px] py-[7.64px]"
                >
                  <span className="text-[rgba(255,255,255,0.80)] text-[12.09px] font-normal leading-[18.14px] font-Inter">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}