import{h as y}from"./hiddenContentLoader-Ds56KOrg.js";import{b as _,c as b,e as S,p as L}from"./api-BnmDMCHo.js";import{g as n}from"./getValueSrcParams-BMgebK2A.js";import{c as x,s as q}from"./showPhoto-BLcMjZRy.js";import{s as E,r as F}from"./setInProgressLoader-BAB2lVXe.js";import{i as A}from"./isSignin-BhUNpdbv.js";const e={form:document.querySelector(".form-advert"),photo:document.querySelector(".form-advert__img"),svgWrapp:document.querySelector(".form-advert__svg-wrapp"),svg:document.querySelector(".form-advert__svg"),way:document.querySelector(".form-advert-way"),wishField:document.querySelector(".form-advert__textarea-field_wish"),wishTextArea:document.querySelector(".form-advert__wish"),btnSubmit:document.querySelector(".form-advert__btn-submit"),error:document.querySelector(".formAdvert__error")};function I(r){const t=r.target;if(t.classList.contains("form-advert-way__input")){if(t.classList.contains("form-advert-way__input_give")){P();return}D()}}function P(){e.wishField.classList.add("is-hidden"),e.wishTextArea.value=""}function D(){e.wishField.classList.remove("is-hidden")}async function W(){const{alergenicity:r,humidity:t,lifeDuration:o,light:i,name:l,size:f,temperature:v,way:p,wish:g,description:h}=e.form,a={alergenicity:r,humidity:t,lifeDuration:o,light:i,name:l,size:f,temperature:v,way:p,wish:g,description:h},w=n("id"),m=await _(w);for(const c in a){const d=`${m[c]}`;a[c].value=d!=="undefined"?d:""}e.svgWrapp.innerHTML=$(m.image)}function $(r){const t=r["small-250px"],o=r["medium-300px"];return`
    <picture class="form-advert__svg big-photo">
      <source
        srcset="${r["large-500px"]}"
        media="(min-width: 1440px)"
      />
      <source
        srcset="${o}"
        media="(min-width: 768px)"
      />
      <source
        srcset="${t}"
      />
      <img
        src="${t||"./img/universal/defoultPlantPhoto.jpg"}"
        class="form-advert__svg big-photo"
        alt="plant"
        loading="lazy"
      />
    </picture>`}async function k(){await W(),e.btnSubmit.textContent="Зберегти"}async function s(r){r.preventDefault(),T(),E();try{const t=x(e.form),o=n("id");if(o)await b(o,t);else{const i=S();await L(t,i)}window.location.href="profile.html"}catch(t){console.log(t),C(),e.error.textContent="Неравельно ввід"}finally{F()}}async function T(){e.form.addEventListener("submit",u),e.form.removeEventListener("submit",s)}function C(){e.form.removeEventListener("submit",u),e.form.addEventListener("submit",s)}function u(r){r.preventDefault()}const z=n("id");z?await k():await A();e.way.addEventListener("click",I);e.photo.onchange=q.bind(void 0,e.photo);e.form.addEventListener("submit",s);y();
