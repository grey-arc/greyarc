"use client";

import { useEffect } from "react";

// Scrolls to a section when the URL has a hash (e.g. /#contact). Kept as
// a tiny, side-effect-only client component so the homepage itself can
// stay a Server Component for initial render/SEO purposes.
export default function HashScrollHandler() {
  useEffect(() => {
    const hash = window.location.hash;
    if (!hash) return;

    const id = hash.replace("#", "");
    const el = document.getElementById(id);

    if (el) {
      setTimeout(() => {
        const yOffset = -80;
        const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }, 100);
    }
  }, []);

  return null;
}
