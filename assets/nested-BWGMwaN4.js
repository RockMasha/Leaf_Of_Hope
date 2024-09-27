import"./modulepreload-polyfill-B5Qt9EMX.js";/* empty css              */import{g as _}from"./api-C2T6D-7O.js";import{c as u}from"./createFormData-CqlKbpTV.js";const e={form:document.querySelector(".side-panel__form"),cardList:document.querySelector(".left-side__list"),openModalBtn:document.querySelector("#open-modal-js"),closeModalBtn:document.querySelector("#close-modal-js"),modal:document.querySelector("#modal-js")},f=()=>{window.scrollTo({top:0,left:0}),document.body.style.overflow="hidden",e.modal.classList.remove("is-hidden")},o=()=>{document.body.style.overflow="auto",e.modal.classList.add("is-hidden")},l=i=>{const s=window.matchMedia("(min-width: 768px)").matches;s&&e.modal.classList.contains("is-hidden")?e.modal.classList.remove("is-hidden"):!s&&!e.modal.classList.contains("is-hidden")&&o()};function v(i){const{alergenicity:s,humidity:a,image:t,lifeDuration:d,light:c,name:n,size:r,temperature:m,way:p}=i;return`
      <li class="left-side__item">
        <a href="advert.html" class="card">
          <p class="card__way">${p}</p>
          <div class="card__info-wrapp">
            <div class="card__thumb">
              <img
                class="card__img"
                src="${t}"
                alt="Рослинка"
              />
            </div>
            <div>
              <div class="card__title-wrapp">
                <h4 class="card__title">${n}</h4>
              </div>
              <ul class="card__info-list">
                <li class="card__info-item"><p>Освітлення: ${c}</p></li>
                <li class="card__info-item"><p>Вологість: ${a}</p></li>
                <li class="card__info-item"><p>Розмір: ${r}</p></li>
                <li class="card__info-item">
                  <p>Тривальсть життя: <span>${d}</span></p>
                </li>
                <li class="card__info-item">
                  <p>Алергеність: <span>${s}</span></p>
                </li>
                <li class="card__info-item">
                  <p>Темпаратура: <span>${m}</span></p>
                </li>
              </ul>
            </div>
          </div>
        </a>
      </li>
    `}function h(i){return i.map(s=>v(s))}async function w(i){i.preventDefault(),console.log(1);const s=u(e.form),a=await _(s);console.log(a);const t=h(a.result);e.cardList.innerHTML=t.join()}l();window.addEventListener("resize",l);e.openModalBtn.addEventListener("click",f);e.closeModalBtn.addEventListener("click",o);e.form.addEventListener("submit",w);
