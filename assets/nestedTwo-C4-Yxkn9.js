import"./modulepreload-polyfill-B5Qt9EMX.js";/* empty css              */import{g as u,i}from"./isSignin-jpbd60ZH.js";import{a as f,s as m}from"./api-DFccIR11.js";import{c as p}from"./createToken-B_EVVqoo.js";import{g as v}from"./getAdvertCardInner-B_bPg60f.js";const _=document.querySelector(".modal-wrapper"),s={modalEl:document.querySelector(".modal-wrapper"),form:document.querySelector(".signin-modal-form"),errorText:document.querySelector(".signin-modal__error")};function b(e){let r=new FormData(e);const t={};for(let o of r.entries())t[o[0]]=o[1];return t}const n={userInfo:document.querySelector("#user-info-js"),userCards:document.querySelector("#user-cards-js"),advertsTitle:document.querySelector(".profile-adverts__title")};function g(e){const{avatar:r,username:t,adress:o,phone:d,email:c}=e;n.userInfo.innerHTML=`<div class="user-info__thumb">
          <img class="user-info__svg big-photo" src="${r}" alt="avatar">
      </div>
      <div class="user-info__user">
          <h2 class="user-info__title">${t}</h2>
          <p class="user-info__text">${o}</p>
          <p class="user-info__text bold">${d}</p>
          <p class="user-info__text bold">${c}</p>
      </div>
  </div>`}const y=e=>`
          <li class="profile-adverts__card">
            ${v(e)}
            <ul class="profile-adverts__btn-list">
              <li>
                <button type="button" class="profile-adverts__btn edit-btn"></button>
              </li>
              <li>
                <button type="button" class="profile-adverts__btn delete-btn"></button>
              </li>
            </ul>
          </li>
        `;async function w(){const e=u(),{result:r,tottal:t}=await f(e);if(n.advertsTitle.textContent="Мої оголошення:",t==0){h();return}S(r)}function h(){const e=`
  <div class="profile-adverts-default">
    <img class="profile-adverts-default__img" src="./img/profile/defoultPlant.svg" alt="plant">
    <p class="profile-adverts-default__text">Немає оголошень</p>
  </div>`;n.userCards.innerHTML=e}function S(e){const t=e.map(o=>y(o)).join("");n.userCards.innerHTML=t}async function l(e){e||(e=await i(),e=e.user),g(e),w()}async function C(){_.classList.add("is-hidden"),document.body.removeAttribute("lock",""),document.querySelector(".profile-adverts")&&l()}async function T(e){e.preventDefault();const r=b(s.form);try{const t=await m(r);p(t.token),C()}catch{s.errorText.textContent="неправельний логін чи пароль"}}function q(){s.modalEl.classList.remove("is-hidden"),document.body.setAttribute("lock",""),s.modalEl.addEventListener("submit",T)}const a=await i();a?l(a.user):q();
