import"./modulepreload-polyfill-B5Qt9EMX.js";/* empty css              */import{p as m}from"./api-BqoOazn-.js";import{c as n}from"./createFormData-CqlKbpTV.js";import{g as i,i as a}from"./isSignin-BCgmZZk3.js";import{s}from"./showPhoto-GToTndzt.js";import"./createToken-BZzyubv1.js";const o={form:document.querySelector(".form-advert"),photo:document.querySelector(".form-advert__img"),error:document.querySelector(".formAdvert__error")};async function c(t){t.preventDefault();try{const r=n(o.form),e=i();await m(r,e),history.go(-1)}catch(r){console.log(r),o.error.textContent="Неравельно ввід"}}a();o.photo.onchange=s.bind(void 0,o.photo);o.form.addEventListener("submit",c);
