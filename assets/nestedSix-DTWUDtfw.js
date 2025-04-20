import{h as d}from"./getCurrentLanguage-CVvCI2XH.js";import{g as f}from"./getValueSrcParams-BMgebK2A.js";import{r as g,d as h,e as b}from"./api-DfoCCC7a.js";import{c as m}from"./chanhePage-Be1AtWlB.js";import{s as _,c as y,r as v,g as x,e as w}from"./getErrorText-DgyegVqw.js";import{s as S,c as T}from"./checkLogin-BXok5C-4.js";import{c as l}from"./changeSettingsValue-79FUIYGn.js";import{s as k}from"./setSwitchLanguage-CNDyctra.js";import"./setCurrentLanguage-B3yJ7-V5.js";function u(){return!!f("redact")}const a={section:document.querySelector(".change-profile"),form:document.querySelector(".change-profile-form"),title:document.querySelector(".change-profile__title"),photo:document.querySelector(".change-profile-form__img"),svgWrapp:document.querySelector(".change-profile-form__svg-wpapp"),password:document.querySelector(".change-profile-form__enter_password"),email:document.querySelector(".change-profile-form__enter_email"),btnSubmit:document.querySelector(".change-profile-form__btn-submit"),error:document.querySelector(".change-profile__error")};function E(){document.body.setAttribute("lock",""),document.body.insertAdjacentHTML("afterbegin",`
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
  `)}async function c(t){t.preventDefault(),P(),_();try{const e=y(a.form);e.get("phone")||e.set("phone",""),e.get("adress")||e.set("adress",""),u()?(await g(e),m("profile.html")):(await h(e),E())}catch(e){L(e),q(),console.log(e)}finally{v()}}function L(t){var o,n;const e=(n=(o=t==null?void 0:t.response)==null?void 0:o.data)==null?void 0:n.message,r=x(e);a.error.textContent=r}function P(){a.form.addEventListener("submit",p),a.form.removeEventListener("submit",c)}function q(){a.form.removeEventListener("submit",p),a.form.addEventListener("submit",c)}function p(t){t.preventDefault()}const s={mainTitle:{ua:"Редагування",en:"Editing"},nameText:{ua:"Ім'я",en:"Name"},namePlaceholder:{placeholder:!0,ua:"Введіть ім'я",en:"Enter a name"},locationText:{ua:"Місце проживання",en:"Place of residence"},locationPlaceholder:{placeholder:!0,ua:"Ведіть місце проживання",en:"Enter your place of residence"},phoneText:{ua:"Телефон",en:"Phone"},phonePlaceholder:{placeholder:!0,ua:"Починайте з коду країни",en:"Start with the country code"},passwordText:{ua:"Пароль",en:"Password"},passwordPlaceholder:{placeholder:!0,ua:"Введіть пароль",en:"Enter your password"},emailText:{ua:"Пошта",en:"Email"},emailPlaceholder:{placeholder:!0,ua:"Введіть ваш емейл",en:"Enter your email"},submitText:{ua:"Зберегти",en:"Save"},backText:{ua:"← Вхід",en:"← Login"}};Object.assign(s,w);function $(){a.section.insertAdjacentHTML("afterbegin",`
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
              />`,a.title.textContent="Реєстрація",a.btnSubmit.textContent="Cтворити",l(s,{property:"mainTitle",ua:"Реєстрація",en:"Registration"}),l(s,{property:"submitText",ua:"Cтворити",en:"Create"})}async function D(){const{username:t,adress:e,phone:r}=a.form,o={username:t,adress:e,phone:r},{user:n}=await b();n||m("profile.html");for(const i in o)n[i]&&(o[i].value=n[i]);a.svgWrapp.innerHTML=I(n.avatar)}function I(t){const e=t["small-250px"],r=t["big-400px"],o=t["large-500px"];return`
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
    </picture>`}a.photo.onchange=S.bind(void 0,a.photo);u()?(await T(),await D()):$();a.form.addEventListener("submit",c);k(s);d();
