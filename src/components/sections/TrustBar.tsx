const ITEMS = ["Google Web Risk", "VirusTotal", "PhishTank", "Motor heurístico propio"];

export function TrustBar() {
  return (
    <section aria-label="Fuentes de inteligencia" className="mx-auto w-full max-w-[1200px] px-5 sm:px-8">
      <div className="border-y border-line py-9 text-center">
        <p className="text-[10px] tracking-[0.3em] text-muted">INTELIGENCIA QUE TRADUCE EL RIESGO</p>
        <ul className="mt-6 flex flex-wrap justify-center gap-x-14 gap-y-3 text-sm text-white/60">
          {ITEMS.map((i) => (
            <li key={i}>{i}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
