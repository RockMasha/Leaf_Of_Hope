import{h as t}from"./getCurrentLanguage-DI8YqOFu.js";import{c as n}from"./createToken-DjrUrle3.js";import{o as r}from"./api-Ds9QXwAK.js";import{g as a}from"./getValueSrcParams-BMgebK2A.js";import{s as i}from"./setSwitchLanguage-BEEoXHF_.js";import"./setCurrentLanguage-UYMi4kGm.js";async function c(){let e;try{const o=a("verification");e=await r(o)}catch(o){return console.log(o),!1}return e.token}document.querySelector(".authentication__container");async function s(){const e=await c();console.log(e),console.log(typeof e),e&&(n(e),window.location.href="profile.html")}const u={messageSuccessText:{ua:"Перевірка пройшла успішно",en:"Verification was successful"},messageErrorText:{ua:"Сталася помилка. Можливо посилання застаріло",en:"An error occurred. The link may be outdated"}};await s();i(u);t();
