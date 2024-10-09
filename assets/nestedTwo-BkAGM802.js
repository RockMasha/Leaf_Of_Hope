var D=(t,o,e)=>{if(!o.has(t))throw TypeError("Cannot "+e)};var s=(t,o,e)=>{if(o.has(t))throw TypeError("Cannot add the same private member more than once");o instanceof WeakSet?o.add(t):o.set(t,e)};var n=(t,o,e)=>(D(t,o,"access private method"),e);import{h as U}from"./hiddenContentLoader-DtnzIxqs.js";import{i as L}from"./isSignin-DGFatcK1.js";import{l as j,d as B,a as H,s as O}from"./api-Bqt0gWw5.js";import{c as R}from"./createToken-BCfxSjGu.js";import{g as F,C as z,c as G}from"./createFormObj-DYeh9Frz.js";import{s as y,r as E}from"./setInProgressLoader-BAB2lVXe.js";import"./cardData-DyQ4QymL.js";const J=document.querySelector(".modal-wrapper"),d={modalEl:document.querySelector(".modal-wrapper"),form:document.querySelector(".signin-modal-form"),errorText:document.querySelector(".signin-modal__error")};function K(){localStorage.removeItem("token")}async function S(t){t.target.removeEventListener("click",S),y();try{await j(),K(),window.location.href="index.html"}catch(o){console.log(o)}finally{E()}}const g={userInfo:document.querySelector("#user-info-js"),userCards:document.querySelector("#user-cards-js"),profileAdverts:document.querySelector(".profile-adverts"),advertsTitle:document.querySelector(".profile-adverts__title")};function N(t){g.userInfo.innerHTML=Q(t),W(),V()}function Q(t){const{avatar:o,username:e,adress:r,phone:a,email:v}=t;return`
    <div class="user-info__thumb">
      <img class="user-info__svg big-photo" src="${o}" alt="avatar">
      </div> 
      <div class="user-info__text-block">
        <div class="user-info__user">
          <div>
            <h2 class="user-info__title">${e}</h2>
            <p class="user-info__text">${r}</p>
            <p class="user-info__text bold">${a}</p>
            <p class="user-info__text bold">${v}</p>
          </div>
          <button class="user-info__logout">Вийти</button>
        </div>
        <img class="user-info__redact-img" src="./img/profile/redact-profile.svg" alt="redact img" />
      </div>
    </div>`}function V(){document.querySelector(".user-info__logout").addEventListener("click",S)}function W(){document.querySelector(".user-info__redact-img").addEventListener("click",k)}function k(){event.target.removeEventListener("click",k),window.location.href='formProfile.html?redact="true"'}const X=t=>`
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
        `;var l,q,c,P,u,A,m,M,f,x,i,b,_,I,p,Z,h,$;class Y extends z{constructor(e,r,a){super(e,r,a);s(this,l);s(this,c);s(this,u);s(this,m);s(this,f);s(this,i);s(this,_);s(this,p);s(this,h)}async showMainCard(e){n(this,l,q).call(this),await this.showCards(e)}changeCards(e){const r=e.target,a=r.closest(".delete-btn"),v=r.closest(".edit-btn");if(!a&&!v)return;const w=ee(r);if(a){n(this,c,P).call(this,w);return}n(this,u,A).call(this,w.id)}}l=new WeakSet,q=function(){this.changeCards=this.changeCards.bind(this),this.listCardsEl.addEventListener("click",this.changeCards)},c=new WeakSet,P=function(e){n(this,f,x).call(this),n(this,_,I).call(this,e)},u=new WeakSet,A=async function(e){window.location.href=`formAdvert.html?id=${e}`},m=new WeakSet,M=async function(e){y(),n(this,i,b).call(this);try{await B(e.id),E(),await this.showCards(this.params)}catch(r){console.log(r)}finally{}},f=new WeakSet,x=function(){document.body.setAttribute("lock","");const e=te();document.body.insertAdjacentHTML("afterbegin",e)},i=new WeakSet,b=function(){document.body.removeAttribute("lock",""),document.querySelector(".modal-wrapper").remove()},_=new WeakSet,I=function(e){const r=document.querySelector(".delete-modal__btn_disagree"),a=document.querySelector(".delete-modal__btn_agree");r.addEventListener("click",n(this,i,b)),a.addEventListener("click",n(this,m,M).bind(this,e))},p=new WeakSet,Z=function(e){e.classList.add("is-hidden"),n(this,h,$).call(this)&&this.setDefaultElement()},h=new WeakSet,$=function(){const e=this.listCardsEl.querySelectorAll(".profile-adverts__card"),r=this.listCardsEl.querySelectorAll(".profile-adverts__card.is-hidden");return e.length===r.length};function ee(t){const o=t.closest(".profile-adverts__card"),e=o.dataset.id;return{cardEl:o,id:e}}function te(){return`
    <div class="modal-wrapper">
      <div class="delete-modal modal">
        <h3 class="delete-modal__title">Ви дійсно хочете видалити це оголошення?</h3>
        <div class="delete-modal__btns">
          <button class="delete-modal__btn delete-modal__btn_disagree" type="button">Ні</button>
          <button class="delete-modal__btn delete-modal__btn_agree" type="button">Так</button>
        </div>
      </div>
    </div>
  `}async function T(t){t||(t=await L(),t=t.user),N(t),g.advertsTitle.textContent="Мої оголошення:",new Y(g.profileAdverts,H,X).showMainCard()}async function oe(){J.classList.add("is-hidden"),document.body.removeAttribute("lock",""),document.querySelector(".profile-adverts")&&T()}async function re(t){t.preventDefault(),y();const o=G(d.form);try{const e=await O(o);R(e.token),oe()}catch{d.errorText.textContent="неправельний логін чи пароль"}finally{E()}}function se(){d.modalEl.classList.remove("is-hidden"),document.body.setAttribute("lock",""),d.modalEl.addEventListener("submit",re)}const C=await L();C?await T(C.user):se();U();
