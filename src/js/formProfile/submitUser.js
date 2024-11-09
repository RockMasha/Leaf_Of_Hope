import { authorization, redactUser } from "../servise/api";
import { createToken } from "../token/createToken";
import { createFormData } from "../universal/createFormData";
import { getErrorText } from "../universal/errorData/getErrorText";
import { removeInProgressLoader } from "../universal/inProgressLoadder/removeInProgressLoader";
import { setInProgressLoader } from "../universal/inProgressLoadder/setInProgressLoader";
import { isRedactForm } from "./isRedactForm";
import { root } from "./root";

export async function submitUser(event) {
  event.preventDefault();
  disableFormSubmit();
  setInProgressLoader();

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
    showError(error);
    ableFormSubmit();
  } finally {
    removeInProgressLoader();
  }
}

function showError(error) {
  const errorText = error?.response?.data?.message;
  const message = getErrorText(errorText);
  root.error.textContent = message;
}

function disableFormSubmit() {
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
