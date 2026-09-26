const features = [
  {
    title: "Tailor-made experiences",
    description: "We build private itineraries around your pace, priorities, and travel style.",
  },
  {
    title: "Local expertise",
    description: "Our team knows the best routes, hidden gems, and time-saving travel tips.",
  },
  {
    title: "Transparent planning",
    description: "Clear pricing, quality stays, and support from planning to departure day.",
  },
  {
    title: "Responsible travel",
    description: "We support community-led experiences and sustainable tourism practices.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="text-center">
        <p className="script text-[32px] text-[#1ca8cb]">Why choose us</p>
        <h2 className="mt-1 text-3xl font-extrabold tracking-[-0.04em] text-[#113d48] sm:text-4xl">
          Travel planning rooted in care
        </h2>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {features.map((feature) => (
          <div key={feature.title} className="rounded-3xl border border-[#d7eef4] bg-white p-6 shadow-[0_10px_30px_rgba(17,61,72,0.06)]">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#e7f7fb] text-xl text-[#1ca8cb]">
              ✦
            </div>
            <h3 className="text-xl font-bold text-[#113d48]">{feature.title}</h3>
            <p className="mt-3 text-[#5b7178]">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
