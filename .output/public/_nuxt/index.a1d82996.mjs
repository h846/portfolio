import{i as R,r as C,a as J,b as K,e as U,w as W,f as X,u as G,h as Q,j as A,o as g,k as F,p as $,l as V,m as n,q as w,s as N,t as T,v as r,F as S,x as P,y as j,z as I,A as t,B as p,c as M,C as L,D as O,E as Y,G as Z}from"./entry.867a6694.mjs";const ee=u=>R(u)?u:C(u),te=()=>null;function ue(...u){var l,m,B,D,y,x,k;const c=typeof u[u.length-1]=="string"?u.pop():void 0;typeof u[0]!="string"&&u.unshift(c);let[a,_,e={}]=u;if(typeof a!="string")throw new TypeError("[nuxt] [asyncData] key must be a string.");if(typeof _!="function")throw new TypeError("[nuxt] [asyncData] handler must be a function.");e.server=(l=e.server)!=null?l:!0,e.default=(m=e.default)!=null?m:te,e.defer&&console.warn("[useAsyncData] `defer` has been renamed to `lazy`. Support for `defer` will be removed in RC."),e.lazy=(D=(B=e.lazy)!=null?B:e.defer)!=null?D:!1,e.initialCache=(y=e.initialCache)!=null?y:!0;const o=J(),d=X();if(d&&!d._nuxtOnBeforeMountCbs){const f=d._nuxtOnBeforeMountCbs=[];d&&(K(()=>{f.forEach(s=>{s()}),f.splice(0,f.length)}),U(()=>f.splice(0,f.length)))}const v=()=>e.initialCache&&o.payload.data[a]!==void 0,i={data:ee((x=o.payload.data[a])!=null?x:e.default()),pending:C(!v()),error:C((k=o.payload._errors[a])!=null?k:null)};i.refresh=(f={})=>o._asyncDataPromises[a]?o._asyncDataPromises[a]:f._initial&&v()?o.payload.data[a]:(i.pending.value=!0,o._asyncDataPromises[a]=new Promise((s,z)=>{try{s(_(o))}catch(H){z(H)}}).then(s=>{e.transform&&(s=e.transform(s)),e.pick&&(s=oe(s,e.pick)),i.data.value=s,i.error.value=null}).catch(s=>{i.error.value=s,i.data.value=G(e.default())}).finally(()=>{i.pending.value=!1,o.payload.data[a]=i.data.value,i.error.value&&(o.payload._errors[a]=!0),delete o._asyncDataPromises[a]}),o._asyncDataPromises[a]);const b=()=>i.refresh({_initial:!0}),q=e.server!==!1&&o.payload.serverRendered;{q&&o.isHydrating&&a in o.payload.data?i.pending.value=!1:d&&o.payload.serverRendered&&(o.isHydrating||e.lazy)?d._nuxtOnBeforeMountCbs.push(b):b(),e.watch&&W(e.watch,()=>i.refresh());const f=o.hook("app:data:refresh",s=>{if(!s||s.includes(a))return i.refresh()});d&&U(f)}const h=Promise.resolve(o._asyncDataPromises[a]).then(()=>i);return Object.assign(h,i),h}function oe(u,c){const a={};for(const _ of c)a[_]=u[_];return a}function ae(u,c,a){const[_,e]=typeof c=="string"?[{},c]:[c,a],o=_.key||e;if(!o||typeof o!="string")throw new TypeError("[nuxt] [useFetch] key must be a string: "+o);if(!u)throw new Error("[nuxt] [useFetch] request is missing.");const d="$f"+o,v=Q(()=>{let f=u;return typeof f=="function"&&(f=f()),R(f)?f.value:f}),{server:i,lazy:b,default:q,transform:h,pick:l,watch:m,initialCache:B,...D}=_,y={...D,cache:typeof _.cache=="boolean"?void 0:_.cache},x={server:i,lazy:b,default:q,transform:h,pick:l,initialCache:B,watch:[v,...m||[]]};return ue(d,()=>$fetch(v.value,y),x,"$2Qpjr020wX")}const ne=u=>($("data-v-4ead8667"),u=u(),V(),u),se={class:"wrapper"},le=ne(()=>n("div",null,[n("div",{class:"title"},"Hideki Yashiro")],-1)),ce=[le],ie=A({__name:"ProfilePart",setup(u){return(c,a)=>(g(),F("div",se,ce))}}),de=w(ie,[["__scopeId","data-v-4ead8667"]]),re=u=>($("data-v-c78b1797"),u=u(),V(),u),_e={class:"profile-wrapper"},pe=re(()=>n("div",{class:"title"},"SKILL",-1)),me={class:"row"},fe={class:"absolute-full flex flex-center"},ve=A({__name:"skill",setup(u){const c=N({htmlcss:{title:"HTML5/CSS3",val:0},JavaScript:{title:"JavaScript",val:0},NuxtJS:{title:"Nuxt.js",val:0},NodeJS:{title:"Node.js",val:0},Python:{title:"Python",val:0},RPA:{title:"RPA",val:0}});return T(()=>{c.htmlcss.val=1,c.JavaScript.val=.9,c.NuxtJS.val=.8,c.NodeJS.val=.7,c.Python.val=.5,c.RPA.val=.8}),(a,_)=>{const e=r("q-badge"),o=r("q-linear-progress");return g(),F("div",_e,[n("div",null,[pe,n("div",me,[(g(!0),F(S,null,P(c,(d,v,i)=>(g(),F("div",{class:"col-6 q-pa-sm",key:i},[j(I(d.title)+" ",1),t(o,{stripe:"",size:"25px",color:"green",rounded:"",value:d.val},{default:p(()=>[n("div",fe,[t(e,{color:"white","text-color":"accent",label:d.val*100+"%"},null,8,["label"])])]),_:2},1032,["value"])]))),128))])])])}}}),he=w(ve,[["__scopeId","data-v-c78b1797"]]),ye=u=>($("data-v-eeff26cd"),u=u(),V(),u),ge=ye(()=>n("div",{class:"title"},"WORKS",-1)),Ce={class:"row justify-center items-center",style:{"max-width":"1000px",margin:"0 auto"}},be={class:"work-title"},qe={class:"row items-center justify-between",style:{height:"100%"}},Fe={class:"col-4 q-mx-sm"},De={class:"card-title"},Ee=["innerHTML"],Be={class:"col-6 q-mx-sm"},xe=A({__name:"work",setup(u){const c=N({camptool:{title:"\u30AD\u30E3\u30F3\u30DA\u30FC\u30F3\u691C\u7D22\u30C4\u30FC\u30EB",desc:`\u73FE\u5728\u6709\u52B9\u306E\u30AD\u30E3\u30F3\u30DA\u30FC\u30F3\u3084\u904E\u53BB\u306E\u30AD\u30E3\u30F3\u30DA\u30FC\u30F3\u3092\u691C\u7D22\u3001\u8868\u793A\u3001\u7BA1\u7406\u3067\u304D\u308B\u30C4\u30FC\u30EB\u3002
			OracleDB\u3068\u9023\u643A\u3057\u305FCRUD\u6A5F\u80FD\u3092\u6709\u3057\u3066\u3044\u307E\u3059\u3002<br/>\u691C\u7D22\u6642\u9593\u306E\u77ED\u7E2E\u3001\u30E6\u30FC\u30B6\u30FC\u76EE\u7DDA\u306B\u5408\u308F\u305B\u305FUI/UX\u306E\u6539\u5584\u306B\u3088\u308A
			\u5927\u5E45\u306A\u696D\u52D9\u52B9\u7387\u306E\u6539\u5584\u306B\u8CA2\u732E\u3057\u307E\u3057\u305F\u3002`,imgsrc:["/img/campaign/1.png","/img/campaign/2.png","/img/campaign/3.png"],dialog:!1},fintech:{title:"\u67D0\u30D5\u30A3\u30F3\u30C6\u30C3\u30AF\u4F01\u696DLP",desc:`
			\u67D0\u30D5\u30A3\u30F3\u30C6\u30C3\u30AF\u4F01\u696D\u304B\u3089\u306E\u4F9D\u983C\u3067\u4F5C\u6210\u3057\u305FLP\u3067\u3059\u3002
			\u8A34\u6C42\u3057\u305F\u3044\u60C5\u5831\u3092\u7684\u78BA\u306B\u4F1D\u3048\u308B\u3053\u3068\u304C\u3067\u304D\u308B\u3088\u3046\u30C7\u30B6\u30A4\u30F3\u3057\u307E\u3057\u305F\u3002
			\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u306B\u3088\u3063\u3066\u52D5\u304D\u3092\u4ED8\u3051\u3066\u98FD\u304D\u3055\u305B\u306A\u3044\u30C7\u30B6\u30A4\u30F3\u306B\u3057\u3066\u3044\u307E\u3059\u3002
			URL: <a href="https://unrivaled-rabanadas-5b0a00.netlify.app/">Social Rending</a>
			`,imgsrc:["/img/lp/1.png","/img/lp/2.png","/img/lp/3.png"],dialog:!1},sample:{title:"\u30B5\u30F3\u30D7\u30EB\u5546\u54C1\u691C\u7D22\u30C4\u30FC\u30EB",desc:`
			\u793E\u5185\u306B\u3042\u308B\u5168\u5546\u54C1\u60C5\u5831\u3092\u691C\u7D22\u30FB\u7DE8\u96C6\u30FB\u4F5C\u6210\u30FB\u524A\u9664\u3092\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002
			\u307E\u305F\u9078\u629E\u3057\u305F\u5546\u54C1\u306E\u30E9\u30D9\u30EB\u3092\u5370\u5237\u3059\u308B\u6A5F\u80FD\u3092\u6709\u3057\u3066\u304A\u308A\u3001\u3053\u306E\u30C4\u30FC\u30EB\u304B\u3089\u793E\u5185\u306E\u5546\u54C1\u3092\u4E00\u62EC\u7BA1\u7406\u3067\u304D\u308B\u3088\u3046\u306B\u306A\u3063\u3066\u3044\u307E\u3059\u3002
			`,imgsrc:["/img/sample/1.png","/img/sample/2.png","/img/sample/3.png"],dialog:!1}});T(()=>{});const a=C(0);return(_,e)=>{const o=r("q-img"),d=r("q-card-section"),v=r("q-card"),i=r("v-img"),b=r("v-sheet"),q=r("v-carousel-item"),h=r("v-carousel"),l=r("q-dialog");return g(),F("div",null,[ge,n("div",Ce,[(g(!0),F(S,null,P(c,(m,B,D)=>(g(),F("div",{class:"col-4",key:D},[t(v,{class:"work-card",onClick:y=>m.dialog=!0},{default:p(()=>[t(d,null,{default:p(()=>[t(o,{src:m.imgsrc[0],style:{height:"250px"}},null,8,["src"])]),_:2},1024),t(d,{class:"q-pt-none"},{default:p(()=>[n("div",be,I(m.title),1)]),_:2},1024)]),_:2},1032,["onClick"]),t(l,{modelValue:m.dialog,"onUpdate:modelValue":y=>m.dialog=y,"transition-show":"flip-down","transition-hide":"flip-up"},{default:p(()=>[t(v,{class:"q-pa-lg",style:{width:"100%","min-width":"700px",height:"550px"}},{default:p(()=>[t(d,{class:"q-pt-none",style:{height:"100%"}},{default:p(()=>[n("div",qe,[n("div",Fe,[n("div",De,I(m.title),1),n("div",{class:"card-desc",innerHTML:m.desc},null,8,Ee)]),n("div",Be,[t(v,null,{default:p(()=>[t(h,{modelValue:a.value,"onUpdate:modelValue":e[1]||(e[1]=y=>a.value=y)},{default:p(()=>[(g(!0),F(S,null,P(m.imgsrc,(y,x)=>(g(),M(q,{key:x,onClick:e[0]||(e[0]=L(()=>{},["stop"]))},{default:p(()=>[t(b,{height:"100%",tile:""},{default:p(()=>[t(i,{src:y},null,8,["src"])]),_:2},1024)]),_:2},1024))),128))]),_:2},1032,["modelValue"])]),_:2},1024)])])]),_:2},1024)]),_:2},1024)]),_:2},1032,["modelValue","onUpdate:modelValue"])]))),128))])])}}}),we=w(xe,[["__scopeId","data-v-eeff26cd"]]),E=u=>($("data-v-bb479c4c"),u=u(),V(),u),ke={class:"q-pa-md q-mt-lg",style:{width:"100%",height:"600px"}},Ae=E(()=>n("div",{class:"title"},"CONTACT",-1)),$e=["onSubmit"],Ve=E(()=>n("label",{for:"message"},"\u30B9\u30D1\u30E0\u3067\u306A\u3044\u5834\u5408\u306F\u7A7A\u6B04",-1)),Se=E(()=>n("input",{type:"hidden",name:"form-name",value:"contact"},null,-1)),Pe={class:"row"},Ie={class:"col-4 q-mx-sm"},Ue=E(()=>n("div",{class:"inq-head"},"\u304A\u540D\u524D",-1)),Oe={class:"col-4 q-mx-sm"},Re=E(()=>n("div",{class:"inq-head"},"\u30D5\u30EA\u30AC\u30CA",-1)),Ne={class:"col-3 q-mx-sm"},Te=E(()=>n("div",{class:"inq-head q-mx-sm"},"\u6027\u5225",-1)),je={class:"q-gutter-sm"},Me={class:"q-px-sm"},Le=E(()=>n("div",{class:"inq-head"},"\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9",-1)),ze={class:"q-px-sm"},He=E(()=>n("div",{class:"inq-head"},"\u304A\u554F\u3044\u5408\u308F\u305B\u5185\u5BB9",-1)),Je={class:"q-px-sm"},Ke=E(()=>n("div",{class:"text-h6"},"\u9001\u4FE1\u5B8C\u4E86\u3057\u307E\u3057\u305F\uFF01",-1)),We=A({__name:"inquiry",setup(u){const c=C(null),a=C(null),_=C(null),e=C("\u7537"),o=C(null),d=C(!1),v=C(!1),i=h=>Object.keys(h).map(l=>`${encodeURIComponent(l)}=${encodeURIComponent(h[l])}`).join("&"),b=async()=>{const h={"form-name":"contact",username:c.value,katakana:a.value,gender:String(e.value),useremail:_.value,message:o.value};d&&(h["bot-field"]=d.value),console.log(i(h)),await ae("/dummyForm",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},params:h},"$kLkbZv8qxV").then(({data:l})=>{v.value=!0,console.log("DONE!"),q()}).catch(l=>{console.log(l)})},q=()=>{c.value=null,a.value=null,_.value=null,e.value="\u7537",o.value=null};return(h,l)=>{const m=r("q-input"),B=r("q-radio"),D=r("q-btn"),y=r("v-card"),x=r("q-card-section"),k=r("q-card"),f=r("q-dialog");return g(),F("div",ke,[t(y,{class:"py-5"},{default:p(()=>[Ae,n("form",{"data-netlify":"true",name:"contact",onSubmit:L(b,["prevent"]),onReset:q,class:"q-gutter-md my-form",method:"POST","data-netlify-honeypot":"bot-field"},[O(n("div",null,[Ve,O(n("input",{type:"text",name:"bot-field","onUpdate:modelValue":l[0]||(l[0]=s=>d.value=s)},null,512),[[Z,d.value]])],512),[[Y,!1]]),Se,n("div",Pe,[n("div",Ie,[Ue,t(m,{name:"username",outlined:"",dense:"","hide-bottom-space":"",modelValue:c.value,"onUpdate:modelValue":l[1]||(l[1]=s=>c.value=s)},null,8,["modelValue"])]),n("div",Oe,[Re,t(m,{name:"katakana",outlined:"",dense:"","hide-bottom-space":"",modelValue:a.value,"onUpdate:modelValue":l[2]||(l[2]=s=>a.value=s)},null,8,["modelValue"])]),n("div",Ne,[Te,n("div",je,[t(B,{name:"gender",modelValue:e.value,"onUpdate:modelValue":l[3]||(l[3]=s=>e.value=s),val:"male",label:"\u7537"},null,8,["modelValue"]),t(B,{name:"gender",modelValue:e.value,"onUpdate:modelValue":l[4]||(l[4]=s=>e.value=s),val:"femail",label:"\u5973"},null,8,["modelValue"])])])]),n("div",Me,[Le,t(m,{name:"useremail",outlined:"",dense:"","hide-bottom-space":"",modelValue:_.value,"onUpdate:modelValue":l[5]||(l[5]=s=>_.value=s)},null,8,["modelValue"])]),n("div",ze,[He,t(m,{name:"message",modelValue:o.value,"onUpdate:modelValue":l[6]||(l[6]=s=>o.value=s),outlined:"",type:"textarea"},null,8,["modelValue"])]),n("div",Je,[t(D,{label:"\u9001\u4FE1",type:"submit",color:"primary"}),t(D,{label:"\u30EA\u30BB\u30C3\u30C8",type:"reset",color:"primary",flat:"",class:"q-ml-sm"})])],40,$e)]),_:1}),t(f,{modelValue:v.value,"onUpdate:modelValue":l[7]||(l[7]=s=>v.value=s),"auto-close":""},{default:p(()=>[t(k,null,{default:p(()=>[t(x,null,{default:p(()=>[Ke]),_:1})]),_:1})]),_:1},8,["modelValue"])])}}}),Xe=w(We,[["__scopeId","data-v-bb479c4c"]]),Ge={},Qe={class:"bg"};function Ye(u,c){const a=he,_=we,e=Xe;return g(),F("div",Qe,[t(a,{id:"skill",style:{"padding-top":"50px"}}),t(_,{id:"works",style:{"padding-top":"50px"}}),t(e,{id:"contact",style:{"padding-top":"50px"}})])}const Ze=w(Ge,[["render",Ye],["__scopeId","data-v-3fb1b2c4"]]);const et={},tt=j(" My Portfolio ");function ut(u,c){const a=r("q-toolbar-title"),_=r("q-space"),e=r("q-route-tab"),o=r("q-tabs"),d=r("q-toolbar"),v=r("q-header"),i=de,b=Ze,q=r("q-layout");return g(),M(q,{view:"hHh lpR fFf",height:"100%"},{default:p(()=>[t(v,{elevated:"",class:"bg-white text-black","height-hint":"98"},{default:p(()=>[t(d,null,{default:p(()=>[t(a,null,{default:p(()=>[tt]),_:1}),t(_),t(o,{align:"right",shrink:""},{default:p(()=>[t(e,{label:"Profile",to:"#",href:"#"}),t(e,{label:"Skill",to:"#skill",href:"#skill"}),t(e,{label:"Works",to:"#works",href:"#works"}),t(e,{label:"Contact",to:"#contact",href:"#contact"})]),_:1})]),_:1})]),_:1}),t(i),t(b)]),_:1})}const at=w(et,[["render",ut]]);export{at as default};