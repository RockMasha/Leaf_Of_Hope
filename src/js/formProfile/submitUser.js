import { authorization, redactUser } from "../servise/api";
import { createToken } from "../token/createToken";
import { createFormData } from "../universal/createFormData";
import { isRedactForm } from "./isRedactForm";
import { root } from "./root";

export async function submitUser(event) {
  event.preventDefault();
  await disableBtnSubmit();

  try {
    const data = createFormData(root.form);
    if (isRedactForm()) {
      await redactUser(data);
    } else {
      const answer = await authorization(data);
      createToken(answer.token);
    }
    window.location.href = "profile.html";
  } catch (error) {
    root.error.textContent = "Неравельно ввід або такий юзер вже є";
    ableBtnSubmit();
  }
}

async function disableBtnSubmit() {
  root.btnSubmit.removeEventListener("submit", submitUser);
}

function ableBtnSubmit() {
  root.btnSubmit.addEventListener("submit", submitUser);
}
