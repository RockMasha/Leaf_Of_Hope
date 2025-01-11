import { getCurrentLanguage } from "../universal/translate/universal/currentLanguage/getCurrentLanguage";
import { createCriterion } from "./createСriterion";
import { getCriteriaData } from "./criteriaData";
import { root } from "./root";

const criteriaData = getCriteriaData();

export function setCriteriaList() {
  const lang = getCurrentLanguage();
  let list = ``;
  for (const key in criteriaData) {
    const data = {
      name: key,
      data: criteriaData[key],
      lang,
    };
    list += createCriterion(data);
  }

  root.criteriaList.innerHTML = list;
}
