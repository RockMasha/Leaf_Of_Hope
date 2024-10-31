import "./main/swiper";
import { settings } from "./main/translate/settings.js";
import { hiddenContentLoader } from "./universal/hiddenContentLoader";
import { setSwitchLanguage } from "./universal/translate/original/setSwitchLanguage.js";

setSwitchLanguage(settings);

hiddenContentLoader();
