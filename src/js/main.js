import { root } from "./main/root";
import "./main/swiper";
import { translatePage } from "./main/translate/translatePage";
import { hiddenContentLoader } from "./universal/hiddenContentLoader";

root.translateInput.addEventListener("change", translatePage)

hiddenContentLoader();
