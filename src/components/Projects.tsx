import { Github, ExternalLink, FolderOpen } from "lucide-react";

const projects = [
  {
    title: "Artworks by Nikhil Shanbhag",
    description: "Charcoal, pencil, and color pencil artworks crafted to tell stories and evoke emotion.",
    tags: ["Vite", "TypeScript", "React", "shadcn-ui", "Tailwind CSS"],
    link: "https://github.com/Nikhil-1503/portfolio",
    github: "https://github.com/Nikhil-1503/portfolio"
  },
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
                  {/* <a href={project.github} target="_blank">
                    <Github className="hover:text-primary transition" />
                  </a>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full hover:bg-primary/10 transition-all duration-300 group/link"
                    >
                    <ExternalLink
                    size={18}
                    className="text-muted-foreground group-hover/link:text-primary group-hover/link:scale-110 transition-all"
                    />
                  </a> */}
                <div className="flex gap-2">
                  {
                    project.github && (
                    <a href={project.github} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full hover:bg-primary/10 hover:shadow-[0_0_12px_rgba(34,197,94,0.4)] transition-all duration-300"
                    >
                    <Github 
                    size = {18} 
                    className="text-muted-foreground group-hover/link:text-primary group-hover/link:scale-110 transition-all" />
                    </a>
                    )
                  }
                  {
                    project.link && (                    
                    <a href={project.link} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full hover:bg-primary/10 hover:shadow-[0_0_12px_rgba(34,197,94,0.4)] transition-all duration-300"
                    >
                      <ExternalLink 
                      size={18}
                      className="text-muted-foreground group-hover/link:text-primary group-hover/link:scale-110 transition-all" />
                    </a>
                    )
                  }
                </div>
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

        <div className="mt-10 text-center">
          <a
            href="https://github.com/Nikhil-1503"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium rounded-lg border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all"
          >
            See More Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
