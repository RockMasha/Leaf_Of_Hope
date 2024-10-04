import{h as u}from"./hiddenContentLoader-YZwxA7N9.js";import{i}from"./isSignin-BEgLouOk.js";import{a as f,s as m}from"./api-DVTkbkxP.js";import{c as p}from"./createToken-BKOXoYV5.js";import{g as _,C as v,c as b}from"./createFormObj-BwrOScj2.js";import"./cardData-C3ZUKnf8.js";const y=document.querySelector(".modal-wrapper"),o={modalEl:document.querySelector(".modal-wrapper"),form:document.querySelector(".signin-modal-form"),errorText:document.querySelector(".signin-modal__error")},s={userInfo:document.querySelector("#user-info-js"),userCards:document.querySelector("#user-cards-js"),profileAdverts:document.querySelector(".profile-adverts"),advertsTitle:document.querySelector(".profile-adverts__title")};function g(e){const{avatar:t,username:r,adress:l,phone:d,email:c}=e;s.userInfo.innerHTML=`<div class="user-info__thumb">
          <img class="user-info__svg big-photo" src="${t}" alt="avatar">
      </div>
      <div class="user-info__user">
          <h2 class="user-info__title">${r}</h2>
          <p class="user-info__text">${l}</p>
          <p class="user-info__text bold">${d}</p>
          <p class="user-info__text bold">${c}</p>
      </div>
  </div>`}const h=e=>`
          <li class="profile-adverts__card">
            ${_(e)}
            <ul class="profile-adverts__btn-list">
              <li>
                <button type="button" class="profile-adverts__btn edit-btn"></button>
              </li>
              <li>
                <button type="button" class="profile-adverts__btn delete-btn"></button>
              </li>
            </ul>
          </li>
        `;async function a(e){e||(e=await i(),e=e.user),g(e),s.advertsTitle.textContent="Мої оголошення:",new v(s.profileAdverts,f,h).showMainCard()}async function w(){y.classList.add("is-hidden"),document.body.removeAttribute("lock",""),document.querySelector(".profile-adverts")&&a()}async function S(e){e.preventDefault();const t=b(o.form);try{const r=await m(t);p(r.token),w()}catch{o.errorText.textContent="неправельний логін чи пароль"}}function q(){o.modalEl.classList.remove("is-hidden"),document.body.setAttribute("lock",""),o.modalEl.addEventListener("submit",S)}const n=await i();n?await a(n.user):q();u();
