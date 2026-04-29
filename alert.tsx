import center from "@/assets/command-center.jpg";

const features = [
  { n: "01", title: "SMART DETECTIONS", desc: "UniFi Protect AI distinguishes people, vehicles, animals, and packages — eliminating false alarms with sub-second classification." },
  { n: "02", title: "LICENCE PLATE RECOGNITION", desc: "Automatic LPR on every entry point. Search historical footage by plate number instantly across all deployed trailers." },
  { n: "03", title: "UNIFI LIVE STREAM", desc: "Low-latency H.265 streams accessible via the UniFi Protect app on iOS, Android, and web — from anywhere." },
  { n: "04", title: "CLOUD & LOCAL NVR", desc: "Continuous recording on the on-trailer NVR with optional UniFi cloud backup. Footage is never lost, even off-grid." },
];

const UniFi = () => (
  <section id="unifi" className="relative py-24 md:py-32 border-t border-border overflow-hidden">
    <div className="absolute inset-0 grid-overlay opacity-30 pointer-events-none" />

    <div className="container relative">
      <div className="max-w-3xl">
        <div className="font-mono-hud text-xs text-primary tracking-widest mb-3 flex items-center gap-2">
          <span className="h-1.5 w-1.5 bg-primary animate-pulse-dot rounded-full" />
          SOFTWARE LAYER
        </div>
        <h2 className="text-4xl md:text-6xl font-black tracking-tight">
          POWERED BY<br /><span className="text-primary">UNIFI PROTECT AI</span>
        </h2>
        <p className="mt-6 text-muted-foreground text-lg max-w-2xl leading-relaxed">
          Every Sentry trailer runs on Ubiquiti's UniFi Protect — enterprise-grade video management with on-device
          neural processing. Intelligent detections, instant search, seamless remote command from any device.
        </p>
        <div className="mt-6 inline-flex items-center gap-3 font-mono-hud text-[10px] text-primary tracking-widest border border-primary/40 px-3 py-2">
          <span className="h-1.5 w-1.5 bg-success rounded-full animate-pulse-dot" />
          UNIFI PROTECT — CERTIFIED INTEGRATION PARTNER
        </div>
      </div>

      <div className="mt-16 relative corner-brackets p-4">
        <img
          src={center}
          alt="Operator monitoring multiple live UniFi Protect feeds from deployed Sentry trailers"
          className="w-full h-auto"
          width={1920}
          height={1080}
          loading="lazy"
        />
        <div className="absolute top-6 left-6 font-mono-hud text-[10px] tracking-widest bg-background/80 px-2 py-1 border border-primary/40 text-primary">
          UNIFI PROTECT · 12 UNITS ACTIVE
        </div>
        <div className="absolute top-6 right-6 font-mono-hud text-[10px] tracking-widest bg-background/80 px-2 py-1 border border-success/40 text-success flex items-center gap-2">
          <span className="h-1.5 w-1.5 bg-success rounded-full animate-pulse-dot" />
          AI ENGINE: ONLINE
        </div>
      </div>

      <div className="mt-16 grid md:grid-cols-2 gap-px bg-border">
        {features.map((f) => (
          <div key={f.n} className="bg-background p-8 hover:bg-card transition-colors">
            <div className="font-mono-hud text-xs text-primary mb-4 tracking-widest">[{f.n}]</div>
            <h3 className="text-xl font-bold tracking-tight mb-3">{f.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>

      <p className="mt-12 text-xs text-muted-foreground/70 max-w-3xl font-mono-hud tracking-wide leading-relaxed">
        UniFi Protect is a product of Ubiquiti Inc. Sentry.Grid is an authorised integration partner. All AI
        detections are processed on-device via UniFi's neural engine — no third-party data sharing.
      </p>
    </div>
  </section>
);

export default UniFi;
