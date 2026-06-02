export const metadata: Metadata = {
  metadataBase: new URL("https://tokyo-tennis-club.com"),

  title: "Tokyo Tennis Club | Competitive & Social Tennis in Tokyo",

  description:
    "Join Tokyo Tennis Club, an international tennis community in Tokyo offering competitive and social tennis events for intermediate and advanced players.",

  applicationName: "Tokyo Tennis Club",

  alternates: {
    canonical: "https://tokyo-tennis-club.com",
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