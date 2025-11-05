import type { Metadata } from "next";
import { Barlow, Barlow_Condensed, Bellefair } from "next/font/google";
import "./globals.css";
import Header from "./Header";
import Link from "next/link";
import BodyClass from "./BodyClass";

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-barlow",
  fallback: ["sans-serif"],
});

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-barlow-condensed",
  fallback: ["sans-serif"],
});

const bellefair = Bellefair({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-bellefair",
  fallback: ["serif"],
});

export const metadata: Metadata = {
  title: "Space Tourism Website",
  description: "A website of a space tourism company",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const fontClasses = `${barlow.variable} ${barlowCondensed.variable} ${bellefair.variable}`;
  return (
    <html lang="en">
      <BodyClass fontClasses={fontClasses}>
        <Link className="skip-to-content" href="#main">
          Skip to content
        </Link>
        <Header />
        {children}
      </BodyClass>
    </html>
  );
}
