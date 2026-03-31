// app/privacy-policy/page.tsx
import Link from "next/link";

const contents = [
  { id: "introduction", label: "Introduction" },
  { id: "information-we-collect", label: "Personal Data We Collect, Why We Process It, and the Legal Basis" },
  { id: "information-you-provide", label: "Information You Provide to Us" },
  { id: "information-collected-automatically", label: "Information We Collect Automatically" },
  { id: "cookies", label: "Cookies, Pixels, and Similar Technologies" },
  { id: "wallet", label: "Information from Third-Party Wallet Extensions or Connections" },
  { id: "job-applications", label: "When You Apply for a Job" },
  { id: "your-rights", label: "Your Rights" },
  { id: "sharing", label: "Sharing of Personal Data" },
  { id: "international-transfers", label: "International Data Transfers" },
  { id: "retention", label: "Retention" },
  { id: "children", label: "Children’s Privacy" },
  { id: "security", label: "Security Measures" },
  { id: "cookies-retained", label: "Cookies, Scripts, and Related Technologies" },
  { id: "social-media", label: "Social Media and Other Third-Party Websites" },
  { id: "changes", label: "Periodic Reviews and Updates to This Policy" },
  { id: "contact", label: "Contact" },
];

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-[#f7f5ff] text-slate-950">
      <section className="border-b border-[#ece6ff] bg-white">
        <div className="mx-auto w-full max-w-[1120px] px-6 py-14 md:px-8 md:py-16">
          <div className="max-w-[760px]">
            <p className="text-[11px] font-semibold tracking-[0.24em] text-[#7A00FF]">
              Legal
            </p>

            <h1 className="mt-4 text-[34px] font-extrabold leading-[1.04] tracking-[-0.045em] text-slate-950 md:text-[48px]">
              Privacy Policy
            </h1>

            <p className="mt-5 max-w-[760px] text-[15px] leading-8 text-slate-600 md:text-[16px]">
              This Privacy Policy explains how ARCANES collects, uses, discloses, and
              safeguards personal data when you access our website, products,
              communications, and related services.
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
                  `This Privacy Policy ("Policy") for ARCANES and its affiliates (collectively, "ARCANES", "we", "our", or "us") describes the types of information we collect from and about you in connection with our services and how we process that information. "Services" may include our website, web applications, products, hosted services, communications, and any other digital offerings that link to or reference this Policy.`,
                  `Please read this Policy carefully so that you understand your rights in relation to your personal data and how we collect, use, disclose, and safeguard it. If you do not agree with this Policy, please do not use our services, interact with us, or otherwise provide information to ARCANES.`,
                ]}
              />

              <PolicySection
                id="information-we-collect"
                title="Personal Data We Collect, Why We Process It, and the Legal Basis"
                paragraphs={[
                  `When you access, use, connect to, or interact with our Services, we may collect certain categories of information about you, including personal data. This may vary depending on how you engage with us.`,
                ]}
              />

              <PolicySection
                id="information-you-provide"
                title="1) Information You Provide to Us"
                paragraphs={[
                  `We may collect the following categories of personal data that you voluntarily provide:`,
                ]}
                bullets={[
                  `Account and identification data — for example name, business email address, username, wallet address, and organization details.`,
                  `Government or verification data — where permitted, documentation used for KYC/AML or eligibility checks.`,
                  `Support and communication data — such as support requests, correspondence, meeting records, and other direct interactions.`,
                  `Financial and transactional information — where needed for billing, payments, or business records.`,
                  `Profile and preferences — such as account settings, product choices, and communication preferences.`,
                  `Communications — content of correspondence you send to us and any associated metadata.`,
                ]}
                extraTitle="Purposes and legal bases:"
                extraBullets={[
                  `Performance of contract — to provide the Services you request, including onboarding, support, and account management.`,
                  `Consent — where you choose to opt in to specific communications or features.`,
                  `Legitimate interests — including product improvement, internal administration, security, and customer relationship management.`,
                  `Legal obligations — where processing is necessary to comply with law, regulation, or lawful requests.`,
                ]}
              />

              <PolicySection
                id="information-collected-automatically"
                title="2) Information We Collect Automatically"
                paragraphs={[
                  `When you use the website or Services, we may automatically collect certain technical and usage information, including:`,
                ]}
                bullets={[
                  `IP address and approximate geolocation derived from it.`,
                  `Browser type, device identifiers, operating system, and configuration data.`,
                  `Pages visited, clickstream activity, referrer URLs, timestamps, and session duration.`,
                  `Diagnostic logs, crash data, latency data, and performance telemetry.`,
                  `Information related to cookies, pixels, SDKs, and similar technologies.`,
                ]}
                extraTitle="Purposes and legal bases:"
                extraBullets={[
                  `Provide and improve service functionality and website performance.`,
                  `Ensure stability and monitor system health.`,
                  `Protect against fraud, abuse, account compromise, and security incidents.`,
                  `Measure engagement, understand feature usage, and optimize product experiences.`,
                ]}
              />

              <PolicySection
                id="cookies"
                title="Cookies, Pixels, and Similar Technologies"
                paragraphs={[
                  `We and our partners may use cookies, pixels, local storage, SDKs, and similar technologies. These technologies help us operate the website, remember preferences, measure engagement, protect accounts, and improve performance.`,
                  `You can control cookies through your browser settings. Depending on your location, you may also be given consent choices through a cookie banner or preferences center. Disabling certain technologies may affect website functionality.`,
                ]}
              />

              <PolicySection
                id="wallet"
                title="Information from Third-Party Wallet Extensions or Connections"
                paragraphs={[
                  `Certain features may permit connecting a compatible third-party wallet. When you use such features, wallet-related identifiers and public blockchain data may be processed in connection with your use of our Services.`,
                  `Wallet data may include public wallet addresses, transaction hashes, digital signatures, or related metadata. We do not control how third-party wallet providers collect or process your information, so you should review their policies separately.`,
                ]}
              />

              <PolicySection
                id="job-applications"
                title="When You Apply for a Job"
                paragraphs={[
                  `If you apply for a role, we may collect professional and application-related information such as your resume, employment history, education, references, publicly available professional profiles, interview notes, and any other information you choose to submit.`,
                  `We process this information to assess candidacy, communicate about opportunities, comply with employment-related obligations, and manage recruitment operations.`,
                ]}
              />

              <PolicySection
                id="your-rights"
                title="Your Rights"
                paragraphs={[
                  `Depending on your jurisdiction, you may have rights regarding your personal data, including the right to:`,
                ]}
                bullets={[
                  `Access — obtain a copy of personal data we hold about you.`,
                  `Rectification — correct inaccurate or incomplete personal data.`,
                  `Erasure — request deletion of certain personal data.`,
                  `Restriction — request limits on processing in certain circumstances.`,
                  `Portability — receive data in a portable format where applicable.`,
                  `Objection — object to processing based on legitimate interests or direct marketing.`,
                  `Withdraw consent — where processing is based on consent.`,
                ]}
                paragraphsAfter={[
                  `To exercise available rights, please contact us using the details below. We may need to verify your identity before responding. Some rights may be limited where exceptions or lawful retention requirements apply.`,
                ]}
              />

              <PolicySection
                id="sharing"
                title="Sharing of Personal Data"
                paragraphs={[
                  `We may share your personal information in the following circumstances:`,
                ]}
                bullets={[
                  `Service providers and vendors — including hosting, infrastructure, analytics, communications, customer support, and security vendors.`,
                  `Professional advisers — including lawyers, auditors, insurers, and consultants.`,
                  `Affiliates and group companies — where relevant for internal administration and service delivery.`,
                  `Legal and regulatory authorities — where disclosure is required by law, subpoena, court order, or to protect rights and safety.`,
                  `Corporate transaction participants — in connection with mergers, acquisitions, financing, bankruptcy, or reorganization.`,
                ]}
              />

              <PolicySection
                id="international-transfers"
                title="International Data Transfers"
                paragraphs={[
                  `Your personal data may be transferred to, stored in, or processed in countries outside your jurisdiction. Where required, we implement appropriate safeguards for international transfers in accordance with applicable law.`,
                ]}
              />

              <PolicySection
                id="retention"
                title="Retention"
                paragraphs={[
                  `We retain personal data for as long as needed to provide the Services, maintain business and legal records, resolve disputes, enforce agreements, protect the security of our systems, and comply with legal obligations.`,
                  `Retention periods vary based on the type of information, the purpose of collection, and applicable requirements. When no longer needed, data may be deleted, anonymized, or archived where lawful.`,
                ]}
              />

              <PolicySection
                id="children"
                title="Children’s Privacy"
                paragraphs={[
                  `Our Services are not directed to children, and we do not knowingly collect personal data from children in violation of applicable law. If you believe a child has provided us with personal information, please contact us so that we can review and address the matter appropriately.`,
                ]}
              />

              <PolicySection
                id="security"
                title="Security Measures"
                paragraphs={[
                  `We implement appropriate technical and organizational measures designed to protect personal data against accidental or unlawful destruction, loss, alteration, unauthorized disclosure, or access. However, no system can be guaranteed to be fully secure, and information transmitted over the internet may be intercepted or compromised.`,
                ]}
              />

              <PolicySection
                id="cookies-retained"
                title="Cookies, Scripts, and Related Technologies"
                paragraphs={[
                  `We and our partners may use browser and device technologies to support website operations, personalize experiences, measure performance, and improve security. These tools may collect information such as device type, browser settings, usage patterns, and interactions with pages or embedded content.`,
                  `Where required, consent choices will be presented before non-essential tracking technologies are activated.`,
                ]}
              />

              <PolicySection
                id="social-media"
                title="Social Media and Other Third-Party Websites"
                paragraphs={[
                  `Our website may contain links to social media services or third-party websites. We are not responsible for the privacy practices of those third parties. If you access external websites or services, their privacy terms and policies will apply.`,
                ]}
              />

              <PolicySection
                id="changes"
                title="Periodic Reviews and Updates to This Policy"
                paragraphs={[
                  `We may revise this Policy from time to time to reflect updates to our practices, technology, legal obligations, or business operations. When changes are made, we will update the “Last Updated” date above and, where required, provide additional notice.`,
                ]}
              />

              <PolicySection
                id="contact"
                title="Contact"
                paragraphs={[
                  `Questions or complaints about our privacy practices, your personal data, or this Privacy Policy may be directed through the appropriate contact methods made available by ARCANES.`,
                ]}
              />

              <div className="mt-12 border-t border-[#ece6ff] pt-6">
                <Link
                  href="/about-us"
                  className="text-sm font-medium text-[#7A00FF] transition hover:text-violet-700"
                >
                  ← Back to About Us
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