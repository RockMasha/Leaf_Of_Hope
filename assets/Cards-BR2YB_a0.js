var A=(s,t,i)=>{if(!t.has(s))throw TypeError("Cannot "+i)};var n=(s,t,i)=>(A(s,t,"read from private field"),i?i.call(s):t.get(s)),a=(s,t,i)=>{if(t.has(s))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(s):t.set(s,i)},h=(s,t,i,r)=>(A(s,t,"write to private field"),r?r.call(s,i):t.set(s,i),i);var e=(s,t,i)=>(A(s,t,"access private method"),i);import{r as it,c as l}from"./redactDate-Ur80d7_8.js";function st(s){const{alergenicity:t,humidity:i,image:r,lifeDuration:d,light:_,name:U,size:V,temperature:W,way:X,createdAt:Y,_id:Z}=s,tt=it(Y);return`
        <a href="advert.html?id=${Z}" class="card">
          <p class="card__way">${l.way[X]}</p>
          <div class="card__info-wrapp">
            <div class="card__thumb">
              <img
                class="card__img"
                src="${r||"./img/universal/defoultPlantPhoto.jpg"}"
                alt="Рослинка"
                loading="lazy"
              />
            </div>
            <div>
              <div class="card__title-wrapp">
                <h4 class="card__title">${U}</h4>
              </div>
              <ul class="card__info-list">
                <li class="card__info-item"><p>Освітлення: ${l.light[_]}</p></li>
                <li class="card__info-item"><p>Вологість: ${l.humidity[i]}</p></li>
                <li class="card__info-item"><p>Розмір: ${l.size[V]}</p></li>
                <li class="card__info-item">
                  <p>Тривальсть життя: <span>${l.lifeDuration[d]}</span></p>
                </li>
                <li class="card__info-item">
                  <p>Алергеність: <span>${l.alergenicity[t]}</span></p>
                </li>
                <li class="card__info-item">
                  <p>Темпаратура: <span>${l.temperature[W]}</span></p>
                </li>
              </ul>
            </div>
          </div>
          <p class="card__date">${tt}</p>
        </a>`}function at(s){return`
      <li class="left-side__item item-card">
        ${st(s)}
      </li>
    `}var c,o,g,p,u,m,B,f,D,E,M,v,F,w,H,L,I,C,T,y,j,b,z,P,G,k,J,x,K,$,O,S,Q,q,R;class lt{constructor(t,i,r=at){a(this,m);a(this,f);a(this,E);a(this,v);a(this,w);a(this,L);a(this,C);a(this,y);a(this,b);a(this,P);a(this,k);a(this,x);a(this,$);a(this,S);a(this,q);a(this,c,void 0);a(this,o,void 0);a(this,g,void 0);a(this,p,void 0);a(this,u,void 0);this.fatherElement=t,this.listCardsEl=t.querySelector(".cards-list"),this.paginationEl=t.querySelector(".pagination"),this.paginationListEl=t.querySelector(".pagination__numb"),this.backEl=t.querySelector(".pagination-arrow_back"),this.nextEl=t.querySelector(".pagination-arrow_next"),this.firstEL=t.querySelector(".pagination-arrow_first"),this.lastEL=t.querySelector(".pagination-arrow_last"),this.loaderEL,this.page=1,this.maxAdvertInPage=10,this.max_page,this.getCard=r,this.request=i}async showMainCard(t){await this.showCards(t)}async showNextCards(){this.page>=this.max_page||(e(this,E,M).call(this),this.showCards())}async showBackCards(){this.page<=1||(e(this,v,F).call(this),this.showCards())}async showFirstCards(){this.page<=1||(e(this,w,H).call(this),this.showCards())}async showLastCards(){this.page!==this.max_page&&(e(this,L,I).call(this),this.showCards())}async showSpecifiedCards(t){const i=t.target;if(!i.matches(".pagination__btn")&&!i.matches(".pagination__item"))return;const d=i.closest(".pagination__item"),_=Number(d.dataset.page);e(this,f,D).call(this,_),this.showCards()}async showCards(t={}){e(this,S,Q).call(this),this.disablePagination(),await e(this,m,B).call(this,t)&&this.setPagination(),e(this,q,R).call(this)}setPagination(){e(this,y,j).call(this),e(this,x,K).call(this),e(this,b,z).call(this),this.nextEl.addEventListener("click",n(this,o)),this.backEl.addEventListener("click",n(this,c)),this.paginationListEl.addEventListener("click",n(this,g)),this.firstEL.addEventListener("click",n(this,p)),this.lastEL.addEventListener("click",n(this,u))}disablePagination(){this.nextEl.removeEventListener("click",n(this,o)),this.backEl.removeEventListener("click",n(this,c)),this.paginationListEl.removeEventListener("click",n(this,g)),this.firstEL.removeEventListener("click",n(this,p)),this.lastEL.removeEventListener("click",n(this,u))}setDefaultElement(){this.listCardsEl.innerHTML=rt(),e(this,$,O).call(this)}}c=new WeakMap,o=new WeakMap,g=new WeakMap,p=new WeakMap,u=new WeakMap,m=new WeakSet,B=async function(t){try{const i=await this.request(this.page,t);e(this,C,T).call(this,i.tottal);const r=i.result;if(r.length===0)return this.setDefaultElement(),!1;const d=r.map(_=>this.getCard(_));this.listCardsEl.innerHTML=d.join("")}catch{return!1}return!0},f=new WeakSet,D=function(t){this.page=t},E=new WeakSet,M=function(){this.page+=1},v=new WeakSet,F=function(){this.page-=1},w=new WeakSet,H=function(){this.page=1},L=new WeakSet,I=function(){this.page=this.max_page},C=new WeakSet,T=function(t){this.max_page=Math.ceil(t/this.maxAdvertInPage)},y=new WeakSet,j=function(){h(this,c,this.showBackCards.bind(this)),h(this,o,this.showNextCards.bind(this)),h(this,g,this.showSpecifiedCards.bind(this)),h(this,p,this.showFirstCards.bind(this)),h(this,u,this.showLastCards.bind(this))},b=new WeakSet,z=function(){const t=e(this,P,G).call(this);this.paginationListEl.innerHTML=t,e(this,k,J).call(this)},P=new WeakSet,G=function(){let t="";if(this.max_page>=3){let i=-1;this.page===1?i=0:this.page===this.max_page&&(i=-2);for(let r=1;r<=3;r++){const d=i+this.page;t+=N(d),i++}}else for(let i=1;i<=this.max_page;i++)t+=N(i);return t},k=new WeakSet,J=function(){document.querySelector(`.pagination__item[data-page="${this.page}"]`).setAttribute("active","")},x=new WeakSet,K=function(){this.paginationEl.classList.remove("is-hidden")},$=new WeakSet,O=function(){this.paginationEl.classList.add("is-hidden")},S=new WeakSet,Q=function(){if(document.body.setAttribute("lock",""),!this.loaderEL){this.fatherElement.insertAdjacentHTML("beforeend",et()),this.loaderEL=document.querySelector(".card-loader-wrapper");return}this.loaderEL.classList.remove("is-hidden")},q=new WeakSet,R=function(){document.body.removeAttribute("lock",""),this.loaderEL.classList.add("is-hidden")};function N(s){return`<li class="pagination__item" data-page="${s}">
            <button class="pagination__btn">${s}</button>
          </li>`}function et(){return`<div class="card-loader-wrapper">
            <div class="card-loader-block">
              <div class="card-loader"></div>
            </div>
          </div>`}function rt(){return`<div class="cards-list-default">
            <img class="cards-list-default__img" src="./img/profile/defoultPlant.svg" alt="plant">
            <p class="cards-list-default__text">Немає оголошень</p>
          </div>`}export{lt as C,st as g};
