import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://dzakiabrar.vercel.app"),
  title: "Muhammad Dzaki Abrar — Software & Web Developer",
  description: "Explore my projects in AI, Robotics, and Full-Stack Development.",
  openGraph: {
    title: "Muhammad Dzaki Abrar — Software & Web Developer",
    description: "Explore my projects in AI, Robotics, and Full-Stack Development.",
    url: "https://dzakiabrar.vercel.app",
    siteName: "Muhammad Dzaki Abrar Portfolio",
    images: [
      {
        url: "/images/image(4).webp",
        width: 800,
        height: 600,
        alt: "Muhammad Dzaki Abrar — Software & Web Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Dzaki Abrar — Software & Web Developer",
    description: "Explore my projects in AI, Robotics, and Full-Stack Development.",
    images: ["/images/image(4).webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
