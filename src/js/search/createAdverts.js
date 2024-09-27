import { getCard } from "./getCard";

export function createAdverts(info) {
  return info.map((advert) => getCard(advert));
}