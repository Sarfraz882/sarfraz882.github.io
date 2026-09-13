import { createFileRoute } from "@tanstack/react-router";
import { AnimatedBackground } from "@/components/portfolio/Background";
import { Navbar, BackToTop } from "@/components/portfolio/Navbar";
import {
  Hero, About, Experience, Skills, Projects,
  Certifications, Testimonials, Contact, Footer,
} from "@/components/portfolio/Sections";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-white text-[#09090B] selection:bg-[#18181B] selection:text-white">
      <AnimatedBackground />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Certifications />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
