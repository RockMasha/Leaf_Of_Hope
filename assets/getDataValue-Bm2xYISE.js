const M=["Січеня","Лютого","Березеня","Квітеня","Травеня","Червеня","Липеня","Серпеня","Вересеня","Жовтеня","Листопада","Грудня"];function b(a){const e=new Date(a),i=e.getDate(),n=e.getMonth(),r=e.getFullYear(),s=e.getHours(),l=Number(e.getMinutes())>9?e.getMinutes():"0"+e.getMinutes();return`${i} ${M[n-1]}, ${r}, ${s}:${l}`}const t={alergenicity:{false:"відсутння",true:"наявна"},humidity:{high:"низька",normal:"помірна",low:"висока"},lifeDuration:{annual:"однорічна",biennial:"дворічна",perennial:"довгожитель"},light:{many:"багато",normal:"помірно",little:"мало"},size:{large:"великий",medium:"середній",small:"малий"},temperature:{high:"теплолюбива",normal:"нейтральна",low:"холоднолюбива"},way:{exchange:"обмін",give:"відачча"}};function x(a){const{alergenicity:e,humidity:i,image:n,keeper:r,lifeDuration:s,light:l,name:o,size:u,temperature:c,way:g,wish:m,description:h,createdAt:y,_id:d}=a,D=b(y),{username:p,email:w,avatar:f,adress:$,phone:z}=r;return{light:t.light[l],alergenicity:t.alergenicity[e],humidity:t.humidity[i],size:t.size[u],temperature:t.temperature[c],lifeDuration:t.lifeDuration[s],way:t.way[g],image:n,name:o,wish:m,description:h,username:p,email:w,avatar:f,adress:$,phone:z,date:D,id:d}}export{x as g};
