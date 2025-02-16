import{h as _}from"./getCurrentLanguage-DEWq27zJ.js";import{c as L}from"./changeSettingsValue-79FUIYGn.js";import{a as E,c as F,b as $,p as q}from"./api-3qFQw6mT.js";import{g as n}from"./getValueSrcParams-BMgebK2A.js";import{e as D,s as T,c as A,r as I,g as P}from"./getErrorText-0fHjodZm.js";import{p as W}from"./propertiesSettings-Cdfy4mIZ.js";import{c as k,i as C,a as O}from"./showSigninModal-Dqh8zcNt.js";import{s as R}from"./showPhoto-C-J7rVy8.js";import{s as j}from"./setSwitchLanguage-CcQIDv7t.js";import"./createToken-FTQcBlPj.js";import"./createFormObj-C2aXlj3F.js";import"./cardData-CybJiSso.js";import"./getDataValue-DqxqGyeP.js";import"./setCurrentLanguage-BDYY6lHY.js";const r={form:document.querySelector(".form-advert"),photo:document.querySelector(".form-advert__img"),svgWrapp:document.querySelector(".form-advert__svg-wrapp"),svg:document.querySelector(".form-advert__svg"),way:document.querySelector(".form-advert-way"),wishField:document.querySelector(".form-advert__textarea-field_wish"),wishTextArea:document.querySelector(".form-advert__wish"),btnSubmit:document.querySelector(".form-advert__btn-submit"),error:document.querySelector(".formAdvert__error")};function M(e){const t=e.target;if(t.classList.contains("form-advert-way__input")){if(t.classList.contains("form-advert-way__input_give")){V();return}z()}}function V(){r.wishField.classList.add("is-hidden"),r.wishTextArea.value=""}function z(){r.wishField.classList.remove("is-hidden")}async function H(){const e=B(),t=n("id"),o=await E(t);for(const i in e){const a=`${o[i]}`;r.form[i].value=a!=="undefined"?a:""}e.way.value==="give"&&r.wishField.classList.add("is-hidden"),r.svgWrapp.innerHTML=G(o.image)}function B(){const{name:e,way:t,wish:o,description:i,toxicity:a,plantCondition:d,plantType:u,height:l,light:f,temperature:p,watering:g,care:h,substrate:v,windowDistance:w,allergenicity:y,growthRate:b,lifeDuration:x,rarity:S}=r.form;return{name:e,way:t,wish:o,description:i,toxicity:a,plantCondition:d,plantType:u,height:l,light:f,temperature:p,watering:g,care:h,substrate:v,windowDistance:w,allergenicity:y,growthRate:b,lifeDuration:x,rarity:S}}function G(e){const t=e["medium-300px"],o=e["medium-300px"],i=e["large-500px"];return`
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
    </picture>`}const s={namePlaceholder:{placeholder:!0,ua:"Введіть назву рослини",en:"Enter the name of the plant"},descriptionPlaceholder:{placeholder:!0,ua:"Опишіть вашу рослинку",en:"Describe your plant"},wishPlaceholder:{placeholder:!0,ua:"На що б ви хотіли обміняти цю рослину?",en:"What would you like to exchange this plant for?"},submitText:{ua:"Створити",en:"Create"}};Object.assign(s,W,k,D);async function J(){await H(),r.btnSubmit.textContent="Зберегти",L(s,{property:"submitText",en:"Save",ua:"Зберегти"})}async function c(e){e.preventDefault(),N(),T();try{const t=n("id"),o=A(r.form);if(o.get("lang")||o.set("lang","ua"),t)await F(t,o);else{const i=$();await q(o,i)}window.location.href="profile.html"}catch(t){K(t),Q()}finally{I()}}function K(e){var i,a;console.log(e);const t=(a=(i=e==null?void 0:e.response)==null?void 0:i.data)==null?void 0:a.message,o=P(t);r.error.textContent=o}async function N(){r.form.addEventListener("submit",m),r.form.removeEventListener("submit",c)}function Q(){r.form.removeEventListener("submit",m),r.form.addEventListener("submit",c)}function m(e){e.preventDefault()}const U=n("id");U?await J():await C()||O();r.way.addEventListener("click",M);r.photo.onchange=R.bind(void 0,r.photo);r.form.addEventListener("submit",c);j(s);_();
