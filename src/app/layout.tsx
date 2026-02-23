import "./globals.css";
import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import GoogleAdSense from "@/components/GoogleAdsense";
import JsonLd from "./JsonLd";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "JSON Animation Viewer - Preview Your JSON Animations",
  description:
    "Easily preview your JSON animations with our user-friendly JSON Animation Viewer. Drag and drop your JSON files to see them in action instantly!",
  keywords:
    "JSON, json animation viewer, json viewer, Lottie, lottie viewer, animation preview, lottie json preview, json animation preview tool",
  authors: [{ name: "lbo728", url: "https://github.com/lbo728" }],
  creator: "lbo728",
  publisher: "JSON Animation Viewer",
  formatDetection: {
    email: false,
    telephone: false,
    address: false,
  },
  metadataBase: new URL("https://json-animation-viewer.vercel.app"),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "JSON Animation Viewer - Preview Your JSON Animations",
    description:
      "Easily preview your JSON animations with our user-friendly JSON Animation Viewer. Drag and drop your JSON files to see them in action!",
    type: "website",
    url: "https://json-animation-viewer.vercel.app",
    siteName: "JSON Animation Viewer",
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "JSON Animation Viewer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "JSON Animation Viewer - Preview Your JSON Animations",
    description: "Easily preview your JSON animations with our user-friendly JSON Animation Viewer.",
    images: ["/og-image.png"],
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        <GoogleAdSense />
        <JsonLd />
      </body>
    </html>
  );
}
