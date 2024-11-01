export function getCardPicture(image) {
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
