var $=(t,s,e)=>{if(!s.has(t))throw TypeError("Cannot "+e)};var a=(t,s,e)=>{if(s.has(t))throw TypeError("Cannot add the same private member more than once");s instanceof WeakSet?s.add(t):s.set(t,e)};var o=(t,s,e)=>($(t,s,"access private method"),e);import{h as I}from"./hiddenContentLoader-CROy0A0f.js";import{i as w}from"./isSignin-CQuDZ3IF.js";import{d as j,a as H,s as B}from"./api-DlfnOqWE.js";import{c as U}from"./createToken-M-sMJ8f5.js";import{g as O,C as F,c as R}from"./createFormObj-DYeh9Frz.js";import"./cardData-DyQ4QymL.js";const z=document.querySelector(".modal-wrapper"),l={modalEl:document.querySelector(".modal-wrapper"),form:document.querySelector(".signin-modal-form"),errorText:document.querySelector(".signin-modal__error")},g={userInfo:document.querySelector("#user-info-js"),userCards:document.querySelector("#user-cards-js"),profileAdverts:document.querySelector(".profile-adverts"),advertsTitle:document.querySelector(".profile-adverts__title")};function G(t){const{avatar:s,username:e,adress:r,phone:d,email:p}=t;g.userInfo.innerHTML=`<div class="user-info__thumb">
          <img class="user-info__svg big-photo" src="${s}" alt="avatar">
      </div>
      <div class="user-info__user">
          <h2 class="user-info__title">${e}</h2>
          <p class="user-info__text">${r}</p>
          <p class="user-info__text bold">${d}</p>
          <p class="user-info__text bold">${p}</p>
      </div>
  </div>`}const J=t=>`
          <li class="profile-adverts__card" data-id="${t._id}">
            ${O(t)}
            <ul class="profile-adverts__btn-list">
              <li>
                <button type="button" class="profile-adverts__btn edit-btn"></button>
              </li>
              <li>
                <button type="button" class="profile-adverts__btn delete-btn"></button>
              </li>
            </ul>
          </li>
        `;var i,S,c,L,u,q,m,A,f,M,n,y,_,k,h,x,b,D,v,P;class K extends F{constructor(e,r,d){super(e,r,d);a(this,i);a(this,c);a(this,u);a(this,m);a(this,f);a(this,n);a(this,_);a(this,h);a(this,b);a(this,v)}async showMainCard(e){o(this,i,S).call(this),await this.showCards(e)}changeCards(e){const r=e.target,d=r.closest(".delete-btn"),p=r.closest(".edit-btn");if(!d&&!p)return;const C=N(r);if(d){o(this,c,L).call(this,C);return}o(this,u,q).call(this,C)}}i=new WeakSet,S=function(){this.changeCards=this.changeCards.bind(this),this.listCardsEl.addEventListener("click",this.changeCards)},c=new WeakSet,L=function(e){o(this,f,M).call(this),o(this,_,k).call(this,e)},u=new WeakSet,q=async function(e){},m=new WeakSet,A=async function(e){o(this,n,y).call(this);try{o(this,b,D).call(this,e.cardEl),await j(e.id),o(this,h,x).call(this,e.cardEl)}catch(r){console.log(r)}},f=new WeakSet,M=function(){document.body.setAttribute("lock","");const e=Q();document.body.insertAdjacentHTML("afterbegin",e)},n=new WeakSet,y=function(){document.body.removeAttribute("lock",""),document.querySelector(".modal-wrapper").remove()},_=new WeakSet,k=function(e){const r=document.querySelector(".delete-modal__btn_disagree"),d=document.querySelector(".delete-modal__btn_agree");r.addEventListener("click",o(this,n,y)),d.addEventListener("click",o(this,m,A).bind(this,e))},h=new WeakSet,x=function(e){e.classList.add("is-hidden"),o(this,v,P).call(this)&&this.setDefaultElement()},b=new WeakSet,D=function(e){const r=V();e.insertAdjacentHTML("afterbegin",r)},v=new WeakSet,P=function(){const e=this.listCardsEl.querySelectorAll(".profile-adverts__card"),r=this.listCardsEl.querySelectorAll(".profile-adverts__card.is-hidden");return e.length===r.length};function N(t){const s=t.closest(".profile-adverts__card"),e=s.dataset.id;return{cardEl:s,id:e}}function Q(){return`
    <div class="modal-wrapper">
      <div class="delete-modal modal">
        <h3 class="delete-modal__title">Ви дійсно хочете видалити це оголошення?</h3>
        <div class="delete-modal__btns">
          <button class="delete-modal__btn delete-modal__btn_disagree" type="button">Ні</button>
          <button class="delete-modal__btn delete-modal__btn_agree" type="button">Так</button>
        </div>
      </div>
    </div>
  `}function V(){return`
  <div class="delete-card-loader-wrapper">
    <div class="delete-card-loader"></div>
  </div>
  `}async function T(t){t||(t=await w(),t=t.user),G(t),g.advertsTitle.textContent="Мої оголошення:",new K(g.profileAdverts,H,J).showMainCard()}async function W(){z.classList.add("is-hidden"),document.body.removeAttribute("lock",""),document.querySelector(".profile-adverts")&&T()}async function X(t){t.preventDefault();const s=R(l.form);try{const e=await B(s);U(e.token),W()}catch{l.errorText.textContent="неправельний логін чи пароль"}}function Y(){l.modalEl.classList.remove("is-hidden"),document.body.setAttribute("lock",""),l.modalEl.addEventListener("submit",X)}const E=await w();E?await T(E.user):Y();I();
