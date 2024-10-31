import { createAdvert } from "./advert/createAdvert";
import { langs } from "./advert/translate/langs";
import { hiddenContentLoader } from "./universal/hiddenContentLoader";
import { setSwitchVariableLanguage } from "./universal/translate/variable/setSwitchVariableLanguage";

await createAdvert();

setSwitchVariableLanguage(langs);

hiddenContentLoader();
