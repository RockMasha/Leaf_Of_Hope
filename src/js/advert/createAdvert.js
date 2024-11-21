import { getOneAdvert } from "../servise/api";
import { getDataValue } from "../universal/cardData/getDataValue";
import { getValueSrcParams } from "../universal/getValueSrcParams";
import { changeMoreProperties } from "./changeMoreProperties";
import { getAdvert } from "./getAdvert";
import { root } from "./root";

let data = {};
export async function createAdvert() {
  const id = getValueSrcParams("id");
  data = await getOneAdvert(id);
  setAdvert();
  return;
}

export function setAdvert() {
  const advertEl = getAdvert(data, getDataValue);
  root.advert.innerHTML = advertEl;
  setEventMoreProperties();
}

function setEventMoreProperties() {
  const BtnMoreEl = document.querySelector(".advert-properties__more-btn");
  BtnMoreEl.addEventListener("click", changeMoreProperties);
}
