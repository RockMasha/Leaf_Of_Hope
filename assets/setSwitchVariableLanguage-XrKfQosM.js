import{a as i,s as r}from"./setCurrentLanguage-0Hl_EXOw.js";function c(){const t=i();if(t==="or")return;const e=document.querySelector(`.translate-variable__input[value="${t}"]`);e.checked=!0,e.dispatchEvent(new Event("change"))}const n=document.querySelector(".translate-variable__span");function u(t,e){const a=t.currentTarget;if(a.checked)switch(a.value){case"ua":n.setAttribute("lang","ua"),r("ua"),e==null||e.setUkrainian();break;case"en":n.setAttribute("lang","en"),r("en"),e==null||e.setEnglish();break;case"or":n.setAttribute("lang","or"),r("or"),e==null||e.setOriginal();break}}const o=document.querySelectorAll(".translate-variable__input");function b(t){o.forEach(e=>{e.addEventListener("change",a=>{u(a,t)})}),c()}export{b as s};