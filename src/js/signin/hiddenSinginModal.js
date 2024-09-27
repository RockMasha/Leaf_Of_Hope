import { modalEl } from "./modalEl";

export function hiddenSigninModal() {
  modalEl.classList.add("is-hidden");
  body.removeAttribute("lock", "");
}
