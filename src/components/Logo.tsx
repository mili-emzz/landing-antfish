import Image from "next/image";

export function Logo({ size = "md" }: { size?: "sm" | "md" }) {
  const box = size === "md" ? "h-10 w-10 rounded-xl" : "h-9 w-9 rounded-xl";
  const imgSize = size === "md" ? 26 : 22;

  return (
    <span className="inline-flex items-center gap-3">
      <span
        className={`relative flex ${box} items-center justify-center border border-gold/30 bg-gradient-to-br from-[#3b2a2d] to-[#1f1424] p-1.5`}
      >
        <Image
          src="/logo-antfish.png"
          alt="Logo de AntFish"
          width={imgSize}
          height={imgSize}
          className="object-contain"
          priority={size === "md"}
        />
      </span>
      <span className={`font-semibold tracking-tight text-white ${size === "md" ? "text-xl" : "text-sm"}`}>
        AntFish
      </span>
    </span>
  );
}
