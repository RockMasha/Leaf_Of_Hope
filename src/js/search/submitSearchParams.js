import { createFormObj } from "../universal/createFormObj";
import { AdvertCards } from "./AdvertCards";
import { root } from "./root";

export async function submitSearchParams(event) {
  event.preventDefault();

  const data = createFormObj(root.form);

  const advertCards = new AdvertCards(root.leftSide);
  advertCards.showFirstCard(data);
}
