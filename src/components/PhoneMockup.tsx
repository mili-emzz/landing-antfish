"use client";

import { useState } from "react";
import { Link2, MessageSquare, ScanLine, ShieldCheck, Sparkles } from "lucide-react";
import { Logo } from "./Logo";

export function PhoneMockup() {
  const [tab, setTab] = useState<"url" | "sms">("url");

  return (
    <div className="relative mx-auto h-[620px] w-full max-w-[520px]" aria-hidden={false}>
      {/* órbitas */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[400px] -translate-x-1/2 -translate-y-1/2 -rotate-12 rounded-[50%] border border-white/10" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[430px] w-[560px] -translate-x-1/2 -translate-y-1/2 rotate-[24deg] rounded-[50%] border border-white/[0.07]" />
      <span className="absolute left-[16%] top-[56%] h-2 w-2 rounded-full bg-gold" />

      {/* teléfono */}
      <div className="absolute left-1/2 top-4 h-[590px] w-[290px] -translate-x-1/2 rotate-[3deg] rounded-[44px] border-[3px] border-[#4a3563] bg-gradient-to-b from-[#3a1f55] to-[#1b0f27] p-5 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.7)]">
        <div className="mx-auto h-5 w-24 rounded-full bg-black/80" />

        <div className="mt-5 flex items-center justify-between">
          <Logo size="sm" />
          <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/15 text-[9px] text-white/80">
            AM
          </span>
        </div>

        <p className="mt-6 text-[10px] text-muted">Buenas tardes, Alex</p>
        <p className="mt-1 text-[22px] leading-[1.05] tracking-tight text-white">
          Tu espacio está
          <br />
          <span className="text-gold">protegido.</span>
        </p>

        <div className="mt-5 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
          <p className="flex items-center gap-1.5 text-[8px] font-bold tracking-[0.18em] text-gold">
            <span className="h-1 w-1 rounded-full bg-mint" /> ESCÁNER INTELIGENTE
          </p>
          <p className="mt-3 text-[13px] font-semibold text-white">¿Qué quieres analizar?</p>

          <div role="tablist" aria-label="Tipo de análisis" className="mt-3 grid grid-cols-2 rounded-lg bg-black/30 p-1 text-[9px]">
            {(
              [
                ["url", "Enlace URL"],
                ["sms", "Mensaje SMS"],
              ] as const
            ).map(([id, label]) => (
              <button
                key={id}
                type="button"
                role="tab"
                aria-selected={tab === id}
                onClick={() => setTab(id)}
                className={`rounded-md py-1.5 transition ${
                  tab === id ? "bg-white/10 font-semibold text-white" : "text-muted"
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          <div className="mt-3 flex items-center gap-2 rounded-lg border border-white/10 bg-black/25 px-3 py-2.5 text-[9px] text-muted">
            {tab === "url" ? <Link2 className="h-3.5 w-3.5" /> : <MessageSquare className="h-3.5 w-3.5" />}
            {tab === "url" ? "Pega un enlace sospechoso..." : "Pega el mensaje sospechoso..."}
          </div>

          <div className="mt-3 flex items-center justify-center gap-2 rounded-lg bg-gradient-to-b from-[#e3cd96] to-[#b99a55] py-2.5 text-[10px] font-semibold text-[#2a1b0a]">
            <ScanLine className="h-3.5 w-3.5" /> Analizar ahora
          </div>
        </div>

        <div className="mt-4 flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-3.5">
          <div
            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-[11px] font-bold text-white"
            style={{ background: "conic-gradient(#4ade9c 0 94%, rgba(255,255,255,0.1) 94% 100%)" }}
          >
            <span className="flex h-[42px] w-[42px] items-center justify-center rounded-full bg-[#22142f]">94%</span>
          </div>
          <div>
            <p className="text-[11px] font-semibold text-white">Todo bajo control</p>
            <p className="mt-0.5 text-[8px] leading-snug text-muted">No detectamos actividad riesgosa.</p>
          </div>
        </div>
      </div>

      {/* tarjetas flotantes */}
      <div className="glass absolute -right-2 top-14 z-10 hidden items-center gap-2.5 rounded-xl px-3.5 py-2.5 sm:flex lg:-right-6">
        <ShieldCheck className="h-5 w-5 text-gold" strokeWidth={1.5} />
        <div className="leading-tight">
          <p className="text-[10px] font-bold text-white">Protección activa</p>
          <p className="text-[8px] text-muted">Monitoreo inteligente</p>
        </div>
      </div>

      <div className="glass absolute bottom-20 -left-2 z-10 hidden items-center gap-2.5 rounded-xl px-3.5 py-2.5 sm:flex lg:-left-8">
        <Sparkles className="h-5 w-5 text-gold" strokeWidth={1.5} />
        <div className="leading-tight">
          <p className="text-[10px] font-bold text-white">Análisis en segundos</p>
          <p className="text-[8px] text-muted">Respuesta clara</p>
        </div>
      </div>
    </div>
  );
}
