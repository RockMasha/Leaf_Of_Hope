import { isRedactForm } from "./formProfile/isRedactForm.js";
import { root } from "./formProfile/root.js";
import { submitUser } from "./formProfile/submitUser.js";
import { hiddenContentLoader } from "./universal/hiddenContentLoader.js";
import { showPhoto } from "./universal/showPhoto.js";
import { setRegistrationFields } from "./formProfile/setRegistrationFields.js";
import { setInputs } from "./formProfile/setInputs.js";

root.photo.onchange = showPhoto.bind(this, root.photo);
if (isRedactForm()) {
  await setInputs();
} else {
  setRegistrationFields();
}

root.form.addEventListener("submit", submitUser);

hiddenContentLoader();
