var G=(s,e,t)=>{if(!e.has(s))throw TypeError("Cannot "+t)};var i=(s,e,t)=>(G(s,e,"read from private field"),t?t.call(s):e.get(s)),r=(s,e,t)=>{if(e.has(s))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(s):e.set(s,t)},l=(s,e,t,a)=>(G(s,e,"write to private field"),a?a.call(s,t):e.set(s,t),t);var n=(s,e,t)=>(G(s,e,"access private method"),t);import{b as fe,d as ye,l as be,e as Se,f as we,h as Ee,i as xe,s as Ce,j as Le,k as Me}from"./api-BUf5wovn.js";import{s as W,r as z,c as ke,g as $e}from"./getErrorText-Ct-KWMrI.js";import{g as qe,d as Pe,C as Ae,c as Te}from"./createFormObj-CgXvP13C.js";import{t as De,s as Be}from"./setSwitchLanguage-DJQPoVWm.js";import{g as N}from"./setCurrentLanguage-DtO1VHaQ.js";async function Ie(){const s=fe();if(!s)return!1;try{return await ye(s)}catch{return!1}}const Oe=document.querySelector(".modal-wrapper"),E={modalEl:document.querySelector(".modal-wrapper"),form:document.querySelector(".signin-modal-form"),errorText:document.querySelector(".signin-modal__error")},x={profileWrapper:document.querySelector(".profile-wrapper"),userInfo:document.querySelector("#user-info-js"),userCards:document.querySelector("#user-cards-js"),profileAdverts:document.querySelector(".profile-adverts"),advertsTitle:document.querySelector(".profile-adverts__title")};function je(){localStorage.removeItem("token")}async function Z(s){s.target.removeEventListener("click",Z),W();try{await be(),je(),window.location.href="index.html"}catch(e){console.log(e)}finally{z()}}function Fe(s){x.userInfo.innerHTML=Ue(s),He()}function Ue(s){const{avatar:e,username:t,adress:a,phone:o,email:d}=s;return`
    <div class="user-info__thumb">
      ${We(e)}
      </div> 
      <div class="user-info__text-block">
        <div class="user-info__user">
          <div>
            <h2 class="user-info__title">${t}</h2>
            <p class="user-info__text">${a}</p>
            <p class="user-info__text bold">${o}</p>
            <p class="user-info__text bold">${d}</p>
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
    </div>`}function He(){document.querySelector(".user-info__logout").addEventListener("click",Z)}function We(s){const e=s["small-250px"];s["medium-300px"];const t=s["big-400px"],a=e?"big-photo":"";return`
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
    </picture>`}const ze=s=>{const e=s._id;return`
          <li class="profile-adverts__card" data-id="${e}">
            ${qe(s)}
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
        `},ee={singinModalTitle:{ua:"Вхід",en:"Exit"},singinModalEmail:{ua:"Пошта",en:"Email"},singinModalPassword:{ua:"Пароль",en:"Password"},singinModalSubmit:{ua:"Увійти",en:"Sign in"},singinModalLink:{ua:"Зареєструватись",en:"Register"},singinModalEmailPlaceholder:{placeholder:!0,ua:"Введіть ваш емейл",en:"Enter your email"},singinModalPasswordPlaceholder:{placeholder:!0,ua:"Введіть пароль",en:"Enter your password"},singinError:{ua:"",en:""}},X={logoutText:{ua:"Вийти",en:"Go out"},advertsTitle:{ua:"Мої оголошення:",en:"My adverts:"},deleteModalTitle:{ua:"Ви дійсно хочете видалити це оголошення?",en:"Are you sure you want to delete this advert?"},deleteModalFalse:{ua:"Ні",en:"No"},deleteModalTrue:{ua:"Так",en:"Yes"}};Object.assign(X,ee,Pe);var c,u,C,te,L,se,M,ae,k,re,p,R,$,ne,q,ie,V,Ne,P,oe;class Ge extends Ae{constructor(t,a,o){super(t,a,o);r(this,C);r(this,L);r(this,M);r(this,k);r(this,p);r(this,$);r(this,q);r(this,V);r(this,P);r(this,c,void 0);r(this,u,void 0)}async showMainCard(t){n(this,C,te).call(this),await this.showCards(t)}changeCards(t){const a=t.target;if(!a.closest(".delete-btn"))return;const d=Re(a);n(this,L,se).call(this,d)}}c=new WeakMap,u=new WeakMap,C=new WeakSet,te=function(){this.changeCards=this.changeCards.bind(this),this.listCardsEl.addEventListener("click",this.changeCards)},L=new WeakSet,se=function(t){n(this,k,re).call(this),n(this,$,ne).call(this,t)},M=new WeakSet,ae=async function(t){W(),n(this,p,R).call(this);try{await Se(t.id),z(),await this.showCards(this.params)}catch(a){console.log(a)}},k=new WeakSet,re=function(){document.body.setAttribute("lock","");let t=document.querySelector(".delete-modal-wrapper");if(t){t.classList.remove("is-hidden");return}t=Ye(),document.body.insertAdjacentHTML("afterbegin",t),N()==="en"&&De(X,"en")},p=new WeakSet,R=function(){n(this,q,ie).call(this),document.querySelector(".delete-modal-wrapper").classList.add("is-hidden"),document.body.removeAttribute("lock","")},$=new WeakSet,ne=function(t){l(this,c,n(this,p,R).bind(this,t)),l(this,u,n(this,M,ae).bind(this,t));const a=document.querySelector(".delete-modal__btn_disagree"),o=document.querySelector(".delete-modal__btn_agree");a.addEventListener("click",i(this,c)),o.addEventListener("click",i(this,u))},q=new WeakSet,ie=function(){const t=document.querySelector(".delete-modal__btn_disagree"),a=document.querySelector(".delete-modal__btn_agree");t.removeEventListener("click",i(this,c)),a.removeEventListener("click",i(this,u))},V=new WeakSet,Ne=function(t){t.classList.add("is-hidden"),n(this,P,oe).call(this)&&this.setDefaultElement()},P=new WeakSet,oe=function(){const t=this.listCardsEl.querySelectorAll(".profile-adverts__card"),a=this.listCardsEl.querySelectorAll(".profile-adverts__card.is-hidden");return t.length===a.length};function Re(s){const e=s.closest(".profile-adverts__card"),t=e.dataset.id;return{cardEl:e,id:t}}function Ye(){return`
    <div class="modal-wrapper delete-modal-wrapper">
      <div class="delete-modal modal">
        <h3 class="delete-modal__title" key="deleteModalTitle">Ви дійсно хочете видалити це оголошення?</h3>
        <div class="delete-modal__btns">
          <button class="delete-modal__btn delete-modal__btn_disagree" key="deleteModalFalse" type="button">Ні</button>
          <button class="delete-modal__btn delete-modal__btn_agree" key="deleteModalTrue" type="button">Так</button>
        </div>
      </div>
    </div>
  `}const Je=x.profileAdverts?new Ge(x.profileAdverts,we,ze):{};async function Ke(s){s||(s=await Ie(),s=s.user),Fe(s),Je.showMainCard()}async function Qe(){Oe.classList.add("is-hidden"),document.body.removeAttribute("lock",""),document.querySelector(".profile-adverts")&&await Ve()}async function Ve(){await Ke(),Be(X),x.profileWrapper.classList.remove("is-hidden")}var h,m,g,_,f,Y,A,le,T,de,y,J,D,ce,b,K,B,ue,I,he,O,me,S,Q,j,ge,F,_e,U,ve,H,pe,v,w;class Xe{constructor(e,t){r(this,f);r(this,A);r(this,T);r(this,y);r(this,D);r(this,b);r(this,B);r(this,I);r(this,O);r(this,S);r(this,j);r(this,F);r(this,U);r(this,H);r(this,v);r(this,h,void 0);r(this,m,void 0);r(this,g,void 0);r(this,_,void 0);this.chatEl=e.querySelector(".chat"),this.chatForm=e.querySelector(".chat-form"),this.chatText=e.querySelector(".enter-text"),this.chatPlusBtn=e.querySelector(".chat-plus-btn"),this.chatPlusList=e.querySelector(".chat-plus-list"),this.chatDeleteEl=e.querySelector(".chat-delete"),this.loader=e.querySelector(".chat-loader"),this.userAvatar=t,this.assistAvatar={"small-chat-avatar-45px":"./img/ai-assist/ai-assist-avatar/ai-assist_45.jpg","chat-avatar-75px":"./img/ai-assist/ai-assist-avatar/ai-assist_75.jpg"}}setCommunication(){this.setConversation(),this.chatPlusBtn.addEventListener("click",this.changeStatePlusPanel.bind(this)),this.chatDeleteEl.addEventListener("click",this.shawDeleteChatModal.bind(this)),n(this,f,Y).call(this)}async setConversation(){let e;try{e=await Ee()}catch{e=await xe()}const t=e.messages.map(a=>n(this,S,Q).call(this,a));this.chatEl.innerHTML=t.join("")}changeStatePlusPanel(){this.chatPlusList.classList.toggle("is-hidden")}shawDeleteChatModal(e){n(this,D,ce).call(this),n(this,B,ue).call(this,e)}async enterSetOneSession(e){e.key==="Enter"&&this.setOneSession()}async btnSetOneSession(e){e.preventDefault(),this.setOneSession()}async setOneSession(){const e=n(this,j,ge).call(this);e.trim()===""||e.trim()===n(this,v,w).call(this)||(n(this,A,le).call(this),n(this,F,_e).call(this),n(this,y,J).call(this,{role:"user",content:e}),await n(this,T,de).call(this,e),n(this,f,Y).call(this),this.chatText.textContent=n(this,v,w).call(this))}}h=new WeakMap,m=new WeakMap,g=new WeakMap,_=new WeakMap,f=new WeakSet,Y=function(){l(this,g,this.btnSetOneSession.bind(this)),l(this,_,this.enterSetOneSession.bind(this)),this.chatForm.addEventListener("submit",i(this,g)),document.addEventListener("keydown",i(this,_))},A=new WeakSet,le=function(){this.chatForm.removeEventListener("submit",i(this,g)),document.removeEventListener("keydown",i(this,_))},T=new WeakSet,de=async function(e){n(this,U,ve).call(this);const t=await Ce(e);n(this,y,J).call(this,t),n(this,H,pe).call(this)},y=new WeakSet,J=function(e){const t=n(this,S,Q).call(this,e);this.chatEl.insertAdjacentHTML("beforeend",t)},D=new WeakSet,ce=function(){document.body.setAttribute("lock","");let e=document.querySelector(".delete-modal-wrapper");if(e){e.classList.remove("is-hidden");return}e=et(),document.body.insertAdjacentHTML("afterbegin",e),N()==="en"&&translateAllPage(settings,"en")},b=new WeakSet,K=function(){n(this,I,he).call(this),document.querySelector(".delete-modal-wrapper").classList.add("is-hidden"),document.body.removeAttribute("lock","")},B=new WeakSet,ue=function(e){l(this,h,n(this,b,K).bind(this,e)),l(this,m,n(this,O,me).bind(this,e));const t=document.querySelector(".delete-modal__btn_disagree"),a=document.querySelector(".delete-modal__btn_agree");t.addEventListener("click",i(this,h)),a.addEventListener("click",i(this,m))},I=new WeakSet,he=function(){const e=document.querySelector(".delete-modal__btn_disagree"),t=document.querySelector(".delete-modal__btn_agree");e.removeEventListener("click",i(this,h)),t.removeEventListener("click",i(this,m))},O=new WeakSet,me=async function(){W(),n(this,b,K).call(this);try{await Le(),await this.setConversation(),this.changeStatePlusPanel(),z()}catch(e){console.log(e)}},S=new WeakSet,Q=function(e){const{role:t,content:a}=e,o=t==="user"?this.userAvatar:this.assistAvatar;return`
          <li class="ai-assist-chat__message ai-assist-chat__message_${t}">
            ${Ze(o)}
            <p class="ai-assist-chat__text">${a}</p>
          </li>`},j=new WeakSet,ge=function(){return new FormData(this.chatForm).get("message")},F=new WeakSet,_e=function(){this.chatForm.reset(),this.chatText.textContent=n(this,v,w).call(this)},U=new WeakSet,ve=function(){this.loader.classList.remove("is-hidden")},H=new WeakSet,pe=function(){this.loader.classList.add("is-hidden")},v=new WeakSet,w=function(){return N()=="ua"?"Написати...":"Write..."};function Ze(s){const e=s["small-chat-avatar-45px"],t=s["small-chat-avatar-45px"],a=s["chat-avatar-75px"];return`
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
        </picture>`}function et(){return`
  <div class="modal-wrapper delete-modal-wrapper">
  <div class="delete-modal modal">
    <h3 class="delete-modal__title" key="deleteModalTitle">Ви дійсно хочете очистити цей чат?</h3>
    <div class="delete-modal__btns">
      <button class="delete-modal__btn delete-modal__btn_disagree" key="deleteModalFalse" type="button">Ні</button>
      <button class="delete-modal__btn delete-modal__btn_agree" key="deleteModalTrue" type="button">Так</button>
    </div>
  </div>
</div>`}const tt={aiAssist:document.querySelector(".ai-assist"),panelEnter:document.querySelector(".ai-assist-panel__enter"),panelText:document.querySelector(".ai-assist-panel__text"),chat:document.querySelector(".ai-assist-chat")};function st(s){new Xe(tt.aiAssist,s.user.avatar).setCommunication()}async function at(s){s.preventDefault(),W();const e=Te(E.form);try{const t=await Me(e);ke(t.token),nt(t),await Qe()}catch(t){rt(t)}finally{z()}}function rt(s){var o,d;const e=(d=(o=s==null?void 0:s.response)==null?void 0:o.data)==null?void 0:d.message,a=$e(e,{property:"singinError",settings:ee});E.errorText.textContent=a}function nt(s){document.querySelector(".ai-assist")&&st(s)}function ht(){E.modalEl.classList.remove("is-hidden"),document.body.setAttribute("lock",""),E.modalEl.addEventListener("submit",at)}export{ht as a,X as b,ee as c,Ie as i,Je as p,x as r,Ke as s};
