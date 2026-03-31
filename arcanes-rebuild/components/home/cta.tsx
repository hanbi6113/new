// components/home/cta.tsx
export default function Cta() {
  return (
    <section id="cta" className="py-20 md:py-28">
      <div className="mx-auto w-full max-w-7xl px-5">
        <div className="flex flex-col justify-between gap-8 rounded-[30px] border border-[#ece6ff] bg-[radial-gradient(circle_at_top_right,rgba(122,0,255,0.06),transparent_24%),#ffffff] p-8 shadow-[0_24px_60px_rgba(15,23,42,0.08)] lg:flex-row lg:items-center">
          <div className="max-w-[680px]">
            <p className="mb-3 text-[12px] font-bold tracking-[0.24em] text-[#7A00FF]">
              GET IN TOUCH
            </p>
            <h2 className="text-[clamp(32px,5vw,58px)] leading-[1.02] tracking-[-0.045em] text-slate-950">
              Start building AI agents that fit your industry
            </h2>
            <p className="mt-5 text-[17px] leading-8 text-slate-500">
              Connect with ARCANES to explore strategy, architecture,
              deployment, and long-term AI operationalisation.
            </p>
          </div>

          <div className="flex flex-wrap gap-3.5">
            <a
              href="mailto:hello@arcanes.ai"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#7A00FF] px-5 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-violet-700"
            >
              hello@arcanes.ai
            </a>

            <a
              href="#what-we-do"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#ece6ff] bg-white px-5 font-semibold text-slate-900 transition hover:bg-violet-50"
            >
              See What We Do
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}