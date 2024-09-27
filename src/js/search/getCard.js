export function getCard(info) {
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
  } = info;

  return `
      <li class="left-side__item">
        <a href="advert.html" class="card">
          <p class="card__way">${way}</p>
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
        </a>
      </li>
    `;
}
