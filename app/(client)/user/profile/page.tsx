"use client";

import useAuth from "@/app/commons/hooks/useAuth";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
  const { hasToken } = useAuth();
  if (!hasToken) {
    router.push("/auth/login");
  }
  return <>page</>;
}
