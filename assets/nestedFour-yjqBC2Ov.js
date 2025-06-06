import{a as d,h as j}from"./getCurrentLanguage-BQe-LnNi.js";import{a as B}from"./api-g_UhaQ4A.js";import{g as U}from"./getValueSrcParams-BMgebK2A.js";import{c as u}from"./cardData-CybJiSso.js";import{g as H}from"./getDataValue-tZ2ipJdC.js";import{s as R}from"./setSwitchVariableLanguage-Bahw2ni_.js";import"./setCurrentLanguage-DbURY5zX.js";function F(){document.querySelector(".plant-post-properties_more").classList.toggle("plant-post-properties_hidden")}function G(t){const s=t["small-250px"],a=t["medium-300px"],e=t["large-500px"];return`
            <picture class="plant-post-maininfo__img">
              <source
                srcset="
                ${e} 1x,
                ${e} 2x"
                media="(min-width: 1440px)"
              />
              <source
                srcset="
                ${a} 1x,
                ${a} 2x
                "
                media="(min-width: 768px)"
              />
              <source
                srcset="
                ${s} 1x,
                ${s} 2x"
              />
              <img
                src="${s}"
                srcset="
                ${s} 1x,
                ${s} 2x,"
                class="plant-post-maininfo__img"
                alt="plant"
                loading="lazy"
              />
            </picture>
          `}function J(t){const s=t["tiny-100px"],a=t["very-small-175px"],e=t["small-250px"];return`
      <picture class="plant-post-userinfo__img big-photo">
        <source
          srcset="
            ${e} 1x,
            ${e} 2x"
          media="(min-width: 1440px)"
        />
        <source
          srcset="
            ${a} 1x,
            ${a} 2x"
          media="(min-width: 768px)"
        />
        <source
          srcset="
            ${s} 1x,
            ${s} 2x"
        />
        <img
          src="${s}"
          srcset="
            ${s} 1x,
            ${s} 2x,"
          class="plant-post-userinfo__img big-photo"
          alt="plant"
          loading="lazy"
        />
      </picture>`}let i;function K(t){const s=H(t),{image:a,name:e,description:n,wish:r,date:g,lang:h,toxicity:f,plantCondition:$,plantType:x,height:v,light:y,temperature:w,watering:b,care:L,substrate:S,windowDistance:E,allergenicity:I,growthRate:P,lifeDuration:T,rarity:q,username:D,email:A,avatar:W,adress:l,phone:c,way:M}=s,O=d();i=d()==="or"?h:O;const{pageName:V,descriptionTitle:k,defaultDescription:z,WishTitle:C,defaultWish:N}=Q();return`
          <div class="container plant-post__container">
            <h1 hidden>${V}</h1>
            <div class="plant-post-maininfo">
              ${G(a)}
              <div class="plant-post-maininfo__property-box">
                <p class="plant-post-maininfo__date">${g}</p>
                <h2 class="plant-post-maininfo__title">${e}</h2>
                <div class="plant-post-maininfo-way">
                  <p class="plant-post-maininfo-way__text">${u.way[M][i]}</p>
                </div>
                <a class="criteria-btn" href="criteria.html">i</a>
                <ul class="plant-post-properties">
                  ${o([{toxicity:f},{plantCondition:$},{plantType:x},{height:v}])}
                  ${o([{light:y},{temperature:w},{watering:b}],!1)}
                </ul>
              </div>
            </div>
            <ul class="plant-post-properties plant-post-properties_more plant-post-properties_hidden">
              <li>
                <ul class="plant-post-properties__more-list">
                  ${o([{care:L},{substrate:S},{windowDistance:E},{growthRate:P}])}
                </ul>
              </li>
              <li>
                <ul class="plant-post-properties__more-list">
                  ${o([{allergenicity:I},{lifeDuration:T},{rarity:q}])}
                </ul>
              </li>
            </ul>
            <button class="plant-post-properties__more-btn" aria-label="more properties">
              <ul class="plant-post-properties-cross">
                <li class="plant-post-properties-cross__line plant-post-properties-cross__line_vertical"></li>
                <li class="plant-post-properties-cross__line plant-post-properties-cross__line_horizontal"></li>
              </ul>
            </button>
            <div class="plant-post-discreption">
              <h2 class="plant-post-discreption__title">${k}</h2>
              <p class="plant-post-discreption__text">
                ${n||`<span class="plant-post-discreption__text_default">${z}</span>`}
              </p>
            </div>
            <div class="plant-post-user">
              <div class="plant-post-userinfo">
                <div class="plant-post-userinfo__profile-img">
                  ${J(W)}
                </div>
                <div class="plant-post-userinfo__userinfos">
                  <h2 class="plant-post-userinfo__name">${D}</h2>
                  <p class="plant-post-userinfo__adress">${l||"adress hidden"}</p>
                  <p class="plant-post-userinfo__phone">
                    ${c||"phone hidden"}
                  </p>
                  <p class="plant-post-userinfo__email">
                    ${A}
                  </p>
                </div>
              </div>
              <div class="plant-post-wishes ${t.way==="exchange"?"":"is-hidden"}">
                <h2 class="plant-post-wishes__title">${C}</h2>
                <p class="plant-post-wishes__text">
                 ${r||`<span class="plant-post-wishes__text_default">${N}</span>`}
                </p>
              </div>
            </div>
          </div>`}function Q(){const t={};return t.pageName=i==="ua"?"Оголошення":"Advert",t.descriptionTitle=i==="ua"?"Опис":"Description",t.defaultDescription=i==="ua"?"Немає опису":"There is no description",t.WishTitle=i==="ua"?"Побажання":"Wish",t.defaultWish=i==="ua"?"Немає побажань":"There are no wishes",t}function o(t,s=!0){const a=[];for(const e of t){const n=Object.keys(e)[0];let r=s?X(e,n):Y(e,n);a.push(r)}return a.join("")}function X(t,s){return`
  <li class="plant-post-properties__item">
    <p class="plant-post-properties__text">${m(s)}: ${t[s]}</p>
  </li>`}function Y(t,s){return`
  <li class="plant-post-properties__item">
    <p class="plant-post-properties__text"> 
    ${m(s)}: <span>${t[s]}</span>
    </p>
  </li>`}function m(t){return u[t].name[i]}const Z={translateWrapp:document.querySelector(".translate-wrapper_variable"),translate:document.querySelector(".translate"),translateInput:document.querySelector(".translate__input"),main:document.querySelector("main"),advert:document.querySelector(".plant-post")};let _={};async function tt(){const t=U("id");_=await B(t),p()}function p(){const t=K(_);Z.advert.innerHTML=t,st()}function st(){document.querySelector(".plant-post-properties__more-btn").addEventListener("click",F)}const et=p,at=p,it=p,nt={setUkrainian:et,setEnglish:at,setOriginal:it};await tt();R(nt);j();
