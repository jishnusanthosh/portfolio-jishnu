
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import ExperienceEducation from "@/components/ExperienceEducation";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#070b14]">
      <Navbar />
     
      <Hero />

       <About />

       <Skills />
       <Projects />
       <ExperienceEducation />
       <Services />
       <Contact />
       <Footer/>
    </main>
  );
}
