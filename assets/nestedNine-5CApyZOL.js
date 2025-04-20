import{h as r}from"./getCurrentLanguage-CVvCI2XH.js";import{c as a}from"./createToken-DuFWt4Gc.js";import{c as s}from"./chanhePage-Be1AtWlB.js";import{q as c}from"./api-B07jxQ4q.js";import{g as n}from"./getValueSrcParams-BMgebK2A.js";import{s as i}from"./setSwitchLanguage-CNDyctra.js";import"./setCurrentLanguage-B3yJ7-V5.js";async function u(){let e;try{const t=n("verification");e=await c(t)}catch(t){return console.log(t),!1}return e.token}const o={authenticationCont:document.querySelector(".authentication__container")};function m(){o.authenticationCont.innerHTML=`
    <img
      class="authentication__img"
      src="https://res.cloudinary.com/dk3syrsg5/image/upload/v1737148271/error-occurred_eo4gcm.svg"
      alt="an error occurred"
    />
    <p class="authentication__message" key="messageErrorText">Сталася помилка. Можливо посилання застаріло</p>`}function g(){o.authenticationCont.innerHTML=`
    <img
      class="authentication__img authentication__img_success"
      src="https://res.cloudinary.com/dk3syrsg5/image/upload/v1737231509/success_vcfdpe.svg"
      alt="an error occurred"
    />
    <p class="authentication__message" key="messageSuccessText">Перевірка пройшла успішно</p>`}async function h(){const e=await u();e?(g(),a(e),s("profile.html")):m()}const l={messageSuccessText:{ua:"Перевірка пройшла успішно",en:"Verification was successful"},messageErrorText:{ua:"Сталася помилка. Можливо посилання застаріло",en:"An error occurred. The link may be outdated"}};await h();i(l);r();
