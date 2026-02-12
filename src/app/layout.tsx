import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ForkliftMastery — OSHA 1910.178 Certification Exam",
  description:
    "Adaptive forklift certification exam with remediation-based learning, aligned to OSHA Standard 1910.178 (Powered Industrial Trucks).",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-industrial-50 text-industrial-900 antialiased">
        {children}
      </body>
    </html>
  );
}
