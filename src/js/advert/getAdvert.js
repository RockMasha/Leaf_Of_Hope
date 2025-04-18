import { cardData } from "../universal/cardData/cardData";
import { getDataValue } from "../universal/cardData/getDataValue";
import { getCurrentVariableLang } from "../universal/translate/universal/currentLanguage/getCurrentLanguage";
import { getAdvertPicture, getUserPicture } from "./getPicture";

let lang;
export function getAdvert(info) {
  const data = getDataValue(info);

  const {
    image,
    name,
    description,
    wish,
    date,
    lang: cardLang,
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
    rarity,
    username,
    email,
    avatar,
    adress,
    phone,
    way,
  } = data;

  const pageLang = getCurrentVariableLang();
  lang = getCurrentVariableLang() === "or" ? cardLang : pageLang;

  const {
    pageName,
    descriptionTitle,
    defaultDescription,
    WishTitle,
    defaultWish,
  } = getSignatures();

  return `
          <div class="container plant-post__container">
            <h1 hidden>${pageName}</h1>
            <div class="plant-post-maininfo">
              ${getAdvertPicture(image)}
              <div class="plant-post-maininfo__property-box">
                <p class="plant-post-maininfo__date">${date}</p>
                <h2 class="plant-post-maininfo__title">${name}</h2>
                <div class="plant-post-maininfo-way">
                  <p class="plant-post-maininfo-way__text">${
                    cardData.way[way][lang]
                  }</p>
                </div>
                <a class="criteria-btn" href="criteria.html">i</a>
                <ul class="plant-post-properties">
                  ${getPropertiesEls([
                    { toxicity },
                    { plantCondition },
                    { plantType },
                    { height },
                  ])}
                  ${getPropertiesEls(
                    [{ light }, { temperature }, { watering }],
                    false
                  )}
                </ul>
              </div>
            </div>
            <ul class="plant-post-properties plant-post-properties_more plant-post-properties_hidden">
              <li>
                <ul class="plant-post-properties__more-list">
                  ${getPropertiesEls([
                    { care },
                    { substrate },
                    { windowDistance },
                    { growthRate },
                  ])}
                </ul>
              </li>
              <li>
                <ul class="plant-post-properties__more-list">
                  ${getPropertiesEls([
                    { allergenicity },
                    { lifeDuration },
                    { rarity },
                  ])}
                </ul>
              </li>
            </ul>
            <button class="plant-post-properties__more-btn" aria-label="more properties">
              <ul class="plant-post-properties-cross">
                <li class="plant-post-properties-cross__line plant-post-properties-cross__line_vertical"></li>
                <li class="plant-post-properties-cross__line plant-post-properties-cross__line_horizontal"></li>
              </ul>
            </button>
            <div class="plant-post-discreption">
              <h2 class="plant-post-discreption__title">${descriptionTitle}</h2>
              <p class="plant-post-discreption__text">
                ${
                  description
                    ? description
                    : `<span class="plant-post-discreption__text_default">${defaultDescription}</span>`
                }
              </p>
            </div>
            <div class="plant-post-user">
              <div class="plant-post-userinfo">
                <div class="plant-post-userinfo__profile-img">
                  ${getUserPicture(avatar)}
                </div>
                <div class="plant-post-userinfo__userinfos">
                  <h2 class="plant-post-userinfo__name">${username}</h2>
                  <p class="plant-post-userinfo__adress">${
                    adress ? adress : "adress hidden"
                  }</p>
                  <p class="plant-post-userinfo__phone">
                    ${phone ? phone : "phone hidden"}
                  </p>
                  <p class="plant-post-userinfo__email">
                    ${email}
                  </p>
                </div>
              </div>
              <div class="plant-post-wishes ${
                info.way === "exchange" ? `` : `is-hidden`
              }">
                <h2 class="plant-post-wishes__title">${WishTitle}</h2>
                <p class="plant-post-wishes__text">
                 ${
                   wish
                     ? wish
                     : `<span class="plant-post-wishes__text_default">${defaultWish}</span>`
                 }
                </p>
              </div>
            </div>
          </div>`;
}

function getSignatures() {
  const items = {};
  items.pageName = lang === "ua" ? "Оголошення" : "Advert";
  items.descriptionTitle = lang === "ua" ? "Опис" : "Description";
  items.defaultDescription =
    lang === "ua" ? "Немає опису" : "There is no description";
  items.WishTitle = lang === "ua" ? "Побажання" : "Wish";
  items.defaultWish = lang === "ua" ? "Немає побажань" : "There are no wishes";
  return items;
}

function getPropertiesEls(properties, isOrdinary = true) {
  const propertiesInnerListEls = [];

  for (const item of properties) {
    const name = Object.keys(item)[0];
    let element = isOrdinary
      ? getOrdinaryItem(item, name)
      : getSpanItem(item, name);
    propertiesInnerListEls.push(element);
  }

  return propertiesInnerListEls.join("");
}

function getOrdinaryItem(item, name) {
  return `
  <li class="plant-post-properties__item">
    <p class="plant-post-properties__text">${getName(name)}: ${item[name]}</p>
  </li>`;
}
function getSpanItem(item, name) {
  return `
  <li class="plant-post-properties__item">
    <p class="plant-post-properties__text"> 
    ${getName(name)}: <span>${item[name]}</span>
    </p>
  </li>`;
}

function getName(property) {
  return cardData[property].name[lang];
}
