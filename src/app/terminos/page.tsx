import type { Metadata } from "next";
import { LegalDocument } from "@/components/LegalDocument";

export const metadata: Metadata = {
  title: "Términos y condiciones | AntFish",
  description: "Términos y condiciones de uso de AntFish: alcance del servicio, responsabilidades, uso aceptable y jurisdicción.",
};

export default function TerminosPage() {
  return <LegalDocument doc="terminos" />;
}
