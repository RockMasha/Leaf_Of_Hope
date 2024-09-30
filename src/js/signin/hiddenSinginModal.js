import { showProfile } from "../profile/showProfile";
import { modalEl } from "./root";

export async function hiddenSigninModal() {
  modalEl.classList.add("is-hidden");
  document.body.removeAttribute("lock", "");

  const isProfilePage = document.querySelector(".profile-adverts");
  if (isProfilePage) {
    showProfile();
  }
}
