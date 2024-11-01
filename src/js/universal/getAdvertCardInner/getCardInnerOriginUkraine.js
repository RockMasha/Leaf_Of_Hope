import { getDataOriginUkraineValue } from "../cardData/getDataOriginUkraineValue";
import { getCardPicture } from "./getCardPicture";

export function getCardInnerOriginUkraine(info) {
  const data = getDataOriginUkraineValue(info);

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
    date,
    id,
  } = data;

  return `
          <a href="advert.html?id=${id}" class="card" aria-label="advert ${
    info.name
  }">
            <p class="card__way">${way}</p>
            <div class="card__info-wrapp">
              <div class="card__thumb">
                ${getCardPicture(image)}
              </div>
              <div class="card__main-block">
                <div class="card__title-wrapp">
                  <h3  class="card__title">${name}</h3>
                </div>
                <ul class="card__info-list">
                  <li class="card__info-item"><p>Освітлення: ${light}</p></li>
                  <li class="card__info-item"><p>Вологість: ${humidity}</p></li>
                  <li class="card__info-item"><p>Розмір: ${size}</p></li>
                  <li class="card__info-item">
                    <p>Тривальсть життя: <span>${lifeDuration}</span></p>
                  </li>
                  <li class="card__info-item">
                    <p>Алергеність: <span>${alergenicity}</span></p>
                  </li>
                  <li class="card__info-item">
                    <p>Темпаратура: <span>${temperature}</span></p>
                  </li>
                </ul>
              </div>
            </div>
            <p class="card__date">${date}</p>
          </a>`;
}
