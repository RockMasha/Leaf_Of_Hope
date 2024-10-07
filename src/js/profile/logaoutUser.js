import { logout } from "../servise/api";
import { deleteToken } from "../token/deleteToken";

export async function logoutUser() {
  try {
    await logout();
    deleteToken();
    window.location.href = "index.html";
  } catch (error) {
    console.log(error);
  }
}
