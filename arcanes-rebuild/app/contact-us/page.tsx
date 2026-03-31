// app/contact-us/page.tsx
"use client";

import { useMemo, useState } from "react";

const inquiryOptions = [
  "GPU Render/Provision",
  "AGGX GPU Service & Pricing",
  "Partnership",
  "Investment",
  "Others",
];

export default function ContactUsPage() {
  const [inquiryType, setInquiryType] = useState("Investment");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const nameError = useMemo(() => name.trim().length === 0, [name]);
  const emailError = useMemo(() => {
    if (email.trim().length === 0) return true;
    return !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
  }, [email]);
  const messageError = useMemo(() => message.trim().length < 10, [message]);
  const isDisabled = nameError || emailError || messageError;

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#f7f5ff] text-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(122,0,255,0.08),transparent_22%),linear-gradient(180deg,#fcfbff_0%,#f7f5ff_52%,#f3efff_100%)]" />

      <div className="absolute inset-0 bg-[linear-gradient(rgba(122,0,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(122,0,255,0.05)_1px,transparent_1px)] bg-[size:56px_56px] opacity-[0.22]" />

      <div className="absolute left-[-8%] top-[18%] h-[420px] w-[420px] rounded-full bg-[#7A00FF]/10 blur-3xl" />
      <div className="absolute right-[-8%] bottom-[10%] h-[420px] w-[420px] rounded-full bg-fuchsia-500/10 blur-3xl" />
      <div className="absolute left-[22%] bottom-[-12%] h-[320px] w-[320px] rounded-full bg-violet-500/10 blur-3xl" />

      <section className="relative mx-auto flex min-h-screen w-full max-w-[1280px] items-center px-5 py-24">
        <div className="mx-auto w-full max-w-[980px]">
          <div className="relative overflow-hidden rounded-[34px] border border-violet-200/60 bg-[linear-gradient(180deg,rgba(7,9,22,0.98)_0%,rgba(10,14,28,0.96)_100%)] p-8 text-white shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_30px_80px_rgba(71,28,135,0.18),0_0_90px_rgba(122,0,255,0.10)] md:p-10">
            <div className="absolute inset-x-0 top-0 h-[3px] bg-[linear-gradient(90deg,#b794f4_0%,#7A00FF_52%,#e879f9_100%)]" />
            <div className="absolute -left-12 top-8 h-[220px] w-[120px] bg-violet-400/20 blur-3xl" />
            <div className="absolute -right-10 bottom-10 h-[220px] w-[120px] bg-[#7A00FF]/20 blur-3xl" />
            <div className="absolute inset-0 rounded-[34px] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.03)]" />

            <div className="relative">
              <div className="inline-flex items-center gap-3">
                <span className="h-2.5 w-2.5 rounded-full bg-[#7A00FF] shadow-[0_0_14px_rgba(122,0,255,0.6)]" />
                <p className="text-[13px] font-bold tracking-[0.28em] text-violet-300">
                  GET IN TOUCH
                </p>
              </div>

              <h1 className="mt-6 text-[clamp(40px,6vw,72px)] font-extrabold leading-[0.98] tracking-[-0.05em] text-white">
                Send an Inquiry
              </h1>

              <p className="mt-5 text-[16px] leading-8 text-white/55 md:text-[18px]">
                Prefer email? Reach us directly at{" "}
                <a
                  href="mailto:info@aggx.io"
                  className="font-semibold text-violet-300 transition hover:text-violet-200"
                >
                  info@aggx.io
                </a>
              </p>

              <form
                className="mt-10"
                onSubmit={(e) => {
                  e.preventDefault();
                }}
              >
                <div>
                  <label className="mb-3 block text-[13px] font-bold tracking-[0.12em] text-white/65">
                    INQUIRY TYPE
                  </label>

                  <div className="relative">
                    <select
                      value={inquiryType}
                      onChange={(e) => setInquiryType(e.target.value)}
                      className="h-14 w-full appearance-none rounded-[18px] border border-white/10 bg-[#171c2c] px-5 pr-12 text-[16px] font-medium text-white outline-none transition focus:border-[#7A00FF] focus:shadow-[0_0_0_3px_rgba(122,0,255,0.16)]"
                    >
                      {inquiryOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>

                    <span className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-white/40">
                      ˅
                    </span>
                  </div>
                </div>

                <div className="mt-8 grid gap-5 md:grid-cols-2">
                  <div>
                    <label className="mb-3 block text-[13px] font-bold tracking-[0.12em] text-white/65">
                      NAME
                    </label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your name"
                      className={`h-14 w-full rounded-[18px] border bg-[#171c2c] px-5 text-[16px] text-white outline-none transition placeholder:text-white/35 ${
                        nameError
                          ? "border-[#7A00FF]"
                          : "border-white/10 focus:border-[#7A00FF]"
                      }`}
                    />
                    {nameError && (
                      <p className="mt-3 text-[14px] text-violet-300">
                        Please enter your name.
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="mb-3 block text-[13px] font-bold tracking-[0.12em] text-white/65">
                      EMAIL
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@example.com"
                      className={`h-14 w-full rounded-[18px] border bg-[#171c2c] px-5 text-[16px] text-white outline-none transition placeholder:text-white/35 ${
                        emailError
                          ? "border-[#7A00FF]"
                          : "border-white/10 focus:border-[#7A00FF]"
                      }`}
                    />
                    {emailError && (
                      <p className="mt-3 text-[14px] text-violet-300">
                        Please enter a valid email.
                      </p>
                    )}
                  </div>
                </div>

                <div className="mt-8">
                  <label className="mb-3 block text-[13px] font-bold tracking-[0.12em] text-white/65">
                    MESSAGE
                  </label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell us what you need (timeline, GPU type, expected scale, etc.)"
                    className={`min-h-[180px] w-full resize-none rounded-[18px] border bg-[#171c2c] px-5 py-4 text-[16px] text-white outline-none transition placeholder:text-white/35 ${
                      messageError
                        ? "border-[#7A00FF]"
                        : "border-white/10 focus:border-[#7A00FF]"
                    }`}
                  />
                  <div className="mt-3 flex items-center justify-between gap-4">
                    {messageError ? (
                      <p className="text-[14px] text-violet-300">
                        Please write at least 10 characters.
                      </p>
                    ) : (
                      <span className="text-[14px] text-emerald-300">
                        Message looks good.
                      </span>
                    )}

                    <span className="text-[13px] text-white/35">
                      {message.length} chars
                    </span>
                  </div>
                </div>

                <div className="mt-10 border-t border-white/8 pt-6">
                  <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
                    <p className="max-w-[520px] text-[14px] leading-7 text-white/45">
                      By sending, you agree that we may contact you about this
                      inquiry.
                    </p>

                    <button
                      type="submit"
                      disabled={isDisabled}
                      className={`inline-flex min-h-14 items-center justify-center rounded-[16px] px-8 text-[16px] font-semibold transition ${
                        isDisabled
                          ? "cursor-not-allowed bg-white/6 text-white/20"
                          : "bg-[#7A00FF] text-white shadow-[0_12px_30px_rgba(122,0,255,0.28)] hover:bg-violet-700"
                      }`}
                    >
                      Send Message
                      <span className="ml-2">→</span>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}