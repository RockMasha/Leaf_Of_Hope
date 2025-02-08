import{a as c,h as j}from"./getCurrentLanguage-DUgTUic5.js";import{a as B}from"./api-C319RYlQ.js";import{g as U}from"./getValueSrcParams-BMgebK2A.js";import{c as d}from"./cardData-CybJiSso.js";import{g as H}from"./getDataValue-CJIOxqeN.js";import{s as R}from"./setSwitchVariableLanguage-DdJ1DRlT.js";import"./setCurrentLanguage-BJ078Sy1.js";function F(){document.querySelector(".advert-properties_more").classList.toggle("advert-properties_hidden")}function G(e){const t=e["small-250px"],s=e["medium-300px"],r=e["large-500px"];return`
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
          `}function J(e){const t=e["tiny-100px"],s=e["very-small-175px"],r=e["small-250px"];return`
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
      </picture>`}let a;function K(e){const t=H(e),{image:s,name:r,description:i,wish:n,date:m,lang:v,toxicity:_,plantCondition:g,plantType:h,height:f,light:$,temperature:x,watering:y,care:w,substrate:b,windowDistance:L,allergenicity:S,growthRate:E,lifeDuration:I,rarity:P,username:T,email:q,avatar:D,adress:A,phone:W,way:M}=t,O=c();a=c()==="or"?v:O;const{pageName:V,descriptionTitle:k,defaultDescription:z,WishTitle:C,defaultWish:N}=Q();return`
          <div class="container advert__container">
            <h1 hidden>${V}</h1>
            <div class="advert-maininfo">
              ${G(s)}
              <div class="advert-maininfo__property-box">
                <p class="advert-maininfo__date">${m}</p>
                <h2 class="advert-maininfo__title">${r}</h2>
                <div class="advert-maininfo-way">
                  <p class="advert-maininfo-way__text">${d.way[M][a]}</p>
                </div>
                <a class="criteria-btn" href="criteria.html">i</a>
                <ul class="advert-properties">
                  ${o([{toxicity:_},{plantCondition:g},{plantType:h},{height:f}])}
                  ${o([{light:$},{temperature:x},{watering:y}],!1)}
                </ul>
              </div>
            </div>
            <ul class="advert-properties advert-properties_more advert-properties_hidden">
              <li>
                <ul class="advert-properties__more-list">
                  ${o([{care:w},{substrate:b},{windowDistance:L},{growthRate:E}])}
                </ul>
              </li>
              <li>
                <ul class="advert-properties__more-list">
                  ${o([{allergenicity:S},{lifeDuration:I},{rarity:P}])}
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
              <h2 class="advert-discreption__title">${k}</h2>
              <p class="advert-discreption__text">
                ${i||`<span class="advert-discreption__text_default">${z}</span>`}
              </p>
            </div>
            <div class="advert-user">
              <div class="advert-userinfo">
                <div class="advert-userinfo__profile-img">
                  ${J(D)}
                </div>
                <div class="advert-userinfo__userinfos">
                  <h2 class="advert-userinfo__name">${T}</h2>
                  <p class="advert-userinfo__adress">${A}</p>
                  <p class="advert-userinfo__phone">
                    ${W}
                  </p>
                  <p class="advert-userinfo__email">
                    ${q}
                  </p>
                </div>
              </div>
              <div class="advert-wishes ${e.way==="exchange"?"":"is-hidden"}">
                <h2 class="advert-wishes__title">${C}</h2>
                <p class="advert-wishes__text">
                 ${n||`<span class="advert-wishes__text_default">${N}</span>`}
                </p>
              </div>
            </div>
          </div>`}function Q(){const e={};return e.pageName=a==="ua"?"Оголошення":"Advert",e.descriptionTitle=a==="ua"?"Опис":"Description",e.defaultDescription=a==="ua"?"Немає опису":"There is no description",e.WishTitle=a==="ua"?"Побажання":"Wish",e.defaultWish=a==="ua"?"Немає побажань":"There are no wishes",e}function o(e,t=!0){const s=[];for(const r of e){const i=Object.keys(r)[0];let n=t?X(r,i):Y(r,i);s.push(n)}return s.join("")}function X(e,t){return`
  <li class="advert-properties__item">
    <p class="advert-properties__text">${p(t)}: ${e[t]}</p>
  </li>`}function Y(e,t){return`
  <li class="advert-properties__item">
    <p class="advert-properties__text"> 
    ${p(t)}: <span>${e[t]}</span>
    </p>
  </li>`}function p(e){return d[e].name[a]}const Z={translateWrapp:document.querySelector(".translate-wrapper_variable"),translate:document.querySelector(".translate"),translateInput:document.querySelector(".translate__input"),main:document.querySelector("main"),advert:document.querySelector(".advert")};let u={};async function ee(){const e=U("id");u=await B(e),l()}function l(){const e=K(u);Z.advert.innerHTML=e,te()}function te(){document.querySelector(".advert-properties__more-btn").addEventListener("click",F)}const re=l,se=l,ae=l,ie={setUkrainian:re,setEnglish:se,setOriginal:ae};await ee();R(ie);j();
