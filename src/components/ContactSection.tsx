import { useRef, useEffect, useState } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

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

export default function ContactSection() {
  const { ref, visible } = useInView(0.1);

  return (
    <section id="contact" className="py-24 bg-section-warm">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div
          ref={ref}
          className={`text-center mb-14 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-primary font-body text-sm font-semibold uppercase tracking-widest">
            Find Us
          </span>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-foreground mt-2">
            Come Visit <span className="italic font-normal text-primary">Rojo</span>
          </h2>
          <p className="font-body text-muted-foreground text-base mt-3 max-w-md mx-auto">
            We'd love to have you. Drop by, call ahead, or send us a message.
          </p>
        </div>

        <div
          className={`grid lg:grid-cols-2 gap-8 transition-all duration-700 delay-150 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Info cards */}
          <div className="flex flex-col gap-4">
            {/* Status */}
            <div className="bg-primary/10 border border-primary/20 rounded-2xl p-5 flex items-center gap-4">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
                <span className="font-body font-semibold text-primary text-sm">Open Now</span>
              </div>
              <span className="text-muted-foreground text-sm font-body">Welcome to Rojo!</span>
            </div>

            {[
              {
                icon: MapPin,
                label: "Location",
                value: "26 Gen. Castañeda St., Poblacion IV B",
                sub: "Imus, Cavite, Philippines 4103",
              },
              {
                icon: Phone,
                label: "Phone",
                value: "0916 561 4913",
                href: "tel:+639165614913",
              },
              {
                icon: Mail,
                label: "Email",
                value: "jessacrisologo10@gmail.com",
                href: "mailto:jessacrisologo10@gmail.com",
              },
              {
                icon: Clock,
                label: "Hours",
                value: "Open Daily",
                sub: "Ask us for specific hours",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-background border border-border rounded-2xl p-5 flex items-start gap-4 shadow-sm"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <item.icon size={18} className="text-primary" />
                </div>
                <div>
                  <p className="font-body text-xs text-muted-foreground font-medium uppercase tracking-widest mb-0.5">
                    {item.label}
                  </p>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="font-body text-sm font-semibold text-foreground hover:text-primary transition-colors"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="font-body text-sm font-semibold text-foreground">{item.value}</p>
                  )}
                  {item.sub && (
                    <p className="font-body text-xs text-muted-foreground mt-0.5">{item.sub}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Map */}
          <div className="rounded-2xl overflow-hidden shadow-xl border border-border h-[400px] lg:h-full min-h-[350px]">
            <iframe
              title="Rojo Cafe Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3867.9!2d120.9372!3d14.4297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTTCsDI1JzQ2LjkiTiAxMjDCsDU2JzEzLjkiRQ!5e0!3m2!1sen!2sph!4v1700000000000!5m2!1sen!2sph&q=26+Gen+Castaneda+St+Imus+Cavite+Philippines"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
