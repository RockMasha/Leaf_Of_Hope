var N=(a,t,s)=>{if(!t.has(a))throw TypeError("Cannot "+s)};var n=(a,t,s)=>(N(a,t,"read from private field"),s?s.call(a):t.get(a)),i=(a,t,s)=>{if(t.has(a))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(a):t.set(a,s)},c=(a,t,s,e)=>(N(a,t,"write to private field"),e?e.call(a,s):t.set(a,s),s);var r=(a,t,s)=>(N(a,t,"access private method"),s);import{a as ot,c as ct}from"./getDataValue-9dXxiyqd.js";import{a as dt,g as lt}from"./setCurrentLanguage-DtO1VHaQ.js";function wt(a,t){const{property:s,ua:e,en:o}=t;a[s].ua=e,a[s].en=o}const xt={defaultCardListText:{ua:"Немає оголошень",en:"There are no adverts"}};function ht(a){const t=a["very-small-175px"],s=a["medium-300px"];return`
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
    `}let B;function gt(a){const t=ot(a),{image:s,name:e,date:o,lang:q,id:Z,toxicity:tt,plantCondition:st,plantType:at,height:et,light:it,temperature:rt,way:nt}=t,A=dt();return B=A==="or"?q:A,`
          <a href="advert.html?id=${Z}" class="card" aria-label="advert ${a.name}">
            <p class="card__way">${nt}</p>
            <div class="card__info-wrapp">
              <div class="card__thumb">
                ${ht(s)}
              </div>
              <div class="card__main-block">
                <div class="card__title-wrapp">
                  <h3 class="card__title">${e}</h3>
                </div>
                <ul class="card__info-list">
                  ${ut([{toxicity:tt},{plantCondition:st},{plantType:at},{height:et},{light:it},{temperature:rt}])}
                </ul>
              </div>
            </div>
            <p class="card__date">${o}</p>
          </a>`}function ut(a){const t=[];for(const s of a){const e=Object.keys(s)[0],o=`<li class="card__info-item">
                      <p>${pt(e)}: ${s[e]}</p>
                    </li>`;t.push(o)}return t.join("")}function pt(a){return ct[a].name[B]}function mt(a){return`
  <li class="left-side__item item-card">
    ${gt(a)}
  </li>
`}var d,l,h,g,u,m,D,p,T,f,F,_,j,v,H,E,V,L,O,C,z,w,G,x,J,y,K,b,Q,k,R,P,U,$,W,S,X,I,Y;class yt{constructor(t,s,e=mt){i(this,m);i(this,p);i(this,f);i(this,_);i(this,v);i(this,E);i(this,L);i(this,C);i(this,w);i(this,x);i(this,y);i(this,b);i(this,k);i(this,P);i(this,$);i(this,S);i(this,I);i(this,d,void 0);i(this,l,void 0);i(this,h,void 0);i(this,g,void 0);i(this,u,void 0);this.fatherElement=t,this.listCardsEl=t.querySelector(".cards-list"),this.paginationEl=t.querySelector(".pagination"),this.paginationListEl=t.querySelector(".pagination__numb"),this.backEl=t.querySelector(".pagination-arrow_back"),this.nextEl=t.querySelector(".pagination-arrow_next"),this.firstEL=t.querySelector(".pagination-arrow_first"),this.lastEL=t.querySelector(".pagination-arrow_last"),this.loaderEL,this.page=1,this.maxAdvertInPage=10,this.max_page,this.getCard=e,this.request=s,this.lastCardInfo=[]}async showMainCard(t){await this.showCards(t)}async showNextCards(){this.page>=this.max_page||(r(this,_,j).call(this),this.showCards())}async showBackCards(){this.page<=1||(r(this,v,H).call(this),this.showCards())}async showFirstCards(){this.page<=1||(r(this,E,V).call(this),this.showCards())}async showLastCards(){this.page!==this.max_page&&(r(this,L,O).call(this),this.showCards())}async showSpecifiedCards(t){const s=t.target;if(!s.matches(".pagination__btn")&&!s.matches(".pagination__item"))return;const o=s.closest(".pagination__item"),q=Number(o.dataset.page);r(this,f,F).call(this,q),this.showCards()}async showSomeCards(){r(this,p,T).call(this,this.lastCardInfo)}async showCards(t={}){r(this,S,X).call(this),this.disablePagination(),await r(this,m,D).call(this,t)&&this.setPagination(),r(this,I,Y).call(this)}setPagination(){r(this,x,J).call(this),r(this,P,U).call(this),r(this,y,K).call(this),this.nextEl.addEventListener("click",n(this,l)),this.backEl.addEventListener("click",n(this,d)),this.paginationListEl.addEventListener("click",n(this,h)),this.firstEL.addEventListener("click",n(this,g)),this.lastEL.addEventListener("click",n(this,u))}disablePagination(){this.nextEl.removeEventListener("click",n(this,l)),this.backEl.removeEventListener("click",n(this,d)),this.paginationListEl.removeEventListener("click",n(this,h)),this.firstEL.removeEventListener("click",n(this,g)),this.lastEL.removeEventListener("click",n(this,u))}setDefaultElement(){this.listCardsEl.innerHTML=_t(),r(this,$,W).call(this)}}d=new WeakMap,l=new WeakMap,h=new WeakMap,g=new WeakMap,u=new WeakMap,m=new WeakSet,D=async function(t){try{const s=await this.request(this.page,t);r(this,C,z).call(this,s.tottal);const e=s.result;return r(this,w,G).call(this,e),r(this,p,T).call(this,e)}catch{return!1}},p=new WeakSet,T=function(t){if(t.length===0)return this.setDefaultElement(),!1;const s=t.map(e=>this.getCard(e));return this.listCardsEl.innerHTML=s.join(""),!0},f=new WeakSet,F=function(t){this.page=t},_=new WeakSet,j=function(){this.page+=1},v=new WeakSet,H=function(){this.page-=1},E=new WeakSet,V=function(){this.page=1},L=new WeakSet,O=function(){this.page=this.max_page},C=new WeakSet,z=function(t){this.max_page=Math.ceil(t/this.maxAdvertInPage)},w=new WeakSet,G=function(t){this.lastCardInfo=t},x=new WeakSet,J=function(){c(this,d,this.showBackCards.bind(this)),c(this,l,this.showNextCards.bind(this)),c(this,h,this.showSpecifiedCards.bind(this)),c(this,g,this.showFirstCards.bind(this)),c(this,u,this.showLastCards.bind(this))},y=new WeakSet,K=function(){const t=r(this,b,Q).call(this);this.paginationListEl.innerHTML=t,r(this,k,R).call(this)},b=new WeakSet,Q=function(){let t="";if(this.max_page>=3){let s=-1;this.page===1?s=0:this.page===this.max_page&&(s=-2);for(let e=1;e<=3;e++){const o=s+this.page;t+=M(o),s++}}else for(let s=1;s<=this.max_page;s++)t+=M(s);return t},k=new WeakSet,R=function(){document.querySelector(`.pagination__item[data-page="${this.page}"]`).setAttribute("active","")},P=new WeakSet,U=function(){this.paginationEl.classList.remove("is-hidden")},$=new WeakSet,W=function(){this.paginationEl.classList.add("is-hidden")},S=new WeakSet,X=function(){if(document.body.setAttribute("lock",""),!this.loaderEL){this.fatherElement.insertAdjacentHTML("beforeend",ft()),this.loaderEL=document.querySelector(".card-loader-wrapper");return}this.loaderEL.classList.remove("is-hidden")},I=new WeakSet,Y=function(){document.body.removeAttribute("lock",""),this.loaderEL.classList.add("is-hidden")};function M(a){return`<li class="pagination__item" data-page="${a}">
            <button class="pagination__btn">${a}</button>
          </li>`}function ft(){return`<div class="card-loader-wrapper">
            <div class="card-loader-block">
              <div class="card-loader"></div>
            </div>
          </div>`}function _t(){return`<div class="cards-list-default">
            <svg class="cards-list-default__img">
              <use href="https://res.cloudinary.com/dk3syrsg5/image/upload/v1733484608/defoult-plant_rd42lo.svg"></use>
            </svg>
            <p class="cards-list-default__text" key="defaultCardListText">${lt()==="ua"?"Немає оголошень":"There are no adverts"}</p>
          </div>`}function bt(a){let t;a instanceof HTMLElement?t=new FormData(a):t=a;const s={};for(let e of t.entries())s[e[0]]=e[1];return s}export{yt as C,bt as a,wt as c,xt as d,gt as g};
