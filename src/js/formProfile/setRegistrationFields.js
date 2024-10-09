import { root } from "./root";

export function setRegistrationFields() {
  root.password.innerHTML = `
              Пароль
              <input
                class="change-profile-form__input change-profile-form__input_password"
                type="password"
                placeholder="Ведіть пароль"
                name="password"
                required
              />`;

  root.email.innerHTML = `
              Пошта
              <input
                class="change-profile-form__input change-profile-form__input_email"
                type="email"
                placeholder="Ведіть ваш емейл"
                name="email"
                required
              />`;

  root.title.textContent = "Реєстрація";
  root.btnSubmit.textContent = "Cтворити";
}
