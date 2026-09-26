import type { Tour } from "@/types";

export function TourGallery({ tour }: { tour: Tour }) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <h3 className="text-2xl font-bold text-slate-900">Photo gallery</h3>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {tour.gallery.map((image, index) => (
          <img key={`${image}-${index}`} src={image} alt={`${tour.name} gallery ${index + 1}`} className="h-52 w-full rounded-2xl object-cover" />
        ))}
      </div>
    </div>
  );
}
