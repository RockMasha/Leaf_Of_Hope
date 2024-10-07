var D=(t,o,e)=>{if(!o.has(t))throw TypeError("Cannot "+e)};var d=(t,o,e)=>{if(o.has(t))throw TypeError("Cannot add the same private member more than once");o instanceof WeakSet?o.add(t):o.set(t,e)};var s=(t,o,e)=>(D(t,o,"access private method"),e);import{h as I}from"./hiddenContentLoader-2Hn9pDKt.js";import{i as C}from"./isSignin-DGFatcK1.js";import{d as j,l as U,a as H,s as B}from"./api-Bqt0gWw5.js";import{c as O}from"./createToken-BCfxSjGu.js";import{g as F,C as R,c as z}from"./createFormObj-DYeh9Frz.js";import"./cardData-DyQ4QymL.js";const G=document.querySelector(".modal-wrapper"),i={modalEl:document.querySelector(".modal-wrapper"),form:document.querySelector(".signin-modal-form"),errorText:document.querySelector(".signin-modal__error")},p={userInfo:document.querySelector("#user-info-js"),userCards:document.querySelector("#user-cards-js"),profileAdverts:document.querySelector(".profile-adverts"),advertsTitle:document.querySelector(".profile-adverts__title")};function J(t){p.userInfo.innerHTML=K(t),document.querySelector(".user-info__redact-img").addEventListener("click",N)}function K(t){const{avatar:o,username:e,adress:r,phone:n,email:b}=t;return`
    <div class="user-info__thumb">
      <img class="user-info__svg big-photo" src="${o}" alt="avatar">
      </div> 
      <div class="user-info__text-block">
        <div class="user-info__user">
          <div>
            <h2 class="user-info__title">${e}</h2>
            <p class="user-info__text">${r}</p>
            <p class="user-info__text bold">${n}</p>
            <p class="user-info__text bold">${b}</p>
          </div>
          <button class="user-info__logout">Вийти</button>
        </div>
        <img class="user-info__redact-img" src="./img/profile/redact-profile.svg" alt="redact img" />
      </div>
    </div>`}function N(){window.location.href='formProfile.html?redact="true"'}const Q=t=>`
          <li class="profile-adverts__card" data-id="${t._id}">
            ${F(t)}
            <ul class="profile-adverts__btn-list">
              <li>
                <button type="button" class="profile-adverts__btn edit-btn"></button>
              </li>
              <li>
                <button type="button" class="profile-adverts__btn delete-btn"></button>
              </li>
            </ul>
          </li>
        `;var l,S,c,L,u,q,m,k,f,A,a,y,_,M,h,P,v,x,g,T;class V extends R{constructor(e,r,n){super(e,r,n);d(this,l);d(this,c);d(this,u);d(this,m);d(this,f);d(this,a);d(this,_);d(this,h);d(this,v);d(this,g)}async showMainCard(e){s(this,l,S).call(this),await this.showCards(e)}changeCards(e){const r=e.target,n=r.closest(".delete-btn"),b=r.closest(".edit-btn");if(!n&&!b)return;const E=W(r);if(n){s(this,c,L).call(this,E);return}s(this,u,q).call(this,E.id)}}l=new WeakSet,S=function(){this.changeCards=this.changeCards.bind(this),this.listCardsEl.addEventListener("click",this.changeCards)},c=new WeakSet,L=function(e){s(this,f,A).call(this),s(this,_,M).call(this,e)},u=new WeakSet,q=async function(e){window.location.href=`formAdvert.html?id=${e}`},m=new WeakSet,k=async function(e){s(this,a,y).call(this);try{s(this,v,x).call(this,e.cardEl),await j(e.id),s(this,h,P).call(this,e.cardEl)}catch(r){console.log(r)}},f=new WeakSet,A=function(){document.body.setAttribute("lock","");const e=X();document.body.insertAdjacentHTML("afterbegin",e)},a=new WeakSet,y=function(){document.body.removeAttribute("lock",""),document.querySelector(".modal-wrapper").remove()},_=new WeakSet,M=function(e){const r=document.querySelector(".delete-modal__btn_disagree"),n=document.querySelector(".delete-modal__btn_agree");r.addEventListener("click",s(this,a,y)),n.addEventListener("click",s(this,m,k).bind(this,e))},h=new WeakSet,P=function(e){e.classList.add("is-hidden"),s(this,g,T).call(this)&&this.setDefaultElement()},v=new WeakSet,x=function(e){const r=Y();e.insertAdjacentHTML("afterbegin",r)},g=new WeakSet,T=function(){const e=this.listCardsEl.querySelectorAll(".profile-adverts__card"),r=this.listCardsEl.querySelectorAll(".profile-adverts__card.is-hidden");return e.length===r.length};function W(t){const o=t.closest(".profile-adverts__card"),e=o.dataset.id;return{cardEl:o,id:e}}function X(){return`
    <div class="modal-wrapper">
      <div class="delete-modal modal">
        <h3 class="delete-modal__title">Ви дійсно хочете видалити це оголошення?</h3>
        <div class="delete-modal__btns">
          <button class="delete-modal__btn delete-modal__btn_disagree" type="button">Ні</button>
          <button class="delete-modal__btn delete-modal__btn_agree" type="button">Так</button>
        </div>
      </div>
    </div>
  `}function Y(){return`
  <div class="delete-card-loader-wrapper">
    <div class="delete-card-loader"></div>
  </div>
  `}function Z(){localStorage.removeItem("token")}async function ee(){try{await U(),Z(),window.location.href="index.html"}catch(t){console.log(t)}}async function $(t){t||(t=await C(),t=t.user),J(t),p.advertsTitle.textContent="Мої оголошення:",new V(p.profileAdverts,H,Q).showMainCard(),document.querySelector(".user-info__logout").addEventListener("click",ee)}async function te(){G.classList.add("is-hidden"),document.body.removeAttribute("lock",""),document.querySelector(".profile-adverts")&&$()}async function oe(t){t.preventDefault();const o=z(i.form);try{const e=await B(o);O(e.token),te()}catch{i.errorText.textContent="неправельний логін чи пароль"}}function re(){i.modalEl.classList.remove("is-hidden"),document.body.setAttribute("lock",""),i.modalEl.addEventListener("submit",oe)}const w=await C();w?await $(w.user):re();I();
