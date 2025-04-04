import { createToken } from "../token/createToken";
import { changePage } from "../universal/chanhePage";
import { isVerificationCodeTrue } from "./isVerificationCodeTrue";
import { showError } from "./showError";
import { showSuccess } from "./showSuccess";

export async function setUser() {
  const token = await isVerificationCodeTrue();

  if (token) {
    showSuccess();
    createToken(token);
    changePage("profile.html");
  } else {
    showError();
  }
}
