import { SITE } from "@/lib/constants";

function PlayIcon() {
  return (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5 3.5v17l6.2-8.5L5 3.5Z" fill="#d6bc82" />
      <path d="M11.2 12 18.5 8l-4.1-2.4L5 3.5 11.2 12Z" fill="#e6d3a3" opacity=".85" />
      <path d="M11.2 12 18.5 16l-4.1 2.4L5 20.5 11.2 12Z" fill="#b99a55" opacity=".9" />
    </svg>
  );
}

export function ApkButton({ variant = "hero" }: { variant?: "hero" | "cta" }) {
  const top = variant === "hero" ? "Descarga APK directa" : "Descargar para";
  const main = variant === "hero" ? "Android" : "Android Apk";
  return (
    <a
      href={SITE.apkUrl}
      download
      className="glass inline-flex items-center gap-4 rounded-2xl px-6 py-3.5 transition hover:border-gold/40 hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold"
    >
      <PlayIcon />
      <span className="flex flex-col text-left leading-tight">
        <span className="text-[10px] tracking-wider text-muted">{top}</span>
        <span className="text-lg font-semibold text-white">{main}</span>
      </span>
    </a>
  );
}
