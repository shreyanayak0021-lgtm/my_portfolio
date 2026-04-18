import { GraduationCap, Code2, Sparkles } from "lucide-react";

const education = [
  {
    title: "B.E. Computer Science",
    place: "Tontadarya College of Engineering, Gadag",
    score: "CGPA: 9.17",
    year: "2022 – 2026",
  },
  {
    title: "Pre University Education",
    place: "Sanmarg PU College, Gadag",
    score: "88.6%",
    year: "2022",
  },
  {
    title: "SSLC",
    place: "Basaveshwar English Medium High School, Gadag",
    score: "87.68%",
    year: "2020",
  },
];

const stats = [
  { icon: Code2, label: "Projects Built", value: "3+" },
  { icon: GraduationCap, label: "CGPA", value: "9.17" },
  { icon: Sparkles, label: "Awards Won", value: "2" },
];

export function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-widest text-accent mb-3">About Me</p>
          <h2 className="text-4xl md:text-5xl font-bold">
            A bit about <span className="text-gradient">my journey</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a motivated Computer Science undergraduate with a strong passion
              for software development and building scalable, efficient applications.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Skilled in designing and developing user-friendly web applications
              using modern technologies. I solve complex problems through logical
              thinking and clean coding practices, while collaborating effectively
              with teams to deliver high-quality software solutions.
            </p>

            <div className="grid grid-cols-3 gap-4 pt-6">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="bg-gradient-card border border-border rounded-2xl p-4 text-center shadow-card"
                >
                  <s.icon className="mx-auto mb-2 text-primary" size={24} />
                  <div className="text-2xl font-bold text-gradient">{s.value}</div>
                  <div className="text-xs text-muted-foreground mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <GraduationCap className="text-primary" /> Education
            </h3>
            {education.map((e, i) => (
              <div
                key={i}
                className="bg-gradient-card border border-border rounded-2xl p-6 shadow-card hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex justify-between items-start gap-4 mb-2">
                  <h4 className="font-semibold text-lg">{e.title}</h4>
                  <span className="text-xs text-accent whitespace-nowrap">{e.year}</span>
                </div>
                <p className="text-sm text-muted-foreground mb-2">{e.place}</p>
                <span className="inline-block text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                  {e.score}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
