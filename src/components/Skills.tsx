import { Database, Code, Cloud, Terminal, Settings, Workflow } from "lucide-react";
import { SiPython, SiDatabricks, SiOracle, SiApachespark, SiApacheairflow, SiBmcsoftware  } from "react-icons/si";
import { VscAzure } from "react-icons/vsc";
import { useState } from "react";

const categories = ["all", "data", "cloud", "bi", "orchestrate"];

const skills = [
  { name: "SQL", category: "data", icon: Database },
  { name: "Python", category: "data", icon: SiPython },
  { name: "PySpark", category: "data", icon: SiApachespark },

  { name: "Azure Data Factory", category: "cloud", icon: VscAzure },
  { name: "Azure Databricks", category: "cloud", icon: SiDatabricks },

  { name: "Oracle FDI", category: "bi", icon: SiOracle },
  { name: "Control-M", category: "orchestrate", icon: SiBmcsoftware },
];

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const filteredSkills =
    activeCategory === "all"
      ? skills
      : skills.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" className="section-padding">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          Tech <span className="text-gradient">Skills</span>
        </h2>
        <div className="w-16 h-1 bg-primary rounded mb-10" />

        <div className="flex gap-3 mb-10 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded-full border text-sm capitalize transition 
                ${
                  activeCategory === cat
                    ? "bg-primary text-white border-primary"
                    : "border-border text-muted-foreground hover:bg-primary/10"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 transition-all duration-300">
          {filteredSkills.map((skill) => {
            const Icon = skill.icon;
            return (
              <div
                key={skill.name}
                className="skill-glow border border-border rounded-xl p-6 bg-card flex flex-col items-center text-center"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-3">
                  <Icon size={28} className="text-primary" />
                </div>
                <span className="text-sm font-medium">{skill.name}</span>
              </div>
            );
          })}
        </div>
      </div>

        {/* <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {skills.map((skill) => {
            const Icon = skill.icon;
            return (
              <div
                key={skill.name}
                className="border border-border rounded-xl p-6 bg-card flex flex-col items-center text-center card-hover"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-3">
                  <Icon size={28} className="text-primary" />
                </div>
                <span className="text-sm font-medium text-foreground">
                  {skill.name}
                </span>
              </div>
            );
          })}
        </div>
      </div> */}
    </section>
    
    
    // <section id="skills" className="section-padding">
    //   <div className="container mx-auto max-w-4xl">
    //     <h2 className="text-3xl md:text-4xl font-bold mb-2">
    //       Tech <span className="text-gradient">Skills</span>
    //     </h2>
    //     <div className="w-16 h-1 bg-primary rounded mb-10" />

    //     <div className="grid sm:grid-cols-2 gap-4">
    //       {skills.map((skill) => {
    //         const Icon = skill.icon;
    //         return (
    //           <div
    //             key={skill.name}
    //             className="border border-border rounded-lg p-5 card-hover bg-card flex items-center gap-4"
    //           >
    //             {/* <div className="shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
    //               <Icon size={20} className="text-primary" />
    //             </div>
    //             <div className="flex-1 min-w-0">
    //               <div className="flex items-center justify-between mb-2">
    //                 <span className="text-sm font-medium text-foreground">{skill.name}</span>
    //                 <span className="text-xs text-muted-foreground font-mono">{skill.level}%</span>
    //               </div>
    //               <div className="w-full h-1.5 bg-muted rounded-full overflow-hidden">
    //                 <div
    //                   className="h-full bg-primary rounded-full transition-all duration-1000"
    //                   style={{ width: `${skill.level}%` }}
    //                 />
    //               </div>
    //             </div> */}
    //             <div
    //             key={skill.name}
    //             className="border border-border rounded-xl p-6 bg-card flex flex-col items-center text-center card-hover"
    //             >
    //             <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-3">
    //               <Icon size={28} className="text-primary" />
    //             </div>
    //             <span className="text-sm font-medium text-foreground">
    //               {skill.name}
    //             </span>
    //           </div>
    //           </div>
    //         );
    //       })}
    //     </div>
    //   </div>
    // </section>
  );
};

export default Skills;
