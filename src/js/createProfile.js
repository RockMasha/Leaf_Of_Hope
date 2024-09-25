import { root } from "./createProfile/root.js";
import { showPhoto } from "./universal/showPhoto.js";

root.photo.onchange = showPhoto.bind(this, root.photo);
