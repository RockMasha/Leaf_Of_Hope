import{h as S}from"./setCurrentLanguage-0poYnjjN.js";import{c as _}from"./changeSettingsValue-79FUIYGn.js";import{a as L,c as E,b as F,p as $}from"./api-CZvNR4Wc.js";import{g as n}from"./getValueSrcParams-BMgebK2A.js";import{e as q,s as D,r as T,g as A}from"./getErrorText-PHBbjS-o.js";import{p as I}from"./propertiesSettings-DpaMImoB.js";import{c as P,i as W,a as k}from"./showSigninModal-Bjzg6lch.js";import{c as C,s as O}from"./showPhoto-BRLbcwku.js";import{s as R}from"./setSwitchLanguage-BbQiSuXy.js";import"./createFormObj-DBdvGM74.js";import"./getDataValue-DJk4az9Q.js";const r={form:document.querySelector(".form-advert"),photo:document.querySelector(".form-advert__img"),svgWrapp:document.querySelector(".form-advert__svg-wrapp"),svg:document.querySelector(".form-advert__svg"),way:document.querySelector(".form-advert-way"),wishField:document.querySelector(".form-advert__textarea-field_wish"),wishTextArea:document.querySelector(".form-advert__wish"),btnSubmit:document.querySelector(".form-advert__btn-submit"),error:document.querySelector(".formAdvert__error")};function j(e){const t=e.target;if(t.classList.contains("form-advert-way__input")){if(t.classList.contains("form-advert-way__input_give")){M();return}V()}}function M(){r.wishField.classList.add("is-hidden"),r.wishTextArea.value=""}function V(){r.wishField.classList.remove("is-hidden")}async function z(){const e=H(),t=n("id"),o=await L(t);for(const a in e){const i=`${o[a]}`;r.form[a].value=i!=="undefined"?i:""}e.way.value==="give"&&r.wishField.classList.add("is-hidden"),r.svgWrapp.innerHTML=B(o.image)}function H(){const{name:e,way:t,wish:o,description:a,toxicity:i,plantCondition:m,plantType:u,height:l,light:f,temperature:p,watering:g,care:h,substrate:v,windowDistance:w,allergenicity:y,growthRate:b,lifeDuration:x}=r.form;return{name:e,way:t,wish:o,description:a,toxicity:i,plantCondition:m,plantType:u,height:l,light:f,temperature:p,watering:g,care:h,substrate:v,windowDistance:w,allergenicity:y,growthRate:b,lifeDuration:x}}function B(e){const t=e["medium-300px"],o=e["medium-300px"],a=e["large-500px"];return`
    <picture class="form-advert__svg big-photo">
      <source
        srcset="
        ${a} 1x,
        ${a} 2x"
        media="(min-width: 1440px)"
      />
      <source
        srcset="
        ${o} 1x,
        ${o} 2x"
        media="(min-width: 768px)"
      />
      <source
        srcset="
        ${t} 1x,
        ${t} 2x"
      />
      <img
        src="${t}"
        srcset="
        ${t} 1x,
        ${t} 2x"
        class="form-advert__svg big-photo"
        alt="plant"
        loading="lazy"
      />
    </picture>`}const s={namePlaceholder:{placeholder:!0,ua:"Введіть назву рослини",en:"Enter the name of the plant"},descriptionPlaceholder:{placeholder:!0,ua:"Опишіть вашу рослинку",en:"Describe your plant"},wishPlaceholder:{placeholder:!0,ua:"На що б ви хотіли обміняти цю рослину?",en:"What would you like to exchange this plant for?"},submitText:{ua:"Створити",en:"Create"}};Object.assign(s,I,P,q);async function G(){await z(),r.btnSubmit.textContent="Зберегти",_(s,{property:"submitText",en:"Save",ua:"Зберегти"})}async function c(e){e.preventDefault(),K(),D();try{const t=n("id"),o=C(r.form);if(o.get("lang")||o.set("lang","ua"),t)await E(t,o);else{const a=F();await $(o,a)}window.location.href="profile.html"}catch(t){J(t),N()}finally{T()}}function J(e){var a,i;const t=(i=(a=e==null?void 0:e.response)==null?void 0:a.data)==null?void 0:i.message,o=A(t);r.error.textContent=o}async function K(){r.form.addEventListener("submit",d),r.form.removeEventListener("submit",c)}function N(){r.form.removeEventListener("submit",d),r.form.addEventListener("submit",c)}function d(e){e.preventDefault()}const Q=n("id");Q?await G():await W()||k();r.way.addEventListener("click",j);r.photo.onchange=O.bind(void 0,r.photo);r.form.addEventListener("submit",c);R(s);S();
