import{h as S}from"./hiddenContentLoader-DSsxorCB.js";import{b as w,c as L,e as _,p as A}from"./api-BAeutddi.js";import{c as E,s as q}from"./showPhoto-DbG4j3_m.js";import{i as D}from"./isSignin-BFfRR0mF.js";const t={form:document.querySelector(".form-advert"),photo:document.querySelector(".form-advert__img"),btnSubmit:document.querySelector(".form-advert__btn-submit"),error:document.querySelector(".formAdvert__error")};function i(e){return new URL(window.location.href).searchParams.get(e)}async function F(){const{alergenicity:e,humidity:o,lifeDuration:r,light:n,name:l,size:v,temperature:b,way:h,wish:p,description:g}=t.form,s={alergenicity:e,humidity:o,lifeDuration:r,light:n,name:l,size:v,temperature:b,way:h,wish:p,description:g},y=i("id"),m=await w(y);for(const u in s){const d=`${m[u]}`;s[u].value=d!=="undefined"?d:""}const c=document.querySelector(".form-advert__svg");c.src=m.image,c.classList.add("big-photo")}async function C(){await F(),t.btnSubmit.textContent="Зберегти"}async function a(e){e.preventDefault(),P();try{const o=E(t.form),r=i("id");if(r)await L(r,o);else{const n=_();await A(o,n)}history.go(-1)}catch(o){console.log(o),k(),t.error.textContent="Неравельно ввід"}}async function P(){t.form.addEventListener("submit",f),t.form.removeEventListener("submit",a)}function k(){t.form.removeEventListener("submit",f),t.form.addEventListener("submit",a)}function f(e){e.preventDefault()}const x=i("id");x?await C():D();t.photo.onchange=q.bind(void 0,t.photo);t.form.addEventListener("submit",a);S();
