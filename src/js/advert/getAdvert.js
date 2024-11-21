import { cardData } from "../universal/cardData/cardData";
import { getCurrentVariableLang } from "../universal/translate/universal/currentLanguage/getCurrentLanguage";
import { getAdvertPicture, getUserPicture } from "./getPicture";

let lang;
export function getAdvert(info, getData) {
  const data = getData(info);

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
          <div class="container advert__container">
            <h1 hidden>${pageName}</h1>
            <div class="advert-maininfo">
              ${getAdvertPicture(image)}
              <div>
                <p class="advert-maininfo__date">${date}</p>
                <h2 class="advert-maininfo__title">${name}</h2>
                <div class="advert-maininfo-way">
                  <p class="advert-maininfo-way__text">${way}</p>
                </div>
                <ul class="advert-properties">
                  ${getPropertiesEls([
                    { toxicity },
                    { plantCondition },
                    { plantType },
                    { height },
                    { light },
                    { temperature },
                    { watering },
                  ])}
                </ul>
              </div>
            </div>
            <ul class="advert-properties advert-properties_more advert-properties_hidden">
              <li>
                <ul class="advert-properties__more-list">
                  ${getPropertiesEls([
                    { care },
                    { substrate },
                    { windowDistance },
                  ])}
                </ul>
              </li>
              <li>
                <ul class="advert-properties__more-list">
                  ${getPropertiesEls([
                    { allergenicity },
                    { growthRate },
                    { lifeDuration },
                  ])}
                </ul>
              </li>
            </ul>
            <button class="advert-properties__more-btn" aria-label="more properties">
              <ul class="advert-properties-cross">
                <li class="advert-properties-cross__line advert-properties-cross__line_vertical"></li>
                <li class="advert-properties-cross__line advert-properties-cross__line_horizontal"></li>
              </ul>
            </button>
            <div class="advert-discreption">
              <h2 class="advert-discreption__title">${descriptionTitle}</h2>
              <p class="advert-discreption__text">
                ${
                  description
                    ? description
                    : `<span class="advert-discreption__text_default">${defaultDescription}</span>`
                }
              </p>
            </div>
            <div class="advert-user">
              <div class="advert-userinfo">
                <div class="advert-userinfo__profile-img">
                  ${getUserPicture(avatar)}
                </div>
                <div class="advert-userinfo__userinfos">
                  <h2 class="advert-userinfo__name">${username}</h2>
                  <p class="advert-userinfo__adress">${adress}</p>
                  <p class="advert-userinfo__phone">
                    ${phone}
                  </p>
                  <p class="advert-userinfo__email">
                    ${email}
                  </p>
                </div>
              </div>
              <div class="advert-wishes ${
                info.way === "exchange" ? `` : `is-hidden`
              }">
                <h2 class="advert-wishes__title">${WishTitle}</h2>
                <p class="advert-wishes__text">
                 ${
                   wish
                     ? wish
                     : `<span class="advert-wishes__text_default">${defaultWish}</span>`
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

function getPropertiesEls(properties) {
  const propertiesInnerListEls = [];
  for (const item of properties) {
    const name = Object.keys(item)[0];

    const element = `
    <li class="advert-properties__item">
      <p class="advert-properties__text">${getName(name)}: ${item[name]}</p>
    </li>`;
    propertiesInnerListEls.push(element);
  }
  return propertiesInnerListEls.join("");
}

function getName(property) {
  return cardData[property].name[lang];
}
