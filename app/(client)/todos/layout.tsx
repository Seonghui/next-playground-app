"use client";

import { useSelectedLayoutSegments } from "next/navigation";

export default function TodosLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  const segments = useSelectedLayoutSegments();
  return (
    <section>
      <p>TodosLayout</p>

      {children}
    </section>
  );
}
