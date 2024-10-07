import { isRedactForm } from "./formProfile/isRedactForm.js";
import { root } from "./formProfile/root.js";
import { submitUser } from "./formProfile/submitUser.js";
import { hiddenContentLoader } from "./universal/hiddenContentLoader.js";
import { showPhoto } from "./universal/showPhoto.js";
import { redactUser } from "./formProfile/redactUser.js";

root.photo.onchange = showPhoto.bind(this, root.photo);
if (isRedactForm()) {
  await redactUser();
}
root.form.addEventListener("submit", submitUser);

hiddenContentLoader();
