import Link from "next/link";
import { ChevronRight, Fingerprint } from "lucide-react";

export function PrivacyBanner() {
  return (
    <section className="mx-auto mt-28 w-full max-w-[1200px] px-5 sm:px-8">
      <div className="glass grid items-center gap-10 rounded-[36px] p-8 sm:p-14 lg:grid-cols-[1.3fr_1fr]">
        <div>
          <p className="eyebrow">Privacidad por diseño</p>
          <h2 className="display mt-4 text-[clamp(2.2rem,4.4vw,3.2rem)] text-white">
            Tu curiosidad no debería costarte tu <span className="text-gold">privacidad.</span>
          </h2>
          <p className="mt-6 max-w-[520px] text-sm leading-relaxed text-white/60">
            Protegemos lo que analizas con conexiones cifradas y un tratamiento mínimo de datos. Tú mantienes el
            control de tu historial.
          </p>
          <Link
            href="/privacidad"
            className="mt-8 inline-flex items-center gap-1 text-sm text-gold transition hover:text-gold-soft focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold"
          >
            Conoce cómo cuidamos tus datos <ChevronRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="relative mx-auto flex h-[260px] w-[260px] items-center justify-center" aria-hidden="true">
          <span className="absolute inset-0 rounded-full border border-white/10" />
          <span className="absolute h-[200px] w-[270px] rotate-[-12deg] rounded-[50%] border border-white/10" />
          <span className="flex h-[150px] w-[130px] items-center justify-center rounded-[48%_48%_52%_52%] border border-white/15 bg-gradient-to-b from-white/10 to-white/[0.02]">
            <Fingerprint className="h-14 w-14 text-gold" strokeWidth={1.2} />
          </span>
        </div>
      </div>
    </section>
  );
}
