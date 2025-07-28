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
  title: "Ghaith Slama - Full Stack Developer",
  description: "Full Stack Developer specializing in Java Spring Boot, Next.js, Python Django, C#, Angular, and modern web technologies. Building innovative digital solutions.",
  keywords: "Full Stack Developer, Java, Spring Boot, Next.js, React, Angular, Python, Django, C#, MySQL, PostgreSQL, Web Development",
  authors: [{ name: "Ghaith Slama" }],
  icons: {
    icon: [
      { url: "/logo.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" }
    ],
    apple: "/logo.svg",
  },
  openGraph: {
    title: "Ghaith Slama - Full Stack Developer",
    description: "Full Stack Developer specializing in modern web technologies",
    type: "website",
    images: [{ url: "/logo.svg" }],
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
