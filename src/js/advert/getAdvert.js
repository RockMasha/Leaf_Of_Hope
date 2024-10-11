import { cardData } from "../cardData/cardData";
import { redactDate } from "../universal/redactDate";

export function getAdvert(info) {
  const {
    alergenicity,
    humidity,
    image,
    keeper,
    lifeDuration,
    light,
    name,
    size,
    temperature,
    way,
    wish,
    description,
    createdAt,
  } = info;

  const date = redactDate(createdAt);
  const { username, email, avatar, adress, phone } = keeper;

  return `
        <section class="advert">
          <div class="container advert__container">
            <div class="advert-maininfo">
              <img
              class="advert-maininfo__img"
              src="${image}"
              alt="photo of plant"
            />
              <div>
                <p class="advert-maininfo__date">${date}</p>
                <h2 class="advert-maininfo__title">${name}</h2>
                <div class="advert-maininfo-way">
                  <p class="advert-maininfo-way__text">${cardData.way[way]}</p>
                </div>
                <ul class="advert-properties">
                  <li class="advert-properties__item">
                    <p class="advert-properties__text">Освітлення: ${
                      cardData.light[light]
                    }</p>
                  </li>
                  <li class="advert-properties__item">
                    <p class="advert-properties__text">Вологість: ${
                      cardData.humidity[humidity]
                    }</p>
                  </li>
                  <li class="advert-properties__item">
                    <p class="advert-properties__text">Розмір: ${
                      cardData.size[size]
                    }</p>
                  </li>
                  <li class="advert-properties__item">
                    <p class="advert-properties__text">
                      Тривальсть життя: <span>${
                        cardData.lifeDuration[lifeDuration]
                      }</span>
                    </p>
                  </li>
                  <li class="advert-properties__item">
                    <p class="advert-properties__text">
                      Алергеність: <span>${
                        cardData.alergenicity[alergenicity]
                      }</span>
                    </p>
                  </li>
                  <li class="advert-properties__item">
                    <p class="advert-properties__text">
                      Темпаратура: <span>${
                        cardData.temperature[temperature]
                      }</span>
                    </p>
                  </li>
                </ul>
              </div>
            </div>
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
                  <img
                  class="advert-userinfo__img big-photo"
                  src="${avatar}"
                  alt="photo og profile"
                  />
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
                way === "exchange" ? `` : `is-hidden`
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
