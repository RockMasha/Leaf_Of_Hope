import { showUserInfo } from "./showUserInfo";
import { showUserAdverts } from "./showUserAdverts";
import { isSignin } from "../signin/isSignin";

export async function showProfile(user) {
  if (!user) {
    user = await isSignin();
    user = user.user;
  }

  showUserInfo(user);
  showUserAdverts();
}
