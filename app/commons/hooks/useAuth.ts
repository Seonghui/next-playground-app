import { deleteCookie, getCookie, setCookie } from "cookies-next";
import { COOKIE_KEY } from "../constants";

export default function useAuth() {
  const token = getCookie(COOKIE_KEY.accessToken);
  const clearToken = () => deleteCookie(COOKIE_KEY.accessToken);
  const setToken = (token: string) => setCookie(COOKIE_KEY.accessToken, token);

  console.log(token);

  return {
    hasToken: !!token,
    clearToken,
    setToken,
  };
}
