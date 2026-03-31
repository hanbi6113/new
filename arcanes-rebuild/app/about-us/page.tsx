// app/about-us/page.tsx
import Image from "next/image";

const stats = [
  {
    label: "Global Impact",
    value: "20K+",
    desc: "GPU slices orchestrated globally across multi-cluster and multi-region deployments, powering AI, gaming, and decentralized compute.",
  },
  {
    label: "Proven Reliability",
    value: "98%",
    desc: "Measured session success rate with low latency and cryptographic QoS guarantees, validated across pilot workloads.",
  },
  {
    label: "Cost Efficiency",
    value: "89%",
    desc: "Average GPU utilization achieved on ARCANES slices, maximizing throughput while reducing waste for short-lived inference and streaming jobs.",
  },
];

function EqualImageCard({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  return (
    <div className="mx-auto w-full max-w-[620px]">
      <div className="overflow-hidden rounded-[28px] border border-black/5 bg-white shadow-[0_26px_70px_rgba(15,23,42,0.10)]">
        <div className="relative h-[460px] w-full">
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover object-center"
          />
        </div>
      </div>
    </div>
  );
}

export default function AboutUsPage() {
  return (
    <main className="bg-[#f6f4f2] text-slate-950">
      <section className="relative overflow-hidden bg-[#060817] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(168,85,247,0.10),transparent_26%),radial-gradient(circle_at_20%_20%,rgba(122,0,255,0.10),transparent_22%),linear-gradient(180deg,#060817_0%,#0a0920_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:42px_42px] opacity-20" />
        <div className="absolute left-1/2 top-[18%] h-[420px] w-[900px] -translate-x-1/2 rounded-full bg-[#7A00FF]/10 blur-3xl" />

        <div className="relative mx-auto w-full max-w-[1280px] px-6 pb-20 pt-16 md:px-8 md:pb-24 md:pt-20 lg:pb-28 lg:pt-24">
          <div className="mx-auto max-w-[980px] text-center">
            <p className="text-[11px] font-semibold tracking-[0.24em] text-white/70 md:text-xs">
              ABOUT US
            </p>

            <h1 className="mx-auto mt-8 max-w-[980px] text-[34px] font-extrabold leading-[1.08] tracking-[-0.05em] md:text-[34px] lg:text-[46px]">
              ARCANES evolves GPU slicing into
              <br />
              an adaptive grid—fueling AI inference,
              <br />
              metaverse interactivity,
              <br />
              and on-chain reservations with
              <br />
              provable QoS.
            </h1>
          </div>

          <div className="mx-auto mt-14 grid max-w-[1040px] gap-5 md:grid-cols-3">
            <article className="rounded-[24px] border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <p className="text-[11px] font-semibold tracking-[0.18em] text-violet-300">
                RESOURCE MODEL
              </p>
              <h2 className="mt-3 text-[28px] font-extrabold leading-[1.04] tracking-[-0.04em] text-white">
                Programmable
                <br />
                GPU Slices
              </h2>
              <p className="mt-4 text-[14px] leading-7 text-white/65">
                Dynamic allocation built for adaptive, high-efficiency compute
                delivery.
              </p>
            </article>

            <article className="rounded-[24px] border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <p className="text-[11px] font-semibold tracking-[0.18em] text-violet-300">
                EXECUTION
              </p>
              <h2 className="mt-3 text-[28px] font-extrabold leading-[1.04] tracking-[-0.04em] text-white">
                Secure,
                <br />
                Verifiable QoS
              </h2>
              <p className="mt-4 text-[14px] leading-7 text-white/65">
                Isolation, observability, and attestation designed for serious
                workload reliability.
              </p>
            </article>

            <article className="rounded-[24px] border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <p className="text-[11px] font-semibold tracking-[0.18em] text-violet-300">
                GLOBAL LAYER
              </p>
              <h2 className="mt-3 text-[28px] font-extrabold leading-[1.04] tracking-[-0.04em] text-white">
                Adaptive
                <br />
                Grid Access
              </h2>
              <p className="mt-4 text-[14px] leading-7 text-white/65">
                A connected compute fabric for scalable infrastructure across
                clusters and regions.
              </p>
            </article>
          </div>

          <div className="mx-auto mt-12 flex justify-center">
            <div className="h-px w-full max-w-[820px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[-22%] top-[2%] h-[1050px] w-[1500px] rotate-[8deg] bg-[radial-gradient(ellipse_at_center,rgba(122,0,255,0.14)_0%,rgba(122,0,255,0.06)_18%,transparent_58%)] opacity-70" />
          <div className="absolute right-[-28%] top-[32%] h-[980px] w-[1350px] rotate-[-12deg] bg-[radial-gradient(ellipse_at_center,rgba(168,85,247,0.12)_0%,rgba(168,85,247,0.05)_18%,transparent_60%)] opacity-70" />
          <div className="absolute left-[-8%] top-[8%] h-[1400px] w-[1600px] bg-[repeating-radial-gradient(circle_at_16%_24%,rgba(122,0,255,0.08)_0_1px,transparent_1px_18px)] [mask-image:linear-gradient(to_bottom,rgba(0,0,0,0.72),rgba(0,0,0,0.18)_72%,transparent_96%)]" />
          <div className="absolute right-[-14%] bottom-[-8%] h-[1200px] w-[1500px] bg-[repeating-radial-gradient(circle_at_72%_72%,rgba(168,85,247,0.07)_0_1px,transparent_1px_19px)] [mask-image:linear-gradient(to_top,rgba(0,0,0,0.65),rgba(0,0,0,0.16)_68%,transparent_94%)]" />
        </div>

        <div className="relative mx-auto w-full max-w-[1280px] px-6 py-20 md:px-8 lg:py-24">
          <div className="grid items-start gap-14 lg:grid-cols-[1fr_1fr] lg:gap-16">
            <div className="max-w-[590px]">
              <span className="inline-flex rounded-full bg-[#7A00FF] px-3 py-1 text-[11px] font-semibold leading-none text-white shadow-[0_8px_18px_rgba(122,0,255,0.22)]">
                Our Mission
              </span>

              <h2 className="mt-5 max-w-[560px] text-[38px] font-extrabold leading-[0.98] tracking-[-0.045em] text-[#0f172a] md:text-[50px] lg:text-[58px]">
                Redefining GPUs as
                <br />
                Programmable, Liquid, and
                <br />
                Verifiable Resources
              </h2>

              <div className="mt-8 max-w-[560px] space-y-5 text-[15px] leading-8 text-slate-600 md:text-[16px] md:leading-8">
                <p>
                  ARCANES exists to transform GPUs from rigid hardware into a
                  programmable and adaptive resource class. By unifying
                  fragmented GPU capacity into a single grid, we make compute
                  more transparent, efficient, and instantly accessible.
                </p>
                <p>
                  Through Adaptive GPU Grid Xlicing, we guarantee isolation,
                  quality of service, and cryptographic attestation. This
                  ensures workloads are executed fairly, securely, and at
                  predictable cost—whether for AI research, real-time gaming, or
                  enterprise applications.
                </p>
                <p>
                  Our mission is cultural as well as technical: to empower
                  global communities to innovate without limits. From developers
                  to creators to end-users, ARCANES enables a world where GPU
                  power flows seamlessly across industries.
                </p>
              </div>
            </div>

            <EqualImageCard
              src="/images/about/about-gaming.png"
              alt="Adaptive grid visual"
            />
          </div>

          <div className="mt-20 grid items-start gap-14 lg:grid-cols-[1fr_1fr] lg:gap-16">
            <EqualImageCard
              src="/images/about/about-chip.png"
              alt="Observability visual"
            />

            <div className="max-w-[620px]">
              <span className="inline-flex rounded-full bg-[#7A00FF] px-3 py-1 text-[11px] font-semibold leading-none text-white shadow-[0_8px_18px_rgba(122,0,255,0.22)]">
                Our Technology
              </span>

              <h2 className="mt-5 text-[38px] font-extrabold leading-[0.98] tracking-[-0.045em] text-[#0f172a] md:text-[50px] lg:text-[58px]">
                The Core of Adaptive GPU Grid
                <br />
                Xlicing
              </h2>

              <div className="mt-8 space-y-5 text-[15px] leading-8 text-slate-600 md:text-[16px] md:leading-8">
                <p>
                  At its core, ARCANES provides a programmable control plane
                  that slices GPUs into secure, isolated units and orchestrates
                  them across clusters and regions in near real time. Each slice
                  is metered, optimized, and verified, ensuring high utilization
                  and reliable performance.
                </p>
                <p>
                  Trusted execution environments provide cryptographic proof of
                  execution, while our observability stack captures performance
                  data at the slice level. For streaming and gaming, adaptive
                  bitrate and frame-rate control guarantee smooth user
                  experiences. For AI workloads, ephemeral slices support
                  short-lived inference tasks with strict QoS guarantees.
                </p>
                <p>
                  Smart contracts and transparency enable accountability by
                  enforcing reservations, usage proofs, and settlements
                  on-chain. Combined with our policy engine for incentive design
                  and compliance rules, ARCANES becomes not just a utilization
                  tool but the programmable substrate of the global GPU economy.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-24 grid gap-14 lg:grid-cols-[0.88fr_1.12fr] lg:gap-16">
            <div className="max-w-[520px]">
              <h2 className="text-[46px] font-extrabold leading-[1.02] tracking-[-0.05em] text-[#0f172a] md:text-[64px]">
                Join Us
                <br />
                Be Part of the
                <br />
                Adaptive Grid
                <br />
                Revolution
              </h2>
            </div>

            <div className="max-w-[680px] space-y-5 text-[15px] leading-8 text-slate-600 md:text-[16px] md:leading-8">
              <p>
                We are building the world’s first adaptive GPU slicing
                mainnet—starting with a Web3-enabled gameplay MVP and scaling
                into tokenized AI engines, real-time streaming, and
                decentralized compute markets. Early adopters gain access to
                tools and infrastructure that redefine how compute is consumed,
                priced, and trusted.
              </p>
              <p>
                Developers, enterprises, and creators are invited to shape this
                ecosystem with us. From instant access to idle token economics,
                from SDK integration to governance participation, ARCANES offers
                a chance to help redefine GPUs as a global utility. Join us and
                build the adaptive grid together.
              </p>
            </div>
          </div>

          <div className="mt-16 grid gap-5 md:grid-cols-3">
            {stats.map((item) => (
              <article
                key={item.label}
                className="rounded-[24px] border border-[#e4dbfb] bg-[#faf7ff] p-7 shadow-[0_12px_30px_rgba(15,23,42,0.05)]"
              >
                <p className="text-[11px] font-semibold tracking-[0.18em] text-[#7A00FF]">
                  {item.label}
                </p>
                <p className="mt-4 text-[46px] font-extrabold leading-none tracking-[-0.045em] text-[#0f172a] md:text-[52px]">
                  {item.value}
                </p>
                <p className="mt-4 text-[14px] leading-7 text-slate-600 md:text-[15px]">
                  {item.desc}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}