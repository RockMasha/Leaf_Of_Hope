import{h as x}from"./setCurrentLanguage-DtO1VHaQ.js";import{c as _}from"./createFormObj-D5G6YD8H.js";import{b as L,d as E,e as D,p as F}from"./getDataValue-9dXxiyqd.js";import{g as d}from"./getValueSrcParams-BMgebK2A.js";import{c as q,e as $,d as T,r as I,g as A,i as P,a as W}from"./showSigninModal-CnTD0gSZ.js";import{p as k}from"./propertiesSettings-DpaMImoB.js";import{s as C}from"./setSwitchLanguage-DJQPoVWm.js";const n={form:document.querySelector(".form-advert"),photo:document.querySelector(".form-advert__img"),svgWrapp:document.querySelector(".form-advert__svg-wrapp"),svg:document.querySelector(".form-advert__svg"),way:document.querySelector(".form-advert-way"),wishField:document.querySelector(".form-advert__textarea-field_wish"),wishTextArea:document.querySelector(".form-advert__wish"),btnSubmit:document.querySelector(".form-advert__btn-submit"),error:document.querySelector(".formAdvert__error")};function R(e){const t=e.target;if(t.classList.contains("form-advert-way__input")){if(t.classList.contains("form-advert-way__input_give")){M();return}O()}}function M(){n.wishField.classList.add("is-hidden"),n.wishTextArea.value=""}function O(){n.wishField.classList.remove("is-hidden")}async function H(){const e=j(),t=d("id"),r=await L(t);for(const o in e){const i=`${r[o]}`;n.form[o].value=i!=="undefined"?i:""}e.way.value==="give"&&n.wishField.classList.add("is-hidden"),n.svgWrapp.innerHTML=V(r.image)}function j(){const{name:e,way:t,wish:r,description:o,toxicity:i,plantCondition:a,plantType:s,height:c,light:f,temperature:g,watering:p,care:h,substrate:v,windowDistance:w,allergenicity:y,growthRate:b,lifeDuration:S}=n.form;return{name:e,way:t,wish:r,description:o,toxicity:i,plantCondition:a,plantType:s,height:c,light:f,temperature:g,watering:p,care:h,substrate:v,windowDistance:w,allergenicity:y,growthRate:b,lifeDuration:S}}function V(e){const t=e["medium-300px"],r=e["medium-300px"],o=e["large-500px"];return`
    <picture class="form-advert__svg big-photo">
      <source
        srcset="
        ${o} 1x,
        ${o} 2x"
        media="(min-width: 1440px)"
      />
      <source
        srcset="
        ${r} 1x,
        ${r} 2x"
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
    </picture>`}const m={namePlaceholder:{placeholder:!0,ua:"Введіть назву рослини",en:"Enter the name of the plant"},descriptionPlaceholder:{placeholder:!0,ua:"Опишіть вашу рослинку",en:"Describe your plant"},wishPlaceholder:{placeholder:!0,ua:"На що б ви хотіли обміняти цю рослину?",en:"What would you like to exchange this plant for?"},submitText:{ua:"Створити",en:"Create"}};Object.assign(m,k,q,$);async function z(){await H(),n.btnSubmit.textContent="Зберегти",_(m,{property:"submitText",en:"Save",ua:"Зберегти"})}function U(e){return new FormData(e)}async function u(e){e.preventDefault(),G(),T();try{const t=d("id"),r=U(n.form);if(r.get("lang")||r.set("lang","ua"),t)await E(t,r);else{const o=D();await F(r,o)}window.location.href="profile.html"}catch(t){B(t),J()}finally{I()}}function B(e){var o,i;console.log(e);const t=(i=(o=e==null?void 0:e.response)==null?void 0:o.data)==null?void 0:i.message,r=A(t);n.error.textContent=r}async function G(){n.form.addEventListener("submit",l),n.form.removeEventListener("submit",u)}function J(){n.form.removeEventListener("submit",l),n.form.addEventListener("submit",u)}function l(e){e.preventDefault()}function K(e){const t=e.querySelector(".img-wrapp"),r=t.querySelector("img"),i=e.querySelector("input[type=file]").files[0],a=new FileReader;a.addEventListener("load",s,!1),i&&a.readAsDataURL(i);function s(){r.src=a.result,r.srcset=`${a.result} 1x, ${a.result} 2x`,r.classList.contains("big-photo")||r.classList.add("big-photo");const c=r.outerHTML;t.innerHTML=c}}const N=d("id");N?await z():await P()||W();n.way.addEventListener("click",R);n.photo.onchange=K.bind(void 0,n.photo);n.form.addEventListener("submit",u);C(m);x();
