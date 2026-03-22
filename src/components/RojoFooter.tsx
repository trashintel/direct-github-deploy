import { MapPin, Phone, Mail } from "lucide-react";

export default function RojoFooter() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-foreground text-background py-14">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <h3 className="font-display text-2xl font-bold text-background leading-none mb-1">
              Rojo
            </h3>
            <p className="font-body text-xs font-medium uppercase tracking-widest text-background/60 mb-4">
              Cafe & Restaurant
            </p>
            <p className="font-body text-sm text-background/70 leading-relaxed">
              Cozy, comforting and nice. Your home away from home in Imus, Cavite.
            </p>
          </div>

          {/* Links */}
          <div>
            <p className="font-body text-xs font-semibold uppercase tracking-widest text-background/50 mb-4">
              Navigate
            </p>
            <div className="flex flex-col gap-2">
              {["#about", "#menu", "#services", "#contact"].map((href) => (
                <button
                  key={href}
                  onClick={() => scrollTo(href)}
                  className="font-body text-sm text-background/70 hover:text-background transition-colors text-left capitalize"
                >
                  {href.replace("#", "")}
                </button>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="font-body text-xs font-semibold uppercase tracking-widest text-background/50 mb-4">
              Contact
            </p>
            <div className="flex flex-col gap-3">
              <a href="tel:+639165614913" className="flex items-center gap-2 font-body text-sm text-background/70 hover:text-background transition-colors">
                <Phone size={13} className="shrink-0" />
                0916 561 4913
              </a>
              <a href="mailto:jessacrisologo10@gmail.com" className="flex items-center gap-2 font-body text-sm text-background/70 hover:text-background transition-colors break-all">
                <Mail size={13} className="shrink-0 mt-0.5" />
                jessacrisologo10@gmail.com
              </a>
              <div className="flex items-start gap-2 font-body text-sm text-background/70">
                <MapPin size={13} className="shrink-0 mt-0.5" />
                <span>26 Gen. Castañeda St., Poblacion IV B, Imus, Cavite 4103</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-background/15 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="font-body text-xs text-background/50">
            © {new Date().getFullYear()} Rojo Cafe & Restaurant. All rights reserved.
          </p>
          <p className="font-body text-xs text-background/40">
            Imus, Cavite, Philippines
          </p>
        </div>
      </div>
    </footer>
  );
}
