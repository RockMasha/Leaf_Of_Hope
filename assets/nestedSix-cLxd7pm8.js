import{h as f}from"./getCurrentLanguage-Ds8QeYUW.js";import{g}from"./getValueSrcParams-BMgebK2A.js";import{r as h,d as b,e as _}from"./api-u4HwxF-3.js";import{c as s}from"./chanhePage-Be1AtWlB.js";import{s as y,c as v,r as x,g as w,e as S}from"./getErrorText-DnZHavDm.js";import{s as T,c as k}from"./checkLogin-CbbkNFzF.js";import{c as m}from"./changeSettingsValue-79FUIYGn.js";import{s as E}from"./setSwitchLanguage-P2qgFyQt.js";import"./setCurrentLanguage-ouwS3xBO.js";function p(){return!!g("redact")}const a={section:document.querySelector(".change-profile"),form:document.querySelector(".change-profile-form"),title:document.querySelector(".change-profile__title"),photo:document.querySelector(".change-profile-form__img"),svgWrapp:document.querySelector(".change-profile-form__svg-wpapp"),password:document.querySelector(".change-profile-form__enter_password"),email:document.querySelector(".change-profile-form__enter_email"),btnSubmit:document.querySelector(".change-profile-form__btn-submit"),error:document.querySelector(".change-profile__error")};function L(){document.body.setAttribute("lock",""),document.body.insertAdjacentHTML("afterbegin",`
    <div class="modal-wrapper authentication-modal-wrapper">
    <div class="authentication-modal modal">
        <img
        class="authentication-modal__img"
        src="https://res.cloudinary.com/dk3syrsg5/image/upload/v1737234161/email_uq3vzf.svg"
        alt="icon of email"
        />
        <p class="authentication-modal__text" key="deleteModalTitle">
        Вам надійшло письмо на почту для її пітвердження
        </p>
    </div>
    </div>
  `)}async function l(t){t.preventDefault(),q(),y();try{const e=v(a.form);e.get("phone")||e.set("phone",""),e.get("adress")||e.set("adress",""),p()?(await h(e),s("profile.html")):(await b(e),L())}catch(e){P(e),$(),console.log(e)}finally{x()}}function P(t){var o,n;const e=(n=(o=t==null?void 0:t.response)==null?void 0:o.data)==null?void 0:n.message,r=w(e);a.error.textContent=r}function q(){a.form.addEventListener("submit",d),a.form.removeEventListener("submit",l)}function $(){a.form.removeEventListener("submit",d),a.form.addEventListener("submit",l)}function d(t){t.preventDefault()}const i={mainTitle:{ua:"Редагування",en:"Editing"},nameText:{ua:"Ім'я",en:"Name"},namePlaceholder:{placeholder:!0,ua:"Введіть ім'я",en:"Enter a name"},locationText:{ua:"Місце проживання",en:"Place of residence"},locationPlaceholder:{placeholder:!0,ua:"Ведіть місце проживання",en:"Enter your place of residence"},phoneText:{ua:"Телефон",en:"Phone"},phonePlaceholder:{placeholder:!0,ua:"Починайте з коду країни",en:"Start with the country code"},passwordText:{ua:"Пароль",en:"Password"},passwordPlaceholder:{placeholder:!0,ua:"Введіть пароль",en:"Enter your password"},emailText:{ua:"Пошта",en:"Email"},emailPlaceholder:{placeholder:!0,ua:"Введіть ваш емейл",en:"Enter your email"},submitText:{ua:"Зберегти",en:"Save"},backText:{ua:"← Вхід",en:"← Login"}};Object.assign(i,S);function D(){a.section.insertAdjacentHTML("afterbegin",`
  <a class="change-profile-back" href="profile.html">
    <img
      class="change-profile-back__svg"
      src="https://res.cloudinary.com/dk3syrsg5/image/upload/v1740074542/select-arrow_i5119r.svg"
      alt=""
    />
    <p class="change-profile-back__hint" key="backText">← Вхід</p>
  </a>`),a.password.innerHTML=`
              <span key="passwordText">Пароль</span>
              <input
                class="change-profile-form__input change-profile-form__input_password"
                key="passwordPlaceholder"
                autocomplete="current-password"
                type="password"
                placeholder="Введіть пароль"
                name="password"
                required
              />`,a.email.innerHTML=`
              <span key="emailText">Пошта</span>
              <input
                class="change-profile-form__input change-profile-form__input_email"
                key="emailPlaceholder"
                autocomplete="email"
                type="email"
                placeholder="Введіть ваш емейл"
                name="email"
                required
              />`,a.title.textContent="Реєстрація",a.btnSubmit.textContent="Cтворити",m(i,{property:"mainTitle",ua:"Реєстрація",en:"Registration"}),m(i,{property:"submitText",ua:"Cтворити",en:"Create"})}async function I(){const{username:t,adress:e,phone:r}=a.form,o={username:t,adress:e,phone:r},{user:n}=await _();n||s("profile.html");for(const c in o)n[c]&&(o[c].value=n[c]);a.svgWrapp.innerHTML=C(n.avatar)}function C(t){const e=t["small-250px"],r=t["big-400px"],o=t["large-500px"];return`
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
        ${e} 1x,
        ${e} 2x"
      />
      <img
        src="${e}"
        srcset="
        ${e} 1x,
        ${e} 2x"
        class="form-advert__svg big-photo"
        alt="plant"
        loading="lazy"
      />
    </picture>`}a.photo.onchange=T.bind(void 0,a.photo);const u=await k();p()?(u||s("profile.html"),await I()):(u&&s("profile.html"),D());a.form.addEventListener("submit",l);E(i);f();
