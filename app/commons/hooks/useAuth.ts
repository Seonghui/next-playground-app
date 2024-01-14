import { LOCAL_STORAGE_KEY } from "../constants";

export default function useAuth() {
  const token = localStorage.getItem(LOCAL_STORAGE_KEY.accessToken);
  const clearToken = () =>
    localStorage.removeItem(LOCAL_STORAGE_KEY.accessToken);
  const setToken = (token: string) =>
    localStorage.setItem(LOCAL_STORAGE_KEY.accessToken, token);

  return {
    hasToken: !!token,
    clearToken,
    setToken,
  };
}
