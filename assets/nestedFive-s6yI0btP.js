import{h as n}from"./hiddenContentLoader-BTbEcCAy.js";/* empty css              */import{b as m,p as a}from"./api-DvuMLugC.js";import{c as i,s}from"./showPhoto-DbG4j3_m.js";import{i as c}from"./isSignin-DAHhQaqV.js";const o={form:document.querySelector(".form-advert"),photo:document.querySelector(".form-advert__img"),error:document.querySelector(".formAdvert__error")};async function d(t){t.preventDefault();try{const r=i(o.form),e=m();await a(r,e),history.go(-1)}catch(r){console.log(r),o.error.textContent="Неравельно ввід"}}c();o.photo.onchange=s.bind(void 0,o.photo);o.form.addEventListener("submit",d);n();
