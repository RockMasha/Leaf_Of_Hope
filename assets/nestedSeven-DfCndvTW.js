import{g as i,h as r}from"./getCurrentLanguage-DI-PwgdS.js";import{r as a,i as o,a as s,d as m}from"./showSigninModal-9gqTwiXg.js";import{s as p}from"./setSwitchLanguage-Bve1jStl.js";import"./getErrorText-CpP2Emzn.js";import"./changeSettingsValue-79FUIYGn.js";import"./api-60J6nx4w.js";import"./createFormObj-Y_BTMlHk.js";import"./cardData-CybJiSso.js";import"./getDataValue-B945K_NK.js";import"./createToken-B7f9JzRp.js";import"./setCurrentLanguage-nWxqZ8mC.js";function g(n){let t=n.target.value;t.trim()===""&&(t=i()==="ua"?"Написати...":"Write..."),a.panelText.textContent=t}const l={deleteChatText:{ua:"Очистити чат",en:"Clear chat"},EnterDefaultText:{ua:"Написати...",en:"Write..."}};p(l);const e=await o();e?m(e):s();a.panelEnter.addEventListener("input",g);r();
