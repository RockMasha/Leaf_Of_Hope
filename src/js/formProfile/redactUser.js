import { setInputs } from "./setInputs";
import { redactFormInner } from "./redactFormInner";


export async function redactUser() {
  redactFormInner();
  await setInputs();
}
