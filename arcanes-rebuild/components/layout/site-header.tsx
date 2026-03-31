// components/layout/site-header.tsx
import Link from "next/link";

const navItems = [
  { label: "Home", href: "/" },
  { label: "GPU Dashboard", href: "/gpu-dashboard" },
  { label: "About Us", href: "/about-us" },
  { label: "Contact Us", href: "/contact-us" },
];

export default function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[#ece6ff]/80 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex min-h-20 w-full max-w-7xl items-center justify-between gap-5 px-5">
        <Link
          href="/"
          className="inline-flex items-center gap-3 font-semibold tracking-[-0.02em] text-slate-950"
          aria-label="Arcanes AI home"
        >
          <span className="h-3 w-3 rounded-full bg-gradient-to-br from-violet-400 via-[#7A00FF] to-fuchsia-500 shadow-[0_0_16px_rgba(122,0,255,0.22)]" />
          <span className="text-base">Arcanes AI</span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-slate-600 transition hover:text-[#7A00FF]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/gpu-dashboard"
          className="inline-flex min-h-10 items-center justify-center rounded-full border border-[#ece6ff] bg-white px-4 text-sm font-semibold text-[#7A00FF] transition hover:bg-violet-50"
        >
          Open Dashboard
        </Link>
      </div>
    </header>
  );
}