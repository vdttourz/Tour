"use client";

import Link from "next/link";
import { useState } from "react";

const slides = [
  {
    name: "Island",
    listings: "22 Listing",
    href: "/destinations/galle",
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Maldives",
    listings: "15 Listing",
    href: "/destinations/galle",
    image: "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Maldives",
    listings: "15 Listing",
    href: "/destinations/galle",
    image: "https://images.unsplash.com/photo-1539635278303-d4002c07eae3?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Lagoon",
    listings: "18 Listing",
    href: "/destinations/yala",
    image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Coast",
    listings: "12 Listing",
    href: "/destinations/ella",
    image: "https://images.unsplash.com/photo-1468413253725-0d5181091126?auto=format&fit=crop&w=900&q=80",
  },
];

function offsetOf(index: number, active: number, length: number) {
  let diff = index - active;
  if (diff > length / 2) diff -= length;
  if (diff < -length / 2) diff += length;
  return diff;
}

export function PopularDestinations() {
  const [active, setActive] = useState(2);

  return (
    <section className="destination-section">
      <div className="mx-auto max-w-[1280px] px-4 text-center">
        <p className="script text-[32px] text-[#1ca8cb] sm:text-[40px]">Top Destination</p>
        <h2 className="mt-1 text-4xl font-extrabold tracking-[-0.04em] text-[#113d48] sm:text-5xl">Popular Destination</h2>

        <div className="coverflow">
          {slides.map((slide, index) => {
            const offset = offsetOf(index, active, slides.length);
            const abs = Math.abs(offset);
            if (abs > 2) return null;

            const transform = `translate(-50%, -50%) translateX(${offset * 210}px) translateZ(${-Math.abs(offset) * 140}px) rotateY(${offset * -22}deg) scale(${1 - abs * 0.12})`;

            return (
              <article
                key={`${slide.name}-${index}`}
                className="cover-card"
                style={{
                  transform,
                  opacity: abs === 2 ? 0.55 : 1,
                  filter: abs === 0 ? "none" : "brightness(0.82)",
                  zIndex: 10 - abs,
                }}
                onClick={() => setActive(index)}
              >
                <img src={slide.image} alt={slide.name} />
                {abs === 0 ? (
                  <div className="cover-overlay">
                    <div className="flex items-end justify-between gap-3">
                      <div className="text-left">
                        <h3>{slide.name}</h3>
                        <p>{slide.listings}</p>
                      </div>
                      <Link href={slide.href} className="view-all">
                        View All →
                      </Link>
                    </div>
                  </div>
                ) : null}
              </article>
            );
          })}
        </div>

        <div className="dots">
          {slides.map((slide, index) => (
            <button
              key={`${slide.name}-dot-${index}`}
              type="button"
              className={`dot ${index === active ? "dot-active" : ""}`}
              aria-label={`Show ${slide.name}`}
              onClick={() => setActive(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
