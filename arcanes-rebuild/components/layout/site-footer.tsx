// components/layout/site-footer.tsx
import Link from "next/link";

const footerGroups = [
  {
    title: "Explore",
    links: [
      { label: "Home", href: "/" },
      { label: "Discover", href: "#" },
      { label: "Community", href: "#" },
      { label: "About Us", href: "/about-us" },
      { label: "Contact", href: "#" },
    ],
  },
  {
    title: "Community",
    links: [
      { label: "X Follow on X", href: "#" },
      { label: "Join Telegram", href: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "General Terms of Service", href: "/terms-of-service" },
      { label: "ARIES Service Areas", href: "#" },
    ],
  },
];

export default function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-[#070916] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,rgba(122,0,255,0.30),transparent_22%),radial-gradient(circle_at_18%_20%,rgba(168,85,247,0.16),transparent_18%),radial-gradient(circle_at_82%_76%,rgba(139,92,246,0.18),transparent_22%)]" />

      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:46px_46px] opacity-[0.07]" />

      <div className="absolute left-[12%] top-[24%] h-px w-[26%] bg-gradient-to-r from-transparent via-violet-400/30 to-transparent" />
      <div className="absolute right-[14%] top-[30%] h-px w-[22%] bg-gradient-to-r from-transparent via-fuchsia-400/30 to-transparent" />
      <div className="absolute left-[22%] bottom-[26%] h-px w-[24%] bg-gradient-to-r from-transparent via-violet-500/25 to-transparent" />
      <div className="absolute right-[22%] bottom-[20%] h-px w-[18%] bg-gradient-to-r from-transparent via-purple-300/25 to-transparent" />

      <div className="absolute left-[20%] top-[23%] h-2 w-2 rounded-full bg-violet-400/70 shadow-[0_0_12px_rgba(167,139,250,0.45)]" />
      <div className="absolute left-[36%] top-[24%] h-2 w-2 rounded-full bg-purple-400/70 shadow-[0_0_12px_rgba(192,132,252,0.45)]" />
      <div className="absolute right-[30%] top-[29%] h-2 w-2 rounded-full bg-fuchsia-300/70 shadow-[0_0_12px_rgba(232,121,249,0.45)]" />
      <div className="absolute right-[18%] top-[30%] h-2 w-2 rounded-full bg-violet-500/70 shadow-[0_0_12px_rgba(139,92,246,0.45)]" />
      <div className="absolute left-[28%] bottom-[25%] h-2 w-2 rounded-full bg-purple-400/60 shadow-[0_0_12px_rgba(192,132,252,0.4)]" />
      <div className="absolute left-[43%] bottom-[26%] h-2 w-2 rounded-full bg-violet-300/60 shadow-[0_0_12px_rgba(196,181,253,0.4)]" />
      <div className="absolute right-[26%] bottom-[19%] h-2 w-2 rounded-full bg-fuchsia-400/60 shadow-[0_0_12px_rgba(232,121,249,0.4)]" />
      <div className="absolute right-[14%] bottom-[20%] h-2 w-2 rounded-full bg-violet-500/60 shadow-[0_0_12px_rgba(139,92,246,0.4)]" />

      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),transparent_34%,rgba(255,255,255,0.015))]" />

      <div className="relative mx-auto w-full max-w-[1280px] px-6 py-16 md:px-8">
        <div className="grid gap-12 md:grid-cols-[1.1fr_1fr_1fr_1fr]">
          <div>
            <Link
              href="/"
              className="inline-flex items-center gap-3 font-semibold tracking-[-0.02em] text-white"
              aria-label="Arcanes AI home"
            >
              <span className="h-3 w-3 rounded-full bg-gradient-to-br from-violet-400 via-[#7A00FF] to-fuchsia-500 shadow-[0_0_18px_rgba(122,0,255,0.35)]" />
              <span className="text-[26px] font-extrabold tracking-[-0.04em]">
                Arcanes AI
              </span>
            </Link>

            <p className="mt-5 max-w-[290px] text-[15px] leading-7 text-white/65">
              Adaptive infrastructure, intelligent systems, and scalable AI
              experiences built for modern environments.
            </p>
          </div>

          {footerGroups.map((group) => (
            <div key={group.title}>
              <h3 className="text-[18px] font-bold tracking-[-0.02em] text-white">
                {group.title}
              </h3>

              <ul className="mt-5 space-y-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-[15px] text-white/70 transition hover:text-violet-300"
                    >
                      › {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 border-t border-white/10 pt-6">
          <p className="text-sm text-white/50">
            Copyright © 2026 All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}