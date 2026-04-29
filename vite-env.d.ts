@tailwind base;
@tailwind components;
@tailwind utilities;

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600;700&display=swap');

@layer base {
  :root {
    /* Tactical dark theme */
    --background: 220 25% 4%;
    --foreground: 210 40% 98%;

    --card: 220 22% 7%;
    --card-foreground: 210 40% 98%;

    --popover: 220 22% 7%;
    --popover-foreground: 210 40% 98%;

    --primary: 210 100% 55%;
    --primary-foreground: 220 25% 4%;
    --primary-glow: 200 100% 60%;

    --secondary: 220 18% 12%;
    --secondary-foreground: 210 40% 98%;

    --muted: 220 18% 10%;
    --muted-foreground: 215 20% 60%;

    --accent: 210 100% 55%;
    --accent-foreground: 220 25% 4%;

    --destructive: 0 84% 60%;
    --destructive-foreground: 210 40% 98%;

    --border: 215 25% 14%;
    --input: 215 25% 14%;
    --ring: 210 100% 55%;

    --hud: 210 100% 55%;
    --hud-dim: 210 60% 35%;
    --warn: 32 100% 55%;
    --success: 142 76% 45%;

    --radius: 0.125rem;

    --gradient-hero: radial-gradient(ellipse at center, hsl(220 25% 8% / 0.4) 0%, hsl(220 25% 4% / 0.95) 70%, hsl(220 25% 2%) 100%);
    --gradient-primary: linear-gradient(135deg, hsl(var(--primary)), hsl(var(--primary-glow)));
    --gradient-fade-b: linear-gradient(180deg, transparent 0%, hsl(var(--background)) 100%);

    --shadow-glow: 0 0 40px hsl(var(--primary) / 0.4);
    --shadow-hud: 0 0 0 1px hsl(var(--primary) / 0.3), 0 0 30px hsl(var(--primary) / 0.15);

    --grid-color: hsl(210 100% 55% / 0.06);
  }

  .dark {
    /* same theme — site is always dark */
  }
}

@layer base {
  * {
    @apply border-border;
  }
  html {
    scroll-behavior: smooth;
  }
  body {
    @apply bg-background text-foreground font-sans antialiased;
    font-feature-settings: "ss01", "cv01";
  }
}

@layer components {
  .font-mono-hud {
    font-family: 'JetBrains Mono', ui-monospace, monospace;
    letter-spacing: 0.08em;
  }

  .grid-overlay {
    background-image:
      linear-gradient(to right, var(--grid-color) 1px, transparent 1px),
      linear-gradient(to bottom, var(--grid-color) 1px, transparent 1px);
    background-size: 80px 80px;
  }

  .grid-overlay-sm {
    background-image:
      linear-gradient(to right, var(--grid-color) 1px, transparent 1px),
      linear-gradient(to bottom, var(--grid-color) 1px, transparent 1px);
    background-size: 40px 40px;
  }

  .scanline::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, transparent 0%, hsl(var(--primary) / 0.04) 50%, transparent 100%);
    background-size: 100% 6px;
    pointer-events: none;
    mix-blend-mode: overlay;
  }

  .corner-brackets {
    position: relative;
  }
  .corner-brackets::before,
  .corner-brackets::after {
    content: '';
    position: absolute;
    width: 12px;
    height: 12px;
    border-color: hsl(var(--primary));
    border-style: solid;
    border-width: 0;
  }
  .corner-brackets::before {
    top: 0; left: 0;
    border-top-width: 1px;
    border-left-width: 1px;
  }
  .corner-brackets::after {
    bottom: 0; right: 0;
    border-bottom-width: 1px;
    border-right-width: 1px;
  }

  .text-glow {
    text-shadow: 0 0 24px hsl(var(--primary) / 0.5);
  }
}

@layer utilities {
  .animate-pulse-dot {
    animation: pulse-dot 1.6s ease-in-out infinite;
  }
  @keyframes pulse-dot {
    0%, 100% { opacity: 1; box-shadow: 0 0 0 0 hsl(var(--primary) / 0.7); }
    50% { opacity: 0.6; box-shadow: 0 0 0 8px hsl(var(--primary) / 0); }
  }

  .animate-blink {
    animation: blink 1.4s steps(2) infinite;
  }
  @keyframes blink {
    50% { opacity: 0.2; }
  }

  .animate-fade-up {
    animation: fade-up 0.8s ease-out both;
  }
  @keyframes fade-up {
    from { opacity: 0; transform: translateY(16px); }
    to { opacity: 1; transform: translateY(0); }
  }

  .animate-scan {
    animation: scan 4s linear infinite;
  }
  @keyframes scan {
    0% { transform: translateY(-100%); }
    100% { transform: translateY(100%); }
  }
}
