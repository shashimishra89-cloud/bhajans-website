import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Bhakti - A Sacred Space for Devotion",
  description: "All Bhakti Content. One Divine Place. Discover festivals, aartis, bhajans, mantras, and devotional stories in one sacred platform.",
  keywords: ["bhakti", "hindu festivals", "aartis", "bhajans", "chalisas", "mantras", "devotional", "hinduism", "spiritual"],
  authors: [{ name: "Bhakti" }],
  openGraph: {
    title: "Bhakti - A Sacred Space for Devotion",
    description: "All Bhakti Content. One Divine Place. Discover festivals, aartis, bhajans, mantras, and devotional stories.",
    type: "website",
  },
  other: {
    "google-adsense-account": "ca-pub-6946776427046584"
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6946776427046584"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </head>
      <body className="antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
