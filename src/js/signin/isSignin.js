import { getInfo, setAuthHeader } from "../servise/api";
import { getToken } from "../token/getToken";
import { showSigninModal } from "./showSigninModal";

export async function isSignin() {
  const token = getToken()
  if (!token) {
    showSigninModal();
  }
  try {
    const answer = await getInfo(token)
    return answer
  } catch (error) {
    console.log(error);
    return false
  }
}
