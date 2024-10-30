import { getAdvertPicture, getUserPicture } from "./getPicture";

export function getEnglishAdvert(info, getData) {
  const data = getData(info);

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
          <div class="container advert__container">
            <h1 hidden>Advert</h1>
            <div class="advert-maininfo">
              ${getAdvertPicture(image)}
              <div>
                <p class="advert-maininfo__date">${date}</p>
                <h2 class="advert-maininfo__title">${name}</h2>
                <div class="advert-maininfo-way">
                  <p class="advert-maininfo-way__text">${way}</p>
                </div>
                <ul class="advert-properties">
                  <li class="advert-properties__item">
                    <p class="advert-properties__text">Light: ${light}</p>
                  </li>
                  <li class="advert-properties__item">
                    <p class="advert-properties__text">Humidity: ${humidity}</p>
                  </li>
                  <li class="advert-properties__item">
                    <p class="advert-properties__text">Size: ${size}</p>
                  </li>
                  <li class="advert-properties__item">
                    <p class="advert-properties__text">
                      Life duration: <span>${lifeDuration}</span>
                    </p>
                  </li>
                  <li class="advert-properties__item">
                    <p class="advert-properties__text">
                      Allergenicity: <span>${alergenicity}</span>
                    </p>
                  </li>
                  <li class="advert-properties__item">
                    <p class="advert-properties__text">
                      Temperature: <span>${temperature}</span>
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <ul class="advert-properties advert-properties_more advert-properties_hidden">
              <li>
                <ul class="advert-properties__more-list">
                  <li class="advert-properties__item">
                    <p class="advert-properties__text">Expenditure of attention: ${attention}</p>
                  </li>
                  <li class="advert-properties__item">
                    <p class="advert-properties__text">Vitality: ${survive}</p>
                  </li>
                  <li class="advert-properties__item">
                    <p class="advert-properties__text">State: ${state}</p>
                  </li>
                </ul>
              </li>
              <li>
                <ul class="advert-properties__more-list">
                  <li class="advert-properties__item">
                    <p class="advert-properties__text">Growth rate: ${growthRate}</p>
                  </li>
                  <li class="advert-properties__item">
                    <p class="advert-properties__text">Flowering: ${flowering}</p>
                  </li>
                  <li class="advert-properties__item">
                    <p class="advert-properties__text">Edible: ${edible}</p>
                  </li>
                </ul>
              </li>
            </ul>
            <button class="advert-properties__more-btn" aria-label="more properties">
              <ul class="advert-properties-cross">
                <li class="advert-properties-cross__line advert-properties-cross__line_vertical"></li>
                <li class="advert-properties-cross__line advert-properties-cross__line_horizontal"></li>
              </ul>
            </button>
            <div class="advert-discreption">
              <h2 class="advert-discreption__title">Description</h2>
              <p class="advert-discreption__text">
                ${
                  description
                    ? description
                    : `<span class="advert-discreption__text_default">There is no description</span>`
                }
              </p>
            </div>
            <div class="advert-user">
              <div class="advert-userinfo">
                <div class="advert-userinfo__profile-img">
                  ${getUserPicture(avatar)}
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
                <h2 class="advert-wishes__title">Wish</h2>
                <p class="advert-wishes__text">
                 ${wish ? wish : "There are no wishes"}
                </p>
              </div>
            </div>
          </div>`;
}
