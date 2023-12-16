"use client";

import { useEffect } from "react";

// Re-rendered layout
export default function ClientTemplate({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    console.log("ClientTemplate Rendered");
  }, []);
  return (
    <div>
      <p>ClientTemplate</p>
      {children}
    </div>
  );
}
