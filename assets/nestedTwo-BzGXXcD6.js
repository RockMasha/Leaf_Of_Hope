var x=(t,r,e)=>{if(!r.has(t))throw TypeError("Cannot "+e)};var s=(t,r,e)=>{if(r.has(t))throw TypeError("Cannot add the same private member more than once");r instanceof WeakSet?r.add(t):r.set(t,e)};var a=(t,r,e)=>(x(t,r,"access private method"),e);import{h as I}from"./hiddenContentLoader-osB8T9fm.js";import{i as C}from"./isSignin-BhbWA-PE.js";import{l as $,d as D,a as T,c as U,s as j}from"./api-BONY0yKB.js";import{c as B}from"./createToken-BtMmr84b.js";import{s as h,r as g}from"./setInProgressLoader-BAB2lVXe.js";import{g as H,C as O}from"./Cards-BR2YB_a0.js";import"./redactDate-Ur80d7_8.js";const F=document.querySelector(".modal-wrapper"),d={modalEl:document.querySelector(".modal-wrapper"),form:document.querySelector(".signin-modal-form"),errorText:document.querySelector(".signin-modal__error")};function z(){localStorage.removeItem("token")}async function E(t){t.target.removeEventListener("click",E),h();try{await $(),z(),window.location.href="index.html"}catch(r){console.log(r)}finally{g()}}const p={userInfo:document.querySelector("#user-info-js"),userCards:document.querySelector("#user-cards-js"),profileAdverts:document.querySelector(".profile-adverts"),advertsTitle:document.querySelector(".profile-adverts__title")};function G(t){p.userInfo.innerHTML=J(t),K()}function J(t){const{avatar:r,username:e,adress:o,phone:l,email:v}=t;return`
    <div class="user-info__thumb">
      <img class="user-info__svg big-photo" src="${r}" alt="avatar">
      </div> 
      <div class="user-info__text-block">
        <div class="user-info__user">
          <div>
            <h2 class="user-info__title">${e}</h2>
            <p class="user-info__text">${o}</p>
            <p class="user-info__text bold">${l}</p>
            <p class="user-info__text bold">${v}</p>
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
    </div>`}function K(){document.querySelector(".user-info__logout").addEventListener("click",E)}const N=t=>{const r=t._id;return`
          <li class="profile-adverts__card" data-id="${r}">
            ${H(t)}
            <ul class="profile-adverts__btn-list">
              <li>
                <a href="formAdvert.html?id=${r}" class="profile-adverts__link">
                  <button type="button" class="profile-adverts__btn edit-btn"></button>
                </a>
              </li>
              <li>
                <button type="button" class="profile-adverts__btn delete-btn"></button>
              </li>
            </ul>
          </li>
        `};var i,L,c,S,u,q,m,k,n,b,f,A,y,R,_,M;class Q extends O{constructor(e,o,l){super(e,o,l);s(this,i);s(this,c);s(this,u);s(this,m);s(this,n);s(this,f);s(this,y);s(this,_)}async showMainCard(e){a(this,i,L).call(this),await this.showCards(e)}changeCards(e){const o=e.target;if(!o.closest(".delete-btn"))return;const v=V(o);a(this,c,S).call(this,v)}}i=new WeakSet,L=function(){this.changeCards=this.changeCards.bind(this),this.listCardsEl.addEventListener("click",this.changeCards)},c=new WeakSet,S=function(e){a(this,m,k).call(this),a(this,f,A).call(this,e)},u=new WeakSet,q=async function(e){h(),a(this,n,b).call(this);try{await D(e.id),g(),await this.showCards(this.params)}catch(o){console.log(o)}},m=new WeakSet,k=function(){document.body.setAttribute("lock","");let e=document.querySelector(".delete-modal-wrapper");if(e){e.classList.remove("is-hidden");return}e=W(),document.body.insertAdjacentHTML("afterbegin",e)},n=new WeakSet,b=function(){document.querySelector(".delete-modal-wrapper").classList.add("is-hidden"),document.body.removeAttribute("lock","")},f=new WeakSet,A=function(e){const o=document.querySelector(".delete-modal__btn_disagree"),l=document.querySelector(".delete-modal__btn_agree");o.addEventListener("click",a(this,n,b)),l.addEventListener("click",a(this,u,q).bind(this,e))},y=new WeakSet,R=function(e){e.classList.add("is-hidden"),a(this,_,M).call(this)&&this.setDefaultElement()},_=new WeakSet,M=function(){const e=this.listCardsEl.querySelectorAll(".profile-adverts__card"),o=this.listCardsEl.querySelectorAll(".profile-adverts__card.is-hidden");return e.length===o.length};function V(t){const r=t.closest(".profile-adverts__card"),e=r.dataset.id;return{cardEl:r,id:e}}function W(){return`
    <div class="modal-wrapper delete-modal-wrapper">
      <div class="delete-modal modal">
        <h3 class="delete-modal__title">Ви дійсно хочете видалити це оголошення?</h3>
        <div class="delete-modal__btns">
          <button class="delete-modal__btn delete-modal__btn_disagree" type="button">Ні</button>
          <button class="delete-modal__btn delete-modal__btn_agree" type="button">Так</button>
        </div>
      </div>
    </div>
  `}async function P(t){h(),t||(t=await C(),t=t.user),G(t),p.advertsTitle.textContent="Мої оголошення:",new Q(p.profileAdverts,T,N).showMainCard(),g()}async function X(){F.classList.add("is-hidden"),document.body.removeAttribute("lock",""),document.querySelector(".profile-adverts")&&P()}async function Y(t){t.preventDefault(),h();const r=U(d.form);try{const e=await j(r);B(e.token),X()}catch{d.errorText.textContent="неправельний логін чи пароль"}finally{g()}}function Z(){d.modalEl.classList.remove("is-hidden"),document.body.setAttribute("lock",""),d.modalEl.addEventListener("submit",Y)}const w=await C();w?await P(w.user):Z();I();
