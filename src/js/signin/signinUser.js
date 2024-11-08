import { signin } from "../servise/api";
import { createToken } from "../token/createToken";
import { root } from "./root";
import { createFormObj } from "../universal/createFormObj";
import { hiddenSigninModal } from "./hiddenSinginModal";
import { setInProgressLoader } from "../universal/inProgressLoadder/setInProgressLoader";
import { removeInProgressLoader } from "../universal/inProgressLoadder/removeInProgressLoader";
import { getErrorText } from "../universal/errorData/getErrorText";

export async function signinUser(event) {
  event.preventDefault();
  setInProgressLoader();
  const data = createFormObj(root.form);
  try {
    const answer = await signin(data);
    createToken(answer.token);

    await hiddenSigninModal();
  } catch (error) {
    const errorText = getErrorText(error?.response?.data?.message);
    root.errorText.textContent = errorText;
  } finally {
    removeInProgressLoader();
  }
}
