import { profileCards } from "../profileCards";

function createSetLanguage() {
  return () => {
    profileCards.showSomeCards();
  };
}

const setUkrainian = createSetLanguage();
const setEnglish = createSetLanguage();
const setOriginal = createSetLanguage();

export const langs = {
  setUkrainian,
  setEnglish,
  setOriginal,
};
