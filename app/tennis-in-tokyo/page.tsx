import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tennis in Tokyo | Best Tennis Courts & How to Play",
  description:
    "Discover the best tennis courts in Tokyo, including Ariake, Shiba Park, and Azabu. Learn how to play tennis in Tokyo and connect with local players.",

  alternates: {
    canonical: "https://tokyo-tennis-club.com/tennis-in-tokyo",
  },

  openGraph: {
    title: "Tennis in Tokyo | Best Tennis Courts & How to Play",
    description:
      "Discover the best tennis courts in Tokyo and how to play tennis in Japan.",
    url: "https://tokyo-tennis-club.com/tennis-in-tokyo",
    siteName: "Tokyo Tennis Club",
    type: "article",
  },
};

export default function TennisInTokyoPage() {
  return (
    <main className="min-h-screen bg-white text-black">
      <section className="mx-auto max-w-4xl px-6 py-20">
        <h1 className="mb-8 text-center text-4xl font-bold leading-tight md:text-5xl">
          Tennis in Tokyo
        </h1>

        <p className="mb-8 text-lg leading-8 text-gray-600 md:text-xl md:leading-9">
          Looking to play tennis in Tokyo? Tokyo offers excellent tennis
          facilities, but finding a court can be surprisingly difficult. Many
          public courts require advance registration, lottery applications, and
          Japanese-language reservation systems.
        </p>

        <p className="mb-14 text-lg leading-8 text-gray-600 md:text-xl md:leading-9">
          Whether you are a resident, expat, or visiting player, this guide
          introduces three of the most popular tennis courts in Tokyo and
          explains the easiest way to start playing.
        </p>

        <h2 className="mb-6 text-3xl font-bold md:text-4xl">
          Ariake Tennis Forest Park
        </h2>

        <p className="mb-6 text-lg leading-8 text-gray-600 md:text-xl md:leading-9">
          Ariake Tennis Forest Park is Japan&apos;s premier tennis venue and
          regularly hosts major international tournaments. Its world-class
          facilities, excellent hard courts, and professional atmosphere make it
          one of the best places to play tennis in Tokyo, especially for
          intermediate and advanced players.
        </p>

        <ul className="mb-12 list-disc space-y-3 pl-6 text-lg leading-8 text-gray-600 md:text-xl md:leading-9">
          <li>Location: Ariake, Koto City</li>
          <li>Surface: Hard & Omni Courts</li>
          <li>40+ indoor and outdoor courts</li>
          <li>Changing rooms, showers, and parking available</li>
        </ul>

        <h2 className="mb-6 text-3xl font-bold md:text-4xl">
          Shiba Park Tennis Courts
        </h2>

        <p className="mb-6 text-lg leading-8 text-gray-600 md:text-xl md:leading-9">
          Located just steps from Tokyo Tower, Shiba Park Tennis Courts offer
          one of the most unique tennis experiences in Tokyo. The courts are
          centrally located and especially popular among expats, international
          visitors, and players staying in central Tokyo.
        </p>

        <ul className="mb-12 list-disc space-y-3 pl-6 text-lg leading-8 text-gray-600 md:text-xl md:leading-9">
          <li>Location: Shibakoen, Minato City</li>
          <li>Surface: Omni Court</li>
          <li>4 courts</li>
          <li>Changing rooms and showers available</li>
        </ul>

        <h2 className="mb-6 text-3xl font-bold md:text-4xl">
          Azabu Sports Field Tennis Courts
        </h2>

        <p className="mb-6 text-lg leading-8 text-gray-600 md:text-xl md:leading-9">
          Azabu Sports Field is one of the most convenient tennis facilities in
          central Tokyo. Located near Hiroo, Azabu-juban, embassies,
          international schools, and Roppongi Hills, it attracts both local and
          international players looking for competitive and social tennis.
        </p>

        <ul className="mb-12 list-disc space-y-3 pl-6 text-lg leading-8 text-gray-600 md:text-xl md:leading-9">
          <li>Location: Minami-Azabu, Minato City</li>
          <li>Surface: Omni Court</li>
          <li>4 courts</li>
          <li>Changing rooms and showers available</li>
        </ul>

        <h2 className="mb-6 text-3xl font-bold md:text-4xl">
          How to Book Tennis Courts in Tokyo
        </h2>

        <p className="mb-6 text-lg leading-8 text-gray-600 md:text-xl md:leading-9">
          Booking public tennis courts in Tokyo can be challenging.
        </p>

        <ul className="mb-8 list-disc space-y-3 pl-6 text-lg leading-8 text-gray-600 md:text-xl md:leading-9">
          <li>Advance registration</li>
          <li>Lottery applications</li>
          <li>Japanese-language reservation systems</li>
        </ul>

        <p className="mb-14 text-lg leading-8 text-gray-600 md:text-xl md:leading-9">
          Private courts are generally easier to reserve, but they are often
          more expensive and frequently fully booked. For visitors and new
          residents, joining a local tennis community is often the easiest way
          to play tennis in Tokyo.
        </p>

        <h2 className="mb-6 text-3xl font-bold md:text-4xl">
          Join Tokyo Tennis Club
        </h2>

        <p className="mb-6 text-lg leading-8 text-gray-600 md:text-xl md:leading-9">
          Tokyo Tennis Club is an international tennis community for
          intermediate and advanced players. We organize regular doubles events,
          singles sessions, team competitions, tennis camps, and private tennis
          experiences throughout Tokyo.
        </p>

        <ul className="mb-8 list-disc space-y-3 pl-6 text-lg leading-8 text-gray-600 md:text-xl md:leading-9">
          <li>Meet local and international players</li>
          <li>Play without dealing with court reservations</li>
          <li>Improve your game through regular match play</li>
          <li>Discover some of Tokyo&apos;s best tennis venues</li>
        </ul>

        <p className="mb-10 text-lg leading-8 text-gray-600 md:text-xl md:leading-9">
          Most events are conducted in English and bring together local players,
          expats, and visitors from around the world.
        </p>

        <div className="text-center">
          <a
            href="https://www.meetup.com/tokyo-tennis-club/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-full bg-black px-10 py-5 text-lg font-semibold text-white transition hover:opacity-80"
          >
            Join Tokyo Tennis Club
          </a>

          <div className="mt-8">
            <a
              href="/"
              className="text-sm font-semibold text-gray-500 underline underline-offset-4"
            >
              ← Back to Home
            </a>
          </div>
        </div>

        <footer className="mt-16 text-center text-sm text-gray-400">
          <p>
            107-0062, 3-14-11 Minami-aoyama, Minato-ku, Tokyo, Japan
          </p>

          <p className="mt-2">
            © {new Date().getFullYear()} Tokyo Tennis Club. Made with love.
          </p>
        </footer>
      </section>
    </main>
  );
}