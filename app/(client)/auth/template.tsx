"use client";

import { Menu, MenuProps } from "antd";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isLoginPage = pathname === "/auth/login";

  const [current, setCurrent] = useState(isLoginPage ? "login" : "register");

  const onClick: MenuProps["onClick"] = (e) => {
    setCurrent(e.key);
  };

  const items = [
    {
      key: "login",
      label: <Link href={`/auth/login`}>Login</Link>,
    },
    {
      key: "register",
      label: <Link href={`/auth/register`}>Register</Link>,
    },
  ];
  return (
    <div>
      <Menu
        style={{ width: 153, margin: "0 auto 36px", border: 0 }}
        onClick={onClick}
        selectedKeys={[current]}
        mode="horizontal"
        items={items}
      />
      {children}
    </div>
  );
}
