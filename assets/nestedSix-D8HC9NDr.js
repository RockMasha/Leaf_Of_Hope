import"./modulepreload-polyfill-B5Qt9EMX.js";/* empty css              */import{c as a}from"./api-BqoOazn-.js";import{c as m}from"./createToken-BZzyubv1.js";import{c as n}from"./createFormData-CqlKbpTV.js";import{s as c}from"./showPhoto-GToTndzt.js";const o={form:document.querySelector(".create-profile-form"),photo:document.querySelector(".create-profile-form__img"),error:document.querySelector(".create-profile__error")};async function i(t){t.preventDefault();try{const r=n(o.form),e=await a(r);m(e.token),history.go(-1)}catch{o.error.textContent="Неравельно ввід або такий юзер вже є"}}o.photo.onchange=c.bind(void 0,o.photo);o.form.addEventListener("submit",i);