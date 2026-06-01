import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Privacy & Cookies – Staal Tutoring",
  description: "How Staal Tutoring handles your data and cookies.",
};

const LAST_UPDATED = "June 2026";

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-8">
      <h2 className="text-sm font-bold text-neutral-900 mb-3">{title}</h2>
      <div className="text-sm text-neutral-600 leading-[1.85] space-y-3">{children}</div>
    </section>
  );
}

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <header className="border-b border-neutral-100 px-6 py-4 flex items-center justify-between bg-white">
        <Link href="/language">
          <Image src="/logo.svg" alt="Staal Tutoring" width={110} height={44} />
        </Link>
        <Link href="/contact"
          className="text-xs font-medium text-neutral-400 hover:text-[#4b58ff] transition-colors duration-200
                     rounded-lg px-2.5 py-1.5 hover:bg-[#4b58ff]/5">
          Contact
        </Link>
      </header>

      {/* Content */}
      <div className="flex-1 max-w-2xl mx-auto w-full px-6 py-14">

        <div className="mb-10">
          <p className="text-xs font-semibold tracking-widest uppercase text-[#4b58ff] mb-2">Legal</p>
          <h1 className="text-2xl font-bold text-neutral-900 tracking-tight mb-2">Privacy &amp; Cookies</h1>
          <p className="text-xs text-neutral-400">Last updated: {LAST_UPDATED}</p>
        </div>

        <Section title="1. Who We Are">
          <p>
            Staal Tutoring is operated by Tex Staal, based in the Netherlands. We are the controller of
            any personal data processed through this website.
          </p>
          <p>
            Contact:{" "}
            <a href="mailto:texstaal@gmail.com" className="text-[#4b58ff] hover:underline">texstaal@gmail.com</a>
          </p>
        </Section>

        <Section title="2. What Data We Collect">
          <p>We keep data collection to an absolute minimum. Here is exactly what we process:</p>

          <div className="rounded-xl border border-neutral-100 overflow-hidden">
            {[
              {
                name: "Session cookie",
                purpose: "Keeps you logged in to a course after entering your password. Required for the platform to function.",
                retention: "Until your browser session ends (deleted on close)",
                basis: "Legitimate interest — strictly necessary",
              },
              {
                name: "Local storage (device only)",
                purpose: "Saves your Learning Unit progress (which LUs you've marked as complete). Stored only on your device — never sent to our servers.",
                retention: "Until you clear your browser storage",
                basis: "Legitimate interest — functional",
              },
              {
                name: "Contact messages",
                purpose: "If you email or WhatsApp us, your message and contact details are stored within those external services (Gmail, WhatsApp) under their own privacy policies.",
                retention: "Per Gmail / WhatsApp policies",
                basis: "Legitimate interest — responding to enquiries",
              },
            ].map((row, i) => (
              <div key={row.name} className={`p-4 ${i > 0 ? "border-t border-neutral-100" : ""}`}>
                <p className="text-xs font-semibold text-neutral-800 mb-1">{row.name}</p>
                <p className="text-xs text-neutral-500 mb-1"><strong>Purpose:</strong> {row.purpose}</p>
                <p className="text-xs text-neutral-500 mb-1"><strong>Retention:</strong> {row.retention}</p>
                <p className="text-xs text-neutral-500"><strong>Legal basis:</strong> {row.basis}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section title="3. Cookies">
          <p>
            This website uses <strong>one strictly necessary cookie</strong> — a session cookie that authenticates your
            access to password-protected course content. This cookie is required for the platform to function and does
            not require your consent under the ePrivacy Directive.
          </p>
          <p>
            We do <strong>not</strong> use any tracking, advertising, analytics, or third-party cookies.
            We do <strong>not</strong> use Google Analytics, Facebook Pixel, or any other third-party scripts.
          </p>
        </Section>

        <Section title="4. Data Sharing">
          <p>
            We do not sell, rent, or share your personal data with third parties, except as required by
            law or to comply with a legal obligation.
          </p>
        </Section>

        <Section title="5. Your Rights (GDPR)">
          <p>
            Under the General Data Protection Regulation (GDPR), if you are located in the EU/EEA, you have the right to:
          </p>
          <ul className="list-disc list-inside space-y-1 text-sm text-neutral-600 pl-1">
            <li>Access the personal data we hold about you</li>
            <li>Request correction of inaccurate data</li>
            <li>Request deletion of your data</li>
            <li>Object to processing</li>
            <li>Lodge a complaint with the Dutch Data Protection Authority (Autoriteit Persoonsgegevens)</li>
          </ul>
          <p>
            To exercise any of these rights, email us at{" "}
            <a href="mailto:texstaal@gmail.com" className="text-[#4b58ff] hover:underline">texstaal@gmail.com</a>.
            We will respond within 30 days.
          </p>
        </Section>

        <Section title="6. Security">
          <p>
            Course access is protected by encrypted session cookies (using industry-standard AES-256 encryption).
            All data is transmitted over HTTPS. Progress data is stored locally on your own device only.
          </p>
        </Section>

        <Section title="7. Changes to This Policy">
          <p>
            We may update this policy from time to time. The date at the top of this page will reflect the
            latest revision. Continued use of the platform constitutes acceptance of the updated policy.
          </p>
        </Section>

      </div>

      <Footer />
    </main>
  );
}
