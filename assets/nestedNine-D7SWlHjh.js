import{h as o}from"./setCurrentLanguage-DdORZCPD.js";import{c as r}from"./createToken-CLmez0cg.js";import{n as a}from"./api-B7v0WwrB.js";import{g as n}from"./getValueSrcParams-BMgebK2A.js";import{s as i}from"./setSwitchLanguage-CyEaCAgr.js";async function c(){let e;try{const t=n("verification");e=await a(t)}catch{return!1}return e.token}document.querySelector(".authentication__container");async function s(){const e=await c();e&&(r(e),window.location.href="profile.html")}const u={messageSuccessText:{ua:"Перевірка пройшла успішно",en:"Verification was successful"},messageErrorText:{ua:"Сталася помилка. Можливо посилання застаріло",en:"An error occurred. The link may be outdated"}};await s();i(u);o();
