import { Database, Code, Cloud, Terminal, Settings, Workflow } from "lucide-react";

const skills = [
  { name: "SQL", level: 90, icon: Database },
  { name: "Python", level: 85, icon: Code },
  { name: "PySpark", level: 80, icon: Terminal },
  { name: "Azure Data Factory", level: 88, icon: Cloud },
  { name: "Azure Databricks", level: 82, icon: Workflow },
  { name: "Oracle FDI", level: 75, icon: Settings },
  { name: "Control-M", level: 78, icon: Settings },
];

const Skills = () => {
  return (
    <section id="skills" className="section-padding">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          Tech <span className="text-gradient">Skills</span>
        </h2>
        <div className="w-16 h-1 bg-primary rounded mb-10" />

        <div className="grid sm:grid-cols-2 gap-4">
          {skills.map((skill) => {
            const Icon = skill.icon;
            return (
              <div
                key={skill.name}
                className="border border-border rounded-lg p-5 card-hover bg-card flex items-center gap-4"
              >
                <div className="shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Icon size={20} className="text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-foreground">{skill.name}</span>
                    <span className="text-xs text-muted-foreground font-mono">{skill.level}%</span>
                  </div>
                  <div className="w-full h-1.5 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
