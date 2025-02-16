import{h as r}from"./getCurrentLanguage-DEWq27zJ.js";import{c as a}from"./createToken-FTQcBlPj.js";import{q as s}from"./api-3qFQw6mT.js";import{g as n}from"./getValueSrcParams-BMgebK2A.js";import{s as c}from"./setSwitchLanguage-CcQIDv7t.js";import"./setCurrentLanguage-BDYY6lHY.js";async function i(){let e;try{const t=n("verification");e=await s(t)}catch(t){return console.log(t),!1}return e.token}const o={authenticationCont:document.querySelector(".authentication__container")};function u(){o.authenticationCont.innerHTML=`
    <img
      class="authentication__img"
      src="https://res.cloudinary.com/dk3syrsg5/image/upload/v1737148271/error-occurred_eo4gcm.svg"
      alt="an error occurred"
    />
    <p class="authentication__message" key="messageErrorText">Сталася помилка. Можливо посилання застаріло</p>`}function m(){o.authenticationCont.innerHTML=`
    <img
      class="authentication__img authentication__img_success"
      src="https://res.cloudinary.com/dk3syrsg5/image/upload/v1737231509/success_vcfdpe.svg"
      alt="an error occurred"
    />
    <p class="authentication__message" key="messageSuccessText">Перевірка пройшла успішно</p>`}async function g(){const e=await i();e?(m(),a(e),window.location.href="profile.html"):u()}const h={messageSuccessText:{ua:"Перевірка пройшла успішно",en:"Verification was successful"},messageErrorText:{ua:"Сталася помилка. Можливо посилання застаріло",en:"An error occurred. The link may be outdated"}};await g();c(h);r();
