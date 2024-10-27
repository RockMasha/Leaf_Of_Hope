import{h as u}from"./hiddenContentLoader-DgUHe6EP.js";import{g as l}from"./getValueSrcParams-BMgebK2A.js";import{r as p,h as f,d}from"./api-C87ePszt.js";import{s as g,c as h,r as _}from"./setInProgressLoader-DtNgW6Wc.js";import{c as b,s as v}from"./showPhoto-BLcMjZRy.js";function m(){return!!l("redact")}const e={form:document.querySelector(".change-profile-form"),title:document.querySelector(".change-profile__title"),photo:document.querySelector(".change-profile-form__img"),svgWrapp:document.querySelector(".change-profile-form__svg-wpapp"),password:document.querySelector(".change-profile-form__enter_password"),email:document.querySelector(".change-profile-form__enter_email"),btnSubmit:document.querySelector(".change-profile-form__btn-submit"),error:document.querySelector(".change-profile__error")};async function a(r){r.preventDefault(),w(),g();try{const t=b(e.form);if(m())await p(t);else{const o=await f(t);h(o.token)}window.location.href="profile.html"}catch{e.error.textContent="Неравельно ввід або такий юзер вже є",y()}finally{_()}}function w(){e.form.addEventListener("submit",c),e.form.removeEventListener("submit",a)}function y(){e.form.removeEventListener("submit",c),e.form.addEventListener("submit",a)}function c(r){r.preventDefault()}function S(){e.password.innerHTML=`
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
              />`,e.title.textContent="Реєстрація",e.btnSubmit.textContent="Cтворити"}async function L(){const{username:r,adress:t,phone:o}=e.form,n={username:r,adress:t,phone:o},{user:i}=await d();for(const s in n)n[s].value=i[s];e.svgWrapp.innerHTML=q(i.avatar)}function q(r){const t=r["small-250px"],o=r["medium-300px"];return`
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
    </picture>`}e.photo.onchange=v.bind(void 0,e.photo);m()?await L():S();e.form.addEventListener("submit",a);u();
