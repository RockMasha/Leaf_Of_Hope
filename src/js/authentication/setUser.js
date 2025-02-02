import { createToken } from "../token/createToken";
import { isVerificationCodeTrue } from "./isVerificationCodeTrue";
import { showError } from "./showError";
import { showSuccess } from "./showSuccess";

export async function setUser() {
  const token = await isVerificationCodeTrue();
  if (token) {
    showSuccess();
    createToken(token);
    // window.location.href = "profile.html";
  } else {
    showError();
  }
}
