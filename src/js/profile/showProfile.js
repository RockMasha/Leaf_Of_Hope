import { showUserInfo } from "./showUserInfo";
import { isSignin } from "../signin/isSignin";
import { getProfileCard } from "./getProfileCard";
import { root } from "./root";
import { getUserAdverts } from "../servise/api";
import { ProfileCard } from "./ProfileCard";
import { setInProgressLoader } from "../universal/inProgressLoadder/setInProgressLoader";
import { removeInProgressLoader } from "../universal/inProgressLoadder/removeInProgressLoader";

export async function showProfile(user) {
  setInProgressLoader();
  if (!user) {
    user = await isSignin();
    user = user.user;
  }

  showUserInfo(user);
  const cards = new ProfileCard(
    root.profileAdverts,
    getUserAdverts,
    getProfileCard
  );
  cards.showMainCard();
  removeInProgressLoader();
}
