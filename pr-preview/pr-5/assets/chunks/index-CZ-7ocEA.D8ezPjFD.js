import"./main.B9A5upJb.js";import"./main.B8FRpMly.js";import"./main.DDob0gFj.js";import{_ as V,bw as A,c1 as K,aM as M,aN as z,t as F,al as q,j as G,aT as H,c as _,aY as Y,bV as Q,aa as W,ae as X,s as Z,p as $}from"./eo-dash.DnOA_r4g.js";import{c as ee,j as te,P as oe}from"./ProcessList-Kkihi8Cw.B4UkVz9J.js";import ae from"./EodashChart-CEYFFeiX.WUauTUWR.js";import{i as J,u as se,h as ne}from"./handling-B0xSx2QS.vfn5Awz7.js";import{k as re,u as ie,e as le}from"./async-DBIiZkED.Cg5dYnVE.js";import{aH as ce,aM as O,a8 as g,l as R,i as de,r as pe,av as S,k,j as I,aR as N,q as D,a4 as me,U,a6 as ue,ad as w,h as B}from"./framework.CK5WmJt8.js";import"./lit-element.BMPlKsWQ.js";import"./addCommonStyleSheet.aE15bFtl.js";import"./sequential.DMX7fi97.js";import"./orient2d.DArCjZZA.js";import"./directive.CvdRHFdJ.js";import"./directive-helpers.DDXwWjbG.js";import"./when.BR7zwNJC.js";import"./Object.pJTQfvFL.js";import"./getElement.COiK8z0h.js";import"./GeoJSON.CITXdLK8.js";import"./WKT.DrK_MXZq.js";import"./commonjsHelpers.C4iS2aBk.js";import"./toolcool-range-slider.min.BBXDELo7.js";import"./utils.CXn2JPI8.js";import"./index.DEcLbyZe.js";import"./index.qjY-G9Oq.js";import"./migrate.MjwmQvJK.js";import"./main.CU63dwZk.js";import"./index.BMqlagU3.js";import"./unsafe-html.WWnMP6dQ.js";import"./map.DiiNQ3pp.js";import"./XYZ.1SXfXEbU.js";import"./index-tL9cBW2h.But9SJvY.js";import"./VTooltip-BmRfjjZs.VleZjmdT.js";import"./forwardRefs-Bvaxboru.DJXXQ4YI.js";import"./transition-GO-yKyOm.pEjY7aR3.js";const fe=({selectedStac:n,jsonformSchema:a,isProcessed:i,processResults:l,loading:d,isPolling:m,mapElement:o})=>{me(async()=>{var s;await J({enableCompare:((s=o.value)==null?void 0:s.id)==="compare",selectedStac:n,jsonformSchema:a,isProcessed:i,processResults:l,loading:d,isPolling:m,mapElement:o.value})}),Q(async s=>{var E,h,f;const c=((E=o.value)==null?void 0:E.id)==="compare",u=c?"compareLayers:updated":"layers:updated";if((c?["compareLayertime:updated","compareTime:updated"]:["layertime:updated","time:updated"]).includes(s)){const y=await se({jsonformSchema:a.value,newLayers:c?W():X(),enableCompare:c,mapElement:o.value});y&&(Object.values(y.properties??{}).some(b=>{var L,C;return(C=(L=b==null?void 0:b.options)==null?void 0:L.drawtools)==null?void 0:C.layerId})&&!((f=(h=o.value)==null?void 0:h.selectInteractions)!=null&&f.SelectLayerClickInteraction)&&(a.value=null,await U()),a.value=y)}s===u&&await J({enableCompare:c,selectedStac:n,jsonformSchema:a,isProcessed:i,processResults:l,loading:d,isPolling:m,mapElement:o.value})})};function ve(n,a,i,l){const d=async o=>{await l()};O(i,o=>{var s;n.value=((s=o==null?void 0:o.options)==null?void 0:s.execute)||!1});const m=O([n,a],async([o,s],[c,u])=>{u&&u.removeEventListener("change",d),o&&s&&(s.removeEventListener("change",d),await U(),s.addEventListener("change",d))},{immediate:!0});ue(()=>{a.value&&a.value.removeEventListener("change",d),m()})}const he="eox-jsonform{padding:0 12px;min-height:0px;flex-shrink:0}.bg-surface:has(.eodash-process-container){height:calc(100% - 30px);overflow:hidden}.eodash-process-container{height:100%;display:flex;flex-direction:column;overflow:hidden}.eodash-process-content{flex-grow:1;overflow-y:auto;display:flex;flex-direction:column}.eodash-process-actions{text-align:right;padding:4px 12px;flex-shrink:0;border-top:1px solid rgba(0,0,0,.1);background:inherit}",ye={ref:"container",class:"eodash-process-container"},xe={class:"eodash-process-content"},ge=[".schema"],we={key:0,class:"eodash-process-actions"},be={__name:"index",props:{enableCompare:{type:Boolean,default:!1},vegaEmbedOptions:{type:Object,default(){return{actions:!0}}}},setup(n){const a=w(!1),i=w(null),l=ce("jsonformEl");O(l,e=>{if(e&&e.shadowRoot){const t="eodash-drawtools-inline-style";if(!e.shadowRoot.getElementById(t)){const r=document.createElement("style");r.id=t,r.textContent=`
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
      `,e.shadowRoot.appendChild(r)}const p=()=>{var v;const r=(v=e==null?void 0:e.shadowRoot)==null?void 0:v.querySelector("eox-drawtools");if(r&&r.shadowRoot&&!r.shadowRoot.getElementById("eodash-drawtools-indent-style")){const x=document.createElement("style");return x.id="eodash-drawtools-indent-style",x.textContent=`
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
          `,r.shadowRoot.appendChild(x),!0}return!1};if(!p()){const r=new MutationObserver(()=>{p()&&r.disconnect()});r.observe(e.shadowRoot,{childList:!0,subtree:!0})}}});const d=B(()=>{var e;return(e=j.value)==null?void 0:e.links.filter(t=>t.endpoint==="eoxhub_workspaces").length}),m=w(!1),o=w(!1),s=w(!1),c=w([]),u=B(()=>!o.value&&!!i.value&&!!l.value),{selectedStac:j,selectedCompareStac:E}=A(K()),h=n.enableCompare?E:j,f=n.enableCompare?M:z,y=n.enableCompare?F:q,P=n.enableCompare?ee:te,b=B(()=>{var e;return y.value+((e=f.value)==null?void 0:e.id)+JSON.stringify(i.value)});fe({selectedStac:h,mapElement:f,jsonformSchema:i,isProcessed:a,processResults:c,loading:m,isPolling:s});const L=()=>{c.value.forEach(e=>{var p;if(!e)return;let t="";typeof e=="string"?(t=e.includes("/")?e.split("/").pop()??"":e,t=t.includes("?")?t.split("?")[0]:t):t=((p=h.value)==null?void 0:p.id)+"_process_results.json",le(t,e)})},C=async()=>{var r;if(re(i.value).some(v=>{var x,T;return Array.isArray((x=l.value)==null?void 0:x.value[v])&&!((T=l.value)!=null&&T.value[v].length)})){a.value=!1;const v=n.enableCompare?Z:$;v.value=null;return}const p=(r=l.value)==null?void 0:r.editor.validate();if(p!=null&&p.length){console.warn("[eodash] Form validation failed",p);return}c.value=[],await ne({jobs:P,selectedStac:h,jsonformEl:l,jsonformSchema:i,loading:m,isPolling:s,processResults:c,mapElement:f.value}),a.value=!0,d.value&&ie(P,y.value)};return ve(o,l,i,C),(e,t)=>(g(),R("div",ye,[de("div",xe,[pe(oe,{"map-element":S(f),"enable-compare":n.enableCompare},null,8,["map-element","enable-compare"]),i.value?(g(),R("eox-jsonform",{key:b.value,ref_key:"jsonformEl",ref:l,".schema":i.value},null,40,ge)):k("v-if",!0),S(G)?k("v-if",!0):(g(),I(ae,{key:1,"vega-embed-options":n.vegaEmbedOptions,"enable-compare":n.enableCompare},null,8,["vega-embed-options","enable-compare"]))]),u.value||c.value.length&&a.value&&!d.value?(g(),R("div",we,[u.value?(g(),I(_,{key:0,loading:m.value,style:{"margin-right":"8px"},"append-icon":[S(H)],density:"comfortable",size:"small",onClick:C},{default:N(()=>[...t[0]||(t[0]=[D(" Execute ",-1)])]),_:1},8,["loading","append-icon"])):k("v-if",!0),c.value.length&&a.value&&!d.value?(g(),I(_,{key:1,color:"primary",style:{"margin-right":"8px"},"append-icon":[S(Y)],size:"small",density:"comfortable",onClick:L},{default:N(()=>[...t[1]||(t[1]=[D(" Download ",-1)])]),_:1},8,["append-icon"])):k("v-if",!0)])):k("v-if",!0)],512))}},at=V(be,[["styles",[he]]]);export{at as default};
