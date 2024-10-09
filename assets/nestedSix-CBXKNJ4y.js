import{h as u}from"./hiddenContentLoader-DnNAx6HY.js";import{g as l}from"./getValueSrcParams-BMgebK2A.js";import{r as p,h as d,f as h}from"./api-CiyxzFpA.js";import{c as _}from"./createToken-BMzHczqc.js";import{c as g,s as b}from"./showPhoto-DbG4j3_m.js";import{s as v,r as w}from"./setInProgressLoader-BAB2lVXe.js";function c(){return!!l("redact")}const e={form:document.querySelector(".change-profile-form"),title:document.querySelector(".change-profile__title"),photo:document.querySelector(".change-profile-form__img"),password:document.querySelector(".change-profile-form__enter_password"),email:document.querySelector(".change-profile-form__enter_email"),btnSubmit:document.querySelector(".change-profile-form__btn-submit"),error:document.querySelector(".change-profile__error")};async function n(r){r.preventDefault(),y(),v();try{const t=g(e.form);if(c())await p(t);else{const o=await d(t);_(o.token)}window.location.href="profile.html"}catch{e.error.textContent="Неравельно ввід або такий юзер вже є",S()}finally{w()}}function y(){e.form.addEventListener("submit",f),e.form.removeEventListener("submit",n)}function S(){e.form.removeEventListener("submit",f),e.form.addEventListener("submit",n)}function f(r){r.preventDefault()}function L(){e.password.innerHTML=`
              Пароль
              <input
                class="change-profile-form__input change-profile-form__input_password"
                type="password"
                placeholder="Ведіть пароль"
                name="password"
                required
              />`,e.email.innerHTML=`
              Пошта
              <input
                class="change-profile-form__input change-profile-form__input_email"
                type="email"
                placeholder="Ведіть ваш емейл"
                name="email"
                required
              />`,e.title.textContent="Реєстрація",e.btnSubmit.textContent="Cтворити"}async function q(){const{username:r,adress:t,phone:o}=e.form,a={username:r,adress:t,phone:o},{user:i}=await h();for(const m in a)a[m].value=i[m];const s=document.querySelector(".change-profile-form__svg");s.src=i.avatar,s.classList.add("big-photo")}e.photo.onchange=b.bind(void 0,e.photo);c()?await q():L();e.form.addEventListener("submit",n);u();
