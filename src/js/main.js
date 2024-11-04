import { resizeSwiper } from "./main/swiper/resizeSwiper.js";
import "./main/swiper/swiper.js";
import { settings } from "./main/translate/settings.js";
import { hiddenContentLoader } from "./universal/hiddenContentLoader";
import { setSwitchLanguage } from "./universal/translate/original/setSwitchLanguage.js";

window.addEventListener("resize", resizeSwiper);

setSwitchLanguage(settings);

hiddenContentLoader();
