import { authorization, redactUser } from "../servise/api";
import { createToken } from "../token/createToken";
import { createFormData } from "../universal/createFormData";
import { isRedactForm } from "./isRedactForm";
import { root } from "./root";

export async function submitUser(event) {
  event.preventDefault();
  await disableFormSubmit();

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
    ableFormSubmit();
  }
}

async function disableFormSubmit() {
  root.form.addEventListener("submit", preventDefaultSubmit);
  root.form.removeEventListener("submit", submitUser);
}

function ableFormSubmit() {
  root.form.removeEventListener("submit", preventDefaultSubmit);
  root.form.addEventListener("submit", submitUser);
}

function preventDefaultSubmit(event) {
  event.preventDefault();
}
