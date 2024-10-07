import { getOneAdvert } from "../servise/api";
import { getValueSrcParams } from "../universal/getValueSrcParams";
import { root } from "./root";

export async function setInputs() {
  const {
    alergenicity,
    humidity,
    lifeDuration,
    light,
    name,
    size,
    temperature,
    way,
    wish,
    description,
  } = root.form;

  const formInputs = {
    alergenicity,
    humidity,
    lifeDuration,
    light,
    name,
    size,
    temperature,
    way,
    wish,
    description,
  };

  const id = getValueSrcParams("id");
  const data = await getOneAdvert(id);

  for (const name in formInputs) {
    const value = `${data[name]}`;
    formInputs[name].value = value !== "undefined" ? value : "";
  }
  
  const imgEl = document.querySelector(".form-advert__svg");
  imgEl.src = data.image;
  imgEl.classList.add("big-photo");
}
