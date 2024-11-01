import { advertCard } from "../advertsCard";

function createSetLanguage() {
  return () => {
    advertCard.showSomeCards();
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
