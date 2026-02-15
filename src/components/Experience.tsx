// import { Briefcase, Calendar } from "lucide-react";

// const Experience = () => {
//   return (
//     <section id="experience" className="section-padding bg-secondary/30">
//       <div className="container mx-auto max-w-4xl">
//         <h2 className="text-3xl md:text-4xl font-bold mb-2">
//           Work <span className="text-gradient">Experience</span>
//         </h2>
//         <div className="w-16 h-1 bg-primary rounded mb-10" />

//         {/* Timeline */}
//         <div className="relative border-l-2 border-border pl-8 space-y-8">
//           <div className="absolute -left-[9px] top-0 glow-dot" />

//           <div className="border border-border rounded-lg p-6 card-hover bg-card">
//             <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
//               <div className="flex items-center gap-2">
//                 <Briefcase size={18} className="text-primary" />
//                 <h3 className="text-lg font-semibold text-foreground">Data Engineer</h3>
//               </div>
//               <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1 sm:mt-0">
//                 <Calendar size={14} />
//                 <span>Jan 2023 - Present</span>
//               </div>
//             </div>
//             <p className="text-primary font-medium mb-3">Deloitte</p>
//             <ul className="space-y-2 text-sm text-muted-foreground">
//               <li className="flex items-start gap-2">
//                 <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
//                 Designed and implemented scalable data pipelines using Azure Data Factory and Azure Databricks.
//               </li>
//               <li className="flex items-start gap-2">
//                 <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
//                 Built ETL/ELT workflows processing large-scale datasets on big data platforms.
//               </li>
//               <li className="flex items-start gap-2">
//                 <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
//                 Enabled enterprise analytics and reporting by building interactive dashboards and reports in Oracle FDI, translating complex data into actionable insights for stakeholders.
//               </li>
//               <li className="flex items-start gap-2">
//                 <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
//                 Managed job scheduling and orchestration using Control-M.
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Experience;

import { useState } from "react";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    company: "Deloitte",
    role: "Data Engineer",
    duration: "Jan 2023 - Present",
    points: [
      "Designed and implemented scalable data pipelines using Azure Data Factory and Azure Databricks.",
      "Built ETL/ELT workflows processing large-scale datasets on big data platforms.",
      "Enabled enterprise analytics using Oracle FDI dashboards and reports.",
      "Managed job scheduling and orchestration using Control-M.",
    ],
  },
  {
    company: "cppSecrets",
    role: "Python Developer Intern",
    duration: "May 2021 - Jul 2021",
    points: [
      "Developed Python scripts for analytics engineering.",
      "Improved query performance by optimizing partitioning and indexing.",
      "Collaborated with BI teams to deliver business metrics.",
    ],
  },
];

const Experience = () => {
  const [activeIndex, setActiveIndex] = useState(0);

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
          <div key={activeIndex} className="space-y-4 animate-fade-in">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
                <Briefcase size={18} className="text-primary" />
                {experiences[activeIndex].role}
              </h3>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Calendar size={14} />
                {experiences[activeIndex].duration}
              </div>
            </div>

            <p className="text-primary font-medium">
              {experiences[activeIndex].company}
            </p>

            <ul className="space-y-2 text-sm text-muted-foreground">
              {experiences[activeIndex].points.map((point, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
