import { MessageSquareText, ShieldCheck, Sparkles } from "lucide-react";

const STEPS = [
  { n: "01", icon: MessageSquareText, title: "Comparte o pega", text: "Envía a AntFish el enlace o mensaje que te genera dudas." },
  { n: "02", icon: Sparkles, title: "Analizamos señales", text: "Contrastamos patrones, reputación y contexto en segundos." },
  { n: "03", icon: ShieldCheck, title: "Decide con claridad", text: "Recibe un nivel de riesgo y una recomendación concreta." },
];

export function Steps() {
  return (
    <section id="como-funciona" className="mx-auto mt-32 w-full max-w-[1200px] px-5 sm:px-8">
      <div className="text-center">
        <p className="eyebrow">Así de simple</p>
        <h2 className="display mx-auto mt-4 max-w-[700px] text-[clamp(2.2rem,4.6vw,3.3rem)] text-white">
          Tres pasos para navegar <span className="text-gold">más seguro.</span>
        </h2>
      </div>

      <ol className="mt-16 grid md:grid-cols-3 md:divide-x md:divide-line">
        {STEPS.map(({ n, icon: Icon, title, text }) => (
          <li key={n} className="relative px-8 py-6">
            <span
              aria-hidden="true"
              className="absolute right-6 top-6 text-6xl font-bold tracking-tight text-white/[0.06]"
            >
              {n}
            </span>
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#2c1d30] text-gold">
              <Icon className="h-5 w-5" strokeWidth={1.5} />
            </span>
            <h3 className="mt-8 text-lg text-white">{title}</h3>
            <p className="mt-2 max-w-[260px] text-sm leading-relaxed text-muted">{text}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
