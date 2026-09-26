import { destinations } from "@/data/destinations";
import { tours } from "@/data/tours";
import { SectionTitle } from "@/components/ui/SectionTitle";

const galleryImages = [
  ...destinations.map((destination) => destination.image),
  ...tours.flatMap((tour) => tour.gallery),
];

export default function GalleryPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionTitle
        eyebrow="Gallery"
        title="A glimpse of Sri Lanka's beauty"
        description="Every frame captures the color, calm, and wonder that make our island so memorable."
      />

      <div className="mt-10 columns-1 gap-5 space-y-5 sm:columns-2 lg:columns-3">
        {galleryImages.map((image, index) => (
          <img
            key={`${image}-${index}`}
            src={image}
            alt={`Sri Lanka landscape ${index + 1}`}
            className="w-full rounded-3xl object-cover shadow-sm"
          />
        ))}
      </div>
    </main>
  );
}
