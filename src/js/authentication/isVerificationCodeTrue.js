import { checkAuthentication } from "../servise/api";
import { createToken } from "../token/createToken";
import { getValueSrcParams } from "../universal/getValueSrcParams";

export async function isVerificationCodeTrue() {
  let answer;
  try {
    const verificationCode = getValueSrcParams("verification");
    answer = await checkAuthentication(verificationCode);
  } catch (error) {
    console.log(error);
    return false;
  }

  return answer.token;
}
