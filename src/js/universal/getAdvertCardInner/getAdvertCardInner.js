import { cardData } from "../cardData/cardData";
import { getDataValue } from "../cardData/getDataValue";
import { getCurrentVariableLang } from "../translate/universal/currentLanguage/getCurrentLanguage";
import { getCardPicture } from "./getCardPicture";

let lang;
export function getAdvertCardInner(info) {
  const dataValue = getDataValue(info);

  const {
    image,
    name,
    date,
    lang: cardLang,
    id,
    toxicity,
    plantCondition,
    plantType,
    height,
    light,
    temperature,
    way,
  } = dataValue;

  const variableLang = getCurrentVariableLang();
  lang = variableLang === "or" ? cardLang : variableLang;

  const result = `
          <a href="advert.html?id=${id}" class="card" aria-label="advert ${
    info.name
  }">
            <p class="card__way">${cardData.way[way][lang]}</p>
            <div class="card__info-wrapp">
              <div class="card__thumb">
                ${getCardPicture(image)}
              </div>
              <div class="card__main-block">
                <div class="card__title-wrapp">
                  <h3 class="card__title">${name}</h3>
                </div>
                <ul class="card__info-list">
                  ${getPropertiesEls([
                    { toxicity },
                    { plantCondition },
                    { plantType },
                    { height },
                    { light },
                    { temperature },
                  ])}
                </ul>
              </div>
            </div>
            <p class="card__date">${date}</p>
          </a>`;

  return result;
}

function getPropertiesEls(properties) {
  const propertiesInnerListEls = [];
  for (const item of properties) {
    const name = Object.keys(item)[0];

    const element = `<li class="card__info-item">
                      <p>${getName(name)}: ${item[name]}</p>
                    </li>`;
    propertiesInnerListEls.push(element);
  }
  return propertiesInnerListEls.join("");
}

function getName(property) {
  return cardData[property].name[lang];
}
