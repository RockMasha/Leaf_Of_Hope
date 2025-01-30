import{h as d}from"./setCurrentLanguage-DdORZCPD.js";import{g as p}from"./getValueSrcParams-BMgebK2A.js";import{r as f,d as h,e as g}from"./api-B7v0WwrB.js";import{c as _,s as b}from"./showPhoto-BRLbcwku.js";import{s as y,r as w,g as v,e as x}from"./getErrorText-BbwCwusH.js";import{c}from"./changeSettingsValue-79FUIYGn.js";import{s as S}from"./setSwitchLanguage-CyEaCAgr.js";function m(){return!!p("redact")}const a={form:document.querySelector(".change-profile-form"),title:document.querySelector(".change-profile__title"),photo:document.querySelector(".change-profile-form__img"),svgWrapp:document.querySelector(".change-profile-form__svg-wpapp"),password:document.querySelector(".change-profile-form__enter_password"),email:document.querySelector(".change-profile-form__enter_email"),btnSubmit:document.querySelector(".change-profile-form__btn-submit"),error:document.querySelector(".change-profile__error")};function T(){document.body.setAttribute("lock",""),document.body.insertAdjacentHTML("afterbegin",`
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
  `)}async function i(e){e.preventDefault(),P(),y();try{const t=_(a.form);m()?(await f(t),window.location.href="profile.html"):(await h(t),T())}catch(t){E(t),L()}finally{w()}}function E(e){var o,n;const t=(n=(o=e==null?void 0:e.response)==null?void 0:o.data)==null?void 0:n.message,r=v(t);a.error.textContent=r}function P(){a.form.addEventListener("submit",u),a.form.removeEventListener("submit",i)}function L(){a.form.removeEventListener("submit",u),a.form.addEventListener("submit",i)}function u(e){e.preventDefault()}const s={mainTitle:{ua:"Редагування",en:"Editing"},nameText:{ua:"Ім'я",en:"Name"},namePlaceholder:{placeholder:!0,ua:"Введіть ім'я",en:"Enter a name"},locationText:{ua:"Місце проживання",en:"Place of residence"},locationPlaceholder:{placeholder:!0,ua:"Ведіть місце проживання",en:"Enter your place of residence"},phoneText:{ua:"Телефон",en:"Phone"},phonePlaceholder:{placeholder:!0,ua:"Починайте з коду країни",en:"Start with the country code"},passwordText:{ua:"Пароль",en:"Password"},passwordPlaceholder:{placeholder:!0,ua:"Введіть пароль",en:"Enter your password"},emailText:{ua:"Пошта",en:"Email"},emailPlaceholder:{placeholder:!0,ua:"Введіть ваш емейл",en:"Enter your email"},submitText:{ua:"Зберегти",en:"Save"}};Object.assign(s,x);function q(){a.password.innerHTML=`
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
              />`,a.title.textContent="Реєстрація",a.btnSubmit.textContent="Cтворити",c(s,{property:"mainTitle",ua:"Реєстрація",en:"Registration"}),c(s,{property:"submitText",ua:"Cтворити",en:"Create"})}async function $(){const{username:e,adress:t,phone:r}=a.form,o={username:e,adress:t,phone:r},{user:n}=await g();for(const l in o)o[l].value=n[l];a.svgWrapp.innerHTML=D(n.avatar)}function D(e){const t=e["small-250px"],r=e["big-400px"],o=e["large-500px"];return`
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
    </picture>`}a.photo.onchange=b.bind(void 0,a.photo);m()?await $():q();a.form.addEventListener("submit",i);S(s);d();
