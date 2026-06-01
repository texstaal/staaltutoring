import Image from "next/image";
import Link from "next/link";
import { languages } from "@/lib/courses";
import Footer from "@/components/Footer";

export default function LanguagePage() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <header className="px-6 py-4 flex items-center justify-end gap-1">
        <Link href="/about"
          className="text-xs font-medium text-neutral-400 hover:text-[#4b58ff] transition-colors duration-200
                     rounded-lg px-2.5 py-1.5 hover:bg-[#4b58ff]/5">
          About
        </Link>
        <Link href="/pricing"
          className="text-xs font-medium text-neutral-400 hover:text-[#4b58ff] transition-colors duration-200
                     rounded-lg px-2.5 py-1.5 hover:bg-[#4b58ff]/5">
          Pricing
        </Link>
        <Link href="/contact"
          className="text-xs font-medium text-neutral-400 hover:text-[#4b58ff] transition-colors duration-200
                     rounded-lg px-2.5 py-1.5 hover:bg-[#4b58ff]/5">
          Contact
        </Link>
      </header>

      {/* Center content */}
      <div className="flex-1 flex flex-col items-center justify-center px-4 py-8">
        <div className="mb-12">
          <Image src="/logo.svg" alt="Staal Tutoring" width={200} height={80} priority />
        </div>

        <div className="text-center mb-10">
          <h1 className="text-2xl font-semibold text-neutral-900 tracking-tight">
            Choose your language
          </h1>
          <p className="mt-2 text-sm text-neutral-400">
            All course content will be delivered in your selected language.
          </p>
        </div>

        <div className="flex gap-3 w-full max-w-[280px]">
          {languages.map((lang) => (
            <Link
              key={lang.id}
              href={`/${lang.id}`}
              className="group flex-1 flex flex-col items-center gap-3 py-8 rounded-2xl border border-neutral-200 bg-white
                         hover:border-[#4b58ff] hover:shadow-[0_4px_20px_rgba(75,88,255,0.12)]
                         transition-all duration-200"
            >
              <span className="text-[2rem] leading-none">{lang.flag}</span>
              <span className="text-sm font-medium text-neutral-700 group-hover:text-[#4b58ff] transition-colors duration-200">
                {lang.label}
              </span>
            </Link>
          ))}
        </div>

        <p className="mt-10 text-xs text-neutral-300">You can switch languages at any time.</p>
      </div>

      <Footer />
    </main>
  );
}
