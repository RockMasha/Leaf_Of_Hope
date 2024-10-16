import { checkWishState } from "./formAdvert/checkWishState";
import { redactAdvert } from "./formAdvert/redactAdvert";
import { root } from "./formAdvert/root";
import { submitFormAdvert } from "./formAdvert/submitFormAdvert";
import { isSignin } from "./signin/isSignin";
import { showSigninModal } from "./signin/showSigninModal";
import { getValueSrcParams } from "./universal/getValueSrcParams";
import { hiddenContentLoader } from "./universal/hiddenContentLoader";
import { showPhoto } from "./universal/showPhoto";

const id = getValueSrcParams("id");
if (id) {
  await redactAdvert();
} else {
  const answer = await isSignin();
  if (!answer) {
    showSigninModal();
  }
}

root.way.addEventListener("click", checkWishState);

root.photo.onchange = showPhoto.bind(this, root.photo);

root.form.addEventListener("submit", submitFormAdvert);

hiddenContentLoader();
