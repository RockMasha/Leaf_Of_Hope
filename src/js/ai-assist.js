import { setChat } from "./ai-assist/setChat";
import { settings } from "./ai-assist/translate/settings";
import { isSignin } from "./signin/isSignin";
import { showSigninModal } from "./signin/showSigninModal";
import { hiddenContentLoader } from "./universal/hiddenContentLoader";
import { translateAllPage } from "./universal/translate/original/translateAllPage";
import { getCurrentLanguage } from "./universal/translate/universal/currentLanguage/getCurrentLanguage";

const lang = getCurrentLanguage()
if (lang === "en") {
  translateAllPage(settings);
}

const user = await isSignin();

if (!user) {
  showSigninModal();
} else {
  setChat(user);
}
hiddenContentLoader();
