import { getEnglishDataValue } from "../../universal/cardData/getEnglishDataValue";
import { getUkraineDataValue } from "../../universal/cardData/getUkraineDataValue";
import { originalAdvert, setAdvert } from "../createAdvert";
import { getEnglishAdvert } from "../getEnglishAdvert";

export const langs = {
  setUkrainian,
  setEnglish,
  setOriginal,
};

function setUkrainian() {
  setAdvert(getUkraineDataValue);
}

function setEnglish() {
  setAdvert(getEnglishDataValue, getEnglishAdvert);
}

function setOriginal() {
  originalAdvert.set();
}
