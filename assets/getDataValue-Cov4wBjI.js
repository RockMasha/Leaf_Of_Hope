import{a as q}from"./setCurrentLanguage-BcqUJ1w1.js";import{c as g}from"./cardData-CVkVixM2.js";const z=["Січеня","Лютого","Березеня","Квітеня","Травеня","Червеня","Липеня","Серпеня","Вересеня","Жовтня","Листопада","Грудня"],B=["January","February","March","April","May","June","July","August","September","October","November","December"];function G(o,a="ua"){const t=new Date(o),r=t.getDate(),s=t.getMonth()-1,u=t.getFullYear(),e=t.getHours(),p=Number(t.getMinutes())>9?t.getMinutes():"0"+t.getMinutes();return`${r} ${a==="ua"?z[s]:B[s]}, ${u}, ${e}:${p}`}let h;function X(o){var w,d,D,f,b,M;const{image:a,keeper:t,name:r,description:s,wish:u,translated:e,createdAt:p,lang:c,_id:$,toxicity:N,plantCondition:x,plantType:A,height:E,light:L,temperature:U,watering:C,care:J,substrate:T,windowDistance:k,allergenicity:v,growthRate:F,lifeDuration:O,rarity:R,way:V}=o,i=q(),y=i==="or"?c==="ua"?"ua":"en":i;h=y;const j=G(p,y),{username:H,email:P,avatar:S,adress:W,phone:Y}=t;let m;s!=null?m=i==="or"?s:i==="ua"?(w=e==null?void 0:e.description)==null?void 0:w.transUa:(d=e==null?void 0:e.description)==null?void 0:d.transEn:m=c==="ua"?"Немає Опису":"No Description";let _=i==="or"?r:i==="ua"?(D=e==null?void 0:e.name)==null?void 0:D.transUa:(f=e==null?void 0:e.name)==null?void 0:f.transEng,l;return u!=null?l=i==="or"?u:i==="ua"?(b=e==null?void 0:e.wish)==null?void 0:b.transUa:(M=e==null?void 0:e.wish)==null?void 0:M.transEn:l=c==="ua"?"Немає побажань":"No wish",{image:a,name:_,description:m,wish:l,date:j,lang:c,id:$,toxicity:n({toxicity:N}),plantCondition:n({plantCondition:x}),plantType:n({plantType:A}),height:n({height:E}),light:n({light:L}),temperature:n({temperature:U}),watering:n({watering:C}),care:n({care:J}),substrate:n({substrate:T}),windowDistance:n({windowDistance:k}),allergenicity:n({allergenicity:v}),growthRate:n({growthRate:F}),lifeDuration:n({lifeDuration:O}),rarity:n({rarity:R}),username:H,email:P,avatar:S,adress:W,phone:Y,way:V}}function n(o){const a=Object.keys(o)[0],t=o[a],r=h==="ua"?"не вказано":"no choose";return`${t}`!="undefined"&&g[a]&&g[a][t]&&g[a][t][h]?g[a][t][h]:r}export{X as g};
