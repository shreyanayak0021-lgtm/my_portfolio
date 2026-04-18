import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Achievements } from "@/components/Achievements";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Shreya L Naik — Software Developer Portfolio" },
      {
        name: "description",
        content:
          "Portfolio of Shreya L Naik, a Computer Science undergraduate and software developer specializing in scalable, user-friendly web applications.",
      },
      { property: "og:title", content: "Shreya L Naik — Software Developer" },
      { property: "og:description", content: "Software developer portfolio featuring projects, skills, and achievements." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Achievements />
      <Contact />
      <Footer />
    </main>
  );
}
