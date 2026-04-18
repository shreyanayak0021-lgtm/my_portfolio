import { Award, BadgeCheck } from "lucide-react";

const certificates = [
  "Basic C Programming — Simplilearn",
  "Introduction to Digital Marketing — Simplilearn",
  "Data Structures and Algorithms — Infosys SpringBoard",
];

const awards = [
  {
    title: "Best Technical Paper Presentation",
    place: "AGMR College of Engineering, Varur, Hubli",
    year: "2025",
  },
  {
    title: "Best Paper Award — Project Symposium",
    place: "Tontadarya College of Engineering, Gadag",
    year: "2025",
  },
];

export function Achievements() {
  return (
    <section id="achievements" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-widest text-accent mb-3">Achievements</p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Certificates & <span className="text-gradient">awards</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-card border border-border rounded-3xl p-8 shadow-card">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <BadgeCheck className="text-primary" /> Certificates
            </h3>
            <ul className="space-y-3">
              {certificates.map((c) => (
                <li
                  key={c}
                  className="flex items-start gap-3 rounded-xl bg-background/30 border border-border p-4 hover:border-primary/50 transition-colors"
                >
                  <div className="h-2 w-2 rounded-full bg-gradient-primary mt-2 shrink-0" />
                  <span className="text-sm">{c}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gradient-card border border-border rounded-3xl p-8 shadow-card">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Award className="text-accent" /> Awards
            </h3>
            <ul className="space-y-4">
              {awards.map((a) => (
                <li
                  key={a.title}
                  className="rounded-xl bg-background/30 border border-border p-4 hover:border-accent/50 transition-colors"
                >
                  <div className="flex justify-between items-start gap-4 mb-1">
                    <h4 className="font-semibold">{a.title}</h4>
                    <span className="text-xs text-accent">{a.year}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{a.place}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
