import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Fecha menu ao mudar tamanho (evita menu aberto ao ir desktop)
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Links (anchors na mesma página)
  const navLinks = [
    { label: "Explorar", href: "#ofertas" },
    { label: "Contacto", href: "#contacto" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-brand-green/10 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 transition-opacity hover:opacity-90">
          <span className="relative h-9 w-9 overflow-hidden">
            <Image
                src="/icons/icon-32x32.png"
                alt="DoBrasil"
                fill
                className="object-contain"
                priority
            />
          </span>
          <div className="leading-tight">
            <div className="text-sm font-extrabold text-brand-green">DoBrasil</div>
          </div>

        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-semibold text-brand-green/80 hover:text-brand-green focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-green/30 rounded-lg px-2 py-1"
            >
              {l.label}
            </a>
          ))}

          <a
            href="#anunciar"
            className="inline-flex items-center justify-center rounded-2xl bg-brand-yellow px-4 py-2 text-sm font-extrabold text-brand-green hover:brightness-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-green/30"
          >
            Quero anunciar
          </a>
        </nav>

        {/* Mobile button */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-flex items-center justify-center rounded-xl border border-brand-green/20 bg-white px-3 py-2 text-sm font-semibold text-brand-green hover:bg-brand-greenSoft focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-green/30"
          aria-expanded={open}
          aria-label="Abrir menu"
        >
          {open ? "Fechar" : "Menu"}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-brand-green/10 bg-white">
          <div className="mx-auto max-w-6xl px-4 py-3">
            <nav className="flex flex-col gap-2">
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-3 py-2 text-sm font-semibold text-brand-green/80 hover:bg-brand-greenSoft hover:text-brand-green focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-green/30"
                >
                  {l.label}
                </a>
              ))}

              <a
                href="mailto:kakacordovil@gmail.com?subject=Quero%20anunciar&body=Ol%C3%A1%2C%0A%0AQuero%20mais%20informa%C3%A7%C3%B5es%20sobre%20an%C3%BAncio%2C%20por%20favor.%0A%0AObrigado"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex items-center justify-center rounded-2xl bg-brand-yellow px-4 py-2 text-sm font-extrabold text-brand-green hover:brightness-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-green/30"
              >
                Quero anunciar
              </a>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
