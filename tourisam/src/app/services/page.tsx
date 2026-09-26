import { Button } from "@/components/ui/Button";

const services = [
  {
    title: "Private Tours",
    description: "Custom itineraries with a dedicated guide, driver, and flexible pacing.",
  },
  {
    title: "Group Adventures",
    description: "Small-group trips for wildlife, hiking, culture, and coastal escapes.",
  },
  {
    title: "Airport Transfers",
    description: "Comfortable meet-and-greet transfers from arrival to your first stay.",
  },
  {
    title: "Stay Planning",
    description: "Handpicked hotels, villas, and eco lodges matched to your travel style.",
  },
];

export default function ServicesPage() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <p className="script text-[32px] text-[#1ca8cb]">Our Services</p>
      <h1 className="mt-1 text-4xl font-extrabold tracking-[-0.04em] text-[#113d48]">Travel support from start to finish</h1>
      <p className="mt-4 max-w-2xl text-lg text-[#5b7178]">
        From the first idea to the last transfer, we handle the details so you can enjoy the journey.
      </p>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {services.map((service) => (
          <article key={service.title} className="rounded-3xl border border-[#d7eef4] bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-bold text-[#113d48]">{service.title}</h2>
            <p className="mt-3 text-[#5b7178]">{service.description}</p>
          </article>
        ))}
      </div>
      <div className="mt-10">
        <Button href="/contact" className="bg-[#1ca8cb] shadow-none hover:bg-[#1593b3]">
          Book a consultation
        </Button>
      </div>
    </section>
  );
}
