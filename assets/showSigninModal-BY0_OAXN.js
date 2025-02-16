var Be=Object.defineProperty;var Ue=(s,e,t)=>e in s?Be(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var de=(s,e,t)=>(Ue(s,typeof e!="symbol"?e+"":e,t),t),ae=(s,e,t)=>{if(!e.has(s))throw TypeError("Cannot "+t)};var r=(s,e,t)=>(ae(s,e,"read from private field"),t?t.call(s):e.get(s)),o=(s,e,t)=>{if(e.has(s))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(s):e.set(s,t)},c=(s,e,t,a)=>(ae(s,e,"write to private field"),a?a.call(s,t):e.set(s,t),t);var n=(s,e,t)=>(ae(s,e,"access private method"),t);import{b as Fe,e as je,l as Re,f as Ge,h as ue,i as He,j as ze,k as We,s as Ne,m as Ve,n as Ye,o as Je}from"./api-3qFQw6mT.js";import{c as Ke}from"./createToken-FTQcBlPj.js";import{g as Qe,d as Xe,C as Ze,c as me}from"./createFormObj-C2aXlj3F.js";import{s as v,r as p,c as et,g as tt}from"./getErrorText-0fHjodZm.js";import{t as st,s as at}from"./setSwitchLanguage-CcQIDv7t.js";import{c as nt}from"./changeSettingsValue-79FUIYGn.js";import{g as I}from"./getCurrentLanguage-DEWq27zJ.js";async function ot(){const s=Fe();if(!s)return!1;try{return await je(s)}catch{return!1}}const h={mainEl:document.querySelector("main"),modalEl:document.querySelector(".modal-wrapper"),form:document.querySelector(".signin-modal-form"),googleBtn:document.querySelector(".signin-modal-goggle "),errorText:document.querySelector(".signin-modal__error")};class L extends Error{}L.prototype.name="InvalidTokenError";function it(s){return decodeURIComponent(atob(s).replace(/(.)/g,(e,t)=>{let a=t.charCodeAt(0).toString(16).toUpperCase();return a.length<2&&(a="0"+a),"%"+a}))}function rt(s){let e=s.replace(/-/g,"+").replace(/_/g,"/");switch(e.length%4){case 0:break;case 2:e+="==";break;case 3:e+="=";break;default:throw new Error("base64 string is not of the correct length")}try{return it(e)}catch{return atob(e)}}function lt(s,e){if(typeof s!="string")throw new L("Invalid token specified: must be a string");e||(e={});const t=e.header===!0?0:1,a=s.split(".")[t];if(typeof a!="string")throw new L(`Invalid token specified: missing part #${t+1}`);let i;try{i=rt(a)}catch(l){throw new L(`Invalid token specified: invalid base64 for part #${t+1} (${l.message})`)}try{return JSON.parse(i)}catch(l){throw new L(`Invalid token specified: invalid json for part #${t+1} (${l.message})`)}}function ct(){localStorage.removeItem("token")}async function ge(s){s.target.removeEventListener("click",ge),v();try{await Re(),ct(),window.location.href="index.html"}catch(e){console.log(e)}finally{p()}}const ne={userInfo:document.querySelector("#user-info-js"),userCards:document.querySelector("#user-cards-js"),profileAdverts:document.querySelector(".profile-adverts"),advertsTitle:document.querySelector(".profile-adverts__title"),activeInput:document.querySelector(".profile-adverts-state__input")};function dt(s){ne.userInfo.innerHTML=ut(s),ht()}function ut(s){const{avatar:e,username:t,adress:a,phone:i,email:l,role:k}=s;return`
    <div class="user-info__thumb">
      ${mt(e)}
      </div> 
      <div class="user-info__text-block">
        <div class="user-info__user">
          <div>
            <h2 class="user-info__title">${t}</h2>
            <p class="user-info__text">${a}</p>
            <p class="user-info__text bold">${i}</p>
            <p class="user-info__text bold">${l}</p>
          </div>
          <div class="user-info__btn-box">
            <button class="user-info__btn user-info__logout" key="logoutText">Вийти</button>
            ${k==="admin"?'<a class="user-info__btn user-info__metabase-link" href="metabase.html"> Metabase </a>':""}
            
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
    </div>`}function ht(){document.querySelector(".user-info__logout").addEventListener("click",ge)}function mt(s){const e=s["small-250px"];s["medium-300px"];const t=s["big-400px"],a=e?"big-photo":"";return`
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
    </picture>`}const gt=s=>{const e=s._id,{active:t}=s;return`
          <li class="profile-adverts__card" ${t} data-id="${e}">
            ${Qe(s)}
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
        `},ve={singinModalTitle:{ua:"Вхід",en:"Exit"},singinModalEmail:{ua:"Пошта",en:"Email"},singinModalPassword:{ua:"Пароль",en:"Password"},singinModalSubmit:{ua:"Увійти",en:"Sign in"},singinModalLink:{ua:"Зареєструватись",en:"Register"},singinModalEmailPlaceholder:{placeholder:!0,ua:"Введіть ваш емейл",en:"Enter your email"},singinModalPasswordPlaceholder:{placeholder:!0,ua:"Введіть пароль",en:"Enter your password"},singinModalGoogleText:{ua:"Продовжити з Google",en:"Continue with Google"},singinModalOrText:{ua:"або",en:"or"},singinError:{ua:"",en:""}},se={logoutText:{ua:"Вийти",en:"Go out"},advertsTitle:{ua:"Мої оголошення:",en:"My adverts:"},deleteModalTitle:{ua:"Ви дійсно хочете видалити це оголошення?",en:"Are you sure you want to delete this advert?"},deleteModalFalse:{ua:"Ні",en:"No"},deleteModalTrue:{ua:"Так",en:"Yes"}};Object.assign(se,ve,Xe);var d,f,m,b,M,O,pe,$,oe,B,_e,U,fe,F,be,j,ye,u,_,R,we,G,Se,H,Ee,z,xe,g,C,W,ke;class vt extends Ze{constructor(t,a,i){super(t,a,i);o(this,O);o(this,$);o(this,B);o(this,U);o(this,F);o(this,j);o(this,u);o(this,R);o(this,G);o(this,H);o(this,z);o(this,g);o(this,W);o(this,d,void 0);o(this,f,void 0);o(this,m,void 0);o(this,b,void 0);o(this,M,void 0);de(this,"showCards",async()=>{const t={active:n(this,g,C).call(this)};await super.showCards(t)});this.activeInputEl=this.fatherElement.querySelector(".profile-adverts-state__input")}async showMainCard(t){n(this,O,pe).call(this),await this.showCards(t)}changeCards(t){const a=t.target,i=a.closest(".delete-btn"),l=a.closest(".active-btn"),k=pt(a);i?n(this,$,oe).call(this,k):l&&n(this,$,oe).call(this,k,"active")}}d=new WeakMap,f=new WeakMap,m=new WeakMap,b=new WeakMap,M=new WeakMap,O=new WeakSet,pe=function(){this.changeCards=this.changeCards.bind(this),this.listCardsEl.addEventListener("click",this.changeCards),this.activeInputEl.addEventListener("change",this.showCards)},$=new WeakSet,oe=function(t,a){n(this,j,ye).call(this,a),a==="active"?n(this,H,Ee).call(this,t):n(this,G,Se).call(this,t)},B=new WeakSet,_e=async function(t){v(),n(this,u,_).call(this);try{await Ge(t.id),p(),await this.showCards(this.params)}catch(a){console.log(a)}},U=new WeakSet,fe=async function(t){v(),n(this,u,_).call(this);try{const a=n(this,W,ke).call(this);await ue(t.id,a),p(),await this.showCards(this.params)}catch(a){console.log(a)}},F=new WeakSet,be=async function(t){v(),n(this,u,_).call(this);try{await ue(t.id,{active:"true"}),p(),await this.showCards(this.params)}catch(a){console.log(a)}},j=new WeakSet,ye=function(t){document.body.setAttribute("lock","");const a=document.querySelector(".delete-modal-wrapper"),i=n(this,g,C).call(this),l=_t(i,t);a.innerHTML=l,I()==="en"&&st(se,"en"),a.classList.remove("is-hidden")},u=new WeakSet,_=function(){n(this,z,xe).call(this),document.querySelector(".delete-modal-wrapper").classList.add("is-hidden"),document.body.removeAttribute("lock","")},R=new WeakSet,we=function(t){const a=document.querySelector(".delete-modal-wrapper");a.innerHTML=ft();const i=document.querySelector(".reason");c(this,b,l=>{l.preventDefault(),n(this,U,fe).call(this,t)}),i.addEventListener("submit",r(this,b))},G=new WeakSet,Se=function(t){c(this,d,n(this,u,_).bind(this,t)),c(this,f,n(this,B,_e).bind(this,t)),c(this,m,n(this,R,we).bind(this,t));const a=document.querySelector(".delete-modal__btn_disagree"),i=document.querySelector(".delete-modal__btn_agree");if(a.addEventListener("click",r(this,d)),n(this,g,C).call(this)){i.addEventListener("click",r(this,m));return}i.addEventListener("click",r(this,f))},H=new WeakSet,Ee=function(t){c(this,d,n(this,u,_).bind(this,t)),c(this,M,n(this,F,be).bind(this,t));const a=document.querySelector(".delete-modal__btn_disagree"),i=document.querySelector(".delete-modal__btn_agree");a.addEventListener("click",r(this,d)),i.addEventListener("click",r(this,M))},z=new WeakSet,xe=function(){const t=document.querySelector(".delete-modal__btn_disagree"),a=document.querySelector(".delete-modal__btn_agree"),i=document.querySelector(".reason");t==null||t.removeEventListener("click",r(this,d)),a==null||a.removeEventListener("click",r(this,f)),a==null||a.removeEventListener("click",r(this,m)),i==null||i.removeEventListener("click",r(this,m)),i==null||i.removeEventListener("submit",r(this,b))},g=new WeakSet,C=function(){return!this.activeInputEl.checked},W=new WeakSet,ke=function(){const t=document.querySelector(".reason"),a=et(t);return a.append("active",!n(this,g,C).call(this)),me(a)};function pt(s){var a;const e=s.closest(".profile-adverts__card"),t=(a=e==null?void 0:e.dataset)==null?void 0:a.id;return{cardEl:e,id:t}}function _t(s,e){const t=s?"деактивувати":e==="active"?"активувати":"видалити",a=s?"deactivate":e==="active"?"activate":"delete",i={property:"deleteModalTitle",ua:`Ви дійсно хочете ${t} це оголошення?`,en:`Are you sure you want to ${a} this advert?`};return nt(se,i),`
      <div class="delete-modal modal">
        <h3 class="delete-modal__title" key="deleteModalTitle">Ви дійсно хочете ${t} це оголошення?</h3>
        <div class="delete-modal__btns">
          <button class="delete-modal__btn delete-modal__btn_disagree" key="deleteModalFalse" type="button">Ні</button>
          <button class="delete-modal__btn delete-modal__btn_agree" key="deleteModalTrue" type="button">Так</button>
        </div>
      </div>
  `}function ft(){const{title:s,foundOnSite:e,foundOnAnotherResurses:t,notFound:a,submit:i}=bt();return`
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
          <button class="reason__btn-submit" type="submit">${i}</button>
        </form>
      </div>
  `}function bt(){return I()==="ua"?{title:"Чи змогли ви передати/обміняти рослину?",foundOnSite:"Так, на цьому сайті",foundOnAnotherResurses:"Так, в іншому місці",notFound:"Ні",submit:"Підвердити"}:{title:"Were you able to transfer/exchange the plant?",foundOnSite:"Yes, on this site",foundOnAnotherResurses:"Yes, in another place",notFound:"No",submit:"Confirm"}}const yt=ne.profileAdverts?new vt(ne.profileAdverts,He,gt):{};async function wt(s){s||(s=await ot(),s=s.user),dt(s),yt.showMainCard()}async function St(){h.modalEl.classList.add("is-hidden"),h.mainEl.classList.remove("is-hidden"),document.body.removeAttribute("lock",""),document.querySelector(".profile-adverts")&&await Et()}async function Et(){await wt(),at(se),document.querySelector(".profile-adverts").classList.remove("is-hidden")}var y,w,S,E,q,ie,N,Le,V,Ce,A,re,Y,Me,D,le,J,$e,K,qe,Q,Ae,T,ce,X,De,Z,Te,ee,Pe,te,Ie,x,P;class xt{constructor(e,t){o(this,q);o(this,N);o(this,V);o(this,A);o(this,Y);o(this,D);o(this,J);o(this,K);o(this,Q);o(this,T);o(this,X);o(this,Z);o(this,ee);o(this,te);o(this,x);o(this,y,void 0);o(this,w,void 0);o(this,S,void 0);o(this,E,void 0);this.chatEl=e.querySelector(".chat"),this.chatForm=e.querySelector(".chat-form"),this.chatText=e.querySelector(".enter-text"),this.chatPlusBtn=e.querySelector(".chat-plus-btn"),this.chatPlusList=e.querySelector(".chat-plus-list"),this.chatDeleteEl=e.querySelector(".chat-delete"),this.loader=e.querySelector(".chat-loader"),this.userAvatar=t,this.assistAvatar={"small-chat-avatar-45px":"https://res.cloudinary.com/dk3syrsg5/image/upload/v1733484557/ai-assist_45_v4r2wi.jpg","chat-avatar-75px":"https://res.cloudinary.com/dk3syrsg5/image/upload/v1733484555/ai-assist_75_cejgdp.jpg"}}setCommunication(){this.setConversation(),this.chatPlusBtn.addEventListener("click",this.changeStatePlusPanel.bind(this)),this.chatDeleteEl.addEventListener("click",this.shawDeleteChatModal.bind(this)),n(this,q,ie).call(this)}async setConversation(){let e;try{e=await ze()}catch{e=await We()}const t=e.messages.map(a=>n(this,T,ce).call(this,a));this.chatEl.innerHTML=t.join("")}changeStatePlusPanel(){this.chatPlusList.classList.toggle("is-hidden")}shawDeleteChatModal(e){n(this,Y,Me).call(this),n(this,J,$e).call(this,e)}async enterSetOneSession(e){e.key==="Enter"&&this.setOneSession()}async btnSetOneSession(e){e.preventDefault(),this.setOneSession()}async setOneSession(){const e=n(this,X,De).call(this);e.trim()===""||e.trim()===n(this,x,P).call(this)||(n(this,N,Le).call(this),n(this,Z,Te).call(this),n(this,A,re).call(this,{role:"user",content:e}),await n(this,V,Ce).call(this,e),n(this,q,ie).call(this),this.chatText.textContent=n(this,x,P).call(this))}}y=new WeakMap,w=new WeakMap,S=new WeakMap,E=new WeakMap,q=new WeakSet,ie=function(){c(this,S,this.btnSetOneSession.bind(this)),c(this,E,this.enterSetOneSession.bind(this)),this.chatForm.addEventListener("submit",r(this,S)),document.addEventListener("keydown",r(this,E))},N=new WeakSet,Le=function(){this.chatForm.removeEventListener("submit",r(this,S)),document.removeEventListener("keydown",r(this,E))},V=new WeakSet,Ce=async function(e){n(this,ee,Pe).call(this);const t=await Ne(e);n(this,A,re).call(this,t),n(this,te,Ie).call(this)},A=new WeakSet,re=function(e){const t=n(this,T,ce).call(this,e);this.chatEl.insertAdjacentHTML("beforeend",t)},Y=new WeakSet,Me=function(){document.body.setAttribute("lock","");let e=document.querySelector(".delete-modal-wrapper");if(e){e.classList.remove("is-hidden");return}e=Lt(),document.body.insertAdjacentHTML("afterbegin",e),I()==="en"&&translateAllPage(settings,"en")},D=new WeakSet,le=function(){n(this,K,qe).call(this),document.querySelector(".delete-modal-wrapper").classList.add("is-hidden"),document.body.removeAttribute("lock","")},J=new WeakSet,$e=function(e){c(this,y,n(this,D,le).bind(this,e)),c(this,w,n(this,Q,Ae).bind(this,e));const t=document.querySelector(".delete-modal__btn_disagree"),a=document.querySelector(".delete-modal__btn_agree");t.addEventListener("click",r(this,y)),a.addEventListener("click",r(this,w))},K=new WeakSet,qe=function(){const e=document.querySelector(".delete-modal__btn_disagree"),t=document.querySelector(".delete-modal__btn_agree");e.removeEventListener("click",r(this,y)),t.removeEventListener("click",r(this,w))},Q=new WeakSet,Ae=async function(){v(),n(this,D,le).call(this);try{await Ve(),await this.setConversation(),this.changeStatePlusPanel(),p()}catch(e){console.log(e)}},T=new WeakSet,ce=function(e){const{role:t,content:a}=e,i=t==="user"?this.userAvatar:this.assistAvatar;return`
          <li class="ai-assist-chat__message ai-assist-chat__message_${t}">
            ${kt(i)}
            <p class="ai-assist-chat__text">${a}</p>
          </li>`},X=new WeakSet,De=function(){return new FormData(this.chatForm).get("message")},Z=new WeakSet,Te=function(){this.chatForm.reset(),this.chatText.textContent=n(this,x,P).call(this)},ee=new WeakSet,Pe=function(){this.loader.classList.remove("is-hidden")},te=new WeakSet,Ie=function(){this.loader.classList.add("is-hidden")},x=new WeakSet,P=function(){return I()=="ua"?"Написати...":"Write..."};function kt(s){const e=s["small-chat-avatar-45px"],t=s["small-chat-avatar-45px"],a=s["chat-avatar-75px"];return`
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
        </picture>`}function Lt(){return`
  <div class="modal-wrapper delete-modal-wrapper">
  <div class="delete-modal modal">
    <h3 class="delete-modal__title" key="deleteModalTitle">Ви дійсно хочете очистити цей чат?</h3>
    <div class="delete-modal__btns">
      <button class="delete-modal__btn delete-modal__btn_disagree" key="deleteModalFalse" type="button">Ні</button>
      <button class="delete-modal__btn delete-modal__btn_agree" key="deleteModalTrue" type="button">Так</button>
    </div>
  </div>
</div>`}const Ct={aiAssist:document.querySelector(".ai-assist"),panelEnter:document.querySelector(".ai-assist-panel__enter"),panelText:document.querySelector(".ai-assist-panel__text"),chat:document.querySelector(".ai-assist-chat")};function Mt(s){new xt(Ct.aiAssist,s.user.avatar).setCommunication()}async function $t(s){s.preventDefault();const e=me(h.form);await Oe(e)}async function Oe(s){v();try{const e=await Ye(s);Ke(e.token),At(e),await St()}catch(e){return console.log(e),qt(e),!1}finally{p()}}function qt(s){var i,l;const e=(l=(i=s==null?void 0:s.response)==null?void 0:i.data)==null?void 0:l.message,a=tt(e,{property:"singinError",settings:ve});h.errorText.textContent=a}function At(s){document.querySelector(".ai-assist")&&Mt(s)}var Dt={BASE_URL:"/Leaf_Of_Hope/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const he=Dt.VITE_GOOGLEAUTHID;function Tt(s){const e=document.createElement("script");e.src="https://accounts.google.com/gsi/client",e.async=!0,e.defer=!0,e.onload=s,document.head.appendChild(e)}function Pt(){console.log(he),Tt(()=>{google.accounts.id.initialize({client_id:he,callback:It})})}async function It(s){const e=lt(s.credential);console.log(e);const t=Bt(e);if(!await Oe(t)){const i=Ut(e);Ot(i)}}async function Ot(s){v();try{const e=await Je(s)}catch{}finally{p()}}function Bt(s){const{email:e,jti:t}=s;return{email:e,password:t}}function Ut(s){const{email:e,name:t,picture:a,jti:i}=s;return{email:e,username:t,password:i,phone:"0000000000",adress:"не вказано"}}function Vt(){h.mainEl.classList.add("is-hidden"),h.modalEl.classList.remove("is-hidden"),document.body.setAttribute("lock",""),h.modalEl.addEventListener("submit",$t),Pt(),h.googleBtn.addEventListener("click",()=>{google.accounts.id.prompt()})}export{Vt as a,se as b,ve as c,Mt as d,ot as i,yt as p,Ct as r,wt as s};
