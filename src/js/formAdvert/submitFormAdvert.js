import { changeAdvert, postAdvert } from "../servise/api";
import { createFormData } from "../universal/createFormData";
import { root } from "./root";
import { getToken } from "../token/getToken";
import { getValueSrcParams } from "../universal/getValueSrcParams";

export async function submitFormAdvert(event) {
  event.preventDefault();
  disableFormSubmit();

  try {
    const data = createFormData(root.form);
    const id = getValueSrcParams("id");
    if (id) {
      await changeAdvert(id, data);
    } else {
      const token = getToken();
      await postAdvert(data, token);
    }
    history.go(-1);
  } catch (error) {
    console.log(error);
    ableFormSubmit();
    root.error.textContent = "Неравельно ввід";
  }
}

async function disableFormSubmit() {
  root.form.addEventListener("submit", preventDefaultSubmit);
  root.form.removeEventListener("submit", submitFormAdvert);
}

function ableFormSubmit() {
  root.form.removeEventListener("submit", preventDefaultSubmit);
  root.form.addEventListener("submit", submitFormAdvert);
}

function preventDefaultSubmit(event) {
  event.preventDefault();
}
