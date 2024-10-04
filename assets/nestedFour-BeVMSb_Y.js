import{h as $}from"./hiddenContentLoader-CROy0A0f.js";import{b as w}from"./api-DlfnOqWE.js";import{c as e}from"./cardData-DyQ4QymL.js";function x(t){const{alergenicity:s,humidity:a,image:n,keeper:p,lifeDuration:o,light:l,name:c,size:v,temperature:_,way:i,wish:r,description:d}=t,{username:m,email:u,avatar:f,adress:h,phone:g}=p;return`
        <section class="advert">
          <div class="container advert__container">
            <div class="advert-maininfo">
              <img
              class="advert-maininfo__img"
              src="${n}"
              alt="photo of plant"
            />
              <div>
                <h2 class="advert-maininfo__title">${c}</h2>
                <div class="advert-maininfo-way">
                  <p class="advert-maininfo-way__text">${e.way[i]}</p>
                </div>
                <ul class="advert-properties">
                  <li class="advert-properties__item">
                    <p class="advert-properties__text">Освітлення: ${e.light[l]}</p>
                  </li>
                  <li class="advert-properties__item">
                    <p class="advert-properties__text">Вологість: ${e.humidity[a]}</p>
                  </li>
                  <li class="advert-properties__item">
                    <p class="advert-properties__text">Розмір: ${e.size[v]}</p>
                  </li>
                  <li class="advert-properties__item">
                    <p class="advert-properties__text">
                      Тривальсть життя: <span>${e.lifeDuration[o]}</span>
                    </p>
                  </li>
                  <li class="advert-properties__item">
                    <p class="advert-properties__text">
                      Алергеність: <span>${e.alergenicity[s]}</span>
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
                  src="${f}"
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
                    ${u}
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
        </section>`}function y(){return new URL(window.location.href).searchParams.get("id")}const A={main:document.querySelector("main")};async function D(){const t=y(),s=await w(t),a=x(s);A.main.innerHTML=a}await D();$();
