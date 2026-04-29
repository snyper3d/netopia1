const stats = [
  { value: "1,800+", label: "TRAILERS DEPLOYED" },
  { value: "99.98%", label: "UPTIME SLA" },
  { value: "< 30 MIN", label: "SITE DEPLOYMENT" },
  { value: "24 / 7", label: "MONITORING NOC" },
];

const Stats = () => (
  <section className="border-y border-border bg-card/40">
    <div className="container grid grid-cols-2 md:grid-cols-4 divide-x divide-border">
      {stats.map((s) => (
        <div key={s.label} className="py-10 px-4 text-center">
          <div className="font-black text-3xl md:text-5xl tracking-tight text-foreground">{s.value}</div>
          <div className="mt-2 font-mono-hud text-[10px] md:text-xs text-muted-foreground tracking-widest">{s.label}</div>
        </div>
      ))}
    </div>
  </section>
);

export default Stats;
