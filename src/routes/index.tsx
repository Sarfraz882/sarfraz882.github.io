import { createFileRoute } from "@tanstack/react-router";
import { AnimatedBackground } from "@/components/portfolio/Background";
import { Navbar, BackToTop } from "@/components/portfolio/Navbar";
import {
  Hero, About, Services, Projects, Skills,
  Experience, Certifications, Testimonials, Contact, Footer,
} from "@/components/portfolio/Sections";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-transparent text-slate-100 selection:bg-sky-500/30 selection:text-sky-300 relative">
      <AnimatedBackground />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <Skills />
        <Experience />
        <Certifications />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}

