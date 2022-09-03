import{i as N,r as w,a as j,b as H,e as O,w as L,f as J,u as K,h as X,j as B,o as g,k as q,p as P,l as U,m as s,q as k,s as T,t as Y,v as m,F as $,x as S,y as I,z as A,A as l,B as y,C as R,D as G,E as Q,G as W,c as Z}from"./entry.3de3454e.mjs";const ee=a=>N(a)?a:w(a),te=()=>null;function ae(...a){var b,D,d,C,E,F,V;const u=typeof a[a.length-1]=="string"?a.pop():void 0;typeof a[0]!="string"&&a.unshift(u);let[n,r,e={}]=a;if(typeof n!="string")throw new TypeError("[nuxt] [asyncData] key must be a string.");if(typeof r!="function")throw new TypeError("[nuxt] [asyncData] handler must be a function.");e.server=(b=e.server)!=null?b:!0,e.default=(D=e.default)!=null?D:te,e.defer&&console.warn("[useAsyncData] `defer` has been renamed to `lazy`. Support for `defer` will be removed in RC."),e.lazy=(C=(d=e.lazy)!=null?d:e.defer)!=null?C:!1,e.initialCache=(E=e.initialCache)!=null?E:!0;const t=j(),i=J();if(i&&!i._nuxtOnBeforeMountCbs){const p=i._nuxtOnBeforeMountCbs=[];i&&(H(()=>{p.forEach(h=>{h()}),p.splice(0,p.length)}),O(()=>p.splice(0,p.length)))}const v=()=>e.initialCache&&t.payload.data[n]!==void 0,o={data:ee((F=t.payload.data[n])!=null?F:e.default()),pending:w(!v()),error:w((V=t.payload._errors[n])!=null?V:null)};o.refresh=(p={})=>t._asyncDataPromises[n]?t._asyncDataPromises[n]:p._initial&&v()?t.payload.data[n]:(o.pending.value=!0,t._asyncDataPromises[n]=new Promise((h,M)=>{try{h(r(t))}catch(z){M(z)}}).then(h=>{e.transform&&(h=e.transform(h)),e.pick&&(h=ne(h,e.pick)),o.data.value=h,o.error.value=null}).catch(h=>{o.error.value=h,o.data.value=K(e.default())}).finally(()=>{o.pending.value=!1,t.payload.data[n]=o.data.value,o.error.value&&(t.payload._errors[n]=!0),delete t._asyncDataPromises[n]}),t._asyncDataPromises[n]);const _=()=>o.refresh({_initial:!0}),c=e.server!==!1&&t.payload.serverRendered;{c&&t.isHydrating&&n in t.payload.data?o.pending.value=!1:i&&t.payload.serverRendered&&(t.isHydrating||e.lazy)?i._nuxtOnBeforeMountCbs.push(_):_(),e.watch&&L(e.watch,()=>o.refresh());const p=t.hook("app:data:refresh",h=>{if(!h||h.includes(n))return o.refresh()});i&&O(p)}const f=Promise.resolve(t._asyncDataPromises[n]).then(()=>o);return Object.assign(f,o),f}function ne(a,u){const n={};for(const r of u)n[r]=a[r];return n}function oe(a,u,n){const[r,e]=typeof u=="string"?[{},u]:[u,n],t=r.key||e;if(!t||typeof t!="string")throw new TypeError("[nuxt] [useFetch] key must be a string: "+t);if(!a)throw new Error("[nuxt] [useFetch] request is missing.");const i="$f"+t,v=X(()=>{let p=a;return typeof p=="function"&&(p=p()),N(p)?p.value:p}),{server:o,lazy:_,default:c,transform:f,pick:b,watch:D,initialCache:d,...C}=r,E={...C,cache:typeof r.cache=="boolean"?void 0:r.cache},F={server:o,lazy:_,default:c,transform:f,pick:b,initialCache:d,watch:[v,...D||[]]};return ae(i,()=>$fetch(v.value,E),F,"$2Qpjr020wX")}const se=a=>(P("data-v-252f7dc5"),a=a(),U(),a),le={class:"wrapper"},ue=se(()=>s("div",null,[s("div",{class:"title"},"Hideki Yashiro")],-1)),ie=[ue],ce=B({__name:"ProfilePart",setup(a){return(u,n)=>(g(),q("div",le,ie))}}),re=k(ce,[["__scopeId","data-v-252f7dc5"]]),de=a=>(P("data-v-685d492b"),a=a(),U(),a),_e={class:"profile-wrapper"},pe=de(()=>s("div",{class:"title"},"SKILL",-1)),me={class:"row"},fe={class:"absolute-full flex flex-center"},he=B({__name:"skill",setup(a){const u=T({htmlcss:{title:"HTML5/CSS3",val:0},JavaScript:{title:"JavaScript",val:0},NodeJS:{title:"Node.js",val:0},Python:{title:"Python",val:0},RPA:{title:"RPA",val:0}});return Y(()=>{u.htmlcss.val=1,u.JavaScript.val=.9,u.NodeJS.val=.7,u.Python.val=.5,u.RPA.val=.8}),(n,r)=>{const e=m("q-badge"),t=m("q-linear-progress");return g(),q("div",_e,[s("div",null,[pe,s("div",me,[(g(!0),q($,null,S(u,(i,v,o)=>(g(),q("div",{class:"col-6 q-pa-sm",key:o},[I(A(i.title)+" ",1),l(t,{stripe:"",size:"25px",color:"warning",rounded:"",value:i.val},{default:y(()=>[s("div",fe,[l(e,{color:"white","text-color":"accent",label:i.val*100+"%"},null,8,["label"])])]),_:2},1032,["value"])]))),128))])])])}}}),ve=k(he,[["__scopeId","data-v-685d492b"]]),ye={class:"row"},ge={class:"row"},qe={class:"col-5"},be={class:"col-7"},we={class:"row"},xe=B({__name:"work",setup(a){const u=T({camptool:{title:"\u30AD\u30E3\u30F3\u30DA\u30FC\u30F3\u691C\u7D22\u30C4\u30FC\u30EB",desc:`\u73FE\u5728\u6709\u52B9\u306E\u30AD\u30E3\u30F3\u30DA\u30FC\u30F3\u3084\u904E\u53BB\u306E\u30AD\u30E3\u30F3\u30DA\u30FC\u30F3\u3092\u691C\u7D22\u3001\u8868\u793A\u3001\u7BA1\u7406\u3067\u304D\u308B\u30C4\u30FC\u30EB\u3002
			OracleDB\u3068\u9023\u643A\u3057\u305FCRUD\u6A5F\u80FD\u3092\u6709\u3057\u3066\u3044\u307E\u3059\u3002\u691C\u7D22\u6642\u9593\u306E\u77ED\u7E2E\u3001\u30E6\u30FC\u30B6\u30FC\u76EE\u7DDA\u306B\u5408\u308F\u305B\u305FUI/UX\u306E\u6539\u5584\u306B\u3088\u308A
			\u5927\u5E45\u306A\u696D\u52D9\u52B9\u7387\u306E\u6539\u5584\u306B\u8CA2\u732E\u3057\u307E\u3057\u305F\u3002`,imgsrc:["/img/campaign/1.png","/img/campaign/2.png","/img/campaign/3.png"],dialog:!1}});return(n,r)=>{const e=m("q-img"),t=m("q-card-section"),i=m("q-card"),v=m("q-dialog");return g(),q("div",ye,[(g(!0),q($,null,S(u,(o,_,c)=>(g(),q("div",{class:"col-4",key:c},[l(i,{class:"work-card",onClick:f=>o.dialog=!0},{default:y(()=>[l(t,null,{default:y(()=>[l(e,{src:o.imgsrc[0]},null,8,["src"])]),_:2},1024),l(t,{class:"q-pt-none"},{default:y(()=>[I(A(o.title),1)]),_:2},1024)]),_:2},1032,["onClick"]),l(v,{modelValue:o.dialog,"onUpdate:modelValue":f=>o.dialog=f,"transition-show":"flip-down","transition-hide":"flip-up"},{default:y(()=>[l(i,{class:"q-pa-lg",style:{width:"100%","max-width":"700px",height:"400px"}},{default:y(()=>[l(t,{class:"q-pt-none"},{default:y(()=>[s("div",ge,[s("div",qe,[s("div",null,A(o.title),1),s("div",null,A(o.desc),1)]),s("div",be,[s("div",we,[(g(!0),q($,null,S(o.imgsrc,(f,b)=>(g(),q("div",{class:"col",key:b},[l(e,{src:f,style:{height:"100px"}},null,8,["src"])]))),128))])])])]),_:2},1024)]),_:2},1024)]),_:2},1032,["modelValue","onUpdate:modelValue"])]))),128))])}}}),x=a=>(P("data-v-ea3f7fd6"),a=a(),U(),a),De={class:"q-pa-md q-mt-lg",style:{width:"100%",height:"600px"}},ke=x(()=>s("div",{class:"title"},"CONTACT",-1)),Ce=["onSubmit"],Ee=x(()=>s("label",{for:"message"},"\u30B9\u30D1\u30E0\u3067\u306A\u3044\u5834\u5408\u306F\u7A7A\u6B04",-1)),Fe=x(()=>s("input",{type:"hidden",name:"form-name",value:"contact"},null,-1)),Ae={class:"row"},Be={class:"col-4 q-mx-sm"},Ve=x(()=>s("div",{class:"inq-head"},"\u304A\u540D\u524D",-1)),$e={class:"col-4 q-mx-sm"},Se=x(()=>s("div",{class:"inq-head"},"\u30D5\u30EA\u30AC\u30CA",-1)),Pe={class:"col-3 q-mx-sm"},Ue=x(()=>s("div",{class:"inq-head q-mx-sm"},"\u6027\u5225",-1)),Ie={class:"q-gutter-sm"},Oe={class:"q-px-sm"},Re=x(()=>s("div",{class:"inq-head"},"\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9",-1)),Ne={class:"q-px-sm"},Te=x(()=>s("div",{class:"inq-head"},"\u304A\u554F\u3044\u5408\u308F\u305B\u5185\u5BB9",-1)),Me={class:"q-px-sm"},ze=B({__name:"inquiry",setup(a){const u=w(null),n=w(null),r=w(null),e=w("\u7537"),t=w(null),i=w(!1),v=async()=>{const _=new URLSearchParams;_.append("form-name","contact"),_.append("username",u),_.append("katakana",n),_.append("gender",String(e)),_.append("useremail",r),_.append("message",t),i&&_.append("bot-field",String(i.value)),await oe("/",{method:"POST",body:_},"$kLkbZv8qxV")},o=()=>{u.value=null,n.value=null,r.value=null,e.value="\u7537",t.value=null};return(_,c)=>{const f=m("q-input"),b=m("q-radio"),D=m("q-btn");return g(),q("div",De,[ke,s("form",{name:"contact",onSubmit:W(v,["prevent"]),onReset:o,class:"q-gutter-md my-form",method:"POST","data-netlify-honeypot":"bot-field",netlify:""},[R(s("div",null,[Ee,R(s("input",{type:"text",name:"bot-field","onUpdate:modelValue":c[0]||(c[0]=d=>i.value=d)},null,512),[[Q,i.value]])],512),[[G,!1]]),Fe,s("div",Ae,[s("div",Be,[Ve,l(f,{name:"username",outlined:"",dense:"","hide-bottom-space":"",modelValue:u.value,"onUpdate:modelValue":c[1]||(c[1]=d=>u.value=d)},null,8,["modelValue"])]),s("div",$e,[Se,l(f,{name:"katakana",outlined:"",dense:"","hide-bottom-space":"",modelValue:n.value,"onUpdate:modelValue":c[2]||(c[2]=d=>n.value=d)},null,8,["modelValue"])]),s("div",Pe,[Ue,s("div",Ie,[l(b,{name:"gender",modelValue:e.value,"onUpdate:modelValue":c[3]||(c[3]=d=>e.value=d),val:"\u7537",label:"\u7537"},null,8,["modelValue"]),l(b,{name:"gender",modelValue:e.value,"onUpdate:modelValue":c[4]||(c[4]=d=>e.value=d),val:"\u5973",label:"\u5973"},null,8,["modelValue"])])])]),s("div",Oe,[Re,l(f,{name:"useremail",type:"email",outlined:"",dense:"","hide-bottom-space":"",modelValue:r.value,"onUpdate:modelValue":c[5]||(c[5]=d=>r.value=d)},null,8,["modelValue"])]),s("div",Ne,[Te,l(f,{name:"message",modelValue:t.value,"onUpdate:modelValue":c[6]||(c[6]=d=>t.value=d),outlined:"",type:"textarea"},null,8,["modelValue"])]),s("div",Me,[l(D,{label:"\u9001\u4FE1",type:"submit",color:"primary"}),l(D,{label:"\u30EA\u30BB\u30C3\u30C8",type:"reset",color:"primary",flat:"",class:"q-ml-sm"})])],40,Ce)])}}}),je=k(ze,[["__scopeId","data-v-ea3f7fd6"]]),He={};function Le(a,u){const n=ve,r=xe,e=je;return g(),q("div",null,[l(n),l(r),l(e)])}const Je=k(He,[["render",Le]]),Ke={},Xe=I(" Hideki Yashiro ");function Ye(a,u){const n=m("q-toolbar-title"),r=m("q-space"),e=m("q-route-tab"),t=m("q-tabs"),i=m("q-toolbar"),v=m("q-header"),o=re,_=Je,c=m("q-layout");return g(),Z(c,{view:"hHh lpR fFf",height:"100%"},{default:y(()=>[l(v,{elevated:"",class:"bg-white text-black","height-hint":"98"},{default:y(()=>[l(i,null,{default:y(()=>[l(n,null,{default:y(()=>[Xe]),_:1}),l(r),l(t,{align:"right",shrink:""},{default:y(()=>[l(e,{label:"Profile"}),l(e,{label:"Works"}),l(e,{label:"Contact"})]),_:1})]),_:1})]),_:1}),l(o),l(_)]),_:1})}const Qe=k(Ke,[["render",Ye]]);export{Qe as default};
