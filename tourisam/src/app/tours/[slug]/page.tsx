import Link from "next/link";
import { notFound } from "next/navigation";
import { tours } from "@/data/tours";
import { InquiryForm } from "@/components/booking/InquiryForm";
import { TourGallery } from "@/components/tours/TourGallery";
import { TourItinerary } from "@/components/tours/TourItinerary";
import { Button } from "@/components/ui/Button";

export function generateStaticParams() {
  return tours.map((tour) => ({ slug: tour.slug }));
}

export default async function TourDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const tour = tours.find((item) => item.slug === slug);

  if (!tour) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-8 flex flex-wrap items-center gap-3 text-sm text-slate-500">
        <Link href="/tours" className="hover:text-orange-600">Tours</Link>
        <span>•</span>
        <span>{tour.name}</span>
      </div>

      <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm">
        <img src={tour.image} alt={tour.name} className="h-[420px] w-full object-cover" />
      </div>

      <div className="mt-10 grid gap-8 lg:grid-cols-[1.4fr_0.6fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-orange-500">{tour.location}</p>
          <h1 className="mt-3 text-4xl font-black tracking-tight text-slate-900">{tour.name}</h1>
          <p className="mt-5 text-lg leading-8 text-slate-600">{tour.description}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <span className="rounded-full bg-orange-100 px-3 py-1 text-sm font-medium text-orange-700">{tour.duration}</span>
            <span className="rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-700">{tour.difficulty}</span>
            <span className="rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-700">⭐ {tour.rating}</span>
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-bold text-slate-900">Best for</h3>
            <div className="mt-4 flex flex-wrap gap-3">
              {tour.bestFor.map((tag) => (
                <span key={tag} className="rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-700">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-bold text-slate-900">Highlights</h3>
            <ul className="mt-4 grid gap-3 text-slate-600 sm:grid-cols-2">
              {tour.highlights.map((item) => (
                <li key={item} className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
                  • {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <aside className="space-y-6">
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
            <div className="text-sm text-slate-500">Starting from</div>
            <div className="mt-2 text-4xl font-black text-slate-900">US${tour.price}</div>
            <p className="mt-2 text-slate-600">Per traveler, including curated experiences.</p>
            <div className="mt-6 space-y-3">
              <Button href="/contact" className="w-full justify-center rounded-full">Book now</Button>
              <Link href="/tours" className="inline-flex w-full items-center justify-center rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-100">
                Explore other tours
              </Link>
            </div>
          </div>
        </aside>
      </div>

      <div className="mt-10 grid gap-8 lg:grid-cols-2">
        <TourItinerary tour={tour} />
        <div className="space-y-8">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-2xl font-bold text-slate-900">What's included</h3>
            <ul className="mt-5 space-y-3 text-slate-600">
              {tour.includes.map((item) => (
                <li key={item} className="flex items-center gap-3 rounded-2xl bg-slate-50 px-4 py-3">
                  <span className="text-orange-500">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <InquiryForm />
        </div>
      </div>

      <div className="mt-8">
        <TourGallery tour={tour} />
      </div>
    </main>
  );
}
