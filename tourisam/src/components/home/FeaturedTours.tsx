"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

const categories = [
  {
    name: "Wildlife",
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Walking",
    image: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Cruises",
    image: "https://images.unsplash.com/photo-1548574505-5e239809ee19?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Hiking",
    image: "https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Airbirds",
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Beaches",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Culture",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Safari",
    image: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?auto=format&fit=crop&w=800&q=80",
  },
];

const rotations = [-14, -7, 0, 7, 14];
const lifts = [46, 18, 0, 18, 46];

export function FeaturedTours() {
  const [page, setPage] = useState(0);
  const visible = useMemo(() => {
    const start = page % categories.length;
    return Array.from({ length: 5 }, (_, index) => categories[(start + index) % categories.length]);
  }, [page]);

  return (
    <section className="tour-categories">
      <div className="relative z-[1] mx-auto max-w-[1280px] px-4 text-center">
        <p className="script text-[32px] text-[#1ca8cb] sm:text-[40px]">Wonderful Place For You</p>
        <h2 className="mt-1 text-4xl font-extrabold tracking-[-0.04em] text-[#113d48] sm:text-5xl">Tour Categories</h2>

        <div className="fan-row">
          {visible.map((category, index) => (
            <article
              key={`${category.name}-${index}`}
              className="fan-card"
              style={{
                transform: `rotate(${rotations[index]}deg) translateY(${lifts[index]}px)`,
                zIndex: index === 2 ? 3 : 1,
              }}
            >
              <img src={category.image} alt={category.name} />
              <h3>{category.name}</h3>
              <Link href={`/tours?category=${encodeURIComponent(category.name)}`}>See More</Link>
            </article>
          ))}
        </div>

        <div className="dots">
          {categories.map((category, index) => (
            <button
              key={category.name}
              type="button"
              className={`dot ${index === page ? "dot-active" : ""}`}
              aria-label={`Show ${category.name} set`}
              onClick={() => setPage(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
