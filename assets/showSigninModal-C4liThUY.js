var z=(s,e,t)=>{if(!e.has(s))throw TypeError("Cannot "+t)};var i=(s,e,t)=>(z(s,e,"read from private field"),t?t.call(s):e.get(s)),r=(s,e,t)=>{if(e.has(s))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(s):e.set(s,t)},l=(s,e,t,a)=>(z(s,e,"write to private field"),a?a.call(s,t):e.set(s,t),t);var n=(s,e,t)=>(z(s,e,"access private method"),t);import{b as fe,e as ye,l as be,f as Se,h as Ee,i as we,j as xe,s as Le,k as Ce,m as Me}from"./api-B7v0WwrB.js";import{c as ke}from"./createToken-CLmez0cg.js";import{g as $e,d as qe,C as Pe,c as Ae}from"./createFormObj-CeEhBxAu.js";import{s as H,r as W,g as Te}from"./getErrorText-5M_7QVY4.js";import{t as De,s as Be}from"./setSwitchLanguage-CyEaCAgr.js";import{g as G}from"./setCurrentLanguage-DdORZCPD.js";async function Ie(){const s=fe();if(!s)return!1;try{return await ye(s)}catch{return!1}}const d={mainEl:document.querySelector("main"),modalEl:document.querySelector(".modal-wrapper"),form:document.querySelector(".signin-modal-form"),errorText:document.querySelector(".signin-modal__error")};function Oe(){localStorage.removeItem("token")}async function Z(s){s.target.removeEventListener("click",Z),H();try{await be(),Oe(),window.location.href="index.html"}catch(e){console.log(e)}finally{W()}}const N={userInfo:document.querySelector("#user-info-js"),userCards:document.querySelector("#user-cards-js"),profileAdverts:document.querySelector(".profile-adverts"),advertsTitle:document.querySelector(".profile-adverts__title")};function je(s){N.userInfo.innerHTML=Fe(s),Ue()}function Fe(s){const{avatar:e,username:t,adress:a,phone:o,email:c}=s;return`
    <div class="user-info__thumb">
      ${He(e)}
      </div> 
      <div class="user-info__text-block">
        <div class="user-info__user">
          <div>
            <h2 class="user-info__title">${t}</h2>
            <p class="user-info__text">${a}</p>
            <p class="user-info__text bold">${o}</p>
            <p class="user-info__text bold">${c}</p>
          </div>
          <button class="user-info__logout" key="logoutText">Вийти</button>
        </div>
        <a class="user-info__redact-link" href="formProfile.html?redact=true">
          <img
            class="user-info__redact-img"
            src="https://res.cloudinary.com/dk3syrsg5/image/upload/v1733484552/redactProfile_vyxmap.svg"
            alt="redact img"
          />
        </a>
      </div>
    </div>`}function Ue(){document.querySelector(".user-info__logout").addEventListener("click",Z)}function He(s){const e=s["small-250px"];s["medium-300px"];const t=s["big-400px"],a=e?"big-photo":"";return`
    <picture class="user-info__svg ${a}">
      <source
        srcset="
        ${t} 1x,
        ${t} 2x
        "
        media="(min-width: 1440px)"
      />
      <source
        srcset="
        ${e} 1x,
        ${e} 2x
        "
        media="(min-width: 768px)"
      />
      <source
        srcset="
        ${e} 1x,
        ${e} 2x
        "
      />
      <img
        src="${e}"
        srcset="${e} 1x, ${e} 2x"
        class="user-info__svg ${a}"
        alt="user"
        loading="lazy"
        width="250px"
        height="250px"
      />
    </picture>`}const We=s=>{const e=s._id;return`
          <li class="profile-adverts__card" data-id="${e}">
            ${$e(s)}
            <ul class="profile-adverts__btn-list">
              <li>
                <a href="formAdvert.html?id=${e}" class="profile-adverts__btn edit-btn" 
                aria-label="redact advert ${s.name}">
                </a>
              </li>
              <li>
                <button type="button" class="profile-adverts__btn delete-btn" aria-label="delete advert ${s.name}"></button>
              </li>
            </ul>
          </li>
        `},ee={singinModalTitle:{ua:"Вхід",en:"Exit"},singinModalEmail:{ua:"Пошта",en:"Email"},singinModalPassword:{ua:"Пароль",en:"Password"},singinModalSubmit:{ua:"Увійти",en:"Sign in"},singinModalLink:{ua:"Зареєструватись",en:"Register"},singinModalEmailPlaceholder:{placeholder:!0,ua:"Введіть ваш емейл",en:"Enter your email"},singinModalPasswordPlaceholder:{placeholder:!0,ua:"Введіть пароль",en:"Enter your password"},singinError:{ua:"",en:""}},X={logoutText:{ua:"Вийти",en:"Go out"},advertsTitle:{ua:"Мої оголошення:",en:"My adverts:"},deleteModalTitle:{ua:"Ви дійсно хочете видалити це оголошення?",en:"Are you sure you want to delete this advert?"},deleteModalFalse:{ua:"Ні",en:"No"},deleteModalTrue:{ua:"Так",en:"Yes"}};Object.assign(X,ee,qe);var u,h,x,te,L,se,C,ae,M,re,f,R,k,ne,$,ie,V,Ge,q,oe;class ze extends Pe{constructor(t,a,o){super(t,a,o);r(this,x);r(this,L);r(this,C);r(this,M);r(this,f);r(this,k);r(this,$);r(this,V);r(this,q);r(this,u,void 0);r(this,h,void 0)}async showMainCard(t){n(this,x,te).call(this),await this.showCards(t)}changeCards(t){const a=t.target;if(!a.closest(".delete-btn"))return;const c=Ne(a);n(this,L,se).call(this,c)}}u=new WeakMap,h=new WeakMap,x=new WeakSet,te=function(){this.changeCards=this.changeCards.bind(this),this.listCardsEl.addEventListener("click",this.changeCards)},L=new WeakSet,se=function(t){n(this,M,re).call(this),n(this,k,ne).call(this,t)},C=new WeakSet,ae=async function(t){H(),n(this,f,R).call(this);try{await Se(t.id),W(),await this.showCards(this.params)}catch(a){console.log(a)}},M=new WeakSet,re=function(){document.body.setAttribute("lock","");let t=document.querySelector(".delete-modal-wrapper");if(t){t.classList.remove("is-hidden");return}t=Re(),document.body.insertAdjacentHTML("afterbegin",t),G()==="en"&&De(X,"en")},f=new WeakSet,R=function(){n(this,$,ie).call(this),document.querySelector(".delete-modal-wrapper").classList.add("is-hidden"),document.body.removeAttribute("lock","")},k=new WeakSet,ne=function(t){l(this,u,n(this,f,R).bind(this,t)),l(this,h,n(this,C,ae).bind(this,t));const a=document.querySelector(".delete-modal__btn_disagree"),o=document.querySelector(".delete-modal__btn_agree");a.addEventListener("click",i(this,u)),o.addEventListener("click",i(this,h))},$=new WeakSet,ie=function(){const t=document.querySelector(".delete-modal__btn_disagree"),a=document.querySelector(".delete-modal__btn_agree");t.removeEventListener("click",i(this,u)),a.removeEventListener("click",i(this,h))},V=new WeakSet,Ge=function(t){t.classList.add("is-hidden"),n(this,q,oe).call(this)&&this.setDefaultElement()},q=new WeakSet,oe=function(){const t=this.listCardsEl.querySelectorAll(".profile-adverts__card"),a=this.listCardsEl.querySelectorAll(".profile-adverts__card.is-hidden");return t.length===a.length};function Ne(s){const e=s.closest(".profile-adverts__card"),t=e.dataset.id;return{cardEl:e,id:t}}function Re(){return`
    <div class="modal-wrapper delete-modal-wrapper">
      <div class="delete-modal modal">
        <h3 class="delete-modal__title" key="deleteModalTitle">Ви дійсно хочете видалити це оголошення?</h3>
        <div class="delete-modal__btns">
          <button class="delete-modal__btn delete-modal__btn_disagree" key="deleteModalFalse" type="button">Ні</button>
          <button class="delete-modal__btn delete-modal__btn_agree" key="deleteModalTrue" type="button">Так</button>
        </div>
      </div>
    </div>
  `}const Ye=N.profileAdverts?new ze(N.profileAdverts,Ee,We):{};async function Je(s){s||(s=await Ie(),s=s.user),je(s),Ye.showMainCard()}async function Ke(){d.modalEl.classList.add("is-hidden"),d.mainEl.classList.remove("is-hidden"),document.body.removeAttribute("lock",""),document.querySelector(".profile-adverts")&&await Qe()}async function Qe(){await Je(),Be(X),document.querySelector(".profile-adverts").classList.remove("is-hidden")}var m,g,v,_,y,Y,P,le,A,de,b,J,T,ce,S,K,D,ue,B,he,I,me,E,Q,O,ge,j,ve,F,_e,U,pe,p,w;class Ve{constructor(e,t){r(this,y);r(this,P);r(this,A);r(this,b);r(this,T);r(this,S);r(this,D);r(this,B);r(this,I);r(this,E);r(this,O);r(this,j);r(this,F);r(this,U);r(this,p);r(this,m,void 0);r(this,g,void 0);r(this,v,void 0);r(this,_,void 0);this.chatEl=e.querySelector(".chat"),this.chatForm=e.querySelector(".chat-form"),this.chatText=e.querySelector(".enter-text"),this.chatPlusBtn=e.querySelector(".chat-plus-btn"),this.chatPlusList=e.querySelector(".chat-plus-list"),this.chatDeleteEl=e.querySelector(".chat-delete"),this.loader=e.querySelector(".chat-loader"),this.userAvatar=t,this.assistAvatar={"small-chat-avatar-45px":"https://res.cloudinary.com/dk3syrsg5/image/upload/v1733484557/ai-assist_45_v4r2wi.jpg","chat-avatar-75px":"https://res.cloudinary.com/dk3syrsg5/image/upload/v1733484555/ai-assist_75_cejgdp.jpg"}}setCommunication(){this.setConversation(),this.chatPlusBtn.addEventListener("click",this.changeStatePlusPanel.bind(this)),this.chatDeleteEl.addEventListener("click",this.shawDeleteChatModal.bind(this)),n(this,y,Y).call(this)}async setConversation(){let e;try{e=await we()}catch{e=await xe()}const t=e.messages.map(a=>n(this,E,Q).call(this,a));this.chatEl.innerHTML=t.join("")}changeStatePlusPanel(){this.chatPlusList.classList.toggle("is-hidden")}shawDeleteChatModal(e){n(this,T,ce).call(this),n(this,D,ue).call(this,e)}async enterSetOneSession(e){e.key==="Enter"&&this.setOneSession()}async btnSetOneSession(e){e.preventDefault(),this.setOneSession()}async setOneSession(){const e=n(this,O,ge).call(this);e.trim()===""||e.trim()===n(this,p,w).call(this)||(n(this,P,le).call(this),n(this,j,ve).call(this),n(this,b,J).call(this,{role:"user",content:e}),await n(this,A,de).call(this,e),n(this,y,Y).call(this),this.chatText.textContent=n(this,p,w).call(this))}}m=new WeakMap,g=new WeakMap,v=new WeakMap,_=new WeakMap,y=new WeakSet,Y=function(){l(this,v,this.btnSetOneSession.bind(this)),l(this,_,this.enterSetOneSession.bind(this)),this.chatForm.addEventListener("submit",i(this,v)),document.addEventListener("keydown",i(this,_))},P=new WeakSet,le=function(){this.chatForm.removeEventListener("submit",i(this,v)),document.removeEventListener("keydown",i(this,_))},A=new WeakSet,de=async function(e){n(this,F,_e).call(this);const t=await Le(e);n(this,b,J).call(this,t),n(this,U,pe).call(this)},b=new WeakSet,J=function(e){const t=n(this,E,Q).call(this,e);this.chatEl.insertAdjacentHTML("beforeend",t)},T=new WeakSet,ce=function(){document.body.setAttribute("lock","");let e=document.querySelector(".delete-modal-wrapper");if(e){e.classList.remove("is-hidden");return}e=Ze(),document.body.insertAdjacentHTML("afterbegin",e),G()==="en"&&translateAllPage(settings,"en")},S=new WeakSet,K=function(){n(this,B,he).call(this),document.querySelector(".delete-modal-wrapper").classList.add("is-hidden"),document.body.removeAttribute("lock","")},D=new WeakSet,ue=function(e){l(this,m,n(this,S,K).bind(this,e)),l(this,g,n(this,I,me).bind(this,e));const t=document.querySelector(".delete-modal__btn_disagree"),a=document.querySelector(".delete-modal__btn_agree");t.addEventListener("click",i(this,m)),a.addEventListener("click",i(this,g))},B=new WeakSet,he=function(){const e=document.querySelector(".delete-modal__btn_disagree"),t=document.querySelector(".delete-modal__btn_agree");e.removeEventListener("click",i(this,m)),t.removeEventListener("click",i(this,g))},I=new WeakSet,me=async function(){H(),n(this,S,K).call(this);try{await Ce(),await this.setConversation(),this.changeStatePlusPanel(),W()}catch(e){console.log(e)}},E=new WeakSet,Q=function(e){const{role:t,content:a}=e,o=t==="user"?this.userAvatar:this.assistAvatar;return`
          <li class="ai-assist-chat__message ai-assist-chat__message_${t}">
            ${Xe(o)}
            <p class="ai-assist-chat__text">${a}</p>
          </li>`},O=new WeakSet,ge=function(){return new FormData(this.chatForm).get("message")},j=new WeakSet,ve=function(){this.chatForm.reset(),this.chatText.textContent=n(this,p,w).call(this)},F=new WeakSet,_e=function(){this.loader.classList.remove("is-hidden")},U=new WeakSet,pe=function(){this.loader.classList.add("is-hidden")},p=new WeakSet,w=function(){return G()=="ua"?"Написати...":"Write..."};function Xe(s){const e=s["small-chat-avatar-45px"],t=s["small-chat-avatar-45px"],a=s["chat-avatar-75px"];return`
        <picture class="ai-assist-chat__avatar">
          <source
            srcset="
              ${a} 1x,
              ${a} 2x"
            media="(min-width: 1440px)"
          />
          <source
            srcset="
              ${t} 1x,
              ${t} 2x"
            media="(min-width: 768px)"
          />
          <source
            srcset="
              ${e} 1x,
              ${e} 2x"
          />
          <img
            src="${e}"
            srcset="
              ${e} 1x,
              ${e} 2x,"
            class="ai-assist-chat__avatar"
            alt="ai-assist avatar"
            loading="lazy"
          />
        </picture>`}function Ze(){return`
  <div class="modal-wrapper delete-modal-wrapper">
  <div class="delete-modal modal">
    <h3 class="delete-modal__title" key="deleteModalTitle">Ви дійсно хочете очистити цей чат?</h3>
    <div class="delete-modal__btns">
      <button class="delete-modal__btn delete-modal__btn_disagree" key="deleteModalFalse" type="button">Ні</button>
      <button class="delete-modal__btn delete-modal__btn_agree" key="deleteModalTrue" type="button">Так</button>
    </div>
  </div>
</div>`}const et={aiAssist:document.querySelector(".ai-assist"),panelEnter:document.querySelector(".ai-assist-panel__enter"),panelText:document.querySelector(".ai-assist-panel__text"),chat:document.querySelector(".ai-assist-chat")};function tt(s){new Ve(et.aiAssist,s.user.avatar).setCommunication()}async function st(s){s.preventDefault(),H();const e=Ae(d.form);try{const t=await Me(e);ke(t.token),rt(t),await Ke()}catch(t){at(t)}finally{W()}}function at(s){var o,c;const e=(c=(o=s==null?void 0:s.response)==null?void 0:o.data)==null?void 0:c.message,a=Te(e,{property:"singinError",settings:ee});d.errorText.textContent=a}function rt(s){document.querySelector(".ai-assist")&&tt(s)}function ht(){d.mainEl.classList.add("is-hidden"),d.modalEl.classList.remove("is-hidden"),document.body.setAttribute("lock",""),d.modalEl.addEventListener("submit",st)}export{ht as a,X as b,ee as c,tt as d,Ie as i,Ye as p,et as r,Je as s};
