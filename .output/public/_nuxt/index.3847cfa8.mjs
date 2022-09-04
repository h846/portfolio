import{i as N,r as w,a as z,b as H,e as U,w as J,f as L,u as K,h as X,j as B,o as y,k as q,p as P,l as I,m as s,q as k,s as T,t as Y,v as p,F as V,x as S,y as O,z as A,A as l,B as v,C as R,D as G,E as Q,G as W,c as Z}from"./entry.eb4ee8ca.mjs";const ee=o=>N(o)?o:w(o),te=()=>null;function oe(...o){var g,C,D,d,E,F,$;const c=typeof o[o.length-1]=="string"?o.pop():void 0;typeof o[0]!="string"&&o.unshift(c);let[a,r,e={}]=o;if(typeof a!="string")throw new TypeError("[nuxt] [asyncData] key must be a string.");if(typeof r!="function")throw new TypeError("[nuxt] [asyncData] handler must be a function.");e.server=(g=e.server)!=null?g:!0,e.default=(C=e.default)!=null?C:te,e.defer&&console.warn("[useAsyncData] `defer` has been renamed to `lazy`. Support for `defer` will be removed in RC."),e.lazy=(d=(D=e.lazy)!=null?D:e.defer)!=null?d:!1,e.initialCache=(E=e.initialCache)!=null?E:!0;const t=z(),i=L();if(i&&!i._nuxtOnBeforeMountCbs){const _=i._nuxtOnBeforeMountCbs=[];i&&(H(()=>{_.forEach(f=>{f()}),_.splice(0,_.length)}),U(()=>_.splice(0,_.length)))}const h=()=>e.initialCache&&t.payload.data[a]!==void 0,n={data:ee((F=t.payload.data[a])!=null?F:e.default()),pending:w(!h()),error:w(($=t.payload._errors[a])!=null?$:null)};n.refresh=(_={})=>t._asyncDataPromises[a]?t._asyncDataPromises[a]:_._initial&&h()?t.payload.data[a]:(n.pending.value=!0,t._asyncDataPromises[a]=new Promise((f,j)=>{try{f(r(t))}catch(M){j(M)}}).then(f=>{e.transform&&(f=e.transform(f)),e.pick&&(f=ae(f,e.pick)),n.data.value=f,n.error.value=null}).catch(f=>{n.error.value=f,n.data.value=K(e.default())}).finally(()=>{n.pending.value=!1,t.payload.data[a]=n.data.value,n.error.value&&(t.payload._errors[a]=!0),delete t._asyncDataPromises[a]}),t._asyncDataPromises[a]);const b=()=>n.refresh({_initial:!0}),m=e.server!==!1&&t.payload.serverRendered;{m&&t.isHydrating&&a in t.payload.data?n.pending.value=!1:i&&t.payload.serverRendered&&(t.isHydrating||e.lazy)?i._nuxtOnBeforeMountCbs.push(b):b(),e.watch&&J(e.watch,()=>n.refresh());const _=t.hook("app:data:refresh",f=>{if(!f||f.includes(a))return n.refresh()});i&&U(_)}const u=Promise.resolve(t._asyncDataPromises[a]).then(()=>n);return Object.assign(u,n),u}function ae(o,c){const a={};for(const r of c)a[r]=o[r];return a}function ne(o,c,a){const[r,e]=typeof c=="string"?[{},c]:[c,a],t=r.key||e;if(!t||typeof t!="string")throw new TypeError("[nuxt] [useFetch] key must be a string: "+t);if(!o)throw new Error("[nuxt] [useFetch] request is missing.");const i="$f"+t,h=X(()=>{let _=o;return typeof _=="function"&&(_=_()),N(_)?_.value:_}),{server:n,lazy:b,default:m,transform:u,pick:g,watch:C,initialCache:D,...d}=r,E={...d,cache:typeof r.cache=="boolean"?void 0:r.cache},F={server:n,lazy:b,default:m,transform:u,pick:g,initialCache:D,watch:[h,...C||[]]};return oe(i,()=>$fetch(h.value,E),F,"$2Qpjr020wX")}const se=o=>(P("data-v-252f7dc5"),o=o(),I(),o),le={class:"wrapper"},ue=se(()=>s("div",null,[s("div",{class:"title"},"Hideki Yashiro")],-1)),ce=[ue],ie=B({__name:"ProfilePart",setup(o){return(c,a)=>(y(),q("div",le,ce))}}),re=k(ie,[["__scopeId","data-v-252f7dc5"]]),de=o=>(P("data-v-685d492b"),o=o(),I(),o),_e={class:"profile-wrapper"},pe=de(()=>s("div",{class:"title"},"SKILL",-1)),me={class:"row"},fe={class:"absolute-full flex flex-center"},he=B({__name:"skill",setup(o){const c=T({htmlcss:{title:"HTML5/CSS3",val:0},JavaScript:{title:"JavaScript",val:0},NodeJS:{title:"Node.js",val:0},Python:{title:"Python",val:0},RPA:{title:"RPA",val:0}});return Y(()=>{c.htmlcss.val=1,c.JavaScript.val=.9,c.NodeJS.val=.7,c.Python.val=.5,c.RPA.val=.8}),(a,r)=>{const e=p("q-badge"),t=p("q-linear-progress");return y(),q("div",_e,[s("div",null,[pe,s("div",me,[(y(!0),q(V,null,S(c,(i,h,n)=>(y(),q("div",{class:"col-6 q-pa-sm",key:n},[O(A(i.title)+" ",1),l(t,{stripe:"",size:"25px",color:"warning",rounded:"",value:i.val},{default:v(()=>[s("div",fe,[l(e,{color:"white","text-color":"accent",label:i.val*100+"%"},null,8,["label"])])]),_:2},1032,["value"])]))),128))])])])}}}),ve=k(he,[["__scopeId","data-v-685d492b"]]),ye={class:"row"},ge={class:"row"},qe={class:"col-5"},be={class:"col-7"},we={class:"row"},xe=B({__name:"work",setup(o){const c=T({camptool:{title:"\u30AD\u30E3\u30F3\u30DA\u30FC\u30F3\u691C\u7D22\u30C4\u30FC\u30EB",desc:`\u73FE\u5728\u6709\u52B9\u306E\u30AD\u30E3\u30F3\u30DA\u30FC\u30F3\u3084\u904E\u53BB\u306E\u30AD\u30E3\u30F3\u30DA\u30FC\u30F3\u3092\u691C\u7D22\u3001\u8868\u793A\u3001\u7BA1\u7406\u3067\u304D\u308B\u30C4\u30FC\u30EB\u3002
			OracleDB\u3068\u9023\u643A\u3057\u305FCRUD\u6A5F\u80FD\u3092\u6709\u3057\u3066\u3044\u307E\u3059\u3002\u691C\u7D22\u6642\u9593\u306E\u77ED\u7E2E\u3001\u30E6\u30FC\u30B6\u30FC\u76EE\u7DDA\u306B\u5408\u308F\u305B\u305FUI/UX\u306E\u6539\u5584\u306B\u3088\u308A
			\u5927\u5E45\u306A\u696D\u52D9\u52B9\u7387\u306E\u6539\u5584\u306B\u8CA2\u732E\u3057\u307E\u3057\u305F\u3002`,imgsrc:["/img/campaign/1.png","/img/campaign/2.png","/img/campaign/3.png"],dialog:!1}});return(a,r)=>{const e=p("q-img"),t=p("q-card-section"),i=p("q-card"),h=p("q-dialog");return y(),q("div",ye,[(y(!0),q(V,null,S(c,(n,b,m)=>(y(),q("div",{class:"col-4",key:m},[l(i,{class:"work-card",onClick:u=>n.dialog=!0},{default:v(()=>[l(t,null,{default:v(()=>[l(e,{src:n.imgsrc[0]},null,8,["src"])]),_:2},1024),l(t,{class:"q-pt-none"},{default:v(()=>[O(A(n.title),1)]),_:2},1024)]),_:2},1032,["onClick"]),l(h,{modelValue:n.dialog,"onUpdate:modelValue":u=>n.dialog=u,"transition-show":"flip-down","transition-hide":"flip-up"},{default:v(()=>[l(i,{class:"q-pa-lg",style:{width:"100%","max-width":"700px",height:"400px"}},{default:v(()=>[l(t,{class:"q-pt-none"},{default:v(()=>[s("div",ge,[s("div",qe,[s("div",null,A(n.title),1),s("div",null,A(n.desc),1)]),s("div",be,[s("div",we,[(y(!0),q(V,null,S(n.imgsrc,(u,g)=>(y(),q("div",{class:"col",key:g},[l(e,{src:u,style:{height:"100px"}},null,8,["src"])]))),128))])])])]),_:2},1024)]),_:2},1024)]),_:2},1032,["modelValue","onUpdate:modelValue"])]))),128))])}}}),x=o=>(P("data-v-a0532e6e"),o=o(),I(),o),Ce={class:"q-pa-md q-mt-lg",style:{width:"100%",height:"600px"}},De=x(()=>s("div",{class:"title"},"CONTACT",-1)),ke=["onSubmit"],Ee=x(()=>s("label",{for:"message"},"\u30B9\u30D1\u30E0\u3067\u306A\u3044\u5834\u5408\u306F\u7A7A\u6B04",-1)),Fe=x(()=>s("input",{type:"hidden",name:"form-name",value:"contact"},null,-1)),Ae={class:"row"},Be={class:"col-4 q-mx-sm"},$e=x(()=>s("div",{class:"inq-head"},"\u304A\u540D\u524D",-1)),Ve={class:"col-4 q-mx-sm"},Se=x(()=>s("div",{class:"inq-head"},"\u30D5\u30EA\u30AC\u30CA",-1)),Pe={class:"col-3 q-mx-sm"},Ie=x(()=>s("div",{class:"inq-head q-mx-sm"},"\u6027\u5225",-1)),Oe={class:"q-gutter-sm"},Ue={class:"q-px-sm"},Re=x(()=>s("div",{class:"inq-head"},"\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9",-1)),Ne={class:"q-px-sm"},Te=x(()=>s("div",{class:"inq-head"},"\u304A\u554F\u3044\u5408\u308F\u305B\u5185\u5BB9",-1)),je={class:"q-px-sm"},Me=B({__name:"inquiry",setup(o){const c=w(null),a=w(null),r=w(null),e=w("\u7537"),t=w(null),i=w(!1),h=m=>Object.keys(m).map(u=>`${encodeURIComponent(u)}=${encodeURIComponent(m[u])}`).join("&"),n=async()=>{const m={"form-name":"contact",username:c.value,katakana:a.value,gender:String(e.value),useremail:r.value,message:t.value};i&&(m["bot-field"]=i.value),console.log(h(m)),await ne("/dummyForm",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:h(m)},"$kLkbZv8qxV").then(({data:u})=>{console.log("DONE!")}).catch(u=>{console.log(u)})},b=()=>{c.value=null,a.value=null,r.value=null,e.value="\u7537",t.value=null};return(m,u)=>{const g=p("q-input"),C=p("q-radio"),D=p("q-btn");return y(),q("div",Ce,[De,s("form",{"data-netlify":"true",name:"contact",onSubmit:W(n,["prevent"]),onReset:b,class:"q-gutter-md my-form",method:"POST","data-netlify-honeypot":"bot-field"},[R(s("div",null,[Ee,R(s("input",{type:"text",name:"bot-field","onUpdate:modelValue":u[0]||(u[0]=d=>i.value=d)},null,512),[[Q,i.value]])],512),[[G,!1]]),Fe,s("div",Ae,[s("div",Be,[$e,l(g,{name:"username",outlined:"",dense:"","hide-bottom-space":"",modelValue:c.value,"onUpdate:modelValue":u[1]||(u[1]=d=>c.value=d)},null,8,["modelValue"])]),s("div",Ve,[Se,l(g,{name:"katakana",outlined:"",dense:"","hide-bottom-space":"",modelValue:a.value,"onUpdate:modelValue":u[2]||(u[2]=d=>a.value=d)},null,8,["modelValue"])]),s("div",Pe,[Ie,s("div",Oe,[l(C,{name:"gender",modelValue:e.value,"onUpdate:modelValue":u[3]||(u[3]=d=>e.value=d),val:"\u7537",label:"\u7537"},null,8,["modelValue"]),l(C,{name:"gender",modelValue:e.value,"onUpdate:modelValue":u[4]||(u[4]=d=>e.value=d),val:"\u5973",label:"\u5973"},null,8,["modelValue"])])])]),s("div",Ue,[Re,l(g,{name:"useremail",outlined:"",dense:"","hide-bottom-space":"",modelValue:r.value,"onUpdate:modelValue":u[5]||(u[5]=d=>r.value=d)},null,8,["modelValue"])]),s("div",Ne,[Te,l(g,{name:"message",modelValue:t.value,"onUpdate:modelValue":u[6]||(u[6]=d=>t.value=d),outlined:"",type:"textarea"},null,8,["modelValue"])]),s("div",je,[l(D,{label:"\u9001\u4FE1",type:"submit",color:"primary"}),l(D,{label:"\u30EA\u30BB\u30C3\u30C8",type:"reset",color:"primary",flat:"",class:"q-ml-sm"})])],40,ke)])}}}),ze=k(Me,[["__scopeId","data-v-a0532e6e"]]),He={};function Je(o,c){const a=ve,r=xe,e=ze;return y(),q("div",null,[l(a),l(r),l(e)])}const Le=k(He,[["render",Je]]),Ke={},Xe=O(" Hideki Yashiro ");function Ye(o,c){const a=p("q-toolbar-title"),r=p("q-space"),e=p("q-route-tab"),t=p("q-tabs"),i=p("q-toolbar"),h=p("q-header"),n=re,b=Le,m=p("q-layout");return y(),Z(m,{view:"hHh lpR fFf",height:"100%"},{default:v(()=>[l(h,{elevated:"",class:"bg-white text-black","height-hint":"98"},{default:v(()=>[l(i,null,{default:v(()=>[l(a,null,{default:v(()=>[Xe]),_:1}),l(r),l(t,{align:"right",shrink:""},{default:v(()=>[l(e,{label:"Profile"}),l(e,{label:"Works"}),l(e,{label:"Contact"})]),_:1})]),_:1})]),_:1}),l(n),l(b)]),_:1})}const Qe=k(Ke,[["render",Ye]]);export{Qe as default};
