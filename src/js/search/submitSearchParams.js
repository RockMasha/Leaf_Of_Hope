import { createFormData } from "../universal/createFormData";
import { AdvertCards } from "./AdvertCards";
import { root } from "./root";

export async function submitSearchParams(event) {
  event.preventDefault();

  const data = createFormData(root.form);
  const advertCards = new AdvertCards(root.leftSide);
  advertCards.showFirstCard(data);
}
