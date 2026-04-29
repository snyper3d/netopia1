import { ChevronRight, Shield } from "lucide-react";
import hero from "@/assets/hero-trailer.jpg";

const bootLines = [
  "[01] SOLAR.ARRAY — CHARGING",
  "[02] OPTICS MODULE — ONLINE",
  "[03] UNIFI PROTECT — LINKED",
  "[04] PERIMETER SCAN — ENGAGED",
];

const Hero = () => {
  return (
    <section id="top" className="relative min-h-screen flex items-end overflow-hidden pt-14">
      {/* Background image */}
      <img
        src={hero}
        alt="Solar-powered mobile CCTV surveillance trailer deployed at industrial construction site at dusk"
        className="absolute inset-0 h-full w-full object-cover opacity-60"
        width={1920}
        height={1080}
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-hero" />
      {/* Grid */}
      <div className="absolute inset-0 grid-overlay opacity-70" />
      {/* Top fade */}
      <div className="absolute top-14 inset-x-0 h-40 bg-gradient-to-b from-background to-transparent" />
      {/* Bottom fade */}
      <div className="absolute bottom-0 inset-x-0 h-64 bg-gradient-fade-b" />

      <div className="container relative z-10 pb-20 md:pb-28">
        {/* Boot sequence */}
        <div className="font-mono-hud text-[11px] md:text-xs text-primary/80 space-y-1 mb-10 animate-fade-up">
          {bootLines.map((l, i) => (
            <div key={l} style={{ animationDelay: `${i * 150}ms` }} className="animate-fade-up flex items-center gap-2">
              <span className="h-1.5 w-1.5 bg-primary inline-block animate-blink" />
              {l}
            </div>
          ))}
        </div>

        {/* Headline */}
        <h1 className="font-black tracking-tight leading-[0.9] text-5xl sm:text-7xl md:text-8xl lg:text-9xl max-w-5xl animate-fade-up" style={{ animationDelay: "600ms" }}>
          OFF-GRID
          <br />
          <span className="text-primary text-glow">SURVEILLANCE</span>
        </h1>

        <p className="mt-8 max-w-xl text-base md:text-lg text-muted-foreground animate-fade-up" style={{ animationDelay: "800ms" }}>
          Solar-powered mobile CCTV trailers engineered for construction sites, critical infrastructure, and remote assets.
          Powered by <span className="text-foreground font-medium">UniFi Protect AI</span>. Always watching. Always recording.
        </p>

        <div className="mt-10 flex flex-wrap gap-3 animate-fade-up" style={{ animationDelay: "1000ms" }}>
          <a
            href="#deploy"
            className="font-mono-hud text-xs tracking-widest text-primary-foreground px-6 py-4 flex items-center gap-3 hover:shadow-glow transition-all group"
            style={{ background: "var(--gradient-primary)" }}
          >
            <Shield className="h-4 w-4" />
            INITIALIZE DEPLOYMENT
            <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#systems"
            className="font-mono-hud text-xs tracking-widest text-foreground px-6 py-4 border border-border hover:border-primary hover:bg-primary/5 transition-all"
          >
            VIEW SYSTEMS
          </a>
        </div>
      </div>

      {/* HUD telemetry bottom-right */}
      <div className="absolute bottom-8 right-6 hidden md:block font-mono-hud text-[10px] text-primary/70 text-right space-y-0.5 z-10">
        <div>LAT 40.7128°N</div>
        <div>LON 74.0060°W</div>
        <div className="text-success">STATUS: ACTIVE</div>
      </div>
    </section>
  );
};

export default Hero;
