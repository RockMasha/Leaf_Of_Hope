import { getEnglishDataValue } from "../../universal/cardData/getEnglishDataValue";
import { getUkraineDataValue } from "../../universal/cardData/getUkrainDataValue";
import { setAdvert } from "../createAdvert";
import { getEnglishAdvert } from "../getEnglishAdvert";
import { root } from "../root";

export function setTranslate() {
  if (root.translate.getAttribute("original")) {
    setStartTranslateSettings();
  }

  const isEngland = root.translateInput.checked;
  if (isEngland) {
    setAdvert(getEnglishDataValue, getEnglishAdvert);
    return;
  }
  setAdvert(getUkraineDataValue);
}

function setStartTranslateSettings() {
  root.translate.removeAttribute("disable");
  root.translate.removeAttribute("original");
  root.translateInput.checked = false;
}
