import { Code, Layout, Users, Lightbulb, MessageCircle, Headphones, Palette, Zap } from "lucide-react";

const technical = [
  { name: "Python", icon: Code },
  { name: "C Programming", icon: Code },
  { name: "HTML", icon: Layout },
  { name: "CSS", icon: Palette },
  { name: "JavaScript", icon: Zap },
  { name: "Responsive Design", icon: Layout },
];

const soft = [
  { name: "Communication", icon: MessageCircle },
  { name: "Team Work", icon: Users },
  { name: "Creativity & Innovation", icon: Lightbulb },
  { name: "Active Listening", icon: Headphones },
];

export function Skills() {
  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-widest text-accent mb-3">Skills</p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Tools & <span className="text-gradient">strengths</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-card border border-border rounded-3xl p-8 shadow-card">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Code className="text-primary" /> Technical
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {technical.map((s) => (
                <div
                  key={s.name}
                  className="group flex items-center gap-3 rounded-xl border border-border bg-background/30 px-4 py-3 hover:border-primary hover:bg-primary/5 transition-all duration-300"
                >
                  <s.icon size={18} className="text-primary group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-medium">{s.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-card border border-border rounded-3xl p-8 shadow-card">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Users className="text-accent" /> Soft Skills
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {soft.map((s) => (
                <div
                  key={s.name}
                  className="group flex items-center gap-3 rounded-xl border border-border bg-background/30 px-4 py-3 hover:border-accent hover:bg-accent/5 transition-all duration-300"
                >
                  <s.icon size={18} className="text-accent group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-medium">{s.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
