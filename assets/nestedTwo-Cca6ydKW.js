var A=(t,s,e)=>{if(!s.has(t))throw TypeError("Cannot "+e)};var a=(t,s,e)=>{if(s.has(t))throw TypeError("Cannot add the same private member more than once");s instanceof WeakSet?s.add(t):s.set(t,e)};var l=(t,s,e)=>(A(t,s,"access private method"),e);import{h as I}from"./hiddenContentLoader-Ds56KOrg.js";import{i as C}from"./isSignin-BhUNpdbv.js";import{l as M,d as D,a as T,s as U}from"./api-BnmDMCHo.js";import{c as j}from"./createToken-Do_y61Hs.js";import{g as B,C as H,c as O}from"./Cards-CeW7BSsB.js";import{s as h,r as g}from"./setInProgressLoader-BAB2lVXe.js";import"./getDataValue-Bm2xYISE.js";const z=document.querySelector(".modal-wrapper"),i={modalEl:document.querySelector(".modal-wrapper"),form:document.querySelector(".signin-modal-form"),errorText:document.querySelector(".signin-modal__error")};function F(){localStorage.removeItem("token")}async function E(t){t.target.removeEventListener("click",E),h();try{await M(),F(),window.location.href="index.html"}catch(s){console.log(s)}finally{g()}}const v={userInfo:document.querySelector("#user-info-js"),userCards:document.querySelector("#user-cards-js"),profileAdverts:document.querySelector(".profile-adverts"),advertsTitle:document.querySelector(".profile-adverts__title")};function G(t){v.userInfo.innerHTML=J(t),K()}function J(t){const{avatar:s,username:e,adress:o,phone:r,email:p}=t;return`
    <div class="user-info__thumb">
      ${N(s)}
      </div> 
      <div class="user-info__text-block">
        <div class="user-info__user">
          <div>
            <h2 class="user-info__title">${e}</h2>
            <p class="user-info__text">${o}</p>
            <p class="user-info__text bold">${r}</p>
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
    </div>`}function K(){document.querySelector(".user-info__logout").addEventListener("click",E)}function N(t){const s=t["small-250px"],e=t["medium-300px"],o=t["large-500px"],r=s?"big-photo":"";return`
    <picture class="user-info__svg ${r}">
      <source
        srcset="${o}"
        media="(min-width: 1440px)"
      />
      <source
        srcset="${e}"
        media="(min-width: 768px)"
      />
      <source
        srcset="${s}"
      />
      <img
        src="${s||"./img/universal/defoultPlantPhoto.jpg"}"
        class="user-info__svg ${r}"
        alt="plant"
        loading="lazy"
      />
    </picture>`}const Q=t=>{const s=t._id;return`
          <li class="profile-adverts__card" data-id="${s}">
            ${B(t)}
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
        `};var d,L,c,S,u,k,m,q,n,b,f,x,y,V,_,P;class R extends H{constructor(e,o,r){super(e,o,r);a(this,d);a(this,c);a(this,u);a(this,m);a(this,n);a(this,f);a(this,y);a(this,_)}async showMainCard(e){l(this,d,L).call(this),await this.showCards(e)}changeCards(e){const o=e.target;if(!o.closest(".delete-btn"))return;const p=W(o);l(this,c,S).call(this,p)}}d=new WeakSet,L=function(){this.changeCards=this.changeCards.bind(this),this.listCardsEl.addEventListener("click",this.changeCards)},c=new WeakSet,S=function(e){l(this,m,q).call(this),l(this,f,x).call(this,e)},u=new WeakSet,k=async function(e){h(),l(this,n,b).call(this);try{await D(e.id),g(),await this.showCards(this.params)}catch(o){console.log(o)}},m=new WeakSet,q=function(){document.body.setAttribute("lock","");let e=document.querySelector(".delete-modal-wrapper");if(e){e.classList.remove("is-hidden");return}e=X(),document.body.insertAdjacentHTML("afterbegin",e)},n=new WeakSet,b=function(){document.querySelector(".delete-modal-wrapper").classList.add("is-hidden"),document.body.removeAttribute("lock","")},f=new WeakSet,x=function(e){const o=document.querySelector(".delete-modal__btn_disagree"),r=document.querySelector(".delete-modal__btn_agree");o.addEventListener("click",l(this,n,b)),r.addEventListener("click",l(this,u,k).bind(this,e))},y=new WeakSet,V=function(e){e.classList.add("is-hidden"),l(this,_,P).call(this)&&this.setDefaultElement()},_=new WeakSet,P=function(){const e=this.listCardsEl.querySelectorAll(".profile-adverts__card"),o=this.listCardsEl.querySelectorAll(".profile-adverts__card.is-hidden");return e.length===o.length};function W(t){const s=t.closest(".profile-adverts__card"),e=s.dataset.id;return{cardEl:s,id:e}}function X(){return`
    <div class="modal-wrapper delete-modal-wrapper">
      <div class="delete-modal modal">
        <h3 class="delete-modal__title">Ви дійсно хочете видалити це оголошення?</h3>
        <div class="delete-modal__btns">
          <button class="delete-modal__btn delete-modal__btn_disagree" type="button">Ні</button>
          <button class="delete-modal__btn delete-modal__btn_agree" type="button">Так</button>
        </div>
      </div>
    </div>
  `}async function $(t){h(),t||(t=await C(),t=t.user),G(t),v.advertsTitle.textContent="Мої оголошення:",new R(v.profileAdverts,T,Q).showMainCard(),g()}async function Y(){z.classList.add("is-hidden"),document.body.removeAttribute("lock",""),document.querySelector(".profile-adverts")&&$()}async function Z(t){t.preventDefault(),h();const s=O(i.form);try{const e=await U(s);j(e.token),Y()}catch{i.errorText.textContent="неправельний логін чи пароль"}finally{g()}}function ee(){i.modalEl.classList.remove("is-hidden"),document.body.setAttribute("lock",""),i.modalEl.addEventListener("submit",Z)}const w=await C();w?await $(w.user):ee();I();
