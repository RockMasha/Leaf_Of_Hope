import { root } from "../root";
import { getTranslateToEngland } from "./getTranslateToEngland";
import { getTranslateToUkrainian } from "./getTranslateToUkrainian";

export function translatePage(event) {
  const isEngland = event.target.checked;
  const {
    mainInfoTitle,
    mainInfoText,
    opportunitiesTitle,
    opportunitiesSearchTitle,
    opportunitiesSearchText,
    opportunitiesExchangeTitle,
    opportunitiesExchangeText,
    opportunitiesGiveTitle,
    opportunitiesGiveText,
    needPlantsTitle,
    needPlantsText,
  } = isEngland ? getTranslateToEngland() : getTranslateToUkrainian();

  root.mainInfoTitle.textContent = mainInfoTitle;
  root.mainInfoText.textContent = mainInfoText;
  root.opportunitiesTitle.textContent = opportunitiesTitle;
  root.opportunitiesSearchTitle.textContent = opportunitiesSearchTitle;
  root.opportunitiesSearchText.textContent = opportunitiesSearchText;
  root.opportunitiesExchangeTitle.textContent = opportunitiesExchangeTitle;
  root.opportunitiesExchangeText.textContent = opportunitiesExchangeText;
  root.opportunitiesGiveTitle.textContent = opportunitiesGiveTitle;
  root.opportunitiesGiveText.textContent = opportunitiesGiveText;
  root.needPlantsTitle.textContent = needPlantsTitle;
  root.needPlantsText.textContent = needPlantsText;
}
