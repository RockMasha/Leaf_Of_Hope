import{h as V}from"./hiddenContentLoader-RgNmBLIv.js";import{a as M}from"./api-C87ePszt.js";import{g as T,r as q,c as O}from"./getDataValue-Bu16Xysz.js";import{g as B}from"./getValueSrcParams-BMgebK2A.js";import{s as H}from"./setSwitchVariableLanguage-BNJwzjz5.js";import"./setCurrentLanguage-BjUyqyx0.js";function W(){document.querySelector(".advert-properties_more").classList.toggle("advert-properties_hidden")}function I(e){const t=e["small-250px"],r=e["medium-300px"],s=e["large-500px"];return`
            <picture class="advert-maininfo__img">
              <source
                srcset="
                ${s} 1x,
                ${s} 2x"
                media="(min-width: 1440px)"
              />
              <source
                srcset="
                ${r} 1x,
                ${r} 2x
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
          `}function k(e){const t=e["tiny-100px"],r=e["very-small-175px"],s=e["small-250px"];return`
      <picture class="advert-userinfo__img big-photo">
        <source
          srcset="
            ${s} 1x,
            ${s} 2x"
          media="(min-width: 1440px)"
        />
        <source
          srcset="
            ${r} 1x,
            ${r} 2x"
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
      </picture>`}function j(e,t){const r=t(e),{light:s,alergenicity:n,humidity:d,size:c,temperature:_,lifeDuration:v,way:u,image:m,name:h,wish:p,description:o,username:g,email:f,avatar:$,adress:x,phone:w,date:y,attention:b,survive:E,state:D,flowering:z,growthRate:S,edible:l}=r;return`
          <div class="container advert__container">
            <h1 hidden>Оголошення</h1>
            <div class="advert-maininfo">
              ${I(m)}
              <div>
                <p class="advert-maininfo__date">${y}</p>
                <h2 class="advert-maininfo__title">${h}</h2>
                <div class="advert-maininfo-way">
                  <p class="advert-maininfo-way__text">${u}</p>
                </div>
                <ul class="advert-properties">
                  <li class="advert-properties__item">
                    <p class="advert-properties__text">Освітлення: ${s}</p>
                  </li>
                  <li class="advert-properties__item">
                    <p class="advert-properties__text">Вологість: ${d}</p>
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
                      Алергеність: <span>${n}</span>
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
                    <p class="advert-properties__text">Стан: ${D}</p>
                  </li>
                </ul>
              </li>
              <li>
                <ul class="advert-properties__more-list">
                  <li class="advert-properties__item">
                    <p class="advert-properties__text">Темп Зростання: ${S}</p>
                  </li>
                  <li class="advert-properties__item">
                    <p class="advert-properties__text">Цвітіння: ${z}</p>
                  </li>
                  <li class="advert-properties__item">
                    <p class="advert-properties__text">Їстівна: ${l}</p>
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
                ${o||'<span class="advert-discreption__text_default">Немає опису</span>'}
              </p>
            </div>
            <div class="advert-user">
              <div class="advert-userinfo">
                <div class="advert-userinfo__profile-img">
                  ${k($)}
                </div>
                <div class="advert-userinfo__userinfos">
                  <h2 class="advert-userinfo__name">${g}</h2>
                  <p class="advert-userinfo__adress">${x}</p>
                  <p class="advert-userinfo__phone">
                    ${w}
                  </p>
                  <p class="advert-userinfo__email">
                    ${f}
                  </p>
                </div>
              </div>
              <div class="advert-wishes ${e.way==="exchange"?"":"is-hidden"}">
                <h2 class="advert-wishes__title">Побажання</h2>
                <p class="advert-wishes__text">
                 ${p||'<span class="advert-wishes__text_default">Немає побажань</span>'}
                </p>
              </div>
            </div>
          </div>`}const C={translateWrapp:document.querySelector(".translate-wrapper_variable"),translate:document.querySelector(".translate"),translateInput:document.querySelector(".translate__input"),main:document.querySelector("main"),advert:document.querySelector(".advert")};let R;async function F(){const e=B("id");R=await M(e),P()}function P(e=T,t=j){const r=t(R,e);C.advert.innerHTML=r,G()}function G(){document.querySelector(".advert-properties__more-btn").addEventListener("click",W)}function J(e){const{alergenicity:t,humidity:r,image:s,keeper:n,lifeDuration:d,light:c,size:_,temperature:v,way:u,translated:m,createdAt:h,attention:p,survive:o,state:g,flowering:f,growthRate:$,edible:x,_id:w}=e,y=q(h,"en"),{username:b,email:E,avatar:D,adress:z,phone:S}=n,{name:l,wish:A,description:L}=m;return{light:i(c),alergenicity:i(t),humidity:i(r),size:i(_),temperature:i(v),lifeDuration:i(d),way:i(u),attention:i(p),survive:i(o),state:i(g),flowering:i(f),growthRate:i($),edible:i(x),image:s,name:l==null?void 0:l.transEng,wish:A==null?void 0:A.transEng,description:L==null?void 0:L.transEng,username:b,email:E,avatar:D,adress:z,phone:S,date:y,id:w}}function i(e){return e||"not specified"}function K(e){const{translated:t,alergenicity:r,humidity:s,image:n,keeper:d,lifeDuration:c,light:_,size:v,temperature:u,way:m,createdAt:h,attention:p,survive:o,state:g,flowering:f,growthRate:$,edible:x,_id:w}=e,y=q(h),{username:b,email:E,avatar:D,adress:z,phone:S}=d,{name:l,wish:A,description:L}=t;return{light:a({light:_}),alergenicity:a({alergenicity:r}),humidity:a({humidity:s}),size:a({size:v}),temperature:a({temperature:u}),lifeDuration:a({lifeDuration:c}),way:a({way:m}),attention:a({attention:p}),survive:a({survive:o}),state:a({state:g}),flowering:a({flowering:f}),growthRate:a({growthRate:$}),edible:a({edible:x}),image:n,name:l==null?void 0:l.transUa,wish:A==null?void 0:A.transUa,description:L==null?void 0:L.transUa,username:b,email:E,avatar:D,adress:z,phone:S,date:y,id:w}}function a(e){const t=Object.keys(e)[0],r=e[t];return`${r}`!="undefined"?O[t][r]:"не вказано"}function N(e,t){const r=t(e),{light:s,alergenicity:n,humidity:d,size:c,temperature:_,lifeDuration:v,way:u,image:m,name:h,wish:p,description:o,username:g,email:f,avatar:$,adress:x,phone:w,date:y,attention:b,survive:E,state:D,flowering:z,growthRate:S,edible:l}=r;return`
          <div class="container advert__container">
            <h1 hidden>Advert</h1>
            <div class="advert-maininfo">
              ${I(m)}
              <div>
                <p class="advert-maininfo__date">${y}</p>
                <h2 class="advert-maininfo__title">${h}</h2>
                <div class="advert-maininfo-way">
                  <p class="advert-maininfo-way__text">${u}</p>
                </div>
                <ul class="advert-properties">
                  <li class="advert-properties__item">
                    <p class="advert-properties__text">Light: ${s}</p>
                  </li>
                  <li class="advert-properties__item">
                    <p class="advert-properties__text">Humidity: ${d}</p>
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
                      Allergenicity: <span>${n}</span>
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
                    <p class="advert-properties__text">State: ${D}</p>
                  </li>
                </ul>
              </li>
              <li>
                <ul class="advert-properties__more-list">
                  <li class="advert-properties__item">
                    <p class="advert-properties__text">Growth rate: ${S}</p>
                  </li>
                  <li class="advert-properties__item">
                    <p class="advert-properties__text">Flowering: ${z}</p>
                  </li>
                  <li class="advert-properties__item">
                    <p class="advert-properties__text">Edible: ${l}</p>
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
                ${o||'<span class="advert-discreption__text_default">There is no description</span>'}
              </p>
            </div>
            <div class="advert-user">
              <div class="advert-userinfo">
                <div class="advert-userinfo__profile-img">
                  ${k($)}
                </div>
                <div class="advert-userinfo__userinfos">
                  <h2 class="advert-userinfo__name">${g}</h2>
                  <p class="advert-userinfo__adress">${x}</p>
                  <p class="advert-userinfo__phone">
                    ${w}
                  </p>
                  <p class="advert-userinfo__email">
                    ${f}
                  </p>
                </div>
              </div>
              <div class="advert-wishes ${e.way==="exchange"?"":"is-hidden"}">
                <h2 class="advert-wishes__title">Wish</h2>
                <p class="advert-wishes__text">
                 ${p||"There are no wishes"}
                </p>
              </div>
            </div>
          </div>`}const Q={setUkrainian:X,setEnglish:Y,setOriginal:Z};function X(){P(K)}function Y(){P(J,N)}function Z(){P()}await F();H(Q);V();
