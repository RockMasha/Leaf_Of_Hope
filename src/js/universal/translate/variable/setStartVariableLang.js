import { getCurrentVariableLang } from "../universal/currentLanguage/getCurrentLanguage";

export function setStartVariableLang() {
  const lang = getCurrentVariableLang();

  if (lang === "or") {
    return;
  }
  const radioEl = document.querySelector(
    `.translate-variable__input[value="${lang}"]`
  );

  radioEl.checked = true;
  radioEl.dispatchEvent(new Event("change"));
}
