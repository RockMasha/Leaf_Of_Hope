import { isRedactForm } from "./formProfile/isRedactForm.js";
import { root } from "./formProfile/root.js";
import { submitUser } from "./formProfile/submitUser.js";
import { hiddenContentLoader } from "./universal/hiddenContentLoader.js";
import { showPhoto } from "./universal/showPhoto.js";
import { setRegistrationFields } from "./formProfile/setRegistrationFields.js";
import { setInputs } from "./formProfile/setInputs.js";
import { setSwitchLanguage } from "./universal/translate/original/setSwitchLanguage.js";
import { settings } from "./formProfile/translate/settings.js";
import { checkLogin } from "./universal/checkLogin.js";
import { changePage } from "./universal/chanhePage.js";

root.photo.onchange = showPhoto.bind(this, root.photo);
const isLogin = await checkLogin();
if (isRedactForm()) {
  if (!isLogin) {
    changePage("profile.html");
  }
  await setInputs();
} else {
  if (isLogin) {
    changePage("profile.html");
  }
  setRegistrationFields();
}

root.form.addEventListener("submit", submitUser);

setSwitchLanguage(settings);

hiddenContentLoader();
