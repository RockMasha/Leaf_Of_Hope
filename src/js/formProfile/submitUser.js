import { authentication, redactUser } from "../servise/api";
import { createFormData } from "../universal/createFormData";
import { getErrorText } from "../universal/errorData/getErrorText";
import { removeInProgressLoader } from "../universal/inProgressLoadder/removeInProgressLoader";
import { setInProgressLoader } from "../universal/inProgressLoadder/setInProgressLoader";
import { isRedactForm } from "./isRedactForm";
import { root } from "./root";
import { showSubmitModal } from "./showSubmitModal";

export async function submitUser(event) {
  event.preventDefault();
  disableFormSubmit();
  setInProgressLoader();

  try {
    const data = createFormData(root.form);
    if (isRedactForm()) {
      await redactUser(data);
      window.location.href = "profile.html";
    } else {
      await authentication(data);
      showSubmitModal();
    }
  } catch (error) {
    showError(error);
    ableFormSubmit();
    console.log(error);
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
