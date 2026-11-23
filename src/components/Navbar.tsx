"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { NAV_LINKS } from "@/lib/constants";

export function Navbar({ active = "Inicio" }: { active?: string }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="mx-auto w-full max-w-[1200px] px-5 sm:px-8">
      <div className="flex h-24 items-center justify-between border-b border-line">
        <Link href="/" aria-label="AntFish, ir al inicio">
          <Logo />
        </Link>

        <nav aria-label="Principal" className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              className={`text-sm transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold ${
                l.label === active ? "font-semibold text-white" : "text-muted"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className="rounded-lg p-2 text-white md:hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold"
          aria-expanded={open}
          aria-controls="menu-movil"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <nav id="menu-movil" aria-label="Móvil" className="glass mt-3 flex flex-col rounded-2xl p-3 md:hidden">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="rounded-xl px-4 py-3 text-sm text-white/90 hover:bg-white/5"
            >
              {l.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
