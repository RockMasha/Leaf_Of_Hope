import { showUserInfo } from "./showUserInfo";
import { isSignin } from "../signin/isSignin";
import { profileCards } from "./profileCards";

export async function showProfile(user) {  
  if (!user) {
    user = await isSignin();
    user = user.user;
  }

  showUserInfo(user);
  profileCards.showMainCard();
}
