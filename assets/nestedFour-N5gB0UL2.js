import{h as E}from"./hiddenContentLoader-BPC3HtL-.js";import{a as L}from"./api-C87ePszt.js";import{g as M}from"./getValueSrcParams-BMgebK2A.js";import{g as z}from"./getDataValue-CDujFWLP.js";function I(){document.querySelector(".advert-properties_more").classList.toggle("advert-properties_hidden")}function S(e){const t=z(e),{light:s,alergenicity:i,humidity:l,size:o,temperature:d,lifeDuration:c,way:n,image:r,name:_,wish:a,description:p,username:v,email:m,avatar:u,adress:g,phone:h,date:f,attention:$,survive:x,state:w,flowering:y,growthRate:b,edible:P}=t;return`
        <section class="advert">
          <div class="container advert__container">
            <h1 hidden>Оголошення</h1>
            <div class="advert-maininfo">
              <picture class="advert-maininfo__img">
                <source
                  srcset="${r["large-500px"]}"
                  media="(min-width: 1440px)"
                />
                <source
                  srcset="${r["medium-300px"]}"
                  media="(min-width: 768px)"
                />
                <source
                  srcset="${r["small-250px"]}"
                />
                <img
                  src="${r["small-250px"]?r["small-250px"]:"./img/universal/defoultPlantPhoto.jpg"}"
                  class="advert-maininfo__img"
                  alt="plant"
                  loading="lazy"
                />
              </picture>
              <div>
                <p class="advert-maininfo__date">${f}</p>
                <h2 class="advert-maininfo__title">${_}</h2>
                <div class="advert-maininfo-way">
                  <p class="advert-maininfo-way__text">${n}</p>
                </div>
                <ul class="advert-properties">
                  <li class="advert-properties__item">
                    <p class="advert-properties__text">Освітлення: ${s}</p>
                  </li>
                  <li class="advert-properties__item">
                    <p class="advert-properties__text">Вологість: ${l}</p>
                  </li>
                  <li class="advert-properties__item">
                    <p class="advert-properties__text">Розмір: ${o}</p>
                  </li>
                  <li class="advert-properties__item">
                    <p class="advert-properties__text">
                      Тривальсть життя: <span>${c}</span>
                    </p>
                  </li>
                  <li class="advert-properties__item">
                    <p class="advert-properties__text">
                      Алергеність: <span>${i}</span>
                    </p>
                  </li>
                  <li class="advert-properties__item">
                    <p class="advert-properties__text">
                      Темпаратура: <span>${d}</span>
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <ul class="advert-properties advert-properties_more advert-properties_hidden">
              <li>
                <ul class="advert-properties__more-list">
                  <li class="advert-properties__item">
                    <p class="advert-properties__text">Затратва уваги: ${$}</p>
                  </li>
                  <li class="advert-properties__item">
                    <p class="advert-properties__text">Живучість: ${x}</p>
                  </li>
                  <li class="advert-properties__item">
                    <p class="advert-properties__text">Стан: ${w}</p>
                  </li>
                </ul>
              </li>
              <li>
                <ul class="advert-properties__more-list">
                  <li class="advert-properties__item">
                    <p class="advert-properties__text">Темп Зростання: ${b}</p>
                  </li>
                  <li class="advert-properties__item">
                    <p class="advert-properties__text">Цвітіння: ${y}</p>
                  </li>
                  <li class="advert-properties__item">
                    <p class="advert-properties__text">Їстівна: ${P}</p>
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
              <h2 class="advert-discreption__title">Опис</h2>
              <p class="advert-discreption__text">
                ${p||'<span class="advert-discreption__text_default">Немає опису</span>'}
              </p>
            </div>
            <div class="advert-user">
              <div class="advert-userinfo">
                <div class="advert-userinfo__profile-img">
                  ${q(u)}
                </div>
                <div class="advert-userinfo__userinfos">
                  <h2 class="advert-userinfo__name">${v}</h2>
                  <p class="advert-userinfo__adress">${g}</p>
                  <p class="advert-userinfo__phone">
                    ${h}
                  </p>
                  <p class="advert-userinfo__email">
                    ${m}
                  </p>
                </div>
              </div>
              <div class="advert-wishes ${e.way==="exchange"?"":"is-hidden"}">
                <h2 class="advert-wishes__title">Побажання</h2>
                <p class="advert-wishes__text">
                 ${a||'<span class="advert-wishes__text_default">Немає побажань</span>'}
                </p>
              </div>
            </div>
          </div>
        </section>`}function q(e){const t=e["large-500px"],s=e["medium-300px"];return`
    <picture class="advert-userinfo__img big-photo">
      <source
        srcset="${e["large-500px"]}"
        media="(min-width: 1440px)"
      />
      <source
        srcset="${s}"
        media="(min-width: 768px)"
      />
      <source
        srcset="${t}"
      />
      <img
        src="${t||"./img/universal/defoultPlantPhoto.jpg"}"
        class="advert-userinfo__img big-photo"
        alt="plant"
        loading="lazy"
      />
    </picture>`}const A={main:document.querySelector("main")};async function j(){const e=M("id"),t=await L(e),s=S(t);A.main.innerHTML=s,B()}function B(){document.querySelector(".advert-properties__more-btn").addEventListener("click",I)}await j();E();
