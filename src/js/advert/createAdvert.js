import { getOneAdvert } from "../servise/api";
import { getValueSrcParams } from "../universal/getValueSrcParams";
import { changeMoreProperties } from "./changeMoreProperties";
import { getAdvert } from "./getAdvert";
import { root } from "./root";

export async function createAdvert() {
  const id = getValueSrcParams("id");
  const data = await getOneAdvert(id);

  const advertEl = getAdvert(data);
  root.main.insertAdjacentHTML("beforeend", advertEl);
  setEventMoreProperties();
}

function setEventMoreProperties() {
  const BtnMoreEl = document.querySelector(".advert-properties__more-btn");
  BtnMoreEl.addEventListener("click", changeMoreProperties);
}
