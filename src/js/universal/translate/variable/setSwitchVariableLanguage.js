import { setStartVariableLang } from "./setStartVariableLang";
import { switchVariableLanguage } from "./switchVariableLanguage";

const radioInputs = document.querySelectorAll(".translate-variable__input");

export function setSwitchVariableLanguage(langs) {
  radioInputs.forEach((radio) => {
    radio.addEventListener("change", (event) => {
      switchVariableLanguage(event, langs);
    });
  });

  setStartVariableLang();
}
