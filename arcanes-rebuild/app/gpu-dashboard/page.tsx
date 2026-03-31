// app/gpu-dashboard/page.tsx
const summaryCards = [
  { label: "Cluster Status", value: "Healthy" },
  { label: "GPU Allocation", value: "78%" },
  { label: "Jobs Running", value: "124" },
  { label: "Storage Throughput", value: "1.8 TB/s" },
];

const workloadRows = [
  { name: "Inference Pool A", gpu: "32", status: "Active", latency: "24ms" },
  { name: "Training Group X", gpu: "64", status: "Running", latency: "—" },
  { name: "Vision Queue", gpu: "18", status: "Queued", latency: "31ms" },
  { name: "Embedding Service", gpu: "12", status: "Active", latency: "17ms" },
];

const panels = [
  {
    title: "GPU Slicing Overview",
    description:
      "Monitor partitioned GPU resources, active slices, and workload distribution across compute pools.",
  },
  {
    title: "SSD / Data Path Monitoring",
    description:
      "Track storage access behavior, throughput lanes, and bottlenecks affecting model and dataset operations.",
  },
  {
    title: "QoS & Isolation",
    description:
      "Review workload stability, policy controls, and performance behavior across concurrent tenant activity.",
  },
];

export default function GPUDashboardPage() {
  return (
    <main className="min-h-screen bg-[#f7f5ff]">
      <section className="border-b border-[#ece6ff] bg-white">
        <div className="mx-auto w-full max-w-7xl px-5 py-14 md:py-16">
          <p className="mb-4 text-[12px] font-bold tracking-[0.24em] text-[#7A00FF]">
            GPU DASHBOARD
          </p>
          <div className="grid gap-8 lg:grid-cols-[1fr_420px] lg:items-end">
            <div>
              <h1 className="text-[clamp(40px,6vw,72px)] leading-[0.96] tracking-[-0.055em] text-slate-950">
                Infrastructure visibility for compute-intensive operations
              </h1>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-500">
                A dedicated dashboard layout for monitoring GPU allocation,
                workload orchestration, storage behavior, and operational
                performance across slicing-based infrastructure environments.
              </p>
            </div>

            <div className="rounded-[28px] border border-violet-900/20 bg-slate-950 p-6 text-white shadow-[0_18px_40px_rgba(15,23,42,0.08)]">
              <p className="text-[11px] font-bold tracking-[0.18em] text-violet-300">
                LIVE OVERVIEW
              </p>
              <h2 className="mt-3 text-2xl leading-[1.08] tracking-[-0.04em]">
                Operational dashboard shell
              </h2>
              <p className="mt-4 text-[15px] leading-7 text-white/70">
                Designed for infrastructure, monitoring, and system visibility
                rather than a marketing-style landing experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 md:py-10">
        <div className="mx-auto grid w-full max-w-7xl gap-4 px-5 md:grid-cols-2 xl:grid-cols-4">
          {summaryCards.map((card) => (
            <div
              key={card.label}
              className="rounded-[24px] border border-[#ece6ff] bg-white p-5 shadow-[0_14px_32px_rgba(15,23,42,0.05)]"
            >
              <p className="text-sm font-medium text-slate-500">{card.label}</p>
              <p className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-slate-950">
                {card.value}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="pb-10">
        <div className="mx-auto grid w-full max-w-7xl gap-5 px-5 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-[28px] border border-[#ece6ff] bg-white p-6 shadow-[0_18px_40px_rgba(15,23,42,0.05)]">
            <div className="mb-6 flex items-center justify-between gap-4">
              <div>
                <p className="text-[11px] font-bold tracking-[0.18em] text-[#7A00FF]">
                  WORKLOAD TABLE
                </p>
                <h2 className="mt-2 text-2xl leading-[1.08] tracking-[-0.04em] text-slate-950">
                  Active workload distribution
                </h2>
              </div>
              <div className="rounded-full border border-[#ece6ff] bg-violet-50 px-4 py-2 text-sm font-medium text-slate-600">
                Updated just now
              </div>
            </div>

            <div className="overflow-hidden rounded-[22px] border border-[#ece6ff]">
              <div className="grid grid-cols-4 bg-violet-50 px-5 py-4 text-sm font-semibold text-slate-600">
                <span>Workload</span>
                <span>GPU</span>
                <span>Status</span>
                <span>Latency</span>
              </div>

              {workloadRows.map((row, index) => (
                <div
                  key={row.name}
                  className={`grid grid-cols-4 px-5 py-4 text-sm ${
                    index !== workloadRows.length - 1
                      ? "border-b border-[#ece6ff]"
                      : ""
                  }`}
                >
                  <span className="font-medium text-slate-950">{row.name}</span>
                  <span className="text-slate-600">{row.gpu}</span>
                  <span className="text-slate-600">{row.status}</span>
                  <span className="text-slate-600">{row.latency}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-5">
            {panels.map((panel) => (
              <div
                key={panel.title}
                className="rounded-[28px] border border-[#ece6ff] bg-white p-6 shadow-[0_18px_40px_rgba(15,23,42,0.05)]"
              >
                <p className="text-[11px] font-bold tracking-[0.18em] text-[#7A00FF]">
                  PANEL
                </p>
                <h3 className="mt-3 text-2xl leading-[1.08] tracking-[-0.04em] text-slate-950">
                  {panel.title}
                </h3>
                <p className="mt-4 text-[15px] leading-7 text-slate-500">
                  {panel.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20 md:pb-28">
        <div className="mx-auto w-full max-w-7xl px-5">
          <div className="rounded-[32px] border border-violet-900/20 bg-slate-950 p-8 text-white shadow-[0_24px_60px_rgba(15,23,42,0.08)] md:p-10">
            <p className="text-[12px] font-bold tracking-[0.24em] text-violet-300">
              DASHBOARD VIEW
            </p>
            <h2 className="mt-3 text-[clamp(30px,4vw,54px)] leading-[1.04] tracking-[-0.05em]">
              A dedicated interface for GPU infrastructure operations
            </h2>
            <p className="mt-5 max-w-3xl text-[16px] leading-8 text-white/70">
              This page can later expand into charts, resource heatmaps,
              multi-cluster analytics, node-level detail cards, and job-control
              interactions.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}