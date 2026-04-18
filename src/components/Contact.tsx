import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";

const contactInfo = [
  { icon: Mail, label: "Email", value: "naikshreya200@gmail.com", href: "mailto:naikshreya200@gmail.com" },
  { icon: Phone, label: "Phone", value: "+91 6360744771", href: "tel:+916360744771" },
  { icon: MapPin, label: "Location", value: "Gadag, Karnataka", href: "#" },
];

export function Contact() {
  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-widest text-accent mb-3">Contact</p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Let's <span className="text-gradient">connect</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Reach out via email, phone, or social — I'd love to hear from you.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto">
          {contactInfo.map((c) => (
            <a
              key={c.label}
              href={c.href}
              className="flex items-center gap-4 bg-gradient-card border border-border rounded-2xl p-5 shadow-card hover:border-primary/50 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="h-12 w-12 rounded-xl bg-gradient-primary flex items-center justify-center shadow-glow shrink-0">
                <c.icon className="text-primary-foreground" size={20} />
              </div>
              <div className="min-w-0">
                <p className="text-xs text-muted-foreground">{c.label}</p>
                <p className="text-sm font-medium truncate">{c.value}</p>
              </div>
            </a>
          ))}
        </div>

        <div className="flex justify-center gap-3 mt-10">
          <a
            href="https://github.com/shreyanayak0021-lgtm"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="h-12 w-12 rounded-xl bg-gradient-card border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-all"
          >
            <Github size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/shreyanaik21/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="h-12 w-12 rounded-xl bg-gradient-card border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-all"
          >
            <Linkedin size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}
