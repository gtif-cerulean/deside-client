import{m as b,V as u}from"./VOverlay-D89omJis.Cy7axrG_.js";import{u as h,f as O}from"./forwardRefs-CYrR6bMw.C6LiLlDM.js";import{L as S,N as x,O as T,P as R,Q as k,R as w}from"./eo-dash.D5X-Ch81.js";import{h as e,p as A,G as C,K as d}from"./framework.DvYN4D0M.js";const G=S({id:String,text:String,...x(b({closeOnBack:!1,location:"end",locationStrategy:"connected",eager:!0,minWidth:0,offset:10,openOnClick:!1,openOnHover:!0,origin:"auto",scrim:!1,scrollStrategy:"reposition",transition:!1}),["absolute","persistent"])},"VTooltip"),F=T()({name:"VTooltip",props:G(),emits:{"update:modelValue":t=>!0},setup(t,m){let{slots:o}=m;const n=R(t,"modelValue"),{scopeId:v}=h(),f=k(),r=e(()=>t.id||`v-tooltip-${f}`),l=A(),g=e(()=>t.location.split(" ").length>1?t.location:t.location+" center"),V=e(()=>t.origin==="auto"||t.origin==="overlap"||t.origin.split(" ").length>1||t.location.split(" ").length>1?t.origin:t.origin+" center"),P=e(()=>t.transition?t.transition:n.value?"scale-transition":"fade-transition"),y=e(()=>d({"aria-describedby":r.value},t.activatorProps));return w(()=>{const p=u.filterProps(t);return C(u,d({ref:l,class:["v-tooltip",t.class],style:t.style,id:r.value},p,{modelValue:n.value,"onUpdate:modelValue":a=>n.value=a,transition:P.value,absolute:!0,location:g.value,origin:V.value,persistent:!0,role:"tooltip",activatorProps:y.value,_disableGlobalStack:!0},v),{activator:o.activator,default:function(){var c;for(var a=arguments.length,s=new Array(a),i=0;i<a;i++)s[i]=arguments[i];return((c=o.default)==null?void 0:c.call(o,...s))??t.text}})}),O({},l)}});export{F as V};