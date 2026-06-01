import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Terms of Use – Staal Tutoring",
  description: "Terms and conditions for using Staal Tutoring's platform and tutoring services.",
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

export default function TermsPage() {
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
          <h1 className="text-2xl font-bold text-neutral-900 tracking-tight mb-2">Terms of Use</h1>
          <p className="text-xs text-neutral-400">Last updated: {LAST_UPDATED}</p>
        </div>

        <Section title="1. About Staal Tutoring">
          <p>
            Staal Tutoring is operated by Tex Staal, based in the Netherlands. By accessing this website or
            participating in tutoring sessions, you agree to these Terms of Use.
          </p>
          <p>
            For questions, contact us at{" "}
            <a href="mailto:texstaal@gmail.com" className="text-[#4b58ff] hover:underline">texstaal@gmail.com</a>.
          </p>
        </Section>

        <Section title="2. Access to Course Materials">
          <p>
            Course materials — including video lectures, PDF summaries, exercise files, and any other
            documents — are made available exclusively to students who have received a valid course password.
          </p>
          <p>
            Your course password is personal and non-transferable. Sharing your password or providing
            access to any third party who has not purchased the course is strictly prohibited and may
            result in immediate revocation of your access.
          </p>
        </Section>

        <Section title="3. Intellectual Property">
          <p>
            All content on this platform — including video recordings, written materials, exercises, and
            answer keys — is the intellectual property of Tex Staal / Staal Tutoring and is protected by
            copyright law.
          </p>
          <p>
            You may use the materials solely for your own personal study. You may not reproduce,
            distribute, publish, share, or sell any content from this platform in any form without
            prior written permission.
          </p>
          <p>
            Recording or screen-capturing video lectures for distribution is expressly prohibited.
          </p>
        </Section>

        <Section title="4. Tutoring Sessions">
          <p>
            Live tutoring sessions (group or individual) are subject to separate agreement on scheduling
            and pricing, as communicated directly. Payment is due before the start of the agreed sessions
            unless otherwise arranged in writing.
          </p>
          <p>
            Cancellations must be communicated at least 24 hours in advance. Late cancellations or
            no-shows may be charged in full at our discretion.
          </p>
        </Section>

        <Section title="5. Disclaimer">
          <p>
            Staal Tutoring provides educational support materials and tutoring services based on the best
            available knowledge. We do not guarantee any specific exam result or grade.
          </p>
          <p>
            The materials are intended as a supplement to your official course content. Always verify
            information against your institution&apos;s official curriculum and exam guidelines.
          </p>
        </Section>

        <Section title="6. Limitation of Liability">
          <p>
            To the fullest extent permitted by applicable law, Staal Tutoring shall not be liable for
            any indirect, incidental, or consequential damages arising from your use of the platform
            or tutoring services.
          </p>
        </Section>

        <Section title="7. Changes to These Terms">
          <p>
            We reserve the right to update these Terms of Use at any time. Continued use of the platform
            after changes are posted constitutes your acceptance of the revised terms.
          </p>
        </Section>

        <Section title="8. Governing Law">
          <p>
            These Terms are governed by the laws of the Netherlands. Any disputes arising from these
            Terms or your use of the platform shall be subject to the exclusive jurisdiction of the
            competent courts in the Netherlands.
          </p>
        </Section>

      </div>

      <Footer />
    </main>
  );
}
