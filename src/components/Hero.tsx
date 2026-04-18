import { ArrowDown, Download, Mail } from "lucide-react";
import avatar from "@/assets/shreya.jpeg";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-24"
      style={{ background: "var(--gradient-hero-dark)", color: "var(--hero-foreground)" }}
    >
      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(var(--hero-foreground) 1px, transparent 1px), linear-gradient(90deg, var(--hero-foreground) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
        aria-hidden="true"
      />

      {/* Floating glowing orbs */}
      <div
        className="absolute top-1/4 -left-20 h-72 w-72 rounded-full blur-3xl animate-glow"
        style={{ background: "oklch(0.55 0.22 255 / 0.55)" }}
      />
      <div
        className="absolute bottom-1/4 -right-20 h-96 w-96 rounded-full blur-3xl animate-glow"
        style={{ background: "oklch(0.45 0.2 270 / 0.45)" }}
      />

      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <div className="animate-fade-up">
          <span
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs mb-6 backdrop-blur-sm"
            style={{
              border: "1px solid var(--hero-border)",
              background: "var(--hero-card)",
              color: "var(--hero-muted)",
            }}
          >
            <span className="h-2 w-2 rounded-full bg-primary-glow animate-pulse" />
            Available for opportunities
          </span>

          <h1 className="font-display text-5xl md:text-7xl font-bold leading-tight mb-6">
            Hi, I'm{" "}
            <span
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.85 0.12 240), oklch(0.7 0.18 230))",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              Shreya L Naik
            </span>
          </h1>

          <p className="text-xl md:text-2xl mb-4" style={{ color: "var(--hero-muted)" }}>
            Software Developer
          </p>

          <p
            className="text-base mb-8 max-w-lg leading-relaxed"
            style={{ color: "oklch(0.72 0.04 240)" }}
          >
            Computer Science undergraduate passionate about building scalable,
            user-friendly applications with modern web technologies and clean code.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="/SHREYA_RESUME.pdf"
              download
              className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-glow hover:scale-105 transition-transform duration-300"
            >
              <Download size={18} /> Download Resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium backdrop-blur-sm transition-colors duration-300 hover:brightness-125"
              style={{
                border: "1px solid var(--hero-border)",
                background: "var(--hero-card)",
                color: "var(--hero-foreground)",
              }}
            >
              <Mail size={18} /> Get in Touch
            </a>
          </div>
        </div>

        <div className="relative flex justify-center lg:justify-end animate-fade-up">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-primary blur-3xl opacity-60 animate-glow" />
            <div
              className="relative h-72 w-72 md:h-96 md:w-96 rounded-full overflow-hidden shadow-elegant animate-float"
              style={{ border: "1px solid var(--hero-border)" }}
            >
              <img
                src={avatar}
                alt="Shreya L Naik"
                width={768}
                height={768}
                className="h-full w-full object-cover"
              />
            </div>
            <div
              className="absolute -top-4 -right-4 h-20 w-20 rounded-2xl bg-gradient-primary shadow-glow rotate-12 animate-float"
              style={{ animationDelay: "1s" }}
            />
            <div
              className="absolute -bottom-4 -left-4 h-16 w-16 rounded-2xl shadow-glow -rotate-12 animate-float"
              style={{ animationDelay: "2s", background: "oklch(0.55 0.2 255)" }}
            />
          </div>
        </div>
      </div>

      <a
        href="#about"
        aria-label="Scroll down"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 transition-colors"
        style={{ color: "var(--hero-muted)" }}
      >
        <ArrowDown className="animate-bounce" />
      </a>
    </section>
  );
}
