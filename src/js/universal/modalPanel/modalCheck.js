import { closeModal } from "./toggleModal";

let isNotPhone = false;
export const modalEl = document.querySelector("#modal-js");

export function modalCheck() {
  const state = window.matchMedia("(min-width: 768px)").matches;
  const isChangeToNotMobile = !isNotPhone && state;
  const isChangeToMobile = isNotPhone && !state;

  if (isChangeToMobile) {
    isNotPhone = false;
    closeModal(modalEl);
  } else if (isChangeToNotMobile) {
    isNotPhone = true;
    modalEl.classList.remove("is-hidden");
  }
}
