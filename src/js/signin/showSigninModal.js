import { root } from "./root";
import { signinUser } from "./signinUser";

export function showSigninModal() {
  root.modalEl.classList.remove("is-hidden");
  document.body.setAttribute("lock", "");
  root.modalEl.addEventListener("submit", signinUser);

  const isProfilePage = document.querySelector(".profile-adverts");
}
