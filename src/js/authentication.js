import { setUser } from "./authentication/setUser";
import { settings } from "./authentication/translate/settings";
import { hiddenContentLoader } from "./universal/hiddenContentLoader";
import { setSwitchLanguage } from "./universal/translate/original/setSwitchLanguage";

await setUser();

setSwitchLanguage(settings);

hiddenContentLoader();
