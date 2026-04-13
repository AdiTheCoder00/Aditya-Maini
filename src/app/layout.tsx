import type { Metadata } from "next";
import { Manrope, Inter } from "next/font/google";
import "./globals.css";
import ScrollProgress from "@/components/ScrollProgress";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aditya Maini | Full-Stack Developer & AI Enthusiast",
  description:
    "Portfolio of Aditya Maini — Full-Stack Developer, AI Enthusiast, and Competitive Programmer building high-performance digital experiences with precision and elegance.",
  keywords: [
    "Full-Stack Developer",
    "AI Enthusiast",
    "React",
    "Next.js",
    "Python",
    "Portfolio",
    "Aditya Maini",
  ],
  openGraph: {
    title: "Aditya Maini | Full-Stack Developer & AI Enthusiast",
    description:
      "Full-Stack Developer and AI Enthusiast building high-performance systems with the precision of a competitive programmer.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${manrope.variable} ${inter.variable} font-body antialiased`}
      >
        <ScrollProgress />
        {children}
      </body>
    </html>
  );
}
