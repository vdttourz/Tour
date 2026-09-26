import { Button } from "@/components/ui/Button";
import { SectionTitle } from "@/components/ui/SectionTitle";

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionTitle
        eyebrow="About us"
        title="Sri Lanka, planned with heart and local knowledge"
        description="We create travel experiences that balance iconic sights with the quiet magic that makes a destination memorable."
      />

      <div className="mt-12 grid gap-10 lg:grid-cols-2">
        <div className="space-y-6 text-lg text-slate-600">
          <p>
            Our team brings together a love for Sri Lanka's landscapes, traditions, and warm hospitality.
            We believe the best journeys are personal, paced well, and rooted in real local insight.
          </p>
          <p>
            Every itinerary we design is shaped around travelers' interests—whether that means sunrise climbs, tea estate walks, wildlife safaris, or slow beach days.
          </p>
          <p>
            From first planning conversations to your final airport transfer, we aim to make every moment feel thoughtful, seamless, and unforgettable.
          </p>
          <Button href="/contact">Start planning</Button>
        </div>

        <div className="overflow-hidden rounded-3xl shadow-lg">
          <img
            src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80"
            alt="Sri Lanka landscape"
            className="h-full w-full object-cover"
          />
        </div>
      </div>

      <div className="mt-20 grid gap-6 md:grid-cols-3">
        {[
          { value: "12+", label: "Years in Sri Lankan travel" },
          { value: "4.9/5", label: "Average traveler review" },
          { value: "100%", label: "Custom planning approach" },
        ].map((item) => (
          <div key={item.label} className="rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm">
            <div className="text-4xl font-black text-slate-900">{item.value}</div>
            <div className="mt-2 text-slate-600">{item.label}</div>
          </div>
        ))}
      </div>
    </main>
  );
}
