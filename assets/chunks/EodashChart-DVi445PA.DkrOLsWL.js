import"./main.DPImhheu.js";import{o as v}from"./handling-D2SdB2V0.Dvtly75w.js";import{_ as B,ah as M,j as s,r as O,o as z,s as R,p as T,aQ as I,aR as D}from"./eo-dash.B6BgWw9m.js";import{T as N}from"./index-FgtF-dUu.DlwkZ_jt.js";import{aM as V,aH as L,a4 as q,$ as A,a8 as l,l as p,i as g,aS as H,av as f,k as x,X as b,ap as y,ad as w,h as i,U as J}from"./framework.CZO_p5AM.js";import"./lit-element.BMPlKsWQ.js";import"./addCommonStyleSheet.B0XXRREc.js";import"./sequential.DMX7fi97.js";import"./orient2d.DArCjZZA.js";import"./async-CPhpWFSP.Dck6NNfN.js";import"./utils.CXn2JPI8.js";import"./index.DEcLbyZe.js";import"./commonjsHelpers.C4iS2aBk.js";import"./migrate.MjwmQvJK.js";import"./main.C0tCDBVt.js";import"./when.BR7zwNJC.js";import"./index.BMqlagU3.js";import"./directive.CvdRHFdJ.js";import"./directive-helpers.DDXwWjbG.js";import"./unsafe-html.WWnMP6dQ.js";import"./map.DiiNQ3pp.js";import"./XYZ.1SXfXEbU.js";import"./Object.pJTQfvFL.js";import"./getElement.COiK8z0h.js";import"./VTooltip-AZMX6AcG.BTfm9PAM.js";import"./forwardRefs-DO-MpN1K.BOvCt1xm.js";import"./transition-Drpdmx-2.BD0a4etc.js";const U=".bg-surface:has(.eodash-chart-wrapper){height:100%;display:flex;flex-direction:column}",j=".eodash-chart-wrapper[data-v-c14bc6fb]{height:100%;flex-grow:1;min-height:180px;display:flex;flex-direction:column}.chart-frame[data-v-c14bc6fb]{position:relative;flex-grow:1;min-height:180px;display:flex;flex-direction:column}eox-chart[data-v-c14bc6fb]{flex-grow:1;min-height:0}.chart-toggle[data-v-c14bc6fb]{position:absolute;top:8px;right:46px;z-index:2;cursor:pointer}",F={ref:"container",class:"eodash-chart-wrapper"},K={viewBox:"0 0 20 20",width:"20",height:"20","aria-hidden":"true"},P=["d"],Q=[".spec",".dataValues",".opt"],X={__name:"EodashChart",props:{enableCompare:{type:Boolean,default:!1},vegaEmbedOptions:{type:Object,default(){return{actions:!0}}}},setup(c){const d=i(()=>c.enableCompare?O.value:z.value),m=i(()=>c.enableCompare?R.value:T.value),C=i(()=>{const a=m.value;if(!a)return!1;let t=!1;const o=e=>{if(!(t||!e||typeof e!="object")){if("bind"in e&&typeof e.bind=="object"&&e.bind!==null&&"input"in e.bind){t=!0;return}Object.values(e).forEach(o)}};return o(a),t}),n=w(null);V(m,a=>{if(!a){n.value=null;return}const t=JSON.parse(JSON.stringify(a));t.height="container",t.width="container",J(()=>{n.value=t,u.value=Math.random(),setTimeout(()=>{window.dispatchEvent(new Event("resize"))},150)})},{immediate:!0});const u=w(0),_=L("container");let r=null,h=null;q(()=>{const a=_.value;if(!a)return;h=window.setInterval(()=>{if(a){const o=a.querySelector("eox-chart");if(o&&o.shadowRoot&&!o.shadowRoot.querySelector("#eodash-chart-styles")){const e=document.createElement("style");e.id="eodash-chart-styles",e.innerHTML=`
            * {
              box-sizing: border-box !important;
            }
            #vis {
              min-height: 100px !important;
              flex: 1 1 auto !important;
            }
            :host, .vega-embed {
              display: flex !important;
              flex-direction: column !important;
              height: 100% !important;
              padding: 0 !important;
              margin: 0 !important;
            }
            .vega-bindings {
              flex: 0 0 auto !important;
              display: flex !important;
              flex-wrap: wrap;
              gap: 2px !important;
              background: rgba(255, 255, 255, 0.85);
              padding: 6px 12px !important;
              border-radius: 6px;
              box-shadow: 0 2px 5px rgba(0,0,0,0.15);
              margin: 0 !important;
              margin-top: -10px !important;
              z-index: 10;
            }
            .vega-bindings:empty {
              display: none !important;
            }
            .vega-embed > canvas, .vega-embed > svg {
              height: 100% !important;
              max-width: 100% !important;
              object-fit: contain;
            }
            .vega-bind {
              display: flex;
              align-items: center;
              gap: 6px;
              margin-bottom: 0 !important;
            }
          `,o.shadowRoot.appendChild(e)}}},200);const t=M(a);t&&(r=new MutationObserver(async()=>{getComputedStyle(t).display!=="none"&&(u.value=Math.random())}),r.observe(t,{attributes:!0,attributeFilter:["style","class"]}))}),A(()=>{r==null||r.disconnect(),h&&window.clearInterval(h)});const S=i(()=>({height:"100%",width:"100%"})),E=i(()=>s.value?I:D);function k(){s.value=!s.value}return(a,t)=>(l(),p("div",F,[g("div",{class:"chart-frame",style:b({paddingBottom:C.value?"25px":"0px"})},[d.value&&m.value?H((l(),p("button",{key:0,class:"chart-toggle",onClick:k},[(l(),p("svg",K,[g("path",{d:E.value},null,8,P)]))])),[[N,f(s)?"Minimize":"Maximize"]]):x("v-if",!0),d.value&&n.value?(l(),p("eox-chart",{key:u.value,".spec":y(n.value),".dataValues":y(d.value),style:b(S.value),".opt":c.vegaEmbedOptions,"onClick:item":t[0]||(t[0]=(...o)=>f(v)&&f(v)(...o))},null,44,Q)):x("v-if",!0)],4)],512))}},Ct=B(X,[["styles",[U,j]],["__scopeId","data-v-c14bc6fb"]]);export{Ct as default};
