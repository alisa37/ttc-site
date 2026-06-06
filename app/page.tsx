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
            sameAs: ["https://www.meetup.com/tokyo-tennis-club/"],
          }),
        }}
      />

      <main className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth bg-white text-black">
        {/* PAGE 1 */}
        <section
          className="snap-start h-screen flex items-center justify-center bg-cover bg-center px-6 text-center text-white"
          style={{
            backgroundImage: "url('/hero.jpg')",
          }}
        >
          <div className="rounded-3xl bg-black/60 p-6 backdrop-blur-sm md:p-10">
            <h1 className="max-w-4xl text-4xl font-bold leading-tight md:text-7xl">
              Play Competitive & Social Tennis in Tokyo
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-gray-200 md:text-xl">
              International tennis community for intermediate & advanced
              players.
            </p>

            <a
              href="https://www.meetup.com/tokyo-tennis-club/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-block rounded-full bg-white px-7 py-3 text-base font-semibold text-black transition hover:opacity-80 md:px-8 md:py-4 md:text-lg"
            >
              Join Tokyo Tennis Club
            </a>

            <p className="mt-8 text-sm text-gray-300">
              ↓ Scroll to learn more
            </p>
          </div>
        </section>

        {/* PAGE 2 */}
        <section className="snap-start h-screen flex items-center px-6 py-10">
          <div className="mx-auto max-w-5xl text-center">
            <h2 className="text-3xl font-bold md:text-5xl">
              What is Tokyo Tennis Club?
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-gray-600 md:text-lg">
              Tokyo Tennis Club is an international tennis community in Tokyo
              that brings together players from around the world for
              competitive and social tennis events.
            </p>

            <div className="mt-10 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl bg-gray-100 p-5">
                <h3 className="text-xl font-semibold">
                  🎾 Free Membership
                </h3>
                <p className="mt-3 text-gray-600">
                  Join our private tennis community for free.
                </p>
              </div>

              <div className="rounded-2xl bg-gray-100 p-5">
                <h3 className="text-xl font-semibold">
                  📍 Tokyo Locations
                </h3>
                <p className="mt-3 text-gray-600">
                  Play across central Tokyo including Ariake and Azabu.
                </p>
              </div>

              <div className="rounded-2xl bg-gray-100 p-5">
                <h3 className="text-xl font-semibold">
                  🌍 International Community
                </h3>
                <p className="mt-3 text-gray-600">
                  Meet players from around the world.
                </p>
              </div>

              <div className="rounded-2xl bg-gray-100 p-5">
                <h3 className="text-xl font-semibold">
                  🤝 Competitive & Social
                </h3>
                <p className="mt-3 text-gray-600">
                  Enjoy both competition and friendship.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* PAGE 3 */}
        <section className="snap-start h-screen bg-black text-white flex items-center justify-center px-6">
          <div className="max-w-4xl text-center">
            <h2 className="text-3xl font-bold md:text-5xl">
              International Tennis Community in Tokyo
            </h2>

            <p className="mt-8 text-lg leading-8 text-gray-300">
              Tokyo Tennis Club connects intermediate and advanced players
              through singles, doubles, team competitions, and tennis camps.
            </p>

            <p className="mt-6 text-lg leading-8 text-gray-300">
              Whether you are a resident, expat, traveler, or visiting player,
              you'll find a welcoming tennis community in Tokyo.
            </p>

            <a
              href="https://www.meetup.com/tokyo-tennis-club/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-block rounded-full bg-white px-8 py-4 text-lg font-semibold text-black transition hover:opacity-80"
            >
              Join Tokyo Tennis Club
            </a>

            <footer className="mt-12 text-sm text-gray-400">
              <p>3-14-11 Minami-aoyama, Minato-ku, Tokyo, Japan</p>
              <p className="mt-2">Made with love by Tokyo Tennis Club</p>
            </footer>
          </div>
        </section>
      </main>
    </>
  );
}