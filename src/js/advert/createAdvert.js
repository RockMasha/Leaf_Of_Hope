import { getOneAdvert } from "../servise/api";
import { getAdvert } from "./getAdvert";
import { getAdvertId } from "./getAdvertId";
import { root } from "./root";

export async function createAdvert() {
  const id = getAdvertId();
  const data = await getOneAdvert(id);

  const advertEl = getAdvert(data);
  root.main.innerHTML = advertEl;
}