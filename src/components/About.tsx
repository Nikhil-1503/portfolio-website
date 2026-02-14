import { GraduationCap, MapPin } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          About <span className="text-gradient">Me</span>
        </h2>
        <div className="w-16 h-1 bg-primary rounded mb-8" />

        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-4 text-muted-foreground leading-relaxed">
            <p>
              I'm a Data Engineer with 3 years of experience at Deloitte, specializing in
              designing and building scalable data pipelines and analytics solutions. My work
              revolves around turning complex, raw data into clean, reliable datasets that power
              enterprise-level decision-making.
            </p>
            <p>
              I work extensively with <span className="text-foreground font-medium">Azure Data Factory</span>,{" "}
              <span className="text-foreground font-medium">Azure Data Lake</span>,{" "}
              <span className="text-foreground font-medium">Apache Spark</span>, and modern big data
              platforms to deliver robust ETL/ELT workflows at scale.
            </p>
          </div>

          <div className="space-y-4">
            <div className="border border-border rounded-lg p-4 card-hover">
              <div className="flex items-center gap-3 mb-2">
                <GraduationCap size={20} className="text-primary" />
                <h3 className="font-semibold text-foreground">Education</h3>
              </div>
              <p className="text-sm text-muted-foreground">B.Tech</p>
              <p className="text-sm text-muted-foreground">NIE, Mysore</p>
            </div>

            <div className="border border-border rounded-lg p-4 card-hover">
              <div className="flex items-center gap-3 mb-2">
                <MapPin size={20} className="text-primary" />
                <h3 className="font-semibold text-foreground">Location</h3>
              </div>
              <p className="text-sm text-muted-foreground">India</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
