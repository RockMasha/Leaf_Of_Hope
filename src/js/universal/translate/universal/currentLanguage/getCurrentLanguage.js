import { getCurrentLanguageData } from "./getCurrentLanguageData";

function createGetCurrentLanguage(data) {
  const { defaultLang, property } = data;
  return () => {
    const data = getCurrentLanguageData();
    return data ? (data[property] ? data[property] : defaultLang) : defaultLang;
  };
}

export const getCurrentLanguage = createGetCurrentLanguage({
  defaultLang: "ua",
  property: "original",
});
export const getCurrentVariableLang = createGetCurrentLanguage({
  defaultLang: "or",
  property: "variable",
});
