import{h as S}from"./setCurrentLanguage-NOXEc7TY.js";import{c as _}from"./changeSettingsValue-79FUIYGn.js";import{a as x,c as L,b as E,p as F}from"./api-BBffhmo6.js";import{g as s}from"./getValueSrcParams-BMgebK2A.js";import{e as $,s as q,r as A,g as D}from"./getErrorText-ByzvEy06.js";import{p as I}from"./propertiesSettings-B1L4uMac.js";import{c as P,i as T,a as W}from"./showSigninModal-C-0DE8ri.js";import{c as k,s as C}from"./showPhoto-BRLbcwku.js";import{s as O}from"./setSwitchLanguage-BD8z4uMl.js";import"./createFormObj-BJ-kS3To.js";import"./getUkraineDataValue-Ds0VW_Xj.js";const r={form:document.querySelector(".form-advert"),photo:document.querySelector(".form-advert__img"),svgWrapp:document.querySelector(".form-advert__svg-wrapp"),svg:document.querySelector(".form-advert__svg"),way:document.querySelector(".form-advert-way"),wishField:document.querySelector(".form-advert__textarea-field_wish"),wishTextArea:document.querySelector(".form-advert__wish"),btnSubmit:document.querySelector(".form-advert__btn-submit"),error:document.querySelector(".formAdvert__error")};function R(e){const t=e.target;if(t.classList.contains("form-advert-way__input")){if(t.classList.contains("form-advert-way__input_give")){j();return}z()}}function j(){r.wishField.classList.add("is-hidden"),r.wishTextArea.value=""}function z(){r.wishField.classList.remove("is-hidden")}async function M(){const e=V(),t=s("id"),o=await x(t);for(const i in e){const a=`${o[i]}`;r.form[i].value=a!=="undefined"?a:""}e.way.value==="give"&&r.wishField.classList.add("is-hidden"),r.svgWrapp.innerHTML=H(o.image)}function V(){const{alergenicity:e,humidity:t,lifeDuration:o,light:i,name:a,size:m,temperature:u,way:l,wish:f,description:p,attention:g,survive:h,state:v,flowering:w,growthRate:b,edible:y}=r.form;return{alergenicity:e,humidity:t,lifeDuration:o,light:i,name:a,size:m,temperature:u,way:l,wish:f,description:p,attention:g,survive:h,state:v,flowering:w,growthRate:b,edible:y}}function H(e){const t=e["medium-300px"],o=e["medium-300px"],i=e["large-500px"];return`
    <picture class="form-advert__svg big-photo">
      <source
        srcset="
        ${i} 1x,
        ${i} 2x"
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
    </picture>`}const n={namePlaceholder:{placeholder:!0,ua:"Введіть назву рослини",en:"Enter the name of the plant"},descriptionPlaceholder:{placeholder:!0,ua:"Опишіть вашу рослинку",en:"Describe your plant"},wishPlaceholder:{placeholder:!0,ua:"На що б ви хотіли обміняти цю рослину?",en:"What would you like to exchange this plant for?"},submitText:{ua:"Створити",en:"Create"}};Object.assign(n,I,P,$);async function B(){await M(),r.btnSubmit.textContent="Зберегти",_(n,{property:"submitText",en:"Save",ua:"Зберегти"})}async function c(e){e.preventDefault(),J(),q();try{const t=s("id"),o=k(r.form);if(o.get("lang")||o.set("lang","ua"),t)await L(t,o);else{const i=E();await F(o,i)}window.location.href="profile.html"}catch(t){G(t),K()}finally{A()}}function G(e){var i,a;const t=(a=(i=e==null?void 0:e.response)==null?void 0:i.data)==null?void 0:a.message,o=D(t);r.error.textContent=o}async function J(){r.form.addEventListener("submit",d),r.form.removeEventListener("submit",c)}function K(){r.form.removeEventListener("submit",d),r.form.addEventListener("submit",c)}function d(e){e.preventDefault()}const N=s("id");N?await B():await T()||W();r.way.addEventListener("click",R);r.photo.onchange=C.bind(void 0,r.photo);r.form.addEventListener("submit",c);O(n);S();
