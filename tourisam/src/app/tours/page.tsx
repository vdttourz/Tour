import { tours } from "@/data/tours";
import { destinations } from "@/data/destinations";
import { TourCard } from "@/components/tours/TourCard";
import { SectionTitle } from "@/components/ui/SectionTitle";

type ToursPageProps = {
  searchParams: Promise<{
    destination?: string | string[];
    type?: string | string[];
    duration?: string | string[];
    category?: string | string[];
  }>;
};

function first(value?: string | string[]) {
  return Array.isArray(value) ? value[0] : value;
}

export default async function ToursPage({ searchParams }: ToursPageProps) {
  const params = await searchParams;
  const destination = first(params.destination) ?? "";
  const type = first(params.type) ?? "";
  const duration = first(params.duration) ?? "";
  const category = first(params.category) ?? "";

  const selectedPlace = destinations.find((item) => item.slug === destination);

  const filtered = tours.filter((tour) => {
    if (selectedPlace && !tour.location.toLowerCase().includes(selectedPlace.name.toLowerCase()) && !tour.location.toLowerCase().includes(selectedPlace.region.toLowerCase())) {
      if (!tour.summary.toLowerCase().includes(selectedPlace.name.toLowerCase()) && !tour.description.toLowerCase().includes(selectedPlace.name.toLowerCase())) {
        return false;
      }
    }
    if (category && !`${tour.name} ${tour.summary} ${tour.description} ${tour.bestFor.join(" ")}`.toLowerCase().includes(category.toLowerCase())) {
      if (category === "Wildlife" && !tour.slug.includes("wildlife") && !tour.summary.toLowerCase().includes("wildlife") && !tour.summary.toLowerCase().includes("safari")) {
        return false;
      }
    }
    if (type && type !== "Adventure") {
      const haystack = `${tour.difficulty} ${tour.bestFor.join(" ")} ${tour.summary}`.toLowerCase();
      if (!haystack.includes(type.toLowerCase())) return false;
    }
    if (duration) {
      const days = Number.parseInt(tour.duration, 10);
      if (duration.startsWith("1-3") && days > 3) return false;
      if (duration.startsWith("4-7") && (days < 4 || days > 7)) return false;
      if (duration.startsWith("8-14") && (days < 8 || days > 14)) return false;
      if (duration.startsWith("15") && days < 15) return false;
    }
    return true;
  });

  const results = filtered.length ? filtered : tours;

  return (
    <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionTitle
        eyebrow="Our tours"
        title="Curated routes for every kind of traveler"
        description="Choose from our most loved escape plans, each designed to showcase the best of the island in a comfortable, memorable way."
      />

      {(destination || type || duration || category) && (
        <p className="mt-6 text-sm text-[#5b7178]">
          Showing matches for { [selectedPlace?.name || destination, type, duration, category].filter(Boolean).join(" · ") }
          {filtered.length === 0 ? " — no exact match, so we listed all tours." : ""}
        </p>
      )}

      <div className="mt-10 grid gap-8 lg:grid-cols-2">
        {results.map((tour) => (
          <TourCard key={tour.slug} tour={tour} />
        ))}
      </div>
    </main>
  );
}
