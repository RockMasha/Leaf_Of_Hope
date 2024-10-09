import{h as $}from"./hiddenContentLoader-DnNAx6HY.js";import{b as x}from"./api-CiyxzFpA.js";import{g as w}from"./getValueSrcParams-BMgebK2A.js";import{c as e}from"./cardData-DyQ4QymL.js";function y(s){const{alergenicity:t,humidity:a,image:p,keeper:n,lifeDuration:l,light:o,name:c,size:v,temperature:_,way:i,wish:r,description:d}=s,{username:m,email:f,avatar:u,adress:h,phone:g}=n;return`
        <section class="advert">
          <div class="container advert__container">
            <div class="advert-maininfo">
              <img
              class="advert-maininfo__img"
              src="${p}"
              alt="photo of plant"
            />
              <div>
                <h2 class="advert-maininfo__title">${c}</h2>
                <div class="advert-maininfo-way">
                  <p class="advert-maininfo-way__text">${e.way[i]}</p>
                </div>
                <ul class="advert-properties">
                  <li class="advert-properties__item">
                    <p class="advert-properties__text">Освітлення: ${e.light[o]}</p>
                  </li>
                  <li class="advert-properties__item">
                    <p class="advert-properties__text">Вологість: ${e.humidity[a]}</p>
                  </li>
                  <li class="advert-properties__item">
                    <p class="advert-properties__text">Розмір: ${e.size[v]}</p>
                  </li>
                  <li class="advert-properties__item">
                    <p class="advert-properties__text">
                      Тривальсть життя: <span>${e.lifeDuration[l]}</span>
                    </p>
                  </li>
                  <li class="advert-properties__item">
                    <p class="advert-properties__text">
                      Алергеність: <span>${e.alergenicity[t]}</span>
                    </p>
                  </li>
                  <li class="advert-properties__item">
                    <p class="advert-properties__text">
                      Темпаратура: <span>${e.temperature[_]}</span>
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
                  <img
                  class="advert-userinfo__img big-photo"
                  src="${u}"
                  alt="photo og profile"
                  />
                </div>
                <div class="advert-userinfo__userinfos">
                  <h2 class="advert-userinfo__name">${m}</h2>
                  <p class="advert-userinfo__adress">${h}</p>
                  <p class="advert-userinfo__phone">
                    ${g}
                  </p>
                  <p class="advert-userinfo__email">
                    ${f}
                  </p>
                </div>
              </div>
              <div class="advert-wishes ${i==="exchange"?"":"is-hidden"}">
                <h2 class="advert-wishes__title">Побажання</h2>
                <p class="advert-wishes__text">
                 ${r||'<span class="advert-wishes__text_default">Немає побажань</span>'}
                </p>
              </div>
            </div>
          </div>
        </section>`}const A={main:document.querySelector("main")};async function D(){const s=w("id"),t=await x(s),a=y(t);A.main.innerHTML=a}await D();$();
