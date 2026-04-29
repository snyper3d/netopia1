const Footer = () => (
  <footer className="border-t border-border py-12">
    <div className="container flex flex-col md:flex-row items-center justify-between gap-6">
      <div className="flex items-center gap-2">
        <span className="relative flex h-5 w-5 items-center justify-center border border-primary/60">
          <span className="h-1.5 w-1.5 bg-primary rounded-full animate-pulse-dot" />
        </span>
        <span className="font-mono-hud text-xs tracking-widest">
          SENTRY<span className="text-primary">.GRID</span> — © {new Date().getFullYear()}
        </span>
      </div>
      <div className="font-mono-hud text-[10px] tracking-widest text-muted-foreground text-center md:text-right">
        SOLAR MOBILE CCTV · POWERED BY UNIFI PROTECT · ALL SYSTEMS NOMINAL
      </div>
    </div>
  </footer>
);

export default Footer;
