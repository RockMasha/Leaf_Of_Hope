import { getInfo } from "../servise/api";
import { root } from "./root";

export async function setInputs() {
  const { username, adress, phone } = root.form;
  const formInputs = { username, adress, phone };
  const { user } = await getInfo();

  for (const name in formInputs) {
    formInputs[name].value = user[name];
  }

  root.svgWrapp.innerHTML = getPicture(user.avatar);
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
