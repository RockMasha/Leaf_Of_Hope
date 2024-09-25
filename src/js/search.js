import { modalCheck } from "./search/modalCheck";
import { root } from "./search/root";
import { closeModal, openModal } from "./search/toggleModal";

modalCheck()
window.addEventListener("resize", modalCheck);
root.openModalBtn.addEventListener("click", openModal)
root.closeModalBtn.addEventListener("click", closeModal)