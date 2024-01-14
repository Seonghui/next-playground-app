"use client";

import { Button } from "antd";
import { LOCAL_STORAGE_KEY } from "../../constants";
import { useRouter } from "next/navigation";

export default function NavLoginButton() {
  const router = useRouter();
  const hasToken = localStorage.getItem(LOCAL_STORAGE_KEY.accessToken);
  const handleClickLogout = () => {
    localStorage.removeItem(LOCAL_STORAGE_KEY.accessToken);
    router.push("/client");
    router.refresh();
  };
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
