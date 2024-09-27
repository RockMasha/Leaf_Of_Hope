import { authorization } from "../servise/api";
import { createToken } from "../token/createToken";
import { createFormData } from "../universal/createFormData";
import { root } from "./root";

export async function submitProfileForm(event) {
  event.preventDefault();

  try {
    const data = createFormData(root.form);
    const answer = await authorization(data);
    createToken(answer.token);
    history.go(-1);
  } catch (error) {
    root.error.textContent = "Неравельно ввід або такий юзер вже є";
  }
}
