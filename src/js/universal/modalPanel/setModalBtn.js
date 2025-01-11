import { closeModal, openModal } from "./toggleModal";

export function setModalBtn() {
  const openModalBtn = document.querySelector("#open-modal-js");
  const closeModalBtn = document.querySelector("#close-modal-js");

  openModalBtn.addEventListener("click", openModal);
  closeModalBtn.addEventListener("click", closeModal);
}
