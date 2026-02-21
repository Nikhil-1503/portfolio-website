import { Github, ExternalLink, FolderOpen } from "lucide-react";
import canvasofnikhil from "@/assets/canvasofnikhil.png";
import pipeline from "@/assets/pipeline.png";
import datalake from "@/assets/datalake.png";
import dashboard from "@/assets/dashboard.png";

const projects = [
  {
    title: "Canvas Of Nikhil",
    description: "A personal art portfolio website showcasing my charcoal, graphite and color pencil artworks, designed to reflect creativity, precision and visual storytelling.",
    tags: ["Vite", "TypeScript", "React", "shadcn-ui", "Tailwind CSS"],
    link: "https://canvasofnikhil.netlify.app/",
    github: "https://github.com/Nikhil-1503/portfolio",
    image: canvasofnikhil,
  },
  {
    title: "Azure Data Pipeline",
    description: "End-to-end data pipeline for processing millions of records daily using ADF and Databricks.",
    tags: ["Azure Data Factory", "Databricks", "SQL"],
    image: pipeline,
  },
  {
    title: "Real-Time Analytics Dashboard",
    description: "Streaming analytics solution with live data ingestion and visualization.",
    tags: ["PySpark", "Azure", "Python"],
    image: dashboard,
  },
  {
    title: "Data Lake Architecture",
    description: "Scalable data lake design with bronze-silver-gold medallion architecture.",
    tags: ["ADLS", "Delta Lake", "Spark"],
    image: datalake,
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

        <div className="space-y-20">
            {projects.map((project, index) => {
                const reverse = index % 2 !== 0;

                return (
                <div
                    key={project.title}
                    className={`grid md:grid-cols-2 items-center gap-12 relative`}
                >
                {/* IMAGE SIDE */}
                <div className={`${reverse ? "md:order-2" : ""} relative z-0`}>
                    <a href={project.link} target="_blank" className="relative group block">
                    <div
                        className="
                            absolute inset-0
                            rounded-2xl
                            border border-primary/40
                            translate-x-3 translate-y-3
                            transition-all duration-500 ease-out
                            group-hover:translate-x-1 group-hover:translate-y-1
                        "
                    />
                    <img
                        src={project.image}
                        alt={project.title}
                        className="
                            relative z-10
                            w-full
                            rounded-2xl
                            object-cover
                            grayscale
                            transition-all duration-500 ease-out
                            group-hover:grayscale-0
                            group-hover:-translate-y-1
                            group-hover:scale-[1.03]
                            shadow-xl
                            group-hover:shadow-2xl group-hover:shadow-primary/20
                        "
                        />
                
                    </a>
                </div>

                {/* CONTENT SIDE */}
                
                <div className={`${reverse ? "md:order-1 md:-mr-20" : "md:-ml-20"} relative z-10 backdrop-blur-md rounded-lg p-6 card-hover bg-card overflow-hidden`}>
                    <div className="flex justify-between items-center mb-4">
                    <FolderOpen size={26} className="text-primary" />

                    <div className="flex gap-3">
                        {project.github && (
                        <a href={project.github} target="_blank">
                            <Github className="text-muted-foreground hover:text-primary transition" />
                        </a>
                        )}
                        {project.link && (
                        <a href={project.link} target="_blank">
                            <ExternalLink className="text-muted-foreground hover:text-primary transition" />
                        </a>
                        )}
                    </div>
                    </div>

                    <h3 className="text-2xl font-semibold mb-3">
                    {project.title}
                    </h3>

                    <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mt-5">
                    {project.tags.map((tag) => (
                        <span
                        key={tag}
                        className="text-xs font-mono text-primary bg-primary/10 px-3 py-1 rounded"
                        >
                        {tag}
                        </span>
                    ))}
                    </div>
                </div>
                </div>
                );
            })}
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
