import { showProfile } from "../profile/showProfile";
import { settings } from "../profile/translate/settings";
import { setSwitchLanguage } from "../universal/translate/original/setSwitchLanguage";
import { root } from "./root";

export async function hiddenSigninModal() {
  root.modalEl.classList.add("is-hidden");
  root.mainEl.classList.remove("is-hidden");
  document.body.removeAttribute("lock", "");

  const isProfilePage = document.querySelector(".profile-adverts");
  if (isProfilePage) {
    await setShowProfile();
  }
}

async function setShowProfile() {
  await showProfile();
  setSwitchLanguage(settings);
  const profileWrapper = document.querySelector(".profile-adverts");
  profileWrapper.classList.remove("is-hidden");
}
