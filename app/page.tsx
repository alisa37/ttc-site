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
            sport: "Tennis",
            areaServed: {
              "@type": "City",
              name: "Tokyo",
            },
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

      <main className="min-h-screen bg-white text-black">
        {/* HERO */}
        <section
          className="
            flex min-h-screen items-center justify-center
            bg-cover bg-[position:65%_center]
            px-6 py-20 text-center text-white
            md:h-screen md:snap-start md:bg-[position:60%_center] md:py-0
            lg:bg-center
          "
          style={{
            backgroundImage: "url('/hero.jpg')",
          }}
        >
          <div className="max-w-3xl rounded-3xl bg-black/15 p-5 backdrop-blur-sm md:bg-black/30 md:p-8">
            <h1 className="text-4xl font-bold leading-tight text-white md:text-6xl">
              Play Competitive & Social Tennis in Tokyo
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-gray-200 md:hidden">
              A vibrant international tennis community
            </p>

            <p className="mx-auto mt-6 hidden max-w-2xl text-xl leading-8 text-gray-200 md:block">
              International tennis community in Tokyo for intermediate &
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

            <p className="mt-7 text-sm text-gray-300">
              ↓ Scroll to learn more
            </p>
          </div>
        </section>

        {/* ABOUT */}
        <section className="bg-white px-6 py-20 md:flex md:min-h-screen md:items-center md:justify-center md:py-0">
          <div className="mx-auto max-w-6xl text-center">
            <h2 className="text-3xl font-bold md:text-5xl">
              What is Tokyo Tennis Club?
            </h2>

            <p className="mx-auto mt-7 max-w-4xl text-lg leading-8 text-gray-600 md:hidden">
              A place where intermediate and advanced tennis players connect,
              compete, and build camaraderie through tennis.
            </p>

            <p className="mx-auto mt-7 hidden max-w-4xl text-xl leading-9 text-gray-600 md:block">
              Tokyo Tennis Club is a vibrant international tennis community in
              Tokyo that brings together players from around the world through
              competitive and social tennis events.
            </p>

            <div className="mt-12 grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl bg-white p-6 shadow-md md:p-8">
                <h3 className="text-2xl font-semibold">🎾 Free Membership</h3>
                <p className="mt-5 text-lg leading-8 text-gray-600">
                  Join our private tennis community for free and enjoy regular
                  singles, doubles, and team events throughout Tokyo.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-md md:p-8">
                <h3 className="text-2xl font-semibold">📍 Tokyo Locations</h3>
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

        {/* CTA + FAQ + FOOTER */}
        <section className="bg-gray-50 px-6 py-28 md:flex md:min-h-screen md:items-start md:justify-center md:pt-32 md:pb-20">
          <div className="mx-auto max-w-5xl text-center">
            <h2 className="text-4xl font-bold md:text-5xl">
              Join Tokyo Tennis Club Today!
            </h2>

            <p className="mx-auto mt-8 text-lg leading-8 text-gray-700 md:hidden">
              Play singles, doubles, team competitions, and tennis camps with
              intermediate and advanced players across Tokyo. Join a welcoming
              community where you can play, compete, and improve.
            </p>

            <div className="hidden md:block">
              <p className="mx-auto mt-9 max-w-5xl text-xl leading-9 text-gray-700">
                Play singles, doubles, team competitions, and tennis camps with
                intermediate and advanced players across Tokyo.
              </p>

              <p className="mx-auto mt-7 max-w-5xl text-xl leading-9 text-gray-700">
                Whether you are a resident, expat, traveler, or visiting tennis
                enthusiast, our community provides opportunities to play,
                compete, and improve in a welcoming environment.
              </p>
            </div>

            {/* FAQ */}
            <div className="mx-auto mt-20 max-w-4xl text-center">
              <div className="flex items-center justify-center gap-6">
                <div className="h-px flex-1 bg-gray-300" />
                <h2 className="text-3xl font-bold md:text-4xl">FAQ</h2>
                <div className="h-px flex-1 bg-gray-300" />
              </div>

              <div className="mt-8 space-y-6">
                <details className="group">
                  <summary className="cursor-pointer list-none text-lg font-semibold">
                    <span className="group-open:hidden">▸</span>
                    <span className="hidden group-open:inline">▾</span>{" "}
                    Who can join Tokyo Tennis Club?
                  </summary>
                  <p className="mt-3 leading-7 text-gray-600">
                    Tokyo Tennis Club is open to players of all nationalities who
                    enjoy tennis and value good sportsmanship.
                  </p>
                </details>

                <details className="group">
                  <summary className="cursor-pointer list-none text-lg font-semibold">
                    <span className="group-open:hidden">▸</span>
                    <span className="hidden group-open:inline">▾</span>{" "}
                    What tennis level is required?
                  </summary>
                  <p className="mt-3 leading-7 text-gray-600">
                    Most events are designed for intermediate and advanced
                    players who follow proper tennis etiquette and are familiar
                    with basic tennis rules.
                  </p>
                </details>

                <details className="group">
                  <summary className="cursor-pointer list-none text-lg font-semibold">
                    <span className="group-open:hidden">▸</span>
                    <span className="hidden group-open:inline">▾</span>{" "}
                    I haven&apos;t played tennis in a while. Can I still join?
                  </summary>
                  <p className="mt-3 leading-7 text-gray-600">
                    Absolutely. Many members return to tennis after a break. As
                    long as you&apos;re around an intermediate level, follow basic
                    tennis etiquette, and enjoy playing, you&apos;ll fit right in.
                  </p>
                </details>

                <details className="group">
                  <summary className="cursor-pointer list-none text-lg font-semibold">
                    <span className="group-open:hidden">▸</span>
                    <span className="hidden group-open:inline">▾</span>{" "}
                    Is membership free?
                  </summary>
                  <p className="mt-3 leading-7 text-gray-600">
                    Yes, membership is completely free.
                  </p>
                </details>

                <details className="group">
                  <summary className="cursor-pointer list-none text-lg font-semibold">
                    <span className="group-open:hidden">▸</span>
                    <span className="hidden group-open:inline">▾</span>{" "}
                    How much is the participation fee?
                  </summary>
                  <p className="mt-3 leading-7 text-gray-600">
                    Fees are typically around ¥2,000 for doubles and ¥3,500 for
                    singles, depending on the event. Please see the event page
                    for details.
                  </p>
                </details>

                <details className="group">
                  <summary className="cursor-pointer list-none text-lg font-semibold">
                    <span className="group-open:hidden">▸</span>
                    <span className="hidden group-open:inline">▾</span>{" "}
                    Where do you play tennis in Tokyo?
                  </summary>
                  <p className="mt-3 leading-7 text-gray-600">
                    We organize tennis events across Tokyo at convenient,
                    well-connected venues, including Azabu-juban, Ariake, Shiba
                    Park, and more.
                  </p>
                </details>

                <details className="group">
                  <summary className="cursor-pointer list-none text-lg font-semibold">
                    <span className="group-open:hidden">▸</span>
                    <span className="hidden group-open:inline">▾</span>{" "}
                    Can visitors or tourists join?
                  </summary>
                  <p className="mt-3 leading-7 text-gray-600">
                    Yes. Visitors and tourists are welcome to join our events.
                  </p>
                </details>

                <details className="group">
                  <summary className="cursor-pointer list-none text-lg font-semibold">
                    <span className="group-open:hidden">▸</span>
                    <span className="hidden group-open:inline">▾</span>{" "}
                    Can I bring a friend?
                  </summary>
                  <p className="mt-3 leading-7 text-gray-600">
                    Yes. Friends are welcome to join and play. Please register
                    each participant individually. For safety, and facility
                    regulations, only registered players may enter the tennis
                    courts. Non-playing guests, spectators, and photographers
                    are not permitted.
                  </p>
                </details>

                <details className="group">
                  <summary className="cursor-pointer list-none text-lg font-semibold">
                    <span className="group-open:hidden">▸</span>
                    <span className="hidden group-open:inline">▾</span>{" "}
                    Are events conducted in English?
                  </summary>
                  <p className="mt-3 leading-7 text-gray-600">
                    Most events are conducted in English and bring together
                    expats, visitors, and local players from diverse backgrounds.
                  </p>
                </details>

                <details className="group">
                  <summary className="cursor-pointer list-none text-lg font-semibold">
                    <span className="group-open:hidden">▸</span>
                    <span className="hidden group-open:inline">▾</span>{" "}
                    Do you organize singles or doubles matches?
                  </summary>
                  <p className="mt-3 leading-7 text-gray-600">
                    We organize singles, doubles, team competitions, and tennis
                    camps throughout the year. See our event page for upcoming
                    events.
                  </p>
                </details>

                <details className="group">
                  <summary className="cursor-pointer list-none text-lg font-semibold">
                    <span className="group-open:hidden">▸</span>
                    <span className="hidden group-open:inline">▾</span>{" "}
                    Can I rent a racket?
                  </summary>
                  <p className="mt-3 leading-7 text-gray-600">
                    Yes. Rental rackets are available and can be reserved
                    through the event page.
                  </p>
                </details>

                <details className="group">
                  <summary className="cursor-pointer list-none text-lg font-semibold">
                    <span className="group-open:hidden">▸</span>
                    <span className="hidden group-open:inline">▾</span>{" "}
                    Is there a dress code?
                  </summary>
                  <p className="mt-3 leading-7 text-gray-600">
                    No formal dress code. Just wear comfortable activewear and
                    appropriate tennis shoes.
                  </p>
                </details>

                <details className="group">
                  <summary className="cursor-pointer list-none text-lg font-semibold">
                    <span className="group-open:hidden">▸</span>
                    <span className="hidden group-open:inline">▾</span>{" "}
                    Can you arrange a private session on a specific date?
                  </summary>
                  <p className="mt-3 leading-7 text-gray-600">
                    Join Tokyo Tennis Club and send us a message. We&apos;ll
                    check court availability and see if we can arrange a private
                    hitting session with a local player. Sessions start from
                    ¥12,000 for 2 hours. Court fees are not included.
                  </p>
                </details>

                <details className="group">
                  <summary className="cursor-pointer list-none text-lg font-semibold">
                    <span className="group-open:hidden">▸</span>
                    <span className="hidden group-open:inline">▾</span>{" "}
                    How do I join an event?
                  </summary>
                  <p className="mt-3 leading-7 text-gray-600">
                    Simply register through our event page by clicking the
                    &quot;Join Tokyo Tennis Club&quot; button.
                  </p>
                </details>
              </div>
            </div>

            <a
              href="https://www.meetup.com/tokyo-tennis-club/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-block rounded-full bg-black px-10 py-5 text-lg font-semibold text-white transition hover:opacity-80"
            >
              Join Tokyo Tennis Club
            </a>

            <div className="mt-5">
              <a
                href="/tennis-in-tokyo"
                className="text-sm font-semibold text-gray-500 underline underline-offset-4 transition hover:opacity-80 md:text-base"
              >
                Tennis in Tokyo Guide →
              </a>
            </div>

            <footer className="mt-8 text-sm text-gray-400">
              <p>107-0062, 3-14-11 Minami-aoyama, Minato-ku, Tokyo, Japan</p>
              <p className="mt-2">
                © {new Date().getFullYear()} Tokyo Tennis Club. Made with love.
              </p>
            </footer>
          </div>
        </section>
      </main>
    </>
  );
}