const modalEl = document.querySelector("#modal-js");

export const openModal = () => {
  window.scrollTo({ top: 0, left: 0 });
  document.body.style.overflow = "hidden";
  modalEl.classList.remove("is-hidden");
};

export const closeModal = () => {
  document.body.style.overflow = "auto";
  modalEl.classList.add("is-hidden");
};
