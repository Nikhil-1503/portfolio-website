import { Award, Clock, Target, CircleCheck  } from "lucide-react";

const certifications = [
  {
    name: "Databricks Certified Data Engineer Associate",
    org: "Databricks",
    status: "Completed" as const,
    link: "https://credentials.databricks.com/2f16f8f1-441b-42e9-a10a-44545ae2057e#acc.cxe7z201",
  },
  {
    name: "Databricks Certified Generative AI Engineer Engineer",
    org: "Databricks",
    status: "Planned" as const,
  },
  {
    name: "Microsoft Certified: Azure AI Engineer (AZ-102)",
    org: "Microsoft",
    status: "Completed" as const,
    link: "https://learn.microsoft.com/api/credentials/share/en-in/NikhilShanbhag-9335/BDACC328F87B91AF?sharingId=148C60CD3A2AE99",
  },
];

const statusConfig = {
  "Completed": { icon: CircleCheck , className: "text-green-600 bg-green-500/10 border-green-500/30" },
  Planned: { icon: Target, className: "text-muted-foreground bg-secondary border-border" },
};

const Certifications = () => {
  return (
    <section id="certifications" className="section-padding bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          <span className="text-gradient">Certifications</span> & Learning
        </h2>
        <p className="text-muted-foreground mb-2 max-w-xl">
          Continuous learning and professional growth in cloud & data engineering.
        </p>
        <div className="w-16 h-1 bg-primary rounded mb-10" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert) => {
            const config = statusConfig[cert.status];
            const StatusIcon = config.icon;
            return (
              <a href={cert.link} target="_blank" className="relative group block">
              <div
                key={cert.name}
                className="border border-border rounded-lg p-6 card-hover bg-card flex flex-col"
              >
                <div className="flex items-center justify-between mb-4">
                  <Award size={28} className="text-primary" />
                  <span className={`text-xs font-mono px-2.5 py-1 rounded border flex items-center gap-1.5 ${config.className}`}>
                    <StatusIcon size={12} />
                    {cert.status}
                  </span>
                </div>
                <h3 className="text-base font-semibold text-foreground mb-1 leading-snug">{cert.name}</h3>
                <p className="text-sm text-muted-foreground">{cert.org}</p>
              </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
