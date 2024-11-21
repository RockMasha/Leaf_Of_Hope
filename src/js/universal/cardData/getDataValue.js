import { redactDate } from "../redactDate";
import { getCurrentVariableLang } from "../translate/universal/currentLanguage/getCurrentLanguage";
import { cardData } from "./cardData";

let lang;
export function getDataValue(info) {
  const {
    image,
    keeper,
    name: changeName,
    description: changeDescription,
    wish: changeWish,
    translated,
    createdAt,
    lang: cardLang,
    _id: id,
    toxicity,
    plantCondition,
    plantType,
    height,
    light,
    temperature,
    watering,
    care,
    substrate,
    windowDistance,
    allergenicity,
    growthRate,
    lifeDuration,
    way,
  } = info;

  const currentLang = getCurrentVariableLang();
  const dateLang =
    currentLang === "or" ? (cardLang === "ua" ? "ua" : "en") : currentLang;
  lang = dateLang;

  const date = redactDate(createdAt, dateLang);
  const { username, email, avatar, adress, phone } = keeper;

  let description;
  if (changeDescription != undefined) {
    description =
      currentLang === "or"
        ? changeDescription
        : currentLang === "ua"
        ? translated?.description?.transUa
        : translated?.description?.transEn;
  } else {
    description = cardLang === "ua" ? "Немає Опису" : "No Description";
  }

  let name =
    currentLang === "or"
      ? changeName
      : currentLang === "ua"
      ? translated?.name?.transUa
      : translated?.name?.transEng;
  let wish;
  if (changeWish != undefined) {
    wish =
      currentLang === "or"
        ? changeWish
        : currentLang === "ua"
        ? translated?.wish?.transUa
        : translated?.wish?.transEn;
  } else {
    wish = cardLang === "ua" ? "Немає побажань" : "No wish";
  }

  const result = {
    image,
    name,
    description,
    wish,
    date,
    lang: cardLang,
    id,
    toxicity: processProperty({ toxicity }),
    plantCondition: processProperty({ plantCondition }),
    plantType: processProperty({ plantType }),
    height: processProperty({ height }),
    light: processProperty({ light }),
    temperature: processProperty({ temperature }),
    watering: processProperty({ watering }),
    care: processProperty({ care }),
    substrate: processProperty({ substrate }),
    windowDistance: processProperty({ windowDistance }),
    allergenicity: processProperty({ allergenicity }),
    growthRate: processProperty({ growthRate }),
    lifeDuration: processProperty({ lifeDuration }),
    username,
    email,
    avatar,
    adress,
    phone,
    way,
  };

  return result;
}

function processProperty(item) {
  const name = Object.keys(item)[0];
  const property = item[name];
  const defaultText = lang === "ua" ? `не вказано` : `no choose`;

  const answer =
    `${property}` != "undefined"
      ? cardData[name]
        ? cardData[name][property]
          ? cardData[name][property][lang]
            ? cardData[name][property][lang]
            : defaultText
          : defaultText
        : defaultText
      : defaultText;

  return answer;
}
