import{ak as U,O as y,T as g,al as fe,R as f,L as b,am as I,an as C,ao as j,ap as w,aq as q,ar as ke,W as L,as as W,Y as D,at as G,au as H,av as K,aw as Q,ax as be,U as Ce,ay as pe,az as Ve,aA as he,aB as xe,aC as Se,aD as Ae,a0 as Ie,aE as Pe,aF as _e,aG as Te,aH as Be,aI as Ne,aJ as we,D as Le,V as S,aK as A,aL as Y,aM as De,a5 as E,aN as $e,q as F,aO as P,aP as ze,aQ as Ee,aR as Fe,b as R,aS as Re,aT as _}from"./eo-dash.D5X-Ch81.js";import Oe from"./PopUp--_xn1Cms.B19FOs4k.js";import{V as Me}from"./index-BZwk0V42.wNipOhli.js";import{V as X}from"./VImg-9xu2l99m.BndxeWHt.js";import{h as p,ak as Je,G as a,F as N,as as Ue,at as je,K as qe,aM as We,aE as Ge,p as He,o as T,b as Ke,w as c,j as k,a as x,t as O,k as B,c as M,e as Qe,C as Ye}from"./framework.DvYN4D0M.js";import"./theme.BR9QJcCc.js";import"./commonjsHelpers.BosuxZz1.js";import"./VOverlay-D89omJis.Cy7axrG_.js";import"./forwardRefs-CYrR6bMw.C6LiLlDM.js";import"./transition-DG9nRSW4.BYb-RGVA.js";const Xe=U("v-spacer","div","VSpacer"),Z=y()({name:"VCardActions",props:g(),setup(e,l){let{slots:t}=l;return fe({VBtn:{slim:!0,variant:"text"}}),f(()=>{var n;return a("div",{class:["v-card-actions",e.class],style:e.style},[(n=t.default)==null?void 0:n.call(t)])}),{}}}),Ze=b({opacity:[Number,String],...g(),...I()},"VCardSubtitle"),ea=y()({name:"VCardSubtitle",props:Ze(),setup(e,l){let{slots:t}=l;return f(()=>a(e.tag,{class:["v-card-subtitle",e.class],style:[{"--v-card-subtitle-opacity":e.opacity},e.style]},t)),{}}}),ee=U("v-card-title"),aa=b({start:Boolean,end:Boolean,icon:C,image:String,text:String,...j(),...g(),...w(),...q(),...ke(),...I(),...L(),...W({variant:"flat"})},"VAvatar"),J=y()({name:"VAvatar",props:aa(),setup(e,l){let{slots:t}=l;const{themeClasses:n}=D(e),{borderClasses:u}=G(e),{colorClasses:o,colorStyles:v,variantClasses:r}=H(e),{densityClasses:s}=K(e),{roundedClasses:i}=Q(e),{sizeClasses:d,sizeStyles:m}=be(e);return f(()=>a(e.tag,{class:["v-avatar",{"v-avatar--start":e.start,"v-avatar--end":e.end},n.value,u.value,o.value,s.value,i.value,d.value,r.value,e.class],style:[v.value,m.value,e.style]},{default:()=>[t.default?a(A,{key:"content-defaults",defaults:{VImg:{cover:!0,src:e.image},VIcon:{icon:e.icon}}},{default:()=>[t.default()]}):e.image?a(X,{key:"image",src:e.image,alt:"",cover:!0},null):e.icon?a(S,{key:"icon",icon:e.icon},null):e.text,Y(!1,"v-avatar")]})),{}}}),ta=b({appendAvatar:String,appendIcon:C,prependAvatar:String,prependIcon:C,subtitle:[String,Number],title:[String,Number],...g(),...w()},"VCardItem"),na=y()({name:"VCardItem",props:ta(),setup(e,l){let{slots:t}=l;return f(()=>{var i;const n=!!(e.prependAvatar||e.prependIcon),u=!!(n||t.prepend),o=!!(e.appendAvatar||e.appendIcon),v=!!(o||t.append),r=!!(e.title!=null||t.title),s=!!(e.subtitle!=null||t.subtitle);return a("div",{class:["v-card-item",e.class],style:e.style},[u&&a("div",{key:"prepend",class:"v-card-item__prepend"},[t.prepend?a(A,{key:"prepend-defaults",disabled:!n,defaults:{VAvatar:{density:e.density,image:e.prependAvatar},VIcon:{density:e.density,icon:e.prependIcon}}},t.prepend):a(N,null,[e.prependAvatar&&a(J,{key:"prepend-avatar",density:e.density,image:e.prependAvatar},null),e.prependIcon&&a(S,{key:"prepend-icon",density:e.density,icon:e.prependIcon},null)])]),a("div",{class:"v-card-item__content"},[r&&a(ee,{key:"title"},{default:()=>{var d;return[((d=t.title)==null?void 0:d.call(t))??e.title]}}),s&&a(ea,{key:"subtitle"},{default:()=>{var d;return[((d=t.subtitle)==null?void 0:d.call(t))??e.subtitle]}}),(i=t.default)==null?void 0:i.call(t)]),v&&a("div",{key:"append",class:"v-card-item__append"},[t.append?a(A,{key:"append-defaults",disabled:!o,defaults:{VAvatar:{density:e.density,image:e.appendAvatar},VIcon:{density:e.density,icon:e.appendIcon}}},t.append):a(N,null,[e.appendIcon&&a(S,{key:"append-icon",density:e.density,icon:e.appendIcon},null),e.appendAvatar&&a(J,{key:"append-avatar",density:e.density,image:e.appendAvatar},null)])])])}),{}}}),sa=b({opacity:[Number,String],...g(),...I()},"VCardText"),ae=y()({name:"VCardText",props:sa(),setup(e,l){let{slots:t}=l;return f(()=>a(e.tag,{class:["v-card-text",e.class],style:[{"--v-card-text-opacity":e.opacity},e.style]},t)),{}}}),la=b({appendAvatar:String,appendIcon:C,disabled:Boolean,flat:Boolean,hover:Boolean,image:String,link:{type:Boolean,default:void 0},prependAvatar:String,prependIcon:C,ripple:{type:[Boolean,Object],default:!0},subtitle:[String,Number],text:[String,Number],title:[String,Number],...j(),...g(),...w(),...Ce(),...pe(),...Ve(),...he(),...xe(),...q(),...Se(),...I(),...L(),...W({variant:"elevated"})},"VCard"),ia=y()({name:"VCard",directives:{Ripple:Ae},props:la(),setup(e,l){let{attrs:t,slots:n}=l;const{themeClasses:u}=D(e),{borderClasses:o}=G(e),{colorClasses:v,colorStyles:r,variantClasses:s}=H(e),{densityClasses:i}=K(e),{dimensionStyles:d}=Ie(e),{elevationClasses:m}=Pe(e),{loaderClasses:te}=_e(e),{locationStyles:ne}=Te(e),{positionClasses:se}=Be(e),{roundedClasses:le}=Q(e),V=Ne(e,t),ie=p(()=>e.link!==!1&&V.isLink.value),h=p(()=>!e.disabled&&e.link!==!1&&(e.link||V.isClickable.value));return f(()=>{const de=ie.value?"a":e.tag,re=!!(n.title||e.title!=null),oe=!!(n.subtitle||e.subtitle!=null),ce=re||oe,ue=!!(n.append||e.appendAvatar||e.appendIcon),ve=!!(n.prepend||e.prependAvatar||e.prependIcon),me=!!(n.image||e.image),ye=ce||ve||ue,ge=!!(n.text||e.text!=null);return Ue(a(de,qe({class:["v-card",{"v-card--disabled":e.disabled,"v-card--flat":e.flat,"v-card--hover":e.hover&&!(e.disabled||e.flat),"v-card--link":h.value},u.value,o.value,v.value,i.value,m.value,te.value,se.value,le.value,s.value,e.class],style:[r.value,d.value,ne.value,e.style],onClick:h.value&&V.navigate,tabindex:e.disabled?-1:void 0},V.linkProps),{default:()=>{var $;return[me&&a("div",{key:"image",class:"v-card__image"},[n.image?a(A,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},n.image):a(X,{key:"image-img",cover:!0,src:e.image},null)]),a(De,{name:"v-card",active:!!e.loading,color:typeof e.loading=="boolean"?void 0:e.loading},{default:n.loader}),ye&&a(na,{key:"item",prependAvatar:e.prependAvatar,prependIcon:e.prependIcon,title:e.title,subtitle:e.subtitle,appendAvatar:e.appendAvatar,appendIcon:e.appendIcon},{default:n.item,prepend:n.prepend,title:n.title,subtitle:n.subtitle,append:n.append}),ge&&a(ae,{key:"text"},{default:()=>{var z;return[((z=n.text)==null?void 0:z.call(n))??e.text]}}),($=n.default)==null?void 0:$.call(n),n.actions&&a(Z,null,{default:n.actions}),Y(h.value,"v-card")]}}),[[je("ripple"),h.value&&e.ripple]])}),{}}}),da=b({color:String,inset:Boolean,length:[Number,String],opacity:[Number,String],thickness:[Number,String],vertical:Boolean,...g(),...L()},"VDivider"),ra=y()({name:"VDivider",props:da(),setup(e,l){let{attrs:t,slots:n}=l;const{themeClasses:u}=D(e),{textColorClasses:o,textColorStyles:v}=we(Je(e,"color")),r=p(()=>{const s={};return e.length&&(s[e.vertical?"height":"width"]=E(e.length)),e.thickness&&(s[e.vertical?"borderRightWidth":"borderTopWidth"]=E(e.thickness)),s});return f(()=>{const s=a("hr",{class:[{"v-divider":!0,"v-divider--inset":e.inset,"v-divider--vertical":e.vertical},u.value,o.value,e.class],style:[r.value,v.value,{"--v-border-opacity":e.opacity},e.style],"aria-orientation":!t.role||t.role==="separator"?e.vertical?"vertical":"horizontal":void 0,role:`${t.role||"separator"}`},null);return n.default?a("div",{class:["v-divider__wrapper",{"v-divider__wrapper--vertical":e.vertical,"v-divider__wrapper--inset":e.inset}]},[s,a("div",{class:"v-divider__content"},[n.default()]),s]):s}),{}}}),oa={class:"pa-3 code-block"},ca={style:{position:"absolute",bottom:"15px"}},ua={key:0,class:"text-success mr-3"},va={__name:"ExportState",props:We({getLayers:{type:Function,default:$e}},{modelValue:{type:Boolean,required:!0,default:!1},modelModifiers:{}}),emits:["update:modelValue"],setup(e){const l=Ge(e,"modelValue"),t=e,n=He(!1),u=[{id:Symbol(),copyFn:async()=>await _(v.value,n),copyAs:"simple map"},{id:Symbol(),copyFn:async()=>await _(JSON.stringify(t.getLayers()),n),copyAs:"layers configuration"},{id:Symbol(),copyFn:async()=>await _(o.value,n),copyAs:"map tour section"}],o=p(()=>{const[r,s,i]=F.value,d="### <!--{ layers=",m=`zoom="${i}" center=[${[r,s]}] animationOptions={duration:500}}-->
#### Tour step title
Text describing the current step of the tour and why it is interesting what the map shows currently
`;return`${d}'${JSON.stringify(P(t.getLayers()))}' ${m}`}),v=p(()=>{const[r,s,i]=F.value,d='## Map Example <!--{as="eox-map" style="width: 100%; height: 500px;" layers=',m=`zoom="${i}" center=[${[r,s]}] }-->`;return`${d}'${JSON.stringify(P(t.getLayers()))}' ${m}`});return(r,s)=>(T(),Ke(Oe,{modelValue:l.value,"onUpdate:modelValue":s[1]||(s[1]=i=>l.value=i)},{default:c(()=>[a(ia,{style:{"max-height":"498px"}},{default:c(()=>[a(ee,{class:"bg-primary",style:{"max-height":"49px"}},{default:c(()=>s[2]||(s[2]=[k("h5",{class:"text-h5"},"Storytelling map configuration",-1)])),_:1}),a(ae,{class:"py-5 overflow-auto",style:{height:"400px"}},{default:c(()=>[s[4]||(s[4]=k("p",{class:"text-body-2"},[x(" Copy and paste this code into the map "),k("b",null,"layers field"),x(" of the storytelling editor: ")],-1)),k("div",oa,O(B(P)(e.getLayers())),1),k("div",ca,[a(Me,null,{default:c(()=>[n.value?(T(),M("div",ua,[a(S,{color:"success",left:"",icon:[B(ze)]},null,8,["icon"]),s[3]||(s[3]=k("small",null,"copied!",-1))])):Qe("v-if",!0)]),_:1})]),a(Ee,{class:"d-flex pt-3 justify-end"},{default:c(()=>[a(Fe,{cols:"6",class:"flex-column align-center text-end"},{default:c(()=>[(T(),M(N,null,Ye(u,i=>a(R,{class:"text-body-2",onClick:i.copyFn,key:i.id,small:"",variant:"text","prepend-icon":[B(Re)]},{default:c(()=>[x(" copy as "+O(i.copyAs),1)]),_:2},1032,["onClick","prepend-icon"])),64))]),_:1})]),_:1})]),_:1}),a(ra),a(Z,{style:{"max-height":"49px"}},{default:c(()=>[a(Xe),a(R,{variant:"text",onClick:s[0]||(s[0]=i=>l.value=!l.value)},{default:c(()=>s[5]||(s[5]=[x(" Close ")])),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"]))}},xa=Le(va,[["__scopeId","data-v-bfef967b"]]);export{xa as default};
