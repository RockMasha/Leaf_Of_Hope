import{h as _}from"./getCurrentLanguage-CVvCI2XH.js";import{c as L}from"./changeSettingsValue-79FUIYGn.js";import{a as E,c as F,b as $,p as q}from"./api-DfoCCC7a.js";import{g as n}from"./getValueSrcParams-BMgebK2A.js";import{e as D,s as P,c as T,r as A,g as I}from"./getErrorText-DgyegVqw.js";import{p as k}from"./propertiesSettings-Cdfy4mIZ.js";import{c as W,i as C,a as O}from"./showSigninModal-DVTZvExo.js";import{c as R}from"./chanhePage-Be1AtWlB.js";import{c as j,s as M}from"./checkLogin-BXok5C-4.js";import{s as V}from"./setSwitchLanguage-CNDyctra.js";import"./createFormObj-Y553ypyI.js";import"./cardData-CybJiSso.js";import"./getDataValue-BP7sZYwO.js";import"./createToken-OR5GYWs4.js";import"./setCurrentLanguage-B3yJ7-V5.js";const r={form:document.querySelector(".form-advert"),photo:document.querySelector(".form-advert__img"),svgWrapp:document.querySelector(".form-advert__svg-wrapp"),svg:document.querySelector(".form-advert__svg"),way:document.querySelector(".form-advert-way"),wishField:document.querySelector(".form-advert__textarea-field_wish"),wishTextArea:document.querySelector(".form-advert__wish"),btnSubmit:document.querySelector(".form-advert__btn-submit"),error:document.querySelector(".formAdvert__error")};function z(e){const t=e.target;if(t.classList.contains("form-advert-way__input")){if(t.classList.contains("form-advert-way__input_give")){H();return}B()}}function H(){r.wishField.classList.add("is-hidden"),r.wishTextArea.value=""}function B(){r.wishField.classList.remove("is-hidden")}async function G(){const e=J(),t=n("id"),o=await E(t);for(const a in e){const i=`${o[a]}`;r.form[a].value=i!=="undefined"?i:""}e.way.value==="give"&&r.wishField.classList.add("is-hidden"),r.svgWrapp.innerHTML=K(o.image)}function J(){const{name:e,way:t,wish:o,description:a,toxicity:i,plantCondition:d,plantType:u,height:l,light:f,temperature:p,watering:g,care:h,substrate:v,windowDistance:w,allergenicity:y,growthRate:b,lifeDuration:x,rarity:S}=r.form;return{name:e,way:t,wish:o,description:a,toxicity:i,plantCondition:d,plantType:u,height:l,light:f,temperature:p,watering:g,care:h,substrate:v,windowDistance:w,allergenicity:y,growthRate:b,lifeDuration:x,rarity:S}}function K(e){const t=e["medium-300px"],o=e["medium-300px"],a=e["large-500px"];return`
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
    </picture>`}const s={namePlaceholder:{placeholder:!0,ua:"Введіть назву рослини",en:"Enter the name of the plant"},descriptionPlaceholder:{placeholder:!0,ua:"Опишіть вашу рослинку",en:"Describe your plant"},wishPlaceholder:{placeholder:!0,ua:"На що б ви хотіли обміняти цю рослину?",en:"What would you like to exchange this plant for?"},submitText:{ua:"Створити",en:"Create"}};Object.assign(s,k,W,D);async function N(){await G(),r.btnSubmit.textContent="Зберегти",L(s,{property:"submitText",en:"Save",ua:"Зберегти"})}async function c(e){e.preventDefault(),U(),P();try{const t=n("id"),o=T(r.form);if(o.get("lang")||o.set("lang","ua"),t)await F(t,o);else{const a=$();await q(o,a)}R("profile.html")}catch(t){Q(t),X()}finally{A()}}function Q(e){var a,i;console.log(e);const t=(i=(a=e==null?void 0:e.response)==null?void 0:a.data)==null?void 0:i.message,o=I(t);r.error.textContent=o}async function U(){r.form.addEventListener("submit",m),r.form.removeEventListener("submit",c)}function X(){r.form.removeEventListener("submit",m),r.form.addEventListener("submit",c)}function m(e){e.preventDefault()}const Y=n("id");Y?(await j(),await N()):await C()||O();r.way.addEventListener("click",z);r.photo.onchange=M.bind(void 0,r.photo);r.form.addEventListener("submit",c);V(s);_();
