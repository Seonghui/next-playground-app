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
      <p>TodosTemplate</p>
      {children}
    </div>
  );
}
