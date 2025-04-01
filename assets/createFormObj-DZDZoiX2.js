var L=a=>{throw TypeError(a)};var f=(a,t,s)=>t.has(a)||L("Cannot "+s);var n=(a,t,s)=>(f(a,t,"read from private field"),s?s.call(a):t.get(a)),d=(a,t,s)=>t.has(a)?L("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(a):t.set(a,s),c=(a,t,s,e)=>(f(a,t,"write to private field"),e?e.call(a,s):t.set(a,s),s),r=(a,t,s)=>(f(a,t,"access private method"),s);import{c as w}from"./cardData-CybJiSso.js";import{g as Q}from"./getDataValue-Dhcuz_9x.js";import{a as R,g as U}from"./getCurrentLanguage-CvhLhaQe.js";const dt={defaultCardListText:{ua:"Немає оголошень",en:"There are no adverts"}};function W(a){const t=a["very-small-175px"],s=a["medium-300px"];return`
    <picture class="card__img">
      <source
        srcset="
          ${s} 1x,
          ${s} 2x"
          media="(min-width: 1440px)"
        />
        <source
          srcset="
            ${t} 1x,
            ${t} 2x"
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
            ${t} 2x"
          class="card__img"
          alt="plant"
          loading="lazy"
          width="250px"
          height="250px"
        />
      </picture>
    `}let _;function X(a){const t=Q(a),{image:s,name:e,date:o,lang:m,id:j,toxicity:H,plantCondition:V,plantType:O,height:z,light:G,temperature:J,way:K}=t,v=R();return _=v==="or"?m:v,`
          <a href="advert.html?id=${j}" class="card" aria-label="advert ${a.name}">
            <p class="card__way">${w.way[K][_]}</p>
            <div class="card__info-wrapp">
              <div class="card__thumb">
                ${W(s)}
              </div>
              <div class="card__main-block">
                <div class="card__title-wrapp">
                  <h3 class="card__title">${e}</h3>
                </div>
                <ul class="card__info-list">
                  ${Y([{toxicity:H},{plantCondition:V},{plantType:O},{height:z},{light:G},{temperature:J}])}
                </ul>
              </div>
            </div>
            <p class="card__date">${o}</p>
          </a>`}function Y(a){const t=[];for(const s of a){const e=Object.keys(s)[0],o=`<li class="card__info-item">
                      <p>${Z(e)}: ${s[e]}</p>
                    </li>`;t.push(o)}return t.join("")}function Z(a){return w[a].name[_]}function tt(a){return`
  <li class="left-side__item item-card">
    ${X(a)}
  </li>
`}var l,h,g,p,u,i,x,E,y,b,k,P,$,S,I,q,N,T,A,M,B,D,F;class ct{constructor(t,s,e=tt){d(this,i);d(this,l);d(this,h);d(this,g);d(this,p);d(this,u);this.fatherElement=t,this.listCardsEl=t.querySelector(".cards-list"),this.paginationEl=t.querySelector(".pagination"),this.paginationListEl=t.querySelector(".pagination__numb"),this.backEl=t.querySelector(".pagination-arrow_back"),this.nextEl=t.querySelector(".pagination-arrow_next"),this.firstEL=t.querySelector(".pagination-arrow_first"),this.lastEL=t.querySelector(".pagination-arrow_last"),this.loaderEL,this.page=1,this.maxAdvertInPage=10,this.max_page,this.getCard=e,this.request=s,this.lastCardInfo=[]}async showMainCard(t){await this.showCards(t)}async showNextCards(){this.page>=this.max_page||(r(this,i,b).call(this),this.showCards())}async showBackCards(){this.page<=1||(r(this,i,k).call(this),this.showCards())}async showFirstCards(){this.page<=1||(r(this,i,P).call(this),this.showCards())}async showLastCards(){this.page!==this.max_page&&(r(this,i,$).call(this),this.showCards())}async showSpecifiedCards(t){const s=t.target;if(!s.matches(".pagination__btn")&&!s.matches(".pagination__item"))return;const o=s.closest(".pagination__item"),m=Number(o.dataset.page);r(this,i,y).call(this,m),this.showCards()}async showSomeCards(){r(this,i,E).call(this,this.lastCardInfo)}async showCards(t={}){r(this,i,D).call(this),this.disablePagination(),await r(this,i,x).call(this,t)&&this.setPagination(),r(this,i,F).call(this)}setPagination(){r(this,i,q).call(this),r(this,i,M).call(this),r(this,i,N).call(this),this.nextEl.addEventListener("click",n(this,h)),this.backEl.addEventListener("click",n(this,l)),this.paginationListEl.addEventListener("click",n(this,g)),this.firstEL.addEventListener("click",n(this,p)),this.lastEL.addEventListener("click",n(this,u))}disablePagination(){this.nextEl.removeEventListener("click",n(this,h)),this.backEl.removeEventListener("click",n(this,l)),this.paginationListEl.removeEventListener("click",n(this,g)),this.firstEL.removeEventListener("click",n(this,p)),this.lastEL.removeEventListener("click",n(this,u))}setDefaultElement(){this.listCardsEl.innerHTML=at(),r(this,i,B).call(this)}}l=new WeakMap,h=new WeakMap,g=new WeakMap,p=new WeakMap,u=new WeakMap,i=new WeakSet,x=async function(t){try{const s=await this.request(this.page,t);r(this,i,S).call(this,s.tottal);const e=s.result;return r(this,i,I).call(this,e),r(this,i,E).call(this,e)}catch{return!1}},E=function(t){if(t.length===0)return this.setDefaultElement(),!1;const s=t.map(e=>this.getCard(e));return this.listCardsEl.innerHTML=s.join(""),!0},y=function(t){this.page=t},b=function(){this.page+=1},k=function(){this.page-=1},P=function(){this.page=1},$=function(){this.page=this.max_page},S=function(t){this.max_page=Math.ceil(t/this.maxAdvertInPage)},I=function(t){this.lastCardInfo=t},q=function(){c(this,l,this.showBackCards.bind(this)),c(this,h,this.showNextCards.bind(this)),c(this,g,this.showSpecifiedCards.bind(this)),c(this,p,this.showFirstCards.bind(this)),c(this,u,this.showLastCards.bind(this))},N=function(){const t=r(this,i,T).call(this);this.paginationListEl.innerHTML=t,r(this,i,A).call(this)},T=function(){let t="";if(this.max_page>=3){let s=-1;this.page===1?s=0:this.page===this.max_page&&(s=-2);for(let e=1;e<=3;e++){const o=s+this.page;t+=C(o),s++}}else for(let s=1;s<=this.max_page;s++)t+=C(s);return t},A=function(){document.querySelector(`.pagination__item[data-page="${this.page}"]`).setAttribute("active","")},M=function(){this.paginationEl.classList.remove("is-hidden")},B=function(){this.paginationEl.classList.add("is-hidden")},D=function(){if(document.body.setAttribute("lock",""),!this.loaderEL){this.fatherElement.insertAdjacentHTML("beforeend",st()),this.loaderEL=document.querySelector(".card-loader-wrapper");return}this.loaderEL.classList.remove("is-hidden")},F=function(){document.body.removeAttribute("lock",""),this.loaderEL.classList.add("is-hidden")};function C(a){return`<li class="pagination__item" data-page="${a}">
            <button class="pagination__btn">${a}</button>
          </li>`}function st(){return`<div class="card-loader-wrapper">
            <div class="card-loader-block">
              <div class="card-loader"></div>
            </div>
          </div>`}function at(){const t=U()==="ua"?"Немає оголошень":"There are no adverts";return`<div class="cards-list-default">
            <img
              class="cards-list-default__img"
              src="https://res.cloudinary.com/dk3syrsg5/image/upload/v1733484608/defoult-plant_rd42lo.svg"
              alt="${t}"
            />
            <p class="cards-list-default__text" key="defaultCardListText">${t}</p>
          </div>`}function lt(a){let t;a instanceof HTMLElement?t=new FormData(a):t=a;const s={};for(let e of t.entries())s[e[0]]=e[1];return s}export{ct as C,lt as c,dt as d,X as g};
