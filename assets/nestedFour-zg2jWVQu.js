import{h as M}from"./setCurrentLanguage-CJZyqsh0.js";import{a as O}from"./api-BMUXg3mB.js";import{g as k,a as z,b as T,c as U}from"./getUkraineDataValue-jTDJ14QS.js";import{g as B}from"./getValueSrcParams-BMgebK2A.js";import{s as H}from"./setSwitchVariableLanguage-CdRF62D8.js";function R(){document.querySelector(".advert-properties_more").classList.toggle("advert-properties_hidden")}function D(e){const t=e["small-250px"],s=e["medium-300px"],r=e["large-500px"];return`
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
      </picture>`}function P(e,t){const s=t(e),{light:r,alergenicity:d,humidity:n,size:c,temperature:_,lifeDuration:v,way:u,image:m,name:h,wish:i,description:a,username:$,email:x,avatar:g,adress:f,phone:w,date:y,attention:b,survive:E,state:S,flowering:A,growthRate:L,edible:q}=s;return`
          <div class="container advert__container">
            <h1 hidden>Оголошення</h1>
            <div class="advert-maininfo">
              ${D(m)}
              <div>
                <p class="advert-maininfo__date">${y}</p>
                <h2 class="advert-maininfo__title">${h}</h2>
                <div class="advert-maininfo-way">
                  <p class="advert-maininfo-way__text">${u}</p>
                </div>
                <ul class="advert-properties">
                  <li class="advert-properties__item">
                    <p class="advert-properties__text">Освітлення: ${r}</p>
                  </li>
                  <li class="advert-properties__item">
                    <p class="advert-properties__text">Вологість: ${n}</p>
                  </li>
                  <li class="advert-properties__item">
                    <p class="advert-properties__text">Розмір: ${c}</p>
                  </li>
                  <li class="advert-properties__item">
                    <p class="advert-properties__text">
                      Тривальсть життя: <span>${v}</span>
                    </p>
                  </li>
                  <li class="advert-properties__item">
                    <p class="advert-properties__text">
                      Алергеність: <span>${d}</span>
                    </p>
                  </li>
                  <li class="advert-properties__item">
                    <p class="advert-properties__text">
                      Темпаратура: <span>${_}</span>
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <ul class="advert-properties advert-properties_more advert-properties_hidden">
              <li>
                <ul class="advert-properties__more-list">
                  <li class="advert-properties__item">
                    <p class="advert-properties__text">Затратва уваги: ${b}</p>
                  </li>
                  <li class="advert-properties__item">
                    <p class="advert-properties__text">Живучість: ${E}</p>
                  </li>
                  <li class="advert-properties__item">
                    <p class="advert-properties__text">Стан: ${S}</p>
                  </li>
                </ul>
              </li>
              <li>
                <ul class="advert-properties__more-list">
                  <li class="advert-properties__item">
                    <p class="advert-properties__text">Темп Зростання: ${L}</p>
                  </li>
                  <li class="advert-properties__item">
                    <p class="advert-properties__text">Цвітіння: ${A}</p>
                  </li>
                  <li class="advert-properties__item">
                    <p class="advert-properties__text">Їстівна: ${q}</p>
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
                  ${I(g)}
                </div>
                <div class="advert-userinfo__userinfos">
                  <h2 class="advert-userinfo__name">${$}</h2>
                  <p class="advert-userinfo__adress">${f}</p>
                  <p class="advert-userinfo__phone">
                    ${w}
                  </p>
                  <p class="advert-userinfo__email">
                    ${x}
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
          </div>`}function V(e,t){const s=t(e),{light:r,alergenicity:d,humidity:n,size:c,temperature:_,lifeDuration:v,way:u,image:m,name:h,wish:i,description:a,username:$,email:x,avatar:g,adress:f,phone:w,date:y,attention:b,survive:E,state:S,flowering:A,growthRate:L,edible:q}=s;return`
          <div class="container advert__container">
            <h1 hidden>Advert</h1>
            <div class="advert-maininfo">
              ${D(m)}
              <div>
                <p class="advert-maininfo__date">${y}</p>
                <h2 class="advert-maininfo__title">${h}</h2>
                <div class="advert-maininfo-way">
                  <p class="advert-maininfo-way__text">${u}</p>
                </div>
                <ul class="advert-properties">
                  <li class="advert-properties__item">
                    <p class="advert-properties__text">Light: ${r}</p>
                  </li>
                  <li class="advert-properties__item">
                    <p class="advert-properties__text">Humidity: ${n}</p>
                  </li>
                  <li class="advert-properties__item">
                    <p class="advert-properties__text">Size: ${c}</p>
                  </li>
                  <li class="advert-properties__item">
                    <p class="advert-properties__text">
                      Life duration: <span>${v}</span>
                    </p>
                  </li>
                  <li class="advert-properties__item">
                    <p class="advert-properties__text">
                      Allergenicity: <span>${d}</span>
                    </p>
                  </li>
                  <li class="advert-properties__item">
                    <p class="advert-properties__text">
                      Temperature: <span>${_}</span>
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <ul class="advert-properties advert-properties_more advert-properties_hidden">
              <li>
                <ul class="advert-properties__more-list">
                  <li class="advert-properties__item">
                    <p class="advert-properties__text">Expenditure of attention: ${b}</p>
                  </li>
                  <li class="advert-properties__item">
                    <p class="advert-properties__text">Vitality: ${E}</p>
                  </li>
                  <li class="advert-properties__item">
                    <p class="advert-properties__text">State: ${S}</p>
                  </li>
                </ul>
              </li>
              <li>
                <ul class="advert-properties__more-list">
                  <li class="advert-properties__item">
                    <p class="advert-properties__text">Growth rate: ${L}</p>
                  </li>
                  <li class="advert-properties__item">
                    <p class="advert-properties__text">Flowering: ${A}</p>
                  </li>
                  <li class="advert-properties__item">
                    <p class="advert-properties__text">Edible: ${q}</p>
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
                  ${I(g)}
                </div>
                <div class="advert-userinfo__userinfos">
                  <h2 class="advert-userinfo__name">${$}</h2>
                  <p class="advert-userinfo__adress">${f}</p>
                  <p class="advert-userinfo__phone">
                    ${w}
                  </p>
                  <p class="advert-userinfo__email">
                    ${x}
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
          </div>`}const W={translateWrapp:document.querySelector(".translate-wrapper_variable"),translate:document.querySelector(".translate"),translateInput:document.querySelector(".translate__input"),main:document.querySelector("main"),advert:document.querySelector(".advert")};let l;const p={};async function C(){const e=B("id");l=await O(e),console.log(l),G(l.lang),p.set()}function o(e=z,t=P){const s=t(l,e);W.advert.innerHTML=s,F()}function F(){document.querySelector(".advert-properties__more-btn").addEventListener("click",R)}function G(e){if(e==="en"){p.set=o.bind(null,k,V);return}p.set=o.bind(null,z,P)}const j={setUkrainian:J,setEnglish:K,setOriginal:N};function J(){o(T)}function K(){o(U,V)}function N(){p.set()}await C();H(j);M();
