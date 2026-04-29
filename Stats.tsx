import { Camera, Sun, Wifi, ShieldCheck, Zap, Cpu } from "lucide-react";

const items = [
  { tag: "30× ZOOM", icon: Camera, title: "4K OPTICAL ARRAY", desc: "Multi-sensor PTZ heads with 360° coverage and AI auto-tracking for real-time threat identification." },
  { tag: "600W ARRAY", icon: Sun, title: "SOLAR AUTONOMOUS", desc: "Tilted photovoltaic panels and 5kWh LiFePO₄ battery deliver 14+ days off-grid operation, indefinite in summer." },
  { tag: "4G / 5G + SAT", icon: Wifi, title: "MESH CONNECTIVITY", desc: "Dual-redundant cellular with Starlink fallback ensures uninterrupted streaming from any location on earth." },
  { tag: "IP66 RATED", icon: ShieldCheck, title: "MILITARY GRADE", desc: "Marine-grade aluminium chassis, weather-sealed enclosures. Operational from -30°C to +55°C." },
  { tag: "< 30 MIN", icon: Zap, title: "RAPID DEPLOY", desc: "Tow, level, raise mast — full system online and recording in under thirty minutes by a single operator." },
  { tag: "EDGE AI", icon: Cpu, title: "UNIFI PROTECT AI", desc: "On-device neural processing for person, vehicle, and licence plate recognition. Zero false alarms." },
];

const Capabilities = () => (
  <section id="systems" className="relative py-24 md:py-32">
    <div className="absolute inset-0 grid-overlay-sm opacity-40 pointer-events-none" />
    <div className="container relative">
      <div className="flex items-end justify-between flex-wrap gap-4 mb-16">
        <div>
          <div className="font-mono-hud text-xs text-primary tracking-widest mb-3 flex items-center gap-2">
            <span className="h-1.5 w-1.5 bg-primary animate-pulse-dot rounded-full" />
            CAPABILITIES
          </div>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight max-w-3xl">
            ENGINEERED FOR<br />THE <span className="text-primary">PERIMETER</span>
          </h2>
        </div>
        <p className="font-mono-hud text-xs text-muted-foreground max-w-xs tracking-wider">
          // EVERY SUBSYSTEM PURPOSE-BUILT FOR AUTONOMOUS SURVEILLANCE IN HOSTILE ENVIRONMENTS
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
        {items.map((it) => (
          <div key={it.title} className="bg-background p-8 group hover:bg-card transition-colors relative corner-brackets">
            <div className="flex items-center justify-between mb-8">
              <it.icon className="h-7 w-7 text-primary" strokeWidth={1.5} />
              <span className="font-mono-hud text-[10px] text-primary/70 tracking-widest border border-primary/30 px-2 py-1">
                {it.tag}
              </span>
            </div>
            <h3 className="text-xl font-bold tracking-tight mb-3">{it.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{it.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Capabilities;
