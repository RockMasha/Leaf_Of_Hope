import { signin } from "../servise/api";
import { createToken } from "../token/createToken";
import { root } from "./root";
import { createFormObj } from "../universal/createFormObj";
import { hiddenSigninModal } from "./hiddenSinginModal";
import { setInProgressLoader } from "../universal/inProgressLoadder/setInProgressLoader";
import { removeInProgressLoader } from "../universal/inProgressLoadder/removeInProgressLoader";
import { getErrorText } from "../universal/errorData/getErrorText";
import { signinSettings } from "../universal/translate/universal/templeSettings/signinSettings";
import { setChat } from "../ai-assist/setChat";

export async function signinUser(event) {
  event.preventDefault();
  setInProgressLoader();
  const data = createFormObj(root.form);
  try {
    const answer = await signin(data);
    createToken(answer.token);
    checkPage(answer);

    await hiddenSigninModal();
  } catch (error) {
    showError(error);
  } finally {
    removeInProgressLoader();
  }
}

function showError(error) {
  const errorText = error?.response?.data?.message;
  const translateData = { property: "singinError", settings: signinSettings };
  const message = getErrorText(errorText, translateData);
  root.errorText.textContent = message;
}

function checkPage(user) {
  const isAiAssistPage = document.querySelector(".ai-assist");
  if (isAiAssistPage) {
    setChat(user);
  }
}
