import { useState } from "react";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    company: "Deloitte",
    roles: [
      {
        title: "Data Engineer II",
        duration: "May 2026 - Present",
        points: [
          "Led design of scalable data pipelines using Azure Data Factory and Azure Databricks.",
          "Mentored junior engineers on ETL/ELT workflow standards.",
        ],
      },
      {
        title: "Data Engineer",
        duration: "Jan 2023 - Apr 2026",
        points: [
          "Designed and implemented scalable data pipelines using Azure Data Factory and Azure Databricks.",
          "Built ETL/ELT workflows processing large-scale datasets on big data platforms.",
          "Enabled enterprise analytics using Oracle FDI dashboards and reports.",
          "Managed job scheduling and orchestration using Control-M.",
        ],
      },
    ],
  },
  {
    company: "cppSecrets",
    roles: [
      {
        title: "Python Developer Intern",
        duration: "May 2021 - Jul 2021",
        points: [
          "Developed Python scripts for analytics engineering.",
          "Improved query performance by optimizing partitioning and indexing.",
          "Collaborated with BI teams to deliver business metrics.",
        ],
      },
    ],
  },
];

const Experience = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeCompany = experiences[activeIndex];

  return (
    <section id="experience" className="section-padding bg-secondary/30">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          Work <span className="text-gradient">Experience</span>
        </h2>
        <div className="w-16 h-1 bg-primary rounded mb-10" />

        <div className="grid md:grid-cols-[200px_1fr] gap-8">
          {/* Left Company Tabs */}
          <div className="flex md:flex-col border-l-2 md:border-l-0 md:border-r-2 border-border">
            {experiences.map((exp, i) => (
              <button
                key={exp.company}
                onClick={() => setActiveIndex(i)}
                className={`px-4 py-3 text-left text-sm transition-all border-l-2 md:border-l-0 md:border-r-2
                  ${
                    activeIndex === i
                      ? "border-primary text-primary bg-primary/10"
                      : "border-transparent text-muted-foreground hover:bg-secondary/50"
                  }`}
              >
                {exp.company}
              </button>
            ))}
          </div>

          {/* Right Content Panel */}
          <div key={activeIndex} className="animate-fade-in">
            <p className="text-primary font-medium text-base mb-4">
              {activeCompany.company}
            </p>

            <div className="relative border-l-2 border-border pl-6 space-y-6">
              {activeCompany.roles.map((role, i) => (
                <div key={role.title} className="relative">
                  <span
                    className={`absolute -left-[29px] top-1 w-3 h-3 rounded-full border-2 border-background ${
                      i === 0 ? "bg-primary" : "bg-muted-foreground/50"
                    }`}
                  />

                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
                      <Briefcase size={18} className="text-primary" />
                      {role.title}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1 sm:mt-0">
                      <Calendar size={14} />
                      {role.duration}
                    </div>
                  </div>

                  <ul className="mt-2 space-y-2 text-sm text-muted-foreground">
                    {role.points.map((point, j) => (
                      <li key={j} className="flex items-start gap-2">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;