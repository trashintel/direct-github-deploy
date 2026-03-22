import { useRef, useEffect, useState } from "react";
import { Wifi, Snowflake, TreePine, Dog, UtensilsCrossed, ShoppingBag, Armchair, Truck, CalendarCheck, Globe } from "lucide-react";

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

const amenities = [
  { icon: Wifi, title: "Free Wi-Fi", desc: "Stay connected while you enjoy your meal or get some work done." },
  { icon: Snowflake, title: "Air Conditioned", desc: "Cool and comfortable indoor dining, perfect for the tropical heat." },
  { icon: TreePine, title: "Alfresco Dining", desc: "Enjoy the fresh air and natural ambiance in our outdoor seating area." },
  { icon: Dog, title: "Pet Friendly", desc: "Bring your furry friends along — they're welcome at Rojo too." },
];

const services = [
  { icon: UtensilsCrossed, label: "Dine-In" },
  { icon: ShoppingBag, label: "In-Store Pickup" },
  { icon: Armchair, label: "Outdoor Seating" },
  { icon: Truck, label: "Takeout" },
  { icon: CalendarCheck, label: "Reservations" },
  { icon: Globe, label: "Online Booking" },
];

export default function ServicesSection() {
  const { ref, visible } = useInView(0.15);

  return (
    <section id="services" className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div
          ref={ref}
          className={`text-center mb-14 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-primary font-body text-sm font-semibold uppercase tracking-widest">
            What We Offer
          </span>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-foreground mt-2">
            Multiple ways to <span className="italic font-normal text-primary">enjoy Rojo</span>
          </h2>
        </div>

        {/* Amenities */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          {amenities.map((a, i) => (
            <div
              key={a.title}
              className={`p-6 rounded-2xl bg-section-warm border border-border hover:shadow-[0_6px_32px_hsl(var(--foreground)/0.08)] hover:-translate-y-1 transition-all duration-300 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${0.1 + i * 0.1}s` }}
            >
              <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <a.icon size={20} className="text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-1.5">{a.title}</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">{a.desc}</p>
            </div>
          ))}
        </div>

        {/* Service chips */}
        <div
          className={`bg-section-warm rounded-2xl border border-border p-8 transition-all duration-700 delay-300 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="font-body text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-5 text-center">
            Available Services
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {services.map((s) => (
              <div
                key={s.label}
                className="flex items-center gap-2 bg-background border border-border rounded-full px-4 py-2 shadow-sm"
              >
                <s.icon size={14} className="text-primary" />
                <span className="font-body text-sm font-medium text-foreground">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
