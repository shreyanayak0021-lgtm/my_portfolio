import { Car, ShoppingBag, Brain, ArrowUpRight } from "lucide-react";

const projects = [
  {
    icon: Car,
    title: "Smart Vehicle Affordability & Expense Tracker",
    desc: "Helps users calculate monthly expenses (EMI, groceries, insurance) and determines vehicle affordability without financial strain. Combines expense tracking, EMI calculation, and affordability analysis.",
    tags: ["Python", "Finance", "Analytics"],
    status: "Completed",
  },
  {
    icon: ShoppingBag,
    title: "E-Commerce Website",
    desc: "Responsive e-commerce frontend with interactive product pages, navigation, and cart features. Focused on clean UI/UX, cross-device compatibility, and performance optimization.",
    tags: ["HTML", "CSS", "JavaScript"],
    status: "Completed",
  },
  {
    icon: Brain,
    title: "AI-Driven Medical Image Analysis",
    desc: "AI assists radiologists by automating detection of conditions like tumors and fractures from X-rays, CT scans, or MRIs — improving accuracy and speed of diagnosis.",
    tags: ["AI/ML", "Healthcare", "Python"],
    status: "Ongoing",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-widest text-accent mb-3">Projects</p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Things I've <span className="text-gradient">built</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <article
              key={p.title}
              className="group relative bg-gradient-card border border-border rounded-3xl p-6 shadow-card hover:shadow-glow hover:border-primary/50 transition-all duration-500 hover:-translate-y-2"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="h-14 w-14 rounded-2xl bg-gradient-primary flex items-center justify-center shadow-glow">
                  <p.icon className="text-primary-foreground" size={26} />
                </div>
                <span
                  className={`text-xs px-3 py-1 rounded-full border ${
                    p.status === "Ongoing"
                      ? "border-accent/40 bg-accent/10 text-accent"
                      : "border-primary/40 bg-primary/10 text-primary"
                  }`}
                >
                  {p.status}
                </span>
              </div>

              <h3 className="text-xl font-bold mb-3 group-hover:text-gradient transition-colors">
                {p.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                {p.desc}
              </p>

              <div className="flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-3 py-1 rounded-full bg-background/50 border border-border text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <ArrowUpRight
                className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 text-primary transition-all duration-300"
                size={20}
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
