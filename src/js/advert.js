import { createAdvert } from "./advert/createAdvert";
import { hiddenContentLoader } from "./universal/hiddenContentLoader";

await createAdvert();

hiddenContentLoader();
