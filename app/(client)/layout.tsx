import Link from "next/link";

export default function Layout({
  children,
  analytics,
  team,
}: {
  children: React.ReactNode;
  analytics: React.ReactNode;
  team: React.ReactNode;
}) {
  return (
    <div>
      {/* <div>analytics {analytics}</div> */}
      <div>team {team}</div>
      {children}
    </div>
  );
}
