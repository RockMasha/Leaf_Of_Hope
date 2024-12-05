import { getCurrentLanguage } from "../universal/translate/universal/currentLanguage/getCurrentLanguage";
import { root } from "./root";

export function setEnterText(event) {
  let value = event.target.value;

  if (value.trim() === "") {
    const lang = getCurrentLanguage();
    value = lang === "ua" ? "Написати..." : "Write...";
  }

  root.panelText.textContent = value;
}
