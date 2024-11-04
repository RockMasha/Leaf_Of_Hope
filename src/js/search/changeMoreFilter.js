import { changeSettingsValue } from "../universal/translate/universal/changeSettingsValue";
import { getCurrentLanguage } from "../universal/translate/universal/currentLanguage/getCurrentLanguage";
import { root } from "./root";
import { settings } from "./translate/settings";

let isCloseMoreFilter = true;
export function changeMoreFilter() {
  if (isCloseMoreFilter) {
    showMoreFilter();
    isCloseMoreFilter = false;
    return;
  }
  hiddenMoreFilter();
  isCloseMoreFilter = true;
}

export function showMoreFilter() {
  root.moreList.classList.remove("is-hidden");
  setBtmMoreText({ ua: "закрити", en: "close" });
}

export function hiddenMoreFilter() {
  root.moreList.classList.add("is-hidden");
  setBtmMoreText({ ua: "ще параметри", en: "more params" });
}

function setBtmMoreText(data) {
  const { ua, en } = data;
  const lang = getCurrentLanguage();
  root.btnMore.textContent = lang === "ua" ? ua : en;
  const translateData = { property: "moreParamsText", ua, en };
  changeSettingsValue(settings, translateData);
}
