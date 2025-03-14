import { defaultCardListSettings } from "../../universal/translate/universal/templeSettings/defaultCardListSettings";
import { propertiesSettings } from "../../universal/translate/universal/templeSettings/propertiesSettings";

export const settings = {
  allWayText: {
    ua: `Усе`,
    en: `All`,
  },
  mainTitle: {
    ua: `Обери свою рослинку`,
    en: `Choose your plant`,
  },
  searchFieldText: {
    ua: `Шукати`,
    en: `Search`,
  },
  langText: {
    ua: `Мова`,
    en: `Language`,
  },
  langUaText: {
    ua: `українські`,
    en: `ukrainian`,
  },
  langEnText: {
    ua: `англійські`,
    en: `english`,
  },
  sortText: {
    ua: `Сортування`,
    en: `Sort`,
  },
  sortNewText: {
    ua: `нові`,
    en: `new`,
  },
  sortOldText: {
    ua: `старі`,
    en: `old`,
  },
  sortStartText: {
    ua: `алфавіт ↓`,
    en: `alphabet ↓`,
  },
  sortEndText: {
    ua: `алфавіт ↑`,
    en: `alphabet ↑`,
  },
  moreParamsText: {
    ua: `ще параметри`,
    en: `more params`,
  },
  submitText: {
    ua: `Знайти`,
    en: `Find`,
  },
};

Object.assign(settings, propertiesSettings, defaultCardListSettings);
