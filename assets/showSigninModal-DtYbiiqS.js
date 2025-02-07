var De=Object.defineProperty;var Ie=(s,e,t)=>e in s?De(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var ce=(s,e,t)=>(Ie(s,typeof e!="symbol"?e+"":e,t),t),se=(s,e,t)=>{if(!e.has(s))throw TypeError("Cannot "+t)};var r=(s,e,t)=>(se(s,e,"read from private field"),t?t.call(s):e.get(s)),o=(s,e,t)=>{if(e.has(s))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(s):e.set(s,t)},l=(s,e,t,a)=>(se(s,e,"write to private field"),a?a.call(s,t):e.set(s,t),t);var n=(s,e,t)=>(se(s,e,"access private method"),t);import{b as Oe,e as Fe,l as Be,f as je,h as de,i as Re,j as Ue,k as He,s as We,m as Ye,n as ze}from"./api-D1JSuAN_.js";import{c as Ne}from"./createToken-4BCPQyND.js";import{g as Ge,d as Ve,C as Je,c as ue}from"./createFormObj-Dmz50CUy.js";import{s as _,r as p,c as Ke,g as Qe}from"./getErrorText-uMoplfWS.js";import{t as Xe,s as Ze}from"./setSwitchLanguage-BdhPp3fi.js";import{c as et}from"./changeSettingsValue-79FUIYGn.js";import{g as T}from"./setCurrentLanguage-8AsnexD0.js";async function tt(){const s=Oe();if(!s)return!1;try{return await Fe(s)}catch{return!1}}const v={mainEl:document.querySelector("main"),modalEl:document.querySelector(".modal-wrapper"),form:document.querySelector(".signin-modal-form"),errorText:document.querySelector(".signin-modal__error")};function st(){localStorage.removeItem("token")}async function he(s){s.target.removeEventListener("click",he),_();try{await Be(),st(),window.location.href="index.html"}catch(e){console.log(e)}finally{p()}}const ae={userInfo:document.querySelector("#user-info-js"),userCards:document.querySelector("#user-cards-js"),profileAdverts:document.querySelector(".profile-adverts"),advertsTitle:document.querySelector(".profile-adverts__title"),activeInput:document.querySelector(".profile-adverts-state__input")};function at(s){ae.userInfo.innerHTML=nt(s),ot()}function nt(s){const{avatar:e,username:t,adress:a,phone:i,email:c}=s;return`
    <div class="user-info__thumb">
      ${it(e)}
      </div> 
      <div class="user-info__text-block">
        <div class="user-info__user">
          <div>
            <h2 class="user-info__title">${t}</h2>
            <p class="user-info__text">${a}</p>
            <p class="user-info__text bold">${i}</p>
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
    </div>`}function ot(){document.querySelector(".user-info__logout").addEventListener("click",he)}function it(s){const e=s["small-250px"];s["medium-300px"];const t=s["big-400px"],a=e?"big-photo":"";return`
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
    </picture>`}const rt=s=>{const e=s._id,{active:t}=s;return`
          <li class="profile-adverts__card" ${t} data-id="${e}">
            ${Ge(s)}
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
        `},me={singinModalTitle:{ua:"Вхід",en:"Exit"},singinModalEmail:{ua:"Пошта",en:"Email"},singinModalPassword:{ua:"Пароль",en:"Password"},singinModalSubmit:{ua:"Увійти",en:"Sign in"},singinModalLink:{ua:"Зареєструватись",en:"Register"},singinModalEmailPlaceholder:{placeholder:!0,ua:"Введіть ваш емейл",en:"Enter your email"},singinModalPasswordPlaceholder:{placeholder:!0,ua:"Введіть пароль",en:"Enter your password"},singinError:{ua:"",en:""}},ee={logoutText:{ua:"Вийти",en:"Go out"},advertsTitle:{ua:"Мої оголошення:",en:"My adverts:"},deleteModalTitle:{ua:"Ви дійсно хочете видалити це оголошення?",en:"Are you sure you want to delete this advert?"},deleteModalFalse:{ua:"Ні",en:"No"},deleteModalTrue:{ua:"Так",en:"Yes"}};Object.assign(ee,me,Ve);var d,b,h,f,C,D,ve,M,ne,I,ge,O,_e,F,pe,B,be,u,g,j,fe,R,ye,U,Se,H,we,m,L,W,Ee;class lt extends Je{constructor(t,a,i){super(t,a,i);o(this,D);o(this,M);o(this,I);o(this,O);o(this,F);o(this,B);o(this,u);o(this,j);o(this,R);o(this,U);o(this,H);o(this,m);o(this,W);o(this,d,void 0);o(this,b,void 0);o(this,h,void 0);o(this,f,void 0);o(this,C,void 0);ce(this,"showCards",async()=>{const t={active:n(this,m,L).call(this)};await super.showCards(t)});this.activeInputEl=this.fatherElement.querySelector(".profile-adverts-state__input")}async showMainCard(t){n(this,D,ve).call(this),await this.showCards(t)}changeCards(t){const a=t.target,i=a.closest(".delete-btn"),c=a.closest(".active-btn"),te=ct(a);i?n(this,M,ne).call(this,te):c&&n(this,M,ne).call(this,te,"active")}}d=new WeakMap,b=new WeakMap,h=new WeakMap,f=new WeakMap,C=new WeakMap,D=new WeakSet,ve=function(){this.changeCards=this.changeCards.bind(this),this.listCardsEl.addEventListener("click",this.changeCards),this.activeInputEl.addEventListener("change",this.showCards)},M=new WeakSet,ne=function(t,a){n(this,B,be).call(this,a),a==="active"?n(this,U,Se).call(this,t):n(this,R,ye).call(this,t)},I=new WeakSet,ge=async function(t){_(),n(this,u,g).call(this);try{await je(t.id),p(),await this.showCards(this.params)}catch(a){console.log(a)}},O=new WeakSet,_e=async function(t){_(),n(this,u,g).call(this);try{const a=n(this,W,Ee).call(this);await de(t.id,a),p(),await this.showCards(this.params)}catch(a){console.log(a)}},F=new WeakSet,pe=async function(t){_(),n(this,u,g).call(this);try{await de(t.id,{active:"true"}),p(),await this.showCards(this.params)}catch(a){console.log(a)}},B=new WeakSet,be=function(t){document.body.setAttribute("lock","");const a=document.querySelector(".delete-modal-wrapper"),i=n(this,m,L).call(this),c=dt(i,t);a.innerHTML=c,T()==="en"&&Xe(ee,"en"),a.classList.remove("is-hidden")},u=new WeakSet,g=function(){n(this,H,we).call(this),document.querySelector(".delete-modal-wrapper").classList.add("is-hidden"),document.body.removeAttribute("lock","")},j=new WeakSet,fe=function(t){const a=document.querySelector(".delete-modal-wrapper");a.innerHTML=ut();const i=document.querySelector(".reason");l(this,f,c=>{c.preventDefault(),n(this,O,_e).call(this,t)}),i.addEventListener("submit",r(this,f))},R=new WeakSet,ye=function(t){l(this,d,n(this,u,g).bind(this,t)),l(this,b,n(this,I,ge).bind(this,t)),l(this,h,n(this,j,fe).bind(this,t));const a=document.querySelector(".delete-modal__btn_disagree"),i=document.querySelector(".delete-modal__btn_agree");if(a.addEventListener("click",r(this,d)),n(this,m,L).call(this)){i.addEventListener("click",r(this,h));return}i.addEventListener("click",r(this,b))},U=new WeakSet,Se=function(t){l(this,d,n(this,u,g).bind(this,t)),l(this,C,n(this,F,pe).bind(this,t));const a=document.querySelector(".delete-modal__btn_disagree"),i=document.querySelector(".delete-modal__btn_agree");a.addEventListener("click",r(this,d)),i.addEventListener("click",r(this,C))},H=new WeakSet,we=function(){const t=document.querySelector(".delete-modal__btn_disagree"),a=document.querySelector(".delete-modal__btn_agree"),i=document.querySelector(".reason");t==null||t.removeEventListener("click",r(this,d)),a==null||a.removeEventListener("click",r(this,b)),a==null||a.removeEventListener("click",r(this,h)),i==null||i.removeEventListener("click",r(this,h)),i==null||i.removeEventListener("submit",r(this,f))},m=new WeakSet,L=function(){return!this.activeInputEl.checked},W=new WeakSet,Ee=function(){const t=document.querySelector(".reason"),a=Ke(t);return a.append("active",!n(this,m,L).call(this)),ue(a)};function ct(s){var a;const e=s.closest(".profile-adverts__card"),t=(a=e==null?void 0:e.dataset)==null?void 0:a.id;return{cardEl:e,id:t}}function dt(s,e){const t=s?"деактивувати":e==="active"?"активувати":"видалити",a=s?"deactivate":e==="active"?"activate":"delete",i={property:"deleteModalTitle",ua:`Ви дійсно хочете ${t} це оголошення?`,en:`Are you sure you want to ${a} this advert?`};return et(ee,i),`
      <div class="delete-modal modal">
        <h3 class="delete-modal__title" key="deleteModalTitle">Ви дійсно хочете ${t} це оголошення?</h3>
        <div class="delete-modal__btns">
          <button class="delete-modal__btn delete-modal__btn_disagree" key="deleteModalFalse" type="button">Ні</button>
          <button class="delete-modal__btn delete-modal__btn_agree" key="deleteModalTrue" type="button">Так</button>
        </div>
      </div>
  `}function ut(){const{title:s,foundOnSite:e,foundOnAnotherResurses:t,notFound:a,submit:i}=ht();return`
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
  `}function ht(){return T()==="ua"?{title:"Чи змогли ви передати/обміняти рослину?",foundOnSite:"Так, на цьому сайті",foundOnAnotherResurses:"Так, в іншому місці",notFound:"Ні",submit:"Підвердити"}:{title:"Were you able to transfer/exchange the plant?",foundOnSite:"Yes, on this site",foundOnAnotherResurses:"Yes, in another place",notFound:"No",submit:"Confirm"}}const mt=ae.profileAdverts?new lt(ae.profileAdverts,Re,rt):{};async function vt(s){s||(s=await tt(),s=s.user),at(s),mt.showMainCard()}async function gt(){v.modalEl.classList.add("is-hidden"),v.mainEl.classList.remove("is-hidden"),document.body.removeAttribute("lock",""),document.querySelector(".profile-adverts")&&await _t()}async function _t(){await vt(),Ze(ee),document.querySelector(".profile-adverts").classList.remove("is-hidden")}var y,S,w,E,k,oe,Y,xe,z,Le,$,ie,N,Ce,q,re,G,Me,V,ke,J,$e,A,le,K,qe,Q,Ae,X,Pe,Z,Te,x,P;class pt{constructor(e,t){o(this,k);o(this,Y);o(this,z);o(this,$);o(this,N);o(this,q);o(this,G);o(this,V);o(this,J);o(this,A);o(this,K);o(this,Q);o(this,X);o(this,Z);o(this,x);o(this,y,void 0);o(this,S,void 0);o(this,w,void 0);o(this,E,void 0);this.chatEl=e.querySelector(".chat"),this.chatForm=e.querySelector(".chat-form"),this.chatText=e.querySelector(".enter-text"),this.chatPlusBtn=e.querySelector(".chat-plus-btn"),this.chatPlusList=e.querySelector(".chat-plus-list"),this.chatDeleteEl=e.querySelector(".chat-delete"),this.loader=e.querySelector(".chat-loader"),this.userAvatar=t,this.assistAvatar={"small-chat-avatar-45px":"https://res.cloudinary.com/dk3syrsg5/image/upload/v1733484557/ai-assist_45_v4r2wi.jpg","chat-avatar-75px":"https://res.cloudinary.com/dk3syrsg5/image/upload/v1733484555/ai-assist_75_cejgdp.jpg"}}setCommunication(){this.setConversation(),this.chatPlusBtn.addEventListener("click",this.changeStatePlusPanel.bind(this)),this.chatDeleteEl.addEventListener("click",this.shawDeleteChatModal.bind(this)),n(this,k,oe).call(this)}async setConversation(){let e;try{e=await Ue()}catch{e=await He()}const t=e.messages.map(a=>n(this,A,le).call(this,a));this.chatEl.innerHTML=t.join("")}changeStatePlusPanel(){this.chatPlusList.classList.toggle("is-hidden")}shawDeleteChatModal(e){n(this,N,Ce).call(this),n(this,G,Me).call(this,e)}async enterSetOneSession(e){e.key==="Enter"&&this.setOneSession()}async btnSetOneSession(e){e.preventDefault(),this.setOneSession()}async setOneSession(){const e=n(this,K,qe).call(this);e.trim()===""||e.trim()===n(this,x,P).call(this)||(n(this,Y,xe).call(this),n(this,Q,Ae).call(this),n(this,$,ie).call(this,{role:"user",content:e}),await n(this,z,Le).call(this,e),n(this,k,oe).call(this),this.chatText.textContent=n(this,x,P).call(this))}}y=new WeakMap,S=new WeakMap,w=new WeakMap,E=new WeakMap,k=new WeakSet,oe=function(){l(this,w,this.btnSetOneSession.bind(this)),l(this,E,this.enterSetOneSession.bind(this)),this.chatForm.addEventListener("submit",r(this,w)),document.addEventListener("keydown",r(this,E))},Y=new WeakSet,xe=function(){this.chatForm.removeEventListener("submit",r(this,w)),document.removeEventListener("keydown",r(this,E))},z=new WeakSet,Le=async function(e){n(this,X,Pe).call(this);const t=await We(e);n(this,$,ie).call(this,t),n(this,Z,Te).call(this)},$=new WeakSet,ie=function(e){const t=n(this,A,le).call(this,e);this.chatEl.insertAdjacentHTML("beforeend",t)},N=new WeakSet,Ce=function(){document.body.setAttribute("lock","");let e=document.querySelector(".delete-modal-wrapper");if(e){e.classList.remove("is-hidden");return}e=ft(),document.body.insertAdjacentHTML("afterbegin",e),T()==="en"&&translateAllPage(settings,"en")},q=new WeakSet,re=function(){n(this,V,ke).call(this),document.querySelector(".delete-modal-wrapper").classList.add("is-hidden"),document.body.removeAttribute("lock","")},G=new WeakSet,Me=function(e){l(this,y,n(this,q,re).bind(this,e)),l(this,S,n(this,J,$e).bind(this,e));const t=document.querySelector(".delete-modal__btn_disagree"),a=document.querySelector(".delete-modal__btn_agree");t.addEventListener("click",r(this,y)),a.addEventListener("click",r(this,S))},V=new WeakSet,ke=function(){const e=document.querySelector(".delete-modal__btn_disagree"),t=document.querySelector(".delete-modal__btn_agree");e.removeEventListener("click",r(this,y)),t.removeEventListener("click",r(this,S))},J=new WeakSet,$e=async function(){_(),n(this,q,re).call(this);try{await Ye(),await this.setConversation(),this.changeStatePlusPanel(),p()}catch(e){console.log(e)}},A=new WeakSet,le=function(e){const{role:t,content:a}=e,i=t==="user"?this.userAvatar:this.assistAvatar;return`
          <li class="ai-assist-chat__message ai-assist-chat__message_${t}">
            ${bt(i)}
            <p class="ai-assist-chat__text">${a}</p>
          </li>`},K=new WeakSet,qe=function(){return new FormData(this.chatForm).get("message")},Q=new WeakSet,Ae=function(){this.chatForm.reset(),this.chatText.textContent=n(this,x,P).call(this)},X=new WeakSet,Pe=function(){this.loader.classList.remove("is-hidden")},Z=new WeakSet,Te=function(){this.loader.classList.add("is-hidden")},x=new WeakSet,P=function(){return T()=="ua"?"Написати...":"Write..."};function bt(s){const e=s["small-chat-avatar-45px"],t=s["small-chat-avatar-45px"],a=s["chat-avatar-75px"];return`
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
        </picture>`}function ft(){return`
  <div class="modal-wrapper delete-modal-wrapper">
  <div class="delete-modal modal">
    <h3 class="delete-modal__title" key="deleteModalTitle">Ви дійсно хочете очистити цей чат?</h3>
    <div class="delete-modal__btns">
      <button class="delete-modal__btn delete-modal__btn_disagree" key="deleteModalFalse" type="button">Ні</button>
      <button class="delete-modal__btn delete-modal__btn_agree" key="deleteModalTrue" type="button">Так</button>
    </div>
  </div>
</div>`}const yt={aiAssist:document.querySelector(".ai-assist"),panelEnter:document.querySelector(".ai-assist-panel__enter"),panelText:document.querySelector(".ai-assist-panel__text"),chat:document.querySelector(".ai-assist-chat")};function St(s){new pt(yt.aiAssist,s.user.avatar).setCommunication()}async function wt(s){s.preventDefault(),_();const e=ue(v.form);try{const t=await ze(e);Ne(t.token),xt(t),await gt()}catch(t){Et(t)}finally{p()}}function Et(s){var i,c;const e=(c=(i=s==null?void 0:s.response)==null?void 0:i.data)==null?void 0:c.message,a=Qe(e,{property:"singinError",settings:me});v.errorText.textContent=a}function xt(s){document.querySelector(".ai-assist")&&St(s)}function Tt(){v.mainEl.classList.add("is-hidden"),v.modalEl.classList.remove("is-hidden"),document.body.setAttribute("lock",""),v.modalEl.addEventListener("submit",wt)}export{Tt as a,ee as b,me as c,St as d,tt as i,mt as p,yt as r,vt as s};
