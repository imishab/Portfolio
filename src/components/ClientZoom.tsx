"use client";

import { useEffect } from "react";

export default function ClientZoom({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    document.body.style.zoom = "88%";
  }, []);

  return <>{children}</>;
}
