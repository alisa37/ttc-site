"use client";

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
        {/* PAGE 1 */}
        <section className="relative h-screen snap-start flex items-center justify-center text-center text-white">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('/hero.jpg')",
            }}
          />

          <div className="absolute inset-0 bg-black/50" />

          <div className="relative z-10 px-4">
            <div className="mx-auto max-w-5xl rounded-3xl bg-black/30 p-6 backdrop-blur-sm md:p-10">
              <h1 className="text-3xl font-bold leading-tight sm:text-4xl md:text-7xl">
                Play Competitive & Social Tennis in Tokyo
              </h1>

              <p className="mx-auto mt-6 max-w-3xl text-base text-gray-200 md:text-xl">
                International tennis community for intermediate and advanced
                players.
              </p>

              <a
                href="https://www.meetup.com/tokyo-tennis-club/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-block rounded-full bg-white px-7 py-3 font-semibold text-black transition hover:opacity-80"
              >
                Join Tokyo Tennis Club
              </a>

              <p className="mt-10 text-sm text-gray-300">
                ↓ Swipe or Scroll
              </p>
            </div>
          </div>
        </section>

        {/* PAGE 2 */}
        <section className="h-screen snap-start flex items-center justify-center px-4">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-center text-3xl font-bold md:text-5xl">
              What is Tokyo Tennis Club?
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-center text-gray-600 md:text-lg">
              Tokyo Tennis Club is an international tennis community in Tokyo
              that brings together players from around the world for
              competitive and social tennis events.
            </p>

            <div className="mt-10 grid gap-5 md:grid-cols-2">
              <div className="rounded-2xl bg-gray-100 p-6">
                <h3 className="text-xl font-semibold">
                  🎾 Free Membership
                </h3>
                <p className="mt-3 text-gray-600">
                  Join our private tennis community for free and enjoy regular
                  tennis events in Tokyo.
                </p>
              </div>

              <div className="rounded-2xl bg-gray-100 p-6">
                <h3 className="text-xl font-semibold">
                  📍 Tokyo Locations
                </h3>
                <p className="mt-3 text-gray-600">
                  Play across Azabu-juban, Ariake, Shiba Park and other popular
                  tennis venues.
                </p>
              </div>

              <div className="rounded-2xl bg-gray-100 p-6">
                <h3 className="text-xl font-semibold">
                  🌍 International Community
                </h3>
                <p className="mt-3 text-gray-600">
                  Meet players from around the world in a welcoming environment.
                </p>
              </div>

              <div className="rounded-2xl bg-gray-100 p-6">
                <h3 className="text-xl font-semibold">
                  🤝 Friendly & Competitive
                </h3>
                <p className="mt-3 text-gray-600">
                  Improve your game while building friendships through regular
                  match play.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* PAGE 3 */}
        <section className="h-screen snap-start bg-black text-white flex items-center justify-center px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold md:text-5xl">
              International Tennis Community in Tokyo
            </h2>

            <p className="mt-6 text-gray-300 md:text-lg">
              Tokyo Tennis Club connects intermediate and advanced players
              through singles, doubles, team competitions and tennis camps.
            </p>

            <p className="mt-5 text-gray-300 md:text-lg">
              Whether you are a Tokyo resident, expat, traveler or visiting
              tennis enthusiast, you'll find competitive and social tennis
              opportunities throughout the year.
            </p>

            <h3 className="mt-12 text-2xl font-bold md:text-4xl">
              Ready to Play Tennis in Tokyo?
            </h3>

            <p className="mt-4 text-gray-300">
              Join Tokyo Tennis Club and play with tennis players from around
              the world.
            </p>

            <a
              href="https://www.meetup.com/tokyo-tennis-club/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-block rounded-full bg-white px-8 py-4 font-semibold text-black transition hover:opacity-80"
            >
              Join Tokyo Tennis Club
            </a>

            <div className="mt-16 border-t border-white/20 pt-6 text-sm text-gray-400">
              <p>3-14-11 Minami-aoyama, Minato-ku, Tokyo, Japan</p>

              <p className="mt-2">
                Made with love by Tokyo Tennis Club
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}