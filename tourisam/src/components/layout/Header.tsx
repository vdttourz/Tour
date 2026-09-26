"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";

export function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [open, setOpen] = useState(false);

  return (
    <header className={`z-50 px-3 pt-4 sm:px-5 ${isHome ? "absolute inset-x-0 top-0" : "sticky top-0 bg-white/90 pb-3 backdrop-blur-md"}`}>
      <div className="header-bar mx-auto max-w-[1280px]">
        <div className="header-wave" aria-hidden="true">
          <svg viewBox="0 0 320 80" preserveAspectRatio="none">
            <path d="M0 0 H210 C236 0 232 18 252 34 C274 52 268 80 300 80 H0 Z" fill="#1ca8cb" />
          </svg>
        </div>

        <Link href="/" className="relative z-10 ml-5 mr-6 flex min-w-[170px] items-center gap-3 py-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/40 bg-white/15 text-xl text-white">
            ✈
          </span>
          <span className="leading-none text-white">
            <span className="script block text-[34px] leading-none">Tourm</span>
            <span className="mt-1 block text-[10px] uppercase tracking-[0.18em] opacity-90">Explore World</span>
          </span>
        </Link>

        <div className="relative z-10 hidden flex-1 items-center justify-center lg:flex">
          <Navbar />
        </div>

        <div className="relative z-10 ml-auto flex items-center gap-2">
          <button
            type="button"
            className="mr-2 inline-flex h-11 w-11 items-center justify-center rounded-full text-[#113d48] lg:hidden"
            aria-label="Open menu"
            onClick={() => setOpen((value) => !value)}
          >
            ☰
          </button>
          <Link href="/contact" className="book-now">
            Book Now <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>

      {open ? (
        <div className="relative z-20 mx-auto mt-2 max-w-[1280px] rounded-3xl bg-white p-4 shadow-lg lg:hidden">
          <Navbar mobile onNavigate={() => setOpen(false)} />
        </div>
      ) : null}
    </header>
  );
}
