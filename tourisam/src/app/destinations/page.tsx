import { destinations } from "@/data/destinations";
import { SectionTitle } from "@/components/ui/SectionTitle";
import Link from "next/link";

export default function DestinationsPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionTitle
        eyebrow="Destinations"
        title="Explore Sri Lanka one unforgettable place at a time"
        description="From peak-to-coast adventures to serene hidden spots, each region offers a different rhythm of beauty."
      />

      <div className="mt-10 grid gap-8 lg:grid-cols-2">
        {destinations.map((destination) => (
          <article key={destination.slug} className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm">
            <img src={destination.image} alt={destination.name} className="h-72 w-full object-cover" />
            <div className="p-7">
              <div className="text-xs font-semibold uppercase tracking-[0.24em] text-orange-500">{destination.region}</div>
              <h2 className="mt-3 text-3xl font-bold text-slate-900">{destination.name}</h2>
              <p className="mt-3 text-lg text-slate-600">{destination.tagline}</p>
              <p className="mt-4 text-slate-600">{destination.description}</p>
              <ul className="mt-5 space-y-2 text-slate-600">
                {destination.highlights.map((point) => (
                  <li key={point} className="flex items-center gap-2">
                    <span className="text-orange-500">•</span>
                    {point}
                  </li>
                ))}
              </ul>
              <Link href={`/destinations/${destination.slug}`} className="mt-6 inline-flex rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800">
                View destination
              </Link>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
