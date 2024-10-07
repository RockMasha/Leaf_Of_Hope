var T=(t,r,e)=>{if(!r.has(t))throw TypeError("Cannot "+e)};var d=(t,r,e)=>{if(r.has(t))throw TypeError("Cannot add the same private member more than once");r instanceof WeakSet?r.add(t):r.set(t,e)};var o=(t,r,e)=>(T(t,r,"access private method"),e);import{h as I}from"./hiddenContentLoader-DSsxorCB.js";import{i as w}from"./isSignin-BFfRR0mF.js";import{d as j,a as H,s as U}from"./api-BAeutddi.js";import{c as B}from"./createToken-B6iS1CvJ.js";import{g as O,C as F,c as R}from"./createFormObj-DYeh9Frz.js";import"./cardData-DyQ4QymL.js";const z=document.querySelector(".modal-wrapper"),n={modalEl:document.querySelector(".modal-wrapper"),form:document.querySelector(".signin-modal-form"),errorText:document.querySelector(".signin-modal__error")},g={userInfo:document.querySelector("#user-info-js"),userCards:document.querySelector("#user-cards-js"),profileAdverts:document.querySelector(".profile-adverts"),advertsTitle:document.querySelector(".profile-adverts__title")};function G(t){g.userInfo.innerHTML=J(t),document.querySelector(".user-info__redact-img").addEventListener("click",K)}function J(t){const{avatar:r,username:e,adress:s,phone:a,email:p}=t;return`
    <div class="user-info__thumb">
      <img class="user-info__svg big-photo" src="${r}" alt="avatar">
      </div> 
      <div class="user-info__text-block">
        <div class="user-info__user">
          <h2 class="user-info__title">${e}</h2>
          <p class="user-info__text">${s}</p>
          <p class="user-info__text bold">${a}</p>
          <p class="user-info__text bold">${p}</p>
        </div>
        <img class="user-info__redact-img" src="./img/profile/redact-profile.svg" alt="redact img" />
      </div>
    </div>`}function K(){window.location.href='formProfile.html?redact="true"'}const N=t=>`
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
        `;var l,S,c,L,u,q,m,A,f,M,i,y,_,P,h,k,v,x,b,$;class Q extends F{constructor(e,s,a){super(e,s,a);d(this,l);d(this,c);d(this,u);d(this,m);d(this,f);d(this,i);d(this,_);d(this,h);d(this,v);d(this,b)}async showMainCard(e){o(this,l,S).call(this),await this.showCards(e)}changeCards(e){const s=e.target,a=s.closest(".delete-btn"),p=s.closest(".edit-btn");if(!a&&!p)return;const E=V(s);if(a){o(this,c,L).call(this,E);return}o(this,u,q).call(this,E.id)}}l=new WeakSet,S=function(){this.changeCards=this.changeCards.bind(this),this.listCardsEl.addEventListener("click",this.changeCards)},c=new WeakSet,L=function(e){o(this,f,M).call(this),o(this,_,P).call(this,e)},u=new WeakSet,q=async function(e){window.location.href=`formAdvert.html?id=${e}`},m=new WeakSet,A=async function(e){o(this,i,y).call(this);try{o(this,v,x).call(this,e.cardEl),await j(e.id),o(this,h,k).call(this,e.cardEl)}catch(s){console.log(s)}},f=new WeakSet,M=function(){document.body.setAttribute("lock","");const e=W();document.body.insertAdjacentHTML("afterbegin",e)},i=new WeakSet,y=function(){document.body.removeAttribute("lock",""),document.querySelector(".modal-wrapper").remove()},_=new WeakSet,P=function(e){const s=document.querySelector(".delete-modal__btn_disagree"),a=document.querySelector(".delete-modal__btn_agree");s.addEventListener("click",o(this,i,y)),a.addEventListener("click",o(this,m,A).bind(this,e))},h=new WeakSet,k=function(e){e.classList.add("is-hidden"),o(this,b,$).call(this)&&this.setDefaultElement()},v=new WeakSet,x=function(e){const s=X();e.insertAdjacentHTML("afterbegin",s)},b=new WeakSet,$=function(){const e=this.listCardsEl.querySelectorAll(".profile-adverts__card"),s=this.listCardsEl.querySelectorAll(".profile-adverts__card.is-hidden");return e.length===s.length};function V(t){const r=t.closest(".profile-adverts__card"),e=r.dataset.id;return{cardEl:r,id:e}}function W(){return`
    <div class="modal-wrapper">
      <div class="delete-modal modal">
        <h3 class="delete-modal__title">Ви дійсно хочете видалити це оголошення?</h3>
        <div class="delete-modal__btns">
          <button class="delete-modal__btn delete-modal__btn_disagree" type="button">Ні</button>
          <button class="delete-modal__btn delete-modal__btn_agree" type="button">Так</button>
        </div>
      </div>
    </div>
  `}function X(){return`
  <div class="delete-card-loader-wrapper">
    <div class="delete-card-loader"></div>
  </div>
  `}async function D(t){t||(t=await w(),t=t.user),G(t),g.advertsTitle.textContent="Мої оголошення:",new Q(g.profileAdverts,H,N).showMainCard()}async function Y(){z.classList.add("is-hidden"),document.body.removeAttribute("lock",""),document.querySelector(".profile-adverts")&&D()}async function Z(t){t.preventDefault();const r=R(n.form);try{const e=await U(r);B(e.token),Y()}catch{n.errorText.textContent="неправельний логін чи пароль"}}function ee(){n.modalEl.classList.remove("is-hidden"),document.body.setAttribute("lock",""),n.modalEl.addEventListener("submit",Z)}const C=await w();C?await D(C.user):ee();I();
