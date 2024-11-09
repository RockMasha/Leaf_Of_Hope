var w=(e,s,t)=>{if(!s.has(e))throw TypeError("Cannot "+t)};var c=(e,s,t)=>(w(e,s,"read from private field"),t?t.call(e):s.get(e)),o=(e,s,t)=>{if(s.has(e))throw TypeError("Cannot add the same private member more than once");s instanceof WeakSet?s.add(e):s.set(e,t)},E=(e,s,t,r)=>(w(e,s,"write to private field"),r?r.call(e,t):s.set(e,t),t);var a=(e,s,t)=>(w(e,s,"access private method"),t);import{b as U,d as j,l as F,e as H,f as O,s as W}from"./api-BBffhmo6.js";import{s as C,r as M,c as z,g as G}from"./getErrorText-ByzvEy06.js";import{g as N,d as R,C as Y,c as J}from"./createFormObj-BJ-kS3To.js";import{t as K,s as Q}from"./setSwitchLanguage-BD8z4uMl.js";import{g as V}from"./setCurrentLanguage-NOXEc7TY.js";async function X(){const e=U();if(!e)return!1;try{return await j(e)}catch{return!1}}const Z=document.querySelector(".modal-wrapper"),m={modalEl:document.querySelector(".modal-wrapper"),form:document.querySelector(".signin-modal-form"),errorText:document.querySelector(".signin-modal__error")},g={profileWrapper:document.querySelector(".profile-wrapper"),userInfo:document.querySelector("#user-info-js"),userCards:document.querySelector("#user-cards-js"),profileAdverts:document.querySelector(".profile-adverts"),advertsTitle:document.querySelector(".profile-adverts__title")};function ee(){localStorage.removeItem("token")}async function k(e){e.target.removeEventListener("click",k),C();try{await F(),ee(),window.location.href="index.html"}catch(s){console.log(s)}finally{M()}}function te(e){g.userInfo.innerHTML=se(e),re()}function se(e){const{avatar:s,username:t,adress:r,phone:n,email:l}=e;return`
    <div class="user-info__thumb">
      ${oe(s)}
      </div> 
      <div class="user-info__text-block">
        <div class="user-info__user">
          <div>
            <h2 class="user-info__title">${t}</h2>
            <p class="user-info__text">${r}</p>
            <p class="user-info__text bold">${n}</p>
            <p class="user-info__text bold">${l}</p>
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
    </div>`}function re(){document.querySelector(".user-info__logout").addEventListener("click",k)}function oe(e){const s=e["small-250px"];e["medium-300px"];const t=e["big-400px"],r=s?"big-photo":"";return`
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
    </picture>`}const ae=e=>{const s=e._id;return`
          <li class="profile-adverts__card" data-id="${s}">
            ${N(e)}
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
        `},$={singinModalTitle:{ua:"Вхід",en:"Exit"},singinModalEmail:{ua:"Пошта",en:"Email"},singinModalPassword:{ua:"Пароль",en:"Password"},singinModalSubmit:{ua:"Увійти",en:"Sign in"},singinModalLink:{ua:"Зареєструватись",en:"Register"},singinModalEmailPlaceholder:{placeholder:!0,ua:"Введіть ваш емейл",en:"Enter your email"},singinModalPasswordPlaceholder:{placeholder:!0,ua:"Введіть пароль",en:"Enter your password"},singinError:{ua:"",en:""}},L={logoutText:{ua:"Вийти",en:"Go out"},advertsTitle:{ua:"Мої оголошення:",en:"My adverts:"},deleteModalTitle:{ua:"Ви дійсно хочете видалити це оголошення?",en:"Are you sure you want to delete this advert?"},deleteModalFalse:{ua:"Ні",en:"No"},deleteModalTrue:{ua:"Так",en:"Yes"}};Object.assign(L,$,R);var i,d,f,P,h,q,p,T,_,A,u,x,v,D,b,I,S,le,y,B;class ne extends Y{constructor(t,r,n){super(t,r,n);o(this,f);o(this,h);o(this,p);o(this,_);o(this,u);o(this,v);o(this,b);o(this,S);o(this,y);o(this,i,void 0);o(this,d,void 0)}async showMainCard(t){a(this,f,P).call(this),await this.showCards(t)}changeCards(t){const r=t.target;if(!r.closest(".delete-btn"))return;const l=ie(r);a(this,h,q).call(this,l)}}i=new WeakMap,d=new WeakMap,f=new WeakSet,P=function(){this.changeCards=this.changeCards.bind(this),this.listCardsEl.addEventListener("click",this.changeCards)},h=new WeakSet,q=function(t){a(this,_,A).call(this),a(this,v,D).call(this,t)},p=new WeakSet,T=async function(t){C(),a(this,u,x).call(this);try{await H(t.id),M(),await this.showCards(this.params)}catch(r){console.log(r)}},_=new WeakSet,A=function(){document.body.setAttribute("lock","");let t=document.querySelector(".delete-modal-wrapper");if(t){t.classList.remove("is-hidden");return}t=de(),document.body.insertAdjacentHTML("afterbegin",t),V()==="en"&&K(L,"en")},u=new WeakSet,x=function(){a(this,b,I).call(this),document.querySelector(".delete-modal-wrapper").classList.add("is-hidden"),document.body.removeAttribute("lock","")},v=new WeakSet,D=function(t){E(this,i,a(this,u,x).bind(this,t)),E(this,d,a(this,p,T).bind(this,t));const r=document.querySelector(".delete-modal__btn_disagree"),n=document.querySelector(".delete-modal__btn_agree");r.addEventListener("click",c(this,i)),n.addEventListener("click",c(this,d))},b=new WeakSet,I=function(){const t=document.querySelector(".delete-modal__btn_disagree"),r=document.querySelector(".delete-modal__btn_agree");t.removeEventListener("click",c(this,i)),r.removeEventListener("click",c(this,d))},S=new WeakSet,le=function(t){t.classList.add("is-hidden"),a(this,y,B).call(this)&&this.setDefaultElement()},y=new WeakSet,B=function(){const t=this.listCardsEl.querySelectorAll(".profile-adverts__card"),r=this.listCardsEl.querySelectorAll(".profile-adverts__card.is-hidden");return t.length===r.length};function ie(e){const s=e.closest(".profile-adverts__card"),t=s.dataset.id;return{cardEl:s,id:t}}function de(){return`
    <div class="modal-wrapper delete-modal-wrapper">
      <div class="delete-modal modal">
        <h3 class="delete-modal__title" key="deleteModalTitle">Ви дійсно хочете видалити це оголошення?</h3>
        <div class="delete-modal__btns">
          <button class="delete-modal__btn delete-modal__btn_disagree" key="deleteModalFalse" type="button">Ні</button>
          <button class="delete-modal__btn delete-modal__btn_agree" key="deleteModalTrue" type="button">Так</button>
        </div>
      </div>
    </div>
  `}const ce=g.profileAdverts?new ne(g.profileAdverts,O,ae):{};async function ue(e){e||(e=await X(),e=e.user),te(e),ce.showMainCard()}async function me(){Z.classList.add("is-hidden"),document.body.removeAttribute("lock",""),document.querySelector(".profile-adverts")&&await ge()}async function ge(){await ue(),Q(L),g.profileWrapper.classList.remove("is-hidden")}async function fe(e){e.preventDefault(),C();const s=J(m.form);try{const t=await W(s);z(t.token),await me()}catch(t){he(t)}finally{M()}}function he(e){var n,l;const s=(l=(n=e==null?void 0:e.response)==null?void 0:n.data)==null?void 0:l.message,r=G(s,{property:"singinError",settings:$});m.errorText.textContent=r}function Ee(){m.modalEl.classList.remove("is-hidden"),document.body.setAttribute("lock",""),m.modalEl.addEventListener("submit",fe),document.querySelector(".profile-adverts")}export{Ee as a,L as b,$ as c,X as i,ce as p,g as r,ue as s};
