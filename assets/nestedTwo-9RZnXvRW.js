import"./modulepreload-polyfill-B5Qt9EMX.js";/* empty css              */import{i as p,g as u,s as m}from"./isSignin-BCgmZZk3.js";import{a as f}from"./api-BqoOazn-.js";import"./createToken-BZzyubv1.js";const r={userInfo:document.querySelector("#user-info-js"),userCards:document.querySelector("#user-cards-js")},v=s=>{const{alergenicity:i,humidity:t,image:l,lifeDuration:a,light:e,name:o,size:c,temperature:d,way:_}=s;return`
          <li class="left-side__item">
            <a href="advert.html" class="card">
              <p class="card__way">${_}</p>
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
                    <h4 class="card__title">${o}</h4>
                  </div>
                  <ul class="card__info-list">
                    <li class="card__info-item"><p>Освітлення: ${e}</p></li>
                    <li class="card__info-item"><p>Вологість: ${t}</p></li>
                    <li class="card__info-item"><p>Розмір: ${c}</p></li>
                    <li class="card__info-item">
                      <p>Тривальсть життя: <span>${a}</span></p>
                    </li>
                    <li class="card__info-item">
                      <p>Алергеність: <span>${i}</span></p>
                    </li>
                    <li class="card__info-item">
                      <p>Темпаратура: <span>${d}</span></p>
                    </li>
                  </ul>
                </div>
              </div>
            </a>
            ul class="profile-adverts__btn-list">
          <li>
            <button type="button" class="profile-adverts__btn edit-btn"></button>
          </li>
          <li><button type="button" class="profile-adverts__btn delete-btn"></button></li>
        </ul>
          </li>
        `},n=await p();if(n){const{user:s}=n;r.userInfo.innerHTML=`<div class="user-info__thumb">
        <img class="user-info__svg" src="${s.avatar}" alt="avatar">
    </div>
    <div class="user-info__user">
        <h2 class="user-info__title">${s.username}</h2>
        <p class="user-info__text">${s.adress}</p>
        <p class="user-info__text bold">${s.phone}</p>
        <p class="user-info__text bold">${s.email}</p>
    </div>
</div>`,console.log(s.token);const{result:i,tottal:t}=await f(`${u()}`);if(console.log(i),t===0)r.userCards.innerHTML="<p>Немає оголошень</p>";else{const a=i.map(e=>v(e)).join("");r.userCards.innerHTML=a}}else m();
