import { root } from "./root";

export function showUserInfo(user) {
  const { avatar, username, adress, phone, email } = user;

  root.userInfo.innerHTML = `<div class="user-info__thumb">
          <img class="user-info__svg big-photo" src="${avatar}" alt="avatar">
      </div>
      <div class="user-info__user">
          <h2 class="user-info__title">${username}</h2>
          <p class="user-info__text">${adress}</p>
          <p class="user-info__text bold">${phone}</p>
          <p class="user-info__text bold">${email}</p>
      </div>
  </div>`;
}
