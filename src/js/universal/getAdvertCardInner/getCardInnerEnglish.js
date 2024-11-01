import { getEnglishDataValue } from "../cardData/getEnglishDataValue";
import { getCardPicture } from "./getCardPicture";

export function getCardInnerEnglish(info) {
  const data = getEnglishDataValue(info);

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
                  <li class="card__info-item"><p>Light: ${light}</p></li>
                  <li class="card__info-item"><p>Humidity: ${humidity}</p></li>
                  <li class="card__info-item"><p>Size: ${size}</p></li>
                  <li class="card__info-item">
                    <p>Life duration: <span>${lifeDuration}</span></p>
                  </li>
                  <li class="card__info-item">
                    <p>Allergenicity: <span>${alergenicity}</span></p>
                  </li>
                  <li class="card__info-item">
                    <p>Temperature: <span>${temperature}</span></p>
                  </li>
                </ul>
              </div>
            </div>
            <p class="card__date">${date}</p>
          </a>`;
}
