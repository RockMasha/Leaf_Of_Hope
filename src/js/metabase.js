import { getMetabaseIframe } from "./servise/api";
import { hiddenContentLoader } from "./universal/hiddenContentLoader";

const { iframeUrl } = await getMetabaseIframe();
console.log(iframeUrl);

const mainEl = document.querySelector("main");
mainEl.innerHTML = `<iframe src="${iframeUrl}" frameborder="0" width="100%" height="100%" allowtransparency ></iframe>`;

hiddenContentLoader();
