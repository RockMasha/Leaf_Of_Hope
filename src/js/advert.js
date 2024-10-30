import { createAdvert } from "./advert/createAdvert";
import { root } from "./advert/root";
import { translatePage } from "./advert/translate/translatePage";
import { hiddenContentLoader } from "./universal/hiddenContentLoader";

root.translateWrapp.addEventListener("click", translatePage);
await createAdvert();

hiddenContentLoader();
