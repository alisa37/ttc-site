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
          }),
        }}
      />

      <main>
        <section
          className="min-h-screen flex items-center justify-center text-center text-white bg-cover bg-center"
          style={{
            backgroundImage: "url('/hero.jpg')",
          }}
        >
          <div className="bg-black/60 p-8 rounded-3xl">
            <h1 className="text-5xl font-bold">
              Play Competitive & Social Tennis in Tokyo
            </h1>

            <p className="mt-6 text-xl">
              International tennis community for intermediate & advanced
              players.
            </p>

            <a
              href="https://www.meetup.com/tokyo-tennis-club/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-8 bg-white text-black px-8 py-4 rounded-full font-semibold"
            >
              Join Tokyo Tennis Club
            </a>
          </div>
        </section>
      </main>
    </>
  );
}