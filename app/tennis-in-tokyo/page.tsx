import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

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
          introduces some of the best tennis courts in Tokyo and explains the
          easiest way to start playing.
        </p>

        <h2 className="mb-10 text-3xl font-bold md:text-4xl">
          Best Tennis Courts in Tokyo
        </h2>

        <h3 className="mb-6 text-2xl font-bold md:text-3xl">
          Ariake Tennis Park
        </h3>

        <div className="relative mb-8 h-56 w-full overflow-hidden rounded-2xl md:h-96">
          <Image
            src="/Ariake.avif"
            alt="Ariake Tennis Park"
            fill
            sizes="(max-width: 768px) 100vw, 896px"
            className="object-cover"
          />
        </div>

        <p className="mb-6 text-lg leading-8 text-gray-600 md:text-xl md:leading-9">
          Ariake Tennis Park is Japan&apos;s premier tennis venue and
          one of the most famous tennis facilities in the country. It regularly
          hosts major international tournaments and offers world-class courts,
          professional facilities, and an outstanding playing environment.
        </p>

        <ul className="mb-12 list-disc space-y-3 pl-6 text-lg leading-8 text-gray-600 md:text-xl md:leading-9">
          <li>Location: 135-0063, 2-2-22 Ariake, Koto City, Tokyo</li>
          <li>Surface: Hard & Omni Courts (Synthetic grass with sand)</li>
          <li>Courts: 40+ indoor and outdoor courts</li>
          <li>Ariake Tennis-no-Mori Station: 8 min walk</li>
          <li>Kokusai-tenjijo Station: 8 min walk</li>
          <li>Changing rooms, showers, and parking available</li>
        </ul>

        <h3 className="mb-6 text-2xl font-bold md:text-3xl">
          Shiba Park Tennis Courts
        </h3>

        <div className="relative mb-8 h-56 w-full overflow-hidden rounded-2xl md:h-96">
          <Image
            src="/Shiba-park.avif"
            alt="Shiba Park Tennis Courts"
            fill
            sizes="(max-width: 768px) 100vw, 896px"
            className="object-cover"
          />
        </div>

        <p className="mb-6 text-lg leading-8 text-gray-600 md:text-xl md:leading-9">
          Located near Tokyo Tower, Shiba Park Tennis Courts offer one of the
          most unique tennis experiences in Tokyo. The courts are centrally
          located and popular among expats, international visitors, and players
          staying in central Tokyo.
        </p>

        <ul className="mb-12 list-disc space-y-3 pl-6 text-lg leading-8 text-gray-600 md:text-xl md:leading-9">
          <li>Location: 105-0011, 4-10-17 Shibakoen, Minato City, Tokyo</li>
          <li>Surface: Omni Court  (Synthetic grass with sand)</li>
          <li>Courts: 4 courts</li>
          <li>Shibakoen Station: 6 min walk</li>
          <li>Akabanebashi Station: 6 min walk</li>
          <li>Changing rooms and showers available</li>
        </ul>

        <h3 className="mb-6 text-2xl font-bold md:text-3xl">
          Azabu Tennis Courts
        </h3>

        <div className="relative mb-8 h-56 w-full overflow-hidden rounded-2xl md:h-96">
          <Image
            src="/Azabu-juban.avif"
            alt="Azabu Tennis Courts"
            fill
            sizes="(max-width: 768px) 100vw, 896px"
            className="object-cover"
          />
        </div>

        <p className="mb-6 text-lg leading-8 text-gray-600 md:text-xl md:leading-9">
          Azabu Tennis Courts are one of the most convenient tennis
          facilities in central Tokyo. Located near Hiroo, Azabu-juban,
          embassies, international schools, and Roppongi Hills, they attract
          both local and international players.
        </p>

        <ul className="mb-14 list-disc space-y-3 pl-6 text-lg leading-8 text-gray-600 md:text-xl md:leading-9">
          <li>Location: 106-0047, 5-6-33 Minami-Azabu, Minato-ku, Tokyo</li>
          <li>Surface: Omni Court  (Synthetic grass with sand)</li>
          <li>Courts: 4 courts</li>
          <li>Hiroo Station: 9 min walk</li>
          <li>Azabu-juban Station: 21 min walk</li>
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

          <div className="mt-5">
            <Link
              href="/"
              className="text-sm font-semibold text-gray-500 underline underline-offset-4 transition hover:opacity-80 md:text-base"
            >
              ← Back to Home
            </Link>
          </div>
        </div>

        <footer className="mt-8 text-center text-sm text-gray-400">
          <p>107-0062, 3-14-11 Minami-aoyama, Minato-ku, Tokyo, Japan</p>

          <p className="mt-2">
            © {new Date().getFullYear()} Tokyo Tennis Club. Made with love.
          </p>
        </footer>
      </section>
    </main>
  );
}