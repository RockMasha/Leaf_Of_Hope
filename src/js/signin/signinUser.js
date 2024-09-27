import { signin } from "../servise/api";
import { createFormData } from "../universal/createFormData";
import { createToken } from "../universal/createToken";
import { modalEl } from "./modalEl";

export async function signinUser(event) {
  event.preventDefault();
  const form = modalEl.querySelector("form");
  const data = createFormData(form);

  try {
    const answer = await signin(data);
    createToken(answer.token);
  } catch (error) {
    const errorEl = modalEl.querySelector(".signin-modal__error");
    errorEl.textContent = "неправельний логін чи пароль";
  }
}
