import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Pricing – Staal Tutoring",
  description: "Group and individual Finance tutoring packages. Flexible scheduling, expert guidance.",
};

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <header className="border-b border-neutral-100 px-6 py-4 flex items-center justify-between bg-white">
        <Link href="/language">
          <Image src="/logo.svg" alt="Staal Tutoring" width={110} height={44} />
        </Link>
        <div className="flex items-center gap-1">
          <Link href="/about"
            className="text-xs font-medium text-neutral-400 hover:text-[#4b58ff] transition-colors duration-200
                       rounded-lg px-2.5 py-1.5 hover:bg-[#4b58ff]/5">
            About
          </Link>
          <Link href="/contact"
            className="text-xs font-medium text-neutral-400 hover:text-[#4b58ff] transition-colors duration-200
                       rounded-lg px-2.5 py-1.5 hover:bg-[#4b58ff]/5">
            Contact
          </Link>
        </div>
      </header>

      {/* Content */}
      <div className="flex-1 max-w-2xl mx-auto w-full px-6 py-14">

        {/* Heading */}
        <div className="mb-10">
          <p className="text-xs font-semibold tracking-widest uppercase text-[#4b58ff] mb-2">Finance 2</p>
          <h1 className="text-2xl font-bold text-neutral-900 tracking-tight">Tutoring packages</h1>
          <p className="mt-2 text-sm text-neutral-400 leading-relaxed">
            Sessions typically start in <strong className="text-neutral-600">week 4</strong> of the current block.
            Choose the format that works best for you.
          </p>
        </div>

        {/* Package cards */}
        <div className="grid sm:grid-cols-2 gap-4 mb-10">

          {/* Group */}
          <div className="relative flex flex-col p-6 rounded-2xl border-2 border-[#4b58ff] bg-white overflow-hidden">
            {/* Popular badge */}
            <div className="absolute top-4 right-4">
              <span className="text-[10px] font-bold tracking-widest uppercase text-[#4b58ff] bg-[#4b58ff]/8 px-2.5 py-1 rounded-full">
                Popular
              </span>
            </div>

            <div className="w-9 h-9 rounded-xl bg-[#4b58ff]/8 flex items-center justify-center mb-5">
              <svg className="w-4 h-4 text-[#4b58ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                <path strokeLinecap="round" strokeLinejoin="round"
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>

            <h2 className="text-base font-bold text-neutral-900 mb-1">Group Sessions</h2>
            <p className="text-xs text-neutral-400 mb-5 leading-relaxed">Fixed package — learn together with other students.</p>

            <div className="mb-5">
              <span className="text-3xl font-black text-neutral-900">€500</span>
              <span className="text-sm text-neutral-400 ml-1">/ package</span>
            </div>

            <ul className="space-y-2.5 mb-6 flex-1">
              {[
                "9 lessons included",
                "2 hours per lesson",
                "18 hours of tuition total",
                "Fixed schedule",
                "Online video access included",
              ].map((f) => (
                <li key={f} className="flex items-center gap-2.5 text-xs text-neutral-600">
                  <svg className="w-3.5 h-3.5 text-[#4b58ff] shrink-0" viewBox="0 0 24 24" fill="currentColor">
                    <path fillRule="evenodd" clipRule="evenodd"
                      d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.707 7.293a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2.5-2.5a1 1 0 011.414-1.414L11 13.586l4.293-4.293a1 1 0 011.414 0z" />
                  </svg>
                  {f}
                </li>
              ))}
            </ul>

            <Link
              href="https://wa.me/31628363631?text=Hi%20Tex%2C%20I%27m%20interested%20in%20the%20group%20tutoring%20package%20for%20Finance%202."
              target="_blank" rel="noopener noreferrer"
              className="w-full text-center py-2.5 rounded-xl bg-[#4b58ff] text-white text-sm font-semibold
                         hover:bg-[#3a47ee] transition-colors duration-200">
              Reserve a spot
            </Link>
          </div>

          {/* Individual */}
          <div className="flex flex-col p-6 rounded-2xl border border-neutral-200 bg-white">
            <div className="w-9 h-9 rounded-xl bg-neutral-100 flex items-center justify-center mb-5">
              <svg className="w-4 h-4 text-neutral-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                <path strokeLinecap="round" strokeLinejoin="round"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>

            <h2 className="text-base font-bold text-neutral-900 mb-1">Individual Sessions</h2>
            <p className="text-xs text-neutral-400 mb-5 leading-relaxed">Fully flexible — book as many or as few hours as you need.</p>

            <div className="mb-5">
              <span className="text-3xl font-black text-neutral-900">€75</span>
              <span className="text-sm text-neutral-400 ml-1">/ hour</span>
            </div>

            <ul className="space-y-2.5 mb-6 flex-1">
              {[
                "No minimum commitment",
                "Flexible scheduling",
                "1-on-1 attention",
                "Focus on your weak spots",
                "Online video access included",
              ].map((f) => (
                <li key={f} className="flex items-center gap-2.5 text-xs text-neutral-600">
                  <svg className="w-3.5 h-3.5 text-neutral-400 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                    <path fillRule="evenodd" clipRule="evenodd"
                      d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.707 7.293a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2.5-2.5a1 1 0 011.414-1.414L11 13.586l4.293-4.293a1 1 0 011.414 0z" />
                  </svg>
                  {f}
                </li>
              ))}
            </ul>

            <Link
              href="https://wa.me/31628363631?text=Hi%20Tex%2C%20I%27m%20interested%20in%20individual%20tutoring%20for%20Finance%202."
              target="_blank" rel="noopener noreferrer"
              className="w-full text-center py-2.5 rounded-xl border border-neutral-200 text-neutral-700 text-sm font-semibold
                         hover:border-neutral-300 hover:text-neutral-900 transition-all duration-200">
              Get in touch
            </Link>
          </div>

        </div>

        {/* Note */}
        <div className="flex items-start gap-3 p-4 rounded-xl bg-[#4b58ff]/5 border border-[#4b58ff]/10">
          <svg className="w-4 h-4 text-[#4b58ff] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <p className="text-xs text-neutral-500 leading-relaxed">
            All packages include access to the online video lectures on this platform.
            Not sure which option fits you? <Link href="/contact" className="text-[#4b58ff] hover:underline font-medium">Send a message</Link> and we&apos;ll figure it out together.
          </p>
        </div>

      </div>

      <Footer />
    </main>
  );
}
