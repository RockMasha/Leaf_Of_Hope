var k=(e,s,t)=>{if(!s.has(e))throw TypeError("Cannot "+t)};var o=(e,s,t)=>{if(s.has(e))throw TypeError("Cannot add the same private member more than once");s instanceof WeakSet?s.add(e):s.set(e,t)};var a=(e,s,t)=>(k(e,s,"access private method"),t);import{b as q,d as A,l as P,e as I,f as M,s as T}from"./api-BMUXg3mB.js";import{s as _,r as g,c as D}from"./setInProgressLoader-BLew8mDa.js";import{g as U,C as j,c as B}from"./createFormObj-BbTY6VS_.js";async function H(){const e=q();if(!e)return!1;try{return await A(e)}catch{return!1}}const O=document.querySelector(".modal-wrapper"),i={modalEl:document.querySelector(".modal-wrapper"),form:document.querySelector(".signin-modal-form"),errorText:document.querySelector(".signin-modal__error")};function z(){localStorage.removeItem("token")}async function w(e){e.target.removeEventListener("click",w),_();try{await P(),z(),window.location.href="index.html"}catch(s){console.log(s)}finally{g()}}const v={userInfo:document.querySelector("#user-info-js"),userCards:document.querySelector("#user-cards-js"),profileAdverts:document.querySelector(".profile-adverts"),advertsTitle:document.querySelector(".profile-adverts__title")};function F(e){v.userInfo.innerHTML=G(e),J()}function G(e){const{avatar:s,username:t,adress:r,phone:l,email:p}=e;return`
    <div class="user-info__thumb">
      ${K(s)}
      </div> 
      <div class="user-info__text-block">
        <div class="user-info__user">
          <div>
            <h2 class="user-info__title">${t}</h2>
            <p class="user-info__text">${r}</p>
            <p class="user-info__text bold">${l}</p>
            <p class="user-info__text bold">${p}</p>
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
    </div>`}function J(){document.querySelector(".user-info__logout").addEventListener("click",w)}function K(e){const s=e["small-250px"];e["medium-300px"];const t=e["big-400px"],r=s?"big-photo":"";return`
    <picture class="user-info__svg ${r}">
      <source
        srcset="
        ${t} 1x,
        ${t} 2x
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
    </picture>`}const N=e=>{const s=e._id;return`
          <li class="profile-adverts__card" data-id="${s}">
            ${U(e)}
            <ul class="profile-adverts__btn-list">
              <li>
                <a href="formAdvert.html?id=${s}" class="profile-adverts__btn edit-btn" 
                aria-label="redact advert ${e.name}">
                </a>
              </li>
              <li>
                <button type="button" class="profile-adverts__btn delete-btn" aria-label="delete advert ${e.name}"></button>
              </li>
            </ul>
          </li>
        `};var d,x,c,E,u,C,m,$,n,b,f,S,y,R,h,L;class Q extends j{constructor(t,r,l){super(t,r,l);o(this,d);o(this,c);o(this,u);o(this,m);o(this,n);o(this,f);o(this,y);o(this,h)}async showMainCard(t){a(this,d,x).call(this),await this.showCards(t)}changeCards(t){const r=t.target;if(!r.closest(".delete-btn"))return;const p=V(r);a(this,c,E).call(this,p)}}d=new WeakSet,x=function(){this.changeCards=this.changeCards.bind(this),this.listCardsEl.addEventListener("click",this.changeCards)},c=new WeakSet,E=function(t){a(this,m,$).call(this),a(this,f,S).call(this,t)},u=new WeakSet,C=async function(t){_(),a(this,n,b).call(this);try{await I(t.id),g(),await this.showCards(this.params)}catch(r){console.log(r)}},m=new WeakSet,$=function(){document.body.setAttribute("lock","");let t=document.querySelector(".delete-modal-wrapper");if(t){t.classList.remove("is-hidden");return}t=W(),document.body.insertAdjacentHTML("afterbegin",t)},n=new WeakSet,b=function(){document.querySelector(".delete-modal-wrapper").classList.add("is-hidden"),document.body.removeAttribute("lock","")},f=new WeakSet,S=function(t){const r=document.querySelector(".delete-modal__btn_disagree"),l=document.querySelector(".delete-modal__btn_agree");r.addEventListener("click",a(this,n,b)),l.addEventListener("click",a(this,u,C).bind(this,t))},y=new WeakSet,R=function(t){t.classList.add("is-hidden"),a(this,h,L).call(this)&&this.setDefaultElement()},h=new WeakSet,L=function(){const t=this.listCardsEl.querySelectorAll(".profile-adverts__card"),r=this.listCardsEl.querySelectorAll(".profile-adverts__card.is-hidden");return t.length===r.length};function V(e){const s=e.closest(".profile-adverts__card"),t=s.dataset.id;return{cardEl:s,id:t}}function W(){return`
    <div class="modal-wrapper delete-modal-wrapper">
      <div class="delete-modal modal">
        <h3 class="delete-modal__title">Ви дійсно хочете видалити це оголошення?</h3>
        <div class="delete-modal__btns">
          <button class="delete-modal__btn delete-modal__btn_disagree" type="button">Ні</button>
          <button class="delete-modal__btn delete-modal__btn_agree" type="button">Так</button>
        </div>
      </div>
    </div>
  `}const X=v.profileAdverts?new Q(v.profileAdverts,M,N):{};async function Y(e){_(),e||(e=await H(),e=e.user),F(e),X.showMainCard(),g()}async function Z(){O.classList.add("is-hidden"),document.body.removeAttribute("lock",""),document.querySelector(".profile-adverts")&&Y()}async function ee(e){e.preventDefault(),_();const s=B(i.form);try{const t=await T(s);D(t.token),Z()}catch{i.errorText.textContent="неправельний логін чи пароль"}finally{g()}}function ae(){i.modalEl.classList.remove("is-hidden"),document.body.setAttribute("lock",""),i.modalEl.addEventListener("submit",ee)}export{ae as a,H as i,X as p,Y as s};
