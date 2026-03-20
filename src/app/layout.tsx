import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Safety Certifications — MARCOM Industrial Safety Training",
  description:
    "Adaptive industrial safety certification exams with remediation-based learning, aligned to OSHA standards.",
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
