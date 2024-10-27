import{h as y}from"./hiddenContentLoader-DgUHe6EP.js";import{a as _,c as S,b as L,p as F}from"./api-C87ePszt.js";import{g as s}from"./getValueSrcParams-BMgebK2A.js";import{c as x,s as q}from"./showPhoto-BLcMjZRy.js";import{s as E,r as I}from"./setInProgressLoader-DtNgW6Wc.js";import{i as A,a as P}from"./showSigninModal-mFLWSxhQ.js";import"./createFormObj-BsGF3NHA.js";import"./getDataValue-CDujFWLP.js";const e={form:document.querySelector(".form-advert"),photo:document.querySelector(".form-advert__img"),svgWrapp:document.querySelector(".form-advert__svg-wrapp"),svg:document.querySelector(".form-advert__svg"),way:document.querySelector(".form-advert-way"),wishField:document.querySelector(".form-advert__textarea-field_wish"),wishTextArea:document.querySelector(".form-advert__wish"),btnSubmit:document.querySelector(".form-advert__btn-submit"),error:document.querySelector(".formAdvert__error")};function D(t){const r=t.target;if(r.classList.contains("form-advert-way__input")){if(r.classList.contains("form-advert-way__input_give")){W();return}$()}}function W(){e.wishField.classList.add("is-hidden"),e.wishTextArea.value=""}function $(){e.wishField.classList.remove("is-hidden")}async function k(){const t=T(),r=s("id"),o=await _(r);for(const i in t){const n=`${o[i]}`;e.form[i].value=n!=="undefined"?n:""}t.way.value==="give"&&e.wishField.classList.add("is-hidden"),e.svgWrapp.innerHTML=C(o.image)}function T(){const{alergenicity:t,humidity:r,lifeDuration:o,light:i,name:n,size:m,temperature:c,way:u,wish:l,description:f,attention:v,survive:p,state:g,flowering:h,growthRate:w,edible:b}=e.form;return{alergenicity:t,humidity:r,lifeDuration:o,light:i,name:n,size:m,temperature:c,way:u,wish:l,description:f,attention:v,survive:p,state:g,flowering:h,growthRate:w,edible:b}}function C(t){const r=t["small-250px"],o=t["medium-300px"];return`
    <picture class="form-advert__svg big-photo">
      <source
        srcset="${t["large-500px"]}"
        media="(min-width: 1440px)"
      />
      <source
        srcset="${o}"
        media="(min-width: 768px)"
      />
      <source
        srcset="${r}"
      />
      <img
        src="${r||"./img/universal/defoultPlantPhoto.jpg"}"
        class="form-advert__svg big-photo"
        alt="plant"
        loading="lazy"
      />
    </picture>`}async function R(){await k(),e.btnSubmit.textContent="Зберегти"}async function a(t){t.preventDefault(),j(),E();try{const r=x(e.form),o=s("id");if(o)await S(o,r);else{const i=L();await F(r,i)}window.location.href="profile.html"}catch(r){console.log(r),z(),e.error.textContent="Неравельно ввід"}finally{I()}}async function j(){e.form.addEventListener("submit",d),e.form.removeEventListener("submit",a)}function z(){e.form.removeEventListener("submit",d),e.form.addEventListener("submit",a)}function d(t){t.preventDefault()}const M=s("id");M?await R():await A()||P();e.way.addEventListener("click",D);e.photo.onchange=q.bind(void 0,e.photo);e.form.addEventListener("submit",a);y();
