import{h as b}from"./hiddenContentLoader-DikfwQNk.js";import{a as _,c as x,b as S,p as L}from"./api-C87ePszt.js";import{g as s}from"./getValueSrcParams-BMgebK2A.js";import{c as F,s as $}from"./showPhoto-BRLbcwku.js";import{s as q,r as E}from"./setInProgressLoader-DtNgW6Wc.js";import{i as A,a as I}from"./showSigninModal-CElUbUtd.js";import"./createFormObj-DJ--Vbar.js";import"./getDataValue-Bu16Xysz.js";const e={form:document.querySelector(".form-advert"),photo:document.querySelector(".form-advert__img"),svgWrapp:document.querySelector(".form-advert__svg-wrapp"),svg:document.querySelector(".form-advert__svg"),way:document.querySelector(".form-advert-way"),wishField:document.querySelector(".form-advert__textarea-field_wish"),wishTextArea:document.querySelector(".form-advert__wish"),btnSubmit:document.querySelector(".form-advert__btn-submit"),error:document.querySelector(".formAdvert__error")};function D(r){const t=r.target;if(t.classList.contains("form-advert-way__input")){if(t.classList.contains("form-advert-way__input_give")){P();return}W()}}function P(){e.wishField.classList.add("is-hidden"),e.wishTextArea.value=""}function W(){e.wishField.classList.remove("is-hidden")}async function k(){const r=T(),t=s("id"),o=await _(t);for(const i in r){const n=`${o[i]}`;e.form[i].value=n!=="undefined"?n:""}r.way.value==="give"&&e.wishField.classList.add("is-hidden"),e.svgWrapp.innerHTML=C(o.image)}function T(){const{alergenicity:r,humidity:t,lifeDuration:o,light:i,name:n,size:c,temperature:m,way:u,wish:l,description:f,attention:v,survive:p,state:h,flowering:g,growthRate:w,edible:y}=e.form;return{alergenicity:r,humidity:t,lifeDuration:o,light:i,name:n,size:c,temperature:m,way:u,wish:l,description:f,attention:v,survive:p,state:h,flowering:g,growthRate:w,edible:y}}function C(r){const t=r["medium-300px"],o=r["medium-300px"],i=r["large-500px"];return`
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
    </picture>`}async function R(){await k(),e.btnSubmit.textContent="Зберегти"}async function a(r){r.preventDefault(),z(),q();try{const t=F(e.form),o=s("id");if(o)await x(o,t);else{const i=S();await L(t,i)}window.location.href="profile.html"}catch(t){console.log(t),M(),e.error.textContent="Неравельно ввід"}finally{E()}}async function z(){e.form.addEventListener("submit",d),e.form.removeEventListener("submit",a)}function M(){e.form.removeEventListener("submit",d),e.form.addEventListener("submit",a)}function d(r){r.preventDefault()}const O=s("id");O?await R():await A()||I();e.way.addEventListener("click",D);e.photo.onchange=$.bind(void 0,e.photo);e.form.addEventListener("submit",a);b();
