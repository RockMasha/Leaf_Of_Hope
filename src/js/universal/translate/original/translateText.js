export function translateText(data) {
  const { key, value, lang } = data;
  const element = document.querySelector(`[key=${key}]`);
  if (element) {
    element.textContent = value[lang];
  }
}
