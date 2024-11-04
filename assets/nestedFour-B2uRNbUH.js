import{h as M}from"./setCurrentLanguage-Bvpoq5JC.js";import{a as O}from"./api-CZvNR4Wc.js";import{g as k,a as z,b as T,c as U}from"./getUkraineDataValue-BN_FPkab.js";import{g as B}from"./getValueSrcParams-BMgebK2A.js";import{s as H}from"./setSwitchVariableLanguage-BiSswjnb.js";function R(){document.querySelector(".advert-properties_more").classList.toggle("advert-properties_hidden")}function D(e){const t=e["small-250px"],s=e["medium-300px"],r=e["large-500px"];return`
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
                ${t} 1x,
                ${t} 2x"
              />
              <img
                src="${t}"
                srcset="
                ${t} 1x,
                ${t} 2x,"
                class="advert-maininfo__img"
                alt="plant"
                loading="lazy"
              />
            </picture>
          `}function I(e){const t=e["tiny-100px"],s=e["very-small-175px"],r=e["small-250px"];return`
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
            ${t} 1x,
            ${t} 2x"
        />
        <img
          src="${t}"
          srcset="
            ${t} 1x,
            ${t} 2x,"
          class="advert-userinfo__img big-photo"
          alt="plant"
          loading="lazy"
        />
      </picture>`}function P(e,t){const s=t(e),{light:r,alergenicity:d,humidity:o,size:n,temperature:c,lifeDuration:_,way:v,image:u,name:m,wish:i,description:a,username:h,email:$,avatar:x,adress:g,phone:f,date:w,attention:y,survive:b,state:E,flowering:S,growthRate:A,edible:L}=s;return`
          <div class="container advert__container">
            <h1 hidden>Оголошення</h1>
            <div class="advert-maininfo">
              ${D(u)}
              <div>
                <p class="advert-maininfo__date">${w}</p>
                <h2 class="advert-maininfo__title">${m}</h2>
                <div class="advert-maininfo-way">
                  <p class="advert-maininfo-way__text">${v}</p>
                </div>
                <ul class="advert-properties">
                  <li class="advert-properties__item">
                    <p class="advert-properties__text">Освітлення: ${r}</p>
                  </li>
                  <li class="advert-properties__item">
                    <p class="advert-properties__text">Вологість: ${o}</p>
                  </li>
                  <li class="advert-properties__item">
                    <p class="advert-properties__text">Розмір: ${n}</p>
                  </li>
                  <li class="advert-properties__item">
                    <p class="advert-properties__text">
                      Тривальсть життя: <span>${_}</span>
                    </p>
                  </li>
                  <li class="advert-properties__item">
                    <p class="advert-properties__text">
                      Алергеність: <span>${d}</span>
                    </p>
                  </li>
                  <li class="advert-properties__item">
                    <p class="advert-properties__text">
                      Темпаратура: <span>${c}</span>
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <ul class="advert-properties advert-properties_more advert-properties_hidden">
              <li>
                <ul class="advert-properties__more-list">
                  <li class="advert-properties__item">
                    <p class="advert-properties__text">Затратва уваги: ${y}</p>
                  </li>
                  <li class="advert-properties__item">
                    <p class="advert-properties__text">Живучість: ${b}</p>
                  </li>
                  <li class="advert-properties__item">
                    <p class="advert-properties__text">Стан: ${E}</p>
                  </li>
                </ul>
              </li>
              <li>
                <ul class="advert-properties__more-list">
                  <li class="advert-properties__item">
                    <p class="advert-properties__text">Темп Зростання: ${A}</p>
                  </li>
                  <li class="advert-properties__item">
                    <p class="advert-properties__text">Цвітіння: ${S}</p>
                  </li>
                  <li class="advert-properties__item">
                    <p class="advert-properties__text">Їстівна: ${L}</p>
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
                  ${I(x)}
                </div>
                <div class="advert-userinfo__userinfos">
                  <h2 class="advert-userinfo__name">${h}</h2>
                  <p class="advert-userinfo__adress">${g}</p>
                  <p class="advert-userinfo__phone">
                    ${f}
                  </p>
                  <p class="advert-userinfo__email">
                    ${$}
                  </p>
                </div>
              </div>
              <div class="advert-wishes ${e.way==="exchange"?"":"is-hidden"}">
                <h2 class="advert-wishes__title">Побажання</h2>
                <p class="advert-wishes__text">
                 ${i||'<span class="advert-wishes__text_default">Немає побажань</span>'}
                </p>
              </div>
            </div>
          </div>`}function V(e,t){const s=t(e),{light:r,alergenicity:d,humidity:o,size:n,temperature:c,lifeDuration:_,way:v,image:u,name:m,wish:i,description:a,username:h,email:$,avatar:x,adress:g,phone:f,date:w,attention:y,survive:b,state:E,flowering:S,growthRate:A,edible:L}=s;return`
          <div class="container advert__container">
            <h1 hidden>Advert</h1>
            <div class="advert-maininfo">
              ${D(u)}
              <div>
                <p class="advert-maininfo__date">${w}</p>
                <h2 class="advert-maininfo__title">${m}</h2>
                <div class="advert-maininfo-way">
                  <p class="advert-maininfo-way__text">${v}</p>
                </div>
                <ul class="advert-properties">
                  <li class="advert-properties__item">
                    <p class="advert-properties__text">Light: ${r}</p>
                  </li>
                  <li class="advert-properties__item">
                    <p class="advert-properties__text">Humidity: ${o}</p>
                  </li>
                  <li class="advert-properties__item">
                    <p class="advert-properties__text">Size: ${n}</p>
                  </li>
                  <li class="advert-properties__item">
                    <p class="advert-properties__text">
                      Life duration: <span>${_}</span>
                    </p>
                  </li>
                  <li class="advert-properties__item">
                    <p class="advert-properties__text">
                      Allergenicity: <span>${d}</span>
                    </p>
                  </li>
                  <li class="advert-properties__item">
                    <p class="advert-properties__text">
                      Temperature: <span>${c}</span>
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <ul class="advert-properties advert-properties_more advert-properties_hidden">
              <li>
                <ul class="advert-properties__more-list">
                  <li class="advert-properties__item">
                    <p class="advert-properties__text">Expenditure of attention: ${y}</p>
                  </li>
                  <li class="advert-properties__item">
                    <p class="advert-properties__text">Vitality: ${b}</p>
                  </li>
                  <li class="advert-properties__item">
                    <p class="advert-properties__text">State: ${E}</p>
                  </li>
                </ul>
              </li>
              <li>
                <ul class="advert-properties__more-list">
                  <li class="advert-properties__item">
                    <p class="advert-properties__text">Growth rate: ${A}</p>
                  </li>
                  <li class="advert-properties__item">
                    <p class="advert-properties__text">Flowering: ${S}</p>
                  </li>
                  <li class="advert-properties__item">
                    <p class="advert-properties__text">Edible: ${L}</p>
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
                ${a||'<span class="advert-discreption__text_default">There is no description</span>'}
              </p>
            </div>
            <div class="advert-user">
              <div class="advert-userinfo">
                <div class="advert-userinfo__profile-img">
                  ${I(x)}
                </div>
                <div class="advert-userinfo__userinfos">
                  <h2 class="advert-userinfo__name">${h}</h2>
                  <p class="advert-userinfo__adress">${g}</p>
                  <p class="advert-userinfo__phone">
                    ${f}
                  </p>
                  <p class="advert-userinfo__email">
                    ${$}
                  </p>
                </div>
              </div>
              <div class="advert-wishes ${e.way==="exchange"?"":"is-hidden"}">
                <h2 class="advert-wishes__title">Wish</h2>
                <p class="advert-wishes__text">
                 ${i||"There are no wishes"}
                </p>
              </div>
            </div>
          </div>`}const W={translateWrapp:document.querySelector(".translate-wrapper_variable"),translate:document.querySelector(".translate"),translateInput:document.querySelector(".translate__input"),main:document.querySelector("main"),advert:document.querySelector(".advert")};let q;const l={};async function C(){const e=B("id");q=await O(e),G(q.lang),l.set()}function p(e=z,t=P){const s=t(q,e);W.advert.innerHTML=s,F()}function F(){document.querySelector(".advert-properties__more-btn").addEventListener("click",R)}function G(e){if(e==="en"){l.set=p.bind(null,k,V);return}l.set=p.bind(null,z,P)}const j={setUkrainian:J,setEnglish:K,setOriginal:N};function J(){p(T)}function K(){p(U,V)}function N(){l.set()}await C();H(j);M();
