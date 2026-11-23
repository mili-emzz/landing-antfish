import { Fingerprint, ShieldHalf } from "lucide-react";

function Card({ title, text, children }: { title: string; text: string; children: React.ReactNode }) {
  return (
    <article className="glass flex flex-col rounded-[28px] p-8">
      <div className="flex min-h-[210px] flex-1 items-center">{children}</div>
      <h3 className="mt-8 text-xl tracking-tight text-white">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">{text}</p>
    </article>
  );
}

export function Features() {
  return (
    <section id="nosotros" className="mx-auto mt-20 w-full max-w-[1200px] px-5 sm:px-8">
      <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-line bg-[#3a2c33]/70">
        <ShieldHalf className="h-5 w-5 text-gold" strokeWidth={1.5} />
      </span>
      <p className="eyebrow mt-12">Protección que sí entiendes</p>
      <h2 className="display mt-4 text-[clamp(2.4rem,5vw,3.6rem)] text-white">
        Menos incertidumbre.
        <br />
        <span className="text-gold">Más control.</span>
      </h2>
      <p className="mt-6 max-w-[600px] leading-relaxed text-white/60">
        AntFish reúne inteligencia de amenazas y análisis contextual en una experiencia creada para personas, no para
        expertos.
      </p>

      <div className="mt-14 grid gap-5 md:grid-cols-3">
        <Card
          title="Escanea antes de abrir"
          text="Pega una URL o comparte un mensaje desde cualquier app. Obtén una evaluación antes de interactuar."
        >
          <div className="w-full rounded-2xl border border-line bg-black/20 p-4">
            <div className="rounded-lg border border-coral/20 bg-black/20 px-3 py-3 font-mono text-[11px] text-white/80">
              secure-bbva-access.xyz
            </div>
            <div className="mt-4 flex gap-1.5" aria-hidden="true">
              <span className="h-1 w-6 rounded-full bg-mint" />
              <span className="h-1 w-6 rounded-full bg-[#e6c75a]" />
              <span className="h-1 w-6 rounded-full bg-[#e8935a]" />
              <span className="h-1 w-6 rounded-full bg-coral" />
            </div>
          </div>
        </Card>

        <Card
          title="Riesgo fácil de entender"
          text="Un semáforo claro, hallazgos concretos y recomendaciones que puedes aplicar al momento."
        >
          <p className="text-7xl font-bold tracking-tight text-coral">
            92<span className="text-lg font-normal text-white/40">/100</span>
          </p>
        </Card>

        <Card
          title="Privacidad desde el diseño"
          text="Los mensajes se procesan para analizar el riesgo y no se almacenan en texto plano."
        >
          <div className="flex h-[150px] w-full flex-col items-center justify-center rounded-[50%] border border-line bg-white/[0.03]">
            <Fingerprint className="h-7 w-7 text-gold" strokeWidth={1.4} />
            <span className="mt-2 text-[9px] tracking-wider text-muted">Contenido protegido</span>
          </div>
        </Card>
      </div>
    </section>
  );
}
