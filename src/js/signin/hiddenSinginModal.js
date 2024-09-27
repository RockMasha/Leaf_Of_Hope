import { modalEl } from "./modalEl";

export function hiddenSigninModal() {
  modalEl.classList.add("is-hidden");
  document.body.removeAttribute("lock", "");
}
