import Link from "next/link";
import { notFound } from "next/navigation";
import { destinations } from "@/data/destinations";

export function generateStaticParams() {
  return destinations.map((destination) => ({ slug: destination.slug }));
}

export default async function DestinationDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const destination = destinations.find((item) => item.slug === slug);

  if (!destination) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-8 flex flex-wrap items-center gap-3 text-sm text-slate-500">
        <Link href="/destinations" className="hover:text-orange-600">Destinations</Link>
        <span>•</span>
        <span>{destination.name}</span>
      </div>

      <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm">
        <img src={destination.image} alt={destination.name} className="h-[420px] w-full object-cover" />
      </div>

      <div className="mt-10 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-orange-500">{destination.region}</p>
          <h1 className="mt-3 text-4xl font-black tracking-tight text-slate-900">{destination.name}</h1>
          <p className="mt-5 text-lg leading-8 text-slate-600">{destination.description}</p>

          <div className="mt-8 rounded-3xl border border-slate-200 bg-slate-50 p-6">
            <h3 className="text-xl font-bold text-slate-900">Why travelers love it</h3>
            <ul className="mt-5 space-y-3 text-slate-600">
              {destination.highlights.map((point) => (
                <li key={point} className="flex items-center gap-3">
                  <span className="text-orange-500">✓</span>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <aside className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="text-xl font-bold text-slate-900">Perfect for</h3>
          <div className="mt-4 space-y-3 text-slate-600">
            <div className="rounded-2xl bg-slate-50 px-4 py-3">Historic sightseeing</div>
            <div className="rounded-2xl bg-slate-50 px-4 py-3">Nature lovers</div>
            <div className="rounded-2xl bg-slate-50 px-4 py-3">Slow travel and photography</div>
          </div>
          <Link href="/contact" className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800">
            Plan a trip here
          </Link>
        </aside>
      </div>
    </main>
  );
}
