import Image from "next/image";
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  const instagramUrl =
    process.env.NEXT_PUBLIC_INSTAGRAM_URL || "https://instagram.com/ondecomerebeberporto/";
  const contactEmail =
    process.env.NEXT_PUBLIC_CONTACT_EMAIL || "kakacordovil@outlook.pt";

  return (
    <footer id="contacto" className="mt-16 bg-white border-t border-brand-green/10">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand */}
          <div>
            
                {/* Logo + nome */}
                <Link
                href="/"
                className="flex items-center gap-3 hover:opacity-90 transition-opacity"
                >
                <Image
                    src="/icons/icon-150x150.png"
                    alt="DoBrasil"
                    width={40}
                    height={40}
                    className="rounded-lg"
                />
                
                <span className="text-lg font-extrabold text-brand-green">
                   DoBrasil
                </span>
                </Link>
            
            <p className="mt-2 text-sm text-brand-green/80">
              Curadoria de experiências, gastronomia, eventos e produtos do Brasil em Portugal.
            </p>
            <p className="mt-3 text-sm font-semibold text-brand-green">
              Local: <span className="font-normal text-brand-green/80">Porto, Portugal</span>
            </p>
          </div>

          {/* Links */}
          <div>
            <div className="text-sm font-extrabold text-brand-green">Links</div>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <a className="text-brand-green/80 hover:text-brand-green" href="#explorar">
                  Explorar
                </a>
              </li>
              <li>
                <a className="text-brand-green/80 hover:text-brand-green" href="#cidades">
                  Cidades
                </a>
              </li>
              <li>
                <a className="text-brand-green/80 hover:text-brand-green" href="#categorias">
                  Categorias
                </a>
              </li>
              <li>
                <a className="text-brand-green/80 hover:text-brand-green" href="#anunciar">
                  Quero anunciar
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="text-sm font-extrabold text-brand-green">Contacto</div>

            <div className="mt-3 space-y-3 text-sm text-brand-green/80">
              <p>
                Email:{" "}
                <a
                  className="font-semibold text-brand-green hover:underline"
                  href={`mailto:${contactEmail}`}
                >
                  {contactEmail}
                </a>
              </p>

              <p>
                <a
                    href={instagramUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-brand-green hover:opacity-80"
                    aria-label="Instagram DoBrasil"
                    >
                    <FontAwesomeIcon
                        icon={faInstagram}
                        className="h-5 w-5"
                    />
                </a>
              </p>
              


              <a
                href="mailto:kakacordovil@gmail.com?subject=Quero%20anunciar&body=Ol%C3%A1%2C%0A%0AQuero%20mais%20informa%C3%A7%C3%B5es%20sobre%20an%C3%BAncio%2C%20por%20favor.%0A%0AObrigado"
                className="inline-flex items-center justify-center rounded-2xl bg-brand-yellow px-4 py-2 font-extrabold text-brand-green hover:brightness-95"
              >
                Quero anunciar
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-brand-green/10 pt-6 text-xs text-brand-green/70 md:flex-row md:items-center md:justify-between">
          <span>© {new Date().getFullYear()} DoBrasil — Portugal</span>
          <span>Feito com 💚💛</span>
        </div>
      </div>
    </footer>
  );
}
