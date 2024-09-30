import { getUserAdverts } from "../servise/api";
import { getToken } from "../token/getToken";
import { createProfileCard } from "./createProfileCard";
import { root } from "./root";

export async function showUserAdverts() {
  const token = getToken();
  const { result, tottal } = await getUserAdverts(token);

  root.advertsTitle.textContent = "Мої оголошення:";

  if (tottal === 0) {
    root.userCards.innerHTML = setDefaultText();
    return;
  }

  setAdvertCard(result);
}

function setDefaultText() {
  const textEl = `<p class="profile-adverts__no-advert-text">Немає оголошень</p>`;
  root.userCards.innerHTML = textEl;
}

function setAdvertCard(result) {
  const newArr = result.map((el) => createProfileCard(el));
  const strCrads = newArr.join("");
  root.userCards.innerHTML = strCrads;
}
