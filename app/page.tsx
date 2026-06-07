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

      <main className="h-screen overflow-y-scroll snap-y snap-mandatory bg-white text-black">
        {/* PAGE 1: HERO */}
        <section
          className="flex h-screen snap-start items-center justify-center bg-cover bg-center px-6 text-center text-white"
          style={{
            backgroundImage: "url('/hero.jpg')",
            backgroundPosition: "center center",
          }}
        >
          <div className="max-w-4xl rounded-3xl bg-black/60 p-8 backdrop-blur-sm md:p-12">
            <h1 className="text-4xl font-bold leading-tight text-white md:text-7xl">
              Play Competitive & Social Tennis in Tokyo
            </h1>

            <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-gray-200 md:text-2xl">
              International tennis community in Tokyo for intermediate and
              advanced players.
            </p>

            <a
              href="https://www.meetup.com/tokyo-tennis-club/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-9 inline-block rounded-full bg-white px-8 py-4 text-base font-semibold text-black transition hover:opacity-80 md:px-10 md:py-5 md:text-lg"
            >
              Join Tokyo Tennis Club
            </a>

            <p className="mt-8 text-sm text-gray-300 md:text-base">
              ↓ Scroll to learn more
            </p>
          </div>
        </section>

        {/* PAGE 2: ABOUT */}
        <section className="flex h-screen snap-start items-center justify-center bg-white px-6">
          <div className="mx-auto max-w-6xl text-center">
            <h2 className="text-4xl font-bold md:text-5xl">
              What is Tokyo Tennis Club?
            </h2>

            <p className="mx-auto mt-7 max-w-4xl text-lg leading-9 text-gray-600 md:text-xl">
              Tokyo Tennis Club is an international tennis community in Tokyo
              that brings together players from around the world for
              competitive and social tennis events.
            </p>

            <div className="mt-12 grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl bg-white p-6 shadow-md md:p-8">
                <h3 className="text-2xl font-semibold">
                  🎾 Free Membership
                </h3>
                <p className="mt-5 text-lg leading-8 text-gray-600">
                  Join our private tennis community for free and enjoy regular
                  tennis events in Tokyo.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-md md:p-8">
                <h3 className="text-2xl font-semibold">
                  📍 Tokyo Locations
                </h3>
                <p className="mt-5 text-lg leading-8 text-gray-600">
                  Play tennis across central Tokyo, including Azabu-juban,
                  Ariake, Shiba Park, and more.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-md md:p-8">
                <h3 className="text-2xl font-semibold">
                  🌍 International Community
                </h3>
                <p className="mt-5 text-lg leading-8 text-gray-600">
                  Meet passionate tennis players from around the world in a
                  welcoming and inclusive environment.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-md md:p-8">
                <h3 className="text-2xl font-semibold">
                  🤝 Friendly & Competitive Atmosphere
                </h3>
                <p className="mt-5 text-lg leading-8 text-gray-600">
                  Enjoy competitive tennis and build friendships in a supportive
                  international community.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* PAGE 3: SEO + CTA + FOOTER */}
        <section className="flex h-screen snap-start items-center justify-center bg-gray-50 px-6">
          <div className="mx-auto max-w-5xl text-center">
            <h2 className="text-4xl font-bold md:text-5xl">
              International Tennis Community in Tokyo
            </h2>

            <p className="mt-9 text-lg leading-9 text-gray-700 md:text-xl">
              Tokyo Tennis Club is one of the most active international tennis
              communities in Tokyo, connecting intermediate and advanced players
              through singles, doubles, team competitions, and tennis camps.
            </p>

            <p className="mt-7 text-lg leading-9 text-gray-700 md:text-xl">
              We host tennis events throughout Tokyo, including Azabu-juban,
              Ariake, and Shiba Park, providing opportunities to improve your
              game, meet new people, and enjoy competitive match play.
            </p>

            <p className="mt-7 text-lg leading-9 text-gray-700 md:text-xl">
              Whether you are a Tokyo resident, expat, traveler, or visiting
              tennis enthusiast, Tokyo Tennis Club offers a welcoming
              environment for singles, doubles, team competitions, and tennis
              camps throughout the year.
            </p>

            <a
              href="https://www.meetup.com/tokyo-tennis-club/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-11 inline-block rounded-full bg-black px-10 py-5 text-lg font-semibold text-white transition hover:opacity-80"
            >
              Join Tokyo Tennis Club
            </a>

            <footer className="mt-12 text-base text-gray-500">
              <p>3-14-11 Minami-aoyama, Minato-ku, Tokyo, Japan</p>
              <p className="mt-2">Made with love by Tokyo Tennis Club</p>
            </footer>
          </div>
        </section>
      </main>
    </>
  );
}