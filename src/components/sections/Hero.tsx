import { AlertTriangle, Check, Lock } from "lucide-react";
import { ApkButton } from "../ApkButton";
import { PhoneMockup } from "../PhoneMockup";

export function Hero() {
  return (
    <section className="mx-auto grid w-full max-w-[1200px] items-center gap-10 px-5 pb-20 pt-12 sm:px-8 lg:grid-cols-[1fr_1fr] lg:pt-16">
      <div>
        <h1 className="display text-[clamp(2.9rem,7vw,5.2rem)] text-white">
          Detén el fraude antes del <span className="text-gold">primer clic.</span>
        </h1>
        <p className="mt-8 max-w-[520px] text-lg leading-relaxed text-white/70">
          Analiza enlaces y mensajes sospechosos en segundos. AntFish convierte señales complejas en respuestas claras
          para que decidas con confianza.
        </p>

        <div className="mt-9">
          <ApkButton variant="hero" />
        </div>

        <div className="mt-5 flex max-w-[560px] items-start gap-3 rounded-xl border border-line bg-white/[0.03] px-4 py-3.5 text-xs leading-relaxed text-muted">
          <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-gold" strokeWidth={1.6} />
          <p>
            <strong className="font-semibold text-white">Descarga fuera de tiendas</strong>{" "}
            Android se distribuye como archivo APK. La versión para iOS estará disponible próximamente.
          </p>
        </div>

        <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-xs text-muted">
          <li className="flex items-center gap-2">
            <Lock className="h-3.5 w-3.5" /> Privado por diseño
          </li>
          <li className="flex items-center gap-2">
            <Check className="h-3.5 w-3.5" /> Una cuenta, todos tus análisis
          </li>
        </ul>
      </div>

      <PhoneMockup />
    </section>
  );
}
