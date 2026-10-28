import{o as V,bL as D,ch as F,b2 as z,b3 as G,X as U,aA as q,r as K,b9 as M,i as O,bf as Q,c9 as X,ar as H,au as W,bV as Y,T as Z,G as $}from"./eo-dash.M99y2CZu.js";import{e as ee,k as te,u as oe}from"./async-97afytvP.ChcxQA62.js";import{i as P,u as ae,h as se}from"./handling-DC-8T0hW.Dc5aKs0F.js";import re from"./EodashChart-1adj5VAP.CmJzyVHQ.js";import ne,{t as ie,n as le}from"./ProcessList-UEKSnPTB.ZyCi5mns.js";import"./main.0h2adVd0.js";import"./main.CgG9GN9K.js";import"./main.RYbv0rNg.js";import{aG as ce,aL as I,a7 as y,l as S,i as de,q as pe,au as _,k as C,j as R,aQ as J,p as T,ac as x,h as j,a3 as me,Q as A,a5 as ue}from"./framework.Clme5EQu.js";import"./commonjsHelpers.C4iS2aBk.js";import"./main.BLFefMYu.js";import"./lit-element.BMPlKsWQ.js";import"./WMTS.BiC_8zSJ.js";import"./intersectsextent.C_jsbJlI.js";import"./util.Dhne-uB2.js";import"./XYZ.Z_8-pYmn.js";import"./GeoJSON.l-3d6_RN.js";import"./getElement.COiK8z0h.js";import"./addCommonStyleSheet.B0XXRREc.js";import"./utils.DwtP9_Dv.js";import"./index.BlRfQdx3.js";import"./tooltip-BbcyEw-0.B_dnaktN.js";import"./VTooltip-CDWvPXrc.Dd95Aohk.js";import"./forwardRefs-DuxpMa3C.Cr860h-L.js";import"./transition-kTN22ujO.C4FRM6Xk.js";import"./sequential.DMX7fi97.js";import"./orient2d.DArCjZZA.js";import"./directive.CvdRHFdJ.js";import"./directive-helpers.DDXwWjbG.js";import"./when.BR7zwNJC.js";import"./WKT.D18DC8LA.js";import"./toolcool-range-slider.min.BBXDELo7.js";import"./index.qjY-G9Oq.js";var fe=({selectedStac:r,jsonformSchema:o,isProcessed:i,processResults:l,loading:d,isPolling:m,mapElement:a})=>{me(async()=>{var s;await P({enableCompare:((s=a.value)==null?void 0:s.id)==="compare",selectedStac:r,jsonformSchema:o,isProcessed:i,processResults:l,loading:d,isPolling:m,mapElement:a.value})}),X(async s=>{var g,k,h;const c=((g=a.value)==null?void 0:g.id)==="compare",f=c?"compareLayers:updated":"layers:updated";if((c?["compareLayertime:updated","compareTime:updated"]:["layertime:updated","time:updated"]).includes(s)){const u=await ae({jsonformSchema:o.value,newLayers:c?H():W(),enableCompare:c,mapElement:a.value});u&&(Object.values(u.properties??{}).some(v=>{var b,E;return(E=(b=v==null?void 0:v.options)==null?void 0:b.drawtools)==null?void 0:E.layerId})&&!((h=(k=a.value)==null?void 0:k.selectInteractions)!=null&&h.SelectLayerClickInteraction)&&(o.value=null,await A()),o.value=u)}s===f&&await P({enableCompare:c,selectedStac:r,jsonformSchema:o,isProcessed:i,processResults:l,loading:d,isPolling:m,mapElement:a.value})})};function he(r,o,i,l){const d=Y(()=>l(),200);I(i,a=>{var s;r.value=((s=a==null?void 0:a.options)==null?void 0:s.execute)||!1});const m=I([r,o],async([a,s],[c,f])=>{f&&f.removeEventListener("change",d),a&&s&&(s.removeEventListener("change",d),await A(),s.addEventListener("change",d))},{immediate:!0});ue(()=>{o.value&&o.value.removeEventListener("change",d),m()})}var ve="eox-jsonform{flex-shrink:0;min-height:0;padding:0 12px}.bg-surface:has(.eodash-process-container){height:calc(100% - 30px);overflow:hidden}.eodash-process-container{flex-direction:column;height:100%;display:flex;overflow:hidden}.eodash-process-content{scrollbar-gutter:stable;flex-direction:column;flex-grow:1;display:flex;overflow-y:auto}.eodash-process-content>.eodash-chart-wrapper:not(.fit-x-layout){flex:1 1 0;height:auto;min-height:180px}.eodash-process-content>.eodash-chart-wrapper.fit-x-layout{flex:none;height:auto!important}.eodash-process-actions{text-align:right;background:inherit;border-top:1px solid #0000001a;flex-shrink:0;padding:4px 12px}",ye={ref:"container",class:"eodash-process-container"},xe={class:"eodash-process-content"},ge=[".schema"],be={key:0,class:"eodash-process-actions"},et=V({__name:"index",props:{enableCompare:{type:Boolean,default:!1},vegaEmbedOptions:{type:Object,default(){return{actions:!0}}}},setup(r){const o=x(!1),i=x(null),l=ce("jsonformEl");I(l,e=>{if(e&&e.shadowRoot){const t="eodash-drawtools-inline-style";if(!e.shadowRoot.getElementById(t)){const n=document.createElement("style");n.id=t,n.textContent=`
        /* Compact standard form elements */
        .form-control, .form-group {
          margin-bottom: 8px !important;
        }
        .form-control > label, .form-group > label {
          margin-bottom: 2px !important;
          font-size: 0.9em;
        }
        
        /* Specific layout for drawtools */
        .form-control:has(eox-drawtools) {
          position: relative;
          padding: 8px 12px !important;
          border: none !important;
          background: transparent !important;
          margin-bottom: 8px !important;
        }
        .form-control:has(eox-drawtools) > label {
          position: absolute;
          left: 12px;
          top: 8px;
          margin: 0 !important;
          width: calc(100% - 180px); /* Give label maximum available width */
          line-height: 1.2;
          display: flex;
          align-items: flex-start;
          padding-top: 8px;
          pointer-events: none; /* Let clicks pass through to buttons if they overlap slightly */
        }
        .form-control:has(eox-drawtools) > eox-drawtools {
          display: block;
          width: 100%;
        }
      `,e.shadowRoot.appendChild(n)}const p=()=>{var w;const n=(w=e==null?void 0:e.shadowRoot)==null?void 0:w.querySelector("eox-drawtools");if(n&&n.shadowRoot&&!n.shadowRoot.getElementById("eodash-drawtools-indent-style")){const L=document.createElement("style");return L.id="eodash-drawtools-indent-style",L.textContent=`
            eox-drawtools-controller {
              display: flex;
              justify-content: flex-end; /* Push buttons to the right */
              min-height: 40px;
              width: 100%;
            }
            eox-drawtools-list {
              display: block;
              margin-top: 10px;
              width: 100%;
            }
          `,n.shadowRoot.appendChild(L),!0}return!1};if(!p()){const n=new MutationObserver(()=>{p()&&n.disconnect()});n.observe(e.shadowRoot,{childList:!0,subtree:!0})}}});const d=j(()=>{var e;return(e=g.value)==null?void 0:e.links.filter(t=>t.endpoint==="eoxhub_workspaces").length}),m=x(!1),a=x(!1),s=x(!1),c=x([]),f=j(()=>!a.value&&!!i.value&&!!l.value),{selectedStac:g,selectedCompareStac:k}=D(F()),h=r.enableCompare?k:g,u=r.enableCompare?z:G,v=r.enableCompare?U:q,b=r.enableCompare?ie:le,E=j(()=>{var e;return v.value+((e=u.value)==null?void 0:e.id)+JSON.stringify(i.value)});fe({selectedStac:h,mapElement:u,jsonformSchema:i,isProcessed:o,processResults:c,loading:m,isPolling:s});const N=()=>{c.value.forEach(e=>{var p;if(!e)return;let t="";typeof e=="string"?(t=e.includes("/")?e.split("/").pop()??"":e,t=t.includes("?")?t.split("?")[0]:t):t=((p=h.value)==null?void 0:p.id)+"_process_results.json",ee(t,e)})},B=async()=>{var t;if(te(i.value).some(p=>{var n,w;return Array.isArray((n=l.value)==null?void 0:n.value[p])&&!((w=l.value)!=null&&w.value[p].length)})){o.value=!1;const p=r.enableCompare?Z:$;p.value=null;return}const e=(t=l.value)==null?void 0:t.editor.validate();if(e!=null&&e.length){console.warn("[eodash] Form validation failed",e);return}c.value=[],await se({jobs:b,selectedStac:h,jsonformEl:l,jsonformSchema:i,loading:m,isPolling:s,processResults:c,mapElement:u.value}),o.value=!0,d.value&&oe(b,v.value)};return he(a,l,i,B),(e,t)=>(y(),S("div",ye,[de("div",xe,[pe(ne,{"map-element":_(u),"enable-compare":r.enableCompare},null,8,["map-element","enable-compare"]),i.value?(y(),S("eox-jsonform",{key:E.value,ref_key:"jsonformEl",ref:l,".schema":i.value},null,40,ge)):C("v-if",!0),_(K)?C("v-if",!0):(y(),R(re,{key:1,"vega-embed-options":r.vegaEmbedOptions,"enable-compare":r.enableCompare},null,8,["vega-embed-options","enable-compare"]))]),f.value||c.value.length&&o.value&&!d.value?(y(),S("div",be,[f.value?(y(),R(O,{key:0,loading:m.value,style:{"margin-right":"8px"},"append-icon":[_(M)],density:"comfortable",size:"small",onClick:B},{default:J(()=>[...t[0]||(t[0]=[T(" Execute ",-1)])]),_:1},8,["loading","append-icon"])):C("v-if",!0),c.value.length&&o.value&&!d.value?(y(),R(O,{key:1,color:"primary",style:{"margin-right":"8px"},"append-icon":[_(Q)],size:"small",density:"comfortable",onClick:N},{default:J(()=>[...t[1]||(t[1]=[T(" Download ",-1)])]),_:1},8,["append-icon"])):C("v-if",!0)])):C("v-if",!0)],512))}},[["styles",[ve]]]);export{et as default};
