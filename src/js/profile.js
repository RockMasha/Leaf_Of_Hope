import { isSignin } from "./signin/isSignin";
import { showSigninModal } from "./signin/showSigninModal";
import { showProfile } from "./profile/showProfile";

const answer = await isSignin();

if (answer) {
  showProfile(answer.user);
} else {
  showSigninModal();
}
