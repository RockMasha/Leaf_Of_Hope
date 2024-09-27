import { postAdvert } from "../servise/api";
import { createFormData } from "../universal/createFormData";
import { root } from "./root";
import { getToken } from "../token/getToken";

export async function submitFormAdvert(event) {
  event.preventDefault();

  try {
    const data = createFormData(root.form);
    const token = getToken();
    await postAdvert(data, token);
    history.go(-1);
  } catch (error) {
    console.log(error);

    root.error.textContent = "Неравельно ввід";
  }
}
