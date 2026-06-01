import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-neutral-100 mt-auto">
      <div className="max-w-3xl mx-auto px-6 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-5">

          {/* Copyright */}
          <p className="text-xs text-neutral-400 order-2 sm:order-1">
            © {new Date().getFullYear()} Staal Tutoring · Tex Staal
          </p>

          {/* Nav links */}
          <nav className="flex items-center flex-wrap justify-center gap-x-4 gap-y-2 order-1 sm:order-2">
            <Link href="/about"   className="text-xs text-neutral-400 hover:text-[#4b58ff] transition-colors duration-200">About</Link>
            <Link href="/pricing" className="text-xs text-neutral-400 hover:text-[#4b58ff] transition-colors duration-200">Pricing</Link>
            <Link href="/contact" className="text-xs text-neutral-400 hover:text-[#4b58ff] transition-colors duration-200">Contact</Link>
            <span className="text-neutral-200 hidden sm:inline">·</span>
            <Link href="/terms"   className="text-xs text-neutral-400 hover:text-[#4b58ff] transition-colors duration-200">Terms of Use</Link>
            <Link href="/privacy" className="text-xs text-neutral-400 hover:text-[#4b58ff] transition-colors duration-200">Privacy &amp; Cookies</Link>
          </nav>

        </div>
      </div>
    </footer>
  );
}
