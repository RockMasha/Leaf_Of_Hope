function c(r){return new FormData(r)}function l(r){const s=r.querySelector(".img-wrapp"),e=s.querySelector("img"),o=r.querySelector("input[type=file]").files[0],t=new FileReader;t.addEventListener("load",a,!1),o&&t.readAsDataURL(o);function a(){e.src=t.result,e.srcset=`${t.result} 1x, ${t.result} 2x`,e.classList.contains("big-photo")||e.classList.add("big-photo");const i=e.outerHTML;s.innerHTML=i}}export{c,l as s};
