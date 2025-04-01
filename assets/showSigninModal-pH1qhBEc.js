var ue=Object.defineProperty;var F=s=>{throw TypeError(s)};var he=(s,e,t)=>e in s?ue(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var j=(s,e,t)=>he(s,typeof e!="symbol"?e+"":e,t),C=(s,e,t)=>e.has(s)||F("Cannot "+t);var l=(s,e,t)=>(C(s,e,"read from private field"),t?t.call(s):e.get(s)),c=(s,e,t)=>e.has(s)?F("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(s):e.set(s,t),d=(s,e,t,a)=>(C(s,e,"write to private field"),a?a.call(s,t):e.set(s,t),t),n=(s,e,t)=>(C(s,e,"access private method"),t);import{s as v,r as _,c as me,g as ge}from"./getErrorText-D8OfuOI9.js";import{b as ve,e as _e,l as pe,f as fe,h as G,i as be,s as R,j as ye,k as Se,m as we,n as Ee,o as Le}from"./api-SozDJa9j.js";import{g as ke,d as xe,C as Me,c as U}from"./createFormObj-DZDZoiX2.js";import{t as Ce,s as $e}from"./setSwitchLanguage-DduxoyRt.js";import{c as qe}from"./changeSettingsValue-79FUIYGn.js";import{g as B}from"./getCurrentLanguage-CvhLhaQe.js";import{c as $}from"./createToken-CaGeSNMn.js";async function Ae(){const s=ve();if(!s)return!1;try{return await _e(s)}catch{return!1}}const m={mainEl:document.querySelector("main"),modalEl:document.querySelector(".modal-wrapper"),form:document.querySelector(".signin-modal-form"),googleBtn:document.querySelector(".signin-modal-goggle "),errorText:document.querySelector(".signin-modal__error")};function Pe(){localStorage.removeItem("token")}async function H(s){s.target.removeEventListener("click",H),v();try{await pe(),Pe(),window.location.href="index.html"}catch(e){console.log(e)}finally{_()}}const q={userInfo:document.querySelector("#user-info-js"),userCards:document.querySelector("#user-cards-js"),profileAdverts:document.querySelector(".profile-adverts"),advertsTitle:document.querySelector(".profile-adverts__title"),activeInput:document.querySelector(".profile-adverts-state__input")};function Te(s){q.userInfo.innerHTML=De(s),Ie()}function De(s){const{avatar:e,username:t,adress:a,phone:r,email:u,role:L}=s;return`
    <div class="user-info__thumb">
      ${Oe(e)}
      </div> 
      <div class="user-info__text-block">
        <div class="user-info__user">
          <div>
            <h2 class="user-info__title">${t}</h2>
            <p class="user-info__text">${a||"adress hidden"}</p>
            <p class="user-info__text bold">${r||"phone hidden"}</p>
            <p class="user-info__text bold">${u}</p>
          </div>
          <div class="user-info__btn-box">
            <button class="user-info__btn user-info__logout" key="logoutText">Вийти</button>
            ${L==="admin"?'<a class="user-info__btn user-info__metabase-link" href="metabase.html"> Metabase </a>':""}
            
          </div>
        </div>
        <a class="user-info__redact-link" href="formProfile.html?redact=true">
          <img
            class="user-info__redact-img"
            src="https://res.cloudinary.com/dk3syrsg5/image/upload/v1733484552/redactProfile_vyxmap.svg"
            alt="redact img"
          />
        </a>
      </div>
    </div>`}function Ie(){document.querySelector(".user-info__logout").addEventListener("click",H)}function Oe(s){const e=s["small-250px"];s["medium-300px"];const t=s["big-400px"],a=e?"big-photo":"";return`
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
    </picture>`}const Be=s=>{const e=s._id,{active:t}=s;return`
          <li class="profile-adverts__card" ${t} data-id="${e}">
            ${ke(s)}
            <ul class="profile-adverts__btn-list">
              <li>
                <a href="formAdvert.html?id=${e}" class="profile-adverts__btn edit-btn" 
                aria-label="redact advert ${s.name}">
                </a>
              </li>
               ${t?"":`<li>
                      <button type="button" class="profile-adverts__btn active-btn" aria-label="active advert ${s.name}"></button>
                    </li>`}
              <li>
                <button type="button" class="profile-adverts__btn delete-btn" aria-label="${t?"inactive":"delete"}  advert ${s.name}"></button>
              </li>           
            </ul>
          </li>
        `},z={singinModalTitle:{ua:"Вхід",en:"Exit"},singinModalEmail:{ua:"Пошта",en:"Email"},singinModalPassword:{ua:"Пароль",en:"Password"},singinModalSubmit:{ua:"Увійти",en:"Sign in"},singinModalLink:{ua:"Зареєструватись",en:"Register"},singinModalEmailPlaceholder:{placeholder:!0,ua:"Введіть ваш емейл",en:"Enter your email"},singinModalPasswordPlaceholder:{placeholder:!0,ua:"Введіть пароль",en:"Enter your password"},singinModalGoogleText:{ua:"Продовжити з Google",en:"Continue with Google"},singinModalOrText:{ua:"або",en:"or"},singinError:{ua:"",en:""}},M={logoutText:{ua:"Вийти",en:"Go out"},advertsTitle:{ua:"Мої оголошення:",en:"My adverts:"},deleteModalTitle:{ua:"Ви дійсно хочете видалити це оголошення?",en:"Are you sure you want to delete this advert?"},deleteModalFalse:{ua:"Ні",en:"No"},deleteModalTrue:{ua:"Так",en:"Yes"},advertsStateActiveState:{ua:"Активні",en:"Active"},advertsStateInactiveState:{ua:"Неактивні",en:"Inactive"}};Object.assign(M,z,xe);var h,f,g,b,x,o,W,A,Y,N,V,J,p,K,Q,X,Z,k,ee;class Fe extends Me{constructor(t,a,r){super(t,a,r);c(this,o);c(this,h);c(this,f);c(this,g);c(this,b);c(this,x);j(this,"showCards",async()=>{const t={active:n(this,o,k).call(this)};await super.showCards(t)});this.activeInputEl=this.fatherElement.querySelector(".profile-adverts-state__input")}async showMainCard(t){n(this,o,W).call(this),await this.showCards(t)}changeCards(t){const a=t.target,r=a.closest(".delete-btn"),u=a.closest(".active-btn"),L=je(a);r?n(this,o,A).call(this,L):u&&n(this,o,A).call(this,L,"active")}}h=new WeakMap,f=new WeakMap,g=new WeakMap,b=new WeakMap,x=new WeakMap,o=new WeakSet,W=function(){this.changeCards=this.changeCards.bind(this),this.listCardsEl.addEventListener("click",this.changeCards),this.activeInputEl.addEventListener("change",this.showCards)},A=function(t,a){n(this,o,J).call(this,a),a==="active"?n(this,o,X).call(this,t):n(this,o,Q).call(this,t)},Y=async function(t){v(),n(this,o,p).call(this);try{await fe(t.id),_(),await this.showCards(this.params)}catch(a){console.log(a)}},N=async function(t){v(),n(this,o,p).call(this);try{const a=n(this,o,ee).call(this);await G(t.id,a),_(),await this.showCards(this.params)}catch(a){console.log(a)}},V=async function(t){v(),n(this,o,p).call(this);try{await G(t.id,{active:"true"}),_(),await this.showCards(this.params)}catch(a){console.log(a)}},J=function(t){document.body.setAttribute("lock","");const a=document.querySelector(".delete-modal-wrapper"),r=n(this,o,k).call(this),u=Ge(r,t);a.innerHTML=u,B()==="en"&&Ce(M,"en"),a.classList.remove("is-hidden")},p=function(){n(this,o,Z).call(this),document.querySelector(".delete-modal-wrapper").classList.add("is-hidden"),document.body.removeAttribute("lock","")},K=function(t){const a=document.querySelector(".delete-modal-wrapper");a.innerHTML=Re();const r=document.querySelector(".reason");d(this,b,u=>{u.preventDefault(),n(this,o,N).call(this,t)}),r.addEventListener("submit",l(this,b))},Q=function(t){d(this,h,n(this,o,p).bind(this,t)),d(this,f,n(this,o,Y).bind(this,t)),d(this,g,n(this,o,K).bind(this,t));const a=document.querySelector(".delete-modal__btn_disagree"),r=document.querySelector(".delete-modal__btn_agree");if(a.addEventListener("click",l(this,h)),n(this,o,k).call(this)){r.addEventListener("click",l(this,g));return}r.addEventListener("click",l(this,f))},X=function(t){d(this,h,n(this,o,p).bind(this,t)),d(this,x,n(this,o,V).bind(this,t));const a=document.querySelector(".delete-modal__btn_disagree"),r=document.querySelector(".delete-modal__btn_agree");a.addEventListener("click",l(this,h)),r.addEventListener("click",l(this,x))},Z=function(){const t=document.querySelector(".delete-modal__btn_disagree"),a=document.querySelector(".delete-modal__btn_agree"),r=document.querySelector(".reason");t==null||t.removeEventListener("click",l(this,h)),a==null||a.removeEventListener("click",l(this,f)),a==null||a.removeEventListener("click",l(this,g)),r==null||r.removeEventListener("click",l(this,g)),r==null||r.removeEventListener("submit",l(this,b))},k=function(){return!this.activeInputEl.checked},ee=function(){const t=document.querySelector(".reason"),a=me(t);return a.append("active",!n(this,o,k).call(this)),U(a)};function je(s){var a;const e=s.closest(".profile-adverts__card"),t=(a=e==null?void 0:e.dataset)==null?void 0:a.id;return{cardEl:e,id:t}}function Ge(s,e){const t=s?"деактивувати":e==="active"?"активувати":"видалити",a=s?"deactivate":e==="active"?"activate":"delete",r={property:"deleteModalTitle",ua:`Ви дійсно хочете ${t} це оголошення?`,en:`Are you sure you want to ${a} this advert?`};return qe(M,r),`
      <div class="delete-modal modal">
        <h3 class="delete-modal__title" key="deleteModalTitle">Ви дійсно хочете ${t} це оголошення?</h3>
        <div class="delete-modal__btns">
          <button class="delete-modal__btn delete-modal__btn_disagree" key="deleteModalFalse" type="button">Ні</button>
          <button class="delete-modal__btn delete-modal__btn_agree" key="deleteModalTrue" type="button">Так</button>
        </div>
      </div>
  `}function Re(){const{title:s,foundOnSite:e,foundOnAnotherResurses:t,notFound:a,submit:r}=Ue();return`
      <div class="delete-modal modal">
        <form class="reason">
          <h2 class="reason__title">${s} </h2>
          <ul class="reason__list">
            <li class="reason__item">
              <label class="reason__label">
                <input
                  class="reason__input"
                  type="radio"
                  name="reason"
                  value="foundOnSite"
                  checked
                />
                ${e}
              </label>
            </li>
            <li class="reason__item">
              <label class="reason__label">
                <input
                  class="reason__input"
                  type="radio"
                  name="reason"
                  value="foundOnAnotherResurses"
                />
                ${t}
              </label>
            </li>
            <li class="reason__item">
              <label class="reason__label">
                <input
                  class="reason__input"
                  type="radio"
                  name="reason"
                  value="notFound"
                />
                ${a}
              </label>
            </li>
          </ul>
          <button class="reason__btn-submit" type="submit">${r}</button>
        </form>
      </div>
  `}function Ue(){return B()==="ua"?{title:"Чи змогли ви передати/обміняти рослину?",foundOnSite:"Так, на цьому сайті",foundOnAnotherResurses:"Так, в іншому місці",notFound:"Ні",submit:"Підвердити"}:{title:"Were you able to transfer/exchange the plant?",foundOnSite:"Yes, on this site",foundOnAnotherResurses:"Yes, in another place",notFound:"No",submit:"Confirm"}}const He=q.profileAdverts?new Fe(q.profileAdverts,be,Be):{};async function ze(s){s||(s=await Ae(),s=s.user),Te(s),He.showMainCard()}async function P(){m.modalEl.classList.add("is-hidden"),m.mainEl.classList.remove("is-hidden"),document.body.removeAttribute("lock",""),document.querySelector(".profile-adverts")&&await We()}async function We(){await ze(),$e(M),document.querySelector(".profile-adverts").classList.remove("is-hidden")}const Ye=void 0;function Ne(s){const e=document.createElement("script");e.src="https://accounts.google.com/gsi/client",e.async=!0,e.defer=!0,e.onload=s,document.head.appendChild(e)}function Ve(){Ne(()=>{google.accounts.id.initialize({client_id:Ye,callback:Je})})}async function Je(s){v();const{credential:e}=s;try{const t=await R({token_id:e}),{token:a}=t;$(a),await P()}catch{try{const a=await ye(e),{token:r}=a;$(r),await P()}catch{}}finally{_()}}var y,S,w,E,i,T,te,se,D,ae,I,ne,oe,ie,O,re,le,ce,de;class Ke{constructor(e,t){c(this,i);c(this,y);c(this,S);c(this,w);c(this,E);this.chatEl=e.querySelector(".chat"),this.chatForm=e.querySelector(".chat-form"),this.chatPlusBtn=e.querySelector(".chat-plus-btn"),this.chatPlusList=e.querySelector(".chat-plus-list"),this.chatDeleteEl=e.querySelector(".chat-delete"),this.loader=e.querySelector(".chat-loader"),this.userAvatar=t,this.assistAvatar={"small-chat-avatar-45px":"https://res.cloudinary.com/dk3syrsg5/image/upload/v1733484557/ai-assist_45_v4r2wi.jpg","chat-avatar-75px":"https://res.cloudinary.com/dk3syrsg5/image/upload/v1733484555/ai-assist_75_cejgdp.jpg"}}setCommunication(){this.setConversation(),this.chatPlusBtn.addEventListener("click",this.changeStatePlusPanel.bind(this)),this.chatDeleteEl.addEventListener("click",this.shawDeleteChatModal.bind(this)),n(this,i,T).call(this)}async setConversation(){let e;try{e=await Se()}catch{e=await we()}const t=e.messages.map(a=>n(this,i,O).call(this,a));this.chatEl.innerHTML=t.join("")}changeStatePlusPanel(){this.chatPlusList.classList.toggle("is-hidden")}shawDeleteChatModal(e){n(this,i,ae).call(this),n(this,i,ne).call(this,e)}async enterSetOneSession(e){e.key==="Enter"&&this.setOneSession()}async btnSetOneSession(e){e.preventDefault(),this.setOneSession()}async setOneSession(){const e=n(this,i,re).call(this);e.trim()!==""&&(n(this,i,te).call(this),n(this,i,le).call(this),n(this,i,D).call(this,{role:"user",content:e}),await n(this,i,se).call(this,e),n(this,i,T).call(this))}}y=new WeakMap,S=new WeakMap,w=new WeakMap,E=new WeakMap,i=new WeakSet,T=function(){d(this,w,this.btnSetOneSession.bind(this)),d(this,E,this.enterSetOneSession.bind(this)),this.chatForm.addEventListener("submit",l(this,w)),document.addEventListener("keydown",l(this,E))},te=function(){this.chatForm.removeEventListener("submit",l(this,w)),document.removeEventListener("keydown",l(this,E))},se=async function(e){n(this,i,ce).call(this);const t=await Ee(e);n(this,i,D).call(this,t),n(this,i,de).call(this)},D=function(e){const t=n(this,i,O).call(this,e);this.chatEl.insertAdjacentHTML("beforeend",t)},ae=function(){document.body.setAttribute("lock","");let e=document.querySelector(".delete-modal-wrapper");if(e){e.classList.remove("is-hidden");return}e=Xe(),document.body.insertAdjacentHTML("afterbegin",e),B()==="en"&&translateAllPage(settings,"en")},I=function(){n(this,i,oe).call(this),document.querySelector(".delete-modal-wrapper").classList.add("is-hidden"),document.body.removeAttribute("lock","")},ne=function(e){d(this,y,n(this,i,I).bind(this,e)),d(this,S,n(this,i,ie).bind(this,e));const t=document.querySelector(".delete-modal__btn_disagree"),a=document.querySelector(".delete-modal__btn_agree");t.addEventListener("click",l(this,y)),a.addEventListener("click",l(this,S))},oe=function(){const e=document.querySelector(".delete-modal__btn_disagree"),t=document.querySelector(".delete-modal__btn_agree");e.removeEventListener("click",l(this,y)),t.removeEventListener("click",l(this,S))},ie=async function(){v(),n(this,i,I).call(this);try{await Le(),await this.setConversation(),this.changeStatePlusPanel(),_()}catch(e){console.log(e)}},O=function(e){const{role:t,content:a}=e,r=t==="user"?this.userAvatar:this.assistAvatar;return`
          <li class="ai-assist-chat__message ai-assist-chat__message_${t}">
            ${Qe(r)}
            <p class="ai-assist-chat__text">${a}</p>
          </li>`},re=function(){return new FormData(this.chatForm).get("message")},le=function(){this.chatForm.reset()},ce=function(){this.loader.classList.remove("is-hidden")},de=function(){this.loader.classList.add("is-hidden")};function Qe(s){const e=s["small-chat-avatar-45px"],t=s["small-chat-avatar-45px"],a=s["chat-avatar-75px"];return`
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
        </picture>`}function Xe(){return`
  <div class="modal-wrapper delete-modal-wrapper">
  <div class="delete-modal modal">
    <h3 class="delete-modal__title" key="deleteModalTitle">Ви дійсно хочете очистити цей чат?</h3>
    <div class="delete-modal__btns">
      <button class="delete-modal__btn delete-modal__btn_disagree" key="deleteModalFalse" type="button">Ні</button>
      <button class="delete-modal__btn delete-modal__btn_agree" key="deleteModalTrue" type="button">Так</button>
    </div>
  </div>
</div>`}const Ze={aiAssist:document.querySelector(".ai-assist"),panelEnter:document.querySelector(".ai-assist-panel__enter"),panelText:document.querySelector(".ai-assist-panel__text"),chat:document.querySelector(".ai-assist-chat")};function et(s){new Ke(Ze.aiAssist,s.user.avatar).setCommunication()}async function tt(s){s.preventDefault();const e=U(m.form);await st(e)}async function st(s){v();try{const e=await R(s);$(e.token),nt(e),await P()}catch(e){return at(e),!1}finally{_()}}function at(s){var r,u;const e=(u=(r=s==null?void 0:s.response)==null?void 0:r.data)==null?void 0:u.message,a=ge(e,{property:"singinError",settings:z});m.errorText.textContent=a}function nt(s){document.querySelector(".ai-assist")&&et(s)}function mt(){m.mainEl.classList.add("is-hidden"),m.modalEl.classList.remove("is-hidden"),document.body.setAttribute("lock",""),m.modalEl.addEventListener("submit",tt),Ve(),m.googleBtn.addEventListener("click",()=>{google.accounts.id.prompt()})}export{mt as a,M as b,z as c,et as d,Ae as i,He as p,ze as s};
