import { Briefcase, Calendar } from "lucide-react";

const Experience = () => {
  return (
    <section id="experience" className="section-padding bg-secondary/30">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          Work <span className="text-gradient">Experience</span>
        </h2>
        <div className="w-16 h-1 bg-primary rounded mb-10" />

        {/* Timeline */}
        <div className="relative border-l-2 border-border pl-8 space-y-8">
          <div className="absolute -left-[9px] top-0 glow-dot" />

          <div className="border border-border rounded-lg p-6 card-hover bg-card">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
              <div className="flex items-center gap-2">
                <Briefcase size={18} className="text-primary" />
                <h3 className="text-lg font-semibold text-foreground">Data Engineer</h3>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1 sm:mt-0">
                <Calendar size={14} />
                <span>3 Years</span>
              </div>
            </div>
            <p className="text-primary font-medium mb-3">Deloitte</p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                Designed and implemented scalable data pipelines using Azure Data Factory and Azure Databricks.
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                Built ETL/ELT workflows processing large-scale datasets on big data platforms.
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                Enabled enterprise analytics and reporting through optimized data architectures.
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                Managed job scheduling and orchestration using Control-M.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
