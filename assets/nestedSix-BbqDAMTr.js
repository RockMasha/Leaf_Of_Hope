import{h as u}from"./hiddenContentLoader-B24fwLZY.js";import{g as l}from"./getValueSrcParams-BMgebK2A.js";import{r as p,h as f,d}from"./api-C87ePszt.js";import{s as g,c as h,r as _}from"./setInProgressLoader-DtNgW6Wc.js";import{c as b,s as v}from"./showPhoto-BLcMjZRy.js";function m(){return!!l("redact")}const e={form:document.querySelector(".change-profile-form"),title:document.querySelector(".change-profile__title"),photo:document.querySelector(".change-profile-form__img"),svgWrapp:document.querySelector(".change-profile-form__svg-wpapp"),password:document.querySelector(".change-profile-form__enter_password"),email:document.querySelector(".change-profile-form__enter_email"),btnSubmit:document.querySelector(".change-profile-form__btn-submit"),error:document.querySelector(".change-profile__error")};async function a(t){t.preventDefault(),w(),g();try{const r=b(e.form);if(m())await p(r);else{const o=await f(r);h(o.token)}window.location.href="profile.html"}catch{e.error.textContent="Неравельно ввід або такий юзер вже є",x()}finally{_()}}function w(){e.form.addEventListener("submit",c),e.form.removeEventListener("submit",a)}function x(){e.form.removeEventListener("submit",c),e.form.addEventListener("submit",a)}function c(t){t.preventDefault()}function y(){e.password.innerHTML=`
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
              />`,e.title.textContent="Реєстрація",e.btnSubmit.textContent="Cтворити"}async function S(){const{username:t,adress:r,phone:o}=e.form,n={username:t,adress:r,phone:o},{user:s}=await d();for(const i in n)n[i].value=s[i];e.svgWrapp.innerHTML=L(s.avatar)}function L(t){const r=t["small-250px"],o=t["big-400px"],n=t["large-500px"];return`
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
        ${r} 1x,
        ${r} 2x"
      />
      <img
        src="${r}"
        srcset="
        ${r} 1x,
        ${r} 2x"
        class="form-advert__svg big-photo"
        alt="plant"
        loading="lazy"
      />
    </picture>`}e.photo.onchange=v.bind(void 0,e.photo);m()?await S():y();e.form.addEventListener("submit",a);u();
