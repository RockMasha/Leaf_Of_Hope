import { root } from "./root";

export function showSuccess() {
  root.authenticationCont = `
    <img
      class="authentication__img authentication__img_success"
      src="https://res.cloudinary.com/dk3syrsg5/image/upload/v1737231509/success_vcfdpe.svg"
      alt="an error occurred"
    />
    <p class="authentication__message" key="messageSuccessText">Перевірка пройшла успішно</p>`;
}
