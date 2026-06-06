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

      <main className="min-h-screen bg-white text-black">
        {/* Hero Section */}
        <section
          className="flex min-h-screen flex-col items-center justify-center bg-cover bg-center px-6 text-center text-white"
          style={{
            backgroundImage: "url('/hero.jpg')",
          }}
        >
          <div className="rounded-3xl bg-black/60 p-6 backdrop-blur-sm md:p-10">
            <h1 className="max-w-4xl text-4xl font-bold leading-tight md:text-7xl">
              Play Competitive & Social Tennis in Tokyo
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-gray-200 md:text-xl">
              International tennis community for intermediate & advanced players.
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

        {/* About Section */}
        <section className="px-6 py-20 md:py-24">
          <div className="mx-auto max-w-5xl text-center">
            <h2 className="text-3xl font-bold md:text-4xl">
              What is Tokyo Tennis Club?
            </h2>

            <p className="mx-auto mt-8 max-w-3xl text-base leading-8 text-gray-600 md:text-lg">
              Tokyo Tennis Club is an international tennis community in Tokyo
              that brings together players from around the world for
              competitive and social tennis events.
            </p>

            <div className="mt-14 grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl bg-gray-100 p-6 md:p-8">
                <h3 className="text-xl font-semibold md:text-2xl">
                  🎾 Free Membership
                </h3>

                <p className="mt-4 text-gray-600">
                  Join our private tennis community for free and enjoy regular tennis events in Tokyo.
                </p>
              </div>

              <div className="rounded-2xl bg-gray-100 p-6 md:p-8">
                <h3 className="text-xl font-semibold md:text-2xl">
                  🌍 International Community
                </h3>

                <p className="mt-4 text-gray-600">
                  Meet passionate tennis players from around the world in a
                  welcoming and inclusive environment.
                </p>
              </div>

              <div className="rounded-2xl bg-gray-100 p-6 md:p-8">
                <h3 className="text-xl font-semibold md:text-2xl">
                  📍 Tokyo Locations
                </h3>

                <p className="mt-4 text-gray-600">
                  Play tennis across central Tokyo, including Azabu-juban, Ariake, Shiba Park, and more.
                </p>
              </div>

              <div className="rounded-2xl bg-gray-100 p-6 md:p-8">
                <h3 className="text-xl font-semibold md:text-2xl">
                  🤝 Friendly & Competitive Atmosphere
                </h3>

                <p className="mt-4 text-gray-600">
                  Enjoy competitive tennis while building friendships in a respectful and supportive community.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SEO Section */}
        <section className="bg-gray-50 px-6 py-20 md:py-24">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-center text-3xl font-bold md:text-4xl">
              International Tennis Community in Tokyo
            </h2>

            <p className="mt-8 text-lg leading-8 text-gray-700">
              Tokyo Tennis Club is one of the most active international tennis
              communities in Tokyo, connecting intermediate and advanced
              players through singles, doubles, team competitions, and tennis
              camps.
            </p>

            <p className="mt-6 text-lg leading-8 text-gray-700">
              We host tennis events throughout Tokyo, including Azabu-juban,
              Ariake, and Shiba Park, providing opportunities to improve your
              game, meet new people, and enjoy competitive match play.
            </p>

            <p className="mt-6 text-lg leading-8 text-gray-700">
              Whether you are a Tokyo resident, expat, traveler, or visiting
              tennis enthusiast, Tokyo Tennis Club offers a welcoming
              environment for singles, doubles, team competitions, and tennis
              camps throughout the year.
            </p>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-black px-6 py-20 text-center text-white md:py-24">
          <h2 className="text-3xl font-bold md:text-4xl">
            Ready to Play Tennis in Tokyo?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base text-gray-300 md:text-lg">
            Join Tokyo Tennis Club and play with tennis players from around the
            world.
          </p>

          <a
            href="https://www.meetup.com/tokyo-tennis-club/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block rounded-full bg-white px-7 py-3 text-base font-semibold text-black transition hover:opacity-80 md:px-8 md:py-4 md:text-lg"
          >
            Join Tokyo Tennis Club
          </a>
        </section>

        {/* Footer */}
        <footer className="border-t border-gray-200 px-6 py-10 text-center text-sm text-gray-500">
          <p>3-14-11 Minami-aoyama, Minato-ku, Tokyo, Japan</p>

          <p className="mt-3">
            Made with love by Tokyo Tennis Club
          </p>
        </footer>
      </main>
    </>
  );
}