import{i as o}from"./api-BMUXg3mB.js";function s(e){localStorage.setItem("token",`${e}`),o()}function d(){document.querySelector(".inProgress-loader-wrapper").remove(),document.body.removeAttribute("lock","")}const r=`<div class="inProgress-loader-wrapper">
                  <div class="inProgress-loader"></div>
                </div>`;function n(){document.body.setAttribute("lock",""),document.body.insertAdjacentHTML("beforeend",r)}export{s as c,d as r,n as s};
