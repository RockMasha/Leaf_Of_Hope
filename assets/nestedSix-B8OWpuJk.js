import{h as n}from"./hiddenContentLoader-YZwxA7N9.js";import{e as a}from"./api-DVTkbkxP.js";import{c}from"./createToken-BKOXoYV5.js";import{c as m,s as i}from"./showPhoto-DbG4j3_m.js";const o={form:document.querySelector(".create-profile-form"),photo:document.querySelector(".create-profile-form__img"),error:document.querySelector(".create-profile__error")};async function f(e){e.preventDefault();try{const r=m(o.form),t=await a(r);c(t.token),history.go(-1)}catch{o.error.textContent="Неравельно ввід або такий юзер вже є"}}o.photo.onchange=i.bind(void 0,o.photo);o.form.addEventListener("submit",f);n();
