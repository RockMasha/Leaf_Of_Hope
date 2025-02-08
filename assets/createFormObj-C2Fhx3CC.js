var N=(a,t,s)=>{if(!t.has(a))throw TypeError("Cannot "+s)};var n=(a,t,s)=>(N(a,t,"read from private field"),s?s.call(a):t.get(a)),i=(a,t,s)=>{if(t.has(a))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(a):t.set(a,s)},d=(a,t,s,e)=>(N(a,t,"write to private field"),e?e.call(a,s):t.set(a,s),s);var r=(a,t,s)=>(N(a,t,"access private method"),s);import{c as D}from"./cardData-CybJiSso.js";import{g as dt}from"./getDataValue-CJIOxqeN.js";import{a as ct,g as lt}from"./getCurrentLanguage-DUgTUic5.js";const xt={defaultCardListText:{ua:"Немає оголошень",en:"There are no adverts"}};function ht(a){const t=a["very-small-175px"],s=a["medium-300px"];return`
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
    `}let T;function gt(a){const t=dt(a),{image:s,name:e,date:o,lang:q,id:tt,toxicity:st,plantCondition:at,plantType:it,height:et,light:rt,temperature:nt,way:ot}=t,M=ct();return T=M==="or"?q:M,`
          <a href="advert.html?id=${tt}" class="card" aria-label="advert ${a.name}">
            <p class="card__way">${D.way[ot][T]}</p>
            <div class="card__info-wrapp">
              <div class="card__thumb">
                ${ht(s)}
              </div>
              <div class="card__main-block">
                <div class="card__title-wrapp">
                  <h3 class="card__title">${e}</h3>
                </div>
                <ul class="card__info-list">
                  ${pt([{toxicity:st},{plantCondition:at},{plantType:it},{height:et},{light:rt},{temperature:nt}])}
                </ul>
              </div>
            </div>
            <p class="card__date">${o}</p>
          </a>`}function pt(a){const t=[];for(const s of a){const e=Object.keys(s)[0],o=`<li class="card__info-item">
                      <p>${ut(e)}: ${s[e]}</p>
                    </li>`;t.push(o)}return t.join("")}function ut(a){return D[a].name[T]}function mt(a){return`
  <li class="left-side__item item-card">
    ${gt(a)}
  </li>
`}var c,l,h,g,p,m,F,u,A,f,j,_,H,E,V,v,O,L,z,C,G,w,J,x,K,y,Q,b,R,k,U,P,W,$,X,S,Y,I,Z;class yt{constructor(t,s,e=mt){i(this,m);i(this,u);i(this,f);i(this,_);i(this,E);i(this,v);i(this,L);i(this,C);i(this,w);i(this,x);i(this,y);i(this,b);i(this,k);i(this,P);i(this,$);i(this,S);i(this,I);i(this,c,void 0);i(this,l,void 0);i(this,h,void 0);i(this,g,void 0);i(this,p,void 0);this.fatherElement=t,this.listCardsEl=t.querySelector(".cards-list"),this.paginationEl=t.querySelector(".pagination"),this.paginationListEl=t.querySelector(".pagination__numb"),this.backEl=t.querySelector(".pagination-arrow_back"),this.nextEl=t.querySelector(".pagination-arrow_next"),this.firstEL=t.querySelector(".pagination-arrow_first"),this.lastEL=t.querySelector(".pagination-arrow_last"),this.loaderEL,this.page=1,this.maxAdvertInPage=10,this.max_page,this.getCard=e,this.request=s,this.lastCardInfo=[]}async showMainCard(t){await this.showCards(t)}async showNextCards(){this.page>=this.max_page||(r(this,_,H).call(this),this.showCards())}async showBackCards(){this.page<=1||(r(this,E,V).call(this),this.showCards())}async showFirstCards(){this.page<=1||(r(this,v,O).call(this),this.showCards())}async showLastCards(){this.page!==this.max_page&&(r(this,L,z).call(this),this.showCards())}async showSpecifiedCards(t){const s=t.target;if(!s.matches(".pagination__btn")&&!s.matches(".pagination__item"))return;const o=s.closest(".pagination__item"),q=Number(o.dataset.page);r(this,f,j).call(this,q),this.showCards()}async showSomeCards(){r(this,u,A).call(this,this.lastCardInfo)}async showCards(t={}){r(this,S,Y).call(this),this.disablePagination(),await r(this,m,F).call(this,t)&&this.setPagination(),r(this,I,Z).call(this)}setPagination(){r(this,x,K).call(this),r(this,P,W).call(this),r(this,y,Q).call(this),this.nextEl.addEventListener("click",n(this,l)),this.backEl.addEventListener("click",n(this,c)),this.paginationListEl.addEventListener("click",n(this,h)),this.firstEL.addEventListener("click",n(this,g)),this.lastEL.addEventListener("click",n(this,p))}disablePagination(){this.nextEl.removeEventListener("click",n(this,l)),this.backEl.removeEventListener("click",n(this,c)),this.paginationListEl.removeEventListener("click",n(this,h)),this.firstEL.removeEventListener("click",n(this,g)),this.lastEL.removeEventListener("click",n(this,p))}setDefaultElement(){this.listCardsEl.innerHTML=_t(),r(this,$,X).call(this)}}c=new WeakMap,l=new WeakMap,h=new WeakMap,g=new WeakMap,p=new WeakMap,m=new WeakSet,F=async function(t){try{const s=await this.request(this.page,t);r(this,C,G).call(this,s.tottal);const e=s.result;return r(this,w,J).call(this,e),r(this,u,A).call(this,e)}catch{return!1}},u=new WeakSet,A=function(t){if(t.length===0)return this.setDefaultElement(),!1;const s=t.map(e=>this.getCard(e));return this.listCardsEl.innerHTML=s.join(""),!0},f=new WeakSet,j=function(t){this.page=t},_=new WeakSet,H=function(){this.page+=1},E=new WeakSet,V=function(){this.page-=1},v=new WeakSet,O=function(){this.page=1},L=new WeakSet,z=function(){this.page=this.max_page},C=new WeakSet,G=function(t){this.max_page=Math.ceil(t/this.maxAdvertInPage)},w=new WeakSet,J=function(t){this.lastCardInfo=t},x=new WeakSet,K=function(){d(this,c,this.showBackCards.bind(this)),d(this,l,this.showNextCards.bind(this)),d(this,h,this.showSpecifiedCards.bind(this)),d(this,g,this.showFirstCards.bind(this)),d(this,p,this.showLastCards.bind(this))},y=new WeakSet,Q=function(){const t=r(this,b,R).call(this);this.paginationListEl.innerHTML=t,r(this,k,U).call(this)},b=new WeakSet,R=function(){let t="";if(this.max_page>=3){let s=-1;this.page===1?s=0:this.page===this.max_page&&(s=-2);for(let e=1;e<=3;e++){const o=s+this.page;t+=B(o),s++}}else for(let s=1;s<=this.max_page;s++)t+=B(s);return t},k=new WeakSet,U=function(){document.querySelector(`.pagination__item[data-page="${this.page}"]`).setAttribute("active","")},P=new WeakSet,W=function(){this.paginationEl.classList.remove("is-hidden")},$=new WeakSet,X=function(){this.paginationEl.classList.add("is-hidden")},S=new WeakSet,Y=function(){if(document.body.setAttribute("lock",""),!this.loaderEL){this.fatherElement.insertAdjacentHTML("beforeend",ft()),this.loaderEL=document.querySelector(".card-loader-wrapper");return}this.loaderEL.classList.remove("is-hidden")},I=new WeakSet,Z=function(){document.body.removeAttribute("lock",""),this.loaderEL.classList.add("is-hidden")};function B(a){return`<li class="pagination__item" data-page="${a}">
            <button class="pagination__btn">${a}</button>
          </li>`}function ft(){return`<div class="card-loader-wrapper">
            <div class="card-loader-block">
              <div class="card-loader"></div>
            </div>
          </div>`}function _t(){const t=lt()==="ua"?"Немає оголошень":"There are no adverts";return`<div class="cards-list-default">
            <img
              class="cards-list-default__img"
              src="https://res.cloudinary.com/dk3syrsg5/image/upload/v1733484608/defoult-plant_rd42lo.svg"
              alt="${t}"
            />
            <p class="cards-list-default__text" key="defaultCardListText">${t}</p>
          </div>`}function bt(a){let t;a instanceof HTMLElement?t=new FormData(a):t=a;const s={};for(let e of t.entries())s[e[0]]=e[1];return s}export{yt as C,bt as c,xt as d,gt as g};
