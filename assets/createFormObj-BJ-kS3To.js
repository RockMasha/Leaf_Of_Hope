var O=(i,a,t)=>{if(!a.has(i))throw TypeError("Cannot "+t)};var l=(i,a,t)=>(O(i,a,"read from private field"),t?t.call(i):a.get(i)),e=(i,a,t)=>{if(a.has(i))throw TypeError("Cannot add the same private member more than once");a instanceof WeakSet?a.add(i):a.set(i,t)},m=(i,a,t,s)=>(O(i,a,"write to private field"),s?s.call(i,t):a.set(i,t),t);var r=(i,a,t)=>(O(i,a,"access private method"),t);import{a as ra,g as na}from"./setCurrentLanguage-NOXEc7TY.js";import{c as la,g as ca,a as da,b as oa}from"./getUkraineDataValue-Ds0VW_Xj.js";const La={defaultCardListText:{ua:"Немає оголошень",en:"There are no adverts"}};function H(i){const a=i["very-small-175px"],t=i["medium-300px"];return`
    <picture class="card__img">
      <source
        srcset="
          ${t} 1x,
          ${t} 2x"
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
            ${a} 1x,
            ${a} 2x"
        />
        <img
          src="${a}"
          srcset="
            ${a} 1x,
            ${a} 2x"
          class="card__img"
          alt="plant"
          loading="lazy"
          width="250px"
          height="250px"
        />
      </picture>
    `}function ha(i){const a=la(i),{light:t,alergenicity:s,humidity:n,size:c,temperature:d,lifeDuration:o,way:h,image:p,name:_,date:g,id:u}=a;return`
          <a href="advert.html?id=${u}" class="card" aria-label="advert ${i.name}">
            <p class="card__way">${h}</p>
            <div class="card__info-wrapp">
              <div class="card__thumb">
                ${H(p)}
              </div>
              <div class="card__main-block">
                <div class="card__title-wrapp">
                  <h3  class="card__title">${_}</h3>
                </div>
                <ul class="card__info-list">
                  <li class="card__info-item"><p>Light: ${t}</p></li>
                  <li class="card__info-item"><p>Humidity: ${n}</p></li>
                  <li class="card__info-item"><p>Size: ${c}</p></li>
                  <li class="card__info-item">
                    <p>Life duration: <span>${o}</span></p>
                  </li>
                  <li class="card__info-item">
                    <p>Allergenicity: <span>${s}</span></p>
                  </li>
                  <li class="card__info-item">
                    <p>Temperature: <span>${d}</span></p>
                  </li>
                </ul>
              </div>
            </div>
            <p class="card__date">${g}</p>
          </a>`}function pa(i){const a=ca(i),{light:t,alergenicity:s,humidity:n,size:c,temperature:d,lifeDuration:o,way:h,image:p,name:_,date:g,id:u}=a;return`
          <a href="advert.html?id=${u}" class="card" aria-label="advert ${i.name}">
            <p class="card__way">${h}</p>
            <div class="card__info-wrapp">
              <div class="card__thumb">
                ${H(p)}
              </div>
              <div class="card__main-block">
                <div class="card__title-wrapp">
                  <h3  class="card__title">${_}</h3>
                </div>
                <ul class="card__info-list">
                  <li class="card__info-item"><p>Light: ${t}</p></li>
                  <li class="card__info-item"><p>Humidity: ${n}</p></li>
                  <li class="card__info-item"><p>Size: ${c}</p></li>
                  <li class="card__info-item">
                    <p>Life duration: <span>${o}</span></p>
                  </li>
                  <li class="card__info-item">
                    <p>Allergenicity: <span>${s}</span></p>
                  </li>
                  <li class="card__info-item">
                    <p>Temperature: <span>${d}</span></p>
                  </li>
                </ul>
              </div>
            </div>
            <p class="card__date">${g}</p>
          </a>`}function _a(i){const a=da(i),{light:t,alergenicity:s,humidity:n,size:c,temperature:d,lifeDuration:o,way:h,image:p,name:_,date:g,id:u}=a;return`
          <a href="advert.html?id=${u}" class="card" aria-label="advert ${i.name}">
            <p class="card__way">${h}</p>
            <div class="card__info-wrapp">
              <div class="card__thumb">
                ${H(p)}
              </div>
              <div class="card__main-block">
                <div class="card__title-wrapp">
                  <h3  class="card__title">${_}</h3>
                </div>
                <ul class="card__info-list">
                  <li class="card__info-item"><p>Освітлення: ${t}</p></li>
                  <li class="card__info-item"><p>Вологість: ${n}</p></li>
                  <li class="card__info-item"><p>Розмір: ${c}</p></li>
                  <li class="card__info-item">
                    <p>Тривальсть життя: <span>${o}</span></p>
                  </li>
                  <li class="card__info-item">
                    <p>Алергеність: <span>${s}</span></p>
                  </li>
                  <li class="card__info-item">
                    <p>Темпаратура: <span>${d}</span></p>
                  </li>
                </ul>
              </div>
            </div>
            <p class="card__date">${g}</p>
          </a>`}function ga(i){const a=oa(i),{light:t,alergenicity:s,humidity:n,size:c,temperature:d,lifeDuration:o,way:h,image:p,name:_,date:g,id:u}=a;return`
          <a href="advert.html?id=${u}" class="card" aria-label="advert ${i.name}">
            <p class="card__way">${h}</p>
            <div class="card__info-wrapp">
              <div class="card__thumb">
                ${H(p)}
              </div>
              <div class="card__main-block">
                <div class="card__title-wrapp">
                  <h3  class="card__title">${_}</h3>
                </div>
                <ul class="card__info-list">
                  <li class="card__info-item"><p>Освітлення: ${t}</p></li>
                  <li class="card__info-item"><p>Вологість: ${n}</p></li>
                  <li class="card__info-item"><p>Розмір: ${c}</p></li>
                  <li class="card__info-item">
                    <p>Тривальсть життя: <span>${o}</span></p>
                  </li>
                  <li class="card__info-item">
                    <p>Алергеність: <span>${s}</span></p>
                  </li>
                  <li class="card__info-item">
                    <p>Темпаратура: <span>${d}</span></p>
                  </li>
                </ul>
              </div>
            </div>
            <p class="card__date">${g}</p>
          </a>`}function ua(i){switch(ra()){case"en":return ha(i);case"ua":return ga(i);case"or":return ma(i)}}function ma(i){const{lang:a}=i;return a==="en"?pa(i):_a(i)}function fa(i){return`
      <li class="left-side__item item-card">
        ${ua(i)}
      </li>
    `}var f,v,$,w,C,L,U,E,F,y,j,b,G,x,J,k,K,P,Q,I,R,S,W,D,X,q,Y,T,Z,A,aa,N,ia,M,ta,z,sa,B,ea;class ya{constructor(a,t,s=fa){e(this,L);e(this,E);e(this,y);e(this,b);e(this,x);e(this,k);e(this,P);e(this,I);e(this,S);e(this,D);e(this,q);e(this,T);e(this,A);e(this,N);e(this,M);e(this,z);e(this,B);e(this,f,void 0);e(this,v,void 0);e(this,$,void 0);e(this,w,void 0);e(this,C,void 0);this.fatherElement=a,this.listCardsEl=a.querySelector(".cards-list"),this.paginationEl=a.querySelector(".pagination"),this.paginationListEl=a.querySelector(".pagination__numb"),this.backEl=a.querySelector(".pagination-arrow_back"),this.nextEl=a.querySelector(".pagination-arrow_next"),this.firstEL=a.querySelector(".pagination-arrow_first"),this.lastEL=a.querySelector(".pagination-arrow_last"),this.loaderEL,this.page=1,this.maxAdvertInPage=10,this.max_page,this.getCard=s,this.request=t,this.lastCardInfo=[]}async showMainCard(a){await this.showCards(a)}async showNextCards(){this.page>=this.max_page||(r(this,b,G).call(this),this.showCards())}async showBackCards(){this.page<=1||(r(this,x,J).call(this),this.showCards())}async showFirstCards(){this.page<=1||(r(this,k,K).call(this),this.showCards())}async showLastCards(){this.page!==this.max_page&&(r(this,P,Q).call(this),this.showCards())}async showSpecifiedCards(a){const t=a.target;if(!t.matches(".pagination__btn")&&!t.matches(".pagination__item"))return;const n=t.closest(".pagination__item"),c=Number(n.dataset.page);r(this,y,j).call(this,c),this.showCards()}async showSomeCards(){r(this,E,F).call(this,this.lastCardInfo)}async showCards(a={}){r(this,z,sa).call(this),this.disablePagination(),await r(this,L,U).call(this,a)&&this.setPagination(),r(this,B,ea).call(this)}setPagination(){r(this,D,X).call(this),r(this,N,ia).call(this),r(this,q,Y).call(this),this.nextEl.addEventListener("click",l(this,v)),this.backEl.addEventListener("click",l(this,f)),this.paginationListEl.addEventListener("click",l(this,$)),this.firstEL.addEventListener("click",l(this,w)),this.lastEL.addEventListener("click",l(this,C))}disablePagination(){this.nextEl.removeEventListener("click",l(this,v)),this.backEl.removeEventListener("click",l(this,f)),this.paginationListEl.removeEventListener("click",l(this,$)),this.firstEL.removeEventListener("click",l(this,w)),this.lastEL.removeEventListener("click",l(this,C))}setDefaultElement(){this.listCardsEl.innerHTML=$a(),r(this,M,ta).call(this)}}f=new WeakMap,v=new WeakMap,$=new WeakMap,w=new WeakMap,C=new WeakMap,L=new WeakSet,U=async function(a){try{const t=await this.request(this.page,a);r(this,I,R).call(this,t.tottal);const s=t.result;return r(this,S,W).call(this,s),r(this,E,F).call(this,s)}catch{return!1}},E=new WeakSet,F=function(a){if(a.length===0)return this.setDefaultElement(),!1;const t=a.map(s=>this.getCard(s));return this.listCardsEl.innerHTML=t.join(""),!0},y=new WeakSet,j=function(a){this.page=a},b=new WeakSet,G=function(){this.page+=1},x=new WeakSet,J=function(){this.page-=1},k=new WeakSet,K=function(){this.page=1},P=new WeakSet,Q=function(){this.page=this.max_page},I=new WeakSet,R=function(a){this.max_page=Math.ceil(a/this.maxAdvertInPage)},S=new WeakSet,W=function(a){this.lastCardInfo=a},D=new WeakSet,X=function(){m(this,f,this.showBackCards.bind(this)),m(this,v,this.showNextCards.bind(this)),m(this,$,this.showSpecifiedCards.bind(this)),m(this,w,this.showFirstCards.bind(this)),m(this,C,this.showLastCards.bind(this))},q=new WeakSet,Y=function(){const a=r(this,T,Z).call(this);this.paginationListEl.innerHTML=a,r(this,A,aa).call(this)},T=new WeakSet,Z=function(){let a="";if(this.max_page>=3){let t=-1;this.page===1?t=0:this.page===this.max_page&&(t=-2);for(let s=1;s<=3;s++){const n=t+this.page;a+=V(n),t++}}else for(let t=1;t<=this.max_page;t++)a+=V(t);return a},A=new WeakSet,aa=function(){document.querySelector(`.pagination__item[data-page="${this.page}"]`).setAttribute("active","")},N=new WeakSet,ia=function(){this.paginationEl.classList.remove("is-hidden")},M=new WeakSet,ta=function(){this.paginationEl.classList.add("is-hidden")},z=new WeakSet,sa=function(){if(document.body.setAttribute("lock",""),!this.loaderEL){this.fatherElement.insertAdjacentHTML("beforeend",va()),this.loaderEL=document.querySelector(".card-loader-wrapper");return}this.loaderEL.classList.remove("is-hidden")},B=new WeakSet,ea=function(){document.body.removeAttribute("lock",""),this.loaderEL.classList.add("is-hidden")};function V(i){return`<li class="pagination__item" data-page="${i}">
            <button class="pagination__btn">${i}</button>
          </li>`}function va(){return`<div class="card-loader-wrapper">
            <div class="card-loader-block">
              <div class="card-loader"></div>
            </div>
          </div>`}function $a(){return`<div class="cards-list-default">
            <svg class="cards-list-default__img">
              <use href="./img/profile/defoult-plant.svg#defoult-plant"></use>
            </svg>
            <p class="cards-list-default__text" key="defaultCardListText">${na()==="ua"?"Немає оголошень":"There are no adverts"}</p>
          </div>`}function ba(i){let a;i instanceof HTMLElement?a=new FormData(i):a=i;const t={};for(let s of a.entries())t[s[0]]=s[1];return t}export{ya as C,ba as c,La as d,ua as g};
