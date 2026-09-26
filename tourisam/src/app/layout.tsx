import type { Metadata } from "next";
import { Great_Vibes, Manrope } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/booking/WhatsAppButton";
import { ScrollToTop } from "@/components/ui/ScrollToTop";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const greatVibes = Great_Vibes({
  weight: "400",
  variable: "--font-script",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tourm — Explore World",
  description: "Get unforgettable pleasure with us. Let's make your best trip with us.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${manrope.variable} ${greatVibes.variable} h-full antialiased`}>
      <body className={`${manrope.className} min-h-full bg-white text-[#113d48]`}>
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <WhatsAppButton />
          <ScrollToTop />
        </div>
      </body>
    </html>
  );
}
