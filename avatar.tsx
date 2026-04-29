import { HardHat, Building2, Truck, Zap, Trees, Calendar } from "lucide-react";

const cases = [
  { icon: HardHat, label: "CONSTRUCTION SITES" },
  { icon: Building2, label: "CRITICAL INFRASTRUCTURE" },
  { icon: Truck, label: "LOGISTICS & PORTS" },
  { icon: Zap, label: "UTILITIES & ENERGY" },
  { icon: Trees, label: "REMOTE / RURAL ASSETS" },
  { icon: Calendar, label: "EVENTS & FESTIVALS" },
];

const UseCases = () => (
  <section className="border-y border-border bg-card/30 py-16">
    <div className="container">
      <div className="font-mono-hud text-xs text-muted-foreground tracking-widest text-center mb-10">
        // DEPLOYED ACROSS
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-border">
        {cases.map((c) => (
          <div key={c.label} className="bg-background p-6 flex flex-col items-center gap-3 text-center hover:bg-card transition-colors">
            <c.icon className="h-6 w-6 text-primary" strokeWidth={1.5} />
            <div className="font-mono-hud text-[10px] tracking-widest text-muted-foreground">{c.label}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default UseCases;
