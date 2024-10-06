import { getInfo } from "../servise/api";
import { root } from "./root";

export async function setInputs() {
  const { username, adress, phone, email} = root.form;
  const formInputs = { username, adress, phone, email};
  const { user } = await getInfo();

  for (const name in formInputs) {
    formInputs[name].value = user[name];
  }
  
  const imgEl = document.querySelector(".change-profile-form__svg");
  imgEl.src = user.avatar;
  imgEl.classList.add("big-photo");
}
