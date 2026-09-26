import Link from "next/link";
import type { Tour } from "@/types";

export function TourCard({ tour }: { tour: Tour }) {
  return (
    <article className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <img src={tour.image} alt={tour.name} className="h-60 w-full object-cover" />
      <div className="p-6">
        <div className="mb-3 flex items-center justify-between text-sm text-slate-600">
          <span>{tour.location}</span>
          <span>⭐ {tour.rating}</span>
        </div>
        <h3 className="text-2xl font-bold text-slate-900">{tour.name}</h3>
        <p className="mt-3 text-slate-600">{tour.summary}</p>

        <div className="mt-5 flex items-center justify-between">
          <div>
            <div className="text-sm text-slate-500">From</div>
            <div className="text-2xl font-black text-slate-900">US${tour.price}</div>
          </div>
          <div className="text-right text-sm text-slate-500">
            <div>{tour.duration}</div>
            <div>{tour.difficulty}</div>
          </div>
        </div>

        <Link href={`/tours/${tour.slug}`} className="mt-6 inline-flex items-center justify-center rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800">
          Explore itinerary
        </Link>
      </div>
    </article>
  );
}
