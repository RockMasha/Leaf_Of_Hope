import"./modulepreload-polyfill-B5Qt9EMX.js";/* empty css              */import{i,s as e}from"./isSignin-C5uLlGSL.js";import"./api-CFRoDk5d.js";const o={userInfo:document.querySelector("#user-info-js")},{user:s}=await i();s?o.userInfo.innerHTML=`<div class="user-info__thumb">
        <img class="user-info__svg" src="${s.avatar}" alt="avatar">
    </div>
    <div class="user-info__user">
        <button class="user-info__button">
            <img class="user-info__button-image" src="./img/profile/redact-profile.svg" alt="redact">
        </button>
        <h2 class="user-info__title">${s.username}</h2>
        <p class="user-info__text">${s.adress}</p>
        <p class="user-info__text bold">${s.phone}</p>
        <p class="user-info__text bold">${s.email}</p>
    </div>
</div>`:e();
