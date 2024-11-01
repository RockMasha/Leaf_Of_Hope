import { setCurrentVariableLanguage } from "../universal/currentLanguage/setCurrentLanguage";

const spanEl = document.querySelector(".translate-variable__span");

export function switchVariableLanguage(event, langs) {
  const radioEl = event.currentTarget;

  if (radioEl.checked) {
    switch (radioEl.value) {
      case "ua":
        spanEl.setAttribute("lang", "ua");
        setCurrentVariableLanguage("ua");
        langs?.setUkrainian();
        break;

      case "en":
        spanEl.setAttribute("lang", "en");
        setCurrentVariableLanguage("en");
        langs?.setEnglish();
        break;

      case "or":
        spanEl.setAttribute("lang", "or");
        setCurrentVariableLanguage("or");
        langs?.setOriginal();
        break;
      default:
    }
  }
}
