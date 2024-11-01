import { propertiesSettings } from "../../universal/translate/universal/templeSettings/propertiesSettings";

export const settings = {
  namePlaceholder: {
    placeholder: true,
    ua: `Введіть назву рослини`,
    en: `Enter the name of the plant`,
  },
  descriptionPlaceholder: {
    placeholder: true,
    ua: `Опишіть вашу рослинку`,
    en: `Describe your plant`,
  },
  wishPlaceholder: {
    placeholder: true,
    ua: `На що б ви хотіли обміняти цю рослину?`,
    en: `What would you like to exchange this plant for?`,
  },
  submitText: {
    ua: `Створити`,
    en: `Create`,
  },
};

Object.assign(settings, propertiesSettings);
