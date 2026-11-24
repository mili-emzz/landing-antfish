export const SITE = {
  name: "AntFish",
  tagline: "Tu escudo digital contra enlaces y mensajes fraudulentos.",
  email: "antfish-soporte@gmail.com",
  apkUrl:
    process.env.NEXT_PUBLIC_APK_URL ??
    "https://github.com/mili-emzz/antfish-frontend/releases/download/v1.0.1/app-release.apk",
  legalUpdated: "20 de noviembre de 2026",
};

export const NAV_LINKS = [
  { label: "Inicio", href: "/" },
  { label: "Nosotros", href: "/#nosotros" },
  { label: "Cómo funciona", href: "/#como-funciona" },
  { label: "Contacto", href: "/#contacto" },
];
