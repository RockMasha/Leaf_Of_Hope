var x=(e,s,t)=>{if(!s.has(e))throw TypeError("Cannot "+t)};var a=(e,s,t)=>{if(s.has(e))throw TypeError("Cannot add the same private member more than once");s instanceof WeakSet?s.add(e):s.set(e,t)};var n=(e,s,t)=>(x(e,s,"access private method"),t);import{b as P,d as $,l as A,e as I,f as M,s as T}from"./api-C87ePszt.js";import{s as g,r as h,c as D}from"./setInProgressLoader-DtNgW6Wc.js";import{g as U,C as j,c as B}from"./createFormObj-BsGF3NHA.js";async function H(){const e=P();if(!e)return!1;try{return await $(e)}catch{return!1}}const O=document.querySelector(".modal-wrapper"),i={modalEl:document.querySelector(".modal-wrapper"),form:document.querySelector(".signin-modal-form"),errorText:document.querySelector(".signin-modal__error")};function z(){localStorage.removeItem("token")}async function w(e){e.target.removeEventListener("click",w),g();try{await A(),z(),window.location.href="index.html"}catch(s){console.log(s)}finally{h()}}const v={userInfo:document.querySelector("#user-info-js"),userCards:document.querySelector("#user-cards-js"),profileAdverts:document.querySelector(".profile-adverts"),advertsTitle:document.querySelector(".profile-adverts__title")};function F(e){v.userInfo.innerHTML=G(e),J()}function G(e){const{avatar:s,username:t,adress:r,phone:o,email:p}=e;return`
    <div class="user-info__thumb">
      ${K(s)}
      </div> 
      <div class="user-info__text-block">
        <div class="user-info__user">
          <div>
            <h2 class="user-info__title">${t}</h2>
            <p class="user-info__text">${r}</p>
            <p class="user-info__text bold">${o}</p>
            <p class="user-info__text bold">${p}</p>
          </div>
          <button class="user-info__logout">Вийти</button>
        </div>
        <a class="user-info__redact-link" href="formProfile.html?redact=true">
          <img
            class="user-info__redact-img"
            src="./img/profile/redact-profile.svg"
            alt="redact img"
          />
        </a>
      </div>
    </div>`}function J(){document.querySelector(".user-info__logout").addEventListener("click",w)}function K(e){const s=e["small-250px"],t=e["medium-300px"],r=e["large-500px"],o=s?"big-photo":"";return`
    <picture class="user-info__svg ${o}">
      <source
        srcset="${r}"
        media="(min-width: 1440px)"
      />
      <source
        srcset="${t}"
        media="(min-width: 768px)"
      />
      <source
        srcset="${s}"
      />
      <img
        src="${s||"./img/universal/defoultPlantPhoto.jpg"}"
        class="user-info__svg ${o}"
        alt="plant"
        loading="lazy"
      />
    </picture>`}const N=e=>{const s=e._id;return`
          <li class="profile-adverts__card" data-id="${s}">
            ${U(e)}
            <ul class="profile-adverts__btn-list">
              <li>
                <a href="formAdvert.html?id=${s}" class="profile-adverts__link">
                  <button type="button" class="profile-adverts__btn edit-btn"></button>
                </a>
              </li>
              <li>
                <button type="button" class="profile-adverts__btn delete-btn"></button>
              </li>
            </ul>
          </li>
        `};var d,E,c,C,u,S,m,L,l,b,f,k,y,R,_,q;class Q extends j{constructor(t,r,o){super(t,r,o);a(this,d);a(this,c);a(this,u);a(this,m);a(this,l);a(this,f);a(this,y);a(this,_)}async showMainCard(t){n(this,d,E).call(this),await this.showCards(t)}changeCards(t){const r=t.target;if(!r.closest(".delete-btn"))return;const p=V(r);n(this,c,C).call(this,p)}}d=new WeakSet,E=function(){this.changeCards=this.changeCards.bind(this),this.listCardsEl.addEventListener("click",this.changeCards)},c=new WeakSet,C=function(t){n(this,m,L).call(this),n(this,f,k).call(this,t)},u=new WeakSet,S=async function(t){g(),n(this,l,b).call(this);try{await I(t.id),h(),await this.showCards(this.params)}catch(r){console.log(r)}},m=new WeakSet,L=function(){document.body.setAttribute("lock","");let t=document.querySelector(".delete-modal-wrapper");if(t){t.classList.remove("is-hidden");return}t=W(),document.body.insertAdjacentHTML("afterbegin",t)},l=new WeakSet,b=function(){document.querySelector(".delete-modal-wrapper").classList.add("is-hidden"),document.body.removeAttribute("lock","")},f=new WeakSet,k=function(t){const r=document.querySelector(".delete-modal__btn_disagree"),o=document.querySelector(".delete-modal__btn_agree");r.addEventListener("click",n(this,l,b)),o.addEventListener("click",n(this,u,S).bind(this,t))},y=new WeakSet,R=function(t){t.classList.add("is-hidden"),n(this,_,q).call(this)&&this.setDefaultElement()},_=new WeakSet,q=function(){const t=this.listCardsEl.querySelectorAll(".profile-adverts__card"),r=this.listCardsEl.querySelectorAll(".profile-adverts__card.is-hidden");return t.length===r.length};function V(e){const s=e.closest(".profile-adverts__card"),t=s.dataset.id;return{cardEl:s,id:t}}function W(){return`
    <div class="modal-wrapper delete-modal-wrapper">
      <div class="delete-modal modal">
        <h3 class="delete-modal__title">Ви дійсно хочете видалити це оголошення?</h3>
        <div class="delete-modal__btns">
          <button class="delete-modal__btn delete-modal__btn_disagree" type="button">Ні</button>
          <button class="delete-modal__btn delete-modal__btn_agree" type="button">Так</button>
        </div>
      </div>
    </div>
  `}async function X(e){g(),e||(e=await H(),e=e.user),F(e),v.advertsTitle.textContent="Мої оголошення:",new Q(v.profileAdverts,M,N).showMainCard(),h()}async function Y(){O.classList.add("is-hidden"),document.body.removeAttribute("lock",""),document.querySelector(".profile-adverts")&&X()}async function Z(e){e.preventDefault(),g();const s=B(i.form);try{const t=await T(s);D(t.token),Y()}catch{i.errorText.textContent="неправельний логін чи пароль"}finally{h()}}function oe(){i.modalEl.classList.remove("is-hidden"),document.body.setAttribute("lock",""),i.modalEl.addEventListener("submit",Z)}export{oe as a,H as i,X as s};
