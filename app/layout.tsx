import type { Metadata } from "next";
import Script from "next/script";
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
  metadataBase: new URL("https://tokyo-tennis-club.com"),

  title: "Tokyo Tennis Club | Competitive & Social Tennis in Tokyo",

  description:
    "Join Tokyo Tennis Club, an international tennis community in Tokyo offering competitive and social tennis events for intermediate and advanced players.",

  applicationName: "Tokyo Tennis Club",

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Tokyo Tennis Club",
    description:
      "Competitive and social tennis events in Tokyo for intermediate and advanced players.",
    url: "https://tokyo-tennis-club.com",
    siteName: "Tokyo Tennis Club",
    images: [
      {
        url: "/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Tokyo Tennis Club",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Tokyo Tennis Club",
    description:
      "Competitive and social tennis events in Tokyo for intermediate and advanced players.",
    images: ["/hero.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-RJHL9JZ12C"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-RJHL9JZ12C');
          `}
        </Script>
      </body>
    </html>
  );
}