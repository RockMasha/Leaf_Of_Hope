function o(){document.querySelector(".inProgress-loader-wrapper").remove(),document.body.removeAttribute("lock","")}const e=`<div class="inProgress-loader-wrapper">
                  <div class="inProgress-loader"></div>
                </div>`;function s(){document.body.setAttribute("lock",""),document.body.insertAdjacentHTML("beforeend",e)}export{o as r,s};
