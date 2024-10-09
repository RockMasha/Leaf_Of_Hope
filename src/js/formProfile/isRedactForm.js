import { getValueSrcParams } from "../universal/getValueSrcParams";

export function isRedactForm() {
  const params = getValueSrcParams("redact");
  if (params) {
    return true;
  }
  return false;
}
