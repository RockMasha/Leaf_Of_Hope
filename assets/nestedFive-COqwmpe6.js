import{h as n}from"./hiddenContentLoader-YZwxA7N9.js";import{c as m,p as a}from"./api-DVTkbkxP.js";import{c as s,s as c}from"./showPhoto-DbG4j3_m.js";import{i}from"./isSignin-BEgLouOk.js";const o={form:document.querySelector(".form-advert"),photo:document.querySelector(".form-advert__img"),error:document.querySelector(".formAdvert__error")};async function d(t){t.preventDefault();try{const r=s(o.form),e=m();await a(r,e),history.go(-1)}catch(r){console.log(r),o.error.textContent="Неравельно ввід"}}i();o.photo.onchange=c.bind(void 0,o.photo);o.form.addEventListener("submit",d);n();
