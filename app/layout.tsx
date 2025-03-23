import type React from "react";
import "@/app/globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Luminosa - From Idea to MVP. Fast.",
  description:
    "We build scalable, investor-ready products and revamp codebases to help you scale with confidence.",
  icons: "/lli.jpg",
  openGraph: {
    title: "Luminosa - From Idea to MVP. Fast.",
    description:
      "We build scalable, investor-ready products and revamp codebases to help you scale with confidence.",
    type: "website",
    url: "https://yourwebsite.com",
    image: "/lli.jpg",
  },
  twitter: {
    card: "summary_large_image",
    title: "Luminosa - From Idea to MVP. Fast.",
    description:
      "We build scalable, investor-ready products and revamp codebases to help you scale with confidence.",
    image: "/lli.jpg",
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
        <link rel="icon" href="/lli.jpg" type="image/jpeg" />
        <meta name="description" content={metadata.description} />
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:type" content={metadata.openGraph.type} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:image" content={metadata.openGraph.image} />
        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content={metadata.twitter.card} />
        <meta name="twitter:title" content={metadata.twitter.title} />
        <meta name="twitter:description" content={metadata.twitter.description} />
        <meta name="twitter:image" content={metadata.twitter.image} />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
