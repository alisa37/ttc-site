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
    "Play competitive and social tennis in Tokyo. Join an international tennis community offering singles, doubles, team competitions, and tennis camps for intermediate and advanced players.",

  keywords: [
    "Tokyo tennis",
    "tennis Tokyo",
    "tennis club Tokyo",
    "international tennis Tokyo",
    "play tennis in Tokyo",
    "Tokyo tennis community",
    "Tokyo tennis events",
    "tennis meetup Tokyo",
    "expat tennis Tokyo",
    "singles tennis Tokyo",
    "doubles tennis Tokyo",
    "tennis camp Tokyo",
    "Tokyo Tennis Club",
  ],

  applicationName: "Tokyo Tennis Club",

  alternates: {
    canonical: "https://tokyo-tennis-club.com",
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    title: "Tokyo Tennis Club | International Tennis Community in Tokyo",

    description:
      "Play competitive and social tennis in Tokyo. Join singles, doubles, team competitions, and tennis camps with players from around the world.",

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

    title: "Tokyo Tennis Club | International Tennis Community in Tokyo",

    description:
      "Play competitive and social tennis in Tokyo. Join singles, doubles, team competitions, and tennis camps.",

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