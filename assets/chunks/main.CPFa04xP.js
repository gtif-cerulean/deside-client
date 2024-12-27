var q=Object.defineProperty;var F=t=>{throw TypeError(t)};var K=(t,e,o)=>e in t?q(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o;var T=(t,e,o)=>K(t,typeof e!="symbol"?e+"":e,o),k=(t,e,o)=>e.has(t)||F("Cannot "+o);var c=(t,e,o)=>(k(t,e,"read from private field"),o?o.call(t):e.get(t)),_=(t,e,o)=>e.has(t)?F("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,o),A=(t,e,o,r)=>(k(t,e,"write to private field"),r?r.call(t,o):e.set(t,o),o),L=(t,e,o)=>(k(t,e,"access private method"),o);import{r as Y,x as U}from"./lit-element.Cu4xVypU.js";import{A as z,J as v,E as W,S as X,i as R}from"./index.BlmzfcAG.js";import{s as Q}from"./all.style.BXiFe-7i.js";import"./commonjsHelpers.BosuxZz1.js";function tt(t,e){Object.keys(e).forEach(o=>{t.setAttribute(o,e[o])})}class et extends z{register(){super.register()}unregister(){super.unregister()}build(){const e=this.schema.properties,o=this.options,r=this.schema.description,i=this.theme,s=this.defaults.startVals[this.key];o.compact||(this.header=this.label=i.getFormInputLabel(this.getTitle(),this.isRequired())),r&&(this.description=i.getFormInputDescription(this.translateProperty(r))),o.infoText&&(this.infoButton=i.getInfoButton(this.translateProperty(o.infoText)));const n=document.createElement("tc-range-slider"),l=Object.keys(e).find(d=>d.includes("min")),f=Object.keys(e).find(d=>d.includes("max")),b={min:e[l].minimum,max:e[f].maximum,value1:(s==null?void 0:s[l])||e[l].default,value2:(s==null?void 0:s[f])||e[f].default,"slider-bg-fill":"#004170","generate-labels":"true","slider-width":"100%","range-dragging":"false"};tt(n,b),this.input=n,this.input.id=this.formname,this.control=i.getFormControl(this.label,this.input,this.description,this.infoButton),(this.schema.readOnly||this.schema.readonly)&&(this.disable(!0),this.input.disabled=!0),this.input.addEventListener("change",d=>{d.preventDefault(),d.stopPropagation(),this.value={[l]:d.detail.value1,[f]:d.detail.value2},this.onChange(!0)}),this.container.appendChild(this.control)}destroy(){this.label&&this.label.parentNode&&this.label.parentNode.removeChild(this.label),this.description&&this.description.parentNode&&this.description.parentNode.removeChild(this.description),this.input&&this.input.parentNode&&this.input.parentNode.removeChild(this.input),super.destroy()}}const j=t=>["feature","features"].some(e=>(t==null?void 0:t.format)===e),E=t=>["polygon","polygons"].includes(t==null?void 0:t.format),$=t=>["point","points"].includes(t==null?void 0:t.format),C=t=>["bounding-boxes","bounding-box"].includes(t==null?void 0:t.format),V=t=>["lines","line"].includes(t==null?void 0:t.format),O=t=>(t==null?void 0:t.type)==="wkt",H=t=>(t==null?void 0:t.type)==="geojson",y=t=>["bounding-boxes","polygons","features","points","lines"].includes(t==null?void 0:t.format),ot=t=>j(t)||E(t)||C(t)||$(t)||V(t);function D(t,e){Object.keys(e).forEach(o=>{t.setAttribute(o,e[o])})}const it=(t,e)=>{if(!t||!e)return!1;switch(e){case"string":return typeof t=="string";case"number":return!isNaN(t);case"boolean":return typeof t=="boolean";case"array":return Array.isArray(t);case"object":return typeof t=="object"&&!!Object.keys(t).length}return!1};class a extends z{register(){super.register()}unregister(){super.unregister()}build(){var B,M,N,P;const e=this.options,o=this.schema.description,r=this.theme;e.compact||(this.header=this.label=r.getFormInputLabel(this.getTitle(),this.isRequired())),o&&(this.description=r.getFormInputDescription(this.translateProperty(o))),e.infoText&&(this.infoButton=r.getInfoButton(this.translateProperty(e.infoText)));const i=document.createElement("eox-drawtools");let s;switch(!0){case E(this.schema):s="Polygon";break;case C(this.schema):s="Box";break;case $(this.schema):s="Point";break;case V(this.schema):s="LineString";break;default:s="Box";break}let n;switch(!0){case O(this.schema):n="wkt";break;case H(this.schema):n="geojson";break;default:n="feature";break}const l={type:s,format:n};if((M=(B=this.schema)==null?void 0:B.options)!=null&&M.projection&&(l.projection=this.schema.options.projection),j(this.schema)&&(l["layer-id"]=this.schema.options.layerId),y(this.schema)&&(l["multiple-features"]=!0,l["show-list"]=!0),"for"in(this.schema.options??{}))l.for=this.options.for;else{const p=document.createElement("eox-map");p.projection="EPSG:4326";const m="map-"+this.formname.replace(/[^\w\s]/gi,"");p.layers=[{type:"Tile",source:{type:"OSM"}}],D(p,{id:m,style:"width: 100%; height: 300px;"}),this.container.appendChild(p),i.for=p}D(i,l),e.autoStartSelection!==!1&&i.updateComplete.then(()=>{i.startDrawing()}),this.input=i,this.input.id=this.formname,this.control=r.getFormControl(this.label,this.input,this.description,this.infoButton),(this.schema.readOnly||this.schema.readonly)&&(this.disable(!0),this.input.disabled=!0);const b=(P=(N=this.schema)==null?void 0:N.options)==null?void 0:P.featureProperty,d=(p,m)=>p.length?!y(this.schema)&&p.length===1?m(p[0]):p.map(m):m(p);this.input.addEventListener("drawupdate",p=>{var m;switch(p.preventDefault(),p.stopPropagation(),!0){case!p.detail:{this.value=null;break}case O(this.schema):{this.value=p.detail;break}case H(this.schema):{const h=p.detail;if(y(this.schema)){this.value=h;break}this.value=((m=h.features)==null?void 0:m[0])??null;break}case V(this.schema):{this.value=d(p.detail,h=>h.getGeometry().getCoordinates());break}case j(this.schema):{if(!p.detail.length){this.value=null;break}const h=g=>b?g.get(b)??g:g;this.value=d(p.detail,h);break}case C(this.schema):{if(!p.detail.length){this.value=null;break}const h=g=>g.getGeometry().getExtent();this.value=d(p.detail,h);break}case E(this.schema):{if(!p.detail.length){this.value=null;break}this.value=d(p.detail,h=>h);break}case $(this.schema):{if(!p.detail.length){this.value=null;break}this.value=d(p.detail,h=>{var g;return(g=h.getGeometry())==null?void 0:g.getCoordinates()});break}}this.onChange(!0)}),this.container.appendChild(this.control)}destroy(){this.label&&this.label.parentNode&&this.label.parentNode.removeChild(this.label),this.description&&this.description.parentNode&&this.description.parentNode.removeChild(this.description),this.input&&this.input.parentNode&&(this.input.parentNode.removeChild(this.input),this.input.discardDrawing(),this.input.remove()),super.destroy()}}function rt(t){return function(e,o,r){let i=[];return e.properties&&Object.keys(e.properties).forEach(s=>{const n=e.properties[s];if(!(ot(n)&&(n.format==="feature"||t.some(b=>b.format===n.format&&b.type===n.type))))return;const f=dt(s,o[s],r);if(f.length){i.push(...f);return}switch(!0){case O(n):{i.push(...ut(s,o[s],r));break}case H(n):{i.push(...ht(s,o[s],r,n));break}case j(n):{i.push(...w({key:s,subValue:o[s],subSchema:n,path:r,validationFn:nt}));break}case C(n):{i.push(...w({key:s,subValue:o[s],subSchema:n,path:r,validationFn:st}));break}case E(n):{i.push(...w({key:s,subValue:o[s],subSchema:n,path:r,validationFn:at}));break}case $(n):{i.push(...w({key:s,subValue:o[s],subSchema:n,path:r,validationFn:pt}));break}case V(n):{i.push(...w({key:s,subValue:o[s],subSchema:n,path:r,validationFn:lt}));break}}}),i}}function w({key:t,subValue:e,path:o,subSchema:r,validationFn:i}){if(y(r)){if(Array.isArray(e)){if(!e.length)return[{path:`${o}.${t}`,message:"Value is expected to have at least one value",property:"format"}]}else return[{path:`${o}.${t}`,message:`Value is expected to be an array but got typeof ${typeof e}`,property:"format"}];return e==null?void 0:e.flatMap((s,n)=>i(`${t}.${n}`,s,o,r))}else return i(t,e,o,r)}function st(t,e,o){const r=[];return e.length!==4?[{path:`${o}.${t}`,message:`Value is expected to have 4 items but got ${e.length}`,property:"format"}]:(e.forEach((i,s)=>{typeof i!="number"&&r.push({path:`${o}.${t}.${s}`,message:`extent is expected to be of type number but got ${i}`,property:"format"})}),r)}function nt(t,e,o,r){var s;let i;return y(r)?i=(s=r==null?void 0:r.items)==null?void 0:s.type:i=r.type,i?it(e,i)?[]:[{path:`${o}.${t}`,message:`Value is expected to be a valid ${i}`,property:"format"}]:[]}function at(t,e,o){return typeof e!="object"||!Object.keys(e).length?[{path:`${o}.${t}`,message:"Value was expected to be a feature object ",property:"format"}]:[]}function pt(t,e,o){const r=[];return e.length!==2?[{path:`${o}.${t}`,message:`Value is expected to have 2 items but got ${e.length}`,property:"format"}]:(e.forEach((i,s)=>{typeof i!="number"&&r.push({path:`${o}.${t}.${s}`,message:`coordinates is expected to be of type number but got ${i}`,property:"format"})}),r)}function lt(t,e,o){const r=[];return e.length<2?[{path:`${o}.${t}`,message:`Value is expected to have at least 2 points but got ${e.length}`,property:"format"}]:(e.forEach((i,s)=>{i.forEach((n,l)=>{typeof n!="number"&&r.push({path:`${o}.${t}.${s}.${l}`,message:`coordinates is expected to be of type number but got ${n}`,property:"format"})})}),r)}function dt(t,e,o){return e?[]:[{path:`${o}.${t}`,message:`invalid value ${JSON.stringify(e)}`,property:"type"}]}function ut(t,e,o){return typeof e!="string"?[{path:`${o}.${t}`,message:"Value is expected to be a valid wkt string",property:"type"}]:e==="GEOMETRYCOLLECTION EMPTY"?[{path:`${o}.${t}`,message:"Should have at least 1 Geometry",property:"type"}]:[]}function ht(t,e,o,r){var i;if(typeof e!="object"||!Object.keys(e).length)return[{path:`${o}.${t}`,message:"Value is expected to be a valid geojson object",property:"type"}];if(y(r)){if(e.type!=="FeatureCollection")return[{path:`${o}.${t}`,message:"Value is expected to be a valid FeaturesCollection geojson",property:"type"}];if(!((i=e==null?void 0:e.features)!=null&&i.length))return[{path:`${o}.${t}`,message:"Value is expected to have at least one feature",property:"type"}]}else if(!(e!=null&&e.geometry.type))return[{path:`${o}.${t}`,message:"Value is expected to have a valid geometry",property:"type"}];return[]}const S=[{type:"object",format:"minmax",func:et},{type:"array",format:"bounding-boxes",func:a},{type:"wkt",format:"bounding-boxes",func:a},{type:"geojson",format:"bounding-boxes",func:a},{type:"array",format:"bounding-box",func:a},{type:"wkt",format:"bounding-box",func:a},{type:"geojson",format:"bounding-box",func:a},{type:"array",format:"polygons",func:a},{type:"wkt",format:"polygons",func:a},{type:"geojson",format:"polygons",func:a},{type:"object",format:"polygon",func:a},{type:"wkt",format:"polygon",func:a},{type:"geojson",format:"polygon",func:a},{type:"array",format:"points",func:a},{type:"wkt",format:"points",func:a},{type:"geojson",format:"points",func:a},{type:"array",format:"point",func:a},{type:"wkt",format:"point",func:a},{type:"geojson",format:"point",func:a},{format:"feature",func:a},{type:"array",format:"features",func:a},{type:"wkt",format:"features",func:a},{type:"geojson",format:"features",func:a},{type:"array",format:"line",func:a},{type:"wkt",format:"line",func:a},{type:"geojson",format:"line",func:a},{type:"array",format:"lines",func:a},{type:"wkt",format:"lines",func:a},{type:"geojson",format:"lines",func:a}],ct=t=>{v.defaults.custom_validators.push(rt(S)),S.map(({type:e,format:o,func:r})=>{v.defaults.startVals=t,v.defaults.editors[o]=r,v.defaults.resolvers.unshift(i=>{if(i.type===e&&i.format===o||i.format==="feature")return o})})};window.SimpleMDE=W;const ft=t=>{ct(t.value||{});const e=t.renderRoot.querySelector("form");let r=new v(e,{schema:t.schema,...t.value?{startval:t.value}:{},theme:"html",ajax:!0,...t.options});return r.on("ready",()=>{if(Object.values(r.editors).some(i=>i instanceof X)){const i=document.createElement("style");i.innerHTML=`
          @import url("https://maxcdn.bootstrapcdn.com/font-awesome/latest/css/font-awesome.min.css");
          @import url("https://unpkg.com/easymde/dist/easymde.min.css");
        `,t.renderRoot.insertBefore(i,t.renderRoot.firstChild)}}),r};async function I(t){if(t&&typeof t!="object")try{const e=await fetch(t);if(e.ok)return await e.json();console.error("Failed to fetch schema from URL: ",e.status)}catch(e){console.error("Error fetching schema: ",e)}return t}const mt=`
  * {
    font-family: Roboto, sans-serif;
  }
`,gt=`
  [data-schemaid=root] > .je-header {
    display: none;
  }
  .je-range-control {
    padding: 0.5rem 0;
  }
  .errmsg {
    font-size: x-small;
  }
  tc-range-slider{
    display: block;
    margin: 0.5rem 0;
  }
  .je-header {
    display: flex;
    align-items: center;
    border-bottom: 1px solid #0002;
    padding: 0.5rem 0;
  }
  .je-range-control {
    display: flex;
    align-items: center;
  }
  .je-indented-panel span {
    display: flex;
    align-items: center;
  }
  .je-header span:first-of-type, form[data-theme="html"] .je-form-input-label {
    font-size: 14px;
    font-weight: 600;
  }
  form[data-theme="html"] .je-indented-panel {
    border: none;
    margin: 0.4rem;
  }
  button[class*="json-editor-btntype-"] span {
    display: none;
  }
  button[class*="json-editor-btntype-"]::before {
    height: 24px;
    width: 24px;
  }
  button[class*="json-editor-btntype-"] {
    text-indent: 0px;
    margin: 0px;
    display: flex;
  }
  .json-editor-btntype-toggle::before {
    content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%230009' viewBox='0 0 24 24'%3E%3Ctitle%3Echevron-right%3C/title%3E%3Cpath d='M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z' /%3E%3C/svg%3E");
  }
  .json-editor-btn-moveup::before {
    content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%23204270' d='M3 21V17H10.5C12.43 17 14 15.43 14 13.5V11H10L16 4L22 11H18V13.5C18 17.64 14.64 21 10.5 21H3Z' /%3E%3C/svg%3E");
  }
  .json-editor-btn-movedown::before {
    content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%23204270' d='M21 3V7H13.5C11.57 7 10 8.57 10 10.5V13H14L8 20L2 13H6V10.5C6 6.36 9.36 3 13.5 3H21Z' /%3E%3C/svg%3E");
  }
  .json-editor-btn-moveup,
  .json-editor-btn-movedown,
  .json-editor-btn-moveup::before, 
  .json-editor-btn-movedown::before {
    width: 18px !important;
    height: 18px !important;
  }
  .json-editor-btntype-add::before {
    content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%23204270' d='M20 14H14V20H10V14H4V10H10V4H14V10H20V14Z' /%3E%3C/svg%3E");
  }
  .json-editor-btntype-delete::before {
    content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%23204270' d='M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z' /%3E%3C/svg%3E");
  }
  .json-editor-btntype-add::before,
   .json-editor-btntype-delete::before {
    width: 16px !important;
    height: 16px !important;
    background: #00417044;
    padding: 4px;
    border-radius: 100px;
  }
  .json-editor-btntype-add,
  .json-editor-btntype-delete {
    opacity: 0.8;
    margin: 0px 0.5rem !important;
  }
  .json-editor-btntype-add:hover,
   .json-editor-btntype-delete:hover {
    opacity: 1;
  }
  button[class*="json-editor-btntype-"]:active {
    --primary-color: transparent;
  }
  .je-indented-panel .row {
    margin-top: 10px;
  }
  .EasyMDEContainer span {
    display: unset;
  }
  .editor-toolbar button {
    box-shadow: none;
    color: #2c3e50 !important;
  }
  .editor-toolbar button:hover:not([disabled]):not(.icon),
  .editor-toolbar button:hover:not([disabled]):not(.icon) {
    box-shadow: none;
    background: #fcfcfc;
    border-color: #95a5a6;
  }
  .editor-toolbar button i {
    font-size: 17px;
  }
  .cm-header-1 {
    font-size: 200% !important;
  }
  .cm-header-1 {
    font-size: 200% !important;
    line-height: 200% !important;
  }
  .cm-header-2 {
    font-size: 160% !important;
    line-height: 160% !important;
  }
  .cm-header-3 {
    font-size: 125% !important;
    line-height: 125% !important;
  }
  .cm-header-4 {
    font-size: 110% !important;
    line-height: 110% !important;
  }
  .cm-comment {
    background: rgba(0, 0, 0, 0.05) !important;
    border-radius: 2px !important;
  }
`;var u,x,J,Z;class G extends Y{constructor(){super();_(this,x);_(this,u,null);this.schema=null,this.value=null,this.options={show_opt_in:!1,disable_collapse:!0,disable_edit_json:!0,disable_properties:!0,disable_array_delete_all_rows:!0,disable_array_delete_last_row:!0,array_controls_top:!0},this.noShadow=!1,this.unstyled=!1}get editor(){return c(this,u)}get schema(){return this._schema}set schema(o){c(this,u)&&!R(this._schema,o)&&c(this,u).destroy(),this._schema=o}get value(){return this._value}set value(o){c(this,u)&&c(this,u).ready&&!R(this._value,o)&&c(this,u).setValue(o),this._value=o}async updated(o){this._value=await I(this.value),o.has("schema")&&(this._schema=await I(this.schema),(!c(this,u)||c(this,u).destroyed)&&(A(this,u,await ft(this)),L(this,x,Z).call(this)))}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}render(){return U`
      <style>
        ${mt}
        ${!this.unstyled&&Q}
        ${!this.unstyled&&gt}
      </style>
      <form></form>
    `}}u=new WeakMap,x=new WeakSet,J=function(){this.dispatchEvent(new CustomEvent("change",{detail:this.value,bubbles:!0,composed:!0}))},Z=function(){["ready","change"].map(r=>{c(this,u).on(r,()=>{this._value=c(this,u).getValue(),L(this,x,J).call(this)})})},T(G,"properties",{schema:{attribute:!1,type:Object},value:{attribute:!1,type:Object},options:{attribute:!1,type:Object},noShadow:{attribute:"no-shadow",type:Boolean},unstyled:{type:Boolean}});customElements.define("eox-jsonform",G);export{G as EOxJSONForm};
