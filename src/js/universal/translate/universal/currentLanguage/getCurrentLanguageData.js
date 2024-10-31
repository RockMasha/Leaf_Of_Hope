export function getCurrentLanguageData() {
  const LSLanguage = localStorage.getItem("lang");
  return LSLanguage ? JSON.parse(LSLanguage) : {};
}
