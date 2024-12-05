var G=(s,e,t)=>{if(!e.has(s))throw TypeError("Cannot "+t)};var i=(s,e,t)=>(G(s,e,"read from private field"),t?t.call(s):e.get(s)),r=(s,e,t)=>{if(e.has(s))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(s):e.set(s,t)},c=(s,e,t,a)=>(G(s,e,"write to private field"),a?a.call(s,t):e.set(s,t),t);var n=(s,e,t)=>(G(s,e,"access private method"),t);import{e as ye,f as Se,s as we,l as Ee,h as xe,i as qe,j as Le,k as Ce,m as Me,n as ke,o as Pe}from"./getDataValue-9dXxiyqd.js";import{g as $e,d as Ae,C as Te,c as De,a as Ie}from"./createFormObj-JW0bcll6.js";import{t as Be,s as Oe}from"./setSwitchLanguage-DJQPoVWm.js";import{g as v}from"./setCurrentLanguage-DtO1VHaQ.js";async function je(){const s=ye();if(!s)return!1;try{return await Se(s)}catch{return!1}}const Fe=document.querySelector(".modal-wrapper"),x={modalEl:document.querySelector(".modal-wrapper"),form:document.querySelector(".signin-modal-form"),errorText:document.querySelector(".signin-modal__error")};function Ue(s){localStorage.setItem("token",`${s}`),we()}const q={profileWrapper:document.querySelector(".profile-wrapper"),userInfo:document.querySelector("#user-info-js"),userCards:document.querySelector("#user-cards-js"),profileAdverts:document.querySelector(".profile-adverts"),advertsTitle:document.querySelector(".profile-adverts__title")};function He(){localStorage.removeItem("token")}function W(){document.querySelector(".inProgress-loader-wrapper").remove(),document.body.removeAttribute("lock","")}const Ne=`<div class="inProgress-loader-wrapper">
                  <div class="inProgress-loader"></div>
                </div>`;function z(){document.body.setAttribute("lock",""),document.body.insertAdjacentHTML("beforeend",Ne)}async function te(s){s.target.removeEventListener("click",te),z();try{await Ee(),He(),window.location.href="index.html"}catch(e){console.log(e)}finally{W()}}function We(s){q.userInfo.innerHTML=ze(s),Ge()}function ze(s){const{avatar:e,username:t,adress:a,phone:o,email:l}=s;return`
    <div class="user-info__thumb">
      ${Ke(e)}
      </div> 
      <div class="user-info__text-block">
        <div class="user-info__user">
          <div>
            <h2 class="user-info__title">${t}</h2>
            <p class="user-info__text">${a}</p>
            <p class="user-info__text bold">${o}</p>
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
    </div>`}function Ge(){document.querySelector(".user-info__logout").addEventListener("click",te)}function Ke(s){const e=s["small-250px"];s["medium-300px"];const t=s["big-400px"],a=e?"big-photo":"";return`
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
    </picture>`}const Re=s=>{const e=s._id;return`
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
        `},se={singinModalTitle:{ua:"Вхід",en:"Exit"},singinModalEmail:{ua:"Пошта",en:"Email"},singinModalPassword:{ua:"Пароль",en:"Password"},singinModalSubmit:{ua:"Увійти",en:"Sign in"},singinModalLink:{ua:"Зареєструватись",en:"Register"},singinModalEmailPlaceholder:{placeholder:!0,ua:"Введіть ваш емейл",en:"Enter your email"},singinModalPasswordPlaceholder:{placeholder:!0,ua:"Введіть пароль",en:"Enter your password"},singinError:{ua:"",en:""}},ee={logoutText:{ua:"Вийти",en:"Go out"},advertsTitle:{ua:"Мої оголошення:",en:"My adverts:"},deleteModalTitle:{ua:"Ви дійсно хочете видалити це оголошення?",en:"Are you sure you want to delete this advert?"},deleteModalFalse:{ua:"Ні",en:"No"},deleteModalTrue:{ua:"Так",en:"Yes"}};Object.assign(ee,se,Ae);var d,u,L,ae,C,re,M,ne,k,oe,_,K,P,ie,$,le,Z,Ye,A,ce;class Ve extends Te{constructor(t,a,o){super(t,a,o);r(this,L);r(this,C);r(this,M);r(this,k);r(this,_);r(this,P);r(this,$);r(this,Z);r(this,A);r(this,d,void 0);r(this,u,void 0)}async showMainCard(t){n(this,L,ae).call(this),await this.showCards(t)}changeCards(t){const a=t.target;if(!a.closest(".delete-btn"))return;const l=Je(a);n(this,C,re).call(this,l)}}d=new WeakMap,u=new WeakMap,L=new WeakSet,ae=function(){this.changeCards=this.changeCards.bind(this),this.listCardsEl.addEventListener("click",this.changeCards)},C=new WeakSet,re=function(t){n(this,k,oe).call(this),n(this,P,ie).call(this,t)},M=new WeakSet,ne=async function(t){z(),n(this,_,K).call(this);try{await xe(t.id),W(),await this.showCards(this.params)}catch(a){console.log(a)}},k=new WeakSet,oe=function(){document.body.setAttribute("lock","");let t=document.querySelector(".delete-modal-wrapper");if(t){t.classList.remove("is-hidden");return}t=Qe(),document.body.insertAdjacentHTML("afterbegin",t),v()==="en"&&Be(ee,"en")},_=new WeakSet,K=function(){n(this,$,le).call(this),document.querySelector(".delete-modal-wrapper").classList.add("is-hidden"),document.body.removeAttribute("lock","")},P=new WeakSet,ie=function(t){c(this,d,n(this,_,K).bind(this,t)),c(this,u,n(this,M,ne).bind(this,t));const a=document.querySelector(".delete-modal__btn_disagree"),o=document.querySelector(".delete-modal__btn_agree");a.addEventListener("click",i(this,d)),o.addEventListener("click",i(this,u))},$=new WeakSet,le=function(){const t=document.querySelector(".delete-modal__btn_disagree"),a=document.querySelector(".delete-modal__btn_agree");t.removeEventListener("click",i(this,d)),a.removeEventListener("click",i(this,u))},Z=new WeakSet,Ye=function(t){t.classList.add("is-hidden"),n(this,A,ce).call(this)&&this.setDefaultElement()},A=new WeakSet,ce=function(){const t=this.listCardsEl.querySelectorAll(".profile-adverts__card"),a=this.listCardsEl.querySelectorAll(".profile-adverts__card.is-hidden");return t.length===a.length};function Je(s){const e=s.closest(".profile-adverts__card"),t=e.dataset.id;return{cardEl:e,id:t}}function Qe(){return`
    <div class="modal-wrapper delete-modal-wrapper">
      <div class="delete-modal modal">
        <h3 class="delete-modal__title" key="deleteModalTitle">Ви дійсно хочете видалити це оголошення?</h3>
        <div class="delete-modal__btns">
          <button class="delete-modal__btn delete-modal__btn_disagree" key="deleteModalFalse" type="button">Ні</button>
          <button class="delete-modal__btn delete-modal__btn_agree" key="deleteModalTrue" type="button">Так</button>
        </div>
      </div>
    </div>
  `}const Xe=q.profileAdverts?new Ve(q.profileAdverts,qe,Re):{};async function Ze(s){s||(s=await je(),s=s.user),We(s),Xe.showMainCard()}async function et(){Fe.classList.add("is-hidden"),document.body.removeAttribute("lock",""),document.querySelector(".profile-adverts")&&await tt()}async function tt(){await Ze(),Oe(ee),q.profileWrapper.classList.remove("is-hidden")}const st={error:{ua:"",en:""}},R={"Email or password are invalid":{ua:"Електронна пошта або пароль недійсні",en:"Email or password are invalid"},'"username" length must be less than or equal to 28 characters long':{ua:"Довжина імені має бути менше або дорівнювати 28 символам",en:"Name length must be less than or equal to 28 characters long"},'"name" length must be less than or equal to 28 characters long':{ua:"Довжина назви має бути менше або дорівнювати 28 символам",en:"Name length must be less than or equal to 28 characters long"},'"password" length must be at least 6 characters long':{ua:"Довжина пароля має бути не менше 6 символів",en:"Password length must be at least 6 characters long"},'"email" fails to match the required pattern':{ua:"Домен почти неправельний",en:"The mail domain is incorrect"},'"phone" fails to match the required pattern':{ua:"Неправильно введений телефон",en:"Incorrectly entered phone number"},"Email already exists":{ua:"Електронна почта вже зайнята",en:"Email is already busy"},'"description" length must be less than or equal to 1000 characters long':{ua:"Довжина опису не повинна перевищувати 1000 символів",en:"Description length must be less than or equal to 1000 characters long"},'"wish" length must be less than or equal to 200 characters long':{ua:"Довжина побажання має бути меншою або дорівнювати 200 символам",en:"Wish length must be less than or equal to 200 characters long"},'"adress" length must be less than or equal to 60 characters long':{ua:"Довжина адреси має бути меншою або дорівнювати 60 символам",en:"Adress length must be less than or equal to 60 characters long"}},at={property:"error",settings:st};let V=v();function rt(s,e=at){const{property:t,settings:a}=e;V=v();const o=s?nt(s):!1,l=Object.assign({...R[o]},{property:t});return De(a,l),o?R[o][V]:ot()}function nt(s){for(const e in R){const t=e.split(" ");let a=!0;for(const o of t)if(!s.includes(o)){a=!1;break}if(a)return e}}function ot(){return V==="ua"?"Неправельний ввід":"Incorrectly entered"}var h,m,g,p,b,Y,T,de,D,ue,y,J,I,he,S,Q,B,me,O,ge,j,pe,w,X,F,fe,U,ve,H,_e,N,be,f,E;class it{constructor(e,t){r(this,b);r(this,T);r(this,D);r(this,y);r(this,I);r(this,S);r(this,B);r(this,O);r(this,j);r(this,w);r(this,F);r(this,U);r(this,H);r(this,N);r(this,f);r(this,h,void 0);r(this,m,void 0);r(this,g,void 0);r(this,p,void 0);this.chatEl=e.querySelector(".chat"),this.chatForm=e.querySelector(".chat-form"),this.chatText=e.querySelector(".enter-text"),this.chatPlusBtn=e.querySelector(".chat-plus-btn"),this.chatPlusList=e.querySelector(".chat-plus-list"),this.chatDeleteEl=e.querySelector(".chat-delete"),this.loader=e.querySelector(".chat-loader"),this.userAvatar=t,this.assistAvatar={"small-chat-avatar-45px":"./img/ai-assist/ai-assist-avatar/ai-assist_45.jpg","chat-avatar-75px":"./img/ai-assist/ai-assist-avatar/ai-assist_75.jpg"}}setCommunication(){this.setConversation(),this.chatPlusBtn.addEventListener("click",this.changeStatePlusPanel.bind(this)),this.chatDeleteEl.addEventListener("click",this.shawDeleteChatModal.bind(this)),n(this,b,Y).call(this)}async setConversation(){let e;try{e=await Le()}catch{e=await Ce()}const t=e.messages.map(a=>n(this,w,X).call(this,a));this.chatEl.innerHTML=t.join("")}changeStatePlusPanel(){this.chatPlusList.classList.toggle("is-hidden")}shawDeleteChatModal(e){n(this,I,he).call(this),n(this,B,me).call(this,e)}async enterSetOneSession(e){e.key==="Enter"&&this.setOneSession()}async btnSetOneSession(e){e.preventDefault(),this.setOneSession()}async setOneSession(){const e=n(this,F,fe).call(this);e.trim()===""||e.trim()===n(this,f,E).call(this)||(n(this,T,de).call(this),n(this,U,ve).call(this),n(this,y,J).call(this,{role:"user",content:e}),await n(this,D,ue).call(this,e),n(this,b,Y).call(this),this.chatText.textContent=n(this,f,E).call(this))}}h=new WeakMap,m=new WeakMap,g=new WeakMap,p=new WeakMap,b=new WeakSet,Y=function(){c(this,g,this.btnSetOneSession.bind(this)),c(this,p,this.enterSetOneSession.bind(this)),this.chatForm.addEventListener("submit",i(this,g)),document.addEventListener("keydown",i(this,p))},T=new WeakSet,de=function(){this.chatForm.removeEventListener("submit",i(this,g)),document.removeEventListener("keydown",i(this,p))},D=new WeakSet,ue=async function(e){n(this,H,_e).call(this);const t=await Me(e);n(this,y,J).call(this,t),n(this,N,be).call(this)},y=new WeakSet,J=function(e){const t=n(this,w,X).call(this,e);this.chatEl.insertAdjacentHTML("beforeend",t)},I=new WeakSet,he=function(){document.body.setAttribute("lock","");let e=document.querySelector(".delete-modal-wrapper");if(e){e.classList.remove("is-hidden");return}e=ct(),document.body.insertAdjacentHTML("afterbegin",e),v()==="en"&&translateAllPage(settings,"en")},S=new WeakSet,Q=function(){n(this,O,ge).call(this),document.querySelector(".delete-modal-wrapper").classList.add("is-hidden"),document.body.removeAttribute("lock","")},B=new WeakSet,me=function(e){c(this,h,n(this,S,Q).bind(this,e)),c(this,m,n(this,j,pe).bind(this,e));const t=document.querySelector(".delete-modal__btn_disagree"),a=document.querySelector(".delete-modal__btn_agree");t.addEventListener("click",i(this,h)),a.addEventListener("click",i(this,m))},O=new WeakSet,ge=function(){const e=document.querySelector(".delete-modal__btn_disagree"),t=document.querySelector(".delete-modal__btn_agree");e.removeEventListener("click",i(this,h)),t.removeEventListener("click",i(this,m))},j=new WeakSet,pe=async function(){z(),n(this,S,Q).call(this);try{await ke(),await this.setConversation(),this.changeStatePlusPanel(),W()}catch(e){console.log(e)}},w=new WeakSet,X=function(e){const{role:t,content:a}=e,o=t==="user"?this.userAvatar:this.assistAvatar;return`
          <li class="ai-assist-chat__message ai-assist-chat__message_${t}">
            ${lt(o)}
            <p class="ai-assist-chat__text">${a}</p>
          </li>`},F=new WeakSet,fe=function(){return new FormData(this.chatForm).get("message")},U=new WeakSet,ve=function(){this.chatForm.reset(),this.chatText.textContent=n(this,f,E).call(this)},H=new WeakSet,_e=function(){this.loader.classList.remove("is-hidden")},N=new WeakSet,be=function(){this.loader.classList.add("is-hidden")},f=new WeakSet,E=function(){return v()=="ua"?"Написати...":"Write..."};function lt(s){const e=s["small-chat-avatar-45px"],t=s["small-chat-avatar-45px"],a=s["chat-avatar-75px"];return`
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
        </picture>`}function ct(){return`
  <div class="modal-wrapper delete-modal-wrapper">
  <div class="delete-modal modal">
    <h3 class="delete-modal__title" key="deleteModalTitle">Ви дійсно хочете очистити цей чат?</h3>
    <div class="delete-modal__btns">
      <button class="delete-modal__btn delete-modal__btn_disagree" key="deleteModalFalse" type="button">Ні</button>
      <button class="delete-modal__btn delete-modal__btn_agree" key="deleteModalTrue" type="button">Так</button>
    </div>
  </div>
</div>`}const dt={aiAssist:document.querySelector(".ai-assist"),panelEnter:document.querySelector(".ai-assist-panel__enter"),panelText:document.querySelector(".ai-assist-panel__text"),chat:document.querySelector(".ai-assist-chat")};function ut(s){new it(dt.aiAssist,s.user.avatar).setCommunication()}async function ht(s){s.preventDefault(),z();const e=Ie(x.form);try{const t=await Pe(e);Ue(t.token),gt(t),await et()}catch(t){mt(t)}finally{W()}}function mt(s){var o,l;const e=(l=(o=s==null?void 0:s.response)==null?void 0:o.data)==null?void 0:l.message,a=rt(e,{property:"singinError",settings:se});x.errorText.textContent=a}function gt(s){document.querySelector(".ai-assist")&&ut(s)}function yt(){x.modalEl.classList.remove("is-hidden"),document.body.setAttribute("lock",""),x.modalEl.addEventListener("submit",ht)}export{yt as a,ee as b,se as c,z as d,st as e,W as f,rt as g,dt as h,je as i,ut as j,Xe as p,q as r,Ze as s};
