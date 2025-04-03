import { getInfo } from "../servise/api";
import { changePage } from "../universal/chanhePage";
import { root } from "./root";

export async function setInputs() {
  const { username, adress, phone } = root.form;
  const formInputs = { username, adress, phone };
  const user = await getInfo();
  if (!user) {
    changePage("profile.html");
  }

  for (const name in formInputs) {
    if (!user[name]) {
      continue;
    }

    formInputs[name].value = user[name];
  }

  root.svgWrapp.innerHTML = getPicture(user.avatar);
}

function getPicture(image) {
  const smallImg = image["small-250px"];
  const middleImg = image["big-400px"];
  const bigImg = image["large-500px"];

  return `
    <picture class="form-advert__svg big-photo">
      <source
        srcset="
        ${bigImg} 1x,
        ${bigImg} 2x"
        media="(min-width: 1440px)"
      />
      <source
        srcset="
        ${middleImg} 1x,
        ${middleImg} 2x"
        media="(min-width: 768px)"
      />
      <source
        srcset="
        ${smallImg} 1x,
        ${smallImg} 2x"
      />
      <img
        src="${smallImg}"
        srcset="
        ${smallImg} 1x,
        ${smallImg} 2x"
        class="form-advert__svg big-photo"
        alt="plant"
        loading="lazy"
      />
    </picture>`;
}
