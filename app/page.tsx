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

      <main className="bg-white text-black md:h-screen md:overflow-y-scroll md:snap-y md:snap-mandatory">
        {/* HERO */}
        <section
          className="flex min-h-screen items-center justify-center bg-cover bg-center px-6 py-20 text-center text-white md:h-screen md:snap-start md:py-0"
          style={{
            backgroundImage: "url('/hero.jpg')",
            backgroundPosition: "center center",
          }}
        >
          <div className="max-w-3xl rounded-3xl bg-black/40 p-6 backdrop-blur-sm md:p-8">
            <h1 className="text-4xl font-bold leading-tight text-white md:text-6xl">
              Play Competitive & Social Tennis in Tokyo
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-gray-200 md:text-xl">
              International tennis community in Tokyo for intermediate and
              advanced players.
            </p>

            <a
              href="https://www.meetup.com/tokyo-tennis-club/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-block rounded-full bg-white px-7 py-3 text-base font-semibold text-black transition hover:opacity-80 md:px-8 md:py-4 md:text-lg"
            >
              Join Tokyo Tennis Club
            </a>

            <p className="mt-7 text-sm text-gray-300 md:block">
              ↓ Scroll to learn more
            </p>
          </div>
        </section>

        {/* ABOUT */}
        <section className="flex min-h-screen items-center justify-center bg-white px-6 py-20 md:h-screen md:snap-start md:py-0">
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
                  singles, doubles, and team events throughout Tokyo.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-md md:p-8">
                <h3 className="text-2xl font-semibold">
                  📍 Tokyo Locations
                </h3>

                <p className="mt-5 text-lg leading-8 text-gray-600">
                  Play tennis across central Tokyo, including Azabu-juban,
                  Ariake, Shiba Park, and other popular venues.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-md md:p-8">
                <h3 className="text-2xl font-semibold">
                  🌍 International Community
                </h3>

                <p className="mt-5 text-lg leading-8 text-gray-600">
                  Meet passionate tennis players from around the world in a
                  welcoming, inclusive, and friendly environment.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-md md:p-8">
                <h3 className="text-2xl font-semibold">
                  🤝 Friendly & Competitive Atmosphere
                </h3>

                <p className="mt-5 text-lg leading-8 text-gray-600">
                  Enjoy competitive tennis while building friendships in a
                  respectful and supportive international community.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SEO + CTA + FOOTER */}
        <section className="flex min-h-screen items-center justify-center bg-gray-50 px-6 py-20 md:h-screen md:snap-start md:py-0">
          <div className="mx-auto max-w-5xl text-center">
            <h2 className="text-4xl font-bold md:text-5xl">
              International Tennis Community in Tokyo
            </h2>

            <p className="mx-auto mt-9 max-w-5xl text-lg leading-9 text-gray-700 md:text-xl">
              Tokyo Tennis Club is one of the most active international tennis
              communities in Tokyo, connecting intermediate and advanced players
              through organized tennis events, singles, doubles, team
              competitions, and tennis camps.
            </p>

            <p className="mx-auto mt-7 max-w-5xl text-lg leading-9 text-gray-700 md:text-xl">
              We host tennis events throughout Tokyo, including Azabu-juban,
              Ariake, and Shiba Park, providing opportunities to improve your
              game, meet new people, and enjoy competitive match play.
            </p>

            <p className="mx-auto mt-7 max-w-5xl text-lg leading-9 text-gray-700 md:text-xl">
              Whether you are a Tokyo resident, expat, traveler, or visiting
              tennis enthusiast, Tokyo Tennis Club offers a welcoming
              environment to play, improve, compete, and meet new people.
            </p>

            <a
              href="https://www.meetup.com/tokyo-tennis-club/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-block rounded-full bg-black px-10 py-5 text-lg font-semibold text-white transition hover:opacity-80"
            >
              Join Tokyo Tennis Club
            </a>

            <footer className="mt-10 text-base text-gray-500">
              <p>3-14-11 Minami-aoyama, Minato-ku, Tokyo, Japan</p>
              <p className="mt-2">Made with love by Tokyo Tennis Club</p>
            </footer>
          </div>
        </section>
      </main>
    </>
  );
}