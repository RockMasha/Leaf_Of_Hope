import{h as $}from"./hiddenContentLoader-Ds56KOrg.js";import{b as x}from"./api-BnmDMCHo.js";import{g as w}from"./getValueSrcParams-BMgebK2A.js";import{g as y}from"./getDataValue-Bm2xYISE.js";function P(e){const s=y(e),{light:t,alergenicity:i,humidity:p,size:l,temperature:n,lifeDuration:c,way:o,image:a,name:v,wish:r,description:d,username:_,email:m,avatar:u,adress:g,phone:f,date:h}=s;return`
        <section class="advert">
          <div class="container advert__container">
            <div class="advert-maininfo">
              <picture class="advert-maininfo__img">
                <source
                  srcset="${a["large-500px"]}"
                  media="(min-width: 1440px)"
                />
                <source
                  srcset="${a["medium-300px"]}"
                  media="(min-width: 768px)"
                />
                <source
                  srcset="${a["small-250px"]}"
                />
                <img
                  src="${a["small-250px"]?a["small-250px"]:"./img/universal/defoultPlantPhoto.jpg"}"
                  class="advert-maininfo__img"
                  alt="plant"
                  loading="lazy"
                />
              </picture>
              <div>
                <p class="advert-maininfo__date">${h}</p>
                <h2 class="advert-maininfo__title">${v}</h2>
                <div class="advert-maininfo-way">
                  <p class="advert-maininfo-way__text">${o}</p>
                </div>
                <ul class="advert-properties">
                  <li class="advert-properties__item">
                    <p class="advert-properties__text">Освітлення: ${t}</p>
                  </li>
                  <li class="advert-properties__item">
                    <p class="advert-properties__text">Вологість: ${p}</p>
                  </li>
                  <li class="advert-properties__item">
                    <p class="advert-properties__text">Розмір: ${l}</p>
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
                      Темпаратура: <span>${n}</span>
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div class="advert-discreption">
              <h2 class="advert-discreption__title">Опис</h2>
              <p class="advert-discreption__text">
                ${d||'<span class="advert-discreption__text_default">Немає опису</span>'}
              </p>
            </div>
            <div class="advert-user">
              <div class="advert-userinfo">
                <div class="advert-userinfo__profile-img">
                  ${b(u)}
                </div>
                <div class="advert-userinfo__userinfos">
                  <h2 class="advert-userinfo__name">${_}</h2>
                  <p class="advert-userinfo__adress">${g}</p>
                  <p class="advert-userinfo__phone">
                    ${f}
                  </p>
                  <p class="advert-userinfo__email">
                    ${m}
                  </p>
                </div>
              </div>
              <div class="advert-wishes ${e.way==="exchange"?"":"is-hidden"}">
                <h2 class="advert-wishes__title">Побажання</h2>
                <p class="advert-wishes__text">
                 ${r||'<span class="advert-wishes__text_default">Немає побажань</span>'}
                </p>
              </div>
            </div>
          </div>
        </section>`}function b(e){const s=e["large-500px"],t=e["medium-300px"];return`
    <picture class="advert-userinfo__img big-photo">
      <source
        srcset="${e["large-500px"]}"
        media="(min-width: 1440px)"
      />
      <source
        srcset="${t}"
        media="(min-width: 768px)"
      />
      <source
        srcset="${s}"
      />
      <img
        src="${s||"./img/universal/defoultPlantPhoto.jpg"}"
        class="advert-userinfo__img big-photo"
        alt="plant"
        loading="lazy"
      />
    </picture>`}const I={main:document.querySelector("main")};async function z(){const e=w("id"),s=await x(e),t=P(s);I.main.innerHTML=t}await z();$();
