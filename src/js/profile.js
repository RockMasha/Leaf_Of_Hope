import { isSignin } from "./signin/isSignin";
import { showSigninModal } from "./signin/showSigninModal";
import { showProfile } from "./profile/showProfile";
import { hiddenContentLoader } from "./universal/hiddenContentLoader";
import "./universal/btnUpSettings";
import { setSwitchLanguage } from "./universal/translate/original/setSwitchLanguage";
import { settings } from "./profile/translate/settings";
import { setSwitchVariableLanguage } from "./universal/translate/variable/setSwitchVariableLanguage";
import { langs } from "./profile/translate/langs";

const answer = await isSignin();
if (answer) {
  await showProfile(answer.user);
} else {
  showSigninModal();
}
setSwitchLanguage(settings);
setSwitchVariableLanguage(langs);

hiddenContentLoader();
