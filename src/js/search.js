import { root } from "./search/root";
import { changeMoreFilter } from "./search/changeMoreFilter";
import { hiddenContentLoader } from "./universal/hiddenContentLoader";
import { resetForm } from "./search/resetForm";
import "./universal/btnUpSettings";
import { setSwitchVariableLanguage } from "./universal/translate/variable/setSwitchVariableLanguage";
import { setSwitchLanguage } from "./universal/translate/original/setSwitchLanguage";
import { settings } from "./search/translate/settings";
import { langs } from "./search/translate/langs";
import { searchCard } from "./search/searchCard";
import { setModalPanel } from "./universal/modalPanel/setModalPanel";

setModalPanel();

root.btnMore.addEventListener("click", changeMoreFilter);
root.resetBtn.addEventListener("click", resetForm);

searchCard.addSubmitEvent();
searchCard.showOpenCard();

setSwitchLanguage(settings);
setSwitchVariableLanguage(langs);

hiddenContentLoader();
