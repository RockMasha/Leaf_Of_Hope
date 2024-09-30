import { root } from "./createProfile/root.js";
import { submitProfileForm } from "./createProfile/submitProfileForm.js";
import { hiddenContentLoader } from "./universal/hiddenContentLoader.js";
import { showPhoto } from "./universal/showPhoto.js";

root.photo.onchange = showPhoto.bind(this, root.photo);

root.form.addEventListener("submit", submitProfileForm)

hiddenContentLoader()