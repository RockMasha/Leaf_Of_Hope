import { root } from "./ai-assist/root";
import { setChat } from "./ai-assist/setChat";
import { setEnterText } from "./ai-assist/setEnterText";
import { settings } from "./ai-assist/translate/settings";
import { isSignin } from "./signin/isSignin";
import { showSigninModal } from "./signin/showSigninModal";
import { hiddenContentLoader } from "./universal/hiddenContentLoader";
import { setSwitchLanguage } from "./universal/translate/original/setSwitchLanguage";

setSwitchLanguage(settings);

const user = await isSignin();

if (!user) {
  showSigninModal();
} else {
  setChat(user);
}

root.panelEnter.addEventListener("input", setEnterText);

hiddenContentLoader();
