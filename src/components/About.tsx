import { GraduationCap, MapPin } from "lucide-react";
import profileImg from "@/assets/nikhil-profile.png";

const About = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          About <span className="text-gradient">Me</span>
        </h2>
        <div className="w-16 h-1 bg-primary rounded mb-8" />

        <div className="grid md:grid-cols-[auto_1fr_auto] gap-8 items-start">
          {/* <div className="flex justify-center md:justify-start">
            <img
              src={profileImg}
              alt="Nikhil Shanbhag"
              className="w-40 h-40 md:w-48 md:h-48 rounded-xl object-cover border-2 border-primary/30 shadow-lg shadow-primary/10"
            />
          </div> */}

          <div className="relative group w-40 h-40 md:w-48 md:h-48">
            <div className="absolute inset-0 border-2 border-primary rounded-xl translate-x-3 translate-y-3 transition-all duration-300 group-hover:translate-x-1 group-hover:translate-y-1"></div>

            <img
              src={profileImg}
              alt="Nikhil Shanbhag"
              className="relative z-10 w-full h-full object-cover rounded-xl grayscale transition-all duration-300 
              group-hover:grayscale-0 group-hover:-translate-x-1 group-hover:-translate-y-1 group-hover:scale-105 
              shadow-xl group-hover:shadow-primary/30"
            />
          </div>

          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              I'm a Data Engineer with 3 years of experience, specializing in
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
            <a href="https://nie.ac.in/">
            <div className="border border-border rounded-lg p-4 card-hover">
              <div className="flex items-center gap-3 mb-2">
                <GraduationCap size={20} className="text-primary" />
                <h3 className="font-semibold text-foreground">Education</h3>
              </div>
              <p className="text-sm text-muted-foreground">B.E in CSE</p>
              <p className="text-sm text-muted-foreground">NIE, Mysuru</p>
            </div>
            </a>

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
