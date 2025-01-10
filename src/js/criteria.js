import { setCriteriaList } from "./criteria/setCriteriaList";
import { action } from "./criteria/translate/action";
import { settings } from "./criteria/translate/settings";
import { hiddenContentLoader } from "./universal/hiddenContentLoader";
import { setSwitchLanguage } from "./universal/translate/original/setSwitchLanguage";
import { setSwitchLanguageAction } from "./universal/translate/originalAction/setSwitchLanguageAction";

setCriteriaList();

setSwitchLanguage(settings);
setSwitchLanguageAction(action);

hiddenContentLoader();
