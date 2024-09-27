import { getAdverts } from "../servise/api";
import { createFormData } from "../universal/createFormData";
import { createAdverts } from "./createAdverts";
import { root } from "./root";

export async function submitSearchParams(event) {
  event.preventDefault();
  console.log(1);
  

  const data = createFormData(root.form);
  const answer = await getAdverts(data);
  console.log(answer);

  const cards = createAdverts(answer.result);
  root.cardList.innerHTML = cards.join();
}
