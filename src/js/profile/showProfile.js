import { showUserInfo } from "./showUserInfo";
import { isSignin } from "../signin/isSignin";
import { getProfileCard } from "./getProfileCard";
import { root } from "./root";
import { getUserAdverts } from "../servise/api";
import { ProfileCard } from "./ProfileCard";

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
    getProfileCard
  );
  cards.showMainCard();
}
