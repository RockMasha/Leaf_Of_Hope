const i={alergenicity:{false:"наявна",true:"відсутння"},humidity:{high:"мало",normal:"помірно",low:"високо"},lifeDuration:{annual:"однорічні",biennial:"дворічні",perennial:"довгожителі"},light:{many:"багато",normal:"помірно",little:"мало"},size:{large:"багато",medium:"помірно",small:"мало"},temperature:{high:"25-35°С",normal:"15-25°С",low:"0-15°С"},way:{exchange:"обмін",give:"відачча"}};function _(a){const{alergenicity:l,humidity:e,image:r,lifeDuration:s,light:t,name:n,size:c,temperature:d,way:p}=a;return` <a href="advert.html" class="card">
          <p class="card__way">${i.way[p]}</p>
          <div class="card__info-wrapp">
            <div class="card__thumb">
              <img
                class="card__img"
                src="${r}"
                alt="Рослинка"
              />
            </div>
            <div>
              <div class="card__title-wrapp">
                <h4 class="card__title">${n}</h4>
              </div>
              <ul class="card__info-list">
                <li class="card__info-item"><p>Освітлення: ${i.light[t]}</p></li>
                <li class="card__info-item"><p>Вологість: ${i.humidity[e]}</p></li>
                <li class="card__info-item"><p>Розмір: ${i.size[c]}</p></li>
                <li class="card__info-item">
                  <p>Тривальсть життя: <span>${i.lifeDuration[s]}</span></p>
                </li>
                <li class="card__info-item">
                  <p>Алергеність: <span>${i.alergenicity[l]}</span></p>
                </li>
                <li class="card__info-item">
                  <p>Темпаратура: <span>${i.temperature[d]}</span></p>
                </li>
              </ul>
            </div>
          </div>
        </a>`}export{_ as g};
