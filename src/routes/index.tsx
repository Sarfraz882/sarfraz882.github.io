import { createFileRoute } from "@tanstack/react-router";
import { AnimatedBackground } from "@/components/portfolio/Background";
import { Navbar, BackToTop } from "@/components/portfolio/Navbar";
import {
  Hero, About, Stats, Expertise, Experience, Projects,
  Skills, Certifications, Testimonials, Contact, Footer, BigMarqueeBanner,
} from "@/components/portfolio/Sections";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <main className="relative min-h-screen overflow-x-hidden text-foreground">
      <AnimatedBackground />
      <Navbar />
      <Hero />
      <BigMarqueeBanner text="Systems · Cloud · Security · Infrastructure" />
      <About />
      <Stats />
      <Expertise />
      <Experience />
      <Projects />
      <Skills />
      <Certifications />
      <Testimonials />
      <BigMarqueeBanner text="Available for Enterprise Roles — 2026" />
      <Contact />
      <Footer />
      <BackToTop />
    </main>
  );
}
