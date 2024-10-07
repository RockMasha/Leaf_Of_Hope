import { showUserInfo } from "./showUserInfo";
import { isSignin } from "../signin/isSignin";
import { createProfileCard } from "./createProfileCard";
import { root } from "./root";
import { getUserAdverts } from "../servise/api";
import { ProfileCard } from "./ProfileCard";
import { logoutUser } from "./logaoutUser";

export async function showProfile(user) {
  if (!user) {
    user = await isSignin();
    user = user.user;
  }

  showUserInfo(user);
  root.advertsTitle.textContent = "Мої оголошення:";
  const cards = new ProfileCard(
    root.profileAdverts,
    getUserAdverts,
    createProfileCard
  );
  cards.showMainCard();

  const logoutEl = document.querySelector(".user-info__logout");
  logoutEl.addEventListener("click", logoutUser);
}
