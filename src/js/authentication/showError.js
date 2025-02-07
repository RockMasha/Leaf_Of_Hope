import { root } from "./root";

export function showError() {
  root.authenticationCont.innerHTML = `
    <img
      class="authentication__img"
      src="https://res.cloudinary.com/dk3syrsg5/image/upload/v1737148271/error-occurred_eo4gcm.svg"
      alt="an error occurred"
    />
    <p class="authentication__message" key="messageErrorText">Сталася помилка. Можливо посилання застаріло</p>`;
}
