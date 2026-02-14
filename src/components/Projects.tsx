import { ExternalLink, FolderOpen } from "lucide-react";

const projects = [
  {
    title: "Azure Data Pipeline",
    description: "End-to-end data pipeline for processing millions of records daily using ADF and Databricks.",
    tags: ["Azure Data Factory", "Databricks", "SQL"],
  },
  {
    title: "Real-Time Analytics Dashboard",
    description: "Streaming analytics solution with live data ingestion and visualization.",
    tags: ["PySpark", "Azure", "Python"],
  },
  {
    title: "Data Lake Architecture",
    description: "Scalable data lake design with bronze-silver-gold medallion architecture.",
    tags: ["ADLS", "Delta Lake", "Spark"],
  },
  {
    title: "ETL Optimization Engine",
    description: "Performance-tuned ETL workflows reducing processing time by 60%.",
    tags: ["SQL", "Control-M", "Python"],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section-padding bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          Featured <span className="text-gradient">Projects</span>
        </h2>
        <div className="w-16 h-1 bg-primary rounded mb-10" />

        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group border border-border rounded-lg p-6 card-hover bg-card"
            >
              <div className="flex items-center justify-between mb-3">
                <FolderOpen size={28} className="text-primary" />
                <ExternalLink
                  size={18}
                  className="text-muted-foreground group-hover:text-primary transition-colors"
                />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{project.title}</h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-mono text-primary bg-primary/10 px-2 py-1 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
