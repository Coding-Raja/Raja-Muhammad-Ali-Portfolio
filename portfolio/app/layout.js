import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/Header.js";
import Footer from "../components/Footer.js";
import { Analytics } from '@vercel/analytics/react';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Raja Muhammad ali - Portfolio | Web Developer & Designer",
  description: "Professional portfolio of Your Name - Web Developer, Designer. Expertise in React, Next.js, JavaScript, and modern web development. View my projects and skills.",
  keywords: "web developer, portfolio, react developer, next.js, javascript, frontend developer, web designer, fullstack developer",
  authors: [{ name: "Your Name" }],
  openGraph: {
    title: "Raja Muhammad Ali - Portfolio | Web Developer & Designer",
    description: "Professional portfolio showcasing projects in web development, design, and programming",
    url: "https://raja-muhammad-ali-portfolio-pzyixcknf.vercel.app",
    siteName: "Your Name Portfolio",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Raja Muhammad Ali - Portfolio | Web Developer",
    description: "Web Developer specializing in React, Next.js and modern web technologies",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: {
      url: '/Hacker.png',
      type: 'image/png',
    }
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}