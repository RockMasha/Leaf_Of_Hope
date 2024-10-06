import { redactFormInner } from "./redactFormInner";
import { setInputs } from "./setInputs";

export async function redactUser() {
  redactFormInner();
  await setInputs();
}
