const posts = [
  {
    title: "How to plan a first island holiday",
    date: "September 12, 2026",
    excerpt: "A practical route for first-time travelers who want culture, wildlife, and beach time without rushing.",
  },
  {
    title: "Best months for hiking and tea country",
    date: "August 28, 2026",
    excerpt: "Weather notes, packing tips, and scenic train advice for cooler highland days.",
  },
  {
    title: "Safari mornings and coastal sunsets",
    date: "July 4, 2026",
    excerpt: "How to combine a wildlife circuit with a slower beach escape in one trip.",
  },
];

export default function BlogPage() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <p className="script text-[32px] text-[#1ca8cb]">Travel Stories</p>
      <h1 className="mt-1 text-4xl font-extrabold tracking-[-0.04em] text-[#113d48]">Blog</h1>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {posts.map((post) => (
          <article key={post.title} className="rounded-3xl border border-[#d7eef4] bg-white p-6 shadow-sm">
            <p className="text-sm text-[#1ca8cb]">{post.date}</p>
            <h2 className="mt-2 text-xl font-bold text-[#113d48]">{post.title}</h2>
            <p className="mt-3 text-[#5b7178]">{post.excerpt}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
