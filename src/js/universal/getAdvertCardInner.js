import { getDataValue } from "./cardData/getDataValue";

export function getAdvertCardInner(info) {
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
    date,
    id,
  } = data;

  return `
        <a href="advert.html?id=${id}" class="card" aria-label="advert ${info.name}">
          <p class="card__way">${way}</p>
          <div class="card__info-wrapp">
            <div class="card__thumb">
              ${getPicture(image)}
            </div>
            <div>
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

function getPicture(image) {
  const smallImg = image["very-small-175px"];
  const middleImg = image["medium-300px"];

  return `
  <picture class="card__img">
    <source
      srcset="
        ${middleImg} 1x,
        ${middleImg} 2x"
        media="(min-width: 1440px)"
      />
      <source
        srcset="
          ${smallImg} 1x,
          ${smallImg} 2x"
        media="(min-width: 768px)"
      />
      <source
        srcset="
          ${smallImg} 1x,
          ${smallImg} 2x"
      />
      <img
        src="${smallImg}"
        srcset="
          ${smallImg} 1x,
          ${smallImg} 2x"
        class="card__img"
        alt="plant"
        loading="lazy"
        width="250px"
        height="250px"
      />
    </picture>
  `;
}
