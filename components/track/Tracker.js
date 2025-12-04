"use client";

import { useEffect } from "react";

export default function VisitTracker() {
  useEffect(() => {
    const trackVisit = async () => {
      // Generate or get visitor ID
      let visitorId = localStorage.getItem("visitorId");
      if (!visitorId) {
        visitorId = `visitor_${Date.now()}_${Math.random()
          .toString(36)
          .substr(2, 9)}`;
        localStorage.setItem("visitorId", visitorId);
      }

      // Track the visit
      try {
        await fetch("/api/visits/track", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            visitorId,
            userAgent: navigator.userAgent,
          }),
        });
      } catch (error) {
        console.error("Failed to track visit:", error);
      }
    };

    trackVisit();
  }, []);

  // This component doesn't render anything
  return null;
}
