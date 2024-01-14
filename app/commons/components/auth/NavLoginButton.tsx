"use client";

import { Button } from "antd";
import { COOKIE_KEY } from "../../constants";
import { useRouter } from "next/navigation";
import useAuth from "../../hooks/useAuth";
import { Fragment, useEffect, useState } from "react";
import useMount from "../../hooks/useMount";

export default function NavLoginButton() {
  const mounted = useMount();

  const { clearToken, hasToken } = useAuth();
  const router = useRouter();
  const handleClickLogout = () => {
    clearToken();
    router.push("/client");
    router.refresh();
  };
  if (!mounted) {
    return <Fragment />;
  }

  return (
    <>
      {hasToken ? (
        <>
          <Button
            type="text"
            onClick={handleClickLogout}
            style={{ color: "white" }}
          >
            로그아웃
          </Button>
        </>
      ) : (
        <Button type="link" href="/auth/login" style={{ color: "white" }}>
          로그인
        </Button>
      )}
    </>
  );
}
