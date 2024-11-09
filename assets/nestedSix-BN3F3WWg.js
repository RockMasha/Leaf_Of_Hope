import{h as p}from"./setCurrentLanguage-NOXEc7TY.js";import{g as d}from"./getValueSrcParams-BMgebK2A.js";import{r as f,h,d as g}from"./api-BBffhmo6.js";import{s as _,c as b,r as x,g as w,e as y}from"./getErrorText-ByzvEy06.js";import{c as v,s as S}from"./showPhoto-BRLbcwku.js";import{c as m}from"./changeSettingsValue-79FUIYGn.js";import{s as T}from"./setSwitchLanguage-BD8z4uMl.js";function l(){return!!d("redact")}const r={form:document.querySelector(".change-profile-form"),title:document.querySelector(".change-profile__title"),photo:document.querySelector(".change-profile-form__img"),svgWrapp:document.querySelector(".change-profile-form__svg-wpapp"),password:document.querySelector(".change-profile-form__enter_password"),email:document.querySelector(".change-profile-form__enter_email"),btnSubmit:document.querySelector(".change-profile-form__btn-submit"),error:document.querySelector(".change-profile__error")};async function i(e){e.preventDefault(),E(),_();try{const t=v(r.form);if(l())await f(t);else{const a=await h(t);b(a.token)}window.location.href="profile.html"}catch(t){P(t),L()}finally{x()}}function P(e){var o,n;const t=(n=(o=e==null?void 0:e.response)==null?void 0:o.data)==null?void 0:n.message,a=w(t);r.error.textContent=a}function E(){r.form.addEventListener("submit",u),r.form.removeEventListener("submit",i)}function L(){r.form.removeEventListener("submit",u),r.form.addEventListener("submit",i)}function u(e){e.preventDefault()}const s={mainTitle:{ua:"Редагування",en:"Editing"},nameText:{ua:"Ім'я",en:"Name"},namePlaceholder:{placeholder:!0,ua:"Введіть ім'я",en:"Enter a name"},locationText:{ua:"Місце проживання",en:"Place of residence"},locationPlaceholder:{placeholder:!0,ua:"Ведіть місце проживання",en:"Enter your place of residence"},phoneText:{ua:"Телефон",en:"Phone"},phonePlaceholder:{placeholder:!0,ua:"Введіть номер телефону",en:"Enter a phone number"},passwordText:{ua:"Пароль",en:"Password"},passwordPlaceholder:{placeholder:!0,ua:"Введіть пароль",en:"Enter your password"},emailText:{ua:"Пошта",en:"Email"},emailPlaceholder:{placeholder:!0,ua:"Введіть ваш емейл",en:"Enter your email"},submitText:{ua:"Зберегти",en:"Save"}};Object.assign(s,y);function q(){r.password.innerHTML=`
              <span key="passwordText">Пароль</span>
              <input
                class="change-profile-form__input change-profile-form__input_password"
                key="passwordPlaceholder"
                type="password"
                placeholder="Введіть пароль"
                name="password"
                required
              />`,r.email.innerHTML=`
              <span key="emailText">Пошта</span>
              <input
                class="change-profile-form__input change-profile-form__input_email"
                key="emailPlaceholder"
                type="email"
                placeholder="Введіть ваш емейл"
                name="email"
                required
              />`,r.title.textContent="Реєстрація",r.btnSubmit.textContent="Cтворити",m(s,{property:"mainTitle",ua:"Реєстрація",en:"Registration"}),m(s,{property:"submitText",ua:"Cтворити",en:"Create"})}async function $(){const{username:e,adress:t,phone:a}=r.form,o={username:e,adress:t,phone:a},{user:n}=await g();for(const c in o)o[c].value=n[c];r.svgWrapp.innerHTML=D(n.avatar)}function D(e){const t=e["small-250px"],a=e["big-400px"],o=e["large-500px"];return`
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
    </picture>`}r.photo.onchange=S.bind(void 0,r.photo);l()?await $():q();r.form.addEventListener("submit",i);T(s);p();
