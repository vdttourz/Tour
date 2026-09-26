"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { destinations } from "@/data/destinations";

const types = ["Adventure", "Cultural", "Wildlife", "Beach", "Honeymoon"];
const durations = ["1-3 Days", "4-7 Days", "8-14 Days", "15+ Days"];
const categories = ["Wildlife", "Walking", "Cruises", "Hiking", "Airbirds"];

export function Hero() {
  function scrollByPage(direction: "up" | "down") {
    window.scrollBy({ top: direction === "down" ? window.innerHeight * 0.85 : -window.innerHeight * 0.85, behavior: "smooth" });
  }

  return (
    <section className="hero-section">
      <div className="hero-media">
        <img
          src="https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=2200&q=80"
          alt="Tropical limestone islands and a longtail boat"
        />
      </div>
      <div className="hero-overlay" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-[1100px] flex-col items-center justify-center px-4 pb-28 pt-28 text-center">
        <p className="hero-script">Get unforgettable pleasure with us</p>
        <h1 className="hero-title">
          Let&apos;s make your
          <span className="block">best trip with us</span>
        </h1>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link href="/tours" className="pill-btn pill-primary">
            Explore Tours <span>→</span>
          </Link>
          <Link href="/services" className="pill-btn pill-outline">
            Our Services <span>→</span>
          </Link>
        </div>
      </div>

      <div className="hero-side-nav">
        <button type="button" className="hero-side-btn" aria-label="Previous section" onClick={() => scrollByPage("up")}>
          ↑
        </button>
        <div className="hero-side-line" />
        <button type="button" className="hero-side-btn" aria-label="Next section" onClick={() => scrollByPage("down")}>
          ↓
        </button>
      </div>
    </section>
  );
}

export function HeroSearch() {
  const router = useRouter();
  const [destination, setDestination] = useState("");
  const [type, setType] = useState("Adventure");
  const [duration, setDuration] = useState("");
  const [category, setCategory] = useState("");

  function onSearch(event: FormEvent) {
    event.preventDefault();
    const params = new URLSearchParams();
    if (destination) params.set("destination", destination);
    if (type) params.set("type", type);
    if (duration) params.set("duration", duration);
    if (category) params.set("category", category);
    router.push(`/tours?${params.toString()}`);
  }

  return (
    <div className="search-wrap">
      <form className="search-panel" onSubmit={onSearch}>
        <div className="search-field">
          <label>
            <LocationIcon />
            Destination
          </label>
          <select value={destination} onChange={(e) => setDestination(e.target.value)} aria-label="Select destination">
            <option value="">Select Destination</option>
            {destinations.map((item) => (
              <option key={item.slug} value={item.slug}>
                {item.name}
              </option>
            ))}
          </select>
        </div>
        <div className="search-field">
          <label>
            <TypeIcon />
            Type
          </label>
          <select value={type} onChange={(e) => setType(e.target.value)} aria-label="Select type">
            {types.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
        <div className="search-field">
          <label>
            <ClockIcon />
            Duration
          </label>
          <select value={duration} onChange={(e) => setDuration(e.target.value)} aria-label="Select duration">
            <option value="">Duration</option>
            {durations.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
        <div className="search-field">
          <label>
            <BagIcon />
            Tour Category
          </label>
          <select value={category} onChange={(e) => setCategory(e.target.value)} aria-label="Select category">
            <option value="">Select Category</option>
            {categories.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
        <button type="submit" className="search-submit">
          <SearchIcon />
          Search
        </button>
      </form>
    </div>
  );
}

function LocationIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1ca8cb" strokeWidth="2">
      <path d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11z" />
      <circle cx="12" cy="10" r="2.2" />
    </svg>
  );
}

function TypeIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1ca8cb" strokeWidth="2">
      <path d="M12 3l2.4 4.9 5.4.8-3.9 3.8.9 5.4L12 15.8 7.2 17.9l.9-5.4L4.2 8.7l5.4-.8z" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1ca8cb" strokeWidth="2">
      <circle cx="12" cy="12" r="8" />
      <path d="M12 8v5l3 2" />
    </svg>
  );
}

function BagIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1ca8cb" strokeWidth="2">
      <rect x="5" y="8" width="14" height="11" rx="2" />
      <path d="M9 8V7a3 3 0 0 1 6 0v1" />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
      <circle cx="11" cy="11" r="7" />
      <path d="M20 20l-3.2-3.2" />
    </svg>
  );
}
