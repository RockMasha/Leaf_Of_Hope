import{h as p}from"./setCurrentLanguage-CJZyqsh0.js";import{g as d}from"./getValueSrcParams-BMgebK2A.js";import{r as f,h,d as g}from"./api-BMUXg3mB.js";import{s as _,c as b,r as x}from"./setInProgressLoader-BLew8mDa.js";import{a as w,c as m,s as y}from"./showPhoto-Dqlw9-i9.js";import{s as v}from"./setSwitchLanguage-oS9WtCGq.js";function c(){return!!d("redact")}const e={form:document.querySelector(".change-profile-form"),title:document.querySelector(".change-profile__title"),photo:document.querySelector(".change-profile-form__img"),svgWrapp:document.querySelector(".change-profile-form__svg-wpapp"),password:document.querySelector(".change-profile-form__enter_password"),email:document.querySelector(".change-profile-form__enter_email"),btnSubmit:document.querySelector(".change-profile-form__btn-submit"),error:document.querySelector(".change-profile__error")};async function s(r){r.preventDefault(),S(),_();try{const t=w(e.form);if(c())await f(t);else{const a=await h(t);b(a.token)}window.location.href="profile.html"}catch(t){e.error.textContent=`Неравельно ввід: ${t.response.data.message}`,P()}finally{x()}}function S(){e.form.addEventListener("submit",u),e.form.removeEventListener("submit",s)}function P(){e.form.removeEventListener("submit",u),e.form.addEventListener("submit",s)}function u(r){r.preventDefault()}const n={mainTitle:{ua:"Редагування",en:"Editing"},nameText:{ua:"Ім'я",en:"Name"},namePlaceholder:{placeholder:!0,ua:"Введіть ім'я",en:"Enter a name"},locationText:{ua:"Місце проживання",en:"Place of residence"},locationPlaceholder:{placeholder:!0,ua:"Ведіть місце проживання",en:"Enter your place of residence"},phoneText:{ua:"Телефон",en:"Phone"},phonePlaceholder:{placeholder:!0,ua:"Введіть номер телефону",en:"Enter a phone number"},passwordText:{ua:"Пароль",en:"Password"},passwordPlaceholder:{placeholder:!0,ua:"Введіть пароль",en:"Enter your password"},emailText:{ua:"Пошта",en:"Email"},emailPlaceholder:{placeholder:!0,ua:"Введіть ваш емейл",en:"Enter your email"},submitText:{ua:"Зберегти",en:"Save"}};function T(){e.password.innerHTML=`
              <span key="passwordText">Пароль</span>
              <input
                class="change-profile-form__input change-profile-form__input_password"
                key="passwordPlaceholder"
                type="password"
                placeholder="Введіть пароль"
                name="password"
                required
              />`,e.email.innerHTML=`
              <span key="emailText">Пошта</span>
              <input
                class="change-profile-form__input change-profile-form__input_email"
                key="emailPlaceholder"
                type="email"
                placeholder="Введіть ваш емейл"
                name="email"
                required
              />`,e.title.textContent="Реєстрація",e.btnSubmit.textContent="Cтворити",m(n,{property:"mainTitle",ua:"Реєстрація",en:"Registration"}),m(n,{property:"submitText",ua:"Cтворити",en:"Create"})}async function E(){const{username:r,adress:t,phone:a}=e.form,o={username:r,adress:t,phone:a},{user:i}=await g();for(const l in o)o[l].value=i[l];e.svgWrapp.innerHTML=L(i.avatar)}function L(r){const t=r["small-250px"],a=r["big-400px"],o=r["large-500px"];return`
    <picture class="form-advert__svg big-photo">
      <source
        srcset="
        ${o} 1x,
        ${o} 2x"
        media="(min-width: 1440px)"
      />
      <source
        srcset="
        ${a} 1x,
        ${a} 2x"
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
    </picture>`}e.photo.onchange=y.bind(void 0,e.photo);c()?await E():T();e.form.addEventListener("submit",s);v(n);p();
