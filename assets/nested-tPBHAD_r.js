var M=(o,s,e)=>{if(!s.has(o))throw TypeError("Cannot "+e)};var d=(o,s,e)=>{if(s.has(o))throw TypeError("Cannot add the same private member more than once");s instanceof WeakSet?s.add(o):s.set(o,e)};var a=(o,s,e)=>(M(o,s,"access private method"),e);import{h as w}from"./hiddenContentLoader-DgUHe6EP.js";import{g as C}from"./api-C87ePszt.js";import{C as b,c as v}from"./createFormObj-BsGF3NHA.js";import"./getDataValue-CDujFWLP.js";const t={modal:document.querySelector("#modal-js"),form:document.querySelector(".side-panel__form"),leftSide:document.querySelector(".left-side"),searchBtn:document.querySelector(".side-panel-search-field__btn"),btnMore:document.querySelector(".side-panel__more-btn"),moreList:document.querySelector(".side-panel__select-list_more"),openModalBtn:document.querySelector("#open-modal-js"),closeModalBtn:document.querySelector("#close-modal-js")},y=()=>{window.scrollTo({top:0,left:0}),document.body.style.overflow="hidden",t.modal.classList.remove("is-hidden")},c=()=>{document.body.style.overflow="auto",t.modal.classList.add("is-hidden")};let n=!1;function m(){const o=window.matchMedia("(min-width: 768px)").matches;n&&!o?(n=!1,c()):!n&&o&&(n=!0,t.modal.classList.remove("is-hidden"))}var r,h,i,u;class L extends b{constructor(e,p){super(e,C);d(this,r);d(this,i);this.formEl=p,this.params}addSubmitEvent(){this.showMainCard=this.showMainCard.bind(this),this.formEl.addEventListener("submit",this.showMainCard)}showOpenCard(){a(this,r,h).call(this);const e=v(this.formEl);super.showMainCard(e),a(this,i,u).call(this,e)}async showMainCard(e){e.preventDefault(),window.innerWidth<768&&c(),this.showOpenCard()}async showCards(e=this.params){super.showCards(e)}}r=new WeakSet,h=function(){this.page=1},i=new WeakSet,u=function(e){this.params=e};let l=!0;function S(){if(l){E(),l=!1;return}g(),l=!0}function E(){t.moreList.classList.remove("is-hidden"),t.btnMore.textContent="закрити"}function g(){t.moreList.classList.add("is-hidden"),t.btnMore.textContent="ще фільтрація"}m();window.addEventListener("resize",m);t.openModalBtn.addEventListener("click",y);t.closeModalBtn.addEventListener("click",c);t.btnMore.addEventListener("click",S);const f=new L(t.leftSide,t.form);f.addSubmitEvent();w();f.showOpenCard();