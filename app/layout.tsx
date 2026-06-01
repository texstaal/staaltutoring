import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Staal Tutoring",
  description: "Online video lectures and course materials for Finance & Business students. Learn at your own pace with structured Learning Units.",
  openGraph: {
    title: "Staal Tutoring",
    description: "Online video lectures and course materials for Finance & Business students.",
    siteName: "Staal Tutoring",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Staal Tutoring",
    description: "Online video lectures and course materials for Finance & Business students.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
