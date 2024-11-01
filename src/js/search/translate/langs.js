import { searchCard } from "../searchCard";

function createSetLanguage() {
  return () => {
    searchCard.showSomeCards();
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
