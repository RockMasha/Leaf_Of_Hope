import { setCurrentLanguage } from "../universal/currentLanguage/setCurrentLanguage";
import { translateAllPage } from "./translateAllPage";

export function switchLanguage(event, settings) {
  const targetEl = event.target;
  const isEnglish = targetEl.checked;
  const lang = isEnglish ? "en" : "ua";

  translateAllPage(settings, lang);
  setCurrentLanguage(lang);
}
