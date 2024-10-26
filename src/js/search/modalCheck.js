import { root } from "./root";
import { closeModal, openModal } from "./toggleModal";

let isNotPhone = false;

export function modalCheck() {
  const state = window.matchMedia("(min-width: 768px)").matches;
  const isChangeToNotMobile = !isNotPhone && state;
  const isChangeToMobile = isNotPhone && !state;

  if (isChangeToMobile) {
    isNotPhone = false;
    closeModal();
  } else if (isChangeToNotMobile) {
    isNotPhone = true;
    root.modal.classList.remove("is-hidden");
  }
}
