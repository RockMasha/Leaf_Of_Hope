import { modalCheck } from "./search/modalCheck";
import { root } from "./search/root";
import { SearchCards } from "./search/SearchCards";
import { closeModal, openModal } from "./search/toggleModal";
import { hiddenContentLoader } from "./universal/hiddenContentLoader";

modalCheck();
window.addEventListener("resize", modalCheck);
root.openModalBtn.addEventListener("click", openModal);
root.closeModalBtn.addEventListener("click", closeModal);

const advertCard = new SearchCards(root.leftSide, root.form);
advertCard.addSubmitEvent();

hiddenContentLoader();

advertCard.showOpenCard();
