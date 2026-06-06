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
            sameAs: ["https://www.meetup.com/tokyo-tennis-club/"],
          }),
        }}
      />

      <main className="bg-white text-black">

        {/* HERO */}
        <section
          className="hero min-h-screen flex items-center justify-center px-6 text-center text-white"
        >
          <div className="max-w-4xl rounded-3xl bg-black/60 p-6 md:p-10">
            <h1 className="text-4xl font-bold md:text-7xl">
              Play Competitive & Social Tennis in Tokyo
            </h1>

            <p className="mt-6 text-lg text-gray-200">
              International tennis community for intermediate & advanced players.
            </p>

            <a
              href="https://www.meetup.com/tokyo-tennis-club/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-block rounded-full bg-white px-8 py-4 font-semibold text-black"
            >
              Join Tokyo Tennis Club
            </a>
          </div>
        </section>

        {/* PAGE 2 */}
        <section className="min-h-screen flex items-center justify-center bg-white px-6">
          <div className="max-w-5xl text-center">
            <h2 className="text-4xl font-bold">What is Tokyo Tennis Club?</h2>

            <p className="mt-8 text-lg text-gray-600">
              Tokyo Tennis Club is an international tennis community in Tokyo
              that brings together players from around the world for
              competitive and social tennis events.
            </p>
          </div>
        </section>

      </main>
    </>
  );
}