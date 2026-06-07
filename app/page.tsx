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

      <main className="bg-white text-black md:h-screen md:snap-y md:snap-mandatory md:overflow-y-scroll">
        {/* HERO */}
        <section
          className="flex min-h-[100svh] items-center justify-center bg-cover bg-center px-5 py-16 text-center text-white md:h-screen md:snap-start"
          style={{
            backgroundImage: "url('/hero.jpg')",
            backgroundPosition: "center center",
          }}
        >
          <div className="w-full max-w-md rounded-3xl bg-black/45 p-5 backdrop-blur-sm md:max-w-3xl md:p-8">
            <h1 className="text-3xl font-bold leading-tight md:text-6xl">
              Play Competitive & Social Tennis in Tokyo
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-gray-200 md:text-xl md:leading-8">
              International tennis community in Tokyo for intermediate and
              advanced players.
            </p>

            <a
              href="https://www.meetup.com/tokyo-tennis-club/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-block rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:opacity-80 md:px-8 md:py-4 md:text-lg"
            >
              Join Tokyo Tennis Club
            </a>

            <p className="mt-6 text-xs text-gray-300 md:text-sm">
              ↓ Scroll to learn more
            </p>
          </div>
        </section>

        {/* ABOUT */}
        <section className="bg-white px-5 py-16 md:flex md:h-screen md:snap-start md:items-center md:justify-center md:px-6">
          <div className="mx-auto max-w-6xl text-center">
            <h2 className="text-3xl font-bold md:text-5xl">
              What is Tokyo Tennis Club?
            </h2>

            <p className="mx-auto mt-5 max-w-4xl text-base leading-7 text-gray-600 md:mt-7 md:text-xl md:leading-9">
              Tokyo Tennis Club is an international tennis community in Tokyo
              that brings together players from around the world for competitive
              and social tennis events.
            </p>

            <div className="mt-8 grid gap-4 md:mt-12 md:grid-cols-2 md:gap-6">
              {[
                [
                  "🎾 Free Membership",
                  "Join our private tennis community for free and enjoy regular singles, doubles, and team events throughout Tokyo.",
                ],
                [
                  "📍 Tokyo Locations",
                  "Play tennis across central Tokyo, including Azabu-juban, Ariake, Shiba Park, and other popular venues.",
                ],
                [
                  "🌍 International Community",
                  "Meet passionate tennis players from around the world in a welcoming, inclusive, and friendly environment.",
                ],
                [
                  "🤝 Friendly & Competitive Atmosphere",
                  "Enjoy competitive tennis while building friendships in a respectful and supportive international community.",
                ],
              ].map(([title, text]) => (
                <div
                  key={title}
                  className="rounded-2xl bg-white p-5 shadow-md md:p-8"
                >
                  <h3 className="text-xl font-semibold md:text-2xl">
                    {title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-gray-600 md:mt-5 md:text-lg md:leading-8">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SEO + CTA */}
        <section className="bg-gray-50 px-5 py-16 md:flex md:h-screen md:snap-start md:items-center md:justify-center md:px-6">
          <div className="mx-auto max-w-5xl text-center">
            <h2 className="text-3xl font-bold leading-tight md:text-5xl">
              International Tennis Community in Tokyo
            </h2>

            <p className="mx-auto mt-6 max-w-5xl text-base leading-7 text-gray-700 md:mt-9 md:text-xl md:leading-9">
              Tokyo Tennis Club is one of the most active international tennis
              communities in Tokyo, connecting intermediate and advanced players
              through organized tennis events, singles, doubles, team
              competitions, and tennis camps.
            </p>

            <p className="mx-auto mt-5 max-w-5xl text-base leading-7 text-gray-700 md:mt-7 md:text-xl md:leading-9">
              We host tennis events throughout Tokyo, including Azabu-juban,
              Ariake, and Shiba Park, providing opportunities to improve your
              game, meet new people, and enjoy competitive match play.
            </p>

            <p className="mx-auto mt-5 max-w-5xl text-base leading-7 text-gray-700 md:mt-7 md:text-xl md:leading-9">
              Whether you are a Tokyo resident, expat, traveler, or visiting
              tennis enthusiast, Tokyo Tennis Club offers a welcoming environment
              to play, improve, compete, and meet new people.
            </p>

            <a
              href="https://www.meetup.com/tokyo-tennis-club/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-block rounded-full bg-black px-8 py-4 text-base font-semibold text-white transition hover:opacity-80 md:mt-10 md:px-10 md:py-5 md:text-lg"
            >
              Join Tokyo Tennis Club
            </a>

            <footer className="mt-8 text-xs text-gray-500 md:mt-10 md:text-base">
              <p>3-14-11 Minami-aoyama, Minato-ku, Tokyo, Japan</p>
              <p className="mt-2">Made with love by Tokyo Tennis Club</p>
            </footer>
          </div>
        </section>
      </main>
    </>
  );
}