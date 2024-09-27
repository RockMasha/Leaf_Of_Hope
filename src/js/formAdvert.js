import { root } from "./formAdvert/root";
import { isSignin } from "./universal/isSignin";
import { showPhoto } from "./universal/showPhoto";

isSignin();

root.photo.onchange = showPhoto.bind(this, root.photo);
