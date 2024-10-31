import { getCurrentLanguageData } from "./getCurrentLanguageData";

function createSetCurrentLanguage(property) {
  return (lang) => {
    const data = getCurrentLanguageData();
    data[property] = lang;
    const LSLanguage = JSON.stringify(data);
    localStorage.setItem("lang", LSLanguage);
  };
}

export const setCurrentLanguage = createSetCurrentLanguage("original");
export const setCurrentVariableLanguage = createSetCurrentLanguage("variable");
