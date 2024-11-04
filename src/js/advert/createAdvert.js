import { getOneAdvert } from "../servise/api";
import { getDataOriginEnglishValue } from "../universal/cardData/getDataOriginEnglishValue";
import { getDataOriginUkraineValue } from "../universal/cardData/getDataOriginUkraineValue";
import { getValueSrcParams } from "../universal/getValueSrcParams";
import { changeMoreProperties } from "./changeMoreProperties";
import { getAdvert } from "./getAdvert";
import { getEnglishAdvert } from "./getEnglishAdvert";
import { root } from "./root";

let data;
export const originalAdvert = {};
export async function createAdvert() {
  const id = getValueSrcParams("id");
  data = await getOneAdvert(id);
  setOriginalAdvert(data.lang);
  originalAdvert.set();
  return;
}

export function setAdvert(
  getData = getDataOriginUkraineValue,
  getAdvertTemple = getAdvert
) {
  const advertEl = getAdvertTemple(data, getData);
  root.advert.innerHTML = advertEl;
  setEventMoreProperties();
}

function setEventMoreProperties() {
  const BtnMoreEl = document.querySelector(".advert-properties__more-btn");
  BtnMoreEl.addEventListener("click", changeMoreProperties);
}

export function setOriginalAdvert(lang) {
  if (lang === "en") {
    originalAdvert.set = setAdvert.bind(
      null,
      getDataOriginEnglishValue,
      getEnglishAdvert
    );
    return;
  }

  originalAdvert.set = setAdvert.bind(
    null,
    getDataOriginUkraineValue,
    getAdvert
  );
}
