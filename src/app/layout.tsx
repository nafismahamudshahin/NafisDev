import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/header/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nafis Mahamud Shahin | Full-Stack Developer",
  description:
    "Portfolio of Nafis Mahamud Shahin, a full-stack web developer building modern web applications and reliable backend systems.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="relative isolate flex min-h-full flex-col bg-background">
        <div aria-hidden="true" className="site-ambient">
          <span className="site-ambient__glow site-ambient__glow--one" />
          <span className="site-ambient__glow site-ambient__glow--two" />
        </div>
        <Navbar></Navbar>
        <div className="relative z-10 flex flex-1 flex-col">
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
