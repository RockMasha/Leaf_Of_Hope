import { cardData } from "../cardData/cardData";

export function getAdvertCardInner(info) {
  const {
    alergenicity,
    humidity,
    image,
    lifeDuration,
    light,
    name,
    size,
    temperature,
    way,
    _id: id,
  } = info;

  return ` <a href="advert.html?id=${id}" class="card">
          <p class="card__way">${cardData.way[way]}</p>
          <div class="card__info-wrapp">
            <div class="card__thumb">
              <img
                class="card__img"
                src="${image}"
                alt="Рослинка"
              />
            </div>
            <div>
              <div class="card__title-wrapp">
                <h4 class="card__title">${name}</h4>
              </div>
              <ul class="card__info-list">
                <li class="card__info-item"><p>Освітлення: ${cardData.light[light]}</p></li>
                <li class="card__info-item"><p>Вологість: ${cardData.humidity[humidity]}</p></li>
                <li class="card__info-item"><p>Розмір: ${cardData.size[size]}</p></li>
                <li class="card__info-item">
                  <p>Тривальсть життя: <span>${cardData.lifeDuration[lifeDuration]}</span></p>
                </li>
                <li class="card__info-item">
                  <p>Алергеність: <span>${cardData.alergenicity[alergenicity]}</span></p>
                </li>
                <li class="card__info-item">
                  <p>Темпаратура: <span>${cardData.temperature[temperature]}</span></p>
                </li>
              </ul>
            </div>
          </div>
        </a>`;
}
