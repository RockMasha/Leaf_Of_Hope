import{h as U}from"./hiddenContentLoader-DikfwQNk.js";import{a as V}from"./api-C87ePszt.js";import{g as O,r as k,c as W}from"./getDataValue-Bu16Xysz.js";import{g as B}from"./getValueSrcParams-BMgebK2A.js";function H(){document.querySelector(".advert-properties_more").classList.toggle("advert-properties_hidden")}function q(e){const t=e["small-250px"],r=e["medium-300px"],s=e["large-500px"];return`
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
          `}function R(e){const t=e["tiny-100px"],r=e["very-small-175px"],s=e["small-250px"];return`
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
      </picture>`}function j(e,t){const r=t(e),{light:s,alergenicity:d,humidity:c,size:_,temperature:v,lifeDuration:u,way:m,image:g,name:h,wish:n,description:o,username:f,email:$,avatar:x,adress:w,phone:y,date:b,attention:E,survive:A,state:D,flowering:S,growthRate:z,edible:l}=r;return`
          <div class="container advert__container">
            <h1 hidden>Оголошення</h1>
            <div class="advert-maininfo">
              ${q(g)}
              <div>
                <p class="advert-maininfo__date">${b}</p>
                <h2 class="advert-maininfo__title">${h}</h2>
                <div class="advert-maininfo-way">
                  <p class="advert-maininfo-way__text">${m}</p>
                </div>
                <ul class="advert-properties">
                  <li class="advert-properties__item">
                    <p class="advert-properties__text">Освітлення: ${s}</p>
                  </li>
                  <li class="advert-properties__item">
                    <p class="advert-properties__text">Вологість: ${c}</p>
                  </li>
                  <li class="advert-properties__item">
                    <p class="advert-properties__text">Розмір: ${_}</p>
                  </li>
                  <li class="advert-properties__item">
                    <p class="advert-properties__text">
                      Тривальсть життя: <span>${u}</span>
                    </p>
                  </li>
                  <li class="advert-properties__item">
                    <p class="advert-properties__text">
                      Алергеність: <span>${d}</span>
                    </p>
                  </li>
                  <li class="advert-properties__item">
                    <p class="advert-properties__text">
                      Темпаратура: <span>${v}</span>
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <ul class="advert-properties advert-properties_more advert-properties_hidden">
              <li>
                <ul class="advert-properties__more-list">
                  <li class="advert-properties__item">
                    <p class="advert-properties__text">Затратва уваги: ${E}</p>
                  </li>
                  <li class="advert-properties__item">
                    <p class="advert-properties__text">Живучість: ${A}</p>
                  </li>
                  <li class="advert-properties__item">
                    <p class="advert-properties__text">Стан: ${D}</p>
                  </li>
                </ul>
              </li>
              <li>
                <ul class="advert-properties__more-list">
                  <li class="advert-properties__item">
                    <p class="advert-properties__text">Темп Зростання: ${z}</p>
                  </li>
                  <li class="advert-properties__item">
                    <p class="advert-properties__text">Цвітіння: ${S}</p>
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
                  ${R(x)}
                </div>
                <div class="advert-userinfo__userinfos">
                  <h2 class="advert-userinfo__name">${f}</h2>
                  <p class="advert-userinfo__adress">${w}</p>
                  <p class="advert-userinfo__phone">
                    ${y}
                  </p>
                  <p class="advert-userinfo__email">
                    ${$}
                  </p>
                </div>
              </div>
              <div class="advert-wishes ${e.way==="exchange"?"":"is-hidden"}">
                <h2 class="advert-wishes__title">Побажання</h2>
                <p class="advert-wishes__text">
                 ${n||'<span class="advert-wishes__text_default">Немає побажань</span>'}
                </p>
              </div>
            </div>
          </div>`}const p={translateWrapp:document.querySelector(".translate-wrapper_variable"),translate:document.querySelector(".translate"),translateInput:document.querySelector(".translate__input"),main:document.querySelector("main"),advert:document.querySelector(".advert")};let T;async function C(){const e=B("id");T=await V(e),I()}function I(e=O,t=j){const r=t(T,e);p.advert.innerHTML=r,F()}function F(){document.querySelector(".advert-properties__more-btn").addEventListener("click",H)}function G(){p.translate.getAttribute("original")||(p.translate.setAttribute("disable",""),p.translate.setAttribute("original","true"),I())}function J(e){const{alergenicity:t,humidity:r,image:s,keeper:d,lifeDuration:c,light:_,size:v,temperature:u,way:m,translated:g,createdAt:h,attention:n,survive:o,state:f,flowering:$,growthRate:x,edible:w,_id:y}=e,b=k(h,"en"),{username:E,email:A,avatar:D,adress:S,phone:z}=d,{name:l,wish:L,description:P}=g;return{light:i(_),alergenicity:i(t),humidity:i(r),size:i(v),temperature:i(u),lifeDuration:i(c),way:i(m),attention:i(n),survive:i(o),state:i(f),flowering:i($),growthRate:i(x),edible:i(w),image:s,name:l==null?void 0:l.transEng,wish:L==null?void 0:L.transEng,description:P==null?void 0:P.transEng,username:E,email:A,avatar:D,adress:S,phone:z,date:b,id:y}}function i(e){return e||"not specified"}function K(e){const{translated:t,alergenicity:r,humidity:s,image:d,keeper:c,lifeDuration:_,light:v,size:u,temperature:m,way:g,createdAt:h,attention:n,survive:o,state:f,flowering:$,growthRate:x,edible:w,_id:y}=e,b=k(h),{username:E,email:A,avatar:D,adress:S,phone:z}=c,{name:l,wish:L,description:P}=t;return{light:a({light:v}),alergenicity:a({alergenicity:r}),humidity:a({humidity:s}),size:a({size:u}),temperature:a({temperature:m}),lifeDuration:a({lifeDuration:_}),way:a({way:g}),attention:a({attention:n}),survive:a({survive:o}),state:a({state:f}),flowering:a({flowering:$}),growthRate:a({growthRate:x}),edible:a({edible:w}),image:d,name:l==null?void 0:l.transUa,wish:L==null?void 0:L.transUa,description:P==null?void 0:P.transUa,username:E,email:A,avatar:D,adress:S,phone:z,date:b,id:y}}function a(e){const t=Object.keys(e)[0],r=e[t];return`${r}`!="undefined"?W[t][r]:"не вказано"}function N(e,t){const r=t(e),{light:s,alergenicity:d,humidity:c,size:_,temperature:v,lifeDuration:u,way:m,image:g,name:h,wish:n,description:o,username:f,email:$,avatar:x,adress:w,phone:y,date:b,attention:E,survive:A,state:D,flowering:S,growthRate:z,edible:l}=r;return`
          <div class="container advert__container">
            <h1 hidden>Advert</h1>
            <div class="advert-maininfo">
              ${q(g)}
              <div>
                <p class="advert-maininfo__date">${b}</p>
                <h2 class="advert-maininfo__title">${h}</h2>
                <div class="advert-maininfo-way">
                  <p class="advert-maininfo-way__text">${m}</p>
                </div>
                <ul class="advert-properties">
                  <li class="advert-properties__item">
                    <p class="advert-properties__text">Light: ${s}</p>
                  </li>
                  <li class="advert-properties__item">
                    <p class="advert-properties__text">Humidity: ${c}</p>
                  </li>
                  <li class="advert-properties__item">
                    <p class="advert-properties__text">Size: ${_}</p>
                  </li>
                  <li class="advert-properties__item">
                    <p class="advert-properties__text">
                      Life duration: <span>${u}</span>
                    </p>
                  </li>
                  <li class="advert-properties__item">
                    <p class="advert-properties__text">
                      Allergenicity: <span>${d}</span>
                    </p>
                  </li>
                  <li class="advert-properties__item">
                    <p class="advert-properties__text">
                      Temperature: <span>${v}</span>
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <ul class="advert-properties advert-properties_more advert-properties_hidden">
              <li>
                <ul class="advert-properties__more-list">
                  <li class="advert-properties__item">
                    <p class="advert-properties__text">Expenditure of attention: ${E}</p>
                  </li>
                  <li class="advert-properties__item">
                    <p class="advert-properties__text">Vitality: ${A}</p>
                  </li>
                  <li class="advert-properties__item">
                    <p class="advert-properties__text">State: ${D}</p>
                  </li>
                </ul>
              </li>
              <li>
                <ul class="advert-properties__more-list">
                  <li class="advert-properties__item">
                    <p class="advert-properties__text">Growth rate: ${z}</p>
                  </li>
                  <li class="advert-properties__item">
                    <p class="advert-properties__text">Flowering: ${S}</p>
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
                  ${R(x)}
                </div>
                <div class="advert-userinfo__userinfos">
                  <h2 class="advert-userinfo__name">${f}</h2>
                  <p class="advert-userinfo__adress">${w}</p>
                  <p class="advert-userinfo__phone">
                    ${y}
                  </p>
                  <p class="advert-userinfo__email">
                    ${$}
                  </p>
                </div>
              </div>
              <div class="advert-wishes ${e.way==="exchange"?"":"is-hidden"}">
                <h2 class="advert-wishes__title">Wish</h2>
                <p class="advert-wishes__text">
                 ${n||"There are no wishes"}
                </p>
              </div>
            </div>
          </div>`}function Q(){if(p.translate.getAttribute("original")&&X(),p.translateInput.checked){I(J,N);return}I(K)}function X(){p.translate.removeAttribute("disable"),p.translate.removeAttribute("original"),p.translateInput.checked=!1}function Y(e){const t=e.target,r=t.closest(".translate-language-wrapper_or"),s=t.closest(".translate__input");!r&&!s||(r&&G(),s&&Q())}p.translateWrapp.addEventListener("click",Y);await C();U();
