import{a as f,o as a,b as n,p as E,e as F,f as i,h,r as b,i as x,j as o,F as k,k as D,l as q,t as g,m as t,w as s,c as B}from"./entry.03aef12b.mjs";const A=e=>(E("data-v-4ead8667"),e=e(),F(),e),w={class:"wrapper"},S=A(()=>i("div",null,[i("div",{class:"title"},"Hideki Yashiro")],-1)),$=[S],y=f({__name:"ProfilePart",setup(e){return(u,l)=>(a(),n("div",w,$))}}),P=h(y,[["__scopeId","data-v-4ead8667"]]),I=e=>(E("data-v-02e24297"),e=e(),F(),e),N={class:"profile-wrapper"},J=I(()=>i("div",{class:"title"},"SKILL",-1)),R={class:"row"},H={class:"absolute-full flex flex-center"},L=f({__name:"skill",setup(e){const u=b({htmlcss:{title:"HTML5/CSS3",val:0},JavaScript:{title:"JavaScript",val:0},NodeJS:{title:"Node.js",val:0},Python:{title:"Python",val:0},RPA:{title:"RPA",val:0}});return x(()=>{u.htmlcss.val=1,u.JavaScript.val=.9,u.NodeJS.val=.7,u.Python.val=.5,u.RPA.val=.8}),(l,d)=>{const c=o("q-badge"),r=o("q-linear-progress");return a(),n("div",N,[i("div",null,[J,i("div",R,[(a(!0),n(k,null,D(u,(_,p,m)=>(a(),n("div",{class:"col-6 q-pa-sm",key:m},[q(g(_.title)+" ",1),t(r,{stripe:"",size:"25px",color:"warning",rounded:"",value:_.val},{default:s(()=>[i("div",H,[t(c,{color:"white","text-color":"accent",label:_.val*100+"%"},null,8,["label"])])]),_:2},1032,["value"])]))),128))])])])}}}),U=h(L,[["__scopeId","data-v-02e24297"]]),V={class:"row"},j=f({__name:"work",setup(e){const u=b({camptool:{title:"\u30AD\u30E3\u30F3\u30DA\u30FC\u30F3\u691C\u7D22\u30C4\u30FC\u30EB",desc:`\u73FE\u5728\u6709\u52B9\u306E\u30AD\u30E3\u30F3\u30DA\u30FC\u30F3\u3084\u904E\u53BB\u306E\u30AD\u30E3\u30F3\u30DA\u30FC\u30F3\u3092\u691C\u7D22\u3001\u8868\u793A\u3001\u7BA1\u7406\u3067\u304D\u308B\u30C4\u30FC\u30EB\u3002
			OracleDB\u3068\u9023\u643A\u3057\u305FCRUD\u6A5F\u80FD\u3092\u6709\u3057\u3066\u3044\u307E\u3059\u3002\u691C\u7D22\u6642\u9593\u306E\u77ED\u7E2E\u3001\u30E6\u30FC\u30B6\u30FC\u76EE\u7DDA\u306B\u5408\u308F\u305B\u305FUI/UX\u306E\u6539\u5584\u306B\u3088\u308A
			\u5927\u5E45\u306A\u696D\u52D9\u52B9\u7387\u306E\u6539\u5584\u306B\u8CA2\u732E\u3057\u307E\u3057\u305F\u3002`,imgsrc:["~/assets/img/campaign/1.png"]}});return(l,d)=>{const c=o("q-img"),r=o("q-card-section"),_=o("q-card");return a(),n("div",V,[(a(!0),n(k,null,D(u,(p,m,v)=>(a(),n("div",{class:"col-4",key:v},[t(_,{class:"work-card"},{default:s(()=>[t(r,null,{default:s(()=>[t(c,{src:p.imgsrc[0]},null,8,["src"])]),_:2},1024),t(r,{class:"q-pt-none"},{default:s(()=>[q(g(p.desc),1)]),_:2},1024)]),_:2},1024)]))),128))])}}}),M={};function T(e,u){const l=U,d=j;return a(),n("div",null,[t(l),t(d)])}const Y=h(M,[["render",T]]),z={},K=q(" Hideki Yashiro ");function O(e,u){const l=o("q-toolbar-title"),d=o("q-space"),c=o("q-route-tab"),r=o("q-tabs"),_=o("q-toolbar"),p=o("q-header"),m=P,v=Y,C=o("q-layout");return a(),B(C,{view:"hHh lpR fFf",height:"100%"},{default:s(()=>[t(p,{elevated:"",class:"bg-white text-black","height-hint":"98"},{default:s(()=>[t(_,null,{default:s(()=>[t(l,null,{default:s(()=>[K]),_:1}),t(d),t(r,{align:"right",shrink:""},{default:s(()=>[t(c,{label:"Profile"}),t(c,{label:"Works"}),t(c,{label:"Contact"})]),_:1})]),_:1})]),_:1}),t(m),t(v)]),_:1})}const X=h(z,[["render",O]]);export{X as default};