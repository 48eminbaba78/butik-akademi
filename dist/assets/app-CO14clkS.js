(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))a(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();const l={students:[],tasks:{},appointments:[],exams:[],messages:{},coachTodos:{},weekOffset:0,calMonth:new Date().getMonth(),calYear:new Date().getFullYear(),calSelDay:null,activeStuId:null,msgThread:null,workspace:null,studentSpeeds:[],konuHaftaSoru:[]},x={role:null,studentId:null,dbUser:null,coachId:null,childName:null};window.S=l;window.session=x;window._loginMode="email";window.STU_DEFAULT_PASS="Rostrum"+Math.floor(1e3+Math.random()*9e3);window.DAYS_TR=["Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi","Pazar"];window.MONTHS_TR=["Ocak","Şubat","Mart","Nisan","Mayıs","Haziran","Temmuz","Ağustos","Eylül","Ekim","Kasım","Aralık"];window.EXAM_DEFS={TYT:["Türkçe","Matematik","Fen","Sosyal"],"AYT-SAY":["Matematik","Fizik","Kimya","Biyoloji"],"AYT-EA":["Matematik","Edebiyat","Tarih","Coğrafya"],"AYT-SOZ":["Edebiyat","Tarih1","Tarih2","Coğrafya1","Coğrafya2","Felsefe","Din"]};window.EXAM_SORU={TYT:{Türkçe:40,Matematik:40,Fen:20,Sosyal:20},"AYT-SAY":{Matematik:40,Fizik:14,Kimya:13,Biyoloji:13},"AYT-EA":{Matematik:40,Edebiyat:24,Tarih:10,Coğrafya:6},"AYT-SOZ":{Edebiyat:24,Tarih1:10,Tarih2:11,Coğrafya1:6,Coğrafya2:11,Felsefe:12,Din:6}};window.EXAM_KONU_MAP={TYT_Türkçe:["Dil Bilgisi"],TYT_Matematik:["TYT Matematik","Geometri"],TYT_Fen:["TYT Fizik","TYT Kimya","TYT Biyoloji"],TYT_Sosyal:[],"AYT-SAY_Matematik":["AYT Matematik","Geometri"],"AYT-SAY_Fizik":["AYT Fizik"],"AYT-SAY_Kimya":["AYT Kimya"],"AYT-SAY_Biyoloji":["AYT Biyoloji"],"AYT-EA_Matematik":["AYT Matematik","Geometri"],"AYT-EA_Edebiyat":["Dil Bilgisi"]};window.SUBJECT_MAP={TYT:["Türkçe","Matematik","Geometri","Fizik","Kimya","Biyoloji","Tarih","Coğrafya","Felsefe","Din"],"AYT-SAY":["Matematik","Geometri","Fizik","Kimya","Biyoloji"],"AYT-EA":["Matematik","Geometri","Edebiyat","Tarih","Coğrafya","Felsefe"],"AYT-SOZ":["Edebiyat","Tarih1","Tarih2","Coğrafya1","Coğrafya2","Felsefe","Din"]};window.currentTab="";window._clipboardTask=null;window._editingTaskId=null;window._regRole=null;window._onbRole=null;window._oauthUser=null;const la="https://imyhenrwmsmyikpollur.supabase.co",da="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlteWhlbnJ3bXNteWlrcG9sbHVyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODAxNDE3ODYsImV4cCI6MjA5NTcxNzc4Nn0._ySJ5ArD1GYthyitHjdyEjLaUhextIwEqpRoF5ScI34",f=supabase.createClient(la,da);window.db=f;function ue(){var e;try{localStorage.setItem("ba_ui_"+(((e=x.dbUser)==null?void 0:e.id)||"x"),JSON.stringify({weekOffset:l.weekOffset,activeStuId:l.activeStuId,calMonth:l.calMonth,calYear:l.calYear}))}catch{}}function Fe(){ue()}function B(e){let t=document.getElementById("loadingOverlay");if(document.querySelectorAll(".btn-login, .btn-accent, .btn").forEach(a=>{e?(a.setAttribute("disabled","true"),a.style.opacity="0.6",a.style.pointerEvents="none"):(a.removeAttribute("disabled"),a.style.opacity="",a.style.pointerEvents="")}),e&&!t){if(t=document.createElement("div"),t.id="loadingOverlay",t.style.cssText="position:fixed;inset:0;background:rgba(15,14,12,.8);z-index:9999;display:flex;align-items:center;justify-content:center;flex-direction:column;gap:12px;backdrop-filter:blur(4px)",t.innerHTML='<div style="width:36px;height:36px;border:3px solid var(--border2);border-top-color:var(--accent);border-radius:50%;animation:spin .8s linear infinite"></div><div style="font-size:13px;color:var(--text-mid)">Yükleniyor...</div>',!document.getElementById("spinStyle")){const a=document.createElement("style");a.id="spinStyle",a.textContent="@keyframes spin{to{transform:rotate(360deg)}}",document.head.appendChild(a)}document.body.appendChild(t)}else!e&&t&&t.remove()}function u(e){return String(e||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function H(e){return e instanceof Date?e.toISOString().split("T")[0]:e}function G(e,t){const n=new Date(e);return n.setDate(n.getDate()+t),n}function ge(){return H(new Date)}function _t(e){return e>=20?"good":e>=12?"mid":"low"}function Ge(e){return{deneme:"📊 Deneme",soru:"📚 Soru",konu:"🎯 Konu",diger:"⭐ Diğer"}[e]||e}function N(e){document.getElementById(e).classList.add("open")}function K(e){document.getElementById(e).classList.remove("open")}function b(e){const t=document.getElementById("toast");t.textContent=e,t.classList.add("show"),setTimeout(()=>t.classList.remove("show"),2300)}document.addEventListener("click",e=>{e.target.classList.contains("modal-bg")&&e.target.id!=="trialExpiredModal"&&e.target.classList.remove("open")});document.addEventListener("keydown",e=>{e.key==="Escape"&&document.querySelectorAll(".modal-bg.open").forEach(t=>{t.id!=="trialExpiredModal"&&t.classList.remove("open")})});function V(e,t=0){const n=new Date,a=n.getDay(),o=(a===0?6:a-1)-t,s=new Date(n);return s.setDate(n.getDate()-(o+7)%7+e*7),s.setHours(0,0,0,0),s}function ca(){const e=l.students.find(t=>t.id===l.activeStuId);return(e==null?void 0:e.weekStart)??0}async function Me(e){const t=await crypto.subtle.digest("SHA-256",new TextEncoder().encode(e));return[...new Uint8Array(t)].map(n=>n.toString(16).padStart(2,"0")).join("")}function _e(e){return e?e.trim().toLowerCase().replace(/ç/g,"c").replace(/ğ/g,"g").replace(/ı/g,"i").replace(/ö/g,"o").replace(/ş/g,"s").replace(/ü/g,"u").replace(/i̇/g,"i").replace(/ı/g,"i").replace(/i/g,"i").replace(/\s+/g,"").replace(/\u0307/g,""):""}function pa(){if(!("Notification"in window)){console.log("Bu tarayıcı anlık bildirimleri desteklemiyor.");return}Notification.permission!=="granted"&&Notification.permission!=="denied"?Notification.requestPermission().then(e=>{e==="granted"&&b("Bildirim izinleri onaylandı ✓")}):Notification.permission==="granted"?b("Bildirim izinleri zaten açık ✓"):b("Bildirim izinleri tarayıcı ayarlarından engellenmiş.")}window.saveUI=ue;window.saveS=Fe;window.showLoading=B;window.esc=u;window.fmtDate=H;window.addDays=G;window.todayStr=ge;window.netColor=_t;window.typeLabel=Ge;window.om=N;window.cm=K;window.showToast=b;window.getWeekStart=V;window.getStudentWeekStart=ca;window.sha256=Me;window.normalizeUsername=_e;window.requestNotificationPermission=pa;async function ma(e,t={}){let n=f.from(e).select("*");Object.entries(t).forEach(([o,s])=>{n=n.eq(o,s)});const{data:a,error:i}=await n;return i&&console.error(e,i),a||[]}const ua=4*60*1e3;function It(){return"ra_d_"+(x.coachId||x.studentId||"x")}function an(){try{localStorage.removeItem(It())}catch{}}function Xt(){try{localStorage.setItem(It(),JSON.stringify({ts:Date.now(),students:l.students,tasks:l.tasks,appointments:l.appointments,exams:l.exams,messages:l.messages,coachTodos:l.coachTodos,studentSpeeds:l.studentSpeeds,workspace:l.workspace,konuHaftaSoru:l.konuHaftaSoru}))}catch{}}function ga(){try{const e=localStorage.getItem(It());if(!e)return!1;const t=JSON.parse(e);return!t.ts||Date.now()-t.ts>ua?!1:(t.students&&(l.students=t.students),t.tasks&&(l.tasks=t.tasks),t.appointments&&(l.appointments=t.appointments),t.exams&&(l.exams=t.exams),t.messages&&(l.messages=t.messages),t.coachTodos&&(l.coachTodos=t.coachTodos),t.studentSpeeds&&(l.studentSpeeds=t.studentSpeeds),t.workspace&&(l.workspace=t.workspace),t.konuHaftaSoru&&(l.konuHaftaSoru=t.konuHaftaSoru),!0)}catch{return!1}}async function Qt(){var j;const e=x.coachId,t=x.role,n=t==="coach"||t==="developer"?f.from("workspaces").select("*").eq("coach_id",e).single():Promise.resolve({data:null});let a=f.from("users").select("*").eq("role","student");t==="student"?a=a.eq("id",x.studentId):(t==="coach"||t==="developer")&&(a=a.eq("coach_id",e));const i=a,o=new Date;o.setDate(o.getDate()-60);const s=o.toISOString().split("T")[0],r=new Date;r.setDate(r.getDate()-30);const d=r.toISOString().split("T")[0],c=t==="student"?f.from("tasks").select("*").eq("student_id",x.studentId).gte("date",s):t==="coach"||t==="developer"?f.from("tasks").select("*").eq("coach_id",e).gte("date",s):f.from("tasks").select("*").gte("date",s),p=t==="student"?f.from("appointments").select("*").eq("student_id",x.studentId).gte("date",d):t==="coach"||t==="developer"?f.from("appointments").select("*").eq("coach_id",e).gte("date",d):f.from("appointments").select("*").gte("date",d),m=t==="student"?f.from("exams").select("*").eq("student_id",x.studentId):t==="coach"||t==="developer"?f.from("exams").select("*").eq("coach_id",e):f.from("exams").select("*"),g=t==="student"?f.from("messages").select("*").eq("student_id",x.studentId).order("created_at",{ascending:!1}).limit(200):t==="coach"||t==="developer"?f.from("messages").select("*").eq("coach_id",e).order("created_at",{ascending:!1}).limit(200):f.from("messages").select("*").order("created_at",{ascending:!1}).limit(200),y=t==="coach"||t==="developer"?f.from("coach_todos").select("*").eq("coach_id",e):Promise.resolve({data:[]}),S=t==="student"?f.from("student_speeds").select("*").eq("student_id",x.studentId):t==="coach"||t==="developer"?f.from("student_speeds").select("*").eq("coach_id",e):f.from("student_speeds").select("*"),I=t==="coach"||t==="developer"?f.from("konu_mastery").select("*").eq("coach_id",e):t==="student"?f.from("konu_mastery").select("*").eq("student_id",x.studentId):Promise.resolve({data:[]}),v=t==="coach"||t==="developer"?f.from("konu_tekrar_log").select("*").eq("coach_id",e):t==="student"?f.from("konu_tekrar_log").select("*").eq("student_id",x.studentId):Promise.resolve({data:[]}),[w,k,_,h,z,T,M,E,D,C]=await Promise.all([n,i,c,p,m,g,y,S,I,v]);(t==="coach"||t==="developer")&&(l.workspace=w.data||null),l.students=(k.data||[]).map($=>({id:$.id,name:$.full_name||$.username||"Öğrenci",target:$.target||"",color:$.color||"#4da6ff",progress:$.progress||0,weekStart:$.week_start||0,username:$.username,coachId:$.coach_id,yksArea:$.yks_area||"SAY"})),l.tasks={},(_.data||[]).forEach($=>{const A=`${$.student_id}_${$.date}`;l.tasks[A]||(l.tasks[A]=[]),l.tasks[A].push({_id:$.id,type:$.type,exam:$.exam_type,subject:$.subject,duration:$.duration,note:$.note,done:$.done,student_note:$.student_note||"",student_result:$.student_result||null,task_items:$.task_items,start_time:$.start_time})}),l.appointments=(h.data||[]).map($=>({id:$.id,studentId:$.student_id,date:$.date,time:$.time,duration:$.duration,type:$.type,note:$.note,meetLink:$.meet_link})),l.exams=(z.data||[]).map($=>({id:$.id,studentId:$.student_id,name:$.name,date:$.date,type:$.exam_type,nets:$.nets||{},examDetails:$.exam_details||{},note:$.student_note,coachComment:$.coach_comment})),l.messages={},(T.data||[]).forEach($=>{l.messages[$.student_id]||(l.messages[$.student_id]=[]),l.messages[$.student_id].push({_id:$.id,from:$.from_role,text:$.text,read:$.read,time:new Date($.created_at).toLocaleTimeString("tr-TR",{hour:"2-digit",minute:"2-digit"})})}),Object.keys(l.messages).forEach($=>l.messages[$].sort((A,L)=>A._id>L._id?1:-1)),l.coachTodos={},(M.data||[]).forEach($=>{l.coachTodos[$.date]||(l.coachTodos[$.date]=[]),l.coachTodos[$.date].push({_id:$.id,task:$.task,note:$.note,done:$.done})}),l.studentSpeeds=E.data||[],l.konuMastery={},(D.data||[]).forEach($=>{l.konuMastery[$.student_id]||(l.konuMastery[$.student_id]={}),l.konuMastery[$.student_id][$.subject]||(l.konuMastery[$.student_id][$.subject]={}),l.konuMastery[$.student_id][$.subject][$.konu]=$}),l.konuTekrarLog={},(C.data||[]).forEach($=>{l.konuTekrarLog[$.student_id]||(l.konuTekrarLog[$.student_id]={}),l.konuTekrarLog[$.student_id][$.subject]||(l.konuTekrarLog[$.student_id][$.subject]={}),l.konuTekrarLog[$.student_id][$.subject][$.konu]||(l.konuTekrarLog[$.student_id][$.subject][$.konu]={}),l.konuTekrarLog[$.student_id][$.subject][$.konu][$.period_start]=$});try{const $=JSON.parse(localStorage.getItem("ba_ui_"+((j=x.dbUser)==null?void 0:j.id))||"{}");$.weekOffset!==void 0&&(l.weekOffset=$.weekOffset),$.activeStuId&&(l.activeStuId=$.activeStuId),$.calMonth!==void 0&&(l.calMonth=$.calMonth,l.calYear=$.calYear)}catch{}}async function on(){if(ga()){Qt().then(()=>{if(Xt(),window.currentTab)try{window.switchTab(window.currentTab)}catch{}}).catch(t=>console.error("Arka plan yenileme hatası:",t));return}B(!0);try{await Qt(),Xt()}catch(t){console.error("loadAllData error",t)}B(!1)}window.dbQ=ma;window.loadAllData=on;window.invalidateCache=an;let $e=!1;function ae(e){const t=document.getElementById("loginErr");t.textContent=e,t.style.display="block",setTimeout(()=>t.style.display="none",5e3)}function Xe(e){const t=document.getElementById("regErr");t.textContent=e,t.style.display="block",setTimeout(()=>t.style.display="none",5e3)}function sn(e){document.getElementById("loginPanel").style.display=e==="login"?"block":"none",document.getElementById("registerPanel").style.display=e==="register"?"block":"none",document.getElementById("lmtLogin").classList.toggle("active",e==="login"),document.getElementById("lmtRegister").classList.toggle("active",e==="register")}function va(e){window._loginMode=e,document.querySelectorAll("#loginTabs .login-tab").forEach((t,n)=>t.classList.toggle("active",n===(e==="email"?0:1))),document.getElementById("loginEmailField").style.display=e==="email"?"block":"none",document.getElementById("loginUserField").style.display=e==="username"?"block":"none"}function ya(e){window._regRole=e,document.getElementById("rrbCoach").classList.toggle("sel",e==="coach"),document.getElementById("rrbStudent").classList.toggle("sel",e==="student")}function fa(e){window._onbRole=e,document.getElementById("onbRoleCoach").classList.toggle("sel",e==="coach"),document.getElementById("onbRoleStudent").classList.toggle("sel",e==="student")}async function xa(){if(window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1"||window.location.protocol==="file:"){ln();return}await rn()}async function rn(){zt(),B(!0);try{const{error:e}=await f.auth.signInWithOAuth({provider:"google",options:{redirectTo:window.location.origin+"/app.html",queryParams:{access_type:"offline",prompt:"select_account"}}});e&&(B(!0),console.warn("Google Auth failed:",e),ae("Google Girişi Başlatılamadı: "+e.message))}catch(e){B(!1),ae("Google Girişi Başlatılamadı: "+e.message)}}function ln(){document.getElementById("googleSimulatorModal").style.display="flex"}function zt(){document.getElementById("googleSimulatorModal").style.display="none"}async function ba(e){if(zt(),B(!0),e==="demokoc"){const{data:t,error:n}=await f.from("users").select("*").eq("username","demokoc").maybeSingle();if(n||!t){B(!1),ae("Demo koç profili bulunamadı!");return}await Ie(t)}else if(e==="demoogrenci"){const{data:t,error:n}=await f.from("users").select("*").eq("username","demoogrenci").maybeSingle();if(n||!t){B(!1),ae("Demo öğrenci profili bulunamadı!");return}await Ie(t)}else if(e==="new"){B(!1),document.getElementById("newUserOnboarding").style.display="flex";const t=Math.floor(1e3+Math.random()*9e3),n=`yeni.kullanici${t}@gmail.com`;document.getElementById("onbEmail").textContent=n,document.getElementById("onbName").value=`Yeni Kullanıcı ${t}`,window._oauthUser={id:`mock-google-id-${t}`,email:n,user_metadata:{full_name:`Yeni Kullanıcı ${t}`}}}}async function dn(){var t,n,a;if(window.location.hash.includes("type=recovery")){console.log("[Auth] Recovery session active, skipping checkOAuthSession");return}if($e)return;$e=!0;let e=null;try{console.log("[Auth] 1/4 getSession...");const{data:{session:i}}=await f.auth.getSession();if(console.log("[Auth] 2/4 session:",((t=i==null?void 0:i.user)==null?void 0:t.email)||"yok"),!(i!=null&&i.user)){$e=!1;return}if((n=document.getElementById("appShell"))!=null&&n.classList.contains("visible")){$e=!1;return}B(!0),e=setTimeout(()=>{console.warn("[Auth] timeout — Supabase yanıt vermedi, spinner kapatılıyor"),$e=!1,B(!1)},1e4),console.log("[Auth] 3/4 profil yükleniyor...");const{data:o,error:s}=await f.from("users").select("*").eq("id",i.user.id).maybeSingle();console.log("[Auth] 4/4 profil:",o==null?void 0:o.role,(s==null?void 0:s.message)||""),clearTimeout(e);let r=!1;if(o){if(o.role==="coach"){const{data:d}=await f.from("workspaces").select("*").eq("coach_id",o.id).maybeSingle();(!d||!d.onboarding_done)&&(r=!0)}}else r=!0;o&&!r?await Ie(o):(B(!1),document.getElementById("newUserOnboarding").style.display="flex",document.getElementById("onbEmail").textContent=i.user.email,document.getElementById("onbName").value=((a=i.user.user_metadata)==null?void 0:a.full_name)||"",window._oauthUser=i.user)}catch(i){clearTimeout(e),$e=!1,B(!1),console.warn("[checkOAuthSession]",i)}}async function ha(){const e=document.getElementById("onbName").value.trim();if(!e){document.getElementById("onbErr").textContent="Ad soyad zorunlu",document.getElementById("onbErr").style.display="block";return}if(!window._onbRole){document.getElementById("onbErr").textContent="Hesap türü seçin",document.getElementById("onbErr").style.display="block";return}document.getElementById("onbErr").style.display="none",B(!0);const t=window._oauthUser,n=e.toLowerCase().replace(/\s+/g,"_").replace(/[^a-z0-9_]/g,""),a={id:t.id,full_name:e,email:t.email,role:window._onbRole,username:n+"_"+Math.random().toString(36).slice(2,6),password_hash:"supabase_managed",color:window._onbRole==="coach"?"#f0a500":"#4da6ff",week_start:0,progress:0,target:""},{data:i,error:o}=await f.from("users").upsert(a).select().single();if(o){B(!1),document.getElementById("onbErr").textContent="Hata: "+o.message,document.getElementById("onbErr").style.display="block";return}document.getElementById("newUserOnboarding").style.display="none",await Ie(i)}let W=0;function ka(e,t){document.getElementById("regBrandColor").value=e,t.parentElement.querySelectorAll("div").forEach(n=>n.style.outline="none"),t.style.outline="3px solid white"}function wa(){const e=document.getElementById("regErr0");if(e&&(e.style.display="none"),W===0){if(!window._regRole){e&&(e.textContent="Lütfen bir hesap türü seçin.",e.style.display="block");return}window._regRole==="student"?W=3:W=1}else if(W===1){if(!document.getElementById("regBrandName").value.trim()){alert("Lütfen akademi / koçluk adını girin.");return}W=2}else W===2&&(W=3);Bt(W)}function $a(){W===3?window._regRole==="student"?W=0:W=2:W===2?W=1:W===1&&(W=0),Bt(W)}function Bt(e){document.getElementById("regWizardStep0").style.display=e===0?"block":"none",document.getElementById("regWizardStepCoach1").style.display=e===1?"block":"none",document.getElementById("regWizardStepCoach2").style.display=e===2?"block":"none",document.getElementById("regWizardStepFinal").style.display=e===3?"block":"none"}async function Ta(){const e=document.getElementById("regName").value.trim(),t=document.getElementById("regEmail").value.trim().toLowerCase(),n=document.getElementById("regPass").value;if(!e||!t||!n)return Xe("Tüm hesap bilgileri zorunludur");if(n.length<8)return Xe("Şifre en az 8 karakter olmalıdır");B(!0);try{let a={full_name:e,role:window._regRole};if(window._regRole==="coach"){const s=document.getElementById("regBrandName").value.trim(),r=document.getElementById("regBrandColor").value||"#f0a500",d=document.getElementById("regPhone").value.trim(),c=[...document.querySelectorAll("#regExamTypesWrap .ob-exam-sel input")].map(g=>g.value),p=c.length>0?c.join(","):"YKS",m=document.getElementById("regStudentCountRange").value||"1-5";a.ob_brand=s,a.ob_color=r,a.ob_phone=d,a.ob_examtypes=p,a.ob_studentcount=m}const{data:i,error:o}=await f.auth.signUp({email:t,password:n,options:{data:a}});if(o)throw o;if(i!=null&&i.user){B(!1),document.getElementById("regName").value="",document.getElementById("regEmail").value="",document.getElementById("regPass").value="",document.getElementById("regBrandName")&&(document.getElementById("regBrandName").value=""),document.getElementById("regPhone")&&(document.getElementById("regPhone").value="");const s=document.getElementById("regSuccess");s.textContent="Kayıt başarılı! E-posta adresinize bir doğrulama bağlantısı gönderildi. Lütfen doğrulama yaptıktan sonra giriş yapın.",s.style.display="block",setTimeout(()=>s.style.display="none",1e4),W=0,Bt(0),sn("login")}}catch(a){B(!1),Xe("Kayıt Hatası: "+a.message)}}async function Ea(){const e=(document.getElementById("loginEmail").value||document.getElementById("loginUser").value||"").trim(),t=document.getElementById("loginPass").value;if(!e||!t)return ae("Kullanıcı adı ve şifre zorunlu");B(!0);const n=setTimeout(()=>{B(!1),ae("Bağlantı zaman aşımına uğradı. Supabase yanıt vermiyor — lütfen tekrar deneyin.")},15e3);try{let a=e;a.includes("@")?a=a.toLowerCase():a=_e(e)+"@rostrumakademi.com";const{data:i,error:o}=await f.auth.signInWithPassword({email:a,password:t});if(!o&&(i!=null&&i.user)){const{data:s,error:r}=await f.from("users").select("*").eq("id",i.user.id).maybeSingle();if(r&&console.error("Profile fetch error:",r),s){clearTimeout(n),await Ie(s);return}return B(!1),ae("Hesabınız veritabanında aktif değil.")}try{const s=_e(e.includes("@")?e.split("@")[0]:e),r=await Me(t),{data:d}=await f.rpc("get_user_by_credentials",{p_username:s,p_password_hash:r}),c=Array.isArray(d)?d[0]:d;if(c){clearTimeout(n),await Ie(c);return}}catch(s){console.warn("Fallback RPC error:",s)}return B(!1),ae(o?"Giriş başarısız: "+o.message:"Kullanıcı adı veya şifre hatalı.")}catch(a){return B(!1),console.error("[doLogin]",a),ae("Giriş hatası: "+a.message)}finally{clearTimeout(n)}}async function Ie(e){var n,a,i,o,s;B(!1);const t=e.role==="coach"||e.role==="developer"?e.id:e.role==="student"||e.role==="parent"?e.coach_id:null;x.role=e.role,x.studentId=e.role==="student"?e.id:null,x.dbUser=e,x.coachId=t,document.getElementById("loginScreen").style.display="none",document.getElementById("appShell").classList.add("visible");try{if(await on(),(x.role==="coach"||x.role==="developer")&&!l.workspace){console.log("[Auth] Workspace not found, auto-creating from signup metadata...");const{data:{user:p}}=await f.auth.getUser();if(p){const m=((n=p.user_metadata)==null?void 0:n.ob_brand)||"Akademi",g=((a=p.user_metadata)==null?void 0:a.ob_color)||"#f0a500",y=((i=p.user_metadata)==null?void 0:i.ob_phone)||null,S=((o=p.user_metadata)==null?void 0:o.ob_examtypes)||"YKS",I=((s=p.user_metadata)==null?void 0:s.ob_studentcount)||"1-5",v={coach_id:e.id,brand_name:m,brand_color:g,phone:y,exam_types:S,student_count_range:I,onboarding_done:!1},{data:w,error:k}=await f.from("workspaces").upsert(v,{onConflict:"coach_id"}).select().maybeSingle();k?console.error("[finishLogin] Create workspace error:",k):w&&(l.workspace=w)}}if(x.role==="student"&&(l.activeStuId=e.id,x.studentId=e.id,l.students.find(p=>p.id===e.id)||l.students.push({id:e.id,name:e.full_name||e.username||"Öğrenci",target:e.target||"",color:e.color||"#4da6ff",progress:e.progress||0,weekStart:e.week_start||0,username:e.username,coachId:e.coach_id})),x.role==="parent"){const{data:p}=await f.from("users").select("*").eq("parent_id",e.id).single();p&&(l.activeStuId=p.id,x.studentId=p.id,x.childName=p.full_name||p.username)}if(window.setupShell(),document.getElementById("aiChatBubble").style.display="flex",(x.role==="coach"||x.role==="developer")&&(!l.workspace||!l.workspace.onboarding_done)){window.switchTab("home"),window.showOnboarding();return}const r=window.location.hash.substring(1),d={coach:"home",student:"portal",developer:"home",parent:"parent-home"}[x.role]||"portal",c=r&&document.getElementById("view-"+r)?r:d;setTimeout(()=>window.switchTab(c),50)}catch(r){B(!1),console.error("[doLogin] HATA:",r),ae("Hata: "+r.message),document.getElementById("loginScreen").style.display="flex",document.getElementById("appShell").classList.remove("visible")}}function Sa(){window._fcInstance&&(window._fcInstance.destroy(),window._fcInstance=null),window.destroyRealtime&&window.destroyRealtime(),f.auth.signOut().catch(()=>{}),an(),x.role=null,x.studentId=null,x.dbUser=null,x.coachId=null,x.childName=null,l.workspace=null,document.getElementById("loginScreen").style.display="flex",document.getElementById("appShell").classList.remove("visible"),document.getElementById("aiChatBubble").style.display="none",document.getElementById("aiChatPanel").classList.remove("open"),document.getElementById("loginEmail")&&(document.getElementById("loginEmail").value=""),document.getElementById("loginUser")&&(document.getElementById("loginUser").value=""),document.getElementById("loginPass").value="",window.location.hash=""}function _a(){window.om("forgotPassModal")}async function Ia(){const e=document.getElementById("forgotEmail").value.trim();if(!e)return;const t=document.getElementById("forgotMsg");try{const n=await fetch("/api/mailer",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({type:"password_reset",email:e})}),a=await n.json();if(!n.ok)throw new Error(a.error||"Sunucu hatası");t.style.display="block",t.style.background="var(--green-dim)",t.style.color="var(--green)",t.textContent="Sıfırlama linki e-posta adresinize gönderildi. Lütfen gelen kutunuzu kontrol edin."}catch(n){t.style.display="block",t.style.background="var(--red-dim)",t.style.color="var(--red)",t.textContent="Hata: "+(n.message||"Bir sorun oluştu.")}}async function za(){const e=document.getElementById("newPasswordInput").value;if(!e||e.length<8){alert("Şifre en az 8 karakter olmalıdır.");return}B(!0);try{const{error:t}=await f.auth.updateUser({password:e});if(t)throw t;const n=await Me(e),{data:{user:a}}=await f.auth.getUser();a&&await f.from("users").update({password_hash:n}).eq("id",a.id),alert("Şifreniz başarıyla güncellendi! Lütfen yeni şifrenizle giriş yapın."),window.cm("resetPasswordModal"),await f.auth.signOut(),window.location.hash="",window.location.reload()}catch(t){alert("Şifre güncellenirken hata oluştu: "+t.message)}finally{B(!1)}}window.loginErr=ae;window.regErr=Xe;window.setAuthMode=sn;window.setLoginMode=va;window.setRegRole=ya;window.setOnbRole=fa;window.loginWithGoogle=xa;window.triggerRealGoogleLogin=rn;window.showGoogleSimulator=ln;window.closeGoogleSimulator=zt;window.simOAuthLogin=ba;window.checkOAuthSession=dn;window.completeOnboarding=ha;window.doRegister=Ta;window.doLogin=Ea;window.finishLogin=Ie;window.doLogout=Sa;window.showForgotPassword=_a;window.sendResetEmail=Ia;window.updateUserPassword=za;window.nextRegWizardStep=wa;window.prevRegWizardStep=$a;window.setRegBrandColor=ka;f.auth.onAuthStateChange(async(e,t)=>{var a;if(e==="PASSWORD_RECOVERY"||window.location.hash.includes("type=recovery")){console.log("[Auth] Password recovery flow active, showing resetPasswordModal"),B(!1),window.om("resetPasswordModal");return}if(e==="SIGNED_IN"&&(t!=null&&t.user)){if((a=document.getElementById("appShell"))!=null&&a.classList.contains("visible"))return;await dn()}e==="SIGNED_OUT"&&($e=!1,B(!1))});function en(){const e=document.getElementById("loginEmail"),t=document.getElementById("loginUser");e&&t&&(e.addEventListener("input",n=>{t.value=n.target.value}),t.addEventListener("input",n=>{e.value=n.target.value}))}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",en):en();function Ne(e){if(!e||e<=0)return"0 sa";const t=Math.floor(e/60),n=e%60;return t>0&&n>0?`${t} sa ${n} dk`:t>0?`${t} sa`:`${n} dk`}window.formatMinToHours=Ne;function J(e){return new Promise(t=>{let n=document.getElementById("customConfirmModal");n||(n=document.createElement("div"),n.id="customConfirmModal",n.className="modal-bg",n.style.zIndex="999999",n.innerHTML=`
        <div class="modal" style="max-width:360px;text-align:center;padding:24px 20px;border-radius:16px;background:var(--surface);border:1px solid var(--border)">
          <div style="font-size:32px;margin-bottom:12px">⚠️</div>
          <div id="confirmMessage" style="font-size:14px;font-weight:700;color:var(--text);margin-bottom:20px;line-height:1.5"></div>
          <div style="display:flex;gap:10px;justify-content:center">
            <button class="btn btn-ghost" id="confirmCancelBtn" style="flex:1;justify-content:center;padding:10px;border-radius:10px">İptal</button>
            <button class="btn btn-accent" id="confirmOkBtn" style="flex:1;justify-content:center;padding:10px;border-radius:10px;background:#ef4444;border-color:#ef4444;color:#fff">Tamam</button>
          </div>
        </div>
      `,document.body.appendChild(n),n.addEventListener("click",r=>{r.target===n&&(n.classList.remove("open"),t(!1))})),n.querySelector("#confirmMessage").textContent=e;const a=n.querySelector("#confirmOkBtn"),i=n.querySelector("#confirmCancelBtn"),o=a.cloneNode(!0),s=i.cloneNode(!0);a.parentNode.replaceChild(o,a),i.parentNode.replaceChild(s,i),n.classList.add("open"),o.focus(),o.onclick=()=>{n.classList.remove("open"),t(!0)},s.onclick=()=>{n.classList.remove("open"),t(!1)}})}window.customConfirm=J;async function Mt(){const e=x.dbUser;if(e&&!(e.email==="ceylanemin1928@gmail.com"||e.email==="simkoc1@rostrumakademi.com"||window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1"||window.__testMode)){if(x.role==="coach"||x.role==="developer"){if((e.plan||"trial")==="trial"){const n=e.trial_ends_at?new Date(e.trial_ends_at):new Date(new Date(e.created_at).getTime()+12096e5);new Date>n&&at()}}else if((x.role==="student"||x.role==="parent")&&x.coachId)try{const{data:t}=await f.from("users").select("plan,trial_ends_at,created_at,email").eq("id",x.coachId).maybeSingle();if(t){if(t.email==="ceylanemin1928@gmail.com"||t.email==="simkoc1@rostrumakademi.com")return;if((t.plan||"trial")==="trial"){const a=t.trial_ends_at?new Date(t.trial_ends_at):new Date(new Date(t.created_at).getTime()+12096e5);new Date>a&&at()}}}catch(t){console.error("Error checking coach subscription:",t)}}}function at(){let e=document.getElementById("trialExpiredModal");e?e.classList.add("open"):(e=document.createElement("div"),e.id="trialExpiredModal",e.className="modal-bg open",e.style.zIndex="9999999",e.innerHTML=`
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
    `,document.body.appendChild(e))}window.openSupportChatDirect=ut;window.checkCoachSubscription=Mt;window.showTrialExpiredScreen=at;const $t=[{id:"home",lbl:"🏠",name:"Ana Sayfa"},{id:"students",lbl:"👤",name:"Öğrencilerim"},{id:"todolist",lbl:"📅",name:"Ajanda"},{id:"coach-resources",lbl:"📚",name:"Kaynaklarım"},{id:"coach-applications",lbl:"📩",name:"Başvurular"}],cn=[{id:"portal",lbl:"🏠",name:"Ana Sayfa"},{id:"sportal",lbl:"📋",name:"Programım"},{id:"sexams",lbl:"📊",name:"Denemeler"},{id:"smessages",lbl:"💬",name:"Koçuma Yaz"},{id:"sprofil",lbl:"👤",name:"Profilim"}],pn=[{id:"dev-dashboard",lbl:"🖥️",name:"Dev Panel"},{id:"dev-tickets",lbl:"🎫",name:"Destek"}],mn=[{id:"parent-home",lbl:"🏠",name:"Ana Sayfa"},{id:"parent-progress",lbl:"📊",name:"İlerleme"},{id:"parent-messages",lbl:"💬",name:"Koça Yaz"},{id:"parent-ai",lbl:"🤖",name:"AI Asistan"}];function Ba(){var e;(e=document.getElementById("mainSidebar"))==null||e.classList.toggle("open")}function Ma(){var e;(e=document.getElementById("tnUserMenu"))==null||e.classList.toggle("open")}function un(){var e;(e=document.getElementById("tnUserMenu"))==null||e.classList.remove("open")}document.addEventListener("click",e=>{const t=document.getElementById("tnUserWrap");t&&!t.contains(e.target)&&un()});function Aa(){var c;Mt();const e=x.role==="coach"?$t:x.role==="developer"?[...$t,...pn]:x.role==="parent"?mn:cn;document.getElementById("sidebarNav").innerHTML=e.map(p=>`
    <div class="tn-nav-item" id="sbi_${p.id}" onclick="switchTab('${p.id}')">
      <span>${p.lbl}</span>
      <span>${p.name}</span>
    </div>`).join(""),document.getElementById("mobileNav").innerHTML=e.slice(0,5).map(p=>`
    <button class="mnav-btn" id="mntab_${p.id}" onclick="switchTab('${p.id}')">${p.lbl}<span style="font-size:9px;display:block">${p.name}</span></button>`).join(""),document.getElementById("mainContent").innerHTML=[...e,{id:"student-detail"},{id:"profile"},{id:"settings"},{id:"coach-resources"},{id:"coach-applications"},{id:"coach-notes"},{id:"coach-profile"},{id:"messages"},{id:"todolist"},{id:"program"},{id:"appointments"},{id:"exams"}].map(p=>`<div class="view" id="view-${p.id}"></div>`).join("");const t=x.dbUser,n=x.role==="student"?l.students.find(p=>p.id===x.studentId):null,a=(t==null?void 0:t.full_name)||(n==null?void 0:n.name)||"",i=a.split(" ").map(p=>p[0]).join("").slice(0,2).toUpperCase(),o={coach:"#f0a500",student:(n==null?void 0:n.color)||"#4da6ff",developer:"#c084fc",parent:"#3ecf8e"},s={coach:"KOÇ",student:"ÖĞRENCİ",developer:"DEV",parent:"VELİ"};if(document.getElementById("sbAv").textContent=i,document.getElementById("sbAv").style.background=o[x.role]||"#888",document.getElementById("sbName").textContent=a,document.getElementById("sbRole").textContent=s[x.role]||x.role,(x.role==="coach"||x.role==="developer")&&((c=l.workspace)!=null&&c.brand_name)){const p=document.querySelector(".sb-logo-text");p&&(p.textContent=l.workspace.brand_name);const m=document.querySelector(".tn-logo .sb-logo-icon");m&&(m.textContent=l.workspace.brand_name.slice(0,1).toUpperCase())}const r=document.getElementById("sb-site-admin");r&&(r.style.display=x.role==="developer"?"flex":"none");const d=document.getElementById("tnCoachProfileItem");d&&(d.style.display=x.role==="coach"||x.role==="developer"?"flex":"none"),Jn(),setTimeout(Kn,600),(x.role==="coach"||x.role==="developer")&&f.from("match_requests").select("id",{count:"exact",head:!0}).eq("matched_coach_id",x.coachId).eq("status","pending").then(({count:p})=>{if(p>0){const m=document.getElementById("sbi_coach-applications");if(m&&!m.querySelector(".sb-badge")){const g=document.createElement("span");g.className="sb-badge",g.textContent=p,m.appendChild(g)}}})}function Q(e,t=!0){var c,p;if(!e)return;currentTab=e,t&&(window.location.hash=e),document.querySelectorAll(".tn-nav-item").forEach(m=>m.classList.remove("active"));const n=document.getElementById("sbi_"+e)||document.getElementById("sb-"+e);n&&n.classList.add("active"),document.querySelectorAll(".view").forEach(m=>m.classList.remove("active"));const a=document.getElementById("view-"+e);a&&a.classList.add("active");const o=[...$t,...cn,...pn,...mn,{id:"profile",name:"Profil"},{id:"settings",name:"Ayarlar"},{id:"student-detail",name:((c=l.students.find(m=>m.id===l.activeStuId))==null?void 0:c.name)||"Öğrenci"},{id:"program",name:"Program"},{id:"appointments",name:"Randevular"},{id:"exams",name:"Denemeler"}].find(m=>m.id===e),s=document.getElementById("tbarTitle");s&&(s.textContent=(o==null?void 0:o.name)||e);const r={home:gn,students:qe,messages:Pn,"coach-applications":Zt,"coach-notes":oa,todolist:In,portal:pt,sportal:ke,sexams:Ht,smessages:Tt,sprofil:Fn,profile:xn,settings:bn,"student-detail":()=>{l.activeStuId?vn(l.activeStuId):Q("students")},program:()=>{l.activeStuId?At(l.activeStuId):Q("students")},exams:()=>{l.activeStuId?Pe():Q("students")},appointments:()=>{l.activeStuId?Ue():Q("students")},"dev-dashboard":Yn,"dev-users":We,"dev-resources":Ve,"dev-finance":mt,"dev-announce":Ze,"dev-tickets":Re,"parent-home":ea,"parent-progress":ta,"parent-messages":Tt,"parent-ai":na,"coach-profile":Gn,"dev-matches":Gt,"coach-resources":Je};try{(p=r[e])==null||p.call(r)}catch(m){console.error("[switchTab] Render error for tab:",e,m),a&&(a.innerHTML=`<div style="padding:24px;color:var(--text)"><b>Hata Oluştu ⚠️</b><p style="color:var(--text-mid);margin-top:6px">${u(m.message)}</p><pre style="font-size:10px;color:var(--text-dim);white-space:pre-wrap;margin-top:8px">${u((m.stack||"").slice(0,400))}</pre></div>`)}e==="messages"||e==="smessages"?Nt():Kt();const d=document.getElementById("aiChatBubble");d&&(e==="dev-tickets"||e.startsWith("dev-")?d.style.display="none":(x.role==="student"||x.role==="coach"||x.role==="parent")&&(d.style.display="flex"))}function gn(){var t,n;const e=document.getElementById("view-home");if(e)try{const a=new Date,i=["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"],o=["Ocak","Şubat","Mart","Nisan","Mayıs","Haziran","Temmuz","Ağustos","Eylül","Ekim","Kasım","Aralık"],s=H(a);let r=0;Object.values(l.messages).forEach(T=>{r+=T.filter(M=>M.from==="student"&&!M.read).length});const d=l.appointments.filter(T=>T.date===s).sort((T,M)=>T.time.localeCompare(M.time)),c=[],p=V(0,0);(l.students||[]).forEach(T=>{let M=0,E=0;for(let A=0;A<7;A++){const L=H(G(p,A)),R=l.tasks[`${T.id}_${L}`]||[];M+=R.length,E+=R.filter(Y=>Y.done).length}const D=M>0?Math.round(E/M*100):0;M>0&&D<30&&c.push({studentId:T.id,studentName:T.name,color:T.color,type:"tasks",icon:"📋",title:"Düşük Görev",desc:`Bu haftaki görev tamamlama oranı <b>%${D}</b>'de kaldı (${E}/${M} görev tamamlandı).`});const C=(l.exams||[]).filter(A=>A.studentId===T.id).sort((A,L)=>new Date(L.date).getTime()-new Date(A.date).getTime()),j={};if(C.forEach(A=>{j[A.type]||(j[A.type]=[]),j[A.type].push(A)}),Object.entries(j).forEach(([A,L])=>{if(L.length>=2){const R=L[0],Y=L[1],U=Object.values(R.nets||{}).reduce((X,ce)=>X+Number(ce||0),0),P=Object.values(Y.nets||{}).reduce((X,ce)=>X+Number(ce||0),0),F=U-P;F<-5&&c.push({studentId:T.id,studentName:T.name,color:T.color,type:"exams",icon:"📉",title:`Net Düşüşü (${A})`,desc:`Son denemede <b>${U} net</b> yaptı. Önceki denemesine (${P} net) göre <b>${Math.abs(F).toFixed(1)} net düşüş</b>.`})}}),M===0&&c.push({studentId:T.id,studentName:T.name,color:T.color,type:"noplan",icon:"📭",title:"Program Yok",desc:"Bu hafta için henüz hiç görev eklenmemiş."}),M>0&&E===0){let A=!1;for(let L=0;L<3;L++){const R=H(G(a,-L));if((l.tasks[`${T.id}_${R}`]||[]).length>0){A=!0;break}}A&&c.push({studentId:T.id,studentName:T.name,color:T.color,type:"inactive",icon:"💤",title:"3 Gündür Pasif",desc:"Son 3 gündür hiçbir görev tamamlanmadı. İletişime geç!"})}M>0&&E===M&&c.push({studentId:T.id,studentName:T.name,color:T.color,type:"perfect",icon:"🏆",title:"Harika Hafta!",desc:`Bu haftaki tüm ${M} görevi tamamladı! Tebrik et.`}),(l.studentSpeeds||[]).filter(A=>A.student_id===T.id).forEach(A=>{let L=120;A.exam_type==="TYT"?["Türkçe","Sosyal"].includes(A.subject)?L=100:["Matematik","Fen"].includes(A.subject)&&(L=130):A.exam_type&&A.exam_type.startsWith("AYT")&&(L=180),A.secs_per_question>L&&c.push({studentId:T.id,studentName:T.name,color:T.color,type:"speed",icon:"⚡",title:`Hız Aşımı (${A.exam_type} - ${A.subject})`,desc:`Soru çözüm hızı <b>${A.secs_per_question} sn/soru</b> (Limit: ${L} sn).`})})});let m="";if(c.length===0)m=`
      <div style="text-align:center;padding:16px;color:var(--text-dim);font-size:13px">
        ✅ Harika! Şu an için kritik bir performans düşüşü veya uyarı bulunmuyor.
      </div>`;else{const T={perfect:{badge:"#3ecf8e",badgeBg:"rgba(62,207,142,.12)",border:"rgba(62,207,142,.25)"},noplan:{badge:"#f0a500",badgeBg:"rgba(240,165,0,.1)",border:"rgba(240,165,0,.2)"},inactive:{badge:"#ff5c7a",badgeBg:"rgba(255,92,122,.08)",border:"rgba(255,92,122,.2)"},tasks:{badge:"#ff5c7a",badgeBg:"rgba(255,92,122,.08)",border:"rgba(255,92,122,.2)"},exams:{badge:"#ff5c7a",badgeBg:"rgba(255,92,122,.08)",border:"rgba(255,92,122,.2)"},speed:{badge:"#f0a500",badgeBg:"rgba(240,165,0,.1)",border:"rgba(240,165,0,.2)"}};m=c.map(M=>{const E=T[M.type]||T.tasks;return`<div style="cursor:pointer;padding:10px 12px;margin-bottom:8px;border-radius:8px;background:${E.badgeBg};border:1px solid ${E.border};display:flex;align-items:center;gap:10px;transition:opacity .15s" onclick="openStudentDetail('${M.studentId}')" onmouseover="this.style.opacity='.85'" onmouseout="this.style.opacity='1'">
        <div style="font-size:18px;width:32px;height:32px;border-radius:8px;background:rgba(255,255,255,.06);display:flex;align-items:center;justify-content:center;flex-shrink:0">${M.icon}</div>
        <div style="flex:1;min-width:0">
          <div style="display:flex;justify-content:space-between;align-items:center;gap:8px;margin-bottom:2px">
            <span style="font-size:13px;font-weight:700">${u(M.studentName)}</span>
            <span style="font-size:10px;font-weight:700;color:${E.badge};white-space:nowrap">${M.title}</span>
          </div>
          <div style="font-size:11px;color:var(--text-mid);line-height:1.4">${M.desc}</div>
        </div>
      </div>`}).join("")}const g=a.getHours(),y=g<6?"İyi geceler":g<12?"Günaydın":g<18?"İyi günler":"İyi akşamlar",S=`${String(g).padStart(2,"0")}:${String(a.getMinutes()).padStart(2,"0")}`,I=d.find(T=>T.time>=S),v=new Date(2026,5,14),w=Math.max(0,Math.ceil((v-a)/(1e3*60*60*24))),k=V(0,0);let _=0,h=0;l.students.forEach(T=>{for(let M=0;M<7;M++){const E=l.tasks[`${T.id}_${H(G(k,M))}`]||[];_+=E.length,h+=E.filter(D=>D.done).length}});const z=_>0?Math.round(h/_*100):0;e.innerHTML=`
    <!-- HERO -->
    <div class="home-hero">
      <div class="home-hero-left">
        <div class="home-hero-greeting">${y},</div>
        <div class="home-hero-name">${u(((n=(t=x.dbUser)==null?void 0:t.full_name)==null?void 0:n.split(" ")[0])||"Koç")} 👋</div>
        <div class="home-hero-date">${i[a.getDay()]}, ${a.getDate()} ${o[a.getMonth()]} ${a.getFullYear()}</div>
      </div>
      <div class="home-hero-right">
        <div class="home-yks-badge">
          <div class="home-yks-num">${w}</div>
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
          <span class="hsv2-icon-wrap ${z>=70?"hsv2-green":z>=40?"hsv2-amber":"hsv2-red"}">📋</span>
          <span class="hsv2-trend" style="color:${z>=70?"var(--green)":z>=40?"var(--accent)":"var(--red)"}">%${z}</span>
        </div>
        <div class="hsv2-val" style="color:${z>=70?"var(--green)":z>=40?"var(--accent)":"var(--red)"}">${h}<span style="font-size:18px;font-weight:500;color:var(--text-dim)">/${_}</span></div>
        <div class="hsv2-lbl">Haftalık Görev</div>
        <div class="hsv2-progress"><div class="hsv2-bar" style="width:${z}%;background:${z>=70?"var(--green)":z>=40?"var(--accent)":"var(--red)"}"></div></div>
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
          ${d.map(T=>{const M=l.students.find(P=>P.id===T.studentId),E=T.time<S,[D,C]=T.time.split(":").map(Number),j=D*60+C,[$,A]=S.split(":").map(Number),L=$*60+A,R=j-L,Y=R>=-(T.duration||60)&&R<=15,U=Y&&T.meet_link?`<a href="${u(T.meet_link)}" target="_blank" style="display:inline-flex;align-items:center;gap:5px;padding:5px 12px;border-radius:8px;background:${R<=0?"var(--red)":"var(--accent)"};color:${R<=0?"white":"#0f0e0c"};font-size:11px;font-weight:800;text-decoration:none;animation:${R<=0?"pulse 1.5s infinite":"none"};white-space:nowrap;flex-shrink:0">${R<=0?"🔴 Ders Sürüyor":"🟡 Derse Gir"}</a>`:"";return`<div class="hsc-appt-row ${E&&!Y?"hsc-appt-past":""}">
              <div class="hsc-appt-time">${T.time}</div>
              <div class="hsc-appt-bar" style="background:${(M==null?void 0:M.color)||"var(--accent)"}"></div>
              <div style="flex:1;min-width:0">
                <div class="hsc-appt-name">${u((M==null?void 0:M.name)||"?")}</div>
                <div class="hsc-appt-meta">${u(T.type)} · ${T.duration} dk${!Y&&T.meet_link?` · <a href="${u(T.meet_link)}" target="_blank" style="color:var(--blue);text-decoration:none">${T.meet_link.includes("zoom")?"Zoom":"Meet"} →</a>`:""}</div>
              </div>
              ${U||(E?'<span class="hsc-appt-done">✓</span>':"")}
            </div>`}).join("")}
        </div>
      </div>
    </div>

    <!-- HIZLI ERİŞİM -->
    <div style="display:flex;gap:8px;max-width:900px;margin:0 auto 4px;justify-content:center">
      ${[{tab:"messages",icon:"💬",label:"Mesajlar",sub:r>0?r+" okunmamış":"Temiz"},{tab:"coach-notes",icon:"📝",label:"Notlarım",sub:"Kişisel notlar"},{tab:"todolist",icon:"📅",label:"Ajanda",sub:"Tüm randevular"},{tab:"coach-applications",icon:"📩",label:"Başvurular",sub:"Eşleşme talepleri"}].map(({tab:T,icon:M,label:E,sub:D})=>`
        <div onclick="switchTab('${T}')" style="background:var(--surface);border:1px solid var(--border);border-radius:10px;padding:9px 16px;cursor:pointer;display:flex;align-items:center;gap:8px;white-space:nowrap;transition:border-color .15s;flex:1;justify-content:center" onmouseover="this.style.borderColor='var(--accent)'" onmouseout="this.style.borderColor='var(--border)'">
          <span style="font-size:16px">${M}</span>
          <div><div style="font-size:12px;font-weight:700">${E}</div><div style="font-size:10px;color:var(--text-dim)">${D}</div></div>
        </div>`).join("")}
    </div>`}catch(a){console.error("[renderHome] HATA:",a),e.innerHTML=`<div style='padding:24px;color:var(--text)'><b>İyi günler 👋</b><p style='color:var(--text-mid);margin-top:6px'>Hata: ${u(a.message)}</p></div>`}}function qe(){const e=document.getElementById("view-students"),t=V(0,0),n={};l.students.forEach(s=>{let r=0,d=0,c=0,p=0;for(let m=0;m<7;m++)(l.tasks[`${s.id}_${H(G(t,m))}`]||[]).forEach(y=>{r++,c+=Number(y.duration||0),y.done&&(d++,p+=Number(y.duration||0))});n[s.id]={total:r,done:d,totalMin:c,doneMin:p}});const a=l.students.length,i=l.students.filter(s=>{const r=n[s.id];return r&&r.total>0}).length,o=l.students.filter(s=>{const r=n[s.id];return r&&r.total>0&&r.done===r.total}).length;e.innerHTML=`<div style="max-width:640px;margin:0 auto">
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
      `:l.students.map(s=>{const r=n[s.id]||{total:0,done:0},d=r.total>0?Math.round(r.done/r.total*100):0,c=d>=80?"var(--green)":d>=40?"var(--accent)":"var(--red)",p=r.total>0&&r.done===r.total,m=l.exams.filter(y=>y.studentId===s.id).sort((y,S)=>S.date.localeCompare(y.date))[0],g=m?Object.values(m.nets||{}).reduce((y,S)=>y+S,0).toFixed(1):null;return`<div class="stu-row" id="sturow_${s.id}" onclick="openStudentDetail('${s.id}')" style="padding:12px 16px;align-items:center;gap:12px;border-radius:10px">
          <div style="width:38px;height:38px;border-radius:10px;background:${s.color};display:flex;align-items:center;justify-content:center;font-size:15px;font-weight:800;color:#fff;flex-shrink:0">${s.name[0]}</div>
          <div style="flex:1;min-width:0">
            <div style="font-size:13px;font-weight:700;color:var(--text)">${u(s.name)}</div>
            <div style="font-size:11px;color:var(--text-dim);margin-top:1px">${u(s.target||"Hedef belirtilmemiş")}</div>
          </div>
          <div style="display:flex;align-items:center;gap:8px;flex-shrink:0;font-size:11px;color:var(--text-mid)">
            <span style="font-weight:700;color:${c}">%${d}</span>
            <span style="color:var(--border2)">·</span>
            <span>${r.done}/${r.total} görev</span>
            ${g?`<span style="color:var(--border2)">·</span><span><b style="color:var(--text)">${g}</b> net</span>`:""}
            ${p?'<span style="color:var(--border2)">·</span><span style="color:var(--green);font-weight:600">✓ Tamam</span>':""}
          </div>
          <svg style="width:13px;height:13px;color:var(--border2);flex-shrink:0" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path d="m9 18 6-6-6-6"/></svg>
        </div>`}).join("")}
    </div>
    <div id="stuSearchNoResults" style="display:none;text-align:center;padding:48px 20px;color:var(--text-dim)">
      <div style="font-size:13px">Aramanızla eşleşen öğrenci bulunamadı.</div>
    </div>
  </div>`}function Da(){const e=document.getElementById("stuSearchInput").value.trim().toLowerCase(),t=document.getElementById("stuSearchNoResults");let n=0;l.students.forEach(a=>{const i=document.getElementById("sturow_"+a.id);if(i){const o=a.name.toLowerCase().includes(e);i.style.display=o?"flex":"none",o&&n++}}),t&&(t.style.display=e&&n===0?"block":"none")}function vn(e){if(!l.students.find(p=>p.id===e))return;l.activeStuId=e;const t=l.students.find(p=>p.id===l.activeStuId),n=V(0,t.weekStart||0);let a=0,i=0,o=0;for(let p=0;p<7;p++){const m=l.tasks[`${t.id}_${H(G(n,p))}`]||[];a+=m.length,i+=m.filter(g=>g.done).length,o+=m.reduce((g,y)=>g+Number(y.duration||0),0)}const s=a>0?Math.round(i/a*100):0,r=s>=80?"var(--green)":s>=50?"var(--accent)":"var(--red)",d=document.getElementById("view-student-detail");d.innerHTML=`
    <button class="back-link" onclick="switchTab('students')">← Öğrencilerim</button>

    <!-- Öğrenci başlık -->
    <div style="display:flex;align-items:flex-start;gap:18px;padding-bottom:24px;border-bottom:1px solid var(--border);margin-bottom:0">
      <div style="width:52px;height:52px;border-radius:12px;background:${t.color};display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:800;color:#fff;flex-shrink:0">${t.name[0]}</div>
      <div style="flex:1;min-width:0">
        <div style="font-size:20px;font-weight:800;letter-spacing:-.3px;line-height:1.2">${u(t.name)}</div>
        <div style="font-size:13px;color:var(--text-mid);margin-top:3px">${u(t.target||"Hedef belirtilmemiş")}</div>
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
    </div>`,currentTab!=="student-detail"&&Q("student-detail");const c=document.getElementById("tbarTitle");c&&(c.textContent=t.name)}const Ae=[{stars:0,label:"Başlanmadı",color:"#6b7280",bg:"rgba(107,114,128,.08)",border:"rgba(107,114,128,.2)"},{stars:1,label:"Anlamadım",color:"#ef4444",bg:"rgba(239,68,68,.08)",border:"rgba(239,68,68,.2)"},{stars:2,label:"Temel Zorluk",color:"#f97316",bg:"rgba(249,115,22,.08)",border:"rgba(249,115,22,.2)"},{stars:3,label:"Temel OK",color:"#eab308",bg:"rgba(234,179,8,.08)",border:"rgba(234,179,8,.2)"},{stars:4,label:"Orta Seviye",color:"#84cc16",bg:"rgba(132,204,22,.08)",border:"rgba(132,204,22,.2)"},{stars:5,label:"İleri Seviye",color:"#22c55e",bg:"rgba(34,197,94,.08)",border:"rgba(34,197,94,.2)"},{stars:6,label:"Uzman",color:"#10b981",bg:"rgba(16,185,129,.08)",border:"rgba(16,185,129,.2)"},{stars:7,label:"Tekrar Dışı (TD)",color:"#3b82f6",bg:"rgba(59,130,246,.1)",border:"rgba(59,130,246,.3)"}];function yn(e){const t=new Date(e),n=t.getDate(),a=n<=10?1:n<=20?11:21;return`${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,"0")}-${String(a).padStart(2,"0")}`}function Ca(e=6){const t=[],n=new Date;let a=new Date(n);for(let i=0;i<e;i++){const o=yn(a);t.find(c=>c.start===o)||t.unshift({start:o,label:La(o)});const[s,r,d]=o.split("-").map(Number);if(d===21?a=new Date(s,r-1,11):d===11?a=new Date(s,r-1,1):a=new Date(s,r-2,21),t.length>=e)break}return t.slice(-e)}function La(e){const[t,n,a]=e.split("-").map(Number),i=["Oca","Şub","Mar","Nis","May","Haz","Tem","Ağu","Eyl","Eki","Kas","Ara"],o=a===1?10:a===11?20:new Date(t,n,0).getDate();return`${a}-${o} ${i[n-1]}`}const tn={SAY:["Dil Bilgisi","TYT Matematik","AYT Matematik","Geometri","TYT Fizik","AYT Fizik","TYT Kimya","AYT Kimya","TYT Biyoloji","AYT Biyoloji"],EA:["Dil Bilgisi","TYT Matematik","AYT Matematik","Geometri","AYT Edebiyat","Tarih (TYT-AYT)","Coğrafya (TYT-AYT)","Felsefe Grubu & Din"],SOZ:["Dil Bilgisi","TYT Matematik","Geometri","AYT Edebiyat","Tarih (TYT-AYT)","Coğrafya (TYT-AYT)","Felsefe Grubu & Din"],DIL:["Dil Bilgisi","TYT Matematik","Geometri","YDT İngilizce"]};async function ja(e){const t=l.students.find(v=>v.id===e);if(!t)return;const n=document.getElementById("view-student-detail");n.innerHTML=`<button class="back-link" onclick="openStudentDetail('${e}')">← ${u(t.name)}</button><div style="padding:20px;color:var(--text-dim);font-size:13px">Yükleniyor…</div>`;const a=x.role==="coach"||x.role==="developer",i=t.yksArea||"SAY",o=tn[i]||tn.SAY;let s=o[0],r="mastery";function d(v,w){var k,_;return((_=(k=l.konuMastery[e])==null?void 0:k[v])==null?void 0:_[w])||null}function c(v,w){var k,_;return((_=(k=l.konuTekrarLog[e])==null?void 0:k[v])==null?void 0:_[w])||{}}async function p(v,w,k,_){const h=d(v,w),z=new Date().toISOString(),T=_||(k>=7?"td":k>0?"active":"not_started"),M={student_id:e,coach_id:x.coachId,subject:v,konu:w,stars:k,status:T,updated_at:z,...T==="active"&&!(h!=null&&h.ka_date)?{ka_date:z}:{},...T==="td"&&!(h!=null&&h.td_date)?{td_date:z}:{},...T==="active"&&(h==null?void 0:h.status)==="td"?{td_date:null}:{}},{data:E,error:D}=await f.from("konu_mastery").upsert(M,{onConflict:"student_id,subject,konu"}).select().single();if(D){b("Hata: "+D.message);return}return l.konuMastery[e]||(l.konuMastery[e]={}),l.konuMastery[e][v]||(l.konuMastery[e][v]={}),l.konuMastery[e][v][w]=E,E}async function m(v,w,k,_){const h=new Date().toISOString(),z={student_id:e,coach_id:x.coachId,subject:v,konu:w,period_start:k,review_count:_,updated_at:h},{data:T,error:M}=await f.from("konu_tekrar_log").upsert(z,{onConflict:"student_id,subject,konu,period_start"}).select().single();if(M){b("Hata: "+M.message);return}return l.konuTekrarLog[e]||(l.konuTekrarLog[e]={}),l.konuTekrarLog[e][v]||(l.konuTekrarLog[e][v]={}),l.konuTekrarLog[e][v][w]||(l.konuTekrarLog[e][v][w]={}),l.konuTekrarLog[e][v][w][k]=T,T}function g(v){const w=Ke[v]||[],k=w.map((E,D)=>{const C=d(v,E),j=(C==null?void 0:C.stars)||0,$=(C==null?void 0:C.status)||"not_started",A=Ae[j],L=$==="td",R=D%2===0?"var(--surface)":"var(--surface2)",Y=c(v,E),U=Object.values(Y).reduce((we,ye)=>we+(ye.review_count||0),0),P=C!=null&&C.last_review_date?new Date(C.last_review_date).toLocaleDateString("tr-TR",{day:"2-digit",month:"short"}):"—",F=a?Array.from({length:7},(we,ye)=>{const se=ye+1,pe=se<=j,yt=v.replace(/'/g,"\\'"),ft=E.replace(/'/g,"\\'");return`<span class="km-star${pe?" km-star-on":""}" data-stars="${se}" 
          onclick="window._kmSetStars('${yt}','${ft}',${se})"
          title="${Ae[se].label}"
          style="cursor:pointer;font-size:16px;line-height:1;transition:transform .1s;display:inline-block"
          onmouseover="this.style.transform='scale(1.25)'" onmouseout="this.style.transform='scale(1)'"
        >${pe?"⭐":"☆"}</span>`}).join(""):Array.from({length:7},(we,ye)=>`<span style="font-size:14px;opacity:${ye<j?1:.25}">${ye<j?"⭐":"☆"}</span>`).join("");let X="";return L?X='<span style="font-size:9px;font-weight:800;color:#3b82f6;background:rgba(59,130,246,.12);border:1px solid rgba(59,130,246,.3);border-radius:4px;padding:1px 5px;margin-left:4px">TD</span>':C!=null&&C.ka_date&&(X='<span style="font-size:9px;font-weight:700;color:#10b981;background:rgba(16,185,129,.1);border:1px solid rgba(16,185,129,.2);border-radius:4px;padding:1px 5px;margin-left:4px">KA✓</span>'),`<tr id="${"km_"+btoa(encodeURIComponent(v+"|"+E)).replace(/[^a-zA-Z0-9]/g,"")}" style="background:${A.bg};border-bottom:1px solid ${A.border};transition:background .3s">
        <td style="padding:10px 14px;font-size:12px;font-weight:600;color:var(--text);min-width:200px;position:sticky;left:0;z-index:1;background:${R};border-right:1px solid var(--border)">
          ${u(E)}${X}
        </td>
        <td style="padding:8px 12px;white-space:nowrap">
          ${F}
        </td>
        <td style="padding:8px 10px;font-size:11px;font-weight:700;color:${A.color};white-space:nowrap">
          ${j>0?A.label:'<span style="color:var(--text-dim)">—</span>'}
        </td>
        <td style="padding:8px 10px;text-align:center;font-size:11px;color:var(--text-mid);white-space:nowrap">
          ${U>0?`<b style="color:var(--text)">${U}×</b>`:"—"}
        </td>
        <td style="padding:8px 10px;text-align:center;font-size:11px;color:var(--text-dim);white-space:nowrap">${P}</td>
        ${a?`<td style="padding:8px 8px;text-align:center;white-space:nowrap">
          <button onclick="window._kmToggleKA('${v.replace(/'/g,"\\'")}','${E.replace(/'/g,"\\'")}')" 
            style="font-size:10px;padding:3px 7px;border-radius:5px;border:1px solid var(--border);background:var(--surface2);color:var(--text-mid);cursor:pointer;margin-right:4px" 
            title="Konu Anlatımı tamamlandı">KA</button>
          <button onclick="window._kmToggleTD('${v.replace(/'/g,"\\'")}','${E.replace(/'/g,"\\'")}')" 
            style="font-size:10px;padding:3px 7px;border-radius:5px;border:1px solid ${L?"#3b82f6":"var(--border)"};background:${L?"rgba(59,130,246,.15)":"var(--surface2)"};color:${L?"#3b82f6":"var(--text-mid)"};cursor:pointer;font-weight:${L?"800":"400"}" 
            title="Tekrar Dışı">TD</button>
        </td>`:""}
      </tr>`}).join(""),_=w.map(E=>d(v,E)),h=Array(8).fill(0);_.forEach(E=>h[(E==null?void 0:E.stars)||0]++);const z=_.filter(E=>(E==null?void 0:E.status)==="td").length,T=_.filter(E=>(E==null?void 0:E.status)==="active").length;return`<div style="display:flex;gap:12px;flex-wrap:wrap;padding:12px 16px;background:var(--surface2);border-bottom:1px solid var(--border);align-items:center">
      <span style="font-size:11px;color:var(--text-dim)"><b style="color:var(--text)">${w.length}</b> konu</span>
      <span style="font-size:11px;color:var(--text-dim)"><b style="color:#3b82f6">${z}</b> TD</span>
      <span style="font-size:11px;color:var(--text-dim)"><b style="color:#22c55e">${T}</b> aktif</span>
      <span style="font-size:11px;color:var(--text-dim)"><b style="color:#6b7280">${h[0]}</b> başlanmadı</span>
      <div style="flex:1;height:6px;background:var(--surface3);border-radius:99px;overflow:hidden;min-width:80px;max-width:200px">
        <div style="height:100%;width:${w.length>0?Math.round(z/w.length*100):0}%;background:#3b82f6;border-radius:99px"></div>
      </div>
      <span style="font-size:11px;color:#3b82f6;font-weight:700">${w.length>0?Math.round(z/w.length*100):0}% TD</span>
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
    </div>`}function y(v){const w=Ke[v]||[],k=Ca(6),_=yn(new Date),h=`<tr style="background:var(--surface2)">
      <th style="padding:8px 14px;text-align:left;font-size:10px;font-weight:800;color:var(--text-dim);border-right:1px solid var(--border);position:sticky;left:0;z-index:2;background:var(--surface2);white-space:nowrap;min-width:200px">KONU</th>
      <th style="padding:8px 8px;text-align:left;font-size:10px;font-weight:800;color:var(--text-dim);white-space:nowrap;min-width:60px">⭐</th>
      ${k.map(T=>`<th style="padding:8px 10px;text-align:center;font-size:10px;font-weight:800;color:${T.start===_?"var(--accent)":"var(--text-dim)"};background:${T.start===_?"var(--accent-dim)":"var(--surface2)"};white-space:nowrap;min-width:100px;border-left:1px solid var(--border)">${T.label}</th>`).join("")}
      <th style="padding:8px 10px;text-align:center;font-size:10px;font-weight:800;color:var(--text-dim);white-space:nowrap;border-left:2px solid var(--border)">TOPLAM</th>
    </tr>`,z=w.map((T,M)=>{const E=d(v,T),D=(E==null?void 0:E.stars)||0,j=((E==null?void 0:E.status)||"not_started")==="td",$=Ae[D],A=M%2===0?"var(--surface)":"var(--surface2)",L=c(v,T);let R=0;const Y=k.map(P=>{const F=L[P.start],X=(F==null?void 0:F.review_count)||0;R+=X;const ce=P.start===_;if(a){const we=Array.from({length:6},(ye,se)=>{const pe=se<X,yt=v.replace(/'/g,"\\'"),ft=T.replace(/'/g,"\\'");return`<span class="kt-box${pe?" kt-box-on":""}"
              onclick="window._ktToggleBox('${yt}','${ft}','${P.start}',${se+1})"
              style="display:inline-block;width:14px;height:14px;border-radius:3px;border:1.5px solid ${pe?$.color:"var(--border2)"};background:${pe?$.bg:"transparent"};cursor:pointer;transition:all .15s;margin:1px"
              title="${se+1}. tekrar"
            ></span>`}).join("");return`<td style="padding:6px 10px;border-left:1px solid var(--border);background:${ce?"var(--accent-dim)":A};text-align:center">${we}</td>`}else{const we=Array.from({length:6},(ye,se)=>{const pe=se<X;return`<span style="display:inline-block;width:12px;height:12px;border-radius:3px;border:1.5px solid ${pe?$.color:"var(--border2)"};background:${pe?$.bg:"transparent"};margin:1px"></span>`}).join("");return`<td style="padding:6px 10px;border-left:1px solid var(--border);background:${ce?"var(--accent-dim)":A};text-align:center">${we}</td>`}}).join(""),U=j?'<span style="font-size:9px;font-weight:800;color:#3b82f6;background:rgba(59,130,246,.12);border:1px solid rgba(59,130,246,.3);border-radius:4px;padding:1px 5px;margin-left:4px">TD</span>':"";return`<tr style="background:${A}">
        <td style="padding:8px 14px;font-size:12px;font-weight:600;color:var(--text);border-right:1px solid var(--border);position:sticky;left:0;z-index:1;background:${A};white-space:nowrap">
          ${u(T)}${U}
        </td>
        <td style="padding:8px 8px;white-space:nowrap">
          <span style="font-size:11px">${"⭐".repeat(Math.max(0,D))}</span>
        </td>
        ${Y}
        <td style="padding:8px 10px;text-align:center;font-size:12px;font-weight:800;color:${R>0?$.color:"var(--text-dim)"};border-left:2px solid var(--border)">${R||0}</td>
      </tr>`}).join("");return`<div style="overflow-x:auto"><table style="border-collapse:collapse;width:max-content;min-width:100%"><thead>${h}</thead><tbody>${z}</tbody></table></div>`}window._kmSetStars=async function(v,w,k){const _=d(v,w),h=(_==null?void 0:_.status)==="td"&&k<7?"active":null;await p(v,w,k,h);const z="km_"+btoa(encodeURIComponent(v+"|"+w)).replace(/[^a-zA-Z0-9]/g,"");if(document.getElementById(z)){const M=g(v);document.getElementById("khTable").innerHTML=M}b(`${w}: ${Ae[k].label} ✓`)},window._kmToggleKA=async function(v,w){const k=d(v,w),_=new Date().toISOString(),h=!!(k!=null&&k.ka_date),z={student_id:e,coach_id:x.coachId,subject:v,konu:w,stars:(k==null?void 0:k.stars)||1,status:(k==null?void 0:k.status)||"active",ka_date:h?null:_,updated_at:_},{data:T,error:M}=await f.from("konu_mastery").upsert(z,{onConflict:"student_id,subject,konu"}).select().single();if(M){b("Hata: "+M.message);return}l.konuMastery[e]||(l.konuMastery[e]={}),l.konuMastery[e][v]||(l.konuMastery[e][v]={}),l.konuMastery[e][v][w]=T,document.getElementById("khTable").innerHTML=g(v),b(h?"KA tarihi kaldırıldı":"KA ✓ tamamlandı olarak işaretlendi")},window._kmToggleTD=async function(v,w){const k=d(v,w),_=(k==null?void 0:k.status)==="td",h=_?(k==null?void 0:k.stars)>=7?5:k==null?void 0:k.stars:7;await p(v,w,h,_?"active":"td"),document.getElementById("khTable").innerHTML=r==="mastery"?g(v):y(v),b(_?`${w} tekrar listesine geri döndü`:`${w} → TD ✓`)},window._ktToggleBox=async function(v,w,k,_){const z=c(v,w)[k],M=((z==null?void 0:z.review_count)||0)>=_?_-1:_;if(await m(v,w,k,M),M>0){const E=d(v,w),D=new Date().toISOString(),C={student_id:e,coach_id:x.coachId,subject:v,konu:w,stars:(E==null?void 0:E.stars)||0,status:(E==null?void 0:E.status)||"active",last_review_date:D,review_count:((E==null?void 0:E.review_count)||0)+1,updated_at:D},{data:j}=await f.from("konu_mastery").upsert(C,{onConflict:"student_id,subject,konu"}).select().single();j&&(l.konuMastery[e]||(l.konuMastery[e]={}),l.konuMastery[e][v]||(l.konuMastery[e][v]={}),l.konuMastery[e][v][w]=j)}document.getElementById("khTable").innerHTML=y(v)};function S(){const v=window._khActiveSub||s;document.getElementById("khTable").innerHTML=r==="mastery"?g(v):y(v)}const I=o.map(v=>`<button class="kh-tab" onclick="window._khActiveSub='${v}';document.querySelectorAll('.kh-tab').forEach(b=>{b.style.color='var(--text-mid)';b.style.borderBottom='2px solid transparent';b.style.fontWeight='600'});this.style.color='var(--accent)';this.style.borderBottom='2px solid var(--accent)';this.style.fontWeight='700';window._khRefresh()"
      style="padding:10px 16px;border:none;border-bottom:2px solid ${v===s?"var(--accent)":"transparent"};background:none;font-size:12px;font-weight:${v===s?"700":"600"};color:${v===s?"var(--accent)":"var(--text-mid)"};cursor:pointer;white-space:nowrap;font-family:inherit;transition:all .15s">${v}</button>`).join("");window._khActiveSub=s,window._khRefresh=S,n.innerHTML=`
    <button class="back-link" onclick="openStudentDetail('${e}')">← ${u(t.name)}</button>
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:16px;flex-wrap:wrap;gap:10px">
      <div style="font-size:18px;font-weight:800;letter-spacing:-.2px">${u(t.name)} — Konu Haritası</div>
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
      <div id="khTable" style="overflow-x:auto;max-height:calc(100vh - 310px);overflow-y:auto">${g(s)}</div>
    </div>`,window._kmSwitchView=function(v){r=v;const w=document.getElementById("kmViewMastery"),k=document.getElementById("kmViewTekrar");v==="mastery"?(w.style.background="var(--accent)",w.style.color="#fff",w.style.fontWeight="700",k.style.background="var(--surface)",k.style.color="var(--text-mid)",k.style.fontWeight="600"):(k.style.background="var(--accent)",k.style.color="#fff",k.style.fontWeight="700",w.style.background="var(--surface)",w.style.color="var(--text-mid)",w.style.fontWeight="600"),window._khRefresh()}}function At(e){var i,o;l.activeStuId=e;const t=document.getElementById("view-program"),n=((i=l.students.find(s=>s.id===l.activeStuId))==null?void 0:i.name)||"";t.innerHTML=`<button class="back-link" onclick="switchTab('student-detail')">← ${n}</button>`,t.innerHTML+=document.createElement("div").innerHTML,currentTab!=="program"&&Q("program");const a=document.getElementById("tbarTitle");a&&(a.textContent=(((o=l.students.find(s=>s.id===l.activeStuId))==null?void 0:o.name)||"")+" · Program"),q()}function Pa(e){var n;l.activeStuId=e,currentTab!=="exams"&&Q("exams");const t=document.getElementById("tbarTitle");t&&(t.textContent=(((n=l.students.find(a=>a.id===l.activeStuId))==null?void 0:n.name)||"")+" · Denemeler"),Pe()}function Ra(e){var n;l.activeStuId=e,currentTab!=="appointments"&&Q("appointments");const t=document.getElementById("tbarTitle");t&&(t.textContent=(((n=l.students.find(a=>a.id===l.activeStuId))==null?void 0:n.name)||"")+" · Randevular"),Ue()}let de={};async function Ha(e){const t=l.students.find(a=>a.id===e);if(!t)return;l.activeStuId=e,currentTab!=="student-detail"&&Q("student-detail");const n=document.getElementById("view-student-detail");if(n.innerHTML=`<button class="back-link" onclick="openStudentDetail('${e}')">← ${u(t.name)}</button>
    <div style="padding:20px;color:var(--text-dim);font-size:13px">Yükleniyor…</div>`,!de[e]){const{data:a}=await f.from("student_books").select("*").eq("student_id",e).order("created_at",{ascending:!0});de[e]=a||[]}Dt(e)}function Dt(e){const t=l.students.find(p=>p.id===e),n=de[e]||[],a=document.getElementById("view-student-detail"),i=x.role==="coach"||x.role==="developer",o=n.reduce((p,m)=>p+m.total_tests,0),s=n.reduce((p,m)=>p+m.completed_tests,0),r=o>0?Math.round(s/o*100):0,d=r>=75?"var(--green)":r>=40?"var(--accent)":"var(--red)",c=n.length?n.map(p=>{const m=p.total_tests>0?Math.min(100,Math.round(p.completed_tests/p.total_tests*100)):0,g=m>=75?"var(--green)":m>=40?"var(--accent)":"var(--red)";return`<div style="background:var(--surface);border:1px solid var(--border);border-radius:12px;padding:14px 16px;margin-bottom:10px">
      <div style="display:flex;align-items:center;gap:12px">
        <div style="flex:1;min-width:0">
          <div style="font-size:13px;font-weight:700;margin-bottom:7px">${u(p.name)}</div>
          <div style="display:flex;align-items:center;gap:10px">
            <div style="flex:1;height:7px;background:var(--surface3);border-radius:99px;overflow:hidden">
              <div style="height:100%;width:${m}%;background:${g};border-radius:99px;transition:width .4s"></div>
            </div>
            <span style="font-size:12px;font-weight:800;color:${g};white-space:nowrap;min-width:36px;text-align:right">%${m}</span>
          </div>
          <div style="font-size:11px;color:var(--text-dim);margin-top:4px">${p.completed_tests} / ${p.total_tests} test tamamlandı</div>
        </div>
        ${i?`<div style="display:flex;gap:6px;flex-shrink:0">
          <button class="btn btn-ghost btn-xs" onclick="editStudentBook('${e}','${p.id}')">✏️</button>
          <button class="btn btn-danger btn-xs" onclick="deleteStudentBook('${e}','${p.id}')" style="opacity:.4" onmouseover="this.style.opacity=1" onmouseout="this.style.opacity=.4">🗑</button>
        </div>`:""}
      </div>
    </div>`}).join(""):'<div class="empty"><p>Henüz kaynak eklenmemiş.</p></div>';a.innerHTML=`
    <button class="back-link" onclick="openStudentDetail('${e}')">← ${u(t.name)}</button>
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:16px">
      <div>
        <div style="font-size:18px;font-weight:800;letter-spacing:-.2px">${u(t.name)} — Kaynaklar</div>
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
    ${c}`}function Ya(e){document.getElementById("sbModalTitle").textContent="Kaynak Ekle",document.getElementById("sbId").value="",document.getElementById("sbStuId").value=e,document.getElementById("sbName").value="",document.getElementById("sbTotal").value="0",document.getElementById("sbCompleted").value="0",document.getElementById("sbPctPreview").innerHTML="",N("sbModal")}function Na(e,t){const n=(de[e]||[]).find(a=>a.id===t);n&&(document.getElementById("sbModalTitle").textContent="Kaynağı Düzenle",document.getElementById("sbId").value=t,document.getElementById("sbStuId").value=e,document.getElementById("sbName").value=n.name,document.getElementById("sbTotal").value=n.total_tests,document.getElementById("sbCompleted").value=n.completed_tests,fn(),N("sbModal"))}function fn(){var o,s;const e=parseInt((o=document.getElementById("sbTotal"))==null?void 0:o.value)||0,t=parseInt((s=document.getElementById("sbCompleted"))==null?void 0:s.value)||0,n=document.getElementById("sbPctPreview");if(!n||!e){n&&(n.innerHTML="");return}const a=Math.min(100,Math.round(t/e*100)),i=a>=75?"var(--green)":a>=40?"var(--accent)":"var(--red)";n.innerHTML=`<div style="display:flex;align-items:center;gap:10px">
    <div style="flex:1;height:8px;background:var(--surface3);border-radius:99px;overflow:hidden">
      <div style="height:100%;width:${a}%;background:${i};border-radius:99px;transition:width .3s"></div>
    </div>
    <span style="font-size:13px;font-weight:800;color:${i}">%${a}</span>
  </div>`}async function Ka(){const e=document.getElementById("sbName").value.trim();if(!e)return b("Kaynak adı girin!");const t=Math.max(0,parseInt(document.getElementById("sbTotal").value)||0),n=Math.min(t,Math.max(0,parseInt(document.getElementById("sbCompleted").value)||0)),a=document.getElementById("sbStuId").value,i=document.getElementById("sbId").value,o={name:e,total_tests:t,completed_tests:n};if(i){const{error:s}=await f.from("student_books").update(o).eq("id",i);if(s)return b("Hata: "+s.message);const r=(de[a]||[]).find(d=>d.id===i);r&&Object.assign(r,o),b("Güncellendi ✓")}else{const{data:s,error:r}=await f.from("student_books").insert({...o,student_id:a,coach_id:x.coachId}).select().single();if(r)return b("Hata: "+r.message);de[a]||(de[a]=[]),de[a].push(s),b("Kaynak eklendi ✓")}K("sbModal"),Dt(a)}async function Oa(e,t){if(!await J("Bu kaynağı silmek istiyor musunuz?"))return;const{error:n}=await f.from("student_books").delete().eq("id",t);if(n)return b("Hata: "+n.message);de[e]=(de[e]||[]).filter(a=>a.id!==t),Dt(e),b("Silindi ✓")}function xn(){var i,o;const e=document.getElementById("view-profile"),t=x.dbUser,n=((t==null?void 0:t.full_name)||"?").split(" ").map(s=>s[0]).join("").slice(0,2).toUpperCase(),a=x.role==="coach"?"Koç":x.role==="developer"?"Developer":"Öğrenci";e.innerHTML=`
    <div style="max-width:480px;margin:0 auto">
      <!-- Mini user card -->
      <div style="display:flex;align-items:center;gap:14px;padding:20px 24px;background:var(--surface);border:1px solid var(--border);border-radius:12px;margin-bottom:20px;box-shadow:var(--shadow)">
        <div style="width:48px;height:48px;border-radius:12px;background:var(--accent);display:flex;align-items:center;justify-content:center;font-size:18px;font-weight:800;color:#fff;flex-shrink:0">${n}</div>
        <div>
          <div style="font-size:16px;font-weight:800;letter-spacing:-.2px">${u((t==null?void 0:t.full_name)||"")}</div>
          <div style="font-size:12px;color:var(--text-dim);margin-top:2px">${a} · ${u(((i=l.workspace)==null?void 0:i.brand_name)||"Rostrum Akademi")}</div>
        </div>
      </div>

      <!-- Form -->
      <div style="background:var(--surface);border:1px solid var(--border);border-radius:12px;padding:20px 24px;box-shadow:var(--shadow);display:flex;flex-direction:column;gap:16px">
        <div>
          <label style="font-size:11px;font-weight:700;color:var(--text-dim);text-transform:uppercase;letter-spacing:.5px;display:block;margin-bottom:6px">Ad Soyad</label>
          <input id="pf_name" value="${u((t==null?void 0:t.full_name)||"")}" style="width:100%;padding:9px 12px;background:var(--surface2);border:1.5px solid var(--border);border-radius:8px;font-size:13px;font-family:inherit;color:var(--text);outline:none;box-sizing:border-box" onfocus="this.style.borderColor='var(--accent)'" onblur="this.style.borderColor='var(--border)'">
        </div>
        <div>
          <label style="font-size:11px;font-weight:700;color:var(--text-dim);text-transform:uppercase;letter-spacing:.5px;display:block;margin-bottom:6px">Kullanıcı Adı</label>
          <input id="pf_user" value="${u((t==null?void 0:t.username)||"")}" style="width:100%;padding:9px 12px;background:var(--surface2);border:1.5px solid var(--border);border-radius:8px;font-size:13px;font-family:inherit;color:var(--text);outline:none;box-sizing:border-box" onfocus="this.style.borderColor='var(--accent)'" onblur="this.style.borderColor='var(--border)'">
        </div>
        ${x.role==="coach"||x.role==="developer"?`<div>
          <label style="font-size:11px;font-weight:700;color:var(--text-dim);text-transform:uppercase;letter-spacing:.5px;display:block;margin-bottom:6px">Akademi Adı</label>
          <input id="pf_brand" value="${u(((o=l.workspace)==null?void 0:o.brand_name)||"")}" style="width:100%;padding:9px 12px;background:var(--surface2);border:1.5px solid var(--border);border-radius:8px;font-size:13px;font-family:inherit;color:var(--text);outline:none;box-sizing:border-box" onfocus="this.style.borderColor='var(--accent)'" onblur="this.style.borderColor='var(--border)'">
        </div>`:""}
        <div>
          <label style="font-size:11px;font-weight:700;color:var(--text-dim);text-transform:uppercase;letter-spacing:.5px;display:block;margin-bottom:6px">Yeni Şifre <span style="font-weight:400;text-transform:none">(boş bırakılırsa değişmez)</span></label>
          <input type="password" id="pf_pass" placeholder="••••••••" style="width:100%;padding:9px 12px;background:var(--surface2);border:1.5px solid var(--border);border-radius:8px;font-size:13px;font-family:inherit;color:var(--text);outline:none;box-sizing:border-box" onfocus="this.style.borderColor='var(--accent)'" onblur="this.style.borderColor='var(--border)'">
        </div>
        <button class="btn btn-accent" onclick="saveProfile()" style="align-self:flex-start;padding:9px 20px">Kaydet</button>
      </div>
    </div>`}async function Fa(){var i,o;const e=document.getElementById("pf_name").value.trim(),t=document.getElementById("pf_pass").value,n=(o=(i=document.getElementById("pf_brand"))==null?void 0:i.value)==null?void 0:o.trim();if(!e)return b("Ad boş olamaz!");const a={full_name:e};t&&(a.password_hash=await Me(t)),await f.from("users").update(a).eq("id",x.dbUser.id),n&&(x.role==="coach"||x.role==="developer")&&(await f.from("workspaces").update({brand_name:n}).eq("coach_id",x.coachId),l.workspace={...l.workspace||{},brand_name:n},document.querySelector(".sb-logo-text").textContent=n),x.dbUser={...x.dbUser,full_name:e},document.getElementById("sbName").textContent=e,b("Profil kaydedildi ✓")}function bn(){var n;const e=document.getElementById("view-settings"),t=document.documentElement.getAttribute("data-theme")==="dark";e.innerHTML=`
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
            <input type="text" id="geminiApiKeyInput" value="${u(localStorage.getItem("gemini_api_key")||"")}" placeholder="AIzaSy..." style="flex:1;background:var(--surface2);border:1px solid var(--border);border-radius:8px;padding:8px 12px;color:var(--text);font-size:12px;outline:none" autocomplete="off">
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
          <div><div class="setting-item-lbl">Kullanıcı Adı</div><div class="setting-item-sub">${u(((n=x.dbUser)==null?void 0:n.username)||"")}</div></div>
          <button class="btn btn-ghost btn-sm" onclick="switchTab('profile')">Düzenle</button>
        </div>
        <div class="setting-item">
          <div><div class="setting-item-lbl">Oturumu Kapat</div></div>
          <button class="btn btn-danger btn-sm" onclick="doLogout()">Çıkış</button>
        </div>
      </div>
    </div>`}function Ga(){const e=document.getElementById("geminiApiKeyInput").value.trim();e?(localStorage.setItem("gemini_api_key",e),b("API Anahtarı kaydedildi ✓")):(localStorage.removeItem("gemini_api_key"),b("API Anahtarı kaldırıldı."))}let Se="";function q(){const e=document.getElementById("view-program"),t=l.students.find(d=>d.id===l.activeStuId),n=(t==null?void 0:t.weekStart)??0,a=V(l.weekOffset,n),i=G(a,6),o=ge(),s=localStorage.getItem("ra_program_mode")||"weekly";let r="";for(let d=0;d<7;d++){const c=G(a,d),p=H(c),m=p===o,g=`${l.activeStuId}_${p}`,y=l.tasks[g]||[],S=y.reduce((h,z)=>h+Number(z.duration),0),I=y.reduce((h,z)=>h+(z.done?Number(z.duration):0),0),v=DAYS_TR[(n+d)%7],w=[...y];s==="hourly"&&w.sort((h,z)=>h.start_time&&!z.start_time?-1:!h.start_time&&z.start_time?1:h.start_time&&z.start_time?h.start_time.localeCompare(z.start_time):0);const k=w.map(h=>{const z=y.indexOf(h),T=h.start_time?`<div class="tc-time-badge">🕒 ${h.start_time}</div>`:"";return`
        <div data-task-id="${h._id}" class="task-card task-${h.type} ${h.done?"done":""} ${h.start_time?"hourly-card":""}" onclick="openTaskDetail('${p}',${z},'coach')" style="cursor:pointer">
          <div class="tc-check ${h.done?"on":""}" onclick="event.stopPropagation();toggleTask('${p}',${z})"></div>
          <div class="tc-body">
            ${T}
            <div class="tc-type">${Ge(h.type)}${h.exam?" · "+h.exam:""}</div>
            <div class="tc-subject">${u(h.subject)}</div>
            <div class="tc-meta">${h.duration} dk</div>
          </div>
          <button class="tc-menu-btn" onclick="event.stopPropagation();showTaskMenu('${p}',${z},this)">⋯</button>
        </div>`}).join(""),_=["Pzt","Sal","Çar","Per","Cum","Cmt","Paz"][(n+d)%7];r+=`<div class="day-col ${m?"today":""}">
      <div class="day-hd">
        <div>
          <div class="day-name-lbl">${_}</div>
          <div class="day-num">${c.getDate()}</div>
        </div>
        <div style="display:flex;flex-direction:column;align-items:flex-end;gap:4px">
          <span class="day-badge" style="font-size:8.5px">${Ne(I)} / ${Ne(S)}</span>
          ${_clipboardTask?`<button class="btn btn-ghost btn-xs" onclick="pasteTaskFromClipboard('${p}')" style="font-size:9px;color:var(--accent);border-color:rgba(240,165,0,.3);background:var(--accent-dim);padding:2px 6px">Yapıştır</button>`:""}
        </div>
      </div>
      <div class="day-tasks-list">${k||""}</div>
      <button class="add-day-btn" onclick="openTaskModal('${p}','${v}')" ${l.activeStuId?"":"disabled"}>+ Görev Ekle</button>
    </div>`}e.innerHTML=`
    <button class="back-link" onclick="switchTab('student-detail')">← ${t?u(t.name):"Öğrenci"}</button>
    <div class="card prog-banner">
      <div class="prog-avatar" style="background:${(t==null?void 0:t.color)||"#555"};color:#0f0e0c">${t?t.name[0]:"?"}</div>
      <div class="prog-meta">
        <h2>${t?u(t.name):"Öğrenci Seçin"}</h2>
        <p>${t?u(t.target):"Program görüntülemek için öğrenci seçin"}</p>
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
      
      <!-- Program Görünüm Seçici Toggle -->
      <div style="display:flex;background:var(--surface2);border:1px solid var(--border);border-radius:10px;padding:3px;gap:4px">
        <button class="btn btn-xs ${s==="weekly"?"btn-accent":"btn-ghost"}" onclick="setProgramMode('weekly')" style="padding:4px 10px;font-size:11px;font-weight:700;border-radius:8px">📋 Günlük Serbest</button>
        <button class="btn btn-xs ${s==="hourly"?"btn-accent":"btn-ghost"}" onclick="setProgramMode('hourly')" style="padding:4px 10px;font-size:11px;font-weight:700;border-radius:8px">🕒 Saatlik Düzen</button>
      </div>

      ${_clipboardTask?'<button class="btn btn-accent btn-sm" onclick="pasteTaskToWholeWeek()" style="font-size:12px;padding:6px 12px;gap:6px">📋 Kopyalananı Tüm Haftaya Yapıştır</button>':""}
    </div>
    <div class="week-grid">${r}</div>`}function qa(e){l.activeStuId=e||null,Fe(),q()}function Ua(e){l.weekOffset+=e,Fe(),q()}function Wa(){l.weekOffset=0,Fe(),q()}function Va(e){localStorage.setItem("ra_program_mode",e),x.role==="student"?ke():q()}window.setProgramMode=Va;(()=>{const e=document.createElement("style");e.textContent=`
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
  `,document.head.appendChild(e)})();let te=[];function Za(){if(!l.activeStuId)return b("Önce öğrenci seçin");const e=l.students.find(i=>i.id===l.activeStuId),t=(e==null?void 0:e.weekStart)??0,n=V(l.weekOffset,t);te=[];let a="";for(let i=0;i<7;i++){const o=G(n,i),s=H(o);DAYS_TR[(t+i)%7];const r=(l.tasks[`${l.activeStuId}_${s}`]||[]).length>0,d=["Pzt","Sal","Çar","Per","Cum","Cmt","Paz"][(t+i)%7];a+=`<button class="day-sel-btn" id="dsbtn_${i}" data-ds="${s}" onclick="toggleDaySel(${i},'${s}')">
      <div>${d}</div>
      <div style="font-size:14px;font-weight:800">${o.getDate()}</div>
      ${r?'<div style="font-size:9px;color:var(--accent);margin-top:2px">●</div>':'<div style="font-size:9px;opacity:0">·</div>'}
    </button>`}document.getElementById("daySelectorGrid").innerHTML=a,N("clearWeekModal")}function Ja(e,t){const n=document.getElementById("dsbtn_"+e),a=te.indexOf(t);a===-1?(te.push(t),n.classList.add("sel")):(te.splice(a,1),n.classList.remove("sel"))}function Xa(){const e=document.querySelectorAll(".day-sel-btn");te.length===7?(te=[],e.forEach(t=>t.classList.remove("sel"))):(te=[],e.forEach((t,n)=>{te.push(t.dataset.ds),t.classList.add("sel")}))}async function Qa(){if(!te.length)return b("Önce gün seçin");if(await J(`${te.length} günün görevleri silinsin mi?`)){for(const e of te)await f.from("tasks").delete().eq("student_id",l.activeStuId).eq("date",e),delete l.tasks[`${l.activeStuId}_${e}`];ue(),K("clearWeekModal"),q(),b(`${te.length} gün temizlendi`)}}const Ke={"Dil Bilgisi":["Sözcükte Anlam","Cümlede Anlam","Ses Bilgisi","Yazım Kuralları","Noktalama İşaretleri","Sözcükte Yapı","İsim","Sıfat","Zamir","Zarf","İsim-Sıfat Tamlamaları","Edat-Bağlaç-Ünlem","Fiiller – Fiil Çekimleri – Fiillerde Zaman Kayması","Ek Fiil – Ek Eylem","Fiilde Çatı","Fiilimsiler","Cümlenin Öğeleri","Cümle Türleri","Anlatım Bozuklukları"],"TYT Matematik":["Sayılar ve Basamak","Bölünebilme","EBOB-EKOK","Kesirler ve Ondalıklı Sayılar","Mutlak Değer","Üslü Sayılar","Köklü Sayılar","Oran-Orantı","Problemler – Yaş-İşçi-Havuz","Problemler – Kar-Zarar-Yüzde","Problemler – Hareket","Problemler – Karışım","Birinci Dereceden Denklemler","Kümeler","Mantık","Fonksiyonlar","Polinomlar","İkinci Dereceden Denklemler","Permütasyon-Kombinasyon","Olasılık","İstatistik ve Veri"],"AYT Matematik":["Polinomlar","Karmaşık Sayılar","Logaritma","Trigonometri","Diziler","Limit ve Süreklilik","Türev","İntegral","Matrisler ve Determinant"],Geometri:["Doğruda Açı","Üçgende Açı ve Kenar","Üçgende Alan","Üçgende Benzerlik","Özel Üçgenler (Pisagor)","Dörtgenler","Dörtgende Alan","Çember ve Daire","Çemberde Açı","Analitik Geometri – Nokta ve Doğru","Analitik Geometri – Çember","Katı Cisimler","Uzay Geometrisi"],"TYT Fizik":["Fizik Bilimine Giriş","Madde ve Özellikleri","Basınç","Kaldırma Kuvveti","Isı Sıcaklık Genleşme","Hareket","Newton Hareket Yasaları","İş Güç Enerji","Elektrik","Manyetizma","Optik","Dalgalar"],"AYT Fizik":["Vektörler","Bağıl ve Bileşik Hareket","Newton'ın Hareket Yasaları","Sabit İvmeli Hareket","Tek Boyutta Atışlar","İki Boyutta Atışlar","Enerji","İtme ve Momentum","Tork ve Denge","Kütle ve Ağırlık Merkezi","Basit Makineler","Elektriksel Kuvvet ve Elektrik Alan","Elektriksel Potansiyel Enerji","Düzgün Elektrik Alan ve Sığa","Manyetik Alan","Manyetik Kuvvet","Manyetik İndüksiyon","Alternatif Akım ve Transformatörler","Düzgün Çembersel Hareket","Eylemsizlik Momenti ve Açısal Momentum","Genel Çekim Yasası ve Kepler","Basit Harmonik Hareket","Dalga Mekaniği","Elektromanyetik Dalgalar","Atom Modelleri ve Atomun Yapısı","Büyük Patlama ve Atom Altı Parçacıklar","Radyoaktivite","Özel Görelilik Teorisi","Modern Fizik"],"TYT Kimya":["Kimyanın Sembolik Dili","Atom Modelleri","Periyodik Cetvel","Etkileşimler","Maddenin Halleri","Kimyanın Temel Kanunları","Mol Kavramı","Kimyasal Hesaplamalar","Kimyasal Tepkime Türleri","Karışımlar","Asitler ve Bazlar","Tuzlar","Doğa ve Kimya","Kimya Her Yerde"],"AYT Kimya":["Modern Atom","Gazlar","Sıvı Çözeltiler ve Çözünürlük","Tepkimelerde Hız","Tepkimelerde Denge","Sulu Çözelti Dengeleri","Kimya ve Elektrik","Karbon Kimyası","Organik Bileşikler","Enerji Kaynakları"],"TYT Biyoloji":["Canlıların Temel Bileşenleri","İnorganik Bileşikler","Karbohidratlar","Lipitler (Yağlar)","Proteinler","Hormonlar","Vitaminler","Enzimler","Nükleik Asitler","DNA-RNA","ATP Metabolizma","Hücre Organelleri","Hücre Zarı Madde Geçişleri","Ekoloji","Güncel Çevre Sorunları","Canlıların Sınıflandırılması","Hücre Bölünmeleri","Mitoz","Mayoz","Kalıtım"],"AYT Biyoloji":["Sinir Sistemi","Endokrin Sistemi","Duyu Organları","Destek Hareket Sistemi","Dolaşım Sistemi","Bağışıklık Sistemi","Solunum Sistemi","Üriner Sistemi","Üreme Sistemi","Komünite Ekolojisi","Popülasyon Ekolojisi","Genden Proteine","Enerji Dönüşümleri","Bitki Biyolojisi","Canlı ve Çevre"],"AYT Edebiyat":["Güzel Sanatlar ve Edebiyat","Coşku ve Heyecanı Dile Getiren Metinler (Şiir)","Olay Çevresinde Oluşan Edebi Metinler","Destan Dönemi Türk Edebiyatı","İslamiyet Kabulü İlk Edebi Ürünler","Divan Edebiyatı","Halk Edebiyatı","Tanzimat Edebiyatı","Servet-i Fünun Edebiyatı","Fecr-i Ati Edebiyatı","Milli Edebiyat","Cumhuriyet Dönemi Türk Edebiyatı","Edebi Akımlar"],"Tarih (TYT-AYT)":["Tarih ve Zaman","İnsanlığın İlk Dönemleri","Orta Çağ'da Dünya","İlk ve Orta Çağlarda Türk Dünyası","İslam Medeniyetinin Doğuşu","İlk Türk-İslam Devletleri","Beylikten Devlete Osmanlı","Dünya Gücü Osmanlı","Osmanlı Kültür ve Medeniyeti","En Uzun Yüzyıl (Osmanlı)","XX. Yüzyıl Başlarında Osmanlı","I. Dünya Savaşı","Milli Mücadele Hazırlık Dönemi","Kurtuluş Savaşı ve Antlaşmalar","Atatürk İlke ve İnkılapları","Atatürk Dönemi Türk Dış Politikası"],"Coğrafya (TYT-AYT)":["Doğa ve İnsan","Dünya'nın Şekli ve Hareketleri","Coğrafi Konum","Harita Bilgisi","Atmosfer ve İklim","Dünya'nın Tektonik Yapısı","İç ve Dış Kuvvetler","Nüfus ve Yerleşme","Ekonomik Faaliyetler","Bölgeler ve Ülkeler","Çevre ve Toplum","Ekosistem ve Madde Dönüşü","Türkiye'de Nüfus ve Yerleşme","Türkiye'nin Coğrafi Konumu ve Bölgeleri","Küresel Ortam: Bölgeler ve Ülkeler"],"Felsefe Grubu & Din":["Felsefeyi Tanıma","Bilgi Felsefesi","Varlık Felsefesi","Ahlak Felsefesi","Sanat Felsefesi","Din Felsefesi","Siyaset Felsefesi","Bilim Felsefesi","Psikolojiye Giriş","Sosyolojiye Giriş","Klasik Mantık","Kur'an-ı Kerim ve Anlamı","İnanç ve İbadet","Ahlak ve Değerler","Hz. Muhammed ve Gençlik","İslam Medeniyeti ve Bilim"],"YDT İngilizce":["Grammar (Dil Bilgisi)","Vocabulary (Kelime Bilgisi)","Reading Comprehension (Okuduğunu Anlama)","Sentence Completion (Cümle Tamamlama)","Dialogue Completion (Diyalog Tamamlama)","Translation (Çeviri)","Restatement (Eş Anlamlı Cümle)","Paragraph Completion (Paragraf Tamamlama)","Irrelevant Sentence (Anlamı Bozan Cümle)"]};function ei(e,t){const n=`${e||""} ${t||""}`.trim();return Ke[n]||Ke[t||""]||null}let ie=[];function ti(e,t){const n=ie.indexOf(t);n===-1?(ie.push(t),e.style.borderColor="var(--red)",e.style.background="rgba(255,92,122,.12)",e.style.color="var(--red)"):(ie.splice(n,1),e.style.borderColor="var(--border)",e.style.background="var(--surface)",e.style.color="var(--text-mid)")}window.toggleKonuChip=ti;let le=[];function ni(){const e=document.getElementById("tmNewResourceToggle").checked;hn(e)}function hn(e){document.getElementById("tmSearchSection").style.display=e?"none":"",document.getElementById("tmManualSection").style.display=e?"":"none",document.getElementById("tmTestWrap").style.display="none";const t=document.getElementById("tmToggleSlider");t&&(t.style.background=e?"var(--accent)":"var(--border)",t.style.setProperty("--tw-after-x",e?"16px":"0px"))}function ai(){const e=document.getElementById("tmManualTestInput"),t=e.value.trim();t&&(le.push(t),e.value="",kn())}function ii(e){le.splice(e,1),kn()}function kn(){const e=document.getElementById("tmManualTestChips");e&&(e.innerHTML=le.map((t,n)=>`
    <span style="display:inline-flex;align-items:center;gap:5px;background:var(--accent-dim);border:1px solid rgba(240,165,0,.3);color:var(--accent);padding:4px 10px;border-radius:99px;font-size:12px;font-weight:600">
      ${u(t)}
      <button onclick="removeManualTest(${n})" style="background:none;border:none;cursor:pointer;color:var(--accent);font-size:14px;padding:0;line-height:1">×</button>
    </span>`).join(""))}function oi(e,t){if(!l.activeStuId)return b("Önce öğrenci seçin");Se=e,_editingTaskId=null,O=null,document.querySelector("#taskModal h2").innerHTML=`Görev Ekle — <span id="tmDay">${t}</span>`,document.querySelector("#taskModal .btn-accent").textContent="Programa Ekle",document.getElementById("tmSubjectFree").value="",document.getElementById("tmDuration").value="60",document.getElementById("tmStartTime").value="",document.getElementById("tmNote").value="",document.getElementById("tmExam").value="",document.getElementById("tmType").value="deneme",document.getElementById("tmSubjectSel").style.display="none",document.getElementById("tmSubjectFree").style.display="",document.getElementById("soruBankasiWrap").style.display="none",document.getElementById("tmBookSearch").value="",document.getElementById("tmBookVal").value="",document.getElementById("tmBookList").style.display="none",document.getElementById("tmTestWrap").style.display="none";const n=document.getElementById("tmTestSummary");n&&(n.style.display="none");const a=document.getElementById("tmNewResourceToggle");a&&(a.checked=!1,hn(!1)),document.getElementById("tmManualKaynak").value="",document.getElementById("tmManualTestInput").value="",document.getElementById("tmManualTestChips").innerHTML="",le=[],$n(),N("taskModal")}let ee={},Le=!1;async function wn(){if(Le)return;const{data:e}=await f.from("resources").select("*").eq("active",!0).order("name");e&&(e.forEach(t=>{let n=[t.subject];t.subject==="Tarih"?n.push("Tarih1","Tarih2"):t.subject==="Coğrafya"?n.push("Coğrafya1","Coğrafya2"):(t.subject==="Din Kültürü"||t.subject==="Din")&&(n=["Din","Din Kültürü"]),n.forEach(a=>{const i=`${t.exam_type}_${a}`;ee[i]||(ee[i]=[]),ee[i].push({name:t.name,yil:t.year,testler:Array.isArray(t.tests)?t.tests:[],publisher:t.publisher})})}),Le=!0)}let He=[],O=null;function Ct(){const e=document.getElementById("tmExam").value,t=document.getElementById("tmType").value,n=document.getElementById("tmSubjectSel"),a=document.getElementById("tmSubjectFree");O=null,document.getElementById("tmBookVal").value="",document.getElementById("tmBookSearch").value="",document.getElementById("tmBookList").innerHTML="",document.getElementById("tmBookList").style.display="none",document.getElementById("tmTestWrap").style.display="none";const i=document.getElementById("tmTestSummary");i&&(i.style.display="none"),e&&SUBJECT_MAP[e]?(n.innerHTML=SUBJECT_MAP[e].map(r=>`<option value="${r}">${r}</option>`).join(""),n.style.display="",a.style.display="none"):(n.style.display="none",a.style.display="");const o=(t==="soru"||t==="konu")&&e;document.getElementById("soruBankasiWrap").style.display=o?"":"none";const s=document.getElementById("tmBookSearch");s&&(s.placeholder=t==="konu"?"Hoca veya playlist ara...":"Kitap veya yayınevi ara..."),Le=!1,ee={},o&&dt("")}function si(){O=null,document.getElementById("tmBookVal").value="",document.getElementById("tmBookSearch").value="",document.getElementById("tmBookList").style.display="none",document.getElementById("tmTestWrap").style.display="none";const e=document.getElementById("tmType").value,t=document.getElementById("tmExam").value;Le=!1,ee={},(e==="soru"||e==="konu")&&t&&dt("")}document.getElementById("tmType").addEventListener("change",Ct);async function dt(e){const t=document.getElementById("tmExam").value,n=document.getElementById("tmSubjectSel").value||"",a=document.getElementById("tmType").value,i=document.getElementById("tmBookList"),o=a==="konu"?"playlist":"book";if(!Le){i.style.display="block",i.innerHTML='<div style="padding:12px;font-size:12px;color:var(--text-dim);text-align:center">⏳ Yükleniyor...</div>';const{data:c}=await f.from("resources").select("*").eq("active",!0).eq("resource_type",o).order("name");ee={},c&&c.forEach(p=>{let m=[p.subject];p.subject==="Tarih"?m.push("Tarih1","Tarih2"):p.subject==="Coğrafya"?m.push("Coğrafya1","Coğrafya2"):(p.subject==="Din Kültürü"||p.subject==="Din")&&(m=["Din","Din Kültürü"]),m.forEach(g=>{const y=`${p.exam_type}_${g}`;ee[y]||(ee[y]=[]),ee[y].push({name:p.name,yil:p.year,testler:Array.isArray(p.tests)?p.tests:[],publisher:p.publisher,resource_type:p.resource_type||"book"})})}),Le=!0}const s=`${t}_${n}`,r=ee[s]||[],d=e.toLowerCase();if(He=r.filter(c=>{var p;return!d||c.name.toLowerCase().includes(d)||((p=c.publisher)==null?void 0:p.toLowerCase().includes(d))}),!e&&!He.length){i.style.display="none";return}if(!He.length){i.style.display="block",i.innerHTML='<div style="padding:12px;font-size:12px;color:var(--text-dim);text-align:center">Kaynak bulunamadı</div>';return}i.style.display="block",i.innerHTML=He.map((c,p)=>`
    <div onclick="selectBook(${p})" style="padding:10px 14px;cursor:pointer;border-bottom:1px solid var(--border);display:flex;justify-content:space-between;align-items:center;transition:background .15s"
      onmouseover="this.style.background='var(--surface3)'" onmouseout="this.style.background=''">
      <div>
        <div style="font-size:13px;font-weight:700">${u(c.name)}</div>
        <div style="font-size:10px;color:var(--text-dim);margin-top:2px">${u(c.publisher||"")} · ${c.testler.length} test</div>
      </div>
      <span style="font-size:10px;font-weight:700;background:var(--green-dim);color:var(--green);padding:2px 7px;border-radius:99px;margin-left:8px;flex-shrink:0">${c.yil}</span>
    </div>`).join("")}function ri(){const e=document.getElementById("tmBookSearch").value;if(e.length===0){document.getElementById("tmBookList").style.display="none";return}dt(e)}function li(e){O=He[e],document.getElementById("tmBookVal").value=O.name,document.getElementById("tmBookSearch").value=O.name,document.getElementById("tmBookList").style.display="none",Lt(),document.getElementById("tmTestWrap").style.display=""}function Lt(){if(!O)return;const e=document.getElementById("tmTestList"),t=O.resource_type==="playlist",n=O.name||"";e.innerHTML=O.testler.map((a,i)=>{const o=a.label||a,s=o.trim()===""||o.trim()===n.trim()?`Ders ${i+1}`:o,r=a.soru||0,d=a.url||"";a.topic;const c=ia(o),p=c==="done"?"ti-status-done":c==="pending"?"ti-status-pending":"",m=c==="done"?'<span class="ti-badge ti-badge-done">✓ Tamamlandı</span>':c==="pending"?'<span class="ti-badge ti-badge-pending">⏳ Atandı</span>':"";return t?`<label class="${p}" style="display:flex;align-items:center;gap:8px;padding:8px 10px;cursor:pointer;transition:background .1s;border-bottom:1px solid var(--border)"
        onmouseover="this.style.background='var(--surface3)'" onmouseout="this.style.background=''">
        <input type="checkbox" id="test_${i}" value="${i}" onchange="updateTestSummary()"
          style="width:15px;height:15px;accent-color:var(--accent);cursor:pointer;flex-shrink:0">
        <div style="width:22px;height:22px;border-radius:6px;background:var(--surface3);color:var(--text-mid);font-size:10px;font-weight:800;display:flex;align-items:center;justify-content:center;flex-shrink:0">${i+1}</div>
        <div style="flex:1;min-width:0">
          <div style="font-size:12px;font-weight:600;line-height:1.3;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${u(s)}</div>
          <div style="display:flex;align-items:center;gap:6px;margin-top:2px">
            <span style="font-size:10px;color:var(--text-dim)">${r>0?`⏱ ${r} dk`:"⏱ ?"}</span>
            ${m}
          </div>
        </div>
        ${d?`<a href="${u(d)}" target="_blank" onclick="event.stopPropagation()"
          style="display:flex;align-items:center;gap:3px;font-size:11px;font-weight:700;background:#cc000022;color:#ff5555;border:1px solid #aa222233;padding:5px 10px;border-radius:7px;text-decoration:none;flex-shrink:0;white-space:nowrap"
          onmouseover="this.style.background='#cc000044'" onmouseout="this.style.background='#cc000022'">▶ İzle</a>`:'<span style="font-size:10px;color:var(--text-dim);flex-shrink:0;padding:5px 8px;border:1px solid var(--border);border-radius:7px">Linksiz</span>'}
      </label>`:`<label class="${p}" style="display:flex;align-items:center;gap:8px;padding:7px 10px;border-radius:7px;cursor:pointer;transition:background .1s"
        onmouseover="this.style.background='var(--surface3)'" onmouseout="this.style.background=''">
        <input type="checkbox" id="test_${i}" value="${i}" onchange="updateTestSummary()"
          style="width:15px;height:15px;accent-color:var(--accent);cursor:pointer;flex-shrink:0">
        <div style="flex:1;display:flex;align-items:center;gap:6px;flex-wrap:wrap">
          <span style="font-size:12px;font-weight:600">${u(s)}</span>
          ${m}
        </div>
        ${r>0?`<span style="font-size:10px;color:var(--text-dim);background:var(--surface3);padding:2px 7px;border-radius:99px;flex-shrink:0">${r} soru</span>`:""}
      </label>`}).join(""),je()}function di(){document.querySelectorAll("#tmTestList input[type=checkbox]").forEach(e=>e.checked=!0),je()}function ci(){document.querySelectorAll("#tmTestList input[type=checkbox]").forEach(e=>e.checked=!1),je()}function je(){if(!O)return;const e=[...document.querySelectorAll("#tmTestList input[type=checkbox]:checked")],t=document.getElementById("tmTestSummary"),n=document.getElementById("tmTestSummaryText"),a=document.getElementById("tmSuggestedDuration"),i=document.getElementById("tmSpeedRow"),o=O.resource_type==="playlist";if(e.length===0){t.style.display="none";return}let s=0,r=0;e.forEach(m=>{const g=parseInt(m.value),y=O.testler[g];o?r+=(y==null?void 0:y.soru)||0:s+=(y==null?void 0:y.soru)||0});const d=document.querySelector("[data-mspeed].speed-active"),c=d?parseFloat(d.dataset.mspeed):1;let p=0;if(o)p=r>0?Math.ceil(r/c):0,n.textContent=`${e.length} video · ${r} dk`,i&&(i.style.display="");else{const m=document.getElementById("tmExam").value,g=document.getElementById("tmSubjectSel").value||"",y=`${l.activeStuId}_${m}_${g}`,S=it[y]||180;p=s>0?Math.ceil(s*S/60):0,n.textContent=`${e.length} test · ${s} soru${p>0?" · Önerilen: "+p+" dk":""}`,i&&(i.style.display="none")}a.style.display=p>0?"":"none",Qe=p,a.setAttribute("data-dur",p),t.style.display="",p>0&&(document.getElementById("tmDuration").value=p)}function pi(e){document.querySelectorAll("[data-mspeed]").forEach(t=>{const n=t.dataset.mspeed===e;t.classList.toggle("speed-active",n),t.style.borderColor=n?"var(--accent)":"var(--border)",t.style.background=n?"var(--accent-dim)":"var(--surface2)",t.style.color=n?"var(--accent)":"var(--text-mid)"}),je()}let Qe=0;function mi(){Qe>0&&(document.getElementById("tmDuration").value=Qe,b("Süre uygulandı: "+Qe+" dk"))}let it={};async function $n(){if(!l.activeStuId)return;const{data:e}=await f.from("student_speeds").select("*").eq("student_id",l.activeStuId);it={},(e||[]).forEach(t=>{const n=`${t.student_id}_${t.exam_type}_${t.subject}`;it[n]=t.secs_per_question})}async function Tn(e,t,n,a){const{data:i}=await f.from("student_speeds").select("id").eq("student_id",e).eq("exam_type",t).eq("subject",n).single();i?await f.from("student_speeds").update({secs_per_question:a,updated_at:new Date().toISOString()}).eq("id",i.id):await f.from("student_speeds").insert({student_id:e,coach_id:x.coachId,exam_type:t,subject:n,secs_per_question:a}),it[`${e}_${t}_${n}`]=a,b("Hız kaydedildi ✓")}document.getElementById("tmType").addEventListener("change",Ct);let xt=!1;async function ui(){var n;if(xt)return;xt=!0;const e=document.querySelector('#taskModal button[onclick*="saveTask"]'),t=e?e.textContent:"Programa Ekle";e&&(e.disabled=!0,e.textContent="Kaydediliyor...");try{const a=document.getElementById("tmType").value,i=document.getElementById("tmSubjectSel"),o=document.getElementById("tmSubjectFree"),s=document.getElementById("tmExam").value,r=parseInt(document.getElementById("tmDuration").value)||60,d=document.getElementById("tmStartTime").value||null,c=document.getElementById("tmNote").value.trim();if((n=document.getElementById("tmNewResourceToggle"))==null?void 0:n.checked){const k=document.getElementById("tmManualKaynak").value.trim();if(!k)return b("Kaynak adı girin!");const _=i.style.display!=="none"?i.value:o.value.trim(),h=_?`${_} - ${k}`:k,z=le.map(C=>({label:C,url:"",soru:0}));let T=c;le.length>0&&(T=`${le.length} test: ${le.slice(0,3).join(", ")}${le.length>3?` +${le.length-3} daha`:""}`);const M={student_id:l.activeStuId,coach_id:x.coachId,date:Se,type:a,exam_type:s,subject:h,duration:r,note:T,done:!1,task_items:z.length>0?z:null,start_time:d};B(!0);const{error:E}=await f.from("tasks").insert(M);if(B(!1),E)return b("Hata: "+E.message);const D=`${l.activeStuId}_${Se}`;l.tasks[D]||(l.tasks[D]=[]),l.tasks[D].push({type:a,exam:s,subject:h,duration:r,note:T,done:!1,task_items:M.task_items,start_time:d}),K("taskModal"),q(),b("Görev eklendi ✓");return}const m=document.getElementById("tmBookVal").value,g=(O==null?void 0:O.resource_type)==="playlist";let y="";if((a==="soru"||a==="konu")&&m){const k=i.style.display!=="none"?i.value:"";y=k?`${k} - ${m}`:`${m}`}else y=(i.style.display!=="none"?i.value:o.value).trim();if(!y)return b("Ders adı girin!");const S=[...document.querySelectorAll("#tmTestList input[type=checkbox]:checked")];let I=c,v=[];if(S.length>0&&O){const k=S.map(_=>{const h=O.testler[parseInt(_.value)];return(h==null?void 0:h.label)||h||""});if(v=S.map(_=>{const h=O.testler[parseInt(_.value)];return{label:(h==null?void 0:h.label)||h||"",url:(h==null?void 0:h.url)||"",soru:(h==null?void 0:h.soru)||0}}),g){const _=h=>h.length>14?h.slice(0,13)+"…":h;I=`${k.length} video: ${k.slice(0,5).map(_).join(", ")}${k.length>5?` +${k.length-5}`:""}`}else{const _=h=>h.length>14?h.slice(0,13)+"…":h;I=`${k.length} test: ${k.slice(0,5).map(_).join(", ")}${k.length>5?` +${k.length-5}`:""}`}}const w={student_id:l.activeStuId,coach_id:x.coachId,date:Se,type:a,exam_type:s,subject:y,duration:r,note:I,done:!1,task_items:v.length>0?v:null,start_time:d};if(_editingTaskId){B(!0);const{error:k}=await f.from("tasks").update({type:w.type,exam_type:w.exam_type,subject:w.subject,duration:w.duration,note:w.note,task_items:w.task_items,start_time:w.start_time}).eq("id",_editingTaskId);if(B(!1),k)return b("Hata: "+k.message);const _=`${l.activeStuId}_${Se}`;if(l.tasks[_]){const h=l.tasks[_].findIndex(z=>z._id===_editingTaskId);h!==-1&&(l.tasks[_][h]={_id:_editingTaskId,type:w.type,exam:w.exam_type,subject:w.subject,duration:w.duration,note:w.note,done:l.tasks[_][h].done,student_note:l.tasks[_][h].student_note||"",task_items:w.task_items,start_time:w.start_time})}K("taskModal"),q(),b("Görev güncellendi ✓"),_editingTaskId=null}else{const{data:k,error:_}=await f.from("tasks").insert(w).select().single();if(_)return b("Hata: "+_.message);const h=`${l.activeStuId}_${Se}`;l.tasks[h]||(l.tasks[h]=[]),l.tasks[h].push({_id:k.id,type:k.type,exam:k.exam_type,subject:k.subject,duration:k.duration,note:k.note,done:!1,student_note:"",task_items:k.task_items||null,start_time:k.start_time}),K("taskModal"),q(),b("Görev eklendi ✓")}}finally{xt=!1,e&&(e.disabled=!1,e.textContent=t)}}async function gi(e,t){var o;const n=`${l.activeStuId}_${e}`,a=(o=l.tasks[n])==null?void 0:o[t];if(!a)return;const i=!a.done;await f.from("tasks").update({done:i}).eq("id",a._id),a.done=i,q()}let et=null;function jt(){et&&(et.remove(),et=null)}document.addEventListener("click",jt);function vi(e,t,n){jt();const a=n.getBoundingClientRect(),i=document.createElement("div");i.className="tc-dropdown",i.innerHTML=`
    <button onclick="closeTaskMenu();openCoachTaskEdit('${e}',${t})">✏️ Düzenle</button>
    <button onclick="closeTaskMenu();copyTaskToClipboard('${e}',${t})">📋 Kopyala</button>
    <button onclick="closeTaskMenu();copyTaskToWholeWeek('${e}',${t})">📅 Tüm Haftaya Kopyala</button>
    <button class="danger" onclick="closeTaskMenu();deleteTask('${e}',${t})">🗑 Kaldır</button>`;const o=a.bottom+4,s=Math.min(a.left,window.innerWidth-155);i.style.cssText=`top:${o}px;left:${s}px;`,document.body.appendChild(i),et=i,setTimeout(()=>i.addEventListener("click",r=>r.stopPropagation()),0)}async function yi(e,t){var s;const n=`${l.activeStuId}_${e}`,a=(s=l.tasks[n])==null?void 0:s[t];if(!a)return;const{data:i,error:o}=await f.from("tasks").insert({student_id:l.activeStuId,coach_id:x.coachId,date:e,type:a.type,exam_type:a.exam||null,subject:a.subject,duration:a.duration,note:a.note||null,done:!1,task_items:a.task_items||null}).select().single();if(o)return b("Kopyalama başarısız");l.tasks[n]||(l.tasks[n]=[]),l.tasks[n].push({_id:i.id,type:i.type,exam:i.exam_type,subject:i.subject,duration:i.duration,note:i.note,done:!1,student_note:"",task_items:i.task_items||null}),q(),b("Görev kopyalandı")}async function fi(e,t){var s;const n=`${l.activeStuId}_${e}`,a=(s=l.tasks[n])==null?void 0:s[t];if(!a)return;const i=[a.exam,a.subject].filter(Boolean).join(" · ")||a.type||"Görev",o=document.querySelector(`[data-task-id="${a._id}"]`);if(o){o.style.transition="all 0.3s ease",o.style.opacity="0",o.style.transform="translateX(30px)";const r=o.querySelector(".tc-body");r&&(r.innerHTML='<div style="color:var(--red); font-weight:700; font-size:12px; display:flex; align-items:center; gap:6px">🗑️ Siliniyor...</div>')}await new Promise(r=>setTimeout(r,300)),await f.from("tasks").delete().eq("id",a._id),l.tasks[n].splice(t,1),q(),b(`"${i}" silindi`)}let ne={studentId:"",type:""};window._draggingApptId=null;const En={"Haftalık Değerlendirme":"#E8613A","TYT Koçluğu":"#3B82F6","AYT Koçluğu":"#8B5CF6",Mentörlük:"#10B981","Deneme Analizi":"#F59E0B",Motivasyon:"#EC4899","Genel Görüşme":"#64748B"},nn=0,xi=24,bi=60;function Sn(e){return En[e]||"#64748B"}function hi(e){const t=l.students.find(o=>o.id===e.studentId),n=new Date(e.date+"T"+(e.time||"09:00")),a=new Date(n.getTime()+(e.duration||45)*6e4),i=o=>o.getFullYear()+String(o.getMonth()+1).padStart(2,"0")+String(o.getDate()).padStart(2,"0")+"T"+String(o.getHours()).padStart(2,"0")+String(o.getMinutes()).padStart(2,"0")+"00";return`https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(((t==null?void 0:t.name)||"Öğrenci")+" – Koçluk")}&dates=${i(n)}/${i(a)}&details=${encodeURIComponent(e.type||"")}`}function ki(){ve()}function wi(){ve()}function $i(){ve()}function Ti(e,t){ne[e]=t,ve()}function Ei(){let e=l.appointments;ne.studentId&&(e=e.filter(o=>o.studentId===ne.studentId)),ne.type&&(e=e.filter(o=>o.type===ne.type));const t=["BEGIN:VCALENDAR","VERSION:2.0","PRODID:-//Rostrum Akademi//TR","CALSCALE:GREGORIAN","METHOD:PUBLISH","X-WR-CALNAME:Rostrum Ajanda"];e.forEach(o=>{const s=l.students.find(p=>p.id===o.studentId),r=new Date(o.date+"T"+(o.time||"09:00")),d=new Date(r.getTime()+(o.duration||45)*6e4),c=p=>p.getFullYear()+String(p.getMonth()+1).padStart(2,"0")+String(p.getDate()).padStart(2,"0")+"T"+String(p.getHours()).padStart(2,"0")+String(p.getMinutes()).padStart(2,"0")+"00";t.push("BEGIN:VEVENT",`DTSTART:${c(r)}`,`DTEND:${c(d)}`,`SUMMARY:${(s==null?void 0:s.name)||"Öğrenci"} – ${o.type||"Koçluk"}`),o.note&&t.push(`DESCRIPTION:${o.note.replace(/\n/g,"\\n")}`),(o.meetLink||o.meet_link)&&t.push(`URL:${o.meetLink||o.meet_link}`),t.push(`UID:rostrum-${o.id}@rostrumakademi.com`,"END:VEVENT")}),t.push("END:VCALENDAR");const n=new Blob([t.join(`\r
`)],{type:"text/calendar;charset=utf-8"}),a=URL.createObjectURL(n),i=document.createElement("a");i.href=a,i.download="rostrum-ajanda.ics",i.click(),URL.revokeObjectURL(a),b("Ajanda indirildi ✓")}function _n(e,t){t.stopPropagation();const n=document.getElementById("apptDetailPopup");if(n){const y=n.dataset.id;if(n.remove(),y===e)return}const a=l.appointments.find(y=>y.id===e);if(!a)return;const i=l.students.find(y=>y.id===a.studentId),o=Sn(a.type),s=document.createElement("div");s.id="apptDetailPopup",s.dataset.id=e;const r=window.innerWidth,d=window.innerHeight,c=264;let p=Math.min(t.clientX+12,r-c-12),m=Math.min(t.clientY+12,d-220);s.style.cssText=`position:fixed;left:${p}px;top:${m}px;z-index:600;width:${c}px;background:var(--surface);border:1px solid var(--border);border-radius:14px;padding:14px 16px;box-shadow:0 8px 32px rgba(0,0,0,.18);animation:viewIn .15s ease`;const g=a.meetLink||a.meet_link;s.innerHTML=`
    <div style="display:flex;align-items:center;gap:10px;margin-bottom:10px">
      <div style="width:10px;height:10px;border-radius:50%;background:${o};flex-shrink:0"></div>
      <div style="flex:1;font-size:14px;font-weight:800">${u((i==null?void 0:i.name)||"?")}</div>
      <button onclick="document.getElementById('apptDetailPopup')?.remove()" style="background:none;border:none;cursor:pointer;color:var(--text-dim);font-size:18px;line-height:1;padding:0">×</button>
    </div>
    <div style="display:flex;flex-direction:column;gap:5px;margin-bottom:12px;font-size:12px;color:var(--text-mid)">
      <div>🕐 <b style="color:var(--text)">${a.time||"—"}</b> · ${a.duration} dk</div>
      <div>📋 <span style="background:${o}20;color:${o};padding:1px 8px;border-radius:99px;font-weight:700;font-size:11px">${u(a.type||"")}</span></div>
      ${a.note?`<div>📝 <span style="color:var(--text)">${u(a.note)}</span></div>`:""}
      <div>📅 ${new Date(a.date+"T12:00").toLocaleDateString("tr-TR",{day:"numeric",month:"long",weekday:"long"})}</div>
    </div>
    <div style="display:flex;gap:6px;flex-wrap:wrap">
      ${g?`<a href="${u(g)}" target="_blank" style="font-size:11px;font-weight:700;color:var(--blue);background:var(--blue-dim);padding:4px 10px;border-radius:99px;text-decoration:none">🎥 ${g.includes("zoom")?"Zoom":"Meet"}</a>`:""}
      <a href="${hi(a)}" target="_blank" style="font-size:11px;font-weight:700;color:var(--green);background:var(--green-dim);padding:4px 10px;border-radius:99px;text-decoration:none">📅 GCal</a>
      <button onclick="document.getElementById('apptDetailPopup')?.remove();openAgendaApptModal('${a.id}')" style="font-size:11px;font-weight:700;color:var(--text);background:var(--surface2);padding:4px 10px;border-radius:99px;border:1px solid var(--border);cursor:pointer;font-family:inherit">✏️ Düzenle</button>
      <button onclick="deleteAgendaAppt('${a.id}')" style="font-size:11px;font-weight:700;color:var(--red,#ef4444);background:#ef444410;padding:4px 10px;border-radius:99px;border:none;cursor:pointer;font-family:inherit">🗑</button>
    </div>`,document.body.appendChild(s),setTimeout(()=>{document.addEventListener("click",function y(S){s.contains(S.target)||(s.remove(),document.removeEventListener("click",y))})},50)}async function Si(e,t){e.preventDefault();const n=window._draggingApptId;if(!n)return;window._draggingApptId=null;const a=e.currentTarget,i=a.getBoundingClientRect(),o=a.closest("[data-tl-scroll]"),s=o?o.scrollTop:0,d=(e.clientY-i.top+s)/bi*60+nn*60,c=Math.max(nn,Math.min(xi-1,Math.floor(d/60))),p=Math.round(d%60/15)*15,m=p>=60?0:p,g=`${String(c).padStart(2,"0")}:${String(m).padStart(2,"0")}`,{error:y}=await f.from("appointments").update({date:t,time:g}).eq("id",n);if(y){b("Hata: "+y.message);return}const S=l.appointments.find(I=>I.id===n);S&&(S.date=t,S.time=g),ve(),b("Randevu taşındı ✓")}function In(){ve()}function ve(){const e=document.getElementById("view-todolist");if(!e)return;if(!document.getElementById("fc-styles")){const r=document.createElement("style");r.id="fc-styles",r.textContent=`
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
    `,document.head.appendChild(r)}const t='<option value="">Tüm Öğrenciler</option>'+l.students.map(r=>`<option value="${r.id}"${ne.studentId===r.id?" selected":""}>${u(r.name)}</option>`).join(""),n='<option value="">Tüm Tipler</option>'+Object.keys(En).map(r=>`<option value="${r}"${ne.type===r?" selected":""}>${r}</option>`).join("");let a=l.appointments;ne.studentId&&(a=a.filter(r=>r.studentId===ne.studentId)),ne.type&&(a=a.filter(r=>r.type===ne.type));const i=a.map(r=>{const d=l.students.find(I=>I.id===r.studentId),c=Sn(r.type),p=`${r.date}T${r.time||"09:00"}`,m=new Date(p),g=new Date(m.getTime()+(r.duration||45)*6e4),y=I=>String(I).padStart(2,"0"),S=`${g.getFullYear()}-${y(g.getMonth()+1)}-${y(g.getDate())}T${y(g.getHours())}:${y(g.getMinutes())}:00`;return{id:r.id,title:`${(d==null?void 0:d.name)||"Öğrenci"} (${r.type||"Randevu"})`,start:p,end:S,backgroundColor:c,borderColor:c,textColor:"#ffffff",extendedProps:{...r}}}),o="font-size:12px;padding:6px 12px;border-radius:8px;border:1px solid var(--border);background:var(--surface);color:var(--text);cursor:pointer;font-family:inherit";let s=document.getElementById("fc-calendar");if(!s)e.innerHTML=`
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
    `,s=document.getElementById("fc-calendar");else{const r=e.querySelectorAll("select");r[0]&&(r[0].innerHTML=t),r[1]&&(r[1].innerHTML=n)}typeof FullCalendar<"u"?window._fcInstance?(window._fcInstance.removeAllEvents(),window._fcInstance.addEventSource(i),window._fcInstance.updateSize()):(window._fcInstance=new FullCalendar.Calendar(s,{initialView:window.innerWidth<700?"listWeek":"timeGridWeek",headerToolbar:{left:"prev,next today",center:"title",right:"dayGridMonth,timeGridWeek,timeGridDay,listWeek"},buttonText:{today:"Bugün",month:"Ay",week:"Hafta",day:"Gün",list:"Ajanda"},locale:"tr",firstDay:1,slotMinTime:"08:00",slotMaxTime:"23:00",allDaySlot:!1,editable:!0,droppable:!0,selectable:!0,eventClick:function(r){_n(r.event.id,r.jsEvent)},select:function(r){const d=r.startStr.slice(0,10),c=r.startStr.slice(11,16)||"14:00";zn(null,d),setTimeout(()=>{const p=document.getElementById("amTime");p&&(p.value=c)},50)},eventDrop:async function(r){const d=r.event.start,c=r.event.end||new Date(d.getTime()+45*6e4),p=d.getFullYear()+"-"+String(d.getMonth()+1).padStart(2,"0")+"-"+String(d.getDate()).padStart(2,"0"),m=String(d.getHours()).padStart(2,"0")+":"+String(d.getMinutes()).padStart(2,"0"),g=Math.round((c.getTime()-d.getTime())/6e4),y=r.event.id,{error:S}=await f.from("appointments").update({date:p,time:m,duration:g}).eq("id",y);if(S){b("Hata: "+S.message),r.revert();return}const I=l.appointments.find(v=>v.id===y);I&&(I.date=p,I.time=m,I.duration=g),b("Randevu taşıma başarılı ✓")},eventResize:async function(r){const d=r.event.start,c=r.event.end;if(!c)return;const p=Math.round((c.getTime()-d.getTime())/6e4),m=r.event.id,{error:g}=await f.from("appointments").update({duration:p}).eq("id",m);if(g){b("Hata: "+g.message),r.revert();return}const y=l.appointments.find(S=>S.id===m);y&&(y.duration=p),b("Randevu süresi güncellendi ✓")},events:i}),window._fcInstance.render()):console.warn("FullCalendar library not loaded yet")}function zn(e,t){const n=e?l.appointments.find(a=>a.id===e):null;document.getElementById("amTitle").textContent=n?"Randevuyu Düzenle":"Yeni Randevu",document.getElementById("amId").value=e||"",document.getElementById("amStudent").innerHTML=l.students.map(a=>`<option value="${a.id}" ${(n==null?void 0:n.studentId)===a.id?"selected":""}>${u(a.name)}</option>`).join(""),document.getElementById("amDate").value=n?n.date:t||H(new Date),document.getElementById("amTime").value=n?n.time:"14:00",document.getElementById("amDuration").value=n?n.duration:"45",document.getElementById("amType").value=n?n.type:"Haftalık Değerlendirme",document.getElementById("amNote").value=n&&n.note||"",document.getElementById("amMeetLink").value=n&&(n.meetLink||n.meet_link)||"",N("apptModal")}async function _i(e){await J("Randevu silinsin mi?")&&(await f.from("appointments").delete().eq("id",e),l.appointments=l.appointments.filter(t=>t.id!==e),ve(),b("Randevu silindi"))}function Bn(){qe()}function Ii(e){l.activeStuId=e,l.weekOffset=0,ue(),At(e)}function zi(e){const t=e?l.students.find(a=>a.id===e):null;document.getElementById("smTitle").textContent=t?"Öğrenciyi Düzenle":"Yeni Öğrenci",document.getElementById("smId").value=e||"",document.getElementById("smName").value=(t==null?void 0:t.name)||"",document.getElementById("smTarget").value=(t==null?void 0:t.target)||"",document.getElementById("smUsername").value=(t==null?void 0:t.username)||"",document.getElementById("smPass").value=(t==null?void 0:t.pass)||STU_DEFAULT_PASS,document.getElementById("smWeekStart").value=(t==null?void 0:t.weekStart)??0,document.getElementById("smYksArea").value=(t==null?void 0:t.yksArea)||"SAY",document.getElementById("smProg").value=(t==null?void 0:t.progress)||0,document.getElementById("smProgVal").textContent=((t==null?void 0:t.progress)||0)+"%",document.querySelectorAll(".color-opt").forEach(a=>a.classList.toggle("sel",a.dataset.c===((t==null?void 0:t.color)||"#f0a500")));const n=document.getElementById("smRoleField");n&&(n.style.display="none"),document.querySelector("#studentModal .btn-accent").setAttribute("onclick","saveStudent()"),N("studentModal")}document.getElementById("smProg").addEventListener("input",function(){document.getElementById("smProgVal").textContent=this.value+"%"});document.getElementById("smColorPick").addEventListener("click",function(e){const t=e.target.closest(".color-opt");t&&(document.querySelectorAll(".color-opt").forEach(n=>n.classList.remove("sel")),t.classList.add("sel"))});async function Bi(){var d;const e=document.getElementById("smName").value.trim();if(!e)return b("İsim girin!");const t=((d=document.querySelector(".color-opt.sel"))==null?void 0:d.dataset.c)||"#f0a500",n=document.getElementById("smId").value,a=_e(document.getElementById("smUsername").value.trim())||_e(e.split(" ")[0])+Math.floor(Math.random()*100),i=document.getElementById("smPass").value||STU_DEFAULT_PASS,o=await Me(i),s=document.getElementById("smYksArea").value,r={full_name:e,target:document.getElementById("smTarget").value.trim()||"Hedef belirtilmemiş",color:t,progress:Number(document.getElementById("smProg").value),password_hash:o,week_start:Number(document.getElementById("smWeekStart").value),coach_id:x.coachId,yks_area:s};if(n){const{error:c}=await f.rpc("update_student_profile",{p_student_id:n,p_full_name:e,p_target:r.target,p_color:t,p_progress:r.progress,p_week_start:r.week_start,p_username:a,p_plain_password:i,p_password_hash:o,p_yks_area:r.yks_area});if(c)return b("Hata: "+c.message);const p=l.students.find(m=>m.id===n);p&&Object.assign(p,{name:r.full_name,target:r.target,color:t,progress:r.progress,pass:r.password_hash,weekStart:r.week_start,username:a,yksArea:r.yks_area}),b("Güncellendi ✓"),ue(),K("studentModal"),qe()}else{const c=a+"@rostrumakademi.com",{data:{session:p}}=await f.auth.getSession(),m=await fetch("/api/create-student",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${(p==null?void 0:p.access_token)||""}`},body:JSON.stringify({email:c,password:i,full_name:r.full_name,username:a,color:r.color,target:r.target,progress:r.progress,week_start:r.week_start,coach_id:r.coach_id,exam_profile:"YKS",yks_area:r.yks_area})}),g=await m.json();if(!m.ok)return b("Hata: "+g.error);const y=g.userId;l.students.push({id:y,name:r.full_name,target:r.target,color:r.color,progress:r.progress||0,pass:o,weekStart:r.week_start||0,username:a,yksArea:r.yks_area}),l.activeStuId||(l.activeStuId=y),ue(),K("studentModal"),Mn(r.full_name,a,i)}}function Mn(e,t,n){let a=document.getElementById("inviteModal");a||(a=document.createElement("div"),a.id="inviteModal",a.className="modal-bg",document.body.appendChild(a),a.addEventListener("click",r=>{r.target===a&&a.classList.remove("open")}));const o=`${window.location.origin+window.location.pathname.replace("app.html","")}app.html`,s=encodeURIComponent(`Merhaba ${e}! 🎓

Seni Rostrum Akademi platformuna ekledim.

📱 Giriş adresi: ${o}
👤 Kullanıcı adı: ${t}
🔑 Şifre: ${n}

Giriş yaptıktan sonra programını görebileceksin!`);a.innerHTML=`<div class="modal" style="max-width:480px">
    <button class="modal-close" onclick="cm('inviteModal');renderStudentsSearch()">×</button>
    <div style="text-align:center;margin-bottom:20px">
      <div style="font-size:40px;margin-bottom:8px">🎉</div>
      <h2>${u(e)} eklendi!</h2>
      <p style="font-size:13px;color:var(--text-mid);margin-top:6px">Öğrencine aşağıdaki bilgileri paylaş</p>
    </div>

    <div style="background:var(--surface2);border:1px solid var(--border);border-radius:12px;padding:16px;margin-bottom:14px">
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
        <div>
          <div style="font-size:10px;font-weight:700;color:var(--text-dim);text-transform:uppercase;letter-spacing:.5px;margin-bottom:4px">Kullanıcı Adı</div>
          <div style="font-family:'Inter',sans-serif;font-size:16px;font-weight:800;color:var(--accent)">${u(t)}</div>
        </div>
        <div>
          <div style="font-size:10px;font-weight:700;color:var(--text-dim);text-transform:uppercase;letter-spacing:.5px;margin-bottom:4px">Şifre</div>
          <div style="font-family:'Inter',sans-serif;font-size:16px;font-weight:800;color:var(--accent)">${u(n)}</div>
        </div>
      </div>
      <div style="margin-top:10px;padding-top:10px;border-top:1px solid var(--border)">
        <div style="font-size:10px;font-weight:700;color:var(--text-dim);text-transform:uppercase;letter-spacing:.5px;margin-bottom:4px">Giriş Adresi</div>
        <div style="font-size:12px;color:var(--blue);word-break:break-all">${o}</div>
      </div>
    </div>

    <div style="display:flex;gap:8px">
      <button class="btn btn-ghost" style="flex:1;justify-content:center" onclick="copyInvite('${u(t)}','${u(n)}','${o}')">📋 Kopyala</button>
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
  </div>`,window._pendingInvite={name:e,username:t,pass:n,loginUrl:o},N("inviteModal")}async function Mi(){var s,r;const e=(s=document.getElementById("inviteEmailInput"))==null?void 0:s.value.trim(),t=document.getElementById("inviteEmailMsg");if(!e||!e.includes("@")){t&&(t.style.display="block",t.style.background="var(--red-dim)",t.style.color="var(--red)",t.textContent="Geçerli bir e-posta girin.");return}if(!window._pendingInvite)return;const{name:n,username:a,pass:i,loginUrl:o}=window._pendingInvite;t&&(t.style.display="block",t.style.background="var(--surface2)",t.style.color="var(--text-mid)",t.textContent="Gönderiliyor...");try{const d=await fetch("/api/mailer",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({type:"student_welcome",to:e,student_name:n,username:a,password:i,login_url:o,coach_name:((r=l.workspace)==null?void 0:r.brand_name)||""})}),c=await d.json();if(d.ok)t&&(t.style.background="var(--green-dim)",t.style.color="var(--green)",t.textContent="✓ Mail gönderildi!");else throw new Error(c.error||"Sunucu hatası")}catch(d){t&&(t.style.background="var(--red-dim)",t.style.color="var(--red)",t.textContent="✗ "+d.message)}}window.sendInviteEmail=Mi;function Ai(e,t,n){const a=`Giriş adresi: ${n}
Kullanıcı adı: ${e}
Şifre: ${t}`;navigator.clipboard.writeText(a).then(()=>b("Kopyalandı ✓")).catch(()=>{const i=document.createElement("textarea");i.value=a,document.body.appendChild(i),i.select(),document.execCommand("copy"),i.remove(),b("Kopyalandı ✓")})}async function Di(e){var a;if(!await J("Bu öğrenciyi silmek istediğinizden emin misiniz?"))return;const t=document.getElementById(`sturow_${e}`);t&&(t.style.transition="all 0.3s ease",t.style.opacity="0",t.style.transform="translateX(30px)",t.innerHTML='<div style="color:var(--red); font-weight:700; font-size:13px; display:flex; align-items:center; gap:6px">🗑️ Siliniyor...</div>'),await new Promise(i=>setTimeout(i,300));const{error:n}=await f.from("users").delete().eq("id",e);if(n)return b("Hata: "+n.message);l.students=l.students.filter(i=>i.id!==e),l.activeStuId===e&&(l.activeStuId=((a=l.students[0])==null?void 0:a.id)||null),ue(),Bn(),b("Silindi")}function Ue(){var t;const e=document.getElementById("view-appointments");e.innerHTML=`
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
    </div>`,ct(),Pt()}function ct(){const e=l.calYear,t=l.calMonth;document.getElementById("calMonthLbl").textContent=`${MONTHS_TR[t]} ${e}`;const n=new Date(e,t,1).getDay(),a=new Date(e,t+1,0).getDate(),i=ge(),o=new Set(l.appointments.filter(d=>{const c=new Date(d.date);return c.getFullYear()===e&&c.getMonth()===t}).map(d=>new Date(d.date).getDate())),s=n===0?6:n-1;let r="";for(let d=0;d<s;d++)r+='<div class="cal-day empty"></div>';for(let d=1;d<=a;d++){const c=`${e}-${String(t+1).padStart(2,"0")}-${String(d).padStart(2,"0")}`;r+=`<div class="cal-day ${c===i?"today":""} ${c===l.calSelDay&&c!==i?"selected":""} ${o.has(d)?"has-appt":""}" onclick="selCalDay('${c}')">${d}</div>`}document.getElementById("calDaysGrid").innerHTML=r}function Ci(e){l.calSelDay=l.calSelDay===e?null:e,ct(),Pt()}function Li(e){l.calMonth+=e,l.calMonth>11&&(l.calMonth=0,l.calYear++),l.calMonth<0&&(l.calMonth=11,l.calYear--),Fe(),ct()}function Pt(){const e=ge();let t=l.appointments,n="Yaklaşan Görüşmeler";if(l.calSelDay?(t=t.filter(a=>a.date===l.calSelDay),n=new Date(l.calSelDay+"T12:00").toLocaleDateString("tr-TR",{day:"numeric",month:"long"})):t=t.filter(a=>a.date>=e).sort((a,i)=>a.date.localeCompare(i.date)).slice(0,10),document.getElementById("apptListTitle").textContent=n,!t.length){document.getElementById("apptList").innerHTML='<div class="empty"><p>Randevu yok</p></div>';return}document.getElementById("apptList").innerHTML=t.map(a=>{const i=l.students.find(r=>r.id===a.studentId),s=a.date===e?"BUGÜN":new Date(a.date+"T12:00").toLocaleDateString("tr-TR",{day:"numeric",month:"short"});return`<div data-appt-id="${a.id}" class="appt-item" style="border-left-color:${(i==null?void 0:i.color)||"#555"}">
      <div class="appt-when">${s} • ${a.time} (${a.duration} dk)</div>
      <div class="appt-name">${u((i==null?void 0:i.name)||"?")}</div>
      <div class="appt-type">${u(a.type)}</div>
      ${a.note?`<div class="appt-note">${u(a.note)}</div>`:""}
      ${a.meet_link?`<div style="margin-top:6px;display:flex;gap:6px;align-items:center">
        <a href="${u(a.meet_link)}" target="_blank" style="font-size:11px;background:var(--blue-dim);color:var(--blue);padding:3px 10px;border-radius:99px;text-decoration:none;font-weight:700">${a.meet_link.includes("zoom")?"🎥 Zoom":"📹 Meet"}</a>
        <button class="btn btn-ghost btn-xs" onclick="copyToClipboard('${u(a.meet_link)}')">Kopyala</button>
      </div>`:""}
      <div class="appt-actions">
        <button class="btn btn-ghost btn-xs" onclick="openApptModal('${a.id}')">✏️</button>
        <button class="btn btn-danger btn-xs" onclick="deleteAppt('${a.id}')">🗑</button>
      </div>
    </div>`}).join("")}function ji(e){const t=e?l.appointments.find(n=>n.id===e):null;document.getElementById("amTitle").textContent=t?"Randevuyu Düzenle":"Yeni Randevu",document.getElementById("amId").value=e||"",document.getElementById("amStudent").innerHTML=l.students.map(n=>`<option value="${n.id}" ${(t==null?void 0:t.studentId)===n.id?"selected":""}>${u(n.name)}</option>`).join(""),document.getElementById("amDate").value=t?t.date:H(new Date),document.getElementById("amTime").value=t?t.time:"14:00",document.getElementById("amDuration").value=t?t.duration:"45",document.getElementById("amType").value=t?t.type:"Haftalık Değerlendirme",document.getElementById("amNote").value=(t==null?void 0:t.note)||"",document.getElementById("amMeetLink").value=(t==null?void 0:t.meet_link)||"",N("apptModal")}async function Pi(){var s;const e=document.getElementById("amStudent").value,t=document.getElementById("amDate").value,n=document.getElementById("amTime").value;if(!e||!t||!n)return b("Tüm alanları doldurun!");const a=document.getElementById("amMeetLink").value.trim();if(a&&!a.startsWith("https://"))return b("Toplantı linki https:// ile başlamalı");if(a&&!/zoom\.us|meet\.google|teams\.microsoft|webex\.com/.test(a))return b("Geçersiz link — Zoom, Meet, Teams veya Webex linki girin");const i=document.getElementById("amId").value,o={student_id:e,coach_id:x.coachId,date:t,time:n,duration:parseInt(document.getElementById("amDuration").value),type:document.getElementById("amType").value,note:document.getElementById("amNote").value.trim(),meet_link:a};if(i){await f.from("appointments").update(o).eq("id",i);const r=l.appointments.find(d=>d.id===i);r&&Object.assign(r,{studentId:e,date:t,time:n,duration:o.duration,type:o.type,note:o.note}),b("Güncellendi ✓")}else{const{data:r,error:d}=await f.from("appointments").insert(o).select().single();if(d)return b("Hata: "+d.message);l.appointments.push({id:r.id,studentId:r.student_id,date:r.date,time:r.time,duration:r.duration,type:r.type,note:r.note}),b("Randevu eklendi ✓")}K("apptModal"),currentTab==="todolist"?ve():(s=document.getElementById("view-appointments"))!=null&&s.classList.contains("active")&&Ue()}async function Ri(e){if(!await J("Bu randevuyu silmek istediğinizden emin misiniz?"))return;const t=document.querySelector(`[data-appt-id="${e}"]`);if(t){t.style.transition="all 0.3s ease",t.style.opacity="0",t.style.transform="translateX(30px)";const n=t.querySelector(".appt-name");n&&(n.innerHTML='<span style="color:var(--red); font-weight:700">🗑️ Siliniyor...</span>')}await new Promise(n=>setTimeout(n,300)),await f.from("appointments").delete().eq("id",e),l.appointments=l.appointments.filter(n=>n.id!==e),Ue(),b("Silindi")}function ot(e){return 100+(Number(e.Türkçe||0)+Number(e.Matematik||0)+Number(e.Fen||0)+Number(e.Sosyal||0))*(400/120)}function An(e,t){const n=a=>Number(t[a]||0);return e==="AYT-SAY"?100+(n("Matematik")+n("Fizik")+n("Kimya")+n("Biyoloji"))*5:e==="AYT-EA"?100+(n("Matematik")+n("Edebiyat")+n("Tarih")+n("Coğrafya"))*5:e==="AYT-SOZ"?100+(n("Edebiyat")+n("Tarih1")+n("Tarih2")+n("Coğrafya1")+n("Coğrafya2")+n("Felsefe")+n("Din"))*5:null}const Dn={"AYT-SAY":"SAY","AYT-EA":"EA","AYT-SOZ":"SÖZ"},st={TYT:"#3B82F6",SAY:"#8B5CF6",EA:"#10B981",SÖZ:"#F59E0B"};function Cn(e,t){const{type:n,nets:a}=e;if(n==="TYT"){const d=ot(a),c=st.TYT;return`<div style="margin-top:10px;display:flex;align-items:center;gap:8px;flex-wrap:wrap">
      <span style="background:${c}18;border:1px solid ${c}40;border-radius:8px;padding:5px 12px;display:inline-flex;gap:7px;align-items:baseline">
        <span style="font-size:10px;font-weight:700;color:${c};text-transform:uppercase">TYT Puan</span>
        <span style="font-size:18px;font-weight:900;color:${c}">${d.toFixed(2)}</span>
      </span>
    </div>`}const i=Dn[n];if(!i)return"";const o=st[i]||"#64748B",s=An(n,a),r=t.filter(d=>d.type==="TYT"&&d.date<=e.date).sort((d,c)=>c.date.localeCompare(d.date))[0];if(r){const d=ot(r.nets),c=d*.4+s*.6;return`<div style="margin-top:10px;display:flex;align-items:center;gap:10px;flex-wrap:wrap">
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
  </div>`}function Hi(){var d,c;const e=document.getElementById("emPuanDisplay");if(!e)return;const t=(d=document.getElementById("emExamType"))==null?void 0:d.value;if(!t)return;const n={};if((EXAM_DEFS[t]||[]).forEach(p=>{const m=Z[p]||{};n[p]=Math.max(0,(m.dogru||0)-(m.yanlis||0)/4)}),t==="TYT"){const p=ot(n),m=st.TYT;e.innerHTML=`<div style="background:${m}12;border:1px solid ${m}35;border-radius:10px;padding:10px 14px;display:flex;align-items:center;gap:10px">
      <span style="font-size:11px;font-weight:700;color:${m};text-transform:uppercase;letter-spacing:.4px">🎯 TYT Puan</span>
      <span style="font-size:24px;font-weight:900;color:${m};letter-spacing:-.5px">${p.toFixed(2)}</span>
    </div>`;return}const a=Dn[t],i=st[a]||"#64748B",o=An(t,n);if(o===null){e.innerHTML="";return}const s=(c=document.getElementById("emStudent"))==null?void 0:c.value,r=s?[...l.exams].filter(p=>p.studentId===s&&p.type==="TYT").sort((p,m)=>m.date.localeCompare(p.date))[0]:null;if(r){const p=ot(r.nets),m=p*.4+o*.6;e.innerHTML=`<div style="background:${i}12;border:1px solid ${i}35;border-radius:10px;padding:10px 14px">
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
        ${o.map(r=>{const c=(EXAM_DEFS[r.type]||[]).reduce((m,g)=>{var y;return m+Number(((y=r.nets)==null?void 0:y[g])||0)},0),p=Math.max(Math.round(c/s*100),4);return`<div class="bar-wrap">
            <div class="bar-val">${c.toFixed(0)}</div>
            <div class="bar" style="height:${p}%;background:${(t==null?void 0:t.color)||"var(--accent)"}"></div>
            <div class="bar-label" title="${u(r.name)}">${u(r.name.replace(/Deneme /,"#").replace(/TYT |AYT /,""))}</div>
          </div>`}).join("")}
      </div>
    </div>`}const i=n.length?n.map(o=>{const s=EXAM_DEFS[o.type]||[],r=s.reduce((d,c)=>{var p;return d+Number(((p=o.nets)==null?void 0:p[c])||0)},0).toFixed(1);return`<div style="background:var(--surface);border:1px solid var(--border);border-radius:12px;padding:16px;margin-bottom:10px;">
      <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:12px">
        <div>
          <div style="font-size:14px;font-weight:700">${u(o.name)}</div>
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
      ${Cn(o,n)}
      ${o.note?`<div style="margin-top:10px;font-size:12px;color:var(--text-mid);font-style:italic">"${u(o.note)}"</div>`:""}
      ${(()=>{if(!o.examDetails||!Object.keys(o.examDetails).length)return"";const d=s.map(c=>{const p=o.examDetails[c];if(!p)return"";const m=Math.max(0,(p.dogru||0)-(p.yanlis||0)/4).toFixed(2),g=p.yanlis_konular||[];return`<div style="padding:6px 0;border-bottom:1px solid var(--border)">
            <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:${g.length?"5px":"0"}">
              <span style="font-size:11px;font-weight:700;color:var(--text-mid)">${u(c)}</span>
              <span style="font-size:11px;color:var(--text-dim)">D:<b style="color:var(--green)">${p.dogru||0}</b> Y:<b style="color:var(--red)">${p.yanlis||0}</b> B:<b>${p.bos||0}</b> · Net <b style="color:var(--accent)">${m}</b></span>
            </div>
            ${g.length?`<div style="display:flex;flex-wrap:wrap;gap:3px">${g.map(y=>`<span style="font-size:10px;padding:2px 8px;border-radius:10px;background:rgba(255,92,122,.1);color:var(--red);border:1px solid rgba(255,92,122,.2)">${u(y)}</span>`).join("")}</div>`:""}
          </div>`}).filter(Boolean).join("");return d?`<div style="margin-top:10px;background:var(--surface2);border:1px solid var(--border);border-radius:9px;padding:10px 14px">
          <div style="font-size:10px;font-weight:700;color:var(--text-dim);text-transform:uppercase;letter-spacing:.5px;margin-bottom:8px">📋 Ders Detayları</div>
          ${d}
        </div>`:""})()}
      ${o.coachComment?`<div style="margin-top:8px;background:var(--accent-dim);border:1px solid rgba(240,165,0,.2);border-radius:8px;padding:9px 12px;font-size:12px"><span style="font-weight:700;color:var(--accent)">Koç: </span>${u(o.coachComment)}</div>`:""}
    </div>`}).join(""):'<div class="empty"><p>Henüz deneme sonucu yok</p></div>';e.innerHTML=`
    <button class="back-link" onclick="switchTab('student-detail')">← ${t?u(t.name):"Öğrenci"}</button>
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px">
      <div>
        <div style="font-family:'Inter',sans-serif;font-size:18px;font-weight:800">${t?u(t.name)+"  — ":""} Denemeler</div>
        <div style="font-size:12px;color:var(--text-mid);margin-top:2px">${n.length} deneme kaydı</div>
      </div>
      <div style="display:flex;gap:8px">
        <button class="btn btn-ghost btn-sm" onclick="openKonuRaporu('${l.activeStuId}')">📊 Konu Raporu</button>
      </div>
    </div>
    ${a}
    ${i}`}let Ln=null,Te="TYT";const Yi=["TYT","AYT-SAY","AYT-EA","AYT-SOZ"];function jn(){const t=l.exams.filter(s=>s.studentId===Ln).filter(s=>s.type===Te&&s.examDetails&&Object.keys(s.examDetails).length),n={};t.forEach(s=>{Object.entries(s.examDetails).forEach(([r,d])=>{(d.yanlis_konular||[]).forEach(c=>{const p=r+"§"+c;n[p]=(n[p]||0)+1})})});const a=Object.entries(n).sort((s,r)=>r[1]-s[1]).map(([s,r])=>{const[d,c]=s.split("§"),p=Math.round(r/Math.max(t.length,1)*100),m=r>=3?"var(--red)":r===2?"var(--accent)":"var(--text-mid)";return`<tr style="border-bottom:1px solid var(--border)">
        <td style="padding:8px 10px;font-size:12px;color:var(--text-dim);white-space:nowrap">${u(d)}</td>
        <td style="padding:8px 10px;font-size:13px;font-weight:600">${u(c)}</td>
        <td style="padding:8px 10px;text-align:center">
          <span style="font-size:14px;font-weight:800;color:${m}">${r}</span>
          <span style="font-size:10px;color:var(--text-dim)">/${t.length}</span>
        </td>
        <td style="padding:8px 10px;min-width:90px">
          <div style="height:6px;border-radius:3px;background:var(--surface2);overflow:hidden">
            <div style="height:100%;width:${p}%;background:${m};border-radius:3px;transition:width .3s"></div>
          </div>
        </td>
      </tr>`}),i=Yi.map(s=>`<button onclick="window._krType='${s}';_krRenderBody()" style="padding:6px 14px;border-radius:20px;border:1px solid ${s===Te?"var(--accent)":"var(--border)"};background:${s===Te?"var(--accent-dim)":"transparent"};color:${s===Te?"var(--accent)":"var(--text-dim)"};font-size:12px;cursor:pointer;font-weight:${s===Te?700:400}">${s}</button>`).join(""),o=a.length?`<div style="font-size:11px;color:var(--text-dim);margin-bottom:12px">${t.length} denemeden derlendi · <b>${a.length}</b> farklı yanlış konu · 🔴 ≥3 tekrar kritik</div>
       <div style="overflow-x:auto">
       <table style="width:100%;border-collapse:collapse">
         <thead><tr style="border-bottom:2px solid var(--border)">
           <th style="padding:6px 10px;font-size:10px;color:var(--text-dim);text-align:left;text-transform:uppercase;letter-spacing:.5px">Ders</th>
           <th style="padding:6px 10px;font-size:10px;color:var(--text-dim);text-align:left;text-transform:uppercase;letter-spacing:.5px">Konu</th>
           <th style="padding:6px 10px;font-size:10px;color:var(--text-dim);text-align:center;text-transform:uppercase;letter-spacing:.5px">Tekrar</th>
           <th style="padding:6px 10px;font-size:10px;color:var(--text-dim);text-align:left;text-transform:uppercase;letter-spacing:.5px">Sıklık</th>
         </tr></thead>
         <tbody>${a.join("")}</tbody>
       </table></div>`:`<div style="text-align:center;padding:40px;color:var(--text-dim);font-size:13px">${t.length?"Bu denemeler için henüz konu işaretlenmemiş.":Te+" tipi deneme kaydı yok."}</div>`;document.getElementById("konuRaporuBody").innerHTML=`
    <div style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:16px">${i}</div>
    ${o}`}window._krRenderBody=jn;function Ni(e){Ln=e;const t=l.exams.find(n=>n.studentId===e&&n.examDetails&&Object.keys(n.examDetails).length);Te=(t==null?void 0:t.type)||"TYT",jn(),N("konuRaporuModal")}window.openKonuRaporu=Ni;function Ki(e){const t=l.exams.find(n=>n.id===e);document.getElementById("cmExamId").value=e,document.getElementById("cmText").value=(t==null?void 0:t.coachComment)||"",N("commentModal")}async function Oi(){const e=document.getElementById("cmExamId").value,t=document.getElementById("cmText").value.trim();await f.from("exams").update({coach_comment:t}).eq("id",e);const n=l.exams.find(a=>a.id===e);n&&(n.coachComment=t),K("commentModal"),Pe(),b("Yorum kaydedildi ✓")}async function Fi(e){await J("Bu denemeyi silmek istediğinizden emin misiniz?")&&(await f.from("exams").delete().eq("id",e),l.exams=l.exams.filter(t=>t.id!==e),Pe(),b("Silindi"))}function Pn(){const e=document.getElementById("view-messages");e.innerHTML=`<div class="sh" style="margin-bottom:14px"><h2>Mesajlar</h2></div>
    <div class="msg-layout">
      <div class="msg-sidebar">
        <div class="msg-sidebar-hd">Öğrenciler</div>
        ${l.students.map(t=>{const n=l.messages[t.id]||[],a=n[n.length-1],i=n.filter(o=>o.from==="student"&&!o.read).length;return`<div class="msg-contact ${l.msgThread===t.id?"active":""}" onclick="selectThread('${t.id}')">
            <div class="msg-contact-avatar" style="background:${t.color}">${t.name[0]}</div>
            <div style="flex:1;min-width:0">
              <div class="msg-contact-name">${u(t.name.split(" ")[0])}</div>
              <div class="msg-contact-last">${a?u(a.text.slice(0,35)):"Mesaj yok"}</div>
            </div>
            ${i?`<span class="msg-unread">${i}</span>`:""}
          </div>`}).join("")}
      </div>
      <div class="msg-main" id="msgMain">
        ${l.msgThread?be(l.msgThread,"coach"):'<div class="no-chat-sel">Öğrenci seçin</div>'}
      </div>
    </div>`,l.msgThread&&he()}async function Gi(e){l.msgThread=e;const t=(l.messages[e]||[]).filter(n=>n.from==="student"&&!n.read&&n._id).map(n=>n._id);t.length&&await f.from("messages").update({read:!0}).in("id",t),(l.messages[e]||[]).forEach(n=>{n.from==="student"&&(n.read=!0)}),document.getElementById("msgMain").innerHTML=be(e,"coach"),document.querySelectorAll(".msg-contact").forEach(n=>n.classList.remove("active")),l.students.forEach((n,a)=>{var i;n.id===e&&((i=document.querySelectorAll(".msg-contact")[a])==null||i.classList.add("active"))}),he(),Nt()}function be(e,t){const n=l.students.find(o=>o.id===e),i=(l.messages[e]||[]).map(o=>`<div class="msg-bubble ${t==="coach"&&o.from==="coach"||t==="student"&&o.from==="student"?"out":"in"}">${u(o.text)}<div class="msg-bubble-time">${o.time}</div></div>`).join("");return`<div class="msg-main-hd">
    <div style="width:30px;height:30px;border-radius:8px;background:${(n==null?void 0:n.color)||"#555"};color:#0f0e0c;font-family:'Inter',sans-serif;font-size:12px;font-weight:800;display:flex;align-items:center;justify-content:center">${(n==null?void 0:n.name[0])||"?"}</div>
    <div class="msg-main-hd-name">${u((n==null?void 0:n.name)||"")}</div>
  </div>
  <div class="msg-body" id="msgBody">${i||'<div class="empty"><p>Henüz mesaj yok</p></div>'}</div>
  <div class="msg-input-area">
    <textarea class="msg-input" id="msgInput" placeholder="Mesaj yaz..." onkeydown="if(event.key==='Enter'&&!event.shiftKey){event.preventDefault();sendMsg('${e}','${t}');}"></textarea>
    <button class="btn btn-accent" onclick="sendMsg('${e}','${t}')">Gönder</button>
  </div>`}async function qi(e,t){var r,d;const n=document.getElementById("msgInput"),a=n.value.trim();if(!a)return;const i=x.coachId||((r=l.students.find(c=>c.id===e))==null?void 0:r.coachId)||((d=l.students.find(c=>c.id===x.studentId))==null?void 0:d.coachId),{data:o,error:s}=await f.from("messages").insert({student_id:e,coach_id:i,from_role:t,text:a,read:!1}).select().single();if(s){console.error("sendMsg error:",s),b("Hata: "+s.message);return}l.messages[e]||(l.messages[e]=[]),l.messages[e].push({_id:o.id,from:t,text:a,time:new Date().toLocaleTimeString("tr-TR",{hour:"2-digit",minute:"2-digit"}),read:!1}),n.value="",currentTab==="messages"&&(document.getElementById("msgMain").innerHTML=be(e,"coach"),he()),currentTab==="smessages"&&(document.getElementById("msgMain").innerHTML=be(e,"student"),he())}function he(){setTimeout(()=>{const e=document.getElementById("msgBody");e&&(e.scrollTop=e.scrollHeight)},60)}function pt(){var g;const e=document.getElementById("view-portal");if(!e)return;let t=l.students.find(y=>y.id===x.studentId);if(!t&&l.students.length>0&&(t=l.students[0]),!t){e.innerHTML=`<div style="text-align:center;padding:60px 20px;color:var(--text-mid)">
      <div style="font-size:36px;margin-bottom:12px">⏳</div>
      <p style="font-size:14px">Profil yükleniyor...</p>
    </div>`,setTimeout(()=>{l.students.length&&pt()},800);return}x.studentId||(x.studentId=t.id),l.activeStuId=t.id;const n=ge(),a=`${t.id}_${n}`,i=l.tasks[a]||[],o=i.filter(y=>y.done).length,s=l.appointments.filter(y=>y.studentId===t.id&&y.date>=n).sort((y,S)=>y.date.localeCompare(S.date))[0],r=(l.messages[t.id]||[]).filter(y=>y.from==="coach"&&!y.read).length,d=((g=l.konuMastery)==null?void 0:g[t.id])||{},c=[],p=new Date;p.setDate(p.getDate()-30),Object.entries(d).forEach(([y,S])=>{Object.entries(S).forEach(([I,v])=>{if(v.status==="td"||v.status==="not_started")return;const w=v.last_review_date?new Date(v.last_review_date):null,k=w?Math.floor((Date.now()-w.getTime())/864e5):999,_=v.stars<=2,h=k>20;(_||h)&&c.push({konu:I,subject:y,stars:v.stars,daysSince:k})})}),c.sort((y,S)=>y.stars-S.stars||S.daysSince-y.daysSince);const m=c.length>0?`
    <div class="card cp" style="border-color:rgba(239,68,68,.3)">
      <div class="portal-sec-title">🔄 Tekrar Gereken Konular <span style="font-size:11px;background:rgba(239,68,68,.12);color:#ef4444;padding:2px 8px;border-radius:99px;font-weight:700">${c.length}</span></div>
      ${c.slice(0,5).map(y=>{const S=Ae[y.stars];return y.daysSince<999&&`${y.daysSince}`,`<div style="display:flex;align-items:center;gap:10px;padding:7px 0;border-bottom:1px solid var(--border)">
          <span style="font-size:13px;color:${S.color};font-weight:800;white-space:nowrap">${"⭐".repeat(y.stars)||"○"}</span>
          <div style="flex:1;min-width:0">
            <div style="font-size:12px;font-weight:700;color:var(--text);overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${u(y.konu)}</div>
            <div style="font-size:10px;color:var(--text-dim)">${u(y.subject)} · Son: ${y.daysSince<999?y.daysSince+"g önce":"Hiç"}</div>
          </div>
        </div>`}).join("")}
      ${c.length>5?`<div style="font-size:11px;color:var(--text-dim);margin-top:8px;text-align:center">+${c.length-5} daha…</div>`:""}
    </div>`:"";e.innerHTML=`
    <div class="portal-hero">
      <div class="portal-avatar" style="background:${t.color}">${t.name[0]}</div>
      <div class="portal-info">
        <h1>Merhaba, ${u(t.name.split(" ")[0])}! 👋</h1>
        <p>${u(t.target)} · ${new Date().toLocaleDateString("tr-TR",{weekday:"long",day:"numeric",month:"long"})}</p>
      </div>
    </div>
    <div class="portal-grid">
      <div class="card cp">
        <div class="portal-sec-title">📋 Bugünün Görevleri</div>
        ${i.length?`
          ${i.map((y,S)=>`
            <div data-task-id="${y._id}" class="task-card task-${y.type} ${y.done?"done":""}" style="margin-bottom:6px">
              <div class="tc-check ${y.done?"on":""}" onclick="stuToggleTask('${n}',${S})"></div>
              <div class="tc-body">
                <div class="tc-type">${Ge(y.type)}${y.exam?" · "+y.exam:""}</div>
                <div class="tc-subject">${u(y.subject)}</div>
                <div class="tc-meta">${y.duration} dk${y.note?" · "+u(y.note):""}</div>
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
          <div style="font-size:12px;color:var(--text-mid);margin-top:3px">${u(s.type)} · ${s.duration} dk</div>`:'<div style="font-size:13px;color:var(--text-dim)">Yaklaşan randevu yok</div>'}
        </div>
        ${r>0?`<div class="card cp" style="border-color:var(--accent);cursor:pointer" onclick="switchTab('smessages')">
          <div style="display:flex;align-items:center;gap:10px">
            <span style="font-size:22px">💬</span>
            <div><div style="font-weight:700">${r} yeni mesaj</div><div style="font-size:12px;color:var(--text-mid)">Koçundan</div></div>
          </div>
        </div>`:""}
        ${m}
      </div>
    </div>`}async function Ui(e,t){var s;const n=l.students.find(r=>r.id===x.studentId);if(!n)return;const a=`${n.id}_${e}`,i=(s=l.tasks[a])==null?void 0:s[t];if(!i)return;const o=!i.done;await f.from("tasks").update({done:o}).eq("id",i._id),i.done=o,pt()}function ke(){const e=l.students.find(d=>d.id===x.studentId);if(!e)return;const t=document.getElementById("view-sportal"),n=e.weekStart??0,a=V(l.weekOffset,n),i=G(a,6),o=ge(),s=localStorage.getItem("ra_program_mode")||"weekly";let r="";for(let d=0;d<7;d++){const c=G(a,d),p=H(c),m=p===o,g=`${e.id}_${p}`,y=l.tasks[g]||[],S=y.reduce((_,h)=>_+Number(h.duration),0),I=y.reduce((_,h)=>_+(h.done?Number(h.duration):0),0);DAYS_TR[(n+d)%7];const v=[...y];s==="hourly"&&v.sort((_,h)=>_.start_time&&!h.start_time?-1:!_.start_time&&h.start_time?1:_.start_time&&h.start_time?_.start_time.localeCompare(h.start_time):0);const w=v.map(_=>{const h=y.indexOf(_),z=_.start_time?`<div class="tc-time-badge">🕒 ${_.start_time}</div>`:"";return`
        <div data-task-id="${_._id}" class="task-card task-${_.type} ${_.done?"done":""} ${_.start_time?"hourly-card":""}" onclick="openTaskDetail('${p}',${h},'student')" style="cursor:pointer">
          <div class="tc-check ${_.done?"on":""}" onclick="event.stopPropagation();stuToggleTask2('${p}',${h})"></div>
          <div class="tc-body">
            ${z}
            <div class="tc-type">${Ge(_.type)}${_.exam?" · "+_.exam:""}</div>
            <div class="tc-subject">${u(_.subject)}</div>
            <div class="tc-meta">${_.duration} dk</div>
          </div>
        </div>`}).join(""),k=["Pzt","Sal","Çar","Per","Cum","Cmt","Paz"][(n+d)%7];r+=`<div class="day-col ${m?"today":""}">
      <div class="day-hd">
        <div><div class="day-name-lbl">${k}</div><div class="day-num">${c.getDate()}</div></div>
        <span class="day-badge" style="font-size:8.5px">${Ne(I)} / ${Ne(S)}</span>
      </div>
      <div class="day-tasks-list">${w||'<div class="empty" style="padding:8px 0"><p style="font-size:11px">Görev yok</p></div>'}</div>
    </div>`}t.innerHTML=`
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
    <div class="week-grid">${r}</div>`}async function Wi(e,t){var s;const n=l.students.find(r=>r.id===x.studentId);if(!n)return;const a=`${n.id}_${e}`,i=(s=l.tasks[a])==null?void 0:s[t];if(!i)return;const o=!i.done;await f.from("tasks").update({done:o}).eq("id",i._id),i.done=o,ke()}function Vi(e){l.weekOffset+=e,ue(),ke()}function Rt(e,t,n){var y,S,I,v;const i=`${x.role==="student"?x.studentId:l.activeStuId}_${e}`,o=(y=l.tasks[i])==null?void 0:y[t];if(!o)return;let s=document.getElementById("taskDetailModal");s||(s=document.createElement("div"),s.id="taskDetailModal",s.className="modal-bg",document.body.appendChild(s),s.addEventListener("click",w=>{w.target===s&&s.classList.remove("open")}));const r={soru:"var(--blue)",konu:"#c084fc",deneme:"var(--accent)",diger:"var(--text-mid)"},d={soru:"Soru Bankası",konu:"Konu Anlatımı",deneme:"Deneme",diger:"Diğer"},c=r[o.type]||"var(--accent)",p=o.type==="konu",m=o.task_items||[];let g="";m.length>0?g=`<div style="margin-bottom:14px">
      <div style="font-size:11px;font-weight:700;color:var(--text-dim);text-transform:uppercase;letter-spacing:.5px;margin-bottom:8px">${p?"Videolar":"Testler"} (${m.length})</div>
      <div style="background:var(--surface2);border:1px solid var(--border);border-radius:10px;overflow:hidden;max-height:200px;overflow-y:auto">
        ${m.map((w,k)=>`
          <label style="display:flex;align-items:center;gap:10px;padding:8px 12px;border-bottom:1px solid var(--border);${k===m.length-1?"border-bottom:none":""};cursor:${n==="coach"?"default":"pointer"};transition:background .1s"
            ${n==="coach"?"":`onmouseover="this.style.background='var(--surface3)'" onmouseout="this.style.background=''"`}>
            <input type="checkbox" ${w.done?"checked":""} ${n==="coach"?"disabled":""} onchange="toggleDetailItem('${e}',${t},${k},'${n}')"
              style="width:16px;height:16px;accent-color:var(--accent);cursor:${n==="coach"?"default":"pointer"};flex-shrink:0;">
            <div style="width:20px;height:20px;border-radius:6px;background:${c}22;color:${c};font-size:10px;font-weight:800;display:flex;align-items:center;justify-content:center;flex-shrink:0;margin-left:4px">${k+1}</div>
            <div style="flex:1;min-width:0">
              <div style="font-size:13px;font-weight:600;line-height:1.4;${w.done?"text-decoration:line-through;color:var(--text-dim);":""}">${u(w.label||`Ders ${k+1}`)}</div>
              <div style="font-size:11px;color:var(--text-mid);margin-top:2px">⏱ ${w.soru>0?p?w.soru+" dk":w.soru+" soru":"?"}</div>
            </div>
            ${w.url?`<a href="${u(w.url)}" target="_blank" onclick="event.stopPropagation()"
              style="display:flex;align-items:center;gap:4px;font-size:12px;font-weight:700;background:#cc000022;color:#ff5555;border:1px solid #aa222233;padding:6px 12px;border-radius:8px;text-decoration:none;flex-shrink:0;white-space:nowrap">▶ İzle</a>`:""}
          </label>`).join("")}
      </div>
    </div>`:o.note&&(o.note.includes("test:")||o.note.includes("video:"))&&(g=`<div style="margin-bottom:14px">
      <div style="font-size:11px;font-weight:700;color:var(--text-dim);text-transform:uppercase;letter-spacing:.5px;margin-bottom:6px">${p?"Videolar":"Testler"}</div>
      <div style="background:var(--surface2);border:1px solid var(--border);border-radius:10px;padding:10px 12px;font-size:12px;color:var(--text-mid)">${u(o.note)}</div>
    </div>`),s.innerHTML=`<div class="modal">
    <button class="modal-close" onclick="cm('taskDetailModal')">×</button>

    <!-- Görev başlık -->
    <div style="border-left:3px solid ${c};padding-left:12px;margin-bottom:20px">
      <div style="font-size:10px;font-weight:700;color:${c};text-transform:uppercase;letter-spacing:.5px;margin-bottom:4px">${d[o.type]||o.type}${o.exam?" · "+o.exam:""}</div>
      <div style="font-family:'Inter',sans-serif;font-size:18px;font-weight:800;line-height:1.2">${u(o.subject)}</div>
      <div style="font-size:12px;color:var(--text-dim);margin-top:4px">${new Date(e+"T12:00").toLocaleDateString("tr-TR",{weekday:"long",day:"numeric",month:"long"})}</div>
    </div>

    <!-- Tamamlandı toggle -->
    <div id="tdDoneBox" style="background:var(--surface2);border:1.5px solid ${o.done?"var(--green)":"var(--border)"};border-radius:11px;padding:12px 16px;display:flex;align-items:center;justify-content:space-between;margin-bottom:16px;cursor:${n==="coach"?"default":"pointer"};transition:all .2s" ${n==="coach"?"":`onclick="toggleTaskDetail('${e}',${t},'${n}')"`}>
      <div style="font-size:13px;font-weight:700;color:${o.done?"var(--green)":"var(--text)"}">${o.done?"✓ Tamamlandı":"Tamamlandı mı?"}</div>
      <div style="width:22px;height:22px;border-radius:6px;border:2px solid ${o.done?"var(--green)":"var(--border)"};background:${o.done?"var(--green)":"transparent"};display:flex;align-items:center;justify-content:center;font-size:13px;transition:all .2s">${o.done?"✓":""}</div>
    </div>

    <!-- Test/Video listesi -->
    ${g}

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
    ${(()=>{var k;const w=ei(o.exam,o.subject);return w?(ie=[...((k=o.student_result)==null?void 0:k.yanlis_konular)||[]],`<div style="background:var(--surface2);border:1px solid var(--border);border-radius:11px;padding:14px 16px;margin-bottom:14px">
        <div style="font-size:11px;font-weight:700;color:var(--text-dim);text-transform:uppercase;letter-spacing:.5px;margin-bottom:10px">📌 Yanlış Konular</div>
        <div style="display:flex;flex-wrap:wrap;gap:0">${w.map(_=>{const h=ie.includes(_);return`<span ${n==="coach"?"":`onclick="toggleKonuChip(this,'${_.replace(/'/g,"\\'")}')"`}
            style="display:inline-block;padding:5px 11px;margin:3px;border-radius:20px;font-size:11px;font-weight:600;cursor:${n==="coach"?"default":"pointer"};user-select:none;border:1px solid ${h?"var(--red)":"var(--border)"};background:${h?"rgba(255,92,122,.12)":"var(--surface)"};color:${h?"var(--red)":"var(--text-mid)"}">
            ${u(_)}</span>`}).join("")}</div>
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
  </div>`,N("taskDetailModal")}async function Zi(e,t,n){var s;if(n==="coach")return;const i=`${x.role==="student"?x.studentId:l.activeStuId}_${e}`,o=(s=l.tasks[i])==null?void 0:s[t];o&&(o.done=!o.done,o.task_items&&Array.isArray(o.task_items)&&o.task_items.forEach(r=>{r.done=o.done}),await f.from("tasks").update({done:o.done,task_items:o.task_items||null}).eq("id",o._id),Rt(e,t,n),n==="student"?ke():q())}async function Ji(e,t,n,a){var d;if(a==="coach")return;const o=`${x.role==="student"?x.studentId:l.activeStuId}_${e}`,s=(d=l.tasks[o])==null?void 0:d[t];if(!s||!s.task_items)return;s.task_items[n].done=!s.task_items[n].done;const r=s.task_items.every(c=>c.done);s.done=r,B(!0),await f.from("tasks").update({task_items:s.task_items,done:s.done}).eq("id",s._id),B(!1),Rt(e,t,a),a==="student"?ke():q(),b("İlerleme kaydedildi ✓")}function Xi(e,t){var i,o,s;e.closest("div").querySelectorAll("button[data-speed]").forEach(r=>{const d=r.dataset.speed===t;r.style.borderColor=d?"var(--accent)":"var(--border)",r.style.background=d?"var(--accent-dim)":"var(--surface2)",r.style.color=d?"var(--accent)":"var(--text-mid)"}),document.getElementById("tdSpeed").value=t;const n=parseFloat(t),a=document.getElementById("speedCalc");if(a){const r=parseInt(((s=(o=(i=a.closest("[id=speedInfo]"))==null?void 0:i.textContent)==null?void 0:o.match(/Toplam (\d+) dk/))==null?void 0:s[1])||0);a.textContent=Math.ceil(r/n)+" dk",document.getElementById("tdDuration").value=Math.ceil(r/n)}}async function Qi(e,t,n){var m,g;if(n==="coach")return;const i=`${x.role==="student"?x.studentId:l.activeStuId}_${e}`,o=(m=l.tasks[i])==null?void 0:m[t];if(!o)return;const s=((g=document.getElementById("tdNote"))==null?void 0:g.value.trim())||"",r={student_note:s},d=document.getElementById("tdDogru"),c=document.getElementById("tdYanlis"),p=document.getElementById("tdBos");if(d!==null){const y=parseInt(d.value)||0,S=parseInt(c.value)||0,I=parseInt(p.value)||0;(y>0||S>0||I>0||ie.length>0)&&(r.student_result={dogru:y,yanlis:S,bos:I,yanlis_konular:[...ie],ts:new Date().toISOString()},o.student_result=r.student_result)}await f.from("tasks").update(r).eq("id",o._id),o.student_note=s,K("taskDetailModal"),b("Kaydedildi ✓"),n==="student"?ke():q()}function Ht(){const e=l.students.find(o=>o.id===x.studentId);if(!e)return;const t=document.getElementById("view-sexams"),n=[...l.exams].filter(o=>o.studentId===e.id).sort((o,s)=>s.date.localeCompare(o.date));let a="";if(n.length>1){const o=[...n].sort((r,d)=>r.date.localeCompare(d.date)).slice(-8),s=Math.max(...o.map(r=>(EXAM_DEFS[r.type]||[]).reduce((c,p)=>{var m;return c+Number(((m=r.nets)==null?void 0:m[p])||0)},0)),1);a=`<div class="card cp" style="margin-bottom:16px">
      <div style="font-family:'Inter',sans-serif;font-size:15px;font-weight:700;margin-bottom:12px">📈 Net Gelişimim</div>
      <div class="bar-chart">
        ${o.map(r=>{const c=(EXAM_DEFS[r.type]||[]).reduce((m,g)=>{var y;return m+Number(((y=r.nets)==null?void 0:y[g])||0)},0),p=Math.max(Math.round(c/s*100),4);return`<div class="bar-wrap">
            <div class="bar-val">${c.toFixed(0)}</div>
            <div class="bar" style="height:${p}%;background:${e.color}"></div>
            <div class="bar-label">${u(r.name.replace("Deneme ","#").replace("TYT ","").replace("AYT ",""))}</div>
          </div>`}).join("")}
      </div>
    </div>`}const i=n.length?n.map(o=>{const s=EXAM_DEFS[o.type]||[],r=s.reduce((c,p)=>{var m;return c+Number(((m=o.nets)==null?void 0:m[p])||0)},0).toFixed(1),d=s.map(c=>{var m;const p=Number(((m=o.nets)==null?void 0:m[c])||0);return`<div class="net-box"><div class="net-label">${c}</div><div class="net-val ${_t(p)}">${p}</div></div>`}).join("");return`<div class="exam-item">
      <div class="exam-header">
        <div><div class="exam-name">${u(o.name)}</div><div class="exam-date">${new Date(o.date+"T12:00").toLocaleDateString("tr-TR",{day:"numeric",month:"long",year:"numeric"})}</div></div>
        <button class="btn btn-ghost btn-xs" onclick="openStudentExamModal('${o.id}')">✏️ Düzenle</button>
      </div>
      ${o.note?`<div style="font-size:12px;color:var(--text-mid);margin-bottom:8px;font-style:italic">"${u(o.note)}"</div>`:""}
      <div class="nets-grid">${d}</div>
      <div style="margin-top:8px"><div style="font-family:'Inter',sans-serif;font-size:18px;font-weight:800">Toplam: ${r}</div></div>
      ${Cn(o,n)}
      ${o.coachComment?`<div class="coach-comment-box"><strong>Koç Yorumu</strong>${u(o.coachComment)}</div>`:""}
    </div>`}).join(""):'<div class="empty"><p>Henüz deneme sonucu eklemediniz.<br>İlk sonucunuzu girin!</p></div>';t.innerHTML=`
    <div class="sh"><h2>Denemelerim</h2><button class="btn btn-accent" onclick="openStudentExamModal()">+ Sonuç Gir</button></div>
    ${a}${i}`}function Rn(e){var n;const t=e?l.exams.find(a=>a.id===e):null;document.getElementById("emTitle").textContent=t?"Sonucu Düzenle":"Deneme Sonucu Gir",document.getElementById("emId").value=e||"",document.getElementById("emName").value=(t==null?void 0:t.name)||"",document.getElementById("emDate").value=(t==null?void 0:t.date)||H(new Date),document.getElementById("emStudentWrap").style.display="none",document.getElementById("emStudent").innerHTML=`<option value="${x.studentId}">${u(((n=l.students.find(a=>a.id===x.studentId))==null?void 0:n.name)||"")}</option>`,document.getElementById("emExamType").value=(t==null?void 0:t.type)||"TYT",document.getElementById("emNote").value=(t==null?void 0:t.note)||"",Yt(),t!=null&&t.examDetails&&Object.entries(t.examDetails).forEach(([a,i])=>{const o=document.getElementById(`ed_${a}_d`),s=document.getElementById(`ed_${a}_y`),r=document.getElementById(`ed_${a}_b`);o&&(o.value=i.dogru||0,s.value=i.yanlis||0,r.value=i.bos||0),Z[a]={...i},Hn(a),(i.yanlis_konular||[]).forEach(d=>{document.querySelectorAll(`#konu_acc_${a.replace(/\s/g,"_")} span`).forEach(p=>{p.textContent.trim()===d&&(p.style.borderColor="var(--red)",p.style.background="rgba(255,92,122,.12)",p.style.color="var(--red)")})})}),N("examModal")}function eo(e){document.getElementById("emStudentWrap").style.display="",document.getElementById("emStudent").innerHTML=l.students.map(t=>`<option value="${t.id}">${u(t.name)}</option>`).join(""),Rn(e),document.getElementById("emStudentWrap").style.display=""}let Z={};function to(e,t,n){Z[t]||(Z[t]={dogru:0,yanlis:0,bos:0,yanlis_konular:[]});const a=Z[t].yanlis_konular,i=a.indexOf(n);i===-1?(a.push(n),e.style.borderColor="var(--red)",e.style.background="rgba(255,92,122,.12)",e.style.color="var(--red)"):(a.splice(i,1),e.style.borderColor="var(--border)",e.style.background="var(--surface)",e.style.color="var(--text-mid)")}window.toggleExamKonuChip=to;function Hn(e){var c,p,m,g;const t=parseInt((c=document.getElementById(`ed_${e}_d`))==null?void 0:c.value)||0,n=parseInt((p=document.getElementById(`ed_${e}_y`))==null?void 0:p.value)||0,a=parseInt((m=document.getElementById(`ed_${e}_b`))==null?void 0:m.value)||0;Z[e]||(Z[e]={yanlis_konular:[]}),Z[e].dogru=t,Z[e].yanlis=n,Z[e].bos=a;const i=document.getElementById("emExamType").value,o=((g=EXAM_SORU[i])==null?void 0:g[e])||40,s=t+n+a,r=document.getElementById(`ed_${e}_net`),d=document.getElementById(`ed_${e}_warn`);r&&(r.textContent=Math.max(0,t-n/4).toFixed(2)),d&&(d.style.display=s>o?"":"none"),Hi()}window.updateExamNet=Hn;function no(e){const t=document.getElementById(`konu_acc_${e.replace(/\s/g,"_")}`);t&&(t.style.display=t.style.display==="none"?"":"none")}window.toggleKonuAccordion=no;function Yt(){const e=document.getElementById("emExamType").value,t=EXAM_DEFS[e]||[];Z={};const n=document.getElementById("emPuanDisplay");n&&(n.innerHTML=""),document.getElementById("netInputsWrap").innerHTML=t.map(a=>{var d;const i=((d=EXAM_SORU[e])==null?void 0:d[a])||40,s=(EXAM_KONU_MAP[`${e}_${a}`]||[]).flatMap(c=>Ke[c]||[]),r=s.length?`
      <div style="margin-top:8px">
        <button type="button" onclick="toggleKonuAccordion('${a}')"
          style="font-size:11px;font-weight:700;color:var(--text-dim);background:none;border:none;cursor:pointer;padding:0;display:flex;align-items:center;gap:4px">
          📌 Yanlış Konular <span style="font-size:10px">▾</span>
        </button>
        <div id="konu_acc_${a.replace(/\s/g,"_")}" style="display:none;margin-top:6px;display:flex;flex-wrap:wrap;gap:0">
          ${s.map(c=>`<span onclick="toggleExamKonuChip(this,'${a}','${c.replace(/'/g,"\\'")}')"
            style="display:inline-block;padding:4px 10px;margin:2px;border-radius:20px;font-size:10px;font-weight:600;cursor:pointer;user-select:none;border:1px solid var(--border);background:var(--surface);color:var(--text-mid)">${u(c)}</span>`).join("")}
        </div>
      </div>`:"";return`<div style="background:var(--surface2);border:1px solid var(--border);border-radius:11px;padding:12px 14px;margin-bottom:10px">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:10px">
        <span style="font-size:12px;font-weight:800;text-transform:uppercase;letter-spacing:.5px">${u(a)}</span>
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
    </div>`}).join("")}async function ao(){var r,d;const e=document.getElementById("emName").value.trim();if(!e)return b("Sınav adı girin!");const t=document.getElementById("emExamType").value,n={};(EXAM_DEFS[t]||[]).forEach(c=>{const p=Z[c]||{};n[c]=Math.max(0,(p.dogru||0)-(p.yanlis||0)/4)});const a=document.getElementById("emId").value,i=document.getElementById("emStudent").value,o={name:e,date:document.getElementById("emDate").value,student_id:i,coach_id:x.coachId||((r=l.students.find(c=>c.id===i))==null?void 0:r.coachId),exam_type:t,nets:n,exam_details:Z,student_note:document.getElementById("emNote").value.trim()};async function s(c,p,m){var g,y,S;if(p){const{error:I}=await f.from("exams").update(c).eq("id",m);if((g=I==null?void 0:I.message)!=null&&g.includes("exam_details")){const{exam_details:v,...w}=c;return f.from("exams").update(w).eq("id",m)}return{error:I}}else{const I=await f.from("exams").insert(c).select().single();if((S=(y=I.error)==null?void 0:y.message)!=null&&S.includes("exam_details")){const{exam_details:v,...w}=c;return f.from("exams").insert(w).select().single()}return I}}if(a){const{error:c}=await s(o,!0,a);if(c)return b("Hata: "+c.message);const p=l.exams.find(m=>m.id===a);p&&Object.assign(p,{name:o.name,date:o.date,studentId:i,type:t,nets:n,examDetails:Z,note:o.student_note}),b("Güncellendi ✓")}else{const{data:c,error:p}=await s(o,!1,null);if(p)return b("Hata: "+p.message);l.exams.push({id:c.id,studentId:c.student_id,name:c.name,date:c.date,type:c.exam_type,nets:c.nets||{},examDetails:c.exam_details||{},note:c.student_note,coachComment:""}),b("Deneme eklendi ✓")}if(K("examModal"),x.role==="student"?Ht():Pe(),x.role==="coach"||x.role==="developer")try{const c=[];Object.values(Z||{}).forEach(m=>{var g;(g=m==null?void 0:m.yanlis_konular)!=null&&g.length&&c.push(...m.yanlis_konular)}),ie!=null&&ie.length&&c.push(...ie);const p=[...new Set(c)];if(p.length>0&&i){const m=((d=l.konuMastery)==null?void 0:d[i])||{},g=[];if(Object.entries(m).forEach(([y,S])=>{Object.entries(S).forEach(([I,v])=>{p.includes(I)&&(v.status==="td"?g.push({konu:I,subject:y,type:"td_broken",stars:v.stars}):v.stars>=5&&g.push({konu:I,subject:y,type:"high_star_wrong",stars:v.stars}))})}),g.length>0){const y=g.filter(v=>v.type==="td_broken"),S=g.filter(v=>v.type==="high_star_wrong");let I="⚠️ Mastery Önerileri: ";y.length>0&&(I+=`${y.map(v=>v.konu).join(", ")} TD'den düştü! `),S.length>0&&(I+=`${S.map(v=>v.konu).join(", ")} için yıldız düşürmeyi düşün.`),setTimeout(()=>{const v=document.createElement("div");v.style.cssText="position:fixed;bottom:80px;right:16px;max-width:360px;background:var(--surface);border:1.5px solid var(--accent);border-radius:12px;padding:14px 16px;box-shadow:var(--shadow-lg);z-index:99999;animation:slideIn .3s ease",v.innerHTML=`
              <div style="display:flex;align-items:flex-start;gap:10px">
                <span style="font-size:20px;flex-shrink:0">⚠️</span>
                <div style="flex:1">
                  <div style="font-size:13px;font-weight:800;margin-bottom:6px">Deneme → Konu Mastery Önerisi</div>
                  ${y.length>0?`<div style="font-size:11px;color:var(--red);margin-bottom:4px">🔴 TD'den düşenler: <b>${y.map(w=>w.konu).join(", ")}</b></div>`:""}
                  ${S.length>0?`<div style="font-size:11px;color:var(--accent)">🟡 Yıldız düşürmeyi düşün: <b>${S.map(w=>w.konu).join(", ")}</b></div>`:""}
                  <div style="font-size:10px;color:var(--text-dim);margin-top:6px">Değişiklik yapmak için Konu Haritası'na git</div>
                </div>
                <button onclick="this.parentElement.parentElement.remove()" style="border:none;background:none;color:var(--text-dim);cursor:pointer;font-size:16px;line-height:1;flex-shrink:0">×</button>
              </div>`,document.body.appendChild(v),setTimeout(()=>v.remove(),12e3)},600)}}}catch(c){console.error("[mastery suggestion]",c)}}async function Tt(){const e=l.students.find(a=>a.id===x.studentId);if(!e)return;const t=(l.messages[e.id]||[]).filter(a=>a.from==="coach"&&!a.read&&a._id).map(a=>a._id);t.length&&await f.from("messages").update({read:!0}).in("id",t),(l.messages[e.id]||[]).forEach(a=>{a.from==="coach"&&(a.read=!0)});const n=document.getElementById("view-smessages");n.innerHTML=`<div class="sh" style="margin-bottom:14px"><h2>💬 Koçuma Yaz</h2></div>
    <div class="card" style="max-width:700px;overflow:hidden">
      <div class="msg-main" id="msgMain" style="display:flex;flex-direction:column;min-height:420px">
        ${be(e.id,"student")}
      </div>
    </div>`,he()}let tt=null;function Nt(){Kt();const e=x.role==="coach"||x.role==="developer"?l.msgThread:x.studentId;e&&(tt=f.channel("messages_"+e).on("postgres_changes",{event:"INSERT",schema:"public",table:"messages",filter:`student_id=eq.${e}`},t=>{const n=t.new;l.messages[e]||(l.messages[e]=[]),!l.messages[e].find(a=>a._id===n.id)&&(l.messages[e].push({_id:n.id,from:n.from_role,text:n.text,read:n.read,time:new Date(n.created_at).toLocaleTimeString("tr-TR",{hour:"2-digit",minute:"2-digit"})}),currentTab==="messages"&&l.msgThread===e&&(document.getElementById("msgMain").innerHTML=be(e,"coach"),he()),currentTab==="smessages"&&(document.getElementById("msgMain").innerHTML=be(e,"student"),he()))}).subscribe())}function Kt(){tt&&(f.removeChannel(tt),tt=null)}async function io(){var e,t;await f.from("workspaces").upsert({coach_id:x.coachId,brand_name:((e=l.workspace)==null?void 0:e.brand_name)||"Akademi",brand_color:((t=l.workspace)==null?void 0:t.brand_color)||"#f0a500",onboarding_done:!1},{onConflict:"coach_id"}),l.workspace&&(l.workspace.onboarding_done=!1),On()}window.devResetOnboarding=io;async function Yn(){const e=document.getElementById("view-dev-dashboard");e.innerHTML='<div class="sh"><h2>🖥️ Sistem Dashboard</h2></div><div class="empty"><p>Yükleniyor...</p></div>';const[t,n,a,i,o,s]=await Promise.all([f.from("users").select("id,role,created_at"),f.from("tasks").select("id,done,created_at"),f.from("exams").select("id,created_at"),f.from("messages").select("id,created_at"),f.from("tickets").select("id,status,created_at"),f.from("payments").select("id,amount,status,payment_date")]),r=t.data||[],d=n.data||[],c=a.data||[],p=i.data||[],m=o.data||[],g=s.data||[],y=r.filter(h=>h.role==="coach").length,S=r.filter(h=>h.role==="student").length,I=g.filter(h=>h.status==="completed").reduce((h,z)=>h+Number(z.amount),0),v=m.filter(h=>h.status==="open").length,w=Array.from({length:7},(h,z)=>{const T=new Date;return T.setDate(T.getDate()-6+z),H(T)}),k=w.map(h=>d.filter(z=>{var T;return(T=z.created_at)==null?void 0:T.startsWith(h)}).length),_=Math.max(...k,1);e.innerHTML=`
    <div class="sh"><h2>🖥️ Sistem Dashboard</h2>
      <div style="display:flex;gap:8px;align-items:center">
        <span style="font-size:12px;color:var(--text-dim)">${new Date().toLocaleDateString("tr-TR",{weekday:"long",day:"numeric",month:"long",year:"numeric"})}</span>
        <button class="btn btn-ghost btn-sm" onclick="devResetOnboarding()" title="Onboarding sihirbazını yeniden başlat">🧙 Sihirbazı Test Et</button>
      </div>
    </div>

    <div class="stats-row" style="margin-bottom:20px">
      <div class="stat-card"><div class="stat-label">Toplam Öğrenci</div><div class="stat-val" style="color:var(--blue)">${S}</div></div>
      <div class="stat-card"><div class="stat-label">Toplam Koç</div><div class="stat-val" style="color:var(--accent)">${y}</div></div>
      <div class="stat-card"><div class="stat-label">Toplam Görev</div><div class="stat-val">${d.length}</div><div style="font-size:11px;color:var(--green);margin-top:3px">✓ ${d.filter(h=>h.done).length} tamamlandı</div></div>
      <div class="stat-card"><div class="stat-label">Toplam Deneme</div><div class="stat-val">${c.length}</div></div>
      <div class="stat-card"><div class="stat-label">Toplam Mesaj</div><div class="stat-val">${p.length}</div></div>
      <div class="stat-card"><div class="stat-label">Toplam Gelir</div><div class="stat-val" style="color:var(--green)">${I.toLocaleString("tr-TR")} ₺</div></div>
      <div class="stat-card"><div class="stat-label">Açık Ticket</div><div class="stat-val" style="color:${v>0?"var(--red)":"var(--green)"}">${v}</div></div>
    </div>

    <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px">
      <div class="card cp">
        <div style="font-family:'Inter',sans-serif;font-size:14px;font-weight:700;margin-bottom:14px">📅 Son 7 Gün Görev Aktivitesi</div>
        <div style="display:flex;align-items:flex-end;gap:6px;height:80px">
          ${w.map((h,z)=>`<div style="flex:1;display:flex;flex-direction:column;align-items:center;gap:3px">
            <div style="font-size:10px;color:var(--text-mid);font-weight:600">${k[z]}</div>
            <div style="width:100%;background:var(--accent);border-radius:3px 3px 0 0;height:${Math.max(Math.round(k[z]/_*100),4)}%;min-height:3px;opacity:.8"></div>
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
    </div>`}async function We(){const e=document.getElementById("view-dev-users"),{data:t}=await f.from("users").select("*").order("created_at"),n=new Date;function a(i){if(i.role!=="coach"&&i.role!=="developer")return'<span style="color:var(--text-dim);font-size:11px">—</span>';const o=i.plan||"trial";if(o==="active")return'<span style="font-size:10px;font-weight:800;color:#10b981;background:rgba(16,185,129,.12);border:1px solid rgba(16,185,129,.3);border-radius:4px;padding:2px 7px">AKTİF</span>';if(o==="paused")return'<span style="font-size:10px;font-weight:700;color:#f59e0b;background:rgba(245,158,11,.12);border:1px solid rgba(245,158,11,.3);border-radius:4px;padding:2px 7px">DURAKLATILDI</span>';if(o==="cancelled")return'<span style="font-size:10px;font-weight:700;color:#ef4444;background:rgba(239,68,68,.1);border:1px solid rgba(239,68,68,.2);border-radius:4px;padding:2px 7px">İPTAL</span>';const s=i.trial_ends_at?new Date(i.trial_ends_at):new Date(new Date(i.created_at).getTime()+14*24*60*60*1e3),r=Math.ceil((s-n)/864e5);return r<=0?'<span style="font-size:10px;font-weight:700;color:#ef4444;background:rgba(239,68,68,.1);border:1px solid rgba(239,68,68,.2);border-radius:4px;padding:2px 7px">SÜRESİ DOLDU</span>':`<span style="font-size:10px;font-weight:700;color:#6366f1;background:rgba(99,102,241,.1);border:1px solid rgba(99,102,241,.2);border-radius:4px;padding:2px 7px">DENEME · ${r}g</span>`}e.innerHTML=`
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
              <td style="padding:10px 12px;font-weight:700">${u(i.full_name)}</td>
              <td style="padding:10px 12px;color:var(--text-mid)">${u(i.username)}</td>
              <td style="padding:10px 12px"><span class="role-badge ${i.role==="coach"?"role-coach":i.role==="developer"?"role-dev":"role-student"}">${i.role}</span></td>
              <td style="padding:10px 12px">${a(i)}</td>
              <td style="padding:10px 12px;color:var(--text-dim);font-size:11px">${new Date(i.created_at).toLocaleDateString("tr-TR")}</td>
              <td style="padding:10px 12px;display:flex;gap:6px;flex-wrap:nowrap">
                ${i.role==="coach"||i.role==="developer"?`<button class="btn btn-accent btn-xs" onclick="openPlanModal('${i.id}','${u(i.full_name)}','${i.plan||"trial"}','${i.trial_ends_at||""}')">📋</button>`:""}
                <button class="btn btn-ghost btn-xs" onclick="openDevUserModal('${i.id}')">✏️</button>
                <button class="btn btn-danger btn-xs" onclick="devDeleteUser('${i.id}','${u(i.full_name)}')">🗑</button>
              </td>
            </tr>`).join("")}
        </tbody>
      </table>
    </div>`}async function oo(e){const t=e?(await f.from("users").select("*").eq("id",e).single()).data:null;document.getElementById("smTitle").textContent=t?"Kullanıcıyı Düzenle":"Yeni Kullanıcı",document.getElementById("smId").value=e||"",document.getElementById("smName").value=(t==null?void 0:t.full_name)||"",document.getElementById("smTarget").value=(t==null?void 0:t.target)||"",document.getElementById("smUsername").value=(t==null?void 0:t.username)||"",document.getElementById("smPass").value=(t==null?void 0:t.password_hash)||"",document.getElementById("smWeekStart").value=(t==null?void 0:t.week_start)||0,document.getElementById("smProg").value=(t==null?void 0:t.progress)||0,document.getElementById("smProgVal").textContent=((t==null?void 0:t.progress)||0)+"%",document.querySelectorAll(".color-opt").forEach(a=>a.classList.toggle("sel",a.dataset.c===((t==null?void 0:t.color)||"#f0a500")));let n=document.getElementById("smRoleField");n||(n=document.createElement("div"),n.id="smRoleField",n.className="field",n.innerHTML='<label>Rol</label><select id="smRole" style="width:100%;background:var(--surface2);border:1.5px solid var(--border);border-radius:9px;padding:10px 13px;font-size:14px;font-family:inherit;color:var(--text);outline:none"><option value="student">Öğrenci</option><option value="coach">Koç</option><option value="developer">Developer</option></select>',document.getElementById("smName").closest(".modal").insertBefore(n,document.getElementById("smName").parentElement)),document.getElementById("smRole").value=(t==null?void 0:t.role)||"student",document.querySelector("#studentModal .btn-accent").setAttribute("onclick","saveStudentDev()"),N("studentModal")}async function so(e,t){if(await J(`"${t}" kullanıcısını kalıcı olarak silmek istediğinizden emin misiniz?

Bu işlem geri alınamaz.`)){B(!0);try{const{data:{session:n}}=await f.auth.getSession(),a=await fetch("/api/delete-user",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${(n==null?void 0:n.access_token)||""}`},body:JSON.stringify({targetUserId:e})}),i=await a.json();if(!a.ok)throw new Error(i.error||"Sunucu hatası");b(`🗑 ${t} silindi`),We()}catch(n){b("Hata: "+n.message)}finally{B(!1)}}}function ro(e,t,n,a){let i=document.getElementById("planMgmtModal");i||(i=document.createElement("div"),i.id="planMgmtModal",i.className="modal-bg",i.innerHTML=`<div class="modal" style="max-width:400px">
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
    </div>`,document.body.appendChild(i),i.addEventListener("click",o=>{o.target===i&&i.classList.remove("open")}),document.getElementById("planStatus").addEventListener("change",function(){document.getElementById("trialEndField").style.display=this.value==="trial"?"":"none"})),document.getElementById("planModalTitle").textContent=`Plan Yönet — ${t}`,document.getElementById("planUserId").value=e,document.getElementById("planStatus").value=n||"trial",document.getElementById("trialEndField").style.display=n==="trial"||!n?"":"none",a?document.getElementById("planTrialEnd").value=a.split("T")[0]:document.getElementById("planTrialEnd").value="",N("planMgmtModal")}async function lo(){const e=document.getElementById("planUserId").value,t=document.getElementById("planStatus").value,n=document.getElementById("planTrialEnd").value,a={plan:t};t==="trial"&&n?a.trial_ends_at=n:t!=="trial"&&(a.trial_ends_at=null),B(!0);const{error:i}=await f.from("users").update(a).eq("id",e);if(B(!1),i)return b("Hata: "+i.message);b(`Plan güncellendi: ${{trial:"Deneme",active:"Aktif",paused:"Duraklatıldı",cancelled:"İptal"}[t]||t} ✓`),K("planMgmtModal"),We()}let Ye=[];async function Ve(){const e=document.getElementById("view-dev-resources"),{data:t}=await f.from("resources").select("*").order("resource_type,exam_type,subject,name");Ye=t||[];const n=Ye.filter(i=>i.resource_type!=="playlist"),a=Ye.filter(i=>i.resource_type==="playlist");e.innerHTML=`
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
      <div class="stat-card"><div class="stat-label">Toplam Kaynak</div><div class="stat-val">${Ye.length}</div></div>
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
                <div style="font-size:13px;font-weight:700;margin-bottom:2px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${u(i.name)}</div>
                <div style="font-size:11px;color:var(--text-dim)">${u(i.publisher)} · ${i.exam_type} ${i.subject} · ${(i.tests||[]).length} video</div>
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
                <div style="font-size:13px;font-weight:700;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${u(i.name)}</div>
                <div style="font-size:11px;color:var(--text-dim);margin-top:2px">${u(i.publisher)} · ${(i.tests||[]).length} test</div>
              </div>
              <div style="display:flex;gap:4px;flex-shrink:0">
                <span style="font-size:10px;padding:2px 7px;border-radius:99px;background:${i.active?"var(--green-dim)":"var(--red-dim)"};color:${i.active?"var(--green)":"var(--red)"}">${i.active?"Aktif":"Pasif"}</span>
                <button class="btn btn-ghost btn-xs" onclick="openResourceModal('${i.id}','book')">✏️</button>
                <button class="btn btn-danger btn-xs" onclick="devDeleteResource('${i.id}')" style="opacity:.5" onmouseover="this.style.opacity=1" onmouseout="this.style.opacity=.5">🗑</button>
              </div>
            </div>
          </div>`).join("")}
      </div>
    </div>`}function co(){let e=document.getElementById("playlistModal");e||(e=document.createElement("div"),e.id="playlistModal",e.className="modal-bg",document.body.appendChild(e),e.addEventListener("click",t=>{t.target===e&&e.classList.remove("open")})),e.innerHTML=`<div class="modal modal-lg">
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
  </div>`,N("playlistModal")}async function po(){const e=document.getElementById("ytPlaylistUrl").value.trim(),t=document.getElementById("ytStatus");if(!e)return t.innerHTML='<span style="color:var(--red)">⚠️ Playlist URL giriniz</span>';const n=e.match(/[?&]list=([^&]+)/);if(!n)return t.innerHTML='<span style="color:var(--red)">⚠️ Geçersiz URL — "list=..." parametresi bulunamadı</span>';const a=n[1];t.innerHTML="⏳ Yükleniyor...";try{let i=[],o="";do{let s=`/api/youtube?playlistId=${a}`;o&&(s+=`&pageToken=${o}`);const r=await fetch(s);if(!r.ok){const c=await r.json();throw new Error(c.error||"Oynatma listesi yüklenemedi.")}const d=await r.json();d.items&&(i=i.concat(d.items)),o=d.nextPageToken||""}while(o&&i.length<200);document.getElementById("plVideos").value=i.map(s=>`${s.title} | ${s.url} | ${s.duration}`).join(`
`),t.innerHTML=`<span style="color:var(--green)">✓ ${i.length} video yüklendi!</span>`}catch(i){t.innerHTML=`<span style="color:var(--red)">⚠️ Hata: ${i.message}</span>`}}async function mo(){const e=document.getElementById("plName").value.trim(),t=document.getElementById("plSubject").value.trim(),n=document.getElementById("plPublisher").value.trim();if(!e||!t||!n)return b("Tüm alanları doldurun!");const a=document.getElementById("plVideos").value.split(`
`).map(r=>r.trim()).filter(Boolean);if(!a.length)return b("En az 1 video girin!");const i=a.map(r=>{const d=r.split("|").map(c=>c.trim());return{label:d[0]||"",url:d[1]||"",topic:"",soru:parseInt(d[2])||0}}).filter(r=>r.label),o={exam_type:document.getElementById("plExam").value,subject:t,publisher:n,name:e,year:new Date().getFullYear(),tests:i,active:!0,resource_type:"playlist"},{error:s}=await f.from("resources").insert(o);if(s)return b("Hata: "+s.message);b(`✓ "${e}" eklendi — ${i.length} video`),K("playlistModal"),Ve()}function uo(e,t="book"){const n=e?Ye.find(s=>s.id===e):null;let a=document.getElementById("resourceModal");a||(a=document.createElement("div"),a.id="resourceModal",a.className="modal-bg",document.body.appendChild(a),a.addEventListener("click",s=>{s.target===a&&a.classList.remove("open")}));const i=((n==null?void 0:n.resource_type)||t)==="playlist";a.innerHTML=`<div class="modal modal-lg">
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
`),N("resourceModal")}async function go(){const e=document.getElementById("rmName").value.trim(),t=document.getElementById("rmSubject").value.trim();if(!e||!t)return b("Ad ve ders zorunlu!");const n=document.getElementById("rmId").value,a=document.getElementById("rmType").value==="playlist",i=document.getElementById("rmTests").value.split(`
`).map(r=>r.trim()).filter(Boolean);let o=[];a?o=i.map(r=>{const d=r.split("|").map(c=>c.trim());return{label:d[0]||"",url:d[1]||"",topic:"",soru:parseInt(d[2])||0}}):o=i.map(r=>{const d=r.split("|").map(c=>c.trim());return{label:d[0]||"",soru:parseInt(d[1])||0}});const s={exam_type:document.getElementById("rmExam").value,subject:t,publisher:document.getElementById("rmPublisher").value.trim(),year:new Date().getFullYear(),name:e,tests:o,active:document.getElementById("rmActive").value==="true",resource_type:a?"playlist":"book"};n?(await f.from("resources").update(s).eq("id",n),b("Güncellendi ✓")):(await f.from("resources").insert(s),b("Kaynak eklendi ✓")),K("resourceModal"),Ve()}async function vo(e){await J("Bu kaynağı silmek istediğinizden emin misiniz?")&&(await f.from("resources").delete().eq("id",e),b("Silindi"),Ve())}async function mt(){const e=document.getElementById("view-dev-finance"),[{data:t},{data:n}]=await Promise.all([f.from("subscriptions").select("*,users(full_name,color)").order("created_at",{ascending:!1}),f.from("payments").select("*,users(full_name)").order("payment_date",{ascending:!1}).limit(20)]),a=(n||[]).filter(o=>o.status==="completed").reduce((o,s)=>o+Number(s.amount),0),i=(t||[]).filter(o=>o.status==="active").length;e.innerHTML=`
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
              <div style="font-size:13px;font-weight:700">${u(((s=o.users)==null?void 0:s.full_name)||"?")}</div>
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
              <div style="font-size:12px;font-weight:700">${u(((s=o.users)==null?void 0:s.full_name)||"?")}</div>
              <div style="font-size:11px;color:var(--text-dim)">${o.payment_date} · ${o.method}</div>
            </div>
            <div style="font-size:13px;font-weight:700;color:var(--green)">${Number(o.amount).toLocaleString("tr-TR")} ₺</div>
          </div>`}).join("")||'<div class="empty"><p>Ödeme yok</p></div>'}
      </div>
    </div>`}function yo(){let e=document.getElementById("paymentModal");e||(e=document.createElement("div"),e.id="paymentModal",e.className="modal-bg",e.innerHTML=`<div class="modal"><button class="modal-close" onclick="cm('paymentModal')">×</button>
      <h2>Ödeme Ekle</h2>
      <div class="field"><label>Öğrenci</label><select id="pmStudent">${l.students.map(t=>`<option value="${t.id}">${u(t.name)}</option>`).join("")}</select></div>
      <div class="field-row">
        <div class="field"><label>Tutar (₺)</label><input type="number" id="pmAmount" placeholder="1500"></div>
        <div class="field"><label>Yöntem</label><select id="pmMethod"><option>nakit</option><option>havale</option><option>kart</option><option>iyzico</option></select></div>
      </div>
      <div class="field"><label>Tarih</label><input type="date" id="pmDate" value="${H(new Date)}"></div>
      <div class="field"><label>Açıklama</label><input id="pmDesc" placeholder="Mayıs ayı ücreti"></div>
      <button class="btn btn-accent" style="width:100%;justify-content:center;padding:12px;margin-top:4px" onclick="savePayment()">Kaydet</button>
    </div>`,document.body.appendChild(e),e.addEventListener("click",t=>{t.target===e&&e.classList.remove("open")})),document.getElementById("pmStudent").innerHTML=l.students.map(t=>`<option value="${t.id}">${u(t.name)}</option>`).join(""),N("paymentModal")}async function fo(){const e=parseFloat(document.getElementById("pmAmount").value);if(!e)return b("Tutar girin!");await f.from("payments").insert({student_id:document.getElementById("pmStudent").value,amount:e,method:document.getElementById("pmMethod").value,payment_date:document.getElementById("pmDate").value,description:document.getElementById("pmDesc").value,status:"completed"}),b("Ödeme kaydedildi ✓"),K("paymentModal"),mt()}function xo(){let e=document.getElementById("subModal");e||(e=document.createElement("div"),e.id="subModal",e.className="modal-bg",e.innerHTML=`<div class="modal"><button class="modal-close" onclick="cm('subModal')">×</button>
      <h2>Abonelik Ekle</h2>
      <div class="field"><label>Öğrenci</label><select id="sbStudent"></select></div>
      <div class="field-row">
        <div class="field"><label>Plan</label><select id="sbPlan"><option value="monthly">Aylık</option><option value="quarterly">3 Aylık</option><option value="yearly">Yıllık</option></select></div>
        <div class="field"><label>Aylık Tutar (₺)</label><input type="number" id="sbAmount" placeholder="1500"></div>
      </div>
      <div class="field-row">
        <div class="field"><label>Başlangıç</label><input type="date" id="sbStart" value="${H(new Date)}"></div>
        <div class="field"><label>Bitiş (isteğe bağlı)</label><input type="date" id="sbEnd"></div>
      </div>
      <div class="field"><label>Durum</label><select id="sbStatus"><option value="active">Aktif</option><option value="trial">Deneme</option><option value="paused">Durduruldu</option><option value="cancelled">İptal</option></select></div>
      <div class="field"><label>Not</label><input id="sbNotes" placeholder="..."></div>
      <button class="btn btn-accent" style="width:100%;justify-content:center;padding:12px;margin-top:4px" onclick="saveSub()">Kaydet</button>
    </div>`,document.body.appendChild(e),e.addEventListener("click",t=>{t.target===e&&e.classList.remove("open")})),document.getElementById("sbStudent").innerHTML=l.students.map(t=>`<option value="${t.id}">${u(t.name)}</option>`).join(""),N("subModal")}async function bo(){const e=parseFloat(document.getElementById("sbAmount").value);if(!e)return b("Tutar girin!");await f.from("subscriptions").insert({student_id:document.getElementById("sbStudent").value,plan:document.getElementById("sbPlan").value,amount:e,start_date:document.getElementById("sbStart").value,end_date:document.getElementById("sbEnd").value||null,status:document.getElementById("sbStatus").value,notes:document.getElementById("sbNotes").value}),b("Abonelik eklendi ✓"),K("subModal"),mt()}async function Ze(){const e=document.getElementById("view-dev-announce"),{data:t}=await f.from("announcements").select("*").order("created_at",{ascending:!1}),n={info:"var(--blue)",warning:"var(--accent)",success:"var(--green)",urgent:"var(--red)"};e.innerHTML=`
    <div class="sh"><h2>📣 Duyuru Yönetimi</h2>
      <button class="btn btn-accent" onclick="openAnnounceModal()">+ Duyuru Ekle</button>
    </div>
    <div style="font-size:13px;color:var(--text-mid);margin-bottom:16px">Aktif duyurular tüm kullanıcıların ana ekranında gösterilir.</div>
    ${(t||[]).length===0?'<div class="empty"><p>Henüz duyuru yok</p></div>':""}
    ${(t||[]).map(a=>`
      <div class="card" style="padding:16px 20px;margin-bottom:10px;border-left:3px solid ${n[a.type]||"var(--accent)"}">
        <div style="display:flex;justify-content:space-between;align-items:flex-start;gap:12px">
          <div style="flex:1">
            <div style="font-family:'Inter',sans-serif;font-size:15px;font-weight:700;margin-bottom:4px">${u(a.title)}</div>
            <div style="font-size:13px;color:var(--text-mid);margin-bottom:8px">${u(a.body)}</div>
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
      </div>`).join("")}`}function ho(){let e=document.getElementById("announceModal");e||(e=document.createElement("div"),e.id="announceModal",e.className="modal-bg",e.innerHTML=`<div class="modal"><button class="modal-close" onclick="cm('announceModal')">×</button>
      <h2>Yeni Duyuru</h2>
      <div class="field"><label>Başlık</label><input id="anTitle" placeholder="Önemli Güncelleme"></div>
      <div class="field"><label>İçerik</label><textarea id="anBody" placeholder="Duyuru metni..."></textarea></div>
      <div class="field-row">
        <div class="field"><label>Tür</label><select id="anType"><option value="info">Bilgi</option><option value="warning">Uyarı</option><option value="success">Başarı</option><option value="urgent">Acil</option></select></div>
        <div class="field"><label>Hedef</label><select id="anTarget"><option value="all">Herkes</option><option value="students">Öğrenciler</option><option value="coaches">Koçlar</option></select></div>
      </div>
      <button class="btn btn-accent" style="width:100%;justify-content:center;padding:12px;margin-top:4px" onclick="saveAnnounce()">Yayınla</button>
    </div>`,document.body.appendChild(e),e.addEventListener("click",t=>{t.target===e&&e.classList.remove("open")})),N("announceModal")}async function ko(){const e=document.getElementById("anTitle").value.trim(),t=document.getElementById("anBody").value.trim();if(!e||!t)return b("Başlık ve içerik zorunlu!");await f.from("announcements").insert({title:e,body:t,type:document.getElementById("anType").value,target:document.getElementById("anTarget").value,active:!0}),b("Duyuru yayınlandı ✓"),K("announceModal"),Ze()}async function wo(e,t){await f.from("announcements").update({active:t}).eq("id",e),Ze()}async function $o(e){await J("Bu duyuruyu silmek istediğinizden emin misiniz?")&&(await f.from("announcements").delete().eq("id",e),b("Silindi"),Ze())}let Ce=null,rt=null,oe=null,bt=null,De=[],re=[],fe="welcome";async function Re(){const e=document.getElementById("view-dev-tickets");if(!e)return;const{data:t,error:n}=await f.from("tickets").select("*,users!tickets_user_id_fkey(full_name,role)").order("updated_at",{ascending:!1});De=t||[],!oe&&De.length>0&&(oe=De[0].id),e.innerHTML=`
    <div class="sh" style="margin-bottom:12px">
      <h2>🎫 Destek & Geri Bildirim Masası</h2>
    </div>

    <div style="display: grid; grid-template-columns: 280px 1fr; gap: 16px; height: 600px; max-height: calc(100vh - 180px); margin-top: 10px">
      <!-- Left Pane: Chats List -->
      <div style="overflow-y: auto; background: var(--surface2); border: 1px solid var(--border); border-radius: 12px; display: flex; flex-direction: column; gap: 8px; padding: 12px">
        <div style="font-size: 11px; font-weight:800; color:var(--text-dim); text-transform:uppercase; letter-spacing:.5px; margin-bottom:4px">Konuşmalar</div>
        ${De.length===0?`
          <div style="text-align:center; padding:40px 10px; color:var(--text-dim); font-size:12px">Kayıtlı destek talebi yok.</div>
        `:De.map(a=>{var y,S,I;const i=a.id===oe,o=((y=a.users)==null?void 0:y.full_name)||"Kullanıcı",s=((S=a.users)==null?void 0:S.role)==="coach"?"KOÇ":((I=a.users)==null?void 0:I.role)==="parent"?"VELİ":"ÖĞRENCİ";let r="Mesaj yok";try{const v=JSON.parse(a.body);Array.isArray(v)&&v.length>0?r=v[v.length-1].text:r=a.body}catch{r=a.body}const d=r.length>28?r.slice(0,26)+"...":r,c=a.status==="open"?'<span style="font-size:9px; background:#ef444422; color:#ef4444; padding:2px 6px; border-radius:99px; font-weight:700">Yeni</span>':a.status==="resolved"?'<span style="font-size:9px; background:#10b98122; color:#10b981; padding:2px 6px; border-radius:99px; font-weight:700">Cevaplandı</span>':'<span style="font-size:9px; background:var(--border2); color:var(--text-dim); padding:2px 6px; border-radius:99px; font-weight:700">Kapatıldı</span>',p=i?"var(--accent-dim)":"var(--surface)",m=i?"1.5px solid var(--accent)":"1px solid var(--border)",g=i?"10px 11px":"10px 12px";return`
            <div onclick="selectDevTicket('${a.id}')" style="background:${p}; border:${m}; border-radius:10px; padding:${g}; cursor:pointer; display:flex; flex-direction:column; gap:4px; transition:all .15s">
              <div style="display:flex; justify-content:space-between; align-items:center">
                <span style="font-weight:700; font-size:12px; color:var(--text); overflow:hidden; text-overflow:ellipsis; white-space:nowrap; max-width:140px">${u(o)}</span>
                <span style="font-size:9px; font-weight:800; color:var(--text-dim)">${s}</span>
              </div>
              <div style="font-size:11px; color:var(--text-mid); overflow:hidden; text-overflow:ellipsis; white-space:nowrap">${u(d)}</div>
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
  `,So(),bt&&clearInterval(bt),bt=setInterval(Eo,4e3)}function To(e){oe=e,Re()}async function Eo(){if(!oe||!document.getElementById("devChatArea"))return;const{data:t,error:n}=await f.from("tickets").select("*,users!tickets_user_id_fkey(full_name,role)").eq("id",oe).single();if(n||!t)return;let a=[];try{a=JSON.parse(t.body),Array.isArray(a)||(a=[{sender:"user",text:t.body,time:t.created_at}])}catch{a=[{sender:"user",text:t.body,time:t.created_at}]}const i=document.getElementById("devChatMessages");if(i){const o=i.scrollTop,s=i.scrollHeight-i.clientHeight-o<40;i.innerHTML=a.map(r=>{const d=r.sender==="emin",c=d?"Kurucu / Destek":r.sender==="ai"?"Yapay Zeka":r.name||"Kullanıcı",p=d?"var(--blue)":r.sender==="ai"?"var(--surface2)":"var(--accent)",m=d?"#fff":r.sender==="ai"?"var(--text)":"var(--on-accent)",g=d?"flex-end":"flex-start",y=d?"14px 14px 4px 14px":"14px 14px 14px 4px",S=new Date(r.time).toLocaleTimeString("tr-TR",{hour:"2-digit",minute:"2-digit"});return`
        <div style="align-self:${g}; max-width:80%; display:flex; flex-direction:column; align-items:${d?"flex-end":"flex-start"}">
          <div style="font-size:10px; color:var(--text-dim); margin-bottom:3px; font-weight:600">${c}</div>
          <div style="padding:10px 14px; border-radius:${y}; background:${p}; color:${m}; font-size:13px; line-height:1.5; word-wrap:break-word; white-space:pre-wrap">${u(r.text)}</div>
          <div style="font-size:9px; color:var(--text-dim); margin-top:4px">${S}</div>
        </div>
      `}).join(""),s&&(i.scrollTop=i.scrollHeight)}}function So(){var s,r,d;const e=document.getElementById("devChatArea");if(!e)return;const t=De.find(c=>c.id===oe);if(!t){e.innerHTML=`
      <div style="flex:1; display:flex; flex-direction:column; align-items:center; justify-content:center; color:var(--text-dim); padding:20px; text-align:center">
        <div style="font-size:48px; margin-bottom:12px">🎫</div>
        <div style="font-weight:700">Aktif Sohbet Seçilmedi</div>
        <div style="font-size:12px; margin-top:4px">Soldaki listeden bir destek sohbeti seçerek yanıtlayabilirsiniz.</div>
      </div>
    `;return}const n=((s=t.users)==null?void 0:s.full_name)||"Kullanıcı",a=((r=t.users)==null?void 0:r.role)==="coach"?"KOÇ":((d=t.users)==null?void 0:d.role)==="parent"?"VELİ":"ÖĞRENCİ";let i=[];try{i=JSON.parse(t.body),Array.isArray(i)||(i=[{sender:"user",text:t.body,time:t.created_at}])}catch{i=[{sender:"user",text:t.body,time:t.created_at}]}e.innerHTML=`
    <!-- Active Chat Header -->
    <div style="padding:14px 20px; border-bottom: 1px solid var(--border); display:flex; justify-content:space-between; align-items:center; background:var(--surface2)">
      <div>
        <div style="font-weight:800; font-size:14px; color:var(--text)">${u(n)} <span style="font-size:10px; font-weight:700; color:var(--text-dim); margin-left:6px">${a}</span></div>
        <div style="font-size:11px; color:var(--text-mid); margin-top:2px">Konu: ${u(t.subject)}</div>
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
      ${i.map(c=>{const p=c.sender==="emin",m=p?"Kurucu / Destek":c.sender==="ai"?"Yapay Zeka":c.name||"Kullanıcı",g=p?"var(--blue)":c.sender==="ai"?"var(--surface2)":"var(--accent)",y=p?"#fff":c.sender==="ai"?"var(--text)":"var(--on-accent)",S=p?"flex-end":"flex-start",I=p?"14px 14px 4px 14px":"14px 14px 14px 4px",v=new Date(c.time).toLocaleTimeString("tr-TR",{hour:"2-digit",minute:"2-digit"});return`
          <div style="align-self:${S}; max-width:80%; display:flex; flex-direction:column; align-items:${p?"flex-end":"flex-start"}">
            <div style="font-size:10px; color:var(--text-dim); margin-bottom:3px; font-weight:600">${m}</div>
            <div style="padding:10px 14px; border-radius:${I}; background:${g}; color:${y}; font-size:13px; line-height:1.5; word-wrap:break-word; white-space:pre-wrap">${u(c.text)}</div>
            <div style="font-size:9px; color:var(--text-dim); margin-top:4px">${v}</div>
          </div>
        `}).join("")}
    </div>

    <!-- Footer Reply Input -->
    <div style="padding:12px 16px; border-top:1px solid var(--border); display:flex; gap:8px; background:var(--surface2); align-items:flex-end">
      <textarea id="devReplyInput" placeholder="Sohbete yanıt yazın..." rows="1" style="flex:1; background:var(--surface); border:1px solid var(--border); border-radius:12px; padding:10px 14px; font-size:13px; font-family:inherit; color:var(--text); resize:none; max-height:80px; outline:none" onkeydown="if(event.key==='Enter'&&!event.shiftKey){event.preventDefault();sendDevReply()}"></textarea>
      <button class="btn btn-accent" onclick="sendDevReply()" style="padding:8px 16px; font-size:13px; border-radius:10px; align-self:stretch; justify-content:center">Gönder</button>
    </div>
  `;const o=document.getElementById("devChatMessages");o&&(o.scrollTop=o.scrollHeight)}async function _o(){const e=document.getElementById("devReplyInput"),t=e.value.trim();if(!t||!oe)return;e.value="",B(!0);const{data:n}=await f.from("tickets").select("body").eq("id",oe).single();let a=[];if(n&&n.body)try{a=JSON.parse(n.body)}catch{a=[{sender:"user",text:n.body,time:new Date().toISOString()}]}const i={sender:"emin",text:t,time:new Date().toISOString(),name:"Kurucu / Destek"};a.push(i);const{error:o}=await f.from("tickets").update({body:JSON.stringify(a),reply:t,status:"resolved",updated_at:new Date().toISOString()}).eq("id",oe);if(B(!1),o){b("Hata: "+o.message);return}b("Yanıt gönderildi ✓"),Re()}async function Io(e,t){await f.from("tickets").update({status:t,updated_at:new Date().toISOString()}).eq("id",e),b("Durum güncellendi ✓"),Re()}async function zo(e){await J("Bu talebi silmek istediğinizden emin misiniz?")&&(await f.from("tickets").delete().eq("id",e),b("Silindi"),oe=null,Re())}function Bo(){ut()}async function ut(){let e=document.getElementById("supportChatModal");e||(e=document.createElement("div"),e.id="supportChatModal",e.className="modal-bg",e.style.zIndex="99999999",e.innerHTML=`
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
    `,document.body.appendChild(e),e.addEventListener("click",t=>{var a;const n=(a=document.getElementById("trialExpiredModal"))==null?void 0:a.classList.contains("open");t.target===e&&!n&&Nn()})),N("supportChatModal"),await lt(),Ce&&clearInterval(Ce),Ce=setInterval(lt,4e3)}function Nn(){K("supportChatModal"),Ce&&(clearInterval(Ce),Ce=null)}async function lt(){var o,s;const e=(o=x.dbUser)==null?void 0:o.id;if(!e)return;const t=document.getElementById("supportMessages");if(!t)return;const{data:n,error:a}=await f.from("tickets").select("*").eq("user_id",e).eq("status","open").order("created_at",{ascending:!1}).limit(1);if(a){console.error("Error fetching ticket:",a);return}const i=n&&n[0];if(i){rt=i.id,fe="emin";const r=document.getElementById("supportStatusLabel");r&&(r.textContent="● Kurucu / Destek Ekibi");let d=[];try{d=JSON.parse(i.body),Array.isArray(d)||(d=[{sender:"user",text:i.body,time:i.created_at}])}catch{d=[{sender:"user",text:i.body,time:i.created_at}]}i.reply&&((s=d[d.length-1])==null?void 0:s.text)!==i.reply&&d.push({sender:"emin",text:i.reply,time:i.updated_at}),Oe(d)}else if(fe==="welcome"){const r=document.getElementById("supportStatusLabel");r&&(r.textContent="● Çevrimiçi Asistan"),t.innerHTML=`
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
      `}else if(fe==="ai"){const r=document.getElementById("supportStatusLabel");r&&(r.textContent="● Yapay Zeka"),Oe(re)}}function Oe(e){const t=document.getElementById("supportMessages");if(!t)return;const n=t.scrollTop,a=t.scrollHeight-t.clientHeight-n<40;t.innerHTML=e.map(i=>{const o=i.sender==="user",s=o?"Siz":i.sender==="ai"?"Yapay Zeka Asistanı":"Kurucu / Destek Ekibi",r=o?"var(--accent)":"var(--surface2)",d=o?"none":"1px solid var(--border)",c=o?"var(--on-accent)":"var(--text)",p=o?"flex-end":"flex-start",m=o?"14px 14px 4px 14px":"14px 14px 14px 4px",g=new Date(i.time).toLocaleTimeString("tr-TR",{hour:"2-digit",minute:"2-digit"});return`
      <div style="align-self:${p};max-width:80%;display:flex;flex-direction:column;align-items:${o?"flex-end":"flex-start"}">
        <div style="font-size:10px;color:var(--text-dim);margin-bottom:3px;font-weight:600">${s}</div>
        <div style="padding:10px 14px;border-radius:${m};background:${r};border:${d};color:${c};font-size:13px;line-height:1.5;word-wrap:break-word;white-space:pre-wrap">${u(i.text)}</div>
        <div style="font-size:9px;color:var(--text-dim);margin-top:4px">${g}</div>
      </div>
    `}).join(""),a&&(t.scrollTop=t.scrollHeight)}function Mo(){fe="ai",re=[{sender:"ai",text:"Merhaba! Ben Rostrum Akademi Yapay Zeka Asistanıyım. 🤖 Size nasıl yardımcı olabilirim?",time:new Date().toISOString()}],Oe(re)}function Ao(){fe="emin_start";const e=document.getElementById("supportMessages");e&&(e.innerHTML=`
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
    `)}async function Do(){var c,p;const e=document.getElementById("eminSubject"),t=document.getElementById("eminInitialMessage"),n=e?e.value.trim():"Müşteri Destek Sohbeti",a=t?t.value.trim():"";if(!a)return b("Mesaj boş olamaz!");const i=(c=x.dbUser)==null?void 0:c.id,o=((p=x.dbUser)==null?void 0:p.full_name)||"Kullanıcı",s={sender:"user",text:a,time:new Date().toISOString(),name:o};B(!0);const{data:r,error:d}=await f.from("tickets").insert({user_id:i,subject:n,body:JSON.stringify([s]),category:"emin",status:"open"}).select().single();if(B(!1),d){b("Hata: "+d.message);return}rt=r.id,fe="emin",b("Talebiniz destek ekibine iletildi ✓"),await lt()}async function Co(){var n;const e=document.getElementById("supportInput"),t=e.value.trim();if(t){if(e.value="",fe==="ai"){const a={sender:"user",text:t,time:new Date().toISOString()};re.push(a),Oe(re);const i=document.getElementById("supportTyping");i&&(i.style.display="flex");try{const o=(window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1","/api/ai-chat"),s=re.slice(-10).map(c=>({role:c.sender==="user"?"user":"assistant",content:c.text})),r=await fetch(o,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({messages:s,context:{},userRole:"parent"})});let d="";r.ok?d=(await r.json()).reply:d=await ze(t,{},x.role||"coach"),re.push({sender:"ai",text:d,time:new Date().toISOString()})}catch{try{const s=await ze(t,{},x.role||"coach");re.push({sender:"ai",text:s,time:new Date().toISOString()})}catch{re.push({sender:"ai",text:"Üzgünüm, şu anda yanıt veremiyorum. Lütfen daha sonra tekrar deneyin veya doğrudan destek ekibimize mesaj gönderin.",time:new Date().toISOString()})}}finally{i&&(i.style.display="none"),Oe(re)}}else if(fe==="emin"){const a=((n=x.dbUser)==null?void 0:n.full_name)||"Kullanıcı",i={sender:"user",text:t,time:new Date().toISOString(),name:a};B(!0);const{data:o}=await f.from("tickets").select("body").eq("id",rt).single();let s=[];if(o&&o.body)try{s=JSON.parse(o.body)}catch{s=[{sender:"user",text:o.body,time:new Date().toISOString(),name:a}]}s.push(i);const{error:r}=await f.from("tickets").update({body:JSON.stringify(s),status:"open",updated_at:new Date().toISOString()}).eq("id",rt);if(B(!1),r){b("Gönderim hatası: "+r.message);return}await lt()}}}async function Kn(){const{data:e}=await f.from("announcements").select("*").eq("active",!0),t=x.role,n=(e||[]).filter(o=>o.target==="all"||o.target==="students"&&t==="student"||o.target==="coaches"&&t==="coach");if(!n.length)return;const a={info:"var(--blue)",warning:"var(--accent)",success:"var(--green)",urgent:"var(--red)"},i=document.createElement("div");i.style.cssText="position:fixed;top:64px;right:16px;z-index:400;display:flex;flex-direction:column;gap:8px;max-width:340px",i.id="announceBanner",n.slice(0,3).forEach(o=>{const s=document.createElement("div");s.style.cssText=`background:var(--surface);border:1px solid var(--border);border-left:3px solid ${a[o.type]||"var(--accent)"};border-radius:10px;padding:12px 14px;box-shadow:var(--shadow);animation:fadeUp .3s ease`,s.innerHTML=`<div style="display:flex;justify-content:space-between;align-items:flex-start;gap:8px">
      <div><div style="font-size:13px;font-weight:700;margin-bottom:3px">${u(o.title)}</div><div style="font-size:12px;color:var(--text-mid)">${u(o.body)}</div></div>
      <button onclick="this.closest('div[style]').remove()" style="background:none;border:none;cursor:pointer;color:var(--text-dim);font-size:16px;flex-shrink:0">×</button>
    </div>`,i.appendChild(s)}),document.body.appendChild(i),setTimeout(()=>i.remove(),8e3)}(()=>{const e=document.createElement("style");e.textContent=".role-dev{background:rgba(192,132,252,.15);color:#c084fc;}",document.head.appendChild(e)})();function On(){let e=document.getElementById("onboardingModal");e||(e=document.createElement("div"),e.id="onboardingModal",e.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,.85);z-index:9000;display:flex;align-items:center;justify-content:center;padding:20px;backdrop-filter:blur(8px)",document.body.appendChild(e)),Ot(0,e)}const Et=[{icon:"👋",title:"Rostrum Akademi'ye Hoş Geldiniz! 🎓",body:`Sizinle birlikte büyümek ve platformumuzu geliştirmek bizim en büyük tutkumuz.<br><br>
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
  </div>`}async function Lo(e,t){var i;const n=document.getElementById("onboardingModal");if(!n)return;if((i=Et[e])!=null&&i.isCompletion){B(!0);try{const{error:o}=await f.from("workspaces").update({onboarding_done:!0}).eq("coach_id",x.coachId);if(o)throw o;l.workspace&&(l.workspace.onboarding_done=!0),n.remove(),Q("home"),b("🎉 Hoş geldiniz! Platformunuz hazır.")}catch(o){b("Hata: "+o.message)}finally{B(!1)}return}const a=e+1;Ot(a,n)}let ht=null;window.addEventListener("beforeinstallprompt",e=>{e.preventDefault(),ht=e;const t=document.createElement("button");t.id="pwaInstallBtn",t.className="btn btn-ghost btn-sm",t.innerHTML="📲 Yükle",t.style.cssText="font-size:11px;padding:5px 10px",t.onclick=async()=>{ht.prompt();const{outcome:n}=await ht.userChoice;n==="accepted"&&(t.remove(),b("Uygulama yüklendi ✓"))},document.querySelector(".tbar-right").insertBefore(t,document.querySelector(".user-pill"))});async function Fn(){const e=l.students.find(T=>T.id===x.studentId);if(!e)return;const t=document.getElementById("view-sprofil");if(!t)return;const{data:n,error:a}=await f.from("student_profiles").select("*").eq("id",x.studentId).maybeSingle();a&&console.error("Öğrenci profili yüklenirken hata:",a);const i=(n==null?void 0:n.bio)||"",o=(n==null?void 0:n.school)||"",s=(n==null?void 0:n.grade)||"",r=(n==null?void 0:n.target_university)||"",d=(n==null?void 0:n.target_department)||"",c=(n==null?void 0:n.struggling_subjects)||"",p=(n==null?void 0:n.daily_capacity)||"",m=l.exams.filter(T=>T.studentId===e.id).sort((T,M)=>T.date.localeCompare(M.date)),g=m[m.length-1],y=g?(EXAM_DEFS[g.type]||[]).reduce((M,E)=>{var D;return M+Number(((D=g.nets)==null?void 0:D[E])||0)},0).toFixed(1):"—",S=V(0,e.weekStart??0);let I=0,v=0;for(let T=0;T<7;T++){const M=l.tasks[`${e.id}_${H(G(S,T))}`]||[];I+=M.length,v+=M.filter(E=>E.done).length}const w=I>0?Math.round(v/I*100):0;let k=0;Object.keys(l.tasks).filter(T=>T.startsWith(e.id+"_")).forEach(T=>{k+=l.tasks[T].filter(M=>M.done).length});let _="";if(m.length>0){const T=m.slice(-6),M=Math.max(...T.map(E=>(EXAM_DEFS[E.type]||[]).reduce((C,j)=>{var $;return C+Number((($=E.nets)==null?void 0:$[j])||0)},0)),1);_=`
      <div class="card cp" style="margin-bottom:16px">
        <div class="portal-sec-title">📈 Net Gelişim Grafiği</div>
        <div style="display:flex;align-items:flex-end;gap:6px;height:90px;margin-top:12px">
          ${T.map(E=>{const C=(EXAM_DEFS[E.type]||[]).reduce((Y,U)=>{var P;return Y+Number(((P=E.nets)==null?void 0:P[U])||0)},0),j=Math.max(Math.round(C/M*100),4),$=T[T.indexOf(E)-1],A=$?(EXAM_DEFS[$.type]||[]).reduce((Y,U)=>{var P;return Y+Number(((P=$.nets)==null?void 0:P[U])||0)},0):C,L=C>A?"↑":C<A?"↓":"",R=C>A?"var(--green)":C<A?"var(--red)":"var(--text-dim)";return`<div style="flex:1;display:flex;flex-direction:column;align-items:center;gap:3px">
              <div style="font-size:10px;font-weight:700;color:var(--text-mid)">${C.toFixed(0)}</div>
              <div style="font-size:9px;color:${R};font-weight:800">${L}</div>
              <div style="width:100%;background:${e.color};border-radius:4px 4px 0 0;height:${j}%;min-height:4px"></div>
              <div style="font-size:9px;color:var(--text-dim);text-align:center;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;width:100%">${u(E.name.replace("Deneme","").replace("TYT","").replace("AYT","").trim())}</div>
            </div>`}).join("")}
        </div>
      </div>`}let h="";if(m.length>0){const T=g.type,E=(EXAM_DEFS[T]||[]).map(D=>{var A;const C=m.filter(L=>L.type===T).map(L=>{var R;return Number(((R=L.nets)==null?void 0:R[D])||0)}),j=C.length?C.reduce((L,R)=>L+R,0)/C.length:0,$=Number(((A=g.nets)==null?void 0:A[D])||0);return{f:D,avg:j.toFixed(1),last:$,color:_t($)}});h=`
      <div class="card cp" style="margin-bottom:16px">
        <div class="portal-sec-title">📊 Ders Bazında Performans (${T})</div>
        <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(120px,1fr));gap:8px;margin-top:10px">
          ${E.map(D=>`
            <div style="background:var(--surface2);border:1px solid var(--border);border-radius:9px;padding:10px;text-align:center">
              <div style="font-size:10px;color:var(--text-dim);font-weight:700;margin-bottom:4px;text-transform:uppercase">${D.f}</div>
              <div style="font-family:'Inter',sans-serif;font-size:22px;font-weight:800;color:var(--${D.color==="good"?"green":D.color==="mid"?"accent":"red"})">${D.last}</div>
              <div style="font-size:10px;color:var(--text-dim);margin-top:2px">ort: ${D.avg}</div>
            </div>`).join("")}
        </div>
      </div>`}const z=l.appointments.filter(T=>T.studentId===e.id&&T.date>=ge()).sort((T,M)=>T.date.localeCompare(M.date)).slice(0,3);t.innerHTML=`
    <!-- HERO -->
    <div class="portal-hero" style="margin-bottom:16px">
      <div class="portal-avatar" style="background:${e.color};width:72px;height:72px;border-radius:18px;font-size:28px">${e.name[0]}</div>
      <div class="portal-info" style="flex:1">
        <h1>${u(e.name)}</h1>
        <p>${u(e.target)}</p>
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
        <div style="font-size:11px;color:var(--text-mid);margin-top:4px">%${w} tamamlandı</div>
      </div>
      <div class="stat-card">
        <div class="stat-label">Son Deneme Neti</div>
        <div class="stat-val" style="color:var(--accent)">${y}</div>
        <div style="font-size:11px;color:var(--text-mid);margin-top:4px">${g?u(g.name):"Deneme yok"}</div>
      </div>
      <div class="stat-card">
        <div class="stat-label">Toplam Tamamlanan</div>
        <div class="stat-val">${k}</div>
        <div style="font-size:11px;color:var(--text-mid);margin-top:4px">görev</div>
      </div>
    </div>

    ${_}
    ${h}

    <!-- YAKLAŞAN RANDEVULAR -->
    <div class="card cp" style="margin-bottom:16px">
      <div class="portal-sec-title">📅 Yaklaşan Randevularım</div>
      ${z.length?z.map(T=>`
        <div style="background:var(--surface2);border:1px solid var(--border);border-left:3px solid ${e.color};border-radius:9px;padding:12px;margin-top:8px">
          <div style="font-size:10px;font-weight:700;color:var(--text-dim);text-transform:uppercase;margin-bottom:3px">${new Date(T.date+"T12:00").toLocaleDateString("tr-TR",{weekday:"long",day:"numeric",month:"long"})}</div>
          <div style="font-family:'Inter',sans-serif;font-size:17px;font-weight:700">${T.time} <span style="font-size:13px;color:var(--text-mid)">· ${T.duration} dk</span></div>
          <div style="font-size:12px;color:var(--text-mid);margin-top:2px">${u(T.type)}</div>
        </div>`).join(""):'<div style="font-size:13px;color:var(--text-dim);margin-top:8px">Yaklaşan randevu yok</div>'}
    </div>

    <!-- DETAYLI PROFIL BILGILERI -->
    <div class="card cp" style="margin-bottom:16px">
      <div class="portal-sec-title">📝 Detaylı Profil Bilgilerim</div>
      
      <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px; margin-top:12px; margin-bottom:12px;">
        <div>
          <label style="display:block; font-size:11px; font-weight:700; color:var(--text-mid); margin-bottom:4px;">Okul</label>
          <input type="text" id="spSchool" value="${u(o)}" placeholder="Okulunuz" style="width:100%; background:var(--surface2); border:1.5px solid var(--border); border-radius:9px; padding:10px 13px; font-size:14px; color:var(--text); outline:none;">
        </div>
        <div>
          <label style="display:block; font-size:11px; font-weight:700; color:var(--text-mid); margin-bottom:4px;">Sınıf / Seviye</label>
          <input type="text" id="spGrade" value="${u(s)}" placeholder="Örn: 12. Sınıf, Mezun" style="width:100%; background:var(--surface2); border:1.5px solid var(--border); border-radius:9px; padding:10px 13px; font-size:14px; color:var(--text); outline:none;">
        </div>
      </div>

      <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px; margin-bottom:12px;">
        <div>
          <label style="display:block; font-size:11px; font-weight:700; color:var(--text-mid); margin-bottom:4px;">Hedef Üniversite</label>
          <input type="text" id="spTargetUni" value="${u(r)}" placeholder="Örn: Boğaziçi Üniversitesi" style="width:100%; background:var(--surface2); border:1.5px solid var(--border); border-radius:9px; padding:10px 13px; font-size:14px; color:var(--text); outline:none;">
        </div>
        <div>
          <label style="display:block; font-size:11px; font-weight:700; color:var(--text-mid); margin-bottom:4px;">Hedef Bölüm</label>
          <input type="text" id="spTargetDept" value="${u(d)}" placeholder="Örn: Bilgisayar Mühendisliği" style="width:100%; background:var(--surface2); border:1.5px solid var(--border); border-radius:9px; padding:10px 13px; font-size:14px; color:var(--text); outline:none;">
        </div>
      </div>

      <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px; margin-bottom:12px;">
        <div>
          <label style="display:block; font-size:11px; font-weight:700; color:var(--text-mid); margin-bottom:4px;">Zorlandığım Dersler</label>
          <input type="text" id="spStruggling" value="${u(c)}" placeholder="Örn: Fizik, Geometri" style="width:100%; background:var(--surface2); border:1.5px solid var(--border); border-radius:9px; padding:10px 13px; font-size:14px; color:var(--text); outline:none;">
        </div>
        <div>
          <label style="display:block; font-size:11px; font-weight:700; color:var(--text-mid); margin-bottom:4px;">Günlük Çalışma Kapasitesi (Saat)</label>
          <input type="number" id="spCapacity" value="${u(p)}" placeholder="Örn: 6" style="width:100%; background:var(--surface2); border:1.5px solid var(--border); border-radius:9px; padding:10px 13px; font-size:14px; color:var(--text); outline:none;">
        </div>
      </div>

      <div style="margin-bottom:12px;">
        <label style="display:block; font-size:11px; font-weight:700; color:var(--text-mid); margin-bottom:4px;">Biyografi / Kendinden Bahset</label>
        <textarea id="spBio" style="width:100%; min-height:80px; background:var(--surface2); border:1.5px solid var(--border); border-radius:9px; padding:10px 13px; font-size:14px; color:var(--text); outline:none; resize:vertical;">${u(i)}</textarea>
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
    </div>`}async function jo(){const e=x.dbUser.id,t=document.getElementById("spBio").value.trim(),n=document.getElementById("spSchool").value.trim(),a=document.getElementById("spGrade").value.trim(),i=document.getElementById("spTargetUni").value.trim(),o=document.getElementById("spTargetDept").value.trim(),s=document.getElementById("spStruggling").value.trim(),r=parseInt(document.getElementById("spCapacity").value)||null,d={id:e,bio:t,school:n,grade:a,target_university:i,target_department:o,struggling_subjects:s,daily_capacity:r,updated_at:new Date().toISOString()},{error:c}=await f.from("student_profiles").upsert(d);b(c?"Profil kaydedilemedi: "+c.message:"Profil başarıyla güncellendi ✓")}async function Po(){const e=document.getElementById("newPass1").value,t=document.getElementById("newPass2").value;if(!e)return b("Şifre girin!");if(e!==t)return b("Şifreler uyuşmuyor!");if(e.length<4)return b("En az 4 karakter olmalı");const{error:n}=await f.from("users").update({password_hash:e}).eq("id",x.studentId);if(n)return b("Hata: "+n.message);b("Şifre güncellendi ✓"),document.getElementById("newPass1").value="",document.getElementById("newPass2").value=""}async function Gn(){var y;const e=document.getElementById("view-coach-profile");if(!e)return;e.innerHTML='<div class="loading">Profil bilgileri yükleniyor...</div>';const t=x.dbUser.id;let n=null,a=null;const i=await f.from("coach_profiles").select("*").eq("id",t).maybeSingle();if(n=i.data,a=i.error,a){const S=localStorage.getItem(`coach_profile_${t}`);if(S)try{n=JSON.parse(S),a=null}catch{}if(a){e.innerHTML=`<div style="padding:20px;color:var(--red)">Profil yüklenirken hata oluştu: ${u(a.message)}</div>`;return}}else if(!n){const S=localStorage.getItem(`coach_profile_${t}`);if(S)try{n=JSON.parse(S)}catch{}}const o=(n==null?void 0:n.bio)||"",s=(n==null?void 0:n.subjects)||"",r=(n==null?void 0:n.education)||"",d=(n==null?void 0:n.experience)||"",c=(n==null?void 0:n.photo_url)||"",p=(n==null?void 0:n.instagram)||"",m=(n==null?void 0:n.linkedin)||"",g=window.location.origin+window.location.pathname.replace("app.html","koc_bul.html")+`?coach=${t}`;e.innerHTML=`
    <div style="max-width:900px;margin:0 auto">
    <div style="margin-bottom: 20px;">
      <h2 style="font-family:'Inter',sans-serif; margin-bottom: 6px;">👤 Koç Profilim</h2>
      <p style="font-size: 13px; color: var(--text-mid); margin-bottom: 15px;">
        "Koç Bul" sayfasında görünecek bilgilerinizi buradan düzenleyebilirsiniz.
      </p>
      
      <div style="margin-bottom: 16px; background: var(--surface2); border: 1px dashed var(--border); padding: 12px; border-radius: 9px;">
        <label style="display:block; font-size:11px; font-weight:700; color:var(--text-mid); margin-bottom:4px;">Kamuya Açık Profil Linkiniz</label>
        <div style="display:flex; gap:8px;">
          <input type="text" readonly value="${g}" id="coachBulLink" style="flex:1; background:var(--surface3); border:1px solid var(--border); border-radius:9px; padding:10px 13px; font-size:13px; color:var(--text-mid); outline:none;">
          <button class="btn btn-ghost" onclick="navigator.clipboard.writeText(document.getElementById('coachBulLink').value); showToast('Link kopyalandı ✓')">🔗 Kopyala</button>
          <a href="${g}" target="_blank" class="btn btn-accent" style="text-decoration:none; display:inline-flex; align-items:center;">👁 Göster</a>
        </div>
      </div>

      <div class="coach-profile-container">
        <!-- Sol Sütun: Form -->
        <div class="card coach-profile-form" style="margin:0; padding:20px;">
          <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px; margin-bottom:12px;">
            <div>
              <label style="display:block; font-size:11px; font-weight:700; color:var(--text-mid); margin-bottom:4px;">Uzmanlık Alanı / Dersler (Virgülle ayırın)</label>
              <input type="text" id="cpSubjects" value="${u(s)}" placeholder="Örn: Matematik, Fizik, Türkçe" oninput="updateProfilePreview()" style="width:100%; background:var(--surface2); border:1.5px solid var(--border); border-radius:9px; padding:10px 13px; font-size:14px; color:var(--text); outline:none;">
            </div>
            <div>
              <label style="display:block; font-size:11px; font-weight:700; color:var(--text-mid); margin-bottom:4px;">Profil Fotoğrafı URL'si</label>
              <input type="text" id="cpPhotoUrl" value="${u(c)}" placeholder="https://..." oninput="updateProfilePreview()" style="width:100%; background:var(--surface2); border:1.5px solid var(--border); border-radius:9px; padding:10px 13px; font-size:14px; color:var(--text); outline:none;">
            </div>
          </div>
          
          <div style="margin-bottom: 12px;">
            <label style="display:block; font-size:11px; font-weight:700; color:var(--text-mid); margin-bottom:4px;">Hakkımda / Biyografi</label>
            <textarea id="cpBio" oninput="updateProfilePreview()" style="width:100%; min-height:100px; background:var(--surface2); border:1.5px solid var(--border); border-radius:9px; padding:10px 13px; font-size:14px; color:var(--text); outline:none; resize:vertical;">${u(o)}</textarea>
          </div>

          <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px; margin-bottom:12px;">
            <div>
              <label style="display:block; font-size:11px; font-weight:700; color:var(--text-mid); margin-bottom:4px;">Eğitim Bilgisi</label>
              <textarea id="cpEducation" oninput="updateProfilePreview()" style="width:100%; min-height:80px; background:var(--surface2); border:1.5px solid var(--border); border-radius:9px; padding:10px 13px; font-size:14px; color:var(--text); outline:none; resize:vertical;">${u(r)}</textarea>
            </div>
            <div>
              <label style="display:block; font-size:11px; font-weight:700; color:var(--text-mid); margin-bottom:4px;">Deneyim / Başarılar</label>
              <textarea id="cpExperience" oninput="updateProfilePreview()" style="width:100%; min-height:80px; background:var(--surface2); border:1.5px solid var(--border); border-radius:9px; padding:10px 13px; font-size:14px; color:var(--text); outline:none; resize:vertical;">${u(d)}</textarea>
            </div>
          </div>

          <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px; margin-bottom:20px;">
            <div>
              <label style="display:block; font-size:11px; font-weight:700; color:var(--text-mid); margin-bottom:4px;">Instagram Kullanıcı Adı (İsteğe bağlı)</label>
              <div style="display:flex; align-items:center; background:var(--surface2); border:1.5px solid var(--border); border-radius:9px; padding:0 13px;">
                <span style="color:var(--text-dim); margin-right:4px;">@</span>
                <input type="text" id="cpInstagram" value="${u(p)}" placeholder="kullaniciadi" oninput="updateProfilePreview()" style="flex:1; background:none; border:none; padding:10px 0; font-size:14px; color:var(--text); outline:none;">
              </div>
            </div>
            <div>
              <label style="display:block; font-size:11px; font-weight:700; color:var(--text-mid); margin-bottom:4px;">LinkedIn Profil URL (İsteğe bağlı)</label>
              <input type="text" id="cpLinkedin" value="${u(m)}" placeholder="https://linkedin.com/in/..." oninput="updateProfilePreview()" style="width:100%; background:var(--surface2); border:1.5px solid var(--border); border-radius:9px; padding:10px 13px; font-size:14px; color:var(--text); outline:none;">
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
                  <div class="preview-name" id="prevName">${u(((y=x.dbUser)==null?void 0:y.full_name)||"Koç")}</div>
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
  `,Ft()}let nt="bio";function Ft(){var g,y,S,I,v,w,k,_;const e=((g=document.getElementById("cpPhotoUrl"))==null?void 0:g.value.trim())||"",t=((y=document.getElementById("cpSubjects"))==null?void 0:y.value.trim())||"",n=((S=document.getElementById("cpBio"))==null?void 0:S.value.trim())||"",a=((I=document.getElementById("cpEducation"))==null?void 0:I.value.trim())||"",i=((v=document.getElementById("cpExperience"))==null?void 0:v.value.trim())||"",o=((w=document.getElementById("cpInstagram"))==null?void 0:w.value.trim())||"",s=((k=document.getElementById("cpLinkedin"))==null?void 0:k.value.trim())||"",r=((_=x.dbUser)==null?void 0:_.full_name)||"Koç",d=document.getElementById("prevAvatar");if(d)if(e)d.style.backgroundImage=`url('${e}')`,d.style.backgroundColor="transparent",d.innerHTML="";else{d.style.backgroundImage="",d.style.backgroundColor="var(--accent-dim)";const h=r.split(" ").map(z=>z[0]).join("").slice(0,2).toUpperCase();d.innerHTML=h||"?"}const c=document.getElementById("prevSocials");if(c){let h="";if(o&&(h+=`<a href="https://instagram.com/${o}" target="_blank" class="preview-social-link" title="Instagram">📸 @${o}</a>`),s){let z="LinkedIn";s.includes("/in/")&&(z="in/"+s.split("/in/")[1].split("/")[0]),h+=`<a href="${s}" target="_blank" class="preview-social-link" title="LinkedIn">💼 ${z}</a>`}c.innerHTML=h}const p=document.getElementById("prevSubjects");if(p)if(t){const h=t.split(",").map(z=>z.trim()).filter(Boolean);p.innerHTML=h.map(z=>`<span class="preview-tag">${u(z)}</span>`).join("")}else p.innerHTML='<span class="preview-tag" style="background:none; border:1px dashed var(--border); color:var(--text-dim)">Ders / Uzmanlık Belirtilmedi</span>';const m=document.getElementById("prevTabContent");if(m){let h="";nt==="bio"?h=n||"Biyografi bilgisi henüz girilmedi.":nt==="edu"?h=a||"Eğitim bilgisi henüz girilmedi.":nt==="exp"&&(h=i||"Deneyim/başarılar henüz girilmedi."),m.innerHTML=qn(u(h))}}function Ro(e){nt=e;const t=document.getElementById("btn-prev-bio"),n=document.getElementById("btn-prev-edu"),a=document.getElementById("btn-prev-exp");t&&t.classList.toggle("active",e==="bio"),n&&n.classList.toggle("active",e==="edu"),a&&a.classList.toggle("active",e==="exp"),Ft()}function qn(e){return e.replace(/\n/g,"<br>")}async function Ho(){const e=x.dbUser.id,t=document.getElementById("cpBio").value.trim(),n=document.getElementById("cpSubjects").value.trim(),a=document.getElementById("cpEducation").value.trim(),i=document.getElementById("cpExperience").value.trim(),o=document.getElementById("cpPhotoUrl").value.trim(),s=document.getElementById("cpInstagram").value.trim(),r=document.getElementById("cpLinkedin").value.trim(),d={id:e,bio:t,subjects:n,education:a,experience:i,photo_url:o,instagram:s,linkedin:r,updated_at:new Date().toISOString()};localStorage.setItem(`coach_profile_${e}`,JSON.stringify(d));const{error:c}=await f.from("coach_profiles").upsert(d);c?(console.warn("Database save failed, profile saved locally in localStorage:",c),b("Profil yerel tarayıcıya kaydedildi (Veritabanı RLS hatası: "+c.message+")")):b("Profil başarıyla güncellendi ✓")}async function Gt(){const e=document.getElementById("view-dev-matches");if(!e)return;e.innerHTML='<div class="loading">Eşleşmeler yükleniyor...</div>';const{data:t,error:n}=await f.from("match_requests").select("*, matched_coach:matched_coach_id(full_name, username)").order("created_at",{ascending:!1});if(n){e.innerHTML=`<div style="padding:20px;color:var(--red)">Eşleşme başvuruları yüklenirken hata oluştu: ${u(n.message)}</div>`;return}const a={pending:"⏳ Bekliyor",matched:"🤝 Eşleştirildi",completed:"✅ Tamamlandı"},i={pending:"rgba(240, 165, 0, 0.15)",matched:"rgba(96, 180, 255, 0.15)",completed:"rgba(62, 207, 142, 0.15)"},o={pending:"var(--accent)",matched:"var(--accent4)",completed:"var(--green)"};e.innerHTML=`
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
                  <div style="font-weight:700;">${u(s.student_name)}</div>
                  <div style="font-size:11px; color:var(--text-mid);">${u(s.email)}</div>
                  <div style="font-size:11px; color:var(--text-mid);">${u(s.phone||"—")}</div>
                </td>
                <td style="padding:10px;">
                  <span style="background:var(--accent-dim); color:var(--accent); font-size:11px; font-weight:700; padding:2px 8px; border-radius:12px;">${u(s.exam_profile)}</span>
                  <div style="font-size:11px; color:var(--text-mid); margin-top:4px;">Stil: ${u(s.style||"Belirtilmemiş")}</div>
                </td>
                <td style="padding:10px;">
                  ${s.matched_coach?`
                    <div style="font-weight:600; color:var(--accent2);">${u(s.matched_coach.full_name)}</div>
                    <div style="font-size:11px; color:var(--text-mid);">@${u(s.matched_coach.username)}</div>
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
  `}async function Yo(e,t){const{error:n}=await f.from("match_requests").update({status:t}).eq("id",e);n?b("Durum güncellenirken hata: "+n.message):(b("Durum güncellendi ✓"),Gt())}async function No(e){const t=l.students.find(s=>s.id===e);if(!t)return;const{data:n}=await f.from("student_speeds").select("*").eq("student_id",e),a={};(n||[]).forEach(s=>{a[`${s.exam_type}_${s.subject}`]=s.secs_per_question});const i=[{exam:"TYT",sub:"Matematik"},{exam:"TYT",sub:"Türkçe"},{exam:"TYT",sub:"Fizik"},{exam:"TYT",sub:"Kimya"},{exam:"TYT",sub:"Biyoloji"},{exam:"TYT",sub:"Geometri"},{exam:"AYT-SAY",sub:"Matematik"},{exam:"AYT-SAY",sub:"Fizik"},{exam:"AYT-SAY",sub:"Kimya"},{exam:"AYT-SAY",sub:"Biyoloji"}];let o=document.getElementById("speedModal");o||(o=document.createElement("div"),o.id="speedModal",o.className="modal-bg",document.body.appendChild(o),o.addEventListener("click",s=>{s.target===o&&o.classList.remove("open")})),o.innerHTML=`<div class="modal modal-lg">
    <button class="modal-close" onclick="cm('speedModal')">×</button>
    <h2>⚡ ${u(t.name)} — Soru Çözme Hızı</h2>
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
  </div>`,N("speedModal")}async function Ko(e){const t=[{exam:"TYT",sub:"Matematik"},{exam:"TYT",sub:"Türkçe"},{exam:"TYT",sub:"Fizik"},{exam:"TYT",sub:"Kimya"},{exam:"TYT",sub:"Biyoloji"},{exam:"TYT",sub:"Geometri"},{exam:"AYT-SAY",sub:"Matematik"},{exam:"AYT-SAY",sub:"Fizik"},{exam:"AYT-SAY",sub:"Kimya"},{exam:"AYT-SAY",sub:"Biyoloji"}];for(const{exam:n,sub:a}of t){const i=`${n}_${a}`,o=document.getElementById("spd_"+i);if(!o)continue;const s=parseInt(o.value)||180;await Tn(e,n,a,s)}K("speedModal"),b("Hız ayarları kaydedildi ✓")}async function Oo(e){const t=l.students.find(o=>o.id===e);if(!t)return;const{data:n}=await f.from("student_notes").select("notes").eq("coach_id",x.coachId).eq("student_id",e).maybeSingle(),a=(n==null?void 0:n.notes)||"";let i=document.getElementById("studentNotesModal");i||(i=document.createElement("div"),i.id="studentNotesModal",i.className="modal-bg",document.body.appendChild(i),i.addEventListener("click",o=>{o.target===i&&i.classList.remove("open")})),i.innerHTML=`<div class="modal">
    <button class="modal-close" onclick="cm('studentNotesModal')">×</button>
    <h2>📝 ${u(t.name)} — Notlar</h2>
    <p style="font-size:13px;color:var(--text-mid);margin-bottom:16px">Öğrenciyle ilgili gözlemler, önemli bilgiler, hatırlatmalar…</p>
    <div class="field">
      <textarea id="studentNoteText" style="min-height:260px;font-size:13px;line-height:1.7;resize:vertical" placeholder="Örnek: Türkçe paragrafta hız sorunu var. Veli baskılı, motivasyon takip edilmeli. Son denemede geometri 4 yanlış...">${u(a)}</textarea>
    </div>
    <button class="btn btn-accent" style="width:100%;justify-content:center;padding:12px;margin-top:4px" onclick="saveStudentNote('${e}')">Kaydet</button>
  </div>`,N("studentNotesModal")}async function Fo(e){const t=document.getElementById("studentNoteText").value,{error:n}=await f.from("student_notes").upsert({coach_id:x.coachId,student_id:e,notes:t,updated_at:new Date().toISOString()},{onConflict:"coach_id,student_id"});if(n){b("Not kaydedilemedi: "+n.message);return}b("Not kaydedildi ✓"),K("studentNotesModal")}function Go(e){let t=document.getElementById("reportModal");t||(t=document.createElement("div"),t.id="reportModal",t.className="modal-bg",t.innerHTML=`<div class="modal">
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
    </div>`,document.body.appendChild(t),t.addEventListener("click",i=>{i.target===t&&t.classList.remove("open")}),document.getElementById("rpPeriod").addEventListener("change",function(){document.getElementById("rpCustomDates").style.display=this.value==="custom"?"":"none"})),document.getElementById("rpStuId").value=e;const n=new Date,a=new Date(n.getFullYear(),n.getMonth(),1);document.getElementById("rpStart").value=H(a),document.getElementById("rpEnd").value=H(n),document.getElementById("rpNote").value="",N("reportModal")}function qt(){const e=document.getElementById("rpPeriod").value,t=new Date;if(e==="weekly"){const n=V(0,0);return{start:H(n),end:H(G(n,6))}}else return e==="monthly"?{start:H(new Date(t.getFullYear(),t.getMonth(),1)),end:H(t)}:{start:document.getElementById("rpStart").value,end:document.getElementById("rpEnd").value}}function Ut(e,t=!1){var h,z,T,M;const n=l.students.find(E=>E.id===e);if(!n)return"";const{start:a,end:i}=qt(),o=document.getElementById("rpNote").value.trim(),s=((h=l.workspace)==null?void 0:h.brand_name)||"Rostrum Akademi",r=((z=l.workspace)==null?void 0:z.brand_color)||"#f0a500",d=((T=x.dbUser)==null?void 0:T.full_name)||"Koç",c=[],p=new Date(a);for(;H(p)<=i;){const E=`${e}_${H(p)}`;(l.tasks[E]||[]).forEach(D=>c.push({...D,date:H(p)})),p.setDate(p.getDate()+1)}const m=c.length,g=c.filter(E=>E.done).length,y=m>0?Math.round(g/m*100):0,S=c.filter(E=>E.done).reduce((E,D)=>E+Number(D.duration||0),0),I={};c.forEach(E=>{const D=E.subject||"Diğer";I[D]||(I[D]={total:0,done:0}),I[D].total++,E.done&&I[D].done++});const v=l.exams.filter(E=>E.studentId===e&&E.date>=a&&E.date<=i).sort((E,D)=>E.date.localeCompare(D.date)),w=l.appointments.filter(E=>E.studentId===e&&E.date>=a&&E.date<=i).sort((E,D)=>E.date.localeCompare(D.date)),k=`${new Date(a+"T12:00").toLocaleDateString("tr-TR",{day:"numeric",month:"long",year:"numeric"})} – ${new Date(i+"T12:00").toLocaleDateString("tr-TR",{day:"numeric",month:"long",year:"numeric"})}`;let _="";if(v.length>1){const E=Math.max(...v.map($=>(EXAM_DEFS[$.type]||[]).reduce((A,L)=>{var R;return A+Number(((R=$.nets)==null?void 0:R[L])||0)},0)),1),D=400,C=80,j=Math.min(40,(D-20)/v.length-4);_=`<svg width="${D}" height="${C+30}" style="overflow:visible">
      ${v.map(($,A)=>{const L=(EXAM_DEFS[$.type]||[]).reduce((U,P)=>{var F;return U+Number(((F=$.nets)==null?void 0:F[P])||0)},0),R=Math.max(Math.round(L/E*(C-10)),4),Y=10+A*((D-20)/v.length);return`<rect x="${Y}" y="${C-R}" width="${j}" height="${R}" rx="3" fill="${r}" opacity="0.85"/>
          <text x="${Y+j/2}" y="${C-R-4}" text-anchor="middle" font-size="10" fill="#333">${L.toFixed(0)}</text>
          <text x="${Y+j/2}" y="${C+14}" text-anchor="middle" font-size="9" fill="#666">${u($.name.replace("Deneme","").replace("TYT","").replace("AYT","").trim()||String(A+1))}</text>`}).join("")}
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
      <div class="brand">${u(s)}</div>
      <div class="brand-sub">Koç: ${u(d)}</div>
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
      <div class="stu-name">${u(n.name)}</div>
      <div class="stu-target">${u(n.target)}</div>
      <div style="margin-top:8px">
        <div style="font-size:11px;color:#666;margin-bottom:3px">Genel İlerleme %${n.progress}</div>
        <div class="prog-bar" style="width:200px"><div class="prog-fill" style="width:${n.progress}%"></div></div>
      </div>
    </div>
  </div>

  <!-- ÖZET İSTATİSTİKLER -->
  <div class="stats-grid">
    <div class="stat-box"><div class="val">${m}</div><div class="lbl">Toplam Görev</div></div>
    <div class="stat-box"><div class="val" style="color:#16a34a">${g}</div><div class="lbl">Tamamlanan</div></div>
    <div class="stat-box"><div class="val">%${y}</div><div class="lbl">Tamamlanma</div></div>
    <div class="stat-box"><div class="val">${Math.round(S/60)}</div><div class="lbl">Çalışma (saat)</div></div>
  </div>

  <!-- DERS BAZINDA ÇALIŞMA -->
  ${Object.keys(I).length>0?`
  <div class="section">
    <div class="section-title">📚 Ders Bazında Çalışma</div>
    <table>
      <thead><tr><th>Ders</th><th>Toplam</th><th>Tamamlanan</th><th>Oran</th><th></th></tr></thead>
      <tbody>
        ${Object.entries(I).sort((E,D)=>D[1].total-E[1].total).map(([E,D])=>{const C=Math.round(D.done/D.total*100),j=C>=80?"badge-green":C>=50?"badge-yellow":"badge-red";return`<tr>
            <td><strong>${u(E)}</strong></td>
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
    ${_?`<div style="margin-bottom:16px;padding:12px;background:#f8f8f8;border-radius:8px">${_}</div>`:""}
    <table>
      <thead><tr><th>Sınav</th><th>Tarih</th><th>Tür</th>${(EXAM_DEFS[(M=v[0])==null?void 0:M.type]||[]).map(E=>`<th>${E}</th>`).join("")}<th>Toplam</th></tr></thead>
      <tbody>
        ${v.map(E=>{const D=EXAM_DEFS[E.type]||[],C=D.reduce((j,$)=>{var A;return j+Number(((A=E.nets)==null?void 0:A[$])||0)},0).toFixed(1);return`<tr>
            <td><strong>${u(E.name)}</strong></td>
            <td>${new Date(E.date+"T12:00").toLocaleDateString("tr-TR",{day:"numeric",month:"short"})}</td>
            <td>${u(E.type)}</td>
            ${D.map(j=>{var A;const $=Number(((A=E.nets)==null?void 0:A[j])||0);return`<td><span class="badge ${$>=20?"badge-green":$>=12?"badge-yellow":"badge-red"}">${$}</span></td>`}).join("")}
            <td><strong>${C}</strong></td>
          </tr>`}).join("")}
      </tbody>
    </table>
  </div>`:""}

  <!-- RANDEVULAR -->
  ${w.length>0?`
  <div class="section">
    <div class="section-title">📅 Görüşmeler</div>
    <table>
      <thead><tr><th>Tarih</th><th>Saat</th><th>Tür</th><th>Süre</th></tr></thead>
      <tbody>
        ${w.map(E=>`<tr>
          <td>${new Date(E.date+"T12:00").toLocaleDateString("tr-TR",{weekday:"short",day:"numeric",month:"short"})}</td>
          <td>${E.time}</td>
          <td>${u(E.type)}</td>
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
      <div style="font-size:13px;line-height:1.7;color:#333">${u(o).replace(/\n/g,"<br>")}</div>
      <div style="margin-top:10px;font-size:11px;color:#888">— ${u(d)}</div>
    </div>
  </div>`:""}

  <!-- FOOTER -->
  <div class="footer">
    <span>${u(s)} · ${u(d)}</span>
    <span>${u(n.name)} · ${k}</span>
    <span>Rostrum Akademi Platformu</span>
  </div>
</div>
</body>
</html>`}function qo(){const e=document.getElementById("rpStuId").value,t=Ut(e,!0),n=window.open("","_blank","width=900,height=700");n.document.write(t),n.document.close()}function Uo(){const e=document.getElementById("rpStuId").value;l.students.find(a=>a.id===e);const t=Ut(e,!1),n=window.open("","_blank");n.document.write(t),n.document.close(),setTimeout(()=>{n.focus(),n.print()},500),K("reportModal"),b('PDF oluşturuluyor — "PDF olarak kaydet" seçin')}async function Wo(){const e=document.getElementById("rpStuId").value,t=l.students.find(s=>s.id===e);if(!t)return;const n=`${window.location.origin}/api/generate-pdf-report?studentId=${e}`,a=`Merhaba, ${t.name} isimli öğrencimizin bu dönemki performans ve gelişim raporu hazırlandı. Aşağıdaki bağlantıdan raporu detaylıca görüntüleyebilirsiniz:

🔗 ${n}`,o=`https://api.whatsapp.com/send?text=${encodeURIComponent(a)}`;window.open(o,"_blank"),K("reportModal"),b("WhatsApp yönlendirmesi açıldı ✓")}function Vo(){let e=document.getElementById("weeklyPDFModal");e||(e=document.createElement("div"),e.id="weeklyPDFModal",e.className="modal-bg",e.innerHTML=`<div class="modal">
      <button class="modal-close" onclick="cm('weeklyPDFModal')">×</button>
      <h2>🖨️ Haftalık Program PDF</h2>
      <div class="field">
        <label>Koç Notu (isteğe bağlı)</label>
        <textarea id="pdfNote" placeholder="Bu haftaki programla ilgili notunuzu ekleyin..." style="min-height:90px"></textarea>
      </div>
      <button class="btn btn-accent" style="width:100%;justify-content:center;padding:12px" onclick="generateWeeklyPDF()">PDF Oluştur →</button>
    </div>`,document.body.appendChild(e),e.addEventListener("click",t=>{t.target===e&&e.classList.remove("open")})),document.getElementById("pdfNote").value="",N("weeklyPDFModal")}function Zo(){const e=document.getElementById("pdfNote").value.trim();K("weeklyPDFModal"),Un(l.activeStuId,e)}function Un(e,t){var E,D;const n=l.students.find(C=>C.id===e);if(!n)return;const a=(n==null?void 0:n.weekStart)??0,i=V(l.weekOffset,a),o=G(i,6),s=((E=l.workspace)==null?void 0:E.brand_name)||"Rostrum Akademi",r=((D=l.workspace)==null?void 0:D.brand_color)||"#f0a500",d=["Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi","Pazar"],c=["Ocak","Şubat","Mart","Nisan","Mayıs","Haziran","Temmuz","Ağustos","Eylül","Ekim","Kasım","Aralık"],p={deneme:"#f59e0b",soru:"#3b82f6",konu:"#10b981",diger:"#8b5cf6"},m={deneme:"#fffbeb",soru:"#eff6ff",konu:"#f0fdf4",diger:"#faf5ff"},g={deneme:"Deneme",soru:"Soru Bankası",konu:"Konu Anlatımı",diger:"Diğer"},y=H(new Date);let S=0,I=0,v=0,w="";for(let C=0;C<7;C++){const j=G(i,C),$=H(j),A=l.tasks[`${e}_${$}`]||[];S+=A.length,I+=A.filter(P=>P.done).length,v+=A.reduce((P,F)=>P+Number(F.duration||0),0);const L=$===y,R=d[(a+C)%7].slice(0,3).toUpperCase(),Y=A.reduce((P,F)=>P+Number(F.duration||0),0),U=A.map(P=>{const F=p[P.type]||"#94a3b8",X=m[P.type]||"#f8fafc",ce=g[P.type]||"Diğer";return`<div style="margin-bottom:5px;border-radius:7px;background:${X};border:1px solid ${F}28;border-left:3px solid ${F}">
        <div style="padding:6px 8px">
          <div style="font-size:7.5px;font-weight:800;color:${F};text-transform:uppercase;letter-spacing:.5px;margin-bottom:2px">${ce}${P.exam?` · ${P.exam}`:""}</div>
          <div style="font-size:10px;font-weight:700;color:#111;line-height:1.3">${u(P.subject)}</div>
          ${P.note?`<div style="font-size:7.5px;color:#999;margin-top:2px;line-height:1.4;word-break:break-word">${u(P.note)}</div>`:""}
          <div style="display:flex;align-items:center;justify-content:space-between;margin-top:4px">
            <span style="display:inline-flex;align-items:center;gap:4px;font-size:8px;color:#bbb">
              <span style="display:inline-block;width:11px;height:11px;border:1.5px solid #d0cec9;border-radius:3px;flex-shrink:0"></span>
              ${P.duration} dk
            </span>
            ${P.done?'<span style="font-size:8px;font-weight:700;color:#22c55e">✓ Tamam</span>':""}
          </div>
        </div>
      </div>`}).join("");w+=`<div style="padding:0 5px;border-right:${C<6?"1px solid #ede9e3":"none"}">
      <div style="padding-bottom:7px;margin-bottom:7px;border-bottom:2px solid ${L?r:"#ede9e3"}">
        <div style="font-size:8px;font-weight:800;color:${L?r:"#bbb"};text-transform:uppercase;letter-spacing:.8px">${R}</div>
        <div style="font-size:22px;font-weight:900;color:${L?r:"#111"};line-height:1;margin-top:1px">${j.getDate()}</div>
        ${Y>0?`<div style="font-size:7px;color:#ccc;margin-top:2px">${Y}dk · ${A.length}g</div>`:""}
      </div>
      ${A.length===0?'<div style="font-size:13px;color:#e8e4dc;text-align:center;padding:14px 0">—</div>':U}
    </div>`}const k=S>0?Math.round(I/S*100):0,_=k>=80?"#22c55e":k>=50?r:"#f59e0b",h=n.name.split(" ").map(C=>C[0]).join("").slice(0,2).toUpperCase();let z="";for(let C=0;C<7;C++){const j=G(i,C),$=H(j),A=l.tasks[`${e}_${$}`]||[];if(A.length===0)continue;const L=d[(a+C)%7],R=A.map((Y,U)=>{const P=p[Y.type]||"#94a3b8",F=g[Y.type]||"Diğer";return`<div style="margin-bottom:12px;padding-bottom:12px;border-bottom:1px solid #eee">
        <div style="display:flex;align-items:baseline;gap:8px">
          <span style="font-size:12px;font-weight:800;color:${P}">${U+1}. ${F}${Y.exam?` (${Y.exam})`:""}</span>
          <span style="font-size:12px;font-weight:700;color:#111">${u(Y.subject)}</span>
          <span style="font-size:11px;color:#666;margin-left:auto">${Y.duration} dk</span>
        </div>
        ${Y.note?`<div style="font-size:10px;color:#555;margin-top:4px;padding-left:14px;border-left:2px solid ${P}40;line-height:1.5">${u(Y.note).replace(/\n/g,"<br>")}</div>`:""}
      </div>`}).join("");z+=`<div style="margin-bottom:24px">
      <h3 style="font-size:14px;font-weight:800;color:${r};border-bottom:2px solid ${r}40;padding-bottom:4px;margin-bottom:10px">${j.getDate()} ${c[j.getMonth()]} - ${L}</h3>
      <div>${R}</div>
    </div>`}const T=`<!DOCTYPE html><html lang="tr"><head><meta charset="UTF-8">
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
      <div style="font-size:18px;font-weight:900;color:${r};letter-spacing:-.3px">${u(s)}</div>
      <div style="font-size:9.5px;color:#bbb;margin-top:2px;letter-spacing:.2px">Haftalık Çalışma Programı</div>
    </div>
    <div style="display:flex;align-items:center;gap:12px">
      <div style="text-align:right">
        <div style="font-size:14px;font-weight:800;color:#111">${u(n.name)}</div>
        ${n.target?`<div style="font-size:8.5px;color:#aaa;margin-top:1px">🎯 ${u(n.target)}</div>`:""}
        <div style="font-size:8.5px;color:#bbb;margin-top:1px">${i.getDate()} ${c[i.getMonth()]} – ${o.getDate()} ${c[o.getMonth()]} ${o.getFullYear()}</div>
      </div>
      <div style="width:40px;height:40px;border-radius:10px;background:${r};display:flex;align-items:center;justify-content:center;font-size:16px;font-weight:900;color:#fff;letter-spacing:-.5px;flex-shrink:0">${h}</div>
    </div>
  </div>

  <!-- STATS BAR -->
  <div style="display:flex;align-items:center;gap:0;padding:7px 18px;background:#faf9f8;border-bottom:1px solid #ede9e3">
    <div style="display:flex;align-items:center;gap:18px">
      <div style="text-align:center">
        <div style="font-size:17px;font-weight:900;color:${r};letter-spacing:-.5px">${S}</div>
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
          <div style="height:100%;width:${k}%;background:${_};border-radius:99px"></div>
        </div>
        <div style="font-size:14px;font-weight:900;color:${_};min-width:36px">%${k}</div>
      </div>
    </div>
  </div>

  <!-- WEEK GRID -->
  <div style="display:grid;grid-template-columns:repeat(7,1fr);padding:10px 8px 6px">${w}</div>

  <!-- COACH NOTE -->
  ${t?`<div style="margin:2px 14px 10px;padding:10px 14px;background:${r}0d;border-left:3px solid ${r};border-radius:0 8px 8px 0">
    <div style="font-size:8px;font-weight:800;color:${r};text-transform:uppercase;letter-spacing:.6px;margin-bottom:3px">Koç Notu</div>
    <div style="font-size:10px;color:#444;line-height:1.6">${u(t)}</div>
  </div>`:""}

  <!-- FOOTER -->
  <div style="display:flex;align-items:center;gap:14px;padding:7px 16px;border-top:1px solid #ede9e3;background:#faf9f8">
    <span style="font-size:8px;color:#ccc;margin-right:4px;font-weight:600">TÜRLER:</span>
    ${Object.entries(g).map(([C,j])=>`<div style="display:flex;align-items:center;gap:4px;font-size:8.5px;color:#888"><div style="width:8px;height:8px;border-radius:2px;background:${p[C]}"></div>${j}</div>`).join("")}
    <div style="margin-left:auto;font-size:8px;color:#ccc">${u(s)} · ${new Date().toLocaleDateString("tr-TR")}</div>
  </div>

  <!-- PRINT BUTTON -->
  <div class="no-print" style="padding:12px 16px;display:flex;align-items:center;gap:12px;border-top:1px solid #ede9e3">
    <button onclick="window.print()" style="background:${r};color:#fff;border:none;padding:10px 28px;border-radius:8px;font-size:13px;font-weight:800;cursor:pointer;letter-spacing:.2px">🖨️ PDF İndir / Yazdır</button>
    <span style="font-size:11px;color:#bbb">Tarayıcı ayarlarından "Arka plan grafikleri"ni aktif edin</span>
  </div>

  <!-- PAGE 2: DETAILED LIST VIEW -->
  ${z?`
  <div class="page-break" style="padding:40px 30px;max-width:1000px;margin:0 auto">
    <div style="font-size:18px;font-weight:900;color:${r};margin-bottom:20px;border-bottom:2px solid ${r};padding-bottom:10px">📋 Günlük Detaylı Görev Açıklamaları</div>
    ${z}
  </div>`:""}

  </body></html>`,M=window.open("","_blank","width=1200,height=850");M.document.write(T),M.document.close(),setTimeout(()=>M.focus(),300)}function Jo(){const e="abcdefghijklmnopqrstuvwxyz",t=()=>Array.from({length:3},()=>e[Math.floor(Math.random()*e.length)]).join("");return`https://meet.google.com/${t()}-${t()}-${t()}`}function Xo(){return`https://zoom.us/j/${Math.floor(Math.random()*9e9)+1e9}`}function Qo(e){navigator.clipboard.writeText(e).then(()=>b("Link kopyalandı ✓")).catch(()=>{const t=document.createElement("textarea");t.value=e,document.body.appendChild(t),t.select(),document.execCommand("copy"),t.remove(),b("Link kopyalandı ✓")})}const Wn=[{name:"Altın",val:"#f0a500",dim:"rgba(240,165,0,.12)"},{name:"Turuncu",val:"#e8622a",dim:"rgba(232,98,42,.12)"},{name:"Mavi",val:"#4da6ff",dim:"rgba(77,166,255,.12)"},{name:"Yeşil",val:"#3ecf8e",dim:"rgba(62,207,142,.12)"},{name:"Mor",val:"#c084fc",dim:"rgba(192,132,252,.12)"},{name:"Pembe",val:"#f472b6",dim:"rgba(244,114,182,.12)"},{name:"Kırmızı",val:"#ff5c5c",dim:"rgba(255,92,92,.12)"},{name:"Turkuaz",val:"#06b6d4",dim:"rgba(6,182,212,.12)"}];function Vn(){try{const e=JSON.parse(localStorage.getItem("ba_theme")||"{}");e.theme==="dark"?document.documentElement.setAttribute("data-theme","dark"):document.documentElement.removeAttribute("data-theme"),e.accent&&Zn(e.accent,e.accentDim,!1)}catch{}}function Zn(e,t,n=!0){if(document.documentElement.style.setProperty("--accent",e),document.documentElement.style.setProperty("--accent-dim",t||"rgba(240,165,0,.12)"),n)try{const a=JSON.parse(localStorage.getItem("ba_theme")||"{}");a.accent=e,a.accentDim=t,localStorage.setItem("ba_theme",JSON.stringify(a))}catch{}}function es(e){e==="dark"?document.documentElement.setAttribute("data-theme","dark"):document.documentElement.removeAttribute("data-theme");try{const t=JSON.parse(localStorage.getItem("ba_theme")||"{}");t.theme=e,localStorage.setItem("ba_theme",JSON.stringify(t))}catch{}document.querySelectorAll(".theme-btn").forEach(t=>{const n=t.dataset.theme===e;t.style.background=n?"var(--accent-dim)":"",t.style.borderColor=n?"var(--accent)":"",t.style.color=n?"var(--accent)":""})}function ts(){let e=document.getElementById("themePanel");if(e){e.remove();return}e=document.createElement("div"),e.id="themePanel";const t=document.documentElement.getAttribute("data-theme")!=="light";e.style.cssText="position:fixed;top:60px;right:12px;background:var(--surface);border:1px solid var(--border2);border-radius:14px;padding:18px;z-index:300;box-shadow:var(--shadow-lg);min-width:230px;animation:fadeUp .2s ease",e.innerHTML=`
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
    `)}function ns(){const e=document.getElementById("aiChatPanel"),t=document.getElementById("aiChatBubble");if(e.classList.contains("open"))e.classList.remove("open"),t.style.display="flex";else{e.classList.add("open"),t.style.display="none";const n=document.getElementById("aiMessages");n.scrollTop=n.scrollHeight,document.getElementById("aiInput").focus()}}function as(e){document.getElementById("aiInput").value=e,Xn()}function St(){var t;const e={};try{const n=l.students.find(s=>s.id===l.activeStuId);n&&(e.studentName=n.name,e.target=n.target||""),x.role==="parent"&&x.childName&&(e.studentName=x.childName);const a=(l.exams||[]).filter(s=>s.studentId===l.activeStuId).slice(-5);a.length&&(e.recentExams=a.map(s=>({name:s.type+" "+(s.name||""),date:s.date||"",nets:s.nets||{}})));let i=[];if(Object.entries(l.tasks||{}).forEach(([s,r])=>{s.startsWith(l.activeStuId+"_")&&(i=i.concat(r))}),i.length){const s=i.filter(r=>r.done).length;e.taskCompletionRate=Math.round(s/i.length*100),e.weeklyTaskCount=i.length}const o=Object.keys(EXAM_DEFS);a.length&&(e.examProfile=((t=a[0])==null?void 0:t.type)||o[0])}catch(n){console.warn("AI context error:",n)}return e}function Ee(e,t){gt.push({role:e,content:t});const n=document.getElementById("aiMessages"),a=n.querySelector(".ai-welcome");a&&a.remove();const i=new Date().toLocaleTimeString("tr-TR",{hour:"2-digit",minute:"2-digit"}),o=document.createElement("div");o.className=`ai-msg ${e}`,o.innerHTML=`${u(t).replace(/\n/g,"<br>")}<div class="ai-msg-time">${i}</div>`,n.appendChild(o),n.scrollTop=n.scrollHeight}async function Xn(){if(kt)return;const e=document.getElementById("aiInput"),t=e.value.trim();if(t){e.value="",Ee("user",t),kt=!0,document.getElementById("aiTyping").classList.add("show"),document.getElementById("aiSendBtn").disabled=!0;try{const n=St(),a=x.role||"student",i=(window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1","/api/ai-chat"),o=await fetch(i,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({messages:gt.slice(-10),context:n,userRole:a})});if(o.ok){const s=await o.json();Ee("assistant",s.reply||"Yanıt alınamadı.")}else{const s=await ze(t,n,a);Ee("assistant",s)}}catch(n){console.error("AI error:",n);try{const a=St(),i=await ze(t,a,x.role||"student");Ee("assistant",i)}catch{const i=localStorage.getItem("gemini_api_key");Ee("assistant","🔒 Bu özellik ileride aktif olacaktır. Yakında kullanıma açılacak.")}}finally{kt=!1,document.getElementById("aiTyping").classList.remove("show"),document.getElementById("aiSendBtn").disabled=!1}}}let wt=null;async function Qn(e){try{const t=await fetch(`https://generativelanguage.googleapis.com/v1beta/models?key=${e}`);if(!t.ok)return null;const a=(await t.json()).models||[];let i=a.find(o=>o.name.toLowerCase().includes("flash")&&o.supportedGenerationMethods.includes("generateContent"));if(i||(i=a.find(o=>o.supportedGenerationMethods.includes("generateContent"))),i)return i.name.replace("models/","")}catch(t){console.warn("Auto-detect model failed:",t)}return null}async function ze(e,t,n){var p,m,g,y,S,I;let a=localStorage.getItem("gemini_api_key");if(!a)try{const{data:v}=await f.from("platform_settings").select("value").eq("key","ai_settings").maybeSingle();v&&v.value&&v.value.gemini_api_key&&(a=v.value.gemini_api_key)}catch(v){console.warn("DB Gemini API key load error:",v)}const i=a;if(!i)throw new Error("API anahtarı eksik.");let o="gemini-1.5-flash";if(i)if(wt)o=wt;else{const v=await Qn(i);v&&(wt=v,o=v,console.log("[Gemini API] Otomatik model tespiti başarılı:",o))}let s=`Sen "Rostrum Akademi Yapay Zeka Asistanı"sın. Türkiye eğitim sistemine (YKS, LGS) hakim, rolüne göre öğrencilere, velilere veya koçlara destek veren bir yapay zekasın.

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
Hedef: ${t.target}`);const r=[{role:"user",parts:[{text:s}]},{role:"model",parts:[{text:"Anladım! Rostrum Akademi Yapay Zeka Asistanı olarak hazırım."}]},...gt.slice(-8).map(v=>({role:v.role==="user"?"user":"model",parts:[{text:v.content}]}))],d=await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${o}:generateContent?key=${i}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({contents:r,generationConfig:{temperature:.7,maxOutputTokens:1500}})});if(!d.ok){let v=`HTTP ${d.status}`;try{const w=await d.json();(p=w==null?void 0:w.error)!=null&&p.message&&(v=w.error.message)}catch{}throw new Error(v)}const c=await d.json();return((I=(S=(y=(g=(m=c==null?void 0:c.candidates)==null?void 0:m[0])==null?void 0:g.content)==null?void 0:y.parts)==null?void 0:S[0])==null?void 0:I.text)||"Yanıt üretilemedi."}let Wt="";async function is(e){const t=l.students.find(a=>a.id===e);if(!t)return;const n=document.getElementById("aiCopilotBtn");n.disabled=!0,n.textContent="⌛ Analiz Ediliyor ve Taslak Oluşturuluyor...";try{const a=V(0,t.weekStart||0);let i=0,o=0,s=0;for(let k=0;k<7;k++){const _=l.tasks[`${t.id}_${H(G(a,k))}`]||[];i+=_.length,o+=_.filter(h=>h.done).length,s+=_.reduce((h,z)=>h+Number(z.duration||0),0)}const r=i>0?Math.round(o/i*100):0,c=(l.exams||[]).filter(k=>k.studentId===e).slice(-5).map(k=>({name:k.type+" "+(k.name||""),date:k.date||"",nets:k.nets||{}})),p={};(l.studentSpeeds||[]).filter(k=>k.student_id===e).forEach(k=>{p[`${k.exam_type}_${k.subject}`]=k.secs_per_question});const m=`Lütfen şu öğrenci için haftalık durum analizi ve öğrenciye gönderilecek haftalık değerlendirme mesajı taslağı oluştur:
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
(Öğrenciye gönderilecek haftalık değerlendirme taslağı)`;let g="";const y={studentName:t.name,target:t.target,recentExams:c,taskCompletionRate:r,weeklyTaskCount:i};try{const k=await fetch("/api/ai-chat",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({messages:[{role:"user",content:m}],context:y,userRole:"coach"})});k.ok?g=(await k.json()).reply:g=await ze(m,y,"coach")}catch{g=await ze(m,y,"coach")}let S="Analiz üretilemedi.",I="Taslak üretilemedi.";const v=g.indexOf("[ANALİZ]"),w=g.indexOf("[TASLAK]");v!==-1&&w!==-1?v<w?(S=g.substring(v+8,w).trim(),I=g.substring(w+8).trim()):(I=g.substring(w+8,v).trim(),S=g.substring(v+8).trim()):I=g,document.getElementById("aiCopilotAnalysisBox").innerHTML=`<b>📊 Yapay Zeka Durum Analizi:</b><br>${S.replace(/\n/g,"<br>")}`,document.getElementById("aiCopilotTextarea").value=I,Wt=I,document.getElementById("aiCopilotResultArea").style.display="block",document.getElementById("aiCopilotSendBtn").disabled=!0,document.getElementById("aiCopilotEditWarning").style.display="inline"}catch(a){console.error("generateAICopilotDraft error:",a),b("Taslak oluşturulurken hata: "+a.message)}finally{n.disabled=!1,n.textContent="🤖 Durum Analizi Yap ve Taslak Oluştur"}}function os(){const e=document.getElementById("aiCopilotTextarea").value.trim(),t=document.getElementById("aiCopilotSendBtn"),n=document.getElementById("aiCopilotEditWarning");e&&e!==Wt?(t.disabled=!1,n.style.display="none"):(t.disabled=!0,n.style.display="inline")}async function ss(e){var a;const t=document.getElementById("aiCopilotTextarea").value.trim();if(!t)return;const n=document.getElementById("aiCopilotSendBtn");n.disabled=!0,n.textContent="Gönderiliyor...";try{const i=x.coachId||((a=l.students.find(r=>r.id===e))==null?void 0:a.coachId),{data:o,error:s}=await f.from("messages").insert({student_id:e,coach_id:i,from_role:"coach",text:t,read:!1}).select().single();if(s)throw s;await f.from("reports").insert({student_id:e,coach_id:i,type:"ai_copilot",title:"Yapay Zeka Copilot Değerlendirmesi",content:t,start_date:ge(),end_date:ge()}),l.messages[e]||(l.messages[e]=[]),l.messages[e].push({_id:o.id,from:"coach",text:t,time:new Date().toLocaleTimeString("tr-TR",{hour:"2-digit",minute:"2-digit"}),read:!1}),b("Taslak mesaj başarıyla düzenlendi, öğrenciye gönderildi ve arşive kaydedildi! ✓"),document.getElementById("aiCopilotResultArea").style.display="none",document.getElementById("aiCopilotTextarea").value="",Wt=""}catch(i){console.error("sendCopilotDraft error:",i),b("Gönderim hatası: "+i.message),n.disabled=!1}finally{n.textContent="✍️ Düzenlemeyi Kaydet ve Öğrenciye Gönder"}}function ea(){const e=l.students.find(r=>r.id===l.activeStuId),t=x.childName||(e==null?void 0:e.name)||"Öğrenci",n=document.getElementById("view-parent-home");if(!n)return;let a=[];Object.entries(l.tasks||{}).forEach(([r,d])=>{r.startsWith(l.activeStuId+"_")&&(a=a.concat(d))});const i=a.filter(r=>r.done).length,o=a.length?Math.round(i/a.length*100):0,s=(l.exams||[]).filter(r=>r.studentId===l.activeStuId).slice(-3);n.innerHTML=`
    <div style="padding:24px;max-width:800px;margin:0 auto">
      <div style="margin-bottom:24px">
        <div style="font-size:24px;font-weight:800;margin-bottom:4px">👋 Merhaba!</div>
        <div style="color:var(--text-mid);font-size:14px">${u(t)}'in koçluk paneli</div>
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
            <div><div style="font-weight:600;font-size:13px">${u(r.name||r.type)}</div><div style="font-size:11px;color:var(--text-mid)">${r.date||""}</div></div>
            <div style="font-weight:800;color:var(--accent)">${d.toFixed(1)} net</div>
          </div>`}).join("")}
      </div>`:""}
      
      <div class="card" style="padding:20px;background:linear-gradient(135deg,rgba(240,165,0,.05),rgba(62,207,142,.05))">
        <div style="font-size:15px;font-weight:700;margin-bottom:8px">🤖 AI Asistandan Yardım Alın</div>
        <div style="font-size:12px;color:var(--text-mid);margin-bottom:12px">Çocuğunuzun ilerlemesi hakkında anında rapor alabilirsiniz.</div>
        <button class="btn btn-accent" onclick="toggleAIChat()" style="justify-content:center;width:100%;padding:12px">🤖 AI Asistan ile Konuş</button>
      </div>
    </div>`}function ta(){const e=document.getElementById("view-parent-progress");if(!e)return;const t=l.students.find(o=>o.id===l.activeStuId),n=x.childName||(t==null?void 0:t.name)||"Öğrenci",a=(l.exams||[]).filter(o=>o.studentId===l.activeStuId);let i=[];Object.entries(l.tasks||{}).forEach(([o,s])=>{o.startsWith(l.activeStuId+"_")&&(i=i.concat(s))}),e.innerHTML=`
    <div style="padding:24px;max-width:800px;margin:0 auto">
      <div style="font-size:20px;font-weight:800;margin-bottom:20px">📊 ${u(n)} - İlerleme Raporu</div>
      
      <div class="card" style="padding:20px;margin-bottom:16px">
        <div style="font-size:15px;font-weight:700;margin-bottom:16px">📋 Haftalık Görevler</div>
        ${i.length?i.slice(-10).map(o=>`
          <div style="display:flex;align-items:center;gap:10px;padding:8px 0;border-bottom:1px solid var(--border)">
            <div style="width:20px;height:20px;border-radius:50%;background:${o.done?"var(--green)":"var(--surface2)"};border:2px solid ${o.done?"var(--green)":"var(--border)"};display:flex;align-items:center;justify-content:center;font-size:10px;color:#fff">${o.done?"✓":""}</div>
            <div style="flex:1;font-size:13px">${u(o.subject)} <span style="font-size:11px;color:var(--text-dim)">(${Ge(o.type)})</span></div>
            <div style="font-size:11px;color:var(--text-mid)">${o.done?"Tamamlandı":"Bekliyor"}</div>
          </div>`).join(""):'<div style="text-align:center;color:var(--text-mid);padding:20px">Henüz görev bulunmuyor.</div>'}
      </div>
      
      <div class="card" style="padding:20px">
        <div style="font-size:15px;font-weight:700;margin-bottom:16px">📊 Deneme Geçmişi</div>
        ${a.length?a.slice(-10).map(o=>{const s=Object.values(o.nets||{}).reduce((r,d)=>r+(parseFloat(d)||0),0);return`<div style="display:flex;justify-content:space-between;align-items:center;padding:10px 0;border-bottom:1px solid var(--border)">
            <div><div style="font-weight:600;font-size:13px">${u(o.name||o.type)}</div><div style="font-size:11px;color:var(--text-mid)">${o.date||""}</div></div>
            <div style="font-weight:800;color:var(--accent)">${s.toFixed(1)} net</div>
          </div>`}).join(""):'<div style="text-align:center;color:var(--text-mid);padding:20px">Henüz deneme sonucu yok.</div>'}
      </div>
    </div>`}function na(){const e=document.getElementById("view-parent-ai");e&&(e.innerHTML=`
    <div style="padding:24px;max-width:600px;margin:0 auto;text-align:center">
      <div style="font-size:48px;margin-bottom:16px">🤖</div>
      <div style="font-size:20px;font-weight:800;margin-bottom:8px">AI Koç Asistanı</div>
      <div style="font-size:13px;color:var(--text-mid);margin-bottom:24px;line-height:1.7">Çocuğunuzun eğitim süreci hakkında sorular sorun, deneme analizleri isteyin veya öneriler alın.</div>
      <button class="btn btn-accent" onclick="toggleAIChat()" style="justify-content:center;padding:14px 32px;font-size:15px">💬 AI Asistan ile Konuşmaya Başla</button>
    </div>`)}async function rs(){var g;const e=document.getElementById("smId").value,t=document.getElementById("smName").value.trim(),n=_e(document.getElementById("smUsername").value.trim()),a=document.getElementById("smPass").value,i=document.getElementById("smRole").value,o=document.getElementById("smTarget").value.trim(),s=((g=document.querySelector(".color-opt.sel"))==null?void 0:g.dataset.c)||"#f0a500",r=Number(document.getElementById("smWeekStart").value),d=Number(document.getElementById("smProg").value);if(!t||!n||!a)return b("Ad, kullanıcı adı ve şifre zorunlu!");const c=a.length===64?a:await Me(a),p=n+"@rostrumakademi.com",m={full_name:t,username:n,password_hash:c,role:i,target:o,color:s,week_start:r,progress:d};if(B(!0),e){const{error:y}=await f.from("users").update(m).eq("id",e);if(B(!1),y)return b("Hata: "+y.message);b("Kullanıcı güncellendi ✓")}else{const{data:y,error:S}=await f.rpc("create_new_user",{p_email:p,p_password:a,p_full_name:t,p_username:n,p_role:i,p_target:o,p_color:s,p_progress:d,p_week_start:r,p_coach_id:null,p_institution_id:null,p_exam_profile:"YKS"});if(B(!1),S)return b("Hata: "+S.message);b("Kullanıcı başarıyla oluşturuldu ✓")}K("studentModal"),We()}let xe=[],me={search:"",exam:"",subject:""};function Vt(e){const t=me.search;return e.filter(n=>!(t&&!n.name.toLowerCase().includes(t)&&!(n.publisher||"").toLowerCase().includes(t)||me.exam&&n.exam_type!==me.exam||me.subject&&n.subject!==me.subject))}function ls(){var i,o,s;me.search=(((i=document.getElementById("crSearch"))==null?void 0:i.value)||"").toLowerCase().trim(),me.exam=((o=document.getElementById("crExam"))==null?void 0:o.value)||"",me.subject=((s=document.getElementById("crSubject"))==null?void 0:s.value)||"";const e=document.getElementById("cr-tab-content");if(!e)return;const t=document.querySelector(".cr-tab.active"),n=(t==null?void 0:t.id)==="crt-playlists"?"playlists":(t==null?void 0:t.id)==="crt-analytics"?"analytics":"books",a=Vt(xe);e.innerHTML=vt(n,a)}function vt(e,t){const n=t.filter(r=>r.resource_type==="book"),a=t.filter(r=>r.resource_type==="playlist"),i={Matematik:"#3B82F6",Fizik:"#8B5CF6",Kimya:"#06B6D4",Biyoloji:"#10B981",Geometri:"#6366F1",Türkçe:"#F59E0B",Edebiyat:"#EC4899",Tarih:"#EF4444",Coğrafya:"#84CC16",Felsefe:"#14B8A6","Din Kültürü":"#F97316",Din:"#F97316",Genel:"#6B7280"},o={Matematik:"∑",Fizik:"⚛",Kimya:"🧪",Biyoloji:"🌿",Geometri:"△",Türkçe:"T",Edebiyat:"✒",Tarih:"🏛",Coğrafya:"🌍",Felsefe:"💭","Din Kültürü":"☪",Din:"☪",Genel:"📌"};function s(r,d){if(!r.length)return'<div style="text-align:center;padding:48px;color:var(--text-dim);font-size:13px">Kaynak bulunamadı.</div>';const c={};return r.forEach(p=>{const m=p.exam_type||"Diğer";c[m]||(c[m]={});const g=p.subject||"Genel";c[m][g]||(c[m][g]=[]),c[m][g].push(p)}),Object.entries(c).map(([p,m])=>`
      <div style="margin-bottom:28px">
        <div style="display:flex;align-items:center;gap:8px;margin-bottom:12px">
          <span style="font-size:10px;font-weight:800;letter-spacing:1px;text-transform:uppercase;color:#fff;background:var(--accent);padding:3px 10px;border-radius:99px">${p}</span>
          <div style="flex:1;height:1px;background:var(--border)"></div>
        </div>
        <div style="display:flex;flex-direction:column;gap:16px">
        ${Object.entries(m).map(([g,y])=>{const S=i[g]||"#6B7280",I=o[g]||"📌";return`<div>
            <div style="display:flex;align-items:center;gap:6px;margin-bottom:7px">
              <div style="width:22px;height:22px;border-radius:6px;background:${S}20;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:800;color:${S};flex-shrink:0">${I}</div>
              <span style="font-size:12px;font-weight:700;color:${S}">${g}</span>
              <span style="font-size:10px;color:var(--text-dim)">${y.length} kaynak</span>
            </div>
            <div style="display:flex;flex-direction:column;gap:4px;padding-left:28px">
              ${y.map(v=>`
                <div style="display:flex;align-items:center;padding:10px 14px;border-radius:10px;background:var(--surface);border:1.5px solid var(--border);gap:12px;cursor:default;transition:all .15s;box-shadow:var(--shadow)" onmouseover="this.style.borderColor='${S}';this.style.boxShadow='0 2px 12px ${S}22'" onmouseout="this.style.borderColor='var(--border)';this.style.boxShadow='var(--shadow)'">
                  <div style="flex:1;min-width:0">
                    <div style="font-size:13px;font-weight:700;color:var(--text);margin-bottom:3px">${u(v.name)}${v.coach_id?' <span style="font-size:10px;font-weight:700;color:var(--accent);background:var(--accent-dim);padding:1px 6px;border-radius:99px;margin-left:4px">Özel</span>':""}</div>
                    <div style="display:flex;align-items:center;gap:6px;flex-wrap:wrap">
                      <span style="font-size:11px;font-weight:600;color:var(--text-dim);background:var(--surface2);padding:1px 8px;border-radius:99px;border:1px solid var(--border)">${u(v.publisher||"—")}</span>
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
            <div style="font-size:14px;font-weight:800;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;margin-bottom:8px">${u(d.name)}</div>
            <div style="display:flex;justify-content:space-between;font-size:11px;color:var(--text-mid);margin-bottom:6px"><span>Tamamlama</span><span style="font-weight:700;color:${p}">%${c}</span></div>
            <div style="height:5px;background:var(--surface3);border-radius:99px;overflow:hidden;margin-bottom:10px"><div style="height:100%;width:${c}%;background:${p};border-radius:99px"></div></div>
            <div style="display:flex;justify-content:space-between;font-size:11px;color:var(--text-dim)"><span>Atanma: <b>${d.assignedCount}</b></span><span>Öğrenci: <b>${d.studentsCount}</b></span></div>
          </div>`}).join("")||'<div style="grid-column:span 3;text-align:center;padding:40px;color:var(--text-dim)">Kayıtlı performans verisi bulunamadı.</div>'}
      </div>`}async function Je(){const e=document.getElementById("view-coach-resources");if(!e)return;if(!xe.length){e.innerHTML='<div style="max-width:720px;margin:0 auto;padding:40px;text-align:center;color:var(--text-dim);font-size:13px">Kaynaklar yükleniyor…</div>';const{data:a,error:i}=await f.from("resources").select("*").or(`coach_id.eq.${x.coachId},coach_id.is.null`).order("resource_type,exam_type,subject,name");i&&console.error(i),xe=a||[]}me={search:"",exam:"",subject:""};let t="books";const n=document.querySelector(".cr-tab.active");n&&(n.id==="crt-playlists"?t="playlists":n.id==="crt-analytics"&&(t="analytics")),e.innerHTML=`<div style="max-width:720px;margin:0 auto">
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
      ${vt(t,xe)}
    </div>
  </div>`}function ds(e){var n;document.querySelectorAll(".cr-tab").forEach(a=>a.classList.remove("active")),(n=document.getElementById("crt-"+e))==null||n.classList.add("active");const t=Vt(xe);document.getElementById("cr-tab-content").innerHTML=vt(e,t)}function aa(e){const t={};return e.forEach(n=>{t[n.name]={name:n.name,exam_type:n.exam_type,subject:n.subject,assignedCount:0,totalCount:0,doneCount:0,students:new Set}}),Object.entries(l.tasks).forEach(([n,a])=>{const i=n.split("_")[0];a.forEach(o=>{e.forEach(s=>{if(o.subject&&o.subject.includes(s.name)){const r=t[s.name];r&&(r.assignedCount++,r.students.add(i),o.task_items&&Array.isArray(o.task_items)?o.task_items.forEach(d=>{r.totalCount++,(d.done||o.done)&&r.doneCount++}):(r.totalCount++,o.done&&r.doneCount++))}})})}),Object.values(t).map(n=>({...n,studentsCount:n.students.size})).filter(n=>n.assignedCount>0).sort((n,a)=>a.assignedCount-n.assignedCount)}function cs(e,t="book"){const n=t==="playlist";let a=document.getElementById("coachResourceModal");a||(a=document.createElement("div"),a.id="coachResourceModal",a.className="modal-bg",a.innerHTML=`<div class="modal modal-lg">
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
Sayılar - Test 2 | 14`,document.getElementById("crmYtImportBox").style.display=n&&!e?"":"none",document.getElementById("crmTestsField").style.display=n?"none":"",document.getElementById("crmYtUrl").value="",document.getElementById("crmYtStatus").textContent="",document.getElementById("crmVideoPreview").style.display="none",document.getElementById("crmVideoPreview").innerHTML="",window._crmFetchedVideos=[],e?f.from("resources").select("*").eq("id",e).single().then(({data:i})=>{if(i){document.getElementById("crmExam").value=i.exam_type,document.getElementById("crmSubject").value=i.subject,document.getElementById("crmPublisher").value=i.publisher||"",document.getElementById("crmName").value=i.name||"";const o=i.tests||[];n?(document.getElementById("crmTestsField").style.display="",document.getElementById("crmTests").value=o.map(s=>`${s.label||s} | ${s.url||""} | ${s.soru||0}`).join(`
`)):document.getElementById("crmTests").value=o.map(s=>`${s.label||s} | ${s.soru||0}`).join(`
`)}}):(document.getElementById("crmExam").value="TYT",document.getElementById("crmSubject").value="Matematik",document.getElementById("crmPublisher").value="",document.getElementById("crmName").value="",document.getElementById("crmTests").value=""),N("coachResourceModal")}async function ps(){const e=document.getElementById("crmYtUrl").value.trim(),t=document.getElementById("crmYtStatus");if(!e)return t.innerHTML='<span style="color:var(--red)">⚠️ Playlist URL girin</span>';const n=e.match(/[?&]list=([^&]+)/);if(!n)return t.innerHTML='<span style="color:var(--red)">⚠️ list= parametresi bulunamadı</span>';const a=n[1];t.innerHTML="⏳ Çekiliyor...";try{let i=[],o="";do{let r=`/api/youtube?playlistId=${a}`;o&&(r+=`&pageToken=${o}`);const d=await fetch(r);if(!d.ok)throw new Error("Playlist çekilemedi.");const c=await d.json();c.items&&(i=i.concat(c.items)),o=c.nextPageToken||"",t.innerHTML=`⏳ ${i.length} video yükleniyor...`}while(o&&i.length<200);window._crmFetchedVideos=i;const s=document.getElementById("crmVideoPreview");if(s.style.display="",s.innerHTML=i.map((r,d)=>`
      <div style="display:flex;align-items:center;gap:8px;padding:7px 12px;border-bottom:1px solid var(--border)">
        <div style="width:20px;height:20px;border-radius:5px;background:var(--surface3);color:var(--text-mid);font-size:9px;font-weight:800;display:flex;align-items:center;justify-content:center;flex-shrink:0">${d+1}</div>
        <div style="flex:1;min-width:0">
          <div style="font-size:11px;font-weight:600;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${u(r.title)}</div>
          <div style="font-size:10px;color:var(--text-dim)">⏱ ${r.duration||"?"} dk</div>
        </div>
        <a href="${u(r.url)}" target="_blank" style="font-size:10px;font-weight:700;background:#cc000022;color:#ff5555;border:1px solid #aa222233;padding:3px 8px;border-radius:6px;text-decoration:none;flex-shrink:0">▶</a>
      </div>`).join(""),i.length>0&&!document.getElementById("crmName").value){const r=i[0].title;document.getElementById("crmName").value=r.split(" | ")[0].split(" - ")[0].trim().slice(0,50)}t.innerHTML=`<span style="color:var(--green)">✓ ${i.length} video çekildi!</span>`}catch(i){t.innerHTML=`<span style="color:var(--red)">⚠️ Hata: ${i.message}</span>`}}async function ms(){const e=document.getElementById("crmName").value.trim(),t=document.getElementById("crmSubject").value;if(!e||!t)return b("Ad ve ders zorunlu!");const n=document.getElementById("crmId").value,a=document.getElementById("crmType").value==="playlist",i=document.getElementById("crmTests").value.split(`
`).map(d=>d.trim()).filter(Boolean),o=window._crmFetchedVideos||[];let s=[];if(a){if(o.length>0?s=o.map(d=>({label:d.title||"",url:d.url||"",topic:"",soru:parseInt(d.duration)||0})):s=i.map(d=>{const c=d.split("|").map(p=>p.trim());return{label:c[0]||"",url:c[1]||"",topic:"",soru:parseInt(c[2])||0}}),!s.length)return b("Video listesi boş! Önce playlist çekin.")}else s=i.map(d=>{const c=d.split("|").map(p=>p.trim());return{label:c[0]||"",soru:parseInt(c[1])||0}});const r={exam_type:document.getElementById("crmExam").value,subject:t,publisher:document.getElementById("crmPublisher").value.trim(),year:new Date().getFullYear(),name:e,tests:s,active:!0,resource_type:a?"playlist":"book",coach_id:x.coachId};B(!0),n?(await f.from("resources").update(r).eq("id",n),b("Güncellendi ✓")):(await f.from("resources").insert(r),b("Kaynak eklendi ✓")),B(!1),K("coachResourceModal"),xe=[],Je()}async function us(e){await J("Bu kaynağı silmek istediğinizden emin misiniz?")&&(B(!0),await f.from("resources").delete().eq("id",e),B(!1),b("Silindi"),xe=[],Je())}function gs(e){const t=e.target.files[0];if(!t)return;B(!0);const n=new FileReader;n.onload=async a=>{try{const i=new Uint8Array(a.target.result),o=XLSX.read(i,{type:"array"}),s=o.SheetNames[0],r=o.Sheets[s],d=XLSX.utils.sheet_to_json(r);if(d.length===0)return B(!1),b("Excel dosyası boş!");const c={};d.forEach(g=>{const y=g["Kaynak Adı"]||g.Name||g["Kitap Adı"]||g["Playlist Adı"]||"",I=(g["Kaynak Türü"]||g.Type||g.Tür||"book").toLowerCase().includes("playlist")?"playlist":"book",v=g.Yayınevi||g.Publisher||g.Hoca||"",w=g.Sınav||g.Exam||"TYT",k=g.Ders||g.Subject||"",_=g["Öğe Adı"]||g.Test||g.Video||g["Test Adı"]||g["Video Adı"]||"",h=parseInt(g["Soru Sayısı"]||g.Soru||g.Süre||g["Süre (dk)"]||0),z=g.URL||g.Link||"";if(!y||!k||!_)return;const T=`${y}_${w}_${k}_${I}`;c[T]||(c[T]={exam_type:w,subject:k,publisher:v,name:y,resource_type:I,tests:[]}),c[T].tests.push({label:_,soru:h,url:z,topic:""})});const p=Object.values(c);if(p.length===0)return B(!1),b("Uyumlu veri bulunamadı! Sütun başlıklarını kontrol edin.");let m=0;for(const g of p){const{error:y}=await f.from("resources").insert({...g,year:new Date().getFullYear(),active:!0,coach_id:x.coachId});y||m++}B(!1),b(`✓ Excel'den ${m} kaynak başarıyla aktarıldı!`),xe=[],Je()}catch(i){B(!1),console.error(i),b("Excel okuma hatası: "+i.message)}},n.readAsArrayBuffer(t)}function vs(e){const t=e.target.files[0];if(!t)return;B(!0);const n=new FileReader;n.onload=async a=>{try{const i=new Uint8Array(a.target.result),o=XLSX.read(i,{type:"array"}),s=o.Sheets[o.SheetNames[0]],r=XLSX.utils.sheet_to_json(s);if(r.length===0)return B(!1),b("Excel dosyası boş!");let d=0;for(const c of r){const p=c["Ad Soyad"]||c.Ad||c.Name||"",m=c.Hedef||c.Target||"Hedef belirtilmemiş";let g=c["Kullanıcı Adı"]||c.Username||"",y=c.Şifre||c.Password||STU_DEFAULT_PASS;if(!p)continue;g||(g=p.toLowerCase().replace(/\s+/g,"")+Math.floor(Math.random()*100),g=_e(g));const S=await Me(y),I=g+"@rostrumakademi.com",{data:v,error:w}=await f.rpc("create_new_user",{p_email:I,p_password:y,p_full_name:p,p_username:g,p_role:"student",p_target:m,p_color:"#4da6ff",p_progress:0,p_week_start:0,p_coach_id:x.coachId,p_institution_id:null,p_exam_profile:"YKS"});!w&&v&&(l.students.push({id:v,name:p,target:m,color:"#4da6ff",progress:0,pass:S,weekStart:0,username:g}),d++)}B(!1),b(`✓ Excel'den ${d} öğrenci başarıyla eklendi!`),ue(),qe()}catch(i){B(!1),console.error(i),b("Excel okuma hatası: "+i.message)}},n.readAsArrayBuffer(t)}function ia(e){if(!l.activeStuId||!O)return null;let t=null;return Object.entries(l.tasks).forEach(([n,a])=>{n.startsWith(l.activeStuId+"_")&&a.forEach(i=>{i.subject&&i.subject.includes(O.name)&&(i.task_items&&Array.isArray(i.task_items)?i.task_items.forEach(o=>{(o.label||o)===e&&(o.done||i.done?t="done":t!=="done"&&(t="pending"))}):i.note&&i.note.includes(e)&&(i.done?t="done":t!=="done"&&(t="pending")))})}),t}async function ys(e,t){var d;const a=`${l.activeStuId}_${e}`,i=(d=l.tasks[a])==null?void 0:d[t];if(!i)return;Se=e,_editingTaskId=i._id,O=null,document.querySelector("#taskModal h2").innerHTML=`Görev Düzenle — <span id="tmDay">${e}</span>`,document.querySelector("#taskModal .btn-accent").textContent="Güncelle",document.getElementById("tmType").value=i.type,document.getElementById("tmExam").value=i.exam||"",document.getElementById("tmDuration").value=i.duration||60,document.getElementById("tmStartTime").value=i.start_time||"",document.getElementById("tmNote").value=i.note||"";const o=i.exam||"",s=i.type;{const c=document.getElementById("tmSubjectSel"),p=document.getElementById("tmSubjectFree");document.getElementById("tmBookVal").value="",document.getElementById("tmBookSearch").value="",document.getElementById("tmBookList").style.display="none",document.getElementById("tmTestWrap").style.display="none";const m=document.getElementById("tmTestSummary");m&&(m.style.display="none"),o&&typeof SUBJECT_MAP<"u"&&SUBJECT_MAP[o]?(c.innerHTML=SUBJECT_MAP[o].map(S=>`<option value="${S}">${S}</option>`).join(""),c.style.display="",p.style.display="none"):(c.style.display="none",p.style.display="");const g=(s==="soru"||s==="konu")&&o;document.getElementById("soruBankasiWrap").style.display=g?"":"none";const y=document.getElementById("tmBookSearch");y&&(y.placeholder=s==="konu"?"Hoca veya playlist ara...":"Kitap veya yayınevi ara...")}if((s==="soru"||s==="konu")&&o){const c=document.getElementById("tmSubjectSel");let p="",m=i.subject;if(i.subject.includes(" - ")){const I=i.subject.split(" - ");p=I[0].trim(),m=I.slice(1).join(" - ").trim()}p&&SUBJECT_MAP[o]&&SUBJECT_MAP[o].includes(p)&&(c.value=p),document.getElementById("tmBookVal").value=m,document.getElementById("tmBookSearch").value=m,B(!0),await wn(),B(!1);const g=`${o}_${p}`;let S=(ee[g]||[]).find(I=>I.name===m);if(S||Object.values(ee).forEach(I=>{const v=I.find(w=>w.name===m);v&&(S=v)}),S){O=S,document.getElementById("tmTestWrap").style.display="",Lt();const I=(i.task_items||[]).map(w=>w.label||w);document.querySelectorAll("#tmTestList input[type=checkbox]").forEach(w=>{var h;const k=parseInt(w.value),_=((h=O.testler[k])==null?void 0:h.label)||O.testler[k];I.includes(_)?w.checked=!0:w.checked=!1}),je()}}else{const c=document.getElementById("tmSubjectSel"),p=document.getElementById("tmSubjectFree");c.style.display!=="none"?c.value=i.subject:p.value=i.subject,document.getElementById("tmBookVal").value="",document.getElementById("tmBookSearch").value="",document.getElementById("tmBookList").style.display="none",document.getElementById("tmTestWrap").style.display="none"}N("taskModal")}async function fs(){const e=prompt("Şablon adı giriniz:");if(!e)return;const t=l.students.find(s=>s.id===l.activeStuId),n=(t==null?void 0:t.weekStart)??0,a=V(l.weekOffset,n),i=[];for(let s=0;s<7;s++){const r=G(a,s),d=H(r),c=`${l.activeStuId}_${d}`;(l.tasks[c]||[]).forEach(m=>{i.push({day_index:s,type:m.type,exam_type:m.exam||null,subject:m.subject,duration:m.duration,note:m.note||"",task_items:m.task_items||null})})}if(i.length===0)return b("Bu haftada kaydedilecek görev bulunmuyor!");B(!0);const{error:o}=await f.from("program_templates").insert({coach_id:x.coachId,name:e,description:`${i.length} görev içeriyor.`,tasks:i});if(B(!1),o)return b("Şablon kaydedilemedi: "+o.message);b("Hafta şablon olarak kaydedildi ✓")}async function xs(){B(!0);const{data:e,error:t}=await f.from("program_templates").select("*").eq("coach_id",x.coachId);if(B(!1),t)return b("Şablonlar yüklenemedi.");if(!e||e.length===0)return b("Kayıtlı şablonunuz bulunmuyor. Önce haftayı şablon olarak kaydedin.");let n=document.getElementById("applyTemplateModal");n||(n=document.createElement("div"),n.id="applyTemplateModal",n.className="modal-bg",n.innerHTML=`<div class="modal">
      <button class="modal-close" onclick="cm('applyTemplateModal')">×</button>
      <h2>Şablon Uygula</h2>
      <div class="field"><label>Şablon Seçin</label>
        <select id="atmSelect"></select>
      </div>
      <button class="btn btn-accent" style="width:100%;justify-content:center;padding:12px;margin-top:12px" onclick="confirmApplyTemplate()">Uygula</button>
    </div>`,document.body.appendChild(n),n.addEventListener("click",a=>{a.target===n&&n.classList.remove("open")})),document.getElementById("atmSelect").innerHTML=e.map(a=>`<option value="${a.id}">${u(a.name)} (${a.tasks.length} Görev)</option>`).join(""),N("applyTemplateModal")}async function bs(){const e=document.getElementById("atmSelect").value;if(!e)return;B(!0);const{data:t,error:n}=await f.from("program_templates").select("*").eq("id",e).single();if(n||!t)return B(!1),b("Şablon yüklenemedi.");const a=l.students.find(s=>s.id===l.activeStuId),i=(a==null?void 0:a.weekStart)??0,o=V(l.weekOffset,i);for(const s of t.tasks){const r=H(G(o,s.day_index)),d={student_id:l.activeStuId,coach_id:x.coachId,date:r,type:s.type,exam_type:s.exam_type,subject:s.subject,duration:s.duration,note:s.note,done:!1,task_items:s.task_items},{data:c,error:p}=await f.from("tasks").insert(d).select().single();if(!p&&c){const m=`${l.activeStuId}_${r}`;l.tasks[m]||(l.tasks[m]=[]),l.tasks[m].push({_id:c.id,type:c.type,exam:c.exam_type,subject:c.subject,duration:c.duration,note:c.note,done:!1,student_note:"",task_items:c.task_items})}}B(!1),K("applyTemplateModal"),q(),b("Şablon başarıyla uygulandı ✓")}function hs(e,t){var o;const a=`${l.activeStuId}_${e}`,i=(o=l.tasks[a])==null?void 0:o[t];i&&(_clipboardTask={type:i.type,exam:i.exam,subject:i.subject,duration:i.duration,note:i.note,task_items:i.task_items},b("Görev panoya kopyalandı ✓"),q())}async function ks(e){if(!_clipboardTask)return;const t={student_id:l.activeStuId,coach_id:x.coachId,date:e,type:_clipboardTask.type,exam_type:_clipboardTask.exam||null,subject:_clipboardTask.subject,duration:_clipboardTask.duration,note:_clipboardTask.note,done:!1,task_items:_clipboardTask.task_items};B(!0);const{data:n,error:a}=await f.from("tasks").insert(t).select().single();if(B(!1),a)return b("Hata: "+a.message);const i=`${l.activeStuId}_${e}`;l.tasks[i]||(l.tasks[i]=[]),l.tasks[i].push({_id:n.id,type:n.type,exam:n.exam_type,subject:n.subject,duration:n.duration,note:n.note,done:!1,student_note:"",task_items:n.task_items}),q(),b("Görev yapıştırıldı ✓")}async function ws(e,t){var p;const n=`${l.activeStuId}_${e}`,a=(p=l.tasks[n])==null?void 0:p[t];if(!a)return;const i=l.students.find(m=>m.id===l.activeStuId),o=(i==null?void 0:i.weekStart)??0,s=V(l.weekOffset,o),r=[];for(let m=0;m<7;m++){const g=G(s,m),y=H(g);y!==e&&r.push({student_id:l.activeStuId,coach_id:x.coachId,date:y,type:a.type,exam_type:a.exam||null,subject:a.subject,duration:a.duration,note:a.note,done:!1,task_items:a.task_items})}if(r.length===0)return;B(!0);const{data:d,error:c}=await f.from("tasks").insert(r).select();if(B(!1),c)return b("Hata: "+c.message);(d||[]).forEach(m=>{const g=`${l.activeStuId}_${m.date}`;l.tasks[g]||(l.tasks[g]=[]),l.tasks[g].push({_id:m.id,type:m.type,exam:m.exam_type,subject:m.subject,duration:m.duration,note:m.note,done:!1,student_note:"",task_items:m.task_items})}),q(),b("Görev tüm haftaya kopyalandı ✓")}async function $s(){if(!_clipboardTask)return;const e=l.students.find(s=>s.id===l.activeStuId),t=(e==null?void 0:e.weekStart)??0,n=V(l.weekOffset,t),a=[];for(let s=0;s<7;s++){const r=G(n,s),d=H(r);a.push({student_id:l.activeStuId,coach_id:x.coachId,date:d,type:_clipboardTask.type,exam_type:_clipboardTask.exam||null,subject:_clipboardTask.subject,duration:_clipboardTask.duration,note:_clipboardTask.note,done:!1,task_items:_clipboardTask.task_items})}B(!0);const{data:i,error:o}=await f.from("tasks").insert(a).select();if(B(!1),o)return b("Hata: "+o.message);(i||[]).forEach(s=>{const r=`${l.activeStuId}_${s.date}`;l.tasks[r]||(l.tasks[r]=[]),l.tasks[r].push({_id:s.id,type:s.type,exam:s.exam_type,subject:s.subject,duration:s.duration,note:s.note,done:!1,student_note:"",task_items:s.task_items})}),_clipboardTask=null,q(),b("Görev tüm haftaya yapıştırıldı ✓")}Vn();Yt();window.addEventListener("hashchange",()=>{let e=window.location.hash.substring(1);if(document.getElementById("appShell").classList.contains("visible")&&e!==currentTab){if(!e){e={coach:"home",student:"portal",developer:"home",parent:"parent-home"}[x.role]||"portal",window.location.hash=e;return}document.getElementById("view-"+e)&&Q(e,!1)}});async function Zt(){const e=document.getElementById("view-coach-applications");if(!e)return;e.innerHTML=`<div style="padding:24px;max-width:800px;margin:0 auto">
    <div style="font-family:'Inter',sans-serif;font-size:22px;font-weight:800;margin-bottom:4px">Eşleşme Başvuruları</div>
    <div style="font-size:13px;color:var(--text-mid);margin-bottom:20px">koc-bul sayfasından gelen öğrenci başvuruları</div>
    <div id="appsList" style="display:flex;flex-direction:column;gap:10px">
      <div style="text-align:center;padding:32px;color:var(--text-dim)">Yükleniyor...</div>
    </div>
  </div>`;const{data:t,error:n}=await f.from("match_requests").select("*").eq("matched_coach_id",x.coachId).order("created_at",{ascending:!1}),a=document.getElementById("appsList");if(n||!t){a.innerHTML=`<div style="padding:20px;color:var(--red);background:var(--red-dim);border-radius:10px">Başvurular yüklenemedi: ${(n==null?void 0:n.message)||"Bilinmeyen hata"}</div>`;return}if(t.length===0){a.innerHTML=`<div style="text-align:center;padding:40px;color:var(--text-dim)">
      <div style="font-size:32px;margin-bottom:12px">📭</div>
      <div style="font-size:14px;font-weight:600">Henüz başvuru yok</div>
      <div style="font-size:12px;margin-top:4px">Koc-bul sayfasındaki profilinize öğrenci başvurduğunda burada görünecek.</div>
    </div>`;const d=document.querySelector("#sbi_coach-applications .sb-badge");d&&d.remove();return}const i={pending:"#f0a500",accepted:"#3ecf8e",rejected:"#ff5c7a"},o={pending:"Beklemede",accepted:"Kabul Edildi",rejected:"Reddedildi"};a.innerHTML=t.map(d=>`
    <div style="background:var(--surface);border:1px solid var(--border);border-radius:14px;padding:18px 20px">
      <div style="display:flex;align-items:flex-start;justify-content:space-between;gap:12px;margin-bottom:12px">
        <div>
          <div style="font-size:15px;font-weight:700">${u(d.student_name||"İsimsiz")}</div>
          <div style="font-size:11px;color:var(--text-dim);margin-top:2px">${new Date(d.created_at).toLocaleDateString("tr-TR",{day:"numeric",month:"long",year:"numeric",hour:"2-digit",minute:"2-digit"})}</div>
        </div>
        <span style="font-size:11px;font-weight:700;padding:3px 10px;border-radius:99px;background:${i[d.status]||"#888"}22;color:${i[d.status]||"#888"};white-space:nowrap">
          ${o[d.status]||d.status}
        </span>
      </div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:14px">
        <div style="background:var(--surface2);border-radius:8px;padding:10px 12px">
          <div style="font-size:10px;color:var(--text-dim);font-weight:700;text-transform:uppercase;letter-spacing:.5px;margin-bottom:3px">E-posta</div>
          <a href="mailto:${u(d.email||"")}" style="font-size:13px;font-weight:600;color:var(--accent);text-decoration:none">${u(d.email||"—")}</a>
        </div>
        <div style="background:var(--surface2);border-radius:8px;padding:10px 12px">
          <div style="font-size:10px;color:var(--text-dim);font-weight:700;text-transform:uppercase;letter-spacing:.5px;margin-bottom:3px">Telefon</div>
          <a href="tel:${u(d.phone||"")}" style="font-size:13px;font-weight:600;color:var(--text);text-decoration:none">${u(d.phone||"—")}</a>
        </div>
        <div style="background:var(--surface2);border-radius:8px;padding:10px 12px">
          <div style="font-size:10px;color:var(--text-dim);font-weight:700;text-transform:uppercase;letter-spacing:.5px;margin-bottom:3px">Sınav Grubu</div>
          <div style="font-size:13px;font-weight:600">${u(d.exam_profile||"—")}</div>
        </div>
        ${d.style?`<div style="background:var(--surface2);border-radius:8px;padding:10px 12px">
          <div style="font-size:10px;color:var(--text-dim);font-weight:700;text-transform:uppercase;letter-spacing:.5px;margin-bottom:3px">Koçluk Tercihi</div>
          <div style="font-size:12px;color:var(--text-mid)">${u(d.style)}</div>
        </div>`:""}
      </div>
      ${d.status==="pending"?`
      <div style="display:flex;gap:8px">
        <button onclick="updateApplication('${d.id}','accepted','${u(d.email||"")}','${u(d.student_name||"")}')" style="flex:1;padding:9px;background:rgba(62,207,142,.12);color:#3ecf8e;border:1px solid rgba(62,207,142,.25);border-radius:8px;font-size:12px;font-weight:700;cursor:pointer">✓ Kabul Et</button>
        <button onclick="updateApplication('${d.id}','rejected','${u(d.email||"")}','${u(d.student_name||"")}')" style="flex:1;padding:9px;background:rgba(255,92,122,.08);color:#ff5c7a;border:1px solid rgba(255,92,122,.2);border-radius:8px;font-size:12px;font-weight:700;cursor:pointer">✗ Reddet</button>
      </div>`:""}
    </div>`).join("");const s=t.filter(d=>d.status==="pending").length,r=document.getElementById("sbi_coach-applications");if(r){const d=r.querySelector(".sb-badge");if(d&&d.remove(),s>0){const c=document.createElement("span");c.className="sb-badge",c.textContent=s,r.appendChild(c)}}}async function Ts(e,t,n,a){var o;const{error:i}=await f.from("match_requests").update({status:t}).eq("id",e);if(i)return b("Hata: "+i.message);b(t==="accepted"?"✓ Başvuru kabul edildi":"Başvuru reddedildi"),n&&fetch("/api/mailer",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({type:"application_update",to:n,student_name:a||"",status:t,coach_name:((o=l.workspace)==null?void 0:o.brand_name)||"Koçunuz"})}).catch(s=>console.warn("[updateApplication] mail error:",s.message)),Zt()}let Be=null;async function oa(){var a;const e=document.getElementById("view-coach-notes");if(!e)return;e.innerHTML=`<div style="padding:24px;max-width:860px;margin:0 auto">
    <div style="font-family:'Inter',sans-serif;font-size:22px;font-weight:800;margin-bottom:4px">Notlarım</div>
    <div style="font-size:13px;color:var(--text-mid);margin-bottom:20px">Kişisel notlar — sadece sen görürsün</div>
    <div style="display:flex;gap:10px;margin-bottom:18px">
      <button onclick="openNoteEditor(null)" style="padding:8px 18px;background:var(--accent);color:#fff;border:none;border-radius:8px;font-size:13px;font-weight:700;cursor:pointer">+ Yeni Not</button>
    </div>
    <div id="coachNotesList" style="display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:12px">
      <div style="grid-column:1/-1;text-align:center;padding:32px;color:var(--text-dim)">Yükleniyor...</div>
    </div>
  </div>`;const t=`coach_notes_${x.coachId}`,{data:n}=await f.from("platform_settings").select("value").eq("key",t).maybeSingle();Be=((a=n==null?void 0:n.value)==null?void 0:a.notes)||[],Jt()}function Jt(){const e=document.getElementById("coachNotesList");if(!e)return;const t=Be;if(!t.length){e.innerHTML=`<div style="grid-column:1/-1;text-align:center;padding:48px;color:var(--text-dim)">
      <div style="font-size:36px;margin-bottom:12px">📝</div>
      <div style="font-size:14px;font-weight:600">Henüz not yok</div>
      <div style="font-size:12px;margin-top:4px">+ Yeni Not ile başla</div>
    </div>`;return}const n=["#f0a50018","#3ecf8e18","#4da6ff18","#c084fc18","#ff5c7a18"];e.innerHTML=t.map((a,i)=>`
    <div style="background:${n[i%n.length]};border:1px solid var(--border);border-radius:14px;padding:16px;cursor:pointer;position:relative;transition:border-color .15s"
      onmouseover="this.style.borderColor='var(--accent)'" onmouseout="this.style.borderColor='var(--border)'"
      onclick="openNoteEditor(${i})">
      <div style="display:flex;align-items:flex-start;justify-content:space-between;gap:8px;margin-bottom:8px">
        <div style="font-size:13px;font-weight:700;color:var(--text)">${u(a.title||"Başlıksız")}</div>
        <button onclick="event.stopPropagation();deleteCoachNote(${i})" style="background:none;border:none;cursor:pointer;color:var(--text-dim);font-size:16px;padding:0;line-height:1;flex-shrink:0">✕</button>
      </div>
      <div style="font-size:12px;color:var(--text-mid);white-space:pre-wrap;line-height:1.5;max-height:100px;overflow:hidden">${u(a.body||"")}</div>
      <div style="font-size:10px;color:var(--text-dim);margin-top:10px">${a.updated?new Date(a.updated).toLocaleDateString("tr-TR",{day:"numeric",month:"short",year:"numeric"}):""}</div>
    </div>`).join("")}function Es(e){const t=e!==null?Be[e]||{}:{};let n=document.getElementById("coachNoteModal");n||(n=document.createElement("div"),n.id="coachNoteModal",n.className="modal-bg",document.body.appendChild(n)),n.innerHTML=`<div class="modal" style="max-width:520px">
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:16px">
      <div style="font-size:16px;font-weight:800">${e===null?"Yeni Not":"Notu Düzenle"}</div>
      <button onclick="document.getElementById('coachNoteModal').style.display='none'" style="background:none;border:none;cursor:pointer;font-size:20px;color:var(--text-dim)">✕</button>
    </div>
    <input id="noteEditorTitle" value="${u(t.title||"")}" placeholder="Başlık..." style="width:100%;padding:10px 12px;background:var(--surface2);border:1px solid var(--border);border-radius:8px;color:var(--text);font-size:14px;font-weight:600;box-sizing:border-box;margin-bottom:10px">
    <textarea id="noteEditorBody" rows="8" placeholder="Not içeriği..." style="width:100%;padding:10px 12px;background:var(--surface2);border:1px solid var(--border);border-radius:8px;color:var(--text);font-size:13px;line-height:1.6;resize:vertical;box-sizing:border-box;font-family:inherit">${u(t.body||"")}</textarea>
    <div style="display:flex;gap:8px;margin-top:14px">
      <button onclick="saveCoachNote(${e})" style="flex:1;padding:10px;background:var(--accent);color:#fff;border:none;border-radius:8px;font-size:13px;font-weight:700;cursor:pointer">Kaydet</button>
      <button onclick="document.getElementById('coachNoteModal').style.display='none'" style="padding:10px 16px;background:var(--surface2);color:var(--text);border:1px solid var(--border);border-radius:8px;font-size:13px;cursor:pointer">İptal</button>
    </div>
  </div>`,n.style.display="flex"}async function Ss(e){const t=document.getElementById("noteEditorTitle").value.trim(),n=document.getElementById("noteEditorBody").value.trim();if(!t&&!n)return b("Not boş olamaz");const a={title:t||"Başlıksız",body:n,updated:new Date().toISOString()};e===null?Be.unshift(a):Be[e]=a,await sa(),document.getElementById("coachNoteModal").style.display="none",Jt(),b("Not kaydedildi ✓")}async function _s(e){await J("Bu notu silmek istiyor musun?")&&(Be.splice(e,1),await sa(),Jt(),b("Not silindi"))}async function sa(){const e=`coach_notes_${x.coachId}`;await f.from("platform_settings").upsert({key:e,value:{notes:Be}},{onConflict:"key"})}window.toggleSidebar=Ba;window.setupShell=Aa;window.switchTab=Q;window.renderHome=gn;window.renderCoachApplications=Zt;window.updateApplication=Ts;window.renderCoachNotes=oa;window.openNoteEditor=Es;window.toggleNewResourceMode=ni;window.addManualTest=ai;window.removeManualTest=ii;window.saveCoachNote=Ss;window.deleteCoachNote=_s;window.renderStudentsSearch=qe;window.filterStudentSearch=Da;window.openStudentDetail=vn;window.openKonuHaritasi=ja;window.openStudentProgram=At;window.openStudentExams=Pa;window.openStudentAppointments=Ra;window.renderProfile=xn;window.saveProfile=Fa;window.renderSettings=bn;window.saveGeminiKey=Ga;window.renderProgram=q;window.selectStu=qa;window.chWeek=Ua;window.goToday=Wa;window.openClearWeekModal=Za;window.toggleDaySel=Ja;window.toggleAllDays=Xa;window.confirmClearDays=Qa;window.openTaskModal=oi;window.loadResources=wn;window.updateSubjectList=Ct;window.updateBookList=si;window.renderBookList=dt;window.filterBooks=ri;window.selectBook=li;window.renderTestList=Lt;window.selectAllTests=di;window.clearAllTests=ci;window.updateTestSummary=je;window.selectModalSpeed=pi;window.applyDuration=mi;window.loadStudentSpeeds=$n;window.saveStudentSpeed=Tn;window.saveTask=ui;window.toggleTask=gi;window.closeTaskMenu=jt;window.showTaskMenu=vi;window.copyTask=yi;window.deleteTask=fi;window.renderTodoList=In;window.renderStudents=Bn;window.goProgram=Ii;window.openStudentModal=zi;window.saveStudent=Bi;window.showInviteInfo=Mn;window.copyInvite=Ai;window.deleteStu=Di;window.renderAppointments=Ue;window.renderCalDays=ct;window.selCalDay=Ci;window.chCalMonth=Li;window.renderApptList=Pt;window.openApptModal=ji;window.saveAppt=Pi;window.deleteAppt=Ri;window.renderExams=Pe;window.openCommentModal=Ki;window.saveComment=Oi;window.deleteExam=Fi;window.renderMessages=Pn;window.selectThread=Gi;window.renderThreadHTML=be;window.sendMsg=qi;window.scrollMsgs=he;window.renderPortal=pt;window.stuToggleTask=Ui;window.renderSPortal=ke;window.stuToggleTask2=Wi;window.chWeekS=Vi;window.openTaskDetail=Rt;window.toggleTaskDetail=Zi;window.toggleDetailItem=Ji;window.selectVideoSpeed=Xi;window.saveTaskDetail=Qi;window.renderSExams=Ht;window.openStudentExamModal=Rn;window.openExamModal=eo;window.renderNetInputs=Yt;window.saveExam=ao;window.renderSMessages=Tt;window.initRealtime=Nt;window.destroyRealtime=Kt;window.renderDevDashboard=Yn;window.renderDevUsers=We;window.openDevUserModal=oo;window.devDeleteUser=so;window.openPlanModal=ro;window.savePlan=lo;window.renderDevResources=Ve;window.openPlaylistModal=co;window.fetchYouTubePlaylist=po;window.savePlaylist=mo;window.openResourceModal=uo;window.saveResource=go;window.devDeleteResource=vo;window.renderDevFinance=mt;window.openPaymentModal=yo;window.savePayment=fo;window.openSubModal=xo;window.saveSub=bo;window.renderDevAnnounce=Ze;window.openAnnounceModal=ho;window.saveAnnounce=ko;window.toggleAnnounce=wo;window.devDeleteAnnounce=$o;window.renderDevTickets=Re;window.updateTicketStatus=Io;window.devDeleteTicket=zo;window.selectDevTicket=To;window.sendDevReply=_o;window.openSupportTicket=Bo;window.openSupportChat=ut;window.closeSupportChat=Nn;window.startAISupportChat=Mo;window.startEminSupportChat=Ao;window.submitEminInitialMessage=Do;window.sendSupportMessage=Co;window.openSupportChatDirect=ut;window.checkCoachSubscription=Mt;window.showTrialExpiredScreen=at;window.loadAnnouncements=Kn;window.saveStudentDev=rs;window.showOnboarding=On;window.renderOnboardingStep=Ot;window.advanceOnboarding=Lo;window.renderSProfil=Fn;window.saveStudentProfile=jo;window.changePassword=Po;window.renderCoachProfile=Gn;window.updateProfilePreview=Ft;window.switchPreviewTab=Ro;window.nl2br=qn;window.saveCoachProfile=Ho;window.renderDevMatches=Gt;window.updateMatchRequestStatus=Yo;window.openSpeedModal=No;window.saveAllSpeeds=Ko;window.openStudentNotes=Oo;window.saveStudentNote=Fo;window.openReportModal=Go;window.getReportDates=qt;window.buildReportHTML=Ut;window.previewReport=qo;window.generatePDF=Uo;window.openWeeklyPDFModal=Vo;window.generateWeeklyPDF=Zo;window.printWeeklyProgramWithNote=Un;window.generateMeetLink=Jo;window.generateZoomLink=Xo;window.copyToClipboard=Qo;window.loadTheme=Vn;window.applyAccent=Zn;window.setTheme=es;window.openThemePanel=ts;window.initAIChatForRole=Jn;window.toggleAIChat=ns;window.aiQuickSend=as;window.buildAIContext=St;window.addAIMessage=Ee;window.sendAIMessage=Xn;window.autoDetectModel=Qn;window.callGeminiFallback=ze;window.generateAICopilotDraft=is;window.checkCopilotDraftEdited=os;window.sendCopilotDraft=ss;window.renderParentHome=ea;window.renderParentProgress=ta;window.renderParentAI=na;window.applyResFilter=Vt;window.updateCRFilter=ls;window.buildCRContent=vt;window.renderCoachResources=Je;window.switchCRTab=ds;window.compileResourceStats=aa;window.openResourceModalCoach=cs;window.fetchYtPlaylistCoach=ps;window.saveResourceCoach=ms;window.deleteResourceCoach=us;window.importResourcesFromExcel=gs;window.importStudentsFromExcel=vs;window.getTestStatus=ia;window.openCoachTaskEdit=ys;window.saveWeekAsTemplate=fs;window.applyTemplateToWeek=xs;window.confirmApplyTemplate=bs;window.copyTaskToClipboard=hs;window.pasteTaskFromClipboard=ks;window.copyTaskToWholeWeek=ws;window.pasteTaskToWholeWeek=$s;window.sendWhatsAppReport=Wo;window.toggleUserMenu=Ma;window.closeUserMenu=un;window.renderAgenda=ve;window.openAgendaApptModal=zn;window.deleteAgendaAppt=_i;window.agendaPrev=ki;window.agendaNext=wi;window.agendaToday=$i;window.agendaSetFilter=Ti;window.exportAgendaICS=Ei;window.openApptPopup=_n;window.handleApptDrop=Si;window.openStudentKaynaklar=Ha;window.addStudentBook=Ya;window.editStudentBook=Na;window.sbUpdatePct=fn;window.saveStudentBook=Ka;window.deleteStudentBook=Oa;async function Is(){const e=document.getElementById("rpStuId").value,t=l.students.find(m=>m.id===e);if(!t)return;const n=document.getElementById("rpPeriod").value,{start:a,end:i}=qt(),o=document.getElementById("rpNote").value.trim();let s="Performans Raporu";n==="weekly"?s="Haftalık Performans Raporu":n==="monthly"?s="Aylık Performans Raporu":s="Özel Dönem Performans Raporu";const r=`${s} (${a} - ${i})`,d=o||"Değerlendirme notu eklenmedi.";B(!0);const c=x.coachId||t.coachId,{error:p}=await f.from("reports").insert({student_id:e,coach_id:c,type:"performance",title:r,content:d,start_date:a,end_date:i});B(!1),p?b("Rapor kaydedilirken hata oluştu: "+p.message):(b("Rapor başarıyla geçmişe kaydedildi! ✓"),K("reportModal"))}async function ra(e){const t=l.students.find(s=>s.id===e);if(!t)return;l.activeStuId=e,currentTab!=="student-detail"&&Q("student-detail");const n=document.getElementById("view-student-detail");n.innerHTML=`<button class="back-link" onclick="openStudentDetail('${e}')">← ${u(t.name)}</button>
    <div style="padding:20px;color:var(--text-mid);font-size:13px">Raporlar yükleniyor…</div>`;const{data:a,error:i}=await f.from("reports").select("*").eq("student_id",e).order("created_at",{ascending:!1});if(i){n.innerHTML=`<button class="back-link" onclick="openStudentDetail('${e}')">← ${u(t.name)}</button>
      <div style="padding:20px;color:var(--red);font-size:13px">Hata: ${i.message}</div>`;return}let o=`
    <button class="back-link" onclick="openStudentDetail('${e}')">← ${u(t.name)}</button>
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
          <h4 style="font-size:14px;font-weight:700;color:var(--text);margin-bottom:4px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${u(s.title)}</h4>
          <div style="font-size:11px;color:var(--text-dim)">Oluşturulma: ${c}</div>
        </div>
        <div style="display:flex;gap:8px">
          <button class="btn btn-ghost btn-sm" onclick="viewArchivedReport('${s.id}')">Görüntüle</button>
          ${x.role==="coach"||x.role==="developer"?`<button class="btn btn-danger btn-sm" style="background:#ef4444;border-color:#ef4444;color:#fff" onclick="deleteArchivedReport('${s.id}', '${e}')">Sil</button>`:""}
        </div>
      </div>
    `}),o+="</div></div>",n.innerHTML=o}async function zs(e){B(!0);const{data:t,error:n}=await f.from("reports").select("*").eq("id",e).single();if(B(!1),n||!t)return b("Rapor yüklenemedi: "+((n==null?void 0:n.message)||"Bulunamadı"));let a=document.getElementById("viewReportDetailModal");a||(a=document.createElement("div"),a.id="viewReportDetailModal",a.className="modal-bg",document.body.appendChild(a),a.addEventListener("click",s=>{s.target===a&&a.classList.remove("open")}));const i=t.type==="ai_copilot"?"🧠":"📄",o=new Date(t.created_at).toLocaleDateString("tr-TR",{day:"numeric",month:"long",year:"numeric",hour:"2-digit",minute:"2-digit"});a.innerHTML=`
    <div class="modal" style="max-width:600px; max-height:85vh; overflow-y:auto">
      <button class="modal-close" onclick="cm('viewReportDetailModal')">×</button>
      <div style="display:flex;align-items:center;gap:10px;margin-bottom:12px;border-bottom:1px solid var(--border);padding-bottom:12px">
        <span style="font-size:24px">${i}</span>
        <div>
          <h3 style="font-family:'Syne',sans-serif;font-size:16px;font-weight:800;color:var(--text)">${u(t.title)}</h3>
          <div style="font-size:11px;color:var(--text-dim)">Oluşturulma Tarihi: ${o}</div>
        </div>
      </div>
      <div style="background:var(--surface2);border:1px solid var(--border);border-radius:12px;padding:20px;font-size:13px;line-height:1.7;color:var(--text);white-space:pre-wrap;overflow-y:auto;max-height:450px">${u(t.content)}</div>
      <div style="display:flex;justify-content:flex-end;margin-top:16px;gap:8px">
        <button class="btn btn-ghost" onclick="cm('viewReportDetailModal')">Kapat</button>
        <button class="btn btn-accent" onclick="printActiveReport()">Yazdır / Paylaş</button>
      </div>
    </div>
  `,N("viewReportDetailModal")}function Bs(){const e=document.getElementById("viewReportDetailModal");if(!e)return;const t=e.querySelector("h3").textContent,n=e.querySelector("div div").textContent,a=e.querySelector('div[style*="pre-wrap"]').textContent,i=window.open("","_blank");i.document.write(`
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
  `),i.document.close()}async function Ms(e,t){if(!await J("Bu raporu kalıcı olarak silmek istediğinize emin misiniz?"))return;B(!0);const{error:a}=await f.from("reports").delete().eq("id",e);B(!1),a?b("Rapor silinirken hata oluştu: "+a.message):(b("Rapor başarıyla silindi ✓"),ra(t))}window.archivePerformanceReport=Is;window.openPastReports=ra;window.viewArchivedReport=zs;window.printActiveReport=Bs;window.deleteArchivedReport=Ms;window.loadTheme&&window.loadTheme();window.renderNetInputs&&window.renderNetInputs();window.checkOAuthSession&&window.checkOAuthSession();const As=new URLSearchParams(window.location.search);if(As.get("sandbox")==="true")window.simOAuthLogin&&setTimeout(()=>{console.log("Sandbox auto-login triggered for demokoc..."),window.simOAuthLogin("demokoc")},300);else if(window.location.search.includes("sandbox")||window.location.hash==="#sandbox"){const e=document.getElementById("demoQuickWrap");e&&(e.style.display="flex"),window.showGoogleSimulator&&setTimeout(()=>window.showGoogleSimulator(),300)}"serviceWorker"in navigator&&window.addEventListener("load",()=>{navigator.serviceWorker.register("/sw.js").then(e=>{console.log("Service Worker başarıyla kaydedildi ✓",e.scope)}).catch(e=>{console.warn("Service Worker kaydı başarısız oldu:",e)})});window.addEventListener("hashchange",()=>{let e=window.location.hash.substring(1);if(document.getElementById("appShell").classList.contains("visible")&&e!==window.currentTab){if(!e){e={coach:"home",student:"portal",developer:"home",parent:"parent-home"}[window.session.role]||"portal",window.location.hash=e;return}document.getElementById("view-"+e)&&window.switchTab(e,!1)}});console.log("Rostrum Akademi App initialized successfully ✓");
