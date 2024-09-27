import { authorization } from "../servise/api";
import { createFormData } from "../universal/createFormData";
import { createToken } from "../universal/createToken";
import { root } from "./root";

export async function submitProfileForm(event) {
  event.preventDefault();

  try {
    const data = createFormData(root.form);
    // data.avatar = root.form.avatar.src;
    // console.log(root.form.avatar.value);

    const answer = await authorization(data);

    createToken(answer.token);
    history.go(-1);
  } catch (error) {
    root.error.textContent = "Неравельно відд або такий юзер вже є";
  }
}
