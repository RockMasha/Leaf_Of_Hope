import { logoutUser } from "./logaoutUser";
import { root } from "./root";

export function showUserInfo(user) {
  root.userInfo.innerHTML = getUserEL(user);
  setLogout();
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
        <a href="formProfile.html?redact=true">
          <img
            class="user-info__redact-img"
            src="./img/profile/redact-profile.svg"
            alt="redact img"
          />
      </a>
      </div>
    </div>`;
}

function setLogout() {
  const logoutEl = document.querySelector(".user-info__logout");
  logoutEl.addEventListener("click", logoutUser);
}