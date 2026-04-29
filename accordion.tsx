import { Shield } from "lucide-react";

const Nav = () => {
  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur-md">
      <div className="container flex h-14 items-center justify-between">
        <a href="#top" className="flex items-center gap-2 group">
          <span className="relative flex h-6 w-6 items-center justify-center border border-primary/60">
            <span className="h-2 w-2 bg-primary animate-pulse-dot rounded-full" />
          </span>
          <span className="font-mono-hud text-sm font-semibold tracking-widest">
            SENTRY<span className="text-primary">.GRID</span>
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-8 font-mono-hud text-xs tracking-widest text-muted-foreground">
          <a href="#systems" className="hover:text-foreground transition-colors">SYSTEMS</a>
          <a href="#unifi" className="hover:text-foreground transition-colors">UNIFI PROTECT</a>
          <a href="#deploy" className="hover:text-foreground transition-colors">DEPLOY</a>
        </nav>
        <a
          href="#deploy"
          className="font-mono-hud text-xs tracking-widest bg-primary text-primary-foreground px-4 py-2.5 hover:bg-primary-glow hover:shadow-glow transition-all flex items-center gap-2"
          style={{ background: "var(--gradient-primary)" }}
        >
          <Shield className="h-3.5 w-3.5" />
          REQUEST DEPLOYMENT
        </a>
      </div>
    </header>
  );
};

export default Nav;
