(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))a(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();const l={students:[],tasks:{},appointments:[],exams:[],messages:{},coachTodos:{},weekOffset:0,calMonth:new Date().getMonth(),calYear:new Date().getFullYear(),calSelDay:null,activeStuId:null,msgThread:null,workspace:null,studentSpeeds:[],konuHaftaSoru:[]},b={role:null,studentId:null,dbUser:null,coachId:null,childName:null};window.S=l;window.session=b;window._loginMode="email";window.STU_DEFAULT_PASS="Rostrum"+Math.floor(1e3+Math.random()*9e3);window.DAYS_TR=["Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi","Pazar"];window.MONTHS_TR=["Ocak","Şubat","Mart","Nisan","Mayıs","Haziran","Temmuz","Ağustos","Eylül","Ekim","Kasım","Aralık"];window.EXAM_DEFS={TYT:["Türkçe","Matematik","Fen","Sosyal"],"AYT-SAY":["Matematik","Fizik","Kimya","Biyoloji"],"AYT-EA":["Matematik","Edebiyat","Tarih","Coğrafya"],"AYT-SOZ":["Edebiyat","Tarih1","Tarih2","Coğrafya1","Coğrafya2","Felsefe","Din"]};window.EXAM_SORU={TYT:{Türkçe:40,Matematik:40,Fen:20,Sosyal:20},"AYT-SAY":{Matematik:40,Fizik:14,Kimya:13,Biyoloji:13},"AYT-EA":{Matematik:40,Edebiyat:24,Tarih:10,Coğrafya:6},"AYT-SOZ":{Edebiyat:24,Tarih1:10,Tarih2:11,Coğrafya1:6,Coğrafya2:11,Felsefe:12,Din:6}};window.EXAM_KONU_MAP={TYT_Türkçe:["Dil Bilgisi"],TYT_Matematik:["TYT Matematik","Geometri"],TYT_Fen:["TYT Fizik","TYT Kimya","TYT Biyoloji"],TYT_Sosyal:[],"AYT-SAY_Matematik":["AYT Matematik","Geometri"],"AYT-SAY_Fizik":["AYT Fizik"],"AYT-SAY_Kimya":["AYT Kimya"],"AYT-SAY_Biyoloji":["AYT Biyoloji"],"AYT-EA_Matematik":["AYT Matematik","Geometri"],"AYT-EA_Edebiyat":["Dil Bilgisi"]};window.SUBJECT_MAP={TYT:["Türkçe","Matematik","Geometri","Fizik","Kimya","Biyoloji","Tarih","Coğrafya","Felsefe","Din"],"AYT-SAY":["Matematik","Geometri","Fizik","Kimya","Biyoloji"],"AYT-EA":["Matematik","Geometri","Edebiyat","Tarih","Coğrafya","Felsefe"],"AYT-SOZ":["Edebiyat","Tarih1","Tarih2","Coğrafya1","Coğrafya2","Felsefe","Din"]};window.currentTab="";window._clipboardTask=null;window._editingTaskId=null;window._regRole=null;window._onbRole=null;window._oauthUser=null;const ra="https://imyhenrwmsmyikpollur.supabase.co",la="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlteWhlbnJ3bXNteWlrcG9sbHVyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODAxNDE3ODYsImV4cCI6MjA5NTcxNzc4Nn0._ySJ5ArD1GYthyitHjdyEjLaUhextIwEqpRoF5ScI34",x=supabase.createClient(ra,la);window.db=x;function ue(){var e;try{localStorage.setItem("ba_ui_"+(((e=b.dbUser)==null?void 0:e.id)||"x"),JSON.stringify({weekOffset:l.weekOffset,activeStuId:l.activeStuId,calMonth:l.calMonth,calYear:l.calYear}))}catch{}}function Fe(){ue()}function z(e){let t=document.getElementById("loadingOverlay");if(document.querySelectorAll(".btn-login, .btn-accent, .btn").forEach(a=>{e?(a.setAttribute("disabled","true"),a.style.opacity="0.6",a.style.pointerEvents="none"):(a.removeAttribute("disabled"),a.style.opacity="",a.style.pointerEvents="")}),e&&!t){if(t=document.createElement("div"),t.id="loadingOverlay",t.style.cssText="position:fixed;inset:0;background:rgba(15,14,12,.8);z-index:9999;display:flex;align-items:center;justify-content:center;flex-direction:column;gap:12px;backdrop-filter:blur(4px)",t.innerHTML='<div style="width:36px;height:36px;border:3px solid var(--border2);border-top-color:var(--accent);border-radius:50%;animation:spin .8s linear infinite"></div><div style="font-size:13px;color:var(--text-mid)">Yükleniyor...</div>',!document.getElementById("spinStyle")){const a=document.createElement("style");a.id="spinStyle",a.textContent="@keyframes spin{to{transform:rotate(360deg)}}",document.head.appendChild(a)}document.body.appendChild(t)}else!e&&t&&t.remove()}function g(e){return String(e||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Y(e){return e instanceof Date?e.toISOString().split("T")[0]:e}function U(e,t){const n=new Date(e);return n.setDate(n.getDate()+t),n}function ze(){return Y(new Date)}function It(e){return e>=20?"good":e>=12?"mid":"low"}function Ue(e){return{deneme:"📊 Deneme",soru:"📚 Soru",konu:"🎯 Konu",diger:"⭐ Diğer"}[e]||e}function N(e){document.getElementById(e).classList.add("open")}function K(e){document.getElementById(e).classList.remove("open")}function h(e){const t=document.getElementById("toast");t.textContent=e,t.classList.add("show"),setTimeout(()=>t.classList.remove("show"),2300)}document.addEventListener("click",e=>{e.target.classList.contains("modal-bg")&&e.target.id!=="trialExpiredModal"&&e.target.classList.remove("open")});document.addEventListener("keydown",e=>{e.key==="Escape"&&document.querySelectorAll(".modal-bg.open").forEach(t=>{t.id!=="trialExpiredModal"&&t.classList.remove("open")})});function V(e,t=0){const n=new Date,a=n.getDay(),o=(a===0?6:a-1)-t,s=new Date(n);return s.setDate(n.getDate()-(o+7)%7+e*7),s.setHours(0,0,0,0),s}function da(){const e=l.students.find(t=>t.id===l.activeStuId);return(e==null?void 0:e.weekStart)??0}async function Be(e){const t=await crypto.subtle.digest("SHA-256",new TextEncoder().encode(e));return[...new Uint8Array(t)].map(n=>n.toString(16).padStart(2,"0")).join("")}function Ee(e){return e?e.trim().toLowerCase().replace(/ç/g,"c").replace(/ğ/g,"g").replace(/ı/g,"i").replace(/ö/g,"o").replace(/ş/g,"s").replace(/ü/g,"u").replace(/i̇/g,"i").replace(/ı/g,"i").replace(/i/g,"i").replace(/\s+/g,"").replace(/\u0307/g,""):""}function ca(){if(!("Notification"in window)){console.log("Bu tarayıcı anlık bildirimleri desteklemiyor.");return}Notification.permission!=="granted"&&Notification.permission!=="denied"?Notification.requestPermission().then(e=>{e==="granted"&&h("Bildirim izinleri onaylandı ✓")}):Notification.permission==="granted"?h("Bildirim izinleri zaten açık ✓"):h("Bildirim izinleri tarayıcı ayarlarından engellenmiş.")}window.saveUI=ue;window.saveS=Fe;window.showLoading=z;window.esc=g;window.fmtDate=Y;window.addDays=U;window.todayStr=ze;window.netColor=It;window.typeLabel=Ue;window.om=N;window.cm=K;window.showToast=h;window.getWeekStart=V;window.getStudentWeekStart=da;window.sha256=Be;window.normalizeUsername=Ee;window.requestNotificationPermission=ca;async function pa(e,t={}){let n=x.from(e).select("*");Object.entries(t).forEach(([o,s])=>{n=n.eq(o,s)});const{data:a,error:i}=await n;return i&&console.error(e,i),a||[]}const ma=4*60*1e3;function _t(){return"ra_d_"+(b.coachId||b.studentId||"x")}function nn(){try{localStorage.removeItem(_t())}catch{}}function Jt(){try{localStorage.setItem(_t(),JSON.stringify({ts:Date.now(),students:l.students,tasks:l.tasks,appointments:l.appointments,exams:l.exams,messages:l.messages,coachTodos:l.coachTodos,studentSpeeds:l.studentSpeeds,workspace:l.workspace,konuHaftaSoru:l.konuHaftaSoru}))}catch{}}function ua(){try{const e=localStorage.getItem(_t());if(!e)return!1;const t=JSON.parse(e);return!t.ts||Date.now()-t.ts>ma?!1:(t.students&&(l.students=t.students),t.tasks&&(l.tasks=t.tasks),t.appointments&&(l.appointments=t.appointments),t.exams&&(l.exams=t.exams),t.messages&&(l.messages=t.messages),t.coachTodos&&(l.coachTodos=t.coachTodos),t.studentSpeeds&&(l.studentSpeeds=t.studentSpeeds),t.workspace&&(l.workspace=t.workspace),t.konuHaftaSoru&&(l.konuHaftaSoru=t.konuHaftaSoru),!0)}catch{return!1}}async function Xt(){var j;const e=b.coachId,t=b.role,n=t==="coach"||t==="developer"?x.from("workspaces").select("*").eq("coach_id",e).single():Promise.resolve({data:null});let a=x.from("users").select("*").eq("role","student");t==="student"?a=a.eq("id",b.studentId):(t==="coach"||t==="developer")&&(a=a.eq("coach_id",e));const i=a,o=new Date;o.setDate(o.getDate()-60);const s=o.toISOString().split("T")[0],r=new Date;r.setDate(r.getDate()-30);const d=r.toISOString().split("T")[0],c=t==="student"?x.from("tasks").select("*").eq("student_id",b.studentId).gte("date",s):t==="coach"||t==="developer"?x.from("tasks").select("*").eq("coach_id",e).gte("date",s):x.from("tasks").select("*").gte("date",s),p=t==="student"?x.from("appointments").select("*").eq("student_id",b.studentId).gte("date",d):t==="coach"||t==="developer"?x.from("appointments").select("*").eq("coach_id",e).gte("date",d):x.from("appointments").select("*").gte("date",d),m=t==="student"?x.from("exams").select("*").eq("student_id",b.studentId):t==="coach"||t==="developer"?x.from("exams").select("*").eq("coach_id",e):x.from("exams").select("*"),u=t==="student"?x.from("messages").select("*").eq("student_id",b.studentId).order("created_at",{ascending:!1}).limit(200):t==="coach"||t==="developer"?x.from("messages").select("*").eq("coach_id",e).order("created_at",{ascending:!1}).limit(200):x.from("messages").select("*").order("created_at",{ascending:!1}).limit(200),y=t==="coach"||t==="developer"?x.from("coach_todos").select("*").eq("coach_id",e):Promise.resolve({data:[]}),E=t==="student"?x.from("student_speeds").select("*").eq("student_id",b.studentId):t==="coach"||t==="developer"?x.from("student_speeds").select("*").eq("coach_id",e):x.from("student_speeds").select("*"),I=t==="coach"||t==="developer"?x.from("konu_mastery").select("*").eq("coach_id",e):t==="student"?x.from("konu_mastery").select("*").eq("student_id",b.studentId):Promise.resolve({data:[]}),v=t==="coach"||t==="developer"?x.from("konu_tekrar_log").select("*").eq("coach_id",e):t==="student"?x.from("konu_tekrar_log").select("*").eq("student_id",b.studentId):Promise.resolve({data:[]}),[f,k,S,_,A,$,B,T,D,C]=await Promise.all([n,i,c,p,m,u,y,E,I,v]);(t==="coach"||t==="developer")&&(l.workspace=f.data||null),l.students=(k.data||[]).map(w=>({id:w.id,name:w.full_name||w.username||"Öğrenci",target:w.target||"",color:w.color||"#4da6ff",progress:w.progress||0,weekStart:w.week_start||0,username:w.username,coachId:w.coach_id,yksArea:w.yks_area||"SAY"})),l.tasks={},(S.data||[]).forEach(w=>{const M=`${w.student_id}_${w.date}`;l.tasks[M]||(l.tasks[M]=[]),l.tasks[M].push({_id:w.id,type:w.type,exam:w.exam_type,subject:w.subject,duration:w.duration,note:w.note,done:w.done,student_note:w.student_note||"",student_result:w.student_result||null,task_items:w.task_items})}),l.appointments=(_.data||[]).map(w=>({id:w.id,studentId:w.student_id,date:w.date,time:w.time,duration:w.duration,type:w.type,note:w.note,meetLink:w.meet_link})),l.exams=(A.data||[]).map(w=>({id:w.id,studentId:w.student_id,name:w.name,date:w.date,type:w.exam_type,nets:w.nets||{},examDetails:w.exam_details||{},note:w.student_note,coachComment:w.coach_comment})),l.messages={},($.data||[]).forEach(w=>{l.messages[w.student_id]||(l.messages[w.student_id]=[]),l.messages[w.student_id].push({_id:w.id,from:w.from_role,text:w.text,read:w.read,time:new Date(w.created_at).toLocaleTimeString("tr-TR",{hour:"2-digit",minute:"2-digit"})})}),Object.keys(l.messages).forEach(w=>l.messages[w].sort((M,L)=>M._id>L._id?1:-1)),l.coachTodos={},(B.data||[]).forEach(w=>{l.coachTodos[w.date]||(l.coachTodos[w.date]=[]),l.coachTodos[w.date].push({_id:w.id,task:w.task,note:w.note,done:w.done})}),l.studentSpeeds=T.data||[],l.konuMastery={},(D.data||[]).forEach(w=>{l.konuMastery[w.student_id]||(l.konuMastery[w.student_id]={}),l.konuMastery[w.student_id][w.subject]||(l.konuMastery[w.student_id][w.subject]={}),l.konuMastery[w.student_id][w.subject][w.konu]=w}),l.konuTekrarLog={},(C.data||[]).forEach(w=>{l.konuTekrarLog[w.student_id]||(l.konuTekrarLog[w.student_id]={}),l.konuTekrarLog[w.student_id][w.subject]||(l.konuTekrarLog[w.student_id][w.subject]={}),l.konuTekrarLog[w.student_id][w.subject][w.konu]||(l.konuTekrarLog[w.student_id][w.subject][w.konu]={}),l.konuTekrarLog[w.student_id][w.subject][w.konu][w.period_start]=w});try{const w=JSON.parse(localStorage.getItem("ba_ui_"+((j=b.dbUser)==null?void 0:j.id))||"{}");w.weekOffset!==void 0&&(l.weekOffset=w.weekOffset),w.activeStuId&&(l.activeStuId=w.activeStuId),w.calMonth!==void 0&&(l.calMonth=w.calMonth,l.calYear=w.calYear)}catch{}}async function an(){if(ua()){Xt().then(()=>{if(Jt(),window.currentTab)try{window.switchTab(window.currentTab)}catch{}}).catch(t=>console.error("Arka plan yenileme hatası:",t));return}z(!0);try{await Xt(),Jt()}catch(t){console.error("loadAllData error",t)}z(!1)}window.dbQ=pa;window.loadAllData=an;window.invalidateCache=nn;let ke=!1;function ae(e){const t=document.getElementById("loginErr");t.textContent=e,t.style.display="block",setTimeout(()=>t.style.display="none",5e3)}function Xe(e){const t=document.getElementById("regErr");t.textContent=e,t.style.display="block",setTimeout(()=>t.style.display="none",5e3)}function on(e){document.getElementById("loginPanel").style.display=e==="login"?"block":"none",document.getElementById("registerPanel").style.display=e==="register"?"block":"none",document.getElementById("lmtLogin").classList.toggle("active",e==="login"),document.getElementById("lmtRegister").classList.toggle("active",e==="register")}function ga(e){window._loginMode=e,document.querySelectorAll("#loginTabs .login-tab").forEach((t,n)=>t.classList.toggle("active",n===(e==="email"?0:1))),document.getElementById("loginEmailField").style.display=e==="email"?"block":"none",document.getElementById("loginUserField").style.display=e==="username"?"block":"none"}function va(e){window._regRole=e,document.getElementById("rrbCoach").classList.toggle("sel",e==="coach"),document.getElementById("rrbStudent").classList.toggle("sel",e==="student")}function ya(e){window._onbRole=e,document.getElementById("onbRoleCoach").classList.toggle("sel",e==="coach"),document.getElementById("onbRoleStudent").classList.toggle("sel",e==="student")}async function fa(){if(window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1"||window.location.protocol==="file:"){rn();return}await sn()}async function sn(){zt(),z(!0);try{const{error:e}=await x.auth.signInWithOAuth({provider:"google",options:{redirectTo:window.location.origin+"/app.html",queryParams:{access_type:"offline",prompt:"select_account"}}});e&&(z(!0),console.warn("Google Auth failed:",e),ae("Google Girişi Başlatılamadı: "+e.message))}catch(e){z(!1),ae("Google Girişi Başlatılamadı: "+e.message)}}function rn(){document.getElementById("googleSimulatorModal").style.display="flex"}function zt(){document.getElementById("googleSimulatorModal").style.display="none"}async function xa(e){if(zt(),z(!0),e==="demokoc"){const{data:t,error:n}=await x.from("users").select("*").eq("username","demokoc").maybeSingle();if(n||!t){z(!1),ae("Demo koç profili bulunamadı!");return}await Se(t)}else if(e==="demoogrenci"){const{data:t,error:n}=await x.from("users").select("*").eq("username","demoogrenci").maybeSingle();if(n||!t){z(!1),ae("Demo öğrenci profili bulunamadı!");return}await Se(t)}else if(e==="new"){z(!1),document.getElementById("newUserOnboarding").style.display="flex";const t=Math.floor(1e3+Math.random()*9e3),n=`yeni.kullanici${t}@gmail.com`;document.getElementById("onbEmail").textContent=n,document.getElementById("onbName").value=`Yeni Kullanıcı ${t}`,window._oauthUser={id:`mock-google-id-${t}`,email:n,user_metadata:{full_name:`Yeni Kullanıcı ${t}`}}}}async function ln(){var t,n,a;if(window.location.hash.includes("type=recovery")){console.log("[Auth] Recovery session active, skipping checkOAuthSession");return}if(ke)return;ke=!0;let e=null;try{console.log("[Auth] 1/4 getSession...");const{data:{session:i}}=await x.auth.getSession();if(console.log("[Auth] 2/4 session:",((t=i==null?void 0:i.user)==null?void 0:t.email)||"yok"),!(i!=null&&i.user)){ke=!1;return}if((n=document.getElementById("appShell"))!=null&&n.classList.contains("visible")){ke=!1;return}z(!0),e=setTimeout(()=>{console.warn("[Auth] timeout — Supabase yanıt vermedi, spinner kapatılıyor"),ke=!1,z(!1)},1e4),console.log("[Auth] 3/4 profil yükleniyor...");const{data:o,error:s}=await x.from("users").select("*").eq("id",i.user.id).maybeSingle();console.log("[Auth] 4/4 profil:",o==null?void 0:o.role,(s==null?void 0:s.message)||""),clearTimeout(e);let r=!1;if(o){if(o.role==="coach"){const{data:d}=await x.from("workspaces").select("*").eq("coach_id",o.id).maybeSingle();(!d||!d.onboarding_done)&&(r=!0)}}else r=!0;o&&!r?await Se(o):(z(!1),document.getElementById("newUserOnboarding").style.display="flex",document.getElementById("onbEmail").textContent=i.user.email,document.getElementById("onbName").value=((a=i.user.user_metadata)==null?void 0:a.full_name)||"",window._oauthUser=i.user)}catch(i){clearTimeout(e),ke=!1,z(!1),console.warn("[checkOAuthSession]",i)}}async function ba(){const e=document.getElementById("onbName").value.trim();if(!e){document.getElementById("onbErr").textContent="Ad soyad zorunlu",document.getElementById("onbErr").style.display="block";return}if(!window._onbRole){document.getElementById("onbErr").textContent="Hesap türü seçin",document.getElementById("onbErr").style.display="block";return}document.getElementById("onbErr").style.display="none",z(!0);const t=window._oauthUser,n=e.toLowerCase().replace(/\s+/g,"_").replace(/[^a-z0-9_]/g,""),a={id:t.id,full_name:e,email:t.email,role:window._onbRole,username:n+"_"+Math.random().toString(36).slice(2,6),password_hash:"supabase_managed",color:window._onbRole==="coach"?"#f0a500":"#4da6ff",week_start:0,progress:0,target:""},{data:i,error:o}=await x.from("users").upsert(a).select().single();if(o){z(!1),document.getElementById("onbErr").textContent="Hata: "+o.message,document.getElementById("onbErr").style.display="block";return}document.getElementById("newUserOnboarding").style.display="none",await Se(i)}let W=0;function ha(e,t){document.getElementById("regBrandColor").value=e,t.parentElement.querySelectorAll("div").forEach(n=>n.style.outline="none"),t.style.outline="3px solid white"}function ka(){const e=document.getElementById("regErr0");if(e&&(e.style.display="none"),W===0){if(!window._regRole){e&&(e.textContent="Lütfen bir hesap türü seçin.",e.style.display="block");return}window._regRole==="student"?W=3:W=1}else if(W===1){if(!document.getElementById("regBrandName").value.trim()){alert("Lütfen akademi / koçluk adını girin.");return}W=2}else W===2&&(W=3);Bt(W)}function wa(){W===3?window._regRole==="student"?W=0:W=2:W===2?W=1:W===1&&(W=0),Bt(W)}function Bt(e){document.getElementById("regWizardStep0").style.display=e===0?"block":"none",document.getElementById("regWizardStepCoach1").style.display=e===1?"block":"none",document.getElementById("regWizardStepCoach2").style.display=e===2?"block":"none",document.getElementById("regWizardStepFinal").style.display=e===3?"block":"none"}async function $a(){const e=document.getElementById("regName").value.trim(),t=document.getElementById("regEmail").value.trim().toLowerCase(),n=document.getElementById("regPass").value;if(!e||!t||!n)return Xe("Tüm hesap bilgileri zorunludur");if(n.length<8)return Xe("Şifre en az 8 karakter olmalıdır");z(!0);try{let a={full_name:e,role:window._regRole};if(window._regRole==="coach"){const s=document.getElementById("regBrandName").value.trim(),r=document.getElementById("regBrandColor").value||"#f0a500",d=document.getElementById("regPhone").value.trim(),c=[...document.querySelectorAll("#regExamTypesWrap .ob-exam-sel input")].map(u=>u.value),p=c.length>0?c.join(","):"YKS",m=document.getElementById("regStudentCountRange").value||"1-5";a.ob_brand=s,a.ob_color=r,a.ob_phone=d,a.ob_examtypes=p,a.ob_studentcount=m}const{data:i,error:o}=await x.auth.signUp({email:t,password:n,options:{data:a}});if(o)throw o;if(i!=null&&i.user){z(!1),document.getElementById("regName").value="",document.getElementById("regEmail").value="",document.getElementById("regPass").value="",document.getElementById("regBrandName")&&(document.getElementById("regBrandName").value=""),document.getElementById("regPhone")&&(document.getElementById("regPhone").value="");const s=document.getElementById("regSuccess");s.textContent="Kayıt başarılı! E-posta adresinize bir doğrulama bağlantısı gönderildi. Lütfen doğrulama yaptıktan sonra giriş yapın.",s.style.display="block",setTimeout(()=>s.style.display="none",1e4),W=0,Bt(0),on("login")}}catch(a){z(!1),Xe("Kayıt Hatası: "+a.message)}}async function Ta(){const e=(document.getElementById("loginEmail").value||document.getElementById("loginUser").value||"").trim(),t=document.getElementById("loginPass").value;if(!e||!t)return ae("Kullanıcı adı ve şifre zorunlu");z(!0);const n=setTimeout(()=>{z(!1),ae("Bağlantı zaman aşımına uğradı. Supabase yanıt vermiyor — lütfen tekrar deneyin.")},15e3);try{let a=e;a.includes("@")?a=a.toLowerCase():a=Ee(e)+"@rostrumakademi.com";const{data:i,error:o}=await x.auth.signInWithPassword({email:a,password:t});if(!o&&(i!=null&&i.user)){const{data:s,error:r}=await x.from("users").select("*").eq("id",i.user.id).maybeSingle();if(r&&console.error("Profile fetch error:",r),s){clearTimeout(n),await Se(s);return}return z(!1),ae("Hesabınız veritabanında aktif değil.")}try{const s=Ee(e.includes("@")?e.split("@")[0]:e),r=await Be(t),{data:d}=await x.rpc("get_user_by_credentials",{p_username:s,p_password_hash:r}),c=Array.isArray(d)?d[0]:d;if(c){clearTimeout(n),await Se(c);return}}catch(s){console.warn("Fallback RPC error:",s)}return z(!1),ae(o?"Giriş başarısız: "+o.message:"Kullanıcı adı veya şifre hatalı.")}catch(a){return z(!1),console.error("[doLogin]",a),ae("Giriş hatası: "+a.message)}finally{clearTimeout(n)}}async function Se(e){var n,a,i,o,s;z(!1);const t=e.role==="coach"||e.role==="developer"?e.id:e.role==="student"||e.role==="parent"?e.coach_id:null;b.role=e.role,b.studentId=e.role==="student"?e.id:null,b.dbUser=e,b.coachId=t,document.getElementById("loginScreen").style.display="none",document.getElementById("appShell").classList.add("visible");try{if(await an(),(b.role==="coach"||b.role==="developer")&&!l.workspace){console.log("[Auth] Workspace not found, auto-creating from signup metadata...");const{data:{user:p}}=await x.auth.getUser();if(p){const m=((n=p.user_metadata)==null?void 0:n.ob_brand)||"Akademi",u=((a=p.user_metadata)==null?void 0:a.ob_color)||"#f0a500",y=((i=p.user_metadata)==null?void 0:i.ob_phone)||null,E=((o=p.user_metadata)==null?void 0:o.ob_examtypes)||"YKS",I=((s=p.user_metadata)==null?void 0:s.ob_studentcount)||"1-5",v={coach_id:e.id,brand_name:m,brand_color:u,phone:y,exam_types:E,student_count_range:I,onboarding_done:!1},{data:f,error:k}=await x.from("workspaces").upsert(v,{onConflict:"coach_id"}).select().maybeSingle();k?console.error("[finishLogin] Create workspace error:",k):f&&(l.workspace=f)}}if(b.role==="student"&&(l.activeStuId=e.id,b.studentId=e.id,l.students.find(p=>p.id===e.id)||l.students.push({id:e.id,name:e.full_name||e.username||"Öğrenci",target:e.target||"",color:e.color||"#4da6ff",progress:e.progress||0,weekStart:e.week_start||0,username:e.username,coachId:e.coach_id})),b.role==="parent"){const{data:p}=await x.from("users").select("*").eq("parent_id",e.id).single();p&&(l.activeStuId=p.id,b.studentId=p.id,b.childName=p.full_name||p.username)}if(window.setupShell(),document.getElementById("aiChatBubble").style.display="flex",(b.role==="coach"||b.role==="developer")&&(!l.workspace||!l.workspace.onboarding_done)){window.switchTab("home"),window.showOnboarding();return}const r=window.location.hash.substring(1),d={coach:"home",student:"portal",developer:"home",parent:"parent-home"}[b.role]||"portal",c=r&&document.getElementById("view-"+r)?r:d;setTimeout(()=>window.switchTab(c),50)}catch(r){z(!1),console.error("[doLogin] HATA:",r),ae("Hata: "+r.message),document.getElementById("loginScreen").style.display="flex",document.getElementById("appShell").classList.remove("visible")}}function Ea(){window._fcInstance&&(window._fcInstance.destroy(),window._fcInstance=null),window.destroyRealtime&&window.destroyRealtime(),x.auth.signOut().catch(()=>{}),nn(),b.role=null,b.studentId=null,b.dbUser=null,b.coachId=null,b.childName=null,l.workspace=null,document.getElementById("loginScreen").style.display="flex",document.getElementById("appShell").classList.remove("visible"),document.getElementById("aiChatBubble").style.display="none",document.getElementById("aiChatPanel").classList.remove("open"),document.getElementById("loginEmail")&&(document.getElementById("loginEmail").value=""),document.getElementById("loginUser")&&(document.getElementById("loginUser").value=""),document.getElementById("loginPass").value="",window.location.hash=""}function Sa(){window.om("forgotPassModal")}async function Ia(){const e=document.getElementById("forgotEmail").value.trim();if(!e)return;const t=document.getElementById("forgotMsg");try{const n=await fetch("/api/mailer",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({type:"password_reset",email:e})}),a=await n.json();if(!n.ok)throw new Error(a.error||"Sunucu hatası");t.style.display="block",t.style.background="var(--green-dim)",t.style.color="var(--green)",t.textContent="Sıfırlama linki e-posta adresinize gönderildi. Lütfen gelen kutunuzu kontrol edin."}catch(n){t.style.display="block",t.style.background="var(--red-dim)",t.style.color="var(--red)",t.textContent="Hata: "+(n.message||"Bir sorun oluştu.")}}async function _a(){const e=document.getElementById("newPasswordInput").value;if(!e||e.length<8){alert("Şifre en az 8 karakter olmalıdır.");return}z(!0);try{const{error:t}=await x.auth.updateUser({password:e});if(t)throw t;const n=await Be(e),{data:{user:a}}=await x.auth.getUser();a&&await x.from("users").update({password_hash:n}).eq("id",a.id),alert("Şifreniz başarıyla güncellendi! Lütfen yeni şifrenizle giriş yapın."),window.cm("resetPasswordModal"),await x.auth.signOut(),window.location.hash="",window.location.reload()}catch(t){alert("Şifre güncellenirken hata oluştu: "+t.message)}finally{z(!1)}}window.loginErr=ae;window.regErr=Xe;window.setAuthMode=on;window.setLoginMode=ga;window.setRegRole=va;window.setOnbRole=ya;window.loginWithGoogle=fa;window.triggerRealGoogleLogin=sn;window.showGoogleSimulator=rn;window.closeGoogleSimulator=zt;window.simOAuthLogin=xa;window.checkOAuthSession=ln;window.completeOnboarding=ba;window.doRegister=$a;window.doLogin=Ta;window.finishLogin=Se;window.doLogout=Ea;window.showForgotPassword=Sa;window.sendResetEmail=Ia;window.updateUserPassword=_a;window.nextRegWizardStep=ka;window.prevRegWizardStep=wa;window.setRegBrandColor=ha;x.auth.onAuthStateChange(async(e,t)=>{var a;if(e==="PASSWORD_RECOVERY"||window.location.hash.includes("type=recovery")){console.log("[Auth] Password recovery flow active, showing resetPasswordModal"),z(!1),window.om("resetPasswordModal");return}if(e==="SIGNED_IN"&&(t!=null&&t.user)){if((a=document.getElementById("appShell"))!=null&&a.classList.contains("visible"))return;await ln()}e==="SIGNED_OUT"&&(ke=!1,z(!1))});function Qt(){const e=document.getElementById("loginEmail"),t=document.getElementById("loginUser");e&&t&&(e.addEventListener("input",n=>{t.value=n.target.value}),t.addEventListener("input",n=>{e.value=n.target.value}))}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Qt):Qt();function Ne(e){if(!e||e<=0)return"0 sa";const t=Math.floor(e/60),n=e%60;return t>0&&n>0?`${t} sa ${n} dk`:t>0?`${t} sa`:`${n} dk`}window.formatMinToHours=Ne;function X(e){return new Promise(t=>{let n=document.getElementById("customConfirmModal");n||(n=document.createElement("div"),n.id="customConfirmModal",n.className="modal-bg",n.style.zIndex="999999",n.innerHTML=`
        <div class="modal" style="max-width:360px;text-align:center;padding:24px 20px;border-radius:16px;background:var(--surface);border:1px solid var(--border)">
          <div style="font-size:32px;margin-bottom:12px">⚠️</div>
          <div id="confirmMessage" style="font-size:14px;font-weight:700;color:var(--text);margin-bottom:20px;line-height:1.5"></div>
          <div style="display:flex;gap:10px;justify-content:center">
            <button class="btn btn-ghost" id="confirmCancelBtn" style="flex:1;justify-content:center;padding:10px;border-radius:10px">İptal</button>
            <button class="btn btn-accent" id="confirmOkBtn" style="flex:1;justify-content:center;padding:10px;border-radius:10px;background:#ef4444;border-color:#ef4444;color:#fff">Tamam</button>
          </div>
        </div>
      `,document.body.appendChild(n),n.addEventListener("click",r=>{r.target===n&&(n.classList.remove("open"),t(!1))})),n.querySelector("#confirmMessage").textContent=e;const a=n.querySelector("#confirmOkBtn"),i=n.querySelector("#confirmCancelBtn"),o=a.cloneNode(!0),s=i.cloneNode(!0);a.parentNode.replaceChild(o,a),i.parentNode.replaceChild(s,i),n.classList.add("open"),o.focus(),o.onclick=()=>{n.classList.remove("open"),t(!0)},s.onclick=()=>{n.classList.remove("open"),t(!1)}})}window.customConfirm=X;async function Mt(){const e=b.dbUser;if(e&&!(e.email==="ceylanemin1928@gmail.com"||e.email==="simkoc1@rostrumakademi.com"||window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1"||window.__testMode)){if(b.role==="coach"||b.role==="developer"){if((e.plan||"trial")==="trial"){const n=e.trial_ends_at?new Date(e.trial_ends_at):new Date(new Date(e.created_at).getTime()+12096e5);new Date>n&&at()}}else if((b.role==="student"||b.role==="parent")&&b.coachId)try{const{data:t}=await x.from("users").select("plan,trial_ends_at,created_at,email").eq("id",b.coachId).maybeSingle();if(t){if(t.email==="ceylanemin1928@gmail.com"||t.email==="simkoc1@rostrumakademi.com")return;if((t.plan||"trial")==="trial"){const a=t.trial_ends_at?new Date(t.trial_ends_at):new Date(new Date(t.created_at).getTime()+12096e5);new Date>a&&at()}}}catch(t){console.error("Error checking coach subscription:",t)}}}function at(){let e=document.getElementById("trialExpiredModal");e?e.classList.add("open"):(e=document.createElement("div"),e.id="trialExpiredModal",e.className="modal-bg open",e.style.zIndex="9999999",e.innerHTML=`
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
    `,document.body.appendChild(e))}window.openSupportChatDirect=ut;window.checkCoachSubscription=Mt;window.showTrialExpiredScreen=at;const $t=[{id:"home",lbl:"🏠",name:"Ana Sayfa"},{id:"students",lbl:"👤",name:"Öğrencilerim"},{id:"todolist",lbl:"📅",name:"Ajanda"},{id:"coach-resources",lbl:"📚",name:"Kaynaklarım"},{id:"coach-applications",lbl:"📩",name:"Başvurular"}],dn=[{id:"portal",lbl:"🏠",name:"Ana Sayfa"},{id:"sportal",lbl:"📋",name:"Programım"},{id:"sexams",lbl:"📊",name:"Denemeler"},{id:"smessages",lbl:"💬",name:"Koçuma Yaz"},{id:"sprofil",lbl:"👤",name:"Profilim"}],cn=[{id:"dev-dashboard",lbl:"🖥️",name:"Dev Panel"},{id:"dev-tickets",lbl:"🎫",name:"Destek"}],pn=[{id:"parent-home",lbl:"🏠",name:"Ana Sayfa"},{id:"parent-progress",lbl:"📊",name:"İlerleme"},{id:"parent-messages",lbl:"💬",name:"Koça Yaz"},{id:"parent-ai",lbl:"🤖",name:"AI Asistan"}];function za(){var e;(e=document.getElementById("mainSidebar"))==null||e.classList.toggle("open")}function Ba(){var e;(e=document.getElementById("tnUserMenu"))==null||e.classList.toggle("open")}function mn(){var e;(e=document.getElementById("tnUserMenu"))==null||e.classList.remove("open")}document.addEventListener("click",e=>{const t=document.getElementById("tnUserWrap");t&&!t.contains(e.target)&&mn()});function Ma(){var c;Mt();const e=b.role==="coach"?$t:b.role==="developer"?[...$t,...cn]:b.role==="parent"?pn:dn;document.getElementById("sidebarNav").innerHTML=e.map(p=>`
    <div class="tn-nav-item" id="sbi_${p.id}" onclick="switchTab('${p.id}')">
      <span>${p.lbl}</span>
      <span>${p.name}</span>
    </div>`).join(""),document.getElementById("mobileNav").innerHTML=e.slice(0,5).map(p=>`
    <button class="mnav-btn" id="mntab_${p.id}" onclick="switchTab('${p.id}')">${p.lbl}<span style="font-size:9px;display:block">${p.name}</span></button>`).join(""),document.getElementById("mainContent").innerHTML=[...e,{id:"student-detail"},{id:"profile"},{id:"settings"},{id:"coach-resources"},{id:"coach-applications"},{id:"coach-notes"},{id:"coach-profile"},{id:"messages"},{id:"todolist"},{id:"program"},{id:"appointments"},{id:"exams"}].map(p=>`<div class="view" id="view-${p.id}"></div>`).join("");const t=b.dbUser,n=b.role==="student"?l.students.find(p=>p.id===b.studentId):null,a=(t==null?void 0:t.full_name)||(n==null?void 0:n.name)||"",i=a.split(" ").map(p=>p[0]).join("").slice(0,2).toUpperCase(),o={coach:"#f0a500",student:(n==null?void 0:n.color)||"#4da6ff",developer:"#c084fc",parent:"#3ecf8e"},s={coach:"KOÇ",student:"ÖĞRENCİ",developer:"DEV",parent:"VELİ"};if(document.getElementById("sbAv").textContent=i,document.getElementById("sbAv").style.background=o[b.role]||"#888",document.getElementById("sbName").textContent=a,document.getElementById("sbRole").textContent=s[b.role]||b.role,(b.role==="coach"||b.role==="developer")&&((c=l.workspace)!=null&&c.brand_name)){const p=document.querySelector(".sb-logo-text");p&&(p.textContent=l.workspace.brand_name);const m=document.querySelector(".tn-logo .sb-logo-icon");m&&(m.textContent=l.workspace.brand_name.slice(0,1).toUpperCase())}const r=document.getElementById("sb-site-admin");r&&(r.style.display=b.role==="developer"?"flex":"none");const d=document.getElementById("tnCoachProfileItem");d&&(d.style.display=b.role==="coach"||b.role==="developer"?"flex":"none"),Jn(),setTimeout(Nn,600),(b.role==="coach"||b.role==="developer")&&x.from("match_requests").select("id",{count:"exact",head:!0}).eq("matched_coach_id",b.coachId).eq("status","pending").then(({count:p})=>{if(p>0){const m=document.getElementById("sbi_coach-applications");if(m&&!m.querySelector(".sb-badge")){const u=document.createElement("span");u.className="sb-badge",u.textContent=p,m.appendChild(u)}}})}function ee(e,t=!0){var c,p;if(!e)return;currentTab=e,t&&(window.location.hash=e),document.querySelectorAll(".tn-nav-item").forEach(m=>m.classList.remove("active"));const n=document.getElementById("sbi_"+e)||document.getElementById("sb-"+e);n&&n.classList.add("active"),document.querySelectorAll(".view").forEach(m=>m.classList.remove("active"));const a=document.getElementById("view-"+e);a&&a.classList.add("active");const o=[...$t,...dn,...cn,...pn,{id:"profile",name:"Profil"},{id:"settings",name:"Ayarlar"},{id:"student-detail",name:((c=l.students.find(m=>m.id===l.activeStuId))==null?void 0:c.name)||"Öğrenci"},{id:"program",name:"Program"},{id:"appointments",name:"Randevular"},{id:"exams",name:"Denemeler"}].find(m=>m.id===e),s=document.getElementById("tbarTitle");s&&(s.textContent=(o==null?void 0:o.name)||e);const r={home:un,students:Ge,messages:jn,"coach-applications":Vt,"coach-notes":oa,todolist:In,portal:pt,sportal:Me,sexams:Yt,smessages:Tt,sprofil:On,profile:fn,settings:xn,"student-detail":()=>{l.activeStuId?gn(l.activeStuId):ee("students")},program:()=>{l.activeStuId?At(l.activeStuId):ee("students")},exams:()=>{l.activeStuId?Pe():ee("students")},appointments:()=>{l.activeStuId?qe():ee("students")},"dev-dashboard":Yn,"dev-users":We,"dev-resources":Ve,"dev-finance":mt,"dev-announce":Ze,"dev-tickets":Re,"parent-home":ea,"parent-progress":ta,"parent-messages":Tt,"parent-ai":na,"coach-profile":Fn,"dev-matches":Ut,"coach-resources":Je};try{(p=r[e])==null||p.call(r)}catch(m){console.error("[switchTab] Render error for tab:",e,m),a&&(a.innerHTML=`<div style="padding:24px;color:var(--text)"><b>Hata Oluştu ⚠️</b><p style="color:var(--text-mid);margin-top:6px">${g(m.message)}</p><pre style="font-size:10px;color:var(--text-dim);white-space:pre-wrap;margin-top:8px">${g((m.stack||"").slice(0,400))}</pre></div>`)}e==="messages"||e==="smessages"?Nt():Kt();const d=document.getElementById("aiChatBubble");d&&(e==="dev-tickets"||e.startsWith("dev-")?d.style.display="none":(b.role==="student"||b.role==="coach"||b.role==="parent")&&(d.style.display="flex"))}function un(){var t,n;const e=document.getElementById("view-home");if(e)try{const a=new Date,i=["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"],o=["Ocak","Şubat","Mart","Nisan","Mayıs","Haziran","Temmuz","Ağustos","Eylül","Ekim","Kasım","Aralık"],s=Y(a);let r=0;Object.values(l.messages).forEach($=>{r+=$.filter(B=>B.from==="student"&&!B.read).length});const d=l.appointments.filter($=>$.date===s).sort(($,B)=>$.time.localeCompare(B.time)),c=[],p=V(0,0);(l.students||[]).forEach($=>{let B=0,T=0;for(let M=0;M<7;M++){const L=Y(U(p,M)),R=l.tasks[`${$.id}_${L}`]||[];B+=R.length,T+=R.filter(H=>H.done).length}const D=B>0?Math.round(T/B*100):0;B>0&&D<30&&c.push({studentId:$.id,studentName:$.name,color:$.color,type:"tasks",icon:"📋",title:"Düşük Görev",desc:`Bu haftaki görev tamamlama oranı <b>%${D}</b>'de kaldı (${T}/${B} görev tamamlandı).`});const C=(l.exams||[]).filter(M=>M.studentId===$.id).sort((M,L)=>new Date(L.date).getTime()-new Date(M.date).getTime()),j={};if(C.forEach(M=>{j[M.type]||(j[M.type]=[]),j[M.type].push(M)}),Object.entries(j).forEach(([M,L])=>{if(L.length>=2){const R=L[0],H=L[1],q=Object.values(R.nets||{}).reduce((J,ce)=>J+Number(ce||0),0),P=Object.values(H.nets||{}).reduce((J,ce)=>J+Number(ce||0),0),F=q-P;F<-5&&c.push({studentId:$.id,studentName:$.name,color:$.color,type:"exams",icon:"📉",title:`Net Düşüşü (${M})`,desc:`Son denemede <b>${q} net</b> yaptı. Önceki denemesine (${P} net) göre <b>${Math.abs(F).toFixed(1)} net düşüş</b>.`})}}),B===0&&c.push({studentId:$.id,studentName:$.name,color:$.color,type:"noplan",icon:"📭",title:"Program Yok",desc:"Bu hafta için henüz hiç görev eklenmemiş."}),B>0&&T===0){let M=!1;for(let L=0;L<3;L++){const R=Y(U(a,-L));if((l.tasks[`${$.id}_${R}`]||[]).length>0){M=!0;break}}M&&c.push({studentId:$.id,studentName:$.name,color:$.color,type:"inactive",icon:"💤",title:"3 Gündür Pasif",desc:"Son 3 gündür hiçbir görev tamamlanmadı. İletişime geç!"})}B>0&&T===B&&c.push({studentId:$.id,studentName:$.name,color:$.color,type:"perfect",icon:"🏆",title:"Harika Hafta!",desc:`Bu haftaki tüm ${B} görevi tamamladı! Tebrik et.`}),(l.studentSpeeds||[]).filter(M=>M.student_id===$.id).forEach(M=>{let L=120;M.exam_type==="TYT"?["Türkçe","Sosyal"].includes(M.subject)?L=100:["Matematik","Fen"].includes(M.subject)&&(L=130):M.exam_type&&M.exam_type.startsWith("AYT")&&(L=180),M.secs_per_question>L&&c.push({studentId:$.id,studentName:$.name,color:$.color,type:"speed",icon:"⚡",title:`Hız Aşımı (${M.exam_type} - ${M.subject})`,desc:`Soru çözüm hızı <b>${M.secs_per_question} sn/soru</b> (Limit: ${L} sn).`})})});let m="";if(c.length===0)m=`
      <div style="text-align:center;padding:16px;color:var(--text-dim);font-size:13px">
        ✅ Harika! Şu an için kritik bir performans düşüşü veya uyarı bulunmuyor.
      </div>`;else{const $={perfect:{badge:"#3ecf8e",badgeBg:"rgba(62,207,142,.12)",border:"rgba(62,207,142,.25)"},noplan:{badge:"#f0a500",badgeBg:"rgba(240,165,0,.1)",border:"rgba(240,165,0,.2)"},inactive:{badge:"#ff5c7a",badgeBg:"rgba(255,92,122,.08)",border:"rgba(255,92,122,.2)"},tasks:{badge:"#ff5c7a",badgeBg:"rgba(255,92,122,.08)",border:"rgba(255,92,122,.2)"},exams:{badge:"#ff5c7a",badgeBg:"rgba(255,92,122,.08)",border:"rgba(255,92,122,.2)"},speed:{badge:"#f0a500",badgeBg:"rgba(240,165,0,.1)",border:"rgba(240,165,0,.2)"}};m=c.map(B=>{const T=$[B.type]||$.tasks;return`<div style="cursor:pointer;padding:10px 12px;margin-bottom:8px;border-radius:8px;background:${T.badgeBg};border:1px solid ${T.border};display:flex;align-items:center;gap:10px;transition:opacity .15s" onclick="openStudentDetail('${B.studentId}')" onmouseover="this.style.opacity='.85'" onmouseout="this.style.opacity='1'">
        <div style="font-size:18px;width:32px;height:32px;border-radius:8px;background:rgba(255,255,255,.06);display:flex;align-items:center;justify-content:center;flex-shrink:0">${B.icon}</div>
        <div style="flex:1;min-width:0">
          <div style="display:flex;justify-content:space-between;align-items:center;gap:8px;margin-bottom:2px">
            <span style="font-size:13px;font-weight:700">${g(B.studentName)}</span>
            <span style="font-size:10px;font-weight:700;color:${T.badge};white-space:nowrap">${B.title}</span>
          </div>
          <div style="font-size:11px;color:var(--text-mid);line-height:1.4">${B.desc}</div>
        </div>
      </div>`}).join("")}const u=a.getHours(),y=u<6?"İyi geceler":u<12?"Günaydın":u<18?"İyi günler":"İyi akşamlar",E=`${String(u).padStart(2,"0")}:${String(a.getMinutes()).padStart(2,"0")}`,I=d.find($=>$.time>=E),v=new Date(2026,5,14),f=Math.max(0,Math.ceil((v-a)/(1e3*60*60*24))),k=V(0,0);let S=0,_=0;l.students.forEach($=>{for(let B=0;B<7;B++){const T=l.tasks[`${$.id}_${Y(U(k,B))}`]||[];S+=T.length,_+=T.filter(D=>D.done).length}});const A=S>0?Math.round(_/S*100):0;e.innerHTML=`
    <!-- HERO -->
    <div class="home-hero">
      <div class="home-hero-left">
        <div class="home-hero-greeting">${y},</div>
        <div class="home-hero-name">${g(((n=(t=b.dbUser)==null?void 0:t.full_name)==null?void 0:n.split(" ")[0])||"Koç")} 👋</div>
        <div class="home-hero-date">${i[a.getDay()]}, ${a.getDate()} ${o[a.getMonth()]} ${a.getFullYear()}</div>
      </div>
      <div class="home-hero-right">
        <div class="home-yks-badge">
          <div class="home-yks-num">${f}</div>
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
          <span class="hsv2-trend" style="color:var(--blue)">${I?I.time:"—"}</span>
        </div>
        <div class="hsv2-val" style="color:var(--blue)">${d.length}</div>
        <div class="hsv2-lbl">Bugün Randevu</div>
        <div class="hsv2-sub">${I?`Sıradaki: ${I.time}`:"Randevu tamamlandı"}</div>
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
          <span class="hsv2-icon-wrap ${A>=70?"hsv2-green":A>=40?"hsv2-amber":"hsv2-red"}">📋</span>
          <span class="hsv2-trend" style="color:${A>=70?"var(--green)":A>=40?"var(--accent)":"var(--red)"}">%${A}</span>
        </div>
        <div class="hsv2-val" style="color:${A>=70?"var(--green)":A>=40?"var(--accent)":"var(--red)"}">${_}<span style="font-size:18px;font-weight:500;color:var(--text-dim)">/${S}</span></div>
        <div class="hsv2-lbl">Haftalık Görev</div>
        <div class="hsv2-progress"><div class="hsv2-bar" style="width:${A}%;background:${A>=70?"var(--green)":A>=40?"var(--accent)":"var(--red)"}"></div></div>
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
          ${d.map($=>{const B=l.students.find(P=>P.id===$.studentId),T=$.time<E,[D,C]=$.time.split(":").map(Number),j=D*60+C,[w,M]=E.split(":").map(Number),L=w*60+M,R=j-L,H=R>=-($.duration||60)&&R<=15,q=H&&$.meet_link?`<a href="${g($.meet_link)}" target="_blank" style="display:inline-flex;align-items:center;gap:5px;padding:5px 12px;border-radius:8px;background:${R<=0?"var(--red)":"var(--accent)"};color:${R<=0?"white":"#0f0e0c"};font-size:11px;font-weight:800;text-decoration:none;animation:${R<=0?"pulse 1.5s infinite":"none"};white-space:nowrap;flex-shrink:0">${R<=0?"🔴 Ders Sürüyor":"🟡 Derse Gir"}</a>`:"";return`<div class="hsc-appt-row ${T&&!H?"hsc-appt-past":""}">
              <div class="hsc-appt-time">${$.time}</div>
              <div class="hsc-appt-bar" style="background:${(B==null?void 0:B.color)||"var(--accent)"}"></div>
              <div style="flex:1;min-width:0">
                <div class="hsc-appt-name">${g((B==null?void 0:B.name)||"?")}</div>
                <div class="hsc-appt-meta">${g($.type)} · ${$.duration} dk${!H&&$.meet_link?` · <a href="${g($.meet_link)}" target="_blank" style="color:var(--blue);text-decoration:none">${$.meet_link.includes("zoom")?"Zoom":"Meet"} →</a>`:""}</div>
              </div>
              ${q||(T?'<span class="hsc-appt-done">✓</span>':"")}
            </div>`}).join("")}
        </div>
      </div>
    </div>

    <!-- HIZLI ERİŞİM -->
    <div style="display:flex;gap:8px;max-width:900px;margin:0 auto 4px;justify-content:center">
      ${[{tab:"messages",icon:"💬",label:"Mesajlar",sub:r>0?r+" okunmamış":"Temiz"},{tab:"coach-notes",icon:"📝",label:"Notlarım",sub:"Kişisel notlar"},{tab:"todolist",icon:"📅",label:"Ajanda",sub:"Tüm randevular"},{tab:"coach-applications",icon:"📩",label:"Başvurular",sub:"Eşleşme talepleri"}].map(({tab:$,icon:B,label:T,sub:D})=>`
        <div onclick="switchTab('${$}')" style="background:var(--surface);border:1px solid var(--border);border-radius:10px;padding:9px 16px;cursor:pointer;display:flex;align-items:center;gap:8px;white-space:nowrap;transition:border-color .15s;flex:1;justify-content:center" onmouseover="this.style.borderColor='var(--accent)'" onmouseout="this.style.borderColor='var(--border)'">
          <span style="font-size:16px">${B}</span>
          <div><div style="font-size:12px;font-weight:700">${T}</div><div style="font-size:10px;color:var(--text-dim)">${D}</div></div>
        </div>`).join("")}
    </div>`}catch(a){console.error("[renderHome] HATA:",a),e.innerHTML=`<div style='padding:24px;color:var(--text)'><b>İyi günler 👋</b><p style='color:var(--text-mid);margin-top:6px'>Hata: ${g(a.message)}</p></div>`}}function Ge(){const e=document.getElementById("view-students"),t=V(0,0),n={};l.students.forEach(s=>{let r=0,d=0,c=0,p=0;for(let m=0;m<7;m++)(l.tasks[`${s.id}_${Y(U(t,m))}`]||[]).forEach(y=>{r++,c+=Number(y.duration||0),y.done&&(d++,p+=Number(y.duration||0))});n[s.id]={total:r,done:d,totalMin:c,doneMin:p}});const a=l.students.length,i=l.students.filter(s=>{const r=n[s.id];return r&&r.total>0}).length,o=l.students.filter(s=>{const r=n[s.id];return r&&r.total>0&&r.done===r.total}).length;e.innerHTML=`<div style="max-width:640px;margin:0 auto">
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
      `:l.students.map(s=>{const r=n[s.id]||{total:0,done:0},d=r.total>0?Math.round(r.done/r.total*100):0,c=d>=80?"var(--green)":d>=40?"var(--accent)":"var(--red)",p=r.total>0&&r.done===r.total,m=l.exams.filter(y=>y.studentId===s.id).sort((y,E)=>E.date.localeCompare(y.date))[0],u=m?Object.values(m.nets||{}).reduce((y,E)=>y+E,0).toFixed(1):null;return`<div class="stu-row" id="sturow_${s.id}" onclick="openStudentDetail('${s.id}')" style="padding:12px 16px;align-items:center;gap:12px;border-radius:10px">
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
  </div>`}function Aa(){const e=document.getElementById("stuSearchInput").value.trim().toLowerCase(),t=document.getElementById("stuSearchNoResults");let n=0;l.students.forEach(a=>{const i=document.getElementById("sturow_"+a.id);if(i){const o=a.name.toLowerCase().includes(e);i.style.display=o?"flex":"none",o&&n++}}),t&&(t.style.display=e&&n===0?"block":"none")}function gn(e){if(!l.students.find(p=>p.id===e))return;l.activeStuId=e;const t=l.students.find(p=>p.id===l.activeStuId),n=V(0,t.weekStart||0);let a=0,i=0,o=0;for(let p=0;p<7;p++){const m=l.tasks[`${t.id}_${Y(U(n,p))}`]||[];a+=m.length,i+=m.filter(u=>u.done).length,o+=m.reduce((u,y)=>u+Number(y.duration||0),0)}const s=a>0?Math.round(i/a*100):0,r=s>=80?"var(--green)":s>=50?"var(--accent)":"var(--red)",d=document.getElementById("view-student-detail");d.innerHTML=`
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
      ${[{label:"Program",icon:"📋",fn:`openStudentProgram('${t.id}')`},{label:"Denemeler",icon:"📊",fn:`openStudentExams('${t.id}')`},{label:"Randevular",icon:"📅",fn:`openStudentAppointments('${t.id}')`},{label:"Notlar",icon:"📝",fn:`openStudentNotes('${t.id}')`},{label:"Kaynaklar",icon:"📖",fn:`openStudentKaynaklar('${t.id}')`},{label:"Konu Haritası",icon:"🗺️",fn:`openKonuHaritasi('${t.id}')`},{label:"Hız",icon:"⚡",fn:`openSpeedModal('${t.id}')`},{label:"Rapor",icon:"📄",fn:`openReportModal('${t.id}')`}].map(p=>`<button onclick="${p.fn}" style="display:flex;align-items:center;gap:6px;padding:14px 18px;background:none;border:none;border-bottom:2px solid transparent;font-size:13px;font-weight:600;color:var(--text-mid);cursor:pointer;white-space:nowrap;font-family:inherit;transition:all .15s" onmouseover="this.style.color='var(--text)';this.style.borderBottomColor='var(--border2)'" onmouseout="this.style.color='var(--text-mid)';this.style.borderBottomColor='transparent'">${p.icon} ${p.label}</button>`).join("")}
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
    </div>`,currentTab!=="student-detail"&&ee("student-detail");const c=document.getElementById("tbarTitle");c&&(c.textContent=t.name)}const Ae=[{stars:0,label:"Başlanmadı",color:"#6b7280",bg:"rgba(107,114,128,.08)",border:"rgba(107,114,128,.2)"},{stars:1,label:"Anlamadım",color:"#ef4444",bg:"rgba(239,68,68,.08)",border:"rgba(239,68,68,.2)"},{stars:2,label:"Temel Zorluk",color:"#f97316",bg:"rgba(249,115,22,.08)",border:"rgba(249,115,22,.2)"},{stars:3,label:"Temel OK",color:"#eab308",bg:"rgba(234,179,8,.08)",border:"rgba(234,179,8,.2)"},{stars:4,label:"Orta Seviye",color:"#84cc16",bg:"rgba(132,204,22,.08)",border:"rgba(132,204,22,.2)"},{stars:5,label:"İleri Seviye",color:"#22c55e",bg:"rgba(34,197,94,.08)",border:"rgba(34,197,94,.2)"},{stars:6,label:"Uzman",color:"#10b981",bg:"rgba(16,185,129,.08)",border:"rgba(16,185,129,.2)"},{stars:7,label:"Tekrar Dışı (TD)",color:"#3b82f6",bg:"rgba(59,130,246,.1)",border:"rgba(59,130,246,.3)"}];function vn(e){const t=new Date(e),n=t.getDate(),a=n<=10?1:n<=20?11:21;return`${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,"0")}-${String(a).padStart(2,"0")}`}function Da(e=6){const t=[],n=new Date;let a=new Date(n);for(let i=0;i<e;i++){const o=vn(a);t.find(c=>c.start===o)||t.unshift({start:o,label:Ca(o)});const[s,r,d]=o.split("-").map(Number);if(d===21?a=new Date(s,r-1,11):d===11?a=new Date(s,r-1,1):a=new Date(s,r-2,21),t.length>=e)break}return t.slice(-e)}function Ca(e){const[t,n,a]=e.split("-").map(Number),i=["Oca","Şub","Mar","Nis","May","Haz","Tem","Ağu","Eyl","Eki","Kas","Ara"],o=a===1?10:a===11?20:new Date(t,n,0).getDate();return`${a}-${o} ${i[n-1]}`}const en={SAY:["Dil Bilgisi","TYT Matematik","AYT Matematik","Geometri","TYT Fizik","AYT Fizik","TYT Kimya","AYT Kimya","TYT Biyoloji","AYT Biyoloji"],EA:["Dil Bilgisi","TYT Matematik","AYT Matematik","Geometri","AYT Edebiyat","Tarih (TYT-AYT)","Coğrafya (TYT-AYT)","Felsefe Grubu & Din"],SOZ:["Dil Bilgisi","TYT Matematik","Geometri","AYT Edebiyat","Tarih (TYT-AYT)","Coğrafya (TYT-AYT)","Felsefe Grubu & Din"],DIL:["Dil Bilgisi","TYT Matematik","Geometri","YDT İngilizce"]};async function La(e){const t=l.students.find(v=>v.id===e);if(!t)return;const n=document.getElementById("view-student-detail");n.innerHTML=`<button class="back-link" onclick="openStudentDetail('${e}')">← ${g(t.name)}</button><div style="padding:20px;color:var(--text-dim);font-size:13px">Yükleniyor…</div>`;const a=b.role==="coach"||b.role==="developer",i=t.yksArea||"SAY",o=en[i]||en.SAY;let s=o[0],r="mastery";function d(v,f){var k,S;return((S=(k=l.konuMastery[e])==null?void 0:k[v])==null?void 0:S[f])||null}function c(v,f){var k,S;return((S=(k=l.konuTekrarLog[e])==null?void 0:k[v])==null?void 0:S[f])||{}}async function p(v,f,k,S){const _=d(v,f),A=new Date().toISOString(),$=S||(k>=7?"td":k>0?"active":"not_started"),B={student_id:e,coach_id:b.coachId,subject:v,konu:f,stars:k,status:$,updated_at:A,...$==="active"&&!(_!=null&&_.ka_date)?{ka_date:A}:{},...$==="td"&&!(_!=null&&_.td_date)?{td_date:A}:{},...$==="active"&&(_==null?void 0:_.status)==="td"?{td_date:null}:{}},{data:T,error:D}=await x.from("konu_mastery").upsert(B,{onConflict:"student_id,subject,konu"}).select().single();if(D){h("Hata: "+D.message);return}return l.konuMastery[e]||(l.konuMastery[e]={}),l.konuMastery[e][v]||(l.konuMastery[e][v]={}),l.konuMastery[e][v][f]=T,T}async function m(v,f,k,S){const _=new Date().toISOString(),A={student_id:e,coach_id:b.coachId,subject:v,konu:f,period_start:k,review_count:S,updated_at:_},{data:$,error:B}=await x.from("konu_tekrar_log").upsert(A,{onConflict:"student_id,subject,konu,period_start"}).select().single();if(B){h("Hata: "+B.message);return}return l.konuTekrarLog[e]||(l.konuTekrarLog[e]={}),l.konuTekrarLog[e][v]||(l.konuTekrarLog[e][v]={}),l.konuTekrarLog[e][v][f]||(l.konuTekrarLog[e][v][f]={}),l.konuTekrarLog[e][v][f][k]=$,$}function u(v){const f=Ke[v]||[],k=f.map((T,D)=>{const C=d(v,T),j=(C==null?void 0:C.stars)||0,w=(C==null?void 0:C.status)||"not_started",M=Ae[j],L=w==="td",R=D%2===0?"var(--surface)":"var(--surface2)",H=c(v,T),q=Object.values(H).reduce((he,ve)=>he+(ve.review_count||0),0),P=C!=null&&C.last_review_date?new Date(C.last_review_date).toLocaleDateString("tr-TR",{day:"2-digit",month:"short"}):"—",F=a?Array.from({length:7},(he,ve)=>{const se=ve+1,pe=se<=j,yt=v.replace(/'/g,"\\'"),ft=T.replace(/'/g,"\\'");return`<span class="km-star${pe?" km-star-on":""}" data-stars="${se}" 
          onclick="window._kmSetStars('${yt}','${ft}',${se})"
          title="${Ae[se].label}"
          style="cursor:pointer;font-size:16px;line-height:1;transition:transform .1s;display:inline-block"
          onmouseover="this.style.transform='scale(1.25)'" onmouseout="this.style.transform='scale(1)'"
        >${pe?"⭐":"☆"}</span>`}).join(""):Array.from({length:7},(he,ve)=>`<span style="font-size:14px;opacity:${ve<j?1:.25}">${ve<j?"⭐":"☆"}</span>`).join("");let J="";return L?J='<span style="font-size:9px;font-weight:800;color:#3b82f6;background:rgba(59,130,246,.12);border:1px solid rgba(59,130,246,.3);border-radius:4px;padding:1px 5px;margin-left:4px">TD</span>':C!=null&&C.ka_date&&(J='<span style="font-size:9px;font-weight:700;color:#10b981;background:rgba(16,185,129,.1);border:1px solid rgba(16,185,129,.2);border-radius:4px;padding:1px 5px;margin-left:4px">KA✓</span>'),`<tr id="${"km_"+btoa(encodeURIComponent(v+"|"+T)).replace(/[^a-zA-Z0-9]/g,"")}" style="background:${M.bg};border-bottom:1px solid ${M.border};transition:background .3s">
        <td style="padding:10px 14px;font-size:12px;font-weight:600;color:var(--text);min-width:200px;position:sticky;left:0;z-index:1;background:${R};border-right:1px solid var(--border)">
          ${g(T)}${J}
        </td>
        <td style="padding:8px 12px;white-space:nowrap">
          ${F}
        </td>
        <td style="padding:8px 10px;font-size:11px;font-weight:700;color:${M.color};white-space:nowrap">
          ${j>0?M.label:'<span style="color:var(--text-dim)">—</span>'}
        </td>
        <td style="padding:8px 10px;text-align:center;font-size:11px;color:var(--text-mid);white-space:nowrap">
          ${q>0?`<b style="color:var(--text)">${q}×</b>`:"—"}
        </td>
        <td style="padding:8px 10px;text-align:center;font-size:11px;color:var(--text-dim);white-space:nowrap">${P}</td>
        ${a?`<td style="padding:8px 8px;text-align:center;white-space:nowrap">
          <button onclick="window._kmToggleKA('${v.replace(/'/g,"\\'")}','${T.replace(/'/g,"\\'")}')" 
            style="font-size:10px;padding:3px 7px;border-radius:5px;border:1px solid var(--border);background:var(--surface2);color:var(--text-mid);cursor:pointer;margin-right:4px" 
            title="Konu Anlatımı tamamlandı">KA</button>
          <button onclick="window._kmToggleTD('${v.replace(/'/g,"\\'")}','${T.replace(/'/g,"\\'")}')" 
            style="font-size:10px;padding:3px 7px;border-radius:5px;border:1px solid ${L?"#3b82f6":"var(--border)"};background:${L?"rgba(59,130,246,.15)":"var(--surface2)"};color:${L?"#3b82f6":"var(--text-mid)"};cursor:pointer;font-weight:${L?"800":"400"}" 
            title="Tekrar Dışı">TD</button>
        </td>`:""}
      </tr>`}).join(""),S=f.map(T=>d(v,T)),_=Array(8).fill(0);S.forEach(T=>_[(T==null?void 0:T.stars)||0]++);const A=S.filter(T=>(T==null?void 0:T.status)==="td").length,$=S.filter(T=>(T==null?void 0:T.status)==="active").length;return`<div style="display:flex;gap:12px;flex-wrap:wrap;padding:12px 16px;background:var(--surface2);border-bottom:1px solid var(--border);align-items:center">
      <span style="font-size:11px;color:var(--text-dim)"><b style="color:var(--text)">${f.length}</b> konu</span>
      <span style="font-size:11px;color:var(--text-dim)"><b style="color:#3b82f6">${A}</b> TD</span>
      <span style="font-size:11px;color:var(--text-dim)"><b style="color:#22c55e">${$}</b> aktif</span>
      <span style="font-size:11px;color:var(--text-dim)"><b style="color:#6b7280">${_[0]}</b> başlanmadı</span>
      <div style="flex:1;height:6px;background:var(--surface3);border-radius:99px;overflow:hidden;min-width:80px;max-width:200px">
        <div style="height:100%;width:${f.length>0?Math.round(A/f.length*100):0}%;background:#3b82f6;border-radius:99px"></div>
      </div>
      <span style="font-size:11px;color:#3b82f6;font-weight:700">${f.length>0?Math.round(A/f.length*100):0}% TD</span>
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
        <tbody>${k}</tbody>
      </table>
    </div>`}function y(v){const f=Ke[v]||[],k=Da(6),S=vn(new Date),_=`<tr style="background:var(--surface2)">
      <th style="padding:8px 14px;text-align:left;font-size:10px;font-weight:800;color:var(--text-dim);border-right:1px solid var(--border);position:sticky;left:0;z-index:2;background:var(--surface2);white-space:nowrap;min-width:200px">KONU</th>
      <th style="padding:8px 8px;text-align:left;font-size:10px;font-weight:800;color:var(--text-dim);white-space:nowrap;min-width:60px">⭐</th>
      ${k.map($=>`<th style="padding:8px 10px;text-align:center;font-size:10px;font-weight:800;color:${$.start===S?"var(--accent)":"var(--text-dim)"};background:${$.start===S?"var(--accent-dim)":"var(--surface2)"};white-space:nowrap;min-width:100px;border-left:1px solid var(--border)">${$.label}</th>`).join("")}
      <th style="padding:8px 10px;text-align:center;font-size:10px;font-weight:800;color:var(--text-dim);white-space:nowrap;border-left:2px solid var(--border)">TOPLAM</th>
    </tr>`,A=f.map(($,B)=>{const T=d(v,$),D=(T==null?void 0:T.stars)||0,j=((T==null?void 0:T.status)||"not_started")==="td",w=Ae[D],M=B%2===0?"var(--surface)":"var(--surface2)",L=c(v,$);let R=0;const H=k.map(P=>{const F=L[P.start],J=(F==null?void 0:F.review_count)||0;R+=J;const ce=P.start===S;if(a){const he=Array.from({length:6},(ve,se)=>{const pe=se<J,yt=v.replace(/'/g,"\\'"),ft=$.replace(/'/g,"\\'");return`<span class="kt-box${pe?" kt-box-on":""}"
              onclick="window._ktToggleBox('${yt}','${ft}','${P.start}',${se+1})"
              style="display:inline-block;width:14px;height:14px;border-radius:3px;border:1.5px solid ${pe?w.color:"var(--border2)"};background:${pe?w.bg:"transparent"};cursor:pointer;transition:all .15s;margin:1px"
              title="${se+1}. tekrar"
            ></span>`}).join("");return`<td style="padding:6px 10px;border-left:1px solid var(--border);background:${ce?"var(--accent-dim)":M};text-align:center">${he}</td>`}else{const he=Array.from({length:6},(ve,se)=>{const pe=se<J;return`<span style="display:inline-block;width:12px;height:12px;border-radius:3px;border:1.5px solid ${pe?w.color:"var(--border2)"};background:${pe?w.bg:"transparent"};margin:1px"></span>`}).join("");return`<td style="padding:6px 10px;border-left:1px solid var(--border);background:${ce?"var(--accent-dim)":M};text-align:center">${he}</td>`}}).join(""),q=j?'<span style="font-size:9px;font-weight:800;color:#3b82f6;background:rgba(59,130,246,.12);border:1px solid rgba(59,130,246,.3);border-radius:4px;padding:1px 5px;margin-left:4px">TD</span>':"";return`<tr style="background:${M}">
        <td style="padding:8px 14px;font-size:12px;font-weight:600;color:var(--text);border-right:1px solid var(--border);position:sticky;left:0;z-index:1;background:${M};white-space:nowrap">
          ${g($)}${q}
        </td>
        <td style="padding:8px 8px;white-space:nowrap">
          <span style="font-size:11px">${"⭐".repeat(Math.max(0,D))}</span>
        </td>
        ${H}
        <td style="padding:8px 10px;text-align:center;font-size:12px;font-weight:800;color:${R>0?w.color:"var(--text-dim)"};border-left:2px solid var(--border)">${R||0}</td>
      </tr>`}).join("");return`<div style="overflow-x:auto"><table style="border-collapse:collapse;width:max-content;min-width:100%"><thead>${_}</thead><tbody>${A}</tbody></table></div>`}window._kmSetStars=async function(v,f,k){const S=d(v,f),_=(S==null?void 0:S.status)==="td"&&k<7?"active":null;await p(v,f,k,_);const A="km_"+btoa(encodeURIComponent(v+"|"+f)).replace(/[^a-zA-Z0-9]/g,"");if(document.getElementById(A)){const B=u(v);document.getElementById("khTable").innerHTML=B}h(`${f}: ${Ae[k].label} ✓`)},window._kmToggleKA=async function(v,f){const k=d(v,f),S=new Date().toISOString(),_=!!(k!=null&&k.ka_date),A={student_id:e,coach_id:b.coachId,subject:v,konu:f,stars:(k==null?void 0:k.stars)||1,status:(k==null?void 0:k.status)||"active",ka_date:_?null:S,updated_at:S},{data:$,error:B}=await x.from("konu_mastery").upsert(A,{onConflict:"student_id,subject,konu"}).select().single();if(B){h("Hata: "+B.message);return}l.konuMastery[e]||(l.konuMastery[e]={}),l.konuMastery[e][v]||(l.konuMastery[e][v]={}),l.konuMastery[e][v][f]=$,document.getElementById("khTable").innerHTML=u(v),h(_?"KA tarihi kaldırıldı":"KA ✓ tamamlandı olarak işaretlendi")},window._kmToggleTD=async function(v,f){const k=d(v,f),S=(k==null?void 0:k.status)==="td",_=S?(k==null?void 0:k.stars)>=7?5:k==null?void 0:k.stars:7;await p(v,f,_,S?"active":"td"),document.getElementById("khTable").innerHTML=r==="mastery"?u(v):y(v),h(S?`${f} tekrar listesine geri döndü`:`${f} → TD ✓`)},window._ktToggleBox=async function(v,f,k,S){const A=c(v,f)[k],B=((A==null?void 0:A.review_count)||0)>=S?S-1:S;if(await m(v,f,k,B),B>0){const T=d(v,f),D=new Date().toISOString(),C={student_id:e,coach_id:b.coachId,subject:v,konu:f,stars:(T==null?void 0:T.stars)||0,status:(T==null?void 0:T.status)||"active",last_review_date:D,review_count:((T==null?void 0:T.review_count)||0)+1,updated_at:D},{data:j}=await x.from("konu_mastery").upsert(C,{onConflict:"student_id,subject,konu"}).select().single();j&&(l.konuMastery[e]||(l.konuMastery[e]={}),l.konuMastery[e][v]||(l.konuMastery[e][v]={}),l.konuMastery[e][v][f]=j)}document.getElementById("khTable").innerHTML=y(v)};function E(){const v=window._khActiveSub||s;document.getElementById("khTable").innerHTML=r==="mastery"?u(v):y(v)}const I=o.map(v=>`<button class="kh-tab" onclick="window._khActiveSub='${v}';document.querySelectorAll('.kh-tab').forEach(b=>{b.style.color='var(--text-mid)';b.style.borderBottom='2px solid transparent';b.style.fontWeight='600'});this.style.color='var(--accent)';this.style.borderBottom='2px solid var(--accent)';this.style.fontWeight='700';window._khRefresh()"
      style="padding:10px 16px;border:none;border-bottom:2px solid ${v===s?"var(--accent)":"transparent"};background:none;font-size:12px;font-weight:${v===s?"700":"600"};color:${v===s?"var(--accent)":"var(--text-mid)"};cursor:pointer;white-space:nowrap;font-family:inherit;transition:all .15s">${v}</button>`).join("");window._khActiveSub=s,window._khRefresh=E,n.innerHTML=`
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
        ${Ae.slice(1).map(v=>`
          <div style="display:flex;align-items:center;gap:6px;font-size:11px">
            <span style="font-weight:800;color:${v.color}">⭐${v.stars}</span>
            <span style="color:var(--text-mid)">${v.label}</span>
          </div>`).join('<span style="color:var(--border2)">·</span>')}
      </div>
    </details>

    <div style="background:var(--surface);border:1px solid var(--border);border-radius:12px;overflow:hidden;box-shadow:var(--shadow)">
      <div style="display:flex;border-bottom:1px solid var(--border);overflow-x:auto;padding:0 4px">${I}</div>
      <div id="khTable" style="overflow-x:auto;max-height:calc(100vh - 310px);overflow-y:auto">${u(s)}</div>
    </div>`,window._kmSwitchView=function(v){r=v;const f=document.getElementById("kmViewMastery"),k=document.getElementById("kmViewTekrar");v==="mastery"?(f.style.background="var(--accent)",f.style.color="#fff",f.style.fontWeight="700",k.style.background="var(--surface)",k.style.color="var(--text-mid)",k.style.fontWeight="600"):(k.style.background="var(--accent)",k.style.color="#fff",k.style.fontWeight="700",f.style.background="var(--surface)",f.style.color="var(--text-mid)",f.style.fontWeight="600"),window._khRefresh()}}function At(e){var i,o;l.activeStuId=e;const t=document.getElementById("view-program"),n=((i=l.students.find(s=>s.id===l.activeStuId))==null?void 0:i.name)||"";t.innerHTML=`<button class="back-link" onclick="switchTab('student-detail')">← ${n}</button>`,t.innerHTML+=document.createElement("div").innerHTML,currentTab!=="program"&&ee("program");const a=document.getElementById("tbarTitle");a&&(a.textContent=(((o=l.students.find(s=>s.id===l.activeStuId))==null?void 0:o.name)||"")+" · Program"),G()}function ja(e){var n;l.activeStuId=e,currentTab!=="exams"&&ee("exams");const t=document.getElementById("tbarTitle");t&&(t.textContent=(((n=l.students.find(a=>a.id===l.activeStuId))==null?void 0:n.name)||"")+" · Denemeler"),Pe()}function Pa(e){var n;l.activeStuId=e,currentTab!=="appointments"&&ee("appointments");const t=document.getElementById("tbarTitle");t&&(t.textContent=(((n=l.students.find(a=>a.id===l.activeStuId))==null?void 0:n.name)||"")+" · Randevular"),qe()}let de={};async function Ra(e){const t=l.students.find(a=>a.id===e);if(!t)return;l.activeStuId=e,currentTab!=="student-detail"&&ee("student-detail");const n=document.getElementById("view-student-detail");if(n.innerHTML=`<button class="back-link" onclick="openStudentDetail('${e}')">← ${g(t.name)}</button>
    <div style="padding:20px;color:var(--text-dim);font-size:13px">Yükleniyor…</div>`,!de[e]){const{data:a}=await x.from("student_books").select("*").eq("student_id",e).order("created_at",{ascending:!0});de[e]=a||[]}Dt(e)}function Dt(e){const t=l.students.find(p=>p.id===e),n=de[e]||[],a=document.getElementById("view-student-detail"),i=b.role==="coach"||b.role==="developer",o=n.reduce((p,m)=>p+m.total_tests,0),s=n.reduce((p,m)=>p+m.completed_tests,0),r=o>0?Math.round(s/o*100):0,d=r>=75?"var(--green)":r>=40?"var(--accent)":"var(--red)",c=n.length?n.map(p=>{const m=p.total_tests>0?Math.min(100,Math.round(p.completed_tests/p.total_tests*100)):0,u=m>=75?"var(--green)":m>=40?"var(--accent)":"var(--red)";return`<div style="background:var(--surface);border:1px solid var(--border);border-radius:12px;padding:14px 16px;margin-bottom:10px">
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
    ${c}`}function Ya(e){document.getElementById("sbModalTitle").textContent="Kaynak Ekle",document.getElementById("sbId").value="",document.getElementById("sbStuId").value=e,document.getElementById("sbName").value="",document.getElementById("sbTotal").value="0",document.getElementById("sbCompleted").value="0",document.getElementById("sbPctPreview").innerHTML="",N("sbModal")}function Ha(e,t){const n=(de[e]||[]).find(a=>a.id===t);n&&(document.getElementById("sbModalTitle").textContent="Kaynağı Düzenle",document.getElementById("sbId").value=t,document.getElementById("sbStuId").value=e,document.getElementById("sbName").value=n.name,document.getElementById("sbTotal").value=n.total_tests,document.getElementById("sbCompleted").value=n.completed_tests,yn(),N("sbModal"))}function yn(){var o,s;const e=parseInt((o=document.getElementById("sbTotal"))==null?void 0:o.value)||0,t=parseInt((s=document.getElementById("sbCompleted"))==null?void 0:s.value)||0,n=document.getElementById("sbPctPreview");if(!n||!e){n&&(n.innerHTML="");return}const a=Math.min(100,Math.round(t/e*100)),i=a>=75?"var(--green)":a>=40?"var(--accent)":"var(--red)";n.innerHTML=`<div style="display:flex;align-items:center;gap:10px">
    <div style="flex:1;height:8px;background:var(--surface3);border-radius:99px;overflow:hidden">
      <div style="height:100%;width:${a}%;background:${i};border-radius:99px;transition:width .3s"></div>
    </div>
    <span style="font-size:13px;font-weight:800;color:${i}">%${a}</span>
  </div>`}async function Na(){const e=document.getElementById("sbName").value.trim();if(!e)return h("Kaynak adı girin!");const t=Math.max(0,parseInt(document.getElementById("sbTotal").value)||0),n=Math.min(t,Math.max(0,parseInt(document.getElementById("sbCompleted").value)||0)),a=document.getElementById("sbStuId").value,i=document.getElementById("sbId").value,o={name:e,total_tests:t,completed_tests:n};if(i){const{error:s}=await x.from("student_books").update(o).eq("id",i);if(s)return h("Hata: "+s.message);const r=(de[a]||[]).find(d=>d.id===i);r&&Object.assign(r,o),h("Güncellendi ✓")}else{const{data:s,error:r}=await x.from("student_books").insert({...o,student_id:a,coach_id:b.coachId}).select().single();if(r)return h("Hata: "+r.message);de[a]||(de[a]=[]),de[a].push(s),h("Kaynak eklendi ✓")}K("sbModal"),Dt(a)}async function Ka(e,t){if(!await X("Bu kaynağı silmek istiyor musunuz?"))return;const{error:n}=await x.from("student_books").delete().eq("id",t);if(n)return h("Hata: "+n.message);de[e]=(de[e]||[]).filter(a=>a.id!==t),Dt(e),h("Silindi ✓")}function fn(){var i,o;const e=document.getElementById("view-profile"),t=b.dbUser,n=((t==null?void 0:t.full_name)||"?").split(" ").map(s=>s[0]).join("").slice(0,2).toUpperCase(),a=b.role==="coach"?"Koç":b.role==="developer"?"Developer":"Öğrenci";e.innerHTML=`
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
        ${b.role==="coach"||b.role==="developer"?`<div>
          <label style="font-size:11px;font-weight:700;color:var(--text-dim);text-transform:uppercase;letter-spacing:.5px;display:block;margin-bottom:6px">Akademi Adı</label>
          <input id="pf_brand" value="${g(((o=l.workspace)==null?void 0:o.brand_name)||"")}" style="width:100%;padding:9px 12px;background:var(--surface2);border:1.5px solid var(--border);border-radius:8px;font-size:13px;font-family:inherit;color:var(--text);outline:none;box-sizing:border-box" onfocus="this.style.borderColor='var(--accent)'" onblur="this.style.borderColor='var(--border)'">
        </div>`:""}
        <div>
          <label style="font-size:11px;font-weight:700;color:var(--text-dim);text-transform:uppercase;letter-spacing:.5px;display:block;margin-bottom:6px">Yeni Şifre <span style="font-weight:400;text-transform:none">(boş bırakılırsa değişmez)</span></label>
          <input type="password" id="pf_pass" placeholder="••••••••" style="width:100%;padding:9px 12px;background:var(--surface2);border:1.5px solid var(--border);border-radius:8px;font-size:13px;font-family:inherit;color:var(--text);outline:none;box-sizing:border-box" onfocus="this.style.borderColor='var(--accent)'" onblur="this.style.borderColor='var(--border)'">
        </div>
        <button class="btn btn-accent" onclick="saveProfile()" style="align-self:flex-start;padding:9px 20px">Kaydet</button>
      </div>
    </div>`}async function Oa(){var i,o;const e=document.getElementById("pf_name").value.trim(),t=document.getElementById("pf_pass").value,n=(o=(i=document.getElementById("pf_brand"))==null?void 0:i.value)==null?void 0:o.trim();if(!e)return h("Ad boş olamaz!");const a={full_name:e};t&&(a.password_hash=await Be(t)),await x.from("users").update(a).eq("id",b.dbUser.id),n&&(b.role==="coach"||b.role==="developer")&&(await x.from("workspaces").update({brand_name:n}).eq("coach_id",b.coachId),l.workspace={...l.workspace||{},brand_name:n},document.querySelector(".sb-logo-text").textContent=n),b.dbUser={...b.dbUser,full_name:e},document.getElementById("sbName").textContent=e,h("Profil kaydedildi ✓")}function xn(){var n;const e=document.getElementById("view-settings"),t=document.documentElement.getAttribute("data-theme")==="dark";e.innerHTML=`
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
            ${Wn.map(a=>`<div class="ac-dot" onclick="applyAccent('${a.val}','${a.dim}')" style="background:${a.val}" title="${a.name}"></div>`).join("")}
          </div>
        </div>
      </div>
      
      <div class="settings-block" style="margin-top:20px">
        <div class="settings-block-title">Yapay Zeka (AI) Ayarları</div>
        <div class="setting-item" style="flex-direction:column;align-items:flex-start;gap:10px">
          <div>
            <div class="setting-item-lbl">Gemini API Anahtarı</div>
            <div class="setting-item-sub" style="font-size:11px;line-height:1.5;margin-top:2px">Yerel olarak çalıştığınızda AI Asistanı kullanabilmek için kendi API anahtarınızı girmelisiniz. Bu anahtar tarayıcınızda güvenle saklanır.</div>
          </div>
          <div style="display:flex;gap:8px;width:100%">
            <input type="text" id="geminiApiKeyInput" value="${g(localStorage.getItem("gemini_api_key")||"")}" placeholder="AIzaSy..." style="flex:1;background:var(--surface2);border:1px solid var(--border);border-radius:8px;padding:8px 12px;color:var(--text);font-size:12px;outline:none" autocomplete="off">
            <button class="btn btn-accent btn-sm" onclick="saveGeminiKey()">Kaydet</button>
          </div>
          <div style="font-size:11px;color:var(--text-dim)">
            API anahtarınız yok mu? <a href="https://aistudio.google.com/" target="_blank" style="color:var(--blue);text-decoration:none">Google AI Studio'dan ücretsiz alın →</a>
          </div>
        </div>
      </div>

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

      <div class="settings-block" style="margin-top:20px">
        <div class="settings-block-title">Hesap</div>
        <div class="setting-item">
          <div><div class="setting-item-lbl">Kullanıcı Adı</div><div class="setting-item-sub">${g(((n=b.dbUser)==null?void 0:n.username)||"")}</div></div>
          <button class="btn btn-ghost btn-sm" onclick="switchTab('profile')">Düzenle</button>
        </div>
        <div class="setting-item">
          <div><div class="setting-item-lbl">Oturumu Kapat</div></div>
          <button class="btn btn-danger btn-sm" onclick="doLogout()">Çıkış</button>
        </div>
      </div>
    </div>`}function Fa(){const e=document.getElementById("geminiApiKeyInput").value.trim();e?(localStorage.setItem("gemini_api_key",e),h("API Anahtarı kaydedildi ✓")):(localStorage.removeItem("gemini_api_key"),h("API Anahtarı kaldırıldı."))}let Te="";function G(){const e=document.getElementById("view-program"),t=l.students.find(r=>r.id===l.activeStuId),n=(t==null?void 0:t.weekStart)??0,a=V(l.weekOffset,n),i=U(a,6),o=ze();l.students.map(r=>`<option value="${r.id}" ${r.id===l.activeStuId?"selected":""}>${g(r.name)}</option>`).join("");let s="";for(let r=0;r<7;r++){const d=U(a,r),c=Y(d),p=c===o,m=`${l.activeStuId}_${c}`,u=l.tasks[m]||[],y=u.reduce((k,S)=>k+Number(S.duration),0),E=u.reduce((k,S)=>k+(S.done?Number(S.duration):0),0),I=DAYS_TR[(n+r)%7],v=u.map((k,S)=>`
      <div class="task-card task-${k.type} ${k.done?"done":""}" onclick="openTaskDetail('${c}',${S},'coach')" style="cursor:pointer">
        <div class="tc-check ${k.done?"on":""}" onclick="event.stopPropagation();toggleTask('${c}',${S})"></div>
        <div class="tc-body">
          <div class="tc-type">${Ue(k.type)}${k.exam?" · "+k.exam:""}</div>
          <div class="tc-subject">${g(k.subject)}</div>
          <div class="tc-meta">${k.duration} dk</div>
        </div>
        <button class="tc-menu-btn" onclick="event.stopPropagation();showTaskMenu('${c}',${S},this)">⋯</button>
      </div>`).join(""),f=["Pzt","Sal","Çar","Per","Cum","Cmt","Paz"][(n+r)%7];s+=`<div class="day-col ${p?"today":""}">
      <div class="day-hd">
        <div>
          <div class="day-name-lbl">${f}</div>
          <div class="day-num">${d.getDate()}</div>
        </div>
        <div style="display:flex;flex-direction:column;align-items:flex-end;gap:4px">
          <span class="day-badge" style="font-size:8.5px">${Ne(E)} / ${Ne(y)}</span>
          ${_clipboardTask?`<button class="btn btn-ghost btn-xs" onclick="pasteTaskFromClipboard('${c}')" style="font-size:9px;color:var(--accent);border-color:rgba(240,165,0,.3);background:var(--accent-dim);padding:2px 6px">Yapıştır</button>`:""}
        </div>
      </div>
      <div class="day-tasks-list">${v||""}</div>
      <button class="add-day-btn" onclick="openTaskModal('${c}','${I}')" ${l.activeStuId?"":"disabled"}>+ Görev Ekle</button>
    </div>`}e.innerHTML=`
    <button class="back-link" onclick="switchTab('student-detail')">← ${t?g(t.name):"Öğrenci"}</button>
    <div class="card prog-banner">
      <div class="prog-avatar" style="background:${(t==null?void 0:t.color)||"#555"};color:#0f0e0c">${t?t.name[0]:"?"}</div>
      <div class="prog-meta">
        <h2>${t?g(t.name):"Öğrenci Seçin"}</h2>
        <p>${t?g(t.target):"Program görüntülemek için öğrenci seçin"}</p>
      </div>
      <div class="prog-actions">
        <button class="btn btn-ghost btn-sm" onclick="saveWeekAsTemplate()" style="display:none">Şablon Kaydet</button>
        <button class="btn btn-ghost btn-sm" onclick="applyTemplateToWeek()" style="display:none">Şablon Uygula</button>
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
      ${_clipboardTask?'<button class="btn btn-accent btn-sm" onclick="pasteTaskToWholeWeek()" style="font-size:12px;padding:6px 12px;gap:6px">📋 Kopyalananı Tüm Haftaya Yapıştır</button>':""}
    </div>
    <div class="week-grid">${s}</div>`}function Ua(e){l.activeStuId=e||null,Fe(),G()}function Ga(e){l.weekOffset+=e,Fe(),G()}function qa(){l.weekOffset=0,Fe(),G()}let te=[];function Wa(){if(!l.activeStuId)return h("Önce öğrenci seçin");const e=l.students.find(i=>i.id===l.activeStuId),t=(e==null?void 0:e.weekStart)??0,n=V(l.weekOffset,t);te=[];let a="";for(let i=0;i<7;i++){const o=U(n,i),s=Y(o);DAYS_TR[(t+i)%7];const r=(l.tasks[`${l.activeStuId}_${s}`]||[]).length>0,d=["Pzt","Sal","Çar","Per","Cum","Cmt","Paz"][(t+i)%7];a+=`<button class="day-sel-btn" id="dsbtn_${i}" data-ds="${s}" onclick="toggleDaySel(${i},'${s}')">
      <div>${d}</div>
      <div style="font-size:14px;font-weight:800">${o.getDate()}</div>
      ${r?'<div style="font-size:9px;color:var(--accent);margin-top:2px">●</div>':'<div style="font-size:9px;opacity:0">·</div>'}
    </button>`}document.getElementById("daySelectorGrid").innerHTML=a,N("clearWeekModal")}function Va(e,t){const n=document.getElementById("dsbtn_"+e),a=te.indexOf(t);a===-1?(te.push(t),n.classList.add("sel")):(te.splice(a,1),n.classList.remove("sel"))}function Za(){const e=document.querySelectorAll(".day-sel-btn");te.length===7?(te=[],e.forEach(t=>t.classList.remove("sel"))):(te=[],e.forEach((t,n)=>{te.push(t.dataset.ds),t.classList.add("sel")}))}async function Ja(){if(!te.length)return h("Önce gün seçin");if(await X(`${te.length} günün görevleri silinsin mi?`)){for(const e of te)await x.from("tasks").delete().eq("student_id",l.activeStuId).eq("date",e),delete l.tasks[`${l.activeStuId}_${e}`];ue(),K("clearWeekModal"),G(),h(`${te.length} gün temizlendi`)}}const Ke={"Dil Bilgisi":["Sözcükte Anlam","Cümlede Anlam","Ses Bilgisi","Yazım Kuralları","Noktalama İşaretleri","Sözcükte Yapı","İsim","Sıfat","Zamir","Zarf","İsim-Sıfat Tamlamaları","Edat-Bağlaç-Ünlem","Fiiller – Fiil Çekimleri – Fiillerde Zaman Kayması","Ek Fiil – Ek Eylem","Fiilde Çatı","Fiilimsiler","Cümlenin Öğeleri","Cümle Türleri","Anlatım Bozuklukları"],"TYT Matematik":["Sayılar ve Basamak","Bölünebilme","EBOB-EKOK","Kesirler ve Ondalıklı Sayılar","Mutlak Değer","Üslü Sayılar","Köklü Sayılar","Oran-Orantı","Problemler – Yaş-İşçi-Havuz","Problemler – Kar-Zarar-Yüzde","Problemler – Hareket","Problemler – Karışım","Birinci Dereceden Denklemler","Kümeler","Mantık","Fonksiyonlar","Polinomlar","İkinci Dereceden Denklemler","Permütasyon-Kombinasyon","Olasılık","İstatistik ve Veri"],"AYT Matematik":["Polinomlar","Karmaşık Sayılar","Logaritma","Trigonometri","Diziler","Limit ve Süreklilik","Türev","İntegral","Matrisler ve Determinant"],Geometri:["Doğruda Açı","Üçgende Açı ve Kenar","Üçgende Alan","Üçgende Benzerlik","Özel Üçgenler (Pisagor)","Dörtgenler","Dörtgende Alan","Çember ve Daire","Çemberde Açı","Analitik Geometri – Nokta ve Doğru","Analitik Geometri – Çember","Katı Cisimler","Uzay Geometrisi"],"TYT Fizik":["Fizik Bilimine Giriş","Madde ve Özellikleri","Basınç","Kaldırma Kuvveti","Isı Sıcaklık Genleşme","Hareket","Newton Hareket Yasaları","İş Güç Enerji","Elektrik","Manyetizma","Optik","Dalgalar"],"AYT Fizik":["Vektörler","Bağıl ve Bileşik Hareket","Newton'ın Hareket Yasaları","Sabit İvmeli Hareket","Tek Boyutta Atışlar","İki Boyutta Atışlar","Enerji","İtme ve Momentum","Tork ve Denge","Kütle ve Ağırlık Merkezi","Basit Makineler","Elektriksel Kuvvet ve Elektrik Alan","Elektriksel Potansiyel Enerji","Düzgün Elektrik Alan ve Sığa","Manyetik Alan","Manyetik Kuvvet","Manyetik İndüksiyon","Alternatif Akım ve Transformatörler","Düzgün Çembersel Hareket","Eylemsizlik Momenti ve Açısal Momentum","Genel Çekim Yasası ve Kepler","Basit Harmonik Hareket","Dalga Mekaniği","Elektromanyetik Dalgalar","Atom Modelleri ve Atomun Yapısı","Büyük Patlama ve Atom Altı Parçacıklar","Radyoaktivite","Özel Görelilik Teorisi","Modern Fizik"],"TYT Kimya":["Kimyanın Sembolik Dili","Atom Modelleri","Periyodik Cetvel","Etkileşimler","Maddenin Halleri","Kimyanın Temel Kanunları","Mol Kavramı","Kimyasal Hesaplamalar","Kimyasal Tepkime Türleri","Karışımlar","Asitler ve Bazlar","Tuzlar","Doğa ve Kimya","Kimya Her Yerde"],"AYT Kimya":["Modern Atom","Gazlar","Sıvı Çözeltiler ve Çözünürlük","Tepkimelerde Hız","Tepkimelerde Denge","Sulu Çözelti Dengeleri","Kimya ve Elektrik","Karbon Kimyası","Organik Bileşikler","Enerji Kaynakları"],"TYT Biyoloji":["Canlıların Temel Bileşenleri","İnorganik Bileşikler","Karbohidratlar","Lipitler (Yağlar)","Proteinler","Hormonlar","Vitaminler","Enzimler","Nükleik Asitler","DNA-RNA","ATP Metabolizma","Hücre Organelleri","Hücre Zarı Madde Geçişleri","Ekoloji","Güncel Çevre Sorunları","Canlıların Sınıflandırılması","Hücre Bölünmeleri","Mitoz","Mayoz","Kalıtım"],"AYT Biyoloji":["Sinir Sistemi","Endokrin Sistemi","Duyu Organları","Destek Hareket Sistemi","Dolaşım Sistemi","Bağışıklık Sistemi","Solunum Sistemi","Üriner Sistemi","Üreme Sistemi","Komünite Ekolojisi","Popülasyon Ekolojisi","Genden Proteine","Enerji Dönüşümleri","Bitki Biyolojisi","Canlı ve Çevre"],"AYT Edebiyat":["Güzel Sanatlar ve Edebiyat","Coşku ve Heyecanı Dile Getiren Metinler (Şiir)","Olay Çevresinde Oluşan Edebi Metinler","Destan Dönemi Türk Edebiyatı","İslamiyet Kabulü İlk Edebi Ürünler","Divan Edebiyatı","Halk Edebiyatı","Tanzimat Edebiyatı","Servet-i Fünun Edebiyatı","Fecr-i Ati Edebiyatı","Milli Edebiyat","Cumhuriyet Dönemi Türk Edebiyatı","Edebi Akımlar"],"Tarih (TYT-AYT)":["Tarih ve Zaman","İnsanlığın İlk Dönemleri","Orta Çağ'da Dünya","İlk ve Orta Çağlarda Türk Dünyası","İslam Medeniyetinin Doğuşu","İlk Türk-İslam Devletleri","Beylikten Devlete Osmanlı","Dünya Gücü Osmanlı","Osmanlı Kültür ve Medeniyeti","En Uzun Yüzyıl (Osmanlı)","XX. Yüzyıl Başlarında Osmanlı","I. Dünya Savaşı","Milli Mücadele Hazırlık Dönemi","Kurtuluş Savaşı ve Antlaşmalar","Atatürk İlke ve İnkılapları","Atatürk Dönemi Türk Dış Politikası"],"Coğrafya (TYT-AYT)":["Doğa ve İnsan","Dünya'nın Şekli ve Hareketleri","Coğrafi Konum","Harita Bilgisi","Atmosfer ve İklim","Dünya'nın Tektonik Yapısı","İç ve Dış Kuvvetler","Nüfus ve Yerleşme","Ekonomik Faaliyetler","Bölgeler ve Ülkeler","Çevre ve Toplum","Ekosistem ve Madde Dönüşü","Türkiye'de Nüfus ve Yerleşme","Türkiye'nin Coğrafi Konumu ve Bölgeleri","Küresel Ortam: Bölgeler ve Ülkeler"],"Felsefe Grubu & Din":["Felsefeyi Tanıma","Bilgi Felsefesi","Varlık Felsefesi","Ahlak Felsefesi","Sanat Felsefesi","Din Felsefesi","Siyaset Felsefesi","Bilim Felsefesi","Psikolojiye Giriş","Sosyolojiye Giriş","Klasik Mantık","Kur'an-ı Kerim ve Anlamı","İnanç ve İbadet","Ahlak ve Değerler","Hz. Muhammed ve Gençlik","İslam Medeniyeti ve Bilim"],"YDT İngilizce":["Grammar (Dil Bilgisi)","Vocabulary (Kelime Bilgisi)","Reading Comprehension (Okuduğunu Anlama)","Sentence Completion (Cümle Tamamlama)","Dialogue Completion (Diyalog Tamamlama)","Translation (Çeviri)","Restatement (Eş Anlamlı Cümle)","Paragraph Completion (Paragraf Tamamlama)","Irrelevant Sentence (Anlamı Bozan Cümle)"]};function Xa(e,t){const n=`${e||""} ${t||""}`.trim();return Ke[n]||Ke[t||""]||null}let ie=[];function Qa(e,t){const n=ie.indexOf(t);n===-1?(ie.push(t),e.style.borderColor="var(--red)",e.style.background="rgba(255,92,122,.12)",e.style.color="var(--red)"):(ie.splice(n,1),e.style.borderColor="var(--border)",e.style.background="var(--surface)",e.style.color="var(--text-mid)")}window.toggleKonuChip=Qa;let le=[];function ei(){const e=document.getElementById("tmNewResourceToggle").checked;bn(e)}function bn(e){document.getElementById("tmSearchSection").style.display=e?"none":"",document.getElementById("tmManualSection").style.display=e?"":"none",document.getElementById("tmTestWrap").style.display="none";const t=document.getElementById("tmToggleSlider");t&&(t.style.background=e?"var(--accent)":"var(--border)",t.style.setProperty("--tw-after-x",e?"16px":"0px"))}function ti(){const e=document.getElementById("tmManualTestInput"),t=e.value.trim();t&&(le.push(t),e.value="",hn())}function ni(e){le.splice(e,1),hn()}function hn(){const e=document.getElementById("tmManualTestChips");e&&(e.innerHTML=le.map((t,n)=>`
    <span style="display:inline-flex;align-items:center;gap:5px;background:var(--accent-dim);border:1px solid rgba(240,165,0,.3);color:var(--accent);padding:4px 10px;border-radius:99px;font-size:12px;font-weight:600">
      ${g(t)}
      <button onclick="removeManualTest(${n})" style="background:none;border:none;cursor:pointer;color:var(--accent);font-size:14px;padding:0;line-height:1">×</button>
    </span>`).join(""))}function ai(e,t){if(!l.activeStuId)return h("Önce öğrenci seçin");Te=e,_editingTaskId=null,O=null,document.querySelector("#taskModal h2").innerHTML=`Görev Ekle — <span id="tmDay">${t}</span>`,document.querySelector("#taskModal .btn-accent").textContent="Programa Ekle",document.getElementById("tmSubjectFree").value="",document.getElementById("tmDuration").value="60",document.getElementById("tmNote").value="",document.getElementById("tmExam").value="",document.getElementById("tmType").value="deneme",document.getElementById("tmSubjectSel").style.display="none",document.getElementById("tmSubjectFree").style.display="",document.getElementById("soruBankasiWrap").style.display="none",document.getElementById("tmBookSearch").value="",document.getElementById("tmBookVal").value="",document.getElementById("tmBookList").style.display="none",document.getElementById("tmTestWrap").style.display="none";const n=document.getElementById("tmTestSummary");n&&(n.style.display="none");const a=document.getElementById("tmNewResourceToggle");a&&(a.checked=!1,bn(!1)),document.getElementById("tmManualKaynak").value="",document.getElementById("tmManualTestInput").value="",document.getElementById("tmManualTestChips").innerHTML="",le=[],wn(),N("taskModal")}let Q={},Le=!1;async function kn(){if(Le)return;const{data:e}=await x.from("resources").select("*").eq("active",!0).order("name");e&&(e.forEach(t=>{let n=[t.subject];t.subject==="Tarih"?n.push("Tarih1","Tarih2"):t.subject==="Coğrafya"?n.push("Coğrafya1","Coğrafya2"):(t.subject==="Din Kültürü"||t.subject==="Din")&&(n=["Din","Din Kültürü"]),n.forEach(a=>{const i=`${t.exam_type}_${a}`;Q[i]||(Q[i]=[]),Q[i].push({name:t.name,yil:t.year,testler:Array.isArray(t.tests)?t.tests:[],publisher:t.publisher})})}),Le=!0)}let Ye=[],O=null;function Ct(){const e=document.getElementById("tmExam").value,t=document.getElementById("tmType").value,n=document.getElementById("tmSubjectSel"),a=document.getElementById("tmSubjectFree");O=null,document.getElementById("tmBookVal").value="",document.getElementById("tmBookSearch").value="",document.getElementById("tmBookList").innerHTML="",document.getElementById("tmBookList").style.display="none",document.getElementById("tmTestWrap").style.display="none";const i=document.getElementById("tmTestSummary");i&&(i.style.display="none"),e&&SUBJECT_MAP[e]?(n.innerHTML=SUBJECT_MAP[e].map(r=>`<option value="${r}">${r}</option>`).join(""),n.style.display="",a.style.display="none"):(n.style.display="none",a.style.display="");const o=(t==="soru"||t==="konu")&&e;document.getElementById("soruBankasiWrap").style.display=o?"":"none";const s=document.getElementById("tmBookSearch");s&&(s.placeholder=t==="konu"?"Hoca veya playlist ara...":"Kitap veya yayınevi ara..."),Le=!1,Q={},o&&dt("")}function ii(){O=null,document.getElementById("tmBookVal").value="",document.getElementById("tmBookSearch").value="",document.getElementById("tmBookList").style.display="none",document.getElementById("tmTestWrap").style.display="none";const e=document.getElementById("tmType").value,t=document.getElementById("tmExam").value;Le=!1,Q={},(e==="soru"||e==="konu")&&t&&dt("")}document.getElementById("tmType").addEventListener("change",Ct);async function dt(e){const t=document.getElementById("tmExam").value,n=document.getElementById("tmSubjectSel").value||"",a=document.getElementById("tmType").value,i=document.getElementById("tmBookList"),o=a==="konu"?"playlist":"book";if(!Le){i.style.display="block",i.innerHTML='<div style="padding:12px;font-size:12px;color:var(--text-dim);text-align:center">⏳ Yükleniyor...</div>';const{data:c}=await x.from("resources").select("*").eq("active",!0).eq("resource_type",o).order("name");Q={},c&&c.forEach(p=>{let m=[p.subject];p.subject==="Tarih"?m.push("Tarih1","Tarih2"):p.subject==="Coğrafya"?m.push("Coğrafya1","Coğrafya2"):(p.subject==="Din Kültürü"||p.subject==="Din")&&(m=["Din","Din Kültürü"]),m.forEach(u=>{const y=`${p.exam_type}_${u}`;Q[y]||(Q[y]=[]),Q[y].push({name:p.name,yil:p.year,testler:Array.isArray(p.tests)?p.tests:[],publisher:p.publisher,resource_type:p.resource_type||"book"})})}),Le=!0}const s=`${t}_${n}`,r=Q[s]||[],d=e.toLowerCase();if(Ye=r.filter(c=>{var p;return!d||c.name.toLowerCase().includes(d)||((p=c.publisher)==null?void 0:p.toLowerCase().includes(d))}),!e&&!Ye.length){i.style.display="none";return}if(!Ye.length){i.style.display="block",i.innerHTML='<div style="padding:12px;font-size:12px;color:var(--text-dim);text-align:center">Kaynak bulunamadı</div>';return}i.style.display="block",i.innerHTML=Ye.map((c,p)=>`
    <div onclick="selectBook(${p})" style="padding:10px 14px;cursor:pointer;border-bottom:1px solid var(--border);display:flex;justify-content:space-between;align-items:center;transition:background .15s"
      onmouseover="this.style.background='var(--surface3)'" onmouseout="this.style.background=''">
      <div>
        <div style="font-size:13px;font-weight:700">${g(c.name)}</div>
        <div style="font-size:10px;color:var(--text-dim);margin-top:2px">${g(c.publisher||"")} · ${c.testler.length} test</div>
      </div>
      <span style="font-size:10px;font-weight:700;background:var(--green-dim);color:var(--green);padding:2px 7px;border-radius:99px;margin-left:8px;flex-shrink:0">${c.yil}</span>
    </div>`).join("")}function oi(){const e=document.getElementById("tmBookSearch").value;if(e.length===0){document.getElementById("tmBookList").style.display="none";return}dt(e)}function si(e){O=Ye[e],document.getElementById("tmBookVal").value=O.name,document.getElementById("tmBookSearch").value=O.name,document.getElementById("tmBookList").style.display="none",Lt(),document.getElementById("tmTestWrap").style.display=""}function Lt(){if(!O)return;const e=document.getElementById("tmTestList"),t=O.resource_type==="playlist",n=O.name||"";e.innerHTML=O.testler.map((a,i)=>{const o=a.label||a,s=o.trim()===""||o.trim()===n.trim()?`Ders ${i+1}`:o,r=a.soru||0,d=a.url||"";a.topic;const c=ia(o),p=c==="done"?"ti-status-done":c==="pending"?"ti-status-pending":"",m=c==="done"?'<span class="ti-badge ti-badge-done">✓ Tamamlandı</span>':c==="pending"?'<span class="ti-badge ti-badge-pending">⏳ Atandı</span>':"";return t?`<label class="${p}" style="display:flex;align-items:center;gap:8px;padding:8px 10px;cursor:pointer;transition:background .1s;border-bottom:1px solid var(--border)"
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
      </label>`}).join(""),je()}function ri(){document.querySelectorAll("#tmTestList input[type=checkbox]").forEach(e=>e.checked=!0),je()}function li(){document.querySelectorAll("#tmTestList input[type=checkbox]").forEach(e=>e.checked=!1),je()}function je(){if(!O)return;const e=[...document.querySelectorAll("#tmTestList input[type=checkbox]:checked")],t=document.getElementById("tmTestSummary"),n=document.getElementById("tmTestSummaryText"),a=document.getElementById("tmSuggestedDuration"),i=document.getElementById("tmSpeedRow"),o=O.resource_type==="playlist";if(e.length===0){t.style.display="none";return}let s=0,r=0;e.forEach(m=>{const u=parseInt(m.value),y=O.testler[u];o?r+=(y==null?void 0:y.soru)||0:s+=(y==null?void 0:y.soru)||0});const d=document.querySelector("[data-mspeed].speed-active"),c=d?parseFloat(d.dataset.mspeed):1;let p=0;if(o)p=r>0?Math.ceil(r/c):0,n.textContent=`${e.length} video · ${r} dk`,i&&(i.style.display="");else{const m=document.getElementById("tmExam").value,u=document.getElementById("tmSubjectSel").value||"",y=`${l.activeStuId}_${m}_${u}`,E=it[y]||180;p=s>0?Math.ceil(s*E/60):0,n.textContent=`${e.length} test · ${s} soru${p>0?" · Önerilen: "+p+" dk":""}`,i&&(i.style.display="none")}a.style.display=p>0?"":"none",Qe=p,a.setAttribute("data-dur",p),t.style.display="",p>0&&(document.getElementById("tmDuration").value=p)}function di(e){document.querySelectorAll("[data-mspeed]").forEach(t=>{const n=t.dataset.mspeed===e;t.classList.toggle("speed-active",n),t.style.borderColor=n?"var(--accent)":"var(--border)",t.style.background=n?"var(--accent-dim)":"var(--surface2)",t.style.color=n?"var(--accent)":"var(--text-mid)"}),je()}let Qe=0;function ci(){Qe>0&&(document.getElementById("tmDuration").value=Qe,h("Süre uygulandı: "+Qe+" dk"))}let it={};async function wn(){if(!l.activeStuId)return;const{data:e}=await x.from("student_speeds").select("*").eq("student_id",l.activeStuId);it={},(e||[]).forEach(t=>{const n=`${t.student_id}_${t.exam_type}_${t.subject}`;it[n]=t.secs_per_question})}async function $n(e,t,n,a){const{data:i}=await x.from("student_speeds").select("id").eq("student_id",e).eq("exam_type",t).eq("subject",n).single();i?await x.from("student_speeds").update({secs_per_question:a,updated_at:new Date().toISOString()}).eq("id",i.id):await x.from("student_speeds").insert({student_id:e,coach_id:b.coachId,exam_type:t,subject:n,secs_per_question:a}),it[`${e}_${t}_${n}`]=a,h("Hız kaydedildi ✓")}document.getElementById("tmType").addEventListener("change",Ct);let xt=!1;async function pi(){var n;if(xt)return;xt=!0;const e=document.querySelector('#taskModal button[onclick*="saveTask"]'),t=e?e.textContent:"Programa Ekle";e&&(e.disabled=!0,e.textContent="Kaydediliyor...");try{const a=document.getElementById("tmType").value,i=document.getElementById("tmSubjectSel"),o=document.getElementById("tmSubjectFree"),s=document.getElementById("tmExam").value,r=parseInt(document.getElementById("tmDuration").value)||60,d=document.getElementById("tmNote").value.trim();if((n=document.getElementById("tmNewResourceToggle"))==null?void 0:n.checked){const f=document.getElementById("tmManualKaynak").value.trim();if(!f)return h("Kaynak adı girin!");const k=i.style.display!=="none"?i.value:o.value.trim(),S=k?`${k} - ${f}`:f,_=le.map(D=>({label:D,url:"",soru:0}));let A=d;le.length>0&&(A=`${le.length} test: ${le.slice(0,3).join(", ")}${le.length>3?` +${le.length-3} daha`:""}`);const $={student_id:l.activeStuId,coach_id:b.coachId,date:Te,type:a,exam_type:s,subject:S,duration:r,note:A,done:!1,task_items:_.length>0?_:null};z(!0);const{error:B}=await x.from("tasks").insert($);if(z(!1),B)return h("Hata: "+B.message);const T=`${l.activeStuId}_${Te}`;l.tasks[T]||(l.tasks[T]=[]),l.tasks[T].push({type:a,exam:s,subject:S,duration:r,note:A,done:!1,task_items:$.task_items}),K("taskModal"),G(),h("Görev eklendi ✓");return}const p=document.getElementById("tmBookVal").value,m=(O==null?void 0:O.resource_type)==="playlist";let u="";if((a==="soru"||a==="konu")&&p){const f=i.style.display!=="none"?i.value:"";u=f?`${f} - ${p}`:`${p}`}else u=(i.style.display!=="none"?i.value:o.value).trim();if(!u)return h("Ders adı girin!");const y=[...document.querySelectorAll("#tmTestList input[type=checkbox]:checked")];let E=d,I=[];if(y.length>0&&O){const f=y.map(k=>{const S=O.testler[parseInt(k.value)];return(S==null?void 0:S.label)||S||""});if(I=y.map(k=>{const S=O.testler[parseInt(k.value)];return{label:(S==null?void 0:S.label)||S||"",url:(S==null?void 0:S.url)||"",soru:(S==null?void 0:S.soru)||0}}),m){const k=S=>S.length>14?S.slice(0,13)+"…":S;E=`${f.length} video: ${f.slice(0,5).map(k).join(", ")}${f.length>5?` +${f.length-5}`:""}`}else{const k=S=>S.length>14?S.slice(0,13)+"…":S;E=`${f.length} test: ${f.slice(0,5).map(k).join(", ")}${f.length>5?` +${f.length-5}`:""}`}}const v={student_id:l.activeStuId,coach_id:b.coachId,date:Te,type:a,exam_type:s,subject:u,duration:r,note:E,done:!1,task_items:I.length>0?I:null};if(_editingTaskId){z(!0);const{error:f}=await x.from("tasks").update({type:v.type,exam_type:v.exam_type,subject:v.subject,duration:v.duration,note:v.note,task_items:v.task_items}).eq("id",_editingTaskId);if(z(!1),f)return h("Hata: "+f.message);const k=`${l.activeStuId}_${Te}`;if(l.tasks[k]){const S=l.tasks[k].findIndex(_=>_._id===_editingTaskId);S!==-1&&(l.tasks[k][S]={_id:_editingTaskId,type:v.type,exam:v.exam_type,subject:v.subject,duration:v.duration,note:v.note,done:l.tasks[k][S].done,student_note:l.tasks[k][S].student_note||"",task_items:v.task_items})}K("taskModal"),G(),h("Görev güncellendi ✓"),_editingTaskId=null}else{const{data:f,error:k}=await x.from("tasks").insert(v).select().single();if(k)return h("Hata: "+k.message);const S=`${l.activeStuId}_${Te}`;l.tasks[S]||(l.tasks[S]=[]),l.tasks[S].push({_id:f.id,type:f.type,exam:f.exam_type,subject:f.subject,duration:f.duration,note:f.note,done:!1,student_note:"",task_items:f.task_items||null}),K("taskModal"),G(),h("Görev eklendi ✓")}}finally{xt=!1,e&&(e.disabled=!1,e.textContent=t)}}async function mi(e,t){var o;const n=`${l.activeStuId}_${e}`,a=(o=l.tasks[n])==null?void 0:o[t];if(!a)return;const i=!a.done;await x.from("tasks").update({done:i}).eq("id",a._id),a.done=i,G()}let et=null;function jt(){et&&(et.remove(),et=null)}document.addEventListener("click",jt);function ui(e,t,n){jt();const a=n.getBoundingClientRect(),i=document.createElement("div");i.className="tc-dropdown",i.innerHTML=`
    <button onclick="closeTaskMenu();openCoachTaskEdit('${e}',${t})">✏️ Düzenle</button>
    <button onclick="closeTaskMenu();copyTaskToClipboard('${e}',${t})">📋 Kopyala</button>
    <button onclick="closeTaskMenu();copyTaskToWholeWeek('${e}',${t})">📅 Tüm Haftaya Kopyala</button>
    <button class="danger" onclick="closeTaskMenu();deleteTask('${e}',${t})">🗑 Kaldır</button>`;const o=a.bottom+4,s=Math.min(a.left,window.innerWidth-155);i.style.cssText=`top:${o}px;left:${s}px;`,document.body.appendChild(i),et=i,setTimeout(()=>i.addEventListener("click",r=>r.stopPropagation()),0)}async function gi(e,t){var s;const n=`${l.activeStuId}_${e}`,a=(s=l.tasks[n])==null?void 0:s[t];if(!a)return;const{data:i,error:o}=await x.from("tasks").insert({student_id:l.activeStuId,coach_id:b.coachId,date:e,type:a.type,exam_type:a.exam||null,subject:a.subject,duration:a.duration,note:a.note||null,done:!1,task_items:a.task_items||null}).select().single();if(o)return h("Kopyalama başarısız");l.tasks[n]||(l.tasks[n]=[]),l.tasks[n].push({_id:i.id,type:i.type,exam:i.exam_type,subject:i.subject,duration:i.duration,note:i.note,done:!1,student_note:"",task_items:i.task_items||null}),G(),h("Görev kopyalandı")}async function vi(e,t){var s;const n=`${l.activeStuId}_${e}`,a=(s=l.tasks[n])==null?void 0:s[t];if(!a)return;const i=[a.exam,a.subject].filter(Boolean).join(" · ")||a.type||"Görev",o=document.querySelector(`[data-task-id="${a._id}"]`);o&&(o.style.transition="opacity .25s,transform .25s",o.style.opacity="0",o.style.transform="translateX(20px)"),await x.from("tasks").delete().eq("id",a._id),l.tasks[n].splice(t,1),G(),h(`"${i}" silindi`)}let ne={studentId:"",type:""};window._draggingApptId=null;const Tn={"Haftalık Değerlendirme":"#E8613A","TYT Koçluğu":"#3B82F6","AYT Koçluğu":"#8B5CF6",Mentörlük:"#10B981","Deneme Analizi":"#F59E0B",Motivasyon:"#EC4899","Genel Görüşme":"#64748B"},tn=0,yi=24,fi=60;function En(e){return Tn[e]||"#64748B"}function xi(e){const t=l.students.find(o=>o.id===e.studentId),n=new Date(e.date+"T"+(e.time||"09:00")),a=new Date(n.getTime()+(e.duration||45)*6e4),i=o=>o.getFullYear()+String(o.getMonth()+1).padStart(2,"0")+String(o.getDate()).padStart(2,"0")+"T"+String(o.getHours()).padStart(2,"0")+String(o.getMinutes()).padStart(2,"0")+"00";return`https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(((t==null?void 0:t.name)||"Öğrenci")+" – Koçluk")}&dates=${i(n)}/${i(a)}&details=${encodeURIComponent(e.type||"")}`}function bi(){ge()}function hi(){ge()}function ki(){ge()}function wi(e,t){ne[e]=t,ge()}function $i(){let e=l.appointments;ne.studentId&&(e=e.filter(o=>o.studentId===ne.studentId)),ne.type&&(e=e.filter(o=>o.type===ne.type));const t=["BEGIN:VCALENDAR","VERSION:2.0","PRODID:-//Rostrum Akademi//TR","CALSCALE:GREGORIAN","METHOD:PUBLISH","X-WR-CALNAME:Rostrum Ajanda"];e.forEach(o=>{const s=l.students.find(p=>p.id===o.studentId),r=new Date(o.date+"T"+(o.time||"09:00")),d=new Date(r.getTime()+(o.duration||45)*6e4),c=p=>p.getFullYear()+String(p.getMonth()+1).padStart(2,"0")+String(p.getDate()).padStart(2,"0")+"T"+String(p.getHours()).padStart(2,"0")+String(p.getMinutes()).padStart(2,"0")+"00";t.push("BEGIN:VEVENT",`DTSTART:${c(r)}`,`DTEND:${c(d)}`,`SUMMARY:${(s==null?void 0:s.name)||"Öğrenci"} – ${o.type||"Koçluk"}`),o.note&&t.push(`DESCRIPTION:${o.note.replace(/\n/g,"\\n")}`),(o.meetLink||o.meet_link)&&t.push(`URL:${o.meetLink||o.meet_link}`),t.push(`UID:rostrum-${o.id}@rostrumakademi.com`,"END:VEVENT")}),t.push("END:VCALENDAR");const n=new Blob([t.join(`\r
`)],{type:"text/calendar;charset=utf-8"}),a=URL.createObjectURL(n),i=document.createElement("a");i.href=a,i.download="rostrum-ajanda.ics",i.click(),URL.revokeObjectURL(a),h("Ajanda indirildi ✓")}function Sn(e,t){t.stopPropagation();const n=document.getElementById("apptDetailPopup");if(n){const y=n.dataset.id;if(n.remove(),y===e)return}const a=l.appointments.find(y=>y.id===e);if(!a)return;const i=l.students.find(y=>y.id===a.studentId),o=En(a.type),s=document.createElement("div");s.id="apptDetailPopup",s.dataset.id=e;const r=window.innerWidth,d=window.innerHeight,c=264;let p=Math.min(t.clientX+12,r-c-12),m=Math.min(t.clientY+12,d-220);s.style.cssText=`position:fixed;left:${p}px;top:${m}px;z-index:600;width:${c}px;background:var(--surface);border:1px solid var(--border);border-radius:14px;padding:14px 16px;box-shadow:0 8px 32px rgba(0,0,0,.18);animation:viewIn .15s ease`;const u=a.meetLink||a.meet_link;s.innerHTML=`
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
      <a href="${xi(a)}" target="_blank" style="font-size:11px;font-weight:700;color:var(--green);background:var(--green-dim);padding:4px 10px;border-radius:99px;text-decoration:none">📅 GCal</a>
      <button onclick="document.getElementById('apptDetailPopup')?.remove();openAgendaApptModal('${a.id}')" style="font-size:11px;font-weight:700;color:var(--text);background:var(--surface2);padding:4px 10px;border-radius:99px;border:1px solid var(--border);cursor:pointer;font-family:inherit">✏️ Düzenle</button>
      <button onclick="deleteAgendaAppt('${a.id}')" style="font-size:11px;font-weight:700;color:var(--red,#ef4444);background:#ef444410;padding:4px 10px;border-radius:99px;border:none;cursor:pointer;font-family:inherit">🗑</button>
    </div>`,document.body.appendChild(s),setTimeout(()=>{document.addEventListener("click",function y(E){s.contains(E.target)||(s.remove(),document.removeEventListener("click",y))})},50)}async function Ti(e,t){e.preventDefault();const n=window._draggingApptId;if(!n)return;window._draggingApptId=null;const a=e.currentTarget,i=a.getBoundingClientRect(),o=a.closest("[data-tl-scroll]"),s=o?o.scrollTop:0,d=(e.clientY-i.top+s)/fi*60+tn*60,c=Math.max(tn,Math.min(yi-1,Math.floor(d/60))),p=Math.round(d%60/15)*15,m=p>=60?0:p,u=`${String(c).padStart(2,"0")}:${String(m).padStart(2,"0")}`,{error:y}=await x.from("appointments").update({date:t,time:u}).eq("id",n);if(y){h("Hata: "+y.message);return}const E=l.appointments.find(I=>I.id===n);E&&(E.date=t,E.time=u),ge(),h("Randevu taşındı ✓")}function In(){ge()}function ge(){const e=document.getElementById("view-todolist");if(!e)return;if(!document.getElementById("fc-styles")){const r=document.createElement("style");r.id="fc-styles",r.textContent=`
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
        color: #0f0e0c !important;
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
    `,document.head.appendChild(r)}const t='<option value="">Tüm Öğrenciler</option>'+l.students.map(r=>`<option value="${r.id}"${ne.studentId===r.id?" selected":""}>${g(r.name)}</option>`).join(""),n='<option value="">Tüm Tipler</option>'+Object.keys(Tn).map(r=>`<option value="${r}"${ne.type===r?" selected":""}>${r}</option>`).join("");let a=l.appointments;ne.studentId&&(a=a.filter(r=>r.studentId===ne.studentId)),ne.type&&(a=a.filter(r=>r.type===ne.type));const i=a.map(r=>{const d=l.students.find(I=>I.id===r.studentId),c=En(r.type),p=`${r.date}T${r.time||"09:00"}`,m=new Date(p),u=new Date(m.getTime()+(r.duration||45)*6e4),y=I=>String(I).padStart(2,"0"),E=`${u.getFullYear()}-${y(u.getMonth()+1)}-${y(u.getDate())}T${y(u.getHours())}:${y(u.getMinutes())}:00`;return{id:r.id,title:`${(d==null?void 0:d.name)||"Öğrenci"} (${r.type||"Randevu"})`,start:p,end:E,backgroundColor:c,borderColor:c,textColor:"#ffffff",extendedProps:{...r}}}),o="font-size:12px;padding:6px 12px;border-radius:8px;border:1px solid var(--border);background:var(--surface);color:var(--text);cursor:pointer;font-family:inherit";let s=document.getElementById("fc-calendar");if(!s)e.innerHTML=`
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
    `,s=document.getElementById("fc-calendar");else{const r=e.querySelectorAll("select");r[0]&&(r[0].innerHTML=t),r[1]&&(r[1].innerHTML=n)}typeof FullCalendar<"u"?window._fcInstance?(window._fcInstance.removeAllEvents(),window._fcInstance.addEventSource(i),window._fcInstance.updateSize()):(window._fcInstance=new FullCalendar.Calendar(s,{initialView:window.innerWidth<700?"listWeek":"timeGridWeek",headerToolbar:{left:"prev,next today",center:"title",right:"dayGridMonth,timeGridWeek,timeGridDay,listWeek"},buttonText:{today:"Bugün",month:"Ay",week:"Hafta",day:"Gün",list:"Ajanda"},locale:"tr",firstDay:1,slotMinTime:"08:00",slotMaxTime:"23:00",allDaySlot:!1,editable:!0,droppable:!0,selectable:!0,eventClick:function(r){Sn(r.event.id,r.jsEvent)},select:function(r){const d=r.startStr.slice(0,10),c=r.startStr.slice(11,16)||"14:00";_n(null,d),setTimeout(()=>{const p=document.getElementById("amTime");p&&(p.value=c)},50)},eventDrop:async function(r){const d=r.event.start,c=r.event.end||new Date(d.getTime()+45*6e4),p=d.getFullYear()+"-"+String(d.getMonth()+1).padStart(2,"0")+"-"+String(d.getDate()).padStart(2,"0"),m=String(d.getHours()).padStart(2,"0")+":"+String(d.getMinutes()).padStart(2,"0"),u=Math.round((c.getTime()-d.getTime())/6e4),y=r.event.id,{error:E}=await x.from("appointments").update({date:p,time:m,duration:u}).eq("id",y);if(E){h("Hata: "+E.message),r.revert();return}const I=l.appointments.find(v=>v.id===y);I&&(I.date=p,I.time=m,I.duration=u),h("Randevu taşıma başarılı ✓")},eventResize:async function(r){const d=r.event.start,c=r.event.end;if(!c)return;const p=Math.round((c.getTime()-d.getTime())/6e4),m=r.event.id,{error:u}=await x.from("appointments").update({duration:p}).eq("id",m);if(u){h("Hata: "+u.message),r.revert();return}const y=l.appointments.find(E=>E.id===m);y&&(y.duration=p),h("Randevu süresi güncellendi ✓")},events:i}),window._fcInstance.render()):console.warn("FullCalendar library not loaded yet")}function _n(e,t){const n=e?l.appointments.find(a=>a.id===e):null;document.getElementById("amTitle").textContent=n?"Randevuyu Düzenle":"Yeni Randevu",document.getElementById("amId").value=e||"",document.getElementById("amStudent").innerHTML=l.students.map(a=>`<option value="${a.id}" ${(n==null?void 0:n.studentId)===a.id?"selected":""}>${g(a.name)}</option>`).join(""),document.getElementById("amDate").value=n?n.date:t||Y(new Date),document.getElementById("amTime").value=n?n.time:"14:00",document.getElementById("amDuration").value=n?n.duration:"45",document.getElementById("amType").value=n?n.type:"Haftalık Değerlendirme",document.getElementById("amNote").value=n&&n.note||"",document.getElementById("amMeetLink").value=n&&(n.meetLink||n.meet_link)||"",N("apptModal")}async function Ei(e){await X("Randevu silinsin mi?")&&(await x.from("appointments").delete().eq("id",e),l.appointments=l.appointments.filter(t=>t.id!==e),ge(),h("Randevu silindi"))}function zn(){Ge()}function Si(e){l.activeStuId=e,l.weekOffset=0,ue(),At(e)}function Ii(e){const t=e?l.students.find(a=>a.id===e):null;document.getElementById("smTitle").textContent=t?"Öğrenciyi Düzenle":"Yeni Öğrenci",document.getElementById("smId").value=e||"",document.getElementById("smName").value=(t==null?void 0:t.name)||"",document.getElementById("smTarget").value=(t==null?void 0:t.target)||"",document.getElementById("smUsername").value=(t==null?void 0:t.username)||"",document.getElementById("smPass").value=(t==null?void 0:t.pass)||STU_DEFAULT_PASS,document.getElementById("smWeekStart").value=(t==null?void 0:t.weekStart)??0,document.getElementById("smYksArea").value=(t==null?void 0:t.yksArea)||"SAY",document.getElementById("smProg").value=(t==null?void 0:t.progress)||0,document.getElementById("smProgVal").textContent=((t==null?void 0:t.progress)||0)+"%",document.querySelectorAll(".color-opt").forEach(a=>a.classList.toggle("sel",a.dataset.c===((t==null?void 0:t.color)||"#f0a500")));const n=document.getElementById("smRoleField");n&&(n.style.display="none"),document.querySelector("#studentModal .btn-accent").setAttribute("onclick","saveStudent()"),N("studentModal")}document.getElementById("smProg").addEventListener("input",function(){document.getElementById("smProgVal").textContent=this.value+"%"});document.getElementById("smColorPick").addEventListener("click",function(e){const t=e.target.closest(".color-opt");t&&(document.querySelectorAll(".color-opt").forEach(n=>n.classList.remove("sel")),t.classList.add("sel"))});async function _i(){var d;const e=document.getElementById("smName").value.trim();if(!e)return h("İsim girin!");const t=((d=document.querySelector(".color-opt.sel"))==null?void 0:d.dataset.c)||"#f0a500",n=document.getElementById("smId").value,a=Ee(document.getElementById("smUsername").value.trim())||Ee(e.split(" ")[0])+Math.floor(Math.random()*100),i=document.getElementById("smPass").value||STU_DEFAULT_PASS,o=await Be(i),s=document.getElementById("smYksArea").value,r={full_name:e,target:document.getElementById("smTarget").value.trim()||"Hedef belirtilmemiş",color:t,progress:Number(document.getElementById("smProg").value),password_hash:o,week_start:Number(document.getElementById("smWeekStart").value),coach_id:b.coachId,yks_area:s};if(n){const{error:c}=await x.rpc("update_student_profile",{p_student_id:n,p_full_name:e,p_target:r.target,p_color:t,p_progress:r.progress,p_week_start:r.week_start,p_username:a,p_plain_password:i,p_password_hash:o,p_yks_area:r.yks_area});if(c)return h("Hata: "+c.message);const p=l.students.find(m=>m.id===n);p&&Object.assign(p,{name:r.full_name,target:r.target,color:t,progress:r.progress,pass:r.password_hash,weekStart:r.week_start,username:a,yksArea:r.yks_area}),h("Güncellendi ✓"),ue(),K("studentModal"),Ge()}else{const c=a+"@rostrumakademi.com",{data:{session:p}}=await x.auth.getSession(),m=await fetch("/api/create-student",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${(p==null?void 0:p.access_token)||""}`},body:JSON.stringify({email:c,password:i,full_name:r.full_name,username:a,color:r.color,target:r.target,progress:r.progress,week_start:r.week_start,coach_id:r.coach_id,exam_profile:"YKS",yks_area:r.yks_area})}),u=await m.json();if(!m.ok)return h("Hata: "+u.error);const y=u.userId;l.students.push({id:y,name:r.full_name,target:r.target,color:r.color,progress:r.progress||0,pass:o,weekStart:r.week_start||0,username:a,yksArea:r.yks_area}),l.activeStuId||(l.activeStuId=y),ue(),K("studentModal"),Bn(r.full_name,a,i)}}function Bn(e,t,n){let a=document.getElementById("inviteModal");a||(a=document.createElement("div"),a.id="inviteModal",a.className="modal-bg",document.body.appendChild(a),a.addEventListener("click",r=>{r.target===a&&a.classList.remove("open")}));const o=`${window.location.origin+window.location.pathname.replace("app.html","")}app.html`,s=encodeURIComponent(`Merhaba ${e}! 🎓

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
  </div>`,window._pendingInvite={name:e,username:t,pass:n,loginUrl:o},N("inviteModal")}async function zi(){var s,r;const e=(s=document.getElementById("inviteEmailInput"))==null?void 0:s.value.trim(),t=document.getElementById("inviteEmailMsg");if(!e||!e.includes("@")){t&&(t.style.display="block",t.style.background="var(--red-dim)",t.style.color="var(--red)",t.textContent="Geçerli bir e-posta girin.");return}if(!window._pendingInvite)return;const{name:n,username:a,pass:i,loginUrl:o}=window._pendingInvite;t&&(t.style.display="block",t.style.background="var(--surface2)",t.style.color="var(--text-mid)",t.textContent="Gönderiliyor...");try{const d=await fetch("/api/mailer",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({type:"student_welcome",to:e,student_name:n,username:a,password:i,login_url:o,coach_name:((r=l.workspace)==null?void 0:r.brand_name)||""})}),c=await d.json();if(d.ok)t&&(t.style.background="var(--green-dim)",t.style.color="var(--green)",t.textContent="✓ Mail gönderildi!");else throw new Error(c.error||"Sunucu hatası")}catch(d){t&&(t.style.background="var(--red-dim)",t.style.color="var(--red)",t.textContent="✗ "+d.message)}}window.sendInviteEmail=zi;function Bi(e,t,n){const a=`Giriş adresi: ${n}
Kullanıcı adı: ${e}
Şifre: ${t}`;navigator.clipboard.writeText(a).then(()=>h("Kopyalandı ✓")).catch(()=>{const i=document.createElement("textarea");i.value=a,document.body.appendChild(i),i.select(),document.execCommand("copy"),i.remove(),h("Kopyalandı ✓")})}async function Mi(e){var n;if(!await X("Bu öğrenciyi silmek istediğinizden emin misiniz?"))return;const{error:t}=await x.from("users").delete().eq("id",e);if(t)return h("Hata: "+t.message);l.students=l.students.filter(a=>a.id!==e),l.activeStuId===e&&(l.activeStuId=((n=l.students[0])==null?void 0:n.id)||null),ue(),zn(),h("Silindi")}function qe(){var t;const e=document.getElementById("view-appointments");e.innerHTML=`
    <button class="back-link" onclick="switchTab('student-detail')">← ${((t=l.students.find(n=>n.id===l.activeStuId))==null?void 0:t.name)||"Öğrenci"}</button>
    <div class="sh"><h2>Randevular</h2><button class="btn btn-accent" onclick="openApptModal()">+ Yeni Randevu</button></div>
    <div class="appts-layout">
      <div class="card cp">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:14px">
          <span style="font-family:'Inter',sans-serif;font-size:17px;font-weight:700" id="calMonthLbl"></span>
          <div style="display:flex;gap:6px">
            <button class="btn btn-ghost btn-sm" onclick="chCalMonth(-1)">‹</button>
            <button class="btn btn-ghost btn-sm" onclick="chCalMonth(1)">›</button>
          </div>
        </div>
        <div class="cal-dow-row">${["Pzt","Sal","Çar","Per","Cum","Cmt","Paz"].map(n=>`<div class="cal-dow">${n}</div>`).join("")}</div>
        <div class="cal-days-grid" id="calDaysGrid"></div>
      </div>
      <div>
        <div class="card cp">
          <div style="font-family:'Inter',sans-serif;font-size:14px;font-weight:700;margin-bottom:10px;padding-bottom:8px;border-bottom:1px solid var(--border)" id="apptListTitle">Yaklaşan Görüşmeler</div>
          <div id="apptList"></div>
          <button class="btn btn-ghost btn-sm" style="width:100%;justify-content:center;margin-top:8px" onclick="S.calSelDay=null;renderCalDays();renderApptList()">Tümünü Göster</button>
        </div>
      </div>
    </div>`,ct(),Pt()}function ct(){const e=l.calYear,t=l.calMonth;document.getElementById("calMonthLbl").textContent=`${MONTHS_TR[t]} ${e}`;const n=new Date(e,t,1).getDay(),a=new Date(e,t+1,0).getDate(),i=ze(),o=new Set(l.appointments.filter(d=>{const c=new Date(d.date);return c.getFullYear()===e&&c.getMonth()===t}).map(d=>new Date(d.date).getDate())),s=n===0?6:n-1;let r="";for(let d=0;d<s;d++)r+='<div class="cal-day empty"></div>';for(let d=1;d<=a;d++){const c=`${e}-${String(t+1).padStart(2,"0")}-${String(d).padStart(2,"0")}`;r+=`<div class="cal-day ${c===i?"today":""} ${c===l.calSelDay&&c!==i?"selected":""} ${o.has(d)?"has-appt":""}" onclick="selCalDay('${c}')">${d}</div>`}document.getElementById("calDaysGrid").innerHTML=r}function Ai(e){l.calSelDay=l.calSelDay===e?null:e,ct(),Pt()}function Di(e){l.calMonth+=e,l.calMonth>11&&(l.calMonth=0,l.calYear++),l.calMonth<0&&(l.calMonth=11,l.calYear--),Fe(),ct()}function Pt(){const e=ze();let t=l.appointments,n="Yaklaşan Görüşmeler";if(l.calSelDay?(t=t.filter(a=>a.date===l.calSelDay),n=new Date(l.calSelDay+"T12:00").toLocaleDateString("tr-TR",{day:"numeric",month:"long"})):t=t.filter(a=>a.date>=e).sort((a,i)=>a.date.localeCompare(i.date)).slice(0,10),document.getElementById("apptListTitle").textContent=n,!t.length){document.getElementById("apptList").innerHTML='<div class="empty"><p>Randevu yok</p></div>';return}document.getElementById("apptList").innerHTML=t.map(a=>{const i=l.students.find(r=>r.id===a.studentId),s=a.date===e?"BUGÜN":new Date(a.date+"T12:00").toLocaleDateString("tr-TR",{day:"numeric",month:"short"});return`<div class="appt-item" style="border-left-color:${(i==null?void 0:i.color)||"#555"}">
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
    </div>`}).join("")}function Ci(e){const t=e?l.appointments.find(n=>n.id===e):null;document.getElementById("amTitle").textContent=t?"Randevuyu Düzenle":"Yeni Randevu",document.getElementById("amId").value=e||"",document.getElementById("amStudent").innerHTML=l.students.map(n=>`<option value="${n.id}" ${(t==null?void 0:t.studentId)===n.id?"selected":""}>${g(n.name)}</option>`).join(""),document.getElementById("amDate").value=t?t.date:Y(new Date),document.getElementById("amTime").value=t?t.time:"14:00",document.getElementById("amDuration").value=t?t.duration:"45",document.getElementById("amType").value=t?t.type:"Haftalık Değerlendirme",document.getElementById("amNote").value=(t==null?void 0:t.note)||"",document.getElementById("amMeetLink").value=(t==null?void 0:t.meet_link)||"",N("apptModal")}async function Li(){var s;const e=document.getElementById("amStudent").value,t=document.getElementById("amDate").value,n=document.getElementById("amTime").value;if(!e||!t||!n)return h("Tüm alanları doldurun!");const a=document.getElementById("amMeetLink").value.trim();if(a&&!a.startsWith("https://"))return h("Toplantı linki https:// ile başlamalı");if(a&&!/zoom\.us|meet\.google|teams\.microsoft|webex\.com/.test(a))return h("Geçersiz link — Zoom, Meet, Teams veya Webex linki girin");const i=document.getElementById("amId").value,o={student_id:e,coach_id:b.coachId,date:t,time:n,duration:parseInt(document.getElementById("amDuration").value),type:document.getElementById("amType").value,note:document.getElementById("amNote").value.trim(),meet_link:a};if(i){await x.from("appointments").update(o).eq("id",i);const r=l.appointments.find(d=>d.id===i);r&&Object.assign(r,{studentId:e,date:t,time:n,duration:o.duration,type:o.type,note:o.note}),h("Güncellendi ✓")}else{const{data:r,error:d}=await x.from("appointments").insert(o).select().single();if(d)return h("Hata: "+d.message);l.appointments.push({id:r.id,studentId:r.student_id,date:r.date,time:r.time,duration:r.duration,type:r.type,note:r.note}),h("Randevu eklendi ✓")}K("apptModal"),currentTab==="todolist"?ge():(s=document.getElementById("view-appointments"))!=null&&s.classList.contains("active")&&qe()}async function ji(e){await X("Bu randevuyu silmek istediğinizden emin misiniz?")&&(await x.from("appointments").delete().eq("id",e),l.appointments=l.appointments.filter(t=>t.id!==e),qe(),h("Silindi"))}function ot(e){return 100+(Number(e.Türkçe||0)+Number(e.Matematik||0)+Number(e.Fen||0)+Number(e.Sosyal||0))*(400/120)}function Mn(e,t){const n=a=>Number(t[a]||0);return e==="AYT-SAY"?100+(n("Matematik")+n("Fizik")+n("Kimya")+n("Biyoloji"))*5:e==="AYT-EA"?100+(n("Matematik")+n("Edebiyat")+n("Tarih")+n("Coğrafya"))*5:e==="AYT-SOZ"?100+(n("Edebiyat")+n("Tarih1")+n("Tarih2")+n("Coğrafya1")+n("Coğrafya2")+n("Felsefe")+n("Din"))*5:null}const An={"AYT-SAY":"SAY","AYT-EA":"EA","AYT-SOZ":"SÖZ"},st={TYT:"#3B82F6",SAY:"#8B5CF6",EA:"#10B981",SÖZ:"#F59E0B"};function Dn(e,t){const{type:n,nets:a}=e;if(n==="TYT"){const d=ot(a),c=st.TYT;return`<div style="margin-top:10px;display:flex;align-items:center;gap:8px;flex-wrap:wrap">
      <span style="background:${c}18;border:1px solid ${c}40;border-radius:8px;padding:5px 12px;display:inline-flex;gap:7px;align-items:baseline">
        <span style="font-size:10px;font-weight:700;color:${c};text-transform:uppercase">TYT Puan</span>
        <span style="font-size:18px;font-weight:900;color:${c}">${d.toFixed(2)}</span>
      </span>
    </div>`}const i=An[n];if(!i)return"";const o=st[i]||"#64748B",s=Mn(n,a),r=t.filter(d=>d.type==="TYT"&&d.date<=e.date).sort((d,c)=>c.date.localeCompare(d.date))[0];if(r){const d=ot(r.nets),c=d*.4+s*.6;return`<div style="margin-top:10px;display:flex;align-items:center;gap:10px;flex-wrap:wrap">
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
  </div>`}function Pi(){var d,c;const e=document.getElementById("emPuanDisplay");if(!e)return;const t=(d=document.getElementById("emExamType"))==null?void 0:d.value;if(!t)return;const n={};if((EXAM_DEFS[t]||[]).forEach(p=>{const m=Z[p]||{};n[p]=Math.max(0,(m.dogru||0)-(m.yanlis||0)/4)}),t==="TYT"){const p=ot(n),m=st.TYT;e.innerHTML=`<div style="background:${m}12;border:1px solid ${m}35;border-radius:10px;padding:10px 14px;display:flex;align-items:center;gap:10px">
      <span style="font-size:11px;font-weight:700;color:${m};text-transform:uppercase;letter-spacing:.4px">🎯 TYT Puan</span>
      <span style="font-size:24px;font-weight:900;color:${m};letter-spacing:-.5px">${p.toFixed(2)}</span>
    </div>`;return}const a=An[t],i=st[a]||"#64748B",o=Mn(t,n);if(o===null){e.innerHTML="";return}const s=(c=document.getElementById("emStudent"))==null?void 0:c.value,r=s?[...l.exams].filter(p=>p.studentId===s&&p.type==="TYT").sort((p,m)=>m.date.localeCompare(p.date))[0]:null;if(r){const p=ot(r.nets),m=p*.4+o*.6;e.innerHTML=`<div style="background:${i}12;border:1px solid ${i}35;border-radius:10px;padding:10px 14px">
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
    </div>`}function Pe(){const e=document.getElementById("view-exams"),t=l.students.find(o=>o.id===l.activeStuId),n=[...l.exams].filter(o=>o.studentId===l.activeStuId).sort((o,s)=>s.date.localeCompare(o.date));let a="";if(n.length>1){const o=[...n].sort((r,d)=>r.date.localeCompare(d.date)).slice(-8),s=Math.max(...o.map(r=>(EXAM_DEFS[r.type]||[]).reduce((c,p)=>{var m;return c+Number(((m=r.nets)==null?void 0:m[p])||0)},0)),1);a=`<div class="card cp" style="margin-bottom:16px">
      <div style="font-size:13px;font-weight:700;margin-bottom:12px;color:var(--text-mid)">📈 Net Gelişim · Son ${o.length} deneme</div>
      <div class="bar-chart">
        ${o.map(r=>{const c=(EXAM_DEFS[r.type]||[]).reduce((m,u)=>{var y;return m+Number(((y=r.nets)==null?void 0:y[u])||0)},0),p=Math.max(Math.round(c/s*100),4);return`<div class="bar-wrap">
            <div class="bar-val">${c.toFixed(0)}</div>
            <div class="bar" style="height:${p}%;background:${(t==null?void 0:t.color)||"var(--accent)"}"></div>
            <div class="bar-label" title="${g(r.name)}">${g(r.name.replace(/Deneme /,"#").replace(/TYT |AYT /,""))}</div>
          </div>`}).join("")}
      </div>
    </div>`}const i=n.length?n.map(o=>{const s=EXAM_DEFS[o.type]||[],r=s.reduce((d,c)=>{var p;return d+Number(((p=o.nets)==null?void 0:p[c])||0)},0).toFixed(1);return`<div style="background:var(--surface);border:1px solid var(--border);border-radius:12px;padding:16px;margin-bottom:10px;">
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
      ${Dn(o,n)}
      ${o.note?`<div style="margin-top:10px;font-size:12px;color:var(--text-mid);font-style:italic">"${g(o.note)}"</div>`:""}
      ${(()=>{if(!o.examDetails||!Object.keys(o.examDetails).length)return"";const d=s.map(c=>{const p=o.examDetails[c];if(!p)return"";const m=Math.max(0,(p.dogru||0)-(p.yanlis||0)/4).toFixed(2),u=p.yanlis_konular||[];return`<div style="padding:6px 0;border-bottom:1px solid var(--border)">
            <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:${u.length?"5px":"0"}">
              <span style="font-size:11px;font-weight:700;color:var(--text-mid)">${g(c)}</span>
              <span style="font-size:11px;color:var(--text-dim)">D:<b style="color:var(--green)">${p.dogru||0}</b> Y:<b style="color:var(--red)">${p.yanlis||0}</b> B:<b>${p.bos||0}</b> · Net <b style="color:var(--accent)">${m}</b></span>
            </div>
            ${u.length?`<div style="display:flex;flex-wrap:wrap;gap:3px">${u.map(y=>`<span style="font-size:10px;padding:2px 8px;border-radius:10px;background:rgba(255,92,122,.1);color:var(--red);border:1px solid rgba(255,92,122,.2)">${g(y)}</span>`).join("")}</div>`:""}
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
    ${i}`}let Cn=null,we="TYT";const Ri=["TYT","AYT-SAY","AYT-EA","AYT-SOZ"];function Ln(){const t=l.exams.filter(s=>s.studentId===Cn).filter(s=>s.type===we&&s.examDetails&&Object.keys(s.examDetails).length),n={};t.forEach(s=>{Object.entries(s.examDetails).forEach(([r,d])=>{(d.yanlis_konular||[]).forEach(c=>{const p=r+"§"+c;n[p]=(n[p]||0)+1})})});const a=Object.entries(n).sort((s,r)=>r[1]-s[1]).map(([s,r])=>{const[d,c]=s.split("§"),p=Math.round(r/Math.max(t.length,1)*100),m=r>=3?"var(--red)":r===2?"var(--accent)":"var(--text-mid)";return`<tr style="border-bottom:1px solid var(--border)">
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
      </tr>`}),i=Ri.map(s=>`<button onclick="window._krType='${s}';_krRenderBody()" style="padding:6px 14px;border-radius:20px;border:1px solid ${s===we?"var(--accent)":"var(--border)"};background:${s===we?"var(--accent-dim)":"transparent"};color:${s===we?"var(--accent)":"var(--text-dim)"};font-size:12px;cursor:pointer;font-weight:${s===we?700:400}">${s}</button>`).join(""),o=a.length?`<div style="font-size:11px;color:var(--text-dim);margin-bottom:12px">${t.length} denemeden derlendi · <b>${a.length}</b> farklı yanlış konu · 🔴 ≥3 tekrar kritik</div>
       <div style="overflow-x:auto">
       <table style="width:100%;border-collapse:collapse">
         <thead><tr style="border-bottom:2px solid var(--border)">
           <th style="padding:6px 10px;font-size:10px;color:var(--text-dim);text-align:left;text-transform:uppercase;letter-spacing:.5px">Ders</th>
           <th style="padding:6px 10px;font-size:10px;color:var(--text-dim);text-align:left;text-transform:uppercase;letter-spacing:.5px">Konu</th>
           <th style="padding:6px 10px;font-size:10px;color:var(--text-dim);text-align:center;text-transform:uppercase;letter-spacing:.5px">Tekrar</th>
           <th style="padding:6px 10px;font-size:10px;color:var(--text-dim);text-align:left;text-transform:uppercase;letter-spacing:.5px">Sıklık</th>
         </tr></thead>
         <tbody>${a.join("")}</tbody>
       </table></div>`:`<div style="text-align:center;padding:40px;color:var(--text-dim);font-size:13px">${t.length?"Bu denemeler için henüz konu işaretlenmemiş.":we+" tipi deneme kaydı yok."}</div>`;document.getElementById("konuRaporuBody").innerHTML=`
    <div style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:16px">${i}</div>
    ${o}`}window._krRenderBody=Ln;function Yi(e){Cn=e;const t=l.exams.find(n=>n.studentId===e&&n.examDetails&&Object.keys(n.examDetails).length);we=(t==null?void 0:t.type)||"TYT",Ln(),N("konuRaporuModal")}window.openKonuRaporu=Yi;function Hi(e){const t=l.exams.find(n=>n.id===e);document.getElementById("cmExamId").value=e,document.getElementById("cmText").value=(t==null?void 0:t.coachComment)||"",N("commentModal")}async function Ni(){const e=document.getElementById("cmExamId").value,t=document.getElementById("cmText").value.trim();await x.from("exams").update({coach_comment:t}).eq("id",e);const n=l.exams.find(a=>a.id===e);n&&(n.coachComment=t),K("commentModal"),Pe(),h("Yorum kaydedildi ✓")}async function Ki(e){await X("Bu denemeyi silmek istediğinizden emin misiniz?")&&(await x.from("exams").delete().eq("id",e),l.exams=l.exams.filter(t=>t.id!==e),Pe(),h("Silindi"))}function jn(){const e=document.getElementById("view-messages");e.innerHTML=`<div class="sh" style="margin-bottom:14px"><h2>Mesajlar</h2></div>
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
        ${l.msgThread?xe(l.msgThread,"coach"):'<div class="no-chat-sel">Öğrenci seçin</div>'}
      </div>
    </div>`,l.msgThread&&be()}async function Oi(e){l.msgThread=e;const t=(l.messages[e]||[]).filter(n=>n.from==="student"&&!n.read&&n._id).map(n=>n._id);t.length&&await x.from("messages").update({read:!0}).in("id",t),(l.messages[e]||[]).forEach(n=>{n.from==="student"&&(n.read=!0)}),document.getElementById("msgMain").innerHTML=xe(e,"coach"),document.querySelectorAll(".msg-contact").forEach(n=>n.classList.remove("active")),l.students.forEach((n,a)=>{var i;n.id===e&&((i=document.querySelectorAll(".msg-contact")[a])==null||i.classList.add("active"))}),be(),Nt()}function xe(e,t){const n=l.students.find(o=>o.id===e),i=(l.messages[e]||[]).map(o=>`<div class="msg-bubble ${t==="coach"&&o.from==="coach"||t==="student"&&o.from==="student"?"out":"in"}">${g(o.text)}<div class="msg-bubble-time">${o.time}</div></div>`).join("");return`<div class="msg-main-hd">
    <div style="width:30px;height:30px;border-radius:8px;background:${(n==null?void 0:n.color)||"#555"};color:#0f0e0c;font-family:'Inter',sans-serif;font-size:12px;font-weight:800;display:flex;align-items:center;justify-content:center">${(n==null?void 0:n.name[0])||"?"}</div>
    <div class="msg-main-hd-name">${g((n==null?void 0:n.name)||"")}</div>
  </div>
  <div class="msg-body" id="msgBody">${i||'<div class="empty"><p>Henüz mesaj yok</p></div>'}</div>
  <div class="msg-input-area">
    <textarea class="msg-input" id="msgInput" placeholder="Mesaj yaz..." onkeydown="if(event.key==='Enter'&&!event.shiftKey){event.preventDefault();sendMsg('${e}','${t}');}"></textarea>
    <button class="btn btn-accent" onclick="sendMsg('${e}','${t}')">Gönder</button>
  </div>`}async function Fi(e,t){var r,d;const n=document.getElementById("msgInput"),a=n.value.trim();if(!a)return;const i=b.coachId||((r=l.students.find(c=>c.id===e))==null?void 0:r.coachId)||((d=l.students.find(c=>c.id===b.studentId))==null?void 0:d.coachId),{data:o,error:s}=await x.from("messages").insert({student_id:e,coach_id:i,from_role:t,text:a,read:!1}).select().single();if(s){console.error("sendMsg error:",s),h("Hata: "+s.message);return}l.messages[e]||(l.messages[e]=[]),l.messages[e].push({_id:o.id,from:t,text:a,time:new Date().toLocaleTimeString("tr-TR",{hour:"2-digit",minute:"2-digit"}),read:!1}),n.value="",currentTab==="messages"&&(document.getElementById("msgMain").innerHTML=xe(e,"coach"),be()),currentTab==="smessages"&&(document.getElementById("msgMain").innerHTML=xe(e,"student"),be())}function be(){setTimeout(()=>{const e=document.getElementById("msgBody");e&&(e.scrollTop=e.scrollHeight)},60)}function pt(){var u;const e=document.getElementById("view-portal");if(!e)return;let t=l.students.find(y=>y.id===b.studentId);if(!t&&l.students.length>0&&(t=l.students[0]),!t){e.innerHTML=`<div style="text-align:center;padding:60px 20px;color:var(--text-mid)">
      <div style="font-size:36px;margin-bottom:12px">⏳</div>
      <p style="font-size:14px">Profil yükleniyor...</p>
    </div>`,setTimeout(()=>{l.students.length&&pt()},800);return}b.studentId||(b.studentId=t.id),l.activeStuId=t.id;const n=ze(),a=`${t.id}_${n}`,i=l.tasks[a]||[],o=i.filter(y=>y.done).length,s=l.appointments.filter(y=>y.studentId===t.id&&y.date>=n).sort((y,E)=>y.date.localeCompare(E.date))[0],r=(l.messages[t.id]||[]).filter(y=>y.from==="coach"&&!y.read).length,d=((u=l.konuMastery)==null?void 0:u[t.id])||{},c=[],p=new Date;p.setDate(p.getDate()-30),Object.entries(d).forEach(([y,E])=>{Object.entries(E).forEach(([I,v])=>{if(v.status==="td"||v.status==="not_started")return;const f=v.last_review_date?new Date(v.last_review_date):null,k=f?Math.floor((Date.now()-f.getTime())/864e5):999,S=v.stars<=2,_=k>20;(S||_)&&c.push({konu:I,subject:y,stars:v.stars,daysSince:k})})}),c.sort((y,E)=>y.stars-E.stars||E.daysSince-y.daysSince);const m=c.length>0?`
    <div class="card cp" style="border-color:rgba(239,68,68,.3)">
      <div class="portal-sec-title">🔄 Tekrar Gereken Konular <span style="font-size:11px;background:rgba(239,68,68,.12);color:#ef4444;padding:2px 8px;border-radius:99px;font-weight:700">${c.length}</span></div>
      ${c.slice(0,5).map(y=>{const E=Ae[y.stars];return y.daysSince<999&&`${y.daysSince}`,`<div style="display:flex;align-items:center;gap:10px;padding:7px 0;border-bottom:1px solid var(--border)">
          <span style="font-size:13px;color:${E.color};font-weight:800;white-space:nowrap">${"⭐".repeat(y.stars)||"○"}</span>
          <div style="flex:1;min-width:0">
            <div style="font-size:12px;font-weight:700;color:var(--text);overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${g(y.konu)}</div>
            <div style="font-size:10px;color:var(--text-dim)">${g(y.subject)} · Son: ${y.daysSince<999?y.daysSince+"g önce":"Hiç"}</div>
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
          ${i.map((y,E)=>`
            <div class="task-card task-${y.type} ${y.done?"done":""}" style="margin-bottom:6px">
              <div class="tc-check ${y.done?"on":""}" onclick="stuToggleTask('${n}',${E})"></div>
              <div class="tc-body">
                <div class="tc-type">${Ue(y.type)}${y.exam?" · "+y.exam:""}</div>
                <div class="tc-subject">${g(y.subject)}</div>
                <div class="tc-meta">${y.duration} dk${y.note?" · "+g(y.note):""}</div>
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
    </div>`}async function Ui(e,t){var s;const n=l.students.find(r=>r.id===b.studentId);if(!n)return;const a=`${n.id}_${e}`,i=(s=l.tasks[a])==null?void 0:s[t];if(!i)return;const o=!i.done;await x.from("tasks").update({done:o}).eq("id",i._id),i.done=o,pt()}function Me(){const e=l.students.find(r=>r.id===b.studentId);if(!e)return;const t=document.getElementById("view-sportal"),n=e.weekStart??0,a=V(l.weekOffset,n),i=U(a,6),o=ze();let s="";for(let r=0;r<7;r++){const d=U(a,r),c=Y(d),p=c===o,m=`${e.id}_${c}`,u=l.tasks[m]||[],y=u.reduce((f,k)=>f+Number(k.duration),0),E=u.reduce((f,k)=>f+(k.done?Number(k.duration):0),0);DAYS_TR[(n+r)%7];const I=u.map((f,k)=>`
      <div class="task-card task-${f.type} ${f.done?"done":""}" onclick="openTaskDetail('${c}',${k},'student')" style="cursor:pointer">
        <div class="tc-check ${f.done?"on":""}" onclick="event.stopPropagation();stuToggleTask2('${c}',${k})"></div>
        <div class="tc-body">
          <div class="tc-type">${Ue(f.type)}${f.exam?" · "+f.exam:""}</div>
          <div class="tc-subject">${g(f.subject)}</div>
          <div class="tc-meta">${f.duration} dk</div>
        </div>
      </div>`).join(""),v=["Pzt","Sal","Çar","Per","Cum","Cmt","Paz"][(n+r)%7];s+=`<div class="day-col ${p?"today":""}">
      <div class="day-hd">
        <div><div class="day-name-lbl">${v}</div><div class="day-num">${d.getDate()}</div></div>
        <span class="day-badge" style="font-size:8.5px">${Ne(E)} / ${Ne(y)}</span>
      </div>
      <div class="day-tasks-list">${I||'<div class="empty" style="padding:8px 0"><p style="font-size:11px">Görev yok</p></div>'}</div>
    </div>`}t.innerHTML=`
    <div class="week-nav" style="margin-bottom:14px">
      <button class="btn btn-ghost btn-sm" onclick="chWeekS(-1)">← Önceki</button>
      <span class="week-lbl">${a.getDate()} ${MONTHS_TR[a.getMonth()]} — ${i.getDate()} ${MONTHS_TR[i.getMonth()]} ${i.getFullYear()}</span>
      <button class="btn btn-ghost btn-sm" onclick="chWeekS(1)">Sonraki →</button>
      <button class="btn btn-ghost btn-sm" onclick="S.weekOffset=0;saveUI();renderSPortal()">Bugün</button>
    </div>
    <div class="week-grid">${s}</div>`}async function Gi(e,t){var s;const n=l.students.find(r=>r.id===b.studentId);if(!n)return;const a=`${n.id}_${e}`,i=(s=l.tasks[a])==null?void 0:s[t];if(!i)return;const o=!i.done;await x.from("tasks").update({done:o}).eq("id",i._id),i.done=o,Me()}function qi(e){l.weekOffset+=e,ue(),Me()}function Rt(e,t,n){var y,E,I,v;const i=`${b.role==="student"?b.studentId:l.activeStuId}_${e}`,o=(y=l.tasks[i])==null?void 0:y[t];if(!o)return;let s=document.getElementById("taskDetailModal");s||(s=document.createElement("div"),s.id="taskDetailModal",s.className="modal-bg",document.body.appendChild(s),s.addEventListener("click",f=>{f.target===s&&s.classList.remove("open")}));const r={soru:"var(--blue)",konu:"#c084fc",deneme:"var(--accent)",diger:"var(--text-mid)"},d={soru:"Soru Bankası",konu:"Konu Anlatımı",deneme:"Deneme",diger:"Diğer"},c=r[o.type]||"var(--accent)",p=o.type==="konu",m=o.task_items||[];let u="";m.length>0?u=`<div style="margin-bottom:14px">
      <div style="font-size:11px;font-weight:700;color:var(--text-dim);text-transform:uppercase;letter-spacing:.5px;margin-bottom:8px">${p?"Videolar":"Testler"} (${m.length})</div>
      <div style="background:var(--surface2);border:1px solid var(--border);border-radius:10px;overflow:hidden;max-height:200px;overflow-y:auto">
        ${m.map((f,k)=>`
          <label style="display:flex;align-items:center;gap:10px;padding:8px 12px;border-bottom:1px solid var(--border);${k===m.length-1?"border-bottom:none":""};cursor:${n==="coach"?"default":"pointer"};transition:background .1s"
            ${n==="coach"?"":`onmouseover="this.style.background='var(--surface3)'" onmouseout="this.style.background=''"`}>
            <input type="checkbox" ${f.done?"checked":""} ${n==="coach"?"disabled":""} onchange="toggleDetailItem('${e}',${t},${k},'${n}')"
              style="width:16px;height:16px;accent-color:var(--accent);cursor:${n==="coach"?"default":"pointer"};flex-shrink:0;">
            <div style="width:20px;height:20px;border-radius:6px;background:${c}22;color:${c};font-size:10px;font-weight:800;display:flex;align-items:center;justify-content:center;flex-shrink:0;margin-left:4px">${k+1}</div>
            <div style="flex:1;min-width:0">
              <div style="font-size:13px;font-weight:600;line-height:1.4;${f.done?"text-decoration:line-through;color:var(--text-dim);":""}">${g(f.label||`Ders ${k+1}`)}</div>
              <div style="font-size:11px;color:var(--text-mid);margin-top:2px">⏱ ${f.soru>0?p?f.soru+" dk":f.soru+" soru":"?"}</div>
            </div>
            ${f.url?`<a href="${g(f.url)}" target="_blank" onclick="event.stopPropagation()"
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

    <!-- Tamamlandı toggle -->
    <div id="tdDoneBox" style="background:var(--surface2);border:1.5px solid ${o.done?"var(--green)":"var(--border)"};border-radius:11px;padding:12px 16px;display:flex;align-items:center;justify-content:space-between;margin-bottom:16px;cursor:${n==="coach"?"default":"pointer"};transition:all .2s" ${n==="coach"?"":`onclick="toggleTaskDetail('${e}',${t},'${n}')"`}>
      <div style="font-size:13px;font-weight:700;color:${o.done?"var(--green)":"var(--text)"}">${o.done?"✓ Tamamlandı":"Tamamlandı mı?"}</div>
      <div style="width:22px;height:22px;border-radius:6px;border:2px solid ${o.done?"var(--green)":"var(--border)"};background:${o.done?"var(--green)":"transparent"};display:flex;align-items:center;justify-content:center;font-size:13px;transition:all .2s">${o.done?"✓":""}</div>
    </div>

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
          <input type="number" id="tdYanlis" min="0" value="${((I=o.student_result)==null?void 0:I.yanlis)??""}" placeholder="0" ${n==="coach"?"disabled":""}
            style="width:100%;padding:8px;background:var(--surface);border:1.5px solid var(--border);border-radius:8px;color:var(--text);font-size:15px;font-weight:700;text-align:center;box-sizing:border-box">
        </div>
        <div>
          <div style="font-size:10px;font-weight:700;color:var(--text-dim);margin-bottom:4px">— Boş</div>
          <input type="number" id="tdBos" min="0" value="${((v=o.student_result)==null?void 0:v.bos)??""}" placeholder="0" ${n==="coach"?"disabled":""}
            style="width:100%;padding:8px;background:var(--surface);border:1.5px solid var(--border);border-radius:8px;color:var(--text);font-size:15px;font-weight:700;text-align:center;box-sizing:border-box">
        </div>
      </div>
      ${o.student_result?`<div style="font-size:11px;color:var(--text-dim);margin-top:8px;text-align:right">Son güncelleme: ${new Date(o.student_result.ts||Date.now()).toLocaleDateString("tr-TR")}</div>`:""}
    </div>
    ${(()=>{var k;const f=Xa(o.exam,o.subject);return f?(ie=[...((k=o.student_result)==null?void 0:k.yanlis_konular)||[]],`<div style="background:var(--surface2);border:1px solid var(--border);border-radius:11px;padding:14px 16px;margin-bottom:14px">
        <div style="font-size:11px;font-weight:700;color:var(--text-dim);text-transform:uppercase;letter-spacing:.5px;margin-bottom:10px">📌 Yanlış Konular</div>
        <div style="display:flex;flex-wrap:wrap;gap:0">${f.map(S=>{const _=ie.includes(S);return`<span ${n==="coach"?"":`onclick="toggleKonuChip(this,'${S.replace(/'/g,"\\'")}')"`}
            style="display:inline-block;padding:5px 11px;margin:3px;border-radius:20px;font-size:11px;font-weight:600;cursor:${n==="coach"?"default":"pointer"};user-select:none;border:1px solid ${_?"var(--red)":"var(--border)"};background:${_?"rgba(255,92,122,.12)":"var(--surface)"};color:${_?"var(--red)":"var(--text-mid)"}">
            ${g(S)}</span>`}).join("")}</div>
      </div>`):""})()}
    `:""}

    <!-- Not -->
    <div class="field">
      <label>Notum</label>
      <textarea id="tdNote" placeholder="Zorlandığım konular, dikkatimi çeken şeyler..." style="min-height:72px" ${n==="coach"?"disabled":""}>${o.student_note||""}</textarea>
    </div>

    <div style="display:flex; gap:10px; margin-top:12px">
      ${n==="coach"?`<button class="btn btn-ghost" style="flex:1; justify-content:center; padding:12px; font-weight:700;" onclick="cm('taskDetailModal'); openCoachTaskEdit('${e}',${t})">⚙ Düzenle</button>
           <button class="btn btn-accent" style="flex:2; justify-content:center; padding:12px; font-weight:700;" onclick="cm('taskDetailModal')">Kapat</button>`:`<button class="btn btn-accent" style="flex:1; justify-content:center; padding:12px; font-weight:700;" onclick="saveTaskDetail('${e}',${t},'${n}')">Kaydet</button>`}
    </div>
  </div>`,N("taskDetailModal")}async function Wi(e,t,n){var s;if(n==="coach")return;const i=`${b.role==="student"?b.studentId:l.activeStuId}_${e}`,o=(s=l.tasks[i])==null?void 0:s[t];o&&(o.done=!o.done,o.task_items&&Array.isArray(o.task_items)&&o.task_items.forEach(r=>{r.done=o.done}),await x.from("tasks").update({done:o.done,task_items:o.task_items||null}).eq("id",o._id),Rt(e,t,n),n==="student"?Me():G())}async function Vi(e,t,n,a){var d;if(a==="coach")return;const o=`${b.role==="student"?b.studentId:l.activeStuId}_${e}`,s=(d=l.tasks[o])==null?void 0:d[t];if(!s||!s.task_items)return;s.task_items[n].done=!s.task_items[n].done;const r=s.task_items.every(c=>c.done);s.done=r,z(!0),await x.from("tasks").update({task_items:s.task_items,done:s.done}).eq("id",s._id),z(!1),Rt(e,t,a),a==="student"?Me():G(),h("İlerleme kaydedildi ✓")}function Zi(e,t){var i,o,s;e.closest("div").querySelectorAll("button[data-speed]").forEach(r=>{const d=r.dataset.speed===t;r.style.borderColor=d?"var(--accent)":"var(--border)",r.style.background=d?"var(--accent-dim)":"var(--surface2)",r.style.color=d?"var(--accent)":"var(--text-mid)"}),document.getElementById("tdSpeed").value=t;const n=parseFloat(t),a=document.getElementById("speedCalc");if(a){const r=parseInt(((s=(o=(i=a.closest("[id=speedInfo]"))==null?void 0:i.textContent)==null?void 0:o.match(/Toplam (\d+) dk/))==null?void 0:s[1])||0);a.textContent=Math.ceil(r/n)+" dk",document.getElementById("tdDuration").value=Math.ceil(r/n)}}async function Ji(e,t,n){var m,u;if(n==="coach")return;const i=`${b.role==="student"?b.studentId:l.activeStuId}_${e}`,o=(m=l.tasks[i])==null?void 0:m[t];if(!o)return;const s=((u=document.getElementById("tdNote"))==null?void 0:u.value.trim())||"",r={student_note:s},d=document.getElementById("tdDogru"),c=document.getElementById("tdYanlis"),p=document.getElementById("tdBos");if(d!==null){const y=parseInt(d.value)||0,E=parseInt(c.value)||0,I=parseInt(p.value)||0;(y>0||E>0||I>0||ie.length>0)&&(r.student_result={dogru:y,yanlis:E,bos:I,yanlis_konular:[...ie],ts:new Date().toISOString()},o.student_result=r.student_result)}await x.from("tasks").update(r).eq("id",o._id),o.student_note=s,K("taskDetailModal"),h("Kaydedildi ✓"),n==="student"?Me():G()}function Yt(){const e=l.students.find(o=>o.id===b.studentId);if(!e)return;const t=document.getElementById("view-sexams"),n=[...l.exams].filter(o=>o.studentId===e.id).sort((o,s)=>s.date.localeCompare(o.date));let a="";if(n.length>1){const o=[...n].sort((r,d)=>r.date.localeCompare(d.date)).slice(-8),s=Math.max(...o.map(r=>(EXAM_DEFS[r.type]||[]).reduce((c,p)=>{var m;return c+Number(((m=r.nets)==null?void 0:m[p])||0)},0)),1);a=`<div class="card cp" style="margin-bottom:16px">
      <div style="font-family:'Inter',sans-serif;font-size:15px;font-weight:700;margin-bottom:12px">📈 Net Gelişimim</div>
      <div class="bar-chart">
        ${o.map(r=>{const c=(EXAM_DEFS[r.type]||[]).reduce((m,u)=>{var y;return m+Number(((y=r.nets)==null?void 0:y[u])||0)},0),p=Math.max(Math.round(c/s*100),4);return`<div class="bar-wrap">
            <div class="bar-val">${c.toFixed(0)}</div>
            <div class="bar" style="height:${p}%;background:${e.color}"></div>
            <div class="bar-label">${g(r.name.replace("Deneme ","#").replace("TYT ","").replace("AYT ",""))}</div>
          </div>`}).join("")}
      </div>
    </div>`}const i=n.length?n.map(o=>{const s=EXAM_DEFS[o.type]||[],r=s.reduce((c,p)=>{var m;return c+Number(((m=o.nets)==null?void 0:m[p])||0)},0).toFixed(1),d=s.map(c=>{var m;const p=Number(((m=o.nets)==null?void 0:m[c])||0);return`<div class="net-box"><div class="net-label">${c}</div><div class="net-val ${It(p)}">${p}</div></div>`}).join("");return`<div class="exam-item">
      <div class="exam-header">
        <div><div class="exam-name">${g(o.name)}</div><div class="exam-date">${new Date(o.date+"T12:00").toLocaleDateString("tr-TR",{day:"numeric",month:"long",year:"numeric"})}</div></div>
        <button class="btn btn-ghost btn-xs" onclick="openStudentExamModal('${o.id}')">✏️ Düzenle</button>
      </div>
      ${o.note?`<div style="font-size:12px;color:var(--text-mid);margin-bottom:8px;font-style:italic">"${g(o.note)}"</div>`:""}
      <div class="nets-grid">${d}</div>
      <div style="margin-top:8px"><div style="font-family:'Inter',sans-serif;font-size:18px;font-weight:800">Toplam: ${r}</div></div>
      ${Dn(o,n)}
      ${o.coachComment?`<div class="coach-comment-box"><strong>Koç Yorumu</strong>${g(o.coachComment)}</div>`:""}
    </div>`}).join(""):'<div class="empty"><p>Henüz deneme sonucu eklemediniz.<br>İlk sonucunuzu girin!</p></div>';t.innerHTML=`
    <div class="sh"><h2>Denemelerim</h2><button class="btn btn-accent" onclick="openStudentExamModal()">+ Sonuç Gir</button></div>
    ${a}${i}`}function Pn(e){var n;const t=e?l.exams.find(a=>a.id===e):null;document.getElementById("emTitle").textContent=t?"Sonucu Düzenle":"Deneme Sonucu Gir",document.getElementById("emId").value=e||"",document.getElementById("emName").value=(t==null?void 0:t.name)||"",document.getElementById("emDate").value=(t==null?void 0:t.date)||Y(new Date),document.getElementById("emStudentWrap").style.display="none",document.getElementById("emStudent").innerHTML=`<option value="${b.studentId}">${g(((n=l.students.find(a=>a.id===b.studentId))==null?void 0:n.name)||"")}</option>`,document.getElementById("emExamType").value=(t==null?void 0:t.type)||"TYT",document.getElementById("emNote").value=(t==null?void 0:t.note)||"",Ht(),t!=null&&t.examDetails&&Object.entries(t.examDetails).forEach(([a,i])=>{const o=document.getElementById(`ed_${a}_d`),s=document.getElementById(`ed_${a}_y`),r=document.getElementById(`ed_${a}_b`);o&&(o.value=i.dogru||0,s.value=i.yanlis||0,r.value=i.bos||0),Z[a]={...i},Rn(a),(i.yanlis_konular||[]).forEach(d=>{document.querySelectorAll(`#konu_acc_${a.replace(/\s/g,"_")} span`).forEach(p=>{p.textContent.trim()===d&&(p.style.borderColor="var(--red)",p.style.background="rgba(255,92,122,.12)",p.style.color="var(--red)")})})}),N("examModal")}function Xi(e){document.getElementById("emStudentWrap").style.display="",document.getElementById("emStudent").innerHTML=l.students.map(t=>`<option value="${t.id}">${g(t.name)}</option>`).join(""),Pn(e),document.getElementById("emStudentWrap").style.display=""}let Z={};function Qi(e,t,n){Z[t]||(Z[t]={dogru:0,yanlis:0,bos:0,yanlis_konular:[]});const a=Z[t].yanlis_konular,i=a.indexOf(n);i===-1?(a.push(n),e.style.borderColor="var(--red)",e.style.background="rgba(255,92,122,.12)",e.style.color="var(--red)"):(a.splice(i,1),e.style.borderColor="var(--border)",e.style.background="var(--surface)",e.style.color="var(--text-mid)")}window.toggleExamKonuChip=Qi;function Rn(e){var c,p,m,u;const t=parseInt((c=document.getElementById(`ed_${e}_d`))==null?void 0:c.value)||0,n=parseInt((p=document.getElementById(`ed_${e}_y`))==null?void 0:p.value)||0,a=parseInt((m=document.getElementById(`ed_${e}_b`))==null?void 0:m.value)||0;Z[e]||(Z[e]={yanlis_konular:[]}),Z[e].dogru=t,Z[e].yanlis=n,Z[e].bos=a;const i=document.getElementById("emExamType").value,o=((u=EXAM_SORU[i])==null?void 0:u[e])||40,s=t+n+a,r=document.getElementById(`ed_${e}_net`),d=document.getElementById(`ed_${e}_warn`);r&&(r.textContent=Math.max(0,t-n/4).toFixed(2)),d&&(d.style.display=s>o?"":"none"),Pi()}window.updateExamNet=Rn;function eo(e){const t=document.getElementById(`konu_acc_${e.replace(/\s/g,"_")}`);t&&(t.style.display=t.style.display==="none"?"":"none")}window.toggleKonuAccordion=eo;function Ht(){const e=document.getElementById("emExamType").value,t=EXAM_DEFS[e]||[];Z={};const n=document.getElementById("emPuanDisplay");n&&(n.innerHTML=""),document.getElementById("netInputsWrap").innerHTML=t.map(a=>{var d;const i=((d=EXAM_SORU[e])==null?void 0:d[a])||40,s=(EXAM_KONU_MAP[`${e}_${a}`]||[]).flatMap(c=>Ke[c]||[]),r=s.length?`
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
    </div>`}).join("")}async function to(){var r,d;const e=document.getElementById("emName").value.trim();if(!e)return h("Sınav adı girin!");const t=document.getElementById("emExamType").value,n={};(EXAM_DEFS[t]||[]).forEach(c=>{const p=Z[c]||{};n[c]=Math.max(0,(p.dogru||0)-(p.yanlis||0)/4)});const a=document.getElementById("emId").value,i=document.getElementById("emStudent").value,o={name:e,date:document.getElementById("emDate").value,student_id:i,coach_id:b.coachId||((r=l.students.find(c=>c.id===i))==null?void 0:r.coachId),exam_type:t,nets:n,exam_details:Z,student_note:document.getElementById("emNote").value.trim()};async function s(c,p,m){var u,y,E;if(p){const{error:I}=await x.from("exams").update(c).eq("id",m);if((u=I==null?void 0:I.message)!=null&&u.includes("exam_details")){const{exam_details:v,...f}=c;return x.from("exams").update(f).eq("id",m)}return{error:I}}else{const I=await x.from("exams").insert(c).select().single();if((E=(y=I.error)==null?void 0:y.message)!=null&&E.includes("exam_details")){const{exam_details:v,...f}=c;return x.from("exams").insert(f).select().single()}return I}}if(a){const{error:c}=await s(o,!0,a);if(c)return h("Hata: "+c.message);const p=l.exams.find(m=>m.id===a);p&&Object.assign(p,{name:o.name,date:o.date,studentId:i,type:t,nets:n,examDetails:Z,note:o.student_note}),h("Güncellendi ✓")}else{const{data:c,error:p}=await s(o,!1,null);if(p)return h("Hata: "+p.message);l.exams.push({id:c.id,studentId:c.student_id,name:c.name,date:c.date,type:c.exam_type,nets:c.nets||{},examDetails:c.exam_details||{},note:c.student_note,coachComment:""}),h("Deneme eklendi ✓")}if(K("examModal"),b.role==="student"?Yt():Pe(),b.role==="coach"||b.role==="developer")try{const c=[];Object.values(Z||{}).forEach(m=>{var u;(u=m==null?void 0:m.yanlis_konular)!=null&&u.length&&c.push(...m.yanlis_konular)}),ie!=null&&ie.length&&c.push(...ie);const p=[...new Set(c)];if(p.length>0&&i){const m=((d=l.konuMastery)==null?void 0:d[i])||{},u=[];if(Object.entries(m).forEach(([y,E])=>{Object.entries(E).forEach(([I,v])=>{p.includes(I)&&(v.status==="td"?u.push({konu:I,subject:y,type:"td_broken",stars:v.stars}):v.stars>=5&&u.push({konu:I,subject:y,type:"high_star_wrong",stars:v.stars}))})}),u.length>0){const y=u.filter(v=>v.type==="td_broken"),E=u.filter(v=>v.type==="high_star_wrong");let I="⚠️ Mastery Önerileri: ";y.length>0&&(I+=`${y.map(v=>v.konu).join(", ")} TD'den düştü! `),E.length>0&&(I+=`${E.map(v=>v.konu).join(", ")} için yıldız düşürmeyi düşün.`),setTimeout(()=>{const v=document.createElement("div");v.style.cssText="position:fixed;bottom:80px;right:16px;max-width:360px;background:var(--surface);border:1.5px solid var(--accent);border-radius:12px;padding:14px 16px;box-shadow:var(--shadow-lg);z-index:99999;animation:slideIn .3s ease",v.innerHTML=`
              <div style="display:flex;align-items:flex-start;gap:10px">
                <span style="font-size:20px;flex-shrink:0">⚠️</span>
                <div style="flex:1">
                  <div style="font-size:13px;font-weight:800;margin-bottom:6px">Deneme → Konu Mastery Önerisi</div>
                  ${y.length>0?`<div style="font-size:11px;color:var(--red);margin-bottom:4px">🔴 TD'den düşenler: <b>${y.map(f=>f.konu).join(", ")}</b></div>`:""}
                  ${E.length>0?`<div style="font-size:11px;color:var(--accent)">🟡 Yıldız düşürmeyi düşün: <b>${E.map(f=>f.konu).join(", ")}</b></div>`:""}
                  <div style="font-size:10px;color:var(--text-dim);margin-top:6px">Değişiklik yapmak için Konu Haritası'na git</div>
                </div>
                <button onclick="this.parentElement.parentElement.remove()" style="border:none;background:none;color:var(--text-dim);cursor:pointer;font-size:16px;line-height:1;flex-shrink:0">×</button>
              </div>`,document.body.appendChild(v),setTimeout(()=>v.remove(),12e3)},600)}}}catch(c){console.error("[mastery suggestion]",c)}}async function Tt(){const e=l.students.find(a=>a.id===b.studentId);if(!e)return;const t=(l.messages[e.id]||[]).filter(a=>a.from==="coach"&&!a.read&&a._id).map(a=>a._id);t.length&&await x.from("messages").update({read:!0}).in("id",t),(l.messages[e.id]||[]).forEach(a=>{a.from==="coach"&&(a.read=!0)});const n=document.getElementById("view-smessages");n.innerHTML=`<div class="sh" style="margin-bottom:14px"><h2>💬 Koçuma Yaz</h2></div>
    <div class="card" style="max-width:700px;overflow:hidden">
      <div class="msg-main" id="msgMain" style="display:flex;flex-direction:column;min-height:420px">
        ${xe(e.id,"student")}
      </div>
    </div>`,be()}let tt=null;function Nt(){Kt();const e=b.role==="coach"||b.role==="developer"?l.msgThread:b.studentId;e&&(tt=x.channel("messages_"+e).on("postgres_changes",{event:"INSERT",schema:"public",table:"messages",filter:`student_id=eq.${e}`},t=>{const n=t.new;l.messages[e]||(l.messages[e]=[]),!l.messages[e].find(a=>a._id===n.id)&&(l.messages[e].push({_id:n.id,from:n.from_role,text:n.text,read:n.read,time:new Date(n.created_at).toLocaleTimeString("tr-TR",{hour:"2-digit",minute:"2-digit"})}),currentTab==="messages"&&l.msgThread===e&&(document.getElementById("msgMain").innerHTML=xe(e,"coach"),be()),currentTab==="smessages"&&(document.getElementById("msgMain").innerHTML=xe(e,"student"),be()))}).subscribe())}function Kt(){tt&&(x.removeChannel(tt),tt=null)}async function no(){var e,t;await x.from("workspaces").upsert({coach_id:b.coachId,brand_name:((e=l.workspace)==null?void 0:e.brand_name)||"Akademi",brand_color:((t=l.workspace)==null?void 0:t.brand_color)||"#f0a500",onboarding_done:!1},{onConflict:"coach_id"}),l.workspace&&(l.workspace.onboarding_done=!1),Kn()}window.devResetOnboarding=no;async function Yn(){const e=document.getElementById("view-dev-dashboard");e.innerHTML='<div class="sh"><h2>🖥️ Sistem Dashboard</h2></div><div class="empty"><p>Yükleniyor...</p></div>';const[t,n,a,i,o,s]=await Promise.all([x.from("users").select("id,role,created_at"),x.from("tasks").select("id,done,created_at"),x.from("exams").select("id,created_at"),x.from("messages").select("id,created_at"),x.from("tickets").select("id,status,created_at"),x.from("payments").select("id,amount,status,payment_date")]),r=t.data||[],d=n.data||[],c=a.data||[],p=i.data||[],m=o.data||[],u=s.data||[],y=r.filter(_=>_.role==="coach").length,E=r.filter(_=>_.role==="student").length,I=u.filter(_=>_.status==="completed").reduce((_,A)=>_+Number(A.amount),0),v=m.filter(_=>_.status==="open").length,f=Array.from({length:7},(_,A)=>{const $=new Date;return $.setDate($.getDate()-6+A),Y($)}),k=f.map(_=>d.filter(A=>{var $;return($=A.created_at)==null?void 0:$.startsWith(_)}).length),S=Math.max(...k,1);e.innerHTML=`
    <div class="sh"><h2>🖥️ Sistem Dashboard</h2>
      <div style="display:flex;gap:8px;align-items:center">
        <span style="font-size:12px;color:var(--text-dim)">${new Date().toLocaleDateString("tr-TR",{weekday:"long",day:"numeric",month:"long",year:"numeric"})}</span>
        <button class="btn btn-ghost btn-sm" onclick="devResetOnboarding()" title="Onboarding sihirbazını yeniden başlat">🧙 Sihirbazı Test Et</button>
      </div>
    </div>

    <div class="stats-row" style="margin-bottom:20px">
      <div class="stat-card"><div class="stat-label">Toplam Öğrenci</div><div class="stat-val" style="color:var(--blue)">${E}</div></div>
      <div class="stat-card"><div class="stat-label">Toplam Koç</div><div class="stat-val" style="color:var(--accent)">${y}</div></div>
      <div class="stat-card"><div class="stat-label">Toplam Görev</div><div class="stat-val">${d.length}</div><div style="font-size:11px;color:var(--green);margin-top:3px">✓ ${d.filter(_=>_.done).length} tamamlandı</div></div>
      <div class="stat-card"><div class="stat-label">Toplam Deneme</div><div class="stat-val">${c.length}</div></div>
      <div class="stat-card"><div class="stat-label">Toplam Mesaj</div><div class="stat-val">${p.length}</div></div>
      <div class="stat-card"><div class="stat-label">Toplam Gelir</div><div class="stat-val" style="color:var(--green)">${I.toLocaleString("tr-TR")} ₺</div></div>
      <div class="stat-card"><div class="stat-label">Açık Ticket</div><div class="stat-val" style="color:${v>0?"var(--red)":"var(--green)"}">${v}</div></div>
    </div>

    <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px">
      <div class="card cp">
        <div style="font-family:'Inter',sans-serif;font-size:14px;font-weight:700;margin-bottom:14px">📅 Son 7 Gün Görev Aktivitesi</div>
        <div style="display:flex;align-items:flex-end;gap:6px;height:80px">
          ${f.map((_,A)=>`<div style="flex:1;display:flex;flex-direction:column;align-items:center;gap:3px">
            <div style="font-size:10px;color:var(--text-mid);font-weight:600">${k[A]}</div>
            <div style="width:100%;background:var(--accent);border-radius:3px 3px 0 0;height:${Math.max(Math.round(k[A]/S*100),4)}%;min-height:3px;opacity:.8"></div>
            <div style="font-size:9px;color:var(--text-dim)">${new Date(_+"T12:00").toLocaleDateString("tr-TR",{day:"numeric",month:"short"})}</div>
          </div>`).join("")}
        </div>
      </div>
      <div class="card cp">
        <div style="font-family:'Inter',sans-serif;font-size:14px;font-weight:700;margin-bottom:14px">🎫 Son Ticket'lar</div>
        ${m.slice(-5).reverse().map(_=>`
          <div style="display:flex;justify-content:space-between;align-items:center;padding:7px 0;border-bottom:1px solid var(--border);font-size:12px">
            <span style="color:var(--text-mid)">#${_.id.slice(0,6)}</span>
            <span class="role-badge" style="background:${_.status==="open"?"var(--red-dim)":_.status==="resolved"?"var(--green-dim)":"var(--accent-dim)"};color:${_.status==="open"?"var(--red)":_.status==="resolved"?"var(--green)":"var(--accent)"}">${_.status}</span>
          </div>`).join("")||'<div style="font-size:12px;color:var(--text-dim)">Ticket yok</div>'}
      </div>
    </div>`}async function We(){const e=document.getElementById("view-dev-users"),{data:t}=await x.from("users").select("*").order("created_at"),n=new Date;function a(i){if(i.role!=="coach"&&i.role!=="developer")return'<span style="color:var(--text-dim);font-size:11px">—</span>';const o=i.plan||"trial";if(o==="active")return'<span style="font-size:10px;font-weight:800;color:#10b981;background:rgba(16,185,129,.12);border:1px solid rgba(16,185,129,.3);border-radius:4px;padding:2px 7px">AKTİF</span>';if(o==="paused")return'<span style="font-size:10px;font-weight:700;color:#f59e0b;background:rgba(245,158,11,.12);border:1px solid rgba(245,158,11,.3);border-radius:4px;padding:2px 7px">DURAKLATILDI</span>';if(o==="cancelled")return'<span style="font-size:10px;font-weight:700;color:#ef4444;background:rgba(239,68,68,.1);border:1px solid rgba(239,68,68,.2);border-radius:4px;padding:2px 7px">İPTAL</span>';const s=i.trial_ends_at?new Date(i.trial_ends_at):new Date(new Date(i.created_at).getTime()+14*24*60*60*1e3),r=Math.ceil((s-n)/864e5);return r<=0?'<span style="font-size:10px;font-weight:700;color:#ef4444;background:rgba(239,68,68,.1);border:1px solid rgba(239,68,68,.2);border-radius:4px;padding:2px 7px">SÜRESİ DOLDU</span>':`<span style="font-size:10px;font-weight:700;color:#6366f1;background:rgba(99,102,241,.1);border:1px solid rgba(99,102,241,.2);border-radius:4px;padding:2px 7px">DENEME · ${r}g</span>`}e.innerHTML=`
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
    </div>`}async function ao(e){const t=e?(await x.from("users").select("*").eq("id",e).single()).data:null;document.getElementById("smTitle").textContent=t?"Kullanıcıyı Düzenle":"Yeni Kullanıcı",document.getElementById("smId").value=e||"",document.getElementById("smName").value=(t==null?void 0:t.full_name)||"",document.getElementById("smTarget").value=(t==null?void 0:t.target)||"",document.getElementById("smUsername").value=(t==null?void 0:t.username)||"",document.getElementById("smPass").value=(t==null?void 0:t.password_hash)||"",document.getElementById("smWeekStart").value=(t==null?void 0:t.week_start)||0,document.getElementById("smProg").value=(t==null?void 0:t.progress)||0,document.getElementById("smProgVal").textContent=((t==null?void 0:t.progress)||0)+"%",document.querySelectorAll(".color-opt").forEach(a=>a.classList.toggle("sel",a.dataset.c===((t==null?void 0:t.color)||"#f0a500")));let n=document.getElementById("smRoleField");n||(n=document.createElement("div"),n.id="smRoleField",n.className="field",n.innerHTML='<label>Rol</label><select id="smRole" style="width:100%;background:var(--surface2);border:1.5px solid var(--border);border-radius:9px;padding:10px 13px;font-size:14px;font-family:inherit;color:var(--text);outline:none"><option value="student">Öğrenci</option><option value="coach">Koç</option><option value="developer">Developer</option></select>',document.getElementById("smName").closest(".modal").insertBefore(n,document.getElementById("smName").parentElement)),document.getElementById("smRole").value=(t==null?void 0:t.role)||"student",document.querySelector("#studentModal .btn-accent").setAttribute("onclick","saveStudentDev()"),N("studentModal")}async function io(e,t){if(await X(`"${t}" kullanıcısını kalıcı olarak silmek istediğinizden emin misiniz?

Bu işlem geri alınamaz.`)){z(!0);try{const{data:{session:n}}=await x.auth.getSession(),a=await fetch("/api/delete-user",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${(n==null?void 0:n.access_token)||""}`},body:JSON.stringify({targetUserId:e})}),i=await a.json();if(!a.ok)throw new Error(i.error||"Sunucu hatası");h(`🗑 ${t} silindi`),We()}catch(n){h("Hata: "+n.message)}finally{z(!1)}}}function oo(e,t,n,a){let i=document.getElementById("planMgmtModal");i||(i=document.createElement("div"),i.id="planMgmtModal",i.className="modal-bg",i.innerHTML=`<div class="modal" style="max-width:400px">
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
    </div>`,document.body.appendChild(i),i.addEventListener("click",o=>{o.target===i&&i.classList.remove("open")}),document.getElementById("planStatus").addEventListener("change",function(){document.getElementById("trialEndField").style.display=this.value==="trial"?"":"none"})),document.getElementById("planModalTitle").textContent=`Plan Yönet — ${t}`,document.getElementById("planUserId").value=e,document.getElementById("planStatus").value=n||"trial",document.getElementById("trialEndField").style.display=n==="trial"||!n?"":"none",a?document.getElementById("planTrialEnd").value=a.split("T")[0]:document.getElementById("planTrialEnd").value="",N("planMgmtModal")}async function so(){const e=document.getElementById("planUserId").value,t=document.getElementById("planStatus").value,n=document.getElementById("planTrialEnd").value,a={plan:t};t==="trial"&&n?a.trial_ends_at=n:t!=="trial"&&(a.trial_ends_at=null),z(!0);const{error:i}=await x.from("users").update(a).eq("id",e);if(z(!1),i)return h("Hata: "+i.message);h(`Plan güncellendi: ${{trial:"Deneme",active:"Aktif",paused:"Duraklatıldı",cancelled:"İptal"}[t]||t} ✓`),K("planMgmtModal"),We()}let He=[];async function Ve(){const e=document.getElementById("view-dev-resources"),{data:t}=await x.from("resources").select("*").order("resource_type,exam_type,subject,name");He=t||[];const n=He.filter(i=>i.resource_type!=="playlist"),a=He.filter(i=>i.resource_type==="playlist");e.innerHTML=`
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
      <div class="stat-card"><div class="stat-label">Toplam Kaynak</div><div class="stat-val">${He.length}</div></div>
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
    </div>`}function ro(){let e=document.getElementById("playlistModal");e||(e=document.createElement("div"),e.id="playlistModal",e.className="modal-bg",document.body.appendChild(e),e.addEventListener("click",t=>{t.target===e&&e.classList.remove("open")})),e.innerHTML=`<div class="modal modal-lg">
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
  </div>`,N("playlistModal")}async function lo(){const e=document.getElementById("ytPlaylistUrl").value.trim(),t=document.getElementById("ytStatus");if(!e)return t.innerHTML='<span style="color:var(--red)">⚠️ Playlist URL giriniz</span>';const n=e.match(/[?&]list=([^&]+)/);if(!n)return t.innerHTML='<span style="color:var(--red)">⚠️ Geçersiz URL — "list=..." parametresi bulunamadı</span>';const a=n[1];t.innerHTML="⏳ Yükleniyor...";try{let i=[],o="";do{let s=`/api/youtube?playlistId=${a}`;o&&(s+=`&pageToken=${o}`);const r=await fetch(s);if(!r.ok){const c=await r.json();throw new Error(c.error||"Oynatma listesi yüklenemedi.")}const d=await r.json();d.items&&(i=i.concat(d.items)),o=d.nextPageToken||""}while(o&&i.length<200);document.getElementById("plVideos").value=i.map(s=>`${s.title} | ${s.url} | ${s.duration}`).join(`
`),t.innerHTML=`<span style="color:var(--green)">✓ ${i.length} video yüklendi!</span>`}catch(i){t.innerHTML=`<span style="color:var(--red)">⚠️ Hata: ${i.message}</span>`}}async function co(){const e=document.getElementById("plName").value.trim(),t=document.getElementById("plSubject").value.trim(),n=document.getElementById("plPublisher").value.trim();if(!e||!t||!n)return h("Tüm alanları doldurun!");const a=document.getElementById("plVideos").value.split(`
`).map(r=>r.trim()).filter(Boolean);if(!a.length)return h("En az 1 video girin!");const i=a.map(r=>{const d=r.split("|").map(c=>c.trim());return{label:d[0]||"",url:d[1]||"",topic:"",soru:parseInt(d[2])||0}}).filter(r=>r.label),o={exam_type:document.getElementById("plExam").value,subject:t,publisher:n,name:e,year:new Date().getFullYear(),tests:i,active:!0,resource_type:"playlist"},{error:s}=await x.from("resources").insert(o);if(s)return h("Hata: "+s.message);h(`✓ "${e}" eklendi — ${i.length} video`),K("playlistModal"),Ve()}function po(e,t="book"){const n=e?He.find(s=>s.id===e):null;let a=document.getElementById("resourceModal");a||(a=document.createElement("div"),a.id="resourceModal",a.className="modal-bg",document.body.appendChild(a),a.addEventListener("click",s=>{s.target===a&&a.classList.remove("open")}));const i=((n==null?void 0:n.resource_type)||t)==="playlist";a.innerHTML=`<div class="modal modal-lg">
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
`),N("resourceModal")}async function mo(){const e=document.getElementById("rmName").value.trim(),t=document.getElementById("rmSubject").value.trim();if(!e||!t)return h("Ad ve ders zorunlu!");const n=document.getElementById("rmId").value,a=document.getElementById("rmType").value==="playlist",i=document.getElementById("rmTests").value.split(`
`).map(r=>r.trim()).filter(Boolean);let o=[];a?o=i.map(r=>{const d=r.split("|").map(c=>c.trim());return{label:d[0]||"",url:d[1]||"",topic:"",soru:parseInt(d[2])||0}}):o=i.map(r=>{const d=r.split("|").map(c=>c.trim());return{label:d[0]||"",soru:parseInt(d[1])||0}});const s={exam_type:document.getElementById("rmExam").value,subject:t,publisher:document.getElementById("rmPublisher").value.trim(),year:new Date().getFullYear(),name:e,tests:o,active:document.getElementById("rmActive").value==="true",resource_type:a?"playlist":"book"};n?(await x.from("resources").update(s).eq("id",n),h("Güncellendi ✓")):(await x.from("resources").insert(s),h("Kaynak eklendi ✓")),K("resourceModal"),Ve()}async function uo(e){await X("Bu kaynağı silmek istediğinizden emin misiniz?")&&(await x.from("resources").delete().eq("id",e),h("Silindi"),Ve())}async function mt(){const e=document.getElementById("view-dev-finance"),[{data:t},{data:n}]=await Promise.all([x.from("subscriptions").select("*,users(full_name,color)").order("created_at",{ascending:!1}),x.from("payments").select("*,users(full_name)").order("payment_date",{ascending:!1}).limit(20)]),a=(n||[]).filter(o=>o.status==="completed").reduce((o,s)=>o+Number(s.amount),0),i=(t||[]).filter(o=>o.status==="active").length;e.innerHTML=`
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
    </div>`}function go(){let e=document.getElementById("paymentModal");e||(e=document.createElement("div"),e.id="paymentModal",e.className="modal-bg",e.innerHTML=`<div class="modal"><button class="modal-close" onclick="cm('paymentModal')">×</button>
      <h2>Ödeme Ekle</h2>
      <div class="field"><label>Öğrenci</label><select id="pmStudent">${l.students.map(t=>`<option value="${t.id}">${g(t.name)}</option>`).join("")}</select></div>
      <div class="field-row">
        <div class="field"><label>Tutar (₺)</label><input type="number" id="pmAmount" placeholder="1500"></div>
        <div class="field"><label>Yöntem</label><select id="pmMethod"><option>nakit</option><option>havale</option><option>kart</option><option>iyzico</option></select></div>
      </div>
      <div class="field"><label>Tarih</label><input type="date" id="pmDate" value="${Y(new Date)}"></div>
      <div class="field"><label>Açıklama</label><input id="pmDesc" placeholder="Mayıs ayı ücreti"></div>
      <button class="btn btn-accent" style="width:100%;justify-content:center;padding:12px;margin-top:4px" onclick="savePayment()">Kaydet</button>
    </div>`,document.body.appendChild(e),e.addEventListener("click",t=>{t.target===e&&e.classList.remove("open")})),document.getElementById("pmStudent").innerHTML=l.students.map(t=>`<option value="${t.id}">${g(t.name)}</option>`).join(""),N("paymentModal")}async function vo(){const e=parseFloat(document.getElementById("pmAmount").value);if(!e)return h("Tutar girin!");await x.from("payments").insert({student_id:document.getElementById("pmStudent").value,amount:e,method:document.getElementById("pmMethod").value,payment_date:document.getElementById("pmDate").value,description:document.getElementById("pmDesc").value,status:"completed"}),h("Ödeme kaydedildi ✓"),K("paymentModal"),mt()}function yo(){let e=document.getElementById("subModal");e||(e=document.createElement("div"),e.id="subModal",e.className="modal-bg",e.innerHTML=`<div class="modal"><button class="modal-close" onclick="cm('subModal')">×</button>
      <h2>Abonelik Ekle</h2>
      <div class="field"><label>Öğrenci</label><select id="sbStudent"></select></div>
      <div class="field-row">
        <div class="field"><label>Plan</label><select id="sbPlan"><option value="monthly">Aylık</option><option value="quarterly">3 Aylık</option><option value="yearly">Yıllık</option></select></div>
        <div class="field"><label>Aylık Tutar (₺)</label><input type="number" id="sbAmount" placeholder="1500"></div>
      </div>
      <div class="field-row">
        <div class="field"><label>Başlangıç</label><input type="date" id="sbStart" value="${Y(new Date)}"></div>
        <div class="field"><label>Bitiş (isteğe bağlı)</label><input type="date" id="sbEnd"></div>
      </div>
      <div class="field"><label>Durum</label><select id="sbStatus"><option value="active">Aktif</option><option value="trial">Deneme</option><option value="paused">Durduruldu</option><option value="cancelled">İptal</option></select></div>
      <div class="field"><label>Not</label><input id="sbNotes" placeholder="..."></div>
      <button class="btn btn-accent" style="width:100%;justify-content:center;padding:12px;margin-top:4px" onclick="saveSub()">Kaydet</button>
    </div>`,document.body.appendChild(e),e.addEventListener("click",t=>{t.target===e&&e.classList.remove("open")})),document.getElementById("sbStudent").innerHTML=l.students.map(t=>`<option value="${t.id}">${g(t.name)}</option>`).join(""),N("subModal")}async function fo(){const e=parseFloat(document.getElementById("sbAmount").value);if(!e)return h("Tutar girin!");await x.from("subscriptions").insert({student_id:document.getElementById("sbStudent").value,plan:document.getElementById("sbPlan").value,amount:e,start_date:document.getElementById("sbStart").value,end_date:document.getElementById("sbEnd").value||null,status:document.getElementById("sbStatus").value,notes:document.getElementById("sbNotes").value}),h("Abonelik eklendi ✓"),K("subModal"),mt()}async function Ze(){const e=document.getElementById("view-dev-announce"),{data:t}=await x.from("announcements").select("*").order("created_at",{ascending:!1}),n={info:"var(--blue)",warning:"var(--accent)",success:"var(--green)",urgent:"var(--red)"};e.innerHTML=`
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
      </div>`).join("")}`}function xo(){let e=document.getElementById("announceModal");e||(e=document.createElement("div"),e.id="announceModal",e.className="modal-bg",e.innerHTML=`<div class="modal"><button class="modal-close" onclick="cm('announceModal')">×</button>
      <h2>Yeni Duyuru</h2>
      <div class="field"><label>Başlık</label><input id="anTitle" placeholder="Önemli Güncelleme"></div>
      <div class="field"><label>İçerik</label><textarea id="anBody" placeholder="Duyuru metni..."></textarea></div>
      <div class="field-row">
        <div class="field"><label>Tür</label><select id="anType"><option value="info">Bilgi</option><option value="warning">Uyarı</option><option value="success">Başarı</option><option value="urgent">Acil</option></select></div>
        <div class="field"><label>Hedef</label><select id="anTarget"><option value="all">Herkes</option><option value="students">Öğrenciler</option><option value="coaches">Koçlar</option></select></div>
      </div>
      <button class="btn btn-accent" style="width:100%;justify-content:center;padding:12px;margin-top:4px" onclick="saveAnnounce()">Yayınla</button>
    </div>`,document.body.appendChild(e),e.addEventListener("click",t=>{t.target===e&&e.classList.remove("open")})),N("announceModal")}async function bo(){const e=document.getElementById("anTitle").value.trim(),t=document.getElementById("anBody").value.trim();if(!e||!t)return h("Başlık ve içerik zorunlu!");await x.from("announcements").insert({title:e,body:t,type:document.getElementById("anType").value,target:document.getElementById("anTarget").value,active:!0}),h("Duyuru yayınlandı ✓"),K("announceModal"),Ze()}async function ho(e,t){await x.from("announcements").update({active:t}).eq("id",e),Ze()}async function ko(e){await X("Bu duyuruyu silmek istediğinizden emin misiniz?")&&(await x.from("announcements").delete().eq("id",e),h("Silindi"),Ze())}let Ce=null,rt=null,oe=null,bt=null,De=[],re=[],ye="welcome";async function Re(){const e=document.getElementById("view-dev-tickets");if(!e)return;const{data:t,error:n}=await x.from("tickets").select("*,users!tickets_user_id_fkey(full_name,role)").order("updated_at",{ascending:!1});De=t||[],!oe&&De.length>0&&(oe=De[0].id),e.innerHTML=`
    <div class="sh" style="margin-bottom:12px">
      <h2>🎫 Destek & Geri Bildirim Masası</h2>
    </div>

    <div style="display: grid; grid-template-columns: 280px 1fr; gap: 16px; height: 600px; max-height: calc(100vh - 180px); margin-top: 10px">
      <!-- Left Pane: Chats List -->
      <div style="overflow-y: auto; background: var(--surface2); border: 1px solid var(--border); border-radius: 12px; display: flex; flex-direction: column; gap: 8px; padding: 12px">
        <div style="font-size: 11px; font-weight:800; color:var(--text-dim); text-transform:uppercase; letter-spacing:.5px; margin-bottom:4px">Konuşmalar</div>
        ${De.length===0?`
          <div style="text-align:center; padding:40px 10px; color:var(--text-dim); font-size:12px">Kayıtlı destek talebi yok.</div>
        `:De.map(a=>{var y,E,I;const i=a.id===oe,o=((y=a.users)==null?void 0:y.full_name)||"Kullanıcı",s=((E=a.users)==null?void 0:E.role)==="coach"?"KOÇ":((I=a.users)==null?void 0:I.role)==="parent"?"VELİ":"ÖĞRENCİ";let r="Mesaj yok";try{const v=JSON.parse(a.body);Array.isArray(v)&&v.length>0?r=v[v.length-1].text:r=a.body}catch{r=a.body}const d=r.length>28?r.slice(0,26)+"...":r,c=a.status==="open"?'<span style="font-size:9px; background:#ef444422; color:#ef4444; padding:2px 6px; border-radius:99px; font-weight:700">Yeni</span>':a.status==="resolved"?'<span style="font-size:9px; background:#10b98122; color:#10b981; padding:2px 6px; border-radius:99px; font-weight:700">Cevaplandı</span>':'<span style="font-size:9px; background:var(--border2); color:var(--text-dim); padding:2px 6px; border-radius:99px; font-weight:700">Kapatıldı</span>',p=i?"var(--accent-dim)":"var(--surface)",m=i?"1.5px solid var(--accent)":"1px solid var(--border)",u=i?"10px 11px":"10px 12px";return`
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
  `,To(),bt&&clearInterval(bt),bt=setInterval($o,4e3)}function wo(e){oe=e,Re()}async function $o(){if(!oe||!document.getElementById("devChatArea"))return;const{data:t,error:n}=await x.from("tickets").select("*,users!tickets_user_id_fkey(full_name,role)").eq("id",oe).single();if(n||!t)return;let a=[];try{a=JSON.parse(t.body),Array.isArray(a)||(a=[{sender:"user",text:t.body,time:t.created_at}])}catch{a=[{sender:"user",text:t.body,time:t.created_at}]}const i=document.getElementById("devChatMessages");if(i){const o=i.scrollTop,s=i.scrollHeight-i.clientHeight-o<40;i.innerHTML=a.map(r=>{const d=r.sender==="emin",c=d?"Kurucu / Destek":r.sender==="ai"?"Yapay Zeka":r.name||"Kullanıcı",p=d?"var(--blue)":r.sender==="ai"?"var(--surface2)":"var(--accent)",m=d?"#fff":r.sender==="ai"?"var(--text)":"var(--on-accent)",u=d?"flex-end":"flex-start",y=d?"14px 14px 4px 14px":"14px 14px 14px 4px",E=new Date(r.time).toLocaleTimeString("tr-TR",{hour:"2-digit",minute:"2-digit"});return`
        <div style="align-self:${u}; max-width:80%; display:flex; flex-direction:column; align-items:${d?"flex-end":"flex-start"}">
          <div style="font-size:10px; color:var(--text-dim); margin-bottom:3px; font-weight:600">${c}</div>
          <div style="padding:10px 14px; border-radius:${y}; background:${p}; color:${m}; font-size:13px; line-height:1.5; word-wrap:break-word; white-space:pre-wrap">${g(r.text)}</div>
          <div style="font-size:9px; color:var(--text-dim); margin-top:4px">${E}</div>
        </div>
      `}).join(""),s&&(i.scrollTop=i.scrollHeight)}}function To(){var s,r,d;const e=document.getElementById("devChatArea");if(!e)return;const t=De.find(c=>c.id===oe);if(!t){e.innerHTML=`
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
      ${i.map(c=>{const p=c.sender==="emin",m=p?"Kurucu / Destek":c.sender==="ai"?"Yapay Zeka":c.name||"Kullanıcı",u=p?"var(--blue)":c.sender==="ai"?"var(--surface2)":"var(--accent)",y=p?"#fff":c.sender==="ai"?"var(--text)":"var(--on-accent)",E=p?"flex-end":"flex-start",I=p?"14px 14px 4px 14px":"14px 14px 14px 4px",v=new Date(c.time).toLocaleTimeString("tr-TR",{hour:"2-digit",minute:"2-digit"});return`
          <div style="align-self:${E}; max-width:80%; display:flex; flex-direction:column; align-items:${p?"flex-end":"flex-start"}">
            <div style="font-size:10px; color:var(--text-dim); margin-bottom:3px; font-weight:600">${m}</div>
            <div style="padding:10px 14px; border-radius:${I}; background:${u}; color:${y}; font-size:13px; line-height:1.5; word-wrap:break-word; white-space:pre-wrap">${g(c.text)}</div>
            <div style="font-size:9px; color:var(--text-dim); margin-top:4px">${v}</div>
          </div>
        `}).join("")}
    </div>

    <!-- Footer Reply Input -->
    <div style="padding:12px 16px; border-top:1px solid var(--border); display:flex; gap:8px; background:var(--surface2); align-items:flex-end">
      <textarea id="devReplyInput" placeholder="Sohbete yanıt yazın..." rows="1" style="flex:1; background:var(--surface); border:1px solid var(--border); border-radius:12px; padding:10px 14px; font-size:13px; font-family:inherit; color:var(--text); resize:none; max-height:80px; outline:none" onkeydown="if(event.key==='Enter'&&!event.shiftKey){event.preventDefault();sendDevReply()}"></textarea>
      <button class="btn btn-accent" onclick="sendDevReply()" style="padding:8px 16px; font-size:13px; border-radius:10px; align-self:stretch; justify-content:center">Gönder</button>
    </div>
  `;const o=document.getElementById("devChatMessages");o&&(o.scrollTop=o.scrollHeight)}async function Eo(){const e=document.getElementById("devReplyInput"),t=e.value.trim();if(!t||!oe)return;e.value="",z(!0);const{data:n}=await x.from("tickets").select("body").eq("id",oe).single();let a=[];if(n&&n.body)try{a=JSON.parse(n.body)}catch{a=[{sender:"user",text:n.body,time:new Date().toISOString()}]}const i={sender:"emin",text:t,time:new Date().toISOString(),name:"Kurucu / Destek"};a.push(i);const{error:o}=await x.from("tickets").update({body:JSON.stringify(a),reply:t,status:"resolved",updated_at:new Date().toISOString()}).eq("id",oe);if(z(!1),o){h("Hata: "+o.message);return}h("Yanıt gönderildi ✓"),Re()}async function So(e,t){await x.from("tickets").update({status:t,updated_at:new Date().toISOString()}).eq("id",e),h("Durum güncellendi ✓"),Re()}async function Io(e){await X("Bu talebi silmek istediğinizden emin misiniz?")&&(await x.from("tickets").delete().eq("id",e),h("Silindi"),oe=null,Re())}function _o(){ut()}async function ut(){let e=document.getElementById("supportChatModal");e||(e=document.createElement("div"),e.id="supportChatModal",e.className="modal-bg",e.style.zIndex="99999999",e.innerHTML=`
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
    `,document.body.appendChild(e),e.addEventListener("click",t=>{var a;const n=(a=document.getElementById("trialExpiredModal"))==null?void 0:a.classList.contains("open");t.target===e&&!n&&Hn()})),N("supportChatModal"),await lt(),Ce&&clearInterval(Ce),Ce=setInterval(lt,4e3)}function Hn(){K("supportChatModal"),Ce&&(clearInterval(Ce),Ce=null)}async function lt(){var o,s;const e=(o=b.dbUser)==null?void 0:o.id;if(!e)return;const t=document.getElementById("supportMessages");if(!t)return;const{data:n,error:a}=await x.from("tickets").select("*").eq("user_id",e).eq("status","open").order("created_at",{ascending:!1}).limit(1);if(a){console.error("Error fetching ticket:",a);return}const i=n&&n[0];if(i){rt=i.id,ye="emin";const r=document.getElementById("supportStatusLabel");r&&(r.textContent="● Kurucu / Destek Ekibi");let d=[];try{d=JSON.parse(i.body),Array.isArray(d)||(d=[{sender:"user",text:i.body,time:i.created_at}])}catch{d=[{sender:"user",text:i.body,time:i.created_at}]}i.reply&&((s=d[d.length-1])==null?void 0:s.text)!==i.reply&&d.push({sender:"emin",text:i.reply,time:i.updated_at}),Oe(d)}else if(ye==="welcome"){const r=document.getElementById("supportStatusLabel");r&&(r.textContent="● Çevrimiçi Asistan"),t.innerHTML=`
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
      `}else if(ye==="ai"){const r=document.getElementById("supportStatusLabel");r&&(r.textContent="● Yapay Zeka"),Oe(re)}}function Oe(e){const t=document.getElementById("supportMessages");if(!t)return;const n=t.scrollTop,a=t.scrollHeight-t.clientHeight-n<40;t.innerHTML=e.map(i=>{const o=i.sender==="user",s=o?"Siz":i.sender==="ai"?"Yapay Zeka Asistanı":"Kurucu / Destek Ekibi",r=o?"var(--accent)":"var(--surface2)",d=o?"none":"1px solid var(--border)",c=o?"var(--on-accent)":"var(--text)",p=o?"flex-end":"flex-start",m=o?"14px 14px 4px 14px":"14px 14px 14px 4px",u=new Date(i.time).toLocaleTimeString("tr-TR",{hour:"2-digit",minute:"2-digit"});return`
      <div style="align-self:${p};max-width:80%;display:flex;flex-direction:column;align-items:${o?"flex-end":"flex-start"}">
        <div style="font-size:10px;color:var(--text-dim);margin-bottom:3px;font-weight:600">${s}</div>
        <div style="padding:10px 14px;border-radius:${m};background:${r};border:${d};color:${c};font-size:13px;line-height:1.5;word-wrap:break-word;white-space:pre-wrap">${g(i.text)}</div>
        <div style="font-size:9px;color:var(--text-dim);margin-top:4px">${u}</div>
      </div>
    `}).join(""),a&&(t.scrollTop=t.scrollHeight)}function zo(){ye="ai",re=[{sender:"ai",text:"Merhaba! Ben Rostrum Akademi Yapay Zeka Asistanıyım. 🤖 Size nasıl yardımcı olabilirim?",time:new Date().toISOString()}],Oe(re)}function Bo(){ye="emin_start";const e=document.getElementById("supportMessages");e&&(e.innerHTML=`
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
    `)}async function Mo(){var c,p;const e=document.getElementById("eminSubject"),t=document.getElementById("eminInitialMessage"),n=e?e.value.trim():"Müşteri Destek Sohbeti",a=t?t.value.trim():"";if(!a)return h("Mesaj boş olamaz!");const i=(c=b.dbUser)==null?void 0:c.id,o=((p=b.dbUser)==null?void 0:p.full_name)||"Kullanıcı",s={sender:"user",text:a,time:new Date().toISOString(),name:o};z(!0);const{data:r,error:d}=await x.from("tickets").insert({user_id:i,subject:n,body:JSON.stringify([s]),category:"emin",status:"open"}).select().single();if(z(!1),d){h("Hata: "+d.message);return}rt=r.id,ye="emin",h("Talebiniz destek ekibine iletildi ✓"),await lt()}async function Ao(){var n;const e=document.getElementById("supportInput"),t=e.value.trim();if(t){if(e.value="",ye==="ai"){const a={sender:"user",text:t,time:new Date().toISOString()};re.push(a),Oe(re);const i=document.getElementById("supportTyping");i&&(i.style.display="flex");try{const o=(window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1","/api/ai-chat"),s=re.slice(-10).map(c=>({role:c.sender==="user"?"user":"assistant",content:c.text})),r=await fetch(o,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({messages:s,context:{},userRole:"parent"})});let d="";r.ok?d=(await r.json()).reply:d=await Ie(t,{},b.role||"coach"),re.push({sender:"ai",text:d,time:new Date().toISOString()})}catch{try{const s=await Ie(t,{},b.role||"coach");re.push({sender:"ai",text:s,time:new Date().toISOString()})}catch{re.push({sender:"ai",text:"Üzgünüm, şu anda yanıt veremiyorum. Lütfen daha sonra tekrar deneyin veya doğrudan destek ekibimize mesaj gönderin.",time:new Date().toISOString()})}}finally{i&&(i.style.display="none"),Oe(re)}}else if(ye==="emin"){const a=((n=b.dbUser)==null?void 0:n.full_name)||"Kullanıcı",i={sender:"user",text:t,time:new Date().toISOString(),name:a};z(!0);const{data:o}=await x.from("tickets").select("body").eq("id",rt).single();let s=[];if(o&&o.body)try{s=JSON.parse(o.body)}catch{s=[{sender:"user",text:o.body,time:new Date().toISOString(),name:a}]}s.push(i);const{error:r}=await x.from("tickets").update({body:JSON.stringify(s),status:"open",updated_at:new Date().toISOString()}).eq("id",rt);if(z(!1),r){h("Gönderim hatası: "+r.message);return}await lt()}}}async function Nn(){const{data:e}=await x.from("announcements").select("*").eq("active",!0),t=b.role,n=(e||[]).filter(o=>o.target==="all"||o.target==="students"&&t==="student"||o.target==="coaches"&&t==="coach");if(!n.length)return;const a={info:"var(--blue)",warning:"var(--accent)",success:"var(--green)",urgent:"var(--red)"},i=document.createElement("div");i.style.cssText="position:fixed;top:64px;right:16px;z-index:400;display:flex;flex-direction:column;gap:8px;max-width:340px",i.id="announceBanner",n.slice(0,3).forEach(o=>{const s=document.createElement("div");s.style.cssText=`background:var(--surface);border:1px solid var(--border);border-left:3px solid ${a[o.type]||"var(--accent)"};border-radius:10px;padding:12px 14px;box-shadow:var(--shadow);animation:fadeUp .3s ease`,s.innerHTML=`<div style="display:flex;justify-content:space-between;align-items:flex-start;gap:8px">
      <div><div style="font-size:13px;font-weight:700;margin-bottom:3px">${g(o.title)}</div><div style="font-size:12px;color:var(--text-mid)">${g(o.body)}</div></div>
      <button onclick="this.closest('div[style]').remove()" style="background:none;border:none;cursor:pointer;color:var(--text-dim);font-size:16px;flex-shrink:0">×</button>
    </div>`,i.appendChild(s)}),document.body.appendChild(i),setTimeout(()=>i.remove(),8e3)}(()=>{const e=document.createElement("style");e.textContent=".role-dev{background:rgba(192,132,252,.15);color:#c084fc;}",document.head.appendChild(e)})();function Kn(){let e=document.getElementById("onboardingModal");e||(e=document.createElement("div"),e.id="onboardingModal",e.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,.85);z-index:9000;display:flex;align-items:center;justify-content:center;padding:20px;backdrop-filter:blur(8px)",document.body.appendChild(e)),Ot(0,e)}const Et=[{icon:"👋",title:"Rostrum Akademi'ye Hoş Geldiniz! 🎓",body:`Sizinle birlikte büyümek ve platformumuzu geliştirmek bizim en büyük tutkumuz.<br><br>
           <b>Önemli Not:</b> Rostrum Akademi, siz koçlarımızın değerli geri bildirimleriyle sürekli gelişen canlı bir sistemdir. Her türlü görüş, eleştiri ve özellik talebinizi bizimle paylaşmaktan lütfen çekinmeyin. Birlikte en verimli eğitim ortamını inşa edeceğiz!`,nextLabel:"Özellikleri İncele →"},{icon:"⚡",title:"Işık Hızında SPA Performansı 🚀",body:`Rostrum Akademi, modern Tek Sayfa Uygulaması (SPA) mimarisiyle sıfır gecikme ile ışık hızında çalışır.<br><br>
           Tüm paneller, filtreler ve öğrenci profilleri arasında geçiş yaparken sayfa yenilenmesini beklemez, zaman kaybetmeden işlerinizi yönetirsiniz.`,nextLabel:"Devam →"},{icon:"📅",title:"Haftalık Program & D1Y1B Takibi 📋",body:`Öğrencilerinizin haftalık ders programlarını hazırlayabilir, günlük ders ve soru hedefleri atayabilirsiniz.<br><br>
           Öğrencileriniz günlük ödevlerini tamamlayıp Doğru, Yanlış, Boş (D1Y1B) net girişlerini yaptıkça, tüm ilerlemeyi anlık olarak takip edebilirsiniz.`,nextLabel:"Devam →"},{icon:"📊",title:"Gelişmiş Denemeler & Grafik Analizi 📈",body:`TYT, AYT, LGS, KPSS ve ALES deneme sınavı sonuçlarını detaylıca kaydedin.<br><br>
           Zengin interaktif grafiklerle net gelişimini izleyin, ders ve konu bazlı boş/yanlış analizleriyle öğrencinin eksiklerini anında tespit edin.`,nextLabel:"Devam →"},{icon:"🤖",title:"Yapay Zeka Destekli Asistan ve Copilot 🧠",body:"Öğrencilerinizin 7/24 akademik sorularını sokratik yöntemle çözen **AI Ders Asistanı**, veliler için **AI Veli Asistanı** ve sizin için öğrenci analizleri hazırlayan **AI Copilot** her an hizmetinizde!",nextLabel:"Devam →"},{icon:"🗓️",title:"FullCalendar Ajanda & Tek Tıkla Ders 🕒",body:`Yeni FullCalendar entegrasyonu sayesinde koçluk seanslarınızı ve toplantılarınızı takvim üzerinde sürükle-bırak kolaylığıyla planlayın.<br><br>
           Ders saati yaklaştığında sistemdeki "Derse Katıl" butonuyla Zoom/Meet derslerini tek tıkla başlatın.`,nextLabel:"Hadi Başlayalım! 🚀",isCompletion:!0}];function Ot(e,t){const n=Et[e],a=Et.length,i=Array.from({length:a},(o,s)=>`<div style="width:${s===e?24:8}px;height:8px;border-radius:99px;background:${s===e?"var(--accent)":"var(--border2)"};transition:width .3s"></div>`).join("");t.innerHTML=`<div style="background:var(--surface);border:1px solid var(--border2);border-radius:24px;width:100%;max-width:480px;padding:40px;animation:fadeUp .3s ease;max-height:90vh;overflow-y:auto;box-shadow:var(--shadow-lg)">
    <div style="text-align:center;margin-bottom:28px">
      <div style="font-size:52px;margin-bottom:12px">${n.icon}</div>
      <h3 style="font-family:'Syne',sans-serif;font-size:22px;font-weight:800;color:var(--text);margin-bottom:12px;line-height:1.3">${n.title}</h3>
      <p style="font-size:14px;color:var(--text-mid);line-height:1.6">${n.body}</p>
    </div>

    <div style="display:flex;flex-direction:column;gap:12px;margin-top:28px">
      <button class="btn btn-accent" style="width:100%;padding:14px;font-weight:700" onclick="advanceOnboarding(${e},false)">${n.nextLabel}</button>
      <div style="display:flex;gap:6px;justify-content:center;margin-top:20px">${i}</div>
    </div>
  </div>`}async function Do(e,t){var i;const n=document.getElementById("onboardingModal");if(!n)return;if((i=Et[e])!=null&&i.isCompletion){z(!0);try{const{error:o}=await x.from("workspaces").update({onboarding_done:!0}).eq("coach_id",b.coachId);if(o)throw o;l.workspace&&(l.workspace.onboarding_done=!0),n.remove(),ee("home"),h("🎉 Hoş geldiniz! Platformunuz hazır.")}catch(o){h("Hata: "+o.message)}finally{z(!1)}return}const a=e+1;Ot(a,n)}let ht=null;window.addEventListener("beforeinstallprompt",e=>{e.preventDefault(),ht=e;const t=document.createElement("button");t.id="pwaInstallBtn",t.className="btn btn-ghost btn-sm",t.innerHTML="📲 Yükle",t.style.cssText="font-size:11px;padding:5px 10px",t.onclick=async()=>{ht.prompt();const{outcome:n}=await ht.userChoice;n==="accepted"&&(t.remove(),h("Uygulama yüklendi ✓"))},document.querySelector(".tbar-right").insertBefore(t,document.querySelector(".user-pill"))});async function On(){const e=l.students.find($=>$.id===b.studentId);if(!e)return;const t=document.getElementById("view-sprofil");if(!t)return;const{data:n,error:a}=await x.from("student_profiles").select("*").eq("id",b.studentId).maybeSingle();a&&console.error("Öğrenci profili yüklenirken hata:",a);const i=(n==null?void 0:n.bio)||"",o=(n==null?void 0:n.school)||"",s=(n==null?void 0:n.grade)||"",r=(n==null?void 0:n.target_university)||"",d=(n==null?void 0:n.target_department)||"",c=(n==null?void 0:n.struggling_subjects)||"",p=(n==null?void 0:n.daily_capacity)||"",m=l.exams.filter($=>$.studentId===e.id).sort(($,B)=>$.date.localeCompare(B.date)),u=m[m.length-1],y=u?(EXAM_DEFS[u.type]||[]).reduce((B,T)=>{var D;return B+Number(((D=u.nets)==null?void 0:D[T])||0)},0).toFixed(1):"—",E=V(0,e.weekStart??0);let I=0,v=0;for(let $=0;$<7;$++){const B=l.tasks[`${e.id}_${Y(U(E,$))}`]||[];I+=B.length,v+=B.filter(T=>T.done).length}const f=I>0?Math.round(v/I*100):0;let k=0;Object.keys(l.tasks).filter($=>$.startsWith(e.id+"_")).forEach($=>{k+=l.tasks[$].filter(B=>B.done).length});let S="";if(m.length>0){const $=m.slice(-6),B=Math.max(...$.map(T=>(EXAM_DEFS[T.type]||[]).reduce((C,j)=>{var w;return C+Number(((w=T.nets)==null?void 0:w[j])||0)},0)),1);S=`
      <div class="card cp" style="margin-bottom:16px">
        <div class="portal-sec-title">📈 Net Gelişim Grafiği</div>
        <div style="display:flex;align-items:flex-end;gap:6px;height:90px;margin-top:12px">
          ${$.map(T=>{const C=(EXAM_DEFS[T.type]||[]).reduce((H,q)=>{var P;return H+Number(((P=T.nets)==null?void 0:P[q])||0)},0),j=Math.max(Math.round(C/B*100),4),w=$[$.indexOf(T)-1],M=w?(EXAM_DEFS[w.type]||[]).reduce((H,q)=>{var P;return H+Number(((P=w.nets)==null?void 0:P[q])||0)},0):C,L=C>M?"↑":C<M?"↓":"",R=C>M?"var(--green)":C<M?"var(--red)":"var(--text-dim)";return`<div style="flex:1;display:flex;flex-direction:column;align-items:center;gap:3px">
              <div style="font-size:10px;font-weight:700;color:var(--text-mid)">${C.toFixed(0)}</div>
              <div style="font-size:9px;color:${R};font-weight:800">${L}</div>
              <div style="width:100%;background:${e.color};border-radius:4px 4px 0 0;height:${j}%;min-height:4px"></div>
              <div style="font-size:9px;color:var(--text-dim);text-align:center;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;width:100%">${g(T.name.replace("Deneme","").replace("TYT","").replace("AYT","").trim())}</div>
            </div>`}).join("")}
        </div>
      </div>`}let _="";if(m.length>0){const $=u.type,T=(EXAM_DEFS[$]||[]).map(D=>{var M;const C=m.filter(L=>L.type===$).map(L=>{var R;return Number(((R=L.nets)==null?void 0:R[D])||0)}),j=C.length?C.reduce((L,R)=>L+R,0)/C.length:0,w=Number(((M=u.nets)==null?void 0:M[D])||0);return{f:D,avg:j.toFixed(1),last:w,color:It(w)}});_=`
      <div class="card cp" style="margin-bottom:16px">
        <div class="portal-sec-title">📊 Ders Bazında Performans (${$})</div>
        <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(120px,1fr));gap:8px;margin-top:10px">
          ${T.map(D=>`
            <div style="background:var(--surface2);border:1px solid var(--border);border-radius:9px;padding:10px;text-align:center">
              <div style="font-size:10px;color:var(--text-dim);font-weight:700;margin-bottom:4px;text-transform:uppercase">${D.f}</div>
              <div style="font-family:'Inter',sans-serif;font-size:22px;font-weight:800;color:var(--${D.color==="good"?"green":D.color==="mid"?"accent":"red"})">${D.last}</div>
              <div style="font-size:10px;color:var(--text-dim);margin-top:2px">ort: ${D.avg}</div>
            </div>`).join("")}
        </div>
      </div>`}const A=l.appointments.filter($=>$.studentId===e.id&&$.date>=ze()).sort(($,B)=>$.date.localeCompare(B.date)).slice(0,3);t.innerHTML=`
    <!-- HERO -->
    <div class="portal-hero" style="margin-bottom:16px">
      <div class="portal-avatar" style="background:${e.color};width:72px;height:72px;border-radius:18px;font-size:28px">${e.name[0]}</div>
      <div class="portal-info" style="flex:1">
        <h1>${g(e.name)}</h1>
        <p>${g(e.target)}</p>
      </div>
    </div>

    <!-- STAT CARDS -->
    <div class="stats-row" style="margin-bottom:16px">
      <div class="stat-card">
        <div class="stat-label">Genel İlerleme</div>
        <div class="stat-val" style="color:${e.color}">%${e.progress}</div>
        <div class="prog-bar-wrap" style="margin-top:8px"><div class="prog-bar" style="width:${e.progress}%;background:${e.color}"></div></div>
      </div>
      <div class="stat-card">
        <div class="stat-label">Bu Hafta Görev</div>
        <div class="stat-val">${v}<span style="font-size:14px;color:var(--text-dim)">/${I}</span></div>
        <div style="font-size:11px;color:var(--text-mid);margin-top:4px">%${f} tamamlandı</div>
      </div>
      <div class="stat-card">
        <div class="stat-label">Son Deneme Neti</div>
        <div class="stat-val" style="color:var(--accent)">${y}</div>
        <div style="font-size:11px;color:var(--text-mid);margin-top:4px">${u?g(u.name):"Deneme yok"}</div>
      </div>
      <div class="stat-card">
        <div class="stat-label">Toplam Tamamlanan</div>
        <div class="stat-val">${k}</div>
        <div style="font-size:11px;color:var(--text-mid);margin-top:4px">görev</div>
      </div>
    </div>

    ${S}
    ${_}

    <!-- YAKLAŞAN RANDEVULAR -->
    <div class="card cp" style="margin-bottom:16px">
      <div class="portal-sec-title">📅 Yaklaşan Randevularım</div>
      ${A.length?A.map($=>`
        <div style="background:var(--surface2);border:1px solid var(--border);border-left:3px solid ${e.color};border-radius:9px;padding:12px;margin-top:8px">
          <div style="font-size:10px;font-weight:700;color:var(--text-dim);text-transform:uppercase;margin-bottom:3px">${new Date($.date+"T12:00").toLocaleDateString("tr-TR",{weekday:"long",day:"numeric",month:"long"})}</div>
          <div style="font-family:'Inter',sans-serif;font-size:17px;font-weight:700">${$.time} <span style="font-size:13px;color:var(--text-mid)">· ${$.duration} dk</span></div>
          <div style="font-size:12px;color:var(--text-mid);margin-top:2px">${g($.type)}</div>
        </div>`).join(""):'<div style="font-size:13px;color:var(--text-dim);margin-top:8px">Yaklaşan randevu yok</div>'}
    </div>

    <!-- DETAYLI PROFIL BILGILERI -->
    <div class="card cp" style="margin-bottom:16px">
      <div class="portal-sec-title">📝 Detaylı Profil Bilgilerim</div>
      
      <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px; margin-top:12px; margin-bottom:12px;">
        <div>
          <label style="display:block; font-size:11px; font-weight:700; color:var(--text-mid); margin-bottom:4px;">Okul</label>
          <input type="text" id="spSchool" value="${g(o)}" placeholder="Okulunuz" style="width:100%; background:var(--surface2); border:1.5px solid var(--border); border-radius:9px; padding:10px 13px; font-size:14px; color:var(--text); outline:none;">
        </div>
        <div>
          <label style="display:block; font-size:11px; font-weight:700; color:var(--text-mid); margin-bottom:4px;">Sınıf / Seviye</label>
          <input type="text" id="spGrade" value="${g(s)}" placeholder="Örn: 12. Sınıf, Mezun" style="width:100%; background:var(--surface2); border:1.5px solid var(--border); border-radius:9px; padding:10px 13px; font-size:14px; color:var(--text); outline:none;">
        </div>
      </div>

      <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px; margin-bottom:12px;">
        <div>
          <label style="display:block; font-size:11px; font-weight:700; color:var(--text-mid); margin-bottom:4px;">Hedef Üniversite</label>
          <input type="text" id="spTargetUni" value="${g(r)}" placeholder="Örn: Boğaziçi Üniversitesi" style="width:100%; background:var(--surface2); border:1.5px solid var(--border); border-radius:9px; padding:10px 13px; font-size:14px; color:var(--text); outline:none;">
        </div>
        <div>
          <label style="display:block; font-size:11px; font-weight:700; color:var(--text-mid); margin-bottom:4px;">Hedef Bölüm</label>
          <input type="text" id="spTargetDept" value="${g(d)}" placeholder="Örn: Bilgisayar Mühendisliği" style="width:100%; background:var(--surface2); border:1.5px solid var(--border); border-radius:9px; padding:10px 13px; font-size:14px; color:var(--text); outline:none;">
        </div>
      </div>

      <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px; margin-bottom:12px;">
        <div>
          <label style="display:block; font-size:11px; font-weight:700; color:var(--text-mid); margin-bottom:4px;">Zorlandığım Dersler</label>
          <input type="text" id="spStruggling" value="${g(c)}" placeholder="Örn: Fizik, Geometri" style="width:100%; background:var(--surface2); border:1.5px solid var(--border); border-radius:9px; padding:10px 13px; font-size:14px; color:var(--text); outline:none;">
        </div>
        <div>
          <label style="display:block; font-size:11px; font-weight:700; color:var(--text-mid); margin-bottom:4px;">Günlük Çalışma Kapasitesi (Saat)</label>
          <input type="number" id="spCapacity" value="${g(p)}" placeholder="Örn: 6" style="width:100%; background:var(--surface2); border:1.5px solid var(--border); border-radius:9px; padding:10px 13px; font-size:14px; color:var(--text); outline:none;">
        </div>
      </div>

      <div style="margin-bottom:12px;">
        <label style="display:block; font-size:11px; font-weight:700; color:var(--text-mid); margin-bottom:4px;">Biyografi / Kendinden Bahset</label>
        <textarea id="spBio" style="width:100%; min-height:80px; background:var(--surface2); border:1.5px solid var(--border); border-radius:9px; padding:10px 13px; font-size:14px; color:var(--text); outline:none; resize:vertical;">${g(i)}</textarea>
      </div>

      <button class="btn btn-accent" style="width:100%; padding:10px;" onclick="saveStudentProfile()">Profil Bilgilerini Güncelle ✓</button>
    </div>

    <!-- ŞİFRE DEĞİŞTİR -->
    <div class="card cp">
      <div class="portal-sec-title">🔒 Şifre Değiştir</div>
      <div style="display:flex;gap:10px;margin-top:10px;flex-wrap:wrap">
        <input type="password" id="newPass1" placeholder="Yeni şifre" style="flex:1;min-width:140px;background:var(--surface2);border:1.5px solid var(--border);border-radius:9px;padding:10px 13px;font-size:14px;font-family:inherit;color:var(--text);outline:none">
        <input type="password" id="newPass2" placeholder="Şifreyi tekrar gir" style="flex:1;min-width:140px;background:var(--surface2);border:1.5px solid var(--border);border-radius:9px;padding:10px 13px;font-size:14px;font-family:inherit;color:var(--text);outline:none">
        <button class="btn btn-accent" onclick="changePassword()">Kaydet</button>
      </div>
    </div>`}async function Co(){const e=b.dbUser.id,t=document.getElementById("spBio").value.trim(),n=document.getElementById("spSchool").value.trim(),a=document.getElementById("spGrade").value.trim(),i=document.getElementById("spTargetUni").value.trim(),o=document.getElementById("spTargetDept").value.trim(),s=document.getElementById("spStruggling").value.trim(),r=parseInt(document.getElementById("spCapacity").value)||null,d={id:e,bio:t,school:n,grade:a,target_university:i,target_department:o,struggling_subjects:s,daily_capacity:r,updated_at:new Date().toISOString()},{error:c}=await x.from("student_profiles").upsert(d);h(c?"Profil kaydedilemedi: "+c.message:"Profil başarıyla güncellendi ✓")}async function Lo(){const e=document.getElementById("newPass1").value,t=document.getElementById("newPass2").value;if(!e)return h("Şifre girin!");if(e!==t)return h("Şifreler uyuşmuyor!");if(e.length<4)return h("En az 4 karakter olmalı");const{error:n}=await x.from("users").update({password_hash:e}).eq("id",b.studentId);if(n)return h("Hata: "+n.message);h("Şifre güncellendi ✓"),document.getElementById("newPass1").value="",document.getElementById("newPass2").value=""}async function Fn(){var y;const e=document.getElementById("view-coach-profile");if(!e)return;e.innerHTML='<div class="loading">Profil bilgileri yükleniyor...</div>';const t=b.dbUser.id;let n=null,a=null;const i=await x.from("coach_profiles").select("*").eq("id",t).maybeSingle();if(n=i.data,a=i.error,a){const E=localStorage.getItem(`coach_profile_${t}`);if(E)try{n=JSON.parse(E),a=null}catch{}if(a){e.innerHTML=`<div style="padding:20px;color:var(--red)">Profil yüklenirken hata oluştu: ${g(a.message)}</div>`;return}}else if(!n){const E=localStorage.getItem(`coach_profile_${t}`);if(E)try{n=JSON.parse(E)}catch{}}const o=(n==null?void 0:n.bio)||"",s=(n==null?void 0:n.subjects)||"",r=(n==null?void 0:n.education)||"",d=(n==null?void 0:n.experience)||"",c=(n==null?void 0:n.photo_url)||"",p=(n==null?void 0:n.instagram)||"",m=(n==null?void 0:n.linkedin)||"",u=window.location.origin+window.location.pathname.replace("app.html","koc_bul.html")+`?coach=${t}`;e.innerHTML=`
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
                  <div class="preview-name" id="prevName">${g(((y=b.dbUser)==null?void 0:y.full_name)||"Koç")}</div>
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
  `,Ft()}let nt="bio";function Ft(){var u,y,E,I,v,f,k,S;const e=((u=document.getElementById("cpPhotoUrl"))==null?void 0:u.value.trim())||"",t=((y=document.getElementById("cpSubjects"))==null?void 0:y.value.trim())||"",n=((E=document.getElementById("cpBio"))==null?void 0:E.value.trim())||"",a=((I=document.getElementById("cpEducation"))==null?void 0:I.value.trim())||"",i=((v=document.getElementById("cpExperience"))==null?void 0:v.value.trim())||"",o=((f=document.getElementById("cpInstagram"))==null?void 0:f.value.trim())||"",s=((k=document.getElementById("cpLinkedin"))==null?void 0:k.value.trim())||"",r=((S=b.dbUser)==null?void 0:S.full_name)||"Koç",d=document.getElementById("prevAvatar");if(d)if(e)d.style.backgroundImage=`url('${e}')`,d.style.backgroundColor="transparent",d.innerHTML="";else{d.style.backgroundImage="",d.style.backgroundColor="var(--accent-dim)";const _=r.split(" ").map(A=>A[0]).join("").slice(0,2).toUpperCase();d.innerHTML=_||"?"}const c=document.getElementById("prevSocials");if(c){let _="";if(o&&(_+=`<a href="https://instagram.com/${o}" target="_blank" class="preview-social-link" title="Instagram">📸 @${o}</a>`),s){let A="LinkedIn";s.includes("/in/")&&(A="in/"+s.split("/in/")[1].split("/")[0]),_+=`<a href="${s}" target="_blank" class="preview-social-link" title="LinkedIn">💼 ${A}</a>`}c.innerHTML=_}const p=document.getElementById("prevSubjects");if(p)if(t){const _=t.split(",").map(A=>A.trim()).filter(Boolean);p.innerHTML=_.map(A=>`<span class="preview-tag">${g(A)}</span>`).join("")}else p.innerHTML='<span class="preview-tag" style="background:none; border:1px dashed var(--border); color:var(--text-dim)">Ders / Uzmanlık Belirtilmedi</span>';const m=document.getElementById("prevTabContent");if(m){let _="";nt==="bio"?_=n||"Biyografi bilgisi henüz girilmedi.":nt==="edu"?_=a||"Eğitim bilgisi henüz girilmedi.":nt==="exp"&&(_=i||"Deneyim/başarılar henüz girilmedi."),m.innerHTML=Un(g(_))}}function jo(e){nt=e;const t=document.getElementById("btn-prev-bio"),n=document.getElementById("btn-prev-edu"),a=document.getElementById("btn-prev-exp");t&&t.classList.toggle("active",e==="bio"),n&&n.classList.toggle("active",e==="edu"),a&&a.classList.toggle("active",e==="exp"),Ft()}function Un(e){return e.replace(/\n/g,"<br>")}async function Po(){const e=b.dbUser.id,t=document.getElementById("cpBio").value.trim(),n=document.getElementById("cpSubjects").value.trim(),a=document.getElementById("cpEducation").value.trim(),i=document.getElementById("cpExperience").value.trim(),o=document.getElementById("cpPhotoUrl").value.trim(),s=document.getElementById("cpInstagram").value.trim(),r=document.getElementById("cpLinkedin").value.trim(),d={id:e,bio:t,subjects:n,education:a,experience:i,photo_url:o,instagram:s,linkedin:r,updated_at:new Date().toISOString()};localStorage.setItem(`coach_profile_${e}`,JSON.stringify(d));const{error:c}=await x.from("coach_profiles").upsert(d);c?(console.warn("Database save failed, profile saved locally in localStorage:",c),h("Profil yerel tarayıcıya kaydedildi (Veritabanı RLS hatası: "+c.message+")")):h("Profil başarıyla güncellendi ✓")}async function Ut(){const e=document.getElementById("view-dev-matches");if(!e)return;e.innerHTML='<div class="loading">Eşleşmeler yükleniyor...</div>';const{data:t,error:n}=await x.from("match_requests").select("*, matched_coach:matched_coach_id(full_name, username)").order("created_at",{ascending:!1});if(n){e.innerHTML=`<div style="padding:20px;color:var(--red)">Eşleşme başvuruları yüklenirken hata oluştu: ${g(n.message)}</div>`;return}const a={pending:"⏳ Bekliyor",matched:"🤝 Eşleştirildi",completed:"✅ Tamamlandı"},i={pending:"rgba(240, 165, 0, 0.15)",matched:"rgba(96, 180, 255, 0.15)",completed:"rgba(62, 207, 142, 0.15)"},o={pending:"var(--accent)",matched:"var(--accent4)",completed:"var(--green)"};e.innerHTML=`
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
  `}async function Ro(e,t){const{error:n}=await x.from("match_requests").update({status:t}).eq("id",e);n?h("Durum güncellenirken hata: "+n.message):(h("Durum güncellendi ✓"),Ut())}async function Yo(e){const t=l.students.find(s=>s.id===e);if(!t)return;const{data:n}=await x.from("student_speeds").select("*").eq("student_id",e),a={};(n||[]).forEach(s=>{a[`${s.exam_type}_${s.subject}`]=s.secs_per_question});const i=[{exam:"TYT",sub:"Matematik"},{exam:"TYT",sub:"Türkçe"},{exam:"TYT",sub:"Fizik"},{exam:"TYT",sub:"Kimya"},{exam:"TYT",sub:"Biyoloji"},{exam:"TYT",sub:"Geometri"},{exam:"AYT-SAY",sub:"Matematik"},{exam:"AYT-SAY",sub:"Fizik"},{exam:"AYT-SAY",sub:"Kimya"},{exam:"AYT-SAY",sub:"Biyoloji"}];let o=document.getElementById("speedModal");o||(o=document.createElement("div"),o.id="speedModal",o.className="modal-bg",document.body.appendChild(o),o.addEventListener("click",s=>{s.target===o&&o.classList.remove("open")})),o.innerHTML=`<div class="modal modal-lg">
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
  </div>`,N("speedModal")}async function Ho(e){const t=[{exam:"TYT",sub:"Matematik"},{exam:"TYT",sub:"Türkçe"},{exam:"TYT",sub:"Fizik"},{exam:"TYT",sub:"Kimya"},{exam:"TYT",sub:"Biyoloji"},{exam:"TYT",sub:"Geometri"},{exam:"AYT-SAY",sub:"Matematik"},{exam:"AYT-SAY",sub:"Fizik"},{exam:"AYT-SAY",sub:"Kimya"},{exam:"AYT-SAY",sub:"Biyoloji"}];for(const{exam:n,sub:a}of t){const i=`${n}_${a}`,o=document.getElementById("spd_"+i);if(!o)continue;const s=parseInt(o.value)||180;await $n(e,n,a,s)}K("speedModal"),h("Hız ayarları kaydedildi ✓")}async function No(e){const t=l.students.find(o=>o.id===e);if(!t)return;const{data:n}=await x.from("student_notes").select("notes").eq("coach_id",b.coachId).eq("student_id",e).maybeSingle(),a=(n==null?void 0:n.notes)||"";let i=document.getElementById("studentNotesModal");i||(i=document.createElement("div"),i.id="studentNotesModal",i.className="modal-bg",document.body.appendChild(i),i.addEventListener("click",o=>{o.target===i&&i.classList.remove("open")})),i.innerHTML=`<div class="modal">
    <button class="modal-close" onclick="cm('studentNotesModal')">×</button>
    <h2>📝 ${g(t.name)} — Notlar</h2>
    <p style="font-size:13px;color:var(--text-mid);margin-bottom:16px">Öğrenciyle ilgili gözlemler, önemli bilgiler, hatırlatmalar…</p>
    <div class="field">
      <textarea id="studentNoteText" style="min-height:260px;font-size:13px;line-height:1.7;resize:vertical" placeholder="Örnek: Türkçe paragrafta hız sorunu var. Veli baskılı, motivasyon takip edilmeli. Son denemede geometri 4 yanlış...">${g(a)}</textarea>
    </div>
    <button class="btn btn-accent" style="width:100%;justify-content:center;padding:12px;margin-top:4px" onclick="saveStudentNote('${e}')">Kaydet</button>
  </div>`,N("studentNotesModal")}async function Ko(e){const t=document.getElementById("studentNoteText").value,{error:n}=await x.from("student_notes").upsert({coach_id:b.coachId,student_id:e,notes:t,updated_at:new Date().toISOString()},{onConflict:"coach_id,student_id"});if(n){h("Not kaydedilemedi: "+n.message);return}h("Not kaydedildi ✓"),K("studentNotesModal")}function Oo(e){let t=document.getElementById("reportModal");t||(t=document.createElement("div"),t.id="reportModal",t.className="modal-bg",t.innerHTML=`<div class="modal">
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
      </div>
    </div>`,document.body.appendChild(t),t.addEventListener("click",i=>{i.target===t&&t.classList.remove("open")}),document.getElementById("rpPeriod").addEventListener("change",function(){document.getElementById("rpCustomDates").style.display=this.value==="custom"?"":"none"})),document.getElementById("rpStuId").value=e;const n=new Date,a=new Date(n.getFullYear(),n.getMonth(),1);document.getElementById("rpStart").value=Y(a),document.getElementById("rpEnd").value=Y(n),document.getElementById("rpNote").value="",N("reportModal")}function Gn(){const e=document.getElementById("rpPeriod").value,t=new Date;if(e==="weekly"){const n=V(0,0);return{start:Y(n),end:Y(U(n,6))}}else return e==="monthly"?{start:Y(new Date(t.getFullYear(),t.getMonth(),1)),end:Y(t)}:{start:document.getElementById("rpStart").value,end:document.getElementById("rpEnd").value}}function Gt(e,t=!1){var _,A,$,B;const n=l.students.find(T=>T.id===e);if(!n)return"";const{start:a,end:i}=Gn(),o=document.getElementById("rpNote").value.trim(),s=((_=l.workspace)==null?void 0:_.brand_name)||"Rostrum Akademi",r=((A=l.workspace)==null?void 0:A.brand_color)||"#f0a500",d=(($=b.dbUser)==null?void 0:$.full_name)||"Koç",c=[],p=new Date(a);for(;Y(p)<=i;){const T=`${e}_${Y(p)}`;(l.tasks[T]||[]).forEach(D=>c.push({...D,date:Y(p)})),p.setDate(p.getDate()+1)}const m=c.length,u=c.filter(T=>T.done).length,y=m>0?Math.round(u/m*100):0,E=c.filter(T=>T.done).reduce((T,D)=>T+Number(D.duration||0),0),I={};c.forEach(T=>{const D=T.subject||"Diğer";I[D]||(I[D]={total:0,done:0}),I[D].total++,T.done&&I[D].done++});const v=l.exams.filter(T=>T.studentId===e&&T.date>=a&&T.date<=i).sort((T,D)=>T.date.localeCompare(D.date)),f=l.appointments.filter(T=>T.studentId===e&&T.date>=a&&T.date<=i).sort((T,D)=>T.date.localeCompare(D.date)),k=`${new Date(a+"T12:00").toLocaleDateString("tr-TR",{day:"numeric",month:"long",year:"numeric"})} – ${new Date(i+"T12:00").toLocaleDateString("tr-TR",{day:"numeric",month:"long",year:"numeric"})}`;let S="";if(v.length>1){const T=Math.max(...v.map(w=>(EXAM_DEFS[w.type]||[]).reduce((M,L)=>{var R;return M+Number(((R=w.nets)==null?void 0:R[L])||0)},0)),1),D=400,C=80,j=Math.min(40,(D-20)/v.length-4);S=`<svg width="${D}" height="${C+30}" style="overflow:visible">
      ${v.map((w,M)=>{const L=(EXAM_DEFS[w.type]||[]).reduce((q,P)=>{var F;return q+Number(((F=w.nets)==null?void 0:F[P])||0)},0),R=Math.max(Math.round(L/T*(C-10)),4),H=10+M*((D-20)/v.length);return`<rect x="${H}" y="${C-R}" width="${j}" height="${R}" rx="3" fill="${r}" opacity="0.85"/>
          <text x="${H+j/2}" y="${C-R-4}" text-anchor="middle" font-size="10" fill="#333">${L.toFixed(0)}</text>
          <text x="${H+j/2}" y="${C+14}" text-anchor="middle" font-size="9" fill="#666">${g(w.name.replace("Deneme","").replace("TYT","").replace("AYT","").trim()||String(M+1))}</text>`}).join("")}
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
      <p>${k}</p>
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
    <div class="stat-box"><div class="val">%${y}</div><div class="lbl">Tamamlanma</div></div>
    <div class="stat-box"><div class="val">${Math.round(E/60)}</div><div class="lbl">Çalışma (saat)</div></div>
  </div>

  <!-- DERS BAZINDA ÇALIŞMA -->
  ${Object.keys(I).length>0?`
  <div class="section">
    <div class="section-title">📚 Ders Bazında Çalışma</div>
    <table>
      <thead><tr><th>Ders</th><th>Toplam</th><th>Tamamlanan</th><th>Oran</th><th></th></tr></thead>
      <tbody>
        ${Object.entries(I).sort((T,D)=>D[1].total-T[1].total).map(([T,D])=>{const C=Math.round(D.done/D.total*100),j=C>=80?"badge-green":C>=50?"badge-yellow":"badge-red";return`<tr>
            <td><strong>${g(T)}</strong></td>
            <td>${D.total}</td>
            <td>${D.done}</td>
            <td><span class="badge ${j}">%${C}</span></td>
            <td style="width:120px"><div class="prog-bar"><div class="prog-fill" style="width:${C}%"></div></div></td>
          </tr>`}).join("")}
      </tbody>
    </table>
  </div>`:""}

  <!-- DENEMELER -->
  ${v.length>0?`
  <div class="section">
    <div class="section-title">📊 Deneme Sonuçları</div>
    ${S?`<div style="margin-bottom:16px;padding:12px;background:#f8f8f8;border-radius:8px">${S}</div>`:""}
    <table>
      <thead><tr><th>Sınav</th><th>Tarih</th><th>Tür</th>${(EXAM_DEFS[(B=v[0])==null?void 0:B.type]||[]).map(T=>`<th>${T}</th>`).join("")}<th>Toplam</th></tr></thead>
      <tbody>
        ${v.map(T=>{const D=EXAM_DEFS[T.type]||[],C=D.reduce((j,w)=>{var M;return j+Number(((M=T.nets)==null?void 0:M[w])||0)},0).toFixed(1);return`<tr>
            <td><strong>${g(T.name)}</strong></td>
            <td>${new Date(T.date+"T12:00").toLocaleDateString("tr-TR",{day:"numeric",month:"short"})}</td>
            <td>${g(T.type)}</td>
            ${D.map(j=>{var M;const w=Number(((M=T.nets)==null?void 0:M[j])||0);return`<td><span class="badge ${w>=20?"badge-green":w>=12?"badge-yellow":"badge-red"}">${w}</span></td>`}).join("")}
            <td><strong>${C}</strong></td>
          </tr>`}).join("")}
      </tbody>
    </table>
  </div>`:""}

  <!-- RANDEVULAR -->
  ${f.length>0?`
  <div class="section">
    <div class="section-title">📅 Görüşmeler</div>
    <table>
      <thead><tr><th>Tarih</th><th>Saat</th><th>Tür</th><th>Süre</th></tr></thead>
      <tbody>
        ${f.map(T=>`<tr>
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
    <span>${g(n.name)} · ${k}</span>
    <span>Rostrum Akademi Platformu</span>
  </div>
</div>
</body>
</html>`}function Fo(){const e=document.getElementById("rpStuId").value,t=Gt(e,!0),n=window.open("","_blank","width=900,height=700");n.document.write(t),n.document.close()}function Uo(){const e=document.getElementById("rpStuId").value;l.students.find(a=>a.id===e);const t=Gt(e,!1),n=window.open("","_blank");n.document.write(t),n.document.close(),setTimeout(()=>{n.focus(),n.print()},500),K("reportModal"),h('PDF oluşturuluyor — "PDF olarak kaydet" seçin')}async function Go(){const e=document.getElementById("rpStuId").value,t=l.students.find(s=>s.id===e);if(!t)return;const n=`${window.location.origin}/api/generate-pdf-report?studentId=${e}`,a=`Merhaba, ${t.name} isimli öğrencimizin bu dönemki performans ve gelişim raporu hazırlandı. Aşağıdaki bağlantıdan raporu detaylıca görüntüleyebilirsiniz:

🔗 ${n}`,o=`https://api.whatsapp.com/send?text=${encodeURIComponent(a)}`;window.open(o,"_blank"),K("reportModal"),h("WhatsApp yönlendirmesi açıldı ✓")}function qo(){let e=document.getElementById("weeklyPDFModal");e||(e=document.createElement("div"),e.id="weeklyPDFModal",e.className="modal-bg",e.innerHTML=`<div class="modal">
      <button class="modal-close" onclick="cm('weeklyPDFModal')">×</button>
      <h2>🖨️ Haftalık Program PDF</h2>
      <div class="field">
        <label>Koç Notu (isteğe bağlı)</label>
        <textarea id="pdfNote" placeholder="Bu haftaki programla ilgili notunuzu ekleyin..." style="min-height:90px"></textarea>
      </div>
      <button class="btn btn-accent" style="width:100%;justify-content:center;padding:12px" onclick="generateWeeklyPDF()">PDF Oluştur →</button>
    </div>`,document.body.appendChild(e),e.addEventListener("click",t=>{t.target===e&&e.classList.remove("open")})),document.getElementById("pdfNote").value="",N("weeklyPDFModal")}function Wo(){const e=document.getElementById("pdfNote").value.trim();K("weeklyPDFModal"),qn(l.activeStuId,e)}function qn(e,t){var T,D;const n=l.students.find(C=>C.id===e);if(!n)return;const a=(n==null?void 0:n.weekStart)??0,i=V(l.weekOffset,a),o=U(i,6),s=((T=l.workspace)==null?void 0:T.brand_name)||"Rostrum Akademi",r=((D=l.workspace)==null?void 0:D.brand_color)||"#f0a500",d=["Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi","Pazar"],c=["Ocak","Şubat","Mart","Nisan","Mayıs","Haziran","Temmuz","Ağustos","Eylül","Ekim","Kasım","Aralık"],p={deneme:"#f59e0b",soru:"#3b82f6",konu:"#10b981",diger:"#8b5cf6"},m={deneme:"#fffbeb",soru:"#eff6ff",konu:"#f0fdf4",diger:"#faf5ff"},u={deneme:"Deneme",soru:"Soru Bankası",konu:"Konu Anlatımı",diger:"Diğer"},y=Y(new Date);let E=0,I=0,v=0,f="";for(let C=0;C<7;C++){const j=U(i,C),w=Y(j),M=l.tasks[`${e}_${w}`]||[];E+=M.length,I+=M.filter(P=>P.done).length,v+=M.reduce((P,F)=>P+Number(F.duration||0),0);const L=w===y,R=d[(a+C)%7].slice(0,3).toUpperCase(),H=M.reduce((P,F)=>P+Number(F.duration||0),0),q=M.map(P=>{const F=p[P.type]||"#94a3b8",J=m[P.type]||"#f8fafc",ce=u[P.type]||"Diğer";return`<div style="margin-bottom:5px;border-radius:7px;background:${J};border:1px solid ${F}28;border-left:3px solid ${F}">
        <div style="padding:6px 8px">
          <div style="font-size:7.5px;font-weight:800;color:${F};text-transform:uppercase;letter-spacing:.5px;margin-bottom:2px">${ce}${P.exam?` · ${P.exam}`:""}</div>
          <div style="font-size:10px;font-weight:700;color:#111;line-height:1.3">${g(P.subject)}</div>
          ${P.note?`<div style="font-size:7.5px;color:#999;margin-top:2px;line-height:1.4;word-break:break-word">${g(P.note)}</div>`:""}
          <div style="display:flex;align-items:center;justify-content:space-between;margin-top:4px">
            <span style="display:inline-flex;align-items:center;gap:4px;font-size:8px;color:#bbb">
              <span style="display:inline-block;width:11px;height:11px;border:1.5px solid #d0cec9;border-radius:3px;flex-shrink:0"></span>
              ${P.duration} dk
            </span>
            ${P.done?'<span style="font-size:8px;font-weight:700;color:#22c55e">✓ Tamam</span>':""}
          </div>
        </div>
      </div>`}).join("");f+=`<div style="padding:0 5px;border-right:${C<6?"1px solid #ede9e3":"none"}">
      <div style="padding-bottom:7px;margin-bottom:7px;border-bottom:2px solid ${L?r:"#ede9e3"}">
        <div style="font-size:8px;font-weight:800;color:${L?r:"#bbb"};text-transform:uppercase;letter-spacing:.8px">${R}</div>
        <div style="font-size:22px;font-weight:900;color:${L?r:"#111"};line-height:1;margin-top:1px">${j.getDate()}</div>
        ${H>0?`<div style="font-size:7px;color:#ccc;margin-top:2px">${H}dk · ${M.length}g</div>`:""}
      </div>
      ${M.length===0?'<div style="font-size:13px;color:#e8e4dc;text-align:center;padding:14px 0">—</div>':q}
    </div>`}const k=E>0?Math.round(I/E*100):0,S=k>=80?"#22c55e":k>=50?r:"#f59e0b",_=n.name.split(" ").map(C=>C[0]).join("").slice(0,2).toUpperCase();let A="";for(let C=0;C<7;C++){const j=U(i,C),w=Y(j),M=l.tasks[`${e}_${w}`]||[];if(M.length===0)continue;const L=d[(a+C)%7],R=M.map((H,q)=>{const P=p[H.type]||"#94a3b8",F=u[H.type]||"Diğer";return`<div style="margin-bottom:12px;padding-bottom:12px;border-bottom:1px solid #eee">
        <div style="display:flex;align-items:baseline;gap:8px">
          <span style="font-size:12px;font-weight:800;color:${P}">${q+1}. ${F}${H.exam?` (${H.exam})`:""}</span>
          <span style="font-size:12px;font-weight:700;color:#111">${g(H.subject)}</span>
          <span style="font-size:11px;color:#666;margin-left:auto">${H.duration} dk</span>
        </div>
        ${H.note?`<div style="font-size:10px;color:#555;margin-top:4px;padding-left:14px;border-left:2px solid ${P}40;line-height:1.5">${g(H.note).replace(/\n/g,"<br>")}</div>`:""}
      </div>`}).join("");A+=`<div style="margin-bottom:24px">
      <h3 style="font-size:14px;font-weight:800;color:${r};border-bottom:2px solid ${r}40;padding-bottom:4px;margin-bottom:10px">${j.getDate()} ${c[j.getMonth()]} - ${L}</h3>
      <div>${R}</div>
    </div>`}const $=`<!DOCTYPE html><html lang="tr"><head><meta charset="UTF-8">
  <style>
    *{margin:0;padding:0;box-sizing:border-box;}
    body{font-family:'Segoe UI',-apple-system,Arial,sans-serif;background:#fff;color:#111;}
    @media print{
      .no-print{display:none!important;}
      @page{size:A4 landscape;margin:5mm;}
      .page-break{page-break-before:always;}
    }
  </style>
  </head><body>

  <!-- ACCENT BAR -->
  <div style="height:5px;background:${r}"></div>

  <!-- HEADER -->
  <div style="display:flex;justify-content:space-between;align-items:center;padding:12px 18px 11px;border-bottom:1px solid #ede9e3">
    <div>
      <div style="font-size:18px;font-weight:900;color:${r};letter-spacing:-.3px">${g(s)}</div>
      <div style="font-size:9.5px;color:#bbb;margin-top:2px;letter-spacing:.2px">Haftalık Çalışma Programı</div>
    </div>
    <div style="display:flex;align-items:center;gap:12px">
      <div style="text-align:right">
        <div style="font-size:14px;font-weight:800;color:#111">${g(n.name)}</div>
        ${n.target?`<div style="font-size:8.5px;color:#aaa;margin-top:1px">🎯 ${g(n.target)}</div>`:""}
        <div style="font-size:8.5px;color:#bbb;margin-top:1px">${i.getDate()} ${c[i.getMonth()]} – ${o.getDate()} ${c[o.getMonth()]} ${o.getFullYear()}</div>
      </div>
      <div style="width:40px;height:40px;border-radius:10px;background:${r};display:flex;align-items:center;justify-content:center;font-size:16px;font-weight:900;color:#fff;letter-spacing:-.5px;flex-shrink:0">${_}</div>
    </div>
  </div>

  <!-- STATS BAR -->
  <div style="display:flex;align-items:center;gap:0;padding:7px 18px;background:#faf9f8;border-bottom:1px solid #ede9e3">
    <div style="display:flex;align-items:center;gap:18px">
      <div style="text-align:center">
        <div style="font-size:17px;font-weight:900;color:${r};letter-spacing:-.5px">${E}</div>
        <div style="font-size:7.5px;color:#bbb;font-weight:700;text-transform:uppercase;letter-spacing:.5px">Görev</div>
      </div>
      <div style="width:1px;height:26px;background:#ede9e3"></div>
      <div style="text-align:center">
        <div style="font-size:17px;font-weight:900;color:#22c55e;letter-spacing:-.5px">${I}</div>
        <div style="font-size:7.5px;color:#bbb;font-weight:700;text-transform:uppercase;letter-spacing:.5px">Tamamlanan</div>
      </div>
      <div style="width:1px;height:26px;background:#ede9e3"></div>
      <div style="text-align:center">
        <div style="font-size:17px;font-weight:900;color:#3b82f6;letter-spacing:-.5px">${Math.round(v/60)}<span style="font-size:10px">sa</span></div>
        <div style="font-size:7.5px;color:#bbb;font-weight:700;text-transform:uppercase;letter-spacing:.5px">Süre</div>
      </div>
      <div style="width:1px;height:26px;background:#ede9e3"></div>
      <div style="display:flex;align-items:center;gap:8px">
        <div style="width:90px;height:7px;background:#ede9e3;border-radius:99px;overflow:hidden">
          <div style="height:100%;width:${k}%;background:${S};border-radius:99px"></div>
        </div>
        <div style="font-size:14px;font-weight:900;color:${S};min-width:36px">%${k}</div>
      </div>
    </div>
  </div>

  <!-- WEEK GRID -->
  <div style="display:grid;grid-template-columns:repeat(7,1fr);padding:10px 8px 6px">${f}</div>

  <!-- COACH NOTE -->
  ${t?`<div style="margin:2px 14px 10px;padding:10px 14px;background:${r}0d;border-left:3px solid ${r};border-radius:0 8px 8px 0">
    <div style="font-size:8px;font-weight:800;color:${r};text-transform:uppercase;letter-spacing:.6px;margin-bottom:3px">Koç Notu</div>
    <div style="font-size:10px;color:#444;line-height:1.6">${g(t)}</div>
  </div>`:""}

  <!-- FOOTER -->
  <div style="display:flex;align-items:center;gap:14px;padding:7px 16px;border-top:1px solid #ede9e3;background:#faf9f8">
    <span style="font-size:8px;color:#ccc;margin-right:4px;font-weight:600">TÜRLER:</span>
    ${Object.entries(u).map(([C,j])=>`<div style="display:flex;align-items:center;gap:4px;font-size:8.5px;color:#888"><div style="width:8px;height:8px;border-radius:2px;background:${p[C]}"></div>${j}</div>`).join("")}
    <div style="margin-left:auto;font-size:8px;color:#ccc">${g(s)} · ${new Date().toLocaleDateString("tr-TR")}</div>
  </div>

  <!-- PRINT BUTTON -->
  <div class="no-print" style="padding:12px 16px;display:flex;align-items:center;gap:12px;border-top:1px solid #ede9e3">
    <button onclick="window.print()" style="background:${r};color:#fff;border:none;padding:10px 28px;border-radius:8px;font-size:13px;font-weight:800;cursor:pointer;letter-spacing:.2px">🖨️ PDF İndir / Yazdır</button>
    <span style="font-size:11px;color:#bbb">Tarayıcı ayarlarından "Arka plan grafikleri"ni aktif edin</span>
  </div>

  <!-- PAGE 2: DETAILED LIST VIEW -->
  ${A?`
  <div class="page-break" style="padding:40px 30px;max-width:1000px;margin:0 auto">
    <div style="font-size:18px;font-weight:900;color:${r};margin-bottom:20px;border-bottom:2px solid ${r};padding-bottom:10px">📋 Günlük Detaylı Görev Açıklamaları</div>
    ${A}
  </div>`:""}

  </body></html>`,B=window.open("","_blank","width=1200,height=850");B.document.write($),B.document.close(),setTimeout(()=>B.focus(),300)}function Vo(){const e="abcdefghijklmnopqrstuvwxyz",t=()=>Array.from({length:3},()=>e[Math.floor(Math.random()*e.length)]).join("");return`https://meet.google.com/${t()}-${t()}-${t()}`}function Zo(){return`https://zoom.us/j/${Math.floor(Math.random()*9e9)+1e9}`}function Jo(e){navigator.clipboard.writeText(e).then(()=>h("Link kopyalandı ✓")).catch(()=>{const t=document.createElement("textarea");t.value=e,document.body.appendChild(t),t.select(),document.execCommand("copy"),t.remove(),h("Link kopyalandı ✓")})}const Wn=[{name:"Altın",val:"#f0a500",dim:"rgba(240,165,0,.12)"},{name:"Turuncu",val:"#e8622a",dim:"rgba(232,98,42,.12)"},{name:"Mavi",val:"#4da6ff",dim:"rgba(77,166,255,.12)"},{name:"Yeşil",val:"#3ecf8e",dim:"rgba(62,207,142,.12)"},{name:"Mor",val:"#c084fc",dim:"rgba(192,132,252,.12)"},{name:"Pembe",val:"#f472b6",dim:"rgba(244,114,182,.12)"},{name:"Kırmızı",val:"#ff5c5c",dim:"rgba(255,92,92,.12)"},{name:"Turkuaz",val:"#06b6d4",dim:"rgba(6,182,212,.12)"}];function Vn(){try{const e=JSON.parse(localStorage.getItem("ba_theme")||"{}");e.theme==="dark"?document.documentElement.setAttribute("data-theme","dark"):document.documentElement.removeAttribute("data-theme"),e.accent&&Zn(e.accent,e.accentDim,!1)}catch{}}function Zn(e,t,n=!0){if(document.documentElement.style.setProperty("--accent",e),document.documentElement.style.setProperty("--accent-dim",t||"rgba(240,165,0,.12)"),n)try{const a=JSON.parse(localStorage.getItem("ba_theme")||"{}");a.accent=e,a.accentDim=t,localStorage.setItem("ba_theme",JSON.stringify(a))}catch{}}function Xo(e){e==="dark"?document.documentElement.setAttribute("data-theme","dark"):document.documentElement.removeAttribute("data-theme");try{const t=JSON.parse(localStorage.getItem("ba_theme")||"{}");t.theme=e,localStorage.setItem("ba_theme",JSON.stringify(t))}catch{}document.querySelectorAll(".theme-btn").forEach(t=>{const n=t.dataset.theme===e;t.style.background=n?"var(--accent-dim)":"",t.style.borderColor=n?"var(--accent)":"",t.style.color=n?"var(--accent)":""})}function Qo(){let e=document.getElementById("themePanel");if(e){e.remove();return}e=document.createElement("div"),e.id="themePanel";const t=document.documentElement.getAttribute("data-theme")!=="light";e.style.cssText="position:fixed;top:60px;right:12px;background:var(--surface);border:1px solid var(--border2);border-radius:14px;padding:18px;z-index:300;box-shadow:var(--shadow-lg);min-width:230px;animation:fadeUp .2s ease",e.innerHTML=`
    <div style="font-family:'Inter',sans-serif;font-size:13px;font-weight:700;margin-bottom:12px;color:var(--text)">🎨 Tema Ayarları</div>
    <div style="font-size:11px;font-weight:700;color:var(--text-mid);text-transform:uppercase;letter-spacing:.5px;margin-bottom:8px">Mod</div>
    <div style="display:flex;gap:6px;margin-bottom:16px">
      <button class="theme-btn btn btn-ghost btn-sm" data-theme="dark" onclick="setTheme('dark')" style="${t?"background:var(--accent-dim);border-color:var(--accent);color:var(--accent)":""}">🌙 Karanlık</button>
      <button class="theme-btn btn btn-ghost btn-sm" data-theme="light" onclick="setTheme('light')" style="${t?"":"background:var(--accent-dim);border-color:var(--accent);color:var(--accent)"}">☀️ Aydınlık</button>
    </div>
    <div style="font-size:11px;font-weight:700;color:var(--text-mid);text-transform:uppercase;letter-spacing:.5px;margin-bottom:8px">Accent Rengi</div>
    <div style="display:flex;gap:7px;flex-wrap:wrap;margin-bottom:14px">
      ${Wn.map(n=>`<div onclick="applyAccent('${n.val}','${n.dim}');document.getElementById('themePanel').remove()" title="${n.name}"
        style="width:28px;height:28px;border-radius:8px;background:${n.val};cursor:pointer;transition:transform .1s"
        onmouseover="this.style.transform='scale(1.2)'" onmouseout="this.style.transform=''"></div>`).join("")}
    </div>
    <button onclick="document.getElementById('themePanel').remove()" style="width:100%;background:var(--surface2);border:1px solid var(--border);color:var(--text-mid);border-radius:8px;padding:7px;font-family:inherit;font-size:12px;cursor:pointer">Kapat</button>`,document.body.appendChild(e),setTimeout(()=>document.addEventListener("click",function n(a){!e.contains(a.target)&&!a.target.closest("[onclick*=openThemePanel]")&&(e.remove(),document.removeEventListener("click",n))},!0),150)}let gt=[],kt=!1;function Jn(){const e=document.getElementById("aiChatBubble"),t=document.querySelector(".ai-header-name"),n=document.getElementById("aiMessages");if(!e||!t||!n)return;gt=[],n.innerHTML=`
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
    `)}function es(){const e=document.getElementById("aiChatPanel"),t=document.getElementById("aiChatBubble");if(e.classList.contains("open"))e.classList.remove("open"),t.style.display="flex";else{e.classList.add("open"),t.style.display="none";const n=document.getElementById("aiMessages");n.scrollTop=n.scrollHeight,document.getElementById("aiInput").focus()}}function ts(e){document.getElementById("aiInput").value=e,Xn()}function St(){var t;const e={};try{const n=l.students.find(s=>s.id===l.activeStuId);n&&(e.studentName=n.name,e.target=n.target||""),b.role==="parent"&&b.childName&&(e.studentName=b.childName);const a=(l.exams||[]).filter(s=>s.studentId===l.activeStuId).slice(-5);a.length&&(e.recentExams=a.map(s=>({name:s.type+" "+(s.name||""),date:s.date||"",nets:s.nets||{}})));let i=[];if(Object.entries(l.tasks||{}).forEach(([s,r])=>{s.startsWith(l.activeStuId+"_")&&(i=i.concat(r))}),i.length){const s=i.filter(r=>r.done).length;e.taskCompletionRate=Math.round(s/i.length*100),e.weeklyTaskCount=i.length}const o=Object.keys(EXAM_DEFS);a.length&&(e.examProfile=((t=a[0])==null?void 0:t.type)||o[0])}catch(n){console.warn("AI context error:",n)}return e}function $e(e,t){gt.push({role:e,content:t});const n=document.getElementById("aiMessages"),a=n.querySelector(".ai-welcome");a&&a.remove();const i=new Date().toLocaleTimeString("tr-TR",{hour:"2-digit",minute:"2-digit"}),o=document.createElement("div");o.className=`ai-msg ${e}`,o.innerHTML=`${g(t).replace(/\n/g,"<br>")}<div class="ai-msg-time">${i}</div>`,n.appendChild(o),n.scrollTop=n.scrollHeight}async function Xn(){if(kt)return;const e=document.getElementById("aiInput"),t=e.value.trim();if(t){e.value="",$e("user",t),kt=!0,document.getElementById("aiTyping").classList.add("show"),document.getElementById("aiSendBtn").disabled=!0;try{const n=St(),a=b.role||"student",i=(window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1","/api/ai-chat"),o=await fetch(i,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({messages:gt.slice(-10),context:n,userRole:a})});if(o.ok){const s=await o.json();$e("assistant",s.reply||"Yanıt alınamadı.")}else{const s=await Ie(t,n,a);$e("assistant",s)}}catch(n){console.error("AI error:",n);try{const a=St(),i=await Ie(t,a,b.role||"student");$e("assistant",i)}catch{const i=localStorage.getItem("gemini_api_key");$e("assistant","🔒 Bu özellik ileride aktif olacaktır. Yakında kullanıma açılacak.")}}finally{kt=!1,document.getElementById("aiTyping").classList.remove("show"),document.getElementById("aiSendBtn").disabled=!1}}}let wt=null;async function Qn(e){try{const t=await fetch(`https://generativelanguage.googleapis.com/v1beta/models?key=${e}`);if(!t.ok)return null;const a=(await t.json()).models||[];let i=a.find(o=>o.name.toLowerCase().includes("flash")&&o.supportedGenerationMethods.includes("generateContent"));if(i||(i=a.find(o=>o.supportedGenerationMethods.includes("generateContent"))),i)return i.name.replace("models/","")}catch(t){console.warn("Auto-detect model failed:",t)}return null}async function Ie(e,t,n){var p,m,u,y,E,I;let a=localStorage.getItem("gemini_api_key");if(!a)try{const{data:v}=await x.from("platform_settings").select("value").eq("key","ai_settings").maybeSingle();v&&v.value&&v.value.gemini_api_key&&(a=v.value.gemini_api_key)}catch(v){console.warn("DB Gemini API key load error:",v)}const i=a;if(!i)throw new Error("API anahtarı eksik.");let o="gemini-1.5-flash";if(i)if(wt)o=wt;else{const v=await Qn(i);v&&(wt=v,o=v,console.log("[Gemini API] Otomatik model tespiti başarılı:",o))}let s=`Sen "Rostrum Akademi Yapay Zeka Asistanı"sın. Türkiye eğitim sistemine (YKS, LGS) hakim, rolüne göre öğrencilere, velilere veya koçlara destek veren bir yapay zekasın.

Rostrum Akademi İşleyişi, Üyelik ve Fiyatlandırma Bilgileri:
1. Kayıt olan tüm koçlara 14 gün ücretsiz deneme süresi tanımlanır. Bu süre bitiminde panel kilitlenir.
2. Otomatik ödeme/kredi kartı altyapısı yoktur; paket satın alma, ödeme ve lisans uzatma işlemleri tamamen manuel olarak yürütülür.
3. Kullanıcılar paket satın almak, deneme sürelerini uzatmak veya üyeliklerini aktif etmek için Kurucu Emin Ceylan (ceylanemin1928@gmail.com) ile iletişime geçmelidir.
4. Destek panelinde bulunan "Kurucuya / Destek Ekibine Yaz" seçeneği ile doğrudan kurucu ekibe mesaj gönderebilir ve bu ekran üzerinden onunla canlı yazışabilirler.
5. Güncel Paket Fiyatları:
   - Başlangıç Paketi (Starter): Aylık 299 TL
   - Koç Pro Paketi (Pro): Aylık 599 TL
   - Kurumsal Paket (Enterprise): Aylık 1499 TL`;n==="parent"?s+=`
VELİ MODU: Veliye saygılı ve güven verici konuş. Çocuğun durumunu yapıcı aktar.`:n==="student"?s+=`
ÖĞRENCİ MODU (YAPAY ZEKA DERS ASİSTANI):
1. Kendini her zaman net bir şekilde bir Yapay Zeka Ders Asistanı (makine) olarak tanıt. Asla insanmış gibi davranma. "Ben senin koçunum", "Ben senin rehberinim" deme.
2. Kesinlikle duygusal veya motivasyonel koçluk yapma. Öğrencilere "Seni anlıyorum", "Seninle gurur duyuyorum" gibi duygusal/samimi ifadeler kullanma. Öğrenci motivasyon veya program önerisi isterse, bunu yapamayacağını belirt ve: "Ben sadece akademik konularda yardımcı olabilecek mekanik bir yapay zekayım. Bu konuyu kendi koçunla görüşmelisin." diyerek koçuna yönlendir.
3. Sokratik Yöntemi Kullan: Öğrenci bir soruyu çözemediğini söylediğinde veya yardım istediğinde doğrudan cevabı veya tüm adımları hemen yazma! Adım adım ilerle, ipucu ver, öğrenciye açıklayıcı sorular sorarak onun doğru cevabı bulmasını sağla.
4. Sadece mekanik destek ver: Soru çözümü, konu anlatımı, özet çıkarma ve mini testler yap. Ders programı oluşturmayı kesinlikle reddet ve koçuna yönlendir.`:n==="coach"&&(s+=`
KOÇ MODU (YAPAY ZEKA COPILOT):
Karşındaki kişi bir Eğitim Koçudur. Ona profesyonel bir meslektaş gibi hitap et (Hocam, Meslektaşım vb.). Seçili olan öğrenci hakkında veri odaklı analizler, tavsiyeler ve pedagojik öneriler sun.`),n==="coach"&&t.studentName?s+=`
Şu anda seçili olan ve üzerinde çalışılan öğrenci: ${t.studentName}`:t.studentName&&(s+=`
Öğrenci: ${t.studentName}`),t.recentExams&&(s+=`
Son denemeler: ${JSON.stringify(t.recentExams)}`),t.taskCompletionRate!==void 0&&(s+=`
Görev tamamlama: %${t.taskCompletionRate}`),t.target&&(s+=`
Hedef: ${t.target}`);const r=[{role:"user",parts:[{text:s}]},{role:"model",parts:[{text:"Anladım! Rostrum Akademi Yapay Zeka Asistanı olarak hazırım."}]},...gt.slice(-8).map(v=>({role:v.role==="user"?"user":"model",parts:[{text:v.content}]}))],d=await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${o}:generateContent?key=${i}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({contents:r,generationConfig:{temperature:.7,maxOutputTokens:1500}})});if(!d.ok){let v=`HTTP ${d.status}`;try{const f=await d.json();(p=f==null?void 0:f.error)!=null&&p.message&&(v=f.error.message)}catch{}throw new Error(v)}const c=await d.json();return((I=(E=(y=(u=(m=c==null?void 0:c.candidates)==null?void 0:m[0])==null?void 0:u.content)==null?void 0:y.parts)==null?void 0:E[0])==null?void 0:I.text)||"Yanıt üretilemedi."}let qt="";async function ns(e){const t=l.students.find(a=>a.id===e);if(!t)return;const n=document.getElementById("aiCopilotBtn");n.disabled=!0,n.textContent="⌛ Analiz Ediliyor ve Taslak Oluşturuluyor...";try{const a=V(0,t.weekStart||0);let i=0,o=0,s=0;for(let k=0;k<7;k++){const S=l.tasks[`${t.id}_${Y(U(a,k))}`]||[];i+=S.length,o+=S.filter(_=>_.done).length,s+=S.reduce((_,A)=>_+Number(A.duration||0),0)}const r=i>0?Math.round(o/i*100):0,c=(l.exams||[]).filter(k=>k.studentId===e).slice(-5).map(k=>({name:k.type+" "+(k.name||""),date:k.date||"",nets:k.nets||{}})),p={};(l.studentSpeeds||[]).filter(k=>k.student_id===e).forEach(k=>{p[`${k.exam_type}_${k.subject}`]=k.secs_per_question});const m=`Lütfen şu öğrenci için haftalık durum analizi ve öğrenciye gönderilecek haftalık değerlendirme mesajı taslağı oluştur:
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
(Öğrenciye gönderilecek haftalık değerlendirme taslağı)`;let u="";const y={studentName:t.name,target:t.target,recentExams:c,taskCompletionRate:r,weeklyTaskCount:i};try{const k=await fetch("/api/ai-chat",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({messages:[{role:"user",content:m}],context:y,userRole:"coach"})});k.ok?u=(await k.json()).reply:u=await Ie(m,y,"coach")}catch{u=await Ie(m,y,"coach")}let E="Analiz üretilemedi.",I="Taslak üretilemedi.";const v=u.indexOf("[ANALİZ]"),f=u.indexOf("[TASLAK]");v!==-1&&f!==-1?v<f?(E=u.substring(v+8,f).trim(),I=u.substring(f+8).trim()):(I=u.substring(f+8,v).trim(),E=u.substring(v+8).trim()):I=u,document.getElementById("aiCopilotAnalysisBox").innerHTML=`<b>📊 Yapay Zeka Durum Analizi:</b><br>${E.replace(/\n/g,"<br>")}`,document.getElementById("aiCopilotTextarea").value=I,qt=I,document.getElementById("aiCopilotResultArea").style.display="block",document.getElementById("aiCopilotSendBtn").disabled=!0,document.getElementById("aiCopilotEditWarning").style.display="inline"}catch(a){console.error("generateAICopilotDraft error:",a),h("Taslak oluşturulurken hata: "+a.message)}finally{n.disabled=!1,n.textContent="🤖 Durum Analizi Yap ve Taslak Oluştur"}}function as(){const e=document.getElementById("aiCopilotTextarea").value.trim(),t=document.getElementById("aiCopilotSendBtn"),n=document.getElementById("aiCopilotEditWarning");e&&e!==qt?(t.disabled=!1,n.style.display="none"):(t.disabled=!0,n.style.display="inline")}async function is(e){var a;const t=document.getElementById("aiCopilotTextarea").value.trim();if(!t)return;const n=document.getElementById("aiCopilotSendBtn");n.disabled=!0,n.textContent="Gönderiliyor...";try{const i=b.coachId||((a=l.students.find(r=>r.id===e))==null?void 0:a.coachId),{data:o,error:s}=await x.from("messages").insert({student_id:e,coach_id:i,from_role:"coach",text:t,read:!1}).select().single();if(s)throw s;l.messages[e]||(l.messages[e]=[]),l.messages[e].push({_id:o.id,from:"coach",text:t,time:new Date().toLocaleTimeString("tr-TR",{hour:"2-digit",minute:"2-digit"}),read:!1}),h("Taslak mesaj başarıyla düzenlendi ve öğrenciye gönderildi!"),document.getElementById("aiCopilotResultArea").style.display="none",document.getElementById("aiCopilotTextarea").value="",qt=""}catch(i){console.error("sendCopilotDraft error:",i),h("Gönderim hatası: "+i.message),n.disabled=!1}finally{n.textContent="✍️ Düzenlemeyi Kaydet ve Öğrenciye Gönder"}}function ea(){const e=l.students.find(r=>r.id===l.activeStuId),t=b.childName||(e==null?void 0:e.name)||"Öğrenci",n=document.getElementById("view-parent-home");if(!n)return;let a=[];Object.entries(l.tasks||{}).forEach(([r,d])=>{r.startsWith(l.activeStuId+"_")&&(a=a.concat(d))});const i=a.filter(r=>r.done).length,o=a.length?Math.round(i/a.length*100):0,s=(l.exams||[]).filter(r=>r.studentId===l.activeStuId).slice(-3);n.innerHTML=`
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
    </div>`}function ta(){const e=document.getElementById("view-parent-progress");if(!e)return;const t=l.students.find(o=>o.id===l.activeStuId),n=b.childName||(t==null?void 0:t.name)||"Öğrenci",a=(l.exams||[]).filter(o=>o.studentId===l.activeStuId);let i=[];Object.entries(l.tasks||{}).forEach(([o,s])=>{o.startsWith(l.activeStuId+"_")&&(i=i.concat(s))}),e.innerHTML=`
    <div style="padding:24px;max-width:800px;margin:0 auto">
      <div style="font-size:20px;font-weight:800;margin-bottom:20px">📊 ${g(n)} - İlerleme Raporu</div>
      
      <div class="card" style="padding:20px;margin-bottom:16px">
        <div style="font-size:15px;font-weight:700;margin-bottom:16px">📋 Haftalık Görevler</div>
        ${i.length?i.slice(-10).map(o=>`
          <div style="display:flex;align-items:center;gap:10px;padding:8px 0;border-bottom:1px solid var(--border)">
            <div style="width:20px;height:20px;border-radius:50%;background:${o.done?"var(--green)":"var(--surface2)"};border:2px solid ${o.done?"var(--green)":"var(--border)"};display:flex;align-items:center;justify-content:center;font-size:10px;color:#fff">${o.done?"✓":""}</div>
            <div style="flex:1;font-size:13px">${g(o.subject)} <span style="font-size:11px;color:var(--text-dim)">(${Ue(o.type)})</span></div>
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
    </div>`}function na(){const e=document.getElementById("view-parent-ai");e&&(e.innerHTML=`
    <div style="padding:24px;max-width:600px;margin:0 auto;text-align:center">
      <div style="font-size:48px;margin-bottom:16px">🤖</div>
      <div style="font-size:20px;font-weight:800;margin-bottom:8px">AI Koç Asistanı</div>
      <div style="font-size:13px;color:var(--text-mid);margin-bottom:24px;line-height:1.7">Çocuğunuzun eğitim süreci hakkında sorular sorun, deneme analizleri isteyin veya öneriler alın.</div>
      <button class="btn btn-accent" onclick="toggleAIChat()" style="justify-content:center;padding:14px 32px;font-size:15px">💬 AI Asistan ile Konuşmaya Başla</button>
    </div>`)}async function os(){var u;const e=document.getElementById("smId").value,t=document.getElementById("smName").value.trim(),n=Ee(document.getElementById("smUsername").value.trim()),a=document.getElementById("smPass").value,i=document.getElementById("smRole").value,o=document.getElementById("smTarget").value.trim(),s=((u=document.querySelector(".color-opt.sel"))==null?void 0:u.dataset.c)||"#f0a500",r=Number(document.getElementById("smWeekStart").value),d=Number(document.getElementById("smProg").value);if(!t||!n||!a)return h("Ad, kullanıcı adı ve şifre zorunlu!");const c=a.length===64?a:await Be(a),p=n+"@rostrumakademi.com",m={full_name:t,username:n,password_hash:c,role:i,target:o,color:s,week_start:r,progress:d};if(z(!0),e){const{error:y}=await x.from("users").update(m).eq("id",e);if(z(!1),y)return h("Hata: "+y.message);h("Kullanıcı güncellendi ✓")}else{const{data:y,error:E}=await x.rpc("create_new_user",{p_email:p,p_password:a,p_full_name:t,p_username:n,p_role:i,p_target:o,p_color:s,p_progress:d,p_week_start:r,p_coach_id:null,p_institution_id:null,p_exam_profile:"YKS"});if(z(!1),E)return h("Hata: "+E.message);h("Kullanıcı başarıyla oluşturuldu ✓")}K("studentModal"),We()}let fe=[],me={search:"",exam:"",subject:""};function Wt(e){const t=me.search;return e.filter(n=>!(t&&!n.name.toLowerCase().includes(t)&&!(n.publisher||"").toLowerCase().includes(t)||me.exam&&n.exam_type!==me.exam||me.subject&&n.subject!==me.subject))}function ss(){var i,o,s;me.search=(((i=document.getElementById("crSearch"))==null?void 0:i.value)||"").toLowerCase().trim(),me.exam=((o=document.getElementById("crExam"))==null?void 0:o.value)||"",me.subject=((s=document.getElementById("crSubject"))==null?void 0:s.value)||"";const e=document.getElementById("cr-tab-content");if(!e)return;const t=document.querySelector(".cr-tab.active"),n=(t==null?void 0:t.id)==="crt-playlists"?"playlists":(t==null?void 0:t.id)==="crt-analytics"?"analytics":"books",a=Wt(fe);e.innerHTML=vt(n,a)}function vt(e,t){const n=t.filter(r=>r.resource_type==="book"),a=t.filter(r=>r.resource_type==="playlist"),i={Matematik:"#3B82F6",Fizik:"#8B5CF6",Kimya:"#06B6D4",Biyoloji:"#10B981",Geometri:"#6366F1",Türkçe:"#F59E0B",Edebiyat:"#EC4899",Tarih:"#EF4444",Coğrafya:"#84CC16",Felsefe:"#14B8A6","Din Kültürü":"#F97316",Din:"#F97316",Genel:"#6B7280"},o={Matematik:"∑",Fizik:"⚛",Kimya:"🧪",Biyoloji:"🌿",Geometri:"△",Türkçe:"T",Edebiyat:"✒",Tarih:"🏛",Coğrafya:"🌍",Felsefe:"💭","Din Kültürü":"☪",Din:"☪",Genel:"📌"};function s(r,d){if(!r.length)return'<div style="text-align:center;padding:48px;color:var(--text-dim);font-size:13px">Kaynak bulunamadı.</div>';const c={};return r.forEach(p=>{const m=p.exam_type||"Diğer";c[m]||(c[m]={});const u=p.subject||"Genel";c[m][u]||(c[m][u]=[]),c[m][u].push(p)}),Object.entries(c).map(([p,m])=>`
      <div style="margin-bottom:28px">
        <div style="display:flex;align-items:center;gap:8px;margin-bottom:12px">
          <span style="font-size:10px;font-weight:800;letter-spacing:1px;text-transform:uppercase;color:#fff;background:var(--accent);padding:3px 10px;border-radius:99px">${p}</span>
          <div style="flex:1;height:1px;background:var(--border)"></div>
        </div>
        <div style="display:flex;flex-direction:column;gap:16px">
        ${Object.entries(m).map(([u,y])=>{const E=i[u]||"#6B7280",I=o[u]||"📌";return`<div>
            <div style="display:flex;align-items:center;gap:6px;margin-bottom:7px">
              <div style="width:22px;height:22px;border-radius:6px;background:${E}20;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:800;color:${E};flex-shrink:0">${I}</div>
              <span style="font-size:12px;font-weight:700;color:${E}">${u}</span>
              <span style="font-size:10px;color:var(--text-dim)">${y.length} kaynak</span>
            </div>
            <div style="display:flex;flex-direction:column;gap:4px;padding-left:28px">
              ${y.map(v=>`
                <div style="display:flex;align-items:center;padding:10px 14px;border-radius:10px;background:var(--surface);border:1.5px solid var(--border);gap:12px;cursor:default;transition:all .15s;box-shadow:var(--shadow)" onmouseover="this.style.borderColor='${E}';this.style.boxShadow='0 2px 12px ${E}22'" onmouseout="this.style.borderColor='var(--border)';this.style.boxShadow='var(--shadow)'">
                  <div style="flex:1;min-width:0">
                    <div style="font-size:13px;font-weight:700;color:var(--text);margin-bottom:3px">${g(v.name)}${v.coach_id?' <span style="font-size:10px;font-weight:700;color:var(--accent);background:var(--accent-dim);padding:1px 6px;border-radius:99px;margin-left:4px">Özel</span>':""}</div>
                    <div style="display:flex;align-items:center;gap:6px;flex-wrap:wrap">
                      <span style="font-size:11px;font-weight:600;color:var(--text-dim);background:var(--surface2);padding:1px 8px;border-radius:99px;border:1px solid var(--border)">${g(v.publisher||"—")}</span>
                      <span style="font-size:11px;color:var(--text-dim)">${(v.tests||[]).length} ${d==="book"?"test":"video"}</span>
                    </div>
                  </div>
                  ${v.coach_id?`<div style="display:flex;gap:4px;flex-shrink:0">
                    <button class="btn btn-ghost btn-xs" onclick="openResourceModalCoach('${v.id}','${d}')">✏️</button>
                    <button class="btn btn-danger btn-xs" onclick="deleteResourceCoach('${v.id}')">🗑</button>
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
        ${aa(t).map(d=>{const c=d.totalCount>0?Math.round(d.doneCount/d.totalCount*100):0,p=c>=80?"var(--green)":c>=50?"var(--accent)":"var(--text-dim)";return`<div class="analytics-card">
            <div style="font-size:10px;font-weight:700;color:var(--accent);margin-bottom:4px;text-transform:uppercase;letter-spacing:.4px">${d.exam_type} · ${d.subject}</div>
            <div style="font-size:14px;font-weight:800;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;margin-bottom:8px">${g(d.name)}</div>
            <div style="display:flex;justify-content:space-between;font-size:11px;color:var(--text-mid);margin-bottom:6px"><span>Tamamlama</span><span style="font-weight:700;color:${p}">%${c}</span></div>
            <div style="height:5px;background:var(--surface3);border-radius:99px;overflow:hidden;margin-bottom:10px"><div style="height:100%;width:${c}%;background:${p};border-radius:99px"></div></div>
            <div style="display:flex;justify-content:space-between;font-size:11px;color:var(--text-dim)"><span>Atanma: <b>${d.assignedCount}</b></span><span>Öğrenci: <b>${d.studentsCount}</b></span></div>
          </div>`}).join("")||'<div style="grid-column:span 3;text-align:center;padding:40px;color:var(--text-dim)">Kayıtlı performans verisi bulunamadı.</div>'}
      </div>`}async function Je(){const e=document.getElementById("view-coach-resources");if(!e)return;if(!fe.length){e.innerHTML='<div style="max-width:720px;margin:0 auto;padding:40px;text-align:center;color:var(--text-dim);font-size:13px">Kaynaklar yükleniyor…</div>';const{data:a,error:i}=await x.from("resources").select("*").or(`coach_id.eq.${b.coachId},coach_id.is.null`).order("resource_type,exam_type,subject,name");i&&console.error(i),fe=a||[]}me={search:"",exam:"",subject:""};let t="books";const n=document.querySelector(".cr-tab.active");n&&(n.id==="crt-playlists"?t="playlists":n.id==="crt-analytics"&&(t="analytics")),e.innerHTML=`<div style="max-width:720px;margin:0 auto">
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
      ${vt(t,fe)}
    </div>
  </div>`}function rs(e){var n;document.querySelectorAll(".cr-tab").forEach(a=>a.classList.remove("active")),(n=document.getElementById("crt-"+e))==null||n.classList.add("active");const t=Wt(fe);document.getElementById("cr-tab-content").innerHTML=vt(e,t)}function aa(e){const t={};return e.forEach(n=>{t[n.name]={name:n.name,exam_type:n.exam_type,subject:n.subject,assignedCount:0,totalCount:0,doneCount:0,students:new Set}}),Object.entries(l.tasks).forEach(([n,a])=>{const i=n.split("_")[0];a.forEach(o=>{e.forEach(s=>{if(o.subject&&o.subject.includes(s.name)){const r=t[s.name];r&&(r.assignedCount++,r.students.add(i),o.task_items&&Array.isArray(o.task_items)?o.task_items.forEach(d=>{r.totalCount++,(d.done||o.done)&&r.doneCount++}):(r.totalCount++,o.done&&r.doneCount++))}})})}),Object.values(t).map(n=>({...n,studentsCount:n.students.size})).filter(n=>n.assignedCount>0).sort((n,a)=>a.assignedCount-n.assignedCount)}function ls(e,t="book"){const n=t==="playlist";let a=document.getElementById("coachResourceModal");a||(a=document.createElement("div"),a.id="coachResourceModal",a.className="modal-bg",a.innerHTML=`<div class="modal modal-lg">
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
Sayılar - Test 2 | 14`,document.getElementById("crmYtImportBox").style.display=n&&!e?"":"none",document.getElementById("crmTestsField").style.display=n?"none":"",document.getElementById("crmYtUrl").value="",document.getElementById("crmYtStatus").textContent="",document.getElementById("crmVideoPreview").style.display="none",document.getElementById("crmVideoPreview").innerHTML="",window._crmFetchedVideos=[],e?x.from("resources").select("*").eq("id",e).single().then(({data:i})=>{if(i){document.getElementById("crmExam").value=i.exam_type,document.getElementById("crmSubject").value=i.subject,document.getElementById("crmPublisher").value=i.publisher||"",document.getElementById("crmName").value=i.name||"";const o=i.tests||[];n?(document.getElementById("crmTestsField").style.display="",document.getElementById("crmTests").value=o.map(s=>`${s.label||s} | ${s.url||""} | ${s.soru||0}`).join(`
`)):document.getElementById("crmTests").value=o.map(s=>`${s.label||s} | ${s.soru||0}`).join(`
`)}}):(document.getElementById("crmExam").value="TYT",document.getElementById("crmSubject").value="Matematik",document.getElementById("crmPublisher").value="",document.getElementById("crmName").value="",document.getElementById("crmTests").value=""),N("coachResourceModal")}async function ds(){const e=document.getElementById("crmYtUrl").value.trim(),t=document.getElementById("crmYtStatus");if(!e)return t.innerHTML='<span style="color:var(--red)">⚠️ Playlist URL girin</span>';const n=e.match(/[?&]list=([^&]+)/);if(!n)return t.innerHTML='<span style="color:var(--red)">⚠️ list= parametresi bulunamadı</span>';const a=n[1];t.innerHTML="⏳ Çekiliyor...";try{let i=[],o="";do{let r=`/api/youtube?playlistId=${a}`;o&&(r+=`&pageToken=${o}`);const d=await fetch(r);if(!d.ok)throw new Error("Playlist çekilemedi.");const c=await d.json();c.items&&(i=i.concat(c.items)),o=c.nextPageToken||"",t.innerHTML=`⏳ ${i.length} video yükleniyor...`}while(o&&i.length<200);window._crmFetchedVideos=i;const s=document.getElementById("crmVideoPreview");if(s.style.display="",s.innerHTML=i.map((r,d)=>`
      <div style="display:flex;align-items:center;gap:8px;padding:7px 12px;border-bottom:1px solid var(--border)">
        <div style="width:20px;height:20px;border-radius:5px;background:var(--surface3);color:var(--text-mid);font-size:9px;font-weight:800;display:flex;align-items:center;justify-content:center;flex-shrink:0">${d+1}</div>
        <div style="flex:1;min-width:0">
          <div style="font-size:11px;font-weight:600;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${g(r.title)}</div>
          <div style="font-size:10px;color:var(--text-dim)">⏱ ${r.duration||"?"} dk</div>
        </div>
        <a href="${g(r.url)}" target="_blank" style="font-size:10px;font-weight:700;background:#cc000022;color:#ff5555;border:1px solid #aa222233;padding:3px 8px;border-radius:6px;text-decoration:none;flex-shrink:0">▶</a>
      </div>`).join(""),i.length>0&&!document.getElementById("crmName").value){const r=i[0].title;document.getElementById("crmName").value=r.split(" | ")[0].split(" - ")[0].trim().slice(0,50)}t.innerHTML=`<span style="color:var(--green)">✓ ${i.length} video çekildi!</span>`}catch(i){t.innerHTML=`<span style="color:var(--red)">⚠️ Hata: ${i.message}</span>`}}async function cs(){const e=document.getElementById("crmName").value.trim(),t=document.getElementById("crmSubject").value;if(!e||!t)return h("Ad ve ders zorunlu!");const n=document.getElementById("crmId").value,a=document.getElementById("crmType").value==="playlist",i=document.getElementById("crmTests").value.split(`
`).map(d=>d.trim()).filter(Boolean),o=window._crmFetchedVideos||[];let s=[];if(a){if(o.length>0?s=o.map(d=>({label:d.title||"",url:d.url||"",topic:"",soru:parseInt(d.duration)||0})):s=i.map(d=>{const c=d.split("|").map(p=>p.trim());return{label:c[0]||"",url:c[1]||"",topic:"",soru:parseInt(c[2])||0}}),!s.length)return h("Video listesi boş! Önce playlist çekin.")}else s=i.map(d=>{const c=d.split("|").map(p=>p.trim());return{label:c[0]||"",soru:parseInt(c[1])||0}});const r={exam_type:document.getElementById("crmExam").value,subject:t,publisher:document.getElementById("crmPublisher").value.trim(),year:new Date().getFullYear(),name:e,tests:s,active:!0,resource_type:a?"playlist":"book",coach_id:b.coachId};z(!0),n?(await x.from("resources").update(r).eq("id",n),h("Güncellendi ✓")):(await x.from("resources").insert(r),h("Kaynak eklendi ✓")),z(!1),K("coachResourceModal"),fe=[],Je()}async function ps(e){await X("Bu kaynağı silmek istediğinizden emin misiniz?")&&(z(!0),await x.from("resources").delete().eq("id",e),z(!1),h("Silindi"),fe=[],Je())}function ms(e){const t=e.target.files[0];if(!t)return;z(!0);const n=new FileReader;n.onload=async a=>{try{const i=new Uint8Array(a.target.result),o=XLSX.read(i,{type:"array"}),s=o.SheetNames[0],r=o.Sheets[s],d=XLSX.utils.sheet_to_json(r);if(d.length===0)return z(!1),h("Excel dosyası boş!");const c={};d.forEach(u=>{const y=u["Kaynak Adı"]||u.Name||u["Kitap Adı"]||u["Playlist Adı"]||"",I=(u["Kaynak Türü"]||u.Type||u.Tür||"book").toLowerCase().includes("playlist")?"playlist":"book",v=u.Yayınevi||u.Publisher||u.Hoca||"",f=u.Sınav||u.Exam||"TYT",k=u.Ders||u.Subject||"",S=u["Öğe Adı"]||u.Test||u.Video||u["Test Adı"]||u["Video Adı"]||"",_=parseInt(u["Soru Sayısı"]||u.Soru||u.Süre||u["Süre (dk)"]||0),A=u.URL||u.Link||"";if(!y||!k||!S)return;const $=`${y}_${f}_${k}_${I}`;c[$]||(c[$]={exam_type:f,subject:k,publisher:v,name:y,resource_type:I,tests:[]}),c[$].tests.push({label:S,soru:_,url:A,topic:""})});const p=Object.values(c);if(p.length===0)return z(!1),h("Uyumlu veri bulunamadı! Sütun başlıklarını kontrol edin.");let m=0;for(const u of p){const{error:y}=await x.from("resources").insert({...u,year:new Date().getFullYear(),active:!0,coach_id:b.coachId});y||m++}z(!1),h(`✓ Excel'den ${m} kaynak başarıyla aktarıldı!`),fe=[],Je()}catch(i){z(!1),console.error(i),h("Excel okuma hatası: "+i.message)}},n.readAsArrayBuffer(t)}function us(e){const t=e.target.files[0];if(!t)return;z(!0);const n=new FileReader;n.onload=async a=>{try{const i=new Uint8Array(a.target.result),o=XLSX.read(i,{type:"array"}),s=o.Sheets[o.SheetNames[0]],r=XLSX.utils.sheet_to_json(s);if(r.length===0)return z(!1),h("Excel dosyası boş!");let d=0;for(const c of r){const p=c["Ad Soyad"]||c.Ad||c.Name||"",m=c.Hedef||c.Target||"Hedef belirtilmemiş";let u=c["Kullanıcı Adı"]||c.Username||"",y=c.Şifre||c.Password||STU_DEFAULT_PASS;if(!p)continue;u||(u=p.toLowerCase().replace(/\s+/g,"")+Math.floor(Math.random()*100),u=Ee(u));const E=await Be(y),I=u+"@rostrumakademi.com",{data:v,error:f}=await x.rpc("create_new_user",{p_email:I,p_password:y,p_full_name:p,p_username:u,p_role:"student",p_target:m,p_color:"#4da6ff",p_progress:0,p_week_start:0,p_coach_id:b.coachId,p_institution_id:null,p_exam_profile:"YKS"});!f&&v&&(l.students.push({id:v,name:p,target:m,color:"#4da6ff",progress:0,pass:E,weekStart:0,username:u}),d++)}z(!1),h(`✓ Excel'den ${d} öğrenci başarıyla eklendi!`),ue(),Ge()}catch(i){z(!1),console.error(i),h("Excel okuma hatası: "+i.message)}},n.readAsArrayBuffer(t)}function ia(e){if(!l.activeStuId||!O)return null;let t=null;return Object.entries(l.tasks).forEach(([n,a])=>{n.startsWith(l.activeStuId+"_")&&a.forEach(i=>{i.subject&&i.subject.includes(O.name)&&(i.task_items&&Array.isArray(i.task_items)?i.task_items.forEach(o=>{(o.label||o)===e&&(o.done||i.done?t="done":t!=="done"&&(t="pending"))}):i.note&&i.note.includes(e)&&(i.done?t="done":t!=="done"&&(t="pending")))})}),t}async function gs(e,t){var d;const a=`${l.activeStuId}_${e}`,i=(d=l.tasks[a])==null?void 0:d[t];if(!i)return;Te=e,_editingTaskId=i._id,O=null,document.querySelector("#taskModal h2").innerHTML=`Görev Düzenle — <span id="tmDay">${e}</span>`,document.querySelector("#taskModal .btn-accent").textContent="Güncelle",document.getElementById("tmType").value=i.type,document.getElementById("tmExam").value=i.exam||"",document.getElementById("tmDuration").value=i.duration||60,document.getElementById("tmNote").value=i.note||"";const o=i.exam||"",s=i.type;{const c=document.getElementById("tmSubjectSel"),p=document.getElementById("tmSubjectFree");document.getElementById("tmBookVal").value="",document.getElementById("tmBookSearch").value="",document.getElementById("tmBookList").style.display="none",document.getElementById("tmTestWrap").style.display="none";const m=document.getElementById("tmTestSummary");m&&(m.style.display="none"),o&&typeof SUBJECT_MAP<"u"&&SUBJECT_MAP[o]?(c.innerHTML=SUBJECT_MAP[o].map(E=>`<option value="${E}">${E}</option>`).join(""),c.style.display="",p.style.display="none"):(c.style.display="none",p.style.display="");const u=(s==="soru"||s==="konu")&&o;document.getElementById("soruBankasiWrap").style.display=u?"":"none";const y=document.getElementById("tmBookSearch");y&&(y.placeholder=s==="konu"?"Hoca veya playlist ara...":"Kitap veya yayınevi ara...")}if((s==="soru"||s==="konu")&&o){const c=document.getElementById("tmSubjectSel");let p="",m=i.subject;if(i.subject.includes(" - ")){const I=i.subject.split(" - ");p=I[0].trim(),m=I.slice(1).join(" - ").trim()}p&&SUBJECT_MAP[o]&&SUBJECT_MAP[o].includes(p)&&(c.value=p),document.getElementById("tmBookVal").value=m,document.getElementById("tmBookSearch").value=m,z(!0),await kn(),z(!1);const u=`${o}_${p}`;let E=(Q[u]||[]).find(I=>I.name===m);if(E||Object.values(Q).forEach(I=>{const v=I.find(f=>f.name===m);v&&(E=v)}),E){O=E,document.getElementById("tmTestWrap").style.display="",Lt();const I=(i.task_items||[]).map(f=>f.label||f);document.querySelectorAll("#tmTestList input[type=checkbox]").forEach(f=>{var _;const k=parseInt(f.value),S=((_=O.testler[k])==null?void 0:_.label)||O.testler[k];I.includes(S)?f.checked=!0:f.checked=!1}),je()}}else{const c=document.getElementById("tmSubjectSel"),p=document.getElementById("tmSubjectFree");c.style.display!=="none"?c.value=i.subject:p.value=i.subject,document.getElementById("tmBookVal").value="",document.getElementById("tmBookSearch").value="",document.getElementById("tmBookList").style.display="none",document.getElementById("tmTestWrap").style.display="none"}N("taskModal")}async function vs(){const e=prompt("Şablon adı giriniz:");if(!e)return;const t=l.students.find(s=>s.id===l.activeStuId),n=(t==null?void 0:t.weekStart)??0,a=V(l.weekOffset,n),i=[];for(let s=0;s<7;s++){const r=U(a,s),d=Y(r),c=`${l.activeStuId}_${d}`;(l.tasks[c]||[]).forEach(m=>{i.push({day_index:s,type:m.type,exam_type:m.exam||null,subject:m.subject,duration:m.duration,note:m.note||"",task_items:m.task_items||null})})}if(i.length===0)return h("Bu haftada kaydedilecek görev bulunmuyor!");z(!0);const{error:o}=await x.from("program_templates").insert({coach_id:b.coachId,name:e,description:`${i.length} görev içeriyor.`,tasks:i});if(z(!1),o)return h("Şablon kaydedilemedi: "+o.message);h("Hafta şablon olarak kaydedildi ✓")}async function ys(){z(!0);const{data:e,error:t}=await x.from("program_templates").select("*").eq("coach_id",b.coachId);if(z(!1),t)return h("Şablonlar yüklenemedi.");if(!e||e.length===0)return h("Kayıtlı şablonunuz bulunmuyor. Önce haftayı şablon olarak kaydedin.");let n=document.getElementById("applyTemplateModal");n||(n=document.createElement("div"),n.id="applyTemplateModal",n.className="modal-bg",n.innerHTML=`<div class="modal">
      <button class="modal-close" onclick="cm('applyTemplateModal')">×</button>
      <h2>Şablon Uygula</h2>
      <div class="field"><label>Şablon Seçin</label>
        <select id="atmSelect"></select>
      </div>
      <button class="btn btn-accent" style="width:100%;justify-content:center;padding:12px;margin-top:12px" onclick="confirmApplyTemplate()">Uygula</button>
    </div>`,document.body.appendChild(n),n.addEventListener("click",a=>{a.target===n&&n.classList.remove("open")})),document.getElementById("atmSelect").innerHTML=e.map(a=>`<option value="${a.id}">${g(a.name)} (${a.tasks.length} Görev)</option>`).join(""),N("applyTemplateModal")}async function fs(){const e=document.getElementById("atmSelect").value;if(!e)return;z(!0);const{data:t,error:n}=await x.from("program_templates").select("*").eq("id",e).single();if(n||!t)return z(!1),h("Şablon yüklenemedi.");const a=l.students.find(s=>s.id===l.activeStuId),i=(a==null?void 0:a.weekStart)??0,o=V(l.weekOffset,i);for(const s of t.tasks){const r=Y(U(o,s.day_index)),d={student_id:l.activeStuId,coach_id:b.coachId,date:r,type:s.type,exam_type:s.exam_type,subject:s.subject,duration:s.duration,note:s.note,done:!1,task_items:s.task_items},{data:c,error:p}=await x.from("tasks").insert(d).select().single();if(!p&&c){const m=`${l.activeStuId}_${r}`;l.tasks[m]||(l.tasks[m]=[]),l.tasks[m].push({_id:c.id,type:c.type,exam:c.exam_type,subject:c.subject,duration:c.duration,note:c.note,done:!1,student_note:"",task_items:c.task_items})}}z(!1),K("applyTemplateModal"),G(),h("Şablon başarıyla uygulandı ✓")}function xs(e,t){var o;const a=`${l.activeStuId}_${e}`,i=(o=l.tasks[a])==null?void 0:o[t];i&&(_clipboardTask={type:i.type,exam:i.exam,subject:i.subject,duration:i.duration,note:i.note,task_items:i.task_items},h("Görev panoya kopyalandı ✓"),G())}async function bs(e){if(!_clipboardTask)return;const t={student_id:l.activeStuId,coach_id:b.coachId,date:e,type:_clipboardTask.type,exam_type:_clipboardTask.exam||null,subject:_clipboardTask.subject,duration:_clipboardTask.duration,note:_clipboardTask.note,done:!1,task_items:_clipboardTask.task_items};z(!0);const{data:n,error:a}=await x.from("tasks").insert(t).select().single();if(z(!1),a)return h("Hata: "+a.message);const i=`${l.activeStuId}_${e}`;l.tasks[i]||(l.tasks[i]=[]),l.tasks[i].push({_id:n.id,type:n.type,exam:n.exam_type,subject:n.subject,duration:n.duration,note:n.note,done:!1,student_note:"",task_items:n.task_items}),G(),h("Görev yapıştırıldı ✓")}async function hs(e,t){var p;const n=`${l.activeStuId}_${e}`,a=(p=l.tasks[n])==null?void 0:p[t];if(!a)return;const i=l.students.find(m=>m.id===l.activeStuId),o=(i==null?void 0:i.weekStart)??0,s=V(l.weekOffset,o),r=[];for(let m=0;m<7;m++){const u=U(s,m),y=Y(u);y!==e&&r.push({student_id:l.activeStuId,coach_id:b.coachId,date:y,type:a.type,exam_type:a.exam||null,subject:a.subject,duration:a.duration,note:a.note,done:!1,task_items:a.task_items})}if(r.length===0)return;z(!0);const{data:d,error:c}=await x.from("tasks").insert(r).select();if(z(!1),c)return h("Hata: "+c.message);(d||[]).forEach(m=>{const u=`${l.activeStuId}_${m.date}`;l.tasks[u]||(l.tasks[u]=[]),l.tasks[u].push({_id:m.id,type:m.type,exam:m.exam_type,subject:m.subject,duration:m.duration,note:m.note,done:!1,student_note:"",task_items:m.task_items})}),G(),h("Görev tüm haftaya kopyalandı ✓")}async function ks(){if(!_clipboardTask)return;const e=l.students.find(s=>s.id===l.activeStuId),t=(e==null?void 0:e.weekStart)??0,n=V(l.weekOffset,t),a=[];for(let s=0;s<7;s++){const r=U(n,s),d=Y(r);a.push({student_id:l.activeStuId,coach_id:b.coachId,date:d,type:_clipboardTask.type,exam_type:_clipboardTask.exam||null,subject:_clipboardTask.subject,duration:_clipboardTask.duration,note:_clipboardTask.note,done:!1,task_items:_clipboardTask.task_items})}z(!0);const{data:i,error:o}=await x.from("tasks").insert(a).select();if(z(!1),o)return h("Hata: "+o.message);(i||[]).forEach(s=>{const r=`${l.activeStuId}_${s.date}`;l.tasks[r]||(l.tasks[r]=[]),l.tasks[r].push({_id:s.id,type:s.type,exam:s.exam_type,subject:s.subject,duration:s.duration,note:s.note,done:!1,student_note:"",task_items:s.task_items})}),_clipboardTask=null,G(),h("Görev tüm haftaya yapıştırıldı ✓")}Vn();Ht();window.addEventListener("hashchange",()=>{let e=window.location.hash.substring(1);if(document.getElementById("appShell").classList.contains("visible")&&e!==currentTab){if(!e){e={coach:"home",student:"portal",developer:"home",parent:"parent-home"}[b.role]||"portal",window.location.hash=e;return}document.getElementById("view-"+e)&&ee(e,!1)}});async function Vt(){const e=document.getElementById("view-coach-applications");if(!e)return;e.innerHTML=`<div style="padding:24px;max-width:800px;margin:0 auto">
    <div style="font-family:'Inter',sans-serif;font-size:22px;font-weight:800;margin-bottom:4px">Eşleşme Başvuruları</div>
    <div style="font-size:13px;color:var(--text-mid);margin-bottom:20px">koc-bul sayfasından gelen öğrenci başvuruları</div>
    <div id="appsList" style="display:flex;flex-direction:column;gap:10px">
      <div style="text-align:center;padding:32px;color:var(--text-dim)">Yükleniyor...</div>
    </div>
  </div>`;const{data:t,error:n}=await x.from("match_requests").select("*").eq("matched_coach_id",b.coachId).order("created_at",{ascending:!1}),a=document.getElementById("appsList");if(n||!t){a.innerHTML=`<div style="padding:20px;color:var(--red);background:var(--red-dim);border-radius:10px">Başvurular yüklenemedi: ${(n==null?void 0:n.message)||"Bilinmeyen hata"}</div>`;return}if(t.length===0){a.innerHTML=`<div style="text-align:center;padding:40px;color:var(--text-dim)">
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
    </div>`).join("");const s=t.filter(d=>d.status==="pending").length,r=document.getElementById("sbi_coach-applications");if(r){const d=r.querySelector(".sb-badge");if(d&&d.remove(),s>0){const c=document.createElement("span");c.className="sb-badge",c.textContent=s,r.appendChild(c)}}}async function ws(e,t,n,a){var o;const{error:i}=await x.from("match_requests").update({status:t}).eq("id",e);if(i)return h("Hata: "+i.message);h(t==="accepted"?"✓ Başvuru kabul edildi":"Başvuru reddedildi"),n&&fetch("/api/mailer",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({type:"application_update",to:n,student_name:a||"",status:t,coach_name:((o=l.workspace)==null?void 0:o.brand_name)||"Koçunuz"})}).catch(s=>console.warn("[updateApplication] mail error:",s.message)),Vt()}let _e=null;async function oa(){var a;const e=document.getElementById("view-coach-notes");if(!e)return;e.innerHTML=`<div style="padding:24px;max-width:860px;margin:0 auto">
    <div style="font-family:'Inter',sans-serif;font-size:22px;font-weight:800;margin-bottom:4px">Notlarım</div>
    <div style="font-size:13px;color:var(--text-mid);margin-bottom:20px">Kişisel notlar — sadece sen görürsün</div>
    <div style="display:flex;gap:10px;margin-bottom:18px">
      <button onclick="openNoteEditor(null)" style="padding:8px 18px;background:var(--accent);color:#fff;border:none;border-radius:8px;font-size:13px;font-weight:700;cursor:pointer">+ Yeni Not</button>
    </div>
    <div id="coachNotesList" style="display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:12px">
      <div style="grid-column:1/-1;text-align:center;padding:32px;color:var(--text-dim)">Yükleniyor...</div>
    </div>
  </div>`;const t=`coach_notes_${b.coachId}`,{data:n}=await x.from("platform_settings").select("value").eq("key",t).maybeSingle();_e=((a=n==null?void 0:n.value)==null?void 0:a.notes)||[],Zt()}function Zt(){const e=document.getElementById("coachNotesList");if(!e)return;const t=_e;if(!t.length){e.innerHTML=`<div style="grid-column:1/-1;text-align:center;padding:48px;color:var(--text-dim)">
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
    </div>`).join("")}function $s(e){const t=e!==null?_e[e]||{}:{};let n=document.getElementById("coachNoteModal");n||(n=document.createElement("div"),n.id="coachNoteModal",n.className="modal-bg",document.body.appendChild(n)),n.innerHTML=`<div class="modal" style="max-width:520px">
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
  </div>`,n.style.display="flex"}async function Ts(e){const t=document.getElementById("noteEditorTitle").value.trim(),n=document.getElementById("noteEditorBody").value.trim();if(!t&&!n)return h("Not boş olamaz");const a={title:t||"Başlıksız",body:n,updated:new Date().toISOString()};e===null?_e.unshift(a):_e[e]=a,await sa(),document.getElementById("coachNoteModal").style.display="none",Zt(),h("Not kaydedildi ✓")}async function Es(e){await X("Bu notu silmek istiyor musun?")&&(_e.splice(e,1),await sa(),Zt(),h("Not silindi"))}async function sa(){const e=`coach_notes_${b.coachId}`;await x.from("platform_settings").upsert({key:e,value:{notes:_e}},{onConflict:"key"})}window.toggleSidebar=za;window.setupShell=Ma;window.switchTab=ee;window.renderHome=un;window.renderCoachApplications=Vt;window.updateApplication=ws;window.renderCoachNotes=oa;window.openNoteEditor=$s;window.toggleNewResourceMode=ei;window.addManualTest=ti;window.removeManualTest=ni;window.saveCoachNote=Ts;window.deleteCoachNote=Es;window.renderStudentsSearch=Ge;window.filterStudentSearch=Aa;window.openStudentDetail=gn;window.openKonuHaritasi=La;window.openStudentProgram=At;window.openStudentExams=ja;window.openStudentAppointments=Pa;window.renderProfile=fn;window.saveProfile=Oa;window.renderSettings=xn;window.saveGeminiKey=Fa;window.renderProgram=G;window.selectStu=Ua;window.chWeek=Ga;window.goToday=qa;window.openClearWeekModal=Wa;window.toggleDaySel=Va;window.toggleAllDays=Za;window.confirmClearDays=Ja;window.openTaskModal=ai;window.loadResources=kn;window.updateSubjectList=Ct;window.updateBookList=ii;window.renderBookList=dt;window.filterBooks=oi;window.selectBook=si;window.renderTestList=Lt;window.selectAllTests=ri;window.clearAllTests=li;window.updateTestSummary=je;window.selectModalSpeed=di;window.applyDuration=ci;window.loadStudentSpeeds=wn;window.saveStudentSpeed=$n;window.saveTask=pi;window.toggleTask=mi;window.closeTaskMenu=jt;window.showTaskMenu=ui;window.copyTask=gi;window.deleteTask=vi;window.renderTodoList=In;window.renderStudents=zn;window.goProgram=Si;window.openStudentModal=Ii;window.saveStudent=_i;window.showInviteInfo=Bn;window.copyInvite=Bi;window.deleteStu=Mi;window.renderAppointments=qe;window.renderCalDays=ct;window.selCalDay=Ai;window.chCalMonth=Di;window.renderApptList=Pt;window.openApptModal=Ci;window.saveAppt=Li;window.deleteAppt=ji;window.renderExams=Pe;window.openCommentModal=Hi;window.saveComment=Ni;window.deleteExam=Ki;window.renderMessages=jn;window.selectThread=Oi;window.renderThreadHTML=xe;window.sendMsg=Fi;window.scrollMsgs=be;window.renderPortal=pt;window.stuToggleTask=Ui;window.renderSPortal=Me;window.stuToggleTask2=Gi;window.chWeekS=qi;window.openTaskDetail=Rt;window.toggleTaskDetail=Wi;window.toggleDetailItem=Vi;window.selectVideoSpeed=Zi;window.saveTaskDetail=Ji;window.renderSExams=Yt;window.openStudentExamModal=Pn;window.openExamModal=Xi;window.renderNetInputs=Ht;window.saveExam=to;window.renderSMessages=Tt;window.initRealtime=Nt;window.destroyRealtime=Kt;window.renderDevDashboard=Yn;window.renderDevUsers=We;window.openDevUserModal=ao;window.devDeleteUser=io;window.openPlanModal=oo;window.savePlan=so;window.renderDevResources=Ve;window.openPlaylistModal=ro;window.fetchYouTubePlaylist=lo;window.savePlaylist=co;window.openResourceModal=po;window.saveResource=mo;window.devDeleteResource=uo;window.renderDevFinance=mt;window.openPaymentModal=go;window.savePayment=vo;window.openSubModal=yo;window.saveSub=fo;window.renderDevAnnounce=Ze;window.openAnnounceModal=xo;window.saveAnnounce=bo;window.toggleAnnounce=ho;window.devDeleteAnnounce=ko;window.renderDevTickets=Re;window.updateTicketStatus=So;window.devDeleteTicket=Io;window.selectDevTicket=wo;window.sendDevReply=Eo;window.openSupportTicket=_o;window.openSupportChat=ut;window.closeSupportChat=Hn;window.startAISupportChat=zo;window.startEminSupportChat=Bo;window.submitEminInitialMessage=Mo;window.sendSupportMessage=Ao;window.openSupportChatDirect=ut;window.checkCoachSubscription=Mt;window.showTrialExpiredScreen=at;window.loadAnnouncements=Nn;window.saveStudentDev=os;window.showOnboarding=Kn;window.renderOnboardingStep=Ot;window.advanceOnboarding=Do;window.renderSProfil=On;window.saveStudentProfile=Co;window.changePassword=Lo;window.renderCoachProfile=Fn;window.updateProfilePreview=Ft;window.switchPreviewTab=jo;window.nl2br=Un;window.saveCoachProfile=Po;window.renderDevMatches=Ut;window.updateMatchRequestStatus=Ro;window.openSpeedModal=Yo;window.saveAllSpeeds=Ho;window.openStudentNotes=No;window.saveStudentNote=Ko;window.openReportModal=Oo;window.getReportDates=Gn;window.buildReportHTML=Gt;window.previewReport=Fo;window.generatePDF=Uo;window.openWeeklyPDFModal=qo;window.generateWeeklyPDF=Wo;window.printWeeklyProgramWithNote=qn;window.generateMeetLink=Vo;window.generateZoomLink=Zo;window.copyToClipboard=Jo;window.loadTheme=Vn;window.applyAccent=Zn;window.setTheme=Xo;window.openThemePanel=Qo;window.initAIChatForRole=Jn;window.toggleAIChat=es;window.aiQuickSend=ts;window.buildAIContext=St;window.addAIMessage=$e;window.sendAIMessage=Xn;window.autoDetectModel=Qn;window.callGeminiFallback=Ie;window.generateAICopilotDraft=ns;window.checkCopilotDraftEdited=as;window.sendCopilotDraft=is;window.renderParentHome=ea;window.renderParentProgress=ta;window.renderParentAI=na;window.applyResFilter=Wt;window.updateCRFilter=ss;window.buildCRContent=vt;window.renderCoachResources=Je;window.switchCRTab=rs;window.compileResourceStats=aa;window.openResourceModalCoach=ls;window.fetchYtPlaylistCoach=ds;window.saveResourceCoach=cs;window.deleteResourceCoach=ps;window.importResourcesFromExcel=ms;window.importStudentsFromExcel=us;window.getTestStatus=ia;window.openCoachTaskEdit=gs;window.saveWeekAsTemplate=vs;window.applyTemplateToWeek=ys;window.confirmApplyTemplate=fs;window.copyTaskToClipboard=xs;window.pasteTaskFromClipboard=bs;window.copyTaskToWholeWeek=hs;window.pasteTaskToWholeWeek=ks;window.sendWhatsAppReport=Go;window.toggleUserMenu=Ba;window.closeUserMenu=mn;window.renderAgenda=ge;window.openAgendaApptModal=_n;window.deleteAgendaAppt=Ei;window.agendaPrev=bi;window.agendaNext=hi;window.agendaToday=ki;window.agendaSetFilter=wi;window.exportAgendaICS=$i;window.openApptPopup=Sn;window.handleApptDrop=Ti;window.openStudentKaynaklar=Ra;window.addStudentBook=Ya;window.editStudentBook=Ha;window.sbUpdatePct=yn;window.saveStudentBook=Na;window.deleteStudentBook=Ka;window.loadTheme&&window.loadTheme();window.renderNetInputs&&window.renderNetInputs();window.checkOAuthSession&&window.checkOAuthSession();const Ss=new URLSearchParams(window.location.search);if(Ss.get("sandbox")==="true")window.simOAuthLogin&&setTimeout(()=>{console.log("Sandbox auto-login triggered for demokoc..."),window.simOAuthLogin("demokoc")},300);else if(window.location.search.includes("sandbox")||window.location.hash==="#sandbox"){const e=document.getElementById("demoQuickWrap");e&&(e.style.display="flex"),window.showGoogleSimulator&&setTimeout(()=>window.showGoogleSimulator(),300)}"serviceWorker"in navigator&&window.addEventListener("load",()=>{navigator.serviceWorker.register("/sw.js").then(e=>{console.log("Service Worker başarıyla kaydedildi ✓",e.scope)}).catch(e=>{console.warn("Service Worker kaydı başarısız oldu:",e)})});window.addEventListener("hashchange",()=>{let e=window.location.hash.substring(1);if(document.getElementById("appShell").classList.contains("visible")&&e!==window.currentTab){if(!e){e={coach:"home",student:"portal",developer:"home",parent:"parent-home"}[window.session.role]||"portal",window.location.hash=e;return}document.getElementById("view-"+e)&&window.switchTab(e,!1)}});console.log("Rostrum Akademi App initialized successfully ✓");
