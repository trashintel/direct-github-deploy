import { useRef, useEffect, useState } from "react";
import alfrescoImg from "@/assets/rojo-alfresco.png";

function useInView(threshold = 0.2) {
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

export default function AboutSection() {
  const { ref, visible } = useInView(0.2);

  return (
    <section id="about" className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div
          ref={ref}
          className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={alfrescoImg}
                alt="Rojo Cafe outdoor alfresco dining area with string lights and plants"
                className="w-full h-[400px] lg:h-[500px] object-cover"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-5 -right-3 sm:-right-6 bg-primary text-primary-foreground px-5 py-4 rounded-xl shadow-lg hidden sm:block">
              <p className="font-display text-2xl font-bold leading-none">Since</p>
              <p className="font-body text-xs font-semibold tracking-widest uppercase mt-1 opacity-80">
                Imus, Cavite
              </p>
            </div>
          </div>

          {/* Text */}
          <div className="flex flex-col gap-6">
            <div>
              <span className="text-primary font-body text-sm font-semibold uppercase tracking-widest">
                Our Story
              </span>
              <h2 className="font-display text-4xl lg:text-5xl font-bold text-foreground mt-2 leading-[1.1]">
                Your Cozy Corner<br />
                <span className="italic font-normal text-primary">in Imus</span>
              </h2>
            </div>

            <p className="font-body text-muted-foreground text-base leading-relaxed">
              Rojo Cafe & Restaurant is your go-to spot in Imus, Cavite for delicious meals and a
              welcoming atmosphere. Whether you're looking for a quiet place to work with free Wi-Fi,
              a refreshing air-conditioned space to unwind, or a breezy alfresco area to enjoy with
              friends and pets — we have it all.
            </p>
            <p className="font-body text-muted-foreground text-base leading-relaxed">
              From our carefully crafted dishes to our warm, friendly service, every visit to Rojo
              is designed to make you feel right at home. Come for the food, stay for the vibes.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-2">
              {[
                { value: "Dine-In", label: "& Takeout" },
                { value: "Online", label: "Reservations" },
                { value: "Pet", label: "Friendly" },
              ].map((s) => (
                <div key={s.label} className="text-center p-4 bg-section-warm rounded-xl border border-border">
                  <p className="font-display text-xl font-bold text-primary leading-none">{s.value}</p>
                  <p className="font-body text-xs text-muted-foreground mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
