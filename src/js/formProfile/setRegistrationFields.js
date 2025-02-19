import { changeSettingsValue } from "../universal/translate/universal/changeSettingsValue";
import { root } from "./root";
import { settings } from "./translate/settings";

export function setRegistrationFields() {
  const backEl = `
  <a class="change-profile-back" href="profile.html">
    <img
      class="change-profile-back__svg"
      src="./img/formAdvert/select-arrow.svg#select-arrow"
      alt=""
    />
    <p class="change-profile-back__hint" key="backText">← Вхід</p>
  </a>`;
  root.section.insertAdjacentHTML("afterbegin", backEl);

  root.password.innerHTML = `
              <span key="passwordText">Пароль</span>
              <input
                class="change-profile-form__input change-profile-form__input_password"
                key="passwordPlaceholder"
                autocomplete="current-password"
                type="password"
                placeholder="Введіть пароль"
                name="password"
                required
              />`;

  root.email.innerHTML = `
              <span key="emailText">Пошта</span>
              <input
                class="change-profile-form__input change-profile-form__input_email"
                key="emailPlaceholder"
                autocomplete="email"
                type="email"
                placeholder="Введіть ваш емейл"
                name="email"
                required
              />`;

  root.title.textContent = "Реєстрація";
  root.btnSubmit.textContent = "Cтворити";

  const titleData = {
    property: "mainTitle",
    ua: "Реєстрація",
    en: "Registration",
  };
  changeSettingsValue(settings, titleData);

  const submitData = { property: "submitText", ua: "Cтворити", en: "Create" };
  changeSettingsValue(settings, submitData);
}
