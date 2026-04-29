import { ChevronRight, Shield } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const Deploy = () => {
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      (e.target as HTMLFormElement).reset();
      toast.success("DEPLOYMENT REQUEST RECEIVED", {
        description: "Operations will contact you within 24 hours.",
      });
    }, 900);
  };

  return (
    <section id="deploy" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 grid-overlay opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="container relative grid lg:grid-cols-2 gap-12 items-start">
        <div>
          <div className="font-mono-hud text-xs text-primary tracking-widest mb-3 flex items-center gap-2">
            <span className="h-1.5 w-1.5 bg-primary animate-pulse-dot rounded-full" />
            READY TO SECURE YOUR PERIMETER?
          </div>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight leading-[0.95]">
            DEPLOY YOUR<br /><span className="text-primary text-glow">SENTRY</span>
          </h2>
          <p className="mt-6 text-muted-foreground max-w-lg leading-relaxed">
            Request a deployment consultation. Our operations team will design a solar surveillance solution
            tailored to your exact site requirements — typically with units on-site within 5 business days.
          </p>

          <div className="mt-10 space-y-4 font-mono-hud text-xs">
            {[
              "FREE SITE SURVEY & COVERAGE PLAN",
              "30-DAY TRIAL DEPLOYMENT AVAILABLE",
              "FULL SERVICE — INSTALL, MONITOR, MAINTAIN",
            ].map((l) => (
              <div key={l} className="flex items-center gap-3 text-muted-foreground">
                <ChevronRight className="h-4 w-4 text-primary" />
                {l}
              </div>
            ))}
          </div>
        </div>

        <form onSubmit={onSubmit} className="relative corner-brackets bg-card border border-border p-8 md:p-10">
          <div className="font-mono-hud text-[10px] text-primary tracking-widest mb-6">[DEPLOYMENT.REQUEST]</div>

          <div className="space-y-5">
            {[
              { id: "name", label: "FULL NAME", type: "text" },
              { id: "company", label: "ORGANISATION", type: "text" },
              { id: "email", label: "EMAIL", type: "email" },
              { id: "site", label: "SITE LOCATION", type: "text" },
            ].map((f) => (
              <div key={f.id}>
                <label htmlFor={f.id} className="font-mono-hud text-[10px] tracking-widest text-muted-foreground block mb-2">
                  {f.label}
                </label>
                <input
                  id={f.id}
                  name={f.id}
                  type={f.type}
                  required
                  className="w-full bg-background border border-border px-3 py-3 text-sm focus:outline-none focus:border-primary focus:shadow-hud transition-all"
                />
              </div>
            ))}
            <div>
              <label htmlFor="units" className="font-mono-hud text-[10px] tracking-widest text-muted-foreground block mb-2">
                ESTIMATED UNITS REQUIRED
              </label>
              <select id="units" name="units" className="w-full bg-background border border-border px-3 py-3 text-sm focus:outline-none focus:border-primary">
                <option>1 — 2 units</option>
                <option>3 — 5 units</option>
                <option>6 — 10 units</option>
                <option>10+ units</option>
              </select>
            </div>
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="mt-8 w-full font-mono-hud text-xs tracking-widest text-primary-foreground px-6 py-4 flex items-center justify-center gap-3 hover:shadow-glow transition-all disabled:opacity-60"
            style={{ background: "var(--gradient-primary)" }}
          >
            <Shield className="h-4 w-4" />
            {submitting ? "TRANSMITTING..." : "INITIALIZE DEPLOYMENT"}
            <ChevronRight className="h-4 w-4" />
          </button>
        </form>
      </div>
    </section>
  );
};

export default Deploy;
