import type { Metadata } from "next";
import { LegalDocument } from "@/components/LegalDocument";

export const metadata: Metadata = {
  title: "Aviso de privacidad | AntFish",
  description: "Cómo AntFish trata tus datos personales: qué recabamos, para qué, con quién y cómo ejercer tus derechos ARCO.",
};

export default function PrivacidadPage() {
  return <LegalDocument doc="privacidad" />;
}
