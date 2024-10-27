import { root } from "./root";

export const openModal = () => {
  window.scrollTo({ top: 0, left: 0 });
  document.body.style.overflow = "hidden";
  root.modal.classList.remove("is-hidden");
};

export const closeModal = () => {
  document.body.style.overflow = "auto";
  root.modal.classList.add("is-hidden");
};