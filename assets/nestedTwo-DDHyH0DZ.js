import{h as u}from"./hiddenContentLoader-BTbEcCAy.js";/* empty css              */import{g as f,i}from"./isSignin-AGES9O8d.js";import{a as m,s as p}from"./api-gcbuf7mz.js";import{c as v}from"./createToken-uaBdkxDQ.js";import{g as _}from"./getAdvertCardInner-B_bPg60f.js";const b=document.querySelector(".modal-wrapper"),s={modalEl:document.querySelector(".modal-wrapper"),form:document.querySelector(".signin-modal-form"),errorText:document.querySelector(".signin-modal__error")};function g(e){let r=new FormData(e);const t={};for(let o of r.entries())t[o[0]]=o[1];return t}const n={userInfo:document.querySelector("#user-info-js"),userCards:document.querySelector("#user-cards-js"),advertsTitle:document.querySelector(".profile-adverts__title")};function y(e){const{avatar:r,username:t,adress:o,phone:d,email:c}=e;n.userInfo.innerHTML=`<div class="user-info__thumb">
          <img class="user-info__svg big-photo" src="${r}" alt="avatar">
      </div>
      <div class="user-info__user">
          <h2 class="user-info__title">${t}</h2>
          <p class="user-info__text">${o}</p>
          <p class="user-info__text bold">${d}</p>
          <p class="user-info__text bold">${c}</p>
      </div>
  </div>`}const w=e=>`
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
        `;async function h(){const e=f(),{result:r,tottal:t}=await m(e);if(n.advertsTitle.textContent="Мої оголошення:",t==0){S();return}C(r)}function S(){const e=`
  <div class="profile-adverts-default">
    <img class="profile-adverts-default__img" src="./img/profile/defoultPlant.svg" alt="plant">
    <p class="profile-adverts-default__text">Немає оголошень</p>
  </div>`;n.userCards.innerHTML=e}function C(e){const t=e.map(o=>w(o)).join("");n.userCards.innerHTML=t}async function l(e){e||(e=await i(),e=e.user),y(e),h()}async function T(){b.classList.add("is-hidden"),document.body.removeAttribute("lock",""),document.querySelector(".profile-adverts")&&l()}async function q(e){e.preventDefault();const r=g(s.form);try{const t=await p(r);v(t.token),T()}catch{s.errorText.textContent="неправельний логін чи пароль"}}function x(){s.modalEl.classList.remove("is-hidden"),document.body.setAttribute("lock",""),s.modalEl.addEventListener("submit",q)}const a=await i();a?await l(a.user):x();u();
