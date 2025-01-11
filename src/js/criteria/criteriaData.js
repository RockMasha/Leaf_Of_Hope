import { cardData } from "../universal/cardData/cardData";
import { getCriteriaTextData } from "./criteriaTextData";

const criteriaData = {};

const criteriaTextData = getCriteriaTextData();

for (const key in criteriaTextData) {
  criteriaData[key] = {
    name: { ...cardData[key].name },
    text: criteriaTextData[key].mainText,
    variables: getVariables(key),
  };
}

function getVariables(prop) {
  const variables = {};
  for (const key in criteriaTextData[prop]) {
    if (key === "mainText") {
      continue;
    }
    variables[key] = {
      name: cardData[prop][key],
      text: criteriaTextData[prop][key],
    };
  }
  return variables;
}

export function getCriteriaData() {
  return { ...criteriaData };
}
