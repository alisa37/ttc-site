export default function Home() {
  return (
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

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-gray-200 md:text-xl">
            International tennis community for intermediate & advanced players.
          </p>

          <a
            href="https://www.meetup.com/tokyo-tennis-club/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block rounded-full bg-white px-7 py-3 text-base font-semibold text-black transition hover:opacity-80 md:px-8 md:py-4 md:text-lg"
          >
            Join Events on Meetup
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
            Tokyo Tennis Club is an international tennis community bringing
            together players from around the world for competitive and social
            tennis events in Tokyo.
          </p>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl bg-gray-100 p-6 md:p-8">
              <h3 className="text-xl font-semibold md:text-2xl">
                🎾 Competitive Match Play
              </h3>

              <p className="mt-4 text-gray-600">
                Singles, doubles, and team matches for intermediate and advanced
                players.
              </p>
            </div>

            <div className="rounded-2xl bg-gray-100 p-6 md:p-8">
              <h3 className="text-xl font-semibold md:text-2xl">
                🌍 International Community
              </h3>

              <p className="mt-4 text-gray-600">
                Meet players from around the world in a welcoming atmosphere.
              </p>
            </div>

            <div className="rounded-2xl bg-gray-100 p-6 md:p-8">
              <h3 className="text-xl font-semibold md:text-2xl">
                📍 Tokyo Locations
              </h3>

              <p className="mt-4 text-gray-600">
                Events held in Setagaya, Ariake, Shibuya and more.
              </p>
            </div>

            <div className="rounded-2xl bg-gray-100 p-6 md:p-8">
              <h3 className="text-xl font-semibold md:text-2xl">
                🤝 Friendly Atmosphere
              </h3>

              <p className="mt-4 text-gray-600">
                Competitive tennis in a social and friendly environment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-black px-6 py-20 text-center text-white md:py-24">
        <h2 className="text-3xl font-bold md:text-4xl">
          Ready to Play?
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-base text-gray-300 md:text-lg">
          Join Tokyo Tennis Club and meet players from around the world.
        </p>

        <a
          href="https://www.meetup.com/tokyo-tennis-club/"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-block rounded-full bg-white px-7 py-3 text-base font-semibold text-black transition hover:opacity-80 md:px-8 md:py-4 md:text-lg"
        >
          View Events on Meetup
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
  );
}