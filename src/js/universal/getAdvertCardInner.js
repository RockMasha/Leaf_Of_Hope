import { cardData } from "./cardData/cardData";
import { redactDate } from "./redactDate";

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
    createdAt,
    _id: id,
  } = info;

  const date = redactDate(createdAt);

  return `
        <a href="advert.html?id=${id}" class="card">
          <p class="card__way">${cardData.way[way]}</p>
          <div class="card__info-wrapp">
            <div class="card__thumb">
              <img
                class="card__img"
                src="${image ? image : "./img/universal/defoultPlantPhoto.jpg"}"
                alt="Рослинка"
                loading="lazy"
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
          <p class="card__date">${date}</p>
        </a>`;
}