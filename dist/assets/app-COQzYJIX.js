(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))a(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();const l={students:[],tasks:{},appointments:[],exams:[],messages:{},coachTodos:{},weekOffset:0,calMonth:new Date().getMonth(),calYear:new Date().getFullYear(),calSelDay:null,activeStuId:null,msgThread:null,workspace:null,studentSpeeds:[],konuHaftaSoru:[]},y={role:null,studentId:null,dbUser:null,coachId:null,childName:null};window.S=l;window.session=y;window._loginMode="email";window.STU_DEFAULT_PASS="Rostrum"+Math.floor(1e3+Math.random()*9e3);window.DAYS_TR=["Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi","Pazar"];window.MONTHS_TR=["Ocak","Şubat","Mart","Nisan","Mayıs","Haziran","Temmuz","Ağustos","Eylül","Ekim","Kasım","Aralık"];window.EXAM_DEFS={TYT:["Türkçe","Matematik","Fen","Sosyal"],"AYT-SAY":["Matematik","Fizik","Kimya","Biyoloji"],"AYT-EA":["Matematik","Edebiyat","Tarih","Coğrafya"],"AYT-SOZ":["Edebiyat","Tarih1","Tarih2","Coğrafya1","Coğrafya2","Felsefe","Din"]};window.EXAM_SORU={TYT:{Türkçe:40,Matematik:40,Fen:20,Sosyal:20},"AYT-SAY":{Matematik:40,Fizik:14,Kimya:13,Biyoloji:13},"AYT-EA":{Matematik:40,Edebiyat:24,Tarih:10,Coğrafya:6},"AYT-SOZ":{Edebiyat:24,Tarih1:10,Tarih2:11,Coğrafya1:6,Coğrafya2:11,Felsefe:12,Din:6}};window.EXAM_KONU_MAP={TYT_Türkçe:["Dil Bilgisi"],TYT_Matematik:["TYT Matematik","Geometri"],TYT_Fen:["TYT Fizik","TYT Kimya","TYT Biyoloji"],TYT_Sosyal:[],"AYT-SAY_Matematik":["AYT Matematik","Geometri"],"AYT-SAY_Fizik":["AYT Fizik"],"AYT-SAY_Kimya":["AYT Kimya"],"AYT-SAY_Biyoloji":["AYT Biyoloji"],"AYT-EA_Matematik":["AYT Matematik","Geometri"],"AYT-EA_Edebiyat":["Dil Bilgisi"]};window.SUBJECT_MAP={TYT:["Türkçe","Matematik","Geometri","Fizik","Kimya","Biyoloji","Tarih","Coğrafya","Felsefe","Din"],"AYT-SAY":["Matematik","Geometri","Fizik","Kimya","Biyoloji"],"AYT-EA":["Matematik","Geometri","Edebiyat","Tarih","Coğrafya","Felsefe"],"AYT-SOZ":["Edebiyat","Tarih1","Tarih2","Coğrafya1","Coğrafya2","Felsefe","Din"]};window.currentTab="";window._clipboardTask=null;window._editingTaskId=null;window._regRole=null;window._onbRole=null;window._oauthUser=null;const ha="https://imyhenrwmsmyikpollur.supabase.co",ka="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlteWhlbnJ3bXNteWlrcG9sbHVyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODAxNDE3ODYsImV4cCI6MjA5NTcxNzc4Nn0._ySJ5ArD1GYthyitHjdyEjLaUhextIwEqpRoF5ScI34",b=supabase.createClient(ha,ka);window.db=b;function be(){var e;try{localStorage.setItem("ba_ui_"+(((e=y.dbUser)==null?void 0:e.id)||"x"),JSON.stringify({weekOffset:l.weekOffset,activeStuId:l.activeStuId,calMonth:l.calMonth,calYear:l.calYear}))}catch{}}function Xe(){be()}function A(e,t){let n=document.getElementById("loadingOverlay");if(document.querySelectorAll(".btn-login, .btn-accent, .btn").forEach(i=>{e?(i.setAttribute("disabled","true"),i.style.opacity="0.6",i.style.pointerEvents="none"):(i.removeAttribute("disabled"),i.style.opacity="",i.style.pointerEvents="")}),e&&!n){n=document.createElement("div"),n.id="loadingOverlay",n.style.cssText="position:fixed;inset:0;background:rgba(15,14,12,.82);z-index:9999;display:flex;align-items:center;justify-content:center;flex-direction:column;gap:14px;backdrop-filter:blur(6px)";const i=t||"Yükleniyor...",o=t?'<div style="font-size:36px;animation:overlayPop .3s cubic-bezier(.34,1.56,.64,1) both">🗑️</div>':'<div style="width:38px;height:38px;border:3px solid rgba(255,255,255,.12);border-top-color:var(--accent);border-radius:50%;animation:spin .7s linear infinite"></div>';if(n.innerHTML=`${o}<div style="font-size:14px;font-weight:600;color:#fff;letter-spacing:.2px">${i}</div>`,!document.getElementById("spinStyle")){const s=document.createElement("style");s.id="spinStyle",s.textContent="@keyframes spin{to{transform:rotate(360deg)}}@keyframes overlayPop{from{transform:scale(.6);opacity:0}to{transform:scale(1);opacity:1}}",document.head.appendChild(s)}document.body.appendChild(n)}else!e&&n&&n.remove()}function g(e){return String(e||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function F(e){return e instanceof Date?e.toISOString().split("T")[0]:e}function J(e,t){const n=new Date(e);return n.setDate(n.getDate()+t),n}function me(){return F(new Date)}function Ct(e){return e>=20?"good":e>=12?"mid":"low"}function Qe(e){return{deneme:"📊 Deneme",soru:"📚 Soru",konu:"🎯 Konu",diger:"⭐ Diğer"}[e]||e}function G(e){document.getElementById(e).classList.add("open")}function U(e){document.getElementById(e).classList.remove("open")}function h(e){const t=document.getElementById("toast");t.textContent=e,t.classList.add("show"),setTimeout(()=>t.classList.remove("show"),2300)}document.addEventListener("click",e=>{e.target.classList.contains("modal-bg")&&e.target.id!=="trialExpiredModal"&&e.target.classList.remove("open")});document.addEventListener("keydown",e=>{e.key==="Escape"&&document.querySelectorAll(".modal-bg.open").forEach(t=>{t.id!=="trialExpiredModal"&&t.classList.remove("open")})});function te(e,t=0){const n=new Date,a=n.getDay(),o=(a===0?6:a-1)-t,s=new Date(n);return s.setDate(n.getDate()-(o+7)%7+e*7),s.setHours(0,0,0,0),s}function wa(){const e=l.students.find(t=>t.id===l.activeStuId);return(e==null?void 0:e.weekStart)??0}async function Le(e){const t=await crypto.subtle.digest("SHA-256",new TextEncoder().encode(e));return[...new Uint8Array(t)].map(n=>n.toString(16).padStart(2,"0")).join("")}function Ae(e){return e?e.trim().toLowerCase().replace(/ç/g,"c").replace(/ğ/g,"g").replace(/ı/g,"i").replace(/ö/g,"o").replace(/ş/g,"s").replace(/ü/g,"u").replace(/i̇/g,"i").replace(/ı/g,"i").replace(/i/g,"i").replace(/\s+/g,"").replace(/\u0307/g,""):""}function $a(){if(!("Notification"in window)){console.log("Bu tarayıcı anlık bildirimleri desteklemiyor.");return}Notification.permission!=="granted"&&Notification.permission!=="denied"?Notification.requestPermission().then(e=>{e==="granted"&&h("Bildirim izinleri onaylandı ✓")}):Notification.permission==="granted"?h("Bildirim izinleri zaten açık ✓"):h("Bildirim izinleri tarayıcı ayarlarından engellenmiş.")}window.saveUI=be;window.saveS=Xe;window.showLoading=A;window.esc=g;window.fmtDate=F;window.addDays=J;window.todayStr=me;window.netColor=Ct;window.typeLabel=Qe;window.om=G;window.cm=U;window.showToast=h;window.getWeekStart=te;window.getStudentWeekStart=wa;window.sha256=Le;window.normalizeUsername=Ae;window.requestNotificationPermission=$a;async function Ta(e,t={}){let n=b.from(e).select("*");Object.entries(t).forEach(([o,s])=>{n=n.eq(o,s)});const{data:a,error:i}=await n;return i&&console.error(e,i),a||[]}const Ea=4*60*1e3;function Lt(){return"ra_d_"+(y.coachId||y.studentId||"x")}function mn(){try{localStorage.removeItem(Lt())}catch{}}function rn(){try{localStorage.setItem(Lt(),JSON.stringify({ts:Date.now(),students:l.students,tasks:l.tasks,appointments:l.appointments,exams:l.exams,messages:l.messages,coachTodos:l.coachTodos,studentSpeeds:l.studentSpeeds,workspace:l.workspace,konuHaftaSoru:l.konuHaftaSoru}))}catch{}}function _a(){try{const e=localStorage.getItem(Lt());if(!e)return!1;const t=JSON.parse(e);return!t.ts||Date.now()-t.ts>Ea?!1:(t.students&&(l.students=t.students),t.tasks&&(l.tasks=t.tasks),t.appointments&&(l.appointments=t.appointments),t.exams&&(l.exams=t.exams),t.messages&&(l.messages=t.messages),t.coachTodos&&(l.coachTodos=t.coachTodos),t.studentSpeeds&&(l.studentSpeeds=t.studentSpeeds),t.workspace&&(l.workspace=t.workspace),t.konuHaftaSoru&&(l.konuHaftaSoru=t.konuHaftaSoru),!0)}catch{return!1}}async function ln(){var L;const e=y.coachId,t=y.role,n=t==="coach"||t==="developer"?b.from("workspaces").select("*").eq("coach_id",e).single():Promise.resolve({data:null});let a=b.from("users").select("*").eq("role","student");t==="student"?a=a.eq("id",y.studentId):(t==="coach"||t==="developer")&&(a=a.eq("coach_id",e));const i=a,o=new Date;o.setDate(o.getDate()-60);const s=o.toISOString().split("T")[0],r=new Date;r.setDate(r.getDate()-30);const d=r.toISOString().split("T")[0],c=t==="student"?b.from("tasks").select("*").eq("student_id",y.studentId).gte("date",s):t==="coach"||t==="developer"?b.from("tasks").select("*").eq("coach_id",e).gte("date",s):b.from("tasks").select("*").gte("date",s),p=t==="student"?b.from("appointments").select("*").eq("student_id",y.studentId).gte("date",d):t==="coach"||t==="developer"?b.from("appointments").select("*").eq("coach_id",e).gte("date",d):b.from("appointments").select("*").gte("date",d),m=t==="student"?b.from("exams").select("*").eq("student_id",y.studentId):t==="coach"||t==="developer"?b.from("exams").select("*").eq("coach_id",e):b.from("exams").select("*"),u=t==="student"?b.from("messages").select("*").eq("student_id",y.studentId).order("created_at",{ascending:!1}).limit(200):t==="coach"||t==="developer"?b.from("messages").select("*").eq("coach_id",e).order("created_at",{ascending:!1}).limit(200):b.from("messages").select("*").order("created_at",{ascending:!1}).limit(200),v=t==="coach"||t==="developer"?b.from("coach_todos").select("*").eq("coach_id",e):Promise.resolve({data:[]}),S=t==="student"?b.from("student_speeds").select("*").eq("student_id",y.studentId):t==="coach"||t==="developer"?b.from("student_speeds").select("*").eq("coach_id",e):b.from("student_speeds").select("*"),E=t==="coach"||t==="developer"?b.from("konu_mastery").select("*").eq("coach_id",e):t==="student"?b.from("konu_mastery").select("*").eq("student_id",y.studentId):Promise.resolve({data:[]}),f=t==="coach"||t==="developer"?b.from("konu_tekrar_log").select("*").eq("coach_id",e):t==="student"?b.from("konu_tekrar_log").select("*").eq("student_id",y.studentId):Promise.resolve({data:[]}),[$,w,B,x,_,z,I,T,D,C]=await Promise.all([n,i,c,p,m,u,v,S,E,f]);(t==="coach"||t==="developer")&&(l.workspace=$.data||null),l.students=(w.data||[]).map(k=>({id:k.id,name:k.full_name||k.username||"Öğrenci",target:k.target||"",color:k.color||"#4da6ff",progress:k.progress||0,weekStart:k.week_start||0,username:k.username,coachId:k.coach_id,yksArea:k.yks_area||"SAY"})),l.tasks={},(B.data||[]).forEach(k=>{const M=`${k.student_id}_${k.date}`;l.tasks[M]||(l.tasks[M]=[]),l.tasks[M].push({_id:k.id,type:k.type,exam:k.exam_type,subject:k.subject,duration:k.duration,note:k.note,done:k.done,student_note:k.student_note||"",student_result:k.student_result||null,student_feedback:k.student_feedback||null,task_items:k.task_items,start_time:k.start_time})}),l.appointments=(x.data||[]).map(k=>({id:k.id,studentId:k.student_id,date:k.date,time:k.time,duration:k.duration,type:k.type,note:k.note,meetLink:k.meet_link,google_event_id:k.google_event_id||null})),l.exams=(_.data||[]).map(k=>({id:k.id,studentId:k.student_id,name:k.name,date:k.date,type:k.exam_type,nets:k.nets||{},examDetails:k.exam_details||{},note:k.student_note,coachComment:k.coach_comment})),l.messages={},(z.data||[]).forEach(k=>{l.messages[k.student_id]||(l.messages[k.student_id]=[]),l.messages[k.student_id].push({_id:k.id,from:k.from_role,text:k.text||"",image_url:k.image_url||null,read:k.read,time:new Date(k.created_at).toLocaleTimeString("tr-TR",{hour:"2-digit",minute:"2-digit"})})}),Object.keys(l.messages).forEach(k=>l.messages[k].sort((M,j)=>M._id>j._id?1:-1)),l.coachTodos={},(I.data||[]).forEach(k=>{l.coachTodos[k.date]||(l.coachTodos[k.date]=[]),l.coachTodos[k.date].push({_id:k.id,task:k.task,note:k.note,done:k.done})}),l.studentSpeeds=T.data||[],l.konuMastery={},(D.data||[]).forEach(k=>{l.konuMastery[k.student_id]||(l.konuMastery[k.student_id]={}),l.konuMastery[k.student_id][k.subject]||(l.konuMastery[k.student_id][k.subject]={}),l.konuMastery[k.student_id][k.subject][k.konu]=k}),l.konuTekrarLog={},(C.data||[]).forEach(k=>{l.konuTekrarLog[k.student_id]||(l.konuTekrarLog[k.student_id]={}),l.konuTekrarLog[k.student_id][k.subject]||(l.konuTekrarLog[k.student_id][k.subject]={}),l.konuTekrarLog[k.student_id][k.subject][k.konu]||(l.konuTekrarLog[k.student_id][k.subject][k.konu]={}),l.konuTekrarLog[k.student_id][k.subject][k.konu][k.period_start]=k});try{const k=JSON.parse(localStorage.getItem("ba_ui_"+((L=y.dbUser)==null?void 0:L.id))||"{}");k.weekOffset!==void 0&&(l.weekOffset=k.weekOffset),k.activeStuId&&(l.activeStuId=k.activeStuId),k.calMonth!==void 0&&(l.calMonth=k.calMonth,l.calYear=k.calYear)}catch{}}async function un(){if(_a()){ln().then(()=>{if(rn(),window.currentTab)try{window.switchTab(window.currentTab)}catch{}}).catch(t=>console.error("Arka plan yenileme hatası:",t));return}A(!0);try{await ln(),rn()}catch(t){console.error("loadAllData error",t)}A(!1)}window.dbQ=Ta;window.loadAllData=un;window.invalidateCache=mn;let Se=!1;function de(e){const t=document.getElementById("loginErr");t.textContent=e,t.style.display="block",setTimeout(()=>t.style.display="none",5e3)}function ot(e){const t=document.getElementById("regErr");t.textContent=e,t.style.display="block",setTimeout(()=>t.style.display="none",5e3)}function gn(e){document.getElementById("loginPanel").style.display=e==="login"?"block":"none",document.getElementById("registerPanel").style.display=e==="register"?"block":"none",document.getElementById("lmtLogin").classList.toggle("active",e==="login"),document.getElementById("lmtRegister").classList.toggle("active",e==="register")}function Sa(e){window._loginMode=e,document.querySelectorAll("#loginTabs .login-tab").forEach((t,n)=>t.classList.toggle("active",n===(e==="email"?0:1))),document.getElementById("loginEmailField").style.display=e==="email"?"block":"none",document.getElementById("loginUserField").style.display=e==="username"?"block":"none"}function Ia(e){window._regRole=e,document.getElementById("rrbCoach").classList.toggle("sel",e==="coach"),document.getElementById("rrbStudent").classList.toggle("sel",e==="student")}function za(e){window._onbRole=e,document.getElementById("onbRoleCoach").classList.toggle("sel",e==="coach"),document.getElementById("onbRoleStudent").classList.toggle("sel",e==="student")}async function Ba(){if(window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1"||window.location.protocol==="file:"){fn();return}await vn()}async function vn(){jt(),A(!0);try{const{error:e}=await b.auth.signInWithOAuth({provider:"google",options:{redirectTo:window.location.origin+"/app.html",queryParams:{access_type:"offline",prompt:"select_account"}}});e&&(A(!0),console.warn("Google Auth failed:",e),de("Google Girişi Başlatılamadı: "+e.message))}catch(e){A(!1),de("Google Girişi Başlatılamadı: "+e.message)}}function fn(){document.getElementById("googleSimulatorModal").style.display="flex"}function jt(){document.getElementById("googleSimulatorModal").style.display="none"}async function Ma(e){if(jt(),A(!0),e==="demokoc"){const{data:t,error:n}=await b.from("users").select("*").eq("username","demokoc").maybeSingle();if(n||!t){A(!1),de("Demo koç profili bulunamadı!");return}await De(t)}else if(e==="demoogrenci"){const{data:t,error:n}=await b.from("users").select("*").eq("username","demoogrenci").maybeSingle();if(n||!t){A(!1),de("Demo öğrenci profili bulunamadı!");return}await De(t)}else if(e==="new"){A(!1),document.getElementById("newUserOnboarding").style.display="flex";const t=Math.floor(1e3+Math.random()*9e3),n=`yeni.kullanici${t}@gmail.com`;document.getElementById("onbEmail").textContent=n,document.getElementById("onbName").value=`Yeni Kullanıcı ${t}`,window._oauthUser={id:`mock-google-id-${t}`,email:n,user_metadata:{full_name:`Yeni Kullanıcı ${t}`}}}}async function yn(){var t,n,a;if(window.location.hash.includes("type=recovery")){console.log("[Auth] Recovery session active, skipping checkOAuthSession");return}if(Se)return;Se=!0;let e=null;try{console.log("[Auth] 1/4 getSession...");const{data:{session:i}}=await b.auth.getSession();if(console.log("[Auth] 2/4 session:",((t=i==null?void 0:i.user)==null?void 0:t.email)||"yok"),!(i!=null&&i.user)){Se=!1;return}if((n=document.getElementById("appShell"))!=null&&n.classList.contains("visible")){Se=!1;return}A(!0),e=setTimeout(()=>{console.warn("[Auth] timeout — Supabase yanıt vermedi, spinner kapatılıyor"),Se=!1,A(!1)},1e4),console.log("[Auth] 3/4 profil yükleniyor...");const{data:o,error:s}=await b.from("users").select("*").eq("id",i.user.id).maybeSingle();console.log("[Auth] 4/4 profil:",o==null?void 0:o.role,(s==null?void 0:s.message)||""),clearTimeout(e);let r=!1;if(o){if(o.role==="coach"){const{data:d}=await b.from("workspaces").select("*").eq("coach_id",o.id).maybeSingle();(!d||!d.onboarding_done)&&(r=!0)}}else r=!0;o&&!r?await De(o):(A(!1),document.getElementById("newUserOnboarding").style.display="flex",document.getElementById("onbEmail").textContent=i.user.email,document.getElementById("onbName").value=((a=i.user.user_metadata)==null?void 0:a.full_name)||"",window._oauthUser=i.user)}catch(i){clearTimeout(e),Se=!1,A(!1),console.warn("[checkOAuthSession]",i)}}async function Aa(){const e=document.getElementById("onbName").value.trim();if(!e){document.getElementById("onbErr").textContent="Ad soyad zorunlu",document.getElementById("onbErr").style.display="block";return}if(!window._onbRole){document.getElementById("onbErr").textContent="Hesap türü seçin",document.getElementById("onbErr").style.display="block";return}document.getElementById("onbErr").style.display="none",A(!0);const t=window._oauthUser,n=e.toLowerCase().replace(/\s+/g,"_").replace(/[^a-z0-9_]/g,""),a={id:t.id,full_name:e,email:t.email,role:window._onbRole,username:n+"_"+Math.random().toString(36).slice(2,6),password_hash:"supabase_managed",color:window._onbRole==="coach"?"#f0a500":"#4da6ff",week_start:0,progress:0,target:""},{data:i,error:o}=await b.from("users").upsert(a).select().single();if(o){A(!1),document.getElementById("onbErr").textContent="Hata: "+o.message,document.getElementById("onbErr").style.display="block";return}document.getElementById("newUserOnboarding").style.display="none",await De(i)}let ee=0;function Da(e,t){document.getElementById("regBrandColor").value=e,t.parentElement.querySelectorAll("div").forEach(n=>n.style.outline="none"),t.style.outline="3px solid white"}function Ca(){const e=document.getElementById("regErr0");if(e&&(e.style.display="none"),ee===0){if(!window._regRole){e&&(e.textContent="Lütfen bir hesap türü seçin.",e.style.display="block");return}window._regRole==="student"?ee=3:ee=1}else if(ee===1){if(!document.getElementById("regBrandName").value.trim()){alert("Lütfen akademi / koçluk adını girin.");return}ee=2}else ee===2&&(ee=3);Pt(ee)}function La(){ee===3?window._regRole==="student"?ee=0:ee=2:ee===2?ee=1:ee===1&&(ee=0),Pt(ee)}function Pt(e){document.getElementById("regWizardStep0").style.display=e===0?"block":"none",document.getElementById("regWizardStepCoach1").style.display=e===1?"block":"none",document.getElementById("regWizardStepCoach2").style.display=e===2?"block":"none",document.getElementById("regWizardStepFinal").style.display=e===3?"block":"none"}async function ja(){const e=document.getElementById("regName").value.trim(),t=document.getElementById("regEmail").value.trim().toLowerCase(),n=document.getElementById("regPass").value;if(!e||!t||!n)return ot("Tüm hesap bilgileri zorunludur");if(n.length<8)return ot("Şifre en az 8 karakter olmalıdır");A(!0);try{let a={full_name:e,role:window._regRole};if(window._regRole==="coach"){const s=document.getElementById("regBrandName").value.trim(),r=document.getElementById("regBrandColor").value||"#f0a500",d=document.getElementById("regPhone").value.trim(),c=[...document.querySelectorAll("#regExamTypesWrap .ob-exam-sel input")].map(u=>u.value),p=c.length>0?c.join(","):"YKS",m=document.getElementById("regStudentCountRange").value||"1-5";a.ob_brand=s,a.ob_color=r,a.ob_phone=d,a.ob_examtypes=p,a.ob_studentcount=m}const{data:i,error:o}=await b.auth.signUp({email:t,password:n,options:{data:a}});if(o)throw o;if(i!=null&&i.user){A(!1),document.getElementById("regName").value="",document.getElementById("regEmail").value="",document.getElementById("regPass").value="",document.getElementById("regBrandName")&&(document.getElementById("regBrandName").value=""),document.getElementById("regPhone")&&(document.getElementById("regPhone").value="");const s=document.getElementById("regSuccess");s.textContent="Kayıt başarılı! E-posta adresinize bir doğrulama bağlantısı gönderildi. Lütfen doğrulama yaptıktan sonra giriş yapın.",s.style.display="block",setTimeout(()=>s.style.display="none",1e4),ee=0,Pt(0),gn("login")}}catch(a){A(!1),ot("Kayıt Hatası: "+a.message)}}async function Pa(){const e=(document.getElementById("loginEmail").value||document.getElementById("loginUser").value||"").trim(),t=document.getElementById("loginPass").value;if(!e||!t)return de("Kullanıcı adı ve şifre zorunlu");A(!0);const n=setTimeout(()=>{A(!1),de("Bağlantı zaman aşımına uğradı. Supabase yanıt vermiyor — lütfen tekrar deneyin.")},15e3);try{let a=e;a.includes("@")?a=a.toLowerCase():a=Ae(e)+"@rostrumakademi.com";const{data:i,error:o}=await b.auth.signInWithPassword({email:a,password:t});if(!o&&(i!=null&&i.user)){const{data:s,error:r}=await b.from("users").select("*").eq("id",i.user.id).maybeSingle();if(r&&console.error("Profile fetch error:",r),s){clearTimeout(n),await De(s);return}return A(!1),de("Hesabınız veritabanında aktif değil.")}try{const s=Ae(e.includes("@")?e.split("@")[0]:e),r=await Le(t),{data:d}=await b.rpc("get_user_by_credentials",{p_username:s,p_password_hash:r}),c=Array.isArray(d)?d[0]:d;if(c){clearTimeout(n),await De(c);return}}catch(s){console.warn("Fallback RPC error:",s)}return A(!1),de(o?"Giriş başarısız: "+o.message:"Kullanıcı adı veya şifre hatalı.")}catch(a){return A(!1),console.error("[doLogin]",a),de("Giriş hatası: "+a.message)}finally{clearTimeout(n)}}async function De(e){var n,a,i,o,s;A(!1);const t=e.role==="coach"||e.role==="developer"?e.id:e.role==="student"||e.role==="parent"?e.coach_id:null;y.role=e.role,y.studentId=e.role==="student"?e.id:null,y.dbUser=e,y.coachId=t,document.getElementById("loginScreen").style.display="none",document.getElementById("appShell").classList.add("visible");try{if(await un(),(y.role==="coach"||y.role==="developer")&&!l.workspace){console.log("[Auth] Workspace not found, auto-creating from signup metadata...");const{data:{user:m}}=await b.auth.getUser();if(m){const u=((n=m.user_metadata)==null?void 0:n.ob_brand)||"Akademi",v=((a=m.user_metadata)==null?void 0:a.ob_color)||"#f0a500",S=((i=m.user_metadata)==null?void 0:i.ob_phone)||null,E=((o=m.user_metadata)==null?void 0:o.ob_examtypes)||"YKS",f=((s=m.user_metadata)==null?void 0:s.ob_studentcount)||"1-5",$={coach_id:e.id,brand_name:u,brand_color:v,phone:S,exam_types:E,student_count_range:f,onboarding_done:!1},{data:w,error:B}=await b.from("workspaces").upsert($,{onConflict:"coach_id"}).select().maybeSingle();B?console.error("[finishLogin] Create workspace error:",B):w&&(l.workspace=w)}}if(y.role==="student"&&(l.activeStuId=e.id,y.studentId=e.id,l.students.find(m=>m.id===e.id)||l.students.push({id:e.id,name:e.full_name||e.username||"Öğrenci",target:e.target||"",color:e.color||"#4da6ff",progress:e.progress||0,weekStart:e.week_start||0,username:e.username,coachId:e.coach_id})),y.role==="parent"){const{data:m}=await b.from("users").select("*").eq("parent_id",e.id).single();m&&(l.activeStuId=m.id,y.studentId=m.id,y.childName=m.full_name||m.username)}window.setupShell();const r=new URLSearchParams(window.location.search);if(r.get("state")==="google_calendar"&&r.get("code")&&(y.role==="coach"||y.role==="developer")){const m=r.get("code");window.history.replaceState({},"",window.location.pathname+window.location.hash),document.getElementById("aiChatBubble").style.display="flex",setTimeout(()=>window.switchTab("appointments"),50),b.auth.getSession().then(({data:{session:u}})=>{u!=null&&u.access_token&&fetch("/api/mailer",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${u.access_token}`},body:JSON.stringify({type:"google_oauth_exchange",code:m})}).then(v=>v.json()).then(v=>{v.success?(l.workspace&&(l.workspace.google_calendar_connected=!0),h("Google Takvim bağlandı ✓"),window.renderAppointments&&window.renderAppointments()):h("Google bağlanamadı: "+(v.error||"Bilinmeyen hata"))}).catch(()=>h("Google Takvim bağlanamadı"))});return}if(document.getElementById("aiChatBubble").style.display="flex",(y.role==="coach"||y.role==="developer")&&(!l.workspace||!l.workspace.onboarding_done)){window.switchTab("home"),window.showOnboarding();return}if(y.role==="student"){const{data:m}=await b.from("student_profiles").select("id").eq("id",y.studentId||e.id).maybeSingle();if(!m){const u=window.location.hash.substring(1),v=u&&document.getElementById("view-"+u)?u:"portal";setTimeout(()=>{window.switchTab(v),window.showStudentWelcome&&window.showStudentWelcome()},100);return}}const d=window.location.hash.substring(1),c={coach:"home",student:"portal",developer:"home",parent:"parent-home"}[y.role]||"portal",p=d&&document.getElementById("view-"+d)?d:c;setTimeout(()=>window.switchTab(p),50)}catch(r){A(!1),console.error("[doLogin] HATA:",r),de("Hata: "+r.message),document.getElementById("loginScreen").style.display="flex",document.getElementById("appShell").classList.remove("visible")}}function Ra(){window._fcInstance&&(window._fcInstance.destroy(),window._fcInstance=null),window.destroyRealtime&&window.destroyRealtime(),b.auth.signOut().catch(()=>{}),mn(),y.role=null,y.studentId=null,y.dbUser=null,y.coachId=null,y.childName=null,l.workspace=null,document.getElementById("loginScreen").style.display="flex",document.getElementById("appShell").classList.remove("visible"),document.getElementById("aiChatBubble").style.display="none",document.getElementById("aiChatPanel").classList.remove("open"),document.getElementById("loginEmail")&&(document.getElementById("loginEmail").value=""),document.getElementById("loginUser")&&(document.getElementById("loginUser").value=""),document.getElementById("loginPass").value="",window.location.hash=""}function Na(){window.om("forgotPassModal")}async function Ha(){const e=document.getElementById("forgotEmail").value.trim();if(!e)return;const t=document.getElementById("forgotMsg");try{const n=await fetch("/api/mailer",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({type:"password_reset",email:e})}),a=await n.json();if(!n.ok)throw new Error(a.error||"Sunucu hatası");t.style.display="block",t.style.background="var(--green-dim)",t.style.color="var(--green)",t.textContent="Sıfırlama linki e-posta adresinize gönderildi. Lütfen gelen kutunuzu kontrol edin."}catch(n){t.style.display="block",t.style.background="var(--red-dim)",t.style.color="var(--red)",t.textContent="Hata: "+(n.message||"Bir sorun oluştu.")}}async function Ya(){const e=document.getElementById("newPasswordInput").value;if(!e||e.length<8){alert("Şifre en az 8 karakter olmalıdır.");return}A(!0);try{const{error:t}=await b.auth.updateUser({password:e});if(t)throw t;const n=await Le(e),{data:{user:a}}=await b.auth.getUser();a&&await b.from("users").update({password_hash:n}).eq("id",a.id),alert("Şifreniz başarıyla güncellendi! Lütfen yeni şifrenizle giriş yapın."),window.cm("resetPasswordModal"),await b.auth.signOut(),window.location.hash="",window.location.reload()}catch(t){alert("Şifre güncellenirken hata oluştu: "+t.message)}finally{A(!1)}}window.loginErr=de;window.regErr=ot;window.setAuthMode=gn;window.setLoginMode=Sa;window.setRegRole=Ia;window.setOnbRole=za;window.loginWithGoogle=Ba;window.triggerRealGoogleLogin=vn;window.showGoogleSimulator=fn;window.closeGoogleSimulator=jt;window.simOAuthLogin=Ma;window.checkOAuthSession=yn;window.completeOnboarding=Aa;window.doRegister=ja;window.doLogin=Pa;window.finishLogin=De;window.doLogout=Ra;window.showForgotPassword=Na;window.sendResetEmail=Ha;window.updateUserPassword=Ya;window.nextRegWizardStep=Ca;window.prevRegWizardStep=La;window.setRegBrandColor=Da;b.auth.onAuthStateChange(async(e,t)=>{var a;if(e==="PASSWORD_RECOVERY"||window.location.hash.includes("type=recovery")){console.log("[Auth] Password recovery flow active, showing resetPasswordModal"),A(!1),window.om("resetPasswordModal");return}if(e==="SIGNED_IN"&&(t!=null&&t.user)){if((a=document.getElementById("appShell"))!=null&&a.classList.contains("visible"))return;await yn()}e==="SIGNED_OUT"&&(Se=!1,A(!1))});function dn(){const e=document.getElementById("loginEmail"),t=document.getElementById("loginUser");e&&t&&(e.addEventListener("input",n=>{t.value=n.target.value}),t.addEventListener("input",n=>{e.value=n.target.value}))}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",dn):dn();if(new URLSearchParams(window.location.search).get("new_coach")==="1"){const e=sessionStorage.getItem("ra_new_coach_email"),t=sessionStorage.getItem("ra_new_coach_pass");if(e&&t){sessionStorage.removeItem("ra_new_coach_email"),sessionStorage.removeItem("ra_new_coach_pass");const n=()=>{const a=document.getElementById("loginEmail"),i=document.getElementById("loginPass");a&&i&&(a.value=e,i.value=t,setTimeout(()=>window.doLogin&&window.doLogin(),400))};document.readyState==="loading"?document.addEventListener("DOMContentLoaded",n):n()}}function We(e){if(!e||e<=0)return"0 sa";const t=Math.floor(e/60),n=e%60;return t>0&&n>0?`${t} sa ${n} dk`:t>0?`${t} sa`:`${n} dk`}window.formatMinToHours=We;function ae(e){return new Promise(t=>{let n=document.getElementById("customConfirmModal");n||(n=document.createElement("div"),n.id="customConfirmModal",n.className="modal-bg",n.style.zIndex="999999",n.innerHTML=`
        <div class="modal" style="max-width:360px;text-align:center;padding:24px 20px;border-radius:16px;background:var(--surface);border:1px solid var(--border)">
          <div style="font-size:32px;margin-bottom:12px">⚠️</div>
          <div id="confirmMessage" style="font-size:14px;font-weight:700;color:var(--text);margin-bottom:20px;line-height:1.5"></div>
          <div style="display:flex;gap:10px;justify-content:center">
            <button class="btn btn-ghost" id="confirmCancelBtn" style="flex:1;justify-content:center;padding:10px;border-radius:10px">İptal</button>
            <button class="btn btn-accent" id="confirmOkBtn" style="flex:1;justify-content:center;padding:10px;border-radius:10px;background:#ef4444;border-color:#ef4444;color:#fff">Tamam</button>
          </div>
        </div>
      `,document.body.appendChild(n),n.addEventListener("click",r=>{r.target===n&&(n.classList.remove("open"),t(!1))})),n.querySelector("#confirmMessage").textContent=e;const a=n.querySelector("#confirmOkBtn"),i=n.querySelector("#confirmCancelBtn"),o=a.cloneNode(!0),s=i.cloneNode(!0);a.parentNode.replaceChild(o,a),i.parentNode.replaceChild(s,i),n.classList.add("open"),o.focus(),o.onclick=()=>{n.classList.remove("open"),t(!0)},s.onclick=()=>{n.classList.remove("open"),t(!1)}})}window.customConfirm=ae;async function Rt(){const e=y.dbUser;if(e&&!(e.email==="ceylanemin1928@gmail.com"||e.email==="simkoc1@rostrumakademi.com"||window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1"||window.__testMode)){if(y.role==="coach"||y.role==="developer"){if((e.plan||"trial")==="trial"){const n=e.trial_ends_at?new Date(e.trial_ends_at):new Date(new Date(e.created_at).getTime()+12096e5),a=new Date;if(a>n)ct();else{const i=Math.ceil((n-a)/864e5);i<=7&&xn(i)}}}else if((y.role==="student"||y.role==="parent")&&y.coachId)try{const{data:t}=await b.from("users").select("plan,trial_ends_at,created_at,email").eq("id",y.coachId).maybeSingle();if(t){if(t.email==="ceylanemin1928@gmail.com"||t.email==="simkoc1@rostrumakademi.com")return;if((t.plan||"trial")==="trial"){const a=t.trial_ends_at?new Date(t.trial_ends_at):new Date(new Date(t.created_at).getTime()+12096e5);new Date>a&&ct()}}}catch(t){console.error("Error checking coach subscription:",t)}}}function ct(){let e=document.getElementById("trialExpiredModal");e?e.classList.add("open"):(e=document.createElement("div"),e.id="trialExpiredModal",e.className="modal-bg open",e.style.zIndex="9999999",e.innerHTML=`
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
    `,document.body.appendChild(e))}function xn(e){if(document.getElementById("trialCountdownBanner"))return;const t=document.createElement("div");t.id="trialCountdownBanner",t.style.cssText="position:fixed;top:0;left:0;right:0;z-index:8000;background:#f59e0b;color:#111;padding:8px 16px;display:flex;align-items:center;justify-content:center;gap:12px;font-size:13px;font-weight:600;",t.innerHTML=`<span>⏰ Ücretsiz denemenizin <strong>${e} günü</strong> kaldı — öğrenci verileriniz korunuyor.</span>
    <button onclick="openSupportChatDirect()" style="background:rgba(0,0,0,.15);border:none;padding:4px 14px;border-radius:6px;font-size:12px;font-weight:700;cursor:pointer;color:#111;white-space:nowrap">Devam Et →</button>
    <button onclick="document.getElementById('trialCountdownBanner').remove()" style="background:none;border:none;cursor:pointer;color:rgba(0,0,0,.4);font-size:18px;padding:0 4px;line-height:1">×</button>`,document.body.prepend(t);const n=document.getElementById("appShell");n&&(n.style.marginTop=t.offsetHeight+"px")}window.openSupportChatDirect=ht;window.checkCoachSubscription=Rt;window.showTrialExpiredScreen=ct;window.showTrialCountdownBanner=xn;const zt=[{id:"home",lbl:"🏠",name:"Ana Sayfa"},{id:"students",lbl:"👤",name:"Öğrencilerim"},{id:"todolist",lbl:"📅",name:"Takvim"},{id:"coach-resources",lbl:"📚",name:"Kaynaklarım"},{id:"coach-applications",lbl:"📩",name:"Başvurular"}],bn=[{id:"portal",lbl:"🏠",name:"Ana Sayfa"},{id:"sportal",lbl:"📋",name:"Programım"},{id:"sexams",lbl:"📊",name:"Denemeler"},{id:"smessages",lbl:"💬",name:"Koçuma Yaz"},{id:"sprofil",lbl:"🌟",name:"Yolculuğum"}],hn=[{id:"dev-dashboard",lbl:"🖥️",name:"Dev Panel"},{id:"dev-tickets",lbl:"🎫",name:"Destek"}],kn=[{id:"parent-home",lbl:"🏠",name:"Ana Sayfa"},{id:"parent-progress",lbl:"📊",name:"İlerleme"},{id:"parent-messages",lbl:"💬",name:"Koça Yaz"},{id:"parent-ai",lbl:"🤖",name:"AI Asistan"}];function Ka(){var e;(e=document.getElementById("mainSidebar"))==null||e.classList.toggle("open")}function Oa(){var e;(e=document.getElementById("tnUserMenu"))==null||e.classList.toggle("open")}function wn(){var e;(e=document.getElementById("tnUserMenu"))==null||e.classList.remove("open")}document.addEventListener("click",e=>{const t=document.getElementById("tnUserWrap");t&&!t.contains(e.target)&&wn()});function Fa(){var p;Rt();const e=y.role==="coach"?zt:y.role==="developer"?[...zt,...hn]:y.role==="parent"?kn:bn;document.getElementById("sidebarNav").innerHTML=e.map(m=>`
    <div class="tn-nav-item" id="sbi_${m.id}" onclick="switchTab('${m.id}')">
      <span>${m.lbl}</span>
      <span>${m.name}</span>
    </div>`).join(""),document.getElementById("mobileNav").innerHTML=e.slice(0,5).map(m=>`
    <button class="mnav-btn" id="mntab_${m.id}" onclick="switchTab('${m.id}')">${m.lbl}<span style="font-size:9px;display:block">${m.name}</span></button>`).join(""),document.getElementById("mainContent").innerHTML=[...e,{id:"student-detail"},{id:"profile"},{id:"settings"},{id:"coach-resources"},{id:"coach-applications"},{id:"coach-notes"},{id:"coach-profile"},{id:"messages"},{id:"todolist"},{id:"suyelik"},{id:"program"},{id:"appointments"},{id:"exams"}].map(m=>`<div class="view" id="view-${m.id}"></div>`).join("");const t=y.dbUser,n=y.role==="student"?l.students.find(m=>m.id===y.studentId):null,a=(t==null?void 0:t.full_name)||(n==null?void 0:n.name)||"",i=a.split(" ").map(m=>m[0]).join("").slice(0,2).toUpperCase(),o={coach:"#E8613A",student:(n==null?void 0:n.color)||"#4da6ff",developer:"#c084fc",parent:"#3ecf8e"},s={coach:"KOÇ",student:"ÖĞRENCİ",developer:"DEV",parent:"VELİ"};if(document.getElementById("sbAv").textContent=i,document.getElementById("sbAv").style.background=o[y.role]||"#888",document.getElementById("sbName").textContent=a,document.getElementById("sbRole").textContent=s[y.role]||y.role,(y.role==="coach"||y.role==="developer")&&((p=l.workspace)!=null&&p.brand_name)){const m=document.querySelector(".sb-logo-text");m&&(m.textContent=l.workspace.brand_name);const u=document.querySelector(".tn-logo .sb-logo-icon");u&&(u.textContent=l.workspace.brand_name.slice(0,1).toUpperCase())}const r=document.getElementById("sb-site-admin");r&&(r.style.display=y.role==="developer"?"flex":"none");const d=document.getElementById("tnCoachProfileItem");d&&(d.style.display=y.role==="coach"||y.role==="developer"?"flex":"none");const c=document.getElementById("tnUyelikItem");c&&(c.style.display=y.role==="coach"||y.role==="developer"?"flex":"none"),setTimeout(wt,200),da(),setTimeout(Jn,600),(y.role==="coach"||y.role==="developer")&&b.from("match_requests").select("id",{count:"exact",head:!0}).eq("matched_coach_id",y.coachId).eq("status","pending").then(({count:m})=>{if(m>0){const u=document.getElementById("sbi_coach-applications");if(u&&!u.querySelector(".sb-badge")){const v=document.createElement("span");v.className="sb-badge",v.textContent=m,u.appendChild(v)}}})}function ie(e,t=!0){var c,p,m;if(!e)return;currentTab=e,t&&(window.location.hash=e),document.querySelectorAll(".tn-nav-item").forEach(u=>u.classList.remove("active"));const n=document.getElementById("sbi_"+e)||document.getElementById("sb-"+e);n&&n.classList.add("active"),document.querySelectorAll(".view").forEach(u=>u.classList.remove("active"));const a=document.getElementById("view-"+e);a&&a.classList.add("active");const o=[...zt,...bn,...hn,...kn,{id:"profile",name:"Profil"},{id:"settings",name:"Ayarlar"},{id:"student-detail",name:((c=l.students.find(u=>u.id===l.activeStuId))==null?void 0:c.name)||"Öğrenci"},{id:"program",name:"Program"},{id:"appointments",name:"Randevular"},{id:"exams",name:"Denemeler"}].find(u=>u.id===e),s=document.getElementById("tbarTitle");s&&(s.textContent=(o==null?void 0:o.name)||e);const r={home:$n,students:et,messages:Un,"coach-applications":an,"coach-notes":ya,todolist:Pn,portal:xt,sportal:_e,sexams:Ut,smessages:Mt,suyelik:rs,sprofil:na,profile:Sn,settings:In,"student-detail":()=>{l.activeStuId?Tn(l.activeStuId):ie("students")},program:()=>{l.activeStuId?Nt(l.activeStuId):ie("students")},exams:()=>{l.activeStuId?Fe():ie("students")},appointments:()=>{l.activeStuId?Oe():ie("students")},"dev-dashboard":Vn,"dev-users":tt,"dev-resources":nt,"dev-finance":bt,"dev-announce":at,"dev-tickets":Ge,"parent-home":ma,"parent-progress":ua,"parent-messages":Mt,"parent-ai":ga,"coach-profile":aa,"dev-matches":Jt,"coach-resources":it};try{(p=r[e])==null||p.call(r)}catch(u){console.error("[switchTab] Render error for tab:",e,u),a&&(a.innerHTML=`<div style="padding:24px;color:var(--text)"><b>Hata Oluştu ⚠️</b><p style="color:var(--text-mid);margin-top:6px">${g(u.message)}</p><pre style="font-size:10px;color:var(--text-dim);white-space:pre-wrap;margin-top:8px">${g((u.stack||"").slice(0,400))}</pre></div>`)}e==="messages"||e==="smessages"?Wt():Vt();const d=document.getElementById("aiChatBubble");d&&(e==="dev-tickets"||e.startsWith("dev-")||e==="messages"||e==="smessages"?(d.style.display="none",(m=document.getElementById("aiChatPanel"))==null||m.classList.remove("open")):(y.role==="student"||y.role==="coach"||y.role==="parent")&&(d.style.display="flex"))}function $n(){var t,n;const e=document.getElementById("view-home");if(e)try{const a=new Date,i=["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"],o=["Ocak","Şubat","Mart","Nisan","Mayıs","Haziran","Temmuz","Ağustos","Eylül","Ekim","Kasım","Aralık"],s=F(a);let r=0;Object.values(l.messages).forEach(z=>{r+=z.filter(I=>I.from==="student"&&!I.read).length});const d=l.appointments.filter(z=>z.date===s).sort((z,I)=>z.time.localeCompare(I.time)),c=[],p=te(0,0);(l.students||[]).forEach(z=>{let I=0,T=0;for(let M=0;M<7;M++){const j=F(J(p,M)),P=l.tasks[`${z.id}_${j}`]||[];I+=P.length,T+=P.filter(Y=>Y.done).length}const D=I>0?Math.round(T/I*100):0;I>0&&D<30&&c.push({studentId:z.id,studentName:z.name,color:z.color,type:"tasks",icon:"📋",title:"Düşük Görev",desc:`Bu haftaki görev tamamlama oranı <b>%${D}</b>'de kaldı (${T}/${I} görev tamamlandı).`});const C=(l.exams||[]).filter(M=>M.studentId===z.id).sort((M,j)=>new Date(j.date).getTime()-new Date(M.date).getTime()),L={};if(C.forEach(M=>{L[M.type]||(L[M.type]=[]),L[M.type].push(M)}),Object.entries(L).forEach(([M,j])=>{if(j.length>=2){const P=j[0],Y=j[1],H=Object.values(P.nets||{}).reduce((V,Q)=>V+Number(Q||0),0),O=Object.values(Y.nets||{}).reduce((V,Q)=>V+Number(Q||0),0),q=H-O;q<-5&&c.push({studentId:z.id,studentName:z.name,color:z.color,type:"exams",icon:"📉",title:`Net Düşüşü (${M})`,desc:`Son denemede <b>${H} net</b> yaptı. Önceki denemesine (${O} net) göre <b>${Math.abs(q).toFixed(1)} net düşüş</b>.`})}}),I===0&&c.push({studentId:z.id,studentName:z.name,color:z.color,type:"noplan",icon:"📭",title:"Program Yok",desc:"Bu hafta için henüz hiç görev eklenmemiş."}),I>0&&T===0){let M=!1;for(let j=0;j<3;j++){const P=F(J(a,-j));if((l.tasks[`${z.id}_${P}`]||[]).length>0){M=!0;break}}M&&c.push({studentId:z.id,studentName:z.name,color:z.color,type:"inactive",icon:"💤",title:"3 Gündür Pasif",desc:"Son 3 gündür hiçbir görev tamamlanmadı. İletişime geç!"})}I>0&&T===I&&c.push({studentId:z.id,studentName:z.name,color:z.color,type:"perfect",icon:"🏆",title:"Harika Hafta!",desc:`Bu haftaki tüm ${I} görevi tamamladı! Tebrik et.`}),(l.studentSpeeds||[]).filter(M=>M.student_id===z.id).forEach(M=>{let j=120;M.exam_type==="TYT"?["Türkçe","Sosyal"].includes(M.subject)?j=100:["Matematik","Fen"].includes(M.subject)&&(j=130):M.exam_type&&M.exam_type.startsWith("AYT")&&(j=180),M.secs_per_question>j&&c.push({studentId:z.id,studentName:z.name,color:z.color,type:"speed",icon:"⚡",title:`Hız Aşımı (${M.exam_type} - ${M.subject})`,desc:`Soru çözüm hızı <b>${M.secs_per_question} sn/soru</b> (Limit: ${j} sn).`})})});let m="";if(c.length===0)l.students.length===0?m=`
        <div style="text-align:center;padding:24px 16px">
          <div style="font-size:36px;margin-bottom:12px">👋</div>
          <div style="font-size:14px;font-weight:700;color:var(--text);margin-bottom:6px">İlk öğrencinizi ekleyin</div>
          <div style="font-size:12px;color:var(--text-mid);margin-bottom:16px;line-height:1.6">Öğrencilerim sekmesinden öğrenci ekleyerek uygulamayı kullanmaya başlayabilirsiniz.</div>
          <button class="btn btn-accent" onclick="switchTab('students')" style="font-size:13px;padding:9px 20px">Öğrenci Ekle →</button>
        </div>`:m=`
        <div style="text-align:center;padding:16px;color:var(--text-dim);font-size:13px">
          ✅ Harika! Şu an için kritik bir performans düşüşü veya uyarı bulunmuyor.
        </div>`;else{const z={perfect:{badge:"#3ecf8e",badgeBg:"rgba(62,207,142,.12)",border:"rgba(62,207,142,.25)"},noplan:{badge:"#f0a500",badgeBg:"rgba(240,165,0,.1)",border:"rgba(240,165,0,.2)"},inactive:{badge:"#ff5c7a",badgeBg:"rgba(255,92,122,.08)",border:"rgba(255,92,122,.2)"},tasks:{badge:"#ff5c7a",badgeBg:"rgba(255,92,122,.08)",border:"rgba(255,92,122,.2)"},exams:{badge:"#ff5c7a",badgeBg:"rgba(255,92,122,.08)",border:"rgba(255,92,122,.2)"},speed:{badge:"#f0a500",badgeBg:"rgba(240,165,0,.1)",border:"rgba(240,165,0,.2)"}};m=c.map(I=>{const T=z[I.type]||z.tasks;return`<div style="cursor:pointer;padding:10px 12px;margin-bottom:8px;border-radius:8px;background:${T.badgeBg};border:1px solid ${T.border};display:flex;align-items:center;gap:10px;transition:opacity .15s" onclick="openStudentDetail('${I.studentId}')" onmouseover="this.style.opacity='.85'" onmouseout="this.style.opacity='1'">
        <div style="font-size:18px;width:32px;height:32px;border-radius:8px;background:rgba(255,255,255,.06);display:flex;align-items:center;justify-content:center;flex-shrink:0">${I.icon}</div>
        <div style="flex:1;min-width:0">
          <div style="display:flex;justify-content:space-between;align-items:center;gap:8px;margin-bottom:2px">
            <span style="font-size:13px;font-weight:700">${g(I.studentName)}</span>
            <span style="font-size:10px;font-weight:700;color:${T.badge};white-space:nowrap">${I.title}</span>
          </div>
          <div style="font-size:11px;color:var(--text-mid);line-height:1.4">${I.desc}</div>
        </div>
      </div>`}).join("")}const u=a.getHours(),v=u<6?"İyi geceler":u<12?"Günaydın":u<18?"İyi günler":"İyi akşamlar",S=`${String(u).padStart(2,"0")}:${String(a.getMinutes()).padStart(2,"0")}`,E=d.find(z=>z.time>=S),f=new Date(2026,5,14),$=Math.max(0,Math.ceil((f-a)/(1e3*60*60*24))),w=te(0,0);let B=0,x=0;l.students.forEach(z=>{for(let I=0;I<7;I++){const T=l.tasks[`${z.id}_${F(J(w,I))}`]||[];B+=T.length,x+=T.filter(D=>D.done).length}});const _=B>0?Math.round(x/B*100):0;e.innerHTML=`
    <!-- HERO -->
    <div class="home-hero">
      <div class="home-hero-left">
        <div class="home-hero-greeting">${v},</div>
        <div class="home-hero-name">${g(((n=(t=y.dbUser)==null?void 0:t.full_name)==null?void 0:n.split(" ")[0])||"Koç")} 👋</div>
        <div class="home-hero-date">${i[a.getDay()]}, ${a.getDate()} ${o[a.getMonth()]} ${a.getFullYear()}</div>
      </div>
      <div class="home-hero-right">
        <div class="home-yks-badge">
          <div class="home-yks-num">${$}</div>
          <div class="home-yks-meta">gün kaldı<br><b>YKS 2026</b></div>
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
          <span class="hsv2-trend" style="color:var(--blue)">${E?E.time:"—"}</span>
        </div>
        <div class="hsv2-val" style="color:var(--blue)">${d.length}</div>
        <div class="hsv2-lbl">Bugün Randevu</div>
        <div class="hsv2-sub">${E?`Sıradaki: ${E.time}`:"Randevu tamamlandı"}</div>
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
          <span class="hsv2-icon-wrap ${_>=70?"hsv2-green":_>=40?"hsv2-amber":"hsv2-red"}">📋</span>
          <span class="hsv2-trend" style="color:${_>=70?"var(--green)":_>=40?"var(--accent)":"var(--red)"}">%${_}</span>
        </div>
        <div class="hsv2-val" style="color:${_>=70?"var(--green)":_>=40?"var(--accent)":"var(--red)"}">${x}<span style="font-size:18px;font-weight:500;color:var(--text-dim)">/${B}</span></div>
        <div class="hsv2-lbl">Haftalık Görev</div>
        <div class="hsv2-progress"><div class="hsv2-bar" style="width:${_}%;background:${_>=70?"var(--green)":_>=40?"var(--accent)":"var(--red)"}"></div></div>
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
          ${d.map(z=>{const I=l.students.find(O=>O.id===z.studentId),T=z.time<S,[D,C]=z.time.split(":").map(Number),L=D*60+C,[k,M]=S.split(":").map(Number),j=k*60+M,P=L-j,Y=P>=-(z.duration||60)&&P<=15,H=Y&&z.meet_link?`<a href="${g(z.meet_link)}" target="_blank" style="display:inline-flex;align-items:center;gap:5px;padding:5px 12px;border-radius:8px;background:${P<=0?"var(--red)":"var(--accent)"};color:#fff;font-size:11px;font-weight:800;text-decoration:none;animation:${P<=0?"pulse 1.5s infinite":"none"};white-space:nowrap;flex-shrink:0">${P<=0?"🔴 Ders Sürüyor":"🟡 Derse Gir"}</a>`:"";return`<div class="hsc-appt-row ${T&&!Y?"hsc-appt-past":""}">
              <div class="hsc-appt-time">${z.time}</div>
              <div class="hsc-appt-bar" style="background:${(I==null?void 0:I.color)||"var(--accent)"}"></div>
              <div style="flex:1;min-width:0">
                <div class="hsc-appt-name">${g((I==null?void 0:I.name)||"?")}</div>
                <div class="hsc-appt-meta">${g(z.type)} · ${z.duration} dk${!Y&&z.meet_link?` · <a href="${g(z.meet_link)}" target="_blank" style="color:var(--blue);text-decoration:none">${z.meet_link.includes("zoom")?"Zoom":"Meet"} →</a>`:""}</div>
              </div>
              ${H||(T?'<span class="hsc-appt-done">✓</span>':"")}
            </div>`}).join("")}
        </div>
      </div>
    </div>

    <!-- HIZLI ERİŞİM -->
    <div style="display:flex;gap:8px;max-width:900px;margin:0 auto 4px;justify-content:center">
      ${[{tab:"messages",icon:"💬",label:"Mesajlar",sub:r>0?r+" okunmamış":"Temiz"},{tab:"coach-notes",icon:"📝",label:"Notlarım",sub:"Kişisel notlar"},{tab:"todolist",icon:"📅",label:"Ajanda",sub:"Tüm randevular"},{tab:"coach-applications",icon:"📩",label:"Başvurular",sub:"Eşleşme talepleri"}].map(({tab:z,icon:I,label:T,sub:D})=>`
        <div onclick="switchTab('${z}')" style="background:var(--surface);border:1px solid var(--border);border-radius:10px;padding:9px 16px;cursor:pointer;display:flex;align-items:center;gap:8px;white-space:nowrap;transition:border-color .15s;flex:1;justify-content:center" onmouseover="this.style.borderColor='var(--accent)'" onmouseout="this.style.borderColor='var(--border)'">
          <span style="font-size:16px">${I}</span>
          <div><div style="font-size:12px;font-weight:700">${T}</div><div style="font-size:10px;color:var(--text-dim)">${D}</div></div>
        </div>`).join("")}
    </div>`}catch(a){console.error("[renderHome] HATA:",a),e.innerHTML=`<div style='padding:24px;color:var(--text)'><b>İyi günler 👋</b><p style='color:var(--text-mid);margin-top:6px'>Hata: ${g(a.message)}</p></div>`}}function et(){const e=document.getElementById("view-students"),t=te(0,0),n={};l.students.forEach(s=>{let r=0,d=0,c=0,p=0;for(let m=0;m<7;m++)(l.tasks[`${s.id}_${F(J(t,m))}`]||[]).forEach(v=>{r++,c+=Number(v.duration||0),v.done&&(d++,p+=Number(v.duration||0))});n[s.id]={total:r,done:d,totalMin:c,doneMin:p}});const a=l.students.length,i=l.students.filter(s=>{const r=n[s.id];return r&&r.total>0}).length,o=l.students.filter(s=>{const r=n[s.id];return r&&r.total>0&&r.done===r.total}).length;e.innerHTML=`<div style="max-width:640px;margin:0 auto">
    <!-- Üst başlık -->
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:24px">
      <div>
        <div style="font-size:22px;font-weight:800;letter-spacing:-.3px">Öğrencilerim</div>
        <div style="font-size:12px;color:var(--text-dim);margin-top:3px">${a} öğrenci · ${i} bu hafta aktif · ${o} hafta tamamladı</div>
      </div>
      <button class="btn btn-accent" onclick="openStudentModal()" style="gap:6px;font-size:13px;padding:9px 18px">
        <span style="font-size:16px;line-height:1">+</span> Yeni Öğrenci
      </button>
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
          <div style="font-size:12px">Yeni öğrenci eklemek için sağ üstteki butonu kullanın.</div>
        </div>
      `:l.students.map(s=>{const r=n[s.id]||{total:0,done:0},d=r.total>0?Math.round(r.done/r.total*100):0,c=d>=80?"var(--green)":d>=40?"var(--accent)":"var(--red)",p=r.total>0&&r.done===r.total,m=l.exams.filter(v=>v.studentId===s.id).sort((v,S)=>S.date.localeCompare(v.date))[0],u=m?Object.values(m.nets||{}).reduce((v,S)=>v+S,0).toFixed(1):null;return`<div class="stu-row" id="sturow_${s.id}" onclick="openStudentDetail('${s.id}')" style="padding:12px 16px;align-items:center;gap:12px;border-radius:10px">
          <div style="width:38px;height:38px;border-radius:10px;background:${s.color};display:flex;align-items:center;justify-content:center;font-size:15px;font-weight:800;color:#fff;flex-shrink:0">${s.name[0]}</div>
          <div style="flex:1;min-width:0">
            <div style="font-size:13px;font-weight:700;color:var(--text)">${g(s.name)}</div>
            <div style="font-size:11px;color:var(--text-dim);margin-top:1px">${g(s.target||"Hedef belirtilmemiş")}</div>
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
  </div>`}function Ga(){const e=document.getElementById("stuSearchInput").value.trim().toLowerCase(),t=document.getElementById("stuSearchNoResults");let n=0;l.students.forEach(a=>{const i=document.getElementById("sturow_"+a.id);if(i){const o=a.name.toLowerCase().includes(e);i.style.display=o?"flex":"none",o&&n++}}),t&&(t.style.display=e&&n===0?"block":"none")}function Tn(e){if(!l.students.find(p=>p.id===e))return;l.activeStuId=e;const t=l.students.find(p=>p.id===l.activeStuId),n=te(0,t.weekStart||0);let a=0,i=0,o=0;for(let p=0;p<7;p++){const m=l.tasks[`${t.id}_${F(J(n,p))}`]||[];a+=m.length,i+=m.filter(u=>u.done).length,o+=m.reduce((u,v)=>u+Number(v.duration||0),0)}const s=a>0?Math.round(i/a*100):0,r=s>=80?"var(--green)":s>=50?"var(--accent)":"var(--red)",d=document.getElementById("view-student-detail");d.innerHTML=`
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
          <button id="aiCopilotSendBtn" class="btn btn-accent btn-sm" onclick="sendCopilotDraft('${t.id}')" style="background:var(--green); border-color:var(--green); color:white" disabled>✍️ Düzenlemeyi Kaydet ve Öğrenciye Gönder</button>
          <span id="aiCopilotEditWarning" style="color:var(--red); font-size:11px; font-weight:bold">Öğrenciye gönderebilmek için taslak üzerinde en az bir değişiklik yapmalısınız.</span>
        </div>
      </div>
    </div>`,currentTab!=="student-detail"&&ie("student-detail");const c=document.getElementById("tbarTitle");c&&(c.textContent=t.name)}const je=[{stars:0,label:"Başlanmadı",color:"#6b7280",bg:"rgba(107,114,128,.08)",border:"rgba(107,114,128,.2)"},{stars:1,label:"Anlamadım",color:"#ef4444",bg:"rgba(239,68,68,.08)",border:"rgba(239,68,68,.2)"},{stars:2,label:"Temel Zorluk",color:"#f97316",bg:"rgba(249,115,22,.08)",border:"rgba(249,115,22,.2)"},{stars:3,label:"Temel OK",color:"#eab308",bg:"rgba(234,179,8,.08)",border:"rgba(234,179,8,.2)"},{stars:4,label:"Orta Seviye",color:"#84cc16",bg:"rgba(132,204,22,.08)",border:"rgba(132,204,22,.2)"},{stars:5,label:"İleri Seviye",color:"#22c55e",bg:"rgba(34,197,94,.08)",border:"rgba(34,197,94,.2)"},{stars:6,label:"Uzman",color:"#10b981",bg:"rgba(16,185,129,.08)",border:"rgba(16,185,129,.2)"},{stars:7,label:"Tekrar Dışı (TD)",color:"#3b82f6",bg:"rgba(59,130,246,.1)",border:"rgba(59,130,246,.3)"}];function En(e){const t=new Date(e),n=t.getDate(),a=n<=10?1:n<=20?11:21;return`${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,"0")}-${String(a).padStart(2,"0")}`}function Ua(e=6){const t=[],n=new Date;let a=new Date(n);for(let i=0;i<e;i++){const o=En(a);t.find(c=>c.start===o)||t.unshift({start:o,label:qa(o)});const[s,r,d]=o.split("-").map(Number);if(d===21?a=new Date(s,r-1,11):d===11?a=new Date(s,r-1,1):a=new Date(s,r-2,21),t.length>=e)break}return t.slice(-e)}function qa(e){const[t,n,a]=e.split("-").map(Number),i=["Oca","Şub","Mar","Nis","May","Haz","Tem","Ağu","Eyl","Eki","Kas","Ara"],o=a===1?10:a===11?20:new Date(t,n,0).getDate();return`${a}-${o} ${i[n-1]}`}const cn={SAY:["Dil Bilgisi","TYT Matematik","AYT Matematik","Geometri","TYT Fizik","AYT Fizik","TYT Kimya","AYT Kimya","TYT Biyoloji","AYT Biyoloji"],EA:["Dil Bilgisi","TYT Matematik","AYT Matematik","Geometri","AYT Edebiyat","Tarih (TYT-AYT)","Coğrafya (TYT-AYT)","Felsefe Grubu & Din"],SOZ:["Dil Bilgisi","TYT Matematik","Geometri","AYT Edebiyat","Tarih (TYT-AYT)","Coğrafya (TYT-AYT)","Felsefe Grubu & Din"],DIL:["Dil Bilgisi","TYT Matematik","Geometri","YDT İngilizce"]};async function Wa(e){const t=l.students.find(f=>f.id===e);if(!t)return;const n=document.getElementById("view-student-detail");n.innerHTML=`<button class="back-link" onclick="openStudentDetail('${e}')">← ${g(t.name)}</button><div style="padding:20px;color:var(--text-dim);font-size:13px">Yükleniyor…</div>`;const a=y.role==="coach"||y.role==="developer",i=t.yksArea||"SAY",o=cn[i]||cn.SAY;let s=o[0],r="mastery";function d(f,$){var w,B;return((B=(w=l.konuMastery[e])==null?void 0:w[f])==null?void 0:B[$])||null}function c(f,$){var w,B;return((B=(w=l.konuTekrarLog[e])==null?void 0:w[f])==null?void 0:B[$])||{}}async function p(f,$,w,B){const x=d(f,$),_=new Date().toISOString(),z=B||(w>=7?"td":w>0?"active":"not_started"),I={student_id:e,coach_id:y.coachId,subject:f,konu:$,stars:w,status:z,updated_at:_,...z==="active"&&!(x!=null&&x.ka_date)?{ka_date:_}:{},...z==="td"&&!(x!=null&&x.td_date)?{td_date:_}:{},...z==="active"&&(x==null?void 0:x.status)==="td"?{td_date:null}:{}},{data:T,error:D}=await b.from("konu_mastery").upsert(I,{onConflict:"student_id,subject,konu"}).select().single();if(D){h("Hata: "+D.message);return}return l.konuMastery[e]||(l.konuMastery[e]={}),l.konuMastery[e][f]||(l.konuMastery[e][f]={}),l.konuMastery[e][f][$]=T,T}async function m(f,$,w,B){const x=new Date().toISOString(),_={student_id:e,coach_id:y.coachId,subject:f,konu:$,period_start:w,review_count:B,updated_at:x},{data:z,error:I}=await b.from("konu_tekrar_log").upsert(_,{onConflict:"student_id,subject,konu,period_start"}).select().single();if(I){h("Hata: "+I.message);return}return l.konuTekrarLog[e]||(l.konuTekrarLog[e]={}),l.konuTekrarLog[e][f]||(l.konuTekrarLog[e][f]={}),l.konuTekrarLog[e][f][$]||(l.konuTekrarLog[e][f][$]={}),l.konuTekrarLog[e][f][$][w]=z,z}function u(f){const $=Ve[f]||[],w=$.map((T,D)=>{const C=d(f,T),L=(C==null?void 0:C.stars)||0,k=(C==null?void 0:C.status)||"not_started",M=je[L],j=k==="td",P=D%2===0?"var(--surface)":"var(--surface2)",Y=c(f,T),H=Object.values(Y).reduce((X,R)=>X+(R.review_count||0),0),O=C!=null&&C.last_review_date?new Date(C.last_review_date).toLocaleDateString("tr-TR",{day:"2-digit",month:"short"}):"—",q=a?Array.from({length:7},(X,R)=>{const N=R+1,K=N<=L,oe=f.replace(/'/g,"\\'"),fe=T.replace(/'/g,"\\'");return`<span class="km-star${K?" km-star-on":""}" data-stars="${N}" 
          onclick="window._kmSetStars('${oe}','${fe}',${N})"
          title="${je[N].label}"
          style="cursor:pointer;font-size:16px;line-height:1;transition:transform .1s;display:inline-block"
          onmouseover="this.style.transform='scale(1.25)'" onmouseout="this.style.transform='scale(1)'"
        >${K?"⭐":"☆"}</span>`}).join(""):Array.from({length:7},(X,R)=>`<span style="font-size:14px;opacity:${R<L?1:.25}">${R<L?"⭐":"☆"}</span>`).join("");let V="";return j?V='<span style="font-size:9px;font-weight:800;color:#3b82f6;background:rgba(59,130,246,.12);border:1px solid rgba(59,130,246,.3);border-radius:4px;padding:1px 5px;margin-left:4px">TD</span>':C!=null&&C.ka_date&&(V='<span style="font-size:9px;font-weight:700;color:#10b981;background:rgba(16,185,129,.1);border:1px solid rgba(16,185,129,.2);border-radius:4px;padding:1px 5px;margin-left:4px">KA✓</span>'),`<tr id="${"km_"+btoa(encodeURIComponent(f+"|"+T)).replace(/[^a-zA-Z0-9]/g,"")}" style="background:${M.bg};border-bottom:1px solid ${M.border};transition:background .3s">
        <td style="padding:10px 14px;font-size:12px;font-weight:600;color:var(--text);min-width:200px;position:sticky;left:0;z-index:1;background:${P};border-right:1px solid var(--border)">
          ${g(T)}${V}
        </td>
        <td style="padding:8px 12px;white-space:nowrap">
          ${q}
        </td>
        <td style="padding:8px 10px;font-size:11px;font-weight:700;color:${M.color};white-space:nowrap">
          ${L>0?M.label:'<span style="color:var(--text-dim)">—</span>'}
        </td>
        <td style="padding:8px 10px;text-align:center;font-size:11px;color:var(--text-mid);white-space:nowrap">
          ${H>0?`<b style="color:var(--text)">${H}×</b>`:"—"}
        </td>
        <td style="padding:8px 10px;text-align:center;font-size:11px;color:var(--text-dim);white-space:nowrap">${O}</td>
        ${a?`<td style="padding:8px 8px;text-align:center;white-space:nowrap">
          <button onclick="window._kmToggleKA('${f.replace(/'/g,"\\'")}','${T.replace(/'/g,"\\'")}')" 
            style="font-size:10px;padding:3px 7px;border-radius:5px;border:1px solid var(--border);background:var(--surface2);color:var(--text-mid);cursor:pointer;margin-right:4px" 
            title="Konu Anlatımı tamamlandı">KA</button>
          <button onclick="window._kmToggleTD('${f.replace(/'/g,"\\'")}','${T.replace(/'/g,"\\'")}')" 
            style="font-size:10px;padding:3px 7px;border-radius:5px;border:1px solid ${j?"#3b82f6":"var(--border)"};background:${j?"rgba(59,130,246,.15)":"var(--surface2)"};color:${j?"#3b82f6":"var(--text-mid)"};cursor:pointer;font-weight:${j?"800":"400"}" 
            title="Tekrar Dışı">TD</button>
        </td>`:""}
      </tr>`}).join(""),B=$.map(T=>d(f,T)),x=Array(8).fill(0);B.forEach(T=>x[(T==null?void 0:T.stars)||0]++);const _=B.filter(T=>(T==null?void 0:T.status)==="td").length,z=B.filter(T=>(T==null?void 0:T.status)==="active").length;return`<div style="display:flex;gap:12px;flex-wrap:wrap;padding:12px 16px;background:var(--surface2);border-bottom:1px solid var(--border);align-items:center">
      <span style="font-size:11px;color:var(--text-dim)"><b style="color:var(--text)">${$.length}</b> konu</span>
      <span style="font-size:11px;color:var(--text-dim)"><b style="color:#3b82f6">${_}</b> TD</span>
      <span style="font-size:11px;color:var(--text-dim)"><b style="color:#22c55e">${z}</b> aktif</span>
      <span style="font-size:11px;color:var(--text-dim)"><b style="color:#6b7280">${x[0]}</b> başlanmadı</span>
      <div style="flex:1;height:6px;background:var(--surface3);border-radius:99px;overflow:hidden;min-width:80px;max-width:200px">
        <div style="height:100%;width:${$.length>0?Math.round(_/$.length*100):0}%;background:#3b82f6;border-radius:99px"></div>
      </div>
      <span style="font-size:11px;color:#3b82f6;font-weight:700">${$.length>0?Math.round(_/$.length*100):0}% TD</span>
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
    </div>`}function v(f){const $=Ve[f]||[],w=Ua(6),B=En(new Date),x=`<tr style="background:var(--surface2)">
      <th style="padding:8px 14px;text-align:left;font-size:10px;font-weight:800;color:var(--text-dim);border-right:1px solid var(--border);position:sticky;left:0;z-index:2;background:var(--surface2);white-space:nowrap;min-width:200px">KONU</th>
      <th style="padding:8px 8px;text-align:left;font-size:10px;font-weight:800;color:var(--text-dim);white-space:nowrap;min-width:60px">⭐</th>
      ${w.map(z=>`<th style="padding:8px 10px;text-align:center;font-size:10px;font-weight:800;color:${z.start===B?"var(--accent)":"var(--text-dim)"};background:${z.start===B?"var(--accent-dim)":"var(--surface2)"};white-space:nowrap;min-width:100px;border-left:1px solid var(--border)">${z.label}</th>`).join("")}
      <th style="padding:8px 10px;text-align:center;font-size:10px;font-weight:800;color:var(--text-dim);white-space:nowrap;border-left:2px solid var(--border)">TOPLAM</th>
    </tr>`,_=$.map((z,I)=>{const T=d(f,z),D=(T==null?void 0:T.stars)||0,L=((T==null?void 0:T.status)||"not_started")==="td",k=je[D],M=I%2===0?"var(--surface)":"var(--surface2)",j=c(f,z);let P=0;const Y=w.map(O=>{const q=j[O.start],V=(q==null?void 0:q.review_count)||0;P+=V;const Q=O.start===B;if(a){const X=Array.from({length:6},(R,N)=>{const K=N<V,oe=f.replace(/'/g,"\\'"),fe=z.replace(/'/g,"\\'");return`<span class="kt-box${K?" kt-box-on":""}"
              onclick="window._ktToggleBox('${oe}','${fe}','${O.start}',${N+1})"
              style="display:inline-block;width:14px;height:14px;border-radius:3px;border:1.5px solid ${K?k.color:"var(--border2)"};background:${K?k.bg:"transparent"};cursor:pointer;transition:all .15s;margin:1px"
              title="${N+1}. tekrar"
            ></span>`}).join("");return`<td style="padding:6px 10px;border-left:1px solid var(--border);background:${Q?"var(--accent-dim)":M};text-align:center">${X}</td>`}else{const X=Array.from({length:6},(R,N)=>{const K=N<V;return`<span style="display:inline-block;width:12px;height:12px;border-radius:3px;border:1.5px solid ${K?k.color:"var(--border2)"};background:${K?k.bg:"transparent"};margin:1px"></span>`}).join("");return`<td style="padding:6px 10px;border-left:1px solid var(--border);background:${Q?"var(--accent-dim)":M};text-align:center">${X}</td>`}}).join(""),H=L?'<span style="font-size:9px;font-weight:800;color:#3b82f6;background:rgba(59,130,246,.12);border:1px solid rgba(59,130,246,.3);border-radius:4px;padding:1px 5px;margin-left:4px">TD</span>':"";return`<tr style="background:${M}">
        <td style="padding:8px 14px;font-size:12px;font-weight:600;color:var(--text);border-right:1px solid var(--border);position:sticky;left:0;z-index:1;background:${M};white-space:nowrap">
          ${g(z)}${H}
        </td>
        <td style="padding:8px 8px;white-space:nowrap">
          <span style="font-size:11px">${"⭐".repeat(Math.max(0,D))}</span>
        </td>
        ${Y}
        <td style="padding:8px 10px;text-align:center;font-size:12px;font-weight:800;color:${P>0?k.color:"var(--text-dim)"};border-left:2px solid var(--border)">${P||0}</td>
      </tr>`}).join("");return`<div style="overflow-x:auto"><table style="border-collapse:collapse;width:max-content;min-width:100%"><thead>${x}</thead><tbody>${_}</tbody></table></div>`}window._kmSetStars=async function(f,$,w){const B=d(f,$),x=(B==null?void 0:B.status)==="td"&&w<7?"active":null;await p(f,$,w,x);const _="km_"+btoa(encodeURIComponent(f+"|"+$)).replace(/[^a-zA-Z0-9]/g,"");if(document.getElementById(_)){const I=u(f);document.getElementById("khTable").innerHTML=I}h(`${$}: ${je[w].label} ✓`)},window._kmToggleKA=async function(f,$){const w=d(f,$),B=new Date().toISOString(),x=!!(w!=null&&w.ka_date),_={student_id:e,coach_id:y.coachId,subject:f,konu:$,stars:(w==null?void 0:w.stars)||1,status:(w==null?void 0:w.status)||"active",ka_date:x?null:B,updated_at:B},{data:z,error:I}=await b.from("konu_mastery").upsert(_,{onConflict:"student_id,subject,konu"}).select().single();if(I){h("Hata: "+I.message);return}l.konuMastery[e]||(l.konuMastery[e]={}),l.konuMastery[e][f]||(l.konuMastery[e][f]={}),l.konuMastery[e][f][$]=z,document.getElementById("khTable").innerHTML=u(f),h(x?"KA tarihi kaldırıldı":"KA ✓ tamamlandı olarak işaretlendi")},window._kmToggleTD=async function(f,$){const w=d(f,$),B=(w==null?void 0:w.status)==="td",x=B?(w==null?void 0:w.stars)>=7?5:w==null?void 0:w.stars:7;await p(f,$,x,B?"active":"td"),document.getElementById("khTable").innerHTML=r==="mastery"?u(f):v(f),h(B?`${$} tekrar listesine geri döndü`:`${$} → TD ✓`)},window._ktToggleBox=async function(f,$,w,B){const _=c(f,$)[w],I=((_==null?void 0:_.review_count)||0)>=B?B-1:B;if(await m(f,$,w,I),I>0){const T=d(f,$),D=new Date().toISOString(),C={student_id:e,coach_id:y.coachId,subject:f,konu:$,stars:(T==null?void 0:T.stars)||0,status:(T==null?void 0:T.status)||"active",last_review_date:D,review_count:((T==null?void 0:T.review_count)||0)+1,updated_at:D},{data:L}=await b.from("konu_mastery").upsert(C,{onConflict:"student_id,subject,konu"}).select().single();L&&(l.konuMastery[e]||(l.konuMastery[e]={}),l.konuMastery[e][f]||(l.konuMastery[e][f]={}),l.konuMastery[e][f][$]=L)}document.getElementById("khTable").innerHTML=v(f)};function S(){const f=window._khActiveSub||s;document.getElementById("khTable").innerHTML=r==="mastery"?u(f):v(f)}const E=o.map(f=>`<button class="kh-tab" onclick="window._khActiveSub='${f}';document.querySelectorAll('.kh-tab').forEach(b=>{b.style.color='var(--text-mid)';b.style.borderBottom='2px solid transparent';b.style.fontWeight='600'});this.style.color='var(--accent)';this.style.borderBottom='2px solid var(--accent)';this.style.fontWeight='700';window._khRefresh()"
      style="padding:10px 16px;border:none;border-bottom:2px solid ${f===s?"var(--accent)":"transparent"};background:none;font-size:12px;font-weight:${f===s?"700":"600"};color:${f===s?"var(--accent)":"var(--text-mid)"};cursor:pointer;white-space:nowrap;font-family:inherit;transition:all .15s">${f}</button>`).join("");window._khActiveSub=s,window._khRefresh=S,n.innerHTML=`
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
        ${je.slice(1).map(f=>`
          <div style="display:flex;align-items:center;gap:6px;font-size:11px">
            <span style="font-weight:800;color:${f.color}">⭐${f.stars}</span>
            <span style="color:var(--text-mid)">${f.label}</span>
          </div>`).join('<span style="color:var(--border2)">·</span>')}
      </div>
    </details>

    <div style="background:var(--surface);border:1px solid var(--border);border-radius:12px;overflow:hidden;box-shadow:var(--shadow)">
      <div style="display:flex;border-bottom:1px solid var(--border);overflow-x:auto;padding:0 4px">${E}</div>
      <div id="khTable" style="overflow-x:auto;max-height:calc(100vh - 310px);overflow-y:auto">${u(s)}</div>
    </div>`,window._kmSwitchView=function(f){r=f;const $=document.getElementById("kmViewMastery"),w=document.getElementById("kmViewTekrar");f==="mastery"?($.style.background="var(--accent)",$.style.color="#fff",$.style.fontWeight="700",w.style.background="var(--surface)",w.style.color="var(--text-mid)",w.style.fontWeight="600"):(w.style.background="var(--accent)",w.style.color="#fff",w.style.fontWeight="700",$.style.background="var(--surface)",$.style.color="var(--text-mid)",$.style.fontWeight="600"),window._khRefresh()}}function Nt(e){var i,o;l.activeStuId=e;const t=document.getElementById("view-program"),n=((i=l.students.find(s=>s.id===l.activeStuId))==null?void 0:i.name)||"";t.innerHTML=`<button class="back-link" onclick="switchTab('student-detail')">← ${n}</button>`,t.innerHTML+=document.createElement("div").innerHTML,currentTab!=="program"&&ie("program");const a=document.getElementById("tbarTitle");a&&(a.textContent=(((o=l.students.find(s=>s.id===l.activeStuId))==null?void 0:o.name)||"")+" · Program"),Z()}function Va(e){var n;l.activeStuId=e,currentTab!=="exams"&&ie("exams");const t=document.getElementById("tbarTitle");t&&(t.textContent=(((n=l.students.find(a=>a.id===l.activeStuId))==null?void 0:n.name)||"")+" · Denemeler"),Fe()}function Za(e){var n;l.activeStuId=e,currentTab!=="appointments"&&ie("appointments");const t=document.getElementById("tbarTitle");t&&(t.textContent=(((n=l.students.find(a=>a.id===l.activeStuId))==null?void 0:n.name)||"")+" · Randevular"),Oe()}let ve={};async function Ja(e){const t=l.students.find(a=>a.id===e);if(!t)return;l.activeStuId=e,currentTab!=="student-detail"&&ie("student-detail");const n=document.getElementById("view-student-detail");if(n.innerHTML=`<button class="back-link" onclick="openStudentDetail('${e}')">← ${g(t.name)}</button>
    <div style="padding:20px;color:var(--text-dim);font-size:13px">Yükleniyor…</div>`,!ve[e]){const{data:a}=await b.from("student_books").select("*").eq("student_id",e).order("created_at",{ascending:!0});ve[e]=a||[]}Ht(e)}function Ht(e){const t=l.students.find(p=>p.id===e),n=ve[e]||[],a=document.getElementById("view-student-detail"),i=y.role==="coach"||y.role==="developer",o=n.reduce((p,m)=>p+m.total_tests,0),s=n.reduce((p,m)=>p+m.completed_tests,0),r=o>0?Math.round(s/o*100):0,d=r>=75?"var(--green)":r>=40?"var(--accent)":"var(--red)",c=n.length?n.map(p=>{const m=p.total_tests>0?Math.min(100,Math.round(p.completed_tests/p.total_tests*100)):0,u=m>=75?"var(--green)":m>=40?"var(--accent)":"var(--red)";return`<div style="background:var(--surface);border:1px solid var(--border);border-radius:12px;padding:14px 16px;margin-bottom:10px">
      <div style="display:flex;align-items:center;gap:12px">
        <div style="flex:1;min-width:0">
          <div style="font-size:13px;font-weight:700;margin-bottom:7px">${g(p.name)}</div>
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
            <div style="height:100%;width:${r}%;background:${d};border-radius:99px;transition:width .4s"></div>
          </div>
          <span style="font-size:14px;font-weight:800;color:${d};white-space:nowrap">%${r}</span>
        </div>
      </div>
    </div>`:""}
    ${c}`}function Xa(e){document.getElementById("sbModalTitle").textContent="Kaynak Ekle",document.getElementById("sbId").value="",document.getElementById("sbStuId").value=e,document.getElementById("sbName").value="",document.getElementById("sbTotal").value="0",document.getElementById("sbCompleted").value="0",document.getElementById("sbPctPreview").innerHTML="",G("sbModal")}function Qa(e,t){const n=(ve[e]||[]).find(a=>a.id===t);n&&(document.getElementById("sbModalTitle").textContent="Kaynağı Düzenle",document.getElementById("sbId").value=t,document.getElementById("sbStuId").value=e,document.getElementById("sbName").value=n.name,document.getElementById("sbTotal").value=n.total_tests,document.getElementById("sbCompleted").value=n.completed_tests,_n(),G("sbModal"))}function _n(){var o,s;const e=parseInt((o=document.getElementById("sbTotal"))==null?void 0:o.value)||0,t=parseInt((s=document.getElementById("sbCompleted"))==null?void 0:s.value)||0,n=document.getElementById("sbPctPreview");if(!n||!e){n&&(n.innerHTML="");return}const a=Math.min(100,Math.round(t/e*100)),i=a>=75?"var(--green)":a>=40?"var(--accent)":"var(--red)";n.innerHTML=`<div style="display:flex;align-items:center;gap:10px">
    <div style="flex:1;height:8px;background:var(--surface3);border-radius:99px;overflow:hidden">
      <div style="height:100%;width:${a}%;background:${i};border-radius:99px;transition:width .3s"></div>
    </div>
    <span style="font-size:13px;font-weight:800;color:${i}">%${a}</span>
  </div>`}async function ei(){const e=document.getElementById("sbName").value.trim();if(!e)return h("Kaynak adı girin!");const t=Math.max(0,parseInt(document.getElementById("sbTotal").value)||0),n=Math.min(t,Math.max(0,parseInt(document.getElementById("sbCompleted").value)||0)),a=document.getElementById("sbStuId").value,i=document.getElementById("sbId").value,o={name:e,total_tests:t,completed_tests:n};if(i){const{error:s}=await b.from("student_books").update(o).eq("id",i);if(s)return h("Hata: "+s.message);const r=(ve[a]||[]).find(d=>d.id===i);r&&Object.assign(r,o),h("Güncellendi ✓")}else{const{data:s,error:r}=await b.from("student_books").insert({...o,student_id:a,coach_id:y.coachId}).select().single();if(r)return h("Hata: "+r.message);ve[a]||(ve[a]=[]),ve[a].push(s),h("Kaynak eklendi ✓")}U("sbModal"),Ht(a)}async function ti(e,t){if(!await ae("Bu kaynağı silmek istiyor musunuz?"))return;const{error:n}=await b.from("student_books").delete().eq("id",t);if(n)return h("Hata: "+n.message);ve[e]=(ve[e]||[]).filter(a=>a.id!==t),Ht(e),h("Silindi ✓")}function Sn(){var i,o;const e=document.getElementById("view-profile"),t=y.dbUser,n=((t==null?void 0:t.full_name)||"?").split(" ").map(s=>s[0]).join("").slice(0,2).toUpperCase(),a=y.role==="coach"?"Koç":y.role==="developer"?"Developer":"Öğrenci";e.innerHTML=`
    <div style="max-width:480px;margin:0 auto">
      <!-- Mini user card -->
      <div style="display:flex;align-items:center;gap:14px;padding:20px 24px;background:var(--surface);border:1px solid var(--border);border-radius:12px;margin-bottom:20px;box-shadow:var(--shadow)">
        <div style="width:48px;height:48px;border-radius:12px;background:var(--accent);display:flex;align-items:center;justify-content:center;font-size:18px;font-weight:800;color:#fff;flex-shrink:0">${n}</div>
        <div>
          <div style="font-size:16px;font-weight:800;letter-spacing:-.2px">${g((t==null?void 0:t.full_name)||"")}</div>
          <div style="font-size:12px;color:var(--text-dim);margin-top:2px">${a} · ${g(((i=l.workspace)==null?void 0:i.brand_name)||"Rostrum Akademi")}</div>
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
        ${y.role==="coach"||y.role==="developer"?`<div>
          <label style="font-size:11px;font-weight:700;color:var(--text-dim);text-transform:uppercase;letter-spacing:.5px;display:block;margin-bottom:6px">Akademi Adı</label>
          <input id="pf_brand" value="${g(((o=l.workspace)==null?void 0:o.brand_name)||"")}" style="width:100%;padding:9px 12px;background:var(--surface2);border:1.5px solid var(--border);border-radius:8px;font-size:13px;font-family:inherit;color:var(--text);outline:none;box-sizing:border-box" onfocus="this.style.borderColor='var(--accent)'" onblur="this.style.borderColor='var(--border)'">
        </div>`:""}
        <div>
          <label style="font-size:11px;font-weight:700;color:var(--text-dim);text-transform:uppercase;letter-spacing:.5px;display:block;margin-bottom:6px">Yeni Şifre <span style="font-weight:400;text-transform:none">(boş bırakılırsa değişmez)</span></label>
          <input type="password" id="pf_pass" placeholder="••••••••" style="width:100%;padding:9px 12px;background:var(--surface2);border:1.5px solid var(--border);border-radius:8px;font-size:13px;font-family:inherit;color:var(--text);outline:none;box-sizing:border-box" onfocus="this.style.borderColor='var(--accent)'" onblur="this.style.borderColor='var(--border)'">
        </div>
        <button class="btn btn-accent" onclick="saveProfile()" style="align-self:flex-start;padding:9px 20px">Kaydet</button>
      </div>
    </div>`}async function ni(){var i,o;const e=document.getElementById("pf_name").value.trim(),t=document.getElementById("pf_pass").value,n=(o=(i=document.getElementById("pf_brand"))==null?void 0:i.value)==null?void 0:o.trim();if(!e)return h("Ad boş olamaz!");const a={full_name:e};t&&(a.password_hash=await Le(t)),await b.from("users").update(a).eq("id",y.dbUser.id),n&&(y.role==="coach"||y.role==="developer")&&(await b.from("workspaces").update({brand_name:n}).eq("coach_id",y.coachId),l.workspace={...l.workspace||{},brand_name:n},document.querySelector(".sb-logo-text").textContent=n),y.dbUser={...y.dbUser,full_name:e},document.getElementById("sbName").textContent=e,h("Profil kaydedildi ✓")}function In(){var n;const e=document.getElementById("view-settings"),t=document.documentElement.getAttribute("data-theme")==="dark";e.innerHTML=`
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
            ${sa.map(a=>`<div class="ac-dot" onclick="applyAccent('${a.val}','${a.dim}')" style="background:${a.val}" title="${a.name}"></div>`).join("")}
          </div>
        </div>
      </div>
      
      ${y.role==="developer"?`
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

      ${y.role==="coach"||y.role==="developer"?(()=>{var v;const a=y.dbUser,i=(a==null?void 0:a.plan)||"trial",o=i==="trial"?"Deneme Dönemi":i==="pro"?"Pro Üyelik":i==="premium"?"Premium Üyelik":i.charAt(0).toUpperCase()+i.slice(1),s=i==="trial"?"#f0a500":"#3ecf8e";let r=null;a!=null&&a.trial_ends_at?r=new Date(a.trial_ends_at):a!=null&&a.created_at&&(r=new Date(new Date(a.created_at).getTime()+14*24*60*60*1e3));const c=r?Math.max(0,Math.ceil((r-new Date)/(1e3*60*60*24))):null,p=S=>S?S.toLocaleDateString("tr-TR",{day:"numeric",month:"long",year:"numeric"}):"—",m=c===null?"#888":c>7?"#3ecf8e":c>3?"#f0a500":"#ef4444",u=((v=l.students)==null?void 0:v.length)||0;return`
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
          <div><div class="setting-item-lbl">Kullanıcı Adı</div><div class="setting-item-sub">${g(((n=y.dbUser)==null?void 0:n.username)||"")}</div></div>
          <button class="btn btn-ghost btn-sm" onclick="switchTab('profile')">Düzenle</button>
        </div>
        <div class="setting-item">
          <div><div class="setting-item-lbl">Oturumu Kapat</div></div>
          <button class="btn btn-danger btn-sm" onclick="doLogout()">Çıkış</button>
        </div>
      </div>
    </div>`}function ai(){const e=document.getElementById("geminiApiKeyInput").value.trim();e?(localStorage.setItem("gemini_api_key",e),h("API Anahtarı kaydedildi ✓")):(localStorage.removeItem("gemini_api_key"),h("API Anahtarı kaldırıldı."))}let ze="";function Z(){const e=document.getElementById("view-program"),t=l.students.find(d=>d.id===l.activeStuId),n=(t==null?void 0:t.weekStart)??0,a=te(l.weekOffset,n),i=J(a,6),o=me(),s=localStorage.getItem("ra_program_mode")||"weekly";let r="";for(let d=0;d<7;d++){const c=J(a,d),p=F(c),m=p===o,u=`${l.activeStuId}_${p}`,v=l.tasks[u]||[],S=v.reduce((x,_)=>x+Number(_.duration),0),E=v.reduce((x,_)=>x+(_.done?Number(_.duration):0),0),f=DAYS_TR[(n+d)%7],$=[...v];s==="hourly"&&$.sort((x,_)=>x.start_time&&!_.start_time?-1:!x.start_time&&_.start_time?1:x.start_time&&_.start_time?x.start_time.localeCompare(_.start_time):0);const w=$.map(x=>{const _=v.indexOf(x),z=x.start_time?`<div class="tc-time-badge">🕒 ${x.start_time}</div>`:"";return`
        <div data-task-id="${x._id}" class="task-card task-${x.type} ${x.done?"done":""} ${x.start_time?"hourly-card":""}" onclick="openTaskDetail('${p}',${_},'coach')" style="cursor:pointer">
          <div class="tc-check ${x.done?"on":""}" onclick="event.stopPropagation();toggleTask('${p}',${_})"></div>
          <div class="tc-body">
            ${z}
            <div class="tc-type">${Qe(x.type)}${x.exam?" · "+x.exam:""}</div>
            <div class="tc-subject">${g(x.subject)}</div>
            <div class="tc-meta">${x.duration} dk</div>
          </div>
          <button class="tc-menu-btn" onclick="event.stopPropagation();showTaskMenu('${p}',${_},this)">⋯</button>
        </div>`}).join(""),B=["Pzt","Sal","Çar","Per","Cum","Cmt","Paz"][(n+d)%7];r+=`<div class="day-col ${m?"today":""}">
      <div class="day-hd">
        <div>
          <div class="day-name-lbl">${B}</div>
          <div class="day-num">${c.getDate()}</div>
        </div>
        <div style="display:flex;flex-direction:column;align-items:flex-end;gap:4px">
          <span class="day-badge" style="font-size:8.5px">${We(E)} / ${We(S)}</span>
          ${_clipboardTask?`<button class="btn btn-ghost btn-xs" onclick="pasteTaskFromClipboard('${p}')" style="font-size:9px;color:var(--accent);border-color:rgba(240,165,0,.3);background:var(--accent-dim);padding:2px 6px">Yapıştır</button>`:""}
        </div>
      </div>
      <div class="day-tasks-list">${w||""}</div>
      <button class="add-day-btn" onclick="openTaskModal('${p}','${f}')" ${l.activeStuId?"":"disabled"}>+ Görev Ekle</button>
    </div>`}e.innerHTML=`
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
    <div class="week-grid">${r}</div>`}function ii(e){l.activeStuId=e||null,Xe(),Z()}function oi(e){l.weekOffset+=e,Xe(),Z()}function si(){l.weekOffset=0,Xe(),Z()}function ri(e){localStorage.setItem("ra_program_mode",e),y.role==="student"?_e():Z()}window.setProgramMode=ri;(()=>{const e=document.createElement("style");e.textContent=`
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
  `,document.head.appendChild(e)})();let re=[];function li(){if(!l.activeStuId)return h("Önce öğrenci seçin");const e=l.students.find(i=>i.id===l.activeStuId),t=(e==null?void 0:e.weekStart)??0,n=te(l.weekOffset,t);re=[];let a="";for(let i=0;i<7;i++){const o=J(n,i),s=F(o);DAYS_TR[(t+i)%7];const r=(l.tasks[`${l.activeStuId}_${s}`]||[]).length>0,d=["Pzt","Sal","Çar","Per","Cum","Cmt","Paz"][(t+i)%7];a+=`<button class="day-sel-btn" id="dsbtn_${i}" data-ds="${s}" onclick="toggleDaySel(${i},'${s}')">
      <div>${d}</div>
      <div style="font-size:14px;font-weight:800">${o.getDate()}</div>
      ${r?'<div style="font-size:9px;color:var(--accent);margin-top:2px">●</div>':'<div style="font-size:9px;opacity:0">·</div>'}
    </button>`}document.getElementById("daySelectorGrid").innerHTML=a,G("clearWeekModal")}function di(e,t){const n=document.getElementById("dsbtn_"+e),a=re.indexOf(t);a===-1?(re.push(t),n.classList.add("sel")):(re.splice(a,1),n.classList.remove("sel"))}function ci(){const e=document.querySelectorAll(".day-sel-btn");re.length===7?(re=[],e.forEach(t=>t.classList.remove("sel"))):(re=[],e.forEach((t,n)=>{re.push(t.dataset.ds),t.classList.add("sel")}))}async function pi(){if(!re.length)return h("Önce gün seçin");if(await ae(`${re.length} günün görevleri silinsin mi?`)){A(!0,"Siliniyor...");for(const e of re)await b.from("tasks").delete().eq("student_id",l.activeStuId).eq("date",e),delete l.tasks[`${l.activeStuId}_${e}`];A(!1),be(),U("clearWeekModal"),Z(),h(`${re.length} gün temizlendi ✓`)}}const Ve={"Dil Bilgisi":["Sözcükte Anlam","Cümlede Anlam","Ses Bilgisi","Yazım Kuralları","Noktalama İşaretleri","Sözcükte Yapı","İsim","Sıfat","Zamir","Zarf","İsim-Sıfat Tamlamaları","Edat-Bağlaç-Ünlem","Fiiller – Fiil Çekimleri – Fiillerde Zaman Kayması","Ek Fiil – Ek Eylem","Fiilde Çatı","Fiilimsiler","Cümlenin Öğeleri","Cümle Türleri","Anlatım Bozuklukları"],"TYT Matematik":["Sayılar ve Basamak","Bölünebilme","EBOB-EKOK","Kesirler ve Ondalıklı Sayılar","Mutlak Değer","Üslü Sayılar","Köklü Sayılar","Oran-Orantı","Problemler – Yaş-İşçi-Havuz","Problemler – Kar-Zarar-Yüzde","Problemler – Hareket","Problemler – Karışım","Birinci Dereceden Denklemler","Kümeler","Mantık","Fonksiyonlar","Polinomlar","İkinci Dereceden Denklemler","Permütasyon-Kombinasyon","Olasılık","İstatistik ve Veri"],"AYT Matematik":["Polinomlar","Karmaşık Sayılar","Logaritma","Trigonometri","Diziler","Limit ve Süreklilik","Türev","İntegral","Matrisler ve Determinant"],Geometri:["Doğruda Açı","Üçgende Açı ve Kenar","Üçgende Alan","Üçgende Benzerlik","Özel Üçgenler (Pisagor)","Dörtgenler","Dörtgende Alan","Çember ve Daire","Çemberde Açı","Analitik Geometri – Nokta ve Doğru","Analitik Geometri – Çember","Katı Cisimler","Uzay Geometrisi"],"TYT Fizik":["Fizik Bilimine Giriş","Madde ve Özellikleri","Basınç","Kaldırma Kuvveti","Isı Sıcaklık Genleşme","Hareket","Newton Hareket Yasaları","İş Güç Enerji","Elektrik","Manyetizma","Optik","Dalgalar"],"AYT Fizik":["Vektörler","Bağıl ve Bileşik Hareket","Newton'ın Hareket Yasaları","Sabit İvmeli Hareket","Tek Boyutta Atışlar","İki Boyutta Atışlar","Enerji","İtme ve Momentum","Tork ve Denge","Kütle ve Ağırlık Merkezi","Basit Makineler","Elektriksel Kuvvet ve Elektrik Alan","Elektriksel Potansiyel Enerji","Düzgün Elektrik Alan ve Sığa","Manyetik Alan","Manyetik Kuvvet","Manyetik İndüksiyon","Alternatif Akım ve Transformatörler","Düzgün Çembersel Hareket","Eylemsizlik Momenti ve Açısal Momentum","Genel Çekim Yasası ve Kepler","Basit Harmonik Hareket","Dalga Mekaniği","Elektromanyetik Dalgalar","Atom Modelleri ve Atomun Yapısı","Büyük Patlama ve Atom Altı Parçacıklar","Radyoaktivite","Özel Görelilik Teorisi","Modern Fizik"],"TYT Kimya":["Kimyanın Sembolik Dili","Atom Modelleri","Periyodik Cetvel","Etkileşimler","Maddenin Halleri","Kimyanın Temel Kanunları","Mol Kavramı","Kimyasal Hesaplamalar","Kimyasal Tepkime Türleri","Karışımlar","Asitler ve Bazlar","Tuzlar","Doğa ve Kimya","Kimya Her Yerde"],"AYT Kimya":["Modern Atom","Gazlar","Sıvı Çözeltiler ve Çözünürlük","Tepkimelerde Hız","Tepkimelerde Denge","Sulu Çözelti Dengeleri","Kimya ve Elektrik","Karbon Kimyası","Organik Bileşikler","Enerji Kaynakları"],"TYT Biyoloji":["Canlıların Temel Bileşenleri","İnorganik Bileşikler","Karbohidratlar","Lipitler (Yağlar)","Proteinler","Hormonlar","Vitaminler","Enzimler","Nükleik Asitler","DNA-RNA","ATP Metabolizma","Hücre Organelleri","Hücre Zarı Madde Geçişleri","Ekoloji","Güncel Çevre Sorunları","Canlıların Sınıflandırılması","Hücre Bölünmeleri","Mitoz","Mayoz","Kalıtım"],"AYT Biyoloji":["Sinir Sistemi","Endokrin Sistemi","Duyu Organları","Destek Hareket Sistemi","Dolaşım Sistemi","Bağışıklık Sistemi","Solunum Sistemi","Üriner Sistemi","Üreme Sistemi","Komünite Ekolojisi","Popülasyon Ekolojisi","Genden Proteine","Enerji Dönüşümleri","Bitki Biyolojisi","Canlı ve Çevre"],"AYT Edebiyat":["Güzel Sanatlar ve Edebiyat","Coşku ve Heyecanı Dile Getiren Metinler (Şiir)","Olay Çevresinde Oluşan Edebi Metinler","Destan Dönemi Türk Edebiyatı","İslamiyet Kabulü İlk Edebi Ürünler","Divan Edebiyatı","Halk Edebiyatı","Tanzimat Edebiyatı","Servet-i Fünun Edebiyatı","Fecr-i Ati Edebiyatı","Milli Edebiyat","Cumhuriyet Dönemi Türk Edebiyatı","Edebi Akımlar"],"Tarih (TYT-AYT)":["Tarih ve Zaman","İnsanlığın İlk Dönemleri","Orta Çağ'da Dünya","İlk ve Orta Çağlarda Türk Dünyası","İslam Medeniyetinin Doğuşu","İlk Türk-İslam Devletleri","Beylikten Devlete Osmanlı","Dünya Gücü Osmanlı","Osmanlı Kültür ve Medeniyeti","En Uzun Yüzyıl (Osmanlı)","XX. Yüzyıl Başlarında Osmanlı","I. Dünya Savaşı","Milli Mücadele Hazırlık Dönemi","Kurtuluş Savaşı ve Antlaşmalar","Atatürk İlke ve İnkılapları","Atatürk Dönemi Türk Dış Politikası"],"Coğrafya (TYT-AYT)":["Doğa ve İnsan","Dünya'nın Şekli ve Hareketleri","Coğrafi Konum","Harita Bilgisi","Atmosfer ve İklim","Dünya'nın Tektonik Yapısı","İç ve Dış Kuvvetler","Nüfus ve Yerleşme","Ekonomik Faaliyetler","Bölgeler ve Ülkeler","Çevre ve Toplum","Ekosistem ve Madde Dönüşü","Türkiye'de Nüfus ve Yerleşme","Türkiye'nin Coğrafi Konumu ve Bölgeleri","Küresel Ortam: Bölgeler ve Ülkeler"],"Felsefe Grubu & Din":["Felsefeyi Tanıma","Bilgi Felsefesi","Varlık Felsefesi","Ahlak Felsefesi","Sanat Felsefesi","Din Felsefesi","Siyaset Felsefesi","Bilim Felsefesi","Psikolojiye Giriş","Sosyolojiye Giriş","Klasik Mantık","Kur'an-ı Kerim ve Anlamı","İnanç ve İbadet","Ahlak ve Değerler","Hz. Muhammed ve Gençlik","İslam Medeniyeti ve Bilim"],"YDT İngilizce":["Grammar (Dil Bilgisi)","Vocabulary (Kelime Bilgisi)","Reading Comprehension (Okuduğunu Anlama)","Sentence Completion (Cümle Tamamlama)","Dialogue Completion (Diyalog Tamamlama)","Translation (Çeviri)","Restatement (Eş Anlamlı Cümle)","Paragraph Completion (Paragraf Tamamlama)","Irrelevant Sentence (Anlamı Bozan Cümle)"]};function mi(e,t){const n=`${e||""} ${t||""}`.trim();return Ve[n]||Ve[t||""]||null}let ce=[];function ui(e,t){const n=ce.indexOf(t);n===-1?(ce.push(t),e.style.borderColor="var(--red)",e.style.background="rgba(255,92,122,.12)",e.style.color="var(--red)"):(ce.splice(n,1),e.style.borderColor="var(--border)",e.style.background="var(--surface)",e.style.color="var(--text-mid)")}window.toggleKonuChip=ui;let ge=[];function gi(){const e=document.getElementById("tmNewResourceToggle").checked;zn(e)}function zn(e){document.getElementById("tmSearchSection").style.display=e?"none":"",document.getElementById("tmManualSection").style.display=e?"":"none",document.getElementById("tmTestWrap").style.display="none";const t=document.getElementById("tmToggleSlider");t&&(t.style.background=e?"var(--accent)":"var(--border)",t.style.setProperty("--tw-after-x",e?"16px":"0px"))}function vi(){const e=document.getElementById("tmManualTestInput"),t=e.value.trim();t&&(ge.push(t),e.value="",Bn())}function fi(e){ge.splice(e,1),Bn()}function Bn(){const e=document.getElementById("tmManualTestChips");e&&(e.innerHTML=ge.map((t,n)=>`
    <span style="display:inline-flex;align-items:center;gap:5px;background:var(--accent-dim);border:1px solid rgba(240,165,0,.3);color:var(--accent);padding:4px 10px;border-radius:99px;font-size:12px;font-weight:600">
      ${g(t)}
      <button onclick="removeManualTest(${n})" style="background:none;border:none;cursor:pointer;color:var(--accent);font-size:14px;padding:0;line-height:1">×</button>
    </span>`).join(""))}function yi(e,t){if(!l.activeStuId)return h("Önce öğrenci seçin");ze=e,_editingTaskId=null,W=null,document.querySelector("#taskModal h2").innerHTML=`Görev Ekle — <span id="tmDay">${t}</span>`,document.querySelector("#taskModal .btn-accent").textContent="Programa Ekle",document.getElementById("tmSubjectFree").value="",document.getElementById("tmDuration").value="60",document.getElementById("tmStartTime").value="",document.getElementById("tmNote").value="",document.getElementById("tmExam").value="",document.getElementById("tmType").value="deneme",document.getElementById("tmSubjectSel").style.display="none",document.getElementById("tmSubjectFree").style.display="",document.getElementById("soruBankasiWrap").style.display="none",document.getElementById("tmBookSearch").value="",document.getElementById("tmBookVal").value="",document.getElementById("tmBookList").style.display="none",document.getElementById("tmTestWrap").style.display="none";const n=document.getElementById("tmTestSummary");n&&(n.style.display="none");const a=document.getElementById("tmNewResourceToggle");a&&(a.checked=!1,zn(!1)),document.getElementById("tmManualKaynak").value="",document.getElementById("tmManualTestInput").value="",document.getElementById("tmManualTestChips").innerHTML="",ge=[],An(),G("taskModal")}let se={},Ye=!1;async function Mn(){if(Ye)return;const{data:e}=await b.from("resources").select("*").eq("active",!0).order("name");e&&(e.forEach(t=>{let n=[t.subject];t.subject==="Tarih"?n.push("Tarih1","Tarih2"):t.subject==="Coğrafya"?n.push("Coğrafya1","Coğrafya2"):(t.subject==="Din Kültürü"||t.subject==="Din")&&(n=["Din","Din Kültürü"]),n.forEach(a=>{const i=`${t.exam_type}_${a}`;se[i]||(se[i]=[]),se[i].push({name:t.name,yil:t.year,testler:Array.isArray(t.tests)?t.tests:[],publisher:t.publisher})})}),Ye=!0)}let Ue=[],W=null;function Yt(){const e=document.getElementById("tmExam").value,t=document.getElementById("tmType").value,n=document.getElementById("tmSubjectSel"),a=document.getElementById("tmSubjectFree");W=null,document.getElementById("tmBookVal").value="",document.getElementById("tmBookSearch").value="",document.getElementById("tmBookList").innerHTML="",document.getElementById("tmBookList").style.display="none",document.getElementById("tmTestWrap").style.display="none";const i=document.getElementById("tmTestSummary");i&&(i.style.display="none"),e&&SUBJECT_MAP[e]?(n.innerHTML=SUBJECT_MAP[e].map(r=>`<option value="${r}">${r}</option>`).join(""),n.style.display="",a.style.display="none"):(n.style.display="none",a.style.display="");const o=(t==="soru"||t==="konu")&&e;document.getElementById("soruBankasiWrap").style.display=o?"":"none";const s=document.getElementById("tmBookSearch");s&&(s.placeholder=t==="konu"?"Hoca veya playlist ara...":"Kitap veya yayınevi ara..."),Ye=!1,se={},o&&ft("")}function xi(){W=null,document.getElementById("tmBookVal").value="",document.getElementById("tmBookSearch").value="",document.getElementById("tmBookList").style.display="none",document.getElementById("tmTestWrap").style.display="none";const e=document.getElementById("tmType").value,t=document.getElementById("tmExam").value;Ye=!1,se={},(e==="soru"||e==="konu")&&t&&ft("")}document.getElementById("tmType").addEventListener("change",Yt);async function ft(e){const t=document.getElementById("tmExam").value,n=document.getElementById("tmSubjectSel").value||"",a=document.getElementById("tmType").value,i=document.getElementById("tmBookList"),o=a==="konu"?"playlist":"book";if(!Ye){i.style.display="block",i.innerHTML='<div style="padding:12px;font-size:12px;color:var(--text-dim);text-align:center">⏳ Yükleniyor...</div>';const{data:c}=await b.from("resources").select("*").eq("active",!0).eq("resource_type",o).order("name");se={},c&&c.forEach(p=>{let m=[p.subject];p.subject==="Tarih"?m.push("Tarih1","Tarih2"):p.subject==="Coğrafya"?m.push("Coğrafya1","Coğrafya2"):(p.subject==="Din Kültürü"||p.subject==="Din")&&(m=["Din","Din Kültürü"]),m.forEach(u=>{const v=`${p.exam_type}_${u}`;se[v]||(se[v]=[]),se[v].push({name:p.name,yil:p.year,testler:Array.isArray(p.tests)?p.tests:[],publisher:p.publisher,resource_type:p.resource_type||"book"})})}),Ye=!0}const s=`${t}_${n}`,r=se[s]||[],d=e.toLowerCase();if(Ue=r.filter(c=>{var p;return!d||c.name.toLowerCase().includes(d)||((p=c.publisher)==null?void 0:p.toLowerCase().includes(d))}),!e&&!Ue.length){i.style.display="none";return}if(!Ue.length){i.style.display="block",i.innerHTML='<div style="padding:12px;font-size:12px;color:var(--text-dim);text-align:center">Kaynak bulunamadı</div>';return}i.style.display="block",i.innerHTML=Ue.map((c,p)=>`
    <div onclick="selectBook(${p})" style="padding:10px 14px;cursor:pointer;border-bottom:1px solid var(--border);display:flex;justify-content:space-between;align-items:center;transition:background .15s"
      onmouseover="this.style.background='var(--surface3)'" onmouseout="this.style.background=''">
      <div>
        <div style="font-size:13px;font-weight:700">${g(c.name)}</div>
        <div style="font-size:10px;color:var(--text-dim);margin-top:2px">${g(c.publisher||"")} · ${c.testler.length} test</div>
      </div>
      <span style="font-size:10px;font-weight:700;background:var(--green-dim);color:var(--green);padding:2px 7px;border-radius:99px;margin-left:8px;flex-shrink:0">${c.yil}</span>
    </div>`).join("")}function bi(){const e=document.getElementById("tmBookSearch").value;if(e.length===0){document.getElementById("tmBookList").style.display="none";return}ft(e)}function hi(e){W=Ue[e],document.getElementById("tmBookVal").value=W.name,document.getElementById("tmBookSearch").value=W.name,document.getElementById("tmBookList").style.display="none",Kt(),document.getElementById("tmTestWrap").style.display=""}function Kt(){if(!W)return;const e=document.getElementById("tmTestList"),t=W.resource_type==="playlist",n=W.name||"";e.innerHTML=W.testler.map((a,i)=>{const o=a.label||a,s=o.trim()===""||o.trim()===n.trim()?`Ders ${i+1}`:o,r=a.soru||0,d=a.url||"";a.topic;const c=fa(o),p=c==="done"?"ti-status-done":c==="pending"?"ti-status-pending":"",m=c==="done"?'<span class="ti-badge ti-badge-done">✓ Tamamlandı</span>':c==="pending"?'<span class="ti-badge ti-badge-pending">⏳ Atandı</span>':"";return t?`<label class="${p}" style="display:flex;align-items:center;gap:8px;padding:8px 10px;cursor:pointer;transition:background .1s;border-bottom:1px solid var(--border)"
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
        ${d?`<a href="${g(d)}" target="_blank" onclick="event.stopPropagation()"
          style="display:flex;align-items:center;gap:3px;font-size:11px;font-weight:700;background:#cc000022;color:#ff5555;border:1px solid #aa222233;padding:5px 10px;border-radius:7px;text-decoration:none;flex-shrink:0;white-space:nowrap"
          onmouseover="this.style.background='#cc000044'" onmouseout="this.style.background='#cc000022'">▶ İzle</a>`:'<span style="font-size:10px;color:var(--text-dim);flex-shrink:0;padding:5px 8px;border:1px solid var(--border);border-radius:7px">Linksiz</span>'}
      </label>`:`<label class="${p}" style="display:flex;align-items:center;gap:8px;padding:7px 10px;border-radius:7px;cursor:pointer;transition:background .1s"
        onmouseover="this.style.background='var(--surface3)'" onmouseout="this.style.background=''">
        <input type="checkbox" id="test_${i}" value="${i}" onchange="updateTestSummary()"
          style="width:15px;height:15px;accent-color:var(--accent);cursor:pointer;flex-shrink:0">
        <div style="flex:1;display:flex;align-items:center;gap:6px;flex-wrap:wrap">
          <span style="font-size:12px;font-weight:600">${g(s)}</span>
          ${m}
        </div>
        ${r>0?`<span style="font-size:10px;color:var(--text-dim);background:var(--surface3);padding:2px 7px;border-radius:99px;flex-shrink:0">${r} soru</span>`:""}
      </label>`}).join(""),Ke()}function ki(){document.querySelectorAll("#tmTestList input[type=checkbox]").forEach(e=>e.checked=!0),Ke()}function wi(){document.querySelectorAll("#tmTestList input[type=checkbox]").forEach(e=>e.checked=!1),Ke()}function Ke(){if(!W)return;const e=[...document.querySelectorAll("#tmTestList input[type=checkbox]:checked")],t=document.getElementById("tmTestSummary"),n=document.getElementById("tmTestSummaryText"),a=document.getElementById("tmSuggestedDuration"),i=document.getElementById("tmSpeedRow"),o=W.resource_type==="playlist";if(e.length===0){t.style.display="none";return}let s=0,r=0;e.forEach(m=>{const u=parseInt(m.value),v=W.testler[u];o?r+=(v==null?void 0:v.soru)||0:s+=(v==null?void 0:v.soru)||0});const d=document.querySelector("[data-mspeed].speed-active"),c=d?parseFloat(d.dataset.mspeed):1;let p=0;if(o)p=r>0?Math.ceil(r/c):0,n.textContent=`${e.length} video · ${r} dk`,i&&(i.style.display="");else{const m=document.getElementById("tmExam").value,u=document.getElementById("tmSubjectSel").value||"",v=`${l.activeStuId}_${m}_${u}`,S=pt[v]||180;p=s>0?Math.ceil(s*S/60):0,n.textContent=`${e.length} test · ${s} soru${p>0?" · Önerilen: "+p+" dk":""}`,i&&(i.style.display="none")}a.style.display=p>0?"":"none",st=p,a.setAttribute("data-dur",p),t.style.display="",p>0&&(document.getElementById("tmDuration").value=p)}function $i(e){document.querySelectorAll("[data-mspeed]").forEach(t=>{const n=t.dataset.mspeed===e;t.classList.toggle("speed-active",n),t.style.borderColor=n?"var(--accent)":"var(--border)",t.style.background=n?"var(--accent-dim)":"var(--surface2)",t.style.color=n?"var(--accent)":"var(--text-mid)"}),Ke()}let st=0;function Ti(){st>0&&(document.getElementById("tmDuration").value=st,h("Süre uygulandı: "+st+" dk"))}let pt={};async function An(){if(!l.activeStuId)return;const{data:e}=await b.from("student_speeds").select("*").eq("student_id",l.activeStuId);pt={},(e||[]).forEach(t=>{const n=`${t.student_id}_${t.exam_type}_${t.subject}`;pt[n]=t.secs_per_question})}async function Dn(e,t,n,a){const{data:i}=await b.from("student_speeds").select("id").eq("student_id",e).eq("exam_type",t).eq("subject",n).single();i?await b.from("student_speeds").update({secs_per_question:a,updated_at:new Date().toISOString()}).eq("id",i.id):await b.from("student_speeds").insert({student_id:e,coach_id:y.coachId,exam_type:t,subject:n,secs_per_question:a}),pt[`${e}_${t}_${n}`]=a,h("Hız kaydedildi ✓")}document.getElementById("tmType").addEventListener("change",Yt);let $t=!1;async function Ei(){var n;if($t)return;$t=!0;const e=document.querySelector('#taskModal button[onclick*="saveTask"]'),t=e?e.textContent:"Programa Ekle";e&&(e.disabled=!0,e.textContent="Kaydediliyor...");try{const a=document.getElementById("tmType").value,i=document.getElementById("tmSubjectSel"),o=document.getElementById("tmSubjectFree"),s=document.getElementById("tmExam").value,r=parseInt(document.getElementById("tmDuration").value)||60,d=document.getElementById("tmStartTime").value||null,c=document.getElementById("tmNote").value.trim();if((n=document.getElementById("tmNewResourceToggle"))==null?void 0:n.checked){const w=document.getElementById("tmManualKaynak").value.trim();if(!w)return h("Kaynak adı girin!");const B=i.style.display!=="none"?i.value:o.value.trim(),x=B?`${B} - ${w}`:w,_=ge.map(C=>({label:C,url:"",soru:0}));let z=c;ge.length>0&&(z=`${ge.length} test: ${ge.slice(0,3).join(", ")}${ge.length>3?` +${ge.length-3} daha`:""}`);const I={student_id:l.activeStuId,coach_id:y.coachId,date:ze,type:a,exam_type:s,subject:x,duration:r,note:z,done:!1,task_items:_.length>0?_:null,start_time:d};A(!0);const{error:T}=await b.from("tasks").insert(I);if(A(!1),T)return h("Hata: "+T.message);const D=`${l.activeStuId}_${ze}`;l.tasks[D]||(l.tasks[D]=[]),l.tasks[D].push({type:a,exam:s,subject:x,duration:r,note:z,done:!1,task_items:I.task_items,start_time:d}),U("taskModal"),Z(),h("Görev eklendi ✓");return}const m=document.getElementById("tmBookVal").value,u=(W==null?void 0:W.resource_type)==="playlist";let v="";if((a==="soru"||a==="konu")&&m){const w=i.style.display!=="none"?i.value:"";v=w?`${w} - ${m}`:`${m}`}else v=(i.style.display!=="none"?i.value:o.value).trim();if(!v)return h("Ders adı girin!");const S=[...document.querySelectorAll("#tmTestList input[type=checkbox]:checked")];let E=c,f=[];if(S.length>0&&W){const w=S.map(B=>{const x=W.testler[parseInt(B.value)];return(x==null?void 0:x.label)||x||""});if(f=S.map(B=>{const x=W.testler[parseInt(B.value)];return{label:(x==null?void 0:x.label)||x||"",url:(x==null?void 0:x.url)||"",soru:(x==null?void 0:x.soru)||0}}),u){const B=x=>x.length>14?x.slice(0,13)+"…":x;E=`${w.length} video: ${w.slice(0,5).map(B).join(", ")}${w.length>5?` +${w.length-5}`:""}`}else{const B=x=>x.length>14?x.slice(0,13)+"…":x;E=`${w.length} test: ${w.slice(0,5).map(B).join(", ")}${w.length>5?` +${w.length-5}`:""}`}}const $={student_id:l.activeStuId,coach_id:y.coachId,date:ze,type:a,exam_type:s,subject:v,duration:r,note:E,done:!1,task_items:f.length>0?f:null,start_time:d};if(_editingTaskId){A(!0);const{error:w}=await b.from("tasks").update({type:$.type,exam_type:$.exam_type,subject:$.subject,duration:$.duration,note:$.note,task_items:$.task_items,start_time:$.start_time}).eq("id",_editingTaskId);if(A(!1),w)return h("Hata: "+w.message);const B=`${l.activeStuId}_${ze}`;if(l.tasks[B]){const x=l.tasks[B].findIndex(_=>_._id===_editingTaskId);x!==-1&&(l.tasks[B][x]={_id:_editingTaskId,type:$.type,exam:$.exam_type,subject:$.subject,duration:$.duration,note:$.note,done:l.tasks[B][x].done,student_note:l.tasks[B][x].student_note||"",task_items:$.task_items,start_time:$.start_time})}U("taskModal"),Z(),h("Görev güncellendi ✓"),_editingTaskId=null}else{const{data:w,error:B}=await b.from("tasks").insert($).select().single();if(B)return h("Hata: "+B.message);const x=`${l.activeStuId}_${ze}`;l.tasks[x]||(l.tasks[x]=[]),l.tasks[x].push({_id:w.id,type:w.type,exam:w.exam_type,subject:w.subject,duration:w.duration,note:w.note,done:!1,student_note:"",task_items:w.task_items||null,start_time:w.start_time}),U("taskModal"),Z(),h("Görev eklendi ✓")}}finally{$t=!1,e&&(e.disabled=!1,e.textContent=t)}}async function _i(e,t){var o;const n=`${l.activeStuId}_${e}`,a=(o=l.tasks[n])==null?void 0:o[t];if(!a)return;const i=!a.done;await b.from("tasks").update({done:i}).eq("id",a._id),a.done=i,Z()}let rt=null;function Ot(){rt&&(rt.remove(),rt=null)}document.addEventListener("click",Ot);function Si(e,t,n){Ot();const a=n.getBoundingClientRect(),i=document.createElement("div");i.className="tc-dropdown",i.innerHTML=`
    <button onclick="closeTaskMenu();openCoachTaskEdit('${e}',${t})">✏️ Düzenle</button>
    <button onclick="closeTaskMenu();copyTaskToClipboard('${e}',${t})">📋 Kopyala</button>
    <button onclick="closeTaskMenu();copyTaskToWholeWeek('${e}',${t})">📅 Tüm Haftaya Kopyala</button>
    <button class="danger" onclick="closeTaskMenu();deleteTask('${e}',${t})">🗑 Kaldır</button>`;const o=a.bottom+4,s=Math.min(a.left,window.innerWidth-155);i.style.cssText=`top:${o}px;left:${s}px;`,document.body.appendChild(i),rt=i,setTimeout(()=>i.addEventListener("click",r=>r.stopPropagation()),0)}async function Ii(e,t){var s;const n=`${l.activeStuId}_${e}`,a=(s=l.tasks[n])==null?void 0:s[t];if(!a)return;const{data:i,error:o}=await b.from("tasks").insert({student_id:l.activeStuId,coach_id:y.coachId,date:e,type:a.type,exam_type:a.exam||null,subject:a.subject,duration:a.duration,note:a.note||null,done:!1,task_items:a.task_items||null}).select().single();if(o)return h("Kopyalama başarısız");l.tasks[n]||(l.tasks[n]=[]),l.tasks[n].push({_id:i.id,type:i.type,exam:i.exam_type,subject:i.subject,duration:i.duration,note:i.note,done:!1,student_note:"",task_items:i.task_items||null}),Z(),h("Görev kopyalandı")}async function zi(e,t){var s;const n=`${l.activeStuId}_${e}`,a=(s=l.tasks[n])==null?void 0:s[t];if(!a)return;const i=[a.exam,a.subject].filter(Boolean).join(" · ")||a.type||"Görev",o=document.querySelector(`[data-task-id="${a._id}"]`);if(o){o.style.transition="all 0.3s ease",o.style.opacity="0",o.style.transform="translateX(30px)";const r=o.querySelector(".tc-body");r&&(r.innerHTML='<div style="color:var(--red); font-weight:700; font-size:12px; display:flex; align-items:center; gap:6px">🗑️ Siliniyor...</div>')}await new Promise(r=>setTimeout(r,300)),await b.from("tasks").delete().eq("id",a._id),l.tasks[n].splice(t,1),Z(),h(`"${i}" silindi`)}let le={studentId:"",type:""};window._draggingApptId=null;const Cn={"Haftalık Değerlendirme":"#E8613A","TYT Koçluğu":"#3B82F6","AYT Koçluğu":"#8B5CF6",Mentörlük:"#10B981","Deneme Analizi":"#F59E0B",Motivasyon:"#EC4899","Genel Görüşme":"#64748B"},pn=0,Bi=24,Mi=60;function Ln(e){return Cn[e]||"#64748B"}function Ai(e){const t=l.students.find(o=>o.id===e.studentId),n=new Date(e.date+"T"+(e.time||"09:00")),a=new Date(n.getTime()+(e.duration||45)*6e4),i=o=>o.getFullYear()+String(o.getMonth()+1).padStart(2,"0")+String(o.getDate()).padStart(2,"0")+"T"+String(o.getHours()).padStart(2,"0")+String(o.getMinutes()).padStart(2,"0")+"00";return`https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(((t==null?void 0:t.name)||"Öğrenci")+" – Koçluk")}&dates=${i(n)}/${i(a)}&details=${encodeURIComponent(e.type||"")}`}function Di(){he()}function Ci(){he()}function Li(){he()}function ji(e,t){le[e]=t,he()}function Pi(){let e=l.appointments;le.studentId&&(e=e.filter(o=>o.studentId===le.studentId)),le.type&&(e=e.filter(o=>o.type===le.type));const t=["BEGIN:VCALENDAR","VERSION:2.0","PRODID:-//Rostrum Akademi//TR","CALSCALE:GREGORIAN","METHOD:PUBLISH","X-WR-CALNAME:Rostrum Ajanda"];e.forEach(o=>{const s=l.students.find(p=>p.id===o.studentId),r=new Date(o.date+"T"+(o.time||"09:00")),d=new Date(r.getTime()+(o.duration||45)*6e4),c=p=>p.getFullYear()+String(p.getMonth()+1).padStart(2,"0")+String(p.getDate()).padStart(2,"0")+"T"+String(p.getHours()).padStart(2,"0")+String(p.getMinutes()).padStart(2,"0")+"00";t.push("BEGIN:VEVENT",`DTSTART:${c(r)}`,`DTEND:${c(d)}`,`SUMMARY:${(s==null?void 0:s.name)||"Öğrenci"} – ${o.type||"Koçluk"}`),o.note&&t.push(`DESCRIPTION:${o.note.replace(/\n/g,"\\n")}`),(o.meetLink||o.meet_link)&&t.push(`URL:${o.meetLink||o.meet_link}`),t.push(`UID:rostrum-${o.id}@rostrumakademi.com`,"END:VEVENT")}),t.push("END:VCALENDAR");const n=new Blob([t.join(`\r
`)],{type:"text/calendar;charset=utf-8"}),a=URL.createObjectURL(n),i=document.createElement("a");i.href=a,i.download="rostrum-ajanda.ics",i.click(),URL.revokeObjectURL(a),h("Ajanda indirildi ✓")}function jn(e,t){t.stopPropagation();const n=document.getElementById("apptDetailPopup");if(n){const v=n.dataset.id;if(n.remove(),v===e)return}const a=l.appointments.find(v=>v.id===e);if(!a)return;const i=l.students.find(v=>v.id===a.studentId),o=Ln(a.type),s=document.createElement("div");s.id="apptDetailPopup",s.dataset.id=e;const r=window.innerWidth,d=window.innerHeight,c=264;let p=Math.min(t.clientX+12,r-c-12),m=Math.min(t.clientY+12,d-220);s.style.cssText=`position:fixed;left:${p}px;top:${m}px;z-index:600;width:${c}px;background:var(--surface);border:1px solid var(--border);border-radius:14px;padding:14px 16px;box-shadow:0 8px 32px rgba(0,0,0,.18);animation:viewIn .15s ease`;const u=a.meetLink||a.meet_link;s.innerHTML=`
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
      <a href="${Ai(a)}" target="_blank" style="font-size:11px;font-weight:700;color:var(--green);background:var(--green-dim);padding:4px 10px;border-radius:99px;text-decoration:none">📅 GCal</a>
      <button onclick="document.getElementById('apptDetailPopup')?.remove();openAgendaApptModal('${a.id}')" style="font-size:11px;font-weight:700;color:var(--text);background:var(--surface2);padding:4px 10px;border-radius:99px;border:1px solid var(--border);cursor:pointer;font-family:inherit">✏️ Düzenle</button>
      <button onclick="deleteAgendaAppt('${a.id}')" style="font-size:11px;font-weight:700;color:var(--red,#ef4444);background:#ef444410;padding:4px 10px;border-radius:99px;border:none;cursor:pointer;font-family:inherit">🗑</button>
    </div>`,document.body.appendChild(s),setTimeout(()=>{document.addEventListener("click",function v(S){s.contains(S.target)||(s.remove(),document.removeEventListener("click",v))})},50)}async function Ri(e,t){e.preventDefault();const n=window._draggingApptId;if(!n)return;window._draggingApptId=null;const a=e.currentTarget,i=a.getBoundingClientRect(),o=a.closest("[data-tl-scroll]"),s=o?o.scrollTop:0,d=(e.clientY-i.top+s)/Mi*60+pn*60,c=Math.max(pn,Math.min(Bi-1,Math.floor(d/60))),p=Math.round(d%60/15)*15,m=p>=60?0:p,u=`${String(c).padStart(2,"0")}:${String(m).padStart(2,"0")}`,{error:v}=await b.from("appointments").update({date:t,time:u}).eq("id",n);if(v){h("Hata: "+v.message);return}const S=l.appointments.find(E=>E.id===n);S&&(S.date=t,S.time=u),he(),h("Randevu taşındı ✓")}function Pn(){he()}function he(){const e=document.getElementById("view-todolist");if(!e)return;if(!document.getElementById("fc-styles")){const r=document.createElement("style");r.id="fc-styles",r.textContent=`
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
    `,document.head.appendChild(r)}const t='<option value="">Tüm Öğrenciler</option>'+l.students.map(r=>`<option value="${r.id}"${le.studentId===r.id?" selected":""}>${g(r.name)}</option>`).join(""),n='<option value="">Tüm Tipler</option>'+Object.keys(Cn).map(r=>`<option value="${r}"${le.type===r?" selected":""}>${r}</option>`).join("");let a=l.appointments;le.studentId&&(a=a.filter(r=>r.studentId===le.studentId)),le.type&&(a=a.filter(r=>r.type===le.type));const i=a.map(r=>{const d=l.students.find(E=>E.id===r.studentId),c=Ln(r.type),p=`${r.date}T${r.time||"09:00"}`,m=new Date(p),u=new Date(m.getTime()+(r.duration||45)*6e4),v=E=>String(E).padStart(2,"0"),S=`${u.getFullYear()}-${v(u.getMonth()+1)}-${v(u.getDate())}T${v(u.getHours())}:${v(u.getMinutes())}:00`;return{id:r.id,title:`${(d==null?void 0:d.name)||"Öğrenci"} (${r.type||"Randevu"})`,start:p,end:S,backgroundColor:c,borderColor:c,textColor:"#ffffff",extendedProps:{...r}}}),o="font-size:12px;padding:6px 12px;border-radius:8px;border:1px solid var(--border);background:var(--surface);color:var(--text);cursor:pointer;font-family:inherit";let s=document.getElementById("fc-calendar");if(!s)e.innerHTML=`
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
    `,s=document.getElementById("fc-calendar");else{const r=e.querySelectorAll("select");r[0]&&(r[0].innerHTML=t),r[1]&&(r[1].innerHTML=n)}typeof FullCalendar<"u"?window._fcInstance?(window._fcInstance.removeAllEvents(),window._fcInstance.addEventSource(i),window._fcInstance.updateSize()):(window._fcInstance=new FullCalendar.Calendar(s,{initialView:window.innerWidth<700?"listWeek":"timeGridWeek",headerToolbar:{left:"prev,next today",center:"title",right:"dayGridMonth,timeGridWeek,timeGridDay,listWeek"},buttonText:{today:"Bugün",month:"Ay",week:"Hafta",day:"Gün",list:"Ajanda"},locale:"tr",firstDay:1,slotMinTime:"08:00",slotMaxTime:"23:00",allDaySlot:!1,editable:!0,droppable:!0,selectable:!0,eventClick:function(r){jn(r.event.id,r.jsEvent)},select:function(r){const d=r.startStr.slice(0,10),c=r.startStr.slice(11,16)||"14:00";Rn(null,d),setTimeout(()=>{const p=document.getElementById("amTime");p&&(p.value=c)},50)},eventDrop:async function(r){const d=r.event.start,c=r.event.end||new Date(d.getTime()+45*6e4),p=d.getFullYear()+"-"+String(d.getMonth()+1).padStart(2,"0")+"-"+String(d.getDate()).padStart(2,"0"),m=String(d.getHours()).padStart(2,"0")+":"+String(d.getMinutes()).padStart(2,"0"),u=Math.round((c.getTime()-d.getTime())/6e4),v=r.event.id,{error:S}=await b.from("appointments").update({date:p,time:m,duration:u}).eq("id",v);if(S){h("Hata: "+S.message),r.revert();return}const E=l.appointments.find(f=>f.id===v);E&&(E.date=p,E.time=m,E.duration=u),h("Randevu taşıma başarılı ✓")},eventResize:async function(r){const d=r.event.start,c=r.event.end;if(!c)return;const p=Math.round((c.getTime()-d.getTime())/6e4),m=r.event.id,{error:u}=await b.from("appointments").update({duration:p}).eq("id",m);if(u){h("Hata: "+u.message),r.revert();return}const v=l.appointments.find(S=>S.id===m);v&&(v.duration=p),h("Randevu süresi güncellendi ✓")},events:i}),window._fcInstance.render()):console.warn("FullCalendar library not loaded yet")}function Rn(e,t){const n=e?l.appointments.find(a=>a.id===e):null;document.getElementById("amTitle").textContent=n?"Randevuyu Düzenle":"Yeni Randevu",document.getElementById("amId").value=e||"",document.getElementById("amStudent").innerHTML=l.students.map(a=>`<option value="${a.id}" ${(n==null?void 0:n.studentId)===a.id?"selected":""}>${g(a.name)}</option>`).join(""),document.getElementById("amDate").value=n?n.date:t||F(new Date),document.getElementById("amTime").value=n?n.time:"14:00",document.getElementById("amDuration").value=n?n.duration:"45",document.getElementById("amType").value=n?n.type:"Haftalık Değerlendirme",document.getElementById("amNote").value=n&&n.note||"",document.getElementById("amMeetLink").value=n&&(n.meetLink||n.meet_link)||"",G("apptModal")}async function Ni(e){await ae("Randevu silinsin mi?")&&(await b.from("appointments").delete().eq("id",e),l.appointments=l.appointments.filter(t=>t.id!==e),he(),h("Randevu silindi"))}function Nn(){et()}function Hi(e){l.activeStuId=e,l.weekOffset=0,be(),Nt(e)}function Yi(e){const t=e?l.students.find(a=>a.id===e):null;document.getElementById("smTitle").textContent=t?"Öğrenciyi Düzenle":"Yeni Öğrenci",document.getElementById("smId").value=e||"",document.getElementById("smName").value=(t==null?void 0:t.name)||"",document.getElementById("smTarget").value=(t==null?void 0:t.target)||"",document.getElementById("smUsername").value=(t==null?void 0:t.username)||"",document.getElementById("smPass").value=(t==null?void 0:t.pass)||STU_DEFAULT_PASS,document.getElementById("smWeekStart").value=(t==null?void 0:t.weekStart)??0,document.getElementById("smYksArea").value=(t==null?void 0:t.yksArea)||"SAY",document.getElementById("smProg").value=(t==null?void 0:t.progress)||0,document.getElementById("smProgVal").textContent=((t==null?void 0:t.progress)||0)+"%",document.querySelectorAll(".color-opt").forEach(a=>a.classList.toggle("sel",a.dataset.c===((t==null?void 0:t.color)||"#e8622a")));const n=document.getElementById("smRoleField");n&&(n.style.display="none"),document.querySelector("#studentModal .btn-accent").setAttribute("onclick","saveStudent()"),G("studentModal")}document.getElementById("smProg").addEventListener("input",function(){document.getElementById("smProgVal").textContent=this.value+"%"});document.getElementById("smColorPick").addEventListener("click",function(e){const t=e.target.closest(".color-opt");t&&(document.querySelectorAll(".color-opt").forEach(n=>n.classList.remove("sel")),t.classList.add("sel"))});async function Ki(){var d;const e=document.getElementById("smName").value.trim();if(!e)return h("İsim girin!");const t=((d=document.querySelector(".color-opt.sel"))==null?void 0:d.dataset.c)||"#e8622a",n=document.getElementById("smId").value,a=Ae(document.getElementById("smUsername").value.trim())||Ae(e.split(" ")[0])+Math.floor(Math.random()*100),i=document.getElementById("smPass").value||STU_DEFAULT_PASS,o=await Le(i),s=document.getElementById("smYksArea").value,r={full_name:e,target:document.getElementById("smTarget").value.trim()||"Hedef belirtilmemiş",color:t,progress:Number(document.getElementById("smProg").value),password_hash:o,week_start:Number(document.getElementById("smWeekStart").value),coach_id:y.coachId,yks_area:s};if(n){const{error:c}=await b.rpc("update_student_profile",{p_student_id:n,p_full_name:e,p_target:r.target,p_color:t,p_progress:r.progress,p_week_start:r.week_start,p_username:a,p_plain_password:i,p_password_hash:o,p_yks_area:r.yks_area});if(c)return h("Hata: "+c.message);const p=l.students.find(m=>m.id===n);p&&Object.assign(p,{name:r.full_name,target:r.target,color:t,progress:r.progress,pass:r.password_hash,weekStart:r.week_start,username:a,yksArea:r.yks_area}),h("Güncellendi ✓"),be(),U("studentModal"),et()}else{const c=a+"@rostrumakademi.com",{data:{session:p}}=await b.auth.getSession(),m=await fetch("/api/create-student",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${(p==null?void 0:p.access_token)||""}`},body:JSON.stringify({email:c,password:i,full_name:r.full_name,username:a,color:r.color,target:r.target,progress:r.progress,week_start:r.week_start,coach_id:r.coach_id,exam_profile:"YKS",yks_area:r.yks_area})}),u=await m.json();if(!m.ok)return h("Hata: "+u.error);const v=u.userId;l.students.push({id:v,name:r.full_name,target:r.target,color:r.color,progress:r.progress||0,pass:o,weekStart:r.week_start||0,username:a,yksArea:r.yks_area}),l.activeStuId||(l.activeStuId=v),be(),U("studentModal"),Hn(r.full_name,a,i)}}function Hn(e,t,n){let a=document.getElementById("inviteModal");a||(a=document.createElement("div"),a.id="inviteModal",a.className="modal-bg",document.body.appendChild(a),a.addEventListener("click",r=>{r.target===a&&a.classList.remove("open")}));const o=`${window.location.origin+window.location.pathname.replace("app.html","")}app.html`,s=encodeURIComponent(`Merhaba ${e}! 🎓

Seni Rostrum Akademi platformuna ekledim.

📱 Giriş adresi: ${o}
👤 Kullanıcı adı: ${t}
🔑 Şifre: ${n}

Giriş yaptıktan sonra programını görebileceksin!`);a.innerHTML=`<div class="modal" style="max-width:480px">
    <button class="modal-close" onclick="cm('inviteModal');renderStudentsSearch()">×</button>
    <div style="text-align:center;margin-bottom:20px">
      <div style="font-size:40px;margin-bottom:8px">🎉</div>
      <h2>${g(e)} eklendi!</h2>
      <p style="font-size:13px;color:var(--text-mid);margin-top:6px">Öğrencine aşağıdaki bilgileri paylaş</p>
    </div>

    <div style="background:var(--surface2);border:1px solid var(--border);border-radius:12px;padding:16px;margin-bottom:14px">
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
        <div>
          <div style="font-size:10px;font-weight:700;color:var(--text-dim);text-transform:uppercase;letter-spacing:.5px;margin-bottom:4px">Kullanıcı Adı</div>
          <div style="font-family:'Inter',sans-serif;font-size:16px;font-weight:800;color:var(--accent)">${g(t)}</div>
        </div>
        <div>
          <div style="font-size:10px;font-weight:700;color:var(--text-dim);text-transform:uppercase;letter-spacing:.5px;margin-bottom:4px">Şifre</div>
          <div style="font-family:'Inter',sans-serif;font-size:16px;font-weight:800;color:var(--accent)">${g(n)}</div>
        </div>
      </div>
      <div style="margin-top:10px;padding-top:10px;border-top:1px solid var(--border)">
        <div style="font-size:10px;font-weight:700;color:var(--text-dim);text-transform:uppercase;letter-spacing:.5px;margin-bottom:4px">Giriş Adresi</div>
        <div style="font-size:12px;color:var(--blue);word-break:break-all">${o}</div>
      </div>
    </div>

    <div style="display:flex;gap:8px">
      <button class="btn btn-ghost" style="flex:1;justify-content:center" onclick="copyInvite('${g(t)}','${g(n)}','${o}')">📋 Kopyala</button>
      <a href="https://wa.me/?text=${s}" target="_blank" class="btn btn-accent" style="flex:1;justify-content:center;text-decoration:none">💬 WhatsApp ile Gönder</a>
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
  </div>`,window._pendingInvite={name:e,username:t,pass:n,loginUrl:o},G("inviteModal")}async function Oi(){var s,r;const e=(s=document.getElementById("inviteEmailInput"))==null?void 0:s.value.trim(),t=document.getElementById("inviteEmailMsg");if(!e||!e.includes("@")){t&&(t.style.display="block",t.style.background="var(--red-dim)",t.style.color="var(--red)",t.textContent="Geçerli bir e-posta girin.");return}if(!window._pendingInvite)return;const{name:n,username:a,pass:i,loginUrl:o}=window._pendingInvite;t&&(t.style.display="block",t.style.background="var(--surface2)",t.style.color="var(--text-mid)",t.textContent="Gönderiliyor...");try{const d=await fetch("/api/mailer",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({type:"student_welcome",to:e,student_name:n,username:a,password:i,login_url:o,coach_name:((r=l.workspace)==null?void 0:r.brand_name)||""})}),c=await d.json();if(d.ok)t&&(t.style.background="var(--green-dim)",t.style.color="var(--green)",t.textContent="✓ Mail gönderildi!");else throw new Error(c.error||"Sunucu hatası")}catch(d){t&&(t.style.background="var(--red-dim)",t.style.color="var(--red)",t.textContent="✗ "+d.message)}}window.sendInviteEmail=Oi;function Fi(e,t,n){const a=`Giriş adresi: ${n}
Kullanıcı adı: ${e}
Şifre: ${t}`;navigator.clipboard.writeText(a).then(()=>h("Kopyalandı ✓")).catch(()=>{const i=document.createElement("textarea");i.value=a,document.body.appendChild(i),i.select(),document.execCommand("copy"),i.remove(),h("Kopyalandı ✓")})}async function Gi(e){var a;if(!await ae("Bu öğrenciyi silmek istediğinizden emin misiniz?"))return;const t=document.getElementById(`sturow_${e}`);t&&(t.style.transition="all 0.3s ease",t.style.opacity="0",t.style.transform="translateX(30px)",t.innerHTML='<div style="color:var(--red); font-weight:700; font-size:13px; display:flex; align-items:center; gap:6px">🗑️ Siliniyor...</div>'),await new Promise(i=>setTimeout(i,300));const{error:n}=await b.from("users").delete().eq("id",e);if(n)return h("Hata: "+n.message);l.students=l.students.filter(i=>i.id!==e),l.activeStuId===e&&(l.activeStuId=((a=l.students[0])==null?void 0:a.id)||null),be(),Nn(),h("Silindi")}function Ui(){const e="217851738834-1cp3fk66hfhm0mr2aklsk3jphqmub2s3.apps.googleusercontent.com",t=encodeURIComponent("https://www.rostrumakademi.com/app.html"),n=encodeURIComponent("https://www.googleapis.com/auth/calendar.events"),a=`https://accounts.google.com/o/oauth2/v2/auth?client_id=${e}&redirect_uri=${t}&response_type=code&scope=${n}&access_type=offline&prompt=consent&state=google_calendar`;window.location.href=a}window.connectGoogleCalendar=Ui;function Oe(){var a,i;const e=document.getElementById("view-appointments"),n=((a=l.workspace)==null?void 0:a.google_calendar_connected)?'<span style="font-size:12px;color:var(--green);font-weight:600;display:flex;align-items:center;gap:4px">✓ Google Takvim</span>':'<button class="btn btn-ghost btn-sm" onclick="connectGoogleCalendar()">🔗 Google Takvim Bağla</button>';e.innerHTML=`
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
    </div>`,yt(),Ft()}function yt(){const e=l.calYear,t=l.calMonth;document.getElementById("calMonthLbl").textContent=`${MONTHS_TR[t]} ${e}`;const n=new Date(e,t,1).getDay(),a=new Date(e,t+1,0).getDate(),i=me(),o=new Set(l.appointments.filter(d=>{const c=new Date(d.date);return c.getFullYear()===e&&c.getMonth()===t}).map(d=>new Date(d.date).getDate())),s=n===0?6:n-1;let r="";for(let d=0;d<s;d++)r+='<div class="cal-day empty"></div>';for(let d=1;d<=a;d++){const c=`${e}-${String(t+1).padStart(2,"0")}-${String(d).padStart(2,"0")}`;r+=`<div class="cal-day ${c===i?"today":""} ${c===l.calSelDay&&c!==i?"selected":""} ${o.has(d)?"has-appt":""}" onclick="selCalDay('${c}')">${d}</div>`}document.getElementById("calDaysGrid").innerHTML=r}function qi(e){l.calSelDay=l.calSelDay===e?null:e,yt(),Ft()}function Wi(e){l.calMonth+=e,l.calMonth>11&&(l.calMonth=0,l.calYear++),l.calMonth<0&&(l.calMonth=11,l.calYear--),Xe(),yt()}function Ft(){const e=me();let t=l.appointments,n="Yaklaşan Görüşmeler";if(l.calSelDay?(t=t.filter(a=>a.date===l.calSelDay),n=new Date(l.calSelDay+"T12:00").toLocaleDateString("tr-TR",{day:"numeric",month:"long"})):t=t.filter(a=>a.date>=e).sort((a,i)=>a.date.localeCompare(i.date)).slice(0,10),document.getElementById("apptListTitle").textContent=n,!t.length){document.getElementById("apptList").innerHTML='<div class="empty"><p>Randevu yok</p></div>';return}document.getElementById("apptList").innerHTML=t.map(a=>{const i=l.students.find(r=>r.id===a.studentId),s=a.date===e?"BUGÜN":new Date(a.date+"T12:00").toLocaleDateString("tr-TR",{day:"numeric",month:"short"});return`<div data-appt-id="${a.id}" class="appt-item" style="border-left-color:${(i==null?void 0:i.color)||"#555"}">
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
    </div>`}).join("")}function Vi(e){const t=e?l.appointments.find(n=>n.id===e):null;document.getElementById("amTitle").textContent=t?"Randevuyu Düzenle":"Yeni Randevu",document.getElementById("amId").value=e||"",document.getElementById("amStudent").innerHTML=l.students.map(n=>`<option value="${n.id}" ${(t==null?void 0:t.studentId)===n.id?"selected":""}>${g(n.name)}</option>`).join(""),document.getElementById("amDate").value=t?t.date:F(new Date),document.getElementById("amTime").value=t?t.time:"14:00",document.getElementById("amDuration").value=t?t.duration:"45",document.getElementById("amType").value=t?t.type:"Haftalık Değerlendirme",document.getElementById("amNote").value=(t==null?void 0:t.note)||"",document.getElementById("amMeetLink").value=(t==null?void 0:t.meet_link)||"",G("apptModal")}let Tt=!1;async function Zi(){if(!Tt){Tt=!0;try{await Ji()}finally{Tt=!1}}}async function Ji(){var s,r,d;const e=document.getElementById("amStudent").value,t=document.getElementById("amDate").value,n=document.getElementById("amTime").value;if(!e||!t||!n)return h("Tüm alanları doldurun!");const a=document.getElementById("amMeetLink").value.trim();if(a&&!a.startsWith("https://"))return h("Toplantı linki https:// ile başlamalı");if(a&&!/zoom\.us|meet\.google|teams\.microsoft|webex\.com/.test(a))return h("Geçersiz link — Zoom, Meet, Teams veya Webex linki girin");const i=document.getElementById("amId").value,o={student_id:e,coach_id:y.coachId,date:t,time:n,duration:parseInt(document.getElementById("amDuration").value),type:document.getElementById("amType").value,note:document.getElementById("amNote").value.trim(),meet_link:a};if(i){await b.from("appointments").update(o).eq("id",i);const c=l.appointments.find(p=>p.id===i);if(c&&Object.assign(c,{studentId:e,date:t,time:n,duration:o.duration,type:o.type,note:o.note}),h("Güncellendi ✓"),(s=l.workspace)!=null&&s.google_calendar_connected&&(c!=null&&c.google_event_id)){const p=l.students.find(m=>m.id===e);Bt("update",{date:t,hour:n,notes:o.note,student_name:p==null?void 0:p.name,google_event_id:c.google_event_id}).catch(()=>{})}}else{const{data:c,error:p}=await b.from("appointments").insert(o).select().single();if(p)return h("Hata: "+p.message);const m={id:c.id,studentId:c.student_id,date:c.date,time:c.time,duration:c.duration,type:c.type,note:c.note,google_event_id:null};if(l.appointments.push(m),h("Randevu eklendi ✓"),(r=l.workspace)!=null&&r.google_calendar_connected){const u=l.students.find(v=>v.id===e);Bt("create",{appointment_id:c.id,date:t,hour:n,notes:o.note,student_name:u==null?void 0:u.name}).then(v=>{v&&(m.google_event_id=v)}).catch(()=>{})}}U("apptModal"),currentTab==="todolist"?he():(d=document.getElementById("view-appointments"))!=null&&d.classList.contains("active")&&Oe()}async function Xi(){var t,n;const e=document.getElementById("gcalSyncBtn");e&&(e.disabled=!0,e.textContent="⏳ Senkronize ediliyor...");try{const{data:{session:a}}=await b.auth.getSession();if(!(a!=null&&a.access_token))return h("Oturum hatası");const o=await(await fetch("/api/mailer",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${a.access_token}`},body:JSON.stringify({type:"google_calendar_sync"})})).json();if(!o.success)return h("Senkronizasyon hatası: "+(o.error||"Bilinmeyen"));(t=o.deletedIds)!=null&&t.length&&(l.appointments=l.appointments.filter(r=>!o.deletedIds.includes(r.id))),(n=o.updatedItems)==null||n.forEach(r=>{const d=l.appointments.find(c=>c.id===r.id);d&&(d.date=r.date,d.time=r.time)}),localStorage.setItem(`gcal_sync_${y.coachId}`,JSON.stringify({time:new Date().toISOString(),mode:"manual"}));const s=[];o.deleted>0&&s.push(`${o.deleted} randevu silindi`),o.updated>0&&s.push(`${o.updated} randevu güncellendi`),h(s.length?"Senkronize edildi: "+s.join(", ")+" ✓":"Senkronize edildi, değişiklik yok ✓"),Oe()}catch(a){h("Senkronizasyon hatası: "+a.message),e&&(e.disabled=!1,e.textContent="🔄 Senkronize Et")}}window.syncFromGoogle=Xi;async function Bt(e,t){const{data:{session:n}}=await b.auth.getSession();return n!=null&&n.access_token&&(await(await fetch("/api/mailer",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${n.access_token}`},body:JSON.stringify({type:"google_calendar_event",action:e,appointment:t})})).json()).google_event_id||null}async function Qi(e){var a;if(!await ae("Bu randevuyu silmek istediğinizden emin misiniz?"))return;const t=l.appointments.find(i=>i.id===e),n=document.querySelector(`[data-appt-id="${e}"]`);if(n){n.style.transition="all 0.3s ease",n.style.opacity="0",n.style.transform="translateX(30px)";const i=n.querySelector(".appt-name");i&&(i.innerHTML='<span style="color:var(--red); font-weight:700">🗑️ Siliniyor...</span>')}await new Promise(i=>setTimeout(i,300)),(a=l.workspace)!=null&&a.google_calendar_connected&&(t!=null&&t.google_event_id)&&Bt("delete",{google_event_id:t.google_event_id}).catch(()=>{}),await b.from("appointments").delete().eq("id",e),l.appointments=l.appointments.filter(i=>i.id!==e),Oe(),h("Silindi")}function eo(){const e=me(),t=l.appointments.filter(r=>r.date>=e).sort((r,d)=>r.date.localeCompare(d.date));if(!t.length)return h("Yaklaşan randevu bulunamadı.");const n=r=>String(r).padStart(2,"0"),a=["BEGIN:VCALENDAR","VERSION:2.0","PRODID:-//Rostrum Akademi//TR","CALSCALE:GREGORIAN","METHOD:PUBLISH","BEGIN:VTIMEZONE","TZID:Europe/Istanbul","BEGIN:STANDARD","TZOFFSETFROM:+0300","TZOFFSETTO:+0300","TZNAME:TRT","DTSTART:19700101T000000","END:STANDARD","END:VTIMEZONE"];t.forEach(r=>{const d=l.students.find($=>$.id===r.studentId),[c,p,m]=r.date.split("-"),[u,v]=(r.time||"09:00").split(":"),S=`${c}${p}${m}T${u}${v}00`,E=new Date(Number(c),Number(p)-1,Number(m),Number(u),Number(v)+(r.duration||45)),f=`${E.getFullYear()}${n(E.getMonth()+1)}${n(E.getDate())}T${n(E.getHours())}${n(E.getMinutes())}00`;a.push("BEGIN:VEVENT"),a.push(`UID:ra-appt-${r.id}@rostrumakademi.com`),a.push(`DTSTART;TZID=Europe/Istanbul:${S}`),a.push(`DTEND;TZID=Europe/Istanbul:${f}`),a.push(`SUMMARY:${r.type}${d?" — "+d.name:""}`),r.note&&a.push(`DESCRIPTION:${r.note.replace(/[\r\n]+/g,"\\n")}`),r.meet_link&&a.push(`URL:${r.meet_link}`),a.push("END:VEVENT")}),a.push("END:VCALENDAR");const i=new Blob([a.join(`\r
`)],{type:"text/calendar;charset=utf-8"}),o=URL.createObjectURL(i),s=document.createElement("a");s.href=o,s.download="rostrum-randevular.ics",s.click(),setTimeout(()=>URL.revokeObjectURL(o),1e3),h(`${t.length} randevu takvim dosyasına aktarıldı ✓`)}function mt(e){return 100+(Number(e.Türkçe||0)+Number(e.Matematik||0)+Number(e.Fen||0)+Number(e.Sosyal||0))*(400/120)}function Yn(e,t){const n=a=>Number(t[a]||0);return e==="AYT-SAY"?100+(n("Matematik")+n("Fizik")+n("Kimya")+n("Biyoloji"))*5:e==="AYT-EA"?100+(n("Matematik")+n("Edebiyat")+n("Tarih")+n("Coğrafya"))*5:e==="AYT-SOZ"?100+(n("Edebiyat")+n("Tarih1")+n("Tarih2")+n("Coğrafya1")+n("Coğrafya2")+n("Felsefe")+n("Din"))*5:null}const Kn={"AYT-SAY":"SAY","AYT-EA":"EA","AYT-SOZ":"SÖZ"},ut={TYT:"#3B82F6",SAY:"#8B5CF6",EA:"#10B981",SÖZ:"#F59E0B"};function On(e,t){const{type:n,nets:a}=e;if(n==="TYT"){const d=mt(a),c=ut.TYT;return`<div style="margin-top:10px;display:flex;align-items:center;gap:8px;flex-wrap:wrap">
      <span style="background:${c}18;border:1px solid ${c}40;border-radius:8px;padding:5px 12px;display:inline-flex;gap:7px;align-items:baseline">
        <span style="font-size:10px;font-weight:700;color:${c};text-transform:uppercase">TYT Puan</span>
        <span style="font-size:18px;font-weight:900;color:${c}">${d.toFixed(2)}</span>
      </span>
    </div>`}const i=Kn[n];if(!i)return"";const o=ut[i]||"#64748B",s=Yn(n,a),r=t.filter(d=>d.type==="TYT"&&d.date<=e.date).sort((d,c)=>c.date.localeCompare(d.date))[0];if(r){const d=mt(r.nets),c=d*.4+s*.6;return`<div style="margin-top:10px;display:flex;align-items:center;gap:10px;flex-wrap:wrap">
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
  </div>`}function to(){var d,c;const e=document.getElementById("emPuanDisplay");if(!e)return;const t=(d=document.getElementById("emExamType"))==null?void 0:d.value;if(!t)return;const n={};if((EXAM_DEFS[t]||[]).forEach(p=>{const m=ne[p]||{};n[p]=Math.max(0,(m.dogru||0)-(m.yanlis||0)/4)}),t==="TYT"){const p=mt(n),m=ut.TYT;e.innerHTML=`<div style="background:${m}12;border:1px solid ${m}35;border-radius:10px;padding:10px 14px;display:flex;align-items:center;gap:10px">
      <span style="font-size:11px;font-weight:700;color:${m};text-transform:uppercase;letter-spacing:.4px">🎯 TYT Puan</span>
      <span style="font-size:24px;font-weight:900;color:${m};letter-spacing:-.5px">${p.toFixed(2)}</span>
    </div>`;return}const a=Kn[t],i=ut[a]||"#64748B",o=Yn(t,n);if(o===null){e.innerHTML="";return}const s=(c=document.getElementById("emStudent"))==null?void 0:c.value,r=s?[...l.exams].filter(p=>p.studentId===s&&p.type==="TYT").sort((p,m)=>m.date.localeCompare(p.date))[0]:null;if(r){const p=mt(r.nets),m=p*.4+o*.6;e.innerHTML=`<div style="background:${i}12;border:1px solid ${i}35;border-radius:10px;padding:10px 14px">
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
    </div>`}function no(e,t){var X;if(!e.length)return"";const n=[...e].sort((R,N)=>R.date.localeCompare(N.date)).slice(-8),a=n[n.length-1],i=n.length>=2?n[n.length-2]:null,o=EXAM_DEFS[a.type]||[],s=(t==null?void 0:t.color)||"#e8622a",r=o.reduce((R,N)=>{var K;return R+Number(((K=a.nets)==null?void 0:K[N])||0)},0),d=i?o.reduce((R,N)=>{var K;return R+Number(((K=i.nets)==null?void 0:K[N])||0)},0):null,c=d!==null?r-d:null,p=o.length?o.reduce((R,N)=>{var K,oe;return Number(((K=a.nets)==null?void 0:K[N])||0)<Number(((oe=a.nets)==null?void 0:oe[R])||0)?N:R},o[0]):null,m=c===null?"var(--text-dim)":c>=0?"#3ecf8e":"#ef4444",u=c===null?"—":(c>=0?"+":"")+c.toFixed(1),v=`<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin-bottom:16px">
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
      ${p?`<div style="font-size:15px;font-weight:900;line-height:1.2;color:#ef4444">${g(p)}</div>
      <div style="font-size:11px;font-weight:700;color:var(--text-mid);margin-top:3px">${Number(((X=a.nets)==null?void 0:X[p])||0).toFixed(1)} net</div>`:'<div style="font-size:12px;color:var(--text-dim)">—</div>'}
    </div>
  </div>`,S=o.map(R=>{var sn;const N=Number(((sn=a.nets)==null?void 0:sn[R])||0),K=(EXAM_SORU[a.type]||{})[R]||40,oe=Math.min(100,Math.max(0,N/K*100)),fe=N>=K*.6?"#3ecf8e":N>=K*.35?"#f0a500":"#ef4444";return`<div style="margin-bottom:11px">
      <div style="display:flex;justify-content:space-between;align-items:baseline;margin-bottom:4px">
        <span style="font-size:12px;font-weight:600;color:var(--text)">${g(R)}</span>
        <span style="font-size:14px;font-weight:800;color:${fe};font-family:'Inter',sans-serif">${N.toFixed(1)}</span>
      </div>
      <div style="background:rgba(255,255,255,0.07);border-radius:4px;height:7px;overflow:hidden">
        <div style="width:${oe.toFixed(1)}%;height:100%;background:${fe};border-radius:4px"></div>
      </div>
    </div>`}).join("");if(n.length<2)return`<div class="card cp" style="margin-bottom:16px">
    <div style="font-size:11px;font-weight:700;margin-bottom:12px;color:var(--text-mid);text-transform:uppercase;letter-spacing:.5px">📊 Deneme Özeti</div>
    ${v}
    <div style="font-size:10px;font-weight:700;color:var(--text-dim);text-transform:uppercase;letter-spacing:.5px;margin-bottom:10px">Son Deneme · Derse Göre</div>
    ${S}
  </div>`;const E=n.map(R=>(EXAM_DEFS[R.type]||[]).reduce((K,oe)=>{var fe;return K+Number(((fe=R.nets)==null?void 0:fe[oe])||0)},0)),f=Math.max(...E,10),$=600,w=160,B=40,x=16,_=28,z=30,I=$-B-x,T=w-_-z,D=n.length,C=R=>B+(D<=1?I/2:R/(D-1)*I),L=R=>_+T-R/f*T,k=f/4,M=k<=10?10:k<=20?20:k<=25?25:50,j=[];for(let R=0;R<=f+M;R+=M)R<=f*1.12&&j.push(R);const P=j.map(R=>{const N=L(R).toFixed(1);return`<line x1="${B}" y1="${N}" x2="${$-x}" y2="${N}" stroke="rgba(255,255,255,0.05)" stroke-width="1"/><text x="${B-5}" y="${(L(R)+3.5).toFixed(1)}" text-anchor="end" font-size="9" fill="rgba(200,215,230,0.28)" font-family="system-ui,sans-serif">${R}</text>`}).join(""),Y=n.map((R,N)=>`${C(N).toFixed(1)},${L(E[N]).toFixed(1)}`).join(" "),H=`M ${C(0).toFixed(1)},${L(E[0]).toFixed(1)} `+n.slice(1).map((R,N)=>`L ${C(N+1).toFixed(1)},${L(E[N+1]).toFixed(1)}`).join(" ")+` L ${C(D-1).toFixed(1)},${(_+T).toFixed(1)} L ${C(0).toFixed(1)},${(_+T).toFixed(1)} Z`,O="ag"+Math.random().toString(36).slice(2,7),q=n.map((R,N)=>{const K=C(N).toFixed(1),oe=L(E[N]).toFixed(1);return`<circle cx="${K}" cy="${oe}" r="5" fill="${s}" stroke="#0d0d0f" stroke-width="2.5"/><text x="${K}" y="${(L(E[N])-10).toFixed(1)}" text-anchor="middle" font-size="9.5" font-weight="700" fill="${s}" font-family="system-ui,sans-serif">${E[N].toFixed(0)}</text>`}).join(""),V=n.map((R,N)=>{let K=R.name.replace(/Deneme\s+/,"#").replace(/^(TYT|AYT-SAY|AYT-EA|AYT-SOZ)\s+/,"");return K.length>7&&(K=K.slice(0,6)+"…"),`<text x="${C(N).toFixed(1)}" y="${(w-z+14).toFixed(1)}" text-anchor="middle" font-size="9" fill="rgba(200,215,230,0.35)" font-family="system-ui,sans-serif">${g(K)}</text>`}).join(""),Q=`<svg viewBox="0 0 ${$} ${w}" style="width:100%;height:auto;display:block" xmlns="http://www.w3.org/2000/svg">
  <defs><linearGradient id="${O}" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="${s}" stop-opacity="0.2"/>
    <stop offset="100%" stop-color="${s}" stop-opacity="0"/>
  </linearGradient></defs>
  ${P}
  <path d="${H}" fill="url(#${O})"/>
  <polyline points="${Y}" fill="none" stroke="${s}" stroke-width="2.5" stroke-linejoin="round" stroke-linecap="round"/>
  ${q}${V}
</svg>`;return`<div class="card cp" style="margin-bottom:16px">
    <div style="font-size:11px;font-weight:700;margin-bottom:12px;color:var(--text-mid);text-transform:uppercase;letter-spacing:.5px">📊 Deneme Takibi</div>
    ${v}
    <div style="font-size:10px;font-weight:700;color:var(--text-dim);text-transform:uppercase;letter-spacing:.5px;margin-bottom:8px">Toplam Net Trendi · Son ${D} Deneme</div>
    ${Q}
    <div style="font-size:10px;font-weight:700;color:var(--text-dim);text-transform:uppercase;letter-spacing:.5px;margin:16px 0 10px">Son Deneme · Derse Göre</div>
    ${S}
  </div>`}function Fe(){const e=document.getElementById("view-exams"),t=l.students.find(o=>o.id===l.activeStuId),n=[...l.exams].filter(o=>o.studentId===l.activeStuId).sort((o,s)=>s.date.localeCompare(o.date)),a=no(n,t),i=n.length?n.map(o=>{const s=EXAM_DEFS[o.type]||[],r=s.reduce((d,c)=>{var p;return d+Number(((p=o.nets)==null?void 0:p[c])||0)},0).toFixed(1);return`<div style="background:var(--surface);border:1px solid var(--border);border-radius:12px;padding:16px;margin-bottom:10px;">
      <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:12px">
        <div>
          <div style="font-size:14px;font-weight:700">${g(o.name)}</div>
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
      ${On(o,n)}
      ${o.note?`<div style="margin-top:10px;font-size:12px;color:var(--text-mid);font-style:italic">"${g(o.note)}"</div>`:""}
      ${(()=>{if(!o.examDetails||!Object.keys(o.examDetails).length)return"";const d=s.map(c=>{const p=o.examDetails[c];if(!p)return"";const m=Math.max(0,(p.dogru||0)-(p.yanlis||0)/4).toFixed(2),u=p.yanlis_konular||[];return`<div style="padding:6px 0;border-bottom:1px solid var(--border)">
            <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:${u.length?"5px":"0"}">
              <span style="font-size:11px;font-weight:700;color:var(--text-mid)">${g(c)}</span>
              <span style="font-size:11px;color:var(--text-dim)">D:<b style="color:var(--green)">${p.dogru||0}</b> Y:<b style="color:var(--red)">${p.yanlis||0}</b> B:<b>${p.bos||0}</b> · Net <b style="color:var(--accent)">${m}</b></span>
            </div>
            ${u.length?`<div style="display:flex;flex-wrap:wrap;gap:3px">${u.map(v=>`<span style="font-size:10px;padding:2px 8px;border-radius:10px;background:rgba(255,92,122,.1);color:var(--red);border:1px solid rgba(255,92,122,.2)">${g(v)}</span>`).join("")}</div>`:""}
          </div>`}).filter(Boolean).join("");return d?`<div style="margin-top:10px;background:var(--surface2);border:1px solid var(--border);border-radius:9px;padding:10px 14px">
          <div style="font-size:10px;font-weight:700;color:var(--text-dim);text-transform:uppercase;letter-spacing:.5px;margin-bottom:8px">📋 Ders Detayları</div>
          ${d}
        </div>`:""})()}
      ${o.coachComment?`<div style="margin-top:8px;background:var(--accent-dim);border:1px solid rgba(240,165,0,.2);border-radius:8px;padding:9px 12px;font-size:12px"><span style="font-weight:700;color:var(--accent)">Koç: </span>${g(o.coachComment)}</div>`:""}
    </div>`}).join(""):'<div class="empty"><p>Henüz deneme sonucu yok</p></div>';e.innerHTML=`
    <button class="back-link" onclick="switchTab('student-detail')">← ${t?g(t.name):"Öğrenci"}</button>
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px">
      <div>
        <div style="font-family:'Inter',sans-serif;font-size:18px;font-weight:800">${t?g(t.name)+"  — ":""} Denemeler</div>
        <div style="font-size:12px;color:var(--text-mid);margin-top:2px">${n.length} deneme kaydı</div>
      </div>
      <div style="display:flex;gap:8px">
        <button class="btn btn-ghost btn-sm" onclick="openKonuRaporu('${l.activeStuId}')">📊 Konu Raporu</button>
      </div>
    </div>
    ${a}
    ${i}`}let Fn=null,Ie="TYT";const ao=["TYT","AYT-SAY","AYT-EA","AYT-SOZ"];function Gn(){const t=l.exams.filter(s=>s.studentId===Fn).filter(s=>s.type===Ie&&s.examDetails&&Object.keys(s.examDetails).length),n={};t.forEach(s=>{Object.entries(s.examDetails).forEach(([r,d])=>{(d.yanlis_konular||[]).forEach(c=>{const p=r+"§"+c;n[p]=(n[p]||0)+1})})});const a=Object.entries(n).sort((s,r)=>r[1]-s[1]).map(([s,r])=>{const[d,c]=s.split("§"),p=Math.round(r/Math.max(t.length,1)*100),m=r>=3?"var(--red)":r===2?"var(--accent)":"var(--text-mid)";return`<tr style="border-bottom:1px solid var(--border)">
        <td style="padding:8px 10px;font-size:12px;color:var(--text-dim);white-space:nowrap">${g(d)}</td>
        <td style="padding:8px 10px;font-size:13px;font-weight:600">${g(c)}</td>
        <td style="padding:8px 10px;text-align:center">
          <span style="font-size:14px;font-weight:800;color:${m}">${r}</span>
          <span style="font-size:10px;color:var(--text-dim)">/${t.length}</span>
        </td>
        <td style="padding:8px 10px;min-width:90px">
          <div style="height:6px;border-radius:3px;background:var(--surface2);overflow:hidden">
            <div style="height:100%;width:${p}%;background:${m};border-radius:3px;transition:width .3s"></div>
          </div>
        </td>
      </tr>`}),i=ao.map(s=>`<button onclick="window._krType='${s}';_krRenderBody()" style="padding:6px 14px;border-radius:20px;border:1px solid ${s===Ie?"var(--accent)":"var(--border)"};background:${s===Ie?"var(--accent-dim)":"transparent"};color:${s===Ie?"var(--accent)":"var(--text-dim)"};font-size:12px;cursor:pointer;font-weight:${s===Ie?700:400}">${s}</button>`).join(""),o=a.length?`<div style="font-size:11px;color:var(--text-dim);margin-bottom:12px">${t.length} denemeden derlendi · <b>${a.length}</b> farklı yanlış konu · 🔴 ≥3 tekrar kritik</div>
       <div style="overflow-x:auto">
       <table style="width:100%;border-collapse:collapse">
         <thead><tr style="border-bottom:2px solid var(--border)">
           <th style="padding:6px 10px;font-size:10px;color:var(--text-dim);text-align:left;text-transform:uppercase;letter-spacing:.5px">Ders</th>
           <th style="padding:6px 10px;font-size:10px;color:var(--text-dim);text-align:left;text-transform:uppercase;letter-spacing:.5px">Konu</th>
           <th style="padding:6px 10px;font-size:10px;color:var(--text-dim);text-align:center;text-transform:uppercase;letter-spacing:.5px">Tekrar</th>
           <th style="padding:6px 10px;font-size:10px;color:var(--text-dim);text-align:left;text-transform:uppercase;letter-spacing:.5px">Sıklık</th>
         </tr></thead>
         <tbody>${a.join("")}</tbody>
       </table></div>`:`<div style="text-align:center;padding:40px;color:var(--text-dim);font-size:13px">${t.length?"Bu denemeler için henüz konu işaretlenmemiş.":Ie+" tipi deneme kaydı yok."}</div>`;document.getElementById("konuRaporuBody").innerHTML=`
    <div style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:16px">${i}</div>
    ${o}`}window._krRenderBody=Gn;function io(e){Fn=e;const t=l.exams.find(n=>n.studentId===e&&n.examDetails&&Object.keys(n.examDetails).length);Ie=(t==null?void 0:t.type)||"TYT",Gn(),G("konuRaporuModal")}window.openKonuRaporu=io;function oo(e){const t=l.exams.find(n=>n.id===e);document.getElementById("cmExamId").value=e,document.getElementById("cmText").value=(t==null?void 0:t.coachComment)||"",G("commentModal")}async function so(){const e=document.getElementById("cmExamId").value,t=document.getElementById("cmText").value.trim();await b.from("exams").update({coach_comment:t}).eq("id",e);const n=l.exams.find(a=>a.id===e);n&&(n.coachComment=t),U("commentModal"),Fe(),h("Yorum kaydedildi ✓")}async function ro(e){await ae("Bu denemeyi silmek istediğinizden emin misiniz?")&&(await b.from("exams").delete().eq("id",e),l.exams=l.exams.filter(t=>t.id!==e),Fe(),h("Silindi"))}function Un(){const e=document.getElementById("view-messages");e.innerHTML=`<div class="sh" style="margin-bottom:14px"><h2>Mesajlar</h2></div>
    <div class="msg-layout">
      <div class="msg-sidebar">
        <div class="msg-sidebar-hd">Öğrenciler</div>
        ${l.students.map(t=>{const n=l.messages[t.id]||[],a=n[n.length-1],i=n.filter(o=>o.from==="student"&&!o.read).length;return`<div class="msg-contact ${l.msgThread===t.id?"active":""}" onclick="selectThread('${t.id}')">
            <div class="msg-contact-avatar" style="background:${t.color}">${t.name[0]}</div>
            <div style="flex:1;min-width:0">
              <div class="msg-contact-name">${g(t.name.split(" ")[0])}</div>
              <div class="msg-contact-last">${a?g(a.text.slice(0,35)):"Mesaj yok"}</div>
            </div>
            ${i?`<span class="msg-unread">${i}</span>`:""}
          </div>`}).join("")}
      </div>
      <div class="msg-main" id="msgMain">
        ${l.msgThread?Te(l.msgThread,"coach"):'<div class="no-chat-sel">Öğrenci seçin</div>'}
      </div>
    </div>`,l.msgThread&&Ee()}async function lo(e){l.msgThread=e;const t=(l.messages[e]||[]).filter(n=>n.from==="student"&&!n.read&&n._id).map(n=>n._id);t.length&&await b.from("messages").update({read:!0}).in("id",t),(l.messages[e]||[]).forEach(n=>{n.from==="student"&&(n.read=!0)}),document.getElementById("msgMain").innerHTML=Te(e,"coach"),document.querySelectorAll(".msg-contact").forEach(n=>n.classList.remove("active")),l.students.forEach((n,a)=>{var i;n.id===e&&((i=document.querySelectorAll(".msg-contact")[a])==null||i.classList.add("active"))}),Ee(),Wt()}let Be=null;function Te(e,t){const n=l.students.find(s=>s.id===e),a=l.messages[e]||[],i=(n==null?void 0:n.color)||"#E8613A",o=a.map(s=>{const r=t==="coach"&&s.from==="coach"||t==="student"&&s.from==="student",d=s.image_url?`<img src="${g(s.image_url)}" onclick="window.open('${g(s.image_url)}','_blank')" />`:"",c=s.text?g(s.text):"",p=d+(d&&c?`<div style="margin-top:5px">${c}</div>`:c);return r?`<div class="msg-row out">
        <div class="msg-bubble out">${p}<div class="msg-bubble-time">${s.time}</div></div>
      </div>`:`<div class="msg-row in">
        <div class="msg-avatar-sm" style="background:${i}">${(n==null?void 0:n.name[0])||"?"}</div>
        <div class="msg-bubble in">${p}<div class="msg-bubble-time">${s.time}</div></div>
      </div>`}).join("");return`<div class="msg-main-hd">
    <div class="msg-main-hd-avatar" style="background:${i}">${(n==null?void 0:n.name[0])||"?"}</div>
    <div>
      <div class="msg-main-hd-name">${g((n==null?void 0:n.name)||"")}</div>
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
  </div>`}window._pickMsgImg=function(e,t,n){const a=e.files[0];if(!a)return;if(a.size>5*1024*1024){h("Dosya max 5 MB olabilir"),e.value="";return}Be={file:a};const i=document.getElementById("msgImgPreview"),o=document.getElementById("msgImgThumb"),s=document.getElementById("msgImgName");if(a.type.startsWith("image/")){const r=new FileReader;r.onload=d=>{o.src=d.target.result,o.style.display="block"},r.readAsDataURL(a)}else o.style.display="none";s.textContent=a.name,i.style.display="flex",e.value=""};window._cancelMsgImg=function(){Be=null,document.getElementById("msgImgPreview").style.display="none"};window._handleMsgPaste=function(e,t,n){var i;const a=(i=e.clipboardData)==null?void 0:i.items;if(a){for(const o of a)if(o.type.startsWith("image/")){e.preventDefault();const s=o.getAsFile();if(!s)return;if(s.size>5*1024*1024){h("Dosya max 5 MB olabilir");return}Be={file:s};const r=new FileReader;r.onload=d=>{const c=document.getElementById("msgImgPreview"),p=document.getElementById("msgImgThumb"),m=document.getElementById("msgImgName");p.src=d.target.result,p.style.display="block",m.textContent="Yapıştırılan görsel",c&&(c.style.display="flex")},r.readAsDataURL(s);return}}};async function co(e,t){var d,c,p;const n=document.getElementById("msgInput"),a=n.value.trim();if(!a&&!Be)return;const i=y.coachId||((d=l.students.find(m=>m.id===e))==null?void 0:d.coachId)||((c=l.students.find(m=>m.id===y.studentId))==null?void 0:c.coachId);let o=null;if(Be){const m=Be.file,v=((p=m.name)!=null&&p.includes(".")?m.name.split(".").pop():"")||(m.type==="image/png"?"png":m.type==="image/webp"?"webp":"jpg"),S=`${e}/${Date.now()}.${v}`,{error:E}=await b.storage.from("chat_images").upload(S,m,{upsert:!0});if(E){h("Görsel yüklenemedi: "+E.message);return}const{data:f}=b.storage.from("chat_images").getPublicUrl(S);o=f.publicUrl,Be=null,document.getElementById("msgImgPreview").style.display="none"}const{data:s,error:r}=await b.from("messages").insert({student_id:e,coach_id:i,from_role:t,text:a||null,image_url:o,read:!1}).select().single();if(r){h("Hata: "+r.message);return}l.messages[e]||(l.messages[e]=[]),l.messages[e].push({_id:s.id,from:t,text:a||"",image_url:o,time:new Date().toLocaleTimeString("tr-TR",{hour:"2-digit",minute:"2-digit"}),read:!1}),n.value="",n.style.height="auto",currentTab==="messages"&&(document.getElementById("msgMain").innerHTML=Te(e,"coach"),Ee()),currentTab==="smessages"&&(document.getElementById("msgMain").innerHTML=Te(e,"student"),Ee()),t==="student"&&i&&b.auth.getSession().then(({data:{session:m}})=>{var v;const u=m==null?void 0:m.access_token;u&&fetch("/api/mailer",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${u}`},body:JSON.stringify({type:"new_message",coach_id:i,student_name:((v=y.dbUser)==null?void 0:v.full_name)||"Öğrenciniz",message_preview:a?a.slice(0,200):"📷 Görsel gönderdi"})}).catch(()=>{})})}function Ee(){setTimeout(()=>{const e=document.getElementById("msgBody");e&&(e.scrollTop=e.scrollHeight)},60)}function xt(){var u;const e=document.getElementById("view-portal");if(!e)return;let t=l.students.find(v=>v.id===y.studentId);if(!t&&l.students.length>0&&(t=l.students[0]),!t){e.innerHTML=`<div style="text-align:center;padding:60px 20px;color:var(--text-mid)">
      <div style="font-size:36px;margin-bottom:12px">⏳</div>
      <p style="font-size:14px">Profil yükleniyor...</p>
    </div>`,setTimeout(()=>{l.students.length&&xt()},800);return}y.studentId||(y.studentId=t.id),l.activeStuId=t.id;const n=me(),a=`${t.id}_${n}`,i=l.tasks[a]||[],o=i.filter(v=>v.done).length,s=l.appointments.filter(v=>v.studentId===t.id&&v.date>=n).sort((v,S)=>v.date.localeCompare(S.date))[0],r=(l.messages[t.id]||[]).filter(v=>v.from==="coach"&&!v.read).length,d=((u=l.konuMastery)==null?void 0:u[t.id])||{},c=[],p=new Date;p.setDate(p.getDate()-30),Object.entries(d).forEach(([v,S])=>{Object.entries(S).forEach(([E,f])=>{if(f.status==="td"||f.status==="not_started")return;const $=f.last_review_date?new Date(f.last_review_date):null,w=$?Math.floor((Date.now()-$.getTime())/864e5):999,B=f.stars<=2,x=w>20;(B||x)&&c.push({konu:E,subject:v,stars:f.stars,daysSince:w})})}),c.sort((v,S)=>v.stars-S.stars||S.daysSince-v.daysSince);const m=c.length>0?`
    <div class="card cp" style="border-color:rgba(239,68,68,.3)">
      <div class="portal-sec-title">🔄 Tekrar Gereken Konular <span style="font-size:11px;background:rgba(239,68,68,.12);color:#ef4444;padding:2px 8px;border-radius:99px;font-weight:700">${c.length}</span></div>
      ${c.slice(0,5).map(v=>{const S=je[v.stars];return v.daysSince<999&&`${v.daysSince}`,`<div style="display:flex;align-items:center;gap:10px;padding:7px 0;border-bottom:1px solid var(--border)">
          <span style="font-size:13px;color:${S.color};font-weight:800;white-space:nowrap">${"⭐".repeat(v.stars)||"○"}</span>
          <div style="flex:1;min-width:0">
            <div style="font-size:12px;font-weight:700;color:var(--text);overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${g(v.konu)}</div>
            <div style="font-size:10px;color:var(--text-dim)">${g(v.subject)} · Son: ${v.daysSince<999?v.daysSince+"g önce":"Hiç"}</div>
          </div>
        </div>`}).join("")}
      ${c.length>5?`<div style="font-size:11px;color:var(--text-dim);margin-top:8px;text-align:center">+${c.length-5} daha…</div>`:""}
    </div>`:"";e.innerHTML=`
    <div class="portal-hero">
      <div class="portal-avatar" style="background:${t.color}">${t.name[0]}</div>
      <div class="portal-info">
        <h1>Merhaba, ${g(t.name.split(" ")[0])}! 👋</h1>
        <p>${g(t.target)} · ${new Date().toLocaleDateString("tr-TR",{weekday:"long",day:"numeric",month:"long"})}</p>
      </div>
    </div>
    <div class="portal-grid">
      <div class="card cp">
        <div class="portal-sec-title">📋 Bugünün Görevleri</div>
        ${i.length?`
          ${i.map((v,S)=>`
            <div data-task-id="${v._id}" class="task-card task-${v.type} ${v.done?"done":""}" style="margin-bottom:6px">
              <div class="tc-check ${v.done?"on":""}" onclick="stuToggleTask('${n}',${S})"></div>
              <div class="tc-body">
                <div class="tc-type">${Qe(v.type)}${v.exam?" · "+v.exam:""}</div>
                <div class="tc-subject">${g(v.subject)}</div>
                <div class="tc-meta">${v.duration} dk${v.note?" · "+g(v.note):""}</div>
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
          <div style="font-size:12px;color:var(--text-mid);margin-top:3px">${g(s.type)} · ${s.duration} dk</div>`:'<div style="font-size:13px;color:var(--text-dim)">Yaklaşan randevu yok</div>'}
        </div>
        ${r>0?`<div class="card cp" style="border-color:var(--accent);cursor:pointer" onclick="switchTab('smessages')">
          <div style="display:flex;align-items:center;gap:10px">
            <span style="font-size:22px">💬</span>
            <div><div style="font-weight:700">${r} yeni mesaj</div><div style="font-size:12px;color:var(--text-mid)">Koçundan</div></div>
          </div>
        </div>`:""}
        ${m}
      </div>
    </div>`}async function po(e,t){var s;const n=l.students.find(r=>r.id===y.studentId);if(!n)return;const a=`${n.id}_${e}`,i=(s=l.tasks[a])==null?void 0:s[t];if(!i)return;const o=!i.done;await b.from("tasks").update({done:o}).eq("id",i._id),i.done=o,xt()}function _e(){const e=l.students.find(p=>p.id===y.studentId);if(!e)return;const t=document.getElementById("view-sportal"),n=e.weekStart??0,a=te(l.weekOffset,n),i=J(a,6),o=me(),s=localStorage.getItem("ra_program_mode")||"weekly";let r="";for(let p=0;p<7;p++){const m=J(a,p),u=F(m),v=u===o,S=`${e.id}_${u}`,E=l.tasks[S]||[],f=E.reduce((_,z)=>_+Number(z.duration),0),$=E.reduce((_,z)=>_+(z.done?Number(z.duration):0),0);DAYS_TR[(n+p)%7];const w=[...E];s==="hourly"&&w.sort((_,z)=>_.start_time&&!z.start_time?-1:!_.start_time&&z.start_time?1:_.start_time&&z.start_time?_.start_time.localeCompare(z.start_time):0);const B=w.map(_=>{const z=E.indexOf(_),I=_.start_time?`<div class="tc-time-badge">🕒 ${_.start_time}</div>`:"";return`
        <div data-task-id="${_._id}" class="task-card task-${_.type} ${_.done?"done":""} ${_.start_time?"hourly-card":""}" onclick="openTaskDetail('${u}',${z},'student')" style="cursor:pointer">
          <div class="tc-check ${_.done?"on":""}" onclick="event.stopPropagation();stuToggleTask2('${u}',${z})"></div>
          <div class="tc-body">
            ${I}
            <div class="tc-type">${Qe(_.type)}${_.exam?" · "+_.exam:""}</div>
            <div class="tc-subject">${g(_.subject)}</div>
            <div class="tc-meta">${_.duration} dk</div>
          </div>
        </div>`}).join(""),x=["Pzt","Sal","Çar","Per","Cum","Cmt","Paz"][(n+p)%7];r+=`<div class="day-col ${v?"today":""}">
      <div class="day-hd">
        <div><div class="day-name-lbl">${x}</div><div class="day-num">${m.getDate()}</div></div>
        <span class="day-badge" style="font-size:8.5px">${We($)} / ${We(f)}</span>
      </div>
      <div class="day-tasks-list">${B||'<div class="empty" style="padding:8px 0"><p style="font-size:11px">Görev yok</p></div>'}</div>
    </div>`}const d=new Date(2026,5,14),c=Math.max(0,Math.ceil((d-new Date)/(1e3*60*60*24)));t.innerHTML=`
    ${c>0?`<div style="text-align:center;margin-bottom:10px;padding:7px 12px;background:var(--surface2);border-radius:10px;font-size:12px;color:var(--text-mid)">📅 YKS 2026'ya <strong style="color:var(--accent)">${c}</strong> gün kaldı</div>`:""}
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
    <div class="week-grid">${r}</div>`}async function mo(e,t){var s;const n=l.students.find(r=>r.id===y.studentId);if(!n)return;const a=`${n.id}_${e}`,i=(s=l.tasks[a])==null?void 0:s[t];if(!i)return;const o=!i.done;if(await b.from("tasks").update({done:o}).eq("id",i._id),i.done=o,_e(),o&&e===me()){const r=l.tasks[a]||[];r.length>0&&r.every(d=>d.done)&&uo()}}function uo(){if(document.getElementById("_celebOverlay"))return;if(!document.getElementById("_celebStyle")){const t=document.createElement("style");t.id="_celebStyle",t.textContent="@keyframes celebPop{0%{opacity:0;transform:scale(.7) translateY(20px)}60%{opacity:1;transform:scale(1.05) translateY(-4px)}100%{opacity:1;transform:scale(1) translateY(0)}}@keyframes celebFade{0%,70%{opacity:1}100%{opacity:0}}",document.head.appendChild(t)}const e=document.createElement("div");e.id="_celebOverlay",e.style.cssText="position:fixed;inset:0;z-index:99999;display:flex;align-items:center;justify-content:center;pointer-events:none",e.innerHTML=`<div style="background:var(--surface);border:2px solid var(--green);border-radius:20px;padding:28px 36px;text-align:center;box-shadow:0 20px 60px rgba(0,0,0,.25);animation:celebPop .4s ease-out,celebFade 3.5s ease-in-out forwards;pointer-events:auto">
    <div style="font-size:52px;margin-bottom:8px">🏆</div>
    <div style="font-size:18px;font-weight:800;color:var(--green);margin-bottom:4px">Günü Tamamladın!</div>
    <div style="font-size:13px;color:var(--text-mid)">Bugünkü tüm görevleri bitirdin. Harikasın 💪</div>
  </div>`,document.body.appendChild(e),setTimeout(()=>e.remove(),3600)}function go(e){l.weekOffset+=e,be(),_e()}let Me={};window._fbChip=function(e,t,n){if(Me[e]=isNaN(t)?t:Number(t),n.parentElement.querySelectorAll("[data-fb-val]").forEach(a=>{const i=a.dataset.fbVal==t;a.style.background=i?a.dataset.fbBg:"var(--surface2)",a.style.borderColor=i?a.dataset.fbColor:"var(--border)",a.style.color=i?a.dataset.fbColor:"var(--text-mid)",a.style.fontWeight=i?"700":"600"}),e==="status"){const a=document.getElementById("fbBlockerSection");a&&(a.style.display=t==="completed"?"none":"block")}};window._fbStar=function(e){Me.focus=e;for(let t=1;t<=5;t++){const n=document.getElementById("fbStar"+t);n&&(n.textContent=t<=e?"★":"☆",n.style.color=t<=e?"#f0a500":"var(--text-dim)")}};function vo(e){const t=e.student_feedback||{},n=t.status||(e.done?"completed":""),a=t.time_spent!=null?Math.floor(t.time_spent/60):"",i=t.time_spent!=null?t.time_spent%60:"",o=t.focus||0,s=t.difficulty||0,r=t.blocker||"";Me={status:n||null,focus:o,difficulty:s,blocker:r};const d=[{v:"completed",l:"✓ Tamamladım",c:"#3ecf8e",bg:"rgba(62,207,142,.12)"},{v:"partial",l:"~ Kısmen",c:"#f0a500",bg:"rgba(240,165,0,.12)"},{v:"failed",l:"✕ Yapamadım",c:"#ef4444",bg:"rgba(239,68,68,.12)"}],c=[{v:1,l:"Çok Kolay",c:"#3ecf8e",bg:"rgba(62,207,142,.1)"},{v:2,l:"Kolay",c:"#86efac",bg:"rgba(134,239,172,.1)"},{v:3,l:"Orta",c:"#f0a500",bg:"rgba(240,165,0,.1)"},{v:4,l:"Zor",c:"#fb923c",bg:"rgba(251,146,60,.1)"},{v:5,l:"Çok Zor",c:"#ef4444",bg:"rgba(239,68,68,.1)"}],p=[{v:"time",l:"Zamanım yetmedi"},{v:"topic",l:"Konuyu anlamadım"},{v:"hard",l:"Kaynak çok zordu"},{v:"moti",l:"İstek/motivasyonum yoktu"}];return`<div style="background:var(--surface2);border:1px solid var(--border);border-radius:11px;padding:14px 16px;margin-bottom:14px">

    <div style="margin-bottom:14px">
      <div style="font-size:10px;font-weight:700;color:var(--text-dim);text-transform:uppercase;letter-spacing:.5px;margin-bottom:8px">Tamamlanma Durumu</div>
      <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:6px">
        ${d.map(m=>`<button onclick="window._fbChip('status','${m.v}',this)" data-fb-val="${m.v}" data-fb-color="${m.c}" data-fb-bg="${m.bg}"
          style="padding:9px 4px;border-radius:9px;border:1.5px solid ${n===m.v?m.c:"var(--border)"};background:${n===m.v?m.bg:"var(--surface2)"};color:${n===m.v?m.c:"var(--text-mid)"};font-size:12px;font-weight:${n===m.v?"700":"600"};cursor:pointer;transition:all .15s">${g(m.l)}</button>`).join("")}
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
          style="flex:1;padding:7px 3px;border-radius:8px;border:1.5px solid ${s===m.v?m.c:"var(--border)"};background:${s===m.v?m.bg:"var(--surface2)"};color:${s===m.v?m.c:"var(--text-mid)"};font-size:10px;font-weight:${s===m.v?"700":"600"};cursor:pointer;transition:all .15s;text-align:center">${g(m.l)}</button>`).join("")}
      </div>
    </div>

    <div id="fbBlockerSection" style="display:${n&&n!=="completed"?"block":"none"}">
      <div style="font-size:10px;font-weight:700;color:var(--text-dim);text-transform:uppercase;letter-spacing:.5px;margin-bottom:8px">Neden Yapamadın?</div>
      <div style="display:flex;flex-wrap:wrap;gap:6px">
        ${p.map(m=>`<button onclick="window._fbChip('blocker','${m.v}',this)" data-fb-val="${m.v}" data-fb-color="#fb923c" data-fb-bg="rgba(251,146,60,.1)"
          style="padding:6px 11px;border-radius:8px;border:1.5px solid ${r===m.v?"#fb923c":"var(--border)"};background:${r===m.v?"rgba(251,146,60,.1)":"var(--surface2)"};color:${r===m.v?"#fb923c":"var(--text-mid)"};font-size:11px;font-weight:${r===m.v?"700":"600"};cursor:pointer;transition:all .15s">${g(m.l)}</button>`).join("")}
      </div>
    </div>

  </div>`}function fo(e){const t=e.student_feedback||{};if(!(t.status||t.focus||t.difficulty||t.time_spent>0||t.blocker))return"";const a={completed:{l:"Tamamladı",c:"#3ecf8e",bg:"rgba(62,207,142,.1)"},partial:{l:"Kısmen Tamamladı",c:"#f0a500",bg:"rgba(240,165,0,.1)"},failed:{l:"Yapamadı",c:"#ef4444",bg:"rgba(239,68,68,.1)"}},i={1:"Çok Kolay",2:"Kolay",3:"Orta",4:"Zor",5:"Çok Zor"},o={time:"Zamanı yetmedi",topic:"Konuyu anlayamadı",hard:"Kaynak çok zordu",moti:"Motivasyon yok"},s=a[t.status],r=t.time_spent,d=r>0?(Math.floor(r/60)>0?Math.floor(r/60)+"sa ":"")+(r%60>0?r%60+"dk":""):null,c=t.focus?"★".repeat(t.focus)+"☆".repeat(5-t.focus):null,p={1:"#3ecf8e",2:"#86efac",3:"#f0a500",4:"#fb923c",5:"#ef4444"},m=t.difficulty?p[t.difficulty]:"var(--text-mid)";return`<div style="background:var(--surface2);border:1px solid var(--border);border-radius:11px;padding:12px 16px;margin-bottom:14px">
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
  </div>`}async function Gt(e,t,n){var v,S,E,f;const i=`${y.role==="student"?y.studentId:l.activeStuId}_${e}`,o=(v=l.tasks[i])==null?void 0:v[t];if(!o)return;if(n==="coach"&&o._id){const{data:$}=await b.from("tasks").select("*").eq("id",o._id).single();$&&(o.done=$.done,o.student_note=$.student_note||"",o.student_result=$.student_result||null,o.student_feedback=$.student_feedback||null)}let s=document.getElementById("taskDetailModal");s||(s=document.createElement("div"),s.id="taskDetailModal",s.className="modal-bg",document.body.appendChild(s),s.addEventListener("click",$=>{$.target===s&&s.classList.remove("open")}));const r={soru:"var(--blue)",konu:"#c084fc",deneme:"var(--accent)",diger:"var(--text-mid)"},d={soru:"Soru Bankası",konu:"Konu Anlatımı",deneme:"Deneme",diger:"Diğer"},c=r[o.type]||"var(--accent)",p=o.type==="konu",m=o.task_items||[];let u="";m.length>0?u=`<div style="margin-bottom:14px">
      <div style="font-size:11px;font-weight:700;color:var(--text-dim);text-transform:uppercase;letter-spacing:.5px;margin-bottom:8px">${p?"Videolar":"Testler"} (${m.length})</div>
      <div style="background:var(--surface2);border:1px solid var(--border);border-radius:10px;overflow:hidden;max-height:200px;overflow-y:auto">
        ${m.map(($,w)=>`
          <label style="display:flex;align-items:center;gap:10px;padding:8px 12px;border-bottom:1px solid var(--border);${w===m.length-1?"border-bottom:none":""};cursor:${n==="coach"?"default":"pointer"};transition:background .1s"
            ${n==="coach"?"":`onmouseover="this.style.background='var(--surface3)'" onmouseout="this.style.background=''"`}>
            <input type="checkbox" ${$.done?"checked":""} ${n==="coach"?"disabled":""} onchange="toggleDetailItem('${e}',${t},${w},'${n}')"
              style="width:16px;height:16px;accent-color:var(--accent);cursor:${n==="coach"?"default":"pointer"};flex-shrink:0;">
            <div style="width:20px;height:20px;border-radius:6px;background:${c}22;color:${c};font-size:10px;font-weight:800;display:flex;align-items:center;justify-content:center;flex-shrink:0;margin-left:4px">${w+1}</div>
            <div style="flex:1;min-width:0">
              <div style="font-size:13px;font-weight:600;line-height:1.4;${$.done?"text-decoration:line-through;color:var(--text-dim);":""}">${g($.label||`Ders ${w+1}`)}</div>
              <div style="font-size:11px;color:var(--text-mid);margin-top:2px">⏱ ${$.soru>0?p?$.soru+" dk":$.soru+" soru":"?"}</div>
            </div>
            ${$.url?`<a href="${g($.url)}" target="_blank" onclick="event.stopPropagation()"
              style="display:flex;align-items:center;gap:4px;font-size:12px;font-weight:700;background:#cc000022;color:#ff5555;border:1px solid #aa222233;padding:6px 12px;border-radius:8px;text-decoration:none;flex-shrink:0;white-space:nowrap">▶ İzle</a>`:""}
          </label>`).join("")}
      </div>
    </div>`:o.note&&(o.note.includes("test:")||o.note.includes("video:"))&&(u=`<div style="margin-bottom:14px">
      <div style="font-size:11px;font-weight:700;color:var(--text-dim);text-transform:uppercase;letter-spacing:.5px;margin-bottom:6px">${p?"Videolar":"Testler"}</div>
      <div style="background:var(--surface2);border:1px solid var(--border);border-radius:10px;padding:10px 12px;font-size:12px;color:var(--text-mid)">${g(o.note)}</div>
    </div>`),s.innerHTML=`<div class="modal">
    <button class="modal-close" onclick="cm('taskDetailModal')">×</button>

    <!-- Görev başlık -->
    <div style="border-left:3px solid ${c};padding-left:12px;margin-bottom:20px">
      <div style="font-size:10px;font-weight:700;color:${c};text-transform:uppercase;letter-spacing:.5px;margin-bottom:4px">${d[o.type]||o.type}${o.exam?" · "+o.exam:""}</div>
      <div style="font-family:'Inter',sans-serif;font-size:18px;font-weight:800;line-height:1.2">${g(o.subject)}</div>
      <div style="font-size:12px;color:var(--text-dim);margin-top:4px">${new Date(e+"T12:00").toLocaleDateString("tr-TR",{weekday:"long",day:"numeric",month:"long"})}</div>
    </div>

    <!-- Geri bildirim: öğrenci=form, koç=özet+durum -->
    ${n==="student"?vo(o):`
    <div style="background:var(--surface2);border:1.5px solid ${o.done?"var(--green)":"var(--border)"};border-radius:11px;padding:12px 16px;display:flex;align-items:center;gap:10px;margin-bottom:14px">
      <div style="width:20px;height:20px;border-radius:5px;background:${o.done?"var(--green)":"transparent"};border:2px solid ${o.done?"var(--green)":"var(--border)"};display:flex;align-items:center;justify-content:center;font-size:12px;flex-shrink:0">${o.done?"✓":""}</div>
      <div style="font-size:13px;font-weight:700;color:${o.done?"var(--green)":"var(--text-dim)"}">${o.done?"Tamamlandı":"Henüz tamamlanmadı"}</div>
    </div>
    ${fo(o)}`}

    <!-- Test/Video listesi -->
    ${u}

    <!-- Sonuç Gir (soru/deneme türleri için) -->
    ${o.type==="soru"||o.type==="deneme"?`
    <div style="background:var(--surface2);border:1px solid var(--border);border-radius:11px;padding:14px 16px;margin-bottom:14px">
      <div style="font-size:11px;font-weight:700;color:var(--text-dim);text-transform:uppercase;letter-spacing:.5px;margin-bottom:10px">📊 Sonucu Gir</div>
      <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px">
        <div>
          <div style="font-size:10px;font-weight:700;color:var(--green);margin-bottom:4px">✓ Doğru</div>
          <input type="number" id="tdDogru" min="0" value="${((S=o.student_result)==null?void 0:S.dogru)??""}" placeholder="0" ${n==="coach"?"disabled":""}
            style="width:100%;padding:8px;background:var(--surface);border:1.5px solid var(--border);border-radius:8px;color:var(--text);font-size:15px;font-weight:700;text-align:center;box-sizing:border-box">
        </div>
        <div>
          <div style="font-size:10px;font-weight:700;color:var(--red);margin-bottom:4px">✗ Yanlış</div>
          <input type="number" id="tdYanlis" min="0" value="${((E=o.student_result)==null?void 0:E.yanlis)??""}" placeholder="0" ${n==="coach"?"disabled":""}
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
    ${(()=>{var w;const $=mi(o.exam,o.subject);return $?(ce=[...((w=o.student_result)==null?void 0:w.yanlis_konular)||[]],`<div style="background:var(--surface2);border:1px solid var(--border);border-radius:11px;padding:14px 16px;margin-bottom:14px">
        <div style="font-size:11px;font-weight:700;color:var(--text-dim);text-transform:uppercase;letter-spacing:.5px;margin-bottom:10px">📌 Yanlış Konular</div>
        <div style="display:flex;flex-wrap:wrap;gap:0">${$.map(B=>{const x=ce.includes(B);return`<span ${n==="coach"?"":`onclick="toggleKonuChip(this,'${B.replace(/'/g,"\\'")}')"`}
            style="display:inline-block;padding:5px 11px;margin:3px;border-radius:20px;font-size:11px;font-weight:600;cursor:${n==="coach"?"default":"pointer"};user-select:none;border:1px solid ${x?"var(--red)":"var(--border)"};background:${x?"rgba(255,92,122,.12)":"var(--surface)"};color:${x?"var(--red)":"var(--text-mid)"}">
            ${g(B)}</span>`}).join("")}</div>
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
  </div>`,G("taskDetailModal")}async function yo(e,t,n){var s;if(n==="coach")return;const i=`${y.role==="student"?y.studentId:l.activeStuId}_${e}`,o=(s=l.tasks[i])==null?void 0:s[t];o&&(o.done=!o.done,o.task_items&&Array.isArray(o.task_items)&&o.task_items.forEach(r=>{r.done=o.done}),await b.from("tasks").update({done:o.done,task_items:o.task_items||null}).eq("id",o._id),Gt(e,t,n),n==="student"?_e():Z())}async function xo(e,t,n,a){var d;if(a==="coach")return;const o=`${y.role==="student"?y.studentId:l.activeStuId}_${e}`,s=(d=l.tasks[o])==null?void 0:d[t];if(!s||!s.task_items)return;s.task_items[n].done=!s.task_items[n].done;const r=s.task_items.every(c=>c.done);s.done=r,A(!0),await b.from("tasks").update({task_items:s.task_items,done:s.done}).eq("id",s._id),A(!1),Gt(e,t,a),a==="student"?_e():Z(),h("İlerleme kaydedildi ✓")}function bo(e,t){var i,o,s;e.closest("div").querySelectorAll("button[data-speed]").forEach(r=>{const d=r.dataset.speed===t;r.style.borderColor=d?"var(--accent)":"var(--border)",r.style.background=d?"var(--accent-dim)":"var(--surface2)",r.style.color=d?"var(--accent)":"var(--text-mid)"}),document.getElementById("tdSpeed").value=t;const n=parseFloat(t),a=document.getElementById("speedCalc");if(a){const r=parseInt(((s=(o=(i=a.closest("[id=speedInfo]"))==null?void 0:i.textContent)==null?void 0:o.match(/Toplam (\d+) dk/))==null?void 0:s[1])||0);a.textContent=Math.ceil(r/n)+" dk",document.getElementById("tdDuration").value=Math.ceil(r/n)}}async function ho(e,t,n){var f,$,w,B,x;if(n==="coach")return;const i=`${y.role==="student"?y.studentId:l.activeStuId}_${e}`,o=(f=l.tasks[i])==null?void 0:f[t];if(!o)return;const s=(($=document.getElementById("tdNote"))==null?void 0:$.value.trim())||"",r={student_note:s},d=parseInt((w=document.getElementById("fbHour"))==null?void 0:w.value)||0,c=parseInt((B=document.getElementById("fbMin"))==null?void 0:B.value)||0,p=d*60+c,m={status:Me.status||null,time_spent:p>0?p:((x=o.student_feedback)==null?void 0:x.time_spent)||null,focus:Me.focus||null,difficulty:Me.difficulty||null,blocker:Me.blocker||null};(m.status||m.focus||m.difficulty||p>0)&&(r.student_feedback=m,o.student_feedback=m,m.status&&(r.done=m.status!=="failed",o.done=r.done));const u=document.getElementById("tdDogru"),v=document.getElementById("tdYanlis"),S=document.getElementById("tdBos");if(u!==null){const _=parseInt(u.value)||0,z=parseInt(v.value)||0,I=parseInt(S.value)||0;(_>0||z>0||I>0||ce.length>0)&&(r.student_result={dogru:_,yanlis:z,bos:I,yanlis_konular:[...ce],ts:new Date().toISOString()},o.student_result=r.student_result)}if(!o._id){h("Hata: görev ID bulunamadı");return}const{error:E}=await b.from("tasks").update(r).eq("id",o._id);if(E){h("Kaydetme hatası: "+E.message),console.error("saveTaskDetail error",E,r);return}o.student_note=s,U("taskDetailModal"),h("Kaydedildi ✓"),n==="student"?_e():Z()}function Ut(){const e=l.students.find(o=>o.id===y.studentId);if(!e)return;const t=document.getElementById("view-sexams"),n=[...l.exams].filter(o=>o.studentId===e.id).sort((o,s)=>s.date.localeCompare(o.date));let a="";if(n.length>1){const o=[...n].sort((r,d)=>r.date.localeCompare(d.date)).slice(-8),s=Math.max(...o.map(r=>(EXAM_DEFS[r.type]||[]).reduce((c,p)=>{var m;return c+Number(((m=r.nets)==null?void 0:m[p])||0)},0)),1);a=`<div class="card cp" style="margin-bottom:16px">
      <div style="font-family:'Inter',sans-serif;font-size:15px;font-weight:700;margin-bottom:12px">📈 Net Gelişimim</div>
      <div class="bar-chart">
        ${o.map(r=>{const c=(EXAM_DEFS[r.type]||[]).reduce((m,u)=>{var v;return m+Number(((v=r.nets)==null?void 0:v[u])||0)},0),p=Math.max(Math.round(c/s*100),4);return`<div class="bar-wrap">
            <div class="bar-val">${c.toFixed(0)}</div>
            <div class="bar" style="height:${p}%;background:${e.color}"></div>
            <div class="bar-label">${g(r.name.replace("Deneme ","#").replace("TYT ","").replace("AYT ",""))}</div>
          </div>`}).join("")}
      </div>
    </div>`}const i=n.length?n.map(o=>{const s=EXAM_DEFS[o.type]||[],r=s.reduce((c,p)=>{var m;return c+Number(((m=o.nets)==null?void 0:m[p])||0)},0).toFixed(1),d=s.map(c=>{var m;const p=Number(((m=o.nets)==null?void 0:m[c])||0);return`<div class="net-box"><div class="net-label">${c}</div><div class="net-val ${Ct(p)}">${p}</div></div>`}).join("");return`<div class="exam-item">
      <div class="exam-header">
        <div><div class="exam-name">${g(o.name)}</div><div class="exam-date">${new Date(o.date+"T12:00").toLocaleDateString("tr-TR",{day:"numeric",month:"long",year:"numeric"})}</div></div>
        <button class="btn btn-ghost btn-xs" onclick="openStudentExamModal('${o.id}')">✏️ Düzenle</button>
      </div>
      ${o.note?`<div style="font-size:12px;color:var(--text-mid);margin-bottom:8px;font-style:italic">"${g(o.note)}"</div>`:""}
      <div class="nets-grid">${d}</div>
      <div style="margin-top:8px"><div style="font-family:'Inter',sans-serif;font-size:18px;font-weight:800">Toplam: ${r}</div></div>
      ${On(o,n)}
      ${o.coachComment?`<div class="coach-comment-box"><strong>Koç Yorumu</strong>${g(o.coachComment)}</div>`:""}
    </div>`}).join(""):'<div class="empty"><p>Henüz deneme sonucu eklemediniz.<br>İlk sonucunuzu girin!</p></div>';t.innerHTML=`
    <div class="sh"><h2>Denemelerim</h2><button class="btn btn-accent" onclick="openStudentExamModal()">+ Sonuç Gir</button></div>
    ${a}${i}`}function qn(e){var n;const t=e?l.exams.find(a=>a.id===e):null;document.getElementById("emTitle").textContent=t?"Sonucu Düzenle":"Deneme Sonucu Gir",document.getElementById("emId").value=e||"",document.getElementById("emName").value=(t==null?void 0:t.name)||"",document.getElementById("emDate").value=(t==null?void 0:t.date)||F(new Date),document.getElementById("emStudentWrap").style.display="none",document.getElementById("emStudent").innerHTML=`<option value="${y.studentId}">${g(((n=l.students.find(a=>a.id===y.studentId))==null?void 0:n.name)||"")}</option>`,document.getElementById("emExamType").value=(t==null?void 0:t.type)||"TYT",document.getElementById("emNote").value=(t==null?void 0:t.note)||"",qt(),t!=null&&t.examDetails&&Object.entries(t.examDetails).forEach(([a,i])=>{const o=document.getElementById(`ed_${a}_d`),s=document.getElementById(`ed_${a}_y`),r=document.getElementById(`ed_${a}_b`);o&&(o.value=i.dogru||0,s.value=i.yanlis||0,r.value=i.bos||0),ne[a]={...i},Wn(a),(i.yanlis_konular||[]).forEach(d=>{document.querySelectorAll(`#konu_acc_${a.replace(/\s/g,"_")} span`).forEach(p=>{p.textContent.trim()===d&&(p.style.borderColor="var(--red)",p.style.background="rgba(255,92,122,.12)",p.style.color="var(--red)")})})}),G("examModal")}function ko(e){document.getElementById("emStudentWrap").style.display="",document.getElementById("emStudent").innerHTML=l.students.map(t=>`<option value="${t.id}">${g(t.name)}</option>`).join(""),qn(e),document.getElementById("emStudentWrap").style.display=""}let ne={};function wo(e,t,n){ne[t]||(ne[t]={dogru:0,yanlis:0,bos:0,yanlis_konular:[]});const a=ne[t].yanlis_konular,i=a.indexOf(n);i===-1?(a.push(n),e.style.borderColor="var(--red)",e.style.background="rgba(255,92,122,.12)",e.style.color="var(--red)"):(a.splice(i,1),e.style.borderColor="var(--border)",e.style.background="var(--surface)",e.style.color="var(--text-mid)")}window.toggleExamKonuChip=wo;function Wn(e){var c,p,m,u;const t=parseInt((c=document.getElementById(`ed_${e}_d`))==null?void 0:c.value)||0,n=parseInt((p=document.getElementById(`ed_${e}_y`))==null?void 0:p.value)||0,a=parseInt((m=document.getElementById(`ed_${e}_b`))==null?void 0:m.value)||0;ne[e]||(ne[e]={yanlis_konular:[]}),ne[e].dogru=t,ne[e].yanlis=n,ne[e].bos=a;const i=document.getElementById("emExamType").value,o=((u=EXAM_SORU[i])==null?void 0:u[e])||40,s=t+n+a,r=document.getElementById(`ed_${e}_net`),d=document.getElementById(`ed_${e}_warn`);r&&(r.textContent=Math.max(0,t-n/4).toFixed(2)),d&&(d.style.display=s>o?"":"none"),to()}window.updateExamNet=Wn;function $o(e){const t=document.getElementById(`konu_acc_${e.replace(/\s/g,"_")}`);t&&(t.style.display=t.style.display==="none"?"":"none")}window.toggleKonuAccordion=$o;function qt(){const e=document.getElementById("emExamType").value,t=EXAM_DEFS[e]||[];ne={};const n=document.getElementById("emPuanDisplay");n&&(n.innerHTML=""),document.getElementById("netInputsWrap").innerHTML=t.map(a=>{var d;const i=((d=EXAM_SORU[e])==null?void 0:d[a])||40,s=(EXAM_KONU_MAP[`${e}_${a}`]||[]).flatMap(c=>Ve[c]||[]),r=s.length?`
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
    </div>`}).join("")}async function To(){var r,d;const e=document.getElementById("emName").value.trim();if(!e)return h("Sınav adı girin!");const t=document.getElementById("emExamType").value,n={};(EXAM_DEFS[t]||[]).forEach(c=>{const p=ne[c]||{};n[c]=Math.max(0,(p.dogru||0)-(p.yanlis||0)/4)});const a=document.getElementById("emId").value,i=document.getElementById("emStudent").value,o={name:e,date:document.getElementById("emDate").value,student_id:i,coach_id:y.coachId||((r=l.students.find(c=>c.id===i))==null?void 0:r.coachId),exam_type:t,nets:n,exam_details:ne,student_note:document.getElementById("emNote").value.trim()};async function s(c,p,m){var u,v,S;if(p){const{error:E}=await b.from("exams").update(c).eq("id",m);if((u=E==null?void 0:E.message)!=null&&u.includes("exam_details")){const{exam_details:f,...$}=c;return b.from("exams").update($).eq("id",m)}return{error:E}}else{const E=await b.from("exams").insert(c).select().single();if((S=(v=E.error)==null?void 0:v.message)!=null&&S.includes("exam_details")){const{exam_details:f,...$}=c;return b.from("exams").insert($).select().single()}return E}}if(a){const{error:c}=await s(o,!0,a);if(c)return h("Hata: "+c.message);const p=l.exams.find(m=>m.id===a);p&&Object.assign(p,{name:o.name,date:o.date,studentId:i,type:t,nets:n,examDetails:ne,note:o.student_note}),h("Güncellendi ✓")}else{const{data:c,error:p}=await s(o,!1,null);if(p)return h("Hata: "+p.message);l.exams.push({id:c.id,studentId:c.student_id,name:c.name,date:c.date,type:c.exam_type,nets:c.nets||{},examDetails:c.exam_details||{},note:c.student_note,coachComment:""}),h("Deneme eklendi ✓")}if(U("examModal"),y.role==="student"?Ut():Fe(),y.role==="coach"||y.role==="developer")try{const c=[];Object.values(ne||{}).forEach(m=>{var u;(u=m==null?void 0:m.yanlis_konular)!=null&&u.length&&c.push(...m.yanlis_konular)}),ce!=null&&ce.length&&c.push(...ce);const p=[...new Set(c)];if(p.length>0&&i){const m=((d=l.konuMastery)==null?void 0:d[i])||{},u=[];if(Object.entries(m).forEach(([v,S])=>{Object.entries(S).forEach(([E,f])=>{p.includes(E)&&(f.status==="td"?u.push({konu:E,subject:v,type:"td_broken",stars:f.stars}):f.stars>=5&&u.push({konu:E,subject:v,type:"high_star_wrong",stars:f.stars}))})}),u.length>0){const v=u.filter(f=>f.type==="td_broken"),S=u.filter(f=>f.type==="high_star_wrong");let E="⚠️ Mastery Önerileri: ";v.length>0&&(E+=`${v.map(f=>f.konu).join(", ")} TD'den düştü! `),S.length>0&&(E+=`${S.map(f=>f.konu).join(", ")} için yıldız düşürmeyi düşün.`),setTimeout(()=>{const f=document.createElement("div");f.style.cssText="position:fixed;bottom:80px;right:16px;max-width:360px;background:var(--surface);border:1.5px solid var(--accent);border-radius:12px;padding:14px 16px;box-shadow:var(--shadow-lg);z-index:99999;animation:slideIn .3s ease",f.innerHTML=`
              <div style="display:flex;align-items:flex-start;gap:10px">
                <span style="font-size:20px;flex-shrink:0">⚠️</span>
                <div style="flex:1">
                  <div style="font-size:13px;font-weight:800;margin-bottom:6px">Deneme → Konu Mastery Önerisi</div>
                  ${v.length>0?`<div style="font-size:11px;color:var(--red);margin-bottom:4px">🔴 TD'den düşenler: <b>${v.map($=>$.konu).join(", ")}</b></div>`:""}
                  ${S.length>0?`<div style="font-size:11px;color:var(--accent)">🟡 Yıldız düşürmeyi düşün: <b>${S.map($=>$.konu).join(", ")}</b></div>`:""}
                  <div style="font-size:10px;color:var(--text-dim);margin-top:6px">Değişiklik yapmak için Konu Haritası'na git</div>
                </div>
                <button onclick="this.parentElement.parentElement.remove()" style="border:none;background:none;color:var(--text-dim);cursor:pointer;font-size:16px;line-height:1;flex-shrink:0">×</button>
              </div>`,document.body.appendChild(f),setTimeout(()=>f.remove(),12e3)},600)}}}catch(c){console.error("[mastery suggestion]",c)}}async function Mt(){const e=l.students.find(a=>a.id===y.studentId);if(!e)return;const t=(l.messages[e.id]||[]).filter(a=>a.from==="coach"&&!a.read&&a._id).map(a=>a._id);t.length&&await b.from("messages").update({read:!0}).in("id",t),(l.messages[e.id]||[]).forEach(a=>{a.from==="coach"&&(a.read=!0)}),wt();const n=document.getElementById("view-smessages");n.innerHTML=`<div class="sh" style="margin-bottom:12px"><h2>💬 Koçuma Yaz</h2></div>
    <div class="smsg-wrap">
      <div class="msg-main" id="msgMain">${Te(e.id,"student")}</div>
    </div>`,Ee()}let lt=null;function Wt(){Vt();const e=y.role==="coach"||y.role==="developer"?l.msgThread:y.studentId;e&&(lt=b.channel("messages_"+e).on("postgres_changes",{event:"INSERT",schema:"public",table:"messages",filter:`student_id=eq.${e}`},t=>{const n=t.new;l.messages[e]||(l.messages[e]=[]),!l.messages[e].find(a=>a._id===n.id)&&(l.messages[e].push({_id:n.id,from:n.from_role,text:n.text||"",image_url:n.image_url||null,read:n.read,time:new Date(n.created_at).toLocaleTimeString("tr-TR",{hour:"2-digit",minute:"2-digit"})}),y.role==="student"&&n.from_role==="coach"&&currentTab!=="smessages"&&wt(),currentTab==="messages"&&l.msgThread===e&&(document.getElementById("msgMain").innerHTML=Te(e,"coach"),Ee()),currentTab==="smessages"&&(document.getElementById("msgMain").innerHTML=Te(e,"student"),Ee()))}).subscribe())}function Vt(){lt&&(b.removeChannel(lt),lt=null)}async function Eo(){var e,t;await b.from("workspaces").upsert({coach_id:y.coachId,brand_name:((e=l.workspace)==null?void 0:e.brand_name)||"Akademi",brand_color:((t=l.workspace)==null?void 0:t.brand_color)||"#E8613A",onboarding_done:!1},{onConflict:"coach_id"}),l.workspace&&(l.workspace.onboarding_done=!1),ea()}window.devResetOnboarding=Eo;async function Vn(){const e=document.getElementById("view-dev-dashboard");e.innerHTML='<div class="sh"><h2>🖥️ Sistem Dashboard</h2></div><div class="empty"><p>Yükleniyor...</p></div>';const[t,n,a,i,o,s]=await Promise.all([b.from("users").select("id,role,created_at"),b.from("tasks").select("id,done,created_at"),b.from("exams").select("id,created_at"),b.from("messages").select("id,created_at"),b.from("tickets").select("id,status,created_at"),b.from("payments").select("id,amount,status,payment_date")]),r=t.data||[],d=n.data||[],c=a.data||[],p=i.data||[],m=o.data||[],u=s.data||[],v=r.filter(x=>x.role==="coach").length,S=r.filter(x=>x.role==="student").length,E=u.filter(x=>x.status==="completed").reduce((x,_)=>x+Number(_.amount),0),f=m.filter(x=>x.status==="open").length,$=Array.from({length:7},(x,_)=>{const z=new Date;return z.setDate(z.getDate()-6+_),F(z)}),w=$.map(x=>d.filter(_=>{var z;return(z=_.created_at)==null?void 0:z.startsWith(x)}).length),B=Math.max(...w,1);e.innerHTML=`
    <div class="sh"><h2>🖥️ Sistem Dashboard</h2>
      <div style="display:flex;gap:8px;align-items:center">
        <span style="font-size:12px;color:var(--text-dim)">${new Date().toLocaleDateString("tr-TR",{weekday:"long",day:"numeric",month:"long",year:"numeric"})}</span>
        <button class="btn btn-ghost btn-sm" onclick="devResetOnboarding()" title="Onboarding sihirbazını yeniden başlat">🧙 Sihirbazı Test Et</button>
      </div>
    </div>

    <div class="stats-row" style="margin-bottom:20px">
      <div class="stat-card"><div class="stat-label">Toplam Öğrenci</div><div class="stat-val" style="color:var(--blue)">${S}</div></div>
      <div class="stat-card"><div class="stat-label">Toplam Koç</div><div class="stat-val" style="color:var(--accent)">${v}</div></div>
      <div class="stat-card"><div class="stat-label">Toplam Görev</div><div class="stat-val">${d.length}</div><div style="font-size:11px;color:var(--green);margin-top:3px">✓ ${d.filter(x=>x.done).length} tamamlandı</div></div>
      <div class="stat-card"><div class="stat-label">Toplam Deneme</div><div class="stat-val">${c.length}</div></div>
      <div class="stat-card"><div class="stat-label">Toplam Mesaj</div><div class="stat-val">${p.length}</div></div>
      <div class="stat-card"><div class="stat-label">Toplam Gelir</div><div class="stat-val" style="color:var(--green)">${E.toLocaleString("tr-TR")} ₺</div></div>
      <div class="stat-card"><div class="stat-label">Açık Ticket</div><div class="stat-val" style="color:${f>0?"var(--red)":"var(--green)"}">${f}</div></div>
    </div>

    <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px">
      <div class="card cp">
        <div style="font-family:'Inter',sans-serif;font-size:14px;font-weight:700;margin-bottom:14px">📅 Son 7 Gün Görev Aktivitesi</div>
        <div style="display:flex;align-items:flex-end;gap:6px;height:80px">
          ${$.map((x,_)=>`<div style="flex:1;display:flex;flex-direction:column;align-items:center;gap:3px">
            <div style="font-size:10px;color:var(--text-mid);font-weight:600">${w[_]}</div>
            <div style="width:100%;background:var(--accent);border-radius:3px 3px 0 0;height:${Math.max(Math.round(w[_]/B*100),4)}%;min-height:3px;opacity:.8"></div>
            <div style="font-size:9px;color:var(--text-dim)">${new Date(x+"T12:00").toLocaleDateString("tr-TR",{day:"numeric",month:"short"})}</div>
          </div>`).join("")}
        </div>
      </div>
      <div class="card cp">
        <div style="font-family:'Inter',sans-serif;font-size:14px;font-weight:700;margin-bottom:14px">🎫 Son Ticket'lar</div>
        ${m.slice(-5).reverse().map(x=>`
          <div style="display:flex;justify-content:space-between;align-items:center;padding:7px 0;border-bottom:1px solid var(--border);font-size:12px">
            <span style="color:var(--text-mid)">#${x.id.slice(0,6)}</span>
            <span class="role-badge" style="background:${x.status==="open"?"var(--red-dim)":x.status==="resolved"?"var(--green-dim)":"var(--accent-dim)"};color:${x.status==="open"?"var(--red)":x.status==="resolved"?"var(--green)":"var(--accent)"}">${x.status}</span>
          </div>`).join("")||'<div style="font-size:12px;color:var(--text-dim)">Ticket yok</div>'}
      </div>
    </div>`}async function tt(){const e=document.getElementById("view-dev-users"),{data:t}=await b.from("users").select("*").order("created_at"),n=new Date;function a(i){if(i.role!=="coach"&&i.role!=="developer")return'<span style="color:var(--text-dim);font-size:11px">—</span>';const o=i.plan||"trial";if(o==="active")return'<span style="font-size:10px;font-weight:800;color:#10b981;background:rgba(16,185,129,.12);border:1px solid rgba(16,185,129,.3);border-radius:4px;padding:2px 7px">AKTİF</span>';if(o==="paused")return'<span style="font-size:10px;font-weight:700;color:#f59e0b;background:rgba(245,158,11,.12);border:1px solid rgba(245,158,11,.3);border-radius:4px;padding:2px 7px">DURAKLATILDI</span>';if(o==="cancelled")return'<span style="font-size:10px;font-weight:700;color:#ef4444;background:rgba(239,68,68,.1);border:1px solid rgba(239,68,68,.2);border-radius:4px;padding:2px 7px">İPTAL</span>';const s=i.trial_ends_at?new Date(i.trial_ends_at):new Date(new Date(i.created_at).getTime()+14*24*60*60*1e3),r=Math.ceil((s-n)/864e5);return r<=0?'<span style="font-size:10px;font-weight:700;color:#ef4444;background:rgba(239,68,68,.1);border:1px solid rgba(239,68,68,.2);border-radius:4px;padding:2px 7px">SÜRESİ DOLDU</span>':`<span style="font-size:10px;font-weight:700;color:#6366f1;background:rgba(99,102,241,.1);border:1px solid rgba(99,102,241,.2);border-radius:4px;padding:2px 7px">DENEME · ${r}g</span>`}e.innerHTML=`
    <div class="sh"><h2>👥 Kullanıcı Yönetimi</h2>
      <button class="btn btn-accent" onclick="openDevUserModal()">+ Kullanıcı Ekle</button>
    </div>
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
          ${(t||[]).map(i=>`
            <tr style="border-bottom:1px solid var(--border);transition:background .15s" onmouseover="this.style.background='var(--surface2)'" onmouseout="this.style.background=''">
              <td style="padding:10px 12px;font-weight:700">${g(i.full_name)}</td>
              <td style="padding:10px 12px;color:var(--text-mid)">${g(i.username)}</td>
              <td style="padding:10px 12px"><span class="role-badge ${i.role==="coach"?"role-coach":i.role==="developer"?"role-dev":"role-student"}">${i.role}</span></td>
              <td style="padding:10px 12px">${a(i)}</td>
              <td style="padding:10px 12px;color:var(--text-dim);font-size:11px">${new Date(i.created_at).toLocaleDateString("tr-TR")}</td>
              <td style="padding:10px 12px;display:flex;gap:6px;flex-wrap:nowrap">
                ${i.role==="coach"||i.role==="developer"?`<button class="btn btn-accent btn-xs" onclick="openPlanModal('${i.id}','${g(i.full_name)}','${i.plan||"trial"}','${i.trial_ends_at||""}')">📋</button>`:""}
                <button class="btn btn-ghost btn-xs" onclick="openDevUserModal('${i.id}')">✏️</button>
                <button class="btn btn-danger btn-xs" onclick="devDeleteUser('${i.id}','${g(i.full_name)}')">🗑</button>
              </td>
            </tr>`).join("")}
        </tbody>
      </table>
    </div>`}async function _o(e){const t=e?(await b.from("users").select("*").eq("id",e).single()).data:null;document.getElementById("smTitle").textContent=t?"Kullanıcıyı Düzenle":"Yeni Kullanıcı",document.getElementById("smId").value=e||"",document.getElementById("smName").value=(t==null?void 0:t.full_name)||"",document.getElementById("smTarget").value=(t==null?void 0:t.target)||"",document.getElementById("smUsername").value=(t==null?void 0:t.username)||"",document.getElementById("smPass").value=(t==null?void 0:t.password_hash)||"",document.getElementById("smWeekStart").value=(t==null?void 0:t.week_start)||0,document.getElementById("smProg").value=(t==null?void 0:t.progress)||0,document.getElementById("smProgVal").textContent=((t==null?void 0:t.progress)||0)+"%",document.querySelectorAll(".color-opt").forEach(a=>a.classList.toggle("sel",a.dataset.c===((t==null?void 0:t.color)||"#e8622a")));let n=document.getElementById("smRoleField");n||(n=document.createElement("div"),n.id="smRoleField",n.className="field",n.innerHTML='<label>Rol</label><select id="smRole" style="width:100%;background:var(--surface2);border:1.5px solid var(--border);border-radius:9px;padding:10px 13px;font-size:14px;font-family:inherit;color:var(--text);outline:none"><option value="student">Öğrenci</option><option value="coach">Koç</option><option value="developer">Developer</option></select>',document.getElementById("smName").closest(".modal").insertBefore(n,document.getElementById("smName").parentElement)),document.getElementById("smRole").value=(t==null?void 0:t.role)||"student",document.querySelector("#studentModal .btn-accent").setAttribute("onclick","saveStudentDev()"),G("studentModal")}async function So(e,t){if(await ae(`"${t}" kullanıcısını kalıcı olarak silmek istediğinizden emin misiniz?

Bu işlem geri alınamaz.`)){A(!0);try{const{data:{session:n}}=await b.auth.getSession(),a=await fetch("/api/delete-user",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${(n==null?void 0:n.access_token)||""}`},body:JSON.stringify({targetUserId:e})}),i=await a.json();if(!a.ok)throw new Error(i.error||"Sunucu hatası");h(`🗑 ${t} silindi`),tt()}catch(n){h("Hata: "+n.message)}finally{A(!1)}}}function Io(e,t,n,a){let i=document.getElementById("planMgmtModal");i||(i=document.createElement("div"),i.id="planMgmtModal",i.className="modal-bg",i.innerHTML=`<div class="modal" style="max-width:400px">
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
    </div>`,document.body.appendChild(i),i.addEventListener("click",o=>{o.target===i&&i.classList.remove("open")}),document.getElementById("planStatus").addEventListener("change",function(){document.getElementById("trialEndField").style.display=this.value==="trial"?"":"none"})),document.getElementById("planModalTitle").textContent=`Plan Yönet — ${t}`,document.getElementById("planUserId").value=e,document.getElementById("planStatus").value=n||"trial",document.getElementById("trialEndField").style.display=n==="trial"||!n?"":"none",a?document.getElementById("planTrialEnd").value=a.split("T")[0]:document.getElementById("planTrialEnd").value="",G("planMgmtModal")}async function zo(){const e=document.getElementById("planUserId").value,t=document.getElementById("planStatus").value,n=document.getElementById("planTrialEnd").value,a={plan:t};t==="trial"&&n?a.trial_ends_at=n:t!=="trial"&&(a.trial_ends_at=null),A(!0);const{error:i}=await b.from("users").update(a).eq("id",e);if(A(!1),i)return h("Hata: "+i.message);h(`Plan güncellendi: ${{trial:"Deneme",active:"Aktif",paused:"Duraklatıldı",cancelled:"İptal"}[t]||t} ✓`),U("planMgmtModal"),tt()}let qe=[];async function nt(){const e=document.getElementById("view-dev-resources"),{data:t}=await b.from("resources").select("*").order("resource_type,exam_type,subject,name");qe=t||[];const n=qe.filter(i=>i.resource_type!=="playlist"),a=qe.filter(i=>i.resource_type==="playlist");e.innerHTML=`
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
      <div class="stat-card"><div class="stat-label">Toplam Kaynak</div><div class="stat-val">${qe.length}</div></div>
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
                <div style="font-size:13px;font-weight:700;margin-bottom:2px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${g(i.name)}</div>
                <div style="font-size:11px;color:var(--text-dim)">${g(i.publisher)} · ${i.exam_type} ${i.subject} · ${(i.tests||[]).length} video</div>
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
                <div style="font-size:13px;font-weight:700;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${g(i.name)}</div>
                <div style="font-size:11px;color:var(--text-dim);margin-top:2px">${g(i.publisher)} · ${(i.tests||[]).length} test</div>
              </div>
              <div style="display:flex;gap:4px;flex-shrink:0">
                <span style="font-size:10px;padding:2px 7px;border-radius:99px;background:${i.active?"var(--green-dim)":"var(--red-dim)"};color:${i.active?"var(--green)":"var(--red)"}">${i.active?"Aktif":"Pasif"}</span>
                <button class="btn btn-ghost btn-xs" onclick="openResourceModal('${i.id}','book')">✏️</button>
                <button class="btn btn-danger btn-xs" onclick="devDeleteResource('${i.id}')" style="opacity:.5" onmouseover="this.style.opacity=1" onmouseout="this.style.opacity=.5">🗑</button>
              </div>
            </div>
          </div>`).join("")}
      </div>
    </div>`}function Bo(){let e=document.getElementById("playlistModal");e||(e=document.createElement("div"),e.id="playlistModal",e.className="modal-bg",document.body.appendChild(e),e.addEventListener("click",t=>{t.target===e&&e.classList.remove("open")})),e.innerHTML=`<div class="modal modal-lg">
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
  </div>`,G("playlistModal")}async function Mo(){const e=document.getElementById("ytPlaylistUrl").value.trim(),t=document.getElementById("ytStatus");if(!e)return t.innerHTML='<span style="color:var(--red)">⚠️ Playlist URL giriniz</span>';const n=e.match(/[?&]list=([^&]+)/);if(!n)return t.innerHTML='<span style="color:var(--red)">⚠️ Geçersiz URL — "list=..." parametresi bulunamadı</span>';const a=n[1];t.innerHTML="⏳ Yükleniyor...";try{let i=[],o="";do{let s=`/api/youtube?playlistId=${a}`;o&&(s+=`&pageToken=${o}`);const r=await fetch(s);if(!r.ok){const c=await r.json();throw new Error(c.error||"Oynatma listesi yüklenemedi.")}const d=await r.json();d.items&&(i=i.concat(d.items)),o=d.nextPageToken||""}while(o&&i.length<200);document.getElementById("plVideos").value=i.map(s=>`${s.title} | ${s.url} | ${s.duration}`).join(`
`),t.innerHTML=`<span style="color:var(--green)">✓ ${i.length} video yüklendi!</span>`}catch(i){t.innerHTML=`<span style="color:var(--red)">⚠️ Hata: ${i.message}</span>`}}async function Ao(){const e=document.getElementById("plName").value.trim(),t=document.getElementById("plSubject").value.trim(),n=document.getElementById("plPublisher").value.trim();if(!e||!t||!n)return h("Tüm alanları doldurun!");const a=document.getElementById("plVideos").value.split(`
`).map(r=>r.trim()).filter(Boolean);if(!a.length)return h("En az 1 video girin!");const i=a.map(r=>{const d=r.split("|").map(c=>c.trim());return{label:d[0]||"",url:d[1]||"",topic:"",soru:parseInt(d[2])||0}}).filter(r=>r.label),o={exam_type:document.getElementById("plExam").value,subject:t,publisher:n,name:e,year:new Date().getFullYear(),tests:i,active:!0,resource_type:"playlist"},{error:s}=await b.from("resources").insert(o);if(s)return h("Hata: "+s.message);h(`✓ "${e}" eklendi — ${i.length} video`),U("playlistModal"),nt()}function Do(e,t="book"){const n=e?qe.find(s=>s.id===e):null;let a=document.getElementById("resourceModal");a||(a=document.createElement("div"),a.id="resourceModal",a.className="modal-bg",document.body.appendChild(a),a.addEventListener("click",s=>{s.target===a&&a.classList.remove("open")}));const i=((n==null?void 0:n.resource_type)||t)==="playlist";a.innerHTML=`<div class="modal modal-lg">
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
`),G("resourceModal")}async function Co(){const e=document.getElementById("rmName").value.trim(),t=document.getElementById("rmSubject").value.trim();if(!e||!t)return h("Ad ve ders zorunlu!");const n=document.getElementById("rmId").value,a=document.getElementById("rmType").value==="playlist",i=document.getElementById("rmTests").value.split(`
`).map(r=>r.trim()).filter(Boolean);let o=[];a?o=i.map(r=>{const d=r.split("|").map(c=>c.trim());return{label:d[0]||"",url:d[1]||"",topic:"",soru:parseInt(d[2])||0}}):o=i.map(r=>{const d=r.split("|").map(c=>c.trim());return{label:d[0]||"",soru:parseInt(d[1])||0}});const s={exam_type:document.getElementById("rmExam").value,subject:t,publisher:document.getElementById("rmPublisher").value.trim(),year:new Date().getFullYear(),name:e,tests:o,active:document.getElementById("rmActive").value==="true",resource_type:a?"playlist":"book"};n?(await b.from("resources").update(s).eq("id",n),h("Güncellendi ✓")):(await b.from("resources").insert(s),h("Kaynak eklendi ✓")),U("resourceModal"),nt()}async function Lo(e){await ae("Bu kaynağı silmek istediğinizden emin misiniz?")&&(await b.from("resources").delete().eq("id",e),h("Silindi"),nt())}async function bt(){const e=document.getElementById("view-dev-finance"),[{data:t},{data:n}]=await Promise.all([b.from("subscriptions").select("*,users(full_name,color)").order("created_at",{ascending:!1}),b.from("payments").select("*,users(full_name)").order("payment_date",{ascending:!1}).limit(20)]),a=(n||[]).filter(o=>o.status==="completed").reduce((o,s)=>o+Number(s.amount),0),i=(t||[]).filter(o=>o.status==="active").length;e.innerHTML=`
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
          <div style="display:flex;justify-content:space-between;align-items:center;padding:8px 0;border-bottom:1px solid var(--border)">
            <div>
              <div style="font-size:12px;font-weight:700">${g(((s=o.users)==null?void 0:s.full_name)||"?")}</div>
              <div style="font-size:11px;color:var(--text-dim)">${o.payment_date} · ${o.method}</div>
            </div>
            <div style="font-size:13px;font-weight:700;color:var(--green)">${Number(o.amount).toLocaleString("tr-TR")} ₺</div>
          </div>`}).join("")||'<div class="empty"><p>Ödeme yok</p></div>'}
      </div>
    </div>`}function jo(){let e=document.getElementById("paymentModal");e||(e=document.createElement("div"),e.id="paymentModal",e.className="modal-bg",e.innerHTML=`<div class="modal"><button class="modal-close" onclick="cm('paymentModal')">×</button>
      <h2>Ödeme Ekle</h2>
      <div class="field"><label>Öğrenci</label><select id="pmStudent">${l.students.map(t=>`<option value="${t.id}">${g(t.name)}</option>`).join("")}</select></div>
      <div class="field-row">
        <div class="field"><label>Tutar (₺)</label><input type="number" id="pmAmount" placeholder="1500"></div>
        <div class="field"><label>Yöntem</label><select id="pmMethod"><option>nakit</option><option>havale</option><option>kart</option><option>iyzico</option></select></div>
      </div>
      <div class="field"><label>Tarih</label><input type="date" id="pmDate" value="${F(new Date)}"></div>
      <div class="field"><label>Açıklama</label><input id="pmDesc" placeholder="Mayıs ayı ücreti"></div>
      <button class="btn btn-accent" style="width:100%;justify-content:center;padding:12px;margin-top:4px" onclick="savePayment()">Kaydet</button>
    </div>`,document.body.appendChild(e),e.addEventListener("click",t=>{t.target===e&&e.classList.remove("open")})),document.getElementById("pmStudent").innerHTML=l.students.map(t=>`<option value="${t.id}">${g(t.name)}</option>`).join(""),G("paymentModal")}async function Po(){const e=parseFloat(document.getElementById("pmAmount").value);if(!e)return h("Tutar girin!");await b.from("payments").insert({student_id:document.getElementById("pmStudent").value,amount:e,method:document.getElementById("pmMethod").value,payment_date:document.getElementById("pmDate").value,description:document.getElementById("pmDesc").value,status:"completed"}),h("Ödeme kaydedildi ✓"),U("paymentModal"),bt()}function Ro(){let e=document.getElementById("subModal");e||(e=document.createElement("div"),e.id="subModal",e.className="modal-bg",e.innerHTML=`<div class="modal"><button class="modal-close" onclick="cm('subModal')">×</button>
      <h2>Abonelik Ekle</h2>
      <div class="field"><label>Öğrenci</label><select id="sbStudent"></select></div>
      <div class="field-row">
        <div class="field"><label>Plan</label><select id="sbPlan"><option value="monthly">Aylık</option><option value="quarterly">3 Aylık</option><option value="yearly">Yıllık</option></select></div>
        <div class="field"><label>Aylık Tutar (₺)</label><input type="number" id="sbAmount" placeholder="1500"></div>
      </div>
      <div class="field-row">
        <div class="field"><label>Başlangıç</label><input type="date" id="sbStart" value="${F(new Date)}"></div>
        <div class="field"><label>Bitiş (isteğe bağlı)</label><input type="date" id="sbEnd"></div>
      </div>
      <div class="field"><label>Durum</label><select id="sbStatus"><option value="active">Aktif</option><option value="trial">Deneme</option><option value="paused">Durduruldu</option><option value="cancelled">İptal</option></select></div>
      <div class="field"><label>Not</label><input id="sbNotes" placeholder="..."></div>
      <button class="btn btn-accent" style="width:100%;justify-content:center;padding:12px;margin-top:4px" onclick="saveSub()">Kaydet</button>
    </div>`,document.body.appendChild(e),e.addEventListener("click",t=>{t.target===e&&e.classList.remove("open")})),document.getElementById("sbStudent").innerHTML=l.students.map(t=>`<option value="${t.id}">${g(t.name)}</option>`).join(""),G("subModal")}async function No(){const e=parseFloat(document.getElementById("sbAmount").value);if(!e)return h("Tutar girin!");await b.from("subscriptions").insert({student_id:document.getElementById("sbStudent").value,plan:document.getElementById("sbPlan").value,amount:e,start_date:document.getElementById("sbStart").value,end_date:document.getElementById("sbEnd").value||null,status:document.getElementById("sbStatus").value,notes:document.getElementById("sbNotes").value}),h("Abonelik eklendi ✓"),U("subModal"),bt()}async function at(){const e=document.getElementById("view-dev-announce"),{data:t}=await b.from("announcements").select("*").order("created_at",{ascending:!1}),n={info:"var(--blue)",warning:"var(--accent)",success:"var(--green)",urgent:"var(--red)"};e.innerHTML=`
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
      </div>`).join("")}`}function Ho(){let e=document.getElementById("announceModal");e||(e=document.createElement("div"),e.id="announceModal",e.className="modal-bg",e.innerHTML=`<div class="modal"><button class="modal-close" onclick="cm('announceModal')">×</button>
      <h2>Yeni Duyuru</h2>
      <div class="field"><label>Başlık</label><input id="anTitle" placeholder="Önemli Güncelleme"></div>
      <div class="field"><label>İçerik</label><textarea id="anBody" placeholder="Duyuru metni..."></textarea></div>
      <div class="field-row">
        <div class="field"><label>Tür</label><select id="anType"><option value="info">Bilgi</option><option value="warning">Uyarı</option><option value="success">Başarı</option><option value="urgent">Acil</option></select></div>
        <div class="field"><label>Hedef</label><select id="anTarget"><option value="all">Herkes</option><option value="students">Öğrenciler</option><option value="coaches">Koçlar</option></select></div>
      </div>
      <button class="btn btn-accent" style="width:100%;justify-content:center;padding:12px;margin-top:4px" onclick="saveAnnounce()">Yayınla</button>
    </div>`,document.body.appendChild(e),e.addEventListener("click",t=>{t.target===e&&e.classList.remove("open")})),G("announceModal")}async function Yo(){const e=document.getElementById("anTitle").value.trim(),t=document.getElementById("anBody").value.trim();if(!e||!t)return h("Başlık ve içerik zorunlu!");await b.from("announcements").insert({title:e,body:t,type:document.getElementById("anType").value,target:document.getElementById("anTarget").value,active:!0}),h("Duyuru yayınlandı ✓"),U("announceModal"),at()}async function Ko(e,t){await b.from("announcements").update({active:t}).eq("id",e),at()}async function Oo(e){await ae("Bu duyuruyu silmek istediğinizden emin misiniz?")&&(await b.from("announcements").delete().eq("id",e),h("Silindi"),at())}let Re=null,gt=null,pe=null,Et=null,Pe=[],ue=[],ke="welcome";async function Ge(){const e=document.getElementById("view-dev-tickets");if(!e)return;const{data:t,error:n}=await b.from("tickets").select("*,users!tickets_user_id_fkey(full_name,role)").order("updated_at",{ascending:!1});Pe=t||[],!pe&&Pe.length>0&&(pe=Pe[0].id),e.innerHTML=`
    <div class="sh" style="margin-bottom:12px">
      <h2>🎫 Destek & Geri Bildirim Masası</h2>
    </div>

    <div style="display: grid; grid-template-columns: 280px 1fr; gap: 16px; height: 600px; max-height: calc(100vh - 180px); margin-top: 10px">
      <!-- Left Pane: Chats List -->
      <div style="overflow-y: auto; background: var(--surface2); border: 1px solid var(--border); border-radius: 12px; display: flex; flex-direction: column; gap: 8px; padding: 12px">
        <div style="font-size: 11px; font-weight:800; color:var(--text-dim); text-transform:uppercase; letter-spacing:.5px; margin-bottom:4px">Konuşmalar</div>
        ${Pe.length===0?`
          <div style="text-align:center; padding:40px 10px; color:var(--text-dim); font-size:12px">Kayıtlı destek talebi yok.</div>
        `:Pe.map(a=>{var v,S,E;const i=a.id===pe,o=((v=a.users)==null?void 0:v.full_name)||"Kullanıcı",s=((S=a.users)==null?void 0:S.role)==="coach"?"KOÇ":((E=a.users)==null?void 0:E.role)==="parent"?"VELİ":"ÖĞRENCİ";let r="Mesaj yok";try{const f=JSON.parse(a.body);Array.isArray(f)&&f.length>0?r=f[f.length-1].text:r=a.body}catch{r=a.body}const d=r.length>28?r.slice(0,26)+"...":r,c=a.status==="open"?'<span style="font-size:9px; background:#ef444422; color:#ef4444; padding:2px 6px; border-radius:99px; font-weight:700">Yeni</span>':a.status==="resolved"?'<span style="font-size:9px; background:#10b98122; color:#10b981; padding:2px 6px; border-radius:99px; font-weight:700">Cevaplandı</span>':'<span style="font-size:9px; background:var(--border2); color:var(--text-dim); padding:2px 6px; border-radius:99px; font-weight:700">Kapatıldı</span>',p=i?"var(--accent-dim)":"var(--surface)",m=i?"1.5px solid var(--accent)":"1px solid var(--border)",u=i?"10px 11px":"10px 12px";return`
            <div onclick="selectDevTicket('${a.id}')" style="background:${p}; border:${m}; border-radius:10px; padding:${u}; cursor:pointer; display:flex; flex-direction:column; gap:4px; transition:all .15s">
              <div style="display:flex; justify-content:space-between; align-items:center">
                <span style="font-weight:700; font-size:12px; color:var(--text); overflow:hidden; text-overflow:ellipsis; white-space:nowrap; max-width:140px">${g(o)}</span>
                <span style="font-size:9px; font-weight:800; color:var(--text-dim)">${s}</span>
              </div>
              <div style="font-size:11px; color:var(--text-mid); overflow:hidden; text-overflow:ellipsis; white-space:nowrap">${g(d)}</div>
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
  `,Uo(),Et&&clearInterval(Et),Et=setInterval(Go,4e3)}function Fo(e){pe=e,Ge()}async function Go(){if(!pe||!document.getElementById("devChatArea"))return;const{data:t,error:n}=await b.from("tickets").select("*,users!tickets_user_id_fkey(full_name,role)").eq("id",pe).single();if(n||!t)return;let a=[];try{a=JSON.parse(t.body),Array.isArray(a)||(a=[{sender:"user",text:t.body,time:t.created_at}])}catch{a=[{sender:"user",text:t.body,time:t.created_at}]}const i=document.getElementById("devChatMessages");if(i){const o=i.scrollTop,s=i.scrollHeight-i.clientHeight-o<40;i.innerHTML=a.map(r=>{const d=r.sender==="emin",c=d?"Kurucu / Destek":r.sender==="ai"?"Yapay Zeka":r.name||"Kullanıcı",p=d?"var(--blue)":r.sender==="ai"?"var(--surface2)":"var(--accent)",m=d?"#fff":r.sender==="ai"?"var(--text)":"var(--on-accent)",u=d?"flex-end":"flex-start",v=d?"14px 14px 4px 14px":"14px 14px 14px 4px",S=new Date(r.time).toLocaleTimeString("tr-TR",{hour:"2-digit",minute:"2-digit"});return`
        <div style="align-self:${u}; max-width:80%; display:flex; flex-direction:column; align-items:${d?"flex-end":"flex-start"}">
          <div style="font-size:10px; color:var(--text-dim); margin-bottom:3px; font-weight:600">${c}</div>
          <div style="padding:10px 14px; border-radius:${v}; background:${p}; color:${m}; font-size:13px; line-height:1.5; word-wrap:break-word; white-space:pre-wrap">${g(r.text)}</div>
          <div style="font-size:9px; color:var(--text-dim); margin-top:4px">${S}</div>
        </div>
      `}).join(""),s&&(i.scrollTop=i.scrollHeight)}}function Uo(){var s,r,d;const e=document.getElementById("devChatArea");if(!e)return;const t=Pe.find(c=>c.id===pe);if(!t){e.innerHTML=`
      <div style="flex:1; display:flex; flex-direction:column; align-items:center; justify-content:center; color:var(--text-dim); padding:20px; text-align:center">
        <div style="font-size:48px; margin-bottom:12px">🎫</div>
        <div style="font-weight:700">Aktif Sohbet Seçilmedi</div>
        <div style="font-size:12px; margin-top:4px">Soldaki listeden bir destek sohbeti seçerek yanıtlayabilirsiniz.</div>
      </div>
    `;return}const n=((s=t.users)==null?void 0:s.full_name)||"Kullanıcı",a=((r=t.users)==null?void 0:r.role)==="coach"?"KOÇ":((d=t.users)==null?void 0:d.role)==="parent"?"VELİ":"ÖĞRENCİ";let i=[];try{i=JSON.parse(t.body),Array.isArray(i)||(i=[{sender:"user",text:t.body,time:t.created_at}])}catch{i=[{sender:"user",text:t.body,time:t.created_at}]}e.innerHTML=`
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
      ${i.map(c=>{const p=c.sender==="emin",m=p?"Kurucu / Destek":c.sender==="ai"?"Yapay Zeka":c.name||"Kullanıcı",u=p?"var(--blue)":c.sender==="ai"?"var(--surface2)":"var(--accent)",v=p?"#fff":c.sender==="ai"?"var(--text)":"var(--on-accent)",S=p?"flex-end":"flex-start",E=p?"14px 14px 4px 14px":"14px 14px 14px 4px",f=new Date(c.time).toLocaleTimeString("tr-TR",{hour:"2-digit",minute:"2-digit"});return`
          <div style="align-self:${S}; max-width:80%; display:flex; flex-direction:column; align-items:${p?"flex-end":"flex-start"}">
            <div style="font-size:10px; color:var(--text-dim); margin-bottom:3px; font-weight:600">${m}</div>
            <div style="padding:10px 14px; border-radius:${E}; background:${u}; color:${v}; font-size:13px; line-height:1.5; word-wrap:break-word; white-space:pre-wrap">${g(c.text)}</div>
            <div style="font-size:9px; color:var(--text-dim); margin-top:4px">${f}</div>
          </div>
        `}).join("")}
    </div>

    <!-- Footer Reply Input -->
    <div style="padding:12px 16px; border-top:1px solid var(--border); display:flex; gap:8px; background:var(--surface2); align-items:flex-end">
      <textarea id="devReplyInput" placeholder="Sohbete yanıt yazın..." rows="1" style="flex:1; background:var(--surface); border:1px solid var(--border); border-radius:12px; padding:10px 14px; font-size:13px; font-family:inherit; color:var(--text); resize:none; max-height:80px; outline:none" onkeydown="if(event.key==='Enter'&&!event.shiftKey){event.preventDefault();sendDevReply()}"></textarea>
      <button class="btn btn-accent" onclick="sendDevReply()" style="padding:8px 16px; font-size:13px; border-radius:10px; align-self:stretch; justify-content:center">Gönder</button>
    </div>
  `;const o=document.getElementById("devChatMessages");o&&(o.scrollTop=o.scrollHeight)}async function qo(){const e=document.getElementById("devReplyInput"),t=e.value.trim();if(!t||!pe)return;e.value="",A(!0);const{data:n}=await b.from("tickets").select("body").eq("id",pe).single();let a=[];if(n&&n.body)try{a=JSON.parse(n.body)}catch{a=[{sender:"user",text:n.body,time:new Date().toISOString()}]}const i={sender:"emin",text:t,time:new Date().toISOString(),name:"Kurucu / Destek"};a.push(i);const{error:o}=await b.from("tickets").update({body:JSON.stringify(a),reply:t,status:"resolved",updated_at:new Date().toISOString()}).eq("id",pe);if(A(!1),o){h("Hata: "+o.message);return}h("Yanıt gönderildi ✓"),Ge()}async function Wo(e,t){await b.from("tickets").update({status:t,updated_at:new Date().toISOString()}).eq("id",e),h("Durum güncellendi ✓"),Ge()}async function Vo(e){await ae("Bu talebi silmek istediğinizden emin misiniz?")&&(await b.from("tickets").delete().eq("id",e),h("Silindi"),pe=null,Ge())}function Zo(){ht()}async function ht(){let e=document.getElementById("supportChatModal");e||(e=document.createElement("div"),e.id="supportChatModal",e.className="modal-bg",e.style.zIndex="99999999",e.innerHTML=`
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
    `,document.body.appendChild(e),e.addEventListener("click",t=>{var a;const n=(a=document.getElementById("trialExpiredModal"))==null?void 0:a.classList.contains("open");t.target===e&&!n&&Zn()})),G("supportChatModal"),await vt(),Re&&clearInterval(Re),Re=setInterval(vt,4e3)}function Zn(){U("supportChatModal"),Re&&(clearInterval(Re),Re=null)}async function vt(){var o,s;const e=(o=y.dbUser)==null?void 0:o.id;if(!e)return;const t=document.getElementById("supportMessages");if(!t)return;const{data:n,error:a}=await b.from("tickets").select("*").eq("user_id",e).eq("status","open").order("created_at",{ascending:!1}).limit(1);if(a){console.error("Error fetching ticket:",a);return}const i=n&&n[0];if(i){gt=i.id,ke="emin";const r=document.getElementById("supportStatusLabel");r&&(r.textContent="● Kurucu / Destek Ekibi");let d=[];try{d=JSON.parse(i.body),Array.isArray(d)||(d=[{sender:"user",text:i.body,time:i.created_at}])}catch{d=[{sender:"user",text:i.body,time:i.created_at}]}i.reply&&((s=d[d.length-1])==null?void 0:s.text)!==i.reply&&d.push({sender:"emin",text:i.reply,time:i.updated_at}),Ze(d)}else if(ke==="welcome"){const r=document.getElementById("supportStatusLabel");r&&(r.textContent="● Çevrimiçi Asistan"),t.innerHTML=`
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
      `}else if(ke==="ai"){const r=document.getElementById("supportStatusLabel");r&&(r.textContent="● Yapay Zeka"),Ze(ue)}}function Ze(e){const t=document.getElementById("supportMessages");if(!t)return;const n=t.scrollTop,a=t.scrollHeight-t.clientHeight-n<40;t.innerHTML=e.map(i=>{const o=i.sender==="user",s=o?"Siz":i.sender==="ai"?"Yapay Zeka Asistanı":"Kurucu / Destek Ekibi",r=o?"var(--accent)":"var(--surface2)",d=o?"none":"1px solid var(--border)",c=o?"var(--on-accent)":"var(--text)",p=o?"flex-end":"flex-start",m=o?"14px 14px 4px 14px":"14px 14px 14px 4px",u=new Date(i.time).toLocaleTimeString("tr-TR",{hour:"2-digit",minute:"2-digit"});return`
      <div style="align-self:${p};max-width:80%;display:flex;flex-direction:column;align-items:${o?"flex-end":"flex-start"}">
        <div style="font-size:10px;color:var(--text-dim);margin-bottom:3px;font-weight:600">${s}</div>
        <div style="padding:10px 14px;border-radius:${m};background:${r};border:${d};color:${c};font-size:13px;line-height:1.5;word-wrap:break-word;white-space:pre-wrap">${g(i.text)}</div>
        <div style="font-size:9px;color:var(--text-dim);margin-top:4px">${u}</div>
      </div>
    `}).join(""),a&&(t.scrollTop=t.scrollHeight)}function Jo(){ke="ai",ue=[{sender:"ai",text:"Merhaba! Ben Rostrum Akademi Yapay Zeka Asistanıyım. 🤖 Size nasıl yardımcı olabilirim?",time:new Date().toISOString()}],Ze(ue)}function Xo(){ke="emin_start";const e=document.getElementById("supportMessages");e&&(e.innerHTML=`
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
    `)}async function Qo(){var c,p;const e=document.getElementById("eminSubject"),t=document.getElementById("eminInitialMessage"),n=e?e.value.trim():"Müşteri Destek Sohbeti",a=t?t.value.trim():"";if(!a)return h("Mesaj boş olamaz!");const i=(c=y.dbUser)==null?void 0:c.id,o=((p=y.dbUser)==null?void 0:p.full_name)||"Kullanıcı",s={sender:"user",text:a,time:new Date().toISOString(),name:o};A(!0);const{data:r,error:d}=await b.from("tickets").insert({user_id:i,subject:n,body:JSON.stringify([s]),category:"emin",status:"open"}).select().single();if(A(!1),d){h("Hata: "+d.message);return}gt=r.id,ke="emin",h("Talebiniz destek ekibine iletildi ✓"),await vt()}async function es(){var n;const e=document.getElementById("supportInput"),t=e.value.trim();if(t){if(e.value="",ke==="ai"){const a={sender:"user",text:t,time:new Date().toISOString()};ue.push(a),Ze(ue);const i=document.getElementById("supportTyping");i&&(i.style.display="flex");try{const o=(window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1","/api/ai-chat"),s=ue.slice(-10).map(c=>({role:c.sender==="user"?"user":"assistant",content:c.text})),r=await fetch(o,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({messages:s,context:{},userRole:"parent"})});let d="";r.ok?d=(await r.json()).reply:d=await we(t,{},y.role||"coach"),ue.push({sender:"ai",text:d,time:new Date().toISOString()})}catch{try{const s=await we(t,{},y.role||"coach");ue.push({sender:"ai",text:s,time:new Date().toISOString()})}catch{ue.push({sender:"ai",text:"Üzgünüm, şu anda yanıt veremiyorum. Lütfen daha sonra tekrar deneyin veya doğrudan destek ekibimize mesaj gönderin.",time:new Date().toISOString()})}}finally{i&&(i.style.display="none"),Ze(ue)}}else if(ke==="emin"){const a=((n=y.dbUser)==null?void 0:n.full_name)||"Kullanıcı",i={sender:"user",text:t,time:new Date().toISOString(),name:a};A(!0);const{data:o}=await b.from("tickets").select("body").eq("id",gt).single();let s=[];if(o&&o.body)try{s=JSON.parse(o.body)}catch{s=[{sender:"user",text:o.body,time:new Date().toISOString(),name:a}]}s.push(i);const{error:r}=await b.from("tickets").update({body:JSON.stringify(s),status:"open",updated_at:new Date().toISOString()}).eq("id",gt);if(A(!1),r){h("Gönderim hatası: "+r.message);return}await vt()}}}async function Jn(){const{data:e}=await b.from("announcements").select("*").eq("active",!0),t=y.role,n=(e||[]).filter(o=>o.target==="all"||o.target==="students"&&t==="student"||o.target==="coaches"&&t==="coach");if(!n.length)return;const a={info:"var(--blue)",warning:"var(--accent)",success:"var(--green)",urgent:"var(--red)"},i=document.createElement("div");i.style.cssText="position:fixed;top:64px;right:16px;z-index:400;display:flex;flex-direction:column;gap:8px;max-width:340px",i.id="announceBanner",n.slice(0,3).forEach(o=>{const s=document.createElement("div");s.style.cssText=`background:var(--surface);border:1px solid var(--border);border-left:3px solid ${a[o.type]||"var(--accent)"};border-radius:10px;padding:12px 14px;box-shadow:var(--shadow);animation:fadeUp .3s ease`,s.innerHTML=`<div style="display:flex;justify-content:space-between;align-items:flex-start;gap:8px">
      <div><div style="font-size:13px;font-weight:700;margin-bottom:3px">${g(o.title)}</div><div style="font-size:12px;color:var(--text-mid)">${g(o.body)}</div></div>
      <button onclick="this.closest('div[style]').remove()" style="background:none;border:none;cursor:pointer;color:var(--text-dim);font-size:16px;flex-shrink:0">×</button>
    </div>`,i.appendChild(s)}),document.body.appendChild(i),setTimeout(()=>i.remove(),8e3)}(()=>{const e=document.createElement("style");e.textContent=".role-dev{background:rgba(192,132,252,.15);color:#c084fc;}",document.head.appendChild(e)})();function Xn(e){return`ra_ob_${y.coachId}_${e}`}function At(e){return localStorage.getItem(Xn(e))==="1"}function ts(e){localStorage.setItem(Xn(e),"1"),Qn(),["student","program","report"].every(n=>At(n))&&ns()}async function ns(){const e=document.getElementById("obWidget");e&&(e.innerHTML=`<div style="padding:20px;text-align:center">
      <div style="font-size:36px;margin-bottom:8px">🎉</div>
      <div style="font-weight:800;color:var(--text);margin-bottom:4px">Harika iş!</div>
      <div style="font-size:12px;color:var(--text-mid)">İlk adımları tamamladınız.</div>
    </div>`,setTimeout(()=>e.remove(),3e3)),await b.from("workspaces").update({onboarding_done:!0}).eq("coach_id",y.coachId),l.workspace&&(l.workspace.onboarding_done=!0)}function Qn(){const e=document.getElementById("obWidget");if(!e)return;const t=[{id:"student",icon:"👤",label:"İlk öğrencinizi ekleyin",action:"window.openStudentModal?.()",btnLabel:"Ekle →"},{id:"program",icon:"📅",label:"Haftalık program oluşturun",action:"switchTab('program')",btnLabel:"Git →"},{id:"report",icon:"📄",label:"İlk raporunuzu gönderin",action:"switchTab('program')",btnLabel:"Git →"}],n=t.filter(i=>At(i.id)).length,a=Math.round((n+1)/(t.length+1)*100);e.querySelector(".ob-body").innerHTML=t.map(i=>{const o=At(i.id);return`<div style="display:flex;align-items:center;gap:10px;padding:9px 0;border-bottom:1px solid var(--border)">
      <div style="width:22px;height:22px;border-radius:50%;border:2px solid ${o?"var(--green)":"var(--border2)"};background:${o?"var(--green)":"transparent"};display:flex;align-items:center;justify-content:center;flex-shrink:0">
        ${o?'<svg width="10" height="8" viewBox="0 0 10 8"><path d="M1 4L4 7L9 1" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/></svg>':""}
      </div>
      <div style="flex:1;font-size:12px;color:${o?"var(--text-dim)":"var(--text)"};${o?"text-decoration:line-through":""}">
        <span style="margin-right:5px">${i.icon}</span>${i.label}
      </div>
      ${o?"":`<button onclick="${i.action};window._obMarkDone?.('${i.id}')" style="font-size:11px;font-weight:700;color:var(--accent);background:none;border:none;cursor:pointer;white-space:nowrap;padding:0">${i.btnLabel}</button>`}
    </div>`}).join(""),e.querySelector(".ob-progress-bar-inner").style.width=a+"%",e.querySelector(".ob-progress-text").textContent=`${n+1}/${t.length+1} tamamlandı`}function as(){var n;if(document.getElementById("obWidget"))return;const e=((n=l.workspace)==null?void 0:n.brand_color)||"var(--accent)",t=document.createElement("div");t.id="obWidget",t.style.cssText="position:fixed;bottom:90px;right:20px;width:290px;background:var(--surface);border:1px solid var(--border2);border-radius:16px;box-shadow:var(--shadow-lg);z-index:4000;overflow:hidden",t.innerHTML=`
    <div style="background:${e};padding:12px 14px;display:flex;align-items:center;justify-content:space-between">
      <div>
        <div style="font-size:13px;font-weight:800;color:#fff">Başlangıç Görevleri</div>
        <div style="font-size:10px;color:rgba(255,255,255,.7);margin-top:1px" class="ob-progress-text">1/4 tamamlandı</div>
      </div>
      <button onclick="document.getElementById('obWidget').remove()" style="background:none;border:none;color:rgba(255,255,255,.6);font-size:18px;cursor:pointer;padding:0;line-height:1">×</button>
    </div>
    <div style="height:3px;background:rgba(255,255,255,.2)"><div class="ob-progress-bar-inner" style="height:100%;background:#fff;transition:width .4s;width:25%"></div></div>
    <div style="padding:4px 14px 14px" class="ob-body"></div>`,document.body.appendChild(t),Qn()}window._obMarkDone=ts;function ea(){var a,i,o;const e=((i=(a=y.dbUser)==null?void 0:a.full_name)==null?void 0:i.split(" ")[0])||"Koç",t=((o=l.workspace)==null?void 0:o.brand_color)||"var(--accent)";let n=document.getElementById("onboardingModal");n||(n=document.createElement("div"),n.id="onboardingModal",n.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,.85);z-index:9000;display:flex;align-items:center;justify-content:center;padding:20px;backdrop-filter:blur(8px)",document.body.appendChild(n)),n.innerHTML=`<div style="background:var(--surface);border:1px solid var(--border2);border-radius:24px;width:100%;max-width:460px;padding:36px 32px;animation:fadeUp .3s ease;box-shadow:var(--shadow-lg);text-align:center">
    <div style="font-size:48px;margin-bottom:14px">🎓</div>
    <h3 style="font-size:22px;font-weight:800;color:var(--text);margin-bottom:8px;line-height:1.2">Hoş geldiniz, ${g(e)}!</h3>
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
  </div>`}let Ne=0;const He={};function is(){const e=l.students.find(i=>i.id===y.studentId);if(!e)return;const t=e.name.split(" ")[0],n=e.color||"var(--accent)";let a=document.getElementById("stuWelcomeModal");a||(a=document.createElement("div"),a.id="stuWelcomeModal",a.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,.85);z-index:9000;display:flex;align-items:center;justify-content:center;padding:20px;backdrop-filter:blur(8px)",document.body.appendChild(a)),Ne=0,ta(a,t,n,e)}function ta(e,t,n,a){const i=[()=>`<div style="text-align:center">
      <div style="font-size:52px;margin-bottom:14px">👋</div>
      <h3 style="font-size:22px;font-weight:800;color:var(--text);margin-bottom:8px">Merhaba, ${g(t)}!</h3>
      <p style="font-size:13px;color:var(--text-mid);line-height:1.7;margin-bottom:24px">
        Koçun seni sisteme ekledi ve programın hazırlanıyor.<br>
        Sana özel bir deneyim oluşturmak için <strong style="color:${n}">2 dakika</strong> ayır.
      </p>
      <button class="btn btn-accent" style="width:100%;padding:14px;font-size:15px;font-weight:800" onclick="window._swNext()">Hadi Başlayalım →</button>
      <button onclick="window._swSkip()" style="margin-top:10px;background:none;border:none;color:var(--text-dim);font-size:12px;cursor:pointer;text-decoration:underline">Şimdi değil, sonra doldururum</button>
    </div>`,()=>{var s,r;return`<div>
      <div style="font-size:10px;font-weight:700;color:${n};text-transform:uppercase;letter-spacing:.08em;margin-bottom:12px">Adım 1/2 · Hedefiniz</div>
      <h3 style="font-size:19px;font-weight:800;color:var(--text);margin-bottom:16px">Nereye ulaşmak istiyorsunuz?</h3>
      <div style="margin-bottom:12px">
        <label style="font-size:11px;font-weight:700;color:var(--text-mid);display:block;margin-bottom:5px;text-transform:uppercase;letter-spacing:.05em">Hedef Üniversite</label>
        <input id="sw_uni" type="text" value="${g(((r=(s=a.target)==null?void 0:s.split("·")[0])==null?void 0:r.trim())||"")}" placeholder="Boğaziçi Üniversitesi"
          style="width:100%;padding:12px 14px;background:var(--surface2);border:1.5px solid var(--border);border-radius:10px;color:var(--text);font-size:14px;outline:none;font-family:inherit;box-sizing:border-box"
          onfocus="this.style.borderColor='${n}'" onblur="this.style.borderColor='var(--border)'">
      </div>
      <div style="margin-bottom:12px">
        <label style="font-size:11px;font-weight:700;color:var(--text-mid);display:block;margin-bottom:5px;text-transform:uppercase;letter-spacing:.05em">Hedef Bölüm</label>
        <input id="sw_dept" type="text" placeholder="Bilgisayar Mühendisliği"
          style="width:100%;padding:12px 14px;background:var(--surface2);border:1.5px solid var(--border);border-radius:10px;color:var(--text);font-size:14px;outline:none;font-family:inherit;box-sizing:border-box"
          onfocus="this.style.borderColor='${n}'" onblur="this.style.borderColor='var(--border)'">
      </div>
      <div style="margin-bottom:20px">
        <label style="font-size:11px;font-weight:700;color:var(--text-mid);display:block;margin-bottom:8px;text-transform:uppercase;letter-spacing:.05em">En Çok Zorlandığın Ders</label>
        <div style="display:flex;flex-wrap:wrap;gap:8px">
          ${["Matematik","Fizik","Kimya","Biyoloji","Türkçe","Tarih","Coğrafya","Felsefe","İngilizce"].map(d=>`
            <button onclick="this.classList.toggle('sel');document.getElementById('sw_struggle').value=[...(document.getElementById('sw_struggle_btns')?.querySelectorAll('.sel')||[])].map(b=>b.dataset.v).join(', ')" data-v="${d}"
              style="padding:6px 14px;border-radius:99px;border:1.5px solid var(--border);background:var(--surface2);color:var(--text);font-size:12px;font-weight:600;cursor:pointer;transition:all .15s"
              class="sw-chip">${d}</button>`).join("")}
        </div>
        <input id="sw_struggle" type="hidden" value="">
      </div>
      <button class="btn btn-accent" style="width:100%;padding:13px;font-weight:800" onclick="window._swNext()">Devam Et →</button>
    </div>`},()=>`<div>
      <div style="font-size:10px;font-weight:700;color:${n};text-transform:uppercase;letter-spacing:.08em;margin-bottom:12px">Adım 2/2 · Motivasyonunuz</div>
      <h3 style="font-size:19px;font-weight:800;color:var(--text);margin-bottom:16px">Seni motive eden şey ne?</h3>
      <div style="margin-bottom:12px">
        <label style="font-size:11px;font-weight:700;color:var(--text-mid);display:block;margin-bottom:5px;text-transform:uppercase;letter-spacing:.05em">Neden bu üniversiteyi/bölümü istiyorsun?</label>
        <textarea id="sw_motivation" rows="3" placeholder="Bu bölümü seçmemin nedeni..."
          style="width:100%;padding:12px 14px;background:var(--surface2);border:1.5px solid var(--border);border-radius:10px;color:var(--text);font-size:14px;outline:none;font-family:inherit;resize:vertical;box-sizing:border-box"
          onfocus="this.style.borderColor='${n}'" onblur="this.style.borderColor='var(--border)'"></textarea>
      </div>
      <div style="margin-bottom:20px">
        <label style="font-size:11px;font-weight:700;color:var(--text-mid);display:block;margin-bottom:8px;text-transform:uppercase;letter-spacing:.05em">Günlük Çalışma Hedefim</label>
        <div style="display:flex;gap:8px;flex-wrap:wrap">
          ${["2 saat","4 saat","6 saat","8 saat","8+ saat"].map(s=>`
            <button onclick="document.querySelectorAll('.sw-hour').forEach(b=>b.classList.remove('sel'));this.classList.add('sel');document.getElementById('sw_hours').value=this.dataset.v" data-v="${s}"
              style="padding:6px 16px;border-radius:99px;border:1.5px solid var(--border);background:var(--surface2);color:var(--text);font-size:12px;font-weight:600;cursor:pointer"
              class="sw-hour">${s}</button>`).join("")}
        </div>
        <input id="sw_hours" type="hidden" value="">
      </div>
      <button class="btn btn-accent" style="width:100%;padding:13px;font-weight:800" onclick="window._swSave()">Tamamla ve Başla →</button>
    </div>`],o=Ne>0?`<div style="height:3px;background:var(--border);border-radius:99px;margin-bottom:24px;overflow:hidden"><div style="height:100%;width:${Math.round(Ne/2*100)}%;background:${n};transition:width .4s"></div></div>`:"";e.innerHTML=`<div style="background:var(--surface);border:1px solid var(--border2);border-radius:24px;width:100%;max-width:460px;padding:32px;animation:fadeUp .3s ease;max-height:90vh;overflow-y:auto;box-shadow:var(--shadow-lg)">
    ${o}
    ${i[Ne]()}
  </div>`,e.querySelectorAll(".sw-chip").forEach(s=>{s.addEventListener("click",function(){this.style.background=this.classList.contains("sel")?n:"var(--surface2)",this.style.borderColor=this.classList.contains("sel")?n:"var(--border)",this.style.color=this.classList.contains("sel")?"#fff":"var(--text)"})}),e.querySelectorAll(".sw-hour").forEach(s=>{s.addEventListener("click",function(){e.querySelectorAll(".sw-hour").forEach(r=>{r.style.background="var(--surface2)",r.style.borderColor="var(--border)",r.style.color="var(--text)"}),this.style.background=n,this.style.borderColor=n,this.style.color="#fff"})})}window._swNext=function(){var n,a,i,o,s,r,d;const e=document.getElementById("stuWelcomeModal");if(!e)return;Ne===1&&(He.target_university=((a=(n=document.getElementById("sw_uni"))==null?void 0:n.value)==null?void 0:a.trim())||"",He.target_department=((o=(i=document.getElementById("sw_dept"))==null?void 0:i.value)==null?void 0:o.trim())||"",He.struggling_subjects=((r=(s=document.getElementById("sw_struggle"))==null?void 0:s.value)==null?void 0:r.trim())||""),Ne++;const t=l.students.find(c=>c.id===y.studentId);ta(e,((d=t==null?void 0:t.name)==null?void 0:d.split(" ")[0])||"",(t==null?void 0:t.color)||"var(--accent)",t)};window._swSkip=function(){var e;(e=document.getElementById("stuWelcomeModal"))==null||e.remove(),b.from("student_profiles").upsert({id:y.studentId}).then(()=>{})};window._swSave=async function(){var a,i,o,s,r;const e=((i=(a=document.getElementById("sw_motivation"))==null?void 0:a.value)==null?void 0:i.trim())||"",t=((s=(o=document.getElementById("sw_hours"))==null?void 0:o.value)==null?void 0:s.replace(/\D/g,""))||null,n={id:y.studentId,target_university:He.target_university||"",target_department:He.target_department||"",struggling_subjects:He.struggling_subjects||"",bio:e,daily_capacity:t?parseInt(t):null};A(!0,"Kaydediliyor...");try{await b.from("student_profiles").upsert(n)}catch(d){console.error(d)}A(!1),(r=document.getElementById("stuWelcomeModal"))==null||r.remove(),h("Profilin kaydedildi! 🎉"),ie("sportal")};let _t=null;window.addEventListener("beforeinstallprompt",e=>{e.preventDefault(),_t=e;const t=document.createElement("button");t.id="pwaInstallBtn",t.className="btn btn-ghost btn-sm",t.innerHTML="📲 Yükle",t.style.cssText="font-size:11px;padding:5px 10px",t.onclick=async()=>{_t.prompt();const{outcome:n}=await _t.userChoice;n==="accepted"&&(t.remove(),h("Uygulama yüklendi ✓"))},document.querySelector(".tbar-right").insertBefore(t,document.querySelector(".user-pill"))});async function na(){const e=l.students.find(I=>I.id===y.studentId);if(!e)return;const t=document.getElementById("view-sprofil");if(!t)return;const{data:n,error:a}=await b.from("student_profiles").select("*").eq("id",y.studentId).maybeSingle();a&&console.error("Öğrenci profili yüklenirken hata:",a);const i=(n==null?void 0:n.bio)||"",o=(n==null?void 0:n.school)||"",s=(n==null?void 0:n.grade)||"",r=(n==null?void 0:n.target_university)||"",d=(n==null?void 0:n.target_department)||"",c=(n==null?void 0:n.struggling_subjects)||"",p=(n==null?void 0:n.daily_capacity)||"",m=l.exams.filter(I=>I.studentId===e.id).sort((I,T)=>I.date.localeCompare(T.date)),u=m[m.length-1],v=u?(EXAM_DEFS[u.type]||[]).reduce((T,D)=>{var C;return T+Number(((C=u.nets)==null?void 0:C[D])||0)},0).toFixed(1):"—",S=te(0,e.weekStart??0);let E=0,f=0;for(let I=0;I<7;I++){const T=l.tasks[`${e.id}_${F(J(S,I))}`]||[];E+=T.length,f+=T.filter(D=>D.done).length}const $=E>0?Math.round(f/E*100):0;let w=0;if(Object.keys(l.tasks).filter(I=>I.startsWith(e.id+"_")).forEach(I=>{w+=l.tasks[I].filter(T=>T.done).length}),m.length===0&&w===0){t.innerHTML=`<div style="text-align:center;padding:60px 24px;max-width:360px;margin:0 auto">
      <div style="font-size:52px;margin-bottom:16px">🌱</div>
      <div style="font-size:18px;font-weight:800;color:var(--text);margin-bottom:8px">Yolculuğun Yeni Başlıyor</div>
      <div style="font-size:14px;color:var(--text-mid);line-height:1.65;margin-bottom:28px">Koçun haftalık programını oluşturdukça görev istatistiklerin, deneme netlerini girdikçe gelişim grafiklerin burada belirmeye başlayacak.</div>
      <div style="display:flex;flex-direction:column;gap:10px;text-align:left">
        <div style="background:var(--surface);border:1px solid var(--border);border-radius:12px;padding:14px 16px;font-size:13px;display:flex;align-items:center;gap:12px"><span style="font-size:20px">📋</span><span>Koçunun program oluşturmasını bekle</span></div>
        <div style="background:var(--surface);border:1px solid var(--border);border-radius:12px;padding:14px 16px;font-size:13px;display:flex;align-items:center;gap:12px"><span style="font-size:20px">✅</span><span>Görevleri tamamladıkça istatistiklerin görünecek</span></div>
        <div style="background:var(--surface);border:1px solid var(--border);border-radius:12px;padding:14px 16px;font-size:13px;display:flex;align-items:center;gap:12px"><span style="font-size:20px">📈</span><span>Deneme netlerini girdikçe grafiklerin oluşacak</span></div>
      </div>
    </div>`;return}if(m.length>0){const I=m.slice(-6),T=Math.max(...I.map(D=>(EXAM_DEFS[D.type]||[]).reduce((L,k)=>{var M;return L+Number(((M=D.nets)==null?void 0:M[k])||0)},0)),1);`${I.map(D=>{const L=(EXAM_DEFS[D.type]||[]).reduce((H,O)=>{var q;return H+Number(((q=D.nets)==null?void 0:q[O])||0)},0),k=Math.max(Math.round(L/T*100),4),M=I[I.indexOf(D)-1],j=M?(EXAM_DEFS[M.type]||[]).reduce((H,O)=>{var q;return H+Number(((q=M.nets)==null?void 0:q[O])||0)},0):L,P=L>j?"↑":L<j?"↓":"",Y=L>j?"var(--green)":L<j?"var(--red)":"var(--text-dim)";return`<div style="flex:1;display:flex;flex-direction:column;align-items:center;gap:3px">
              <div style="font-size:10px;font-weight:700;color:var(--text-mid)">${L.toFixed(0)}</div>
              <div style="font-size:9px;color:${Y};font-weight:800">${P}</div>
              <div style="width:100%;background:${e.color};border-radius:4px 4px 0 0;height:${k}%;min-height:4px"></div>
              <div style="font-size:9px;color:var(--text-dim);text-align:center;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;width:100%">${g(D.name.replace("Deneme","").replace("TYT","").replace("AYT","").trim())}</div>
            </div>`}).join("")}`}if(m.length>0){const I=u.type,D=(EXAM_DEFS[I]||[]).map(C=>{var j;const L=m.filter(P=>P.type===I).map(P=>{var Y;return Number(((Y=P.nets)==null?void 0:Y[C])||0)}),k=L.length?L.reduce((P,Y)=>P+Y,0)/L.length:0,M=Number(((j=u.nets)==null?void 0:j[C])||0);return{f:C,avg:k.toFixed(1),last:M,color:Ct(M)}});`${I}${D.map(C=>`
            <div style="background:var(--surface2);border:1px solid var(--border);border-radius:9px;padding:10px;text-align:center">
              <div style="font-size:10px;color:var(--text-dim);font-weight:700;margin-bottom:4px;text-transform:uppercase">${C.f}</div>
              <div style="font-family:'Inter',sans-serif;font-size:22px;font-weight:800;color:var(--${C.color==="good"?"green":C.color==="mid"?"accent":"red"})">${C.last}</div>
              <div style="font-size:10px;color:var(--text-dim);margin-top:2px">ort: ${C.avg}</div>
            </div>`).join("")}`}const B=l.appointments.filter(I=>I.studentId===e.id&&I.date>=me()).sort((I,T)=>I.date.localeCompare(T.date)).slice(0,3),x=r||d;n!=null&&n.motivation;const _=m.slice(-7),z=Math.max(..._.map(I=>(EXAM_DEFS[I.type]||[]).reduce((D,C)=>{var L;return D+Number(((L=I.nets)==null?void 0:L[C])||0)},0)),1);t.innerHTML=`
    <!-- HERO -->
    <div style="background:linear-gradient(135deg,${e.color}22 0%,${e.color}08 100%);border:1px solid ${e.color}33;border-radius:16px;padding:20px 24px;margin-bottom:14px;display:flex;align-items:center;gap:18px">
      <div style="width:64px;height:64px;border-radius:16px;background:${e.color};display:flex;align-items:center;justify-content:center;font-size:26px;font-weight:800;color:#fff;flex-shrink:0">${e.name[0]}</div>
      <div style="flex:1;min-width:0">
        <div style="font-size:20px;font-weight:800;color:var(--text)">${g(e.name)}</div>
        <div style="font-size:13px;color:var(--text-mid);margin-top:2px">${g(e.target)}${s?" · "+g(s):""}${o?" · "+g(o):""}</div>
        ${x?`<div style="display:inline-flex;align-items:center;gap:6px;margin-top:8px;background:${e.color};color:#fff;padding:4px 12px;border-radius:99px;font-size:11px;font-weight:700">🎯 ${[r,d].filter(Boolean).join(" · ")}</div>`:""}
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
        <div class="stat-val">${f}<span style="font-size:14px;color:var(--text-dim)">/${E}</span></div>
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

    ${_.length>0?`
    <!-- NET GELİŞİM GRAFİĞİ -->
    <div class="card cp" style="margin-bottom:14px">
      <div class="portal-sec-title" style="margin-bottom:16px">📈 Net Gelişim Grafiği</div>
      <div style="position:relative;height:160px;display:flex;align-items:flex-end;gap:6px;padding-bottom:28px">
        <!-- yatay kılavuz çizgiler -->
        ${[.25,.5,.75,1].map(I=>`
          <div style="position:absolute;left:0;right:0;bottom:${28+Math.round(I*132)}px;border-top:1px dashed var(--border);display:flex;align-items:center">
            <span style="position:absolute;right:0;font-size:9px;color:var(--text-dim);background:var(--surface);padding:0 2px;line-height:1">${Math.round(z*I)}</span>
          </div>`).join("")}
        ${_.map((I,T)=>{const C=(EXAM_DEFS[I.type]||[]).reduce((O,q)=>{var V;return O+Number(((V=I.nets)==null?void 0:V[q])||0)},0),L=Math.max(Math.round(C/z*132),4),k=_[T-1],M=k?(EXAM_DEFS[k.type]||[]).reduce((O,q)=>{var V;return O+Number(((V=k.nets)==null?void 0:V[q])||0)},0):C,j=C>M,P=C<M,Y=j?"var(--green)":P?"var(--red)":e.color,H=g(I.name.replace(/deneme|tyt|ayt/gi,"").trim()).slice(0,10)||"#"+(T+1);return`<div style="flex:1;display:flex;flex-direction:column;align-items:center;gap:0;position:relative">
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
        ${(()=>{const I=EXAM_DEFS[u.type]||[],T=m.filter(C=>C.type===u.type),D=Math.max(...I.map(C=>Math.max(...T.map(L=>{var k;return Number(((k=L.nets)==null?void 0:k[C])||0)}))),1);return I.map(C=>{var Y;const L=Number(((Y=u.nets)==null?void 0:Y[C])||0),k=T.map(H=>{var O;return Number(((O=H.nets)==null?void 0:O[C])||0)}),M=k.length?k.reduce((H,O)=>H+O,0)/k.length:0,j=Math.round(L/D*100),P=L>=M*1.1?"var(--green)":L<M*.9?"var(--red)":e.color;return`<div style="display:flex;align-items:center;gap:10px">
              <div style="width:90px;font-size:11px;font-weight:700;color:var(--text-mid);flex-shrink:0;text-transform:uppercase">${C}</div>
              <div style="flex:1;height:8px;background:var(--surface2);border-radius:99px;overflow:hidden">
                <div style="height:100%;width:${j}%;background:${P};border-radius:99px;transition:width .5s"></div>
              </div>
              <div style="width:36px;text-align:right;font-size:13px;font-weight:800;color:${P};flex-shrink:0">${L.toFixed(1)}</div>
              <div style="width:28px;font-size:10px;color:var(--text-dim);flex-shrink:0">ort: ${M.toFixed(1)}</div>
            </div>`}).join("")})()}
      </div>
    </div>`:""}

    <!-- YAKLAŞAN RANDEVULAR -->
    ${B.length?`
    <div class="card cp" style="margin-bottom:14px">
      <div class="portal-sec-title" style="margin-bottom:10px">📅 Yaklaşan Randevularım</div>
      ${B.map(I=>`
        <div style="display:flex;align-items:center;gap:12px;background:var(--surface2);border-left:3px solid ${e.color};border-radius:9px;padding:12px;margin-bottom:6px">
          <div style="text-align:center;flex-shrink:0">
            <div style="font-size:18px;font-weight:800;color:var(--text)">${new Date(I.date+"T12:00").getDate()}</div>
            <div style="font-size:9px;font-weight:700;color:var(--text-dim);text-transform:uppercase">${new Date(I.date+"T12:00").toLocaleDateString("tr-TR",{month:"short"})}</div>
          </div>
          <div style="flex:1">
            <div style="font-size:13px;font-weight:700">${g(I.type)}</div>
            <div style="font-size:11px;color:var(--text-mid);margin-top:2px">${I.time} · ${I.duration} dk</div>
          </div>
          ${I.meet_link?`<a href="${g(I.meet_link)}" target="_blank" style="font-size:11px;background:var(--blue-dim);color:var(--blue);padding:4px 10px;border-radius:8px;text-decoration:none;font-weight:700">Katıl</a>`:""}
        </div>`).join("")}
    </div>`:""}

    <!-- PROFİL BİLGİLERİM (görüntüleme modu) -->
    <div class="card cp" style="margin-bottom:14px" id="spViewCard">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:14px">
        <div class="portal-sec-title" style="margin:0">📝 Profil Bilgilerim</div>
        <button class="btn btn-ghost btn-sm" onclick="document.getElementById('spViewCard').style.display='none';document.getElementById('spEditCard').style.display='block'">Düzenle</button>
      </div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
        ${[["Okul",o],["Sınıf",s],["Hedef Üniversite",r],["Hedef Bölüm",d],["Zorlandığım Dersler",c],["Günlük Kapasite",p?p+" saat":""]].map(([I,T])=>`
          <div>
            <div style="font-size:10px;font-weight:700;color:var(--text-dim);text-transform:uppercase;letter-spacing:.04em;margin-bottom:3px">${I}</div>
            <div style="font-size:13px;color:${T?"var(--text)":"var(--text-dim)"};font-weight:${T?"500":"400"}">${T||"—"}</div>
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
        ${[["spSchool","Okul","text",o,"Okulunuz"],["spGrade","Sınıf / Seviye","text",s,"12. Sınıf, Mezun"],["spTargetUni","Hedef Üniversite","text",r,"Boğaziçi Üniversitesi"],["spTargetDept","Hedef Bölüm","text",d,"Bilgisayar Mühendisliği"],["spStruggling","Zorlandığım Dersler","text",c,"Fizik, Geometri"],["spCapacity","Günlük Kapasite (Saat)","number",p,"6"]].map(([I,T,D,C,L])=>`
          <div>
            <label style="display:block;font-size:11px;font-weight:700;color:var(--text-mid);margin-bottom:4px">${T}</label>
            <input type="${D}" id="${I}" value="${g(String(C))}" placeholder="${L}" style="width:100%;background:var(--surface2);border:1.5px solid var(--border);border-radius:9px;padding:10px 13px;font-size:14px;color:var(--text);outline:none;box-sizing:border-box">
          </div>`).join("")}
      </div>
      <div style="margin-bottom:12px">
        <label style="display:block;font-size:11px;font-weight:700;color:var(--text-mid);margin-bottom:4px">Biyografi</label>
        <textarea id="spBio" style="width:100%;min-height:72px;background:var(--surface2);border:1.5px solid var(--border);border-radius:9px;padding:10px 13px;font-size:14px;color:var(--text);outline:none;resize:vertical;font-family:inherit;box-sizing:border-box">${g(i)}</textarea>
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
    </div>`}async function os(){const e=y.dbUser.id,t=document.getElementById("spBio").value.trim(),n=document.getElementById("spSchool").value.trim(),a=document.getElementById("spGrade").value.trim(),i=document.getElementById("spTargetUni").value.trim(),o=document.getElementById("spTargetDept").value.trim(),s=document.getElementById("spStruggling").value.trim(),r=parseInt(document.getElementById("spCapacity").value)||null,d={id:e,bio:t,school:n,grade:a,target_university:i,target_department:o,struggling_subjects:s,daily_capacity:r,updated_at:new Date().toISOString()},{error:c}=await b.from("student_profiles").upsert(d);h(c?"Profil kaydedilemedi: "+c.message:"Profil başarıyla güncellendi ✓")}async function ss(){const e=document.getElementById("newPass1").value,t=document.getElementById("newPass2").value;if(!e)return h("Şifre girin!");if(e!==t)return h("Şifreler uyuşmuyor!");if(e.length<4)return h("En az 4 karakter olmalı");const{error:n}=await b.from("users").update({password_hash:e}).eq("id",y.studentId);if(n)return h("Hata: "+n.message);h("Şifre güncellendi ✓"),document.getElementById("newPass1").value="",document.getElementById("newPass2").value=""}async function rs(){const e=document.getElementById("view-suyelik");if(!e)return;e.innerHTML='<div style="display:flex;align-items:center;justify-content:center;height:200px"><div style="width:32px;height:32px;border:3px solid var(--accent);border-top-color:transparent;border-radius:50%;animation:spin .7s linear infinite"></div></div>',l.students.find(f=>f.id===y.studentId);const t=y.dbUser;let n=null;if(y.coachId){const{data:f}=await b.from("users").select("full_name,plan,trial_ends_at,created_at,email").eq("id",y.coachId).maybeSingle();n=f}const a=t!=null&&t.created_at?new Date(t.created_at):null,i=new Date,o=(n==null?void 0:n.plan)||"trial",s=o==="trial"?"Deneme Dönemi":o==="pro"?"Pro Üyelik":o==="premium"?"Premium Üyelik":o.charAt(0).toUpperCase()+o.slice(1),r=o==="trial"?"#f0a500":o==="pro"?"#3ecf8e":o==="premium"?"#8b5cf6":"#3ecf8e",d=o==="trial"?"#fff8e6":o==="pro"?"#e6faf3":o==="premium"?"#f3e8ff":"#e6faf3";let c=null;n!=null&&n.trial_ends_at?c=new Date(n.trial_ends_at):n!=null&&n.created_at&&(c=new Date(new Date(n.created_at).getTime()+14*24*60*60*1e3));const p=c?Math.max(0,Math.ceil((c-i)/(1e3*60*60*24))):null,m=a?Math.floor((i-a)/(1e3*60*60*24)):null,u=f=>f?f.toLocaleDateString("tr-TR",{day:"numeric",month:"long",year:"numeric"}):"—",v=p===null?"#888":p>7?"#3ecf8e":p>3?"#f0a500":"#ef4444",S=p===null?"❓":p>7?"✅":p>3?"⚠️":"🔴",E=p===null?"Durum bilinmiyor":p>7?"Aktif":p>3?"Yakında Sona Eriyor":p===0?"Bugün Sona Eriyor":"Kritik — "+p+" gün";e.innerHTML=`
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
              <span>${S}</span><span>${E}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Detay Bilgiler -->
      <div style="background:var(--surface);border:1px solid var(--border);border-radius:14px;overflow:hidden;margin-bottom:16px">
        ${[{icon:"🎓",label:"Koçum",value:(n==null?void 0:n.full_name)||"—"},{icon:"📅",label:"Kayıt Tarihi",value:u(a)},{icon:"⏳",label:"Kullanım Süresi",value:m!==null?m+" gün":"—"},{icon:"📆",label:"Üyelik Sona Erme",value:u(c)},{icon:"⌛",label:"Kalan Süre",value:p!==null?`<span style="color:${v};font-weight:700">${p} gün</span>`:"—"}].map(({icon:f,label:$,value:w},B,x)=>`
          <div style="display:flex;align-items:center;gap:12px;padding:14px 18px;${B<x.length-1?"border-bottom:1px solid var(--border)":""}">
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
    </div>`}async function aa(){var v;const e=document.getElementById("view-coach-profile");if(!e)return;e.innerHTML='<div class="loading">Profil bilgileri yükleniyor...</div>';const t=y.dbUser.id;let n=null,a=null;const i=await b.from("coach_profiles").select("*").eq("id",t).maybeSingle();if(n=i.data,a=i.error,a){const S=localStorage.getItem(`coach_profile_${t}`);if(S)try{n=JSON.parse(S),a=null}catch{}if(a){e.innerHTML=`<div style="padding:20px;color:var(--red)">Profil yüklenirken hata oluştu: ${g(a.message)}</div>`;return}}else if(!n){const S=localStorage.getItem(`coach_profile_${t}`);if(S)try{n=JSON.parse(S)}catch{}}const o=(n==null?void 0:n.bio)||"",s=(n==null?void 0:n.subjects)||"",r=(n==null?void 0:n.education)||"",d=(n==null?void 0:n.experience)||"",c=(n==null?void 0:n.photo_url)||"",p=(n==null?void 0:n.instagram)||"",m=(n==null?void 0:n.linkedin)||"",u=window.location.origin+window.location.pathname.replace("app.html","koc_bul.html")+`?coach=${t}`;e.innerHTML=`
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
              <input type="text" id="cpSubjects" value="${g(s)}" placeholder="Örn: Matematik, Fizik, Türkçe" oninput="updateProfilePreview()" style="width:100%; background:var(--surface2); border:1.5px solid var(--border); border-radius:9px; padding:10px 13px; font-size:14px; color:var(--text); outline:none;">
            </div>
            <div>
              <label style="display:block; font-size:11px; font-weight:700; color:var(--text-mid); margin-bottom:4px;">Profil Fotoğrafı URL'si</label>
              <input type="text" id="cpPhotoUrl" value="${g(c)}" placeholder="https://..." oninput="updateProfilePreview()" style="width:100%; background:var(--surface2); border:1.5px solid var(--border); border-radius:9px; padding:10px 13px; font-size:14px; color:var(--text); outline:none;">
            </div>
          </div>
          
          <div style="margin-bottom: 12px;">
            <label style="display:block; font-size:11px; font-weight:700; color:var(--text-mid); margin-bottom:4px;">Hakkımda / Biyografi</label>
            <textarea id="cpBio" oninput="updateProfilePreview()" style="width:100%; min-height:100px; background:var(--surface2); border:1.5px solid var(--border); border-radius:9px; padding:10px 13px; font-size:14px; color:var(--text); outline:none; resize:vertical;">${g(o)}</textarea>
          </div>

          <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px; margin-bottom:12px;">
            <div>
              <label style="display:block; font-size:11px; font-weight:700; color:var(--text-mid); margin-bottom:4px;">Eğitim Bilgisi</label>
              <textarea id="cpEducation" oninput="updateProfilePreview()" style="width:100%; min-height:80px; background:var(--surface2); border:1.5px solid var(--border); border-radius:9px; padding:10px 13px; font-size:14px; color:var(--text); outline:none; resize:vertical;">${g(r)}</textarea>
            </div>
            <div>
              <label style="display:block; font-size:11px; font-weight:700; color:var(--text-mid); margin-bottom:4px;">Deneyim / Başarılar</label>
              <textarea id="cpExperience" oninput="updateProfilePreview()" style="width:100%; min-height:80px; background:var(--surface2); border:1.5px solid var(--border); border-radius:9px; padding:10px 13px; font-size:14px; color:var(--text); outline:none; resize:vertical;">${g(d)}</textarea>
            </div>
          </div>

          <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px; margin-bottom:20px;">
            <div>
              <label style="display:block; font-size:11px; font-weight:700; color:var(--text-mid); margin-bottom:4px;">Instagram Kullanıcı Adı (İsteğe bağlı)</label>
              <div style="display:flex; align-items:center; background:var(--surface2); border:1.5px solid var(--border); border-radius:9px; padding:0 13px;">
                <span style="color:var(--text-dim); margin-right:4px;">@</span>
                <input type="text" id="cpInstagram" value="${g(p)}" placeholder="kullaniciadi" oninput="updateProfilePreview()" style="flex:1; background:none; border:none; padding:10px 0; font-size:14px; color:var(--text); outline:none;">
              </div>
            </div>
            <div>
              <label style="display:block; font-size:11px; font-weight:700; color:var(--text-mid); margin-bottom:4px;">LinkedIn Profil URL (İsteğe bağlı)</label>
              <input type="text" id="cpLinkedin" value="${g(m)}" placeholder="https://linkedin.com/in/..." oninput="updateProfilePreview()" style="width:100%; background:var(--surface2); border:1.5px solid var(--border); border-radius:9px; padding:10px 13px; font-size:14px; color:var(--text); outline:none;">
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
                  <div class="preview-name" id="prevName">${g(((v=y.dbUser)==null?void 0:v.full_name)||"Koç")}</div>
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
  `,Zt()}let dt="bio";function Zt(){var u,v,S,E,f,$,w,B;const e=((u=document.getElementById("cpPhotoUrl"))==null?void 0:u.value.trim())||"",t=((v=document.getElementById("cpSubjects"))==null?void 0:v.value.trim())||"",n=((S=document.getElementById("cpBio"))==null?void 0:S.value.trim())||"",a=((E=document.getElementById("cpEducation"))==null?void 0:E.value.trim())||"",i=((f=document.getElementById("cpExperience"))==null?void 0:f.value.trim())||"",o=(($=document.getElementById("cpInstagram"))==null?void 0:$.value.trim())||"",s=((w=document.getElementById("cpLinkedin"))==null?void 0:w.value.trim())||"",r=((B=y.dbUser)==null?void 0:B.full_name)||"Koç",d=document.getElementById("prevAvatar");if(d)if(e)d.style.backgroundImage=`url('${e}')`,d.style.backgroundColor="transparent",d.innerHTML="";else{d.style.backgroundImage="",d.style.backgroundColor="var(--accent-dim)";const x=r.split(" ").map(_=>_[0]).join("").slice(0,2).toUpperCase();d.innerHTML=x||"?"}const c=document.getElementById("prevSocials");if(c){let x="";if(o&&(x+=`<a href="https://instagram.com/${o}" target="_blank" class="preview-social-link" title="Instagram">📸 @${o}</a>`),s){let _="LinkedIn";s.includes("/in/")&&(_="in/"+s.split("/in/")[1].split("/")[0]),x+=`<a href="${s}" target="_blank" class="preview-social-link" title="LinkedIn">💼 ${_}</a>`}c.innerHTML=x}const p=document.getElementById("prevSubjects");if(p)if(t){const x=t.split(",").map(_=>_.trim()).filter(Boolean);p.innerHTML=x.map(_=>`<span class="preview-tag">${g(_)}</span>`).join("")}else p.innerHTML='<span class="preview-tag" style="background:none; border:1px dashed var(--border); color:var(--text-dim)">Ders / Uzmanlık Belirtilmedi</span>';const m=document.getElementById("prevTabContent");if(m){let x="";dt==="bio"?x=n||"Biyografi bilgisi henüz girilmedi.":dt==="edu"?x=a||"Eğitim bilgisi henüz girilmedi.":dt==="exp"&&(x=i||"Deneyim/başarılar henüz girilmedi."),m.innerHTML=ia(g(x))}}function ls(e){dt=e;const t=document.getElementById("btn-prev-bio"),n=document.getElementById("btn-prev-edu"),a=document.getElementById("btn-prev-exp");t&&t.classList.toggle("active",e==="bio"),n&&n.classList.toggle("active",e==="edu"),a&&a.classList.toggle("active",e==="exp"),Zt()}function ia(e){return e.replace(/\n/g,"<br>")}async function ds(){const e=y.dbUser.id,t=document.getElementById("cpBio").value.trim(),n=document.getElementById("cpSubjects").value.trim(),a=document.getElementById("cpEducation").value.trim(),i=document.getElementById("cpExperience").value.trim(),o=document.getElementById("cpPhotoUrl").value.trim(),s=document.getElementById("cpInstagram").value.trim(),r=document.getElementById("cpLinkedin").value.trim(),d={id:e,bio:t,subjects:n,education:a,experience:i,photo_url:o,instagram:s,linkedin:r,updated_at:new Date().toISOString()};localStorage.setItem(`coach_profile_${e}`,JSON.stringify(d));const{error:c}=await b.from("coach_profiles").upsert(d);c?(console.warn("Database save failed, profile saved locally in localStorage:",c),h("Profil yerel tarayıcıya kaydedildi (Veritabanı RLS hatası: "+c.message+")")):h("Profil başarıyla güncellendi ✓")}async function Jt(){const e=document.getElementById("view-dev-matches");if(!e)return;e.innerHTML='<div class="loading">Eşleşmeler yükleniyor...</div>';const{data:t,error:n}=await b.from("match_requests").select("*, matched_coach:matched_coach_id(full_name, username)").order("created_at",{ascending:!1});if(n){e.innerHTML=`<div style="padding:20px;color:var(--red)">Eşleşme başvuruları yüklenirken hata oluştu: ${g(n.message)}</div>`;return}const a={pending:"⏳ Bekliyor",matched:"🤝 Eşleştirildi",completed:"✅ Tamamlandı"},i={pending:"rgba(240, 165, 0, 0.15)",matched:"rgba(96, 180, 255, 0.15)",completed:"rgba(62, 207, 142, 0.15)"},o={pending:"var(--accent)",matched:"var(--accent4)",completed:"var(--green)"};e.innerHTML=`
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
  `}async function cs(e,t){const{error:n}=await b.from("match_requests").update({status:t}).eq("id",e);n?h("Durum güncellenirken hata: "+n.message):(h("Durum güncellendi ✓"),Jt())}async function ps(e){const t=l.students.find(s=>s.id===e);if(!t)return;const{data:n}=await b.from("student_speeds").select("*").eq("student_id",e),a={};(n||[]).forEach(s=>{a[`${s.exam_type}_${s.subject}`]=s.secs_per_question});const i=[{exam:"TYT",sub:"Matematik"},{exam:"TYT",sub:"Türkçe"},{exam:"TYT",sub:"Fizik"},{exam:"TYT",sub:"Kimya"},{exam:"TYT",sub:"Biyoloji"},{exam:"TYT",sub:"Geometri"},{exam:"AYT-SAY",sub:"Matematik"},{exam:"AYT-SAY",sub:"Fizik"},{exam:"AYT-SAY",sub:"Kimya"},{exam:"AYT-SAY",sub:"Biyoloji"}];let o=document.getElementById("speedModal");o||(o=document.createElement("div"),o.id="speedModal",o.className="modal-bg",document.body.appendChild(o),o.addEventListener("click",s=>{s.target===o&&o.classList.remove("open")})),o.innerHTML=`<div class="modal modal-lg">
    <button class="modal-close" onclick="cm('speedModal')">×</button>
    <h2>⚡ ${g(t.name)} — Soru Çözme Hızı</h2>
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
  </div>`,G("speedModal")}async function ms(e){const t=[{exam:"TYT",sub:"Matematik"},{exam:"TYT",sub:"Türkçe"},{exam:"TYT",sub:"Fizik"},{exam:"TYT",sub:"Kimya"},{exam:"TYT",sub:"Biyoloji"},{exam:"TYT",sub:"Geometri"},{exam:"AYT-SAY",sub:"Matematik"},{exam:"AYT-SAY",sub:"Fizik"},{exam:"AYT-SAY",sub:"Kimya"},{exam:"AYT-SAY",sub:"Biyoloji"}];for(const{exam:n,sub:a}of t){const i=`${n}_${a}`,o=document.getElementById("spd_"+i);if(!o)continue;const s=parseInt(o.value)||180;await Dn(e,n,a,s)}U("speedModal"),h("Hız ayarları kaydedildi ✓")}async function us(e){const t=l.students.find(o=>o.id===e);if(!t)return;const{data:n}=await b.from("student_notes").select("notes").eq("coach_id",y.coachId).eq("student_id",e).maybeSingle(),a=(n==null?void 0:n.notes)||"";let i=document.getElementById("studentNotesModal");i||(i=document.createElement("div"),i.id="studentNotesModal",i.className="modal-bg",document.body.appendChild(i),i.addEventListener("click",o=>{o.target===i&&i.classList.remove("open")})),i.innerHTML=`<div class="modal">
    <button class="modal-close" onclick="cm('studentNotesModal')">×</button>
    <h2>📝 ${g(t.name)} — Notlar</h2>
    <p style="font-size:13px;color:var(--text-mid);margin-bottom:16px">Öğrenciyle ilgili gözlemler, önemli bilgiler, hatırlatmalar…</p>
    <div class="field">
      <textarea id="studentNoteText" style="min-height:260px;font-size:13px;line-height:1.7;resize:vertical" placeholder="Örnek: Türkçe paragrafta hız sorunu var. Veli baskılı, motivasyon takip edilmeli. Son denemede geometri 4 yanlış...">${g(a)}</textarea>
    </div>
    <button class="btn btn-accent" style="width:100%;justify-content:center;padding:12px;margin-top:4px" onclick="saveStudentNote('${e}')">Kaydet</button>
  </div>`,G("studentNotesModal")}async function gs(e){const t=document.getElementById("studentNoteText").value,{error:n}=await b.from("student_notes").upsert({coach_id:y.coachId,student_id:e,notes:t,updated_at:new Date().toISOString()},{onConflict:"coach_id,student_id"});if(n){h("Not kaydedilemedi: "+n.message);return}h("Not kaydedildi ✓"),U("studentNotesModal")}function vs(e){let t=document.getElementById("reportModal");t||(t=document.createElement("div"),t.id="reportModal",t.className="modal-bg",t.innerHTML=`<div class="modal">
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
        <button class="btn btn-ghost" style="width:100%;justify-content:center;background:var(--surface3);color:var(--text);border:1px solid var(--border);gap:6px" onclick="archivePerformanceReport()">💾 Raporu Sisteme Kaydet (Arşivle)</button>
      </div>
    </div>`,document.body.appendChild(t),t.addEventListener("click",i=>{i.target===t&&t.classList.remove("open")}),document.getElementById("rpPeriod").addEventListener("change",function(){document.getElementById("rpCustomDates").style.display=this.value==="custom"?"":"none"})),document.getElementById("rpStuId").value=e;const n=new Date,a=new Date(n.getFullYear(),n.getMonth(),1);document.getElementById("rpStart").value=F(a),document.getElementById("rpEnd").value=F(n),document.getElementById("rpNote").value="",G("reportModal")}function Xt(){const e=document.getElementById("rpPeriod").value,t=new Date;if(e==="weekly"){const n=te(0,0);return{start:F(n),end:F(J(n,6))}}else return e==="monthly"?{start:F(new Date(t.getFullYear(),t.getMonth(),1)),end:F(t)}:{start:document.getElementById("rpStart").value,end:document.getElementById("rpEnd").value}}function Qt(e,t=!1){var x,_,z,I;const n=l.students.find(T=>T.id===e);if(!n)return"";const{start:a,end:i}=Xt(),o=document.getElementById("rpNote").value.trim(),s=((x=l.workspace)==null?void 0:x.brand_name)||"Rostrum Akademi",r=((_=l.workspace)==null?void 0:_.brand_color)||"#E8613A",d=((z=y.dbUser)==null?void 0:z.full_name)||"Koç",c=[],p=new Date(a);for(;F(p)<=i;){const T=`${e}_${F(p)}`;(l.tasks[T]||[]).forEach(D=>c.push({...D,date:F(p)})),p.setDate(p.getDate()+1)}const m=c.length,u=c.filter(T=>T.done).length,v=m>0?Math.round(u/m*100):0,S=c.filter(T=>T.done).reduce((T,D)=>T+Number(D.duration||0),0),E={};c.forEach(T=>{const D=T.subject||"Diğer";E[D]||(E[D]={total:0,done:0}),E[D].total++,T.done&&E[D].done++});const f=l.exams.filter(T=>T.studentId===e&&T.date>=a&&T.date<=i).sort((T,D)=>T.date.localeCompare(D.date)),$=l.appointments.filter(T=>T.studentId===e&&T.date>=a&&T.date<=i).sort((T,D)=>T.date.localeCompare(D.date)),w=`${new Date(a+"T12:00").toLocaleDateString("tr-TR",{day:"numeric",month:"long",year:"numeric"})} – ${new Date(i+"T12:00").toLocaleDateString("tr-TR",{day:"numeric",month:"long",year:"numeric"})}`;let B="";if(f.length>1){const T=Math.max(...f.map(k=>(EXAM_DEFS[k.type]||[]).reduce((M,j)=>{var P;return M+Number(((P=k.nets)==null?void 0:P[j])||0)},0)),1),D=400,C=80,L=Math.min(40,(D-20)/f.length-4);B=`<svg width="${D}" height="${C+30}" style="overflow:visible">
      ${f.map((k,M)=>{const j=(EXAM_DEFS[k.type]||[]).reduce((H,O)=>{var q;return H+Number(((q=k.nets)==null?void 0:q[O])||0)},0),P=Math.max(Math.round(j/T*(C-10)),4),Y=10+M*((D-20)/f.length);return`<rect x="${Y}" y="${C-P}" width="${L}" height="${P}" rx="3" fill="${r}" opacity="0.85"/>
          <text x="${Y+L/2}" y="${C-P-4}" text-anchor="middle" font-size="10" fill="#333">${j.toFixed(0)}</text>
          <text x="${Y+L/2}" y="${C+14}" text-anchor="middle" font-size="9" fill="#666">${g(k.name.replace("Deneme","").replace("TYT","").replace("AYT","").trim()||String(M+1))}</text>`}).join("")}
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
      <div class="brand-sub">Koç: ${g(d)}</div>
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
    <div class="stat-box"><div class="val">${Math.round(S/60)}</div><div class="lbl">Çalışma (saat)</div></div>
  </div>

  <!-- DERS BAZINDA ÇALIŞMA -->
  ${Object.keys(E).length>0?`
  <div class="section">
    <div class="section-title">📚 Ders Bazında Çalışma</div>
    <table>
      <thead><tr><th>Ders</th><th>Toplam</th><th>Tamamlanan</th><th>Oran</th><th></th></tr></thead>
      <tbody>
        ${Object.entries(E).sort((T,D)=>D[1].total-T[1].total).map(([T,D])=>{const C=Math.round(D.done/D.total*100),L=C>=80?"badge-green":C>=50?"badge-yellow":"badge-red";return`<tr>
            <td><strong>${g(T)}</strong></td>
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
      <thead><tr><th>Sınav</th><th>Tarih</th><th>Tür</th>${(EXAM_DEFS[(I=f[0])==null?void 0:I.type]||[]).map(T=>`<th>${T}</th>`).join("")}<th>Toplam</th></tr></thead>
      <tbody>
        ${f.map(T=>{const D=EXAM_DEFS[T.type]||[],C=D.reduce((L,k)=>{var M;return L+Number(((M=T.nets)==null?void 0:M[k])||0)},0).toFixed(1);return`<tr>
            <td><strong>${g(T.name)}</strong></td>
            <td>${new Date(T.date+"T12:00").toLocaleDateString("tr-TR",{day:"numeric",month:"short"})}</td>
            <td>${g(T.type)}</td>
            ${D.map(L=>{var M;const k=Number(((M=T.nets)==null?void 0:M[L])||0);return`<td><span class="badge ${k>=20?"badge-green":k>=12?"badge-yellow":"badge-red"}">${k}</span></td>`}).join("")}
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
        ${$.map(T=>`<tr>
          <td>${new Date(T.date+"T12:00").toLocaleDateString("tr-TR",{weekday:"short",day:"numeric",month:"short"})}</td>
          <td>${T.time}</td>
          <td>${g(T.type)}</td>
          <td>${T.duration} dk</td>
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
      <div style="margin-top:10px;font-size:11px;color:#888">— ${g(d)}</div>
    </div>
  </div>`:""}

  <!-- FOOTER -->
  <div class="footer">
    <span>${g(s)} · ${g(d)}</span>
    <span>${g(n.name)} · ${w}</span>
    <span>Rostrum Akademi Platformu</span>
  </div>
</div>
</body>
</html>`}function fs(){const e=document.getElementById("rpStuId").value,t=Qt(e,!0),n=window.open("","_blank","width=900,height=700");n.document.write(t),n.document.close()}function ys(){const e=document.getElementById("rpStuId").value;l.students.find(a=>a.id===e);const t=Qt(e,!1),n=window.open("","_blank");n.document.write(t),n.document.close(),setTimeout(()=>{n.focus(),n.print()},500),U("reportModal"),h('PDF oluşturuluyor — "PDF olarak kaydet" seçin')}async function xs(){const e=document.getElementById("rpStuId").value,t=l.students.find(s=>s.id===e);if(!t)return;const n=`${window.location.origin}/api/generate-pdf-report?studentId=${e}`,a=`Merhaba, ${t.name} isimli öğrencimizin bu dönemki performans ve gelişim raporu hazırlandı. Aşağıdaki bağlantıdan raporu detaylıca görüntüleyebilirsiniz:

🔗 ${n}`,o=`https://api.whatsapp.com/send?text=${encodeURIComponent(a)}`;window.open(o,"_blank"),U("reportModal"),h("WhatsApp yönlendirmesi açıldı ✓")}function bs(){let e=document.getElementById("weeklyPDFModal");e||(e=document.createElement("div"),e.id="weeklyPDFModal",e.className="modal-bg",e.innerHTML=`<div class="modal">
      <button class="modal-close" onclick="cm('weeklyPDFModal')">×</button>
      <h2>🖨️ Haftalık Program PDF</h2>
      <div class="field">
        <label>Koç Notu (isteğe bağlı)</label>
        <textarea id="pdfNote" placeholder="Bu haftaki programla ilgili notunuzu ekleyin..." style="min-height:90px"></textarea>
      </div>
      <button class="btn btn-accent" style="width:100%;justify-content:center;padding:12px" onclick="generateWeeklyPDF()">PDF Oluştur →</button>
    </div>`,document.body.appendChild(e),e.addEventListener("click",t=>{t.target===e&&e.classList.remove("open")})),document.getElementById("pdfNote").value="",G("weeklyPDFModal")}function hs(){const e=document.getElementById("pdfNote").value.trim();U("weeklyPDFModal"),oa(l.activeStuId,e)}function oa(e,t){var C,L;const n=l.students.find(k=>k.id===e);if(!n)return;const a=(n==null?void 0:n.weekStart)??0,i=te(l.weekOffset,a),o=J(i,6),s=((C=l.workspace)==null?void 0:C.brand_name)||"Rostrum Akademi",r=((L=l.workspace)==null?void 0:L.brand_color)||"#E8613A",d=["Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi","Pazar"],c=["Ocak","Şubat","Mart","Nisan","Mayıs","Haziran","Temmuz","Ağustos","Eylül","Ekim","Kasım","Aralık"],p={deneme:"#f59e0b",soru:"#3b82f6",konu:"#10b981",diger:"#8b5cf6"},m={deneme:"Deneme",soru:"Soru Bankası",konu:"Konu Anlatımı",diger:"Diğer"};let u=0,v=0,S=0;const E=[];for(let k=0;k<7;k++){const M=J(i,k),j=F(M),P=l.tasks[`${e}_${j}`]||[];u+=P.length,v+=P.filter(Y=>Y.done).length,S+=P.reduce((Y,H)=>Y+Number(H.duration||0),0),P.length>0&&E.push({d:M,ds:j,tasks:P,dayName:d[(a+k)%7]})}const f=u>0?Math.round(v/u*100):0,$=163.36,w=($*(1-f/100)).toFixed(1),B=(k,M=5)=>{let j="";for(let P=1;P<=M;P++)j+=`<span style="display:inline-block;width:6px;height:6px;border-radius:50%;margin-right:2px;background:${P<=k?r:"#E8E6DE"}"></span>`;return j},x=k=>k?'<span style="display:inline-flex;align-items:center;justify-content:center;width:15px;height:15px;border-radius:50%;background:#22C55E;flex-shrink:0"><svg width="8" height="6" viewBox="0 0 8 6"><path d="M1 3L3 5L7 1" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/></svg></span>':'<span style="display:inline-block;width:15px;height:15px;border-radius:50%;border:1.5px solid #D1D0DC;flex-shrink:0"></span>';let _="";for(const{d:k,tasks:M,dayName:j}of E){const P=M.reduce((H,O)=>H+Number(O.duration||0),0),Y=M.map(H=>{const O=p[H.type]||"#94a3b8",q=m[H.type]||"Diğer",V=H.done,Q=H.student_result||null,X=H.student_feedback||null,R=Q&&(Q.dogru!=null||Q.yanlis!=null||Q.bos!=null)?`
        <div style="display:flex;gap:4px;margin-top:5px;margin-left:21px">
          <span style="display:inline-flex;align-items:center;padding:2px 7px;border-radius:99px;font-size:9px;font-weight:700;background:#DCFCE7;color:#15803D">✓ ${Q.dogru??0}</span>
          <span style="display:inline-flex;align-items:center;padding:2px 7px;border-radius:99px;font-size:9px;font-weight:700;background:#FEE2E2;color:#B91C1C">✗ ${Q.yanlis??0}</span>
          <span style="display:inline-flex;align-items:center;padding:2px 7px;border-radius:99px;font-size:9px;font-weight:700;background:#F1F5F9;color:#64748B">— ${Q.bos??0}</span>
        </div>`:"",N=H.student_note?`<div style="font-size:9px;color:#9998AA;font-style:italic;margin-top:4px;margin-left:21px;line-height:1.4">"${g(H.student_note)}"</div>`:"",K=X&&(X.difficulty||X.focus)?`
        <div style="display:flex;flex-direction:column;align-items:flex-end;gap:3px;margin-top:6px">
          ${X.difficulty?`<div style="white-space:nowrap"><span style="font-size:8px;color:#C4C3D0">Zorluk </span>${B(X.difficulty)}</div>`:""}
          ${X.focus?`<div style="white-space:nowrap"><span style="font-size:8px;color:#C4C3D0">Odak </span>${B(X.focus)}</div>`:""}
        </div>`:"";return`<div style="background:#fff;border-radius:8px;border:1px solid #E8E6DE;border-left:3px solid ${O};margin-bottom:6px;padding:10px 14px;display:flex;gap:10px;align-items:flex-start">
        <div style="flex:1;min-width:0">
          <div style="display:flex;align-items:center;gap:6px;margin-bottom:3px">
            ${x(V)}
            <span style="font-size:11px;font-weight:800;color:${V?"#9998AA":"#111118"};${V?"text-decoration:line-through":""}">${g(H.subject)}</span>
            <span style="font-size:8px;font-weight:700;color:${O};text-transform:uppercase;letter-spacing:.5px;margin-left:2px">${q}${H.exam?" · "+g(H.exam):""}</span>
          </div>
          ${H.note?`<div style="font-size:9px;color:#6B6A7A;margin-left:21px;line-height:1.4;margin-bottom:2px">${g(H.note)}</div>`:""}
          ${R}
          ${N}
        </div>
        <div style="display:flex;flex-direction:column;align-items:flex-end;flex-shrink:0">
          <span style="font-size:10px;font-weight:600;color:#9998AA;background:#F7F6F2;padding:2px 8px;border-radius:99px;white-space:nowrap">${H.duration} dk</span>
          ${K}
        </div>
      </div>`}).join("");_+=`<div style="margin-bottom:14px">
      <div style="display:flex;align-items:center;gap:10px;margin-bottom:7px">
        <span style="font-size:10px;font-weight:800;text-transform:uppercase;letter-spacing:.1em;color:#111118">${j}</span>
        <span style="font-size:10px;color:#6B6A7A">${k.getDate()} ${c[k.getMonth()]}</span>
        <div style="flex:1;height:1px;background:#E8E6DE"></div>
        <span style="font-size:9px;color:#9998AA">${M.length} görev · ${P} dk</span>
      </div>
      ${Y}
    </div>`}const I=[{val:v,lbl:"Tamamlanan",col:"#22C55E"},{val:u-v,lbl:"Bekleyen",col:"#C4C3D0"},{val:Math.round(S/60)+" sa",lbl:"Toplam Süre",col:r},{val:u,lbl:"Toplam Görev",col:"#C4C3D0"}].map((k,M)=>`<div style="flex:1;${M>0?"border-left:1px solid rgba(255,255,255,.06);padding-left:16px;":""}padding-right:16px">
    <div style="font-size:18px;font-weight:800;color:${k.col};font-variant-numeric:tabular-nums">${k.val}</div>
    <div style="font-size:8px;color:#6B6A7A;text-transform:uppercase;letter-spacing:.07em">${k.lbl}</div>
  </div>`).join(""),T=`<!DOCTYPE html><html lang="tr"><head><meta charset="UTF-8"><title>${g(n.name)} — Haftalık Program</title>
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
      <div style="display:flex;gap:0;margin-top:16px;border-top:1px solid rgba(255,255,255,.06);padding-top:14px">${I}</div>
    </div>
    <div style="background:#F7F6F2;padding:18px 24px 20px">
      ${E.length===0?'<div style="text-align:center;color:#9998AA;padding:40px 0;font-size:13px">Bu hafta için görev bulunmuyor.</div>':_}
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
  </body></html>`,D=window.open("","_blank","width=1000,height=850");D.document.write(T),D.document.close(),setTimeout(()=>D.focus(),300)}function ks(){const e="abcdefghijklmnopqrstuvwxyz",t=()=>Array.from({length:3},()=>e[Math.floor(Math.random()*e.length)]).join("");return`https://meet.google.com/${t()}-${t()}-${t()}`}function ws(){return`https://zoom.us/j/${Math.floor(Math.random()*9e9)+1e9}`}function $s(e){navigator.clipboard.writeText(e).then(()=>h("Link kopyalandı ✓")).catch(()=>{const t=document.createElement("textarea");t.value=e,document.body.appendChild(t),t.select(),document.execCommand("copy"),t.remove(),h("Link kopyalandı ✓")})}const sa=[{name:"Terrakota",val:"#e8613a",dim:"rgba(232,97,58,.12)"},{name:"Altın",val:"#f0a500",dim:"rgba(240,165,0,.12)"},{name:"Mavi",val:"#4da6ff",dim:"rgba(77,166,255,.12)"},{name:"Yeşil",val:"#3ecf8e",dim:"rgba(62,207,142,.12)"},{name:"Mor",val:"#c084fc",dim:"rgba(192,132,252,.12)"},{name:"Pembe",val:"#f472b6",dim:"rgba(244,114,182,.12)"},{name:"Kırmızı",val:"#ff5c5c",dim:"rgba(255,92,92,.12)"},{name:"Turkuaz",val:"#06b6d4",dim:"rgba(6,182,212,.12)"}];function ra(){try{const e=JSON.parse(localStorage.getItem("ba_theme")||"{}");e.theme==="dark"?document.documentElement.setAttribute("data-theme","dark"):document.documentElement.removeAttribute("data-theme"),e.accent&&la(e.accent,e.accentDim,!1)}catch{}}function la(e,t,n=!0){if(document.documentElement.style.setProperty("--accent",e),document.documentElement.style.setProperty("--accent-dim",t||"rgba(240,165,0,.12)"),n)try{const a=JSON.parse(localStorage.getItem("ba_theme")||"{}");a.accent=e,a.accentDim=t,localStorage.setItem("ba_theme",JSON.stringify(a))}catch{}}function Ts(e){e==="dark"?document.documentElement.setAttribute("data-theme","dark"):document.documentElement.removeAttribute("data-theme");try{const t=JSON.parse(localStorage.getItem("ba_theme")||"{}");t.theme=e,localStorage.setItem("ba_theme",JSON.stringify(t))}catch{}document.querySelectorAll(".theme-btn").forEach(t=>{const n=t.dataset.theme===e;t.style.background=n?"var(--accent-dim)":"",t.style.borderColor=n?"var(--accent)":"",t.style.color=n?"var(--accent)":""})}function Es(){let e=document.getElementById("themePanel");if(e){e.remove();return}e=document.createElement("div"),e.id="themePanel";const t=document.documentElement.getAttribute("data-theme")!=="light";e.style.cssText="position:fixed;top:60px;right:12px;background:var(--surface);border:1px solid var(--border2);border-radius:14px;padding:18px;z-index:300;box-shadow:var(--shadow-lg);min-width:230px;animation:fadeUp .2s ease",e.innerHTML=`
    <div style="font-family:'Inter',sans-serif;font-size:13px;font-weight:700;margin-bottom:12px;color:var(--text)">🎨 Tema Ayarları</div>
    <div style="font-size:11px;font-weight:700;color:var(--text-mid);text-transform:uppercase;letter-spacing:.5px;margin-bottom:8px">Mod</div>
    <div style="display:flex;gap:6px;margin-bottom:16px">
      <button class="theme-btn btn btn-ghost btn-sm" data-theme="dark" onclick="setTheme('dark')" style="${t?"background:var(--accent-dim);border-color:var(--accent);color:var(--accent)":""}">🌙 Karanlık</button>
      <button class="theme-btn btn btn-ghost btn-sm" data-theme="light" onclick="setTheme('light')" style="${t?"":"background:var(--accent-dim);border-color:var(--accent);color:var(--accent)"}">☀️ Aydınlık</button>
    </div>
    <div style="font-size:11px;font-weight:700;color:var(--text-mid);text-transform:uppercase;letter-spacing:.5px;margin-bottom:8px">Accent Rengi</div>
    <div style="display:flex;gap:7px;flex-wrap:wrap;margin-bottom:14px">
      ${sa.map(n=>`<div onclick="applyAccent('${n.val}','${n.dim}');document.getElementById('themePanel').remove()" title="${n.name}"
        style="width:28px;height:28px;border-radius:8px;background:${n.val};cursor:pointer;transition:transform .1s"
        onmouseover="this.style.transform='scale(1.2)'" onmouseout="this.style.transform=''"></div>`).join("")}
    </div>
    <button onclick="document.getElementById('themePanel').remove()" style="width:100%;background:var(--surface2);border:1px solid var(--border);color:var(--text-mid);border-radius:8px;padding:7px;font-family:inherit;font-size:12px;cursor:pointer">Kapat</button>`,document.body.appendChild(e),setTimeout(()=>document.addEventListener("click",function n(a){!e.contains(a.target)&&!a.target.closest("[onclick*=openThemePanel]")&&(e.remove(),document.removeEventListener("click",n))},!0),150)}let Je=[],St=!1;function da(){const e=document.getElementById("aiChatBubble"),t=document.querySelector(".ai-header-name"),n=document.getElementById("aiMessages");if(!e||!t||!n)return;Je=[],n.innerHTML=`
    <div class="ai-welcome">
      <div class="ai-welcome-emoji">🎓</div>
      <div class="ai-welcome-title"></div>
      <div class="ai-welcome-sub"></div>
      <div class="ai-quick-btns"></div>
    </div>`;const a=n.querySelector(".ai-welcome"),i=a.querySelector(".ai-welcome-title"),o=a.querySelector(".ai-welcome-sub"),s=a.querySelector(".ai-quick-btns");y.role==="coach"||y.role==="developer"?(e.title="Yapay Zeka Koç Asistanı",t.textContent="Yapay Zeka Koç Asistanı",i.textContent="Merhaba Hocam! Ben Koç Asistanınız",o.textContent="Öğrenci analizleri, veri okuma, ders çalışma programı taslakları hazırlama ve pedagojik konularda size yardımcı olabilirim.",s.innerHTML=`
      <button class="ai-quick-btn" onclick="aiQuickSend('Seçili öğrencinin genel durum analizini yap')">📊 Öğrenci Analizi</button>
      <button class="ai-quick-btn" onclick="aiQuickSend('Pedagojik motivasyon teknikleri öner')">💡 Pedagojik Öneri</button>
      <button class="ai-quick-btn" onclick="aiQuickSend('Zorlanan bir öğrenci için haftalık program şablonu oluştur')">📋 Program Şablonu</button>
    `):y.role==="parent"?(e.title="Yapay Zeka Veli Bilgilendirme Asistanı",t.textContent="Yapay Zeka Veli Asistanı",i.textContent="Merhaba! Ben Veli Asistanıyım",o.textContent="Çocuğunuzun ders çalışma durumu, deneme netleri ve evde ona nasıl destek olabileceğiniz konularında bilgi alabilirsiniz.",s.innerHTML=`
      <button class="ai-quick-btn" onclick="aiQuickSend('Çocuğumun bu haftaki gelişimini özetle')">📊 Gelişim Özeti</button>
      <button class="ai-quick-btn" onclick="aiQuickSend('Evde verimli ders çalışma ortamı nasıl sağlanır?')">🏠 Ev Ortamı</button>
      <button class="ai-quick-btn" onclick="aiQuickSend('Sınav stresiyle başa çıkmak için veli olarak ne yapmalıyım?')">🧘 Stres Yönetimi</button>
    `):(e.title="Yapay Zeka Ders Asistanı",t.textContent="Yapay Zeka Ders Asistanı",i.textContent="Merhaba! Ben Ders Asistanın (Yapay Zeka)",o.textContent="7/24 anlık soru çözümü, konu anlatımı, özet çıkarma ve mini pratik sınav konularında sana yardımcı olan mekanik bir asistanım. Ben bir yapay zekayım ve koçunun yerini alamam; duygusal veya motivasyonel konularda koçuna danışmalısın.",s.innerHTML=`
      <button class="ai-quick-btn" onclick="aiQuickSend('Çözemediğim bir Matematik/Fen sorusu var. Sokratik tarzda, adım adım ipuçları vererek çözmeme yardım eder misin?')">📝 Çözemediğim Soru Var</button>
      <button class="ai-quick-btn" onclick="aiQuickSend('Bir konunun özetini çıkarmak istiyorum. Hangi ders ve konudan özet çıkarmak istediğimi sorup yardımcı olur musun?')">📖 Konu Özeti Çıkar</button>
      <button class="ai-quick-btn" onclick="aiQuickSend('Zayıf olduğum konular üzerinde çalışıp pratik yapmak istiyorum. Hangi derslerden yardıma ihtiyacım olduğunu sorup pratik yapalım.')">🎯 Zayıf Konuları Çalış</button>
      <button class="ai-quick-btn" onclick="aiQuickSend('Bana seçtiğim bir konudan 3 soruluk hızlı bir mini quiz yapar mısın? Soruları tek tek sor.')">⚡ Hızlı Sınav Yap</button>
    `)}function _s(){const e=document.getElementById("aiChatPanel"),t=document.getElementById("aiChatBubble");if(e.classList.contains("open"))e.classList.remove("open"),t.style.display="flex";else{e.classList.add("open"),t.style.display="none";const n=document.getElementById("aiMessages");n.scrollTop=n.scrollHeight,document.getElementById("aiInput").focus()}}function Ss(e){document.getElementById("aiInput").value=e,ca()}function Dt(){var t;const e={};try{const n=l.students.find(s=>s.id===l.activeStuId);n&&(e.studentName=n.name,e.target=n.target||""),y.role==="parent"&&y.childName&&(e.studentName=y.childName);const a=(l.exams||[]).filter(s=>s.studentId===l.activeStuId).slice(-5);a.length&&(e.recentExams=a.map(s=>({name:s.type+" "+(s.name||""),date:s.date||"",nets:s.nets||{}})));let i=[];if(Object.entries(l.tasks||{}).forEach(([s,r])=>{s.startsWith(l.activeStuId+"_")&&(i=i.concat(r))}),i.length){const s=i.filter(r=>r.done).length;e.taskCompletionRate=Math.round(s/i.length*100),e.weeklyTaskCount=i.length}const o=Object.keys(EXAM_DEFS);a.length&&(e.examProfile=((t=a[0])==null?void 0:t.type)||o[0])}catch(n){console.warn("AI context error:",n)}return e}function ye(e,t){Je.push({role:e,content:t});const n=document.getElementById("aiMessages"),a=n.querySelector(".ai-welcome");a&&a.remove();const i=new Date().toLocaleTimeString("tr-TR",{hour:"2-digit",minute:"2-digit"}),o=document.createElement("div");o.className=`ai-msg ${e}`,o.innerHTML=`${g(t).replace(/\n/g,"<br>")}<div class="ai-msg-time">${i}</div>`,n.appendChild(o),n.scrollTop=n.scrollHeight}let en=null;window._pickAiImg=function(e){const t=e.files[0];if(!t)return;if(t.size>8*1024*1024){h("Dosya max 8 MB olabilir"),e.value="";return}const n=new FileReader;n.onload=a=>{en={base64:a.target.result.split(",")[1],mimeType:t.type,name:t.name};const o=document.getElementById("aiImgPreview"),s=document.getElementById("aiImgThumb"),r=document.getElementById("aiImgName");s.src=a.target.result,s.style.display="block",r.textContent=t.name,o.style.display="flex"},n.readAsDataURL(t),e.value=""};window._cancelAiImg=function(){en=null;const e=document.getElementById("aiImgPreview");e&&(e.style.display="none")};async function ca(){if(St)return;const e=document.getElementById("aiInput"),t=e.value.trim(),n=en;if(!(!t&&!n)){if(e.value="",n){window._cancelAiImg();const a=document.getElementById("aiMessages"),i=a.querySelector(".ai-welcome");i&&i.remove();const o=document.createElement("div");o.className="ai-msg user",o.innerHTML=`<img src="data:${n.mimeType};base64,${n.base64}" style="max-width:180px;max-height:180px;border-radius:10px;display:block" />${t?`<div style="margin-top:6px">${g(t)}</div>`:""}<div class="ai-msg-time">${new Date().toLocaleTimeString("tr-TR",{hour:"2-digit",minute:"2-digit"})}</div>`,a.appendChild(o),a.scrollTop=a.scrollHeight,Je.push({role:"user",content:t||"Fotoğraftaki soruyu çöz.",image:n})}else ye("user",t);St=!0,document.getElementById("aiTyping").classList.add("show"),document.getElementById("aiSendBtn").disabled=!0;try{const a=Dt(),i=y.role||"student";if(n){const o=await fetch("/api/ai-chat",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({imageBase64:n.base64,mimeType:n.mimeType,text:t||"Bu soruyu çöz.",context:a,userRole:i})});if(o.ok){const s=await o.json();ye("assistant",s.reply||"Yanıt alınamadı.")}else{const s=await we(t,a,i,n);ye("assistant",s)}}else{const s=await fetch("/api/ai-chat",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({messages:Je.slice(-10),context:a,userRole:i})});if(s.ok){const r=await s.json();ye("assistant",r.reply||"Yanıt alınamadı.")}else{const r=await we(t,a,i,null);ye("assistant",r)}}}catch(a){console.error("AI error:",a);try{const i=Dt(),o=await we(t,i,y.role||"student",n);ye("assistant",o)}catch{const o=localStorage.getItem("gemini_api_key");ye("assistant","🔒 Bu özellik ileride aktif olacaktır. Yakında kullanıma açılacak.")}}finally{St=!1,document.getElementById("aiTyping").classList.remove("show"),document.getElementById("aiSendBtn").disabled=!1}}}let It=null;async function pa(e){try{const t=await fetch(`https://generativelanguage.googleapis.com/v1beta/models?key=${e}`);if(!t.ok)return null;const a=(await t.json()).models||[];let i=a.find(o=>o.name.toLowerCase().includes("flash")&&o.supportedGenerationMethods.includes("generateContent"));if(i||(i=a.find(o=>o.supportedGenerationMethods.includes("generateContent"))),i)return i.name.replace("models/","")}catch(t){console.warn("Auto-detect model failed:",t)}return null}async function we(e,t,n,a){var S,E,f,$,w,B;let i=localStorage.getItem("gemini_api_key");if(!i)try{const{data:x}=await b.from("platform_settings").select("value").eq("key","ai_settings").maybeSingle();x&&x.value&&x.value.gemini_api_key&&(i=x.value.gemini_api_key)}catch(x){console.warn("DB Gemini API key load error:",x)}const o=i;if(!o)throw new Error("API anahtarı eksik.");let s="gemini-1.5-flash";if(o)if(It)s=It;else{const x=await pa(o);x&&(It=x,s=x,console.log("[Gemini API] Otomatik model tespiti başarılı:",s))}let r=`Sen "Rostrum Akademi Yapay Zeka Asistanı"sın. Türkiye eğitim sistemine (YKS, LGS) hakim, rolüne göre öğrencilere, velilere veya koçlara destek veren bir yapay zekasın.

KESİNLİKLE YALNIZCA TÜRKÇE yanıt ver. İngilizce, Japonca, Çince veya başka hiçbir dil/karakter kullanma.

Rostrum Akademi İşleyişi, Üyelik ve Fiyatlandırma Bilgileri:
1. Kayıt olan tüm koçlara 14 gün ücretsiz deneme süresi tanımlanır. Bu süre bitiminde panel kilitlenir.
2. Otomatik ödeme/kredi kartı altyapısı yoktur; paket satın alma, ödeme ve lisans uzatma işlemleri tamamen manuel olarak yürütülür.
3. Kullanıcılar paket satın almak, deneme sürelerini uzatmak veya üyeliklerini aktif etmek için Kurucu Emin Ceylan (ceylanemin1928@gmail.com) ile iletişime geçmelidir.
4. Destek panelinde bulunan "Kurucuya / Destek Ekibine Yaz" seçeneği ile doğrudan kurucu ekibe mesaj gönderebilir ve bu ekran üzerinden onunla canlı yazışabilirler.
5. Güncel Paket Fiyatları:
   - Başlangıç Paketi (Starter): Aylık 299 TL
   - Koç Pro Paketi (Pro): Aylık 599 TL
   - Kurumsal Paket (Enterprise): Aylık 1499 TL`;const d=y.dbUser;if(d){const x=d.plan||"trial",_={trial:"Deneme",starter:"Başlangıç",pro:"Pro",enterprise:"Kurumsal"}[x]||x;if(x==="trial"){const z=d.trial_ends_at?new Date(d.trial_ends_at):new Date(new Date(d.created_at).getTime()+12096e5),I=Math.max(0,Math.ceil((z-Date.now())/864e5));r+=`
KULLANICI BİLGİSİ: Ad=${d.full_name||d.username}, Plan=${_}, Deneme süresi kalan=${I} gün (bitiş: ${z.toLocaleDateString("tr-TR")}).`}else r+=`
KULLANICI BİLGİSİ: Ad=${d.full_name||d.username}, Plan=${_} (aktif üye).`}n==="parent"?r+=`
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
Hedef: ${t.target}`);const p=Je.slice(-8).map(x=>{const _=[];return x.image&&_.push({inlineData:{mimeType:x.image.mimeType,data:x.image.base64}}),_.push({text:x.content||(x.image?"Soruyu çöz":"")}),{role:x.role==="user"?"user":"model",parts:_}}),m=[{role:"user",parts:[{text:r}]},{role:"model",parts:[{text:"Anladım! Rostrum Akademi Yapay Zeka Asistanı olarak hazırım."}]},...p],u=await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${s}:generateContent?key=${o}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({contents:m,generationConfig:{temperature:.7,maxOutputTokens:1500}})});if(!u.ok){let x=`HTTP ${u.status}`;try{const _=await u.json();(S=_==null?void 0:_.error)!=null&&S.message&&(x=_.error.message)}catch{}throw new Error(x)}const v=await u.json();return((B=(w=($=(f=(E=v==null?void 0:v.candidates)==null?void 0:E[0])==null?void 0:f.content)==null?void 0:$.parts)==null?void 0:w[0])==null?void 0:B.text)||"Yanıt üretilemedi."}let tn="";async function Is(e){const t=l.students.find(a=>a.id===e);if(!t)return;const n=document.getElementById("aiCopilotBtn");n.disabled=!0,n.textContent="⌛ Analiz Ediliyor ve Taslak Oluşturuluyor...";try{const a=te(0,t.weekStart||0);let i=0,o=0,s=0;for(let w=0;w<7;w++){const B=l.tasks[`${t.id}_${F(J(a,w))}`]||[];i+=B.length,o+=B.filter(x=>x.done).length,s+=B.reduce((x,_)=>x+Number(_.duration||0),0)}const r=i>0?Math.round(o/i*100):0,c=(l.exams||[]).filter(w=>w.studentId===e).slice(-5).map(w=>({name:w.type+" "+(w.name||""),date:w.date||"",nets:w.nets||{}})),p={};(l.studentSpeeds||[]).filter(w=>w.student_id===e).forEach(w=>{p[`${w.exam_type}_${w.subject}`]=w.secs_per_question});const m=`Lütfen şu öğrenci için haftalık durum analizi ve öğrenciye gönderilecek haftalık değerlendirme mesajı taslağı oluştur:
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
(Öğrenciye gönderilecek haftalık değerlendirme taslağı)`;let u="";const v={studentName:t.name,target:t.target,recentExams:c,taskCompletionRate:r,weeklyTaskCount:i};try{const w=await fetch("/api/ai-chat",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({messages:[{role:"user",content:m}],context:v,userRole:"coach"})});w.ok?u=(await w.json()).reply:u=await we(m,v,"coach")}catch{u=await we(m,v,"coach")}let S="Analiz üretilemedi.",E="Taslak üretilemedi.";const f=u.indexOf("[ANALİZ]"),$=u.indexOf("[TASLAK]");f!==-1&&$!==-1?f<$?(S=u.substring(f+8,$).trim(),E=u.substring($+8).trim()):(E=u.substring($+8,f).trim(),S=u.substring(f+8).trim()):E=u,document.getElementById("aiCopilotAnalysisBox").innerHTML=`<b>📊 Yapay Zeka Durum Analizi:</b><br>${S.replace(/\n/g,"<br>")}`,document.getElementById("aiCopilotTextarea").value=E,tn=E,document.getElementById("aiCopilotResultArea").style.display="block",document.getElementById("aiCopilotSendBtn").disabled=!0,document.getElementById("aiCopilotEditWarning").style.display="inline"}catch(a){console.error("generateAICopilotDraft error:",a),h("Taslak oluşturulurken hata: "+a.message)}finally{n.disabled=!1,n.textContent="🤖 Durum Analizi Yap ve Taslak Oluştur"}}function zs(){const e=document.getElementById("aiCopilotTextarea").value.trim(),t=document.getElementById("aiCopilotSendBtn"),n=document.getElementById("aiCopilotEditWarning");e&&e!==tn?(t.disabled=!1,n.style.display="none"):(t.disabled=!0,n.style.display="inline")}async function Bs(e){var a;const t=document.getElementById("aiCopilotTextarea").value.trim();if(!t)return;const n=document.getElementById("aiCopilotSendBtn");n.disabled=!0,n.textContent="Gönderiliyor...";try{const i=y.coachId||((a=l.students.find(r=>r.id===e))==null?void 0:a.coachId),{data:o,error:s}=await b.from("messages").insert({student_id:e,coach_id:i,from_role:"coach",text:t,read:!1}).select().single();if(s)throw s;await b.from("reports").insert({student_id:e,coach_id:i,type:"ai_copilot",title:"Yapay Zeka Copilot Değerlendirmesi",content:t,start_date:me(),end_date:me()}),l.messages[e]||(l.messages[e]=[]),l.messages[e].push({_id:o.id,from:"coach",text:t,time:new Date().toLocaleTimeString("tr-TR",{hour:"2-digit",minute:"2-digit"}),read:!1}),h("Taslak mesaj başarıyla düzenlendi, öğrenciye gönderildi ve arşive kaydedildi! ✓"),document.getElementById("aiCopilotResultArea").style.display="none",document.getElementById("aiCopilotTextarea").value="",tn=""}catch(i){console.error("sendCopilotDraft error:",i),h("Gönderim hatası: "+i.message),n.disabled=!1}finally{n.textContent="✍️ Düzenlemeyi Kaydet ve Öğrenciye Gönder"}}function ma(){const e=l.students.find(r=>r.id===l.activeStuId),t=y.childName||(e==null?void 0:e.name)||"Öğrenci",n=document.getElementById("view-parent-home");if(!n)return;let a=[];Object.entries(l.tasks||{}).forEach(([r,d])=>{r.startsWith(l.activeStuId+"_")&&(a=a.concat(d))});const i=a.filter(r=>r.done).length,o=a.length?Math.round(i/a.length*100):0,s=(l.exams||[]).filter(r=>r.studentId===l.activeStuId).slice(-3);n.innerHTML=`
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
        ${s.map(r=>{const d=Object.values(r.nets||{}).reduce((c,p)=>c+(parseFloat(p)||0),0);return`<div style="display:flex;justify-content:space-between;align-items:center;padding:10px 0;border-bottom:1px solid var(--border)">
            <div><div style="font-weight:600;font-size:13px">${g(r.name||r.type)}</div><div style="font-size:11px;color:var(--text-mid)">${r.date||""}</div></div>
            <div style="font-weight:800;color:var(--accent)">${d.toFixed(1)} net</div>
          </div>`}).join("")}
      </div>`:""}
      
      <div class="card" style="padding:20px;background:linear-gradient(135deg,rgba(240,165,0,.05),rgba(62,207,142,.05))">
        <div style="font-size:15px;font-weight:700;margin-bottom:8px">🤖 AI Asistandan Yardım Alın</div>
        <div style="font-size:12px;color:var(--text-mid);margin-bottom:12px">Çocuğunuzun ilerlemesi hakkında anında rapor alabilirsiniz.</div>
        <button class="btn btn-accent" onclick="toggleAIChat()" style="justify-content:center;width:100%;padding:12px">🤖 AI Asistan ile Konuş</button>
      </div>
    </div>`}function ua(){const e=document.getElementById("view-parent-progress");if(!e)return;const t=l.students.find(o=>o.id===l.activeStuId),n=y.childName||(t==null?void 0:t.name)||"Öğrenci",a=(l.exams||[]).filter(o=>o.studentId===l.activeStuId);let i=[];Object.entries(l.tasks||{}).forEach(([o,s])=>{o.startsWith(l.activeStuId+"_")&&(i=i.concat(s))}),e.innerHTML=`
    <div style="padding:24px;max-width:800px;margin:0 auto">
      <div style="font-size:20px;font-weight:800;margin-bottom:20px">📊 ${g(n)} - İlerleme Raporu</div>
      
      <div class="card" style="padding:20px;margin-bottom:16px">
        <div style="font-size:15px;font-weight:700;margin-bottom:16px">📋 Haftalık Görevler</div>
        ${i.length?i.slice(-10).map(o=>`
          <div style="display:flex;align-items:center;gap:10px;padding:8px 0;border-bottom:1px solid var(--border)">
            <div style="width:20px;height:20px;border-radius:50%;background:${o.done?"var(--green)":"var(--surface2)"};border:2px solid ${o.done?"var(--green)":"var(--border)"};display:flex;align-items:center;justify-content:center;font-size:10px;color:#fff">${o.done?"✓":""}</div>
            <div style="flex:1;font-size:13px">${g(o.subject)} <span style="font-size:11px;color:var(--text-dim)">(${Qe(o.type)})</span></div>
            <div style="font-size:11px;color:var(--text-mid)">${o.done?"Tamamlandı":"Bekliyor"}</div>
          </div>`).join(""):'<div style="text-align:center;color:var(--text-mid);padding:20px">Henüz görev bulunmuyor.</div>'}
      </div>
      
      <div class="card" style="padding:20px">
        <div style="font-size:15px;font-weight:700;margin-bottom:16px">📊 Deneme Geçmişi</div>
        ${a.length?a.slice(-10).map(o=>{const s=Object.values(o.nets||{}).reduce((r,d)=>r+(parseFloat(d)||0),0);return`<div style="display:flex;justify-content:space-between;align-items:center;padding:10px 0;border-bottom:1px solid var(--border)">
            <div><div style="font-weight:600;font-size:13px">${g(o.name||o.type)}</div><div style="font-size:11px;color:var(--text-mid)">${o.date||""}</div></div>
            <div style="font-weight:800;color:var(--accent)">${s.toFixed(1)} net</div>
          </div>`}).join(""):'<div style="text-align:center;color:var(--text-mid);padding:20px">Henüz deneme sonucu yok.</div>'}
      </div>
    </div>`}function ga(){const e=document.getElementById("view-parent-ai");e&&(e.innerHTML=`
    <div style="padding:24px;max-width:600px;margin:0 auto;text-align:center">
      <div style="font-size:48px;margin-bottom:16px">🤖</div>
      <div style="font-size:20px;font-weight:800;margin-bottom:8px">AI Koç Asistanı</div>
      <div style="font-size:13px;color:var(--text-mid);margin-bottom:24px;line-height:1.7">Çocuğunuzun eğitim süreci hakkında sorular sorun, deneme analizleri isteyin veya öneriler alın.</div>
      <button class="btn btn-accent" onclick="toggleAIChat()" style="justify-content:center;padding:14px 32px;font-size:15px">💬 AI Asistan ile Konuşmaya Başla</button>
    </div>`)}async function Ms(){var u;const e=document.getElementById("smId").value,t=document.getElementById("smName").value.trim(),n=Ae(document.getElementById("smUsername").value.trim()),a=document.getElementById("smPass").value,i=document.getElementById("smRole").value,o=document.getElementById("smTarget").value.trim(),s=((u=document.querySelector(".color-opt.sel"))==null?void 0:u.dataset.c)||"#e8622a",r=Number(document.getElementById("smWeekStart").value),d=Number(document.getElementById("smProg").value);if(!t||!n||!a)return h("Ad, kullanıcı adı ve şifre zorunlu!");const c=a.length===64?a:await Le(a),p=n+"@rostrumakademi.com",m={full_name:t,username:n,password_hash:c,role:i,target:o,color:s,week_start:r,progress:d};if(A(!0),e){const{error:v}=await b.from("users").update(m).eq("id",e);if(A(!1),v)return h("Hata: "+v.message);h("Kullanıcı güncellendi ✓")}else{const{data:v,error:S}=await b.rpc("create_new_user",{p_email:p,p_password:a,p_full_name:t,p_username:n,p_role:i,p_target:o,p_color:s,p_progress:d,p_week_start:r,p_coach_id:null,p_institution_id:null,p_exam_profile:"YKS"});if(A(!1),S)return h("Hata: "+S.message);h("Kullanıcı başarıyla oluşturuldu ✓")}U("studentModal"),tt()}let $e=[],xe={search:"",exam:"",subject:""};function nn(e){const t=xe.search;return e.filter(n=>!(t&&!n.name.toLowerCase().includes(t)&&!(n.publisher||"").toLowerCase().includes(t)||xe.exam&&n.exam_type!==xe.exam||xe.subject&&n.subject!==xe.subject))}function As(){var i,o,s;xe.search=(((i=document.getElementById("crSearch"))==null?void 0:i.value)||"").toLowerCase().trim(),xe.exam=((o=document.getElementById("crExam"))==null?void 0:o.value)||"",xe.subject=((s=document.getElementById("crSubject"))==null?void 0:s.value)||"";const e=document.getElementById("cr-tab-content");if(!e)return;const t=document.querySelector(".cr-tab.active"),n=(t==null?void 0:t.id)==="crt-playlists"?"playlists":(t==null?void 0:t.id)==="crt-analytics"?"analytics":"books",a=nn($e);e.innerHTML=kt(n,a)}function kt(e,t){const n=t.filter(r=>r.resource_type==="book"),a=t.filter(r=>r.resource_type==="playlist"),i={Matematik:"#3B82F6",Fizik:"#8B5CF6",Kimya:"#06B6D4",Biyoloji:"#10B981",Geometri:"#6366F1",Türkçe:"#F59E0B",Edebiyat:"#EC4899",Tarih:"#EF4444",Coğrafya:"#84CC16",Felsefe:"#14B8A6","Din Kültürü":"#F97316",Din:"#F97316",Genel:"#6B7280"},o={Matematik:"∑",Fizik:"⚛",Kimya:"🧪",Biyoloji:"🌿",Geometri:"△",Türkçe:"T",Edebiyat:"✒",Tarih:"🏛",Coğrafya:"🌍",Felsefe:"💭","Din Kültürü":"☪",Din:"☪",Genel:"📌"};function s(r,d){if(!r.length)return'<div style="text-align:center;padding:48px;color:var(--text-dim);font-size:13px">Kaynak bulunamadı.</div>';const c={};return r.forEach(p=>{const m=p.exam_type||"Diğer";c[m]||(c[m]={});const u=p.subject||"Genel";c[m][u]||(c[m][u]=[]),c[m][u].push(p)}),Object.entries(c).map(([p,m])=>`
      <div style="margin-bottom:28px">
        <div style="display:flex;align-items:center;gap:8px;margin-bottom:12px">
          <span style="font-size:10px;font-weight:800;letter-spacing:1px;text-transform:uppercase;color:#fff;background:var(--accent);padding:3px 10px;border-radius:99px">${p}</span>
          <div style="flex:1;height:1px;background:var(--border)"></div>
        </div>
        <div style="display:flex;flex-direction:column;gap:16px">
        ${Object.entries(m).map(([u,v])=>{const S=i[u]||"#6B7280",E=o[u]||"📌";return`<div>
            <div style="display:flex;align-items:center;gap:6px;margin-bottom:7px">
              <div style="width:22px;height:22px;border-radius:6px;background:${S}20;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:800;color:${S};flex-shrink:0">${E}</div>
              <span style="font-size:12px;font-weight:700;color:${S}">${u}</span>
              <span style="font-size:10px;color:var(--text-dim)">${v.length} kaynak</span>
            </div>
            <div style="display:flex;flex-direction:column;gap:4px;padding-left:28px">
              ${v.map(f=>`
                <div style="display:flex;align-items:center;padding:10px 14px;border-radius:10px;background:var(--surface);border:1.5px solid var(--border);gap:12px;cursor:default;transition:all .15s;box-shadow:var(--shadow)" onmouseover="this.style.borderColor='${S}';this.style.boxShadow='0 2px 12px ${S}22'" onmouseout="this.style.borderColor='var(--border)';this.style.boxShadow='var(--shadow)'">
                  <div style="flex:1;min-width:0">
                    <div style="font-size:13px;font-weight:700;color:var(--text);margin-bottom:3px">${g(f.name)}${f.coach_id?' <span style="font-size:10px;font-weight:700;color:var(--accent);background:var(--accent-dim);padding:1px 6px;border-radius:99px;margin-left:4px">Özel</span>':""}</div>
                    <div style="display:flex;align-items:center;gap:6px;flex-wrap:wrap">
                      <span style="font-size:11px;font-weight:600;color:var(--text-dim);background:var(--surface2);padding:1px 8px;border-radius:99px;border:1px solid var(--border)">${g(f.publisher||"—")}</span>
                      <span style="font-size:11px;color:var(--text-dim)">${(f.tests||[]).length} ${d==="book"?"test":"video"}</span>
                    </div>
                  </div>
                  ${f.coach_id?`<div style="display:flex;gap:4px;flex-shrink:0">
                    <button class="btn btn-ghost btn-xs" onclick="openResourceModalCoach('${f.id}','${d}')">✏️</button>
                    <button class="btn btn-danger btn-xs" onclick="deleteResourceCoach('${f.id}')">🗑</button>
                  </div>`:""}
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
        ${va(t).map(d=>{const c=d.totalCount>0?Math.round(d.doneCount/d.totalCount*100):0,p=c>=80?"var(--green)":c>=50?"var(--accent)":"var(--text-dim)";return`<div class="analytics-card">
            <div style="font-size:10px;font-weight:700;color:var(--accent);margin-bottom:4px;text-transform:uppercase;letter-spacing:.4px">${d.exam_type} · ${d.subject}</div>
            <div style="font-size:14px;font-weight:800;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;margin-bottom:8px">${g(d.name)}</div>
            <div style="display:flex;justify-content:space-between;font-size:11px;color:var(--text-mid);margin-bottom:6px"><span>Tamamlama</span><span style="font-weight:700;color:${p}">%${c}</span></div>
            <div style="height:5px;background:var(--surface3);border-radius:99px;overflow:hidden;margin-bottom:10px"><div style="height:100%;width:${c}%;background:${p};border-radius:99px"></div></div>
            <div style="display:flex;justify-content:space-between;font-size:11px;color:var(--text-dim)"><span>Atanma: <b>${d.assignedCount}</b></span><span>Öğrenci: <b>${d.studentsCount}</b></span></div>
          </div>`}).join("")||'<div style="grid-column:span 3;text-align:center;padding:40px;color:var(--text-dim)">Kayıtlı performans verisi bulunamadı.</div>'}
      </div>`}async function it(){const e=document.getElementById("view-coach-resources");if(!e)return;if(!$e.length){e.innerHTML='<div style="max-width:720px;margin:0 auto;padding:40px;text-align:center;color:var(--text-dim);font-size:13px">Kaynaklar yükleniyor…</div>';const{data:a,error:i}=await b.from("resources").select("*").or(`coach_id.eq.${y.coachId},coach_id.is.null`).order("resource_type,exam_type,subject,name");i&&console.error(i),$e=a||[]}xe={search:"",exam:"",subject:""};let t="books";const n=document.querySelector(".cr-tab.active");n&&(n.id==="crt-playlists"?t="playlists":n.id==="crt-analytics"&&(t="analytics")),e.innerHTML=`<div style="max-width:720px;margin:0 auto">
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
      ${kt(t,$e)}
    </div>
  </div>`}function Ds(e){var n;document.querySelectorAll(".cr-tab").forEach(a=>a.classList.remove("active")),(n=document.getElementById("crt-"+e))==null||n.classList.add("active");const t=nn($e);document.getElementById("cr-tab-content").innerHTML=kt(e,t)}function va(e){const t={};return e.forEach(n=>{t[n.name]={name:n.name,exam_type:n.exam_type,subject:n.subject,assignedCount:0,totalCount:0,doneCount:0,students:new Set}}),Object.entries(l.tasks).forEach(([n,a])=>{const i=n.split("_")[0];a.forEach(o=>{e.forEach(s=>{if(o.subject&&o.subject.includes(s.name)){const r=t[s.name];r&&(r.assignedCount++,r.students.add(i),o.task_items&&Array.isArray(o.task_items)?o.task_items.forEach(d=>{r.totalCount++,(d.done||o.done)&&r.doneCount++}):(r.totalCount++,o.done&&r.doneCount++))}})})}),Object.values(t).map(n=>({...n,studentsCount:n.students.size})).filter(n=>n.assignedCount>0).sort((n,a)=>a.assignedCount-n.assignedCount)}function Cs(e,t="book"){const n=t==="playlist";let a=document.getElementById("coachResourceModal");a||(a=document.createElement("div"),a.id="coachResourceModal",a.className="modal-bg",a.innerHTML=`<div class="modal modal-lg">
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
Sayılar - Test 2 | 14`,document.getElementById("crmYtImportBox").style.display=n&&!e?"":"none",document.getElementById("crmTestsField").style.display=n?"none":"",document.getElementById("crmYtUrl").value="",document.getElementById("crmYtStatus").textContent="",document.getElementById("crmVideoPreview").style.display="none",document.getElementById("crmVideoPreview").innerHTML="",window._crmFetchedVideos=[],e?b.from("resources").select("*").eq("id",e).single().then(({data:i})=>{if(i){document.getElementById("crmExam").value=i.exam_type,document.getElementById("crmSubject").value=i.subject,document.getElementById("crmPublisher").value=i.publisher||"",document.getElementById("crmName").value=i.name||"";const o=i.tests||[];n?(document.getElementById("crmTestsField").style.display="",document.getElementById("crmTests").value=o.map(s=>`${s.label||s} | ${s.url||""} | ${s.soru||0}`).join(`
`)):document.getElementById("crmTests").value=o.map(s=>`${s.label||s} | ${s.soru||0}`).join(`
`)}}):(document.getElementById("crmExam").value="TYT",document.getElementById("crmSubject").value="Matematik",document.getElementById("crmPublisher").value="",document.getElementById("crmName").value="",document.getElementById("crmTests").value=""),G("coachResourceModal")}async function Ls(){const e=document.getElementById("crmYtUrl").value.trim(),t=document.getElementById("crmYtStatus");if(!e)return t.innerHTML='<span style="color:var(--red)">⚠️ Playlist URL girin</span>';const n=e.match(/[?&]list=([^&]+)/);if(!n)return t.innerHTML='<span style="color:var(--red)">⚠️ list= parametresi bulunamadı</span>';const a=n[1];t.innerHTML="⏳ Çekiliyor...";try{let i=[],o="";do{let r=`/api/youtube?playlistId=${a}`;o&&(r+=`&pageToken=${o}`);const d=await fetch(r);if(!d.ok)throw new Error("Playlist çekilemedi.");const c=await d.json();c.items&&(i=i.concat(c.items)),o=c.nextPageToken||"",t.innerHTML=`⏳ ${i.length} video yükleniyor...`}while(o&&i.length<200);window._crmFetchedVideos=i;const s=document.getElementById("crmVideoPreview");if(s.style.display="",s.innerHTML=i.map((r,d)=>`
      <div style="display:flex;align-items:center;gap:8px;padding:7px 12px;border-bottom:1px solid var(--border)">
        <div style="width:20px;height:20px;border-radius:5px;background:var(--surface3);color:var(--text-mid);font-size:9px;font-weight:800;display:flex;align-items:center;justify-content:center;flex-shrink:0">${d+1}</div>
        <div style="flex:1;min-width:0">
          <div style="font-size:11px;font-weight:600;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${g(r.title)}</div>
          <div style="font-size:10px;color:var(--text-dim)">⏱ ${r.duration||"?"} dk</div>
        </div>
        <a href="${g(r.url)}" target="_blank" style="font-size:10px;font-weight:700;background:#cc000022;color:#ff5555;border:1px solid #aa222233;padding:3px 8px;border-radius:6px;text-decoration:none;flex-shrink:0">▶</a>
      </div>`).join(""),i.length>0&&!document.getElementById("crmName").value){const r=i[0].title;document.getElementById("crmName").value=r.split(" | ")[0].split(" - ")[0].trim().slice(0,50)}t.innerHTML=`<span style="color:var(--green)">✓ ${i.length} video çekildi!</span>`}catch(i){t.innerHTML=`<span style="color:var(--red)">⚠️ Hata: ${i.message}</span>`}}async function js(){const e=document.getElementById("crmName").value.trim(),t=document.getElementById("crmSubject").value;if(!e||!t)return h("Ad ve ders zorunlu!");const n=document.getElementById("crmId").value,a=document.getElementById("crmType").value==="playlist",i=document.getElementById("crmTests").value.split(`
`).map(d=>d.trim()).filter(Boolean),o=window._crmFetchedVideos||[];let s=[];if(a){if(o.length>0?s=o.map(d=>({label:d.title||"",url:d.url||"",topic:"",soru:parseInt(d.duration)||0})):s=i.map(d=>{const c=d.split("|").map(p=>p.trim());return{label:c[0]||"",url:c[1]||"",topic:"",soru:parseInt(c[2])||0}}),!s.length)return h("Video listesi boş! Önce playlist çekin.")}else s=i.map(d=>{const c=d.split("|").map(p=>p.trim());return{label:c[0]||"",soru:parseInt(c[1])||0}});const r={exam_type:document.getElementById("crmExam").value,subject:t,publisher:document.getElementById("crmPublisher").value.trim(),year:new Date().getFullYear(),name:e,tests:s,active:!0,resource_type:a?"playlist":"book",coach_id:y.coachId};A(!0),n?(await b.from("resources").update(r).eq("id",n),h("Güncellendi ✓")):(await b.from("resources").insert(r),h("Kaynak eklendi ✓")),A(!1),U("coachResourceModal"),$e=[],it()}async function Ps(e){await ae("Bu kaynağı silmek istediğinizden emin misiniz?")&&(A(!0),await b.from("resources").delete().eq("id",e),A(!1),h("Silindi"),$e=[],it())}function Rs(e){const t=e.target.files[0];if(!t)return;A(!0);const n=new FileReader;n.onload=async a=>{try{const i=new Uint8Array(a.target.result),o=XLSX.read(i,{type:"array"}),s=o.SheetNames[0],r=o.Sheets[s],d=XLSX.utils.sheet_to_json(r);if(d.length===0)return A(!1),h("Excel dosyası boş!");const c={};d.forEach(u=>{const v=u["Kaynak Adı"]||u.Name||u["Kitap Adı"]||u["Playlist Adı"]||"",E=(u["Kaynak Türü"]||u.Type||u.Tür||"book").toLowerCase().includes("playlist")?"playlist":"book",f=u.Yayınevi||u.Publisher||u.Hoca||"",$=u.Sınav||u.Exam||"TYT",w=u.Ders||u.Subject||"",B=u["Öğe Adı"]||u.Test||u.Video||u["Test Adı"]||u["Video Adı"]||"",x=parseInt(u["Soru Sayısı"]||u.Soru||u.Süre||u["Süre (dk)"]||0),_=u.URL||u.Link||"";if(!v||!w||!B)return;const z=`${v}_${$}_${w}_${E}`;c[z]||(c[z]={exam_type:$,subject:w,publisher:f,name:v,resource_type:E,tests:[]}),c[z].tests.push({label:B,soru:x,url:_,topic:""})});const p=Object.values(c);if(p.length===0)return A(!1),h("Uyumlu veri bulunamadı! Sütun başlıklarını kontrol edin.");let m=0;for(const u of p){const{error:v}=await b.from("resources").insert({...u,year:new Date().getFullYear(),active:!0,coach_id:y.coachId});v||m++}A(!1),h(`✓ Excel'den ${m} kaynak başarıyla aktarıldı!`),$e=[],it()}catch(i){A(!1),console.error(i),h("Excel okuma hatası: "+i.message)}},n.readAsArrayBuffer(t)}function Ns(e){const t=e.target.files[0];if(!t)return;A(!0);const n=new FileReader;n.onload=async a=>{try{const i=new Uint8Array(a.target.result),o=XLSX.read(i,{type:"array"}),s=o.Sheets[o.SheetNames[0]],r=XLSX.utils.sheet_to_json(s);if(r.length===0)return A(!1),h("Excel dosyası boş!");let d=0;for(const c of r){const p=c["Ad Soyad"]||c.Ad||c.Name||"",m=c.Hedef||c.Target||"Hedef belirtilmemiş";let u=c["Kullanıcı Adı"]||c.Username||"",v=c.Şifre||c.Password||STU_DEFAULT_PASS;if(!p)continue;u||(u=p.toLowerCase().replace(/\s+/g,"")+Math.floor(Math.random()*100),u=Ae(u));const S=await Le(v),E=u+"@rostrumakademi.com",{data:f,error:$}=await b.rpc("create_new_user",{p_email:E,p_password:v,p_full_name:p,p_username:u,p_role:"student",p_target:m,p_color:"#4da6ff",p_progress:0,p_week_start:0,p_coach_id:y.coachId,p_institution_id:null,p_exam_profile:"YKS"});!$&&f&&(l.students.push({id:f,name:p,target:m,color:"#4da6ff",progress:0,pass:S,weekStart:0,username:u}),d++)}A(!1),h(`✓ Excel'den ${d} öğrenci başarıyla eklendi!`),be(),et()}catch(i){A(!1),console.error(i),h("Excel okuma hatası: "+i.message)}},n.readAsArrayBuffer(t)}function fa(e){if(!l.activeStuId||!W)return null;let t=null;return Object.entries(l.tasks).forEach(([n,a])=>{n.startsWith(l.activeStuId+"_")&&a.forEach(i=>{i.subject&&i.subject.includes(W.name)&&(i.task_items&&Array.isArray(i.task_items)?i.task_items.forEach(o=>{(o.label||o)===e&&(o.done||i.done?t="done":t!=="done"&&(t="pending"))}):i.note&&i.note.includes(e)&&(i.done?t="done":t!=="done"&&(t="pending")))})}),t}async function Hs(e,t){var d;const a=`${l.activeStuId}_${e}`,i=(d=l.tasks[a])==null?void 0:d[t];if(!i)return;ze=e,_editingTaskId=i._id,W=null,document.querySelector("#taskModal h2").innerHTML=`Görev Düzenle — <span id="tmDay">${e}</span>`,document.querySelector("#taskModal .btn-accent").textContent="Güncelle",document.getElementById("tmType").value=i.type,document.getElementById("tmExam").value=i.exam||"",document.getElementById("tmDuration").value=i.duration||60,document.getElementById("tmStartTime").value=i.start_time||"",document.getElementById("tmNote").value=i.note||"";const o=i.exam||"",s=i.type;{const c=document.getElementById("tmSubjectSel"),p=document.getElementById("tmSubjectFree");document.getElementById("tmBookVal").value="",document.getElementById("tmBookSearch").value="",document.getElementById("tmBookList").style.display="none",document.getElementById("tmTestWrap").style.display="none";const m=document.getElementById("tmTestSummary");m&&(m.style.display="none"),o&&typeof SUBJECT_MAP<"u"&&SUBJECT_MAP[o]?(c.innerHTML=SUBJECT_MAP[o].map(S=>`<option value="${S}">${S}</option>`).join(""),c.style.display="",p.style.display="none"):(c.style.display="none",p.style.display="");const u=(s==="soru"||s==="konu")&&o;document.getElementById("soruBankasiWrap").style.display=u?"":"none";const v=document.getElementById("tmBookSearch");v&&(v.placeholder=s==="konu"?"Hoca veya playlist ara...":"Kitap veya yayınevi ara...")}if((s==="soru"||s==="konu")&&o){const c=document.getElementById("tmSubjectSel");let p="",m=i.subject;if(i.subject.includes(" - ")){const E=i.subject.split(" - ");p=E[0].trim(),m=E.slice(1).join(" - ").trim()}p&&SUBJECT_MAP[o]&&SUBJECT_MAP[o].includes(p)&&(c.value=p),document.getElementById("tmBookVal").value=m,document.getElementById("tmBookSearch").value=m,A(!0),await Mn(),A(!1);const u=`${o}_${p}`;let S=(se[u]||[]).find(E=>E.name===m);if(S||Object.values(se).forEach(E=>{const f=E.find($=>$.name===m);f&&(S=f)}),S){W=S,document.getElementById("tmTestWrap").style.display="",Kt();const E=(i.task_items||[]).map($=>$.label||$);document.querySelectorAll("#tmTestList input[type=checkbox]").forEach($=>{var x;const w=parseInt($.value),B=((x=W.testler[w])==null?void 0:x.label)||W.testler[w];E.includes(B)?$.checked=!0:$.checked=!1}),Ke()}}else{const c=document.getElementById("tmSubjectSel"),p=document.getElementById("tmSubjectFree");c.style.display!=="none"?c.value=i.subject:p.value=i.subject,document.getElementById("tmBookVal").value="",document.getElementById("tmBookSearch").value="",document.getElementById("tmBookList").style.display="none",document.getElementById("tmTestWrap").style.display="none"}G("taskModal")}async function Ys(){const e=prompt("Şablon adı giriniz:");if(!e)return;const t=l.students.find(r=>r.id===l.activeStuId),n=(t==null?void 0:t.weekStart)??0,a=te(l.weekOffset,n),i=[];for(let r=0;r<7;r++){const d=J(a,r),c=F(d),p=`${l.activeStuId}_${c}`;(l.tasks[p]||[]).forEach(u=>{i.push({day_index:r,type:u.type,exam_type:u.exam||null,subject:u.subject,duration:u.duration,note:u.note||"",task_items:u.task_items||null})})}if(i.length===0)return h("Bu haftada kaydedilecek görev bulunmuyor!");A(!0);const{error:o}=await b.from("program_templates").insert({coach_id:y.coachId,name:e,description:`${i.length} görev içeriyor.`,tasks:i});if(A(!1),o)return h("Şablon kaydedilemedi: "+o.message);h("Hafta şablon olarak kaydedildi ✓"),await ae(`"${e}" şablonunu Rostrum Akademi ekibiyle paylaşmak ister misiniz?

Paylaşılan şablonlar değerlendirilerek tüm koçlara önerilebilir.`)&&b.auth.getSession().then(({data:{session:r}})=>{const d=r==null?void 0:r.access_token;d&&fetch("/api/mailer",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${d}`},body:JSON.stringify({type:"template_share",template_name:e,task_count:i.length,tasks_json:JSON.stringify(i,null,2)})}).then(()=>h("Şablon Rostrum ekibiyle paylaşıldı ✓")).catch(()=>h("Şablon kaydedildi, paylaşım gönderilemedi."))})}async function Ks(){A(!0);const{data:e,error:t}=await b.from("program_templates").select("*").eq("coach_id",y.coachId);if(A(!1),t)return h("Şablonlar yüklenemedi.");if(!e||e.length===0)return h("Kayıtlı şablonunuz bulunmuyor. Önce haftayı şablon olarak kaydedin.");let n=document.getElementById("applyTemplateModal");n||(n=document.createElement("div"),n.id="applyTemplateModal",n.className="modal-bg",n.innerHTML=`<div class="modal">
      <button class="modal-close" onclick="cm('applyTemplateModal')">×</button>
      <h2>Şablon Uygula</h2>
      <div class="field"><label>Şablon Seçin</label>
        <select id="atmSelect"></select>
      </div>
      <button class="btn btn-accent" style="width:100%;justify-content:center;padding:12px;margin-top:12px" onclick="confirmApplyTemplate()">Uygula</button>
    </div>`,document.body.appendChild(n),n.addEventListener("click",a=>{a.target===n&&n.classList.remove("open")})),document.getElementById("atmSelect").innerHTML=e.map(a=>`<option value="${a.id}">${g(a.name)} (${a.tasks.length} Görev)</option>`).join(""),G("applyTemplateModal")}async function Os(){const e=document.getElementById("atmSelect").value;if(!e)return;A(!0);const{data:t,error:n}=await b.from("program_templates").select("*").eq("id",e).single();if(n||!t)return A(!1),h("Şablon yüklenemedi.");const a=l.students.find(s=>s.id===l.activeStuId),i=(a==null?void 0:a.weekStart)??0,o=te(l.weekOffset,i);for(const s of t.tasks){const r=F(J(o,s.day_index)),d={student_id:l.activeStuId,coach_id:y.coachId,date:r,type:s.type,exam_type:s.exam_type,subject:s.subject,duration:s.duration,note:s.note,done:!1,task_items:s.task_items},{data:c,error:p}=await b.from("tasks").insert(d).select().single();if(!p&&c){const m=`${l.activeStuId}_${r}`;l.tasks[m]||(l.tasks[m]=[]),l.tasks[m].push({_id:c.id,type:c.type,exam:c.exam_type,subject:c.subject,duration:c.duration,note:c.note,done:!1,student_note:"",task_items:c.task_items})}}A(!1),U("applyTemplateModal"),Z(),h("Şablon başarıyla uygulandı ✓")}function Fs(e,t){var o;const a=`${l.activeStuId}_${e}`,i=(o=l.tasks[a])==null?void 0:o[t];i&&(_clipboardTask={type:i.type,exam:i.exam,subject:i.subject,duration:i.duration,note:i.note,task_items:i.task_items},h("Görev panoya kopyalandı ✓"),Z())}async function Gs(e){if(!_clipboardTask)return;const t={student_id:l.activeStuId,coach_id:y.coachId,date:e,type:_clipboardTask.type,exam_type:_clipboardTask.exam||null,subject:_clipboardTask.subject,duration:_clipboardTask.duration,note:_clipboardTask.note,done:!1,task_items:_clipboardTask.task_items};A(!0);const{data:n,error:a}=await b.from("tasks").insert(t).select().single();if(A(!1),a)return h("Hata: "+a.message);const i=`${l.activeStuId}_${e}`;l.tasks[i]||(l.tasks[i]=[]),l.tasks[i].push({_id:n.id,type:n.type,exam:n.exam_type,subject:n.subject,duration:n.duration,note:n.note,done:!1,student_note:"",task_items:n.task_items}),Z(),h("Görev yapıştırıldı ✓")}async function Us(e,t){var p;const n=`${l.activeStuId}_${e}`,a=(p=l.tasks[n])==null?void 0:p[t];if(!a)return;const i=l.students.find(m=>m.id===l.activeStuId),o=(i==null?void 0:i.weekStart)??0,s=te(l.weekOffset,o),r=[];for(let m=0;m<7;m++){const u=J(s,m),v=F(u);v!==e&&r.push({student_id:l.activeStuId,coach_id:y.coachId,date:v,type:a.type,exam_type:a.exam||null,subject:a.subject,duration:a.duration,note:a.note,done:!1,task_items:a.task_items})}if(r.length===0)return;A(!0);const{data:d,error:c}=await b.from("tasks").insert(r).select();if(A(!1),c)return h("Hata: "+c.message);(d||[]).forEach(m=>{const u=`${l.activeStuId}_${m.date}`;l.tasks[u]||(l.tasks[u]=[]),l.tasks[u].push({_id:m.id,type:m.type,exam:m.exam_type,subject:m.subject,duration:m.duration,note:m.note,done:!1,student_note:"",task_items:m.task_items})}),Z(),h("Görev tüm haftaya kopyalandı ✓")}async function qs(){if(!_clipboardTask)return;const e=l.students.find(s=>s.id===l.activeStuId),t=(e==null?void 0:e.weekStart)??0,n=te(l.weekOffset,t),a=[];for(let s=0;s<7;s++){const r=J(n,s),d=F(r);a.push({student_id:l.activeStuId,coach_id:y.coachId,date:d,type:_clipboardTask.type,exam_type:_clipboardTask.exam||null,subject:_clipboardTask.subject,duration:_clipboardTask.duration,note:_clipboardTask.note,done:!1,task_items:_clipboardTask.task_items})}A(!0);const{data:i,error:o}=await b.from("tasks").insert(a).select();if(A(!1),o)return h("Hata: "+o.message);(i||[]).forEach(s=>{const r=`${l.activeStuId}_${s.date}`;l.tasks[r]||(l.tasks[r]=[]),l.tasks[r].push({_id:s.id,type:s.type,exam:s.exam_type,subject:s.subject,duration:s.duration,note:s.note,done:!1,student_note:"",task_items:s.task_items})}),_clipboardTask=null,Z(),h("Görev tüm haftaya yapıştırıldı ✓")}ra();qt();window.addEventListener("hashchange",()=>{let e=window.location.hash.substring(1);if(document.getElementById("appShell").classList.contains("visible")&&e!==currentTab){if(!e){e={coach:"home",student:"portal",developer:"home",parent:"parent-home"}[y.role]||"portal",window.location.hash=e;return}document.getElementById("view-"+e)&&ie(e,!1)}});async function an(){const e=document.getElementById("view-coach-applications");if(!e)return;e.innerHTML=`<div style="padding:24px;max-width:800px;margin:0 auto">
    <div style="font-family:'Inter',sans-serif;font-size:22px;font-weight:800;margin-bottom:4px">Eşleşme Başvuruları</div>
    <div style="font-size:13px;color:var(--text-mid);margin-bottom:20px">koc-bul sayfasından gelen öğrenci başvuruları</div>
    <div id="appsList" style="display:flex;flex-direction:column;gap:10px">
      <div style="text-align:center;padding:32px;color:var(--text-dim)">Yükleniyor...</div>
    </div>
  </div>`;const{data:t,error:n}=await b.from("match_requests").select("*").eq("matched_coach_id",y.coachId).order("created_at",{ascending:!1}),a=document.getElementById("appsList");if(n||!t){a.innerHTML=`<div style="padding:20px;color:var(--red);background:var(--red-dim);border-radius:10px">Başvurular yüklenemedi: ${(n==null?void 0:n.message)||"Bilinmeyen hata"}</div>`;return}if(t.length===0){a.innerHTML=`<div style="text-align:center;padding:40px;color:var(--text-dim)">
      <div style="font-size:32px;margin-bottom:12px">📭</div>
      <div style="font-size:14px;font-weight:600">Henüz başvuru yok</div>
      <div style="font-size:12px;margin-top:4px">Koc-bul sayfasındaki profilinize öğrenci başvurduğunda burada görünecek.</div>
    </div>`;const d=document.querySelector("#sbi_coach-applications .sb-badge");d&&d.remove();return}const i={pending:"#f0a500",accepted:"#3ecf8e",rejected:"#ff5c7a"},o={pending:"Beklemede",accepted:"Kabul Edildi",rejected:"Reddedildi"};a.innerHTML=t.map(d=>`
    <div style="background:var(--surface);border:1px solid var(--border);border-radius:14px;padding:18px 20px">
      <div style="display:flex;align-items:flex-start;justify-content:space-between;gap:12px;margin-bottom:12px">
        <div>
          <div style="font-size:15px;font-weight:700">${g(d.student_name||"İsimsiz")}</div>
          <div style="font-size:11px;color:var(--text-dim);margin-top:2px">${new Date(d.created_at).toLocaleDateString("tr-TR",{day:"numeric",month:"long",year:"numeric",hour:"2-digit",minute:"2-digit"})}</div>
        </div>
        <span style="font-size:11px;font-weight:700;padding:3px 10px;border-radius:99px;background:${i[d.status]||"#888"}22;color:${i[d.status]||"#888"};white-space:nowrap">
          ${o[d.status]||d.status}
        </span>
      </div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:14px">
        <div style="background:var(--surface2);border-radius:8px;padding:10px 12px">
          <div style="font-size:10px;color:var(--text-dim);font-weight:700;text-transform:uppercase;letter-spacing:.5px;margin-bottom:3px">E-posta</div>
          <a href="mailto:${g(d.email||"")}" style="font-size:13px;font-weight:600;color:var(--accent);text-decoration:none">${g(d.email||"—")}</a>
        </div>
        <div style="background:var(--surface2);border-radius:8px;padding:10px 12px">
          <div style="font-size:10px;color:var(--text-dim);font-weight:700;text-transform:uppercase;letter-spacing:.5px;margin-bottom:3px">Telefon</div>
          <a href="tel:${g(d.phone||"")}" style="font-size:13px;font-weight:600;color:var(--text);text-decoration:none">${g(d.phone||"—")}</a>
        </div>
        <div style="background:var(--surface2);border-radius:8px;padding:10px 12px">
          <div style="font-size:10px;color:var(--text-dim);font-weight:700;text-transform:uppercase;letter-spacing:.5px;margin-bottom:3px">Sınav Grubu</div>
          <div style="font-size:13px;font-weight:600">${g(d.exam_profile||"—")}</div>
        </div>
        ${d.style?`<div style="background:var(--surface2);border-radius:8px;padding:10px 12px">
          <div style="font-size:10px;color:var(--text-dim);font-weight:700;text-transform:uppercase;letter-spacing:.5px;margin-bottom:3px">Koçluk Tercihi</div>
          <div style="font-size:12px;color:var(--text-mid)">${g(d.style)}</div>
        </div>`:""}
      </div>
      ${d.status==="pending"?`
      <div style="display:flex;gap:8px">
        <button onclick="updateApplication('${d.id}','accepted','${g(d.email||"")}','${g(d.student_name||"")}')" style="flex:1;padding:9px;background:rgba(62,207,142,.12);color:#3ecf8e;border:1px solid rgba(62,207,142,.25);border-radius:8px;font-size:12px;font-weight:700;cursor:pointer">✓ Kabul Et</button>
        <button onclick="updateApplication('${d.id}','rejected','${g(d.email||"")}','${g(d.student_name||"")}')" style="flex:1;padding:9px;background:rgba(255,92,122,.08);color:#ff5c7a;border:1px solid rgba(255,92,122,.2);border-radius:8px;font-size:12px;font-weight:700;cursor:pointer">✗ Reddet</button>
      </div>`:""}
    </div>`).join("");const s=t.filter(d=>d.status==="pending").length,r=document.getElementById("sbi_coach-applications");if(r){const d=r.querySelector(".sb-badge");if(d&&d.remove(),s>0){const c=document.createElement("span");c.className="sb-badge",c.textContent=s,r.appendChild(c)}}}async function Ws(e,t,n,a){var o;const{error:i}=await b.from("match_requests").update({status:t}).eq("id",e);if(i)return h("Hata: "+i.message);h(t==="accepted"?"✓ Başvuru kabul edildi":"Başvuru reddedildi"),n&&fetch("/api/mailer",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({type:"application_update",to:n,student_name:a||"",status:t,coach_name:((o=l.workspace)==null?void 0:o.brand_name)||"Koçunuz"})}).catch(s=>console.warn("[updateApplication] mail error:",s.message)),an()}let Ce=null;async function ya(){var a;const e=document.getElementById("view-coach-notes");if(!e)return;e.innerHTML=`<div style="padding:24px;max-width:860px;margin:0 auto">
    <div style="font-family:'Inter',sans-serif;font-size:22px;font-weight:800;margin-bottom:4px">Notlarım</div>
    <div style="font-size:13px;color:var(--text-mid);margin-bottom:20px">Kişisel notlar — sadece sen görürsün</div>
    <div style="display:flex;gap:10px;margin-bottom:18px">
      <button onclick="openNoteEditor(null)" style="padding:8px 18px;background:var(--accent);color:#fff;border:none;border-radius:8px;font-size:13px;font-weight:700;cursor:pointer">+ Yeni Not</button>
    </div>
    <div id="coachNotesList" style="display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:12px">
      <div style="grid-column:1/-1;text-align:center;padding:32px;color:var(--text-dim)">Yükleniyor...</div>
    </div>
  </div>`;const t=`coach_notes_${y.coachId}`,{data:n}=await b.from("platform_settings").select("value").eq("key",t).maybeSingle();Ce=((a=n==null?void 0:n.value)==null?void 0:a.notes)||[],on()}function on(){const e=document.getElementById("coachNotesList");if(!e)return;const t=Ce;if(!t.length){e.innerHTML=`<div style="grid-column:1/-1;text-align:center;padding:48px;color:var(--text-dim)">
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
    </div>`).join("")}function Vs(e){const t=e!==null?Ce[e]||{}:{};let n=document.getElementById("coachNoteModal");n||(n=document.createElement("div"),n.id="coachNoteModal",n.className="modal-bg",document.body.appendChild(n)),n.innerHTML=`<div class="modal" style="max-width:520px">
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
  </div>`,n.style.display="flex"}async function Zs(e){const t=document.getElementById("noteEditorTitle").value.trim(),n=document.getElementById("noteEditorBody").value.trim();if(!t&&!n)return h("Not boş olamaz");const a={title:t||"Başlıksız",body:n,updated:new Date().toISOString()};e===null?Ce.unshift(a):Ce[e]=a,await xa(),document.getElementById("coachNoteModal").style.display="none",on(),h("Not kaydedildi ✓")}async function Js(e){await ae("Bu notu silmek istiyor musun?")&&(Ce.splice(e,1),await xa(),on(),h("Not silindi"))}async function xa(){const e=`coach_notes_${y.coachId}`;await b.from("platform_settings").upsert({key:e,value:{notes:Ce}},{onConflict:"key"})}function wt(){if(y.role!=="student")return;const e=(l.messages[y.studentId]||[]).filter(t=>t.from==="coach"&&!t.read).length;["sbi_smessages","mntab_smessages"].forEach(t=>{const n=document.getElementById(t);if(!n)return;n.style.position="relative";const a=n.querySelector(".msg-nav-badge");if(a&&a.remove(),e>0){const i=document.createElement("span");i.className="msg-nav-badge",i.style.cssText="position:absolute;top:3px;right:3px;background:#ef4444;color:#fff;border-radius:100px;min-width:14px;height:14px;font-size:9px;font-weight:800;display:flex;align-items:center;justify-content:center;padding:0 3px;pointer-events:none;line-height:1",i.textContent=e>9?"9+":e,n.appendChild(i)}})}window.updateMsgBadge=wt;window.toggleSidebar=Ka;window.setupShell=Fa;window.switchTab=ie;window.renderHome=$n;window.renderCoachApplications=an;window.updateApplication=Ws;window.renderCoachNotes=ya;window.openNoteEditor=Vs;window.toggleNewResourceMode=gi;window.addManualTest=vi;window.removeManualTest=fi;window.saveCoachNote=Zs;window.deleteCoachNote=Js;window.renderStudentsSearch=et;window.filterStudentSearch=Ga;window.openStudentDetail=Tn;window.openKonuHaritasi=Wa;window.openStudentProgram=Nt;window.openStudentExams=Va;window.openStudentAppointments=Za;window.renderProfile=Sn;window.saveProfile=ni;window.renderSettings=In;window.saveGeminiKey=ai;window.renderProgram=Z;window.selectStu=ii;window.chWeek=oi;window.goToday=si;window.openClearWeekModal=li;window.toggleDaySel=di;window.toggleAllDays=ci;window.confirmClearDays=pi;window.openTaskModal=yi;window.loadResources=Mn;window.updateSubjectList=Yt;window.updateBookList=xi;window.renderBookList=ft;window.filterBooks=bi;window.selectBook=hi;window.renderTestList=Kt;window.selectAllTests=ki;window.clearAllTests=wi;window.updateTestSummary=Ke;window.selectModalSpeed=$i;window.applyDuration=Ti;window.loadStudentSpeeds=An;window.saveStudentSpeed=Dn;window.saveTask=Ei;window.toggleTask=_i;window.closeTaskMenu=Ot;window.showTaskMenu=Si;window.copyTask=Ii;window.deleteTask=zi;window.renderTodoList=Pn;window.renderStudents=Nn;window.goProgram=Hi;window.openStudentModal=Yi;window.saveStudent=Ki;window.showInviteInfo=Hn;window.copyInvite=Fi;window.deleteStu=Gi;window.renderAppointments=Oe;window.renderCalDays=yt;window.selCalDay=qi;window.chCalMonth=Wi;window.renderApptList=Ft;window.openApptModal=Vi;window.saveAppt=Zi;window.deleteAppt=Qi;window.renderExams=Fe;window.openCommentModal=oo;window.saveComment=so;window.deleteExam=ro;window.renderMessages=Un;window.selectThread=lo;window.renderThreadHTML=Te;window.sendMsg=co;window.scrollMsgs=Ee;window.renderPortal=xt;window.stuToggleTask=po;window.renderSPortal=_e;window.stuToggleTask2=mo;window.chWeekS=go;window.openTaskDetail=Gt;window.toggleTaskDetail=yo;window.toggleDetailItem=xo;window.selectVideoSpeed=bo;window.saveTaskDetail=ho;window.renderSExams=Ut;window.openStudentExamModal=qn;window.openExamModal=ko;window.renderNetInputs=qt;window.saveExam=To;window.renderSMessages=Mt;window.initRealtime=Wt;window.destroyRealtime=Vt;window.renderDevDashboard=Vn;window.renderDevUsers=tt;window.openDevUserModal=_o;window.devDeleteUser=So;window.openPlanModal=Io;window.savePlan=zo;window.renderDevResources=nt;window.openPlaylistModal=Bo;window.fetchYouTubePlaylist=Mo;window.savePlaylist=Ao;window.openResourceModal=Do;window.saveResource=Co;window.devDeleteResource=Lo;window.renderDevFinance=bt;window.openPaymentModal=jo;window.savePayment=Po;window.openSubModal=Ro;window.saveSub=No;window.renderDevAnnounce=at;window.openAnnounceModal=Ho;window.saveAnnounce=Yo;window.toggleAnnounce=Ko;window.devDeleteAnnounce=Oo;window.renderDevTickets=Ge;window.updateTicketStatus=Wo;window.devDeleteTicket=Vo;window.selectDevTicket=Fo;window.sendDevReply=qo;window.openSupportTicket=Zo;window.openSupportChat=ht;window.closeSupportChat=Zn;window.startAISupportChat=Jo;window.startEminSupportChat=Xo;window.submitEminInitialMessage=Qo;window.sendSupportMessage=es;window.openSupportChatDirect=ht;window.checkCoachSubscription=Rt;window.showTrialExpiredScreen=ct;window.loadAnnouncements=Jn;window.saveStudentDev=Ms;window.showOnboarding=ea;window.showOnboardingWidget=as;window.showStudentWelcome=is;window.renderSProfil=na;window.saveStudentProfile=os;window.changePassword=ss;window.renderCoachProfile=aa;window.updateProfilePreview=Zt;window.switchPreviewTab=ls;window.nl2br=ia;window.saveCoachProfile=ds;window.renderDevMatches=Jt;window.updateMatchRequestStatus=cs;window.openSpeedModal=ps;window.saveAllSpeeds=ms;window.openStudentNotes=us;window.saveStudentNote=gs;window.openReportModal=vs;window.getReportDates=Xt;window.buildReportHTML=Qt;window.previewReport=fs;window.generatePDF=ys;window.openWeeklyPDFModal=bs;window.generateWeeklyPDF=hs;window.printWeeklyProgramWithNote=oa;window.generateMeetLink=ks;window.generateZoomLink=ws;window.copyToClipboard=$s;window.loadTheme=ra;window.applyAccent=la;window.setTheme=Ts;window.openThemePanel=Es;window.initAIChatForRole=da;window.toggleAIChat=_s;window.aiQuickSend=Ss;window.buildAIContext=Dt;window.addAIMessage=ye;window.sendAIMessage=ca;window.autoDetectModel=pa;window.callGeminiFallback=we;window.generateAICopilotDraft=Is;window.checkCopilotDraftEdited=zs;window.sendCopilotDraft=Bs;window.renderParentHome=ma;window.renderParentProgress=ua;window.renderParentAI=ga;window.applyResFilter=nn;window.updateCRFilter=As;window.buildCRContent=kt;window.renderCoachResources=it;window.switchCRTab=Ds;window.compileResourceStats=va;window.openResourceModalCoach=Cs;window.fetchYtPlaylistCoach=Ls;window.saveResourceCoach=js;window.deleteResourceCoach=Ps;window.importResourcesFromExcel=Rs;window.importStudentsFromExcel=Ns;window.getTestStatus=fa;window.openCoachTaskEdit=Hs;window.saveWeekAsTemplate=Ys;window.applyTemplateToWeek=Ks;window.downloadICS=eo;window.confirmApplyTemplate=Os;window.copyTaskToClipboard=Fs;window.pasteTaskFromClipboard=Gs;window.copyTaskToWholeWeek=Us;window.pasteTaskToWholeWeek=qs;window.sendWhatsAppReport=xs;window.toggleUserMenu=Oa;window.closeUserMenu=wn;window.renderAgenda=he;window.openAgendaApptModal=Rn;window.deleteAgendaAppt=Ni;window.agendaPrev=Di;window.agendaNext=Ci;window.agendaToday=Li;window.agendaSetFilter=ji;window.exportAgendaICS=Pi;window.openApptPopup=jn;window.handleApptDrop=Ri;window.openStudentKaynaklar=Ja;window.addStudentBook=Xa;window.editStudentBook=Qa;window.sbUpdatePct=_n;window.saveStudentBook=ei;window.deleteStudentBook=ti;async function Xs(){const e=document.getElementById("rpStuId").value,t=l.students.find(m=>m.id===e);if(!t)return;const n=document.getElementById("rpPeriod").value,{start:a,end:i}=Xt(),o=document.getElementById("rpNote").value.trim();let s="Performans Raporu";n==="weekly"?s="Haftalık Performans Raporu":n==="monthly"?s="Aylık Performans Raporu":s="Özel Dönem Performans Raporu";const r=`${s} (${a} - ${i})`,d=o||"Değerlendirme notu eklenmedi.";A(!0);const c=y.coachId||t.coachId,{error:p}=await b.from("reports").insert({student_id:e,coach_id:c,type:"performance",title:r,content:d,start_date:a,end_date:i});A(!1),p?h("Rapor kaydedilirken hata oluştu: "+p.message):(h("Rapor başarıyla geçmişe kaydedildi! ✓"),U("reportModal"))}async function ba(e){const t=l.students.find(s=>s.id===e);if(!t)return;l.activeStuId=e,currentTab!=="student-detail"&&ie("student-detail");const n=document.getElementById("view-student-detail");n.innerHTML=`<button class="back-link" onclick="openStudentDetail('${e}')">← ${g(t.name)}</button>
    <div style="padding:20px;color:var(--text-mid);font-size:13px">Raporlar yükleniyor…</div>`;const{data:a,error:i}=await b.from("reports").select("*").eq("student_id",e).order("created_at",{ascending:!1});if(i){n.innerHTML=`<button class="back-link" onclick="openStudentDetail('${e}')">← ${g(t.name)}</button>
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
    </div>`,n.innerHTML=o;return}o+='<div style="display:flex;flex-direction:column;gap:12px">',a.forEach(s=>{const r=s.type==="ai_copilot"?"🧠":"📄",d=s.type==="ai_copilot"?"AI Copilot Değerlendirmesi":"Performans Raporu",c=new Date(s.created_at).toLocaleDateString("tr-TR",{day:"numeric",month:"long",year:"numeric",hour:"2-digit",minute:"2-digit"});o+=`
      <div style="background:var(--surface);border:1px solid var(--border);border-radius:12px;padding:16px 20px;display:flex;justify-content:space-between;align-items:center;gap:12px;box-shadow:var(--shadow)">
        <div style="min-width:0;flex:1">
          <div style="display:flex;align-items:center;gap:8px;margin-bottom:6px">
            <span style="font-size:16px">${r}</span>
            <span style="font-size:11px;font-weight:800;text-transform:uppercase;color:var(--text-dim);letter-spacing:.5px">${d}</span>
          </div>
          <h4 style="font-size:14px;font-weight:700;color:var(--text);margin-bottom:4px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${g(s.title)}</h4>
          <div style="font-size:11px;color:var(--text-dim)">Oluşturulma: ${c}</div>
        </div>
        <div style="display:flex;gap:8px">
          <button class="btn btn-ghost btn-sm" onclick="viewArchivedReport('${s.id}')">Görüntüle</button>
          ${y.role==="coach"||y.role==="developer"?`<button class="btn btn-danger btn-sm" style="background:#ef4444;border-color:#ef4444;color:#fff" onclick="deleteArchivedReport('${s.id}', '${e}')">Sil</button>`:""}
        </div>
      </div>
    `}),o+="</div></div>",n.innerHTML=o}async function Qs(e){A(!0);const{data:t,error:n}=await b.from("reports").select("*").eq("id",e).single();if(A(!1),n||!t)return h("Rapor yüklenemedi: "+((n==null?void 0:n.message)||"Bulunamadı"));let a=document.getElementById("viewReportDetailModal");a||(a=document.createElement("div"),a.id="viewReportDetailModal",a.className="modal-bg",document.body.appendChild(a),a.addEventListener("click",s=>{s.target===a&&a.classList.remove("open")}));const i=t.type==="ai_copilot"?"🧠":"📄",o=new Date(t.created_at).toLocaleDateString("tr-TR",{day:"numeric",month:"long",year:"numeric",hour:"2-digit",minute:"2-digit"});a.innerHTML=`
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
  `,G("viewReportDetailModal")}function er(){const e=document.getElementById("viewReportDetailModal");if(!e)return;const t=e.querySelector("h3").textContent,n=e.querySelector("div div").textContent,a=e.querySelector('div[style*="pre-wrap"]').textContent,i=window.open("","_blank");i.document.write(`
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
  `),i.document.close()}async function tr(e,t){if(!await ae("Bu raporu kalıcı olarak silmek istediğinize emin misiniz?"))return;A(!0);const{error:a}=await b.from("reports").delete().eq("id",e);A(!1),a?h("Rapor silinirken hata oluştu: "+a.message):(h("Rapor başarıyla silindi ✓"),ba(t))}window.archivePerformanceReport=Xs;window.openPastReports=ba;window.viewArchivedReport=Qs;window.printActiveReport=er;window.deleteArchivedReport=tr;window.loadTheme&&window.loadTheme();window.renderNetInputs&&window.renderNetInputs();window.checkOAuthSession&&window.checkOAuthSession();const nr=new URLSearchParams(window.location.search);if(nr.get("sandbox")==="true")window.simOAuthLogin&&setTimeout(()=>{console.log("Sandbox auto-login triggered for demokoc..."),window.simOAuthLogin("demokoc")},300);else if(window.location.search.includes("sandbox")||window.location.hash==="#sandbox"){const e=document.getElementById("demoQuickWrap");e&&(e.style.display="flex"),window.showGoogleSimulator&&setTimeout(()=>window.showGoogleSimulator(),300)}"serviceWorker"in navigator&&window.addEventListener("load",()=>{navigator.serviceWorker.register("/sw.js").then(e=>{console.log("Service Worker başarıyla kaydedildi ✓",e.scope)}).catch(e=>{console.warn("Service Worker kaydı başarısız oldu:",e)})});window.addEventListener("hashchange",()=>{let e=window.location.hash.substring(1);if(document.getElementById("appShell").classList.contains("visible")&&e!==window.currentTab){if(!e){e={coach:"home",student:"portal",developer:"home",parent:"parent-home"}[window.session.role]||"portal",window.location.hash=e;return}document.getElementById("view-"+e)&&window.switchTab(e,!1)}});console.log("Rostrum Akademi App initialized successfully ✓");
