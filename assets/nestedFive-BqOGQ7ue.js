import{h as _}from"./setCurrentLanguage-CJZyqsh0.js";import{c as S,a as x,s as L}from"./showPhoto-Dqlw9-i9.js";import{a as F,c as $,b as E,p as q}from"./api-BMUXg3mB.js";import{g as n}from"./getValueSrcParams-BMgebK2A.js";import{p as A}from"./propertiesSettings-B1L4uMac.js";import{s as D,r as I}from"./setInProgressLoader-BLew8mDa.js";import{i as P,a as T}from"./showSigninModal-DZaGpdzE.js";import{s as W}from"./setSwitchLanguage-oS9WtCGq.js";import"./createFormObj-BbTY6VS_.js";import"./getUkraineDataValue-jTDJ14QS.js";const e={form:document.querySelector(".form-advert"),photo:document.querySelector(".form-advert__img"),svgWrapp:document.querySelector(".form-advert__svg-wrapp"),svg:document.querySelector(".form-advert__svg"),way:document.querySelector(".form-advert-way"),wishField:document.querySelector(".form-advert__textarea-field_wish"),wishTextArea:document.querySelector(".form-advert__wish"),btnSubmit:document.querySelector(".form-advert__btn-submit"),error:document.querySelector(".formAdvert__error")};function k(r){const t=r.target;if(t.classList.contains("form-advert-way__input")){if(t.classList.contains("form-advert-way__input_give")){C();return}O()}}function C(){e.wishField.classList.add("is-hidden"),e.wishTextArea.value=""}function O(){e.wishField.classList.remove("is-hidden")}async function R(){const r=j(),t=n("id"),o=await F(t);for(const a in r){const i=`${o[a]}`;e.form[a].value=i!=="undefined"?i:""}r.way.value==="give"&&e.wishField.classList.add("is-hidden"),e.svgWrapp.innerHTML=z(o.image)}function j(){const{alergenicity:r,humidity:t,lifeDuration:o,light:a,name:i,size:m,temperature:u,way:l,wish:f,description:p,attention:h,survive:g,state:v,flowering:w,growthRate:b,edible:y}=e.form;return{alergenicity:r,humidity:t,lifeDuration:o,light:a,name:i,size:m,temperature:u,way:l,wish:f,description:p,attention:h,survive:g,state:v,flowering:w,growthRate:b,edible:y}}function z(r){const t=r["medium-300px"],o=r["medium-300px"],a=r["large-500px"];return`
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
    </picture>`}const s={namePlaceholder:{placeholder:!0,ua:"Введіть назву рослини",en:"Enter the name of the plant"},descriptionPlaceholder:{placeholder:!0,ua:"Опишіть вашу рослинку",en:"Describe your plant"},wishPlaceholder:{placeholder:!0,ua:"На що б ви хотіли обміняти цю рослину?",en:"What would you like to exchange this plant for?"},submitText:{ua:"Створити",en:"Create"}};Object.assign(s,A);async function M(){await R(),e.btnSubmit.textContent="Зберегти",S(s,{property:"submitText",en:"Save",ua:"Зберегти"})}async function c(r){r.preventDefault(),V(),D();try{const t=n("id"),o=x(e.form);if(o.get("lang")||o.set("lang","ua"),t)await $(t,o);else{const a=E();await q(o,a)}window.location.href="profile.html"}catch(t){H(),e.error.textContent=`Неравельно ввід: ${t.response.data.message}`}finally{I()}}async function V(){e.form.addEventListener("submit",d),e.form.removeEventListener("submit",c)}function H(){e.form.removeEventListener("submit",d),e.form.addEventListener("submit",c)}function d(r){r.preventDefault()}const B=n("id");B?await M():await P()||T();e.way.addEventListener("click",k);e.photo.onchange=L.bind(void 0,e.photo);e.form.addEventListener("submit",c);W(s);_();
