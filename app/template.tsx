import Link from "next/link";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <ul>
        <li>
          <Link href="/todos">todos</Link>
          <Link href="/posts">posts</Link>
        </li>
        <li></li>
      </ul>
      {children}
    </div>
  );
}
