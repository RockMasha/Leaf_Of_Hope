import { getOneAdvert } from "../servise/api";
import { getValueSrcParams } from "../universal/getValueSrcParams";
import { root } from "./root";

export async function setInputs() {
  const formInputs = createFormInputsObj();
  const id = getValueSrcParams("id");
  const data = await getOneAdvert(id);

  for (const name in formInputs) {
    const value = `${data[name]}`;
    root.form[name].value = value !== "undefined" ? value : "";
  }

  if (formInputs["way"].value === "give") {
    root.wishField.classList.add("is-hidden");
  }

  root.svgWrapp.innerHTML = getPicture(data.image);
}

function createFormInputsObj() {
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
    attention,
    survive,
    state,
    flowering,
    growthRate,
    edible,
  } = root.form;

  return {
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
    attention,
    survive,
    state,
    flowering,
    growthRate,
    edible,
  };
}

function getPicture(image) {
  const smallImg = image["small-250px"];
  const middleImg = image["medium-300px"];
  const bigImg = image["large-500px"];

  return `
    <picture class="form-advert__svg big-photo">
      <source
        srcset="${bigImg}"
        media="(min-width: 1440px)"
      />
      <source
        srcset="${middleImg}"
        media="(min-width: 768px)"
      />
      <source
        srcset="${smallImg}"
      />
      <img
        src="${smallImg ? smallImg : "./img/universal/defoultPlantPhoto.jpg"}"
        class="form-advert__svg big-photo"
        alt="plant"
        loading="lazy"
      />
    </picture>`;
}
