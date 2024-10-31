import{h as u}from"./hiddenContentLoader-RgNmBLIv.js";import{g as p}from"./getValueSrcParams-BMgebK2A.js";import{r as l,h as f,d}from"./api-C87ePszt.js";import{s as g,c as h,r as _}from"./setInProgressLoader-DtNgW6Wc.js";import{c as b,s as v}from"./showPhoto-BRLbcwku.js";import{s as w}from"./setSwitchLanguage-DTPAQ0s7.js";import"./setCurrentLanguage-BjUyqyx0.js";function m(){return!!p("redact")}const e={form:document.querySelector(".change-profile-form"),title:document.querySelector(".change-profile__title"),photo:document.querySelector(".change-profile-form__img"),svgWrapp:document.querySelector(".change-profile-form__svg-wpapp"),password:document.querySelector(".change-profile-form__enter_password"),email:document.querySelector(".change-profile-form__enter_email"),btnSubmit:document.querySelector(".change-profile-form__btn-submit"),error:document.querySelector(".change-profile__error")};async function a(r){r.preventDefault(),x(),g();try{const t=b(e.form);if(m())await l(t);else{const o=await f(t);h(o.token)}window.location.href="profile.html"}catch{e.error.textContent="Неравельно ввід або такий юзер вже є",y()}finally{_()}}function x(){e.form.addEventListener("submit",c),e.form.removeEventListener("submit",a)}function y(){e.form.removeEventListener("submit",c),e.form.addEventListener("submit",a)}function c(r){r.preventDefault()}function S(){e.password.innerHTML=`
              Пароль
              <input
                class="change-profile-form__input change-profile-form__input_password"
                type="password"
                placeholder="Ведіть пароль"
                name="password"
                required
              />`,e.email.innerHTML=`
              Пошта
              <input
                class="change-profile-form__input change-profile-form__input_email"
                type="email"
                placeholder="Ведіть ваш емейл"
                name="email"
                required
              />`,e.title.textContent="Реєстрація",e.btnSubmit.textContent="Cтворити"}async function L(){const{username:r,adress:t,phone:o}=e.form,n={username:r,adress:t,phone:o},{user:s}=await d();for(const i in n)n[i].value=s[i];e.svgWrapp.innerHTML=q(s.avatar)}function q(r){const t=r["small-250px"],o=r["big-400px"],n=r["large-500px"];return`
    <picture class="form-advert__svg big-photo">
      <source
        srcset="
        ${n} 1x,
        ${n} 2x"
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
    </picture>`}const $={};e.photo.onchange=v.bind(void 0,e.photo);m()?await L():S();e.form.addEventListener("submit",a);w($);u();
