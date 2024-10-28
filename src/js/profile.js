import { isSignin } from "./signin/isSignin";
import { showSigninModal } from "./signin/showSigninModal";
import { showProfile } from "./profile/showProfile";
import { hiddenContentLoader } from "./universal/hiddenContentLoader";
import "./universal/btnUpSettings";

const answer = await isSignin();

if (answer) {
  await showProfile(answer.user);
} else {
  showSigninModal();
}

hiddenContentLoader();
