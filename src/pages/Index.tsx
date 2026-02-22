import { useState } from "react";
import Preloader from "@/components/Preloader";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Blog from "@/components/Blog";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <Preloader onComplete={() => setLoading(false)} />}
      <div className={`min-h-screen bg-background ${loading ? "opacity-0" : "animate-fade-up"}`}>
        <Navbar />
        <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Blog />
      <Certifications />
      <Contact />
      <Footer />
      </div>
    </>
  );
};

export default Index;
