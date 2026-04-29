import unit from "@/assets/trailer-unit.jpg";

const specs = [
  { k: "RESOLUTION", v: "4K UHD" },
  { k: "MAST HEIGHT", v: "7.5M" },
  { k: "SOLAR ARRAY", v: "600W" },
  { k: "BATTERY", v: "5 kWh" },
  { k: "AUTONOMY", v: "14 DAYS" },
  { k: "TEMP RANGE", v: "-30 / +55°C" },
];

const Unit = () => (
  <section className="relative py-24 md:py-32 border-t border-border bg-card/30">
    <div className="container grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
      <div className="relative corner-brackets p-4">
        <img
          src={unit}
          alt="Sentry SX-1 mobile CCTV solar trailer with raised camera mast"
          className="w-full h-auto"
          width={1920}
          height={1280}
          loading="lazy"
        />
        <div className="absolute top-6 left-6 font-mono-hud text-[10px] text-primary tracking-widest bg-background/80 px-2 py-1 border border-primary/40">
          UNIT.SX-1 · LIVE
        </div>
      </div>

      <div>
        <div className="font-mono-hud text-xs text-primary tracking-widest mb-3">// FLAGSHIP UNIT</div>
        <h2 className="text-4xl md:text-6xl font-black tracking-tight">
          SENTRY <span className="text-primary">SX-1</span>
        </h2>
        <p className="mt-6 text-muted-foreground max-w-xl leading-relaxed">
          Our flagship solar surveillance trailer. Designed for extended autonomous deployment across construction
          sites, mining operations, ports, utilities, and event security. Tow, level, raise — fully operational and
          streaming to UniFi Protect in under thirty minutes.
        </p>

        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 gap-px bg-border border border-border">
          {specs.map((s) => (
            <div key={s.k} className="bg-background p-5">
              <div className="font-mono-hud text-[10px] text-muted-foreground tracking-widest">{s.k}</div>
              <div className="mt-2 font-bold text-lg tracking-tight">{s.v}</div>
            </div>
          ))}
        </div>

        <a
          href="#deploy"
          className="inline-flex mt-10 font-mono-hud text-xs tracking-widest border border-primary text-primary px-6 py-4 hover:bg-primary hover:text-primary-foreground transition-all"
        >
          REQUEST FULL SPECIFICATIONS →
        </a>
      </div>
    </div>
  </section>
);

export default Unit;
