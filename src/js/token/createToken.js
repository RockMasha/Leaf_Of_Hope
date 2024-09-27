import { setAuthHeader } from "../servise/api";

export function createToken(token) {
  localStorage.setItem("token", `${token}`);
  setAuthHeader(token);
}
