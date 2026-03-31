// app/terms-of-service/page.tsx
import Link from "next/link";

const contents = [
  { id: "introduction", label: "Introduction" },
  { id: "who-may-use", label: "1. Who May Use the Services" },
  { id: "rights-in-content", label: "2. Rights We Grant You" },
  { id: "ownership", label: "3. Ownership" },
  { id: "third-party", label: "4. Third-Party Services and Materials" },
  { id: "privacy", label: "5. Location of Our Privacy Policy" },
  {
    id: "disclaimers",
    label: "6. Disclaimers, Limitations of Liability, and Indemnification",
  },
  { id: "additional-provisions", label: "7. Additional Provisions" },
  { id: "contact", label: "Contact" },
];

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen bg-[#f7f5ff] text-slate-950">
      <section className="border-b border-[#ece6ff] bg-white">
        <div className="mx-auto w-full max-w-[1120px] px-6 py-14 md:px-8 md:py-16">
          <div className="max-w-[760px]">
            <p className="text-[11px] font-semibold tracking-[0.24em] text-[#7A00FF]">
              Legal
            </p>

            <h1 className="mt-4 text-[34px] font-extrabold leading-[1.04] tracking-[-0.045em] text-slate-950 md:text-[48px]">
              General Terms of Service
            </h1>

            <p className="mt-5 max-w-[760px] text-[15px] leading-8 text-slate-600 md:text-[16px]">
              These Terms of Service govern your access to and use of the
              ARCANES website, products, services, communications, and related
              digital experiences.
            </p>

            <p className="mt-4 text-sm text-slate-500">
              Last Updated: November 29, 2025
            </p>
          </div>
        </div>
      </section>

      <section className="relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(122,0,255,0.06),transparent_24%)]" />

        <div className="relative mx-auto w-full max-w-[1120px] px-6 py-12 md:px-8 md:py-14">
          <div className="grid gap-10 lg:grid-cols-[250px_minmax(0,1fr)]">
            <aside className="lg:sticky lg:top-28 lg:self-start">
              <div className="rounded-[22px] border border-[#ece6ff] bg-white p-5 shadow-[0_10px_30px_rgba(15,23,42,0.05)]">
                <p className="text-[12px] font-semibold tracking-[0.18em] text-[#7A00FF]">
                  Contents
                </p>

                <ul className="mt-4 space-y-2.5">
                  {contents.map((item) => (
                    <li key={item.id}>
                      <a
                        href={`#${item.id}`}
                        className="text-[13px] leading-6 text-slate-600 transition hover:text-slate-950"
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>

            <article className="rounded-[28px] border border-[#ece6ff] bg-white p-7 shadow-[0_14px_34px_rgba(15,23,42,0.05)] md:p-10">
              <PolicySection
                id="introduction"
                title="Introduction"
                paragraphs={[
                  `These General Terms of Service ("Terms") govern your access to and use of the ARCANES website, products, applications, hosted services, communications, content, and related offerings (collectively, the "Services"). By accessing or using the Services, you agree to be bound by these Terms.`,
                  `If you are using the Services on behalf of an entity, you represent and warrant that you have authority to bind that entity to these Terms, and "you" will refer to both you and that entity.`,
                  `If you do not agree to these Terms, you must not access or use the Services.`,
                ]}
              />

              <PolicySection
                id="who-may-use"
                title="1. Who May Use the Services"
                paragraphs={[
                  `You may use the Services only if you can form a binding contract with ARCANES and are not prohibited from using the Services under applicable law.`,
                  `You must provide accurate information when creating or using an account and must keep such information up to date. You are responsible for maintaining the security of your account credentials and for all activities that occur under your account.`,
                ]}
                bullets={[
                  `You must be legally capable of entering into these Terms.`,
                  `You must comply with all applicable laws, regulations, and third-party rights.`,
                  `You may not use the Services if you have been suspended or removed from the Services by ARCANES.`,
                ]}
              />

              <PolicySection
                id="rights-in-content"
                title="2. Rights We Grant You"
                paragraphs={[
                  `Subject to your compliance with these Terms, ARCANES grants you a limited, non-exclusive, non-transferable, non-sublicensable, revocable right to access and use the Services for their intended purposes.`,
                  `This license does not give you any ownership in the Services or in any content, code, software, branding, data, or other materials made available through the Services.`,
                ]}
                bullets={[
                  `You may not copy, modify, distribute, sell, lease, reverse engineer, decompile, or otherwise attempt to extract source code except where such restriction is prohibited by law.`,
                  `You may not misuse the Services, interfere with their operation, or attempt unauthorized access to any systems or networks.`,
                  `You may not use the Services to infringe intellectual property, privacy, publicity, or other rights of others.`,
                ]}
              />

              <PolicySection
                id="ownership"
                title="3. Ownership"
                paragraphs={[
                  `The Services, including all software, technology, designs, text, graphics, trademarks, logos, documentation, and other content provided by ARCANES, are owned by ARCANES or its licensors and are protected by intellectual property and other applicable laws.`,
                  `Except for the limited rights expressly granted in these Terms, ARCANES and its licensors reserve all right, title, and interest in and to the Services.`,
                ]}
              />

              <PolicySection
                id="third-party"
                title="4. Third-Party Services and Materials"
                paragraphs={[
                  `The Services may contain links to, integrations with, or functionality from third-party websites, software, products, wallets, platforms, or services. ARCANES does not control third-party services and is not responsible for their availability, content, terms, policies, or practices.`,
                  `Your use of third-party services may be subject to separate terms and conditions between you and the applicable third party.`,
                ]}
              />

              <PolicySection
                id="privacy"
                title="5. Location of Our Privacy Policy"
                paragraphs={[
                  `Please review our Privacy Policy to understand how we collect, use, and disclose information in connection with the Services. The Privacy Policy is incorporated into these Terms by reference.`,
                ]}
              />

              <PolicySection
                id="disclaimers"
                title="6. Disclaimers, Limitations of Liability, and Indemnification"
                paragraphs={[
                  `The Services are provided "as is" and "as available" without warranties of any kind, whether express, implied, statutory, or otherwise. To the fullest extent permitted by law, ARCANES disclaims all warranties, including implied warranties of merchantability, fitness for a particular purpose, title, non-infringement, and quiet enjoyment.`,
                  `ARCANES does not warrant that the Services will be uninterrupted, secure, error-free, or free of harmful components, or that any content or results obtained through the Services will be accurate, reliable, or complete.`,
                ]}
                extraTitle="Limitation of liability:"
                extraBullets={[
                  `To the fullest extent permitted by law, ARCANES and its affiliates, officers, employees, agents, partners, and licensors will not be liable for any indirect, incidental, special, consequential, exemplary, or punitive damages.`,
                  `ARCanes will not be liable for loss of profits, revenues, data, goodwill, business opportunities, or other intangible losses arising out of or related to your use of or inability to use the Services.`,
                  `Where permitted by law, the total liability of ARCANES for any claim arising out of or relating to these Terms or the Services will not exceed the greater of the amount paid by you to ARCANES for the Services in the twelve months preceding the claim or USD $100.`,
                ]}
                paragraphsAfter={[
                  `You agree to indemnify and hold harmless ARCANES and its affiliates, officers, employees, and agents from and against claims, liabilities, damages, losses, and expenses arising out of or related to your use of the Services, your violation of these Terms, or your infringement of any rights of another.`,
                ]}
              />

              <PolicySection
                id="additional-provisions"
                title="7. Additional Provisions"
                paragraphs={[
                  `These Terms, together with any policies or additional terms referenced herein, constitute the entire agreement between you and ARCANES regarding the Services and supersede prior or contemporaneous understandings.`,
                  `If any provision of these Terms is held to be invalid or unenforceable, the remaining provisions will remain in full force and effect.`,
                ]}
                bullets={[
                  `ARCanes may modify these Terms from time to time. If changes are material, we may provide notice by posting an updated version or by other reasonable means.`,
                  `Your continued use of the Services after the updated Terms become effective constitutes acceptance of the revised Terms.`,
                  `ARCanes may suspend or terminate access to the Services at any time if necessary to protect the Services, comply with legal obligations, or address misuse.`,
                  `Failure by ARCANES to enforce any provision of these Terms will not be deemed a waiver of that provision.`,
                ]}
                extraTitle="Governing law and dispute resolution:"
                extraBullets={[
                  `These Terms will be governed by and construed in accordance with the laws specified in the applicable service documentation or business agreement, without regard to conflict of laws principles.`,
                  `Any disputes arising out of or relating to these Terms or the Services will be resolved in the courts or dispute forums designated by ARCANES or the applicable agreement, subject to mandatory local law.`,
                ]}
              />

              <PolicySection
                id="contact"
                title="Contact"
                paragraphs={[
                  `Questions about these Terms may be directed through the appropriate contact methods made available by ARCANES.`,
                ]}
              />

              <div className="mt-12 border-t border-[#ece6ff] pt-6">
                <Link
                  href="/privacy-policy"
                  className="text-sm font-medium text-[#7A00FF] transition hover:text-violet-700"
                >
                  ← Back to Privacy Policy
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}

function PolicySection({
  id,
  title,
  paragraphs,
  bullets,
  extraTitle,
  extraBullets,
  paragraphsAfter,
}: {
  id: string;
  title: string;
  paragraphs: string[];
  bullets?: string[];
  extraTitle?: string;
  extraBullets?: string[];
  paragraphsAfter?: string[];
}) {
  return (
    <section id={id} className="scroll-mt-28">
      <h2 className="text-[22px] font-bold tracking-[-0.03em] text-slate-950 md:text-[26px]">
        {title}
      </h2>

      <div className="mt-5 space-y-4 text-[15px] leading-8 text-slate-600 md:text-[16px]">
        {paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>

      {bullets && (
        <ul className="mt-5 space-y-3 pl-5 text-[15px] leading-8 text-slate-600 md:text-[16px]">
          {bullets.map((bullet) => (
            <li key={bullet} className="list-disc">
              {bullet}
            </li>
          ))}
        </ul>
      )}

      {extraTitle && (
        <p className="mt-6 text-[15px] font-semibold text-slate-800 md:text-[16px]">
          {extraTitle}
        </p>
      )}

      {extraBullets && (
        <ul className="mt-4 space-y-3 pl-5 text-[15px] leading-8 text-slate-600 md:text-[16px]">
          {extraBullets.map((bullet) => (
            <li key={bullet} className="list-disc">
              {bullet}
            </li>
          ))}
        </ul>
      )}

      {paragraphsAfter && (
        <div className="mt-5 space-y-4 text-[15px] leading-8 text-slate-600 md:text-[16px]">
          {paragraphsAfter.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      )}

      <div className="mt-10 border-b border-[#ece6ff]" />
    </section>
  );
}