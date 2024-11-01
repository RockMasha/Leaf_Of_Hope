import { getCurrentVariableLang } from "../translate/universal/currentLanguage/getCurrentLanguage";
import { getCardInnerEnglish } from "./getCardInnerEnglish";
import { getCardInnerOriginEnglish } from "./getCardInnerOriginEnglish";
import { getCardInnerOriginUkraine } from "./getCardInnerOriginUkraine";
import { getCardInnerUkraine } from "./getCardInnerUkraine";

export function getAdvertCardInner(info) {
  const lang = getCurrentVariableLang();

  switch (lang) {
    case "en":
      return getCardInnerEnglish(info);
    case "ua":
      return getCardInnerUkraine(info);
    case "or":
      return getCardInnerOrigin(info);
    default:
      break;
  }
}

function getCardInnerOrigin(info) {
  const { lang: langOr } = info;
  if (langOr === "en") {
    return getCardInnerOriginEnglish(info);
  }
  return getCardInnerOriginUkraine(info);
}
