import type { Metadata } from "next";
import "./globals.css";
import { AdSenseScript } from "@/components/AdSense";

export const metadata: Metadata = {
  title: "Bhajans - Hindu Festivals, Gods & Sacred Songs",
  description: "Discover the rich heritage of Hindu culture through festivals, deities, bhajans, and aartis. Complete repository of authentic devotional content.",
  keywords: "Hindu festivals, bhajans, aartis, Diwali, Holi, Ganesha, Krishna, devotional songs",
  authors: [{ name: "Bhajans" }],
  openGraph: {
    title: "Bhajans - Hindu Festivals, Gods & Sacred Songs",
    description: "Discover the rich heritage of Hindu culture through festivals, deities, bhajans, and aartis.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <AdSenseScript />
      </head>
      <body className="antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
