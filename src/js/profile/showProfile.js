import { showUserInfo } from "./showUserInfo";
import { isSignin } from "../signin/isSignin";
import { setInProgressLoader } from "../universal/inProgressLoadder/setInProgressLoader";
import { removeInProgressLoader } from "../universal/inProgressLoadder/removeInProgressLoader";
import { profileCards } from "./profileCards";

export async function showProfile(user) {
  setInProgressLoader();
  if (!user) {
    user = await isSignin();
    user = user.user;
  }

  showUserInfo(user);
  profileCards.showMainCard();
  removeInProgressLoader();
}
