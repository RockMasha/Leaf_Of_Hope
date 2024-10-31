export function translateText(data) {
  const { key, value, lang } = data;
  const elementsList = document.querySelectorAll(`[key=${key}]`);
  elementsList.forEach((elem) => {
    elem.textContent = value[lang];
  });
}
