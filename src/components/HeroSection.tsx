import { useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/rojo-interior.png";

export default function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);

  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Rojo Cafe cozy interior with warm lighting"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-black/25" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-24">
        <div className="max-w-2xl">
          {/* Badge */}
          <span
            className="inline-flex items-center gap-2 border border-white/30 rounded-full px-4 py-1.5 text-white/80 text-xs font-medium uppercase tracking-widest mb-6 animate-fade-in"
            style={{ animationDelay: "0.1s" }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            Open Now · Imus, Cavite
          </span>

          <h1
            className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.0] mb-6 animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            Rojo
            <span className="block italic font-normal text-[hsl(38,65%,72%)]">Cafe & Restaurant</span>
          </h1>

          <p
            className="font-body text-white/80 text-lg leading-relaxed mb-8 max-w-lg animate-fade-up"
            style={{ animationDelay: "0.35s" }}
          >
            Cozy, comforting and nice. Your go-to spot in Imus for delicious meals, free Wi-Fi,
            air-conditioned dining, alfresco seating — and your furry friends are welcome too.
          </p>

          {/* Badges row */}
          <div
            className="flex flex-wrap gap-2 mb-10 animate-fade-up"
            style={{ animationDelay: "0.45s" }}
          >
            {["🛜 Free Wi-Fi", "🥶 Air Conditioned", "🌳 Alfresco Dining", "🐶 Pet Friendly"].map((f) => (
              <span
                key={f}
                className="bg-white/15 backdrop-blur-sm border border-white/20 text-white text-xs font-medium px-3 py-1.5 rounded-full"
              >
                {f}
              </span>
            ))}
          </div>

          <div
            className="flex flex-wrap gap-4 animate-fade-up"
            style={{ animationDelay: "0.55s" }}
          >
            <Button
              onClick={() => scrollTo("#menu")}
              className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-7 h-12 text-sm font-semibold shadow-lg shadow-primary/30 transition-all duration-200 active:scale-95"
            >
              Explore Our Menu
            </Button>
            <Button
              onClick={() => scrollTo("#contact")}
              variant="outline"
              className="border-white/50 bg-white/10 text-white hover:bg-white/20 hover:border-white/70 rounded-full px-7 h-12 text-sm font-semibold backdrop-blur-sm"
            >
              Reserve a Table
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <button
        onClick={() => scrollTo("#about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-white/90 transition-colors animate-bounce z-10"
        aria-label="Scroll down"
      >
        <ChevronDown size={28} />
      </button>
    </section>
  );
}
