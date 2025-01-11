import { activeNavigation } from "./criteria/activeNavigation";
import { root } from "./criteria/root";
import { setCriteriaList } from "./criteria/setCriteriaList";
import { action } from "./criteria/translate/action";
import { settings } from "./criteria/translate/settings";
import { hiddenContentLoader } from "./universal/hiddenContentLoader";
import { setModalPanel } from "./universal/modalPanel/setModalPanel";
import { setSwitchLanguage } from "./universal/translate/original/setSwitchLanguage";
import { setSwitchLanguageAction } from "./universal/translate/originalAction/setSwitchLanguageAction";

setModalPanel();
root.navigationList.addEventListener("click", activeNavigation);

setCriteriaList();

setSwitchLanguage(settings);
setSwitchLanguageAction(action);

hiddenContentLoader();
