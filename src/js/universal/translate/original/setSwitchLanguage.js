import { setStartLang } from "./setStartLang";
import { switchLanguage } from "./switchLanguage";


export function setSwitchLanguage(settings) {
  const switchEl = document.querySelector(".translate__input");
  switchEl.addEventListener("change", switchEvent);

  function switchEvent(event) {
    switchLanguage(event, settings);
  }

  setStartLang(switchEl);
}
