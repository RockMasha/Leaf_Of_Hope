import { changeSettingsValue } from "../translate/universal/changeSettingsValue";
import { getCurrentLanguage } from "../translate/universal/currentLanguage/getCurrentLanguage";
import { errorSettings } from "../translate/universal/templeSettings/errorSettings";
import { errorData } from "./errorData";

const translateDataDefault = { property: "error", settings: errorSettings };

let lang = getCurrentLanguage();
export function getErrorText(error, translateData = translateDataDefault) {
  const { property, settings } = translateData;
  lang = getCurrentLanguage();
  const key = error ? getNeedErrorDataKey(error) : false;

  const data = Object.assign({ ...errorData[key] }, { property: property });
  changeSettingsValue(settings, data);

  return key ? errorData[key][lang] : getDefaultText();
}

function getNeedErrorDataKey(error) {
  for (const key in errorData) {
    const arrErrorText = key.split(" ");
    let indicator = true;
    for (const word of arrErrorText) {
      const isNeedText = error.includes(word);
      if (!isNeedText) {
        indicator = false;
        break;
      }
    }
    if (indicator) {
      return key;
    }
  }
}

function getDefaultText() {
  const textUa = "Неправельний ввід";
  const textEn = "Incorrectly entered";
  return lang === "ua" ? textUa : textEn;
}
