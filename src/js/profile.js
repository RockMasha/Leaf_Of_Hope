import { isSignin } from "./signin/isSignin";
import { root } from "./profile/root";
import { showSigninModal } from "./signin/showSigninModal";
import { createAdverts } from "./search/createAdverts";
import { getUserAdverts } from "./servise/api";
import { createCard } from "./profile/createCard";
import { getToken } from "./token/getToken";

const res = await isSignin();
if (res) {
  const { user } = res;
  root.userInfo.innerHTML = `<div class="user-info__thumb">
        <img class="user-info__svg" src="${user.avatar}" alt="avatar">
    </div>
    <div class="user-info__user">
        <button class="user-info__button">
            <img class="user-info__button-image" src="./img/profile/redact-profile.svg" alt="redact">
        </button>
        <h2 class="user-info__title">${user.username}</h2>
        <p class="user-info__text">${user.adress}</p>
        <p class="user-info__text bold">${user.phone}</p>
        <p class="user-info__text bold">${user.email}</p>
    </div>
</div>`;
  console.log(user.token);

  const { result, tottal } = await getUserAdverts(`${getToken()}`);
  console.log(result);

  if (tottal === 0) {
    root.userCards.innerHTML = "<p>Немає оголошень</p>";
  } else {
    const newArr = result.map((el) => createCard(el));
    const strCrads = newArr.join("");
    root.userCards.innerHTML = strCrads;
  }
} else {
  showSigninModal();
}
