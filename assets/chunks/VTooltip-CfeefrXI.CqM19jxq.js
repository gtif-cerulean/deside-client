import{V as u,m as b}from"./VOverlay-BzOdRu9h.6A-FMRef.js";import{u as h,f as S}from"./forwardRefs-Bon_Kku1.B726PJ_w.js";import{P as O,Q as T,a5 as x,a6 as k,T as w,a7 as A}from"./eo-dash.BafBzV9i.js";import{h as e,p as C,K as d,G}from"./framework.aZ46aqSj.js";const I=T({id:String,text:String,...A(b({closeOnBack:!1,location:"end",locationStrategy:"connected",eager:!0,minWidth:0,offset:10,openOnClick:!1,openOnHover:!0,origin:"auto",scrim:!1,scrollStrategy:"reposition",transition:!1}),["absolute","persistent"])},"VTooltip"),H=O()({name:"VTooltip",props:I(),emits:{"update:modelValue":t=>!0},setup(t,m){let{slots:o}=m;const n=x(t,"modelValue"),{scopeId:v}=h(),f=k(),r=e(()=>t.id||`v-tooltip-${f}`),l=C(),g=e(()=>t.location.split(" ").length>1?t.location:t.location+" center"),V=e(()=>t.origin==="auto"||t.origin==="overlap"||t.origin.split(" ").length>1||t.location.split(" ").length>1?t.origin:t.origin+" center"),P=e(()=>t.transition?t.transition:n.value?"scale-transition":"fade-transition"),y=e(()=>d({"aria-describedby":r.value},t.activatorProps));return w(()=>{const p=u.filterProps(t);return G(u,d({ref:l,class:["v-tooltip",t.class],style:t.style,id:r.value},p,{modelValue:n.value,"onUpdate:modelValue":a=>n.value=a,transition:P.value,absolute:!0,location:g.value,origin:V.value,persistent:!0,role:"tooltip",activatorProps:y.value,_disableGlobalStack:!0},v),{activator:o.activator,default:function(){var c;for(var a=arguments.length,s=new Array(a),i=0;i<a;i++)s[i]=arguments[i];return((c=o.default)==null?void 0:c.call(o,...s))??t.text}})}),S({},l)}});export{H as V};
