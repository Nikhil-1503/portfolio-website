import { ArrowDown, Briefcase } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="animate-fade-up">
          <div className="inline-flex items-center gap-2 border border-border rounded-full px-4 py-1.5 mb-6 text-sm text-muted-foreground">
            <span className="glow-dot" />
            Available for opportunities
          </div>
        </div>

        <h1 className="animate-fade-up animate-delay-100 text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-4">
          Nikhil <span className="text-gradient">Shanbhag</span>
        </h1>

        <p className="animate-fade-up animate-delay-200 text-lg sm:text-xl md:text-2xl text-muted-foreground mb-2 font-mono">
          Data Engineer
        </p>
        <p className="animate-fade-up animate-delay-200 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
          Building Scalable Data Pipelines & Analytics Solutions.
          <br className="hidden sm:block" />
          Transforming raw data into actionable insights.
        </p>

        <div className="animate-fade-up animate-delay-300 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity"
          >
            <Briefcase size={18} />
            View Portfolio
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 border border-border text-foreground px-6 py-3 rounded-lg font-medium hover:border-primary hover:text-primary transition-colors"
          >
            Contact Me
          </a>
        </div>

        <a
          href="#about"
          className="animate-fade-up animate-delay-500 inline-block mt-16 text-muted-foreground hover:text-primary transition-colors animate-bounce"
        >
          <ArrowDown size={24} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
