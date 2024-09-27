import"./modulepreload-polyfill-B5Qt9EMX.js";/* empty css              */import{g as _}from"./api-BqoOazn-.js";import{c as f}from"./createFormData-CqlKbpTV.js";const e={form:document.querySelector(".side-panel__form"),cardList:document.querySelector(".left-side__list"),openModalBtn:document.querySelector("#open-modal-js"),closeModalBtn:document.querySelector("#close-modal-js"),modal:document.querySelector("#modal-js")},h=()=>{window.scrollTo({top:0,left:0}),document.body.style.overflow="hidden",e.modal.classList.remove("is-hidden")},o=()=>{document.body.style.overflow="auto",e.modal.classList.add("is-hidden")},n=t=>{const i=window.matchMedia("(min-width: 768px)").matches;i&&e.modal.classList.contains("is-hidden")?e.modal.classList.remove("is-hidden"):!i&&!e.modal.classList.contains("is-hidden")&&o()},a={alergenicity:{false:"наявна",true:"відсутння"},humidity:{high:"мало",normal:"помірно",low:"високо"},lifeDuration:{annual:"однорічні",biennial:"дворічні",perennial:"довгожителі"},light:{many:"багато",normal:"помірно",little:"мало"},size:{large:"багато",medium:"помірно",small:"мало"},temperature:{high:"25-35°С",normal:"15-25°С",low:"0-15°С"},way:{exchange:"обмін",give:"відачча"}};function v(t){const{alergenicity:i,humidity:s,image:l,lifeDuration:d,light:r,name:c,size:m,temperature:p,way:u}=t;return`
      <li class="left-side__item">
        <a href="advert.html" class="card">
          <p class="card__way">${a.way[u]}</p>
          <div class="card__info-wrapp">
            <div class="card__thumb">
              <img
                class="card__img"
                src="${l}"
                alt="Рослинка"
              />
            </div>
            <div>
              <div class="card__title-wrapp">
                <h4 class="card__title">${c}</h4>
              </div>
              <ul class="card__info-list">
                <li class="card__info-item"><p>Освітлення: ${a.light[r]}</p></li>
                <li class="card__info-item"><p>Вологість: ${a.humidity[s]}</p></li>
                <li class="card__info-item"><p>Розмір: ${a.size[m]}</p></li>
                <li class="card__info-item">
                  <p>Тривальсть життя: <span>${a.lifeDuration[d]}</span></p>
                </li>
                <li class="card__info-item">
                  <p>Алергеність: <span>${a.alergenicity[i]}</span></p>
                </li>
                <li class="card__info-item">
                  <p>Темпаратура: <span>${a.temperature[p]}</span></p>
                </li>
              </ul>
            </div>
          </div>
        </a>
      </li>
    `}function y(t){return t.map(i=>v(i))}async function w(t){t.preventDefault();const i=f(e.form),s=await _(i),l=y(s.result);e.cardList.innerHTML=l.join("")}n();window.addEventListener("resize",n);e.openModalBtn.addEventListener("click",h);e.closeModalBtn.addEventListener("click",o);e.form.addEventListener("submit",w);
