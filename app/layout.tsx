import type { Metadata } from "next";
import { Playfair_Display, Poppins } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap"
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap"
});

export const metadata: Metadata = {
  title: "365 Days With You ❤️ — Galang & Azulia",
  description: "A little digital love letter for Galang & Azulia.",
  icons: { icon: "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>❤️</text></svg>" }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${poppins.variable}`}>{children}</body>
    </html>
  );
}