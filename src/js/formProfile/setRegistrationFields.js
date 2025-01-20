import { changeSettingsValue } from "../universal/translate/universal/changeSettingsValue";
import { root } from "./root";
import { settings } from "./translate/settings";

export function setRegistrationFields() {
  root.password.innerHTML = `
              <span key="passwordText">Пароль</span>
              <input
                class="change-profile-form__input change-profile-form__input_password"
                key="passwordPlaceholder"
                autocomplete="new-password"
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
