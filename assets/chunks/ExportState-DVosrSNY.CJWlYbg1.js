import{am as J,Q as y,W as g,an as ke,U as f,O as p,ao as A,ap as C,aq as H,ar as N,as as W,at as pe,Y as L,au as q,$,av as G,aw as K,ax as Q,ay as X,az as Ce,X as be,aA as Ve,aB as he,aC as xe,aD as Se,aE as Ae,aF as Ie,a2 as Pe,aG as _e,aH as Te,aI as Be,aJ as we,aK as Ne,aL as Le,F as $e,V as x,aM as S,aN as Y,aO as De,a7 as z,aP as Fe,aQ as I,aR as ze,aS as Ee,aT as Me,c as E,aU as Oe,aV as P,w as M,H as O}from"./eo-dash.BU7FIqgH.js";import Re from"./PopUp-BFcSuX3b.VHDqAPgm.js";import{V as je}from"./index-BXi80Gr9.BcmzbYn9.js";import{V as Z}from"./VImg-BO2Ysvsu.CU_W2Dl5.js";import{h as B,ak as Ue,G as a,F as w,as as Je,at as He,K as We,aP as qe,aE as Ge,p as Ke,o as _,b as Qe,w as c,j as k,a as h,t as R,k as T,c as j,e as Xe,C as Ye}from"./framework.c24lRxR4.js";import"./theme.DvORrVRG.js";import"./commonjsHelpers.BosuxZz1.js";import"./VOverlay-CiQn3F6n.DU4-PA3H.js";import"./forwardRefs-C2UOEnvr.B2uHbjRU.js";import"./transition-w_2EtUxa.DiZqNzMB.js";const Ze=J("v-spacer","div","VSpacer"),ee=y()({name:"VCardActions",props:g(),setup(e,l){let{slots:t}=l;return ke({VBtn:{slim:!0,variant:"text"}}),f(()=>{var n;return a("div",{class:["v-card-actions",e.class],style:e.style},[(n=t.default)==null?void 0:n.call(t)])}),{}}}),ea=p({opacity:[Number,String],...g(),...A()},"VCardSubtitle"),aa=y()({name:"VCardSubtitle",props:ea(),setup(e,l){let{slots:t}=l;return f(()=>a(e.tag,{class:["v-card-subtitle",e.class],style:[{"--v-card-subtitle-opacity":e.opacity},e.style]},t)),{}}}),ae=J("v-card-title"),ta=p({start:Boolean,end:Boolean,icon:C,image:String,text:String,...H(),...g(),...N(),...W(),...pe(),...A(),...L(),...q({variant:"flat"})},"VAvatar"),U=y()({name:"VAvatar",props:ta(),setup(e,l){let{slots:t}=l;const{themeClasses:n}=$(e),{borderClasses:u}=G(e),{colorClasses:o,colorStyles:v,variantClasses:r}=K(e),{densityClasses:s}=Q(e),{roundedClasses:i}=X(e),{sizeClasses:d,sizeStyles:m}=Ce(e);return f(()=>a(e.tag,{class:["v-avatar",{"v-avatar--start":e.start,"v-avatar--end":e.end},n.value,u.value,o.value,s.value,i.value,d.value,r.value,e.class],style:[v.value,m.value,e.style]},{default:()=>[t.default?a(S,{key:"content-defaults",defaults:{VImg:{cover:!0,src:e.image},VIcon:{icon:e.icon}}},{default:()=>[t.default()]}):e.image?a(Z,{key:"image",src:e.image,alt:"",cover:!0},null):e.icon?a(x,{key:"icon",icon:e.icon},null):e.text,Y(!1,"v-avatar")]})),{}}}),na=p({appendAvatar:String,appendIcon:C,prependAvatar:String,prependIcon:C,subtitle:[String,Number],title:[String,Number],...g(),...N()},"VCardItem"),sa=y()({name:"VCardItem",props:na(),setup(e,l){let{slots:t}=l;return f(()=>{var i;const n=!!(e.prependAvatar||e.prependIcon),u=!!(n||t.prepend),o=!!(e.appendAvatar||e.appendIcon),v=!!(o||t.append),r=!!(e.title!=null||t.title),s=!!(e.subtitle!=null||t.subtitle);return a("div",{class:["v-card-item",e.class],style:e.style},[u&&a("div",{key:"prepend",class:"v-card-item__prepend"},[t.prepend?a(S,{key:"prepend-defaults",disabled:!n,defaults:{VAvatar:{density:e.density,image:e.prependAvatar},VIcon:{density:e.density,icon:e.prependIcon}}},t.prepend):a(w,null,[e.prependAvatar&&a(U,{key:"prepend-avatar",density:e.density,image:e.prependAvatar},null),e.prependIcon&&a(x,{key:"prepend-icon",density:e.density,icon:e.prependIcon},null)])]),a("div",{class:"v-card-item__content"},[r&&a(ae,{key:"title"},{default:()=>{var d;return[((d=t.title)==null?void 0:d.call(t))??e.title]}}),s&&a(aa,{key:"subtitle"},{default:()=>{var d;return[((d=t.subtitle)==null?void 0:d.call(t))??e.subtitle]}}),(i=t.default)==null?void 0:i.call(t)]),v&&a("div",{key:"append",class:"v-card-item__append"},[t.append?a(S,{key:"append-defaults",disabled:!o,defaults:{VAvatar:{density:e.density,image:e.appendAvatar},VIcon:{density:e.density,icon:e.appendIcon}}},t.append):a(w,null,[e.appendIcon&&a(x,{key:"append-icon",density:e.density,icon:e.appendIcon},null),e.appendAvatar&&a(U,{key:"append-avatar",density:e.density,image:e.appendAvatar},null)])])])}),{}}}),la=p({opacity:[Number,String],...g(),...A()},"VCardText"),te=y()({name:"VCardText",props:la(),setup(e,l){let{slots:t}=l;return f(()=>a(e.tag,{class:["v-card-text",e.class],style:[{"--v-card-text-opacity":e.opacity},e.style]},t)),{}}}),ia=p({appendAvatar:String,appendIcon:C,disabled:Boolean,flat:Boolean,hover:Boolean,image:String,link:{type:Boolean,default:void 0},prependAvatar:String,prependIcon:C,ripple:{type:[Boolean,Object],default:!0},subtitle:[String,Number],text:[String,Number],title:[String,Number],...H(),...g(),...N(),...be(),...Ve(),...he(),...xe(),...Se(),...W(),...Ae(),...A(),...L(),...q({variant:"elevated"})},"VCard"),da=y()({name:"VCard",directives:{Ripple:Ie},props:ia(),setup(e,l){let{attrs:t,slots:n}=l;const{themeClasses:u}=$(e),{borderClasses:o}=G(e),{colorClasses:v,colorStyles:r,variantClasses:s}=K(e),{densityClasses:i}=Q(e),{dimensionStyles:d}=Pe(e),{elevationClasses:m}=_e(e),{loaderClasses:ne}=Te(e),{locationStyles:se}=Be(e),{positionClasses:le}=we(e),{roundedClasses:ie}=X(e),b=Ne(e,t),de=B(()=>e.link!==!1&&b.isLink.value),V=B(()=>!e.disabled&&e.link!==!1&&(e.link||b.isClickable.value));return f(()=>{const re=de.value?"a":e.tag,oe=!!(n.title||e.title!=null),ce=!!(n.subtitle||e.subtitle!=null),ue=oe||ce,ve=!!(n.append||e.appendAvatar||e.appendIcon),me=!!(n.prepend||e.prependAvatar||e.prependIcon),ye=!!(n.image||e.image),ge=ue||me||ve,fe=!!(n.text||e.text!=null);return Je(a(re,We({class:["v-card",{"v-card--disabled":e.disabled,"v-card--flat":e.flat,"v-card--hover":e.hover&&!(e.disabled||e.flat),"v-card--link":V.value},u.value,o.value,v.value,i.value,m.value,ne.value,le.value,ie.value,s.value,e.class],style:[r.value,d.value,se.value,e.style],onClick:V.value&&b.navigate,tabindex:e.disabled?-1:void 0},b.linkProps),{default:()=>{var D;return[ye&&a("div",{key:"image",class:"v-card__image"},[n.image?a(S,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},n.image):a(Z,{key:"image-img",cover:!0,src:e.image},null)]),a(De,{name:"v-card",active:!!e.loading,color:typeof e.loading=="boolean"?void 0:e.loading},{default:n.loader}),ge&&a(sa,{key:"item",prependAvatar:e.prependAvatar,prependIcon:e.prependIcon,title:e.title,subtitle:e.subtitle,appendAvatar:e.appendAvatar,appendIcon:e.appendIcon},{default:n.item,prepend:n.prepend,title:n.title,subtitle:n.subtitle,append:n.append}),fe&&a(te,{key:"text"},{default:()=>{var F;return[((F=n.text)==null?void 0:F.call(n))??e.text]}}),(D=n.default)==null?void 0:D.call(n),n.actions&&a(ee,null,{default:n.actions}),Y(V.value,"v-card")]}}),[[He("ripple"),V.value&&e.ripple]])}),{}}}),ra=p({color:String,inset:Boolean,length:[Number,String],opacity:[Number,String],thickness:[Number,String],vertical:Boolean,...g(),...L()},"VDivider"),oa=y()({name:"VDivider",props:ra(),setup(e,l){let{attrs:t,slots:n}=l;const{themeClasses:u}=$(e),{textColorClasses:o,textColorStyles:v}=Le(Ue(e,"color")),r=B(()=>{const s={};return e.length&&(s[e.vertical?"height":"width"]=z(e.length)),e.thickness&&(s[e.vertical?"borderRightWidth":"borderTopWidth"]=z(e.thickness)),s});return f(()=>{const s=a("hr",{class:[{"v-divider":!0,"v-divider--inset":e.inset,"v-divider--vertical":e.vertical},u.value,o.value,e.class],style:[r.value,v.value,{"--v-border-opacity":e.opacity},e.style],"aria-orientation":!t.role||t.role==="separator"?e.vertical?"vertical":"horizontal":void 0,role:`${t.role||"separator"}`},null);return n.default?a("div",{class:["v-divider__wrapper",{"v-divider__wrapper--vertical":e.vertical,"v-divider__wrapper--inset":e.inset}]},[s,a("div",{class:"v-divider__content"},[n.default()]),s]):s}),{}}}),ca={class:"pa-3 code-block"},ua={style:{position:"absolute",bottom:"15px"}},va={key:0,class:"text-success mr-3"},ma={__name:"ExportState",props:qe({getLayers:{type:Function,default:Fe}},{modelValue:{type:Boolean,required:!0,default:!1},modelModifiers:{}}),emits:["update:modelValue"],setup(e){const l=Ge(e,"modelValue"),t=e,n=Ke(!1),u=[{id:Symbol(),copyFn:async()=>await P(v(),n),copyAs:"simple map"},{id:Symbol(),copyFn:async()=>await P(JSON.stringify(t.getLayers()),n),copyAs:"layers configuration"},{id:Symbol(),copyFn:async()=>await P(o(),n),copyAs:"map tour section"}],o=()=>{const[r,s,i]=M.value,d="### <!--{ layers=",m=`zoom="${i}" center=[${[r,s]}] projection="${O.value}" animationOptions={duration:500}}-->
#### Tour step title
Text describing the current step of the tour and why it is interesting what the map shows currently
`;return`${d}'${JSON.stringify(I(t.getLayers()))}' ${m}`},v=()=>{const[r,s,i]=M.value,d='## Map Example <!--{as="eox-map" style="width: 100%; height: 500px;" layers=',m=`zoom="${i}" center=[${[r,s]}] projection="${O.value}" }-->`;return`${d}'${JSON.stringify(I(t.getLayers()))}' ${m}`};return(r,s)=>(_(),Qe(Re,{modelValue:l.value,"onUpdate:modelValue":s[1]||(s[1]=i=>l.value=i)},{default:c(()=>[a(da,{style:{"max-height":"498px"}},{default:c(()=>[a(ae,{class:"bg-primary",style:{"max-height":"49px"}},{default:c(()=>s[2]||(s[2]=[k("h5",{class:"text-h5"},"Storytelling map configuration",-1)])),_:1}),a(te,{class:"py-5 overflow-auto",style:{height:"400px"}},{default:c(()=>[s[4]||(s[4]=k("p",{class:"text-body-2"},[h(" Copy and paste this code into the map "),k("b",null,"layers field"),h(" of the storytelling editor: ")],-1)),k("div",ca,R(T(I)(e.getLayers())),1),k("div",ua,[a(je,null,{default:c(()=>[n.value?(_(),j("div",va,[a(x,{color:"success",left:"",icon:[T(ze)]},null,8,["icon"]),s[3]||(s[3]=k("small",null,"copied!",-1))])):Xe("v-if",!0)]),_:1})]),a(Ee,{class:"d-flex pt-3 justify-end"},{default:c(()=>[a(Me,{cols:"6",class:"flex-column align-center text-end"},{default:c(()=>[(_(),j(w,null,Ye(u,i=>a(E,{class:"text-body-2",onClick:i.copyFn,key:i.id,small:"",variant:"text","prepend-icon":[T(Oe)]},{default:c(()=>[h(" copy as "+R(i.copyAs),1)]),_:2},1032,["onClick","prepend-icon"])),64))]),_:1})]),_:1})]),_:1}),a(oa),a(ee,{style:{"max-height":"49px"}},{default:c(()=>[a(Ze),a(E,{variant:"text",onClick:s[0]||(s[0]=i=>l.value=!l.value)},{default:c(()=>s[5]||(s[5]=[h(" Close ")])),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"]))}},Sa=$e(ma,[["__scopeId","data-v-a263a06d"]]);export{Sa as default};
