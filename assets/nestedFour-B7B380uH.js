import{a as d,h as N}from"./setCurrentLanguage-0poYnjjN.js";import{a as O}from"./api-CZvNR4Wc.js";import{c as j,g as B}from"./getDataValue-DJk4az9Q.js";import{g as U}from"./getValueSrcParams-BMgebK2A.js";import{s as H}from"./setSwitchVariableLanguage-B00RYMg6.js";function R(){document.querySelector(".advert-properties_more").classList.toggle("advert-properties_hidden")}function F(e){const t=e["small-250px"],r=e["medium-300px"],s=e["large-500px"];return`
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
          `}function G(e){const t=e["tiny-100px"],r=e["very-small-175px"],s=e["small-250px"];return`
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
      </picture>`}let a;function J(e,t){const r=t(e),{image:s,name:n,description:l,wish:c,date:u,lang:v,toxicity:m,plantCondition:_,plantType:g,height:h,light:f,temperature:$,watering:x,care:w,substrate:y,windowDistance:b,allergenicity:L,growthRate:E,lifeDuration:S,username:I,email:P,avatar:T,adress:q,phone:D,way:A}=r,W=d();a=d()==="or"?v:W;const{pageName:M,descriptionTitle:V,defaultDescription:k,WishTitle:z,defaultWish:C}=K();return`
          <div class="container advert__container">
            <h1 hidden>${M}</h1>
            <div class="advert-maininfo">
              ${F(s)}
              <div>
                <p class="advert-maininfo__date">${u}</p>
                <h2 class="advert-maininfo__title">${n}</h2>
                <div class="advert-maininfo-way">
                  <p class="advert-maininfo-way__text">${A}</p>
                </div>
                <ul class="advert-properties">
                  ${o([{toxicity:m},{plantCondition:_},{plantType:g},{height:h},{light:f},{temperature:$},{watering:x}])}
                </ul>
              </div>
            </div>
            <ul class="advert-properties advert-properties_more advert-properties_hidden">
              <li>
                <ul class="advert-properties__more-list">
                  ${o([{care:w},{substrate:y},{windowDistance:b}])}
                </ul>
              </li>
              <li>
                <ul class="advert-properties__more-list">
                  ${o([{allergenicity:L},{growthRate:E},{lifeDuration:S}])}
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
              <h2 class="advert-discreption__title">${V}</h2>
              <p class="advert-discreption__text">
                ${l||`<span class="advert-discreption__text_default">${k}</span>`}
              </p>
            </div>
            <div class="advert-user">
              <div class="advert-userinfo">
                <div class="advert-userinfo__profile-img">
                  ${G(T)}
                </div>
                <div class="advert-userinfo__userinfos">
                  <h2 class="advert-userinfo__name">${I}</h2>
                  <p class="advert-userinfo__adress">${q}</p>
                  <p class="advert-userinfo__phone">
                    ${D}
                  </p>
                  <p class="advert-userinfo__email">
                    ${P}
                  </p>
                </div>
              </div>
              <div class="advert-wishes ${e.way==="exchange"?"":"is-hidden"}">
                <h2 class="advert-wishes__title">${z}</h2>
                <p class="advert-wishes__text">
                 ${c||`<span class="advert-wishes__text_default">${C}</span>`}
                </p>
              </div>
            </div>
          </div>`}function K(){const e={};return e.pageName=a==="ua"?"Оголошення":"Advert",e.descriptionTitle=a==="ua"?"Опис":"Description",e.defaultDescription=a==="ua"?"Немає опису":"There is no description",e.WishTitle=a==="ua"?"Побажання":"Wish",e.defaultWish=a==="ua"?"Немає побажань":"There are no wishes",e}function o(e){const t=[];for(const r of e){const s=Object.keys(r)[0],n=`
    <li class="advert-properties__item">
      <p class="advert-properties__text">${Q(s)}: ${r[s]}</p>
    </li>`;t.push(n)}return t.join("")}function Q(e){return j[e].name[a]}const X={translateWrapp:document.querySelector(".translate-wrapper_variable"),translate:document.querySelector(".translate"),translateInput:document.querySelector(".translate__input"),main:document.querySelector("main"),advert:document.querySelector(".advert")};let p={};async function Y(){const e=U("id");p=await O(e),i()}function i(){const e=J(p,B);X.advert.innerHTML=e,Z()}function Z(){document.querySelector(".advert-properties__more-btn").addEventListener("click",R)}const ee=i,te=i,re=i,se={setUkrainian:ee,setEnglish:te,setOriginal:re};await Y();H(se);N();
