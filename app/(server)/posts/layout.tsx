"use client";

import { useSelectedLayoutSegments } from "next/navigation";

export default function PostsLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  const segments = useSelectedLayoutSegments();
  return (
    <section>
      <p>PostsLayout</p>
      {/* Include shared UI here e.g. a header or sidebar */}
      <nav>
        <ul>
          {segments.map((segment, index) => (
            <li key={index}>segment {segment}</li>
          ))}
        </ul>
      </nav>

      {children}
    </section>
  );
}
