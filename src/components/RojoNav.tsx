import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const links = [
  { label: "About", href: "#about" },
  { label: "Menu", href: "#menu" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export default function RojoNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const scrollTo = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md shadow-[0_2px_24px_hsl(var(--foreground)/0.08)] py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex flex-col items-start leading-none cursor-pointer"
        >
          <span
            className={`font-display text-2xl font-bold tracking-tight transition-colors duration-300 ${
              scrolled ? "text-primary" : "text-white"
            }`}
          >
            Rojo
          </span>
          <span
            className={`font-body text-[10px] font-medium uppercase tracking-[0.18em] transition-colors duration-300 ${
              scrolled ? "text-muted-foreground" : "text-white/70"
            }`}
          >
            Cafe & Restaurant
          </span>
        </button>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <button
              key={l.href}
              onClick={() => scrollTo(l.href)}
              className={`font-body text-sm font-medium transition-colors duration-200 hover:text-primary ${
                scrolled ? "text-foreground/80" : "text-white/90"
              }`}
            >
              {l.label}
            </button>
          ))}
          <Button
            onClick={() => scrollTo("#contact")}
            className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-5 h-9 text-sm font-medium shadow-md"
          >
            Reserve a Table
          </Button>
        </nav>

        {/* Mobile hamburger */}
        <button
          className={`md:hidden p-1 transition-colors ${scrolled ? "text-foreground" : "text-white"}`}
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-background/97 backdrop-blur-md border-b border-border transition-all duration-300 ${
          open ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <button
              key={l.href}
              onClick={() => scrollTo(l.href)}
              className="text-left font-body text-base font-medium text-foreground/80 hover:text-primary transition-colors py-1"
            >
              {l.label}
            </button>
          ))}
          <Button
            onClick={() => scrollTo("#contact")}
            className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full w-fit px-6 h-10"
          >
            Reserve a Table
          </Button>
        </div>
      </div>
    </header>
  );
}
