import{h as _}from"./setCurrentLanguage-Bvpoq5JC.js";import{c as S}from"./changeSettingsValue-79FUIYGn.js";import{a as x,c as L,b as F,p as $}from"./api-CZvNR4Wc.js";import{g as n}from"./getValueSrcParams-BMgebK2A.js";import{p as E}from"./propertiesSettings-B1L4uMac.js";import{c as q,i as A,a as D}from"./showSigninModal-C2c1EDNa.js";import{c as I,s as P}from"./showPhoto-BRLbcwku.js";import{s as T,r as W}from"./setInProgressLoader-BvJ9Zrz-.js";import{s as k}from"./setSwitchLanguage-C6bkzce6.js";import"./createFormObj-D7ulFSlZ.js";import"./getUkraineDataValue-BN_FPkab.js";const e={form:document.querySelector(".form-advert"),photo:document.querySelector(".form-advert__img"),svgWrapp:document.querySelector(".form-advert__svg-wrapp"),svg:document.querySelector(".form-advert__svg"),way:document.querySelector(".form-advert-way"),wishField:document.querySelector(".form-advert__textarea-field_wish"),wishTextArea:document.querySelector(".form-advert__wish"),btnSubmit:document.querySelector(".form-advert__btn-submit"),error:document.querySelector(".formAdvert__error")};function C(r){const t=r.target;if(t.classList.contains("form-advert-way__input")){if(t.classList.contains("form-advert-way__input_give")){O();return}R()}}function O(){e.wishField.classList.add("is-hidden"),e.wishTextArea.value=""}function R(){e.wishField.classList.remove("is-hidden")}async function j(){const r=z(),t=n("id"),o=await x(t);for(const i in r){const a=`${o[i]}`;e.form[i].value=a!=="undefined"?a:""}r.way.value==="give"&&e.wishField.classList.add("is-hidden"),e.svgWrapp.innerHTML=M(o.image)}function z(){const{alergenicity:r,humidity:t,lifeDuration:o,light:i,name:a,size:m,temperature:u,way:l,wish:f,description:p,attention:h,survive:g,state:v,flowering:w,growthRate:b,edible:y}=e.form;return{alergenicity:r,humidity:t,lifeDuration:o,light:i,name:a,size:m,temperature:u,way:l,wish:f,description:p,attention:h,survive:g,state:v,flowering:w,growthRate:b,edible:y}}function M(r){const t=r["medium-300px"],o=r["medium-300px"],i=r["large-500px"];return`
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
    </picture>`}const s={namePlaceholder:{placeholder:!0,ua:"Введіть назву рослини",en:"Enter the name of the plant"},descriptionPlaceholder:{placeholder:!0,ua:"Опишіть вашу рослинку",en:"Describe your plant"},wishPlaceholder:{placeholder:!0,ua:"На що б ви хотіли обміняти цю рослину?",en:"What would you like to exchange this plant for?"},submitText:{ua:"Створити",en:"Create"}};Object.assign(s,E,q);async function V(){await j(),e.btnSubmit.textContent="Зберегти",S(s,{property:"submitText",en:"Save",ua:"Зберегти"})}async function c(r){r.preventDefault(),H(),T();try{const t=n("id"),o=I(e.form);if(o.get("lang")||o.set("lang","ua"),t)await L(t,o);else{const i=F();await $(o,i)}window.location.href="profile.html"}catch(t){B(),e.error.textContent=`Неравельно ввід: ${t.response.data.message}`}finally{W()}}async function H(){e.form.addEventListener("submit",d),e.form.removeEventListener("submit",c)}function B(){e.form.removeEventListener("submit",d),e.form.addEventListener("submit",c)}function d(r){r.preventDefault()}const G=n("id");G?await V():await A()||D();e.way.addEventListener("click",C);e.photo.onchange=P.bind(void 0,e.photo);e.form.addEventListener("submit",c);k(s);_();
