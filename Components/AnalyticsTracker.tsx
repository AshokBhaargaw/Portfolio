"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function AnalyticsTracker() {
  const pathname = usePathname();

  useEffect(() => {
    fetch("/api/analytics", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        event: "page_view",
        path: pathname,
        device: window.innerWidth < 768 ? "mobile" : "desktop",
        referrer: document.referrer || "direct",
      }),
    });
  }, [pathname]); // 🔴 KEY FIX

  return null;
}
