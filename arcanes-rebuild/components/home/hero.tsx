// components/home/hero.tsx
import { heroContent } from "@/data/site-content";

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-14 md:py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(122,0,255,0.06),transparent_24%),linear-gradient(180deg,#ffffff_0%,#fbfaff_100%)]" />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-10 px-5 lg:grid-cols-[1.06fr_0.94fr]">
        <div className="max-w-[720px]">
          <p className="mb-3 text-[12px] font-bold tracking-[0.24em] text-[#7A00FF]">
            {heroContent.eyebrow}
          </p>

          <h1 className="text-[clamp(42px,7vw,84px)] leading-[0.95] tracking-[-0.06em] text-slate-950">
            {heroContent.title}
          </h1>

          <p className="mt-6 max-w-[680px] text-lg leading-8 text-slate-500">
            {heroContent.description}
          </p>

          <div className="mt-8 flex flex-wrap gap-3.5">
            <a
              href={heroContent.primaryCta.href}
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#7A00FF] px-5 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-violet-700"
            >
              {heroContent.primaryCta.label}
            </a>

            <a
              href={heroContent.secondaryCta.href}
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#ece6ff] bg-white px-5 font-semibold text-slate-900 transition hover:bg-violet-50"
            >
              → {heroContent.secondaryCta.label}
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="relative min-h-[430px] overflow-hidden rounded-[32px] border border-[#ece6ff] bg-gradient-to-b from-white to-[#faf7ff] shadow-[0_24px_60px_rgba(15,23,42,0.08)] md:min-h-[560px]">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.04)_1px,transparent_1px)] bg-[size:40px_40px]" />
            <div className="absolute -right-8 -top-8 h-56 w-56 rounded-full bg-[#7A00FF]/10 blur-3xl" />
            <div className="absolute -bottom-10 -left-8 h-48 w-48 rounded-full bg-violet-400/10 blur-3xl" />

            <div className="absolute left-5 top-10 w-[calc(100%-40px)] rounded-[22px] border border-[#ece6ff] bg-white/90 p-6 shadow-[0_12px_32px_rgba(15,23,42,0.06)] backdrop-blur md:left-12 md:top-16 md:w-[min(82%,400px)]">
              <span className="mb-3 inline-block text-[11px] font-bold tracking-[0.18em] text-[#7A00FF]">
                AI-FIRST PLATFORM
              </span>
              <strong className="mb-2 block text-[28px] leading-[1.1] tracking-[-0.04em] text-slate-950">
                Domain-Specialized Agents
              </strong>
              <p className="text-[15px] leading-7 text-slate-500">
                Designed, built, and scaled for industry-specific business logic
                and operational environments.
              </p>
            </div>

            <div className="absolute bottom-9 right-5 w-[calc(100%-40px)] rounded-[22px] border border-[#ece6ff] bg-white/90 p-6 shadow-[0_12px_32px_rgba(15,23,42,0.06)] backdrop-blur md:bottom-16 md:right-10 md:w-[min(72%,320px)]">
              <span className="mb-3 inline-block text-[11px] font-bold tracking-[0.18em] text-[#7A00FF]">
                DELIVERY MODEL
              </span>
              <strong className="mb-2 block text-[28px] leading-[1.1] tracking-[-0.04em] text-slate-950">
                Strategy to Deployment
              </strong>
              <p className="text-[15px] leading-7 text-slate-500">
                Advisory, development, integration, and scaling support in one
                execution model.
              </p>
            </div>

            <div className="absolute left-[10%] top-[52%] h-px w-[80%] bg-gradient-to-r from-transparent via-[#7A00FF]/20 to-transparent" />
            <div className="absolute left-[56%] top-[16%] h-[62%] w-px bg-gradient-to-b from-transparent via-[#7A00FF]/20 to-transparent" />

            <span className="absolute left-[54%] top-[24%] h-3 w-3 rounded-full bg-[#7A00FF] shadow-[0_0_12px_rgba(122,0,255,0.22)]" />
            <span className="absolute left-[24%] top-[50%] h-3 w-3 rounded-full bg-[#7A00FF] shadow-[0_0_12px_rgba(122,0,255,0.22)]" />
            <span className="absolute bottom-[22%] right-[28%] h-3 w-3 rounded-full bg-[#7A00FF] shadow-[0_0_12px_rgba(122,0,255,0.22)]" />
          </div>
        </div>
      </div>

      <div className="relative mx-auto mt-7 grid w-full max-w-7xl gap-4 px-5 md:grid-cols-3">
        {heroContent.stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-3xl border border-[#ece6ff] bg-white p-5 shadow-[0_12px_32px_rgba(15,23,42,0.06)]"
          >
            <span className="block text-[13px] text-slate-500">{stat.label}</span>
            <strong className="mt-2 block text-xl tracking-[-0.03em] text-slate-950">
              {stat.value}
            </strong>
          </div>
        ))}
      </div>
    </section>
  );
}