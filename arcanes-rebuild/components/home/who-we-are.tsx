// components/home/who-we-are.tsx
import { whoWeAre } from "@/data/site-content";

export default function WhoWeAre() {
  return (
    <section id="who-we-are" className="py-20 md:py-28">
      <div className="mx-auto w-full max-w-7xl px-5">
        <div className="mx-auto max-w-4xl">
          <p className="mb-3 text-[12px] font-bold tracking-[0.24em] text-[#7A00FF]">
            {whoWeAre.eyebrow}
          </p>
          <h2 className="text-[clamp(32px,5vw,58px)] leading-[1.02] tracking-[-0.045em] text-slate-950">
            {whoWeAre.title}
          </h2>
          <p className="mt-6 text-[17px] leading-8 text-slate-500">
            {whoWeAre.description}
          </p>
        </div>
      </div>
    </section>
  );
}