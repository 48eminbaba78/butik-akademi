(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))a(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();const l={students:[],tasks:{},appointments:[],exams:[],messages:{},coachTodos:{},weekOffset:0,calMonth:new Date().getMonth(),calYear:new Date().getFullYear(),calSelDay:null,activeStuId:null,msgThread:null,workspace:null,studentSpeeds:[],konuHaftaSoru:[]},b={role:null,studentId:null,dbUser:null,coachId:null,childName:null};window.S=l;window.session=b;window._loginMode="email";window.STU_DEFAULT_PASS="Rostrum"+Math.floor(1e3+Math.random()*9e3);window.DAYS_TR=["Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi","Pazar"];window.MONTHS_TR=["Ocak","Şubat","Mart","Nisan","Mayıs","Haziran","Temmuz","Ağustos","Eylül","Ekim","Kasım","Aralık"];window.EXAM_DEFS={TYT:["Türkçe","Matematik","Fen","Sosyal"],"AYT-SAY":["Matematik","Fizik","Kimya","Biyoloji"],"AYT-EA":["Matematik","Edebiyat","Tarih","Coğrafya"],"AYT-SOZ":["Edebiyat","Tarih1","Tarih2","Coğrafya1","Coğrafya2","Felsefe","Din"]};window.EXAM_SORU={TYT:{Türkçe:40,Matematik:40,Fen:20,Sosyal:20},"AYT-SAY":{Matematik:40,Fizik:14,Kimya:13,Biyoloji:13},"AYT-EA":{Matematik:40,Edebiyat:24,Tarih:10,Coğrafya:6},"AYT-SOZ":{Edebiyat:24,Tarih1:10,Tarih2:11,Coğrafya1:6,Coğrafya2:11,Felsefe:12,Din:6}};window.EXAM_KONU_MAP={TYT_Türkçe:["Dil Bilgisi"],TYT_Matematik:["TYT Matematik","Geometri"],TYT_Fen:["TYT Fizik","TYT Kimya","TYT Biyoloji"],TYT_Sosyal:[],"AYT-SAY_Matematik":["AYT Matematik","Geometri"],"AYT-SAY_Fizik":["AYT Fizik"],"AYT-SAY_Kimya":["AYT Kimya"],"AYT-SAY_Biyoloji":["AYT Biyoloji"],"AYT-EA_Matematik":["AYT Matematik","Geometri"],"AYT-EA_Edebiyat":["Dil Bilgisi"]};window.SUBJECT_MAP={TYT:["Türkçe","Matematik","Geometri","Fizik","Kimya","Biyoloji","Tarih","Coğrafya","Felsefe","Din"],"AYT-SAY":["Matematik","Geometri","Fizik","Kimya","Biyoloji"],"AYT-EA":["Matematik","Geometri","Edebiyat","Tarih","Coğrafya","Felsefe"],"AYT-SOZ":["Edebiyat","Tarih1","Tarih2","Coğrafya1","Coğrafya2","Felsefe","Din"]};window.currentTab="";window._clipboardTask=null;window._editingTaskId=null;window._regRole=null;window._onbRole=null;window._oauthUser=null;const Ga="https://imyhenrwmsmyikpollur.supabase.co",qa="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlteWhlbnJ3bXNteWlrcG9sbHVyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODAxNDE3ODYsImV4cCI6MjA5NTcxNzc4Nn0._ySJ5ArD1GYthyitHjdyEjLaUhextIwEqpRoF5ScI34",y=supabase.createClient(Ga,qa);window.db=y;function we(){var e;try{localStorage.setItem("ba_ui_"+(((e=b.dbUser)==null?void 0:e.id)||"x"),JSON.stringify({weekOffset:l.weekOffset,activeStuId:l.activeStuId,calMonth:l.calMonth,calYear:l.calYear}))}catch{}}function rt(){we()}function M(e,t){let n=document.getElementById("loadingOverlay");if(document.querySelectorAll(".btn-login, .btn-accent, .btn").forEach(i=>{e?(i.setAttribute("disabled","true"),i.style.opacity="0.6",i.style.pointerEvents="none"):(i.removeAttribute("disabled"),i.style.opacity="",i.style.pointerEvents="")}),e&&!n){n=document.createElement("div"),n.id="loadingOverlay",n.style.cssText="position:fixed;inset:0;background:rgba(15,14,12,.82);z-index:9999;display:flex;align-items:center;justify-content:center;flex-direction:column;gap:14px;backdrop-filter:blur(6px)";const i=t||"Yükleniyor...",o=t?'<div style="font-size:36px;animation:overlayPop .3s cubic-bezier(.34,1.56,.64,1) both">🗑️</div>':'<div style="width:38px;height:38px;border:3px solid rgba(255,255,255,.12);border-top-color:var(--accent);border-radius:50%;animation:spin .7s linear infinite"></div>';if(n.innerHTML=`${o}<div style="font-size:14px;font-weight:600;color:#fff;letter-spacing:.2px">${i}</div>`,!document.getElementById("spinStyle")){const s=document.createElement("style");s.id="spinStyle",s.textContent="@keyframes spin{to{transform:rotate(360deg)}}@keyframes overlayPop{from{transform:scale(.6);opacity:0}to{transform:scale(1);opacity:1}}",document.head.appendChild(s)}document.body.appendChild(n)}else!e&&n&&n.remove()}function v(e){return String(e||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function O(e){return e instanceof Date?e.toISOString().split("T")[0]:e}function J(e,t){const n=new Date(e);return n.setDate(n.getDate()+t),n}function ue(){return O(new Date)}function Gt(e){return e>=20?"good":e>=12?"mid":"low"}function lt(e){return{deneme:"📊 Deneme",soru:"📚 Soru",konu:"🎯 Konu",diger:"⭐ Diğer"}[e]||e}function G(e){document.getElementById(e).classList.add("open")}function q(e){document.getElementById(e).classList.remove("open")}function x(e){const t=document.getElementById("toast");t.textContent=e,t.classList.add("show"),setTimeout(()=>t.classList.remove("show"),2300)}document.addEventListener("click",e=>{e.target.classList.contains("modal-bg")&&e.target.id!=="trialExpiredModal"&&e.target.classList.remove("open")});document.addEventListener("keydown",e=>{e.key==="Escape"&&document.querySelectorAll(".modal-bg.open").forEach(t=>{t.id!=="trialExpiredModal"&&t.classList.remove("open")})});function Wa(e){let t=e.value.replace(/\D/g,"");t.startsWith("0")&&(t=t.slice(1)),t=t.slice(0,10);let n="";t.length>0&&(n="0 ("+t.slice(0,3)),t.length>=3&&(n+=") "+t.slice(3,6)),t.length>=6&&(n+=" "+t.slice(6,8)),t.length>=8&&(n+=" "+t.slice(8,10)),e.value=n}function qt(){const e=new Date;let t=e.getFullYear(),n=new Date(t,5,14);return e>n&&(t+=1,n=new Date(t,5,14)),{year:t,days:Math.max(1,Math.ceil((n-e)/864e5))}}function ne(e,t=0){const n=new Date,a=n.getDay(),o=(a===0?6:a-1)-t,s=new Date(n);return s.setDate(n.getDate()-(o+7)%7+e*7),s.setHours(0,0,0,0),s}function Va(){const e=l.students.find(t=>t.id===l.activeStuId);return(e==null?void 0:e.weekStart)??0}async function He(e){const t=await crypto.subtle.digest("SHA-256",new TextEncoder().encode(e));return[...new Uint8Array(t)].map(n=>n.toString(16).padStart(2,"0")).join("")}function Pe(e){return e?e.trim().toLowerCase().replace(/ç/g,"c").replace(/ğ/g,"g").replace(/ı/g,"i").replace(/ö/g,"o").replace(/ş/g,"s").replace(/ü/g,"u").replace(/i̇/g,"i").replace(/ı/g,"i").replace(/i/g,"i").replace(/\s+/g,"").replace(/\u0307/g,""):""}function Za(){if(!("Notification"in window)){console.log("Bu tarayıcı anlık bildirimleri desteklemiyor.");return}Notification.permission!=="granted"&&Notification.permission!=="denied"?Notification.requestPermission().then(e=>{e==="granted"&&x("Bildirim izinleri onaylandı ✓")}):Notification.permission==="granted"?x("Bildirim izinleri zaten açık ✓"):x("Bildirim izinleri tarayıcı ayarlarından engellenmiş.")}window.saveUI=we;window.saveS=rt;window.showLoading=M;window.esc=v;window.fmtDate=O;window.addDays=J;window.todayStr=ue;window.netColor=Gt;window.typeLabel=lt;window.om=G;window.cm=q;window.showToast=x;window.getWeekStart=ne;window.getNextYks=qt;window.maskPhoneTR=Wa;window.getStudentWeekStart=Va;window.sha256=He;window.normalizeUsername=Pe;window.requestNotificationPermission=Za;async function Ja(e,t={}){let n=y.from(e).select("*");Object.entries(t).forEach(([o,s])=>{n=n.eq(o,s)});const{data:a,error:i}=await n;return i&&console.error(e,i),a||[]}const Xa=4*60*1e3;function Wt(){return"ra_d_"+(b.coachId||b.studentId||"x")}function Cn(){try{localStorage.removeItem(Wt())}catch{}}function kn(){try{localStorage.setItem(Wt(),JSON.stringify({ts:Date.now(),students:l.students,tasks:l.tasks,appointments:l.appointments,exams:l.exams,messages:l.messages,coachTodos:l.coachTodos,studentSpeeds:l.studentSpeeds,workspace:l.workspace,konuHaftaSoru:l.konuHaftaSoru}))}catch{}}function Qa(){try{const e=localStorage.getItem(Wt());if(!e)return!1;const t=JSON.parse(e);return!t.ts||Date.now()-t.ts>Xa?!1:(t.students&&(l.students=t.students),t.tasks&&(l.tasks=t.tasks),t.appointments&&(l.appointments=t.appointments),t.exams&&(l.exams=t.exams),t.messages&&(l.messages=t.messages),t.coachTodos&&(l.coachTodos=t.coachTodos),t.studentSpeeds&&(l.studentSpeeds=t.studentSpeeds),t.workspace&&(l.workspace=t.workspace),t.konuHaftaSoru&&(l.konuHaftaSoru=t.konuHaftaSoru),!0)}catch{return!1}}async function wn(){var L;const e=b.coachId,t=b.role,n=t==="coach"||t==="developer"?y.from("workspaces").select("*").eq("coach_id",e).single():Promise.resolve({data:null});let a=y.from("users").select("*").eq("role","student");t==="student"?a=a.eq("id",b.studentId):(t==="coach"||t==="developer")&&(a=a.eq("coach_id",e));const i=a,o=new Date;o.setDate(o.getDate()-60);const s=o.toISOString().split("T")[0],r=new Date;r.setDate(r.getDate()-30);const d=r.toISOString().split("T")[0],c=t==="student"?y.from("tasks").select("*").eq("student_id",b.studentId).gte("date",s):t==="coach"||t==="developer"?y.from("tasks").select("*").eq("coach_id",e).gte("date",s):y.from("tasks").select("*").gte("date",s),p=t==="student"?y.from("appointments").select("*").eq("student_id",b.studentId).gte("date",d):t==="coach"||t==="developer"?y.from("appointments").select("*").eq("coach_id",e).gte("date",d):y.from("appointments").select("*").gte("date",d),m=t==="student"?y.from("exams").select("*").eq("student_id",b.studentId):t==="coach"||t==="developer"?y.from("exams").select("*").eq("coach_id",e):y.from("exams").select("*"),u=t==="student"?y.from("messages").select("*").eq("student_id",b.studentId).order("created_at",{ascending:!1}).limit(200):t==="coach"||t==="developer"?y.from("messages").select("*").eq("coach_id",e).order("created_at",{ascending:!1}).limit(200):y.from("messages").select("*").order("created_at",{ascending:!1}).limit(200),g=t==="coach"||t==="developer"?y.from("coach_todos").select("*").eq("coach_id",e):Promise.resolve({data:[]}),_=t==="student"?y.from("student_speeds").select("*").eq("student_id",b.studentId):t==="coach"||t==="developer"?y.from("student_speeds").select("*").eq("coach_id",e):y.from("student_speeds").select("*"),T=t==="coach"||t==="developer"?y.from("konu_mastery").select("*").eq("coach_id",e):t==="student"?y.from("konu_mastery").select("*").eq("student_id",b.studentId):Promise.resolve({data:[]}),f=t==="coach"||t==="developer"?y.from("konu_tekrar_log").select("*").eq("coach_id",e):t==="student"?y.from("konu_tekrar_log").select("*").eq("student_id",b.studentId):Promise.resolve({data:[]}),[$,w,B,h,S,I,z,E,A,C]=await Promise.all([n,i,c,p,m,u,g,_,T,f]);(t==="coach"||t==="developer")&&(l.workspace=$.data||null),l.students=(w.data||[]).map(k=>({id:k.id,name:k.full_name||k.username||"Öğrenci",target:k.target||"",color:k.color||"#4da6ff",progress:k.progress||0,weekStart:k.week_start||0,username:k.username,coachId:k.coach_id,yksArea:k.yks_area||"SAY"})),l.tasks={},(B.data||[]).forEach(k=>{const D=`${k.student_id}_${k.date}`;l.tasks[D]||(l.tasks[D]=[]),l.tasks[D].push({_id:k.id,type:k.type,exam:k.exam_type,subject:k.subject,duration:k.duration,note:k.note,done:k.done,student_note:k.student_note||"",student_result:k.student_result||null,student_feedback:k.student_feedback||null,task_items:k.task_items,start_time:k.start_time})}),l.appointments=(h.data||[]).map(k=>({id:k.id,studentId:k.student_id,date:k.date,time:k.time,duration:k.duration,type:k.type,note:k.note,meetLink:k.meet_link,google_event_id:k.google_event_id||null})),l.exams=(S.data||[]).map(k=>({id:k.id,studentId:k.student_id,name:k.name,date:k.date,type:k.exam_type,nets:k.nets||{},examDetails:k.exam_details||{},note:k.student_note,coachComment:k.coach_comment})),l.messages={},(I.data||[]).forEach(k=>{l.messages[k.student_id]||(l.messages[k.student_id]=[]),l.messages[k.student_id].push({_id:k.id,from:k.from_role,text:k.text||"",image_url:k.image_url||null,read:k.read,time:new Date(k.created_at).toLocaleTimeString("tr-TR",{hour:"2-digit",minute:"2-digit"})})}),Object.keys(l.messages).forEach(k=>l.messages[k].sort((D,j)=>D._id>j._id?1:-1)),l.coachTodos={},(z.data||[]).forEach(k=>{l.coachTodos[k.date]||(l.coachTodos[k.date]=[]),l.coachTodos[k.date].push({_id:k.id,task:k.task,note:k.note,done:k.done})}),l.studentSpeeds=E.data||[],l.konuMastery={},(A.data||[]).forEach(k=>{l.konuMastery[k.student_id]||(l.konuMastery[k.student_id]={}),l.konuMastery[k.student_id][k.subject]||(l.konuMastery[k.student_id][k.subject]={}),l.konuMastery[k.student_id][k.subject][k.konu]=k}),l.konuTekrarLog={},(C.data||[]).forEach(k=>{l.konuTekrarLog[k.student_id]||(l.konuTekrarLog[k.student_id]={}),l.konuTekrarLog[k.student_id][k.subject]||(l.konuTekrarLog[k.student_id][k.subject]={}),l.konuTekrarLog[k.student_id][k.subject][k.konu]||(l.konuTekrarLog[k.student_id][k.subject][k.konu]={}),l.konuTekrarLog[k.student_id][k.subject][k.konu][k.period_start]=k});try{const k=JSON.parse(localStorage.getItem("ba_ui_"+((L=b.dbUser)==null?void 0:L.id))||"{}");k.weekOffset!==void 0&&(l.weekOffset=k.weekOffset),k.activeStuId&&(l.activeStuId=k.activeStuId),k.calMonth!==void 0&&(l.calMonth=k.calMonth,l.calYear=k.calYear)}catch{}}async function Ln(){if(Qa()){wn().then(()=>{if(kn(),window.currentTab)try{window.switchTab(window.currentTab)}catch{}}).catch(t=>console.error("Arka plan yenileme hatası:",t));return}M(!0);try{await wn(),kn()}catch(t){console.error("loadAllData error",t)}M(!1)}window.dbQ=Ja;window.loadAllData=Ln;window.invalidateCache=Cn;let Be=!1;function oe(e){const t=document.getElementById("loginErr");t.textContent=e,t.style.display="block",setTimeout(()=>t.style.display="none",5e3)}function Me(e){const t=document.getElementById("regErr");t.textContent=e,t.style.display="block",setTimeout(()=>t.style.display="none",5e3)}function Vt(e){document.getElementById("loginPanel").style.display=e==="login"?"block":"none",document.getElementById("registerPanel").style.display=e==="register"?"block":"none",document.getElementById("lmtLogin").classList.toggle("active",e==="login"),document.getElementById("lmtRegister").classList.toggle("active",e==="register")}function ei(e){window._loginMode=e,document.querySelectorAll("#loginTabs .login-tab").forEach((t,n)=>t.classList.toggle("active",n===(e==="email"?0:1))),document.getElementById("loginEmailField").style.display=e==="email"?"block":"none",document.getElementById("loginUserField").style.display=e==="username"?"block":"none"}function jn(e){window._regRole=e,[["rrbCoach","coach"],["rrbStudent","student"]].forEach(([t,n])=>{const a=document.getElementById(t);if(!a)return;const i=e===n;a.classList.toggle("sel",i),a.style.borderColor=i?"var(--accent)":"var(--border)",a.style.background=i?"var(--accent-dim)":"var(--surface2)",a.style.boxShadow=i?"0 0 0 1px var(--accent)":"none"})}function ti(e){window._onbRole=e,document.getElementById("onbRoleCoach").classList.toggle("sel",e==="coach"),document.getElementById("onbRoleStudent").classList.toggle("sel",e==="student")}async function ni(){if(window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1"||window.location.protocol==="file:"){Rn();return}await Pn()}async function Pn(){Zt(),M(!0);try{const{error:e}=await y.auth.signInWithOAuth({provider:"google",options:{redirectTo:window.location.origin+"/app.html",queryParams:{access_type:"offline",prompt:"select_account"}}});e&&(M(!0),console.warn("Google Auth failed:",e),oe("Google Girişi Başlatılamadı: "+e.message))}catch(e){M(!1),oe("Google Girişi Başlatılamadı: "+e.message)}}function Rn(){document.getElementById("googleSimulatorModal").style.display="flex"}function Zt(){document.getElementById("googleSimulatorModal").style.display="none"}async function ai(e){if(Zt(),M(!0),e==="demokoc"){const{data:t,error:n}=await y.from("users").select("*").eq("username","demokoc").maybeSingle();if(n||!t){M(!1),oe("Demo koç profili bulunamadı!");return}await Re(t)}else if(e==="demoogrenci"){const{data:t,error:n}=await y.from("users").select("*").eq("username","demoogrenci").maybeSingle();if(n||!t){M(!1),oe("Demo öğrenci profili bulunamadı!");return}await Re(t)}else if(e==="new"){M(!1),document.getElementById("newUserOnboarding").style.display="flex";const t=Math.floor(1e3+Math.random()*9e3),n=`yeni.kullanici${t}@gmail.com`;document.getElementById("onbEmail").textContent=n,document.getElementById("onbName").value=`Yeni Kullanıcı ${t}`,window._oauthUser={id:`mock-google-id-${t}`,email:n,user_metadata:{full_name:`Yeni Kullanıcı ${t}`}}}}async function Nn(){var t,n,a;if(window.location.hash.includes("type=recovery")){console.log("[Auth] Recovery session active, skipping checkOAuthSession");return}if(Be)return;Be=!0;let e=null;try{console.log("[Auth] 1/4 getSession...");const{data:{session:i}}=await y.auth.getSession();if(console.log("[Auth] 2/4 session:",((t=i==null?void 0:i.user)==null?void 0:t.email)||"yok"),!(i!=null&&i.user)){Be=!1;return}if((n=document.getElementById("appShell"))!=null&&n.classList.contains("visible")){Be=!1;return}M(!0),e=setTimeout(()=>{console.warn("[Auth] timeout — Supabase yanıt vermedi, spinner kapatılıyor"),Be=!1,M(!1)},1e4),console.log("[Auth] 3/4 profil yükleniyor...");const{data:o,error:s}=await y.from("users").select("*").eq("id",i.user.id).maybeSingle();console.log("[Auth] 4/4 profil:",o==null?void 0:o.role,(s==null?void 0:s.message)||""),clearTimeout(e);let r=!1;if(o){if(o.role==="coach"){const{data:d}=await y.from("workspaces").select("*").eq("coach_id",o.id).maybeSingle();(!d||!d.onboarding_done)&&(r=!0)}}else r=!0;if(o&&!r){if(o.active===!1){M(!1),y.auth.signOut(),alert("Hesabınız askıya alınmıştır. Lütfen yöneticiyle iletişime geçin.");return}await Re(o)}else M(!1),document.getElementById("newUserOnboarding").style.display="flex",document.getElementById("onbEmail").textContent=i.user.email,document.getElementById("onbName").value=((a=i.user.user_metadata)==null?void 0:a.full_name)||"",window._oauthUser=i.user}catch(i){clearTimeout(e),Be=!1,M(!1),console.warn("[checkOAuthSession]",i)}}async function ii(){const e=document.getElementById("onbName").value.trim();if(!e){document.getElementById("onbErr").textContent="Ad soyad zorunlu",document.getElementById("onbErr").style.display="block";return}if(!window._onbRole){document.getElementById("onbErr").textContent="Hesap türü seçin",document.getElementById("onbErr").style.display="block";return}document.getElementById("onbErr").style.display="none",M(!0);const t=window._oauthUser,n=e.toLowerCase().replace(/\s+/g,"_").replace(/[^a-z0-9_]/g,""),a={id:t.id,full_name:e,email:t.email,role:window._onbRole,username:n+"_"+Math.random().toString(36).slice(2,6),password_hash:"supabase_managed",color:window._onbRole==="coach"?"#f0a500":"#4da6ff",week_start:0,progress:0,target:""},{data:i,error:o}=await y.from("users").upsert(a).select().single();if(o){M(!1),document.getElementById("onbErr").textContent="Hata: "+o.message,document.getElementById("onbErr").style.display="block";return}document.getElementById("newUserOnboarding").style.display="none",await Re(i)}let ee=0;function oi(e,t){document.getElementById("regBrandColor").value=e,t.parentElement.querySelectorAll("div").forEach(n=>n.style.outline="none"),t.style.outline="3px solid white"}function si(){const e=document.getElementById("regErr0");if(e&&(e.style.display="none"),ee===0){if(!window._regRole){e&&(e.textContent="Lütfen bir hesap türü seçin.",e.style.display="block");return}window._regRole==="student"?ee=3:ee=1}else if(ee===1){if(!document.getElementById("regBrandName").value.trim()){alert("Lütfen akademi / koçluk adını girin.");return}ee=2}else ee===2&&(ee=3);Et(ee)}function ri(){ee===3?window._regRole==="student"?ee=0:ee=2:ee===2?ee=1:ee===1&&(ee=0),Et(ee)}function Et(e){document.getElementById("regWizardStep0").style.display=e===0?"block":"none",document.getElementById("regWizardStepCoach1").style.display=e===1?"block":"none",document.getElementById("regWizardStepCoach2").style.display=e===2?"block":"none",document.getElementById("regWizardStepFinal").style.display=e===3?"block":"none";const t=document.getElementById("regInviteWrap");t&&(t.style.display=e===3&&window._regRole==="student"?"block":"none")}function li(e){if(e=(e||"").toUpperCase().replace(/[^0-9A-Z]/g,"").slice(0,6),e.length!==6)return;Vt("register"),jn("student"),ee=3,Et(3);const t=document.getElementById("regInviteCode");t&&(t.value=e,t.readOnly=!0,t.style.opacity=".75",Hn(),t.readOnly=!0)}let $n=null,Ht=!1;function Hn(){const e=document.getElementById("regInviteCode"),t=document.getElementById("regInviteStatus"),n=(e.value||"").toUpperCase().replace(/[^0-9A-Z]/g,"");if(e.value=n,Ht=!1,clearTimeout($n),n.length<6){t.style.display="none";return}t.style.display="block",t.style.background="var(--surface2)",t.style.color="var(--text-mid)",t.textContent="Kod kontrol ediliyor…",$n=setTimeout(async()=>{try{const{data:a,error:i}=await y.rpc("check_invite_code",{p_code:n}),o=!i&&a&&a.length?a[0].brand_name:null;o?(Ht=!0,t.style.background="rgba(5,150,105,.1)",t.style.color="var(--green)",t.textContent="✓ "+o+" akademisine katılacaksın"):(t.style.background="var(--red-dim)",t.style.color="var(--red)",t.textContent="✗ Kod bulunamadı — koçundan doğru kodu iste")}catch{t.style.display="none"}},450)}async function di(){var i;const e=document.getElementById("regName").value.trim(),t=document.getElementById("regEmail").value.trim().toLowerCase(),n=document.getElementById("regPass").value;if(!e||!t||!n)return Me("Tüm hesap bilgileri zorunludur");if(n.length<8)return Me("Şifre en az 8 karakter olmalıdır");let a="";if(window._regRole==="student"){if(a=(((i=document.getElementById("regInviteCode"))==null?void 0:i.value)||"").toUpperCase().trim(),a.length!==6)return Me("Koç davet kodu gerekli — 6 haneli kodu koçundan iste.");if(!Ht)try{const{data:o}=await y.rpc("check_invite_code",{p_code:a});if(!o||!o.length)return Me("Davet kodu geçersiz — koçundan doğru kodu iste.")}catch{return Me("Kod doğrulanamadı, tekrar dene.")}}M(!0);try{let o={full_name:e,role:window._regRole};if(a&&(o.invite_code=a),window._regRole==="coach"){const d=document.getElementById("regBrandName").value.trim(),c=document.getElementById("regBrandColor").value||"#f0a500",p=document.getElementById("regPhone").value.trim(),m=[...document.querySelectorAll("#regExamTypesWrap .ob-exam-sel input")].map(_=>_.value),u=m.length>0?m.join(","):"YKS",g=document.getElementById("regStudentCountRange").value||"1-5";o.ob_brand=d,o.ob_color=c,o.ob_phone=p,o.ob_examtypes=u,o.ob_studentcount=g}const{data:s,error:r}=await y.auth.signUp({email:t,password:n,options:{data:o}});if(r)throw r;if(s!=null&&s.user){M(!1),document.getElementById("regName").value="",document.getElementById("regEmail").value="",document.getElementById("regPass").value="",document.getElementById("regBrandName")&&(document.getElementById("regBrandName").value=""),document.getElementById("regPhone")&&(document.getElementById("regPhone").value="");const d=document.getElementById("regSuccess");d.textContent="Kayıt başarılı! E-posta adresinize bir doğrulama bağlantısı gönderildi. Lütfen doğrulama yaptıktan sonra giriş yapın.",d.style.display="block",setTimeout(()=>d.style.display="none",1e4),ee=0,Et(0),Vt("login")}}catch(o){M(!1),Me("Kayıt Hatası: "+o.message)}}async function ci(){const e=(document.getElementById("loginEmail").value||document.getElementById("loginUser").value||"").trim(),t=document.getElementById("loginPass").value;if(!e||!t)return oe("Kullanıcı adı ve şifre zorunlu");M(!0);const n=setTimeout(()=>{M(!1),oe("Bağlantı zaman aşımına uğradı. Supabase yanıt vermiyor — lütfen tekrar deneyin.")},15e3);try{let a=e;a.includes("@")?a=a.toLowerCase():a=Pe(e)+"@rostrumakademi.com";const{data:i,error:o}=await y.auth.signInWithPassword({email:a,password:t});if(!o&&(i!=null&&i.user)){const{data:s,error:r}=await y.from("users").select("*").eq("id",i.user.id).maybeSingle();if(r&&console.error("Profile fetch error:",r),s){if(s.active===!1)return M(!1),y.auth.signOut(),oe("Hesabınız askıya alınmıştır. Lütfen yöneticiyle iletişime geçin.");clearTimeout(n),await Re(s);return}return M(!1),oe("Hesabınız veritabanında aktif değil.")}try{const s=Pe(e.includes("@")?e.split("@")[0]:e),r=await He(t),{data:d}=await y.rpc("get_user_by_credentials",{p_username:s,p_password_hash:r}),c=Array.isArray(d)?d[0]:d;if(c){if(c.active===!1)return M(!1),oe("Hesabınız askıya alınmıştır. Lütfen yöneticiyle iletişime geçin.");clearTimeout(n),await Re(c);return}}catch(s){console.warn("Fallback RPC error:",s)}return M(!1),oe(o?"Giriş başarısız: "+o.message:"Kullanıcı adı veya şifre hatalı.")}catch(a){return M(!1),console.error("[doLogin]",a),oe("Giriş hatası: "+a.message)}finally{clearTimeout(n)}}async function Re(e){var n,a,i,o,s;M(!1);const t=e.role==="coach"||e.role==="developer"?e.id:e.role==="student"||e.role==="parent"?e.coach_id:null;b.role=e.role,b.studentId=e.role==="student"?e.id:null,b.dbUser=e,b.coachId=t,document.getElementById("loginScreen").style.display="none",document.getElementById("appShell").classList.add("visible");try{if(await Ln(),(b.role==="coach"||b.role==="developer")&&!l.workspace){console.log("[Auth] Workspace not found, auto-creating from signup metadata...");const{data:{user:m}}=await y.auth.getUser();if(m){const u=((n=m.user_metadata)==null?void 0:n.ob_brand)||"Akademi",g=((a=m.user_metadata)==null?void 0:a.ob_color)||"#f0a500",_=((i=m.user_metadata)==null?void 0:i.ob_phone)||null,T=((o=m.user_metadata)==null?void 0:o.ob_examtypes)||"YKS",f=((s=m.user_metadata)==null?void 0:s.ob_studentcount)||"1-5",$={coach_id:e.id,brand_name:u,brand_color:g,phone:_,exam_types:T,student_count_range:f,onboarding_done:!1},{data:w,error:B}=await y.from("workspaces").upsert($,{onConflict:"coach_id"}).select().maybeSingle();B?console.error("[finishLogin] Create workspace error:",B):w&&(l.workspace=w)}}if(b.role==="student"&&(l.activeStuId=e.id,b.studentId=e.id,l.students.find(m=>m.id===e.id)||l.students.push({id:e.id,name:e.full_name||e.username||"Öğrenci",target:e.target||"",color:e.color||"#4da6ff",progress:e.progress||0,weekStart:e.week_start||0,username:e.username,coachId:e.coach_id})),b.role==="parent"){const{data:m}=await y.from("users").select("*").eq("parent_id",e.id).single();m&&(l.activeStuId=m.id,b.studentId=m.id,b.childName=m.full_name||m.username)}window.setupShell();const r=new URLSearchParams(window.location.search);if(r.get("state")==="google_calendar"&&r.get("code")&&(b.role==="coach"||b.role==="developer")){const m=r.get("code");window.history.replaceState({},"",window.location.pathname+window.location.hash),document.getElementById("aiChatBubble").style.display="flex",setTimeout(()=>window.switchTab("appointments"),50),y.auth.getSession().then(({data:{session:u}})=>{u!=null&&u.access_token&&fetch("/api/mailer",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${u.access_token}`},body:JSON.stringify({type:"google_oauth_exchange",code:m})}).then(g=>g.json()).then(g=>{g.success?(l.workspace&&(l.workspace.google_calendar_connected=!0),x("Google Takvim bağlandı ✓"),window.renderAppointments&&window.renderAppointments()):x("Google bağlanamadı: "+(g.error||"Bilinmeyen hata"))}).catch(()=>x("Google Takvim bağlanamadı"))});return}if(document.getElementById("aiChatBubble").style.display="flex",(b.role==="coach"||b.role==="developer")&&(!l.workspace||!l.workspace.onboarding_done)){window.switchTab("home"),window.showOnboarding();return}if(b.role==="student"){const{data:m}=await y.from("student_profiles").select("onboarding_done").eq("id",b.studentId||e.id).maybeSingle();if(!m||!m.onboarding_done){const u=window.location.hash.substring(1),g=u&&document.getElementById("view-"+u)?u:"portal";setTimeout(()=>{window.switchTab(g),window.showStudentWelcome&&window.showStudentWelcome()},100);return}}const d=window.location.hash.substring(1),c={coach:"home",student:"portal",developer:"home",parent:"parent-home"}[b.role]||"portal",p=d&&document.getElementById("view-"+d)?d:c;setTimeout(()=>window.switchTab(p),50)}catch(r){M(!1),console.error("[doLogin] HATA:",r),oe("Hata: "+r.message),document.getElementById("loginScreen").style.display="flex",document.getElementById("appShell").classList.remove("visible")}}function pi(){window._fcInstance&&(window._fcInstance.destroy(),window._fcInstance=null),window.destroyRealtime&&window.destroyRealtime(),y.auth.signOut().catch(()=>{}),Cn(),b.role=null,b.studentId=null,b.dbUser=null,b.coachId=null,b.childName=null,l.workspace=null,document.getElementById("loginScreen").style.display="flex",document.getElementById("appShell").classList.remove("visible"),document.getElementById("aiChatBubble").style.display="none",document.getElementById("aiChatPanel").classList.remove("open"),document.getElementById("loginEmail")&&(document.getElementById("loginEmail").value=""),document.getElementById("loginUser")&&(document.getElementById("loginUser").value=""),document.getElementById("loginPass").value="",window.location.hash=""}function mi(){window.om("forgotPassModal")}async function ui(){const e=document.getElementById("forgotEmail").value.trim();if(!e)return;const t=document.getElementById("forgotMsg");try{const n=await fetch("/api/mailer",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({type:"password_reset",email:e})}),a=await n.json();if(!n.ok)throw new Error(a.error||"Sunucu hatası");t.style.display="block",t.style.background="var(--green-dim)",t.style.color="var(--green)",t.textContent="Sıfırlama linki e-posta adresinize gönderildi. Lütfen gelen kutunuzu kontrol edin."}catch(n){t.style.display="block",t.style.background="var(--red-dim)",t.style.color="var(--red)",t.textContent="Hata: "+(n.message||"Bir sorun oluştu.")}}async function gi(){const e=document.getElementById("newPasswordInput").value;if(!e||e.length<8){alert("Şifre en az 8 karakter olmalıdır.");return}M(!0);try{const{error:t}=await y.auth.updateUser({password:e});if(t)throw t;const n=await He(e),{data:{user:a}}=await y.auth.getUser();a&&await y.from("users").update({password_hash:n}).eq("id",a.id),alert("Şifreniz başarıyla güncellendi! Lütfen yeni şifrenizle giriş yapın."),window.cm("resetPasswordModal"),await y.auth.signOut(),window.location.hash="",window.location.reload()}catch(t){alert("Şifre güncellenirken hata oluştu: "+t.message)}finally{M(!1)}}window.loginErr=oe;window.regErr=Me;window.setAuthMode=Vt;window.setLoginMode=ei;window.setRegRole=jn;window.setOnbRole=ti;window.loginWithGoogle=ni;window.triggerRealGoogleLogin=Pn;window.showGoogleSimulator=Rn;window.closeGoogleSimulator=Zt;window.simOAuthLogin=ai;window.checkOAuthSession=Nn;window.completeOnboarding=ii;window.doRegister=di;window.doLogin=ci;window.finishLogin=Re;window.doLogout=pi;window.showForgotPassword=mi;window.sendResetEmail=ui;window.updateUserPassword=gi;window.nextRegWizardStep=si;window.prevRegWizardStep=ri;window.setRegBrandColor=oi;window.onInviteCodeInput=Hn;window.applyInviteFromUrl=li;y.auth.onAuthStateChange(async(e,t)=>{var a;if(e==="PASSWORD_RECOVERY"||window.location.hash.includes("type=recovery")){console.log("[Auth] Password recovery flow active, showing resetPasswordModal"),M(!1),window.om("resetPasswordModal");return}if(e==="SIGNED_IN"&&(t!=null&&t.user)){if((a=document.getElementById("appShell"))!=null&&a.classList.contains("visible"))return;await Nn()}e==="SIGNED_OUT"&&(Be=!1,M(!1))});function En(){const e=document.getElementById("loginEmail"),t=document.getElementById("loginUser");e&&t&&(e.addEventListener("input",n=>{t.value=n.target.value}),t.addEventListener("input",n=>{e.value=n.target.value}))}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",En):En();if(new URLSearchParams(window.location.search).get("new_coach")==="1"){const e=sessionStorage.getItem("ra_new_coach_email"),t=sessionStorage.getItem("ra_new_coach_pass");if(e&&t){sessionStorage.removeItem("ra_new_coach_email"),sessionStorage.removeItem("ra_new_coach_pass");const n=()=>{const a=document.getElementById("loginEmail"),i=document.getElementById("loginPass");a&&i&&(a.value=e,i.value=t,setTimeout(()=>window.doLogin&&window.doLogin(),400))};document.readyState==="loading"?document.addEventListener("DOMContentLoaded",n):n()}}function nt(e){if(!e||e<=0)return"0 sa";const t=Math.floor(e/60),n=e%60;return t>0&&n>0?`${t} sa ${n} dk`:t>0?`${t} sa`:`${n} dk`}window.formatMinToHours=nt;function ie(e){return new Promise(t=>{let n=document.getElementById("customConfirmModal");n||(n=document.createElement("div"),n.id="customConfirmModal",n.className="modal-bg",n.style.zIndex="999999",n.innerHTML=`
        <div class="modal" style="max-width:360px;text-align:center;padding:24px 20px;border-radius:16px;background:var(--surface);border:1px solid var(--border)">
          <div style="font-size:32px;margin-bottom:12px">⚠️</div>
          <div id="confirmMessage" style="font-size:14px;font-weight:700;color:var(--text);margin-bottom:20px;line-height:1.5"></div>
          <div style="display:flex;gap:10px;justify-content:center">
            <button class="btn btn-ghost" id="confirmCancelBtn" style="flex:1;justify-content:center;padding:10px;border-radius:10px">İptal</button>
            <button class="btn btn-accent" id="confirmOkBtn" style="flex:1;justify-content:center;padding:10px;border-radius:10px;background:#ef4444;border-color:#ef4444;color:#fff">Tamam</button>
          </div>
        </div>
      `,document.body.appendChild(n),n.addEventListener("click",r=>{r.target===n&&(n.classList.remove("open"),t(!1))})),n.querySelector("#confirmMessage").textContent=e;const a=n.querySelector("#confirmOkBtn"),i=n.querySelector("#confirmCancelBtn"),o=a.cloneNode(!0),s=i.cloneNode(!0);a.parentNode.replaceChild(o,a),i.parentNode.replaceChild(s,i),n.classList.add("open"),o.focus(),o.onclick=()=>{n.classList.remove("open"),t(!0)},s.onclick=()=>{n.classList.remove("open"),t(!1)}})}window.customConfirm=ie;async function Jt(){const e=b.dbUser;if(e&&!(e.email==="ceylanemin1928@gmail.com"||e.email==="simkoc1@rostrumakademi.com"||window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1"||window.__testMode)){if(b.role==="coach"||b.role==="developer"){if((e.plan||"trial")==="trial"){const n=e.trial_ends_at?new Date(e.trial_ends_at):new Date(new Date(e.created_at).getTime()+12096e5),a=new Date;if(a>n)xt();else{const i=Math.ceil((n-a)/864e5);i<=7&&Yn(i)}}}else if((b.role==="student"||b.role==="parent")&&b.coachId)try{const{data:t}=await y.from("users").select("plan,trial_ends_at,created_at,email").eq("id",b.coachId).maybeSingle();if(t){if(t.email==="ceylanemin1928@gmail.com"||t.email==="simkoc1@rostrumakademi.com")return;if((t.plan||"trial")==="trial"){const a=t.trial_ends_at?new Date(t.trial_ends_at):new Date(new Date(t.created_at).getTime()+12096e5);new Date>a&&xt()}}}catch(t){console.error("Error checking coach subscription:",t)}}}function xt(){let e=document.getElementById("trialExpiredModal");e?e.classList.add("open"):(e=document.createElement("div"),e.id="trialExpiredModal",e.className="modal-bg open",e.style.zIndex="9999999",e.innerHTML=`
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
    `,document.body.appendChild(e))}function Yn(e){if(document.getElementById("trialCountdownBanner"))return;const t=document.createElement("div");t.id="trialCountdownBanner",t.style.cssText="position:fixed;top:0;left:0;right:0;z-index:8000;background:#f59e0b;color:#111;padding:8px 16px;display:flex;align-items:center;justify-content:center;gap:12px;font-size:13px;font-weight:600;",t.innerHTML=`<span>⏰ Ücretsiz denemenizin <strong>${e} günü</strong> kaldı — öğrenci verileriniz korunuyor.</span>
    <button onclick="openSupportChatDirect()" style="background:rgba(0,0,0,.15);border:none;padding:4px 14px;border-radius:6px;font-size:12px;font-weight:700;cursor:pointer;color:#111;white-space:nowrap">Devam Et →</button>
    <button onclick="document.getElementById('trialCountdownBanner').remove()" style="background:none;border:none;cursor:pointer;color:rgba(0,0,0,.4);font-size:18px;padding:0 4px;line-height:1">×</button>`,document.body.prepend(t);const n=document.getElementById("appShell");n&&(n.style.marginTop=t.offsetHeight+"px")}window.openSupportChatDirect=Mt;window.checkCoachSubscription=Jt;window.showTrialExpiredScreen=xt;window.showTrialCountdownBanner=Yn;const Yt=[{id:"home",lbl:"🏠",name:"Ana Sayfa"},{id:"students",lbl:"👤",name:"Öğrencilerim"},{id:"todolist",lbl:"📅",name:"Takvim"},{id:"coach-resources",lbl:"📚",name:"Kaynaklarım"},{id:"coach-applications",lbl:"📩",name:"Başvurular"}],Kn=[{id:"portal",lbl:"🏠",name:"Ana Sayfa"},{id:"sportal",lbl:"📋",name:"Programım"},{id:"sexams",lbl:"📊",name:"Denemeler"},{id:"smessages",lbl:"💬",name:"Koçuma Yaz"},{id:"sprofil",lbl:"🌟",name:"Yolculuğum"}],On=[{id:"dev-dashboard",lbl:"🖥️",name:"Dev Panel"},{id:"dev-tickets",lbl:"🎫",name:"Destek"}],Fn=[{id:"parent-home",lbl:"🏠",name:"Ana Sayfa"},{id:"parent-progress",lbl:"📊",name:"İlerleme"},{id:"parent-messages",lbl:"💬",name:"Koça Yaz"},{id:"parent-ai",lbl:"🤖",name:"AI Asistan"}];function vi(){var e;(e=document.getElementById("mainSidebar"))==null||e.classList.toggle("open")}function fi(){var e;(e=document.getElementById("tnUserMenu"))==null||e.classList.toggle("open")}function Un(){var e;(e=document.getElementById("tnUserMenu"))==null||e.classList.remove("open")}document.addEventListener("click",e=>{const t=document.getElementById("tnUserWrap");t&&!t.contains(e.target)&&Un()});function yi(){var p;Jt();const e=b.role==="coach"?Yt:b.role==="developer"?[...Yt,...On]:b.role==="parent"?Fn:Kn;document.getElementById("sidebarNav").innerHTML=e.map(m=>`
    <div class="tn-nav-item" id="sbi_${m.id}" onclick="switchTab('${m.id}')">
      <span>${m.lbl}</span>
      <span>${m.name}</span>
    </div>`).join(""),document.getElementById("mobileNav").innerHTML=e.slice(0,5).map(m=>`
    <button class="mnav-btn" id="mntab_${m.id}" onclick="switchTab('${m.id}')">${m.lbl}<span style="font-size:9px;display:block">${m.name}</span></button>`).join(""),document.getElementById("mainContent").innerHTML=[...e,{id:"student-detail"},{id:"profile"},{id:"settings"},{id:"coach-resources"},{id:"coach-applications"},{id:"coach-notes"},{id:"coach-profile"},{id:"messages"},{id:"todolist"},{id:"suyelik"},{id:"program"},{id:"appointments"},{id:"exams"}].map(m=>`<div class="view" id="view-${m.id}"></div>`).join("");const t=b.dbUser,n=b.role==="student"?l.students.find(m=>m.id===b.studentId):null,a=(t==null?void 0:t.full_name)||(n==null?void 0:n.name)||"",i=a.split(" ").map(m=>m[0]).join("").slice(0,2).toUpperCase(),o={coach:"#E8613A",student:(n==null?void 0:n.color)||"#4da6ff",developer:"#c084fc",parent:"#3ecf8e"},s={coach:"KOÇ",student:"ÖĞRENCİ",developer:"DEV",parent:"VELİ"};if(document.getElementById("sbAv").textContent=i,document.getElementById("sbAv").style.background=o[b.role]||"#888",document.getElementById("sbName").textContent=a,document.getElementById("sbRole").textContent=s[b.role]||b.role,(b.role==="coach"||b.role==="developer")&&((p=l.workspace)!=null&&p.brand_name)){const m=document.querySelector(".sb-logo-text");m&&(m.textContent=l.workspace.brand_name);const u=document.querySelector(".tn-logo .sb-logo-icon");u&&u.tagName!=="IMG"&&(u.textContent=l.workspace.brand_name.slice(0,1).toUpperCase())}const r=document.getElementById("sb-site-admin");r&&(r.style.display=b.role==="developer"?"flex":"none");const d=document.getElementById("tnCoachProfileItem");d&&(d.style.display=b.role==="coach"||b.role==="developer"?"flex":"none");const c=document.getElementById("tnUyelikItem");c&&(c.style.display=b.role==="coach"||b.role==="developer"?"flex":"none"),setTimeout(At,200),Aa(),setTimeout(ka,600),(b.role==="coach"||b.role==="developer")&&y.from("match_requests").select("id",{count:"exact",head:!0}).eq("matched_coach_id",b.coachId).eq("status","pending").then(({count:m})=>{if(m>0){const u=document.getElementById("sbi_coach-applications");if(u&&!u.querySelector(".sb-badge")){const g=document.createElement("span");g.className="sb-badge",g.textContent=m,u.appendChild(g)}}})}function se(e,t=!0){var p,m,u;if(!e)return;currentTab=e,t&&(window.location.hash=e),document.querySelectorAll(".tn-nav-item").forEach(g=>g.classList.remove("active"));const n=document.getElementById("sbi_"+e)||document.getElementById("sb-"+e);n&&n.classList.add("active"),document.querySelectorAll(".mnav-btn").forEach(g=>g.classList.remove("active"));const a=document.getElementById("mntab_"+e);a&&a.classList.add("active"),document.querySelectorAll(".view").forEach(g=>g.classList.remove("active"));const i=document.getElementById("view-"+e);i&&i.classList.add("active");const s=[...Yt,...Kn,...On,...Fn,{id:"profile",name:"Profil"},{id:"settings",name:"Ayarlar"},{id:"student-detail",name:((p=l.students.find(g=>g.id===l.activeStuId))==null?void 0:p.name)||"Öğrenci"},{id:"program",name:"Program"},{id:"appointments",name:"Randevular"},{id:"exams",name:"Denemeler"}].find(g=>g.id===e),r=document.getElementById("tbarTitle");r&&(r.textContent=(s==null?void 0:s.name)||e);const d={home:Gn,students:dt,messages:fa,"coach-applications":xn,"coach-notes":Ka,todolist:ra,portal:Bt,sportal:ze,sexams:an,smessages:Ot,suyelik:js,sprofil:Ta,profile:Zn,settings:Jn,"student-detail":()=>{l.activeStuId?qn(l.activeStuId):se("students")},program:()=>{l.activeStuId?Xt(l.activeStuId):se("students")},exams:()=>{l.activeStuId?Ze():se("students")},appointments:()=>{l.activeStuId?Ve():se("students")},"dev-dashboard":ba,"dev-users":Je,"dev-resources":ct,"dev-finance":pt,"dev-announce":mt,"dev-tickets":Xe,"parent-home":ja,"parent-progress":Pa,"parent-messages":Ot,"parent-ai":Ra,"coach-profile":Sa,"dev-matches":pn,"coach-resources":ut};try{(m=d[e])==null||m.call(d)}catch(g){console.error("[switchTab] Render error for tab:",e,g),i&&(i.innerHTML=`<div style="padding:24px;color:var(--text)"><b>Hata Oluştu ⚠️</b><p style="color:var(--text-mid);margin-top:6px">${v(g.message)}</p><pre style="font-size:10px;color:var(--text-dim);white-space:pre-wrap;margin-top:8px">${v((g.stack||"").slice(0,400))}</pre></div>`)}e==="messages"||e==="smessages"?sn():rn();const c=document.getElementById("aiChatBubble");c&&(e==="dev-tickets"||e.startsWith("dev-")||e==="messages"||e==="smessages"?(c.style.display="none",(u=document.getElementById("aiChatPanel"))==null||u.classList.remove("open")):(b.role==="student"||b.role==="coach"||b.role==="parent")&&(c.style.display="flex"))}function Gn(){var t,n;const e=document.getElementById("view-home");if(e)try{const a=new Date,i=["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"],o=["Ocak","Şubat","Mart","Nisan","Mayıs","Haziran","Temmuz","Ağustos","Eylül","Ekim","Kasım","Aralık"],s=O(a);let r=0;Object.values(l.messages).forEach(I=>{r+=I.filter(z=>z.from==="student"&&!z.read).length});const d=l.appointments.filter(I=>I.date===s).sort((I,z)=>I.time.localeCompare(z.time)),c=[],p=ne(0,0);(l.students||[]).forEach(I=>{let z=0,E=0;for(let D=0;D<7;D++){const j=O(J(p,D)),P=l.tasks[`${I.id}_${j}`]||[];z+=P.length,E+=P.filter(Y=>Y.done).length}const A=z>0?Math.round(E/z*100):0;z>0&&A<30&&c.push({studentId:I.id,studentName:I.name,color:I.color,type:"tasks",icon:"📋",title:"Düşük Görev",desc:`Bu haftaki görev tamamlama oranı <b>%${A}</b>'de kaldı (${E}/${z} görev tamamlandı).`});const C=(l.exams||[]).filter(D=>D.studentId===I.id).sort((D,j)=>new Date(j.date).getTime()-new Date(D.date).getTime()),L={};if(C.forEach(D=>{L[D.type]||(L[D.type]=[]),L[D.type].push(D)}),Object.entries(L).forEach(([D,j])=>{if(j.length>=2){const P=j[0],Y=j[1],H=Object.values(P.nets||{}).reduce((Z,te)=>Z+Number(te||0),0),F=Object.values(Y.nets||{}).reduce((Z,te)=>Z+Number(te||0),0),V=H-F;V<-5&&c.push({studentId:I.id,studentName:I.name,color:I.color,type:"exams",icon:"📉",title:`Net Düşüşü (${D})`,desc:`Son denemede <b>${H} net</b> yaptı. Önceki denemesine (${F} net) göre <b>${Math.abs(V).toFixed(1)} net düşüş</b>.`})}}),z===0&&c.push({studentId:I.id,studentName:I.name,color:I.color,type:"noplan",icon:"📭",title:"Program Yok",desc:"Bu hafta için henüz hiç görev eklenmemiş."}),z>0&&E===0){let D=!1;for(let j=0;j<3;j++){const P=O(J(a,-j));if((l.tasks[`${I.id}_${P}`]||[]).length>0){D=!0;break}}D&&c.push({studentId:I.id,studentName:I.name,color:I.color,type:"inactive",icon:"💤",title:"3 Gündür Pasif",desc:"Son 3 gündür hiçbir görev tamamlanmadı. İletişime geç!"})}z>0&&E===z&&c.push({studentId:I.id,studentName:I.name,color:I.color,type:"perfect",icon:"🏆",title:"Harika Hafta!",desc:`Bu haftaki tüm ${z} görevi tamamladı! Tebrik et.`}),(l.studentSpeeds||[]).filter(D=>D.student_id===I.id).forEach(D=>{let j=120;D.exam_type==="TYT"?["Türkçe","Sosyal"].includes(D.subject)?j=100:["Matematik","Fen"].includes(D.subject)&&(j=130):D.exam_type&&D.exam_type.startsWith("AYT")&&(j=180),D.secs_per_question>j&&c.push({studentId:I.id,studentName:I.name,color:I.color,type:"speed",icon:"⚡",title:`Hız Aşımı (${D.exam_type} - ${D.subject})`,desc:`Soru çözüm hızı <b>${D.secs_per_question} sn/soru</b> (Limit: ${j} sn).`})})});let m="";if(c.length===0)l.students.length===0?m=`
        <div style="text-align:center;padding:24px 16px">
          <div style="font-size:36px;margin-bottom:12px">👋</div>
          <div style="font-size:14px;font-weight:700;color:var(--text);margin-bottom:6px">İlk öğrencinizi ekleyin</div>
          <div style="font-size:12px;color:var(--text-mid);margin-bottom:16px;line-height:1.6">Öğrencilerim sekmesinden öğrenci ekleyerek uygulamayı kullanmaya başlayabilirsiniz.</div>
          <button class="btn btn-accent" onclick="switchTab('students')" style="font-size:13px;padding:9px 20px">Öğrenci Ekle →</button>
        </div>`:m=`
        <div style="text-align:center;padding:16px;color:var(--text-dim);font-size:13px">
          ✅ Harika! Şu an için kritik bir performans düşüşü veya uyarı bulunmuyor.
        </div>`;else{const I={perfect:{badge:"#3ecf8e",badgeBg:"rgba(62,207,142,.12)",border:"rgba(62,207,142,.25)"},noplan:{badge:"#f0a500",badgeBg:"rgba(240,165,0,.1)",border:"rgba(240,165,0,.2)"},inactive:{badge:"#ff5c7a",badgeBg:"rgba(255,92,122,.08)",border:"rgba(255,92,122,.2)"},tasks:{badge:"#ff5c7a",badgeBg:"rgba(255,92,122,.08)",border:"rgba(255,92,122,.2)"},exams:{badge:"#ff5c7a",badgeBg:"rgba(255,92,122,.08)",border:"rgba(255,92,122,.2)"},speed:{badge:"#f0a500",badgeBg:"rgba(240,165,0,.1)",border:"rgba(240,165,0,.2)"}},z={noplan:{label:"📅 Program Yap",fn:"openStudentProgram"},tasks:{label:"📋 Programı Aç",fn:"openStudentProgram"},inactive:{label:"📋 Programı Aç",fn:"openStudentProgram"},exams:{label:"➕ Deneme Ekle",fn:"openStudentExams"},speed:{label:"⏱ Hızı Düzenle",fn:"openStudentModal"}};m=c.map(E=>{const A=I[E.type]||I.tasks,C=z[E.type],L=C?`<button onclick="event.stopPropagation();${C.fn}('${E.studentId}')" style="flex-shrink:0;font-size:10.5px;font-weight:700;padding:5px 10px;border-radius:7px;border:1px solid ${A.border};background:var(--surface);color:${A.badge};cursor:pointer;font-family:inherit;white-space:nowrap;transition:filter .15s" onmouseover="this.style.filter='brightness(.95)'" onmouseout="this.style.filter='none'">${C.label}</button>`:"";return`<div style="cursor:pointer;padding:10px 12px;margin-bottom:8px;border-radius:8px;background:${A.badgeBg};border:1px solid ${A.border};display:flex;align-items:center;gap:10px;transition:opacity .15s" onclick="openStudentDetail('${E.studentId}')" onmouseover="this.style.opacity='.85'" onmouseout="this.style.opacity='1'">
        <div style="font-size:18px;width:32px;height:32px;border-radius:8px;background:rgba(255,255,255,.06);display:flex;align-items:center;justify-content:center;flex-shrink:0">${E.icon}</div>
        <div style="flex:1;min-width:0">
          <div style="display:flex;justify-content:space-between;align-items:center;gap:8px;margin-bottom:2px">
            <span style="font-size:13px;font-weight:700">${v(E.studentName)}</span>
            <span style="font-size:10px;font-weight:700;color:${A.badge};white-space:nowrap">${E.title}</span>
          </div>
          <div style="font-size:11px;color:var(--text-mid);line-height:1.4">${E.desc}</div>
        </div>
        ${L}
      </div>`}).join("")}const u=a.getHours(),g=u<6?"İyi geceler":u<12?"Günaydın":u<18?"İyi günler":"İyi akşamlar",_=`${String(u).padStart(2,"0")}:${String(a.getMinutes()).padStart(2,"0")}`,T=d.find(I=>I.time>=_),f=qt(),$=f.days,w=ne(0,0);let B=0,h=0;l.students.forEach(I=>{for(let z=0;z<7;z++){const E=l.tasks[`${I.id}_${O(J(w,z))}`]||[];B+=E.length,h+=E.filter(A=>A.done).length}});const S=B>0?Math.round(h/B*100):0;e.innerHTML=`
    <!-- HERO -->
    <div class="home-hero">
      <div class="home-hero-left">
        <div class="home-hero-greeting">${g},</div>
        <div class="home-hero-name">${v(((n=(t=b.dbUser)==null?void 0:t.full_name)==null?void 0:n.split(" ")[0])||"Koç")} 👋</div>
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
          <span class="hsv2-icon-wrap ${r>0?"hsv2-red":"hsv2-green"}">💬</span>
          ${r>0?`<span class="hsv2-badge-red">${r} yeni</span>`:'<span class="hsv2-badge-green">Temiz</span>'}
        </div>
        <div class="hsv2-val" style="color:${r>0?"var(--red)":"var(--green)"}">${r}</div>
        <div class="hsv2-lbl">Okunmamış Mesaj</div>
        <div class="hsv2-sub">${r>0?"Yanıt bekliyor":"Tüm mesajlar okundu"}</div>
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
          ${d.map(I=>{const z=l.students.find(F=>F.id===I.studentId),E=I.time<_,[A,C]=I.time.split(":").map(Number),L=A*60+C,[k,D]=_.split(":").map(Number),j=k*60+D,P=L-j,Y=P>=-(I.duration||60)&&P<=15,H=Y&&I.meet_link?`<a href="${v(I.meet_link)}" target="_blank" style="display:inline-flex;align-items:center;gap:5px;padding:5px 12px;border-radius:8px;background:${P<=0?"var(--red)":"var(--accent)"};color:#fff;font-size:11px;font-weight:800;text-decoration:none;animation:${P<=0?"pulse 1.5s infinite":"none"};white-space:nowrap;flex-shrink:0">${P<=0?"🔴 Ders Sürüyor":"🟡 Derse Gir"}</a>`:"";return`<div class="hsc-appt-row ${E&&!Y?"hsc-appt-past":""}">
              <div class="hsc-appt-time">${I.time}</div>
              <div class="hsc-appt-bar" style="background:${(z==null?void 0:z.color)||"var(--accent)"}"></div>
              <div style="flex:1;min-width:0">
                <div class="hsc-appt-name">${v((z==null?void 0:z.name)||"?")}</div>
                <div class="hsc-appt-meta">${v(I.type)} · ${I.duration} dk${!Y&&I.meet_link?` · <a href="${v(I.meet_link)}" target="_blank" style="color:var(--blue);text-decoration:none">${I.meet_link.includes("zoom")?"Zoom":"Meet"} →</a>`:""}</div>
              </div>
              ${H||(E?'<span class="hsc-appt-done">✓</span>':"")}
            </div>`}).join("")}
        </div>
      </div>
    </div>

    <!-- HIZLI ERİŞİM -->
    <div style="display:flex;gap:8px;max-width:900px;margin:0 auto 4px;justify-content:center">
      ${[{tab:"messages",icon:"💬",label:"Mesajlar",sub:r>0?r+" okunmamış":"Temiz"},{tab:"coach-notes",icon:"📝",label:"Notlarım",sub:"Kişisel notlar"},{tab:"todolist",icon:"📅",label:"Ajanda",sub:"Tüm randevular"},{tab:"coach-applications",icon:"📩",label:"Başvurular",sub:"Eşleşme talepleri"}].map(({tab:I,icon:z,label:E,sub:A})=>`
        <div onclick="switchTab('${I}')" style="background:var(--surface);border:1px solid var(--border);border-radius:10px;padding:9px 16px;cursor:pointer;display:flex;align-items:center;gap:8px;white-space:nowrap;transition:border-color .15s;flex:1;justify-content:center" onmouseover="this.style.borderColor='var(--accent)'" onmouseout="this.style.borderColor='var(--border)'">
          <span style="font-size:16px">${z}</span>
          <div><div style="font-size:12px;font-weight:700">${E}</div><div style="font-size:10px;color:var(--text-dim)">${A}</div></div>
        </div>`).join("")}
    </div>`}catch(a){console.error("[renderHome] HATA:",a),e.innerHTML=`<div style='padding:24px;color:var(--text)'><b>İyi günler 👋</b><p style='color:var(--text-mid);margin-top:6px'>Hata: ${v(a.message)}</p></div>`}}function dt(){const e=document.getElementById("view-students"),t=ne(0,0),n={};l.students.forEach(s=>{let r=0,d=0,c=0,p=0;for(let m=0;m<7;m++)(l.tasks[`${s.id}_${O(J(t,m))}`]||[]).forEach(g=>{r++,c+=Number(g.duration||0),g.done&&(d++,p+=Number(g.duration||0))});n[s.id]={total:r,done:d,totalMin:c,doneMin:p}});const a=l.students.length,i=l.students.filter(s=>{const r=n[s.id];return r&&r.total>0}).length,o=l.students.filter(s=>{const r=n[s.id];return r&&r.total>0&&r.done===r.total}).length;e.innerHTML=`<div style="max-width:640px;margin:0 auto">
    <!-- Üst başlık -->
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:24px">
      <div>
        <div style="font-size:22px;font-weight:800;letter-spacing:-.3px">Öğrencilerim</div>
        <div style="font-size:12px;color:var(--text-dim);margin-top:3px">${a} öğrenci · ${i} bu hafta aktif · ${o} hafta tamamladı</div>
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
      ${l.students.length===0?`
        <div style="text-align:center;padding:64px 20px;color:var(--text-dim)">
          <div style="width:56px;height:56px;border-radius:16px;background:var(--surface2);display:flex;align-items:center;justify-content:center;font-size:24px;margin:0 auto 16px">👤</div>
          <div style="font-size:14px;font-weight:600;color:var(--text);margin-bottom:6px">Henüz öğrenciniz yok</div>
          <div style="font-size:12px;margin-bottom:16px">Öğrencilerinize e-posta ile davet gönderin, kendi hesaplarını açıp doğrudan başlasınlar.</div>
          <button class="btn btn-accent btn-sm" onclick="openStudentModal()">📩 Öğrenci Davet Et</button>
        </div>
      `:l.students.map(s=>{const r=n[s.id]||{total:0,done:0},d=r.total>0?Math.round(r.done/r.total*100):0,c=d>=80?"var(--green)":d>=40?"var(--accent)":"var(--red)",p=r.total>0&&r.done===r.total,m=l.exams.filter(g=>g.studentId===s.id).sort((g,_)=>_.date.localeCompare(g.date))[0],u=m?Object.values(m.nets||{}).reduce((g,_)=>g+_,0).toFixed(1):null;return`<div class="stu-row" id="sturow_${s.id}" onclick="openStudentDetail('${s.id}')" style="padding:12px 16px;align-items:center;gap:12px;border-radius:10px">
          <div style="width:38px;height:38px;border-radius:10px;background:${s.color};display:flex;align-items:center;justify-content:center;font-size:15px;font-weight:800;color:#fff;flex-shrink:0">${s.name[0]}</div>
          <div style="flex:1;min-width:0">
            <div style="font-size:13px;font-weight:700;color:var(--text)">${v(s.name)}</div>
            <div style="font-size:11px;color:var(--text-dim);margin-top:1px">${v(s.target||"Hedef belirtilmemiş")}</div>
          </div>
          <div style="display:flex;align-items:center;gap:8px;flex-shrink:0;font-size:11px;color:var(--text-mid)">
            <span style="font-weight:700;color:${c}">%${d}</span>
            <span style="color:var(--border2)">·</span>
            <span>${r.done}/${r.total} görev</span>
            ${u?`<span style="color:var(--border2)">·</span><span><b style="color:var(--text)">${u}</b> net</span>`:""}
            ${p?'<span style="color:var(--border2)">·</span><span style="color:var(--green);font-weight:600">✓ Tamam</span>':""}
          </div>
          <svg style="width:13px;height:13px;color:var(--border2);flex-shrink:0" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path d="m9 18 6-6-6-6"/></svg>
        </div>`}).join("")}
    </div>
    <div id="stuSearchNoResults" style="display:none;text-align:center;padding:48px 20px;color:var(--text-dim)">
      <div style="font-size:13px">Aramanızla eşleşen öğrenci bulunamadı.</div>
    </div>
  </div>`}function xi(){const e=document.getElementById("stuSearchInput").value.trim().toLowerCase(),t=document.getElementById("stuSearchNoResults");let n=0;l.students.forEach(a=>{const i=document.getElementById("sturow_"+a.id);if(i){const o=a.name.toLowerCase().includes(e);i.style.display=o?"flex":"none",o&&n++}}),t&&(t.style.display=e&&n===0?"block":"none")}function qn(e){if(!l.students.find(p=>p.id===e))return;l.activeStuId=e;const t=l.students.find(p=>p.id===l.activeStuId),n=ne(0,t.weekStart||0);let a=0,i=0,o=0;for(let p=0;p<7;p++){const m=l.tasks[`${t.id}_${O(J(n,p))}`]||[];a+=m.length,i+=m.filter(u=>u.done).length,o+=m.reduce((u,g)=>u+Number(g.duration||0),0)}const s=a>0?Math.round(i/a*100):0,r=s>=80?"var(--green)":s>=50?"var(--accent)":"var(--red)",d=document.getElementById("view-student-detail");d.innerHTML=`
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
      ${[{label:"Program",icon:"📋",fn:`openStudentProgram('${t.id}')`},{label:"Denemeler",icon:"📊",fn:`openStudentExams('${t.id}')`},{label:"Randevular",icon:"📅",fn:`openStudentAppointments('${t.id}')`},{label:"Notlar",icon:"📝",fn:`openStudentNotes('${t.id}')`},{label:"Kaynaklar",icon:"📖",fn:`openStudentKaynaklar('${t.id}')`},{label:"Konu Haritası",icon:"🗺️",fn:`openKonuHaritasi('${t.id}')`},{label:"Hız",icon:"⚡",fn:`openSpeedModal('${t.id}')`},{label:"Rapor",icon:"📄",fn:`openReportModal('${t.id}')`},{label:"Geçmiş Raporlar",icon:"🗂️",fn:`openPastReports('${t.id}')`}].map(p=>`<button onclick="${p.fn}" style="display:flex;align-items:center;gap:6px;padding:14px 18px;background:none;border:none;border-bottom:2px solid transparent;font-size:13px;font-weight:600;color:var(--text-mid);cursor:pointer;white-space:nowrap;font-family:inherit;transition:all .15s" onmouseover="this.style.color='var(--text)';this.style.borderBottomColor='var(--border2)'" onmouseout="this.style.color='var(--text-mid)';this.style.borderBottomColor='transparent'">${p.icon} ${p.label}</button>`).join("")}
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
    </div>`,currentTab!=="student-detail"&&se("student-detail");const c=document.getElementById("tbarTitle");c&&(c.textContent=t.name)}const Ke=[{stars:0,label:"Başlanmadı",color:"#6b7280",bg:"rgba(107,114,128,.08)",border:"rgba(107,114,128,.2)"},{stars:1,label:"Anlamadım",color:"#ef4444",bg:"rgba(239,68,68,.08)",border:"rgba(239,68,68,.2)"},{stars:2,label:"Temel Zorluk",color:"#f97316",bg:"rgba(249,115,22,.08)",border:"rgba(249,115,22,.2)"},{stars:3,label:"Temel OK",color:"#eab308",bg:"rgba(234,179,8,.08)",border:"rgba(234,179,8,.2)"},{stars:4,label:"Orta Seviye",color:"#84cc16",bg:"rgba(132,204,22,.08)",border:"rgba(132,204,22,.2)"},{stars:5,label:"İleri Seviye",color:"#22c55e",bg:"rgba(34,197,94,.08)",border:"rgba(34,197,94,.2)"},{stars:6,label:"Uzman",color:"#10b981",bg:"rgba(16,185,129,.08)",border:"rgba(16,185,129,.2)"},{stars:7,label:"Tekrar Dışı (TD)",color:"#3b82f6",bg:"rgba(59,130,246,.1)",border:"rgba(59,130,246,.3)"}];function Wn(e){const t=new Date(e),n=t.getDate(),a=n<=10?1:n<=20?11:21;return`${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,"0")}-${String(a).padStart(2,"0")}`}function bi(e=6){const t=[],n=new Date;let a=new Date(n);for(let i=0;i<e;i++){const o=Wn(a);t.find(c=>c.start===o)||t.unshift({start:o,label:hi(o)});const[s,r,d]=o.split("-").map(Number);if(d===21?a=new Date(s,r-1,11):d===11?a=new Date(s,r-1,1):a=new Date(s,r-2,21),t.length>=e)break}return t.slice(-e)}function hi(e){const[t,n,a]=e.split("-").map(Number),i=["Oca","Şub","Mar","Nis","May","Haz","Tem","Ağu","Eyl","Eki","Kas","Ara"],o=a===1?10:a===11?20:new Date(t,n,0).getDate();return`${a}-${o} ${i[n-1]}`}const _n={SAY:["Dil Bilgisi","TYT Matematik","AYT Matematik","Geometri","TYT Fizik","AYT Fizik","TYT Kimya","AYT Kimya","TYT Biyoloji","AYT Biyoloji"],EA:["Dil Bilgisi","TYT Matematik","AYT Matematik","Geometri","AYT Edebiyat","Tarih (TYT-AYT)","Coğrafya (TYT-AYT)","Felsefe Grubu & Din"],SOZ:["Dil Bilgisi","TYT Matematik","Geometri","AYT Edebiyat","Tarih (TYT-AYT)","Coğrafya (TYT-AYT)","Felsefe Grubu & Din"],DIL:["Dil Bilgisi","TYT Matematik","Geometri","YDT İngilizce"]};async function ki(e){const t=l.students.find(f=>f.id===e);if(!t)return;const n=document.getElementById("view-student-detail");n.innerHTML=`<button class="back-link" onclick="openStudentDetail('${e}')">← ${v(t.name)}</button><div style="padding:20px;color:var(--text-dim);font-size:13px">Yükleniyor…</div>`;const a=b.role==="coach"||b.role==="developer",i=t.yksArea||"SAY",o=_n[i]||_n.SAY;let s=o[0],r="mastery";function d(f,$){var w,B;return((B=(w=l.konuMastery[e])==null?void 0:w[f])==null?void 0:B[$])||null}function c(f,$){var w,B;return((B=(w=l.konuTekrarLog[e])==null?void 0:w[f])==null?void 0:B[$])||{}}async function p(f,$,w,B){const h=d(f,$),S=new Date().toISOString(),I=B||(w>=7?"td":w>0?"active":"not_started"),z={student_id:e,coach_id:b.coachId,subject:f,konu:$,stars:w,status:I,updated_at:S,...I==="active"&&!(h!=null&&h.ka_date)?{ka_date:S}:{},...I==="td"&&!(h!=null&&h.td_date)?{td_date:S}:{},...I==="active"&&(h==null?void 0:h.status)==="td"?{td_date:null}:{}},{data:E,error:A}=await y.from("konu_mastery").upsert(z,{onConflict:"student_id,subject,konu"}).select().single();if(A){x("Hata: "+A.message);return}return l.konuMastery[e]||(l.konuMastery[e]={}),l.konuMastery[e][f]||(l.konuMastery[e][f]={}),l.konuMastery[e][f][$]=E,E}async function m(f,$,w,B){const h=new Date().toISOString(),S={student_id:e,coach_id:b.coachId,subject:f,konu:$,period_start:w,review_count:B,updated_at:h},{data:I,error:z}=await y.from("konu_tekrar_log").upsert(S,{onConflict:"student_id,subject,konu,period_start"}).select().single();if(z){x("Hata: "+z.message);return}return l.konuTekrarLog[e]||(l.konuTekrarLog[e]={}),l.konuTekrarLog[e][f]||(l.konuTekrarLog[e][f]={}),l.konuTekrarLog[e][f][$]||(l.konuTekrarLog[e][f][$]={}),l.konuTekrarLog[e][f][$][w]=I,I}function u(f){const $=at[f]||[],w=$.map((E,A)=>{const C=d(f,E),L=(C==null?void 0:C.stars)||0,k=(C==null?void 0:C.status)||"not_started",D=Ke[L],j=k==="td",P=A%2===0?"var(--surface)":"var(--surface2)",Y=c(f,E),H=Object.values(Y).reduce((Q,R)=>Q+(R.review_count||0),0),F=C!=null&&C.last_review_date?new Date(C.last_review_date).toLocaleDateString("tr-TR",{day:"2-digit",month:"short"}):"—",V=a?Array.from({length:7},(Q,R)=>{const N=R+1,K=N<=L,re=f.replace(/'/g,"\\'"),xe=E.replace(/'/g,"\\'");return`<span class="km-star${K?" km-star-on":""}" data-stars="${N}" 
          onclick="window._kmSetStars('${re}','${xe}',${N})"
          title="${Ke[N].label}"
          style="cursor:pointer;font-size:16px;line-height:1;transition:transform .1s;display:inline-block"
          onmouseover="this.style.transform='scale(1.25)'" onmouseout="this.style.transform='scale(1)'"
        >${K?"⭐":"☆"}</span>`}).join(""):Array.from({length:7},(Q,R)=>`<span style="font-size:14px;opacity:${R<L?1:.25}">${R<L?"⭐":"☆"}</span>`).join("");let Z="";return j?Z='<span style="font-size:9px;font-weight:800;color:#3b82f6;background:rgba(59,130,246,.12);border:1px solid rgba(59,130,246,.3);border-radius:4px;padding:1px 5px;margin-left:4px">TD</span>':C!=null&&C.ka_date&&(Z='<span style="font-size:9px;font-weight:700;color:#10b981;background:rgba(16,185,129,.1);border:1px solid rgba(16,185,129,.2);border-radius:4px;padding:1px 5px;margin-left:4px">KA✓</span>'),`<tr id="${"km_"+btoa(encodeURIComponent(f+"|"+E)).replace(/[^a-zA-Z0-9]/g,"")}" style="background:${D.bg};border-bottom:1px solid ${D.border};transition:background .3s">
        <td style="padding:10px 14px;font-size:12px;font-weight:600;color:var(--text);min-width:200px;position:sticky;left:0;z-index:1;background:${P};border-right:1px solid var(--border)">
          ${v(E)}${Z}
        </td>
        <td style="padding:8px 12px;white-space:nowrap">
          ${V}
        </td>
        <td style="padding:8px 10px;font-size:11px;font-weight:700;color:${D.color};white-space:nowrap">
          ${L>0?D.label:'<span style="color:var(--text-dim)">—</span>'}
        </td>
        <td style="padding:8px 10px;text-align:center;font-size:11px;color:var(--text-mid);white-space:nowrap">
          ${H>0?`<b style="color:var(--text)">${H}×</b>`:"—"}
        </td>
        <td style="padding:8px 10px;text-align:center;font-size:11px;color:var(--text-dim);white-space:nowrap">${F}</td>
        ${a?`<td style="padding:8px 8px;text-align:center;white-space:nowrap">
          <button onclick="window._kmToggleKA('${f.replace(/'/g,"\\'")}','${E.replace(/'/g,"\\'")}')" 
            style="font-size:10px;padding:3px 7px;border-radius:5px;border:1px solid var(--border);background:var(--surface2);color:var(--text-mid);cursor:pointer;margin-right:4px" 
            title="Konu Anlatımı tamamlandı">KA</button>
          <button onclick="window._kmToggleTD('${f.replace(/'/g,"\\'")}','${E.replace(/'/g,"\\'")}')" 
            style="font-size:10px;padding:3px 7px;border-radius:5px;border:1px solid ${j?"#3b82f6":"var(--border)"};background:${j?"rgba(59,130,246,.15)":"var(--surface2)"};color:${j?"#3b82f6":"var(--text-mid)"};cursor:pointer;font-weight:${j?"800":"400"}" 
            title="Tekrar Dışı">TD</button>
        </td>`:""}
      </tr>`}).join(""),B=$.map(E=>d(f,E)),h=Array(8).fill(0);B.forEach(E=>h[(E==null?void 0:E.stars)||0]++);const S=B.filter(E=>(E==null?void 0:E.status)==="td").length,I=B.filter(E=>(E==null?void 0:E.status)==="active").length;return`<div style="display:flex;gap:12px;flex-wrap:wrap;padding:12px 16px;background:var(--surface2);border-bottom:1px solid var(--border);align-items:center">
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
    </div>`}function g(f){const $=at[f]||[],w=bi(6),B=Wn(new Date),h=`<tr style="background:var(--surface2)">
      <th style="padding:8px 14px;text-align:left;font-size:10px;font-weight:800;color:var(--text-dim);border-right:1px solid var(--border);position:sticky;left:0;z-index:2;background:var(--surface2);white-space:nowrap;min-width:200px">KONU</th>
      <th style="padding:8px 8px;text-align:left;font-size:10px;font-weight:800;color:var(--text-dim);white-space:nowrap;min-width:60px">⭐</th>
      ${w.map(I=>`<th style="padding:8px 10px;text-align:center;font-size:10px;font-weight:800;color:${I.start===B?"var(--accent)":"var(--text-dim)"};background:${I.start===B?"var(--accent-dim)":"var(--surface2)"};white-space:nowrap;min-width:100px;border-left:1px solid var(--border)">${I.label}</th>`).join("")}
      <th style="padding:8px 10px;text-align:center;font-size:10px;font-weight:800;color:var(--text-dim);white-space:nowrap;border-left:2px solid var(--border)">TOPLAM</th>
    </tr>`,S=$.map((I,z)=>{const E=d(f,I),A=(E==null?void 0:E.stars)||0,L=((E==null?void 0:E.status)||"not_started")==="td",k=Ke[A],D=z%2===0?"var(--surface)":"var(--surface2)",j=c(f,I);let P=0;const Y=w.map(F=>{const V=j[F.start],Z=(V==null?void 0:V.review_count)||0;P+=Z;const te=F.start===B;if(a){const Q=Array.from({length:6},(R,N)=>{const K=N<Z,re=f.replace(/'/g,"\\'"),xe=I.replace(/'/g,"\\'");return`<span class="kt-box${K?" kt-box-on":""}"
              onclick="window._ktToggleBox('${re}','${xe}','${F.start}',${N+1})"
              style="display:inline-block;width:14px;height:14px;border-radius:3px;border:1.5px solid ${K?k.color:"var(--border2)"};background:${K?k.bg:"transparent"};cursor:pointer;transition:all .15s;margin:1px"
              title="${N+1}. tekrar"
            ></span>`}).join("");return`<td style="padding:6px 10px;border-left:1px solid var(--border);background:${te?"var(--accent-dim)":D};text-align:center">${Q}</td>`}else{const Q=Array.from({length:6},(R,N)=>{const K=N<Z;return`<span style="display:inline-block;width:12px;height:12px;border-radius:3px;border:1.5px solid ${K?k.color:"var(--border2)"};background:${K?k.bg:"transparent"};margin:1px"></span>`}).join("");return`<td style="padding:6px 10px;border-left:1px solid var(--border);background:${te?"var(--accent-dim)":D};text-align:center">${Q}</td>`}}).join(""),H=L?'<span style="font-size:9px;font-weight:800;color:#3b82f6;background:rgba(59,130,246,.12);border:1px solid rgba(59,130,246,.3);border-radius:4px;padding:1px 5px;margin-left:4px">TD</span>':"";return`<tr style="background:${D}">
        <td style="padding:8px 14px;font-size:12px;font-weight:600;color:var(--text);border-right:1px solid var(--border);position:sticky;left:0;z-index:1;background:${D};white-space:nowrap">
          ${v(I)}${H}
        </td>
        <td style="padding:8px 8px;white-space:nowrap">
          <span style="font-size:11px">${"⭐".repeat(Math.max(0,A))}</span>
        </td>
        ${Y}
        <td style="padding:8px 10px;text-align:center;font-size:12px;font-weight:800;color:${P>0?k.color:"var(--text-dim)"};border-left:2px solid var(--border)">${P||0}</td>
      </tr>`}).join("");return`<div style="overflow-x:auto"><table style="border-collapse:collapse;width:max-content;min-width:100%"><thead>${h}</thead><tbody>${S}</tbody></table></div>`}window._kmSetStars=async function(f,$,w){const B=d(f,$),h=(B==null?void 0:B.status)==="td"&&w<7?"active":null;await p(f,$,w,h);const S="km_"+btoa(encodeURIComponent(f+"|"+$)).replace(/[^a-zA-Z0-9]/g,"");if(document.getElementById(S)){const z=u(f);document.getElementById("khTable").innerHTML=z}x(`${$}: ${Ke[w].label} ✓`)},window._kmToggleKA=async function(f,$){const w=d(f,$),B=new Date().toISOString(),h=!!(w!=null&&w.ka_date),S={student_id:e,coach_id:b.coachId,subject:f,konu:$,stars:(w==null?void 0:w.stars)||1,status:(w==null?void 0:w.status)||"active",ka_date:h?null:B,updated_at:B},{data:I,error:z}=await y.from("konu_mastery").upsert(S,{onConflict:"student_id,subject,konu"}).select().single();if(z){x("Hata: "+z.message);return}l.konuMastery[e]||(l.konuMastery[e]={}),l.konuMastery[e][f]||(l.konuMastery[e][f]={}),l.konuMastery[e][f][$]=I,document.getElementById("khTable").innerHTML=u(f),x(h?"KA tarihi kaldırıldı":"KA ✓ tamamlandı olarak işaretlendi")},window._kmToggleTD=async function(f,$){const w=d(f,$),B=(w==null?void 0:w.status)==="td",h=B?(w==null?void 0:w.stars)>=7?5:w==null?void 0:w.stars:7;await p(f,$,h,B?"active":"td"),document.getElementById("khTable").innerHTML=r==="mastery"?u(f):g(f),x(B?`${$} tekrar listesine geri döndü`:`${$} → TD ✓`)},window._ktToggleBox=async function(f,$,w,B){const S=c(f,$)[w],z=((S==null?void 0:S.review_count)||0)>=B?B-1:B;if(await m(f,$,w,z),z>0){const E=d(f,$),A=new Date().toISOString(),C={student_id:e,coach_id:b.coachId,subject:f,konu:$,stars:(E==null?void 0:E.stars)||0,status:(E==null?void 0:E.status)||"active",last_review_date:A,review_count:((E==null?void 0:E.review_count)||0)+1,updated_at:A},{data:L}=await y.from("konu_mastery").upsert(C,{onConflict:"student_id,subject,konu"}).select().single();L&&(l.konuMastery[e]||(l.konuMastery[e]={}),l.konuMastery[e][f]||(l.konuMastery[e][f]={}),l.konuMastery[e][f][$]=L)}document.getElementById("khTable").innerHTML=g(f)};function _(){const f=window._khActiveSub||s;document.getElementById("khTable").innerHTML=r==="mastery"?u(f):g(f)}const T=o.map(f=>`<button class="kh-tab" onclick="window._khActiveSub='${f}';document.querySelectorAll('.kh-tab').forEach(b=>{b.style.color='var(--text-mid)';b.style.borderBottom='2px solid transparent';b.style.fontWeight='600'});this.style.color='var(--accent)';this.style.borderBottom='2px solid var(--accent)';this.style.fontWeight='700';window._khRefresh()"
      style="padding:10px 16px;border:none;border-bottom:2px solid ${f===s?"var(--accent)":"transparent"};background:none;font-size:12px;font-weight:${f===s?"700":"600"};color:${f===s?"var(--accent)":"var(--text-mid)"};cursor:pointer;white-space:nowrap;font-family:inherit;transition:all .15s">${f}</button>`).join("");window._khActiveSub=s,window._khRefresh=_,n.innerHTML=`
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
        ${Ke.slice(1).map(f=>`
          <div style="display:flex;align-items:center;gap:6px;font-size:11px">
            <span style="font-weight:800;color:${f.color}">⭐${f.stars}</span>
            <span style="color:var(--text-mid)">${f.label}</span>
          </div>`).join('<span style="color:var(--border2)">·</span>')}
      </div>
    </details>

    <div style="background:var(--surface);border:1px solid var(--border);border-radius:12px;overflow:hidden;box-shadow:var(--shadow)">
      <div style="display:flex;border-bottom:1px solid var(--border);overflow-x:auto;padding:0 4px">${T}</div>
      <div id="khTable" style="overflow-x:auto;max-height:calc(100vh - 310px);overflow-y:auto">${u(s)}</div>
    </div>`,window._kmSwitchView=function(f){r=f;const $=document.getElementById("kmViewMastery"),w=document.getElementById("kmViewTekrar");f==="mastery"?($.style.background="var(--accent)",$.style.color="#fff",$.style.fontWeight="700",w.style.background="var(--surface)",w.style.color="var(--text-mid)",w.style.fontWeight="600"):(w.style.background="var(--accent)",w.style.color="#fff",w.style.fontWeight="700",$.style.background="var(--surface)",$.style.color="var(--text-mid)",$.style.fontWeight="600"),window._khRefresh()}}function Xt(e){var i,o;l.activeStuId=e;const t=document.getElementById("view-program"),n=((i=l.students.find(s=>s.id===l.activeStuId))==null?void 0:i.name)||"";t.innerHTML=`<button class="back-link" onclick="switchTab('student-detail')">← ${n}</button>`,t.innerHTML+=document.createElement("div").innerHTML,currentTab!=="program"&&se("program");const a=document.getElementById("tbarTitle");a&&(a.textContent=(((o=l.students.find(s=>s.id===l.activeStuId))==null?void 0:o.name)||"")+" · Program"),X()}function wi(e){var n;l.activeStuId=e,currentTab!=="exams"&&se("exams");const t=document.getElementById("tbarTitle");t&&(t.textContent=(((n=l.students.find(a=>a.id===l.activeStuId))==null?void 0:n.name)||"")+" · Denemeler"),Ze()}function $i(e){var n;l.activeStuId=e,currentTab!=="appointments"&&se("appointments");const t=document.getElementById("tbarTitle");t&&(t.textContent=(((n=l.students.find(a=>a.id===l.activeStuId))==null?void 0:n.name)||"")+" · Randevular"),Ve()}let ye={};async function Ei(e){const t=l.students.find(a=>a.id===e);if(!t)return;l.activeStuId=e,currentTab!=="student-detail"&&se("student-detail");const n=document.getElementById("view-student-detail");if(n.innerHTML=`<button class="back-link" onclick="openStudentDetail('${e}')">← ${v(t.name)}</button>
    <div style="padding:20px;color:var(--text-dim);font-size:13px">Yükleniyor…</div>`,!ye[e]){const{data:a}=await y.from("student_books").select("*").eq("student_id",e).order("created_at",{ascending:!0});ye[e]=a||[]}Qt(e)}function Qt(e){const t=l.students.find(p=>p.id===e),n=ye[e]||[],a=document.getElementById("view-student-detail"),i=b.role==="coach"||b.role==="developer",o=n.reduce((p,m)=>p+m.total_tests,0),s=n.reduce((p,m)=>p+m.completed_tests,0),r=o>0?Math.round(s/o*100):0,d=r>=75?"var(--green)":r>=40?"var(--accent)":"var(--red)",c=n.length?n.map(p=>{const m=p.total_tests>0?Math.min(100,Math.round(p.completed_tests/p.total_tests*100)):0,u=m>=75?"var(--green)":m>=40?"var(--accent)":"var(--red)";return`<div style="background:var(--surface);border:1px solid var(--border);border-radius:12px;padding:14px 16px;margin-bottom:10px">
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
        <div style="font-size:12px;color:var(--text-dim);margin-top:2px">${n.length} kaynak · ${s}/${o} test tamamlandı</div>
      </div>
      ${i?`<button class="btn btn-accent btn-sm" onclick="addStudentBook('${e}')">+ Kaynak Ekle</button>`:""}
    </div>
    ${n.length>1?`<div style="background:var(--surface);border:1px solid var(--border);border-radius:12px;padding:14px 16px;margin-bottom:16px;display:flex;align-items:center;gap:14px">
      <div style="flex:1">
        <div style="font-size:11px;font-weight:700;color:var(--text-dim);text-transform:uppercase;letter-spacing:.5px;margin-bottom:6px">Genel İlerleme</div>
        <div style="display:flex;align-items:center;gap:10px">
          <div style="flex:1;height:8px;background:var(--surface3);border-radius:99px;overflow:hidden">
            <div style="height:100%;width:${r}%;background:${d};border-radius:99px;transition:width .4s"></div>
          </div>
          <span style="font-size:14px;font-weight:800;color:${d};white-space:nowrap">%${r}</span>
        </div>
      </div>
    </div>`:""}
    ${c}`}function _i(e){document.getElementById("sbModalTitle").textContent="Kaynak Ekle",document.getElementById("sbId").value="",document.getElementById("sbStuId").value=e,document.getElementById("sbName").value="",document.getElementById("sbTotal").value="0",document.getElementById("sbCompleted").value="0",document.getElementById("sbPctPreview").innerHTML="",G("sbModal")}function Ti(e,t){const n=(ye[e]||[]).find(a=>a.id===t);n&&(document.getElementById("sbModalTitle").textContent="Kaynağı Düzenle",document.getElementById("sbId").value=t,document.getElementById("sbStuId").value=e,document.getElementById("sbName").value=n.name,document.getElementById("sbTotal").value=n.total_tests,document.getElementById("sbCompleted").value=n.completed_tests,Vn(),G("sbModal"))}function Vn(){var o,s;const e=parseInt((o=document.getElementById("sbTotal"))==null?void 0:o.value)||0,t=parseInt((s=document.getElementById("sbCompleted"))==null?void 0:s.value)||0,n=document.getElementById("sbPctPreview");if(!n||!e){n&&(n.innerHTML="");return}const a=Math.min(100,Math.round(t/e*100)),i=a>=75?"var(--green)":a>=40?"var(--accent)":"var(--red)";n.innerHTML=`<div style="display:flex;align-items:center;gap:10px">
    <div style="flex:1;height:8px;background:var(--surface3);border-radius:99px;overflow:hidden">
      <div style="height:100%;width:${a}%;background:${i};border-radius:99px;transition:width .3s"></div>
    </div>
    <span style="font-size:13px;font-weight:800;color:${i}">%${a}</span>
  </div>`}async function Si(){const e=document.getElementById("sbName").value.trim();if(!e)return x("Kaynak adı girin!");const t=Math.max(0,parseInt(document.getElementById("sbTotal").value)||0),n=Math.min(t,Math.max(0,parseInt(document.getElementById("sbCompleted").value)||0)),a=document.getElementById("sbStuId").value,i=document.getElementById("sbId").value,o={name:e,total_tests:t,completed_tests:n};if(i){const{error:s}=await y.from("student_books").update(o).eq("id",i);if(s)return x("Hata: "+s.message);const r=(ye[a]||[]).find(d=>d.id===i);r&&Object.assign(r,o),x("Güncellendi ✓")}else{const{data:s,error:r}=await y.from("student_books").insert({...o,student_id:a,coach_id:b.coachId}).select().single();if(r)return x("Hata: "+r.message);ye[a]||(ye[a]=[]),ye[a].push(s),x("Kaynak eklendi ✓")}q("sbModal"),Qt(a)}async function Ii(e,t){if(!await ie("Bu kaynağı silmek istiyor musunuz?"))return;const{error:n}=await y.from("student_books").delete().eq("id",t);if(n)return x("Hata: "+n.message);ye[e]=(ye[e]||[]).filter(a=>a.id!==t),Qt(e),x("Silindi ✓")}function Zn(){var i,o;const e=document.getElementById("view-profile"),t=b.dbUser,n=((t==null?void 0:t.full_name)||"?").split(" ").map(s=>s[0]).join("").slice(0,2).toUpperCase(),a=b.role==="coach"?"Koç":b.role==="developer"?"Developer":"Öğrenci";e.innerHTML=`
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
        ${b.role==="coach"||b.role==="developer"?`<div>
          <label style="font-size:11px;font-weight:700;color:var(--text-dim);text-transform:uppercase;letter-spacing:.5px;display:block;margin-bottom:6px">Akademi Adı</label>
          <input id="pf_brand" value="${v(((o=l.workspace)==null?void 0:o.brand_name)||"")}" style="width:100%;padding:9px 12px;background:var(--surface2);border:1.5px solid var(--border);border-radius:8px;font-size:13px;font-family:inherit;color:var(--text);outline:none;box-sizing:border-box" onfocus="this.style.borderColor='var(--accent)'" onblur="this.style.borderColor='var(--border)'">
        </div>`:""}
        <div>
          <label style="font-size:11px;font-weight:700;color:var(--text-dim);text-transform:uppercase;letter-spacing:.5px;display:block;margin-bottom:6px">Yeni Şifre <span style="font-weight:400;text-transform:none">(boş bırakılırsa değişmez)</span></label>
          <input type="password" id="pf_pass" placeholder="••••••••" style="width:100%;padding:9px 12px;background:var(--surface2);border:1.5px solid var(--border);border-radius:8px;font-size:13px;font-family:inherit;color:var(--text);outline:none;box-sizing:border-box" onfocus="this.style.borderColor='var(--accent)'" onblur="this.style.borderColor='var(--border)'">
        </div>
        <button class="btn btn-accent" onclick="saveProfile()" style="align-self:flex-start;padding:9px 20px">Kaydet</button>
      </div>
    </div>`}async function zi(){var i,o;const e=document.getElementById("pf_name").value.trim(),t=document.getElementById("pf_pass").value,n=(o=(i=document.getElementById("pf_brand"))==null?void 0:i.value)==null?void 0:o.trim();if(!e)return x("Ad boş olamaz!");const a={full_name:e};t&&(a.password_hash=await He(t)),await y.from("users").update(a).eq("id",b.dbUser.id),n&&(b.role==="coach"||b.role==="developer")&&(await y.from("workspaces").update({brand_name:n}).eq("coach_id",b.coachId),l.workspace={...l.workspace||{},brand_name:n},document.querySelector(".sb-logo-text").textContent=n),b.dbUser={...b.dbUser,full_name:e},document.getElementById("sbName").textContent=e,x("Profil kaydedildi ✓")}function Jn(){var n;const e=document.getElementById("view-settings"),t=document.documentElement.getAttribute("data-theme")==="dark";e.innerHTML=`
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
            ${Ba.map(a=>`<div class="ac-dot" onclick="applyAccent('${a.val}','${a.dim}')" style="background:${a.val}" title="${a.name}"></div>`).join("")}
          </div>
        </div>
      </div>
      
      ${b.role==="developer"?`
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

      ${b.role==="coach"||b.role==="developer"?(()=>{var g;const a=b.dbUser,i=(a==null?void 0:a.plan)||"trial",o=i==="trial"?"Deneme Dönemi":i==="pro"?"Pro Üyelik":i==="premium"?"Premium Üyelik":i.charAt(0).toUpperCase()+i.slice(1),s=i==="trial"?"#f0a500":"#3ecf8e";let r=null;a!=null&&a.trial_ends_at?r=new Date(a.trial_ends_at):a!=null&&a.created_at&&(r=new Date(new Date(a.created_at).getTime()+14*24*60*60*1e3));const c=r?Math.max(0,Math.ceil((r-new Date)/(1e3*60*60*24))):null,p=_=>_?_.toLocaleDateString("tr-TR",{day:"numeric",month:"long",year:"numeric"}):"—",m=c===null?"#888":c>7?"#3ecf8e":c>3?"#f0a500":"#ef4444",u=((g=l.students)==null?void 0:g.length)||0;return`
      <div class="settings-block" style="margin-top:20px">
        <div class="settings-block-title">Üyelik</div>
        <div class="setting-item">
          <div><div class="setting-item-lbl">Plan</div><div class="setting-item-sub" style="color:${s};font-weight:600">${o}</div></div>
        </div>
        <div class="setting-item">
          <div><div class="setting-item-lbl">Bitiş Tarihi</div><div class="setting-item-sub">${p(r)}</div></div>
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
          <div><div class="setting-item-lbl">Kullanıcı Adı</div><div class="setting-item-sub">${v(((n=b.dbUser)==null?void 0:n.username)||"")}</div></div>
          <button class="btn btn-ghost btn-sm" onclick="switchTab('profile')">Düzenle</button>
        </div>
        <div class="setting-item">
          <div><div class="setting-item-lbl">Oturumu Kapat</div></div>
          <button class="btn btn-danger btn-sm" onclick="doLogout()">Çıkış</button>
        </div>
      </div>
    </div>`}function Bi(){const e=document.getElementById("geminiApiKeyInput").value.trim();e?(localStorage.setItem("gemini_api_key",e),x("API Anahtarı kaydedildi ✓")):(localStorage.removeItem("gemini_api_key"),x("API Anahtarı kaldırıldı."))}let Ae="";function X(){const e=document.getElementById("view-program"),t=l.students.find(d=>d.id===l.activeStuId),n=(t==null?void 0:t.weekStart)??0,a=ne(l.weekOffset,n),i=J(a,6),o=ue(),s=localStorage.getItem("ra_program_mode")||"weekly";let r="";for(let d=0;d<7;d++){const c=J(a,d),p=O(c),m=p===o,u=`${l.activeStuId}_${p}`,g=l.tasks[u]||[],_=g.reduce((h,S)=>h+Number(S.duration),0),T=g.reduce((h,S)=>h+(S.done?Number(S.duration):0),0),f=DAYS_TR[(n+d)%7],$=[...g];s==="hourly"&&$.sort((h,S)=>h.start_time&&!S.start_time?-1:!h.start_time&&S.start_time?1:h.start_time&&S.start_time?h.start_time.localeCompare(S.start_time):0);const w=$.map(h=>{const S=g.indexOf(h),I=h.start_time?`<div class="tc-time-badge">🕒 ${h.start_time}</div>`:"";return`
        <div data-task-id="${h._id}" class="task-card task-${h.type} ${h.done?"done":""} ${h.start_time?"hourly-card":""}" onclick="openTaskDetail('${p}',${S},'coach')" style="cursor:pointer">
          <div class="tc-check ${h.done?"on":""}" onclick="event.stopPropagation();toggleTask('${p}',${S})"></div>
          <div class="tc-body">
            ${I}
            <div class="tc-type">${lt(h.type)}${h.exam?" · "+h.exam:""}</div>
            <div class="tc-subject">${v(h.subject)}</div>
            <div class="tc-meta">${h.duration} dk</div>
          </div>
          <button class="tc-menu-btn" onclick="event.stopPropagation();showTaskMenu('${p}',${S},this)">⋯</button>
        </div>`}).join(""),B=["Pzt","Sal","Çar","Per","Cum","Cmt","Paz"][(n+d)%7];r+=`<div class="day-col ${m?"today":""}">
      <div class="day-hd">
        <div>
          <div class="day-name-lbl">${B}</div>
          <div class="day-num">${c.getDate()}</div>
        </div>
        <div style="display:flex;flex-direction:column;align-items:flex-end;gap:4px">
          <span class="day-badge" style="font-size:8.5px">${nt(T)} / ${nt(_)}</span>
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
        <button class="btn btn-xs ${s==="weekly"?"btn-accent":"btn-ghost"}" onclick="setProgramMode('weekly')" style="padding:4px 10px;font-size:11px;font-weight:700;border-radius:8px">📋 Günlük Serbest</button>
        <button class="btn btn-xs ${s==="hourly"?"btn-accent":"btn-ghost"}" onclick="setProgramMode('hourly')" style="padding:4px 10px;font-size:11px;font-weight:700;border-radius:8px">🕒 Saatlik Düzen</button>
      </div>

      ${_clipboardTask?'<button class="btn btn-accent btn-sm" onclick="pasteTaskToWholeWeek()" style="font-size:12px;padding:6px 12px;gap:6px">📋 Kopyalananı Tüm Haftaya Yapıştır</button>':""}
    </div>
    <div class="week-grid">${r}</div>`}function Mi(e){l.activeStuId=e||null,rt(),X()}function Di(e){l.weekOffset+=e,rt(),X()}function Ai(){l.weekOffset=0,rt(),X()}function Ci(e){localStorage.setItem("ra_program_mode",e),b.role==="student"?ze():X()}window.setProgramMode=Ci;(()=>{const e=document.createElement("style");e.textContent=`
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
  `,document.head.appendChild(e)})();let de=[];function Li(){if(!l.activeStuId)return x("Önce öğrenci seçin");const e=l.students.find(i=>i.id===l.activeStuId),t=(e==null?void 0:e.weekStart)??0,n=ne(l.weekOffset,t);de=[];let a="";for(let i=0;i<7;i++){const o=J(n,i),s=O(o);DAYS_TR[(t+i)%7];const r=(l.tasks[`${l.activeStuId}_${s}`]||[]).length>0,d=["Pzt","Sal","Çar","Per","Cum","Cmt","Paz"][(t+i)%7];a+=`<button class="day-sel-btn" id="dsbtn_${i}" data-ds="${s}" onclick="toggleDaySel(${i},'${s}')">
      <div>${d}</div>
      <div style="font-size:14px;font-weight:800">${o.getDate()}</div>
      ${r?'<div style="font-size:9px;color:var(--accent);margin-top:2px">●</div>':'<div style="font-size:9px;opacity:0">·</div>'}
    </button>`}document.getElementById("daySelectorGrid").innerHTML=a,G("clearWeekModal")}function ji(e,t){const n=document.getElementById("dsbtn_"+e),a=de.indexOf(t);a===-1?(de.push(t),n.classList.add("sel")):(de.splice(a,1),n.classList.remove("sel"))}function Pi(){const e=document.querySelectorAll(".day-sel-btn");de.length===7?(de=[],e.forEach(t=>t.classList.remove("sel"))):(de=[],e.forEach((t,n)=>{de.push(t.dataset.ds),t.classList.add("sel")}))}async function Ri(){if(!de.length)return x("Önce gün seçin");if(await ie(`${de.length} günün görevleri silinsin mi?`)){M(!0,"Siliniyor...");for(const e of de)await y.from("tasks").delete().eq("student_id",l.activeStuId).eq("date",e),delete l.tasks[`${l.activeStuId}_${e}`];M(!1),we(),q("clearWeekModal"),X(),x(`${de.length} gün temizlendi ✓`)}}const at={"Dil Bilgisi":["Sözcükte Anlam","Cümlede Anlam","Ses Bilgisi","Yazım Kuralları","Noktalama İşaretleri","Sözcükte Yapı","İsim","Sıfat","Zamir","Zarf","İsim-Sıfat Tamlamaları","Edat-Bağlaç-Ünlem","Fiiller – Fiil Çekimleri – Fiillerde Zaman Kayması","Ek Fiil – Ek Eylem","Fiilde Çatı","Fiilimsiler","Cümlenin Öğeleri","Cümle Türleri","Anlatım Bozuklukları"],"TYT Matematik":["Sayılar ve Basamak","Bölünebilme","EBOB-EKOK","Kesirler ve Ondalıklı Sayılar","Mutlak Değer","Üslü Sayılar","Köklü Sayılar","Oran-Orantı","Problemler – Yaş-İşçi-Havuz","Problemler – Kar-Zarar-Yüzde","Problemler – Hareket","Problemler – Karışım","Birinci Dereceden Denklemler","Kümeler","Mantık","Fonksiyonlar","Polinomlar","İkinci Dereceden Denklemler","Permütasyon-Kombinasyon","Olasılık","İstatistik ve Veri"],"AYT Matematik":["Polinomlar","Karmaşık Sayılar","Logaritma","Trigonometri","Diziler","Limit ve Süreklilik","Türev","İntegral","Matrisler ve Determinant"],Geometri:["Doğruda Açı","Üçgende Açı ve Kenar","Üçgende Alan","Üçgende Benzerlik","Özel Üçgenler (Pisagor)","Dörtgenler","Dörtgende Alan","Çember ve Daire","Çemberde Açı","Analitik Geometri – Nokta ve Doğru","Analitik Geometri – Çember","Katı Cisimler","Uzay Geometrisi"],"TYT Fizik":["Fizik Bilimine Giriş","Madde ve Özellikleri","Basınç","Kaldırma Kuvveti","Isı Sıcaklık Genleşme","Hareket","Newton Hareket Yasaları","İş Güç Enerji","Elektrik","Manyetizma","Optik","Dalgalar"],"AYT Fizik":["Vektörler","Bağıl ve Bileşik Hareket","Newton'ın Hareket Yasaları","Sabit İvmeli Hareket","Tek Boyutta Atışlar","İki Boyutta Atışlar","Enerji","İtme ve Momentum","Tork ve Denge","Kütle ve Ağırlık Merkezi","Basit Makineler","Elektriksel Kuvvet ve Elektrik Alan","Elektriksel Potansiyel Enerji","Düzgün Elektrik Alan ve Sığa","Manyetik Alan","Manyetik Kuvvet","Manyetik İndüksiyon","Alternatif Akım ve Transformatörler","Düzgün Çembersel Hareket","Eylemsizlik Momenti ve Açısal Momentum","Genel Çekim Yasası ve Kepler","Basit Harmonik Hareket","Dalga Mekaniği","Elektromanyetik Dalgalar","Atom Modelleri ve Atomun Yapısı","Büyük Patlama ve Atom Altı Parçacıklar","Radyoaktivite","Özel Görelilik Teorisi","Modern Fizik"],"TYT Kimya":["Kimyanın Sembolik Dili","Atom Modelleri","Periyodik Cetvel","Etkileşimler","Maddenin Halleri","Kimyanın Temel Kanunları","Mol Kavramı","Kimyasal Hesaplamalar","Kimyasal Tepkime Türleri","Karışımlar","Asitler ve Bazlar","Tuzlar","Doğa ve Kimya","Kimya Her Yerde"],"AYT Kimya":["Modern Atom","Gazlar","Sıvı Çözeltiler ve Çözünürlük","Tepkimelerde Hız","Tepkimelerde Denge","Sulu Çözelti Dengeleri","Kimya ve Elektrik","Karbon Kimyası","Organik Bileşikler","Enerji Kaynakları"],"TYT Biyoloji":["Canlıların Temel Bileşenleri","İnorganik Bileşikler","Karbohidratlar","Lipitler (Yağlar)","Proteinler","Hormonlar","Vitaminler","Enzimler","Nükleik Asitler","DNA-RNA","ATP Metabolizma","Hücre Organelleri","Hücre Zarı Madde Geçişleri","Ekoloji","Güncel Çevre Sorunları","Canlıların Sınıflandırılması","Hücre Bölünmeleri","Mitoz","Mayoz","Kalıtım"],"AYT Biyoloji":["Sinir Sistemi","Endokrin Sistemi","Duyu Organları","Destek Hareket Sistemi","Dolaşım Sistemi","Bağışıklık Sistemi","Solunum Sistemi","Üriner Sistemi","Üreme Sistemi","Komünite Ekolojisi","Popülasyon Ekolojisi","Genden Proteine","Enerji Dönüşümleri","Bitki Biyolojisi","Canlı ve Çevre"],"AYT Edebiyat":["Güzel Sanatlar ve Edebiyat","Coşku ve Heyecanı Dile Getiren Metinler (Şiir)","Olay Çevresinde Oluşan Edebi Metinler","Destan Dönemi Türk Edebiyatı","İslamiyet Kabulü İlk Edebi Ürünler","Divan Edebiyatı","Halk Edebiyatı","Tanzimat Edebiyatı","Servet-i Fünun Edebiyatı","Fecr-i Ati Edebiyatı","Milli Edebiyat","Cumhuriyet Dönemi Türk Edebiyatı","Edebi Akımlar"],"Tarih (TYT-AYT)":["Tarih ve Zaman","İnsanlığın İlk Dönemleri","Orta Çağ'da Dünya","İlk ve Orta Çağlarda Türk Dünyası","İslam Medeniyetinin Doğuşu","İlk Türk-İslam Devletleri","Beylikten Devlete Osmanlı","Dünya Gücü Osmanlı","Osmanlı Kültür ve Medeniyeti","En Uzun Yüzyıl (Osmanlı)","XX. Yüzyıl Başlarında Osmanlı","I. Dünya Savaşı","Milli Mücadele Hazırlık Dönemi","Kurtuluş Savaşı ve Antlaşmalar","Atatürk İlke ve İnkılapları","Atatürk Dönemi Türk Dış Politikası"],"Coğrafya (TYT-AYT)":["Doğa ve İnsan","Dünya'nın Şekli ve Hareketleri","Coğrafi Konum","Harita Bilgisi","Atmosfer ve İklim","Dünya'nın Tektonik Yapısı","İç ve Dış Kuvvetler","Nüfus ve Yerleşme","Ekonomik Faaliyetler","Bölgeler ve Ülkeler","Çevre ve Toplum","Ekosistem ve Madde Dönüşü","Türkiye'de Nüfus ve Yerleşme","Türkiye'nin Coğrafi Konumu ve Bölgeleri","Küresel Ortam: Bölgeler ve Ülkeler"],"Felsefe Grubu & Din":["Felsefeyi Tanıma","Bilgi Felsefesi","Varlık Felsefesi","Ahlak Felsefesi","Sanat Felsefesi","Din Felsefesi","Siyaset Felsefesi","Bilim Felsefesi","Psikolojiye Giriş","Sosyolojiye Giriş","Klasik Mantık","Kur'an-ı Kerim ve Anlamı","İnanç ve İbadet","Ahlak ve Değerler","Hz. Muhammed ve Gençlik","İslam Medeniyeti ve Bilim"],"YDT İngilizce":["Grammar (Dil Bilgisi)","Vocabulary (Kelime Bilgisi)","Reading Comprehension (Okuduğunu Anlama)","Sentence Completion (Cümle Tamamlama)","Dialogue Completion (Diyalog Tamamlama)","Translation (Çeviri)","Restatement (Eş Anlamlı Cümle)","Paragraph Completion (Paragraf Tamamlama)","Irrelevant Sentence (Anlamı Bozan Cümle)"]};function Ni(e,t){const n=`${e||""} ${t||""}`.trim();return at[n]||at[t||""]||null}let pe=[];function Hi(e,t){const n=pe.indexOf(t);n===-1?(pe.push(t),e.style.borderColor="var(--red)",e.style.background="rgba(255,92,122,.12)",e.style.color="var(--red)"):(pe.splice(n,1),e.style.borderColor="var(--border)",e.style.background="var(--surface)",e.style.color="var(--text-mid)")}window.toggleKonuChip=Hi;let fe=[];function Yi(){const e=document.getElementById("tmNewResourceToggle").checked;Xn(e)}function Xn(e){document.getElementById("tmSearchSection").style.display=e?"none":"",document.getElementById("tmManualSection").style.display=e?"":"none",document.getElementById("tmTestWrap").style.display="none";const t=document.getElementById("tmToggleSlider");t&&(t.style.background=e?"var(--accent)":"var(--border)",t.style.setProperty("--tw-after-x",e?"16px":"0px"))}function Ki(){const e=document.getElementById("tmManualTestInput"),t=e.value.trim();t&&(fe.push(t),e.value="",Qn())}function Oi(e){fe.splice(e,1),Qn()}function Qn(){const e=document.getElementById("tmManualTestChips");e&&(e.innerHTML=fe.map((t,n)=>`
    <span style="display:inline-flex;align-items:center;gap:5px;background:var(--accent-dim);border:1px solid rgba(240,165,0,.3);color:var(--accent);padding:4px 10px;border-radius:99px;font-size:12px;font-weight:600">
      ${v(t)}
      <button onclick="removeManualTest(${n})" style="background:none;border:none;cursor:pointer;color:var(--accent);font-size:14px;padding:0;line-height:1">×</button>
    </span>`).join(""))}function ea(e,t){if(!l.activeStuId)return x("Önce öğrenci seçin");Ae=e,_editingTaskId=null,W=null,document.querySelector("#taskModal h2").innerHTML=`Görev Ekle — <span id="tmDay">${t}</span>`,document.querySelector("#taskModal .btn-accent").textContent="Programa Ekle",document.getElementById("tmSubjectFree").value="",document.getElementById("tmDuration").value="60",document.getElementById("tmStartTime").value="",document.getElementById("tmNote").value="",document.getElementById("tmExam").value="",document.getElementById("tmType").value="deneme",document.getElementById("tmSubjectSel").style.display="none",document.getElementById("tmSubjectFree").style.display="",document.getElementById("soruBankasiWrap").style.display="none",document.getElementById("tmBookSearch").value="",document.getElementById("tmBookVal").value="",document.getElementById("tmBookList").style.display="none",document.getElementById("tmTestWrap").style.display="none";const n=document.getElementById("tmTestSummary");n&&(n.style.display="none");const a=document.getElementById("tmNewResourceToggle");a&&(a.checked=!1,Xn(!1)),document.getElementById("tmManualKaynak").value="",document.getElementById("tmManualTestInput").value="",document.getElementById("tmManualTestChips").innerHTML="",fe=[],na(),G("taskModal")}let le={},qe=!1;async function ta(){if(qe)return;const{data:e}=await y.from("resources").select("*").eq("active",!0).order("name");e&&(e.forEach(t=>{let n=[t.subject];t.subject==="Tarih"?n.push("Tarih1","Tarih2"):t.subject==="Coğrafya"?n.push("Coğrafya1","Coğrafya2"):(t.subject==="Din Kültürü"||t.subject==="Din")&&(n=["Din","Din Kültürü"]),n.forEach(a=>{const i=`${t.exam_type}_${a}`;le[i]||(le[i]=[]),le[i].push({name:t.name,yil:t.year,testler:Array.isArray(t.tests)?t.tests:[],publisher:t.publisher})})}),qe=!0)}let Qe=[],W=null;function _t(){const e=document.getElementById("tmExam").value,t=document.getElementById("tmType").value,n=document.getElementById("tmSubjectSel"),a=document.getElementById("tmSubjectFree");W=null,document.getElementById("tmBookVal").value="",document.getElementById("tmBookSearch").value="",document.getElementById("tmBookList").innerHTML="",document.getElementById("tmBookList").style.display="none",document.getElementById("tmTestWrap").style.display="none";const i=document.getElementById("tmTestSummary");i&&(i.style.display="none"),e&&SUBJECT_MAP[e]?(n.innerHTML=SUBJECT_MAP[e].map(r=>`<option value="${r}">${r}</option>`).join(""),n.style.display="",a.style.display="none"):(n.style.display="none",a.style.display="");const o=(t==="soru"||t==="konu")&&e;document.getElementById("soruBankasiWrap").style.display=o?"":"none";const s=document.getElementById("tmBookSearch");s&&(s.placeholder=t==="konu"?"Hoca veya playlist ara...":"Kitap veya yayınevi ara..."),qe=!1,le={},o&&Tt("")}function Fi(){W=null,document.getElementById("tmBookVal").value="",document.getElementById("tmBookSearch").value="",document.getElementById("tmBookList").style.display="none",document.getElementById("tmTestWrap").style.display="none";const e=document.getElementById("tmType").value,t=document.getElementById("tmExam").value;qe=!1,le={},(e==="soru"||e==="konu")&&t&&Tt("")}document.getElementById("tmType").addEventListener("change",_t);async function Tt(e){const t=document.getElementById("tmExam").value,n=document.getElementById("tmSubjectSel").value||"",a=document.getElementById("tmType").value,i=document.getElementById("tmBookList"),o=a==="konu"?"playlist":"book";if(!qe){i.style.display="block",i.innerHTML='<div style="padding:12px;font-size:12px;color:var(--text-dim);text-align:center">⏳ Yükleniyor...</div>';const{data:c}=await y.from("resources").select("*").eq("active",!0).eq("resource_type",o).order("name");le={},c&&c.forEach(p=>{let m=[p.subject];p.subject==="Tarih"?m.push("Tarih1","Tarih2"):p.subject==="Coğrafya"?m.push("Coğrafya1","Coğrafya2"):(p.subject==="Din Kültürü"||p.subject==="Din")&&(m=["Din","Din Kültürü"]),m.forEach(u=>{const g=`${p.exam_type}_${u}`;le[g]||(le[g]=[]),le[g].push({name:p.name,yil:p.year,testler:Array.isArray(p.tests)?p.tests:[],publisher:p.publisher,resource_type:p.resource_type||"book"})})}),qe=!0}const s=`${t}_${n}`,r=le[s]||[],d=e.toLowerCase();if(Qe=r.filter(c=>{var p;return!d||c.name.toLowerCase().includes(d)||((p=c.publisher)==null?void 0:p.toLowerCase().includes(d))}),!e&&!Qe.length){i.style.display="none";return}if(!Qe.length){i.style.display="block",i.innerHTML='<div style="padding:12px;font-size:12px;color:var(--text-dim);text-align:center">Kaynak bulunamadı</div>';return}i.style.display="block",i.innerHTML=Qe.map((c,p)=>`
    <div onclick="selectBook(${p})" style="padding:10px 14px;cursor:pointer;border-bottom:1px solid var(--border);display:flex;justify-content:space-between;align-items:center;transition:background .15s"
      onmouseover="this.style.background='var(--surface3)'" onmouseout="this.style.background=''">
      <div>
        <div style="font-size:13px;font-weight:700">${v(c.name)}</div>
        <div style="font-size:10px;color:var(--text-dim);margin-top:2px">${v(c.publisher||"")} · ${c.testler.length} test</div>
      </div>
      <span style="font-size:10px;font-weight:700;background:var(--green-dim);color:var(--green);padding:2px 7px;border-radius:99px;margin-left:8px;flex-shrink:0">${c.yil}</span>
    </div>`).join("")}function Ui(){const e=document.getElementById("tmBookSearch").value;if(e.length===0){document.getElementById("tmBookList").style.display="none";return}Tt(e)}function Gi(e){W=Qe[e],document.getElementById("tmBookVal").value=W.name,document.getElementById("tmBookSearch").value=W.name,document.getElementById("tmBookList").style.display="none",St(),document.getElementById("tmTestWrap").style.display=""}function St(){if(!W)return;const e=document.getElementById("tmTestList"),t=W.resource_type==="playlist",n=W.name||"";e.innerHTML=W.testler.map((a,i)=>{const o=a.label||a,s=o.trim()===""||o.trim()===n.trim()?`Ders ${i+1}`:o,r=a.soru||0,d=a.url||"";a.topic;const c=Ya(o),p=c==="done"?"ti-status-done":c==="pending"?"ti-status-pending":"",m=c==="done"?'<span class="ti-badge ti-badge-done">✓ Tamamlandı</span>':c==="pending"?'<span class="ti-badge ti-badge-pending">⏳ Atandı</span>':"";return t?`<label class="${p}" style="display:flex;align-items:center;gap:8px;padding:8px 10px;cursor:pointer;transition:background .1s;border-bottom:1px solid var(--border)"
        onmouseover="this.style.background='var(--surface3)'" onmouseout="this.style.background=''">
        <input type="checkbox" id="test_${i}" value="${i}" onchange="updateTestSummary()"
          style="width:15px;height:15px;accent-color:var(--accent);cursor:pointer;flex-shrink:0">
        <div style="width:22px;height:22px;border-radius:6px;background:var(--surface3);color:var(--text-mid);font-size:10px;font-weight:800;display:flex;align-items:center;justify-content:center;flex-shrink:0">${i+1}</div>
        <div style="flex:1;min-width:0">
          <div style="font-size:12px;font-weight:600;line-height:1.3;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${v(s)}</div>
          <div style="display:flex;align-items:center;gap:6px;margin-top:2px">
            <span style="font-size:10px;color:var(--text-dim)">${r>0?`⏱ ${r} dk`:"⏱ ?"}</span>
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
          <span style="font-size:12px;font-weight:600">${v(s)}</span>
          ${m}
        </div>
        ${r>0?`<span style="font-size:10px;color:var(--text-dim);background:var(--surface3);padding:2px 7px;border-radius:99px;flex-shrink:0">${r} soru</span>`:""}
      </label>`}).join(""),We()}function qi(){document.querySelectorAll("#tmTestList input[type=checkbox]").forEach(e=>e.checked=!0),We()}function Wi(){document.querySelectorAll("#tmTestList input[type=checkbox]").forEach(e=>e.checked=!1),We()}function We(){if(!W)return;const e=[...document.querySelectorAll("#tmTestList input[type=checkbox]:checked")],t=document.getElementById("tmTestSummary"),n=document.getElementById("tmTestSummaryText"),a=document.getElementById("tmSuggestedDuration"),i=document.getElementById("tmSpeedRow"),o=W.resource_type==="playlist";if(e.length===0){t.style.display="none";return}let s=0,r=0;e.forEach(m=>{const u=parseInt(m.value),g=W.testler[u];o?r+=(g==null?void 0:g.soru)||0:s+=(g==null?void 0:g.soru)||0});const d=document.querySelector("[data-mspeed].speed-active"),c=d?parseFloat(d.dataset.mspeed):1;let p=0;if(o)p=r>0?Math.ceil(r/c):0,n.textContent=`${e.length} video · ${r} dk`,i&&(i.style.display="");else{const m=document.getElementById("tmExam").value,u=document.getElementById("tmSubjectSel").value||"",g=`${l.activeStuId}_${m}_${u}`,_=bt[g]||180;p=s>0?Math.ceil(s*_/60):0,n.textContent=`${e.length} test · ${s} soru${p>0?" · Önerilen: "+p+" dk":""}`,i&&(i.style.display="none")}a.style.display=p>0?"":"none",gt=p,a.setAttribute("data-dur",p),t.style.display="",p>0&&(document.getElementById("tmDuration").value=p)}function Vi(e){document.querySelectorAll("[data-mspeed]").forEach(t=>{const n=t.dataset.mspeed===e;t.classList.toggle("speed-active",n),t.style.borderColor=n?"var(--accent)":"var(--border)",t.style.background=n?"var(--accent-dim)":"var(--surface2)",t.style.color=n?"var(--accent)":"var(--text-mid)"}),We()}let gt=0;function Zi(){gt>0&&(document.getElementById("tmDuration").value=gt,x("Süre uygulandı: "+gt+" dk"))}let bt={};async function na(){if(!l.activeStuId)return;const{data:e}=await y.from("student_speeds").select("*").eq("student_id",l.activeStuId);bt={},(e||[]).forEach(t=>{const n=`${t.student_id}_${t.exam_type}_${t.subject}`;bt[n]=t.secs_per_question})}async function aa(e,t,n,a){const{data:i}=await y.from("student_speeds").select("id").eq("student_id",e).eq("exam_type",t).eq("subject",n).single();i?await y.from("student_speeds").update({secs_per_question:a,updated_at:new Date().toISOString()}).eq("id",i.id):await y.from("student_speeds").insert({student_id:e,coach_id:b.coachId,exam_type:t,subject:n,secs_per_question:a}),bt[`${e}_${t}_${n}`]=a,x("Hız kaydedildi ✓")}let Tn=null,tt=null;function It(){clearTimeout(Tn),Tn=setTimeout(Ji,400)}async function Ji(){var i,o,s,r,d;const e=document.getElementById("tmSmartBadge");if(!e)return;const t=parseInt((i=document.getElementById("tmQCount"))==null?void 0:i.value)||0,n=(((o=document.getElementById("tmSubjectSel"))==null?void 0:o.style.display)!=="none"?(s=document.getElementById("tmSubjectSel"))==null?void 0:s.value:(r=document.getElementById("tmSubjectFree"))==null?void 0:r.value)||"",a=((d=document.getElementById("tmExam"))==null?void 0:d.value)||"TYT";if(!t||!n||!l.activeStuId){e.style.display="none",tt=null;return}try{const{data:c,error:p}=await y.rpc("calculate_smart_duration",{p_student_id:l.activeStuId,p_exam_type:a,p_subject:n,p_question_count:t,p_video_minutes:0,p_speed_multiplier:1});if(p||!c){e.style.display="none";return}tt=c.estimated_minutes;const m=c.speed_source==="student";e.style.display="block",e.style.background=m?"var(--green-dim)":"var(--blue-dim)",e.style.borderColor=m?"rgba(5,150,105,.3)":"rgba(37,99,235,.3)",e.style.color=m?"var(--green)":"var(--blue)",e.innerHTML=`⚡ Akıllı Süre: <b>${c.estimated_minutes} dk</b> — ${m?`öğrencinin gerçek hızına göre (${c.secs_per_question} sn/soru)`:`sistem varsayılanına göre (${c.secs_per_question} sn/soru)`} · <u>süreye uygula</u>`}catch{e.style.display="none"}}function Xi(){tt&&(document.getElementById("tmDuration").value=tt,x("⚡ Akıllı süre uygulandı: "+tt+" dk"))}document.getElementById("tmType").addEventListener("change",_t);var Mn;(Mn=document.getElementById("tmExam"))==null||Mn.addEventListener("change",It);var Dn;(Dn=document.getElementById("tmSubjectSel"))==null||Dn.addEventListener("change",It);var An;(An=document.getElementById("tmSubjectFree"))==null||An.addEventListener("input",It);let Ct=!1;async function Qi(){var n;if(Ct)return;Ct=!0;const e=document.querySelector('#taskModal button[onclick*="saveTask"]'),t=e?e.textContent:"Programa Ekle";e&&(e.disabled=!0,e.textContent="Kaydediliyor...");try{const a=document.getElementById("tmType").value,i=document.getElementById("tmSubjectSel"),o=document.getElementById("tmSubjectFree"),s=document.getElementById("tmExam").value,r=parseInt(document.getElementById("tmDuration").value)||60,d=document.getElementById("tmStartTime").value||null,c=document.getElementById("tmNote").value.trim();if((n=document.getElementById("tmNewResourceToggle"))==null?void 0:n.checked){const w=document.getElementById("tmManualKaynak").value.trim();if(!w)return x("Kaynak adı girin!");const B=i.style.display!=="none"?i.value:o.value.trim(),h=B?`${B} - ${w}`:w,S=fe.map(C=>({label:C,url:"",soru:0}));let I=c;fe.length>0&&(I=`${fe.length} test: ${fe.slice(0,3).join(", ")}${fe.length>3?` +${fe.length-3} daha`:""}`);const z={student_id:l.activeStuId,coach_id:b.coachId,date:Ae,type:a,exam_type:s,subject:h,duration:r,note:I,done:!1,task_items:S.length>0?S:null,start_time:d};M(!0);const{error:E}=await y.from("tasks").insert(z);if(M(!1),E)return x("Hata: "+E.message);const A=`${l.activeStuId}_${Ae}`;l.tasks[A]||(l.tasks[A]=[]),l.tasks[A].push({type:a,exam:s,subject:h,duration:r,note:I,done:!1,task_items:z.task_items,start_time:d}),q("taskModal"),X(),x("Görev eklendi ✓");return}const m=document.getElementById("tmBookVal").value,u=(W==null?void 0:W.resource_type)==="playlist";let g="";if((a==="soru"||a==="konu")&&m){const w=i.style.display!=="none"?i.value:"";g=w?`${w} - ${m}`:`${m}`}else g=(i.style.display!=="none"?i.value:o.value).trim();if(!g)return x("Ders adı girin!");const _=[...document.querySelectorAll("#tmTestList input[type=checkbox]:checked")];let T=c,f=[];if(_.length>0&&W){const w=_.map(B=>{const h=W.testler[parseInt(B.value)];return(h==null?void 0:h.label)||h||""});if(f=_.map(B=>{const h=W.testler[parseInt(B.value)];return{label:(h==null?void 0:h.label)||h||"",url:(h==null?void 0:h.url)||"",soru:(h==null?void 0:h.soru)||0}}),u){const B=h=>h.length>14?h.slice(0,13)+"…":h;T=`${w.length} video: ${w.slice(0,5).map(B).join(", ")}${w.length>5?` +${w.length-5}`:""}`}else{const B=h=>h.length>14?h.slice(0,13)+"…":h;T=`${w.length} test: ${w.slice(0,5).map(B).join(", ")}${w.length>5?` +${w.length-5}`:""}`}}const $={student_id:l.activeStuId,coach_id:b.coachId,date:Ae,type:a,exam_type:s,subject:g,duration:r,note:T,done:!1,task_items:f.length>0?f:null,start_time:d};if(_editingTaskId){M(!0);const{error:w}=await y.from("tasks").update({type:$.type,exam_type:$.exam_type,subject:$.subject,duration:$.duration,note:$.note,task_items:$.task_items,start_time:$.start_time}).eq("id",_editingTaskId);if(M(!1),w)return x("Hata: "+w.message);const B=`${l.activeStuId}_${Ae}`;if(l.tasks[B]){const h=l.tasks[B].findIndex(S=>S._id===_editingTaskId);h!==-1&&(l.tasks[B][h]={_id:_editingTaskId,type:$.type,exam:$.exam_type,subject:$.subject,duration:$.duration,note:$.note,done:l.tasks[B][h].done,student_note:l.tasks[B][h].student_note||"",task_items:$.task_items,start_time:$.start_time})}q("taskModal"),X(),x("Görev güncellendi ✓"),_editingTaskId=null}else{const{data:w,error:B}=await y.from("tasks").insert($).select().single();if(B)return x("Hata: "+B.message);const h=`${l.activeStuId}_${Ae}`;l.tasks[h]||(l.tasks[h]=[]),l.tasks[h].push({_id:w.id,type:w.type,exam:w.exam_type,subject:w.subject,duration:w.duration,note:w.note,done:!1,student_note:"",task_items:w.task_items||null,start_time:w.start_time}),q("taskModal"),X(),x("Görev eklendi ✓")}}finally{Ct=!1,e&&(e.disabled=!1,e.textContent=t)}}async function eo(e,t){var o;const n=`${l.activeStuId}_${e}`,a=(o=l.tasks[n])==null?void 0:o[t];if(!a)return;const i=!a.done;await y.from("tasks").update({done:i}).eq("id",a._id),a.done=i,X()}let vt=null;function en(){vt&&(vt.remove(),vt=null)}document.addEventListener("click",en);function to(e,t,n){en();const a=n.getBoundingClientRect(),i=document.createElement("div");i.className="tc-dropdown",i.innerHTML=`
    <button onclick="closeTaskMenu();openCoachTaskEdit('${e}',${t})">✏️ Düzenle</button>
    <button onclick="closeTaskMenu();copyTaskToClipboard('${e}',${t})">📋 Kopyala</button>
    <button onclick="closeTaskMenu();copyTaskToWholeWeek('${e}',${t})">📅 Tüm Haftaya Kopyala</button>
    <button class="danger" onclick="closeTaskMenu();deleteTask('${e}',${t})">🗑 Kaldır</button>`;const o=a.bottom+4,s=Math.min(a.left,window.innerWidth-155);i.style.cssText=`top:${o}px;left:${s}px;`,document.body.appendChild(i),vt=i,setTimeout(()=>i.addEventListener("click",r=>r.stopPropagation()),0)}async function no(e,t){var s;const n=`${l.activeStuId}_${e}`,a=(s=l.tasks[n])==null?void 0:s[t];if(!a)return;const{data:i,error:o}=await y.from("tasks").insert({student_id:l.activeStuId,coach_id:b.coachId,date:e,type:a.type,exam_type:a.exam||null,subject:a.subject,duration:a.duration,note:a.note||null,done:!1,task_items:a.task_items||null}).select().single();if(o)return x("Kopyalama başarısız");l.tasks[n]||(l.tasks[n]=[]),l.tasks[n].push({_id:i.id,type:i.type,exam:i.exam_type,subject:i.subject,duration:i.duration,note:i.note,done:!1,student_note:"",task_items:i.task_items||null}),X(),x("Görev kopyalandı")}async function ao(e,t){var s;const n=`${l.activeStuId}_${e}`,a=(s=l.tasks[n])==null?void 0:s[t];if(!a)return;const i=[a.exam,a.subject].filter(Boolean).join(" · ")||a.type||"Görev",o=document.querySelector(`[data-task-id="${a._id}"]`);if(o){o.style.transition="all 0.3s ease",o.style.opacity="0",o.style.transform="translateX(30px)";const r=o.querySelector(".tc-body");r&&(r.innerHTML='<div style="color:var(--red); font-weight:700; font-size:12px; display:flex; align-items:center; gap:6px">🗑️ Siliniyor...</div>')}await new Promise(r=>setTimeout(r,300)),await y.from("tasks").delete().eq("id",a._id),l.tasks[n].splice(t,1),X(),x(`"${i}" silindi`)}let ce={studentId:"",type:""};window._draggingApptId=null;const ia={"Haftalık Değerlendirme":"#E8613A","TYT Koçluğu":"#3B82F6","AYT Koçluğu":"#8B5CF6",Mentörlük:"#10B981","Deneme Analizi":"#F59E0B",Motivasyon:"#EC4899","Genel Görüşme":"#64748B"},Sn=0,io=24,oo=60;function oa(e){return ia[e]||"#64748B"}function so(e){const t=l.students.find(o=>o.id===e.studentId),n=new Date(e.date+"T"+(e.time||"09:00")),a=new Date(n.getTime()+(e.duration||45)*6e4),i=o=>o.getFullYear()+String(o.getMonth()+1).padStart(2,"0")+String(o.getDate()).padStart(2,"0")+"T"+String(o.getHours()).padStart(2,"0")+String(o.getMinutes()).padStart(2,"0")+"00";return`https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(((t==null?void 0:t.name)||"Öğrenci")+" – Koçluk")}&dates=${i(n)}/${i(a)}&details=${encodeURIComponent(e.type||"")}`}function ro(){$e()}function lo(){$e()}function co(){$e()}function po(e,t){ce[e]=t,$e()}function mo(){let e=l.appointments;ce.studentId&&(e=e.filter(o=>o.studentId===ce.studentId)),ce.type&&(e=e.filter(o=>o.type===ce.type));const t=["BEGIN:VCALENDAR","VERSION:2.0","PRODID:-//Rostrum Akademi//TR","CALSCALE:GREGORIAN","METHOD:PUBLISH","X-WR-CALNAME:Rostrum Ajanda"];e.forEach(o=>{const s=l.students.find(p=>p.id===o.studentId),r=new Date(o.date+"T"+(o.time||"09:00")),d=new Date(r.getTime()+(o.duration||45)*6e4),c=p=>p.getFullYear()+String(p.getMonth()+1).padStart(2,"0")+String(p.getDate()).padStart(2,"0")+"T"+String(p.getHours()).padStart(2,"0")+String(p.getMinutes()).padStart(2,"0")+"00";t.push("BEGIN:VEVENT",`DTSTART:${c(r)}`,`DTEND:${c(d)}`,`SUMMARY:${(s==null?void 0:s.name)||"Öğrenci"} – ${o.type||"Koçluk"}`),o.note&&t.push(`DESCRIPTION:${o.note.replace(/\n/g,"\\n")}`),(o.meetLink||o.meet_link)&&t.push(`URL:${o.meetLink||o.meet_link}`),t.push(`UID:rostrum-${o.id}@rostrumakademi.com`,"END:VEVENT")}),t.push("END:VCALENDAR");const n=new Blob([t.join(`\r
`)],{type:"text/calendar;charset=utf-8"}),a=URL.createObjectURL(n),i=document.createElement("a");i.href=a,i.download="rostrum-ajanda.ics",i.click(),URL.revokeObjectURL(a),x("Ajanda indirildi ✓")}function sa(e,t){t.stopPropagation();const n=document.getElementById("apptDetailPopup");if(n){const g=n.dataset.id;if(n.remove(),g===e)return}const a=l.appointments.find(g=>g.id===e);if(!a)return;const i=l.students.find(g=>g.id===a.studentId),o=oa(a.type),s=document.createElement("div");s.id="apptDetailPopup",s.dataset.id=e;const r=window.innerWidth,d=window.innerHeight,c=264;let p=Math.min(t.clientX+12,r-c-12),m=Math.min(t.clientY+12,d-220);s.style.cssText=`position:fixed;left:${p}px;top:${m}px;z-index:600;width:${c}px;background:var(--surface);border:1px solid var(--border);border-radius:14px;padding:14px 16px;box-shadow:0 8px 32px rgba(0,0,0,.18);animation:viewIn .15s ease`;const u=a.meetLink||a.meet_link;s.innerHTML=`
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
      <a href="${so(a)}" target="_blank" style="font-size:11px;font-weight:700;color:var(--green);background:var(--green-dim);padding:4px 10px;border-radius:99px;text-decoration:none">📅 GCal</a>
      <button onclick="document.getElementById('apptDetailPopup')?.remove();openAgendaApptModal('${a.id}')" style="font-size:11px;font-weight:700;color:var(--text);background:var(--surface2);padding:4px 10px;border-radius:99px;border:1px solid var(--border);cursor:pointer;font-family:inherit">✏️ Düzenle</button>
      <button onclick="deleteAgendaAppt('${a.id}')" style="font-size:11px;font-weight:700;color:var(--red,#ef4444);background:#ef444410;padding:4px 10px;border-radius:99px;border:none;cursor:pointer;font-family:inherit">🗑</button>
    </div>`,document.body.appendChild(s),setTimeout(()=>{document.addEventListener("click",function g(_){s.contains(_.target)||(s.remove(),document.removeEventListener("click",g))})},50)}async function uo(e,t){e.preventDefault();const n=window._draggingApptId;if(!n)return;window._draggingApptId=null;const a=e.currentTarget,i=a.getBoundingClientRect(),o=a.closest("[data-tl-scroll]"),s=o?o.scrollTop:0,d=(e.clientY-i.top+s)/oo*60+Sn*60,c=Math.max(Sn,Math.min(io-1,Math.floor(d/60))),p=Math.round(d%60/15)*15,m=p>=60?0:p,u=`${String(c).padStart(2,"0")}:${String(m).padStart(2,"0")}`,{error:g}=await y.from("appointments").update({date:t,time:u}).eq("id",n);if(g){x("Hata: "+g.message);return}const _=l.appointments.find(T=>T.id===n);_&&(_.date=t,_.time=u),$e(),x("Randevu taşındı ✓")}function ra(){$e()}function $e(){const e=document.getElementById("view-todolist");if(!e)return;if(!document.getElementById("fc-styles")){const r=document.createElement("style");r.id="fc-styles",r.textContent=`
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
    `,document.head.appendChild(r)}const t='<option value="">Tüm Öğrenciler</option>'+l.students.map(r=>`<option value="${r.id}"${ce.studentId===r.id?" selected":""}>${v(r.name)}</option>`).join(""),n='<option value="">Tüm Tipler</option>'+Object.keys(ia).map(r=>`<option value="${r}"${ce.type===r?" selected":""}>${r}</option>`).join("");let a=l.appointments;ce.studentId&&(a=a.filter(r=>r.studentId===ce.studentId)),ce.type&&(a=a.filter(r=>r.type===ce.type));const i=a.map(r=>{const d=l.students.find(T=>T.id===r.studentId),c=oa(r.type),p=`${r.date}T${r.time||"09:00"}`,m=new Date(p),u=new Date(m.getTime()+(r.duration||45)*6e4),g=T=>String(T).padStart(2,"0"),_=`${u.getFullYear()}-${g(u.getMonth()+1)}-${g(u.getDate())}T${g(u.getHours())}:${g(u.getMinutes())}:00`;return{id:r.id,title:`${(d==null?void 0:d.name)||"Öğrenci"} (${r.type||"Randevu"})`,start:p,end:_,backgroundColor:c,borderColor:c,textColor:"#ffffff",extendedProps:{...r}}}),o="font-size:12px;padding:6px 12px;border-radius:8px;border:1px solid var(--border);background:var(--surface);color:var(--text);cursor:pointer;font-family:inherit";let s=document.getElementById("fc-calendar");if(!s)e.innerHTML=`
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
    `,s=document.getElementById("fc-calendar");else{const r=e.querySelectorAll("select");r[0]&&(r[0].innerHTML=t),r[1]&&(r[1].innerHTML=n)}typeof FullCalendar<"u"?window._fcInstance?(window._fcInstance.removeAllEvents(),window._fcInstance.addEventSource(i),window._fcInstance.updateSize()):(window._fcInstance=new FullCalendar.Calendar(s,{initialView:window.innerWidth<700?"listWeek":"timeGridWeek",headerToolbar:{left:"prev,next today",center:"title",right:"dayGridMonth,timeGridWeek,timeGridDay,listWeek"},buttonText:{today:"Bugün",month:"Ay",week:"Hafta",day:"Gün",list:"Ajanda"},locale:"tr",firstDay:1,slotMinTime:"08:00",slotMaxTime:"23:00",allDaySlot:!1,editable:!0,droppable:!0,selectable:!0,eventClick:function(r){sa(r.event.id,r.jsEvent)},select:function(r){const d=r.startStr.slice(0,10),c=r.startStr.slice(11,16)||"14:00";la(null,d),setTimeout(()=>{const p=document.getElementById("amTime");p&&(p.value=c)},50)},eventDrop:async function(r){const d=r.event.start,c=r.event.end||new Date(d.getTime()+45*6e4),p=d.getFullYear()+"-"+String(d.getMonth()+1).padStart(2,"0")+"-"+String(d.getDate()).padStart(2,"0"),m=String(d.getHours()).padStart(2,"0")+":"+String(d.getMinutes()).padStart(2,"0"),u=Math.round((c.getTime()-d.getTime())/6e4),g=r.event.id,{error:_}=await y.from("appointments").update({date:p,time:m,duration:u}).eq("id",g);if(_){x("Hata: "+_.message),r.revert();return}const T=l.appointments.find(f=>f.id===g);T&&(T.date=p,T.time=m,T.duration=u),x("Randevu taşıma başarılı ✓")},eventResize:async function(r){const d=r.event.start,c=r.event.end;if(!c)return;const p=Math.round((c.getTime()-d.getTime())/6e4),m=r.event.id,{error:u}=await y.from("appointments").update({duration:p}).eq("id",m);if(u){x("Hata: "+u.message),r.revert();return}const g=l.appointments.find(_=>_.id===m);g&&(g.duration=p),x("Randevu süresi güncellendi ✓")},events:i}),window._fcInstance.render()):console.warn("FullCalendar library not loaded yet")}function la(e,t){const n=e?l.appointments.find(a=>a.id===e):null;document.getElementById("amTitle").textContent=n?"Randevuyu Düzenle":"Yeni Randevu",document.getElementById("amId").value=e||"",document.getElementById("amStudent").innerHTML=l.students.map(a=>`<option value="${a.id}" ${(n==null?void 0:n.studentId)===a.id?"selected":""}>${v(a.name)}</option>`).join(""),document.getElementById("amDate").value=n?n.date:t||O(new Date),document.getElementById("amTime").value=n?n.time:"14:00",document.getElementById("amDuration").value=n?n.duration:"45",document.getElementById("amType").value=n?n.type:"Haftalık Değerlendirme",document.getElementById("amNote").value=n&&n.note||"",document.getElementById("amMeetLink").value=n&&(n.meetLink||n.meet_link)||"",G("apptModal")}async function go(e){await ie("Randevu silinsin mi?")&&(await y.from("appointments").delete().eq("id",e),l.appointments=l.appointments.filter(t=>t.id!==e),$e(),x("Randevu silindi"))}function da(){dt()}function vo(e){l.activeStuId=e,l.weekOffset=0,we(),Xt(e)}function fo(e){const t=e?l.students.find(m=>m.id===e):null,n=!!t;document.getElementById("smTitle").textContent=n?"Öğrenciyi Düzenle":"Öğrenci Davet Et",document.getElementById("smId").value=e||"",document.getElementById("smName").value=(t==null?void 0:t.name)||"",document.getElementById("smTarget").value=(t==null?void 0:t.target)||"",document.getElementById("smUsername").value=(t==null?void 0:t.username)||"",document.getElementById("smPass").value=(t==null?void 0:t.pass)||STU_DEFAULT_PASS,document.getElementById("smWeekStart").value=(t==null?void 0:t.weekStart)??0,document.getElementById("smYksArea").value=(t==null?void 0:t.yksArea)||"SAY",document.getElementById("smProg").value=(t==null?void 0:t.progress)||0,document.getElementById("smProgVal").textContent=((t==null?void 0:t.progress)||0)+"%",document.querySelectorAll(".color-opt").forEach(m=>m.classList.toggle("sel",m.dataset.c===((t==null?void 0:t.color)||"#e8622a")));const a=document.getElementById("smEmailField"),i=document.getElementById("smTargetField"),o=document.getElementById("smInviteRow"),s=document.getElementById("smYksRow"),r=document.getElementById("smColorField"),d=document.getElementById("smProgField"),c=document.querySelector("#studentModal .btn-accent");a&&(a.style.display=n?"none":"block"),i&&(i.style.display=n?"block":"none"),o&&(o.style.display=n?"flex":"none"),s&&(s.style.display=n?"flex":"none"),r&&(r.style.display=n?"block":"none"),d&&(d.style.display=n?"block":"none"),c&&(c.textContent=n?"Kaydet":"Davet Gönder",c.setAttribute("onclick","saveStudent()"));const p=document.getElementById("smRoleField");p&&(p.style.display="none"),G("studentModal")}document.getElementById("smProg").addEventListener("input",function(){document.getElementById("smProgVal").textContent=this.value+"%"});document.getElementById("smColorPick").addEventListener("click",function(e){const t=e.target.closest(".color-opt");t&&(document.querySelectorAll(".color-opt").forEach(n=>n.classList.remove("sel")),t.classList.add("sel"))});async function yo(){var d,c,p,m;const e=document.getElementById("smName").value.trim();if(!e)return x("İsim girin!");const t=((d=document.querySelector(".color-opt.sel"))==null?void 0:d.dataset.c)||"#e8622a",n=document.getElementById("smId").value,a=Pe(document.getElementById("smUsername").value.trim())||Pe(e.split(" ")[0])+Math.floor(Math.random()*100),i=document.getElementById("smPass").value||STU_DEFAULT_PASS,o=await He(i),s=document.getElementById("smYksArea").value,r={full_name:e,target:document.getElementById("smTarget").value.trim()||"Hedef belirtilmemiş",color:t,progress:Number(document.getElementById("smProg").value),password_hash:o,week_start:Number(document.getElementById("smWeekStart").value),username:a,role:"student",coach_id:b.coachId,yks_area:s};if(n){const{error:u}=await y.rpc("update_student_profile",{p_student_id:n,p_full_name:e,p_target:r.target,p_color:t,p_progress:r.progress,p_week_start:r.week_start,p_username:a,p_plain_password:i,p_password_hash:o,p_yks_area:r.yks_area});if(u)return x("Hata: "+u.message);const g=l.students.find(_=>_.id===n);g&&Object.assign(g,{name:r.full_name,target:r.target,color:t,progress:r.progress,pass:r.password_hash,weekStart:r.week_start,username:a,yksArea:r.yks_area}),x("Güncellendi ✓"),we(),q("studentModal"),dt()}else{const u=(c=document.getElementById("smEmail"))==null?void 0:c.value.trim();if(!u||!u.includes("@"))return x("Geçerli bir e-posta adresi girin!");const{data:{session:g}}=await y.auth.getSession();x("Davet gönderiliyor...");try{const _=await fetch("/api/invitation?action=create",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${(g==null?void 0:g.access_token)||""}`,"X-Coach-Id":((p=b.dbUser)==null?void 0:p.id)||"","X-Coach-Hash":((m=b.dbUser)==null?void 0:m.password_hash)||""},body:JSON.stringify({email:u,student_name:r.full_name,username:a})}),T=await _.json();if(!_.ok)return x("Hata: "+T.error);x("Davet gönderildi ✓"),we(),q("studentModal");const $=`${window.location.origin+window.location.pathname.replace("app.html","")}davet.html?token=${T.token}`;ca(r.full_name,u,$)}catch(_){console.error(_),x("İletişim hatası oluştu.")}}}function ca(e,t,n){let a=document.getElementById("inviteModal");a||(a=document.createElement("div"),a.id="inviteModal",a.className="modal-bg",document.body.appendChild(a),a.addEventListener("click",o=>{o.target===a&&a.classList.remove("open")}));const i=encodeURIComponent(`Merhaba ${e}! 🎓

Rostrum Akademi platformuna katılım davetin hazır. Aşağıdaki linke tıklayarak parolanı belirleyip hemen başlayabilirsin:

🔗 Davet Linki: ${n}`);a.innerHTML=`<div class="modal" style="max-width:480px">
    <button class="modal-close" onclick="cm('inviteModal');renderStudentsSearch()">×</button>
    <div style="text-align:center;margin-bottom:20px">
      <div style="font-size:40px;margin-bottom:8px">📬</div>
      <h2>Davet Hazır!</h2>
      <p style="font-size:13px;color:var(--text-mid);margin-top:6px">Öğrencinize aşağıdaki davet bağlantısını paylaşın</p>
    </div>

    <div style="background:var(--surface2);border:1px solid var(--border);border-radius:12px;padding:16px;margin-bottom:14px">
      <div>
        <div style="font-size:10px;font-weight:700;color:var(--text-dim);text-transform:uppercase;letter-spacing:.5px;margin-bottom:4px">Davet Edilen E-posta</div>
        <div style="font-family:'Inter',sans-serif;font-size:15px;font-weight:800;color:var(--accent);margin-bottom:12px">${v(t)}</div>
      </div>
      <div style="border-top:1px solid var(--border);padding-top:10px">
        <div style="font-size:10px;font-weight:700;color:var(--text-dim);text-transform:uppercase;letter-spacing:.5px;margin-bottom:4px">Davet Bağlantısı</div>
        <div style="font-size:12px;color:var(--blue);word-break:break-all">${n}</div>
      </div>
    </div>

    <div style="display:flex;gap:8px;margin-bottom:12px">
      <button class="btn btn-ghost" style="flex:1;justify-content:center" onclick="copyStudentInviteLink('${n}')">📋 Bağlantıyı Kopyala</button>
      <a href="https://wa.me/?text=${i}" target="_blank" class="btn btn-accent" style="flex:1;justify-content:center;text-decoration:none">💬 WhatsApp ile Gönder</a>
    </div>
  </div>`,window._pendingInvite={name:e,email:t,inviteUrl:n},G("inviteModal")}function xo(e){navigator.clipboard.writeText(e).then(()=>x("Bağlantı kopyalandı ✓")).catch(()=>{const t=document.createElement("textarea");t.value=e,document.body.appendChild(t),t.select(),document.execCommand("copy"),t.remove(),x("Bağlantı kopyalandı ✓")})}async function bo(e){var a;if(!await ie("Bu öğrenciyi silmek istediğinizden emin misiniz?"))return;const t=document.getElementById(`sturow_${e}`);t&&(t.style.transition="all 0.3s ease",t.style.opacity="0",t.style.transform="translateX(30px)",t.innerHTML='<div style="color:var(--red); font-weight:700; font-size:13px; display:flex; align-items:center; gap:6px">🗑️ Siliniyor...</div>'),await new Promise(i=>setTimeout(i,300));const{error:n}=await y.from("users").delete().eq("id",e);if(n)return x("Hata: "+n.message);l.students=l.students.filter(i=>i.id!==e),l.activeStuId===e&&(l.activeStuId=((a=l.students[0])==null?void 0:a.id)||null),we(),da(),x("Silindi")}function ho(){const e="217851738834-1cp3fk66hfhm0mr2aklsk3jphqmub2s3.apps.googleusercontent.com",t=encodeURIComponent("https://www.rostrumakademi.com/app.html"),n=encodeURIComponent("https://www.googleapis.com/auth/calendar.events"),a=`https://accounts.google.com/o/oauth2/v2/auth?client_id=${e}&redirect_uri=${t}&response_type=code&scope=${n}&access_type=offline&prompt=consent&state=google_calendar`;window.location.href=a}window.connectGoogleCalendar=ho;function Ve(){var a,i;const e=document.getElementById("view-appointments"),n=((a=l.workspace)==null?void 0:a.google_calendar_connected)?'<span style="font-size:12px;color:var(--green);font-weight:600;display:flex;align-items:center;gap:4px">✓ Google Takvim</span>':'<button class="btn btn-ghost btn-sm" onclick="connectGoogleCalendar()">🔗 Google Takvim Bağla</button>';e.innerHTML=`
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
    </div>`,zt(),tn()}function zt(){const e=l.calYear,t=l.calMonth;document.getElementById("calMonthLbl").textContent=`${MONTHS_TR[t]} ${e}`;const n=new Date(e,t,1).getDay(),a=new Date(e,t+1,0).getDate(),i=ue(),o=new Set(l.appointments.filter(d=>{const c=new Date(d.date);return c.getFullYear()===e&&c.getMonth()===t}).map(d=>new Date(d.date).getDate())),s=n===0?6:n-1;let r="";for(let d=0;d<s;d++)r+='<div class="cal-day empty"></div>';for(let d=1;d<=a;d++){const c=`${e}-${String(t+1).padStart(2,"0")}-${String(d).padStart(2,"0")}`;r+=`<div class="cal-day ${c===i?"today":""} ${c===l.calSelDay&&c!==i?"selected":""} ${o.has(d)?"has-appt":""}" onclick="selCalDay('${c}')">${d}</div>`}document.getElementById("calDaysGrid").innerHTML=r}function ko(e){l.calSelDay=l.calSelDay===e?null:e,zt(),tn()}function wo(e){l.calMonth+=e,l.calMonth>11&&(l.calMonth=0,l.calYear++),l.calMonth<0&&(l.calMonth=11,l.calYear--),rt(),zt()}function tn(){const e=ue();let t=l.appointments,n="Yaklaşan Görüşmeler";if(l.calSelDay?(t=t.filter(a=>a.date===l.calSelDay),n=new Date(l.calSelDay+"T12:00").toLocaleDateString("tr-TR",{day:"numeric",month:"long"})):t=t.filter(a=>a.date>=e).sort((a,i)=>a.date.localeCompare(i.date)).slice(0,10),document.getElementById("apptListTitle").textContent=n,!t.length){document.getElementById("apptList").innerHTML='<div class="empty"><p>Randevu yok</p></div>';return}document.getElementById("apptList").innerHTML=t.map(a=>{const i=l.students.find(r=>r.id===a.studentId),s=a.date===e?"BUGÜN":new Date(a.date+"T12:00").toLocaleDateString("tr-TR",{day:"numeric",month:"short"});return`<div data-appt-id="${a.id}" class="appt-item" style="border-left-color:${(i==null?void 0:i.color)||"#555"}">
      <div class="appt-when">${s} • ${a.time} (${a.duration} dk)</div>
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
    </div>`}).join("")}function $o(e){const t=e?l.appointments.find(n=>n.id===e):null;document.getElementById("amTitle").textContent=t?"Randevuyu Düzenle":"Yeni Randevu",document.getElementById("amId").value=e||"",document.getElementById("amStudent").innerHTML=l.students.map(n=>`<option value="${n.id}" ${(t==null?void 0:t.studentId)===n.id?"selected":""}>${v(n.name)}</option>`).join(""),document.getElementById("amDate").value=t?t.date:O(new Date),document.getElementById("amTime").value=t?t.time:"14:00",document.getElementById("amDuration").value=t?t.duration:"45",document.getElementById("amType").value=t?t.type:"Haftalık Değerlendirme",document.getElementById("amNote").value=(t==null?void 0:t.note)||"",document.getElementById("amMeetLink").value=(t==null?void 0:t.meet_link)||"",G("apptModal")}let Lt=!1;async function Eo(){if(!Lt){Lt=!0;try{await _o()}finally{Lt=!1}}}async function _o(){var s,r,d;const e=document.getElementById("amStudent").value,t=document.getElementById("amDate").value,n=document.getElementById("amTime").value;if(!e||!t||!n)return x("Tüm alanları doldurun!");const a=document.getElementById("amMeetLink").value.trim();if(a&&!a.startsWith("https://"))return x("Toplantı linki https:// ile başlamalı");if(a&&!/zoom\.us|meet\.google|teams\.microsoft|webex\.com/.test(a))return x("Geçersiz link — Zoom, Meet, Teams veya Webex linki girin");const i=document.getElementById("amId").value,o={student_id:e,coach_id:b.coachId,date:t,time:n,duration:parseInt(document.getElementById("amDuration").value),type:document.getElementById("amType").value,note:document.getElementById("amNote").value.trim(),meet_link:a};if(i){await y.from("appointments").update(o).eq("id",i);const c=l.appointments.find(p=>p.id===i);if(c&&Object.assign(c,{studentId:e,date:t,time:n,duration:o.duration,type:o.type,note:o.note}),x("Güncellendi ✓"),(s=l.workspace)!=null&&s.google_calendar_connected&&(c!=null&&c.google_event_id)){const p=l.students.find(m=>m.id===e);Kt("update",{date:t,hour:n,notes:o.note,student_name:p==null?void 0:p.name,google_event_id:c.google_event_id}).catch(()=>{})}}else{const{data:c,error:p}=await y.from("appointments").insert(o).select().single();if(p)return x("Hata: "+p.message);const m={id:c.id,studentId:c.student_id,date:c.date,time:c.time,duration:c.duration,type:c.type,note:c.note,google_event_id:null};if(l.appointments.push(m),x("Randevu eklendi ✓"),(r=l.workspace)!=null&&r.google_calendar_connected){const u=l.students.find(g=>g.id===e);Kt("create",{appointment_id:c.id,date:t,hour:n,notes:o.note,student_name:u==null?void 0:u.name}).then(g=>{g&&(m.google_event_id=g)}).catch(()=>{})}}q("apptModal"),currentTab==="todolist"?$e():(d=document.getElementById("view-appointments"))!=null&&d.classList.contains("active")&&Ve()}async function To(){var t,n;const e=document.getElementById("gcalSyncBtn");e&&(e.disabled=!0,e.textContent="⏳ Senkronize ediliyor...");try{const{data:{session:a}}=await y.auth.getSession();if(!(a!=null&&a.access_token))return x("Oturum hatası");const o=await(await fetch("/api/mailer",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${a.access_token}`},body:JSON.stringify({type:"google_calendar_sync"})})).json();if(!o.success)return x("Senkronizasyon hatası: "+(o.error||"Bilinmeyen"));(t=o.deletedIds)!=null&&t.length&&(l.appointments=l.appointments.filter(r=>!o.deletedIds.includes(r.id))),(n=o.updatedItems)==null||n.forEach(r=>{const d=l.appointments.find(c=>c.id===r.id);d&&(d.date=r.date,d.time=r.time)}),localStorage.setItem(`gcal_sync_${b.coachId}`,JSON.stringify({time:new Date().toISOString(),mode:"manual"}));const s=[];o.deleted>0&&s.push(`${o.deleted} randevu silindi`),o.updated>0&&s.push(`${o.updated} randevu güncellendi`),x(s.length?"Senkronize edildi: "+s.join(", ")+" ✓":"Senkronize edildi, değişiklik yok ✓"),Ve()}catch(a){x("Senkronizasyon hatası: "+a.message),e&&(e.disabled=!1,e.textContent="🔄 Senkronize Et")}}window.syncFromGoogle=To;async function Kt(e,t){const{data:{session:n}}=await y.auth.getSession();return n!=null&&n.access_token&&(await(await fetch("/api/mailer",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${n.access_token}`},body:JSON.stringify({type:"google_calendar_event",action:e,appointment:t})})).json()).google_event_id||null}async function So(e){var a;if(!await ie("Bu randevuyu silmek istediğinizden emin misiniz?"))return;const t=l.appointments.find(i=>i.id===e),n=document.querySelector(`[data-appt-id="${e}"]`);if(n){n.style.transition="all 0.3s ease",n.style.opacity="0",n.style.transform="translateX(30px)";const i=n.querySelector(".appt-name");i&&(i.innerHTML='<span style="color:var(--red); font-weight:700">🗑️ Siliniyor...</span>')}await new Promise(i=>setTimeout(i,300)),(a=l.workspace)!=null&&a.google_calendar_connected&&(t!=null&&t.google_event_id)&&Kt("delete",{google_event_id:t.google_event_id}).catch(()=>{}),await y.from("appointments").delete().eq("id",e),l.appointments=l.appointments.filter(i=>i.id!==e),Ve(),x("Silindi")}function Io(){const e=ue(),t=l.appointments.filter(r=>r.date>=e).sort((r,d)=>r.date.localeCompare(d.date));if(!t.length)return x("Yaklaşan randevu bulunamadı.");const n=r=>String(r).padStart(2,"0"),a=["BEGIN:VCALENDAR","VERSION:2.0","PRODID:-//Rostrum Akademi//TR","CALSCALE:GREGORIAN","METHOD:PUBLISH","BEGIN:VTIMEZONE","TZID:Europe/Istanbul","BEGIN:STANDARD","TZOFFSETFROM:+0300","TZOFFSETTO:+0300","TZNAME:TRT","DTSTART:19700101T000000","END:STANDARD","END:VTIMEZONE"];t.forEach(r=>{const d=l.students.find($=>$.id===r.studentId),[c,p,m]=r.date.split("-"),[u,g]=(r.time||"09:00").split(":"),_=`${c}${p}${m}T${u}${g}00`,T=new Date(Number(c),Number(p)-1,Number(m),Number(u),Number(g)+(r.duration||45)),f=`${T.getFullYear()}${n(T.getMonth()+1)}${n(T.getDate())}T${n(T.getHours())}${n(T.getMinutes())}00`;a.push("BEGIN:VEVENT"),a.push(`UID:ra-appt-${r.id}@rostrumakademi.com`),a.push(`DTSTART;TZID=Europe/Istanbul:${_}`),a.push(`DTEND;TZID=Europe/Istanbul:${f}`),a.push(`SUMMARY:${r.type}${d?" — "+d.name:""}`),r.note&&a.push(`DESCRIPTION:${r.note.replace(/[\r\n]+/g,"\\n")}`),r.meet_link&&a.push(`URL:${r.meet_link}`),a.push("END:VEVENT")}),a.push("END:VCALENDAR");const i=new Blob([a.join(`\r
`)],{type:"text/calendar;charset=utf-8"}),o=URL.createObjectURL(i),s=document.createElement("a");s.href=o,s.download="rostrum-randevular.ics",s.click(),setTimeout(()=>URL.revokeObjectURL(o),1e3),x(`${t.length} randevu takvim dosyasına aktarıldı ✓`)}function ht(e){return 100+(Number(e.Türkçe||0)+Number(e.Matematik||0)+Number(e.Fen||0)+Number(e.Sosyal||0))*(400/120)}function pa(e,t){const n=a=>Number(t[a]||0);return e==="AYT-SAY"?100+(n("Matematik")+n("Fizik")+n("Kimya")+n("Biyoloji"))*5:e==="AYT-EA"?100+(n("Matematik")+n("Edebiyat")+n("Tarih")+n("Coğrafya"))*5:e==="AYT-SOZ"?100+(n("Edebiyat")+n("Tarih1")+n("Tarih2")+n("Coğrafya1")+n("Coğrafya2")+n("Felsefe")+n("Din"))*5:null}const ma={"AYT-SAY":"SAY","AYT-EA":"EA","AYT-SOZ":"SÖZ"},kt={TYT:"#3B82F6",SAY:"#8B5CF6",EA:"#10B981",SÖZ:"#F59E0B"};function ua(e,t){const{type:n,nets:a}=e;if(n==="TYT"){const d=ht(a),c=kt.TYT;return`<div style="margin-top:10px;display:flex;align-items:center;gap:8px;flex-wrap:wrap">
      <span style="background:${c}18;border:1px solid ${c}40;border-radius:8px;padding:5px 12px;display:inline-flex;gap:7px;align-items:baseline">
        <span style="font-size:10px;font-weight:700;color:${c};text-transform:uppercase">TYT Puan</span>
        <span style="font-size:18px;font-weight:900;color:${c}">${d.toFixed(2)}</span>
      </span>
    </div>`}const i=ma[n];if(!i)return"";const o=kt[i]||"#64748B",s=pa(n,a),r=t.filter(d=>d.type==="TYT"&&d.date<=e.date).sort((d,c)=>c.date.localeCompare(d.date))[0];if(r){const d=ht(r.nets),c=d*.4+s*.6;return`<div style="margin-top:10px;display:flex;align-items:center;gap:10px;flex-wrap:wrap">
      <span style="background:${o}18;border:1px solid ${o}40;border-radius:8px;padding:5px 12px;display:inline-flex;gap:7px;align-items:baseline">
        <span style="font-size:10px;font-weight:700;color:${o};text-transform:uppercase">${i} Puan</span>
        <span style="font-size:18px;font-weight:900;color:${o}">${c.toFixed(2)}</span>
      </span>
      <span style="font-size:11px;color:var(--text-dim)">TYT×0.4 <b>${(d*.4).toFixed(1)}</b> · AYT×0.6 <b>${(s*.6).toFixed(1)}</b></span>
    </div>`}return`<div style="margin-top:10px;display:flex;align-items:center;gap:8px;flex-wrap:wrap">
    <span style="background:${o}18;border:1px solid ${o}40;border-radius:8px;padding:5px 12px;display:inline-flex;gap:7px;align-items:baseline">
      <span style="font-size:10px;font-weight:700;color:${o};text-transform:uppercase">AYT ${i} Ham</span>
      <span style="font-size:18px;font-weight:900;color:${o}">${s.toFixed(2)}</span>
    </span>
    <span style="font-size:10px;color:var(--text-dim);font-style:italic">TYT etkisi dahil değil</span>
  </div>`}function zo(){var d,c;const e=document.getElementById("emPuanDisplay");if(!e)return;const t=(d=document.getElementById("emExamType"))==null?void 0:d.value;if(!t)return;const n={};if((EXAM_DEFS[t]||[]).forEach(p=>{const m=ae[p]||{};n[p]=Math.max(0,(m.dogru||0)-(m.yanlis||0)/4)}),t==="TYT"){const p=ht(n),m=kt.TYT;e.innerHTML=`<div style="background:${m}12;border:1px solid ${m}35;border-radius:10px;padding:10px 14px;display:flex;align-items:center;gap:10px">
      <span style="font-size:11px;font-weight:700;color:${m};text-transform:uppercase;letter-spacing:.4px">🎯 TYT Puan</span>
      <span style="font-size:24px;font-weight:900;color:${m};letter-spacing:-.5px">${p.toFixed(2)}</span>
    </div>`;return}const a=ma[t],i=kt[a]||"#64748B",o=pa(t,n);if(o===null){e.innerHTML="";return}const s=(c=document.getElementById("emStudent"))==null?void 0:c.value,r=s?[...l.exams].filter(p=>p.studentId===s&&p.type==="TYT").sort((p,m)=>m.date.localeCompare(p.date))[0]:null;if(r){const p=ht(r.nets),m=p*.4+o*.6;e.innerHTML=`<div style="background:${i}12;border:1px solid ${i}35;border-radius:10px;padding:10px 14px">
      <div style="display:flex;align-items:center;gap:10px;flex-wrap:wrap">
        <span style="font-size:11px;font-weight:700;color:${i};text-transform:uppercase;letter-spacing:.4px">🎯 ${a} Puan</span>
        <span style="font-size:24px;font-weight:900;color:${i};letter-spacing:-.5px">${m.toFixed(2)}</span>
        <span style="font-size:11px;color:var(--text-dim)">TYT×0.4=${(p*.4).toFixed(1)} · AYT×0.6=${(o*.6).toFixed(1)}</span>
      </div>
      <div style="font-size:10px;color:var(--text-dim);margin-top:3px">TYT: ${r.date} tarihli deneme baz alındı</div>
    </div>`}else e.innerHTML=`<div style="background:${i}12;border:1px solid ${i}35;border-radius:10px;padding:10px 14px;display:flex;align-items:center;gap:10px;flex-wrap:wrap">
      <span style="font-size:11px;font-weight:700;color:${i};text-transform:uppercase;letter-spacing:.4px">🎯 AYT ${a} Ham</span>
      <span style="font-size:24px;font-weight:900;color:${i};letter-spacing:-.5px">${o.toFixed(2)}</span>
      <span style="font-size:10px;color:var(--text-dim);font-style:italic">TYT puanı bulunamadı</span>
    </div>`}function Bo(e,t){var Q;if(!e.length)return"";const n=[...e].sort((R,N)=>R.date.localeCompare(N.date)).slice(-8),a=n[n.length-1],i=n.length>=2?n[n.length-2]:null,o=EXAM_DEFS[a.type]||[],s=(t==null?void 0:t.color)||"#e8622a",r=o.reduce((R,N)=>{var K;return R+Number(((K=a.nets)==null?void 0:K[N])||0)},0),d=i?o.reduce((R,N)=>{var K;return R+Number(((K=i.nets)==null?void 0:K[N])||0)},0):null,c=d!==null?r-d:null,p=o.length?o.reduce((R,N)=>{var K,re;return Number(((K=a.nets)==null?void 0:K[N])||0)<Number(((re=a.nets)==null?void 0:re[R])||0)?N:R},o[0]):null,m=c===null?"var(--text-dim)":c>=0?"#3ecf8e":"#ef4444",u=c===null?"—":(c>=0?"+":"")+c.toFixed(1),g=`<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin-bottom:16px">
    <div style="background:var(--surface2);border:1px solid var(--border);border-radius:10px;padding:12px;text-align:center">
      <div style="font-size:9px;font-weight:700;color:var(--text-dim);text-transform:uppercase;letter-spacing:.6px;margin-bottom:5px">Son Deneme</div>
      <div style="font-family:'Inter',sans-serif;font-size:26px;font-weight:900;color:${s};line-height:1">${r.toFixed(1)}</div>
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
  </div>`,_=o.map(R=>{var hn;const N=Number(((hn=a.nets)==null?void 0:hn[R])||0),K=(EXAM_SORU[a.type]||{})[R]||40,re=Math.min(100,Math.max(0,N/K*100)),xe=N>=K*.6?"#3ecf8e":N>=K*.35?"#f0a500":"#ef4444";return`<div style="margin-bottom:11px">
      <div style="display:flex;justify-content:space-between;align-items:baseline;margin-bottom:4px">
        <span style="font-size:12px;font-weight:600;color:var(--text)">${v(R)}</span>
        <span style="font-size:14px;font-weight:800;color:${xe};font-family:'Inter',sans-serif">${N.toFixed(1)}</span>
      </div>
      <div style="background:rgba(255,255,255,0.07);border-radius:4px;height:7px;overflow:hidden">
        <div style="width:${re.toFixed(1)}%;height:100%;background:${xe};border-radius:4px"></div>
      </div>
    </div>`}).join("");if(n.length<2)return`<div class="card cp" style="margin-bottom:16px">
    <div style="font-size:11px;font-weight:700;margin-bottom:12px;color:var(--text-mid);text-transform:uppercase;letter-spacing:.5px">📊 Deneme Özeti</div>
    ${g}
    <div style="font-size:10px;font-weight:700;color:var(--text-dim);text-transform:uppercase;letter-spacing:.5px;margin-bottom:10px">Son Deneme · Derse Göre</div>
    ${_}
  </div>`;const T=n.map(R=>(EXAM_DEFS[R.type]||[]).reduce((K,re)=>{var xe;return K+Number(((xe=R.nets)==null?void 0:xe[re])||0)},0)),f=Math.max(...T,10),$=600,w=160,B=40,h=16,S=28,I=30,z=$-B-h,E=w-S-I,A=n.length,C=R=>B+(A<=1?z/2:R/(A-1)*z),L=R=>S+E-R/f*E,k=f/4,D=k<=10?10:k<=20?20:k<=25?25:50,j=[];for(let R=0;R<=f+D;R+=D)R<=f*1.12&&j.push(R);const P=j.map(R=>{const N=L(R).toFixed(1);return`<line x1="${B}" y1="${N}" x2="${$-h}" y2="${N}" stroke="rgba(255,255,255,0.05)" stroke-width="1"/><text x="${B-5}" y="${(L(R)+3.5).toFixed(1)}" text-anchor="end" font-size="9" fill="rgba(200,215,230,0.28)" font-family="system-ui,sans-serif">${R}</text>`}).join(""),Y=n.map((R,N)=>`${C(N).toFixed(1)},${L(T[N]).toFixed(1)}`).join(" "),H=`M ${C(0).toFixed(1)},${L(T[0]).toFixed(1)} `+n.slice(1).map((R,N)=>`L ${C(N+1).toFixed(1)},${L(T[N+1]).toFixed(1)}`).join(" ")+` L ${C(A-1).toFixed(1)},${(S+E).toFixed(1)} L ${C(0).toFixed(1)},${(S+E).toFixed(1)} Z`,F="ag"+Math.random().toString(36).slice(2,7),V=n.map((R,N)=>{const K=C(N).toFixed(1),re=L(T[N]).toFixed(1);return`<circle cx="${K}" cy="${re}" r="5" fill="${s}" stroke="#0d0d0f" stroke-width="2.5"/><text x="${K}" y="${(L(T[N])-10).toFixed(1)}" text-anchor="middle" font-size="9.5" font-weight="700" fill="${s}" font-family="system-ui,sans-serif">${T[N].toFixed(0)}</text>`}).join(""),Z=n.map((R,N)=>{let K=R.name.replace(/Deneme\s+/,"#").replace(/^(TYT|AYT-SAY|AYT-EA|AYT-SOZ)\s+/,"");return K.length>7&&(K=K.slice(0,6)+"…"),`<text x="${C(N).toFixed(1)}" y="${(w-I+14).toFixed(1)}" text-anchor="middle" font-size="9" fill="rgba(200,215,230,0.35)" font-family="system-ui,sans-serif">${v(K)}</text>`}).join(""),te=`<svg viewBox="0 0 ${$} ${w}" style="width:100%;height:auto;display:block" xmlns="http://www.w3.org/2000/svg">
  <defs><linearGradient id="${F}" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="${s}" stop-opacity="0.2"/>
    <stop offset="100%" stop-color="${s}" stop-opacity="0"/>
  </linearGradient></defs>
  ${P}
  <path d="${H}" fill="url(#${F})"/>
  <polyline points="${Y}" fill="none" stroke="${s}" stroke-width="2.5" stroke-linejoin="round" stroke-linecap="round"/>
  ${V}${Z}
</svg>`;return`<div class="card cp" style="margin-bottom:16px">
    <div style="font-size:11px;font-weight:700;margin-bottom:12px;color:var(--text-mid);text-transform:uppercase;letter-spacing:.5px">📊 Deneme Takibi</div>
    ${g}
    <div style="font-size:10px;font-weight:700;color:var(--text-dim);text-transform:uppercase;letter-spacing:.5px;margin-bottom:8px">Toplam Net Trendi · Son ${A} Deneme</div>
    ${te}
    <div style="font-size:10px;font-weight:700;color:var(--text-dim);text-transform:uppercase;letter-spacing:.5px;margin:16px 0 10px">Son Deneme · Derse Göre</div>
    ${_}
  </div>`}function Ze(){const e=document.getElementById("view-exams"),t=l.students.find(o=>o.id===l.activeStuId),n=[...l.exams].filter(o=>o.studentId===l.activeStuId).sort((o,s)=>s.date.localeCompare(o.date)),a=Bo(n,t),i=n.length?n.map(o=>{const s=EXAM_DEFS[o.type]||[],r=s.reduce((d,c)=>{var p;return d+Number(((p=o.nets)==null?void 0:p[c])||0)},0).toFixed(1);return`<div style="background:var(--surface);border:1px solid var(--border);border-radius:12px;padding:16px;margin-bottom:10px;">
      <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:12px">
        <div>
          <div style="font-size:14px;font-weight:700">${v(o.name)}</div>
          <div style="font-size:11px;color:var(--text-dim);margin-top:2px">${new Date(o.date+"T12:00").toLocaleDateString("tr-TR",{day:"numeric",month:"long",year:"numeric"})}</div>
        </div>
        <div style="display:flex;align-items:center;gap:8px">
          <div style="text-align:right">
            <div style="font-size:10px;color:var(--text-dim)">Toplam Net</div>
            <div style="font-family:'Inter',sans-serif;font-size:22px;font-weight:900;line-height:1">${r}</div>
          </div>
          <button class="btn btn-ghost btn-xs" onclick="openCommentModal('${o.id}')">💬 Yorumla</button>
        </div>
      </div>
      <div style="display:flex;gap:8px;flex-wrap:wrap">
        ${s.map(d=>{var m;const c=Number(((m=o.nets)==null?void 0:m[d])||0),p=c>=20?"var(--green)":c>=12?"var(--accent)":"var(--red)";return`<div style="background:var(--surface2);border:1px solid var(--border);border-radius:9px;padding:8px 12px;min-width:70px;text-align:center">
            <div style="font-size:10px;color:var(--text-dim);font-weight:600;text-transform:uppercase;letter-spacing:.3px;margin-bottom:4px">${d}</div>
            <div style="font-family:'Inter',sans-serif;font-size:18px;font-weight:800;color:${p}">${c}</div>
          </div>`}).join("")}
      </div>
      ${ua(o,n)}
      ${o.note?`<div style="margin-top:10px;font-size:12px;color:var(--text-mid);font-style:italic">"${v(o.note)}"</div>`:""}
      ${(()=>{if(!o.examDetails||!Object.keys(o.examDetails).length)return"";const d=s.map(c=>{const p=o.examDetails[c];if(!p)return"";const m=Math.max(0,(p.dogru||0)-(p.yanlis||0)/4).toFixed(2),u=p.yanlis_konular||[];return`<div style="padding:6px 0;border-bottom:1px solid var(--border)">
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
    ${i}`}let ga=null,De="TYT";const Mo=["TYT","AYT-SAY","AYT-EA","AYT-SOZ"];function va(){const t=l.exams.filter(s=>s.studentId===ga).filter(s=>s.type===De&&s.examDetails&&Object.keys(s.examDetails).length),n={};t.forEach(s=>{Object.entries(s.examDetails).forEach(([r,d])=>{(d.yanlis_konular||[]).forEach(c=>{const p=r+"§"+c;n[p]=(n[p]||0)+1})})});const a=Object.entries(n).sort((s,r)=>r[1]-s[1]).map(([s,r])=>{const[d,c]=s.split("§"),p=Math.round(r/Math.max(t.length,1)*100),m=r>=3?"var(--red)":r===2?"var(--accent)":"var(--text-mid)";return`<tr style="border-bottom:1px solid var(--border)">
        <td style="padding:8px 10px;font-size:12px;color:var(--text-dim);white-space:nowrap">${v(d)}</td>
        <td style="padding:8px 10px;font-size:13px;font-weight:600">${v(c)}</td>
        <td style="padding:8px 10px;text-align:center">
          <span style="font-size:14px;font-weight:800;color:${m}">${r}</span>
          <span style="font-size:10px;color:var(--text-dim)">/${t.length}</span>
        </td>
        <td style="padding:8px 10px;min-width:90px">
          <div style="height:6px;border-radius:3px;background:var(--surface2);overflow:hidden">
            <div style="height:100%;width:${p}%;background:${m};border-radius:3px;transition:width .3s"></div>
          </div>
        </td>
      </tr>`}),i=Mo.map(s=>`<button onclick="window._krType='${s}';_krRenderBody()" style="padding:6px 14px;border-radius:20px;border:1px solid ${s===De?"var(--accent)":"var(--border)"};background:${s===De?"var(--accent-dim)":"transparent"};color:${s===De?"var(--accent)":"var(--text-dim)"};font-size:12px;cursor:pointer;font-weight:${s===De?700:400}">${s}</button>`).join(""),o=a.length?`<div style="font-size:11px;color:var(--text-dim);margin-bottom:12px">${t.length} denemeden derlendi · <b>${a.length}</b> farklı yanlış konu · 🔴 ≥3 tekrar kritik</div>
       <div style="overflow-x:auto">
       <table style="width:100%;border-collapse:collapse">
         <thead><tr style="border-bottom:2px solid var(--border)">
           <th style="padding:6px 10px;font-size:10px;color:var(--text-dim);text-align:left;text-transform:uppercase;letter-spacing:.5px">Ders</th>
           <th style="padding:6px 10px;font-size:10px;color:var(--text-dim);text-align:left;text-transform:uppercase;letter-spacing:.5px">Konu</th>
           <th style="padding:6px 10px;font-size:10px;color:var(--text-dim);text-align:center;text-transform:uppercase;letter-spacing:.5px">Tekrar</th>
           <th style="padding:6px 10px;font-size:10px;color:var(--text-dim);text-align:left;text-transform:uppercase;letter-spacing:.5px">Sıklık</th>
         </tr></thead>
         <tbody>${a.join("")}</tbody>
       </table></div>`:`<div style="text-align:center;padding:40px;color:var(--text-dim);font-size:13px">${t.length?"Bu denemeler için henüz konu işaretlenmemiş.":De+" tipi deneme kaydı yok."}</div>`;document.getElementById("konuRaporuBody").innerHTML=`
    <div style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:16px">${i}</div>
    ${o}`}window._krRenderBody=va;function Do(e){ga=e;const t=l.exams.find(n=>n.studentId===e&&n.examDetails&&Object.keys(n.examDetails).length);De=(t==null?void 0:t.type)||"TYT",va(),G("konuRaporuModal")}window.openKonuRaporu=Do;function Ao(e){const t=l.exams.find(n=>n.id===e);document.getElementById("cmExamId").value=e,document.getElementById("cmText").value=(t==null?void 0:t.coachComment)||"",G("commentModal")}async function Co(){const e=document.getElementById("cmExamId").value,t=document.getElementById("cmText").value.trim();await y.from("exams").update({coach_comment:t}).eq("id",e);const n=l.exams.find(a=>a.id===e);n&&(n.coachComment=t),q("commentModal"),Ze(),x("Yorum kaydedildi ✓")}async function Lo(e){await ie("Bu denemeyi silmek istediğinizden emin misiniz?")&&(await y.from("exams").delete().eq("id",e),l.exams=l.exams.filter(t=>t.id!==e),Ze(),x("Silindi"))}function fa(){const e=document.getElementById("view-messages");e.innerHTML=`<div class="sh" style="margin-bottom:14px"><h2>Mesajlar</h2></div>
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
        ${l.msgThread?Se(l.msgThread,"coach"):'<div class="no-chat-sel">Öğrenci seçin</div>'}
      </div>
    </div>`,l.msgThread&&Ie()}async function jo(e){l.msgThread=e;const t=(l.messages[e]||[]).filter(n=>n.from==="student"&&!n.read&&n._id).map(n=>n._id);t.length&&await y.from("messages").update({read:!0}).in("id",t),(l.messages[e]||[]).forEach(n=>{n.from==="student"&&(n.read=!0)}),document.getElementById("msgMain").innerHTML=Se(e,"coach"),document.querySelectorAll(".msg-contact").forEach(n=>n.classList.remove("active")),l.students.forEach((n,a)=>{var i;n.id===e&&((i=document.querySelectorAll(".msg-contact")[a])==null||i.classList.add("active"))}),Ie(),sn()}let Ce=null;function Se(e,t){const n=l.students.find(s=>s.id===e),a=l.messages[e]||[],i=(n==null?void 0:n.color)||"#E8613A",o=a.map(s=>{const r=t==="coach"&&s.from==="coach"||t==="student"&&s.from==="student",d=s.image_url?`<img src="${v(s.image_url)}" onclick="window.open('${v(s.image_url)}','_blank')" />`:"",c=s.text?v(s.text):"",p=d+(d&&c?`<div style="margin-top:5px">${c}</div>`:c);return r?`<div class="msg-row out">
        <div class="msg-bubble out">${p}<div class="msg-bubble-time">${s.time}</div></div>
      </div>`:`<div class="msg-row in">
        <div class="msg-avatar-sm" style="background:${i}">${(n==null?void 0:n.name[0])||"?"}</div>
        <div class="msg-bubble in">${p}<div class="msg-bubble-time">${s.time}</div></div>
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
  </div>`}window._pickMsgImg=function(e,t,n){const a=e.files[0];if(!a)return;if(a.size>5*1024*1024){x("Dosya max 5 MB olabilir"),e.value="";return}Ce={file:a};const i=document.getElementById("msgImgPreview"),o=document.getElementById("msgImgThumb"),s=document.getElementById("msgImgName");if(a.type.startsWith("image/")){const r=new FileReader;r.onload=d=>{o.src=d.target.result,o.style.display="block"},r.readAsDataURL(a)}else o.style.display="none";s.textContent=a.name,i.style.display="flex",e.value=""};window._cancelMsgImg=function(){Ce=null,document.getElementById("msgImgPreview").style.display="none"};window._handleMsgPaste=function(e,t,n){var i;const a=(i=e.clipboardData)==null?void 0:i.items;if(a){for(const o of a)if(o.type.startsWith("image/")){e.preventDefault();const s=o.getAsFile();if(!s)return;if(s.size>5*1024*1024){x("Dosya max 5 MB olabilir");return}Ce={file:s};const r=new FileReader;r.onload=d=>{const c=document.getElementById("msgImgPreview"),p=document.getElementById("msgImgThumb"),m=document.getElementById("msgImgName");p.src=d.target.result,p.style.display="block",m.textContent="Yapıştırılan görsel",c&&(c.style.display="flex")},r.readAsDataURL(s);return}}};async function Po(e,t){var d,c,p;const n=document.getElementById("msgInput"),a=n.value.trim();if(!a&&!Ce)return;const i=b.coachId||((d=l.students.find(m=>m.id===e))==null?void 0:d.coachId)||((c=l.students.find(m=>m.id===b.studentId))==null?void 0:c.coachId);let o=null;if(Ce){const m=Ce.file,g=((p=m.name)!=null&&p.includes(".")?m.name.split(".").pop():"")||(m.type==="image/png"?"png":m.type==="image/webp"?"webp":"jpg"),_=`${e}/${Date.now()}.${g}`,{error:T}=await y.storage.from("chat_images").upload(_,m,{upsert:!0});if(T){x("Görsel yüklenemedi: "+T.message);return}const{data:f}=y.storage.from("chat_images").getPublicUrl(_);o=f.publicUrl,Ce=null,document.getElementById("msgImgPreview").style.display="none"}const{data:s,error:r}=await y.from("messages").insert({student_id:e,coach_id:i,from_role:t,text:a||null,image_url:o,read:!1}).select().single();if(r){x("Hata: "+r.message);return}l.messages[e]||(l.messages[e]=[]),l.messages[e].push({_id:s.id,from:t,text:a||"",image_url:o,time:new Date().toLocaleTimeString("tr-TR",{hour:"2-digit",minute:"2-digit"}),read:!1}),n.value="",n.style.height="auto",currentTab==="messages"&&(document.getElementById("msgMain").innerHTML=Se(e,"coach"),Ie()),currentTab==="smessages"&&(document.getElementById("msgMain").innerHTML=Se(e,"student"),Ie()),t==="student"&&i&&y.auth.getSession().then(({data:{session:m}})=>{var g;const u=m==null?void 0:m.access_token;u&&fetch("/api/mailer",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${u}`},body:JSON.stringify({type:"new_message",coach_id:i,student_name:((g=b.dbUser)==null?void 0:g.full_name)||"Öğrenciniz",message_preview:a?a.slice(0,200):"📷 Görsel gönderdi"})}).catch(()=>{})})}function Ie(){setTimeout(()=>{const e=document.getElementById("msgBody");e&&(e.scrollTop=e.scrollHeight)},60)}function Bt(){var u;const e=document.getElementById("view-portal");if(!e)return;let t=l.students.find(g=>g.id===b.studentId);if(!t&&l.students.length>0&&(t=l.students[0]),!t){e.innerHTML=`<div style="text-align:center;padding:60px 20px;color:var(--text-mid)">
      <div style="font-size:36px;margin-bottom:12px">⏳</div>
      <p style="font-size:14px">Profil yükleniyor...</p>
    </div>`,setTimeout(()=>{l.students.length&&Bt()},800);return}b.studentId||(b.studentId=t.id),l.activeStuId=t.id;const n=ue(),a=`${t.id}_${n}`,i=l.tasks[a]||[],o=i.filter(g=>g.done).length,s=l.appointments.filter(g=>g.studentId===t.id&&g.date>=n).sort((g,_)=>g.date.localeCompare(_.date))[0],r=(l.messages[t.id]||[]).filter(g=>g.from==="coach"&&!g.read).length,d=((u=l.konuMastery)==null?void 0:u[t.id])||{},c=[],p=new Date;p.setDate(p.getDate()-30),Object.entries(d).forEach(([g,_])=>{Object.entries(_).forEach(([T,f])=>{if(f.status==="td"||f.status==="not_started")return;const $=f.last_review_date?new Date(f.last_review_date):null,w=$?Math.floor((Date.now()-$.getTime())/864e5):999,B=f.stars<=2,h=w>20;(B||h)&&c.push({konu:T,subject:g,stars:f.stars,daysSince:w})})}),c.sort((g,_)=>g.stars-_.stars||_.daysSince-g.daysSince);const m=c.length>0?`
    <div class="card cp" style="border-color:rgba(239,68,68,.3)">
      <div class="portal-sec-title">🔄 Tekrar Gereken Konular <span style="font-size:11px;background:rgba(239,68,68,.12);color:#ef4444;padding:2px 8px;border-radius:99px;font-weight:700">${c.length}</span></div>
      ${c.slice(0,5).map(g=>{const _=Ke[g.stars];return g.daysSince<999&&`${g.daysSince}`,`<div style="display:flex;align-items:center;gap:10px;padding:7px 0;border-bottom:1px solid var(--border)">
          <span style="font-size:13px;color:${_.color};font-weight:800;white-space:nowrap">${"⭐".repeat(g.stars)||"○"}</span>
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
          ${i.map((g,_)=>`
            <div data-task-id="${g._id}" class="task-card task-${g.type} ${g.done?"done":""}" style="margin-bottom:6px">
              <div class="tc-check ${g.done?"on":""}" onclick="stuToggleTask('${n}',${_})"></div>
              <div class="tc-body">
                <div class="tc-type">${lt(g.type)}${g.exam?" · "+g.exam:""}</div>
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
          ${s?`<div style="font-size:12px;color:var(--text-mid);margin-bottom:3px">${new Date(s.date+"T12:00").toLocaleDateString("tr-TR",{weekday:"long",day:"numeric",month:"long"})}</div>
          <div style="font-family:'Inter',sans-serif;font-size:20px;font-weight:700">${s.time}</div>
          <div style="font-size:12px;color:var(--text-mid);margin-top:3px">${v(s.type)} · ${s.duration} dk</div>`:'<div style="font-size:13px;color:var(--text-dim)">Yaklaşan randevu yok</div>'}
        </div>
        ${r>0?`<div class="card cp" style="border-color:var(--accent);cursor:pointer" onclick="switchTab('smessages')">
          <div style="display:flex;align-items:center;gap:10px">
            <span style="font-size:22px">💬</span>
            <div><div style="font-weight:700">${r} yeni mesaj</div><div style="font-size:12px;color:var(--text-mid)">Koçundan</div></div>
          </div>
        </div>`:""}
        ${m}
      </div>
    </div>`}async function Ro(e,t){var s;const n=l.students.find(r=>r.id===b.studentId);if(!n)return;const a=`${n.id}_${e}`,i=(s=l.tasks[a])==null?void 0:s[t];if(!i)return;const o=!i.done;await y.from("tasks").update({done:o}).eq("id",i._id),i.done=o,Bt()}function ze(){const e=l.students.find(p=>p.id===b.studentId);if(!e)return;const t=document.getElementById("view-sportal"),n=e.weekStart??0,a=ne(l.weekOffset,n),i=J(a,6),o=ue(),s=localStorage.getItem("ra_program_mode")||"weekly";let r="";for(let p=0;p<7;p++){const m=J(a,p),u=O(m),g=u===o,_=`${e.id}_${u}`,T=l.tasks[_]||[],f=T.reduce((S,I)=>S+Number(I.duration),0),$=T.reduce((S,I)=>S+(I.done?Number(I.duration):0),0);DAYS_TR[(n+p)%7];const w=[...T];s==="hourly"&&w.sort((S,I)=>S.start_time&&!I.start_time?-1:!S.start_time&&I.start_time?1:S.start_time&&I.start_time?S.start_time.localeCompare(I.start_time):0);const B=w.map(S=>{const I=T.indexOf(S),z=S.start_time?`<div class="tc-time-badge">🕒 ${S.start_time}</div>`:"";return`
        <div data-task-id="${S._id}" class="task-card task-${S.type} ${S.done?"done":""} ${S.start_time?"hourly-card":""}" onclick="openTaskDetail('${u}',${I},'student')" style="cursor:pointer">
          <div class="tc-check ${S.done?"on":""}" onclick="event.stopPropagation();stuToggleTask2('${u}',${I})"></div>
          <div class="tc-body">
            ${z}
            <div class="tc-type">${lt(S.type)}${S.exam?" · "+S.exam:""}</div>
            <div class="tc-subject">${v(S.subject)}</div>
            <div class="tc-meta">${S.duration} dk</div>
          </div>
        </div>`}).join(""),h=["Pzt","Sal","Çar","Per","Cum","Cmt","Paz"][(n+p)%7];r+=`<div class="day-col ${g?"today":""}">
      <div class="day-hd">
        <div><div class="day-name-lbl">${h}</div><div class="day-num">${m.getDate()}</div></div>
        <span class="day-badge" style="font-size:8.5px">${nt($)} / ${nt(f)}</span>
      </div>
      <div class="day-tasks-list">${B||'<div class="empty" style="padding:8px 0"><p style="font-size:11px">Görev yok</p></div>'}</div>
    </div>`}const d=qt(),c=d.days;t.innerHTML=`
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
        <button class="btn btn-xs ${s==="weekly"?"btn-accent":"btn-ghost"}" onclick="setProgramMode('weekly')" style="padding:4px 10px;font-size:11px;font-weight:700;border-radius:8px">📋 Günlük Serbest</button>
        <button class="btn btn-xs ${s==="hourly"?"btn-accent":"btn-ghost"}" onclick="setProgramMode('hourly')" style="padding:4px 10px;font-size:11px;font-weight:700;border-radius:8px">🕒 Saatlik Düzen</button>
      </div>
    </div>
    <div class="week-grid">${r}</div>`}async function No(e,t){var s;const n=l.students.find(r=>r.id===b.studentId);if(!n)return;const a=`${n.id}_${e}`,i=(s=l.tasks[a])==null?void 0:s[t];if(!i)return;const o=!i.done;if(await y.from("tasks").update({done:o}).eq("id",i._id),i.done=o,ze(),o&&e===ue()){const r=l.tasks[a]||[];r.length>0&&r.every(d=>d.done)&&Ho()}}function Ho(){if(document.getElementById("_celebOverlay"))return;if(!document.getElementById("_celebStyle")){const t=document.createElement("style");t.id="_celebStyle",t.textContent="@keyframes celebPop{0%{opacity:0;transform:scale(.7) translateY(20px)}60%{opacity:1;transform:scale(1.05) translateY(-4px)}100%{opacity:1;transform:scale(1) translateY(0)}}@keyframes celebFade{0%,70%{opacity:1}100%{opacity:0}}",document.head.appendChild(t)}const e=document.createElement("div");e.id="_celebOverlay",e.style.cssText="position:fixed;inset:0;z-index:99999;display:flex;align-items:center;justify-content:center;pointer-events:none",e.innerHTML=`<div style="background:var(--surface);border:2px solid var(--green);border-radius:20px;padding:28px 36px;text-align:center;box-shadow:0 20px 60px rgba(0,0,0,.25);animation:celebPop .4s ease-out,celebFade 3.5s ease-in-out forwards;pointer-events:auto">
    <div style="font-size:52px;margin-bottom:8px">🏆</div>
    <div style="font-size:18px;font-weight:800;color:var(--green);margin-bottom:4px">Günü Tamamladın!</div>
    <div style="font-size:13px;color:var(--text-mid)">Bugünkü tüm görevleri bitirdin. Harikasın 💪</div>
  </div>`,document.body.appendChild(e),setTimeout(()=>e.remove(),3600)}function Yo(e){l.weekOffset+=e,we(),ze()}let Le={};window._fbChip=function(e,t,n){if(Le[e]=isNaN(t)?t:Number(t),n.parentElement.querySelectorAll("[data-fb-val]").forEach(a=>{const i=a.dataset.fbVal==t;a.style.background=i?a.dataset.fbBg:"var(--surface2)",a.style.borderColor=i?a.dataset.fbColor:"var(--border)",a.style.color=i?a.dataset.fbColor:"var(--text-mid)",a.style.fontWeight=i?"700":"600"}),e==="status"){const a=document.getElementById("fbBlockerSection");a&&(a.style.display=t==="completed"?"none":"block")}};window._fbStar=function(e){Le.focus=e;for(let t=1;t<=5;t++){const n=document.getElementById("fbStar"+t);n&&(n.textContent=t<=e?"★":"☆",n.style.color=t<=e?"#f0a500":"var(--text-dim)")}};function Ko(e){const t=e.student_feedback||{},n=t.status||(e.done?"completed":""),a=t.time_spent!=null?Math.floor(t.time_spent/60):"",i=t.time_spent!=null?t.time_spent%60:"",o=t.focus||0,s=t.difficulty||0,r=t.blocker||"";Le={status:n||null,focus:o,difficulty:s,blocker:r};const d=[{v:"completed",l:"✓ Tamamladım",c:"#3ecf8e",bg:"rgba(62,207,142,.12)"},{v:"partial",l:"~ Kısmen",c:"#f0a500",bg:"rgba(240,165,0,.12)"},{v:"failed",l:"✕ Yapamadım",c:"#ef4444",bg:"rgba(239,68,68,.12)"}],c=[{v:1,l:"Çok Kolay",c:"#3ecf8e",bg:"rgba(62,207,142,.1)"},{v:2,l:"Kolay",c:"#86efac",bg:"rgba(134,239,172,.1)"},{v:3,l:"Orta",c:"#f0a500",bg:"rgba(240,165,0,.1)"},{v:4,l:"Zor",c:"#fb923c",bg:"rgba(251,146,60,.1)"},{v:5,l:"Çok Zor",c:"#ef4444",bg:"rgba(239,68,68,.1)"}],p=[{v:"time",l:"Zamanım yetmedi"},{v:"topic",l:"Konuyu anlamadım"},{v:"hard",l:"Kaynak çok zordu"},{v:"moti",l:"İstek/motivasyonum yoktu"}];return`<div style="background:var(--surface2);border:1px solid var(--border);border-radius:11px;padding:14px 16px;margin-bottom:14px">

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
          style="flex:1;padding:7px 3px;border-radius:8px;border:1.5px solid ${s===m.v?m.c:"var(--border)"};background:${s===m.v?m.bg:"var(--surface2)"};color:${s===m.v?m.c:"var(--text-mid)"};font-size:10px;font-weight:${s===m.v?"700":"600"};cursor:pointer;transition:all .15s;text-align:center">${v(m.l)}</button>`).join("")}
      </div>
    </div>

    <div id="fbBlockerSection" style="display:${n&&n!=="completed"?"block":"none"}">
      <div style="font-size:10px;font-weight:700;color:var(--text-dim);text-transform:uppercase;letter-spacing:.5px;margin-bottom:8px">Neden Yapamadın?</div>
      <div style="display:flex;flex-wrap:wrap;gap:6px">
        ${p.map(m=>`<button onclick="window._fbChip('blocker','${m.v}',this)" data-fb-val="${m.v}" data-fb-color="#fb923c" data-fb-bg="rgba(251,146,60,.1)"
          style="padding:6px 11px;border-radius:8px;border:1.5px solid ${r===m.v?"#fb923c":"var(--border)"};background:${r===m.v?"rgba(251,146,60,.1)":"var(--surface2)"};color:${r===m.v?"#fb923c":"var(--text-mid)"};font-size:11px;font-weight:${r===m.v?"700":"600"};cursor:pointer;transition:all .15s">${v(m.l)}</button>`).join("")}
      </div>
    </div>

  </div>`}function Oo(e){const t=e.student_feedback||{};if(!(t.status||t.focus||t.difficulty||t.time_spent>0||t.blocker))return"";const a={completed:{l:"Tamamladı",c:"#3ecf8e",bg:"rgba(62,207,142,.1)"},partial:{l:"Kısmen Tamamladı",c:"#f0a500",bg:"rgba(240,165,0,.1)"},failed:{l:"Yapamadı",c:"#ef4444",bg:"rgba(239,68,68,.1)"}},i={1:"Çok Kolay",2:"Kolay",3:"Orta",4:"Zor",5:"Çok Zor"},o={time:"Zamanı yetmedi",topic:"Konuyu anlayamadı",hard:"Kaynak çok zordu",moti:"Motivasyon yok"},s=a[t.status],r=t.time_spent,d=r>0?(Math.floor(r/60)>0?Math.floor(r/60)+"sa ":"")+(r%60>0?r%60+"dk":""):null,c=t.focus?"★".repeat(t.focus)+"☆".repeat(5-t.focus):null,p={1:"#3ecf8e",2:"#86efac",3:"#f0a500",4:"#fb923c",5:"#ef4444"},m=t.difficulty?p[t.difficulty]:"var(--text-mid)";return`<div style="background:var(--surface2);border:1px solid var(--border);border-radius:11px;padding:12px 16px;margin-bottom:14px">
    <div style="font-size:10px;font-weight:700;color:var(--text-dim);text-transform:uppercase;letter-spacing:.5px;margin-bottom:10px">💬 Geri Bildirim</div>

    <!-- Satır 1: durum + süre -->
    <div style="display:flex;flex-wrap:wrap;gap:6px;margin-bottom:10px">
      ${s?`<span style="padding:4px 12px;border-radius:20px;font-size:12px;font-weight:700;background:${s.bg};color:${s.c};border:1px solid ${s.c}33">${s.l}</span>`:""}
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
  </div>`}async function nn(e,t,n){var g,_,T,f;const i=`${b.role==="student"?b.studentId:l.activeStuId}_${e}`,o=(g=l.tasks[i])==null?void 0:g[t];if(!o)return;if(n==="coach"&&o._id){const{data:$}=await y.from("tasks").select("*").eq("id",o._id).single();$&&(o.done=$.done,o.student_note=$.student_note||"",o.student_result=$.student_result||null,o.student_feedback=$.student_feedback||null)}let s=document.getElementById("taskDetailModal");s||(s=document.createElement("div"),s.id="taskDetailModal",s.className="modal-bg",document.body.appendChild(s),s.addEventListener("click",$=>{$.target===s&&s.classList.remove("open")}));const r={soru:"var(--blue)",konu:"#c084fc",deneme:"var(--accent)",diger:"var(--text-mid)"},d={soru:"Soru Bankası",konu:"Konu Anlatımı",deneme:"Deneme",diger:"Diğer"},c=r[o.type]||"var(--accent)",p=o.type==="konu",m=o.task_items||[];let u="";m.length>0?u=`<div style="margin-bottom:14px">
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
    </div>`),s.innerHTML=`<div class="modal">
    <button class="modal-close" onclick="cm('taskDetailModal')">×</button>

    <!-- Görev başlık -->
    <div style="border-left:3px solid ${c};padding-left:12px;margin-bottom:20px">
      <div style="font-size:10px;font-weight:700;color:${c};text-transform:uppercase;letter-spacing:.5px;margin-bottom:4px">${d[o.type]||o.type}${o.exam?" · "+o.exam:""}</div>
      <div style="font-family:'Inter',sans-serif;font-size:18px;font-weight:800;line-height:1.2">${v(o.subject)}</div>
      <div style="font-size:12px;color:var(--text-dim);margin-top:4px">${new Date(e+"T12:00").toLocaleDateString("tr-TR",{weekday:"long",day:"numeric",month:"long"})}</div>
    </div>

    <!-- Geri bildirim: öğrenci=form, koç=özet+durum -->
    ${n==="student"?Ko(o):`
    <div style="background:var(--surface2);border:1.5px solid ${o.done?"var(--green)":"var(--border)"};border-radius:11px;padding:12px 16px;display:flex;align-items:center;gap:10px;margin-bottom:14px">
      <div style="width:20px;height:20px;border-radius:5px;background:${o.done?"var(--green)":"transparent"};border:2px solid ${o.done?"var(--green)":"var(--border)"};display:flex;align-items:center;justify-content:center;font-size:12px;flex-shrink:0">${o.done?"✓":""}</div>
      <div style="font-size:13px;font-weight:700;color:${o.done?"var(--green)":"var(--text-dim)"}">${o.done?"Tamamlandı":"Henüz tamamlanmadı"}</div>
    </div>
    ${Oo(o)}`}

    <!-- Test/Video listesi -->
    ${u}

    <!-- Sonuç Gir (soru/deneme türleri için) -->
    ${o.type==="soru"||o.type==="deneme"?`
    <div style="background:var(--surface2);border:1px solid var(--border);border-radius:11px;padding:14px 16px;margin-bottom:14px">
      <div style="font-size:11px;font-weight:700;color:var(--text-dim);text-transform:uppercase;letter-spacing:.5px;margin-bottom:10px">📊 Sonucu Gir</div>
      <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px">
        <div>
          <div style="font-size:10px;font-weight:700;color:var(--green);margin-bottom:4px">✓ Doğru</div>
          <input type="number" id="tdDogru" min="0" value="${((_=o.student_result)==null?void 0:_.dogru)??""}" placeholder="0" ${n==="coach"?"disabled":""}
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
    ${(()=>{var w;const $=Ni(o.exam,o.subject);return $?(pe=[...((w=o.student_result)==null?void 0:w.yanlis_konular)||[]],`<div style="background:var(--surface2);border:1px solid var(--border);border-radius:11px;padding:14px 16px;margin-bottom:14px">
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
  </div>`,G("taskDetailModal")}async function Fo(e,t,n){var s;if(n==="coach")return;const i=`${b.role==="student"?b.studentId:l.activeStuId}_${e}`,o=(s=l.tasks[i])==null?void 0:s[t];o&&(o.done=!o.done,o.task_items&&Array.isArray(o.task_items)&&o.task_items.forEach(r=>{r.done=o.done}),await y.from("tasks").update({done:o.done,task_items:o.task_items||null}).eq("id",o._id),nn(e,t,n),n==="student"?ze():X())}async function Uo(e,t,n,a){var d;if(a==="coach")return;const o=`${b.role==="student"?b.studentId:l.activeStuId}_${e}`,s=(d=l.tasks[o])==null?void 0:d[t];if(!s||!s.task_items)return;s.task_items[n].done=!s.task_items[n].done;const r=s.task_items.every(c=>c.done);s.done=r,M(!0),await y.from("tasks").update({task_items:s.task_items,done:s.done}).eq("id",s._id),M(!1),nn(e,t,a),a==="student"?ze():X(),x("İlerleme kaydedildi ✓")}function Go(e,t){var i,o,s;e.closest("div").querySelectorAll("button[data-speed]").forEach(r=>{const d=r.dataset.speed===t;r.style.borderColor=d?"var(--accent)":"var(--border)",r.style.background=d?"var(--accent-dim)":"var(--surface2)",r.style.color=d?"var(--accent)":"var(--text-mid)"}),document.getElementById("tdSpeed").value=t;const n=parseFloat(t),a=document.getElementById("speedCalc");if(a){const r=parseInt(((s=(o=(i=a.closest("[id=speedInfo]"))==null?void 0:i.textContent)==null?void 0:o.match(/Toplam (\d+) dk/))==null?void 0:s[1])||0);a.textContent=Math.ceil(r/n)+" dk",document.getElementById("tdDuration").value=Math.ceil(r/n)}}async function qo(e,t,n){var f,$,w,B,h;if(n==="coach")return;const i=`${b.role==="student"?b.studentId:l.activeStuId}_${e}`,o=(f=l.tasks[i])==null?void 0:f[t];if(!o)return;const s=(($=document.getElementById("tdNote"))==null?void 0:$.value.trim())||"",r={student_note:s},d=parseInt((w=document.getElementById("fbHour"))==null?void 0:w.value)||0,c=parseInt((B=document.getElementById("fbMin"))==null?void 0:B.value)||0,p=d*60+c,m={status:Le.status||null,time_spent:p>0?p:((h=o.student_feedback)==null?void 0:h.time_spent)||null,focus:Le.focus||null,difficulty:Le.difficulty||null,blocker:Le.blocker||null};(m.status||m.focus||m.difficulty||p>0)&&(r.student_feedback=m,o.student_feedback=m,m.status&&(r.done=m.status!=="failed",o.done=r.done));const u=document.getElementById("tdDogru"),g=document.getElementById("tdYanlis"),_=document.getElementById("tdBos");if(u!==null){const S=parseInt(u.value)||0,I=parseInt(g.value)||0,z=parseInt(_.value)||0;(S>0||I>0||z>0||pe.length>0)&&(r.student_result={dogru:S,yanlis:I,bos:z,yanlis_konular:[...pe],ts:new Date().toISOString()},o.student_result=r.student_result)}if(!o._id){x("Hata: görev ID bulunamadı");return}const{error:T}=await y.from("tasks").update(r).eq("id",o._id);if(T){x("Kaydetme hatası: "+T.message),console.error("saveTaskDetail error",T,r);return}o.student_note=s,q("taskDetailModal"),x("Kaydedildi ✓"),n==="student"?ze():X()}function an(){const e=l.students.find(o=>o.id===b.studentId);if(!e)return;const t=document.getElementById("view-sexams"),n=[...l.exams].filter(o=>o.studentId===e.id).sort((o,s)=>s.date.localeCompare(o.date));let a="";if(n.length>1){const o=[...n].sort((r,d)=>r.date.localeCompare(d.date)).slice(-8),s=Math.max(...o.map(r=>(EXAM_DEFS[r.type]||[]).reduce((c,p)=>{var m;return c+Number(((m=r.nets)==null?void 0:m[p])||0)},0)),1);a=`<div class="card cp" style="margin-bottom:16px">
      <div style="font-family:'Inter',sans-serif;font-size:15px;font-weight:700;margin-bottom:12px">📈 Net Gelişimim</div>
      <div class="bar-chart">
        ${o.map(r=>{const c=(EXAM_DEFS[r.type]||[]).reduce((m,u)=>{var g;return m+Number(((g=r.nets)==null?void 0:g[u])||0)},0),p=Math.max(Math.round(c/s*100),4);return`<div class="bar-wrap">
            <div class="bar-val">${c.toFixed(0)}</div>
            <div class="bar" style="height:${p}%;background:${e.color}"></div>
            <div class="bar-label">${v(r.name.replace("Deneme ","#").replace("TYT ","").replace("AYT ",""))}</div>
          </div>`}).join("")}
      </div>
    </div>`}const i=n.length?n.map(o=>{const s=EXAM_DEFS[o.type]||[],r=s.reduce((c,p)=>{var m;return c+Number(((m=o.nets)==null?void 0:m[p])||0)},0).toFixed(1),d=s.map(c=>{var m;const p=Number(((m=o.nets)==null?void 0:m[c])||0);return`<div class="net-box"><div class="net-label">${c}</div><div class="net-val ${Gt(p)}">${p}</div></div>`}).join("");return`<div class="exam-item">
      <div class="exam-header">
        <div><div class="exam-name">${v(o.name)}</div><div class="exam-date">${new Date(o.date+"T12:00").toLocaleDateString("tr-TR",{day:"numeric",month:"long",year:"numeric"})}</div></div>
        <button class="btn btn-ghost btn-xs" onclick="openStudentExamModal('${o.id}')">✏️ Düzenle</button>
      </div>
      ${o.note?`<div style="font-size:12px;color:var(--text-mid);margin-bottom:8px;font-style:italic">"${v(o.note)}"</div>`:""}
      <div class="nets-grid">${d}</div>
      <div style="margin-top:8px"><div style="font-family:'Inter',sans-serif;font-size:18px;font-weight:800">Toplam: ${r}</div></div>
      ${ua(o,n)}
      ${o.coachComment?`<div class="coach-comment-box"><strong>Koç Yorumu</strong>${v(o.coachComment)}</div>`:""}
    </div>`}).join(""):'<div class="empty"><p>Henüz deneme sonucu eklemediniz.<br>İlk sonucunuzu girin!</p></div>';t.innerHTML=`
    <div class="sh"><h2>Denemelerim</h2><button class="btn btn-accent" onclick="openStudentExamModal()">+ Sonuç Gir</button></div>
    ${a}${i}`}function ya(e){var n;const t=e?l.exams.find(a=>a.id===e):null;document.getElementById("emTitle").textContent=t?"Sonucu Düzenle":"Deneme Sonucu Gir",document.getElementById("emId").value=e||"",document.getElementById("emName").value=(t==null?void 0:t.name)||"",document.getElementById("emDate").value=(t==null?void 0:t.date)||O(new Date),document.getElementById("emStudentWrap").style.display="none",document.getElementById("emStudent").innerHTML=`<option value="${b.studentId}">${v(((n=l.students.find(a=>a.id===b.studentId))==null?void 0:n.name)||"")}</option>`,document.getElementById("emExamType").value=(t==null?void 0:t.type)||"TYT",document.getElementById("emNote").value=(t==null?void 0:t.note)||"",on(),t!=null&&t.examDetails&&Object.entries(t.examDetails).forEach(([a,i])=>{const o=document.getElementById(`ed_${a}_d`),s=document.getElementById(`ed_${a}_y`),r=document.getElementById(`ed_${a}_b`);o&&(o.value=i.dogru||0,s.value=i.yanlis||0,r.value=i.bos||0),ae[a]={...i},xa(a),(i.yanlis_konular||[]).forEach(d=>{document.querySelectorAll(`#konu_acc_${a.replace(/\s/g,"_")} span`).forEach(p=>{p.textContent.trim()===d&&(p.style.borderColor="var(--red)",p.style.background="rgba(255,92,122,.12)",p.style.color="var(--red)")})})}),G("examModal")}function Wo(e){document.getElementById("emStudentWrap").style.display="",document.getElementById("emStudent").innerHTML=l.students.map(t=>`<option value="${t.id}">${v(t.name)}</option>`).join(""),ya(e),document.getElementById("emStudentWrap").style.display=""}let ae={};function Vo(e,t,n){ae[t]||(ae[t]={dogru:0,yanlis:0,bos:0,yanlis_konular:[]});const a=ae[t].yanlis_konular,i=a.indexOf(n);i===-1?(a.push(n),e.style.borderColor="var(--red)",e.style.background="rgba(255,92,122,.12)",e.style.color="var(--red)"):(a.splice(i,1),e.style.borderColor="var(--border)",e.style.background="var(--surface)",e.style.color="var(--text-mid)")}window.toggleExamKonuChip=Vo;function xa(e){var c,p,m,u;const t=parseInt((c=document.getElementById(`ed_${e}_d`))==null?void 0:c.value)||0,n=parseInt((p=document.getElementById(`ed_${e}_y`))==null?void 0:p.value)||0,a=parseInt((m=document.getElementById(`ed_${e}_b`))==null?void 0:m.value)||0;ae[e]||(ae[e]={yanlis_konular:[]}),ae[e].dogru=t,ae[e].yanlis=n,ae[e].bos=a;const i=document.getElementById("emExamType").value,o=((u=EXAM_SORU[i])==null?void 0:u[e])||40,s=t+n+a,r=document.getElementById(`ed_${e}_net`),d=document.getElementById(`ed_${e}_warn`);r&&(r.textContent=Math.max(0,t-n/4).toFixed(2)),d&&(d.style.display=s>o?"":"none"),zo()}window.updateExamNet=xa;function Zo(e){const t=document.getElementById(`konu_acc_${e.replace(/\s/g,"_")}`);t&&(t.style.display=t.style.display==="none"?"":"none")}window.toggleKonuAccordion=Zo;function on(){const e=document.getElementById("emExamType").value,t=EXAM_DEFS[e]||[];ae={};const n=document.getElementById("emPuanDisplay");n&&(n.innerHTML=""),document.getElementById("netInputsWrap").innerHTML=t.map(a=>{var d;const i=((d=EXAM_SORU[e])==null?void 0:d[a])||40,s=(EXAM_KONU_MAP[`${e}_${a}`]||[]).flatMap(c=>at[c]||[]),r=s.length?`
      <div style="margin-top:8px">
        <button type="button" onclick="toggleKonuAccordion('${a}')"
          style="font-size:11px;font-weight:700;color:var(--text-dim);background:none;border:none;cursor:pointer;padding:0;display:flex;align-items:center;gap:4px">
          📌 Yanlış Konular <span style="font-size:10px">▾</span>
        </button>
        <div id="konu_acc_${a.replace(/\s/g,"_")}" style="display:none;margin-top:6px;display:flex;flex-wrap:wrap;gap:0">
          ${s.map(c=>`<span onclick="toggleExamKonuChip(this,'${a}','${c.replace(/'/g,"\\'")}')"
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
      ${r}
    </div>`}).join("")}async function Jo(){var r,d;const e=document.getElementById("emName").value.trim();if(!e)return x("Sınav adı girin!");const t=document.getElementById("emExamType").value,n={};(EXAM_DEFS[t]||[]).forEach(c=>{const p=ae[c]||{};n[c]=Math.max(0,(p.dogru||0)-(p.yanlis||0)/4)});const a=document.getElementById("emId").value,i=document.getElementById("emStudent").value,o={name:e,date:document.getElementById("emDate").value,student_id:i,coach_id:b.coachId||((r=l.students.find(c=>c.id===i))==null?void 0:r.coachId),exam_type:t,nets:n,exam_details:ae,student_note:document.getElementById("emNote").value.trim()};async function s(c,p,m){var u,g,_;if(p){const{error:T}=await y.from("exams").update(c).eq("id",m);if((u=T==null?void 0:T.message)!=null&&u.includes("exam_details")){const{exam_details:f,...$}=c;return y.from("exams").update($).eq("id",m)}return{error:T}}else{const T=await y.from("exams").insert(c).select().single();if((_=(g=T.error)==null?void 0:g.message)!=null&&_.includes("exam_details")){const{exam_details:f,...$}=c;return y.from("exams").insert($).select().single()}return T}}if(a){const{error:c}=await s(o,!0,a);if(c)return x("Hata: "+c.message);const p=l.exams.find(m=>m.id===a);p&&Object.assign(p,{name:o.name,date:o.date,studentId:i,type:t,nets:n,examDetails:ae,note:o.student_note}),x("Güncellendi ✓")}else{const{data:c,error:p}=await s(o,!1,null);if(p)return x("Hata: "+p.message);l.exams.push({id:c.id,studentId:c.student_id,name:c.name,date:c.date,type:c.exam_type,nets:c.nets||{},examDetails:c.exam_details||{},note:c.student_note,coachComment:""}),x("Deneme eklendi ✓")}if(q("examModal"),b.role==="student"?an():Ze(),b.role==="coach"||b.role==="developer")try{const c=[];Object.values(ae||{}).forEach(m=>{var u;(u=m==null?void 0:m.yanlis_konular)!=null&&u.length&&c.push(...m.yanlis_konular)}),pe!=null&&pe.length&&c.push(...pe);const p=[...new Set(c)];if(p.length>0&&i){const m=((d=l.konuMastery)==null?void 0:d[i])||{},u=[];if(Object.entries(m).forEach(([g,_])=>{Object.entries(_).forEach(([T,f])=>{p.includes(T)&&(f.status==="td"?u.push({konu:T,subject:g,type:"td_broken",stars:f.stars}):f.stars>=5&&u.push({konu:T,subject:g,type:"high_star_wrong",stars:f.stars}))})}),u.length>0){const g=u.filter(f=>f.type==="td_broken"),_=u.filter(f=>f.type==="high_star_wrong");let T="⚠️ Mastery Önerileri: ";g.length>0&&(T+=`${g.map(f=>f.konu).join(", ")} TD'den düştü! `),_.length>0&&(T+=`${_.map(f=>f.konu).join(", ")} için yıldız düşürmeyi düşün.`),setTimeout(()=>{const f=document.createElement("div");f.style.cssText="position:fixed;bottom:80px;right:16px;max-width:360px;background:var(--surface);border:1.5px solid var(--accent);border-radius:12px;padding:14px 16px;box-shadow:var(--shadow-lg);z-index:99999;animation:slideIn .3s ease",f.innerHTML=`
              <div style="display:flex;align-items:flex-start;gap:10px">
                <span style="font-size:20px;flex-shrink:0">⚠️</span>
                <div style="flex:1">
                  <div style="font-size:13px;font-weight:800;margin-bottom:6px">Deneme → Konu Mastery Önerisi</div>
                  ${g.length>0?`<div style="font-size:11px;color:var(--red);margin-bottom:4px">🔴 TD'den düşenler: <b>${g.map($=>$.konu).join(", ")}</b></div>`:""}
                  ${_.length>0?`<div style="font-size:11px;color:var(--accent)">🟡 Yıldız düşürmeyi düşün: <b>${_.map($=>$.konu).join(", ")}</b></div>`:""}
                  <div style="font-size:10px;color:var(--text-dim);margin-top:6px">Değişiklik yapmak için Konu Haritası'na git</div>
                </div>
                <button onclick="this.parentElement.parentElement.remove()" style="border:none;background:none;color:var(--text-dim);cursor:pointer;font-size:16px;line-height:1;flex-shrink:0">×</button>
              </div>`,document.body.appendChild(f),setTimeout(()=>f.remove(),12e3)},600)}}}catch(c){console.error("[mastery suggestion]",c)}}async function Ot(){const e=l.students.find(a=>a.id===b.studentId);if(!e)return;const t=(l.messages[e.id]||[]).filter(a=>a.from==="coach"&&!a.read&&a._id).map(a=>a._id);t.length&&await y.from("messages").update({read:!0}).in("id",t),(l.messages[e.id]||[]).forEach(a=>{a.from==="coach"&&(a.read=!0)}),At();const n=document.getElementById("view-smessages");n.innerHTML=`<div class="sh" style="margin-bottom:12px"><h2>💬 Koçuma Yaz</h2></div>
    <div class="smsg-wrap">
      <div class="msg-main" id="msgMain">${Se(e.id,"student")}</div>
    </div>`,Ie()}let ft=null;function sn(){rn();const e=b.role==="coach"||b.role==="developer"?l.msgThread:b.studentId;e&&(ft=y.channel("messages_"+e).on("postgres_changes",{event:"INSERT",schema:"public",table:"messages",filter:`student_id=eq.${e}`},t=>{const n=t.new;l.messages[e]||(l.messages[e]=[]),!l.messages[e].find(a=>a._id===n.id)&&(l.messages[e].push({_id:n.id,from:n.from_role,text:n.text||"",image_url:n.image_url||null,read:n.read,time:new Date(n.created_at).toLocaleTimeString("tr-TR",{hour:"2-digit",minute:"2-digit"})}),b.role==="student"&&n.from_role==="coach"&&currentTab!=="smessages"&&At(),currentTab==="messages"&&l.msgThread===e&&(document.getElementById("msgMain").innerHTML=Se(e,"coach"),Ie()),currentTab==="smessages"&&(document.getElementById("msgMain").innerHTML=Se(e,"student"),Ie()))}).subscribe())}function rn(){ft&&(y.removeChannel(ft),ft=null)}async function Xo(){var e,t;await y.from("workspaces").upsert({coach_id:b.coachId,brand_name:((e=l.workspace)==null?void 0:e.brand_name)||"Akademi",brand_color:((t=l.workspace)==null?void 0:t.brand_color)||"#E8613A",onboarding_done:!1},{onConflict:"coach_id"}),l.workspace&&(l.workspace.onboarding_done=!1),Ea()}window.devResetOnboarding=Xo;async function ba(){const e=document.getElementById("view-dev-dashboard");e.innerHTML='<div class="sh"><h2>🖥️ Sistem Dashboard</h2></div><div class="empty"><p>Yükleniyor...</p></div>';const[t,n,a,i,o,s]=await Promise.all([y.from("users").select("id,role,created_at"),y.from("tasks").select("id,done,created_at"),y.from("exams").select("id,created_at"),y.from("messages").select("id,created_at"),y.from("tickets").select("id,status,created_at"),y.from("payments").select("id,amount,status,payment_date")]),r=t.data||[],d=n.data||[],c=a.data||[],p=i.data||[],m=o.data||[],u=s.data||[],g=r.filter(h=>h.role==="coach").length,_=r.filter(h=>h.role==="student").length,T=u.filter(h=>h.status==="completed").reduce((h,S)=>h+Number(S.amount),0),f=m.filter(h=>h.status==="open").length,$=Array.from({length:7},(h,S)=>{const I=new Date;return I.setDate(I.getDate()-6+S),O(I)}),w=$.map(h=>d.filter(S=>{var I;return(I=S.created_at)==null?void 0:I.startsWith(h)}).length),B=Math.max(...w,1);e.innerHTML=`
    <div class="sh"><h2>🖥️ Sistem Dashboard</h2>
      <div style="display:flex;gap:8px;align-items:center">
        <span style="font-size:12px;color:var(--text-dim)">${new Date().toLocaleDateString("tr-TR",{weekday:"long",day:"numeric",month:"long",year:"numeric"})}</span>
        <button class="btn btn-ghost btn-sm" onclick="devResetOnboarding()" title="Onboarding sihirbazını yeniden başlat">🧙 Sihirbazı Test Et</button>
      </div>
    </div>

    <div class="stats-row" style="margin-bottom:20px">
      <div class="stat-card"><div class="stat-label">Toplam Öğrenci</div><div class="stat-val" style="color:var(--blue)">${_}</div></div>
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
    </div>`}let Oe="all";function Qo(e){Oe=e,Je()}async function Je(){const e=document.getElementById("view-dev-users"),{data:t}=await y.from("users").select("*").order("created_at"),n=new Date,a={all:(t||[]).length,coach:0,student:0,parent:0};(t||[]).forEach(r=>{a[r.role]!==void 0&&a[r.role]++});const i=Oe==="all"?t:(t||[]).filter(r=>r.role===Oe),o=[["all",`Tümü (${a.all})`],["coach",`Koçlar (${a.coach})`],["student",`Öğrenciler (${a.student})`],["parent",`Veliler (${a.parent})`]].map(([r,d])=>`<button onclick="setDevUserFilter('${r}')" style="padding:7px 16px;border-radius:99px;border:1.5px solid ${Oe===r?"var(--accent)":"var(--border)"};background:${Oe===r?"var(--accent-dim)":"var(--surface)"};color:${Oe===r?"var(--accent)":"var(--text-mid)"};font-size:12px;font-weight:700;cursor:pointer;font-family:inherit;transition:all .15s">${d}</button>`).join("");function s(r){if(r.role!=="coach"&&r.role!=="developer")return'<span style="color:var(--text-dim);font-size:11px">—</span>';const d=r.plan||"trial";if(d==="active")return'<span style="font-size:10px;font-weight:800;color:#10b981;background:rgba(16,185,129,.12);border:1px solid rgba(16,185,129,.3);border-radius:4px;padding:2px 7px">AKTİF</span>';if(d==="paused")return'<span style="font-size:10px;font-weight:700;color:#f59e0b;background:rgba(245,158,11,.12);border:1px solid rgba(245,158,11,.3);border-radius:4px;padding:2px 7px">DURAKLATILDI</span>';if(d==="cancelled")return'<span style="font-size:10px;font-weight:700;color:#ef4444;background:rgba(239,68,68,.1);border:1px solid rgba(239,68,68,.2);border-radius:4px;padding:2px 7px">İPTAL</span>';const c=r.trial_ends_at?new Date(r.trial_ends_at):new Date(new Date(r.created_at).getTime()+14*24*60*60*1e3),p=Math.ceil((c-n)/864e5);return p<=0?'<span style="font-size:10px;font-weight:700;color:#ef4444;background:rgba(239,68,68,.1);border:1px solid rgba(239,68,68,.2);border-radius:4px;padding:2px 7px">SÜRESİ DOLDU</span>':`<span style="font-size:10px;font-weight:700;color:#6366f1;background:rgba(99,102,241,.1);border:1px solid rgba(99,102,241,.2);border-radius:4px;padding:2px 7px">DENEME · ${p}g</span>`}e.innerHTML=`
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
              <td style="padding:10px 12px;font-weight:700">${v(r.full_name)}</td>
              <td style="padding:10px 12px;color:var(--text-mid)">${v(r.username)}</td>
              <td style="padding:10px 12px"><span class="role-badge ${r.role==="coach"?"role-coach":r.role==="developer"?"role-dev":"role-student"}">${r.role}</span></td>
              <td style="padding:10px 12px">${s(r)}</td>
              <td style="padding:10px 12px;color:var(--text-dim);font-size:11px">${new Date(r.created_at).toLocaleDateString("tr-TR")}</td>
              <td style="padding:10px 12px;display:flex;gap:6px;flex-wrap:nowrap">
                ${r.role==="coach"||r.role==="developer"?`<button class="btn btn-accent btn-xs" onclick="openPlanModal('${r.id}','${v(r.full_name)}','${r.plan||"trial"}','${r.trial_ends_at||""}')">📋</button>`:""}
                <button class="btn btn-ghost btn-xs" onclick="openDevUserModal('${r.id}')">✏️</button>
                <button class="btn btn-danger btn-xs" onclick="devDeleteUser('${r.id}','${v(r.full_name)}')">🗑</button>
              </td>
            </tr>`).join("")}
        </tbody>
      </table>
    </div>`}async function es(e){const t=e?(await y.from("users").select("*").eq("id",e).single()).data:null;document.getElementById("smTitle").textContent=t?"Kullanıcıyı Düzenle":"Yeni Kullanıcı",document.getElementById("smId").value=e||"",document.getElementById("smName").value=(t==null?void 0:t.full_name)||"",document.getElementById("smTarget").value=(t==null?void 0:t.target)||"",document.getElementById("smUsername").value=(t==null?void 0:t.username)||"",document.getElementById("smPass").value=(t==null?void 0:t.password_hash)||"",document.getElementById("smWeekStart").value=(t==null?void 0:t.week_start)||0,document.getElementById("smProg").value=(t==null?void 0:t.progress)||0,document.getElementById("smProgVal").textContent=((t==null?void 0:t.progress)||0)+"%",document.querySelectorAll(".color-opt").forEach(a=>a.classList.toggle("sel",a.dataset.c===((t==null?void 0:t.color)||"#e8622a")));let n=document.getElementById("smRoleField");n||(n=document.createElement("div"),n.id="smRoleField",n.className="field",n.innerHTML='<label>Rol</label><select id="smRole" style="width:100%;background:var(--surface2);border:1.5px solid var(--border);border-radius:9px;padding:10px 13px;font-size:14px;font-family:inherit;color:var(--text);outline:none"><option value="student">Öğrenci</option><option value="coach">Koç</option><option value="developer">Developer</option></select>',document.getElementById("smName").closest(".modal").insertBefore(n,document.getElementById("smName").parentElement)),document.getElementById("smRole").value=(t==null?void 0:t.role)||"student",document.querySelector("#studentModal .btn-accent").setAttribute("onclick","saveStudentDev()"),G("studentModal")}async function ts(e,t){if(await ie(`"${t}" kullanıcısını kalıcı olarak silmek istediğinizden emin misiniz?

Bu işlem geri alınamaz.`)){M(!0);try{const{data:{session:n}}=await y.auth.getSession(),a=await fetch("/api/delete-user",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${(n==null?void 0:n.access_token)||""}`},body:JSON.stringify({targetUserId:e})}),i=await a.json();if(!a.ok)throw new Error(i.error||"Sunucu hatası");x(`🗑 ${t} silindi`),Je()}catch(n){x("Hata: "+n.message)}finally{M(!1)}}}function ns(e,t,n,a){let i=document.getElementById("planMgmtModal");i||(i=document.createElement("div"),i.id="planMgmtModal",i.className="modal-bg",i.innerHTML=`<div class="modal" style="max-width:400px">
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
    </div>`,document.body.appendChild(i),i.addEventListener("click",o=>{o.target===i&&i.classList.remove("open")}),document.getElementById("planStatus").addEventListener("change",function(){document.getElementById("trialEndField").style.display=this.value==="trial"?"":"none"})),document.getElementById("planModalTitle").textContent=`Plan Yönet — ${t}`,document.getElementById("planUserId").value=e,document.getElementById("planStatus").value=n||"trial",document.getElementById("trialEndField").style.display=n==="trial"||!n?"":"none",a?document.getElementById("planTrialEnd").value=a.split("T")[0]:document.getElementById("planTrialEnd").value="",G("planMgmtModal")}async function as(){const e=document.getElementById("planUserId").value,t=document.getElementById("planStatus").value,n=document.getElementById("planTrialEnd").value,a={plan:t};t==="trial"&&n?a.trial_ends_at=n:t!=="trial"&&(a.trial_ends_at=null),M(!0);const{error:i}=await y.from("users").update(a).eq("id",e);if(M(!1),i)return x("Hata: "+i.message);x(`Plan güncellendi: ${{trial:"Deneme",active:"Aktif",paused:"Duraklatıldı",cancelled:"İptal"}[t]||t} ✓`),q("planMgmtModal"),Je()}let et=[];async function ct(){const e=document.getElementById("view-dev-resources"),{data:t}=await y.from("resources").select("*").order("resource_type,exam_type,subject,name");et=t||[];const n=et.filter(i=>i.resource_type!=="playlist"),a=et.filter(i=>i.resource_type==="playlist");e.innerHTML=`
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
      <div class="stat-card"><div class="stat-label">Toplam Kaynak</div><div class="stat-val">${et.length}</div></div>
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
    </div>`}function is(){let e=document.getElementById("playlistModal");e||(e=document.createElement("div"),e.id="playlistModal",e.className="modal-bg",document.body.appendChild(e),e.addEventListener("click",t=>{t.target===e&&e.classList.remove("open")})),e.innerHTML=`<div class="modal modal-lg">
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
  </div>`,G("playlistModal")}async function os(){const e=document.getElementById("ytPlaylistUrl").value.trim(),t=document.getElementById("ytStatus");if(!e)return t.innerHTML='<span style="color:var(--red)">⚠️ Playlist URL giriniz</span>';const n=e.match(/[?&]list=([^&]+)/);if(!n)return t.innerHTML='<span style="color:var(--red)">⚠️ Geçersiz URL — "list=..." parametresi bulunamadı</span>';const a=n[1];t.innerHTML="⏳ Yükleniyor...";try{let i=[],o="";do{let s=`/api/youtube?playlistId=${a}`;o&&(s+=`&pageToken=${o}`);const r=await fetch(s);if(!r.ok){const c=await r.json();throw new Error(c.error||"Oynatma listesi yüklenemedi.")}const d=await r.json();d.items&&(i=i.concat(d.items)),o=d.nextPageToken||""}while(o&&i.length<200);document.getElementById("plVideos").value=i.map(s=>`${s.title} | ${s.url} | ${s.duration}`).join(`
`),t.innerHTML=`<span style="color:var(--green)">✓ ${i.length} video yüklendi!</span>`}catch(i){t.innerHTML=`<span style="color:var(--red)">⚠️ Hata: ${i.message}</span>`}}async function ss(){const e=document.getElementById("plName").value.trim(),t=document.getElementById("plSubject").value.trim(),n=document.getElementById("plPublisher").value.trim();if(!e||!t||!n)return x("Tüm alanları doldurun!");const a=document.getElementById("plVideos").value.split(`
`).map(r=>r.trim()).filter(Boolean);if(!a.length)return x("En az 1 video girin!");const i=a.map(r=>{const d=r.split("|").map(c=>c.trim());return{label:d[0]||"",url:d[1]||"",topic:"",soru:parseInt(d[2])||0}}).filter(r=>r.label),o={exam_type:document.getElementById("plExam").value,subject:t,publisher:n,name:e,year:new Date().getFullYear(),tests:i,active:!0,resource_type:"playlist"},{error:s}=await y.from("resources").insert(o);if(s)return x("Hata: "+s.message);x(`✓ "${e}" eklendi — ${i.length} video`),q("playlistModal"),ct()}function rs(e,t="book"){const n=e?et.find(s=>s.id===e):null;let a=document.getElementById("resourceModal");a||(a=document.createElement("div"),a.id="resourceModal",a.className="modal-bg",document.body.appendChild(a),a.addEventListener("click",s=>{s.target===a&&a.classList.remove("open")}));const i=((n==null?void 0:n.resource_type)||t)==="playlist";a.innerHTML=`<div class="modal modal-lg">
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
`),G("resourceModal")}async function ls(){const e=document.getElementById("rmName").value.trim(),t=document.getElementById("rmSubject").value.trim();if(!e||!t)return x("Ad ve ders zorunlu!");const n=document.getElementById("rmId").value,a=document.getElementById("rmType").value==="playlist",i=document.getElementById("rmTests").value.split(`
`).map(r=>r.trim()).filter(Boolean);let o=[];a?o=i.map(r=>{const d=r.split("|").map(c=>c.trim());return{label:d[0]||"",url:d[1]||"",topic:"",soru:parseInt(d[2])||0}}):o=i.map(r=>{const d=r.split("|").map(c=>c.trim());return{label:d[0]||"",soru:parseInt(d[1])||0}});const s={exam_type:document.getElementById("rmExam").value,subject:t,publisher:document.getElementById("rmPublisher").value.trim(),year:new Date().getFullYear(),name:e,tests:o,active:document.getElementById("rmActive").value==="true",resource_type:a?"playlist":"book"};n?(await y.from("resources").update(s).eq("id",n),x("Güncellendi ✓")):(await y.from("resources").insert(s),x("Kaynak eklendi ✓")),q("resourceModal"),ct()}async function ds(e){await ie("Bu kaynağı silmek istediğinizden emin misiniz?")&&(await y.from("resources").delete().eq("id",e),x("Silindi"),ct())}async function pt(){const e=document.getElementById("view-dev-finance"),[{data:t},{data:n}]=await Promise.all([y.from("subscriptions").select("*,users(full_name,color)").order("created_at",{ascending:!1}),y.from("payments").select("*,users(full_name)").order("payment_date",{ascending:!1}).limit(20)]),a=(n||[]).filter(o=>o.status==="completed").reduce((o,s)=>o+Number(s.amount),0),i=(t||[]).filter(o=>o.status==="active").length;e.innerHTML=`
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
              <div style="font-size:13px;font-weight:700">${v(((s=o.users)==null?void 0:s.full_name)||"?")}</div>
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
              <div style="font-size:12px;font-weight:700">${v(((s=o.users)==null?void 0:s.full_name)||"?")}</div>
              <div style="font-size:11px;color:var(--text-dim)">${o.payment_date} · ${o.method}</div>
            </div>
            <div style="display:flex;align-items:center;gap:8px;flex-shrink:0">
              <div style="font-size:13px;font-weight:700;color:var(--green)">${Number(o.amount).toLocaleString("tr-TR")} ₺</div>
              ${o.verified?'<span style="font-size:10px;font-weight:800;color:var(--green);background:var(--green-dim);border:1px solid rgba(5,150,105,.3);border-radius:99px;padding:3px 9px;white-space:nowrap">✓ Doğrulandı</span>':`<button class="btn btn-green btn-xs" onclick="verifyPayment('${o.id}')" title="Havaleyi kontrol ettim, ödemeyi onayla">Ödemeyi Onayla</button>`}
            </div>
          </div>`}).join("")||'<div class="empty"><p>Ödeme yok</p></div>'}
      </div>
    </div>`}async function cs(e){const{error:t}=await y.from("payments").update({verified:!0}).eq("id",e);if(t){x("Onaylanamadı: "+t.message);return}x("✓ Ödeme doğrulandı"),pt()}function ps(){let e=document.getElementById("paymentModal");e||(e=document.createElement("div"),e.id="paymentModal",e.className="modal-bg",e.innerHTML=`<div class="modal"><button class="modal-close" onclick="cm('paymentModal')">×</button>
      <h2>Ödeme Ekle</h2>
      <div class="field"><label>Öğrenci</label><select id="pmStudent">${l.students.map(t=>`<option value="${t.id}">${v(t.name)}</option>`).join("")}</select></div>
      <div class="field-row">
        <div class="field"><label>Tutar (₺)</label><input type="number" id="pmAmount" placeholder="1500"></div>
        <div class="field"><label>Yöntem</label><select id="pmMethod"><option>nakit</option><option>havale</option><option>kart</option><option>iyzico</option></select></div>
      </div>
      <div class="field"><label>Tarih</label><input type="date" id="pmDate" value="${O(new Date)}"></div>
      <div class="field"><label>Açıklama</label><input id="pmDesc" placeholder="Mayıs ayı ücreti"></div>
      <button class="btn btn-accent" style="width:100%;justify-content:center;padding:12px;margin-top:4px" onclick="savePayment()">Kaydet</button>
    </div>`,document.body.appendChild(e),e.addEventListener("click",t=>{t.target===e&&e.classList.remove("open")})),document.getElementById("pmStudent").innerHTML=l.students.map(t=>`<option value="${t.id}">${v(t.name)}</option>`).join(""),G("paymentModal")}async function ms(){const e=parseFloat(document.getElementById("pmAmount").value);if(!e)return x("Tutar girin!");await y.from("payments").insert({student_id:document.getElementById("pmStudent").value,amount:e,method:document.getElementById("pmMethod").value,payment_date:document.getElementById("pmDate").value,description:document.getElementById("pmDesc").value,status:"completed"}),x("Ödeme kaydedildi ✓"),q("paymentModal"),pt()}function us(){let e=document.getElementById("subModal");e||(e=document.createElement("div"),e.id="subModal",e.className="modal-bg",e.innerHTML=`<div class="modal"><button class="modal-close" onclick="cm('subModal')">×</button>
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
    </div>`,document.body.appendChild(e),e.addEventListener("click",t=>{t.target===e&&e.classList.remove("open")})),document.getElementById("sbStudent").innerHTML=l.students.map(t=>`<option value="${t.id}">${v(t.name)}</option>`).join(""),G("subModal")}async function gs(){const e=parseFloat(document.getElementById("sbAmount").value);if(!e)return x("Tutar girin!");await y.from("subscriptions").insert({student_id:document.getElementById("sbStudent").value,plan:document.getElementById("sbPlan").value,amount:e,start_date:document.getElementById("sbStart").value,end_date:document.getElementById("sbEnd").value||null,status:document.getElementById("sbStatus").value,notes:document.getElementById("sbNotes").value}),x("Abonelik eklendi ✓"),q("subModal"),pt()}async function mt(){const e=document.getElementById("view-dev-announce"),{data:t}=await y.from("announcements").select("*").order("created_at",{ascending:!1}),n={info:"var(--blue)",warning:"var(--accent)",success:"var(--green)",urgent:"var(--red)"};e.innerHTML=`
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
      </div>`).join("")}`}function vs(){let e=document.getElementById("announceModal");e||(e=document.createElement("div"),e.id="announceModal",e.className="modal-bg",e.innerHTML=`<div class="modal"><button class="modal-close" onclick="cm('announceModal')">×</button>
      <h2>Yeni Duyuru</h2>
      <div class="field"><label>Başlık</label><input id="anTitle" placeholder="Önemli Güncelleme"></div>
      <div class="field"><label>İçerik</label><textarea id="anBody" placeholder="Duyuru metni..."></textarea></div>
      <div class="field-row">
        <div class="field"><label>Tür</label><select id="anType"><option value="info">Bilgi</option><option value="warning">Uyarı</option><option value="success">Başarı</option><option value="urgent">Acil</option></select></div>
        <div class="field"><label>Hedef</label><select id="anTarget"><option value="all">Herkes</option><option value="students">Öğrenciler</option><option value="coaches">Koçlar</option></select></div>
      </div>
      <button class="btn btn-accent" style="width:100%;justify-content:center;padding:12px;margin-top:4px" onclick="saveAnnounce()">Yayınla</button>
    </div>`,document.body.appendChild(e),e.addEventListener("click",t=>{t.target===e&&e.classList.remove("open")})),G("announceModal")}async function fs(){const e=document.getElementById("anTitle").value.trim(),t=document.getElementById("anBody").value.trim();if(!e||!t)return x("Başlık ve içerik zorunlu!");await y.from("announcements").insert({title:e,body:t,type:document.getElementById("anType").value,target:document.getElementById("anTarget").value,active:!0}),x("Duyuru yayınlandı ✓"),q("announceModal"),mt()}async function ys(e,t){await y.from("announcements").update({active:t}).eq("id",e),mt()}async function xs(e){await ie("Bu duyuruyu silmek istediğinizden emin misiniz?")&&(await y.from("announcements").delete().eq("id",e),x("Silindi"),mt())}let Ge=null,wt=null,me=null,jt=null,Fe=[],ve=[],_e="welcome";async function Xe(){const e=document.getElementById("view-dev-tickets");if(!e)return;const{data:t,error:n}=await y.from("tickets").select("*,users!tickets_user_id_fkey(full_name,role)").order("updated_at",{ascending:!1});Fe=t||[],!me&&Fe.length>0&&(me=Fe[0].id),e.innerHTML=`
    <div class="sh" style="margin-bottom:12px">
      <h2>🎫 Destek & Geri Bildirim Masası</h2>
    </div>

    <div style="display: grid; grid-template-columns: 280px 1fr; gap: 16px; height: 600px; max-height: calc(100vh - 180px); margin-top: 10px">
      <!-- Left Pane: Chats List -->
      <div style="overflow-y: auto; background: var(--surface2); border: 1px solid var(--border); border-radius: 12px; display: flex; flex-direction: column; gap: 8px; padding: 12px">
        <div style="font-size: 11px; font-weight:800; color:var(--text-dim); text-transform:uppercase; letter-spacing:.5px; margin-bottom:4px">Konuşmalar</div>
        ${Fe.length===0?`
          <div style="text-align:center; padding:40px 10px; color:var(--text-dim); font-size:12px">Kayıtlı destek talebi yok.</div>
        `:Fe.map(a=>{var g,_,T;const i=a.id===me,o=((g=a.users)==null?void 0:g.full_name)||"Kullanıcı",s=((_=a.users)==null?void 0:_.role)==="coach"?"KOÇ":((T=a.users)==null?void 0:T.role)==="parent"?"VELİ":"ÖĞRENCİ";let r="Mesaj yok";try{const f=JSON.parse(a.body);Array.isArray(f)&&f.length>0?r=f[f.length-1].text:r=a.body}catch{r=a.body}const d=r.length>28?r.slice(0,26)+"...":r,c=a.status==="open"?'<span style="font-size:9px; background:#ef444422; color:#ef4444; padding:2px 6px; border-radius:99px; font-weight:700">Yeni</span>':a.status==="resolved"?'<span style="font-size:9px; background:#10b98122; color:#10b981; padding:2px 6px; border-radius:99px; font-weight:700">Cevaplandı</span>':'<span style="font-size:9px; background:var(--border2); color:var(--text-dim); padding:2px 6px; border-radius:99px; font-weight:700">Kapatıldı</span>',p=i?"var(--accent-dim)":"var(--surface)",m=i?"1.5px solid var(--accent)":"1px solid var(--border)",u=i?"10px 11px":"10px 12px";return`
            <div onclick="selectDevTicket('${a.id}')" style="background:${p}; border:${m}; border-radius:10px; padding:${u}; cursor:pointer; display:flex; flex-direction:column; gap:4px; transition:all .15s">
              <div style="display:flex; justify-content:space-between; align-items:center">
                <span style="font-weight:700; font-size:12px; color:var(--text); overflow:hidden; text-overflow:ellipsis; white-space:nowrap; max-width:140px">${v(o)}</span>
                <span style="font-size:9px; font-weight:800; color:var(--text-dim)">${s}</span>
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
  `,ks(),jt&&clearInterval(jt),jt=setInterval(hs,4e3)}function bs(e){me=e,Xe()}async function hs(){if(!me||!document.getElementById("devChatArea"))return;const{data:t,error:n}=await y.from("tickets").select("*,users!tickets_user_id_fkey(full_name,role)").eq("id",me).single();if(n||!t)return;let a=[];try{a=JSON.parse(t.body),Array.isArray(a)||(a=[{sender:"user",text:t.body,time:t.created_at}])}catch{a=[{sender:"user",text:t.body,time:t.created_at}]}const i=document.getElementById("devChatMessages");if(i){const o=i.scrollTop,s=i.scrollHeight-i.clientHeight-o<40;i.innerHTML=a.map(r=>{const d=r.sender==="emin",c=d?"Kurucu / Destek":r.sender==="ai"?"Yapay Zeka":r.name||"Kullanıcı",p=d?"var(--blue)":r.sender==="ai"?"var(--surface2)":"var(--accent)",m=d?"#fff":r.sender==="ai"?"var(--text)":"var(--on-accent)",u=d?"flex-end":"flex-start",g=d?"14px 14px 4px 14px":"14px 14px 14px 4px",_=new Date(r.time).toLocaleTimeString("tr-TR",{hour:"2-digit",minute:"2-digit"});return`
        <div style="align-self:${u}; max-width:80%; display:flex; flex-direction:column; align-items:${d?"flex-end":"flex-start"}">
          <div style="font-size:10px; color:var(--text-dim); margin-bottom:3px; font-weight:600">${c}</div>
          <div style="padding:10px 14px; border-radius:${g}; background:${p}; color:${m}; font-size:13px; line-height:1.5; word-wrap:break-word; white-space:pre-wrap">${v(r.text)}</div>
          <div style="font-size:9px; color:var(--text-dim); margin-top:4px">${_}</div>
        </div>
      `}).join(""),s&&(i.scrollTop=i.scrollHeight)}}function ks(){var s,r,d;const e=document.getElementById("devChatArea");if(!e)return;const t=Fe.find(c=>c.id===me);if(!t){e.innerHTML=`
      <div style="flex:1; display:flex; flex-direction:column; align-items:center; justify-content:center; color:var(--text-dim); padding:20px; text-align:center">
        <div style="font-size:48px; margin-bottom:12px">🎫</div>
        <div style="font-weight:700">Aktif Sohbet Seçilmedi</div>
        <div style="font-size:12px; margin-top:4px">Soldaki listeden bir destek sohbeti seçerek yanıtlayabilirsiniz.</div>
      </div>
    `;return}const n=((s=t.users)==null?void 0:s.full_name)||"Kullanıcı",a=((r=t.users)==null?void 0:r.role)==="coach"?"KOÇ":((d=t.users)==null?void 0:d.role)==="parent"?"VELİ":"ÖĞRENCİ";let i=[];try{i=JSON.parse(t.body),Array.isArray(i)||(i=[{sender:"user",text:t.body,time:t.created_at}])}catch{i=[{sender:"user",text:t.body,time:t.created_at}]}e.innerHTML=`
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
      ${i.map(c=>{const p=c.sender==="emin",m=p?"Kurucu / Destek":c.sender==="ai"?"Yapay Zeka":c.name||"Kullanıcı",u=p?"var(--blue)":c.sender==="ai"?"var(--surface2)":"var(--accent)",g=p?"#fff":c.sender==="ai"?"var(--text)":"var(--on-accent)",_=p?"flex-end":"flex-start",T=p?"14px 14px 4px 14px":"14px 14px 14px 4px",f=new Date(c.time).toLocaleTimeString("tr-TR",{hour:"2-digit",minute:"2-digit"});return`
          <div style="align-self:${_}; max-width:80%; display:flex; flex-direction:column; align-items:${p?"flex-end":"flex-start"}">
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
  `;const o=document.getElementById("devChatMessages");o&&(o.scrollTop=o.scrollHeight)}async function ws(){const e=document.getElementById("devReplyInput"),t=e.value.trim();if(!t||!me)return;e.value="",M(!0);const{data:n}=await y.from("tickets").select("body").eq("id",me).single();let a=[];if(n&&n.body)try{a=JSON.parse(n.body)}catch{a=[{sender:"user",text:n.body,time:new Date().toISOString()}]}const i={sender:"emin",text:t,time:new Date().toISOString(),name:"Kurucu / Destek"};a.push(i);const{error:o}=await y.from("tickets").update({body:JSON.stringify(a),reply:t,status:"resolved",updated_at:new Date().toISOString()}).eq("id",me);if(M(!1),o){x("Hata: "+o.message);return}x("Yanıt gönderildi ✓"),Xe()}async function $s(e,t){await y.from("tickets").update({status:t,updated_at:new Date().toISOString()}).eq("id",e),x("Durum güncellendi ✓"),Xe()}async function Es(e){await ie("Bu talebi silmek istediğinizden emin misiniz?")&&(await y.from("tickets").delete().eq("id",e),x("Silindi"),me=null,Xe())}function _s(){Mt()}async function Mt(){let e=document.getElementById("supportChatModal");e||(e=document.createElement("div"),e.id="supportChatModal",e.className="modal-bg",e.style.zIndex="99999999",e.innerHTML=`
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
    `,document.body.appendChild(e),e.addEventListener("click",t=>{var a;const n=(a=document.getElementById("trialExpiredModal"))==null?void 0:a.classList.contains("open");t.target===e&&!n&&ha()})),G("supportChatModal"),await $t(),Ge&&clearInterval(Ge),Ge=setInterval($t,4e3)}function ha(){q("supportChatModal"),Ge&&(clearInterval(Ge),Ge=null)}async function $t(){var o,s;const e=(o=b.dbUser)==null?void 0:o.id;if(!e)return;const t=document.getElementById("supportMessages");if(!t)return;const{data:n,error:a}=await y.from("tickets").select("*").eq("user_id",e).eq("status","open").order("created_at",{ascending:!1}).limit(1);if(a){console.error("Error fetching ticket:",a);return}const i=n&&n[0];if(i){wt=i.id,_e="emin";const r=document.getElementById("supportStatusLabel");r&&(r.textContent="● Kurucu / Destek Ekibi");let d=[];try{d=JSON.parse(i.body),Array.isArray(d)||(d=[{sender:"user",text:i.body,time:i.created_at}])}catch{d=[{sender:"user",text:i.body,time:i.created_at}]}i.reply&&((s=d[d.length-1])==null?void 0:s.text)!==i.reply&&d.push({sender:"emin",text:i.reply,time:i.updated_at}),it(d)}else if(_e==="welcome"){const r=document.getElementById("supportStatusLabel");r&&(r.textContent="● Çevrimiçi Asistan"),t.innerHTML=`
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
      `}else if(_e==="ai"){const r=document.getElementById("supportStatusLabel");r&&(r.textContent="● Yapay Zeka"),it(ve)}}function it(e){const t=document.getElementById("supportMessages");if(!t)return;const n=t.scrollTop,a=t.scrollHeight-t.clientHeight-n<40;t.innerHTML=e.map(i=>{const o=i.sender==="user",s=o?"Siz":i.sender==="ai"?"Yapay Zeka Asistanı":"Kurucu / Destek Ekibi",r=o?"var(--accent)":"var(--surface2)",d=o?"none":"1px solid var(--border)",c=o?"var(--on-accent)":"var(--text)",p=o?"flex-end":"flex-start",m=o?"14px 14px 4px 14px":"14px 14px 14px 4px",u=new Date(i.time).toLocaleTimeString("tr-TR",{hour:"2-digit",minute:"2-digit"});return`
      <div style="align-self:${p};max-width:80%;display:flex;flex-direction:column;align-items:${o?"flex-end":"flex-start"}">
        <div style="font-size:10px;color:var(--text-dim);margin-bottom:3px;font-weight:600">${s}</div>
        <div style="padding:10px 14px;border-radius:${m};background:${r};border:${d};color:${c};font-size:13px;line-height:1.5;word-wrap:break-word;white-space:pre-wrap">${v(i.text)}</div>
        <div style="font-size:9px;color:var(--text-dim);margin-top:4px">${u}</div>
      </div>
    `}).join(""),a&&(t.scrollTop=t.scrollHeight)}function Ts(){_e="ai",ve=[{sender:"ai",text:"Merhaba! Ben Rostrum Akademi Yapay Zeka Asistanıyım. 🤖 Size nasıl yardımcı olabilirim?",time:new Date().toISOString()}],it(ve)}function Ss(){_e="emin_start";const e=document.getElementById("supportMessages");e&&(e.innerHTML=`
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
    `)}async function Is(){var c,p;const e=document.getElementById("eminSubject"),t=document.getElementById("eminInitialMessage"),n=e?e.value.trim():"Müşteri Destek Sohbeti",a=t?t.value.trim():"";if(!a)return x("Mesaj boş olamaz!");const i=(c=b.dbUser)==null?void 0:c.id,o=((p=b.dbUser)==null?void 0:p.full_name)||"Kullanıcı",s={sender:"user",text:a,time:new Date().toISOString(),name:o};M(!0);const{data:r,error:d}=await y.from("tickets").insert({user_id:i,subject:n,body:JSON.stringify([s]),category:"emin",status:"open"}).select().single();if(M(!1),d){x("Hata: "+d.message);return}wt=r.id,_e="emin",x("Talebiniz destek ekibine iletildi ✓"),await $t()}async function zs(){var n;const e=document.getElementById("supportInput"),t=e.value.trim();if(t){if(e.value="",_e==="ai"){const a={sender:"user",text:t,time:new Date().toISOString()};ve.push(a),it(ve);const i=document.getElementById("supportTyping");i&&(i.style.display="flex");try{const o=(window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1","/api/ai-chat"),s=ve.slice(-10).map(c=>({role:c.sender==="user"?"user":"assistant",content:c.text})),r=await fetch(o,{method:"POST",headers:await st(),body:JSON.stringify({messages:s,context:{},userRole:"parent"})});let d="";r.ok?d=(await r.json()).reply:d=await Te(t,{},b.role||"coach"),ve.push({sender:"ai",text:d,time:new Date().toISOString()})}catch{try{const s=await Te(t,{},b.role||"coach");ve.push({sender:"ai",text:s,time:new Date().toISOString()})}catch{ve.push({sender:"ai",text:"Üzgünüm, şu anda yanıt veremiyorum. Lütfen daha sonra tekrar deneyin veya doğrudan destek ekibimize mesaj gönderin.",time:new Date().toISOString()})}}finally{i&&(i.style.display="none"),it(ve)}}else if(_e==="emin"){const a=((n=b.dbUser)==null?void 0:n.full_name)||"Kullanıcı",i={sender:"user",text:t,time:new Date().toISOString(),name:a};M(!0);const{data:o}=await y.from("tickets").select("body").eq("id",wt).single();let s=[];if(o&&o.body)try{s=JSON.parse(o.body)}catch{s=[{sender:"user",text:o.body,time:new Date().toISOString(),name:a}]}s.push(i);const{error:r}=await y.from("tickets").update({body:JSON.stringify(s),status:"open",updated_at:new Date().toISOString()}).eq("id",wt);if(M(!1),r){x("Gönderim hatası: "+r.message);return}await $t()}}}async function ka(){const{data:e}=await y.from("announcements").select("*").eq("active",!0),t=b.role,n=(e||[]).filter(o=>o.target==="all"||o.target==="students"&&t==="student"||o.target==="coaches"&&t==="coach");if(!n.length)return;const a={info:"var(--blue)",warning:"var(--accent)",success:"var(--green)",urgent:"var(--red)"},i=document.createElement("div");i.style.cssText="position:fixed;top:64px;right:16px;z-index:400;display:flex;flex-direction:column;gap:8px;max-width:340px",i.id="announceBanner",n.slice(0,3).forEach(o=>{const s=document.createElement("div");s.style.cssText=`background:var(--surface);border:1px solid var(--border);border-left:3px solid ${a[o.type]||"var(--accent)"};border-radius:10px;padding:12px 14px;box-shadow:var(--shadow);animation:fadeUp .3s ease`,s.innerHTML=`<div style="display:flex;justify-content:space-between;align-items:flex-start;gap:8px">
      <div><div style="font-size:13px;font-weight:700;margin-bottom:3px">${v(o.title)}</div><div style="font-size:12px;color:var(--text-mid)">${v(o.body)}</div></div>
      <button onclick="this.closest('div[style]').remove()" style="background:none;border:none;cursor:pointer;color:var(--text-dim);font-size:16px;flex-shrink:0">×</button>
    </div>`,i.appendChild(s)}),document.body.appendChild(i),setTimeout(()=>i.remove(),8e3)}(()=>{const e=document.createElement("style");e.textContent=".role-dev{background:rgba(192,132,252,.15);color:#c084fc;}",document.head.appendChild(e)})();function wa(e){return`ra_ob_${b.coachId}_${e}`}function Ft(e){return localStorage.getItem(wa(e))==="1"}function Bs(e){localStorage.setItem(wa(e),"1"),$a(),["student","program","report"].every(n=>Ft(n))&&Ms()}async function Ms(){const e=document.getElementById("obWidget");e&&(e.innerHTML=`<div style="padding:20px;text-align:center">
      <div style="font-size:36px;margin-bottom:8px">🎉</div>
      <div style="font-weight:800;color:var(--text);margin-bottom:4px">Harika iş!</div>
      <div style="font-size:12px;color:var(--text-mid)">İlk adımları tamamladınız.</div>
    </div>`,setTimeout(()=>e.remove(),3e3)),await y.from("workspaces").update({onboarding_done:!0}).eq("coach_id",b.coachId),l.workspace&&(l.workspace.onboarding_done=!0)}function $a(){const e=document.getElementById("obWidget");if(!e)return;const t=[{id:"student",icon:"👤",label:"İlk öğrencinizi ekleyin",action:"window.openStudentModal?.()",btnLabel:"Ekle →"},{id:"program",icon:"📅",label:"Haftalık program oluşturun",action:"switchTab('program')",btnLabel:"Git →"},{id:"report",icon:"📄",label:"İlk raporunuzu gönderin",action:"switchTab('program')",btnLabel:"Git →"}],n=t.filter(i=>Ft(i.id)).length,a=Math.round((n+1)/(t.length+1)*100);e.querySelector(".ob-body").innerHTML=t.map(i=>{const o=Ft(i.id);return`<div style="display:flex;align-items:center;gap:10px;padding:9px 0;border-bottom:1px solid var(--border)">
      <div style="width:22px;height:22px;border-radius:50%;border:2px solid ${o?"var(--green)":"var(--border2)"};background:${o?"var(--green)":"transparent"};display:flex;align-items:center;justify-content:center;flex-shrink:0">
        ${o?'<svg width="10" height="8" viewBox="0 0 10 8"><path d="M1 4L4 7L9 1" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/></svg>':""}
      </div>
      <div style="flex:1;font-size:12px;color:${o?"var(--text-dim)":"var(--text)"};${o?"text-decoration:line-through":""}">
        <span style="margin-right:5px">${i.icon}</span>${i.label}
      </div>
      ${o?"":`<button onclick="${i.action};window._obMarkDone?.('${i.id}')" style="font-size:11px;font-weight:700;color:var(--accent);background:none;border:none;cursor:pointer;white-space:nowrap;padding:0">${i.btnLabel}</button>`}
    </div>`}).join(""),e.querySelector(".ob-progress-bar-inner").style.width=a+"%",e.querySelector(".ob-progress-text").textContent=`${n+1}/${t.length+1} tamamlandı`}function Ds(){var n;if(document.getElementById("obWidget"))return;const e=((n=l.workspace)==null?void 0:n.brand_color)||"var(--accent)",t=document.createElement("div");t.id="obWidget",t.style.cssText="position:fixed;bottom:90px;right:20px;width:290px;background:var(--surface);border:1px solid var(--border2);border-radius:16px;box-shadow:var(--shadow-lg);z-index:4000;overflow:hidden",t.innerHTML=`
    <div style="background:${e};padding:12px 14px;display:flex;align-items:center;justify-content:space-between">
      <div>
        <div style="font-size:13px;font-weight:800;color:#fff">Başlangıç Görevleri</div>
        <div style="font-size:10px;color:rgba(255,255,255,.7);margin-top:1px" class="ob-progress-text">1/4 tamamlandı</div>
      </div>
      <button onclick="document.getElementById('obWidget').remove()" style="background:none;border:none;color:rgba(255,255,255,.6);font-size:18px;cursor:pointer;padding:0;line-height:1">×</button>
    </div>
    <div style="height:3px;background:rgba(255,255,255,.2)"><div class="ob-progress-bar-inner" style="height:100%;background:#fff;transition:width .4s;width:25%"></div></div>
    <div style="padding:4px 14px 14px" class="ob-body"></div>`,document.body.appendChild(t),$a()}window._obMarkDone=Bs;function Ea(){var a,i,o;const e=((i=(a=b.dbUser)==null?void 0:a.full_name)==null?void 0:i.split(" ")[0])||"Koç",t=((o=l.workspace)==null?void 0:o.brand_color)||"var(--accent)";let n=document.getElementById("onboardingModal");n||(n=document.createElement("div"),n.id="onboardingModal",n.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,.85);z-index:9000;display:flex;align-items:center;justify-content:center;padding:20px;backdrop-filter:blur(8px)",document.body.appendChild(n)),n.innerHTML=`<div style="background:var(--surface);border:1px solid var(--border2);border-radius:24px;width:100%;max-width:460px;padding:36px 32px;animation:fadeUp .3s ease;box-shadow:var(--shadow-lg);text-align:center">
    <div style="font-size:48px;margin-bottom:14px">🎓</div>
    <h3 style="font-size:22px;font-weight:800;color:var(--text);margin-bottom:8px;line-height:1.2">Hoş geldiniz, ${v(e)}!</h3>
    <p style="font-size:13px;color:var(--text-mid);line-height:1.65;margin-bottom:24px">
      <strong style="color:${t}">14 günlük ücretsiz denemeniz</strong> başladı.<br>
      İlk öğrencinize rapor gönderdiğinizde platformun farkını göreceksiniz.
    </p>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:24px;text-align:left">
      ${[["📅","Haftalık Program","Görev ata, ilerlemeyi izle"],["📊","D/Y/B Takibi","Net analizi anlık gör"],["🤖","AI Asistan","Öğrenci 7/24 destek alır"],["📄","PDF Rapor","Marka renginle profesyonel"]].map(([s,r,d])=>`
        <div style="background:var(--surface2);border:1px solid var(--border);border-radius:10px;padding:10px">
          <div style="font-size:18px;margin-bottom:4px">${s}</div>
          <div style="font-size:11px;font-weight:700;color:var(--text)">${r}</div>
          <div style="font-size:10px;color:var(--text-dim);margin-top:2px">${d}</div>
        </div>`).join("")}
    </div>
    <button class="btn btn-accent" style="width:100%;padding:14px;font-size:15px;font-weight:800" onclick="document.getElementById('onboardingModal').remove();showOnboardingWidget()">
      Hadi Başlayalım! →
    </button>
    <div style="font-size:11px;color:var(--text-dim);margin-top:12px">Kredi kartı gerekmez · 14 gün sonra uzatabilirsiniz</div>
  </div>`}let je=0;const U={};async function As(){const e=l.students.find(i=>i.id===b.studentId);if(!e)return;const t=e.name.split(" ")[0],n=e.color||"var(--accent)";U={};try{const{data:i}=await y.from("student_profiles").select("*").eq("id",b.studentId).maybeSingle();i&&(U.parent_email=i.parent_email||"",U.parent_phone=i.parent_phone||"",U.target_rank=i.target_rank||"",U.target_university=i.target_university||"",U.target_department=i.target_department||"",U.struggling_subjects=i.struggling_subjects||"",U.daily_capacity=i.daily_capacity||8)}catch{}U.yks_area=e.yks_area||"SAY",U.daily_capacity===void 0&&(U.daily_capacity=8);let a=document.getElementById("stuWelcomeModal");a||(a=document.createElement("div"),a.id="stuWelcomeModal",a.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,.85);z-index:9000;display:flex;align-items:center;justify-content:center;padding:20px;backdrop-filter:blur(8px)",document.body.appendChild(a)),je=0,_a(a,t,n,e)}function Ee(e){const t=document.getElementById("sw_err");t&&(t.textContent=e,t.style.display="block",setTimeout(()=>{t&&(t.style.display="none")},5e3))}function _a(e,t,n,a){const i="width:100%;padding:12px 14px;background:var(--surface2);border:1.5px solid var(--border);border-radius:10px;color:var(--text);font-size:14px;outline:none;font-family:inherit;box-sizing:border-box",o="font-size:11px;font-weight:700;color:var(--text-mid);display:block;margin-bottom:5px;text-transform:uppercase;letter-spacing:.05em",s="font-size:11px;color:var(--text-dim);margin-top:5px;line-height:1.5",r=[{v:"SAY",ico:"🔬",name:"Sayısal",sub:"Mat · Fen"},{v:"EA",ico:"⚖️",name:"Eşit Ağırlık",sub:"Mat · Edb"},{v:"SOZ",ico:"📖",name:"Sözel",sub:"Edb · Sosyal"},{v:"DIL",ico:"🌍",name:"Dil",sub:"Yabancı Dil"}],d=[()=>`<div style="text-align:center">
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
      <p style="${s};margin-bottom:16px">Koçunun sana doğru dersleri önerebilmesi için sınav alanını seçmelisin.</p>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:16px" id="sw_area_grid">
        ${r.map(u=>`
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
          ${["Matematik","Fizik","Kimya","Biyoloji","Türkçe","Tarih","Coğrafya","Felsefe","İngilizce"].map(_=>`
            <button onclick="this.classList.toggle('sel');document.getElementById('sw_struggle').value=[...document.getElementById('sw_struggle_btns').querySelectorAll('.sel')].map(b=>b.dataset.v).join(', ')" data-v="${_}"
              class="sw-chip ${(U.struggling_subjects||"").includes(_)?"sel":""}"
              style="padding:6px 14px;border-radius:99px;border:1.5px solid var(--border);background:var(--surface2);color:var(--text);font-size:12px;font-weight:600;cursor:pointer;transition:all .15s">${_}</button>`).join("")}
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
        <div style="${s}">Koçunun sana günlük limitini aşmayacak programlar atamasını sağlar.</div>
      </div>
      <div style="margin-bottom:12px">
        <label style="${o}">Veli E-Posta Adresi <span style="color:var(--red)">*</span></label>
        <input id="sw_pmail" type="email" value="${v(U.parent_email||"")}" placeholder="veli@eposta.com"
          style="${i}" onfocus="this.style.borderColor='${n}'" onblur="this.style.borderColor='var(--border)'">
        <div style="${s}">Haftalık gelişim raporlarının veline gönderilebilmesi için gereklidir.</div>
      </div>
      <div style="margin-bottom:16px">
        <label style="${o}">Veli Telefon Numarası <span style="color:var(--red)">*</span></label>
        <input id="sw_pphone" type="tel" value="${v(U.parent_phone||"")}" placeholder="0 (5__) ___ __ __"
          oninput="maskPhoneTR(this)"
          style="${i}" onfocus="this.style.borderColor='${n}'" onblur="this.style.borderColor='var(--border)'">
      </div>
      <div id="sw_err" style="display:none;color:var(--red);font-size:12px;margin-bottom:12px;padding:10px 14px;background:var(--red-dim);border-radius:8px;font-weight:600"></div>
      <button class="btn btn-accent" style="width:100%;padding:13px;font-weight:800" onclick="window._swSave()">Tamamla ve Başla →</button>
    </div>`],c=je>0?`<div style="height:3px;background:var(--border);border-radius:99px;margin-bottom:24px;overflow:hidden"><div style="height:100%;width:${Math.round(je/3*100)}%;background:${n};transition:width .4s"></div></div>`:"";e.innerHTML=`<div style="background:var(--surface);border:1px solid var(--border2);border-radius:24px;width:100%;max-width:460px;padding:32px;animation:fadeUp .3s ease;max-height:90vh;overflow-y:auto;box-shadow:var(--shadow-lg)">
    ${c}
    ${d[je]()}
  </div>`;const p=()=>e.querySelectorAll(".sw-area").forEach(u=>{const g=u.classList.contains("sel");u.style.borderColor=g?n:"var(--border)",u.style.background=g?`color-mix(in srgb, ${n} 10%, var(--surface2))`:"var(--surface2)"});e.querySelectorAll(".sw-area").forEach(u=>u.addEventListener("click",p)),p();const m=u=>{const g=u.classList.contains("sel");u.style.background=g?n:"var(--surface2)",u.style.borderColor=g?n:"var(--border)",u.style.color=g?"#fff":"var(--text)"};e.querySelectorAll(".sw-chip").forEach(u=>{m(u),u.addEventListener("click",function(){m(this)})})}window.maskPhoneTR=function(e){let t=e.value.replace(/\D/g,"");t.length>0&&!t.startsWith("0")&&(t="0"+t);let n="";t.length>0&&(n="0"),t.length>1&&(n+=" ("+t.substring(1,4)),t.length>=4&&(n+=")"),t.length>4&&(n+=" "+t.substring(4,7)),t.length>7&&(n+=" "+t.substring(7,9)),t.length>9&&(n+=" "+t.substring(9,11)),e.value=n};window._swNext=function(){var n,a,i,o,s,r,d,c,p,m,u;const e=document.getElementById("stuWelcomeModal");if(!e)return;if(je===1){const g=(a=(n=e.querySelector(".sw-area.sel"))==null?void 0:n.dataset)==null?void 0:a.v;if(!g){Ee("Lütfen hazırlık alanınızı seçin.");return}U.yks_area=g}if(je===2){const g=(o=(i=document.getElementById("sw_rank"))==null?void 0:i.value)==null?void 0:o.trim();if(!g){Ee("Lütfen hedef sıralamanızı girin.");return}const _=parseInt(g);if(isNaN(_)||_<=0||_>=5e6){Ee("Lütfen geçerli bir hedef sıralaması girin.");return}U.target_rank=_;const f=(((r=(s=document.getElementById("sw_uni"))==null?void 0:s.value)==null?void 0:r.trim())||"").split("-");U.target_university=((d=f[0])==null?void 0:d.trim())||"",U.target_department=((c=f[1])==null?void 0:c.trim())||"",U.struggling_subjects=((m=(p=document.getElementById("sw_struggle"))==null?void 0:p.value)==null?void 0:m.trim())||""}je++;const t=l.students.find(g=>g.id===b.studentId);_a(e,((u=t==null?void 0:t.name)==null?void 0:u.split(" ")[0])||"",(t==null?void 0:t.color)||"var(--accent)",t)};window._swSkip=function(){var e;(e=document.getElementById("stuWelcomeModal"))==null||e.remove(),y.from("student_profiles").upsert({id:b.studentId}).then(()=>{})};window._swSave=async function(){var a,i,o,s,r,d;const e=((i=(a=document.getElementById("sw_pmail"))==null?void 0:a.value)==null?void 0:i.trim())||"",t=((s=(o=document.getElementById("sw_pphone"))==null?void 0:o.value)==null?void 0:s.trim())||"",n=parseInt((r=document.getElementById("sw_hours"))==null?void 0:r.value)||8;if(!e){Ee("Lütfen velinizin e-posta adresini girin.");return}if(!e.includes("@")){Ee("Geçerli bir veli e-posta adresi girin.");return}if(!t||t.replace(/\D/g,"").length<10){Ee("Lütfen geçerli bir veli telefon numarası girin.");return}M(!0,"Kaydediliyor...");try{await y.from("users").update({yks_area:U.yks_area}).eq("id",b.studentId);const c=l.students.find(u=>u.id===b.studentId);c&&(c.yksArea=U.yks_area);const p={id:b.studentId,target_rank:U.target_rank,target_university:U.target_university||"",target_department:U.target_department||"",struggling_subjects:U.struggling_subjects||"",parent_email:e,parent_phone:t,daily_capacity:n,onboarding_done:!0};let{error:m}=await y.from("student_profiles").upsert(p);if(m&&/column/i.test(m.message||"")&&({error:m}=await y.from("student_profiles").upsert({id:p.id,target_university:p.target_university,target_department:p.target_department,struggling_subjects:p.struggling_subjects,daily_capacity:p.daily_capacity,bio:`Hedef sıralama: ${p.target_rank} · Veli: ${e} / ${t}`})),m)return M(!1),Ee("Kaydedilemedi: "+m.message)}catch(c){return M(!1),Ee("Kaydedilemedi: "+(c.message||c))}M(!1),(d=document.getElementById("stuWelcomeModal"))==null||d.remove(),x("Profilin başarıyla kaydedildi! 🎉"),se("sportal")};let Pt=null;window.addEventListener("beforeinstallprompt",e=>{e.preventDefault(),Pt=e;const t=document.createElement("button");t.id="pwaInstallBtn",t.className="btn btn-ghost btn-sm",t.innerHTML="📲 Yükle",t.style.cssText="font-size:11px;padding:5px 10px",t.onclick=async()=>{Pt.prompt();const{outcome:a}=await Pt.userChoice;a==="accepted"&&(t.remove(),x("Uygulama yüklendi ✓"))};const n=document.querySelector(".tbar-right");n&&n.insertBefore(t,document.querySelector(".user-pill"))});async function Ta(){const e=l.students.find(z=>z.id===b.studentId);if(!e)return;const t=document.getElementById("view-sprofil");if(!t)return;const{data:n,error:a}=await y.from("student_profiles").select("*").eq("id",b.studentId).maybeSingle();a&&console.error("Öğrenci profili yüklenirken hata:",a);const i=(n==null?void 0:n.bio)||"",o=(n==null?void 0:n.school)||"",s=(n==null?void 0:n.grade)||"",r=(n==null?void 0:n.target_university)||"",d=(n==null?void 0:n.target_department)||"",c=(n==null?void 0:n.struggling_subjects)||"",p=(n==null?void 0:n.daily_capacity)||"",m=l.exams.filter(z=>z.studentId===e.id).sort((z,E)=>z.date.localeCompare(E.date)),u=m[m.length-1],g=u?(EXAM_DEFS[u.type]||[]).reduce((E,A)=>{var C;return E+Number(((C=u.nets)==null?void 0:C[A])||0)},0).toFixed(1):"—",_=ne(0,e.weekStart??0);let T=0,f=0;for(let z=0;z<7;z++){const E=l.tasks[`${e.id}_${O(J(_,z))}`]||[];T+=E.length,f+=E.filter(A=>A.done).length}const $=T>0?Math.round(f/T*100):0;let w=0;if(Object.keys(l.tasks).filter(z=>z.startsWith(e.id+"_")).forEach(z=>{w+=l.tasks[z].filter(E=>E.done).length}),m.length===0&&w===0){t.innerHTML=`<div style="text-align:center;padding:60px 24px;max-width:360px;margin:0 auto">
      <div style="font-size:52px;margin-bottom:16px">🌱</div>
      <div style="font-size:18px;font-weight:800;color:var(--text);margin-bottom:8px">Yolculuğun Yeni Başlıyor</div>
      <div style="font-size:14px;color:var(--text-mid);line-height:1.65;margin-bottom:28px">Koçun haftalık programını oluşturdukça görev istatistiklerin, deneme netlerini girdikçe gelişim grafiklerin burada belirmeye başlayacak.</div>
      <div style="display:flex;flex-direction:column;gap:10px;text-align:left">
        <div style="background:var(--surface);border:1px solid var(--border);border-radius:12px;padding:14px 16px;font-size:13px;display:flex;align-items:center;gap:12px"><span style="font-size:20px">📋</span><span>Koçunun program oluşturmasını bekle</span></div>
        <div style="background:var(--surface);border:1px solid var(--border);border-radius:12px;padding:14px 16px;font-size:13px;display:flex;align-items:center;gap:12px"><span style="font-size:20px">✅</span><span>Görevleri tamamladıkça istatistiklerin görünecek</span></div>
        <div style="background:var(--surface);border:1px solid var(--border);border-radius:12px;padding:14px 16px;font-size:13px;display:flex;align-items:center;gap:12px"><span style="font-size:20px">📈</span><span>Deneme netlerini girdikçe grafiklerin oluşacak</span></div>
      </div>
    </div>`;return}if(m.length>0){const z=m.slice(-6),E=Math.max(...z.map(A=>(EXAM_DEFS[A.type]||[]).reduce((L,k)=>{var D;return L+Number(((D=A.nets)==null?void 0:D[k])||0)},0)),1);`${z.map(A=>{const L=(EXAM_DEFS[A.type]||[]).reduce((H,F)=>{var V;return H+Number(((V=A.nets)==null?void 0:V[F])||0)},0),k=Math.max(Math.round(L/E*100),4),D=z[z.indexOf(A)-1],j=D?(EXAM_DEFS[D.type]||[]).reduce((H,F)=>{var V;return H+Number(((V=D.nets)==null?void 0:V[F])||0)},0):L,P=L>j?"↑":L<j?"↓":"",Y=L>j?"var(--green)":L<j?"var(--red)":"var(--text-dim)";return`<div style="flex:1;display:flex;flex-direction:column;align-items:center;gap:3px">
              <div style="font-size:10px;font-weight:700;color:var(--text-mid)">${L.toFixed(0)}</div>
              <div style="font-size:9px;color:${Y};font-weight:800">${P}</div>
              <div style="width:100%;background:${e.color};border-radius:4px 4px 0 0;height:${k}%;min-height:4px"></div>
              <div style="font-size:9px;color:var(--text-dim);text-align:center;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;width:100%">${v(A.name.replace("Deneme","").replace("TYT","").replace("AYT","").trim())}</div>
            </div>`}).join("")}`}if(m.length>0){const z=u.type,A=(EXAM_DEFS[z]||[]).map(C=>{var j;const L=m.filter(P=>P.type===z).map(P=>{var Y;return Number(((Y=P.nets)==null?void 0:Y[C])||0)}),k=L.length?L.reduce((P,Y)=>P+Y,0)/L.length:0,D=Number(((j=u.nets)==null?void 0:j[C])||0);return{f:C,avg:k.toFixed(1),last:D,color:Gt(D)}});`${z}${A.map(C=>`
            <div style="background:var(--surface2);border:1px solid var(--border);border-radius:9px;padding:10px;text-align:center">
              <div style="font-size:10px;color:var(--text-dim);font-weight:700;margin-bottom:4px;text-transform:uppercase">${C.f}</div>
              <div style="font-family:'Inter',sans-serif;font-size:22px;font-weight:800;color:var(--${C.color==="good"?"green":C.color==="mid"?"accent":"red"})">${C.last}</div>
              <div style="font-size:10px;color:var(--text-dim);margin-top:2px">ort: ${C.avg}</div>
            </div>`).join("")}`}const B=l.appointments.filter(z=>z.studentId===e.id&&z.date>=ue()).sort((z,E)=>z.date.localeCompare(E.date)).slice(0,3),h=r||d;n!=null&&n.motivation;const S=m.slice(-7),I=Math.max(...S.map(z=>(EXAM_DEFS[z.type]||[]).reduce((A,C)=>{var L;return A+Number(((L=z.nets)==null?void 0:L[C])||0)},0)),1);t.innerHTML=`
    <!-- HERO -->
    <div style="background:linear-gradient(135deg,${e.color}22 0%,${e.color}08 100%);border:1px solid ${e.color}33;border-radius:16px;padding:20px 24px;margin-bottom:14px;display:flex;align-items:center;gap:18px">
      <div style="width:64px;height:64px;border-radius:16px;background:${e.color};display:flex;align-items:center;justify-content:center;font-size:26px;font-weight:800;color:#fff;flex-shrink:0">${e.name[0]}</div>
      <div style="flex:1;min-width:0">
        <div style="font-size:20px;font-weight:800;color:var(--text)">${v(e.name)}</div>
        <div style="font-size:13px;color:var(--text-mid);margin-top:2px">${v(e.target)}${s?" · "+v(s):""}${o?" · "+v(o):""}</div>
        ${h?`<div style="display:inline-flex;align-items:center;gap:6px;margin-top:8px;background:${e.color};color:#fff;padding:4px 12px;border-radius:99px;font-size:11px;font-weight:700">🎯 ${[r,d].filter(Boolean).join(" · ")}</div>`:""}
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
        ${S.map((z,E)=>{const C=(EXAM_DEFS[z.type]||[]).reduce((F,V)=>{var Z;return F+Number(((Z=z.nets)==null?void 0:Z[V])||0)},0),L=Math.max(Math.round(C/I*132),4),k=S[E-1],D=k?(EXAM_DEFS[k.type]||[]).reduce((F,V)=>{var Z;return F+Number(((Z=k.nets)==null?void 0:Z[V])||0)},0):C,j=C>D,P=C<D,Y=j?"var(--green)":P?"var(--red)":e.color,H=v(z.name.replace(/deneme|tyt|ayt/gi,"").trim()).slice(0,10)||"#"+(E+1);return`<div style="flex:1;display:flex;flex-direction:column;align-items:center;gap:0;position:relative">
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
        ${(()=>{const z=EXAM_DEFS[u.type]||[],E=m.filter(C=>C.type===u.type),A=Math.max(...z.map(C=>Math.max(...E.map(L=>{var k;return Number(((k=L.nets)==null?void 0:k[C])||0)}))),1);return z.map(C=>{var Y;const L=Number(((Y=u.nets)==null?void 0:Y[C])||0),k=E.map(H=>{var F;return Number(((F=H.nets)==null?void 0:F[C])||0)}),D=k.length?k.reduce((H,F)=>H+F,0)/k.length:0,j=Math.round(L/A*100),P=L>=D*1.1?"var(--green)":L<D*.9?"var(--red)":e.color;return`<div style="display:flex;align-items:center;gap:10px">
              <div style="width:90px;font-size:11px;font-weight:700;color:var(--text-mid);flex-shrink:0;text-transform:uppercase">${C}</div>
              <div style="flex:1;height:8px;background:var(--surface2);border-radius:99px;overflow:hidden">
                <div style="height:100%;width:${j}%;background:${P};border-radius:99px;transition:width .5s"></div>
              </div>
              <div style="width:36px;text-align:right;font-size:13px;font-weight:800;color:${P};flex-shrink:0">${L.toFixed(1)}</div>
              <div style="width:28px;font-size:10px;color:var(--text-dim);flex-shrink:0">ort: ${D.toFixed(1)}</div>
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
        ${[["Okul",o],["Sınıf",s],["Hedef Üniversite",r],["Hedef Bölüm",d],["Zorlandığım Dersler",c],["Günlük Kapasite",p?p+" saat":""]].map(([z,E])=>`
          <div>
            <div style="font-size:10px;font-weight:700;color:var(--text-dim);text-transform:uppercase;letter-spacing:.04em;margin-bottom:3px">${z}</div>
            <div style="font-size:13px;color:${E?"var(--text)":"var(--text-dim)"};font-weight:${E?"500":"400"}">${E||"—"}</div>
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
        ${[["spSchool","Okul","text",o,"Okulunuz"],["spGrade","Sınıf / Seviye","text",s,"12. Sınıf, Mezun"],["spTargetUni","Hedef Üniversite","text",r,"Boğaziçi Üniversitesi"],["spTargetDept","Hedef Bölüm","text",d,"Bilgisayar Mühendisliği"],["spStruggling","Zorlandığım Dersler","text",c,"Fizik, Geometri"],["spCapacity","Günlük Kapasite (Saat)","number",p,"6"]].map(([z,E,A,C,L])=>`
          <div>
            <label style="display:block;font-size:11px;font-weight:700;color:var(--text-mid);margin-bottom:4px">${E}</label>
            <input type="${A}" id="${z}" value="${v(String(C))}" placeholder="${L}" style="width:100%;background:var(--surface2);border:1.5px solid var(--border);border-radius:9px;padding:10px 13px;font-size:14px;color:var(--text);outline:none;box-sizing:border-box">
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
    </div>`}async function Cs(){const e=b.dbUser.id,t=document.getElementById("spBio").value.trim(),n=document.getElementById("spSchool").value.trim(),a=document.getElementById("spGrade").value.trim(),i=document.getElementById("spTargetUni").value.trim(),o=document.getElementById("spTargetDept").value.trim(),s=document.getElementById("spStruggling").value.trim(),r=parseInt(document.getElementById("spCapacity").value)||null,d={id:e,bio:t,school:n,grade:a,target_university:i,target_department:o,struggling_subjects:s,daily_capacity:r,updated_at:new Date().toISOString()},{error:c}=await y.from("student_profiles").upsert(d);x(c?"Profil kaydedilemedi: "+c.message:"Profil başarıyla güncellendi ✓")}async function Ls(){const e=document.getElementById("newPass1").value,t=document.getElementById("newPass2").value;if(!e)return x("Şifre girin!");if(e!==t)return x("Şifreler uyuşmuyor!");if(e.length<4)return x("En az 4 karakter olmalı");const{error:n}=await y.from("users").update({password_hash:e}).eq("id",b.studentId);if(n)return x("Hata: "+n.message);x("Şifre güncellendi ✓"),document.getElementById("newPass1").value="",document.getElementById("newPass2").value=""}async function js(){const e=document.getElementById("view-suyelik");if(!e)return;e.innerHTML='<div style="display:flex;align-items:center;justify-content:center;height:200px"><div style="width:32px;height:32px;border:3px solid var(--accent);border-top-color:transparent;border-radius:50%;animation:spin .7s linear infinite"></div></div>',l.students.find(f=>f.id===b.studentId);const t=b.dbUser;let n=null;if(b.coachId){const{data:f}=await y.from("users").select("full_name,plan,trial_ends_at,created_at,email").eq("id",b.coachId).maybeSingle();n=f}const a=t!=null&&t.created_at?new Date(t.created_at):null,i=new Date,o=(n==null?void 0:n.plan)||"trial",s=o==="trial"?"Deneme Dönemi":o==="pro"?"Pro Üyelik":o==="premium"?"Premium Üyelik":o.charAt(0).toUpperCase()+o.slice(1),r=o==="trial"?"#f0a500":o==="pro"?"#3ecf8e":o==="premium"?"#8b5cf6":"#3ecf8e",d=o==="trial"?"#fff8e6":o==="pro"?"#e6faf3":o==="premium"?"#f3e8ff":"#e6faf3";let c=null;n!=null&&n.trial_ends_at?c=new Date(n.trial_ends_at):n!=null&&n.created_at&&(c=new Date(new Date(n.created_at).getTime()+14*24*60*60*1e3));const p=c?Math.max(0,Math.ceil((c-i)/(1e3*60*60*24))):null,m=a?Math.floor((i-a)/(1e3*60*60*24)):null,u=f=>f?f.toLocaleDateString("tr-TR",{day:"numeric",month:"long",year:"numeric"}):"—",g=p===null?"#888":p>7?"#3ecf8e":p>3?"#f0a500":"#ef4444",_=p===null?"❓":p>7?"✅":p>3?"⚠️":"🔴",T=p===null?"Durum bilinmiyor":p>7?"Aktif":p>3?"Yakında Sona Eriyor":p===0?"Bugün Sona Eriyor":"Kritik — "+p+" gün";e.innerHTML=`
    <div style="max-width:480px;margin:0 auto;padding:16px">

      <!-- Üyelik Durumu Kartı -->
      <div style="background:var(--surface);border:1.5px solid var(--border);border-radius:16px;padding:24px;margin-bottom:16px;position:relative;overflow:hidden">
        <div style="position:absolute;top:0;right:0;width:120px;height:120px;background:${r};opacity:.06;border-radius:50%;transform:translate(30%,-30%)"></div>
        <div style="display:flex;align-items:flex-start;gap:16px">
          <div style="width:52px;height:52px;border-radius:14px;background:${d};display:flex;align-items:center;justify-content:center;font-size:24px;flex-shrink:0">💳</div>
          <div style="flex:1">
            <div style="font-size:11px;color:var(--text-dim);text-transform:uppercase;letter-spacing:.08em;margin-bottom:2px">Üyelik Planı</div>
            <div style="font-size:20px;font-weight:700;color:var(--text)">${s}</div>
            <div style="display:inline-flex;align-items:center;gap:5px;background:${d};color:${r};font-size:11px;font-weight:600;padding:3px 10px;border-radius:20px;margin-top:6px">
              <span>${_}</span><span>${T}</span>
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
    </div>`}async function Sa(){var _;const e=document.getElementById("view-coach-profile");if(!e)return;e.innerHTML='<div class="loading">Profil bilgileri yükleniyor...</div>';const t=b.dbUser.id;let n=null,a=null;const i=await y.from("coach_profiles").select("*").eq("id",t).maybeSingle();if(n=i.data,a=i.error,a){const T=localStorage.getItem(`coach_profile_${t}`);if(T)try{n=JSON.parse(T),a=null}catch{}if(a){e.innerHTML=`<div style="padding:20px;color:var(--red)">Profil yüklenirken hata oluştu: ${v(a.message)}</div>`;return}}else if(!n){const T=localStorage.getItem(`coach_profile_${t}`);if(T)try{n=JSON.parse(T)}catch{}}const o=(n==null?void 0:n.bio)||"",s=(n==null?void 0:n.subjects)||"",r=(n==null?void 0:n.education)||"",d=(n==null?void 0:n.experience)||"",c=(n==null?void 0:n.photo_url)||"",p=(n==null?void 0:n.instagram)||"",m=(n==null?void 0:n.linkedin)||"",u=(n==null?void 0:n.slug)||"";cn=u;const g=u?`${window.location.origin}/koc/${u}`:window.location.origin+window.location.pathname.replace("app.html","koc_bul.html")+`?coach=${t}`;e.innerHTML=`
    <div style="max-width:900px;margin:0 auto">
    <div style="margin-bottom: 20px;">
      <h2 style="font-family:'Inter',sans-serif; margin-bottom: 6px;">👤 Koç Profilim</h2>
      <p style="font-size: 13px; color: var(--text-mid); margin-bottom: 15px;">
        "Koç Bul" sayfasında görünecek bilgilerinizi buradan düzenleyebilirsiniz.
      </p>
      
      <div style="margin-bottom: 16px; background: var(--surface2); border: 1px dashed var(--border); padding: 14px; border-radius: 11px;">
        <label style="display:block; font-size:11px; font-weight:700; color:var(--text-mid); margin-bottom:6px;">Kamuya Açık Profil Linkiniz</label>
        <div style="display:flex; gap:8px; flex-wrap:wrap; align-items:center; margin-bottom:10px;">
          <input type="text" readonly value="${g}" id="coachBulLink" style="flex:1; min-width:220px; background:var(--surface3); border:1px solid var(--border); border-radius:9px; padding:10px 13px; font-size:13px; color:var(--text-mid); outline:none;">
          <button class="btn btn-ghost" onclick="navigator.clipboard.writeText(document.getElementById('coachBulLink').value); showToast('Link kopyalandı ✓')">🔗 Kopyala</button>
          <a href="${g}" target="_blank" class="btn btn-accent" style="text-decoration:none; display:inline-flex; align-items:center;">👁 Gözat</a>
        </div>
        <div style="display:flex; gap:8px; align-items:center; flex-wrap:wrap;">
          <span style="font-size:13px; color:var(--text-dim); white-space:nowrap;">rostrumakademi.com/koc/</span>
          <input type="text" id="cpSlug" value="${v(u)}" placeholder="ad-soyad" maxlength="40" autocomplete="off"
            oninput="onCoachSlugInput()"
            style="flex:1; min-width:140px; background:var(--surface); border:1.5px solid var(--border); border-radius:9px; padding:8px 12px; font-size:13px; font-weight:700; letter-spacing:.3px; color:var(--text); outline:none;">
          <span id="cpSlugStatus" style="font-size:12px; font-weight:700; white-space:nowrap;"></span>
        </div>
        <div style="font-size:11px; color:var(--text-dim); margin-top:6px;">Instagram biyografine koyacağın kısa, akılda kalıcı link. Küçük harf, rakam ve tire kullan.</div>
      </div>

      <div class="coach-profile-container">
        <!-- Sol Sütun: Form -->
        <div class="card coach-profile-form" style="margin:0; padding:20px;">
          <!-- FOTO: sürükle-bırak / dosya seç → Supabase Storage -->
          <div style="margin-bottom:14px;">
            <label style="display:block; font-size:11px; font-weight:700; color:var(--text-mid); margin-bottom:4px;">Profil Fotoğrafı <span style="color:var(--red)">*</span></label>
            <input type="hidden" id="cpPhotoUrl" value="${v(c)}">
            <input type="file" id="cpPhotoFile" accept="image/*" style="display:none" onchange="uploadCoachPhoto(this.files[0])">
            <div id="cpPhotoDrop" onclick="document.getElementById('cpPhotoFile').click()"
              ondragover="event.preventDefault(); this.style.borderColor='var(--accent)'; this.style.background='var(--accent-dim)'"
              ondragleave="this.style.borderColor='var(--border)'; this.style.background='var(--surface2)'"
              ondrop="event.preventDefault(); this.style.borderColor='var(--border)'; this.style.background='var(--surface2)'; uploadCoachPhoto(event.dataTransfer.files[0])"
              style="display:flex; align-items:center; gap:14px; padding:14px 16px; background:var(--surface2); border:2px dashed var(--border); border-radius:12px; cursor:pointer; transition:all .15s;">
              <div id="cpPhotoThumb" style="width:56px; height:56px; border-radius:50%; flex-shrink:0; background:${c?`url('${v(c)}') center/cover`:"var(--accent-dim)"}; display:flex; align-items:center; justify-content:center; font-size:22px;">${c?"":"📷"}</div>
              <div style="min-width:0;">
                <div id="cpPhotoDropText" style="font-size:13px; font-weight:700; color:var(--text);">${c?"Fotoğraf yüklendi ✓ — değiştirmek için tıkla":"Fotoğrafını sürükle ya da tıkla"}</div>
                <div style="font-size:11px; color:var(--text-dim);">JPG/PNG · en fazla 3 MB · yüklenince önizlemede anında görünür</div>
              </div>
            </div>
          </div>

          <!-- UZMANLIK: etiket seçici (virgül girişi kalktı) -->
          <div style="margin-bottom:14px;">
            <label style="display:block; font-size:11px; font-weight:700; color:var(--text-mid); margin-bottom:6px;">Uzmanlık Alanların <span style="color:var(--red)">*</span> <span style="color:var(--text-dim); font-weight:600; text-transform:none;">— tıklayarak seç</span></label>
            <input type="hidden" id="cpSubjects" value="${v(s)}">
            <div id="cpTagWrap" style="display:flex; flex-wrap:wrap; gap:7px;"></div>
            <div style="display:flex; gap:8px; margin-top:8px;">
              <input type="text" id="cpTagCustom" placeholder="Başka bir etiket ekle…" maxlength="30"
                onkeydown="if(event.key==='Enter'){event.preventDefault(); addCustomCoachTag();}"
                style="flex:1; background:var(--surface2); border:1.5px solid var(--border); border-radius:9px; padding:8px 12px; font-size:13px; color:var(--text); outline:none;">
              <button type="button" class="btn btn-ghost btn-sm" onclick="addCustomCoachTag()">+ Ekle</button>
            </div>
          </div>

          <div style="margin-bottom: 12px;">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:4px;">
              <label style="font-size:11px; font-weight:700; color:var(--text-mid);">Hakkımda / Biyografi <span style="color:var(--red)">*</span></label>
              <button type="button" id="cpAiBioBtn" class="btn btn-ghost btn-xs" onclick="generateCoachBio()" style="gap:5px;">🤖 AI ile Oluştur</button>
            </div>
            <textarea id="cpBio" oninput="updateProfilePreview()" placeholder="Eğitim felsefen, koçluk yaklaşımın ve kendinden kısaca bahset — ya da bilgilerini doldurup 'AI ile Oluştur'a bas." style="width:100%; min-height:100px; background:var(--surface2); border:1.5px solid var(--border); border-radius:9px; padding:10px 13px; font-size:14px; color:var(--text); outline:none; resize:vertical;">${v(o)}</textarea>
          </div>

          <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px; margin-bottom:12px;">
            <div>
              <label style="display:block; font-size:11px; font-weight:700; color:var(--text-mid); margin-bottom:4px;">Eğitim Bilgisi</label>
              <textarea id="cpEducation" oninput="updateProfilePreview()" style="width:100%; min-height:80px; background:var(--surface2); border:1.5px solid var(--border); border-radius:9px; padding:10px 13px; font-size:14px; color:var(--text); outline:none; resize:vertical;">${v(r)}</textarea>
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

          <div id="cpErr" style="display:none; color:var(--red); font-size:13px; font-weight:600; margin-bottom:10px; padding:10px 14px; background:var(--red-dim); border-radius:9px;"></div>
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
                  <div class="preview-name" id="prevName">${v(((_=b.dbUser)==null?void 0:_.full_name)||"Koç")}</div>
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
  `,dn(),Ye()}const In=["YKS","TYT","AYT","LGS","Sayısal","Eşit Ağırlık","Sözel","Dil","Matematik","Geometri","Fizik","Kimya","Biyoloji","Türkçe","Edebiyat","Tarih","Coğrafya"];function ln(){var e;return(((e=document.getElementById("cpSubjects"))==null?void 0:e.value)||"").split(",").map(t=>t.trim()).filter(Boolean)}function dn(){const e=document.getElementById("cpTagWrap");if(!e)return;const t=ln(),n=t.filter(a=>!In.includes(a));e.innerHTML=[...In,...n].map(a=>{const i=t.includes(a);return`<button type="button" onclick="toggleCoachTag('${v(a).replace(/'/g,"\\'")}')"
      style="padding:6px 13px; border-radius:99px; font-size:12px; font-weight:700; font-family:inherit; cursor:pointer; transition:all .12s;
      border:1.5px solid ${i?"var(--accent)":"var(--border)"};
      background:${i?"var(--accent)":"var(--surface2)"};
      color:${i?"#fff":"var(--text-mid)"};">${i?"✓ ":""}${v(a)}</button>`}).join("")}function Ps(e){const t=document.getElementById("cpSubjects");let n=ln();n=n.includes(e)?n.filter(a=>a!==e):[...n,e],t.value=n.join(", "),dn(),Ye()}function Rs(){const e=document.getElementById("cpTagCustom"),t=(e.value||"").trim();if(!t)return;const n=ln();n.includes(t)||(document.getElementById("cpSubjects").value=[...n,t].join(", ")),e.value="",dn(),Ye()}async function Ns(e){if(!e)return;if(!e.type.startsWith("image/"))return x("Lütfen bir görsel dosyası seçin");if(e.size>3*1024*1024)return x("Dosya 3 MB'den büyük — daha küçük bir görsel seçin");const t=document.getElementById("cpPhotoDropText"),n=document.getElementById("cpPhotoThumb");t&&(t.textContent="Yükleniyor…");try{const a=(e.name.split(".").pop()||"jpg").toLowerCase().replace(/[^a-z0-9]/g,"")||"jpg",i=`${b.dbUser.id}/avatar_${Date.now()}.${a}`,{error:o}=await y.storage.from("coach-photos").upload(i,e,{upsert:!0,contentType:e.type});if(o)throw o;const{data:s}=y.storage.from("coach-photos").getPublicUrl(i),r=s==null?void 0:s.publicUrl;if(!r)throw new Error("URL alınamadı");document.getElementById("cpPhotoUrl").value=r,n&&(n.style.background=`url('${r}') center/cover`,n.textContent=""),t&&(t.textContent="Fotoğraf yüklendi ✓ — değiştirmek için tıkla"),Ye(),x("Fotoğraf yüklendi ✓")}catch(a){t&&(t.textContent="Yüklenemedi — tekrar dene"),x("Yükleme hatası: "+(a.message||a)+(String(a.message||"").includes("bucket")?" (migration_v26 çalıştırıldı mı?)":""))}}let cn="",zn=null,Ue=!0;function Hs(){const e=document.getElementById("cpSlug"),t=document.getElementById("cpSlugStatus");let n=(e.value||"").toLowerCase().replace(/ğ/g,"g").replace(/ü/g,"u").replace(/ş/g,"s").replace(/ı/g,"i").replace(/ö/g,"o").replace(/ç/g,"c").replace(/[^a-z0-9-]/g,"-").replace(/-+/g,"-");if(e.value=n,clearTimeout(zn),Ue=!1,!n||n===cn){t.textContent="",Ue=!0;return}if(n.length<3){t.textContent="en az 3 karakter",t.style.color="var(--text-dim)";return}t.textContent="kontrol ediliyor…",t.style.color="var(--text-dim)",zn=setTimeout(async()=>{try{const{data:a,error:i}=await y.rpc("check_coach_slug",{p_slug:n});if(i){t.textContent="",Ue=!0;return}Ue=!!a,t.textContent=a?"✓ müsait":"✗ alınmış",t.style.color=a?"var(--green)":"var(--red)"}catch{t.textContent="",Ue=!0}},450)}async function Ys(){var o,s,r,d;const e=document.getElementById("cpAiBioBtn"),t=((o=b.dbUser)==null?void 0:o.full_name)||"Koç",n=((s=document.getElementById("cpSubjects"))==null?void 0:s.value)||"",a=((r=document.getElementById("cpEducation"))==null?void 0:r.value)||"",i=((d=document.getElementById("cpExperience"))==null?void 0:d.value)||"";if(!n&&!a&&!i)return ge("AI'nın malzemeye ihtiyacı var — önce uzmanlık, eğitim veya deneyim alanlarından en az birini doldur.");e&&(e.disabled=!0,e.textContent="🤖 Yazıyor…");try{const c=await fetch("/api/ai-chat",{method:"POST",headers:await st(),body:JSON.stringify({userRole:"coach",messages:[{role:"user",content:`Koç Bul sayfamdaki kamuya açık profilim için "Hakkımda" biyografisi yaz.
Bilgilerim — İsim: ${t}. Uzmanlık: ${n||"-"}. Eğitim: ${a||"-"}. Deneyim/Başarılar: ${i||"-"}.
Kurallar: 1. tekil şahıs ("...yım/...yorum"), veli ve öğrenciye güven veren sıcak-profesyonel ton, 60-90 kelime, tek paragraf, emoji ve başlık YOK, abartılı/uydurma iddia YOK (sadece verdiğim bilgileri kullan). Yalnızca biyografi metnini yaz, başka hiçbir şey ekleme.`}]})}),p=await c.json();if(!c.ok||!p.reply)throw new Error(p.error||"Yanıt alınamadı");document.getElementById("cpBio").value=p.reply.trim().replace(/^["']|["']$/g,""),Ye(),x("Biyografi taslağı hazır — dilediğin gibi düzenleyebilirsin ✓")}catch(c){ge("AI biyografi üretilemedi: "+(c.message||c))}e&&(e.disabled=!1,e.textContent="🤖 AI ile Oluştur")}function ge(e){const t=document.getElementById("cpErr");if(!t)return x(e);t.textContent=e,t.style.display="block",t.scrollIntoView({behavior:"smooth",block:"center"}),setTimeout(()=>{t.style.display="none"},6e3)}let yt="bio";function Ye(){var u,g,_,T,f,$,w,B;const e=((u=document.getElementById("cpPhotoUrl"))==null?void 0:u.value.trim())||"",t=((g=document.getElementById("cpSubjects"))==null?void 0:g.value.trim())||"",n=((_=document.getElementById("cpBio"))==null?void 0:_.value.trim())||"",a=((T=document.getElementById("cpEducation"))==null?void 0:T.value.trim())||"",i=((f=document.getElementById("cpExperience"))==null?void 0:f.value.trim())||"",o=(($=document.getElementById("cpInstagram"))==null?void 0:$.value.trim())||"",s=((w=document.getElementById("cpLinkedin"))==null?void 0:w.value.trim())||"",r=((B=b.dbUser)==null?void 0:B.full_name)||"Koç",d=document.getElementById("prevAvatar");if(d)if(e)d.style.backgroundImage=`url('${e}')`,d.style.backgroundColor="transparent",d.innerHTML="";else{d.style.backgroundImage="",d.style.backgroundColor="var(--accent-dim)";const h=r.split(" ").map(S=>S[0]).join("").slice(0,2).toUpperCase();d.innerHTML=h||"?"}const c=document.getElementById("prevSocials");if(c){let h="";if(o&&(h+=`<a href="https://instagram.com/${o}" target="_blank" class="preview-social-link" title="Instagram">📸 @${o}</a>`),s){let S="LinkedIn";s.includes("/in/")&&(S="in/"+s.split("/in/")[1].split("/")[0]),h+=`<a href="${s}" target="_blank" class="preview-social-link" title="LinkedIn">💼 ${S}</a>`}c.innerHTML=h}const p=document.getElementById("prevSubjects");if(p)if(t){const h=t.split(",").map(S=>S.trim()).filter(Boolean);p.innerHTML=h.map(S=>`<span class="preview-tag">${v(S)}</span>`).join("")}else p.innerHTML='<span class="preview-tag" style="background:none; border:1px dashed var(--border); color:var(--text-dim)">Ders / Uzmanlık Belirtilmedi</span>';const m=document.getElementById("prevTabContent");if(m){let h="";yt==="bio"?h=n||"Biyografi bilgisi henüz girilmedi.":yt==="edu"?h=a||"Eğitim bilgisi henüz girilmedi.":yt==="exp"&&(h=i||"Deneyim/başarılar henüz girilmedi."),m.innerHTML=Ia(v(h))}}function Ks(e){yt=e;const t=document.getElementById("btn-prev-bio"),n=document.getElementById("btn-prev-edu"),a=document.getElementById("btn-prev-exp");t&&t.classList.toggle("active",e==="bio"),n&&n.classList.toggle("active",e==="edu"),a&&a.classList.toggle("active",e==="exp"),Ye()}function Ia(e){return e.replace(/\n/g,"<br>")}async function Os(){var m;const e=b.dbUser.id,t=document.getElementById("cpBio").value.trim(),n=document.getElementById("cpSubjects").value.trim(),a=document.getElementById("cpEducation").value.trim(),i=document.getElementById("cpExperience").value.trim(),o=document.getElementById("cpPhotoUrl").value.trim(),s=document.getElementById("cpInstagram").value.trim(),r=document.getElementById("cpLinkedin").value.trim(),d=(((m=document.getElementById("cpSlug"))==null?void 0:m.value)||"").trim();if(!o)return ge("Profil fotoğrafı zorunlu — velilerin en çok baktığı güven sinyali.");if(!n)return ge("En az bir uzmanlık etiketi seç.");if(t.length<30)return ge('Biyografi en az 30 karakter olmalı — "AI ile Oluştur" butonunu kullanabilirsin.');if(!a)return ge("Eğitim bilgini gir (örn: Muğla Sıtkı Koçman Üniversitesi - Tıp Fakültesi).");if(!i)return ge("Deneyim/başarı bilgini gir (örn: YKS 2025 Sayısal 9.805.lik).");if(d&&d.length<3)return ge("Profil linki en az 3 karakter olmalı.");if(d&&!Ue)return ge("Bu profil linki alınmış — başka bir tane dene.");const c={id:e,bio:t,subjects:n,education:a,experience:i,photo_url:o,instagram:s,linkedin:r,slug:d||null,updated_at:new Date().toISOString()};localStorage.setItem(`coach_profile_${e}`,JSON.stringify(c));let{error:p}=await y.from("coach_profiles").upsert(c);if(p&&/slug/i.test(p.message||"")&&/column/i.test(p.message||"")){const{slug:u,...g}=c;({error:p}=await y.from("coach_profiles").upsert(g)),p||x("Profil kaydedildi — link için migration_v26 gerekli")}if(p){if(/duplicate|unique/i.test(p.message||""))return ge("Bu profil linki az önce başkası tarafından alındı — farklı bir tane dene.");console.warn("Database save failed, profile saved locally in localStorage:",p),x("Profil yerel tarayıcıya kaydedildi (Veritabanı hatası: "+p.message+")")}else{cn=d;const u=document.getElementById("coachBulLink");u&&d&&(u.value=`${window.location.origin}/koc/${d}`),x("Profil başarıyla güncellendi ✓")}}async function pn(){const e=document.getElementById("view-dev-matches");if(!e)return;e.innerHTML='<div class="loading">Eşleşmeler yükleniyor...</div>';const{data:t,error:n}=await y.from("match_requests").select("*, matched_coach:matched_coach_id(full_name, username)").order("created_at",{ascending:!1});if(n){e.innerHTML=`<div style="padding:20px;color:var(--red)">Eşleşme başvuruları yüklenirken hata oluştu: ${v(n.message)}</div>`;return}const a={pending:"⏳ Bekliyor",matched:"🤝 Eşleştirildi",completed:"✅ Tamamlandı"},i={pending:"rgba(240, 165, 0, 0.15)",matched:"rgba(96, 180, 255, 0.15)",completed:"rgba(62, 207, 142, 0.15)"},o={pending:"var(--accent)",matched:"var(--accent4)",completed:"var(--green)"};e.innerHTML=`
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
                  <div style="font-weight:700;">${v(s.student_name)}</div>
                  <div style="font-size:11px; color:var(--text-mid);">${v(s.email)}</div>
                  <div style="font-size:11px; color:var(--text-mid);">${v(s.phone||"—")}</div>
                </td>
                <td style="padding:10px;">
                  <span style="background:var(--accent-dim); color:var(--accent); font-size:11px; font-weight:700; padding:2px 8px; border-radius:12px;">${v(s.exam_profile)}</span>
                  <div style="font-size:11px; color:var(--text-mid); margin-top:4px;">Stil: ${v(s.style||"Belirtilmemiş")}</div>
                </td>
                <td style="padding:10px;">
                  ${s.matched_coach?`
                    <div style="font-weight:600; color:var(--accent2);">${v(s.matched_coach.full_name)}</div>
                    <div style="font-size:11px; color:var(--text-mid);">@${v(s.matched_coach.username)}</div>
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
  `}async function Fs(e,t){const{error:n}=await y.from("match_requests").update({status:t}).eq("id",e);n?x("Durum güncellenirken hata: "+n.message):(x("Durum güncellendi ✓"),pn())}async function Us(e){const t=l.students.find(s=>s.id===e);if(!t)return;const{data:n}=await y.from("student_speeds").select("*").eq("student_id",e),a={};(n||[]).forEach(s=>{a[`${s.exam_type}_${s.subject}`]=s.secs_per_question});const i=[{exam:"TYT",sub:"Matematik"},{exam:"TYT",sub:"Türkçe"},{exam:"TYT",sub:"Fizik"},{exam:"TYT",sub:"Kimya"},{exam:"TYT",sub:"Biyoloji"},{exam:"TYT",sub:"Geometri"},{exam:"AYT-SAY",sub:"Matematik"},{exam:"AYT-SAY",sub:"Fizik"},{exam:"AYT-SAY",sub:"Kimya"},{exam:"AYT-SAY",sub:"Biyoloji"}];let o=document.getElementById("speedModal");o||(o=document.createElement("div"),o.id="speedModal",o.className="modal-bg",document.body.appendChild(o),o.addEventListener("click",s=>{s.target===o&&o.classList.remove("open")})),o.innerHTML=`<div class="modal modal-lg">
    <button class="modal-close" onclick="cm('speedModal')">×</button>
    <h2>⚡ ${v(t.name)} — Soru Çözme Hızı</h2>
    <p style="font-size:13px;color:var(--text-mid);margin-bottom:16px">Her ders için öğrencinin soru başına harcadığı saniyeyi girin. Görev eklerken süre otomatik hesaplanır.</p>
    <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(180px,1fr));gap:10px">
      ${i.map(({exam:s,sub:r})=>{const d=`${s}_${r}`,c=a[d]||180,p=Math.floor(c/60);return`<div style="background:var(--surface2);border:1px solid var(--border);border-radius:10px;padding:12px">
          <div style="font-size:10px;font-weight:700;color:var(--accent);text-transform:uppercase;letter-spacing:.5px;margin-bottom:2px">${s}</div>
          <div style="font-size:13px;font-weight:700;margin-bottom:8px">${r}</div>
          <div style="display:flex;align-items:center;gap:6px">
            <input type="number" id="spd_${d}" value="${c}" min="10" max="600" step="5"
              style="width:70px;background:var(--surface3);border:1px solid var(--border);border-radius:6px;padding:5px 8px;font-size:13px;font-weight:700;color:var(--text);text-align:center">
            <span style="font-size:11px;color:var(--text-dim)">sn/soru</span>
          </div>
          <div style="font-size:10px;color:var(--text-dim);margin-top:4px">${p>0?p+"dk ":""}</div>
        </div>`}).join("")}
    </div>
    <button class="btn btn-accent" style="width:100%;justify-content:center;padding:12px;margin-top:16px" onclick="saveAllSpeeds('${e}')">Tümünü Kaydet</button>
  </div>`,G("speedModal")}async function Gs(e){const t=[{exam:"TYT",sub:"Matematik"},{exam:"TYT",sub:"Türkçe"},{exam:"TYT",sub:"Fizik"},{exam:"TYT",sub:"Kimya"},{exam:"TYT",sub:"Biyoloji"},{exam:"TYT",sub:"Geometri"},{exam:"AYT-SAY",sub:"Matematik"},{exam:"AYT-SAY",sub:"Fizik"},{exam:"AYT-SAY",sub:"Kimya"},{exam:"AYT-SAY",sub:"Biyoloji"}];for(const{exam:n,sub:a}of t){const i=`${n}_${a}`,o=document.getElementById("spd_"+i);if(!o)continue;const s=parseInt(o.value)||180;await aa(e,n,a,s)}q("speedModal"),x("Hız ayarları kaydedildi ✓")}async function qs(e){const t=l.students.find(o=>o.id===e);if(!t)return;const{data:n}=await y.from("student_notes").select("notes").eq("coach_id",b.coachId).eq("student_id",e).maybeSingle(),a=(n==null?void 0:n.notes)||"";let i=document.getElementById("studentNotesModal");i||(i=document.createElement("div"),i.id="studentNotesModal",i.className="modal-bg",document.body.appendChild(i),i.addEventListener("click",o=>{o.target===i&&i.classList.remove("open")})),i.innerHTML=`<div class="modal">
    <button class="modal-close" onclick="cm('studentNotesModal')">×</button>
    <h2>📝 ${v(t.name)} — Notlar</h2>
    <p style="font-size:13px;color:var(--text-mid);margin-bottom:16px">Öğrenciyle ilgili gözlemler, önemli bilgiler, hatırlatmalar…</p>
    <div class="field">
      <textarea id="studentNoteText" style="min-height:260px;font-size:13px;line-height:1.7;resize:vertical" placeholder="Örnek: Türkçe paragrafta hız sorunu var. Veli baskılı, motivasyon takip edilmeli. Son denemede geometri 4 yanlış...">${v(a)}</textarea>
    </div>
    <button class="btn btn-accent" style="width:100%;justify-content:center;padding:12px;margin-top:4px" onclick="saveStudentNote('${e}')">Kaydet</button>
  </div>`,G("studentNotesModal")}async function Ws(e){const t=document.getElementById("studentNoteText").value,{error:n}=await y.from("student_notes").upsert({coach_id:b.coachId,student_id:e,notes:t,updated_at:new Date().toISOString()},{onConflict:"coach_id,student_id"});if(n){x("Not kaydedilemedi: "+n.message);return}x("Not kaydedildi ✓"),q("studentNotesModal")}function Vs(e){let t=document.getElementById("reportModal");t||(t=document.createElement("div"),t.id="reportModal",t.className="modal-bg",t.innerHTML=`<div class="modal">
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
    </div>`,document.body.appendChild(t),t.addEventListener("click",i=>{i.target===t&&t.classList.remove("open")}),document.getElementById("rpPeriod").addEventListener("change",function(){document.getElementById("rpCustomDates").style.display=this.value==="custom"?"":"none"})),document.getElementById("rpStuId").value=e;const n=new Date,a=new Date(n.getFullYear(),n.getMonth(),1);document.getElementById("rpStart").value=O(a),document.getElementById("rpEnd").value=O(n),document.getElementById("rpNote").value="",G("reportModal")}function mn(){const e=document.getElementById("rpPeriod").value,t=new Date;if(e==="weekly"){const n=ne(0,0);return{start:O(n),end:O(J(n,6))}}else return e==="monthly"?{start:O(new Date(t.getFullYear(),t.getMonth(),1)),end:O(t)}:{start:document.getElementById("rpStart").value,end:document.getElementById("rpEnd").value}}function un(e,t=!1){var h,S,I,z;const n=l.students.find(E=>E.id===e);if(!n)return"";const{start:a,end:i}=mn(),o=document.getElementById("rpNote").value.trim(),s=((h=l.workspace)==null?void 0:h.brand_name)||"Rostrum Akademi",r=((S=l.workspace)==null?void 0:S.brand_color)||"#E8613A",d=((I=b.dbUser)==null?void 0:I.full_name)||"Koç",c=[],p=new Date(a);for(;O(p)<=i;){const E=`${e}_${O(p)}`;(l.tasks[E]||[]).forEach(A=>c.push({...A,date:O(p)})),p.setDate(p.getDate()+1)}const m=c.length,u=c.filter(E=>E.done).length,g=m>0?Math.round(u/m*100):0,_=c.filter(E=>E.done).reduce((E,A)=>E+Number(A.duration||0),0),T={};c.forEach(E=>{const A=E.subject||"Diğer";T[A]||(T[A]={total:0,done:0}),T[A].total++,E.done&&T[A].done++});const f=l.exams.filter(E=>E.studentId===e&&E.date>=a&&E.date<=i).sort((E,A)=>E.date.localeCompare(A.date)),$=l.appointments.filter(E=>E.studentId===e&&E.date>=a&&E.date<=i).sort((E,A)=>E.date.localeCompare(A.date)),w=`${new Date(a+"T12:00").toLocaleDateString("tr-TR",{day:"numeric",month:"long",year:"numeric"})} – ${new Date(i+"T12:00").toLocaleDateString("tr-TR",{day:"numeric",month:"long",year:"numeric"})}`;let B="";if(f.length>1){const E=Math.max(...f.map(k=>(EXAM_DEFS[k.type]||[]).reduce((D,j)=>{var P;return D+Number(((P=k.nets)==null?void 0:P[j])||0)},0)),1),A=400,C=80,L=Math.min(40,(A-20)/f.length-4);B=`<svg width="${A}" height="${C+30}" style="overflow:visible">
      ${f.map((k,D)=>{const j=(EXAM_DEFS[k.type]||[]).reduce((H,F)=>{var V;return H+Number(((V=k.nets)==null?void 0:V[F])||0)},0),P=Math.max(Math.round(j/E*(C-10)),4),Y=10+D*((A-20)/f.length);return`<rect x="${Y}" y="${C-P}" width="${L}" height="${P}" rx="3" fill="${r}" opacity="0.85"/>
          <text x="${Y+L/2}" y="${C-P-4}" text-anchor="middle" font-size="10" fill="#333">${j.toFixed(0)}</text>
          <text x="${Y+L/2}" y="${C+14}" text-anchor="middle" font-size="9" fill="#666">${v(k.name.replace("Deneme","").replace("TYT","").replace("AYT","").trim()||String(D+1))}</text>`}).join("")}
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
      <div class="brand">${v(s)}</div>
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
    <div class="stat-box"><div class="val">${Math.round(_/60)}</div><div class="lbl">Çalışma (saat)</div></div>
  </div>

  <!-- DERS BAZINDA ÇALIŞMA -->
  ${Object.keys(T).length>0?`
  <div class="section">
    <div class="section-title">📚 Ders Bazında Çalışma</div>
    <table>
      <thead><tr><th>Ders</th><th>Toplam</th><th>Tamamlanan</th><th>Oran</th><th></th></tr></thead>
      <tbody>
        ${Object.entries(T).sort((E,A)=>A[1].total-E[1].total).map(([E,A])=>{const C=Math.round(A.done/A.total*100),L=C>=80?"badge-green":C>=50?"badge-yellow":"badge-red";return`<tr>
            <td><strong>${v(E)}</strong></td>
            <td>${A.total}</td>
            <td>${A.done}</td>
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
      <thead><tr><th>Sınav</th><th>Tarih</th><th>Tür</th>${(EXAM_DEFS[(z=f[0])==null?void 0:z.type]||[]).map(E=>`<th>${E}</th>`).join("")}<th>Toplam</th></tr></thead>
      <tbody>
        ${f.map(E=>{const A=EXAM_DEFS[E.type]||[],C=A.reduce((L,k)=>{var D;return L+Number(((D=E.nets)==null?void 0:D[k])||0)},0).toFixed(1);return`<tr>
            <td><strong>${v(E.name)}</strong></td>
            <td>${new Date(E.date+"T12:00").toLocaleDateString("tr-TR",{day:"numeric",month:"short"})}</td>
            <td>${v(E.type)}</td>
            ${A.map(L=>{var D;const k=Number(((D=E.nets)==null?void 0:D[L])||0);return`<td><span class="badge ${k>=20?"badge-green":k>=12?"badge-yellow":"badge-red"}">${k}</span></td>`}).join("")}
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
        ${$.map(E=>`<tr>
          <td>${new Date(E.date+"T12:00").toLocaleDateString("tr-TR",{weekday:"short",day:"numeric",month:"short"})}</td>
          <td>${E.time}</td>
          <td>${v(E.type)}</td>
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
      <div style="font-size:13px;line-height:1.7;color:#333">${v(o).replace(/\n/g,"<br>")}</div>
      <div style="margin-top:10px;font-size:11px;color:#888">— ${v(d)}</div>
    </div>
  </div>`:""}

  <!-- FOOTER -->
  <div class="footer">
    <span>${v(s)} · ${v(d)}</span>
    <span>${v(n.name)} · ${w}</span>
    <span>Rostrum Akademi Platformu</span>
  </div>
</div>
</body>
</html>`}function Zs(){const e=document.getElementById("rpStuId").value,t=un(e,!0),n=window.open("","_blank","width=900,height=700");n.document.write(t),n.document.close()}function Js(){const e=document.getElementById("rpStuId").value;l.students.find(a=>a.id===e);const t=un(e,!1),n=window.open("","_blank");n.document.write(t),n.document.close(),setTimeout(()=>{n.focus(),n.print()},500),q("reportModal"),x('PDF oluşturuluyor — "PDF olarak kaydet" seçin')}async function Xs(){const e=document.getElementById("rpStuId").value,t=l.students.find(s=>s.id===e);if(!t)return;const n=`${window.location.origin}/api/generate-pdf-report?studentId=${e}`,a=`Merhaba, ${t.name} isimli öğrencimizin bu dönemki performans ve gelişim raporu hazırlandı. Aşağıdaki bağlantıdan raporu detaylıca görüntüleyebilirsiniz:

🔗 ${n}`,o=`https://api.whatsapp.com/send?text=${encodeURIComponent(a)}`;window.open(o,"_blank"),q("reportModal"),x("WhatsApp yönlendirmesi açıldı ✓")}function Qs(){let e=document.getElementById("weeklyPDFModal");e||(e=document.createElement("div"),e.id="weeklyPDFModal",e.className="modal-bg",e.innerHTML=`<div class="modal">
      <button class="modal-close" onclick="cm('weeklyPDFModal')">×</button>
      <h2>🖨️ Haftalık Program PDF</h2>
      <div class="field">
        <label>Koç Notu (isteğe bağlı)</label>
        <textarea id="pdfNote" placeholder="Bu haftaki programla ilgili notunuzu ekleyin..." style="min-height:90px"></textarea>
      </div>
      <button class="btn btn-accent" style="width:100%;justify-content:center;padding:12px" onclick="generateWeeklyPDF()">PDF Oluştur →</button>
    </div>`,document.body.appendChild(e),e.addEventListener("click",t=>{t.target===e&&e.classList.remove("open")})),document.getElementById("pdfNote").value="",G("weeklyPDFModal")}function er(){const e=document.getElementById("pdfNote").value.trim();q("weeklyPDFModal"),za(l.activeStuId,e)}function za(e,t){var C,L;const n=l.students.find(k=>k.id===e);if(!n)return;const a=(n==null?void 0:n.weekStart)??0,i=ne(l.weekOffset,a),o=J(i,6),s=((C=l.workspace)==null?void 0:C.brand_name)||"Rostrum Akademi",r=((L=l.workspace)==null?void 0:L.brand_color)||"#E8613A",d=["Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi","Pazar"],c=["Ocak","Şubat","Mart","Nisan","Mayıs","Haziran","Temmuz","Ağustos","Eylül","Ekim","Kasım","Aralık"],p={deneme:"#f59e0b",soru:"#3b82f6",konu:"#10b981",diger:"#8b5cf6"},m={deneme:"Deneme",soru:"Soru Bankası",konu:"Konu Anlatımı",diger:"Diğer"};let u=0,g=0,_=0;const T=[];for(let k=0;k<7;k++){const D=J(i,k),j=O(D),P=l.tasks[`${e}_${j}`]||[];u+=P.length,g+=P.filter(Y=>Y.done).length,_+=P.reduce((Y,H)=>Y+Number(H.duration||0),0),P.length>0&&T.push({d:D,ds:j,tasks:P,dayName:d[(a+k)%7]})}const f=u>0?Math.round(g/u*100):0,$=163.36,w=($*(1-f/100)).toFixed(1),B=(k,D=5)=>{let j="";for(let P=1;P<=D;P++)j+=`<span style="display:inline-block;width:6px;height:6px;border-radius:50%;margin-right:2px;background:${P<=k?r:"#E8E6DE"}"></span>`;return j},h=k=>k?'<span style="display:inline-flex;align-items:center;justify-content:center;width:15px;height:15px;border-radius:50%;background:#22C55E;flex-shrink:0"><svg width="8" height="6" viewBox="0 0 8 6"><path d="M1 3L3 5L7 1" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/></svg></span>':'<span style="display:inline-block;width:15px;height:15px;border-radius:50%;border:1.5px solid #D1D0DC;flex-shrink:0"></span>';let S="";for(const{d:k,tasks:D,dayName:j}of T){const P=D.reduce((H,F)=>H+Number(F.duration||0),0),Y=D.map(H=>{const F=p[H.type]||"#94a3b8",V=m[H.type]||"Diğer",Z=H.done,te=H.student_result||null,Q=H.student_feedback||null,R=te&&(te.dogru!=null||te.yanlis!=null||te.bos!=null)?`
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
        <span style="font-size:9px;color:#9998AA">${D.length} görev · ${P} dk</span>
      </div>
      ${Y}
    </div>`}const z=[{val:g,lbl:"Tamamlanan",col:"#22C55E"},{val:u-g,lbl:"Bekleyen",col:"#C4C3D0"},{val:Math.round(_/60)+" sa",lbl:"Toplam Süre",col:r},{val:u,lbl:"Toplam Görev",col:"#C4C3D0"}].map((k,D)=>`<div style="flex:1;${D>0?"border-left:1px solid rgba(255,255,255,.06);padding-left:16px;":""}padding-right:16px">
    <div style="font-size:18px;font-weight:800;color:${k.col};font-variant-numeric:tabular-nums">${k.val}</div>
    <div style="font-size:8px;color:#6B6A7A;text-transform:uppercase;letter-spacing:.07em">${k.lbl}</div>
  </div>`).join(""),E=`<!DOCTYPE html><html lang="tr"><head><meta charset="UTF-8"><title>${v(n.name)} — Haftalık Program</title>
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
          <div style="font-size:9px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:${r};margin-bottom:6px">${v(s)} · Haftalık Program</div>
          <div style="font-size:24px;font-weight:800;color:#F0EFF8;letter-spacing:-.5px;line-height:1.1">${v(n.name)}</div>
          ${n.target?`<div style="font-size:11px;color:#8B8A99;margin-top:4px">🎯 ${v(n.target)}</div>`:""}
        </div>
        <div style="display:flex;flex-direction:column;align-items:flex-end;gap:8px;flex-shrink:0">
          <div style="position:relative;width:64px;height:64px">
            <svg width="64" height="64" viewBox="0 0 64 64" style="transform:rotate(-90deg)">
              <circle cx="32" cy="32" r="26" fill="none" stroke="rgba(255,255,255,.07)" stroke-width="5"/>
              <circle cx="32" cy="32" r="26" fill="none" stroke="${r}" stroke-width="5" stroke-linecap="round" stroke-dasharray="${$.toFixed(1)}" stroke-dashoffset="${w}"/>
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
      ${t?`<div style="background:#fff;border-radius:8px;border:1px solid #E8E6DE;border-left:3px solid ${r};padding:10px 14px;margin-top:4px">
        <div style="font-size:8px;font-weight:800;color:${r};text-transform:uppercase;letter-spacing:.06em;margin-bottom:4px">Koç Notu</div>
        <div style="font-size:10px;color:#444;line-height:1.6">${v(t)}</div>
      </div>`:""}
    </div>
    <div style="background:#111118;padding:14px 28px;display:flex;align-items:center;justify-content:space-between">
      <div style="font-size:10px;font-style:italic;color:#6B6A7A;max-width:380px;line-height:1.5">"Bugün emek harcadığın her dakika, sınav gününde sana geri döner."</div>
      <div style="font-size:9px;font-weight:700;color:#3D3C4A;text-align:right;text-transform:uppercase;letter-spacing:.08em">${v(s)}</div>
    </div>
    <div class="no-print" style="padding:10px 14px;display:flex;align-items:center;gap:12px;background:#F7F6F2;border-top:1px solid #E8E6DE">
      <button onclick="window.print()" style="background:${r};color:#fff;border:none;padding:9px 24px;border-radius:7px;font-size:12px;font-weight:800;cursor:pointer">🖨️ PDF İndir / Yazdır</button>
      <span style="font-size:10px;color:#9998AA">Tarayıcı ayarlarından "Arka plan grafikleri"ni aktif edin</span>
    </div>
  </div>
  </body></html>`,A=window.open("","_blank","width=1000,height=850");A.document.write(E),A.document.close(),setTimeout(()=>A.focus(),300)}async function tr(){var s,r;G("inviteCodeModal");const e=document.getElementById("invCodeBox");let t=(s=l.workspace)==null?void 0:s.invite_code;if(!t){e.textContent="……";try{const{data:d,error:c}=await y.rpc("ensure_invite_code");!c&&d&&(t=d,l.workspace&&(l.workspace.invite_code=t))}catch{}}if(!t){e.textContent="—",x("Kod alınamadı — sayfayı yenileyip tekrar dene");return}e.textContent=t;const n=`https://rostrumakademi.com/app.html?davet=${t}`,i=`Merhaba! ${((r=l.workspace)==null?void 0:r.brand_name)||"koçun"} koçluk platformuna davetlisin. 🎓

Kayıt linki: ${n}
(Davet kodun: ${t})

Linke tıkla, hesabını oluştur — otomatik olarak bana bağlanacaksın.`,o=document.getElementById("invWaBtn");o&&(o.href="https://wa.me/?text="+encodeURIComponent(i))}function nr(){var t,n;const e=(n=(t=document.getElementById("invCodeBox"))==null?void 0:t.textContent)==null?void 0:n.trim();e&&e.length===6&&gn(e)}function ar(){var t,n;const e=(n=(t=document.getElementById("invCodeBox"))==null?void 0:t.textContent)==null?void 0:n.trim();e&&e.length===6&&gn(`https://rostrumakademi.com/app.html?davet=${e}`)}function gn(e){navigator.clipboard.writeText(e).then(()=>x("Link kopyalandı ✓")).catch(()=>{const t=document.createElement("textarea");t.value=e,document.body.appendChild(t),t.select(),document.execCommand("copy"),t.remove(),x("Link kopyalandı ✓")})}const Ba=[{name:"Terrakota",val:"#e8613a",dim:"rgba(232,97,58,.12)"},{name:"Altın",val:"#f0a500",dim:"rgba(240,165,0,.12)"},{name:"Mavi",val:"#4da6ff",dim:"rgba(77,166,255,.12)"},{name:"Yeşil",val:"#3ecf8e",dim:"rgba(62,207,142,.12)"},{name:"Mor",val:"#c084fc",dim:"rgba(192,132,252,.12)"},{name:"Pembe",val:"#f472b6",dim:"rgba(244,114,182,.12)"},{name:"Kırmızı",val:"#ff5c5c",dim:"rgba(255,92,92,.12)"},{name:"Turkuaz",val:"#06b6d4",dim:"rgba(6,182,212,.12)"}];function Ma(){try{const e=JSON.parse(localStorage.getItem("ba_theme")||"{}");e.theme==="dark"?document.documentElement.setAttribute("data-theme","dark"):document.documentElement.removeAttribute("data-theme"),e.accent&&Da(e.accent,e.accentDim,!1)}catch{}}function Da(e,t,n=!0){if(document.documentElement.style.setProperty("--accent",e),document.documentElement.style.setProperty("--accent-dim",t||"rgba(240,165,0,.12)"),n)try{const a=JSON.parse(localStorage.getItem("ba_theme")||"{}");a.accent=e,a.accentDim=t,localStorage.setItem("ba_theme",JSON.stringify(a))}catch{}}function ir(e){e==="dark"?document.documentElement.setAttribute("data-theme","dark"):document.documentElement.removeAttribute("data-theme");try{const t=JSON.parse(localStorage.getItem("ba_theme")||"{}");t.theme=e,localStorage.setItem("ba_theme",JSON.stringify(t))}catch{}document.querySelectorAll(".theme-btn").forEach(t=>{const n=t.dataset.theme===e;t.style.background=n?"var(--accent-dim)":"",t.style.borderColor=n?"var(--accent)":"",t.style.color=n?"var(--accent)":""})}function or(){let e=document.getElementById("themePanel");if(e){e.remove();return}e=document.createElement("div"),e.id="themePanel";const t=document.documentElement.getAttribute("data-theme")!=="light";e.style.cssText="position:fixed;top:60px;right:12px;background:var(--surface);border:1px solid var(--border2);border-radius:14px;padding:18px;z-index:300;box-shadow:var(--shadow-lg);min-width:230px;animation:fadeUp .2s ease",e.innerHTML=`
    <div style="font-family:'Inter',sans-serif;font-size:13px;font-weight:700;margin-bottom:12px;color:var(--text)">🎨 Tema Ayarları</div>
    <div style="font-size:11px;font-weight:700;color:var(--text-mid);text-transform:uppercase;letter-spacing:.5px;margin-bottom:8px">Mod</div>
    <div style="display:flex;gap:6px;margin-bottom:16px">
      <button class="theme-btn btn btn-ghost btn-sm" data-theme="dark" onclick="setTheme('dark')" style="${t?"background:var(--accent-dim);border-color:var(--accent);color:var(--accent)":""}">🌙 Karanlık</button>
      <button class="theme-btn btn btn-ghost btn-sm" data-theme="light" onclick="setTheme('light')" style="${t?"":"background:var(--accent-dim);border-color:var(--accent);color:var(--accent)"}">☀️ Aydınlık</button>
    </div>
    <div style="font-size:11px;font-weight:700;color:var(--text-mid);text-transform:uppercase;letter-spacing:.5px;margin-bottom:8px">Accent Rengi</div>
    <div style="display:flex;gap:7px;flex-wrap:wrap;margin-bottom:14px">
      ${Ba.map(n=>`<div onclick="applyAccent('${n.val}','${n.dim}');document.getElementById('themePanel').remove()" title="${n.name}"
        style="width:28px;height:28px;border-radius:8px;background:${n.val};cursor:pointer;transition:transform .1s"
        onmouseover="this.style.transform='scale(1.2)'" onmouseout="this.style.transform=''"></div>`).join("")}
    </div>
    <button onclick="document.getElementById('themePanel').remove()" style="width:100%;background:var(--surface2);border:1px solid var(--border);color:var(--text-mid);border-radius:8px;padding:7px;font-family:inherit;font-size:12px;cursor:pointer">Kapat</button>`,document.body.appendChild(e),setTimeout(()=>document.addEventListener("click",function n(a){!e.contains(a.target)&&!a.target.closest("[onclick*=openThemePanel]")&&(e.remove(),document.removeEventListener("click",n))},!0),150)}let ot=[],Rt=!1;function Aa(){const e=document.getElementById("aiChatBubble"),t=document.querySelector(".ai-header-name"),n=document.getElementById("aiMessages");if(!e||!t||!n)return;ot=[],n.innerHTML=`
    <div class="ai-welcome">
      <div class="ai-welcome-emoji">🎓</div>
      <div class="ai-welcome-title"></div>
      <div class="ai-welcome-sub"></div>
      <div class="ai-quick-btns"></div>
    </div>`;const a=n.querySelector(".ai-welcome"),i=a.querySelector(".ai-welcome-title"),o=a.querySelector(".ai-welcome-sub"),s=a.querySelector(".ai-quick-btns");b.role==="coach"||b.role==="developer"?(e.title="Yapay Zeka Koç Asistanı",t.textContent="Yapay Zeka Koç Asistanı",i.textContent="Merhaba Hocam! Ben Koç Asistanınız",o.textContent="Öğrenci analizleri, veri okuma, ders çalışma programı taslakları hazırlama ve pedagojik konularda size yardımcı olabilirim.",s.innerHTML=`
      <button class="ai-quick-btn" onclick="aiQuickSend('Seçili öğrencinin genel durum analizini yap')">📊 Öğrenci Analizi</button>
      <button class="ai-quick-btn" onclick="aiQuickSend('Pedagojik motivasyon teknikleri öner')">💡 Pedagojik Öneri</button>
      <button class="ai-quick-btn" onclick="aiQuickSend('Zorlanan bir öğrenci için haftalık program şablonu oluştur')">📋 Program Şablonu</button>
    `):b.role==="parent"?(e.title="Yapay Zeka Veli Bilgilendirme Asistanı",t.textContent="Yapay Zeka Veli Asistanı",i.textContent="Merhaba! Ben Veli Asistanıyım",o.textContent="Çocuğunuzun ders çalışma durumu, deneme netleri ve evde ona nasıl destek olabileceğiniz konularında bilgi alabilirsiniz.",s.innerHTML=`
      <button class="ai-quick-btn" onclick="aiQuickSend('Çocuğumun bu haftaki gelişimini özetle')">📊 Gelişim Özeti</button>
      <button class="ai-quick-btn" onclick="aiQuickSend('Evde verimli ders çalışma ortamı nasıl sağlanır?')">🏠 Ev Ortamı</button>
      <button class="ai-quick-btn" onclick="aiQuickSend('Sınav stresiyle başa çıkmak için veli olarak ne yapmalıyım?')">🧘 Stres Yönetimi</button>
    `):(e.title="Yapay Zeka Ders Asistanı",t.textContent="Yapay Zeka Ders Asistanı",i.textContent="Merhaba! Ben Ders Asistanın (Yapay Zeka)",o.textContent="7/24 anlık soru çözümü, konu anlatımı, özet çıkarma ve mini pratik sınav konularında sana yardımcı olan mekanik bir asistanım. Ben bir yapay zekayım ve koçunun yerini alamam; duygusal veya motivasyonel konularda koçuna danışmalısın.",s.innerHTML=`
      <button class="ai-quick-btn" onclick="aiQuickSend('Çözemediğim bir Matematik/Fen sorusu var. Sokratik tarzda, adım adım ipuçları vererek çözmeme yardım eder misin?')">📝 Çözemediğim Soru Var</button>
      <button class="ai-quick-btn" onclick="aiQuickSend('Bir konunun özetini çıkarmak istiyorum. Hangi ders ve konudan özet çıkarmak istediğimi sorup yardımcı olur musun?')">📖 Konu Özeti Çıkar</button>
      <button class="ai-quick-btn" onclick="aiQuickSend('Zayıf olduğum konular üzerinde çalışıp pratik yapmak istiyorum. Hangi derslerden yardıma ihtiyacım olduğunu sorup pratik yapalım.')">🎯 Zayıf Konuları Çalış</button>
      <button class="ai-quick-btn" onclick="aiQuickSend('Bana seçtiğim bir konudan 3 soruluk hızlı bir mini quiz yapar mısın? Soruları tek tek sor.')">⚡ Hızlı Sınav Yap</button>
    `)}function sr(){const e=document.getElementById("aiChatPanel"),t=document.getElementById("aiChatBubble");if(e.classList.contains("open"))e.classList.remove("open"),t.style.display="flex";else{e.classList.add("open"),t.style.display="none";const n=document.getElementById("aiMessages");n.scrollTop=n.scrollHeight,document.getElementById("aiInput").focus()}}function rr(e){document.getElementById("aiInput").value=e,Ca()}function Ut(){var t;const e={};try{const n=l.students.find(s=>s.id===l.activeStuId);n&&(e.studentName=n.name,e.target=n.target||""),b.role==="parent"&&b.childName&&(e.studentName=b.childName);const a=(l.exams||[]).filter(s=>s.studentId===l.activeStuId).slice(-5);a.length&&(e.recentExams=a.map(s=>({name:s.type+" "+(s.name||""),date:s.date||"",nets:s.nets||{}})));let i=[];if(Object.entries(l.tasks||{}).forEach(([s,r])=>{s.startsWith(l.activeStuId+"_")&&(i=i.concat(r))}),i.length){const s=i.filter(r=>r.done).length;e.taskCompletionRate=Math.round(s/i.length*100),e.weeklyTaskCount=i.length}const o=Object.keys(EXAM_DEFS);a.length&&(e.examProfile=((t=a[0])==null?void 0:t.type)||o[0])}catch(n){console.warn("AI context error:",n)}return e}async function st(){const e={"Content-Type":"application/json"};try{const{data:{session:t}}=await y.auth.getSession();t!=null&&t.access_token&&(e.Authorization="Bearer "+t.access_token)}catch{}return e}function be(e,t){ot.push({role:e,content:t});const n=document.getElementById("aiMessages"),a=n.querySelector(".ai-welcome");a&&a.remove();const i=new Date().toLocaleTimeString("tr-TR",{hour:"2-digit",minute:"2-digit"}),o=document.createElement("div");o.className=`ai-msg ${e}`,o.innerHTML=`${v(t).replace(/\n/g,"<br>")}<div class="ai-msg-time">${i}</div>`,n.appendChild(o),n.scrollTop=n.scrollHeight}let vn=null;window._pickAiImg=function(e){const t=e.files[0];if(!t)return;if(t.size>8*1024*1024){x("Dosya max 8 MB olabilir"),e.value="";return}const n=new FileReader;n.onload=a=>{vn={base64:a.target.result.split(",")[1],mimeType:t.type,name:t.name};const o=document.getElementById("aiImgPreview"),s=document.getElementById("aiImgThumb"),r=document.getElementById("aiImgName");s.src=a.target.result,s.style.display="block",r.textContent=t.name,o.style.display="flex"},n.readAsDataURL(t),e.value=""};window._cancelAiImg=function(){vn=null;const e=document.getElementById("aiImgPreview");e&&(e.style.display="none")};async function Ca(){if(Rt)return;const e=document.getElementById("aiInput"),t=e.value.trim(),n=vn;if(!(!t&&!n)){if(e.value="",n){window._cancelAiImg();const a=document.getElementById("aiMessages"),i=a.querySelector(".ai-welcome");i&&i.remove();const o=document.createElement("div");o.className="ai-msg user",o.innerHTML=`<img src="data:${n.mimeType};base64,${n.base64}" style="max-width:180px;max-height:180px;border-radius:10px;display:block" />${t?`<div style="margin-top:6px">${v(t)}</div>`:""}<div class="ai-msg-time">${new Date().toLocaleTimeString("tr-TR",{hour:"2-digit",minute:"2-digit"})}</div>`,a.appendChild(o),a.scrollTop=a.scrollHeight,ot.push({role:"user",content:t||"Fotoğraftaki soruyu çöz.",image:n})}else be("user",t);Rt=!0,document.getElementById("aiTyping").classList.add("show"),document.getElementById("aiSendBtn").disabled=!0;try{const a=Ut(),i=b.role||"student";if(n){const o=await fetch("/api/ai-chat",{method:"POST",headers:await st(),body:JSON.stringify({imageBase64:n.base64,mimeType:n.mimeType,text:t||"Bu soruyu çöz.",context:a,userRole:i})});if(o.ok){const s=await o.json();be("assistant",s.reply||"Yanıt alınamadı.")}else{const s=await Te(t,a,i,n);be("assistant",s)}}else{const s=await fetch("/api/ai-chat",{method:"POST",headers:await st(),body:JSON.stringify({messages:ot.slice(-10),context:a,userRole:i})});if(s.ok){const r=await s.json();be("assistant",r.reply||"Yanıt alınamadı.")}else{const r=await Te(t,a,i,null);be("assistant",r)}}}catch(a){console.error("AI error:",a);try{const i=Ut(),o=await Te(t,i,b.role||"student",n);be("assistant",o)}catch{const o=localStorage.getItem("gemini_api_key");be("assistant","🔒 Bu özellik ileride aktif olacaktır. Yakında kullanıma açılacak.")}}finally{Rt=!1,document.getElementById("aiTyping").classList.remove("show"),document.getElementById("aiSendBtn").disabled=!1}}}let Nt=null;async function La(e){try{const t=await fetch(`https://generativelanguage.googleapis.com/v1beta/models?key=${e}`);if(!t.ok)return null;const a=(await t.json()).models||[];let i=a.find(o=>o.name.toLowerCase().includes("flash")&&o.supportedGenerationMethods.includes("generateContent"));if(i||(i=a.find(o=>o.supportedGenerationMethods.includes("generateContent"))),i)return i.name.replace("models/","")}catch(t){console.warn("Auto-detect model failed:",t)}return null}async function Te(e,t,n,a){var _,T,f,$,w,B;let i=localStorage.getItem("gemini_api_key");if(!i)try{const{data:h}=await y.from("platform_settings").select("value").eq("key","ai_settings").maybeSingle();h&&h.value&&h.value.gemini_api_key&&(i=h.value.gemini_api_key)}catch(h){console.warn("DB Gemini API key load error:",h)}const o=i;if(!o)throw new Error("API anahtarı eksik.");let s="gemini-1.5-flash";if(o)if(Nt)s=Nt;else{const h=await La(o);h&&(Nt=h,s=h,console.log("[Gemini API] Otomatik model tespiti başarılı:",s))}let r=`Sen "Rostrum Akademi Yapay Zeka Asistanı"sın. Türkiye eğitim sistemine (YKS, LGS) hakim, rolüne göre öğrencilere, velilere veya koçlara destek veren bir yapay zekasın.

KESİNLİKLE YALNIZCA TÜRKÇE yanıt ver. İngilizce, Japonca, Çince veya başka hiçbir dil/karakter kullanma.

Rostrum Akademi İşleyişi, Üyelik ve Fiyatlandırma Bilgileri:
1. Kayıt olan tüm koçlara 14 gün ücretsiz deneme süresi tanımlanır. Bu süre bitiminde panel kilitlenir.
2. Otomatik ödeme/kredi kartı altyapısı yoktur; paket satın alma, ödeme ve lisans uzatma işlemleri tamamen manuel olarak yürütülür.
3. Kullanıcılar paket satın almak, deneme sürelerini uzatmak veya üyeliklerini aktif etmek için Kurucu Emin Ceylan (ceylanemin1928@gmail.com) ile iletişime geçmelidir.
4. Destek panelinde bulunan "Kurucuya / Destek Ekibine Yaz" seçeneği ile doğrudan kurucu ekibe mesaj gönderebilir ve bu ekran üzerinden onunla canlı yazışabilirler.
5. Güncel Paket Fiyatları:
   - Başlangıç Paketi (Starter): Aylık 299 TL
   - Koç Pro Paketi (Pro): Aylık 599 TL
   - Kurumsal Paket (Enterprise): Aylık 1499 TL`;const d=b.dbUser;if(d){const h=d.plan||"trial",S={trial:"Deneme",starter:"Başlangıç",pro:"Pro",enterprise:"Kurumsal"}[h]||h;if(h==="trial"){const I=d.trial_ends_at?new Date(d.trial_ends_at):new Date(new Date(d.created_at).getTime()+12096e5),z=Math.max(0,Math.ceil((I-Date.now())/864e5));r+=`
KULLANICI BİLGİSİ: Ad=${d.full_name||d.username}, Plan=${S}, Deneme süresi kalan=${z} gün (bitiş: ${I.toLocaleDateString("tr-TR")}).`}else r+=`
KULLANICI BİLGİSİ: Ad=${d.full_name||d.username}, Plan=${S} (aktif üye).`}n==="parent"?r+=`
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
Hedef: ${t.target}`);const p=ot.slice(-8).map(h=>{const S=[];return h.image&&S.push({inlineData:{mimeType:h.image.mimeType,data:h.image.base64}}),S.push({text:h.content||(h.image?"Soruyu çöz":"")}),{role:h.role==="user"?"user":"model",parts:S}}),m=[{role:"user",parts:[{text:r}]},{role:"model",parts:[{text:"Anladım! Rostrum Akademi Yapay Zeka Asistanı olarak hazırım."}]},...p],u=await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${s}:generateContent?key=${o}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({contents:m,generationConfig:{temperature:.7,maxOutputTokens:1500}})});if(!u.ok){let h=`HTTP ${u.status}`;try{const S=await u.json();(_=S==null?void 0:S.error)!=null&&_.message&&(h=S.error.message)}catch{}throw new Error(h)}const g=await u.json();return((B=(w=($=(f=(T=g==null?void 0:g.candidates)==null?void 0:T[0])==null?void 0:f.content)==null?void 0:$.parts)==null?void 0:w[0])==null?void 0:B.text)||"Yanıt üretilemedi."}let fn="";async function lr(e){const t=l.students.find(a=>a.id===e);if(!t)return;const n=document.getElementById("aiCopilotBtn");n.disabled=!0,n.textContent="⌛ Analiz Ediliyor ve Taslak Oluşturuluyor...";try{const a=ne(0,t.weekStart||0);let i=0,o=0,s=0;for(let w=0;w<7;w++){const B=l.tasks[`${t.id}_${O(J(a,w))}`]||[];i+=B.length,o+=B.filter(h=>h.done).length,s+=B.reduce((h,S)=>h+Number(S.duration||0),0)}const r=i>0?Math.round(o/i*100):0,c=(l.exams||[]).filter(w=>w.studentId===e).slice(-5).map(w=>({name:w.type+" "+(w.name||""),date:w.date||"",nets:w.nets||{}})),p={};(l.studentSpeeds||[]).filter(w=>w.student_id===e).forEach(w=>{p[`${w.exam_type}_${w.subject}`]=w.secs_per_question});const m=`Lütfen şu öğrenci için haftalık durum analizi ve öğrenciye gönderilecek haftalık değerlendirme mesajı taslağı oluştur:
Öğrenci Adı: ${t.name}
Hedef: ${t.target||"Belirtilmemiş"}
Bu haftaki görev tamamlama oranı: %${r} (${o}/${i} görev tamamlandı, toplam ${Math.round(s/60)} saat çalışıldı)
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
(Öğrenciye gönderilecek haftalık değerlendirme taslağı)`;let u="";const g={studentName:t.name,target:t.target,recentExams:c,taskCompletionRate:r,weeklyTaskCount:i};try{const w=await fetch("/api/ai-chat",{method:"POST",headers:await st(),body:JSON.stringify({messages:[{role:"user",content:m}],context:g,userRole:"coach"})});w.ok?u=(await w.json()).reply:u=await Te(m,g,"coach")}catch{u=await Te(m,g,"coach")}let _="Analiz üretilemedi.",T="Taslak üretilemedi.";const f=u.indexOf("[ANALİZ]"),$=u.indexOf("[TASLAK]");f!==-1&&$!==-1?f<$?(_=u.substring(f+8,$).trim(),T=u.substring($+8).trim()):(T=u.substring($+8,f).trim(),_=u.substring(f+8).trim()):T=u,document.getElementById("aiCopilotAnalysisBox").innerHTML=`<b>📊 Yapay Zeka Durum Analizi:</b><br>${_.replace(/\n/g,"<br>")}`,document.getElementById("aiCopilotTextarea").value=T,fn=T,document.getElementById("aiCopilotResultArea").style.display="block",document.getElementById("aiCopilotSendBtn").disabled=!0,document.getElementById("aiCopilotEditWarning").style.display="inline"}catch(a){console.error("generateAICopilotDraft error:",a),x("Taslak oluşturulurken hata: "+a.message)}finally{n.disabled=!1,n.textContent="🤖 Durum Analizi Yap ve Taslak Oluştur"}}function dr(){var t;const e=(((t=document.getElementById("aiCopilotTextarea"))==null?void 0:t.value)||"").trim();if(!e){x("Önce taslak oluşturun");return}window.open("https://wa.me/?text="+encodeURIComponent(e),"_blank")}function cr(){const e=document.getElementById("aiCopilotTextarea").value.trim(),t=document.getElementById("aiCopilotSendBtn"),n=document.getElementById("aiCopilotEditWarning");e&&e!==fn?(t.disabled=!1,n.style.display="none"):(t.disabled=!0,n.style.display="inline")}async function pr(e){var a;const t=document.getElementById("aiCopilotTextarea").value.trim();if(!t)return;const n=document.getElementById("aiCopilotSendBtn");n.disabled=!0,n.textContent="Gönderiliyor...";try{const i=b.coachId||((a=l.students.find(r=>r.id===e))==null?void 0:a.coachId),{data:o,error:s}=await y.from("messages").insert({student_id:e,coach_id:i,from_role:"coach",text:t,read:!1}).select().single();if(s)throw s;await y.from("reports").insert({student_id:e,coach_id:i,type:"ai_copilot",title:"Yapay Zeka Copilot Değerlendirmesi",content:t,start_date:ue(),end_date:ue()}),l.messages[e]||(l.messages[e]=[]),l.messages[e].push({_id:o.id,from:"coach",text:t,time:new Date().toLocaleTimeString("tr-TR",{hour:"2-digit",minute:"2-digit"}),read:!1}),x("Taslak mesaj başarıyla düzenlendi, öğrenciye gönderildi ve arşive kaydedildi! ✓"),document.getElementById("aiCopilotResultArea").style.display="none",document.getElementById("aiCopilotTextarea").value="",fn=""}catch(i){console.error("sendCopilotDraft error:",i),x("Gönderim hatası: "+i.message),n.disabled=!1}finally{n.textContent="✍️ Düzenlemeyi Kaydet ve Öğrenciye Gönder"}}function ja(){const e=l.students.find(r=>r.id===l.activeStuId),t=b.childName||(e==null?void 0:e.name)||"Öğrenci",n=document.getElementById("view-parent-home");if(!n)return;let a=[];Object.entries(l.tasks||{}).forEach(([r,d])=>{r.startsWith(l.activeStuId+"_")&&(a=a.concat(d))});const i=a.filter(r=>r.done).length,o=a.length?Math.round(i/a.length*100):0,s=(l.exams||[]).filter(r=>r.studentId===l.activeStuId).slice(-3);n.innerHTML=`
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
          <div style="font-size:32px;font-weight:800;color:var(--green)">${s.length}</div>
          <div style="font-size:12px;color:var(--text-mid);margin-top:4px">Son Denemeler</div>
        </div>
      </div>
      
      ${s.length?`
      <div class="card" style="padding:20px;margin-bottom:16px">
        <div style="font-size:15px;font-weight:700;margin-bottom:12px">📊 Son Deneme Sonuçları</div>
        ${s.map(r=>{const d=Object.values(r.nets||{}).reduce((c,p)=>c+(parseFloat(p)||0),0);return`<div style="display:flex;justify-content:space-between;align-items:center;padding:10px 0;border-bottom:1px solid var(--border)">
            <div><div style="font-weight:600;font-size:13px">${v(r.name||r.type)}</div><div style="font-size:11px;color:var(--text-mid)">${r.date||""}</div></div>
            <div style="font-weight:800;color:var(--accent)">${d.toFixed(1)} net</div>
          </div>`}).join("")}
      </div>`:""}
      
      <div class="card" style="padding:20px;background:linear-gradient(135deg,rgba(240,165,0,.05),rgba(62,207,142,.05))">
        <div style="font-size:15px;font-weight:700;margin-bottom:8px">🤖 AI Asistandan Yardım Alın</div>
        <div style="font-size:12px;color:var(--text-mid);margin-bottom:12px">Çocuğunuzun ilerlemesi hakkında anında rapor alabilirsiniz.</div>
        <button class="btn btn-accent" onclick="toggleAIChat()" style="justify-content:center;width:100%;padding:12px">🤖 AI Asistan ile Konuş</button>
      </div>
    </div>`}function Pa(){const e=document.getElementById("view-parent-progress");if(!e)return;const t=l.students.find(o=>o.id===l.activeStuId),n=b.childName||(t==null?void 0:t.name)||"Öğrenci",a=(l.exams||[]).filter(o=>o.studentId===l.activeStuId);let i=[];Object.entries(l.tasks||{}).forEach(([o,s])=>{o.startsWith(l.activeStuId+"_")&&(i=i.concat(s))}),e.innerHTML=`
    <div style="padding:24px;max-width:800px;margin:0 auto">
      <div style="font-size:20px;font-weight:800;margin-bottom:20px">📊 ${v(n)} - İlerleme Raporu</div>
      
      <div class="card" style="padding:20px;margin-bottom:16px">
        <div style="font-size:15px;font-weight:700;margin-bottom:16px">📋 Haftalık Görevler</div>
        ${i.length?i.slice(-10).map(o=>`
          <div style="display:flex;align-items:center;gap:10px;padding:8px 0;border-bottom:1px solid var(--border)">
            <div style="width:20px;height:20px;border-radius:50%;background:${o.done?"var(--green)":"var(--surface2)"};border:2px solid ${o.done?"var(--green)":"var(--border)"};display:flex;align-items:center;justify-content:center;font-size:10px;color:#fff">${o.done?"✓":""}</div>
            <div style="flex:1;font-size:13px">${v(o.subject)} <span style="font-size:11px;color:var(--text-dim)">(${lt(o.type)})</span></div>
            <div style="font-size:11px;color:var(--text-mid)">${o.done?"Tamamlandı":"Bekliyor"}</div>
          </div>`).join(""):'<div style="text-align:center;color:var(--text-mid);padding:20px">Henüz görev bulunmuyor.</div>'}
      </div>
      
      <div class="card" style="padding:20px">
        <div style="font-size:15px;font-weight:700;margin-bottom:16px">📊 Deneme Geçmişi</div>
        ${a.length?a.slice(-10).map(o=>{const s=Object.values(o.nets||{}).reduce((r,d)=>r+(parseFloat(d)||0),0);return`<div style="display:flex;justify-content:space-between;align-items:center;padding:10px 0;border-bottom:1px solid var(--border)">
            <div><div style="font-weight:600;font-size:13px">${v(o.name||o.type)}</div><div style="font-size:11px;color:var(--text-mid)">${o.date||""}</div></div>
            <div style="font-weight:800;color:var(--accent)">${s.toFixed(1)} net</div>
          </div>`}).join(""):'<div style="text-align:center;color:var(--text-mid);padding:20px">Henüz deneme sonucu yok.</div>'}
      </div>
    </div>`}function Ra(){const e=document.getElementById("view-parent-ai");e&&(e.innerHTML=`
    <div style="padding:24px;max-width:600px;margin:0 auto;text-align:center">
      <div style="font-size:48px;margin-bottom:16px">🤖</div>
      <div style="font-size:20px;font-weight:800;margin-bottom:8px">AI Koç Asistanı</div>
      <div style="font-size:13px;color:var(--text-mid);margin-bottom:24px;line-height:1.7">Çocuğunuzun eğitim süreci hakkında sorular sorun, deneme analizleri isteyin veya öneriler alın.</div>
      <button class="btn btn-accent" onclick="toggleAIChat()" style="justify-content:center;padding:14px 32px;font-size:15px">💬 AI Asistan ile Konuşmaya Başla</button>
    </div>`)}async function mr(){var u;const e=document.getElementById("smId").value,t=document.getElementById("smName").value.trim(),n=Pe(document.getElementById("smUsername").value.trim()),a=document.getElementById("smPass").value,i=document.getElementById("smRole").value,o=document.getElementById("smTarget").value.trim(),s=((u=document.querySelector(".color-opt.sel"))==null?void 0:u.dataset.c)||"#e8622a",r=Number(document.getElementById("smWeekStart").value),d=Number(document.getElementById("smProg").value);if(!t||!n||!a)return x("Ad, kullanıcı adı ve şifre zorunlu!");const c=a.length===64?a:await He(a),p=n+"@rostrumakademi.com",m={full_name:t,username:n,password_hash:c,role:i,target:o,color:s,week_start:r,progress:d};if(M(!0),e){const{error:g}=await y.from("users").update(m).eq("id",e);if(M(!1),g)return x("Hata: "+g.message);x("Kullanıcı güncellendi ✓")}else{const{data:g,error:_}=await y.rpc("create_new_user",{p_email:p,p_password:a,p_full_name:t,p_username:n,p_role:i,p_target:o,p_color:s,p_progress:d,p_week_start:r,p_coach_id:null,p_institution_id:null,p_exam_profile:"YKS"});if(M(!1),_)return x("Hata: "+_.message);x("Kullanıcı başarıyla oluşturuldu ✓")}q("studentModal"),Je()}let ke=[],he={search:"",exam:"",subject:""},Na=null;function ur(e){const t=ke.find(o=>o.id===e);if(!t)return x("Kaynak bulunamadı");if(!l.students.length)return x("Önce öğrenci ekleyin");Na=t;let n=document.getElementById("assignResModal");n||(n=document.createElement("div"),n.className="modal-bg",n.id="assignResModal",document.body.appendChild(n));const a=new Date,i=Array.from({length:7},(o,s)=>{const r=J(a,s),d=s===0?"Bugün":s===1?"Yarın":["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"][r.getDay()]+` (${r.getDate()}.${r.getMonth()+1})`;return`<option value="${O(r)}|${d}">${d}</option>`}).join("");n.innerHTML=`<div class="modal" style="max-width:380px">
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
  </div>`,G("assignResModal")}function gr(){const e=Na;if(!e)return;const t=document.getElementById("arStudent").value,[n,a]=document.getElementById("arDay").value.split("|");q("assignResModal"),l.activeStuId=t,ea(n,a);const i=(e.resource_type||"book")==="playlist";document.getElementById("tmType").value=i?"konu":"soru",document.getElementById("tmExam").value=e.exam_type||"TYT",_t();const o=document.getElementById("tmSubjectSel");if(o&&[...o.options].some(s=>s.value===e.subject))o.value=e.subject;else{const s=document.getElementById("tmSubjectFree");s&&(s.value=e.subject||"")}W={name:e.name,yil:e.year,testler:Array.isArray(e.tests)?e.tests:[],publisher:e.publisher,resource_type:e.resource_type||"book"},document.getElementById("tmBookSearch").value=e.name,document.getElementById("tmBookVal").value=e.name,St(),document.getElementById("tmTestWrap").style.display="",document.getElementById("soruBankasiWrap").style.display="",x("Kaynak hazır — test/video seçip ekleyin")}function yn(e){const t=he.search;return e.filter(n=>!(t&&!n.name.toLowerCase().includes(t)&&!(n.publisher||"").toLowerCase().includes(t)||he.exam&&n.exam_type!==he.exam||he.subject&&n.subject!==he.subject))}function vr(){var i,o,s;he.search=(((i=document.getElementById("crSearch"))==null?void 0:i.value)||"").toLowerCase().trim(),he.exam=((o=document.getElementById("crExam"))==null?void 0:o.value)||"",he.subject=((s=document.getElementById("crSubject"))==null?void 0:s.value)||"";const e=document.getElementById("cr-tab-content");if(!e)return;const t=document.querySelector(".cr-tab.active"),n=(t==null?void 0:t.id)==="crt-playlists"?"playlists":(t==null?void 0:t.id)==="crt-analytics"?"analytics":"books",a=yn(ke);e.innerHTML=Dt(n,a)}function Dt(e,t){const n=t.filter(r=>r.resource_type==="book"),a=t.filter(r=>r.resource_type==="playlist"),i={Matematik:"#3B82F6",Fizik:"#8B5CF6",Kimya:"#06B6D4",Biyoloji:"#10B981",Geometri:"#6366F1",Türkçe:"#F59E0B",Edebiyat:"#EC4899",Tarih:"#EF4444",Coğrafya:"#84CC16",Felsefe:"#14B8A6","Din Kültürü":"#F97316",Din:"#F97316",Genel:"#6B7280"},o={Matematik:"∑",Fizik:"⚛",Kimya:"🧪",Biyoloji:"🌿",Geometri:"△",Türkçe:"T",Edebiyat:"✒",Tarih:"🏛",Coğrafya:"🌍",Felsefe:"💭","Din Kültürü":"☪",Din:"☪",Genel:"📌"};function s(r,d){if(!r.length)return'<div style="text-align:center;padding:48px;color:var(--text-dim);font-size:13px">Kaynak bulunamadı.</div>';const c={};return r.forEach(p=>{const m=p.exam_type||"Diğer";c[m]||(c[m]={});const u=p.subject||"Genel";c[m][u]||(c[m][u]=[]),c[m][u].push(p)}),Object.entries(c).map(([p,m])=>`
      <div style="margin-bottom:28px">
        <div style="display:flex;align-items:center;gap:8px;margin-bottom:12px">
          <span style="font-size:10px;font-weight:800;letter-spacing:1px;text-transform:uppercase;color:#fff;background:var(--accent);padding:3px 10px;border-radius:99px">${p}</span>
          <div style="flex:1;height:1px;background:var(--border)"></div>
        </div>
        <div style="display:flex;flex-direction:column;gap:16px">
        ${Object.entries(m).map(([u,g])=>{const _=i[u]||"#6B7280",T=o[u]||"📌";return`<div>
            <div style="display:flex;align-items:center;gap:6px;margin-bottom:7px">
              <div style="width:22px;height:22px;border-radius:6px;background:${_}20;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:800;color:${_};flex-shrink:0">${T}</div>
              <span style="font-size:12px;font-weight:700;color:${_}">${u}</span>
              <span style="font-size:10px;color:var(--text-dim)">${g.length} kaynak</span>
            </div>
            <div style="display:flex;flex-direction:column;gap:4px;padding-left:28px">
              ${g.map(f=>`
                <div style="display:flex;align-items:center;padding:10px 14px;border-radius:10px;background:var(--surface);border:1.5px solid var(--border);gap:12px;cursor:default;transition:all .15s;box-shadow:var(--shadow)" onmouseover="this.style.borderColor='${_}';this.style.boxShadow='0 2px 12px ${_}22'" onmouseout="this.style.borderColor='var(--border)';this.style.boxShadow='var(--shadow)'">
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
        ${Ha(t).map(d=>{const c=d.totalCount>0?Math.round(d.doneCount/d.totalCount*100):0,p=c>=80?"var(--green)":c>=50?"var(--accent)":"var(--text-dim)";return`<div class="analytics-card">
            <div style="font-size:10px;font-weight:700;color:var(--accent);margin-bottom:4px;text-transform:uppercase;letter-spacing:.4px">${d.exam_type} · ${d.subject}</div>
            <div style="font-size:14px;font-weight:800;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;margin-bottom:8px">${v(d.name)}</div>
            <div style="display:flex;justify-content:space-between;font-size:11px;color:var(--text-mid);margin-bottom:6px"><span>Tamamlama</span><span style="font-weight:700;color:${p}">%${c}</span></div>
            <div style="height:5px;background:var(--surface3);border-radius:99px;overflow:hidden;margin-bottom:10px"><div style="height:100%;width:${c}%;background:${p};border-radius:99px"></div></div>
            <div style="display:flex;justify-content:space-between;font-size:11px;color:var(--text-dim)"><span>Atanma: <b>${d.assignedCount}</b></span><span>Öğrenci: <b>${d.studentsCount}</b></span></div>
          </div>`}).join("")||'<div style="grid-column:span 3;text-align:center;padding:40px;color:var(--text-dim)">Kayıtlı performans verisi bulunamadı.</div>'}
      </div>`}async function ut(){const e=document.getElementById("view-coach-resources");if(!e)return;if(!ke.length){e.innerHTML='<div style="max-width:720px;margin:0 auto;padding:40px;text-align:center;color:var(--text-dim);font-size:13px">Kaynaklar yükleniyor…</div>';const{data:a,error:i}=await y.from("resources").select("*").or(`coach_id.eq.${b.coachId},coach_id.is.null`).order("resource_type,exam_type,subject,name");i&&console.error(i),ke=a||[]}he={search:"",exam:"",subject:""};let t="books";const n=document.querySelector(".cr-tab.active");n&&(n.id==="crt-playlists"?t="playlists":n.id==="crt-analytics"&&(t="analytics")),e.innerHTML=`<div style="max-width:720px;margin:0 auto">
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
      ${Dt(t,ke)}
    </div>
  </div>`}function fr(e){var n;document.querySelectorAll(".cr-tab").forEach(a=>a.classList.remove("active")),(n=document.getElementById("crt-"+e))==null||n.classList.add("active");const t=yn(ke);document.getElementById("cr-tab-content").innerHTML=Dt(e,t)}function Ha(e){const t={};return e.forEach(n=>{t[n.name]={name:n.name,exam_type:n.exam_type,subject:n.subject,assignedCount:0,totalCount:0,doneCount:0,students:new Set}}),Object.entries(l.tasks).forEach(([n,a])=>{const i=n.split("_")[0];a.forEach(o=>{e.forEach(s=>{if(o.subject&&o.subject.includes(s.name)){const r=t[s.name];r&&(r.assignedCount++,r.students.add(i),o.task_items&&Array.isArray(o.task_items)?o.task_items.forEach(d=>{r.totalCount++,(d.done||o.done)&&r.doneCount++}):(r.totalCount++,o.done&&r.doneCount++))}})})}),Object.values(t).map(n=>({...n,studentsCount:n.students.size})).filter(n=>n.assignedCount>0).sort((n,a)=>a.assignedCount-n.assignedCount)}function yr(e,t="book"){const n=t==="playlist";let a=document.getElementById("coachResourceModal");a||(a=document.createElement("div"),a.id="coachResourceModal",a.className="modal-bg",a.innerHTML=`<div class="modal modal-lg">
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
Sayılar - Test 2 | 14`,document.getElementById("crmYtImportBox").style.display=n&&!e?"":"none",document.getElementById("crmTestsField").style.display=n?"none":"",document.getElementById("crmYtUrl").value="",document.getElementById("crmYtStatus").textContent="",document.getElementById("crmVideoPreview").style.display="none",document.getElementById("crmVideoPreview").innerHTML="",window._crmFetchedVideos=[],e?y.from("resources").select("*").eq("id",e).single().then(({data:i})=>{if(i){document.getElementById("crmExam").value=i.exam_type,document.getElementById("crmSubject").value=i.subject,document.getElementById("crmPublisher").value=i.publisher||"",document.getElementById("crmName").value=i.name||"";const o=i.tests||[];n?(document.getElementById("crmTestsField").style.display="",document.getElementById("crmTests").value=o.map(s=>`${s.label||s} | ${s.url||""} | ${s.soru||0}`).join(`
`)):document.getElementById("crmTests").value=o.map(s=>`${s.label||s} | ${s.soru||0}`).join(`
`)}}):(document.getElementById("crmExam").value="TYT",document.getElementById("crmSubject").value="Matematik",document.getElementById("crmPublisher").value="",document.getElementById("crmName").value="",document.getElementById("crmTests").value=""),G("coachResourceModal")}async function xr(){const e=document.getElementById("crmYtUrl").value.trim(),t=document.getElementById("crmYtStatus");if(!e)return t.innerHTML='<span style="color:var(--red)">⚠️ Playlist URL girin</span>';const n=e.match(/[?&]list=([^&]+)/);if(!n)return t.innerHTML='<span style="color:var(--red)">⚠️ list= parametresi bulunamadı</span>';const a=n[1];t.innerHTML="⏳ Çekiliyor...";try{let i=[],o="";do{let r=`/api/youtube?playlistId=${a}`;o&&(r+=`&pageToken=${o}`);const d=await fetch(r);if(!d.ok)throw new Error("Playlist çekilemedi.");const c=await d.json();c.items&&(i=i.concat(c.items)),o=c.nextPageToken||"",t.innerHTML=`⏳ ${i.length} video yükleniyor...`}while(o&&i.length<200);window._crmFetchedVideos=i;const s=document.getElementById("crmVideoPreview");if(s.style.display="",s.innerHTML=i.map((r,d)=>`
      <div style="display:flex;align-items:center;gap:8px;padding:7px 12px;border-bottom:1px solid var(--border)">
        <div style="width:20px;height:20px;border-radius:5px;background:var(--surface3);color:var(--text-mid);font-size:9px;font-weight:800;display:flex;align-items:center;justify-content:center;flex-shrink:0">${d+1}</div>
        <div style="flex:1;min-width:0">
          <div style="font-size:11px;font-weight:600;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${v(r.title)}</div>
          <div style="font-size:10px;color:var(--text-dim)">⏱ ${r.duration||"?"} dk</div>
        </div>
        <a href="${v(r.url)}" target="_blank" style="font-size:10px;font-weight:700;background:#cc000022;color:#ff5555;border:1px solid #aa222233;padding:3px 8px;border-radius:6px;text-decoration:none;flex-shrink:0">▶</a>
      </div>`).join(""),i.length>0&&!document.getElementById("crmName").value){const r=i[0].title;document.getElementById("crmName").value=r.split(" | ")[0].split(" - ")[0].trim().slice(0,50)}t.innerHTML=`<span style="color:var(--green)">✓ ${i.length} video çekildi!</span>`}catch(i){t.innerHTML=`<span style="color:var(--red)">⚠️ Hata: ${i.message}</span>`}}async function br(){const e=document.getElementById("crmName").value.trim(),t=document.getElementById("crmSubject").value;if(!e||!t)return x("Ad ve ders zorunlu!");const n=document.getElementById("crmId").value,a=document.getElementById("crmType").value==="playlist",i=document.getElementById("crmTests").value.split(`
`).map(d=>d.trim()).filter(Boolean),o=window._crmFetchedVideos||[];let s=[];if(a){if(o.length>0?s=o.map(d=>({label:d.title||"",url:d.url||"",topic:"",soru:parseInt(d.duration)||0})):s=i.map(d=>{const c=d.split("|").map(p=>p.trim());return{label:c[0]||"",url:c[1]||"",topic:"",soru:parseInt(c[2])||0}}),!s.length)return x("Video listesi boş! Önce playlist çekin.")}else s=i.map(d=>{const c=d.split("|").map(p=>p.trim());return{label:c[0]||"",soru:parseInt(c[1])||0}});const r={exam_type:document.getElementById("crmExam").value,subject:t,publisher:document.getElementById("crmPublisher").value.trim(),year:new Date().getFullYear(),name:e,tests:s,active:!0,resource_type:a?"playlist":"book",coach_id:b.coachId};M(!0),n?(await y.from("resources").update(r).eq("id",n),x("Güncellendi ✓")):(await y.from("resources").insert(r),x("Kaynak eklendi ✓")),M(!1),q("coachResourceModal"),ke=[],ut()}async function hr(e){await ie("Bu kaynağı silmek istediğinizden emin misiniz?")&&(M(!0),await y.from("resources").delete().eq("id",e),M(!1),x("Silindi"),ke=[],ut())}function kr(e){const t=e.target.files[0];if(!t)return;M(!0);const n=new FileReader;n.onload=async a=>{try{const i=new Uint8Array(a.target.result),o=XLSX.read(i,{type:"array"}),s=o.SheetNames[0],r=o.Sheets[s],d=XLSX.utils.sheet_to_json(r);if(d.length===0)return M(!1),x("Excel dosyası boş!");const c={};d.forEach(u=>{const g=u["Kaynak Adı"]||u.Name||u["Kitap Adı"]||u["Playlist Adı"]||"",T=(u["Kaynak Türü"]||u.Type||u.Tür||"book").toLowerCase().includes("playlist")?"playlist":"book",f=u.Yayınevi||u.Publisher||u.Hoca||"",$=u.Sınav||u.Exam||"TYT",w=u.Ders||u.Subject||"",B=u["Öğe Adı"]||u.Test||u.Video||u["Test Adı"]||u["Video Adı"]||"",h=parseInt(u["Soru Sayısı"]||u.Soru||u.Süre||u["Süre (dk)"]||0),S=u.URL||u.Link||"";if(!g||!w||!B)return;const I=`${g}_${$}_${w}_${T}`;c[I]||(c[I]={exam_type:$,subject:w,publisher:f,name:g,resource_type:T,tests:[]}),c[I].tests.push({label:B,soru:h,url:S,topic:""})});const p=Object.values(c);if(p.length===0)return M(!1),x("Uyumlu veri bulunamadı! Sütun başlıklarını kontrol edin.");let m=0;for(const u of p){const{error:g}=await y.from("resources").insert({...u,year:new Date().getFullYear(),active:!0,coach_id:b.coachId});g||m++}M(!1),x(`✓ Excel'den ${m} kaynak başarıyla aktarıldı!`),ke=[],ut()}catch(i){M(!1),console.error(i),x("Excel okuma hatası: "+i.message)}},n.readAsArrayBuffer(t)}function wr(e){const t=e.target.files[0];if(!t)return;M(!0);const n=new FileReader;n.onload=async a=>{try{const i=new Uint8Array(a.target.result),o=XLSX.read(i,{type:"array"}),s=o.Sheets[o.SheetNames[0]],r=XLSX.utils.sheet_to_json(s);if(r.length===0)return M(!1),x("Excel dosyası boş!");let d=0;for(const c of r){const p=c["Ad Soyad"]||c.Ad||c.Name||"",m=c.Hedef||c.Target||"Hedef belirtilmemiş";let u=c["Kullanıcı Adı"]||c.Username||"",g=c.Şifre||c.Password||STU_DEFAULT_PASS;if(!p)continue;u||(u=p.toLowerCase().replace(/\s+/g,"")+Math.floor(Math.random()*100),u=Pe(u));const _=await He(g),T=u+"@rostrumakademi.com",{data:f,error:$}=await y.rpc("create_new_user",{p_email:T,p_password:g,p_full_name:p,p_username:u,p_role:"student",p_target:m,p_color:"#4da6ff",p_progress:0,p_week_start:0,p_coach_id:b.coachId,p_institution_id:null,p_exam_profile:"YKS"});!$&&f&&(l.students.push({id:f,name:p,target:m,color:"#4da6ff",progress:0,pass:_,weekStart:0,username:u}),d++)}M(!1),x(`✓ Excel'den ${d} öğrenci başarıyla eklendi!`),we(),dt()}catch(i){M(!1),console.error(i),x("Excel okuma hatası: "+i.message)}},n.readAsArrayBuffer(t)}function Ya(e){if(!l.activeStuId||!W)return null;let t=null;return Object.entries(l.tasks).forEach(([n,a])=>{n.startsWith(l.activeStuId+"_")&&a.forEach(i=>{i.subject&&i.subject.includes(W.name)&&(i.task_items&&Array.isArray(i.task_items)?i.task_items.forEach(o=>{(o.label||o)===e&&(o.done||i.done?t="done":t!=="done"&&(t="pending"))}):i.note&&i.note.includes(e)&&(i.done?t="done":t!=="done"&&(t="pending")))})}),t}async function $r(e,t){var d;const a=`${l.activeStuId}_${e}`,i=(d=l.tasks[a])==null?void 0:d[t];if(!i)return;Ae=e,_editingTaskId=i._id,W=null,document.querySelector("#taskModal h2").innerHTML=`Görev Düzenle — <span id="tmDay">${e}</span>`,document.querySelector("#taskModal .btn-accent").textContent="Güncelle",document.getElementById("tmType").value=i.type,document.getElementById("tmExam").value=i.exam||"",document.getElementById("tmDuration").value=i.duration||60,document.getElementById("tmStartTime").value=i.start_time||"",document.getElementById("tmNote").value=i.note||"";const o=i.exam||"",s=i.type;{const c=document.getElementById("tmSubjectSel"),p=document.getElementById("tmSubjectFree");document.getElementById("tmBookVal").value="",document.getElementById("tmBookSearch").value="",document.getElementById("tmBookList").style.display="none",document.getElementById("tmTestWrap").style.display="none";const m=document.getElementById("tmTestSummary");m&&(m.style.display="none"),o&&typeof SUBJECT_MAP<"u"&&SUBJECT_MAP[o]?(c.innerHTML=SUBJECT_MAP[o].map(_=>`<option value="${_}">${_}</option>`).join(""),c.style.display="",p.style.display="none"):(c.style.display="none",p.style.display="");const u=(s==="soru"||s==="konu")&&o;document.getElementById("soruBankasiWrap").style.display=u?"":"none";const g=document.getElementById("tmBookSearch");g&&(g.placeholder=s==="konu"?"Hoca veya playlist ara...":"Kitap veya yayınevi ara...")}if((s==="soru"||s==="konu")&&o){const c=document.getElementById("tmSubjectSel");let p="",m=i.subject;if(i.subject.includes(" - ")){const T=i.subject.split(" - ");p=T[0].trim(),m=T.slice(1).join(" - ").trim()}p&&SUBJECT_MAP[o]&&SUBJECT_MAP[o].includes(p)&&(c.value=p),document.getElementById("tmBookVal").value=m,document.getElementById("tmBookSearch").value=m,M(!0),await ta(),M(!1);const u=`${o}_${p}`;let _=(le[u]||[]).find(T=>T.name===m);if(_||Object.values(le).forEach(T=>{const f=T.find($=>$.name===m);f&&(_=f)}),_){W=_,document.getElementById("tmTestWrap").style.display="",St();const T=(i.task_items||[]).map($=>$.label||$);document.querySelectorAll("#tmTestList input[type=checkbox]").forEach($=>{var h;const w=parseInt($.value),B=((h=W.testler[w])==null?void 0:h.label)||W.testler[w];T.includes(B)?$.checked=!0:$.checked=!1}),We()}}else{const c=document.getElementById("tmSubjectSel"),p=document.getElementById("tmSubjectFree");c.style.display!=="none"?c.value=i.subject:p.value=i.subject,document.getElementById("tmBookVal").value="",document.getElementById("tmBookSearch").value="",document.getElementById("tmBookList").style.display="none",document.getElementById("tmTestWrap").style.display="none"}G("taskModal")}async function Er(){const e=prompt("Şablon adı giriniz:");if(!e)return;const t=l.students.find(r=>r.id===l.activeStuId),n=(t==null?void 0:t.weekStart)??0,a=ne(l.weekOffset,n),i=[];for(let r=0;r<7;r++){const d=J(a,r),c=O(d),p=`${l.activeStuId}_${c}`;(l.tasks[p]||[]).forEach(u=>{i.push({day_index:r,type:u.type,exam_type:u.exam||null,subject:u.subject,duration:u.duration,note:u.note||"",task_items:u.task_items||null})})}if(i.length===0)return x("Bu haftada kaydedilecek görev bulunmuyor!");M(!0);const{error:o}=await y.from("program_templates").insert({coach_id:b.coachId,name:e,description:`${i.length} görev içeriyor.`,tasks:i});if(M(!1),o)return x("Şablon kaydedilemedi: "+o.message);x("Hafta şablon olarak kaydedildi ✓"),await ie(`"${e}" şablonunu Rostrum Akademi ekibiyle paylaşmak ister misiniz?

Paylaşılan şablonlar değerlendirilerek tüm koçlara önerilebilir.`)&&y.auth.getSession().then(({data:{session:r}})=>{const d=r==null?void 0:r.access_token;d&&fetch("/api/mailer",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${d}`},body:JSON.stringify({type:"template_share",template_name:e,task_count:i.length,tasks_json:JSON.stringify(i,null,2)})}).then(()=>x("Şablon Rostrum ekibiyle paylaşıldı ✓")).catch(()=>x("Şablon kaydedildi, paylaşım gönderilemedi."))})}async function _r(){M(!0);const{data:e,error:t}=await y.from("program_templates").select("*").eq("coach_id",b.coachId);if(M(!1),t)return x("Şablonlar yüklenemedi.");if(!e||e.length===0)return x("Kayıtlı şablonunuz bulunmuyor. Önce haftayı şablon olarak kaydedin.");let n=document.getElementById("applyTemplateModal");n||(n=document.createElement("div"),n.id="applyTemplateModal",n.className="modal-bg",n.innerHTML=`<div class="modal">
      <button class="modal-close" onclick="cm('applyTemplateModal')">×</button>
      <h2>Şablon Uygula</h2>
      <div class="field"><label>Şablon Seçin</label>
        <select id="atmSelect"></select>
      </div>
      <button class="btn btn-accent" style="width:100%;justify-content:center;padding:12px;margin-top:12px" onclick="confirmApplyTemplate()">Uygula</button>
    </div>`,document.body.appendChild(n),n.addEventListener("click",a=>{a.target===n&&n.classList.remove("open")})),document.getElementById("atmSelect").innerHTML=e.map(a=>`<option value="${a.id}">${v(a.name)} (${a.tasks.length} Görev)</option>`).join(""),G("applyTemplateModal")}async function Tr(){const e=document.getElementById("atmSelect").value;if(!e)return;M(!0);const{data:t,error:n}=await y.from("program_templates").select("*").eq("id",e).single();if(n||!t)return M(!1),x("Şablon yüklenemedi.");const a=l.students.find(s=>s.id===l.activeStuId),i=(a==null?void 0:a.weekStart)??0,o=ne(l.weekOffset,i);for(const s of t.tasks){const r=O(J(o,s.day_index)),d={student_id:l.activeStuId,coach_id:b.coachId,date:r,type:s.type,exam_type:s.exam_type,subject:s.subject,duration:s.duration,note:s.note,done:!1,task_items:s.task_items},{data:c,error:p}=await y.from("tasks").insert(d).select().single();if(!p&&c){const m=`${l.activeStuId}_${r}`;l.tasks[m]||(l.tasks[m]=[]),l.tasks[m].push({_id:c.id,type:c.type,exam:c.exam_type,subject:c.subject,duration:c.duration,note:c.note,done:!1,student_note:"",task_items:c.task_items})}}M(!1),q("applyTemplateModal"),X(),x("Şablon başarıyla uygulandı ✓")}function Sr(e,t){var o;const a=`${l.activeStuId}_${e}`,i=(o=l.tasks[a])==null?void 0:o[t];i&&(_clipboardTask={type:i.type,exam:i.exam,subject:i.subject,duration:i.duration,note:i.note,task_items:i.task_items},x("Görev panoya kopyalandı ✓"),X())}async function Ir(e){if(!_clipboardTask)return;const t={student_id:l.activeStuId,coach_id:b.coachId,date:e,type:_clipboardTask.type,exam_type:_clipboardTask.exam||null,subject:_clipboardTask.subject,duration:_clipboardTask.duration,note:_clipboardTask.note,done:!1,task_items:_clipboardTask.task_items};M(!0);const{data:n,error:a}=await y.from("tasks").insert(t).select().single();if(M(!1),a)return x("Hata: "+a.message);const i=`${l.activeStuId}_${e}`;l.tasks[i]||(l.tasks[i]=[]),l.tasks[i].push({_id:n.id,type:n.type,exam:n.exam_type,subject:n.subject,duration:n.duration,note:n.note,done:!1,student_note:"",task_items:n.task_items}),X(),x("Görev yapıştırıldı ✓")}async function zr(e,t){var p;const n=`${l.activeStuId}_${e}`,a=(p=l.tasks[n])==null?void 0:p[t];if(!a)return;const i=l.students.find(m=>m.id===l.activeStuId),o=(i==null?void 0:i.weekStart)??0,s=ne(l.weekOffset,o),r=[];for(let m=0;m<7;m++){const u=J(s,m),g=O(u);g!==e&&r.push({student_id:l.activeStuId,coach_id:b.coachId,date:g,type:a.type,exam_type:a.exam||null,subject:a.subject,duration:a.duration,note:a.note,done:!1,task_items:a.task_items})}if(r.length===0)return;M(!0);const{data:d,error:c}=await y.from("tasks").insert(r).select();if(M(!1),c)return x("Hata: "+c.message);(d||[]).forEach(m=>{const u=`${l.activeStuId}_${m.date}`;l.tasks[u]||(l.tasks[u]=[]),l.tasks[u].push({_id:m.id,type:m.type,exam:m.exam_type,subject:m.subject,duration:m.duration,note:m.note,done:!1,student_note:"",task_items:m.task_items})}),X(),x("Görev tüm haftaya kopyalandı ✓")}async function Br(){if(!_clipboardTask)return;const e=l.students.find(s=>s.id===l.activeStuId),t=(e==null?void 0:e.weekStart)??0,n=ne(l.weekOffset,t),a=[];for(let s=0;s<7;s++){const r=J(n,s),d=O(r);a.push({student_id:l.activeStuId,coach_id:b.coachId,date:d,type:_clipboardTask.type,exam_type:_clipboardTask.exam||null,subject:_clipboardTask.subject,duration:_clipboardTask.duration,note:_clipboardTask.note,done:!1,task_items:_clipboardTask.task_items})}M(!0);const{data:i,error:o}=await y.from("tasks").insert(a).select();if(M(!1),o)return x("Hata: "+o.message);(i||[]).forEach(s=>{const r=`${l.activeStuId}_${s.date}`;l.tasks[r]||(l.tasks[r]=[]),l.tasks[r].push({_id:s.id,type:s.type,exam:s.exam_type,subject:s.subject,duration:s.duration,note:s.note,done:!1,student_note:"",task_items:s.task_items})}),_clipboardTask=null,X(),x("Görev tüm haftaya yapıştırıldı ✓")}Ma();on();window.addEventListener("hashchange",()=>{let e=window.location.hash.substring(1);if(document.getElementById("appShell").classList.contains("visible")&&e!==currentTab){if(!e){e={coach:"home",student:"portal",developer:"home",parent:"parent-home"}[b.role]||"portal",window.location.hash=e;return}document.getElementById("view-"+e)&&se(e,!1)}});async function xn(){const e=document.getElementById("view-coach-applications");if(!e)return;e.innerHTML=`<div style="padding:24px;max-width:800px;margin:0 auto">
    <div style="font-family:'Inter',sans-serif;font-size:22px;font-weight:800;margin-bottom:4px">Eşleşme Başvuruları</div>
    <div style="font-size:13px;color:var(--text-mid);margin-bottom:20px">koc-bul sayfasından gelen öğrenci başvuruları</div>
    <div id="appsList" style="display:flex;flex-direction:column;gap:10px">
      <div style="text-align:center;padding:32px;color:var(--text-dim)">Yükleniyor...</div>
    </div>
  </div>`;const{data:t,error:n}=await y.from("match_requests").select("*").eq("matched_coach_id",b.coachId).order("created_at",{ascending:!1}),a=document.getElementById("appsList");if(n||!t){a.innerHTML=`<div style="padding:20px;color:var(--red);background:var(--red-dim);border-radius:10px">Başvurular yüklenemedi: ${(n==null?void 0:n.message)||"Bilinmeyen hata"}</div>`;return}if(t.length===0){a.innerHTML=`<div style="text-align:center;padding:40px;color:var(--text-dim)">
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
    </div>`).join("");const s=t.filter(d=>d.status==="pending").length,r=document.getElementById("sbi_coach-applications");if(r){const d=r.querySelector(".sb-badge");if(d&&d.remove(),s>0){const c=document.createElement("span");c.className="sb-badge",c.textContent=s,r.appendChild(c)}}}async function Mr(e,t,n,a){var o;const{error:i}=await y.from("match_requests").update({status:t}).eq("id",e);if(i)return x("Hata: "+i.message);x(t==="accepted"?"✓ Başvuru kabul edildi":"Başvuru reddedildi"),n&&fetch("/api/mailer",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({type:"application_update",to:n,student_name:a||"",status:t,coach_name:((o=l.workspace)==null?void 0:o.brand_name)||"Koçunuz"})}).catch(s=>console.warn("[updateApplication] mail error:",s.message)),xn()}let Ne=null;async function Ka(){var a;const e=document.getElementById("view-coach-notes");if(!e)return;e.innerHTML=`<div style="padding:24px;max-width:860px;margin:0 auto">
    <div style="font-family:'Inter',sans-serif;font-size:22px;font-weight:800;margin-bottom:4px">Notlarım</div>
    <div style="font-size:13px;color:var(--text-mid);margin-bottom:20px">Kişisel notlar — sadece sen görürsün</div>
    <div style="display:flex;gap:10px;margin-bottom:18px">
      <button onclick="openNoteEditor(null)" style="padding:8px 18px;background:var(--accent);color:#fff;border:none;border-radius:8px;font-size:13px;font-weight:700;cursor:pointer">+ Yeni Not</button>
    </div>
    <div id="coachNotesList" style="display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:12px">
      <div style="grid-column:1/-1;text-align:center;padding:32px;color:var(--text-dim)">Yükleniyor...</div>
    </div>
  </div>`;const t=`coach_notes_${b.coachId}`,{data:n}=await y.from("platform_settings").select("value").eq("key",t).maybeSingle();Ne=((a=n==null?void 0:n.value)==null?void 0:a.notes)||[],bn()}function bn(){const e=document.getElementById("coachNotesList");if(!e)return;const t=Ne;if(!t.length){e.innerHTML=`<div style="grid-column:1/-1;text-align:center;padding:48px;color:var(--text-dim)">
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
    </div>`).join("")}function Dr(e){const t=e!==null?Ne[e]||{}:{};let n=document.getElementById("coachNoteModal");n||(n=document.createElement("div"),n.id="coachNoteModal",n.className="modal-bg",document.body.appendChild(n)),n.innerHTML=`<div class="modal" style="max-width:520px">
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
  </div>`,n.style.display="flex"}async function Ar(e){const t=document.getElementById("noteEditorTitle").value.trim(),n=document.getElementById("noteEditorBody").value.trim();if(!t&&!n)return x("Not boş olamaz");const a={title:t||"Başlıksız",body:n,updated:new Date().toISOString()};e===null?Ne.unshift(a):Ne[e]=a,await Oa(),document.getElementById("coachNoteModal").style.display="none",bn(),x("Not kaydedildi ✓")}async function Cr(e){await ie("Bu notu silmek istiyor musun?")&&(Ne.splice(e,1),await Oa(),bn(),x("Not silindi"))}async function Oa(){const e=`coach_notes_${b.coachId}`;await y.from("platform_settings").upsert({key:e,value:{notes:Ne}},{onConflict:"key"})}function At(){if(b.role!=="student")return;const e=(l.messages[b.studentId]||[]).filter(t=>t.from==="coach"&&!t.read).length;["sbi_smessages","mntab_smessages"].forEach(t=>{const n=document.getElementById(t);if(!n)return;n.style.position="relative";const a=n.querySelector(".msg-nav-badge");if(a&&a.remove(),e>0){const i=document.createElement("span");i.className="msg-nav-badge",i.style.cssText="position:absolute;top:3px;right:3px;background:#ef4444;color:#fff;border-radius:100px;min-width:14px;height:14px;font-size:9px;font-weight:800;display:flex;align-items:center;justify-content:center;padding:0 3px;pointer-events:none;line-height:1",i.textContent=e>9?"9+":e,n.appendChild(i)}})}window.updateMsgBadge=At;window.toggleSidebar=vi;window.setupShell=yi;window.switchTab=se;window.renderHome=Gn;window.renderCoachApplications=xn;window.updateApplication=Mr;window.renderCoachNotes=Ka;window.openNoteEditor=Dr;window.toggleNewResourceMode=Yi;window.addManualTest=Ki;window.removeManualTest=Oi;window.saveCoachNote=Ar;window.deleteCoachNote=Cr;window.renderStudentsSearch=dt;window.filterStudentSearch=xi;window.openStudentDetail=qn;window.openKonuHaritasi=ki;window.openStudentProgram=Xt;window.openStudentExams=wi;window.openStudentAppointments=$i;window.renderProfile=Zn;window.saveProfile=zi;window.renderSettings=Jn;window.saveGeminiKey=Bi;window.renderProgram=X;window.selectStu=Mi;window.chWeek=Di;window.goToday=Ai;window.openClearWeekModal=Li;window.toggleDaySel=ji;window.toggleAllDays=Pi;window.confirmClearDays=Ri;window.openTaskModal=ea;window.loadResources=ta;window.updateSubjectList=_t;window.updateBookList=Fi;window.renderBookList=Tt;window.filterBooks=Ui;window.selectBook=Gi;window.renderTestList=St;window.selectAllTests=qi;window.clearAllTests=Wi;window.updateTestSummary=We;window.selectModalSpeed=Vi;window.applyDuration=Zi;window.scheduleSmartBadge=It;window.applySmartDuration=Xi;window.loadStudentSpeeds=na;window.saveStudentSpeed=aa;window.saveTask=Qi;window.toggleTask=eo;window.closeTaskMenu=en;window.showTaskMenu=to;window.copyTask=no;window.deleteTask=ao;window.renderTodoList=ra;window.renderStudents=da;window.goProgram=vo;window.openStudentModal=fo;window.saveStudent=yo;window.showInviteInfo=ca;window.deleteStu=bo;window.renderAppointments=Ve;window.renderCalDays=zt;window.selCalDay=ko;window.chCalMonth=wo;window.renderApptList=tn;window.openApptModal=$o;window.saveAppt=Eo;window.deleteAppt=So;window.renderExams=Ze;window.openCommentModal=Ao;window.saveComment=Co;window.deleteExam=Lo;window.renderMessages=fa;window.selectThread=jo;window.renderThreadHTML=Se;window.sendMsg=Po;window.scrollMsgs=Ie;window.renderPortal=Bt;window.stuToggleTask=Ro;window.renderSPortal=ze;window.stuToggleTask2=No;window.chWeekS=Yo;window.openTaskDetail=nn;window.toggleTaskDetail=Fo;window.toggleDetailItem=Uo;window.selectVideoSpeed=Go;window.saveTaskDetail=qo;window.renderSExams=an;window.openStudentExamModal=ya;window.openExamModal=Wo;window.renderNetInputs=on;window.saveExam=Jo;window.renderSMessages=Ot;window.initRealtime=sn;window.destroyRealtime=rn;window.renderDevDashboard=ba;window.renderDevUsers=Je;window.openDevUserModal=es;window.devDeleteUser=ts;window.openPlanModal=ns;window.savePlan=as;window.renderDevResources=ct;window.openPlaylistModal=is;window.fetchYouTubePlaylist=os;window.savePlaylist=ss;window.openResourceModal=rs;window.saveResource=ls;window.devDeleteResource=ds;window.renderDevFinance=pt;window.openPaymentModal=ps;window.verifyPayment=cs;window.setDevUserFilter=Qo;window.savePayment=ms;window.openSubModal=us;window.saveSub=gs;window.renderDevAnnounce=mt;window.openAnnounceModal=vs;window.saveAnnounce=fs;window.toggleAnnounce=ys;window.devDeleteAnnounce=xs;window.renderDevTickets=Xe;window.updateTicketStatus=$s;window.devDeleteTicket=Es;window.selectDevTicket=bs;window.sendDevReply=ws;window.openSupportTicket=_s;window.openSupportChat=Mt;window.closeSupportChat=ha;window.startAISupportChat=Ts;window.startEminSupportChat=Ss;window.submitEminInitialMessage=Is;window.sendSupportMessage=zs;window.openSupportChatDirect=Mt;window.checkCoachSubscription=Jt;window.showTrialExpiredScreen=xt;window.loadAnnouncements=ka;window.saveStudentDev=mr;window.showOnboarding=Ea;window.showOnboardingWidget=Ds;window.showStudentWelcome=As;window.renderSProfil=Ta;window.saveStudentProfile=Cs;window.changePassword=Ls;window.renderCoachProfile=Sa;window.updateProfilePreview=Ye;window.switchPreviewTab=Ks;window.toggleCoachTag=Ps;window.addCustomCoachTag=Rs;window.uploadCoachPhoto=Ns;window.onCoachSlugInput=Hs;window.generateCoachBio=Ys;window.nl2br=Ia;window.saveCoachProfile=Os;window.renderDevMatches=pn;window.updateMatchRequestStatus=Fs;window.openSpeedModal=Us;window.saveAllSpeeds=Gs;window.openStudentNotes=qs;window.saveStudentNote=Ws;window.openReportModal=Vs;window.getReportDates=mn;window.buildReportHTML=un;window.previewReport=Zs;window.generatePDF=Js;window.openWeeklyPDFModal=Qs;window.generateWeeklyPDF=er;window.printWeeklyProgramWithNote=za;window.openInviteCodeModal=tr;window.copyInviteCode=nr;window.copyInviteLink=ar;window.copyToClipboard=gn;window.loadTheme=Ma;window.applyAccent=Da;window.setTheme=ir;window.openThemePanel=or;window.initAIChatForRole=Aa;window.toggleAIChat=sr;window.aiQuickSend=rr;window.buildAIContext=Ut;window.addAIMessage=be;window.sendAIMessage=Ca;window.autoDetectModel=La;window.callGeminiFallback=Te;window.generateAICopilotDraft=lr;window.checkCopilotDraftEdited=cr;window.shareCopilotWhatsApp=dr;window.assignResourceAsTask=ur;window.confirmAssignResource=gr;window.sendCopilotDraft=pr;window.renderParentHome=ja;window.renderParentProgress=Pa;window.renderParentAI=Ra;window.applyResFilter=yn;window.updateCRFilter=vr;window.buildCRContent=Dt;window.renderCoachResources=ut;window.switchCRTab=fr;window.compileResourceStats=Ha;window.openResourceModalCoach=yr;window.fetchYtPlaylistCoach=xr;window.saveResourceCoach=br;window.deleteResourceCoach=hr;window.importResourcesFromExcel=kr;window.importStudentsFromExcel=wr;window.getTestStatus=Ya;window.openCoachTaskEdit=$r;window.saveWeekAsTemplate=Er;window.applyTemplateToWeek=_r;window.downloadICS=Io;window.confirmApplyTemplate=Tr;window.copyTaskToClipboard=Sr;window.pasteTaskFromClipboard=Ir;window.copyTaskToWholeWeek=zr;window.pasteTaskToWholeWeek=Br;window.sendWhatsAppReport=Xs;window.toggleUserMenu=fi;window.closeUserMenu=Un;window.renderAgenda=$e;window.openAgendaApptModal=la;window.deleteAgendaAppt=go;window.agendaPrev=ro;window.agendaNext=lo;window.agendaToday=co;window.agendaSetFilter=po;window.exportAgendaICS=mo;window.openApptPopup=sa;window.handleApptDrop=uo;window.openStudentKaynaklar=Ei;window.addStudentBook=_i;window.editStudentBook=Ti;window.sbUpdatePct=Vn;window.saveStudentBook=Si;window.deleteStudentBook=Ii;async function Lr(){const e=document.getElementById("rpStuId").value,t=l.students.find(m=>m.id===e);if(!t)return;const n=document.getElementById("rpPeriod").value,{start:a,end:i}=mn(),o=document.getElementById("rpNote").value.trim();let s="Performans Raporu";n==="weekly"?s="Haftalık Performans Raporu":n==="monthly"?s="Aylık Performans Raporu":s="Özel Dönem Performans Raporu";const r=`${s} (${a} - ${i})`,d=o||"Değerlendirme notu eklenmedi.";M(!0);const c=b.coachId||t.coachId,{error:p}=await y.from("reports").insert({student_id:e,coach_id:c,type:"performance",title:r,content:d,start_date:a,end_date:i});M(!1),p?x("Rapor kaydedilirken hata oluştu: "+p.message):(x("Rapor başarıyla geçmişe kaydedildi! ✓"),q("reportModal"))}async function Fa(e){const t=l.students.find(s=>s.id===e);if(!t)return;l.activeStuId=e,currentTab!=="student-detail"&&se("student-detail");const n=document.getElementById("view-student-detail");n.innerHTML=`<button class="back-link" onclick="openStudentDetail('${e}')">← ${v(t.name)}</button>
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
    </div>`,n.innerHTML=o;return}o+='<div style="display:flex;flex-direction:column;gap:12px">',a.forEach(s=>{const r=s.type==="ai_copilot"?"🧠":"📄",d=s.type==="ai_copilot"?"AI Copilot Değerlendirmesi":"Performans Raporu",c=new Date(s.created_at).toLocaleDateString("tr-TR",{day:"numeric",month:"long",year:"numeric",hour:"2-digit",minute:"2-digit"});o+=`
      <div style="background:var(--surface);border:1px solid var(--border);border-radius:12px;padding:16px 20px;display:flex;justify-content:space-between;align-items:center;gap:12px;box-shadow:var(--shadow)">
        <div style="min-width:0;flex:1">
          <div style="display:flex;align-items:center;gap:8px;margin-bottom:6px">
            <span style="font-size:16px">${r}</span>
            <span style="font-size:11px;font-weight:800;text-transform:uppercase;color:var(--text-dim);letter-spacing:.5px">${d}</span>
          </div>
          <h4 style="font-size:14px;font-weight:700;color:var(--text);margin-bottom:4px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${v(s.title)}</h4>
          <div style="font-size:11px;color:var(--text-dim)">Oluşturulma: ${c}</div>
        </div>
        <div style="display:flex;gap:8px">
          <button class="btn btn-ghost btn-sm" onclick="viewArchivedReport('${s.id}')">Görüntüle</button>
          ${b.role==="coach"||b.role==="developer"?`<button class="btn btn-danger btn-sm" style="background:#ef4444;border-color:#ef4444;color:#fff" onclick="deleteArchivedReport('${s.id}', '${e}')">Sil</button>`:""}
        </div>
      </div>
    `}),o+="</div></div>",n.innerHTML=o}async function jr(e){M(!0);const{data:t,error:n}=await y.from("reports").select("*").eq("id",e).single();if(M(!1),n||!t)return x("Rapor yüklenemedi: "+((n==null?void 0:n.message)||"Bulunamadı"));let a=document.getElementById("viewReportDetailModal");a||(a=document.createElement("div"),a.id="viewReportDetailModal",a.className="modal-bg",document.body.appendChild(a),a.addEventListener("click",s=>{s.target===a&&a.classList.remove("open")}));const i=t.type==="ai_copilot"?"🧠":"📄",o=new Date(t.created_at).toLocaleDateString("tr-TR",{day:"numeric",month:"long",year:"numeric",hour:"2-digit",minute:"2-digit"});a.innerHTML=`
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
  `,G("viewReportDetailModal")}function Pr(){const e=document.getElementById("viewReportDetailModal");if(!e)return;const t=e.querySelector("h3").textContent,n=e.querySelector("div div").textContent,a=e.querySelector('div[style*="pre-wrap"]').textContent,i=window.open("","_blank");i.document.write(`
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
  `),i.document.close()}async function Rr(e,t){if(!await ie("Bu raporu kalıcı olarak silmek istediğinize emin misiniz?"))return;M(!0);const{error:a}=await y.from("reports").delete().eq("id",e);M(!1),a?x("Rapor silinirken hata oluştu: "+a.message):(x("Rapor başarıyla silindi ✓"),Fa(t))}window.archivePerformanceReport=Lr;window.openPastReports=Fa;window.viewArchivedReport=jr;window.printActiveReport=Pr;window.deleteArchivedReport=Rr;async function Nr(e){var t,n;e&&(e.disabled=!0,e.textContent="Sıfırlanıyor...");try{const a=(n=(t=window.S)==null?void 0:t.currentUser)==null?void 0:n.id;if(!a)throw new Error("Oturum bulunamadı.");const{data:i}=await y.from("users").select("id").eq("coach_id",a),o=(i||[]).map(m=>m.id);o.length>0&&(await y.from("tasks").delete().in("student_id",o),await y.from("exams").delete().in("student_id",o),await y.from("appointments").delete().in("student_id",o),await y.from("messages").delete().in("student_id",o),await y.from("student_profiles").delete().in("id",o),await y.from("users").delete().in("id",o));const s=[{id:"demo-stu-1",full_name:"Ahmet Yılmaz",username:"ahmetyilmaz",role:"student",exam_profile:"YKS",yks_area:"SAY",coach_id:a,email:"ahmet@demokoc.com",active:!0},{id:"demo-stu-2",full_name:"Zeynep Kaya",username:"zeynepkaya",role:"student",exam_profile:"YKS",yks_area:"EA",coach_id:a,email:"zeynep@demokoc.com",active:!0},{id:"demo-stu-3",full_name:"Elif Demir",username:"elifdemir",role:"student",exam_profile:"YKS",yks_area:"SÖZ",coach_id:a,email:"elif@demokoc.com",active:!0}];for(const m of s)await y.from("users").upsert(m),await y.from("student_profiles").upsert({id:m.id,parent_email:"veli@demo.com",target:"Boğaziçi Üniversitesi"});const r=new Date,d=[],c={"demo-stu-1":["Matematik","Fizik","Kimya"],"demo-stu-2":["Matematik","Edebiyat","Tarih"],"demo-stu-3":["Edebiyat","Tarih","Coğrafya"]};for(const m of s){const u=c[m.id];for(let g=-3;g<=3;g++){const _=new Date(r);_.setDate(r.getDate()+g);const T=_.toISOString().split("T")[0];d.push({student_id:m.id,date:T,subject:u[0],topic:"Konu Anlatımı & Tekrar",duration:120,done:g<0}),d.push({student_id:m.id,date:T,subject:u[1],topic:"Soru Bankası Çözümü (120 Soru)",duration:90,done:g<=0})}}await y.from("tasks").insert(d);const p=[];for(const m of s)p.push({student_id:m.id,date:new Date(r.getTime()-15*24*3600*1e3).toISOString().split("T")[0],type:"TYT",title:"Özdebir Türkiye Geneli",net_tr:32,net_sos:15,net_mat:28,net_fen:12,net_total:87}),p.push({student_id:m.id,date:new Date(r.getTime()-5*24*3600*1e3).toISOString().split("T")[0],type:"TYT",title:"3D Simülasyon Denemesi",net_tr:34,net_sos:16,net_mat:31,net_fen:14,net_total:95});await y.from("exams").insert(p),x("Demo verileri sıfırlandı ve tertemiz mock veri setleri yüklendi ✓"),setTimeout(()=>location.reload(),800)}catch(a){console.error("Demo reset error:",a),x("Sıfırlama sırasında hata oluştu: "+a.message)}finally{e&&(e.disabled=!1,e.textContent="Verileri Sıfırla ⟳")}}window.resetDemoData=Nr;setTimeout(()=>{if(new URLSearchParams(window.location.search).get("sandbox")==="true"||window.S&&window.S.currentUser&&window.S.currentUser.username==="demokoc"){let n=document.getElementById("demoSandboxBanner");n||(n=document.createElement("div"),n.id="demoSandboxBanner",n.style.cssText="position:fixed;bottom:20px;right:20px;background:rgba(26,25,22,0.95);color:var(--text);padding:14px 20px;border-radius:14px;box-shadow:0 12px 36px rgba(0,0,0,0.6);z-index:99999;font-size:13px;font-weight:700;display:flex;align-items:center;gap:14px;border:1px solid var(--acc);backdrop-filter:blur(10px);",n.innerHTML=`
        <span style="display:flex;align-items:center;gap:6px;"><span style="color:var(--acc)">⚡</span> Canlı Demo Modu</span>
        <button onclick="resetDemoData(this)" style="background:var(--acc);color:#fff;border:none;padding:6px 14px;border-radius:8px;font-size:11.5px;font-weight:800;cursor:pointer;transition:all 0.2s;box-shadow:0 4px 10px rgba(255,122,92,0.25);">Verileri Sıfırla ⟳</button>
      `,document.body.appendChild(n))}},2e3);window.copyStudentInviteLink=xo;window.loadTheme&&window.loadTheme();window.renderNetInputs&&window.renderNetInputs();window.checkOAuthSession&&window.checkOAuthSession();const Ua=new URLSearchParams(window.location.search);if(Ua.get("sandbox")==="true")window.simOAuthLogin&&setTimeout(()=>{console.log("Sandbox auto-login triggered for demokoc..."),window.simOAuthLogin("demokoc")},300);else if(window.location.search.includes("sandbox")||window.location.hash==="#sandbox"){const e=document.getElementById("demoQuickWrap");e&&(e.style.display="flex"),window.showGoogleSimulator&&setTimeout(()=>window.showGoogleSimulator(),300)}const Bn=Ua.get("davet");Bn&&window.applyInviteFromUrl&&setTimeout(()=>window.applyInviteFromUrl(Bn),200);"serviceWorker"in navigator&&window.addEventListener("load",()=>{navigator.serviceWorker.register("/sw.js").then(e=>{console.log("Service Worker başarıyla kaydedildi ✓",e.scope)}).catch(e=>{console.warn("Service Worker kaydı başarısız oldu:",e)})});window.addEventListener("hashchange",()=>{let e=window.location.hash.substring(1);if(document.getElementById("appShell").classList.contains("visible")&&e!==window.currentTab){if(!e){e={coach:"home",student:"portal",developer:"home",parent:"parent-home"}[window.session.role]||"portal",window.location.hash=e;return}document.getElementById("view-"+e)&&window.switchTab(e,!1)}});console.log("Rostrum Akademi App initialized successfully ✓");
