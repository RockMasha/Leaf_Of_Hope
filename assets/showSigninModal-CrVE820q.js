var me=Object.defineProperty;var F=s=>{throw TypeError(s)};var ge=(s,e,t)=>e in s?me(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var j=(s,e,t)=>ge(s,typeof e!="symbol"?e+"":e,t),C=(s,e,t)=>e.has(s)||F("Cannot "+t);var l=(s,e,t)=>(C(s,e,"read from private field"),t?t.call(s):e.get(s)),c=(s,e,t)=>e.has(s)?F("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(s):e.set(s,t),d=(s,e,t,a)=>(C(s,e,"write to private field"),a?a.call(s,t):e.set(s,t),t),n=(s,e,t)=>(C(s,e,"access private method"),t);import{s as v,r as _,c as ve,g as _e}from"./getErrorText-KKpxrYSP.js";import{b as pe,e as fe,l as be,f as ye,h as G,i as Se,j as we,k as Ee,s as Le,m as ke,n as R,o as xe}from"./api-C4gWJdAs.js";import{c as U}from"./chanhePage-Be1AtWlB.js";import{g as Me,d as Ce,C as $e,c as H}from"./createFormObj-6PmyLcFJ.js";import{t as qe,s as Ae}from"./setSwitchLanguage-C96-qGVS.js";import{c as Pe}from"./changeSettingsValue-79FUIYGn.js";import{g as B}from"./getCurrentLanguage-BQe-LnNi.js";import{c as $}from"./createToken-b3AR4iBx.js";async function Te(){const s=pe();if(!s)return!1;try{return await fe(s)}catch{return!1}}const m={mainEl:document.querySelector("main"),modalEl:document.querySelector(".modal-wrapper"),form:document.querySelector(".signin-modal-form"),googleBtn:document.querySelector(".signin-modal-goggle "),errorText:document.querySelector(".signin-modal__error")};function De(){localStorage.removeItem("token")}async function z(s){s.target.removeEventListener("click",z),v();try{await be(),De(),U("index.html")}catch(e){console.log(e)}finally{_()}}const q={userInfo:document.querySelector("#user-info-js"),userCards:document.querySelector("#user-cards-js"),profileAdverts:document.querySelector(".profile-adverts"),advertsTitle:document.querySelector(".profile-adverts__title"),activeInput:document.querySelector(".profile-adverts-state__input")};function Ie(s){q.userInfo.innerHTML=Oe(s),Be()}function Oe(s){const{avatar:e,username:t,adress:a,phone:r,email:u,role:L}=s;return`
    <div class="user-info__thumb">
      ${Fe(e)}
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
    </div>`}function Be(){document.querySelector(".user-info__logout").addEventListener("click",z)}function Fe(s){const e=s["small-250px"];s["medium-300px"];const t=s["big-400px"],a=e?"big-photo":"";return`
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
    </picture>`}const je=s=>{const e=s._id,{active:t}=s;return`
          <li class="profile-adverts__card" ${t} data-id="${e}">
            ${Me(s)}
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
        `},W={singinModalTitle:{ua:"Вхід",en:"Exit"},singinModalEmail:{ua:"Пошта",en:"Email"},singinModalPassword:{ua:"Пароль",en:"Password"},singinModalSubmit:{ua:"Увійти",en:"Sign in"},singinModalLink:{ua:"Зареєструватись",en:"Register"},singinModalEmailPlaceholder:{placeholder:!0,ua:"Введіть ваш емейл",en:"Enter your email"},singinModalPasswordPlaceholder:{placeholder:!0,ua:"Введіть пароль",en:"Enter your password"},singinModalGoogleText:{ua:"Продовжити з Google",en:"Continue with Google"},singinModalOrText:{ua:"або",en:"or"},singinError:{ua:"",en:""}},M={logoutText:{ua:"Вийти",en:"Go out"},advertsTitle:{ua:"Мої оголошення:",en:"My adverts:"},deleteModalTitle:{ua:"Ви дійсно хочете видалити це оголошення?",en:"Are you sure you want to delete this advert?"},deleteModalFalse:{ua:"Ні",en:"No"},deleteModalTrue:{ua:"Так",en:"Yes"},advertsStateActiveState:{ua:"Активні",en:"Active"},advertsStateInactiveState:{ua:"Неактивні",en:"Inactive"}};Object.assign(M,W,Ce);var h,f,g,b,x,o,Y,A,N,V,J,K,p,Q,X,Z,ee,k,te;class Ge extends $e{constructor(t,a,r){super(t,a,r);c(this,o);c(this,h);c(this,f);c(this,g);c(this,b);c(this,x);j(this,"showCards",async()=>{const t={active:n(this,o,k).call(this)};await super.showCards(t)});this.activeInputEl=this.fatherElement.querySelector(".profile-adverts-state__input")}async showMainCard(t){n(this,o,Y).call(this),await this.showCards(t)}changeCards(t){const a=t.target,r=a.closest(".delete-btn"),u=a.closest(".active-btn"),L=Re(a);r?n(this,o,A).call(this,L):u&&n(this,o,A).call(this,L,"active")}}h=new WeakMap,f=new WeakMap,g=new WeakMap,b=new WeakMap,x=new WeakMap,o=new WeakSet,Y=function(){this.changeCards=this.changeCards.bind(this),this.listCardsEl.addEventListener("click",this.changeCards),this.activeInputEl.addEventListener("change",this.showCards)},A=function(t,a){n(this,o,K).call(this,a),a==="active"?n(this,o,Z).call(this,t):n(this,o,X).call(this,t)},N=async function(t){v(),n(this,o,p).call(this);try{await ye(t.id),_(),await this.showCards(this.params)}catch(a){console.log(a)}},V=async function(t){v(),n(this,o,p).call(this);try{const a=n(this,o,te).call(this);await G(t.id,a),_(),await this.showCards(this.params)}catch(a){console.log(a)}},J=async function(t){v(),n(this,o,p).call(this);try{await G(t.id,{active:"true"}),_(),await this.showCards(this.params)}catch(a){console.log(a)}},K=function(t){document.body.setAttribute("lock","");const a=document.querySelector(".delete-modal-wrapper"),r=n(this,o,k).call(this),u=Ue(r,t);a.innerHTML=u,B()==="en"&&qe(M,"en"),a.classList.remove("is-hidden")},p=function(){n(this,o,ee).call(this),document.querySelector(".delete-modal-wrapper").classList.add("is-hidden"),document.body.removeAttribute("lock","")},Q=function(t){const a=document.querySelector(".delete-modal-wrapper");a.innerHTML=He();const r=document.querySelector(".reason");d(this,b,u=>{u.preventDefault(),n(this,o,V).call(this,t)}),r.addEventListener("submit",l(this,b))},X=function(t){d(this,h,n(this,o,p).bind(this,t)),d(this,f,n(this,o,N).bind(this,t)),d(this,g,n(this,o,Q).bind(this,t));const a=document.querySelector(".delete-modal__btn_disagree"),r=document.querySelector(".delete-modal__btn_agree");if(a.addEventListener("click",l(this,h)),n(this,o,k).call(this)){r.addEventListener("click",l(this,g));return}r.addEventListener("click",l(this,f))},Z=function(t){d(this,h,n(this,o,p).bind(this,t)),d(this,x,n(this,o,J).bind(this,t));const a=document.querySelector(".delete-modal__btn_disagree"),r=document.querySelector(".delete-modal__btn_agree");a.addEventListener("click",l(this,h)),r.addEventListener("click",l(this,x))},ee=function(){const t=document.querySelector(".delete-modal__btn_disagree"),a=document.querySelector(".delete-modal__btn_agree"),r=document.querySelector(".reason");t==null||t.removeEventListener("click",l(this,h)),a==null||a.removeEventListener("click",l(this,f)),a==null||a.removeEventListener("click",l(this,g)),r==null||r.removeEventListener("click",l(this,g)),r==null||r.removeEventListener("submit",l(this,b))},k=function(){return!this.activeInputEl.checked},te=function(){const t=document.querySelector(".reason"),a=ve(t);return a.append("active",!n(this,o,k).call(this)),H(a)};function Re(s){var a;const e=s.closest(".profile-adverts__card"),t=(a=e==null?void 0:e.dataset)==null?void 0:a.id;return{cardEl:e,id:t}}function Ue(s,e){const t=s?"деактивувати":e==="active"?"активувати":"видалити",a=s?"deactivate":e==="active"?"activate":"delete",r={property:"deleteModalTitle",ua:`Ви дійсно хочете ${t} це оголошення?`,en:`Are you sure you want to ${a} this advert?`};return Pe(M,r),`
      <div class="delete-modal modal">
        <h3 class="delete-modal__title" key="deleteModalTitle">Ви дійсно хочете ${t} це оголошення?</h3>
        <div class="delete-modal__btns">
          <button class="delete-modal__btn delete-modal__btn_disagree" key="deleteModalFalse" type="button">Ні</button>
          <button class="delete-modal__btn delete-modal__btn_agree" key="deleteModalTrue" type="button">Так</button>
        </div>
      </div>
  `}function He(){const{title:s,foundOnSite:e,foundOnAnotherResurses:t,notFound:a,submit:r}=ze();return`
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
  `}function ze(){return B()==="ua"?{title:"Чи змогли ви передати/обміняти рослину?",foundOnSite:"Так, на цьому сайті",foundOnAnotherResurses:"Так, в іншому місці",notFound:"Ні",submit:"Підвердити"}:{title:"Were you able to transfer/exchange the plant?",foundOnSite:"Yes, on this site",foundOnAnotherResurses:"Yes, in another place",notFound:"No",submit:"Confirm"}}const We=q.profileAdverts?new Ge(q.profileAdverts,Se,je):{};async function Ye(s){s||(s=await Te(),s=s.user),Ie(s),We.showMainCard()}async function P(){m.modalEl.classList.add("is-hidden"),m.mainEl.classList.remove("is-hidden"),document.body.removeAttribute("lock",""),document.querySelector(".profile-adverts")&&await Ne()}async function Ne(){await Ye(),Ae(M),document.querySelector(".profile-adverts").classList.remove("is-hidden")}var y,S,w,E,i,T,se,ae,D,ne,I,oe,ie,re,O,le,ce,de,ue;class Ve{constructor(e,t){c(this,i);c(this,y);c(this,S);c(this,w);c(this,E);this.chatEl=e.querySelector(".chat"),this.chatForm=e.querySelector(".chat-form"),this.chatPlusBtn=e.querySelector(".chat-plus-btn"),this.chatPlusList=e.querySelector(".chat-plus-list"),this.chatDeleteEl=e.querySelector(".chat-delete"),this.loader=e.querySelector(".chat-loader"),this.userAvatar=t,this.assistAvatar={"small-chat-avatar-45px":"https://res.cloudinary.com/dk3syrsg5/image/upload/v1733484557/ai-assist_45_v4r2wi.jpg","chat-avatar-75px":"https://res.cloudinary.com/dk3syrsg5/image/upload/v1733484555/ai-assist_75_cejgdp.jpg"}}setCommunication(){this.setConversation(),this.chatPlusBtn.addEventListener("click",this.changeStatePlusPanel.bind(this)),this.chatDeleteEl.addEventListener("click",this.shawDeleteChatModal.bind(this)),n(this,i,T).call(this)}async setConversation(){let e;try{e=await we()}catch{e=await Ee()}const t=e.messages.map(a=>n(this,i,O).call(this,a));this.chatEl.innerHTML=t.join("")}changeStatePlusPanel(){this.chatPlusList.classList.toggle("is-hidden")}shawDeleteChatModal(e){n(this,i,ne).call(this),n(this,i,oe).call(this,e)}async enterSetOneSession(e){e.key==="Enter"&&this.setOneSession()}async btnSetOneSession(e){e.preventDefault(),this.setOneSession()}async setOneSession(){const e=n(this,i,le).call(this);e.trim()!==""&&(n(this,i,se).call(this),n(this,i,ce).call(this),n(this,i,D).call(this,{role:"user",content:e}),await n(this,i,ae).call(this,e),n(this,i,T).call(this))}}y=new WeakMap,S=new WeakMap,w=new WeakMap,E=new WeakMap,i=new WeakSet,T=function(){d(this,w,this.btnSetOneSession.bind(this)),d(this,E,this.enterSetOneSession.bind(this)),this.chatForm.addEventListener("submit",l(this,w)),document.addEventListener("keydown",l(this,E))},se=function(){this.chatForm.removeEventListener("submit",l(this,w)),document.removeEventListener("keydown",l(this,E))},ae=async function(e){n(this,i,de).call(this);let t;try{t=await Le(e),n(this,i,D).call(this,t)}catch{this.chatEl.innerHTML=`
        <div class="ai-assist__error-wrapper">
          <img
            class="authentication__img"
            src="https://res.cloudinary.com/dk3syrsg5/image/upload/v1737148271/error-occurred_eo4gcm.svg"
            alt="an error occurred"
          />
          <p class="authentication__message" key="messageErrorText">Сталася помилка</p>
        </div>
  `,setTimeout(()=>{U("ai-assist.html")},1500)}n(this,i,ue).call(this)},D=function(e){const t=n(this,i,O).call(this,e);this.chatEl.insertAdjacentHTML("beforeend",t)},ne=function(){document.body.setAttribute("lock","");let e=document.querySelector(".delete-modal-wrapper");if(e){e.classList.remove("is-hidden");return}e=Ke(),document.body.insertAdjacentHTML("afterbegin",e),B()==="en"&&translateAllPage(settings,"en")},I=function(){n(this,i,ie).call(this),document.querySelector(".delete-modal-wrapper").classList.add("is-hidden"),document.body.removeAttribute("lock","")},oe=function(e){d(this,y,n(this,i,I).bind(this,e)),d(this,S,n(this,i,re).bind(this,e));const t=document.querySelector(".delete-modal__btn_disagree"),a=document.querySelector(".delete-modal__btn_agree");t.addEventListener("click",l(this,y)),a.addEventListener("click",l(this,S))},ie=function(){const e=document.querySelector(".delete-modal__btn_disagree"),t=document.querySelector(".delete-modal__btn_agree");e.removeEventListener("click",l(this,y)),t.removeEventListener("click",l(this,S))},re=async function(){v(),n(this,i,I).call(this);try{await ke(),await this.setConversation(),this.changeStatePlusPanel(),_()}catch(e){console.log(e)}},O=function(e){const{role:t,content:a}=e,r=t==="user"?this.userAvatar:this.assistAvatar;return`
          <li class="ai-assist-chat__message ai-assist-chat__message_${t}">
            ${Je(r)}
            <p class="ai-assist-chat__text">${a}</p>
          </li>`},le=function(){return new FormData(this.chatForm).get("message")},ce=function(){this.chatForm.reset()},de=function(){this.loader.classList.remove("is-hidden")},ue=function(){this.loader.classList.add("is-hidden")};function Je(s){const e=s["small-chat-avatar-45px"],t=s["small-chat-avatar-45px"],a=s["chat-avatar-75px"];return`
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
        </picture>`}function Ke(){return`
  <div class="modal-wrapper delete-modal-wrapper">
  <div class="delete-modal modal">
    <h3 class="delete-modal__title" key="deleteModalTitle">Ви дійсно хочете очистити цей чат?</h3>
    <div class="delete-modal__btns">
      <button class="delete-modal__btn delete-modal__btn_disagree" key="deleteModalFalse" type="button">Ні</button>
      <button class="delete-modal__btn delete-modal__btn_agree" key="deleteModalTrue" type="button">Так</button>
    </div>
  </div>
</div>`}const Qe={aiAssist:document.querySelector(".ai-assist"),panelEnter:document.querySelector(".ai-assist-panel__enter"),panelText:document.querySelector(".ai-assist-panel__text"),chat:document.querySelector(".ai-assist-chat")};function Xe(s){new Ve(Qe.aiAssist,s.user.avatar).setCommunication()}function he(s){document.querySelector(".ai-assist")&&Xe(s)}const Ze=void 0;function et(s){const e=document.createElement("script");e.src="https://accounts.google.com/gsi/client",e.async=!0,e.defer=!0,e.onload=s,document.head.appendChild(e)}function tt(){et(()=>{google.accounts.id.initialize({client_id:Ze,callback:st})})}async function st(s){v();const{credential:e}=s;try{const t=await R({token_id:e}),{token:a}=t;$(a),he(t),await P()}catch{try{const a=await xe(e),{token:r}=a;$(r),await P()}catch{}}finally{_()}}async function at(s){s.preventDefault();const e=H(m.form);await nt(e)}async function nt(s){v();try{const e=await R(s);$(e.token),he(e),await P()}catch(e){return console.log(e),ot(e),!1}finally{_()}}function ot(s){var r,u;const e=(u=(r=s==null?void 0:s.response)==null?void 0:r.data)==null?void 0:u.message,a=_e(e,{property:"singinError",settings:W});m.errorText.textContent=a}function vt(){m.mainEl.classList.add("is-hidden"),m.modalEl.classList.remove("is-hidden"),document.body.setAttribute("lock",""),m.modalEl.addEventListener("submit",at),tt(),m.googleBtn.addEventListener("click",()=>{google.accounts.id.prompt()})}export{vt as a,M as b,W as c,Xe as d,Te as i,We as p,Ye as s};
