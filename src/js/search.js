import { modalCheck } from "./search/modalCheck";
import { root } from "./search/root";
import { SearchCards } from "./search/SearchCards";
import { changeMoreFilter } from "./search/changeMoreFilter";
import { closeModal, openModal } from "./search/toggleModal";
import { hiddenContentLoader } from "./universal/hiddenContentLoader";
import { resetForm } from "./search/resetForm";
import "./universal/btnUpSettings";
import { setSwitchVariableLanguage } from "./universal/translate/variable/setSwitchVariableLanguage";
import { setSwitchLanguage } from "./universal/translate/original/setSwitchLanguage";
import { settings } from "./search/translate/settings";
import { langs } from "./search/translate/langs";

modalCheck();
window.addEventListener("resize", modalCheck);
root.openModalBtn.addEventListener("click", openModal);
root.closeModalBtn.addEventListener("click", closeModal);
root.btnMore.addEventListener("click", changeMoreFilter);
root.resetBtn.addEventListener("click", resetForm);

const advertCard = new SearchCards(root.leftSide, root.form);
advertCard.addSubmitEvent();
advertCard.showOpenCard();

setSwitchLanguage(settings);
setSwitchVariableLanguage(langs);

hiddenContentLoader();
