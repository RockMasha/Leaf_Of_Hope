import { getAdverts } from "../servise/api";
import { createFormData } from "../universal/createFormData";
import { createAdverts } from "./createAdverts";
import { root } from "./root";

export async function submitSearchParams(event) {
  event.preventDefault();

  const data = createFormData(root.form);
  const answer = await getAdverts(data);

  const cards = createAdverts(answer.result);
  root.cardList.innerHTML = cards.join("");
}
