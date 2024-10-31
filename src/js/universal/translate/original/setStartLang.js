import { getCurrentLanguage } from "../universal/currentLanguage/getCurrentLanguage";

export function setStartLang(switchEl) {
  const lang = getCurrentLanguage();

  if (lang === "ua") {
    return;
  }
  switchEl.checked = true;
  switchEl.dispatchEvent(new Event("change"));
}
