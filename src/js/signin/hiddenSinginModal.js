import { root } from "../profile/root";
import { showProfile } from "../profile/showProfile";
import { settings } from "../profile/translate/settings";
import { setSwitchLanguage } from "../universal/translate/original/setSwitchLanguage";
import { modalEl } from "./root";

export async function hiddenSigninModal() {
  modalEl.classList.add("is-hidden");
  document.body.removeAttribute("lock", "");

  const isProfilePage = document.querySelector(".profile-adverts");
  if (isProfilePage) {
    await setShowProfile();
  }
}

async function setShowProfile() {
  await showProfile();
  setSwitchLanguage(settings);
  root.profileWrapper.classList.remove("is-hidden");
}
