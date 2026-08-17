"use client";

import { useEffect } from "react";

// Fires a single fire-and-forget view-tracking request. Deliberately tiny
// and side-effect-only so the parent page can stay a Server Component.
export default function ViewTracker({ slug }) {
  useEffect(() => {
    if (!slug) return;
    fetch("/api/blogs/track-view", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ slug }),
    }).catch(() => {
      // Non-critical — don't disrupt the page if tracking fails.
    });
  }, [slug]);

  return null;
}
