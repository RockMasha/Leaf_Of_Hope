import { modalEl } from "./modalEl";
import { signinUser } from "./signinUser";

export function showSigninModal() {
  modalEl.classList.remove("is-hidden");
  document.body.setAttribute("lock", "");
  modalEl.addEventListener("submit", signinUser);
}
