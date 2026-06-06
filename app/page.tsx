import Script from "next/script";

export default function Home() {
  return (
    <>
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SportsOrganization",
            name: "Tokyo Tennis Club",
            url: "https://tokyo-tennis-club.com",
            logo: "https://tokyo-tennis-club.com/favicon.ico",
            description:
              "International tennis community in Tokyo for intermediate and advanced players.",
            address: {
              "@type": "PostalAddress",
              streetAddress: "3-14-11 Minami-aoyama",
              addressLocality: "Minato-ku",
              addressRegion: "Tokyo",
              postalCode: "107-0062",
              addressCountry: "JP",
            },
            sameAs: [
              "https://www.meetup.com/tokyo-tennis-club/",
            ],
          }),
        }}
      />

      <main className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth bg-white text-black">
        {/* あなたのPAGE1〜PAGE3 */}
      </main>
    </>
  );
}