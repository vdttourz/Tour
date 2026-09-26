"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "@/config/site";

type NavbarProps = {
  mobile?: boolean;
  onNavigate?: () => void;
};

export function Navbar({ mobile = false, onNavigate }: NavbarProps) {
  const pathname = usePathname();

  if (mobile) {
    return (
      <nav className="flex flex-col gap-1">
        {navItems.map((item) => (
          <Link
            key={`${item.label}-${item.href}`}
            href={item.href}
            onClick={onNavigate}
            className={`rounded-xl px-3 py-2 text-[#163944] ${pathname === item.href ? "bg-[#eef8fb] text-[#1ca8cb]" : ""}`}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    );
  }

  return (
    <nav className="flex items-center gap-6 xl:gap-8">
      {navItems.map((item) => {
        const active = pathname === item.href;
        return (
          <div key={`${item.label}-${item.href}`} className="nav-item relative">
            <Link href={item.href} className={`nav-link ${active ? "nav-link-active" : ""}`}>
              {item.label}
              {item.children ? <span className="nav-caret">▾</span> : null}
            </Link>
            {item.children ? (
              <div className="dropdown">
                {item.children.map((child) => (
                  <Link key={child.href + child.label} href={child.href}>
                    {child.label}
                  </Link>
                ))}
              </div>
            ) : null}
          </div>
        );
      })}
    </nav>
  );
}
