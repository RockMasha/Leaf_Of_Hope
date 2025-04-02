import { logout } from "../servise/api";
import { deleteToken } from "../token/deleteToken";
import { changePage } from "../universal/chanhePage";
import { removeInProgressLoader } from "../universal/inProgressLoadder/removeInProgressLoader";
import { setInProgressLoader } from "../universal/inProgressLoadder/setInProgressLoader";

export async function logoutUser(event) {
  event.target.removeEventListener("click", logoutUser);
  setInProgressLoader();
  try {
    await logout();
    deleteToken();
    changePage("index.html");
  } catch (error) {
    console.log(error);
  } finally {
    removeInProgressLoader();
  }
}
