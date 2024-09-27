import { isSignin } from "./signin/isSignin";
import { root } from "./profile/root";
import { showSigninModal } from "./signin/showSigninModal";

const {user} = await isSignin();
if (user) {

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
} else {
  showSigninModal();
}
