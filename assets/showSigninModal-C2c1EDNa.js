var w=(t,s,e)=>{if(!s.has(t))throw TypeError("Cannot "+e)};var d=(t,s,e)=>(w(t,s,"read from private field"),e?e.call(t):s.get(t)),o=(t,s,e)=>{if(s.has(t))throw TypeError("Cannot add the same private member more than once");s instanceof WeakSet?s.add(t):s.set(t,e)},E=(t,s,e,r)=>(w(t,s,"write to private field"),r?r.call(t,e):s.set(t,e),e);var a=(t,s,e)=>(w(t,s,"access private method"),e);import{b as B,d as U,l as j,e as F,f as H,s as O}from"./api-CZvNR4Wc.js";import{s as x,r as M,c as W}from"./setInProgressLoader-BvJ9Zrz-.js";import{g as z,d as G,C as N,c as R}from"./createFormObj-D7ulFSlZ.js";import{t as Y,s as J}from"./setSwitchLanguage-C6bkzce6.js";import{g as K}from"./setCurrentLanguage-Bvpoq5JC.js";async function Q(){const t=B();if(!t)return!1;try{return await U(t)}catch{return!1}}const V=document.querySelector(".modal-wrapper"),u={modalEl:document.querySelector(".modal-wrapper"),form:document.querySelector(".signin-modal-form"),errorText:document.querySelector(".signin-modal__error")},m={profileWrapper:document.querySelector(".profile-wrapper"),userInfo:document.querySelector("#user-info-js"),userCards:document.querySelector("#user-cards-js"),profileAdverts:document.querySelector(".profile-adverts"),advertsTitle:document.querySelector(".profile-adverts__title")};function X(){localStorage.removeItem("token")}async function k(t){t.target.removeEventListener("click",k),x();try{await j(),X(),window.location.href="index.html"}catch(s){console.log(s)}finally{M()}}function Z(t){m.userInfo.innerHTML=ee(t),te()}function ee(t){const{avatar:s,username:e,adress:r,phone:n,email:y}=t;return`
    <div class="user-info__thumb">
      ${se(s)}
      </div> 
      <div class="user-info__text-block">
        <div class="user-info__user">
          <div>
            <h2 class="user-info__title">${e}</h2>
            <p class="user-info__text">${r}</p>
            <p class="user-info__text bold">${n}</p>
            <p class="user-info__text bold">${y}</p>
          </div>
          <button class="user-info__logout" key="logoutText">Вийти</button>
        </div>
        <a class="user-info__redact-link" href="formProfile.html?redact=true">
          <img
            class="user-info__redact-img"
            src="./img/profile/redactProfile.svg"
            alt="redact img"
          />
        </a>
      </div>
    </div>`}function te(){document.querySelector(".user-info__logout").addEventListener("click",k)}function se(t){const s=t["small-250px"];t["medium-300px"];const e=t["big-400px"],r=s?"big-photo":"";return`
    <picture class="user-info__svg ${r}">
      <source
        srcset="
        ${e} 1x,
        ${e} 2x
        "
        media="(min-width: 1440px)"
      />
      <source
        srcset="
        ${s} 1x,
        ${s} 2x
        "
        media="(min-width: 768px)"
      />
      <source
        srcset="
        ${s} 1x,
        ${s} 2x
        "
      />
      <img
        src="${s}"
        srcset="${s} 1x, ${s} 2x"
        class="user-info__svg ${r}"
        alt="user"
        loading="lazy"
        width="250px"
        height="250px"
      />
    </picture>`}const re=t=>{const s=t._id;return`
          <li class="profile-adverts__card" data-id="${s}">
            ${z(t)}
            <ul class="profile-adverts__btn-list">
              <li>
                <a href="formAdvert.html?id=${s}" class="profile-adverts__btn edit-btn" 
                aria-label="redact advert ${t.name}">
                </a>
              </li>
              <li>
                <button type="button" class="profile-adverts__btn delete-btn" aria-label="delete advert ${t.name}"></button>
              </li>
            </ul>
          </li>
        `},oe={singinModalTitle:{ua:"Вхід",en:"Exit"},singinModalEmail:{ua:"Пошта",en:"Email"},singinModalPassword:{ua:"Пароль",en:"Password"},singinModalSubmit:{ua:"Увійти",en:"Sign in"},singinModalLink:{ua:"Зареєструватись",en:"Register"},singinModalPasswordPlaceholder:{placeholder:!0,ua:"Введіть ваш емейл",en:"Enter your email"},singinModalPasswordEmail:{placeholder:!0,ua:"Введіть пароль",en:"Enter your password"}},L={logoutText:{ua:"Вийти",en:"Go out"},advertsTitle:{ua:"Мої оголошення:",en:"My adverts:"},deleteModalTitle:{ua:"Ви дійсно хочете видалити це оголошення?",en:"Are you sure you want to delete this advert?"},deleteModalFalse:{ua:"Ні",en:"No"},deleteModalTrue:{ua:"Так",en:"Yes"}};Object.assign(L,oe,G);var l,i,g,$,f,P,h,q,p,A,c,S,_,T,v,I,C,ne,b,D;class ae extends N{constructor(e,r,n){super(e,r,n);o(this,g);o(this,f);o(this,h);o(this,p);o(this,c);o(this,_);o(this,v);o(this,C);o(this,b);o(this,l,void 0);o(this,i,void 0)}async showMainCard(e){a(this,g,$).call(this),await this.showCards(e)}changeCards(e){const r=e.target;if(!r.closest(".delete-btn"))return;const y=le(r);a(this,f,P).call(this,y)}}l=new WeakMap,i=new WeakMap,g=new WeakSet,$=function(){this.changeCards=this.changeCards.bind(this),this.listCardsEl.addEventListener("click",this.changeCards)},f=new WeakSet,P=function(e){a(this,p,A).call(this),a(this,_,T).call(this,e)},h=new WeakSet,q=async function(e){x(),a(this,c,S).call(this);try{await F(e.id),M(),await this.showCards(this.params)}catch(r){console.log(r)}},p=new WeakSet,A=function(){document.body.setAttribute("lock","");let e=document.querySelector(".delete-modal-wrapper");if(e){e.classList.remove("is-hidden");return}e=ie(),document.body.insertAdjacentHTML("afterbegin",e),K()==="en"&&Y(L,"en")},c=new WeakSet,S=function(){a(this,v,I).call(this),document.querySelector(".delete-modal-wrapper").classList.add("is-hidden"),document.body.removeAttribute("lock","")},_=new WeakSet,T=function(e){E(this,l,a(this,c,S).bind(this,e)),E(this,i,a(this,h,q).bind(this,e));const r=document.querySelector(".delete-modal__btn_disagree"),n=document.querySelector(".delete-modal__btn_agree");r.addEventListener("click",d(this,l)),n.addEventListener("click",d(this,i))},v=new WeakSet,I=function(){const e=document.querySelector(".delete-modal__btn_disagree"),r=document.querySelector(".delete-modal__btn_agree");e.removeEventListener("click",d(this,l)),r.removeEventListener("click",d(this,i))},C=new WeakSet,ne=function(e){e.classList.add("is-hidden"),a(this,b,D).call(this)&&this.setDefaultElement()},b=new WeakSet,D=function(){const e=this.listCardsEl.querySelectorAll(".profile-adverts__card"),r=this.listCardsEl.querySelectorAll(".profile-adverts__card.is-hidden");return e.length===r.length};function le(t){const s=t.closest(".profile-adverts__card"),e=s.dataset.id;return{cardEl:s,id:e}}function ie(){return`
    <div class="modal-wrapper delete-modal-wrapper">
      <div class="delete-modal modal">
        <h3 class="delete-modal__title" key="deleteModalTitle">Ви дійсно хочете видалити це оголошення?</h3>
        <div class="delete-modal__btns">
          <button class="delete-modal__btn delete-modal__btn_disagree" key="deleteModalFalse" type="button">Ні</button>
          <button class="delete-modal__btn delete-modal__btn_agree" key="deleteModalTrue" type="button">Так</button>
        </div>
      </div>
    </div>
  `}const de=m.profileAdverts?new ae(m.profileAdverts,H,re):{};async function ce(t){t||(t=await Q(),t=t.user),Z(t),de.showMainCard()}async function ue(){V.classList.add("is-hidden"),document.body.removeAttribute("lock",""),document.querySelector(".profile-adverts")&&await me()}async function me(){await ce(),J(L),m.profileWrapper.classList.remove("is-hidden")}async function ge(t){t.preventDefault(),x();const s=R(u.form);try{const e=await O(s);W(e.token),await ue()}catch{u.errorText.textContent="неправельний логін чи пароль"}finally{M()}}function ye(){u.modalEl.classList.remove("is-hidden"),document.body.setAttribute("lock",""),u.modalEl.addEventListener("submit",ge),document.querySelector(".profile-adverts")}export{ye as a,L as b,oe as c,Q as i,de as p,m as r,ce as s};
