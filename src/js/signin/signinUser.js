import { signin } from "../servise/api";
import { createToken } from "../token/createToken";
import { root } from "./root";
import { createFormObj } from "../universal/createFormObj";
import { hiddenSigninModal } from "./hiddenSinginModal";

export async function signinUser(event) {
  event.preventDefault();

  const data = createFormObj(root.form);
  try {
    const answer = await signin(data);
    createToken(answer.token);
    hiddenSigninModal();
  } catch (error) {
    root.errorText.textContent = "неправельний логін чи пароль";
  }
}
