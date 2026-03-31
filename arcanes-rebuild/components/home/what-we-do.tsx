// components/home/what-we-do.tsx
import { whatWeDo } from "@/data/site-content";

export default function WhatWeDo() {
  return (
    <section
      id="explore-agents"
      className="border-y border-[#ece6ff] bg-gradient-to-b from-[#faf7ff] to-[#f7f5ff] py-20 md:py-28"
    >
      <div className="mx-auto w-full max-w-7xl px-5">
        <div className="mx-auto mb-11 max-w-3xl">
          <p className="mb-3 text-[12px] font-bold tracking-[0.24em] text-[#7A00FF]">
            EXPLORE AGENTS
          </p>
          <h2 className="text-[clamp(32px,5vw,58px)] leading-[1.02] tracking-[-0.045em] text-slate-950">
            From strategy to deployment, built around real AI adoption
          </h2>
          <p className="mt-5 text-[17px] leading-8 text-slate-500">
            ARCANES combines advisory, custom development, integration, and
            partnership support to help organisations operationalise AI with
            clarity and speed.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {whatWeDo.map((item) => (
            <article
              key={item.title}
              className="rounded-[24px] border border-[#ece6ff] bg-white p-6 shadow-[0_18px_40px_rgba(15,23,42,0.06)]"
            >
              <h3 className="text-2xl leading-[1.1] tracking-[-0.04em] text-slate-950">
                {item.title}
              </h3>

              <p className="mt-3 text-[15px] font-medium leading-7 text-slate-700">
                {item.description}
              </p>

              <ul className="mt-5 space-y-2.5">
                {item.points.map((point) => (
                  <li
                    key={point}
                    className="relative pl-4 text-[15px] leading-7 text-slate-600"
                  >
                    <span className="absolute left-0 top-[11px] h-1.5 w-1.5 rounded-full bg-[#7A00FF]" />
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}