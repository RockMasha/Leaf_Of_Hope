export function translatePlaceholder(data) {
  const { key, value, lang } = data;
  const elementsList = document.querySelectorAll(`[key=${key}]`);
  elementsList.forEach((elem) => {
    elem.placeholder = value[lang];
  });
}
