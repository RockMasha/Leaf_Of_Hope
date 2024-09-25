import { root } from "./formAdvert/root";
import { showPhoto } from "./universal/showPhoto";

root.photo.onchange = showPhoto.bind(this, root.photo);
