import{a as c,h as C}from"./setCurrentLanguage-DtO1VHaQ.js";import{a as N,c as O,b as j}from"./getDataValue-9dXxiyqd.js";import{g as B}from"./getValueSrcParams-BMgebK2A.js";import{s as U}from"./setSwitchVariableLanguage-Dg5E03zG.js";function H(){document.querySelector(".advert-properties_more").classList.toggle("advert-properties_hidden")}function R(e){const t=e["small-250px"],r=e["medium-300px"],s=e["large-500px"];return`
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
          `}function F(e){const t=e["tiny-100px"],r=e["very-small-175px"],s=e["small-250px"];return`
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
      </picture>`}let a;function G(e){const t=N(e),{image:r,name:s,description:i,wish:l,date:p,lang:u,toxicity:v,plantCondition:m,plantType:_,height:g,light:h,temperature:f,watering:$,care:x,substrate:w,windowDistance:y,allergenicity:b,growthRate:L,lifeDuration:E,username:S,email:I,avatar:P,adress:T,phone:q,way:D}=t,A=c();a=c()==="or"?u:A;const{pageName:W,descriptionTitle:M,defaultDescription:V,WishTitle:k,defaultWish:z}=J();return`
          <div class="container advert__container">
            <h1 hidden>${W}</h1>
            <div class="advert-maininfo">
              ${R(r)}
              <div>
                <p class="advert-maininfo__date">${p}</p>
                <h2 class="advert-maininfo__title">${s}</h2>
                <div class="advert-maininfo-way">
                  <p class="advert-maininfo-way__text">${D}</p>
                </div>
                <ul class="advert-properties">
                  ${o([{toxicity:v},{plantCondition:m},{plantType:_},{height:g},{light:h},{temperature:f},{watering:$}])}
                </ul>
              </div>
            </div>
            <ul class="advert-properties advert-properties_more advert-properties_hidden">
              <li>
                <ul class="advert-properties__more-list">
                  ${o([{care:x},{substrate:w},{windowDistance:y}])}
                </ul>
              </li>
              <li>
                <ul class="advert-properties__more-list">
                  ${o([{allergenicity:b},{growthRate:L},{lifeDuration:E}])}
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
              <h2 class="advert-discreption__title">${M}</h2>
              <p class="advert-discreption__text">
                ${i||`<span class="advert-discreption__text_default">${V}</span>`}
              </p>
            </div>
            <div class="advert-user">
              <div class="advert-userinfo">
                <div class="advert-userinfo__profile-img">
                  ${F(P)}
                </div>
                <div class="advert-userinfo__userinfos">
                  <h2 class="advert-userinfo__name">${S}</h2>
                  <p class="advert-userinfo__adress">${T}</p>
                  <p class="advert-userinfo__phone">
                    ${q}
                  </p>
                  <p class="advert-userinfo__email">
                    ${I}
                  </p>
                </div>
              </div>
              <div class="advert-wishes ${e.way==="exchange"?"":"is-hidden"}">
                <h2 class="advert-wishes__title">${k}</h2>
                <p class="advert-wishes__text">
                 ${l||`<span class="advert-wishes__text_default">${z}</span>`}
                </p>
              </div>
            </div>
          </div>`}function J(){const e={};return e.pageName=a==="ua"?"Оголошення":"Advert",e.descriptionTitle=a==="ua"?"Опис":"Description",e.defaultDescription=a==="ua"?"Немає опису":"There is no description",e.WishTitle=a==="ua"?"Побажання":"Wish",e.defaultWish=a==="ua"?"Немає побажань":"There are no wishes",e}function o(e){const t=[];for(const r of e){const s=Object.keys(r)[0],i=`
    <li class="advert-properties__item">
      <p class="advert-properties__text">${K(s)}: ${r[s]}</p>
    </li>`;t.push(i)}return t.join("")}function K(e){return O[e].name[a]}const Q={translateWrapp:document.querySelector(".translate-wrapper_variable"),translate:document.querySelector(".translate"),translateInput:document.querySelector(".translate__input"),main:document.querySelector("main"),advert:document.querySelector(".advert")};let d={};async function X(){const e=B("id");d=await j(e),n()}function n(){const e=G(d);Q.advert.innerHTML=e,Y()}function Y(){document.querySelector(".advert-properties__more-btn").addEventListener("click",H)}const Z=n,ee=n,te=n,re={setUkrainian:Z,setEnglish:ee,setOriginal:te};await X();U(re);C();
