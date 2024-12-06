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
      ${getUserPhoto(avatar)}
      </div> 
      <div class="user-info__text-block">
        <div class="user-info__user">
          <div>
            <h2 class="user-info__title">${username}</h2>
            <p class="user-info__text">${adress}</p>
            <p class="user-info__text bold">${phone}</p>
            <p class="user-info__text bold">${email}</p>
          </div>
          <button class="user-info__logout" key="logoutText">Вийти</button>
        </div>
        <a class="user-info__redact-link" href="formProfile.html?redact=true">
          <img
            class="user-info__redact-img"
            src="https://res.cloudinary.com/dk3syrsg5/image/upload/v1733484552/redactProfile_vyxmap.svg"
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

function getUserPhoto(image) {
  const smallImg = image["small-250px"];
  const middleImg = image["medium-300px"];
  const bigImg = image["big-400px"];
  const classBigPhoto = smallImg ? "big-photo" : "";

  return `
    <picture class="user-info__svg ${classBigPhoto}">
      <source
        srcset="
        ${bigImg} 1x,
        ${bigImg} 2x
        "
        media="(min-width: 1440px)"
      />
      <source
        srcset="
        ${smallImg} 1x,
        ${smallImg} 2x
        "
        media="(min-width: 768px)"
      />
      <source
        srcset="
        ${smallImg} 1x,
        ${smallImg} 2x
        "
      />
      <img
        src="${smallImg}"
        srcset="${smallImg} 1x, ${smallImg} 2x"
        class="user-info__svg ${classBigPhoto}"
        alt="user"
        loading="lazy"
        width="250px"
        height="250px"
      />
    </picture>`;
}
