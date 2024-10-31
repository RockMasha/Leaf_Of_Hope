import { setCurrentVariableLanguage } from "../universal/currentLanguage/setCurrentLanguage";

const spanEl = document.querySelector(".translate-variable__span");

export function switchVariableLanguage(event, langs) {
  const radioEl = event.currentTarget;
  
  let lang;

  if (radioEl.checked) {
    switch (radioEl.value) {
      case "ua":
        lang = "ua";
        langs?.setUkrainian();
        break;
      case "en":
        lang = "en";
        langs?.setEnglish();
        break;
      case "or":
        lang = "or";
        langs?.setOriginal();
        break;
      default:
    }

    spanEl.setAttribute("lang", lang);
    setCurrentVariableLanguage(lang);
  }
}
