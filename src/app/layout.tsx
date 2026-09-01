import type { Metadata } from "next";
import { Geist, Geist_Mono, Syne } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: "SportsClub - Premium Sports Facility Booking",
    template: "%s | SportsClub",
  },
  description: "Book premium football turfs, cricket nets, and badminton courts online. Real-time slot availability, instant booking confirmation, and the best sports facilities in town.",
  keywords: ["sports booking", "turf booking", "football turf", "cricket nets", "badminton court", "sports facility"],
  authors: [{ name: "SportsClub" }],
  openGraph: {
    type: "website",
    siteName: "SportsClub",
    title: "SportsClub - Premium Sports Facility Booking",
    description: "Book premium football turfs, cricket nets, and badminton courts online.",
  },
  twitter: {
    card: "summary_large_image",
    title: "SportsClub - Premium Sports Facility Booking",
    description: "Book premium football turfs, cricket nets, and badminton courts online.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} ${syne.variable} antialiased`}>
      <body className="min-h-screen flex flex-col bg-background text-foreground">
        <Navigation />
        <main className="flex-grow pt-16 md:pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
