import type { Metadata } from "next";
import { Fraunces, Bitter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
  axes: ["opsz", "SOFT", "WONK"],
});

const bitter = Bitter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: {
    default: "Ferdows Farm — Halal-Certified Sheep, Goats & Cattle | Huntley, IL",
    template: "%s | Ferdows Farm",
  },
  description:
    "Ferdows Farm in Huntley, IL provides Halal-certified, ethically raised sheep, goats, and cattle. Farm-to-table livestock you can trust. Call (702) 354-7434.",
  keywords: [
    "Halal livestock",
    "Halal sheep",
    "Halal goats",
    "Halal cattle",
    "Huntley IL farm",
    "farm to table",
    "Ferdows Farm",
  ],
  openGraph: {
    title: "Ferdows Farm — Halal-Certified Livestock",
    description:
      "Ethically raised, Halal-certified sheep, goats, and cattle in Huntley, IL.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${bitter.variable}`}>
      <body className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
