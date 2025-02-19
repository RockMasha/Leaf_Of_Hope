var he=Object.defineProperty;var j=s=>{throw TypeError(s)};var me=(s,e,t)=>e in s?he(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var G=(s,e,t)=>me(s,typeof e!="symbol"?e+"":e,t),q=(s,e,t)=>e.has(s)||j("Cannot "+t);var l=(s,e,t)=>(q(s,e,"read from private field"),t?t.call(s):e.get(s)),c=(s,e,t)=>e.has(s)?j("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(s):e.set(s,t),d=(s,e,t,a)=>(q(s,e,"write to private field"),a?a.call(s,t):e.set(s,t),t),n=(s,e,t)=>(q(s,e,"access private method"),t);import{s as v,r as _,c as ge,g as ve}from"./getErrorText-CpP2Emzn.js";import{b as _e,e as pe,l as fe,f as be,h as R,i as ye,s as U,j as Se,k as we,m as Ee,n as xe,o as Le}from"./api-60J6nx4w.js";import{g as ke,d as Ce,C as Me,c as H}from"./createFormObj-Y_BTMlHk.js";import{t as $e,s as qe}from"./setSwitchLanguage-Bve1jStl.js";import{c as Ae}from"./changeSettingsValue-79FUIYGn.js";import{g as M}from"./getCurrentLanguage-DI-PwgdS.js";import{c as A}from"./createToken-B7f9JzRp.js";async function Pe(){const s=_e();if(!s)return!1;try{return await pe(s)}catch{return!1}}const m={mainEl:document.querySelector("main"),modalEl:document.querySelector(".modal-wrapper"),form:document.querySelector(".signin-modal-form"),googleBtn:document.querySelector(".signin-modal-goggle "),errorText:document.querySelector(".signin-modal__error")};function Te(){localStorage.removeItem("token")}async function W(s){s.target.removeEventListener("click",W),v();try{await fe(),Te(),window.location.href="index.html"}catch(e){console.log(e)}finally{_()}}const P={userInfo:document.querySelector("#user-info-js"),userCards:document.querySelector("#user-cards-js"),profileAdverts:document.querySelector(".profile-adverts"),advertsTitle:document.querySelector(".profile-adverts__title"),activeInput:document.querySelector(".profile-adverts-state__input")};function De(s){P.userInfo.innerHTML=Ie(s),Oe()}function Ie(s){const{avatar:e,username:t,adress:a,phone:r,email:u,role:x}=s;return`
    <div class="user-info__thumb">
      ${Be(e)}
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
            ${x==="admin"?'<a class="user-info__btn user-info__metabase-link" href="metabase.html"> Metabase </a>':""}
            
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
    </div>`}function Oe(){document.querySelector(".user-info__logout").addEventListener("click",W)}function Be(s){const e=s["small-250px"];s["medium-300px"];const t=s["big-400px"],a=e?"big-photo":"";return`
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
    </picture>`}const Fe=s=>{const e=s._id,{active:t}=s;return`
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
        `},z={singinModalTitle:{ua:"Вхід",en:"Exit"},singinModalEmail:{ua:"Пошта",en:"Email"},singinModalPassword:{ua:"Пароль",en:"Password"},singinModalSubmit:{ua:"Увійти",en:"Sign in"},singinModalLink:{ua:"Зареєструватись",en:"Register"},singinModalEmailPlaceholder:{placeholder:!0,ua:"Введіть ваш емейл",en:"Enter your email"},singinModalPasswordPlaceholder:{placeholder:!0,ua:"Введіть пароль",en:"Enter your password"},singinModalGoogleText:{ua:"Продовжити з Google",en:"Continue with Google"},singinModalOrText:{ua:"або",en:"or"},singinError:{ua:"",en:""}},$={logoutText:{ua:"Вийти",en:"Go out"},advertsTitle:{ua:"Мої оголошення:",en:"My adverts:"},deleteModalTitle:{ua:"Ви дійсно хочете видалити це оголошення?",en:"Are you sure you want to delete this advert?"},deleteModalFalse:{ua:"Ні",en:"No"},deleteModalTrue:{ua:"Так",en:"Yes"},advertsStateActiveState:{ua:"Активні",en:"Active"},advertsStateInactiveState:{ua:"Неактивні",en:"Inactive"}};Object.assign($,z,Ce);var h,f,g,b,k,i,Y,T,N,V,J,K,p,Q,X,Z,ee,L,te;class je extends Me{constructor(t,a,r){super(t,a,r);c(this,i);c(this,h);c(this,f);c(this,g);c(this,b);c(this,k);G(this,"showCards",async()=>{const t={active:n(this,i,L).call(this)};await super.showCards(t)});this.activeInputEl=this.fatherElement.querySelector(".profile-adverts-state__input")}async showMainCard(t){n(this,i,Y).call(this),await this.showCards(t)}changeCards(t){const a=t.target,r=a.closest(".delete-btn"),u=a.closest(".active-btn"),x=Ge(a);r?n(this,i,T).call(this,x):u&&n(this,i,T).call(this,x,"active")}}h=new WeakMap,f=new WeakMap,g=new WeakMap,b=new WeakMap,k=new WeakMap,i=new WeakSet,Y=function(){this.changeCards=this.changeCards.bind(this),this.listCardsEl.addEventListener("click",this.changeCards),this.activeInputEl.addEventListener("change",this.showCards)},T=function(t,a){n(this,i,K).call(this,a),a==="active"?n(this,i,Z).call(this,t):n(this,i,X).call(this,t)},N=async function(t){v(),n(this,i,p).call(this);try{await be(t.id),_(),await this.showCards(this.params)}catch(a){console.log(a)}},V=async function(t){v(),n(this,i,p).call(this);try{const a=n(this,i,te).call(this);await R(t.id,a),_(),await this.showCards(this.params)}catch(a){console.log(a)}},J=async function(t){v(),n(this,i,p).call(this);try{await R(t.id,{active:"true"}),_(),await this.showCards(this.params)}catch(a){console.log(a)}},K=function(t){document.body.setAttribute("lock","");const a=document.querySelector(".delete-modal-wrapper"),r=n(this,i,L).call(this),u=Re(r,t);a.innerHTML=u,M()==="en"&&$e($,"en"),a.classList.remove("is-hidden")},p=function(){n(this,i,ee).call(this),document.querySelector(".delete-modal-wrapper").classList.add("is-hidden"),document.body.removeAttribute("lock","")},Q=function(t){const a=document.querySelector(".delete-modal-wrapper");a.innerHTML=Ue();const r=document.querySelector(".reason");d(this,b,u=>{u.preventDefault(),n(this,i,V).call(this,t)}),r.addEventListener("submit",l(this,b))},X=function(t){d(this,h,n(this,i,p).bind(this,t)),d(this,f,n(this,i,N).bind(this,t)),d(this,g,n(this,i,Q).bind(this,t));const a=document.querySelector(".delete-modal__btn_disagree"),r=document.querySelector(".delete-modal__btn_agree");if(a.addEventListener("click",l(this,h)),n(this,i,L).call(this)){r.addEventListener("click",l(this,g));return}r.addEventListener("click",l(this,f))},Z=function(t){d(this,h,n(this,i,p).bind(this,t)),d(this,k,n(this,i,J).bind(this,t));const a=document.querySelector(".delete-modal__btn_disagree"),r=document.querySelector(".delete-modal__btn_agree");a.addEventListener("click",l(this,h)),r.addEventListener("click",l(this,k))},ee=function(){const t=document.querySelector(".delete-modal__btn_disagree"),a=document.querySelector(".delete-modal__btn_agree"),r=document.querySelector(".reason");t==null||t.removeEventListener("click",l(this,h)),a==null||a.removeEventListener("click",l(this,f)),a==null||a.removeEventListener("click",l(this,g)),r==null||r.removeEventListener("click",l(this,g)),r==null||r.removeEventListener("submit",l(this,b))},L=function(){return!this.activeInputEl.checked},te=function(){const t=document.querySelector(".reason"),a=ge(t);return a.append("active",!n(this,i,L).call(this)),H(a)};function Ge(s){var a;const e=s.closest(".profile-adverts__card"),t=(a=e==null?void 0:e.dataset)==null?void 0:a.id;return{cardEl:e,id:t}}function Re(s,e){const t=s?"деактивувати":e==="active"?"активувати":"видалити",a=s?"deactivate":e==="active"?"activate":"delete",r={property:"deleteModalTitle",ua:`Ви дійсно хочете ${t} це оголошення?`,en:`Are you sure you want to ${a} this advert?`};return Ae($,r),`
      <div class="delete-modal modal">
        <h3 class="delete-modal__title" key="deleteModalTitle">Ви дійсно хочете ${t} це оголошення?</h3>
        <div class="delete-modal__btns">
          <button class="delete-modal__btn delete-modal__btn_disagree" key="deleteModalFalse" type="button">Ні</button>
          <button class="delete-modal__btn delete-modal__btn_agree" key="deleteModalTrue" type="button">Так</button>
        </div>
      </div>
  `}function Ue(){const{title:s,foundOnSite:e,foundOnAnotherResurses:t,notFound:a,submit:r}=He();return`
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
  `}function He(){return M()==="ua"?{title:"Чи змогли ви передати/обміняти рослину?",foundOnSite:"Так, на цьому сайті",foundOnAnotherResurses:"Так, в іншому місці",notFound:"Ні",submit:"Підвердити"}:{title:"Were you able to transfer/exchange the plant?",foundOnSite:"Yes, on this site",foundOnAnotherResurses:"Yes, in another place",notFound:"No",submit:"Confirm"}}const We=P.profileAdverts?new je(P.profileAdverts,ye,Fe):{};async function ze(s){s||(s=await Pe(),s=s.user),De(s),We.showMainCard()}async function D(){m.modalEl.classList.add("is-hidden"),m.mainEl.classList.remove("is-hidden"),document.body.removeAttribute("lock",""),document.querySelector(".profile-adverts")&&await Ye()}async function Ye(){await ze(),qe($),document.querySelector(".profile-adverts").classList.remove("is-hidden")}const Ne=void 0;function Ve(s){const e=document.createElement("script");e.src="https://accounts.google.com/gsi/client",e.async=!0,e.defer=!0,e.onload=s,document.head.appendChild(e)}function Je(){Ve(()=>{google.accounts.id.initialize({client_id:Ne,callback:Ke})})}async function Ke(s){v();const{credential:e}=s;try{const t=await U({token_id:e}),{token:a}=t;A(a),await D()}catch{try{const a=await Se(e),{token:r}=a;A(r),await D()}catch{}}finally{_()}}var y,S,w,E,o,I,se,ae,O,ne,B,oe,ie,re,F,le,ce,de,ue,C;class Qe{constructor(e,t){c(this,o);c(this,y);c(this,S);c(this,w);c(this,E);this.chatEl=e.querySelector(".chat"),this.chatForm=e.querySelector(".chat-form"),this.chatText=e.querySelector(".enter-text"),this.chatPlusBtn=e.querySelector(".chat-plus-btn"),this.chatPlusList=e.querySelector(".chat-plus-list"),this.chatDeleteEl=e.querySelector(".chat-delete"),this.loader=e.querySelector(".chat-loader"),this.userAvatar=t,this.assistAvatar={"small-chat-avatar-45px":"https://res.cloudinary.com/dk3syrsg5/image/upload/v1733484557/ai-assist_45_v4r2wi.jpg","chat-avatar-75px":"https://res.cloudinary.com/dk3syrsg5/image/upload/v1733484555/ai-assist_75_cejgdp.jpg"}}setCommunication(){this.setConversation(),this.chatPlusBtn.addEventListener("click",this.changeStatePlusPanel.bind(this)),this.chatDeleteEl.addEventListener("click",this.shawDeleteChatModal.bind(this)),n(this,o,I).call(this)}async setConversation(){let e;try{e=await we()}catch{e=await Ee()}const t=e.messages.map(a=>n(this,o,F).call(this,a));this.chatEl.innerHTML=t.join("")}changeStatePlusPanel(){this.chatPlusList.classList.toggle("is-hidden")}shawDeleteChatModal(e){n(this,o,ne).call(this),n(this,o,oe).call(this,e)}async enterSetOneSession(e){e.key==="Enter"&&this.setOneSession()}async btnSetOneSession(e){e.preventDefault(),this.setOneSession()}async setOneSession(){const e=n(this,o,le).call(this);e.trim()===""||e.trim()===n(this,o,C).call(this)||(n(this,o,se).call(this),n(this,o,ce).call(this),n(this,o,O).call(this,{role:"user",content:e}),await n(this,o,ae).call(this,e),n(this,o,I).call(this),this.chatText.textContent=n(this,o,C).call(this))}}y=new WeakMap,S=new WeakMap,w=new WeakMap,E=new WeakMap,o=new WeakSet,I=function(){d(this,w,this.btnSetOneSession.bind(this)),d(this,E,this.enterSetOneSession.bind(this)),this.chatForm.addEventListener("submit",l(this,w)),document.addEventListener("keydown",l(this,E))},se=function(){this.chatForm.removeEventListener("submit",l(this,w)),document.removeEventListener("keydown",l(this,E))},ae=async function(e){n(this,o,de).call(this);const t=await xe(e);n(this,o,O).call(this,t),n(this,o,ue).call(this)},O=function(e){const t=n(this,o,F).call(this,e);this.chatEl.insertAdjacentHTML("beforeend",t)},ne=function(){document.body.setAttribute("lock","");let e=document.querySelector(".delete-modal-wrapper");if(e){e.classList.remove("is-hidden");return}e=Ze(),document.body.insertAdjacentHTML("afterbegin",e),M()==="en"&&translateAllPage(settings,"en")},B=function(){n(this,o,ie).call(this),document.querySelector(".delete-modal-wrapper").classList.add("is-hidden"),document.body.removeAttribute("lock","")},oe=function(e){d(this,y,n(this,o,B).bind(this,e)),d(this,S,n(this,o,re).bind(this,e));const t=document.querySelector(".delete-modal__btn_disagree"),a=document.querySelector(".delete-modal__btn_agree");t.addEventListener("click",l(this,y)),a.addEventListener("click",l(this,S))},ie=function(){const e=document.querySelector(".delete-modal__btn_disagree"),t=document.querySelector(".delete-modal__btn_agree");e.removeEventListener("click",l(this,y)),t.removeEventListener("click",l(this,S))},re=async function(){v(),n(this,o,B).call(this);try{await Le(),await this.setConversation(),this.changeStatePlusPanel(),_()}catch(e){console.log(e)}},F=function(e){const{role:t,content:a}=e,r=t==="user"?this.userAvatar:this.assistAvatar;return`
          <li class="ai-assist-chat__message ai-assist-chat__message_${t}">
            ${Xe(r)}
            <p class="ai-assist-chat__text">${a}</p>
          </li>`},le=function(){return new FormData(this.chatForm).get("message")},ce=function(){this.chatForm.reset(),this.chatText.textContent=n(this,o,C).call(this)},de=function(){this.loader.classList.remove("is-hidden")},ue=function(){this.loader.classList.add("is-hidden")},C=function(){return M()=="ua"?"Написати...":"Write..."};function Xe(s){const e=s["small-chat-avatar-45px"],t=s["small-chat-avatar-45px"],a=s["chat-avatar-75px"];return`
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
</div>`}const et={aiAssist:document.querySelector(".ai-assist"),panelEnter:document.querySelector(".ai-assist-panel__enter"),panelText:document.querySelector(".ai-assist-panel__text"),chat:document.querySelector(".ai-assist-chat")};function tt(s){new Qe(et.aiAssist,s.user.avatar).setCommunication()}async function st(s){s.preventDefault();const e=H(m.form);await at(e)}async function at(s){v();try{const e=await U(s);A(e.token),ot(e),await D()}catch(e){return nt(e),!1}finally{_()}}function nt(s){var r,u;const e=(u=(r=s==null?void 0:s.response)==null?void 0:r.data)==null?void 0:u.message,a=ve(e,{property:"singinError",settings:z});m.errorText.textContent=a}function ot(s){document.querySelector(".ai-assist")&&tt(s)}function gt(){m.mainEl.classList.add("is-hidden"),m.modalEl.classList.remove("is-hidden"),document.body.setAttribute("lock",""),m.modalEl.addEventListener("submit",st),Je(),m.googleBtn.addEventListener("click",()=>{google.accounts.id.prompt()})}export{gt as a,$ as b,z as c,tt as d,Pe as i,We as p,et as r,ze as s};
