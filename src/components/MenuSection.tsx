import { useRef, useEffect, useState } from "react";
import brunchImg from "@/assets/rojo-brunch.png";
import coffeeImg from "@/assets/rojo-coffee.png";
import pastaImg from "@/assets/rojo-pasta.png";

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

const categories = [
  {
    image: brunchImg,
    name: "Brunch Specials",
    description: "Start your morning right with our freshly prepared brunch favorites.",
    alt: "Beautifully plated brunch dish with poached eggs and avocado toast",
  },
  {
    image: coffeeImg,
    name: "Coffee & Pastries",
    description: "Handcrafted coffee and baked-fresh-daily pastries to brighten your day.",
    alt: "Latte with beautiful latte art and fresh croissant pastry",
  },
  {
    image: pastaImg,
    name: "Pasta & Mains",
    description: "Hearty, flavorful dishes made from the finest ingredients.",
    alt: "Delicious pasta with rich tomato sauce, basil and parmesan",
  },
];

export default function MenuSection() {
  const { ref, visible } = useInView(0.15);

  return (
    <section id="menu" className="py-24 bg-section-warm">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div
          ref={ref}
          className={`text-center mb-14 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-primary font-body text-sm font-semibold uppercase tracking-widest">
            What We Serve
          </span>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-foreground mt-2">
            Menu <span className="italic font-normal text-primary">Highlights</span>
          </h2>
          <p className="font-body text-muted-foreground text-base mt-3 max-w-xl mx-auto">
            Carefully crafted dishes and drinks made with quality ingredients and a whole lot of love.
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {categories.map((cat, i) => (
            <div
              key={cat.name}
              className={`group bg-card rounded-2xl overflow-hidden shadow-[0_4px_24px_hsl(var(--foreground)/0.07)] hover:shadow-[0_8px_40px_hsl(var(--foreground)/0.13)] transition-all duration-500 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${0.1 + i * 0.12}s` }}
            >
              <div className="relative overflow-hidden aspect-square">
                <img
                  src={cat.image}
                  alt={cat.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">{cat.name}</h3>
                <p className="font-body text-muted-foreground text-sm leading-relaxed">{cat.description}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center mt-10 text-sm text-muted-foreground font-body">
          Ask our staff for today's specials & seasonal offerings.
        </p>
      </div>
    </section>
  );
}
