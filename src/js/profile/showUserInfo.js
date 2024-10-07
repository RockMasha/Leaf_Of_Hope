import { getToken } from "../token/getToken";
import { root } from "./root";

export function showUserInfo(user) {
  root.userInfo.innerHTML = getUserEL(user);

  const redactProfileEl = document.querySelector(".user-info__redact-img");
  redactProfileEl.addEventListener("click", redactProfile);
}

function getUserEL(user) {
  const { avatar, username, adress, phone, email } = user;

  return `
    <div class="user-info__thumb">
      <img class="user-info__svg big-photo" src="${avatar}" alt="avatar">
      </div> 
      <div class="user-info__text-block">
        <div class="user-info__user">
          <div>
            <h2 class="user-info__title">${username}</h2>
            <p class="user-info__text">${adress}</p>
            <p class="user-info__text bold">${phone}</p>
            <p class="user-info__text bold">${email}</p>
          </div>
          <button class="user-info__logout">Вийти</button>
        </div>
        <img class="user-info__redact-img" src="./img/profile/redact-profile.svg" alt="redact img" />
      </div>
    </div>`;
}

function redactProfile() {
  window.location.href = `formProfile.html?redact="true"`;
}
