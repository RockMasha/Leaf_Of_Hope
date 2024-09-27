import { getInfo, setAuthHeader } from "../servise/api";
import { getToken } from "../token/getToken";
import { showSigninModal } from "./showSigninModal";

export async function isSignin() {
  const token = getToken()

  if (!token) {
    showSigninModal();
  }

  setAuthHeader(token);

  // const answer = await getInfo(token)
  // console.log(answer);
  return true;
}
