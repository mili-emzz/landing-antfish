import Link from "next/link";
import { Logo } from "./Logo";
import { SITE } from "@/lib/constants";

export function Footer() {
  return (
    <footer id="contacto" className="mx-auto mt-24 w-full max-w-[1200px] px-5 sm:px-8">
      <div className="grid gap-10 border-t border-line py-14 sm:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <Logo size="sm" />
          <p className="mt-5 max-w-[240px] text-sm leading-relaxed text-muted">{SITE.tagline}</p>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-white">AntFish</h3>
          <ul className="mt-4 space-y-3 text-sm text-muted">
            <li>
              <Link href="/#nosotros" className="hover:text-white">
                Nosotros
              </Link>
            </li>
            <li>
              <a href={`mailto:${SITE.email}`} className="hover:text-white">
                Contacto
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-white">Legal</h3>
          <ul className="mt-4 space-y-3 text-sm text-muted">
            <li>
              <Link href="/terminos" className="hover:text-white">
                Términos y condiciones
              </Link>
            </li>
            <li>
              <Link href="/privacidad" className="hover:text-white">
                Aviso de privacidad
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
