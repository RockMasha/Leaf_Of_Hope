import{g as i,h as r}from"./setCurrentLanguage-0Hl_EXOw.js";import{r as a,i as o,a as s,d as g}from"./showSigninModal-BYKK7EOW.js";import{s as l}from"./setSwitchLanguage-Cks50ftx.js";import"./api-DfaLOtv4.js";import"./getErrorText-DgDhf_pE.js";import"./changeSettingsValue-79FUIYGn.js";import"./createFormObj-mlQAnNQn.js";import"./getDataValue-BE9Ttjkr.js";function m(n){let t=n.target.value;t.trim()===""&&(t=i()==="ua"?"Написати...":"Write..."),a.panelText.textContent=t}const u={deleteChatText:{ua:"Очистити чат",en:"Clear chat"},EnterDefaultText:{ua:"Написати...",en:"Write..."}};l(u);const e=await o();e?g(e):s();a.panelEnter.addEventListener("input",m);r();