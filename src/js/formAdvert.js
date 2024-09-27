import { root } from "./formAdvert/root";
import { submitFormAdvert } from "./formAdvert/submitFormAdvert";
import { isSignin } from "./signin/isSignin";
import { showPhoto } from "./universal/showPhoto";

isSignin();

root.photo.onchange = showPhoto.bind(this, root.photo);

root.form.addEventListener("submit", submitFormAdvert);
