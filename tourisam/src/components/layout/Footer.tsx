import Link from "next/link";
import { siteConfig } from "@/config/site";

export function Footer() {
  return (
    <footer className="bg-[#0e2a33] text-slate-200">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div>
          <div className="mb-4 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1ca8cb] text-lg text-white">✈</div>
            <div>
              <div className="script text-3xl leading-none text-white">{siteConfig.name}</div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-white/70">{siteConfig.tagline}</div>
            </div>
          </div>
          <p className="text-sm text-slate-300">
            Curated tours, private journeys, and immersive experiences designed around unforgettable places.
          </p>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#7ed7ea]">Explore</h3>
          <ul className="space-y-3 text-sm text-slate-300">
            <li><Link href="/about" className="hover:text-white">About us</Link></li>
            <li><Link href="/tours" className="hover:text-white">Tours</Link></li>
            <li><Link href="/destinations" className="hover:text-white">Destinations</Link></li>
            <li><Link href="/gallery" className="hover:text-white">Gallery</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#7ed7ea]">Support</h3>
          <ul className="space-y-3 text-sm text-slate-300">
            <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
            <li><a href={siteConfig.whatsapp} className="hover:text-white" target="_blank" rel="noreferrer">WhatsApp</a></li>
            <li><a href={`mailto:${siteConfig.email}`} className="hover:text-white">Email us</a></li>
            <li><a href={siteConfig.github} className="hover:text-white" target="_blank" rel="noreferrer">GitHub</a></li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#7ed7ea]">Contact</h3>
          <ul className="space-y-3 text-sm text-slate-300">
            <li>{siteConfig.phone}</li>
            <li>{siteConfig.email}</li>
            <li>Explore World</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-5 text-sm text-slate-400 sm:px-6 lg:px-8">
          <p>© 2026 Tourm</p>
          <p>Made for unforgettable journeys</p>
        </div>
      </div>
    </footer>
  );
}
