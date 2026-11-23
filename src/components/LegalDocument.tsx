import fs from "node:fs";
import path from "node:path";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { SITE } from "@/lib/constants";

type Doc = "privacidad" | "terminos";

const TITLES: Record<Doc, string> = {
  privacidad: "Aviso de privacidad",
  terminos: "Términos y condiciones de uso",
};

function plain(s: string) {
  return s.replace(/\*\*/g, "").replace(/\\/g, "").trim();
}

function slug(s: string) {
  return plain(s)
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function textOf(node: React.ReactNode): string {
  if (typeof node === "string") return node;
  if (Array.isArray(node)) return node.map(textOf).join("");
  if (node && typeof node === "object" && "props" in node) {
    return textOf((node as { props: { children?: React.ReactNode } }).props.children);
  }
  return "";
}

export function LegalDocument({ doc }: { doc: Doc }) {
  const file = path.join(process.cwd(), "src", "content", `${doc}.md`);
  const raw = fs.readFileSync(file, "utf8");
  // quitamos el H1 ("PARTE I/II"): lo mostramos como título de página
  const body = raw.replace(/^# .*\n/, "");
  const toc = [...body.matchAll(/^## (.*)$/gm)].map((m) => ({ label: plain(m[1]), id: slug(m[1]) }));

  return (
    <>
      <Navbar active="" />
      <main className="mx-auto w-full max-w-[1200px] px-5 pb-10 pt-14 sm:px-8">
        <p className="eyebrow">Legal</p>
        <h1 className="display mt-4 text-[clamp(2.2rem,5vw,3.6rem)] text-white">{TITLES[doc]}</h1>

        <div className="mt-6 flex flex-wrap gap-x-8 gap-y-1 text-sm text-muted">
          <span>
            <strong className="font-semibold text-white/80">Última actualización:</strong> {SITE.legalUpdated}
          </span>
          <span>
            <strong className="font-semibold text-white/80">Responsable:</strong> Equipo AntFish
          </span>
          <span>
            <strong className="font-semibold text-white/80">Contacto:</strong>{" "}
            <a href={`mailto:${SITE.email}`} className="text-gold hover:text-gold-soft">
              {SITE.email}
            </a>
          </span>
        </div>

        <p className="glass mt-8 rounded-2xl p-5 text-sm leading-relaxed text-white/75">
          <strong className="font-semibold text-white">Nota sobre la naturaleza del proyecto.</strong> AntFish es un
          proyecto escolar de carácter académico y gratuito. No constituye un servicio comercial ni una institución
          financiera o de seguridad certificada.
        </p>

        <nav aria-label="Documentos legales" className="mt-8 inline-flex rounded-xl border border-line bg-white/[0.03] p-1 text-sm">
          {(["privacidad", "terminos"] as Doc[]).map((d) => (
            <Link
              key={d}
              href={`/${d}`}
              aria-current={d === doc ? "page" : undefined}
              className={`rounded-lg px-4 py-2 transition ${
                d === doc ? "bg-white/10 font-semibold text-white" : "text-muted hover:text-white"
              }`}
            >
              {d === "privacidad" ? "Aviso de privacidad" : "Términos y condiciones"}
            </Link>
          ))}
        </nav>

        <div className="mt-12 grid gap-12 lg:grid-cols-[260px_1fr]">
          <aside className="lg:sticky lg:top-8 lg:self-start">
            <p className="text-xs font-semibold tracking-[0.18em] text-muted">EN ESTA PÁGINA</p>
            <ul className="mt-4 space-y-2.5 text-sm">
              {toc.map((t) => (
                <li key={t.id}>
                  <a href={`#${t.id}`} className="text-white/60 transition hover:text-gold">
                    {t.label}
                  </a>
                </li>
              ))}
            </ul>
          </aside>

          <article className="min-w-0 max-w-[780px]">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                h2: ({ children }) => (
                  <h2 id={slug(textOf(children))} className="mt-14 text-2xl tracking-tight text-white first:mt-0">
                    {children}
                  </h2>
                ),
                h3: ({ children }) => <h3 className="mt-8 text-lg font-semibold text-gold-soft">{children}</h3>,
                p: ({ children }) => <p className="mt-4 leading-relaxed text-white/70">{children}</p>,
                strong: ({ children }) => <strong className="font-semibold text-white">{children}</strong>,
                ul: ({ children }) => <ul className="mt-4 list-disc space-y-2 pl-6 text-white/70 marker:text-gold/60">{children}</ul>,
                ol: ({ children }) => <ol className="mt-4 list-decimal space-y-2 pl-6 text-white/70 marker:text-gold/70">{children}</ol>,
                li: ({ children }) => <li className="leading-relaxed">{children}</li>,
                a: ({ href, children }) => (
                  <a href={href} className="text-gold underline-offset-4 hover:underline">
                    {children}
                  </a>
                ),
                blockquote: ({ children }) => (
                  <blockquote className="glass mt-6 rounded-2xl border-l-2 border-l-gold/60 px-5 py-1 text-sm">
                    {children}
                  </blockquote>
                ),
                code: ({ children }) => (
                  <code className="rounded bg-white/10 px-1.5 py-0.5 font-mono text-[0.85em] text-gold-soft">{children}</code>
                ),
                hr: () => <hr className="my-10 border-line" />,
                table: ({ children }) => (
                  <div className="mt-6 overflow-x-auto rounded-2xl border border-line">
                    <table className="w-full min-w-[520px] border-collapse text-left text-sm">{children}</table>
                  </div>
                ),
                thead: ({ children }) => <thead className="bg-white/[0.05] text-white">{children}</thead>,
                th: ({ children }) => <th className="px-4 py-3 font-semibold">{children}</th>,
                td: ({ children }) => <td className="border-t border-line px-4 py-3 align-top text-white/70">{children}</td>,
              }}
            >
              {body}
            </ReactMarkdown>
          </article>
        </div>
      </main>
      <Footer />
    </>
  );
}
