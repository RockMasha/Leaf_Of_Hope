import{h as w}from"./hiddenContentLoader-osB8T9fm.js";import{b as y}from"./api-BONY0yKB.js";import{g as A}from"./getValueSrcParams-BMgebK2A.js";import{r as D,c as e}from"./redactDate-Ur80d7_8.js";function P(t){const{alergenicity:a,humidity:s,image:r,keeper:l,lifeDuration:o,light:c,name:v,size:_,temperature:m,way:d,wish:p,description:n,createdAt:f}=t,u=D(f),{username:h,email:g,avatar:i,adress:$,phone:x}=l;return`
        <section class="advert">
          <div class="container advert__container">
            <div class="advert-maininfo">
              <img
              class="advert-maininfo__img"
              src="${r||"./img/universal/defoultPlantPhoto.jpg"}"
              alt="photo of plant"
            />
              <div>
                <p class="advert-maininfo__date">${u}</p>
                <h2 class="advert-maininfo__title">${v}</h2>
                <div class="advert-maininfo-way">
                  <p class="advert-maininfo-way__text">${e.way[d]}</p>
                </div>
                <ul class="advert-properties">
                  <li class="advert-properties__item">
                    <p class="advert-properties__text">Освітлення: ${e.light[c]}</p>
                  </li>
                  <li class="advert-properties__item">
                    <p class="advert-properties__text">Вологість: ${e.humidity[s]}</p>
                  </li>
                  <li class="advert-properties__item">
                    <p class="advert-properties__text">Розмір: ${e.size[_]}</p>
                  </li>
                  <li class="advert-properties__item">
                    <p class="advert-properties__text">
                      Тривальсть життя: <span>${e.lifeDuration[o]}</span>
                    </p>
                  </li>
                  <li class="advert-properties__item">
                    <p class="advert-properties__text">
                      Алергеність: <span>${e.alergenicity[a]}</span>
                    </p>
                  </li>
                  <li class="advert-properties__item">
                    <p class="advert-properties__text">
                      Темпаратура: <span>${e.temperature[m]}</span>
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div class="advert-discreption">
              <h2 class="advert-discreption__title">Опис</h2>
              <p class="advert-discreption__text">
                ${n||'<span class="advert-discreption__text_default">Немає опису</span>'}
              </p>
            </div>
            <div class="advert-user">
              <div class="advert-userinfo">
                <div class="advert-userinfo__profile-img">
                  <img
                  class="advert-userinfo__img ${i?"big-photo":""}"
                  src="${i||"./img/universal/bigProfile.svg"}"
                  alt="photo of profile"
                  />
                </div>
                <div class="advert-userinfo__userinfos">
                  <h2 class="advert-userinfo__name">${h}</h2>
                  <p class="advert-userinfo__adress">${$}</p>
                  <p class="advert-userinfo__phone">
                    ${x}
                  </p>
                  <p class="advert-userinfo__email">
                    ${g}
                  </p>
                </div>
              </div>
              <div class="advert-wishes ${d==="exchange"?"":"is-hidden"}">
                <h2 class="advert-wishes__title">Побажання</h2>
                <p class="advert-wishes__text">
                 ${p||'<span class="advert-wishes__text_default">Немає побажань</span>'}
                </p>
              </div>
            </div>
          </div>
        </section>`}const b={main:document.querySelector("main")};async function z(){const t=A("id"),a=await y(t),s=P(a);b.main.innerHTML=s}await z();w();
