(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))a(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();const p={students:[],tasks:{},appointments:[],exams:[],messages:{},coachTodos:{},weekOffset:0,selectedDayIdx:null,calMonth:new Date().getMonth(),calYear:new Date().getFullYear(),calSelDay:null,activeStuId:null,msgThread:null,workspace:null,studentSpeeds:[],konuHaftaSoru:[]},x={role:null,studentId:null,dbUser:null,coachId:null,childName:null};window.S=p;window.session=x;window._loginMode="email";window.STU_DEFAULT_PASS="Rostrum"+Math.floor(1e3+Math.random()*9e3);window.DAYS_TR=["Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi","Pazar"];window.MONTHS_TR=["Ocak","Şubat","Mart","Nisan","Mayıs","Haziran","Temmuz","Ağustos","Eylül","Ekim","Kasım","Aralık"];window.EXAM_DEFS={TYT:["Türkçe","Matematik","Fen","Sosyal"],"AYT-SAY":["Matematik","Fizik","Kimya","Biyoloji"],"AYT-EA":["Matematik","Edebiyat","Tarih","Coğrafya"],"AYT-SOZ":["Edebiyat","Tarih1","Tarih2","Coğrafya1","Coğrafya2","Felsefe","Din"]};window.EXAM_SORU={TYT:{Türkçe:40,Matematik:40,Fen:20,Sosyal:20},"AYT-SAY":{Matematik:40,Fizik:14,Kimya:13,Biyoloji:13},"AYT-EA":{Matematik:40,Edebiyat:24,Tarih:10,Coğrafya:6},"AYT-SOZ":{Edebiyat:24,Tarih1:10,Tarih2:11,Coğrafya1:6,Coğrafya2:11,Felsefe:12,Din:6}};window.EXAM_KONU_MAP={TYT_Türkçe:["Dil Bilgisi"],TYT_Matematik:["TYT Matematik","Geometri"],TYT_Fen:["TYT Fizik","TYT Kimya","TYT Biyoloji"],TYT_Sosyal:[],"AYT-SAY_Matematik":["AYT Matematik","Geometri"],"AYT-SAY_Fizik":["AYT Fizik"],"AYT-SAY_Kimya":["AYT Kimya"],"AYT-SAY_Biyoloji":["AYT Biyoloji"],"AYT-EA_Matematik":["AYT Matematik","Geometri"],"AYT-EA_Edebiyat":["Dil Bilgisi"]};window.SUBJECT_MAP={TYT:["Türkçe","Matematik","Geometri","Fizik","Kimya","Biyoloji","Tarih","Coğrafya","Felsefe","Din"],"AYT-SAY":["Matematik","Geometri","Fizik","Kimya","Biyoloji"],"AYT-EA":["Matematik","Geometri","Edebiyat","Tarih","Coğrafya","Felsefe"],"AYT-SOZ":["Edebiyat","Tarih1","Tarih2","Coğrafya1","Coğrafya2","Felsefe","Din"]};window.currentTab="";window._clipboardTask=null;window._editingTaskId=null;window._regRole=null;window._onbRole=null;window._oauthUser=null;const Fi="https://imyhenrwmsmyikpollur.supabase.co",Oi="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlteWhlbnJ3bXNteWlrcG9sbHVyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODAxNDE3ODYsImV4cCI6MjA5NTcxNzc4Nn0._ySJ5ArD1GYthyitHjdyEjLaUhextIwEqpRoF5ScI34",h=supabase.createClient(Fi,Oi);window.db=h;function _e(){var e;try{localStorage.setItem("ba_ui_"+(((e=x.dbUser)==null?void 0:e.id)||"x"),JSON.stringify({activeStuId:p.activeStuId,calMonth:p.calMonth,calYear:p.calYear}))}catch{}}function Et(){_e()}function C(e,t){let n=document.getElementById("loadingOverlay");if(document.querySelectorAll(".btn-login, .btn-accent, .btn").forEach(i=>{e?(i.setAttribute("disabled","true"),i.style.opacity="0.6",i.style.pointerEvents="none"):(i.removeAttribute("disabled"),i.style.opacity="",i.style.pointerEvents="")}),e&&!n){n=document.createElement("div"),n.id="loadingOverlay",n.style.cssText="position:fixed;inset:0;background:rgba(15,14,12,.82);z-index:9999;display:flex;align-items:center;justify-content:center;flex-direction:column;gap:14px;backdrop-filter:blur(6px)";const i=t||"Yükleniyor...",o=t?'<div style="font-size:36px;animation:overlayPop .3s cubic-bezier(.34,1.56,.64,1) both">🗑️</div>':'<div style="width:38px;height:38px;border:3px solid rgba(255,255,255,.12);border-top-color:var(--accent);border-radius:50%;animation:spin .7s linear infinite"></div>';if(n.innerHTML=`${o}<div style="font-size:14px;font-weight:600;color:#fff;letter-spacing:.2px">${i}</div>`,!document.getElementById("spinStyle")){const s=document.createElement("style");s.id="spinStyle",s.textContent="@keyframes spin{to{transform:rotate(360deg)}}@keyframes overlayPop{from{transform:scale(.6);opacity:0}to{transform:scale(1);opacity:1}}",document.head.appendChild(s)}document.body.appendChild(n)}else!e&&n&&n.remove()}function g(e){return String(e||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function G(e){return e instanceof Date?e.toISOString().split("T")[0]:e}function ee(e,t){const n=new Date(e);return n.setDate(n.getDate()+t),n}function ce(){return G(new Date)}function $n(e){return e>=20?"good":e>=12?"mid":"low"}function qt(e){return{deneme:"📊 Deneme",soru:"📚 Soru",konu:"🎯 Konu",diger:"⭐ Diğer"}[e]||e}function V(e){const t=document.getElementById(e);t.classList.add("open"),qi(t)}function Z(e){const t=document.getElementById(e);t.classList.remove("open");const n=t.querySelector(".modal");n&&(n.style.transform="")}function qi(e){const t=e.querySelector(".modal");if(!t||(t.style.transform="",t.querySelector(".modal-drag-handle")))return;const n=document.createElement("div");n.className="modal-drag-handle",t.prepend(n),Ui(e,t,n)}function Ui(e,t,n){let a=0,i=0,o=!1;n.addEventListener("touchstart",s=>{window.innerWidth>=768||(o=!0,a=s.touches[0].clientY,t.style.transition="none")},{passive:!0}),n.addEventListener("touchmove",s=>{o&&(i=Math.max(0,s.touches[0].clientY-a),t.style.transform=`translateY(${i}px)`)},{passive:!0}),n.addEventListener("touchend",()=>{o&&(o=!1,t.style.transition="",i>80&&e.classList.remove("open"),t.style.transform="",i=0)})}document.addEventListener("focusin",e=>{const t=e.target;window.innerWidth>=768||!(t instanceof HTMLElement)||!["INPUT","TEXTAREA","SELECT"].includes(t.tagName)||t.closest(".modal-bg.open")&&setTimeout(()=>t.scrollIntoView({block:"center",behavior:"smooth"}),300)});function b(e){const t=document.getElementById("toast");t.textContent=e,t.classList.add("show"),setTimeout(()=>t.classList.remove("show"),2300)}document.addEventListener("click",e=>{var t;e.target.classList.contains("modal-bg")&&e.target.id!=="trialExpiredModal"&&(e.target.classList.remove("open"),(t=e.target.querySelector(".modal"))==null||t.style.setProperty("transform",""))});document.addEventListener("keydown",e=>{e.key==="Escape"&&document.querySelectorAll(".modal-bg.open").forEach(t=>{var n;t.id!=="trialExpiredModal"&&(t.classList.remove("open"),(n=t.querySelector(".modal"))==null||n.style.setProperty("transform",""))})});function Gi(e){let t=e.value.replace(/\D/g,"");t.startsWith("0")&&(t=t.slice(1)),t=t.slice(0,10);let n="";t.length>0&&(n="0 ("+t.slice(0,3)),t.length>=3&&(n+=") "+t.slice(3,6)),t.length>=6&&(n+=" "+t.slice(6,8)),t.length>=8&&(n+=" "+t.slice(8,10)),e.value=n}function Tt(){const e=new Date;let t=e.getFullYear(),n=new Date(t,5,14);return e>n&&(t+=1,n=new Date(t,5,14)),{year:t,days:Math.max(1,Math.ceil((n-e)/864e5))}}function ae(e,t=0){const n=new Date,a=n.getDay(),o=(a===0?6:a-1)-t,s=new Date(n);return s.setDate(n.getDate()-(o+7)%7+e*7),s.setHours(0,0,0,0),s}function Wi(){const e=p.students.find(t=>t.id===p.activeStuId);return(e==null?void 0:e.weekStart)??0}async function Xe(e){const t=await crypto.subtle.digest("SHA-256",new TextEncoder().encode(e));return[...new Uint8Array(t)].map(n=>n.toString(16).padStart(2,"0")).join("")}function Ve(e){return e?e.trim().toLowerCase().replace(/ç/g,"c").replace(/ğ/g,"g").replace(/ı/g,"i").replace(/ö/g,"o").replace(/ş/g,"s").replace(/ü/g,"u").replace(/i̇/g,"i").replace(/ı/g,"i").replace(/i/g,"i").replace(/\s+/g,"").replace(/\u0307/g,""):""}const Vi="BHeLqAz_o0BXBAVaKvLwcNDszZSLFkI2iGch88Yhz2Sh5Avd3WwAcNoh_bFaSDTXshhgSohLmsnkN3zY9BJ6RCE";function Zi(e){const t="=".repeat((4-e.length%4)%4),n=(e+t).replace(/-/g,"+").replace(/_/g,"/"),a=atob(n);return Uint8Array.from([...a].map(i=>i.charCodeAt(0)))}async function Rt(){var e;if(!(!("serviceWorker"in navigator)||!("PushManager"in window))&&(e=x.dbUser)!=null&&e.id)try{const t=await navigator.serviceWorker.ready;let n=await t.pushManager.getSubscription();n||(n=await t.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:Zi(Vi)})),await fetch("/api/push?action=subscribe",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({user_id:x.dbUser.id,subscription:n.toJSON()})})}catch(t){console.warn("[push] abone olunamadı:",t.message)}}function Ji(){if(!("Notification"in window)){console.log("Bu tarayıcı anlık bildirimleri desteklemiyor.");return}Notification.permission!=="granted"&&Notification.permission!=="denied"?Notification.requestPermission().then(e=>{e==="granted"&&(b("Bildirim izinleri onaylandı ✓"),Rt())}):Notification.permission==="granted"?(b("Bildirim izinleri zaten açık ✓"),Rt()):b("Bildirim izinleri tarayıcı ayarlarından engellenmiş.")}window.saveUI=_e;window.saveS=Et;window.showLoading=C;window.esc=g;window.fmtDate=G;window.addDays=ee;window.todayStr=ce;window.netColor=$n;window.typeLabel=qt;window.om=V;window.cm=Z;window.showToast=b;window.getWeekStart=ae;window.getNextYks=Tt;window.maskPhoneTR=Gi;window.getStudentWeekStart=Wi;window.sha256=Xe;window.normalizeUsername=Ve;window.requestNotificationPermission=Ji;window.subscribeToPush=Rt;function Xi(e,t){const n=document.getElementById(e),a=document.getElementById(t);n&&a&&(n.type==="password"?(n.type="text",a.textContent="🙈"):(n.type="password",a.textContent="👁️"))}window.togglePasswordVisibility=Xi;async function Qi(e,t={}){let n=h.from(e).select("*");Object.entries(t).forEach(([o,s])=>{n=n.eq(o,s)});const{data:a,error:i}=await n;return i&&console.error(e,i),a||[]}const eo=4*60*1e3;function _n(){return"ra_d_"+(x.coachId||x.studentId||"x")}function ma(){try{localStorage.removeItem(_n())}catch{}}function Zn(){try{localStorage.setItem(_n(),JSON.stringify({ts:Date.now(),students:p.students,tasks:p.tasks,appointments:p.appointments,exams:p.exams,messages:p.messages,coachTodos:p.coachTodos,studentSpeeds:p.studentSpeeds,workspace:p.workspace,konuHaftaSoru:p.konuHaftaSoru}))}catch{}}function to(){try{const e=localStorage.getItem(_n());if(!e)return!1;const t=JSON.parse(e);return!t.ts||Date.now()-t.ts>eo?!1:(t.students&&(p.students=t.students),t.tasks&&(p.tasks=t.tasks),t.appointments&&(p.appointments=t.appointments),t.exams&&(p.exams=t.exams),t.messages&&(p.messages=t.messages),t.coachTodos&&(p.coachTodos=t.coachTodos),t.studentSpeeds&&(p.studentSpeeds=t.studentSpeeds),t.workspace&&(p.workspace=t.workspace),t.konuHaftaSoru&&(p.konuHaftaSoru=t.konuHaftaSoru),!0)}catch{return!1}}async function Jn(){var D;const e=x.coachId,t=x.role,n=(t==="coach"||t==="developer"||t==="student"||t==="parent")&&e?h.from("workspaces").select("*").eq("coach_id",e).maybeSingle():Promise.resolve({data:null});let a=h.from("users").select("*").eq("role","student");t==="student"?a=a.eq("id",x.studentId):(t==="coach"||t==="developer")&&(a=a.eq("coach_id",e));const i=a,o=new Date;o.setDate(o.getDate()-60);const s=o.toISOString().split("T")[0],r=new Date;r.setDate(r.getDate()-30);const l=r.toISOString().split("T")[0],c=t==="student"?h.from("tasks").select("*").eq("student_id",x.studentId).gte("date",s):t==="coach"||t==="developer"?h.from("tasks").select("*").eq("coach_id",e).gte("date",s):h.from("tasks").select("*").gte("date",s),d=t==="student"?h.from("appointments").select("*").eq("student_id",x.studentId).gte("date",l):t==="coach"||t==="developer"?h.from("appointments").select("*").eq("coach_id",e).gte("date",l):h.from("appointments").select("*").gte("date",l),m=t==="student"?h.from("exams").select("*").eq("student_id",x.studentId):t==="coach"||t==="developer"?h.from("exams").select("*").eq("coach_id",e):h.from("exams").select("*"),u=t==="student"?h.from("messages").select("*").eq("student_id",x.studentId).order("created_at",{ascending:!1}).limit(200):t==="coach"||t==="developer"?h.from("messages").select("*").eq("coach_id",e).order("created_at",{ascending:!1}).limit(200):h.from("messages").select("*").order("created_at",{ascending:!1}).limit(200),v=t==="coach"||t==="developer"?h.from("coach_todos").select("*").eq("coach_id",e):Promise.resolve({data:[]}),f=t==="student"?h.from("student_speeds").select("*").eq("student_id",x.studentId):t==="coach"||t==="developer"?h.from("student_speeds").select("*").eq("coach_id",e):h.from("student_speeds").select("*"),k=t==="coach"||t==="developer"?h.from("konu_mastery").select("*").eq("coach_id",e):t==="student"?h.from("konu_mastery").select("*").eq("student_id",x.studentId):Promise.resolve({data:[]}),y=t==="coach"||t==="developer"?h.from("konu_tekrar_log").select("*").eq("coach_id",e):t==="student"?h.from("konu_tekrar_log").select("*").eq("student_id",x.studentId):Promise.resolve({data:[]}),[$,w,I,T,B,S,M,E,A,P]=await Promise.all([n,i,c,d,m,u,v,f,k,y]);p.workspace=($==null?void 0:$.data)||null,p.students=(w.data||[]).map(_=>({id:_.id,name:_.full_name||_.username||"Öğrenci",target:_.target||"",color:_.color||"#4da6ff",progress:_.progress||0,weekStart:_.week_start||0,username:_.username,coachId:_.coach_id,yksArea:_.yks_area||"SAY",active:_.active!==!1})),p.tasks={},(I.data||[]).forEach(_=>{const L=`${_.student_id}_${_.date}`;p.tasks[L]||(p.tasks[L]=[]),p.tasks[L].push({_id:_.id,type:_.type,exam:_.exam_type,subject:_.subject,duration:_.duration,note:_.note,done:_.done,student_note:_.student_note||"",student_result:_.student_result||null,student_feedback:_.student_feedback||null,task_items:_.task_items,start_time:_.start_time,added_by_student:_.added_by_student||!1})}),p.appointments=(T.data||[]).map(_=>({id:_.id,studentId:_.student_id,date:_.date,time:_.time,duration:_.duration,type:_.type,note:_.note,meetLink:_.meet_link,google_event_id:_.google_event_id||null})),p.exams=(B.data||[]).map(_=>({id:_.id,studentId:_.student_id,name:_.name,date:_.date,type:_.exam_type,nets:_.nets||{},examDetails:_.exam_details||{},note:_.student_note,coachComment:_.coach_comment})),p.messages={},(S.data||[]).forEach(_=>{p.messages[_.student_id]||(p.messages[_.student_id]=[]),p.messages[_.student_id].push({_id:_.id,from:_.from_role,text:_.text||"",image_url:_.image_url||null,read:_.read,created_at:_.created_at,time:new Date(_.created_at).toLocaleTimeString("tr-TR",{hour:"2-digit",minute:"2-digit"})})}),Object.keys(p.messages).forEach(_=>p.messages[_].sort((L,j)=>new Date(L.created_at)-new Date(j.created_at))),p.coachTodos={},(M.data||[]).forEach(_=>{p.coachTodos[_.date]||(p.coachTodos[_.date]=[]),p.coachTodos[_.date].push({_id:_.id,task:_.task,note:_.note,done:_.done})}),p.studentSpeeds=E.data||[],p.konuMastery={},(A.data||[]).forEach(_=>{p.konuMastery[_.student_id]||(p.konuMastery[_.student_id]={}),p.konuMastery[_.student_id][_.subject]||(p.konuMastery[_.student_id][_.subject]={}),p.konuMastery[_.student_id][_.subject][_.konu]=_}),p.konuTekrarLog={},(P.data||[]).forEach(_=>{p.konuTekrarLog[_.student_id]||(p.konuTekrarLog[_.student_id]={}),p.konuTekrarLog[_.student_id][_.subject]||(p.konuTekrarLog[_.student_id][_.subject]={}),p.konuTekrarLog[_.student_id][_.subject][_.konu]||(p.konuTekrarLog[_.student_id][_.subject][_.konu]={}),p.konuTekrarLog[_.student_id][_.subject][_.konu][_.period_start]=_});try{const _=JSON.parse(localStorage.getItem("ba_ui_"+((D=x.dbUser)==null?void 0:D.id))||"{}");_.activeStuId&&(p.activeStuId=_.activeStuId),_.calMonth!==void 0&&(p.calMonth=_.calMonth,p.calYear=_.calYear)}catch{}}async function ga(){if(to()){Jn().then(()=>{if(Zn(),window.currentTab)try{window.switchTab(window.currentTab)}catch{}}).catch(t=>console.error("Arka plan yenileme hatası:",t));return}C(!0);try{await Jn(),Zn()}catch(t){console.error("loadAllData error",t)}C(!1)}window.dbQ=Qi;window.loadAllData=ga;window.invalidateCache=ma;function ht(e){if(!e||e<=0)return"0 sa";const t=Math.floor(e/60),n=e%60;return t>0&&n>0?`${t} sa ${n} dk`:t>0?`${t} sa`:`${n} dk`}window.formatMinToHours=ht;function Ut(e,{maxWidth:t=1600,quality:n=.8}={}){return new Promise(a=>{if(!e||!e.type||!e.type.startsWith("image/")||e.type==="image/gif")return a(e);const i=URL.createObjectURL(e),o=new Image;o.onload=()=>{URL.revokeObjectURL(i);const s=Math.min(1,t/o.width);if(s>=1&&e.size<400*1024)return a(e);const r=document.createElement("canvas");r.width=Math.max(1,Math.round(o.width*s)),r.height=Math.max(1,Math.round(o.height*s)),r.getContext("2d").drawImage(o,0,0,r.width,r.height),r.toBlob(l=>{if(!l)return a(e);const c=(e.name||"image").replace(/\.\w+$/,"")+".jpg";a(new File([l],c,{type:"image/jpeg"}))},"image/jpeg",n)},o.onerror=()=>{URL.revokeObjectURL(i),a(e)},o.src=i})}window.compressImageFile=Ut;function ie(e){return new Promise(t=>{let n=document.getElementById("customConfirmModal");n||(n=document.createElement("div"),n.id="customConfirmModal",n.className="modal-bg",n.style.zIndex="999999",n.innerHTML=`
        <div class="modal" style="max-width:360px;text-align:center;padding:24px 20px;border-radius:16px;background:var(--surface);border:1px solid var(--border)">
          <div style="font-size:32px;margin-bottom:12px">⚠️</div>
          <div id="confirmMessage" style="font-size:14px;font-weight:700;color:var(--text);margin-bottom:20px;line-height:1.5"></div>
          <div style="display:flex;gap:10px;justify-content:center">
            <button class="btn btn-ghost" id="confirmCancelBtn" style="flex:1;justify-content:center;padding:10px;border-radius:10px">İptal</button>
            <button class="btn btn-accent" id="confirmOkBtn" style="flex:1;justify-content:center;padding:10px;border-radius:10px;background:#ef4444;border-color:#ef4444;color:#fff">Tamam</button>
          </div>
        </div>
      `,document.body.appendChild(n),n.addEventListener("click",r=>{r.target===n&&(n.classList.remove("open"),t(!1))})),n.querySelector("#confirmMessage").textContent=e;const a=n.querySelector("#confirmOkBtn"),i=n.querySelector("#confirmCancelBtn"),o=a.cloneNode(!0),s=i.cloneNode(!0);a.parentNode.replaceChild(o,a),i.parentNode.replaceChild(s,i),n.classList.add("open"),o.focus(),o.onclick=()=>{n.classList.remove("open"),t(!0)},s.onclick=()=>{n.classList.remove("open"),t(!1)}})}window.customConfirm=ie;function Qe(e){const t=localStorage.getItem("ra_feat_"+e);return t===null?!0:t==="1"}function no(e,t){localStorage.setItem("ra_feat_"+e,t?"1":"0")}window.isFeatureOn=Qe;window.setFeature=no;async function Gt(){const e=x.dbUser;if(e&&!(e.email==="ceylanemin1928@gmail.com"||e.email==="simkoc1@rostrumakademi.com"||window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1"||window.__testMode)){if(x.role==="coach"||x.role==="developer")await ao(e.plan||"trial",e.trial_ends_at,e.created_at,e.id);else if((x.role==="student"||x.role==="parent")&&x.coachId)try{const{data:t}=await h.from("users").select("plan,trial_ends_at,created_at,email").eq("id",x.coachId).maybeSingle();if(t){if(t.email==="ceylanemin1928@gmail.com"||t.email==="simkoc1@rostrumakademi.com")return;(t.plan||"trial")==="inactive"&&Wt()}}catch(t){console.error("Error checking coach subscription:",t)}}}async function ao(e,t,n,a){var r,l,c,d;let i=!1;if(a){const{data:m}=await h.from("payments").select("id").eq("coach_id",a).eq("status","pending").limit(1).maybeSingle();i=!!m}if(e==="inactive"){i?((r=document.getElementById("trialExpiredModal"))==null||r.classList.remove("open"),Dt("grace",0,!0)):Wt();return}if((l=document.getElementById("trialExpiredModal"))==null||l.classList.remove("open"),e==="pro"){(c=document.getElementById("trialCountdownBanner"))==null||c.remove();return}const o=t?new Date(t):n?new Date(new Date(n).getTime()+7*24*60*60*1e3):null;if(!o)return;const s=new Date;if(e==="grace"){const m=new Date(o.getTime()+2592e5),u=Math.max(0,Math.ceil((m-s)/(1e3*60*60*24)));Dt("grace",u,i)}else{const m=Math.ceil((o-s)/864e5);m<=2?Dt("trial",m,i):(d=document.getElementById("trialCountdownBanner"))==null||d.remove()}}function Wt(){const e=x.role==="coach"||x.role==="developer";let t=document.getElementById("trialExpiredModal");const n=`
    <div style="font-size:54px;margin-bottom:18px">⏳</div>
    <h2 style="font-size:20px;font-weight:900;margin-bottom:12px;color:var(--accent)">Erişiminiz Askıya Alındı</h2>
    <p style="font-size:13px;color:var(--text-mid);line-height:1.7;margin-bottom:24px">
      Rostrum Akademi'nin 7 günlük ücretsiz deneme süresi (+3 günlük müsamaha süresi) sona ermiştir.
      ${e?"Öğrencilerinizin bilgilerine ve koçluk paneline erişmeye devam etmek için lütfen aboneliğinizi başlatın.":"Koçunuzun aboneliği yenilenene kadar erişim kapalıdır."}
    </p>
    <div style="display:flex;flex-direction:column;gap:10px;align-items:stretch">
      ${e?`
      <button class="btn btn-accent" onclick="openCoachPaymentModal()" style="justify-content:center;padding:12px;font-size:14px;font-weight:700">
        💳 Ödeme Bildir
      </button>`:""}
      <button class="btn ${e?"btn-ghost":"btn-accent"}" onclick="openSupportChatDirect()" style="justify-content:center;padding:12px;font-size:14px;font-weight:700">
        💬 Destek ile İletişime Geç
      </button>
      <div style="font-size:11px;color:var(--text-dim);margin-top:6px">
        E-posta: <b>ceylanemin1928@gmail.com</b>
      </div>
    </div>`;t?(t.querySelector(".modal").innerHTML=n,t.classList.add("open")):(t=document.createElement("div"),t.id="trialExpiredModal",t.className="modal-bg open",t.style.zIndex="9999999",t.innerHTML=`<div class="modal" style="max-width:460px;text-align:center;padding:32px 24px;border-radius:18px;background:var(--surface);border:2.5px solid var(--accent);box-shadow:var(--shadow-lg)">${n}</div>`,document.body.appendChild(t))}function Dt(e,t,n){const a=e==="grace",i=a?"#ea580c":"#f59e0b",o=n?"📨 Ödeme bildiriminiz alındı — ekibimiz en kısa sürede onaylayacak.":a?`⏳ Deneme süreniz doldu — öğrencileriniz mağdur olmasın diye erişiminiz <strong>${t} gün daha</strong> açık tutuluyor.`:`⏰ Ücretsiz denemenizin <strong>${t} günü</strong> kaldı — öğrenci verileriniz korunuyor.`,s=n?"":`<button onclick="openCoachPaymentModal()" style="background:rgba(0,0,0,.15);border:none;padding:4px 14px;border-radius:6px;font-size:12px;font-weight:700;cursor:pointer;color:#111;white-space:nowrap">${a?"Ödeme Bildir →":"Devam Et →"}</button>`,r=a?"":`<button onclick="document.getElementById('trialCountdownBanner').remove()" style="background:none;border:none;cursor:pointer;color:rgba(0,0,0,.4);font-size:18px;padding:0 4px;line-height:1">×</button>`;let l=document.getElementById("trialCountdownBanner");l||(l=document.createElement("div"),l.id="trialCountdownBanner",document.body.prepend(l)),l.style.cssText=`position:fixed;top:0;left:0;right:0;z-index:8000;background:${i};color:#111;padding:8px 16px;display:flex;align-items:center;justify-content:center;gap:12px;font-size:13px;font-weight:600;`,l.innerHTML=`<span>${o}</span>${s}${r}`;const c=document.getElementById("appShell");c&&(c.style.marginTop=l.offsetHeight+"px")}window.openSupportChatDirect=nn;window.checkCoachSubscription=Gt;window.showTrialExpiredScreen=Wt;window.showSubscriptionBanner=Dt;const gn=[{id:"home",lbl:"🏠",name:"Ana Sayfa"},{id:"students",lbl:"👤",name:"Öğrencilerim"},{id:"todolist",lbl:"📅",name:"Takvim"},{id:"coach-resources",lbl:"📚",name:"Kaynaklarım"},{id:"coach-applications",lbl:"📩",name:"Başvurular"}],fa=[{id:"portal",lbl:"🏠",name:"Ana Sayfa"},{id:"sportal",lbl:"📋",name:"Programım"},{id:"sexams",lbl:"📊",name:"Denemeler"},{id:"smessages",lbl:"💬",name:"Koçuma Yaz"},{id:"sprofil",lbl:"🌟",name:"Yolculuğum"}],ya=[{id:"dev-dashboard",lbl:"🖥️",name:"Dev Panel"},{id:"dev-tickets",lbl:"🎫",name:"Destek"}],va=[{id:"parent-home",lbl:"🏠",name:"Ana Sayfa"},{id:"parent-progress",lbl:"📊",name:"İlerleme"},{id:"parent-messages",lbl:"💬",name:"Koça Yaz"},{id:"parent-ai",lbl:"🤖",name:"AI Asistan"}],io={developer:["home","students","todolist","dev-dashboard","dev-tickets"]};function oo(){var e;(e=document.getElementById("mainSidebar"))==null||e.classList.toggle("open")}function ro(){var e;(e=document.getElementById("tnUserMenu"))==null||e.classList.toggle("open")}function xa(){var e;(e=document.getElementById("tnUserMenu"))==null||e.classList.remove("open")}document.addEventListener("click",e=>{const t=document.getElementById("tnUserWrap");t&&!t.contains(e.target)&&xa()});function so(){var v;Gt();const e=x.role==="coach"?gn:x.role==="developer"?[...gn,...ya]:x.role==="parent"?va:fa,t=[...e,{id:"profile",lbl:"👤",name:"Profil"},{id:"settings",lbl:"⚙️",name:"Ayarlar"}];document.getElementById("sidebarNav").innerHTML=e.map(f=>`
    <div class="tn-nav-item" id="sbi_${f.id}" onclick="switchTab('${f.id}')">
      <span>${f.lbl}</span>
      <span>${f.name}</span>
    </div>`).join("");const n=io[x.role],a=n?n.map(f=>t.find(k=>k.id===f)).filter(Boolean):e.slice(0,5);document.getElementById("mobileNav").innerHTML=a.map(f=>`
    <button class="mnav-btn" id="mntab_${f.id}" onclick="switchTab('${f.id}')">${f.lbl}<span style="font-size:9px;display:block">${f.name}</span></button>`).join(""),document.getElementById("mainContent").innerHTML=[...e,{id:"student-detail"},{id:"profile"},{id:"settings"},{id:"coach-resources"},{id:"coach-applications"},{id:"coach-notes"},{id:"coach-profile"},{id:"messages"},{id:"todolist"},{id:"suyelik"},{id:"program"},{id:"exams"}].map(f=>`<div class="view" id="view-${f.id}"></div>`).join("");const i=x.dbUser,o=x.role==="student"?p.students.find(f=>f.id===x.studentId):null,s=(i==null?void 0:i.full_name)||(o==null?void 0:o.name)||"",r=s.split(" ").map(f=>f[0]).join("").slice(0,2).toUpperCase(),l={coach:"#E8613A",student:(o==null?void 0:o.color)||"#4da6ff",developer:"#c084fc",parent:"#3ecf8e"},c={coach:"KOÇ",student:"ÖĞRENCİ",developer:"DEV",parent:"VELİ"};if(document.getElementById("sbAv").textContent=r,document.getElementById("sbAv").style.background=l[x.role]||"#888",document.getElementById("sbName").textContent=s,document.getElementById("sbRole").textContent=c[x.role]||x.role,(v=p.workspace)!=null&&v.brand_name){const f=document.querySelector(".sb-logo-text");f&&(f.textContent=p.workspace.brand_name);const k=document.querySelector(".tn-logo .sb-logo-icon");k&&(p.workspace.logo_url?k.src=p.workspace.logo_url:k.src="/logo.png")}const d=document.getElementById("sb-site-admin");d&&(d.style.display=x.role==="developer"?"flex":"none");const m=document.getElementById("tnCoachProfileItem");m&&(m.style.display=x.role==="coach"||x.role==="developer"?"flex":"none");const u=document.getElementById("tnUyelikItem");u&&(u.style.display=x.role==="coach"||x.role==="developer"?"flex":"none"),setTimeout(rn,200),Ei(),setTimeout(oi,600),(x.role==="coach"||x.role==="developer")&&h.from("match_requests").select("id",{count:"exact",head:!0}).eq("matched_coach_id",x.coachId).eq("status","pending").then(({count:f})=>{if(f>0){const k=document.getElementById("sbi_coach-applications");if(k&&!k.querySelector(".sb-badge")){const y=document.createElement("span");y.className="sb-badge",y.textContent=f,k.appendChild(y)}}})}function le(e,t=!0){var d,m,u;if(!e)return;currentTab=e,t&&(window.location.hash=e),document.querySelectorAll(".tn-nav-item").forEach(v=>v.classList.remove("active"));const n=document.getElementById("sbi_"+e)||document.getElementById("sb-"+e);n&&n.classList.add("active"),document.querySelectorAll(".mnav-btn").forEach(v=>v.classList.remove("active"));const a=document.getElementById("mntab_"+e);a&&a.classList.add("active"),document.querySelectorAll(".view").forEach(v=>v.classList.remove("active"));const i=document.getElementById("view-"+e);i&&i.classList.add("active");const s=[...gn,...fa,...ya,...va,{id:"profile",name:"Profil"},{id:"settings",name:"Ayarlar"},{id:"student-detail",name:((d=p.students.find(v=>v.id===p.activeStuId))==null?void 0:d.name)||"Öğrenci"},{id:"program",name:"Program"},{id:"exams",name:"Denemeler"}].find(v=>v.id===e),r=document.getElementById("tbarTitle");r&&(r.textContent=(s==null?void 0:s.name)||e);const l={home:ba,students:et,messages:Ua,"coach-applications":Un,"coach-notes":Ci,todolist:Ra,portal:Qt,sportal:be,sexams:zn,smessages:vn,suyelik:gi,sprofil:mi,profile:Sn,settings:$a,"student-detail":()=>{p.activeStuId?ha(p.activeStuId):le("students")},program:()=>{p.activeStuId?En(p.activeStuId):le("students")},exams:()=>{p.activeStuId?Be():le("students")},"dev-dashboard":ni,"dev-users":mt,"dev-resources":tt,"dev-finance":zt,"dev-announce":Bt,"dev-tickets":gt,"parent-home":Ii,"parent-progress":zi,"parent-messages":vn,"parent-ai":Bi,"coach-profile":fi,"dev-matches":Nn,"coach-resources":Mt};try{(m=l[e])==null||m.call(l)}catch(v){console.error("[switchTab] Render error for tab:",e,v),i&&(i.innerHTML=`<div style="padding:24px;color:var(--text)"><b>Hata Oluştu ⚠️</b><p style="color:var(--text-mid);margin-top:6px">${g(v.message)}</p><pre style="font-size:10px;color:var(--text-dim);white-space:pre-wrap;margin-top:8px">${g((v.stack||"").slice(0,400))}</pre></div>`)}e==="messages"||e==="smessages"?Mn():An();const c=document.getElementById("aiChatBubble");c&&(e==="dev-tickets"||e.startsWith("dev-")||e==="messages"||e==="smessages"?(c.style.display="none",(u=document.getElementById("aiChatPanel"))==null||u.classList.remove("open")):(x.role==="student"||x.role==="coach"||x.role==="parent")&&(c.style.display="flex"))}function ba(){var t,n;const e=document.getElementById("view-home");if(e)try{const a=new Date,i=["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"],o=["Ocak","Şubat","Mart","Nisan","Mayıs","Haziran","Temmuz","Ağustos","Eylül","Ekim","Kasım","Aralık"],s=G(a);let r=0;Object.values(p.messages).forEach(S=>{r+=S.filter(M=>M.from==="student"&&!M.read).length});const l=p.appointments.filter(S=>S.date===s).sort((S,M)=>S.time.localeCompare(M.time)),c=[],d=ae(0,0);(p.students||[]).forEach(S=>{let M=0,E=0;for(let L=0;L<7;L++){const j=G(ee(d,L)),K=p.tasks[`${S.id}_${j}`]||[];M+=K.length,E+=K.filter(F=>F.done).length}const A=M>0?Math.round(E/M*100):0;M>0&&A<30&&c.push({studentId:S.id,studentName:S.name,color:S.color,type:"tasks",icon:"📋",title:"Düşük Görev",desc:`Bu haftaki görev tamamlama oranı <b>%${A}</b>'de kaldı (${E}/${M} görev tamamlandı).`});const P=(p.exams||[]).filter(L=>L.studentId===S.id).sort((L,j)=>new Date(j.date).getTime()-new Date(L.date).getTime()),D={};if(P.forEach(L=>{D[L.type]||(D[L.type]=[]),D[L.type].push(L)}),Object.entries(D).forEach(([L,j])=>{if(j.length>=2){const K=j[0],F=j[1],z=Object.values(K.nets||{}).reduce((O,q)=>O+Number(q||0),0),N=Object.values(F.nets||{}).reduce((O,q)=>O+Number(q||0),0),J=z-N;J<-5&&c.push({studentId:S.id,studentName:S.name,color:S.color,type:"exams",icon:"📉",title:`Net Düşüşü (${L})`,desc:`Son denemede <b>${z} net</b> yaptı. Önceki denemesine (${N} net) göre <b>${Math.abs(J).toFixed(1)} net düşüş</b>.`})}}),M===0&&c.push({studentId:S.id,studentName:S.name,color:S.color,type:"noplan",icon:"📭",title:"Program Yok",desc:"Bu hafta için henüz hiç görev eklenmemiş."}),M>0&&E===0){let L=!1;for(let j=0;j<3;j++){const K=G(ee(a,-j));if((p.tasks[`${S.id}_${K}`]||[]).length>0){L=!0;break}}L&&c.push({studentId:S.id,studentName:S.name,color:S.color,type:"inactive",icon:"💤",title:"3 Gündür Pasif",desc:"Son 3 gündür hiçbir görev tamamlanmadı. İletişime geç!"})}M>0&&E===M&&c.push({studentId:S.id,studentName:S.name,color:S.color,type:"perfect",icon:"🏆",title:"Harika Hafta!",desc:`Bu haftaki tüm ${M} görevi tamamladı! Tebrik et.`}),(p.studentSpeeds||[]).filter(L=>L.student_id===S.id).forEach(L=>{let j=120;L.exam_type==="TYT"?["Türkçe","Sosyal"].includes(L.subject)?j=100:["Matematik","Fen"].includes(L.subject)&&(j=130):L.exam_type&&L.exam_type.startsWith("AYT")&&(j=180),L.secs_per_question>j&&c.push({studentId:S.id,studentName:S.name,color:S.color,type:"speed",icon:"⚡",title:`Hız Aşımı (${L.exam_type} - ${L.subject})`,desc:`Soru çözüm hızı <b>${L.secs_per_question} sn/soru</b> (Limit: ${j} sn).`})})});let m="";if(c.length===0)p.students.length===0?m=`
        <div style="text-align:center;padding:24px 16px">
          <div style="font-size:36px;margin-bottom:12px">👋</div>
          <div style="font-size:14px;font-weight:700;color:var(--text);margin-bottom:6px">İlk öğrencinizi ekleyin</div>
          <div style="font-size:12px;color:var(--text-mid);margin-bottom:16px;line-height:1.6">Öğrencilerim sekmesinden öğrenci ekleyerek uygulamayı kullanmaya başlayabilirsiniz.</div>
          <button class="btn btn-accent" onclick="switchTab('students')" style="font-size:13px;padding:9px 20px">Öğrenci Ekle →</button>
        </div>`:m=`
        <div style="text-align:center;padding:16px;color:var(--text-dim);font-size:13px">
          ✅ Harika! Şu an için kritik bir performans düşüşü veya uyarı bulunmuyor.
        </div>`;else{const S={perfect:{badge:"#3ecf8e",badgeBg:"rgba(62,207,142,.12)",border:"rgba(62,207,142,.25)"},noplan:{badge:"#f0a500",badgeBg:"rgba(240,165,0,.1)",border:"rgba(240,165,0,.2)"},inactive:{badge:"#ff5c7a",badgeBg:"rgba(255,92,122,.08)",border:"rgba(255,92,122,.2)"},tasks:{badge:"#ff5c7a",badgeBg:"rgba(255,92,122,.08)",border:"rgba(255,92,122,.2)"},exams:{badge:"#ff5c7a",badgeBg:"rgba(255,92,122,.08)",border:"rgba(255,92,122,.2)"},speed:{badge:"#f0a500",badgeBg:"rgba(240,165,0,.1)",border:"rgba(240,165,0,.2)"}},M={noplan:{label:"📅 Program Yap",fn:"openStudentProgram"},tasks:{label:"📋 Programı Aç",fn:"openStudentProgram"},inactive:{label:"📋 Programı Aç",fn:"openStudentProgram"},exams:{label:"➕ Deneme Ekle",fn:"openStudentExams"},speed:{label:"⏱ Hızı Düzenle",fn:"openStudentModal"}},E=_=>{const L=S[_.type]||S.tasks,j=M[_.type];return j?`<button onclick="event.stopPropagation();${j.fn}('${_.studentId}')" style="flex-shrink:0;font-size:10.5px;font-weight:700;padding:5px 10px;border-radius:7px;border:1px solid ${L.border};background:var(--surface);color:${L.badge};cursor:pointer;font-family:inherit;white-space:nowrap;transition:filter .15s" onmouseover="this.style.filter='brightness(.95)'" onmouseout="this.style.filter='none'">${j.label}</button>`:""},A={inactive:3,tasks:3,exams:3,noplan:2,speed:2,perfect:0},P=[],D={};c.forEach(_=>{D[_.studentId]===void 0&&(D[_.studentId]=P.length,P.push({studentId:_.studentId,studentName:_.studentName,color:_.color,items:[]})),P[D[_.studentId]].items.push(_)}),m=P.map(_=>{if(_.items.length===1){const F=_.items[0],z=S[F.type]||S.tasks;return`<div style="cursor:pointer;padding:10px 12px;margin-bottom:8px;border-radius:8px;background:${z.badgeBg};border:1px solid ${z.border};display:flex;align-items:center;gap:10px;transition:opacity .15s" onclick="openStudentDetail('${F.studentId}')" onmouseover="this.style.opacity='.85'" onmouseout="this.style.opacity='1'">
          <div style="font-size:18px;width:32px;height:32px;border-radius:8px;background:rgba(255,255,255,.06);display:flex;align-items:center;justify-content:center;flex-shrink:0">${F.icon}</div>
          <div style="flex:1;min-width:0">
            <div style="display:flex;justify-content:space-between;align-items:center;gap:8px;margin-bottom:2px">
              <span style="font-size:13px;font-weight:700">${g(F.studentName)}</span>
              <span style="font-size:10px;font-weight:700;color:${z.badge};white-space:nowrap">${F.title}</span>
            </div>
            <div style="font-size:11px;color:var(--text-mid);line-height:1.4">${F.desc}</div>
          </div>
          ${E(F)}
        </div>`}const L=_.items.reduce((F,z)=>(A[z.type]??1)>(A[F.type]??1)?z:F,_.items[0]),j=S[L.type]||S.tasks,K=_.items.map((F,z)=>{const N=S[F.type]||S.tasks;return`<div style="display:flex;align-items:center;gap:10px;padding:${z===0?"0 0 8px":"8px 0 0"};${z>0?"border-top:1px solid rgba(255,255,255,.07)":""}">
          <div style="font-size:16px;width:28px;height:28px;border-radius:7px;background:rgba(255,255,255,.06);display:flex;align-items:center;justify-content:center;flex-shrink:0">${F.icon}</div>
          <div style="flex:1;min-width:0">
            <div style="font-size:11px;font-weight:700;color:${N.badge};margin-bottom:1px">${F.title}</div>
            <div style="font-size:11px;color:var(--text-mid);line-height:1.4">${F.desc}</div>
          </div>
          ${E(F)}
        </div>`}).join("");return`<div style="cursor:pointer;padding:10px 12px;margin-bottom:8px;border-radius:8px;background:${j.badgeBg};border:1px solid ${j.border};transition:opacity .15s" onclick="openStudentDetail('${_.studentId}')" onmouseover="this.style.opacity='.85'" onmouseout="this.style.opacity='1'">
        <div style="display:flex;justify-content:space-between;align-items:center;gap:8px;margin-bottom:8px">
          <span style="font-size:13px;font-weight:700;display:flex;align-items:center;gap:6px"><span style="width:8px;height:8px;border-radius:50%;background:${_.color||"var(--accent)"};display:inline-block;flex-shrink:0"></span>${g(_.studentName)}</span>
          <span style="font-size:10px;font-weight:700;color:${j.badge};white-space:nowrap;background:rgba(255,255,255,.07);padding:3px 8px;border-radius:20px">${_.items.length} uyarı</span>
        </div>
        ${K}
      </div>`}).join("")}const u=a.getHours(),v=u<6?"İyi geceler":u<12?"Günaydın":u<18?"İyi günler":"İyi akşamlar",f=`${String(u).padStart(2,"0")}:${String(a.getMinutes()).padStart(2,"0")}`,k=l.find(S=>S.time>=f),y=Tt(),$=y.days,w=ae(0,0);let I=0,T=0;p.students.forEach(S=>{for(let M=0;M<7;M++){const E=p.tasks[`${S.id}_${G(ee(w,M))}`]||[];I+=E.length,T+=E.filter(A=>A.done).length}});const B=I>0?Math.round(T/I*100):0;e.innerHTML=`
    <!-- HERO -->
    <div class="home-hero">
      <div class="home-hero-left">
        <div class="home-hero-greeting">${v},</div>
        <div class="home-hero-name">${g(((n=(t=x.dbUser)==null?void 0:t.full_name)==null?void 0:n.split(" ")[0])||"Koç")} 👋</div>
        <div class="home-hero-date">${i[a.getDay()]}, ${a.getDate()} ${o[a.getMonth()]} ${a.getFullYear()}</div>
      </div>
      <div class="home-hero-right">
        <div class="home-yks-badge">
          <div class="home-yks-num">${$}</div>
          <div class="home-yks-meta">gün kaldı<br><b>YKS ${y.year}</b></div>
        </div>
      </div>
    </div>

    <!-- STAT KARTLARI -->
    <div class="home-stats-v2">
      <div class="hsv2-card" onclick="switchTab('students')" title="Öğrencilere git">
        <div class="hsv2-top">
          <span class="hsv2-icon-wrap hsv2-amber">👥</span>
          <span class="hsv2-trend">→</span>
        </div>
        <div class="hsv2-val">${p.students.length}</div>
        <div class="hsv2-lbl">Aktif Öğrenci</div>
      </div>
      <div class="hsv2-card" onclick="switchTab('students')" title="Öğrencilere git — randevu sekmesi">
        <div class="hsv2-top">
          <span class="hsv2-icon-wrap hsv2-blue">📅</span>
          <span class="hsv2-trend" style="color:var(--blue)">${k?k.time:"—"}</span>
        </div>
        <div class="hsv2-val" style="color:var(--blue)">${l.length}</div>
        <div class="hsv2-lbl">Bugün Randevu</div>
        <div class="hsv2-sub">${k?`Sıradaki: ${k.time}`:"Randevu tamamlandı"}</div>
      </div>
      <div class="hsv2-card" onclick="switchTab('messages')" title="Mesajlara git">
        <div class="hsv2-top">
          <span class="hsv2-icon-wrap ${r>0?"hsv2-red":"hsv2-green"}">💬</span>
          ${r>0?`<span class="hsv2-badge-red">${r} yeni</span>`:'<span class="hsv2-badge-green">Temiz</span>'}
        </div>
        <div class="hsv2-val" style="color:${r>0?"var(--red)":"var(--green)"}">${r}</div>
        <div class="hsv2-lbl">Okunmamış Mesaj</div>
        <div class="hsv2-sub">${r>0?"Yanıt bekliyor":"Tüm mesajlar okundu"}</div>
      </div>
      <div class="hsv2-card" title="Haftalık görev durumu">
        <div class="hsv2-top">
          <span class="hsv2-icon-wrap ${B>=70?"hsv2-green":B>=40?"hsv2-amber":"hsv2-red"}">📋</span>
          <span class="hsv2-trend" style="color:${B>=70?"var(--green)":B>=40?"var(--accent)":"var(--red)"}">%${B}</span>
        </div>
        <div class="hsv2-val" style="color:${B>=70?"var(--green)":B>=40?"var(--accent)":"var(--red)"}">${T}<span style="font-size:18px;font-weight:500;color:var(--text-dim)">/${I}</span></div>
        <div class="hsv2-lbl">Haftalık Görev</div>
        <div class="hsv2-progress"><div class="hsv2-bar" style="width:${B}%;background:${B>=70?"var(--green)":B>=40?"var(--accent)":"var(--red)"}"></div></div>
      </div>
    </div>

    <!-- ALT GRID: Uyarılar + Randevular -->
    <div class="home-bottom-grid">
      <div class="home-section-card ${c.length>0?"hsc-has-alerts":""}">
        <div class="hsc-head">
          <span class="hsc-head-icon">${c.length>0?"⚠️":"✅"}</span>
          <span class="hsc-head-title">Erken Uyarılar</span>
          <span class="hsc-pill ${c.length>0?"hsc-pill-red":"hsc-pill-green"}">${c.length>0?c.length+" uyarı":"Temiz"}</span>
        </div>
        <div class="hsc-body">${m}</div>
      </div>
      <div class="home-section-card">
        <div class="hsc-head">
          <span class="hsc-head-icon">📅</span>
          <span class="hsc-head-title">Bugünün Randevuları</span>
          <span class="hsc-pill">${l.length} randevu</span>
        </div>
        <div class="hsc-body">
          ${l.length===0?'<div class="hsc-empty">Bugün randevu yok</div>':""}
          ${l.map(S=>{const M=p.students.find(N=>N.id===S.studentId),E=S.time<f,[A,P]=S.time.split(":").map(Number),D=A*60+P,[_,L]=f.split(":").map(Number),j=_*60+L,K=D-j,F=K>=-(S.duration||60)&&K<=15,z=F&&S.meet_link?`<a href="${g(S.meet_link)}" target="_blank" style="display:inline-flex;align-items:center;gap:5px;padding:5px 12px;border-radius:8px;background:${K<=0?"var(--red)":"var(--accent)"};color:#fff;font-size:11px;font-weight:800;text-decoration:none;animation:${K<=0?"pulse 1.5s infinite":"none"};white-space:nowrap;flex-shrink:0">${K<=0?"🔴 Ders Sürüyor":"🟡 Derse Gir"}</a>`:"";return`<div class="hsc-appt-row ${E&&!F?"hsc-appt-past":""}">
              <div class="hsc-appt-time">${S.time}</div>
              <div class="hsc-appt-bar" style="background:${(M==null?void 0:M.color)||"var(--accent)"}"></div>
              <div style="flex:1;min-width:0">
                <div class="hsc-appt-name">${g((M==null?void 0:M.name)||"?")}</div>
                <div class="hsc-appt-meta">${g(S.type)} · ${S.duration} dk${!F&&S.meet_link?` · <a href="${g(S.meet_link)}" target="_blank" style="color:var(--blue);text-decoration:none">${S.meet_link.includes("zoom")?"Zoom":"Meet"} →</a>`:""}</div>
              </div>
              ${z||(E?'<span class="hsc-appt-done">✓</span>':"")}
            </div>`}).join("")}
        </div>
      </div>
    </div>

    <!-- HIZLI ERİŞİM -->
    <div style="display:flex;gap:8px;max-width:900px;margin:0 auto 4px;justify-content:center">
      ${[{tab:"messages",icon:"💬",label:"Mesajlar",sub:r>0?r+" okunmamış":"Temiz"},{tab:"coach-notes",icon:"📝",label:"Notlarım",sub:"Kişisel notlar"},{tab:"todolist",icon:"📅",label:"Ajanda",sub:"Tüm randevular"},{tab:"coach-applications",icon:"📩",label:"Başvurular",sub:"Eşleşme talepleri"}].map(({tab:S,icon:M,label:E,sub:A})=>`
        <div onclick="switchTab('${S}')" style="background:var(--surface);border:1px solid var(--border);border-radius:10px;padding:9px 16px;cursor:pointer;display:flex;align-items:center;gap:8px;white-space:nowrap;transition:border-color .15s;flex:1;justify-content:center" onmouseover="this.style.borderColor='var(--accent)'" onmouseout="this.style.borderColor='var(--border)'">
          <span style="font-size:16px">${M}</span>
          <div><div style="font-size:12px;font-weight:700">${E}</div><div style="font-size:10px;color:var(--text-dim)">${A}</div></div>
        </div>`).join("")}
    </div>`}catch(a){console.error("[renderHome] HATA:",a),e.innerHTML=`<div style='padding:24px;color:var(--text)'><b>İyi günler 👋</b><p style='color:var(--text-mid);margin-top:6px'>Hata: ${g(a.message)}</p></div>`}}function et(){const e=document.getElementById("view-students"),t=ae(0,0),n={};p.students.forEach(l=>{let c=0,d=0,m=0,u=0;for(let v=0;v<7;v++)(p.tasks[`${l.id}_${G(ee(t,v))}`]||[]).forEach(k=>{c++,m+=Number(k.duration||0),k.done&&(d++,u+=Number(k.duration||0))});n[l.id]={total:c,done:d,totalMin:m,doneMin:u}});const a=p.students.filter(l=>l.active!==!1),i=p.students.filter(l=>l.active===!1),o=a.length,s=a.filter(l=>{const c=n[l.id];return c&&c.total>0}).length,r=a.filter(l=>{const c=n[l.id];return c&&c.total>0&&c.done===c.total}).length;e.innerHTML=`<div style="max-width:640px;margin:0 auto">
    <!-- Üst başlık -->
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:24px">
      <div>
        <div style="font-size:22px;font-weight:800;letter-spacing:-.3px">Öğrencilerim</div>
        <div style="font-size:12px;color:var(--text-dim);margin-top:3px">${o} öğrenci · ${s} bu hafta aktif · ${r} hafta tamamladı</div>
      </div>
      <div style="display:flex;gap:8px;flex-wrap:wrap">
        <button class="btn btn-accent" onclick="openStudentModal()" style="gap:6px;font-size:13px;padding:9px 18px">
          📩 Öğrenci Davet Et
        </button>
      </div>
    </div>

    <!-- Arama -->
    <div style="position:relative;margin-bottom:16px">
      <svg style="position:absolute;left:14px;top:50%;transform:translateY(-50%);width:15px;height:15px;color:var(--text-dim)" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
      <input type="text" placeholder="Öğrenci ara..." id="stuSearchInput" oninput="filterStudentSearch()" autocomplete="off"
        style="width:100%;padding:11px 14px 11px 40px;background:var(--surface);border:1.5px solid var(--border);border-radius:10px;font-size:13px;font-family:inherit;color:var(--text);outline:none;box-sizing:border-box;transition:border .15s"
        onfocus="this.style.borderColor='var(--accent)'" onblur="this.style.borderColor='var(--border)'">
    </div>

    <!-- Öğrenci listesi -->
    <div id="stuSearchResults" style="display:flex;flex-direction:column;gap:8px">
      ${a.length===0&&i.length===0?`
        <div style="text-align:center;padding:64px 20px;color:var(--text-dim)">
          <div style="width:56px;height:56px;border-radius:16px;background:var(--surface2);display:flex;align-items:center;justify-content:center;font-size:24px;margin:0 auto 16px">👤</div>
          <div style="font-size:14px;font-weight:600;color:var(--text);margin-bottom:6px">Henüz öğrenciniz yok</div>
          <div style="font-size:12px;margin-bottom:16px">Öğrencilerinize e-posta ile davet gönderin, kendi hesaplarını açıp doğrudan başlasınlar.</div>
          <button class="btn btn-accent btn-sm" onclick="openStudentModal()">📩 Öğrenci Davet Et</button>
        </div>
      `:a.map(l=>{const c=n[l.id]||{total:0,done:0},d=c.total>0?Math.round(c.done/c.total*100):0,m=d>=80?"var(--green)":d>=40?"var(--accent)":"var(--red)",u=c.total>0&&c.done===c.total,v=p.exams.filter(k=>k.studentId===l.id).sort((k,y)=>y.date.localeCompare(k.date))[0],f=v?Object.values(v.nets||{}).reduce((k,y)=>k+y,0).toFixed(1):null;return`<div class="stu-row" id="sturow_${l.id}" onclick="openStudentDetail('${l.id}')" style="padding:12px 16px;align-items:center;gap:12px;border-radius:10px">
          <div style="width:38px;height:38px;border-radius:10px;background:${l.color};display:flex;align-items:center;justify-content:center;font-size:15px;font-weight:800;color:#fff;flex-shrink:0">${l.name[0]}</div>
          <div style="flex:1;min-width:0">
            <div style="font-size:13px;font-weight:700;color:var(--text)">${g(l.name)}</div>
            <div style="font-size:11px;color:var(--text-dim);margin-top:1px">${g(l.target||"Hedef belirtilmemiş")}</div>
          </div>
          <div style="display:flex;align-items:center;gap:8px;flex-shrink:0;font-size:11px;color:var(--text-mid)">
            <span style="font-weight:700;color:${m}">%${d}</span>
            <span style="color:var(--border2)">·</span>
            <span>${c.done}/${c.total} görev</span>
            ${f?`<span style="color:var(--border2)">·</span><span><b style="color:var(--text)">${f}</b> net</span>`:""}
            ${u?'<span style="color:var(--border2)">·</span><span style="color:var(--green);font-weight:600">✓ Tamam</span>':""}
          </div>
          <svg style="width:13px;height:13px;color:var(--border2);flex-shrink:0" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path d="m9 18 6-6-6-6"/></svg>
        </div>`}).join("")}
    </div>
    ${i.length>0?`
    <!-- Pasif öğrenciler — soluk, ayrı bölüm -->
    <div style="margin-top:22px">
      <div style="font-size:11px;font-weight:800;color:var(--text-dim);text-transform:uppercase;letter-spacing:.6px;margin-bottom:10px">⏸ Pasif Öğrenciler (${i.length})</div>
      <div style="display:flex;flex-direction:column;gap:8px;opacity:.55">
        ${i.map(l=>`
          <div class="stu-row" onclick="openStudentModal('${l.id}')" style="padding:12px 16px;align-items:center;gap:12px;border-radius:10px;cursor:pointer">
            <div style="width:38px;height:38px;border-radius:10px;background:${l.color};display:flex;align-items:center;justify-content:center;font-size:15px;font-weight:800;color:#fff;flex-shrink:0;filter:grayscale(.6)">${l.name[0]}</div>
            <div style="flex:1;min-width:0">
              <div style="font-size:13px;font-weight:700;color:var(--text)">${g(l.name)}</div>
              <div style="font-size:11px;color:var(--text-dim);margin-top:1px">Giriş kapalı · verileri korunuyor · düzenle → Aktifleştir</div>
            </div>
          </div>`).join("")}
      </div>
    </div>`:""}
    <div id="stuSearchNoResults" style="display:none;text-align:center;padding:48px 20px;color:var(--text-dim)">
      <div style="font-size:13px">Aramanızla eşleşen öğrenci bulunamadı.</div>
    </div>
  </div>`}function lo(){const e=document.getElementById("stuSearchInput").value.trim().toLowerCase(),t=document.getElementById("stuSearchNoResults");let n=0;p.students.forEach(a=>{const i=document.getElementById("sturow_"+a.id);if(i){const o=a.name.toLowerCase().includes(e);i.style.display=o?"flex":"none",o&&n++}}),t&&(t.style.display=e&&n===0?"block":"none")}function ha(e){if(!p.students.find(d=>d.id===e))return;p.activeStuId=e;const t=p.students.find(d=>d.id===p.activeStuId),n=ae(0,t.weekStart||0);let a=0,i=0,o=0;for(let d=0;d<7;d++){const m=p.tasks[`${t.id}_${G(ee(n,d))}`]||[];a+=m.length,i+=m.filter(u=>u.done).length,o+=m.reduce((u,v)=>u+Number(v.duration||0),0)}const s=a>0?Math.round(i/a*100):0,r=s>=80?"var(--green)":s>=50?"var(--accent)":"var(--red)",l=document.getElementById("view-student-detail");l.innerHTML=`
    <button class="back-link" onclick="switchTab('students')">← Öğrencilerim</button>

    <!-- Öğrenci başlık -->
    <div style="display:flex;align-items:flex-start;gap:18px;padding-bottom:24px;border-bottom:1px solid var(--border);margin-bottom:0">
      <div style="width:52px;height:52px;border-radius:12px;background:${t.color};display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:800;color:#fff;flex-shrink:0">${t.name[0]}</div>
      <div style="flex:1;min-width:0">
        <div style="font-size:20px;font-weight:800;letter-spacing:-.3px;line-height:1.2">${g(t.name)}</div>
        <div style="font-size:13px;color:var(--text-mid);margin-top:3px">${g(t.target||"Hedef belirtilmemiş")}</div>
        <div style="display:flex;gap:28px;margin-top:14px;flex-wrap:wrap">
          <div><div style="font-size:22px;font-weight:800;color:var(--accent);line-height:1;letter-spacing:-.5px">${a}</div><div style="font-size:10px;color:var(--text-dim);text-transform:uppercase;letter-spacing:.5px;margin-top:3px;font-weight:600">Bu Hafta</div></div>
          <div><div style="font-size:22px;font-weight:800;color:var(--green);line-height:1;letter-spacing:-.5px">${i}</div><div style="font-size:10px;color:var(--text-dim);text-transform:uppercase;letter-spacing:.5px;margin-top:3px;font-weight:600">Tamamlanan</div></div>
          <div><div style="font-size:22px;font-weight:800;color:${r};line-height:1;letter-spacing:-.5px">%${s}</div><div style="font-size:10px;color:var(--text-dim);text-transform:uppercase;letter-spacing:.5px;margin-top:3px;font-weight:600">Oran</div></div>
          <div><div style="font-size:22px;font-weight:800;color:var(--blue);line-height:1;letter-spacing:-.5px">${Math.round(o/60)}s</div><div style="font-size:10px;color:var(--text-dim);text-transform:uppercase;letter-spacing:.5px;margin-top:3px;font-weight:600">Çalışma</div></div>
        </div>
      </div>
      <div style="display:flex;gap:8px;flex-shrink:0;padding-top:4px">
        <button class="btn btn-ghost btn-sm" onclick="switchTab('messages');setTimeout(()=>selectThread('${t.id}'),100)" style="gap:5px">💬 Mesaj</button>
        <button class="btn btn-ghost btn-sm" onclick="openStudentModal('${t.id}')" style="gap:5px">✏️ Düzenle</button>
      </div>
    </div>

    <!-- Sekme navigasyonu -->
    <div style="display:flex;gap:0;border-bottom:1px solid var(--border);margin-bottom:24px;overflow-x:auto">
      ${[{label:"Program",icon:"📋",fn:`openStudentProgram('${t.id}')`},{label:"Denemeler",icon:"📊",fn:`openStudentExams('${t.id}')`},{label:"Randevular",icon:"📅",fn:`openStudentAppointments('${t.id}')`},{label:"Notlar",icon:"📝",fn:`openStudentNotes('${t.id}')`},{label:"Kaynak İlerlemesi",icon:"📖",fn:`openStudentKaynaklar('${t.id}')`},{label:"Konu Haritası",icon:"🗺️",fn:`openKonuHaritasi('${t.id}')`},{label:"Hız",icon:"⚡",fn:`openSpeedModal('${t.id}')`},{label:"Rapor",icon:"📄",fn:`openReportModal('${t.id}')`},{label:"Geçmiş Raporlar",icon:"🗂️",fn:`openPastReports('${t.id}')`}].map(d=>`<button onclick="${d.fn}" style="display:flex;align-items:center;gap:6px;padding:14px 18px;background:none;border:none;border-bottom:2px solid transparent;font-size:13px;font-weight:600;color:var(--text-mid);cursor:pointer;white-space:nowrap;font-family:inherit;transition:all .15s" onmouseover="this.style.color='var(--text)';this.style.borderBottomColor='var(--border2)'" onmouseout="this.style.color='var(--text-mid)';this.style.borderBottomColor='transparent'">${d.icon} ${d.label}</button>`).join("")}
    </div>

    <!-- Haftalık ilerleme -->
    <div style="background:var(--surface);border:1px solid var(--border);border-radius:12px;padding:20px 24px;margin-bottom:16px;box-shadow:var(--shadow)">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:12px">
        <div>
          <div style="font-size:13px;font-weight:700;color:var(--text)">Haftalık İlerleme</div>
          <div style="font-size:12px;color:var(--text-dim);margin-top:2px">${i} tamamlandı · ${a-i} kaldı · ${Math.round(o/60)} saat</div>
        </div>
        <div style="font-size:28px;font-weight:800;color:${r};letter-spacing:-.5px">%${s}</div>
      </div>
      <div style="height:8px;background:var(--surface3);border-radius:99px;overflow:hidden">
        <div style="height:100%;width:${s}%;background:${r};border-radius:99px;transition:width .6s cubic-bezier(.4,0,.2,1)"></div>
      </div>
      <div style="display:flex;justify-content:space-between;margin-top:10px">
        <span style="font-size:11px;color:var(--text-dim)">0%</span>
        <span style="font-size:11px;color:var(--text-dim)">100%</span>
      </div>
    </div>

    <!-- ÖĞRENCİYE NOT -->
    <div class="card" style="margin-bottom:16px;padding:18px 24px;border-radius:12px">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:10px">
        <div style="font-size:13px;font-weight:700;color:var(--text)">💌 Öğrenciye Notun</div>
        <span style="font-size:10px;color:var(--text-dim)">Yolculuğum sayfasında görünür</span>
      </div>
      <textarea id="coachNoteInput" placeholder="Öğrenciye kişisel bir söz, motivasyon notu ya da hatırlatma yaz..." style="width:100%;min-height:70px;background:var(--surface2);border:1.5px solid var(--border);border-radius:9px;padding:10px 13px;font-size:13px;color:var(--text);outline:none;resize:vertical;font-family:inherit;box-sizing:border-box"></textarea>
      <button class="btn btn-accent btn-sm" style="margin-top:8px" onclick="saveCoachNoteForStudent('${t.id}')">Kaydet</button>
    </div>

    <!-- AI COPILOT SECTION -->
    <div class="card" style="margin-top:16px; border: 1px dashed var(--accent); padding: 18px; border-radius: 14px; background: var(--surface)">
      <div style="display:flex; align-items:center; gap:8px; margin-bottom:12px">
        <span style="font-size:24px">🤖</span>
        <div>
          <h3 style="margin:0; font-family:'Inter',sans-serif; font-size:16px; font-weight:800">Yapay Zeka Copilot</h3>
          <p style="margin:2px 0 0 0; font-size:11px; color:var(--text-dim)">Öğrencinin haftalık performans verilerini analiz ederek kişiselleştirilmiş bir mesaj taslağı hazırlayın.</p>
        </div>
      </div>
      
      <div style="margin-bottom:12px">
        <button id="aiCopilotBtn" class="btn btn-accent btn-sm" onclick="generateAICopilotDraft('${t.id}')">🤖 Durum Analizi Yap ve Taslak Oluştur</button>
      </div>
      
      <div id="aiCopilotResultArea" style="display:none; margin-top:12px">
        <div id="aiCopilotAnalysisBox" style="background:var(--surface2); border:1px solid var(--border); padding:12px; border-radius:8px; font-size:12px; margin-bottom:12px; line-height:1.5">
          <!-- Analiz buraya gelecek -->
        </div>
        <div style="background:var(--accent-dim); border:1px solid var(--accent); color:var(--accent); padding:10px; border-radius:8px; font-size:11px; margin-bottom:10px">
          💡 <b>Önemli Not:</b> Yapay zekanın hazırladığı taslak aşağıdadır. Gönderebilmek için taslağı en az bir karakter değiştirecek şekilde düzenlemelisiniz.
        </div>
        <div class="field">
          <label style="font-size:11px; font-weight:700">Mesaj Taslağı (Düzenlenmesi Zorunlu)</label>
          <textarea id="aiCopilotTextarea" style="width:100%; min-height:150px; font-family:inherit; font-size:13px; line-height:1.5; padding:10px; border-radius:8px; border:1px solid var(--border); background:var(--surface2); color:var(--text)" oninput="checkCopilotDraftEdited()"></textarea>
        </div>
        <div style="display:flex; flex-direction:column; gap:8px; margin-top:10px">
          <div style="display:flex; gap:8px; flex-wrap:wrap">
            <button id="aiCopilotSendBtn" class="btn btn-accent btn-sm" onclick="sendCopilotDraft('${t.id}')" style="background:var(--green); border-color:var(--green); color:white; flex:1; min-width:200px" disabled>✍️ Kaydet ve Öğrenciye Gönder</button>
            <button class="btn btn-ghost btn-sm" onclick="shareCopilotWhatsApp()" style="flex:1; min-width:200px">💬 WhatsApp ile Veliye Gönder</button>
          </div>
          <span id="aiCopilotEditWarning" style="color:var(--red); font-size:11px; font-weight:bold">Öğrenciye gönderebilmek için taslak üzerinde en az bir değişiklik yapmalısınız.</span>
        </div>
      </div>
    </div>`,currentTab!=="student-detail"&&le("student-detail");const c=document.getElementById("tbarTitle");c&&(c.textContent=t.name),co(e)}async function co(e){try{const{data:t}=await h.from("student_profiles").select("coach_note").eq("id",e).maybeSingle(),n=document.getElementById("coachNoteInput");n&&p.activeStuId===e&&(n.value=(t==null?void 0:t.coach_note)||"")}catch{}}async function po(e){var a;const t=((a=document.getElementById("coachNoteInput"))==null?void 0:a.value.trim())||"",{error:n}=await h.from("student_profiles").upsert({id:e,coach_note:t},{onConflict:"id"});if(n)return b("Not kaydedilemedi: "+n.message);b("Öğrenciye notun kaydedildi ✓")}window.saveCoachNoteForStudent=po;const Ke=[{stars:0,label:"Başlanmadı",color:"#6b7280",bg:"rgba(107,114,128,.08)",border:"rgba(107,114,128,.2)"},{stars:1,label:"Anlamadım",color:"#ef4444",bg:"rgba(239,68,68,.08)",border:"rgba(239,68,68,.2)"},{stars:2,label:"Temel Zorluk",color:"#f97316",bg:"rgba(249,115,22,.08)",border:"rgba(249,115,22,.2)"},{stars:3,label:"Temel OK",color:"#eab308",bg:"rgba(234,179,8,.08)",border:"rgba(234,179,8,.2)"},{stars:4,label:"Orta Seviye",color:"#84cc16",bg:"rgba(132,204,22,.08)",border:"rgba(132,204,22,.2)"},{stars:5,label:"İleri Seviye",color:"#22c55e",bg:"rgba(34,197,94,.08)",border:"rgba(34,197,94,.2)"},{stars:6,label:"Uzman",color:"#10b981",bg:"rgba(16,185,129,.08)",border:"rgba(16,185,129,.2)"},{stars:7,label:"Tekrar Dışı (TD)",color:"#3b82f6",bg:"rgba(59,130,246,.1)",border:"rgba(59,130,246,.3)"}];function ka(e){const t=new Date(e),n=t.getDate(),a=n<=10?1:n<=20?11:21;return`${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,"0")}-${String(a).padStart(2,"0")}`}function uo(e=6){const t=[],n=new Date;let a=new Date(n);for(let i=0;i<e;i++){const o=ka(a);t.find(c=>c.start===o)||t.unshift({start:o,label:mo(o)});const[s,r,l]=o.split("-").map(Number);if(l===21?a=new Date(s,r-1,11):l===11?a=new Date(s,r-1,1):a=new Date(s,r-2,21),t.length>=e)break}return t.slice(-e)}function mo(e){const[t,n,a]=e.split("-").map(Number),i=["Oca","Şub","Mar","Nis","May","Haz","Tem","Ağu","Eyl","Eki","Kas","Ara"],o=a===1?10:a===11?20:new Date(t,n,0).getDate();return`${a}-${o} ${i[n-1]}`}const Xn={SAY:["Dil Bilgisi","TYT Matematik","AYT Matematik","Geometri","TYT Fizik","AYT Fizik","TYT Kimya","AYT Kimya","TYT Biyoloji","AYT Biyoloji"],EA:["Dil Bilgisi","TYT Matematik","AYT Matematik","Geometri","AYT Edebiyat","Tarih (TYT-AYT)","Coğrafya (TYT-AYT)","Felsefe Grubu & Din"],SOZ:["Dil Bilgisi","TYT Matematik","Geometri","AYT Edebiyat","Tarih (TYT-AYT)","Coğrafya (TYT-AYT)","Felsefe Grubu & Din"],DIL:["Dil Bilgisi","TYT Matematik","Geometri","YDT İngilizce"]};async function go(e){const t=p.students.find(y=>y.id===e);if(!t)return;const n=document.getElementById("view-student-detail");n.innerHTML=`<button class="back-link" onclick="openStudentDetail('${e}')">← ${g(t.name)}</button><div style="padding:20px;color:var(--text-dim);font-size:13px">Yükleniyor…</div>`;const a=x.role==="coach"||x.role==="developer",i=t.yksArea||"SAY",o=Xn[i]||Xn.SAY;let s=o[0],r="mastery";function l(y,$){var w,I;return((I=(w=p.konuMastery[e])==null?void 0:w[y])==null?void 0:I[$])||null}function c(y,$){var w,I;return((I=(w=p.konuTekrarLog[e])==null?void 0:w[y])==null?void 0:I[$])||{}}async function d(y,$,w,I){const T=l(y,$),B=new Date().toISOString(),S=I||(w>=7?"td":w>0?"active":"not_started"),M={student_id:e,coach_id:x.coachId,subject:y,konu:$,stars:w,status:S,updated_at:B,...S==="active"&&!(T!=null&&T.ka_date)?{ka_date:B}:{},...S==="td"&&!(T!=null&&T.td_date)?{td_date:B}:{},...S==="active"&&(T==null?void 0:T.status)==="td"?{td_date:null}:{}},{data:E,error:A}=await h.from("konu_mastery").upsert(M,{onConflict:"student_id,subject,konu"}).select().single();if(A){b("Hata: "+A.message);return}return p.konuMastery[e]||(p.konuMastery[e]={}),p.konuMastery[e][y]||(p.konuMastery[e][y]={}),p.konuMastery[e][y][$]=E,E}async function m(y,$,w,I){const T=new Date().toISOString(),B={student_id:e,coach_id:x.coachId,subject:y,konu:$,period_start:w,review_count:I,updated_at:T},{data:S,error:M}=await h.from("konu_tekrar_log").upsert(B,{onConflict:"student_id,subject,konu,period_start"}).select().single();if(M){b("Hata: "+M.message);return}return p.konuTekrarLog[e]||(p.konuTekrarLog[e]={}),p.konuTekrarLog[e][y]||(p.konuTekrarLog[e][y]={}),p.konuTekrarLog[e][y][$]||(p.konuTekrarLog[e][y][$]={}),p.konuTekrarLog[e][y][$][w]=S,S}function u(y){const $=kt[y]||[],w=$.map((E,A)=>{const P=l(y,E),D=(P==null?void 0:P.stars)||0,_=(P==null?void 0:P.status)||"not_started",L=Ke[D],j=_==="td",K=A%2===0?"var(--surface)":"var(--surface2)",F=c(y,E),z=Object.values(F).reduce((W,R)=>W+(R.review_count||0),0),N=P!=null&&P.last_review_date?new Date(P.last_review_date).toLocaleDateString("tr-TR",{day:"2-digit",month:"short"}):"—",J=a?Array.from({length:7},(W,R)=>{const H=R+1,Y=H<=D,Q=y.replace(/'/g,"\\'"),U=E.replace(/'/g,"\\'");return`<span class="km-star${Y?" km-star-on":""}" data-stars="${H}" 
          onclick="window._kmSetStars('${Q}','${U}',${H})"
          title="${Ke[H].label}"
          style="cursor:pointer;font-size:16px;line-height:1;transition:transform .1s;display:inline-block"
          onmouseover="this.style.transform='scale(1.25)'" onmouseout="this.style.transform='scale(1)'"
        >${Y?"⭐":"☆"}</span>`}).join(""):Array.from({length:7},(W,R)=>`<span style="font-size:14px;opacity:${R<D?1:.25}">${R<D?"⭐":"☆"}</span>`).join("");let O="";return j?O='<span style="font-size:9px;font-weight:800;color:#3b82f6;background:rgba(59,130,246,.12);border:1px solid rgba(59,130,246,.3);border-radius:4px;padding:1px 5px;margin-left:4px">TD</span>':P!=null&&P.ka_date&&(O='<span style="font-size:9px;font-weight:700;color:#10b981;background:rgba(16,185,129,.1);border:1px solid rgba(16,185,129,.2);border-radius:4px;padding:1px 5px;margin-left:4px">KA✓</span>'),`<tr id="${"km_"+btoa(encodeURIComponent(y+"|"+E)).replace(/[^a-zA-Z0-9]/g,"")}" style="background:${L.bg};border-bottom:1px solid ${L.border};transition:background .3s">
        <td style="padding:10px 14px;font-size:12px;font-weight:600;color:var(--text);min-width:200px;position:sticky;left:0;z-index:1;background:${K};border-right:1px solid var(--border)">
          ${g(E)}${O}
        </td>
        <td style="padding:8px 12px;white-space:nowrap">
          ${J}
        </td>
        <td style="padding:8px 10px;font-size:11px;font-weight:700;color:${L.color};white-space:nowrap">
          ${D>0?L.label:'<span style="color:var(--text-dim)">—</span>'}
        </td>
        <td style="padding:8px 10px;text-align:center;font-size:11px;color:var(--text-mid);white-space:nowrap">
          ${z>0?`<b style="color:var(--text)">${z}×</b>`:"—"}
        </td>
        <td style="padding:8px 10px;text-align:center;font-size:11px;color:var(--text-dim);white-space:nowrap">${N}</td>
        ${a?`<td style="padding:8px 8px;text-align:center;white-space:nowrap">
          <button onclick="window._kmToggleKA('${y.replace(/'/g,"\\'")}','${E.replace(/'/g,"\\'")}')" 
            style="font-size:10px;padding:3px 7px;border-radius:5px;border:1px solid var(--border);background:var(--surface2);color:var(--text-mid);cursor:pointer;margin-right:4px" 
            title="Konu Anlatımı tamamlandı">KA</button>
          <button onclick="window._kmToggleTD('${y.replace(/'/g,"\\'")}','${E.replace(/'/g,"\\'")}')" 
            style="font-size:10px;padding:3px 7px;border-radius:5px;border:1px solid ${j?"#3b82f6":"var(--border)"};background:${j?"rgba(59,130,246,.15)":"var(--surface2)"};color:${j?"#3b82f6":"var(--text-mid)"};cursor:pointer;font-weight:${j?"800":"400"}" 
            title="Tekrar Dışı">TD</button>
        </td>`:""}
      </tr>`}).join(""),I=$.map(E=>l(y,E)),T=Array(8).fill(0);I.forEach(E=>T[(E==null?void 0:E.stars)||0]++);const B=I.filter(E=>(E==null?void 0:E.status)==="td").length,S=I.filter(E=>(E==null?void 0:E.status)==="active").length;return`<div style="display:flex;gap:12px;flex-wrap:wrap;padding:12px 16px;background:var(--surface2);border-bottom:1px solid var(--border);align-items:center">
      <span style="font-size:11px;color:var(--text-dim)"><b style="color:var(--text)">${$.length}</b> konu</span>
      <span style="font-size:11px;color:var(--text-dim)"><b style="color:#3b82f6">${B}</b> TD</span>
      <span style="font-size:11px;color:var(--text-dim)"><b style="color:#22c55e">${S}</b> aktif</span>
      <span style="font-size:11px;color:var(--text-dim)"><b style="color:#6b7280">${T[0]}</b> başlanmadı</span>
      <div style="flex:1;height:6px;background:var(--surface3);border-radius:99px;overflow:hidden;min-width:80px;max-width:200px">
        <div style="height:100%;width:${$.length>0?Math.round(B/$.length*100):0}%;background:#3b82f6;border-radius:99px"></div>
      </div>
      <span style="font-size:11px;color:#3b82f6;font-weight:700">${$.length>0?Math.round(B/$.length*100):0}% TD</span>
    </div>`+`<div style="overflow-x:auto">
      <table style="border-collapse:collapse;width:100%">
        <thead>
          <tr style="background:var(--surface2)">
            <th style="padding:8px 14px;text-align:left;font-size:10px;font-weight:800;color:var(--text-dim);border-right:1px solid var(--border);position:sticky;left:0;z-index:2;background:var(--surface2);white-space:nowrap;min-width:200px">KONU</th>
            <th style="padding:8px 12px;text-align:left;font-size:10px;font-weight:800;color:var(--text-dim);white-space:nowrap">HAKİMİYET</th>
            <th style="padding:8px 10px;text-align:left;font-size:10px;font-weight:800;color:var(--text-dim);white-space:nowrap">SEVİYE</th>
            <th style="padding:8px 10px;text-align:center;font-size:10px;font-weight:800;color:var(--text-dim);white-space:nowrap">TEKRAR</th>
            <th style="padding:8px 10px;text-align:center;font-size:10px;font-weight:800;color:var(--text-dim);white-space:nowrap">SON TEKRAR</th>
            ${a?'<th style="padding:8px 8px;text-align:center;font-size:10px;font-weight:800;color:var(--text-dim);white-space:nowrap">İŞLEMLER</th>':""}
          </tr>
        </thead>
        <tbody>${w}</tbody>
      </table>
    </div>`}function v(y){const $=kt[y]||[],w=uo(6),I=ka(new Date),T=`<tr style="background:var(--surface2)">
      <th style="padding:8px 14px;text-align:left;font-size:10px;font-weight:800;color:var(--text-dim);border-right:1px solid var(--border);position:sticky;left:0;z-index:2;background:var(--surface2);white-space:nowrap;min-width:200px">KONU</th>
      <th style="padding:8px 8px;text-align:left;font-size:10px;font-weight:800;color:var(--text-dim);white-space:nowrap;min-width:60px">⭐</th>
      ${w.map(S=>`<th style="padding:8px 10px;text-align:center;font-size:10px;font-weight:800;color:${S.start===I?"var(--accent)":"var(--text-dim)"};background:${S.start===I?"var(--accent-dim)":"var(--surface2)"};white-space:nowrap;min-width:100px;border-left:1px solid var(--border)">${S.label}</th>`).join("")}
      <th style="padding:8px 10px;text-align:center;font-size:10px;font-weight:800;color:var(--text-dim);white-space:nowrap;border-left:2px solid var(--border)">TOPLAM</th>
    </tr>`,B=$.map((S,M)=>{const E=l(y,S),A=(E==null?void 0:E.stars)||0,D=((E==null?void 0:E.status)||"not_started")==="td",_=Ke[A],L=M%2===0?"var(--surface)":"var(--surface2)",j=c(y,S);let K=0;const F=w.map(N=>{const J=j[N.start],O=(J==null?void 0:J.review_count)||0;K+=O;const q=N.start===I;if(a){const W=Array.from({length:6},(R,H)=>{const Y=H<O,Q=y.replace(/'/g,"\\'"),U=S.replace(/'/g,"\\'");return`<span class="kt-box${Y?" kt-box-on":""}"
              onclick="window._ktToggleBox('${Q}','${U}','${N.start}',${H+1})"
              style="display:inline-block;width:14px;height:14px;border-radius:3px;border:1.5px solid ${Y?_.color:"var(--border2)"};background:${Y?_.bg:"transparent"};cursor:pointer;transition:all .15s;margin:1px"
              title="${H+1}. tekrar"
            ></span>`}).join("");return`<td style="padding:6px 10px;border-left:1px solid var(--border);background:${q?"var(--accent-dim)":L};text-align:center">${W}</td>`}else{const W=Array.from({length:6},(R,H)=>{const Y=H<O;return`<span style="display:inline-block;width:12px;height:12px;border-radius:3px;border:1.5px solid ${Y?_.color:"var(--border2)"};background:${Y?_.bg:"transparent"};margin:1px"></span>`}).join("");return`<td style="padding:6px 10px;border-left:1px solid var(--border);background:${q?"var(--accent-dim)":L};text-align:center">${W}</td>`}}).join(""),z=D?'<span style="font-size:9px;font-weight:800;color:#3b82f6;background:rgba(59,130,246,.12);border:1px solid rgba(59,130,246,.3);border-radius:4px;padding:1px 5px;margin-left:4px">TD</span>':"";return`<tr style="background:${L}">
        <td style="padding:8px 14px;font-size:12px;font-weight:600;color:var(--text);border-right:1px solid var(--border);position:sticky;left:0;z-index:1;background:${L};white-space:nowrap">
          ${g(S)}${z}
        </td>
        <td style="padding:8px 8px;white-space:nowrap">
          <span style="font-size:11px">${"⭐".repeat(Math.max(0,A))}</span>
        </td>
        ${F}
        <td style="padding:8px 10px;text-align:center;font-size:12px;font-weight:800;color:${K>0?_.color:"var(--text-dim)"};border-left:2px solid var(--border)">${K||0}</td>
      </tr>`}).join("");return`<div style="overflow-x:auto"><table style="border-collapse:collapse;width:max-content;min-width:100%"><thead>${T}</thead><tbody>${B}</tbody></table></div>`}window._kmSetStars=async function(y,$,w){const I=l(y,$),T=(I==null?void 0:I.status)==="td"&&w<7?"active":null;await d(y,$,w,T);const B="km_"+btoa(encodeURIComponent(y+"|"+$)).replace(/[^a-zA-Z0-9]/g,"");if(document.getElementById(B)){const M=u(y);document.getElementById("khTable").innerHTML=M}b(`${$}: ${Ke[w].label} ✓`)},window._kmToggleKA=async function(y,$){const w=l(y,$),I=new Date().toISOString(),T=!!(w!=null&&w.ka_date),B={student_id:e,coach_id:x.coachId,subject:y,konu:$,stars:(w==null?void 0:w.stars)||1,status:(w==null?void 0:w.status)||"active",ka_date:T?null:I,updated_at:I},{data:S,error:M}=await h.from("konu_mastery").upsert(B,{onConflict:"student_id,subject,konu"}).select().single();if(M){b("Hata: "+M.message);return}p.konuMastery[e]||(p.konuMastery[e]={}),p.konuMastery[e][y]||(p.konuMastery[e][y]={}),p.konuMastery[e][y][$]=S,document.getElementById("khTable").innerHTML=u(y),b(T?"KA tarihi kaldırıldı":"KA ✓ tamamlandı olarak işaretlendi")},window._kmToggleTD=async function(y,$){const w=l(y,$),I=(w==null?void 0:w.status)==="td",T=I?(w==null?void 0:w.stars)>=7?5:w==null?void 0:w.stars:7;await d(y,$,T,I?"active":"td"),document.getElementById("khTable").innerHTML=r==="mastery"?u(y):v(y),b(I?`${$} tekrar listesine geri döndü`:`${$} → TD ✓`)},window._ktToggleBox=async function(y,$,w,I){const B=c(y,$)[w],M=((B==null?void 0:B.review_count)||0)>=I?I-1:I;if(await m(y,$,w,M),M>0){const E=l(y,$),A=new Date().toISOString(),P={student_id:e,coach_id:x.coachId,subject:y,konu:$,stars:(E==null?void 0:E.stars)||0,status:(E==null?void 0:E.status)||"active",last_review_date:A,review_count:((E==null?void 0:E.review_count)||0)+1,updated_at:A},{data:D}=await h.from("konu_mastery").upsert(P,{onConflict:"student_id,subject,konu"}).select().single();D&&(p.konuMastery[e]||(p.konuMastery[e]={}),p.konuMastery[e][y]||(p.konuMastery[e][y]={}),p.konuMastery[e][y][$]=D)}document.getElementById("khTable").innerHTML=v(y)};function f(){const y=window._khActiveSub||s;document.getElementById("khTable").innerHTML=r==="mastery"?u(y):v(y)}const k=o.map(y=>`<button class="kh-tab" onclick="window._khActiveSub='${y}';document.querySelectorAll('.kh-tab').forEach(b=>{b.style.color='var(--text-mid)';b.style.borderBottom='2px solid transparent';b.style.fontWeight='600'});this.style.color='var(--accent)';this.style.borderBottom='2px solid var(--accent)';this.style.fontWeight='700';window._khRefresh()"
      style="padding:10px 16px;border:none;border-bottom:2px solid ${y===s?"var(--accent)":"transparent"};background:none;font-size:12px;font-weight:${y===s?"700":"600"};color:${y===s?"var(--accent)":"var(--text-mid)"};cursor:pointer;white-space:nowrap;font-family:inherit;transition:all .15s">${y}</button>`).join("");window._khActiveSub=s,window._khRefresh=f,n.innerHTML=`
    <button class="back-link" onclick="openStudentDetail('${e}')">← ${g(t.name)}</button>
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:16px;flex-wrap:wrap;gap:10px">
      <div style="font-size:18px;font-weight:800;letter-spacing:-.2px">${g(t.name)} — Konu Haritası</div>
      <div style="display:flex;gap:8px;align-items:center">
        <div style="display:flex;border:1.5px solid var(--border);border-radius:8px;overflow:hidden;font-size:12px">
          <button id="kmViewMastery" onclick="window._kmSwitchView('mastery')" style="padding:7px 14px;border:none;border-right:1px solid var(--border);background:var(--accent);color:#fff;font-weight:700;cursor:pointer;font-family:inherit">⭐ Hakimiyet</button>
          <button id="kmViewTekrar" onclick="window._kmSwitchView('tekrar')" style="padding:7px 14px;border:none;background:var(--surface);color:var(--text-mid);font-weight:600;cursor:pointer;font-family:inherit">🔄 Tekrar Takvimi</button>
        </div>
      </div>
    </div>

    <!-- Yıldız açıklama rehberi (collapsible) -->
    <details style="margin-bottom:12px;background:var(--surface);border:1px solid var(--border);border-radius:10px;overflow:hidden">
      <summary style="padding:10px 16px;font-size:12px;font-weight:700;cursor:pointer;color:var(--text-mid);list-style:none;display:flex;align-items:center;gap:6px">
        ℹ️ Yıldız Seviye Rehberi
        <svg style="width:14px;height:14px;margin-left:auto" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path d="m6 9 6 6 6-6"/></svg>
      </summary>
      <div style="padding:12px 16px;border-top:1px solid var(--border);display:flex;flex-wrap:wrap;gap:8px">
        ${Ke.slice(1).map(y=>`
          <div style="display:flex;align-items:center;gap:6px;font-size:11px">
            <span style="font-weight:800;color:${y.color}">⭐${y.stars}</span>
            <span style="color:var(--text-mid)">${y.label}</span>
          </div>`).join('<span style="color:var(--border2)">·</span>')}
      </div>
    </details>

    <div style="background:var(--surface);border:1px solid var(--border);border-radius:12px;overflow:hidden;box-shadow:var(--shadow)">
      <div style="display:flex;border-bottom:1px solid var(--border);overflow-x:auto;padding:0 4px">${k}</div>
      <div id="khTable" style="overflow-x:auto;max-height:calc(100vh - 310px);overflow-y:auto">${u(s)}</div>
    </div>`,window._kmSwitchView=function(y){r=y;const $=document.getElementById("kmViewMastery"),w=document.getElementById("kmViewTekrar");y==="mastery"?($.style.background="var(--accent)",$.style.color="#fff",$.style.fontWeight="700",w.style.background="var(--surface)",w.style.color="var(--text-mid)",w.style.fontWeight="600"):(w.style.background="var(--accent)",w.style.color="#fff",w.style.fontWeight="700",$.style.background="var(--surface)",$.style.color="var(--text-mid)",$.style.fontWeight="600"),window._khRefresh()}}function En(e){var i,o;p.activeStuId=e;const t=document.getElementById("view-program"),n=((i=p.students.find(s=>s.id===p.activeStuId))==null?void 0:i.name)||"";t.innerHTML=`<button class="back-link" onclick="switchTab('student-detail')">← ${n}</button>`,t.innerHTML+=document.createElement("div").innerHTML,currentTab!=="program"&&le("program");const a=document.getElementById("tbarTitle");a&&(a.textContent=(((o=p.students.find(s=>s.id===p.activeStuId))==null?void 0:o.name)||"")+" · Program"),ne()}function fo(e){var n;p.activeStuId=e,currentTab!=="exams"&&le("exams");const t=document.getElementById("tbarTitle");t&&(t.textContent=(((n=p.students.find(a=>a.id===p.activeStuId))==null?void 0:n.name)||"")+" · Denemeler"),Be()}function yo(e){p.activeStuId=e,ue.studentId=e,le("todolist")}let we={};async function vo(e){const t=p.students.find(a=>a.id===e);if(!t)return;p.activeStuId=e,currentTab!=="student-detail"&&le("student-detail");const n=document.getElementById("view-student-detail");if(n.innerHTML=`<button class="back-link" onclick="openStudentDetail('${e}')">← ${g(t.name)}</button>
    <div style="padding:20px;color:var(--text-dim);font-size:13px">Yükleniyor…</div>`,!we[e]){const{data:a}=await h.from("student_books").select("*").eq("student_id",e).order("created_at",{ascending:!0});we[e]=a||[]}Tn(e)}function Tn(e){const t=p.students.find(d=>d.id===e),n=we[e]||[],a=document.getElementById("view-student-detail"),i=x.role==="coach"||x.role==="developer",o=n.reduce((d,m)=>d+m.total_tests,0),s=n.reduce((d,m)=>d+m.completed_tests,0),r=o>0?Math.round(s/o*100):0,l=r>=75?"var(--green)":r>=40?"var(--accent)":"var(--red)",c=n.length?n.map(d=>{const m=d.total_tests>0?Math.min(100,Math.round(d.completed_tests/d.total_tests*100)):0,u=m>=75?"var(--green)":m>=40?"var(--accent)":"var(--red)";return`<div style="background:var(--surface);border:1px solid var(--border);border-radius:12px;padding:14px 16px;margin-bottom:10px">
      <div style="display:flex;align-items:center;gap:12px">
        <div style="flex:1;min-width:0">
          <div style="font-size:13px;font-weight:700;margin-bottom:7px">${g(d.name)}</div>
          <div style="display:flex;align-items:center;gap:10px">
            <div style="flex:1;height:7px;background:var(--surface3);border-radius:99px;overflow:hidden">
              <div style="height:100%;width:${m}%;background:${u};border-radius:99px;transition:width .4s"></div>
            </div>
            <span style="font-size:12px;font-weight:800;color:${u};white-space:nowrap;min-width:36px;text-align:right">%${m}</span>
          </div>
          <div style="font-size:11px;color:var(--text-dim);margin-top:4px">${d.completed_tests} / ${d.total_tests} test tamamlandı</div>
        </div>
        ${i?`<div style="display:flex;gap:6px;flex-shrink:0">
          <button class="btn btn-ghost btn-xs" onclick="editStudentBook('${e}','${d.id}')">✏️</button>
          <button class="btn btn-danger btn-xs" onclick="deleteStudentBook('${e}','${d.id}')" style="opacity:.4" onmouseover="this.style.opacity=1" onmouseout="this.style.opacity=.4">🗑</button>
        </div>`:""}
      </div>
    </div>`}).join(""):'<div class="empty"><p>Henüz kaynak eklenmemiş.</p></div>';a.innerHTML=`
    <button class="back-link" onclick="openStudentDetail('${e}')">← ${g(t.name)}</button>
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:16px">
      <div>
        <div style="font-size:18px;font-weight:800;letter-spacing:-.2px">${g(t.name)} — Kaynaklar</div>
        <div style="font-size:12px;color:var(--text-dim);margin-top:2px">${n.length} kaynak · ${s}/${o} test tamamlandı</div>
      </div>
      ${i?`<button class="btn btn-accent btn-sm" onclick="addStudentBook('${e}')">+ Kaynak Ekle</button>`:""}
    </div>
    ${n.length>1?`<div style="background:var(--surface);border:1px solid var(--border);border-radius:12px;padding:14px 16px;margin-bottom:16px;display:flex;align-items:center;gap:14px">
      <div style="flex:1">
        <div style="font-size:11px;font-weight:700;color:var(--text-dim);text-transform:uppercase;letter-spacing:.5px;margin-bottom:6px">Genel İlerleme</div>
        <div style="display:flex;align-items:center;gap:10px">
          <div style="flex:1;height:8px;background:var(--surface3);border-radius:99px;overflow:hidden">
            <div style="height:100%;width:${r}%;background:${l};border-radius:99px;transition:width .4s"></div>
          </div>
          <span style="font-size:14px;font-weight:800;color:${l};white-space:nowrap">%${r}</span>
        </div>
      </div>
    </div>`:""}
    ${c}`}function xo(e){document.getElementById("sbModalTitle").textContent="Kaynak Ekle",document.getElementById("sbId").value="",document.getElementById("sbStuId").value=e,document.getElementById("sbName").value="",document.getElementById("sbTotal").value="0",document.getElementById("sbCompleted").value="0",document.getElementById("sbPctPreview").innerHTML="",V("sbModal")}function bo(e,t){const n=(we[e]||[]).find(a=>a.id===t);n&&(document.getElementById("sbModalTitle").textContent="Kaynağı Düzenle",document.getElementById("sbId").value=t,document.getElementById("sbStuId").value=e,document.getElementById("sbName").value=n.name,document.getElementById("sbTotal").value=n.total_tests,document.getElementById("sbCompleted").value=n.completed_tests,wa(),V("sbModal"))}function wa(){var o,s;const e=parseInt((o=document.getElementById("sbTotal"))==null?void 0:o.value)||0,t=parseInt((s=document.getElementById("sbCompleted"))==null?void 0:s.value)||0,n=document.getElementById("sbPctPreview");if(!n||!e){n&&(n.innerHTML="");return}const a=Math.min(100,Math.round(t/e*100)),i=a>=75?"var(--green)":a>=40?"var(--accent)":"var(--red)";n.innerHTML=`<div style="display:flex;align-items:center;gap:10px">
    <div style="flex:1;height:8px;background:var(--surface3);border-radius:99px;overflow:hidden">
      <div style="height:100%;width:${a}%;background:${i};border-radius:99px;transition:width .3s"></div>
    </div>
    <span style="font-size:13px;font-weight:800;color:${i}">%${a}</span>
  </div>`}async function ho(){const e=document.getElementById("sbName").value.trim();if(!e)return b("Kaynak adı girin!");const t=Math.max(0,parseInt(document.getElementById("sbTotal").value)||0),n=Math.min(t,Math.max(0,parseInt(document.getElementById("sbCompleted").value)||0)),a=document.getElementById("sbStuId").value,i=document.getElementById("sbId").value,o={name:e,total_tests:t,completed_tests:n};if(i){const{error:s}=await h.from("student_books").update(o).eq("id",i);if(s)return b("Hata: "+s.message);const r=(we[a]||[]).find(l=>l.id===i);r&&Object.assign(r,o),b("Güncellendi ✓")}else{const{data:s,error:r}=await h.from("student_books").insert({...o,student_id:a,coach_id:x.coachId}).select().single();if(r)return b("Hata: "+r.message);we[a]||(we[a]=[]),we[a].push(s),b("Kaynak eklendi ✓")}Z("sbModal"),Tn(a)}async function ko(e,t){if(!await ie("Bu kaynağı silmek istiyor musunuz?"))return;const{error:n}=await h.from("student_books").delete().eq("id",t);if(n)return b("Hata: "+n.message);we[e]=(we[e]||[]).filter(a=>a.id!==t),Tn(e),b("Silindi ✓")}function Sn(){var i,o;const e=document.getElementById("view-profile"),t=x.dbUser,n=((t==null?void 0:t.full_name)||"?").split(" ").map(s=>s[0]).join("").slice(0,2).toUpperCase(),a=x.role==="coach"?"Koç":x.role==="developer"?"Developer":"Öğrenci";e.innerHTML=`
    <div style="max-width:480px;margin:0 auto">
      <!-- Mini user card -->
      <div style="display:flex;align-items:center;gap:14px;padding:20px 24px;background:var(--surface);border:1px solid var(--border);border-radius:12px;margin-bottom:20px;box-shadow:var(--shadow)">
        <div style="width:48px;height:48px;border-radius:12px;background:var(--accent);display:flex;align-items:center;justify-content:center;font-size:18px;font-weight:800;color:#fff;flex-shrink:0">${n}</div>
        <div>
          <div style="font-size:16px;font-weight:800;letter-spacing:-.2px">${g((t==null?void 0:t.full_name)||"")}</div>
          <div style="font-size:12px;color:var(--text-dim);margin-top:2px">${a} · ${g(((i=p.workspace)==null?void 0:i.brand_name)||"Rostrum Akademi")}</div>
        </div>
      </div>

      <!-- Form -->
      <div style="background:var(--surface);border:1px solid var(--border);border-radius:12px;padding:20px 24px;box-shadow:var(--shadow);display:flex;flex-direction:column;gap:16px">
        <div>
          <label style="font-size:11px;font-weight:700;color:var(--text-dim);text-transform:uppercase;letter-spacing:.5px;display:block;margin-bottom:6px">Ad Soyad</label>
          <input id="pf_name" value="${g((t==null?void 0:t.full_name)||"")}" style="width:100%;padding:9px 12px;background:var(--surface2);border:1.5px solid var(--border);border-radius:8px;font-size:13px;font-family:inherit;color:var(--text);outline:none;box-sizing:border-box" onfocus="this.style.borderColor='var(--accent)'" onblur="this.style.borderColor='var(--border)'">
        </div>
        <div>
          <label style="font-size:11px;font-weight:700;color:var(--text-dim);text-transform:uppercase;letter-spacing:.5px;display:block;margin-bottom:6px">Kullanıcı Adı</label>
          <input id="pf_user" value="${g((t==null?void 0:t.username)||"")}" style="width:100%;padding:9px 12px;background:var(--surface2);border:1.5px solid var(--border);border-radius:8px;font-size:13px;font-family:inherit;color:var(--text);outline:none;box-sizing:border-box" onfocus="this.style.borderColor='var(--accent)'" onblur="this.style.borderColor='var(--border)'">
        </div>
        ${x.role==="coach"||x.role==="developer"?`<div>
          <label style="font-size:11px;font-weight:700;color:var(--text-dim);text-transform:uppercase;letter-spacing:.5px;display:block;margin-bottom:6px">Akademi Adı</label>
          <input id="pf_brand" value="${g(((o=p.workspace)==null?void 0:o.brand_name)||"")}" style="width:100%;padding:9px 12px;background:var(--surface2);border:1.5px solid var(--border);border-radius:8px;font-size:13px;font-family:inherit;color:var(--text);outline:none;box-sizing:border-box" onfocus="this.style.borderColor='var(--accent)'" onblur="this.style.borderColor='var(--border)'">
        </div>`:""}
        <div>
          <label style="font-size:11px;font-weight:700;color:var(--text-dim);text-transform:uppercase;letter-spacing:.5px;display:block;margin-bottom:6px">Yeni Şifre <span style="font-weight:400;text-transform:none">(boş bırakılırsa değişmez)</span></label>
          <input type="password" id="pf_pass" placeholder="••••••••" style="width:100%;padding:9px 12px;background:var(--surface2);border:1.5px solid var(--border);border-radius:8px;font-size:13px;font-family:inherit;color:var(--text);outline:none;box-sizing:border-box" onfocus="this.style.borderColor='var(--accent)'" onblur="this.style.borderColor='var(--border)'">
        </div>
        <button class="btn btn-accent" onclick="saveProfile()" style="align-self:flex-start;padding:9px 20px">Kaydet</button>
      </div>
    </div>`}async function wo(){var r,l,c,d;const e=document.getElementById("pf_name").value.trim(),t=document.getElementById("pf_pass").value,n=(l=(r=document.getElementById("pf_brand"))==null?void 0:r.value)==null?void 0:l.trim();if(!e)return b("Ad boş olamaz!");const a={full_name:e},i=((d=(c=document.getElementById("pf_user"))==null?void 0:c.value)==null?void 0:d.trim())||"",o=i.toLowerCase().replace(/[^a-z0-9]/g,"");if(i&&!o)return b("Kullanıcı adı harf/rakam içermeli!");o&&o!==x.dbUser.username&&(a.username=o),t&&(a.password_hash=await Xe(t));const{error:s}=await h.from("users").update(a).eq("id",x.dbUser.id);if(s)return/duplicate|unique|23505/i.test(s.message||"")?b("Bu kullanıcı adı alınmış, başka bir tane deneyin"):b("Kaydedilemedi: "+s.message);n&&(x.role==="coach"||x.role==="developer")&&(await h.from("workspaces").update({brand_name:n}).eq("coach_id",x.coachId),p.workspace={...p.workspace||{},brand_name:n},document.querySelector(".sb-logo-text").textContent=n),x.dbUser={...x.dbUser,full_name:e,...a.username?{username:a.username}:{}},document.getElementById("sbName").textContent=e,b("Profil kaydedildi ✓"),Sn()}function $a(){var n;const e=document.getElementById("view-settings"),t=document.documentElement.getAttribute("data-theme")==="dark";e.innerHTML=`
    <div style="max-width:500px;margin:0 auto">
      <div class="settings-block">
        <div class="settings-block-title">Görünüm</div>
        <div class="setting-item">
          <div><div class="setting-item-lbl">Mod</div></div>
          <div style="display:flex;gap:8px">
            <button class="btn btn-sm ${t?"btn-accent":"btn-ghost"}" onclick="setTheme('dark');renderSettings()">🌙 Karanlık</button>
            <button class="btn btn-sm ${t?"btn-ghost":"btn-accent"}" onclick="setTheme('light');renderSettings()">☀️ Aydınlık</button>
          </div>
        </div>
        <div class="setting-item">
          <div><div class="setting-item-lbl">Accent Rengi</div></div>
          <div class="accent-palette">
            ${wi.map(a=>`<div class="ac-dot" onclick="applyAccent('${a.val}','${a.dim}')" style="background:${a.val}" title="${a.name}"></div>`).join("")}
          </div>
        </div>
      </div>

      ${x.role==="student"||x.role==="parent"?`
      <div class="settings-block" style="margin-top:20px">
        <div class="settings-block-title">✨ Premium Deneyim</div>
        ${[["focus","Odaklanma Modu","Görevlere tam ekran, buzlu cam efektli geri sayım seansıyla odaklan."],["celebration","Kutlama Efektleri","Net sıçraması ve büyük başarılarda konfeti + kutlama kartı göster."],["sound","Ses Efektleri","Odaklanma seansı bitince hafif bir bildirim sesi çal."],["badges","Easter Egg Rozetleri","Sabah erken / gece geç çalışma gibi gizli başarı rozetlerini göster."]].map(([a,i,o])=>`
        <div class="setting-item">
          <div>
            <div class="setting-item-lbl">${i}</div>
            <div class="setting-item-sub" style="font-size:11px;line-height:1.5;margin-top:2px">${o}</div>
          </div>
          <label class="switch">
            <input type="checkbox" ${Qe(a)?"checked":""} onchange="setFeature('${a}', this.checked)">
            <span class="switch-track"></span>
          </label>
        </div>`).join("")}
      </div>`:""}

      ${x.role==="developer"?`
      <div class="settings-block" style="margin-top:20px">
        <div class="settings-block-title">Yapay Zeka (AI) Geliştirici Ayarları</div>
        <div class="setting-item" style="flex-direction:column;align-items:flex-start;gap:10px">
          <div>
            <div class="setting-item-lbl">Gemini API Anahtarı (Yerel Test)</div>
            <div class="setting-item-sub" style="font-size:11px;line-height:1.5;margin-top:2px">Yalnızca yerel geliştirme ortamı için. Production'da Vercel env kullanılır.</div>
          </div>
          <div style="display:flex;gap:8px;width:100%">
            <input type="text" id="geminiApiKeyInput" value="${g(localStorage.getItem("gemini_api_key")||"")}" placeholder="AIzaSy..." style="flex:1;background:var(--surface2);border:1px solid var(--border);border-radius:8px;padding:8px 12px;color:var(--text);font-size:12px;outline:none" autocomplete="off">
            <button class="btn btn-accent btn-sm" onclick="saveGeminiKey()">Kaydet</button>
          </div>
        </div>
      </div>`:""}

      <div class="settings-block" style="margin-top:20px">
        <div class="settings-block-title">Bildirim Ayarları</div>
        <div class="setting-item">
          <div>
            <div class="setting-item-lbl">Anlık Bildirimler (Push)</div>
            <div class="setting-item-sub" style="font-size:11px;line-height:1.5;margin-top:2px">Yeni mesajlar, ödevler ve deneme yorumları için tarayıcı bildirimlerini etkinleştirin.</div>
          </div>
          <button class="btn btn-accent btn-sm" onclick="requestNotificationPermission()">Etkinleştir</button>
        </div>
      </div>

      ${x.role==="coach"||x.role==="developer"?(()=>{var v;const a=x.dbUser,i=(a==null?void 0:a.plan)||"trial",o=i==="trial"?"Deneme Dönemi":i==="pro"?"Pro Üyelik":i==="premium"?"Premium Üyelik":i.charAt(0).toUpperCase()+i.slice(1),s=i==="trial"?"#f0a500":"#3ecf8e";let r=null;a!=null&&a.trial_ends_at?r=new Date(a.trial_ends_at):a!=null&&a.created_at&&(r=new Date(new Date(a.created_at).getTime()+7*24*60*60*1e3));const c=r?Math.max(0,Math.ceil((r-new Date)/(1e3*60*60*24))):null,d=f=>f?f.toLocaleDateString("tr-TR",{day:"numeric",month:"long",year:"numeric"}):"—",m=c===null?"#888":c>7?"#3ecf8e":c>3?"#f0a500":"#ef4444",u=((v=p.students)==null?void 0:v.length)||0;return`
      <div class="settings-block" style="margin-top:20px">
        <div class="settings-block-title">Üyelik</div>
        <div class="setting-item">
          <div><div class="setting-item-lbl">Plan</div><div class="setting-item-sub" style="color:${s};font-weight:600">${o}</div></div>
        </div>
        <div class="setting-item">
          <div><div class="setting-item-lbl">Bitiş Tarihi</div><div class="setting-item-sub">${d(r)}</div></div>
          ${c!==null?`<span style="background:${m}22;color:${m};font-size:11px;font-weight:700;padding:3px 10px;border-radius:20px">${c} gün</span>`:""}
        </div>
        <div class="setting-item">
          <div><div class="setting-item-lbl">Aktif Öğrenci</div><div class="setting-item-sub">${u} öğrenci</div></div>
        </div>
        <div class="setting-item" style="flex-direction:column;align-items:flex-start;gap:8px">
          <div class="setting-item-lbl">Plan Yükseltme / Yenileme</div>
          <div style="font-size:11px;color:var(--text-dim);line-height:1.5">Üyelik yenileme veya plan değişikliği için destek ekibiyle iletişime geçin.</div>
          <a href="mailto:destek@rostrumakademi.com" style="font-size:12px;color:var(--accent);text-decoration:none;font-weight:600">destek@rostrumakademi.com →</a>
        </div>
      </div>`})():""}

      <div class="settings-block" style="margin-top:20px">
        <div class="settings-block-title">Hesap</div>
        <div class="setting-item">
          <div><div class="setting-item-lbl">Kullanıcı Adı</div><div class="setting-item-sub">${g(((n=x.dbUser)==null?void 0:n.username)||"")}</div></div>
          <button class="btn btn-ghost btn-sm" onclick="switchTab('profile')">Düzenle</button>
        </div>
        ${x.role==="student"?`
        <div class="setting-item" style="flex-direction:column;align-items:flex-start;gap:8px">
          <div class="setting-item-lbl">Şifre Değiştir</div>
          <div style="display:flex;gap:8px;flex-wrap:wrap;width:100%">
            <input type="password" id="newPass1" placeholder="Yeni şifre" style="flex:1;min-width:140px;background:var(--surface2);border:1.5px solid var(--border);border-radius:9px;padding:9px 12px;font-size:13px;font-family:inherit;color:var(--text);outline:none">
            <input type="password" id="newPass2" placeholder="Şifreyi tekrar gir" style="flex:1;min-width:140px;background:var(--surface2);border:1.5px solid var(--border);border-radius:9px;padding:9px 12px;font-size:13px;font-family:inherit;color:var(--text);outline:none">
            <button class="btn btn-accent btn-sm" onclick="changePassword()">Kaydet</button>
          </div>
        </div>`:""}
        <div class="setting-item">
          <div><div class="setting-item-lbl">Oturumu Kapat</div></div>
          <button class="btn btn-danger btn-sm" onclick="doLogout()">Çıkış</button>
        </div>
      </div>
    </div>`}function $o(){const e=document.getElementById("geminiApiKeyInput").value.trim();e?(localStorage.setItem("gemini_api_key",e),b("API Anahtarı kaydedildi ✓")):(localStorage.removeItem("gemini_api_key"),b("API Anahtarı kaldırıldı."))}let Fe="";function _a(e,t,n,a){const i=e.start_time?`<div class="tc-time-badge">🕒 ${e.start_time}</div>`:"",o=a==="coach"?"coach":"student",s=a==="coach"?`toggleTask('${t}',${n})`:`openTaskDetail('${t}',${n},'student','completed')`,r=a==="coach"?`<button class="tc-menu-btn" onclick="event.stopPropagation();showTaskMenu('${t}',${n},this)">⋯</button>`:"";return`
    <div data-task-id="${e._id}" class="task-card task-${e.type} ${e.done?"done":""} ${e.start_time?"hourly-card":""}" onclick="openTaskDetail('${t}',${n},'${o}')" style="cursor:pointer">
      <div class="tc-check ${e.done?"on":""}" onclick="event.stopPropagation();${s}"></div>
      <div class="tc-body">
        ${i}
        <div class="tc-type">${qt(e.type)}${e.exam?" · "+e.exam:""}</div>
        <div class="tc-subject">${g(e.subject)}</div>
        <div class="tc-meta">${e.duration} dk</div>
      </div>
      ${r}
    </div>`}const Qn=7,ea=24,At=44;function _o(e){const t=(e||"0:0").split(":").map(Number);return(t[0]||0)*60+(t[1]||0)}function Eo(e){return e=(e%1440+1440)%1440,String(Math.floor(e/60)).padStart(2,"0")+":"+String(e%60).padStart(2,"0")}function To(e,t,n){const a=[],i=[];t.forEach((f,k)=>{f.start_time?a.push({t:f,idx:k,startMin:_o(f.start_time),dur:Number(f.duration)||30}):i.push({t:f,idx:k})}),a.sort((f,k)=>f.startMin-k.startMin);const o=[];a.forEach(f=>{const k=f.startMin+f.dur;let y=-1;for(let $=0;$<o.length&&$<2;$++)if(o[$]<=f.startMin){y=$,o[$]=k;break}y===-1&&(o.length<2?(y=o.length,o.push(k)):(y=1,o[1]=Math.max(o[1],k))),f.col=y});const s=Math.max(1,Math.min(2,o.length)),r=Qn*60,c=(ea*60-r)/60*At;let d="";for(let f=Qn;f<=ea;f++){const k=(f*60-r)/60*At;d+=`<div class="tl-hour-row" style="top:${k}px"><span class="tl-hour-lbl">${String(f%24).padStart(2,"0")}:00</span></div>`}const m=n==="coach"?"coach":"student",u=a.map(f=>{const{t:k,idx:y,startMin:$,dur:w,col:I}=f,B=(Math.max($,r)-r)/60*At,S=Math.max(22,w/60*At),M=100/s,E=I*M;return`<div class="tl-block ${k.done?"done":""}" data-task-id="${k._id}"
        style="top:${B}px;height:${S}px;left:calc(${E}% + 2px);width:calc(${M}% - 4px)"
        onclick="openTaskDetail('${e}',${y},'${m}')" title="${g(k.subject)}">
      <div class="tl-block-time">${k.start_time}–${Eo($+w)}</div>
      <div class="tl-block-subj">${g(k.subject)}</div>
    </div>`}).join("");return`${i.length?`
    <div class="tl-unscheduled">
      <div class="tl-unscheduled-lbl">⏱ Saatsiz</div>
      ${i.map(({t:f,idx:k})=>_a(f,e,k,n)).join("")}
    </div>`:""}
    <div class="tl-scroll"><div class="tl-wrap" style="--tl-height:${c}px">
      <div class="tl-ruler">${d}</div>
      <div class="tl-col">${u}</div>
    </div></div>`}function Ea(e,t,n,a){return a==="hourly"?To(e,t,n):t.map((i,o)=>_a(i,e,o,n)).join("")}function Ta(e,t){if(p.selectedDayIdx!=null&&p.selectedDayIdx>=0&&p.selectedDayIdx<=6)return p.selectedDayIdx;for(let n=0;n<7;n++)if(G(ee(e,n))===t)return n;return 0}function Sa(e,t){return e.map((n,a)=>`
    <button class="day-chip ${a===t?"active":""}" onclick="selectDayIdx(${a})">
      <span class="day-chip-dow">${n.shortDay}</span>
      <span class="day-chip-num">${n.dateNum}</span>
      ${n.isToday?'<span class="day-chip-dot"></span>':""}
    </button>`).join("")}function So(e){p.selectedDayIdx=e,Et(),document.querySelectorAll(".day-selector-strip .day-chip").forEach((t,n)=>{t.classList.toggle("active",n===e),n===e&&t.scrollIntoView({inline:"center",behavior:"smooth",block:"nearest"})}),document.querySelectorAll(".week-grid .day-col").forEach((t,n)=>t.classList.toggle("sel-day",n===e))}window.selectDayIdx=So;function ne(){const e=document.getElementById("view-program"),t=p.students.find(d=>d.id===p.activeStuId),n=(t==null?void 0:t.weekStart)??0,a=ae(p.weekOffset,n),i=ee(a,6),o=ce(),s=localStorage.getItem("ra_program_mode")||"weekly",r=Ta(a,o);let l="",c=[];for(let d=0;d<7;d++){const m=ee(a,d),u=G(m),v=u===o,f=`${p.activeStuId}_${u}`,k=p.tasks[f]||[],y=k.reduce((B,S)=>B+Number(S.duration),0),$=k.reduce((B,S)=>B+(S.done?Number(S.duration):0),0),w=DAYS_TR[(n+d)%7],I=Ea(u,k,"coach",s),T=["Pzt","Sal","Çar","Per","Cum","Cmt","Paz"][(n+d)%7];c.push({shortDay:T,dateNum:m.getDate(),isToday:v}),l+=`<div class="day-col ${v?"today":""} ${d===r?"sel-day":""}">
      <div class="day-hd">
        <div>
          <div class="day-name-lbl">${T}</div>
          <div class="day-num">${m.getDate()}</div>
        </div>
        <div style="display:flex;flex-direction:column;align-items:flex-end;gap:4px">
          <span class="day-badge" style="font-size:8.5px">${ht($)} / ${ht(y)}</span>
          ${_clipboardTask?`<button class="btn btn-ghost btn-xs" onclick="pasteTaskFromClipboard('${u}')" style="font-size:9px;color:var(--accent);border-color:rgba(240,165,0,.3);background:var(--accent-dim);padding:2px 6px">Yapıştır</button>`:""}
        </div>
      </div>
      <div class="day-tasks-list ${s==="hourly"?"tl-mode":""}">${I||""}</div>
      <button class="add-day-btn" onclick="openTaskModal('${u}','${w}')" ${p.activeStuId?"":"disabled"}>+ Görev Ekle</button>
    </div>`}e.innerHTML=`
    <div class="day-selector-strip">${Sa(c,r)}</div>
    <button class="back-link" onclick="switchTab('student-detail')">← ${t?g(t.name):"Öğrenci"}</button>
    <div class="card prog-banner">
      <div class="prog-avatar" style="background:${(t==null?void 0:t.color)||"var(--accent)"};color:#fff">${t?t.name[0]:"?"}</div>
      <div class="prog-meta">
        <h2>${t?g(t.name):"Öğrenci Seçin"}</h2>
        <p>${t?g(t.target):"Program görüntülemek için öğrenci seçin"}</p>
      </div>
      <div class="prog-actions">
        <button class="btn btn-ghost btn-sm" onclick="saveWeekAsTemplate()">Şablon Kaydet</button>
        <button class="btn btn-ghost btn-sm" onclick="applyTemplateToWeek()">Şablon Uygula</button>
        <button class="btn btn-accent btn-sm" onclick="openWeeklyReportModal()" style="font-weight:700">📊 Haftalık Rapor</button>
        <button class="btn btn-ghost btn-sm" onclick="openWeeklyPDFModal()">📄 PDF</button>
        <button class="btn btn-danger btn-sm" onclick="openClearWeekModal()">Temizle</button>
      </div>
    </div>
    <div class="week-nav" style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:10px">
      <div style="display:flex;gap:6px;align-items:center">
        <button class="btn btn-ghost btn-sm" onclick="chWeek(-1)">←</button>
        <span class="week-lbl">${a.getDate()} ${MONTHS_TR[a.getMonth()]} — ${i.getDate()} ${MONTHS_TR[i.getMonth()]} ${i.getFullYear()}</span>
        <button class="btn btn-ghost btn-sm" onclick="chWeek(1)">→</button>
        <button class="btn btn-ghost btn-sm" onclick="goToday()">Bugün</button>
      </div>
      
      <!-- Program Görünüm Seçici Toggle -->
      <div style="display:flex;background:var(--surface2);border:1px solid var(--border);border-radius:10px;padding:3px;gap:4px">
        <button class="btn btn-xs ${s==="weekly"?"btn-accent":"btn-ghost"}" onclick="setProgramMode('weekly')" style="padding:4px 10px;font-size:11px;font-weight:700;border-radius:8px">📋 Günlük Serbest</button>
        <button class="btn btn-xs ${s==="hourly"?"btn-accent":"btn-ghost"}" onclick="setProgramMode('hourly')" style="padding:4px 10px;font-size:11px;font-weight:700;border-radius:8px">🕒 Saatlik Düzen</button>
      </div>

      ${_clipboardTask?'<button class="btn btn-accent btn-sm" onclick="pasteTaskToWholeWeek()" style="font-size:12px;padding:6px 12px;gap:6px">📋 Kopyalananı Tüm Haftaya Yapıştır</button>':""}
    </div>
    <div class="week-grid">${l}</div>`}function Io(e){p.activeStuId=e||null,Et(),ne()}function zo(e){p.weekOffset+=e,Et(),ne()}function Bo(){p.weekOffset=0,Et(),ne()}function Mo(e){localStorage.setItem("ra_program_mode",e),x.role==="student"?be():ne()}window.setProgramMode=Mo;(()=>{const e=document.createElement("style");e.textContent=`
    .tc-time-badge {
      font-size: 11px;
      font-weight: 800;
      color: var(--accent);
      background: var(--accent-dim);
      padding: 3px 8px;
      border-radius: 6px;
      display: inline-flex;
      align-items: center;
      gap: 4px;
      margin-bottom: 6px;
      width: fit-content;
      border: 1px solid rgba(240,165,0,.2);
    }
    .task-card.hourly-card {
      border-left: 4px solid var(--accent) !important;
    }
  `,document.head.appendChild(e)})();let fe=[];function Ao(){if(!p.activeStuId)return b("Önce öğrenci seçin");const e=p.students.find(i=>i.id===p.activeStuId),t=(e==null?void 0:e.weekStart)??0,n=ae(p.weekOffset,t);fe=[];let a="";for(let i=0;i<7;i++){const o=ee(n,i),s=G(o);DAYS_TR[(t+i)%7];const r=(p.tasks[`${p.activeStuId}_${s}`]||[]).length>0,l=["Pzt","Sal","Çar","Per","Cum","Cmt","Paz"][(t+i)%7];a+=`<button class="day-sel-btn" id="dsbtn_${i}" data-ds="${s}" onclick="toggleDaySel(${i},'${s}')">
      <div>${l}</div>
      <div style="font-size:14px;font-weight:800">${o.getDate()}</div>
      ${r?'<div style="font-size:9px;color:var(--accent);margin-top:2px">●</div>':'<div style="font-size:9px;opacity:0">·</div>'}
    </button>`}document.getElementById("daySelectorGrid").innerHTML=a,V("clearWeekModal")}function Do(e,t){const n=document.getElementById("dsbtn_"+e),a=fe.indexOf(t);a===-1?(fe.push(t),n.classList.add("sel")):(fe.splice(a,1),n.classList.remove("sel"))}function Co(){const e=document.querySelectorAll(".day-sel-btn");fe.length===7?(fe=[],e.forEach(t=>t.classList.remove("sel"))):(fe=[],e.forEach((t,n)=>{fe.push(t.dataset.ds),t.classList.add("sel")}))}async function Lo(){if(!fe.length)return b("Önce gün seçin");if(await ie(`${fe.length} günün görevleri silinsin mi?`)){C(!0,"Siliniyor...");for(const e of fe)await h.from("tasks").delete().eq("student_id",p.activeStuId).eq("date",e),delete p.tasks[`${p.activeStuId}_${e}`];C(!1),_e(),Z("clearWeekModal"),ne(),b(`${fe.length} gün temizlendi ✓`)}}const kt={"Dil Bilgisi":["Sözcükte Anlam","Cümlede Anlam","Ses Bilgisi","Yazım Kuralları","Noktalama İşaretleri","Sözcükte Yapı","İsim","Sıfat","Zamir","Zarf","İsim-Sıfat Tamlamaları","Edat-Bağlaç-Ünlem","Fiiller – Fiil Çekimleri – Fiillerde Zaman Kayması","Ek Fiil – Ek Eylem","Fiilde Çatı","Fiilimsiler","Cümlenin Öğeleri","Cümle Türleri","Anlatım Bozuklukları"],"TYT Matematik":["Sayılar ve Basamak","Bölünebilme","EBOB-EKOK","Kesirler ve Ondalıklı Sayılar","Mutlak Değer","Üslü Sayılar","Köklü Sayılar","Oran-Orantı","Problemler – Yaş-İşçi-Havuz","Problemler – Kar-Zarar-Yüzde","Problemler – Hareket","Problemler – Karışım","Birinci Dereceden Denklemler","Kümeler","Mantık","Fonksiyonlar","Polinomlar","İkinci Dereceden Denklemler","Permütasyon-Kombinasyon","Olasılık","İstatistik ve Veri"],"AYT Matematik":["Polinomlar","Karmaşık Sayılar","Logaritma","Trigonometri","Diziler","Limit ve Süreklilik","Türev","İntegral","Matrisler ve Determinant"],Geometri:["Doğruda Açı","Üçgende Açı ve Kenar","Üçgende Alan","Üçgende Benzerlik","Özel Üçgenler (Pisagor)","Dörtgenler","Dörtgende Alan","Çember ve Daire","Çemberde Açı","Analitik Geometri – Nokta ve Doğru","Analitik Geometri – Çember","Katı Cisimler","Uzay Geometrisi"],"TYT Fizik":["Fizik Bilimine Giriş","Madde ve Özellikleri","Basınç","Kaldırma Kuvveti","Isı Sıcaklık Genleşme","Hareket","Newton Hareket Yasaları","İş Güç Enerji","Elektrik","Manyetizma","Optik","Dalgalar"],"AYT Fizik":["Vektörler","Bağıl ve Bileşik Hareket","Newton'ın Hareket Yasaları","Sabit İvmeli Hareket","Tek Boyutta Atışlar","İki Boyutta Atışlar","Enerji","İtme ve Momentum","Tork ve Denge","Kütle ve Ağırlık Merkezi","Basit Makineler","Elektriksel Kuvvet ve Elektrik Alan","Elektriksel Potansiyel Enerji","Düzgün Elektrik Alan ve Sığa","Manyetik Alan","Manyetik Kuvvet","Manyetik İndüksiyon","Alternatif Akım ve Transformatörler","Düzgün Çembersel Hareket","Eylemsizlik Momenti ve Açısal Momentum","Genel Çekim Yasası ve Kepler","Basit Harmonik Hareket","Dalga Mekaniği","Elektromanyetik Dalgalar","Atom Modelleri ve Atomun Yapısı","Büyük Patlama ve Atom Altı Parçacıklar","Radyoaktivite","Özel Görelilik Teorisi","Modern Fizik"],"TYT Kimya":["Kimyanın Sembolik Dili","Atom Modelleri","Periyodik Cetvel","Etkileşimler","Maddenin Halleri","Kimyanın Temel Kanunları","Mol Kavramı","Kimyasal Hesaplamalar","Kimyasal Tepkime Türleri","Karışımlar","Asitler ve Bazlar","Tuzlar","Doğa ve Kimya","Kimya Her Yerde"],"AYT Kimya":["Modern Atom","Gazlar","Sıvı Çözeltiler ve Çözünürlük","Tepkimelerde Hız","Tepkimelerde Denge","Sulu Çözelti Dengeleri","Kimya ve Elektrik","Karbon Kimyası","Organik Bileşikler","Enerji Kaynakları"],"TYT Biyoloji":["Canlıların Temel Bileşenleri","İnorganik Bileşikler","Karbohidratlar","Lipitler (Yağlar)","Proteinler","Hormonlar","Vitaminler","Enzimler","Nükleik Asitler","DNA-RNA","ATP Metabolizma","Hücre Organelleri","Hücre Zarı Madde Geçişleri","Ekoloji","Güncel Çevre Sorunları","Canlıların Sınıflandırılması","Hücre Bölünmeleri","Mitoz","Mayoz","Kalıtım"],"AYT Biyoloji":["Sinir Sistemi","Endokrin Sistemi","Duyu Organları","Destek Hareket Sistemi","Dolaşım Sistemi","Bağışıklık Sistemi","Solunum Sistemi","Üriner Sistemi","Üreme Sistemi","Komünite Ekolojisi","Popülasyon Ekolojisi","Genden Proteine","Enerji Dönüşümleri","Bitki Biyolojisi","Canlı ve Çevre"],"AYT Edebiyat":["Güzel Sanatlar ve Edebiyat","Coşku ve Heyecanı Dile Getiren Metinler (Şiir)","Olay Çevresinde Oluşan Edebi Metinler","Destan Dönemi Türk Edebiyatı","İslamiyet Kabulü İlk Edebi Ürünler","Divan Edebiyatı","Halk Edebiyatı","Tanzimat Edebiyatı","Servet-i Fünun Edebiyatı","Fecr-i Ati Edebiyatı","Milli Edebiyat","Cumhuriyet Dönemi Türk Edebiyatı","Edebi Akımlar"],"Tarih (TYT-AYT)":["Tarih ve Zaman","İnsanlığın İlk Dönemleri","Orta Çağ'da Dünya","İlk ve Orta Çağlarda Türk Dünyası","İslam Medeniyetinin Doğuşu","İlk Türk-İslam Devletleri","Beylikten Devlete Osmanlı","Dünya Gücü Osmanlı","Osmanlı Kültür ve Medeniyeti","En Uzun Yüzyıl (Osmanlı)","XX. Yüzyıl Başlarında Osmanlı","I. Dünya Savaşı","Milli Mücadele Hazırlık Dönemi","Kurtuluş Savaşı ve Antlaşmalar","Atatürk İlke ve İnkılapları","Atatürk Dönemi Türk Dış Politikası"],"Coğrafya (TYT-AYT)":["Doğa ve İnsan","Dünya'nın Şekli ve Hareketleri","Coğrafi Konum","Harita Bilgisi","Atmosfer ve İklim","Dünya'nın Tektonik Yapısı","İç ve Dış Kuvvetler","Nüfus ve Yerleşme","Ekonomik Faaliyetler","Bölgeler ve Ülkeler","Çevre ve Toplum","Ekosistem ve Madde Dönüşü","Türkiye'de Nüfus ve Yerleşme","Türkiye'nin Coğrafi Konumu ve Bölgeleri","Küresel Ortam: Bölgeler ve Ülkeler"],"Felsefe Grubu & Din":["Felsefeyi Tanıma","Bilgi Felsefesi","Varlık Felsefesi","Ahlak Felsefesi","Sanat Felsefesi","Din Felsefesi","Siyaset Felsefesi","Bilim Felsefesi","Psikolojiye Giriş","Sosyolojiye Giriş","Klasik Mantık","Kur'an-ı Kerim ve Anlamı","İnanç ve İbadet","Ahlak ve Değerler","Hz. Muhammed ve Gençlik","İslam Medeniyeti ve Bilim"],"YDT İngilizce":["Grammar (Dil Bilgisi)","Vocabulary (Kelime Bilgisi)","Reading Comprehension (Okuduğunu Anlama)","Sentence Completion (Cümle Tamamlama)","Dialogue Completion (Diyalog Tamamlama)","Translation (Çeviri)","Restatement (Eş Anlamlı Cümle)","Paragraph Completion (Paragraf Tamamlama)","Irrelevant Sentence (Anlamı Bozan Cümle)"]};function Po(e,t){const n=`${e||""} ${t||""}`.trim();return kt[n]||kt[t||""]||null}let ye=[];function jo(e,t){const n=ye.indexOf(t);n===-1?(ye.push(t),e.style.borderColor="var(--red)",e.style.background="rgba(255,92,122,.12)",e.style.color="var(--red)"):(ye.splice(n,1),e.style.borderColor="var(--border)",e.style.background="var(--surface)",e.style.color="var(--text-mid)")}window.toggleKonuChip=jo;let ke=[];function Ro(){const e=document.getElementById("tmNewResourceToggle").checked;Ia(e)}function Ia(e){document.getElementById("tmSearchSection").style.display=e?"none":"",document.getElementById("tmManualSection").style.display=e?"":"none",document.getElementById("tmTestWrap").style.display="none";const t=document.getElementById("tmToggleSlider");t&&(t.style.background=e?"var(--accent)":"var(--border)",t.style.setProperty("--tw-after-x",e?"16px":"0px"))}function No(){const e=document.getElementById("tmManualTestInput"),t=e.value.trim();t&&(ke.push(t),e.value="",za())}function Ho(e){ke.splice(e,1),za()}function za(){const e=document.getElementById("tmManualTestChips");e&&(e.innerHTML=ke.map((t,n)=>`
    <span style="display:inline-flex;align-items:center;gap:5px;background:var(--accent-dim);border:1px solid rgba(240,165,0,.3);color:var(--accent);padding:4px 10px;border-radius:99px;font-size:12px;font-weight:600">
      ${g(t)}
      <button onclick="removeManualTest(${n})" style="background:none;border:none;cursor:pointer;color:var(--accent);font-size:14px;padding:0;line-height:1">×</button>
    </span>`).join(""))}function Ba(e,t){if(!p.activeStuId)return b("Önce öğrenci seçin");Fe=e,_editingTaskId=null,te=null,document.querySelector("#taskModal h2").innerHTML=`Görev Ekle — <span id="tmDay">${t}</span>`,document.querySelector("#taskModal .btn-accent").textContent="Programa Ekle",document.getElementById("tmSubjectFree").value="",document.getElementById("tmDuration").value="60",document.getElementById("tmStartTime").value="",document.getElementById("tmNote").value="",document.getElementById("tmExam").value="",document.getElementById("tmType").value="deneme",document.getElementById("tmSubjectSel").style.display="none",document.getElementById("tmSubjectFree").style.display="",document.getElementById("soruBankasiWrap").style.display="none",document.getElementById("tmBookSearch").value="",document.getElementById("tmBookVal").value="",document.getElementById("tmBookList").style.display="none",document.getElementById("tmTestWrap").style.display="none";const n=document.getElementById("tmTestSummary");n&&(n.style.display="none");const a=document.getElementById("tmNewResourceToggle");a&&(a.checked=!1,Ia(!1)),document.getElementById("tmManualKaynak").value="",document.getElementById("tmManualTestInput").value="",document.getElementById("tmManualTestChips").innerHTML="",ke=[],document.getElementById("tmQCount").value="",Ma(),Da(),V("taskModal")}function Ma(){var a;const e=(a=document.getElementById("tmType"))==null?void 0:a.value,t=document.getElementById("tmQCountField"),n=e==="soru"||e==="deneme";if(t&&(t.style.display=n?"":"none"),!n){const i=document.getElementById("tmSmartBadge");i&&(i.style.display="none")}}let me={},dt=!1;async function Aa(){if(dt)return;const{data:e}=await h.from("resources").select("*").eq("active",!0).order("name");e&&(e.forEach(t=>{let n=[t.subject];t.subject==="Tarih"?n.push("Tarih1","Tarih2"):t.subject==="Coğrafya"?n.push("Coğrafya1","Coğrafya2"):(t.subject==="Din Kültürü"||t.subject==="Din")&&(n=["Din","Din Kültürü"]),n.forEach(a=>{const i=`${t.exam_type}_${a}`;me[i]||(me[i]=[]),me[i].push({name:t.name,yil:t.year,testler:Array.isArray(t.tests)?t.tests:[],publisher:t.publisher})})}),dt=!0)}let ft=[],te=null;function Vt(){const e=document.getElementById("tmExam").value,t=document.getElementById("tmType").value,n=document.getElementById("tmSubjectSel"),a=document.getElementById("tmSubjectFree");te=null,document.getElementById("tmBookVal").value="",document.getElementById("tmBookSearch").value="",document.getElementById("tmBookList").innerHTML="",document.getElementById("tmBookList").style.display="none",document.getElementById("tmTestWrap").style.display="none";const i=document.getElementById("tmTestSummary");i&&(i.style.display="none"),e&&SUBJECT_MAP[e]?(n.innerHTML=SUBJECT_MAP[e].map(c=>`<option value="${c}">${c}</option>`).join(""),n.style.display="",a.style.display="none"):(n.style.display="none",a.style.display="");const o=(t==="soru"||t==="konu")&&e;document.getElementById("soruBankasiWrap").style.display=o?"":"none";const s=document.getElementById("tmBookSearch");s&&(s.placeholder=t==="konu"?"Hoca veya playlist ara...":"Kitap veya yayınevi ara...");const r=document.getElementById("tmQCountField"),l=t==="soru"||t==="deneme";if(r&&(r.style.display=l?"":"none"),!l){const c=document.getElementById("tmQCount");c&&(c.value="");const d=document.getElementById("tmSmartBadge");d&&(d.style.display="none")}dt=!1,me={},o&&Zt("")}function Yo(){te=null,document.getElementById("tmBookVal").value="",document.getElementById("tmBookSearch").value="",document.getElementById("tmBookList").style.display="none",document.getElementById("tmTestWrap").style.display="none";const e=document.getElementById("tmType").value,t=document.getElementById("tmExam").value;dt=!1,me={},(e==="soru"||e==="konu")&&t&&Zt("")}document.getElementById("tmType").addEventListener("change",Vt);async function Zt(e){const t=document.getElementById("tmExam").value,n=document.getElementById("tmSubjectSel").value||"",a=document.getElementById("tmType").value,i=document.getElementById("tmBookList"),o=a==="konu"?"playlist":"book";if(!dt){i.style.display="block",i.innerHTML='<div style="padding:12px;font-size:12px;color:var(--text-dim);text-align:center">⏳ Yükleniyor...</div>';const{data:c}=await h.from("resources").select("*").eq("active",!0).eq("resource_type",o).order("name");me={},c&&c.forEach(d=>{let m=[d.subject];d.subject==="Tarih"?m.push("Tarih1","Tarih2"):d.subject==="Coğrafya"?m.push("Coğrafya1","Coğrafya2"):(d.subject==="Din Kültürü"||d.subject==="Din")&&(m=["Din","Din Kültürü"]),m.forEach(u=>{const v=`${d.exam_type}_${u}`;me[v]||(me[v]=[]),me[v].push({name:d.name,yil:d.year,testler:Array.isArray(d.tests)?d.tests:[],publisher:d.publisher,resource_type:d.resource_type||"book"})})}),dt=!0}const s=`${t}_${n}`,r=me[s]||[],l=e.toLowerCase();if(ft=r.filter(c=>{var d;return!l||c.name.toLowerCase().includes(l)||((d=c.publisher)==null?void 0:d.toLowerCase().includes(l))}),!e&&!ft.length){i.style.display="none";return}if(!ft.length){i.style.display="block",i.innerHTML='<div style="padding:12px;font-size:12px;color:var(--text-dim);text-align:center">Kaynak bulunamadı</div>';return}i.style.display="block",i.innerHTML=ft.map((c,d)=>`
    <div onclick="selectBook(${d})" style="padding:10px 14px;cursor:pointer;border-bottom:1px solid var(--border);display:flex;justify-content:space-between;align-items:center;transition:background .15s"
      onmouseover="this.style.background='var(--surface3)'" onmouseout="this.style.background=''">
      <div>
        <div style="font-size:13px;font-weight:700">${g(c.name)}</div>
        <div style="font-size:10px;color:var(--text-dim);margin-top:2px">${g(c.publisher||"")} · ${c.testler.length} test</div>
      </div>
      <span style="font-size:10px;font-weight:700;background:var(--green-dim);color:var(--green);padding:2px 7px;border-radius:99px;margin-left:8px;flex-shrink:0">${c.yil}</span>
    </div>`).join("")}function Ko(){const e=document.getElementById("tmBookSearch").value;if(e.length===0){document.getElementById("tmBookList").style.display="none";return}Zt(e)}function Fo(e){te=ft[e],document.getElementById("tmBookVal").value=te.name,document.getElementById("tmBookSearch").value=te.name,document.getElementById("tmBookList").style.display="none",Jt(),document.getElementById("tmTestWrap").style.display=""}function Jt(){if(!te)return;const e=document.getElementById("tmTestList"),t=te.resource_type==="playlist",n=te.name||"";e.innerHTML=te.testler.map((a,i)=>{const o=a.label||a,s=o.trim()===""||o.trim()===n.trim()?`Ders ${i+1}`:o,r=a.soru||0,l=a.url||"";a.topic;const c=Di(o),d=c==="done"?"ti-status-done":c==="pending"?"ti-status-pending":"",m=c==="done"?'<span class="ti-badge ti-badge-done">✓ Tamamlandı</span>':c==="pending"?'<span class="ti-badge ti-badge-pending">⏳ Atandı</span>':"";return t?`<label class="${d}" style="display:flex;align-items:center;gap:8px;padding:8px 10px;cursor:pointer;transition:background .1s;border-bottom:1px solid var(--border)"
        onmouseover="this.style.background='var(--surface3)'" onmouseout="this.style.background=''">
        <input type="checkbox" id="test_${i}" value="${i}" onchange="updateTestSummary()"
          style="width:15px;height:15px;accent-color:var(--accent);cursor:pointer;flex-shrink:0">
        <div style="width:22px;height:22px;border-radius:6px;background:var(--surface3);color:var(--text-mid);font-size:10px;font-weight:800;display:flex;align-items:center;justify-content:center;flex-shrink:0">${i+1}</div>
        <div style="flex:1;min-width:0">
          <div style="font-size:12px;font-weight:600;line-height:1.3;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${g(s)}</div>
          <div style="display:flex;align-items:center;gap:6px;margin-top:2px">
            <span style="font-size:10px;color:var(--text-dim)">${r>0?`⏱ ${r} dk`:"⏱ ?"}</span>
            ${m}
          </div>
        </div>
        ${l?`<a href="${g(l)}" target="_blank" onclick="event.stopPropagation()"
          style="display:flex;align-items:center;gap:3px;font-size:11px;font-weight:700;background:#cc000022;color:#ff5555;border:1px solid #aa222233;padding:5px 10px;border-radius:7px;text-decoration:none;flex-shrink:0;white-space:nowrap"
          onmouseover="this.style.background='#cc000044'" onmouseout="this.style.background='#cc000022'">▶ İzle</a>`:'<span style="font-size:10px;color:var(--text-dim);flex-shrink:0;padding:5px 8px;border:1px solid var(--border);border-radius:7px">Linksiz</span>'}
      </label>`:`<label class="${d}" style="display:flex;align-items:center;gap:8px;padding:8px 10px;border-radius:7px;cursor:pointer;transition:background .1s;margin-bottom:2px"
        onmouseover="this.style.background='var(--surface3)'" onmouseout="this.style.background=''">
        <input type="checkbox" id="test_${i}" value="${i}" onchange="updateTestSummary()"
          style="width:16px;height:16px;accent-color:var(--accent);cursor:pointer;flex-shrink:0">
        <div style="flex:1;display:flex;align-items:center;gap:6px;flex-wrap:wrap">
          <span style="font-size:12.5px;font-weight:600;color:var(--text)">${g(s)}</span>
          ${m}
        </div>
        ${r>0?`<span style="font-size:10.5px;font-weight:700;color:var(--text-mid);background:var(--surface3);padding:3px 8px;border-radius:99px;flex-shrink:0">${r} soru</span>`:""}
      </label>`}).join(""),ut()}function Oo(){document.querySelectorAll("#tmTestList input[type=checkbox]").forEach(e=>e.checked=!0),ut()}function qo(){document.querySelectorAll("#tmTestList input[type=checkbox]").forEach(e=>e.checked=!1),ut()}let it=0,ot=0;function ut(){if(!te)return;const e=[...document.querySelectorAll("#tmTestList input[type=checkbox]:checked")],t=document.getElementById("tmTestSummary"),n=document.getElementById("tmTestSummaryText"),a=document.getElementById("tmSuggestedDuration"),i=document.getElementById("tmSpeedRow"),o=te.resource_type==="playlist";if(e.length===0){t.style.display="none",ot=0,it=0;return}let s=0,r=0;e.forEach(m=>{const u=parseInt(m.value),v=te.testler[u];o?r+=(v==null?void 0:v.soru)||0:s+=(v==null?void 0:v.soru)||0});const l=document.querySelector("[data-mspeed].speed-active"),c=l?parseFloat(l.dataset.mspeed):1;let d=0;if(o)d=r>0?Math.ceil(r/c):0,n.textContent=`${e.length} video · ${r} dk`,i&&(i.style.display="");else{const m=document.getElementById("tmExam").value,u=document.getElementById("tmSubjectSel").value||"",v=`${p.activeStuId}_${m}_${u}`,f=Nt[v]||180;d=s>0?Math.ceil(s*f/60):0,n.textContent=`${e.length} test · ${s} soru${d>0?" · Önerilen: "+d+" dk":""}`,i&&(i.style.display="none")}a.style.display=d>0?"":"none",ot=d,it=s,a.setAttribute("data-dur",d),t.style.display="",d>0&&(document.getElementById("tmDuration").value=d),s>0&&(document.getElementById("tmQCount").value=s)}function Uo(e){document.querySelectorAll("[data-mspeed]").forEach(t=>{const n=t.dataset.mspeed===e;t.classList.toggle("speed-active",n),t.style.borderColor=n?"var(--accent)":"var(--border)",t.style.background=n?"var(--accent-dim)":"var(--surface2)",t.style.color=n?"var(--accent)":"var(--text-mid)"}),ut()}function Go(){ot>0&&(document.getElementById("tmDuration").value=ot),it>0&&(document.getElementById("tmQCount").value=it),(ot>0||it>0)&&b("Önerilen soru sayısı ("+it+") ve süre ("+ot+" dk) uygulandı ✓")}let Nt={};async function Da(){if(!p.activeStuId)return;const{data:e}=await h.from("student_speeds").select("*").eq("student_id",p.activeStuId);Nt={},(e||[]).forEach(t=>{const n=`${t.student_id}_${t.exam_type}_${t.subject}`;Nt[n]=t.secs_per_question})}async function Ca(e,t,n,a){const{data:i}=await h.from("student_speeds").select("id").eq("student_id",e).eq("exam_type",t).eq("subject",n).single();i?await h.from("student_speeds").update({secs_per_question:a,updated_at:new Date().toISOString()}).eq("id",i.id):await h.from("student_speeds").insert({student_id:e,coach_id:x.coachId,exam_type:t,subject:n,secs_per_question:a}),Nt[`${e}_${t}_${n}`]=a,b("Hız kaydedildi ✓")}let ta=null,vt=null;function Xt(){clearTimeout(ta),ta=setTimeout(Wo,400)}async function Wo(){var i,o,s,r,l;const e=document.getElementById("tmSmartBadge");if(!e)return;const t=parseInt((i=document.getElementById("tmQCount"))==null?void 0:i.value)||0,n=(((o=document.getElementById("tmSubjectSel"))==null?void 0:o.style.display)!=="none"?(s=document.getElementById("tmSubjectSel"))==null?void 0:s.value:(r=document.getElementById("tmSubjectFree"))==null?void 0:r.value)||"",a=((l=document.getElementById("tmExam"))==null?void 0:l.value)||"TYT";if(!t||!n||!p.activeStuId){e.style.display="none",vt=null;return}try{const{data:c,error:d}=await h.rpc("calculate_smart_duration",{p_student_id:p.activeStuId,p_exam_type:a,p_subject:n,p_question_count:t,p_video_minutes:0,p_speed_multiplier:1});if(d||!c){e.style.display="none";return}vt=c.estimated_minutes;const m=c.speed_source==="student";e.style.display="block",e.style.background=m?"var(--green-dim)":"var(--blue-dim)",e.style.borderColor=m?"rgba(5,150,105,.3)":"rgba(37,99,235,.3)",e.style.color=m?"var(--green)":"var(--blue)",e.innerHTML=`⚡ Akıllı Süre: <b>${c.estimated_minutes} dk</b> — ${m?`öğrencinin gerçek hızına göre (${c.secs_per_question} sn/soru)`:`sistem varsayılanına göre (${c.secs_per_question} sn/soru)`} · <u>süreye uygula</u>`}catch{e.style.display="none"}}function Vo(){vt&&(document.getElementById("tmDuration").value=vt,b("⚡ Akıllı süre uygulandı: "+vt+" dk"))}document.getElementById("tmType").addEventListener("change",Vt);var ca;(ca=document.getElementById("tmExam"))==null||ca.addEventListener("change",Xt);var pa;(pa=document.getElementById("tmSubjectSel"))==null||pa.addEventListener("change",Xt);var ua;(ua=document.getElementById("tmSubjectFree"))==null||ua.addEventListener("input",Xt);let dn=!1;async function Zo(){var n;if(dn)return;dn=!0;const e=document.querySelector('#taskModal button[onclick*="saveTask"]'),t=e?e.textContent:"Programa Ekle";e&&(e.disabled=!0,e.textContent="Kaydediliyor...");try{const a=document.getElementById("tmType").value,i=document.getElementById("tmSubjectSel"),o=document.getElementById("tmSubjectFree"),s=document.getElementById("tmExam").value,r=parseInt(document.getElementById("tmDuration").value)||60,l=document.getElementById("tmStartTime").value||null,c=document.getElementById("tmNote").value.trim();if((n=document.getElementById("tmNewResourceToggle"))==null?void 0:n.checked){const w=document.getElementById("tmManualKaynak").value.trim();if(!w)return b("Kaynak adı girin!");const I=i.style.display!=="none"?i.value:o.value.trim(),T=I?`${I} - ${w}`:w,B=ke.map(P=>({label:P,url:"",soru:0}));let S=c;ke.length>0&&(S=`${ke.length} test: ${ke.slice(0,3).join(", ")}${ke.length>3?` +${ke.length-3} daha`:""}`);const M={student_id:p.activeStuId,coach_id:x.coachId,date:Fe,type:a,exam_type:s,subject:T,duration:r,note:S,done:!1,task_items:B.length>0?B:null,start_time:l};C(!0);const{error:E}=await h.from("tasks").insert(M);if(C(!1),E)return b("Hata: "+E.message);const A=`${p.activeStuId}_${Fe}`;p.tasks[A]||(p.tasks[A]=[]),p.tasks[A].push({type:a,exam:s,subject:T,duration:r,note:S,done:!1,task_items:M.task_items,start_time:l}),Z("taskModal"),ne(),b("Görev eklendi ✓");return}const m=document.getElementById("tmBookVal").value,u=(te==null?void 0:te.resource_type)==="playlist";let v="";if((a==="soru"||a==="konu")&&m){const w=i.style.display!=="none"?i.value:"";v=w?`${w} - ${m}`:`${m}`}else v=(i.style.display!=="none"?i.value:o.value).trim();if(!v)return b("Ders adı girin!");const f=[...document.querySelectorAll("#tmTestList input[type=checkbox]:checked")];let k=c,y=[];if(f.length>0&&te){const w=f.map(I=>{const T=te.testler[parseInt(I.value)];return(T==null?void 0:T.label)||T||""});if(y=f.map(I=>{const T=te.testler[parseInt(I.value)];return{label:(T==null?void 0:T.label)||T||"",url:(T==null?void 0:T.url)||"",soru:(T==null?void 0:T.soru)||0}}),u){const I=T=>T.length>14?T.slice(0,13)+"…":T;k=`${w.length} video: ${w.slice(0,5).map(I).join(", ")}${w.length>5?` +${w.length-5}`:""}`}else{const I=T=>T.length>14?T.slice(0,13)+"…":T;k=`${w.length} test: ${w.slice(0,5).map(I).join(", ")}${w.length>5?` +${w.length-5}`:""}`}}const $={student_id:p.activeStuId,coach_id:x.coachId,date:Fe,type:a,exam_type:s,subject:v,duration:r,note:k,done:!1,task_items:y.length>0?y:null,start_time:l};if(_editingTaskId){C(!0);const{error:w}=await h.from("tasks").update({type:$.type,exam_type:$.exam_type,subject:$.subject,duration:$.duration,note:$.note,task_items:$.task_items,start_time:$.start_time}).eq("id",_editingTaskId);if(C(!1),w)return b("Hata: "+w.message);const I=`${p.activeStuId}_${Fe}`;if(p.tasks[I]){const T=p.tasks[I].findIndex(B=>B._id===_editingTaskId);T!==-1&&(p.tasks[I][T]={_id:_editingTaskId,type:$.type,exam:$.exam_type,subject:$.subject,duration:$.duration,note:$.note,done:p.tasks[I][T].done,student_note:p.tasks[I][T].student_note||"",task_items:$.task_items,start_time:$.start_time})}Z("taskModal"),ne(),b("Görev güncellendi ✓"),_editingTaskId=null}else{const{data:w,error:I}=await h.from("tasks").insert($).select().single();if(I)return b("Hata: "+I.message);const T=`${p.activeStuId}_${Fe}`;p.tasks[T]||(p.tasks[T]=[]),p.tasks[T].push({_id:w.id,type:w.type,exam:w.exam_type,subject:w.subject,duration:w.duration,note:w.note,done:!1,student_note:"",task_items:w.task_items||null,start_time:w.start_time}),Z("taskModal"),ne(),b("Görev eklendi ✓")}}finally{dn=!1,e&&(e.disabled=!1,e.textContent=t)}}async function Jo(e,t){var o;const n=`${p.activeStuId}_${e}`,a=(o=p.tasks[n])==null?void 0:o[t];if(!a)return;const i=!a.done;await h.from("tasks").update({done:i}).eq("id",a._id),a.done=i,ne()}let Ct=null;function In(){Ct&&(Ct.remove(),Ct=null)}document.addEventListener("click",In);function Xo(e,t,n){In();const a=n.getBoundingClientRect(),i=document.createElement("div");i.className="tc-dropdown",i.innerHTML=`
    <button onclick="closeTaskMenu();openCoachTaskEdit('${e}',${t})">✏️ Düzenle</button>
    <button onclick="closeTaskMenu();copyTaskToClipboard('${e}',${t})">📋 Kopyala</button>
    <button onclick="closeTaskMenu();copyTaskToWholeWeek('${e}',${t})">📅 Tüm Haftaya Kopyala</button>
    <button class="danger" onclick="closeTaskMenu();deleteTask('${e}',${t})">🗑 Kaldır</button>`;const o=a.bottom+4,s=Math.min(a.left,window.innerWidth-155);i.style.cssText=`top:${o}px;left:${s}px;`,document.body.appendChild(i),Ct=i,setTimeout(()=>i.addEventListener("click",r=>r.stopPropagation()),0)}async function Qo(e,t){var s;const n=`${p.activeStuId}_${e}`,a=(s=p.tasks[n])==null?void 0:s[t];if(!a)return;const{data:i,error:o}=await h.from("tasks").insert({student_id:p.activeStuId,coach_id:x.coachId,date:e,type:a.type,exam_type:a.exam||null,subject:a.subject,duration:a.duration,note:a.note||null,done:!1,task_items:a.task_items||null}).select().single();if(o)return b("Kopyalama başarısız");p.tasks[n]||(p.tasks[n]=[]),p.tasks[n].push({_id:i.id,type:i.type,exam:i.exam_type,subject:i.subject,duration:i.duration,note:i.note,done:!1,student_note:"",task_items:i.task_items||null}),ne(),b("Görev kopyalandı")}async function er(e,t){var s;const n=`${p.activeStuId}_${e}`,a=(s=p.tasks[n])==null?void 0:s[t];if(!a)return;const i=[a.exam,a.subject].filter(Boolean).join(" · ")||a.type||"Görev",o=document.querySelector(`[data-task-id="${a._id}"]`);if(o){o.style.transition="all 0.3s ease",o.style.opacity="0",o.style.transform="translateX(30px)";const r=o.querySelector(".tc-body");r&&(r.innerHTML='<div style="color:var(--red); font-weight:700; font-size:12px; display:flex; align-items:center; gap:6px">🗑️ Siliniyor...</div>')}await new Promise(r=>setTimeout(r,300)),await h.from("tasks").delete().eq("id",a._id),p.tasks[n].splice(t,1),ne(),b(`"${i}" silindi`)}let ue={studentId:"",type:""};window._draggingApptId=null;const La={"Haftalık Değerlendirme":"#E8613A","TYT Koçluğu":"#3B82F6","AYT Koçluğu":"#8B5CF6",Mentörlük:"#10B981","Deneme Analizi":"#F59E0B",Motivasyon:"#EC4899","Genel Görüşme":"#64748B"},na=0,tr=24,nr=60;function Pa(e){return La[e]||"#64748B"}function ar(e){const t=p.students.find(o=>o.id===e.studentId),n=new Date(e.date+"T"+(e.time||"09:00")),a=new Date(n.getTime()+(e.duration||45)*6e4),i=o=>o.getFullYear()+String(o.getMonth()+1).padStart(2,"0")+String(o.getDate()).padStart(2,"0")+"T"+String(o.getHours()).padStart(2,"0")+String(o.getMinutes()).padStart(2,"0")+"00";return`https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(((t==null?void 0:t.name)||"Öğrenci")+" – Koçluk")}&dates=${i(n)}/${i(a)}&details=${encodeURIComponent(e.type||"")}`}function ir(){xe()}function or(){xe()}function rr(){xe()}function sr(e,t){ue[e]=t,xe()}function lr(){let e=p.appointments;ue.studentId&&(e=e.filter(o=>o.studentId===ue.studentId)),ue.type&&(e=e.filter(o=>o.type===ue.type));const t=["BEGIN:VCALENDAR","VERSION:2.0","PRODID:-//Rostrum Akademi//TR","CALSCALE:GREGORIAN","METHOD:PUBLISH","X-WR-CALNAME:Rostrum Ajanda"];e.forEach(o=>{const s=p.students.find(d=>d.id===o.studentId),r=new Date(o.date+"T"+(o.time||"09:00")),l=new Date(r.getTime()+(o.duration||45)*6e4),c=d=>d.getFullYear()+String(d.getMonth()+1).padStart(2,"0")+String(d.getDate()).padStart(2,"0")+"T"+String(d.getHours()).padStart(2,"0")+String(d.getMinutes()).padStart(2,"0")+"00";t.push("BEGIN:VEVENT",`DTSTART:${c(r)}`,`DTEND:${c(l)}`,`SUMMARY:${(s==null?void 0:s.name)||"Öğrenci"} – ${o.type||"Koçluk"}`),o.note&&t.push(`DESCRIPTION:${o.note.replace(/\n/g,"\\n")}`),(o.meetLink||o.meet_link)&&t.push(`URL:${o.meetLink||o.meet_link}`),t.push(`UID:rostrum-${o.id}@rostrumakademi.com`,"END:VEVENT")}),t.push("END:VCALENDAR");const n=new Blob([t.join(`\r
`)],{type:"text/calendar;charset=utf-8"}),a=URL.createObjectURL(n),i=document.createElement("a");i.href=a,i.download="rostrum-ajanda.ics",i.click(),URL.revokeObjectURL(a),b("Ajanda indirildi ✓")}function ja(e,t){t.stopPropagation();const n=document.getElementById("apptDetailPopup");if(n){const v=n.dataset.id;if(n.remove(),v===e)return}const a=p.appointments.find(v=>v.id===e);if(!a)return;const i=p.students.find(v=>v.id===a.studentId),o=Pa(a.type),s=document.createElement("div");s.id="apptDetailPopup",s.dataset.id=e;const r=window.innerWidth,l=window.innerHeight,c=264;let d=Math.min(t.clientX+12,r-c-12),m=Math.min(t.clientY+12,l-220);s.style.cssText=`position:fixed;left:${d}px;top:${m}px;z-index:600;width:${c}px;background:var(--surface);border:1px solid var(--border);border-radius:14px;padding:14px 16px;box-shadow:0 8px 32px rgba(0,0,0,.18);animation:viewIn .15s ease`;const u=a.meetLink||a.meet_link;s.innerHTML=`
    <div style="display:flex;align-items:center;gap:10px;margin-bottom:10px">
      <div style="width:10px;height:10px;border-radius:50%;background:${o};flex-shrink:0"></div>
      <div style="flex:1;font-size:14px;font-weight:800">${g((i==null?void 0:i.name)||"?")}</div>
      <button onclick="document.getElementById('apptDetailPopup')?.remove()" style="background:none;border:none;cursor:pointer;color:var(--text-dim);font-size:18px;line-height:1;padding:0">×</button>
    </div>
    <div style="display:flex;flex-direction:column;gap:5px;margin-bottom:12px;font-size:12px;color:var(--text-mid)">
      <div>🕐 <b style="color:var(--text)">${a.time||"—"}</b> · ${a.duration} dk</div>
      <div>📋 <span style="background:${o}20;color:${o};padding:1px 8px;border-radius:99px;font-weight:700;font-size:11px">${g(a.type||"")}</span></div>
      ${a.note?`<div>📝 <span style="color:var(--text)">${g(a.note)}</span></div>`:""}
      <div>📅 ${new Date(a.date+"T12:00").toLocaleDateString("tr-TR",{day:"numeric",month:"long",weekday:"long"})}</div>
    </div>
    <div style="display:flex;gap:6px;flex-wrap:wrap">
      ${u?`<a href="${g(u)}" target="_blank" style="font-size:11px;font-weight:700;color:var(--blue);background:var(--blue-dim);padding:4px 10px;border-radius:99px;text-decoration:none">🎥 ${u.includes("zoom")?"Zoom":"Meet"}</a>`:""}
      <a href="${ar(a)}" target="_blank" style="font-size:11px;font-weight:700;color:var(--green);background:var(--green-dim);padding:4px 10px;border-radius:99px;text-decoration:none">📅 GCal</a>
      <button onclick="document.getElementById('apptDetailPopup')?.remove();openAgendaApptModal('${a.id}')" style="font-size:11px;font-weight:700;color:var(--text);background:var(--surface2);padding:4px 10px;border-radius:99px;border:1px solid var(--border);cursor:pointer;font-family:inherit">✏️ Düzenle</button>
      <button onclick="deleteAgendaAppt('${a.id}')" style="font-size:11px;font-weight:700;color:var(--red,#ef4444);background:#ef444410;padding:4px 10px;border-radius:99px;border:none;cursor:pointer;font-family:inherit">🗑</button>
    </div>`,document.body.appendChild(s),setTimeout(()=>{document.addEventListener("click",function v(f){s.contains(f.target)||(s.remove(),document.removeEventListener("click",v))})},50)}async function dr(e,t){e.preventDefault();const n=window._draggingApptId;if(!n)return;window._draggingApptId=null;const a=e.currentTarget,i=a.getBoundingClientRect(),o=a.closest("[data-tl-scroll]"),s=o?o.scrollTop:0,l=(e.clientY-i.top+s)/nr*60+na*60,c=Math.max(na,Math.min(tr-1,Math.floor(l/60))),d=Math.round(l%60/15)*15,m=d>=60?0:d,u=`${String(c).padStart(2,"0")}:${String(m).padStart(2,"0")}`,{error:v}=await h.from("appointments").update({date:t,time:u}).eq("id",n);if(v){b("Hata: "+v.message);return}const f=p.appointments.find(k=>k.id===n);f&&(f.date=t,f.time=u),xe(),b("Randevu taşındı ✓")}function Ra(){xe()}function xe(){var c;const e=document.getElementById("view-todolist");if(!e)return;if(!document.getElementById("fc-styles")){const d=document.createElement("style");d.id="fc-styles",d.textContent=`
      .fc {
        --fc-border-color: var(--border) !important;
        --fc-page-bg-color: var(--surface) !important;
        font-family: inherit !important;
        color: var(--text) !important;
      }
      .fc .fc-col-header-cell-cushion,
      .fc .fc-timegrid-slot-label-cushion,
      .fc .fc-list-day-text,
      .fc .fc-list-day-side-text {
        color: var(--text) !important;
        font-weight: 700 !important;
        text-decoration: none !important;
      }
      .fc-theme-standard td, .fc-theme-standard th {
        border-color: var(--border) !important;
      }
      .fc .fc-toolbar-title {
        font-size: 15px !important;
        font-weight: 800 !important;
        color: var(--text) !important;
      }
      .fc .fc-button-primary {
        background-color: var(--surface2) !important;
        border-color: var(--border) !important;
        color: var(--text) !important;
        font-weight: 700 !important;
        font-size: 12px !important;
        text-transform: capitalize !important;
        padding: 5px 10px !important;
      }
      .fc .fc-button-primary:hover {
        background-color: var(--surface3) !important;
        border-color: var(--border) !important;
      }
      .fc .fc-button-active {
        background-color: var(--accent) !important;
        border-color: var(--accent) !important;
        color: #fff !important;
      }
      .fc .fc-list-event:hover td {
        background-color: var(--surface2) !important;
      }
      .fc .fc-list-empty {
        background-color: var(--surface) !important;
        color: var(--text-dim) !important;
      }
      .fc-v-event {
        border-radius: 8px !important;
        padding: 4px 8px !important;
        border: none !important;
        box-shadow: var(--shadow) !important;
      }
      .fc-event-title {
        font-weight: 700 !important;
        font-size: 11px !important;
      }
      .fc-event-time {
        font-size: 9px !important;
        opacity: 0.8;
      }
      .fc .fc-scroller {
        scrollbar-width: thin !important;
      }
    `,document.head.appendChild(d)}const t='<option value="">Tüm Öğrenciler</option>'+p.students.map(d=>`<option value="${d.id}"${ue.studentId===d.id?" selected":""}>${g(d.name)}</option>`).join(""),n='<option value="">Tüm Tipler</option>'+Object.keys(La).map(d=>`<option value="${d}"${ue.type===d?" selected":""}>${d}</option>`).join("");let a=p.appointments;ue.studentId&&(a=a.filter(d=>d.studentId===ue.studentId)),ue.type&&(a=a.filter(d=>d.type===ue.type));const i=a.map(d=>{const m=p.students.find(w=>w.id===d.studentId),u=Pa(d.type),v=`${d.date}T${d.time||"09:00"}`,f=new Date(v),k=new Date(f.getTime()+(d.duration||45)*6e4),y=w=>String(w).padStart(2,"0"),$=`${k.getFullYear()}-${y(k.getMonth()+1)}-${y(k.getDate())}T${y(k.getHours())}:${y(k.getMinutes())}:00`;return{id:d.id,title:`${(m==null?void 0:m.name)||"Öğrenci"} (${d.type||"Randevu"})`,start:v,end:$,backgroundColor:u,borderColor:u,textColor:"#ffffff",extendedProps:{...d}}}),o="font-size:12px;padding:6px 12px;border-radius:8px;border:1px solid var(--border);background:var(--surface);color:var(--text);cursor:pointer;font-family:inherit",r=((c=p.workspace)==null?void 0:c.google_calendar_connected)?`<span style="font-size:12px;color:var(--green);font-weight:600;display:flex;align-items:center;gap:4px">✓ Google Takvim${hr()}</span>`:'<button class="btn btn-ghost btn-sm" onclick="connectGoogleCalendar()">🔗 Google Takvim Bağla</button>';let l=document.getElementById("fc-calendar");if(!l)e.innerHTML=`
      <div style="display:flex;flex-direction:column;gap:12px;height:calc(100vh - 104px);overflow:hidden;box-sizing:border-box">
        <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap;flex-shrink:0">
          <select id="agendaStuSel" style="${o}" onchange="agendaSetFilter('studentId',this.value)">${t}</select>
          <select style="${o}" onchange="agendaSetFilter('type',this.value)">${n}</select>
          <button onclick="exportAgendaICS()" style="font-size:12px;padding:6px 12px;border-radius:8px;border:1px solid var(--border);background:var(--surface);cursor:pointer;font-family:inherit;color:var(--text)">📥 ICS İndir</button>
          ${r}
          <div style="flex:1"></div>
          <button class="btn btn-accent btn-sm" onclick="openAgendaApptModal(null)">+ Randevu Ekle</button>
        </div>
        <div style="display:flex;gap:12px;flex:1;min-height:0">
          <div id="fc-calendar" style="flex:1;min-width:0;background:var(--surface);border:1px solid var(--border);border-radius:16px;padding:12px;box-shadow:var(--shadow)"></div>
          <div id="agendaSidePanel" style="width:280px;flex-shrink:0;overflow-y:auto;${window.innerWidth<900?"display:none":""}">
            <div class="card cp">
              <div style="font-family:'Inter',sans-serif;font-size:14px;font-weight:700;margin-bottom:10px;padding-bottom:8px;border-bottom:1px solid var(--border)" id="apptListTitle">Yaklaşan Görüşmeler</div>
              <div id="apptList"></div>
            </div>
          </div>
        </div>
      </div>
    `,l=document.getElementById("fc-calendar");else{const d=e.querySelectorAll("select");d[0]&&(d[0].innerHTML=t),d[1]&&(d[1].innerHTML=n)}document.getElementById("apptList")&&St(),typeof FullCalendar<"u"?window._fcInstance?(window._fcInstance.removeAllEvents(),window._fcInstance.addEventSource(i),window._fcInstance.updateSize()):(window._fcInstance=new FullCalendar.Calendar(l,{initialView:window.innerWidth<700?"listWeek":"timeGridWeek",headerToolbar:{left:"prev,next today",center:"title",right:"dayGridMonth,timeGridWeek,timeGridDay,listWeek"},buttonText:{today:"Bugün",month:"Ay",week:"Hafta",day:"Gün",list:"Ajanda"},locale:"tr",firstDay:1,slotMinTime:"08:00",slotMaxTime:"23:00",allDaySlot:!1,editable:!0,droppable:!0,selectable:!0,eventClick:function(d){ja(d.event.id,d.jsEvent)},select:function(d){const m=d.startStr.slice(0,10),u=d.startStr.slice(11,16)||"14:00";Na(null,m),setTimeout(()=>{const v=document.getElementById("amTime");v&&(v.value=u)},50)},eventDrop:async function(d){const m=d.event.start,u=d.event.end||new Date(m.getTime()+45*6e4),v=m.getFullYear()+"-"+String(m.getMonth()+1).padStart(2,"0")+"-"+String(m.getDate()).padStart(2,"0"),f=String(m.getHours()).padStart(2,"0")+":"+String(m.getMinutes()).padStart(2,"0"),k=Math.round((u.getTime()-m.getTime())/6e4),y=d.event.id,{error:$}=await h.from("appointments").update({date:v,time:f,duration:k}).eq("id",y);if($){b("Hata: "+$.message),d.revert();return}const w=p.appointments.find(I=>I.id===y);w&&(w.date=v,w.time=f,w.duration=k),b("Randevu taşıma başarılı ✓")},eventResize:async function(d){const m=d.event.start,u=d.event.end;if(!u)return;const v=Math.round((u.getTime()-m.getTime())/6e4),f=d.event.id,{error:k}=await h.from("appointments").update({duration:v}).eq("id",f);if(k){b("Hata: "+k.message),d.revert();return}const y=p.appointments.find($=>$.id===f);y&&(y.duration=v),b("Randevu süresi güncellendi ✓")},events:i}),window._fcInstance.render()):console.warn("FullCalendar library not loaded yet")}function Na(e,t){const n=e?p.appointments.find(a=>a.id===e):null;document.getElementById("amTitle").textContent=n?"Randevuyu Düzenle":"Yeni Randevu",document.getElementById("amId").value=e||"",document.getElementById("amStudent").innerHTML=p.students.map(a=>`<option value="${a.id}" ${(n==null?void 0:n.studentId)===a.id?"selected":""}>${g(a.name)}</option>`).join(""),document.getElementById("amDate").value=n?n.date:t||G(new Date),document.getElementById("amTime").value=n?n.time:"14:00",document.getElementById("amDuration").value=n?n.duration:"45",document.getElementById("amType").value=n?n.type:"Haftalık Değerlendirme",document.getElementById("amNote").value=n&&n.note||"",document.getElementById("amMeetLink").value=n&&(n.meetLink||n.meet_link)||"",V("apptModal")}async function cr(e){await ie("Randevu silinsin mi?")&&(await h.from("appointments").delete().eq("id",e),p.appointments=p.appointments.filter(t=>t.id!==e),xe(),b("Randevu silindi"))}function pr(){et()}function ur(e){p.activeStuId=e,p.weekOffset=0,_e(),En(e)}function mr(e){const t=e?p.students.find(v=>v.id===e):null,n=!!t;document.getElementById("smTitle").textContent=n?"Öğrenciyi Düzenle":"Öğrenci Davet Et",document.getElementById("smId").value=e||"",document.getElementById("smName").value=(t==null?void 0:t.name)||"",document.getElementById("smTarget").value=(t==null?void 0:t.target)||"",document.getElementById("smUsername").value=(t==null?void 0:t.username)||"",document.getElementById("smPass").value=(t==null?void 0:t.pass)||STU_DEFAULT_PASS,document.getElementById("smWeekStart").value=(t==null?void 0:t.weekStart)??0,document.getElementById("smYksArea").value=(t==null?void 0:t.yksArea)||"SAY",document.getElementById("smProg").value=(t==null?void 0:t.progress)||0,document.getElementById("smProgVal").textContent=((t==null?void 0:t.progress)||0)+"%",document.querySelectorAll(".color-opt").forEach(v=>v.classList.toggle("sel",v.dataset.c===((t==null?void 0:t.color)||"#e8622a")));const a=document.getElementById("smEmailField"),i=document.getElementById("smTargetField"),o=document.getElementById("smInviteRow"),s=document.getElementById("smYksRow"),r=document.getElementById("smColorField"),l=document.getElementById("smProgField"),c=document.querySelector("#studentModal .btn-accent");a&&(a.style.display=n?"none":"block"),i&&(i.style.display=n?"block":"none"),o&&(o.style.display=n?"flex":"none"),s&&(s.style.display=n?"flex":"none"),r&&(r.style.display=n?"block":"none"),l&&(l.style.display=n?"block":"none");const d=document.getElementById("smContactSection");d&&(d.style.display=n?"block":"none",["smLevel","smStudentPhone","smParentEmail","smParentPhone"].forEach(v=>{const f=document.getElementById(v);f&&(f.value="")}),n&&h.from("student_profiles").select("level, student_phone, parent_email, parent_phone").eq("id",e).maybeSingle().then(({data:v})=>{if(!v)return;const f=(k,y)=>{const $=document.getElementById(k);$&&y&&($.value=y)};f("smLevel",v.level),f("smStudentPhone",v.student_phone),f("smParentEmail",v.parent_email),f("smParentPhone",v.parent_phone)}).catch(()=>{})),c&&(c.textContent=n?"Kaydet":"Davet Gönder",c.setAttribute("onclick","saveStudent()"));const m=document.getElementById("smRoleField");m&&(m.style.display="none");const u=document.getElementById("smDangerZone");if(u){u.style.display=n?"block":"none";const v=document.getElementById("smToggleActiveBtn");v&&t&&(v.textContent=t.active===!1?"▶️ Aktifleştir":"⏸ Pasifleştir")}V("studentModal")}async function gr(){const e=document.getElementById("smId").value,t=p.students.find(o=>o.id===e);if(!t)return;const n=t.active===!1,a=n?`${t.name} yeniden aktifleştirilsin mi? Öğrenci tekrar giriş yapabilecek.`:`${t.name} pasifleştirilsin mi? Girişi kapanır, tüm verileri korunur; dilediğinizde geri açabilirsiniz.`;if(!await ie(a))return;const{error:i}=await h.from("users").update({active:n}).eq("id",e);if(i)return b("Hata: "+i.message);t.active=n,Z("studentModal"),et(),b(n?"Öğrenci aktifleştirildi ✓":"Öğrenci pasifleştirildi — verileri korunuyor")}window.toggleStudentActive=gr;async function fr(){var n;const e=document.getElementById("smId").value,t=p.students.find(a=>a.id===e);if(t&&await ie(`"${t.name}" KALICI olarak silinsin mi?

Görevler, denemeler, mesajlar ve hesap geri döndürülemez şekilde yok edilir. Verileri korumak istiyorsanız Pasifleştir'i kullanın.`)){C(!0);try{const{data:{session:a}}=await h.auth.getSession(),i=await fetch("/api/delete-user",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${(a==null?void 0:a.access_token)||""}`},body:JSON.stringify({targetUserId:e})}),o=await i.json();if(!i.ok)throw new Error(o.error||"Silinemedi");p.students=p.students.filter(s=>s.id!==e),p.activeStuId===e&&(p.activeStuId=((n=p.students[0])==null?void 0:n.id)||null),_e(),Z("studentModal"),et(),b("Öğrenci kalıcı olarak silindi")}catch(a){b("Hata: "+a.message)}finally{C(!1)}}}window.hardDeleteStudent=fr;document.getElementById("smProg").addEventListener("input",function(){document.getElementById("smProgVal").textContent=this.value+"%"});document.getElementById("smColorPick").addEventListener("click",function(e){const t=e.target.closest(".color-opt");t&&(document.querySelectorAll(".color-opt").forEach(n=>n.classList.remove("sel")),t.classList.add("sel"))});async function yr(){var l,c,d,m,u,v,f,k;const e=document.getElementById("smName").value.trim();if(!e)return b("İsim girin!");const t=((l=document.querySelector(".color-opt.sel"))==null?void 0:l.dataset.c)||"#e8622a",n=document.getElementById("smId").value,a=Ve(document.getElementById("smUsername").value.trim())||Ve(e.split(" ")[0])+Math.floor(Math.random()*100),i=document.getElementById("smPass").value||STU_DEFAULT_PASS,o=await Xe(i),s=document.getElementById("smYksArea").value,r={full_name:e,target:document.getElementById("smTarget").value.trim()||"Hedef belirtilmemiş",color:t,progress:Number(document.getElementById("smProg").value),password_hash:o,week_start:Number(document.getElementById("smWeekStart").value),username:a,role:"student",coach_id:x.coachId,yks_area:s};if(n){const{error:y}=await h.rpc("update_student_profile",{p_student_id:n,p_full_name:e,p_target:r.target,p_color:t,p_progress:r.progress,p_week_start:r.week_start,p_username:a,p_plain_password:i,p_password_hash:o,p_yks_area:r.yks_area});if(y)return b("Hata: "+y.message);const $=p.students.find(S=>S.id===n);$&&Object.assign($,{name:r.full_name,target:r.target,color:t,progress:r.progress,pass:r.password_hash,weekStart:r.week_start,username:a,yksArea:r.yks_area});const w=((c=document.getElementById("smLevel"))==null?void 0:c.value)||"",I=((d=document.getElementById("smStudentPhone"))==null?void 0:d.value.trim())||"",T=((m=document.getElementById("smParentEmail"))==null?void 0:m.value.trim())||"",B=((u=document.getElementById("smParentPhone"))==null?void 0:u.value.trim())||"";if(w||I||T||B){const S={id:n};w&&(S.level=w),I&&(S.student_phone=I),T&&(S.parent_email=T),B&&(S.parent_phone=B);const{error:M}=await h.from("student_profiles").upsert(S);M&&!/column/i.test(M.message||"")&&console.warn("student_profiles upsert:",M.message)}b("Güncellendi ✓"),_e(),Z("studentModal"),et()}else{const y=(v=document.getElementById("smEmail"))==null?void 0:v.value.trim();if(!y||!y.includes("@"))return b("Geçerli bir e-posta adresi girin!");const{data:{session:$}}=await h.auth.getSession();b("Davet gönderiliyor...");try{const w=await fetch("/api/invitation?action=create",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${($==null?void 0:$.access_token)||""}`,"X-Coach-Id":((f=x.dbUser)==null?void 0:f.id)||"","X-Coach-Hash":((k=x.dbUser)==null?void 0:k.password_hash)||""},body:JSON.stringify({email:y,student_name:r.full_name,username:a})}),I=await w.json();if(!w.ok)return b("Hata: "+I.error);b("Davet oluşturuldu ✓"),_e(),Z("studentModal");const B=`${window.location.origin+window.location.pathname.replace("app.html","")}davet.html?token=${I.token}`;Ha(r.full_name,y,B,I.token)}catch(w){console.error(w),b("İletişim hatası oluştu.")}}}function Ha(e,t,n,a){let i=document.getElementById("inviteModal");i||(i=document.createElement("div"),i.id="inviteModal",i.className="modal-bg",document.body.appendChild(i),i.addEventListener("click",s=>{s.target===i&&i.classList.remove("open")}));const o=encodeURIComponent(`Merhaba ${e}! 🎓

Rostrum Akademi platformuna katılım davetin hazır. Aşağıdaki linke tıklayarak parolanı belirleyip hemen başlayabilirsin:

🔗 Davet Linki: ${n}`);i.innerHTML=`<div class="modal" style="max-width:480px">
    <button class="modal-close" onclick="cm('inviteModal');renderStudentsSearch()">×</button>
    <div style="text-align:center;margin-bottom:20px">
      <div style="font-size:40px;margin-bottom:8px">📬</div>
      <h2>Davet Hazır!</h2>
      <p style="font-size:13px;color:var(--text-mid);margin-top:6px">Daveti nasıl iletmek istersiniz?</p>
    </div>

    <div style="display:flex;gap:10px;margin-bottom:16px">
      <button class="btn" id="inviteMailBtn" onclick="sendInviteEmail('${a||""}')" style="flex:1;flex-direction:column;gap:6px;padding:18px 12px;justify-content:center;background:var(--surface2);border:1.5px solid var(--border);border-radius:12px">
        <span style="font-size:26px">📧</span>
        <span style="font-size:13px;font-weight:700">E-posta ile Gönder</span>
        <span style="font-size:10px;color:var(--text-dim)">${g(t)}</span>
      </button>
      <a href="https://wa.me/?text=${o}" target="_blank" class="btn" style="flex:1;flex-direction:column;gap:6px;padding:18px 12px;justify-content:center;background:rgba(37,211,102,.1);border:1.5px solid rgba(37,211,102,.4);border-radius:12px;text-decoration:none;color:var(--text)">
        <span style="font-size:26px">💬</span>
        <span style="font-size:13px;font-weight:700">WhatsApp ile Gönder</span>
        <span style="font-size:10px;color:var(--text-dim)">Kişi seçerek paylaş</span>
      </a>
    </div>

    <div style="background:var(--surface2);border:1px solid var(--border);border-radius:12px;padding:14px 16px;margin-bottom:12px">
      <div style="font-size:10px;font-weight:700;color:var(--text-dim);text-transform:uppercase;letter-spacing:.5px;margin-bottom:4px">Davet Bağlantısı <span style="font-weight:400;text-transform:none">(48 saat geçerli)</span></div>
      <div style="font-size:12px;color:var(--blue);word-break:break-all">${n}</div>
    </div>

    <button class="btn btn-ghost" style="width:100%;justify-content:center" onclick="copyStudentInviteLink('${n}')">📋 Bağlantıyı Kopyala</button>

    <div style="background:var(--focus-purple-dim);border:1px solid var(--focus-purple);border-radius:12px;padding:14px 16px;margin-top:14px;text-align:center">
      <div style="font-size:12px;color:var(--focus-purple);font-weight:700">💡 Sırada ne var?</div>
      <div style="font-size:11px;color:var(--text-mid);margin-top:4px;line-height:1.5">${g(e)} daveti kabul edip ilk giriş yaptığında Öğrencilerim listende görünecek — o an haftalık programını hazırlayıp panelde hazır bulmasını sağlayabilirsin.</div>
    </div>
  </div>`,window._pendingInvite={name:e,email:t,inviteUrl:n},V("inviteModal")}async function vr(e){if(!e)return b("Davet bilgisi eksik — bağlantıyı kopyalayıp iletebilirsiniz");const t=document.getElementById("inviteMailBtn");t&&(t.disabled=!0,t.style.opacity=".6");try{const n=await fetch("/api/invitation?action=send_email",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({token:e})}),a=await n.json();if(!n.ok)throw new Error(a.error||"Gönderilemedi");b("Davet e-postası gönderildi ✓"),t&&(t.innerHTML='<span style="font-size:26px">✅</span><span style="font-size:13px;font-weight:700">E-posta Gönderildi</span>')}catch(n){b("Hata: "+n.message),t&&(t.disabled=!1,t.style.opacity="1")}}window.sendInviteEmail=vr;function xr(e){navigator.clipboard.writeText(e).then(()=>b("Bağlantı kopyalandı ✓")).catch(()=>{const t=document.createElement("textarea");t.value=e,document.body.appendChild(t),t.select(),document.execCommand("copy"),t.remove(),b("Bağlantı kopyalandı ✓")})}function br(){const e="217851738834-1cp3fk66hfhm0mr2aklsk3jphqmub2s3.apps.googleusercontent.com",t=encodeURIComponent("https://www.rostrumakademi.com/app.html"),n=encodeURIComponent("https://www.googleapis.com/auth/calendar.events"),a=`https://accounts.google.com/o/oauth2/v2/auth?client_id=${e}&redirect_uri=${t}&response_type=code&scope=${n}&access_type=offline&prompt=consent&state=google_calendar`;window.location.href=a}window.connectGoogleCalendar=br;function hr(){try{const e=localStorage.getItem(`gcal_sync_${x.coachId}`);if(!e)return"";const{time:t,mode:n}=JSON.parse(e),a=new Date(t),i=a.toLocaleDateString("tr-TR",{day:"numeric",month:"long"}),o=a.toLocaleTimeString("tr-TR",{hour:"2-digit",minute:"2-digit"});return`<div style="font-size:10px;color:var(--text-mid);text-align:right;margin-top:3px">${i} ${o} · ${n==="auto"?"Otomatik":"Elle"}</div>`}catch{return""}}function St(){const e=ce();let t=p.appointments,n="Yaklaşan Görüşmeler";if(p.calSelDay?(t=t.filter(a=>a.date===p.calSelDay),n=new Date(p.calSelDay+"T12:00").toLocaleDateString("tr-TR",{day:"numeric",month:"long"})):t=t.filter(a=>a.date>=e).sort((a,i)=>a.date.localeCompare(i.date)).slice(0,10),document.getElementById("apptListTitle").textContent=n,!t.length){document.getElementById("apptList").innerHTML='<div class="empty"><p>Randevu yok</p></div>';return}document.getElementById("apptList").innerHTML=t.map(a=>{const i=p.students.find(r=>r.id===a.studentId),s=a.date===e?"BUGÜN":new Date(a.date+"T12:00").toLocaleDateString("tr-TR",{day:"numeric",month:"short"});return`<div data-appt-id="${a.id}" class="appt-item" style="border-left-color:${(i==null?void 0:i.color)||"#555"}">
      <div class="appt-when">${s} • ${a.time} (${a.duration} dk)</div>
      <div class="appt-name">${g((i==null?void 0:i.name)||"?")}</div>
      <div class="appt-type">${g(a.type)}</div>
      ${a.note?`<div class="appt-note">${g(a.note)}</div>`:""}
      ${a.meet_link?`<div style="margin-top:6px;display:flex;gap:6px;align-items:center">
        <a href="${g(a.meet_link)}" target="_blank" style="font-size:11px;background:var(--blue-dim);color:var(--blue);padding:3px 10px;border-radius:99px;text-decoration:none;font-weight:700">${a.meet_link.includes("zoom")?"🎥 Zoom":"📹 Meet"}</a>
        <button class="btn btn-ghost btn-xs" onclick="copyToClipboard('${g(a.meet_link)}')">Kopyala</button>
      </div>`:""}
      <div class="appt-actions">
        <button class="btn btn-ghost btn-xs" onclick="openApptModal('${a.id}')">✏️</button>
        <button class="btn btn-danger btn-xs" onclick="deleteAppt('${a.id}')">🗑</button>
      </div>
    </div>`}).join("")}function kr(e){const t=e?p.appointments.find(n=>n.id===e):null;document.getElementById("amTitle").textContent=t?"Randevuyu Düzenle":"Yeni Randevu",document.getElementById("amId").value=e||"",document.getElementById("amStudent").innerHTML=p.students.map(n=>`<option value="${n.id}" ${(t==null?void 0:t.studentId)===n.id?"selected":""}>${g(n.name)}</option>`).join(""),document.getElementById("amDate").value=t?t.date:G(new Date),document.getElementById("amTime").value=t?t.time:"14:00",document.getElementById("amDuration").value=t?t.duration:"45",document.getElementById("amType").value=t?t.type:"Haftalık Değerlendirme",document.getElementById("amNote").value=(t==null?void 0:t.note)||"",document.getElementById("amMeetLink").value=(t==null?void 0:t.meet_link)||"",V("apptModal")}let cn=!1;async function wr(){if(!cn){cn=!0;try{await $r()}finally{cn=!1}}}async function $r(){var s,r;const e=document.getElementById("amStudent").value,t=document.getElementById("amDate").value,n=document.getElementById("amTime").value;if(!e||!t||!n)return b("Tüm alanları doldurun!");const a=document.getElementById("amMeetLink").value.trim();if(a&&!a.startsWith("https://"))return b("Toplantı linki https:// ile başlamalı");if(a&&!/zoom\.us|meet\.google|teams\.microsoft|webex\.com/.test(a))return b("Geçersiz link — Zoom, Meet, Teams veya Webex linki girin");const i=document.getElementById("amId").value,o={student_id:e,coach_id:x.coachId,date:t,time:n,duration:parseInt(document.getElementById("amDuration").value),type:document.getElementById("amType").value,note:document.getElementById("amNote").value.trim(),meet_link:a};if(i){await h.from("appointments").update(o).eq("id",i);const l=p.appointments.find(c=>c.id===i);if(l&&Object.assign(l,{studentId:e,date:t,time:n,duration:o.duration,type:o.type,note:o.note}),b("Güncellendi ✓"),(s=p.workspace)!=null&&s.google_calendar_connected&&(l!=null&&l.google_event_id)){const c=p.students.find(d=>d.id===e);fn("update",{date:t,hour:n,notes:o.note,student_name:c==null?void 0:c.name,google_event_id:l.google_event_id}).catch(()=>{})}}else{const{data:l,error:c}=await h.from("appointments").insert(o).select().single();if(c)return b("Hata: "+c.message);const d={id:l.id,studentId:l.student_id,date:l.date,time:l.time,duration:l.duration,type:l.type,note:l.note,google_event_id:null};if(p.appointments.push(d),b("Randevu eklendi ✓"),(r=p.workspace)!=null&&r.google_calendar_connected){const m=p.students.find(u=>u.id===e);fn("create",{appointment_id:l.id,date:t,hour:n,notes:o.note,student_name:m==null?void 0:m.name}).then(u=>{u&&(d.google_event_id=u)}).catch(()=>{})}}Z("apptModal"),currentTab==="todolist"&&xe(),document.getElementById("apptList")&&St()}async function _r(){var t,n;const e=document.getElementById("gcalSyncBtn");e&&(e.disabled=!0,e.textContent="⏳ Senkronize ediliyor...");try{const{data:{session:a}}=await h.auth.getSession();if(!(a!=null&&a.access_token))return b("Oturum hatası");const o=await(await fetch("/api/mailer",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${a.access_token}`},body:JSON.stringify({type:"google_calendar_sync"})})).json();if(!o.success)return b("Senkronizasyon hatası: "+(o.error||"Bilinmeyen"));(t=o.deletedIds)!=null&&t.length&&(p.appointments=p.appointments.filter(r=>!o.deletedIds.includes(r.id))),(n=o.updatedItems)==null||n.forEach(r=>{const l=p.appointments.find(c=>c.id===r.id);l&&(l.date=r.date,l.time=r.time)}),localStorage.setItem(`gcal_sync_${x.coachId}`,JSON.stringify({time:new Date().toISOString(),mode:"manual"}));const s=[];o.deleted>0&&s.push(`${o.deleted} randevu silindi`),o.updated>0&&s.push(`${o.updated} randevu güncellendi`),b(s.length?"Senkronize edildi: "+s.join(", ")+" ✓":"Senkronize edildi, değişiklik yok ✓"),currentTab==="todolist"&&xe(),document.getElementById("apptList")&&St()}catch(a){b("Senkronizasyon hatası: "+a.message),e&&(e.disabled=!1,e.textContent="🔄 Senkronize Et")}}window.syncFromGoogle=_r;async function fn(e,t){const{data:{session:n}}=await h.auth.getSession();return n!=null&&n.access_token&&(await(await fetch("/api/mailer",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${n.access_token}`},body:JSON.stringify({type:"google_calendar_event",action:e,appointment:t})})).json()).google_event_id||null}async function Er(e){var a;if(!await ie("Bu randevuyu silmek istediğinizden emin misiniz?"))return;const t=p.appointments.find(i=>i.id===e),n=document.querySelector(`[data-appt-id="${e}"]`);if(n){n.style.transition="all 0.3s ease",n.style.opacity="0",n.style.transform="translateX(30px)";const i=n.querySelector(".appt-name");i&&(i.innerHTML='<span style="color:var(--red); font-weight:700">🗑️ Siliniyor...</span>')}await new Promise(i=>setTimeout(i,300)),(a=p.workspace)!=null&&a.google_calendar_connected&&(t!=null&&t.google_event_id)&&fn("delete",{google_event_id:t.google_event_id}).catch(()=>{}),await h.from("appointments").delete().eq("id",e),p.appointments=p.appointments.filter(i=>i.id!==e),currentTab==="todolist"&&xe(),document.getElementById("apptList")&&St(),b("Silindi")}function Tr(){const e=ce(),t=p.appointments.filter(r=>r.date>=e).sort((r,l)=>r.date.localeCompare(l.date));if(!t.length)return b("Yaklaşan randevu bulunamadı.");const n=r=>String(r).padStart(2,"0"),a=["BEGIN:VCALENDAR","VERSION:2.0","PRODID:-//Rostrum Akademi//TR","CALSCALE:GREGORIAN","METHOD:PUBLISH","BEGIN:VTIMEZONE","TZID:Europe/Istanbul","BEGIN:STANDARD","TZOFFSETFROM:+0300","TZOFFSETTO:+0300","TZNAME:TRT","DTSTART:19700101T000000","END:STANDARD","END:VTIMEZONE"];t.forEach(r=>{const l=p.students.find($=>$.id===r.studentId),[c,d,m]=r.date.split("-"),[u,v]=(r.time||"09:00").split(":"),f=`${c}${d}${m}T${u}${v}00`,k=new Date(Number(c),Number(d)-1,Number(m),Number(u),Number(v)+(r.duration||45)),y=`${k.getFullYear()}${n(k.getMonth()+1)}${n(k.getDate())}T${n(k.getHours())}${n(k.getMinutes())}00`;a.push("BEGIN:VEVENT"),a.push(`UID:ra-appt-${r.id}@rostrumakademi.com`),a.push(`DTSTART;TZID=Europe/Istanbul:${f}`),a.push(`DTEND;TZID=Europe/Istanbul:${y}`),a.push(`SUMMARY:${r.type}${l?" — "+l.name:""}`),r.note&&a.push(`DESCRIPTION:${r.note.replace(/[\r\n]+/g,"\\n")}`),r.meet_link&&a.push(`URL:${r.meet_link}`),a.push("END:VEVENT")}),a.push("END:VCALENDAR");const i=new Blob([a.join(`\r
`)],{type:"text/calendar;charset=utf-8"}),o=URL.createObjectURL(i),s=document.createElement("a");s.href=o,s.download="rostrum-randevular.ics",s.click(),setTimeout(()=>URL.revokeObjectURL(o),1e3),b(`${t.length} randevu takvim dosyasına aktarıldı ✓`)}function Ht(e){return 100+(Number(e.Türkçe||0)+Number(e.Matematik||0)+Number(e.Fen||0)+Number(e.Sosyal||0))*(400/120)}function Ya(e,t){const n=a=>Number(t[a]||0);return e==="AYT-SAY"?100+(n("Matematik")+n("Fizik")+n("Kimya")+n("Biyoloji"))*5:e==="AYT-EA"?100+(n("Matematik")+n("Edebiyat")+n("Tarih")+n("Coğrafya"))*5:e==="AYT-SOZ"?100+(n("Edebiyat")+n("Tarih1")+n("Tarih2")+n("Coğrafya1")+n("Coğrafya2")+n("Felsefe")+n("Din"))*5:null}const Ka={"AYT-SAY":"SAY","AYT-EA":"EA","AYT-SOZ":"SÖZ"},Yt={TYT:"#3B82F6",SAY:"#8B5CF6",EA:"#10B981",SÖZ:"#F59E0B"};function Fa(e,t){const{type:n,nets:a}=e;if(n==="TYT"){const l=Ht(a),c=Yt.TYT;return`<div style="margin-top:10px;display:flex;align-items:center;gap:8px;flex-wrap:wrap">
      <span style="background:${c}18;border:1px solid ${c}40;border-radius:8px;padding:5px 12px;display:inline-flex;gap:7px;align-items:baseline">
        <span style="font-size:10px;font-weight:700;color:${c};text-transform:uppercase">TYT Puan</span>
        <span style="font-size:18px;font-weight:900;color:${c}">${l.toFixed(2)}</span>
      </span>
    </div>`}const i=Ka[n];if(!i)return"";const o=Yt[i]||"#64748B",s=Ya(n,a),r=t.filter(l=>l.type==="TYT"&&l.date<=e.date).sort((l,c)=>c.date.localeCompare(l.date))[0];if(r){const l=Ht(r.nets),c=l*.4+s*.6;return`<div style="margin-top:10px;display:flex;align-items:center;gap:10px;flex-wrap:wrap">
      <span style="background:${o}18;border:1px solid ${o}40;border-radius:8px;padding:5px 12px;display:inline-flex;gap:7px;align-items:baseline">
        <span style="font-size:10px;font-weight:700;color:${o};text-transform:uppercase">${i} Puan</span>
        <span style="font-size:18px;font-weight:900;color:${o}">${c.toFixed(2)}</span>
      </span>
      <span style="font-size:11px;color:var(--text-dim)">TYT×0.4 <b>${(l*.4).toFixed(1)}</b> · AYT×0.6 <b>${(s*.6).toFixed(1)}</b></span>
    </div>`}return`<div style="margin-top:10px;display:flex;align-items:center;gap:8px;flex-wrap:wrap">
    <span style="background:${o}18;border:1px solid ${o}40;border-radius:8px;padding:5px 12px;display:inline-flex;gap:7px;align-items:baseline">
      <span style="font-size:10px;font-weight:700;color:${o};text-transform:uppercase">AYT ${i} Ham</span>
      <span style="font-size:18px;font-weight:900;color:${o}">${s.toFixed(2)}</span>
    </span>
    <span style="font-size:10px;color:var(--text-dim);font-style:italic">TYT etkisi dahil değil</span>
  </div>`}function Sr(){var l,c;const e=document.getElementById("emPuanDisplay");if(!e)return;const t=(l=document.getElementById("emExamType"))==null?void 0:l.value;if(!t)return;const n={};if((EXAM_DEFS[t]||[]).forEach(d=>{const m=se[d]||{};n[d]=Math.max(0,(m.dogru||0)-(m.yanlis||0)/4)}),t==="TYT"){const d=Ht(n),m=Yt.TYT;e.innerHTML=`<div style="background:${m}12;border:1px solid ${m}35;border-radius:10px;padding:10px 14px;display:flex;align-items:center;gap:10px">
      <span style="font-size:11px;font-weight:700;color:${m};text-transform:uppercase;letter-spacing:.4px">🎯 TYT Puan</span>
      <span style="font-size:24px;font-weight:900;color:${m};letter-spacing:-.5px">${d.toFixed(2)}</span>
    </div>`;return}const a=Ka[t],i=Yt[a]||"#64748B",o=Ya(t,n);if(o===null){e.innerHTML="";return}const s=(c=document.getElementById("emStudent"))==null?void 0:c.value,r=s?[...p.exams].filter(d=>d.studentId===s&&d.type==="TYT").sort((d,m)=>m.date.localeCompare(d.date))[0]:null;if(r){const d=Ht(r.nets),m=d*.4+o*.6;e.innerHTML=`<div style="background:${i}12;border:1px solid ${i}35;border-radius:10px;padding:10px 14px">
      <div style="display:flex;align-items:center;gap:10px;flex-wrap:wrap">
        <span style="font-size:11px;font-weight:700;color:${i};text-transform:uppercase;letter-spacing:.4px">🎯 ${a} Puan</span>
        <span style="font-size:24px;font-weight:900;color:${i};letter-spacing:-.5px">${m.toFixed(2)}</span>
        <span style="font-size:11px;color:var(--text-dim)">TYT×0.4=${(d*.4).toFixed(1)} · AYT×0.6=${(o*.6).toFixed(1)}</span>
      </div>
      <div style="font-size:10px;color:var(--text-dim);margin-top:3px">TYT: ${r.date} tarihli deneme baz alındı</div>
    </div>`}else e.innerHTML=`<div style="background:${i}12;border:1px solid ${i}35;border-radius:10px;padding:10px 14px;display:flex;align-items:center;gap:10px;flex-wrap:wrap">
      <span style="font-size:11px;font-weight:700;color:${i};text-transform:uppercase;letter-spacing:.4px">🎯 AYT ${a} Ham</span>
      <span style="font-size:24px;font-weight:900;color:${i};letter-spacing:-.5px">${o.toFixed(2)}</span>
      <span style="font-size:10px;color:var(--text-dim);font-style:italic">TYT puanı bulunamadı</span>
    </div>`}function Ir(e,t){var W;if(!e.length)return"";const n=[...e].sort((R,H)=>R.date.localeCompare(H.date)).slice(-8),a=n[n.length-1],i=n.length>=2?n[n.length-2]:null,o=EXAM_DEFS[a.type]||[],s=(t==null?void 0:t.color)||"#e8622a",r=o.reduce((R,H)=>{var Y;return R+Number(((Y=a.nets)==null?void 0:Y[H])||0)},0),l=i?o.reduce((R,H)=>{var Y;return R+Number(((Y=i.nets)==null?void 0:Y[H])||0)},0):null,c=l!==null?r-l:null,d=o.length?o.reduce((R,H)=>{var Y,Q;return Number(((Y=a.nets)==null?void 0:Y[H])||0)<Number(((Q=a.nets)==null?void 0:Q[R])||0)?H:R},o[0]):null,m=c===null?"var(--text-dim)":c>=0?"#3ecf8e":"#ef4444",u=c===null?"—":(c>=0?"+":"")+c.toFixed(1),v=`<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin-bottom:16px">
    <div style="background:var(--surface2);border:1px solid var(--border);border-radius:10px;padding:12px;text-align:center">
      <div style="font-size:9px;font-weight:700;color:var(--text-dim);text-transform:uppercase;letter-spacing:.6px;margin-bottom:5px">Son Deneme</div>
      <div style="font-family:'Inter',sans-serif;font-size:26px;font-weight:900;color:${s};line-height:1">${r.toFixed(1)}</div>
      <div style="font-size:9px;color:var(--text-dim);margin-top:3px">toplam net</div>
    </div>
    <div style="background:var(--surface2);border:1px solid var(--border);border-radius:10px;padding:12px;text-align:center">
      <div style="font-size:9px;font-weight:700;color:var(--text-dim);text-transform:uppercase;letter-spacing:.6px;margin-bottom:5px">Gelişim</div>
      <div style="font-family:'Inter',sans-serif;font-size:26px;font-weight:900;line-height:1;color:${m}">${u}</div>
      <div style="font-size:9px;color:var(--text-dim);margin-top:3px">${l!==null?"önceki denemeden":"tek deneme"}</div>
    </div>
    <div style="background:var(--surface2);border:1px solid var(--border);border-radius:10px;padding:12px;text-align:center">
      <div style="font-size:9px;font-weight:700;color:var(--text-dim);text-transform:uppercase;letter-spacing:.6px;margin-bottom:5px">Eksik Ders</div>
      ${d?`<div style="font-size:15px;font-weight:900;line-height:1.2;color:#ef4444">${g(d)}</div>
      <div style="font-size:11px;font-weight:700;color:var(--text-mid);margin-top:3px">${Number(((W=a.nets)==null?void 0:W[d])||0).toFixed(1)} net</div>`:'<div style="font-size:12px;color:var(--text-dim)">—</div>'}
    </div>
  </div>`,f=o.map(R=>{var oe;const H=Number(((oe=a.nets)==null?void 0:oe[R])||0),Y=(EXAM_SORU[a.type]||{})[R]||40,Q=Math.min(100,Math.max(0,H/Y*100)),U=H>=Y*.6?"#3ecf8e":H>=Y*.35?"#f0a500":"#ef4444";return`<div style="margin-bottom:11px">
      <div style="display:flex;justify-content:space-between;align-items:baseline;margin-bottom:4px">
        <span style="font-size:12px;font-weight:600;color:var(--text)">${g(R)}</span>
        <span style="font-size:14px;font-weight:800;color:${U};font-family:'Inter',sans-serif">${H.toFixed(1)}</span>
      </div>
      <div style="background:rgba(255,255,255,0.07);border-radius:4px;height:7px;overflow:hidden">
        <div style="width:${Q.toFixed(1)}%;height:100%;background:${U};border-radius:4px"></div>
      </div>
    </div>`}).join("");if(n.length<2)return`<div class="card cp" style="margin-bottom:16px">
    <div style="font-size:11px;font-weight:700;margin-bottom:12px;color:var(--text-mid);text-transform:uppercase;letter-spacing:.5px">📊 Deneme Özeti</div>
    ${v}
    <div style="font-size:10px;font-weight:700;color:var(--text-dim);text-transform:uppercase;letter-spacing:.5px;margin-bottom:10px">Son Deneme · Derse Göre</div>
    ${f}
  </div>`;const k=n.map(R=>(EXAM_DEFS[R.type]||[]).reduce((Y,Q)=>{var U;return Y+Number(((U=R.nets)==null?void 0:U[Q])||0)},0)),y=Math.max(...k,10),$=n.length,w=Math.max(560,$*85),I=160,T=40,B=16,S=28,M=30,E=w-T-B,A=I-S-M,P=R=>T+($<=1?E/2:R/($-1)*E),D=R=>S+A-R/y*A,_=y/4,L=_<=10?10:_<=20?20:_<=25?25:50,j=[];for(let R=0;R<=y+L;R+=L)R<=y*1.12&&j.push(R);const K=j.map(R=>{const H=D(R).toFixed(1);return`<line x1="${T}" y1="${H}" x2="${w-B}" y2="${H}" stroke="rgba(255,255,255,0.05)" stroke-width="1"/><text x="${T-5}" y="${(D(R)+3.5).toFixed(1)}" text-anchor="end" font-size="9" fill="rgba(200,215,230,0.28)" font-family="system-ui,sans-serif">${R}</text>`}).join(""),F=n.map((R,H)=>`${P(H).toFixed(1)},${D(k[H]).toFixed(1)}`).join(" "),z=`M ${P(0).toFixed(1)},${D(k[0]).toFixed(1)} `+n.slice(1).map((R,H)=>`L ${P(H+1).toFixed(1)},${D(k[H+1]).toFixed(1)}`).join(" ")+` L ${P($-1).toFixed(1)},${(S+A).toFixed(1)} L ${P(0).toFixed(1)},${(S+A).toFixed(1)} Z`,N="ag"+Math.random().toString(36).slice(2,7),J=n.map((R,H)=>{const Y=P(H).toFixed(1),Q=D(k[H]).toFixed(1),U=`toggleExamRow('${R.id}');document.getElementById('exd_${R.id}')?.scrollIntoView({behavior:'smooth',block:'center'})`;return`<circle cx="${Y}" cy="${Q}" r="16" fill="transparent" style="cursor:pointer" onclick="${U}"/><circle cx="${Y}" cy="${Q}" r="5" fill="${s}" stroke="#0d0d0f" stroke-width="2.5" style="pointer-events:none"/><text x="${Y}" y="${(D(k[H])-10).toFixed(1)}" text-anchor="middle" font-size="9.5" font-weight="700" fill="${s}" font-family="system-ui,sans-serif" style="pointer-events:none">${k[H].toFixed(0)}</text>`}).join(""),O=n.map((R,H)=>{let Y=R.name.replace(/Deneme\s+/,"#").replace(/^(TYT|AYT-SAY|AYT-EA|AYT-SOZ)\s+/,"");return Y.length>7&&(Y=Y.slice(0,6)+"…"),`<text x="${P(H).toFixed(1)}" y="${(I-M+14).toFixed(1)}" text-anchor="middle" font-size="9" fill="rgba(200,215,230,0.35)" font-family="system-ui,sans-serif">${g(Y)}</text>`}).join(""),q=`<div class="chart-scroll" style="overflow-x:auto;-webkit-overflow-scrolling:touch;touch-action:pan-x">
  <svg viewBox="0 0 ${w} ${I}" style="width:${w}px;max-width:none;height:auto;display:block" xmlns="http://www.w3.org/2000/svg">
  <defs><linearGradient id="${N}" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="${s}" stop-opacity="0.2"/>
    <stop offset="100%" stop-color="${s}" stop-opacity="0"/>
  </linearGradient></defs>
  ${K}
  <path d="${z}" fill="url(#${N})"/>
  <polyline points="${F}" fill="none" stroke="${s}" stroke-width="2.5" stroke-linejoin="round" stroke-linecap="round"/>
  ${J}${O}
</svg></div>`;return`<div class="card cp" style="margin-bottom:16px">
    <div style="font-size:11px;font-weight:700;margin-bottom:12px;color:var(--text-mid);text-transform:uppercase;letter-spacing:.5px">📊 Deneme Takibi</div>
    ${v}
    <div style="font-size:10px;font-weight:700;color:var(--text-dim);text-transform:uppercase;letter-spacing:.5px;margin-bottom:8px">Toplam Net Trendi · Son ${$} Deneme</div>
    ${q}
    <div style="font-size:10px;font-weight:700;color:var(--text-dim);text-transform:uppercase;letter-spacing:.5px;margin:16px 0 10px">Son Deneme · Derse Göre</div>
    ${f}
  </div>`}let rt="all",Ae={key:"date",dir:-1};function zr(e){rt=e,Be()}window.setExamFilter=zr;function Br(e){Ae.key===e?Ae.dir*=-1:Ae={key:e,dir:-1},Be()}window.setExamSort=Br;function Mr(e){p.activeStuId=e,rt="all",_e(),Be()}window.switchExamStudent=Mr;function Ar(e){const t=document.getElementById("exd_"+e);t&&(t.style.display=t.style.display==="none"?"table-row":"none")}window.toggleExamRow=Ar;function Dr(e,t){const n=EXAM_DEFS[e.type]||[];return`
    <div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:4px">
      ${n.map(a=>{var s;const i=Number(((s=e.nets)==null?void 0:s[a])||0),o=i>=20?"var(--green)":i>=12?"var(--accent)":"var(--red)";return`<div style="background:var(--surface);border:1px solid var(--border);border-radius:9px;padding:8px 12px;min-width:70px;text-align:center">
          <div style="font-size:10px;color:var(--text-dim);font-weight:600;text-transform:uppercase;letter-spacing:.3px;margin-bottom:4px">${a}</div>
          <div style="font-family:'Inter',sans-serif;font-size:18px;font-weight:800;color:${o}">${i}</div>
        </div>`}).join("")}
    </div>
    ${Fa(e,t)}
    ${e.note?`<div style="margin-top:10px;font-size:12px;color:var(--text-mid);font-style:italic">"${g(e.note)}"</div>`:""}
    ${(()=>{if(!e.examDetails||!Object.keys(e.examDetails).length)return"";const a=n.map(i=>{const o=e.examDetails[i];if(!o)return"";const s=Math.max(0,(o.dogru||0)-(o.yanlis||0)/4).toFixed(2),r=o.yanlis_konular||[];return`<div style="padding:6px 0;border-bottom:1px solid var(--border)">
          <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:${r.length?"5px":"0"}">
            <span style="font-size:11px;font-weight:700;color:var(--text-mid)">${g(i)}</span>
            <span style="font-size:11px;color:var(--text-dim)">D:<b style="color:var(--green)">${o.dogru||0}</b> Y:<b style="color:var(--red)">${o.yanlis||0}</b> B:<b>${o.bos||0}</b> · Net <b style="color:var(--accent)">${s}</b></span>
          </div>
          ${r.length?`<div style="display:flex;flex-wrap:wrap;gap:3px">${r.map(l=>`<span style="font-size:10px;padding:2px 8px;border-radius:10px;background:rgba(255,92,122,.1);color:var(--red);border:1px solid rgba(255,92,122,.2)">${g(l)}</span>`).join("")}</div>`:""}
        </div>`}).filter(Boolean).join("");return a?`<div style="margin-top:10px;background:var(--surface);border:1px solid var(--border);border-radius:9px;padding:10px 14px">
        <div style="font-size:10px;font-weight:700;color:var(--text-dim);text-transform:uppercase;letter-spacing:.5px;margin-bottom:8px">📋 Ders Detayları</div>
        ${a}
      </div>`:""})()}
    ${e.coachComment?`<div style="margin-top:8px;background:var(--accent-dim);border:1px solid rgba(240,165,0,.2);border-radius:8px;padding:9px 12px;font-size:12px"><span style="font-weight:700;color:var(--accent)">Koç: </span>${g(e.coachComment)}</div>`:""}`}function Be(){const e=document.getElementById("view-exams"),t=p.students.find(d=>d.id===p.activeStuId),n=[...p.exams].filter(d=>d.studentId===p.activeStuId).sort((d,m)=>m.date.localeCompare(d.date)),a=[...new Set(n.map(d=>d.type))],i=rt==="all"?n:n.filter(d=>d.type===rt),o=d=>(EXAM_DEFS[d.type]||[]).reduce((m,u)=>{var v;return m+Number(((v=d.nets)==null?void 0:v[u])||0)},0),s=[...i].sort((d,m)=>{const u=Ae.key==="net"?o(d):d.date,v=Ae.key==="net"?o(m):m.date;return(u<v?-1:u>v?1:0)*Ae.dir}),r=Ir(i,t),l=d=>Ae.key===d?Ae.dir===-1?" ▾":" ▴":"",c=s.length?`
    <div style="background:var(--surface);border:1px solid var(--border);border-radius:12px;overflow:hidden">
      <div style="overflow-x:auto">
      <table style="width:100%;border-collapse:collapse;font-size:13px">
        <thead>
          <tr style="background:var(--surface2);text-align:left">
            <th onclick="setExamSort('date')" style="padding:10px 14px;font-size:11px;font-weight:700;color:var(--text-dim);text-transform:uppercase;letter-spacing:.4px;cursor:pointer;white-space:nowrap">Tarih${l("date")}</th>
            <th style="padding:10px 14px;font-size:11px;font-weight:700;color:var(--text-dim);text-transform:uppercase;letter-spacing:.4px">Deneme</th>
            <th style="padding:10px 14px;font-size:11px;font-weight:700;color:var(--text-dim);text-transform:uppercase;letter-spacing:.4px">Tip</th>
            <th onclick="setExamSort('net')" style="padding:10px 14px;font-size:11px;font-weight:700;color:var(--text-dim);text-transform:uppercase;letter-spacing:.4px;cursor:pointer;text-align:right;white-space:nowrap">Toplam Net${l("net")}</th>
            <th style="padding:10px 14px;font-size:11px;font-weight:700;color:var(--text-dim);text-transform:uppercase;letter-spacing:.4px;text-align:right">Değişim</th>
            <th style="padding:10px 14px"></th>
          </tr>
        </thead>
        <tbody>
          ${s.map(d=>{const m=o(d),u=n.filter(k=>k.type===d.type&&k.date<d.date).sort((k,y)=>y.date.localeCompare(k.date))[0],v=u?m-o(u):null,f=v===null?'<span style="color:var(--text-dim)">—</span>':v>0?`<span style="color:var(--green);font-weight:700">▲ +${v.toFixed(1)}</span>`:v<0?`<span style="color:var(--red);font-weight:700">▼ ${v.toFixed(1)}</span>`:'<span style="color:var(--text-dim)">0</span>';return`
            <tr onclick="toggleExamRow('${d.id}')" style="border-top:1px solid var(--border);cursor:pointer" onmouseover="this.style.background='var(--surface2)'" onmouseout="this.style.background=''">
              <td style="padding:11px 14px;white-space:nowrap;color:var(--text-mid)">${new Date(d.date+"T12:00").toLocaleDateString("tr-TR",{day:"2-digit",month:"short",year:"numeric"})}</td>
              <td style="padding:11px 14px;font-weight:700">${g(d.name)}</td>
              <td style="padding:11px 14px"><span style="font-size:10px;font-weight:700;padding:3px 8px;border-radius:99px;background:${d.type==="TYT"?"var(--blue-dim)":"var(--accent-dim)"};color:${d.type==="TYT"?"var(--blue)":"var(--accent)"}">${d.type}</span></td>
              <td style="padding:11px 14px;text-align:right;font-family:'Inter',sans-serif;font-size:16px;font-weight:900">${m.toFixed(1)}</td>
              <td style="padding:11px 14px;text-align:right;font-size:12px">${f}</td>
              <td style="padding:11px 14px;text-align:right;white-space:nowrap">
                <button class="btn btn-ghost btn-xs" onclick="event.stopPropagation();openCommentModal('${d.id}')">💬</button>
                <span style="color:var(--text-dim);font-size:11px">▸</span>
              </td>
            </tr>
            <tr id="exd_${d.id}" style="display:none;border-top:1px solid var(--border)">
              <td colspan="6" style="padding:14px 16px;background:var(--surface2)">${Dr(d,n)}</td>
            </tr>`}).join("")}
        </tbody>
      </table>
      </div>
    </div>`:'<div class="empty"><p>Bu filtrede deneme sonucu yok</p></div>';e.innerHTML=`
    <button class="back-link" onclick="switchTab('student-detail')">← ${t?g(t.name):"Öğrenci"}</button>
    <div style="display:flex;justify-content:space-between;align-items:center;gap:12px;margin-bottom:14px;flex-wrap:wrap">
      <div style="display:flex;align-items:center;gap:12px;flex-wrap:wrap">
        <select onchange="switchExamStudent(this.value)" style="background:var(--surface);border:1.5px solid var(--border);border-radius:10px;padding:9px 12px;font-size:14px;font-weight:700;font-family:inherit;color:var(--text);outline:none;cursor:pointer">
          ${p.students.filter(d=>d.active!==!1).map(d=>`<option value="${d.id}" ${d.id===p.activeStuId?"selected":""}>${g(d.name)}</option>`).join("")}
        </select>
        <div style="font-size:12px;color:var(--text-mid)">${n.length} deneme kaydı</div>
      </div>
      <div style="display:flex;gap:8px">
        <button class="btn btn-ghost btn-sm" onclick="openKonuRaporu('${p.activeStuId}')">📊 Konu Raporu</button>
      </div>
    </div>
    ${a.length>1?`
    <div style="display:flex;gap:6px;margin-bottom:14px;flex-wrap:wrap">
      <button class="btn btn-sm ${rt==="all"?"btn-accent":"btn-ghost"}" onclick="setExamFilter('all')">Tümü</button>
      ${a.map(d=>`<button class="btn btn-sm ${rt===d?"btn-accent":"btn-ghost"}" onclick="setExamFilter('${d}')">${d}</button>`).join("")}
    </div>`:""}
    ${r}
    ${c}`}let Oa=null,Ne="TYT";const Cr=["TYT","AYT-SAY","AYT-EA","AYT-SOZ"];function qa(){const t=p.exams.filter(s=>s.studentId===Oa).filter(s=>s.type===Ne&&s.examDetails&&Object.keys(s.examDetails).length),n={};t.forEach(s=>{Object.entries(s.examDetails).forEach(([r,l])=>{(l.yanlis_konular||[]).forEach(c=>{const d=r+"§"+c;n[d]=(n[d]||0)+1})})});const a=Object.entries(n).sort((s,r)=>r[1]-s[1]).map(([s,r])=>{const[l,c]=s.split("§"),d=Math.round(r/Math.max(t.length,1)*100),m=r>=3?"var(--red)":r===2?"var(--accent)":"var(--text-mid)";return`<tr style="border-bottom:1px solid var(--border)">
        <td style="padding:8px 10px;font-size:12px;color:var(--text-dim);white-space:nowrap">${g(l)}</td>
        <td style="padding:8px 10px;font-size:13px;font-weight:600">${g(c)}</td>
        <td style="padding:8px 10px;text-align:center">
          <span style="font-size:14px;font-weight:800;color:${m}">${r}</span>
          <span style="font-size:10px;color:var(--text-dim)">/${t.length}</span>
        </td>
        <td style="padding:8px 10px;min-width:90px">
          <div style="height:6px;border-radius:3px;background:var(--surface2);overflow:hidden">
            <div style="height:100%;width:${d}%;background:${m};border-radius:3px;transition:width .3s"></div>
          </div>
        </td>
      </tr>`}),i=Cr.map(s=>`<button onclick="window._krType='${s}';_krRenderBody()" style="padding:6px 14px;border-radius:20px;border:1px solid ${s===Ne?"var(--accent)":"var(--border)"};background:${s===Ne?"var(--accent-dim)":"transparent"};color:${s===Ne?"var(--accent)":"var(--text-dim)"};font-size:12px;cursor:pointer;font-weight:${s===Ne?700:400}">${s}</button>`).join(""),o=a.length?`<div style="font-size:11px;color:var(--text-dim);margin-bottom:12px">${t.length} denemeden derlendi · <b>${a.length}</b> farklı yanlış konu · 🔴 ≥3 tekrar kritik</div>
       <div style="overflow-x:auto">
       <table style="width:100%;border-collapse:collapse">
         <thead><tr style="border-bottom:2px solid var(--border)">
           <th style="padding:6px 10px;font-size:10px;color:var(--text-dim);text-align:left;text-transform:uppercase;letter-spacing:.5px">Ders</th>
           <th style="padding:6px 10px;font-size:10px;color:var(--text-dim);text-align:left;text-transform:uppercase;letter-spacing:.5px">Konu</th>
           <th style="padding:6px 10px;font-size:10px;color:var(--text-dim);text-align:center;text-transform:uppercase;letter-spacing:.5px">Tekrar</th>
           <th style="padding:6px 10px;font-size:10px;color:var(--text-dim);text-align:left;text-transform:uppercase;letter-spacing:.5px">Sıklık</th>
         </tr></thead>
         <tbody>${a.join("")}</tbody>
       </table></div>`:`<div style="text-align:center;padding:40px;color:var(--text-dim);font-size:13px">${t.length?"Bu denemeler için henüz konu işaretlenmemiş.":Ne+" tipi deneme kaydı yok."}</div>`;document.getElementById("konuRaporuBody").innerHTML=`
    <div style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:16px">${i}</div>
    ${o}`}window._krRenderBody=qa;function Lr(e){Oa=e;const t=p.exams.find(n=>n.studentId===e&&n.examDetails&&Object.keys(n.examDetails).length);Ne=(t==null?void 0:t.type)||"TYT",qa(),V("konuRaporuModal")}window.openKonuRaporu=Lr;function Pr(e){const t=p.exams.find(n=>n.id===e);document.getElementById("cmExamId").value=e,document.getElementById("cmText").value=(t==null?void 0:t.coachComment)||"",V("commentModal")}async function jr(){const e=document.getElementById("cmExamId").value,t=document.getElementById("cmText").value.trim();await h.from("exams").update({coach_comment:t}).eq("id",e);const n=p.exams.find(a=>a.id===e);n&&(n.coachComment=t),Z("commentModal"),Be(),b("Yorum kaydedildi ✓")}async function Rr(e){await ie("Bu denemeyi silmek istediğinizden emin misiniz?")&&(await h.from("exams").delete().eq("id",e),p.exams=p.exams.filter(t=>t.id!==e),Be(),b("Silindi"))}function Ua(){const e=document.getElementById("view-messages");e.innerHTML=`<div class="sh" style="margin-bottom:14px"><h2>Mesajlar</h2></div>
    <div class="msg-layout">
      <div class="msg-sidebar">
        <div class="msg-sidebar-hd">Öğrenciler</div>
        ${p.students.map(t=>{const n=p.messages[t.id]||[],a=n[n.length-1],i=n.filter(o=>o.from==="student"&&!o.read).length;return`<div class="msg-contact ${p.msgThread===t.id?"active":""}" onclick="selectThread('${t.id}')">
            <div class="msg-contact-avatar" style="background:${t.color}">${t.name[0]}</div>
            <div style="flex:1;min-width:0">
              <div class="msg-contact-name">${g(t.name.split(" ")[0])}</div>
              <div class="msg-contact-last">${a?g(a.text.slice(0,35)):"Mesaj yok"}</div>
            </div>
            ${i?`<span class="msg-unread">${i}</span>`:""}
          </div>`}).join("")}
      </div>
      <div class="msg-main" id="msgMain">
        ${p.msgThread?Pe(p.msgThread,"coach"):'<div class="no-chat-sel">Öğrenci seçin</div>'}
      </div>
    </div>`,p.msgThread&&je()}async function Ga(e){p.msgThread=e;const t=(p.messages[e]||[]).filter(n=>n.from==="student"&&!n.read&&n._id).map(n=>n._id);t.length&&await h.from("messages").update({read:!0}).in("id",t),(p.messages[e]||[]).forEach(n=>{n.from==="student"&&(n.read=!0)}),document.getElementById("msgMain").innerHTML=Pe(e,"coach"),document.querySelectorAll(".msg-contact").forEach(n=>n.classList.remove("active")),p.students.forEach((n,a)=>{var i;n.id===e&&((i=document.querySelectorAll(".msg-contact")[a])==null||i.classList.add("active"))}),je(),Mn()}let qe=null;function Nr(e){const t=new Date;t.setHours(0,0,0,0);const n=new Date(e);n.setHours(0,0,0,0);const a=Math.round((t-n)/864e5);return a===0?"Bugün":a===1?"Dün":n.toLocaleDateString("tr-TR",{day:"numeric",month:"long",year:n.getFullYear()!==t.getFullYear()?"numeric":void 0})}function Pe(e,t){const n=p.students.find(r=>r.id===e),a=p.messages[e]||[],i=(n==null?void 0:n.color)||"#E8613A";let o=null;const s=a.map(r=>{let l="";if(r.created_at){const v=r.created_at.slice(0,10);v!==o&&(l=`<div class="msg-date-sep">${Nr(r.created_at)}</div>`,o=v)}const c=t==="coach"&&r.from==="coach"||t==="student"&&r.from==="student",d=r.image_url?`<img src="${g(r.image_url)}" loading="lazy" onload="window._msgImgLoaded(this)" onclick="window.open('${g(r.image_url)}','_blank')" />`:"",m=r.text?g(r.text):"",u=d+(d&&m?`<div style="margin-top:5px">${m}</div>`:m);return c?`${l}<div class="msg-row out">
        <div class="msg-bubble out">${u}<div class="msg-bubble-time">${r.time}</div></div>
      </div>`:`${l}<div class="msg-row in">
        <div class="msg-avatar-sm" style="background:${i}">${(n==null?void 0:n.name[0])||"?"}</div>
        <div class="msg-bubble in">${u}<div class="msg-bubble-time">${r.time}</div></div>
      </div>`}).join("");return`<div class="msg-main-hd">
    <div class="msg-main-hd-avatar" style="background:${i}">${(n==null?void 0:n.name[0])||"?"}</div>
    <div>
      <div class="msg-main-hd-name">${g((n==null?void 0:n.name)||"")}</div>
      <div class="msg-main-hd-status">● Çevrimiçi</div>
    </div>
  </div>
  <div class="msg-body" id="msgBody">${s||'<div class="empty" style="margin-top:40px;text-align:center;color:var(--text-dim)">👋 Henüz mesaj yok</div>'}</div>
  <div id="msgImgPreview" style="display:none" class="msg-img-preview">
    <img id="msgImgThumb" src="" /><span id="msgImgName"></span>
    <span class="msg-img-remove" onclick="window._cancelMsgImg()">✕</span>
  </div>
  <div class="msg-input-area">
    <label class="msg-attach-btn" title="Fotoğraf gönder">
      📎<input type="file" accept="image/*,application/pdf" style="display:none" onchange="window._pickMsgImg(this,'${e}','${t}')">
    </label>
    <textarea class="msg-input" id="msgInput" placeholder="Mesaj yaz..." rows="1"
      onkeydown="if(event.key==='Enter'&&!event.shiftKey){event.preventDefault();sendMsg('${e}','${t}');}"
      oninput="this.style.height='auto';this.style.height=Math.min(this.scrollHeight,110)+'px'"
      onpaste="window._handleMsgPaste(event,'${e}','${t}')"></textarea>
    <button class="msg-send-btn" onclick="sendMsg('${e}','${t}')">
      <svg viewBox="0 0 24 24"><path d="M2 21l21-9L2 3v7l15 2-15 2v7z"/></svg>
    </button>
  </div>`}window._pickMsgImg=function(e,t,n){const a=e.files[0];if(!a)return;if(a.size>5*1024*1024){b("Dosya max 5 MB olabilir"),e.value="";return}qe={file:a};const i=document.getElementById("msgImgPreview"),o=document.getElementById("msgImgThumb"),s=document.getElementById("msgImgName");if(a.type.startsWith("image/")){const r=new FileReader;r.onload=l=>{o.src=l.target.result,o.style.display="block"},r.readAsDataURL(a)}else o.style.display="none";s.textContent=a.name,i.style.display="flex",e.value=""};window._cancelMsgImg=function(){qe=null,document.getElementById("msgImgPreview").style.display="none"};window._handleMsgPaste=function(e,t,n){var i;const a=(i=e.clipboardData)==null?void 0:i.items;if(a){for(const o of a)if(o.type.startsWith("image/")){e.preventDefault();const s=o.getAsFile();if(!s)return;if(s.size>5*1024*1024){b("Dosya max 5 MB olabilir");return}qe={file:s};const r=new FileReader;r.onload=l=>{const c=document.getElementById("msgImgPreview"),d=document.getElementById("msgImgThumb"),m=document.getElementById("msgImgName");d.src=l.target.result,d.style.display="block",m.textContent="Yapıştırılan görsel",c&&(c.style.display="flex")},r.readAsDataURL(s);return}}};function Kt(e,t,n,a){!e||!t||fetch("/api/push?action=send",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({sender_id:e,recipient_id:t,title:n,body:a,url:"/app.html?thread="+e})}).catch(()=>{})}window.openPushThread=async function(e){var t,n;if(x.role){try{(t=window.invalidateCache)==null||t.call(window),await((n=window.loadAllData)==null?void 0:n.call(window))}catch{}x.role==="coach"||x.role==="developer"?(le("messages"),e&&Ga(e)):x.role==="student"&&le("smessages")}};async function Hr(e,t){var c,d,m,u,v;const n=document.getElementById("msgInput"),a=n.value.trim();if(!a&&!qe)return;const i=x.coachId||((c=p.students.find(f=>f.id===e))==null?void 0:c.coachId)||((d=p.students.find(f=>f.id===x.studentId))==null?void 0:d.coachId);let o=null;if(qe){const f=await Ut(qe.file),y=((m=f.name)!=null&&m.includes(".")?f.name.split(".").pop():"")||(f.type==="image/png"?"png":f.type==="image/webp"?"webp":"jpg"),$=`${e}/${Date.now()}.${y}`,{error:w}=await h.storage.from("chat_images").upload($,f,{upsert:!0});if(w){b("Görsel yüklenemedi: "+w.message);return}const{data:I}=h.storage.from("chat_images").getPublicUrl($);o=I.publicUrl,qe=null,document.getElementById("msgImgPreview").style.display="none"}const{data:s,error:r}=await h.from("messages").insert({student_id:e,coach_id:i,from_role:t,text:a||"",image_url:o,read:!1}).select().single();if(r){b("Hata: "+r.message);return}p.messages[e]||(p.messages[e]=[]),p.messages[e].push({_id:s.id,from:t,text:a||"",image_url:o,created_at:s.created_at,time:new Date(s.created_at).toLocaleTimeString("tr-TR",{hour:"2-digit",minute:"2-digit"}),read:!1}),n.value="",n.style.height="auto",currentTab==="messages"&&(document.getElementById("msgMain").innerHTML=Pe(e,"coach"),je()),currentTab==="smessages"&&(document.getElementById("msgMain").innerHTML=Pe(e,"student"),je());const l=a?a.slice(0,200):"📷 Görsel gönderdi";t==="student"&&i?(h.auth.getSession().then(({data:{session:f}})=>{var y;const k=f==null?void 0:f.access_token;k&&fetch("/api/mailer",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${k}`},body:JSON.stringify({type:"new_message",coach_id:i,student_name:((y=x.dbUser)==null?void 0:y.full_name)||"Öğrenciniz",message_preview:l})}).catch(()=>{})}),Kt(e,i,((u=x.dbUser)==null?void 0:u.full_name)||"Öğrenciniz",l)):t==="coach"&&i&&Kt(i,e,((v=x.dbUser)==null?void 0:v.full_name)||"Koçun",l)}function je(){setTimeout(()=>{const e=document.getElementById("msgBody");e&&(e.scrollTop=e.scrollHeight)},60)}window._msgImgLoaded=function(e){const t=e.closest(".msg-body");if(!t)return;t.scrollHeight-t.scrollTop-t.clientHeight<150&&(t.scrollTop=t.scrollHeight)};function Qt(){const e=document.getElementById("view-portal");if(!e)return;let t=p.students.find(f=>f.id===x.studentId);if(!t&&p.students.length>0&&(t=p.students[0]),!t){e.innerHTML=`<div style="text-align:center;padding:60px 20px;color:var(--text-mid)">
      <div style="font-size:36px;margin-bottom:12px">⏳</div>
      <p style="font-size:14px">Profil yükleniyor...</p>
    </div>`,setTimeout(()=>{p.students.length&&Qt()},800);return}x.studentId||(x.studentId=t.id),p.activeStuId=t.id;const n=ce(),a=`${t.id}_${n}`,i=p.tasks[a]||[],o=i.filter(f=>f.done).length,s=p.appointments.filter(f=>f.studentId===t.id&&f.date>=n).sort((f,k)=>f.date.localeCompare(k.date))[0],r=(p.messages[t.id]||[]).filter(f=>f.from==="coach"&&!f.read).length,l=Tt(),c=ae(0,t.weekStart||0);let d=0,m=0;for(let f=0;f<7;f++){const k=p.tasks[`${t.id}_${G(ee(c,f))}`]||[];d+=k.length,m+=k.filter(y=>y.done).length}const u=pi(t.id),v=u.length>0?`
    <div class="card cp" style="border-color:rgba(239,68,68,.3)">
      <div class="portal-sec-title">🔄 Tekrar Gereken Konular <span style="font-size:11px;background:rgba(239,68,68,.12);color:#ef4444;padding:2px 8px;border-radius:99px;font-weight:700">${u.length}</span></div>
      ${u.slice(0,5).map(f=>{const k=Ke[f.stars];return f.daysSince<999&&`${f.daysSince}`,`<div style="display:flex;align-items:center;gap:10px;padding:7px 0;border-bottom:1px solid var(--border)">
          <span style="font-size:13px;color:${k.color};font-weight:800;white-space:nowrap">${"⭐".repeat(f.stars)||"○"}</span>
          <div style="flex:1;min-width:0">
            <div style="font-size:12px;font-weight:700;color:var(--text);overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${g(f.konu)}</div>
            <div style="font-size:10px;color:var(--text-dim)">${g(f.subject)} · Son: ${f.daysSince<999?f.daysSince+"g önce":"Hiç"}</div>
          </div>
        </div>`}).join("")}
      ${u.length>5?`<div style="font-size:11px;color:var(--text-dim);margin-top:8px;text-align:center">+${u.length-5} daha…</div>`:""}
    </div>`:"";e.innerHTML=`
    <div class="portal-hero">
      <div style="display:flex;gap:16px;align-items:center;flex:1;min-width:0">
        <div class="portal-avatar" style="background:${t.color}">${t.name[0]}</div>
        <div class="portal-info">
          <h1>Merhaba, ${g(t.name.split(" ")[0])}! 👋</h1>
          <p>${g(t.target)} · ${new Date().toLocaleDateString("tr-TR",{weekday:"long",day:"numeric",month:"long"})}</p>
        </div>
      </div>
      <div class="home-yks-badge">
        <div class="home-yks-num">${l.days}</div>
        <div class="home-yks-meta">gün kaldı<br><b>YKS ${l.year}</b></div>
      </div>
    </div>
    <div class="portal-grid">
      <div class="card cp">
        <div class="portal-sec-title">📋 Bugünün Görevleri</div>
        ${i.length?`
          ${i.map((f,k)=>`
            <div data-task-id="${f._id}" class="task-card task-${f.type} ${f.done?"done":""}" style="margin-bottom:6px">
              <div class="tc-check ${f.done?"on":""}" onclick="stuToggleTask('${n}',${k})"></div>
              <div class="tc-body">
                <div class="tc-type">${qt(f.type)}${f.exam?" · "+f.exam:""}</div>
                <div class="tc-subject">${g(f.subject)}</div>
                <div class="tc-meta">${f.duration} dk${f.note?" · "+g(f.note):""}</div>
              </div>
            </div>`).join("")}
          <div style="margin-top:8px;font-size:12px;color:var(--text-mid)">${o}/${i.length} tamamlandı</div>
        `:`<div class="empty" style="padding:22px 16px">
            <div style="font-size:28px;margin-bottom:8px">🗓️</div>
            <p style="margin-bottom:14px">Bugün için görev atanmamış. Koçun henüz program hazırlamamış olabilir.</p>
            <button class="btn btn-accent" style="font-size:12px;padding:8px 16px" onclick="switchTab('smessages')">💬 Koçuma Mesaj Gönder</button>
          </div>`}
      </div>
      <div style="display:flex;flex-direction:column;gap:12px">
        <div class="card cp">
          <div class="portal-sec-title">📈 İlerleme</div>
          <div style="font-family:'Inter',sans-serif;font-size:36px;font-weight:800;color:${t.color};margin-bottom:6px">%${t.progress}</div>
          <div class="prog-bar-wrap"><div class="prog-bar" style="width:${t.progress}%;background:${t.color}"></div></div>
          <div style="font-size:11px;color:var(--text-mid);margin-top:8px">Bu hafta: <b style="color:var(--text)">${m}/${d}</b> görev tamamlandı${d>0?` (%${Math.round(m/d*100)})`:""}</div>
        </div>
        <div class="card cp">
          <div class="portal-sec-title">📅 Sonraki Randevu</div>
          ${s?`<div style="font-size:12px;color:var(--text-mid);margin-bottom:3px">${new Date(s.date+"T12:00").toLocaleDateString("tr-TR",{weekday:"long",day:"numeric",month:"long"})}</div>
          <div style="font-family:'Inter',sans-serif;font-size:20px;font-weight:700">${s.time}</div>
          <div style="font-size:12px;color:var(--text-mid);margin-top:3px">${g(s.type)} · ${s.duration} dk</div>`:'<div style="font-size:13px;color:var(--text-dim)">Yaklaşan randevu yok</div>'}
        </div>
        <div class="card cp" style="cursor:pointer;border-color:rgba(232,97,58,.25);transition:opacity .15s" onclick="switchTab('sprofil')" onmouseover="this.style.opacity='.85'" onmouseout="this.style.opacity='1'">
          <div style="display:flex;align-items:center;gap:10px">
            <span style="font-size:22px">🌟</span>
            <div style="flex:1;min-width:0">
              <div style="font-weight:700;font-size:13px">Yolculuğum</div>
              <div style="font-size:11px;color:var(--text-mid)">İlerlemeni ve rozetlerini gör</div>
            </div>
            <span style="color:var(--text-dim)">→</span>
          </div>
        </div>
        ${r>0?`<div class="card cp" style="border-color:var(--accent);cursor:pointer" onclick="switchTab('smessages')">
          <div style="display:flex;align-items:center;gap:10px">
            <span style="font-size:22px">💬</span>
            <div><div style="font-weight:700">${r} yeni mesaj</div><div style="font-size:12px;color:var(--text-mid)">Koçundan</div></div>
          </div>
        </div>`:""}
        ${v}
      </div>
    </div>`}async function Yr(e,t){var s;const n=p.students.find(r=>r.id===x.studentId);if(!n)return;const a=`${n.id}_${e}`,i=(s=p.tasks[a])==null?void 0:s[t];if(!i)return;const o=!i.done;await h.from("tasks").update({done:o}).eq("id",i._id),i.done=o,Qt()}function be(){const e=p.students.find(u=>u.id===x.studentId);if(!e)return;const t=document.getElementById("view-sportal"),n=e.weekStart??0,a=ae(p.weekOffset,n),i=ee(a,6),o=ce(),s=localStorage.getItem("ra_program_mode")||"weekly",r=Ta(a,o);let l="",c=[];for(let u=0;u<7;u++){const v=ee(a,u),f=G(v),k=f===o,y=`${e.id}_${f}`,$=p.tasks[y]||[],w=$.reduce((S,M)=>S+Number(M.duration),0),I=$.reduce((S,M)=>S+(M.done?Number(M.duration):0),0);DAYS_TR[(n+u)%7];const T=Ea(f,$,"student",s),B=["Pzt","Sal","Çar","Per","Cum","Cmt","Paz"][(n+u)%7];c.push({shortDay:B,dateNum:v.getDate(),isToday:k}),l+=`<div class="day-col ${k?"today":""} ${u===r?"sel-day":""}">
      <div class="day-hd">
        <div><div class="day-name-lbl">${B}</div><div class="day-num">${v.getDate()}</div></div>
        <span class="day-badge" style="font-size:8.5px">${ht(I)} / ${ht(w)}</span>
      </div>
      <div class="day-tasks-list ${s==="hourly"?"tl-mode":""}">${T||(s==="hourly"?"":'<div class="empty" style="padding:8px 0"><p style="font-size:11px">Görev yok</p></div>')}</div>
    </div>`}const d=Tt(),m=d.days;t.innerHTML=`
    ${m>0?`<div style="text-align:center;margin-bottom:10px;padding:7px 12px;background:var(--surface2);border-radius:10px;font-size:12px;color:var(--text-mid)">📅 YKS ${d.year}'ye <strong style="color:var(--accent)">${m}</strong> gün kaldı</div>`:""}
    <div class="day-selector-strip">${Sa(c,r)}</div>
    <div class="week-nav" style="margin-bottom:14px;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:10px">
      <div style="display:flex;gap:6px;align-items:center">
        <button class="btn btn-ghost btn-sm" onclick="chWeekS(-1)">← Önceki</button>
        <span class="week-lbl">${a.getDate()} ${MONTHS_TR[a.getMonth()]} — ${i.getDate()} ${MONTHS_TR[i.getMonth()]} ${i.getFullYear()}</span>
        <button class="btn btn-ghost btn-sm" onclick="chWeekS(1)">Sonraki →</button>
        <button class="btn btn-ghost btn-sm" onclick="S.weekOffset=0;saveUI();renderSPortal()">Bugün</button>
      </div>

      <!-- Program Görünüm Seçici Toggle -->
      <div style="display:flex;background:var(--surface2);border:1px solid var(--border);border-radius:10px;padding:3px;gap:4px">
        <button class="btn btn-xs ${s==="weekly"?"btn-accent":"btn-ghost"}" onclick="setProgramMode('weekly')" style="padding:4px 10px;font-size:11px;font-weight:700;border-radius:8px">📋 Günlük Serbest</button>
        <button class="btn btn-xs ${s==="hourly"?"btn-accent":"btn-ghost"}" onclick="setProgramMode('hourly')" style="padding:4px 10px;font-size:11px;font-weight:700;border-radius:8px">🕒 Saatlik Düzen</button>
      </div>
    </div>
    <div class="week-grid">${l}</div>`}async function Kr(e,t){var s;const n=p.students.find(r=>r.id===x.studentId);if(!n)return;const a=`${n.id}_${e}`,i=(s=p.tasks[a])==null?void 0:s[t];if(!i)return;const o=!i.done;if(await h.from("tasks").update({done:o}).eq("id",i._id),i.done=o,be(),o&&e===ce()){const r=p.tasks[a]||[];r.length>0&&r.every(l=>l.done)&&Fr(),tn()}}function Fr(){if(document.getElementById("_celebOverlay"))return;if(!document.getElementById("_celebStyle")){const t=document.createElement("style");t.id="_celebStyle",t.textContent="@keyframes celebPop{0%{opacity:0;transform:scale(.7) translateY(20px)}60%{opacity:1;transform:scale(1.05) translateY(-4px)}100%{opacity:1;transform:scale(1) translateY(0)}}@keyframes celebFade{0%,70%{opacity:1}100%{opacity:0}}",document.head.appendChild(t)}const e=document.createElement("div");e.id="_celebOverlay",e.style.cssText="position:fixed;inset:0;z-index:99999;display:flex;align-items:center;justify-content:center;pointer-events:none",e.innerHTML=`<div style="background:var(--surface);border:2px solid var(--green);border-radius:20px;padding:28px 36px;text-align:center;box-shadow:0 20px 60px rgba(0,0,0,.25);animation:celebPop .4s ease-out,celebFade 3.5s ease-in-out forwards;pointer-events:auto">
    <div style="font-size:52px;margin-bottom:8px">🏆</div>
    <div style="font-size:18px;font-weight:800;color:var(--green);margin-bottom:4px">Günü Tamamladın!</div>
    <div style="font-size:13px;color:var(--text-mid)">Bugünkü tüm görevleri bitirdin. Harikasın 💪</div>
  </div>`,document.body.appendChild(e),setTimeout(()=>e.remove(),3600)}function Wa(e,t,n){var s;if(!document.getElementById("_celebStyle")){const r=document.createElement("style");r.id="_celebStyle",r.textContent="@keyframes celebPop{0%{opacity:0;transform:scale(.7) translateY(20px)}60%{opacity:1;transform:scale(1.05) translateY(-4px)}100%{opacity:1;transform:scale(1) translateY(0)}}@keyframes celebFade{0%,70%{opacity:1}100%{opacity:0}}",document.head.appendChild(r)}(s=document.getElementById("_netJumpOverlay"))==null||s.remove(),document.querySelectorAll(".confetti-piece").forEach(r=>r.remove());const a=["#a855f7","#c084fc","#f0a500","#fbbf24"];for(let r=0;r<32;r++){const l=document.createElement("div");l.className="confetti-piece",l.style.left=Math.random()*100+"vw",l.style.background=a[Math.floor(Math.random()*a.length)],l.style.animationDuration=2+Math.random()*1.4+"s",l.style.animationDelay=Math.random()*.5+"s",l.style.transform=`rotate(${Math.random()*360}deg)`,document.body.appendChild(l),setTimeout(()=>l.remove(),4200)}const i=document.createElement("div");i.id="_netJumpOverlay",i.style.cssText="position:fixed;inset:0;z-index:999998;display:flex;align-items:center;justify-content:center;pointer-events:none";const o=n?`Netini tam <b>+${e.toFixed(1)}</b> artırarak <b>${g(n)}</b> yolunda dev bir adım attın!`:`Netini tam <b>+${e.toFixed(1)}</b> artırdın. Bu tempoyla devam et!`;i.innerHTML=`<div style="background:var(--surface);border:2px solid var(--focus-purple);border-radius:20px;padding:30px 38px;text-align:center;max-width:340px;box-shadow:0 20px 60px rgba(168,85,247,.25);animation:celebPop .4s ease-out,celebFade 4.5s ease-in-out forwards;pointer-events:auto">
    <div style="font-size:52px;margin-bottom:10px">🚀</div>
    <div style="font-size:18px;font-weight:800;color:var(--focus-purple);margin-bottom:6px">Muazzam Bir Sıçrama!</div>
    <div style="font-size:13px;color:var(--text-mid);line-height:1.6">${o}</div>
    <div style="font-size:11px;color:var(--text-dim);margin-top:8px">${g(t)}</div>
  </div>`,document.body.appendChild(i),setTimeout(()=>i.remove(),4600)}window.showNetJumpCelebration=Wa;function Or(e){p.weekOffset+=e,_e(),be()}let Ue={};window._fbChip=function(e,t,n){if(Ue[e]=isNaN(t)?t:Number(t),n.parentElement.querySelectorAll("[data-fb-val]").forEach(a=>{const i=a.dataset.fbVal==t;a.style.background=i?a.dataset.fbBg:"var(--surface2)",a.style.borderColor=i?a.dataset.fbColor:"var(--border)",a.style.color=i?a.dataset.fbColor:"var(--text-mid)",a.style.fontWeight=i?"700":"600"}),e==="status"){const a=document.getElementById("fbBlockerSection");a&&(a.style.display=t==="completed"?"none":"block")}};window._fbStar=function(e){Ue.focus=e;for(let t=1;t<=5;t++){const n=document.getElementById("fbStar"+t);n&&(n.textContent=t<=e?"★":"☆",n.style.color=t<=e?"#f0a500":"var(--text-dim)")}};function qr(e,t){const n=e.student_feedback||{},a=n.status||t||(e.done?"completed":""),i=n.time_spent!=null?Math.floor(n.time_spent/60):"",o=n.time_spent!=null?n.time_spent%60:"",s=n.focus||0,r=n.difficulty||0,l=n.blocker||"";Ue={status:a||null,focus:s,difficulty:r,blocker:l};const c=[{v:"completed",l:"✓ Tamamladım",c:"#3ecf8e",bg:"rgba(62,207,142,.12)"},{v:"partial",l:"~ Kısmen",c:"#f0a500",bg:"rgba(240,165,0,.12)"},{v:"failed",l:"✕ Yapamadım",c:"#ef4444",bg:"rgba(239,68,68,.12)"}],d=[{v:1,l:"Çok Kolay",c:"#3ecf8e",bg:"rgba(62,207,142,.1)"},{v:2,l:"Kolay",c:"#86efac",bg:"rgba(134,239,172,.1)"},{v:3,l:"Orta",c:"#f0a500",bg:"rgba(240,165,0,.1)"},{v:4,l:"Zor",c:"#fb923c",bg:"rgba(251,146,60,.1)"},{v:5,l:"Çok Zor",c:"#ef4444",bg:"rgba(239,68,68,.1)"}],m=[{v:"time",l:"Zamanım yetmedi"},{v:"topic",l:"Konuyu anlamadım"},{v:"hard",l:"Kaynak çok zordu"},{v:"moti",l:"İstek/motivasyonum yoktu"}];return`<div style="background:var(--surface2);border:1px solid var(--border);border-radius:11px;padding:14px 16px;margin-bottom:14px">

    <div style="margin-bottom:14px">
      <div style="font-size:10px;font-weight:700;color:var(--text-dim);text-transform:uppercase;letter-spacing:.5px;margin-bottom:8px">Tamamlanma Durumu</div>
      <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:6px">
        ${c.map(u=>`<button onclick="window._fbChip('status','${u.v}',this)" data-fb-val="${u.v}" data-fb-color="${u.c}" data-fb-bg="${u.bg}"
          style="padding:9px 4px;border-radius:9px;border:1.5px solid ${a===u.v?u.c:"var(--border)"};background:${a===u.v?u.bg:"var(--surface2)"};color:${a===u.v?u.c:"var(--text-mid)"};font-size:12px;font-weight:${a===u.v?"700":"600"};cursor:pointer;transition:all .15s">${g(u.l)}</button>`).join("")}
      </div>
    </div>

    <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:14px">
      <div>
        <div style="font-size:10px;font-weight:700;color:var(--text-dim);text-transform:uppercase;letter-spacing:.5px;margin-bottom:8px">⏱ Süre</div>
        <div style="display:flex;gap:5px;align-items:center">
          <input id="fbHour" type="number" min="0" max="23" placeholder="0" value="${i}"
            style="width:44px;padding:8px 4px;background:var(--surface);border:1.5px solid var(--border);border-radius:8px;color:var(--text);font-size:14px;font-weight:700;text-align:center"
            oninput="if(this.value>23)this.value=23">
          <span style="font-size:11px;color:var(--text-dim)">sa</span>
          <input id="fbMin" type="number" min="0" max="59" placeholder="0" value="${o}"
            style="width:44px;padding:8px 4px;background:var(--surface);border:1.5px solid var(--border);border-radius:8px;color:var(--text);font-size:14px;font-weight:700;text-align:center"
            oninput="if(this.value>59)this.value=59">
          <span style="font-size:11px;color:var(--text-dim)">dk</span>
        </div>
      </div>
      <div>
        <div style="font-size:10px;font-weight:700;color:var(--text-dim);text-transform:uppercase;letter-spacing:.5px;margin-bottom:8px">🎯 Odaklanma</div>
        <div style="display:flex;gap:2px;padding-top:2px">
          ${[1,2,3,4,5].map(u=>`<span id="fbStar${u}" onclick="window._fbStar(${u})" style="font-size:24px;cursor:pointer;color:${u<=s?"#f0a500":"var(--text-dim)"};transition:color .1s">${u<=s?"★":"☆"}</span>`).join("")}
        </div>
      </div>
    </div>

    <div style="margin-bottom:14px">
      <div style="font-size:10px;font-weight:700;color:var(--text-dim);text-transform:uppercase;letter-spacing:.5px;margin-bottom:8px">📊 Zorluk</div>
      <div style="display:flex;gap:4px">
        ${d.map(u=>`<button onclick="window._fbChip('difficulty',${u.v},this)" data-fb-val="${u.v}" data-fb-color="${u.c}" data-fb-bg="${u.bg}"
          style="flex:1;padding:7px 3px;border-radius:8px;border:1.5px solid ${r===u.v?u.c:"var(--border)"};background:${r===u.v?u.bg:"var(--surface2)"};color:${r===u.v?u.c:"var(--text-mid)"};font-size:10px;font-weight:${r===u.v?"700":"600"};cursor:pointer;transition:all .15s;text-align:center">${g(u.l)}</button>`).join("")}
      </div>
    </div>

    <div id="fbBlockerSection" style="display:${a&&a!=="completed"?"block":"none"}">
      <div style="font-size:10px;font-weight:700;color:var(--text-dim);text-transform:uppercase;letter-spacing:.5px;margin-bottom:8px">Neden Yapamadın?</div>
      <div style="display:flex;flex-wrap:wrap;gap:6px">
        ${m.map(u=>`<button onclick="window._fbChip('blocker','${u.v}',this)" data-fb-val="${u.v}" data-fb-color="#fb923c" data-fb-bg="rgba(251,146,60,.1)"
          style="padding:6px 11px;border-radius:8px;border:1.5px solid ${l===u.v?"#fb923c":"var(--border)"};background:${l===u.v?"rgba(251,146,60,.1)":"var(--surface2)"};color:${l===u.v?"#fb923c":"var(--text-mid)"};font-size:11px;font-weight:${l===u.v?"700":"600"};cursor:pointer;transition:all .15s">${g(u.l)}</button>`).join("")}
      </div>
    </div>

  </div>`}function Ur(e){const t=e.student_feedback||{};if(!(t.status||t.focus||t.difficulty||t.time_spent>0||t.blocker))return"";const a={completed:{l:"Tamamladı",c:"#3ecf8e",bg:"rgba(62,207,142,.1)"},partial:{l:"Kısmen Tamamladı",c:"#f0a500",bg:"rgba(240,165,0,.1)"},failed:{l:"Yapamadı",c:"#ef4444",bg:"rgba(239,68,68,.1)"}},i={1:"Çok Kolay",2:"Kolay",3:"Orta",4:"Zor",5:"Çok Zor"},o={time:"Zamanı yetmedi",topic:"Konuyu anlayamadı",hard:"Kaynak çok zordu",moti:"Motivasyon yok"},s=a[t.status],r=t.time_spent,l=r>0?(Math.floor(r/60)>0?Math.floor(r/60)+"sa ":"")+(r%60>0?r%60+"dk":""):null,c=t.focus?"★".repeat(t.focus)+"☆".repeat(5-t.focus):null,d={1:"#3ecf8e",2:"#86efac",3:"#f0a500",4:"#fb923c",5:"#ef4444"},m=t.difficulty?d[t.difficulty]:"var(--text-mid)";return`<div style="background:var(--surface2);border:1px solid var(--border);border-radius:11px;padding:12px 16px;margin-bottom:14px">
    <div style="font-size:10px;font-weight:700;color:var(--text-dim);text-transform:uppercase;letter-spacing:.5px;margin-bottom:10px">💬 Geri Bildirim</div>

    <!-- Satır 1: durum + süre -->
    <div style="display:flex;flex-wrap:wrap;gap:6px;margin-bottom:10px">
      ${s?`<span style="padding:4px 12px;border-radius:20px;font-size:12px;font-weight:700;background:${s.bg};color:${s.c};border:1px solid ${s.c}33">${s.l}</span>`:""}
      ${l?`<span style="padding:4px 12px;border-radius:20px;font-size:12px;background:var(--surface);border:1px solid var(--border);color:var(--text-mid)">⏱ ${l}</span>`:""}
    </div>

    <!-- Satır 2: odaklanma + zorluk -->
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:${t.blocker?"10px":"0"}">
      ${c?`<div style="background:var(--surface);border:1px solid var(--border);border-radius:9px;padding:7px 10px">
        <div style="font-size:9px;font-weight:700;color:var(--text-dim);text-transform:uppercase;letter-spacing:.5px;margin-bottom:3px">🎯 Odaklanma</div>
        <div style="font-size:16px;color:#f0a500;letter-spacing:1px">${c}</div>
      </div>`:""}
      ${t.difficulty?`<div style="background:var(--surface);border:1px solid var(--border);border-radius:9px;padding:7px 10px">
        <div style="font-size:9px;font-weight:700;color:var(--text-dim);text-transform:uppercase;letter-spacing:.5px;margin-bottom:3px">📊 Zorluk</div>
        <div style="font-size:13px;font-weight:700;color:${m}">${i[t.difficulty]||""}</div>
      </div>`:""}
    </div>

    ${t.blocker?`<div style="font-size:12px;color:var(--text-mid)">Neden: <b style="color:#fb923c">${o[t.blocker]||t.blocker}</b></div>`:""}
  </div>`}async function It(e,t,n,a){var w,I,T,B;const o=`${x.role==="student"?x.studentId:p.activeStuId}_${e}`,s=(w=p.tasks[o])==null?void 0:w[t];if(!s)return;if(n==="coach"&&s._id){const{data:S}=await h.from("tasks").select("*").eq("id",s._id).single();S&&(s.done=S.done,s.student_note=S.student_note||"",s.student_result=S.student_result||null,s.student_feedback=S.student_feedback||null)}let r=document.getElementById("taskDetailModal");r||(r=document.createElement("div"),r.id="taskDetailModal",r.className="modal-bg",document.body.appendChild(r),r.addEventListener("click",S=>{S.target===r&&r.classList.remove("open")}));const l={soru:"var(--blue)",konu:"#c084fc",deneme:"var(--accent)",diger:"var(--text-mid)"},c={soru:"Soru Bankası",konu:"Konu Anlatımı",deneme:"Deneme",diger:"Diğer"},d=l[s.type]||"var(--accent)",m=s.type==="konu",u=s.task_items||[],v=u.reduce((S,M)=>S+(M.soru||0),0),f=((I=s.student_result)==null?void 0:I.dogru)??"",k=((T=s.student_result)==null?void 0:T.yanlis)??"",y=((B=s.student_result)==null?void 0:B.bos)??(s.student_result==null&&v>0?v:"");let $="";u.length>0?$=`<div style="margin-bottom:14px">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px">
        <div style="font-size:11px;font-weight:700;color:var(--text-dim);text-transform:uppercase;letter-spacing:.5px">${m?"Videolar":"Testler"} (${u.length})</div>
        ${n==="coach"?"":`<button onclick="toggleAllDetailItems('${e}',${t},'${n}')"
          style="background:none;border:none;color:var(--accent);font-size:11px;font-weight:700;cursor:pointer;padding:2px 6px;border-radius:4px;transition:background .1s"
          onmouseover="this.style.background='var(--accent-dim)'" onmouseout="this.style.background='none'">☑ Tümünü İşaretle</button>`}
      </div>
      <div style="background:var(--surface2);border:1px solid var(--border);border-radius:10px;overflow:hidden;max-height:200px;overflow-y:auto">
        ${u.map((S,M)=>`
          <label style="display:flex;align-items:center;gap:10px;padding:8px 12px;border-bottom:1px solid var(--border);${M===u.length-1?"border-bottom:none":""};cursor:${n==="coach"?"default":"pointer"};transition:background .1s"
            ${n==="coach"?"":`onmouseover="this.style.background='var(--surface3)'" onmouseout="this.style.background=''"`}>
            <input type="checkbox" ${S.done?"checked":""} ${n==="coach"?"disabled":""} onchange="toggleDetailItem('${e}',${t},${M},'${n}')"
              style="width:16px;height:16px;accent-color:var(--accent);cursor:${n==="coach"?"default":"pointer"};flex-shrink:0;">
            <div style="width:20px;height:20px;border-radius:6px;background:${d}22;color:${d};font-size:10px;font-weight:800;display:flex;align-items:center;justify-content:center;flex-shrink:0;margin-left:4px">${M+1}</div>
            <div style="flex:1;min-width:0">
              <div style="font-size:13px;font-weight:600;line-height:1.4;${S.done?"text-decoration:line-through;color:var(--text-dim);":""}">${g(S.label||`Ders ${M+1}`)}</div>
              <div style="font-size:11px;color:var(--text-mid);margin-top:2px">⏱ ${S.soru>0?m?S.soru+" dk":S.soru+" soru":"?"}</div>
            </div>
            ${S.url?`<a href="${g(S.url)}" target="_blank" onclick="event.stopPropagation()"
              style="display:flex;align-items:center;gap:4px;font-size:12px;font-weight:700;background:#cc000022;color:#ff5555;border:1px solid #aa222233;padding:6px 12px;border-radius:8px;text-decoration:none;flex-shrink:0;white-space:nowrap">▶ İzle</a>`:""}
          </label>`).join("")}
      </div>
    </div>`:s.note&&(s.note.includes("test:")||s.note.includes("video:"))&&($=`<div style="margin-bottom:14px">
      <div style="font-size:11px;font-weight:700;color:var(--text-dim);text-transform:uppercase;letter-spacing:.5px;margin-bottom:6px">${m?"Videolar":"Testler"}</div>
      <div style="background:var(--surface2);border:1px solid var(--border);border-radius:10px;padding:10px 12px;font-size:12px;color:var(--text-mid)">${g(s.note)}</div>
    </div>`),r.innerHTML=`<div class="modal">
    <button class="modal-close" onclick="cm('taskDetailModal')">×</button>

    <!-- Görev başlık -->
    <div style="border-left:3px solid ${d};padding-left:12px;margin-bottom:20px">
      <div style="font-size:10px;font-weight:700;color:${d};text-transform:uppercase;letter-spacing:.5px;margin-bottom:4px">${c[s.type]||s.type}${s.exam?" · "+s.exam:""}</div>
      <div style="font-family:'Inter',sans-serif;font-size:18px;font-weight:800;line-height:1.2">${g(s.subject)}</div>
      <div style="font-size:12px;color:var(--text-dim);margin-top:4px">${new Date(e+"T12:00").toLocaleDateString("tr-TR",{weekday:"long",day:"numeric",month:"long"})}</div>
      ${s.added_by_student?'<div style="display:inline-flex;align-items:center;gap:4px;margin-top:6px;background:var(--focus-purple-dim);color:var(--focus-purple);padding:3px 9px;border-radius:99px;font-size:10px;font-weight:700">🎓 Öğrenci ekledi</div>':""}
    </div>

    <!-- Geri bildirim: öğrenci=form, koç=özet+durum -->
    ${n==="student"?qr(s,a):`
    <div style="background:var(--surface2);border:1.5px solid ${s.done?"var(--green)":"var(--border)"};border-radius:11px;padding:12px 16px;display:flex;align-items:center;gap:10px;margin-bottom:14px">
      <div style="width:20px;height:20px;border-radius:5px;background:${s.done?"var(--green)":"transparent"};border:2px solid ${s.done?"var(--green)":"var(--border)"};display:flex;align-items:center;justify-content:center;font-size:12px;flex-shrink:0">${s.done?"✓":""}</div>
      <div style="font-size:13px;font-weight:700;color:${s.done?"var(--green)":"var(--text-dim)"}">${s.done?"Tamamlandı":"Henüz tamamlanmadı"}</div>
    </div>
    ${Ur(s)}`}

    <!-- Test/Video listesi -->
    ${$}

    <!-- Sonuç Gir (soru/deneme türleri için) -->
    ${s.type==="soru"||s.type==="deneme"?`
    <div style="background:var(--surface2);border:1px solid var(--border);border-radius:11px;padding:14px 16px;margin-bottom:14px">
      <div style="font-size:11px;font-weight:700;color:var(--text-dim);text-transform:uppercase;letter-spacing:.5px;margin-bottom:10px">📊 Sonucu Gir</div>
      <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px">
        <div>
          <div style="font-size:10px;font-weight:700;color:var(--green);margin-bottom:4px">✓ Doğru</div>
          <input type="number" id="tdDogru" min="0" value="${f}" placeholder="0" ${n==="coach"?"disabled":""} oninput="onTaskResultInput(${v}, this)"
            style="width:100%;padding:8px;background:var(--surface);border:1.5px solid var(--border);border-radius:8px;color:var(--text);font-size:15px;font-weight:700;text-align:center;box-sizing:border-box">
        </div>
        <div>
          <div style="font-size:10px;font-weight:700;color:var(--red);margin-bottom:4px">✗ Yanlış</div>
          <input type="number" id="tdYanlis" min="0" value="${k}" placeholder="0" ${n==="coach"?"disabled":""} oninput="onTaskResultInput(${v}, this)"
            style="width:100%;padding:8px;background:var(--surface);border:1.5px solid var(--border);border-radius:8px;color:var(--text);font-size:15px;font-weight:700;text-align:center;box-sizing:border-box">
        </div>
        <div>
          <div style="font-size:10px;font-weight:700;color:var(--text-dim);margin-bottom:4px">— Boş</div>
          <input type="number" id="tdBos" min="0" value="${y}" placeholder="0" ${n==="coach"?"disabled":""} oninput="onTaskResultInput(${v}, this)"
            style="width:100%;padding:8px;background:var(--surface);border:1.5px solid var(--border);border-radius:8px;color:var(--text);font-size:15px;font-weight:700;text-align:center;box-sizing:border-box">
        </div>
      </div>
      ${v>0?`
      <div style="font-size:12px;font-weight:700;color:var(--text-mid);margin-top:12px;display:flex;justify-content:space-between;border-top:1px dashed var(--border);padding-top:10px">
        <span>📋 Toplam Soru Sayısı:</span>
        <span style="color:var(--accent);font-weight:800" id="tdTotalQSpan">${v} Soru</span>
      </div>
      `:""}
      ${s.student_result?`<div style="font-size:11px;color:var(--text-dim);margin-top:8px;text-align:right">Son güncelleme: ${new Date(s.student_result.ts||Date.now()).toLocaleDateString("tr-TR")}</div>`:""}
    </div>
    ${(()=>{var M;const S=Po(s.exam,s.subject);return S?(ye=[...((M=s.student_result)==null?void 0:M.yanlis_konular)||[]],`<div style="background:var(--surface2);border:1px solid var(--border);border-radius:11px;padding:14px 16px;margin-bottom:14px">
        <div style="font-size:11px;font-weight:700;color:var(--text-dim);text-transform:uppercase;letter-spacing:.5px;margin-bottom:10px">📌 Yanlış Konular</div>
        <div style="display:flex;flex-wrap:wrap;gap:0">${S.map(E=>{const A=ye.includes(E);return`<span ${n==="coach"?"":`onclick="toggleKonuChip(this,'${E.replace(/'/g,"\\'")}')"`}
            style="display:inline-block;padding:5px 11px;margin:3px;border-radius:20px;font-size:11px;font-weight:600;cursor:${n==="coach"?"default":"pointer"};user-select:none;border:1px solid ${A?"var(--red)":"var(--border)"};background:${A?"rgba(255,92,122,.12)":"var(--surface)"};color:${A?"var(--red)":"var(--text-mid)"}">
            ${g(E)}</span>`}).join("")}</div>
      </div>`):""})()}
    `:""}

    <!-- Not -->
    <div class="field">
      <label>${n==="student"?"Koçuma Not":"Öğrenci Notu"}</label>
      <textarea id="tdNote" placeholder="${n==="student"?"Koçuna iletmek istediğin bir şey var mı?":"—"}" style="min-height:60px" ${n==="coach"?"disabled":""}>${s.student_note||""}</textarea>
    </div>

    <div style="display:flex; gap:10px; margin-top:12px">
      ${n==="coach"?`<button class="btn btn-ghost" style="flex:1; justify-content:center; padding:12px; font-weight:700;" onclick="cm('taskDetailModal'); openCoachTaskEdit('${e}',${t})">⚙ Düzenle</button>
           <button class="btn btn-accent" style="flex:2; justify-content:center; padding:12px; font-weight:700;" onclick="cm('taskDetailModal')">Kapat</button>`:`<button class="btn btn-accent" style="flex:1; justify-content:center; padding:12px; font-weight:700;" onclick="saveTaskDetail('${e}',${t},'${n}')">Kaydet</button>`}
    </div>
    ${n==="student"&&!s.done&&Qe("focus")?`
    <button onclick="startFocusMode('${e}',${t})" style="width:100%;margin-top:10px;padding:12px;background:var(--focus-purple-dim);border:1.5px solid var(--focus-purple);color:var(--focus-purple);border-radius:11px;font-size:13px;font-weight:700;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px">🎯 Odaklanmaya Başla</button>`:""}
  </div>`,V("taskDetailModal")}let $e=null,ct=null,Ie=null,pt=null,en=null,yt=null,xt=null;const yn=100,Va=2*Math.PI*yn;function Za(e){const t=Math.max(0,Math.round(e/1e3));return`${String(Math.floor(t/60)).padStart(2,"0")}:${String(t%60).padStart(2,"0")}`}function Ja(e){var t;(t=document.querySelector('meta[name="theme-color"]'))==null||t.setAttribute("content",e)}async function Gr(){try{"wakeLock"in navigator&&(yt=await navigator.wakeLock.request("screen"))}catch{}}function Wr(){try{yt==null||yt.release()}catch{}yt=null}function Xa(){$e&&(clearInterval($e),$e=null),xt&&(document.removeEventListener("visibilitychange",xt),xt=null),Wr(),Ja("#E8613A"),ct=null,Ie=null,pt=null,en=null}function Lt(){if(Ie!==null)return;const e=ct-Date.now(),t=document.getElementById("focusTimeEl");t&&(t.textContent=Za(e));const n=document.getElementById("focusRingBar");if(n&&pt){const a=Math.max(0,Math.min(1,e/pt));n.setAttribute("stroke-dashoffset",String(Va*(1-a)))}if(e<=0){$e&&(clearInterval($e),$e=null);const a=en||{};Qa(a.ds,a.idx)}}function Vr(e,t){var s;const n=`${x.studentId}_${e}`,a=(s=p.tasks[n])==null?void 0:s[t];if(!a)return;Z("taskDetailModal"),tn();const i=Math.max(1,a.duration||25)*60*1e3;en={ds:e,idx:t},pt=i,ct=Date.now()+i,Ie=null,Ja("#0f0e0c"),Gr();const o=document.createElement("div");o.id="focusOverlay",o.className="focus-overlay",o.innerHTML=`
    <div class="focus-title">${g(a.subject)}</div>
    <div class="focus-ring">
      <svg class="focus-ring-svg" viewBox="0 0 220 220">
        <circle class="focus-ring-track" cx="110" cy="110" r="${yn}"/>
        <circle class="focus-ring-bar" id="focusRingBar" cx="110" cy="110" r="${yn}" stroke-dasharray="${Va}" stroke-dashoffset="0"/>
      </svg>
      <div class="focus-time" id="focusTimeEl">${Za(i)}</div>
    </div>
    <div style="display:flex;gap:8px;flex-wrap:wrap;justify-content:center">
      <button class="focus-cancel" id="focusPauseBtn" onclick="pauseFocusMode()">⏸ Duraklat</button>
      <button class="focus-cancel" style="border-color:var(--focus-purple);color:var(--focus-purple)" onclick="finishFocusModeEarly()">✓ Şimdi Bitir</button>
      <button class="focus-cancel" onclick="cancelFocusMode('${e}',${t})">Vazgeç</button>
    </div>`,document.body.appendChild(o),xt=()=>{document.hidden||Lt()},document.addEventListener("visibilitychange",xt),$e=setInterval(Lt,1e3),Lt()}window.pauseFocusMode=function(){const e=document.getElementById("focusPauseBtn");Ie===null?(Ie=Math.max(0,ct-Date.now()),e&&(e.textContent="▶ Devam Et")):(ct=Date.now()+Ie,Ie=null,e&&(e.textContent="⏸ Duraklat"),Lt())};window.finishFocusModeEarly=async function(){var o;const e=en;if(!e)return;const{ds:t,idx:n}=e,a=`${x.studentId}_${t}`,i=(o=p.tasks[a])==null?void 0:o[n];if(i&&pt){const s=Ie!==null?Ie:Math.max(0,ct-Date.now()),r=Math.max(1,Math.round((pt-s)/6e4));i.duration=r,i._id&&h.from("tasks").update({duration:r}).eq("id",i._id).then(()=>{})}$e&&(clearInterval($e),$e=null),await Qa(t,n)};async function Zr(e,t){var n;await ie("Odaklanma seansını sonlandırmak istediğine emin misin? Görev tamamlanmış sayılmayacak.")&&(Xa(),(n=document.getElementById("focusOverlay"))==null||n.remove())}function Jr(){var e;try{(e=navigator.vibrate)==null||e.call(navigator,[200,100,200])}catch{}if(Qe("sound"))try{const t=new(window.AudioContext||window.webkitAudioContext),n=t.createOscillator(),a=t.createGain();n.type="sine",n.frequency.setValueAtTime(880,t.currentTime),n.frequency.exponentialRampToValueAtTime(660,t.currentTime+.9),a.gain.setValueAtTime(1e-4,t.currentTime),a.gain.exponentialRampToValueAtTime(.18,t.currentTime+.05),a.gain.exponentialRampToValueAtTime(1e-4,t.currentTime+1.4),n.connect(a),a.connect(t.destination),n.start(),n.stop(t.currentTime+1.5)}catch{}}async function Qa(e,t){var o,s;const n=`${x.studentId}_${e}`,a=(o=p.tasks[n])==null?void 0:o[t],i=document.getElementById("focusOverlay");if(Jr(),Xa(),i&&(i.innerHTML=`
      <div style="background:var(--surface);border:2px solid var(--focus-purple);border-radius:20px;padding:32px 40px;text-align:center;box-shadow:0 20px 60px rgba(0,0,0,.35);animation:celebPop .4s ease-out">
        <div style="font-size:52px;margin-bottom:10px">🏆</div>
        <div style="font-size:18px;font-weight:800;color:var(--focus-purple);margin-bottom:4px">Odaklanma Tamamlandı!</div>
        <div style="font-size:13px;color:var(--text-mid)">${g((a==null?void 0:a.subject)||"")} görevini bitirdin 💪</div>
      </div>`,setTimeout(()=>{i.remove(),e!=null&&t!=null&&It(e,t,"student")},3200)),a&&!a.done&&(a.done=!0,a.task_items&&Array.isArray(a.task_items)&&a.task_items.forEach(r=>{r.done=!0}),a._id&&await h.from("tasks").update({done:!0,task_items:a.task_items||null,duration:a.duration}).eq("id",a._id),be(),x.coachId)){const r=((s=x.dbUser)==null?void 0:s.full_name)||"Öğrenci";h.from("messages").insert({student_id:x.studentId,coach_id:x.coachId,from_role:"student",text:`🎯 ${r} "${a.subject}" görevine odaklanarak tamamladı.`,read:!1}).then(()=>{})}tn()}function tn(){var l;if(!Qe("badges"))return;const e=new Date,t=e.getHours(),n=e.getMinutes(),a=ce(),i=t<8,o=t===23&&n>=30,s=i?"morning":o?"night":null;if(!s)return;const r=`ra_egg_${a}_${s}`;localStorage.getItem(r)||(localStorage.setItem(r,"1"),(l=document.getElementById("spHero"))==null||l.classList.add("badge-halo"),b(s==="morning"?"🌅 Sabah Yıldızı: Bugün güne 1-0 önde başladın!":"🦉 Gece Kuşu: Geç saatte de olsa bitirdin! Şimdi dinlenme vakti."))}function Xr(){const e=ce();return!!(localStorage.getItem(`ra_egg_${e}_morning`)||localStorage.getItem(`ra_egg_${e}_night`))}window.startFocusMode=Vr;window.cancelFocusMode=Zr;window.checkEasterEgg=tn;async function Qr(e){var t;if(!x.coachId)return b("Koç bulunamadı.");try{const n=`🤔 "${e}" konusunda kendimi zayıf hissediyorum, bu konuda ne önerirsin?`;await h.from("messages").insert({student_id:x.studentId,coach_id:x.coachId,from_role:"student",text:n,read:!1}),Kt(x.studentId,x.coachId,((t=x.dbUser)==null?void 0:t.full_name)||"Öğrenciniz",n),b("Koçuna iletildi ✓",!0),le("smessages")}catch(n){b("Gönderilemedi: "+n.message)}}window.askCoachAboutGap=Qr;function es(e,t){let n=document.getElementById("gapTaskModal");n||(n=document.createElement("div"),n.id="gapTaskModal",n.className="modal-bg",document.body.appendChild(n),n.addEventListener("click",a=>{a.target===n&&n.classList.remove("open")})),n.innerHTML=`<div class="modal" style="max-width:380px">
    <button class="modal-close" onclick="cm('gapTaskModal')">×</button>
    <h2>Programa Ekle</h2>
    <div class="field"><label>Konu</label><input id="gapSubject" value="${g(e)}" readonly style="opacity:.75"></div>
    <div class="field-row">
      <div class="field"><label>Tarih</label><input type="date" id="gapDate" value="${ce()}"></div>
      <div class="field"><label>Süre (dk)</label><input type="number" id="gapDuration" value="30" min="10" step="5"></div>
    </div>
    <input type="hidden" id="gapExamType" value="${g(t||"")}">
    <div style="font-size:11px;color:var(--text-dim);margin-bottom:14px">Bu görev programına eklenecek ve koçuna kendi eklediğin belli olacak şekilde bildirim gidecek.</div>
    <button class="btn btn-accent" style="width:100%;justify-content:center;padding:12px" onclick="saveGapTask()">Programa Ekle</button>
  </div>`,V("gapTaskModal")}window.openGapTaskModal=es;async function ts(){var l;const e=document.getElementById("gapSubject").value.trim(),t=document.getElementById("gapDate").value,n=+document.getElementById("gapDuration").value||30,a=document.getElementById("gapExamType").value||null;if(!e||!t)return b("Tarih seçin");const i={student_id:x.studentId,coach_id:x.coachId||null,date:t,type:"konu",exam_type:a,subject:e,duration:n,note:null,done:!1,added_by_student:!0},{data:o,error:s}=await h.from("tasks").insert(i).select().single();if(s)return b("Hata: "+s.message);const r=`${x.studentId}_${t}`;if(p.tasks[r]||(p.tasks[r]=[]),p.tasks[r].push({_id:o.id,type:o.type,exam:o.exam_type,subject:o.subject,duration:o.duration,note:o.note,done:!1,student_note:"",added_by_student:!0}),Z("gapTaskModal"),b("Görev programına eklendi ✓"),be(),x.coachId){const c=((l=x.dbUser)==null?void 0:l.full_name)||"Öğrenci";h.from("messages").insert({student_id:x.studentId,coach_id:x.coachId,from_role:"student",text:`📅 ${c} programına kendi "${e}" görevini ekledi.`,read:!1}).then(()=>{})}}window.saveGapTask=ts;async function ns(e,t,n){var s;if(n==="coach")return;const i=`${x.role==="student"?x.studentId:p.activeStuId}_${e}`,o=(s=p.tasks[i])==null?void 0:s[t];o&&(o.done=!o.done,o.task_items&&Array.isArray(o.task_items)&&o.task_items.forEach(r=>{r.done=o.done}),await h.from("tasks").update({done:o.done,task_items:o.task_items||null}).eq("id",o._id),It(e,t,n),n==="student"?be():ne())}async function as(e,t,n,a){var l;if(a==="coach")return;const o=`${x.role==="student"?x.studentId:p.activeStuId}_${e}`,s=(l=p.tasks[o])==null?void 0:l[t];if(!s||!s.task_items)return;s.task_items[n].done=!s.task_items[n].done;const r=s.task_items.every(c=>c.done);s.done=r,C(!0),await h.from("tasks").update({task_items:s.task_items,done:s.done}).eq("id",s._id),C(!1),It(e,t,a),a==="student"?be():ne(),b("İlerleme kaydedildi ✓")}async function is(e,t,n){var r;if(n==="coach")return;const i=`${x.role==="student"?x.studentId:p.activeStuId}_${e}`,o=(r=p.tasks[i])==null?void 0:r[t];if(!o||!o.task_items)return;const s=o.task_items.every(l=>l.done);o.task_items.forEach(l=>{l.done=!s}),o.done=!s,C(!0),await h.from("tasks").update({task_items:o.task_items,done:o.done}).eq("id",o._id),C(!1),It(e,t,n),n==="student"?be():ne(),b("İlerleme kaydedildi ✓")}function os(e,t){if(e<=0)return;const n=document.getElementById("tdDogru"),a=document.getElementById("tdYanlis"),i=document.getElementById("tdBos");if(!n||!a||!i)return;let o=parseInt(n.value)||0,s=parseInt(a.value)||0,r=parseInt(i.value)||0;t===n||t===a?(o+s>e&&(t===n?(o=e-s,n.value=Math.max(0,o)):(s=e-o,a.value=Math.max(0,s)),o=parseInt(n.value)||0,s=parseInt(a.value)||0),i.value=Math.max(0,e-o-s)):t===i&&(o+r>e&&(r=e-o,i.value=Math.max(0,r),r=parseInt(i.value)||0),a.value=Math.max(0,e-o-r))}function rs(e,t){var i,o,s;e.closest("div").querySelectorAll("button[data-speed]").forEach(r=>{const l=r.dataset.speed===t;r.style.borderColor=l?"var(--accent)":"var(--border)",r.style.background=l?"var(--accent-dim)":"var(--surface2)",r.style.color=l?"var(--accent)":"var(--text-mid)"}),document.getElementById("tdSpeed").value=t;const n=parseFloat(t),a=document.getElementById("speedCalc");if(a){const r=parseInt(((s=(o=(i=a.closest("[id=speedInfo]"))==null?void 0:i.textContent)==null?void 0:o.match(/Toplam (\d+) dk/))==null?void 0:s[1])||0);a.textContent=Math.ceil(r/n)+" dk",document.getElementById("tdDuration").value=Math.ceil(r/n)}}async function ss(e,t,n){var y,$,w,I,T;if(n==="coach")return;const i=`${x.role==="student"?x.studentId:p.activeStuId}_${e}`,o=(y=p.tasks[i])==null?void 0:y[t];if(!o)return;const s=(($=document.getElementById("tdNote"))==null?void 0:$.value.trim())||"",r={student_note:s},l=parseInt((w=document.getElementById("fbHour"))==null?void 0:w.value)||0,c=parseInt((I=document.getElementById("fbMin"))==null?void 0:I.value)||0,d=l*60+c,m={status:Ue.status||null,time_spent:d>0?d:((T=o.student_feedback)==null?void 0:T.time_spent)||null,focus:Ue.focus||null,difficulty:Ue.difficulty||null,blocker:Ue.blocker||null};(m.status||m.focus||m.difficulty||d>0)&&(r.student_feedback=m,o.student_feedback=m,m.status&&(r.done=m.status!=="failed",o.done=r.done));const u=document.getElementById("tdDogru"),v=document.getElementById("tdYanlis"),f=document.getElementById("tdBos");if(u!==null){const B=parseInt(u.value)||0,S=parseInt(v.value)||0,M=parseInt(f.value)||0,E=(o.task_items||[]).reduce((A,P)=>A+(P.soru||0),0);if(E>0&&(B>0||S>0||M>0)&&B+S+M!==E){b(`Hata: Doğru + Yanlış + Boş toplamı (${B+S+M}) toplam soru sayısına (${E}) eşit olmalıdır!`);return}(B>0||S>0||M>0||ye.length>0)&&(r.student_result={dogru:B,yanlis:S,bos:M,yanlis_konular:[...ye],ts:new Date().toISOString()},o.student_result=r.student_result)}if(!o._id){b("Hata: görev ID bulunamadı");return}const{error:k}=await h.from("tasks").update(r).eq("id",o._id);if(k){b("Kaydetme hatası: "+k.message),console.error("saveTaskDetail error",k,r);return}o.student_note=s,Z("taskDetailModal"),b("Kaydedildi ✓"),n==="student"?be():ne()}function zn(){const e=p.students.find(o=>o.id===x.studentId);if(!e)return;const t=document.getElementById("view-sexams"),n=[...p.exams].filter(o=>o.studentId===e.id).sort((o,s)=>s.date.localeCompare(o.date));let a="";if(n.length>1){const o=[...n].sort((r,l)=>r.date.localeCompare(l.date)).slice(-8),s=Math.max(...o.map(r=>(EXAM_DEFS[r.type]||[]).reduce((c,d)=>{var m;return c+Number(((m=r.nets)==null?void 0:m[d])||0)},0)),1);a=`<div class="card cp" style="margin-bottom:16px">
      <div style="font-family:'Inter',sans-serif;font-size:15px;font-weight:700;margin-bottom:12px">📈 Net Gelişimim</div>
      <div class="bar-chart-scroll">
      <div class="bar-chart">
        ${o.map(r=>{const c=(EXAM_DEFS[r.type]||[]).reduce((m,u)=>{var v;return m+Number(((v=r.nets)==null?void 0:v[u])||0)},0),d=Math.max(Math.round(c/s*100),4);return`<div class="bar-wrap" onclick="document.getElementById('exi_${r.id}')?.scrollIntoView({behavior:'smooth',block:'center'})">
            <div class="bar-val">${c.toFixed(0)}</div>
            <div class="bar" style="height:${d}%;background:${e.color}"></div>
            <div class="bar-label">${g(r.name.replace("Deneme ","#").replace("TYT ","").replace("AYT ",""))}</div>
          </div>`}).join("")}
      </div>
      </div>
    </div>`}const i=n.length?n.map(o=>{const s=EXAM_DEFS[o.type]||[],r=s.reduce((c,d)=>{var m;return c+Number(((m=o.nets)==null?void 0:m[d])||0)},0).toFixed(1),l=s.map(c=>{var m;const d=Number(((m=o.nets)==null?void 0:m[c])||0);return`<div class="net-box"><div class="net-label">${c}</div><div class="net-val ${$n(d)}">${d}</div></div>`}).join("");return`<div class="exam-item" id="exi_${o.id}">
      <div class="exam-header">
        <div><div class="exam-name">${g(o.name)}</div><div class="exam-date">${new Date(o.date+"T12:00").toLocaleDateString("tr-TR",{day:"numeric",month:"long",year:"numeric"})}</div></div>
        <button class="btn btn-ghost btn-xs" onclick="openStudentExamModal('${o.id}')">✏️ Düzenle</button>
      </div>
      ${o.note?`<div style="font-size:12px;color:var(--text-mid);margin-bottom:8px;font-style:italic">"${g(o.note)}"</div>`:""}
      <div class="nets-grid">${l}</div>
      <div style="margin-top:8px"><div style="font-family:'Inter',sans-serif;font-size:18px;font-weight:800">Toplam: ${r}</div></div>
      ${Fa(o,n)}
      ${o.coachComment?`<div class="coach-comment-box"><strong>Koç Yorumu</strong>${g(o.coachComment)}</div>`:""}
    </div>`}).join(""):'<div class="empty"><p>Henüz deneme sonucu eklemediniz.<br>İlk sonucunuzu girin!</p></div>';t.innerHTML=`
    <div class="sh"><h2>Denemelerim</h2><button class="btn btn-accent" onclick="openStudentExamModal()">+ Sonuç Gir</button></div>
    ${a}${i}`}function ei(e){var i;const t=e?p.exams.find(o=>o.id===e):null;document.getElementById("emTitle").textContent=t?"Sonucu Düzenle":"Deneme Sonucu Gir",document.getElementById("emId").value=e||"",document.getElementById("emName").value=(t==null?void 0:t.name)||"",document.getElementById("emDate").value=(t==null?void 0:t.date)||G(new Date);const n=x.role==="student",a=(t==null?void 0:t.studentId)||p.activeStuId||x.studentId;if(n){document.getElementById("emStudentWrap").style.display="none";const o=((i=p.students.find(s=>s.id===x.studentId))==null?void 0:i.name)||"";document.getElementById("emStudent").innerHTML=`<option value="${x.studentId}">${g(o)}</option>`}else document.getElementById("emStudentWrap").style.display="",document.getElementById("emStudent").innerHTML=p.students.map(o=>`<option value="${o.id}">${g(o.name)}</option>`).join(""),a&&(document.getElementById("emStudent").value=a);document.getElementById("emExamType").value=(t==null?void 0:t.type)||"TYT",document.getElementById("emNote").value=(t==null?void 0:t.note)||"",Bn(),t!=null&&t.examDetails&&Object.entries(t.examDetails).forEach(([o,s])=>{const r=document.getElementById(`ed_${o}_d`),l=document.getElementById(`ed_${o}_y`),c=document.getElementById(`ed_${o}_b`);r&&(r.value=s.dogru||0,l.value=s.yanlis||0,c.value=s.bos||0),se[o]={...s},ti(o),(s.yanlis_konular||[]).forEach(d=>{document.querySelectorAll(`#konu_acc_${o.replace(/\s/g,"_")} span`).forEach(u=>{u.textContent.trim()===d&&(u.style.borderColor="var(--red)",u.style.background="rgba(255,92,122,.12)",u.style.color="var(--red)")})})}),V("examModal")}function ls(e){ei(e)}let se={};function ds(e,t,n){se[t]||(se[t]={dogru:0,yanlis:0,bos:0,yanlis_konular:[]});const a=se[t].yanlis_konular,i=a.indexOf(n);i===-1?(a.push(n),e.style.borderColor="var(--red)",e.style.background="rgba(255,92,122,.12)",e.style.color="var(--red)"):(a.splice(i,1),e.style.borderColor="var(--border)",e.style.background="var(--surface)",e.style.color="var(--text-mid)")}window.toggleExamKonuChip=ds;function ti(e){var c,d,m,u;const t=parseInt((c=document.getElementById(`ed_${e}_d`))==null?void 0:c.value)||0,n=parseInt((d=document.getElementById(`ed_${e}_y`))==null?void 0:d.value)||0,a=parseInt((m=document.getElementById(`ed_${e}_b`))==null?void 0:m.value)||0;se[e]||(se[e]={yanlis_konular:[]}),se[e].dogru=t,se[e].yanlis=n,se[e].bos=a;const i=document.getElementById("emExamType").value,o=((u=EXAM_SORU[i])==null?void 0:u[e])||40,s=t+n+a,r=document.getElementById(`ed_${e}_net`),l=document.getElementById(`ed_${e}_warn`);r&&(r.textContent=Math.max(0,t-n/4).toFixed(2)),l&&(l.style.display=s>o?"":"none"),Sr()}window.updateExamNet=ti;function cs(e){const t=document.getElementById(`konu_acc_${e.replace(/\s/g,"_")}`);t&&(t.style.display=t.style.display==="none"?"":"none")}window.toggleKonuAccordion=cs;function Bn(){const e=document.getElementById("emExamType").value,t=EXAM_DEFS[e]||[];se={};const n=document.getElementById("emPuanDisplay");n&&(n.innerHTML=""),document.getElementById("netInputsWrap").innerHTML=t.map(a=>{var l;const i=((l=EXAM_SORU[e])==null?void 0:l[a])||40,s=(EXAM_KONU_MAP[`${e}_${a}`]||[]).flatMap(c=>kt[c]||[]),r=s.length?`
      <div style="margin-top:8px">
        <button type="button" onclick="toggleKonuAccordion('${a}')"
          style="font-size:11px;font-weight:700;color:var(--text-dim);background:none;border:none;cursor:pointer;padding:0;display:flex;align-items:center;gap:4px">
          📌 Yanlış Konular <span style="font-size:10px">▾</span>
        </button>
        <div id="konu_acc_${a.replace(/\s/g,"_")}" style="display:none;margin-top:6px;display:flex;flex-wrap:wrap;gap:0">
          ${s.map(c=>`<span onclick="toggleExamKonuChip(this,'${a}','${c.replace(/'/g,"\\'")}')"
            style="display:inline-block;padding:4px 10px;margin:2px;border-radius:20px;font-size:10px;font-weight:600;cursor:pointer;user-select:none;border:1px solid var(--border);background:var(--surface);color:var(--text-mid)">${g(c)}</span>`).join("")}
        </div>
      </div>`:"";return`<div style="background:var(--surface2);border:1px solid var(--border);border-radius:11px;padding:12px 14px;margin-bottom:10px">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:10px">
        <span style="font-size:12px;font-weight:800;text-transform:uppercase;letter-spacing:.5px">${g(a)}</span>
        <span style="font-size:10px;color:var(--text-dim)">${i} soru · Net: <b id="ed_${a}_net" style="color:var(--accent)">0.00</b></span>
      </div>
      <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px">
        <div>
          <div style="font-size:10px;font-weight:700;color:var(--green);margin-bottom:3px">✓ Doğru</div>
          <input type="number" id="ed_${a}_d" min="0" max="${i}" value="0"
            oninput="updateExamNet('${a}')"
            style="width:100%;padding:7px;background:var(--surface);border:1.5px solid var(--border);border-radius:8px;color:var(--text);font-size:15px;font-weight:700;text-align:center;box-sizing:border-box">
        </div>
        <div>
          <div style="font-size:10px;font-weight:700;color:var(--red);margin-bottom:3px">✗ Yanlış</div>
          <input type="number" id="ed_${a}_y" min="0" max="${i}" value="0"
            oninput="updateExamNet('${a}')"
            style="width:100%;padding:7px;background:var(--surface);border:1.5px solid var(--border);border-radius:8px;color:var(--text);font-size:15px;font-weight:700;text-align:center;box-sizing:border-box">
        </div>
        <div>
          <div style="font-size:10px;font-weight:700;color:var(--text-dim);margin-bottom:3px">— Boş</div>
          <input type="number" id="ed_${a}_b" min="0" max="${i}" value="0"
            oninput="updateExamNet('${a}')"
            style="width:100%;padding:7px;background:var(--surface);border:1.5px solid var(--border);border-radius:8px;color:var(--text);font-size:15px;font-weight:700;text-align:center;box-sizing:border-box">
        </div>
      </div>
      <div id="ed_${a}_warn" style="display:none;font-size:10px;color:var(--red);margin-top:4px">⚠ D+Y+B toplamı ${i} soruyu geçiyor!</div>
      ${r}
    </div>`}).join("")}async function ps(){var r,l;const e=document.getElementById("emName").value.trim();if(!e)return b("Sınav adı girin!");const t=document.getElementById("emExamType").value,n={};(EXAM_DEFS[t]||[]).forEach(c=>{const d=se[c]||{};n[c]=Math.max(0,(d.dogru||0)-(d.yanlis||0)/4)});const a=document.getElementById("emId").value,i=document.getElementById("emStudent").value,o={name:e,date:document.getElementById("emDate").value,student_id:i,coach_id:x.coachId||((r=p.students.find(c=>c.id===i))==null?void 0:r.coachId),exam_type:t,nets:n,exam_details:se,student_note:document.getElementById("emNote").value.trim()};async function s(c,d,m){var u,v,f;if(d){const{error:k}=await h.from("exams").update(c).eq("id",m);if((u=k==null?void 0:k.message)!=null&&u.includes("exam_details")){const{exam_details:y,...$}=c;return h.from("exams").update($).eq("id",m)}return{error:k}}else{const k=await h.from("exams").insert(c).select().single();if((f=(v=k.error)==null?void 0:v.message)!=null&&f.includes("exam_details")){const{exam_details:y,...$}=c;return h.from("exams").insert($).select().single()}return k}}if(a){const{error:c}=await s(o,!0,a);if(c)return console.error("[saveExam UPDATE error]",c),b(`Hata: ${c.message||"Kaydedilemedi"} (${c.code||"unknown"})`);const d=p.exams.find(m=>m.id===a);d&&Object.assign(d,{name:o.name,date:o.date,studentId:i,type:t,nets:n,examDetails:se,note:o.student_note}),b("Güncellendi ✓")}else{const c=p.exams.filter(u=>u.studentId===i&&u.type===t&&u.date<o.date).sort((u,v)=>u.date.localeCompare(v.date)).pop(),{data:d,error:m}=await s(o,!1,null);if(m)return console.error("[saveExam INSERT error]",m),b(`Hata: ${m.message||"Kaydedilemedi"} (${m.code||"unknown"})`);if(p.exams.push({id:d.id,studentId:d.student_id,name:d.name,date:d.date,type:d.exam_type,nets:d.nets||{},examDetails:d.exam_details||{},note:d.student_note,coachComment:""}),b("Deneme eklendi ✓"),x.role==="student"&&Qe("celebration")&&c){const u=EXAM_DEFS[t]||[],v=u.reduce((y,$)=>y+Number(n[$]||0),0),f=u.reduce((y,$)=>{var w;return y+Number(((w=c.nets)==null?void 0:w[$])||0)},0),k=v-f;if(k>=10){const y=p.students.find($=>$.id===i);Wa(k,e,(y==null?void 0:y.target)||"")}}}if(Z("examModal"),x.role==="student"?zn():Be(),x.role==="coach"||x.role==="developer")try{const c=[];Object.values(se||{}).forEach(m=>{var u;(u=m==null?void 0:m.yanlis_konular)!=null&&u.length&&c.push(...m.yanlis_konular)}),ye!=null&&ye.length&&c.push(...ye);const d=[...new Set(c)];if(d.length>0&&i){const m=((l=p.konuMastery)==null?void 0:l[i])||{},u=[];if(Object.entries(m).forEach(([v,f])=>{Object.entries(f).forEach(([k,y])=>{d.includes(k)&&(y.status==="td"?u.push({konu:k,subject:v,type:"td_broken",stars:y.stars}):y.stars>=5&&u.push({konu:k,subject:v,type:"high_star_wrong",stars:y.stars}))})}),u.length>0){const v=u.filter(y=>y.type==="td_broken"),f=u.filter(y=>y.type==="high_star_wrong");let k="⚠️ Mastery Önerileri: ";v.length>0&&(k+=`${v.map(y=>y.konu).join(", ")} TD'den düştü! `),f.length>0&&(k+=`${f.map(y=>y.konu).join(", ")} için yıldız düşürmeyi düşün.`),setTimeout(()=>{const y=document.createElement("div");y.style.cssText="position:fixed;bottom:80px;right:16px;max-width:360px;background:var(--surface);border:1.5px solid var(--accent);border-radius:12px;padding:14px 16px;box-shadow:var(--shadow-lg);z-index:99999;animation:slideIn .3s ease",y.innerHTML=`
              <div style="display:flex;align-items:flex-start;gap:10px">
                <span style="font-size:20px;flex-shrink:0">⚠️</span>
                <div style="flex:1">
                  <div style="font-size:13px;font-weight:800;margin-bottom:6px">Deneme → Konu Mastery Önerisi</div>
                  ${v.length>0?`<div style="font-size:11px;color:var(--red);margin-bottom:4px">🔴 TD'den düşenler: <b>${v.map($=>$.konu).join(", ")}</b></div>`:""}
                  ${f.length>0?`<div style="font-size:11px;color:var(--accent)">🟡 Yıldız düşürmeyi düşün: <b>${f.map($=>$.konu).join(", ")}</b></div>`:""}
                  <div style="font-size:10px;color:var(--text-dim);margin-top:6px">Değişiklik yapmak için Konu Haritası'na git</div>
                </div>
                <button onclick="this.parentElement.parentElement.remove()" style="border:none;background:none;color:var(--text-dim);cursor:pointer;font-size:16px;line-height:1;flex-shrink:0">×</button>
              </div>`,document.body.appendChild(y),setTimeout(()=>y.remove(),12e3)},600)}}}catch(c){console.error("[mastery suggestion]",c)}}async function vn(){const e=p.students.find(a=>a.id===x.studentId);if(!e)return;const t=(p.messages[e.id]||[]).filter(a=>a.from==="coach"&&!a.read&&a._id).map(a=>a._id);t.length&&await h.from("messages").update({read:!0}).in("id",t),(p.messages[e.id]||[]).forEach(a=>{a.from==="coach"&&(a.read=!0)}),rn();const n=document.getElementById("view-smessages");n.innerHTML=`<div class="sh" style="margin-bottom:12px"><h2>💬 Koçuma Yaz</h2></div>
    <div class="smsg-wrap">
      <div class="msg-main" id="msgMain">${Pe(e.id,"student")}</div>
    </div>`,je()}let Pt=null;function Mn(){An();const e=x.role==="coach"||x.role==="developer"?p.msgThread:x.studentId;e&&(Pt=h.channel("messages_"+e).on("postgres_changes",{event:"INSERT",schema:"public",table:"messages",filter:`student_id=eq.${e}`},t=>{const n=t.new;p.messages[e]||(p.messages[e]=[]),!p.messages[e].find(a=>a._id===n.id)&&(p.messages[e].push({_id:n.id,from:n.from_role,text:n.text||"",image_url:n.image_url||null,read:n.read,created_at:n.created_at,time:new Date(n.created_at).toLocaleTimeString("tr-TR",{hour:"2-digit",minute:"2-digit"})}),x.role==="student"&&n.from_role==="coach"&&currentTab!=="smessages"&&rn(),currentTab==="messages"&&p.msgThread===e&&(document.getElementById("msgMain").innerHTML=Pe(e,"coach"),je()),currentTab==="smessages"&&(document.getElementById("msgMain").innerHTML=Pe(e,"student"),je()))}).subscribe())}function An(){Pt&&(h.removeChannel(Pt),Pt=null)}async function us(){var e,t;await h.from("workspaces").upsert({coach_id:x.coachId,brand_name:((e=p.workspace)==null?void 0:e.brand_name)||"Akademi",brand_color:((t=p.workspace)==null?void 0:t.brand_color)||"#E8613A",onboarding_done:!1},{onConflict:"coach_id"}),p.workspace&&(p.workspace.onboarding_done=!1),li()}window.devResetOnboarding=us;async function ni(){const e=document.getElementById("view-dev-dashboard");e.innerHTML='<div class="sh"><h2>🖥️ Sistem Dashboard</h2></div><div class="empty"><p>Yükleniyor...</p></div>';const[t,n,a,i,o,s]=await Promise.all([h.from("users").select("id,role,created_at"),h.from("tasks").select("id,done,created_at"),h.from("exams").select("id,created_at"),h.from("messages").select("id,created_at"),h.from("tickets").select("id,status,created_at"),h.from("payments").select("id,amount,status,payment_date")]),r=t.data||[],l=n.data||[],c=a.data||[],d=i.data||[],m=o.data||[],u=s.data||[],v=r.filter(T=>T.role==="coach").length,f=r.filter(T=>T.role==="student").length,k=u.filter(T=>T.status==="completed").reduce((T,B)=>T+Number(B.amount),0),y=m.filter(T=>T.status==="open").length,$=Array.from({length:7},(T,B)=>{const S=new Date;return S.setDate(S.getDate()-6+B),G(S)}),w=$.map(T=>l.filter(B=>{var S;return(S=B.created_at)==null?void 0:S.startsWith(T)}).length),I=Math.max(...w,1);e.innerHTML=`
    <div class="sh"><h2>🖥️ Sistem Dashboard</h2>
      <div style="display:flex;gap:8px;align-items:center">
        <span style="font-size:12px;color:var(--text-dim)">${new Date().toLocaleDateString("tr-TR",{weekday:"long",day:"numeric",month:"long",year:"numeric"})}</span>
        <button class="btn btn-ghost btn-sm" onclick="devResetOnboarding()" title="Onboarding sihirbazını yeniden başlat">🧙 Sihirbazı Test Et</button>
      </div>
    </div>

    <div class="stats-row" style="margin-bottom:20px">
      <div class="stat-card"><div class="stat-label">Toplam Öğrenci</div><div class="stat-val" style="color:var(--blue)">${f}</div></div>
      <div class="stat-card"><div class="stat-label">Toplam Koç</div><div class="stat-val" style="color:var(--accent)">${v}</div></div>
      <div class="stat-card"><div class="stat-label">Toplam Görev</div><div class="stat-val">${l.length}</div><div style="font-size:11px;color:var(--green);margin-top:3px">✓ ${l.filter(T=>T.done).length} tamamlandı</div></div>
      <div class="stat-card"><div class="stat-label">Toplam Deneme</div><div class="stat-val">${c.length}</div></div>
      <div class="stat-card"><div class="stat-label">Toplam Mesaj</div><div class="stat-val">${d.length}</div></div>
      <div class="stat-card"><div class="stat-label">Toplam Gelir</div><div class="stat-val" style="color:var(--green)">${k.toLocaleString("tr-TR")} ₺</div></div>
      <div class="stat-card"><div class="stat-label">Açık Ticket</div><div class="stat-val" style="color:${y>0?"var(--red)":"var(--green)"}">${y}</div></div>
    </div>

    <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px">
      <div class="card cp">
        <div style="font-family:'Inter',sans-serif;font-size:14px;font-weight:700;margin-bottom:14px">📅 Son 7 Gün Görev Aktivitesi</div>
        <div style="display:flex;align-items:flex-end;gap:6px;height:80px">
          ${$.map((T,B)=>`<div style="flex:1;display:flex;flex-direction:column;align-items:center;gap:3px">
            <div style="font-size:10px;color:var(--text-mid);font-weight:600">${w[B]}</div>
            <div style="width:100%;background:var(--accent);border-radius:3px 3px 0 0;height:${Math.max(Math.round(w[B]/I*100),4)}%;min-height:3px;opacity:.8"></div>
            <div style="font-size:9px;color:var(--text-dim)">${new Date(T+"T12:00").toLocaleDateString("tr-TR",{day:"numeric",month:"short"})}</div>
          </div>`).join("")}
        </div>
      </div>
      <div class="card cp">
        <div style="font-family:'Inter',sans-serif;font-size:14px;font-weight:700;margin-bottom:14px">🎫 Son Ticket'lar</div>
        ${m.slice(-5).reverse().map(T=>`
          <div style="display:flex;justify-content:space-between;align-items:center;padding:7px 0;border-bottom:1px solid var(--border);font-size:12px">
            <span style="color:var(--text-mid)">#${T.id.slice(0,6)}</span>
            <span class="role-badge" style="background:${T.status==="open"?"var(--red-dim)":T.status==="resolved"?"var(--green-dim)":"var(--accent-dim)"};color:${T.status==="open"?"var(--red)":T.status==="resolved"?"var(--green)":"var(--accent)"}">${T.status}</span>
          </div>`).join("")||'<div style="font-size:12px;color:var(--text-dim)">Ticket yok</div>'}
      </div>
    </div>`}let nt="all";function ms(e){nt=e,mt()}async function mt(){const e=document.getElementById("view-dev-users"),{data:t}=await h.from("users").select("*").order("created_at"),n=new Date,a={all:(t||[]).length,coach:0,student:0,parent:0};(t||[]).forEach(r=>{a[r.role]!==void 0&&a[r.role]++});const i=nt==="all"?t:(t||[]).filter(r=>r.role===nt),o=[["all",`Tümü (${a.all})`],["coach",`Koçlar (${a.coach})`],["student",`Öğrenciler (${a.student})`],["parent",`Veliler (${a.parent})`]].map(([r,l])=>`<button onclick="setDevUserFilter('${r}')" style="padding:7px 16px;border-radius:99px;border:1.5px solid ${nt===r?"var(--accent)":"var(--border)"};background:${nt===r?"var(--accent-dim)":"var(--surface)"};color:${nt===r?"var(--accent)":"var(--text-mid)"};font-size:12px;font-weight:700;cursor:pointer;font-family:inherit;transition:all .15s">${l}</button>`).join("");function s(r){if(r.role!=="coach"&&r.role!=="developer")return'<span style="color:var(--text-dim);font-size:11px">—</span>';const l=r.plan||"trial";if(l==="active")return'<span style="font-size:10px;font-weight:800;color:#10b981;background:rgba(16,185,129,.12);border:1px solid rgba(16,185,129,.3);border-radius:4px;padding:2px 7px">AKTİF</span>';if(l==="paused")return'<span style="font-size:10px;font-weight:700;color:#f59e0b;background:rgba(245,158,11,.12);border:1px solid rgba(245,158,11,.3);border-radius:4px;padding:2px 7px">DURAKLATILDI</span>';if(l==="cancelled")return'<span style="font-size:10px;font-weight:700;color:#ef4444;background:rgba(239,68,68,.1);border:1px solid rgba(239,68,68,.2);border-radius:4px;padding:2px 7px">İPTAL</span>';const c=r.trial_ends_at?new Date(r.trial_ends_at):new Date(new Date(r.created_at).getTime()+14*24*60*60*1e3),d=Math.ceil((c-n)/864e5);return d<=0?'<span style="font-size:10px;font-weight:700;color:#ef4444;background:rgba(239,68,68,.1);border:1px solid rgba(239,68,68,.2);border-radius:4px;padding:2px 7px">SÜRESİ DOLDU</span>':`<span style="font-size:10px;font-weight:700;color:#6366f1;background:rgba(99,102,241,.1);border:1px solid rgba(99,102,241,.2);border-radius:4px;padding:2px 7px">DENEME · ${d}g</span>`}e.innerHTML=`
    <div class="sh"><h2>👥 Kullanıcı Yönetimi</h2>
      <button class="btn btn-accent" onclick="openDevUserModal()">+ Kullanıcı Ekle</button>
    </div>
    <div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:16px">${o}</div>
    <div style="overflow-x:auto">
      <table style="width:100%;border-collapse:collapse;font-size:13px">
        <thead>
          <tr style="border-bottom:1px solid var(--border);color:var(--text-dim);font-size:11px;text-transform:uppercase;letter-spacing:.5px">
            <th style="text-align:left;padding:10px 12px">Ad Soyad</th>
            <th style="text-align:left;padding:10px 12px">Kullanıcı Adı</th>
            <th style="text-align:left;padding:10px 12px">Rol</th>
            <th style="text-align:left;padding:10px 12px">Plan</th>
            <th style="text-align:left;padding:10px 12px">Kayıt</th>
            <th style="padding:10px 12px"></th>
          </tr>
        </thead>
        <tbody>
          ${(i||[]).map(r=>`
            <tr style="border-bottom:1px solid var(--border);transition:background .15s" onmouseover="this.style.background='var(--surface2)'" onmouseout="this.style.background=''">
              <td style="padding:10px 12px;font-weight:700">${g(r.full_name)}</td>
              <td style="padding:10px 12px;color:var(--text-mid)">${g(r.username)}</td>
              <td style="padding:10px 12px"><span class="role-badge ${r.role==="coach"?"role-coach":r.role==="developer"?"role-dev":"role-student"}">${r.role}</span></td>
              <td style="padding:10px 12px">${s(r)}</td>
              <td style="padding:10px 12px;color:var(--text-dim);font-size:11px">${new Date(r.created_at).toLocaleDateString("tr-TR")}</td>
              <td style="padding:10px 12px;display:flex;gap:6px;flex-wrap:nowrap">
                ${r.role==="coach"||r.role==="developer"?`<button class="btn btn-accent btn-xs" onclick="openPlanModal('${r.id}','${g(r.full_name)}','${r.plan||"trial"}','${r.trial_ends_at||""}')">📋</button>`:""}
                <button class="btn btn-ghost btn-xs" onclick="openDevUserModal('${r.id}')">✏️</button>
                <button class="btn btn-danger btn-xs" onclick="devDeleteUser('${r.id}','${g(r.full_name)}')">🗑</button>
              </td>
            </tr>`).join("")}
        </tbody>
      </table>
    </div>`}async function gs(e){const t=e?(await h.from("users").select("*").eq("id",e).single()).data:null;document.getElementById("smTitle").textContent=t?"Kullanıcıyı Düzenle":"Yeni Kullanıcı",document.getElementById("smId").value=e||"",document.getElementById("smName").value=(t==null?void 0:t.full_name)||"",document.getElementById("smTarget").value=(t==null?void 0:t.target)||"",document.getElementById("smUsername").value=(t==null?void 0:t.username)||"",document.getElementById("smPass").value=(t==null?void 0:t.password_hash)||"",document.getElementById("smWeekStart").value=(t==null?void 0:t.week_start)||0,document.getElementById("smProg").value=(t==null?void 0:t.progress)||0,document.getElementById("smProgVal").textContent=((t==null?void 0:t.progress)||0)+"%",document.querySelectorAll(".color-opt").forEach(a=>a.classList.toggle("sel",a.dataset.c===((t==null?void 0:t.color)||"#e8622a")));let n=document.getElementById("smRoleField");n||(n=document.createElement("div"),n.id="smRoleField",n.className="field",n.innerHTML='<label>Rol</label><select id="smRole" style="width:100%;background:var(--surface2);border:1.5px solid var(--border);border-radius:9px;padding:10px 13px;font-size:14px;font-family:inherit;color:var(--text);outline:none"><option value="student">Öğrenci</option><option value="coach">Koç</option><option value="developer">Developer</option></select>',document.getElementById("smName").closest(".modal").insertBefore(n,document.getElementById("smName").parentElement)),document.getElementById("smRole").value=(t==null?void 0:t.role)||"student",document.querySelector("#studentModal .btn-accent").setAttribute("onclick","saveStudentDev()"),V("studentModal")}async function fs(e,t){if(await ie(`"${t}" kullanıcısını kalıcı olarak silmek istediğinizden emin misiniz?

Bu işlem geri alınamaz.`)){C(!0);try{const{data:{session:n}}=await h.auth.getSession(),a=await fetch("/api/delete-user",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${(n==null?void 0:n.access_token)||""}`},body:JSON.stringify({targetUserId:e})}),i=await a.json();if(!a.ok)throw new Error(i.error||"Sunucu hatası");b(`🗑 ${t} silindi`),mt()}catch(n){b("Hata: "+n.message)}finally{C(!1)}}}function ys(e,t,n,a){let i=document.getElementById("planMgmtModal");i||(i=document.createElement("div"),i.id="planMgmtModal",i.className="modal-bg",i.innerHTML=`<div class="modal" style="max-width:400px">
      <button class="modal-close" onclick="cm('planMgmtModal')">×</button>
      <h2 id="planModalTitle">Plan Yönet</h2>
      <input type="hidden" id="planUserId">
      <div class="field">
        <label>Plan Durumu</label>
        <select id="planStatus" style="width:100%;background:var(--surface2);border:1.5px solid var(--border);border-radius:9px;padding:10px 13px;font-size:14px;font-family:inherit;color:var(--text);outline:none">
          <option value="trial">Deneme (Trial)</option>
          <option value="active">Aktif (Ücretli)</option>
          <option value="paused">Duraklatıldı</option>
          <option value="cancelled">İptal Edildi</option>
        </select>
      </div>
      <div class="field" id="trialEndField">
        <label>Deneme Bitiş Tarihi</label>
        <input type="date" id="planTrialEnd" style="width:100%;background:var(--surface2);border:1.5px solid var(--border);border-radius:9px;padding:10px 13px;font-size:14px;font-family:inherit;color:var(--text);outline:none;box-sizing:border-box">
        <div style="font-size:11px;color:var(--text-dim);margin-top:4px">Boş bırakılırsa kayıt tarihinden +7 gün hesaplanır</div>
      </div>
      <div style="display:flex;gap:8px;margin-top:16px">
        <button class="btn btn-accent" style="flex:1;justify-content:center;padding:11px" onclick="savePlan()">Kaydet</button>
        <button class="btn btn-ghost" style="padding:11px 18px" onclick="cm('planMgmtModal')">İptal</button>
      </div>
    </div>`,document.body.appendChild(i),i.addEventListener("click",o=>{o.target===i&&i.classList.remove("open")}),document.getElementById("planStatus").addEventListener("change",function(){document.getElementById("trialEndField").style.display=this.value==="trial"?"":"none"})),document.getElementById("planModalTitle").textContent=`Plan Yönet — ${t}`,document.getElementById("planUserId").value=e,document.getElementById("planStatus").value=n||"trial",document.getElementById("trialEndField").style.display=n==="trial"||!n?"":"none",a?document.getElementById("planTrialEnd").value=a.split("T")[0]:document.getElementById("planTrialEnd").value="",V("planMgmtModal")}async function vs(){const e=document.getElementById("planUserId").value,t=document.getElementById("planStatus").value,n=document.getElementById("planTrialEnd").value,a={plan:t};t==="trial"&&n?a.trial_ends_at=n:t!=="trial"&&(a.trial_ends_at=null),C(!0);const{error:i}=await h.from("users").update(a).eq("id",e);if(C(!1),i)return b("Hata: "+i.message);b(`Plan güncellendi: ${{trial:"Deneme",active:"Aktif",paused:"Duraklatıldı",cancelled:"İptal"}[t]||t} ✓`),Z("planMgmtModal"),mt()}let Me=[],jt="all",ai={};function xs(e){jt=e,tt()}window.setDevResFilter=xs;async function bs(e){const t=Me.find(a=>a.id===e);if(!t||!await ie(`"${t.name}" globale alınsın mı?

Kaynak tüm koçların kütüphanesinde görünür olacak.`))return;const{error:n}=await h.from("resources").update({coach_id:null}).eq("id",e);if(n)return b("Hata: "+n.message);b("Kaynak globale alındı 🌍"),tt()}window.globalizeResource=bs;function aa(e){return e.coach_id?`<span style="font-size:10px;padding:2px 7px;border-radius:99px;background:var(--blue-dim);color:var(--blue);white-space:nowrap" title="Bu kaynağı yalnızca bu koç görür">👤 ${g(ai[e.coach_id]||"Koç")}</span>`:'<span style="font-size:10px;padding:2px 7px;border-radius:99px;background:var(--green-dim);color:var(--green);white-space:nowrap" title="Tüm koçlara açık">🌍 Global</span>'}function ia(e){return e.coach_id?`<button class="btn btn-ghost btn-xs" onclick="globalizeResource('${e.id}')" title="Tüm koçlara aç">🌍</button>`:""}async function tt(){const e=document.getElementById("view-dev-resources"),[{data:t},{data:n}]=await Promise.all([h.from("resources").select("*").order("resource_type,exam_type,subject,name"),h.from("users").select("id, full_name").eq("role","coach")]);Me=t||[],ai=Object.fromEntries((n||[]).map(r=>[r.id,r.full_name||"Koç"]));const a=Me.filter(r=>jt==="global"?!r.coach_id:jt==="coach"?!!r.coach_id:!0),i=a.filter(r=>r.resource_type!=="playlist"),o=a.filter(r=>r.resource_type==="playlist"),s=Me.filter(r=>!!r.coach_id).length;e.innerHTML=`
    <div class="sh"><h2>📚 Kaynak & Müfredat Yönetimi</h2>
      <div style="display:flex;gap:8px">
        <button class="btn btn-ghost btn-sm" onclick="openResourceModal(null,'book')">+ Soru Bankası</button>
        <button class="btn btn-accent btn-sm" onclick="openPlaylistModal()">▶ Playlist / Video Ekle</button>
      </div>
    </div>

    <!-- STATS -->
    <div class="stats-row" style="margin-bottom:14px">
      <div class="stat-card"><div class="stat-label">Soru Bankası</div><div class="stat-val">${Me.filter(r=>r.resource_type!=="playlist").length}</div></div>
      <div class="stat-card"><div class="stat-label">Playlist</div><div class="stat-val">${Me.filter(r=>r.resource_type==="playlist").length}</div></div>
      <div class="stat-card"><div class="stat-label">Koç Kaynağı</div><div class="stat-val" style="color:var(--blue)">${s}</div></div>
      <div class="stat-card"><div class="stat-label">Toplam</div><div class="stat-val">${Me.length}</div></div>
    </div>

    <!-- FİLTRE -->
    <div style="display:flex;gap:8px;margin-bottom:18px">
      ${[["all","Tümü"],["global","🌍 Global"],["coach","👤 Koç Kaynakları"]].map(([r,l])=>`
        <button class="btn btn-sm ${jt===r?"btn-accent":"btn-ghost"}" onclick="setDevResFilter('${r}')">${l}</button>`).join("")}
    </div>

    <!-- PLAYLİSTLER -->
    <div style="margin-bottom:24px">
      <div style="font-family:'Inter',sans-serif;font-size:15px;font-weight:700;margin-bottom:12px;display:flex;align-items:center;gap:8px">
        ▶ Konu Anlatımı Playlistleri <span style="font-size:12px;font-weight:400;color:var(--text-dim)">${o.length} playlist</span>
      </div>
      ${o.length===0?'<div class="empty"><p>Henüz playlist eklenmemiş</p></div>':""}
      <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:10px">
        ${o.map(r=>`
          <div class="card" style="padding:14px 16px">
            <div style="display:flex;justify-content:space-between;align-items:flex-start;gap:8px">
              <div style="flex:1;min-width:0">
                <div style="font-size:13px;font-weight:700;margin-bottom:2px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${g(r.name)}</div>
                <div style="font-size:11px;color:var(--text-dim);margin-bottom:6px">${g(r.publisher)} · ${r.exam_type} ${r.subject} · ${(r.tests||[]).length} video</div>
                ${aa(r)}
              </div>
              <div style="display:flex;gap:4px;flex-shrink:0">
                ${ia(r)}
                <button class="btn btn-ghost btn-xs" onclick="openResourceModal('${r.id}','playlist')">✏️</button>
                <button class="btn btn-danger btn-xs" onclick="devDeleteResource('${r.id}')" style="opacity:.5" onmouseover="this.style.opacity=1" onmouseout="this.style.opacity=.5">🗑</button>
              </div>
            </div>
          </div>`).join("")}
      </div>
    </div>

    <!-- SORU BANKALARI -->
    <div>
      <div style="font-family:'Inter',sans-serif;font-size:15px;font-weight:700;margin-bottom:12px;display:flex;align-items:center;gap:8px">
        📚 Soru Bankaları <span style="font-size:12px;font-weight:400;color:var(--text-dim)">${i.length} kitap</span>
      </div>
      ${i.length===0?'<div class="empty"><p>Henüz kitap eklenmemiş</p></div>':""}
      <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:10px">
        ${i.map(r=>`
          <div class="card" style="padding:14px 16px">
            <div style="display:flex;justify-content:space-between;align-items:flex-start;gap:8px">
              <div style="flex:1;min-width:0">
                <div style="font-size:11px;color:var(--accent);font-weight:700;margin-bottom:2px">${r.exam_type} · ${r.subject}</div>
                <div style="font-size:13px;font-weight:700;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${g(r.name)}</div>
                <div style="font-size:11px;color:var(--text-dim);margin:2px 0 6px">${g(r.publisher)} · ${(r.tests||[]).length} test</div>
                ${aa(r)}
              </div>
              <div style="display:flex;gap:4px;flex-shrink:0">
                <span style="font-size:10px;padding:2px 7px;border-radius:99px;background:${r.active?"var(--green-dim)":"var(--red-dim)"};color:${r.active?"var(--green)":"var(--red)"}">${r.active?"Aktif":"Pasif"}</span>
                ${ia(r)}
                <button class="btn btn-ghost btn-xs" onclick="openResourceModal('${r.id}','book')">✏️</button>
                <button class="btn btn-danger btn-xs" onclick="devDeleteResource('${r.id}')" style="opacity:.5" onmouseover="this.style.opacity=1" onmouseout="this.style.opacity=.5">🗑</button>
              </div>
            </div>
          </div>`).join("")}
      </div>
    </div>`}function hs(){let e=document.getElementById("playlistModal");e||(e=document.createElement("div"),e.id="playlistModal",e.className="modal-bg",document.body.appendChild(e),e.addEventListener("click",t=>{t.target===e&&e.classList.remove("open")})),e.innerHTML=`<div class="modal modal-lg">
    <button class="modal-close" onclick="cm('playlistModal')">×</button>
    <h2>▶ Playlist / Video Ekle</h2>

    <!-- YouTube Import -->
    <div style="background:var(--surface2);border:1px solid var(--border);border-radius:12px;padding:16px;margin-bottom:20px">
      <div style="font-size:13px;font-weight:700;margin-bottom:8px;display:flex;align-items:center;gap:6px">
        <span style="background:#ff0000;color:white;font-size:10px;font-weight:800;padding:2px 6px;border-radius:4px">YT</span>
        YouTube'dan Otomatik Çek
      </div>
      <div style="font-size:12px;color:var(--text-mid);margin-bottom:10px">Oynatma listesi (Playlist) URL'sini yapıştırın, video listesi otomatik olarak yüklensin.</div>
      <div style="display:flex;gap:8px">
        <input id="ytPlaylistUrl" placeholder="https://youtube.com/playlist?list=PL..." style="flex:1;font-size:12px">
        <button class="btn btn-accent btn-sm" onclick="fetchYouTubePlaylist()">Çek →</button>
      </div>
      <div id="ytStatus" style="font-size:12px;color:var(--text-mid);margin-top:8px"></div>
    </div>

    <!-- Manuel Giriş -->
    <div style="font-size:13px;font-weight:700;margin-bottom:12px">✏️ Manuel Giriş</div>
    <div class="field-row">
      <div class="field"><label>Sınav</label>
        <select id="plExam"><option value="TYT">TYT</option><option value="AYT-SAY">AYT Sayısal</option><option value="AYT-EA">AYT EA</option><option value="AYT-SOZ">AYT Sözel</option></select>
      </div>
      <div class="field"><label>Ders</label><input id="plSubject" placeholder="Matematik, Fizik..."></div>
    </div>
    <div class="field-row">
      <div class="field"><label>Hoca / Kanal Adı</label><input id="plPublisher" placeholder="Mert Hoca, Eyüp B..."></div>
      <div class="field"><label>Playlist Adı</label><input id="plName" placeholder="AYT Matematik Kampı 2025"></div>
    </div>
    <div class="field">
      <label>Videolar <span style="color:var(--text-dim);font-weight:400">(Her satıra: Video Başlığı | YouTube Linki | Süre(dk))</span></label>
      <textarea id="plVideos" style="min-height:200px;font-size:12px;font-family:monospace" placeholder="Ders 1 - Polinomlar | https://youtube.com/watch?v=xxx | 45&#10;Ders 2 - Türev | https://youtube.com/watch?v=yyy | 38&#10;Ders 3 - İntegral | https://youtube.com/watch?v=zzz | 52"></textarea>
    </div>
    <button class="btn btn-accent" style="width:100%;justify-content:center;padding:12px;margin-top:4px" onclick="savePlaylist()">Playlist Kaydet</button>
  </div>`,V("playlistModal")}async function ks(){const e=document.getElementById("ytPlaylistUrl").value.trim(),t=document.getElementById("ytStatus");if(!e)return t.innerHTML='<span style="color:var(--red)">⚠️ Playlist URL giriniz</span>';const n=e.match(/[?&]list=([^&]+)/);if(!n)return t.innerHTML='<span style="color:var(--red)">⚠️ Geçersiz URL — "list=..." parametresi bulunamadı</span>';const a=n[1];t.innerHTML="⏳ Yükleniyor...";try{let i=[],o="";do{let s=`/api/youtube?playlistId=${a}`;o&&(s+=`&pageToken=${o}`);const r=await fetch(s);if(!r.ok){const c=await r.json();throw new Error(c.error||"Oynatma listesi yüklenemedi.")}const l=await r.json();l.items&&(i=i.concat(l.items)),o=l.nextPageToken||""}while(o&&i.length<200);document.getElementById("plVideos").value=i.map(s=>`${s.title} | ${s.url} | ${s.duration}`).join(`
`),t.innerHTML=`<span style="color:var(--green)">✓ ${i.length} video yüklendi!</span>`}catch(i){t.innerHTML=`<span style="color:var(--red)">⚠️ Hata: ${i.message}</span>`}}async function ws(){const e=document.getElementById("plName").value.trim(),t=document.getElementById("plSubject").value.trim(),n=document.getElementById("plPublisher").value.trim();if(!e||!t||!n)return b("Tüm alanları doldurun!");const a=document.getElementById("plVideos").value.split(`
`).map(r=>r.trim()).filter(Boolean);if(!a.length)return b("En az 1 video girin!");const i=a.map(r=>{const l=r.split("|").map(c=>c.trim());return{label:l[0]||"",url:l[1]||"",topic:"",soru:parseInt(l[2])||0}}).filter(r=>r.label),o={exam_type:document.getElementById("plExam").value,subject:t,publisher:n,name:e,year:new Date().getFullYear(),tests:i,active:!0,resource_type:"playlist"},{error:s}=await h.from("resources").insert(o);if(s)return b("Hata: "+s.message);b(`✓ "${e}" eklendi — ${i.length} video`),Z("playlistModal"),tt()}function $s(e,t="book"){const n=e?Me.find(s=>s.id===e):null;let a=document.getElementById("resourceModal");a||(a=document.createElement("div"),a.id="resourceModal",a.className="modal-bg",document.body.appendChild(a),a.addEventListener("click",s=>{s.target===a&&a.classList.remove("open")}));const i=((n==null?void 0:n.resource_type)||t)==="playlist";a.innerHTML=`<div class="modal modal-lg">
    <button class="modal-close" onclick="cm('resourceModal')">×</button>
    <h2 id="rmTitle">${n?"Düzenle":"Ekle"} — ${i?"Playlist":"Soru Bankası"}</h2>
    <input type="hidden" id="rmId" value="${e||""}">
    <input type="hidden" id="rmType" value="${i?"playlist":"book"}">
    <div class="field-row">
      <div class="field"><label>Sınav</label>
        <select id="rmExam"><option value="TYT">TYT</option><option value="AYT-SAY">AYT Sayısal</option><option value="AYT-EA">AYT EA</option><option value="AYT-SOZ">AYT Sözel</option></select>
      </div>
      <div class="field"><label>Ders</label><input id="rmSubject" placeholder="Matematik, Fizik..."></div>
    </div>
    <div class="field-row">
      <div class="field"><label>${i?"Hoca / Kanal":"Yayınevi"}</label><input id="rmPublisher"></div>
      <div class="field"><label>Ad</label><input id="rmName"></div>
    </div>
    ${i?`
    <div class="field">
      <label>Videolar <span style="color:var(--text-dim);font-weight:400">(Başlık | Link | Süre)</span></label>
      <textarea id="rmTests" style="min-height:180px;font-size:11px;font-family:monospace"></textarea>
    </div>`:`
    <div class="field">
      <label>Testler <span style="color:var(--text-dim);font-weight:400">(Her satır: Test Adı | Soru Sayısı)</span></label>
      <textarea id="rmTests" style="min-height:180px;font-size:12px;font-family:monospace"></textarea>
    </div>`}
    <div class="field-row">
      <div class="field"><label>Durum</label>
        <select id="rmActive"><option value="true">Aktif</option><option value="false">Pasif</option></select>
      </div>
    </div>
    <button class="btn btn-accent" style="width:100%;justify-content:center;padding:12px;margin-top:4px" onclick="saveResource()">Kaydet</button>
  </div>`,document.getElementById("rmExam").value=(n==null?void 0:n.exam_type)||"TYT",document.getElementById("rmSubject").value=(n==null?void 0:n.subject)||"",document.getElementById("rmPublisher").value=(n==null?void 0:n.publisher)||"",document.getElementById("rmName").value=(n==null?void 0:n.name)||"",document.getElementById("rmActive").value=String((n==null?void 0:n.active)!==!1);const o=(n==null?void 0:n.tests)||[];i?document.getElementById("rmTests").value=o.map(s=>`${s.label||s} | ${s.url||""} | ${s.soru||0}`).join(`
`):document.getElementById("rmTests").value=o.map(s=>`${s.label||s} | ${s.soru||0}`).join(`
`),V("resourceModal")}async function _s(){const e=document.getElementById("rmName").value.trim(),t=document.getElementById("rmSubject").value.trim();if(!e||!t)return b("Ad ve ders zorunlu!");const n=document.getElementById("rmId").value,a=document.getElementById("rmType").value==="playlist",i=document.getElementById("rmTests").value.split(`
`).map(r=>r.trim()).filter(Boolean);let o=[];a?o=i.map(r=>{const l=r.split("|").map(c=>c.trim());return{label:l[0]||"",url:l[1]||"",topic:"",soru:parseInt(l[2])||0}}):o=i.map(r=>{const l=r.split("|").map(c=>c.trim());return{label:l[0]||"",soru:parseInt(l[1])||0}});const s={exam_type:document.getElementById("rmExam").value,subject:t,publisher:document.getElementById("rmPublisher").value.trim(),year:new Date().getFullYear(),name:e,tests:o,active:document.getElementById("rmActive").value==="true",resource_type:a?"playlist":"book"};n?(await h.from("resources").update(s).eq("id",n),b("Güncellendi ✓")):(await h.from("resources").insert(s),b("Kaynak eklendi ✓")),Z("resourceModal"),tt()}async function Es(e){await ie("Bu kaynağı silmek istediğinizden emin misiniz?")&&(await h.from("resources").delete().eq("id",e),b("Silindi"),tt())}async function zt(){const e=document.getElementById("view-dev-finance"),[{data:t},{data:n}]=await Promise.all([h.from("subscriptions").select("*,users(full_name,color)").order("created_at",{ascending:!1}),h.from("payments").select("*,users(full_name)").order("payment_date",{ascending:!1}).limit(20)]),a=(n||[]).filter(o=>o.status==="completed").reduce((o,s)=>o+Number(s.amount),0),i=(t||[]).filter(o=>o.status==="active").length;e.innerHTML=`
    <div class="sh"><h2>💰 Finans Yönetimi</h2>
      <div style="display:flex;gap:8px">
        <button class="btn btn-ghost btn-sm" onclick="openPaymentModal()">+ Ödeme Ekle</button>
        <button class="btn btn-accent btn-sm" onclick="openSubModal()">+ Abonelik</button>
      </div>
    </div>
    <div class="stats-row" style="margin-bottom:20px">
      <div class="stat-card"><div class="stat-label">Toplam Tahsilat</div><div class="stat-val" style="color:var(--green)">${a.toLocaleString("tr-TR")} ₺</div></div>
      <div class="stat-card"><div class="stat-label">Aktif Abonelik</div><div class="stat-val">${i}</div></div>
      <div class="stat-card"><div class="stat-label">Toplam İşlem</div><div class="stat-val">${(n||[]).length}</div></div>
    </div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px">
      <div class="card cp">
        <div style="font-family:'Inter',sans-serif;font-size:14px;font-weight:700;margin-bottom:12px">📋 Abonelikler</div>
        ${(t||[]).map(o=>{var s;return`
          <div style="display:flex;justify-content:space-between;align-items:center;padding:10px 0;border-bottom:1px solid var(--border)">
            <div>
              <div style="font-size:13px;font-weight:700">${g(((s=o.users)==null?void 0:s.full_name)||"?")}</div>
              <div style="font-size:11px;color:var(--text-dim)">${o.plan} · ${o.start_date}</div>
            </div>
            <div style="text-align:right">
              <div style="font-size:13px;font-weight:700;color:var(--green)">${Number(o.amount).toLocaleString("tr-TR")} ₺</div>
              <span style="font-size:10px;padding:2px 7px;border-radius:99px;background:${o.status==="active"?"var(--green-dim)":"var(--red-dim)"};color:${o.status==="active"?"var(--green)":"var(--red)"}">${o.status}</span>
            </div>
          </div>`}).join("")||'<div class="empty"><p>Abonelik yok</p></div>'}
      </div>
      <div class="card cp">
        <div style="font-family:'Inter',sans-serif;font-size:14px;font-weight:700;margin-bottom:12px">💳 Son Ödemeler</div>
        ${(n||[]).slice(0,10).map(o=>{var s;return`
          <div style="display:flex;justify-content:space-between;align-items:center;gap:10px;padding:8px 0;border-bottom:1px solid var(--border)">
            <div style="min-width:0">
              <div style="font-size:12px;font-weight:700">${g(((s=o.users)==null?void 0:s.full_name)||"?")}</div>
              <div style="font-size:11px;color:var(--text-dim)">${o.payment_date} · ${o.method}</div>
            </div>
            <div style="display:flex;align-items:center;gap:8px;flex-shrink:0">
              <div style="font-size:13px;font-weight:700;color:var(--green)">${Number(o.amount).toLocaleString("tr-TR")} ₺</div>
              ${o.verified?'<span style="font-size:10px;font-weight:800;color:var(--green);background:var(--green-dim);border:1px solid rgba(5,150,105,.3);border-radius:99px;padding:3px 9px;white-space:nowrap">✓ Doğrulandı</span>':`<button class="btn btn-green btn-xs" onclick="verifyPayment('${o.id}')" title="Havaleyi kontrol ettim, ödemeyi onayla">Ödemeyi Onayla</button>`}
            </div>
          </div>`}).join("")||'<div class="empty"><p>Ödeme yok</p></div>'}
      </div>
    </div>`}async function Ts(e){const{error:t}=await h.from("payments").update({verified:!0}).eq("id",e);if(t){b("Onaylanamadı: "+t.message);return}b("✓ Ödeme doğrulandı"),zt()}function Ss(){let e=document.getElementById("paymentModal");e||(e=document.createElement("div"),e.id="paymentModal",e.className="modal-bg",e.innerHTML=`<div class="modal"><button class="modal-close" onclick="cm('paymentModal')">×</button>
      <h2>Ödeme Ekle</h2>
      <div class="field"><label>Öğrenci</label><select id="pmStudent">${p.students.map(t=>`<option value="${t.id}">${g(t.name)}</option>`).join("")}</select></div>
      <div class="field-row">
        <div class="field"><label>Tutar (₺)</label><input type="number" id="pmAmount" placeholder="1500"></div>
        <div class="field"><label>Yöntem</label><select id="pmMethod"><option>nakit</option><option>havale</option><option>kart</option><option>iyzico</option></select></div>
      </div>
      <div class="field"><label>Tarih</label><input type="date" id="pmDate" value="${G(new Date)}"></div>
      <div class="field"><label>Açıklama</label><input id="pmDesc" placeholder="Mayıs ayı ücreti"></div>
      <button class="btn btn-accent" style="width:100%;justify-content:center;padding:12px;margin-top:4px" onclick="savePayment()">Kaydet</button>
    </div>`,document.body.appendChild(e),e.addEventListener("click",t=>{t.target===e&&e.classList.remove("open")})),document.getElementById("pmStudent").innerHTML=p.students.map(t=>`<option value="${t.id}">${g(t.name)}</option>`).join(""),V("paymentModal")}async function Is(){const e=parseFloat(document.getElementById("pmAmount").value);if(!e)return b("Tutar girin!");await h.from("payments").insert({student_id:document.getElementById("pmStudent").value,amount:e,method:document.getElementById("pmMethod").value,payment_date:document.getElementById("pmDate").value,description:document.getElementById("pmDesc").value,status:"completed"}),b("Ödeme kaydedildi ✓"),Z("paymentModal"),zt()}function zs(){let e=document.getElementById("subModal");e||(e=document.createElement("div"),e.id="subModal",e.className="modal-bg",e.innerHTML=`<div class="modal"><button class="modal-close" onclick="cm('subModal')">×</button>
      <h2>Abonelik Ekle</h2>
      <div class="field"><label>Öğrenci</label><select id="sbStudent"></select></div>
      <div class="field-row">
        <div class="field"><label>Plan</label><select id="sbPlan"><option value="monthly">Aylık</option><option value="quarterly">3 Aylık</option><option value="yearly">Yıllık</option></select></div>
        <div class="field"><label>Aylık Tutar (₺)</label><input type="number" id="sbAmount" placeholder="1500"></div>
      </div>
      <div class="field-row">
        <div class="field"><label>Başlangıç</label><input type="date" id="sbStart" value="${G(new Date)}"></div>
        <div class="field"><label>Bitiş (isteğe bağlı)</label><input type="date" id="sbEnd"></div>
      </div>
      <div class="field"><label>Durum</label><select id="sbStatus"><option value="active">Aktif</option><option value="trial">Deneme</option><option value="paused">Durduruldu</option><option value="cancelled">İptal</option></select></div>
      <div class="field"><label>Not</label><input id="sbNotes" placeholder="..."></div>
      <button class="btn btn-accent" style="width:100%;justify-content:center;padding:12px;margin-top:4px" onclick="saveSub()">Kaydet</button>
    </div>`,document.body.appendChild(e),e.addEventListener("click",t=>{t.target===e&&e.classList.remove("open")})),document.getElementById("sbStudent").innerHTML=p.students.map(t=>`<option value="${t.id}">${g(t.name)}</option>`).join(""),V("subModal")}async function Bs(){const e=parseFloat(document.getElementById("sbAmount").value);if(!e)return b("Tutar girin!");await h.from("subscriptions").insert({student_id:document.getElementById("sbStudent").value,plan:document.getElementById("sbPlan").value,amount:e,start_date:document.getElementById("sbStart").value,end_date:document.getElementById("sbEnd").value||null,status:document.getElementById("sbStatus").value,notes:document.getElementById("sbNotes").value}),b("Abonelik eklendi ✓"),Z("subModal"),zt()}async function Bt(){const e=document.getElementById("view-dev-announce"),{data:t}=await h.from("announcements").select("*").order("created_at",{ascending:!1}),n={info:"var(--blue)",warning:"var(--accent)",success:"var(--green)",urgent:"var(--red)"};e.innerHTML=`
    <div class="sh"><h2>📣 Duyuru Yönetimi</h2>
      <button class="btn btn-accent" onclick="openAnnounceModal()">+ Duyuru Ekle</button>
    </div>
    <div style="font-size:13px;color:var(--text-mid);margin-bottom:16px">Aktif duyurular tüm kullanıcıların ana ekranında gösterilir.</div>
    ${(t||[]).length===0?'<div class="empty"><p>Henüz duyuru yok</p></div>':""}
    ${(t||[]).map(a=>`
      <div class="card" style="padding:16px 20px;margin-bottom:10px;border-left:3px solid ${n[a.type]||"var(--accent)"}">
        <div style="display:flex;justify-content:space-between;align-items:flex-start;gap:12px">
          <div style="flex:1">
            <div style="font-family:'Inter',sans-serif;font-size:15px;font-weight:700;margin-bottom:4px">${g(a.title)}</div>
            <div style="font-size:13px;color:var(--text-mid);margin-bottom:8px">${g(a.body)}</div>
            <div style="display:flex;gap:8px">
              <span style="font-size:10px;padding:2px 8px;border-radius:99px;background:${n[a.type]+"22"};color:${n[a.type]}">${a.type}</span>
              <span style="font-size:10px;padding:2px 8px;border-radius:99px;background:var(--surface2);color:var(--text-dim)">${a.target}</span>
              <span style="font-size:10px;padding:2px 8px;border-radius:99px;background:${a.active?"var(--green-dim)":"var(--red-dim)"};color:${a.active?"var(--green)":"var(--red)"}">${a.active?"Aktif":"Pasif"}</span>
            </div>
          </div>
          <div style="display:flex;gap:6px">
            <button class="btn btn-ghost btn-xs" onclick="toggleAnnounce('${a.id}',${!a.active})">${a.active?"Pasife Al":"Aktifleştir"}</button>
            <button class="btn btn-danger btn-xs" onclick="devDeleteAnnounce('${a.id}')">🗑</button>
          </div>
        </div>
      </div>`).join("")}`}function Ms(){let e=document.getElementById("announceModal");e||(e=document.createElement("div"),e.id="announceModal",e.className="modal-bg",e.innerHTML=`<div class="modal"><button class="modal-close" onclick="cm('announceModal')">×</button>
      <h2>Yeni Duyuru</h2>
      <div class="field"><label>Başlık</label><input id="anTitle" placeholder="Önemli Güncelleme"></div>
      <div class="field"><label>İçerik</label><textarea id="anBody" placeholder="Duyuru metni..."></textarea></div>
      <div class="field-row">
        <div class="field"><label>Tür</label><select id="anType"><option value="info">Bilgi</option><option value="warning">Uyarı</option><option value="success">Başarı</option><option value="urgent">Acil</option></select></div>
        <div class="field"><label>Hedef</label><select id="anTarget"><option value="all">Herkes</option><option value="students">Öğrenciler</option><option value="coaches">Koçlar</option></select></div>
      </div>
      <button class="btn btn-accent" style="width:100%;justify-content:center;padding:12px;margin-top:4px" onclick="saveAnnounce()">Yayınla</button>
    </div>`,document.body.appendChild(e),e.addEventListener("click",t=>{t.target===e&&e.classList.remove("open")})),V("announceModal")}async function As(){const e=document.getElementById("anTitle").value.trim(),t=document.getElementById("anBody").value.trim();if(!e||!t)return b("Başlık ve içerik zorunlu!");await h.from("announcements").insert({title:e,body:t,type:document.getElementById("anType").value,target:document.getElementById("anTarget").value,active:!0}),b("Duyuru yayınlandı ✓"),Z("announceModal"),Bt()}async function Ds(e,t){await h.from("announcements").update({active:t}).eq("id",e),Bt()}async function Cs(e){await ie("Bu duyuruyu silmek istediğinizden emin misiniz?")&&(await h.from("announcements").delete().eq("id",e),b("Silindi"),Bt())}let lt=null,Ft=null,ve=null,pn=null,at=[],he=[],De="welcome";async function gt(){const e=document.getElementById("view-dev-tickets");if(!e)return;const{data:t,error:n}=await h.from("tickets").select("*,users!tickets_user_id_fkey(full_name,role)").order("updated_at",{ascending:!1});at=t||[],!ve&&at.length>0&&(ve=at[0].id),e.innerHTML=`
    <div class="sh" style="margin-bottom:12px">
      <h2>🎫 Destek & Geri Bildirim Masası</h2>
    </div>

    <div style="display: grid; grid-template-columns: 280px 1fr; gap: 16px; height: 600px; max-height: calc(100vh - 180px); margin-top: 10px">
      <!-- Left Pane: Chats List -->
      <div style="overflow-y: auto; background: var(--surface2); border: 1px solid var(--border); border-radius: 12px; display: flex; flex-direction: column; gap: 8px; padding: 12px">
        <div style="font-size: 11px; font-weight:800; color:var(--text-dim); text-transform:uppercase; letter-spacing:.5px; margin-bottom:4px">Konuşmalar</div>
        ${at.length===0?`
          <div style="text-align:center; padding:40px 10px; color:var(--text-dim); font-size:12px">Kayıtlı destek talebi yok.</div>
        `:at.map(a=>{var v,f,k;const i=a.id===ve,o=((v=a.users)==null?void 0:v.full_name)||"Kullanıcı",s=((f=a.users)==null?void 0:f.role)==="coach"?"KOÇ":((k=a.users)==null?void 0:k.role)==="parent"?"VELİ":"ÖĞRENCİ";let r="Mesaj yok";try{const y=JSON.parse(a.body);Array.isArray(y)&&y.length>0?r=y[y.length-1].text:r=a.body}catch{r=a.body}const l=r.length>28?r.slice(0,26)+"...":r,c=a.status==="open"?'<span style="font-size:9px; background:#ef444422; color:#ef4444; padding:2px 6px; border-radius:99px; font-weight:700">Yeni</span>':a.status==="resolved"?'<span style="font-size:9px; background:#10b98122; color:#10b981; padding:2px 6px; border-radius:99px; font-weight:700">Cevaplandı</span>':'<span style="font-size:9px; background:var(--border2); color:var(--text-dim); padding:2px 6px; border-radius:99px; font-weight:700">Kapatıldı</span>',d=i?"var(--accent-dim)":"var(--surface)",m=i?"1.5px solid var(--accent)":"1px solid var(--border)",u=i?"10px 11px":"10px 12px";return`
            <div onclick="selectDevTicket('${a.id}')" style="background:${d}; border:${m}; border-radius:10px; padding:${u}; cursor:pointer; display:flex; flex-direction:column; gap:4px; transition:all .15s">
              <div style="display:flex; justify-content:space-between; align-items:center">
                <span style="font-weight:700; font-size:12px; color:var(--text); overflow:hidden; text-overflow:ellipsis; white-space:nowrap; max-width:140px">${g(o)}</span>
                <span style="font-size:9px; font-weight:800; color:var(--text-dim)">${s}</span>
              </div>
              <div style="font-size:11px; color:var(--text-mid); overflow:hidden; text-overflow:ellipsis; white-space:nowrap">${g(l)}</div>
              <div style="display:flex; justify-content:space-between; align-items:center; margin-top:4px">
                <span style="font-size:9px; color:var(--text-dim)">${new Date(a.updated_at).toLocaleDateString("tr-TR")}</span>
                ${c}
              </div>
            </div>
          `}).join("")}
      </div>

      <!-- Right Pane: Active Chat Area -->
      <div id="devChatArea" style="background: var(--surface); border: 1px solid var(--border); border-radius: 12px; display: flex; flex-direction: column; overflow: hidden">
        <!-- Rendered dynamically by loadDevChatArea() -->
      </div>
    </div>
  `,js(),pn&&clearInterval(pn),pn=setInterval(Ps,4e3)}function Ls(e){ve=e,gt()}async function Ps(){if(!ve||!document.getElementById("devChatArea"))return;const{data:t,error:n}=await h.from("tickets").select("*,users!tickets_user_id_fkey(full_name,role)").eq("id",ve).single();if(n||!t)return;let a=[];try{a=JSON.parse(t.body),Array.isArray(a)||(a=[{sender:"user",text:t.body,time:t.created_at}])}catch{a=[{sender:"user",text:t.body,time:t.created_at}]}const i=document.getElementById("devChatMessages");if(i){const o=i.scrollTop,s=i.scrollHeight-i.clientHeight-o<40;i.innerHTML=a.map(r=>{const l=r.sender==="emin",c=l?"Kurucu / Destek":r.sender==="ai"?"Yapay Zeka":r.name||"Kullanıcı",d=l?"var(--blue)":r.sender==="ai"?"var(--surface2)":"var(--accent)",m=l?"#fff":r.sender==="ai"?"var(--text)":"var(--on-accent)",u=l?"flex-end":"flex-start",v=l?"14px 14px 4px 14px":"14px 14px 14px 4px",f=new Date(r.time).toLocaleTimeString("tr-TR",{hour:"2-digit",minute:"2-digit"});return`
        <div style="align-self:${u}; max-width:80%; display:flex; flex-direction:column; align-items:${l?"flex-end":"flex-start"}">
          <div style="font-size:10px; color:var(--text-dim); margin-bottom:3px; font-weight:600">${c}</div>
          <div style="padding:10px 14px; border-radius:${v}; background:${d}; color:${m}; font-size:13px; line-height:1.5; word-wrap:break-word; white-space:pre-wrap">${g(r.text)}</div>
          <div style="font-size:9px; color:var(--text-dim); margin-top:4px">${f}</div>
        </div>
      `}).join(""),s&&(i.scrollTop=i.scrollHeight)}}function js(){var s,r,l;const e=document.getElementById("devChatArea");if(!e)return;const t=at.find(c=>c.id===ve);if(!t){e.innerHTML=`
      <div style="flex:1; display:flex; flex-direction:column; align-items:center; justify-content:center; color:var(--text-dim); padding:20px; text-align:center">
        <div style="font-size:48px; margin-bottom:12px">🎫</div>
        <div style="font-weight:700">Aktif Sohbet Seçilmedi</div>
        <div style="font-size:12px; margin-top:4px">Soldaki listeden bir destek sohbeti seçerek yanıtlayabilirsiniz.</div>
      </div>
    `;return}const n=((s=t.users)==null?void 0:s.full_name)||"Kullanıcı",a=((r=t.users)==null?void 0:r.role)==="coach"?"KOÇ":((l=t.users)==null?void 0:l.role)==="parent"?"VELİ":"ÖĞRENCİ";let i=[];try{i=JSON.parse(t.body),Array.isArray(i)||(i=[{sender:"user",text:t.body,time:t.created_at}])}catch{i=[{sender:"user",text:t.body,time:t.created_at}]}e.innerHTML=`
    <!-- Active Chat Header -->
    <div style="padding:14px 20px; border-bottom: 1px solid var(--border); display:flex; justify-content:space-between; align-items:center; background:var(--surface2)">
      <div>
        <div style="font-weight:800; font-size:14px; color:var(--text)">${g(n)} <span style="font-size:10px; font-weight:700; color:var(--text-dim); margin-left:6px">${a}</span></div>
        <div style="font-size:11px; color:var(--text-mid); margin-top:2px">Konu: ${g(t.subject)}</div>
      </div>
      <div style="display:flex; gap:10px; align-items:center">
        <select onchange="updateTicketStatus('${t.id}',this.value)" style="background:var(--surface); border:1px solid var(--border); border-radius:8px; padding:6px 12px; font-size:12px; color:var(--text); cursor:pointer; outline:none">
          <option value="open" ${t.status==="open"?"selected":""}>Açık (İşlem Bekliyor)</option>
          <option value="resolved" ${t.status==="resolved"?"selected":""}>Cevaplandı / Çözüldü</option>
          <option value="closed" ${t.status==="closed"?"selected":""}>Kapatıldı</option>
        </select>
        <button class="btn btn-danger btn-xs" onclick="devDeleteTicket('${t.id}')" style="padding:6px; border-radius:8px">🗑</button>
      </div>
    </div>

    <!-- Message Logs -->
    <div id="devChatMessages" style="flex:1; overflow-y:auto; padding:20px; display:flex; flex-direction:column; gap:12px; background:var(--surface)">
      ${i.map(c=>{const d=c.sender==="emin",m=d?"Kurucu / Destek":c.sender==="ai"?"Yapay Zeka":c.name||"Kullanıcı",u=d?"var(--blue)":c.sender==="ai"?"var(--surface2)":"var(--accent)",v=d?"#fff":c.sender==="ai"?"var(--text)":"var(--on-accent)",f=d?"flex-end":"flex-start",k=d?"14px 14px 4px 14px":"14px 14px 14px 4px",y=new Date(c.time).toLocaleTimeString("tr-TR",{hour:"2-digit",minute:"2-digit"});return`
          <div style="align-self:${f}; max-width:80%; display:flex; flex-direction:column; align-items:${d?"flex-end":"flex-start"}">
            <div style="font-size:10px; color:var(--text-dim); margin-bottom:3px; font-weight:600">${m}</div>
            <div style="padding:10px 14px; border-radius:${k}; background:${u}; color:${v}; font-size:13px; line-height:1.5; word-wrap:break-word; white-space:pre-wrap">${g(c.text)}</div>
            <div style="font-size:9px; color:var(--text-dim); margin-top:4px">${y}</div>
          </div>
        `}).join("")}
    </div>

    <!-- Footer Reply Input -->
    <div style="padding:12px 16px; border-top:1px solid var(--border); display:flex; gap:8px; background:var(--surface2); align-items:flex-end">
      <textarea id="devReplyInput" placeholder="Sohbete yanıt yazın..." rows="1" style="flex:1; background:var(--surface); border:1px solid var(--border); border-radius:12px; padding:10px 14px; font-size:13px; font-family:inherit; color:var(--text); resize:none; max-height:80px; outline:none" onkeydown="if(event.key==='Enter'&&!event.shiftKey){event.preventDefault();sendDevReply()}"></textarea>
      <button class="btn btn-accent" onclick="sendDevReply()" style="padding:8px 16px; font-size:13px; border-radius:10px; align-self:stretch; justify-content:center">Gönder</button>
    </div>
  `;const o=document.getElementById("devChatMessages");o&&(o.scrollTop=o.scrollHeight)}async function Rs(){const e=document.getElementById("devReplyInput"),t=e.value.trim();if(!t||!ve)return;e.value="",C(!0);const{data:n}=await h.from("tickets").select("body").eq("id",ve).single();let a=[];if(n&&n.body)try{a=JSON.parse(n.body)}catch{a=[{sender:"user",text:n.body,time:new Date().toISOString()}]}const i={sender:"emin",text:t,time:new Date().toISOString(),name:"Kurucu / Destek"};a.push(i);const{error:o}=await h.from("tickets").update({body:JSON.stringify(a),reply:t,status:"resolved",updated_at:new Date().toISOString()}).eq("id",ve);if(C(!1),o){b("Hata: "+o.message);return}b("Yanıt gönderildi ✓"),gt()}async function Ns(e,t){await h.from("tickets").update({status:t,updated_at:new Date().toISOString()}).eq("id",e),b("Durum güncellendi ✓"),gt()}async function Hs(e){await ie("Bu talebi silmek istediğinizden emin misiniz?")&&(await h.from("tickets").delete().eq("id",e),b("Silindi"),ve=null,gt())}function Ys(){nn()}async function nn(){let e=document.getElementById("supportChatModal");e||(e=document.createElement("div"),e.id="supportChatModal",e.className="modal-bg",e.style.zIndex="99999999",e.innerHTML=`
      <div class="modal" style="max-width:500px;width:100%;height:600px;display:flex;flex-direction:column;padding:0;overflow:hidden;border-radius:18px;border:1px solid var(--border)">
        <!-- Header -->
        <div style="padding:16px 20px;background:linear-gradient(135deg,rgba(240,165,0,.1),rgba(232,98,42,.05));border-bottom:1px solid var(--border);display:flex;align-items:center;justify-content:space-between">
          <div style="display:flex;align-items:center;gap:10px">
            <span style="font-size:22px">💬</span>
            <div>
              <div style="font-weight:800;font-size:15px;color:var(--text)">Rostrum Destek Merkezi</div>
              <div style="font-size:11px;color:var(--green);font-weight:700" id="supportStatusLabel">● Çevrimiçi Asistan</div>
            </div>
          </div>
          <button class="modal-close" onclick="closeSupportChat()" style="position:static;font-size:22px;background:none;border:none;color:var(--text-mid);cursor:pointer;padding:4px">✕</button>
        </div>

        <!-- Chat messages view -->
        <div id="supportMessages" style="flex:1;overflow-y:auto;padding:20px;display:flex;flex-direction:column;gap:12px;background:var(--surface)">
          <!-- Dynamic Messages -->
        </div>

        <!-- Typing Indicator -->
        <div id="supportTyping" class="ai-typing" style="margin: 0 20px 10px; padding:8px 12px; border-radius:10px; display:none; gap:4px; align-items:center; background:var(--surface2)">
          <span></span><span></span><span></span>
        </div>

        <!-- Footer input bar -->
        <div style="padding:12px 16px;border-top:1px solid var(--border);display:flex;gap:8px;align-items:flex-end;background:var(--surface2)">
          <textarea id="supportInput" placeholder="Mesajınızı yazın..." rows="1" style="flex:1;background:var(--surface);border:1px solid var(--border);border-radius:12px;padding:10px 14px;font-size:13px;font-family:inherit;color:var(--text);resize:none;max-height:80px;outline:none" onkeydown="if(event.key==='Enter'&&!event.shiftKey){event.preventDefault();sendSupportMessage()}"></textarea>
          <button class="btn btn-accent" onclick="sendSupportMessage()" style="padding:8px 16px;font-size:13px;border-radius:10px;align-self:stretch;justify-content:center">Gönder</button>
        </div>
      </div>
    `,document.body.appendChild(e),e.addEventListener("click",t=>{var a;const n=(a=document.getElementById("trialExpiredModal"))==null?void 0:a.classList.contains("open");t.target===e&&!n&&ii()})),V("supportChatModal"),await Ot(),lt&&clearInterval(lt),lt=setInterval(Ot,4e3)}function ii(){Z("supportChatModal"),lt&&(clearInterval(lt),lt=null)}async function Ot(){var o,s;const e=(o=x.dbUser)==null?void 0:o.id;if(!e)return;const t=document.getElementById("supportMessages");if(!t)return;const{data:n,error:a}=await h.from("tickets").select("*").eq("user_id",e).eq("status","open").order("created_at",{ascending:!1}).limit(1);if(a){console.error("Error fetching ticket:",a);return}const i=n&&n[0];if(i){Ft=i.id,De="emin";const r=document.getElementById("supportStatusLabel");r&&(r.textContent="● Kurucu / Destek Ekibi");let l=[];try{l=JSON.parse(i.body),Array.isArray(l)||(l=[{sender:"user",text:i.body,time:i.created_at}])}catch{l=[{sender:"user",text:i.body,time:i.created_at}]}i.reply&&((s=l[l.length-1])==null?void 0:s.text)!==i.reply&&l.push({sender:"emin",text:i.reply,time:i.updated_at}),wt(l)}else if(De==="welcome"){const r=document.getElementById("supportStatusLabel");r&&(r.textContent="● Çevrimiçi Asistan"),t.innerHTML=`
        <div style="text-align:center;padding:40px 20px">
          <div style="font-size:48px;margin-bottom:12px">🎓</div>
          <div style="font-size:16px;font-weight:700;margin-bottom:6px;color:var(--text)">Rostrum Destek Asistanına Hoş Geldiniz!</div>
          <div style="font-size:12px;color:var(--text-mid);line-height:1.6;margin-bottom:24px">
            Uygulama ile ilgili teknik, pedagojik veya fiyatlandırma sorularınızı sorabilirsiniz.
          </div>
          <div style="display:flex;flex-direction:column;gap:10px;align-items:stretch;max-width:280px;margin:0 auto">
            <button class="btn btn-accent" onclick="startAISupportChat()" style="justify-content:center;padding:10px;font-size:13px">
              🤖 Yapay Zeka Asistanı ile Konuş
            </button>
            <button class="btn btn-ghost" onclick="startEminSupportChat()" style="justify-content:center;padding:10px;font-size:13px;border-color:var(--border)">
              ✉️ Kurucuya / Destek Ekibine Yaz
            </button>
          </div>
        </div>
      `}else if(De==="ai"){const r=document.getElementById("supportStatusLabel");r&&(r.textContent="● Yapay Zeka"),wt(he)}}function wt(e){const t=document.getElementById("supportMessages");if(!t)return;const n=t.scrollTop,a=t.scrollHeight-t.clientHeight-n<40;t.innerHTML=e.map(i=>{const o=i.sender==="user",s=o?"Siz":i.sender==="ai"?"Yapay Zeka Asistanı":"Kurucu / Destek Ekibi",r=o?"var(--accent)":"var(--surface2)",l=o?"none":"1px solid var(--border)",c=o?"var(--on-accent)":"var(--text)",d=o?"flex-end":"flex-start",m=o?"14px 14px 4px 14px":"14px 14px 14px 4px",u=new Date(i.time).toLocaleTimeString("tr-TR",{hour:"2-digit",minute:"2-digit"});return`
      <div style="align-self:${d};max-width:80%;display:flex;flex-direction:column;align-items:${o?"flex-end":"flex-start"}">
        <div style="font-size:10px;color:var(--text-dim);margin-bottom:3px;font-weight:600">${s}</div>
        <div style="padding:10px 14px;border-radius:${m};background:${r};border:${l};color:${c};font-size:13px;line-height:1.5;word-wrap:break-word;white-space:pre-wrap">${g(i.text)}</div>
        <div style="font-size:9px;color:var(--text-dim);margin-top:4px">${u}</div>
      </div>
    `}).join(""),a&&(t.scrollTop=t.scrollHeight)}function Ks(){De="ai",he=[{sender:"ai",text:"Merhaba! Ben Rostrum Akademi Yapay Zeka Asistanıyım. 🤖 Size nasıl yardımcı olabilirim?",time:new Date().toISOString()}],wt(he)}function Fs(){De="emin_start";const e=document.getElementById("supportMessages");e&&(e.innerHTML=`
      <div style="text-align:center;padding:40px 20px">
        <div style="font-size:48px;margin-bottom:12px">✉️</div>
        <div style="font-size:16px;font-weight:700;margin-bottom:6px;color:var(--text)">Kurucuya / Destek Ekibine Yaz</div>
        <div style="font-size:12px;color:var(--text-mid);line-height:1.6;margin-bottom:24px">
          Soru, görüş veya abonelik taleplerinizi iletin. Kurucu ekibimiz mesajlarınızı inceleyip en kısa sürede bu ekrandan yanıtlayacaktır.
        </div>
        <div style="display:flex;flex-direction:column;gap:8px;max-width:320px;margin:0 auto">
          <input type="text" id="eminSubject" placeholder="Konu (Örn: Paket Satın Alma)" style="padding:10px;border-radius:10px;border:1px solid var(--border);background:var(--surface);color:var(--text);font-size:13px">
          <textarea id="eminInitialMessage" placeholder="Mesajınız..." style="padding:10px;border-radius:10px;border:1px solid var(--border);background:var(--surface);color:var(--text);min-height:80px;font-size:13px"></textarea>
          <button class="btn btn-accent" onclick="submitEminInitialMessage()" style="justify-content:center;padding:10px;font-size:13px">
            Gönder ve Bağlan
          </button>
        </div>
      </div>
    `)}async function Os(){var c,d;const e=document.getElementById("eminSubject"),t=document.getElementById("eminInitialMessage"),n=e?e.value.trim():"Müşteri Destek Sohbeti",a=t?t.value.trim():"";if(!a)return b("Mesaj boş olamaz!");const i=(c=x.dbUser)==null?void 0:c.id,o=((d=x.dbUser)==null?void 0:d.full_name)||"Kullanıcı",s={sender:"user",text:a,time:new Date().toISOString(),name:o};C(!0);const{data:r,error:l}=await h.from("tickets").insert({user_id:i,subject:n,body:JSON.stringify([s]),category:"emin",status:"open"}).select().single();if(C(!1),l){b("Hata: "+l.message);return}Ft=r.id,De="emin",b("Talebiniz destek ekibine iletildi ✓"),await Ot()}async function qs(){var n;const e=document.getElementById("supportInput"),t=e.value.trim();if(t){if(e.value="",De==="ai"){const a={sender:"user",text:t,time:new Date().toISOString()};he.push(a),wt(he);const i=document.getElementById("supportTyping");i&&(i.style.display="flex");try{const o=(window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1","/api/ai-chat"),s=he.slice(-10).map(c=>({role:c.sender==="user"?"user":"assistant",content:c.text})),r=await fetch(o,{method:"POST",headers:await _t(),body:JSON.stringify({messages:s,context:{},userRole:"parent"})});let l="";r.ok?l=(await r.json()).reply:l=await Le(t,{},x.role||"coach"),he.push({sender:"ai",text:l,time:new Date().toISOString()})}catch{try{const s=await Le(t,{},x.role||"coach");he.push({sender:"ai",text:s,time:new Date().toISOString()})}catch{he.push({sender:"ai",text:"Üzgünüm, şu anda yanıt veremiyorum. Lütfen daha sonra tekrar deneyin veya doğrudan destek ekibimize mesaj gönderin.",time:new Date().toISOString()})}}finally{i&&(i.style.display="none"),wt(he)}}else if(De==="emin"){const a=((n=x.dbUser)==null?void 0:n.full_name)||"Kullanıcı",i={sender:"user",text:t,time:new Date().toISOString(),name:a};C(!0);const{data:o}=await h.from("tickets").select("body").eq("id",Ft).single();let s=[];if(o&&o.body)try{s=JSON.parse(o.body)}catch{s=[{sender:"user",text:o.body,time:new Date().toISOString(),name:a}]}s.push(i);const{error:r}=await h.from("tickets").update({body:JSON.stringify(s),status:"open",updated_at:new Date().toISOString()}).eq("id",Ft);if(C(!1),r){b("Gönderim hatası: "+r.message);return}await Ot()}}}async function oi(){const{data:e}=await h.from("announcements").select("*").eq("active",!0),t=x.role,n=(e||[]).filter(o=>o.target==="all"||o.target==="students"&&t==="student"||o.target==="coaches"&&t==="coach");if(!n.length)return;const a={info:"var(--blue)",warning:"var(--accent)",success:"var(--green)",urgent:"var(--red)"},i=document.createElement("div");i.style.cssText="position:fixed;top:64px;right:16px;z-index:400;display:flex;flex-direction:column;gap:8px;max-width:340px",i.id="announceBanner",n.slice(0,3).forEach(o=>{const s=document.createElement("div");s.style.cssText=`background:var(--surface);border:1px solid var(--border);border-left:3px solid ${a[o.type]||"var(--accent)"};border-radius:10px;padding:12px 14px;box-shadow:var(--shadow);animation:fadeUp .3s ease`,s.innerHTML=`<div style="display:flex;justify-content:space-between;align-items:flex-start;gap:8px">
      <div><div style="font-size:13px;font-weight:700;margin-bottom:3px">${g(o.title)}</div><div style="font-size:12px;color:var(--text-mid)">${g(o.body)}</div></div>
      <button onclick="this.closest('div[style]').remove()" style="background:none;border:none;cursor:pointer;color:var(--text-dim);font-size:16px;flex-shrink:0">×</button>
    </div>`,i.appendChild(s)}),document.body.appendChild(i),setTimeout(()=>i.remove(),8e3)}(()=>{const e=document.createElement("style");e.textContent=".role-dev{background:rgba(192,132,252,.15);color:#c084fc;}",document.head.appendChild(e)})();function ri(e){return`ra_ob_${x.coachId}_${e}`}function xn(e){return localStorage.getItem(ri(e))==="1"}function Us(e){localStorage.setItem(ri(e),"1"),si(),["student","program","report"].every(n=>xn(n))&&Gs()}async function Gs(){const e=document.getElementById("obWidget");e&&(e.innerHTML=`<div style="padding:20px;text-align:center">
      <div style="font-size:36px;margin-bottom:8px">🎉</div>
      <div style="font-weight:800;color:var(--text);margin-bottom:4px">Harika iş!</div>
      <div style="font-size:12px;color:var(--text-mid)">İlk adımları tamamladınız.</div>
    </div>`,setTimeout(()=>e.remove(),3e3)),await h.from("workspaces").update({onboarding_done:!0}).eq("coach_id",x.coachId),p.workspace&&(p.workspace.onboarding_done=!0)}function si(){const e=document.getElementById("obWidget");if(!e)return;const t=[{id:"student",icon:"👤",label:"İlk öğrencinizi ekleyin",action:"window.openStudentModal?.()",btnLabel:"Ekle →"},{id:"program",icon:"📅",label:"Haftalık program oluşturun",action:"switchTab('program')",btnLabel:"Git →"},{id:"report",icon:"📄",label:"İlk raporunuzu gönderin",action:"switchTab('program')",btnLabel:"Git →"}],n=t.filter(i=>xn(i.id)).length,a=Math.round((n+1)/(t.length+1)*100);e.querySelector(".ob-body").innerHTML=t.map(i=>{const o=xn(i.id);return`<div style="display:flex;align-items:center;gap:10px;padding:9px 0;border-bottom:1px solid var(--border)">
      <div style="width:22px;height:22px;border-radius:50%;border:2px solid ${o?"var(--green)":"var(--border2)"};background:${o?"var(--green)":"transparent"};display:flex;align-items:center;justify-content:center;flex-shrink:0">
        ${o?'<svg width="10" height="8" viewBox="0 0 10 8"><path d="M1 4L4 7L9 1" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/></svg>':""}
      </div>
      <div style="flex:1;font-size:12px;color:${o?"var(--text-dim)":"var(--text)"};${o?"text-decoration:line-through":""}">
        <span style="margin-right:5px">${i.icon}</span>${i.label}
      </div>
      ${o?"":`<button onclick="${i.action};window._obMarkDone?.('${i.id}')" style="font-size:11px;font-weight:700;color:var(--accent);background:none;border:none;cursor:pointer;white-space:nowrap;padding:0">${i.btnLabel}</button>`}
    </div>`}).join(""),e.querySelector(".ob-progress-bar-inner").style.width=a+"%",e.querySelector(".ob-progress-text").textContent=`${n+1}/${t.length+1} tamamlandı`}function Ws(){var n;if(document.getElementById("obWidget"))return;const e=((n=p.workspace)==null?void 0:n.brand_color)||"var(--accent)",t=document.createElement("div");t.id="obWidget",t.style.cssText="position:fixed;bottom:90px;right:20px;width:290px;background:var(--surface);border:1px solid var(--border2);border-radius:16px;box-shadow:var(--shadow-lg);z-index:4000;overflow:hidden",t.innerHTML=`
    <div style="background:${e};padding:12px 14px;display:flex;align-items:center;justify-content:space-between">
      <div>
        <div style="font-size:13px;font-weight:800;color:#fff">Başlangıç Görevleri</div>
        <div style="font-size:10px;color:rgba(255,255,255,.7);margin-top:1px" class="ob-progress-text">1/4 tamamlandı</div>
      </div>
      <button onclick="document.getElementById('obWidget').remove()" style="background:none;border:none;color:rgba(255,255,255,.6);font-size:18px;cursor:pointer;padding:0;line-height:1">×</button>
    </div>
    <div style="height:3px;background:rgba(255,255,255,.2)"><div class="ob-progress-bar-inner" style="height:100%;background:#fff;transition:width .4s;width:25%"></div></div>
    <div style="padding:4px 14px 14px" class="ob-body"></div>`,document.body.appendChild(t),si()}window._obMarkDone=Us;function li(){var a,i,o;const e=((i=(a=x.dbUser)==null?void 0:a.full_name)==null?void 0:i.split(" ")[0])||"Koç",t=((o=p.workspace)==null?void 0:o.brand_color)||"var(--accent)";let n=document.getElementById("onboardingModal");n||(n=document.createElement("div"),n.id="onboardingModal",n.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,.85);z-index:9000;display:flex;align-items:center;justify-content:center;padding:20px;backdrop-filter:blur(8px)",document.body.appendChild(n)),n.innerHTML=`<div style="background:var(--surface);border:1px solid var(--border2);border-radius:24px;width:100%;max-width:460px;padding:36px 32px;animation:fadeUp .3s ease;box-shadow:var(--shadow-lg);text-align:center">
    <div style="font-size:48px;margin-bottom:14px">🎓</div>
    <h3 style="font-size:22px;font-weight:800;color:var(--text);margin-bottom:8px;line-height:1.2">Hoş geldiniz, ${g(e)}!</h3>
    <p style="font-size:13px;color:var(--text-mid);line-height:1.65;margin-bottom:24px">
      <strong style="color:${t}">7 günlük ücretsiz denemeniz</strong> başladı.<br>
      İlk öğrencinize rapor gönderdiğinizde platformun farkını göreceksiniz.
    </p>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:24px;text-align:left">
      ${[["📅","Haftalık Program","Görev ata, ilerlemeyi izle"],["📊","D/Y/B Takibi","Net analizi anlık gör"],["🤖","AI Asistan","Öğrenci 7/24 destek alır"],["📄","PDF Rapor","Marka renginle profesyonel"]].map(([s,r,l])=>`
        <div style="background:var(--surface2);border:1px solid var(--border);border-radius:10px;padding:10px">
          <div style="font-size:18px;margin-bottom:4px">${s}</div>
          <div style="font-size:11px;font-weight:700;color:var(--text)">${r}</div>
          <div style="font-size:10px;color:var(--text-dim);margin-top:2px">${l}</div>
        </div>`).join("")}
    </div>
    <button class="btn btn-accent" style="width:100%;padding:14px;font-size:15px;font-weight:800" onclick="document.getElementById('onboardingModal').remove();showOnboardingWidget()">
      Hadi Başlayalım! →
    </button>
    <div style="font-size:11px;color:var(--text-dim);margin-top:12px">Kredi kartı gerekmez · 7 gün sonra uzatabilirsiniz</div>
  </div>`}let We=0,X={};async function Vs(){const e=p.students.find(i=>i.id===x.studentId);if(!e)return;const t=e.name.split(" ")[0],n=e.color||"var(--accent)";X={};try{const{data:i}=await h.from("student_profiles").select("*").eq("id",x.studentId).maybeSingle();i&&(X.parent_email=i.parent_email||"",X.parent_phone=i.parent_phone||"",X.target_rank=i.target_rank||"",X.target_university=i.target_university||"",X.target_department=i.target_department||"",X.struggling_subjects=i.struggling_subjects||"",X.daily_capacity=i.daily_capacity||8)}catch{}X.yks_area=e.yks_area||"SAY",X.daily_capacity===void 0&&(X.daily_capacity=8);let a=document.getElementById("stuWelcomeModal");a||(a=document.createElement("div"),a.id="stuWelcomeModal",a.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,.85);z-index:9000;display:flex;align-items:center;justify-content:center;padding:20px;backdrop-filter:blur(8px)",document.body.appendChild(a)),We=0,di(a,t,n,e)}function Ge(e){const t=document.getElementById("sw_err");t&&(t.textContent=e,t.style.display="block",setTimeout(()=>{t&&(t.style.display="none")},5e3))}function di(e,t,n,a){const i="width:100%;padding:12px 14px;background:var(--surface2);border:1.5px solid var(--border);border-radius:10px;color:var(--text);font-size:14px;outline:none;font-family:inherit;box-sizing:border-box",o="font-size:11px;font-weight:700;color:var(--text-mid);display:block;margin-bottom:5px;text-transform:uppercase;letter-spacing:.05em",s="font-size:11px;color:var(--text-dim);margin-top:5px;line-height:1.5",r=[{v:"SAY",ico:"🔬",name:"Sayısal",sub:"Mat · Fen"},{v:"EA",ico:"⚖️",name:"Eşit Ağırlık",sub:"Mat · Edb"},{v:"SOZ",ico:"📖",name:"Sözel",sub:"Edb · Sosyal"},{v:"DIL",ico:"🌍",name:"Dil",sub:"Yabancı Dil"}],l=[()=>`<div style="text-align:center">
      <div style="font-size:52px;margin-bottom:14px">👋</div>
      <h3 style="font-size:22px;font-weight:800;color:var(--text);margin-bottom:8px">Merhaba, ${g(t)}!</h3>
      <p style="font-size:13px;color:var(--text-mid);line-height:1.7;margin-bottom:24px">
        Koçun seni sisteme ekledi ve programın hazırlanıyor.<br>
        Sana özel bir deneyim oluşturmak için <strong style="color:${n}">2 dakika</strong> ayır.
      </p>
      <button class="btn btn-accent" style="width:100%;padding:14px;font-size:15px;font-weight:800" onclick="window._swNext()">Hadi Başlayalım →</button>
      <button onclick="window._swSkip()" style="margin-top:10px;background:none;border:none;color:var(--text-dim);font-size:12px;cursor:pointer;text-decoration:underline">Şimdi değil, sonra doldururum</button>
    </div>`,()=>`<div>
      <div style="font-size:10px;font-weight:700;color:${n};text-transform:uppercase;letter-spacing:.08em;margin-bottom:12px">Adım 1/3 · Sınav Alanın</div>
      <h3 style="font-size:19px;font-weight:800;color:var(--text);margin-bottom:6px">Hangi alandan hazırlanıyorsun?</h3>
      <p style="${s};margin-bottom:16px">Koçunun sana doğru dersleri önerebilmesi için sınav alanını seçmelisin.</p>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:16px" id="sw_area_grid">
        ${r.map(u=>`
          <button class="sw-area ${X.yks_area===u.v?"sel":""}" data-v="${u.v}"
            onclick="document.querySelectorAll('.sw-area').forEach(b=>b.classList.remove('sel'));this.classList.add('sel')"
            style="display:flex;flex-direction:column;align-items:center;gap:3px;padding:16px 8px;border-radius:12px;border:2px solid var(--border);background:var(--surface2);cursor:pointer;font-family:inherit;transition:all .15s">
            <span style="font-size:22px">${u.ico}</span>
            <span style="font-size:13px;font-weight:800;color:var(--text)">${u.name}</span>
            <span style="font-size:10px;color:var(--text-dim)">${u.sub}</span>
          </button>`).join("")}
      </div>
      <div id="sw_err" style="display:none;color:var(--red);font-size:12px;margin-bottom:12px;padding:10px 14px;background:var(--red-dim);border-radius:8px;font-weight:600"></div>
      <button class="btn btn-accent" style="width:100%;padding:13px;font-weight:800" onclick="window._swNext()">Devam Et →</button>
    </div>`,()=>{var u,v;return`<div>
      <div style="font-size:10px;font-weight:700;color:${n};text-transform:uppercase;letter-spacing:.08em;margin-bottom:12px">Adım 2/3 · Hedefin</div>
      <h3 style="font-size:19px;font-weight:800;color:var(--text);margin-bottom:16px">Nereye ulaşmak istiyorsun?</h3>
      <div style="margin-bottom:12px">
        <label style="${o}">Hedef Sıralama <span style="color:var(--red)">*</span></label>
        <input id="sw_rank" type="text" inputmode="numeric" value="${g(String(X.target_rank||""))}" placeholder="Örn: 15000"
          oninput="this.value=this.value.replace(/[^0-9]/g,'')"
          style="${i}" onfocus="this.style.borderColor='${n}'" onblur="this.style.borderColor='var(--border)'">
      </div>
      <div style="margin-bottom:12px">
        <label style="${o}">Hedef Bölüm ve Üniversite <span style="color:var(--text-dim);text-transform:none;font-weight:600">(isteğe bağlı)</span></label>
        <input id="sw_uni" type="text" value="${g([X.target_university,X.target_department].filter(Boolean).join(" - ")||((v=(u=a.target)==null?void 0:u.split("·")[0])==null?void 0:v.trim())||"")}" placeholder="Örn: Hacettepe Üniversitesi - Tıp"
          style="${i}" onfocus="this.style.borderColor='${n}'" onblur="this.style.borderColor='var(--border)'">
      </div>
      <div style="margin-bottom:16px">
        <label style="${o.replace("margin-bottom:5px","margin-bottom:8px")}">En Çok Zorlandığın Dersler</label>
        <div style="display:flex;flex-wrap:wrap;gap:8px" id="sw_struggle_btns">
          ${["Matematik","Fizik","Kimya","Biyoloji","Türkçe","Tarih","Coğrafya","Felsefe","İngilizce"].map(f=>`
            <button onclick="this.classList.toggle('sel');document.getElementById('sw_struggle').value=[...document.getElementById('sw_struggle_btns').querySelectorAll('.sel')].map(b=>b.dataset.v).join(', ')" data-v="${f}"
              class="sw-chip ${(X.struggling_subjects||"").includes(f)?"sel":""}"
              style="padding:6px 14px;border-radius:99px;border:1.5px solid var(--border);background:var(--surface2);color:var(--text);font-size:12px;font-weight:600;cursor:pointer;transition:all .15s">${f}</button>`).join("")}
        </div>
        <input id="sw_struggle" type="hidden" value="${g(X.struggling_subjects||"")}">
      </div>
      <div id="sw_err" style="display:none;color:var(--red);font-size:12px;margin-bottom:12px;padding:10px 14px;background:var(--red-dim);border-radius:8px;font-weight:600"></div>
      <button class="btn btn-accent" style="width:100%;padding:13px;font-weight:800" onclick="window._swNext()">Devam Et →</button>
    </div>`},()=>`<div>
      <div style="font-size:10px;font-weight:700;color:${n};text-transform:uppercase;letter-spacing:.08em;margin-bottom:12px">Adım 3/3 · Kapasite &amp; Veli</div>
      <h3 style="font-size:19px;font-weight:800;color:var(--text);margin-bottom:16px">Son birkaç bilgi kaldı</h3>
      <div style="margin-bottom:18px">
        <label style="${o}">Günlük Çalışma Kapasiten: <span id="sw_hours_val" style="color:${n};font-size:14px">${X.daily_capacity||8} saat</span></label>
        <input id="sw_hours" type="range" min="1" max="12" step="1" value="${X.daily_capacity||8}"
          oninput="document.getElementById('sw_hours_val').textContent=this.value+' saat'"
          style="width:100%;accent-color:${n};cursor:pointer;margin-top:6px">
        <div style="display:flex;justify-content:space-between;font-size:10px;color:var(--text-dim)"><span>1 saat</span><span>12 saat</span></div>
        <div style="${s}">Koçunun sana günlük limitini aşmayacak programlar atamasını sağlar.</div>
      </div>
      <div style="margin-bottom:12px">
        <label style="${o}">Veli E-Posta Adresi <span style="color:var(--red)">*</span></label>
        <input id="sw_pmail" type="email" value="${g(X.parent_email||"")}" placeholder="veli@eposta.com"
          style="${i}" onfocus="this.style.borderColor='${n}'" onblur="this.style.borderColor='var(--border)'">
        <div style="${s}">Haftalık gelişim raporlarının veline gönderilebilmesi için gereklidir.</div>
      </div>
      <div style="margin-bottom:16px">
        <label style="${o}">Veli Telefon Numarası <span style="color:var(--red)">*</span></label>
        <input id="sw_pphone" type="tel" value="${g(X.parent_phone||"")}" placeholder="0 (5__) ___ __ __"
          oninput="maskPhoneTR(this)"
          style="${i}" onfocus="this.style.borderColor='${n}'" onblur="this.style.borderColor='var(--border)'">
      </div>
      <div id="sw_err" style="display:none;color:var(--red);font-size:12px;margin-bottom:12px;padding:10px 14px;background:var(--red-dim);border-radius:8px;font-weight:600"></div>
      <button class="btn btn-accent" style="width:100%;padding:13px;font-weight:800" onclick="window._swSave()">Tamamla ve Başla →</button>
    </div>`],c=We>0?`<div style="height:3px;background:var(--border);border-radius:99px;margin-bottom:24px;overflow:hidden"><div style="height:100%;width:${Math.round(We/3*100)}%;background:${n};transition:width .4s"></div></div>`:"";e.innerHTML=`<div style="background:var(--surface);border:1px solid var(--border2);border-radius:24px;width:100%;max-width:460px;padding:32px;animation:fadeUp .3s ease;max-height:90vh;overflow-y:auto;box-shadow:var(--shadow-lg)">
    ${c}
    ${l[We]()}
  </div>`;const d=()=>e.querySelectorAll(".sw-area").forEach(u=>{const v=u.classList.contains("sel");u.style.borderColor=v?n:"var(--border)",u.style.background=v?`color-mix(in srgb, ${n} 10%, var(--surface2))`:"var(--surface2)"});e.querySelectorAll(".sw-area").forEach(u=>u.addEventListener("click",d)),d();const m=u=>{const v=u.classList.contains("sel");u.style.background=v?n:"var(--surface2)",u.style.borderColor=v?n:"var(--border)",u.style.color=v?"#fff":"var(--text)"};e.querySelectorAll(".sw-chip").forEach(u=>{m(u),u.addEventListener("click",function(){m(this)})})}window.maskPhoneTR=function(e){let t=e.value.replace(/\D/g,"");t.length>0&&!t.startsWith("0")&&(t="0"+t);let n="";t.length>0&&(n="0"),t.length>1&&(n+=" ("+t.substring(1,4)),t.length>=4&&(n+=")"),t.length>4&&(n+=" "+t.substring(4,7)),t.length>7&&(n+=" "+t.substring(7,9)),t.length>9&&(n+=" "+t.substring(9,11)),e.value=n};window._swNext=function(){var n,a,i,o,s,r,l,c,d,m,u;const e=document.getElementById("stuWelcomeModal");if(!e)return;if(We===1){const v=(a=(n=e.querySelector(".sw-area.sel"))==null?void 0:n.dataset)==null?void 0:a.v;if(!v){Ge("Lütfen hazırlık alanınızı seçin.");return}X.yks_area=v}if(We===2){const v=(o=(i=document.getElementById("sw_rank"))==null?void 0:i.value)==null?void 0:o.trim();if(!v){Ge("Lütfen hedef sıralamanızı girin.");return}const f=parseInt(v);if(isNaN(f)||f<=0||f>=5e6){Ge("Lütfen geçerli bir hedef sıralaması girin.");return}X.target_rank=f;const y=(((r=(s=document.getElementById("sw_uni"))==null?void 0:s.value)==null?void 0:r.trim())||"").split("-");X.target_university=((l=y[0])==null?void 0:l.trim())||"",X.target_department=((c=y[1])==null?void 0:c.trim())||"",X.struggling_subjects=((m=(d=document.getElementById("sw_struggle"))==null?void 0:d.value)==null?void 0:m.trim())||""}We++;const t=p.students.find(v=>v.id===x.studentId);di(e,((u=t==null?void 0:t.name)==null?void 0:u.split(" ")[0])||"",(t==null?void 0:t.color)||"var(--accent)",t)};async function Zs(){var t;const{data:{session:e}}=await h.auth.getSession();return{"Content-Type":"application/json",Authorization:`Bearer ${(e==null?void 0:e.access_token)||""}`,"X-Student-Id":x.studentId||"","X-Student-Hash":((t=x.dbUser)==null?void 0:t.password_hash)||""}}async function an(e,t){const n=await fetch(`/api/student-self?action=${e}`,{method:"POST",headers:await Zs(),body:JSON.stringify(t)}),a=await n.json().catch(()=>({}));if(!n.ok)throw new Error(a.error||"Kaydedilemedi");return a}window._swSkip=function(){var e;(e=document.getElementById("stuWelcomeModal"))==null||e.remove(),an("profile",{}).catch(()=>{})};window._swSave=async function(){var a,i,o,s,r,l;const e=((i=(a=document.getElementById("sw_pmail"))==null?void 0:a.value)==null?void 0:i.trim())||"",t=((s=(o=document.getElementById("sw_pphone"))==null?void 0:o.value)==null?void 0:s.trim())||"",n=parseInt((r=document.getElementById("sw_hours"))==null?void 0:r.value)||8;if(!e){Ge("Lütfen velinizin e-posta adresini girin.");return}if(!e.includes("@")){Ge("Geçerli bir veli e-posta adresi girin.");return}if(!t||t.replace(/\D/g,"").length<10){Ge("Lütfen geçerli bir veli telefon numarası girin.");return}C(!0,"Kaydediliyor...");try{const c=p.students.find(d=>d.id===x.studentId);c&&(c.yksArea=X.yks_area),await an("profile",{yks_area:X.yks_area,target_rank:X.target_rank,target_university:X.target_university||"",target_department:X.target_department||"",struggling_subjects:X.struggling_subjects||"",parent_email:e,parent_phone:t,daily_capacity:n,onboarding_done:!0})}catch(c){return C(!1),Ge("Kaydedilemedi: "+(c.message||c))}C(!1),(l=document.getElementById("stuWelcomeModal"))==null||l.remove(),b("Profilin başarıyla kaydedildi! 🎉"),le("sportal")};let st=null;function Js(){return/iPad|iPhone|iPod/.test(navigator.userAgent)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1}function Dn(){return window.matchMedia("(display-mode: standalone)").matches||window.navigator.standalone===!0||document.referrer&&document.referrer.includes("android-app://")}window.addEventListener("beforeinstallprompt",e=>{e.preventDefault(),st=e,console.log("[PWA] beforeinstallprompt olayı yakalandı ✓"),setTimeout(Cn,1200)});window.addEventListener("appinstalled",()=>{st=null,bt(!0),b("Rostrum Akademi ana ekranınıza başarıyla eklendi! 🎉")});function Cn(){if(Dn())return;const e=localStorage.getItem("ra_pwa_dismissed_ts");e&&Date.now()-parseInt(e,10)<3*24*60*60*1e3||ci()}function ci(){if(Dn())return;let e=document.getElementById("pwaInstallBanner");e||(e=document.createElement("div"),e.id="pwaInstallBanner",e.className="pwa-banner",e.innerHTML=`
      <div class="pwa-banner-icon">
        <img src="/logo.png" alt="Rostrum Akademi Logo">
      </div>
      <div class="pwa-banner-info">
        <div class="pwa-banner-title">Ana Ekrana Ekle 📲</div>
        <div class="pwa-banner-sub">Uygulamayı telefonunuza ekleyip hızlıca erişin.</div>
      </div>
      <div class="pwa-banner-actions">
        <button class="pwa-banner-btn" onclick="triggerPWAInstall()">Yükle / Ekle</button>
        <button class="pwa-banner-close" onclick="dismissPWABanner()" title="Kapat">✕</button>
      </div>
    `,document.body.appendChild(e)),setTimeout(()=>{e.classList.add("show")},100)}function bt(e=!1){const t=document.getElementById("pwaInstallBanner");t&&t.classList.remove("show"),e||localStorage.setItem("ra_pwa_dismissed_ts",Date.now().toString())}async function Xs(){if(Dn()){b("Rostrum Akademi zaten ana ekranınızda yüklü! 📲");return}if(st){try{st.prompt();const{outcome:e}=await st.userChoice;e==="accepted"&&(bt(!0),b("Uygulama ana ekrana ekleniyor... 🎉")),st=null}catch(e){console.error("[PWA Install Error]",e)}return}if(Js()){bt(!0),V("iosPwaModal");return}bt(!0),V("genericPwaModal")}window.triggerPWAInstall=Xs;window.showPWABanner=ci;window.dismissPWABanner=bt;window.checkAndShowPWABanner=Cn;setTimeout(()=>{Cn()},2e3);function pi(e){var a;const t=((a=p.konuMastery)==null?void 0:a[e])||{},n=[];return Object.entries(t).forEach(([i,o])=>{Object.entries(o).forEach(([s,r])=>{if(r.status==="td"||r.status==="not_started")return;const l=r.last_review_date?new Date(r.last_review_date):null,c=l?Math.floor((Date.now()-l.getTime())/864e5):999;(r.stars<=2||c>20)&&n.push({konu:s,subject:i,stars:r.stars,daysSince:c})})}),n.sort((i,o)=>i.stars-o.stars||o.daysSince-i.daysSince),n}function Qs(e){const t=i=>(p.tasks[`${e}_${i}`]||[]).some(o=>o.done);let n=new Date;t(G(n))||(n=ee(n,-1));let a=0;for(;a<60;){const i=G(n);if(!t(i))break;a++,n=ee(n,-1)}return a}function el(e,t){for(let n=0;n>=-8;n--){const a=ae(n,t||0);let i=0,o=0;for(let s=0;s<7;s++){const r=p.tasks[`${e}_${G(ee(a,s))}`]||[];i+=r.length,o+=r.filter(l=>l.done).length}if(i>0&&o===i)return!0}return!1}function tl(e){const t=p.exams.filter(a=>a.studentId===e).sort((a,i)=>a.date.localeCompare(i.date)),n={};return t.forEach(a=>{(n[a.type]=n[a.type]||[]).push(a)}),Object.values(n).some(a=>{for(let i=1;i<a.length;i++){const o=EXAM_DEFS[a[i].type]||[],s=o.reduce((l,c)=>{var d;return l+Number(((d=a[i].nets)==null?void 0:d[c])||0)},0),r=o.reduce((l,c)=>{var d;return l+Number(((d=a[i-1].nets)==null?void 0:d[c])||0)},0);if(s-r>=10)return!0}return!1})}const nl=[{id:"first_step",icon:"🎯",name:"İlk Adım",desc:"İlk görevini tamamladın"},{id:"streak7",icon:"🔥",name:"Ateşli Seri",desc:"7 gün üst üste görev tamamladın"},{id:"century",icon:"💯",name:"Yüzler Kulübü",desc:"Toplamda 100 görev tamamladın"},{id:"perfect_week",icon:"🏆",name:"Mükemmel Hafta",desc:"Bir haftanın tüm görevlerini tamamladın"},{id:"net_jump",icon:"🚀",name:"Net Sıçraması",desc:"Bir denemede öncekine göre 10+ net attırdın"},{id:"early_bird",icon:"🌅",name:"Sabah Yıldızı",desc:"Sabah 08:00'den önce görev tamamladın"},{id:"night_owl",icon:"🦉",name:"Gece Kuşu",desc:"Gece geç saatte görev tamamladın"}],ui=(e,t)=>`ra_badge_${e}_${t}`;function Re(e,t){const n=ui(e,t);localStorage.getItem(n)||localStorage.setItem(n,new Date().toISOString())}function al(e,t){t.totalDone>=1&&Re(e,"first_step"),t.totalDone>=100&&Re(e,"century"),t.streak>=7&&Re(e,"streak7"),t.hadPerfectWeek&&Re(e,"perfect_week"),t.hadNetJump&&Re(e,"net_jump");for(let n=0;n<=60;n++){const a=G(ee(new Date,-n));localStorage.getItem(`ra_egg_${a}_morning`)&&Re(e,"early_bird"),localStorage.getItem(`ra_egg_${a}_night`)&&Re(e,"night_owl")}}function il(e){return nl.map(t=>({...t,earnedAt:localStorage.getItem(ui(e,t.id))}))}function ol(e){const t=p.exams.filter(c=>c.studentId===e).sort((c,d)=>c.date.localeCompare(d.date));if(t.length<2)return null;const n=t[t.length-1],a=new Date(n.date);let i=null,o=1/0;if(t.filter(c=>c.type===n.type&&c!==n).forEach(c=>{const d=Math.round((a-new Date(c.date))/864e5);d>=60&&d<o&&(i=c,o=d)}),!i)return null;const s=EXAM_DEFS[n.type]||[],r=s.reduce((c,d)=>{var m;return c+Number(((m=n.nets)==null?void 0:m[d])||0)},0),l=s.reduce((c,d)=>{var m;return c+Number(((m=i.nets)==null?void 0:m[d])||0)},0);return{latest:n,old:i,newTotal:r,oldTotal:l,diff:r-l,gapDays:o}}function rl(e,t){const n=new Date,a=[];for(let s=t*7-1;s>=0;s--){const r=ee(n,-s),l=G(r),c=p.tasks[`${e}_${l}`]||[];a.push({date:l,doneCount:c.filter(d=>d.done).length})}const i=a.length?new Date(a[0].date+"T12:00").getDay():1,o=i===0?6:i-1;return Array(o).fill(null).concat(a)}async function mi(){var F;const e=p.students.find(z=>z.id===x.studentId);if(!e)return;const t=document.getElementById("view-sprofil");if(!t)return;const{data:n,error:a}=await h.from("student_profiles").select("*").eq("id",x.studentId).maybeSingle();a&&console.error("Öğrenci profili yüklenirken hata:",a);const i=(n==null?void 0:n.bio)||"",o=(n==null?void 0:n.school)||"",s=(n==null?void 0:n.grade)||"",r=(n==null?void 0:n.target_university)||"",l=(n==null?void 0:n.target_department)||"",c=(n==null?void 0:n.struggling_subjects)||"",d=(n==null?void 0:n.daily_capacity)||"",m=p.exams.filter(z=>z.studentId===e.id).sort((z,N)=>z.date.localeCompare(N.date)),u=m[m.length-1],v=u?(EXAM_DEFS[u.type]||[]).reduce((N,J)=>{var O;return N+Number(((O=u.nets)==null?void 0:O[J])||0)},0).toFixed(1):"—",f=ae(0,e.weekStart??0);let k=0,y=0;for(let z=0;z<7;z++){const N=p.tasks[`${e.id}_${G(ee(f,z))}`]||[];k+=N.length,y+=N.filter(J=>J.done).length}const $=k>0?Math.round(y/k*100):0;let w=0;if(Object.keys(p.tasks).filter(z=>z.startsWith(e.id+"_")).forEach(z=>{w+=p.tasks[z].filter(N=>N.done).length}),m.length===0&&w===0){t.innerHTML=`<div style="text-align:center;padding:60px 24px;max-width:360px;margin:0 auto">
      <div style="font-size:52px;margin-bottom:16px">🌱</div>
      <div style="font-size:18px;font-weight:800;color:var(--text);margin-bottom:8px">Yolculuğun Yeni Başlıyor</div>
      <div style="font-size:14px;color:var(--text-mid);line-height:1.65;margin-bottom:28px">Koçun haftalık programını oluşturdukça görev istatistiklerin, deneme netlerini girdikçe gelişim grafiklerin burada belirmeye başlayacak.</div>
      <div style="display:flex;flex-direction:column;gap:10px;text-align:left">
        <div style="background:var(--surface);border:1px solid var(--border);border-radius:12px;padding:14px 16px;font-size:13px;display:flex;align-items:center;gap:12px"><span style="font-size:20px">📋</span><span>Koçunun program oluşturmasını bekle</span></div>
        <div style="background:var(--surface);border:1px solid var(--border);border-radius:12px;padding:14px 16px;font-size:13px;display:flex;align-items:center;gap:12px"><span style="font-size:20px">✅</span><span>Görevleri tamamladıkça istatistiklerin görünecek</span></div>
        <div style="background:var(--surface);border:1px solid var(--border);border-radius:12px;padding:14px 16px;font-size:13px;display:flex;align-items:center;gap:12px"><span style="font-size:20px">📈</span><span>Deneme netlerini girdikçe grafiklerin oluşacak</span></div>
      </div>
    </div>`;return}let I="";if(m.length>0){const z=u.type,O=(EXAM_DEFS[z]||[]).map(q=>{var Y;const W=m.filter(Q=>Q.type===z).map(Q=>{var U;return Number(((U=Q.nets)==null?void 0:U[q])||0)}),R=W.length?W.reduce((Q,U)=>Q+U,0)/W.length:0,H=Number(((Y=u.nets)==null?void 0:Y[q])||0);return{f:q,avg:R.toFixed(1),last:H,color:$n(H)}}).filter(q=>q.color==="low");O.length>0&&(I=`
      <div class="card cp" style="margin-bottom:14px;border-color:var(--blue)">
        <div class="portal-sec-title">💡 Boşluktan Eyleme</div>
        <div style="font-size:11px;color:var(--text-dim);margin:2px 0 10px">Netin düşük olan derslerde koçuna danış</div>
        <div style="display:flex;flex-direction:column;gap:8px">
          ${O.map(q=>`
            <div style="background:var(--surface2);border:1px solid var(--border);border-radius:10px;padding:10px 12px;display:flex;align-items:center;gap:10px;flex-wrap:wrap">
              <div style="flex:1;min-width:100px">
                <div style="font-size:13px;font-weight:700;color:var(--text)">${g(q.f)}</div>
                <div style="font-size:11px;color:var(--red)">Son net: ${q.last}</div>
              </div>
              <button onclick="askCoachAboutGap('${g(q.f).replace(/'/g,"\\'")}')" style="padding:7px 12px;background:var(--blue-dim);border:1px solid var(--blue);color:var(--blue);border-radius:8px;font-size:11px;font-weight:700;cursor:pointer">💬 Koçuma Sor</button>
              <button onclick="openGapTaskModal('${g(q.f).replace(/'/g,"\\'")}','${z}')" style="padding:7px 12px;background:var(--surface3);border:1px solid var(--border2);color:var(--text);border-radius:8px;font-size:11px;font-weight:700;cursor:pointer">📅 Programa Ekle</button>
            </div>`).join("")}
        </div>
      </div>`)}const T=p.appointments.filter(z=>z.studentId===e.id&&z.date>=ce()).sort((z,N)=>z.date.localeCompare(N.date)).slice(0,3),B=r||l,S=(n==null?void 0:n.coach_note)||"",M=(F=x.dbUser)!=null&&F.created_at?Math.max(1,Math.floor((Date.now()-new Date(x.dbUser.created_at).getTime())/864e5)):null,E=Tt(),A=Qs(e.id);al(e.id,{totalDone:w,streak:A,hadPerfectWeek:el(e.id,e.weekStart),hadNetJump:tl(e.id)});const P=il(e.id),D=ol(e.id),_=rl(e.id,9),L=pi(e.id),j=m.slice(-10),K=Math.max(...j.map(z=>(EXAM_DEFS[z.type]||[]).reduce((J,O)=>{var q;return J+Number(((q=z.nets)==null?void 0:q[O])||0)},0)),1);t.innerHTML=`
    <!-- HERO: yolculuk çizgisi -->
    <div id="spHero" class="${Qe("badges")&&Xr()?"badge-halo":""}" style="background:linear-gradient(135deg,${e.color}22 0%,${e.color}08 100%);border:1px solid ${e.color}33;border-radius:16px;padding:20px 24px;margin-bottom:14px">
      <div style="display:flex;align-items:center;gap:18px;flex-wrap:wrap">
        <div style="width:64px;height:64px;border-radius:16px;background:${e.color};display:flex;align-items:center;justify-content:center;font-size:26px;font-weight:800;color:#fff;flex-shrink:0">${e.name[0]}</div>
        <div style="flex:1;min-width:200px">
          <div style="font-size:20px;font-weight:800;color:var(--text)">${g(e.name)}</div>
          <div style="font-size:13px;color:var(--text-mid);margin-top:2px">${g(e.target)}${s?" · "+g(s):""}${o?" · "+g(o):""}</div>
          ${B?`<div style="display:inline-flex;align-items:center;gap:6px;margin-top:8px;background:${e.color};color:#fff;padding:4px 12px;border-radius:99px;font-size:11px;font-weight:700">🎯 ${[r,l].filter(Boolean).join(" · ")}</div>`:""}
        </div>
      </div>
      <div style="display:flex;gap:24px;margin-top:16px;padding-top:14px;border-top:1px solid ${e.color}22;flex-wrap:wrap">
        ${M?`<div><div style="font-size:19px;font-weight:800;color:var(--text)">${M}</div><div style="font-size:10px;color:var(--text-dim);text-transform:uppercase;letter-spacing:.04em">gündür yoldasın</div></div>`:""}
        <div><div style="font-size:19px;font-weight:800;color:var(--text)">${E.days}</div><div style="font-size:10px;color:var(--text-dim);text-transform:uppercase;letter-spacing:.04em">gün kaldı · YKS ${E.year}</div></div>
        ${A>0?`<div><div style="font-size:19px;font-weight:800;color:#f0a500">🔥 ${A}</div><div style="font-size:10px;color:var(--text-dim);text-transform:uppercase;letter-spacing:.04em">gün üst üste</div></div>`:""}
      </div>
    </div>

    <!-- ROZETLER -->
    <div class="card cp" style="margin-bottom:14px">
      <div class="portal-sec-title" style="margin-bottom:10px">🎖️ Rozetlerin <span style="font-size:11px;font-weight:400;color:var(--text-dim)">${P.filter(z=>z.earnedAt).length}/${P.length}</span></div>
      <div style="display:flex;gap:10px;overflow-x:auto;padding-bottom:4px">
        ${P.map(z=>`
          <div title="${g(z.name)} — ${g(z.desc)}${z.earnedAt?"":" (henüz kazanılmadı)"}" style="flex-shrink:0;width:76px;text-align:center;opacity:${z.earnedAt?"1":".35"};filter:${z.earnedAt?"none":"grayscale(1)"}">
            <div style="width:52px;height:52px;margin:0 auto;border-radius:14px;background:${z.earnedAt?e.color+"18":"var(--surface2)"};border:1.5px solid ${z.earnedAt?e.color+"44":"var(--border)"};display:flex;align-items:center;justify-content:center;font-size:24px">${z.icon}</div>
            <div style="font-size:9.5px;font-weight:700;color:var(--text-mid);margin-top:5px;line-height:1.3">${g(z.name)}</div>
          </div>`).join("")}
      </div>
    </div>

    ${S?`
    <!-- KOÇTAN NOT -->
    <div class="card cp" style="margin-bottom:14px;background:linear-gradient(135deg,${e.color}0f 0%,transparent 100%);border-color:${e.color}33">
      <div class="portal-sec-title" style="margin-bottom:8px">💌 Koçundan Sana Not</div>
      <div style="font-size:13.5px;color:var(--text);line-height:1.65;font-style:italic">"${g(S)}"</div>
    </div>`:""}

    <!-- STAT CARDS -->
    <div class="stats-row" style="margin-bottom:14px">
      <div class="stat-card">
        <div class="stat-label">Genel İlerleme</div>
        <div class="stat-val" style="color:${e.color}">%${e.progress}</div>
        <div class="prog-bar-wrap" style="margin-top:8px"><div class="prog-bar" style="width:${e.progress}%;background:${e.color}"></div></div>
      </div>
      <div class="stat-card">
        <div class="stat-label">Bu Hafta Görev</div>
        <div class="stat-val">${y}<span style="font-size:14px;color:var(--text-dim)">/${k}</span></div>
        <div style="font-size:11px;color:var(--text-mid);margin-top:4px">%${$} tamamlandı</div>
      </div>
      <div class="stat-card">
        <div class="stat-label">Son Deneme Neti</div>
        <div class="stat-val" style="color:var(--accent)">${v}</div>
        <div style="font-size:11px;color:var(--text-mid);margin-top:4px">${u?g(u.name):"Deneme yok"}</div>
      </div>
      <div class="stat-card">
        <div class="stat-label">Toplam Tamamlanan</div>
        <div class="stat-val">${w}</div>
        <div style="font-size:11px;color:var(--text-mid);margin-top:4px">görev</div>
      </div>
    </div>

    ${m.length>0?`
    <!-- DERS BAZINDA PERFORMANS (yukarıda — en çok merak edilen bilgi) -->
    <div class="card cp" style="margin-bottom:14px">
      <div class="portal-sec-title" style="margin-bottom:14px">📊 Ders Bazında Performans <span style="font-size:11px;font-weight:400;color:var(--text-dim)">${(u==null?void 0:u.type)||""}</span></div>
      <div style="display:flex;flex-direction:column;gap:10px">
        ${(()=>{const z=EXAM_DEFS[u.type]||[],N=m.filter(O=>O.type===u.type),J=Math.max(...z.map(O=>Math.max(...N.map(q=>{var W;return Number(((W=q.nets)==null?void 0:W[O])||0)}))),1);return z.map(O=>{var Q;const q=Number(((Q=u.nets)==null?void 0:Q[O])||0),W=N.map(U=>{var oe;return Number(((oe=U.nets)==null?void 0:oe[O])||0)}),R=W.length?W.reduce((U,oe)=>U+oe,0)/W.length:0,H=Math.round(q/J*100),Y=q>=R*1.1?"var(--green)":q<R*.9?"var(--red)":e.color;return`<div style="display:flex;align-items:center;gap:10px">
              <div style="width:90px;font-size:11px;font-weight:700;color:var(--text-mid);flex-shrink:0;text-transform:uppercase">${O}</div>
              <div style="flex:1;height:8px;background:var(--surface2);border-radius:99px;overflow:hidden">
                <div style="height:100%;width:${H}%;background:${Y};border-radius:99px;transition:width .5s"></div>
              </div>
              <div style="width:36px;text-align:right;font-size:13px;font-weight:800;color:${Y};flex-shrink:0">${q.toFixed(1)}</div>
              <div style="width:28px;font-size:10px;color:var(--text-dim);flex-shrink:0">ort: ${R.toFixed(1)}</div>
            </div>`}).join("")})()}
      </div>
    </div>`:""}

    ${j.length>0?`
    <!-- NET GELİŞİM GRAFİĞİ (tek renk + trend oku — düşen bir denemeyi "kötü" gibi göstermek yerine sadece farkı belirtir) -->
    <div class="card cp" style="margin-bottom:14px">
      <div class="portal-sec-title" style="margin-bottom:16px">📈 Net Gelişim Grafiği</div>
      <div style="overflow-x:auto;padding-bottom:4px">
        <div style="position:relative;height:170px;display:flex;align-items:flex-end;gap:14px;padding-bottom:32px;min-width:${Math.max(j.length*56,280)}px">
          ${[.25,.5,.75,1].map(z=>`
            <div style="position:absolute;left:0;right:0;bottom:${32+Math.round(z*130)}px;border-top:1px dashed var(--border)">
              <span style="position:absolute;right:0;font-size:9px;color:var(--text-dim);background:var(--surface);padding:0 2px;line-height:1;transform:translateY(-50%)">${Math.round(K*z)}</span>
            </div>`).join("")}
          ${j.map((z,N)=>{const O=(EXAM_DEFS[z.type]||[]).reduce((Y,Q)=>{var U;return Y+Number(((U=z.nets)==null?void 0:U[Q])||0)},0),q=Math.max(Math.round(O/K*130),4),W=j[N-1],R=W?(EXAM_DEFS[W.type]||[]).reduce((Y,Q)=>{var U;return Y+Number(((U=W.nets)==null?void 0:U[Q])||0)},0):null;return`<div style="flex-shrink:0;width:42px;display:flex;flex-direction:column;align-items:center;position:relative">
              <div style="font-size:9px;font-weight:700;margin-bottom:2px;white-space:nowrap">${R===null?"":O-R>0?`<span style="color:var(--green)">▲${(O-R).toFixed(1)}</span>`:O-R<0?`<span style="color:var(--red)">▼${Math.abs(O-R).toFixed(1)}</span>`:'<span style="color:var(--text-dim)">–</span>'}</div>
              <div style="font-size:10px;font-weight:800;color:var(--text-mid);margin-bottom:3px">${O.toFixed(0)}</div>
              <div style="width:100%;background:${e.color};border-radius:5px 5px 0 0;height:${q}px;min-height:4px;transition:height .4s"></div>
              <div style="position:absolute;bottom:-32px;width:64px;left:50%;transform:translateX(-50%);text-align:center;font-size:9px;color:var(--text-dim);line-height:1.3;word-break:break-word">${g(z.name.replace(/deneme/gi,"").trim())}</div>
            </div>`}).join("")}
        </div>
      </div>
    </div>`:""}

    ${D?`
    <!-- KENDİNE KIYASLA -->
    <div class="card cp" style="margin-bottom:14px">
      <div class="portal-sec-title" style="margin-bottom:10px">🔍 Kendine Kıyasla</div>
      <div style="display:flex;align-items:center;gap:16px;flex-wrap:wrap">
        <div style="text-align:center">
          <div style="font-size:10px;color:var(--text-dim);margin-bottom:3px">${D.gapDays} gün önce</div>
          <div style="font-size:22px;font-weight:800;color:var(--text-dim)">${D.oldTotal.toFixed(1)}</div>
        </div>
        <div style="font-size:20px;color:var(--text-dim)">→</div>
        <div style="text-align:center">
          <div style="font-size:10px;color:var(--text-dim);margin-bottom:3px">Şimdi</div>
          <div style="font-size:22px;font-weight:800;color:${e.color}">${D.newTotal.toFixed(1)}</div>
        </div>
        <div style="flex:1;min-width:140px;font-size:13px;color:var(--text-mid);line-height:1.5">
          ${D.diff>0?`${D.gapDays} gün önceki halinden <b style="color:var(--green)">${D.diff.toFixed(1)} net</b> daha iyisin! 👏`:D.diff<0?`${D.gapDays} gün önceye göre ${Math.abs(D.diff).toFixed(1)} net geriden geliyorsun — toparlanma vakti.`:`${D.gapDays} gün önceyle aynı seviyedesin.`}
        </div>
      </div>
    </div>`:""}

    <!-- ÇALIŞMA RİTMİ -->
    <div class="card cp" style="margin-bottom:14px">
      <div class="portal-sec-title" style="margin-bottom:10px">🗓️ Çalışma Ritmin <span style="font-size:11px;font-weight:400;color:var(--text-dim)">son 9 hafta</span></div>
      <div style="overflow-x:auto;padding-bottom:4px">
        <div style="display:grid;grid-template-rows:repeat(7,12px);grid-auto-flow:column;gap:3px;width:max-content">
          ${_.map(z=>{if(!z)return'<div style="width:12px;height:12px"></div>';const N=z.doneCount===0?0:z.doneCount===1?1:z.doneCount<=3?2:3,J=["var(--surface3)",e.color+"40",e.color+"90",e.color][N];return`<div title="${new Date(z.date+"T12:00").toLocaleDateString("tr-TR",{day:"numeric",month:"short"})}: ${z.doneCount} görev tamamlandı" style="width:12px;height:12px;border-radius:3px;background:${J}"></div>`}).join("")}
        </div>
      </div>
      <div style="display:flex;align-items:center;gap:5px;margin-top:8px;font-size:10px;color:var(--text-dim)">
        Az <div style="width:10px;height:10px;border-radius:2px;background:var(--surface3)"></div><div style="width:10px;height:10px;border-radius:2px;background:${e.color}40"></div><div style="width:10px;height:10px;border-radius:2px;background:${e.color}90"></div><div style="width:10px;height:10px;border-radius:2px;background:${e.color}"></div> Çok
      </div>
    </div>

    ${L.length>0?`
    <!-- DİKKAT GEREKEN KONULAR -->
    <div class="card cp" style="margin-bottom:14px;border-color:rgba(239,68,68,.25)">
      <div class="portal-sec-title">🔄 Dikkat Gereken Konular <span style="font-size:11px;background:rgba(239,68,68,.12);color:#ef4444;padding:2px 8px;border-radius:99px;font-weight:700">${L.length}</span></div>
      <div style="margin-top:10px">
        ${L.slice(0,5).map(z=>{var N;return`
          <div style="display:flex;align-items:center;gap:10px;padding:7px 0;border-bottom:1px solid var(--border)">
            <span style="font-size:13px;color:${((N=Ke[z.stars])==null?void 0:N.color)||"var(--text-dim)"};font-weight:800;white-space:nowrap">${"⭐".repeat(z.stars)||"○"}</span>
            <div style="flex:1;min-width:0">
              <div style="font-size:12px;font-weight:700;color:var(--text);overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${g(z.konu)}</div>
              <div style="font-size:10px;color:var(--text-dim)">${g(z.subject)} · Son: ${z.daysSince<999?z.daysSince+"g önce":"Hiç"}</div>
            </div>
          </div>`}).join("")}
        ${L.length>5?`<div style="font-size:11px;color:var(--text-dim);margin-top:8px;text-align:center">+${L.length-5} daha…</div>`:""}
      </div>
    </div>`:""}

    ${I}

    <!-- YAKLAŞAN RANDEVULAR -->
    ${T.length?`
    <div class="card cp" style="margin-bottom:14px">
      <div class="portal-sec-title" style="margin-bottom:10px">📅 Yaklaşan Randevularım</div>
      ${T.map(z=>`
        <div style="display:flex;align-items:center;gap:12px;background:var(--surface2);border-left:3px solid ${e.color};border-radius:9px;padding:12px;margin-bottom:6px">
          <div style="text-align:center;flex-shrink:0">
            <div style="font-size:18px;font-weight:800;color:var(--text)">${new Date(z.date+"T12:00").getDate()}</div>
            <div style="font-size:9px;font-weight:700;color:var(--text-dim);text-transform:uppercase">${new Date(z.date+"T12:00").toLocaleDateString("tr-TR",{month:"short"})}</div>
          </div>
          <div style="flex:1">
            <div style="font-size:13px;font-weight:700">${g(z.type)}</div>
            <div style="font-size:11px;color:var(--text-mid);margin-top:2px">${z.time} · ${z.duration} dk</div>
          </div>
          ${z.meet_link?`<a href="${g(z.meet_link)}" target="_blank" style="font-size:11px;background:var(--blue-dim);color:var(--blue);padding:4px 10px;border-radius:8px;text-decoration:none;font-weight:700">Katıl</a>`:""}
        </div>`).join("")}
    </div>`:""}

    <!-- PROFİL BİLGİLERİM (görüntüleme modu) -->
    <div class="card cp" style="margin-bottom:14px" id="spViewCard">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:14px">
        <div class="portal-sec-title" style="margin:0">📝 Profil Bilgilerim</div>
        <button class="btn btn-ghost btn-sm" onclick="document.getElementById('spViewCard').style.display='none';document.getElementById('spEditCard').style.display='block'">Düzenle</button>
      </div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
        ${[["Okul",o],["Sınıf",s],["Hedef Üniversite",r],["Hedef Bölüm",l],["Zorlandığım Dersler",c],["Günlük Kapasite",d?d+" saat":""]].map(([z,N])=>`
          <div>
            <div style="font-size:10px;font-weight:700;color:var(--text-dim);text-transform:uppercase;letter-spacing:.04em;margin-bottom:3px">${z}</div>
            <div style="font-size:13px;color:${N?"var(--text)":"var(--text-dim)"};font-weight:${N?"500":"400"}">${N||"—"}</div>
          </div>`).join("")}
      </div>
      ${i?`<div style="margin-top:12px;padding-top:12px;border-top:1px solid var(--border);font-size:13px;color:var(--text-mid);line-height:1.6">${g(i)}</div>`:""}
    </div>

    <!-- PROFİL DÜZENLEME FORMU (gizli) -->
    <div class="card cp" style="margin-bottom:14px;display:none" id="spEditCard">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:14px">
        <div class="portal-sec-title" style="margin:0">📝 Profil Düzenle</div>
        <button class="btn btn-ghost btn-sm" onclick="document.getElementById('spEditCard').style.display='none';document.getElementById('spViewCard').style.display='block'">İptal</button>
      </div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:12px">
        ${[["spSchool","Okul","text",o,"Okulunuz"],["spGrade","Sınıf / Seviye","text",s,"12. Sınıf, Mezun"],["spTargetUni","Hedef Üniversite","text",r,"Boğaziçi Üniversitesi"],["spTargetDept","Hedef Bölüm","text",l,"Bilgisayar Mühendisliği"],["spStruggling","Zorlandığım Dersler","text",c,"Fizik, Geometri"],["spCapacity","Günlük Kapasite (Saat)","number",d,"6"]].map(([z,N,J,O,q])=>`
          <div>
            <label style="display:block;font-size:11px;font-weight:700;color:var(--text-mid);margin-bottom:4px">${N}</label>
            <input type="${J}" id="${z}" value="${g(String(O))}" placeholder="${q}" style="width:100%;background:var(--surface2);border:1.5px solid var(--border);border-radius:9px;padding:10px 13px;font-size:14px;color:var(--text);outline:none;box-sizing:border-box">
          </div>`).join("")}
      </div>
      <div style="margin-bottom:12px">
        <label style="display:block;font-size:11px;font-weight:700;color:var(--text-mid);margin-bottom:4px">Biyografi</label>
        <textarea id="spBio" style="width:100%;min-height:72px;background:var(--surface2);border:1.5px solid var(--border);border-radius:9px;padding:10px 13px;font-size:14px;color:var(--text);outline:none;resize:vertical;font-family:inherit;box-sizing:border-box">${g(i)}</textarea>
      </div>
      <button class="btn btn-accent" style="width:100%;padding:10px" onclick="saveStudentProfile()">Kaydet ✓</button>
    </div>`}async function sl(){const e=document.getElementById("spBio").value.trim(),t=document.getElementById("spSchool").value.trim(),n=document.getElementById("spGrade").value.trim(),a=document.getElementById("spTargetUni").value.trim(),i=document.getElementById("spTargetDept").value.trim(),o=document.getElementById("spStruggling").value.trim(),s=parseInt(document.getElementById("spCapacity").value)||null;try{await an("profile",{bio:e,school:t,grade:n,target_university:a,target_department:i,struggling_subjects:o,daily_capacity:s}),b("Profil başarıyla güncellendi ✓",!0)}catch(r){b("Profil kaydedilemedi: "+r.message)}}async function ll(){const e=document.getElementById("newPass1").value,t=document.getElementById("newPass2").value;if(!e)return b("Şifre girin!");if(e!==t)return b("Şifreler uyuşmuyor!");if(e.length<4)return b("En az 4 karakter olmalı");try{const n=await an("password",{new_password:e});x.dbUser&&(x.dbUser.password_hash=n.password_hash),b("Şifre güncellendi ✓"),document.getElementById("newPass1").value="",document.getElementById("newPass2").value=""}catch(n){b("Hata: "+n.message)}}async function gi(){const e=document.getElementById("view-suyelik");if(!e)return;if(x.role==="coach"||x.role==="developer")return Ln();e.innerHTML='<div style="display:flex;align-items:center;justify-content:center;height:200px"><div style="width:32px;height:32px;border:3px solid var(--accent);border-top-color:transparent;border-radius:50%;animation:spin .7s linear infinite"></div></div>',p.students.find(y=>y.id===x.studentId);const t=x.dbUser;let n=null;if(x.coachId){const{data:y}=await h.from("users").select("full_name,plan,trial_ends_at,created_at,email").eq("id",x.coachId).maybeSingle();n=y}const a=t!=null&&t.created_at?new Date(t.created_at):null,i=new Date,o=(n==null?void 0:n.plan)||"trial",s=o==="trial"?"Deneme Dönemi":o==="pro"?"Pro Üyelik":o==="premium"?"Premium Üyelik":o.charAt(0).toUpperCase()+o.slice(1),r=o==="trial"?"#f0a500":o==="pro"?"#3ecf8e":o==="premium"?"#8b5cf6":"#3ecf8e",l=o==="trial"?"#fff8e6":o==="pro"?"#e6faf3":o==="premium"?"#f3e8ff":"#e6faf3";let c=null;n!=null&&n.trial_ends_at?c=new Date(n.trial_ends_at):n!=null&&n.created_at&&(c=new Date(new Date(n.created_at).getTime()+7*24*60*60*1e3));const d=c?Math.max(0,Math.ceil((c-i)/(1e3*60*60*24))):null,m=a?Math.floor((i-a)/(1e3*60*60*24)):null,u=y=>y?y.toLocaleDateString("tr-TR",{day:"numeric",month:"long",year:"numeric"}):"—",v=d===null?"#888":d>7?"#3ecf8e":d>3?"#f0a500":"#ef4444",f=d===null?"❓":d>7?"✅":d>3?"⚠️":"🔴",k=d===null?"Durum bilinmiyor":d>7?"Aktif":d>3?"Yakında Sona Eriyor":d===0?"Bugün Sona Eriyor":"Kritik — "+d+" gün";e.innerHTML=`
    <div style="max-width:480px;margin:0 auto;padding:16px">

      <!-- Üyelik Durumu Kartı -->
      <div style="background:var(--surface);border:1.5px solid var(--border);border-radius:16px;padding:24px;margin-bottom:16px;position:relative;overflow:hidden">
        <div style="position:absolute;top:0;right:0;width:120px;height:120px;background:${r};opacity:.06;border-radius:50%;transform:translate(30%,-30%)"></div>
        <div style="display:flex;align-items:flex-start;gap:16px">
          <div style="width:52px;height:52px;border-radius:14px;background:${l};display:flex;align-items:center;justify-content:center;font-size:24px;flex-shrink:0">💳</div>
          <div style="flex:1">
            <div style="font-size:11px;color:var(--text-dim);text-transform:uppercase;letter-spacing:.08em;margin-bottom:2px">Üyelik Planı</div>
            <div style="font-size:20px;font-weight:700;color:var(--text)">${s}</div>
            <div style="display:inline-flex;align-items:center;gap:5px;background:${l};color:${r};font-size:11px;font-weight:600;padding:3px 10px;border-radius:20px;margin-top:6px">
              <span>${f}</span><span>${k}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Detay Bilgiler -->
      <div style="background:var(--surface);border:1px solid var(--border);border-radius:14px;overflow:hidden;margin-bottom:16px">
        ${[{icon:"🎓",label:"Koçum",value:(n==null?void 0:n.full_name)||"—"},{icon:"📅",label:"Kayıt Tarihi",value:u(a)},{icon:"⏳",label:"Kullanım Süresi",value:m!==null?m+" gün":"—"},{icon:"📆",label:"Üyelik Sona Erme",value:u(c)},{icon:"⌛",label:"Kalan Süre",value:d!==null?`<span style="color:${v};font-weight:700">${d} gün</span>`:"—"}].map(({icon:y,label:$,value:w},I,T)=>`
          <div style="display:flex;align-items:center;gap:12px;padding:14px 18px;${I<T.length-1?"border-bottom:1px solid var(--border)":""}">
            <span style="font-size:18px;width:24px;text-align:center">${y}</span>
            <div style="flex:1">
              <div style="font-size:11px;color:var(--text-dim)">${$}</div>
              <div style="font-size:14px;font-weight:600;color:var(--text);margin-top:1px">${w}</div>
            </div>
          </div>
        `).join("")}
      </div>

      <!-- Günlük Sayaç -->
      ${d!==null?`
      <div style="background:var(--surface);border:1px solid var(--border);border-radius:14px;padding:18px;margin-bottom:16px">
        <div style="font-size:12px;color:var(--text-dim);margin-bottom:10px;font-weight:600">Üyelik Süresi</div>
        ${(()=>{const y=c&&a?Math.max(1,Math.ceil((c-a)/864e5)):7,$=Math.min(y,y-d),w=Math.min(100,Math.round($/y*100)),I=d>7?"#3ecf8e":d>3?"#f0a500":"#ef4444";return`
            <div style="display:flex;justify-content:space-between;font-size:11px;color:var(--text-dim);margin-bottom:6px">
              <span>${$} gün kullanıldı</span>
              <span>${d} gün kaldı</span>
            </div>
            <div style="background:var(--surface2);border-radius:6px;height:10px;overflow:hidden">
              <div style="width:${w}%;height:100%;background:${I};border-radius:6px;transition:width .5s ease"></div>
            </div>
            <div style="font-size:11px;color:var(--text-dim);text-align:center;margin-top:6px">%${w} tamamlandı</div>
          `})()}
      </div>
      `:""}

      <!-- İletişim / Yardım -->
      <div style="background:var(--surface);border:1px solid var(--border);border-radius:14px;padding:18px">
        <div style="font-size:12px;font-weight:700;color:var(--text);margin-bottom:12px">Üyelik Talebi & İletişim</div>
        <div style="font-size:12px;color:var(--text-dim);line-height:1.6;margin-bottom:14px">
          Üyelik yenileme, plan değişikliği veya destek için koçunuzla iletişime geçin.
        </div>
        <button onclick="switchTab('smessages')" style="width:100%;padding:11px;background:var(--accent);color:#fff;border:none;border-radius:10px;font-size:13px;font-weight:600;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px">
          <span>💬</span><span>Koçuma Mesaj Gönder</span>
        </button>
      </div>
    </div>`}window.renderSUyelik=gi;async function Ln(){var v;const e=document.getElementById("view-suyelik");if(!e)return;e.innerHTML='<div style="display:flex;align-items:center;justify-content:center;height:200px"><div style="width:32px;height:32px;border:3px solid var(--accent);border-top-color:transparent;border-radius:50%;animation:spin .7s linear infinite"></div></div>';const t=(v=x.dbUser)==null?void 0:v.id,[{data:n},{data:a}]=await Promise.all([h.from("users").select("plan,trial_ends_at,created_at,payment_reference_code").eq("id",t).maybeSingle(),h.from("payments").select("*").eq("coach_id",t).order("created_at",{ascending:!1}).limit(10)]),i=(n==null?void 0:n.plan)||"trial",o=n!=null&&n.trial_ends_at?new Date(n.trial_ends_at):n!=null&&n.created_at?new Date(new Date(n.created_at).getTime()+7*24*60*60*1e3):null,s=o?new Date(o.getTime()+3*24*60*60*1e3):null,r={trial:{label:"Deneme Dönemi",color:"#f0a500",bg:"#fff8e6"},grace:{label:"Müsamaha Süresi",color:"#ea580c",bg:"#fff1e6"},inactive:{label:"Erişim Askıda",color:"#ef4444",bg:"#fee2e2"},pro:{label:"Aktif Abonelik",color:"#3ecf8e",bg:"#e6faf3"}}[i]||{label:i,color:"#3ecf8e",bg:"#e6faf3"},l=f=>f?f.toLocaleDateString("tr-TR",{day:"numeric",month:"long",year:"numeric"}):"—",c=i==="grace"?"Müsamaha Bitişi":i==="trial"?"Deneme Bitişi":"Erişim Bitişi",d=i==="grace"?s:o,m=(a||[]).some(f=>f.status==="pending"),u={pending:["📨 Onay Bekliyor","#f0a500"],completed:["✓ Onaylandı","#3ecf8e"],rejected:["✕ Reddedildi","#ef4444"]};e.innerHTML=`
    <div style="max-width:480px;margin:0 auto;padding:16px">
      <div style="background:var(--surface);border:1.5px solid var(--border);border-radius:16px;padding:24px;margin-bottom:16px;position:relative;overflow:hidden">
        <div style="position:absolute;top:0;right:0;width:120px;height:120px;background:${r.color};opacity:.06;border-radius:50%;transform:translate(30%,-30%)"></div>
        <div style="display:flex;align-items:flex-start;gap:16px">
          <div style="width:52px;height:52px;border-radius:14px;background:${r.bg};display:flex;align-items:center;justify-content:center;font-size:24px;flex-shrink:0">💳</div>
          <div style="flex:1">
            <div style="font-size:11px;color:var(--text-dim);text-transform:uppercase;letter-spacing:.08em;margin-bottom:2px">Abonelik Durumu</div>
            <div style="font-size:20px;font-weight:700;color:var(--text)">${r.label}</div>
            ${n!=null&&n.payment_reference_code?`<div style="font-size:11px;color:var(--text-dim);margin-top:6px">Referans Kodu: <b style="color:var(--text)">${g(n.payment_reference_code)}</b></div>`:""}
          </div>
        </div>
      </div>

      <div style="background:var(--surface);border:1px solid var(--border);border-radius:14px;overflow:hidden;margin-bottom:16px">
        ${[{icon:"📅",label:"Kayıt Tarihi",value:l(n!=null&&n.created_at?new Date(n.created_at):null)},{icon:"⌛",label:c,value:l(d)}].map(({icon:f,label:k,value:y},$,w)=>`
          <div style="display:flex;align-items:center;gap:12px;padding:14px 18px;${$<w.length-1?"border-bottom:1px solid var(--border)":""}">
            <span style="font-size:18px;width:24px;text-align:center">${f}</span>
            <div style="flex:1">
              <div style="font-size:11px;color:var(--text-dim)">${k}</div>
              <div style="font-size:14px;font-weight:600;color:var(--text);margin-top:1px">${y}</div>
            </div>
          </div>
        `).join("")}
      </div>

      <div style="background:var(--surface);border:1px solid var(--border);border-radius:14px;padding:18px;margin-bottom:16px">
        ${i==="pro"?`<div style="font-size:12px;color:var(--text-dim);line-height:1.6">Aboneliğiniz aktif. Süreniz dolmadan önce yenileme hatırlatması gönderilecek.</div>
             <button onclick="openCoachPaymentModal()" style="width:100%;margin-top:12px;padding:11px;background:var(--surface2);color:var(--text);border:1px solid var(--border);border-radius:10px;font-size:13px;font-weight:600;cursor:pointer">Erken Yenile</button>`:m?'<div style="display:flex;align-items:center;gap:8px;font-size:13px;font-weight:700;color:#f0a500">📨 Ödeme bildiriminiz alındı, onay bekleniyor</div>':'<button onclick="openCoachPaymentModal()" style="width:100%;padding:12px;background:var(--accent);color:#fff;border:none;border-radius:10px;font-size:14px;font-weight:700;cursor:pointer">💳 Ödeme Bildir</button>'}
      </div>

      <div style="background:var(--surface);border:1px solid var(--border);border-radius:14px;overflow:hidden">
        <div style="font-size:12px;font-weight:700;color:var(--text);padding:14px 18px 8px">Ödeme Geçmişi</div>
        ${a&&a.length?a.map(f=>`
          <div style="display:flex;align-items:center;justify-content:space-between;gap:10px;padding:12px 18px;border-top:1px solid var(--border)">
            <div>
              <div style="font-size:13px;font-weight:600;color:var(--text)">${f.amount?Number(f.amount).toLocaleString("tr-TR")+" ₺":"—"} · ${f.period_months||1} ay</div>
              <div style="font-size:11px;color:var(--text-dim)">${new Date(f.created_at).toLocaleDateString("tr-TR")}</div>
            </div>
            <div style="display:flex;align-items:center;gap:10px">
              ${f.status==="completed"?`<a href="/api/generate-pdf-report?paymentId=${f.id}" target="_blank" style="font-size:11px;font-weight:700;color:var(--accent);text-decoration:none">📄 Makbuz</a>`:""}
              <span style="font-size:11px;font-weight:700;color:${(u[f.status]||["—","var(--text-dim)"])[1]}">${(u[f.status]||[f.status||"—"])[0]}</span>
            </div>
          </div>
        `).join(""):'<div style="padding:16px 18px;font-size:12px;color:var(--text-dim)">Henüz ödeme kaydı yok</div>'}
      </div>
    </div>`}window.renderCoachUyelik=Ln;let bn={iban:"",refCode:""};function dl(e){const t=e==="iban"?bn.iban.replace(/\s+/g,""):bn.refCode;navigator.clipboard.writeText(t).then(()=>b((e==="iban"?"IBAN":"Referans kodu")+" kopyalandı ✓"))}window.copyCpmValue=dl;async function cl(){var d,m;let e=document.getElementById("coachPaymentModal");e||(e=document.createElement("div"),e.id="coachPaymentModal",e.className="modal-bg",e.style.zIndex="9999998",document.body.appendChild(e),e.addEventListener("click",u=>{u.target===e&&Z("coachPaymentModal")})),e.innerHTML=`<div class="modal" style="max-width:460px">
    <button class="modal-close" onclick="cm('coachPaymentModal')">×</button>
    <div id="cpmBody" style="padding:4px 0;text-align:center"><div style="width:28px;height:28px;margin:24px auto;border:3px solid var(--accent);border-top-color:transparent;border-radius:50%;animation:spin .7s linear infinite"></div></div>
  </div>`,V("coachPaymentModal"),(d=x.dbUser)==null||d.id;const[{data:t},{data:n}]=await Promise.all([h.from("platform_settings").select("value").eq("key","payment_settings").maybeSingle(),h.rpc("ensure_payment_ref_code")]),a=(t==null?void 0:t.value)||{},i=((m=x.dbUser)==null?void 0:m.plan_tier)==="profesyonel"?"profesyonel":"bireysel",o=i==="profesyonel"?"Profesyonel":"Bireysel",s=+a[`price_${i}`]||0,r=+a[`price_${i}_10mo`]||s*10,l=!!(a.bank_name&&a.iban);bn={iban:a.iban||"",refCode:n||""};const c=document.getElementById("cpmBody");if(c){if(!l){c.innerHTML=`
      <h2>Aboneliği Başlat</h2>
      <div style="font-size:13px;color:var(--text-mid);line-height:1.7;padding:12px 0">
        Ödeme bilgileri henüz tanımlanmadı. Lütfen destek ekibimizle iletişime geçin.
      </div>
      <button class="btn btn-accent" style="width:100%;justify-content:center;padding:12px" onclick="cm('coachPaymentModal');openSupportChatDirect()">💬 Destek ile İletişime Geç</button>`;return}c.innerHTML=`
    <h2>Rostrum Akademi Aboneliği <span style="color:var(--accent)">— ${o} Paket</span></h2>
    <div class="field"><label>Dönem</label>
      <select id="cpmMonths" onchange="updateCpmPrice(${s},${r})">
        <option value="1">1 Ay</option>
        <option value="3">3 Ay</option>
        <option value="6">6 Ay</option>
        <option value="10">10 Ay (Peşin — İndirimli)</option>
        <option value="12">12 Ay</option>
      </select>
    </div>
    <div style="margin:10px 0;padding:10px 14px;border-radius:10px;background:var(--accent-dim);color:var(--accent);font-size:13px;font-weight:700" id="cpmPriceLine">Tutar: ${s.toLocaleString("tr-TR")} ₺</div>

    <div style="background:var(--surface2);border:1px solid var(--border);border-radius:12px;padding:14px;margin-bottom:12px;font-size:12.5px;line-height:1.9">
      <div><b>Banka:</b> ${g(a.bank_name)}</div>
      <div style="display:flex;align-items:center;gap:8px"><b>IBAN:</b> <span>${g(a.iban)}</span>
        <button type="button" onclick="copyCpmValue('iban')" style="background:none;border:none;cursor:pointer;color:var(--accent);font-size:12px">📋 Kopyala</button></div>
      ${a.account_holder?`<div><b>Alıcı:</b> ${g(a.account_holder)}</div>`:""}
    </div>

    <div style="background:rgba(240,165,0,.08);border:1.5px dashed var(--accent);border-radius:12px;padding:14px;text-align:center;margin-bottom:14px">
      <div style="font-size:11px;color:var(--text-dim);margin-bottom:4px">Açıklamaya SADECE bu kodu yazın</div>
      <div style="font-size:20px;font-weight:900;letter-spacing:.05em;color:var(--accent)">${g(n||"—")}</div>
      <button type="button" onclick="copyCpmValue('refCode')" style="background:none;border:none;cursor:pointer;color:var(--accent);font-size:11px;margin-top:2px">📋 Kopyala</button>
    </div>

    <div class="field"><label>Dekont (PNG, JPG veya PDF)</label>
      <input type="file" id="cpmFile" accept=".png,.jpg,.jpeg,.pdf">
    </div>
    <div id="cpmErr" style="color:var(--red);font-size:12px;margin-bottom:8px;display:none"></div>
    <button class="btn btn-accent" style="width:100%;justify-content:center;padding:12px" id="cpmSubmitBtn" onclick="submitCoachPayment(${s})">Dekontu Gönder</button>`}}window.openCoachPaymentModal=cl;function pl(e,t){var o;const n=+((o=document.getElementById("cpmMonths"))==null?void 0:o.value)||1,a=document.getElementById("cpmPriceLine"),i=n===10?t||e*10:e*n;a&&(a.textContent=`Tutar: ${i.toLocaleString("tr-TR")} ₺`)}window.updateCpmPrice=pl;async function ul(e){var s,r,l,c,d,m;const t=document.getElementById("cpmErr"),n=document.getElementById("cpmSubmitBtn");t.style.display="none";let a=(r=(s=document.getElementById("cpmFile"))==null?void 0:s.files)==null?void 0:r[0];if(!a){t.textContent="Lütfen dekont dosyası seçin.",t.style.display="block";return}if(a.size>8*1024*1024){t.textContent="Dosya 8MB'dan küçük olmalı.",t.style.display="block";return}const i=+((l=document.getElementById("cpmMonths"))==null?void 0:l.value)||1,o=(c=x.dbUser)==null?void 0:c.id;n.disabled=!0,n.textContent="Yükleniyor...";try{a=await Ut(a);const u=(a.name.split(".").pop()||"dat").toLowerCase(),v=`${o}/${Date.now()}.${u}`,{error:f}=await h.storage.from("receipts").upload(v,a,{contentType:a.type});if(f)throw f;const{data:{session:k}}=await h.auth.getSession(),y=await fetch("/api/create-student",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${(k==null?void 0:k.access_token)||""}`},body:JSON.stringify({type:"submit-payment",months:i,receipt_path:v})}),$=await y.json();if(!y.ok)throw new Error($.error||"Ödeme bildirilemedi");b("Dekontunuz alındı ✓ Onay bekleniyor"),Z("coachPaymentModal"),(d=document.getElementById("trialCountdownBanner"))==null||d.remove(),Gt(),(m=document.getElementById("view-suyelik"))!=null&&m.offsetParent&&Ln()}catch(u){t.textContent="Hata: "+u.message,t.style.display="block"}finally{n.disabled=!1,n.textContent="Dekontu Gönder"}}window.submitCoachPayment=ul;async function fi(){const e=document.getElementById("view-coach-profile");if(!e)return;e.innerHTML='<div class="loading">Profil bilgileri yükleniyor...</div>';const t=x.dbUser.id;let n=null,a=null;const i=await h.from("coach_profiles").select("*").eq("id",t).maybeSingle();if(n=i.data,a=i.error,a){const d=localStorage.getItem(`coach_profile_${t}`);if(d)try{n=JSON.parse(d),a=null}catch{}if(a){e.innerHTML=`<div style="padding:20px;color:var(--red)">Profil yüklenirken hata oluştu: ${g(a.message)}</div>`;return}}else if(!n){const d=localStorage.getItem(`coach_profile_${t}`);if(d)try{n=JSON.parse(d)}catch{}}window._coachProfileData=n||{},n!=null&&n.bio,n!=null&&n.subjects,n!=null&&n.education,n!=null&&n.experience,n!=null&&n.photo_url,n!=null&&n.instagram,n!=null&&n.linkedin;const o=(n==null?void 0:n.slug)||"";n!=null&&n.headline,((n==null?void 0:n.capacity_left)??"")===null||n==null||n.capacity_left,n!=null&&n.pricing_text,n!=null&&n.whatsapp_number,Array.isArray(n==null?void 0:n.reviews)&&n.reviews,Array.isArray(n==null?void 0:n.faq)&&n.faq;const s=(n==null?void 0:n.blocks)||[];n!=null&&n.yks_rank,n!=null&&n.university,n!=null&&n.department,n!=null&&n.profession,n!=null&&n.experience_years,n!=null&&n.institution;const r=(n==null?void 0:n.published)===!0;Ce=o;const l=window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1",c=o?l?`${window.location.origin}/koc_bul.html?koc=${o}`:`${window.location.origin}/koc/${o}`:window.location.origin+window.location.pathname.replace("app.html","koc_bul.html")+`?coach=${t}`;e.innerHTML=`
    <div style="max-width:1440px; margin:0 auto; padding: 0 12px;">
      <!-- Header Bar -->
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: 20px; flex-wrap:wrap; gap:12px;">
        <div>
          <h2 style="font-family:'Inter',sans-serif; font-size:22px; font-weight:800; letter-spacing:-.5px; margin:0; display:flex; align-items:center; gap:8px; color:var(--text);">
            <span>🎨 Rostrum Studio</span>
            <span style="font-size:10px; background:var(--accent-dim); color:var(--accent); font-weight:800; padding:3px 9px; border-radius:99px; letter-spacing:0.5px;">LANDING PAGE BUILDER</span>
            <span id="cpPublishStatus" style="font-size:10px; font-weight:800; padding:3px 9px; border-radius:99px; letter-spacing:0.5px; background:${r?"rgba(62,207,142,.15)":"var(--surface2)"}; color:${r?"var(--green)":"var(--text-dim)"}; border:1px solid ${r?"rgba(62,207,142,.35)":"var(--border)"};">${r?"● YAYINDA":"○ TASLAK"}</span>
          </h2>
          <p style="font-size: 13px; color: var(--text-dim); margin-top:3px; margin-bottom:0;">
            Instagram biyografinize ekleyeceğiniz yüksek dönüşümlü kişisel YKS reklam sayfanızı stüdyo ortamında tasarlayın.
          </p>
        </div>
        <div style="display:flex; gap:10px; align-items:center;">
          <button class="btn btn-ghost" style="padding: 8px 12px; height: 38px;" onclick="copyCoachLink()">🔗 Linki Kopyala</button>
          <a href="${c}" id="cpSlugBrowseBtn" target="_blank" class="btn btn-ghost" style="text-decoration:none; display:inline-flex; align-items:center; gap:6px; height:38px; padding:0 14px; border-radius:9px; font-size:13px; font-weight:700;" onclick="return browseCoachLink(event)">👁 Önizle</a>
          <button class="btn btn-ghost" style="height:38px; padding:0 16px; font-size:13px; font-weight:700; border-radius:9px;" onclick="saveCoachProfile(false)">Taslağı Kaydet</button>
          <button class="btn btn-accent" style="height:38px; padding:0 18px; font-size:13.5px; font-weight:800; border-radius:9px; box-shadow:0 4px 16px rgba(240,98,54,0.35);" onclick="saveCoachProfile(true)">${r?"Güncelle & Yayınla":"Yayınla 🚀"}</button>
        </div>
      </div>

      <!-- 3-COLUMN STUDIO LAYOUT GRID — ~25% sol / ~40% editör / ~35% önizleme -->
      <div class="rostrum-studio-grid" style="display:grid; grid-template-columns: 272px 1fr 432px; gap:18px; align-items: start;">

        <!-- SOL PANEL: SAYFA MİMARİSİ & BLOK KATMANLARI -->
        <div class="studio-left-panel" style="background:var(--surface); border:1px solid var(--border); border-radius:16px; padding:16px; position:sticky; top:20px; max-height:calc(100vh - 40px); overflow-y:auto; box-shadow:var(--shadow-sm);">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:14px; padding-bottom:10px; border-bottom:1px solid var(--border);">
            <div style="font-size:11px; font-weight:800; color:var(--text-mid); text-transform:uppercase; letter-spacing:0.5px;">📐 SAYFA MİMARİSİ</div>
            <button type="button" class="btn btn-ghost btn-xs" onclick="addCustomStudioBlock()" style="padding:3px 8px; font-size:11px;">+ Blok</button>
          </div>
          <div id="cpBlocksContainer" style="display:flex; flex-direction:column; gap:14px;"></div>
        </div>

        <!-- ORTA PANEL: DİNAMİK SEÇİLİ BLOK AYARLARI (INSPECTOR) -->
        <div class="studio-middle-panel" style="background:var(--surface); border:1px solid var(--border); border-radius:16px; padding:24px; min-height:680px; box-shadow:var(--shadow-sm);">
          <div id="studioBlockInspector">
            <!-- Dynamic Inspector HTML rendered by selectStudioBlock(blockId) -->
          </div>
        </div>

        <!-- SAĞ PANEL: CANLI TELEFON ÖNİZLEME STÜDYOSU -->
        <div class="studio-right-panel" style="position: sticky; top: 20px; z-index: 10;">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;">
            <div style="font-size: 11px; font-weight: 800; color: var(--text-dim); text-transform: uppercase; letter-spacing: .5px;">📱 CANLI SİTE ÖNİZLEMESİ</div>
            <span style="font-size:10px; font-weight:700; color:var(--accent); background:var(--accent-dim); padding:2px 8px; border-radius:99px;">CANLI GÜNCEL</span>
          </div>

          <!-- Telefon Çerçevesi -->
          <div id="phoneMockupFrame" style="width: 100%; max-width: 412px; height: min(800px, calc(100vh - 100px)); margin:0 auto; border-radius: 44px; border: 10px solid #1c1c1e; background: #09090B; overflow-y: auto; overflow-x: hidden; position: relative; box-shadow: 0 24px 70px rgba(0,0,0,0.5); -webkit-overflow-scrolling: touch; scrollbar-width: none;">
            <!-- Çentik (Dynamic Island) -->
            <div style="position:sticky; top:0; left:0; right:0; z-index:30; background:#09090B; padding:10px 0 5px; display:flex; justify-content:center; align-items:center;">
              <div style="width:80px; height:20px; background:#1c1c1e; border-radius:14px;"></div>
            </div>

            <!-- Canlı Yükleme Alanı -->
            <div id="liveShowcasePreview" style="padding: 0 14px 64px 14px; font-family: -apple-system, BlinkMacSystemFont, sans-serif; color: #FAFAFA;">
              <!-- updateProfilePreview burayı canlı günceller -->
            </div>
          </div>
        </div>

      </div>
    </div>
  `,window._activeStudioBlockId=window._activeStudioBlockId||"hero",renderCoachBlocksManager(s),selectStudioBlock(window._activeStudioBlockId),re()}window.selectStudioBlock=function(e){window._activeStudioBlockId=e;const t=document.getElementById("studioBlockInspector");if(!t)return;document.querySelectorAll("#cpBlocksContainer .cp-block-row").forEach(s=>{const r=s.dataset.id===e;s.style.borderColor=r?"var(--accent)":"var(--border)",s.style.background=r?"var(--accent-dim)":"var(--surface2)"});const a=window._coachProfileData||{},i={hero:()=>`
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:16px; padding-bottom:10px; border-bottom:1px solid var(--border);">
        <h3 style="font-size:15px; font-weight:800; color:var(--text); margin:0;">🏆 Profil &amp; YKS Ünvan Ayarları (Hero)</h3>
        <span style="font-size:11px; background:var(--accent-dim); color:var(--accent); font-weight:700; padding:2px 8px; border-radius:99px;">ZORUNLU BLOK</span>
      </div>

      <!-- Profil Tipi — editörde hangi alan grubunun öne çıkacağını belirler -->
      <div style="margin-bottom:18px;">
        <label style="display:block; font-size:11px; font-weight:700; color:var(--text-mid); margin-bottom:6px; text-transform:uppercase; letter-spacing:.5px;">Profil Tipi</label>
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:8px;">
          <button type="button" id="cpTypeStudentBtn" onclick="setCoachProfileType('student')" style="padding:10px; border-radius:10px; font-size:12.5px; font-weight:700; cursor:pointer; text-align:left; border:1.5px solid ${(a.profile_type||"student")==="student"?"var(--accent)":"var(--border)"}; background:${(a.profile_type||"student")==="student"?"var(--accent-dim)":"var(--surface2)"}; color:${(a.profile_type||"student")==="student"?"var(--accent)":"var(--text)"};">🎓 Öğrenci Koçu<div style="font-weight:400; font-size:10.5px; color:var(--text-dim); margin-top:2px;">Üniversite, bölüm, YKS derecesi</div></button>
          <button type="button" id="cpTypeProBtn" onclick="setCoachProfileType('professional')" style="padding:10px; border-radius:10px; font-size:12.5px; font-weight:700; cursor:pointer; text-align:left; border:1.5px solid ${a.profile_type==="professional"?"var(--accent)":"var(--border)"}; background:${a.profile_type==="professional"?"var(--accent-dim)":"var(--surface2)"}; color:${a.profile_type==="professional"?"var(--accent)":"var(--text)"};">💼 Profesyonel Eğitim Koçu<div style="font-weight:400; font-size:10.5px; color:var(--text-dim); margin-top:2px;">Meslek, deneyim, kurum</div></button>
        </div>
      </div>

      <!-- Profil Fotoğrafı -->
      <div style="margin-bottom:18px;">
        <label style="display:block; font-size:11px; font-weight:700; color:var(--text-mid); margin-bottom:6px; text-transform:uppercase; letter-spacing:.5px;">Profil Fotoğrafı <span style="color:var(--red)">*</span></label>
        <input type="hidden" id="cpPhotoUrl" value="${g(a.photo_url||"")}">
        <input type="file" id="cpPhotoFile" accept="image/*" style="display:none" onchange="uploadCoachPhoto(this.files[0])">
        <div id="cpPhotoDrop" onclick="document.getElementById('cpPhotoFile').click()"
          style="display:flex; align-items:center; gap:16px; padding:14px; background:var(--surface2); border:2px dashed var(--border); border-radius:12px; cursor:pointer;">
          <div id="cpPhotoThumb" style="width:54px; height:54px; border-radius:50%; flex-shrink:0; background:${a.photo_url?`url('${g(a.photo_url)}') center/cover`:"var(--accent-dim)"}; display:flex; align-items:center; justify-content:center; font-size:20px;">${a.photo_url?"":"📷"}</div>
          <div>
            <div id="cpPhotoDropText" style="font-size:13px; font-weight:700; color:var(--text);">${a.photo_url?"Fotoğraf yüklendi ✓":"Sürükleyin veya Dosya Seçin"}</div>
            <div style="font-size:11px; color:var(--text-dim); margin-top:2px;">JPG/PNG · Maks. 3 MB</div>
          </div>
        </div>
      </div>

      <!-- Kişisel Link (Slug) -->
      <div style="margin-bottom:18px;">
        <label style="display:block; font-size:11px; font-weight:700; color:var(--text-mid); margin-bottom:6px; text-transform:uppercase; letter-spacing:.5px;">Kamuya Açık Profil Linkiniz</label>
        <div style="display:flex; gap:8px; align-items:center;">
          <span style="font-size:12.5px; color:var(--text-dim); font-weight:600;">rostrumakademi.com/koc/</span>
          <input type="text" id="cpSlug" value="${g(a.slug||"")}" placeholder="ad-soyad" maxlength="40" oninput="onCoachSlugInput()" style="flex:1; background:var(--surface2); border:1.5px solid var(--border); border-radius:9px; padding:8px 12px; font-size:13.5px; font-weight:700; color:var(--text); outline:none;">
        </div>
        <span id="cpSlugStatus" style="font-size:11.5px; font-weight:700; display:block; margin-top:4px;"></span>
      </div>

      <!-- YKS Derecesi & Üniversite (Öğrenci Koçu) -->
      <div id="cpStudentFields" style="display:${(a.profile_type||"student")==="student"?"grid":"none"}; grid-template-columns:1fr 1fr; gap:14px; margin-bottom:18px;">
        <div>
          <label style="display:block; font-size:11px; font-weight:700; color:var(--text-mid); margin-bottom:6px; text-transform:uppercase; letter-spacing:.5px;">YKS Derecesi <span style="font-weight:400; color:var(--text-dim)">(Örn: Sayısal 412.si)</span></label>
          <input type="text" id="cpYksRank" value="${g(a.yks_rank||"")}" placeholder="Örn: Sayısal 412.si" oninput="updateProfilePreview()" style="width:100%; background:var(--surface2); border:1.5px solid var(--border); border-radius:9px; padding:9px 12px; font-size:13px; color:var(--text); outline:none;">
        </div>
        <div>
          <label style="display:block; font-size:11px; font-weight:700; color:var(--text-mid); margin-bottom:6px; text-transform:uppercase; letter-spacing:.5px;">Üniversite &amp; Bölüm</label>
          <input type="text" id="cpUniversity" value="${g(a.university||"")}" placeholder="Örn: Hacettepe Tıp" oninput="updateProfilePreview()" style="width:100%; background:var(--surface2); border:1.5px solid var(--border); border-radius:9px; padding:9px 12px; font-size:13px; color:var(--text); outline:none;">
        </div>
      </div>

      <!-- Meslek & Deneyim (Profesyonel Koç) -->
      <div id="cpProFields" style="display:${a.profile_type==="professional"?"grid":"none"}; grid-template-columns:1fr 1fr; gap:14px; margin-bottom:18px;">
        <div>
          <label style="display:block; font-size:11px; font-weight:700; color:var(--text-mid); margin-bottom:6px; text-transform:uppercase; letter-spacing:.5px;">Meslek / Unvan <span style="font-weight:400; color:var(--text-dim)">(Örn: PDR Uzmanı)</span></label>
          <input type="text" id="cpProfession" value="${g(a.profession||"")}" placeholder="Örn: Rehber Öğretmen" oninput="updateProfilePreview()" style="width:100%; background:var(--surface2); border:1.5px solid var(--border); border-radius:9px; padding:9px 12px; font-size:13px; color:var(--text); outline:none;">
        </div>
        <div>
          <label style="display:block; font-size:11px; font-weight:700; color:var(--text-mid); margin-bottom:6px; text-transform:uppercase; letter-spacing:.5px;">Deneyim Yılı</label>
          <input type="text" id="cpExpYears" value="${g(a.experience_years||"")}" placeholder="Örn: 8 Yıl Deneyim" oninput="updateProfilePreview()" style="width:100%; background:var(--surface2); border:1.5px solid var(--border); border-radius:9px; padding:9px 12px; font-size:13px; color:var(--text); outline:none;">
        </div>
      </div>

      <!-- Vitrin Alt-Başlığı -->
      <div style="margin-bottom:18px;">
        <label style="display:block; font-size:11px; font-weight:700; color:var(--text-mid); margin-bottom:6px; text-transform:uppercase; letter-spacing:.5px;">Vitrin Alt-Başlığı (Slogan)</label>
        <input type="text" id="cpHeadline" value="${g(a.headline||"")}" placeholder="Örn: YKS Dereceli Sayısal Mentörü & Koçu" maxlength="60" oninput="updateProfilePreview()" style="width:100%; background:var(--surface2); border:1.5px solid var(--border); border-radius:9px; padding:9px 12px; font-size:13px; color:var(--text); outline:none;">
      </div>

      <!-- Sosyal Medya -->
      <div style="display:grid; grid-template-columns:1fr 1fr; gap:14px;">
        <div>
          <label style="display:block; font-size:11px; font-weight:700; color:var(--text-mid); margin-bottom:6px; text-transform:uppercase; letter-spacing:.5px;">Instagram @kullaniciadi</label>
          <input type="text" id="cpInstagram" value="${g(a.instagram||"")}" placeholder="kullaniciadi" oninput="updateProfilePreview()" style="width:100%; background:var(--surface2); border:1.5px solid var(--border); border-radius:9px; padding:9px 12px; font-size:13px; color:var(--text); outline:none;">
        </div>
        <div>
          <label style="display:block; font-size:11px; font-weight:700; color:var(--text-mid); margin-bottom:6px; text-transform:uppercase; letter-spacing:.5px;">LinkedIn URL</label>
          <input type="text" id="cpLinkedin" value="${g(a.linkedin||"")}" placeholder="https://linkedin.com/in/..." oninput="updateProfilePreview()" style="width:100%; background:var(--surface2); border:1.5px solid var(--border); border-radius:9px; padding:9px 12px; font-size:13px; color:var(--text); outline:none;">
        </div>
      </div>
    `,stats:()=>`
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:16px; padding-bottom:10px; border-bottom:1px solid var(--border);">
        <h3 style="font-size:15px; font-weight:800; color:var(--text); margin:0;">⚡ YKS Başarı &amp; Stat Çipleri Ayarları</h3>
        <span style="font-size:11px; background:var(--surface2); color:var(--text-dim); font-weight:700; padding:2px 8px; border-radius:99px;">ÇİP ROZETLERİ</span>
      </div>

      <div style="display:grid; grid-template-columns:1fr 1fr; gap:16px; margin-bottom:20px;">
        <div>
          <label style="display:block; font-size:11px; font-weight:700; color:var(--text-mid); margin-bottom:6px; text-transform:uppercase; letter-spacing:.5px;">Paket / Fiyat Bilgisi <span style="font-weight:400; color:var(--text-dim)">(Örn: 1.500 ₺ / Ay)</span></label>
          <input type="text" id="cpPricingText" value="${g(a.pricing_text||"")}" placeholder="Örn: 1.500 ₺ / Ay" oninput="updateProfilePreview()" style="width:100%; background:var(--surface2); border:1.5px solid var(--border); border-radius:9px; padding:10px 13px; font-size:13.5px; color:var(--text); outline:none;">
        </div>
        <div>
          <label style="display:block; font-size:11px; font-weight:700; color:var(--text-mid); margin-bottom:6px; text-transform:uppercase; letter-spacing:.5px;">Boş Kontenjan <span style="font-weight:400; color:var(--text-dim)">(Örn: 3)</span></label>
          <input type="number" id="cpCapacity" value="${(a.capacity_left??"")===null?"":a.capacity_left??""}" placeholder="—" min="0" max="999" oninput="updateProfilePreview()" style="width:100%; background:var(--surface2); border:1.5px solid var(--border); border-radius:9px; padding:10px 13px; font-size:13.5px; color:var(--text); outline:none;">
        </div>
      </div>

      <!-- Uzmanlık Alanları -->
      <div style="position:relative;">
        <label style="display:block; font-size:11px; font-weight:700; color:var(--text-mid); margin-bottom:6px; text-transform:uppercase; letter-spacing:.5px;">Uzmanlık Alanlarınız <span style="color:var(--red)">*</span></label>
        <input type="hidden" id="cpSubjects" value="${g(a.subjects||"")}">
        <div id="cpTagSelectBox" onclick="toggleTagDropdown(event)" style="display:flex; flex-wrap:wrap; gap:6px; min-height:42px; padding:8px 12px; background:var(--surface2); border:1.5px solid var(--border); border-radius:9px; cursor:pointer; align-items:center;">
          <div id="cpSelectedTags" style="display:flex; flex-wrap:wrap; gap:6px; align-items:center;"></div>
          <span style="font-size:12.5px; color:var(--text-dim); margin-left:auto;">🔽 Seçin...</span>
        </div>
        <div id="cpTagDropdownMenu" style="display:none; position:absolute; left:0; right:0; top:100%; margin-top:6px; z-index:1000; background:var(--surface2); border:1.5px solid var(--border); border-radius:10px; box-shadow:var(--shadow-lg); max-height:240px; overflow-y:auto; padding:12px;">
          <div style="font-size:10px; font-weight:700; color:var(--text-dim); margin-bottom:8px; text-transform:uppercase;">Hazır Etiketler</div>
          <div id="cpDropdownPresets" style="display:flex; flex-wrap:wrap; gap:6px; margin-bottom:10px;"></div>
          <div style="border-top:1px solid var(--border); padding-top:10px; display:flex; gap:6px;">
            <input type="text" id="cpTagCustom" placeholder="Özel etiket yazın..." maxlength="25" onkeydown="if(event.key==='Enter'){event.preventDefault(); addCustomCoachTag();}" style="flex:1; background:var(--surface); border:1.5px solid var(--border); border-radius:8px; padding:6px 10px; font-size:12.5px; color:var(--text); outline:none;">
            <button type="button" class="btn btn-accent btn-sm" onclick="addCustomCoachTag()">+ Ekle</button>
          </div>
        </div>
      </div>
    `,value_props:()=>`
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:16px; padding-bottom:10px; border-bottom:1px solid var(--border);">
        <h3 style="font-size:15px; font-weight:800; color:var(--text); margin:0;">🎯 Neden Benimle Çalışmalısın? (Dönüşüm Kartları)</h3>
        <span style="font-size:11px; background:var(--surface2); color:var(--text-dim); font-weight:700; padding:2px 8px; border-radius:99px;">YKS DÖNÜŞÜM DİREKLERİ</span>
      </div>
      <p style="font-size:13px; color:var(--text-dim); line-height:1.5; margin-bottom:16px;">
        Bu bölüm vitrin sayfanızda potansiyel öğrenci ve velileri ikna eden 4 temel avantaj sütununu otomatik oluşturur:
      </p>
      <div style="display:grid; grid-template-columns:1fr 1fr; gap:10px;">
        <div style="background:var(--surface2); border:1px solid var(--border); border-radius:10px; padding:12px; font-size:12px;">🎯 <b>Kişiye Özel YKS Planı</b><br><span style="color:var(--text-dim); font-size:11px;">Hedefine özel günlük ders stratejisi</span></div>
        <div style="background:var(--surface2); border:1px solid var(--border); border-radius:10px; padding:12px; font-size:12px;">📊 <b>Net &amp; Gelişim Takibi</b><br><span style="color:var(--text-dim); font-size:11px;">Deneme analizi ve eksik tespiti</span></div>
        <div style="background:var(--surface2); border:1px solid var(--border); border-radius:10px; padding:12px; font-size:12px;">🤖 <b>7/24 AI Dijital Asistan</b><br><span style="color:var(--text-dim); font-size:11px;">Kesintisiz rehberlik &amp; soru desteği</span></div>
        <div style="background:var(--surface2); border:1px solid var(--border); border-radius:10px; padding:12px; font-size:12px;">💬 <b>Birebir Görüşme</b><br><span style="color:var(--text-dim); font-size:11px;">Haftalık görüntülü koçluk seansı</span></div>
      </div>
    `,tabs_about:()=>`
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:16px; padding-bottom:10px; border-bottom:1px solid var(--border);">
        <h3 style="font-size:15px; font-weight:800; color:var(--text); margin:0;">📖 Biyografi, Eğitim &amp; Derece</h3>
        <button type="button" id="cpAiBioBtn" class="btn btn-ghost btn-xs" onclick="generateCoachBio()" style="gap:5px; padding:4px 10px; font-size:11.5px;">🤖 AI ile Biyografi Yaz</button>
      </div>

      <!-- Biyografi -->
      <div style="margin-bottom:18px;">
        <label style="display:block; font-size:11px; font-weight:700; color:var(--text-mid); margin-bottom:6px; text-transform:uppercase; letter-spacing:.5px;">Biyografi / Hakkımda <span style="color:var(--red)">*</span></label>
        <textarea id="cpBio" oninput="updateProfilePreview()" placeholder="Eğitim felsefeniz, YKS derece hikayeniz ve çalışma disiplininiz..." style="width:100%; min-height:120px; background:var(--surface2); border:1.5px solid var(--border); border-radius:10px; padding:12px; font-size:13.5px; color:var(--text); outline:none; resize:vertical; line-height:1.5;">${g(a.bio||"")}</textarea>
      </div>

      <!-- Eğitim ve Deneyim Detayları -->
      <div style="display:grid; grid-template-columns:1fr 1fr; gap:16px;">
        <div>
          <label style="display:block; font-size:11px; font-weight:700; color:var(--text-mid); margin-bottom:6px; text-transform:uppercase; letter-spacing:.5px;">Eğitim Detayları</label>
          <textarea id="cpEducation" oninput="updateProfilePreview()" placeholder="Eğitim geçmişiniz..." style="width:100%; min-height:90px; background:var(--surface2); border:1.5px solid var(--border); border-radius:10px; padding:10px; font-size:13px; color:var(--text); outline:none; resize:vertical; line-height:1.4;">${g(a.education||"")}</textarea>
        </div>
        <div>
          <label style="display:block; font-size:11px; font-weight:700; color:var(--text-mid); margin-bottom:6px; text-transform:uppercase; letter-spacing:.5px;">Deneyim &amp; Sertifikalar</label>
          <textarea id="cpExperience" oninput="updateProfilePreview()" placeholder="Derece koçluk deneyimleriniz..." style="width:100%; min-height:90px; background:var(--surface2); border:1.5px solid var(--border); border-radius:10px; padding:10px; font-size:13px; color:var(--text); outline:none; resize:vertical; line-height:1.4;">${g(a.experience||"")}</textarea>
        </div>
      </div>
    `,reviews:()=>`
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:16px; padding-bottom:10px; border-bottom:1px solid var(--border);">
        <h3 style="font-size:15px; font-weight:800; color:var(--text); margin:0;">💬 Öğrenci &amp; Veli Yorumları (Sosyal Kanıt)</h3>
        <button type="button" class="btn btn-ghost btn-xs" onclick="addCoachReviewItem()" style="padding:4px 10px; font-size:11.5px;">+ Yorum Ekle</button>
      </div>
      <p style="font-size:12.5px; color:var(--text-dim); margin-bottom:14px;">
        Dereceye giren öğrencilerinizin veya velilerinizin gerçek dönüşüm yorumlarını ekleyin.
      </p>
      <div id="cpReviewsContainer" style="display:flex; flex-direction:column; gap:10px;"></div>
    `,faq:()=>`
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:16px; padding-bottom:10px; border-bottom:1px solid var(--border);">
        <h3 style="font-size:15px; font-weight:800; color:var(--text); margin:0;">❓ Sıkça Sorulan Sorular (SSS)</h3>
        <div style="display:flex; gap:6px;">
          <button type="button" id="cpAiFaqBtn" class="btn btn-ghost btn-xs" onclick="generateCoachFaq()" style="gap:5px; padding:4px 10px; font-size:11.5px;">🤖 AI ile SSS Üret</button>
          <button type="button" class="btn btn-ghost btn-xs" onclick="addCoachFaqItem()" style="padding:4px 10px; font-size:11.5px;">+ Soru Ekle</button>
        </div>
      </div>
      <p style="font-size:12.5px; color:var(--text-dim); margin-bottom:14px;">
        Öğrencilerin aklındaki soruları yanıtlayarak başvuru oranını artırın.
      </p>
      <div id="cpFaqContainer" style="display:flex; flex-direction:column; gap:10px;"></div>
    `,sticky_cta:()=>`
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:16px; padding-bottom:10px; border-bottom:1px solid var(--border);">
        <h3 style="font-size:15px; font-weight:800; color:var(--text); margin:0;">🚀 Sabit Başvuru &amp; WhatsApp Barı</h3>
        <span style="font-size:11px; background:var(--accent-dim); color:var(--accent); font-weight:700; padding:2px 8px; border-radius:99px;">DÖNÜŞÜM BUTONU</span>
      </div>

      <div style="margin-bottom:18px;">
        <label style="display:block; font-size:11px; font-weight:700; color:var(--text-mid); margin-bottom:6px; text-transform:uppercase; letter-spacing:.5px;">WhatsApp Numarası <span style="font-weight:400; color:var(--text-dim)">(Anında iletişim ikonu için)</span></label>
        <input type="tel" id="cpWhatsapp" value="${g(a.whatsapp_number||"")}" placeholder="0 (5__) ___ __ __" oninput="updateProfilePreview()" style="width:100%; background:var(--surface2); border:1.5px solid var(--border); border-radius:9px; padding:10px 13px; font-size:13.5px; color:var(--text); outline:none;">
      </div>
      <div style="background:var(--accent-dim); border:1px solid rgba(240,98,54,0.3); border-radius:12px; padding:14px; font-size:12.5px; color:var(--text); line-height:1.5;">
        🔥 Bu buton vitrin sayfanızın en altında ekranın başparmak erişim alanında sabit kalır. Tıklandığında öğrenciye özel YKS ön başvuru modali açılır.
      </div>
    `},o=(i[e]||i.hero)();if(t.innerHTML=o,e==="stats")jn();else if(e==="reviews"){const s=Array.isArray(a.reviews)?a.reviews:[],r=document.getElementById("cpReviewsContainer");r&&(r.innerHTML="",s.length?s.forEach(l=>addCoachReviewItem(l.name,l.role,l.text,l.stars)):addCoachReviewItem())}else if(e==="faq"){const s=Array.isArray(a.faq)?a.faq:[],r=document.getElementById("cpFaqContainer");r&&(r.innerHTML="",s.length?s.forEach(l=>addCoachFaqItem(l.q,l.a)):addCoachFaqItem())}re()};window.setCoachProfileType=function(e){const t=window._coachProfileData=window._coachProfileData||{};t.profile_type=e;const n=document.getElementById("cpTypeStudentBtn"),a=document.getElementById("cpTypeProBtn"),i=document.getElementById("cpStudentFields"),o=document.getElementById("cpProFields"),s=e==="student";i&&(i.style.display=s?"grid":"none"),o&&(o.style.display=s?"none":"grid"),n&&(n.style.borderColor=s?"var(--accent)":"var(--border)",n.style.background=s?"var(--accent-dim)":"var(--surface2)",n.style.color=s?"var(--accent)":"var(--text)"),a&&(a.style.borderColor=s?"var(--border)":"var(--accent)",a.style.background=s?"var(--surface2)":"var(--accent-dim)",a.style.color=s?"var(--text)":"var(--accent)"),re()};const oa=["YKS","TYT","AYT","LGS","Sayısal","Eşit Ağırlık","Sözel","Dil","Matematik","Geometri","Fizik","Kimya","Biyoloji","Türkçe","Edebiyat","Tarih","Coğrafya"];function Pn(){var e;return(((e=document.getElementById("cpSubjects"))==null?void 0:e.value)||"").split(",").map(t=>t.trim()).filter(Boolean)}function ml(e){e.stopPropagation();const t=document.getElementById("cpTagDropdownMenu");if(!t)return;const n=t.style.display==="block";t.style.display=n?"none":"block"}window._tagDropdownListenerAdded||(document.addEventListener("click",e=>{const t=document.getElementById("cpTagDropdownMenu"),n=document.getElementById("cpTagSelectBox");t&&t.style.display==="block"&&n&&!n.contains(e.target)&&!t.contains(e.target)&&(t.style.display="none")}),window._tagDropdownListenerAdded=!0);function jn(){const e=document.getElementById("cpSelectedTags"),t=document.getElementById("cpDropdownPresets");if(!e||!t)return;const n=Pn();n.length===0?e.innerHTML='<span style="font-size:13px; color:var(--text-dim);">Etiket seçmek için tıklayın...</span>':e.innerHTML=n.map(i=>`
        <span style="display:inline-flex; align-items:center; gap:5px; background:var(--accent); color:#fff; padding:4px 10px; border-radius:99px; font-size:12px; font-weight:700;">
          ${g(i)}
          <span onclick="event.stopPropagation(); toggleCoachTag('${g(i).replace(/'/g,"\\'")}')" style="cursor:pointer; font-weight:800; font-size:10px; opacity:0.8; padding:0 2px;">✕</span>
        </span>
      `).join("");const a=n.filter(i=>!oa.includes(i));t.innerHTML=[...oa,...a].map(i=>{const o=n.includes(i);return`
      <button type="button" onclick="toggleCoachTag('${g(i).replace(/'/g,"\\'")}')"
        style="padding:6px 12px; border-radius:99px; font-size:12px; font-weight:700; cursor:pointer; transition:all .12s;
        border:1.5px solid ${o?"var(--accent)":"var(--border)"};
        background:${o?"var(--accent)":"var(--surface)"};
        color:${o?"#fff":"var(--text-mid)"};">
        ${o?"✓ ":""}${g(i)}
      </button>
    `}).join("")}function yi(e){const t=document.getElementById("cpSubjects");if(!t)return;let n=Pn();n=n.includes(e)?n.filter(a=>a!==e):[...n,e],t.value=n.join(", "),jn(),re()}function vi(){const e=document.getElementById("cpTagCustom");if(!e)return;const t=(e.value||"").trim();if(!t)return;const n=Pn();n.includes(t)||(document.getElementById("cpSubjects").value=[...n,t].join(", ")),e.value="",jn(),re()}window.toggleTagDropdown=ml;window.toggleCoachTag=yi;window.addCustomCoachTag=vi;async function gl(e){if(!e)return;if(!e.type.startsWith("image/"))return b("Lütfen bir görsel dosyası seçin");if(e.size>3*1024*1024)return b("Dosya 3 MB'den büyük — daha küçük bir görsel seçin");const t=document.getElementById("cpPhotoDropText"),n=document.getElementById("cpPhotoThumb");t&&(t.textContent="Yükleniyor…");try{e=await Ut(e);const a=(e.name.split(".").pop()||"jpg").toLowerCase().replace(/[^a-z0-9]/g,"")||"jpg",i=`${x.dbUser.id}/avatar_${Date.now()}.${a}`,{error:o}=await h.storage.from("coach-photos").upload(i,e,{upsert:!0,contentType:e.type});if(o)throw o;const{data:s}=h.storage.from("coach-photos").getPublicUrl(i),r=s==null?void 0:s.publicUrl;if(!r)throw new Error("URL alınamadı");document.getElementById("cpPhotoUrl").value=r,n&&(n.style.background=`url('${r}') center/cover`,n.textContent=""),t&&(t.textContent="Fotoğraf yüklendi ✓ — değiştirmek için tıkla"),re(),b("Fotoğraf yüklendi ✓")}catch(a){t&&(t.textContent="Yüklenemedi — tekrar dene"),b("Yükleme hatası: "+(a.message||a)+(String(a.message||"").includes("bucket")?" (migration_v26 çalıştırıldı mı?)":""))}}let Ce="",ra=null,Oe=!0;function fl(){const e=document.getElementById("cpSlug"),t=document.getElementById("cpSlugStatus");let n=(e.value||"").toLowerCase().replace(/ğ/g,"g").replace(/ü/g,"u").replace(/ş/g,"s").replace(/ı/g,"i").replace(/ö/g,"o").replace(/ç/g,"c").replace(/[^a-z0-9-]/g,"-").replace(/-+/g,"-");if(e.value=n,clearTimeout(ra),Oe=!1,!n||n===Ce){t.textContent="",Oe=!0;return}if(n.length<3){t.textContent="en az 3 karakter",t.style.color="var(--text-dim)";return}t.textContent="kontrol ediliyor…",t.style.color="var(--text-dim)",ra=setTimeout(async()=>{try{const{data:a,error:i}=await h.rpc("check_coach_slug",{p_slug:n});if(i){t.textContent="",Oe=!0;return}Oe=!!a,t.textContent=a?"✓ müsait — linki etkinleştirmek için Kaydet'e bas":"✗ bu link alınmış, başka dene",t.style.color=a?"var(--green)":"var(--red)"}catch{t.textContent="",Oe=!0}},450)}function Rn(){const e=window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1";return Ce?e?`${window.location.origin}/koc_bul.html?koc=${Ce}`:`${window.location.origin}/koc/${Ce}`:`${window.location.origin}/koc_bul.html?coach=${x.dbUser.id}`}function xi(){var t;const e=(((t=document.getElementById("cpSlug"))==null?void 0:t.value)||"").trim().toLowerCase();return e&&e!==(Ce||"")}function yl(){if(xi())return b("Yeni linki önce Kaydet'e basarak etkinleştir");navigator.clipboard.writeText(Rn()).then(()=>b("Link kopyalandı ✓")).catch(()=>b("Kopyalanamadı"))}function vl(e){var t;return e&&e.preventDefault(),xi()?(b("Yeni linki önce Kaydet'e basarak etkinleştir"),!1):((t=window._coachProfileData)==null?void 0:t.published)!==!0?(b('Henüz yayınlamadınız — sayfa herkese açık değil. Önce "Yayınla" butonuna basın.'),!1):(window.open(Rn(),"_blank"),!1)}function xl(){const e=document.getElementById("cpSlugBrowseBtn");e&&(e.href=Rn());const t=document.getElementById("cpSlugStatus");t&&Ce&&(t.textContent="✓ link aktif",t.style.color="var(--green)")}async function bl(){var o,s,r,l;const e=document.getElementById("cpAiBioBtn"),t=((o=x.dbUser)==null?void 0:o.full_name)||"Koç",n=((s=document.getElementById("cpSubjects"))==null?void 0:s.value)||"",a=((r=document.getElementById("cpEducation"))==null?void 0:r.value)||"",i=((l=document.getElementById("cpExperience"))==null?void 0:l.value)||"";if(!n&&!a&&!i)return pe("AI'nın malzemeye ihtiyacı var — önce uzmanlık, eğitim veya deneyim alanlarından en az birini doldur.");e&&(e.disabled=!0,e.textContent="🤖 Yazıyor…");try{const c=await fetch("/api/ai-chat",{method:"POST",headers:await _t(),body:JSON.stringify({userRole:"coach",messages:[{role:"user",content:`Koç Bul sayfamdaki kamuya açık profilim için "Hakkımda" biyografisi yaz.
Bilgilerim — İsim: ${t}. Uzmanlık: ${n||"-"}. Eğitim: ${a||"-"}. Deneyim/Başarılar: ${i||"-"}.
Kurallar: 1. tekil şahıs ("...yım/...yorum"), veli ve öğrenciye güven veren sıcak-profesyonel ton, 60-90 kelime, tek paragraf, emoji ve başlık YOK, abartılı/uydurma iddia YOK (sadece verdiğim bilgileri kullan). Yalnızca biyografi metnini yaz, başka hiçbir şey ekleme.`}]})}),d=await c.json();if(!c.ok||!d.reply)throw new Error(d.error||"Yanıt alınamadı");document.getElementById("cpBio").value=d.reply.trim().replace(/^["']|["']$/g,""),re(),b("Biyografi taslağı hazır — dilediğin gibi düzenleyebilirsin ✓")}catch(c){pe("AI biyografi üretilemedi: "+(c.message||c))}e&&(e.disabled=!1,e.textContent="🤖 AI ile Oluştur")}function pe(e){const t=document.getElementById("cpErr");if(!t)return b(e);t.textContent=e,t.style.display="block",t.scrollIntoView({behavior:"smooth",block:"center"}),setTimeout(()=>{t.style.display="none"},6e3)}function re(){var P;const e=document.getElementById("liveShowcasePreview");if(!e)return;const t=window._coachProfileData=window._coachProfileData||{};document.getElementById("cpPhotoUrl")&&(t.photo_url=document.getElementById("cpPhotoUrl").value.trim()),document.getElementById("cpSubjects")&&(t.subjects=document.getElementById("cpSubjects").value.trim()),document.getElementById("cpBio")&&(t.bio=document.getElementById("cpBio").value.trim()),document.getElementById("cpEducation")&&(t.education=document.getElementById("cpEducation").value.trim()),document.getElementById("cpExperience")&&(t.experience=document.getElementById("cpExperience").value.trim()),document.getElementById("cpInstagram")&&(t.instagram=document.getElementById("cpInstagram").value.trim()),document.getElementById("cpLinkedin")&&(t.linkedin=document.getElementById("cpLinkedin").value.trim()),document.getElementById("cpHeadline")&&(t.headline=document.getElementById("cpHeadline").value.trim()),document.getElementById("cpCapacity")&&(t.capacity_left=document.getElementById("cpCapacity").value.trim()),document.getElementById("cpPricingText")&&(t.pricing_text=document.getElementById("cpPricingText").value.trim()),document.getElementById("cpWhatsapp")&&(t.whatsapp_number=document.getElementById("cpWhatsapp").value.trim()),document.getElementById("cpYksRank")&&(t.yks_rank=document.getElementById("cpYksRank").value.trim()),document.getElementById("cpUniversity")&&(t.university=document.getElementById("cpUniversity").value.trim()),document.getElementById("cpProfession")&&(t.profession=document.getElementById("cpProfession").value.trim()),document.getElementById("cpExpYears")&&(t.experience_years=document.getElementById("cpExpYears").value.trim());const n=t.photo_url||"";t.subjects;const a=t.bio||"";t.education,t.experience;const i=t.instagram||"";t.linkedin;const o=t.headline||"",s=t.capacity_left||"",r=t.pricing_text||"",l=t.whatsapp_number||"",c=t.yks_rank||"",d=t.university||"",m=t.profession||"",u=t.experience_years||"",v=((P=x.dbUser)==null?void 0:P.full_name)||"Koç İsmi",f=v.split(" ").map(D=>D[0]).join("").slice(0,2).toUpperCase(),k=n?`<div style="width:68px;height:68px;border-radius:50%;background:url('${g(n)}') center/cover;flex-shrink:0;border:2px solid rgba(255,255,255,0.2);position:relative;"><span style="position:absolute;bottom:0;right:0;width:11px;height:11px;border-radius:50%;background:#10B981;border:2px solid #09090B;"></span></div>`:`<div style="width:68px;height:68px;border-radius:50%;background:linear-gradient(135deg,#F06236,#FF7547);color:#fff;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:800;flex-shrink:0;border:2px solid rgba(255,255,255,0.2);position:relative;">${g(f)}<span style="position:absolute;bottom:0;right:0;width:11px;height:11px;border-radius:50%;background:#10B981;border:2px solid #09090B;"></span></div>`;let y="",$="";c||d?(y=c?`🏆 YKS ${c}`:`🎓 ${d||"YKS Derece Koçu"}`,$=d||o||"YKS Derece & Başarı Koçu 🚀"):m||u?(y=m?`💼 ${m}`:`🏅 ${u} Deneyim`,$=u||o||"Eğitim & PDR Danışmanı 🚀"):(y="🎓 YKS Uzman Koç",$=o||"YKS Başarı & Rehberlik Koçu 🚀");const w=[];c&&w.push({ico:"🏆",t:`YKS: ${c}`,hl:!0}),m&&w.push({ico:"💼",t:m,hl:!0}),d&&w.push({ico:"🎓",t:d.slice(0,24)}),r&&w.push({ico:"🏷️",t:r}),s!==""&&w.push({ico:"⚡",t:`Son ${s} Kontenjan`,scarce:!0});const I=w.map(D=>`
    <div style="flex-shrink:0; display:inline-flex; align-items:center; gap:4px; background:${D.hl?"rgba(240,98,54,0.12)":D.scarce?"rgba(239,68,68,0.1)":"#121215"}; border:1px solid ${D.hl?"rgba(240,98,54,0.35)":D.scarce?"rgba(239,68,68,0.35)":"rgba(255,255,255,0.08)"}; border-radius:10px; padding:5px 9px; font-size:10px; font-weight:700; color:${D.scarce?"#EF4444":D.hl?"#F06236":"#FAFAFA"};">
      <span>${D.ico}</span>
      <span>${g(D.t)}</span>
    </div>
  `).join(""),T=Array.from(document.querySelectorAll("#cpReviewsContainer .cp-review-item")).map(D=>{var _,L,j;return{name:((_=D.querySelector(".cpr-name"))==null?void 0:_.value.trim())||"",role:((L=D.querySelector(".cpr-role"))==null?void 0:L.value.trim())||"",text:((j=D.querySelector(".cpr-text"))==null?void 0:j.value.trim())||""}}).filter(D=>D.name||D.text),B=Array.from(document.querySelectorAll("#cpFaqContainer .cp-faq-item")).map(D=>{var _,L;return{q:((_=D.querySelector(".cpf-q"))==null?void 0:_.value.trim())||"",a:((L=D.querySelector(".cpf-a"))==null?void 0:L.value.trim())||""}}).filter(D=>D.q&&D.a),S=Array.from(document.querySelectorAll("#cpBlocksContainer .cp-block-row")),M=S.length?S.map(D=>{var _;return{id:D.dataset.id,enabled:((_=D.querySelector(".cp-block-toggle"))==null?void 0:_.checked)??!0}}):[{id:"hero",enabled:!0},{id:"stats",enabled:!0},{id:"value_props",enabled:!0},{id:"tabs_about",enabled:!0},{id:"reviews",enabled:!0},{id:"faq",enabled:!0},{id:"sticky_cta",enabled:!0}],E={hero:()=>`
      <div style="display:flex; gap:10px; align-items:flex-start; background:#121215; border:1px solid rgba(255,255,255,0.08); border-radius:14px; padding:12px; margin-bottom:10px;">
        ${k}
        <div style="min-width:0; flex:1;">
          <div style="display:flex; align-items:center; gap:4px; flex-wrap:wrap;">
            <b style="font-size:14px; font-weight:800; color:#FAFAFA;">${g(v)}</b>
            <span style="font-size:8.5px; background:#10B981; color:#fff; font-weight:800; padding:1px 5px; border-radius:99px;">${g(y||"✓ Onaylı")}</span>
          </div>
          <div style="font-size:10.5px; color:#A1A1AA; margin-top:2px; line-height:1.3;">${g($)}</div>
          <div style="display:flex; gap:4px; flex-wrap:wrap; margin-top:6px;">
            ${i?`<span style="font-size:9px; color:#F06236; background:rgba(240,98,54,0.12); padding:2px 6px; border-radius:99px; font-weight:700;">📸 @${g(i)}</span>`:""}
            ${l?'<span style="font-size:9px; color:#10B981; background:rgba(16,185,129,0.12); padding:2px 6px; border-radius:99px; font-weight:700;">💬 WhatsApp Aktif</span>':""}
          </div>
        </div>
      </div>`,stats:()=>I?`<div style="display:flex; gap:6px; overflow-x:auto; margin-bottom:10px; padding-bottom:2px;">${I}</div>`:"",value_props:()=>`
      <div style="background:#121215; border:1px solid rgba(255,255,255,0.08); border-radius:14px; padding:12px; margin-bottom:10px;">
        <b style="font-size:10.5px; font-weight:800; color:#FAFAFA; display:block; margin-bottom:8px; text-transform:uppercase; letter-spacing:0.3px;">Neden ${g(v.split(" ")[0])}?</b>
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:6px;">
          <div style="background:#18181B; border:1px solid rgba(255,255,255,0.05); border-radius:8px; padding:6px; font-size:9.5px; color:#FAFAFA;">🎯 <b>Kişiye Özel Plan</b></div>
          <div style="background:#18181B; border:1px solid rgba(255,255,255,0.05); border-radius:8px; padding:6px; font-size:9.5px; color:#FAFAFA;">📊 <b>Gelişim Takibi</b></div>
          <div style="background:#18181B; border:1px solid rgba(255,255,255,0.05); border-radius:8px; padding:6px; font-size:9.5px; color:#FAFAFA;">🤖 <b>7/24 AI Asistanı</b></div>
          <div style="background:#18181B; border:1px solid rgba(255,255,255,0.05); border-radius:8px; padding:6px; font-size:9.5px; color:#FAFAFA;">💬 <b>Birebir Görüşme</b></div>
        </div>
      </div>`,tabs_about:()=>`
      <div style="background:#121215; border:1px solid rgba(255,255,255,0.08); border-radius:14px; padding:12px; margin-bottom:10px; font-size:11px; line-height:1.5;">
        <b style="font-size:9.5px; text-transform:uppercase; color:#F06236; letter-spacing:0.3px; display:block; margin-bottom:4px;">Biyografi &amp; Uzmanlık</b>
        <div style="color:#FAFAFA;">${g(a||"Biyografi henüz girilmedi.").replace(/\n/g,"<br>")}</div>
      </div>`,reviews:()=>T.length?`
      <div style="background:#121215; border:1px solid rgba(255,255,255,0.08); border-radius:14px; padding:12px; margin-bottom:10px;">
        <b style="font-size:10.5px; font-weight:800; color:#FAFAFA; display:block; margin-bottom:8px;">Danışan Görüşleri</b>
        ${T.map(D=>`
          <div style="background:#18181B; border:1px solid rgba(255,255,255,0.05); border-radius:8px; padding:8px; margin-bottom:6px; font-size:10px;">
            <div style="color:#f0a500; font-size:8.5px;">★★★★★</div>
            <div style="font-style:italic; margin:2px 0; color:#FAFAFA;">"${g(D.text)}"</div>
            <div style="font-weight:800; color:#F06236; font-size:9px;">🎓 ${g(D.name)} ${D.role?`· ${g(D.role)}`:""}</div>
          </div>
        `).join("")}
      </div>`:"",faq:()=>B.length?`
      <div style="background:#121215; border:1px solid rgba(255,255,255,0.08); border-radius:14px; padding:12px; margin-bottom:10px;">
        <b style="font-size:10.5px; font-weight:800; color:#FAFAFA; display:block; margin-bottom:8px;">Sıkça Sorulan Sorular</b>
        ${B.map(D=>`
          <div style="border-bottom:1px solid rgba(255,255,255,0.05); padding:4px 0; font-size:10px;">
            <b style="color:#FAFAFA; display:block;">📌 ${g(D.q)}</b>
            <div style="color:#A1A1AA; font-size:9.5px; margin-top:2px;">${g(D.a)}</div>
          </div>
        `).join("")}
      </div>`:"",sticky_cta:()=>`
      <div style="background:linear-gradient(135deg, #F06236, #FF7547); color:#fff; font-weight:800; font-size:11.5px; text-align:center; padding:10px; border-radius:12px; box-shadow:0 4px 16px rgba(240,98,54,0.45);">
        🔥 Ücretsiz Tanışma &amp; Başvuru Yap →
      </div>`},A=M.filter(D=>D.enabled!==!1&&E[D.id]).map(D=>E[D.id]()).join("");e.innerHTML=`
    <!-- Top Header -->
    <div style="font-size:8.5px; font-weight:800; color:#F06236; text-align:center; padding:5px 0; background:rgba(240,98,54,0.08); border-radius:0 0 8px 8px; margin-bottom:10px; text-transform:uppercase; letter-spacing:0.4px;">
      🎓 Rostrum · Doğrulanmış Uzman
    </div>

    ${A}
  `}window.updateProfilePreview=re;function hl(e){const t=document.getElementById("btn-prev-bio"),n=document.getElementById("btn-prev-edu"),a=document.getElementById("btn-prev-exp");t&&t.classList.toggle("active",e==="bio"),n&&n.classList.toggle("active",e==="edu"),a&&a.classList.toggle("active",e==="exp"),re()}function kl(e){return e.replace(/\n/g,"<br>")}window.addCoachReviewItem=function(e="",t="",n="",a=5){const i=document.getElementById("cpReviewsContainer");if(!i)return;const o=document.createElement("div");o.className="cp-review-item",o.style.cssText="background:var(--surface2); border:1px solid var(--border); border-radius:10px; padding:12px; display:flex; flex-direction:column; gap:8px; position:relative;",o.innerHTML=`
    <button type="button" onclick="this.parentElement.remove(); updateProfilePreview();" style="position:absolute; top:8px; right:8px; background:none; border:none; color:var(--red); font-size:14px; cursor:pointer;" title="Sil">✕</button>
    <div style="display:grid; grid-template-columns:1fr 1fr; gap:8px;">
      <input type="text" class="cpr-name" placeholder="Öğrenci Adı (Örn: Zeynep T.)" value="${g(e)}" oninput="updateProfilePreview()" style="background:var(--surface); border:1px solid var(--border); border-radius:7px; padding:6px 10px; font-size:12.5px; color:var(--text);">
      <input type="text" class="cpr-role" placeholder="Profil (Örn: YKS Sayısal)" value="${g(t)}" oninput="updateProfilePreview()" style="background:var(--surface); border:1px solid var(--border); border-radius:7px; padding:6px 10px; font-size:12.5px; color:var(--text);">
    </div>
    <textarea class="cpr-text" placeholder="Öğrencinin yorumu ve başarı hikayesi..." oninput="updateProfilePreview()" style="width:100%; min-height:48px; background:var(--surface); border:1px solid var(--border); border-radius:7px; padding:6px 10px; font-size:12.5px; color:var(--text); resize:vertical;">${g(n)}</textarea>
  `,i.appendChild(o),re()};window.addCoachFaqItem=function(e="",t=""){const n=document.getElementById("cpFaqContainer");if(!n)return;const a=document.createElement("div");a.className="cp-faq-item",a.style.cssText="background:var(--surface2); border:1px solid var(--border); border-radius:10px; padding:12px; display:flex; flex-direction:column; gap:6px; position:relative;",a.innerHTML=`
    <button type="button" onclick="this.parentElement.remove(); updateProfilePreview();" style="position:absolute; top:8px; right:8px; background:none; border:none; color:var(--red); font-size:14px; cursor:pointer;" title="Sil">✕</button>
    <input type="text" class="cpf-q" placeholder="Soru (Örn: Görüşmeler nasıl yapılıyor?)" value="${g(e)}" oninput="updateProfilePreview()" style="background:var(--surface); border:1px solid var(--border); border-radius:7px; padding:6px 10px; font-size:12.5px; color:var(--text); font-weight:700;">
    <textarea class="cpf-a" placeholder="Cevap açıklaması..." oninput="updateProfilePreview()" style="width:100%; min-height:48px; background:var(--surface); border:1px solid var(--border); border-radius:7px; padding:6px 10px; font-size:12.5px; color:var(--text); resize:vertical;">${g(t)}</textarea>
  `,n.appendChild(a),re()};const wl=[{key:"hero",label:"HERO",ids:["hero"]},{key:"trust",label:"TRUST",ids:["stats"]},{key:"about",label:"ABOUT",ids:["value_props","tabs_about"]},{key:"social",label:"SOCIAL PROOF",ids:["reviews"]},{key:"faq",label:"FAQ",ids:["faq"]},{key:"conversion",label:"CONVERSION",ids:["sticky_cta"]}],bi=["hero","tabs_about","sticky_cta"],hi=["hero","stats","value_props","tabs_about","reviews","faq","sticky_cta"];window.renderCoachBlocksManager=function(e){const t=document.getElementById("cpBlocksContainer");if(!t)return;const n=[{id:"hero",name:"Profil & YKS Ünvan (Hero)",enabled:!0},{id:"stats",name:"YKS Başarı & Stat Çipleri",enabled:!0},{id:"value_props",name:"Neden Benimle Çalışmalısın?",enabled:!0},{id:"tabs_about",name:"Biyografi, Eğitim & Derece",enabled:!0},{id:"reviews",name:"Öğrenci & Veli Yorumları",enabled:!0},{id:"faq",name:"Sıkça Sorulan Sorular (SSS)",enabled:!0},{id:"sticky_cta",name:"Sabit Başvuru & WhatsApp Barı",enabled:!0}],a=Array.isArray(e)&&e.length?e:n;t.innerHTML="";const i=(l,c)=>{var v;const d=(window._activeStudioBlockId||"hero")===l.id,m=bi.includes(l.id),u=document.createElement("div");return u.className="cp-block-row",u.draggable=!0,u.dataset.id=l.id,u.dataset.name=l.name||((v=n.find(f=>f.id===l.id))==null?void 0:v.name)||l.id,u.style.cssText=`background:${d?"var(--accent-dim)":"var(--surface2)"}; border:1.5px solid ${d?"var(--accent)":"var(--border)"}; border-radius:10px; padding:9px 10px; display:flex; align-items:flex-start; justify-content:space-between; gap:8px; font-size:12px; cursor:pointer; transition:background .15s,border-color .15s;`,u.onclick=f=>{f.target.closest("button")||f.target.closest("input")||selectStudioBlock(l.id)},u.addEventListener("dragstart",f=>{window._studioDragId=l.id,u.style.opacity=".4",f.dataTransfer.effectAllowed="move"}),u.addEventListener("dragend",()=>{u.style.opacity=""}),u.addEventListener("dragover",f=>{f.preventDefault(),f.dataTransfer.dropEffect="move",u.style.borderColor="var(--accent)"}),u.addEventListener("dragleave",()=>{u.style.borderColor=d?"var(--accent)":"var(--border)"}),u.addEventListener("drop",f=>{f.preventDefault(),u.style.borderColor=d?"var(--accent)":"var(--border)";const k=window._studioDragId;if(!k||k===l.id)return;const y=t.querySelector(`.cp-block-row[data-id="${k}"]`);if(!y)return;const $=Array.from(t.querySelectorAll(".cp-block-row")),w=$.indexOf(y),I=$.indexOf(u);w<I?u.after(y):u.before(y),re()}),u.innerHTML=`
      <span style="color:var(--text-dim); cursor:grab; font-size:13px; padding-top:1px; flex-shrink:0;" title="Sürükleyerek sırala">⠿</span>
      <div style="flex:1; min-width:0;">
        <label style="display:flex; align-items:flex-start; gap:7px; font-weight:700; cursor:pointer; color:var(--text);" onclick="event.stopPropagation()">
          <input type="checkbox" class="cp-block-toggle" ${l.enabled!==!1?"checked":""} ${m?'disabled title="Bu blok sayfanın iskeletidir, kapatılamaz"':'onchange="updateProfilePreview()"'} style="accent-color:var(--accent); margin-top:2px; flex-shrink:0;">
          <span style="white-space:normal; word-break:break-word; line-height:1.35;">${g(u.dataset.name)}</span>
        </label>
      </div>
      <div style="display:flex; align-items:center; gap:2px; flex-shrink:0;">
        <button type="button" class="btn btn-ghost btn-xs" onclick="event.stopPropagation(); moveCoachBlock('${l.id}', -1)" ${c===0?"disabled":""} style="padding:2px 4px; font-size:10px;" title="Yukarı Taşı">▲</button>
        <button type="button" class="btn btn-ghost btn-xs" onclick="event.stopPropagation(); moveCoachBlock('${l.id}', 1)" ${c===a.length-1?"disabled":""} style="padding:2px 4px; font-size:10px;" title="Aşağı Taşı">▼</button>
        ${hi.includes(l.id)?"":`<button type="button" class="btn btn-ghost btn-xs" onclick="event.stopPropagation(); duplicateCoachBlock('${l.id}')" style="padding:2px 4px; font-size:10px;" title="Kopyala">📋</button>`}
        ${m?'<span style="padding:2px 4px; font-size:11px; color:var(--text-dim);" title="Sayfanın iskeletidir, kaldırılamaz">🔒</span>':`<button type="button" class="btn btn-ghost btn-xs" onclick="event.stopPropagation(); deleteCoachBlock('${l.id}')" style="padding:2px 4px; font-size:10px; color:var(--red);" title="Kaldır">🗑️</button>`}
      </div>
    `,u};let o=0;const s=new Set;wl.forEach(l=>{const c=a.filter(u=>l.ids.includes(u.id));if(!c.length)return;const d=document.createElement("div");d.innerHTML=`<div style="font-size:9.5px; font-weight:800; color:var(--text-dim); letter-spacing:.8px; margin-bottom:6px; padding-left:2px;">${l.label}</div>`;const m=document.createElement("div");m.style.cssText="display:flex; flex-direction:column; gap:6px;",c.forEach(u=>{m.appendChild(i(u,o)),s.add(u.id),o++}),d.appendChild(m),t.appendChild(d)});const r=a.filter(l=>!s.has(l.id));if(r.length){const l=document.createElement("div");l.innerHTML='<div style="font-size:9.5px; font-weight:800; color:var(--text-dim); letter-spacing:.8px; margin-bottom:6px; padding-left:2px;">ÖZEL BLOKLAR</div>';const c=document.createElement("div");c.style.cssText="display:flex; flex-direction:column; gap:6px;",r.forEach(d=>{c.appendChild(i(d,o)),o++}),l.appendChild(c),t.appendChild(l)}};window.moveCoachBlock=function(e,t){const n=document.getElementById("cpBlocksContainer");if(!n)return;const a=Array.from(n.querySelectorAll(".cp-block-row")),i=a.findIndex(s=>s.dataset.id===e);if(i<0)return;const o=i+t;o<0||o>=a.length||(t===-1?n.insertBefore(a[i],a[o]):n.insertBefore(a[o],a[i]),re())};window.duplicateCoachBlock=function(e){if(hi.includes(e)){b("Yerleşik bloklar çoğaltılamaz — bu sadece kendi eklediğiniz özel bloklar için.");return}const t=document.getElementById("cpBlocksContainer");if(!t)return;const n=Array.from(t.querySelectorAll(".cp-block-row")).map(r=>{var l;return{id:r.dataset.id,name:r.dataset.name,enabled:((l=r.querySelector(".cp-block-toggle"))==null?void 0:l.checked)??!0}}),a=n.findIndex(r=>r.id===e);if(a===-1)return;const i=n[a],o="custom_copy_"+Date.now().toString().slice(-6),s={id:o,name:i.name+" (Kopya)",enabled:i.enabled};n.splice(a+1,0,s),window._activeStudioBlockId=o,renderCoachBlocksManager(n),selectStudioBlock(o)};window.deleteCoachBlock=function(e){if(bi.includes(e)){b("Bu blok sayfanın iskeletidir, kaldırılamaz — sadece gizleyebilirsiniz.");return}const t=document.getElementById("cpBlocksContainer");if(!t)return;const n=t.querySelector(`.cp-block-row[data-id="${e}"]`);n&&(n.remove(),re())};window.addCustomStudioBlock=function(){const e=prompt("Yeni blok başlığını girin:","Özel Sertifikalar & Başarılar");if(!e||!e.trim())return;const t=document.getElementById("cpBlocksContainer");if(!t)return;const n="custom_"+Date.now().toString().slice(-6),a=document.createElement("div");a.className="cp-block-row",a.dataset.id=n,a.dataset.name=e.trim(),a.style.cssText="background:var(--surface2); border:1.5px solid var(--border); border-radius:10px; padding:9px 11px; display:flex; align-items:center; justify-content:space-between; font-size:12px; cursor:pointer; transition:all 0.15s;",a.onclick=i=>{i.target.closest("button")||i.target.closest("input")||selectStudioBlock(n)},a.innerHTML=`
    <div style="display:flex; align-items:center; gap:8px; min-width:0;">
      <span style="color:var(--text-dim); cursor:grab; font-size:13px;" title="Sıralama Tutamağı">☰</span>
      <label style="display:inline-flex; align-items:center; gap:6px; font-weight:700; cursor:pointer; color:var(--text); min-width:0;" onclick="event.stopPropagation()">
        <input type="checkbox" class="cp-block-toggle" checked onchange="updateProfilePreview()" style="accent-color:var(--accent);">
        <span style="white-space:nowrap; overflow:hidden; text-overflow:ellipsis; max-width:130px;">${g(e.trim())}</span>
      </label>
    </div>
    <div style="display:flex; align-items:center; gap:3px;">
      <button type="button" class="btn btn-ghost btn-xs" onclick="event.stopPropagation(); moveCoachBlock('${n}', -1)" style="padding:2px 5px; font-size:10px;" title="Yukarı Taşı">▲</button>
      <button type="button" class="btn btn-ghost btn-xs" onclick="event.stopPropagation(); moveCoachBlock('${n}', 1)" style="padding:2px 5px; font-size:10px;" title="Aşağı Taşı">▼</button>
      <button type="button" class="btn btn-ghost btn-xs" onclick="event.stopPropagation(); duplicateCoachBlock('${n}')" style="padding:2px 5px; font-size:10px;" title="Kopyala">📋</button>
      <button type="button" class="btn btn-ghost btn-xs" onclick="event.stopPropagation(); deleteCoachBlock('${n}')" style="padding:2px 5px; font-size:10px; color:var(--red);" title="Kaldır">🗑️</button>
    </div>
  `,t.appendChild(a),selectStudioBlock(n),re()};async function $l(e){var D,_,L,j,K,F,z,N,J,O,q,W,R,H,Y,Q;const t=x.dbUser.id,n=window._coachProfileData||{},a=(((D=document.getElementById("cpPhotoUrl"))==null?void 0:D.value)??n.photo_url??"").trim(),i=(((_=document.getElementById("cpBio"))==null?void 0:_.value)??n.bio??"").trim(),o=(((L=document.getElementById("cpSubjects"))==null?void 0:L.value)??n.subjects??"").trim(),s=(((j=document.getElementById("cpEducation"))==null?void 0:j.value)??n.education??"").trim(),r=(((K=document.getElementById("cpExperience"))==null?void 0:K.value)??n.experience??"").trim(),l=(((F=document.getElementById("cpInstagram"))==null?void 0:F.value)??n.instagram??"").trim(),c=(((z=document.getElementById("cpLinkedin"))==null?void 0:z.value)??n.linkedin??"").trim(),d=(((N=document.getElementById("cpSlug"))==null?void 0:N.value)??n.slug??"").trim(),m=(((J=document.getElementById("cpHeadline"))==null?void 0:J.value)??n.headline??"").trim(),u=(((O=document.getElementById("cpCapacity"))==null?void 0:O.value)??n.capacity_left??"").toString().trim(),v=u===""?null:Math.max(0,Math.min(999,parseInt(u)||0)),f=(((q=document.getElementById("cpWhatsapp"))==null?void 0:q.value)??n.whatsapp_number??"").trim(),k=(((W=document.getElementById("cpPricingText"))==null?void 0:W.value)??n.pricing_text??"").trim(),y=(((R=document.getElementById("cpYksRank"))==null?void 0:R.value)??n.yks_rank??"").trim(),$=(((H=document.getElementById("cpUniversity"))==null?void 0:H.value)??n.university??"").trim(),w=(((Y=document.getElementById("cpProfession"))==null?void 0:Y.value)??n.profession??"").trim(),I=(((Q=document.getElementById("cpExpYears"))==null?void 0:Q.value)??n.experience_years??"").trim(),T=document.getElementById("cpReviewsContainer"),B=T?Array.from(T.querySelectorAll(".cp-review-item")).map(U=>{var oe,Ee,ln;return{name:((oe=U.querySelector(".cpr-name"))==null?void 0:oe.value.trim())||"",role:((Ee=U.querySelector(".cpr-role"))==null?void 0:Ee.value.trim())||"",text:((ln=U.querySelector(".cpr-text"))==null?void 0:ln.value.trim())||"",stars:5}}).filter(U=>U.name||U.text):Array.isArray(n.reviews)?n.reviews:[],S=document.getElementById("cpFaqContainer"),M=S?Array.from(S.querySelectorAll(".cp-faq-item")).map(U=>{var oe,Ee;return{q:((oe=U.querySelector(".cpf-q"))==null?void 0:oe.value.trim())||"",a:((Ee=U.querySelector(".cpf-a"))==null?void 0:Ee.value.trim())||""}}).filter(U=>U.q&&U.a):Array.isArray(n.faq)?n.faq:[],E=Array.from(document.querySelectorAll("#cpBlocksContainer .cp-block-row")).map((U,oe)=>{var Ee;return{id:U.dataset.id,name:U.dataset.name,enabled:((Ee=U.querySelector(".cp-block-toggle"))==null?void 0:Ee.checked)??!0,order:oe+1}});if(e){if(!a)return pe("Profil fotoğrafı zorunlu — velilerin en çok baktığı güven sinyali.");if(!o)return pe("En az bir uzmanlık etiketi seç.");if(i.length<30)return pe('Biyografi en az 30 karakter olmalı — "AI ile Oluştur" butonunu kullanabilirsin.');if(!s)return pe("Eğitim bilgini gir (örn: Boğaziçi Üniversitesi - Psikolojik Danışmanlık veya Hacettepe Tıp).");if(!r)return pe("Deneyim/başarı bilgini gir (örn: YKS 2025 Sayısal 412.si veya 8 Yıl PDR Uzmanı).");if(!d||d.length<3)return pe("Yayınlamak için en az 3 karakterlik bir profil linki belirle.");if(!Oe)return pe("Bu profil linki alınmış — başka bir tane dene.")}else{if(d&&d.length<3)return pe("Profil linki en az 3 karakter olmalı.");if(d&&!Oe)return pe("Bu profil linki alınmış — başka bir tane dene.")}const A={id:t,bio:i,subjects:o,education:s,experience:r,photo_url:a,instagram:l,linkedin:c,slug:d||null,headline:m||null,capacity_left:v,whatsapp_number:f,pricing_text:k,reviews:B,faq:M,blocks:E,yks_rank:y||null,university:$||null,profession:w||null,experience_years:I||null,profile_type:n.profile_type==="professional"?"professional":"student",updated_at:new Date().toISOString()};e?A.published=!0:n.published!==!0&&(A.published=!1),localStorage.setItem(`coach_profile_${t}`,JSON.stringify(A));let{error:P}=await h.from("coach_profiles").upsert(A);if(P&&/column/i.test(P.message||"")){const{slug:U,headline:oe,capacity_left:Ee,whatsapp_number:ln,pricing_text:Ld,reviews:Pd,faq:jd,blocks:Rd,yks_rank:Nd,university:Hd,profession:Yd,experience_years:Kd,profile_type:Fd,published:Od,...Ki}=A;({error:P}=await h.from("coach_profiles").upsert(Ki)),P||b("Profil kaydedildi (Vitrin alanları yerel olarak güncellendi)")}if(P||(n.published=A.published!==void 0?A.published:n.published),P){if(/duplicate|unique/i.test(P.message||""))return pe("Bu profil linki az önce başkası tarafından alındı — farklı bir tane dene.");console.warn("Database save failed, profile saved locally in localStorage:",P),b("Profil yerel tarayıcıya kaydedildi (Veritabanı hatası: "+P.message+")")}else Ce=(d||"").toLowerCase(),xl(),b(e?"Profilin yayında! 🎉 Instagram bio linkine ekleyebilirsin.":"Taslak kaydedildi ✓")}async function Nn(){const e=document.getElementById("view-dev-matches");if(!e)return;e.innerHTML='<div class="loading">Eşleşmeler yükleniyor...</div>';const{data:t,error:n}=await h.from("match_requests").select("*, matched_coach:matched_coach_id(full_name, username)").order("created_at",{ascending:!1});if(n){e.innerHTML=`<div style="padding:20px;color:var(--red)">Eşleşme başvuruları yüklenirken hata oluştu: ${g(n.message)}</div>`;return}const a={pending:"⏳ Bekliyor",matched:"🤝 Eşleştirildi",completed:"✅ Tamamlandı"},i={pending:"rgba(240, 165, 0, 0.15)",matched:"rgba(96, 180, 255, 0.15)",completed:"rgba(62, 207, 142, 0.15)"},o={pending:"var(--accent)",matched:"var(--accent4)",completed:"var(--green)"};e.innerHTML=`
    <div class="card" style="margin-bottom:20px;">
      <h2 style="font-family:'Inter',sans-serif; margin-bottom: 6px;">🤝 Danışan Eşleşme Başvuruları</h2>
      <p style="font-size:13px; color:var(--text-mid); margin-bottom:15px;">
        Koç Bulucu (koc_bul.html) sayfası üzerinden gelen öğrencilerin koç eşleşme taleplerini buradan yönetebilirsiniz.
      </p>

      <div style="overflow-x:auto;">
        <table style="width:100%; border-collapse:collapse; font-size:13px; color:var(--text);">
          <thead>
            <tr style="border-bottom:1px solid var(--border); text-align:left;">
              <th style="padding:10px; font-size:11px; color:var(--text-mid);">ÖĞRENCİ BİLGİLERİ</th>
              <th style="padding:10px; font-size:11px; color:var(--text-mid);">SINAV / STİL</th>
              <th style="padding:10px; font-size:11px; color:var(--text-mid);">TALEP EDİLEN KOÇ</th>
              <th style="padding:10px; font-size:11px; color:var(--text-mid);">DURUM</th>
              <th style="padding:10px; font-size:11px; color:var(--text-mid);">TARİH</th>
              <th style="padding:10px; font-size:11px; color:var(--text-mid);">İŞLEMLER</th>
            </tr>
          </thead>
          <tbody>
            ${t.length===0?`
              <tr>
                <td colspan="6" style="padding:20px; text-align:center; color:var(--text-mid);">Henüz eşleşme başvurusu bulunmuyor.</td>
              </tr>
            `:t.map(s=>`
              <tr style="border-bottom:1px solid var(--border);">
                <td style="padding:10px;">
                  <div style="font-weight:700;">${g(s.student_name)}</div>
                  <div style="font-size:11px; color:var(--text-mid);">${g(s.email)}</div>
                  <div style="font-size:11px; color:var(--text-mid);">${g(s.phone||"—")}</div>
                </td>
                <td style="padding:10px;">
                  <span style="background:var(--accent-dim); color:var(--accent); font-size:11px; font-weight:700; padding:2px 8px; border-radius:12px;">${g(s.exam_profile)}</span>
                  <div style="font-size:11px; color:var(--text-mid); margin-top:4px;">Stil: ${g(s.style||"Belirtilmemiş")}</div>
                </td>
                <td style="padding:10px;">
                  ${s.matched_coach?`
                    <div style="font-weight:600; color:var(--accent2);">${g(s.matched_coach.full_name)}</div>
                    <div style="font-size:11px; color:var(--text-mid);">@${g(s.matched_coach.username)}</div>
                  `:'<span style="color:var(--text-dim);">Herhangi Biri</span>'}
                </td>
                <td style="padding:10px;">
                  <span style="background:${i[s.status]}; color:${o[s.status]}; font-size:11px; font-weight:700; padding:4px 10px; border-radius:99px; display:inline-block;">
                    ${a[s.status]||s.status}
                  </span>
                </td>
                <td style="padding:10px; font-size:11px; color:var(--text-mid);">
                  ${new Date(s.created_at).toLocaleDateString("tr-TR")}
                </td>
                <td style="padding:10px;">
                  <select onchange="updateMatchRequestStatus('${s.id}', this.value)" style="background:var(--surface3); border:1px solid var(--border); border-radius:6px; color:var(--text); padding:4px 8px; font-size:12px; outline:none; cursor:pointer;">
                    <option value="pending" ${s.status==="pending"?"selected":""}>⏳ Bekliyor</option>
                    <option value="matched" ${s.status==="matched"?"selected":""}>🤝 Eşleştirildi</option>
                    <option value="completed" ${s.status==="completed"?"selected":""}>✅ Tamamlandı</option>
                  </select>
                </td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>
    </div>
  `}async function _l(e,t){const{error:n}=await h.from("match_requests").update({status:t}).eq("id",e);n?b("Durum güncellenirken hata: "+n.message):(b("Durum güncellendi ✓"),Nn())}async function El(e){const t=p.students.find(s=>s.id===e);if(!t)return;const{data:n}=await h.from("student_speeds").select("*").eq("student_id",e),a={};(n||[]).forEach(s=>{a[`${s.exam_type}_${s.subject}`]=s.secs_per_question});const i=[{exam:"TYT",sub:"Matematik"},{exam:"TYT",sub:"Türkçe"},{exam:"TYT",sub:"Fizik"},{exam:"TYT",sub:"Kimya"},{exam:"TYT",sub:"Biyoloji"},{exam:"TYT",sub:"Geometri"},{exam:"AYT-SAY",sub:"Matematik"},{exam:"AYT-SAY",sub:"Fizik"},{exam:"AYT-SAY",sub:"Kimya"},{exam:"AYT-SAY",sub:"Biyoloji"}];let o=document.getElementById("speedModal");o||(o=document.createElement("div"),o.id="speedModal",o.className="modal-bg",document.body.appendChild(o),o.addEventListener("click",s=>{s.target===o&&o.classList.remove("open")})),o.innerHTML=`<div class="modal modal-lg">
    <button class="modal-close" onclick="cm('speedModal')">×</button>
    <h2>⚡ ${g(t.name)} — Soru Çözme Hızı</h2>
    <p style="font-size:13px;color:var(--text-mid);margin-bottom:16px">Her ders için öğrencinin soru başına harcadığı saniyeyi girin. Görev eklerken süre otomatik hesaplanır.</p>
    <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(180px,1fr));gap:10px">
      ${i.map(({exam:s,sub:r})=>{const l=`${s}_${r}`,c=a[l]||180,d=Math.floor(c/60);return`<div style="background:var(--surface2);border:1px solid var(--border);border-radius:10px;padding:12px">
          <div style="font-size:10px;font-weight:700;color:var(--accent);text-transform:uppercase;letter-spacing:.5px;margin-bottom:2px">${s}</div>
          <div style="font-size:13px;font-weight:700;margin-bottom:8px">${r}</div>
          <div style="display:flex;align-items:center;gap:6px">
            <input type="number" id="spd_${l}" value="${c}" min="10" max="600" step="5"
              style="width:70px;background:var(--surface3);border:1px solid var(--border);border-radius:6px;padding:5px 8px;font-size:13px;font-weight:700;color:var(--text);text-align:center">
            <span style="font-size:11px;color:var(--text-dim)">sn/soru</span>
          </div>
          <div style="font-size:10px;color:var(--text-dim);margin-top:4px">${d>0?d+"dk ":""}</div>
        </div>`}).join("")}
    </div>
    <button class="btn btn-accent" style="width:100%;justify-content:center;padding:12px;margin-top:16px" onclick="saveAllSpeeds('${e}')">Tümünü Kaydet</button>
  </div>`,V("speedModal")}async function Tl(e){const t=[{exam:"TYT",sub:"Matematik"},{exam:"TYT",sub:"Türkçe"},{exam:"TYT",sub:"Fizik"},{exam:"TYT",sub:"Kimya"},{exam:"TYT",sub:"Biyoloji"},{exam:"TYT",sub:"Geometri"},{exam:"AYT-SAY",sub:"Matematik"},{exam:"AYT-SAY",sub:"Fizik"},{exam:"AYT-SAY",sub:"Kimya"},{exam:"AYT-SAY",sub:"Biyoloji"}];for(const{exam:n,sub:a}of t){const i=`${n}_${a}`,o=document.getElementById("spd_"+i);if(!o)continue;const s=parseInt(o.value)||180;await Ca(e,n,a,s)}Z("speedModal"),b("Hız ayarları kaydedildi ✓")}async function Sl(e){const t=p.students.find(o=>o.id===e);if(!t)return;const{data:n}=await h.from("student_notes").select("notes").eq("coach_id",x.coachId).eq("student_id",e).maybeSingle(),a=(n==null?void 0:n.notes)||"";let i=document.getElementById("studentNotesModal");i||(i=document.createElement("div"),i.id="studentNotesModal",i.className="modal-bg",document.body.appendChild(i),i.addEventListener("click",o=>{o.target===i&&i.classList.remove("open")})),i.innerHTML=`<div class="modal">
    <button class="modal-close" onclick="cm('studentNotesModal')">×</button>
    <h2>📝 ${g(t.name)} — Notlar</h2>
    <p style="font-size:13px;color:var(--text-mid);margin-bottom:16px">Öğrenciyle ilgili gözlemler, önemli bilgiler, hatırlatmalar…</p>
    <div class="field">
      <textarea id="studentNoteText" style="min-height:260px;font-size:13px;line-height:1.7;resize:vertical" placeholder="Örnek: Türkçe paragrafta hız sorunu var. Veli baskılı, motivasyon takip edilmeli. Son denemede geometri 4 yanlış...">${g(a)}</textarea>
    </div>
    <button class="btn btn-accent" style="width:100%;justify-content:center;padding:12px;margin-top:4px" onclick="saveStudentNote('${e}')">Kaydet</button>
  </div>`,V("studentNotesModal")}async function Il(e){const t=document.getElementById("studentNoteText").value,{error:n}=await h.from("student_notes").upsert({coach_id:x.coachId,student_id:e,notes:t,updated_at:new Date().toISOString()},{onConflict:"coach_id,student_id"});if(n){b("Not kaydedilemedi: "+n.message);return}b("Not kaydedildi ✓"),Z("studentNotesModal")}function zl(e){let t=document.getElementById("reportModal");t||(t=document.createElement("div"),t.id="reportModal",t.className="modal-bg",t.innerHTML=`<div class="modal">
      <button class="modal-close" onclick="cm('reportModal')">×</button>
      <h2>📄 Performans Raporu</h2>
      <input type="hidden" id="rpStuId">
      <div class="field"><label>Dönem</label>
        <select id="rpPeriod">
          <option value="weekly">Bu Hafta</option>
          <option value="monthly" selected>Bu Ay</option>
          <option value="custom">Tarih Aralığı</option>
        </select>
      </div>
      <div id="rpCustomDates" style="display:none">
        <div class="field-row">
          <div class="field"><label>Başlangıç</label><input type="date" id="rpStart"></div>
          <div class="field"><label>Bitiş</label><input type="date" id="rpEnd"></div>
        </div>
      </div>
      <div class="field"><label>Koç Notu (isteğe bağlı)</label>
        <textarea id="rpNote" placeholder="Bu dönem için genel değerlendirmenizi yazın..." style="min-height:90px"></textarea>
      </div>
      <div style="display:flex;flex-direction:column;gap:8px;margin-top:12px">
        <div style="display:flex;gap:8px">
          <button class="btn btn-ghost" style="flex:1;justify-content:center" onclick="previewReport()">👁 Önizle</button>
          <button class="btn btn-accent" style="flex:1;justify-content:center" onclick="generatePDF()">⬇️ PDF İndir</button>
        </div>
        <button class="btn btn-ghost" style="width:100%;justify-content:center;background:#25d366;color:#fff;border:none;gap:6px" onclick="sendWhatsAppReport()">💬 Veliye WhatsApp Gönder</button>
        <button class="btn btn-ghost" style="width:100%;justify-content:center;background:#0d9488;color:#fff;border:none;gap:6px" onclick="sendParentEmailReport()">✉️ Veliye E-Posta Gönder</button>
        <button class="btn btn-ghost" style="width:100%;justify-content:center;background:var(--surface3);color:var(--text);border:1px solid var(--border);gap:6px" onclick="archivePerformanceReport()">💾 Raporu Sisteme Kaydet (Arşivle)</button>
      </div>
    </div>`,document.body.appendChild(t),t.addEventListener("click",i=>{i.target===t&&t.classList.remove("open")}),document.getElementById("rpPeriod").addEventListener("change",function(){document.getElementById("rpCustomDates").style.display=this.value==="custom"?"":"none"})),document.getElementById("rpStuId").value=e;const n=new Date,a=new Date(n.getFullYear(),n.getMonth(),1);document.getElementById("rpStart").value=G(a),document.getElementById("rpEnd").value=G(n),document.getElementById("rpNote").value="",V("reportModal")}function Hn(){const e=document.getElementById("rpPeriod").value,t=new Date;if(e==="weekly"){const n=ae(0,0);return{start:G(n),end:G(ee(n,6))}}else return e==="monthly"?{start:G(new Date(t.getFullYear(),t.getMonth(),1)),end:G(t)}:{start:document.getElementById("rpStart").value,end:document.getElementById("rpEnd").value}}function Yn(e,t=!1){var T,B,S,M;const n=p.students.find(E=>E.id===e);if(!n)return"";const{start:a,end:i}=Hn(),o=document.getElementById("rpNote").value.trim(),s=((T=p.workspace)==null?void 0:T.brand_name)||"Rostrum Akademi",r=((B=p.workspace)==null?void 0:B.brand_color)||"#E8613A",l=((S=x.dbUser)==null?void 0:S.full_name)||"Koç",c=[],d=new Date(a);for(;G(d)<=i;){const E=`${e}_${G(d)}`;(p.tasks[E]||[]).forEach(A=>c.push({...A,date:G(d)})),d.setDate(d.getDate()+1)}const m=c.length,u=c.filter(E=>E.done).length,v=m>0?Math.round(u/m*100):0,f=c.filter(E=>E.done).reduce((E,A)=>E+Number(A.duration||0),0),k={};c.forEach(E=>{const A=E.subject||"Diğer";k[A]||(k[A]={total:0,done:0}),k[A].total++,E.done&&k[A].done++});const y=p.exams.filter(E=>E.studentId===e&&E.date>=a&&E.date<=i).sort((E,A)=>E.date.localeCompare(A.date)),$=p.appointments.filter(E=>E.studentId===e&&E.date>=a&&E.date<=i).sort((E,A)=>E.date.localeCompare(A.date)),w=`${new Date(a+"T12:00").toLocaleDateString("tr-TR",{day:"numeric",month:"long",year:"numeric"})} – ${new Date(i+"T12:00").toLocaleDateString("tr-TR",{day:"numeric",month:"long",year:"numeric"})}`;let I="";if(y.length>1){const E=Math.max(...y.map(_=>(EXAM_DEFS[_.type]||[]).reduce((L,j)=>{var K;return L+Number(((K=_.nets)==null?void 0:K[j])||0)},0)),1),A=400,P=80,D=Math.min(40,(A-20)/y.length-4);I=`<svg width="${A}" height="${P+30}" style="overflow:visible">
      ${y.map((_,L)=>{const j=(EXAM_DEFS[_.type]||[]).reduce((z,N)=>{var J;return z+Number(((J=_.nets)==null?void 0:J[N])||0)},0),K=Math.max(Math.round(j/E*(P-10)),4),F=10+L*((A-20)/y.length);return`<rect x="${F}" y="${P-K}" width="${D}" height="${K}" rx="3" fill="${r}" opacity="0.85"/>
          <text x="${F+D/2}" y="${P-K-4}" text-anchor="middle" font-size="10" fill="#333">${j.toFixed(0)}</text>
          <text x="${F+D/2}" y="${P+14}" text-anchor="middle" font-size="9" fill="#666">${g(_.name.replace("Deneme","").replace("TYT","").replace("AYT","").trim()||String(L+1))}</text>`}).join("")}
    </svg>`}return`<!DOCTYPE html>
<html lang="tr">
<head>
<meta charset="UTF-8">
<style>
  *{margin:0;padding:0;box-sizing:border-box;}
  body{font-family:'Segoe UI',Arial,sans-serif;color:#1a1a1a;background:#fff;font-size:13px;line-height:1.5;}
  .page{max-width:800px;margin:0 auto;padding:${t?"30px":"20px 30px"};}
  .header{display:flex;justify-content:space-between;align-items:flex-start;padding-bottom:18px;border-bottom:3px solid ${r};margin-bottom:24px;}
  .brand{font-size:22px;font-weight:800;color:${r};letter-spacing:-0.5px;}
  .brand-sub{font-size:11px;color:#888;margin-top:3px;}
  .report-title{text-align:right;}
  .report-title h1{font-size:18px;font-weight:700;color:#1a1a1a;}
  .report-title p{font-size:11px;color:#888;margin-top:3px;}
  .student-hero{background:linear-gradient(135deg,${r}15,${r}05);border:1.5px solid ${r}30;border-radius:12px;padding:18px 22px;margin-bottom:20px;display:flex;align-items:center;gap:16px;}
  .stu-avatar{width:52px;height:52px;border-radius:12px;background:${r};color:#fff;font-size:22px;font-weight:800;display:flex;align-items:center;justify-content:center;flex-shrink:0;}
  .stu-name{font-size:20px;font-weight:800;}
  .stu-target{font-size:12px;color:#666;margin-top:3px;}
  .stats-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin-bottom:20px;}
  .stat-box{background:#f8f8f8;border:1px solid #e8e8e8;border-radius:10px;padding:12px 14px;text-align:center;}
  .stat-box .val{font-size:26px;font-weight:800;color:${r};}
  .stat-box .lbl{font-size:10px;color:#888;margin-top:3px;text-transform:uppercase;letter-spacing:.5px;}
  .section{margin-bottom:20px;}
  .section-title{font-size:14px;font-weight:700;color:${r};margin-bottom:10px;padding-bottom:6px;border-bottom:1.5px solid ${r}20;display:flex;align-items:center;gap:6px;}
  table{width:100%;border-collapse:collapse;font-size:12px;}
  th{background:${r}15;color:#333;font-weight:700;padding:8px 10px;text-align:left;font-size:11px;text-transform:uppercase;letter-spacing:.4px;}
  td{padding:7px 10px;border-bottom:1px solid #f0f0f0;}
  tr:last-child td{border-bottom:none;}
  .badge{display:inline-block;padding:2px 8px;border-radius:99px;font-size:10px;font-weight:700;}
  .badge-green{background:#e8faf3;color:#16a34a;}
  .badge-yellow{background:#fef9ec;color:#ca8a04;}
  .badge-red{background:#fef2f2;color:#dc2626;}
  .prog-bar{height:8px;background:#eee;border-radius:99px;overflow:hidden;margin-top:4px;}
  .prog-fill{height:100%;border-radius:99px;background:${r};}
  .note-box{background:#fffbeb;border:1.5px solid ${r}40;border-radius:10px;padding:14px 16px;}
  .note-box .note-header{font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.5px;color:${r};margin-bottom:6px;}
  .footer{margin-top:30px;padding-top:14px;border-top:1px solid #eee;display:flex;justify-content:space-between;font-size:10px;color:#aaa;}
  .progress-circle{position:relative;width:64px;height:64px;flex-shrink:0;}
  @media print{body{-webkit-print-color-adjust:exact;print-color-adjust:exact;}.no-print{display:none!important;}}
</style>
</head>
<body>
<div class="page">
  <!-- HEADER -->
  <div class="header">
    <div>
      <div class="brand">${g(s)}</div>
      <div class="brand-sub">Koç: ${g(l)}</div>
    </div>
    <div class="report-title">
      <h1>Performans Raporu</h1>
      <p>${w}</p>
      <p>Oluşturulma: ${new Date().toLocaleDateString("tr-TR",{day:"numeric",month:"long",year:"numeric"})}</p>
    </div>
  </div>

  <!-- ÖĞRENCİ -->
  <div class="student-hero">
    <div class="stu-avatar">${n.name[0]}</div>
    <div>
      <div class="stu-name">${g(n.name)}</div>
      <div class="stu-target">${g(n.target)}</div>
      <div style="margin-top:8px">
        <div style="font-size:11px;color:#666;margin-bottom:3px">Genel İlerleme %${n.progress}</div>
        <div class="prog-bar" style="width:200px"><div class="prog-fill" style="width:${n.progress}%"></div></div>
      </div>
    </div>
  </div>

  <!-- ÖZET İSTATİSTİKLER -->
  <div class="stats-grid">
    <div class="stat-box"><div class="val">${m}</div><div class="lbl">Toplam Görev</div></div>
    <div class="stat-box"><div class="val" style="color:#16a34a">${u}</div><div class="lbl">Tamamlanan</div></div>
    <div class="stat-box"><div class="val">%${v}</div><div class="lbl">Tamamlanma</div></div>
    <div class="stat-box"><div class="val">${Math.round(f/60)}</div><div class="lbl">Çalışma (saat)</div></div>
  </div>

  <!-- DERS BAZINDA ÇALIŞMA -->
  ${Object.keys(k).length>0?`
  <div class="section">
    <div class="section-title">📚 Ders Bazında Çalışma</div>
    <table>
      <thead><tr><th>Ders</th><th>Toplam</th><th>Tamamlanan</th><th>Oran</th><th></th></tr></thead>
      <tbody>
        ${Object.entries(k).sort((E,A)=>A[1].total-E[1].total).map(([E,A])=>{const P=Math.round(A.done/A.total*100),D=P>=80?"badge-green":P>=50?"badge-yellow":"badge-red";return`<tr>
            <td><strong>${g(E)}</strong></td>
            <td>${A.total}</td>
            <td>${A.done}</td>
            <td><span class="badge ${D}">%${P}</span></td>
            <td style="width:120px"><div class="prog-bar"><div class="prog-fill" style="width:${P}%"></div></div></td>
          </tr>`}).join("")}
      </tbody>
    </table>
  </div>`:""}

  <!-- DENEMELER -->
  ${y.length>0?`
  <div class="section">
    <div class="section-title">📊 Deneme Sonuçları</div>
    ${I?`<div style="margin-bottom:16px;padding:12px;background:#f8f8f8;border-radius:8px">${I}</div>`:""}
    <table>
      <thead><tr><th>Sınav</th><th>Tarih</th><th>Tür</th>${(EXAM_DEFS[(M=y[0])==null?void 0:M.type]||[]).map(E=>`<th>${E}</th>`).join("")}<th>Toplam</th></tr></thead>
      <tbody>
        ${y.map(E=>{const A=EXAM_DEFS[E.type]||[],P=A.reduce((D,_)=>{var L;return D+Number(((L=E.nets)==null?void 0:L[_])||0)},0).toFixed(1);return`<tr>
            <td><strong>${g(E.name)}</strong></td>
            <td>${new Date(E.date+"T12:00").toLocaleDateString("tr-TR",{day:"numeric",month:"short"})}</td>
            <td>${g(E.type)}</td>
            ${A.map(D=>{var L;const _=Number(((L=E.nets)==null?void 0:L[D])||0);return`<td><span class="badge ${_>=20?"badge-green":_>=12?"badge-yellow":"badge-red"}">${_}</span></td>`}).join("")}
            <td><strong>${P}</strong></td>
          </tr>`}).join("")}
      </tbody>
    </table>
  </div>`:""}

  <!-- RANDEVULAR -->
  ${$.length>0?`
  <div class="section">
    <div class="section-title">📅 Görüşmeler</div>
    <table>
      <thead><tr><th>Tarih</th><th>Saat</th><th>Tür</th><th>Süre</th></tr></thead>
      <tbody>
        ${$.map(E=>`<tr>
          <td>${new Date(E.date+"T12:00").toLocaleDateString("tr-TR",{weekday:"short",day:"numeric",month:"short"})}</td>
          <td>${E.time}</td>
          <td>${g(E.type)}</td>
          <td>${E.duration} dk</td>
        </tr>`).join("")}
      </tbody>
    </table>
  </div>`:""}

  <!-- KOÇ NOTU -->
  ${o?`
  <div class="section">
    <div class="note-box">
      <div class="note-header">Koç Değerlendirmesi</div>
      <div style="font-size:13px;line-height:1.7;color:#333">${g(o).replace(/\n/g,"<br>")}</div>
      <div style="margin-top:10px;font-size:11px;color:#888">— ${g(l)}</div>
    </div>
  </div>`:""}

  <!-- FOOTER -->
  <div class="footer">
    <span>${g(s)} · ${g(l)}</span>
    <span>${g(n.name)} · ${w}</span>
    <span>Rostrum Akademi Platformu</span>
  </div>
</div>
</body>
</html>`}function Bl(){const e=document.getElementById("rpStuId").value,t=Yn(e,!0),n=window.open("","_blank","width=900,height=700");n.document.write(t),n.document.close()}function Ml(){const e=document.getElementById("rpStuId").value;p.students.find(a=>a.id===e);const t=Yn(e,!1),n=window.open("","_blank");n.document.write(t),n.document.close(),setTimeout(()=>{n.focus(),n.print()},500),Z("reportModal"),b('PDF oluşturuluyor — "PDF olarak kaydet" seçin')}async function Al(){const e=document.getElementById("rpStuId").value,t=p.students.find(s=>s.id===e);if(!t)return;const n=`${window.location.origin}/api/generate-pdf-report?studentId=${e}`,a=`Merhaba, ${t.name} isimli öğrencimizin bu dönemki performans ve gelişim raporu hazırlandı. Aşağıdaki bağlantıdan raporu detaylıca görüntüleyebilirsiniz:

🔗 ${n}`,o=`https://api.whatsapp.com/send?text=${encodeURIComponent(a)}`;window.open(o,"_blank"),Z("reportModal"),b("WhatsApp yönlendirmesi açıldı ✓")}function Dl(){let e=document.getElementById("weeklyPDFModal");e||(e=document.createElement("div"),e.id="weeklyPDFModal",e.className="modal-bg",e.innerHTML=`<div class="modal">
      <button class="modal-close" onclick="cm('weeklyPDFModal')">×</button>
      <h2>🖨️ Haftalık Program PDF</h2>
      <div class="field">
        <label>Koç Notu (isteğe bağlı)</label>
        <textarea id="pdfNote" placeholder="Bu haftaki programla ilgili notunuzu ekleyin..." style="min-height:90px"></textarea>
      </div>
      <button class="btn btn-accent" style="width:100%;justify-content:center;padding:12px" onclick="generateWeeklyPDF()">PDF Oluştur →</button>
    </div>`,document.body.appendChild(e),e.addEventListener("click",t=>{t.target===e&&e.classList.remove("open")})),document.getElementById("pdfNote").value="",V("weeklyPDFModal")}function Cl(){const e=document.getElementById("pdfNote").value.trim();Z("weeklyPDFModal"),ki(p.activeStuId,e)}function ki(e,t){var P,D;const n=p.students.find(_=>_.id===e);if(!n)return;const a=(n==null?void 0:n.weekStart)??0,i=ae(p.weekOffset,a),o=ee(i,6),s=((P=p.workspace)==null?void 0:P.brand_name)||"Rostrum Akademi",r=((D=p.workspace)==null?void 0:D.brand_color)||"#E8613A",l=["Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi","Pazar"],c=["Ocak","Şubat","Mart","Nisan","Mayıs","Haziran","Temmuz","Ağustos","Eylül","Ekim","Kasım","Aralık"],d={deneme:"#f59e0b",soru:"#3b82f6",konu:"#10b981",diger:"#8b5cf6"},m={deneme:"Deneme",soru:"Soru Bankası",konu:"Konu Anlatımı",diger:"Diğer"};let u=0,v=0,f=0;const k=[];for(let _=0;_<7;_++){const L=ee(i,_),j=G(L),K=p.tasks[`${e}_${j}`]||[];u+=K.length,v+=K.filter(F=>F.done).length,f+=K.reduce((F,z)=>F+Number(z.duration||0),0),K.length>0&&k.push({d:L,ds:j,tasks:K,dayName:l[(a+_)%7]})}const y=u>0?Math.round(v/u*100):0,$=163.36,w=($*(1-y/100)).toFixed(1),I=(_,L=5)=>{let j="";for(let K=1;K<=L;K++)j+=`<span style="display:inline-block;width:6px;height:6px;border-radius:50%;margin-right:2px;background:${K<=_?r:"#E8E6DE"}"></span>`;return j},T=_=>_?'<span style="display:inline-flex;align-items:center;justify-content:center;width:15px;height:15px;border-radius:50%;background:#22C55E;flex-shrink:0"><svg width="8" height="6" viewBox="0 0 8 6"><path d="M1 3L3 5L7 1" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/></svg></span>':'<span style="display:inline-block;width:15px;height:15px;border-radius:50%;border:1.5px solid #D1D0DC;flex-shrink:0"></span>';let B="";for(const{d:_,tasks:L,dayName:j}of k){const K=L.reduce((z,N)=>z+Number(N.duration||0),0),F=L.map(z=>{const N=d[z.type]||"#94a3b8",J=m[z.type]||"Diğer",O=z.done,q=z.student_result||null,W=z.student_feedback||null,R=q&&(q.dogru!=null||q.yanlis!=null||q.bos!=null)?`
        <div style="display:flex;gap:4px;margin-top:5px;margin-left:21px">
          <span style="display:inline-flex;align-items:center;padding:2px 7px;border-radius:99px;font-size:9px;font-weight:700;background:#DCFCE7;color:#15803D">✓ ${q.dogru??0}</span>
          <span style="display:inline-flex;align-items:center;padding:2px 7px;border-radius:99px;font-size:9px;font-weight:700;background:#FEE2E2;color:#B91C1C">✗ ${q.yanlis??0}</span>
          <span style="display:inline-flex;align-items:center;padding:2px 7px;border-radius:99px;font-size:9px;font-weight:700;background:#F1F5F9;color:#64748B">— ${q.bos??0}</span>
        </div>`:"",H=z.student_note?`<div style="font-size:9px;color:#9998AA;font-style:italic;margin-top:4px;margin-left:21px;line-height:1.4">"${g(z.student_note)}"</div>`:"",Y=W&&(W.difficulty||W.focus)?`
        <div style="display:flex;flex-direction:column;align-items:flex-end;gap:3px;margin-top:6px">
          ${W.difficulty?`<div style="white-space:nowrap"><span style="font-size:8px;color:#C4C3D0">Zorluk </span>${I(W.difficulty)}</div>`:""}
          ${W.focus?`<div style="white-space:nowrap"><span style="font-size:8px;color:#C4C3D0">Odak </span>${I(W.focus)}</div>`:""}
        </div>`:"";return`<div style="background:#fff;border-radius:8px;border:1px solid #E8E6DE;border-left:3px solid ${N};margin-bottom:6px;padding:10px 14px;display:flex;gap:10px;align-items:flex-start">
        <div style="flex:1;min-width:0">
          <div style="display:flex;align-items:center;gap:6px;margin-bottom:3px">
            ${T(O)}
            <span style="font-size:11px;font-weight:800;color:${O?"#9998AA":"#111118"};${O?"text-decoration:line-through":""}">${g(z.subject)}</span>
            <span style="font-size:8px;font-weight:700;color:${N};text-transform:uppercase;letter-spacing:.5px;margin-left:2px">${J}${z.exam?" · "+g(z.exam):""}</span>
          </div>
          ${z.note?`<div style="font-size:9px;color:#6B6A7A;margin-left:21px;line-height:1.4;margin-bottom:2px">${g(z.note)}</div>`:""}
          ${R}
          ${H}
        </div>
        <div style="display:flex;flex-direction:column;align-items:flex-end;flex-shrink:0">
          <span style="font-size:10px;font-weight:600;color:#9998AA;background:#F7F6F2;padding:2px 8px;border-radius:99px;white-space:nowrap">${z.duration} dk</span>
          ${Y}
        </div>
      </div>`}).join("");B+=`<div style="margin-bottom:14px">
      <div style="display:flex;align-items:center;gap:10px;margin-bottom:7px">
        <span style="font-size:10px;font-weight:800;text-transform:uppercase;letter-spacing:.1em;color:#111118">${j}</span>
        <span style="font-size:10px;color:#6B6A7A">${_.getDate()} ${c[_.getMonth()]}</span>
        <div style="flex:1;height:1px;background:#E8E6DE"></div>
        <span style="font-size:9px;color:#9998AA">${L.length} görev · ${K} dk</span>
      </div>
      ${F}
    </div>`}const M=[{val:v,lbl:"Tamamlanan",col:"#22C55E"},{val:u-v,lbl:"Bekleyen",col:"#C4C3D0"},{val:Math.round(f/60)+" sa",lbl:"Toplam Süre",col:r},{val:u,lbl:"Toplam Görev",col:"#C4C3D0"}].map((_,L)=>`<div style="flex:1;${L>0?"border-left:1px solid rgba(255,255,255,.06);padding-left:16px;":""}padding-right:16px">
    <div style="font-size:18px;font-weight:800;color:${_.col};font-variant-numeric:tabular-nums">${_.val}</div>
    <div style="font-size:8px;color:#6B6A7A;text-transform:uppercase;letter-spacing:.07em">${_.lbl}</div>
  </div>`).join(""),E=`<!DOCTYPE html><html lang="tr"><head><meta charset="UTF-8"><title>${g(n.name)} — Haftalık Program</title>
  <style>
    *{margin:0;padding:0;box-sizing:border-box;}
    body{font-family:system-ui,-apple-system,'Segoe UI',sans-serif;background:#1A1920;padding:32px 20px 60px;min-height:100vh;}
    .page{background:#fff;max-width:780px;margin:0 auto;border-radius:8px;overflow:hidden;box-shadow:0 20px 80px rgba(0,0,0,.6);}
    @media print{
      body{background:#fff;padding:0;}
      .page{box-shadow:none;max-width:none;border-radius:0;}
      .no-print{display:none!important;}
      @page{size:A4 portrait;margin:8mm;}
    }
  </style>
  </head><body>
  <div class="page">
    <div style="background:#111118;padding:24px 28px 20px;position:relative;overflow:hidden">
      <div style="position:absolute;right:-50px;top:-50px;width:180px;height:180px;border-radius:50%;background:${r};opacity:.07;pointer-events:none"></div>
      <div style="display:flex;justify-content:space-between;align-items:flex-start;gap:20px">
        <div>
          <div style="font-size:9px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:${r};margin-bottom:6px">${g(s)} · Haftalık Program</div>
          <div style="font-size:24px;font-weight:800;color:#F0EFF8;letter-spacing:-.5px;line-height:1.1">${g(n.name)}</div>
          ${n.target?`<div style="font-size:11px;color:#8B8A99;margin-top:4px">🎯 ${g(n.target)}</div>`:""}
        </div>
        <div style="display:flex;flex-direction:column;align-items:flex-end;gap:8px;flex-shrink:0">
          <div style="position:relative;width:64px;height:64px">
            <svg width="64" height="64" viewBox="0 0 64 64" style="transform:rotate(-90deg)">
              <circle cx="32" cy="32" r="26" fill="none" stroke="rgba(255,255,255,.07)" stroke-width="5"/>
              <circle cx="32" cy="32" r="26" fill="none" stroke="${r}" stroke-width="5" stroke-linecap="round" stroke-dasharray="${$.toFixed(1)}" stroke-dashoffset="${w}"/>
            </svg>
            <div style="position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center">
              <div style="font-size:14px;font-weight:800;color:#F0EFF8;line-height:1">%${y}</div>
              <div style="font-size:7px;color:#6B6A7A;text-transform:uppercase;letter-spacing:.05em;margin-top:1px">hafta</div>
            </div>
          </div>
          <div style="text-align:right">
            <div style="font-size:9px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:#6B6A7A">Hafta</div>
            <div style="font-size:12px;font-weight:700;color:#C4C3D0;margin-top:1px">${i.getDate()} – ${o.getDate()} ${c[o.getMonth()]} ${o.getFullYear()}</div>
          </div>
        </div>
      </div>
      <div style="display:flex;gap:0;margin-top:16px;border-top:1px solid rgba(255,255,255,.06);padding-top:14px">${M}</div>
    </div>
    <div style="background:#F7F6F2;padding:18px 24px 20px">
      ${k.length===0?'<div style="text-align:center;color:#9998AA;padding:40px 0;font-size:13px">Bu hafta için görev bulunmuyor.</div>':B}
      ${t?`<div style="background:#fff;border-radius:8px;border:1px solid #E8E6DE;border-left:3px solid ${r};padding:10px 14px;margin-top:4px">
        <div style="font-size:8px;font-weight:800;color:${r};text-transform:uppercase;letter-spacing:.06em;margin-bottom:4px">Koç Notu</div>
        <div style="font-size:10px;color:#444;line-height:1.6">${g(t)}</div>
      </div>`:""}
    </div>
    <div style="background:#111118;padding:14px 28px;display:flex;align-items:center;justify-content:space-between">
      <div style="font-size:10px;font-style:italic;color:#6B6A7A;max-width:380px;line-height:1.5">"Bugün emek harcadığın her dakika, sınav gününde sana geri döner."</div>
      <div style="font-size:9px;font-weight:700;color:#3D3C4A;text-align:right;text-transform:uppercase;letter-spacing:.08em">${g(s)}</div>
    </div>
    <div class="no-print" style="padding:10px 14px;display:flex;align-items:center;gap:12px;background:#F7F6F2;border-top:1px solid #E8E6DE">
      <button onclick="window.print()" style="background:${r};color:#fff;border:none;padding:9px 24px;border-radius:7px;font-size:12px;font-weight:800;cursor:pointer">🖨️ PDF İndir / Yazdır</button>
      <span style="font-size:10px;color:#9998AA">Tarayıcı ayarlarından "Arka plan grafikleri"ni aktif edin</span>
    </div>
  </div>
  </body></html>`,A=window.open("","_blank","width=1000,height=850");A.document.write(E),A.document.close(),setTimeout(()=>A.focus(),300)}async function Ll(){var s,r;V("inviteCodeModal");const e=document.getElementById("invCodeBox");let t=(s=p.workspace)==null?void 0:s.invite_code;if(!t){e.textContent="……";try{const{data:l,error:c}=await h.rpc("ensure_invite_code");!c&&l&&(t=l,p.workspace&&(p.workspace.invite_code=t))}catch{}}if(!t){e.textContent="—",b("Kod alınamadı — sayfayı yenileyip tekrar dene");return}e.textContent=t;const n=`${window.location.origin}/app.html?davet=${t}`,i=`Merhaba! ${((r=p.workspace)==null?void 0:r.brand_name)||"koçun"} koçluk platformuna davetlisin. 🎓

Kayıt linki: ${n}
(Davet kodun: ${t})

Linke tıkla, hesabını oluştur — otomatik olarak bana bağlanacaksın.`,o=document.getElementById("invWaBtn");o&&(o.href="https://wa.me/?text="+encodeURIComponent(i))}function Pl(){var t,n;const e=(n=(t=document.getElementById("invCodeBox"))==null?void 0:t.textContent)==null?void 0:n.trim();e&&e.length===6&&Kn(e)}function jl(){var t,n;const e=(n=(t=document.getElementById("invCodeBox"))==null?void 0:t.textContent)==null?void 0:n.trim();e&&e.length===6&&Kn(`${window.location.origin}/app.html?davet=${e}`)}function Kn(e){navigator.clipboard.writeText(e).then(()=>b("Link kopyalandı ✓")).catch(()=>{const t=document.createElement("textarea");t.value=e,document.body.appendChild(t),t.select(),document.execCommand("copy"),t.remove(),b("Link kopyalandı ✓")})}const wi=[{name:"Terrakota",val:"#e8613a",dim:"rgba(232,97,58,.12)"},{name:"Altın",val:"#f0a500",dim:"rgba(240,165,0,.12)"},{name:"Mavi",val:"#4da6ff",dim:"rgba(77,166,255,.12)"},{name:"Yeşil",val:"#3ecf8e",dim:"rgba(62,207,142,.12)"},{name:"Mor",val:"#c084fc",dim:"rgba(192,132,252,.12)"},{name:"Pembe",val:"#f472b6",dim:"rgba(244,114,182,.12)"},{name:"Kırmızı",val:"#ff5c5c",dim:"rgba(255,92,92,.12)"},{name:"Turkuaz",val:"#06b6d4",dim:"rgba(6,182,212,.12)"}];function $i(){try{const e=JSON.parse(localStorage.getItem("ba_theme")||"{}");e.theme==="dark"?document.documentElement.setAttribute("data-theme","dark"):document.documentElement.removeAttribute("data-theme"),e.accent&&_i(e.accent,e.accentDim,!1)}catch{}}function _i(e,t,n=!0){if(document.documentElement.style.setProperty("--accent",e),document.documentElement.style.setProperty("--accent-dim",t||"rgba(240,165,0,.12)"),n)try{const a=JSON.parse(localStorage.getItem("ba_theme")||"{}");a.accent=e,a.accentDim=t,localStorage.setItem("ba_theme",JSON.stringify(a))}catch{}}function Rl(e){e==="dark"?document.documentElement.setAttribute("data-theme","dark"):document.documentElement.removeAttribute("data-theme");try{const t=JSON.parse(localStorage.getItem("ba_theme")||"{}");t.theme=e,localStorage.setItem("ba_theme",JSON.stringify(t))}catch{}document.querySelectorAll(".theme-btn").forEach(t=>{const n=t.dataset.theme===e;t.style.background=n?"var(--accent-dim)":"",t.style.borderColor=n?"var(--accent)":"",t.style.color=n?"var(--accent)":""})}function Nl(){let e=document.getElementById("themePanel");if(e){e.remove();return}e=document.createElement("div"),e.id="themePanel";const t=document.documentElement.getAttribute("data-theme")!=="light";e.style.cssText="position:fixed;top:60px;right:12px;background:var(--surface);border:1px solid var(--border2);border-radius:14px;padding:18px;z-index:300;box-shadow:var(--shadow-lg);min-width:230px;animation:fadeUp .2s ease",e.innerHTML=`
    <div style="font-family:'Inter',sans-serif;font-size:13px;font-weight:700;margin-bottom:12px;color:var(--text)">🎨 Tema Ayarları</div>
    <div style="font-size:11px;font-weight:700;color:var(--text-mid);text-transform:uppercase;letter-spacing:.5px;margin-bottom:8px">Mod</div>
    <div style="display:flex;gap:6px;margin-bottom:16px">
      <button class="theme-btn btn btn-ghost btn-sm" data-theme="dark" onclick="setTheme('dark')" style="${t?"background:var(--accent-dim);border-color:var(--accent);color:var(--accent)":""}">🌙 Karanlık</button>
      <button class="theme-btn btn btn-ghost btn-sm" data-theme="light" onclick="setTheme('light')" style="${t?"":"background:var(--accent-dim);border-color:var(--accent);color:var(--accent)"}">☀️ Aydınlık</button>
    </div>
    <div style="font-size:11px;font-weight:700;color:var(--text-mid);text-transform:uppercase;letter-spacing:.5px;margin-bottom:8px">Accent Rengi</div>
    <div style="display:flex;gap:7px;flex-wrap:wrap;margin-bottom:14px">
      ${wi.map(n=>`<div onclick="applyAccent('${n.val}','${n.dim}');document.getElementById('themePanel').remove()" title="${n.name}"
        style="width:28px;height:28px;border-radius:8px;background:${n.val};cursor:pointer;transition:transform .1s"
        onmouseover="this.style.transform='scale(1.2)'" onmouseout="this.style.transform=''"></div>`).join("")}
    </div>
    <button onclick="document.getElementById('themePanel').remove()" style="width:100%;background:var(--surface2);border:1px solid var(--border);color:var(--text-mid);border-radius:8px;padding:7px;font-family:inherit;font-size:12px;cursor:pointer">Kapat</button>`,document.body.appendChild(e),setTimeout(()=>document.addEventListener("click",function n(a){!e.contains(a.target)&&!a.target.closest("[onclick*=openThemePanel]")&&(e.remove(),document.removeEventListener("click",n))},!0),150)}let $t=[],un=!1;function Ei(){const e=document.getElementById("aiChatBubble"),t=document.querySelector(".ai-header-name"),n=document.getElementById("aiMessages");if(!e||!t||!n)return;$t=[],n.innerHTML=`
    <div class="ai-welcome">
      <div class="ai-welcome-emoji">🎓</div>
      <div class="ai-welcome-title"></div>
      <div class="ai-welcome-sub"></div>
      <div class="ai-quick-btns"></div>
    </div>`;const a=n.querySelector(".ai-welcome"),i=a.querySelector(".ai-welcome-title"),o=a.querySelector(".ai-welcome-sub"),s=a.querySelector(".ai-quick-btns");x.role==="coach"||x.role==="developer"?(e.title="Yapay Zeka Koç Asistanı",t.textContent="Yapay Zeka Koç Asistanı",i.textContent="Merhaba Hocam! Ben Koç Asistanınız",o.textContent="Öğrenci analizleri, veri okuma, ders çalışma programı taslakları hazırlama ve pedagojik konularda size yardımcı olabilirim.",s.innerHTML=`
      <button class="ai-quick-btn" onclick="aiQuickSend('Seçili öğrencinin genel durum analizini yap')">📊 Öğrenci Analizi</button>
      <button class="ai-quick-btn" onclick="aiQuickSend('Pedagojik motivasyon teknikleri öner')">💡 Pedagojik Öneri</button>
      <button class="ai-quick-btn" onclick="aiQuickSend('Zorlanan bir öğrenci için haftalık program şablonu oluştur')">📋 Program Şablonu</button>
    `):x.role==="parent"?(e.title="Yapay Zeka Veli Bilgilendirme Asistanı",t.textContent="Yapay Zeka Veli Asistanı",i.textContent="Merhaba! Ben Veli Asistanıyım",o.textContent="Çocuğunuzun ders çalışma durumu, deneme netleri ve evde ona nasıl destek olabileceğiniz konularında bilgi alabilirsiniz.",s.innerHTML=`
      <button class="ai-quick-btn" onclick="aiQuickSend('Çocuğumun bu haftaki gelişimini özetle')">📊 Gelişim Özeti</button>
      <button class="ai-quick-btn" onclick="aiQuickSend('Evde verimli ders çalışma ortamı nasıl sağlanır?')">🏠 Ev Ortamı</button>
      <button class="ai-quick-btn" onclick="aiQuickSend('Sınav stresiyle başa çıkmak için veli olarak ne yapmalıyım?')">🧘 Stres Yönetimi</button>
    `):(e.title="Yapay Zeka Ders Asistanı",t.textContent="Yapay Zeka Ders Asistanı",i.textContent="Merhaba! Ben Ders Asistanın (Yapay Zeka)",o.textContent="7/24 anlık soru çözümü, konu anlatımı, özet çıkarma ve mini pratik sınav konularında sana yardımcı olan mekanik bir asistanım. Ben bir yapay zekayım ve koçunun yerini alamam; duygusal veya motivasyonel konularda koçuna danışmalısın.",s.innerHTML=`
      <button class="ai-quick-btn" onclick="aiQuickSend('Çözemediğim bir Matematik/Fen sorusu var. Sokratik tarzda, adım adım ipuçları vererek çözmeme yardım eder misin?')">📝 Çözemediğim Soru Var</button>
      <button class="ai-quick-btn" onclick="aiQuickSend('Bir konunun özetini çıkarmak istiyorum. Hangi ders ve konudan özet çıkarmak istediğimi sorup yardımcı olur musun?')">📖 Konu Özeti Çıkar</button>
      <button class="ai-quick-btn" onclick="aiQuickSend('Zayıf olduğum konular üzerinde çalışıp pratik yapmak istiyorum. Hangi derslerden yardıma ihtiyacım olduğunu sorup pratik yapalım.')">🎯 Zayıf Konuları Çalış</button>
      <button class="ai-quick-btn" onclick="aiQuickSend('Bana seçtiğim bir konudan 3 soruluk hızlı bir mini quiz yapar mısın? Soruları tek tek sor.')">⚡ Hızlı Sınav Yap</button>
    `)}function Hl(){const e=document.getElementById("aiChatPanel"),t=document.getElementById("aiChatBubble");if(e.classList.contains("open"))e.classList.remove("open"),t.style.display="flex";else{e.classList.add("open"),t.style.display="none";const n=document.getElementById("aiMessages");n.scrollTop=n.scrollHeight,document.getElementById("aiInput").focus()}}function Yl(e){document.getElementById("aiInput").value=e,Ti()}function hn(){var t;const e={};try{const n=p.students.find(s=>s.id===p.activeStuId);n&&(e.studentName=n.name,e.target=n.target||""),x.role==="parent"&&x.childName&&(e.studentName=x.childName);const a=(p.exams||[]).filter(s=>s.studentId===p.activeStuId).slice(-5);a.length&&(e.recentExams=a.map(s=>({name:s.type+" "+(s.name||""),date:s.date||"",nets:s.nets||{}})));let i=[];if(Object.entries(p.tasks||{}).forEach(([s,r])=>{s.startsWith(p.activeStuId+"_")&&(i=i.concat(r))}),i.length){const s=i.filter(r=>r.done).length;e.taskCompletionRate=Math.round(s/i.length*100),e.weeklyTaskCount=i.length}const o=Object.keys(EXAM_DEFS);a.length&&(e.examProfile=((t=a[0])==null?void 0:t.type)||o[0])}catch(n){console.warn("AI context error:",n)}return e}async function _t(){const e={"Content-Type":"application/json"};try{const{data:{session:t}}=await h.auth.getSession();t!=null&&t.access_token&&(e.Authorization="Bearer "+t.access_token)}catch{}return e}function Te(e,t){$t.push({role:e,content:t});const n=document.getElementById("aiMessages"),a=n.querySelector(".ai-welcome");a&&a.remove();const i=new Date().toLocaleTimeString("tr-TR",{hour:"2-digit",minute:"2-digit"}),o=document.createElement("div");o.className=`ai-msg ${e}`,o.innerHTML=`${g(t).replace(/\n/g,"<br>")}<div class="ai-msg-time">${i}</div>`,n.appendChild(o),n.scrollTop=n.scrollHeight}let Fn=null;window._pickAiImg=function(e){const t=e.files[0];if(!t)return;if(t.size>8*1024*1024){b("Dosya max 8 MB olabilir"),e.value="";return}const n=new FileReader;n.onload=a=>{Fn={base64:a.target.result.split(",")[1],mimeType:t.type,name:t.name};const o=document.getElementById("aiImgPreview"),s=document.getElementById("aiImgThumb"),r=document.getElementById("aiImgName");s.src=a.target.result,s.style.display="block",r.textContent=t.name,o.style.display="flex"},n.readAsDataURL(t),e.value=""};window._cancelAiImg=function(){Fn=null;const e=document.getElementById("aiImgPreview");e&&(e.style.display="none")};async function Ti(){if(un)return;const e=document.getElementById("aiInput"),t=e.value.trim(),n=Fn;if(!(!t&&!n)){if(e.value="",n){window._cancelAiImg();const a=document.getElementById("aiMessages"),i=a.querySelector(".ai-welcome");i&&i.remove();const o=document.createElement("div");o.className="ai-msg user",o.innerHTML=`<img src="data:${n.mimeType};base64,${n.base64}" style="max-width:180px;max-height:180px;border-radius:10px;display:block" />${t?`<div style="margin-top:6px">${g(t)}</div>`:""}<div class="ai-msg-time">${new Date().toLocaleTimeString("tr-TR",{hour:"2-digit",minute:"2-digit"})}</div>`,a.appendChild(o),a.scrollTop=a.scrollHeight,$t.push({role:"user",content:t||"Fotoğraftaki soruyu çöz.",image:n})}else Te("user",t);un=!0,document.getElementById("aiTyping").classList.add("show"),document.getElementById("aiSendBtn").disabled=!0;try{const a=hn(),i=x.role||"student";if(n){const o=await fetch("/api/ai-chat",{method:"POST",headers:await _t(),body:JSON.stringify({imageBase64:n.base64,mimeType:n.mimeType,text:t||"Bu soruyu çöz.",context:a,userRole:i})});if(o.ok){const s=await o.json();Te("assistant",s.reply||"Yanıt alınamadı.")}else{const s=await Le(t,a,i,n);Te("assistant",s)}}else{const s=await fetch("/api/ai-chat",{method:"POST",headers:await _t(),body:JSON.stringify({messages:$t.slice(-10),context:a,userRole:i})});if(s.ok){const r=await s.json();Te("assistant",r.reply||"Yanıt alınamadı.")}else{const r=await Le(t,a,i,null);Te("assistant",r)}}}catch(a){console.error("AI error:",a);try{const i=hn(),o=await Le(t,i,x.role||"student",n);Te("assistant",o)}catch{const o=localStorage.getItem("gemini_api_key");Te("assistant","🔒 Bu özellik ileride aktif olacaktır. Yakında kullanıma açılacak.")}}finally{un=!1,document.getElementById("aiTyping").classList.remove("show"),document.getElementById("aiSendBtn").disabled=!1}}}let mn=null;async function Si(e){try{const t=await fetch(`https://generativelanguage.googleapis.com/v1beta/models?key=${e}`);if(!t.ok)return null;const a=(await t.json()).models||[];let i=a.find(o=>o.name.toLowerCase().includes("flash")&&o.supportedGenerationMethods.includes("generateContent"));if(i||(i=a.find(o=>o.supportedGenerationMethods.includes("generateContent"))),i)return i.name.replace("models/","")}catch(t){console.warn("Auto-detect model failed:",t)}return null}async function Le(e,t,n,a){var f,k,y,$,w,I;let i=localStorage.getItem("gemini_api_key");if(!i)try{const{data:T}=await h.from("platform_settings").select("value").eq("key","ai_settings").maybeSingle();T&&T.value&&T.value.gemini_api_key&&(i=T.value.gemini_api_key)}catch(T){console.warn("DB Gemini API key load error:",T)}const o=i;if(!o)throw new Error("API anahtarı eksik.");let s="gemini-1.5-flash";if(o)if(mn)s=mn;else{const T=await Si(o);T&&(mn=T,s=T,console.log("[Gemini API] Otomatik model tespiti başarılı:",s))}let r=`Sen "Rostrum Akademi Yapay Zeka Asistanı"sın. Türkiye eğitim sistemine (YKS, LGS) hakim, rolüne göre öğrencilere, velilere veya koçlara destek veren bir yapay zekasın.

KESİNLİKLE YALNIZCA TÜRKÇE yanıt ver. İngilizce, Japonca, Çince veya başka hiçbir dil/karakter kullanma.

Rostrum Akademi İşleyişi, Üyelik ve Fiyatlandırma Bilgileri:
1. Kayıt olan tüm koçlara 7 gün ücretsiz deneme süresi tanımlanır. Bu süre bitiminde 3 günlük müsamaha (grace) süresi başlar; müsamaha da bitince panel kilitlenir.
2. Otomatik ödeme/kredi kartı altyapısı yoktur; ödeme havale/EFT ile yapılır. Koç, panelindeki "Üyeliğim" sayfasından veya çıkan "Ödeme Bildir" butonundan ödeme modalını açar; orada güncel fiyatı, banka bilgilerini ve kendine özel referans kodunu görür, dekontunu yükler. Onay admin tarafında manuel yapılır.
3. Fiyat, banka bilgileri gibi detaylar sabit değildir, admin panelinden yönetilir — kesin güncel tutarı söylemek yerine kullanıcıyı "Üyeliğim" sayfasındaki ödeme modalına yönlendir.
4. Destek panelinde bulunan "Kurucuya / Destek Ekibine Yaz" seçeneği ile doğrudan kurucu ekibe mesaj gönderebilir ve bu ekran üzerinden onunla canlı yazışabilirler. Kurucu: Emin Ceylan (ceylanemin1928@gmail.com).`;const l=x.dbUser;if(l){const T=l.plan||"trial",B={trial:"Deneme",starter:"Başlangıç",pro:"Pro",enterprise:"Kurumsal"}[T]||T;if(T==="trial"){const S=l.trial_ends_at?new Date(l.trial_ends_at):new Date(new Date(l.created_at).getTime()+12096e5),M=Math.max(0,Math.ceil((S-Date.now())/864e5));r+=`
KULLANICI BİLGİSİ: Ad=${l.full_name||l.username}, Plan=${B}, Deneme süresi kalan=${M} gün (bitiş: ${S.toLocaleDateString("tr-TR")}).`}else r+=`
KULLANICI BİLGİSİ: Ad=${l.full_name||l.username}, Plan=${B} (aktif üye).`}n==="parent"?r+=`
VELİ MODU: Veliye saygılı ve güven verici konuş. Çocuğun durumunu yapıcı aktar.`:n==="student"?!!a?r+=`
ÖĞRENCİ MODU — SORU ÇÖZÜMÜ:
Öğrenci sana bir soru fotoğrafı gönderdi. Şu anda o sorunun ait olduğu dersin uzman öğretmenisin.
Kurallar:
1. Soruyu dikkatlice incele, konusunu belirle ve kısaca belirt (örn: "Bu soru trigonometri konusundan").
2. Çözümü adım adım, net ve öğretici bir dille yaz. Her adımı numaralandır.
3. Formül veya kural kullandıysan neden kullandığını açıkla.
4. Varsa alternatif çözüm yolunu da kısaca belirt.
5. Sonunda öğrenciye bu konuyu pekiştirmek için 1 kısa öneri ekle.`:r+=`
ÖĞRENCİ MODU (YAPAY ZEKA DERS ASİSTANI):
1. Kendini net bir Yapay Zeka Ders Asistanı olarak tanıt; insan gibi davranma.
2. Duygusal/motivasyonel koçluk yapma; bu talepleri koça yönlendir.
3. Sokratik yöntem kullan: doğrudan cevap yerine ipucu ver, sorular sor.
4. Sadece soru çözümü, konu anlatımı, özet, mini test yap. Program önerisini reddet.`:n==="coach"&&(r+=`
KOÇ MODU (YAPAY ZEKA COPILOT):
Karşındaki kişi bir Eğitim Koçudur. Ona profesyonel bir meslektaş gibi hitap et. Veri odaklı analizler, pedagojik öneriler sun.`),n==="coach"&&t.studentName?r+=`
Şu anda seçili öğrenci: ${t.studentName}`:t.studentName&&(r+=`
Öğrenci: ${t.studentName}`),t.recentExams&&(r+=`
Son denemeler: ${JSON.stringify(t.recentExams)}`),t.taskCompletionRate!==void 0&&(r+=`
Görev tamamlama: %${t.taskCompletionRate}`),t.target&&(r+=`
Hedef: ${t.target}`);const d=$t.slice(-8).map(T=>{const B=[];return T.image&&B.push({inlineData:{mimeType:T.image.mimeType,data:T.image.base64}}),B.push({text:T.content||(T.image?"Soruyu çöz":"")}),{role:T.role==="user"?"user":"model",parts:B}}),m=[{role:"user",parts:[{text:r}]},{role:"model",parts:[{text:"Anladım! Rostrum Akademi Yapay Zeka Asistanı olarak hazırım."}]},...d],u=await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${s}:generateContent?key=${o}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({contents:m,generationConfig:{temperature:.7,maxOutputTokens:1500}})});if(!u.ok){let T=`HTTP ${u.status}`;try{const B=await u.json();(f=B==null?void 0:B.error)!=null&&f.message&&(T=B.error.message)}catch{}throw new Error(T)}const v=await u.json();return((I=(w=($=(y=(k=v==null?void 0:v.candidates)==null?void 0:k[0])==null?void 0:y.content)==null?void 0:$.parts)==null?void 0:w[0])==null?void 0:I.text)||"Yanıt üretilemedi."}let On="";async function Kl(e){const t=p.students.find(a=>a.id===e);if(!t)return;const n=document.getElementById("aiCopilotBtn");n.disabled=!0,n.textContent="⌛ Analiz Ediliyor ve Taslak Oluşturuluyor...";try{const a=ae(0,t.weekStart||0);let i=0,o=0,s=0;for(let w=0;w<7;w++){const I=p.tasks[`${t.id}_${G(ee(a,w))}`]||[];i+=I.length,o+=I.filter(T=>T.done).length,s+=I.reduce((T,B)=>T+Number(B.duration||0),0)}const r=i>0?Math.round(o/i*100):0,c=(p.exams||[]).filter(w=>w.studentId===e).slice(-5).map(w=>({name:w.type+" "+(w.name||""),date:w.date||"",nets:w.nets||{}})),d={};(p.studentSpeeds||[]).filter(w=>w.student_id===e).forEach(w=>{d[`${w.exam_type}_${w.subject}`]=w.secs_per_question});const m=`Lütfen şu öğrenci için haftalık durum analizi ve öğrenciye gönderilecek haftalık değerlendirme mesajı taslağı oluştur:
Öğrenci Adı: ${t.name}
Hedef: ${t.target||"Belirtilmemiş"}
Bu haftaki görev tamamlama oranı: %${r} (${o}/${i} görev tamamlandı, toplam ${Math.round(s/60)} saat çalışıldı)
Son denemeler: ${JSON.stringify(c)}
Soru Çözüm Hızları (saniye/soru): ${JSON.stringify(d)}

ANALİZ VE TASLAK KURALLARI (TÜRKÇE YAZ):
1. Analiz kısmını koçun göreceği şekilde kısa, net ve yapıcı tut. Zayıf konuları ve sınav netlerindeki değişimleri vurgula.
2. Öğrenciye gönderilecek mesaj taslağını samimi ve destekleyici yaz, fakat koçun kendi yorumlarını ekleyebileceği şablon alanları bırak. Örneğin: "[Buraya öğrenciyle son görüşmenizden özel bir not ekleyin]" veya "[Zorlandığı konuyla ilgili kendi ek önerilerinizi girin]".
3. Mesaj taslağı tamamen Türkçe, samimi ve yapıcı olmalıdır. Asla yapay zeka olduğunu belli eden klişeler içermesin.
4. Çıktıyı tam olarak şu iki etiket arasında yapılandır:
[ANALİZ]
(Koç için durum analizi ve anomali tespiti)
[TASLAK]
(Öğrenciye gönderilecek haftalık değerlendirme taslağı)`;let u="";const v={studentName:t.name,target:t.target,recentExams:c,taskCompletionRate:r,weeklyTaskCount:i};try{const w=await fetch("/api/ai-chat",{method:"POST",headers:await _t(),body:JSON.stringify({messages:[{role:"user",content:m}],context:v,userRole:"coach"})});w.ok?u=(await w.json()).reply:u=await Le(m,v,"coach")}catch{u=await Le(m,v,"coach")}let f="Analiz üretilemedi.",k="Taslak üretilemedi.";const y=u.indexOf("[ANALİZ]"),$=u.indexOf("[TASLAK]");y!==-1&&$!==-1?y<$?(f=u.substring(y+8,$).trim(),k=u.substring($+8).trim()):(k=u.substring($+8,y).trim(),f=u.substring(y+8).trim()):k=u,document.getElementById("aiCopilotAnalysisBox").innerHTML=`<b>📊 Yapay Zeka Durum Analizi:</b><br>${f.replace(/\n/g,"<br>")}`,document.getElementById("aiCopilotTextarea").value=k,On=k,document.getElementById("aiCopilotResultArea").style.display="block",document.getElementById("aiCopilotSendBtn").disabled=!0,document.getElementById("aiCopilotEditWarning").style.display="inline"}catch(a){console.error("generateAICopilotDraft error:",a),b("Taslak oluşturulurken hata: "+a.message)}finally{n.disabled=!1,n.textContent="🤖 Durum Analizi Yap ve Taslak Oluştur"}}function Fl(){var t;const e=(((t=document.getElementById("aiCopilotTextarea"))==null?void 0:t.value)||"").trim();if(!e){b("Önce taslak oluşturun");return}window.open("https://wa.me/?text="+encodeURIComponent(e),"_blank")}function Ol(){const e=document.getElementById("aiCopilotTextarea").value.trim(),t=document.getElementById("aiCopilotSendBtn"),n=document.getElementById("aiCopilotEditWarning");e&&e!==On?(t.disabled=!1,n.style.display="none"):(t.disabled=!0,n.style.display="inline")}async function ql(e){var a,i;const t=document.getElementById("aiCopilotTextarea").value.trim();if(!t)return;const n=document.getElementById("aiCopilotSendBtn");n.disabled=!0,n.textContent="Gönderiliyor...";try{const o=x.coachId||((a=p.students.find(l=>l.id===e))==null?void 0:a.coachId),{data:s,error:r}=await h.from("messages").insert({student_id:e,coach_id:o,from_role:"coach",text:t,read:!1}).select().single();if(r)throw r;await h.from("reports").insert({student_id:e,coach_id:o,type:"ai_copilot",title:"Yapay Zeka Copilot Değerlendirmesi",content:t,start_date:ce(),end_date:ce()}),p.messages[e]||(p.messages[e]=[]),p.messages[e].push({_id:s.id,from:"coach",text:t,created_at:s.created_at,time:new Date(s.created_at).toLocaleTimeString("tr-TR",{hour:"2-digit",minute:"2-digit"}),read:!1}),Kt(o,e,((i=x.dbUser)==null?void 0:i.full_name)||"Koçun",t),b("Taslak mesaj başarıyla düzenlendi, öğrenciye gönderildi ve arşive kaydedildi! ✓"),document.getElementById("aiCopilotResultArea").style.display="none",document.getElementById("aiCopilotTextarea").value="",On=""}catch(o){console.error("sendCopilotDraft error:",o),b("Gönderim hatası: "+o.message),n.disabled=!1}finally{n.textContent="✍️ Düzenlemeyi Kaydet ve Öğrenciye Gönder"}}function Ii(){const e=p.students.find(r=>r.id===p.activeStuId),t=x.childName||(e==null?void 0:e.name)||"Öğrenci",n=document.getElementById("view-parent-home");if(!n)return;let a=[];Object.entries(p.tasks||{}).forEach(([r,l])=>{r.startsWith(p.activeStuId+"_")&&(a=a.concat(l))});const i=a.filter(r=>r.done).length,o=a.length?Math.round(i/a.length*100):0,s=(p.exams||[]).filter(r=>r.studentId===p.activeStuId).slice(-3);n.innerHTML=`
    <div style="padding:24px;max-width:800px;margin:0 auto">
      <div style="margin-bottom:24px">
        <div style="font-size:24px;font-weight:800;margin-bottom:4px">👋 Merhaba!</div>
        <div style="color:var(--text-mid);font-size:14px">${g(t)}'in koçluk paneli</div>
      </div>
      
      <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:16px;margin-bottom:24px">
        <div class="card" style="text-align:center;padding:20px">
          <div style="font-size:32px;font-weight:800;color:var(--accent)">${o}%</div>
          <div style="font-size:12px;color:var(--text-mid);margin-top:4px">Görev Tamamlama</div>
          <div style="background:var(--surface2);border-radius:8px;height:6px;margin-top:10px;overflow:hidden">
            <div style="height:100%;width:${o}%;background:var(--green);border-radius:8px;transition:width .5s"></div>
          </div>
        </div>
        <div class="card" style="text-align:center;padding:20px">
          <div style="font-size:32px;font-weight:800;color:var(--blue)">${i}/${a.length}</div>
          <div style="font-size:12px;color:var(--text-mid);margin-top:4px">Tamamlanan Görevler</div>
        </div>
        <div class="card" style="text-align:center;padding:20px">
          <div style="font-size:32px;font-weight:800;color:var(--green)">${s.length}</div>
          <div style="font-size:12px;color:var(--text-mid);margin-top:4px">Son Denemeler</div>
        </div>
      </div>
      
      ${s.length?`
      <div class="card" style="padding:20px;margin-bottom:16px">
        <div style="font-size:15px;font-weight:700;margin-bottom:12px">📊 Son Deneme Sonuçları</div>
        ${s.map(r=>{const l=Object.values(r.nets||{}).reduce((c,d)=>c+(parseFloat(d)||0),0);return`<div style="display:flex;justify-content:space-between;align-items:center;padding:10px 0;border-bottom:1px solid var(--border)">
            <div><div style="font-weight:600;font-size:13px">${g(r.name||r.type)}</div><div style="font-size:11px;color:var(--text-mid)">${r.date||""}</div></div>
            <div style="font-weight:800;color:var(--accent)">${l.toFixed(1)} net</div>
          </div>`}).join("")}
      </div>`:""}
      
      <div class="card" style="padding:20px;background:linear-gradient(135deg,rgba(240,165,0,.05),rgba(62,207,142,.05))">
        <div style="font-size:15px;font-weight:700;margin-bottom:8px">🤖 AI Asistandan Yardım Alın</div>
        <div style="font-size:12px;color:var(--text-mid);margin-bottom:12px">Çocuğunuzun ilerlemesi hakkında anında rapor alabilirsiniz.</div>
        <button class="btn btn-accent" onclick="toggleAIChat()" style="justify-content:center;width:100%;padding:12px">🤖 AI Asistan ile Konuş</button>
      </div>
    </div>`}function zi(){const e=document.getElementById("view-parent-progress");if(!e)return;const t=p.students.find(o=>o.id===p.activeStuId),n=x.childName||(t==null?void 0:t.name)||"Öğrenci",a=(p.exams||[]).filter(o=>o.studentId===p.activeStuId);let i=[];Object.entries(p.tasks||{}).forEach(([o,s])=>{o.startsWith(p.activeStuId+"_")&&(i=i.concat(s))}),e.innerHTML=`
    <div style="padding:24px;max-width:800px;margin:0 auto">
      <div style="font-size:20px;font-weight:800;margin-bottom:20px">📊 ${g(n)} - İlerleme Raporu</div>
      
      <div class="card" style="padding:20px;margin-bottom:16px">
        <div style="font-size:15px;font-weight:700;margin-bottom:16px">📋 Haftalık Görevler</div>
        ${i.length?i.slice(-10).map(o=>`
          <div style="display:flex;align-items:center;gap:10px;padding:8px 0;border-bottom:1px solid var(--border)">
            <div style="width:20px;height:20px;border-radius:50%;background:${o.done?"var(--green)":"var(--surface2)"};border:2px solid ${o.done?"var(--green)":"var(--border)"};display:flex;align-items:center;justify-content:center;font-size:10px;color:#fff">${o.done?"✓":""}</div>
            <div style="flex:1;font-size:13px">${g(o.subject)} <span style="font-size:11px;color:var(--text-dim)">(${qt(o.type)})</span></div>
            <div style="font-size:11px;color:var(--text-mid)">${o.done?"Tamamlandı":"Bekliyor"}</div>
          </div>`).join(""):'<div style="text-align:center;color:var(--text-mid);padding:20px">Henüz görev bulunmuyor.</div>'}
      </div>
      
      <div class="card" style="padding:20px">
        <div style="font-size:15px;font-weight:700;margin-bottom:16px">📊 Deneme Geçmişi</div>
        ${a.length?a.slice(-10).map(o=>{const s=Object.values(o.nets||{}).reduce((r,l)=>r+(parseFloat(l)||0),0);return`<div style="display:flex;justify-content:space-between;align-items:center;padding:10px 0;border-bottom:1px solid var(--border)">
            <div><div style="font-weight:600;font-size:13px">${g(o.name||o.type)}</div><div style="font-size:11px;color:var(--text-mid)">${o.date||""}</div></div>
            <div style="font-weight:800;color:var(--accent)">${s.toFixed(1)} net</div>
          </div>`}).join(""):'<div style="text-align:center;color:var(--text-mid);padding:20px">Henüz deneme sonucu yok.</div>'}
      </div>
    </div>`}function Bi(){const e=document.getElementById("view-parent-ai");e&&(e.innerHTML=`
    <div style="padding:24px;max-width:600px;margin:0 auto;text-align:center">
      <div style="font-size:48px;margin-bottom:16px">🤖</div>
      <div style="font-size:20px;font-weight:800;margin-bottom:8px">AI Koç Asistanı</div>
      <div style="font-size:13px;color:var(--text-mid);margin-bottom:24px;line-height:1.7">Çocuğunuzun eğitim süreci hakkında sorular sorun, deneme analizleri isteyin veya öneriler alın.</div>
      <button class="btn btn-accent" onclick="toggleAIChat()" style="justify-content:center;padding:14px 32px;font-size:15px">💬 AI Asistan ile Konuşmaya Başla</button>
    </div>`)}async function Ul(){var u;const e=document.getElementById("smId").value,t=document.getElementById("smName").value.trim(),n=Ve(document.getElementById("smUsername").value.trim()),a=document.getElementById("smPass").value,i=document.getElementById("smRole").value,o=document.getElementById("smTarget").value.trim(),s=((u=document.querySelector(".color-opt.sel"))==null?void 0:u.dataset.c)||"#e8622a",r=Number(document.getElementById("smWeekStart").value),l=Number(document.getElementById("smProg").value);if(!t||!n||!a)return b("Ad, kullanıcı adı ve şifre zorunlu!");const c=a.length===64?a:await Xe(a),d=n+"@rostrumakademi.com",m={full_name:t,username:n,password_hash:c,role:i,target:o,color:s,week_start:r,progress:l};if(C(!0),e){const{error:v}=await h.from("users").update(m).eq("id",e);if(C(!1),v)return b("Hata: "+v.message);b("Kullanıcı güncellendi ✓")}else{const{data:v,error:f}=await h.rpc("create_new_user",{p_email:d,p_password:a,p_full_name:t,p_username:n,p_role:i,p_target:o,p_color:s,p_progress:l,p_week_start:r,p_coach_id:null,p_institution_id:null,p_exam_profile:"YKS"});if(C(!1),f)return b("Hata: "+f.message);b("Kullanıcı başarıyla oluşturuldu ✓")}Z("studentModal"),mt()}let ze=[],Se={search:"",exam:"",subject:""},Mi=null;function Gl(e){const t=ze.find(o=>o.id===e);if(!t)return b("Kaynak bulunamadı");if(!p.students.length)return b("Önce öğrenci ekleyin");Mi=t;let n=document.getElementById("assignResModal");n||(n=document.createElement("div"),n.className="modal-bg",n.id="assignResModal",document.body.appendChild(n));const a=new Date,i=Array.from({length:7},(o,s)=>{const r=ee(a,s),l=s===0?"Bugün":s===1?"Yarın":["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"][r.getDay()]+` (${r.getDate()}.${r.getMonth()+1})`;return`<option value="${G(r)}|${l}">${l}</option>`}).join("");n.innerHTML=`<div class="modal" style="max-width:380px">
    <button class="modal-close" onclick="cm('assignResModal')">×</button>
    <h2>📤 Ödevlendir</h2>
    <div style="font-size:13px;font-weight:700;margin-bottom:14px;padding:10px 12px;background:var(--surface2);border-radius:9px;border:1px solid var(--border)">${g(t.name)}<div style="font-size:11px;color:var(--text-dim);font-weight:600;margin-top:2px">${g(t.exam_type||"")} · ${g(t.subject||"")}</div></div>
    <div class="field"><label>Öğrenci</label>
      <select id="arStudent">${p.students.map(o=>`<option value="${o.id}">${g(o.name)}</option>`).join("")}</select>
    </div>
    <div class="field"><label>Gün</label>
      <select id="arDay">${i}</select>
    </div>
    <button class="btn btn-accent" style="width:100%;justify-content:center;padding:11px" onclick="confirmAssignResource()">Görevi Hazırla →</button>
  </div>`,V("assignResModal")}function Wl(){const e=Mi;if(!e)return;const t=document.getElementById("arStudent").value,[n,a]=document.getElementById("arDay").value.split("|");Z("assignResModal"),p.activeStuId=t,Ba(n,a);const i=(e.resource_type||"book")==="playlist";document.getElementById("tmType").value=i?"konu":"soru",document.getElementById("tmExam").value=e.exam_type||"TYT",Vt();const o=document.getElementById("tmSubjectSel");if(o&&[...o.options].some(s=>s.value===e.subject))o.value=e.subject;else{const s=document.getElementById("tmSubjectFree");s&&(s.value=e.subject||"")}te={name:e.name,yil:e.year,testler:Array.isArray(e.tests)?e.tests:[],publisher:e.publisher,resource_type:e.resource_type||"book"},document.getElementById("tmBookSearch").value=e.name,document.getElementById("tmBookVal").value=e.name,Jt(),document.getElementById("tmTestWrap").style.display="",document.getElementById("soruBankasiWrap").style.display="",b("Kaynak hazır — test/video seçip ekleyin")}function qn(e){const t=Se.search;return e.filter(n=>!(t&&!n.name.toLowerCase().includes(t)&&!(n.publisher||"").toLowerCase().includes(t)||Se.exam&&n.exam_type!==Se.exam||Se.subject&&n.subject!==Se.subject))}function Vl(){var i,o,s;Se.search=(((i=document.getElementById("crSearch"))==null?void 0:i.value)||"").toLowerCase().trim(),Se.exam=((o=document.getElementById("crExam"))==null?void 0:o.value)||"",Se.subject=((s=document.getElementById("crSubject"))==null?void 0:s.value)||"";const e=document.getElementById("cr-tab-content");if(!e)return;const t=document.querySelector(".cr-tab.active"),n=(t==null?void 0:t.id)==="crt-playlists"?"playlists":(t==null?void 0:t.id)==="crt-analytics"?"analytics":"books",a=qn(ze);e.innerHTML=on(n,a)}function on(e,t){const n=t.filter(r=>r.resource_type==="book"),a=t.filter(r=>r.resource_type==="playlist"),i={Matematik:"#3B82F6",Fizik:"#8B5CF6",Kimya:"#06B6D4",Biyoloji:"#10B981",Geometri:"#6366F1",Türkçe:"#F59E0B",Edebiyat:"#EC4899",Tarih:"#EF4444",Coğrafya:"#84CC16",Felsefe:"#14B8A6","Din Kültürü":"#F97316",Din:"#F97316",Genel:"#6B7280"},o={Matematik:"∑",Fizik:"⚛",Kimya:"🧪",Biyoloji:"🌿",Geometri:"△",Türkçe:"T",Edebiyat:"✒",Tarih:"🏛",Coğrafya:"🌍",Felsefe:"💭","Din Kültürü":"☪",Din:"☪",Genel:"📌"};function s(r,l){if(!r.length)return'<div style="text-align:center;padding:48px;color:var(--text-dim);font-size:13px">Kaynak bulunamadı.</div>';const c={};return r.forEach(d=>{const m=d.exam_type||"Diğer";c[m]||(c[m]={});const u=d.subject||"Genel";c[m][u]||(c[m][u]=[]),c[m][u].push(d)}),Object.entries(c).map(([d,m])=>`
      <div style="margin-bottom:28px">
        <div style="display:flex;align-items:center;gap:8px;margin-bottom:12px">
          <span style="font-size:10px;font-weight:800;letter-spacing:1px;text-transform:uppercase;color:#fff;background:var(--accent);padding:3px 10px;border-radius:99px">${d}</span>
          <div style="flex:1;height:1px;background:var(--border)"></div>
        </div>
        <div style="display:flex;flex-direction:column;gap:16px">
        ${Object.entries(m).map(([u,v])=>{const f=i[u]||"#6B7280",k=o[u]||"📌";return`<div>
            <div style="display:flex;align-items:center;gap:6px;margin-bottom:7px">
              <div style="width:22px;height:22px;border-radius:6px;background:${f}20;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:800;color:${f};flex-shrink:0">${k}</div>
              <span style="font-size:12px;font-weight:700;color:${f}">${u}</span>
              <span style="font-size:10px;color:var(--text-dim)">${v.length} kaynak</span>
            </div>
            <div style="display:flex;flex-direction:column;gap:4px;padding-left:28px">
              ${v.map(y=>`
                <div style="display:flex;align-items:center;padding:10px 14px;border-radius:10px;background:var(--surface);border:1.5px solid var(--border);gap:12px;cursor:default;transition:all .15s;box-shadow:var(--shadow)" onmouseover="this.style.borderColor='${f}';this.style.boxShadow='0 2px 12px ${f}22'" onmouseout="this.style.borderColor='var(--border)';this.style.boxShadow='var(--shadow)'">
                  <div style="flex:1;min-width:0">
                    <div style="font-size:13px;font-weight:700;color:var(--text);margin-bottom:3px">${g(y.name)}${y.coach_id?' <span style="font-size:10px;font-weight:700;color:var(--accent);background:var(--accent-dim);padding:1px 6px;border-radius:99px;margin-left:4px">Özel</span>':""}</div>
                    <div style="display:flex;align-items:center;gap:6px;flex-wrap:wrap">
                      <span style="font-size:11px;font-weight:600;color:var(--text-dim);background:var(--surface2);padding:1px 8px;border-radius:99px;border:1px solid var(--border)">${g(y.publisher||"—")}</span>
                      <span style="font-size:11px;color:var(--text-dim)">${(y.tests||[]).length} ${l==="book"?"test":"video"}</span>
                    </div>
                  </div>
                  <div style="display:flex;gap:4px;flex-shrink:0">
                    <button class="btn btn-green btn-xs" onclick="assignResourceAsTask('${y.id}')" title="Bir öğrencinin programına görev olarak ekle">📤 Ödevlendir</button>
                    ${y.coach_id?`<button class="btn btn-ghost btn-xs" onclick="openResourceModalCoach('${y.id}','${l}')">✏️</button>
                    <button class="btn btn-danger btn-xs" onclick="deleteResourceCoach('${y.id}')">🗑</button>`:""}
                  </div>
                </div>`).join("")}
            </div>
          </div>`}).join("")}
        </div>
      </div>`).join("")}return e==="books"?`
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:20px;flex-wrap:wrap;gap:8px">
        <div style="font-size:13px;color:var(--text-dim)">${n.length} soru bankası</div>
        <div style="display:flex;gap:8px">
          <label class="btn btn-ghost btn-sm" style="position:relative;cursor:pointer">📥 Excel'den Yükle<input type="file" accept=".xlsx,.xls,.csv" onchange="importResourcesFromExcel(event)" style="position:absolute;inset:0;opacity:0;cursor:pointer"></label>
          <button class="btn btn-accent btn-sm" onclick="openResourceModalCoach(null,'book')">+ Soru Bankası</button>
        </div>
      </div>
      ${s(n,"book")}`:e==="playlists"?`
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:20px;flex-wrap:wrap;gap:8px">
        <div style="font-size:13px;color:var(--text-dim)">${a.length} oynatma listesi</div>
        <div style="display:flex;gap:8px">
          <label class="btn btn-ghost btn-sm" style="position:relative;cursor:pointer">📥 Excel'den Yükle<input type="file" accept=".xlsx,.xls,.csv" onchange="importResourcesFromExcel(event)" style="position:absolute;inset:0;opacity:0;cursor:pointer"></label>
          <button class="btn btn-accent btn-sm" onclick="openResourceModalCoach(null,'playlist')">+ Playlist Ekle</button>
        </div>
      </div>
      ${s(a,"playlist")}`:`
      <div style="margin-bottom:16px">
        <h3 style="font-family:'Inter',sans-serif;font-size:16px;font-weight:800;margin-bottom:4px">Kaynak Analitiği Raporu</h3>
        <p style="font-size:11px;color:var(--text-dim)">Öğrencilerinizin en sık kullandığı ve en yüksek tamamlama oranına sahip kaynakları inceleyin.</p>
      </div>
      <div class="analytics-grid">
        ${Ai(t).map(l=>{const c=l.totalCount>0?Math.round(l.doneCount/l.totalCount*100):0,d=c>=80?"var(--green)":c>=50?"var(--accent)":"var(--text-dim)";return`<div class="analytics-card">
            <div style="font-size:10px;font-weight:700;color:var(--accent);margin-bottom:4px;text-transform:uppercase;letter-spacing:.4px">${l.exam_type} · ${l.subject}</div>
            <div style="font-size:14px;font-weight:800;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;margin-bottom:8px">${g(l.name)}</div>
            <div style="display:flex;justify-content:space-between;font-size:11px;color:var(--text-mid);margin-bottom:6px"><span>Tamamlama</span><span style="font-weight:700;color:${d}">%${c}</span></div>
            <div style="height:5px;background:var(--surface3);border-radius:99px;overflow:hidden;margin-bottom:10px"><div style="height:100%;width:${c}%;background:${d};border-radius:99px"></div></div>
            <div style="display:flex;justify-content:space-between;font-size:11px;color:var(--text-dim)"><span>Atanma: <b>${l.assignedCount}</b></span><span>Öğrenci: <b>${l.studentsCount}</b></span></div>
          </div>`}).join("")||'<div style="grid-column:span 3;text-align:center;padding:40px;color:var(--text-dim)">Kayıtlı performans verisi bulunamadı.</div>'}
      </div>`}async function Mt(){const e=document.getElementById("view-coach-resources");if(!e)return;if(!ze.length){e.innerHTML='<div style="max-width:720px;margin:0 auto;padding:40px;text-align:center;color:var(--text-dim);font-size:13px">Kaynaklar yükleniyor…</div>';const{data:a,error:i}=await h.from("resources").select("*").or(`coach_id.eq.${x.coachId},coach_id.is.null`).order("resource_type,exam_type,subject,name");i&&console.error(i),ze=a||[]}Se={search:"",exam:"",subject:""};let t="books";const n=document.querySelector(".cr-tab.active");n&&(n.id==="crt-playlists"?t="playlists":n.id==="crt-analytics"&&(t="analytics")),e.innerHTML=`<div style="max-width:720px;margin:0 auto">
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px">
      <div>
        <h2 style="font-family:'Inter',sans-serif;font-size:22px;font-weight:800">Kaynaklarım</h2>
        <p style="font-size:12px;color:var(--text-mid);margin-top:2px">Soru bankaları, video listeleri ve kaynak analitiği.</p>
      </div>
    </div>

    <div class="cr-tabs">
      <button class="cr-tab ${t==="books"?"active":""}" id="crt-books" onclick="switchCRTab('books')">Soru Bankaları</button>
      <button class="cr-tab ${t==="playlists"?"active":""}" id="crt-playlists" onclick="switchCRTab('playlists')">Oynatma Listeleri</button>
      <button class="cr-tab ${t==="analytics"?"active":""}" id="crt-analytics" onclick="switchCRTab('analytics')">Kaynak Analizi</button>
    </div>

    <div class="cr-filter-bar">
      <div class="cr-filter-search">
        <span style="color:var(--text-dim);font-size:14px">🔍</span>
        <input type="text" id="crSearch" placeholder="Kaynak veya yayınevi ara..." oninput="updateCRFilter()" autocomplete="off">
      </div>
      <select class="cr-filter-select" id="crExam" onchange="updateCRFilter()">
        <option value="">Tüm Sınavlar</option>
        <option value="TYT">TYT</option>
        <option value="AYT-SAY">AYT Sayısal</option>
        <option value="AYT-EA">AYT EA</option>
        <option value="AYT-SOZ">AYT Sözel</option>
      </select>
      <select class="cr-filter-select" id="crSubject" onchange="updateCRFilter()">
        <option value="">Tüm Dersler</option>
        <option>Matematik</option><option>Fizik</option><option>Kimya</option><option>Biyoloji</option>
        <option>Geometri</option><option>Türkçe</option><option>Edebiyat</option><option>Tarih</option>
        <option>Coğrafya</option><option>Felsefe</option><option>Din</option>
      </select>
    </div>

    <div id="cr-tab-content">
      ${on(t,ze)}
    </div>
  </div>`}function Zl(e){var n;document.querySelectorAll(".cr-tab").forEach(a=>a.classList.remove("active")),(n=document.getElementById("crt-"+e))==null||n.classList.add("active");const t=qn(ze);document.getElementById("cr-tab-content").innerHTML=on(e,t)}function Ai(e){const t={};return e.forEach(n=>{t[n.name]={name:n.name,exam_type:n.exam_type,subject:n.subject,assignedCount:0,totalCount:0,doneCount:0,students:new Set}}),Object.entries(p.tasks).forEach(([n,a])=>{const i=n.split("_")[0];a.forEach(o=>{e.forEach(s=>{if(o.subject&&o.subject.includes(s.name)){const r=t[s.name];r&&(r.assignedCount++,r.students.add(i),o.task_items&&Array.isArray(o.task_items)?o.task_items.forEach(l=>{r.totalCount++,(l.done||o.done)&&r.doneCount++}):(r.totalCount++,o.done&&r.doneCount++))}})})}),Object.values(t).map(n=>({...n,studentsCount:n.students.size})).filter(n=>n.assignedCount>0).sort((n,a)=>a.assignedCount-n.assignedCount)}function Jl(e,t="book"){const n=t==="playlist";let a=document.getElementById("coachResourceModal");a||(a=document.createElement("div"),a.id="coachResourceModal",a.className="modal-bg",a.innerHTML=`<div class="modal modal-lg">
      <button class="modal-close" onclick="cm('coachResourceModal')">×</button>
      <h2 id="crmTitle">Kaynak Ekle</h2>
      <input type="hidden" id="crmId">
      <input type="hidden" id="crmType">
      <div class="field-row">
        <div class="field"><label>Sınav</label>
          <select id="crmExam"><option value="TYT">TYT</option><option value="AYT-SAY">AYT Sayısal</option><option value="AYT-EA">AYT EA</option><option value="AYT-SOZ">AYT Sözel</option></select>
        </div>
        <div class="field"><label>Ders</label>
          <select id="crmSubject">
            <option>Matematik</option><option>Fizik</option><option>Kimya</option><option>Biyoloji</option>
            <option>Geometri</option><option>Türkçe</option><option>Edebiyat</option><option>Tarih</option>
            <option>Coğrafya</option><option>Felsefe</option><option>Din</option>
          </select>
        </div>
      </div>
      <div class="field-row">
        <div class="field"><label>Yayınevi / Hoca</label><input id="crmPublisher" placeholder="Karakök, Eyüp B..."></div>
        <div class="field"><label>Kaynak Adı</label><input id="crmName" placeholder="Soru Bankası / Kamp Adı"></div>
      </div>
      
      <div id="crmYtImportBox" style="border:1.5px solid rgba(255,0,0,.2);background:rgba(255,0,0,.04);border-radius:12px;padding:14px;margin-bottom:14px;display:none">
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:10px">
          <div style="display:flex;align-items:center;gap:7px">
            <span style="background:#ff0000;color:#fff;font-size:10px;font-weight:800;padding:2px 7px;border-radius:4px;letter-spacing:.5px">YT</span>
            <span style="font-size:13px;font-weight:700">YouTube Playlist'ten Otomatik Çek</span>
          </div>
          <a href="/nasil-yapilir.html" target="_blank" style="font-size:11px;color:var(--accent);text-decoration:none;font-weight:600">❓ Nasıl yapılır?</a>
        </div>
        <div style="display:flex;gap:8px;align-items:center;margin-bottom:8px">
          <input id="crmYtUrl" placeholder="https://youtube.com/playlist?list=PL..." style="flex:1;font-size:12px;border-radius:8px">
          <button type="button" class="btn btn-accent btn-sm" onclick="fetchYtPlaylistCoach()" style="white-space:nowrap">▶ Çek</button>
        </div>
        <div id="crmYtStatus" style="font-size:11px;color:var(--text-mid);margin-bottom:6px"></div>
        <!-- Video önizleme listesi -->
        <div id="crmVideoPreview" style="display:none;background:var(--surface2);border:1px solid var(--border);border-radius:10px;overflow:hidden;max-height:260px;overflow-y:auto"></div>
      </div>

      <!-- Kitap için textarea, playlist için gizli (veri dahili tutulur) -->
      <div class="field" id="crmTestsField">
        <label id="crmTestsLabel">Testler</label>
        <textarea id="crmTests" style="min-height:180px; font-size:12px; font-family:monospace" placeholder="Format:
Sayılar - Test 1 | 12
Sayılar - Test 2 | 14"></textarea>
      </div>
      <button class="btn btn-accent" style="width:100%; justify-content:center; padding:12px; margin-top:4px" onclick="saveResourceCoach()">Kaydet</button>
    </div>`,document.body.appendChild(a),a.addEventListener("click",i=>{i.target===a&&a.classList.remove("open")})),document.getElementById("crmId").value=e||"",document.getElementById("crmType").value=t,document.getElementById("crmTitle").textContent=(e?"Kaynağı Düzenle":"Kaynak Ekle")+(n?" — Playlist":" — Soru Bankası"),document.getElementById("crmTestsLabel").innerHTML=n?'Videolar <span style="color:var(--text-dim);font-weight:400">(Format: Video Adı | Link | Süre(dk))</span>':'Testler <span style="color:var(--text-dim);font-weight:400">(Format: Test Adı | Soru Sayısı)</span>',document.getElementById("crmTests").placeholder=n?`Ders 1 | https://youtube.com/watch?v=xxx | 45
Ders 2 | https://youtube.com/watch?v=yyy | 38`:`Sayılar - Test 1 | 12
Sayılar - Test 2 | 14`,document.getElementById("crmYtImportBox").style.display=n&&!e?"":"none",document.getElementById("crmTestsField").style.display=n?"none":"",document.getElementById("crmYtUrl").value="",document.getElementById("crmYtStatus").textContent="",document.getElementById("crmVideoPreview").style.display="none",document.getElementById("crmVideoPreview").innerHTML="",window._crmFetchedVideos=[],e?h.from("resources").select("*").eq("id",e).single().then(({data:i})=>{if(i){document.getElementById("crmExam").value=i.exam_type,document.getElementById("crmSubject").value=i.subject,document.getElementById("crmPublisher").value=i.publisher||"",document.getElementById("crmName").value=i.name||"";const o=i.tests||[];n?(document.getElementById("crmTestsField").style.display="",document.getElementById("crmTests").value=o.map(s=>`${s.label||s} | ${s.url||""} | ${s.soru||0}`).join(`
`)):document.getElementById("crmTests").value=o.map(s=>`${s.label||s} | ${s.soru||0}`).join(`
`)}}):(document.getElementById("crmExam").value="TYT",document.getElementById("crmSubject").value="Matematik",document.getElementById("crmPublisher").value="",document.getElementById("crmName").value="",document.getElementById("crmTests").value=""),V("coachResourceModal")}async function Xl(){const e=document.getElementById("crmYtUrl").value.trim(),t=document.getElementById("crmYtStatus");if(!e)return t.innerHTML='<span style="color:var(--red)">⚠️ Playlist URL girin</span>';const n=e.match(/[?&]list=([^&]+)/);if(!n)return t.innerHTML='<span style="color:var(--red)">⚠️ list= parametresi bulunamadı</span>';const a=n[1];t.innerHTML="⏳ Çekiliyor...";try{let i=[],o="";do{let r=`/api/youtube?playlistId=${a}`;o&&(r+=`&pageToken=${o}`);const l=await fetch(r);if(!l.ok)throw new Error("Playlist çekilemedi.");const c=await l.json();c.items&&(i=i.concat(c.items)),o=c.nextPageToken||"",t.innerHTML=`⏳ ${i.length} video yükleniyor...`}while(o&&i.length<200);window._crmFetchedVideos=i;const s=document.getElementById("crmVideoPreview");if(s.style.display="",s.innerHTML=i.map((r,l)=>`
      <div style="display:flex;align-items:center;gap:8px;padding:7px 12px;border-bottom:1px solid var(--border)">
        <div style="width:20px;height:20px;border-radius:5px;background:var(--surface3);color:var(--text-mid);font-size:9px;font-weight:800;display:flex;align-items:center;justify-content:center;flex-shrink:0">${l+1}</div>
        <div style="flex:1;min-width:0">
          <div style="font-size:11px;font-weight:600;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${g(r.title)}</div>
          <div style="font-size:10px;color:var(--text-dim)">⏱ ${r.duration||"?"} dk</div>
        </div>
        <a href="${g(r.url)}" target="_blank" style="font-size:10px;font-weight:700;background:#cc000022;color:#ff5555;border:1px solid #aa222233;padding:3px 8px;border-radius:6px;text-decoration:none;flex-shrink:0">▶</a>
      </div>`).join(""),i.length>0&&!document.getElementById("crmName").value){const r=i[0].title;document.getElementById("crmName").value=r.split(" | ")[0].split(" - ")[0].trim().slice(0,50)}t.innerHTML=`<span style="color:var(--green)">✓ ${i.length} video çekildi!</span>`}catch(i){t.innerHTML=`<span style="color:var(--red)">⚠️ Hata: ${i.message}</span>`}}async function Ql(){const e=document.getElementById("crmName").value.trim(),t=document.getElementById("crmSubject").value;if(!e||!t)return b("Ad ve ders zorunlu!");const n=document.getElementById("crmId").value,a=document.getElementById("crmType").value==="playlist",i=document.getElementById("crmTests").value.split(`
`).map(l=>l.trim()).filter(Boolean),o=window._crmFetchedVideos||[];let s=[];if(a){if(o.length>0?s=o.map(l=>({label:l.title||"",url:l.url||"",topic:"",soru:parseInt(l.duration)||0})):s=i.map(l=>{const c=l.split("|").map(d=>d.trim());return{label:c[0]||"",url:c[1]||"",topic:"",soru:parseInt(c[2])||0}}),!s.length)return b("Video listesi boş! Önce playlist çekin.")}else s=i.map(l=>{const c=l.split("|").map(d=>d.trim());return{label:c[0]||"",soru:parseInt(c[1])||0}});const r={exam_type:document.getElementById("crmExam").value,subject:t,publisher:document.getElementById("crmPublisher").value.trim(),year:new Date().getFullYear(),name:e,tests:s,active:!0,resource_type:a?"playlist":"book",coach_id:x.coachId};C(!0),n?(await h.from("resources").update(r).eq("id",n),b("Güncellendi ✓")):(await h.from("resources").insert(r),b("Kaynak eklendi ✓")),C(!1),Z("coachResourceModal"),ze=[],Mt()}async function ed(e){await ie("Bu kaynağı silmek istediğinizden emin misiniz?")&&(C(!0),await h.from("resources").delete().eq("id",e),C(!1),b("Silindi"),ze=[],Mt())}function td(e){const t=e.target.files[0];if(!t)return;C(!0);const n=new FileReader;n.onload=async a=>{try{const i=new Uint8Array(a.target.result),o=XLSX.read(i,{type:"array"}),s=o.SheetNames[0],r=o.Sheets[s],l=XLSX.utils.sheet_to_json(r);if(l.length===0)return C(!1),b("Excel dosyası boş!");const c={};l.forEach(u=>{const v=u["Kaynak Adı"]||u.Name||u["Kitap Adı"]||u["Playlist Adı"]||"",k=(u["Kaynak Türü"]||u.Type||u.Tür||"book").toLowerCase().includes("playlist")?"playlist":"book",y=u.Yayınevi||u.Publisher||u.Hoca||"",$=u.Sınav||u.Exam||"TYT",w=u.Ders||u.Subject||"",I=u["Öğe Adı"]||u.Test||u.Video||u["Test Adı"]||u["Video Adı"]||"",T=parseInt(u["Soru Sayısı"]||u.Soru||u.Süre||u["Süre (dk)"]||0),B=u.URL||u.Link||"";if(!v||!w||!I)return;const S=`${v}_${$}_${w}_${k}`;c[S]||(c[S]={exam_type:$,subject:w,publisher:y,name:v,resource_type:k,tests:[]}),c[S].tests.push({label:I,soru:T,url:B,topic:""})});const d=Object.values(c);if(d.length===0)return C(!1),b("Uyumlu veri bulunamadı! Sütun başlıklarını kontrol edin.");let m=0;for(const u of d){const{error:v}=await h.from("resources").insert({...u,year:new Date().getFullYear(),active:!0,coach_id:x.coachId});v||m++}C(!1),b(`✓ Excel'den ${m} kaynak başarıyla aktarıldı!`),ze=[],Mt()}catch(i){C(!1),console.error(i),b("Excel okuma hatası: "+i.message)}},n.readAsArrayBuffer(t)}function nd(e){const t=e.target.files[0];if(!t)return;C(!0);const n=new FileReader;n.onload=async a=>{try{const i=new Uint8Array(a.target.result),o=XLSX.read(i,{type:"array"}),s=o.Sheets[o.SheetNames[0]],r=XLSX.utils.sheet_to_json(s);if(r.length===0)return C(!1),b("Excel dosyası boş!");let l=0;for(const c of r){const d=c["Ad Soyad"]||c.Ad||c.Name||"",m=c.Hedef||c.Target||"Hedef belirtilmemiş";let u=c["Kullanıcı Adı"]||c.Username||"",v=c.Şifre||c.Password||STU_DEFAULT_PASS;if(!d)continue;u||(u=d.toLowerCase().replace(/\s+/g,"")+Math.floor(Math.random()*100),u=Ve(u));const f=await Xe(v),k=u+"@rostrumakademi.com",{data:y,error:$}=await h.rpc("create_new_user",{p_email:k,p_password:v,p_full_name:d,p_username:u,p_role:"student",p_target:m,p_color:"#4da6ff",p_progress:0,p_week_start:0,p_coach_id:x.coachId,p_institution_id:null,p_exam_profile:"YKS"});!$&&y&&(p.students.push({id:y,name:d,target:m,color:"#4da6ff",progress:0,pass:f,weekStart:0,username:u}),l++)}C(!1),b(`✓ Excel'den ${l} öğrenci başarıyla eklendi!`),_e(),et()}catch(i){C(!1),console.error(i),b("Excel okuma hatası: "+i.message)}},n.readAsArrayBuffer(t)}function Di(e){if(!p.activeStuId||!te)return null;let t=null;return Object.entries(p.tasks).forEach(([n,a])=>{n.startsWith(p.activeStuId+"_")&&a.forEach(i=>{i.subject&&i.subject.includes(te.name)&&(i.task_items&&Array.isArray(i.task_items)?i.task_items.forEach(o=>{(o.label||o)===e&&(o.done||i.done?t="done":t!=="done"&&(t="pending"))}):i.note&&i.note.includes(e)&&(i.done?t="done":t!=="done"&&(t="pending")))})}),t}async function ad(e,t){var l;const a=`${p.activeStuId}_${e}`,i=(l=p.tasks[a])==null?void 0:l[t];if(!i)return;Fe=e,_editingTaskId=i._id,te=null,document.querySelector("#taskModal h2").innerHTML=`Görev Düzenle — <span id="tmDay">${e}</span>`,document.querySelector("#taskModal .btn-accent").textContent="Güncelle",document.getElementById("tmType").value=i.type,document.getElementById("tmExam").value=i.exam||"",document.getElementById("tmDuration").value=i.duration||60,document.getElementById("tmStartTime").value=i.start_time||"",document.getElementById("tmNote").value=i.note||"";const o=i.exam||"",s=i.type;{const c=document.getElementById("tmSubjectSel"),d=document.getElementById("tmSubjectFree");document.getElementById("tmBookVal").value="",document.getElementById("tmBookSearch").value="",document.getElementById("tmBookList").style.display="none",document.getElementById("tmTestWrap").style.display="none";const m=document.getElementById("tmTestSummary");m&&(m.style.display="none"),o&&typeof SUBJECT_MAP<"u"&&SUBJECT_MAP[o]?(c.innerHTML=SUBJECT_MAP[o].map(f=>`<option value="${f}">${f}</option>`).join(""),c.style.display="",d.style.display="none"):(c.style.display="none",d.style.display="");const u=(s==="soru"||s==="konu")&&o;document.getElementById("soruBankasiWrap").style.display=u?"":"none";const v=document.getElementById("tmBookSearch");v&&(v.placeholder=s==="konu"?"Hoca veya playlist ara...":"Kitap veya yayınevi ara...")}if(Ma(),(s==="soru"||s==="konu")&&o){const c=document.getElementById("tmSubjectSel");let d="",m=i.subject;if(i.subject.includes(" - ")){const k=i.subject.split(" - ");d=k[0].trim(),m=k.slice(1).join(" - ").trim()}d&&SUBJECT_MAP[o]&&SUBJECT_MAP[o].includes(d)&&(c.value=d),document.getElementById("tmBookVal").value=m,document.getElementById("tmBookSearch").value=m,C(!0),await Aa(),C(!1);const u=`${o}_${d}`;let f=(me[u]||[]).find(k=>k.name===m);if(f||Object.values(me).forEach(k=>{const y=k.find($=>$.name===m);y&&(f=y)}),f){te=f,document.getElementById("tmTestWrap").style.display="",Jt();const k=(i.task_items||[]).map($=>$.label||$);document.querySelectorAll("#tmTestList input[type=checkbox]").forEach($=>{var T;const w=parseInt($.value),I=((T=te.testler[w])==null?void 0:T.label)||te.testler[w];k.includes(I)?$.checked=!0:$.checked=!1}),ut()}}else{const c=document.getElementById("tmSubjectSel"),d=document.getElementById("tmSubjectFree");c.style.display!=="none"?c.value=i.subject:d.value=i.subject,document.getElementById("tmBookVal").value="",document.getElementById("tmBookSearch").value="",document.getElementById("tmBookList").style.display="none",document.getElementById("tmTestWrap").style.display="none"}V("taskModal")}async function id(){const e=prompt("Şablon adı giriniz:");if(!e)return;const t=p.students.find(r=>r.id===p.activeStuId),n=(t==null?void 0:t.weekStart)??0,a=ae(p.weekOffset,n),i=[];for(let r=0;r<7;r++){const l=ee(a,r),c=G(l),d=`${p.activeStuId}_${c}`;(p.tasks[d]||[]).forEach(u=>{i.push({day_index:r,type:u.type,exam_type:u.exam||null,subject:u.subject,duration:u.duration,note:u.note||"",task_items:u.task_items||null})})}if(i.length===0)return b("Bu haftada kaydedilecek görev bulunmuyor!");C(!0);const{error:o}=await h.from("program_templates").insert({coach_id:x.coachId,name:e,description:`${i.length} görev içeriyor.`,tasks:i});if(C(!1),o)return b("Şablon kaydedilemedi: "+o.message);b("Hafta şablon olarak kaydedildi ✓"),await ie(`"${e}" şablonunu Rostrum Akademi ekibiyle paylaşmak ister misiniz?

Paylaşılan şablonlar değerlendirilerek tüm koçlara önerilebilir.`)&&h.auth.getSession().then(({data:{session:r}})=>{const l=r==null?void 0:r.access_token;l&&fetch("/api/mailer",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${l}`},body:JSON.stringify({type:"template_share",template_name:e,task_count:i.length,tasks_json:JSON.stringify(i,null,2)})}).then(()=>b("Şablon Rostrum ekibiyle paylaşıldı ✓")).catch(()=>b("Şablon kaydedildi, paylaşım gönderilemedi."))})}async function od(){C(!0);const{data:e,error:t}=await h.from("program_templates").select("*").eq("coach_id",x.coachId);if(C(!1),t)return b("Şablonlar yüklenemedi.");if(!e||e.length===0)return b("Kayıtlı şablonunuz bulunmuyor. Önce haftayı şablon olarak kaydedin.");let n=document.getElementById("applyTemplateModal");n||(n=document.createElement("div"),n.id="applyTemplateModal",n.className="modal-bg",n.innerHTML=`<div class="modal">
      <button class="modal-close" onclick="cm('applyTemplateModal')">×</button>
      <h2>Şablon Uygula</h2>
      <div class="field"><label>Şablon Seçin</label>
        <select id="atmSelect"></select>
      </div>
      <button class="btn btn-accent" style="width:100%;justify-content:center;padding:12px;margin-top:12px" onclick="confirmApplyTemplate()">Uygula</button>
    </div>`,document.body.appendChild(n),n.addEventListener("click",a=>{a.target===n&&n.classList.remove("open")})),document.getElementById("atmSelect").innerHTML=e.map(a=>`<option value="${a.id}">${g(a.name)} (${a.tasks.length} Görev)</option>`).join(""),V("applyTemplateModal")}async function rd(){const e=p.students.find(E=>E.id===p.activeStuId);if(!e)return b("Öğrenci bulunamadı.");const t=e.weekStart??0,n=ae(p.weekOffset,t),a=ee(n,6);C(!0);const{data:i,error:o}=await h.from("tasks").select("*").eq("student_id",p.activeStuId).gte("date",G(n)).lte("date",G(a));if(C(!1),o)return console.error("Haftalık Rapor verisi yüklenemedi:",o),b("Veriler yüklenemedi: "+o.message);const s=(i||[]).map(E=>({_id:E.id,type:E.type,exam:E.exam_type,subject:E.subject,duration:E.duration,note:E.note,done:E.done,student_note:E.student_note||"",student_feedback:E.student_feedback||null,student_result:E.student_result||null,task_items:E.task_items||[],date:E.date}));if(s.sort((E,A)=>E.date.localeCompare(A.date)),s.length===0)return b("Bu haftaya ait atanmış görev bulunmuyor.");const r=s.length,l=s.filter(E=>E.done).length,c=Math.round(l/r*100),d=s.filter(E=>{var A;return(A=E.student_feedback)==null?void 0:A.focus}),m=d.length?(d.reduce((E,A)=>E+A.student_feedback.focus,0)/d.length).toFixed(1):"—",u={1:0,2:0,3:0,4:0,5:0},v={1:"Çok Kolay",2:"Kolay",3:"Orta",4:"Zor",5:"Çok Zor"};s.forEach(E=>{var P;const A=(P=E.student_feedback)==null?void 0:P.difficulty;A&&u[A]!==void 0&&u[A]++});const f=s.reduce((E,A)=>E+Number(A.duration||0),0),k=s.reduce((E,A)=>{var P;return E+Number(((P=A.student_feedback)==null?void 0:P.time_spent)||0)},0),y=[],$={time:"Zamanı yetmedi",topic:"Konuyu anlayamadı",hard:"Kaynak çok zordu",moti:"Motivasyon yok"};s.forEach(E=>{var P;const A=(P=E.student_feedback)==null?void 0:P.blocker;A&&y.push({task:E.subject,reason:$[A]||A})});let w=0,I=0,T=0,B=0;s.forEach(E=>{E.student_result&&(I+=Number(E.student_result.dogru||0),T+=Number(E.student_result.yanlis||0),B+=Number(E.student_result.bos||0))}),w=I+T+B;const S=(I-T/4).toFixed(2);let M=document.getElementById("weeklyReportModal");M||(M=document.createElement("div"),M.id="weeklyReportModal",M.className="modal-bg",document.body.appendChild(M),M.addEventListener("click",E=>{E.target===M&&M.classList.remove("open")})),M.innerHTML=`<div class="modal" style="max-width:800px; width:95%; max-height:85vh; overflow-y:auto; padding:24px; border-radius:16px; position:relative;">
    <button class="modal-close" onclick="cm('weeklyReportModal')">×</button>
    <h2 style="margin-bottom:6px; display:flex; align-items:center; gap:8px;">📊 Haftalık Gelişim Raporu</h2>
    <p style="font-size:13px; color:var(--text-mid); margin-bottom:20px;">
      Öğrenci: <strong style="color:var(--accent);">${g(e.name)}</strong> &nbsp;|&nbsp; 
      Hafta: <strong>${n.getDate()} ${MONTHS_TR[n.getMonth()]} — ${a.getDate()} ${MONTHS_TR[a.getMonth()]} ${a.getFullYear()}</strong>
    </p>
    
    <!-- SUMMARY CARDS -->
    <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(160px, 1fr)); gap:12px; margin-bottom:20px;">
      <div class="card" style="padding:16px; text-align:center;">
        <div style="font-size:24px; font-weight:800; color:var(--accent);">${c}%</div>
        <div style="font-size:11px; color:var(--text-dim); text-transform:uppercase; margin-top:4px;">Görev Tamamlama</div>
        <div style="font-size:12px; color:var(--text-mid); margin-top:2px;">${l} / ${r} Görev</div>
      </div>
      <div class="card" style="padding:16px; text-align:center;">
        <div style="font-size:24px; font-weight:800; color:#f0a500;">
          ${m} <span style="font-size:16px;">★</span>
        </div>
        <div style="font-size:11px; color:var(--text-dim); text-transform:uppercase; margin-top:4px;">Ortalama Odaklanma</div>
        <div style="font-size:12px; color:var(--text-mid); margin-top:2px;">${d.length} Geri Bildirim</div>
      </div>
      <div class="card" style="padding:16px; text-align:center;">
        <div style="font-size:24px; font-weight:800; color:var(--blue);">${w}</div>
        <div style="font-size:11px; color:var(--text-dim); text-transform:uppercase; margin-top:4px;">Çözülen Soru</div>
        <div style="font-size:12px; color:var(--text-mid); margin-top:2px;">Net: <strong style="color:var(--green);">${S}</strong></div>
      </div>
      <div class="card" style="padding:16px; text-align:center;">
        <div style="font-size:24px; font-weight:800; color:var(--green);">${k} dk</div>
        <div style="font-size:11px; color:var(--text-dim); text-transform:uppercase; margin-top:4px;">Çalışma Süresi</div>
        <div style="font-size:12px; color:var(--text-mid); margin-top:2px;">Planlanan: ${f} dk</div>
      </div>
    </div>

    <!-- DETAILS SECTIONS -->
    <div style="display:grid; grid-template-columns:1fr; gap:16px; margin-bottom:20px;">
      ${w>0?`
      <div class="card" style="padding:16px;">
        <h3 style="margin-bottom:12px; font-size:14px; font-weight:700;">📊 Soru Dağılımı ve Net Analizi</h3>
        <div style="display:flex; align-items:center; gap:16px; margin-bottom:14px;">
          <div style="flex:1;">
            <div style="display:flex; justify-content:space-between; font-size:12px; margin-bottom:4px;">
              <span>Doğru Soru Oranı</span>
              <strong>${Math.round(I/w*100)}%</strong>
            </div>
            <div style="height:8px; background:var(--surface2); border-radius:4px; overflow:hidden;">
              <div style="width:${I/w*100}%; height:100%; background:var(--green);"></div>
            </div>
          </div>
        </div>
        <div style="display:grid; grid-template-columns:repeat(4, 1fr); gap:8px; text-align:center;">
          <div style="background:var(--surface2); padding:8px; border-radius:8px;">
            <div style="font-size:10px; color:var(--green); font-weight:700;">✓ DOĞRU</div>
            <div style="font-size:16px; font-weight:800; margin-top:4px;">${I}</div>
          </div>
          <div style="background:var(--surface2); padding:8px; border-radius:8px;">
            <div style="font-size:10px; color:var(--red); font-weight:700;">✗ YANLIŞ</div>
            <div style="font-size:16px; font-weight:800; margin-top:4px;">${T}</div>
          </div>
          <div style="background:var(--surface2); padding:8px; border-radius:8px;">
            <div style="font-size:10px; color:var(--text-dim); font-weight:700;">— BOŞ</div>
            <div style="font-size:16px; font-weight:800; margin-top:4px;">${B}</div>
          </div>
          <div style="background:var(--accent-dim); padding:8px; border-radius:8px; border:1px solid var(--accent-border);">
            <div style="font-size:10px; color:var(--accent); font-weight:700;">⚡ NET</div>
            <div style="font-size:16px; font-weight:800; color:var(--accent); margin-top:4px;">${S}</div>
          </div>
        </div>
      </div>
      `:""}

      <div class="card" style="padding:16px;">
        <h3 style="margin-bottom:12px; font-size:14px; font-weight:700;">📈 Görev Zorluk Derecesi Dağılımı</h3>
        <div style="display:flex; flex-direction:column; gap:8px;">
          ${[5,4,3,2,1].map(E=>{const A=u[E]||0,P=s.filter(L=>{var j;return(j=L.student_feedback)==null?void 0:j.difficulty}).length,D=P?Math.round(A/P*100):0,_={1:"#3ecf8e",2:"#86efac",3:"#f0a500",4:"#fb923c",5:"#ef4444"}[E];return`
              <div style="display:flex; align-items:center; gap:8px; font-size:12px;">
                <span style="width:70px; font-weight:600; color:var(--text-mid);">${v[E]}</span>
                <div style="flex:1; height:6px; background:var(--surface2); border-radius:3px; overflow:hidden;">
                  <div style="width:${D}%; height:100%; background:${_};"></div>
                </div>
                <span style="width:30px; text-align:right; font-weight:700; color:var(--text-mid);">${A}</span>
              </div>
            `}).join("")}
        </div>
      </div>

      ${y.length>0?`
      <div class="card" style="padding:16px; border:1.5px solid rgba(251,146,60,.3); background:rgba(251,146,60,.03);">
        <h3 style="margin-bottom:8px; font-size:14px; font-weight:700; color:#fb923c; display:flex; align-items:center; gap:6px;">⚠️ Karşılaşılan Engeller</h3>
        <div style="display:flex; flex-direction:column; gap:6px;">
          ${y.map(E=>`
            <div style="font-size:12px; color:var(--text-mid);">
              📌 <strong>${g(E.task)}</strong>: <span style="color:#fb923c; font-weight:600;">${E.reason}</span>
            </div>
          `).join("")}
        </div>
      </div>
      `:""}
    </div>

    <!-- DETAILED TABLE WITH FILTERS & SORTING -->
    <div class="card" style="padding:16px;">
      <h3 style="margin-bottom:12px; font-size:14px; font-weight:700;">📋 Görev Bazlı Detaylı Tablo</h3>
      
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:16px; flex-wrap:wrap; gap:12px; background:var(--surface2); padding:10px 14px; border-radius:10px; border:1px solid var(--border);">
        <!-- Kategori Filtresi -->
        <div style="display:flex; align-items:center; gap:8px;">
          <span style="font-size:11px; font-weight:700; color:var(--text-dim); text-transform:uppercase; letter-spacing:.5px;">📁 Kategori:</span>
          <select id="wrCategoryFilter" onchange="window.filterSortWeeklyReport()" style="padding:6px 12px; font-size:12px; font-weight:600; border-radius:8px; background:var(--surface); border:1.5px solid var(--border); color:var(--text); outline:none; cursor:pointer;">
            <option value="all">Tüm Tipler</option>
            <option value="soru">Soru Bankası</option>
            <option value="konu">Konu Anlatımı</option>
            <option value="deneme">Deneme</option>
            <option value="diger">Diğer</option>
          </select>
        </div>
        <!-- Sıralama Seçenekleri -->
        <div style="display:flex; align-items:center; gap:8px;">
          <span style="font-size:11px; font-weight:700; color:var(--text-dim); text-transform:uppercase; letter-spacing:.5px;">⚡ Sırala:</span>
          <select id="wrSortSelect" onchange="window.filterSortWeeklyReport()" style="padding:6px 12px; font-size:12px; font-weight:600; border-radius:8px; background:var(--surface); border:1.5px solid var(--border); color:var(--text); outline:none; cursor:pointer;">
            <option value="date">Tarih (Varsayılan)</option>
            <option value="alpha">Alfabetik (A-Z)</option>
            <option value="status">Durum (Önce Tamamlananlar)</option>
            <option value="result">Sonuç (Çözülen Soru Sayısı)</option>
            <option value="duration">Çalışma Süresi (Çoktan Aza)</option>
            <option value="focus">Odaklanma Derecesi</option>
            <option value="difficulty">Zorluk Derecesi</option>
          </select>
        </div>
      </div>

      <div style="overflow-x:auto;">
        <table style="width:100%; border-collapse:collapse; font-size:12px; text-align:left;">
          <thead>
            <tr style="border-bottom:2px solid var(--border); color:var(--text-dim); font-size:11px; text-transform:uppercase;">
              <th style="padding:8px 4px;">Görev / Konu</th>
              <th style="padding:8px 4px; text-align:center;">Durum</th>
              <th style="padding:8px 4px; text-align:center;">Sonuç (D/Y/B)</th>
              <th style="padding:8px 4px; text-align:center;">Süre</th>
              <th style="padding:8px 4px; text-align:center;">Odak</th>
              <th style="padding:8px 4px; text-align:center;">Zorluk</th>
              <th style="padding:8px 4px;">Öğrenci Notu</th>
            </tr>
          </thead>
          <tbody id="wrTableBody">
            <!-- Dinamik olarak filterSortWeeklyReport tarafından doldurulacak -->
          </tbody>
        </table>
      </div>
    </div>
  </div>`,window.currentWRTasks=s,V("weeklyReportModal"),setTimeout(()=>{window.filterSortWeeklyReport&&window.filterSortWeeklyReport()},50)}window.filterSortWeeklyReport=function(){var o,s;const e=((o=document.getElementById("wrCategoryFilter"))==null?void 0:o.value)||"all",t=((s=document.getElementById("wrSortSelect"))==null?void 0:s.value)||"date",n={1:"Çok Kolay",2:"Kolay",3:"Orta",4:"Zor",5:"Çok Zor"};let a=[...window.currentWRTasks||[]];if(e!=="all"&&(a=a.filter(r=>r.type===e)),t==="alpha")a.sort((r,l)=>r.subject.localeCompare(l.subject,"tr"));else if(t==="status")a.sort((r,l)=>(l.done?1:0)-(r.done?1:0));else if(t==="result"){const r=l=>l.student_result?Number(l.student_result.dogru||0)+Number(l.student_result.yanlis||0)+Number(l.student_result.bos||0):0;a.sort((l,c)=>r(c)-r(l))}else if(t==="duration"){const r=l=>{var c;return Number(((c=l.student_feedback)==null?void 0:c.time_spent)||0)};a.sort((l,c)=>r(c)-r(l))}else if(t==="focus"){const r=l=>{var c;return Number(((c=l.student_feedback)==null?void 0:c.focus)||0)};a.sort((l,c)=>r(c)-r(l))}else if(t==="difficulty"){const r=l=>{var c;return Number(((c=l.student_feedback)==null?void 0:c.difficulty)||0)};a.sort((l,c)=>r(c)-r(l))}else a.sort((r,l)=>r.date.localeCompare(l.date));const i=document.getElementById("wrTableBody");i&&(a.length===0?i.innerHTML='<tr><td colspan="7" style="text-align:center; padding:20px; color:var(--text-dim);">Filtreye uygun görev bulunamadı.</td></tr>':i.innerHTML=a.map(r=>{var f,k,y;const l=r.done?"✓ Tamam":"✗ Eksik",c=r.done?"var(--green)":"var(--text-dim)",d=r.student_result?`${r.student_result.dogru||0}/${r.student_result.yanlis||0}/${r.student_result.bos||0}`:"—",m=(f=r.student_feedback)!=null&&f.focus?"★".repeat(r.student_feedback.focus):"—",u=(k=r.student_feedback)!=null&&k.difficulty?n[r.student_feedback.difficulty]:"—",v=(y=r.student_feedback)!=null&&y.time_spent?`${r.student_feedback.time_spent} dk`:"—";return`
          <tr style="border-bottom:1px solid var(--border); transition:background .15s;" onmouseover="this.style.background='var(--surface2)'" onmouseout="this.style.background='transparent'">
            <td style="padding:8px 4px; font-weight:600; color:var(--text);">${g(r.subject)}</td>
            <td style="padding:8px 4px; text-align:center; font-weight:700; color:${c};">${l}</td>
            <td style="padding:8px 4px; text-align:center; font-weight:700; color:var(--accent);">${d}</td>
            <td style="padding:8px 4px; text-align:center;">${v}</td>
            <td style="padding:8px 4px; text-align:center; color:#f0a500; font-size:10px;">${m}</td>
            <td style="padding:8px 4px; text-align:center;">${u}</td>
            <td style="padding:8px 4px; color:var(--text-mid); max-width:150px; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;" title="${g(r.student_note||"")}">${g(r.student_note||"—")}</td>
          </tr>
        `}).join(""))};async function sd(){const e=document.getElementById("atmSelect").value;if(!e)return;C(!0);const{data:t,error:n}=await h.from("program_templates").select("*").eq("id",e).single();if(n||!t)return C(!1),b("Şablon yüklenemedi.");const a=p.students.find(s=>s.id===p.activeStuId),i=(a==null?void 0:a.weekStart)??0,o=ae(p.weekOffset,i);for(const s of t.tasks){const r=G(ee(o,s.day_index)),l={student_id:p.activeStuId,coach_id:x.coachId,date:r,type:s.type,exam_type:s.exam_type,subject:s.subject,duration:s.duration,note:s.note,done:!1,task_items:s.task_items},{data:c,error:d}=await h.from("tasks").insert(l).select().single();if(!d&&c){const m=`${p.activeStuId}_${r}`;p.tasks[m]||(p.tasks[m]=[]),p.tasks[m].push({_id:c.id,type:c.type,exam:c.exam_type,subject:c.subject,duration:c.duration,note:c.note,done:!1,student_note:"",task_items:c.task_items})}}C(!1),Z("applyTemplateModal"),ne(),b("Şablon başarıyla uygulandı ✓")}function ld(e,t){var o;const a=`${p.activeStuId}_${e}`,i=(o=p.tasks[a])==null?void 0:o[t];i&&(_clipboardTask={type:i.type,exam:i.exam,subject:i.subject,duration:i.duration,note:i.note,task_items:i.task_items},b("Görev panoya kopyalandı ✓"),ne())}async function dd(e){if(!_clipboardTask)return;const t={student_id:p.activeStuId,coach_id:x.coachId,date:e,type:_clipboardTask.type,exam_type:_clipboardTask.exam||null,subject:_clipboardTask.subject,duration:_clipboardTask.duration,note:_clipboardTask.note,done:!1,task_items:_clipboardTask.task_items};C(!0);const{data:n,error:a}=await h.from("tasks").insert(t).select().single();if(C(!1),a)return b("Hata: "+a.message);const i=`${p.activeStuId}_${e}`;p.tasks[i]||(p.tasks[i]=[]),p.tasks[i].push({_id:n.id,type:n.type,exam:n.exam_type,subject:n.subject,duration:n.duration,note:n.note,done:!1,student_note:"",task_items:n.task_items}),ne(),b("Görev yapıştırıldı ✓")}async function cd(e,t){var d;const n=`${p.activeStuId}_${e}`,a=(d=p.tasks[n])==null?void 0:d[t];if(!a)return;const i=p.students.find(m=>m.id===p.activeStuId),o=(i==null?void 0:i.weekStart)??0,s=ae(p.weekOffset,o),r=[];for(let m=0;m<7;m++){const u=ee(s,m),v=G(u);v!==e&&r.push({student_id:p.activeStuId,coach_id:x.coachId,date:v,type:a.type,exam_type:a.exam||null,subject:a.subject,duration:a.duration,note:a.note,done:!1,task_items:a.task_items})}if(r.length===0)return;C(!0);const{data:l,error:c}=await h.from("tasks").insert(r).select();if(C(!1),c)return b("Hata: "+c.message);(l||[]).forEach(m=>{const u=`${p.activeStuId}_${m.date}`;p.tasks[u]||(p.tasks[u]=[]),p.tasks[u].push({_id:m.id,type:m.type,exam:m.exam_type,subject:m.subject,duration:m.duration,note:m.note,done:!1,student_note:"",task_items:m.task_items})}),ne(),b("Görev tüm haftaya kopyalandı ✓")}async function pd(){if(!_clipboardTask)return;const e=p.students.find(s=>s.id===p.activeStuId),t=(e==null?void 0:e.weekStart)??0,n=ae(p.weekOffset,t),a=[];for(let s=0;s<7;s++){const r=ee(n,s),l=G(r);a.push({student_id:p.activeStuId,coach_id:x.coachId,date:l,type:_clipboardTask.type,exam_type:_clipboardTask.exam||null,subject:_clipboardTask.subject,duration:_clipboardTask.duration,note:_clipboardTask.note,done:!1,task_items:_clipboardTask.task_items})}C(!0);const{data:i,error:o}=await h.from("tasks").insert(a).select();if(C(!1),o)return b("Hata: "+o.message);(i||[]).forEach(s=>{const r=`${p.activeStuId}_${s.date}`;p.tasks[r]||(p.tasks[r]=[]),p.tasks[r].push({_id:s.id,type:s.type,exam:s.exam_type,subject:s.subject,duration:s.duration,note:s.note,done:!1,student_note:"",task_items:s.task_items})}),_clipboardTask=null,ne(),b("Görev tüm haftaya yapıştırıldı ✓")}$i();Bn();window.addEventListener("hashchange",()=>{let e=window.location.hash.substring(1);if(document.getElementById("appShell").classList.contains("visible")&&e!==currentTab){if(!e){e={coach:"home",student:"portal",developer:"home",parent:"parent-home"}[x.role]||"portal",window.location.hash=e;return}document.getElementById("view-"+e)&&le(e,!1)}});async function Un(){const e=document.getElementById("view-coach-applications");if(!e)return;e.innerHTML=`<div style="padding:24px;max-width:800px;margin:0 auto">
    <div style="font-family:'Inter',sans-serif;font-size:22px;font-weight:800;margin-bottom:4px">Öğrenci Başvuruları</div>
    <div style="font-size:13px;color:var(--text-mid);margin-bottom:20px">Kamu profil linkinize (rostrumakademi.com/koc/...) gelen ön başvurular</div>
    <div id="appsList" style="display:flex;flex-direction:column;gap:10px">
      <div style="text-align:center;padding:32px;color:var(--text-dim)">Yükleniyor...</div>
    </div>
  </div>`;const{data:t,error:n}=await h.from("match_requests").select("*").eq("matched_coach_id",x.coachId).order("created_at",{ascending:!1}),a=document.getElementById("appsList");if(n||!t){a.innerHTML=`<div style="padding:20px;color:var(--red);background:var(--red-dim);border-radius:10px">Başvurular yüklenemedi: ${(n==null?void 0:n.message)||"Bilinmeyen hata"}</div>`;return}if(t.length===0){a.innerHTML=`<div style="text-align:center;padding:40px;color:var(--text-dim)">
      <div style="font-size:32px;margin-bottom:12px">📭</div>
      <div style="font-size:14px;font-weight:600">Henüz başvuru yok</div>
      <div style="font-size:12px;margin-top:4px">Koc-bul sayfasındaki profilinize öğrenci başvurduğunda burada görünecek.</div>
    </div>`;const l=document.querySelector("#sbi_coach-applications .sb-badge");l&&l.remove();return}const i={pending:"#f0a500",accepted:"#3ecf8e",rejected:"#ff5c7a"},o={pending:"Beklemede",accepted:"Kabul Edildi",rejected:"Reddedildi"};a.innerHTML=t.map(l=>`
    <div style="background:var(--surface);border:1px solid var(--border);border-radius:14px;padding:18px 20px">
      <div style="display:flex;align-items:flex-start;justify-content:space-between;gap:12px;margin-bottom:12px">
        <div>
          <div style="font-size:15px;font-weight:700">${g(l.student_name||"İsimsiz")}</div>
          <div style="font-size:11px;color:var(--text-dim);margin-top:2px">${new Date(l.created_at).toLocaleDateString("tr-TR",{day:"numeric",month:"long",year:"numeric",hour:"2-digit",minute:"2-digit"})}</div>
        </div>
        <span style="font-size:11px;font-weight:700;padding:3px 10px;border-radius:99px;background:${i[l.status]||"#888"}22;color:${i[l.status]||"#888"};white-space:nowrap">
          ${o[l.status]||l.status}
        </span>
      </div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:14px">
        <div style="background:var(--surface2);border-radius:8px;padding:10px 12px">
          <div style="font-size:10px;color:var(--text-dim);font-weight:700;text-transform:uppercase;letter-spacing:.5px;margin-bottom:3px">E-posta</div>
          <a href="mailto:${g(l.email||"")}" style="font-size:13px;font-weight:600;color:var(--accent);text-decoration:none">${g(l.email||"—")}</a>
        </div>
        <div style="background:var(--surface2);border-radius:8px;padding:10px 12px">
          <div style="font-size:10px;color:var(--text-dim);font-weight:700;text-transform:uppercase;letter-spacing:.5px;margin-bottom:3px">Telefon</div>
          <a href="tel:${g(l.phone||"")}" style="font-size:13px;font-weight:600;color:var(--text);text-decoration:none">${g(l.phone||"—")}</a>
        </div>
        <div style="background:var(--surface2);border-radius:8px;padding:10px 12px">
          <div style="font-size:10px;color:var(--text-dim);font-weight:700;text-transform:uppercase;letter-spacing:.5px;margin-bottom:3px">Sınav Grubu</div>
          <div style="font-size:13px;font-weight:600">${g(l.exam_profile||"—")}</div>
        </div>
        ${l.phone?`<div style="background:var(--surface2);border-radius:8px;padding:10px 12px">
          <div style="font-size:10px;color:var(--text-dim);font-weight:700;text-transform:uppercase;letter-spacing:.5px;margin-bottom:3px">WhatsApp</div>
          <a href="https://wa.me/9${g((l.phone||"").replace(/\\D/g,""))}" target="_blank" style="font-size:12px;font-weight:700;color:#25D366;text-decoration:none">💬 Mesaj gönder</a>
        </div>`:""}
        ${l.goal||l.style?`<div style="background:var(--surface2);border-radius:8px;padding:10px 12px;grid-column:1/-1">
          <div style="font-size:10px;color:var(--text-dim);font-weight:700;text-transform:uppercase;letter-spacing:.5px;margin-bottom:3px">Hedef &amp; Durum</div>
          <div style="font-size:12px;color:var(--text-mid)">${g(l.goal||l.style)}</div>
        </div>`:""}
      </div>
      ${l.status==="pending"?`
      <div style="display:flex;gap:8px">
        <button onclick="updateApplication('${l.id}','accepted','${g(l.email||"")}','${g(l.student_name||"")}')" style="flex:1;padding:9px;background:rgba(62,207,142,.12);color:#3ecf8e;border:1px solid rgba(62,207,142,.25);border-radius:8px;font-size:12px;font-weight:700;cursor:pointer">✓ Kabul Et</button>
        <button onclick="updateApplication('${l.id}','rejected','${g(l.email||"")}','${g(l.student_name||"")}')" style="flex:1;padding:9px;background:rgba(255,92,122,.08);color:#ff5c7a;border:1px solid rgba(255,92,122,.2);border-radius:8px;font-size:12px;font-weight:700;cursor:pointer">✗ Reddet</button>
      </div>`:""}
    </div>`).join("");const s=t.filter(l=>l.status==="pending").length,r=document.getElementById("sbi_coach-applications");if(r){const l=r.querySelector(".sb-badge");if(l&&l.remove(),s>0){const c=document.createElement("span");c.className="sb-badge",c.textContent=s,r.appendChild(c)}}}async function ud(e,t,n,a){var o;const{error:i}=await h.from("match_requests").update({status:t}).eq("id",e);if(i)return b("Hata: "+i.message);b(t==="accepted"?"✓ Başvuru kabul edildi":"Başvuru reddedildi"),n&&n.includes("@")&&fetch("/api/mailer",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({type:"application_update",to:n,student_name:a||"",status:t,coach_name:((o=p.workspace)==null?void 0:o.brand_name)||"Koçunuz"})}).catch(s=>console.warn("[updateApplication] mail error:",s.message)),Un()}let Ze=null;async function Ci(){var a;const e=document.getElementById("view-coach-notes");if(!e)return;e.innerHTML=`<div style="padding:24px;max-width:860px;margin:0 auto">
    <div style="font-family:'Inter',sans-serif;font-size:22px;font-weight:800;margin-bottom:4px">Notlarım</div>
    <div style="font-size:13px;color:var(--text-mid);margin-bottom:20px">Kişisel notlar — sadece sen görürsün</div>
    <div style="display:flex;gap:10px;margin-bottom:18px">
      <button onclick="openNoteEditor(null)" style="padding:8px 18px;background:var(--accent);color:#fff;border:none;border-radius:8px;font-size:13px;font-weight:700;cursor:pointer">+ Yeni Not</button>
    </div>
    <div id="coachNotesList" style="display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:12px">
      <div style="grid-column:1/-1;text-align:center;padding:32px;color:var(--text-dim)">Yükleniyor...</div>
    </div>
  </div>`;const t=`coach_notes_${x.coachId}`,{data:n}=await h.from("platform_settings").select("value").eq("key",t).maybeSingle();Ze=((a=n==null?void 0:n.value)==null?void 0:a.notes)||[],Gn()}function Gn(){const e=document.getElementById("coachNotesList");if(!e)return;const t=Ze;if(!t.length){e.innerHTML=`<div style="grid-column:1/-1;text-align:center;padding:48px;color:var(--text-dim)">
      <div style="font-size:36px;margin-bottom:12px">📝</div>
      <div style="font-size:14px;font-weight:600">Henüz not yok</div>
      <div style="font-size:12px;margin-top:4px">+ Yeni Not ile başla</div>
    </div>`;return}const n=["#f0a50018","#3ecf8e18","#4da6ff18","#c084fc18","#ff5c7a18"];e.innerHTML=t.map((a,i)=>`
    <div style="background:${n[i%n.length]};border:1px solid var(--border);border-radius:14px;padding:16px;cursor:pointer;position:relative;transition:border-color .15s"
      onmouseover="this.style.borderColor='var(--accent)'" onmouseout="this.style.borderColor='var(--border)'"
      onclick="openNoteEditor(${i})">
      <div style="display:flex;align-items:flex-start;justify-content:space-between;gap:8px;margin-bottom:8px">
        <div style="font-size:13px;font-weight:700;color:var(--text)">${g(a.title||"Başlıksız")}</div>
        <button onclick="event.stopPropagation();deleteCoachNote(${i})" style="background:none;border:none;cursor:pointer;color:var(--text-dim);font-size:16px;padding:0;line-height:1;flex-shrink:0">✕</button>
      </div>
      <div style="font-size:12px;color:var(--text-mid);white-space:pre-wrap;line-height:1.5;max-height:100px;overflow:hidden">${g(a.body||"")}</div>
      <div style="font-size:10px;color:var(--text-dim);margin-top:10px">${a.updated?new Date(a.updated).toLocaleDateString("tr-TR",{day:"numeric",month:"short",year:"numeric"}):""}</div>
    </div>`).join("")}function md(e){const t=e!==null?Ze[e]||{}:{};let n=document.getElementById("coachNoteModal");n||(n=document.createElement("div"),n.id="coachNoteModal",n.className="modal-bg",document.body.appendChild(n)),n.innerHTML=`<div class="modal" style="max-width:520px">
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:16px">
      <div style="font-size:16px;font-weight:800">${e===null?"Yeni Not":"Notu Düzenle"}</div>
      <button onclick="document.getElementById('coachNoteModal').style.display='none'" style="background:none;border:none;cursor:pointer;font-size:20px;color:var(--text-dim)">✕</button>
    </div>
    <input id="noteEditorTitle" value="${g(t.title||"")}" placeholder="Başlık..." style="width:100%;padding:10px 12px;background:var(--surface2);border:1px solid var(--border);border-radius:8px;color:var(--text);font-size:14px;font-weight:600;box-sizing:border-box;margin-bottom:10px">
    <textarea id="noteEditorBody" rows="8" placeholder="Not içeriği..." style="width:100%;padding:10px 12px;background:var(--surface2);border:1px solid var(--border);border-radius:8px;color:var(--text);font-size:13px;line-height:1.6;resize:vertical;box-sizing:border-box;font-family:inherit">${g(t.body||"")}</textarea>
    <div style="display:flex;gap:8px;margin-top:14px">
      <button onclick="saveCoachNote(${e})" style="flex:1;padding:10px;background:var(--accent);color:#fff;border:none;border-radius:8px;font-size:13px;font-weight:700;cursor:pointer">Kaydet</button>
      <button onclick="document.getElementById('coachNoteModal').style.display='none'" style="padding:10px 16px;background:var(--surface2);color:var(--text);border:1px solid var(--border);border-radius:8px;font-size:13px;cursor:pointer">İptal</button>
    </div>
  </div>`,n.style.display="flex"}async function gd(e){const t=document.getElementById("noteEditorTitle").value.trim(),n=document.getElementById("noteEditorBody").value.trim();if(!t&&!n)return b("Not boş olamaz");const a={title:t||"Başlıksız",body:n,updated:new Date().toISOString()};e===null?Ze.unshift(a):Ze[e]=a,await Li(),document.getElementById("coachNoteModal").style.display="none",Gn(),b("Not kaydedildi ✓")}async function fd(e){await ie("Bu notu silmek istiyor musun?")&&(Ze.splice(e,1),await Li(),Gn(),b("Not silindi"))}async function Li(){const e=`coach_notes_${x.coachId}`;await h.from("platform_settings").upsert({key:e,value:{notes:Ze}},{onConflict:"key"})}function rn(){if(x.role!=="student")return;const e=(p.messages[x.studentId]||[]).filter(t=>t.from==="coach"&&!t.read).length;["sbi_smessages","mntab_smessages"].forEach(t=>{const n=document.getElementById(t);if(!n)return;n.style.position="relative";const a=n.querySelector(".msg-nav-badge");if(a&&a.remove(),e>0){const i=document.createElement("span");i.className="msg-nav-badge",i.style.cssText="position:absolute;top:3px;right:3px;background:#ef4444;color:#fff;border-radius:100px;min-width:14px;height:14px;font-size:9px;font-weight:800;display:flex;align-items:center;justify-content:center;padding:0 3px;pointer-events:none;line-height:1",i.textContent=e>9?"9+":e,n.appendChild(i)}})}window.updateMsgBadge=rn;window.toggleSidebar=oo;window.setupShell=so;window.switchTab=le;window.renderHome=ba;window.renderCoachApplications=Un;window.updateApplication=ud;window.renderCoachNotes=Ci;window.openNoteEditor=md;window.toggleNewResourceMode=Ro;window.addManualTest=No;window.removeManualTest=Ho;window.saveCoachNote=gd;window.deleteCoachNote=fd;window.renderStudentsSearch=et;window.filterStudentSearch=lo;window.openStudentDetail=ha;window.openKonuHaritasi=go;window.openStudentProgram=En;window.openStudentExams=fo;window.openStudentAppointments=yo;window.renderProfile=Sn;window.saveProfile=wo;window.renderSettings=$a;window.saveGeminiKey=$o;window.renderProgram=ne;window.selectStu=Io;window.chWeek=zo;window.goToday=Bo;window.openClearWeekModal=Ao;window.toggleDaySel=Do;window.toggleAllDays=Co;window.confirmClearDays=Lo;window.openTaskModal=Ba;window.loadResources=Aa;window.updateSubjectList=Vt;window.updateBookList=Yo;window.renderBookList=Zt;window.filterBooks=Ko;window.selectBook=Fo;window.renderTestList=Jt;window.selectAllTests=Oo;window.clearAllTests=qo;window.updateTestSummary=ut;window.selectModalSpeed=Uo;window.applyDuration=Go;window.scheduleSmartBadge=Xt;window.applySmartDuration=Vo;window.loadStudentSpeeds=Da;window.saveStudentSpeed=Ca;window.saveTask=Zo;window.toggleTask=Jo;window.closeTaskMenu=In;window.showTaskMenu=Xo;window.copyTask=Qo;window.deleteTask=er;window.renderTodoList=Ra;window.renderStudents=pr;window.goProgram=ur;window.openStudentModal=mr;window.saveStudent=yr;window.showInviteInfo=Ha;window.renderApptList=St;window.openApptModal=kr;window.saveAppt=wr;window.deleteAppt=Er;window.renderExams=Be;window.openCommentModal=Pr;window.saveComment=jr;window.deleteExam=Rr;window.renderMessages=Ua;window.selectThread=Ga;window.renderThreadHTML=Pe;window.sendMsg=Hr;window.scrollMsgs=je;window.renderPortal=Qt;window.stuToggleTask=Yr;window.renderSPortal=be;window.stuToggleTask2=Kr;window.chWeekS=Or;window.openTaskDetail=It;window.toggleTaskDetail=ns;window.toggleDetailItem=as;window.toggleAllDetailItems=is;window.onTaskResultInput=os;window.selectVideoSpeed=rs;window.saveTaskDetail=ss;window.renderSExams=zn;window.openStudentExamModal=ei;window.openExamModal=ls;window.renderNetInputs=Bn;window.saveExam=ps;window.openWeeklyReportModal=rd;window.filterSortWeeklyReport=filterSortWeeklyReport;window.renderSMessages=vn;window.initRealtime=Mn;window.destroyRealtime=An;window.renderDevDashboard=ni;window.renderDevUsers=mt;window.openDevUserModal=gs;window.devDeleteUser=fs;window.openPlanModal=ys;window.savePlan=vs;window.renderDevResources=tt;window.openPlaylistModal=hs;window.fetchYouTubePlaylist=ks;window.savePlaylist=ws;window.openResourceModal=$s;window.saveResource=_s;window.devDeleteResource=Es;window.renderDevFinance=zt;window.openPaymentModal=Ss;window.verifyPayment=Ts;window.setDevUserFilter=ms;window.savePayment=Is;window.openSubModal=zs;window.saveSub=Bs;window.renderDevAnnounce=Bt;window.openAnnounceModal=Ms;window.saveAnnounce=As;window.toggleAnnounce=Ds;window.devDeleteAnnounce=Cs;window.renderDevTickets=gt;window.updateTicketStatus=Ns;window.devDeleteTicket=Hs;window.selectDevTicket=Ls;window.sendDevReply=Rs;window.openSupportTicket=Ys;window.openSupportChat=nn;window.closeSupportChat=ii;window.startAISupportChat=Ks;window.startEminSupportChat=Fs;window.submitEminInitialMessage=Os;window.sendSupportMessage=qs;window.openSupportChatDirect=nn;window.checkCoachSubscription=Gt;window.showTrialExpiredScreen=Wt;window.loadAnnouncements=oi;window.saveStudentDev=Ul;window.showOnboarding=li;window.showOnboardingWidget=Ws;window.showStudentWelcome=Vs;window.renderSProfil=mi;window.saveStudentProfile=sl;window.changePassword=ll;window.renderCoachProfile=fi;window.updateProfilePreview=re;window.switchPreviewTab=hl;window.toggleCoachTag=yi;window.addCustomCoachTag=vi;window.uploadCoachPhoto=gl;window.onCoachSlugInput=fl;window.copyCoachLink=yl;window.browseCoachLink=vl;window.generateCoachBio=bl;window.nl2br=kl;window.saveCoachProfile=$l;window.renderDevMatches=Nn;window.updateMatchRequestStatus=_l;window.openSpeedModal=El;window.saveAllSpeeds=Tl;window.openStudentNotes=Sl;window.saveStudentNote=Il;window.openReportModal=zl;window.getReportDates=Hn;window.buildReportHTML=Yn;window.previewReport=Bl;window.generatePDF=Ml;window.openWeeklyPDFModal=Dl;window.generateWeeklyPDF=Cl;window.printWeeklyProgramWithNote=ki;window.openInviteCodeModal=Ll;window.copyInviteCode=Pl;window.copyInviteLink=jl;window.copyToClipboard=Kn;window.loadTheme=$i;window.applyAccent=_i;window.setTheme=Rl;window.openThemePanel=Nl;window.initAIChatForRole=Ei;window.toggleAIChat=Hl;window.aiQuickSend=Yl;window.buildAIContext=hn;window.addAIMessage=Te;window.sendAIMessage=Ti;window.autoDetectModel=Si;window.callGeminiFallback=Le;window.generateAICopilotDraft=Kl;window.checkCopilotDraftEdited=Ol;window.shareCopilotWhatsApp=Fl;window.assignResourceAsTask=Gl;window.confirmAssignResource=Wl;window.sendCopilotDraft=ql;window.renderParentHome=Ii;window.renderParentProgress=zi;window.renderParentAI=Bi;window.applyResFilter=qn;window.updateCRFilter=Vl;window.buildCRContent=on;window.renderCoachResources=Mt;window.switchCRTab=Zl;window.compileResourceStats=Ai;window.openResourceModalCoach=Jl;window.fetchYtPlaylistCoach=Xl;window.saveResourceCoach=Ql;window.deleteResourceCoach=ed;window.importResourcesFromExcel=td;window.importStudentsFromExcel=nd;window.getTestStatus=Di;window.openCoachTaskEdit=ad;window.saveWeekAsTemplate=id;window.applyTemplateToWeek=od;window.downloadICS=Tr;window.confirmApplyTemplate=sd;window.copyTaskToClipboard=ld;window.pasteTaskFromClipboard=dd;window.copyTaskToWholeWeek=cd;window.pasteTaskToWholeWeek=pd;window.sendWhatsAppReport=Al;window.toggleUserMenu=ro;window.closeUserMenu=xa;window.renderAgenda=xe;window.openAgendaApptModal=Na;window.deleteAgendaAppt=cr;window.agendaPrev=ir;window.agendaNext=or;window.agendaToday=rr;window.agendaSetFilter=sr;window.exportAgendaICS=lr;window.openApptPopup=ja;window.handleApptDrop=dr;window.openStudentKaynaklar=vo;window.addStudentBook=xo;window.editStudentBook=bo;window.sbUpdatePct=wa;window.saveStudentBook=ho;window.deleteStudentBook=ko;async function yd(){const e=document.getElementById("rpStuId").value,t=p.students.find(m=>m.id===e);if(!t)return;const n=document.getElementById("rpPeriod").value,{start:a,end:i}=Hn(),o=document.getElementById("rpNote").value.trim();let s="Performans Raporu";n==="weekly"?s="Haftalık Performans Raporu":n==="monthly"?s="Aylık Performans Raporu":s="Özel Dönem Performans Raporu";const r=`${s} (${a} - ${i})`,l=o||"Değerlendirme notu eklenmedi.";C(!0);const c=x.coachId||t.coachId,{error:d}=await h.from("reports").insert({student_id:e,coach_id:c,type:"performance",title:r,content:l,start_date:a,end_date:i});C(!1),d?b("Rapor kaydedilirken hata oluştu: "+d.message):(b("Rapor başarıyla geçmişe kaydedildi! ✓"),Z("reportModal"))}async function Pi(e){const t=p.students.find(s=>s.id===e);if(!t)return;p.activeStuId=e,currentTab!=="student-detail"&&le("student-detail");const n=document.getElementById("view-student-detail");n.innerHTML=`<button class="back-link" onclick="openStudentDetail('${e}')">← ${g(t.name)}</button>
    <div style="padding:20px;color:var(--text-mid);font-size:13px">Raporlar yükleniyor…</div>`;const{data:a,error:i}=await h.from("reports").select("*").eq("student_id",e).order("created_at",{ascending:!1});if(i){n.innerHTML=`<button class="back-link" onclick="openStudentDetail('${e}')">← ${g(t.name)}</button>
      <div style="padding:20px;color:var(--red);font-size:13px">Hata: ${i.message}</div>`;return}let o=`
    <button class="back-link" onclick="openStudentDetail('${e}')">← ${g(t.name)}</button>
    <div style="padding:20px">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:20px">
        <h2 style="font-family:'Syne',sans-serif;font-size:20px;font-weight:800;color:var(--text)">🗂️ Geçmiş Raporlar</h2>
      </div>
  `;if(!a||a.length===0){o+=`
      <div style="text-align:center;padding:40px;background:var(--surface);border:1px solid var(--border);border-radius:12px;color:var(--text-dim)">
        <div style="font-size:36px;margin-bottom:12px">📭</div>
        <div style="font-size:13px">Bu öğrenci için henüz kaydedilmiş bir gelişim raporu bulunmuyor.</div>
      </div>
    </div>`,n.innerHTML=o;return}o+='<div style="display:flex;flex-direction:column;gap:12px">',a.forEach(s=>{const r=s.type==="ai_copilot"?"🧠":"📄",l=s.type==="ai_copilot"?"AI Copilot Değerlendirmesi":"Performans Raporu",c=new Date(s.created_at).toLocaleDateString("tr-TR",{day:"numeric",month:"long",year:"numeric",hour:"2-digit",minute:"2-digit"});o+=`
      <div style="background:var(--surface);border:1px solid var(--border);border-radius:12px;padding:16px 20px;display:flex;justify-content:space-between;align-items:center;gap:12px;box-shadow:var(--shadow)">
        <div style="min-width:0;flex:1">
          <div style="display:flex;align-items:center;gap:8px;margin-bottom:6px">
            <span style="font-size:16px">${r}</span>
            <span style="font-size:11px;font-weight:800;text-transform:uppercase;color:var(--text-dim);letter-spacing:.5px">${l}</span>
          </div>
          <h4 style="font-size:14px;font-weight:700;color:var(--text);margin-bottom:4px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${g(s.title)}</h4>
          <div style="font-size:11px;color:var(--text-dim)">Oluşturulma: ${c}</div>
        </div>
        <div style="display:flex;gap:8px">
          <button class="btn btn-ghost btn-sm" onclick="viewArchivedReport('${s.id}')">Görüntüle</button>
          ${x.role==="coach"||x.role==="developer"?`<button class="btn btn-danger btn-sm" style="background:#ef4444;border-color:#ef4444;color:#fff" onclick="deleteArchivedReport('${s.id}', '${e}')">Sil</button>`:""}
        </div>
      </div>
    `}),o+="</div></div>",n.innerHTML=o}async function vd(e){C(!0);const{data:t,error:n}=await h.from("reports").select("*").eq("id",e).single();if(C(!1),n||!t)return b("Rapor yüklenemedi: "+((n==null?void 0:n.message)||"Bulunamadı"));let a=document.getElementById("viewReportDetailModal");a||(a=document.createElement("div"),a.id="viewReportDetailModal",a.className="modal-bg",document.body.appendChild(a),a.addEventListener("click",s=>{s.target===a&&a.classList.remove("open")}));const i=t.type==="ai_copilot"?"🧠":"📄",o=new Date(t.created_at).toLocaleDateString("tr-TR",{day:"numeric",month:"long",year:"numeric",hour:"2-digit",minute:"2-digit"});a.innerHTML=`
    <div class="modal" style="max-width:600px; max-height:85vh; overflow-y:auto">
      <button class="modal-close" onclick="cm('viewReportDetailModal')">×</button>
      <div style="display:flex;align-items:center;gap:10px;margin-bottom:12px;border-bottom:1px solid var(--border);padding-bottom:12px">
        <span style="font-size:24px">${i}</span>
        <div>
          <h3 style="font-family:'Syne',sans-serif;font-size:16px;font-weight:800;color:var(--text)">${g(t.title)}</h3>
          <div style="font-size:11px;color:var(--text-dim)">Oluşturulma Tarihi: ${o}</div>
        </div>
      </div>
      <div style="background:var(--surface2);border:1px solid var(--border);border-radius:12px;padding:20px;font-size:13px;line-height:1.7;color:var(--text);white-space:pre-wrap;overflow-y:auto;max-height:450px">${g(t.content)}</div>
      <div style="display:flex;justify-content:flex-end;margin-top:16px;gap:8px">
        <button class="btn btn-ghost" onclick="cm('viewReportDetailModal')">Kapat</button>
        <button class="btn btn-accent" onclick="printActiveReport()">Yazdır / Paylaş</button>
      </div>
    </div>
  `,V("viewReportDetailModal")}function xd(){const e=document.getElementById("viewReportDetailModal");if(!e)return;const t=e.querySelector("h3").textContent,n=e.querySelector("div div").textContent,a=e.querySelector('div[style*="pre-wrap"]').textContent,i=window.open("","_blank");i.document.write(`
    <html>
      <head>
        <title>${t}</title>
        <style>
          body { font-family: 'Inter', sans-serif; padding: 40px; color: #1f2937; line-height: 1.6; }
          .header { border-bottom: 2px solid #e5e7eb; padding-bottom: 20px; margin-bottom: 30px; }
          .title { font-size: 24px; font-weight: 800; margin: 0; color: #111827; }
          .date { font-size: 13px; color: #6b7280; margin-top: 5px; }
          .content { font-size: 15px; white-space: pre-wrap; color: #374151; }
        </style>
      </head>
      <body>
        <div class="header">
          <h1 class="title">${t}</h1>
          <div class="date">${n}</div>
        </div>
        <div class="content">${a}</div>
        <script>
          window.onload = function() { window.print(); }
        <\/script>
      </body>
    </html>
  `),i.document.close()}async function bd(e,t){if(!await ie("Bu raporu kalıcı olarak silmek istediğinize emin misiniz?"))return;C(!0);const{error:a}=await h.from("reports").delete().eq("id",e);C(!1),a?b("Rapor silinirken hata oluştu: "+a.message):(b("Rapor başarıyla silindi ✓"),Pi(t))}window.archivePerformanceReport=yd;window.openPastReports=Pi;window.viewArchivedReport=vd;window.printActiveReport=xd;window.deleteArchivedReport=bd;async function hd(e){var t,n;e&&(e.disabled=!0,e.textContent="Sıfırlanıyor...");try{const a=(n=(t=window.S)==null?void 0:t.currentUser)==null?void 0:n.id;if(!a)throw new Error("Oturum bulunamadı.");const{data:i}=await h.from("users").select("id").eq("coach_id",a),o=(i||[]).map(m=>m.id);o.length>0&&(await h.from("tasks").delete().in("student_id",o),await h.from("exams").delete().in("student_id",o),await h.from("appointments").delete().in("student_id",o),await h.from("messages").delete().in("student_id",o),await h.from("student_profiles").delete().in("id",o),await h.from("users").delete().in("id",o));const s=[{id:"demo-stu-1",full_name:"Ahmet Yılmaz",username:"ahmetyilmaz",role:"student",exam_profile:"YKS",yks_area:"SAY",coach_id:a,email:"ahmet@demokoc.com",active:!0},{id:"demo-stu-2",full_name:"Zeynep Kaya",username:"zeynepkaya",role:"student",exam_profile:"YKS",yks_area:"EA",coach_id:a,email:"zeynep@demokoc.com",active:!0},{id:"demo-stu-3",full_name:"Elif Demir",username:"elifdemir",role:"student",exam_profile:"YKS",yks_area:"SÖZ",coach_id:a,email:"elif@demokoc.com",active:!0}];for(const m of s)await h.from("users").upsert(m),await h.from("student_profiles").upsert({id:m.id,parent_email:"veli@demo.com",target:"Boğaziçi Üniversitesi"});const r=new Date,l=[],c={"demo-stu-1":["Matematik","Fizik","Kimya"],"demo-stu-2":["Matematik","Edebiyat","Tarih"],"demo-stu-3":["Edebiyat","Tarih","Coğrafya"]};for(const m of s){const u=c[m.id];for(let v=-3;v<=3;v++){const f=new Date(r);f.setDate(r.getDate()+v);const k=f.toISOString().split("T")[0];l.push({student_id:m.id,date:k,subject:u[0],topic:"Konu Anlatımı & Tekrar",duration:120,done:v<0}),l.push({student_id:m.id,date:k,subject:u[1],topic:"Soru Bankası Çözümü (120 Soru)",duration:90,done:v<=0})}}await h.from("tasks").insert(l);const d=[];for(const m of s)d.push({student_id:m.id,date:new Date(r.getTime()-15*24*3600*1e3).toISOString().split("T")[0],type:"TYT",title:"Özdebir Türkiye Geneli",net_tr:32,net_sos:15,net_mat:28,net_fen:12,net_total:87}),d.push({student_id:m.id,date:new Date(r.getTime()-5*24*3600*1e3).toISOString().split("T")[0],type:"TYT",title:"3D Simülasyon Denemesi",net_tr:34,net_sos:16,net_mat:31,net_fen:14,net_total:95});await h.from("exams").insert(d),b("Demo verileri sıfırlandı ve tertemiz mock veri setleri yüklendi ✓"),setTimeout(()=>location.reload(),800)}catch(a){console.error("Demo reset error:",a),b("Sıfırlama sırasında hata oluştu: "+a.message)}finally{e&&(e.disabled=!1,e.textContent="Verileri Sıfırla ⟳")}}window.resetDemoData=hd;setTimeout(()=>{if(new URLSearchParams(window.location.search).get("sandbox")==="true"||window.S&&window.S.currentUser&&window.S.currentUser.username==="demokoc"){let n=document.getElementById("demoSandboxBanner");n||(n=document.createElement("div"),n.id="demoSandboxBanner",n.style.cssText="position:fixed;bottom:20px;right:20px;background:rgba(26,25,22,0.95);color:var(--text);padding:14px 20px;border-radius:14px;box-shadow:0 12px 36px rgba(0,0,0,0.6);z-index:99999;font-size:13px;font-weight:700;display:flex;align-items:center;gap:14px;border:1px solid var(--acc);backdrop-filter:blur(10px);",n.innerHTML=`
        <span style="display:flex;align-items:center;gap:6px;"><span style="color:var(--acc)">⚡</span> Canlı Demo Modu</span>
        <button onclick="resetDemoData(this)" style="background:var(--acc);color:#fff;border:none;padding:6px 14px;border-radius:8px;font-size:11.5px;font-weight:800;cursor:pointer;transition:all 0.2s;box-shadow:0 4px 10px rgba(255,122,92,0.25);">Verileri Sıfırla ⟳</button>
      `,document.body.appendChild(n))}},2e3);window.copyStudentInviteLink=xr;let He=!1;window.location.hash.includes("type=recovery")&&(window.isPasswordRecoveryActive=!0);function de(e){const t=document.getElementById("loginErr");t.textContent=e,t.style.display="block",setTimeout(()=>t.style.display="none",5e3)}function Ye(e){const t=document.getElementById("regErr");t.textContent=e,t.style.display="block",setTimeout(()=>t.style.display="none",5e3)}function Wn(e){document.getElementById("loginPanel").style.display=e==="login"?"block":"none",document.getElementById("registerPanel").style.display=e==="register"?"block":"none",document.getElementById("lmtLogin").classList.toggle("active",e==="login"),document.getElementById("lmtRegister").classList.toggle("active",e==="register")}function kd(e){window._loginMode=e,document.querySelectorAll("#loginTabs .login-tab").forEach((t,n)=>t.classList.toggle("active",n===(e==="email"?0:1))),document.getElementById("loginEmailField").style.display=e==="email"?"block":"none",document.getElementById("loginUserField").style.display=e==="username"?"block":"none"}function ji(e){window._regRole=e}async function wd(){await Ri()}async function Ri(){Vn(),C(!0);try{const e=window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1"||window.location.protocol==="file:",t=window.location.origin+window.location.pathname,{error:n}=await h.auth.signInWithOAuth({provider:"google",options:{redirectTo:t,queryParams:{access_type:"offline",prompt:"select_account"}}});n&&(C(!1),console.warn("Google Auth failed:",n),e?kn():de("Google Girişi Başlatılamadı: "+n.message))}catch(e){C(!1),console.error("Google Auth exception:",e),window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1"||window.location.protocol==="file:"?kn():de("Google Girişi Başlatılamadı: "+(e.message||e))}}function kn(){document.getElementById("googleSimulatorModal").style.display="flex"}function Vn(){document.getElementById("googleSimulatorModal").style.display="none"}async function $d(e){if(Vn(),C(!0),e==="demokoc"){const{data:t,error:n}=await h.from("users").select("*").eq("username","demokoc").maybeSingle();if(n||!t){C(!1),de("Demo koç profili bulunamadı!");return}await Je(t)}else if(e==="demoogrenci"){const{data:t,error:n}=await h.from("users").select("*").eq("username","demoogrenci").maybeSingle();if(n||!t){C(!1),de("Demo öğrenci profili bulunamadı!");return}await Je(t)}else if(e==="new"){C(!1),document.getElementById("newUserOnboarding").style.display="flex";const t=Math.floor(1e3+Math.random()*9e3),n=`yeni.kullanici${t}@gmail.com`;document.getElementById("onbEmail").textContent=n,document.getElementById("onbName").value=`Yeni Kullanıcı ${t}`,window._oauthUser={id:`mock-google-id-${t}`,email:n,user_metadata:{full_name:`Yeni Kullanıcı ${t}`}}}}async function Ni(){var t,n,a;if(window.location.hash.includes("type=recovery")||window.isPasswordRecoveryActive){console.log("[Auth] Recovery session active, skipping checkOAuthSession");return}if(He)return;He=!0;let e=null;try{console.log("[Auth] 1/4 getSession...");const{data:{session:i}}=await h.auth.getSession();if(console.log("[Auth] 2/4 session:",((t=i==null?void 0:i.user)==null?void 0:t.email)||"yok"),!(i!=null&&i.user)){He=!1;return}if((n=document.getElementById("appShell"))!=null&&n.classList.contains("visible")){He=!1;return}C(!0),e=setTimeout(()=>{console.warn("[Auth] timeout — Supabase yanıt vermedi, spinner kapatılıyor"),He=!1,C(!1)},1e4),console.log("[Auth] 3/4 profil yükleniyor...");const{data:o,error:s}=await h.from("users").select("*").eq("id",i.user.id).maybeSingle();console.log("[Auth] 4/4 profil:",o==null?void 0:o.role,(s==null?void 0:s.message)||""),clearTimeout(e);let r=!1;if(o){if(o.role==="coach"){const{data:l}=await h.from("workspaces").select("*").eq("coach_id",o.id).maybeSingle();(!l||!l.onboarding_done)&&(r=!0)}}else r=!0;if(o&&!r){if(o.active===!1){C(!1),h.auth.signOut(),alert("Hesabınız askıya alınmıştır. Lütfen yöneticiyle iletişime geçin.");return}await Je(o)}else C(!1),document.getElementById("newUserOnboarding").style.display="flex",document.getElementById("onbEmail").textContent=i.user.email,document.getElementById("onbName").value=((a=i.user.user_metadata)==null?void 0:a.full_name)||"",window._oauthUser=i.user}catch(i){clearTimeout(e),He=!1,C(!1),console.warn("[checkOAuthSession]",i)}}async function _d(){const e=document.getElementById("onbName").value.trim();if(!e){document.getElementById("onbErr").textContent="Ad soyad zorunlu",document.getElementById("onbErr").style.display="block";return}document.getElementById("onbErr").style.display="none",C(!0);const t=window._oauthUser,n=e.toLowerCase().replace(/\s+/g,"_").replace(/[^a-z0-9_]/g,""),a={id:t.id,full_name:e,email:t.email,role:"coach",username:n+"_"+Math.random().toString(36).slice(2,6),password_hash:"supabase_managed",color:"#f0a500",week_start:0,progress:0,target:""},{data:i,error:o}=await h.from("users").upsert(a).select().single();if(o){C(!1),document.getElementById("onbErr").textContent="Hata: "+o.message,document.getElementById("onbErr").style.display="block";return}document.getElementById("newUserOnboarding").style.display="none",await Je(i)}let ge=1;window._regRole="coach";function Ed(e,t){document.getElementById("regBrandColor").value=e,t.parentElement.querySelectorAll("div").forEach(n=>n.style.outline="none"),t.style.outline="3px solid white"}function Td(){if(ge===1){if(!document.getElementById("regBrandName").value.trim()){alert("Lütfen akademi / koçluk adını girin.");return}ge=2}else ge===2&&(ge=3);sn(ge)}function Sd(){ge===3?window._regRole!=="student"&&(ge=2):ge===2&&(ge=1),sn(ge)}function sn(e){document.getElementById("regWizardStepCoach1").style.display=e===1?"block":"none",document.getElementById("regWizardStepCoach2").style.display=e===2?"block":"none",document.getElementById("regWizardStepFinal").style.display=e===3?"block":"none";const t=window._regRole==="student",n=document.getElementById("regInviteWrap");n&&(n.style.display=e===3&&t?"block":"none");const a=document.getElementById("regFinalBackWrap");a&&(a.style.display=e===3&&t?"none":"flex")}function Id(e){if(e=(e||"").toUpperCase().replace(/[^0-9A-Z]/g,"").slice(0,6),e.length!==6)return;Wn("register"),ji("student"),ge=3,sn(3);const t=document.getElementById("regInviteCode");t&&(t.value=e,t.readOnly=!0,t.style.opacity=".75",Hi(),t.readOnly=!0)}let sa=null,wn=!1;function Hi(){const e=document.getElementById("regInviteCode"),t=document.getElementById("regInviteStatus"),n=(e.value||"").toUpperCase().replace(/[^0-9A-Z]/g,"");if(e.value=n,wn=!1,clearTimeout(sa),n.length<6){t.style.display="none";return}t.style.display="block",t.style.background="var(--surface2)",t.style.color="var(--text-mid)",t.textContent="Kod kontrol ediliyor…",sa=setTimeout(async()=>{try{const{data:a,error:i}=await h.rpc("check_invite_code",{p_code:n}),o=!i&&a&&a.length?a[0].brand_name:null;o?(wn=!0,t.style.background="rgba(5,150,105,.1)",t.style.color="var(--green)",t.textContent="✓ "+o+" akademisine katılacaksın"):(t.style.background="var(--red-dim)",t.style.color="var(--red)",t.textContent="✗ Kod bulunamadı — koçundan doğru kodu iste")}catch{t.style.display="none"}},450)}async function zd(){var i;const e=document.getElementById("regName").value.trim(),t=document.getElementById("regEmail").value.trim().toLowerCase(),n=document.getElementById("regPass").value;if(!e||!t||!n)return Ye("Tüm hesap bilgileri zorunludur");if(n.length<8)return Ye("Şifre en az 8 karakter olmalıdır");let a="";if(window._regRole==="student"){if(a=(((i=document.getElementById("regInviteCode"))==null?void 0:i.value)||"").toUpperCase().trim(),a.length!==6)return Ye("Koç davet kodu gerekli — 6 haneli kodu koçundan iste.");if(!wn)try{const{data:o}=await h.rpc("check_invite_code",{p_code:a});if(!o||!o.length)return Ye("Davet kodu geçersiz — koçundan doğru kodu iste.")}catch{return Ye("Kod doğrulanamadı, tekrar dene.")}}C(!0);try{let o={full_name:e,role:window._regRole};if(a&&(o.invite_code=a),window._regRole==="coach"){const l=document.getElementById("regBrandName").value.trim(),c=document.getElementById("regBrandColor").value||"#f0a500",d=document.getElementById("regPhone").value.trim(),m="YKS",u=document.getElementById("regStudentCountRange").value||"1-5";o.ob_brand=l,o.ob_color=c,o.ob_phone=d,o.ob_examtypes=m,o.ob_studentcount=u}const{data:s,error:r}=await h.auth.signUp({email:t,password:n,options:{data:o}});if(r)throw r;if(s!=null&&s.user){C(!1),document.getElementById("regName").value="",document.getElementById("regEmail").value="",document.getElementById("regPass").value="",document.getElementById("regBrandName")&&(document.getElementById("regBrandName").value=""),document.getElementById("regPhone")&&(document.getElementById("regPhone").value="");const l=document.getElementById("regSuccess");l.textContent="Kayıt başarılı! E-posta adresinize bir doğrulama bağlantısı gönderildi. Lütfen doğrulama yaptıktan sonra giriş yapın.",l.style.display="block",setTimeout(()=>l.style.display="none",1e4),ge=1,window._regRole="coach",sn(1),Wn("login")}}catch(o){C(!1),Ye("Kayıt Hatası: "+o.message)}}async function Bd(){const e=(document.getElementById("loginEmail").value||document.getElementById("loginUser").value||"").trim(),t=document.getElementById("loginPass").value;if(!e||!t)return de("Kullanıcı adı ve şifre zorunlu");C(!0);const n=setTimeout(()=>{C(!1),de("Bağlantı zaman aşımına uğradı. Supabase yanıt vermiyor — lütfen tekrar deneyin.")},15e3);try{let a=e;a.includes("@")?a=a.toLowerCase():a=Ve(e)+"@rostrumakademi.com";const{data:i,error:o}=await h.auth.signInWithPassword({email:a,password:t});if(!o&&(i!=null&&i.user)){const{data:s,error:r}=await h.from("users").select("*").eq("id",i.user.id).maybeSingle();if(r&&console.error("Profile fetch error:",r),s){if(s.active===!1)return C(!1),h.auth.signOut(),de("Hesabınız askıya alınmıştır. Lütfen yöneticiyle iletişime geçin.");clearTimeout(n),await Je(s);return}return C(!1),de("Hesabınız veritabanında aktif değil.")}try{const s=Ve(e.includes("@")?e.split("@")[0]:e),r=await Xe(t),{data:l}=await h.rpc("get_user_by_credentials",{p_username:s,p_password_hash:r}),c=Array.isArray(l)?l[0]:l;if(c){if(c.active===!1)return C(!1),de("Hesabınız askıya alınmıştır. Lütfen yöneticiyle iletişime geçin.");clearTimeout(n),await Je(c);return}}catch(s){console.warn("Fallback RPC error:",s)}return C(!1),de(o?"Giriş başarısız: "+o.message:"Kullanıcı adı veya şifre hatalı.")}catch(a){return C(!1),console.error("[doLogin]",a),de("Giriş hatası: "+a.message)}finally{clearTimeout(n)}}async function Je(e){var n,a,i,o,s;if(C(!1),e.active===!1){try{await h.auth.signOut()}catch{}de("Hesabınız pasifleştirilmiş. Koçunuzla iletişime geçin.");return}const t=e.role==="coach"||e.role==="developer"?e.id:e.role==="student"||e.role==="parent"?e.coach_id:null;x.role=e.role,x.studentId=e.role==="student"?e.id:null,x.dbUser=e,x.coachId=t,typeof Notification<"u"&&Notification.permission==="granted"&&Rt(),document.getElementById("loginScreen").style.display="none",document.getElementById("appShell").classList.add("visible");try{if(await ga(),(x.role==="coach"||x.role==="developer")&&!p.workspace){console.log("[Auth] Workspace not found, auto-creating from signup metadata...");const{data:{user:u}}=await h.auth.getUser();if(u){const v=((n=u.user_metadata)==null?void 0:n.ob_brand)||"Akademi",f=((a=u.user_metadata)==null?void 0:a.ob_color)||"#f0a500",k=((i=u.user_metadata)==null?void 0:i.ob_phone)||null,y=((o=u.user_metadata)==null?void 0:o.ob_examtypes)||"YKS",$=((s=u.user_metadata)==null?void 0:s.ob_studentcount)||"1-5",w={coach_id:e.id,brand_name:v,brand_color:f,phone:k,exam_types:y,student_count_range:$,onboarding_done:!1},{data:I,error:T}=await h.from("workspaces").upsert(w,{onConflict:"coach_id"}).select().maybeSingle();T?console.error("[finishLogin] Create workspace error:",T):I&&(p.workspace=I)}}if(x.role==="student"&&(p.activeStuId=e.id,x.studentId=e.id,p.students.find(u=>u.id===e.id)||p.students.push({id:e.id,name:e.full_name||e.username||"Öğrenci",target:e.target||"",color:e.color||"#4da6ff",progress:e.progress||0,weekStart:e.week_start||0,username:e.username,coachId:e.coach_id})),x.role==="parent"){const{data:u}=await h.from("users").select("*").eq("parent_id",e.id).single();u&&(p.activeStuId=u.id,x.studentId=u.id,x.childName=u.full_name||u.username)}typeof window.setupShell=="function"?window.setupShell():setTimeout(()=>{typeof window.setupShell=="function"&&window.setupShell()},50);const r=new URLSearchParams(window.location.search);if(r.get("state")==="google_calendar"&&r.get("code")&&(x.role==="coach"||x.role==="developer")){const u=r.get("code");window.history.replaceState({},"",window.location.pathname+window.location.hash),document.getElementById("aiChatBubble").style.display="flex",setTimeout(()=>window.switchTab("todolist"),50),h.auth.getSession().then(({data:{session:v}})=>{v!=null&&v.access_token&&fetch("/api/mailer",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${v.access_token}`},body:JSON.stringify({type:"google_oauth_exchange",code:u})}).then(f=>f.json()).then(f=>{f.success?(p.workspace&&(p.workspace.google_calendar_connected=!0),b("Google Takvim bağlandı ✓"),window.renderAgenda&&window.renderAgenda()):b("Google bağlanamadı: "+(f.error||"Bilinmeyen hata"))}).catch(()=>b("Google Takvim bağlanamadı"))});return}const l=r.get("thread");if(l){window.history.replaceState({},"",window.location.pathname+window.location.hash),document.getElementById("aiChatBubble").style.display="flex",setTimeout(()=>window.openPushThread&&window.openPushThread(l),100);return}if(document.getElementById("aiChatBubble").style.display="flex",(x.role==="coach"||x.role==="developer")&&(!p.workspace||!p.workspace.onboarding_done)){window.switchTab("home"),window.showOnboarding();return}if(x.role==="student"){const{data:u}=await h.from("student_profiles").select("onboarding_done").eq("id",x.studentId||e.id).maybeSingle();if(!u||!u.onboarding_done){const v=window.location.hash.substring(1),f=v&&document.getElementById("view-"+v)?v:"portal";setTimeout(()=>{window.switchTab(f),window.showStudentWelcome&&window.showStudentWelcome()},100);return}}const c=window.location.hash.substring(1),d={coach:"home",student:"portal",developer:"home",parent:"parent-home"}[x.role]||"portal",m=c&&document.getElementById("view-"+c)?c:d;setTimeout(()=>window.switchTab(m),50)}catch(r){C(!1),console.error("[doLogin] HATA:",r),de("Hata: "+r.message),document.getElementById("loginScreen").style.display="flex",document.getElementById("appShell").classList.remove("visible")}}function Md(){window._fcInstance&&(window._fcInstance.destroy(),window._fcInstance=null),window.destroyRealtime&&window.destroyRealtime(),h.auth.signOut().catch(()=>{}),ma(),x.role=null,x.studentId=null,x.dbUser=null,x.coachId=null,x.childName=null,p.workspace=null,document.getElementById("loginScreen").style.display="flex",document.getElementById("appShell").classList.remove("visible"),document.getElementById("aiChatBubble").style.display="none",document.getElementById("aiChatPanel").classList.remove("open"),document.getElementById("loginEmail")&&(document.getElementById("loginEmail").value=""),document.getElementById("loginUser")&&(document.getElementById("loginUser").value=""),document.getElementById("loginPass").value="",window.location.hash=""}function Ad(){var t,n;const e=(((t=document.getElementById("loginEmail"))==null?void 0:t.value)||((n=document.getElementById("loginUser"))==null?void 0:n.value)||"").trim();e&&document.getElementById("forgotEmail")&&(document.getElementById("forgotEmail").value=e),window.om("forgotPassModal")}async function Dd(){const e=document.getElementById("forgotEmail").value.trim();if(!e)return;const t=document.getElementById("forgotMsg"),n=document.getElementById("btnSendReset");n&&(n.disabled=!0,n.textContent="Gönderiliyor..."),t.style.display="none";try{const a=await fetch("/api/mailer",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({type:"password_reset",email:e})}),i=await a.json();if(!a.ok)throw new Error(i.error||"Sunucu hatası");t.style.display="block",t.style.background="var(--green-dim)",t.style.color="var(--green)",t.textContent="Sıfırlama linki e-posta adresinize gönderildi. Lütfen gelen kutunuzu kontrol edin."}catch(a){t.style.display="block",t.style.background="var(--red-dim)",t.style.color="var(--red)",t.textContent="Hata: "+(a.message||"Bir sorun oluştu.")}finally{n&&(n.disabled=!1,n.textContent="Sıfırlama Linki Gönder →")}}async function Cd(){const e=document.getElementById("newPasswordInput").value;if(!e||e.length<8){alert("Şifre en az 8 karakter olmalıdır.");return}C(!0);try{const{error:t}=await h.auth.updateUser({password:e});if(t)throw t;const n=await Xe(e),{data:{user:a}}=await h.auth.getUser();a&&await h.from("users").update({password_hash:n}).eq("id",a.id),alert("Şifreniz başarıyla güncellendi! Lütfen yeni şifrenizle giriş yapın."),window.cm("resetPasswordModal"),await h.auth.signOut(),window.location.hash="",window.location.reload()}catch(t){alert("Şifre güncellenirken hata oluştu: "+t.message)}finally{C(!1)}}window.loginErr=de;window.regErr=Ye;window.setAuthMode=Wn;window.setLoginMode=kd;window.setRegRole=ji;window.loginWithGoogle=wd;window.triggerRealGoogleLogin=Ri;window.showGoogleSimulator=kn;window.closeGoogleSimulator=Vn;window.simOAuthLogin=$d;window.checkOAuthSession=Ni;window.completeOnboarding=_d;window.doRegister=zd;window.doLogin=Bd;window.finishLogin=Je;window.doLogout=Md;window.showForgotPassword=Ad;window.sendResetEmail=Dd;window.updateUserPassword=Cd;window.nextRegWizardStep=Td;window.prevRegWizardStep=Sd;window.setRegBrandColor=Ed;window.onInviteCodeInput=Hi;window.applyInviteFromUrl=Id;h.auth.onAuthStateChange(async(e,t)=>{var a;if(e==="PASSWORD_RECOVERY"||window.location.hash.includes("type=recovery")||window.isPasswordRecoveryActive){window.isPasswordRecoveryActive=!0,console.log("[Auth] Password recovery flow active, showing resetPasswordModal"),C(!1),window.om("resetPasswordModal");return}if(e==="SIGNED_IN"&&(t!=null&&t.user)){if((a=document.getElementById("appShell"))!=null&&a.classList.contains("visible"))return;await Ni()}e==="SIGNED_OUT"&&(He=!1,C(!1))});function la(){const e=document.getElementById("loginEmail"),t=document.getElementById("loginUser");e&&t&&(e.addEventListener("input",n=>{t.value=n.target.value}),t.addEventListener("input",n=>{e.value=n.target.value}))}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",la):la();if(new URLSearchParams(window.location.search).get("new_coach")==="1"){const e=sessionStorage.getItem("ra_new_coach_email"),t=sessionStorage.getItem("ra_new_coach_pass");if(e&&t){sessionStorage.removeItem("ra_new_coach_email"),sessionStorage.removeItem("ra_new_coach_pass");const n=()=>{const a=document.getElementById("loginEmail"),i=document.getElementById("loginPass");a&&i&&(a.value=e,i.value=t,setTimeout(()=>window.doLogin&&window.doLogin(),400))};document.readyState==="loading"?document.addEventListener("DOMContentLoaded",n):n()}}window.loadTheme&&window.loadTheme();window.renderNetInputs&&window.renderNetInputs();window.checkOAuthSession&&window.checkOAuthSession();const Yi=new URLSearchParams(window.location.search);if(Yi.get("sandbox")==="true")window.simOAuthLogin&&setTimeout(()=>{console.log("Sandbox auto-login triggered for demokoc..."),window.simOAuthLogin("demokoc")},300);else if(window.location.search.includes("sandbox")||window.location.hash==="#sandbox"){const e=document.getElementById("demoQuickWrap");e&&(e.style.display="flex"),window.showGoogleSimulator&&setTimeout(()=>window.showGoogleSimulator(),300)}const da=Yi.get("davet");da&&window.applyInviteFromUrl&&setTimeout(()=>window.applyInviteFromUrl(da),200);"serviceWorker"in navigator&&(window.addEventListener("load",()=>{navigator.serviceWorker.register("/sw.js").then(e=>{console.log("Service Worker başarıyla kaydedildi ✓",e.scope)}).catch(e=>{console.warn("Service Worker kaydı başarısız oldu:",e)})}),navigator.serviceWorker.addEventListener("message",e=>{var t,n;if(((t=e.data)==null?void 0:t.type)==="push-open"&&((n=window.session)!=null&&n.role))try{const a=new URL(e.data.url,window.location.origin);window.openPushThread&&window.openPushThread(a.searchParams.get("thread"))}catch{}}));window.addEventListener("hashchange",()=>{let e=window.location.hash.substring(1);if(document.getElementById("appShell").classList.contains("visible")&&e!==window.currentTab){if(!e){e={coach:"home",student:"portal",developer:"home",parent:"parent-home"}[window.session.role]||"portal",window.location.hash=e;return}document.getElementById("view-"+e)&&window.switchTab(e,!1)}});console.log("Rostrum Akademi App initialized successfully ✓");
