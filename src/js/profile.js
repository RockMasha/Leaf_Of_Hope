import { isSignin } from "./signin/isSignin";
import { showSigninModal } from "./signin/showSigninModal";
import { showUserInfo } from "./profile/showUserInfo";
import { showUserAdverts } from "./profile/showUserAdverts";

const answer = await isSignin();

if (answer) {
  showUserInfo(answer.user);
  showUserAdverts();
} else {
  showSigninModal();
}
