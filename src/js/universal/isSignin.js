import { getInfo, setAuthHeader } from "../servise/api";
import { showSigninModal } from "../signin/showSigninModal";

export async function isSignin() {
  const token = localStorage.getItem("token");
  setAuthHeader(token);

  if (!token) {
    showSigninModal();
  }

  // const answer = await getInfo(token)
  // console.log(answer);
  return true;
}
