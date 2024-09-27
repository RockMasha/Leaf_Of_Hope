import { signin } from "../servise/api";
import { createToken } from "../token/createToken";
import { modalEl } from "./modalEl";
import { createFormObj } from "../universal/createFormObj";
import { hiddenSigninModal } from "./hiddenSinginModal";

export async function signinUser(event) {
  event.preventDefault();
  const form = modalEl.querySelector("form");
  const data = createFormObj(form);

  try {
    const answer = await signin(data);
    createToken(answer.token);
    hiddenSigninModal();
  } catch (error) {
    console.log(error);
    const errorEl = modalEl.querySelector(".signin-modal__error");
    errorEl.textContent = "неправельний логін чи пароль";
  }
}
