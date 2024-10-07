import { root } from "./root";
import { setInputs } from "./setInputs";

export async function redactAdvert() {
  await setInputs();
  root.btnSubmit.textContent = "Зберегти";
}
