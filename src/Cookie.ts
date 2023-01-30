import { Cookies } from "react-cookie";

const cookies = new Cookies();

interface cookieType {
  path: string;
  sameSite: boolean | "none" | "lax" | "strict" | undefined;
}

export const setCookie = (name: string, value: string, option: cookieType) => {
  return cookies.set(name, value, { ...option });
};

export const getCookie = (name: string) => {
  return cookies.get(name);
};

export const removeCookie = (name: string, option: cookieType) => {
  return cookies.remove(name, { ...option });
};
