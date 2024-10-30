export function getAdvertPicture(image) {
  const smallImg = image["small-250px"];
  const middleImg = image["medium-300px"];
  const bigImg = image["large-500px"];

  return `
            <picture class="advert-maininfo__img">
              <source
                srcset="
                ${bigImg} 1x,
                ${bigImg} 2x"
                media="(min-width: 1440px)"
              />
              <source
                srcset="
                ${middleImg} 1x,
                ${middleImg} 2x
                "
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
                ${smallImg} 2x,"
                class="advert-maininfo__img"
                alt="plant"
                loading="lazy"
              />
            </picture>
          `;
}

export function getUserPicture(image) {
  const smallImg = image["tiny-100px"];
  const middleImg = image["very-small-175px"];
  const bigImg = image["small-250px"];

  return `
      <picture class="advert-userinfo__img big-photo">
        <source
          srcset="
            ${bigImg} 1x,
            ${bigImg} 2x"
          media="(min-width: 1440px)"
        />
        <source
          srcset="
            ${middleImg} 1x,
            ${middleImg} 2x"
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
            ${smallImg} 2x,"
          class="advert-userinfo__img big-photo"
          alt="plant"
          loading="lazy"
        />
      </picture>`;
}
