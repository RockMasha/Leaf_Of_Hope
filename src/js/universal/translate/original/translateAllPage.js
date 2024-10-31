import { translateText } from "./translateText";

export function translateAllPage(setting, lang = "en") {
  for (const key in setting) {
    const value = setting[key];
    const data = { key, value, lang };
    translateText(data);
  }
}
