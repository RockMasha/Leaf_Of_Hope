import{h as P}from"./hiddenContentLoader-B24fwLZY.js";import{a as I}from"./api-C87ePszt.js";import{g as L}from"./getValueSrcParams-BMgebK2A.js";import{g as M}from"./getDataValue-CDujFWLP.js";function z(){document.querySelector(".advert-properties_more").classList.toggle("advert-properties_hidden")}function A(t){const e=M(t),{light:s,alergenicity:r,humidity:p,size:l,temperature:o,lifeDuration:d,way:c,image:n,name:_,wish:i,description:a,username:v,email:m,avatar:u,adress:x,phone:$,date:h,attention:g,survive:f,state:w,flowering:y,growthRate:b,edible:E}=e;return`
        <section class="advert">
          <div class="container advert__container">
            <h1 hidden>Оголошення</h1>
            <div class="advert-maininfo">
              ${S(n)}
              <div>
                <p class="advert-maininfo__date">${h}</p>
                <h2 class="advert-maininfo__title">${_}</h2>
                <div class="advert-maininfo-way">
                  <p class="advert-maininfo-way__text">${c}</p>
                </div>
                <ul class="advert-properties">
                  <li class="advert-properties__item">
                    <p class="advert-properties__text">Освітлення: ${s}</p>
                  </li>
                  <li class="advert-properties__item">
                    <p class="advert-properties__text">Вологість: ${p}</p>
                  </li>
                  <li class="advert-properties__item">
                    <p class="advert-properties__text">Розмір: ${l}</p>
                  </li>
                  <li class="advert-properties__item">
                    <p class="advert-properties__text">
                      Тривальсть життя: <span>${d}</span>
                    </p>
                  </li>
                  <li class="advert-properties__item">
                    <p class="advert-properties__text">
                      Алергеність: <span>${r}</span>
                    </p>
                  </li>
                  <li class="advert-properties__item">
                    <p class="advert-properties__text">
                      Темпаратура: <span>${o}</span>
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <ul class="advert-properties advert-properties_more advert-properties_hidden">
              <li>
                <ul class="advert-properties__more-list">
                  <li class="advert-properties__item">
                    <p class="advert-properties__text">Затратва уваги: ${g}</p>
                  </li>
                  <li class="advert-properties__item">
                    <p class="advert-properties__text">Живучість: ${f}</p>
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
                    <p class="advert-properties__text">Їстівна: ${E}</p>
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
                ${a||'<span class="advert-discreption__text_default">Немає опису</span>'}
              </p>
            </div>
            <div class="advert-user">
              <div class="advert-userinfo">
                <div class="advert-userinfo__profile-img">
                  ${q(u)}
                </div>
                <div class="advert-userinfo__userinfos">
                  <h2 class="advert-userinfo__name">${v}</h2>
                  <p class="advert-userinfo__adress">${x}</p>
                  <p class="advert-userinfo__phone">
                    ${$}
                  </p>
                  <p class="advert-userinfo__email">
                    ${m}
                  </p>
                </div>
              </div>
              <div class="advert-wishes ${t.way==="exchange"?"":"is-hidden"}">
                <h2 class="advert-wishes__title">Побажання</h2>
                <p class="advert-wishes__text">
                 ${i||'<span class="advert-wishes__text_default">Немає побажань</span>'}
                </p>
              </div>
            </div>
          </div>
        </section>`}function S(t){const e=t["small-250px"],s=t["medium-300px"],r=t["large-500"];return`
          <picture class="advert-maininfo__img">
            <source
              srcset="
              ${r} 1x,
              ${r} 2x"
              media="(min-width: 1440px)"
            />
            <source
              srcset="
              ${s} 1x,
              ${s} 2x
              "
              media="(min-width: 768px)"
            />
            <source
              srcset="
              ${e} 1x,
              ${e} 2x"
            />
            <img
              src="${e}"
              srcset="
              ${e} 1x,
              ${e} 2x,"
              class="advert-maininfo__img"
              alt="plant"
              loading="lazy"
            />
          </picture>
        `}function q(t){const e=t["tiny-100px"],s=t["very-small-175px"],r=t["small-250px"];return`
    <picture class="advert-userinfo__img big-photo">
      <source
        srcset="
          ${r} 1x,
          ${r} 2x"
        media="(min-width: 1440px)"
      />
      <source
        srcset="
          ${s} 1x,
          ${s} 2x"
        media="(min-width: 768px)"
      />
      <source
        srcset="
          ${e} 1x,
          ${e} 2x"
      />
      <img
        src="${e}"
        srcset="
          ${e} 1x,
          ${e} 2x,"
        class="advert-userinfo__img big-photo"
        alt="plant"
        loading="lazy"
      />
    </picture>`}const B={main:document.querySelector("main")};async function D(){const t=L("id"),e=await I(t),s=A(e);B.main.innerHTML=s,V()}function V(){document.querySelector(".advert-properties__more-btn").addEventListener("click",z)}await D();P();
