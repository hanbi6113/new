// components/home/b2b-solutions.tsx
import { b2bSolutions } from "@/data/site-content";

export default function B2BSolutions() {
  return (
    <section id="b2b-solutions" className="py-20 md:py-28">
      <div className="mx-auto w-full max-w-7xl px-5">
        <div className="mx-auto mb-11 max-w-3xl">
          <p className="mb-3 text-[12px] font-bold tracking-[0.24em] text-[#7A00FF]">
            B2B SOLUTIONS
          </p>
          <h2 className="text-[clamp(32px,5vw,58px)] leading-[1.02] tracking-[-0.045em] text-slate-950">
            Built for organisations that need secure, scalable AI adoption
          </h2>
          <p className="mt-5 text-[17px] leading-8 text-slate-500">
            ARCANES supports serious business environments with deployment
            flexibility, operational integration, and architecture that fits
            real-world industry requirements.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {b2bSolutions.map((item) => (
            <article
              key={item.title}
              className="rounded-[24px] border border-[#ece6ff] bg-white p-6 shadow-[0_18px_40px_rgba(15,23,42,0.06)]"
            >
              <div className="mb-4 h-3 w-3 rounded-full bg-gradient-to-br from-violet-400 to-[#7A00FF] shadow-[0_0_12px_rgba(122,0,255,0.18)]" />
              <h3 className="text-2xl leading-[1.1] tracking-[-0.04em] text-slate-950">
                {item.title}
              </h3>
              <p className="mt-3 text-[16px] leading-8 text-slate-500">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}