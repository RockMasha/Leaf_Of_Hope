import { getOneAdvert } from "../servise/api";
import { getValueSrcParams } from "../universal/getValueSrcParams";
import { getAdvert } from "./getAdvert";
import { root } from "./root";

export async function createAdvert() {
  const id = getValueSrcParams("id");
  const data = await getOneAdvert(id);

  const advertEl = getAdvert(data);
  root.main.innerHTML = advertEl;
}
