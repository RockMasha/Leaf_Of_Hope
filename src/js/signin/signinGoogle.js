import { jwtDecode } from "jwt-decode";
import { enterUser } from "./signinUser";
import { authorization } from "../servise/api";
import { removeInProgressLoader } from "../universal/inProgressLoadder/removeInProgressLoader";
import { setInProgressLoader } from "../universal/inProgressLoadder/setInProgressLoader";
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
  const data = jwtDecode(response.credential);
  console.log(data);
  const info = getSigninData(data);
  // console.log(info);
  const answer = await enterUser(info);
  if (!answer) {
    const info = getRegistrationData(data);
    authorizationUser(info);
  }
}

async function authorizationUser(info) {
  setInProgressLoader();
  try {
    const answer = await authorization(info);
    // console.log(answer);
  } catch (error) {
    // console.log(error);
  } finally {
    removeInProgressLoader();
  }
}

function getSigninData(data) {
  const { email, jti: password } = data;
  return {
    email,
    password,
  };
}

function getRegistrationData(data) {
  const { email, name: username, picture: avatar, jti: password } = data;

  return {
    email,
    username,
    // avatar,
    password,
    phone: "0000000000",
    adress: "не вказано",
  };
}
