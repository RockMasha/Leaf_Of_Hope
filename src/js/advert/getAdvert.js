import { getDataValue } from "../universal/cardData/getDataValue";

export function getAdvert(info) {
  const data = getDataValue(info);

  const {
    light,
    alergenicity,
    humidity,
    size,
    temperature,
    lifeDuration,
    way,
    image,
    name,
    wish,
    description,
    username,
    email,
    avatar,
    adress,
    phone,
    date,
    attention,
    survive,
    state,
    flowering,
    growthRate,
    edible,
  } = data;

  return `
        <section class="advert">
          <div class="container advert__container">
            <div class="advert-maininfo">
              <picture class="advert-maininfo__img">
                <source
                  srcset="${image["large-500px"]}"
                  media="(min-width: 1440px)"
                />
                <source
                  srcset="${image["medium-300px"]}"
                  media="(min-width: 768px)"
                />
                <source
                  srcset="${image["small-250px"]}"
                />
                <img
                  src="${
                    image["small-250px"]
                      ? image["small-250px"]
                      : "./img/universal/defoultPlantPhoto.jpg"
                  }"
                  class="advert-maininfo__img"
                  alt="plant"
                  loading="lazy"
                />
              </picture>
              <div>
                <p class="advert-maininfo__date">${date}</p>
                <h2 class="advert-maininfo__title">${name}</h2>
                <div class="advert-maininfo-way">
                  <p class="advert-maininfo-way__text">${way}</p>
                </div>
                <ul class="advert-properties">
                  <li class="advert-properties__item">
                    <p class="advert-properties__text">Освітлення: ${light}</p>
                  </li>
                  <li class="advert-properties__item">
                    <p class="advert-properties__text">Вологість: ${humidity}</p>
                  </li>
                  <li class="advert-properties__item">
                    <p class="advert-properties__text">Розмір: ${size}</p>
                  </li>
                  <li class="advert-properties__item">
                    <p class="advert-properties__text">
                      Тривальсть життя: <span>${lifeDuration}</span>
                    </p>
                  </li>
                  <li class="advert-properties__item">
                    <p class="advert-properties__text">
                      Алергеність: <span>${alergenicity}</span>
                    </p>
                  </li>
                  <li class="advert-properties__item">
                    <p class="advert-properties__text">
                      Темпаратура: <span>${temperature}</span>
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <ul class="advert-properties advert-properties_more advert-properties_hidden">
              <li>
                <ul class="advert-properties__more-list">
                  <li class="advert-properties__item">
                    <p class="advert-properties__text">Затратва уваги: ${attention}</p>
                  </li>
                  <li class="advert-properties__item">
                    <p class="advert-properties__text">Живучість: ${survive}</p>
                  </li>
                  <li class="advert-properties__item">
                    <p class="advert-properties__text">Стан: ${state}</p>
                  </li>
                </ul>
              </li>
              <li>
                <ul class="advert-properties__more-list">
                  <li class="advert-properties__item">
                    <p class="advert-properties__text">Темп Зростання: ${growthRate}</p>
                  </li>
                  <li class="advert-properties__item">
                    <p class="advert-properties__text">Цвітіння: ${flowering}</p>
                  </li>
                  <li class="advert-properties__item">
                    <p class="advert-properties__text">Їстівна: ${edible}</p>
                  </li>
                </ul>
              </li>
            </ul>
            <button class="advert-properties__more-btn">
              <ul class="advert-properties-cross">
                <li class="advert-properties-cross__line advert-properties-cross__line_vertical"></li>
                <li class="advert-properties-cross__line advert-properties-cross__line_horizontal"></li>
              </ul>
            </button>
            <div class="advert-discreption">
              <h2 class="advert-discreption__title">Опис</h2>
              <p class="advert-discreption__text">
                ${
                  description
                    ? description
                    : `<span class="advert-discreption__text_default">Немає опису</span>`
                }
              </p>
            </div>
            <div class="advert-user">
              <div class="advert-userinfo">
                <div class="advert-userinfo__profile-img">
                  ${getPicture(avatar)}
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
                <h2 class="advert-wishes__title">Побажання</h2>
                <p class="advert-wishes__text">
                 ${
                   wish
                     ? wish
                     : `<span class="advert-wishes__text_default">Немає побажань</span>`
                 }
                </p>
              </div>
            </div>
          </div>
        </section>`;
}

function getPicture(image) {
  const smallImg = image["large-500px"];
  const middleImg = image["medium-300px"];
  const bigImg = image["large-500px"];

  return `
    <picture class="advert-userinfo__img big-photo">
      <source
        srcset="${bigImg}"
        media="(min-width: 1440px)"
      />
      <source
        srcset="${middleImg}"
        media="(min-width: 768px)"
      />
      <source
        srcset="${smallImg}"
      />
      <img
        src="${smallImg ? smallImg : "./img/universal/defoultPlantPhoto.jpg"}"
        class="advert-userinfo__img big-photo"
        alt="plant"
        loading="lazy"
      />
    </picture>`;
}
