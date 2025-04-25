import { getMetabaseIframe } from "./servise/api";
import { hiddenContentLoader } from "./universal/hiddenContentLoader";

try {
  const { iframeUrl } = await getMetabaseIframe();
  const mainEl = document.querySelector("main");
  mainEl.innerHTML = `<iframe src="${iframeUrl}" frameborder="0" width="100%" height="100%" allowtransparency ></iframe>`;
  mainEl.setAttribute("metabase", "");
} catch (error) {
  console.log("error", error);
}

hiddenContentLoader();
