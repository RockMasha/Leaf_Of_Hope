import { root } from "./root";
import { closeModal } from "./toggleModal";

export const modalCheck = () => {
    const isNotPhone = window.matchMedia("(min-width: 768px)").matches

    if(isNotPhone && root.modal.classList.contains("is-hidden")){
        root.modal.classList.remove("is-hidden");
    }
    else if(!isNotPhone && !root.modal.classList.contains("is-hidden")){
        closeModal()
    }
};
