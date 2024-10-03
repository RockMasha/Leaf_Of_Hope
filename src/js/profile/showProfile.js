import { showUserInfo } from "./showUserInfo";
import { isSignin } from "../signin/isSignin";
import { Cards } from "../universal/Cards";
import { createProfileCard } from "./createProfileCard";
import { root } from "./root";
import { getUserAdverts } from "../servise/api";

export async function showProfile(user) {
  if (!user) {
    user = await isSignin();
    user = user.user;
  }

  showUserInfo(user);
  root.advertsTitle.textContent = "Мої оголошення:";
  const cards = new Cards(
    root.profileAdverts,
    getUserAdverts,
    createProfileCard
  );
  cards.showMainCard();
}
