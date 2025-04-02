import { removeInProgressLoader } from "../universal/inProgressLoadder/removeInProgressLoader";
import { setInProgressLoader } from "../universal/inProgressLoadder/setInProgressLoader";
import { signin, signupGoogle } from "../servise/api";
import { hiddenSigninModal } from "./hiddenSinginModal";
import { createToken } from "../token/createToken";
import { checkPage } from "./checkPage";
export const GOOGLE_AUTH_ID = import.meta.env.VITE_GOOGLEAUTHID;

function setGoogleScript(callback) {
  const script = document.createElement("script");
  script.src = "https://accounts.google.com/gsi/client";
  script.async = true;
  script.defer = true;
  script.onload = callback;
  document.head.appendChild(script);
}

export function setSigninGoogle() {
  setGoogleScript(() => {
    google.accounts.id.initialize({
      client_id: GOOGLE_AUTH_ID,
      callback: signinGoogle,
    });
  });
}

async function signinGoogle(response) {
  setInProgressLoader();
  const { credential } = response;
  try {
    const answer = await signin({ token_id: credential });
    const { token } = answer;
    createToken(token);
    checkPage(answer);
    await hiddenSigninModal();
  } catch (error) {
    try {
      const answer = await signupGoogle(credential);
      const { token } = answer;
      createToken(token);
      await hiddenSigninModal();
    } catch (error) {}
  } finally {
    removeInProgressLoader();
  }
}
