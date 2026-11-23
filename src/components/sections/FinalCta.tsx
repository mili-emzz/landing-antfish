import { ShieldCheck } from "lucide-react";
import { ApkButton } from "../ApkButton";

export function FinalCta() {
  return (
    <section className="relative mx-auto mt-32 w-full max-w-[1200px] px-5 text-center sm:px-8">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-[#6b3a9a]/20 blur-3xl"
      />
      <span className="relative mx-auto flex h-[90px] w-[90px] items-center justify-center rounded-3xl border border-gold/30 bg-gradient-to-br from-[#3b2a2d] to-[#1f1424]">
        <ShieldCheck className="h-10 w-10 text-gold" strokeWidth={1.3} />
      </span>
      <p className="eyebrow relative mt-8">Tu escudo digital</p>
      <h2 className="display relative mx-auto mt-5 max-w-[900px] text-[clamp(2.3rem,5.4vw,4rem)] text-white">
        La próxima amenaza puede esperar. <span className="text-gold">Tú ya estás preparado.</span>
      </h2>
      <p className="relative mt-6 text-white/60">Descarga AntFish y convierte cada duda en una decisión informada.</p>
      <div className="relative mt-9 flex justify-center">
        <ApkButton variant="cta" />
      </div>
    </section>
  );
}
