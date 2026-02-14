import { Database, Code, Cloud, Terminal, Settings, Workflow } from "lucide-react";
import { SiPython, SiDatabricks, SiOracle, SiApacheairflow } from "react-icons/si";


const skills = [
  { name: "SQL", icon: Database },
  { name: "Python", icon: SiPython },
  { name: "PySpark", icon: Terminal },
  { name: "Azure Data Factory", icon: Cloud },
  { name: "Azure Databricks", icon: SiDatabricks },
  { name: "Oracle FDI", icon: SiOracle },
  { name: "Control-M", icon: Settings },
];

const Skills = () => {
  return (
    <section id="skills" className="section-padding">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          Tech <span className="text-gradient">Skills</span>
        </h2>
        <div className="w-16 h-1 bg-primary rounded mb-10" />

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
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
      </div>
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
