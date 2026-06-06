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
            sameAs: [
              "https://www.meetup.com/tokyo-tennis-club/",
            ],
          }),
        }}
      />

      <main className="bg-white text-black">

        {/* PAGE 1 */}
        <section
          className="min-h-screen flex items-center justify-center px-6 text-center text-white"
          style={{
            backgroundImage: "url('/hero.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
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
            <h2 className="text-4xl font-bold">
              What is Tokyo Tennis Club?
            </h2>

            <p className="mt-8 text-lg text-gray-600">
              Tokyo Tennis Club is an international tennis community in Tokyo
              that brings together players from around the world for
              competitive and social tennis events.
            </p>

            <div className="mt-12 grid gap-6 md:grid-cols-2">

              <div className="rounded-2xl bg-gray-100 p-6">
                <h3 className="text-xl font-semibold">
                  🎾 Free Membership
                </h3>

                <p className="mt-3 text-gray-600">
                  Join our community and enjoy regular events.
                </p>
              </div>

              <div className="rounded-2xl bg-gray-100 p-6">
                <h3 className="text-xl font-semibold">
                  📍 Tokyo Locations
                </h3>

                <p className="mt-3 text-gray-600">
                  Ariake, Azabu-Juban, Shiba Park and more.
                </p>
              </div>

              <div className="rounded-2xl bg-gray-100 p-6">
                <h3 className="text-xl font-semibold">
                  🌍 International Community
                </h3>

                <p className="mt-3 text-gray-600">
                  Meet players from around the world.
                </p>
              </div>

              <div className="rounded-2xl bg-gray-100 p-6">
                <h3 className="text-xl font-semibold">
                  🤝 Friendly & Competitive
                </h3>

                <p className="mt-3 text-gray-600">
                  Improve your tennis while making new friends.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* PAGE 3 */}
        <section className="min-h-screen flex items-center justify-center bg-gray-50 px-6">
          <div className="max-w-4xl text-center">

            <h2 className="text-4xl font-bold">
              International Tennis Community in Tokyo
            </h2>

            <p className="mt-8 text-lg leading-8 text-gray-700">
              Tokyo Tennis Club is one of the most active international tennis
              communities in Tokyo, connecting intermediate and advanced players
              through singles, doubles, team competitions, and tennis camps.
            </p>

            <p className="mt-6 text-lg leading-8 text-gray-700">
              Whether you are a resident, expat, traveler, or visiting player,
              you'll find a welcoming community and competitive tennis.
            </p>

            <a
              href="https://www.meetup.com/tokyo-tennis-club/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-block rounded-full bg-black px-8 py-4 font-semibold text-white"
            >
              Join Tokyo Tennis Club
            </a>

            <footer className="mt-12 text-sm text-gray-500">
              <p>
                3-14-11 Minami-aoyama, Minato-ku, Tokyo, Japan
              </p>

              <p className="mt-2">
                Made with love by Tokyo Tennis Club
              </p>
            </footer>

          </div>
        </section>

      </main>
    </>
  );
}