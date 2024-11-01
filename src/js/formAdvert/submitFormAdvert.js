import { changeAdvert, postAdvert } from "../servise/api";
import { createFormData } from "../universal/createFormData";
import { root } from "./root";
import { getToken } from "../token/getToken";
import { getValueSrcParams } from "../universal/getValueSrcParams";
import { setInProgressLoader } from "../universal/inProgressLoadder/setInProgressLoader";
import { removeInProgressLoader } from "../universal/inProgressLoadder/removeInProgressLoader";

export async function submitFormAdvert(event) {
  event.preventDefault();
  disableFormSubmit();
  setInProgressLoader();

  try {
    const id = getValueSrcParams("id");
    const data = createFormData(root.form);
    if (!data.get("lang")) {
      data.set("lang", "ua");
    }
    if (id) {
      await changeAdvert(id, data);
    } else {
      const token = getToken();
      await postAdvert(data, token);
    }
    window.location.href = "profile.html";
  } catch (error) {
    ableFormSubmit();
    root.error.textContent = `Неравельно ввід: ${error.response.data.message}`;
  } finally {
    removeInProgressLoader();
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
