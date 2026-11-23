import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { Features } from "@/components/sections/Features";
import { Steps } from "@/components/sections/Steps";
import { PrivacyBanner } from "@/components/sections/PrivacyBanner";
import { FinalCta } from "@/components/sections/FinalCta";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <Features />
        <Steps />
        <PrivacyBanner />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
