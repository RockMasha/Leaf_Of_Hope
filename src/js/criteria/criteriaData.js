import { cardData } from "../universal/cardData/cardData";
import { getCriteriaTextData } from "./criteriaTextData";

const criteriaData = {};
const criteriaNameData = { ...cardData };
const criteriaTextData = getCriteriaTextData();

for (const key in criteriaTextData) {
  criteriaData[key] = {
    name: { ...criteriaNameData[key].name },
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
      name: criteriaNameData[prop][key],
      text: criteriaTextData[prop][key],
    };
  }
  return variables;
}

function changeVariable(name, data) {
  criteriaData[name].name = data;
}

changeVariable("watering", {
  ua: `Полив`,
  en: `Watering`,
});

export function getCriteriaData() {
  return { ...criteriaData };
}
