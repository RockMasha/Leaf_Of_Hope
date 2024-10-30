import { setOriginalLanguage } from "./setOriginalLanguage";
import { setTranslate } from "./setTranslate";

export function translatePage(event) {
  const targetEl = event.target;
  const orEl = targetEl.closest(".translate-language-wrapper_or");
  const inputEl = targetEl.closest(".translate__input");

  if (!orEl && !inputEl) {
    return;
  }

  if (orEl) {
    setOriginalLanguage();
  }
  if (inputEl) {
    setTranslate();
  }
}
