"use client";

import { useEffect, useState } from "react";
import { siteConfig } from "@/config/site";

export function WhatsAppButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 520);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <a
      href={siteConfig.whatsapp}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 left-6 z-50 inline-flex items-center gap-2 rounded-full bg-[#25d366] px-5 py-3 text-sm font-semibold text-white shadow-lg"
    >
      WhatsApp
    </a>
  );
}
