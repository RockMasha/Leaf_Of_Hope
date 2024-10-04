var A=(s,t,i)=>{if(!t.has(s))throw TypeError("Cannot "+i)};var n=(s,t,i)=>(A(s,t,"read from private field"),i?i.call(s):t.get(s)),a=(s,t,i)=>{if(t.has(s))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(s):t.set(s,i)},l=(s,t,i,e)=>(A(s,t,"write to private field"),e?e.call(s,i):t.set(s,i),i);var r=(s,t,i)=>(A(s,t,"access private method"),i);import{c}from"./cardData-DyQ4QymL.js";function Z(s){const{alergenicity:t,humidity:i,image:e,lifeDuration:o,light:_,name:U,size:V,temperature:W,way:X,_id:Y}=s;return` <a href="advert.html?id=${Y}" class="card">
          <p class="card__way">${c.way[X]}</p>
          <div class="card__info-wrapp">
            <div class="card__thumb">
              <img
                class="card__img"
                src="${e}"
                alt="Рослинка"
              />
            </div>
            <div>
              <div class="card__title-wrapp">
                <h4 class="card__title">${U}</h4>
              </div>
              <ul class="card__info-list">
                <li class="card__info-item"><p>Освітлення: ${c.light[_]}</p></li>
                <li class="card__info-item"><p>Вологість: ${c.humidity[i]}</p></li>
                <li class="card__info-item"><p>Розмір: ${c.size[V]}</p></li>
                <li class="card__info-item">
                  <p>Тривальсть життя: <span>${c.lifeDuration[o]}</span></p>
                </li>
                <li class="card__info-item">
                  <p>Алергеність: <span>${c.alergenicity[t]}</span></p>
                </li>
                <li class="card__info-item">
                  <p>Темпаратура: <span>${c.temperature[W]}</span></p>
                </li>
              </ul>
            </div>
          </div>
        </a>`}function tt(s){return`
      <li class="left-side__item item-card">
        ${Z(s)}
      </li>
    `}var h,d,g,p,u,m,D,f,B,v,M,E,F,w,H,C,I,L,T,b,j,y,z,k,O,x,G,P,J,$,K,S,Q,q,R;class rt{constructor(t,i,e=tt){a(this,m);a(this,f);a(this,v);a(this,E);a(this,w);a(this,C);a(this,L);a(this,b);a(this,y);a(this,k);a(this,x);a(this,P);a(this,$);a(this,S);a(this,q);a(this,h,void 0);a(this,d,void 0);a(this,g,void 0);a(this,p,void 0);a(this,u,void 0);this.fatherElement=t,this.listCardsEl=t.querySelector(".cards-list"),this.paginationEl=t.querySelector(".pagination"),this.paginationListEl=t.querySelector(".pagination__numb"),this.backEl=t.querySelector(".pagination-arrow_back"),this.nextEl=t.querySelector(".pagination-arrow_next"),this.firstEL=t.querySelector(".pagination-arrow_first"),this.lastEL=t.querySelector(".pagination-arrow_last"),this.page=1,this.maxAdvertInPage=10,this.max_page,this.getCard=e,this.request=i}async showMainCard(t){await this.showCards(t)}async showNextCards(){this.page>=this.max_page||(r(this,v,M).call(this),this.showCards())}async showBackCards(){this.page<=1||(r(this,E,F).call(this),this.showCards())}async showFirstCards(){this.page<=1||(r(this,w,H).call(this),this.showCards())}async showLastCards(){this.page!==this.max_page&&(r(this,C,I).call(this),this.showCards())}async showSpecifiedCards(t){const i=t.target;if(!i.matches(".pagination__btn")&&!i.matches(".pagination__item"))return;const o=i.closest(".pagination__item"),_=Number(o.dataset.page);r(this,f,B).call(this,_),this.showCards()}async showCards(t={}){r(this,S,Q).call(this),this.disablePagination(),await r(this,m,D).call(this,t)&&this.setPagination(),r(this,q,R).call(this)}setPagination(){r(this,b,j).call(this),r(this,P,J).call(this),r(this,y,z).call(this),this.nextEl.addEventListener("click",n(this,d)),this.backEl.addEventListener("click",n(this,h)),this.paginationListEl.addEventListener("click",n(this,g)),this.firstEL.addEventListener("click",n(this,p)),this.lastEL.addEventListener("click",n(this,u))}disablePagination(){this.nextEl.removeEventListener("click",n(this,d)),this.backEl.removeEventListener("click",n(this,h)),this.paginationListEl.removeEventListener("click",n(this,g)),this.firstEL.removeEventListener("click",n(this,p)),this.lastEL.removeEventListener("click",n(this,u))}setDefaultElement(){this.listCardsEl.innerHTML=st(),r(this,$,K).call(this)}}h=new WeakMap,d=new WeakMap,g=new WeakMap,p=new WeakMap,u=new WeakMap,m=new WeakSet,D=async function(t){const i=await this.request(this.page,t);r(this,L,T).call(this,i.tottal);const e=i.result;if(e.length===0)return this.setDefaultElement(),!1;const o=e.map(_=>this.getCard(_));return this.listCardsEl.innerHTML=o.join(""),!0},f=new WeakSet,B=function(t){this.page=t},v=new WeakSet,M=function(){this.page+=1},E=new WeakSet,F=function(){this.page-=1},w=new WeakSet,H=function(){this.page=1},C=new WeakSet,I=function(){this.page=this.max_page},L=new WeakSet,T=function(t){this.max_page=Math.ceil(t/this.maxAdvertInPage)},b=new WeakSet,j=function(){l(this,h,this.showBackCards.bind(this)),l(this,d,this.showNextCards.bind(this)),l(this,g,this.showSpecifiedCards.bind(this)),l(this,p,this.showFirstCards.bind(this)),l(this,u,this.showLastCards.bind(this))},y=new WeakSet,z=function(){const t=r(this,k,O).call(this);this.paginationListEl.innerHTML=t,r(this,x,G).call(this)},k=new WeakSet,O=function(){let t="";if(this.max_page>=3){let i=-1;this.page===1?i=0:this.page===this.max_page&&(i=-2);for(let e=1;e<=3;e++){const o=i+this.page;t+=N(o),i++}}else for(let i=1;i<=this.max_page;i++)t+=N(i);return t},x=new WeakSet,G=function(){document.querySelector(`.pagination__item[data-page="${this.page}"]`).setAttribute("active","")},P=new WeakSet,J=function(){this.paginationEl.classList.remove("is-hidden")},$=new WeakSet,K=function(){this.paginationEl.classList.add("is-hidden")},S=new WeakSet,Q=function(){document.body.setAttribute("lock",""),this.fatherElement.insertAdjacentHTML("beforeend",it())},q=new WeakSet,R=function(){document.body.removeAttribute("lock",""),this.fatherElement.querySelector(".card-loader-wrapper").remove()};function N(s){return`<li class="pagination__item" data-page="${s}">
            <button class="pagination__btn">${s}</button>
          </li>`}function it(){return`<div class="card-loader-wrapper">
            <div class="card-loader-block">
              <div class="card-loader"></div>
            </div>
          </div>`}function st(){return`<div class="cards-list-default">
            <img class="cards-list-default__img" src="./img/profile/defoultPlant.svg" alt="plant">
            <p class="cards-list-default__text">Немає оголошень</p>
          </div>`}function nt(s){let t=new FormData(s);const i={};for(let e of t.entries())i[e[0]]=e[1];return i}export{rt as C,nt as c,Z as g};
