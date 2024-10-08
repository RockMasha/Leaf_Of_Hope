var U=(t,o,e)=>{if(!o.has(t))throw TypeError("Cannot "+e)};var n=(t,o,e)=>{if(o.has(t))throw TypeError("Cannot add the same private member more than once");o instanceof WeakSet?o.add(t):o.set(t,e)};var s=(t,o,e)=>(U(t,o,"access private method"),e);import{h as j}from"./hiddenContentLoader-BvZHvYTg.js";import{i as L}from"./isSignin-DGFatcK1.js";import{l as B,d as H,a as O,s as R}from"./api-Bqt0gWw5.js";import{c as F}from"./createToken-BCfxSjGu.js";import{g as z,C as G,c as J}from"./createFormObj-DYeh9Frz.js";import{s as y,r as E}from"./setInProgressLoader-BAB2lVXe.js";import"./cardData-DyQ4QymL.js";const K=document.querySelector(".modal-wrapper"),l={modalEl:document.querySelector(".modal-wrapper"),form:document.querySelector(".signin-modal-form"),errorText:document.querySelector(".signin-modal__error")};function N(){localStorage.removeItem("token")}async function S(t){t.target.removeEventListener("click",S),y();try{await B(),N(),window.location.href="index.html"}catch(o){console.log(o)}finally{E()}}const b={userInfo:document.querySelector("#user-info-js"),userCards:document.querySelector("#user-cards-js"),profileAdverts:document.querySelector(".profile-adverts"),advertsTitle:document.querySelector(".profile-adverts__title")};function Q(t){b.userInfo.innerHTML=V(t),X(),W()}function V(t){const{avatar:o,username:e,adress:r,phone:a,email:g}=t;return`
    <div class="user-info__thumb">
      <img class="user-info__svg big-photo" src="${o}" alt="avatar">
      </div> 
      <div class="user-info__text-block">
        <div class="user-info__user">
          <div>
            <h2 class="user-info__title">${e}</h2>
            <p class="user-info__text">${r}</p>
            <p class="user-info__text bold">${a}</p>
            <p class="user-info__text bold">${g}</p>
          </div>
          <button class="user-info__logout">Вийти</button>
        </div>
        <img class="user-info__redact-img" src="./img/profile/redact-profile.svg" alt="redact img" />
      </div>
    </div>`}function W(){document.querySelector(".user-info__logout").addEventListener("click",S)}function X(){document.querySelector(".user-info__redact-img").addEventListener("click",k)}function k(){event.target.removeEventListener("click",k),window.location.href='formProfile.html?redact="true"'}const Y=t=>`
          <li class="profile-adverts__card" data-id="${t._id}">
            ${z(t)}
            <ul class="profile-adverts__btn-list">
              <li>
                <button type="button" class="profile-adverts__btn edit-btn"></button>
              </li>
              <li>
                <button type="button" class="profile-adverts__btn delete-btn"></button>
              </li>
            </ul>
          </li>
        `;var d,q,c,P,u,A,m,M,f,x,i,p,_,I,h,$,v,T;class Z extends G{constructor(e,r,a){super(e,r,a);n(this,d);n(this,c);n(this,u);n(this,m);n(this,f);n(this,i);n(this,_);n(this,h);n(this,v)}async showMainCard(e){s(this,d,q).call(this),await this.showCards(e)}changeCards(e){const r=e.target,a=r.closest(".delete-btn"),g=r.closest(".edit-btn");if(!a&&!g)return;const w=ee(r);if(a){s(this,c,P).call(this,w);return}s(this,u,A).call(this,w.id)}}d=new WeakSet,q=function(){this.changeCards=this.changeCards.bind(this),this.listCardsEl.addEventListener("click",this.changeCards)},c=new WeakSet,P=function(e){s(this,f,x).call(this),s(this,_,I).call(this,e)},u=new WeakSet,A=async function(e){window.location.href=`formAdvert.html?id=${e}`},m=new WeakSet,M=async function(e){s(this,i,p).call(this);try{y(),await H(e.id),s(this,h,$).call(this,e.cardEl)}catch(r){console.log(r)}finally{E()}},f=new WeakSet,x=function(){document.body.setAttribute("lock","");const e=te();document.body.insertAdjacentHTML("afterbegin",e)},i=new WeakSet,p=function(){document.body.removeAttribute("lock",""),document.querySelector(".modal-wrapper").remove()},_=new WeakSet,I=function(e){const r=document.querySelector(".delete-modal__btn_disagree"),a=document.querySelector(".delete-modal__btn_agree");r.addEventListener("click",s(this,i,p)),a.addEventListener("click",s(this,m,M).bind(this,e))},h=new WeakSet,$=function(e){e.classList.add("is-hidden"),s(this,v,T).call(this)&&this.setDefaultElement()},v=new WeakSet,T=function(){const e=this.listCardsEl.querySelectorAll(".profile-adverts__card"),r=this.listCardsEl.querySelectorAll(".profile-adverts__card.is-hidden");return e.length===r.length};function ee(t){const o=t.closest(".profile-adverts__card"),e=o.dataset.id;return{cardEl:o,id:e}}function te(){return`
    <div class="modal-wrapper">
      <div class="delete-modal modal">
        <h3 class="delete-modal__title">Ви дійсно хочете видалити це оголошення?</h3>
        <div class="delete-modal__btns">
          <button class="delete-modal__btn delete-modal__btn_disagree" type="button">Ні</button>
          <button class="delete-modal__btn delete-modal__btn_agree" type="button">Так</button>
        </div>
      </div>
    </div>
  `}async function D(t){t||(t=await L(),t=t.user),Q(t),b.advertsTitle.textContent="Мої оголошення:",new Z(b.profileAdverts,O,Y).showMainCard()}async function oe(){K.classList.add("is-hidden"),document.body.removeAttribute("lock",""),document.querySelector(".profile-adverts")&&D()}async function re(t){t.preventDefault(),y();const o=J(l.form);try{const e=await R(o);F(e.token),oe()}catch{l.errorText.textContent="неправельний логін чи пароль"}finally{E()}}function se(){l.modalEl.classList.remove("is-hidden"),document.body.setAttribute("lock",""),l.modalEl.addEventListener("submit",re)}const C=await L();C?await D(C.user):se();j();
