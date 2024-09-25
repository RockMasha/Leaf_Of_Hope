import { root } from "./root";
import { closeModal } from "./toggleModal";

export const modalCheck = (e) => {
    const isNotAPhone = window.matchMedia("(min-width: 768px)").matches
    if(isNotAPhone && root.modal.classList.contains("is-hidden")){
        root.modal.classList.remove("is-hidden");
    }
    else if(!isNotAPhone && !root.modal.classList.contains("is-hidden")){
        closeModal()
    }
};
