import { getUserAdverts } from "../servise/api";
import { getToken } from "../token/getToken";
import { createProfileCard } from "./createProfileCard";
import { root } from "./root";

export async function showUserAdverts() {
  const token = getToken();
  const { result, tottal } = await getUserAdverts(token);

  root.advertsTitle.textContent = "Мої оголошення:";

  if (tottal == 0) {
    setDefaultElements();
    return;
  }

  setAdvertCard(result);
}

function setDefaultElements() {
  const defaultElements = `
  <div class="profile-adverts-default">
    <img class="profile-adverts-default__img" src="./img/profile/defoultPlant.svg" alt="plant">
    <p class="profile-adverts-default__text">Немає оголошень</p>
  </div>`;

  root.userCards.innerHTML = defaultElements;
}

function setAdvertCard(result) {
  const newArr = result.map((el) => createProfileCard(el));
  const strCrads = newArr.join("");
  root.userCards.innerHTML = strCrads;
}
