import type { Tour } from "@/types";

export function TourItinerary({ tour }: { tour: Tour }) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <h3 className="text-2xl font-bold text-slate-900">Tour itinerary</h3>
      <div className="mt-6 space-y-5">
        {tour.itinerary.map((item) => (
          <div key={item.day} className="flex gap-4 border-b border-slate-200 pb-4 last:border-b-0 last:pb-0">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-orange-100 font-semibold text-orange-600">
              {item.day.replace(/\D/g, "")}
            </div>
            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">{item.day}</div>
              <h4 className="mt-1 text-lg font-bold text-slate-900">{item.title}</h4>
              <p className="mt-2 text-slate-600">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
