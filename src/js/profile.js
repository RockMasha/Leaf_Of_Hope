import { isSignin } from "./signin/isSignin";
import { showSigninModal } from "./signin/showSigninModal";
import { showProfile } from "./profile/showProfile";
import { hiddenContentLoader } from "./universal/hiddenContentLoader";
import "./universal/btnUpSettings";
import { setSwitchLanguage } from "./universal/translate/original/setSwitchLanguage";
import { settings } from "./profile/translate/settings";
import { setSwitchVariableLanguage } from "./universal/translate/variable/setSwitchVariableLanguage";
import { langs } from "./profile/translate/langs";
import { root } from "./profile/root";

const answer = await isSignin();

if (answer) {
  await showProfile(answer.user);
} else {
  root.profileAdverts.classList.add("is-hidden");
  showSigninModal();
}
setSwitchLanguage(settings);
setSwitchVariableLanguage(langs);

hiddenContentLoader();
