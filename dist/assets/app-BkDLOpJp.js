(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))a(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&a(r)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();const l={students:[],tasks:{},appointments:[],exams:[],messages:{},coachTodos:{},weekOffset:0,calMonth:new Date().getMonth(),calYear:new Date().getFullYear(),calSelDay:null,activeStuId:null,msgThread:null,workspace:null,studentSpeeds:[],konuHaftaSoru:[]},x={role:null,studentId:null,dbUser:null,coachId:null,childName:null};window.S=l;window.session=x;window._loginMode="email";window.STU_DEFAULT_PASS="Rostrum"+Math.floor(1e3+Math.random()*9e3);window.DAYS_TR=["Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi","Pazar"];window.MONTHS_TR=["Ocak","Şubat","Mart","Nisan","Mayıs","Haziran","Temmuz","Ağustos","Eylül","Ekim","Kasım","Aralık"];window.EXAM_DEFS={TYT:["Türkçe","Matematik","Fen","Sosyal"],"AYT-SAY":["Matematik","Fizik","Kimya","Biyoloji"],"AYT-EA":["Matematik","Edebiyat","Tarih","Coğrafya"],"AYT-SOZ":["Edebiyat","Tarih1","Tarih2","Coğrafya1","Coğrafya2","Felsefe","Din"]};window.EXAM_SORU={TYT:{Türkçe:40,Matematik:40,Fen:20,Sosyal:20},"AYT-SAY":{Matematik:40,Fizik:14,Kimya:13,Biyoloji:13},"AYT-EA":{Matematik:40,Edebiyat:24,Tarih:10,Coğrafya:6},"AYT-SOZ":{Edebiyat:24,Tarih1:10,Tarih2:11,Coğrafya1:6,Coğrafya2:11,Felsefe:12,Din:6}};window.EXAM_KONU_MAP={TYT_Türkçe:["Dil Bilgisi"],TYT_Matematik:["TYT Matematik","Geometri"],TYT_Fen:["TYT Fizik","TYT Kimya","TYT Biyoloji"],TYT_Sosyal:[],"AYT-SAY_Matematik":["AYT Matematik","Geometri"],"AYT-SAY_Fizik":["AYT Fizik"],"AYT-SAY_Kimya":["AYT Kimya"],"AYT-SAY_Biyoloji":["AYT Biyoloji"],"AYT-EA_Matematik":["AYT Matematik","Geometri"],"AYT-EA_Edebiyat":["Dil Bilgisi"]};window.SUBJECT_MAP={TYT:["Türkçe","Matematik","Geometri","Fizik","Kimya","Biyoloji","Tarih","Coğrafya","Felsefe","Din"],"AYT-SAY":["Matematik","Geometri","Fizik","Kimya","Biyoloji"],"AYT-EA":["Matematik","Geometri","Edebiyat","Tarih","Coğrafya","Felsefe"],"AYT-SOZ":["Edebiyat","Tarih1","Tarih2","Coğrafya1","Coğrafya2","Felsefe","Din"]};window.currentTab="";window._clipboardTask=null;window._editingTaskId=null;window._regRole=null;window._onbRole=null;window._oauthUser=null;const Na="https://imyhenrwmsmyikpollur.supabase.co",Ha="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlteWhlbnJ3bXNteWlrcG9sbHVyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODAxNDE3ODYsImV4cCI6MjA5NTcxNzc4Nn0._ySJ5ArD1GYthyitHjdyEjLaUhextIwEqpRoF5ScI34",y=supabase.createClient(Na,Ha);window.db=y;function ke(){var e;try{localStorage.setItem("ba_ui_"+(((e=x.dbUser)==null?void 0:e.id)||"x"),JSON.stringify({weekOffset:l.weekOffset,activeStuId:l.activeStuId,calMonth:l.calMonth,calYear:l.calYear}))}catch{}}function at(){ke()}function M(e,t){let n=document.getElementById("loadingOverlay");if(document.querySelectorAll(".btn-login, .btn-accent, .btn").forEach(i=>{e?(i.setAttribute("disabled","true"),i.style.opacity="0.6",i.style.pointerEvents="none"):(i.removeAttribute("disabled"),i.style.opacity="",i.style.pointerEvents="")}),e&&!n){n=document.createElement("div"),n.id="loadingOverlay",n.style.cssText="position:fixed;inset:0;background:rgba(15,14,12,.82);z-index:9999;display:flex;align-items:center;justify-content:center;flex-direction:column;gap:14px;backdrop-filter:blur(6px)";const i=t||"Yükleniyor...",o=t?'<div style="font-size:36px;animation:overlayPop .3s cubic-bezier(.34,1.56,.64,1) both">🗑️</div>':'<div style="width:38px;height:38px;border:3px solid rgba(255,255,255,.12);border-top-color:var(--accent);border-radius:50%;animation:spin .7s linear infinite"></div>';if(n.innerHTML=`${o}<div style="font-size:14px;font-weight:600;color:#fff;letter-spacing:.2px">${i}</div>`,!document.getElementById("spinStyle")){const r=document.createElement("style");r.id="spinStyle",r.textContent="@keyframes spin{to{transform:rotate(360deg)}}@keyframes overlayPop{from{transform:scale(.6);opacity:0}to{transform:scale(1);opacity:1}}",document.head.appendChild(r)}document.body.appendChild(n)}else!e&&n&&n.remove()}function v(e){return String(e||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function O(e){return e instanceof Date?e.toISOString().split("T")[0]:e}function J(e,t){const n=new Date(e);return n.setDate(n.getDate()+t),n}function ue(){return O(new Date)}function Ot(e){return e>=20?"good":e>=12?"mid":"low"}function it(e){return{deneme:"📊 Deneme",soru:"📚 Soru",konu:"🎯 Konu",diger:"⭐ Diğer"}[e]||e}function G(e){document.getElementById(e).classList.add("open")}function q(e){document.getElementById(e).classList.remove("open")}function b(e){const t=document.getElementById("toast");t.textContent=e,t.classList.add("show"),setTimeout(()=>t.classList.remove("show"),2300)}document.addEventListener("click",e=>{e.target.classList.contains("modal-bg")&&e.target.id!=="trialExpiredModal"&&e.target.classList.remove("open")});document.addEventListener("keydown",e=>{e.key==="Escape"&&document.querySelectorAll(".modal-bg.open").forEach(t=>{t.id!=="trialExpiredModal"&&t.classList.remove("open")})});function Ya(e){let t=e.value.replace(/\D/g,"");t.startsWith("0")&&(t=t.slice(1)),t=t.slice(0,10);let n="";t.length>0&&(n="0 ("+t.slice(0,3)),t.length>=3&&(n+=") "+t.slice(3,6)),t.length>=6&&(n+=" "+t.slice(6,8)),t.length>=8&&(n+=" "+t.slice(8,10)),e.value=n}function Ft(){const e=new Date;let t=e.getFullYear(),n=new Date(t,5,14);return e>n&&(t+=1,n=new Date(t,5,14)),{year:t,days:Math.max(1,Math.ceil((n-e)/864e5))}}function ne(e,t=0){const n=new Date,a=n.getDay(),o=(a===0?6:a-1)-t,r=new Date(n);return r.setDate(n.getDate()-(o+7)%7+e*7),r.setHours(0,0,0,0),r}function Ka(){const e=l.students.find(t=>t.id===l.activeStuId);return(e==null?void 0:e.weekStart)??0}async function Ne(e){const t=await crypto.subtle.digest("SHA-256",new TextEncoder().encode(e));return[...new Uint8Array(t)].map(n=>n.toString(16).padStart(2,"0")).join("")}function je(e){return e?e.trim().toLowerCase().replace(/ç/g,"c").replace(/ğ/g,"g").replace(/ı/g,"i").replace(/ö/g,"o").replace(/ş/g,"s").replace(/ü/g,"u").replace(/i̇/g,"i").replace(/ı/g,"i").replace(/i/g,"i").replace(/\s+/g,"").replace(/\u0307/g,""):""}function Oa(){if(!("Notification"in window)){console.log("Bu tarayıcı anlık bildirimleri desteklemiyor.");return}Notification.permission!=="granted"&&Notification.permission!=="denied"?Notification.requestPermission().then(e=>{e==="granted"&&b("Bildirim izinleri onaylandı ✓")}):Notification.permission==="granted"?b("Bildirim izinleri zaten açık ✓"):b("Bildirim izinleri tarayıcı ayarlarından engellenmiş.")}window.saveUI=ke;window.saveS=at;window.showLoading=M;window.esc=v;window.fmtDate=O;window.addDays=J;window.todayStr=ue;window.netColor=Ot;window.typeLabel=it;window.om=G;window.cm=q;window.showToast=b;window.getWeekStart=ne;window.getNextYks=Ft;window.maskPhoneTR=Ya;window.getStudentWeekStart=Ka;window.sha256=Ne;window.normalizeUsername=je;window.requestNotificationPermission=Oa;async function Fa(e,t={}){let n=y.from(e).select("*");Object.entries(t).forEach(([o,r])=>{n=n.eq(o,r)});const{data:a,error:i}=await n;return i&&console.error(e,i),a||[]}const Ua=4*60*1e3;function Ut(){return"ra_d_"+(x.coachId||x.studentId||"x")}function Sn(){try{localStorage.removeItem(Ut())}catch{}}function fn(){try{localStorage.setItem(Ut(),JSON.stringify({ts:Date.now(),students:l.students,tasks:l.tasks,appointments:l.appointments,exams:l.exams,messages:l.messages,coachTodos:l.coachTodos,studentSpeeds:l.studentSpeeds,workspace:l.workspace,konuHaftaSoru:l.konuHaftaSoru}))}catch{}}function Ga(){try{const e=localStorage.getItem(Ut());if(!e)return!1;const t=JSON.parse(e);return!t.ts||Date.now()-t.ts>Ua?!1:(t.students&&(l.students=t.students),t.tasks&&(l.tasks=t.tasks),t.appointments&&(l.appointments=t.appointments),t.exams&&(l.exams=t.exams),t.messages&&(l.messages=t.messages),t.coachTodos&&(l.coachTodos=t.coachTodos),t.studentSpeeds&&(l.studentSpeeds=t.studentSpeeds),t.workspace&&(l.workspace=t.workspace),t.konuHaftaSoru&&(l.konuHaftaSoru=t.konuHaftaSoru),!0)}catch{return!1}}async function yn(){var L;const e=x.coachId,t=x.role,n=t==="coach"||t==="developer"?y.from("workspaces").select("*").eq("coach_id",e).single():Promise.resolve({data:null});let a=y.from("users").select("*").eq("role","student");t==="student"?a=a.eq("id",x.studentId):(t==="coach"||t==="developer")&&(a=a.eq("coach_id",e));const i=a,o=new Date;o.setDate(o.getDate()-60);const r=o.toISOString().split("T")[0],s=new Date;s.setDate(s.getDate()-30);const d=s.toISOString().split("T")[0],c=t==="student"?y.from("tasks").select("*").eq("student_id",x.studentId).gte("date",r):t==="coach"||t==="developer"?y.from("tasks").select("*").eq("coach_id",e).gte("date",r):y.from("tasks").select("*").gte("date",r),p=t==="student"?y.from("appointments").select("*").eq("student_id",x.studentId).gte("date",d):t==="coach"||t==="developer"?y.from("appointments").select("*").eq("coach_id",e).gte("date",d):y.from("appointments").select("*").gte("date",d),m=t==="student"?y.from("exams").select("*").eq("student_id",x.studentId):t==="coach"||t==="developer"?y.from("exams").select("*").eq("coach_id",e):y.from("exams").select("*"),u=t==="student"?y.from("messages").select("*").eq("student_id",x.studentId).order("created_at",{ascending:!1}).limit(200):t==="coach"||t==="developer"?y.from("messages").select("*").eq("coach_id",e).order("created_at",{ascending:!1}).limit(200):y.from("messages").select("*").order("created_at",{ascending:!1}).limit(200),g=t==="coach"||t==="developer"?y.from("coach_todos").select("*").eq("coach_id",e):Promise.resolve({data:[]}),E=t==="student"?y.from("student_speeds").select("*").eq("student_id",x.studentId):t==="coach"||t==="developer"?y.from("student_speeds").select("*").eq("coach_id",e):y.from("student_speeds").select("*"),T=t==="coach"||t==="developer"?y.from("konu_mastery").select("*").eq("coach_id",e):t==="student"?y.from("konu_mastery").select("*").eq("student_id",x.studentId):Promise.resolve({data:[]}),f=t==="coach"||t==="developer"?y.from("konu_tekrar_log").select("*").eq("coach_id",e):t==="student"?y.from("konu_tekrar_log").select("*").eq("student_id",x.studentId):Promise.resolve({data:[]}),[$,w,B,h,S,I,z,_,D,C]=await Promise.all([n,i,c,p,m,u,g,E,T,f]);(t==="coach"||t==="developer")&&(l.workspace=$.data||null),l.students=(w.data||[]).map(k=>({id:k.id,name:k.full_name||k.username||"Öğrenci",target:k.target||"",color:k.color||"#4da6ff",progress:k.progress||0,weekStart:k.week_start||0,username:k.username,coachId:k.coach_id,yksArea:k.yks_area||"SAY"})),l.tasks={},(B.data||[]).forEach(k=>{const A=`${k.student_id}_${k.date}`;l.tasks[A]||(l.tasks[A]=[]),l.tasks[A].push({_id:k.id,type:k.type,exam:k.exam_type,subject:k.subject,duration:k.duration,note:k.note,done:k.done,student_note:k.student_note||"",student_result:k.student_result||null,student_feedback:k.student_feedback||null,task_items:k.task_items,start_time:k.start_time})}),l.appointments=(h.data||[]).map(k=>({id:k.id,studentId:k.student_id,date:k.date,time:k.time,duration:k.duration,type:k.type,note:k.note,meetLink:k.meet_link,google_event_id:k.google_event_id||null})),l.exams=(S.data||[]).map(k=>({id:k.id,studentId:k.student_id,name:k.name,date:k.date,type:k.exam_type,nets:k.nets||{},examDetails:k.exam_details||{},note:k.student_note,coachComment:k.coach_comment})),l.messages={},(I.data||[]).forEach(k=>{l.messages[k.student_id]||(l.messages[k.student_id]=[]),l.messages[k.student_id].push({_id:k.id,from:k.from_role,text:k.text||"",image_url:k.image_url||null,read:k.read,time:new Date(k.created_at).toLocaleTimeString("tr-TR",{hour:"2-digit",minute:"2-digit"})})}),Object.keys(l.messages).forEach(k=>l.messages[k].sort((A,j)=>A._id>j._id?1:-1)),l.coachTodos={},(z.data||[]).forEach(k=>{l.coachTodos[k.date]||(l.coachTodos[k.date]=[]),l.coachTodos[k.date].push({_id:k.id,task:k.task,note:k.note,done:k.done})}),l.studentSpeeds=_.data||[],l.konuMastery={},(D.data||[]).forEach(k=>{l.konuMastery[k.student_id]||(l.konuMastery[k.student_id]={}),l.konuMastery[k.student_id][k.subject]||(l.konuMastery[k.student_id][k.subject]={}),l.konuMastery[k.student_id][k.subject][k.konu]=k}),l.konuTekrarLog={},(C.data||[]).forEach(k=>{l.konuTekrarLog[k.student_id]||(l.konuTekrarLog[k.student_id]={}),l.konuTekrarLog[k.student_id][k.subject]||(l.konuTekrarLog[k.student_id][k.subject]={}),l.konuTekrarLog[k.student_id][k.subject][k.konu]||(l.konuTekrarLog[k.student_id][k.subject][k.konu]={}),l.konuTekrarLog[k.student_id][k.subject][k.konu][k.period_start]=k});try{const k=JSON.parse(localStorage.getItem("ba_ui_"+((L=x.dbUser)==null?void 0:L.id))||"{}");k.weekOffset!==void 0&&(l.weekOffset=k.weekOffset),k.activeStuId&&(l.activeStuId=k.activeStuId),k.calMonth!==void 0&&(l.calMonth=k.calMonth,l.calYear=k.calYear)}catch{}}async function In(){if(Ga()){yn().then(()=>{if(fn(),window.currentTab)try{window.switchTab(window.currentTab)}catch{}}).catch(t=>console.error("Arka plan yenileme hatası:",t));return}M(!0);try{await yn(),fn()}catch(t){console.error("loadAllData error",t)}M(!1)}window.dbQ=Fa;window.loadAllData=In;window.invalidateCache=Sn;let ze=!1;function oe(e){const t=document.getElementById("loginErr");t.textContent=e,t.style.display="block",setTimeout(()=>t.style.display="none",5e3)}function Be(e){const t=document.getElementById("regErr");t.textContent=e,t.style.display="block",setTimeout(()=>t.style.display="none",5e3)}function Gt(e){document.getElementById("loginPanel").style.display=e==="login"?"block":"none",document.getElementById("registerPanel").style.display=e==="register"?"block":"none",document.getElementById("lmtLogin").classList.toggle("active",e==="login"),document.getElementById("lmtRegister").classList.toggle("active",e==="register")}function qa(e){window._loginMode=e,document.querySelectorAll("#loginTabs .login-tab").forEach((t,n)=>t.classList.toggle("active",n===(e==="email"?0:1))),document.getElementById("loginEmailField").style.display=e==="email"?"block":"none",document.getElementById("loginUserField").style.display=e==="username"?"block":"none"}function zn(e){window._regRole=e,[["rrbCoach","coach"],["rrbStudent","student"]].forEach(([t,n])=>{const a=document.getElementById(t);if(!a)return;const i=e===n;a.classList.toggle("sel",i),a.style.borderColor=i?"var(--accent)":"var(--border)",a.style.background=i?"var(--accent-dim)":"var(--surface2)",a.style.boxShadow=i?"0 0 0 1px var(--accent)":"none"})}function Wa(e){window._onbRole=e,document.getElementById("onbRoleCoach").classList.toggle("sel",e==="coach"),document.getElementById("onbRoleStudent").classList.toggle("sel",e==="student")}async function Va(){if(window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1"||window.location.protocol==="file:"){Mn();return}await Bn()}async function Bn(){qt(),M(!0);try{const{error:e}=await y.auth.signInWithOAuth({provider:"google",options:{redirectTo:window.location.origin+"/app.html",queryParams:{access_type:"offline",prompt:"select_account"}}});e&&(M(!0),console.warn("Google Auth failed:",e),oe("Google Girişi Başlatılamadı: "+e.message))}catch(e){M(!1),oe("Google Girişi Başlatılamadı: "+e.message)}}function Mn(){document.getElementById("googleSimulatorModal").style.display="flex"}function qt(){document.getElementById("googleSimulatorModal").style.display="none"}async function Za(e){if(qt(),M(!0),e==="demokoc"){const{data:t,error:n}=await y.from("users").select("*").eq("username","demokoc").maybeSingle();if(n||!t){M(!1),oe("Demo koç profili bulunamadı!");return}await Pe(t)}else if(e==="demoogrenci"){const{data:t,error:n}=await y.from("users").select("*").eq("username","demoogrenci").maybeSingle();if(n||!t){M(!1),oe("Demo öğrenci profili bulunamadı!");return}await Pe(t)}else if(e==="new"){M(!1),document.getElementById("newUserOnboarding").style.display="flex";const t=Math.floor(1e3+Math.random()*9e3),n=`yeni.kullanici${t}@gmail.com`;document.getElementById("onbEmail").textContent=n,document.getElementById("onbName").value=`Yeni Kullanıcı ${t}`,window._oauthUser={id:`mock-google-id-${t}`,email:n,user_metadata:{full_name:`Yeni Kullanıcı ${t}`}}}}async function An(){var t,n,a;if(window.location.hash.includes("type=recovery")){console.log("[Auth] Recovery session active, skipping checkOAuthSession");return}if(ze)return;ze=!0;let e=null;try{console.log("[Auth] 1/4 getSession...");const{data:{session:i}}=await y.auth.getSession();if(console.log("[Auth] 2/4 session:",((t=i==null?void 0:i.user)==null?void 0:t.email)||"yok"),!(i!=null&&i.user)){ze=!1;return}if((n=document.getElementById("appShell"))!=null&&n.classList.contains("visible")){ze=!1;return}M(!0),e=setTimeout(()=>{console.warn("[Auth] timeout — Supabase yanıt vermedi, spinner kapatılıyor"),ze=!1,M(!1)},1e4),console.log("[Auth] 3/4 profil yükleniyor...");const{data:o,error:r}=await y.from("users").select("*").eq("id",i.user.id).maybeSingle();console.log("[Auth] 4/4 profil:",o==null?void 0:o.role,(r==null?void 0:r.message)||""),clearTimeout(e);let s=!1;if(o){if(o.role==="coach"){const{data:d}=await y.from("workspaces").select("*").eq("coach_id",o.id).maybeSingle();(!d||!d.onboarding_done)&&(s=!0)}}else s=!0;if(o&&!s){if(o.active===!1){M(!1),y.auth.signOut(),alert("Hesabınız askıya alınmıştır. Lütfen yöneticiyle iletişime geçin.");return}await Pe(o)}else M(!1),document.getElementById("newUserOnboarding").style.display="flex",document.getElementById("onbEmail").textContent=i.user.email,document.getElementById("onbName").value=((a=i.user.user_metadata)==null?void 0:a.full_name)||"",window._oauthUser=i.user}catch(i){clearTimeout(e),ze=!1,M(!1),console.warn("[checkOAuthSession]",i)}}async function Ja(){const e=document.getElementById("onbName").value.trim();if(!e){document.getElementById("onbErr").textContent="Ad soyad zorunlu",document.getElementById("onbErr").style.display="block";return}if(!window._onbRole){document.getElementById("onbErr").textContent="Hesap türü seçin",document.getElementById("onbErr").style.display="block";return}document.getElementById("onbErr").style.display="none",M(!0);const t=window._oauthUser,n=e.toLowerCase().replace(/\s+/g,"_").replace(/[^a-z0-9_]/g,""),a={id:t.id,full_name:e,email:t.email,role:window._onbRole,username:n+"_"+Math.random().toString(36).slice(2,6),password_hash:"supabase_managed",color:window._onbRole==="coach"?"#f0a500":"#4da6ff",week_start:0,progress:0,target:""},{data:i,error:o}=await y.from("users").upsert(a).select().single();if(o){M(!1),document.getElementById("onbErr").textContent="Hata: "+o.message,document.getElementById("onbErr").style.display="block";return}document.getElementById("newUserOnboarding").style.display="none",await Pe(i)}let ee=0;function Xa(e,t){document.getElementById("regBrandColor").value=e,t.parentElement.querySelectorAll("div").forEach(n=>n.style.outline="none"),t.style.outline="3px solid white"}function Qa(){const e=document.getElementById("regErr0");if(e&&(e.style.display="none"),ee===0){if(!window._regRole){e&&(e.textContent="Lütfen bir hesap türü seçin.",e.style.display="block");return}window._regRole==="student"?ee=3:ee=1}else if(ee===1){if(!document.getElementById("regBrandName").value.trim()){alert("Lütfen akademi / koçluk adını girin.");return}ee=2}else ee===2&&(ee=3);kt(ee)}function ei(){ee===3?window._regRole==="student"?ee=0:ee=2:ee===2?ee=1:ee===1&&(ee=0),kt(ee)}function kt(e){document.getElementById("regWizardStep0").style.display=e===0?"block":"none",document.getElementById("regWizardStepCoach1").style.display=e===1?"block":"none",document.getElementById("regWizardStepCoach2").style.display=e===2?"block":"none",document.getElementById("regWizardStepFinal").style.display=e===3?"block":"none";const t=document.getElementById("regInviteWrap");t&&(t.style.display=e===3&&window._regRole==="student"?"block":"none")}function ti(e){if(e=(e||"").toUpperCase().replace(/[^0-9A-Z]/g,"").slice(0,6),e.length!==6)return;Gt("register"),zn("student"),ee=3,kt(3);const t=document.getElementById("regInviteCode");t&&(t.value=e,t.readOnly=!0,t.style.opacity=".75",Dn(),t.readOnly=!0)}let xn=null,Pt=!1;function Dn(){const e=document.getElementById("regInviteCode"),t=document.getElementById("regInviteStatus"),n=(e.value||"").toUpperCase().replace(/[^0-9A-Z]/g,"");if(e.value=n,Pt=!1,clearTimeout(xn),n.length<6){t.style.display="none";return}t.style.display="block",t.style.background="var(--surface2)",t.style.color="var(--text-mid)",t.textContent="Kod kontrol ediliyor…",xn=setTimeout(async()=>{try{const{data:a,error:i}=await y.rpc("check_invite_code",{p_code:n}),o=!i&&a&&a.length?a[0].brand_name:null;o?(Pt=!0,t.style.background="rgba(5,150,105,.1)",t.style.color="var(--green)",t.textContent="✓ "+o+" akademisine katılacaksın"):(t.style.background="var(--red-dim)",t.style.color="var(--red)",t.textContent="✗ Kod bulunamadı — koçundan doğru kodu iste")}catch{t.style.display="none"}},450)}async function ni(){var i;const e=document.getElementById("regName").value.trim(),t=document.getElementById("regEmail").value.trim().toLowerCase(),n=document.getElementById("regPass").value;if(!e||!t||!n)return Be("Tüm hesap bilgileri zorunludur");if(n.length<8)return Be("Şifre en az 8 karakter olmalıdır");let a="";if(window._regRole==="student"){if(a=(((i=document.getElementById("regInviteCode"))==null?void 0:i.value)||"").toUpperCase().trim(),a.length!==6)return Be("Koç davet kodu gerekli — 6 haneli kodu koçundan iste.");if(!Pt)try{const{data:o}=await y.rpc("check_invite_code",{p_code:a});if(!o||!o.length)return Be("Davet kodu geçersiz — koçundan doğru kodu iste.")}catch{return Be("Kod doğrulanamadı, tekrar dene.")}}M(!0);try{let o={full_name:e,role:window._regRole};if(a&&(o.invite_code=a),window._regRole==="coach"){const d=document.getElementById("regBrandName").value.trim(),c=document.getElementById("regBrandColor").value||"#f0a500",p=document.getElementById("regPhone").value.trim(),m=[...document.querySelectorAll("#regExamTypesWrap .ob-exam-sel input")].map(E=>E.value),u=m.length>0?m.join(","):"YKS",g=document.getElementById("regStudentCountRange").value||"1-5";o.ob_brand=d,o.ob_color=c,o.ob_phone=p,o.ob_examtypes=u,o.ob_studentcount=g}const{data:r,error:s}=await y.auth.signUp({email:t,password:n,options:{data:o}});if(s)throw s;if(r!=null&&r.user){M(!1),document.getElementById("regName").value="",document.getElementById("regEmail").value="",document.getElementById("regPass").value="",document.getElementById("regBrandName")&&(document.getElementById("regBrandName").value=""),document.getElementById("regPhone")&&(document.getElementById("regPhone").value="");const d=document.getElementById("regSuccess");d.textContent="Kayıt başarılı! E-posta adresinize bir doğrulama bağlantısı gönderildi. Lütfen doğrulama yaptıktan sonra giriş yapın.",d.style.display="block",setTimeout(()=>d.style.display="none",1e4),ee=0,kt(0),Gt("login")}}catch(o){M(!1),Be("Kayıt Hatası: "+o.message)}}async function ai(){const e=(document.getElementById("loginEmail").value||document.getElementById("loginUser").value||"").trim(),t=document.getElementById("loginPass").value;if(!e||!t)return oe("Kullanıcı adı ve şifre zorunlu");M(!0);const n=setTimeout(()=>{M(!1),oe("Bağlantı zaman aşımına uğradı. Supabase yanıt vermiyor — lütfen tekrar deneyin.")},15e3);try{let a=e;a.includes("@")?a=a.toLowerCase():a=je(e)+"@rostrumakademi.com";const{data:i,error:o}=await y.auth.signInWithPassword({email:a,password:t});if(!o&&(i!=null&&i.user)){const{data:r,error:s}=await y.from("users").select("*").eq("id",i.user.id).maybeSingle();if(s&&console.error("Profile fetch error:",s),r){if(r.active===!1)return M(!1),y.auth.signOut(),oe("Hesabınız askıya alınmıştır. Lütfen yöneticiyle iletişime geçin.");clearTimeout(n),await Pe(r);return}return M(!1),oe("Hesabınız veritabanında aktif değil.")}try{const r=je(e.includes("@")?e.split("@")[0]:e),s=await Ne(t),{data:d}=await y.rpc("get_user_by_credentials",{p_username:r,p_password_hash:s}),c=Array.isArray(d)?d[0]:d;if(c){if(c.active===!1)return M(!1),oe("Hesabınız askıya alınmıştır. Lütfen yöneticiyle iletişime geçin.");clearTimeout(n),await Pe(c);return}}catch(r){console.warn("Fallback RPC error:",r)}return M(!1),oe(o?"Giriş başarısız: "+o.message:"Kullanıcı adı veya şifre hatalı.")}catch(a){return M(!1),console.error("[doLogin]",a),oe("Giriş hatası: "+a.message)}finally{clearTimeout(n)}}async function Pe(e){var n,a,i,o,r;M(!1);const t=e.role==="coach"||e.role==="developer"?e.id:e.role==="student"||e.role==="parent"?e.coach_id:null;x.role=e.role,x.studentId=e.role==="student"?e.id:null,x.dbUser=e,x.coachId=t,document.getElementById("loginScreen").style.display="none",document.getElementById("appShell").classList.add("visible");try{if(await In(),(x.role==="coach"||x.role==="developer")&&!l.workspace){console.log("[Auth] Workspace not found, auto-creating from signup metadata...");const{data:{user:m}}=await y.auth.getUser();if(m){const u=((n=m.user_metadata)==null?void 0:n.ob_brand)||"Akademi",g=((a=m.user_metadata)==null?void 0:a.ob_color)||"#f0a500",E=((i=m.user_metadata)==null?void 0:i.ob_phone)||null,T=((o=m.user_metadata)==null?void 0:o.ob_examtypes)||"YKS",f=((r=m.user_metadata)==null?void 0:r.ob_studentcount)||"1-5",$={coach_id:e.id,brand_name:u,brand_color:g,phone:E,exam_types:T,student_count_range:f,onboarding_done:!1},{data:w,error:B}=await y.from("workspaces").upsert($,{onConflict:"coach_id"}).select().maybeSingle();B?console.error("[finishLogin] Create workspace error:",B):w&&(l.workspace=w)}}if(x.role==="student"&&(l.activeStuId=e.id,x.studentId=e.id,l.students.find(m=>m.id===e.id)||l.students.push({id:e.id,name:e.full_name||e.username||"Öğrenci",target:e.target||"",color:e.color||"#4da6ff",progress:e.progress||0,weekStart:e.week_start||0,username:e.username,coachId:e.coach_id})),x.role==="parent"){const{data:m}=await y.from("users").select("*").eq("parent_id",e.id).single();m&&(l.activeStuId=m.id,x.studentId=m.id,x.childName=m.full_name||m.username)}window.setupShell();const s=new URLSearchParams(window.location.search);if(s.get("state")==="google_calendar"&&s.get("code")&&(x.role==="coach"||x.role==="developer")){const m=s.get("code");window.history.replaceState({},"",window.location.pathname+window.location.hash),document.getElementById("aiChatBubble").style.display="flex",setTimeout(()=>window.switchTab("appointments"),50),y.auth.getSession().then(({data:{session:u}})=>{u!=null&&u.access_token&&fetch("/api/mailer",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${u.access_token}`},body:JSON.stringify({type:"google_oauth_exchange",code:m})}).then(g=>g.json()).then(g=>{g.success?(l.workspace&&(l.workspace.google_calendar_connected=!0),b("Google Takvim bağlandı ✓"),window.renderAppointments&&window.renderAppointments()):b("Google bağlanamadı: "+(g.error||"Bilinmeyen hata"))}).catch(()=>b("Google Takvim bağlanamadı"))});return}if(document.getElementById("aiChatBubble").style.display="flex",(x.role==="coach"||x.role==="developer")&&(!l.workspace||!l.workspace.onboarding_done)){window.switchTab("home"),window.showOnboarding();return}if(x.role==="student"){const{data:m}=await y.from("student_profiles").select("onboarding_done").eq("id",x.studentId||e.id).maybeSingle();if(!m||!m.onboarding_done){const u=window.location.hash.substring(1),g=u&&document.getElementById("view-"+u)?u:"portal";setTimeout(()=>{window.switchTab(g),window.showStudentWelcome&&window.showStudentWelcome()},100);return}}const d=window.location.hash.substring(1),c={coach:"home",student:"portal",developer:"home",parent:"parent-home"}[x.role]||"portal",p=d&&document.getElementById("view-"+d)?d:c;setTimeout(()=>window.switchTab(p),50)}catch(s){M(!1),console.error("[doLogin] HATA:",s),oe("Hata: "+s.message),document.getElementById("loginScreen").style.display="flex",document.getElementById("appShell").classList.remove("visible")}}function ii(){window._fcInstance&&(window._fcInstance.destroy(),window._fcInstance=null),window.destroyRealtime&&window.destroyRealtime(),y.auth.signOut().catch(()=>{}),Sn(),x.role=null,x.studentId=null,x.dbUser=null,x.coachId=null,x.childName=null,l.workspace=null,document.getElementById("loginScreen").style.display="flex",document.getElementById("appShell").classList.remove("visible"),document.getElementById("aiChatBubble").style.display="none",document.getElementById("aiChatPanel").classList.remove("open"),document.getElementById("loginEmail")&&(document.getElementById("loginEmail").value=""),document.getElementById("loginUser")&&(document.getElementById("loginUser").value=""),document.getElementById("loginPass").value="",window.location.hash=""}function oi(){window.om("forgotPassModal")}async function si(){const e=document.getElementById("forgotEmail").value.trim();if(!e)return;const t=document.getElementById("forgotMsg");try{const n=await fetch("/api/mailer",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({type:"password_reset",email:e})}),a=await n.json();if(!n.ok)throw new Error(a.error||"Sunucu hatası");t.style.display="block",t.style.background="var(--green-dim)",t.style.color="var(--green)",t.textContent="Sıfırlama linki e-posta adresinize gönderildi. Lütfen gelen kutunuzu kontrol edin."}catch(n){t.style.display="block",t.style.background="var(--red-dim)",t.style.color="var(--red)",t.textContent="Hata: "+(n.message||"Bir sorun oluştu.")}}async function ri(){const e=document.getElementById("newPasswordInput").value;if(!e||e.length<8){alert("Şifre en az 8 karakter olmalıdır.");return}M(!0);try{const{error:t}=await y.auth.updateUser({password:e});if(t)throw t;const n=await Ne(e),{data:{user:a}}=await y.auth.getUser();a&&await y.from("users").update({password_hash:n}).eq("id",a.id),alert("Şifreniz başarıyla güncellendi! Lütfen yeni şifrenizle giriş yapın."),window.cm("resetPasswordModal"),await y.auth.signOut(),window.location.hash="",window.location.reload()}catch(t){alert("Şifre güncellenirken hata oluştu: "+t.message)}finally{M(!1)}}window.loginErr=oe;window.regErr=Be;window.setAuthMode=Gt;window.setLoginMode=qa;window.setRegRole=zn;window.setOnbRole=Wa;window.loginWithGoogle=Va;window.triggerRealGoogleLogin=Bn;window.showGoogleSimulator=Mn;window.closeGoogleSimulator=qt;window.simOAuthLogin=Za;window.checkOAuthSession=An;window.completeOnboarding=Ja;window.doRegister=ni;window.doLogin=ai;window.finishLogin=Pe;window.doLogout=ii;window.showForgotPassword=oi;window.sendResetEmail=si;window.updateUserPassword=ri;window.nextRegWizardStep=Qa;window.prevRegWizardStep=ei;window.setRegBrandColor=Xa;window.onInviteCodeInput=Dn;window.applyInviteFromUrl=ti;y.auth.onAuthStateChange(async(e,t)=>{var a;if(e==="PASSWORD_RECOVERY"||window.location.hash.includes("type=recovery")){console.log("[Auth] Password recovery flow active, showing resetPasswordModal"),M(!1),window.om("resetPasswordModal");return}if(e==="SIGNED_IN"&&(t!=null&&t.user)){if((a=document.getElementById("appShell"))!=null&&a.classList.contains("visible"))return;await An()}e==="SIGNED_OUT"&&(ze=!1,M(!1))});function bn(){const e=document.getElementById("loginEmail"),t=document.getElementById("loginUser");e&&t&&(e.addEventListener("input",n=>{t.value=n.target.value}),t.addEventListener("input",n=>{e.value=n.target.value}))}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",bn):bn();if(new URLSearchParams(window.location.search).get("new_coach")==="1"){const e=sessionStorage.getItem("ra_new_coach_email"),t=sessionStorage.getItem("ra_new_coach_pass");if(e&&t){sessionStorage.removeItem("ra_new_coach_email"),sessionStorage.removeItem("ra_new_coach_pass");const n=()=>{const a=document.getElementById("loginEmail"),i=document.getElementById("loginPass");a&&i&&(a.value=e,i.value=t,setTimeout(()=>window.doLogin&&window.doLogin(),400))};document.readyState==="loading"?document.addEventListener("DOMContentLoaded",n):n()}}function Qe(e){if(!e||e<=0)return"0 sa";const t=Math.floor(e/60),n=e%60;return t>0&&n>0?`${t} sa ${n} dk`:t>0?`${t} sa`:`${n} dk`}window.formatMinToHours=Qe;function ie(e){return new Promise(t=>{let n=document.getElementById("customConfirmModal");n||(n=document.createElement("div"),n.id="customConfirmModal",n.className="modal-bg",n.style.zIndex="999999",n.innerHTML=`
        <div class="modal" style="max-width:360px;text-align:center;padding:24px 20px;border-radius:16px;background:var(--surface);border:1px solid var(--border)">
          <div style="font-size:32px;margin-bottom:12px">⚠️</div>
          <div id="confirmMessage" style="font-size:14px;font-weight:700;color:var(--text);margin-bottom:20px;line-height:1.5"></div>
          <div style="display:flex;gap:10px;justify-content:center">
            <button class="btn btn-ghost" id="confirmCancelBtn" style="flex:1;justify-content:center;padding:10px;border-radius:10px">İptal</button>
            <button class="btn btn-accent" id="confirmOkBtn" style="flex:1;justify-content:center;padding:10px;border-radius:10px;background:#ef4444;border-color:#ef4444;color:#fff">Tamam</button>
          </div>
        </div>
      `,document.body.appendChild(n),n.addEventListener("click",s=>{s.target===n&&(n.classList.remove("open"),t(!1))})),n.querySelector("#confirmMessage").textContent=e;const a=n.querySelector("#confirmOkBtn"),i=n.querySelector("#confirmCancelBtn"),o=a.cloneNode(!0),r=i.cloneNode(!0);a.parentNode.replaceChild(o,a),i.parentNode.replaceChild(r,i),n.classList.add("open"),o.focus(),o.onclick=()=>{n.classList.remove("open"),t(!0)},r.onclick=()=>{n.classList.remove("open"),t(!1)}})}window.customConfirm=ie;async function Wt(){const e=x.dbUser;if(e&&!(e.email==="ceylanemin1928@gmail.com"||e.email==="simkoc1@rostrumakademi.com"||window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1"||window.__testMode)){if(x.role==="coach"||x.role==="developer"){if((e.plan||"trial")==="trial"){const n=e.trial_ends_at?new Date(e.trial_ends_at):new Date(new Date(e.created_at).getTime()+12096e5),a=new Date;if(a>n)gt();else{const i=Math.ceil((n-a)/864e5);i<=7&&Cn(i)}}}else if((x.role==="student"||x.role==="parent")&&x.coachId)try{const{data:t}=await y.from("users").select("plan,trial_ends_at,created_at,email").eq("id",x.coachId).maybeSingle();if(t){if(t.email==="ceylanemin1928@gmail.com"||t.email==="simkoc1@rostrumakademi.com")return;if((t.plan||"trial")==="trial"){const a=t.trial_ends_at?new Date(t.trial_ends_at):new Date(new Date(t.created_at).getTime()+12096e5);new Date>a&&gt()}}}catch(t){console.error("Error checking coach subscription:",t)}}}function gt(){let e=document.getElementById("trialExpiredModal");e?e.classList.add("open"):(e=document.createElement("div"),e.id="trialExpiredModal",e.className="modal-bg open",e.style.zIndex="9999999",e.innerHTML=`
      <div class="modal" style="max-width:460px;text-align:center;padding:32px 24px;border-radius:18px;background:var(--surface);border:2.5px solid var(--accent);box-shadow:var(--shadow-lg)">
        <div style="font-size:54px;margin-bottom:18px">⏳</div>
        <h2 style="font-size:20px;font-weight:900;margin-bottom:12px;color:var(--accent)">Deneme Süreniz Doldu</h2>
        <p style="font-size:13px;color:var(--text-mid);line-height:1.7;margin-bottom:24px">
          Rostrum Akademi'nin 14 günlük ücretsiz deneme süresi sona ermiştir. 
          Çalışmalarınıza devam etmek ve size uygun paketi seçmek için lütfen kurucu/destek ekibimizle iletişime geçin.
        </p>
        <div style="display:flex;flex-direction:column;gap:10px;align-items:stretch">
          <button class="btn btn-accent" onclick="openSupportChatDirect()" style="justify-content:center;padding:12px;font-size:14px;font-weight:700">
            💬 Kurucuya / Ekibe Yaz (Canlı Destek)
          </button>
          <div style="font-size:11px;color:var(--text-dim);margin-top:6px">
            E-posta: <b>ceylanemin1928@gmail.com</b>
          </div>
        </div>
      </div>
    `,document.body.appendChild(e))}function Cn(e){if(document.getElementById("trialCountdownBanner"))return;const t=document.createElement("div");t.id="trialCountdownBanner",t.style.cssText="position:fixed;top:0;left:0;right:0;z-index:8000;background:#f59e0b;color:#111;padding:8px 16px;display:flex;align-items:center;justify-content:center;gap:12px;font-size:13px;font-weight:600;",t.innerHTML=`<span>⏰ Ücretsiz denemenizin <strong>${e} günü</strong> kaldı — öğrenci verileriniz korunuyor.</span>
    <button onclick="openSupportChatDirect()" style="background:rgba(0,0,0,.15);border:none;padding:4px 14px;border-radius:6px;font-size:12px;font-weight:700;cursor:pointer;color:#111;white-space:nowrap">Devam Et →</button>
    <button onclick="document.getElementById('trialCountdownBanner').remove()" style="background:none;border:none;cursor:pointer;color:rgba(0,0,0,.4);font-size:18px;padding:0 4px;line-height:1">×</button>`,document.body.prepend(t);const n=document.getElementById("appShell");n&&(n.style.marginTop=t.offsetHeight+"px")}window.openSupportChatDirect=It;window.checkCoachSubscription=Wt;window.showTrialExpiredScreen=gt;window.showTrialCountdownBanner=Cn;const Rt=[{id:"home",lbl:"🏠",name:"Ana Sayfa"},{id:"students",lbl:"👤",name:"Öğrencilerim"},{id:"todolist",lbl:"📅",name:"Takvim"},{id:"coach-resources",lbl:"📚",name:"Kaynaklarım"},{id:"coach-applications",lbl:"📩",name:"Başvurular"}],Ln=[{id:"portal",lbl:"🏠",name:"Ana Sayfa"},{id:"sportal",lbl:"📋",name:"Programım"},{id:"sexams",lbl:"📊",name:"Denemeler"},{id:"smessages",lbl:"💬",name:"Koçuma Yaz"},{id:"sprofil",lbl:"🌟",name:"Yolculuğum"}],jn=[{id:"dev-dashboard",lbl:"🖥️",name:"Dev Panel"},{id:"dev-tickets",lbl:"🎫",name:"Destek"}],Pn=[{id:"parent-home",lbl:"🏠",name:"Ana Sayfa"},{id:"parent-progress",lbl:"📊",name:"İlerleme"},{id:"parent-messages",lbl:"💬",name:"Koça Yaz"},{id:"parent-ai",lbl:"🤖",name:"AI Asistan"}];function li(){var e;(e=document.getElementById("mainSidebar"))==null||e.classList.toggle("open")}function di(){var e;(e=document.getElementById("tnUserMenu"))==null||e.classList.toggle("open")}function Rn(){var e;(e=document.getElementById("tnUserMenu"))==null||e.classList.remove("open")}document.addEventListener("click",e=>{const t=document.getElementById("tnUserWrap");t&&!t.contains(e.target)&&Rn()});function ci(){var p;Wt();const e=x.role==="coach"?Rt:x.role==="developer"?[...Rt,...jn]:x.role==="parent"?Pn:Ln;document.getElementById("sidebarNav").innerHTML=e.map(m=>`
    <div class="tn-nav-item" id="sbi_${m.id}" onclick="switchTab('${m.id}')">
      <span>${m.lbl}</span>
      <span>${m.name}</span>
    </div>`).join(""),document.getElementById("mobileNav").innerHTML=e.slice(0,5).map(m=>`
    <button class="mnav-btn" id="mntab_${m.id}" onclick="switchTab('${m.id}')">${m.lbl}<span style="font-size:9px;display:block">${m.name}</span></button>`).join(""),document.getElementById("mainContent").innerHTML=[...e,{id:"student-detail"},{id:"profile"},{id:"settings"},{id:"coach-resources"},{id:"coach-applications"},{id:"coach-notes"},{id:"coach-profile"},{id:"messages"},{id:"todolist"},{id:"suyelik"},{id:"program"},{id:"appointments"},{id:"exams"}].map(m=>`<div class="view" id="view-${m.id}"></div>`).join("");const t=x.dbUser,n=x.role==="student"?l.students.find(m=>m.id===x.studentId):null,a=(t==null?void 0:t.full_name)||(n==null?void 0:n.name)||"",i=a.split(" ").map(m=>m[0]).join("").slice(0,2).toUpperCase(),o={coach:"#E8613A",student:(n==null?void 0:n.color)||"#4da6ff",developer:"#c084fc",parent:"#3ecf8e"},r={coach:"KOÇ",student:"ÖĞRENCİ",developer:"DEV",parent:"VELİ"};if(document.getElementById("sbAv").textContent=i,document.getElementById("sbAv").style.background=o[x.role]||"#888",document.getElementById("sbName").textContent=a,document.getElementById("sbRole").textContent=r[x.role]||x.role,(x.role==="coach"||x.role==="developer")&&((p=l.workspace)!=null&&p.brand_name)){const m=document.querySelector(".sb-logo-text");m&&(m.textContent=l.workspace.brand_name);const u=document.querySelector(".tn-logo .sb-logo-icon");u&&u.tagName!=="IMG"&&(u.textContent=l.workspace.brand_name.slice(0,1).toUpperCase())}const s=document.getElementById("sb-site-admin");s&&(s.style.display=x.role==="developer"?"flex":"none");const d=document.getElementById("tnCoachProfileItem");d&&(d.style.display=x.role==="coach"||x.role==="developer"?"flex":"none");const c=document.getElementById("tnUyelikItem");c&&(c.style.display=x.role==="coach"||x.role==="developer"?"flex":"none"),setTimeout(Bt,200),Ta(),setTimeout(ga,600),(x.role==="coach"||x.role==="developer")&&y.from("match_requests").select("id",{count:"exact",head:!0}).eq("matched_coach_id",x.coachId).eq("status","pending").then(({count:m})=>{if(m>0){const u=document.getElementById("sbi_coach-applications");if(u&&!u.querySelector(".sb-badge")){const g=document.createElement("span");g.className="sb-badge",g.textContent=m,u.appendChild(g)}}})}function se(e,t=!0){var p,m,u;if(!e)return;currentTab=e,t&&(window.location.hash=e),document.querySelectorAll(".tn-nav-item").forEach(g=>g.classList.remove("active"));const n=document.getElementById("sbi_"+e)||document.getElementById("sb-"+e);n&&n.classList.add("active"),document.querySelectorAll(".mnav-btn").forEach(g=>g.classList.remove("active"));const a=document.getElementById("mntab_"+e);a&&a.classList.add("active"),document.querySelectorAll(".view").forEach(g=>g.classList.remove("active"));const i=document.getElementById("view-"+e);i&&i.classList.add("active");const r=[...Rt,...Ln,...jn,...Pn,{id:"profile",name:"Profil"},{id:"settings",name:"Ayarlar"},{id:"student-detail",name:((p=l.students.find(g=>g.id===l.activeStuId))==null?void 0:p.name)||"Öğrenci"},{id:"program",name:"Program"},{id:"appointments",name:"Randevular"},{id:"exams",name:"Denemeler"}].find(g=>g.id===e),s=document.getElementById("tbarTitle");s&&(s.textContent=(r==null?void 0:r.name)||e);const d={home:Nn,students:ot,messages:da,"coach-applications":un,"coach-notes":La,todolist:ea,portal:St,sportal:Ie,sexams:en,smessages:Ht,suyelik:Bs,sprofil:ba,profile:On,settings:Fn,"student-detail":()=>{l.activeStuId?Hn(l.activeStuId):se("students")},program:()=>{l.activeStuId?Vt(l.activeStuId):se("students")},exams:()=>{l.activeStuId?qe():se("students")},appointments:()=>{l.activeStuId?Ge():se("students")},"dev-dashboard":ma,"dev-users":We,"dev-resources":st,"dev-finance":rt,"dev-announce":lt,"dev-tickets":Ve,"parent-home":za,"parent-progress":Ba,"parent-messages":Ht,"parent-ai":Ma,"coach-profile":ha,"dev-matches":sn,"coach-resources":dt};try{(m=d[e])==null||m.call(d)}catch(g){console.error("[switchTab] Render error for tab:",e,g),i&&(i.innerHTML=`<div style="padding:24px;color:var(--text)"><b>Hata Oluştu ⚠️</b><p style="color:var(--text-mid);margin-top:6px">${v(g.message)}</p><pre style="font-size:10px;color:var(--text-dim);white-space:pre-wrap;margin-top:8px">${v((g.stack||"").slice(0,400))}</pre></div>`)}e==="messages"||e==="smessages"?nn():an();const c=document.getElementById("aiChatBubble");c&&(e==="dev-tickets"||e.startsWith("dev-")||e==="messages"||e==="smessages"?(c.style.display="none",(u=document.getElementById("aiChatPanel"))==null||u.classList.remove("open")):(x.role==="student"||x.role==="coach"||x.role==="parent")&&(c.style.display="flex"))}function Nn(){var t,n;const e=document.getElementById("view-home");if(e)try{const a=new Date,i=["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"],o=["Ocak","Şubat","Mart","Nisan","Mayıs","Haziran","Temmuz","Ağustos","Eylül","Ekim","Kasım","Aralık"],r=O(a);let s=0;Object.values(l.messages).forEach(I=>{s+=I.filter(z=>z.from==="student"&&!z.read).length});const d=l.appointments.filter(I=>I.date===r).sort((I,z)=>I.time.localeCompare(z.time)),c=[],p=ne(0,0);(l.students||[]).forEach(I=>{let z=0,_=0;for(let A=0;A<7;A++){const j=O(J(p,A)),P=l.tasks[`${I.id}_${j}`]||[];z+=P.length,_+=P.filter(Y=>Y.done).length}const D=z>0?Math.round(_/z*100):0;z>0&&D<30&&c.push({studentId:I.id,studentName:I.name,color:I.color,type:"tasks",icon:"📋",title:"Düşük Görev",desc:`Bu haftaki görev tamamlama oranı <b>%${D}</b>'de kaldı (${_}/${z} görev tamamlandı).`});const C=(l.exams||[]).filter(A=>A.studentId===I.id).sort((A,j)=>new Date(j.date).getTime()-new Date(A.date).getTime()),L={};if(C.forEach(A=>{L[A.type]||(L[A.type]=[]),L[A.type].push(A)}),Object.entries(L).forEach(([A,j])=>{if(j.length>=2){const P=j[0],Y=j[1],H=Object.values(P.nets||{}).reduce((Z,te)=>Z+Number(te||0),0),F=Object.values(Y.nets||{}).reduce((Z,te)=>Z+Number(te||0),0),V=H-F;V<-5&&c.push({studentId:I.id,studentName:I.name,color:I.color,type:"exams",icon:"📉",title:`Net Düşüşü (${A})`,desc:`Son denemede <b>${H} net</b> yaptı. Önceki denemesine (${F} net) göre <b>${Math.abs(V).toFixed(1)} net düşüş</b>.`})}}),z===0&&c.push({studentId:I.id,studentName:I.name,color:I.color,type:"noplan",icon:"📭",title:"Program Yok",desc:"Bu hafta için henüz hiç görev eklenmemiş."}),z>0&&_===0){let A=!1;for(let j=0;j<3;j++){const P=O(J(a,-j));if((l.tasks[`${I.id}_${P}`]||[]).length>0){A=!0;break}}A&&c.push({studentId:I.id,studentName:I.name,color:I.color,type:"inactive",icon:"💤",title:"3 Gündür Pasif",desc:"Son 3 gündür hiçbir görev tamamlanmadı. İletişime geç!"})}z>0&&_===z&&c.push({studentId:I.id,studentName:I.name,color:I.color,type:"perfect",icon:"🏆",title:"Harika Hafta!",desc:`Bu haftaki tüm ${z} görevi tamamladı! Tebrik et.`}),(l.studentSpeeds||[]).filter(A=>A.student_id===I.id).forEach(A=>{let j=120;A.exam_type==="TYT"?["Türkçe","Sosyal"].includes(A.subject)?j=100:["Matematik","Fen"].includes(A.subject)&&(j=130):A.exam_type&&A.exam_type.startsWith("AYT")&&(j=180),A.secs_per_question>j&&c.push({studentId:I.id,studentName:I.name,color:I.color,type:"speed",icon:"⚡",title:`Hız Aşımı (${A.exam_type} - ${A.subject})`,desc:`Soru çözüm hızı <b>${A.secs_per_question} sn/soru</b> (Limit: ${j} sn).`})})});let m="";if(c.length===0)l.students.length===0?m=`
        <div style="text-align:center;padding:24px 16px">
          <div style="font-size:36px;margin-bottom:12px">👋</div>
          <div style="font-size:14px;font-weight:700;color:var(--text);margin-bottom:6px">İlk öğrencinizi ekleyin</div>
          <div style="font-size:12px;color:var(--text-mid);margin-bottom:16px;line-height:1.6">Öğrencilerim sekmesinden öğrenci ekleyerek uygulamayı kullanmaya başlayabilirsiniz.</div>
          <button class="btn btn-accent" onclick="switchTab('students')" style="font-size:13px;padding:9px 20px">Öğrenci Ekle →</button>
        </div>`:m=`
        <div style="text-align:center;padding:16px;color:var(--text-dim);font-size:13px">
          ✅ Harika! Şu an için kritik bir performans düşüşü veya uyarı bulunmuyor.
        </div>`;else{const I={perfect:{badge:"#3ecf8e",badgeBg:"rgba(62,207,142,.12)",border:"rgba(62,207,142,.25)"},noplan:{badge:"#f0a500",badgeBg:"rgba(240,165,0,.1)",border:"rgba(240,165,0,.2)"},inactive:{badge:"#ff5c7a",badgeBg:"rgba(255,92,122,.08)",border:"rgba(255,92,122,.2)"},tasks:{badge:"#ff5c7a",badgeBg:"rgba(255,92,122,.08)",border:"rgba(255,92,122,.2)"},exams:{badge:"#ff5c7a",badgeBg:"rgba(255,92,122,.08)",border:"rgba(255,92,122,.2)"},speed:{badge:"#f0a500",badgeBg:"rgba(240,165,0,.1)",border:"rgba(240,165,0,.2)"}},z={noplan:{label:"📅 Program Yap",fn:"openStudentProgram"},tasks:{label:"📋 Programı Aç",fn:"openStudentProgram"},inactive:{label:"📋 Programı Aç",fn:"openStudentProgram"},exams:{label:"➕ Deneme Ekle",fn:"openStudentExams"},speed:{label:"⏱ Hızı Düzenle",fn:"openStudentModal"}};m=c.map(_=>{const D=I[_.type]||I.tasks,C=z[_.type],L=C?`<button onclick="event.stopPropagation();${C.fn}('${_.studentId}')" style="flex-shrink:0;font-size:10.5px;font-weight:700;padding:5px 10px;border-radius:7px;border:1px solid ${D.border};background:var(--surface);color:${D.badge};cursor:pointer;font-family:inherit;white-space:nowrap;transition:filter .15s" onmouseover="this.style.filter='brightness(.95)'" onmouseout="this.style.filter='none'">${C.label}</button>`:"";return`<div style="cursor:pointer;padding:10px 12px;margin-bottom:8px;border-radius:8px;background:${D.badgeBg};border:1px solid ${D.border};display:flex;align-items:center;gap:10px;transition:opacity .15s" onclick="openStudentDetail('${_.studentId}')" onmouseover="this.style.opacity='.85'" onmouseout="this.style.opacity='1'">
        <div style="font-size:18px;width:32px;height:32px;border-radius:8px;background:rgba(255,255,255,.06);display:flex;align-items:center;justify-content:center;flex-shrink:0">${_.icon}</div>
        <div style="flex:1;min-width:0">
          <div style="display:flex;justify-content:space-between;align-items:center;gap:8px;margin-bottom:2px">
            <span style="font-size:13px;font-weight:700">${v(_.studentName)}</span>
            <span style="font-size:10px;font-weight:700;color:${D.badge};white-space:nowrap">${_.title}</span>
          </div>
          <div style="font-size:11px;color:var(--text-mid);line-height:1.4">${_.desc}</div>
        </div>
        ${L}
      </div>`}).join("")}const u=a.getHours(),g=u<6?"İyi geceler":u<12?"Günaydın":u<18?"İyi günler":"İyi akşamlar",E=`${String(u).padStart(2,"0")}:${String(a.getMinutes()).padStart(2,"0")}`,T=d.find(I=>I.time>=E),f=Ft(),$=f.days,w=ne(0,0);let B=0,h=0;l.students.forEach(I=>{for(let z=0;z<7;z++){const _=l.tasks[`${I.id}_${O(J(w,z))}`]||[];B+=_.length,h+=_.filter(D=>D.done).length}});const S=B>0?Math.round(h/B*100):0;e.innerHTML=`
    <!-- HERO -->
    <div class="home-hero">
      <div class="home-hero-left">
        <div class="home-hero-greeting">${g},</div>
        <div class="home-hero-name">${v(((n=(t=x.dbUser)==null?void 0:t.full_name)==null?void 0:n.split(" ")[0])||"Koç")} 👋</div>
        <div class="home-hero-date">${i[a.getDay()]}, ${a.getDate()} ${o[a.getMonth()]} ${a.getFullYear()}</div>
      </div>
      <div class="home-hero-right">
        <div class="home-yks-badge">
          <div class="home-yks-num">${$}</div>
          <div class="home-yks-meta">gün kaldı<br><b>YKS ${f.year}</b></div>
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
        <div class="hsv2-val">${l.students.length}</div>
        <div class="hsv2-lbl">Aktif Öğrenci</div>
      </div>
      <div class="hsv2-card" onclick="switchTab('students')" title="Öğrencilere git — randevu sekmesi">
        <div class="hsv2-top">
          <span class="hsv2-icon-wrap hsv2-blue">📅</span>
          <span class="hsv2-trend" style="color:var(--blue)">${T?T.time:"—"}</span>
        </div>
        <div class="hsv2-val" style="color:var(--blue)">${d.length}</div>
        <div class="hsv2-lbl">Bugün Randevu</div>
        <div class="hsv2-sub">${T?`Sıradaki: ${T.time}`:"Randevu tamamlandı"}</div>
      </div>
      <div class="hsv2-card" onclick="switchTab('messages')" title="Mesajlara git">
        <div class="hsv2-top">
          <span class="hsv2-icon-wrap ${s>0?"hsv2-red":"hsv2-green"}">💬</span>
          ${s>0?`<span class="hsv2-badge-red">${s} yeni</span>`:'<span class="hsv2-badge-green">Temiz</span>'}
        </div>
        <div class="hsv2-val" style="color:${s>0?"var(--red)":"var(--green)"}">${s}</div>
        <div class="hsv2-lbl">Okunmamış Mesaj</div>
        <div class="hsv2-sub">${s>0?"Yanıt bekliyor":"Tüm mesajlar okundu"}</div>
      </div>
      <div class="hsv2-card" title="Haftalık görev durumu">
        <div class="hsv2-top">
          <span class="hsv2-icon-wrap ${S>=70?"hsv2-green":S>=40?"hsv2-amber":"hsv2-red"}">📋</span>
          <span class="hsv2-trend" style="color:${S>=70?"var(--green)":S>=40?"var(--accent)":"var(--red)"}">%${S}</span>
        </div>
        <div class="hsv2-val" style="color:${S>=70?"var(--green)":S>=40?"var(--accent)":"var(--red)"}">${h}<span style="font-size:18px;font-weight:500;color:var(--text-dim)">/${B}</span></div>
        <div class="hsv2-lbl">Haftalık Görev</div>
        <div class="hsv2-progress"><div class="hsv2-bar" style="width:${S}%;background:${S>=70?"var(--green)":S>=40?"var(--accent)":"var(--red)"}"></div></div>
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
          <span class="hsc-pill">${d.length} randevu</span>
        </div>
        <div class="hsc-body">
          ${d.length===0?'<div class="hsc-empty">Bugün randevu yok</div>':""}
          ${d.map(I=>{const z=l.students.find(F=>F.id===I.studentId),_=I.time<E,[D,C]=I.time.split(":").map(Number),L=D*60+C,[k,A]=E.split(":").map(Number),j=k*60+A,P=L-j,Y=P>=-(I.duration||60)&&P<=15,H=Y&&I.meet_link?`<a href="${v(I.meet_link)}" target="_blank" style="display:inline-flex;align-items:center;gap:5px;padding:5px 12px;border-radius:8px;background:${P<=0?"var(--red)":"var(--accent)"};color:#fff;font-size:11px;font-weight:800;text-decoration:none;animation:${P<=0?"pulse 1.5s infinite":"none"};white-space:nowrap;flex-shrink:0">${P<=0?"🔴 Ders Sürüyor":"🟡 Derse Gir"}</a>`:"";return`<div class="hsc-appt-row ${_&&!Y?"hsc-appt-past":""}">
              <div class="hsc-appt-time">${I.time}</div>
              <div class="hsc-appt-bar" style="background:${(z==null?void 0:z.color)||"var(--accent)"}"></div>
              <div style="flex:1;min-width:0">
                <div class="hsc-appt-name">${v((z==null?void 0:z.name)||"?")}</div>
                <div class="hsc-appt-meta">${v(I.type)} · ${I.duration} dk${!Y&&I.meet_link?` · <a href="${v(I.meet_link)}" target="_blank" style="color:var(--blue);text-decoration:none">${I.meet_link.includes("zoom")?"Zoom":"Meet"} →</a>`:""}</div>
              </div>
              ${H||(_?'<span class="hsc-appt-done">✓</span>':"")}
            </div>`}).join("")}
        </div>
      </div>
    </div>

    <!-- HIZLI ERİŞİM -->
    <div style="display:flex;gap:8px;max-width:900px;margin:0 auto 4px;justify-content:center">
      ${[{tab:"messages",icon:"💬",label:"Mesajlar",sub:s>0?s+" okunmamış":"Temiz"},{tab:"coach-notes",icon:"📝",label:"Notlarım",sub:"Kişisel notlar"},{tab:"todolist",icon:"📅",label:"Ajanda",sub:"Tüm randevular"},{tab:"coach-applications",icon:"📩",label:"Başvurular",sub:"Eşleşme talepleri"}].map(({tab:I,icon:z,label:_,sub:D})=>`
        <div onclick="switchTab('${I}')" style="background:var(--surface);border:1px solid var(--border);border-radius:10px;padding:9px 16px;cursor:pointer;display:flex;align-items:center;gap:8px;white-space:nowrap;transition:border-color .15s;flex:1;justify-content:center" onmouseover="this.style.borderColor='var(--accent)'" onmouseout="this.style.borderColor='var(--border)'">
          <span style="font-size:16px">${z}</span>
          <div><div style="font-size:12px;font-weight:700">${_}</div><div style="font-size:10px;color:var(--text-dim)">${D}</div></div>
        </div>`).join("")}
    </div>`}catch(a){console.error("[renderHome] HATA:",a),e.innerHTML=`<div style='padding:24px;color:var(--text)'><b>İyi günler 👋</b><p style='color:var(--text-mid);margin-top:6px'>Hata: ${v(a.message)}</p></div>`}}function ot(){const e=document.getElementById("view-students"),t=ne(0,0),n={};l.students.forEach(r=>{let s=0,d=0,c=0,p=0;for(let m=0;m<7;m++)(l.tasks[`${r.id}_${O(J(t,m))}`]||[]).forEach(g=>{s++,c+=Number(g.duration||0),g.done&&(d++,p+=Number(g.duration||0))});n[r.id]={total:s,done:d,totalMin:c,doneMin:p}});const a=l.students.length,i=l.students.filter(r=>{const s=n[r.id];return s&&s.total>0}).length,o=l.students.filter(r=>{const s=n[r.id];return s&&s.total>0&&s.done===s.total}).length;e.innerHTML=`<div style="max-width:640px;margin:0 auto">
    <!-- Üst başlık -->
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:24px">
      <div>
        <div style="font-size:22px;font-weight:800;letter-spacing:-.3px">Öğrencilerim</div>
        <div style="font-size:12px;color:var(--text-dim);margin-top:3px">${a} öğrenci · ${i} bu hafta aktif · ${o} hafta tamamladı</div>
      </div>
      <div style="display:flex;gap:8px;flex-wrap:wrap">
        <button class="btn btn-ghost" onclick="openInviteCodeModal()" style="gap:6px;font-size:13px;padding:9px 16px">🎟 Davet Kodu</button>
        <button class="btn btn-accent" onclick="openStudentModal()" style="gap:6px;font-size:13px;padding:9px 18px">
          <span style="font-size:16px;line-height:1">+</span> Yeni Öğrenci
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
      ${l.students.length===0?`
        <div style="text-align:center;padding:64px 20px;color:var(--text-dim)">
          <div style="width:56px;height:56px;border-radius:16px;background:var(--surface2);display:flex;align-items:center;justify-content:center;font-size:24px;margin:0 auto 16px">👤</div>
          <div style="font-size:14px;font-weight:600;color:var(--text);margin-bottom:6px">Henüz öğrenciniz yok</div>
          <div style="font-size:12px;margin-bottom:16px">Sağ üstten kendiniz ekleyin ya da davet kodunuzu paylaşın — öğrenci kendi hesabını açsın.</div>
          <button class="btn btn-accent btn-sm" onclick="openInviteCodeModal()">🎟 Davet Kodunu Paylaş</button>
        </div>
      `:l.students.map(r=>{const s=n[r.id]||{total:0,done:0},d=s.total>0?Math.round(s.done/s.total*100):0,c=d>=80?"var(--green)":d>=40?"var(--accent)":"var(--red)",p=s.total>0&&s.done===s.total,m=l.exams.filter(g=>g.studentId===r.id).sort((g,E)=>E.date.localeCompare(g.date))[0],u=m?Object.values(m.nets||{}).reduce((g,E)=>g+E,0).toFixed(1):null;return`<div class="stu-row" id="sturow_${r.id}" onclick="openStudentDetail('${r.id}')" style="padding:12px 16px;align-items:center;gap:12px;border-radius:10px">
          <div style="width:38px;height:38px;border-radius:10px;background:${r.color};display:flex;align-items:center;justify-content:center;font-size:15px;font-weight:800;color:#fff;flex-shrink:0">${r.name[0]}</div>
          <div style="flex:1;min-width:0">
            <div style="font-size:13px;font-weight:700;color:var(--text)">${v(r.name)}</div>
            <div style="font-size:11px;color:var(--text-dim);margin-top:1px">${v(r.target||"Hedef belirtilmemiş")}</div>
          </div>
          <div style="display:flex;align-items:center;gap:8px;flex-shrink:0;font-size:11px;color:var(--text-mid)">
            <span style="font-weight:700;color:${c}">%${d}</span>
            <span style="color:var(--border2)">·</span>
            <span>${s.done}/${s.total} görev</span>
            ${u?`<span style="color:var(--border2)">·</span><span><b style="color:var(--text)">${u}</b> net</span>`:""}
            ${p?'<span style="color:var(--border2)">·</span><span style="color:var(--green);font-weight:600">✓ Tamam</span>':""}
          </div>
          <svg style="width:13px;height:13px;color:var(--border2);flex-shrink:0" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path d="m9 18 6-6-6-6"/></svg>
        </div>`}).join("")}
    </div>
    <div id="stuSearchNoResults" style="display:none;text-align:center;padding:48px 20px;color:var(--text-dim)">
      <div style="font-size:13px">Aramanızla eşleşen öğrenci bulunamadı.</div>
    </div>
  </div>`}function pi(){const e=document.getElementById("stuSearchInput").value.trim().toLowerCase(),t=document.getElementById("stuSearchNoResults");let n=0;l.students.forEach(a=>{const i=document.getElementById("sturow_"+a.id);if(i){const o=a.name.toLowerCase().includes(e);i.style.display=o?"flex":"none",o&&n++}}),t&&(t.style.display=e&&n===0?"block":"none")}function Hn(e){if(!l.students.find(p=>p.id===e))return;l.activeStuId=e;const t=l.students.find(p=>p.id===l.activeStuId),n=ne(0,t.weekStart||0);let a=0,i=0,o=0;for(let p=0;p<7;p++){const m=l.tasks[`${t.id}_${O(J(n,p))}`]||[];a+=m.length,i+=m.filter(u=>u.done).length,o+=m.reduce((u,g)=>u+Number(g.duration||0),0)}const r=a>0?Math.round(i/a*100):0,s=r>=80?"var(--green)":r>=50?"var(--accent)":"var(--red)",d=document.getElementById("view-student-detail");d.innerHTML=`
    <button class="back-link" onclick="switchTab('students')">← Öğrencilerim</button>

    <!-- Öğrenci başlık -->
    <div style="display:flex;align-items:flex-start;gap:18px;padding-bottom:24px;border-bottom:1px solid var(--border);margin-bottom:0">
      <div style="width:52px;height:52px;border-radius:12px;background:${t.color};display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:800;color:#fff;flex-shrink:0">${t.name[0]}</div>
      <div style="flex:1;min-width:0">
        <div style="font-size:20px;font-weight:800;letter-spacing:-.3px;line-height:1.2">${v(t.name)}</div>
        <div style="font-size:13px;color:var(--text-mid);margin-top:3px">${v(t.target||"Hedef belirtilmemiş")}</div>
        <div style="display:flex;gap:28px;margin-top:14px;flex-wrap:wrap">
          <div><div style="font-size:22px;font-weight:800;color:var(--accent);line-height:1;letter-spacing:-.5px">${a}</div><div style="font-size:10px;color:var(--text-dim);text-transform:uppercase;letter-spacing:.5px;margin-top:3px;font-weight:600">Bu Hafta</div></div>
          <div><div style="font-size:22px;font-weight:800;color:var(--green);line-height:1;letter-spacing:-.5px">${i}</div><div style="font-size:10px;color:var(--text-dim);text-transform:uppercase;letter-spacing:.5px;margin-top:3px;font-weight:600">Tamamlanan</div></div>
          <div><div style="font-size:22px;font-weight:800;color:${s};line-height:1;letter-spacing:-.5px">%${r}</div><div style="font-size:10px;color:var(--text-dim);text-transform:uppercase;letter-spacing:.5px;margin-top:3px;font-weight:600">Oran</div></div>
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
      ${[{label:"Program",icon:"📋",fn:`openStudentProgram('${t.id}')`},{label:"Denemeler",icon:"📊",fn:`openStudentExams('${t.id}')`},{label:"Randevular",icon:"📅",fn:`openStudentAppointments('${t.id}')`},{label:"Notlar",icon:"📝",fn:`openStudentNotes('${t.id}')`},{label:"Kaynaklar",icon:"📖",fn:`openStudentKaynaklar('${t.id}')`},{label:"Konu Haritası",icon:"🗺️",fn:`openKonuHaritasi('${t.id}')`},{label:"Hız",icon:"⚡",fn:`openSpeedModal('${t.id}')`},{label:"Rapor",icon:"📄",fn:`openReportModal('${t.id}')`},{label:"Geçmiş Raporlar",icon:"🗂️",fn:`openPastReports('${t.id}')`}].map(p=>`<button onclick="${p.fn}" style="display:flex;align-items:center;gap:6px;padding:14px 18px;background:none;border:none;border-bottom:2px solid transparent;font-size:13px;font-weight:600;color:var(--text-mid);cursor:pointer;white-space:nowrap;font-family:inherit;transition:all .15s" onmouseover="this.style.color='var(--text)';this.style.borderBottomColor='var(--border2)'" onmouseout="this.style.color='var(--text-mid)';this.style.borderBottomColor='transparent'">${p.icon} ${p.label}</button>`).join("")}
    </div>

    <!-- Haftalık ilerleme -->
    <div style="background:var(--surface);border:1px solid var(--border);border-radius:12px;padding:20px 24px;margin-bottom:16px;box-shadow:var(--shadow)">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:12px">
        <div>
          <div style="font-size:13px;font-weight:700;color:var(--text)">Haftalık İlerleme</div>
          <div style="font-size:12px;color:var(--text-dim);margin-top:2px">${i} tamamlandı · ${a-i} kaldı · ${Math.round(o/60)} saat</div>
        </div>
        <div style="font-size:28px;font-weight:800;color:${s};letter-spacing:-.5px">%${r}</div>
      </div>
      <div style="height:8px;background:var(--surface3);border-radius:99px;overflow:hidden">
        <div style="height:100%;width:${r}%;background:${s};border-radius:99px;transition:width .6s cubic-bezier(.4,0,.2,1)"></div>
      </div>
      <div style="display:flex;justify-content:space-between;margin-top:10px">
        <span style="font-size:11px;color:var(--text-dim)">0%</span>
        <span style="font-size:11px;color:var(--text-dim)">100%</span>
      </div>
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
    </div>`,currentTab!=="student-detail"&&se("student-detail");const c=document.getElementById("tbarTitle");c&&(c.textContent=t.name)}const He=[{stars:0,label:"Başlanmadı",color:"#6b7280",bg:"rgba(107,114,128,.08)",border:"rgba(107,114,128,.2)"},{stars:1,label:"Anlamadım",color:"#ef4444",bg:"rgba(239,68,68,.08)",border:"rgba(239,68,68,.2)"},{stars:2,label:"Temel Zorluk",color:"#f97316",bg:"rgba(249,115,22,.08)",border:"rgba(249,115,22,.2)"},{stars:3,label:"Temel OK",color:"#eab308",bg:"rgba(234,179,8,.08)",border:"rgba(234,179,8,.2)"},{stars:4,label:"Orta Seviye",color:"#84cc16",bg:"rgba(132,204,22,.08)",border:"rgba(132,204,22,.2)"},{stars:5,label:"İleri Seviye",color:"#22c55e",bg:"rgba(34,197,94,.08)",border:"rgba(34,197,94,.2)"},{stars:6,label:"Uzman",color:"#10b981",bg:"rgba(16,185,129,.08)",border:"rgba(16,185,129,.2)"},{stars:7,label:"Tekrar Dışı (TD)",color:"#3b82f6",bg:"rgba(59,130,246,.1)",border:"rgba(59,130,246,.3)"}];function Yn(e){const t=new Date(e),n=t.getDate(),a=n<=10?1:n<=20?11:21;return`${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,"0")}-${String(a).padStart(2,"0")}`}function mi(e=6){const t=[],n=new Date;let a=new Date(n);for(let i=0;i<e;i++){const o=Yn(a);t.find(c=>c.start===o)||t.unshift({start:o,label:ui(o)});const[r,s,d]=o.split("-").map(Number);if(d===21?a=new Date(r,s-1,11):d===11?a=new Date(r,s-1,1):a=new Date(r,s-2,21),t.length>=e)break}return t.slice(-e)}function ui(e){const[t,n,a]=e.split("-").map(Number),i=["Oca","Şub","Mar","Nis","May","Haz","Tem","Ağu","Eyl","Eki","Kas","Ara"],o=a===1?10:a===11?20:new Date(t,n,0).getDate();return`${a}-${o} ${i[n-1]}`}const hn={SAY:["Dil Bilgisi","TYT Matematik","AYT Matematik","Geometri","TYT Fizik","AYT Fizik","TYT Kimya","AYT Kimya","TYT Biyoloji","AYT Biyoloji"],EA:["Dil Bilgisi","TYT Matematik","AYT Matematik","Geometri","AYT Edebiyat","Tarih (TYT-AYT)","Coğrafya (TYT-AYT)","Felsefe Grubu & Din"],SOZ:["Dil Bilgisi","TYT Matematik","Geometri","AYT Edebiyat","Tarih (TYT-AYT)","Coğrafya (TYT-AYT)","Felsefe Grubu & Din"],DIL:["Dil Bilgisi","TYT Matematik","Geometri","YDT İngilizce"]};async function gi(e){const t=l.students.find(f=>f.id===e);if(!t)return;const n=document.getElementById("view-student-detail");n.innerHTML=`<button class="back-link" onclick="openStudentDetail('${e}')">← ${v(t.name)}</button><div style="padding:20px;color:var(--text-dim);font-size:13px">Yükleniyor…</div>`;const a=x.role==="coach"||x.role==="developer",i=t.yksArea||"SAY",o=hn[i]||hn.SAY;let r=o[0],s="mastery";function d(f,$){var w,B;return((B=(w=l.konuMastery[e])==null?void 0:w[f])==null?void 0:B[$])||null}function c(f,$){var w,B;return((B=(w=l.konuTekrarLog[e])==null?void 0:w[f])==null?void 0:B[$])||{}}async function p(f,$,w,B){const h=d(f,$),S=new Date().toISOString(),I=B||(w>=7?"td":w>0?"active":"not_started"),z={student_id:e,coach_id:x.coachId,subject:f,konu:$,stars:w,status:I,updated_at:S,...I==="active"&&!(h!=null&&h.ka_date)?{ka_date:S}:{},...I==="td"&&!(h!=null&&h.td_date)?{td_date:S}:{},...I==="active"&&(h==null?void 0:h.status)==="td"?{td_date:null}:{}},{data:_,error:D}=await y.from("konu_mastery").upsert(z,{onConflict:"student_id,subject,konu"}).select().single();if(D){b("Hata: "+D.message);return}return l.konuMastery[e]||(l.konuMastery[e]={}),l.konuMastery[e][f]||(l.konuMastery[e][f]={}),l.konuMastery[e][f][$]=_,_}async function m(f,$,w,B){const h=new Date().toISOString(),S={student_id:e,coach_id:x.coachId,subject:f,konu:$,period_start:w,review_count:B,updated_at:h},{data:I,error:z}=await y.from("konu_tekrar_log").upsert(S,{onConflict:"student_id,subject,konu,period_start"}).select().single();if(z){b("Hata: "+z.message);return}return l.konuTekrarLog[e]||(l.konuTekrarLog[e]={}),l.konuTekrarLog[e][f]||(l.konuTekrarLog[e][f]={}),l.konuTekrarLog[e][f][$]||(l.konuTekrarLog[e][f][$]={}),l.konuTekrarLog[e][f][$][w]=I,I}function u(f){const $=et[f]||[],w=$.map((_,D)=>{const C=d(f,_),L=(C==null?void 0:C.stars)||0,k=(C==null?void 0:C.status)||"not_started",A=He[L],j=k==="td",P=D%2===0?"var(--surface)":"var(--surface2)",Y=c(f,_),H=Object.values(Y).reduce((Q,R)=>Q+(R.review_count||0),0),F=C!=null&&C.last_review_date?new Date(C.last_review_date).toLocaleDateString("tr-TR",{day:"2-digit",month:"short"}):"—",V=a?Array.from({length:7},(Q,R)=>{const N=R+1,K=N<=L,re=f.replace(/'/g,"\\'"),ye=_.replace(/'/g,"\\'");return`<span class="km-star${K?" km-star-on":""}" data-stars="${N}" 
          onclick="window._kmSetStars('${re}','${ye}',${N})"
          title="${He[N].label}"
          style="cursor:pointer;font-size:16px;line-height:1;transition:transform .1s;display:inline-block"
          onmouseover="this.style.transform='scale(1.25)'" onmouseout="this.style.transform='scale(1)'"
        >${K?"⭐":"☆"}</span>`}).join(""):Array.from({length:7},(Q,R)=>`<span style="font-size:14px;opacity:${R<L?1:.25}">${R<L?"⭐":"☆"}</span>`).join("");let Z="";return j?Z='<span style="font-size:9px;font-weight:800;color:#3b82f6;background:rgba(59,130,246,.12);border:1px solid rgba(59,130,246,.3);border-radius:4px;padding:1px 5px;margin-left:4px">TD</span>':C!=null&&C.ka_date&&(Z='<span style="font-size:9px;font-weight:700;color:#10b981;background:rgba(16,185,129,.1);border:1px solid rgba(16,185,129,.2);border-radius:4px;padding:1px 5px;margin-left:4px">KA✓</span>'),`<tr id="${"km_"+btoa(encodeURIComponent(f+"|"+_)).replace(/[^a-zA-Z0-9]/g,"")}" style="background:${A.bg};border-bottom:1px solid ${A.border};transition:background .3s">
        <td style="padding:10px 14px;font-size:12px;font-weight:600;color:var(--text);min-width:200px;position:sticky;left:0;z-index:1;background:${P};border-right:1px solid var(--border)">
          ${v(_)}${Z}
        </td>
        <td style="padding:8px 12px;white-space:nowrap">
          ${V}
        </td>
        <td style="padding:8px 10px;font-size:11px;font-weight:700;color:${A.color};white-space:nowrap">
          ${L>0?A.label:'<span style="color:var(--text-dim)">—</span>'}
        </td>
        <td style="padding:8px 10px;text-align:center;font-size:11px;color:var(--text-mid);white-space:nowrap">
          ${H>0?`<b style="color:var(--text)">${H}×</b>`:"—"}
        </td>
        <td style="padding:8px 10px;text-align:center;font-size:11px;color:var(--text-dim);white-space:nowrap">${F}</td>
        ${a?`<td style="padding:8px 8px;text-align:center;white-space:nowrap">
          <button onclick="window._kmToggleKA('${f.replace(/'/g,"\\'")}','${_.replace(/'/g,"\\'")}')" 
            style="font-size:10px;padding:3px 7px;border-radius:5px;border:1px solid var(--border);background:var(--surface2);color:var(--text-mid);cursor:pointer;margin-right:4px" 
            title="Konu Anlatımı tamamlandı">KA</button>
          <button onclick="window._kmToggleTD('${f.replace(/'/g,"\\'")}','${_.replace(/'/g,"\\'")}')" 
            style="font-size:10px;padding:3px 7px;border-radius:5px;border:1px solid ${j?"#3b82f6":"var(--border)"};background:${j?"rgba(59,130,246,.15)":"var(--surface2)"};color:${j?"#3b82f6":"var(--text-mid)"};cursor:pointer;font-weight:${j?"800":"400"}" 
            title="Tekrar Dışı">TD</button>
        </td>`:""}
      </tr>`}).join(""),B=$.map(_=>d(f,_)),h=Array(8).fill(0);B.forEach(_=>h[(_==null?void 0:_.stars)||0]++);const S=B.filter(_=>(_==null?void 0:_.status)==="td").length,I=B.filter(_=>(_==null?void 0:_.status)==="active").length;return`<div style="display:flex;gap:12px;flex-wrap:wrap;padding:12px 16px;background:var(--surface2);border-bottom:1px solid var(--border);align-items:center">
      <span style="font-size:11px;color:var(--text-dim)"><b style="color:var(--text)">${$.length}</b> konu</span>
      <span style="font-size:11px;color:var(--text-dim)"><b style="color:#3b82f6">${S}</b> TD</span>
      <span style="font-size:11px;color:var(--text-dim)"><b style="color:#22c55e">${I}</b> aktif</span>
      <span style="font-size:11px;color:var(--text-dim)"><b style="color:#6b7280">${h[0]}</b> başlanmadı</span>
      <div style="flex:1;height:6px;background:var(--surface3);border-radius:99px;overflow:hidden;min-width:80px;max-width:200px">
        <div style="height:100%;width:${$.length>0?Math.round(S/$.length*100):0}%;background:#3b82f6;border-radius:99px"></div>
      </div>
      <span style="font-size:11px;color:#3b82f6;font-weight:700">${$.length>0?Math.round(S/$.length*100):0}% TD</span>
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
    </div>`}function g(f){const $=et[f]||[],w=mi(6),B=Yn(new Date),h=`<tr style="background:var(--surface2)">
      <th style="padding:8px 14px;text-align:left;font-size:10px;font-weight:800;color:var(--text-dim);border-right:1px solid var(--border);position:sticky;left:0;z-index:2;background:var(--surface2);white-space:nowrap;min-width:200px">KONU</th>
      <th style="padding:8px 8px;text-align:left;font-size:10px;font-weight:800;color:var(--text-dim);white-space:nowrap;min-width:60px">⭐</th>
      ${w.map(I=>`<th style="padding:8px 10px;text-align:center;font-size:10px;font-weight:800;color:${I.start===B?"var(--accent)":"var(--text-dim)"};background:${I.start===B?"var(--accent-dim)":"var(--surface2)"};white-space:nowrap;min-width:100px;border-left:1px solid var(--border)">${I.label}</th>`).join("")}
      <th style="padding:8px 10px;text-align:center;font-size:10px;font-weight:800;color:var(--text-dim);white-space:nowrap;border-left:2px solid var(--border)">TOPLAM</th>
    </tr>`,S=$.map((I,z)=>{const _=d(f,I),D=(_==null?void 0:_.stars)||0,L=((_==null?void 0:_.status)||"not_started")==="td",k=He[D],A=z%2===0?"var(--surface)":"var(--surface2)",j=c(f,I);let P=0;const Y=w.map(F=>{const V=j[F.start],Z=(V==null?void 0:V.review_count)||0;P+=Z;const te=F.start===B;if(a){const Q=Array.from({length:6},(R,N)=>{const K=N<Z,re=f.replace(/'/g,"\\'"),ye=I.replace(/'/g,"\\'");return`<span class="kt-box${K?" kt-box-on":""}"
              onclick="window._ktToggleBox('${re}','${ye}','${F.start}',${N+1})"
              style="display:inline-block;width:14px;height:14px;border-radius:3px;border:1.5px solid ${K?k.color:"var(--border2)"};background:${K?k.bg:"transparent"};cursor:pointer;transition:all .15s;margin:1px"
              title="${N+1}. tekrar"
            ></span>`}).join("");return`<td style="padding:6px 10px;border-left:1px solid var(--border);background:${te?"var(--accent-dim)":A};text-align:center">${Q}</td>`}else{const Q=Array.from({length:6},(R,N)=>{const K=N<Z;return`<span style="display:inline-block;width:12px;height:12px;border-radius:3px;border:1.5px solid ${K?k.color:"var(--border2)"};background:${K?k.bg:"transparent"};margin:1px"></span>`}).join("");return`<td style="padding:6px 10px;border-left:1px solid var(--border);background:${te?"var(--accent-dim)":A};text-align:center">${Q}</td>`}}).join(""),H=L?'<span style="font-size:9px;font-weight:800;color:#3b82f6;background:rgba(59,130,246,.12);border:1px solid rgba(59,130,246,.3);border-radius:4px;padding:1px 5px;margin-left:4px">TD</span>':"";return`<tr style="background:${A}">
        <td style="padding:8px 14px;font-size:12px;font-weight:600;color:var(--text);border-right:1px solid var(--border);position:sticky;left:0;z-index:1;background:${A};white-space:nowrap">
          ${v(I)}${H}
        </td>
        <td style="padding:8px 8px;white-space:nowrap">
          <span style="font-size:11px">${"⭐".repeat(Math.max(0,D))}</span>
        </td>
        ${Y}
        <td style="padding:8px 10px;text-align:center;font-size:12px;font-weight:800;color:${P>0?k.color:"var(--text-dim)"};border-left:2px solid var(--border)">${P||0}</td>
      </tr>`}).join("");return`<div style="overflow-x:auto"><table style="border-collapse:collapse;width:max-content;min-width:100%"><thead>${h}</thead><tbody>${S}</tbody></table></div>`}window._kmSetStars=async function(f,$,w){const B=d(f,$),h=(B==null?void 0:B.status)==="td"&&w<7?"active":null;await p(f,$,w,h);const S="km_"+btoa(encodeURIComponent(f+"|"+$)).replace(/[^a-zA-Z0-9]/g,"");if(document.getElementById(S)){const z=u(f);document.getElementById("khTable").innerHTML=z}b(`${$}: ${He[w].label} ✓`)},window._kmToggleKA=async function(f,$){const w=d(f,$),B=new Date().toISOString(),h=!!(w!=null&&w.ka_date),S={student_id:e,coach_id:x.coachId,subject:f,konu:$,stars:(w==null?void 0:w.stars)||1,status:(w==null?void 0:w.status)||"active",ka_date:h?null:B,updated_at:B},{data:I,error:z}=await y.from("konu_mastery").upsert(S,{onConflict:"student_id,subject,konu"}).select().single();if(z){b("Hata: "+z.message);return}l.konuMastery[e]||(l.konuMastery[e]={}),l.konuMastery[e][f]||(l.konuMastery[e][f]={}),l.konuMastery[e][f][$]=I,document.getElementById("khTable").innerHTML=u(f),b(h?"KA tarihi kaldırıldı":"KA ✓ tamamlandı olarak işaretlendi")},window._kmToggleTD=async function(f,$){const w=d(f,$),B=(w==null?void 0:w.status)==="td",h=B?(w==null?void 0:w.stars)>=7?5:w==null?void 0:w.stars:7;await p(f,$,h,B?"active":"td"),document.getElementById("khTable").innerHTML=s==="mastery"?u(f):g(f),b(B?`${$} tekrar listesine geri döndü`:`${$} → TD ✓`)},window._ktToggleBox=async function(f,$,w,B){const S=c(f,$)[w],z=((S==null?void 0:S.review_count)||0)>=B?B-1:B;if(await m(f,$,w,z),z>0){const _=d(f,$),D=new Date().toISOString(),C={student_id:e,coach_id:x.coachId,subject:f,konu:$,stars:(_==null?void 0:_.stars)||0,status:(_==null?void 0:_.status)||"active",last_review_date:D,review_count:((_==null?void 0:_.review_count)||0)+1,updated_at:D},{data:L}=await y.from("konu_mastery").upsert(C,{onConflict:"student_id,subject,konu"}).select().single();L&&(l.konuMastery[e]||(l.konuMastery[e]={}),l.konuMastery[e][f]||(l.konuMastery[e][f]={}),l.konuMastery[e][f][$]=L)}document.getElementById("khTable").innerHTML=g(f)};function E(){const f=window._khActiveSub||r;document.getElementById("khTable").innerHTML=s==="mastery"?u(f):g(f)}const T=o.map(f=>`<button class="kh-tab" onclick="window._khActiveSub='${f}';document.querySelectorAll('.kh-tab').forEach(b=>{b.style.color='var(--text-mid)';b.style.borderBottom='2px solid transparent';b.style.fontWeight='600'});this.style.color='var(--accent)';this.style.borderBottom='2px solid var(--accent)';this.style.fontWeight='700';window._khRefresh()"
      style="padding:10px 16px;border:none;border-bottom:2px solid ${f===r?"var(--accent)":"transparent"};background:none;font-size:12px;font-weight:${f===r?"700":"600"};color:${f===r?"var(--accent)":"var(--text-mid)"};cursor:pointer;white-space:nowrap;font-family:inherit;transition:all .15s">${f}</button>`).join("");window._khActiveSub=r,window._khRefresh=E,n.innerHTML=`
    <button class="back-link" onclick="openStudentDetail('${e}')">← ${v(t.name)}</button>
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:16px;flex-wrap:wrap;gap:10px">
      <div style="font-size:18px;font-weight:800;letter-spacing:-.2px">${v(t.name)} — Konu Haritası</div>
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
        ${He.slice(1).map(f=>`
          <div style="display:flex;align-items:center;gap:6px;font-size:11px">
            <span style="font-weight:800;color:${f.color}">⭐${f.stars}</span>
            <span style="color:var(--text-mid)">${f.label}</span>
          </div>`).join('<span style="color:var(--border2)">·</span>')}
      </div>
    </details>

    <div style="background:var(--surface);border:1px solid var(--border);border-radius:12px;overflow:hidden;box-shadow:var(--shadow)">
      <div style="display:flex;border-bottom:1px solid var(--border);overflow-x:auto;padding:0 4px">${T}</div>
      <div id="khTable" style="overflow-x:auto;max-height:calc(100vh - 310px);overflow-y:auto">${u(r)}</div>
    </div>`,window._kmSwitchView=function(f){s=f;const $=document.getElementById("kmViewMastery"),w=document.getElementById("kmViewTekrar");f==="mastery"?($.style.background="var(--accent)",$.style.color="#fff",$.style.fontWeight="700",w.style.background="var(--surface)",w.style.color="var(--text-mid)",w.style.fontWeight="600"):(w.style.background="var(--accent)",w.style.color="#fff",w.style.fontWeight="700",$.style.background="var(--surface)",$.style.color="var(--text-mid)",$.style.fontWeight="600"),window._khRefresh()}}function Vt(e){var i,o;l.activeStuId=e;const t=document.getElementById("view-program"),n=((i=l.students.find(r=>r.id===l.activeStuId))==null?void 0:i.name)||"";t.innerHTML=`<button class="back-link" onclick="switchTab('student-detail')">← ${n}</button>`,t.innerHTML+=document.createElement("div").innerHTML,currentTab!=="program"&&se("program");const a=document.getElementById("tbarTitle");a&&(a.textContent=(((o=l.students.find(r=>r.id===l.activeStuId))==null?void 0:o.name)||"")+" · Program"),X()}function vi(e){var n;l.activeStuId=e,currentTab!=="exams"&&se("exams");const t=document.getElementById("tbarTitle");t&&(t.textContent=(((n=l.students.find(a=>a.id===l.activeStuId))==null?void 0:n.name)||"")+" · Denemeler"),qe()}function fi(e){var n;l.activeStuId=e,currentTab!=="appointments"&&se("appointments");const t=document.getElementById("tbarTitle");t&&(t.textContent=(((n=l.students.find(a=>a.id===l.activeStuId))==null?void 0:n.name)||"")+" · Randevular"),Ge()}let fe={};async function yi(e){const t=l.students.find(a=>a.id===e);if(!t)return;l.activeStuId=e,currentTab!=="student-detail"&&se("student-detail");const n=document.getElementById("view-student-detail");if(n.innerHTML=`<button class="back-link" onclick="openStudentDetail('${e}')">← ${v(t.name)}</button>
    <div style="padding:20px;color:var(--text-dim);font-size:13px">Yükleniyor…</div>`,!fe[e]){const{data:a}=await y.from("student_books").select("*").eq("student_id",e).order("created_at",{ascending:!0});fe[e]=a||[]}Zt(e)}function Zt(e){const t=l.students.find(p=>p.id===e),n=fe[e]||[],a=document.getElementById("view-student-detail"),i=x.role==="coach"||x.role==="developer",o=n.reduce((p,m)=>p+m.total_tests,0),r=n.reduce((p,m)=>p+m.completed_tests,0),s=o>0?Math.round(r/o*100):0,d=s>=75?"var(--green)":s>=40?"var(--accent)":"var(--red)",c=n.length?n.map(p=>{const m=p.total_tests>0?Math.min(100,Math.round(p.completed_tests/p.total_tests*100)):0,u=m>=75?"var(--green)":m>=40?"var(--accent)":"var(--red)";return`<div style="background:var(--surface);border:1px solid var(--border);border-radius:12px;padding:14px 16px;margin-bottom:10px">
      <div style="display:flex;align-items:center;gap:12px">
        <div style="flex:1;min-width:0">
          <div style="font-size:13px;font-weight:700;margin-bottom:7px">${v(p.name)}</div>
          <div style="display:flex;align-items:center;gap:10px">
            <div style="flex:1;height:7px;background:var(--surface3);border-radius:99px;overflow:hidden">
              <div style="height:100%;width:${m}%;background:${u};border-radius:99px;transition:width .4s"></div>
            </div>
            <span style="font-size:12px;font-weight:800;color:${u};white-space:nowrap;min-width:36px;text-align:right">%${m}</span>
          </div>
          <div style="font-size:11px;color:var(--text-dim);margin-top:4px">${p.completed_tests} / ${p.total_tests} test tamamlandı</div>
        </div>
        ${i?`<div style="display:flex;gap:6px;flex-shrink:0">
          <button class="btn btn-ghost btn-xs" onclick="editStudentBook('${e}','${p.id}')">✏️</button>
          <button class="btn btn-danger btn-xs" onclick="deleteStudentBook('${e}','${p.id}')" style="opacity:.4" onmouseover="this.style.opacity=1" onmouseout="this.style.opacity=.4">🗑</button>
        </div>`:""}
      </div>
    </div>`}).join(""):'<div class="empty"><p>Henüz kaynak eklenmemiş.</p></div>';a.innerHTML=`
    <button class="back-link" onclick="openStudentDetail('${e}')">← ${v(t.name)}</button>
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:16px">
      <div>
        <div style="font-size:18px;font-weight:800;letter-spacing:-.2px">${v(t.name)} — Kaynaklar</div>
        <div style="font-size:12px;color:var(--text-dim);margin-top:2px">${n.length} kaynak · ${r}/${o} test tamamlandı</div>
      </div>
      ${i?`<button class="btn btn-accent btn-sm" onclick="addStudentBook('${e}')">+ Kaynak Ekle</button>`:""}
    </div>
    ${n.length>1?`<div style="background:var(--surface);border:1px solid var(--border);border-radius:12px;padding:14px 16px;margin-bottom:16px;display:flex;align-items:center;gap:14px">
      <div style="flex:1">
        <div style="font-size:11px;font-weight:700;color:var(--text-dim);text-transform:uppercase;letter-spacing:.5px;margin-bottom:6px">Genel İlerleme</div>
        <div style="display:flex;align-items:center;gap:10px">
          <div style="flex:1;height:8px;background:var(--surface3);border-radius:99px;overflow:hidden">
            <div style="height:100%;width:${s}%;background:${d};border-radius:99px;transition:width .4s"></div>
          </div>
          <span style="font-size:14px;font-weight:800;color:${d};white-space:nowrap">%${s}</span>
        </div>
      </div>
    </div>`:""}
    ${c}`}function xi(e){document.getElementById("sbModalTitle").textContent="Kaynak Ekle",document.getElementById("sbId").value="",document.getElementById("sbStuId").value=e,document.getElementById("sbName").value="",document.getElementById("sbTotal").value="0",document.getElementById("sbCompleted").value="0",document.getElementById("sbPctPreview").innerHTML="",G("sbModal")}function bi(e,t){const n=(fe[e]||[]).find(a=>a.id===t);n&&(document.getElementById("sbModalTitle").textContent="Kaynağı Düzenle",document.getElementById("sbId").value=t,document.getElementById("sbStuId").value=e,document.getElementById("sbName").value=n.name,document.getElementById("sbTotal").value=n.total_tests,document.getElementById("sbCompleted").value=n.completed_tests,Kn(),G("sbModal"))}function Kn(){var o,r;const e=parseInt((o=document.getElementById("sbTotal"))==null?void 0:o.value)||0,t=parseInt((r=document.getElementById("sbCompleted"))==null?void 0:r.value)||0,n=document.getElementById("sbPctPreview");if(!n||!e){n&&(n.innerHTML="");return}const a=Math.min(100,Math.round(t/e*100)),i=a>=75?"var(--green)":a>=40?"var(--accent)":"var(--red)";n.innerHTML=`<div style="display:flex;align-items:center;gap:10px">
    <div style="flex:1;height:8px;background:var(--surface3);border-radius:99px;overflow:hidden">
      <div style="height:100%;width:${a}%;background:${i};border-radius:99px;transition:width .3s"></div>
    </div>
    <span style="font-size:13px;font-weight:800;color:${i}">%${a}</span>
  </div>`}async function hi(){const e=document.getElementById("sbName").value.trim();if(!e)return b("Kaynak adı girin!");const t=Math.max(0,parseInt(document.getElementById("sbTotal").value)||0),n=Math.min(t,Math.max(0,parseInt(document.getElementById("sbCompleted").value)||0)),a=document.getElementById("sbStuId").value,i=document.getElementById("sbId").value,o={name:e,total_tests:t,completed_tests:n};if(i){const{error:r}=await y.from("student_books").update(o).eq("id",i);if(r)return b("Hata: "+r.message);const s=(fe[a]||[]).find(d=>d.id===i);s&&Object.assign(s,o),b("Güncellendi ✓")}else{const{data:r,error:s}=await y.from("student_books").insert({...o,student_id:a,coach_id:x.coachId}).select().single();if(s)return b("Hata: "+s.message);fe[a]||(fe[a]=[]),fe[a].push(r),b("Kaynak eklendi ✓")}q("sbModal"),Zt(a)}async function ki(e,t){if(!await ie("Bu kaynağı silmek istiyor musunuz?"))return;const{error:n}=await y.from("student_books").delete().eq("id",t);if(n)return b("Hata: "+n.message);fe[e]=(fe[e]||[]).filter(a=>a.id!==t),Zt(e),b("Silindi ✓")}function On(){var i,o;const e=document.getElementById("view-profile"),t=x.dbUser,n=((t==null?void 0:t.full_name)||"?").split(" ").map(r=>r[0]).join("").slice(0,2).toUpperCase(),a=x.role==="coach"?"Koç":x.role==="developer"?"Developer":"Öğrenci";e.innerHTML=`
    <div style="max-width:480px;margin:0 auto">
      <!-- Mini user card -->
      <div style="display:flex;align-items:center;gap:14px;padding:20px 24px;background:var(--surface);border:1px solid var(--border);border-radius:12px;margin-bottom:20px;box-shadow:var(--shadow)">
        <div style="width:48px;height:48px;border-radius:12px;background:var(--accent);display:flex;align-items:center;justify-content:center;font-size:18px;font-weight:800;color:#fff;flex-shrink:0">${n}</div>
        <div>
          <div style="font-size:16px;font-weight:800;letter-spacing:-.2px">${v((t==null?void 0:t.full_name)||"")}</div>
          <div style="font-size:12px;color:var(--text-dim);margin-top:2px">${a} · ${v(((i=l.workspace)==null?void 0:i.brand_name)||"Rostrum Akademi")}</div>
        </div>
      </div>

      <!-- Form -->
      <div style="background:var(--surface);border:1px solid var(--border);border-radius:12px;padding:20px 24px;box-shadow:var(--shadow);display:flex;flex-direction:column;gap:16px">
        <div>
          <label style="font-size:11px;font-weight:700;color:var(--text-dim);text-transform:uppercase;letter-spacing:.5px;display:block;margin-bottom:6px">Ad Soyad</label>
          <input id="pf_name" value="${v((t==null?void 0:t.full_name)||"")}" style="width:100%;padding:9px 12px;background:var(--surface2);border:1.5px solid var(--border);border-radius:8px;font-size:13px;font-family:inherit;color:var(--text);outline:none;box-sizing:border-box" onfocus="this.style.borderColor='var(--accent)'" onblur="this.style.borderColor='var(--border)'">
        </div>
        <div>
          <label style="font-size:11px;font-weight:700;color:var(--text-dim);text-transform:uppercase;letter-spacing:.5px;display:block;margin-bottom:6px">Kullanıcı Adı</label>
          <input id="pf_user" value="${v((t==null?void 0:t.username)||"")}" style="width:100%;padding:9px 12px;background:var(--surface2);border:1.5px solid var(--border);border-radius:8px;font-size:13px;font-family:inherit;color:var(--text);outline:none;box-sizing:border-box" onfocus="this.style.borderColor='var(--accent)'" onblur="this.style.borderColor='var(--border)'">
        </div>
        ${x.role==="coach"||x.role==="developer"?`<div>
          <label style="font-size:11px;font-weight:700;color:var(--text-dim);text-transform:uppercase;letter-spacing:.5px;display:block;margin-bottom:6px">Akademi Adı</label>
          <input id="pf_brand" value="${v(((o=l.workspace)==null?void 0:o.brand_name)||"")}" style="width:100%;padding:9px 12px;background:var(--surface2);border:1.5px solid var(--border);border-radius:8px;font-size:13px;font-family:inherit;color:var(--text);outline:none;box-sizing:border-box" onfocus="this.style.borderColor='var(--accent)'" onblur="this.style.borderColor='var(--border)'">
        </div>`:""}
        <div>
          <label style="font-size:11px;font-weight:700;color:var(--text-dim);text-transform:uppercase;letter-spacing:.5px;display:block;margin-bottom:6px">Yeni Şifre <span style="font-weight:400;text-transform:none">(boş bırakılırsa değişmez)</span></label>
          <input type="password" id="pf_pass" placeholder="••••••••" style="width:100%;padding:9px 12px;background:var(--surface2);border:1.5px solid var(--border);border-radius:8px;font-size:13px;font-family:inherit;color:var(--text);outline:none;box-sizing:border-box" onfocus="this.style.borderColor='var(--accent)'" onblur="this.style.borderColor='var(--border)'">
        </div>
        <button class="btn btn-accent" onclick="saveProfile()" style="align-self:flex-start;padding:9px 20px">Kaydet</button>
      </div>
    </div>`}async function wi(){var i,o;const e=document.getElementById("pf_name").value.trim(),t=document.getElementById("pf_pass").value,n=(o=(i=document.getElementById("pf_brand"))==null?void 0:i.value)==null?void 0:o.trim();if(!e)return b("Ad boş olamaz!");const a={full_name:e};t&&(a.password_hash=await Ne(t)),await y.from("users").update(a).eq("id",x.dbUser.id),n&&(x.role==="coach"||x.role==="developer")&&(await y.from("workspaces").update({brand_name:n}).eq("coach_id",x.coachId),l.workspace={...l.workspace||{},brand_name:n},document.querySelector(".sb-logo-text").textContent=n),x.dbUser={...x.dbUser,full_name:e},document.getElementById("sbName").textContent=e,b("Profil kaydedildi ✓")}function Fn(){var n;const e=document.getElementById("view-settings"),t=document.documentElement.getAttribute("data-theme")==="dark";e.innerHTML=`
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
            ${$a.map(a=>`<div class="ac-dot" onclick="applyAccent('${a.val}','${a.dim}')" style="background:${a.val}" title="${a.name}"></div>`).join("")}
          </div>
        </div>
      </div>
      
      ${x.role==="developer"?`
      <div class="settings-block" style="margin-top:20px">
        <div class="settings-block-title">Yapay Zeka (AI) Geliştirici Ayarları</div>
        <div class="setting-item" style="flex-direction:column;align-items:flex-start;gap:10px">
          <div>
            <div class="setting-item-lbl">Gemini API Anahtarı (Yerel Test)</div>
            <div class="setting-item-sub" style="font-size:11px;line-height:1.5;margin-top:2px">Yalnızca yerel geliştirme ortamı için. Production'da Vercel env kullanılır.</div>
          </div>
          <div style="display:flex;gap:8px;width:100%">
            <input type="text" id="geminiApiKeyInput" value="${v(localStorage.getItem("gemini_api_key")||"")}" placeholder="AIzaSy..." style="flex:1;background:var(--surface2);border:1px solid var(--border);border-radius:8px;padding:8px 12px;color:var(--text);font-size:12px;outline:none" autocomplete="off">
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

      ${x.role==="coach"||x.role==="developer"?(()=>{var g;const a=x.dbUser,i=(a==null?void 0:a.plan)||"trial",o=i==="trial"?"Deneme Dönemi":i==="pro"?"Pro Üyelik":i==="premium"?"Premium Üyelik":i.charAt(0).toUpperCase()+i.slice(1),r=i==="trial"?"#f0a500":"#3ecf8e";let s=null;a!=null&&a.trial_ends_at?s=new Date(a.trial_ends_at):a!=null&&a.created_at&&(s=new Date(new Date(a.created_at).getTime()+14*24*60*60*1e3));const c=s?Math.max(0,Math.ceil((s-new Date)/(1e3*60*60*24))):null,p=E=>E?E.toLocaleDateString("tr-TR",{day:"numeric",month:"long",year:"numeric"}):"—",m=c===null?"#888":c>7?"#3ecf8e":c>3?"#f0a500":"#ef4444",u=((g=l.students)==null?void 0:g.length)||0;return`
      <div class="settings-block" style="margin-top:20px">
        <div class="settings-block-title">Üyelik</div>
        <div class="setting-item">
          <div><div class="setting-item-lbl">Plan</div><div class="setting-item-sub" style="color:${r};font-weight:600">${o}</div></div>
        </div>
        <div class="setting-item">
          <div><div class="setting-item-lbl">Bitiş Tarihi</div><div class="setting-item-sub">${p(s)}</div></div>
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
          <div><div class="setting-item-lbl">Kullanıcı Adı</div><div class="setting-item-sub">${v(((n=x.dbUser)==null?void 0:n.username)||"")}</div></div>
          <button class="btn btn-ghost btn-sm" onclick="switchTab('profile')">Düzenle</button>
        </div>
        <div class="setting-item">
          <div><div class="setting-item-lbl">Oturumu Kapat</div></div>
          <button class="btn btn-danger btn-sm" onclick="doLogout()">Çıkış</button>
        </div>
      </div>
    </div>`}function $i(){const e=document.getElementById("geminiApiKeyInput").value.trim();e?(localStorage.setItem("gemini_api_key",e),b("API Anahtarı kaydedildi ✓")):(localStorage.removeItem("gemini_api_key"),b("API Anahtarı kaldırıldı."))}let Ae="";function X(){const e=document.getElementById("view-program"),t=l.students.find(d=>d.id===l.activeStuId),n=(t==null?void 0:t.weekStart)??0,a=ne(l.weekOffset,n),i=J(a,6),o=ue(),r=localStorage.getItem("ra_program_mode")||"weekly";let s="";for(let d=0;d<7;d++){const c=J(a,d),p=O(c),m=p===o,u=`${l.activeStuId}_${p}`,g=l.tasks[u]||[],E=g.reduce((h,S)=>h+Number(S.duration),0),T=g.reduce((h,S)=>h+(S.done?Number(S.duration):0),0),f=DAYS_TR[(n+d)%7],$=[...g];r==="hourly"&&$.sort((h,S)=>h.start_time&&!S.start_time?-1:!h.start_time&&S.start_time?1:h.start_time&&S.start_time?h.start_time.localeCompare(S.start_time):0);const w=$.map(h=>{const S=g.indexOf(h),I=h.start_time?`<div class="tc-time-badge">🕒 ${h.start_time}</div>`:"";return`
        <div data-task-id="${h._id}" class="task-card task-${h.type} ${h.done?"done":""} ${h.start_time?"hourly-card":""}" onclick="openTaskDetail('${p}',${S},'coach')" style="cursor:pointer">
          <div class="tc-check ${h.done?"on":""}" onclick="event.stopPropagation();toggleTask('${p}',${S})"></div>
          <div class="tc-body">
            ${I}
            <div class="tc-type">${it(h.type)}${h.exam?" · "+h.exam:""}</div>
            <div class="tc-subject">${v(h.subject)}</div>
            <div class="tc-meta">${h.duration} dk</div>
          </div>
          <button class="tc-menu-btn" onclick="event.stopPropagation();showTaskMenu('${p}',${S},this)">⋯</button>
        </div>`}).join(""),B=["Pzt","Sal","Çar","Per","Cum","Cmt","Paz"][(n+d)%7];s+=`<div class="day-col ${m?"today":""}">
      <div class="day-hd">
        <div>
          <div class="day-name-lbl">${B}</div>
          <div class="day-num">${c.getDate()}</div>
        </div>
        <div style="display:flex;flex-direction:column;align-items:flex-end;gap:4px">
          <span class="day-badge" style="font-size:8.5px">${Qe(T)} / ${Qe(E)}</span>
          ${_clipboardTask?`<button class="btn btn-ghost btn-xs" onclick="pasteTaskFromClipboard('${p}')" style="font-size:9px;color:var(--accent);border-color:rgba(240,165,0,.3);background:var(--accent-dim);padding:2px 6px">Yapıştır</button>`:""}
        </div>
      </div>
      <div class="day-tasks-list">${w||""}</div>
      <button class="add-day-btn" onclick="openTaskModal('${p}','${f}')" ${l.activeStuId?"":"disabled"}>+ Görev Ekle</button>
    </div>`}e.innerHTML=`
    <button class="back-link" onclick="switchTab('student-detail')">← ${t?v(t.name):"Öğrenci"}</button>
    <div class="card prog-banner">
      <div class="prog-avatar" style="background:${(t==null?void 0:t.color)||"var(--accent)"};color:#fff">${t?t.name[0]:"?"}</div>
      <div class="prog-meta">
        <h2>${t?v(t.name):"Öğrenci Seçin"}</h2>
        <p>${t?v(t.target):"Program görüntülemek için öğrenci seçin"}</p>
      </div>
      <div class="prog-actions">
        <button class="btn btn-ghost btn-sm" onclick="saveWeekAsTemplate()">Şablon Kaydet</button>
        <button class="btn btn-ghost btn-sm" onclick="applyTemplateToWeek()">Şablon Uygula</button>
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
        <button class="btn btn-xs ${r==="weekly"?"btn-accent":"btn-ghost"}" onclick="setProgramMode('weekly')" style="padding:4px 10px;font-size:11px;font-weight:700;border-radius:8px">📋 Günlük Serbest</button>
        <button class="btn btn-xs ${r==="hourly"?"btn-accent":"btn-ghost"}" onclick="setProgramMode('hourly')" style="padding:4px 10px;font-size:11px;font-weight:700;border-radius:8px">🕒 Saatlik Düzen</button>
      </div>

      ${_clipboardTask?'<button class="btn btn-accent btn-sm" onclick="pasteTaskToWholeWeek()" style="font-size:12px;padding:6px 12px;gap:6px">📋 Kopyalananı Tüm Haftaya Yapıştır</button>':""}
    </div>
    <div class="week-grid">${s}</div>`}function _i(e){l.activeStuId=e||null,at(),X()}function Ei(e){l.weekOffset+=e,at(),X()}function Ti(){l.weekOffset=0,at(),X()}function Si(e){localStorage.setItem("ra_program_mode",e),x.role==="student"?Ie():X()}window.setProgramMode=Si;(()=>{const e=document.createElement("style");e.textContent=`
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
  `,document.head.appendChild(e)})();let de=[];function Ii(){if(!l.activeStuId)return b("Önce öğrenci seçin");const e=l.students.find(i=>i.id===l.activeStuId),t=(e==null?void 0:e.weekStart)??0,n=ne(l.weekOffset,t);de=[];let a="";for(let i=0;i<7;i++){const o=J(n,i),r=O(o);DAYS_TR[(t+i)%7];const s=(l.tasks[`${l.activeStuId}_${r}`]||[]).length>0,d=["Pzt","Sal","Çar","Per","Cum","Cmt","Paz"][(t+i)%7];a+=`<button class="day-sel-btn" id="dsbtn_${i}" data-ds="${r}" onclick="toggleDaySel(${i},'${r}')">
      <div>${d}</div>
      <div style="font-size:14px;font-weight:800">${o.getDate()}</div>
      ${s?'<div style="font-size:9px;color:var(--accent);margin-top:2px">●</div>':'<div style="font-size:9px;opacity:0">·</div>'}
    </button>`}document.getElementById("daySelectorGrid").innerHTML=a,G("clearWeekModal")}function zi(e,t){const n=document.getElementById("dsbtn_"+e),a=de.indexOf(t);a===-1?(de.push(t),n.classList.add("sel")):(de.splice(a,1),n.classList.remove("sel"))}function Bi(){const e=document.querySelectorAll(".day-sel-btn");de.length===7?(de=[],e.forEach(t=>t.classList.remove("sel"))):(de=[],e.forEach((t,n)=>{de.push(t.dataset.ds),t.classList.add("sel")}))}async function Mi(){if(!de.length)return b("Önce gün seçin");if(await ie(`${de.length} günün görevleri silinsin mi?`)){M(!0,"Siliniyor...");for(const e of de)await y.from("tasks").delete().eq("student_id",l.activeStuId).eq("date",e),delete l.tasks[`${l.activeStuId}_${e}`];M(!1),ke(),q("clearWeekModal"),X(),b(`${de.length} gün temizlendi ✓`)}}const et={"Dil Bilgisi":["Sözcükte Anlam","Cümlede Anlam","Ses Bilgisi","Yazım Kuralları","Noktalama İşaretleri","Sözcükte Yapı","İsim","Sıfat","Zamir","Zarf","İsim-Sıfat Tamlamaları","Edat-Bağlaç-Ünlem","Fiiller – Fiil Çekimleri – Fiillerde Zaman Kayması","Ek Fiil – Ek Eylem","Fiilde Çatı","Fiilimsiler","Cümlenin Öğeleri","Cümle Türleri","Anlatım Bozuklukları"],"TYT Matematik":["Sayılar ve Basamak","Bölünebilme","EBOB-EKOK","Kesirler ve Ondalıklı Sayılar","Mutlak Değer","Üslü Sayılar","Köklü Sayılar","Oran-Orantı","Problemler – Yaş-İşçi-Havuz","Problemler – Kar-Zarar-Yüzde","Problemler – Hareket","Problemler – Karışım","Birinci Dereceden Denklemler","Kümeler","Mantık","Fonksiyonlar","Polinomlar","İkinci Dereceden Denklemler","Permütasyon-Kombinasyon","Olasılık","İstatistik ve Veri"],"AYT Matematik":["Polinomlar","Karmaşık Sayılar","Logaritma","Trigonometri","Diziler","Limit ve Süreklilik","Türev","İntegral","Matrisler ve Determinant"],Geometri:["Doğruda Açı","Üçgende Açı ve Kenar","Üçgende Alan","Üçgende Benzerlik","Özel Üçgenler (Pisagor)","Dörtgenler","Dörtgende Alan","Çember ve Daire","Çemberde Açı","Analitik Geometri – Nokta ve Doğru","Analitik Geometri – Çember","Katı Cisimler","Uzay Geometrisi"],"TYT Fizik":["Fizik Bilimine Giriş","Madde ve Özellikleri","Basınç","Kaldırma Kuvveti","Isı Sıcaklık Genleşme","Hareket","Newton Hareket Yasaları","İş Güç Enerji","Elektrik","Manyetizma","Optik","Dalgalar"],"AYT Fizik":["Vektörler","Bağıl ve Bileşik Hareket","Newton'ın Hareket Yasaları","Sabit İvmeli Hareket","Tek Boyutta Atışlar","İki Boyutta Atışlar","Enerji","İtme ve Momentum","Tork ve Denge","Kütle ve Ağırlık Merkezi","Basit Makineler","Elektriksel Kuvvet ve Elektrik Alan","Elektriksel Potansiyel Enerji","Düzgün Elektrik Alan ve Sığa","Manyetik Alan","Manyetik Kuvvet","Manyetik İndüksiyon","Alternatif Akım ve Transformatörler","Düzgün Çembersel Hareket","Eylemsizlik Momenti ve Açısal Momentum","Genel Çekim Yasası ve Kepler","Basit Harmonik Hareket","Dalga Mekaniği","Elektromanyetik Dalgalar","Atom Modelleri ve Atomun Yapısı","Büyük Patlama ve Atom Altı Parçacıklar","Radyoaktivite","Özel Görelilik Teorisi","Modern Fizik"],"TYT Kimya":["Kimyanın Sembolik Dili","Atom Modelleri","Periyodik Cetvel","Etkileşimler","Maddenin Halleri","Kimyanın Temel Kanunları","Mol Kavramı","Kimyasal Hesaplamalar","Kimyasal Tepkime Türleri","Karışımlar","Asitler ve Bazlar","Tuzlar","Doğa ve Kimya","Kimya Her Yerde"],"AYT Kimya":["Modern Atom","Gazlar","Sıvı Çözeltiler ve Çözünürlük","Tepkimelerde Hız","Tepkimelerde Denge","Sulu Çözelti Dengeleri","Kimya ve Elektrik","Karbon Kimyası","Organik Bileşikler","Enerji Kaynakları"],"TYT Biyoloji":["Canlıların Temel Bileşenleri","İnorganik Bileşikler","Karbohidratlar","Lipitler (Yağlar)","Proteinler","Hormonlar","Vitaminler","Enzimler","Nükleik Asitler","DNA-RNA","ATP Metabolizma","Hücre Organelleri","Hücre Zarı Madde Geçişleri","Ekoloji","Güncel Çevre Sorunları","Canlıların Sınıflandırılması","Hücre Bölünmeleri","Mitoz","Mayoz","Kalıtım"],"AYT Biyoloji":["Sinir Sistemi","Endokrin Sistemi","Duyu Organları","Destek Hareket Sistemi","Dolaşım Sistemi","Bağışıklık Sistemi","Solunum Sistemi","Üriner Sistemi","Üreme Sistemi","Komünite Ekolojisi","Popülasyon Ekolojisi","Genden Proteine","Enerji Dönüşümleri","Bitki Biyolojisi","Canlı ve Çevre"],"AYT Edebiyat":["Güzel Sanatlar ve Edebiyat","Coşku ve Heyecanı Dile Getiren Metinler (Şiir)","Olay Çevresinde Oluşan Edebi Metinler","Destan Dönemi Türk Edebiyatı","İslamiyet Kabulü İlk Edebi Ürünler","Divan Edebiyatı","Halk Edebiyatı","Tanzimat Edebiyatı","Servet-i Fünun Edebiyatı","Fecr-i Ati Edebiyatı","Milli Edebiyat","Cumhuriyet Dönemi Türk Edebiyatı","Edebi Akımlar"],"Tarih (TYT-AYT)":["Tarih ve Zaman","İnsanlığın İlk Dönemleri","Orta Çağ'da Dünya","İlk ve Orta Çağlarda Türk Dünyası","İslam Medeniyetinin Doğuşu","İlk Türk-İslam Devletleri","Beylikten Devlete Osmanlı","Dünya Gücü Osmanlı","Osmanlı Kültür ve Medeniyeti","En Uzun Yüzyıl (Osmanlı)","XX. Yüzyıl Başlarında Osmanlı","I. Dünya Savaşı","Milli Mücadele Hazırlık Dönemi","Kurtuluş Savaşı ve Antlaşmalar","Atatürk İlke ve İnkılapları","Atatürk Dönemi Türk Dış Politikası"],"Coğrafya (TYT-AYT)":["Doğa ve İnsan","Dünya'nın Şekli ve Hareketleri","Coğrafi Konum","Harita Bilgisi","Atmosfer ve İklim","Dünya'nın Tektonik Yapısı","İç ve Dış Kuvvetler","Nüfus ve Yerleşme","Ekonomik Faaliyetler","Bölgeler ve Ülkeler","Çevre ve Toplum","Ekosistem ve Madde Dönüşü","Türkiye'de Nüfus ve Yerleşme","Türkiye'nin Coğrafi Konumu ve Bölgeleri","Küresel Ortam: Bölgeler ve Ülkeler"],"Felsefe Grubu & Din":["Felsefeyi Tanıma","Bilgi Felsefesi","Varlık Felsefesi","Ahlak Felsefesi","Sanat Felsefesi","Din Felsefesi","Siyaset Felsefesi","Bilim Felsefesi","Psikolojiye Giriş","Sosyolojiye Giriş","Klasik Mantık","Kur'an-ı Kerim ve Anlamı","İnanç ve İbadet","Ahlak ve Değerler","Hz. Muhammed ve Gençlik","İslam Medeniyeti ve Bilim"],"YDT İngilizce":["Grammar (Dil Bilgisi)","Vocabulary (Kelime Bilgisi)","Reading Comprehension (Okuduğunu Anlama)","Sentence Completion (Cümle Tamamlama)","Dialogue Completion (Diyalog Tamamlama)","Translation (Çeviri)","Restatement (Eş Anlamlı Cümle)","Paragraph Completion (Paragraf Tamamlama)","Irrelevant Sentence (Anlamı Bozan Cümle)"]};function Ai(e,t){const n=`${e||""} ${t||""}`.trim();return et[n]||et[t||""]||null}let pe=[];function Di(e,t){const n=pe.indexOf(t);n===-1?(pe.push(t),e.style.borderColor="var(--red)",e.style.background="rgba(255,92,122,.12)",e.style.color="var(--red)"):(pe.splice(n,1),e.style.borderColor="var(--border)",e.style.background="var(--surface)",e.style.color="var(--text-mid)")}window.toggleKonuChip=Di;let ve=[];function Ci(){const e=document.getElementById("tmNewResourceToggle").checked;Un(e)}function Un(e){document.getElementById("tmSearchSection").style.display=e?"none":"",document.getElementById("tmManualSection").style.display=e?"":"none",document.getElementById("tmTestWrap").style.display="none";const t=document.getElementById("tmToggleSlider");t&&(t.style.background=e?"var(--accent)":"var(--border)",t.style.setProperty("--tw-after-x",e?"16px":"0px"))}function Li(){const e=document.getElementById("tmManualTestInput"),t=e.value.trim();t&&(ve.push(t),e.value="",Gn())}function ji(e){ve.splice(e,1),Gn()}function Gn(){const e=document.getElementById("tmManualTestChips");e&&(e.innerHTML=ve.map((t,n)=>`
    <span style="display:inline-flex;align-items:center;gap:5px;background:var(--accent-dim);border:1px solid rgba(240,165,0,.3);color:var(--accent);padding:4px 10px;border-radius:99px;font-size:12px;font-weight:600">
      ${v(t)}
      <button onclick="removeManualTest(${n})" style="background:none;border:none;cursor:pointer;color:var(--accent);font-size:14px;padding:0;line-height:1">×</button>
    </span>`).join(""))}function qn(e,t){if(!l.activeStuId)return b("Önce öğrenci seçin");Ae=e,_editingTaskId=null,W=null,document.querySelector("#taskModal h2").innerHTML=`Görev Ekle — <span id="tmDay">${t}</span>`,document.querySelector("#taskModal .btn-accent").textContent="Programa Ekle",document.getElementById("tmSubjectFree").value="",document.getElementById("tmDuration").value="60",document.getElementById("tmStartTime").value="",document.getElementById("tmNote").value="",document.getElementById("tmExam").value="",document.getElementById("tmType").value="deneme",document.getElementById("tmSubjectSel").style.display="none",document.getElementById("tmSubjectFree").style.display="",document.getElementById("soruBankasiWrap").style.display="none",document.getElementById("tmBookSearch").value="",document.getElementById("tmBookVal").value="",document.getElementById("tmBookList").style.display="none",document.getElementById("tmTestWrap").style.display="none";const n=document.getElementById("tmTestSummary");n&&(n.style.display="none");const a=document.getElementById("tmNewResourceToggle");a&&(a.checked=!1,Un(!1)),document.getElementById("tmManualKaynak").value="",document.getElementById("tmManualTestInput").value="",document.getElementById("tmManualTestChips").innerHTML="",ve=[],Vn(),G("taskModal")}let le={},Fe=!1;async function Wn(){if(Fe)return;const{data:e}=await y.from("resources").select("*").eq("active",!0).order("name");e&&(e.forEach(t=>{let n=[t.subject];t.subject==="Tarih"?n.push("Tarih1","Tarih2"):t.subject==="Coğrafya"?n.push("Coğrafya1","Coğrafya2"):(t.subject==="Din Kültürü"||t.subject==="Din")&&(n=["Din","Din Kültürü"]),n.forEach(a=>{const i=`${t.exam_type}_${a}`;le[i]||(le[i]=[]),le[i].push({name:t.name,yil:t.year,testler:Array.isArray(t.tests)?t.tests:[],publisher:t.publisher})})}),Fe=!0)}let Ze=[],W=null;function wt(){const e=document.getElementById("tmExam").value,t=document.getElementById("tmType").value,n=document.getElementById("tmSubjectSel"),a=document.getElementById("tmSubjectFree");W=null,document.getElementById("tmBookVal").value="",document.getElementById("tmBookSearch").value="",document.getElementById("tmBookList").innerHTML="",document.getElementById("tmBookList").style.display="none",document.getElementById("tmTestWrap").style.display="none";const i=document.getElementById("tmTestSummary");i&&(i.style.display="none"),e&&SUBJECT_MAP[e]?(n.innerHTML=SUBJECT_MAP[e].map(s=>`<option value="${s}">${s}</option>`).join(""),n.style.display="",a.style.display="none"):(n.style.display="none",a.style.display="");const o=(t==="soru"||t==="konu")&&e;document.getElementById("soruBankasiWrap").style.display=o?"":"none";const r=document.getElementById("tmBookSearch");r&&(r.placeholder=t==="konu"?"Hoca veya playlist ara...":"Kitap veya yayınevi ara..."),Fe=!1,le={},o&&$t("")}function Pi(){W=null,document.getElementById("tmBookVal").value="",document.getElementById("tmBookSearch").value="",document.getElementById("tmBookList").style.display="none",document.getElementById("tmTestWrap").style.display="none";const e=document.getElementById("tmType").value,t=document.getElementById("tmExam").value;Fe=!1,le={},(e==="soru"||e==="konu")&&t&&$t("")}document.getElementById("tmType").addEventListener("change",wt);async function $t(e){const t=document.getElementById("tmExam").value,n=document.getElementById("tmSubjectSel").value||"",a=document.getElementById("tmType").value,i=document.getElementById("tmBookList"),o=a==="konu"?"playlist":"book";if(!Fe){i.style.display="block",i.innerHTML='<div style="padding:12px;font-size:12px;color:var(--text-dim);text-align:center">⏳ Yükleniyor...</div>';const{data:c}=await y.from("resources").select("*").eq("active",!0).eq("resource_type",o).order("name");le={},c&&c.forEach(p=>{let m=[p.subject];p.subject==="Tarih"?m.push("Tarih1","Tarih2"):p.subject==="Coğrafya"?m.push("Coğrafya1","Coğrafya2"):(p.subject==="Din Kültürü"||p.subject==="Din")&&(m=["Din","Din Kültürü"]),m.forEach(u=>{const g=`${p.exam_type}_${u}`;le[g]||(le[g]=[]),le[g].push({name:p.name,yil:p.year,testler:Array.isArray(p.tests)?p.tests:[],publisher:p.publisher,resource_type:p.resource_type||"book"})})}),Fe=!0}const r=`${t}_${n}`,s=le[r]||[],d=e.toLowerCase();if(Ze=s.filter(c=>{var p;return!d||c.name.toLowerCase().includes(d)||((p=c.publisher)==null?void 0:p.toLowerCase().includes(d))}),!e&&!Ze.length){i.style.display="none";return}if(!Ze.length){i.style.display="block",i.innerHTML='<div style="padding:12px;font-size:12px;color:var(--text-dim);text-align:center">Kaynak bulunamadı</div>';return}i.style.display="block",i.innerHTML=Ze.map((c,p)=>`
    <div onclick="selectBook(${p})" style="padding:10px 14px;cursor:pointer;border-bottom:1px solid var(--border);display:flex;justify-content:space-between;align-items:center;transition:background .15s"
      onmouseover="this.style.background='var(--surface3)'" onmouseout="this.style.background=''">
      <div>
        <div style="font-size:13px;font-weight:700">${v(c.name)}</div>
        <div style="font-size:10px;color:var(--text-dim);margin-top:2px">${v(c.publisher||"")} · ${c.testler.length} test</div>
      </div>
      <span style="font-size:10px;font-weight:700;background:var(--green-dim);color:var(--green);padding:2px 7px;border-radius:99px;margin-left:8px;flex-shrink:0">${c.yil}</span>
    </div>`).join("")}function Ri(){const e=document.getElementById("tmBookSearch").value;if(e.length===0){document.getElementById("tmBookList").style.display="none";return}$t(e)}function Ni(e){W=Ze[e],document.getElementById("tmBookVal").value=W.name,document.getElementById("tmBookSearch").value=W.name,document.getElementById("tmBookList").style.display="none",_t(),document.getElementById("tmTestWrap").style.display=""}function _t(){if(!W)return;const e=document.getElementById("tmTestList"),t=W.resource_type==="playlist",n=W.name||"";e.innerHTML=W.testler.map((a,i)=>{const o=a.label||a,r=o.trim()===""||o.trim()===n.trim()?`Ders ${i+1}`:o,s=a.soru||0,d=a.url||"";a.topic;const c=Ca(o),p=c==="done"?"ti-status-done":c==="pending"?"ti-status-pending":"",m=c==="done"?'<span class="ti-badge ti-badge-done">✓ Tamamlandı</span>':c==="pending"?'<span class="ti-badge ti-badge-pending">⏳ Atandı</span>':"";return t?`<label class="${p}" style="display:flex;align-items:center;gap:8px;padding:8px 10px;cursor:pointer;transition:background .1s;border-bottom:1px solid var(--border)"
        onmouseover="this.style.background='var(--surface3)'" onmouseout="this.style.background=''">
        <input type="checkbox" id="test_${i}" value="${i}" onchange="updateTestSummary()"
          style="width:15px;height:15px;accent-color:var(--accent);cursor:pointer;flex-shrink:0">
        <div style="width:22px;height:22px;border-radius:6px;background:var(--surface3);color:var(--text-mid);font-size:10px;font-weight:800;display:flex;align-items:center;justify-content:center;flex-shrink:0">${i+1}</div>
        <div style="flex:1;min-width:0">
          <div style="font-size:12px;font-weight:600;line-height:1.3;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${v(r)}</div>
          <div style="display:flex;align-items:center;gap:6px;margin-top:2px">
            <span style="font-size:10px;color:var(--text-dim)">${s>0?`⏱ ${s} dk`:"⏱ ?"}</span>
            ${m}
          </div>
        </div>
        ${d?`<a href="${v(d)}" target="_blank" onclick="event.stopPropagation()"
          style="display:flex;align-items:center;gap:3px;font-size:11px;font-weight:700;background:#cc000022;color:#ff5555;border:1px solid #aa222233;padding:5px 10px;border-radius:7px;text-decoration:none;flex-shrink:0;white-space:nowrap"
          onmouseover="this.style.background='#cc000044'" onmouseout="this.style.background='#cc000022'">▶ İzle</a>`:'<span style="font-size:10px;color:var(--text-dim);flex-shrink:0;padding:5px 8px;border:1px solid var(--border);border-radius:7px">Linksiz</span>'}
      </label>`:`<label class="${p}" style="display:flex;align-items:center;gap:8px;padding:7px 10px;border-radius:7px;cursor:pointer;transition:background .1s"
        onmouseover="this.style.background='var(--surface3)'" onmouseout="this.style.background=''">
        <input type="checkbox" id="test_${i}" value="${i}" onchange="updateTestSummary()"
          style="width:15px;height:15px;accent-color:var(--accent);cursor:pointer;flex-shrink:0">
        <div style="flex:1;display:flex;align-items:center;gap:6px;flex-wrap:wrap">
          <span style="font-size:12px;font-weight:600">${v(r)}</span>
          ${m}
        </div>
        ${s>0?`<span style="font-size:10px;color:var(--text-dim);background:var(--surface3);padding:2px 7px;border-radius:99px;flex-shrink:0">${s} soru</span>`:""}
      </label>`}).join(""),Ue()}function Hi(){document.querySelectorAll("#tmTestList input[type=checkbox]").forEach(e=>e.checked=!0),Ue()}function Yi(){document.querySelectorAll("#tmTestList input[type=checkbox]").forEach(e=>e.checked=!1),Ue()}function Ue(){if(!W)return;const e=[...document.querySelectorAll("#tmTestList input[type=checkbox]:checked")],t=document.getElementById("tmTestSummary"),n=document.getElementById("tmTestSummaryText"),a=document.getElementById("tmSuggestedDuration"),i=document.getElementById("tmSpeedRow"),o=W.resource_type==="playlist";if(e.length===0){t.style.display="none";return}let r=0,s=0;e.forEach(m=>{const u=parseInt(m.value),g=W.testler[u];o?s+=(g==null?void 0:g.soru)||0:r+=(g==null?void 0:g.soru)||0});const d=document.querySelector("[data-mspeed].speed-active"),c=d?parseFloat(d.dataset.mspeed):1;let p=0;if(o)p=s>0?Math.ceil(s/c):0,n.textContent=`${e.length} video · ${s} dk`,i&&(i.style.display="");else{const m=document.getElementById("tmExam").value,u=document.getElementById("tmSubjectSel").value||"",g=`${l.activeStuId}_${m}_${u}`,E=vt[g]||180;p=r>0?Math.ceil(r*E/60):0,n.textContent=`${e.length} test · ${r} soru${p>0?" · Önerilen: "+p+" dk":""}`,i&&(i.style.display="none")}a.style.display=p>0?"":"none",ct=p,a.setAttribute("data-dur",p),t.style.display="",p>0&&(document.getElementById("tmDuration").value=p)}function Ki(e){document.querySelectorAll("[data-mspeed]").forEach(t=>{const n=t.dataset.mspeed===e;t.classList.toggle("speed-active",n),t.style.borderColor=n?"var(--accent)":"var(--border)",t.style.background=n?"var(--accent-dim)":"var(--surface2)",t.style.color=n?"var(--accent)":"var(--text-mid)"}),Ue()}let ct=0;function Oi(){ct>0&&(document.getElementById("tmDuration").value=ct,b("Süre uygulandı: "+ct+" dk"))}let vt={};async function Vn(){if(!l.activeStuId)return;const{data:e}=await y.from("student_speeds").select("*").eq("student_id",l.activeStuId);vt={},(e||[]).forEach(t=>{const n=`${t.student_id}_${t.exam_type}_${t.subject}`;vt[n]=t.secs_per_question})}async function Zn(e,t,n,a){const{data:i}=await y.from("student_speeds").select("id").eq("student_id",e).eq("exam_type",t).eq("subject",n).single();i?await y.from("student_speeds").update({secs_per_question:a,updated_at:new Date().toISOString()}).eq("id",i.id):await y.from("student_speeds").insert({student_id:e,coach_id:x.coachId,exam_type:t,subject:n,secs_per_question:a}),vt[`${e}_${t}_${n}`]=a,b("Hız kaydedildi ✓")}let kn=null,Xe=null;function Et(){clearTimeout(kn),kn=setTimeout(Fi,400)}async function Fi(){var i,o,r,s,d;const e=document.getElementById("tmSmartBadge");if(!e)return;const t=parseInt((i=document.getElementById("tmQCount"))==null?void 0:i.value)||0,n=(((o=document.getElementById("tmSubjectSel"))==null?void 0:o.style.display)!=="none"?(r=document.getElementById("tmSubjectSel"))==null?void 0:r.value:(s=document.getElementById("tmSubjectFree"))==null?void 0:s.value)||"",a=((d=document.getElementById("tmExam"))==null?void 0:d.value)||"TYT";if(!t||!n||!l.activeStuId){e.style.display="none",Xe=null;return}try{const{data:c,error:p}=await y.rpc("calculate_smart_duration",{p_student_id:l.activeStuId,p_exam_type:a,p_subject:n,p_question_count:t,p_video_minutes:0,p_speed_multiplier:1});if(p||!c){e.style.display="none";return}Xe=c.estimated_minutes;const m=c.speed_source==="student";e.style.display="block",e.style.background=m?"var(--green-dim)":"var(--blue-dim)",e.style.borderColor=m?"rgba(5,150,105,.3)":"rgba(37,99,235,.3)",e.style.color=m?"var(--green)":"var(--blue)",e.innerHTML=`⚡ Akıllı Süre: <b>${c.estimated_minutes} dk</b> — ${m?`öğrencinin gerçek hızına göre (${c.secs_per_question} sn/soru)`:`sistem varsayılanına göre (${c.secs_per_question} sn/soru)`} · <u>süreye uygula</u>`}catch{e.style.display="none"}}function Ui(){Xe&&(document.getElementById("tmDuration").value=Xe,b("⚡ Akıllı süre uygulandı: "+Xe+" dk"))}document.getElementById("tmType").addEventListener("change",wt);var _n;(_n=document.getElementById("tmExam"))==null||_n.addEventListener("change",Et);var En;(En=document.getElementById("tmSubjectSel"))==null||En.addEventListener("change",Et);var Tn;(Tn=document.getElementById("tmSubjectFree"))==null||Tn.addEventListener("input",Et);let Mt=!1;async function Gi(){var n;if(Mt)return;Mt=!0;const e=document.querySelector('#taskModal button[onclick*="saveTask"]'),t=e?e.textContent:"Programa Ekle";e&&(e.disabled=!0,e.textContent="Kaydediliyor...");try{const a=document.getElementById("tmType").value,i=document.getElementById("tmSubjectSel"),o=document.getElementById("tmSubjectFree"),r=document.getElementById("tmExam").value,s=parseInt(document.getElementById("tmDuration").value)||60,d=document.getElementById("tmStartTime").value||null,c=document.getElementById("tmNote").value.trim();if((n=document.getElementById("tmNewResourceToggle"))==null?void 0:n.checked){const w=document.getElementById("tmManualKaynak").value.trim();if(!w)return b("Kaynak adı girin!");const B=i.style.display!=="none"?i.value:o.value.trim(),h=B?`${B} - ${w}`:w,S=ve.map(C=>({label:C,url:"",soru:0}));let I=c;ve.length>0&&(I=`${ve.length} test: ${ve.slice(0,3).join(", ")}${ve.length>3?` +${ve.length-3} daha`:""}`);const z={student_id:l.activeStuId,coach_id:x.coachId,date:Ae,type:a,exam_type:r,subject:h,duration:s,note:I,done:!1,task_items:S.length>0?S:null,start_time:d};M(!0);const{error:_}=await y.from("tasks").insert(z);if(M(!1),_)return b("Hata: "+_.message);const D=`${l.activeStuId}_${Ae}`;l.tasks[D]||(l.tasks[D]=[]),l.tasks[D].push({type:a,exam:r,subject:h,duration:s,note:I,done:!1,task_items:z.task_items,start_time:d}),q("taskModal"),X(),b("Görev eklendi ✓");return}const m=document.getElementById("tmBookVal").value,u=(W==null?void 0:W.resource_type)==="playlist";let g="";if((a==="soru"||a==="konu")&&m){const w=i.style.display!=="none"?i.value:"";g=w?`${w} - ${m}`:`${m}`}else g=(i.style.display!=="none"?i.value:o.value).trim();if(!g)return b("Ders adı girin!");const E=[...document.querySelectorAll("#tmTestList input[type=checkbox]:checked")];let T=c,f=[];if(E.length>0&&W){const w=E.map(B=>{const h=W.testler[parseInt(B.value)];return(h==null?void 0:h.label)||h||""});if(f=E.map(B=>{const h=W.testler[parseInt(B.value)];return{label:(h==null?void 0:h.label)||h||"",url:(h==null?void 0:h.url)||"",soru:(h==null?void 0:h.soru)||0}}),u){const B=h=>h.length>14?h.slice(0,13)+"…":h;T=`${w.length} video: ${w.slice(0,5).map(B).join(", ")}${w.length>5?` +${w.length-5}`:""}`}else{const B=h=>h.length>14?h.slice(0,13)+"…":h;T=`${w.length} test: ${w.slice(0,5).map(B).join(", ")}${w.length>5?` +${w.length-5}`:""}`}}const $={student_id:l.activeStuId,coach_id:x.coachId,date:Ae,type:a,exam_type:r,subject:g,duration:s,note:T,done:!1,task_items:f.length>0?f:null,start_time:d};if(_editingTaskId){M(!0);const{error:w}=await y.from("tasks").update({type:$.type,exam_type:$.exam_type,subject:$.subject,duration:$.duration,note:$.note,task_items:$.task_items,start_time:$.start_time}).eq("id",_editingTaskId);if(M(!1),w)return b("Hata: "+w.message);const B=`${l.activeStuId}_${Ae}`;if(l.tasks[B]){const h=l.tasks[B].findIndex(S=>S._id===_editingTaskId);h!==-1&&(l.tasks[B][h]={_id:_editingTaskId,type:$.type,exam:$.exam_type,subject:$.subject,duration:$.duration,note:$.note,done:l.tasks[B][h].done,student_note:l.tasks[B][h].student_note||"",task_items:$.task_items,start_time:$.start_time})}q("taskModal"),X(),b("Görev güncellendi ✓"),_editingTaskId=null}else{const{data:w,error:B}=await y.from("tasks").insert($).select().single();if(B)return b("Hata: "+B.message);const h=`${l.activeStuId}_${Ae}`;l.tasks[h]||(l.tasks[h]=[]),l.tasks[h].push({_id:w.id,type:w.type,exam:w.exam_type,subject:w.subject,duration:w.duration,note:w.note,done:!1,student_note:"",task_items:w.task_items||null,start_time:w.start_time}),q("taskModal"),X(),b("Görev eklendi ✓")}}finally{Mt=!1,e&&(e.disabled=!1,e.textContent=t)}}async function qi(e,t){var o;const n=`${l.activeStuId}_${e}`,a=(o=l.tasks[n])==null?void 0:o[t];if(!a)return;const i=!a.done;await y.from("tasks").update({done:i}).eq("id",a._id),a.done=i,X()}let pt=null;function Jt(){pt&&(pt.remove(),pt=null)}document.addEventListener("click",Jt);function Wi(e,t,n){Jt();const a=n.getBoundingClientRect(),i=document.createElement("div");i.className="tc-dropdown",i.innerHTML=`
    <button onclick="closeTaskMenu();openCoachTaskEdit('${e}',${t})">✏️ Düzenle</button>
    <button onclick="closeTaskMenu();copyTaskToClipboard('${e}',${t})">📋 Kopyala</button>
    <button onclick="closeTaskMenu();copyTaskToWholeWeek('${e}',${t})">📅 Tüm Haftaya Kopyala</button>
    <button class="danger" onclick="closeTaskMenu();deleteTask('${e}',${t})">🗑 Kaldır</button>`;const o=a.bottom+4,r=Math.min(a.left,window.innerWidth-155);i.style.cssText=`top:${o}px;left:${r}px;`,document.body.appendChild(i),pt=i,setTimeout(()=>i.addEventListener("click",s=>s.stopPropagation()),0)}async function Vi(e,t){var r;const n=`${l.activeStuId}_${e}`,a=(r=l.tasks[n])==null?void 0:r[t];if(!a)return;const{data:i,error:o}=await y.from("tasks").insert({student_id:l.activeStuId,coach_id:x.coachId,date:e,type:a.type,exam_type:a.exam||null,subject:a.subject,duration:a.duration,note:a.note||null,done:!1,task_items:a.task_items||null}).select().single();if(o)return b("Kopyalama başarısız");l.tasks[n]||(l.tasks[n]=[]),l.tasks[n].push({_id:i.id,type:i.type,exam:i.exam_type,subject:i.subject,duration:i.duration,note:i.note,done:!1,student_note:"",task_items:i.task_items||null}),X(),b("Görev kopyalandı")}async function Zi(e,t){var r;const n=`${l.activeStuId}_${e}`,a=(r=l.tasks[n])==null?void 0:r[t];if(!a)return;const i=[a.exam,a.subject].filter(Boolean).join(" · ")||a.type||"Görev",o=document.querySelector(`[data-task-id="${a._id}"]`);if(o){o.style.transition="all 0.3s ease",o.style.opacity="0",o.style.transform="translateX(30px)";const s=o.querySelector(".tc-body");s&&(s.innerHTML='<div style="color:var(--red); font-weight:700; font-size:12px; display:flex; align-items:center; gap:6px">🗑️ Siliniyor...</div>')}await new Promise(s=>setTimeout(s,300)),await y.from("tasks").delete().eq("id",a._id),l.tasks[n].splice(t,1),X(),b(`"${i}" silindi`)}let ce={studentId:"",type:""};window._draggingApptId=null;const Jn={"Haftalık Değerlendirme":"#E8613A","TYT Koçluğu":"#3B82F6","AYT Koçluğu":"#8B5CF6",Mentörlük:"#10B981","Deneme Analizi":"#F59E0B",Motivasyon:"#EC4899","Genel Görüşme":"#64748B"},wn=0,Ji=24,Xi=60;function Xn(e){return Jn[e]||"#64748B"}function Qi(e){const t=l.students.find(o=>o.id===e.studentId),n=new Date(e.date+"T"+(e.time||"09:00")),a=new Date(n.getTime()+(e.duration||45)*6e4),i=o=>o.getFullYear()+String(o.getMonth()+1).padStart(2,"0")+String(o.getDate()).padStart(2,"0")+"T"+String(o.getHours()).padStart(2,"0")+String(o.getMinutes()).padStart(2,"0")+"00";return`https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(((t==null?void 0:t.name)||"Öğrenci")+" – Koçluk")}&dates=${i(n)}/${i(a)}&details=${encodeURIComponent(e.type||"")}`}function eo(){we()}function to(){we()}function no(){we()}function ao(e,t){ce[e]=t,we()}function io(){let e=l.appointments;ce.studentId&&(e=e.filter(o=>o.studentId===ce.studentId)),ce.type&&(e=e.filter(o=>o.type===ce.type));const t=["BEGIN:VCALENDAR","VERSION:2.0","PRODID:-//Rostrum Akademi//TR","CALSCALE:GREGORIAN","METHOD:PUBLISH","X-WR-CALNAME:Rostrum Ajanda"];e.forEach(o=>{const r=l.students.find(p=>p.id===o.studentId),s=new Date(o.date+"T"+(o.time||"09:00")),d=new Date(s.getTime()+(o.duration||45)*6e4),c=p=>p.getFullYear()+String(p.getMonth()+1).padStart(2,"0")+String(p.getDate()).padStart(2,"0")+"T"+String(p.getHours()).padStart(2,"0")+String(p.getMinutes()).padStart(2,"0")+"00";t.push("BEGIN:VEVENT",`DTSTART:${c(s)}`,`DTEND:${c(d)}`,`SUMMARY:${(r==null?void 0:r.name)||"Öğrenci"} – ${o.type||"Koçluk"}`),o.note&&t.push(`DESCRIPTION:${o.note.replace(/\n/g,"\\n")}`),(o.meetLink||o.meet_link)&&t.push(`URL:${o.meetLink||o.meet_link}`),t.push(`UID:rostrum-${o.id}@rostrumakademi.com`,"END:VEVENT")}),t.push("END:VCALENDAR");const n=new Blob([t.join(`\r
`)],{type:"text/calendar;charset=utf-8"}),a=URL.createObjectURL(n),i=document.createElement("a");i.href=a,i.download="rostrum-ajanda.ics",i.click(),URL.revokeObjectURL(a),b("Ajanda indirildi ✓")}function Qn(e,t){t.stopPropagation();const n=document.getElementById("apptDetailPopup");if(n){const g=n.dataset.id;if(n.remove(),g===e)return}const a=l.appointments.find(g=>g.id===e);if(!a)return;const i=l.students.find(g=>g.id===a.studentId),o=Xn(a.type),r=document.createElement("div");r.id="apptDetailPopup",r.dataset.id=e;const s=window.innerWidth,d=window.innerHeight,c=264;let p=Math.min(t.clientX+12,s-c-12),m=Math.min(t.clientY+12,d-220);r.style.cssText=`position:fixed;left:${p}px;top:${m}px;z-index:600;width:${c}px;background:var(--surface);border:1px solid var(--border);border-radius:14px;padding:14px 16px;box-shadow:0 8px 32px rgba(0,0,0,.18);animation:viewIn .15s ease`;const u=a.meetLink||a.meet_link;r.innerHTML=`
    <div style="display:flex;align-items:center;gap:10px;margin-bottom:10px">
      <div style="width:10px;height:10px;border-radius:50%;background:${o};flex-shrink:0"></div>
      <div style="flex:1;font-size:14px;font-weight:800">${v((i==null?void 0:i.name)||"?")}</div>
      <button onclick="document.getElementById('apptDetailPopup')?.remove()" style="background:none;border:none;cursor:pointer;color:var(--text-dim);font-size:18px;line-height:1;padding:0">×</button>
    </div>
    <div style="display:flex;flex-direction:column;gap:5px;margin-bottom:12px;font-size:12px;color:var(--text-mid)">
      <div>🕐 <b style="color:var(--text)">${a.time||"—"}</b> · ${a.duration} dk</div>
      <div>📋 <span style="background:${o}20;color:${o};padding:1px 8px;border-radius:99px;font-weight:700;font-size:11px">${v(a.type||"")}</span></div>
      ${a.note?`<div>📝 <span style="color:var(--text)">${v(a.note)}</span></div>`:""}
      <div>📅 ${new Date(a.date+"T12:00").toLocaleDateString("tr-TR",{day:"numeric",month:"long",weekday:"long"})}</div>
    </div>
    <div style="display:flex;gap:6px;flex-wrap:wrap">
      ${u?`<a href="${v(u)}" target="_blank" style="font-size:11px;font-weight:700;color:var(--blue);background:var(--blue-dim);padding:4px 10px;border-radius:99px;text-decoration:none">🎥 ${u.includes("zoom")?"Zoom":"Meet"}</a>`:""}
      <a href="${Qi(a)}" target="_blank" style="font-size:11px;font-weight:700;color:var(--green);background:var(--green-dim);padding:4px 10px;border-radius:99px;text-decoration:none">📅 GCal</a>
      <button onclick="document.getElementById('apptDetailPopup')?.remove();openAgendaApptModal('${a.id}')" style="font-size:11px;font-weight:700;color:var(--text);background:var(--surface2);padding:4px 10px;border-radius:99px;border:1px solid var(--border);cursor:pointer;font-family:inherit">✏️ Düzenle</button>
      <button onclick="deleteAgendaAppt('${a.id}')" style="font-size:11px;font-weight:700;color:var(--red,#ef4444);background:#ef444410;padding:4px 10px;border-radius:99px;border:none;cursor:pointer;font-family:inherit">🗑</button>
    </div>`,document.body.appendChild(r),setTimeout(()=>{document.addEventListener("click",function g(E){r.contains(E.target)||(r.remove(),document.removeEventListener("click",g))})},50)}async function oo(e,t){e.preventDefault();const n=window._draggingApptId;if(!n)return;window._draggingApptId=null;const a=e.currentTarget,i=a.getBoundingClientRect(),o=a.closest("[data-tl-scroll]"),r=o?o.scrollTop:0,d=(e.clientY-i.top+r)/Xi*60+wn*60,c=Math.max(wn,Math.min(Ji-1,Math.floor(d/60))),p=Math.round(d%60/15)*15,m=p>=60?0:p,u=`${String(c).padStart(2,"0")}:${String(m).padStart(2,"0")}`,{error:g}=await y.from("appointments").update({date:t,time:u}).eq("id",n);if(g){b("Hata: "+g.message);return}const E=l.appointments.find(T=>T.id===n);E&&(E.date=t,E.time=u),we(),b("Randevu taşındı ✓")}function ea(){we()}function we(){const e=document.getElementById("view-todolist");if(!e)return;if(!document.getElementById("fc-styles")){const s=document.createElement("style");s.id="fc-styles",s.textContent=`
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
    `,document.head.appendChild(s)}const t='<option value="">Tüm Öğrenciler</option>'+l.students.map(s=>`<option value="${s.id}"${ce.studentId===s.id?" selected":""}>${v(s.name)}</option>`).join(""),n='<option value="">Tüm Tipler</option>'+Object.keys(Jn).map(s=>`<option value="${s}"${ce.type===s?" selected":""}>${s}</option>`).join("");let a=l.appointments;ce.studentId&&(a=a.filter(s=>s.studentId===ce.studentId)),ce.type&&(a=a.filter(s=>s.type===ce.type));const i=a.map(s=>{const d=l.students.find(T=>T.id===s.studentId),c=Xn(s.type),p=`${s.date}T${s.time||"09:00"}`,m=new Date(p),u=new Date(m.getTime()+(s.duration||45)*6e4),g=T=>String(T).padStart(2,"0"),E=`${u.getFullYear()}-${g(u.getMonth()+1)}-${g(u.getDate())}T${g(u.getHours())}:${g(u.getMinutes())}:00`;return{id:s.id,title:`${(d==null?void 0:d.name)||"Öğrenci"} (${s.type||"Randevu"})`,start:p,end:E,backgroundColor:c,borderColor:c,textColor:"#ffffff",extendedProps:{...s}}}),o="font-size:12px;padding:6px 12px;border-radius:8px;border:1px solid var(--border);background:var(--surface);color:var(--text);cursor:pointer;font-family:inherit";let r=document.getElementById("fc-calendar");if(!r)e.innerHTML=`
      <div style="display:flex;flex-direction:column;gap:12px;height:calc(100vh - 104px);overflow:hidden;box-sizing:border-box">
        <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap;flex-shrink:0">
          <select style="${o}" onchange="agendaSetFilter('studentId',this.value)">${t}</select>
          <select style="${o}" onchange="agendaSetFilter('type',this.value)">${n}</select>
          <button onclick="exportAgendaICS()" style="font-size:12px;padding:6px 12px;border-radius:8px;border:1px solid var(--border);background:var(--surface);cursor:pointer;font-family:inherit;color:var(--text)">📥 ICS İndir</button>
          <div style="flex:1"></div>
          <button class="btn btn-accent btn-sm" onclick="openAgendaApptModal(null)">+ Randevu Ekle</button>
        </div>
        <div id="fc-calendar" style="flex:1;min-height:0;background:var(--surface);border:1px solid var(--border);border-radius:16px;padding:12px;box-shadow:var(--shadow)"></div>
      </div>
    `,r=document.getElementById("fc-calendar");else{const s=e.querySelectorAll("select");s[0]&&(s[0].innerHTML=t),s[1]&&(s[1].innerHTML=n)}typeof FullCalendar<"u"?window._fcInstance?(window._fcInstance.removeAllEvents(),window._fcInstance.addEventSource(i),window._fcInstance.updateSize()):(window._fcInstance=new FullCalendar.Calendar(r,{initialView:window.innerWidth<700?"listWeek":"timeGridWeek",headerToolbar:{left:"prev,next today",center:"title",right:"dayGridMonth,timeGridWeek,timeGridDay,listWeek"},buttonText:{today:"Bugün",month:"Ay",week:"Hafta",day:"Gün",list:"Ajanda"},locale:"tr",firstDay:1,slotMinTime:"08:00",slotMaxTime:"23:00",allDaySlot:!1,editable:!0,droppable:!0,selectable:!0,eventClick:function(s){Qn(s.event.id,s.jsEvent)},select:function(s){const d=s.startStr.slice(0,10),c=s.startStr.slice(11,16)||"14:00";ta(null,d),setTimeout(()=>{const p=document.getElementById("amTime");p&&(p.value=c)},50)},eventDrop:async function(s){const d=s.event.start,c=s.event.end||new Date(d.getTime()+45*6e4),p=d.getFullYear()+"-"+String(d.getMonth()+1).padStart(2,"0")+"-"+String(d.getDate()).padStart(2,"0"),m=String(d.getHours()).padStart(2,"0")+":"+String(d.getMinutes()).padStart(2,"0"),u=Math.round((c.getTime()-d.getTime())/6e4),g=s.event.id,{error:E}=await y.from("appointments").update({date:p,time:m,duration:u}).eq("id",g);if(E){b("Hata: "+E.message),s.revert();return}const T=l.appointments.find(f=>f.id===g);T&&(T.date=p,T.time=m,T.duration=u),b("Randevu taşıma başarılı ✓")},eventResize:async function(s){const d=s.event.start,c=s.event.end;if(!c)return;const p=Math.round((c.getTime()-d.getTime())/6e4),m=s.event.id,{error:u}=await y.from("appointments").update({duration:p}).eq("id",m);if(u){b("Hata: "+u.message),s.revert();return}const g=l.appointments.find(E=>E.id===m);g&&(g.duration=p),b("Randevu süresi güncellendi ✓")},events:i}),window._fcInstance.render()):console.warn("FullCalendar library not loaded yet")}function ta(e,t){const n=e?l.appointments.find(a=>a.id===e):null;document.getElementById("amTitle").textContent=n?"Randevuyu Düzenle":"Yeni Randevu",document.getElementById("amId").value=e||"",document.getElementById("amStudent").innerHTML=l.students.map(a=>`<option value="${a.id}" ${(n==null?void 0:n.studentId)===a.id?"selected":""}>${v(a.name)}</option>`).join(""),document.getElementById("amDate").value=n?n.date:t||O(new Date),document.getElementById("amTime").value=n?n.time:"14:00",document.getElementById("amDuration").value=n?n.duration:"45",document.getElementById("amType").value=n?n.type:"Haftalık Değerlendirme",document.getElementById("amNote").value=n&&n.note||"",document.getElementById("amMeetLink").value=n&&(n.meetLink||n.meet_link)||"",G("apptModal")}async function so(e){await ie("Randevu silinsin mi?")&&(await y.from("appointments").delete().eq("id",e),l.appointments=l.appointments.filter(t=>t.id!==e),we(),b("Randevu silindi"))}function na(){ot()}function ro(e){l.activeStuId=e,l.weekOffset=0,ke(),Vt(e)}function lo(e){const t=e?l.students.find(a=>a.id===e):null;document.getElementById("smTitle").textContent=t?"Öğrenciyi Düzenle":"Yeni Öğrenci",document.getElementById("smId").value=e||"",document.getElementById("smName").value=(t==null?void 0:t.name)||"",document.getElementById("smTarget").value=(t==null?void 0:t.target)||"",document.getElementById("smUsername").value=(t==null?void 0:t.username)||"",document.getElementById("smPass").value=(t==null?void 0:t.pass)||STU_DEFAULT_PASS,document.getElementById("smWeekStart").value=(t==null?void 0:t.weekStart)??0,document.getElementById("smYksArea").value=(t==null?void 0:t.yksArea)||"SAY",document.getElementById("smProg").value=(t==null?void 0:t.progress)||0,document.getElementById("smProgVal").textContent=((t==null?void 0:t.progress)||0)+"%",document.querySelectorAll(".color-opt").forEach(a=>a.classList.toggle("sel",a.dataset.c===((t==null?void 0:t.color)||"#e8622a")));const n=document.getElementById("smRoleField");n&&(n.style.display="none"),document.querySelector("#studentModal .btn-accent").setAttribute("onclick","saveStudent()"),G("studentModal")}document.getElementById("smProg").addEventListener("input",function(){document.getElementById("smProgVal").textContent=this.value+"%"});document.getElementById("smColorPick").addEventListener("click",function(e){const t=e.target.closest(".color-opt");t&&(document.querySelectorAll(".color-opt").forEach(n=>n.classList.remove("sel")),t.classList.add("sel"))});async function co(){var d;const e=document.getElementById("smName").value.trim();if(!e)return b("İsim girin!");const t=((d=document.querySelector(".color-opt.sel"))==null?void 0:d.dataset.c)||"#e8622a",n=document.getElementById("smId").value,a=je(document.getElementById("smUsername").value.trim())||je(e.split(" ")[0])+Math.floor(Math.random()*100),i=document.getElementById("smPass").value||STU_DEFAULT_PASS,o=await Ne(i),r=document.getElementById("smYksArea").value,s={full_name:e,target:document.getElementById("smTarget").value.trim()||"Hedef belirtilmemiş",color:t,progress:Number(document.getElementById("smProg").value),password_hash:o,week_start:Number(document.getElementById("smWeekStart").value),coach_id:x.coachId,yks_area:r};if(n){const{error:c}=await y.rpc("update_student_profile",{p_student_id:n,p_full_name:e,p_target:s.target,p_color:t,p_progress:s.progress,p_week_start:s.week_start,p_username:a,p_plain_password:i,p_password_hash:o,p_yks_area:s.yks_area});if(c)return b("Hata: "+c.message);const p=l.students.find(m=>m.id===n);p&&Object.assign(p,{name:s.full_name,target:s.target,color:t,progress:s.progress,pass:s.password_hash,weekStart:s.week_start,username:a,yksArea:s.yks_area}),b("Güncellendi ✓"),ke(),q("studentModal"),ot()}else{const c=a+"@rostrumakademi.com",{data:{session:p}}=await y.auth.getSession(),m=await fetch("/api/create-student",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${(p==null?void 0:p.access_token)||""}`},body:JSON.stringify({email:c,password:i,full_name:s.full_name,username:a,color:s.color,target:s.target,progress:s.progress,week_start:s.week_start,coach_id:s.coach_id,exam_profile:"YKS",yks_area:s.yks_area})}),u=await m.json();if(!m.ok)return b("Hata: "+u.error);const g=u.userId;l.students.push({id:g,name:s.full_name,target:s.target,color:s.color,progress:s.progress||0,pass:o,weekStart:s.week_start||0,username:a,yksArea:s.yks_area}),l.activeStuId||(l.activeStuId=g),ke(),q("studentModal"),aa(s.full_name,a,i)}}function aa(e,t,n){let a=document.getElementById("inviteModal");a||(a=document.createElement("div"),a.id="inviteModal",a.className="modal-bg",document.body.appendChild(a),a.addEventListener("click",s=>{s.target===a&&a.classList.remove("open")}));const o=`${window.location.origin+window.location.pathname.replace("app.html","")}app.html`,r=encodeURIComponent(`Merhaba ${e}! 🎓

Seni Rostrum Akademi platformuna ekledim.

📱 Giriş adresi: ${o}
👤 Kullanıcı adı: ${t}
🔑 Şifre: ${n}

Giriş yaptıktan sonra programını görebileceksin!`);a.innerHTML=`<div class="modal" style="max-width:480px">
    <button class="modal-close" onclick="cm('inviteModal');renderStudentsSearch()">×</button>
    <div style="text-align:center;margin-bottom:20px">
      <div style="font-size:40px;margin-bottom:8px">🎉</div>
      <h2>${v(e)} eklendi!</h2>
      <p style="font-size:13px;color:var(--text-mid);margin-top:6px">Öğrencine aşağıdaki bilgileri paylaş</p>
    </div>

    <div style="background:var(--surface2);border:1px solid var(--border);border-radius:12px;padding:16px;margin-bottom:14px">
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
        <div>
          <div style="font-size:10px;font-weight:700;color:var(--text-dim);text-transform:uppercase;letter-spacing:.5px;margin-bottom:4px">Kullanıcı Adı</div>
          <div style="font-family:'Inter',sans-serif;font-size:16px;font-weight:800;color:var(--accent)">${v(t)}</div>
        </div>
        <div>
          <div style="font-size:10px;font-weight:700;color:var(--text-dim);text-transform:uppercase;letter-spacing:.5px;margin-bottom:4px">Şifre</div>
          <div style="font-family:'Inter',sans-serif;font-size:16px;font-weight:800;color:var(--accent)">${v(n)}</div>
        </div>
      </div>
      <div style="margin-top:10px;padding-top:10px;border-top:1px solid var(--border)">
        <div style="font-size:10px;font-weight:700;color:var(--text-dim);text-transform:uppercase;letter-spacing:.5px;margin-bottom:4px">Giriş Adresi</div>
        <div style="font-size:12px;color:var(--blue);word-break:break-all">${o}</div>
      </div>
    </div>

    <div style="display:flex;gap:8px">
      <button class="btn btn-ghost" style="flex:1;justify-content:center" onclick="copyInvite('${v(t)}','${v(n)}','${o}')">📋 Kopyala</button>
      <a href="https://wa.me/?text=${r}" target="_blank" class="btn btn-accent" style="flex:1;justify-content:center;text-decoration:none">💬 WhatsApp ile Gönder</a>
    </div>

    <div style="border-top:1px solid var(--border);padding-top:14px;margin-top:12px">
      <div style="font-size:11px;font-weight:600;color:var(--text-dim);margin-bottom:8px">📧 E-posta ile gönder (opsiyonel)</div>
      <div style="display:flex;gap:8px">
        <input type="email" id="inviteEmailInput" placeholder="veli@ornek.com" style="flex:1;padding:9px 12px;background:var(--surface2);border:1px solid var(--border);border-radius:8px;color:var(--text);font-size:13px;outline:none">
        <button onclick="sendInviteEmail()" style="padding:9px 16px;background:var(--accent);color:#fff;border:none;border-radius:8px;font-size:12px;font-weight:700;cursor:pointer;white-space:nowrap">Gönder</button>
      </div>
      <div id="inviteEmailMsg" style="display:none;font-size:12px;margin-top:6px;padding:6px 10px;border-radius:6px"></div>
    </div>

    <button class="btn btn-ghost" style="width:100%;justify-content:center;margin-top:12px" onclick="cm('inviteModal');renderStudentsSearch()">Kapat</button>
  </div>`,window._pendingInvite={name:e,username:t,pass:n,loginUrl:o},G("inviteModal")}async function po(){var r,s;const e=(r=document.getElementById("inviteEmailInput"))==null?void 0:r.value.trim(),t=document.getElementById("inviteEmailMsg");if(!e||!e.includes("@")){t&&(t.style.display="block",t.style.background="var(--red-dim)",t.style.color="var(--red)",t.textContent="Geçerli bir e-posta girin.");return}if(!window._pendingInvite)return;const{name:n,username:a,pass:i,loginUrl:o}=window._pendingInvite;t&&(t.style.display="block",t.style.background="var(--surface2)",t.style.color="var(--text-mid)",t.textContent="Gönderiliyor...");try{const d=await fetch("/api/mailer",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({type:"student_welcome",to:e,student_name:n,username:a,password:i,login_url:o,coach_name:((s=l.workspace)==null?void 0:s.brand_name)||""})}),c=await d.json();if(d.ok)t&&(t.style.background="var(--green-dim)",t.style.color="var(--green)",t.textContent="✓ Mail gönderildi!");else throw new Error(c.error||"Sunucu hatası")}catch(d){t&&(t.style.background="var(--red-dim)",t.style.color="var(--red)",t.textContent="✗ "+d.message)}}window.sendInviteEmail=po;function mo(e,t,n){const a=`Giriş adresi: ${n}
Kullanıcı adı: ${e}
Şifre: ${t}`;navigator.clipboard.writeText(a).then(()=>b("Kopyalandı ✓")).catch(()=>{const i=document.createElement("textarea");i.value=a,document.body.appendChild(i),i.select(),document.execCommand("copy"),i.remove(),b("Kopyalandı ✓")})}async function uo(e){var a;if(!await ie("Bu öğrenciyi silmek istediğinizden emin misiniz?"))return;const t=document.getElementById(`sturow_${e}`);t&&(t.style.transition="all 0.3s ease",t.style.opacity="0",t.style.transform="translateX(30px)",t.innerHTML='<div style="color:var(--red); font-weight:700; font-size:13px; display:flex; align-items:center; gap:6px">🗑️ Siliniyor...</div>'),await new Promise(i=>setTimeout(i,300));const{error:n}=await y.from("users").delete().eq("id",e);if(n)return b("Hata: "+n.message);l.students=l.students.filter(i=>i.id!==e),l.activeStuId===e&&(l.activeStuId=((a=l.students[0])==null?void 0:a.id)||null),ke(),na(),b("Silindi")}function go(){const e="217851738834-1cp3fk66hfhm0mr2aklsk3jphqmub2s3.apps.googleusercontent.com",t=encodeURIComponent("https://www.rostrumakademi.com/app.html"),n=encodeURIComponent("https://www.googleapis.com/auth/calendar.events"),a=`https://accounts.google.com/o/oauth2/v2/auth?client_id=${e}&redirect_uri=${t}&response_type=code&scope=${n}&access_type=offline&prompt=consent&state=google_calendar`;window.location.href=a}window.connectGoogleCalendar=go;function Ge(){var a,i;const e=document.getElementById("view-appointments"),n=((a=l.workspace)==null?void 0:a.google_calendar_connected)?'<span style="font-size:12px;color:var(--green);font-weight:600;display:flex;align-items:center;gap:4px">✓ Google Takvim</span>':'<button class="btn btn-ghost btn-sm" onclick="connectGoogleCalendar()">🔗 Google Takvim Bağla</button>';e.innerHTML=`
    <button class="back-link" onclick="switchTab('student-detail')">← ${((i=l.students.find(o=>o.id===l.activeStuId))==null?void 0:i.name)||"Öğrenci"}</button>
    <div class="sh"><h2>Randevular</h2><div style="display:flex;gap:8px;align-items:flex-start">${n}<button class="btn btn-ghost btn-sm" onclick="downloadICS()">📅 Takvime Aktar</button><button class="btn btn-accent" onclick="openApptModal()">+ Yeni Randevu</button></div></div>
    <div class="appts-layout">
      <div class="card cp">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:14px">
          <span style="font-family:'Inter',sans-serif;font-size:17px;font-weight:700" id="calMonthLbl"></span>
          <div style="display:flex;gap:6px">
            <button class="btn btn-ghost btn-sm" onclick="chCalMonth(-1)">‹</button>
            <button class="btn btn-ghost btn-sm" onclick="chCalMonth(1)">›</button>
          </div>
        </div>
        <div class="cal-dow-row">${["Pzt","Sal","Çar","Per","Cum","Cmt","Paz"].map(o=>`<div class="cal-dow">${o}</div>`).join("")}</div>
        <div class="cal-days-grid" id="calDaysGrid"></div>
      </div>
      <div>
        <div class="card cp">
          <div style="font-family:'Inter',sans-serif;font-size:14px;font-weight:700;margin-bottom:10px;padding-bottom:8px;border-bottom:1px solid var(--border)" id="apptListTitle">Yaklaşan Görüşmeler</div>
          <div id="apptList"></div>
          <button class="btn btn-ghost btn-sm" style="width:100%;justify-content:center;margin-top:8px" onclick="S.calSelDay=null;renderCalDays();renderApptList()">Tümünü Göster</button>
        </div>
      </div>
    </div>`,Tt(),Xt()}function Tt(){const e=l.calYear,t=l.calMonth;document.getElementById("calMonthLbl").textContent=`${MONTHS_TR[t]} ${e}`;const n=new Date(e,t,1).getDay(),a=new Date(e,t+1,0).getDate(),i=ue(),o=new Set(l.appointments.filter(d=>{const c=new Date(d.date);return c.getFullYear()===e&&c.getMonth()===t}).map(d=>new Date(d.date).getDate())),r=n===0?6:n-1;let s="";for(let d=0;d<r;d++)s+='<div class="cal-day empty"></div>';for(let d=1;d<=a;d++){const c=`${e}-${String(t+1).padStart(2,"0")}-${String(d).padStart(2,"0")}`;s+=`<div class="cal-day ${c===i?"today":""} ${c===l.calSelDay&&c!==i?"selected":""} ${o.has(d)?"has-appt":""}" onclick="selCalDay('${c}')">${d}</div>`}document.getElementById("calDaysGrid").innerHTML=s}function vo(e){l.calSelDay=l.calSelDay===e?null:e,Tt(),Xt()}function fo(e){l.calMonth+=e,l.calMonth>11&&(l.calMonth=0,l.calYear++),l.calMonth<0&&(l.calMonth=11,l.calYear--),at(),Tt()}function Xt(){const e=ue();let t=l.appointments,n="Yaklaşan Görüşmeler";if(l.calSelDay?(t=t.filter(a=>a.date===l.calSelDay),n=new Date(l.calSelDay+"T12:00").toLocaleDateString("tr-TR",{day:"numeric",month:"long"})):t=t.filter(a=>a.date>=e).sort((a,i)=>a.date.localeCompare(i.date)).slice(0,10),document.getElementById("apptListTitle").textContent=n,!t.length){document.getElementById("apptList").innerHTML='<div class="empty"><p>Randevu yok</p></div>';return}document.getElementById("apptList").innerHTML=t.map(a=>{const i=l.students.find(s=>s.id===a.studentId),r=a.date===e?"BUGÜN":new Date(a.date+"T12:00").toLocaleDateString("tr-TR",{day:"numeric",month:"short"});return`<div data-appt-id="${a.id}" class="appt-item" style="border-left-color:${(i==null?void 0:i.color)||"#555"}">
      <div class="appt-when">${r} • ${a.time} (${a.duration} dk)</div>
      <div class="appt-name">${v((i==null?void 0:i.name)||"?")}</div>
      <div class="appt-type">${v(a.type)}</div>
      ${a.note?`<div class="appt-note">${v(a.note)}</div>`:""}
      ${a.meet_link?`<div style="margin-top:6px;display:flex;gap:6px;align-items:center">
        <a href="${v(a.meet_link)}" target="_blank" style="font-size:11px;background:var(--blue-dim);color:var(--blue);padding:3px 10px;border-radius:99px;text-decoration:none;font-weight:700">${a.meet_link.includes("zoom")?"🎥 Zoom":"📹 Meet"}</a>
        <button class="btn btn-ghost btn-xs" onclick="copyToClipboard('${v(a.meet_link)}')">Kopyala</button>
      </div>`:""}
      <div class="appt-actions">
        <button class="btn btn-ghost btn-xs" onclick="openApptModal('${a.id}')">✏️</button>
        <button class="btn btn-danger btn-xs" onclick="deleteAppt('${a.id}')">🗑</button>
      </div>
    </div>`}).join("")}function yo(e){const t=e?l.appointments.find(n=>n.id===e):null;document.getElementById("amTitle").textContent=t?"Randevuyu Düzenle":"Yeni Randevu",document.getElementById("amId").value=e||"",document.getElementById("amStudent").innerHTML=l.students.map(n=>`<option value="${n.id}" ${(t==null?void 0:t.studentId)===n.id?"selected":""}>${v(n.name)}</option>`).join(""),document.getElementById("amDate").value=t?t.date:O(new Date),document.getElementById("amTime").value=t?t.time:"14:00",document.getElementById("amDuration").value=t?t.duration:"45",document.getElementById("amType").value=t?t.type:"Haftalık Değerlendirme",document.getElementById("amNote").value=(t==null?void 0:t.note)||"",document.getElementById("amMeetLink").value=(t==null?void 0:t.meet_link)||"",G("apptModal")}let At=!1;async function xo(){if(!At){At=!0;try{await bo()}finally{At=!1}}}async function bo(){var r,s,d;const e=document.getElementById("amStudent").value,t=document.getElementById("amDate").value,n=document.getElementById("amTime").value;if(!e||!t||!n)return b("Tüm alanları doldurun!");const a=document.getElementById("amMeetLink").value.trim();if(a&&!a.startsWith("https://"))return b("Toplantı linki https:// ile başlamalı");if(a&&!/zoom\.us|meet\.google|teams\.microsoft|webex\.com/.test(a))return b("Geçersiz link — Zoom, Meet, Teams veya Webex linki girin");const i=document.getElementById("amId").value,o={student_id:e,coach_id:x.coachId,date:t,time:n,duration:parseInt(document.getElementById("amDuration").value),type:document.getElementById("amType").value,note:document.getElementById("amNote").value.trim(),meet_link:a};if(i){await y.from("appointments").update(o).eq("id",i);const c=l.appointments.find(p=>p.id===i);if(c&&Object.assign(c,{studentId:e,date:t,time:n,duration:o.duration,type:o.type,note:o.note}),b("Güncellendi ✓"),(r=l.workspace)!=null&&r.google_calendar_connected&&(c!=null&&c.google_event_id)){const p=l.students.find(m=>m.id===e);Nt("update",{date:t,hour:n,notes:o.note,student_name:p==null?void 0:p.name,google_event_id:c.google_event_id}).catch(()=>{})}}else{const{data:c,error:p}=await y.from("appointments").insert(o).select().single();if(p)return b("Hata: "+p.message);const m={id:c.id,studentId:c.student_id,date:c.date,time:c.time,duration:c.duration,type:c.type,note:c.note,google_event_id:null};if(l.appointments.push(m),b("Randevu eklendi ✓"),(s=l.workspace)!=null&&s.google_calendar_connected){const u=l.students.find(g=>g.id===e);Nt("create",{appointment_id:c.id,date:t,hour:n,notes:o.note,student_name:u==null?void 0:u.name}).then(g=>{g&&(m.google_event_id=g)}).catch(()=>{})}}q("apptModal"),currentTab==="todolist"?we():(d=document.getElementById("view-appointments"))!=null&&d.classList.contains("active")&&Ge()}async function ho(){var t,n;const e=document.getElementById("gcalSyncBtn");e&&(e.disabled=!0,e.textContent="⏳ Senkronize ediliyor...");try{const{data:{session:a}}=await y.auth.getSession();if(!(a!=null&&a.access_token))return b("Oturum hatası");const o=await(await fetch("/api/mailer",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${a.access_token}`},body:JSON.stringify({type:"google_calendar_sync"})})).json();if(!o.success)return b("Senkronizasyon hatası: "+(o.error||"Bilinmeyen"));(t=o.deletedIds)!=null&&t.length&&(l.appointments=l.appointments.filter(s=>!o.deletedIds.includes(s.id))),(n=o.updatedItems)==null||n.forEach(s=>{const d=l.appointments.find(c=>c.id===s.id);d&&(d.date=s.date,d.time=s.time)}),localStorage.setItem(`gcal_sync_${x.coachId}`,JSON.stringify({time:new Date().toISOString(),mode:"manual"}));const r=[];o.deleted>0&&r.push(`${o.deleted} randevu silindi`),o.updated>0&&r.push(`${o.updated} randevu güncellendi`),b(r.length?"Senkronize edildi: "+r.join(", ")+" ✓":"Senkronize edildi, değişiklik yok ✓"),Ge()}catch(a){b("Senkronizasyon hatası: "+a.message),e&&(e.disabled=!1,e.textContent="🔄 Senkronize Et")}}window.syncFromGoogle=ho;async function Nt(e,t){const{data:{session:n}}=await y.auth.getSession();return n!=null&&n.access_token&&(await(await fetch("/api/mailer",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${n.access_token}`},body:JSON.stringify({type:"google_calendar_event",action:e,appointment:t})})).json()).google_event_id||null}async function ko(e){var a;if(!await ie("Bu randevuyu silmek istediğinizden emin misiniz?"))return;const t=l.appointments.find(i=>i.id===e),n=document.querySelector(`[data-appt-id="${e}"]`);if(n){n.style.transition="all 0.3s ease",n.style.opacity="0",n.style.transform="translateX(30px)";const i=n.querySelector(".appt-name");i&&(i.innerHTML='<span style="color:var(--red); font-weight:700">🗑️ Siliniyor...</span>')}await new Promise(i=>setTimeout(i,300)),(a=l.workspace)!=null&&a.google_calendar_connected&&(t!=null&&t.google_event_id)&&Nt("delete",{google_event_id:t.google_event_id}).catch(()=>{}),await y.from("appointments").delete().eq("id",e),l.appointments=l.appointments.filter(i=>i.id!==e),Ge(),b("Silindi")}function wo(){const e=ue(),t=l.appointments.filter(s=>s.date>=e).sort((s,d)=>s.date.localeCompare(d.date));if(!t.length)return b("Yaklaşan randevu bulunamadı.");const n=s=>String(s).padStart(2,"0"),a=["BEGIN:VCALENDAR","VERSION:2.0","PRODID:-//Rostrum Akademi//TR","CALSCALE:GREGORIAN","METHOD:PUBLISH","BEGIN:VTIMEZONE","TZID:Europe/Istanbul","BEGIN:STANDARD","TZOFFSETFROM:+0300","TZOFFSETTO:+0300","TZNAME:TRT","DTSTART:19700101T000000","END:STANDARD","END:VTIMEZONE"];t.forEach(s=>{const d=l.students.find($=>$.id===s.studentId),[c,p,m]=s.date.split("-"),[u,g]=(s.time||"09:00").split(":"),E=`${c}${p}${m}T${u}${g}00`,T=new Date(Number(c),Number(p)-1,Number(m),Number(u),Number(g)+(s.duration||45)),f=`${T.getFullYear()}${n(T.getMonth()+1)}${n(T.getDate())}T${n(T.getHours())}${n(T.getMinutes())}00`;a.push("BEGIN:VEVENT"),a.push(`UID:ra-appt-${s.id}@rostrumakademi.com`),a.push(`DTSTART;TZID=Europe/Istanbul:${E}`),a.push(`DTEND;TZID=Europe/Istanbul:${f}`),a.push(`SUMMARY:${s.type}${d?" — "+d.name:""}`),s.note&&a.push(`DESCRIPTION:${s.note.replace(/[\r\n]+/g,"\\n")}`),s.meet_link&&a.push(`URL:${s.meet_link}`),a.push("END:VEVENT")}),a.push("END:VCALENDAR");const i=new Blob([a.join(`\r
`)],{type:"text/calendar;charset=utf-8"}),o=URL.createObjectURL(i),r=document.createElement("a");r.href=o,r.download="rostrum-randevular.ics",r.click(),setTimeout(()=>URL.revokeObjectURL(o),1e3),b(`${t.length} randevu takvim dosyasına aktarıldı ✓`)}function ft(e){return 100+(Number(e.Türkçe||0)+Number(e.Matematik||0)+Number(e.Fen||0)+Number(e.Sosyal||0))*(400/120)}function ia(e,t){const n=a=>Number(t[a]||0);return e==="AYT-SAY"?100+(n("Matematik")+n("Fizik")+n("Kimya")+n("Biyoloji"))*5:e==="AYT-EA"?100+(n("Matematik")+n("Edebiyat")+n("Tarih")+n("Coğrafya"))*5:e==="AYT-SOZ"?100+(n("Edebiyat")+n("Tarih1")+n("Tarih2")+n("Coğrafya1")+n("Coğrafya2")+n("Felsefe")+n("Din"))*5:null}const oa={"AYT-SAY":"SAY","AYT-EA":"EA","AYT-SOZ":"SÖZ"},yt={TYT:"#3B82F6",SAY:"#8B5CF6",EA:"#10B981",SÖZ:"#F59E0B"};function sa(e,t){const{type:n,nets:a}=e;if(n==="TYT"){const d=ft(a),c=yt.TYT;return`<div style="margin-top:10px;display:flex;align-items:center;gap:8px;flex-wrap:wrap">
      <span style="background:${c}18;border:1px solid ${c}40;border-radius:8px;padding:5px 12px;display:inline-flex;gap:7px;align-items:baseline">
        <span style="font-size:10px;font-weight:700;color:${c};text-transform:uppercase">TYT Puan</span>
        <span style="font-size:18px;font-weight:900;color:${c}">${d.toFixed(2)}</span>
      </span>
    </div>`}const i=oa[n];if(!i)return"";const o=yt[i]||"#64748B",r=ia(n,a),s=t.filter(d=>d.type==="TYT"&&d.date<=e.date).sort((d,c)=>c.date.localeCompare(d.date))[0];if(s){const d=ft(s.nets),c=d*.4+r*.6;return`<div style="margin-top:10px;display:flex;align-items:center;gap:10px;flex-wrap:wrap">
      <span style="background:${o}18;border:1px solid ${o}40;border-radius:8px;padding:5px 12px;display:inline-flex;gap:7px;align-items:baseline">
        <span style="font-size:10px;font-weight:700;color:${o};text-transform:uppercase">${i} Puan</span>
        <span style="font-size:18px;font-weight:900;color:${o}">${c.toFixed(2)}</span>
      </span>
      <span style="font-size:11px;color:var(--text-dim)">TYT×0.4 <b>${(d*.4).toFixed(1)}</b> · AYT×0.6 <b>${(r*.6).toFixed(1)}</b></span>
    </div>`}return`<div style="margin-top:10px;display:flex;align-items:center;gap:8px;flex-wrap:wrap">
    <span style="background:${o}18;border:1px solid ${o}40;border-radius:8px;padding:5px 12px;display:inline-flex;gap:7px;align-items:baseline">
      <span style="font-size:10px;font-weight:700;color:${o};text-transform:uppercase">AYT ${i} Ham</span>
      <span style="font-size:18px;font-weight:900;color:${o}">${r.toFixed(2)}</span>
    </span>
    <span style="font-size:10px;color:var(--text-dim);font-style:italic">TYT etkisi dahil değil</span>
  </div>`}function $o(){var d,c;const e=document.getElementById("emPuanDisplay");if(!e)return;const t=(d=document.getElementById("emExamType"))==null?void 0:d.value;if(!t)return;const n={};if((EXAM_DEFS[t]||[]).forEach(p=>{const m=ae[p]||{};n[p]=Math.max(0,(m.dogru||0)-(m.yanlis||0)/4)}),t==="TYT"){const p=ft(n),m=yt.TYT;e.innerHTML=`<div style="background:${m}12;border:1px solid ${m}35;border-radius:10px;padding:10px 14px;display:flex;align-items:center;gap:10px">
      <span style="font-size:11px;font-weight:700;color:${m};text-transform:uppercase;letter-spacing:.4px">🎯 TYT Puan</span>
      <span style="font-size:24px;font-weight:900;color:${m};letter-spacing:-.5px">${p.toFixed(2)}</span>
    </div>`;return}const a=oa[t],i=yt[a]||"#64748B",o=ia(t,n);if(o===null){e.innerHTML="";return}const r=(c=document.getElementById("emStudent"))==null?void 0:c.value,s=r?[...l.exams].filter(p=>p.studentId===r&&p.type==="TYT").sort((p,m)=>m.date.localeCompare(p.date))[0]:null;if(s){const p=ft(s.nets),m=p*.4+o*.6;e.innerHTML=`<div style="background:${i}12;border:1px solid ${i}35;border-radius:10px;padding:10px 14px">
      <div style="display:flex;align-items:center;gap:10px;flex-wrap:wrap">
        <span style="font-size:11px;font-weight:700;color:${i};text-transform:uppercase;letter-spacing:.4px">🎯 ${a} Puan</span>
        <span style="font-size:24px;font-weight:900;color:${i};letter-spacing:-.5px">${m.toFixed(2)}</span>
        <span style="font-size:11px;color:var(--text-dim)">TYT×0.4=${(p*.4).toFixed(1)} · AYT×0.6=${(o*.6).toFixed(1)}</span>
      </div>
      <div style="font-size:10px;color:var(--text-dim);margin-top:3px">TYT: ${s.date} tarihli deneme baz alındı</div>
    </div>`}else e.innerHTML=`<div style="background:${i}12;border:1px solid ${i}35;border-radius:10px;padding:10px 14px;display:flex;align-items:center;gap:10px;flex-wrap:wrap">
      <span style="font-size:11px;font-weight:700;color:${i};text-transform:uppercase;letter-spacing:.4px">🎯 AYT ${a} Ham</span>
      <span style="font-size:24px;font-weight:900;color:${i};letter-spacing:-.5px">${o.toFixed(2)}</span>
      <span style="font-size:10px;color:var(--text-dim);font-style:italic">TYT puanı bulunamadı</span>
    </div>`}function _o(e,t){var Q;if(!e.length)return"";const n=[...e].sort((R,N)=>R.date.localeCompare(N.date)).slice(-8),a=n[n.length-1],i=n.length>=2?n[n.length-2]:null,o=EXAM_DEFS[a.type]||[],r=(t==null?void 0:t.color)||"#e8622a",s=o.reduce((R,N)=>{var K;return R+Number(((K=a.nets)==null?void 0:K[N])||0)},0),d=i?o.reduce((R,N)=>{var K;return R+Number(((K=i.nets)==null?void 0:K[N])||0)},0):null,c=d!==null?s-d:null,p=o.length?o.reduce((R,N)=>{var K,re;return Number(((K=a.nets)==null?void 0:K[N])||0)<Number(((re=a.nets)==null?void 0:re[R])||0)?N:R},o[0]):null,m=c===null?"var(--text-dim)":c>=0?"#3ecf8e":"#ef4444",u=c===null?"—":(c>=0?"+":"")+c.toFixed(1),g=`<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin-bottom:16px">
    <div style="background:var(--surface2);border:1px solid var(--border);border-radius:10px;padding:12px;text-align:center">
      <div style="font-size:9px;font-weight:700;color:var(--text-dim);text-transform:uppercase;letter-spacing:.6px;margin-bottom:5px">Son Deneme</div>
      <div style="font-family:'Inter',sans-serif;font-size:26px;font-weight:900;color:${r};line-height:1">${s.toFixed(1)}</div>
      <div style="font-size:9px;color:var(--text-dim);margin-top:3px">toplam net</div>
    </div>
    <div style="background:var(--surface2);border:1px solid var(--border);border-radius:10px;padding:12px;text-align:center">
      <div style="font-size:9px;font-weight:700;color:var(--text-dim);text-transform:uppercase;letter-spacing:.6px;margin-bottom:5px">Gelişim</div>
      <div style="font-family:'Inter',sans-serif;font-size:26px;font-weight:900;line-height:1;color:${m}">${u}</div>
      <div style="font-size:9px;color:var(--text-dim);margin-top:3px">${d!==null?"önceki denemeden":"tek deneme"}</div>
    </div>
    <div style="background:var(--surface2);border:1px solid var(--border);border-radius:10px;padding:12px;text-align:center">
      <div style="font-size:9px;font-weight:700;color:var(--text-dim);text-transform:uppercase;letter-spacing:.6px;margin-bottom:5px">Eksik Ders</div>
      ${p?`<div style="font-size:15px;font-weight:900;line-height:1.2;color:#ef4444">${v(p)}</div>
      <div style="font-size:11px;font-weight:700;color:var(--text-mid);margin-top:3px">${Number(((Q=a.nets)==null?void 0:Q[p])||0).toFixed(1)} net</div>`:'<div style="font-size:12px;color:var(--text-dim)">—</div>'}
    </div>
  </div>`,E=o.map(R=>{var vn;const N=Number(((vn=a.nets)==null?void 0:vn[R])||0),K=(EXAM_SORU[a.type]||{})[R]||40,re=Math.min(100,Math.max(0,N/K*100)),ye=N>=K*.6?"#3ecf8e":N>=K*.35?"#f0a500":"#ef4444";return`<div style="margin-bottom:11px">
      <div style="display:flex;justify-content:space-between;align-items:baseline;margin-bottom:4px">
        <span style="font-size:12px;font-weight:600;color:var(--text)">${v(R)}</span>
        <span style="font-size:14px;font-weight:800;color:${ye};font-family:'Inter',sans-serif">${N.toFixed(1)}</span>
      </div>
      <div style="background:rgba(255,255,255,0.07);border-radius:4px;height:7px;overflow:hidden">
        <div style="width:${re.toFixed(1)}%;height:100%;background:${ye};border-radius:4px"></div>
      </div>
    </div>`}).join("");if(n.length<2)return`<div class="card cp" style="margin-bottom:16px">
    <div style="font-size:11px;font-weight:700;margin-bottom:12px;color:var(--text-mid);text-transform:uppercase;letter-spacing:.5px">📊 Deneme Özeti</div>
    ${g}
    <div style="font-size:10px;font-weight:700;color:var(--text-dim);text-transform:uppercase;letter-spacing:.5px;margin-bottom:10px">Son Deneme · Derse Göre</div>
    ${E}
  </div>`;const T=n.map(R=>(EXAM_DEFS[R.type]||[]).reduce((K,re)=>{var ye;return K+Number(((ye=R.nets)==null?void 0:ye[re])||0)},0)),f=Math.max(...T,10),$=600,w=160,B=40,h=16,S=28,I=30,z=$-B-h,_=w-S-I,D=n.length,C=R=>B+(D<=1?z/2:R/(D-1)*z),L=R=>S+_-R/f*_,k=f/4,A=k<=10?10:k<=20?20:k<=25?25:50,j=[];for(let R=0;R<=f+A;R+=A)R<=f*1.12&&j.push(R);const P=j.map(R=>{const N=L(R).toFixed(1);return`<line x1="${B}" y1="${N}" x2="${$-h}" y2="${N}" stroke="rgba(255,255,255,0.05)" stroke-width="1"/><text x="${B-5}" y="${(L(R)+3.5).toFixed(1)}" text-anchor="end" font-size="9" fill="rgba(200,215,230,0.28)" font-family="system-ui,sans-serif">${R}</text>`}).join(""),Y=n.map((R,N)=>`${C(N).toFixed(1)},${L(T[N]).toFixed(1)}`).join(" "),H=`M ${C(0).toFixed(1)},${L(T[0]).toFixed(1)} `+n.slice(1).map((R,N)=>`L ${C(N+1).toFixed(1)},${L(T[N+1]).toFixed(1)}`).join(" ")+` L ${C(D-1).toFixed(1)},${(S+_).toFixed(1)} L ${C(0).toFixed(1)},${(S+_).toFixed(1)} Z`,F="ag"+Math.random().toString(36).slice(2,7),V=n.map((R,N)=>{const K=C(N).toFixed(1),re=L(T[N]).toFixed(1);return`<circle cx="${K}" cy="${re}" r="5" fill="${r}" stroke="#0d0d0f" stroke-width="2.5"/><text x="${K}" y="${(L(T[N])-10).toFixed(1)}" text-anchor="middle" font-size="9.5" font-weight="700" fill="${r}" font-family="system-ui,sans-serif">${T[N].toFixed(0)}</text>`}).join(""),Z=n.map((R,N)=>{let K=R.name.replace(/Deneme\s+/,"#").replace(/^(TYT|AYT-SAY|AYT-EA|AYT-SOZ)\s+/,"");return K.length>7&&(K=K.slice(0,6)+"…"),`<text x="${C(N).toFixed(1)}" y="${(w-I+14).toFixed(1)}" text-anchor="middle" font-size="9" fill="rgba(200,215,230,0.35)" font-family="system-ui,sans-serif">${v(K)}</text>`}).join(""),te=`<svg viewBox="0 0 ${$} ${w}" style="width:100%;height:auto;display:block" xmlns="http://www.w3.org/2000/svg">
  <defs><linearGradient id="${F}" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="${r}" stop-opacity="0.2"/>
    <stop offset="100%" stop-color="${r}" stop-opacity="0"/>
  </linearGradient></defs>
  ${P}
  <path d="${H}" fill="url(#${F})"/>
  <polyline points="${Y}" fill="none" stroke="${r}" stroke-width="2.5" stroke-linejoin="round" stroke-linecap="round"/>
  ${V}${Z}
</svg>`;return`<div class="card cp" style="margin-bottom:16px">
    <div style="font-size:11px;font-weight:700;margin-bottom:12px;color:var(--text-mid);text-transform:uppercase;letter-spacing:.5px">📊 Deneme Takibi</div>
    ${g}
    <div style="font-size:10px;font-weight:700;color:var(--text-dim);text-transform:uppercase;letter-spacing:.5px;margin-bottom:8px">Toplam Net Trendi · Son ${D} Deneme</div>
    ${te}
    <div style="font-size:10px;font-weight:700;color:var(--text-dim);text-transform:uppercase;letter-spacing:.5px;margin:16px 0 10px">Son Deneme · Derse Göre</div>
    ${E}
  </div>`}function qe(){const e=document.getElementById("view-exams"),t=l.students.find(o=>o.id===l.activeStuId),n=[...l.exams].filter(o=>o.studentId===l.activeStuId).sort((o,r)=>r.date.localeCompare(o.date)),a=_o(n,t),i=n.length?n.map(o=>{const r=EXAM_DEFS[o.type]||[],s=r.reduce((d,c)=>{var p;return d+Number(((p=o.nets)==null?void 0:p[c])||0)},0).toFixed(1);return`<div style="background:var(--surface);border:1px solid var(--border);border-radius:12px;padding:16px;margin-bottom:10px;">
      <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:12px">
        <div>
          <div style="font-size:14px;font-weight:700">${v(o.name)}</div>
          <div style="font-size:11px;color:var(--text-dim);margin-top:2px">${new Date(o.date+"T12:00").toLocaleDateString("tr-TR",{day:"numeric",month:"long",year:"numeric"})}</div>
        </div>
        <div style="display:flex;align-items:center;gap:8px">
          <div style="text-align:right">
            <div style="font-size:10px;color:var(--text-dim)">Toplam Net</div>
            <div style="font-family:'Inter',sans-serif;font-size:22px;font-weight:900;line-height:1">${s}</div>
          </div>
          <button class="btn btn-ghost btn-xs" onclick="openCommentModal('${o.id}')">💬 Yorumla</button>
        </div>
      </div>
      <div style="display:flex;gap:8px;flex-wrap:wrap">
        ${r.map(d=>{var m;const c=Number(((m=o.nets)==null?void 0:m[d])||0),p=c>=20?"var(--green)":c>=12?"var(--accent)":"var(--red)";return`<div style="background:var(--surface2);border:1px solid var(--border);border-radius:9px;padding:8px 12px;min-width:70px;text-align:center">
            <div style="font-size:10px;color:var(--text-dim);font-weight:600;text-transform:uppercase;letter-spacing:.3px;margin-bottom:4px">${d}</div>
            <div style="font-family:'Inter',sans-serif;font-size:18px;font-weight:800;color:${p}">${c}</div>
          </div>`}).join("")}
      </div>
      ${sa(o,n)}
      ${o.note?`<div style="margin-top:10px;font-size:12px;color:var(--text-mid);font-style:italic">"${v(o.note)}"</div>`:""}
      ${(()=>{if(!o.examDetails||!Object.keys(o.examDetails).length)return"";const d=r.map(c=>{const p=o.examDetails[c];if(!p)return"";const m=Math.max(0,(p.dogru||0)-(p.yanlis||0)/4).toFixed(2),u=p.yanlis_konular||[];return`<div style="padding:6px 0;border-bottom:1px solid var(--border)">
            <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:${u.length?"5px":"0"}">
              <span style="font-size:11px;font-weight:700;color:var(--text-mid)">${v(c)}</span>
              <span style="font-size:11px;color:var(--text-dim)">D:<b style="color:var(--green)">${p.dogru||0}</b> Y:<b style="color:var(--red)">${p.yanlis||0}</b> B:<b>${p.bos||0}</b> · Net <b style="color:var(--accent)">${m}</b></span>
            </div>
            ${u.length?`<div style="display:flex;flex-wrap:wrap;gap:3px">${u.map(g=>`<span style="font-size:10px;padding:2px 8px;border-radius:10px;background:rgba(255,92,122,.1);color:var(--red);border:1px solid rgba(255,92,122,.2)">${v(g)}</span>`).join("")}</div>`:""}
          </div>`}).filter(Boolean).join("");return d?`<div style="margin-top:10px;background:var(--surface2);border:1px solid var(--border);border-radius:9px;padding:10px 14px">
          <div style="font-size:10px;font-weight:700;color:var(--text-dim);text-transform:uppercase;letter-spacing:.5px;margin-bottom:8px">📋 Ders Detayları</div>
          ${d}
        </div>`:""})()}
      ${o.coachComment?`<div style="margin-top:8px;background:var(--accent-dim);border:1px solid rgba(240,165,0,.2);border-radius:8px;padding:9px 12px;font-size:12px"><span style="font-weight:700;color:var(--accent)">Koç: </span>${v(o.coachComment)}</div>`:""}
    </div>`}).join(""):'<div class="empty"><p>Henüz deneme sonucu yok</p></div>';e.innerHTML=`
    <button class="back-link" onclick="switchTab('student-detail')">← ${t?v(t.name):"Öğrenci"}</button>
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px">
      <div>
        <div style="font-family:'Inter',sans-serif;font-size:18px;font-weight:800">${t?v(t.name)+"  — ":""} Denemeler</div>
        <div style="font-size:12px;color:var(--text-mid);margin-top:2px">${n.length} deneme kaydı</div>
      </div>
      <div style="display:flex;gap:8px">
        <button class="btn btn-ghost btn-sm" onclick="openKonuRaporu('${l.activeStuId}')">📊 Konu Raporu</button>
      </div>
    </div>
    ${a}
    ${i}`}let ra=null,Me="TYT";const Eo=["TYT","AYT-SAY","AYT-EA","AYT-SOZ"];function la(){const t=l.exams.filter(r=>r.studentId===ra).filter(r=>r.type===Me&&r.examDetails&&Object.keys(r.examDetails).length),n={};t.forEach(r=>{Object.entries(r.examDetails).forEach(([s,d])=>{(d.yanlis_konular||[]).forEach(c=>{const p=s+"§"+c;n[p]=(n[p]||0)+1})})});const a=Object.entries(n).sort((r,s)=>s[1]-r[1]).map(([r,s])=>{const[d,c]=r.split("§"),p=Math.round(s/Math.max(t.length,1)*100),m=s>=3?"var(--red)":s===2?"var(--accent)":"var(--text-mid)";return`<tr style="border-bottom:1px solid var(--border)">
        <td style="padding:8px 10px;font-size:12px;color:var(--text-dim);white-space:nowrap">${v(d)}</td>
        <td style="padding:8px 10px;font-size:13px;font-weight:600">${v(c)}</td>
        <td style="padding:8px 10px;text-align:center">
          <span style="font-size:14px;font-weight:800;color:${m}">${s}</span>
          <span style="font-size:10px;color:var(--text-dim)">/${t.length}</span>
        </td>
        <td style="padding:8px 10px;min-width:90px">
          <div style="height:6px;border-radius:3px;background:var(--surface2);overflow:hidden">
            <div style="height:100%;width:${p}%;background:${m};border-radius:3px;transition:width .3s"></div>
          </div>
        </td>
      </tr>`}),i=Eo.map(r=>`<button onclick="window._krType='${r}';_krRenderBody()" style="padding:6px 14px;border-radius:20px;border:1px solid ${r===Me?"var(--accent)":"var(--border)"};background:${r===Me?"var(--accent-dim)":"transparent"};color:${r===Me?"var(--accent)":"var(--text-dim)"};font-size:12px;cursor:pointer;font-weight:${r===Me?700:400}">${r}</button>`).join(""),o=a.length?`<div style="font-size:11px;color:var(--text-dim);margin-bottom:12px">${t.length} denemeden derlendi · <b>${a.length}</b> farklı yanlış konu · 🔴 ≥3 tekrar kritik</div>
       <div style="overflow-x:auto">
       <table style="width:100%;border-collapse:collapse">
         <thead><tr style="border-bottom:2px solid var(--border)">
           <th style="padding:6px 10px;font-size:10px;color:var(--text-dim);text-align:left;text-transform:uppercase;letter-spacing:.5px">Ders</th>
           <th style="padding:6px 10px;font-size:10px;color:var(--text-dim);text-align:left;text-transform:uppercase;letter-spacing:.5px">Konu</th>
           <th style="padding:6px 10px;font-size:10px;color:var(--text-dim);text-align:center;text-transform:uppercase;letter-spacing:.5px">Tekrar</th>
           <th style="padding:6px 10px;font-size:10px;color:var(--text-dim);text-align:left;text-transform:uppercase;letter-spacing:.5px">Sıklık</th>
         </tr></thead>
         <tbody>${a.join("")}</tbody>
       </table></div>`:`<div style="text-align:center;padding:40px;color:var(--text-dim);font-size:13px">${t.length?"Bu denemeler için henüz konu işaretlenmemiş.":Me+" tipi deneme kaydı yok."}</div>`;document.getElementById("konuRaporuBody").innerHTML=`
    <div style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:16px">${i}</div>
    ${o}`}window._krRenderBody=la;function To(e){ra=e;const t=l.exams.find(n=>n.studentId===e&&n.examDetails&&Object.keys(n.examDetails).length);Me=(t==null?void 0:t.type)||"TYT",la(),G("konuRaporuModal")}window.openKonuRaporu=To;function So(e){const t=l.exams.find(n=>n.id===e);document.getElementById("cmExamId").value=e,document.getElementById("cmText").value=(t==null?void 0:t.coachComment)||"",G("commentModal")}async function Io(){const e=document.getElementById("cmExamId").value,t=document.getElementById("cmText").value.trim();await y.from("exams").update({coach_comment:t}).eq("id",e);const n=l.exams.find(a=>a.id===e);n&&(n.coachComment=t),q("commentModal"),qe(),b("Yorum kaydedildi ✓")}async function zo(e){await ie("Bu denemeyi silmek istediğinizden emin misiniz?")&&(await y.from("exams").delete().eq("id",e),l.exams=l.exams.filter(t=>t.id!==e),qe(),b("Silindi"))}function da(){const e=document.getElementById("view-messages");e.innerHTML=`<div class="sh" style="margin-bottom:14px"><h2>Mesajlar</h2></div>
    <div class="msg-layout">
      <div class="msg-sidebar">
        <div class="msg-sidebar-hd">Öğrenciler</div>
        ${l.students.map(t=>{const n=l.messages[t.id]||[],a=n[n.length-1],i=n.filter(o=>o.from==="student"&&!o.read).length;return`<div class="msg-contact ${l.msgThread===t.id?"active":""}" onclick="selectThread('${t.id}')">
            <div class="msg-contact-avatar" style="background:${t.color}">${t.name[0]}</div>
            <div style="flex:1;min-width:0">
              <div class="msg-contact-name">${v(t.name.split(" ")[0])}</div>
              <div class="msg-contact-last">${a?v(a.text.slice(0,35)):"Mesaj yok"}</div>
            </div>
            ${i?`<span class="msg-unread">${i}</span>`:""}
          </div>`}).join("")}
      </div>
      <div class="msg-main" id="msgMain">
        ${l.msgThread?Te(l.msgThread,"coach"):'<div class="no-chat-sel">Öğrenci seçin</div>'}
      </div>
    </div>`,l.msgThread&&Se()}async function Bo(e){l.msgThread=e;const t=(l.messages[e]||[]).filter(n=>n.from==="student"&&!n.read&&n._id).map(n=>n._id);t.length&&await y.from("messages").update({read:!0}).in("id",t),(l.messages[e]||[]).forEach(n=>{n.from==="student"&&(n.read=!0)}),document.getElementById("msgMain").innerHTML=Te(e,"coach"),document.querySelectorAll(".msg-contact").forEach(n=>n.classList.remove("active")),l.students.forEach((n,a)=>{var i;n.id===e&&((i=document.querySelectorAll(".msg-contact")[a])==null||i.classList.add("active"))}),Se(),nn()}let De=null;function Te(e,t){const n=l.students.find(r=>r.id===e),a=l.messages[e]||[],i=(n==null?void 0:n.color)||"#E8613A",o=a.map(r=>{const s=t==="coach"&&r.from==="coach"||t==="student"&&r.from==="student",d=r.image_url?`<img src="${v(r.image_url)}" onclick="window.open('${v(r.image_url)}','_blank')" />`:"",c=r.text?v(r.text):"",p=d+(d&&c?`<div style="margin-top:5px">${c}</div>`:c);return s?`<div class="msg-row out">
        <div class="msg-bubble out">${p}<div class="msg-bubble-time">${r.time}</div></div>
      </div>`:`<div class="msg-row in">
        <div class="msg-avatar-sm" style="background:${i}">${(n==null?void 0:n.name[0])||"?"}</div>
        <div class="msg-bubble in">${p}<div class="msg-bubble-time">${r.time}</div></div>
      </div>`}).join("");return`<div class="msg-main-hd">
    <div class="msg-main-hd-avatar" style="background:${i}">${(n==null?void 0:n.name[0])||"?"}</div>
    <div>
      <div class="msg-main-hd-name">${v((n==null?void 0:n.name)||"")}</div>
      <div class="msg-main-hd-status">● Çevrimiçi</div>
    </div>
  </div>
  <div class="msg-body" id="msgBody">${o||'<div class="empty" style="margin-top:40px;text-align:center;color:var(--text-dim)">👋 Henüz mesaj yok</div>'}</div>
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
  </div>`}window._pickMsgImg=function(e,t,n){const a=e.files[0];if(!a)return;if(a.size>5*1024*1024){b("Dosya max 5 MB olabilir"),e.value="";return}De={file:a};const i=document.getElementById("msgImgPreview"),o=document.getElementById("msgImgThumb"),r=document.getElementById("msgImgName");if(a.type.startsWith("image/")){const s=new FileReader;s.onload=d=>{o.src=d.target.result,o.style.display="block"},s.readAsDataURL(a)}else o.style.display="none";r.textContent=a.name,i.style.display="flex",e.value=""};window._cancelMsgImg=function(){De=null,document.getElementById("msgImgPreview").style.display="none"};window._handleMsgPaste=function(e,t,n){var i;const a=(i=e.clipboardData)==null?void 0:i.items;if(a){for(const o of a)if(o.type.startsWith("image/")){e.preventDefault();const r=o.getAsFile();if(!r)return;if(r.size>5*1024*1024){b("Dosya max 5 MB olabilir");return}De={file:r};const s=new FileReader;s.onload=d=>{const c=document.getElementById("msgImgPreview"),p=document.getElementById("msgImgThumb"),m=document.getElementById("msgImgName");p.src=d.target.result,p.style.display="block",m.textContent="Yapıştırılan görsel",c&&(c.style.display="flex")},s.readAsDataURL(r);return}}};async function Mo(e,t){var d,c,p;const n=document.getElementById("msgInput"),a=n.value.trim();if(!a&&!De)return;const i=x.coachId||((d=l.students.find(m=>m.id===e))==null?void 0:d.coachId)||((c=l.students.find(m=>m.id===x.studentId))==null?void 0:c.coachId);let o=null;if(De){const m=De.file,g=((p=m.name)!=null&&p.includes(".")?m.name.split(".").pop():"")||(m.type==="image/png"?"png":m.type==="image/webp"?"webp":"jpg"),E=`${e}/${Date.now()}.${g}`,{error:T}=await y.storage.from("chat_images").upload(E,m,{upsert:!0});if(T){b("Görsel yüklenemedi: "+T.message);return}const{data:f}=y.storage.from("chat_images").getPublicUrl(E);o=f.publicUrl,De=null,document.getElementById("msgImgPreview").style.display="none"}const{data:r,error:s}=await y.from("messages").insert({student_id:e,coach_id:i,from_role:t,text:a||null,image_url:o,read:!1}).select().single();if(s){b("Hata: "+s.message);return}l.messages[e]||(l.messages[e]=[]),l.messages[e].push({_id:r.id,from:t,text:a||"",image_url:o,time:new Date().toLocaleTimeString("tr-TR",{hour:"2-digit",minute:"2-digit"}),read:!1}),n.value="",n.style.height="auto",currentTab==="messages"&&(document.getElementById("msgMain").innerHTML=Te(e,"coach"),Se()),currentTab==="smessages"&&(document.getElementById("msgMain").innerHTML=Te(e,"student"),Se()),t==="student"&&i&&y.auth.getSession().then(({data:{session:m}})=>{var g;const u=m==null?void 0:m.access_token;u&&fetch("/api/mailer",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${u}`},body:JSON.stringify({type:"new_message",coach_id:i,student_name:((g=x.dbUser)==null?void 0:g.full_name)||"Öğrenciniz",message_preview:a?a.slice(0,200):"📷 Görsel gönderdi"})}).catch(()=>{})})}function Se(){setTimeout(()=>{const e=document.getElementById("msgBody");e&&(e.scrollTop=e.scrollHeight)},60)}function St(){var u;const e=document.getElementById("view-portal");if(!e)return;let t=l.students.find(g=>g.id===x.studentId);if(!t&&l.students.length>0&&(t=l.students[0]),!t){e.innerHTML=`<div style="text-align:center;padding:60px 20px;color:var(--text-mid)">
      <div style="font-size:36px;margin-bottom:12px">⏳</div>
      <p style="font-size:14px">Profil yükleniyor...</p>
    </div>`,setTimeout(()=>{l.students.length&&St()},800);return}x.studentId||(x.studentId=t.id),l.activeStuId=t.id;const n=ue(),a=`${t.id}_${n}`,i=l.tasks[a]||[],o=i.filter(g=>g.done).length,r=l.appointments.filter(g=>g.studentId===t.id&&g.date>=n).sort((g,E)=>g.date.localeCompare(E.date))[0],s=(l.messages[t.id]||[]).filter(g=>g.from==="coach"&&!g.read).length,d=((u=l.konuMastery)==null?void 0:u[t.id])||{},c=[],p=new Date;p.setDate(p.getDate()-30),Object.entries(d).forEach(([g,E])=>{Object.entries(E).forEach(([T,f])=>{if(f.status==="td"||f.status==="not_started")return;const $=f.last_review_date?new Date(f.last_review_date):null,w=$?Math.floor((Date.now()-$.getTime())/864e5):999,B=f.stars<=2,h=w>20;(B||h)&&c.push({konu:T,subject:g,stars:f.stars,daysSince:w})})}),c.sort((g,E)=>g.stars-E.stars||E.daysSince-g.daysSince);const m=c.length>0?`
    <div class="card cp" style="border-color:rgba(239,68,68,.3)">
      <div class="portal-sec-title">🔄 Tekrar Gereken Konular <span style="font-size:11px;background:rgba(239,68,68,.12);color:#ef4444;padding:2px 8px;border-radius:99px;font-weight:700">${c.length}</span></div>
      ${c.slice(0,5).map(g=>{const E=He[g.stars];return g.daysSince<999&&`${g.daysSince}`,`<div style="display:flex;align-items:center;gap:10px;padding:7px 0;border-bottom:1px solid var(--border)">
          <span style="font-size:13px;color:${E.color};font-weight:800;white-space:nowrap">${"⭐".repeat(g.stars)||"○"}</span>
          <div style="flex:1;min-width:0">
            <div style="font-size:12px;font-weight:700;color:var(--text);overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${v(g.konu)}</div>
            <div style="font-size:10px;color:var(--text-dim)">${v(g.subject)} · Son: ${g.daysSince<999?g.daysSince+"g önce":"Hiç"}</div>
          </div>
        </div>`}).join("")}
      ${c.length>5?`<div style="font-size:11px;color:var(--text-dim);margin-top:8px;text-align:center">+${c.length-5} daha…</div>`:""}
    </div>`:"";e.innerHTML=`
    <div class="portal-hero">
      <div class="portal-avatar" style="background:${t.color}">${t.name[0]}</div>
      <div class="portal-info">
        <h1>Merhaba, ${v(t.name.split(" ")[0])}! 👋</h1>
        <p>${v(t.target)} · ${new Date().toLocaleDateString("tr-TR",{weekday:"long",day:"numeric",month:"long"})}</p>
      </div>
    </div>
    <div class="portal-grid">
      <div class="card cp">
        <div class="portal-sec-title">📋 Bugünün Görevleri</div>
        ${i.length?`
          ${i.map((g,E)=>`
            <div data-task-id="${g._id}" class="task-card task-${g.type} ${g.done?"done":""}" style="margin-bottom:6px">
              <div class="tc-check ${g.done?"on":""}" onclick="stuToggleTask('${n}',${E})"></div>
              <div class="tc-body">
                <div class="tc-type">${it(g.type)}${g.exam?" · "+g.exam:""}</div>
                <div class="tc-subject">${v(g.subject)}</div>
                <div class="tc-meta">${g.duration} dk${g.note?" · "+v(g.note):""}</div>
              </div>
            </div>`).join("")}
          <div style="margin-top:8px;font-size:12px;color:var(--text-mid)">${o}/${i.length} tamamlandı</div>
        `:'<div class="empty"><p>Bugün için görev atanmamış</p></div>'}
      </div>
      <div style="display:flex;flex-direction:column;gap:12px">
        <div class="card cp">
          <div class="portal-sec-title">📈 İlerleme</div>
          <div style="font-family:'Inter',sans-serif;font-size:36px;font-weight:800;color:${t.color};margin-bottom:6px">%${t.progress}</div>
          <div class="prog-bar-wrap"><div class="prog-bar" style="width:${t.progress}%;background:${t.color}"></div></div>
        </div>
        <div class="card cp">
          <div class="portal-sec-title">📅 Sonraki Randevu</div>
          ${r?`<div style="font-size:12px;color:var(--text-mid);margin-bottom:3px">${new Date(r.date+"T12:00").toLocaleDateString("tr-TR",{weekday:"long",day:"numeric",month:"long"})}</div>
          <div style="font-family:'Inter',sans-serif;font-size:20px;font-weight:700">${r.time}</div>
          <div style="font-size:12px;color:var(--text-mid);margin-top:3px">${v(r.type)} · ${r.duration} dk</div>`:'<div style="font-size:13px;color:var(--text-dim)">Yaklaşan randevu yok</div>'}
        </div>
        ${s>0?`<div class="card cp" style="border-color:var(--accent);cursor:pointer" onclick="switchTab('smessages')">
          <div style="display:flex;align-items:center;gap:10px">
            <span style="font-size:22px">💬</span>
            <div><div style="font-weight:700">${s} yeni mesaj</div><div style="font-size:12px;color:var(--text-mid)">Koçundan</div></div>
          </div>
        </div>`:""}
        ${m}
      </div>
    </div>`}async function Ao(e,t){var r;const n=l.students.find(s=>s.id===x.studentId);if(!n)return;const a=`${n.id}_${e}`,i=(r=l.tasks[a])==null?void 0:r[t];if(!i)return;const o=!i.done;await y.from("tasks").update({done:o}).eq("id",i._id),i.done=o,St()}function Ie(){const e=l.students.find(p=>p.id===x.studentId);if(!e)return;const t=document.getElementById("view-sportal"),n=e.weekStart??0,a=ne(l.weekOffset,n),i=J(a,6),o=ue(),r=localStorage.getItem("ra_program_mode")||"weekly";let s="";for(let p=0;p<7;p++){const m=J(a,p),u=O(m),g=u===o,E=`${e.id}_${u}`,T=l.tasks[E]||[],f=T.reduce((S,I)=>S+Number(I.duration),0),$=T.reduce((S,I)=>S+(I.done?Number(I.duration):0),0);DAYS_TR[(n+p)%7];const w=[...T];r==="hourly"&&w.sort((S,I)=>S.start_time&&!I.start_time?-1:!S.start_time&&I.start_time?1:S.start_time&&I.start_time?S.start_time.localeCompare(I.start_time):0);const B=w.map(S=>{const I=T.indexOf(S),z=S.start_time?`<div class="tc-time-badge">🕒 ${S.start_time}</div>`:"";return`
        <div data-task-id="${S._id}" class="task-card task-${S.type} ${S.done?"done":""} ${S.start_time?"hourly-card":""}" onclick="openTaskDetail('${u}',${I},'student')" style="cursor:pointer">
          <div class="tc-check ${S.done?"on":""}" onclick="event.stopPropagation();stuToggleTask2('${u}',${I})"></div>
          <div class="tc-body">
            ${z}
            <div class="tc-type">${it(S.type)}${S.exam?" · "+S.exam:""}</div>
            <div class="tc-subject">${v(S.subject)}</div>
            <div class="tc-meta">${S.duration} dk</div>
          </div>
        </div>`}).join(""),h=["Pzt","Sal","Çar","Per","Cum","Cmt","Paz"][(n+p)%7];s+=`<div class="day-col ${g?"today":""}">
      <div class="day-hd">
        <div><div class="day-name-lbl">${h}</div><div class="day-num">${m.getDate()}</div></div>
        <span class="day-badge" style="font-size:8.5px">${Qe($)} / ${Qe(f)}</span>
      </div>
      <div class="day-tasks-list">${B||'<div class="empty" style="padding:8px 0"><p style="font-size:11px">Görev yok</p></div>'}</div>
    </div>`}const d=Ft(),c=d.days;t.innerHTML=`
    ${c>0?`<div style="text-align:center;margin-bottom:10px;padding:7px 12px;background:var(--surface2);border-radius:10px;font-size:12px;color:var(--text-mid)">📅 YKS ${d.year}'ye <strong style="color:var(--accent)">${c}</strong> gün kaldı</div>`:""}
    <div class="week-nav" style="margin-bottom:14px;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:10px">
      <div style="display:flex;gap:6px;align-items:center">
        <button class="btn btn-ghost btn-sm" onclick="chWeekS(-1)">← Önceki</button>
        <span class="week-lbl">${a.getDate()} ${MONTHS_TR[a.getMonth()]} — ${i.getDate()} ${MONTHS_TR[i.getMonth()]} ${i.getFullYear()}</span>
        <button class="btn btn-ghost btn-sm" onclick="chWeekS(1)">Sonraki →</button>
        <button class="btn btn-ghost btn-sm" onclick="S.weekOffset=0;saveUI();renderSPortal()">Bugün</button>
      </div>

      <!-- Program Görünüm Seçici Toggle -->
      <div style="display:flex;background:var(--surface2);border:1px solid var(--border);border-radius:10px;padding:3px;gap:4px">
        <button class="btn btn-xs ${r==="weekly"?"btn-accent":"btn-ghost"}" onclick="setProgramMode('weekly')" style="padding:4px 10px;font-size:11px;font-weight:700;border-radius:8px">📋 Günlük Serbest</button>
        <button class="btn btn-xs ${r==="hourly"?"btn-accent":"btn-ghost"}" onclick="setProgramMode('hourly')" style="padding:4px 10px;font-size:11px;font-weight:700;border-radius:8px">🕒 Saatlik Düzen</button>
      </div>
    </div>
    <div class="week-grid">${s}</div>`}async function Do(e,t){var r;const n=l.students.find(s=>s.id===x.studentId);if(!n)return;const a=`${n.id}_${e}`,i=(r=l.tasks[a])==null?void 0:r[t];if(!i)return;const o=!i.done;if(await y.from("tasks").update({done:o}).eq("id",i._id),i.done=o,Ie(),o&&e===ue()){const s=l.tasks[a]||[];s.length>0&&s.every(d=>d.done)&&Co()}}function Co(){if(document.getElementById("_celebOverlay"))return;if(!document.getElementById("_celebStyle")){const t=document.createElement("style");t.id="_celebStyle",t.textContent="@keyframes celebPop{0%{opacity:0;transform:scale(.7) translateY(20px)}60%{opacity:1;transform:scale(1.05) translateY(-4px)}100%{opacity:1;transform:scale(1) translateY(0)}}@keyframes celebFade{0%,70%{opacity:1}100%{opacity:0}}",document.head.appendChild(t)}const e=document.createElement("div");e.id="_celebOverlay",e.style.cssText="position:fixed;inset:0;z-index:99999;display:flex;align-items:center;justify-content:center;pointer-events:none",e.innerHTML=`<div style="background:var(--surface);border:2px solid var(--green);border-radius:20px;padding:28px 36px;text-align:center;box-shadow:0 20px 60px rgba(0,0,0,.25);animation:celebPop .4s ease-out,celebFade 3.5s ease-in-out forwards;pointer-events:auto">
    <div style="font-size:52px;margin-bottom:8px">🏆</div>
    <div style="font-size:18px;font-weight:800;color:var(--green);margin-bottom:4px">Günü Tamamladın!</div>
    <div style="font-size:13px;color:var(--text-mid)">Bugünkü tüm görevleri bitirdin. Harikasın 💪</div>
  </div>`,document.body.appendChild(e),setTimeout(()=>e.remove(),3600)}function Lo(e){l.weekOffset+=e,ke(),Ie()}let Ce={};window._fbChip=function(e,t,n){if(Ce[e]=isNaN(t)?t:Number(t),n.parentElement.querySelectorAll("[data-fb-val]").forEach(a=>{const i=a.dataset.fbVal==t;a.style.background=i?a.dataset.fbBg:"var(--surface2)",a.style.borderColor=i?a.dataset.fbColor:"var(--border)",a.style.color=i?a.dataset.fbColor:"var(--text-mid)",a.style.fontWeight=i?"700":"600"}),e==="status"){const a=document.getElementById("fbBlockerSection");a&&(a.style.display=t==="completed"?"none":"block")}};window._fbStar=function(e){Ce.focus=e;for(let t=1;t<=5;t++){const n=document.getElementById("fbStar"+t);n&&(n.textContent=t<=e?"★":"☆",n.style.color=t<=e?"#f0a500":"var(--text-dim)")}};function jo(e){const t=e.student_feedback||{},n=t.status||(e.done?"completed":""),a=t.time_spent!=null?Math.floor(t.time_spent/60):"",i=t.time_spent!=null?t.time_spent%60:"",o=t.focus||0,r=t.difficulty||0,s=t.blocker||"";Ce={status:n||null,focus:o,difficulty:r,blocker:s};const d=[{v:"completed",l:"✓ Tamamladım",c:"#3ecf8e",bg:"rgba(62,207,142,.12)"},{v:"partial",l:"~ Kısmen",c:"#f0a500",bg:"rgba(240,165,0,.12)"},{v:"failed",l:"✕ Yapamadım",c:"#ef4444",bg:"rgba(239,68,68,.12)"}],c=[{v:1,l:"Çok Kolay",c:"#3ecf8e",bg:"rgba(62,207,142,.1)"},{v:2,l:"Kolay",c:"#86efac",bg:"rgba(134,239,172,.1)"},{v:3,l:"Orta",c:"#f0a500",bg:"rgba(240,165,0,.1)"},{v:4,l:"Zor",c:"#fb923c",bg:"rgba(251,146,60,.1)"},{v:5,l:"Çok Zor",c:"#ef4444",bg:"rgba(239,68,68,.1)"}],p=[{v:"time",l:"Zamanım yetmedi"},{v:"topic",l:"Konuyu anlamadım"},{v:"hard",l:"Kaynak çok zordu"},{v:"moti",l:"İstek/motivasyonum yoktu"}];return`<div style="background:var(--surface2);border:1px solid var(--border);border-radius:11px;padding:14px 16px;margin-bottom:14px">

    <div style="margin-bottom:14px">
      <div style="font-size:10px;font-weight:700;color:var(--text-dim);text-transform:uppercase;letter-spacing:.5px;margin-bottom:8px">Tamamlanma Durumu</div>
      <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:6px">
        ${d.map(m=>`<button onclick="window._fbChip('status','${m.v}',this)" data-fb-val="${m.v}" data-fb-color="${m.c}" data-fb-bg="${m.bg}"
          style="padding:9px 4px;border-radius:9px;border:1.5px solid ${n===m.v?m.c:"var(--border)"};background:${n===m.v?m.bg:"var(--surface2)"};color:${n===m.v?m.c:"var(--text-mid)"};font-size:12px;font-weight:${n===m.v?"700":"600"};cursor:pointer;transition:all .15s">${v(m.l)}</button>`).join("")}
      </div>
    </div>

    <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:14px">
      <div>
        <div style="font-size:10px;font-weight:700;color:var(--text-dim);text-transform:uppercase;letter-spacing:.5px;margin-bottom:8px">⏱ Süre</div>
        <div style="display:flex;gap:5px;align-items:center">
          <input id="fbHour" type="number" min="0" max="23" placeholder="0" value="${a}"
            style="width:44px;padding:8px 4px;background:var(--surface);border:1.5px solid var(--border);border-radius:8px;color:var(--text);font-size:14px;font-weight:700;text-align:center"
            oninput="if(this.value>23)this.value=23">
          <span style="font-size:11px;color:var(--text-dim)">sa</span>
          <input id="fbMin" type="number" min="0" max="59" placeholder="0" value="${i}"
            style="width:44px;padding:8px 4px;background:var(--surface);border:1.5px solid var(--border);border-radius:8px;color:var(--text);font-size:14px;font-weight:700;text-align:center"
            oninput="if(this.value>59)this.value=59">
          <span style="font-size:11px;color:var(--text-dim)">dk</span>
        </div>
      </div>
      <div>
        <div style="font-size:10px;font-weight:700;color:var(--text-dim);text-transform:uppercase;letter-spacing:.5px;margin-bottom:8px">🎯 Odaklanma</div>
        <div style="display:flex;gap:2px;padding-top:2px">
          ${[1,2,3,4,5].map(m=>`<span id="fbStar${m}" onclick="window._fbStar(${m})" style="font-size:24px;cursor:pointer;color:${m<=o?"#f0a500":"var(--text-dim)"};transition:color .1s">${m<=o?"★":"☆"}</span>`).join("")}
        </div>
      </div>
    </div>

    <div style="margin-bottom:14px">
      <div style="font-size:10px;font-weight:700;color:var(--text-dim);text-transform:uppercase;letter-spacing:.5px;margin-bottom:8px">📊 Zorluk</div>
      <div style="display:flex;gap:4px">
        ${c.map(m=>`<button onclick="window._fbChip('difficulty',${m.v},this)" data-fb-val="${m.v}" data-fb-color="${m.c}" data-fb-bg="${m.bg}"
          style="flex:1;padding:7px 3px;border-radius:8px;border:1.5px solid ${r===m.v?m.c:"var(--border)"};background:${r===m.v?m.bg:"var(--surface2)"};color:${r===m.v?m.c:"var(--text-mid)"};font-size:10px;font-weight:${r===m.v?"700":"600"};cursor:pointer;transition:all .15s;text-align:center">${v(m.l)}</button>`).join("")}
      </div>
    </div>

    <div id="fbBlockerSection" style="display:${n&&n!=="completed"?"block":"none"}">
      <div style="font-size:10px;font-weight:700;color:var(--text-dim);text-transform:uppercase;letter-spacing:.5px;margin-bottom:8px">Neden Yapamadın?</div>
      <div style="display:flex;flex-wrap:wrap;gap:6px">
        ${p.map(m=>`<button onclick="window._fbChip('blocker','${m.v}',this)" data-fb-val="${m.v}" data-fb-color="#fb923c" data-fb-bg="rgba(251,146,60,.1)"
          style="padding:6px 11px;border-radius:8px;border:1.5px solid ${s===m.v?"#fb923c":"var(--border)"};background:${s===m.v?"rgba(251,146,60,.1)":"var(--surface2)"};color:${s===m.v?"#fb923c":"var(--text-mid)"};font-size:11px;font-weight:${s===m.v?"700":"600"};cursor:pointer;transition:all .15s">${v(m.l)}</button>`).join("")}
      </div>
    </div>

  </div>`}function Po(e){const t=e.student_feedback||{};if(!(t.status||t.focus||t.difficulty||t.time_spent>0||t.blocker))return"";const a={completed:{l:"Tamamladı",c:"#3ecf8e",bg:"rgba(62,207,142,.1)"},partial:{l:"Kısmen Tamamladı",c:"#f0a500",bg:"rgba(240,165,0,.1)"},failed:{l:"Yapamadı",c:"#ef4444",bg:"rgba(239,68,68,.1)"}},i={1:"Çok Kolay",2:"Kolay",3:"Orta",4:"Zor",5:"Çok Zor"},o={time:"Zamanı yetmedi",topic:"Konuyu anlayamadı",hard:"Kaynak çok zordu",moti:"Motivasyon yok"},r=a[t.status],s=t.time_spent,d=s>0?(Math.floor(s/60)>0?Math.floor(s/60)+"sa ":"")+(s%60>0?s%60+"dk":""):null,c=t.focus?"★".repeat(t.focus)+"☆".repeat(5-t.focus):null,p={1:"#3ecf8e",2:"#86efac",3:"#f0a500",4:"#fb923c",5:"#ef4444"},m=t.difficulty?p[t.difficulty]:"var(--text-mid)";return`<div style="background:var(--surface2);border:1px solid var(--border);border-radius:11px;padding:12px 16px;margin-bottom:14px">
    <div style="font-size:10px;font-weight:700;color:var(--text-dim);text-transform:uppercase;letter-spacing:.5px;margin-bottom:10px">💬 Geri Bildirim</div>

    <!-- Satır 1: durum + süre -->
    <div style="display:flex;flex-wrap:wrap;gap:6px;margin-bottom:10px">
      ${r?`<span style="padding:4px 12px;border-radius:20px;font-size:12px;font-weight:700;background:${r.bg};color:${r.c};border:1px solid ${r.c}33">${r.l}</span>`:""}
      ${d?`<span style="padding:4px 12px;border-radius:20px;font-size:12px;background:var(--surface);border:1px solid var(--border);color:var(--text-mid)">⏱ ${d}</span>`:""}
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
  </div>`}async function Qt(e,t,n){var g,E,T,f;const i=`${x.role==="student"?x.studentId:l.activeStuId}_${e}`,o=(g=l.tasks[i])==null?void 0:g[t];if(!o)return;if(n==="coach"&&o._id){const{data:$}=await y.from("tasks").select("*").eq("id",o._id).single();$&&(o.done=$.done,o.student_note=$.student_note||"",o.student_result=$.student_result||null,o.student_feedback=$.student_feedback||null)}let r=document.getElementById("taskDetailModal");r||(r=document.createElement("div"),r.id="taskDetailModal",r.className="modal-bg",document.body.appendChild(r),r.addEventListener("click",$=>{$.target===r&&r.classList.remove("open")}));const s={soru:"var(--blue)",konu:"#c084fc",deneme:"var(--accent)",diger:"var(--text-mid)"},d={soru:"Soru Bankası",konu:"Konu Anlatımı",deneme:"Deneme",diger:"Diğer"},c=s[o.type]||"var(--accent)",p=o.type==="konu",m=o.task_items||[];let u="";m.length>0?u=`<div style="margin-bottom:14px">
      <div style="font-size:11px;font-weight:700;color:var(--text-dim);text-transform:uppercase;letter-spacing:.5px;margin-bottom:8px">${p?"Videolar":"Testler"} (${m.length})</div>
      <div style="background:var(--surface2);border:1px solid var(--border);border-radius:10px;overflow:hidden;max-height:200px;overflow-y:auto">
        ${m.map(($,w)=>`
          <label style="display:flex;align-items:center;gap:10px;padding:8px 12px;border-bottom:1px solid var(--border);${w===m.length-1?"border-bottom:none":""};cursor:${n==="coach"?"default":"pointer"};transition:background .1s"
            ${n==="coach"?"":`onmouseover="this.style.background='var(--surface3)'" onmouseout="this.style.background=''"`}>
            <input type="checkbox" ${$.done?"checked":""} ${n==="coach"?"disabled":""} onchange="toggleDetailItem('${e}',${t},${w},'${n}')"
              style="width:16px;height:16px;accent-color:var(--accent);cursor:${n==="coach"?"default":"pointer"};flex-shrink:0;">
            <div style="width:20px;height:20px;border-radius:6px;background:${c}22;color:${c};font-size:10px;font-weight:800;display:flex;align-items:center;justify-content:center;flex-shrink:0;margin-left:4px">${w+1}</div>
            <div style="flex:1;min-width:0">
              <div style="font-size:13px;font-weight:600;line-height:1.4;${$.done?"text-decoration:line-through;color:var(--text-dim);":""}">${v($.label||`Ders ${w+1}`)}</div>
              <div style="font-size:11px;color:var(--text-mid);margin-top:2px">⏱ ${$.soru>0?p?$.soru+" dk":$.soru+" soru":"?"}</div>
            </div>
            ${$.url?`<a href="${v($.url)}" target="_blank" onclick="event.stopPropagation()"
              style="display:flex;align-items:center;gap:4px;font-size:12px;font-weight:700;background:#cc000022;color:#ff5555;border:1px solid #aa222233;padding:6px 12px;border-radius:8px;text-decoration:none;flex-shrink:0;white-space:nowrap">▶ İzle</a>`:""}
          </label>`).join("")}
      </div>
    </div>`:o.note&&(o.note.includes("test:")||o.note.includes("video:"))&&(u=`<div style="margin-bottom:14px">
      <div style="font-size:11px;font-weight:700;color:var(--text-dim);text-transform:uppercase;letter-spacing:.5px;margin-bottom:6px">${p?"Videolar":"Testler"}</div>
      <div style="background:var(--surface2);border:1px solid var(--border);border-radius:10px;padding:10px 12px;font-size:12px;color:var(--text-mid)">${v(o.note)}</div>
    </div>`),r.innerHTML=`<div class="modal">
    <button class="modal-close" onclick="cm('taskDetailModal')">×</button>

    <!-- Görev başlık -->
    <div style="border-left:3px solid ${c};padding-left:12px;margin-bottom:20px">
      <div style="font-size:10px;font-weight:700;color:${c};text-transform:uppercase;letter-spacing:.5px;margin-bottom:4px">${d[o.type]||o.type}${o.exam?" · "+o.exam:""}</div>
      <div style="font-family:'Inter',sans-serif;font-size:18px;font-weight:800;line-height:1.2">${v(o.subject)}</div>
      <div style="font-size:12px;color:var(--text-dim);margin-top:4px">${new Date(e+"T12:00").toLocaleDateString("tr-TR",{weekday:"long",day:"numeric",month:"long"})}</div>
    </div>

    <!-- Geri bildirim: öğrenci=form, koç=özet+durum -->
    ${n==="student"?jo(o):`
    <div style="background:var(--surface2);border:1.5px solid ${o.done?"var(--green)":"var(--border)"};border-radius:11px;padding:12px 16px;display:flex;align-items:center;gap:10px;margin-bottom:14px">
      <div style="width:20px;height:20px;border-radius:5px;background:${o.done?"var(--green)":"transparent"};border:2px solid ${o.done?"var(--green)":"var(--border)"};display:flex;align-items:center;justify-content:center;font-size:12px;flex-shrink:0">${o.done?"✓":""}</div>
      <div style="font-size:13px;font-weight:700;color:${o.done?"var(--green)":"var(--text-dim)"}">${o.done?"Tamamlandı":"Henüz tamamlanmadı"}</div>
    </div>
    ${Po(o)}`}

    <!-- Test/Video listesi -->
    ${u}

    <!-- Sonuç Gir (soru/deneme türleri için) -->
    ${o.type==="soru"||o.type==="deneme"?`
    <div style="background:var(--surface2);border:1px solid var(--border);border-radius:11px;padding:14px 16px;margin-bottom:14px">
      <div style="font-size:11px;font-weight:700;color:var(--text-dim);text-transform:uppercase;letter-spacing:.5px;margin-bottom:10px">📊 Sonucu Gir</div>
      <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px">
        <div>
          <div style="font-size:10px;font-weight:700;color:var(--green);margin-bottom:4px">✓ Doğru</div>
          <input type="number" id="tdDogru" min="0" value="${((E=o.student_result)==null?void 0:E.dogru)??""}" placeholder="0" ${n==="coach"?"disabled":""}
            style="width:100%;padding:8px;background:var(--surface);border:1.5px solid var(--border);border-radius:8px;color:var(--text);font-size:15px;font-weight:700;text-align:center;box-sizing:border-box">
        </div>
        <div>
          <div style="font-size:10px;font-weight:700;color:var(--red);margin-bottom:4px">✗ Yanlış</div>
          <input type="number" id="tdYanlis" min="0" value="${((T=o.student_result)==null?void 0:T.yanlis)??""}" placeholder="0" ${n==="coach"?"disabled":""}
            style="width:100%;padding:8px;background:var(--surface);border:1.5px solid var(--border);border-radius:8px;color:var(--text);font-size:15px;font-weight:700;text-align:center;box-sizing:border-box">
        </div>
        <div>
          <div style="font-size:10px;font-weight:700;color:var(--text-dim);margin-bottom:4px">— Boş</div>
          <input type="number" id="tdBos" min="0" value="${((f=o.student_result)==null?void 0:f.bos)??""}" placeholder="0" ${n==="coach"?"disabled":""}
            style="width:100%;padding:8px;background:var(--surface);border:1.5px solid var(--border);border-radius:8px;color:var(--text);font-size:15px;font-weight:700;text-align:center;box-sizing:border-box">
        </div>
      </div>
      ${o.student_result?`<div style="font-size:11px;color:var(--text-dim);margin-top:8px;text-align:right">Son güncelleme: ${new Date(o.student_result.ts||Date.now()).toLocaleDateString("tr-TR")}</div>`:""}
    </div>
    ${(()=>{var w;const $=Ai(o.exam,o.subject);return $?(pe=[...((w=o.student_result)==null?void 0:w.yanlis_konular)||[]],`<div style="background:var(--surface2);border:1px solid var(--border);border-radius:11px;padding:14px 16px;margin-bottom:14px">
        <div style="font-size:11px;font-weight:700;color:var(--text-dim);text-transform:uppercase;letter-spacing:.5px;margin-bottom:10px">📌 Yanlış Konular</div>
        <div style="display:flex;flex-wrap:wrap;gap:0">${$.map(B=>{const h=pe.includes(B);return`<span ${n==="coach"?"":`onclick="toggleKonuChip(this,'${B.replace(/'/g,"\\'")}')"`}
            style="display:inline-block;padding:5px 11px;margin:3px;border-radius:20px;font-size:11px;font-weight:600;cursor:${n==="coach"?"default":"pointer"};user-select:none;border:1px solid ${h?"var(--red)":"var(--border)"};background:${h?"rgba(255,92,122,.12)":"var(--surface)"};color:${h?"var(--red)":"var(--text-mid)"}">
            ${v(B)}</span>`}).join("")}</div>
      </div>`):""})()}
    `:""}

    <!-- Not -->
    <div class="field">
      <label>${n==="student"?"Koçuma Not":"Öğrenci Notu"}</label>
      <textarea id="tdNote" placeholder="${n==="student"?"Koçuna iletmek istediğin bir şey var mı?":"—"}" style="min-height:60px" ${n==="coach"?"disabled":""}>${o.student_note||""}</textarea>
    </div>

    <div style="display:flex; gap:10px; margin-top:12px">
      ${n==="coach"?`<button class="btn btn-ghost" style="flex:1; justify-content:center; padding:12px; font-weight:700;" onclick="cm('taskDetailModal'); openCoachTaskEdit('${e}',${t})">⚙ Düzenle</button>
           <button class="btn btn-accent" style="flex:2; justify-content:center; padding:12px; font-weight:700;" onclick="cm('taskDetailModal')">Kapat</button>`:`<button class="btn btn-accent" style="flex:1; justify-content:center; padding:12px; font-weight:700;" onclick="saveTaskDetail('${e}',${t},'${n}')">Kaydet</button>`}
    </div>
  </div>`,G("taskDetailModal")}async function Ro(e,t,n){var r;if(n==="coach")return;const i=`${x.role==="student"?x.studentId:l.activeStuId}_${e}`,o=(r=l.tasks[i])==null?void 0:r[t];o&&(o.done=!o.done,o.task_items&&Array.isArray(o.task_items)&&o.task_items.forEach(s=>{s.done=o.done}),await y.from("tasks").update({done:o.done,task_items:o.task_items||null}).eq("id",o._id),Qt(e,t,n),n==="student"?Ie():X())}async function No(e,t,n,a){var d;if(a==="coach")return;const o=`${x.role==="student"?x.studentId:l.activeStuId}_${e}`,r=(d=l.tasks[o])==null?void 0:d[t];if(!r||!r.task_items)return;r.task_items[n].done=!r.task_items[n].done;const s=r.task_items.every(c=>c.done);r.done=s,M(!0),await y.from("tasks").update({task_items:r.task_items,done:r.done}).eq("id",r._id),M(!1),Qt(e,t,a),a==="student"?Ie():X(),b("İlerleme kaydedildi ✓")}function Ho(e,t){var i,o,r;e.closest("div").querySelectorAll("button[data-speed]").forEach(s=>{const d=s.dataset.speed===t;s.style.borderColor=d?"var(--accent)":"var(--border)",s.style.background=d?"var(--accent-dim)":"var(--surface2)",s.style.color=d?"var(--accent)":"var(--text-mid)"}),document.getElementById("tdSpeed").value=t;const n=parseFloat(t),a=document.getElementById("speedCalc");if(a){const s=parseInt(((r=(o=(i=a.closest("[id=speedInfo]"))==null?void 0:i.textContent)==null?void 0:o.match(/Toplam (\d+) dk/))==null?void 0:r[1])||0);a.textContent=Math.ceil(s/n)+" dk",document.getElementById("tdDuration").value=Math.ceil(s/n)}}async function Yo(e,t,n){var f,$,w,B,h;if(n==="coach")return;const i=`${x.role==="student"?x.studentId:l.activeStuId}_${e}`,o=(f=l.tasks[i])==null?void 0:f[t];if(!o)return;const r=(($=document.getElementById("tdNote"))==null?void 0:$.value.trim())||"",s={student_note:r},d=parseInt((w=document.getElementById("fbHour"))==null?void 0:w.value)||0,c=parseInt((B=document.getElementById("fbMin"))==null?void 0:B.value)||0,p=d*60+c,m={status:Ce.status||null,time_spent:p>0?p:((h=o.student_feedback)==null?void 0:h.time_spent)||null,focus:Ce.focus||null,difficulty:Ce.difficulty||null,blocker:Ce.blocker||null};(m.status||m.focus||m.difficulty||p>0)&&(s.student_feedback=m,o.student_feedback=m,m.status&&(s.done=m.status!=="failed",o.done=s.done));const u=document.getElementById("tdDogru"),g=document.getElementById("tdYanlis"),E=document.getElementById("tdBos");if(u!==null){const S=parseInt(u.value)||0,I=parseInt(g.value)||0,z=parseInt(E.value)||0;(S>0||I>0||z>0||pe.length>0)&&(s.student_result={dogru:S,yanlis:I,bos:z,yanlis_konular:[...pe],ts:new Date().toISOString()},o.student_result=s.student_result)}if(!o._id){b("Hata: görev ID bulunamadı");return}const{error:T}=await y.from("tasks").update(s).eq("id",o._id);if(T){b("Kaydetme hatası: "+T.message),console.error("saveTaskDetail error",T,s);return}o.student_note=r,q("taskDetailModal"),b("Kaydedildi ✓"),n==="student"?Ie():X()}function en(){const e=l.students.find(o=>o.id===x.studentId);if(!e)return;const t=document.getElementById("view-sexams"),n=[...l.exams].filter(o=>o.studentId===e.id).sort((o,r)=>r.date.localeCompare(o.date));let a="";if(n.length>1){const o=[...n].sort((s,d)=>s.date.localeCompare(d.date)).slice(-8),r=Math.max(...o.map(s=>(EXAM_DEFS[s.type]||[]).reduce((c,p)=>{var m;return c+Number(((m=s.nets)==null?void 0:m[p])||0)},0)),1);a=`<div class="card cp" style="margin-bottom:16px">
      <div style="font-family:'Inter',sans-serif;font-size:15px;font-weight:700;margin-bottom:12px">📈 Net Gelişimim</div>
      <div class="bar-chart">
        ${o.map(s=>{const c=(EXAM_DEFS[s.type]||[]).reduce((m,u)=>{var g;return m+Number(((g=s.nets)==null?void 0:g[u])||0)},0),p=Math.max(Math.round(c/r*100),4);return`<div class="bar-wrap">
            <div class="bar-val">${c.toFixed(0)}</div>
            <div class="bar" style="height:${p}%;background:${e.color}"></div>
            <div class="bar-label">${v(s.name.replace("Deneme ","#").replace("TYT ","").replace("AYT ",""))}</div>
          </div>`}).join("")}
      </div>
    </div>`}const i=n.length?n.map(o=>{const r=EXAM_DEFS[o.type]||[],s=r.reduce((c,p)=>{var m;return c+Number(((m=o.nets)==null?void 0:m[p])||0)},0).toFixed(1),d=r.map(c=>{var m;const p=Number(((m=o.nets)==null?void 0:m[c])||0);return`<div class="net-box"><div class="net-label">${c}</div><div class="net-val ${Ot(p)}">${p}</div></div>`}).join("");return`<div class="exam-item">
      <div class="exam-header">
        <div><div class="exam-name">${v(o.name)}</div><div class="exam-date">${new Date(o.date+"T12:00").toLocaleDateString("tr-TR",{day:"numeric",month:"long",year:"numeric"})}</div></div>
        <button class="btn btn-ghost btn-xs" onclick="openStudentExamModal('${o.id}')">✏️ Düzenle</button>
      </div>
      ${o.note?`<div style="font-size:12px;color:var(--text-mid);margin-bottom:8px;font-style:italic">"${v(o.note)}"</div>`:""}
      <div class="nets-grid">${d}</div>
      <div style="margin-top:8px"><div style="font-family:'Inter',sans-serif;font-size:18px;font-weight:800">Toplam: ${s}</div></div>
      ${sa(o,n)}
      ${o.coachComment?`<div class="coach-comment-box"><strong>Koç Yorumu</strong>${v(o.coachComment)}</div>`:""}
    </div>`}).join(""):'<div class="empty"><p>Henüz deneme sonucu eklemediniz.<br>İlk sonucunuzu girin!</p></div>';t.innerHTML=`
    <div class="sh"><h2>Denemelerim</h2><button class="btn btn-accent" onclick="openStudentExamModal()">+ Sonuç Gir</button></div>
    ${a}${i}`}function ca(e){var n;const t=e?l.exams.find(a=>a.id===e):null;document.getElementById("emTitle").textContent=t?"Sonucu Düzenle":"Deneme Sonucu Gir",document.getElementById("emId").value=e||"",document.getElementById("emName").value=(t==null?void 0:t.name)||"",document.getElementById("emDate").value=(t==null?void 0:t.date)||O(new Date),document.getElementById("emStudentWrap").style.display="none",document.getElementById("emStudent").innerHTML=`<option value="${x.studentId}">${v(((n=l.students.find(a=>a.id===x.studentId))==null?void 0:n.name)||"")}</option>`,document.getElementById("emExamType").value=(t==null?void 0:t.type)||"TYT",document.getElementById("emNote").value=(t==null?void 0:t.note)||"",tn(),t!=null&&t.examDetails&&Object.entries(t.examDetails).forEach(([a,i])=>{const o=document.getElementById(`ed_${a}_d`),r=document.getElementById(`ed_${a}_y`),s=document.getElementById(`ed_${a}_b`);o&&(o.value=i.dogru||0,r.value=i.yanlis||0,s.value=i.bos||0),ae[a]={...i},pa(a),(i.yanlis_konular||[]).forEach(d=>{document.querySelectorAll(`#konu_acc_${a.replace(/\s/g,"_")} span`).forEach(p=>{p.textContent.trim()===d&&(p.style.borderColor="var(--red)",p.style.background="rgba(255,92,122,.12)",p.style.color="var(--red)")})})}),G("examModal")}function Ko(e){document.getElementById("emStudentWrap").style.display="",document.getElementById("emStudent").innerHTML=l.students.map(t=>`<option value="${t.id}">${v(t.name)}</option>`).join(""),ca(e),document.getElementById("emStudentWrap").style.display=""}let ae={};function Oo(e,t,n){ae[t]||(ae[t]={dogru:0,yanlis:0,bos:0,yanlis_konular:[]});const a=ae[t].yanlis_konular,i=a.indexOf(n);i===-1?(a.push(n),e.style.borderColor="var(--red)",e.style.background="rgba(255,92,122,.12)",e.style.color="var(--red)"):(a.splice(i,1),e.style.borderColor="var(--border)",e.style.background="var(--surface)",e.style.color="var(--text-mid)")}window.toggleExamKonuChip=Oo;function pa(e){var c,p,m,u;const t=parseInt((c=document.getElementById(`ed_${e}_d`))==null?void 0:c.value)||0,n=parseInt((p=document.getElementById(`ed_${e}_y`))==null?void 0:p.value)||0,a=parseInt((m=document.getElementById(`ed_${e}_b`))==null?void 0:m.value)||0;ae[e]||(ae[e]={yanlis_konular:[]}),ae[e].dogru=t,ae[e].yanlis=n,ae[e].bos=a;const i=document.getElementById("emExamType").value,o=((u=EXAM_SORU[i])==null?void 0:u[e])||40,r=t+n+a,s=document.getElementById(`ed_${e}_net`),d=document.getElementById(`ed_${e}_warn`);s&&(s.textContent=Math.max(0,t-n/4).toFixed(2)),d&&(d.style.display=r>o?"":"none"),$o()}window.updateExamNet=pa;function Fo(e){const t=document.getElementById(`konu_acc_${e.replace(/\s/g,"_")}`);t&&(t.style.display=t.style.display==="none"?"":"none")}window.toggleKonuAccordion=Fo;function tn(){const e=document.getElementById("emExamType").value,t=EXAM_DEFS[e]||[];ae={};const n=document.getElementById("emPuanDisplay");n&&(n.innerHTML=""),document.getElementById("netInputsWrap").innerHTML=t.map(a=>{var d;const i=((d=EXAM_SORU[e])==null?void 0:d[a])||40,r=(EXAM_KONU_MAP[`${e}_${a}`]||[]).flatMap(c=>et[c]||[]),s=r.length?`
      <div style="margin-top:8px">
        <button type="button" onclick="toggleKonuAccordion('${a}')"
          style="font-size:11px;font-weight:700;color:var(--text-dim);background:none;border:none;cursor:pointer;padding:0;display:flex;align-items:center;gap:4px">
          📌 Yanlış Konular <span style="font-size:10px">▾</span>
        </button>
        <div id="konu_acc_${a.replace(/\s/g,"_")}" style="display:none;margin-top:6px;display:flex;flex-wrap:wrap;gap:0">
          ${r.map(c=>`<span onclick="toggleExamKonuChip(this,'${a}','${c.replace(/'/g,"\\'")}')"
            style="display:inline-block;padding:4px 10px;margin:2px;border-radius:20px;font-size:10px;font-weight:600;cursor:pointer;user-select:none;border:1px solid var(--border);background:var(--surface);color:var(--text-mid)">${v(c)}</span>`).join("")}
        </div>
      </div>`:"";return`<div style="background:var(--surface2);border:1px solid var(--border);border-radius:11px;padding:12px 14px;margin-bottom:10px">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:10px">
        <span style="font-size:12px;font-weight:800;text-transform:uppercase;letter-spacing:.5px">${v(a)}</span>
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
      ${s}
    </div>`}).join("")}async function Uo(){var s,d;const e=document.getElementById("emName").value.trim();if(!e)return b("Sınav adı girin!");const t=document.getElementById("emExamType").value,n={};(EXAM_DEFS[t]||[]).forEach(c=>{const p=ae[c]||{};n[c]=Math.max(0,(p.dogru||0)-(p.yanlis||0)/4)});const a=document.getElementById("emId").value,i=document.getElementById("emStudent").value,o={name:e,date:document.getElementById("emDate").value,student_id:i,coach_id:x.coachId||((s=l.students.find(c=>c.id===i))==null?void 0:s.coachId),exam_type:t,nets:n,exam_details:ae,student_note:document.getElementById("emNote").value.trim()};async function r(c,p,m){var u,g,E;if(p){const{error:T}=await y.from("exams").update(c).eq("id",m);if((u=T==null?void 0:T.message)!=null&&u.includes("exam_details")){const{exam_details:f,...$}=c;return y.from("exams").update($).eq("id",m)}return{error:T}}else{const T=await y.from("exams").insert(c).select().single();if((E=(g=T.error)==null?void 0:g.message)!=null&&E.includes("exam_details")){const{exam_details:f,...$}=c;return y.from("exams").insert($).select().single()}return T}}if(a){const{error:c}=await r(o,!0,a);if(c)return b("Hata: "+c.message);const p=l.exams.find(m=>m.id===a);p&&Object.assign(p,{name:o.name,date:o.date,studentId:i,type:t,nets:n,examDetails:ae,note:o.student_note}),b("Güncellendi ✓")}else{const{data:c,error:p}=await r(o,!1,null);if(p)return b("Hata: "+p.message);l.exams.push({id:c.id,studentId:c.student_id,name:c.name,date:c.date,type:c.exam_type,nets:c.nets||{},examDetails:c.exam_details||{},note:c.student_note,coachComment:""}),b("Deneme eklendi ✓")}if(q("examModal"),x.role==="student"?en():qe(),x.role==="coach"||x.role==="developer")try{const c=[];Object.values(ae||{}).forEach(m=>{var u;(u=m==null?void 0:m.yanlis_konular)!=null&&u.length&&c.push(...m.yanlis_konular)}),pe!=null&&pe.length&&c.push(...pe);const p=[...new Set(c)];if(p.length>0&&i){const m=((d=l.konuMastery)==null?void 0:d[i])||{},u=[];if(Object.entries(m).forEach(([g,E])=>{Object.entries(E).forEach(([T,f])=>{p.includes(T)&&(f.status==="td"?u.push({konu:T,subject:g,type:"td_broken",stars:f.stars}):f.stars>=5&&u.push({konu:T,subject:g,type:"high_star_wrong",stars:f.stars}))})}),u.length>0){const g=u.filter(f=>f.type==="td_broken"),E=u.filter(f=>f.type==="high_star_wrong");let T="⚠️ Mastery Önerileri: ";g.length>0&&(T+=`${g.map(f=>f.konu).join(", ")} TD'den düştü! `),E.length>0&&(T+=`${E.map(f=>f.konu).join(", ")} için yıldız düşürmeyi düşün.`),setTimeout(()=>{const f=document.createElement("div");f.style.cssText="position:fixed;bottom:80px;right:16px;max-width:360px;background:var(--surface);border:1.5px solid var(--accent);border-radius:12px;padding:14px 16px;box-shadow:var(--shadow-lg);z-index:99999;animation:slideIn .3s ease",f.innerHTML=`
              <div style="display:flex;align-items:flex-start;gap:10px">
                <span style="font-size:20px;flex-shrink:0">⚠️</span>
                <div style="flex:1">
                  <div style="font-size:13px;font-weight:800;margin-bottom:6px">Deneme → Konu Mastery Önerisi</div>
                  ${g.length>0?`<div style="font-size:11px;color:var(--red);margin-bottom:4px">🔴 TD'den düşenler: <b>${g.map($=>$.konu).join(", ")}</b></div>`:""}
                  ${E.length>0?`<div style="font-size:11px;color:var(--accent)">🟡 Yıldız düşürmeyi düşün: <b>${E.map($=>$.konu).join(", ")}</b></div>`:""}
                  <div style="font-size:10px;color:var(--text-dim);margin-top:6px">Değişiklik yapmak için Konu Haritası'na git</div>
                </div>
                <button onclick="this.parentElement.parentElement.remove()" style="border:none;background:none;color:var(--text-dim);cursor:pointer;font-size:16px;line-height:1;flex-shrink:0">×</button>
              </div>`,document.body.appendChild(f),setTimeout(()=>f.remove(),12e3)},600)}}}catch(c){console.error("[mastery suggestion]",c)}}async function Ht(){const e=l.students.find(a=>a.id===x.studentId);if(!e)return;const t=(l.messages[e.id]||[]).filter(a=>a.from==="coach"&&!a.read&&a._id).map(a=>a._id);t.length&&await y.from("messages").update({read:!0}).in("id",t),(l.messages[e.id]||[]).forEach(a=>{a.from==="coach"&&(a.read=!0)}),Bt();const n=document.getElementById("view-smessages");n.innerHTML=`<div class="sh" style="margin-bottom:12px"><h2>💬 Koçuma Yaz</h2></div>
    <div class="smsg-wrap">
      <div class="msg-main" id="msgMain">${Te(e.id,"student")}</div>
    </div>`,Se()}let mt=null;function nn(){an();const e=x.role==="coach"||x.role==="developer"?l.msgThread:x.studentId;e&&(mt=y.channel("messages_"+e).on("postgres_changes",{event:"INSERT",schema:"public",table:"messages",filter:`student_id=eq.${e}`},t=>{const n=t.new;l.messages[e]||(l.messages[e]=[]),!l.messages[e].find(a=>a._id===n.id)&&(l.messages[e].push({_id:n.id,from:n.from_role,text:n.text||"",image_url:n.image_url||null,read:n.read,time:new Date(n.created_at).toLocaleTimeString("tr-TR",{hour:"2-digit",minute:"2-digit"})}),x.role==="student"&&n.from_role==="coach"&&currentTab!=="smessages"&&Bt(),currentTab==="messages"&&l.msgThread===e&&(document.getElementById("msgMain").innerHTML=Te(e,"coach"),Se()),currentTab==="smessages"&&(document.getElementById("msgMain").innerHTML=Te(e,"student"),Se()))}).subscribe())}function an(){mt&&(y.removeChannel(mt),mt=null)}async function Go(){var e,t;await y.from("workspaces").upsert({coach_id:x.coachId,brand_name:((e=l.workspace)==null?void 0:e.brand_name)||"Akademi",brand_color:((t=l.workspace)==null?void 0:t.brand_color)||"#E8613A",onboarding_done:!1},{onConflict:"coach_id"}),l.workspace&&(l.workspace.onboarding_done=!1),ya()}window.devResetOnboarding=Go;async function ma(){const e=document.getElementById("view-dev-dashboard");e.innerHTML='<div class="sh"><h2>🖥️ Sistem Dashboard</h2></div><div class="empty"><p>Yükleniyor...</p></div>';const[t,n,a,i,o,r]=await Promise.all([y.from("users").select("id,role,created_at"),y.from("tasks").select("id,done,created_at"),y.from("exams").select("id,created_at"),y.from("messages").select("id,created_at"),y.from("tickets").select("id,status,created_at"),y.from("payments").select("id,amount,status,payment_date")]),s=t.data||[],d=n.data||[],c=a.data||[],p=i.data||[],m=o.data||[],u=r.data||[],g=s.filter(h=>h.role==="coach").length,E=s.filter(h=>h.role==="student").length,T=u.filter(h=>h.status==="completed").reduce((h,S)=>h+Number(S.amount),0),f=m.filter(h=>h.status==="open").length,$=Array.from({length:7},(h,S)=>{const I=new Date;return I.setDate(I.getDate()-6+S),O(I)}),w=$.map(h=>d.filter(S=>{var I;return(I=S.created_at)==null?void 0:I.startsWith(h)}).length),B=Math.max(...w,1);e.innerHTML=`
    <div class="sh"><h2>🖥️ Sistem Dashboard</h2>
      <div style="display:flex;gap:8px;align-items:center">
        <span style="font-size:12px;color:var(--text-dim)">${new Date().toLocaleDateString("tr-TR",{weekday:"long",day:"numeric",month:"long",year:"numeric"})}</span>
        <button class="btn btn-ghost btn-sm" onclick="devResetOnboarding()" title="Onboarding sihirbazını yeniden başlat">🧙 Sihirbazı Test Et</button>
      </div>
    </div>

    <div class="stats-row" style="margin-bottom:20px">
      <div class="stat-card"><div class="stat-label">Toplam Öğrenci</div><div class="stat-val" style="color:var(--blue)">${E}</div></div>
      <div class="stat-card"><div class="stat-label">Toplam Koç</div><div class="stat-val" style="color:var(--accent)">${g}</div></div>
      <div class="stat-card"><div class="stat-label">Toplam Görev</div><div class="stat-val">${d.length}</div><div style="font-size:11px;color:var(--green);margin-top:3px">✓ ${d.filter(h=>h.done).length} tamamlandı</div></div>
      <div class="stat-card"><div class="stat-label">Toplam Deneme</div><div class="stat-val">${c.length}</div></div>
      <div class="stat-card"><div class="stat-label">Toplam Mesaj</div><div class="stat-val">${p.length}</div></div>
      <div class="stat-card"><div class="stat-label">Toplam Gelir</div><div class="stat-val" style="color:var(--green)">${T.toLocaleString("tr-TR")} ₺</div></div>
      <div class="stat-card"><div class="stat-label">Açık Ticket</div><div class="stat-val" style="color:${f>0?"var(--red)":"var(--green)"}">${f}</div></div>
    </div>

    <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px">
      <div class="card cp">
        <div style="font-family:'Inter',sans-serif;font-size:14px;font-weight:700;margin-bottom:14px">📅 Son 7 Gün Görev Aktivitesi</div>
        <div style="display:flex;align-items:flex-end;gap:6px;height:80px">
          ${$.map((h,S)=>`<div style="flex:1;display:flex;flex-direction:column;align-items:center;gap:3px">
            <div style="font-size:10px;color:var(--text-mid);font-weight:600">${w[S]}</div>
            <div style="width:100%;background:var(--accent);border-radius:3px 3px 0 0;height:${Math.max(Math.round(w[S]/B*100),4)}%;min-height:3px;opacity:.8"></div>
            <div style="font-size:9px;color:var(--text-dim)">${new Date(h+"T12:00").toLocaleDateString("tr-TR",{day:"numeric",month:"short"})}</div>
          </div>`).join("")}
        </div>
      </div>
      <div class="card cp">
        <div style="font-family:'Inter',sans-serif;font-size:14px;font-weight:700;margin-bottom:14px">🎫 Son Ticket'lar</div>
        ${m.slice(-5).reverse().map(h=>`
          <div style="display:flex;justify-content:space-between;align-items:center;padding:7px 0;border-bottom:1px solid var(--border);font-size:12px">
            <span style="color:var(--text-mid)">#${h.id.slice(0,6)}</span>
            <span class="role-badge" style="background:${h.status==="open"?"var(--red-dim)":h.status==="resolved"?"var(--green-dim)":"var(--accent-dim)"};color:${h.status==="open"?"var(--red)":h.status==="resolved"?"var(--green)":"var(--accent)"}">${h.status}</span>
          </div>`).join("")||'<div style="font-size:12px;color:var(--text-dim)">Ticket yok</div>'}
      </div>
    </div>`}let Ye="all";function qo(e){Ye=e,We()}async function We(){const e=document.getElementById("view-dev-users"),{data:t}=await y.from("users").select("*").order("created_at"),n=new Date,a={all:(t||[]).length,coach:0,student:0,parent:0};(t||[]).forEach(s=>{a[s.role]!==void 0&&a[s.role]++});const i=Ye==="all"?t:(t||[]).filter(s=>s.role===Ye),o=[["all",`Tümü (${a.all})`],["coach",`Koçlar (${a.coach})`],["student",`Öğrenciler (${a.student})`],["parent",`Veliler (${a.parent})`]].map(([s,d])=>`<button onclick="setDevUserFilter('${s}')" style="padding:7px 16px;border-radius:99px;border:1.5px solid ${Ye===s?"var(--accent)":"var(--border)"};background:${Ye===s?"var(--accent-dim)":"var(--surface)"};color:${Ye===s?"var(--accent)":"var(--text-mid)"};font-size:12px;font-weight:700;cursor:pointer;font-family:inherit;transition:all .15s">${d}</button>`).join("");function r(s){if(s.role!=="coach"&&s.role!=="developer")return'<span style="color:var(--text-dim);font-size:11px">—</span>';const d=s.plan||"trial";if(d==="active")return'<span style="font-size:10px;font-weight:800;color:#10b981;background:rgba(16,185,129,.12);border:1px solid rgba(16,185,129,.3);border-radius:4px;padding:2px 7px">AKTİF</span>';if(d==="paused")return'<span style="font-size:10px;font-weight:700;color:#f59e0b;background:rgba(245,158,11,.12);border:1px solid rgba(245,158,11,.3);border-radius:4px;padding:2px 7px">DURAKLATILDI</span>';if(d==="cancelled")return'<span style="font-size:10px;font-weight:700;color:#ef4444;background:rgba(239,68,68,.1);border:1px solid rgba(239,68,68,.2);border-radius:4px;padding:2px 7px">İPTAL</span>';const c=s.trial_ends_at?new Date(s.trial_ends_at):new Date(new Date(s.created_at).getTime()+14*24*60*60*1e3),p=Math.ceil((c-n)/864e5);return p<=0?'<span style="font-size:10px;font-weight:700;color:#ef4444;background:rgba(239,68,68,.1);border:1px solid rgba(239,68,68,.2);border-radius:4px;padding:2px 7px">SÜRESİ DOLDU</span>':`<span style="font-size:10px;font-weight:700;color:#6366f1;background:rgba(99,102,241,.1);border:1px solid rgba(99,102,241,.2);border-radius:4px;padding:2px 7px">DENEME · ${p}g</span>`}e.innerHTML=`
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
          ${(i||[]).map(s=>`
            <tr style="border-bottom:1px solid var(--border);transition:background .15s" onmouseover="this.style.background='var(--surface2)'" onmouseout="this.style.background=''">
              <td style="padding:10px 12px;font-weight:700">${v(s.full_name)}</td>
              <td style="padding:10px 12px;color:var(--text-mid)">${v(s.username)}</td>
              <td style="padding:10px 12px"><span class="role-badge ${s.role==="coach"?"role-coach":s.role==="developer"?"role-dev":"role-student"}">${s.role}</span></td>
              <td style="padding:10px 12px">${r(s)}</td>
              <td style="padding:10px 12px;color:var(--text-dim);font-size:11px">${new Date(s.created_at).toLocaleDateString("tr-TR")}</td>
              <td style="padding:10px 12px;display:flex;gap:6px;flex-wrap:nowrap">
                ${s.role==="coach"||s.role==="developer"?`<button class="btn btn-accent btn-xs" onclick="openPlanModal('${s.id}','${v(s.full_name)}','${s.plan||"trial"}','${s.trial_ends_at||""}')">📋</button>`:""}
                <button class="btn btn-ghost btn-xs" onclick="openDevUserModal('${s.id}')">✏️</button>
                <button class="btn btn-danger btn-xs" onclick="devDeleteUser('${s.id}','${v(s.full_name)}')">🗑</button>
              </td>
            </tr>`).join("")}
        </tbody>
      </table>
    </div>`}async function Wo(e){const t=e?(await y.from("users").select("*").eq("id",e).single()).data:null;document.getElementById("smTitle").textContent=t?"Kullanıcıyı Düzenle":"Yeni Kullanıcı",document.getElementById("smId").value=e||"",document.getElementById("smName").value=(t==null?void 0:t.full_name)||"",document.getElementById("smTarget").value=(t==null?void 0:t.target)||"",document.getElementById("smUsername").value=(t==null?void 0:t.username)||"",document.getElementById("smPass").value=(t==null?void 0:t.password_hash)||"",document.getElementById("smWeekStart").value=(t==null?void 0:t.week_start)||0,document.getElementById("smProg").value=(t==null?void 0:t.progress)||0,document.getElementById("smProgVal").textContent=((t==null?void 0:t.progress)||0)+"%",document.querySelectorAll(".color-opt").forEach(a=>a.classList.toggle("sel",a.dataset.c===((t==null?void 0:t.color)||"#e8622a")));let n=document.getElementById("smRoleField");n||(n=document.createElement("div"),n.id="smRoleField",n.className="field",n.innerHTML='<label>Rol</label><select id="smRole" style="width:100%;background:var(--surface2);border:1.5px solid var(--border);border-radius:9px;padding:10px 13px;font-size:14px;font-family:inherit;color:var(--text);outline:none"><option value="student">Öğrenci</option><option value="coach">Koç</option><option value="developer">Developer</option></select>',document.getElementById("smName").closest(".modal").insertBefore(n,document.getElementById("smName").parentElement)),document.getElementById("smRole").value=(t==null?void 0:t.role)||"student",document.querySelector("#studentModal .btn-accent").setAttribute("onclick","saveStudentDev()"),G("studentModal")}async function Vo(e,t){if(await ie(`"${t}" kullanıcısını kalıcı olarak silmek istediğinizden emin misiniz?

Bu işlem geri alınamaz.`)){M(!0);try{const{data:{session:n}}=await y.auth.getSession(),a=await fetch("/api/delete-user",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${(n==null?void 0:n.access_token)||""}`},body:JSON.stringify({targetUserId:e})}),i=await a.json();if(!a.ok)throw new Error(i.error||"Sunucu hatası");b(`🗑 ${t} silindi`),We()}catch(n){b("Hata: "+n.message)}finally{M(!1)}}}function Zo(e,t,n,a){let i=document.getElementById("planMgmtModal");i||(i=document.createElement("div"),i.id="planMgmtModal",i.className="modal-bg",i.innerHTML=`<div class="modal" style="max-width:400px">
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
        <div style="font-size:11px;color:var(--text-dim);margin-top:4px">Boş bırakılırsa kayıt tarihinden +14 gün hesaplanır</div>
      </div>
      <div style="display:flex;gap:8px;margin-top:16px">
        <button class="btn btn-accent" style="flex:1;justify-content:center;padding:11px" onclick="savePlan()">Kaydet</button>
        <button class="btn btn-ghost" style="padding:11px 18px" onclick="cm('planMgmtModal')">İptal</button>
      </div>
    </div>`,document.body.appendChild(i),i.addEventListener("click",o=>{o.target===i&&i.classList.remove("open")}),document.getElementById("planStatus").addEventListener("change",function(){document.getElementById("trialEndField").style.display=this.value==="trial"?"":"none"})),document.getElementById("planModalTitle").textContent=`Plan Yönet — ${t}`,document.getElementById("planUserId").value=e,document.getElementById("planStatus").value=n||"trial",document.getElementById("trialEndField").style.display=n==="trial"||!n?"":"none",a?document.getElementById("planTrialEnd").value=a.split("T")[0]:document.getElementById("planTrialEnd").value="",G("planMgmtModal")}async function Jo(){const e=document.getElementById("planUserId").value,t=document.getElementById("planStatus").value,n=document.getElementById("planTrialEnd").value,a={plan:t};t==="trial"&&n?a.trial_ends_at=n:t!=="trial"&&(a.trial_ends_at=null),M(!0);const{error:i}=await y.from("users").update(a).eq("id",e);if(M(!1),i)return b("Hata: "+i.message);b(`Plan güncellendi: ${{trial:"Deneme",active:"Aktif",paused:"Duraklatıldı",cancelled:"İptal"}[t]||t} ✓`),q("planMgmtModal"),We()}let Je=[];async function st(){const e=document.getElementById("view-dev-resources"),{data:t}=await y.from("resources").select("*").order("resource_type,exam_type,subject,name");Je=t||[];const n=Je.filter(i=>i.resource_type!=="playlist"),a=Je.filter(i=>i.resource_type==="playlist");e.innerHTML=`
    <div class="sh"><h2>📚 Kaynak & Müfredat Yönetimi</h2>
      <div style="display:flex;gap:8px">
        <button class="btn btn-ghost btn-sm" onclick="openResourceModal(null,'book')">+ Soru Bankası</button>
        <button class="btn btn-accent btn-sm" onclick="openPlaylistModal()">▶ Playlist / Video Ekle</button>
      </div>
    </div>

    <!-- STATS -->
    <div class="stats-row" style="margin-bottom:20px">
      <div class="stat-card"><div class="stat-label">Soru Bankası</div><div class="stat-val">${n.length}</div></div>
      <div class="stat-card"><div class="stat-label">Playlist</div><div class="stat-val">${a.length}</div></div>
      <div class="stat-card"><div class="stat-label">Toplam Kaynak</div><div class="stat-val">${Je.length}</div></div>
    </div>

    <!-- PLAYLİSTLER -->
    <div style="margin-bottom:24px">
      <div style="font-family:'Inter',sans-serif;font-size:15px;font-weight:700;margin-bottom:12px;display:flex;align-items:center;gap:8px">
        ▶ Konu Anlatımı Playlistleri <span style="font-size:12px;font-weight:400;color:var(--text-dim)">${a.length} playlist</span>
      </div>
      ${a.length===0?'<div class="empty"><p>Henüz playlist eklenmemiş</p></div>':""}
      <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:10px">
        ${a.map(i=>`
          <div class="card" style="padding:14px 16px">
            <div style="display:flex;justify-content:space-between;align-items:flex-start;gap:8px">
              <div style="flex:1;min-width:0">
                <div style="font-size:13px;font-weight:700;margin-bottom:2px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${v(i.name)}</div>
                <div style="font-size:11px;color:var(--text-dim)">${v(i.publisher)} · ${i.exam_type} ${i.subject} · ${(i.tests||[]).length} video</div>
              </div>
              <div style="display:flex;gap:4px;flex-shrink:0">
                <button class="btn btn-ghost btn-xs" onclick="openResourceModal('${i.id}','playlist')">✏️</button>
                <button class="btn btn-danger btn-xs" onclick="devDeleteResource('${i.id}')" style="opacity:.5" onmouseover="this.style.opacity=1" onmouseout="this.style.opacity=.5">🗑</button>
              </div>
            </div>
          </div>`).join("")}
      </div>
    </div>

    <!-- SORU BANKALARI -->
    <div>
      <div style="font-family:'Inter',sans-serif;font-size:15px;font-weight:700;margin-bottom:12px;display:flex;align-items:center;gap:8px">
        📚 Soru Bankaları <span style="font-size:12px;font-weight:400;color:var(--text-dim)">${n.length} kitap</span>
      </div>
      ${n.length===0?'<div class="empty"><p>Henüz kitap eklenmemiş</p></div>':""}
      <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:10px">
        ${n.map(i=>`
          <div class="card" style="padding:14px 16px">
            <div style="display:flex;justify-content:space-between;align-items:flex-start;gap:8px">
              <div style="flex:1;min-width:0">
                <div style="font-size:11px;color:var(--accent);font-weight:700;margin-bottom:2px">${i.exam_type} · ${i.subject}</div>
                <div style="font-size:13px;font-weight:700;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${v(i.name)}</div>
                <div style="font-size:11px;color:var(--text-dim);margin-top:2px">${v(i.publisher)} · ${(i.tests||[]).length} test</div>
              </div>
              <div style="display:flex;gap:4px;flex-shrink:0">
                <span style="font-size:10px;padding:2px 7px;border-radius:99px;background:${i.active?"var(--green-dim)":"var(--red-dim)"};color:${i.active?"var(--green)":"var(--red)"}">${i.active?"Aktif":"Pasif"}</span>
                <button class="btn btn-ghost btn-xs" onclick="openResourceModal('${i.id}','book')">✏️</button>
                <button class="btn btn-danger btn-xs" onclick="devDeleteResource('${i.id}')" style="opacity:.5" onmouseover="this.style.opacity=1" onmouseout="this.style.opacity=.5">🗑</button>
              </div>
            </div>
          </div>`).join("")}
      </div>
    </div>`}function Xo(){let e=document.getElementById("playlistModal");e||(e=document.createElement("div"),e.id="playlistModal",e.className="modal-bg",document.body.appendChild(e),e.addEventListener("click",t=>{t.target===e&&e.classList.remove("open")})),e.innerHTML=`<div class="modal modal-lg">
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
  </div>`,G("playlistModal")}async function Qo(){const e=document.getElementById("ytPlaylistUrl").value.trim(),t=document.getElementById("ytStatus");if(!e)return t.innerHTML='<span style="color:var(--red)">⚠️ Playlist URL giriniz</span>';const n=e.match(/[?&]list=([^&]+)/);if(!n)return t.innerHTML='<span style="color:var(--red)">⚠️ Geçersiz URL — "list=..." parametresi bulunamadı</span>';const a=n[1];t.innerHTML="⏳ Yükleniyor...";try{let i=[],o="";do{let r=`/api/youtube?playlistId=${a}`;o&&(r+=`&pageToken=${o}`);const s=await fetch(r);if(!s.ok){const c=await s.json();throw new Error(c.error||"Oynatma listesi yüklenemedi.")}const d=await s.json();d.items&&(i=i.concat(d.items)),o=d.nextPageToken||""}while(o&&i.length<200);document.getElementById("plVideos").value=i.map(r=>`${r.title} | ${r.url} | ${r.duration}`).join(`
`),t.innerHTML=`<span style="color:var(--green)">✓ ${i.length} video yüklendi!</span>`}catch(i){t.innerHTML=`<span style="color:var(--red)">⚠️ Hata: ${i.message}</span>`}}async function es(){const e=document.getElementById("plName").value.trim(),t=document.getElementById("plSubject").value.trim(),n=document.getElementById("plPublisher").value.trim();if(!e||!t||!n)return b("Tüm alanları doldurun!");const a=document.getElementById("plVideos").value.split(`
`).map(s=>s.trim()).filter(Boolean);if(!a.length)return b("En az 1 video girin!");const i=a.map(s=>{const d=s.split("|").map(c=>c.trim());return{label:d[0]||"",url:d[1]||"",topic:"",soru:parseInt(d[2])||0}}).filter(s=>s.label),o={exam_type:document.getElementById("plExam").value,subject:t,publisher:n,name:e,year:new Date().getFullYear(),tests:i,active:!0,resource_type:"playlist"},{error:r}=await y.from("resources").insert(o);if(r)return b("Hata: "+r.message);b(`✓ "${e}" eklendi — ${i.length} video`),q("playlistModal"),st()}function ts(e,t="book"){const n=e?Je.find(r=>r.id===e):null;let a=document.getElementById("resourceModal");a||(a=document.createElement("div"),a.id="resourceModal",a.className="modal-bg",document.body.appendChild(a),a.addEventListener("click",r=>{r.target===a&&a.classList.remove("open")}));const i=((n==null?void 0:n.resource_type)||t)==="playlist";a.innerHTML=`<div class="modal modal-lg">
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
  </div>`,document.getElementById("rmExam").value=(n==null?void 0:n.exam_type)||"TYT",document.getElementById("rmSubject").value=(n==null?void 0:n.subject)||"",document.getElementById("rmPublisher").value=(n==null?void 0:n.publisher)||"",document.getElementById("rmName").value=(n==null?void 0:n.name)||"",document.getElementById("rmActive").value=String((n==null?void 0:n.active)!==!1);const o=(n==null?void 0:n.tests)||[];i?document.getElementById("rmTests").value=o.map(r=>`${r.label||r} | ${r.url||""} | ${r.soru||0}`).join(`
`):document.getElementById("rmTests").value=o.map(r=>`${r.label||r} | ${r.soru||0}`).join(`
`),G("resourceModal")}async function ns(){const e=document.getElementById("rmName").value.trim(),t=document.getElementById("rmSubject").value.trim();if(!e||!t)return b("Ad ve ders zorunlu!");const n=document.getElementById("rmId").value,a=document.getElementById("rmType").value==="playlist",i=document.getElementById("rmTests").value.split(`
`).map(s=>s.trim()).filter(Boolean);let o=[];a?o=i.map(s=>{const d=s.split("|").map(c=>c.trim());return{label:d[0]||"",url:d[1]||"",topic:"",soru:parseInt(d[2])||0}}):o=i.map(s=>{const d=s.split("|").map(c=>c.trim());return{label:d[0]||"",soru:parseInt(d[1])||0}});const r={exam_type:document.getElementById("rmExam").value,subject:t,publisher:document.getElementById("rmPublisher").value.trim(),year:new Date().getFullYear(),name:e,tests:o,active:document.getElementById("rmActive").value==="true",resource_type:a?"playlist":"book"};n?(await y.from("resources").update(r).eq("id",n),b("Güncellendi ✓")):(await y.from("resources").insert(r),b("Kaynak eklendi ✓")),q("resourceModal"),st()}async function as(e){await ie("Bu kaynağı silmek istediğinizden emin misiniz?")&&(await y.from("resources").delete().eq("id",e),b("Silindi"),st())}async function rt(){const e=document.getElementById("view-dev-finance"),[{data:t},{data:n}]=await Promise.all([y.from("subscriptions").select("*,users(full_name,color)").order("created_at",{ascending:!1}),y.from("payments").select("*,users(full_name)").order("payment_date",{ascending:!1}).limit(20)]),a=(n||[]).filter(o=>o.status==="completed").reduce((o,r)=>o+Number(r.amount),0),i=(t||[]).filter(o=>o.status==="active").length;e.innerHTML=`
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
        ${(t||[]).map(o=>{var r;return`
          <div style="display:flex;justify-content:space-between;align-items:center;padding:10px 0;border-bottom:1px solid var(--border)">
            <div>
              <div style="font-size:13px;font-weight:700">${v(((r=o.users)==null?void 0:r.full_name)||"?")}</div>
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
        ${(n||[]).slice(0,10).map(o=>{var r;return`
          <div style="display:flex;justify-content:space-between;align-items:center;gap:10px;padding:8px 0;border-bottom:1px solid var(--border)">
            <div style="min-width:0">
              <div style="font-size:12px;font-weight:700">${v(((r=o.users)==null?void 0:r.full_name)||"?")}</div>
              <div style="font-size:11px;color:var(--text-dim)">${o.payment_date} · ${o.method}</div>
            </div>
            <div style="display:flex;align-items:center;gap:8px;flex-shrink:0">
              <div style="font-size:13px;font-weight:700;color:var(--green)">${Number(o.amount).toLocaleString("tr-TR")} ₺</div>
              ${o.verified?'<span style="font-size:10px;font-weight:800;color:var(--green);background:var(--green-dim);border:1px solid rgba(5,150,105,.3);border-radius:99px;padding:3px 9px;white-space:nowrap">✓ Doğrulandı</span>':`<button class="btn btn-green btn-xs" onclick="verifyPayment('${o.id}')" title="Havaleyi kontrol ettim, ödemeyi onayla">Ödemeyi Onayla</button>`}
            </div>
          </div>`}).join("")||'<div class="empty"><p>Ödeme yok</p></div>'}
      </div>
    </div>`}async function is(e){const{error:t}=await y.from("payments").update({verified:!0}).eq("id",e);if(t){b("Onaylanamadı: "+t.message);return}b("✓ Ödeme doğrulandı"),rt()}function os(){let e=document.getElementById("paymentModal");e||(e=document.createElement("div"),e.id="paymentModal",e.className="modal-bg",e.innerHTML=`<div class="modal"><button class="modal-close" onclick="cm('paymentModal')">×</button>
      <h2>Ödeme Ekle</h2>
      <div class="field"><label>Öğrenci</label><select id="pmStudent">${l.students.map(t=>`<option value="${t.id}">${v(t.name)}</option>`).join("")}</select></div>
      <div class="field-row">
        <div class="field"><label>Tutar (₺)</label><input type="number" id="pmAmount" placeholder="1500"></div>
        <div class="field"><label>Yöntem</label><select id="pmMethod"><option>nakit</option><option>havale</option><option>kart</option><option>iyzico</option></select></div>
      </div>
      <div class="field"><label>Tarih</label><input type="date" id="pmDate" value="${O(new Date)}"></div>
      <div class="field"><label>Açıklama</label><input id="pmDesc" placeholder="Mayıs ayı ücreti"></div>
      <button class="btn btn-accent" style="width:100%;justify-content:center;padding:12px;margin-top:4px" onclick="savePayment()">Kaydet</button>
    </div>`,document.body.appendChild(e),e.addEventListener("click",t=>{t.target===e&&e.classList.remove("open")})),document.getElementById("pmStudent").innerHTML=l.students.map(t=>`<option value="${t.id}">${v(t.name)}</option>`).join(""),G("paymentModal")}async function ss(){const e=parseFloat(document.getElementById("pmAmount").value);if(!e)return b("Tutar girin!");await y.from("payments").insert({student_id:document.getElementById("pmStudent").value,amount:e,method:document.getElementById("pmMethod").value,payment_date:document.getElementById("pmDate").value,description:document.getElementById("pmDesc").value,status:"completed"}),b("Ödeme kaydedildi ✓"),q("paymentModal"),rt()}function rs(){let e=document.getElementById("subModal");e||(e=document.createElement("div"),e.id="subModal",e.className="modal-bg",e.innerHTML=`<div class="modal"><button class="modal-close" onclick="cm('subModal')">×</button>
      <h2>Abonelik Ekle</h2>
      <div class="field"><label>Öğrenci</label><select id="sbStudent"></select></div>
      <div class="field-row">
        <div class="field"><label>Plan</label><select id="sbPlan"><option value="monthly">Aylık</option><option value="quarterly">3 Aylık</option><option value="yearly">Yıllık</option></select></div>
        <div class="field"><label>Aylık Tutar (₺)</label><input type="number" id="sbAmount" placeholder="1500"></div>
      </div>
      <div class="field-row">
        <div class="field"><label>Başlangıç</label><input type="date" id="sbStart" value="${O(new Date)}"></div>
        <div class="field"><label>Bitiş (isteğe bağlı)</label><input type="date" id="sbEnd"></div>
      </div>
      <div class="field"><label>Durum</label><select id="sbStatus"><option value="active">Aktif</option><option value="trial">Deneme</option><option value="paused">Durduruldu</option><option value="cancelled">İptal</option></select></div>
      <div class="field"><label>Not</label><input id="sbNotes" placeholder="..."></div>
      <button class="btn btn-accent" style="width:100%;justify-content:center;padding:12px;margin-top:4px" onclick="saveSub()">Kaydet</button>
    </div>`,document.body.appendChild(e),e.addEventListener("click",t=>{t.target===e&&e.classList.remove("open")})),document.getElementById("sbStudent").innerHTML=l.students.map(t=>`<option value="${t.id}">${v(t.name)}</option>`).join(""),G("subModal")}async function ls(){const e=parseFloat(document.getElementById("sbAmount").value);if(!e)return b("Tutar girin!");await y.from("subscriptions").insert({student_id:document.getElementById("sbStudent").value,plan:document.getElementById("sbPlan").value,amount:e,start_date:document.getElementById("sbStart").value,end_date:document.getElementById("sbEnd").value||null,status:document.getElementById("sbStatus").value,notes:document.getElementById("sbNotes").value}),b("Abonelik eklendi ✓"),q("subModal"),rt()}async function lt(){const e=document.getElementById("view-dev-announce"),{data:t}=await y.from("announcements").select("*").order("created_at",{ascending:!1}),n={info:"var(--blue)",warning:"var(--accent)",success:"var(--green)",urgent:"var(--red)"};e.innerHTML=`
    <div class="sh"><h2>📣 Duyuru Yönetimi</h2>
      <button class="btn btn-accent" onclick="openAnnounceModal()">+ Duyuru Ekle</button>
    </div>
    <div style="font-size:13px;color:var(--text-mid);margin-bottom:16px">Aktif duyurular tüm kullanıcıların ana ekranında gösterilir.</div>
    ${(t||[]).length===0?'<div class="empty"><p>Henüz duyuru yok</p></div>':""}
    ${(t||[]).map(a=>`
      <div class="card" style="padding:16px 20px;margin-bottom:10px;border-left:3px solid ${n[a.type]||"var(--accent)"}">
        <div style="display:flex;justify-content:space-between;align-items:flex-start;gap:12px">
          <div style="flex:1">
            <div style="font-family:'Inter',sans-serif;font-size:15px;font-weight:700;margin-bottom:4px">${v(a.title)}</div>
            <div style="font-size:13px;color:var(--text-mid);margin-bottom:8px">${v(a.body)}</div>
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
      </div>`).join("")}`}function ds(){let e=document.getElementById("announceModal");e||(e=document.createElement("div"),e.id="announceModal",e.className="modal-bg",e.innerHTML=`<div class="modal"><button class="modal-close" onclick="cm('announceModal')">×</button>
      <h2>Yeni Duyuru</h2>
      <div class="field"><label>Başlık</label><input id="anTitle" placeholder="Önemli Güncelleme"></div>
      <div class="field"><label>İçerik</label><textarea id="anBody" placeholder="Duyuru metni..."></textarea></div>
      <div class="field-row">
        <div class="field"><label>Tür</label><select id="anType"><option value="info">Bilgi</option><option value="warning">Uyarı</option><option value="success">Başarı</option><option value="urgent">Acil</option></select></div>
        <div class="field"><label>Hedef</label><select id="anTarget"><option value="all">Herkes</option><option value="students">Öğrenciler</option><option value="coaches">Koçlar</option></select></div>
      </div>
      <button class="btn btn-accent" style="width:100%;justify-content:center;padding:12px;margin-top:4px" onclick="saveAnnounce()">Yayınla</button>
    </div>`,document.body.appendChild(e),e.addEventListener("click",t=>{t.target===e&&e.classList.remove("open")})),G("announceModal")}async function cs(){const e=document.getElementById("anTitle").value.trim(),t=document.getElementById("anBody").value.trim();if(!e||!t)return b("Başlık ve içerik zorunlu!");await y.from("announcements").insert({title:e,body:t,type:document.getElementById("anType").value,target:document.getElementById("anTarget").value,active:!0}),b("Duyuru yayınlandı ✓"),q("announceModal"),lt()}async function ps(e,t){await y.from("announcements").update({active:t}).eq("id",e),lt()}async function ms(e){await ie("Bu duyuruyu silmek istediğinizden emin misiniz?")&&(await y.from("announcements").delete().eq("id",e),b("Silindi"),lt())}let Oe=null,xt=null,me=null,Dt=null,Ke=[],ge=[],_e="welcome";async function Ve(){const e=document.getElementById("view-dev-tickets");if(!e)return;const{data:t,error:n}=await y.from("tickets").select("*,users!tickets_user_id_fkey(full_name,role)").order("updated_at",{ascending:!1});Ke=t||[],!me&&Ke.length>0&&(me=Ke[0].id),e.innerHTML=`
    <div class="sh" style="margin-bottom:12px">
      <h2>🎫 Destek & Geri Bildirim Masası</h2>
    </div>

    <div style="display: grid; grid-template-columns: 280px 1fr; gap: 16px; height: 600px; max-height: calc(100vh - 180px); margin-top: 10px">
      <!-- Left Pane: Chats List -->
      <div style="overflow-y: auto; background: var(--surface2); border: 1px solid var(--border); border-radius: 12px; display: flex; flex-direction: column; gap: 8px; padding: 12px">
        <div style="font-size: 11px; font-weight:800; color:var(--text-dim); text-transform:uppercase; letter-spacing:.5px; margin-bottom:4px">Konuşmalar</div>
        ${Ke.length===0?`
          <div style="text-align:center; padding:40px 10px; color:var(--text-dim); font-size:12px">Kayıtlı destek talebi yok.</div>
        `:Ke.map(a=>{var g,E,T;const i=a.id===me,o=((g=a.users)==null?void 0:g.full_name)||"Kullanıcı",r=((E=a.users)==null?void 0:E.role)==="coach"?"KOÇ":((T=a.users)==null?void 0:T.role)==="parent"?"VELİ":"ÖĞRENCİ";let s="Mesaj yok";try{const f=JSON.parse(a.body);Array.isArray(f)&&f.length>0?s=f[f.length-1].text:s=a.body}catch{s=a.body}const d=s.length>28?s.slice(0,26)+"...":s,c=a.status==="open"?'<span style="font-size:9px; background:#ef444422; color:#ef4444; padding:2px 6px; border-radius:99px; font-weight:700">Yeni</span>':a.status==="resolved"?'<span style="font-size:9px; background:#10b98122; color:#10b981; padding:2px 6px; border-radius:99px; font-weight:700">Cevaplandı</span>':'<span style="font-size:9px; background:var(--border2); color:var(--text-dim); padding:2px 6px; border-radius:99px; font-weight:700">Kapatıldı</span>',p=i?"var(--accent-dim)":"var(--surface)",m=i?"1.5px solid var(--accent)":"1px solid var(--border)",u=i?"10px 11px":"10px 12px";return`
            <div onclick="selectDevTicket('${a.id}')" style="background:${p}; border:${m}; border-radius:10px; padding:${u}; cursor:pointer; display:flex; flex-direction:column; gap:4px; transition:all .15s">
              <div style="display:flex; justify-content:space-between; align-items:center">
                <span style="font-weight:700; font-size:12px; color:var(--text); overflow:hidden; text-overflow:ellipsis; white-space:nowrap; max-width:140px">${v(o)}</span>
                <span style="font-size:9px; font-weight:800; color:var(--text-dim)">${r}</span>
              </div>
              <div style="font-size:11px; color:var(--text-mid); overflow:hidden; text-overflow:ellipsis; white-space:nowrap">${v(d)}</div>
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
  `,vs(),Dt&&clearInterval(Dt),Dt=setInterval(gs,4e3)}function us(e){me=e,Ve()}async function gs(){if(!me||!document.getElementById("devChatArea"))return;const{data:t,error:n}=await y.from("tickets").select("*,users!tickets_user_id_fkey(full_name,role)").eq("id",me).single();if(n||!t)return;let a=[];try{a=JSON.parse(t.body),Array.isArray(a)||(a=[{sender:"user",text:t.body,time:t.created_at}])}catch{a=[{sender:"user",text:t.body,time:t.created_at}]}const i=document.getElementById("devChatMessages");if(i){const o=i.scrollTop,r=i.scrollHeight-i.clientHeight-o<40;i.innerHTML=a.map(s=>{const d=s.sender==="emin",c=d?"Kurucu / Destek":s.sender==="ai"?"Yapay Zeka":s.name||"Kullanıcı",p=d?"var(--blue)":s.sender==="ai"?"var(--surface2)":"var(--accent)",m=d?"#fff":s.sender==="ai"?"var(--text)":"var(--on-accent)",u=d?"flex-end":"flex-start",g=d?"14px 14px 4px 14px":"14px 14px 14px 4px",E=new Date(s.time).toLocaleTimeString("tr-TR",{hour:"2-digit",minute:"2-digit"});return`
        <div style="align-self:${u}; max-width:80%; display:flex; flex-direction:column; align-items:${d?"flex-end":"flex-start"}">
          <div style="font-size:10px; color:var(--text-dim); margin-bottom:3px; font-weight:600">${c}</div>
          <div style="padding:10px 14px; border-radius:${g}; background:${p}; color:${m}; font-size:13px; line-height:1.5; word-wrap:break-word; white-space:pre-wrap">${v(s.text)}</div>
          <div style="font-size:9px; color:var(--text-dim); margin-top:4px">${E}</div>
        </div>
      `}).join(""),r&&(i.scrollTop=i.scrollHeight)}}function vs(){var r,s,d;const e=document.getElementById("devChatArea");if(!e)return;const t=Ke.find(c=>c.id===me);if(!t){e.innerHTML=`
      <div style="flex:1; display:flex; flex-direction:column; align-items:center; justify-content:center; color:var(--text-dim); padding:20px; text-align:center">
        <div style="font-size:48px; margin-bottom:12px">🎫</div>
        <div style="font-weight:700">Aktif Sohbet Seçilmedi</div>
        <div style="font-size:12px; margin-top:4px">Soldaki listeden bir destek sohbeti seçerek yanıtlayabilirsiniz.</div>
      </div>
    `;return}const n=((r=t.users)==null?void 0:r.full_name)||"Kullanıcı",a=((s=t.users)==null?void 0:s.role)==="coach"?"KOÇ":((d=t.users)==null?void 0:d.role)==="parent"?"VELİ":"ÖĞRENCİ";let i=[];try{i=JSON.parse(t.body),Array.isArray(i)||(i=[{sender:"user",text:t.body,time:t.created_at}])}catch{i=[{sender:"user",text:t.body,time:t.created_at}]}e.innerHTML=`
    <!-- Active Chat Header -->
    <div style="padding:14px 20px; border-bottom: 1px solid var(--border); display:flex; justify-content:space-between; align-items:center; background:var(--surface2)">
      <div>
        <div style="font-weight:800; font-size:14px; color:var(--text)">${v(n)} <span style="font-size:10px; font-weight:700; color:var(--text-dim); margin-left:6px">${a}</span></div>
        <div style="font-size:11px; color:var(--text-mid); margin-top:2px">Konu: ${v(t.subject)}</div>
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
      ${i.map(c=>{const p=c.sender==="emin",m=p?"Kurucu / Destek":c.sender==="ai"?"Yapay Zeka":c.name||"Kullanıcı",u=p?"var(--blue)":c.sender==="ai"?"var(--surface2)":"var(--accent)",g=p?"#fff":c.sender==="ai"?"var(--text)":"var(--on-accent)",E=p?"flex-end":"flex-start",T=p?"14px 14px 4px 14px":"14px 14px 14px 4px",f=new Date(c.time).toLocaleTimeString("tr-TR",{hour:"2-digit",minute:"2-digit"});return`
          <div style="align-self:${E}; max-width:80%; display:flex; flex-direction:column; align-items:${p?"flex-end":"flex-start"}">
            <div style="font-size:10px; color:var(--text-dim); margin-bottom:3px; font-weight:600">${m}</div>
            <div style="padding:10px 14px; border-radius:${T}; background:${u}; color:${g}; font-size:13px; line-height:1.5; word-wrap:break-word; white-space:pre-wrap">${v(c.text)}</div>
            <div style="font-size:9px; color:var(--text-dim); margin-top:4px">${f}</div>
          </div>
        `}).join("")}
    </div>

    <!-- Footer Reply Input -->
    <div style="padding:12px 16px; border-top:1px solid var(--border); display:flex; gap:8px; background:var(--surface2); align-items:flex-end">
      <textarea id="devReplyInput" placeholder="Sohbete yanıt yazın..." rows="1" style="flex:1; background:var(--surface); border:1px solid var(--border); border-radius:12px; padding:10px 14px; font-size:13px; font-family:inherit; color:var(--text); resize:none; max-height:80px; outline:none" onkeydown="if(event.key==='Enter'&&!event.shiftKey){event.preventDefault();sendDevReply()}"></textarea>
      <button class="btn btn-accent" onclick="sendDevReply()" style="padding:8px 16px; font-size:13px; border-radius:10px; align-self:stretch; justify-content:center">Gönder</button>
    </div>
  `;const o=document.getElementById("devChatMessages");o&&(o.scrollTop=o.scrollHeight)}async function fs(){const e=document.getElementById("devReplyInput"),t=e.value.trim();if(!t||!me)return;e.value="",M(!0);const{data:n}=await y.from("tickets").select("body").eq("id",me).single();let a=[];if(n&&n.body)try{a=JSON.parse(n.body)}catch{a=[{sender:"user",text:n.body,time:new Date().toISOString()}]}const i={sender:"emin",text:t,time:new Date().toISOString(),name:"Kurucu / Destek"};a.push(i);const{error:o}=await y.from("tickets").update({body:JSON.stringify(a),reply:t,status:"resolved",updated_at:new Date().toISOString()}).eq("id",me);if(M(!1),o){b("Hata: "+o.message);return}b("Yanıt gönderildi ✓"),Ve()}async function ys(e,t){await y.from("tickets").update({status:t,updated_at:new Date().toISOString()}).eq("id",e),b("Durum güncellendi ✓"),Ve()}async function xs(e){await ie("Bu talebi silmek istediğinizden emin misiniz?")&&(await y.from("tickets").delete().eq("id",e),b("Silindi"),me=null,Ve())}function bs(){It()}async function It(){let e=document.getElementById("supportChatModal");e||(e=document.createElement("div"),e.id="supportChatModal",e.className="modal-bg",e.style.zIndex="99999999",e.innerHTML=`
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
    `,document.body.appendChild(e),e.addEventListener("click",t=>{var a;const n=(a=document.getElementById("trialExpiredModal"))==null?void 0:a.classList.contains("open");t.target===e&&!n&&ua()})),G("supportChatModal"),await bt(),Oe&&clearInterval(Oe),Oe=setInterval(bt,4e3)}function ua(){q("supportChatModal"),Oe&&(clearInterval(Oe),Oe=null)}async function bt(){var o,r;const e=(o=x.dbUser)==null?void 0:o.id;if(!e)return;const t=document.getElementById("supportMessages");if(!t)return;const{data:n,error:a}=await y.from("tickets").select("*").eq("user_id",e).eq("status","open").order("created_at",{ascending:!1}).limit(1);if(a){console.error("Error fetching ticket:",a);return}const i=n&&n[0];if(i){xt=i.id,_e="emin";const s=document.getElementById("supportStatusLabel");s&&(s.textContent="● Kurucu / Destek Ekibi");let d=[];try{d=JSON.parse(i.body),Array.isArray(d)||(d=[{sender:"user",text:i.body,time:i.created_at}])}catch{d=[{sender:"user",text:i.body,time:i.created_at}]}i.reply&&((r=d[d.length-1])==null?void 0:r.text)!==i.reply&&d.push({sender:"emin",text:i.reply,time:i.updated_at}),tt(d)}else if(_e==="welcome"){const s=document.getElementById("supportStatusLabel");s&&(s.textContent="● Çevrimiçi Asistan"),t.innerHTML=`
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
      `}else if(_e==="ai"){const s=document.getElementById("supportStatusLabel");s&&(s.textContent="● Yapay Zeka"),tt(ge)}}function tt(e){const t=document.getElementById("supportMessages");if(!t)return;const n=t.scrollTop,a=t.scrollHeight-t.clientHeight-n<40;t.innerHTML=e.map(i=>{const o=i.sender==="user",r=o?"Siz":i.sender==="ai"?"Yapay Zeka Asistanı":"Kurucu / Destek Ekibi",s=o?"var(--accent)":"var(--surface2)",d=o?"none":"1px solid var(--border)",c=o?"var(--on-accent)":"var(--text)",p=o?"flex-end":"flex-start",m=o?"14px 14px 4px 14px":"14px 14px 14px 4px",u=new Date(i.time).toLocaleTimeString("tr-TR",{hour:"2-digit",minute:"2-digit"});return`
      <div style="align-self:${p};max-width:80%;display:flex;flex-direction:column;align-items:${o?"flex-end":"flex-start"}">
        <div style="font-size:10px;color:var(--text-dim);margin-bottom:3px;font-weight:600">${r}</div>
        <div style="padding:10px 14px;border-radius:${m};background:${s};border:${d};color:${c};font-size:13px;line-height:1.5;word-wrap:break-word;white-space:pre-wrap">${v(i.text)}</div>
        <div style="font-size:9px;color:var(--text-dim);margin-top:4px">${u}</div>
      </div>
    `}).join(""),a&&(t.scrollTop=t.scrollHeight)}function hs(){_e="ai",ge=[{sender:"ai",text:"Merhaba! Ben Rostrum Akademi Yapay Zeka Asistanıyım. 🤖 Size nasıl yardımcı olabilirim?",time:new Date().toISOString()}],tt(ge)}function ks(){_e="emin_start";const e=document.getElementById("supportMessages");e&&(e.innerHTML=`
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
    `)}async function ws(){var c,p;const e=document.getElementById("eminSubject"),t=document.getElementById("eminInitialMessage"),n=e?e.value.trim():"Müşteri Destek Sohbeti",a=t?t.value.trim():"";if(!a)return b("Mesaj boş olamaz!");const i=(c=x.dbUser)==null?void 0:c.id,o=((p=x.dbUser)==null?void 0:p.full_name)||"Kullanıcı",r={sender:"user",text:a,time:new Date().toISOString(),name:o};M(!0);const{data:s,error:d}=await y.from("tickets").insert({user_id:i,subject:n,body:JSON.stringify([r]),category:"emin",status:"open"}).select().single();if(M(!1),d){b("Hata: "+d.message);return}xt=s.id,_e="emin",b("Talebiniz destek ekibine iletildi ✓"),await bt()}async function $s(){var n;const e=document.getElementById("supportInput"),t=e.value.trim();if(t){if(e.value="",_e==="ai"){const a={sender:"user",text:t,time:new Date().toISOString()};ge.push(a),tt(ge);const i=document.getElementById("supportTyping");i&&(i.style.display="flex");try{const o=(window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1","/api/ai-chat"),r=ge.slice(-10).map(c=>({role:c.sender==="user"?"user":"assistant",content:c.text})),s=await fetch(o,{method:"POST",headers:await ht(),body:JSON.stringify({messages:r,context:{},userRole:"parent"})});let d="";s.ok?d=(await s.json()).reply:d=await Ee(t,{},x.role||"coach"),ge.push({sender:"ai",text:d,time:new Date().toISOString()})}catch{try{const r=await Ee(t,{},x.role||"coach");ge.push({sender:"ai",text:r,time:new Date().toISOString()})}catch{ge.push({sender:"ai",text:"Üzgünüm, şu anda yanıt veremiyorum. Lütfen daha sonra tekrar deneyin veya doğrudan destek ekibimize mesaj gönderin.",time:new Date().toISOString()})}}finally{i&&(i.style.display="none"),tt(ge)}}else if(_e==="emin"){const a=((n=x.dbUser)==null?void 0:n.full_name)||"Kullanıcı",i={sender:"user",text:t,time:new Date().toISOString(),name:a};M(!0);const{data:o}=await y.from("tickets").select("body").eq("id",xt).single();let r=[];if(o&&o.body)try{r=JSON.parse(o.body)}catch{r=[{sender:"user",text:o.body,time:new Date().toISOString(),name:a}]}r.push(i);const{error:s}=await y.from("tickets").update({body:JSON.stringify(r),status:"open",updated_at:new Date().toISOString()}).eq("id",xt);if(M(!1),s){b("Gönderim hatası: "+s.message);return}await bt()}}}async function ga(){const{data:e}=await y.from("announcements").select("*").eq("active",!0),t=x.role,n=(e||[]).filter(o=>o.target==="all"||o.target==="students"&&t==="student"||o.target==="coaches"&&t==="coach");if(!n.length)return;const a={info:"var(--blue)",warning:"var(--accent)",success:"var(--green)",urgent:"var(--red)"},i=document.createElement("div");i.style.cssText="position:fixed;top:64px;right:16px;z-index:400;display:flex;flex-direction:column;gap:8px;max-width:340px",i.id="announceBanner",n.slice(0,3).forEach(o=>{const r=document.createElement("div");r.style.cssText=`background:var(--surface);border:1px solid var(--border);border-left:3px solid ${a[o.type]||"var(--accent)"};border-radius:10px;padding:12px 14px;box-shadow:var(--shadow);animation:fadeUp .3s ease`,r.innerHTML=`<div style="display:flex;justify-content:space-between;align-items:flex-start;gap:8px">
      <div><div style="font-size:13px;font-weight:700;margin-bottom:3px">${v(o.title)}</div><div style="font-size:12px;color:var(--text-mid)">${v(o.body)}</div></div>
      <button onclick="this.closest('div[style]').remove()" style="background:none;border:none;cursor:pointer;color:var(--text-dim);font-size:16px;flex-shrink:0">×</button>
    </div>`,i.appendChild(r)}),document.body.appendChild(i),setTimeout(()=>i.remove(),8e3)}(()=>{const e=document.createElement("style");e.textContent=".role-dev{background:rgba(192,132,252,.15);color:#c084fc;}",document.head.appendChild(e)})();function va(e){return`ra_ob_${x.coachId}_${e}`}function Yt(e){return localStorage.getItem(va(e))==="1"}function _s(e){localStorage.setItem(va(e),"1"),fa(),["student","program","report"].every(n=>Yt(n))&&Es()}async function Es(){const e=document.getElementById("obWidget");e&&(e.innerHTML=`<div style="padding:20px;text-align:center">
      <div style="font-size:36px;margin-bottom:8px">🎉</div>
      <div style="font-weight:800;color:var(--text);margin-bottom:4px">Harika iş!</div>
      <div style="font-size:12px;color:var(--text-mid)">İlk adımları tamamladınız.</div>
    </div>`,setTimeout(()=>e.remove(),3e3)),await y.from("workspaces").update({onboarding_done:!0}).eq("coach_id",x.coachId),l.workspace&&(l.workspace.onboarding_done=!0)}function fa(){const e=document.getElementById("obWidget");if(!e)return;const t=[{id:"student",icon:"👤",label:"İlk öğrencinizi ekleyin",action:"window.openStudentModal?.()",btnLabel:"Ekle →"},{id:"program",icon:"📅",label:"Haftalık program oluşturun",action:"switchTab('program')",btnLabel:"Git →"},{id:"report",icon:"📄",label:"İlk raporunuzu gönderin",action:"switchTab('program')",btnLabel:"Git →"}],n=t.filter(i=>Yt(i.id)).length,a=Math.round((n+1)/(t.length+1)*100);e.querySelector(".ob-body").innerHTML=t.map(i=>{const o=Yt(i.id);return`<div style="display:flex;align-items:center;gap:10px;padding:9px 0;border-bottom:1px solid var(--border)">
      <div style="width:22px;height:22px;border-radius:50%;border:2px solid ${o?"var(--green)":"var(--border2)"};background:${o?"var(--green)":"transparent"};display:flex;align-items:center;justify-content:center;flex-shrink:0">
        ${o?'<svg width="10" height="8" viewBox="0 0 10 8"><path d="M1 4L4 7L9 1" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/></svg>':""}
      </div>
      <div style="flex:1;font-size:12px;color:${o?"var(--text-dim)":"var(--text)"};${o?"text-decoration:line-through":""}">
        <span style="margin-right:5px">${i.icon}</span>${i.label}
      </div>
      ${o?"":`<button onclick="${i.action};window._obMarkDone?.('${i.id}')" style="font-size:11px;font-weight:700;color:var(--accent);background:none;border:none;cursor:pointer;white-space:nowrap;padding:0">${i.btnLabel}</button>`}
    </div>`}).join(""),e.querySelector(".ob-progress-bar-inner").style.width=a+"%",e.querySelector(".ob-progress-text").textContent=`${n+1}/${t.length+1} tamamlandı`}function Ts(){var n;if(document.getElementById("obWidget"))return;const e=((n=l.workspace)==null?void 0:n.brand_color)||"var(--accent)",t=document.createElement("div");t.id="obWidget",t.style.cssText="position:fixed;bottom:90px;right:20px;width:290px;background:var(--surface);border:1px solid var(--border2);border-radius:16px;box-shadow:var(--shadow-lg);z-index:4000;overflow:hidden",t.innerHTML=`
    <div style="background:${e};padding:12px 14px;display:flex;align-items:center;justify-content:space-between">
      <div>
        <div style="font-size:13px;font-weight:800;color:#fff">Başlangıç Görevleri</div>
        <div style="font-size:10px;color:rgba(255,255,255,.7);margin-top:1px" class="ob-progress-text">1/4 tamamlandı</div>
      </div>
      <button onclick="document.getElementById('obWidget').remove()" style="background:none;border:none;color:rgba(255,255,255,.6);font-size:18px;cursor:pointer;padding:0;line-height:1">×</button>
    </div>
    <div style="height:3px;background:rgba(255,255,255,.2)"><div class="ob-progress-bar-inner" style="height:100%;background:#fff;transition:width .4s;width:25%"></div></div>
    <div style="padding:4px 14px 14px" class="ob-body"></div>`,document.body.appendChild(t),fa()}window._obMarkDone=_s;function ya(){var a,i,o;const e=((i=(a=x.dbUser)==null?void 0:a.full_name)==null?void 0:i.split(" ")[0])||"Koç",t=((o=l.workspace)==null?void 0:o.brand_color)||"var(--accent)";let n=document.getElementById("onboardingModal");n||(n=document.createElement("div"),n.id="onboardingModal",n.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,.85);z-index:9000;display:flex;align-items:center;justify-content:center;padding:20px;backdrop-filter:blur(8px)",document.body.appendChild(n)),n.innerHTML=`<div style="background:var(--surface);border:1px solid var(--border2);border-radius:24px;width:100%;max-width:460px;padding:36px 32px;animation:fadeUp .3s ease;box-shadow:var(--shadow-lg);text-align:center">
    <div style="font-size:48px;margin-bottom:14px">🎓</div>
    <h3 style="font-size:22px;font-weight:800;color:var(--text);margin-bottom:8px;line-height:1.2">Hoş geldiniz, ${v(e)}!</h3>
    <p style="font-size:13px;color:var(--text-mid);line-height:1.65;margin-bottom:24px">
      <strong style="color:${t}">14 günlük ücretsiz denemeniz</strong> başladı.<br>
      İlk öğrencinize rapor gönderdiğinizde platformun farkını göreceksiniz.
    </p>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:24px;text-align:left">
      ${[["📅","Haftalık Program","Görev ata, ilerlemeyi izle"],["📊","D/Y/B Takibi","Net analizi anlık gör"],["🤖","AI Asistan","Öğrenci 7/24 destek alır"],["📄","PDF Rapor","Marka renginle profesyonel"]].map(([r,s,d])=>`
        <div style="background:var(--surface2);border:1px solid var(--border);border-radius:10px;padding:10px">
          <div style="font-size:18px;margin-bottom:4px">${r}</div>
          <div style="font-size:11px;font-weight:700;color:var(--text)">${s}</div>
          <div style="font-size:10px;color:var(--text-dim);margin-top:2px">${d}</div>
        </div>`).join("")}
    </div>
    <button class="btn btn-accent" style="width:100%;padding:14px;font-size:15px;font-weight:800" onclick="document.getElementById('onboardingModal').remove();showOnboardingWidget()">
      Hadi Başlayalım! →
    </button>
    <div style="font-size:11px;color:var(--text-dim);margin-top:12px">Kredi kartı gerekmez · 14 gün sonra uzatabilirsiniz</div>
  </div>`}let Le=0;const U={};async function Ss(){const e=l.students.find(i=>i.id===x.studentId);if(!e)return;const t=e.name.split(" ")[0],n=e.color||"var(--accent)";U={};try{const{data:i}=await y.from("student_profiles").select("*").eq("id",x.studentId).maybeSingle();i&&(U.parent_email=i.parent_email||"",U.parent_phone=i.parent_phone||"",U.target_rank=i.target_rank||"",U.target_university=i.target_university||"",U.target_department=i.target_department||"",U.struggling_subjects=i.struggling_subjects||"",U.daily_capacity=i.daily_capacity||8)}catch{}U.yks_area=e.yks_area||"SAY",U.daily_capacity===void 0&&(U.daily_capacity=8);let a=document.getElementById("stuWelcomeModal");a||(a=document.createElement("div"),a.id="stuWelcomeModal",a.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,.85);z-index:9000;display:flex;align-items:center;justify-content:center;padding:20px;backdrop-filter:blur(8px)",document.body.appendChild(a)),Le=0,xa(a,t,n,e)}function $e(e){const t=document.getElementById("sw_err");t&&(t.textContent=e,t.style.display="block",setTimeout(()=>{t&&(t.style.display="none")},5e3))}function xa(e,t,n,a){const i="width:100%;padding:12px 14px;background:var(--surface2);border:1.5px solid var(--border);border-radius:10px;color:var(--text);font-size:14px;outline:none;font-family:inherit;box-sizing:border-box",o="font-size:11px;font-weight:700;color:var(--text-mid);display:block;margin-bottom:5px;text-transform:uppercase;letter-spacing:.05em",r="font-size:11px;color:var(--text-dim);margin-top:5px;line-height:1.5",s=[{v:"SAY",ico:"🔬",name:"Sayısal",sub:"Mat · Fen"},{v:"EA",ico:"⚖️",name:"Eşit Ağırlık",sub:"Mat · Edb"},{v:"SOZ",ico:"📖",name:"Sözel",sub:"Edb · Sosyal"},{v:"DIL",ico:"🌍",name:"Dil",sub:"Yabancı Dil"}],d=[()=>`<div style="text-align:center">
      <div style="font-size:52px;margin-bottom:14px">👋</div>
      <h3 style="font-size:22px;font-weight:800;color:var(--text);margin-bottom:8px">Merhaba, ${v(t)}!</h3>
      <p style="font-size:13px;color:var(--text-mid);line-height:1.7;margin-bottom:24px">
        Koçun seni sisteme ekledi ve programın hazırlanıyor.<br>
        Sana özel bir deneyim oluşturmak için <strong style="color:${n}">2 dakika</strong> ayır.
      </p>
      <button class="btn btn-accent" style="width:100%;padding:14px;font-size:15px;font-weight:800" onclick="window._swNext()">Hadi Başlayalım →</button>
      <button onclick="window._swSkip()" style="margin-top:10px;background:none;border:none;color:var(--text-dim);font-size:12px;cursor:pointer;text-decoration:underline">Şimdi değil, sonra doldururum</button>
    </div>`,()=>`<div>
      <div style="font-size:10px;font-weight:700;color:${n};text-transform:uppercase;letter-spacing:.08em;margin-bottom:12px">Adım 1/3 · Sınav Alanın</div>
      <h3 style="font-size:19px;font-weight:800;color:var(--text);margin-bottom:6px">Hangi alandan hazırlanıyorsun?</h3>
      <p style="${r};margin-bottom:16px">Koçunun sana doğru dersleri önerebilmesi için sınav alanını seçmelisin.</p>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:16px" id="sw_area_grid">
        ${s.map(u=>`
          <button class="sw-area ${U.yks_area===u.v?"sel":""}" data-v="${u.v}"
            onclick="document.querySelectorAll('.sw-area').forEach(b=>b.classList.remove('sel'));this.classList.add('sel')"
            style="display:flex;flex-direction:column;align-items:center;gap:3px;padding:16px 8px;border-radius:12px;border:2px solid var(--border);background:var(--surface2);cursor:pointer;font-family:inherit;transition:all .15s">
            <span style="font-size:22px">${u.ico}</span>
            <span style="font-size:13px;font-weight:800;color:var(--text)">${u.name}</span>
            <span style="font-size:10px;color:var(--text-dim)">${u.sub}</span>
          </button>`).join("")}
      </div>
      <div id="sw_err" style="display:none;color:var(--red);font-size:12px;margin-bottom:12px;padding:10px 14px;background:var(--red-dim);border-radius:8px;font-weight:600"></div>
      <button class="btn btn-accent" style="width:100%;padding:13px;font-weight:800" onclick="window._swNext()">Devam Et →</button>
    </div>`,()=>{var u,g;return`<div>
      <div style="font-size:10px;font-weight:700;color:${n};text-transform:uppercase;letter-spacing:.08em;margin-bottom:12px">Adım 2/3 · Hedefin</div>
      <h3 style="font-size:19px;font-weight:800;color:var(--text);margin-bottom:16px">Nereye ulaşmak istiyorsun?</h3>
      <div style="margin-bottom:12px">
        <label style="${o}">Hedef Sıralama <span style="color:var(--red)">*</span></label>
        <input id="sw_rank" type="text" inputmode="numeric" value="${v(String(U.target_rank||""))}" placeholder="Örn: 15000"
          oninput="this.value=this.value.replace(/[^0-9]/g,'')"
          style="${i}" onfocus="this.style.borderColor='${n}'" onblur="this.style.borderColor='var(--border)'">
      </div>
      <div style="margin-bottom:12px">
        <label style="${o}">Hedef Bölüm ve Üniversite <span style="color:var(--text-dim);text-transform:none;font-weight:600">(isteğe bağlı)</span></label>
        <input id="sw_uni" type="text" value="${v([U.target_university,U.target_department].filter(Boolean).join(" - ")||((g=(u=a.target)==null?void 0:u.split("·")[0])==null?void 0:g.trim())||"")}" placeholder="Örn: Hacettepe Üniversitesi - Tıp"
          style="${i}" onfocus="this.style.borderColor='${n}'" onblur="this.style.borderColor='var(--border)'">
      </div>
      <div style="margin-bottom:16px">
        <label style="${o.replace("margin-bottom:5px","margin-bottom:8px")}">En Çok Zorlandığın Dersler</label>
        <div style="display:flex;flex-wrap:wrap;gap:8px" id="sw_struggle_btns">
          ${["Matematik","Fizik","Kimya","Biyoloji","Türkçe","Tarih","Coğrafya","Felsefe","İngilizce"].map(E=>`
            <button onclick="this.classList.toggle('sel');document.getElementById('sw_struggle').value=[...document.getElementById('sw_struggle_btns').querySelectorAll('.sel')].map(b=>b.dataset.v).join(', ')" data-v="${E}"
              class="sw-chip ${(U.struggling_subjects||"").includes(E)?"sel":""}"
              style="padding:6px 14px;border-radius:99px;border:1.5px solid var(--border);background:var(--surface2);color:var(--text);font-size:12px;font-weight:600;cursor:pointer;transition:all .15s">${E}</button>`).join("")}
        </div>
        <input id="sw_struggle" type="hidden" value="${v(U.struggling_subjects||"")}">
      </div>
      <div id="sw_err" style="display:none;color:var(--red);font-size:12px;margin-bottom:12px;padding:10px 14px;background:var(--red-dim);border-radius:8px;font-weight:600"></div>
      <button class="btn btn-accent" style="width:100%;padding:13px;font-weight:800" onclick="window._swNext()">Devam Et →</button>
    </div>`},()=>`<div>
      <div style="font-size:10px;font-weight:700;color:${n};text-transform:uppercase;letter-spacing:.08em;margin-bottom:12px">Adım 3/3 · Kapasite &amp; Veli</div>
      <h3 style="font-size:19px;font-weight:800;color:var(--text);margin-bottom:16px">Son birkaç bilgi kaldı</h3>
      <div style="margin-bottom:18px">
        <label style="${o}">Günlük Çalışma Kapasiten: <span id="sw_hours_val" style="color:${n};font-size:14px">${U.daily_capacity||8} saat</span></label>
        <input id="sw_hours" type="range" min="1" max="12" step="1" value="${U.daily_capacity||8}"
          oninput="document.getElementById('sw_hours_val').textContent=this.value+' saat'"
          style="width:100%;accent-color:${n};cursor:pointer;margin-top:6px">
        <div style="display:flex;justify-content:space-between;font-size:10px;color:var(--text-dim)"><span>1 saat</span><span>12 saat</span></div>
        <div style="${r}">Koçunun sana günlük limitini aşmayacak programlar atamasını sağlar.</div>
      </div>
      <div style="margin-bottom:12px">
        <label style="${o}">Veli E-Posta Adresi <span style="color:var(--red)">*</span></label>
        <input id="sw_pmail" type="email" value="${v(U.parent_email||"")}" placeholder="veli@eposta.com"
          style="${i}" onfocus="this.style.borderColor='${n}'" onblur="this.style.borderColor='var(--border)'">
        <div style="${r}">Haftalık gelişim raporlarının veline gönderilebilmesi için gereklidir.</div>
      </div>
      <div style="margin-bottom:16px">
        <label style="${o}">Veli Telefon Numarası <span style="color:var(--red)">*</span></label>
        <input id="sw_pphone" type="tel" value="${v(U.parent_phone||"")}" placeholder="0 (5__) ___ __ __"
          oninput="maskPhoneTR(this)"
          style="${i}" onfocus="this.style.borderColor='${n}'" onblur="this.style.borderColor='var(--border)'">
      </div>
      <div id="sw_err" style="display:none;color:var(--red);font-size:12px;margin-bottom:12px;padding:10px 14px;background:var(--red-dim);border-radius:8px;font-weight:600"></div>
      <button class="btn btn-accent" style="width:100%;padding:13px;font-weight:800" onclick="window._swSave()">Tamamla ve Başla →</button>
    </div>`],c=Le>0?`<div style="height:3px;background:var(--border);border-radius:99px;margin-bottom:24px;overflow:hidden"><div style="height:100%;width:${Math.round(Le/3*100)}%;background:${n};transition:width .4s"></div></div>`:"";e.innerHTML=`<div style="background:var(--surface);border:1px solid var(--border2);border-radius:24px;width:100%;max-width:460px;padding:32px;animation:fadeUp .3s ease;max-height:90vh;overflow-y:auto;box-shadow:var(--shadow-lg)">
    ${c}
    ${d[Le]()}
  </div>`;const p=()=>e.querySelectorAll(".sw-area").forEach(u=>{const g=u.classList.contains("sel");u.style.borderColor=g?n:"var(--border)",u.style.background=g?`color-mix(in srgb, ${n} 10%, var(--surface2))`:"var(--surface2)"});e.querySelectorAll(".sw-area").forEach(u=>u.addEventListener("click",p)),p();const m=u=>{const g=u.classList.contains("sel");u.style.background=g?n:"var(--surface2)",u.style.borderColor=g?n:"var(--border)",u.style.color=g?"#fff":"var(--text)"};e.querySelectorAll(".sw-chip").forEach(u=>{m(u),u.addEventListener("click",function(){m(this)})})}window.maskPhoneTR=function(e){let t=e.value.replace(/\D/g,"");t.length>0&&!t.startsWith("0")&&(t="0"+t);let n="";t.length>0&&(n="0"),t.length>1&&(n+=" ("+t.substring(1,4)),t.length>=4&&(n+=")"),t.length>4&&(n+=" "+t.substring(4,7)),t.length>7&&(n+=" "+t.substring(7,9)),t.length>9&&(n+=" "+t.substring(9,11)),e.value=n};window._swNext=function(){var n,a,i,o,r,s,d,c,p,m,u;const e=document.getElementById("stuWelcomeModal");if(!e)return;if(Le===1){const g=(a=(n=e.querySelector(".sw-area.sel"))==null?void 0:n.dataset)==null?void 0:a.v;if(!g){$e("Lütfen hazırlık alanınızı seçin.");return}U.yks_area=g}if(Le===2){const g=(o=(i=document.getElementById("sw_rank"))==null?void 0:i.value)==null?void 0:o.trim();if(!g){$e("Lütfen hedef sıralamanızı girin.");return}const E=parseInt(g);if(isNaN(E)||E<=0||E>=5e6){$e("Lütfen geçerli bir hedef sıralaması girin.");return}U.target_rank=E;const f=(((s=(r=document.getElementById("sw_uni"))==null?void 0:r.value)==null?void 0:s.trim())||"").split("-");U.target_university=((d=f[0])==null?void 0:d.trim())||"",U.target_department=((c=f[1])==null?void 0:c.trim())||"",U.struggling_subjects=((m=(p=document.getElementById("sw_struggle"))==null?void 0:p.value)==null?void 0:m.trim())||""}Le++;const t=l.students.find(g=>g.id===x.studentId);xa(e,((u=t==null?void 0:t.name)==null?void 0:u.split(" ")[0])||"",(t==null?void 0:t.color)||"var(--accent)",t)};window._swSkip=function(){var e;(e=document.getElementById("stuWelcomeModal"))==null||e.remove(),y.from("student_profiles").upsert({id:x.studentId}).then(()=>{})};window._swSave=async function(){var a,i,o,r,s,d;const e=((i=(a=document.getElementById("sw_pmail"))==null?void 0:a.value)==null?void 0:i.trim())||"",t=((r=(o=document.getElementById("sw_pphone"))==null?void 0:o.value)==null?void 0:r.trim())||"",n=parseInt((s=document.getElementById("sw_hours"))==null?void 0:s.value)||8;if(!e){$e("Lütfen velinizin e-posta adresini girin.");return}if(!e.includes("@")){$e("Geçerli bir veli e-posta adresi girin.");return}if(!t||t.replace(/\D/g,"").length<10){$e("Lütfen geçerli bir veli telefon numarası girin.");return}M(!0,"Kaydediliyor...");try{await y.from("users").update({yks_area:U.yks_area}).eq("id",x.studentId);const c=l.students.find(u=>u.id===x.studentId);c&&(c.yksArea=U.yks_area);const p={id:x.studentId,target_rank:U.target_rank,target_university:U.target_university||"",target_department:U.target_department||"",struggling_subjects:U.struggling_subjects||"",parent_email:e,parent_phone:t,daily_capacity:n,onboarding_done:!0};let{error:m}=await y.from("student_profiles").upsert(p);if(m&&/column/i.test(m.message||"")&&({error:m}=await y.from("student_profiles").upsert({id:p.id,target_university:p.target_university,target_department:p.target_department,struggling_subjects:p.struggling_subjects,daily_capacity:p.daily_capacity,bio:`Hedef sıralama: ${p.target_rank} · Veli: ${e} / ${t}`})),m)return M(!1),$e("Kaydedilemedi: "+m.message)}catch(c){return M(!1),$e("Kaydedilemedi: "+(c.message||c))}M(!1),(d=document.getElementById("stuWelcomeModal"))==null||d.remove(),b("Profilin başarıyla kaydedildi! 🎉"),se("sportal")};let Ct=null;window.addEventListener("beforeinstallprompt",e=>{e.preventDefault(),Ct=e;const t=document.createElement("button");t.id="pwaInstallBtn",t.className="btn btn-ghost btn-sm",t.innerHTML="📲 Yükle",t.style.cssText="font-size:11px;padding:5px 10px",t.onclick=async()=>{Ct.prompt();const{outcome:n}=await Ct.userChoice;n==="accepted"&&(t.remove(),b("Uygulama yüklendi ✓"))},document.querySelector(".tbar-right").insertBefore(t,document.querySelector(".user-pill"))});async function ba(){const e=l.students.find(z=>z.id===x.studentId);if(!e)return;const t=document.getElementById("view-sprofil");if(!t)return;const{data:n,error:a}=await y.from("student_profiles").select("*").eq("id",x.studentId).maybeSingle();a&&console.error("Öğrenci profili yüklenirken hata:",a);const i=(n==null?void 0:n.bio)||"",o=(n==null?void 0:n.school)||"",r=(n==null?void 0:n.grade)||"",s=(n==null?void 0:n.target_university)||"",d=(n==null?void 0:n.target_department)||"",c=(n==null?void 0:n.struggling_subjects)||"",p=(n==null?void 0:n.daily_capacity)||"",m=l.exams.filter(z=>z.studentId===e.id).sort((z,_)=>z.date.localeCompare(_.date)),u=m[m.length-1],g=u?(EXAM_DEFS[u.type]||[]).reduce((_,D)=>{var C;return _+Number(((C=u.nets)==null?void 0:C[D])||0)},0).toFixed(1):"—",E=ne(0,e.weekStart??0);let T=0,f=0;for(let z=0;z<7;z++){const _=l.tasks[`${e.id}_${O(J(E,z))}`]||[];T+=_.length,f+=_.filter(D=>D.done).length}const $=T>0?Math.round(f/T*100):0;let w=0;if(Object.keys(l.tasks).filter(z=>z.startsWith(e.id+"_")).forEach(z=>{w+=l.tasks[z].filter(_=>_.done).length}),m.length===0&&w===0){t.innerHTML=`<div style="text-align:center;padding:60px 24px;max-width:360px;margin:0 auto">
      <div style="font-size:52px;margin-bottom:16px">🌱</div>
      <div style="font-size:18px;font-weight:800;color:var(--text);margin-bottom:8px">Yolculuğun Yeni Başlıyor</div>
      <div style="font-size:14px;color:var(--text-mid);line-height:1.65;margin-bottom:28px">Koçun haftalık programını oluşturdukça görev istatistiklerin, deneme netlerini girdikçe gelişim grafiklerin burada belirmeye başlayacak.</div>
      <div style="display:flex;flex-direction:column;gap:10px;text-align:left">
        <div style="background:var(--surface);border:1px solid var(--border);border-radius:12px;padding:14px 16px;font-size:13px;display:flex;align-items:center;gap:12px"><span style="font-size:20px">📋</span><span>Koçunun program oluşturmasını bekle</span></div>
        <div style="background:var(--surface);border:1px solid var(--border);border-radius:12px;padding:14px 16px;font-size:13px;display:flex;align-items:center;gap:12px"><span style="font-size:20px">✅</span><span>Görevleri tamamladıkça istatistiklerin görünecek</span></div>
        <div style="background:var(--surface);border:1px solid var(--border);border-radius:12px;padding:14px 16px;font-size:13px;display:flex;align-items:center;gap:12px"><span style="font-size:20px">📈</span><span>Deneme netlerini girdikçe grafiklerin oluşacak</span></div>
      </div>
    </div>`;return}if(m.length>0){const z=m.slice(-6),_=Math.max(...z.map(D=>(EXAM_DEFS[D.type]||[]).reduce((L,k)=>{var A;return L+Number(((A=D.nets)==null?void 0:A[k])||0)},0)),1);`${z.map(D=>{const L=(EXAM_DEFS[D.type]||[]).reduce((H,F)=>{var V;return H+Number(((V=D.nets)==null?void 0:V[F])||0)},0),k=Math.max(Math.round(L/_*100),4),A=z[z.indexOf(D)-1],j=A?(EXAM_DEFS[A.type]||[]).reduce((H,F)=>{var V;return H+Number(((V=A.nets)==null?void 0:V[F])||0)},0):L,P=L>j?"↑":L<j?"↓":"",Y=L>j?"var(--green)":L<j?"var(--red)":"var(--text-dim)";return`<div style="flex:1;display:flex;flex-direction:column;align-items:center;gap:3px">
              <div style="font-size:10px;font-weight:700;color:var(--text-mid)">${L.toFixed(0)}</div>
              <div style="font-size:9px;color:${Y};font-weight:800">${P}</div>
              <div style="width:100%;background:${e.color};border-radius:4px 4px 0 0;height:${k}%;min-height:4px"></div>
              <div style="font-size:9px;color:var(--text-dim);text-align:center;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;width:100%">${v(D.name.replace("Deneme","").replace("TYT","").replace("AYT","").trim())}</div>
            </div>`}).join("")}`}if(m.length>0){const z=u.type,D=(EXAM_DEFS[z]||[]).map(C=>{var j;const L=m.filter(P=>P.type===z).map(P=>{var Y;return Number(((Y=P.nets)==null?void 0:Y[C])||0)}),k=L.length?L.reduce((P,Y)=>P+Y,0)/L.length:0,A=Number(((j=u.nets)==null?void 0:j[C])||0);return{f:C,avg:k.toFixed(1),last:A,color:Ot(A)}});`${z}${D.map(C=>`
            <div style="background:var(--surface2);border:1px solid var(--border);border-radius:9px;padding:10px;text-align:center">
              <div style="font-size:10px;color:var(--text-dim);font-weight:700;margin-bottom:4px;text-transform:uppercase">${C.f}</div>
              <div style="font-family:'Inter',sans-serif;font-size:22px;font-weight:800;color:var(--${C.color==="good"?"green":C.color==="mid"?"accent":"red"})">${C.last}</div>
              <div style="font-size:10px;color:var(--text-dim);margin-top:2px">ort: ${C.avg}</div>
            </div>`).join("")}`}const B=l.appointments.filter(z=>z.studentId===e.id&&z.date>=ue()).sort((z,_)=>z.date.localeCompare(_.date)).slice(0,3),h=s||d;n!=null&&n.motivation;const S=m.slice(-7),I=Math.max(...S.map(z=>(EXAM_DEFS[z.type]||[]).reduce((D,C)=>{var L;return D+Number(((L=z.nets)==null?void 0:L[C])||0)},0)),1);t.innerHTML=`
    <!-- HERO -->
    <div style="background:linear-gradient(135deg,${e.color}22 0%,${e.color}08 100%);border:1px solid ${e.color}33;border-radius:16px;padding:20px 24px;margin-bottom:14px;display:flex;align-items:center;gap:18px">
      <div style="width:64px;height:64px;border-radius:16px;background:${e.color};display:flex;align-items:center;justify-content:center;font-size:26px;font-weight:800;color:#fff;flex-shrink:0">${e.name[0]}</div>
      <div style="flex:1;min-width:0">
        <div style="font-size:20px;font-weight:800;color:var(--text)">${v(e.name)}</div>
        <div style="font-size:13px;color:var(--text-mid);margin-top:2px">${v(e.target)}${r?" · "+v(r):""}${o?" · "+v(o):""}</div>
        ${h?`<div style="display:inline-flex;align-items:center;gap:6px;margin-top:8px;background:${e.color};color:#fff;padding:4px 12px;border-radius:99px;font-size:11px;font-weight:700">🎯 ${[s,d].filter(Boolean).join(" · ")}</div>`:""}
      </div>
    </div>

    <!-- STAT CARDS -->
    <div class="stats-row" style="margin-bottom:14px">
      <div class="stat-card">
        <div class="stat-label">Genel İlerleme</div>
        <div class="stat-val" style="color:${e.color}">%${e.progress}</div>
        <div class="prog-bar-wrap" style="margin-top:8px"><div class="prog-bar" style="width:${e.progress}%;background:${e.color}"></div></div>
      </div>
      <div class="stat-card">
        <div class="stat-label">Bu Hafta Görev</div>
        <div class="stat-val">${f}<span style="font-size:14px;color:var(--text-dim)">/${T}</span></div>
        <div style="font-size:11px;color:var(--text-mid);margin-top:4px">%${$} tamamlandı</div>
      </div>
      <div class="stat-card">
        <div class="stat-label">Son Deneme Neti</div>
        <div class="stat-val" style="color:var(--accent)">${g}</div>
        <div style="font-size:11px;color:var(--text-mid);margin-top:4px">${u?v(u.name):"Deneme yok"}</div>
      </div>
      <div class="stat-card">
        <div class="stat-label">Toplam Tamamlanan</div>
        <div class="stat-val">${w}</div>
        <div style="font-size:11px;color:var(--text-mid);margin-top:4px">görev</div>
      </div>
    </div>

    ${S.length>0?`
    <!-- NET GELİŞİM GRAFİĞİ -->
    <div class="card cp" style="margin-bottom:14px">
      <div class="portal-sec-title" style="margin-bottom:16px">📈 Net Gelişim Grafiği</div>
      <div style="position:relative;height:160px;display:flex;align-items:flex-end;gap:6px;padding-bottom:28px">
        <!-- yatay kılavuz çizgiler -->
        ${[.25,.5,.75,1].map(z=>`
          <div style="position:absolute;left:0;right:0;bottom:${28+Math.round(z*132)}px;border-top:1px dashed var(--border);display:flex;align-items:center">
            <span style="position:absolute;right:0;font-size:9px;color:var(--text-dim);background:var(--surface);padding:0 2px;line-height:1">${Math.round(I*z)}</span>
          </div>`).join("")}
        ${S.map((z,_)=>{const C=(EXAM_DEFS[z.type]||[]).reduce((F,V)=>{var Z;return F+Number(((Z=z.nets)==null?void 0:Z[V])||0)},0),L=Math.max(Math.round(C/I*132),4),k=S[_-1],A=k?(EXAM_DEFS[k.type]||[]).reduce((F,V)=>{var Z;return F+Number(((Z=k.nets)==null?void 0:Z[V])||0)},0):C,j=C>A,P=C<A,Y=j?"var(--green)":P?"var(--red)":e.color,H=v(z.name.replace(/deneme|tyt|ayt/gi,"").trim()).slice(0,10)||"#"+(_+1);return`<div style="flex:1;display:flex;flex-direction:column;align-items:center;gap:0;position:relative">
            <div style="font-size:10px;font-weight:800;color:var(--text-mid);margin-bottom:3px">${C.toFixed(0)}</div>
            <div style="width:100%;background:${Y};border-radius:5px 5px 0 0;height:${L}px;min-height:4px;transition:height .4s"></div>
            <div style="position:absolute;bottom:-22px;width:100%;text-align:center;font-size:9px;color:var(--text-dim);overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${H}</div>
          </div>`}).join("")}
      </div>
    </div>`:""}

    ${m.length>0?`
    <!-- DERS BAZINDA PERFORMANS -->
    <div class="card cp" style="margin-bottom:14px">
      <div class="portal-sec-title" style="margin-bottom:14px">📊 Ders Bazında Performans <span style="font-size:11px;font-weight:400;color:var(--text-dim)">${(u==null?void 0:u.type)||""}</span></div>
      <div style="display:flex;flex-direction:column;gap:10px">
        ${(()=>{const z=EXAM_DEFS[u.type]||[],_=m.filter(C=>C.type===u.type),D=Math.max(...z.map(C=>Math.max(..._.map(L=>{var k;return Number(((k=L.nets)==null?void 0:k[C])||0)}))),1);return z.map(C=>{var Y;const L=Number(((Y=u.nets)==null?void 0:Y[C])||0),k=_.map(H=>{var F;return Number(((F=H.nets)==null?void 0:F[C])||0)}),A=k.length?k.reduce((H,F)=>H+F,0)/k.length:0,j=Math.round(L/D*100),P=L>=A*1.1?"var(--green)":L<A*.9?"var(--red)":e.color;return`<div style="display:flex;align-items:center;gap:10px">
              <div style="width:90px;font-size:11px;font-weight:700;color:var(--text-mid);flex-shrink:0;text-transform:uppercase">${C}</div>
              <div style="flex:1;height:8px;background:var(--surface2);border-radius:99px;overflow:hidden">
                <div style="height:100%;width:${j}%;background:${P};border-radius:99px;transition:width .5s"></div>
              </div>
              <div style="width:36px;text-align:right;font-size:13px;font-weight:800;color:${P};flex-shrink:0">${L.toFixed(1)}</div>
              <div style="width:28px;font-size:10px;color:var(--text-dim);flex-shrink:0">ort: ${A.toFixed(1)}</div>
            </div>`}).join("")})()}
      </div>
    </div>`:""}

    <!-- YAKLAŞAN RANDEVULAR -->
    ${B.length?`
    <div class="card cp" style="margin-bottom:14px">
      <div class="portal-sec-title" style="margin-bottom:10px">📅 Yaklaşan Randevularım</div>
      ${B.map(z=>`
        <div style="display:flex;align-items:center;gap:12px;background:var(--surface2);border-left:3px solid ${e.color};border-radius:9px;padding:12px;margin-bottom:6px">
          <div style="text-align:center;flex-shrink:0">
            <div style="font-size:18px;font-weight:800;color:var(--text)">${new Date(z.date+"T12:00").getDate()}</div>
            <div style="font-size:9px;font-weight:700;color:var(--text-dim);text-transform:uppercase">${new Date(z.date+"T12:00").toLocaleDateString("tr-TR",{month:"short"})}</div>
          </div>
          <div style="flex:1">
            <div style="font-size:13px;font-weight:700">${v(z.type)}</div>
            <div style="font-size:11px;color:var(--text-mid);margin-top:2px">${z.time} · ${z.duration} dk</div>
          </div>
          ${z.meet_link?`<a href="${v(z.meet_link)}" target="_blank" style="font-size:11px;background:var(--blue-dim);color:var(--blue);padding:4px 10px;border-radius:8px;text-decoration:none;font-weight:700">Katıl</a>`:""}
        </div>`).join("")}
    </div>`:""}

    <!-- PROFİL BİLGİLERİM (görüntüleme modu) -->
    <div class="card cp" style="margin-bottom:14px" id="spViewCard">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:14px">
        <div class="portal-sec-title" style="margin:0">📝 Profil Bilgilerim</div>
        <button class="btn btn-ghost btn-sm" onclick="document.getElementById('spViewCard').style.display='none';document.getElementById('spEditCard').style.display='block'">Düzenle</button>
      </div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
        ${[["Okul",o],["Sınıf",r],["Hedef Üniversite",s],["Hedef Bölüm",d],["Zorlandığım Dersler",c],["Günlük Kapasite",p?p+" saat":""]].map(([z,_])=>`
          <div>
            <div style="font-size:10px;font-weight:700;color:var(--text-dim);text-transform:uppercase;letter-spacing:.04em;margin-bottom:3px">${z}</div>
            <div style="font-size:13px;color:${_?"var(--text)":"var(--text-dim)"};font-weight:${_?"500":"400"}">${_||"—"}</div>
          </div>`).join("")}
      </div>
      ${i?`<div style="margin-top:12px;padding-top:12px;border-top:1px solid var(--border);font-size:13px;color:var(--text-mid);line-height:1.6">${v(i)}</div>`:""}
    </div>

    <!-- PROFİL DÜZENLEME FORMU (gizli) -->
    <div class="card cp" style="margin-bottom:14px;display:none" id="spEditCard">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:14px">
        <div class="portal-sec-title" style="margin:0">📝 Profil Düzenle</div>
        <button class="btn btn-ghost btn-sm" onclick="document.getElementById('spEditCard').style.display='none';document.getElementById('spViewCard').style.display='block'">İptal</button>
      </div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:12px">
        ${[["spSchool","Okul","text",o,"Okulunuz"],["spGrade","Sınıf / Seviye","text",r,"12. Sınıf, Mezun"],["spTargetUni","Hedef Üniversite","text",s,"Boğaziçi Üniversitesi"],["spTargetDept","Hedef Bölüm","text",d,"Bilgisayar Mühendisliği"],["spStruggling","Zorlandığım Dersler","text",c,"Fizik, Geometri"],["spCapacity","Günlük Kapasite (Saat)","number",p,"6"]].map(([z,_,D,C,L])=>`
          <div>
            <label style="display:block;font-size:11px;font-weight:700;color:var(--text-mid);margin-bottom:4px">${_}</label>
            <input type="${D}" id="${z}" value="${v(String(C))}" placeholder="${L}" style="width:100%;background:var(--surface2);border:1.5px solid var(--border);border-radius:9px;padding:10px 13px;font-size:14px;color:var(--text);outline:none;box-sizing:border-box">
          </div>`).join("")}
      </div>
      <div style="margin-bottom:12px">
        <label style="display:block;font-size:11px;font-weight:700;color:var(--text-mid);margin-bottom:4px">Biyografi</label>
        <textarea id="spBio" style="width:100%;min-height:72px;background:var(--surface2);border:1.5px solid var(--border);border-radius:9px;padding:10px 13px;font-size:14px;color:var(--text);outline:none;resize:vertical;font-family:inherit;box-sizing:border-box">${v(i)}</textarea>
      </div>
      <button class="btn btn-accent" style="width:100%;padding:10px" onclick="saveStudentProfile()">Kaydet ✓</button>
    </div>

    <!-- ŞİFRE DEĞİŞTİR -->
    <div class="card cp">
      <div class="portal-sec-title">🔒 Şifre Değiştir</div>
      <div style="display:flex;gap:10px;margin-top:10px;flex-wrap:wrap">
        <input type="password" id="newPass1" placeholder="Yeni şifre" style="flex:1;min-width:140px;background:var(--surface2);border:1.5px solid var(--border);border-radius:9px;padding:10px 13px;font-size:14px;font-family:inherit;color:var(--text);outline:none">
        <input type="password" id="newPass2" placeholder="Şifreyi tekrar gir" style="flex:1;min-width:140px;background:var(--surface2);border:1.5px solid var(--border);border-radius:9px;padding:10px 13px;font-size:14px;font-family:inherit;color:var(--text);outline:none">
        <button class="btn btn-accent" onclick="changePassword()">Kaydet</button>
      </div>
    </div>`}async function Is(){const e=x.dbUser.id,t=document.getElementById("spBio").value.trim(),n=document.getElementById("spSchool").value.trim(),a=document.getElementById("spGrade").value.trim(),i=document.getElementById("spTargetUni").value.trim(),o=document.getElementById("spTargetDept").value.trim(),r=document.getElementById("spStruggling").value.trim(),s=parseInt(document.getElementById("spCapacity").value)||null,d={id:e,bio:t,school:n,grade:a,target_university:i,target_department:o,struggling_subjects:r,daily_capacity:s,updated_at:new Date().toISOString()},{error:c}=await y.from("student_profiles").upsert(d);b(c?"Profil kaydedilemedi: "+c.message:"Profil başarıyla güncellendi ✓")}async function zs(){const e=document.getElementById("newPass1").value,t=document.getElementById("newPass2").value;if(!e)return b("Şifre girin!");if(e!==t)return b("Şifreler uyuşmuyor!");if(e.length<4)return b("En az 4 karakter olmalı");const{error:n}=await y.from("users").update({password_hash:e}).eq("id",x.studentId);if(n)return b("Hata: "+n.message);b("Şifre güncellendi ✓"),document.getElementById("newPass1").value="",document.getElementById("newPass2").value=""}async function Bs(){const e=document.getElementById("view-suyelik");if(!e)return;e.innerHTML='<div style="display:flex;align-items:center;justify-content:center;height:200px"><div style="width:32px;height:32px;border:3px solid var(--accent);border-top-color:transparent;border-radius:50%;animation:spin .7s linear infinite"></div></div>',l.students.find(f=>f.id===x.studentId);const t=x.dbUser;let n=null;if(x.coachId){const{data:f}=await y.from("users").select("full_name,plan,trial_ends_at,created_at,email").eq("id",x.coachId).maybeSingle();n=f}const a=t!=null&&t.created_at?new Date(t.created_at):null,i=new Date,o=(n==null?void 0:n.plan)||"trial",r=o==="trial"?"Deneme Dönemi":o==="pro"?"Pro Üyelik":o==="premium"?"Premium Üyelik":o.charAt(0).toUpperCase()+o.slice(1),s=o==="trial"?"#f0a500":o==="pro"?"#3ecf8e":o==="premium"?"#8b5cf6":"#3ecf8e",d=o==="trial"?"#fff8e6":o==="pro"?"#e6faf3":o==="premium"?"#f3e8ff":"#e6faf3";let c=null;n!=null&&n.trial_ends_at?c=new Date(n.trial_ends_at):n!=null&&n.created_at&&(c=new Date(new Date(n.created_at).getTime()+14*24*60*60*1e3));const p=c?Math.max(0,Math.ceil((c-i)/(1e3*60*60*24))):null,m=a?Math.floor((i-a)/(1e3*60*60*24)):null,u=f=>f?f.toLocaleDateString("tr-TR",{day:"numeric",month:"long",year:"numeric"}):"—",g=p===null?"#888":p>7?"#3ecf8e":p>3?"#f0a500":"#ef4444",E=p===null?"❓":p>7?"✅":p>3?"⚠️":"🔴",T=p===null?"Durum bilinmiyor":p>7?"Aktif":p>3?"Yakında Sona Eriyor":p===0?"Bugün Sona Eriyor":"Kritik — "+p+" gün";e.innerHTML=`
    <div style="max-width:480px;margin:0 auto;padding:16px">

      <!-- Üyelik Durumu Kartı -->
      <div style="background:var(--surface);border:1.5px solid var(--border);border-radius:16px;padding:24px;margin-bottom:16px;position:relative;overflow:hidden">
        <div style="position:absolute;top:0;right:0;width:120px;height:120px;background:${s};opacity:.06;border-radius:50%;transform:translate(30%,-30%)"></div>
        <div style="display:flex;align-items:flex-start;gap:16px">
          <div style="width:52px;height:52px;border-radius:14px;background:${d};display:flex;align-items:center;justify-content:center;font-size:24px;flex-shrink:0">💳</div>
          <div style="flex:1">
            <div style="font-size:11px;color:var(--text-dim);text-transform:uppercase;letter-spacing:.08em;margin-bottom:2px">Üyelik Planı</div>
            <div style="font-size:20px;font-weight:700;color:var(--text)">${r}</div>
            <div style="display:inline-flex;align-items:center;gap:5px;background:${d};color:${s};font-size:11px;font-weight:600;padding:3px 10px;border-radius:20px;margin-top:6px">
              <span>${E}</span><span>${T}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Detay Bilgiler -->
      <div style="background:var(--surface);border:1px solid var(--border);border-radius:14px;overflow:hidden;margin-bottom:16px">
        ${[{icon:"🎓",label:"Koçum",value:(n==null?void 0:n.full_name)||"—"},{icon:"📅",label:"Kayıt Tarihi",value:u(a)},{icon:"⏳",label:"Kullanım Süresi",value:m!==null?m+" gün":"—"},{icon:"📆",label:"Üyelik Sona Erme",value:u(c)},{icon:"⌛",label:"Kalan Süre",value:p!==null?`<span style="color:${g};font-weight:700">${p} gün</span>`:"—"}].map(({icon:f,label:$,value:w},B,h)=>`
          <div style="display:flex;align-items:center;gap:12px;padding:14px 18px;${B<h.length-1?"border-bottom:1px solid var(--border)":""}">
            <span style="font-size:18px;width:24px;text-align:center">${f}</span>
            <div style="flex:1">
              <div style="font-size:11px;color:var(--text-dim)">${$}</div>
              <div style="font-size:14px;font-weight:600;color:var(--text);margin-top:1px">${w}</div>
            </div>
          </div>
        `).join("")}
      </div>

      <!-- Günlük Sayaç -->
      ${p!==null?`
      <div style="background:var(--surface);border:1px solid var(--border);border-radius:14px;padding:18px;margin-bottom:16px">
        <div style="font-size:12px;color:var(--text-dim);margin-bottom:10px;font-weight:600">Üyelik Süresi</div>
        ${(()=>{const f=c&&a?Math.max(1,Math.ceil((c-a)/864e5)):14,$=Math.min(f,f-p),w=Math.min(100,Math.round($/f*100)),B=p>7?"#3ecf8e":p>3?"#f0a500":"#ef4444";return`
            <div style="display:flex;justify-content:space-between;font-size:11px;color:var(--text-dim);margin-bottom:6px">
              <span>${$} gün kullanıldı</span>
              <span>${p} gün kaldı</span>
            </div>
            <div style="background:var(--surface2);border-radius:6px;height:10px;overflow:hidden">
              <div style="width:${w}%;height:100%;background:${B};border-radius:6px;transition:width .5s ease"></div>
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
    </div>`}async function ha(){var g;const e=document.getElementById("view-coach-profile");if(!e)return;e.innerHTML='<div class="loading">Profil bilgileri yükleniyor...</div>';const t=x.dbUser.id;let n=null,a=null;const i=await y.from("coach_profiles").select("*").eq("id",t).maybeSingle();if(n=i.data,a=i.error,a){const E=localStorage.getItem(`coach_profile_${t}`);if(E)try{n=JSON.parse(E),a=null}catch{}if(a){e.innerHTML=`<div style="padding:20px;color:var(--red)">Profil yüklenirken hata oluştu: ${v(a.message)}</div>`;return}}else if(!n){const E=localStorage.getItem(`coach_profile_${t}`);if(E)try{n=JSON.parse(E)}catch{}}const o=(n==null?void 0:n.bio)||"",r=(n==null?void 0:n.subjects)||"",s=(n==null?void 0:n.education)||"",d=(n==null?void 0:n.experience)||"",c=(n==null?void 0:n.photo_url)||"",p=(n==null?void 0:n.instagram)||"",m=(n==null?void 0:n.linkedin)||"",u=window.location.origin+window.location.pathname.replace("app.html","koc_bul.html")+`?coach=${t}`;e.innerHTML=`
    <div style="max-width:900px;margin:0 auto">
    <div style="margin-bottom: 20px;">
      <h2 style="font-family:'Inter',sans-serif; margin-bottom: 6px;">👤 Koç Profilim</h2>
      <p style="font-size: 13px; color: var(--text-mid); margin-bottom: 15px;">
        "Koç Bul" sayfasında görünecek bilgilerinizi buradan düzenleyebilirsiniz.
      </p>
      
      <div style="margin-bottom: 16px; background: var(--surface2); border: 1px dashed var(--border); padding: 12px; border-radius: 9px;">
        <label style="display:block; font-size:11px; font-weight:700; color:var(--text-mid); margin-bottom:4px;">Kamuya Açık Profil Linkiniz</label>
        <div style="display:flex; gap:8px;">
          <input type="text" readonly value="${u}" id="coachBulLink" style="flex:1; background:var(--surface3); border:1px solid var(--border); border-radius:9px; padding:10px 13px; font-size:13px; color:var(--text-mid); outline:none;">
          <button class="btn btn-ghost" onclick="navigator.clipboard.writeText(document.getElementById('coachBulLink').value); showToast('Link kopyalandı ✓')">🔗 Kopyala</button>
          <a href="${u}" target="_blank" class="btn btn-accent" style="text-decoration:none; display:inline-flex; align-items:center;">👁 Göster</a>
        </div>
      </div>

      <div class="coach-profile-container">
        <!-- Sol Sütun: Form -->
        <div class="card coach-profile-form" style="margin:0; padding:20px;">
          <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px; margin-bottom:12px;">
            <div>
              <label style="display:block; font-size:11px; font-weight:700; color:var(--text-mid); margin-bottom:4px;">Uzmanlık Alanı / Dersler (Virgülle ayırın)</label>
              <input type="text" id="cpSubjects" value="${v(r)}" placeholder="Örn: Matematik, Fizik, Türkçe" oninput="updateProfilePreview()" style="width:100%; background:var(--surface2); border:1.5px solid var(--border); border-radius:9px; padding:10px 13px; font-size:14px; color:var(--text); outline:none;">
            </div>
            <div>
              <label style="display:block; font-size:11px; font-weight:700; color:var(--text-mid); margin-bottom:4px;">Profil Fotoğrafı URL'si</label>
              <input type="text" id="cpPhotoUrl" value="${v(c)}" placeholder="https://..." oninput="updateProfilePreview()" style="width:100%; background:var(--surface2); border:1.5px solid var(--border); border-radius:9px; padding:10px 13px; font-size:14px; color:var(--text); outline:none;">
            </div>
          </div>
          
          <div style="margin-bottom: 12px;">
            <label style="display:block; font-size:11px; font-weight:700; color:var(--text-mid); margin-bottom:4px;">Hakkımda / Biyografi</label>
            <textarea id="cpBio" oninput="updateProfilePreview()" style="width:100%; min-height:100px; background:var(--surface2); border:1.5px solid var(--border); border-radius:9px; padding:10px 13px; font-size:14px; color:var(--text); outline:none; resize:vertical;">${v(o)}</textarea>
          </div>

          <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px; margin-bottom:12px;">
            <div>
              <label style="display:block; font-size:11px; font-weight:700; color:var(--text-mid); margin-bottom:4px;">Eğitim Bilgisi</label>
              <textarea id="cpEducation" oninput="updateProfilePreview()" style="width:100%; min-height:80px; background:var(--surface2); border:1.5px solid var(--border); border-radius:9px; padding:10px 13px; font-size:14px; color:var(--text); outline:none; resize:vertical;">${v(s)}</textarea>
            </div>
            <div>
              <label style="display:block; font-size:11px; font-weight:700; color:var(--text-mid); margin-bottom:4px;">Deneyim / Başarılar</label>
              <textarea id="cpExperience" oninput="updateProfilePreview()" style="width:100%; min-height:80px; background:var(--surface2); border:1.5px solid var(--border); border-radius:9px; padding:10px 13px; font-size:14px; color:var(--text); outline:none; resize:vertical;">${v(d)}</textarea>
            </div>
          </div>

          <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px; margin-bottom:20px;">
            <div>
              <label style="display:block; font-size:11px; font-weight:700; color:var(--text-mid); margin-bottom:4px;">Instagram Kullanıcı Adı (İsteğe bağlı)</label>
              <div style="display:flex; align-items:center; background:var(--surface2); border:1.5px solid var(--border); border-radius:9px; padding:0 13px;">
                <span style="color:var(--text-dim); margin-right:4px;">@</span>
                <input type="text" id="cpInstagram" value="${v(p)}" placeholder="kullaniciadi" oninput="updateProfilePreview()" style="flex:1; background:none; border:none; padding:10px 0; font-size:14px; color:var(--text); outline:none;">
              </div>
            </div>
            <div>
              <label style="display:block; font-size:11px; font-weight:700; color:var(--text-mid); margin-bottom:4px;">LinkedIn Profil URL (İsteğe bağlı)</label>
              <input type="text" id="cpLinkedin" value="${v(m)}" placeholder="https://linkedin.com/in/..." oninput="updateProfilePreview()" style="width:100%; background:var(--surface2); border:1.5px solid var(--border); border-radius:9px; padding:10px 13px; font-size:14px; color:var(--text); outline:none;">
            </div>
          </div>

          <button class="btn btn-accent" style="width:100%; padding:12px; font-size:14px;" onclick="saveCoachProfile()">Kaydet ✓</button>
        </div>

        <!-- Sağ Sütun: Canlı Önizleme -->
        <div class="coach-preview-column">
          <div style="position: sticky; top: 10px;">
            <div style="font-size: 11px; font-weight: 700; color: var(--text-dim); text-transform: uppercase; letter-spacing: .5px; margin-bottom: 8px; text-align: center;">CANLI ÖNİZLEME</div>
            <div class="profile-preview-card">
              <div class="preview-card-header">
                <div class="preview-avatar" id="prevAvatar"></div>
                <div class="preview-header-info">
                  <div class="preview-name" id="prevName">${v(((g=x.dbUser)==null?void 0:g.full_name)||"Koç")}</div>
                  <div class="preview-role">Mentör & Koç</div>
                  <div class="preview-socials" id="prevSocials"></div>
                </div>
              </div>
              
              <div class="preview-subjects-wrap" id="prevSubjects"></div>
              
              <div class="preview-tabs">
                <button class="prev-tab-btn active" id="btn-prev-bio" onclick="switchPreviewTab('bio')">Biyografi</button>
                <button class="prev-tab-btn" id="btn-prev-edu" onclick="switchPreviewTab('edu')">Eğitim</button>
                <button class="prev-tab-btn" id="btn-prev-exp" onclick="switchPreviewTab('exp')">Deneyim</button>
              </div>
              
              <div class="preview-tab-content" id="prevTabContent"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,on()}let ut="bio";function on(){var u,g,E,T,f,$,w,B;const e=((u=document.getElementById("cpPhotoUrl"))==null?void 0:u.value.trim())||"",t=((g=document.getElementById("cpSubjects"))==null?void 0:g.value.trim())||"",n=((E=document.getElementById("cpBio"))==null?void 0:E.value.trim())||"",a=((T=document.getElementById("cpEducation"))==null?void 0:T.value.trim())||"",i=((f=document.getElementById("cpExperience"))==null?void 0:f.value.trim())||"",o=(($=document.getElementById("cpInstagram"))==null?void 0:$.value.trim())||"",r=((w=document.getElementById("cpLinkedin"))==null?void 0:w.value.trim())||"",s=((B=x.dbUser)==null?void 0:B.full_name)||"Koç",d=document.getElementById("prevAvatar");if(d)if(e)d.style.backgroundImage=`url('${e}')`,d.style.backgroundColor="transparent",d.innerHTML="";else{d.style.backgroundImage="",d.style.backgroundColor="var(--accent-dim)";const h=s.split(" ").map(S=>S[0]).join("").slice(0,2).toUpperCase();d.innerHTML=h||"?"}const c=document.getElementById("prevSocials");if(c){let h="";if(o&&(h+=`<a href="https://instagram.com/${o}" target="_blank" class="preview-social-link" title="Instagram">📸 @${o}</a>`),r){let S="LinkedIn";r.includes("/in/")&&(S="in/"+r.split("/in/")[1].split("/")[0]),h+=`<a href="${r}" target="_blank" class="preview-social-link" title="LinkedIn">💼 ${S}</a>`}c.innerHTML=h}const p=document.getElementById("prevSubjects");if(p)if(t){const h=t.split(",").map(S=>S.trim()).filter(Boolean);p.innerHTML=h.map(S=>`<span class="preview-tag">${v(S)}</span>`).join("")}else p.innerHTML='<span class="preview-tag" style="background:none; border:1px dashed var(--border); color:var(--text-dim)">Ders / Uzmanlık Belirtilmedi</span>';const m=document.getElementById("prevTabContent");if(m){let h="";ut==="bio"?h=n||"Biyografi bilgisi henüz girilmedi.":ut==="edu"?h=a||"Eğitim bilgisi henüz girilmedi.":ut==="exp"&&(h=i||"Deneyim/başarılar henüz girilmedi."),m.innerHTML=ka(v(h))}}function Ms(e){ut=e;const t=document.getElementById("btn-prev-bio"),n=document.getElementById("btn-prev-edu"),a=document.getElementById("btn-prev-exp");t&&t.classList.toggle("active",e==="bio"),n&&n.classList.toggle("active",e==="edu"),a&&a.classList.toggle("active",e==="exp"),on()}function ka(e){return e.replace(/\n/g,"<br>")}async function As(){const e=x.dbUser.id,t=document.getElementById("cpBio").value.trim(),n=document.getElementById("cpSubjects").value.trim(),a=document.getElementById("cpEducation").value.trim(),i=document.getElementById("cpExperience").value.trim(),o=document.getElementById("cpPhotoUrl").value.trim(),r=document.getElementById("cpInstagram").value.trim(),s=document.getElementById("cpLinkedin").value.trim(),d={id:e,bio:t,subjects:n,education:a,experience:i,photo_url:o,instagram:r,linkedin:s,updated_at:new Date().toISOString()};localStorage.setItem(`coach_profile_${e}`,JSON.stringify(d));const{error:c}=await y.from("coach_profiles").upsert(d);c?(console.warn("Database save failed, profile saved locally in localStorage:",c),b("Profil yerel tarayıcıya kaydedildi (Veritabanı RLS hatası: "+c.message+")")):b("Profil başarıyla güncellendi ✓")}async function sn(){const e=document.getElementById("view-dev-matches");if(!e)return;e.innerHTML='<div class="loading">Eşleşmeler yükleniyor...</div>';const{data:t,error:n}=await y.from("match_requests").select("*, matched_coach:matched_coach_id(full_name, username)").order("created_at",{ascending:!1});if(n){e.innerHTML=`<div style="padding:20px;color:var(--red)">Eşleşme başvuruları yüklenirken hata oluştu: ${v(n.message)}</div>`;return}const a={pending:"⏳ Bekliyor",matched:"🤝 Eşleştirildi",completed:"✅ Tamamlandı"},i={pending:"rgba(240, 165, 0, 0.15)",matched:"rgba(96, 180, 255, 0.15)",completed:"rgba(62, 207, 142, 0.15)"},o={pending:"var(--accent)",matched:"var(--accent4)",completed:"var(--green)"};e.innerHTML=`
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
            `:t.map(r=>`
              <tr style="border-bottom:1px solid var(--border);">
                <td style="padding:10px;">
                  <div style="font-weight:700;">${v(r.student_name)}</div>
                  <div style="font-size:11px; color:var(--text-mid);">${v(r.email)}</div>
                  <div style="font-size:11px; color:var(--text-mid);">${v(r.phone||"—")}</div>
                </td>
                <td style="padding:10px;">
                  <span style="background:var(--accent-dim); color:var(--accent); font-size:11px; font-weight:700; padding:2px 8px; border-radius:12px;">${v(r.exam_profile)}</span>
                  <div style="font-size:11px; color:var(--text-mid); margin-top:4px;">Stil: ${v(r.style||"Belirtilmemiş")}</div>
                </td>
                <td style="padding:10px;">
                  ${r.matched_coach?`
                    <div style="font-weight:600; color:var(--accent2);">${v(r.matched_coach.full_name)}</div>
                    <div style="font-size:11px; color:var(--text-mid);">@${v(r.matched_coach.username)}</div>
                  `:'<span style="color:var(--text-dim);">Herhangi Biri</span>'}
                </td>
                <td style="padding:10px;">
                  <span style="background:${i[r.status]}; color:${o[r.status]}; font-size:11px; font-weight:700; padding:4px 10px; border-radius:99px; display:inline-block;">
                    ${a[r.status]||r.status}
                  </span>
                </td>
                <td style="padding:10px; font-size:11px; color:var(--text-mid);">
                  ${new Date(r.created_at).toLocaleDateString("tr-TR")}
                </td>
                <td style="padding:10px;">
                  <select onchange="updateMatchRequestStatus('${r.id}', this.value)" style="background:var(--surface3); border:1px solid var(--border); border-radius:6px; color:var(--text); padding:4px 8px; font-size:12px; outline:none; cursor:pointer;">
                    <option value="pending" ${r.status==="pending"?"selected":""}>⏳ Bekliyor</option>
                    <option value="matched" ${r.status==="matched"?"selected":""}>🤝 Eşleştirildi</option>
                    <option value="completed" ${r.status==="completed"?"selected":""}>✅ Tamamlandı</option>
                  </select>
                </td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>
    </div>
  `}async function Ds(e,t){const{error:n}=await y.from("match_requests").update({status:t}).eq("id",e);n?b("Durum güncellenirken hata: "+n.message):(b("Durum güncellendi ✓"),sn())}async function Cs(e){const t=l.students.find(r=>r.id===e);if(!t)return;const{data:n}=await y.from("student_speeds").select("*").eq("student_id",e),a={};(n||[]).forEach(r=>{a[`${r.exam_type}_${r.subject}`]=r.secs_per_question});const i=[{exam:"TYT",sub:"Matematik"},{exam:"TYT",sub:"Türkçe"},{exam:"TYT",sub:"Fizik"},{exam:"TYT",sub:"Kimya"},{exam:"TYT",sub:"Biyoloji"},{exam:"TYT",sub:"Geometri"},{exam:"AYT-SAY",sub:"Matematik"},{exam:"AYT-SAY",sub:"Fizik"},{exam:"AYT-SAY",sub:"Kimya"},{exam:"AYT-SAY",sub:"Biyoloji"}];let o=document.getElementById("speedModal");o||(o=document.createElement("div"),o.id="speedModal",o.className="modal-bg",document.body.appendChild(o),o.addEventListener("click",r=>{r.target===o&&o.classList.remove("open")})),o.innerHTML=`<div class="modal modal-lg">
    <button class="modal-close" onclick="cm('speedModal')">×</button>
    <h2>⚡ ${v(t.name)} — Soru Çözme Hızı</h2>
    <p style="font-size:13px;color:var(--text-mid);margin-bottom:16px">Her ders için öğrencinin soru başına harcadığı saniyeyi girin. Görev eklerken süre otomatik hesaplanır.</p>
    <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(180px,1fr));gap:10px">
      ${i.map(({exam:r,sub:s})=>{const d=`${r}_${s}`,c=a[d]||180,p=Math.floor(c/60);return`<div style="background:var(--surface2);border:1px solid var(--border);border-radius:10px;padding:12px">
          <div style="font-size:10px;font-weight:700;color:var(--accent);text-transform:uppercase;letter-spacing:.5px;margin-bottom:2px">${r}</div>
          <div style="font-size:13px;font-weight:700;margin-bottom:8px">${s}</div>
          <div style="display:flex;align-items:center;gap:6px">
            <input type="number" id="spd_${d}" value="${c}" min="10" max="600" step="5"
              style="width:70px;background:var(--surface3);border:1px solid var(--border);border-radius:6px;padding:5px 8px;font-size:13px;font-weight:700;color:var(--text);text-align:center">
            <span style="font-size:11px;color:var(--text-dim)">sn/soru</span>
          </div>
          <div style="font-size:10px;color:var(--text-dim);margin-top:4px">${p>0?p+"dk ":""}</div>
        </div>`}).join("")}
    </div>
    <button class="btn btn-accent" style="width:100%;justify-content:center;padding:12px;margin-top:16px" onclick="saveAllSpeeds('${e}')">Tümünü Kaydet</button>
  </div>`,G("speedModal")}async function Ls(e){const t=[{exam:"TYT",sub:"Matematik"},{exam:"TYT",sub:"Türkçe"},{exam:"TYT",sub:"Fizik"},{exam:"TYT",sub:"Kimya"},{exam:"TYT",sub:"Biyoloji"},{exam:"TYT",sub:"Geometri"},{exam:"AYT-SAY",sub:"Matematik"},{exam:"AYT-SAY",sub:"Fizik"},{exam:"AYT-SAY",sub:"Kimya"},{exam:"AYT-SAY",sub:"Biyoloji"}];for(const{exam:n,sub:a}of t){const i=`${n}_${a}`,o=document.getElementById("spd_"+i);if(!o)continue;const r=parseInt(o.value)||180;await Zn(e,n,a,r)}q("speedModal"),b("Hız ayarları kaydedildi ✓")}async function js(e){const t=l.students.find(o=>o.id===e);if(!t)return;const{data:n}=await y.from("student_notes").select("notes").eq("coach_id",x.coachId).eq("student_id",e).maybeSingle(),a=(n==null?void 0:n.notes)||"";let i=document.getElementById("studentNotesModal");i||(i=document.createElement("div"),i.id="studentNotesModal",i.className="modal-bg",document.body.appendChild(i),i.addEventListener("click",o=>{o.target===i&&i.classList.remove("open")})),i.innerHTML=`<div class="modal">
    <button class="modal-close" onclick="cm('studentNotesModal')">×</button>
    <h2>📝 ${v(t.name)} — Notlar</h2>
    <p style="font-size:13px;color:var(--text-mid);margin-bottom:16px">Öğrenciyle ilgili gözlemler, önemli bilgiler, hatırlatmalar…</p>
    <div class="field">
      <textarea id="studentNoteText" style="min-height:260px;font-size:13px;line-height:1.7;resize:vertical" placeholder="Örnek: Türkçe paragrafta hız sorunu var. Veli baskılı, motivasyon takip edilmeli. Son denemede geometri 4 yanlış...">${v(a)}</textarea>
    </div>
    <button class="btn btn-accent" style="width:100%;justify-content:center;padding:12px;margin-top:4px" onclick="saveStudentNote('${e}')">Kaydet</button>
  </div>`,G("studentNotesModal")}async function Ps(e){const t=document.getElementById("studentNoteText").value,{error:n}=await y.from("student_notes").upsert({coach_id:x.coachId,student_id:e,notes:t,updated_at:new Date().toISOString()},{onConflict:"coach_id,student_id"});if(n){b("Not kaydedilemedi: "+n.message);return}b("Not kaydedildi ✓"),q("studentNotesModal")}function Rs(e){let t=document.getElementById("reportModal");t||(t=document.createElement("div"),t.id="reportModal",t.className="modal-bg",t.innerHTML=`<div class="modal">
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
    </div>`,document.body.appendChild(t),t.addEventListener("click",i=>{i.target===t&&t.classList.remove("open")}),document.getElementById("rpPeriod").addEventListener("change",function(){document.getElementById("rpCustomDates").style.display=this.value==="custom"?"":"none"})),document.getElementById("rpStuId").value=e;const n=new Date,a=new Date(n.getFullYear(),n.getMonth(),1);document.getElementById("rpStart").value=O(a),document.getElementById("rpEnd").value=O(n),document.getElementById("rpNote").value="",G("reportModal")}function rn(){const e=document.getElementById("rpPeriod").value,t=new Date;if(e==="weekly"){const n=ne(0,0);return{start:O(n),end:O(J(n,6))}}else return e==="monthly"?{start:O(new Date(t.getFullYear(),t.getMonth(),1)),end:O(t)}:{start:document.getElementById("rpStart").value,end:document.getElementById("rpEnd").value}}function ln(e,t=!1){var h,S,I,z;const n=l.students.find(_=>_.id===e);if(!n)return"";const{start:a,end:i}=rn(),o=document.getElementById("rpNote").value.trim(),r=((h=l.workspace)==null?void 0:h.brand_name)||"Rostrum Akademi",s=((S=l.workspace)==null?void 0:S.brand_color)||"#E8613A",d=((I=x.dbUser)==null?void 0:I.full_name)||"Koç",c=[],p=new Date(a);for(;O(p)<=i;){const _=`${e}_${O(p)}`;(l.tasks[_]||[]).forEach(D=>c.push({...D,date:O(p)})),p.setDate(p.getDate()+1)}const m=c.length,u=c.filter(_=>_.done).length,g=m>0?Math.round(u/m*100):0,E=c.filter(_=>_.done).reduce((_,D)=>_+Number(D.duration||0),0),T={};c.forEach(_=>{const D=_.subject||"Diğer";T[D]||(T[D]={total:0,done:0}),T[D].total++,_.done&&T[D].done++});const f=l.exams.filter(_=>_.studentId===e&&_.date>=a&&_.date<=i).sort((_,D)=>_.date.localeCompare(D.date)),$=l.appointments.filter(_=>_.studentId===e&&_.date>=a&&_.date<=i).sort((_,D)=>_.date.localeCompare(D.date)),w=`${new Date(a+"T12:00").toLocaleDateString("tr-TR",{day:"numeric",month:"long",year:"numeric"})} – ${new Date(i+"T12:00").toLocaleDateString("tr-TR",{day:"numeric",month:"long",year:"numeric"})}`;let B="";if(f.length>1){const _=Math.max(...f.map(k=>(EXAM_DEFS[k.type]||[]).reduce((A,j)=>{var P;return A+Number(((P=k.nets)==null?void 0:P[j])||0)},0)),1),D=400,C=80,L=Math.min(40,(D-20)/f.length-4);B=`<svg width="${D}" height="${C+30}" style="overflow:visible">
      ${f.map((k,A)=>{const j=(EXAM_DEFS[k.type]||[]).reduce((H,F)=>{var V;return H+Number(((V=k.nets)==null?void 0:V[F])||0)},0),P=Math.max(Math.round(j/_*(C-10)),4),Y=10+A*((D-20)/f.length);return`<rect x="${Y}" y="${C-P}" width="${L}" height="${P}" rx="3" fill="${s}" opacity="0.85"/>
          <text x="${Y+L/2}" y="${C-P-4}" text-anchor="middle" font-size="10" fill="#333">${j.toFixed(0)}</text>
          <text x="${Y+L/2}" y="${C+14}" text-anchor="middle" font-size="9" fill="#666">${v(k.name.replace("Deneme","").replace("TYT","").replace("AYT","").trim()||String(A+1))}</text>`}).join("")}
    </svg>`}return`<!DOCTYPE html>
<html lang="tr">
<head>
<meta charset="UTF-8">
<style>
  *{margin:0;padding:0;box-sizing:border-box;}
  body{font-family:'Segoe UI',Arial,sans-serif;color:#1a1a1a;background:#fff;font-size:13px;line-height:1.5;}
  .page{max-width:800px;margin:0 auto;padding:${t?"30px":"20px 30px"};}
  .header{display:flex;justify-content:space-between;align-items:flex-start;padding-bottom:18px;border-bottom:3px solid ${s};margin-bottom:24px;}
  .brand{font-size:22px;font-weight:800;color:${s};letter-spacing:-0.5px;}
  .brand-sub{font-size:11px;color:#888;margin-top:3px;}
  .report-title{text-align:right;}
  .report-title h1{font-size:18px;font-weight:700;color:#1a1a1a;}
  .report-title p{font-size:11px;color:#888;margin-top:3px;}
  .student-hero{background:linear-gradient(135deg,${s}15,${s}05);border:1.5px solid ${s}30;border-radius:12px;padding:18px 22px;margin-bottom:20px;display:flex;align-items:center;gap:16px;}
  .stu-avatar{width:52px;height:52px;border-radius:12px;background:${s};color:#fff;font-size:22px;font-weight:800;display:flex;align-items:center;justify-content:center;flex-shrink:0;}
  .stu-name{font-size:20px;font-weight:800;}
  .stu-target{font-size:12px;color:#666;margin-top:3px;}
  .stats-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin-bottom:20px;}
  .stat-box{background:#f8f8f8;border:1px solid #e8e8e8;border-radius:10px;padding:12px 14px;text-align:center;}
  .stat-box .val{font-size:26px;font-weight:800;color:${s};}
  .stat-box .lbl{font-size:10px;color:#888;margin-top:3px;text-transform:uppercase;letter-spacing:.5px;}
  .section{margin-bottom:20px;}
  .section-title{font-size:14px;font-weight:700;color:${s};margin-bottom:10px;padding-bottom:6px;border-bottom:1.5px solid ${s}20;display:flex;align-items:center;gap:6px;}
  table{width:100%;border-collapse:collapse;font-size:12px;}
  th{background:${s}15;color:#333;font-weight:700;padding:8px 10px;text-align:left;font-size:11px;text-transform:uppercase;letter-spacing:.4px;}
  td{padding:7px 10px;border-bottom:1px solid #f0f0f0;}
  tr:last-child td{border-bottom:none;}
  .badge{display:inline-block;padding:2px 8px;border-radius:99px;font-size:10px;font-weight:700;}
  .badge-green{background:#e8faf3;color:#16a34a;}
  .badge-yellow{background:#fef9ec;color:#ca8a04;}
  .badge-red{background:#fef2f2;color:#dc2626;}
  .prog-bar{height:8px;background:#eee;border-radius:99px;overflow:hidden;margin-top:4px;}
  .prog-fill{height:100%;border-radius:99px;background:${s};}
  .note-box{background:#fffbeb;border:1.5px solid ${s}40;border-radius:10px;padding:14px 16px;}
  .note-box .note-header{font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.5px;color:${s};margin-bottom:6px;}
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
      <div class="brand">${v(r)}</div>
      <div class="brand-sub">Koç: ${v(d)}</div>
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
      <div class="stu-name">${v(n.name)}</div>
      <div class="stu-target">${v(n.target)}</div>
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
    <div class="stat-box"><div class="val">%${g}</div><div class="lbl">Tamamlanma</div></div>
    <div class="stat-box"><div class="val">${Math.round(E/60)}</div><div class="lbl">Çalışma (saat)</div></div>
  </div>

  <!-- DERS BAZINDA ÇALIŞMA -->
  ${Object.keys(T).length>0?`
  <div class="section">
    <div class="section-title">📚 Ders Bazında Çalışma</div>
    <table>
      <thead><tr><th>Ders</th><th>Toplam</th><th>Tamamlanan</th><th>Oran</th><th></th></tr></thead>
      <tbody>
        ${Object.entries(T).sort((_,D)=>D[1].total-_[1].total).map(([_,D])=>{const C=Math.round(D.done/D.total*100),L=C>=80?"badge-green":C>=50?"badge-yellow":"badge-red";return`<tr>
            <td><strong>${v(_)}</strong></td>
            <td>${D.total}</td>
            <td>${D.done}</td>
            <td><span class="badge ${L}">%${C}</span></td>
            <td style="width:120px"><div class="prog-bar"><div class="prog-fill" style="width:${C}%"></div></div></td>
          </tr>`}).join("")}
      </tbody>
    </table>
  </div>`:""}

  <!-- DENEMELER -->
  ${f.length>0?`
  <div class="section">
    <div class="section-title">📊 Deneme Sonuçları</div>
    ${B?`<div style="margin-bottom:16px;padding:12px;background:#f8f8f8;border-radius:8px">${B}</div>`:""}
    <table>
      <thead><tr><th>Sınav</th><th>Tarih</th><th>Tür</th>${(EXAM_DEFS[(z=f[0])==null?void 0:z.type]||[]).map(_=>`<th>${_}</th>`).join("")}<th>Toplam</th></tr></thead>
      <tbody>
        ${f.map(_=>{const D=EXAM_DEFS[_.type]||[],C=D.reduce((L,k)=>{var A;return L+Number(((A=_.nets)==null?void 0:A[k])||0)},0).toFixed(1);return`<tr>
            <td><strong>${v(_.name)}</strong></td>
            <td>${new Date(_.date+"T12:00").toLocaleDateString("tr-TR",{day:"numeric",month:"short"})}</td>
            <td>${v(_.type)}</td>
            ${D.map(L=>{var A;const k=Number(((A=_.nets)==null?void 0:A[L])||0);return`<td><span class="badge ${k>=20?"badge-green":k>=12?"badge-yellow":"badge-red"}">${k}</span></td>`}).join("")}
            <td><strong>${C}</strong></td>
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
        ${$.map(_=>`<tr>
          <td>${new Date(_.date+"T12:00").toLocaleDateString("tr-TR",{weekday:"short",day:"numeric",month:"short"})}</td>
          <td>${_.time}</td>
          <td>${v(_.type)}</td>
          <td>${_.duration} dk</td>
        </tr>`).join("")}
      </tbody>
    </table>
  </div>`:""}

  <!-- KOÇ NOTU -->
  ${o?`
  <div class="section">
    <div class="note-box">
      <div class="note-header">Koç Değerlendirmesi</div>
      <div style="font-size:13px;line-height:1.7;color:#333">${v(o).replace(/\n/g,"<br>")}</div>
      <div style="margin-top:10px;font-size:11px;color:#888">— ${v(d)}</div>
    </div>
  </div>`:""}

  <!-- FOOTER -->
  <div class="footer">
    <span>${v(r)} · ${v(d)}</span>
    <span>${v(n.name)} · ${w}</span>
    <span>Rostrum Akademi Platformu</span>
  </div>
</div>
</body>
</html>`}function Ns(){const e=document.getElementById("rpStuId").value,t=ln(e,!0),n=window.open("","_blank","width=900,height=700");n.document.write(t),n.document.close()}function Hs(){const e=document.getElementById("rpStuId").value;l.students.find(a=>a.id===e);const t=ln(e,!1),n=window.open("","_blank");n.document.write(t),n.document.close(),setTimeout(()=>{n.focus(),n.print()},500),q("reportModal"),b('PDF oluşturuluyor — "PDF olarak kaydet" seçin')}async function Ys(){const e=document.getElementById("rpStuId").value,t=l.students.find(r=>r.id===e);if(!t)return;const n=`${window.location.origin}/api/generate-pdf-report?studentId=${e}`,a=`Merhaba, ${t.name} isimli öğrencimizin bu dönemki performans ve gelişim raporu hazırlandı. Aşağıdaki bağlantıdan raporu detaylıca görüntüleyebilirsiniz:

🔗 ${n}`,o=`https://api.whatsapp.com/send?text=${encodeURIComponent(a)}`;window.open(o,"_blank"),q("reportModal"),b("WhatsApp yönlendirmesi açıldı ✓")}function Ks(){let e=document.getElementById("weeklyPDFModal");e||(e=document.createElement("div"),e.id="weeklyPDFModal",e.className="modal-bg",e.innerHTML=`<div class="modal">
      <button class="modal-close" onclick="cm('weeklyPDFModal')">×</button>
      <h2>🖨️ Haftalık Program PDF</h2>
      <div class="field">
        <label>Koç Notu (isteğe bağlı)</label>
        <textarea id="pdfNote" placeholder="Bu haftaki programla ilgili notunuzu ekleyin..." style="min-height:90px"></textarea>
      </div>
      <button class="btn btn-accent" style="width:100%;justify-content:center;padding:12px" onclick="generateWeeklyPDF()">PDF Oluştur →</button>
    </div>`,document.body.appendChild(e),e.addEventListener("click",t=>{t.target===e&&e.classList.remove("open")})),document.getElementById("pdfNote").value="",G("weeklyPDFModal")}function Os(){const e=document.getElementById("pdfNote").value.trim();q("weeklyPDFModal"),wa(l.activeStuId,e)}function wa(e,t){var C,L;const n=l.students.find(k=>k.id===e);if(!n)return;const a=(n==null?void 0:n.weekStart)??0,i=ne(l.weekOffset,a),o=J(i,6),r=((C=l.workspace)==null?void 0:C.brand_name)||"Rostrum Akademi",s=((L=l.workspace)==null?void 0:L.brand_color)||"#E8613A",d=["Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi","Pazar"],c=["Ocak","Şubat","Mart","Nisan","Mayıs","Haziran","Temmuz","Ağustos","Eylül","Ekim","Kasım","Aralık"],p={deneme:"#f59e0b",soru:"#3b82f6",konu:"#10b981",diger:"#8b5cf6"},m={deneme:"Deneme",soru:"Soru Bankası",konu:"Konu Anlatımı",diger:"Diğer"};let u=0,g=0,E=0;const T=[];for(let k=0;k<7;k++){const A=J(i,k),j=O(A),P=l.tasks[`${e}_${j}`]||[];u+=P.length,g+=P.filter(Y=>Y.done).length,E+=P.reduce((Y,H)=>Y+Number(H.duration||0),0),P.length>0&&T.push({d:A,ds:j,tasks:P,dayName:d[(a+k)%7]})}const f=u>0?Math.round(g/u*100):0,$=163.36,w=($*(1-f/100)).toFixed(1),B=(k,A=5)=>{let j="";for(let P=1;P<=A;P++)j+=`<span style="display:inline-block;width:6px;height:6px;border-radius:50%;margin-right:2px;background:${P<=k?s:"#E8E6DE"}"></span>`;return j},h=k=>k?'<span style="display:inline-flex;align-items:center;justify-content:center;width:15px;height:15px;border-radius:50%;background:#22C55E;flex-shrink:0"><svg width="8" height="6" viewBox="0 0 8 6"><path d="M1 3L3 5L7 1" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/></svg></span>':'<span style="display:inline-block;width:15px;height:15px;border-radius:50%;border:1.5px solid #D1D0DC;flex-shrink:0"></span>';let S="";for(const{d:k,tasks:A,dayName:j}of T){const P=A.reduce((H,F)=>H+Number(F.duration||0),0),Y=A.map(H=>{const F=p[H.type]||"#94a3b8",V=m[H.type]||"Diğer",Z=H.done,te=H.student_result||null,Q=H.student_feedback||null,R=te&&(te.dogru!=null||te.yanlis!=null||te.bos!=null)?`
        <div style="display:flex;gap:4px;margin-top:5px;margin-left:21px">
          <span style="display:inline-flex;align-items:center;padding:2px 7px;border-radius:99px;font-size:9px;font-weight:700;background:#DCFCE7;color:#15803D">✓ ${te.dogru??0}</span>
          <span style="display:inline-flex;align-items:center;padding:2px 7px;border-radius:99px;font-size:9px;font-weight:700;background:#FEE2E2;color:#B91C1C">✗ ${te.yanlis??0}</span>
          <span style="display:inline-flex;align-items:center;padding:2px 7px;border-radius:99px;font-size:9px;font-weight:700;background:#F1F5F9;color:#64748B">— ${te.bos??0}</span>
        </div>`:"",N=H.student_note?`<div style="font-size:9px;color:#9998AA;font-style:italic;margin-top:4px;margin-left:21px;line-height:1.4">"${v(H.student_note)}"</div>`:"",K=Q&&(Q.difficulty||Q.focus)?`
        <div style="display:flex;flex-direction:column;align-items:flex-end;gap:3px;margin-top:6px">
          ${Q.difficulty?`<div style="white-space:nowrap"><span style="font-size:8px;color:#C4C3D0">Zorluk </span>${B(Q.difficulty)}</div>`:""}
          ${Q.focus?`<div style="white-space:nowrap"><span style="font-size:8px;color:#C4C3D0">Odak </span>${B(Q.focus)}</div>`:""}
        </div>`:"";return`<div style="background:#fff;border-radius:8px;border:1px solid #E8E6DE;border-left:3px solid ${F};margin-bottom:6px;padding:10px 14px;display:flex;gap:10px;align-items:flex-start">
        <div style="flex:1;min-width:0">
          <div style="display:flex;align-items:center;gap:6px;margin-bottom:3px">
            ${h(Z)}
            <span style="font-size:11px;font-weight:800;color:${Z?"#9998AA":"#111118"};${Z?"text-decoration:line-through":""}">${v(H.subject)}</span>
            <span style="font-size:8px;font-weight:700;color:${F};text-transform:uppercase;letter-spacing:.5px;margin-left:2px">${V}${H.exam?" · "+v(H.exam):""}</span>
          </div>
          ${H.note?`<div style="font-size:9px;color:#6B6A7A;margin-left:21px;line-height:1.4;margin-bottom:2px">${v(H.note)}</div>`:""}
          ${R}
          ${N}
        </div>
        <div style="display:flex;flex-direction:column;align-items:flex-end;flex-shrink:0">
          <span style="font-size:10px;font-weight:600;color:#9998AA;background:#F7F6F2;padding:2px 8px;border-radius:99px;white-space:nowrap">${H.duration} dk</span>
          ${K}
        </div>
      </div>`}).join("");S+=`<div style="margin-bottom:14px">
      <div style="display:flex;align-items:center;gap:10px;margin-bottom:7px">
        <span style="font-size:10px;font-weight:800;text-transform:uppercase;letter-spacing:.1em;color:#111118">${j}</span>
        <span style="font-size:10px;color:#6B6A7A">${k.getDate()} ${c[k.getMonth()]}</span>
        <div style="flex:1;height:1px;background:#E8E6DE"></div>
        <span style="font-size:9px;color:#9998AA">${A.length} görev · ${P} dk</span>
      </div>
      ${Y}
    </div>`}const z=[{val:g,lbl:"Tamamlanan",col:"#22C55E"},{val:u-g,lbl:"Bekleyen",col:"#C4C3D0"},{val:Math.round(E/60)+" sa",lbl:"Toplam Süre",col:s},{val:u,lbl:"Toplam Görev",col:"#C4C3D0"}].map((k,A)=>`<div style="flex:1;${A>0?"border-left:1px solid rgba(255,255,255,.06);padding-left:16px;":""}padding-right:16px">
    <div style="font-size:18px;font-weight:800;color:${k.col};font-variant-numeric:tabular-nums">${k.val}</div>
    <div style="font-size:8px;color:#6B6A7A;text-transform:uppercase;letter-spacing:.07em">${k.lbl}</div>
  </div>`).join(""),_=`<!DOCTYPE html><html lang="tr"><head><meta charset="UTF-8"><title>${v(n.name)} — Haftalık Program</title>
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
      <div style="position:absolute;right:-50px;top:-50px;width:180px;height:180px;border-radius:50%;background:${s};opacity:.07;pointer-events:none"></div>
      <div style="display:flex;justify-content:space-between;align-items:flex-start;gap:20px">
        <div>
          <div style="font-size:9px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:${s};margin-bottom:6px">${v(r)} · Haftalık Program</div>
          <div style="font-size:24px;font-weight:800;color:#F0EFF8;letter-spacing:-.5px;line-height:1.1">${v(n.name)}</div>
          ${n.target?`<div style="font-size:11px;color:#8B8A99;margin-top:4px">🎯 ${v(n.target)}</div>`:""}
        </div>
        <div style="display:flex;flex-direction:column;align-items:flex-end;gap:8px;flex-shrink:0">
          <div style="position:relative;width:64px;height:64px">
            <svg width="64" height="64" viewBox="0 0 64 64" style="transform:rotate(-90deg)">
              <circle cx="32" cy="32" r="26" fill="none" stroke="rgba(255,255,255,.07)" stroke-width="5"/>
              <circle cx="32" cy="32" r="26" fill="none" stroke="${s}" stroke-width="5" stroke-linecap="round" stroke-dasharray="${$.toFixed(1)}" stroke-dashoffset="${w}"/>
            </svg>
            <div style="position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center">
              <div style="font-size:14px;font-weight:800;color:#F0EFF8;line-height:1">%${f}</div>
              <div style="font-size:7px;color:#6B6A7A;text-transform:uppercase;letter-spacing:.05em;margin-top:1px">hafta</div>
            </div>
          </div>
          <div style="text-align:right">
            <div style="font-size:9px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:#6B6A7A">Hafta</div>
            <div style="font-size:12px;font-weight:700;color:#C4C3D0;margin-top:1px">${i.getDate()} – ${o.getDate()} ${c[o.getMonth()]} ${o.getFullYear()}</div>
          </div>
        </div>
      </div>
      <div style="display:flex;gap:0;margin-top:16px;border-top:1px solid rgba(255,255,255,.06);padding-top:14px">${z}</div>
    </div>
    <div style="background:#F7F6F2;padding:18px 24px 20px">
      ${T.length===0?'<div style="text-align:center;color:#9998AA;padding:40px 0;font-size:13px">Bu hafta için görev bulunmuyor.</div>':S}
      ${t?`<div style="background:#fff;border-radius:8px;border:1px solid #E8E6DE;border-left:3px solid ${s};padding:10px 14px;margin-top:4px">
        <div style="font-size:8px;font-weight:800;color:${s};text-transform:uppercase;letter-spacing:.06em;margin-bottom:4px">Koç Notu</div>
        <div style="font-size:10px;color:#444;line-height:1.6">${v(t)}</div>
      </div>`:""}
    </div>
    <div style="background:#111118;padding:14px 28px;display:flex;align-items:center;justify-content:space-between">
      <div style="font-size:10px;font-style:italic;color:#6B6A7A;max-width:380px;line-height:1.5">"Bugün emek harcadığın her dakika, sınav gününde sana geri döner."</div>
      <div style="font-size:9px;font-weight:700;color:#3D3C4A;text-align:right;text-transform:uppercase;letter-spacing:.08em">${v(r)}</div>
    </div>
    <div class="no-print" style="padding:10px 14px;display:flex;align-items:center;gap:12px;background:#F7F6F2;border-top:1px solid #E8E6DE">
      <button onclick="window.print()" style="background:${s};color:#fff;border:none;padding:9px 24px;border-radius:7px;font-size:12px;font-weight:800;cursor:pointer">🖨️ PDF İndir / Yazdır</button>
      <span style="font-size:10px;color:#9998AA">Tarayıcı ayarlarından "Arka plan grafikleri"ni aktif edin</span>
    </div>
  </div>
  </body></html>`,D=window.open("","_blank","width=1000,height=850");D.document.write(_),D.document.close(),setTimeout(()=>D.focus(),300)}async function Fs(){var r,s;G("inviteCodeModal");const e=document.getElementById("invCodeBox");let t=(r=l.workspace)==null?void 0:r.invite_code;if(!t){e.textContent="……";try{const{data:d,error:c}=await y.rpc("ensure_invite_code");!c&&d&&(t=d,l.workspace&&(l.workspace.invite_code=t))}catch{}}if(!t){e.textContent="—",b("Kod alınamadı — sayfayı yenileyip tekrar dene");return}e.textContent=t;const n=`https://rostrumakademi.com/app.html?davet=${t}`,i=`Merhaba! ${((s=l.workspace)==null?void 0:s.brand_name)||"koçun"} koçluk platformuna davetlisin. 🎓

Kayıt linki: ${n}
(Davet kodun: ${t})

Linke tıkla, hesabını oluştur — otomatik olarak bana bağlanacaksın.`,o=document.getElementById("invWaBtn");o&&(o.href="https://wa.me/?text="+encodeURIComponent(i))}function Us(){var t,n;const e=(n=(t=document.getElementById("invCodeBox"))==null?void 0:t.textContent)==null?void 0:n.trim();e&&e.length===6&&dn(e)}function Gs(){var t,n;const e=(n=(t=document.getElementById("invCodeBox"))==null?void 0:t.textContent)==null?void 0:n.trim();e&&e.length===6&&dn(`https://rostrumakademi.com/app.html?davet=${e}`)}function dn(e){navigator.clipboard.writeText(e).then(()=>b("Link kopyalandı ✓")).catch(()=>{const t=document.createElement("textarea");t.value=e,document.body.appendChild(t),t.select(),document.execCommand("copy"),t.remove(),b("Link kopyalandı ✓")})}const $a=[{name:"Terrakota",val:"#e8613a",dim:"rgba(232,97,58,.12)"},{name:"Altın",val:"#f0a500",dim:"rgba(240,165,0,.12)"},{name:"Mavi",val:"#4da6ff",dim:"rgba(77,166,255,.12)"},{name:"Yeşil",val:"#3ecf8e",dim:"rgba(62,207,142,.12)"},{name:"Mor",val:"#c084fc",dim:"rgba(192,132,252,.12)"},{name:"Pembe",val:"#f472b6",dim:"rgba(244,114,182,.12)"},{name:"Kırmızı",val:"#ff5c5c",dim:"rgba(255,92,92,.12)"},{name:"Turkuaz",val:"#06b6d4",dim:"rgba(6,182,212,.12)"}];function _a(){try{const e=JSON.parse(localStorage.getItem("ba_theme")||"{}");e.theme==="dark"?document.documentElement.setAttribute("data-theme","dark"):document.documentElement.removeAttribute("data-theme"),e.accent&&Ea(e.accent,e.accentDim,!1)}catch{}}function Ea(e,t,n=!0){if(document.documentElement.style.setProperty("--accent",e),document.documentElement.style.setProperty("--accent-dim",t||"rgba(240,165,0,.12)"),n)try{const a=JSON.parse(localStorage.getItem("ba_theme")||"{}");a.accent=e,a.accentDim=t,localStorage.setItem("ba_theme",JSON.stringify(a))}catch{}}function qs(e){e==="dark"?document.documentElement.setAttribute("data-theme","dark"):document.documentElement.removeAttribute("data-theme");try{const t=JSON.parse(localStorage.getItem("ba_theme")||"{}");t.theme=e,localStorage.setItem("ba_theme",JSON.stringify(t))}catch{}document.querySelectorAll(".theme-btn").forEach(t=>{const n=t.dataset.theme===e;t.style.background=n?"var(--accent-dim)":"",t.style.borderColor=n?"var(--accent)":"",t.style.color=n?"var(--accent)":""})}function Ws(){let e=document.getElementById("themePanel");if(e){e.remove();return}e=document.createElement("div"),e.id="themePanel";const t=document.documentElement.getAttribute("data-theme")!=="light";e.style.cssText="position:fixed;top:60px;right:12px;background:var(--surface);border:1px solid var(--border2);border-radius:14px;padding:18px;z-index:300;box-shadow:var(--shadow-lg);min-width:230px;animation:fadeUp .2s ease",e.innerHTML=`
    <div style="font-family:'Inter',sans-serif;font-size:13px;font-weight:700;margin-bottom:12px;color:var(--text)">🎨 Tema Ayarları</div>
    <div style="font-size:11px;font-weight:700;color:var(--text-mid);text-transform:uppercase;letter-spacing:.5px;margin-bottom:8px">Mod</div>
    <div style="display:flex;gap:6px;margin-bottom:16px">
      <button class="theme-btn btn btn-ghost btn-sm" data-theme="dark" onclick="setTheme('dark')" style="${t?"background:var(--accent-dim);border-color:var(--accent);color:var(--accent)":""}">🌙 Karanlık</button>
      <button class="theme-btn btn btn-ghost btn-sm" data-theme="light" onclick="setTheme('light')" style="${t?"":"background:var(--accent-dim);border-color:var(--accent);color:var(--accent)"}">☀️ Aydınlık</button>
    </div>
    <div style="font-size:11px;font-weight:700;color:var(--text-mid);text-transform:uppercase;letter-spacing:.5px;margin-bottom:8px">Accent Rengi</div>
    <div style="display:flex;gap:7px;flex-wrap:wrap;margin-bottom:14px">
      ${$a.map(n=>`<div onclick="applyAccent('${n.val}','${n.dim}');document.getElementById('themePanel').remove()" title="${n.name}"
        style="width:28px;height:28px;border-radius:8px;background:${n.val};cursor:pointer;transition:transform .1s"
        onmouseover="this.style.transform='scale(1.2)'" onmouseout="this.style.transform=''"></div>`).join("")}
    </div>
    <button onclick="document.getElementById('themePanel').remove()" style="width:100%;background:var(--surface2);border:1px solid var(--border);color:var(--text-mid);border-radius:8px;padding:7px;font-family:inherit;font-size:12px;cursor:pointer">Kapat</button>`,document.body.appendChild(e),setTimeout(()=>document.addEventListener("click",function n(a){!e.contains(a.target)&&!a.target.closest("[onclick*=openThemePanel]")&&(e.remove(),document.removeEventListener("click",n))},!0),150)}let nt=[],Lt=!1;function Ta(){const e=document.getElementById("aiChatBubble"),t=document.querySelector(".ai-header-name"),n=document.getElementById("aiMessages");if(!e||!t||!n)return;nt=[],n.innerHTML=`
    <div class="ai-welcome">
      <div class="ai-welcome-emoji">🎓</div>
      <div class="ai-welcome-title"></div>
      <div class="ai-welcome-sub"></div>
      <div class="ai-quick-btns"></div>
    </div>`;const a=n.querySelector(".ai-welcome"),i=a.querySelector(".ai-welcome-title"),o=a.querySelector(".ai-welcome-sub"),r=a.querySelector(".ai-quick-btns");x.role==="coach"||x.role==="developer"?(e.title="Yapay Zeka Koç Asistanı",t.textContent="Yapay Zeka Koç Asistanı",i.textContent="Merhaba Hocam! Ben Koç Asistanınız",o.textContent="Öğrenci analizleri, veri okuma, ders çalışma programı taslakları hazırlama ve pedagojik konularda size yardımcı olabilirim.",r.innerHTML=`
      <button class="ai-quick-btn" onclick="aiQuickSend('Seçili öğrencinin genel durum analizini yap')">📊 Öğrenci Analizi</button>
      <button class="ai-quick-btn" onclick="aiQuickSend('Pedagojik motivasyon teknikleri öner')">💡 Pedagojik Öneri</button>
      <button class="ai-quick-btn" onclick="aiQuickSend('Zorlanan bir öğrenci için haftalık program şablonu oluştur')">📋 Program Şablonu</button>
    `):x.role==="parent"?(e.title="Yapay Zeka Veli Bilgilendirme Asistanı",t.textContent="Yapay Zeka Veli Asistanı",i.textContent="Merhaba! Ben Veli Asistanıyım",o.textContent="Çocuğunuzun ders çalışma durumu, deneme netleri ve evde ona nasıl destek olabileceğiniz konularında bilgi alabilirsiniz.",r.innerHTML=`
      <button class="ai-quick-btn" onclick="aiQuickSend('Çocuğumun bu haftaki gelişimini özetle')">📊 Gelişim Özeti</button>
      <button class="ai-quick-btn" onclick="aiQuickSend('Evde verimli ders çalışma ortamı nasıl sağlanır?')">🏠 Ev Ortamı</button>
      <button class="ai-quick-btn" onclick="aiQuickSend('Sınav stresiyle başa çıkmak için veli olarak ne yapmalıyım?')">🧘 Stres Yönetimi</button>
    `):(e.title="Yapay Zeka Ders Asistanı",t.textContent="Yapay Zeka Ders Asistanı",i.textContent="Merhaba! Ben Ders Asistanın (Yapay Zeka)",o.textContent="7/24 anlık soru çözümü, konu anlatımı, özet çıkarma ve mini pratik sınav konularında sana yardımcı olan mekanik bir asistanım. Ben bir yapay zekayım ve koçunun yerini alamam; duygusal veya motivasyonel konularda koçuna danışmalısın.",r.innerHTML=`
      <button class="ai-quick-btn" onclick="aiQuickSend('Çözemediğim bir Matematik/Fen sorusu var. Sokratik tarzda, adım adım ipuçları vererek çözmeme yardım eder misin?')">📝 Çözemediğim Soru Var</button>
      <button class="ai-quick-btn" onclick="aiQuickSend('Bir konunun özetini çıkarmak istiyorum. Hangi ders ve konudan özet çıkarmak istediğimi sorup yardımcı olur musun?')">📖 Konu Özeti Çıkar</button>
      <button class="ai-quick-btn" onclick="aiQuickSend('Zayıf olduğum konular üzerinde çalışıp pratik yapmak istiyorum. Hangi derslerden yardıma ihtiyacım olduğunu sorup pratik yapalım.')">🎯 Zayıf Konuları Çalış</button>
      <button class="ai-quick-btn" onclick="aiQuickSend('Bana seçtiğim bir konudan 3 soruluk hızlı bir mini quiz yapar mısın? Soruları tek tek sor.')">⚡ Hızlı Sınav Yap</button>
    `)}function Vs(){const e=document.getElementById("aiChatPanel"),t=document.getElementById("aiChatBubble");if(e.classList.contains("open"))e.classList.remove("open"),t.style.display="flex";else{e.classList.add("open"),t.style.display="none";const n=document.getElementById("aiMessages");n.scrollTop=n.scrollHeight,document.getElementById("aiInput").focus()}}function Zs(e){document.getElementById("aiInput").value=e,Sa()}function Kt(){var t;const e={};try{const n=l.students.find(r=>r.id===l.activeStuId);n&&(e.studentName=n.name,e.target=n.target||""),x.role==="parent"&&x.childName&&(e.studentName=x.childName);const a=(l.exams||[]).filter(r=>r.studentId===l.activeStuId).slice(-5);a.length&&(e.recentExams=a.map(r=>({name:r.type+" "+(r.name||""),date:r.date||"",nets:r.nets||{}})));let i=[];if(Object.entries(l.tasks||{}).forEach(([r,s])=>{r.startsWith(l.activeStuId+"_")&&(i=i.concat(s))}),i.length){const r=i.filter(s=>s.done).length;e.taskCompletionRate=Math.round(r/i.length*100),e.weeklyTaskCount=i.length}const o=Object.keys(EXAM_DEFS);a.length&&(e.examProfile=((t=a[0])==null?void 0:t.type)||o[0])}catch(n){console.warn("AI context error:",n)}return e}async function ht(){const e={"Content-Type":"application/json"};try{const{data:{session:t}}=await y.auth.getSession();t!=null&&t.access_token&&(e.Authorization="Bearer "+t.access_token)}catch{}return e}function xe(e,t){nt.push({role:e,content:t});const n=document.getElementById("aiMessages"),a=n.querySelector(".ai-welcome");a&&a.remove();const i=new Date().toLocaleTimeString("tr-TR",{hour:"2-digit",minute:"2-digit"}),o=document.createElement("div");o.className=`ai-msg ${e}`,o.innerHTML=`${v(t).replace(/\n/g,"<br>")}<div class="ai-msg-time">${i}</div>`,n.appendChild(o),n.scrollTop=n.scrollHeight}let cn=null;window._pickAiImg=function(e){const t=e.files[0];if(!t)return;if(t.size>8*1024*1024){b("Dosya max 8 MB olabilir"),e.value="";return}const n=new FileReader;n.onload=a=>{cn={base64:a.target.result.split(",")[1],mimeType:t.type,name:t.name};const o=document.getElementById("aiImgPreview"),r=document.getElementById("aiImgThumb"),s=document.getElementById("aiImgName");r.src=a.target.result,r.style.display="block",s.textContent=t.name,o.style.display="flex"},n.readAsDataURL(t),e.value=""};window._cancelAiImg=function(){cn=null;const e=document.getElementById("aiImgPreview");e&&(e.style.display="none")};async function Sa(){if(Lt)return;const e=document.getElementById("aiInput"),t=e.value.trim(),n=cn;if(!(!t&&!n)){if(e.value="",n){window._cancelAiImg();const a=document.getElementById("aiMessages"),i=a.querySelector(".ai-welcome");i&&i.remove();const o=document.createElement("div");o.className="ai-msg user",o.innerHTML=`<img src="data:${n.mimeType};base64,${n.base64}" style="max-width:180px;max-height:180px;border-radius:10px;display:block" />${t?`<div style="margin-top:6px">${v(t)}</div>`:""}<div class="ai-msg-time">${new Date().toLocaleTimeString("tr-TR",{hour:"2-digit",minute:"2-digit"})}</div>`,a.appendChild(o),a.scrollTop=a.scrollHeight,nt.push({role:"user",content:t||"Fotoğraftaki soruyu çöz.",image:n})}else xe("user",t);Lt=!0,document.getElementById("aiTyping").classList.add("show"),document.getElementById("aiSendBtn").disabled=!0;try{const a=Kt(),i=x.role||"student";if(n){const o=await fetch("/api/ai-chat",{method:"POST",headers:await ht(),body:JSON.stringify({imageBase64:n.base64,mimeType:n.mimeType,text:t||"Bu soruyu çöz.",context:a,userRole:i})});if(o.ok){const r=await o.json();xe("assistant",r.reply||"Yanıt alınamadı.")}else{const r=await Ee(t,a,i,n);xe("assistant",r)}}else{const r=await fetch("/api/ai-chat",{method:"POST",headers:await ht(),body:JSON.stringify({messages:nt.slice(-10),context:a,userRole:i})});if(r.ok){const s=await r.json();xe("assistant",s.reply||"Yanıt alınamadı.")}else{const s=await Ee(t,a,i,null);xe("assistant",s)}}}catch(a){console.error("AI error:",a);try{const i=Kt(),o=await Ee(t,i,x.role||"student",n);xe("assistant",o)}catch{const o=localStorage.getItem("gemini_api_key");xe("assistant","🔒 Bu özellik ileride aktif olacaktır. Yakında kullanıma açılacak.")}}finally{Lt=!1,document.getElementById("aiTyping").classList.remove("show"),document.getElementById("aiSendBtn").disabled=!1}}}let jt=null;async function Ia(e){try{const t=await fetch(`https://generativelanguage.googleapis.com/v1beta/models?key=${e}`);if(!t.ok)return null;const a=(await t.json()).models||[];let i=a.find(o=>o.name.toLowerCase().includes("flash")&&o.supportedGenerationMethods.includes("generateContent"));if(i||(i=a.find(o=>o.supportedGenerationMethods.includes("generateContent"))),i)return i.name.replace("models/","")}catch(t){console.warn("Auto-detect model failed:",t)}return null}async function Ee(e,t,n,a){var E,T,f,$,w,B;let i=localStorage.getItem("gemini_api_key");if(!i)try{const{data:h}=await y.from("platform_settings").select("value").eq("key","ai_settings").maybeSingle();h&&h.value&&h.value.gemini_api_key&&(i=h.value.gemini_api_key)}catch(h){console.warn("DB Gemini API key load error:",h)}const o=i;if(!o)throw new Error("API anahtarı eksik.");let r="gemini-1.5-flash";if(o)if(jt)r=jt;else{const h=await Ia(o);h&&(jt=h,r=h,console.log("[Gemini API] Otomatik model tespiti başarılı:",r))}let s=`Sen "Rostrum Akademi Yapay Zeka Asistanı"sın. Türkiye eğitim sistemine (YKS, LGS) hakim, rolüne göre öğrencilere, velilere veya koçlara destek veren bir yapay zekasın.

KESİNLİKLE YALNIZCA TÜRKÇE yanıt ver. İngilizce, Japonca, Çince veya başka hiçbir dil/karakter kullanma.

Rostrum Akademi İşleyişi, Üyelik ve Fiyatlandırma Bilgileri:
1. Kayıt olan tüm koçlara 14 gün ücretsiz deneme süresi tanımlanır. Bu süre bitiminde panel kilitlenir.
2. Otomatik ödeme/kredi kartı altyapısı yoktur; paket satın alma, ödeme ve lisans uzatma işlemleri tamamen manuel olarak yürütülür.
3. Kullanıcılar paket satın almak, deneme sürelerini uzatmak veya üyeliklerini aktif etmek için Kurucu Emin Ceylan (ceylanemin1928@gmail.com) ile iletişime geçmelidir.
4. Destek panelinde bulunan "Kurucuya / Destek Ekibine Yaz" seçeneği ile doğrudan kurucu ekibe mesaj gönderebilir ve bu ekran üzerinden onunla canlı yazışabilirler.
5. Güncel Paket Fiyatları:
   - Başlangıç Paketi (Starter): Aylık 299 TL
   - Koç Pro Paketi (Pro): Aylık 599 TL
   - Kurumsal Paket (Enterprise): Aylık 1499 TL`;const d=x.dbUser;if(d){const h=d.plan||"trial",S={trial:"Deneme",starter:"Başlangıç",pro:"Pro",enterprise:"Kurumsal"}[h]||h;if(h==="trial"){const I=d.trial_ends_at?new Date(d.trial_ends_at):new Date(new Date(d.created_at).getTime()+12096e5),z=Math.max(0,Math.ceil((I-Date.now())/864e5));s+=`
KULLANICI BİLGİSİ: Ad=${d.full_name||d.username}, Plan=${S}, Deneme süresi kalan=${z} gün (bitiş: ${I.toLocaleDateString("tr-TR")}).`}else s+=`
KULLANICI BİLGİSİ: Ad=${d.full_name||d.username}, Plan=${S} (aktif üye).`}n==="parent"?s+=`
VELİ MODU: Veliye saygılı ve güven verici konuş. Çocuğun durumunu yapıcı aktar.`:n==="student"?!!a?s+=`
ÖĞRENCİ MODU — SORU ÇÖZÜMÜ:
Öğrenci sana bir soru fotoğrafı gönderdi. Şu anda o sorunun ait olduğu dersin uzman öğretmenisin.
Kurallar:
1. Soruyu dikkatlice incele, konusunu belirle ve kısaca belirt (örn: "Bu soru trigonometri konusundan").
2. Çözümü adım adım, net ve öğretici bir dille yaz. Her adımı numaralandır.
3. Formül veya kural kullandıysan neden kullandığını açıkla.
4. Varsa alternatif çözüm yolunu da kısaca belirt.
5. Sonunda öğrenciye bu konuyu pekiştirmek için 1 kısa öneri ekle.`:s+=`
ÖĞRENCİ MODU (YAPAY ZEKA DERS ASİSTANI):
1. Kendini net bir Yapay Zeka Ders Asistanı olarak tanıt; insan gibi davranma.
2. Duygusal/motivasyonel koçluk yapma; bu talepleri koça yönlendir.
3. Sokratik yöntem kullan: doğrudan cevap yerine ipucu ver, sorular sor.
4. Sadece soru çözümü, konu anlatımı, özet, mini test yap. Program önerisini reddet.`:n==="coach"&&(s+=`
KOÇ MODU (YAPAY ZEKA COPILOT):
Karşındaki kişi bir Eğitim Koçudur. Ona profesyonel bir meslektaş gibi hitap et. Veri odaklı analizler, pedagojik öneriler sun.`),n==="coach"&&t.studentName?s+=`
Şu anda seçili öğrenci: ${t.studentName}`:t.studentName&&(s+=`
Öğrenci: ${t.studentName}`),t.recentExams&&(s+=`
Son denemeler: ${JSON.stringify(t.recentExams)}`),t.taskCompletionRate!==void 0&&(s+=`
Görev tamamlama: %${t.taskCompletionRate}`),t.target&&(s+=`
Hedef: ${t.target}`);const p=nt.slice(-8).map(h=>{const S=[];return h.image&&S.push({inlineData:{mimeType:h.image.mimeType,data:h.image.base64}}),S.push({text:h.content||(h.image?"Soruyu çöz":"")}),{role:h.role==="user"?"user":"model",parts:S}}),m=[{role:"user",parts:[{text:s}]},{role:"model",parts:[{text:"Anladım! Rostrum Akademi Yapay Zeka Asistanı olarak hazırım."}]},...p],u=await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${r}:generateContent?key=${o}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({contents:m,generationConfig:{temperature:.7,maxOutputTokens:1500}})});if(!u.ok){let h=`HTTP ${u.status}`;try{const S=await u.json();(E=S==null?void 0:S.error)!=null&&E.message&&(h=S.error.message)}catch{}throw new Error(h)}const g=await u.json();return((B=(w=($=(f=(T=g==null?void 0:g.candidates)==null?void 0:T[0])==null?void 0:f.content)==null?void 0:$.parts)==null?void 0:w[0])==null?void 0:B.text)||"Yanıt üretilemedi."}let pn="";async function Js(e){const t=l.students.find(a=>a.id===e);if(!t)return;const n=document.getElementById("aiCopilotBtn");n.disabled=!0,n.textContent="⌛ Analiz Ediliyor ve Taslak Oluşturuluyor...";try{const a=ne(0,t.weekStart||0);let i=0,o=0,r=0;for(let w=0;w<7;w++){const B=l.tasks[`${t.id}_${O(J(a,w))}`]||[];i+=B.length,o+=B.filter(h=>h.done).length,r+=B.reduce((h,S)=>h+Number(S.duration||0),0)}const s=i>0?Math.round(o/i*100):0,c=(l.exams||[]).filter(w=>w.studentId===e).slice(-5).map(w=>({name:w.type+" "+(w.name||""),date:w.date||"",nets:w.nets||{}})),p={};(l.studentSpeeds||[]).filter(w=>w.student_id===e).forEach(w=>{p[`${w.exam_type}_${w.subject}`]=w.secs_per_question});const m=`Lütfen şu öğrenci için haftalık durum analizi ve öğrenciye gönderilecek haftalık değerlendirme mesajı taslağı oluştur:
Öğrenci Adı: ${t.name}
Hedef: ${t.target||"Belirtilmemiş"}
Bu haftaki görev tamamlama oranı: %${s} (${o}/${i} görev tamamlandı, toplam ${Math.round(r/60)} saat çalışıldı)
Son denemeler: ${JSON.stringify(c)}
Soru Çözüm Hızları (saniye/soru): ${JSON.stringify(p)}

ANALİZ VE TASLAK KURALLARI (TÜRKÇE YAZ):
1. Analiz kısmını koçun göreceği şekilde kısa, net ve yapıcı tut. Zayıf konuları ve sınav netlerindeki değişimleri vurgula.
2. Öğrenciye gönderilecek mesaj taslağını samimi ve destekleyici yaz, fakat koçun kendi yorumlarını ekleyebileceği şablon alanları bırak. Örneğin: "[Buraya öğrenciyle son görüşmenizden özel bir not ekleyin]" veya "[Zorlandığı konuyla ilgili kendi ek önerilerinizi girin]".
3. Mesaj taslağı tamamen Türkçe, samimi ve yapıcı olmalıdır. Asla yapay zeka olduğunu belli eden klişeler içermesin.
4. Çıktıyı tam olarak şu iki etiket arasında yapılandır:
[ANALİZ]
(Koç için durum analizi ve anomali tespiti)
[TASLAK]
(Öğrenciye gönderilecek haftalık değerlendirme taslağı)`;let u="";const g={studentName:t.name,target:t.target,recentExams:c,taskCompletionRate:s,weeklyTaskCount:i};try{const w=await fetch("/api/ai-chat",{method:"POST",headers:await ht(),body:JSON.stringify({messages:[{role:"user",content:m}],context:g,userRole:"coach"})});w.ok?u=(await w.json()).reply:u=await Ee(m,g,"coach")}catch{u=await Ee(m,g,"coach")}let E="Analiz üretilemedi.",T="Taslak üretilemedi.";const f=u.indexOf("[ANALİZ]"),$=u.indexOf("[TASLAK]");f!==-1&&$!==-1?f<$?(E=u.substring(f+8,$).trim(),T=u.substring($+8).trim()):(T=u.substring($+8,f).trim(),E=u.substring(f+8).trim()):T=u,document.getElementById("aiCopilotAnalysisBox").innerHTML=`<b>📊 Yapay Zeka Durum Analizi:</b><br>${E.replace(/\n/g,"<br>")}`,document.getElementById("aiCopilotTextarea").value=T,pn=T,document.getElementById("aiCopilotResultArea").style.display="block",document.getElementById("aiCopilotSendBtn").disabled=!0,document.getElementById("aiCopilotEditWarning").style.display="inline"}catch(a){console.error("generateAICopilotDraft error:",a),b("Taslak oluşturulurken hata: "+a.message)}finally{n.disabled=!1,n.textContent="🤖 Durum Analizi Yap ve Taslak Oluştur"}}function Xs(){var t;const e=(((t=document.getElementById("aiCopilotTextarea"))==null?void 0:t.value)||"").trim();if(!e){b("Önce taslak oluşturun");return}window.open("https://wa.me/?text="+encodeURIComponent(e),"_blank")}function Qs(){const e=document.getElementById("aiCopilotTextarea").value.trim(),t=document.getElementById("aiCopilotSendBtn"),n=document.getElementById("aiCopilotEditWarning");e&&e!==pn?(t.disabled=!1,n.style.display="none"):(t.disabled=!0,n.style.display="inline")}async function er(e){var a;const t=document.getElementById("aiCopilotTextarea").value.trim();if(!t)return;const n=document.getElementById("aiCopilotSendBtn");n.disabled=!0,n.textContent="Gönderiliyor...";try{const i=x.coachId||((a=l.students.find(s=>s.id===e))==null?void 0:a.coachId),{data:o,error:r}=await y.from("messages").insert({student_id:e,coach_id:i,from_role:"coach",text:t,read:!1}).select().single();if(r)throw r;await y.from("reports").insert({student_id:e,coach_id:i,type:"ai_copilot",title:"Yapay Zeka Copilot Değerlendirmesi",content:t,start_date:ue(),end_date:ue()}),l.messages[e]||(l.messages[e]=[]),l.messages[e].push({_id:o.id,from:"coach",text:t,time:new Date().toLocaleTimeString("tr-TR",{hour:"2-digit",minute:"2-digit"}),read:!1}),b("Taslak mesaj başarıyla düzenlendi, öğrenciye gönderildi ve arşive kaydedildi! ✓"),document.getElementById("aiCopilotResultArea").style.display="none",document.getElementById("aiCopilotTextarea").value="",pn=""}catch(i){console.error("sendCopilotDraft error:",i),b("Gönderim hatası: "+i.message),n.disabled=!1}finally{n.textContent="✍️ Düzenlemeyi Kaydet ve Öğrenciye Gönder"}}function za(){const e=l.students.find(s=>s.id===l.activeStuId),t=x.childName||(e==null?void 0:e.name)||"Öğrenci",n=document.getElementById("view-parent-home");if(!n)return;let a=[];Object.entries(l.tasks||{}).forEach(([s,d])=>{s.startsWith(l.activeStuId+"_")&&(a=a.concat(d))});const i=a.filter(s=>s.done).length,o=a.length?Math.round(i/a.length*100):0,r=(l.exams||[]).filter(s=>s.studentId===l.activeStuId).slice(-3);n.innerHTML=`
    <div style="padding:24px;max-width:800px;margin:0 auto">
      <div style="margin-bottom:24px">
        <div style="font-size:24px;font-weight:800;margin-bottom:4px">👋 Merhaba!</div>
        <div style="color:var(--text-mid);font-size:14px">${v(t)}'in koçluk paneli</div>
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
          <div style="font-size:32px;font-weight:800;color:var(--green)">${r.length}</div>
          <div style="font-size:12px;color:var(--text-mid);margin-top:4px">Son Denemeler</div>
        </div>
      </div>
      
      ${r.length?`
      <div class="card" style="padding:20px;margin-bottom:16px">
        <div style="font-size:15px;font-weight:700;margin-bottom:12px">📊 Son Deneme Sonuçları</div>
        ${r.map(s=>{const d=Object.values(s.nets||{}).reduce((c,p)=>c+(parseFloat(p)||0),0);return`<div style="display:flex;justify-content:space-between;align-items:center;padding:10px 0;border-bottom:1px solid var(--border)">
            <div><div style="font-weight:600;font-size:13px">${v(s.name||s.type)}</div><div style="font-size:11px;color:var(--text-mid)">${s.date||""}</div></div>
            <div style="font-weight:800;color:var(--accent)">${d.toFixed(1)} net</div>
          </div>`}).join("")}
      </div>`:""}
      
      <div class="card" style="padding:20px;background:linear-gradient(135deg,rgba(240,165,0,.05),rgba(62,207,142,.05))">
        <div style="font-size:15px;font-weight:700;margin-bottom:8px">🤖 AI Asistandan Yardım Alın</div>
        <div style="font-size:12px;color:var(--text-mid);margin-bottom:12px">Çocuğunuzun ilerlemesi hakkında anında rapor alabilirsiniz.</div>
        <button class="btn btn-accent" onclick="toggleAIChat()" style="justify-content:center;width:100%;padding:12px">🤖 AI Asistan ile Konuş</button>
      </div>
    </div>`}function Ba(){const e=document.getElementById("view-parent-progress");if(!e)return;const t=l.students.find(o=>o.id===l.activeStuId),n=x.childName||(t==null?void 0:t.name)||"Öğrenci",a=(l.exams||[]).filter(o=>o.studentId===l.activeStuId);let i=[];Object.entries(l.tasks||{}).forEach(([o,r])=>{o.startsWith(l.activeStuId+"_")&&(i=i.concat(r))}),e.innerHTML=`
    <div style="padding:24px;max-width:800px;margin:0 auto">
      <div style="font-size:20px;font-weight:800;margin-bottom:20px">📊 ${v(n)} - İlerleme Raporu</div>
      
      <div class="card" style="padding:20px;margin-bottom:16px">
        <div style="font-size:15px;font-weight:700;margin-bottom:16px">📋 Haftalık Görevler</div>
        ${i.length?i.slice(-10).map(o=>`
          <div style="display:flex;align-items:center;gap:10px;padding:8px 0;border-bottom:1px solid var(--border)">
            <div style="width:20px;height:20px;border-radius:50%;background:${o.done?"var(--green)":"var(--surface2)"};border:2px solid ${o.done?"var(--green)":"var(--border)"};display:flex;align-items:center;justify-content:center;font-size:10px;color:#fff">${o.done?"✓":""}</div>
            <div style="flex:1;font-size:13px">${v(o.subject)} <span style="font-size:11px;color:var(--text-dim)">(${it(o.type)})</span></div>
            <div style="font-size:11px;color:var(--text-mid)">${o.done?"Tamamlandı":"Bekliyor"}</div>
          </div>`).join(""):'<div style="text-align:center;color:var(--text-mid);padding:20px">Henüz görev bulunmuyor.</div>'}
      </div>
      
      <div class="card" style="padding:20px">
        <div style="font-size:15px;font-weight:700;margin-bottom:16px">📊 Deneme Geçmişi</div>
        ${a.length?a.slice(-10).map(o=>{const r=Object.values(o.nets||{}).reduce((s,d)=>s+(parseFloat(d)||0),0);return`<div style="display:flex;justify-content:space-between;align-items:center;padding:10px 0;border-bottom:1px solid var(--border)">
            <div><div style="font-weight:600;font-size:13px">${v(o.name||o.type)}</div><div style="font-size:11px;color:var(--text-mid)">${o.date||""}</div></div>
            <div style="font-weight:800;color:var(--accent)">${r.toFixed(1)} net</div>
          </div>`}).join(""):'<div style="text-align:center;color:var(--text-mid);padding:20px">Henüz deneme sonucu yok.</div>'}
      </div>
    </div>`}function Ma(){const e=document.getElementById("view-parent-ai");e&&(e.innerHTML=`
    <div style="padding:24px;max-width:600px;margin:0 auto;text-align:center">
      <div style="font-size:48px;margin-bottom:16px">🤖</div>
      <div style="font-size:20px;font-weight:800;margin-bottom:8px">AI Koç Asistanı</div>
      <div style="font-size:13px;color:var(--text-mid);margin-bottom:24px;line-height:1.7">Çocuğunuzun eğitim süreci hakkında sorular sorun, deneme analizleri isteyin veya öneriler alın.</div>
      <button class="btn btn-accent" onclick="toggleAIChat()" style="justify-content:center;padding:14px 32px;font-size:15px">💬 AI Asistan ile Konuşmaya Başla</button>
    </div>`)}async function tr(){var u;const e=document.getElementById("smId").value,t=document.getElementById("smName").value.trim(),n=je(document.getElementById("smUsername").value.trim()),a=document.getElementById("smPass").value,i=document.getElementById("smRole").value,o=document.getElementById("smTarget").value.trim(),r=((u=document.querySelector(".color-opt.sel"))==null?void 0:u.dataset.c)||"#e8622a",s=Number(document.getElementById("smWeekStart").value),d=Number(document.getElementById("smProg").value);if(!t||!n||!a)return b("Ad, kullanıcı adı ve şifre zorunlu!");const c=a.length===64?a:await Ne(a),p=n+"@rostrumakademi.com",m={full_name:t,username:n,password_hash:c,role:i,target:o,color:r,week_start:s,progress:d};if(M(!0),e){const{error:g}=await y.from("users").update(m).eq("id",e);if(M(!1),g)return b("Hata: "+g.message);b("Kullanıcı güncellendi ✓")}else{const{data:g,error:E}=await y.rpc("create_new_user",{p_email:p,p_password:a,p_full_name:t,p_username:n,p_role:i,p_target:o,p_color:r,p_progress:d,p_week_start:s,p_coach_id:null,p_institution_id:null,p_exam_profile:"YKS"});if(M(!1),E)return b("Hata: "+E.message);b("Kullanıcı başarıyla oluşturuldu ✓")}q("studentModal"),We()}let he=[],be={search:"",exam:"",subject:""},Aa=null;function nr(e){const t=he.find(o=>o.id===e);if(!t)return b("Kaynak bulunamadı");if(!l.students.length)return b("Önce öğrenci ekleyin");Aa=t;let n=document.getElementById("assignResModal");n||(n=document.createElement("div"),n.className="modal-bg",n.id="assignResModal",document.body.appendChild(n));const a=new Date,i=Array.from({length:7},(o,r)=>{const s=J(a,r),d=r===0?"Bugün":r===1?"Yarın":["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"][s.getDay()]+` (${s.getDate()}.${s.getMonth()+1})`;return`<option value="${O(s)}|${d}">${d}</option>`}).join("");n.innerHTML=`<div class="modal" style="max-width:380px">
    <button class="modal-close" onclick="cm('assignResModal')">×</button>
    <h2>📤 Ödevlendir</h2>
    <div style="font-size:13px;font-weight:700;margin-bottom:14px;padding:10px 12px;background:var(--surface2);border-radius:9px;border:1px solid var(--border)">${v(t.name)}<div style="font-size:11px;color:var(--text-dim);font-weight:600;margin-top:2px">${v(t.exam_type||"")} · ${v(t.subject||"")}</div></div>
    <div class="field"><label>Öğrenci</label>
      <select id="arStudent">${l.students.map(o=>`<option value="${o.id}">${v(o.name)}</option>`).join("")}</select>
    </div>
    <div class="field"><label>Gün</label>
      <select id="arDay">${i}</select>
    </div>
    <button class="btn btn-accent" style="width:100%;justify-content:center;padding:11px" onclick="confirmAssignResource()">Görevi Hazırla →</button>
  </div>`,G("assignResModal")}function ar(){const e=Aa;if(!e)return;const t=document.getElementById("arStudent").value,[n,a]=document.getElementById("arDay").value.split("|");q("assignResModal"),l.activeStuId=t,qn(n,a);const i=(e.resource_type||"book")==="playlist";document.getElementById("tmType").value=i?"konu":"soru",document.getElementById("tmExam").value=e.exam_type||"TYT",wt();const o=document.getElementById("tmSubjectSel");if(o&&[...o.options].some(r=>r.value===e.subject))o.value=e.subject;else{const r=document.getElementById("tmSubjectFree");r&&(r.value=e.subject||"")}W={name:e.name,yil:e.year,testler:Array.isArray(e.tests)?e.tests:[],publisher:e.publisher,resource_type:e.resource_type||"book"},document.getElementById("tmBookSearch").value=e.name,document.getElementById("tmBookVal").value=e.name,_t(),document.getElementById("tmTestWrap").style.display="",document.getElementById("soruBankasiWrap").style.display="",b("Kaynak hazır — test/video seçip ekleyin")}function mn(e){const t=be.search;return e.filter(n=>!(t&&!n.name.toLowerCase().includes(t)&&!(n.publisher||"").toLowerCase().includes(t)||be.exam&&n.exam_type!==be.exam||be.subject&&n.subject!==be.subject))}function ir(){var i,o,r;be.search=(((i=document.getElementById("crSearch"))==null?void 0:i.value)||"").toLowerCase().trim(),be.exam=((o=document.getElementById("crExam"))==null?void 0:o.value)||"",be.subject=((r=document.getElementById("crSubject"))==null?void 0:r.value)||"";const e=document.getElementById("cr-tab-content");if(!e)return;const t=document.querySelector(".cr-tab.active"),n=(t==null?void 0:t.id)==="crt-playlists"?"playlists":(t==null?void 0:t.id)==="crt-analytics"?"analytics":"books",a=mn(he);e.innerHTML=zt(n,a)}function zt(e,t){const n=t.filter(s=>s.resource_type==="book"),a=t.filter(s=>s.resource_type==="playlist"),i={Matematik:"#3B82F6",Fizik:"#8B5CF6",Kimya:"#06B6D4",Biyoloji:"#10B981",Geometri:"#6366F1",Türkçe:"#F59E0B",Edebiyat:"#EC4899",Tarih:"#EF4444",Coğrafya:"#84CC16",Felsefe:"#14B8A6","Din Kültürü":"#F97316",Din:"#F97316",Genel:"#6B7280"},o={Matematik:"∑",Fizik:"⚛",Kimya:"🧪",Biyoloji:"🌿",Geometri:"△",Türkçe:"T",Edebiyat:"✒",Tarih:"🏛",Coğrafya:"🌍",Felsefe:"💭","Din Kültürü":"☪",Din:"☪",Genel:"📌"};function r(s,d){if(!s.length)return'<div style="text-align:center;padding:48px;color:var(--text-dim);font-size:13px">Kaynak bulunamadı.</div>';const c={};return s.forEach(p=>{const m=p.exam_type||"Diğer";c[m]||(c[m]={});const u=p.subject||"Genel";c[m][u]||(c[m][u]=[]),c[m][u].push(p)}),Object.entries(c).map(([p,m])=>`
      <div style="margin-bottom:28px">
        <div style="display:flex;align-items:center;gap:8px;margin-bottom:12px">
          <span style="font-size:10px;font-weight:800;letter-spacing:1px;text-transform:uppercase;color:#fff;background:var(--accent);padding:3px 10px;border-radius:99px">${p}</span>
          <div style="flex:1;height:1px;background:var(--border)"></div>
        </div>
        <div style="display:flex;flex-direction:column;gap:16px">
        ${Object.entries(m).map(([u,g])=>{const E=i[u]||"#6B7280",T=o[u]||"📌";return`<div>
            <div style="display:flex;align-items:center;gap:6px;margin-bottom:7px">
              <div style="width:22px;height:22px;border-radius:6px;background:${E}20;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:800;color:${E};flex-shrink:0">${T}</div>
              <span style="font-size:12px;font-weight:700;color:${E}">${u}</span>
              <span style="font-size:10px;color:var(--text-dim)">${g.length} kaynak</span>
            </div>
            <div style="display:flex;flex-direction:column;gap:4px;padding-left:28px">
              ${g.map(f=>`
                <div style="display:flex;align-items:center;padding:10px 14px;border-radius:10px;background:var(--surface);border:1.5px solid var(--border);gap:12px;cursor:default;transition:all .15s;box-shadow:var(--shadow)" onmouseover="this.style.borderColor='${E}';this.style.boxShadow='0 2px 12px ${E}22'" onmouseout="this.style.borderColor='var(--border)';this.style.boxShadow='var(--shadow)'">
                  <div style="flex:1;min-width:0">
                    <div style="font-size:13px;font-weight:700;color:var(--text);margin-bottom:3px">${v(f.name)}${f.coach_id?' <span style="font-size:10px;font-weight:700;color:var(--accent);background:var(--accent-dim);padding:1px 6px;border-radius:99px;margin-left:4px">Özel</span>':""}</div>
                    <div style="display:flex;align-items:center;gap:6px;flex-wrap:wrap">
                      <span style="font-size:11px;font-weight:600;color:var(--text-dim);background:var(--surface2);padding:1px 8px;border-radius:99px;border:1px solid var(--border)">${v(f.publisher||"—")}</span>
                      <span style="font-size:11px;color:var(--text-dim)">${(f.tests||[]).length} ${d==="book"?"test":"video"}</span>
                    </div>
                  </div>
                  <div style="display:flex;gap:4px;flex-shrink:0">
                    <button class="btn btn-green btn-xs" onclick="assignResourceAsTask('${f.id}')" title="Bir öğrencinin programına görev olarak ekle">📤 Ödevlendir</button>
                    ${f.coach_id?`<button class="btn btn-ghost btn-xs" onclick="openResourceModalCoach('${f.id}','${d}')">✏️</button>
                    <button class="btn btn-danger btn-xs" onclick="deleteResourceCoach('${f.id}')">🗑</button>`:""}
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
      ${r(n,"book")}`:e==="playlists"?`
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:20px;flex-wrap:wrap;gap:8px">
        <div style="font-size:13px;color:var(--text-dim)">${a.length} oynatma listesi</div>
        <div style="display:flex;gap:8px">
          <label class="btn btn-ghost btn-sm" style="position:relative;cursor:pointer">📥 Excel'den Yükle<input type="file" accept=".xlsx,.xls,.csv" onchange="importResourcesFromExcel(event)" style="position:absolute;inset:0;opacity:0;cursor:pointer"></label>
          <button class="btn btn-accent btn-sm" onclick="openResourceModalCoach(null,'playlist')">+ Playlist Ekle</button>
        </div>
      </div>
      ${r(a,"playlist")}`:`
      <div style="margin-bottom:16px">
        <h3 style="font-family:'Inter',sans-serif;font-size:16px;font-weight:800;margin-bottom:4px">Kaynak Analitiği Raporu</h3>
        <p style="font-size:11px;color:var(--text-dim)">Öğrencilerinizin en sık kullandığı ve en yüksek tamamlama oranına sahip kaynakları inceleyin.</p>
      </div>
      <div class="analytics-grid">
        ${Da(t).map(d=>{const c=d.totalCount>0?Math.round(d.doneCount/d.totalCount*100):0,p=c>=80?"var(--green)":c>=50?"var(--accent)":"var(--text-dim)";return`<div class="analytics-card">
            <div style="font-size:10px;font-weight:700;color:var(--accent);margin-bottom:4px;text-transform:uppercase;letter-spacing:.4px">${d.exam_type} · ${d.subject}</div>
            <div style="font-size:14px;font-weight:800;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;margin-bottom:8px">${v(d.name)}</div>
            <div style="display:flex;justify-content:space-between;font-size:11px;color:var(--text-mid);margin-bottom:6px"><span>Tamamlama</span><span style="font-weight:700;color:${p}">%${c}</span></div>
            <div style="height:5px;background:var(--surface3);border-radius:99px;overflow:hidden;margin-bottom:10px"><div style="height:100%;width:${c}%;background:${p};border-radius:99px"></div></div>
            <div style="display:flex;justify-content:space-between;font-size:11px;color:var(--text-dim)"><span>Atanma: <b>${d.assignedCount}</b></span><span>Öğrenci: <b>${d.studentsCount}</b></span></div>
          </div>`}).join("")||'<div style="grid-column:span 3;text-align:center;padding:40px;color:var(--text-dim)">Kayıtlı performans verisi bulunamadı.</div>'}
      </div>`}async function dt(){const e=document.getElementById("view-coach-resources");if(!e)return;if(!he.length){e.innerHTML='<div style="max-width:720px;margin:0 auto;padding:40px;text-align:center;color:var(--text-dim);font-size:13px">Kaynaklar yükleniyor…</div>';const{data:a,error:i}=await y.from("resources").select("*").or(`coach_id.eq.${x.coachId},coach_id.is.null`).order("resource_type,exam_type,subject,name");i&&console.error(i),he=a||[]}be={search:"",exam:"",subject:""};let t="books";const n=document.querySelector(".cr-tab.active");n&&(n.id==="crt-playlists"?t="playlists":n.id==="crt-analytics"&&(t="analytics")),e.innerHTML=`<div style="max-width:720px;margin:0 auto">
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
      ${zt(t,he)}
    </div>
  </div>`}function or(e){var n;document.querySelectorAll(".cr-tab").forEach(a=>a.classList.remove("active")),(n=document.getElementById("crt-"+e))==null||n.classList.add("active");const t=mn(he);document.getElementById("cr-tab-content").innerHTML=zt(e,t)}function Da(e){const t={};return e.forEach(n=>{t[n.name]={name:n.name,exam_type:n.exam_type,subject:n.subject,assignedCount:0,totalCount:0,doneCount:0,students:new Set}}),Object.entries(l.tasks).forEach(([n,a])=>{const i=n.split("_")[0];a.forEach(o=>{e.forEach(r=>{if(o.subject&&o.subject.includes(r.name)){const s=t[r.name];s&&(s.assignedCount++,s.students.add(i),o.task_items&&Array.isArray(o.task_items)?o.task_items.forEach(d=>{s.totalCount++,(d.done||o.done)&&s.doneCount++}):(s.totalCount++,o.done&&s.doneCount++))}})})}),Object.values(t).map(n=>({...n,studentsCount:n.students.size})).filter(n=>n.assignedCount>0).sort((n,a)=>a.assignedCount-n.assignedCount)}function sr(e,t="book"){const n=t==="playlist";let a=document.getElementById("coachResourceModal");a||(a=document.createElement("div"),a.id="coachResourceModal",a.className="modal-bg",a.innerHTML=`<div class="modal modal-lg">
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
Sayılar - Test 2 | 14`,document.getElementById("crmYtImportBox").style.display=n&&!e?"":"none",document.getElementById("crmTestsField").style.display=n?"none":"",document.getElementById("crmYtUrl").value="",document.getElementById("crmYtStatus").textContent="",document.getElementById("crmVideoPreview").style.display="none",document.getElementById("crmVideoPreview").innerHTML="",window._crmFetchedVideos=[],e?y.from("resources").select("*").eq("id",e).single().then(({data:i})=>{if(i){document.getElementById("crmExam").value=i.exam_type,document.getElementById("crmSubject").value=i.subject,document.getElementById("crmPublisher").value=i.publisher||"",document.getElementById("crmName").value=i.name||"";const o=i.tests||[];n?(document.getElementById("crmTestsField").style.display="",document.getElementById("crmTests").value=o.map(r=>`${r.label||r} | ${r.url||""} | ${r.soru||0}`).join(`
`)):document.getElementById("crmTests").value=o.map(r=>`${r.label||r} | ${r.soru||0}`).join(`
`)}}):(document.getElementById("crmExam").value="TYT",document.getElementById("crmSubject").value="Matematik",document.getElementById("crmPublisher").value="",document.getElementById("crmName").value="",document.getElementById("crmTests").value=""),G("coachResourceModal")}async function rr(){const e=document.getElementById("crmYtUrl").value.trim(),t=document.getElementById("crmYtStatus");if(!e)return t.innerHTML='<span style="color:var(--red)">⚠️ Playlist URL girin</span>';const n=e.match(/[?&]list=([^&]+)/);if(!n)return t.innerHTML='<span style="color:var(--red)">⚠️ list= parametresi bulunamadı</span>';const a=n[1];t.innerHTML="⏳ Çekiliyor...";try{let i=[],o="";do{let s=`/api/youtube?playlistId=${a}`;o&&(s+=`&pageToken=${o}`);const d=await fetch(s);if(!d.ok)throw new Error("Playlist çekilemedi.");const c=await d.json();c.items&&(i=i.concat(c.items)),o=c.nextPageToken||"",t.innerHTML=`⏳ ${i.length} video yükleniyor...`}while(o&&i.length<200);window._crmFetchedVideos=i;const r=document.getElementById("crmVideoPreview");if(r.style.display="",r.innerHTML=i.map((s,d)=>`
      <div style="display:flex;align-items:center;gap:8px;padding:7px 12px;border-bottom:1px solid var(--border)">
        <div style="width:20px;height:20px;border-radius:5px;background:var(--surface3);color:var(--text-mid);font-size:9px;font-weight:800;display:flex;align-items:center;justify-content:center;flex-shrink:0">${d+1}</div>
        <div style="flex:1;min-width:0">
          <div style="font-size:11px;font-weight:600;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${v(s.title)}</div>
          <div style="font-size:10px;color:var(--text-dim)">⏱ ${s.duration||"?"} dk</div>
        </div>
        <a href="${v(s.url)}" target="_blank" style="font-size:10px;font-weight:700;background:#cc000022;color:#ff5555;border:1px solid #aa222233;padding:3px 8px;border-radius:6px;text-decoration:none;flex-shrink:0">▶</a>
      </div>`).join(""),i.length>0&&!document.getElementById("crmName").value){const s=i[0].title;document.getElementById("crmName").value=s.split(" | ")[0].split(" - ")[0].trim().slice(0,50)}t.innerHTML=`<span style="color:var(--green)">✓ ${i.length} video çekildi!</span>`}catch(i){t.innerHTML=`<span style="color:var(--red)">⚠️ Hata: ${i.message}</span>`}}async function lr(){const e=document.getElementById("crmName").value.trim(),t=document.getElementById("crmSubject").value;if(!e||!t)return b("Ad ve ders zorunlu!");const n=document.getElementById("crmId").value,a=document.getElementById("crmType").value==="playlist",i=document.getElementById("crmTests").value.split(`
`).map(d=>d.trim()).filter(Boolean),o=window._crmFetchedVideos||[];let r=[];if(a){if(o.length>0?r=o.map(d=>({label:d.title||"",url:d.url||"",topic:"",soru:parseInt(d.duration)||0})):r=i.map(d=>{const c=d.split("|").map(p=>p.trim());return{label:c[0]||"",url:c[1]||"",topic:"",soru:parseInt(c[2])||0}}),!r.length)return b("Video listesi boş! Önce playlist çekin.")}else r=i.map(d=>{const c=d.split("|").map(p=>p.trim());return{label:c[0]||"",soru:parseInt(c[1])||0}});const s={exam_type:document.getElementById("crmExam").value,subject:t,publisher:document.getElementById("crmPublisher").value.trim(),year:new Date().getFullYear(),name:e,tests:r,active:!0,resource_type:a?"playlist":"book",coach_id:x.coachId};M(!0),n?(await y.from("resources").update(s).eq("id",n),b("Güncellendi ✓")):(await y.from("resources").insert(s),b("Kaynak eklendi ✓")),M(!1),q("coachResourceModal"),he=[],dt()}async function dr(e){await ie("Bu kaynağı silmek istediğinizden emin misiniz?")&&(M(!0),await y.from("resources").delete().eq("id",e),M(!1),b("Silindi"),he=[],dt())}function cr(e){const t=e.target.files[0];if(!t)return;M(!0);const n=new FileReader;n.onload=async a=>{try{const i=new Uint8Array(a.target.result),o=XLSX.read(i,{type:"array"}),r=o.SheetNames[0],s=o.Sheets[r],d=XLSX.utils.sheet_to_json(s);if(d.length===0)return M(!1),b("Excel dosyası boş!");const c={};d.forEach(u=>{const g=u["Kaynak Adı"]||u.Name||u["Kitap Adı"]||u["Playlist Adı"]||"",T=(u["Kaynak Türü"]||u.Type||u.Tür||"book").toLowerCase().includes("playlist")?"playlist":"book",f=u.Yayınevi||u.Publisher||u.Hoca||"",$=u.Sınav||u.Exam||"TYT",w=u.Ders||u.Subject||"",B=u["Öğe Adı"]||u.Test||u.Video||u["Test Adı"]||u["Video Adı"]||"",h=parseInt(u["Soru Sayısı"]||u.Soru||u.Süre||u["Süre (dk)"]||0),S=u.URL||u.Link||"";if(!g||!w||!B)return;const I=`${g}_${$}_${w}_${T}`;c[I]||(c[I]={exam_type:$,subject:w,publisher:f,name:g,resource_type:T,tests:[]}),c[I].tests.push({label:B,soru:h,url:S,topic:""})});const p=Object.values(c);if(p.length===0)return M(!1),b("Uyumlu veri bulunamadı! Sütun başlıklarını kontrol edin.");let m=0;for(const u of p){const{error:g}=await y.from("resources").insert({...u,year:new Date().getFullYear(),active:!0,coach_id:x.coachId});g||m++}M(!1),b(`✓ Excel'den ${m} kaynak başarıyla aktarıldı!`),he=[],dt()}catch(i){M(!1),console.error(i),b("Excel okuma hatası: "+i.message)}},n.readAsArrayBuffer(t)}function pr(e){const t=e.target.files[0];if(!t)return;M(!0);const n=new FileReader;n.onload=async a=>{try{const i=new Uint8Array(a.target.result),o=XLSX.read(i,{type:"array"}),r=o.Sheets[o.SheetNames[0]],s=XLSX.utils.sheet_to_json(r);if(s.length===0)return M(!1),b("Excel dosyası boş!");let d=0;for(const c of s){const p=c["Ad Soyad"]||c.Ad||c.Name||"",m=c.Hedef||c.Target||"Hedef belirtilmemiş";let u=c["Kullanıcı Adı"]||c.Username||"",g=c.Şifre||c.Password||STU_DEFAULT_PASS;if(!p)continue;u||(u=p.toLowerCase().replace(/\s+/g,"")+Math.floor(Math.random()*100),u=je(u));const E=await Ne(g),T=u+"@rostrumakademi.com",{data:f,error:$}=await y.rpc("create_new_user",{p_email:T,p_password:g,p_full_name:p,p_username:u,p_role:"student",p_target:m,p_color:"#4da6ff",p_progress:0,p_week_start:0,p_coach_id:x.coachId,p_institution_id:null,p_exam_profile:"YKS"});!$&&f&&(l.students.push({id:f,name:p,target:m,color:"#4da6ff",progress:0,pass:E,weekStart:0,username:u}),d++)}M(!1),b(`✓ Excel'den ${d} öğrenci başarıyla eklendi!`),ke(),ot()}catch(i){M(!1),console.error(i),b("Excel okuma hatası: "+i.message)}},n.readAsArrayBuffer(t)}function Ca(e){if(!l.activeStuId||!W)return null;let t=null;return Object.entries(l.tasks).forEach(([n,a])=>{n.startsWith(l.activeStuId+"_")&&a.forEach(i=>{i.subject&&i.subject.includes(W.name)&&(i.task_items&&Array.isArray(i.task_items)?i.task_items.forEach(o=>{(o.label||o)===e&&(o.done||i.done?t="done":t!=="done"&&(t="pending"))}):i.note&&i.note.includes(e)&&(i.done?t="done":t!=="done"&&(t="pending")))})}),t}async function mr(e,t){var d;const a=`${l.activeStuId}_${e}`,i=(d=l.tasks[a])==null?void 0:d[t];if(!i)return;Ae=e,_editingTaskId=i._id,W=null,document.querySelector("#taskModal h2").innerHTML=`Görev Düzenle — <span id="tmDay">${e}</span>`,document.querySelector("#taskModal .btn-accent").textContent="Güncelle",document.getElementById("tmType").value=i.type,document.getElementById("tmExam").value=i.exam||"",document.getElementById("tmDuration").value=i.duration||60,document.getElementById("tmStartTime").value=i.start_time||"",document.getElementById("tmNote").value=i.note||"";const o=i.exam||"",r=i.type;{const c=document.getElementById("tmSubjectSel"),p=document.getElementById("tmSubjectFree");document.getElementById("tmBookVal").value="",document.getElementById("tmBookSearch").value="",document.getElementById("tmBookList").style.display="none",document.getElementById("tmTestWrap").style.display="none";const m=document.getElementById("tmTestSummary");m&&(m.style.display="none"),o&&typeof SUBJECT_MAP<"u"&&SUBJECT_MAP[o]?(c.innerHTML=SUBJECT_MAP[o].map(E=>`<option value="${E}">${E}</option>`).join(""),c.style.display="",p.style.display="none"):(c.style.display="none",p.style.display="");const u=(r==="soru"||r==="konu")&&o;document.getElementById("soruBankasiWrap").style.display=u?"":"none";const g=document.getElementById("tmBookSearch");g&&(g.placeholder=r==="konu"?"Hoca veya playlist ara...":"Kitap veya yayınevi ara...")}if((r==="soru"||r==="konu")&&o){const c=document.getElementById("tmSubjectSel");let p="",m=i.subject;if(i.subject.includes(" - ")){const T=i.subject.split(" - ");p=T[0].trim(),m=T.slice(1).join(" - ").trim()}p&&SUBJECT_MAP[o]&&SUBJECT_MAP[o].includes(p)&&(c.value=p),document.getElementById("tmBookVal").value=m,document.getElementById("tmBookSearch").value=m,M(!0),await Wn(),M(!1);const u=`${o}_${p}`;let E=(le[u]||[]).find(T=>T.name===m);if(E||Object.values(le).forEach(T=>{const f=T.find($=>$.name===m);f&&(E=f)}),E){W=E,document.getElementById("tmTestWrap").style.display="",_t();const T=(i.task_items||[]).map($=>$.label||$);document.querySelectorAll("#tmTestList input[type=checkbox]").forEach($=>{var h;const w=parseInt($.value),B=((h=W.testler[w])==null?void 0:h.label)||W.testler[w];T.includes(B)?$.checked=!0:$.checked=!1}),Ue()}}else{const c=document.getElementById("tmSubjectSel"),p=document.getElementById("tmSubjectFree");c.style.display!=="none"?c.value=i.subject:p.value=i.subject,document.getElementById("tmBookVal").value="",document.getElementById("tmBookSearch").value="",document.getElementById("tmBookList").style.display="none",document.getElementById("tmTestWrap").style.display="none"}G("taskModal")}async function ur(){const e=prompt("Şablon adı giriniz:");if(!e)return;const t=l.students.find(s=>s.id===l.activeStuId),n=(t==null?void 0:t.weekStart)??0,a=ne(l.weekOffset,n),i=[];for(let s=0;s<7;s++){const d=J(a,s),c=O(d),p=`${l.activeStuId}_${c}`;(l.tasks[p]||[]).forEach(u=>{i.push({day_index:s,type:u.type,exam_type:u.exam||null,subject:u.subject,duration:u.duration,note:u.note||"",task_items:u.task_items||null})})}if(i.length===0)return b("Bu haftada kaydedilecek görev bulunmuyor!");M(!0);const{error:o}=await y.from("program_templates").insert({coach_id:x.coachId,name:e,description:`${i.length} görev içeriyor.`,tasks:i});if(M(!1),o)return b("Şablon kaydedilemedi: "+o.message);b("Hafta şablon olarak kaydedildi ✓"),await ie(`"${e}" şablonunu Rostrum Akademi ekibiyle paylaşmak ister misiniz?

Paylaşılan şablonlar değerlendirilerek tüm koçlara önerilebilir.`)&&y.auth.getSession().then(({data:{session:s}})=>{const d=s==null?void 0:s.access_token;d&&fetch("/api/mailer",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${d}`},body:JSON.stringify({type:"template_share",template_name:e,task_count:i.length,tasks_json:JSON.stringify(i,null,2)})}).then(()=>b("Şablon Rostrum ekibiyle paylaşıldı ✓")).catch(()=>b("Şablon kaydedildi, paylaşım gönderilemedi."))})}async function gr(){M(!0);const{data:e,error:t}=await y.from("program_templates").select("*").eq("coach_id",x.coachId);if(M(!1),t)return b("Şablonlar yüklenemedi.");if(!e||e.length===0)return b("Kayıtlı şablonunuz bulunmuyor. Önce haftayı şablon olarak kaydedin.");let n=document.getElementById("applyTemplateModal");n||(n=document.createElement("div"),n.id="applyTemplateModal",n.className="modal-bg",n.innerHTML=`<div class="modal">
      <button class="modal-close" onclick="cm('applyTemplateModal')">×</button>
      <h2>Şablon Uygula</h2>
      <div class="field"><label>Şablon Seçin</label>
        <select id="atmSelect"></select>
      </div>
      <button class="btn btn-accent" style="width:100%;justify-content:center;padding:12px;margin-top:12px" onclick="confirmApplyTemplate()">Uygula</button>
    </div>`,document.body.appendChild(n),n.addEventListener("click",a=>{a.target===n&&n.classList.remove("open")})),document.getElementById("atmSelect").innerHTML=e.map(a=>`<option value="${a.id}">${v(a.name)} (${a.tasks.length} Görev)</option>`).join(""),G("applyTemplateModal")}async function vr(){const e=document.getElementById("atmSelect").value;if(!e)return;M(!0);const{data:t,error:n}=await y.from("program_templates").select("*").eq("id",e).single();if(n||!t)return M(!1),b("Şablon yüklenemedi.");const a=l.students.find(r=>r.id===l.activeStuId),i=(a==null?void 0:a.weekStart)??0,o=ne(l.weekOffset,i);for(const r of t.tasks){const s=O(J(o,r.day_index)),d={student_id:l.activeStuId,coach_id:x.coachId,date:s,type:r.type,exam_type:r.exam_type,subject:r.subject,duration:r.duration,note:r.note,done:!1,task_items:r.task_items},{data:c,error:p}=await y.from("tasks").insert(d).select().single();if(!p&&c){const m=`${l.activeStuId}_${s}`;l.tasks[m]||(l.tasks[m]=[]),l.tasks[m].push({_id:c.id,type:c.type,exam:c.exam_type,subject:c.subject,duration:c.duration,note:c.note,done:!1,student_note:"",task_items:c.task_items})}}M(!1),q("applyTemplateModal"),X(),b("Şablon başarıyla uygulandı ✓")}function fr(e,t){var o;const a=`${l.activeStuId}_${e}`,i=(o=l.tasks[a])==null?void 0:o[t];i&&(_clipboardTask={type:i.type,exam:i.exam,subject:i.subject,duration:i.duration,note:i.note,task_items:i.task_items},b("Görev panoya kopyalandı ✓"),X())}async function yr(e){if(!_clipboardTask)return;const t={student_id:l.activeStuId,coach_id:x.coachId,date:e,type:_clipboardTask.type,exam_type:_clipboardTask.exam||null,subject:_clipboardTask.subject,duration:_clipboardTask.duration,note:_clipboardTask.note,done:!1,task_items:_clipboardTask.task_items};M(!0);const{data:n,error:a}=await y.from("tasks").insert(t).select().single();if(M(!1),a)return b("Hata: "+a.message);const i=`${l.activeStuId}_${e}`;l.tasks[i]||(l.tasks[i]=[]),l.tasks[i].push({_id:n.id,type:n.type,exam:n.exam_type,subject:n.subject,duration:n.duration,note:n.note,done:!1,student_note:"",task_items:n.task_items}),X(),b("Görev yapıştırıldı ✓")}async function xr(e,t){var p;const n=`${l.activeStuId}_${e}`,a=(p=l.tasks[n])==null?void 0:p[t];if(!a)return;const i=l.students.find(m=>m.id===l.activeStuId),o=(i==null?void 0:i.weekStart)??0,r=ne(l.weekOffset,o),s=[];for(let m=0;m<7;m++){const u=J(r,m),g=O(u);g!==e&&s.push({student_id:l.activeStuId,coach_id:x.coachId,date:g,type:a.type,exam_type:a.exam||null,subject:a.subject,duration:a.duration,note:a.note,done:!1,task_items:a.task_items})}if(s.length===0)return;M(!0);const{data:d,error:c}=await y.from("tasks").insert(s).select();if(M(!1),c)return b("Hata: "+c.message);(d||[]).forEach(m=>{const u=`${l.activeStuId}_${m.date}`;l.tasks[u]||(l.tasks[u]=[]),l.tasks[u].push({_id:m.id,type:m.type,exam:m.exam_type,subject:m.subject,duration:m.duration,note:m.note,done:!1,student_note:"",task_items:m.task_items})}),X(),b("Görev tüm haftaya kopyalandı ✓")}async function br(){if(!_clipboardTask)return;const e=l.students.find(r=>r.id===l.activeStuId),t=(e==null?void 0:e.weekStart)??0,n=ne(l.weekOffset,t),a=[];for(let r=0;r<7;r++){const s=J(n,r),d=O(s);a.push({student_id:l.activeStuId,coach_id:x.coachId,date:d,type:_clipboardTask.type,exam_type:_clipboardTask.exam||null,subject:_clipboardTask.subject,duration:_clipboardTask.duration,note:_clipboardTask.note,done:!1,task_items:_clipboardTask.task_items})}M(!0);const{data:i,error:o}=await y.from("tasks").insert(a).select();if(M(!1),o)return b("Hata: "+o.message);(i||[]).forEach(r=>{const s=`${l.activeStuId}_${r.date}`;l.tasks[s]||(l.tasks[s]=[]),l.tasks[s].push({_id:r.id,type:r.type,exam:r.exam_type,subject:r.subject,duration:r.duration,note:r.note,done:!1,student_note:"",task_items:r.task_items})}),_clipboardTask=null,X(),b("Görev tüm haftaya yapıştırıldı ✓")}_a();tn();window.addEventListener("hashchange",()=>{let e=window.location.hash.substring(1);if(document.getElementById("appShell").classList.contains("visible")&&e!==currentTab){if(!e){e={coach:"home",student:"portal",developer:"home",parent:"parent-home"}[x.role]||"portal",window.location.hash=e;return}document.getElementById("view-"+e)&&se(e,!1)}});async function un(){const e=document.getElementById("view-coach-applications");if(!e)return;e.innerHTML=`<div style="padding:24px;max-width:800px;margin:0 auto">
    <div style="font-family:'Inter',sans-serif;font-size:22px;font-weight:800;margin-bottom:4px">Eşleşme Başvuruları</div>
    <div style="font-size:13px;color:var(--text-mid);margin-bottom:20px">koc-bul sayfasından gelen öğrenci başvuruları</div>
    <div id="appsList" style="display:flex;flex-direction:column;gap:10px">
      <div style="text-align:center;padding:32px;color:var(--text-dim)">Yükleniyor...</div>
    </div>
  </div>`;const{data:t,error:n}=await y.from("match_requests").select("*").eq("matched_coach_id",x.coachId).order("created_at",{ascending:!1}),a=document.getElementById("appsList");if(n||!t){a.innerHTML=`<div style="padding:20px;color:var(--red);background:var(--red-dim);border-radius:10px">Başvurular yüklenemedi: ${(n==null?void 0:n.message)||"Bilinmeyen hata"}</div>`;return}if(t.length===0){a.innerHTML=`<div style="text-align:center;padding:40px;color:var(--text-dim)">
      <div style="font-size:32px;margin-bottom:12px">📭</div>
      <div style="font-size:14px;font-weight:600">Henüz başvuru yok</div>
      <div style="font-size:12px;margin-top:4px">Koc-bul sayfasındaki profilinize öğrenci başvurduğunda burada görünecek.</div>
    </div>`;const d=document.querySelector("#sbi_coach-applications .sb-badge");d&&d.remove();return}const i={pending:"#f0a500",accepted:"#3ecf8e",rejected:"#ff5c7a"},o={pending:"Beklemede",accepted:"Kabul Edildi",rejected:"Reddedildi"};a.innerHTML=t.map(d=>`
    <div style="background:var(--surface);border:1px solid var(--border);border-radius:14px;padding:18px 20px">
      <div style="display:flex;align-items:flex-start;justify-content:space-between;gap:12px;margin-bottom:12px">
        <div>
          <div style="font-size:15px;font-weight:700">${v(d.student_name||"İsimsiz")}</div>
          <div style="font-size:11px;color:var(--text-dim);margin-top:2px">${new Date(d.created_at).toLocaleDateString("tr-TR",{day:"numeric",month:"long",year:"numeric",hour:"2-digit",minute:"2-digit"})}</div>
        </div>
        <span style="font-size:11px;font-weight:700;padding:3px 10px;border-radius:99px;background:${i[d.status]||"#888"}22;color:${i[d.status]||"#888"};white-space:nowrap">
          ${o[d.status]||d.status}
        </span>
      </div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:14px">
        <div style="background:var(--surface2);border-radius:8px;padding:10px 12px">
          <div style="font-size:10px;color:var(--text-dim);font-weight:700;text-transform:uppercase;letter-spacing:.5px;margin-bottom:3px">E-posta</div>
          <a href="mailto:${v(d.email||"")}" style="font-size:13px;font-weight:600;color:var(--accent);text-decoration:none">${v(d.email||"—")}</a>
        </div>
        <div style="background:var(--surface2);border-radius:8px;padding:10px 12px">
          <div style="font-size:10px;color:var(--text-dim);font-weight:700;text-transform:uppercase;letter-spacing:.5px;margin-bottom:3px">Telefon</div>
          <a href="tel:${v(d.phone||"")}" style="font-size:13px;font-weight:600;color:var(--text);text-decoration:none">${v(d.phone||"—")}</a>
        </div>
        <div style="background:var(--surface2);border-radius:8px;padding:10px 12px">
          <div style="font-size:10px;color:var(--text-dim);font-weight:700;text-transform:uppercase;letter-spacing:.5px;margin-bottom:3px">Sınav Grubu</div>
          <div style="font-size:13px;font-weight:600">${v(d.exam_profile||"—")}</div>
        </div>
        ${d.style?`<div style="background:var(--surface2);border-radius:8px;padding:10px 12px">
          <div style="font-size:10px;color:var(--text-dim);font-weight:700;text-transform:uppercase;letter-spacing:.5px;margin-bottom:3px">Koçluk Tercihi</div>
          <div style="font-size:12px;color:var(--text-mid)">${v(d.style)}</div>
        </div>`:""}
      </div>
      ${d.status==="pending"?`
      <div style="display:flex;gap:8px">
        <button onclick="updateApplication('${d.id}','accepted','${v(d.email||"")}','${v(d.student_name||"")}')" style="flex:1;padding:9px;background:rgba(62,207,142,.12);color:#3ecf8e;border:1px solid rgba(62,207,142,.25);border-radius:8px;font-size:12px;font-weight:700;cursor:pointer">✓ Kabul Et</button>
        <button onclick="updateApplication('${d.id}','rejected','${v(d.email||"")}','${v(d.student_name||"")}')" style="flex:1;padding:9px;background:rgba(255,92,122,.08);color:#ff5c7a;border:1px solid rgba(255,92,122,.2);border-radius:8px;font-size:12px;font-weight:700;cursor:pointer">✗ Reddet</button>
      </div>`:""}
    </div>`).join("");const r=t.filter(d=>d.status==="pending").length,s=document.getElementById("sbi_coach-applications");if(s){const d=s.querySelector(".sb-badge");if(d&&d.remove(),r>0){const c=document.createElement("span");c.className="sb-badge",c.textContent=r,s.appendChild(c)}}}async function hr(e,t,n,a){var o;const{error:i}=await y.from("match_requests").update({status:t}).eq("id",e);if(i)return b("Hata: "+i.message);b(t==="accepted"?"✓ Başvuru kabul edildi":"Başvuru reddedildi"),n&&fetch("/api/mailer",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({type:"application_update",to:n,student_name:a||"",status:t,coach_name:((o=l.workspace)==null?void 0:o.brand_name)||"Koçunuz"})}).catch(r=>console.warn("[updateApplication] mail error:",r.message)),un()}let Re=null;async function La(){var a;const e=document.getElementById("view-coach-notes");if(!e)return;e.innerHTML=`<div style="padding:24px;max-width:860px;margin:0 auto">
    <div style="font-family:'Inter',sans-serif;font-size:22px;font-weight:800;margin-bottom:4px">Notlarım</div>
    <div style="font-size:13px;color:var(--text-mid);margin-bottom:20px">Kişisel notlar — sadece sen görürsün</div>
    <div style="display:flex;gap:10px;margin-bottom:18px">
      <button onclick="openNoteEditor(null)" style="padding:8px 18px;background:var(--accent);color:#fff;border:none;border-radius:8px;font-size:13px;font-weight:700;cursor:pointer">+ Yeni Not</button>
    </div>
    <div id="coachNotesList" style="display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:12px">
      <div style="grid-column:1/-1;text-align:center;padding:32px;color:var(--text-dim)">Yükleniyor...</div>
    </div>
  </div>`;const t=`coach_notes_${x.coachId}`,{data:n}=await y.from("platform_settings").select("value").eq("key",t).maybeSingle();Re=((a=n==null?void 0:n.value)==null?void 0:a.notes)||[],gn()}function gn(){const e=document.getElementById("coachNotesList");if(!e)return;const t=Re;if(!t.length){e.innerHTML=`<div style="grid-column:1/-1;text-align:center;padding:48px;color:var(--text-dim)">
      <div style="font-size:36px;margin-bottom:12px">📝</div>
      <div style="font-size:14px;font-weight:600">Henüz not yok</div>
      <div style="font-size:12px;margin-top:4px">+ Yeni Not ile başla</div>
    </div>`;return}const n=["#f0a50018","#3ecf8e18","#4da6ff18","#c084fc18","#ff5c7a18"];e.innerHTML=t.map((a,i)=>`
    <div style="background:${n[i%n.length]};border:1px solid var(--border);border-radius:14px;padding:16px;cursor:pointer;position:relative;transition:border-color .15s"
      onmouseover="this.style.borderColor='var(--accent)'" onmouseout="this.style.borderColor='var(--border)'"
      onclick="openNoteEditor(${i})">
      <div style="display:flex;align-items:flex-start;justify-content:space-between;gap:8px;margin-bottom:8px">
        <div style="font-size:13px;font-weight:700;color:var(--text)">${v(a.title||"Başlıksız")}</div>
        <button onclick="event.stopPropagation();deleteCoachNote(${i})" style="background:none;border:none;cursor:pointer;color:var(--text-dim);font-size:16px;padding:0;line-height:1;flex-shrink:0">✕</button>
      </div>
      <div style="font-size:12px;color:var(--text-mid);white-space:pre-wrap;line-height:1.5;max-height:100px;overflow:hidden">${v(a.body||"")}</div>
      <div style="font-size:10px;color:var(--text-dim);margin-top:10px">${a.updated?new Date(a.updated).toLocaleDateString("tr-TR",{day:"numeric",month:"short",year:"numeric"}):""}</div>
    </div>`).join("")}function kr(e){const t=e!==null?Re[e]||{}:{};let n=document.getElementById("coachNoteModal");n||(n=document.createElement("div"),n.id="coachNoteModal",n.className="modal-bg",document.body.appendChild(n)),n.innerHTML=`<div class="modal" style="max-width:520px">
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:16px">
      <div style="font-size:16px;font-weight:800">${e===null?"Yeni Not":"Notu Düzenle"}</div>
      <button onclick="document.getElementById('coachNoteModal').style.display='none'" style="background:none;border:none;cursor:pointer;font-size:20px;color:var(--text-dim)">✕</button>
    </div>
    <input id="noteEditorTitle" value="${v(t.title||"")}" placeholder="Başlık..." style="width:100%;padding:10px 12px;background:var(--surface2);border:1px solid var(--border);border-radius:8px;color:var(--text);font-size:14px;font-weight:600;box-sizing:border-box;margin-bottom:10px">
    <textarea id="noteEditorBody" rows="8" placeholder="Not içeriği..." style="width:100%;padding:10px 12px;background:var(--surface2);border:1px solid var(--border);border-radius:8px;color:var(--text);font-size:13px;line-height:1.6;resize:vertical;box-sizing:border-box;font-family:inherit">${v(t.body||"")}</textarea>
    <div style="display:flex;gap:8px;margin-top:14px">
      <button onclick="saveCoachNote(${e})" style="flex:1;padding:10px;background:var(--accent);color:#fff;border:none;border-radius:8px;font-size:13px;font-weight:700;cursor:pointer">Kaydet</button>
      <button onclick="document.getElementById('coachNoteModal').style.display='none'" style="padding:10px 16px;background:var(--surface2);color:var(--text);border:1px solid var(--border);border-radius:8px;font-size:13px;cursor:pointer">İptal</button>
    </div>
  </div>`,n.style.display="flex"}async function wr(e){const t=document.getElementById("noteEditorTitle").value.trim(),n=document.getElementById("noteEditorBody").value.trim();if(!t&&!n)return b("Not boş olamaz");const a={title:t||"Başlıksız",body:n,updated:new Date().toISOString()};e===null?Re.unshift(a):Re[e]=a,await ja(),document.getElementById("coachNoteModal").style.display="none",gn(),b("Not kaydedildi ✓")}async function $r(e){await ie("Bu notu silmek istiyor musun?")&&(Re.splice(e,1),await ja(),gn(),b("Not silindi"))}async function ja(){const e=`coach_notes_${x.coachId}`;await y.from("platform_settings").upsert({key:e,value:{notes:Re}},{onConflict:"key"})}function Bt(){if(x.role!=="student")return;const e=(l.messages[x.studentId]||[]).filter(t=>t.from==="coach"&&!t.read).length;["sbi_smessages","mntab_smessages"].forEach(t=>{const n=document.getElementById(t);if(!n)return;n.style.position="relative";const a=n.querySelector(".msg-nav-badge");if(a&&a.remove(),e>0){const i=document.createElement("span");i.className="msg-nav-badge",i.style.cssText="position:absolute;top:3px;right:3px;background:#ef4444;color:#fff;border-radius:100px;min-width:14px;height:14px;font-size:9px;font-weight:800;display:flex;align-items:center;justify-content:center;padding:0 3px;pointer-events:none;line-height:1",i.textContent=e>9?"9+":e,n.appendChild(i)}})}window.updateMsgBadge=Bt;window.toggleSidebar=li;window.setupShell=ci;window.switchTab=se;window.renderHome=Nn;window.renderCoachApplications=un;window.updateApplication=hr;window.renderCoachNotes=La;window.openNoteEditor=kr;window.toggleNewResourceMode=Ci;window.addManualTest=Li;window.removeManualTest=ji;window.saveCoachNote=wr;window.deleteCoachNote=$r;window.renderStudentsSearch=ot;window.filterStudentSearch=pi;window.openStudentDetail=Hn;window.openKonuHaritasi=gi;window.openStudentProgram=Vt;window.openStudentExams=vi;window.openStudentAppointments=fi;window.renderProfile=On;window.saveProfile=wi;window.renderSettings=Fn;window.saveGeminiKey=$i;window.renderProgram=X;window.selectStu=_i;window.chWeek=Ei;window.goToday=Ti;window.openClearWeekModal=Ii;window.toggleDaySel=zi;window.toggleAllDays=Bi;window.confirmClearDays=Mi;window.openTaskModal=qn;window.loadResources=Wn;window.updateSubjectList=wt;window.updateBookList=Pi;window.renderBookList=$t;window.filterBooks=Ri;window.selectBook=Ni;window.renderTestList=_t;window.selectAllTests=Hi;window.clearAllTests=Yi;window.updateTestSummary=Ue;window.selectModalSpeed=Ki;window.applyDuration=Oi;window.scheduleSmartBadge=Et;window.applySmartDuration=Ui;window.loadStudentSpeeds=Vn;window.saveStudentSpeed=Zn;window.saveTask=Gi;window.toggleTask=qi;window.closeTaskMenu=Jt;window.showTaskMenu=Wi;window.copyTask=Vi;window.deleteTask=Zi;window.renderTodoList=ea;window.renderStudents=na;window.goProgram=ro;window.openStudentModal=lo;window.saveStudent=co;window.showInviteInfo=aa;window.copyInvite=mo;window.deleteStu=uo;window.renderAppointments=Ge;window.renderCalDays=Tt;window.selCalDay=vo;window.chCalMonth=fo;window.renderApptList=Xt;window.openApptModal=yo;window.saveAppt=xo;window.deleteAppt=ko;window.renderExams=qe;window.openCommentModal=So;window.saveComment=Io;window.deleteExam=zo;window.renderMessages=da;window.selectThread=Bo;window.renderThreadHTML=Te;window.sendMsg=Mo;window.scrollMsgs=Se;window.renderPortal=St;window.stuToggleTask=Ao;window.renderSPortal=Ie;window.stuToggleTask2=Do;window.chWeekS=Lo;window.openTaskDetail=Qt;window.toggleTaskDetail=Ro;window.toggleDetailItem=No;window.selectVideoSpeed=Ho;window.saveTaskDetail=Yo;window.renderSExams=en;window.openStudentExamModal=ca;window.openExamModal=Ko;window.renderNetInputs=tn;window.saveExam=Uo;window.renderSMessages=Ht;window.initRealtime=nn;window.destroyRealtime=an;window.renderDevDashboard=ma;window.renderDevUsers=We;window.openDevUserModal=Wo;window.devDeleteUser=Vo;window.openPlanModal=Zo;window.savePlan=Jo;window.renderDevResources=st;window.openPlaylistModal=Xo;window.fetchYouTubePlaylist=Qo;window.savePlaylist=es;window.openResourceModal=ts;window.saveResource=ns;window.devDeleteResource=as;window.renderDevFinance=rt;window.openPaymentModal=os;window.verifyPayment=is;window.setDevUserFilter=qo;window.savePayment=ss;window.openSubModal=rs;window.saveSub=ls;window.renderDevAnnounce=lt;window.openAnnounceModal=ds;window.saveAnnounce=cs;window.toggleAnnounce=ps;window.devDeleteAnnounce=ms;window.renderDevTickets=Ve;window.updateTicketStatus=ys;window.devDeleteTicket=xs;window.selectDevTicket=us;window.sendDevReply=fs;window.openSupportTicket=bs;window.openSupportChat=It;window.closeSupportChat=ua;window.startAISupportChat=hs;window.startEminSupportChat=ks;window.submitEminInitialMessage=ws;window.sendSupportMessage=$s;window.openSupportChatDirect=It;window.checkCoachSubscription=Wt;window.showTrialExpiredScreen=gt;window.loadAnnouncements=ga;window.saveStudentDev=tr;window.showOnboarding=ya;window.showOnboardingWidget=Ts;window.showStudentWelcome=Ss;window.renderSProfil=ba;window.saveStudentProfile=Is;window.changePassword=zs;window.renderCoachProfile=ha;window.updateProfilePreview=on;window.switchPreviewTab=Ms;window.nl2br=ka;window.saveCoachProfile=As;window.renderDevMatches=sn;window.updateMatchRequestStatus=Ds;window.openSpeedModal=Cs;window.saveAllSpeeds=Ls;window.openStudentNotes=js;window.saveStudentNote=Ps;window.openReportModal=Rs;window.getReportDates=rn;window.buildReportHTML=ln;window.previewReport=Ns;window.generatePDF=Hs;window.openWeeklyPDFModal=Ks;window.generateWeeklyPDF=Os;window.printWeeklyProgramWithNote=wa;window.openInviteCodeModal=Fs;window.copyInviteCode=Us;window.copyInviteLink=Gs;window.copyToClipboard=dn;window.loadTheme=_a;window.applyAccent=Ea;window.setTheme=qs;window.openThemePanel=Ws;window.initAIChatForRole=Ta;window.toggleAIChat=Vs;window.aiQuickSend=Zs;window.buildAIContext=Kt;window.addAIMessage=xe;window.sendAIMessage=Sa;window.autoDetectModel=Ia;window.callGeminiFallback=Ee;window.generateAICopilotDraft=Js;window.checkCopilotDraftEdited=Qs;window.shareCopilotWhatsApp=Xs;window.assignResourceAsTask=nr;window.confirmAssignResource=ar;window.sendCopilotDraft=er;window.renderParentHome=za;window.renderParentProgress=Ba;window.renderParentAI=Ma;window.applyResFilter=mn;window.updateCRFilter=ir;window.buildCRContent=zt;window.renderCoachResources=dt;window.switchCRTab=or;window.compileResourceStats=Da;window.openResourceModalCoach=sr;window.fetchYtPlaylistCoach=rr;window.saveResourceCoach=lr;window.deleteResourceCoach=dr;window.importResourcesFromExcel=cr;window.importStudentsFromExcel=pr;window.getTestStatus=Ca;window.openCoachTaskEdit=mr;window.saveWeekAsTemplate=ur;window.applyTemplateToWeek=gr;window.downloadICS=wo;window.confirmApplyTemplate=vr;window.copyTaskToClipboard=fr;window.pasteTaskFromClipboard=yr;window.copyTaskToWholeWeek=xr;window.pasteTaskToWholeWeek=br;window.sendWhatsAppReport=Ys;window.toggleUserMenu=di;window.closeUserMenu=Rn;window.renderAgenda=we;window.openAgendaApptModal=ta;window.deleteAgendaAppt=so;window.agendaPrev=eo;window.agendaNext=to;window.agendaToday=no;window.agendaSetFilter=ao;window.exportAgendaICS=io;window.openApptPopup=Qn;window.handleApptDrop=oo;window.openStudentKaynaklar=yi;window.addStudentBook=xi;window.editStudentBook=bi;window.sbUpdatePct=Kn;window.saveStudentBook=hi;window.deleteStudentBook=ki;async function _r(){const e=document.getElementById("rpStuId").value,t=l.students.find(m=>m.id===e);if(!t)return;const n=document.getElementById("rpPeriod").value,{start:a,end:i}=rn(),o=document.getElementById("rpNote").value.trim();let r="Performans Raporu";n==="weekly"?r="Haftalık Performans Raporu":n==="monthly"?r="Aylık Performans Raporu":r="Özel Dönem Performans Raporu";const s=`${r} (${a} - ${i})`,d=o||"Değerlendirme notu eklenmedi.";M(!0);const c=x.coachId||t.coachId,{error:p}=await y.from("reports").insert({student_id:e,coach_id:c,type:"performance",title:s,content:d,start_date:a,end_date:i});M(!1),p?b("Rapor kaydedilirken hata oluştu: "+p.message):(b("Rapor başarıyla geçmişe kaydedildi! ✓"),q("reportModal"))}async function Pa(e){const t=l.students.find(r=>r.id===e);if(!t)return;l.activeStuId=e,currentTab!=="student-detail"&&se("student-detail");const n=document.getElementById("view-student-detail");n.innerHTML=`<button class="back-link" onclick="openStudentDetail('${e}')">← ${v(t.name)}</button>
    <div style="padding:20px;color:var(--text-mid);font-size:13px">Raporlar yükleniyor…</div>`;const{data:a,error:i}=await y.from("reports").select("*").eq("student_id",e).order("created_at",{ascending:!1});if(i){n.innerHTML=`<button class="back-link" onclick="openStudentDetail('${e}')">← ${v(t.name)}</button>
      <div style="padding:20px;color:var(--red);font-size:13px">Hata: ${i.message}</div>`;return}let o=`
    <button class="back-link" onclick="openStudentDetail('${e}')">← ${v(t.name)}</button>
    <div style="padding:20px">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:20px">
        <h2 style="font-family:'Syne',sans-serif;font-size:20px;font-weight:800;color:var(--text)">🗂️ Geçmiş Raporlar</h2>
      </div>
  `;if(!a||a.length===0){o+=`
      <div style="text-align:center;padding:40px;background:var(--surface);border:1px solid var(--border);border-radius:12px;color:var(--text-dim)">
        <div style="font-size:36px;margin-bottom:12px">📭</div>
        <div style="font-size:13px">Bu öğrenci için henüz kaydedilmiş bir gelişim raporu bulunmuyor.</div>
      </div>
    </div>`,n.innerHTML=o;return}o+='<div style="display:flex;flex-direction:column;gap:12px">',a.forEach(r=>{const s=r.type==="ai_copilot"?"🧠":"📄",d=r.type==="ai_copilot"?"AI Copilot Değerlendirmesi":"Performans Raporu",c=new Date(r.created_at).toLocaleDateString("tr-TR",{day:"numeric",month:"long",year:"numeric",hour:"2-digit",minute:"2-digit"});o+=`
      <div style="background:var(--surface);border:1px solid var(--border);border-radius:12px;padding:16px 20px;display:flex;justify-content:space-between;align-items:center;gap:12px;box-shadow:var(--shadow)">
        <div style="min-width:0;flex:1">
          <div style="display:flex;align-items:center;gap:8px;margin-bottom:6px">
            <span style="font-size:16px">${s}</span>
            <span style="font-size:11px;font-weight:800;text-transform:uppercase;color:var(--text-dim);letter-spacing:.5px">${d}</span>
          </div>
          <h4 style="font-size:14px;font-weight:700;color:var(--text);margin-bottom:4px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${v(r.title)}</h4>
          <div style="font-size:11px;color:var(--text-dim)">Oluşturulma: ${c}</div>
        </div>
        <div style="display:flex;gap:8px">
          <button class="btn btn-ghost btn-sm" onclick="viewArchivedReport('${r.id}')">Görüntüle</button>
          ${x.role==="coach"||x.role==="developer"?`<button class="btn btn-danger btn-sm" style="background:#ef4444;border-color:#ef4444;color:#fff" onclick="deleteArchivedReport('${r.id}', '${e}')">Sil</button>`:""}
        </div>
      </div>
    `}),o+="</div></div>",n.innerHTML=o}async function Er(e){M(!0);const{data:t,error:n}=await y.from("reports").select("*").eq("id",e).single();if(M(!1),n||!t)return b("Rapor yüklenemedi: "+((n==null?void 0:n.message)||"Bulunamadı"));let a=document.getElementById("viewReportDetailModal");a||(a=document.createElement("div"),a.id="viewReportDetailModal",a.className="modal-bg",document.body.appendChild(a),a.addEventListener("click",r=>{r.target===a&&a.classList.remove("open")}));const i=t.type==="ai_copilot"?"🧠":"📄",o=new Date(t.created_at).toLocaleDateString("tr-TR",{day:"numeric",month:"long",year:"numeric",hour:"2-digit",minute:"2-digit"});a.innerHTML=`
    <div class="modal" style="max-width:600px; max-height:85vh; overflow-y:auto">
      <button class="modal-close" onclick="cm('viewReportDetailModal')">×</button>
      <div style="display:flex;align-items:center;gap:10px;margin-bottom:12px;border-bottom:1px solid var(--border);padding-bottom:12px">
        <span style="font-size:24px">${i}</span>
        <div>
          <h3 style="font-family:'Syne',sans-serif;font-size:16px;font-weight:800;color:var(--text)">${v(t.title)}</h3>
          <div style="font-size:11px;color:var(--text-dim)">Oluşturulma Tarihi: ${o}</div>
        </div>
      </div>
      <div style="background:var(--surface2);border:1px solid var(--border);border-radius:12px;padding:20px;font-size:13px;line-height:1.7;color:var(--text);white-space:pre-wrap;overflow-y:auto;max-height:450px">${v(t.content)}</div>
      <div style="display:flex;justify-content:flex-end;margin-top:16px;gap:8px">
        <button class="btn btn-ghost" onclick="cm('viewReportDetailModal')">Kapat</button>
        <button class="btn btn-accent" onclick="printActiveReport()">Yazdır / Paylaş</button>
      </div>
    </div>
  `,G("viewReportDetailModal")}function Tr(){const e=document.getElementById("viewReportDetailModal");if(!e)return;const t=e.querySelector("h3").textContent,n=e.querySelector("div div").textContent,a=e.querySelector('div[style*="pre-wrap"]').textContent,i=window.open("","_blank");i.document.write(`
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
  `),i.document.close()}async function Sr(e,t){if(!await ie("Bu raporu kalıcı olarak silmek istediğinize emin misiniz?"))return;M(!0);const{error:a}=await y.from("reports").delete().eq("id",e);M(!1),a?b("Rapor silinirken hata oluştu: "+a.message):(b("Rapor başarıyla silindi ✓"),Pa(t))}window.archivePerformanceReport=_r;window.openPastReports=Pa;window.viewArchivedReport=Er;window.printActiveReport=Tr;window.deleteArchivedReport=Sr;async function Ir(e){var t,n;e&&(e.disabled=!0,e.textContent="Sıfırlanıyor...");try{const a=(n=(t=window.S)==null?void 0:t.currentUser)==null?void 0:n.id;if(!a)throw new Error("Oturum bulunamadı.");const{data:i}=await y.from("users").select("id").eq("coach_id",a),o=(i||[]).map(m=>m.id);o.length>0&&(await y.from("tasks").delete().in("student_id",o),await y.from("exams").delete().in("student_id",o),await y.from("appointments").delete().in("student_id",o),await y.from("messages").delete().in("student_id",o),await y.from("student_profiles").delete().in("id",o),await y.from("users").delete().in("id",o));const r=[{id:"demo-stu-1",full_name:"Ahmet Yılmaz",username:"ahmetyilmaz",role:"student",exam_profile:"YKS",yks_area:"SAY",coach_id:a,email:"ahmet@demokoc.com",active:!0},{id:"demo-stu-2",full_name:"Zeynep Kaya",username:"zeynepkaya",role:"student",exam_profile:"YKS",yks_area:"EA",coach_id:a,email:"zeynep@demokoc.com",active:!0},{id:"demo-stu-3",full_name:"Elif Demir",username:"elifdemir",role:"student",exam_profile:"YKS",yks_area:"SÖZ",coach_id:a,email:"elif@demokoc.com",active:!0}];for(const m of r)await y.from("users").upsert(m),await y.from("student_profiles").upsert({id:m.id,parent_email:"veli@demo.com",target:"Boğaziçi Üniversitesi"});const s=new Date,d=[],c={"demo-stu-1":["Matematik","Fizik","Kimya"],"demo-stu-2":["Matematik","Edebiyat","Tarih"],"demo-stu-3":["Edebiyat","Tarih","Coğrafya"]};for(const m of r){const u=c[m.id];for(let g=-3;g<=3;g++){const E=new Date(s);E.setDate(s.getDate()+g);const T=E.toISOString().split("T")[0];d.push({student_id:m.id,date:T,subject:u[0],topic:"Konu Anlatımı & Tekrar",duration:120,done:g<0}),d.push({student_id:m.id,date:T,subject:u[1],topic:"Soru Bankası Çözümü (120 Soru)",duration:90,done:g<=0})}}await y.from("tasks").insert(d);const p=[];for(const m of r)p.push({student_id:m.id,date:new Date(s.getTime()-15*24*3600*1e3).toISOString().split("T")[0],type:"TYT",title:"Özdebir Türkiye Geneli",net_tr:32,net_sos:15,net_mat:28,net_fen:12,net_total:87}),p.push({student_id:m.id,date:new Date(s.getTime()-5*24*3600*1e3).toISOString().split("T")[0],type:"TYT",title:"3D Simülasyon Denemesi",net_tr:34,net_sos:16,net_mat:31,net_fen:14,net_total:95});await y.from("exams").insert(p),b("Demo verileri sıfırlandı ve tertemiz mock veri setleri yüklendi ✓"),setTimeout(()=>location.reload(),800)}catch(a){console.error("Demo reset error:",a),b("Sıfırlama sırasında hata oluştu: "+a.message)}finally{e&&(e.disabled=!1,e.textContent="Verileri Sıfırla ⟳")}}window.resetDemoData=Ir;setTimeout(()=>{if(new URLSearchParams(window.location.search).get("sandbox")==="true"||window.S&&window.S.currentUser&&window.S.currentUser.username==="demokoc"){let n=document.getElementById("demoSandboxBanner");n||(n=document.createElement("div"),n.id="demoSandboxBanner",n.style.cssText="position:fixed;bottom:20px;right:20px;background:rgba(26,25,22,0.95);color:var(--text);padding:14px 20px;border-radius:14px;box-shadow:0 12px 36px rgba(0,0,0,0.6);z-index:99999;font-size:13px;font-weight:700;display:flex;align-items:center;gap:14px;border:1px solid var(--acc);backdrop-filter:blur(10px);",n.innerHTML=`
        <span style="display:flex;align-items:center;gap:6px;"><span style="color:var(--acc)">⚡</span> Canlı Demo Modu</span>
        <button onclick="resetDemoData(this)" style="background:var(--acc);color:#fff;border:none;padding:6px 14px;border-radius:8px;font-size:11.5px;font-weight:800;cursor:pointer;transition:all 0.2s;box-shadow:0 4px 10px rgba(255,122,92,0.25);">Verileri Sıfırla ⟳</button>
      `,document.body.appendChild(n))}},2e3);window.loadTheme&&window.loadTheme();window.renderNetInputs&&window.renderNetInputs();window.checkOAuthSession&&window.checkOAuthSession();const Ra=new URLSearchParams(window.location.search);if(Ra.get("sandbox")==="true")window.simOAuthLogin&&setTimeout(()=>{console.log("Sandbox auto-login triggered for demokoc..."),window.simOAuthLogin("demokoc")},300);else if(window.location.search.includes("sandbox")||window.location.hash==="#sandbox"){const e=document.getElementById("demoQuickWrap");e&&(e.style.display="flex"),window.showGoogleSimulator&&setTimeout(()=>window.showGoogleSimulator(),300)}const $n=Ra.get("davet");$n&&window.applyInviteFromUrl&&setTimeout(()=>window.applyInviteFromUrl($n),200);"serviceWorker"in navigator&&window.addEventListener("load",()=>{navigator.serviceWorker.register("/sw.js").then(e=>{console.log("Service Worker başarıyla kaydedildi ✓",e.scope)}).catch(e=>{console.warn("Service Worker kaydı başarısız oldu:",e)})});window.addEventListener("hashchange",()=>{let e=window.location.hash.substring(1);if(document.getElementById("appShell").classList.contains("visible")&&e!==window.currentTab){if(!e){e={coach:"home",student:"portal",developer:"home",parent:"parent-home"}[window.session.role]||"portal",window.location.hash=e;return}document.getElementById("view-"+e)&&window.switchTab(e,!1)}});console.log("Rostrum Akademi App initialized successfully ✓");
