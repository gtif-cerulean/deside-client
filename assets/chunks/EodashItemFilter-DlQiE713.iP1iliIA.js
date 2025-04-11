var wo=Object.defineProperty;var lr=e=>{throw TypeError(e)};var vo=(e,t,n)=>t in e?wo(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var Ve=(e,t,n)=>vo(e,typeof t!="symbol"?t+"":t,n),sn=(e,t,n)=>t.has(e)||lr("Cannot "+n);var G=(e,t,n)=>(sn(e,t,"read from private field"),n?n.call(e):t.get(e)),q=(e,t,n)=>t.has(e)?lr("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,n),bt=(e,t,n,r)=>(sn(e,t,"write to private field"),r?r.call(e,n):t.set(e,n),n),E=(e,t,n)=>(sn(e,t,"access private method"),n);import{u as xo,a as Ao}from"./eo-dash.BafBzV9i.js";import{r as ie,E as xe,x as _}from"./lit-element.Deg-YTNa.js";import{a as wt,o as It}from"./map.d1LHv0EW.js";import{n as I}from"./when.BR7zwNJC.js";import{s as _o}from"./all.style.T4I2W3dO.js";import{d as Ye,c as Co}from"./repeat.PsSHA7SW.js";import{_ as Nt,s as Mo,a as So}from"./index.H62imwlA.js";import"./toolcool-range-slider.min.BBXDELo7.js";import{o as Eo}from"./orient2d.DArCjZZA.js";import{f as Mt,a as un,b as Lo,m as $o,l as Ro}from"./index.BSpBAx16.js";import{c as be,g as Er}from"./commonjsHelpers.BosuxZz1.js";import{h as Po,p as Do,c as To,o as Bo,j as cr,t as ur,K as ko,k as Oo}from"./framework.aZ46aqSj.js";import"./directive.CvdRHFdJ.js";import"./directive-helpers.oNa9w_hR.js";const jo=`
:host {
  display: flex;
  box-sizing: border-box;
  height: 100%;
  line-height: 1;
}
*,
*:before,
*:after {
  box-sizing: inherit;
}
form#itemfilter {
  height: 100%;
  width: 100%;
  max-width: 100%;
  display: flex;
  flex-direction: column;
}
form#itemfilter:not(.inline) {
  overflow-y: auto;
}
details {
  width: 100%;
}
`,et=`
:host, :root {
  --item-color: color-mix(
    in srgb,
    var(--primary-color) 10%,
    transparent
  );
  --item-hover-color: color-mix(
    in srgb,
    var(--secondary-color) 30%,
    transparent
  );
  --item-select-color: var(--primary-color);
  --inline-bg-color: color-mix(
    in srgb,
    var(--secondary-color) 10%,
    transparent
  );
  --border-color: color-mix(
    in srgb,
    #000000 20%,
    transparent
  );
  --background-color: var(--eox-background-color, transparent);
  --padding: 0.5rem;
  --text-transform: capitalize;
  --form-flex-direction: column;
  --filter-display: block;
  background-color: var(--background-color);
}
* {
  font-family: Roboto, sans-serif;
}
form#itemfilter {
  flex-direction: var(--form-flex-direction);
}
eox-itemfilter-container {
  min-width: 200px;
  display: var(--filter-display);
}
eox-itemfilter-results {
  flex-grow: 1;
}
ul {
  padding-left: 0;
  margin-top: 0;
}
li {
  list-style: none;
}
li span {
  text-overflow: ellipsis;
  white-space: nowrap;
  display: flex;
  align-items: center;
}
.cards li span {
  display: block;
  flex-basis: 100%;
}
li label {
  display: flex;
  align-items: center;
}
details summary > * {
  display: inline;
}
details summary {
  display: flex;
  align-items: center;
  border-bottom: 1px solid #0002;
  padding: .5rem var(--padding);
}

details > summary::-webkit-details-marker {
  display: none;
}

.title {
  font-size: 13px;
  align-items: center;
  text-transform: var(--text-transform);
}
.cards .title {
  font-size: 16px;
  font-weight: 600;
  text-wrap: auto;
  line-height: 19px;
}
.subtitle {
  font-size: 11px;
  opacity: .7;
  margin-top: 6px;
}
.cards .subtitle {
  font-size: 14px;
  color: #757575;
  text-wrap: auto;
  line-height: 19px;
}
.image {
  width: 24px;
  height: 24px;
  object-fit: cover;
  overflow: hidden;
  margin-right: 8px;
}
.cards .image {
  width: 100%;
  height: 190px;
  margin-bottom: 8px;
}
.cards .result-action {
  position: absolute;
  top: 0;
  right: 0;
  margin: 10px 12px;
  padding: 6px;
  background: white;
  border-radius: 50%;
}
.title-container {
  display: flex;
  flex-direction: column;
}
h6.main-heading {
  font-size: 1rem;
  margin-block-start: 1.33em;
  margin-block-end: 1.33em;
  margin-top: var(--padding);
  padding: 0 var(--padding);
}
details summary .title {
  display: flex;
  font-weight: 500;
}
details.details-filter summary::after,
details.details-results summary::before {
  content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%230009' viewBox='0 0 24 24'%3E%3Ctitle%3Echevron-right%3C/title%3E%3Cpath d='M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z' /%3E%3C/svg%3E");
  height: 24px;
  width: 24px;
}
details.details-filter summary::after {
  margin-left: auto;
  transform: rotate(90deg);
}
details[open] summary::before {
  transform: rotate(90deg);
}
details[open] summary::after {
  transform: rotate(270deg);
}
eox-itemfilter-expandcontainer {
  max-height: 200px;
}
eox-itemfilter-expandcontainer > [data-type=filter] {
  display: block;
  height: calc(100% - 32px);
  overflow-y: auto;
  overflow-x: hidden;
  padding: 0 var(--padding);
}
[data-type=filter] .title,
details summary {
  text-transform: var(--text-transform);
}
li,
label,
details,
input[type="checkbox"],
input[type="radio"] {
  cursor: pointer;
}
input[type="checkbox"],
input[type="radio"] {
  margin: 0;
}
input[type="text"] {
  box-sizing: border-box;
  width: 100%;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  padding: 5px 7px;
  border-radius: 4px;
  border: 1px solid var(--border-color);
}
section:not(section:last-of-type) {
  margin-bottom: 1rem;
}
#section-results {
  overflow: hidden;
  flex: 1;
  display: flex;
  flex-direction: column;
}
ul:not(#filters) > li {
  padding: 5px 0;
}
ul#results li {
  padding: 5px var(--padding);
  display: flex;
  justify-content: space-between;
}
ul#results li .result-action {
  display: flex;
  align-items: center;
  height: fit-content;
  line-height: 1;
  opacity: .5;
  transition: opacity .3s ease-in-out;
}
ul#results li .result-action:hover {
  opacity: 1;
}
ul#results li.highlighted .result-action > * {
  filter: invert(1);
}
ul#results ul.cards {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  gap: 40px;
  margin: 20px 0;
  cursor: initial;
}
ul#results ul.cards li {
  flex-basis: calc(33.3% - 77px);
  min-width: 0;
  align-self: flex-start;
  position: relative;
}
@media screen and (max-width: 768px) {
  ul#results ul.cards li {
    flex-basis: calc(50% - 70px);
  }
}
@media screen and (max-width: 480px) {
  ul#results ul.cards li {
    flex-basis: 100%;
  }
}
section {
  position: relative;
  background-color: var(--background-color);
}
button#filter-reset {
  position: absolute;
  top: 0;
  right: var(--padding);
  padding: 2px 10px;
}
.count {
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--secondary-color);
  padding: 0 12px;
  height: 20px;
  border-radius: 10px;
  color: var(--primary-color);
  font-weight: 500;
  margin-left: 9px;
}
eox-itemfilter-range,
tc-range-slider {
  align-items: center;
  display: block;
}
tc-range-slider {
  width: calc(100% - 16px);
  margin-left: 8px;
  margin-right: 8px;
  --width: 100%;
}
.range-before,
.range-after {
  font-size: small;
}
.range-before,
.range-after {
  margin: 1rem 0px;
}

button.reset-icon:before {
  content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23004170' viewBox='0 0 24 24'%3E%3Ctitle%3Eclose%3C/title%3E%3Cpath d='M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z' /%3E%3C/svg%3E");
}
eox-itemfilter-expandcontainer button.reset-icon {
  margin-left: 4px;
  margin-top: -5px;
  height: 14px;
  width: 14px;
}
eox-itemfilter-expandcontainer button.reset-icon:before {
  height: 14px;
  width: 14px;
}
.inline-content {
  border: 1.5px solid var(--secondary-color);
  border-radius: 4px;
  max-height: 300px;
  overflow-y: auto;
  background: var(--inline-bg-color);
  margin-top: 4px;
  padding: 8px;
}
.inline-container {
  position: relative;
  align-items: center;
}
.inline-container-wrapper {
  width: 100%;
  position: relative;
}
.inline-container {
  position: relative;
  border: 1px solid var(--border-color);
  border-radius: 4px;
  height: 24px;
  padding: 8px;
  flex: 1;
  justify-content: space-between;
  cursor: text;
  transition: all 0.2s ease-in-out;
  display: flex;
}
.inline-container:hover {
  border: 1px solid var(--primary-color);
}
[popover] {
  position: fixed;
  top: 0;
  left: 0;
  margin: 0;
  padding: 0;
  background-color: var(--background-color);
  border: none;
}
.input-container {
  display: flex;
  flex: 1;
  align-items: center;
}
.input-container input,
.input-container input:focus {
  height: 100%;
  border: none;
  outline: none;
  border: 0;
  min-width: 25%;
}
.button-container {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 1px;
  top: 5px;
  height: calc(100% - 10px);
  width: 34px;
  background: white;
}
button.icon {
  color: #004170;
  height: 24px;
  font-size: large;
  width: unset;
}
.inline-container::-webkit-scrollbar {
  height: 2px;
}
.inline-container::-webkit-scrollbar-thumb {
  background: lightgrey;
  border-radius: 2px;
}
.hidden {
  height: 0;
  padding: 0;
  border: none;
}
.hidden:hover {
  border: none;
}
.chip-title {
  pointer-events: none;
  text-transform: var(--text-transform);
}
.chip {
  display: flex;
  align-items: center;
  background: var(--item-color);
  border-radius: 30px;
  margin-right: 4px;
  padding: 5px 10px;
  font-size: small;
  cursor: default;
  white-space: nowrap;
}
.chip.highlighted {
  background: var(--primary-color);
  color: white;
}
.chip-close {
  cursor: pointer;
  font-weight: 600;
  position: absolute;
  right: -25px;
  background: white;
  top: 0;
  height: 100%;
  display: flex;
  align-items: center;
  height: 24px;
  width: 24px;
}
.chip-close:before {
  position: absolute;
  text-indent: 0;
  line-height: initial;
  height: 24px;
  width: 24px;
  content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23004170' viewBox='0 0 24 24'%3E%3Ctitle%3Eclose%3C/title%3E%3Cpath d='M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z' /%3E%3C/svg%3E");
}
.chip-container {
  position: relative;
  max-width: 75%;
}
.autocomplete-container,
.text-container {
  position: relative;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  justify-content: space-between;
  cursor: text;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  background: white;
}
.autocomplete-container-wrapper,
.text-container-wrapper {
  position: relative;
  display: flex;
  align-items: center;
  flex: 1;
  overflow-x: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.autocomplete-container-wrapper::-webkit-scrollbar {
  display: none;
}
.chip-wrapper {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.chip-wrapper::-webkit-scrollbar {
  display: none;
  width: 0;
  background: transparent;
}
.autocomplete-input,
.text-input {
  flex: 1;
  border: 1px solid var(--border-color);
  outline: none;
  box-sizing: border-box;
  margin-top: 0 !important;
  margin-bottom: 0 !important;
  min-width: 150px;
}
input[type="text"].text-input,
input[type="text"].autocomplete-input {
  padding: 9px 6px !important;
  border-radius: 4px;
}
.text-input:hover,
.autocomplete-input:hover {
  border: 1px solid var(--primary-color);
}
.text-input:invalid {
  border: 1px solid red;
}
.selected-items {
  display: flex;
  flex-wrap: nowrap;
  gap: 4px;
}
.select li:hover,
.multiselect li:hover,
eox-itemfilter-results li:hover {
  background: var(--item-hover-color);
}
eox-itemfilter-results li.highlighted {
  color: var(--background-color);
  background: var(--item-select-color);
}
.selected-item span {
  margin-right: 8px;
}
.selected-item button {
  background: none;
  border: none;
  color: #fff;
  cursor: pointer;
  font-size: 16px;
  line-height: 1;
}
.multiselect-container,
.select-container {
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.multiselect-container label,
.select-container label {
  display: flex;
  align-items: center;
  cursor: pointer;
}
.multiselect-container input,
.select-container input {
  margin-right: 8px;
}
.select-overflow {
  max-height: 185px;
  overflow-y: auto;
}
.chip-title strong {
  font-weight: 500;
}
.chip-wrapper {
  max-width: 100%;
  overflow-x: scroll;
}
.chip-container {
  display: flex;
  flex: 0;
}
.input-container.dirty-filter-input {
  margin-left: 25px;
}
.error-validation {
  position: relative;
  color: red;
  font-size: x-small;
  top: -8px;
}
input {
  background-color: var(--background-color);
}
`;var Bt,Lr;class Io extends ie{constructor(){super();q(this,Bt);this.filterObject={},this.unstyled=!1}static get properties(){return{filterObject:{attribute:!1,type:Object},unstyled:{type:Boolean}}}render(){return _`
      <style>
        ${!this.unstyled&&et}
      </style>

      ${I(this.filterObject.featured,()=>_`<slot name="filter"></slot>`,()=>_`<details
            @toggle="${E(this,Bt,Lr)}"
            class="details-filter"
            ?open=${this.filterObject.expanded||xe}
          >
            <summary>
              <span
                class="title"
                style="${!this.filterObject.title&&"text-transform: var(--text-transform)"}"
              >
                ${this.filterObject.title||this.filterObject.key||"Filter"}
                <slot name="reset-button"></slot>
              </span>
            </summary>
            <div>
              <slot name="filter"></slot>
            </div>
          </details>`)}
    `}}Bt=new WeakSet,Lr=function(n){this.dispatchEvent(new CustomEvent("details-toggled",{detail:n,bubbles:!0,composed:!0}))};customElements.define("eox-itemfilter-expandcontainer",Io);function de(e){return Array.isArray?Array.isArray(e):Pr(e)==="[object Array]"}function No(e){if(typeof e=="string")return e;let t=e+"";return t=="0"&&1/e==-1/0?"-0":t}function Ho(e){return e==null?"":No(e)}function te(e){return typeof e=="string"}function $r(e){return typeof e=="number"}function Fo(e){return e===!0||e===!1||qo(e)&&Pr(e)=="[object Boolean]"}function Rr(e){return typeof e=="object"}function qo(e){return Rr(e)&&e!==null}function K(e){return e!=null}function on(e){return!e.trim().length}function Pr(e){return e==null?e===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(e)}const Uo="Incorrect 'index' type",Wo=e=>`Invalid value for key ${e}`,Go=e=>`Pattern length exceeds max of ${e}.`,Ko=e=>`Missing ${e} property in key`,zo=e=>`Property 'weight' in key '${e}' must be a positive integer`,fr=Object.prototype.hasOwnProperty;class Vo{constructor(t){this._keys=[],this._keyMap={};let n=0;t.forEach(r=>{let i=Dr(r);this._keys.push(i),this._keyMap[i.id]=i,n+=i.weight}),this._keys.forEach(r=>{r.weight/=n})}get(t){return this._keyMap[t]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}}function Dr(e){let t=null,n=null,r=null,i=1,o=null;if(te(e)||de(e))r=e,t=hr(e),n=fn(e);else{if(!fr.call(e,"name"))throw new Error(Ko("name"));const a=e.name;if(r=a,fr.call(e,"weight")&&(i=e.weight,i<=0))throw new Error(zo(a));t=hr(a),n=fn(a),o=e.getFn}return{path:t,id:n,weight:i,src:r,getFn:o}}function hr(e){return de(e)?e:e.split(".")}function fn(e){return de(e)?e.join("."):e}function Yo(e,t){let n=[],r=!1;const i=(o,a,l)=>{if(K(o))if(!a[l])n.push(o);else{let u=a[l];const f=o[u];if(!K(f))return;if(l===a.length-1&&(te(f)||$r(f)||Fo(f)))n.push(Ho(f));else if(de(f)){r=!0;for(let h=0,p=f.length;h<p;h+=1)i(f[h],a,l+1)}else a.length&&i(f,a,l+1)}};return i(e,te(t)?t.split("."):t,0),r?n:n[0]}const Xo={includeMatches:!1,findAllMatches:!1,minMatchCharLength:1},Jo={isCaseSensitive:!1,ignoreDiacritics:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(e,t)=>e.score===t.score?e.idx<t.idx?-1:1:e.score<t.score?-1:1},Zo={location:0,threshold:.6,distance:100},Qo={useExtendedSearch:!1,getFn:Yo,ignoreLocation:!1,ignoreFieldNorm:!1,fieldNormWeight:1};var A={...Jo,...Xo,...Zo,...Qo};const ea=/[^ ]+/g;function ta(e=1,t=3){const n=new Map,r=Math.pow(10,t);return{get(i){const o=i.match(ea).length;if(n.has(o))return n.get(o);const a=1/Math.pow(o,.5*e),l=parseFloat(Math.round(a*r)/r);return n.set(o,l),l},clear(){n.clear()}}}class Rn{constructor({getFn:t=A.getFn,fieldNormWeight:n=A.fieldNormWeight}={}){this.norm=ta(n,3),this.getFn=t,this.isCreated=!1,this.setIndexRecords()}setSources(t=[]){this.docs=t}setIndexRecords(t=[]){this.records=t}setKeys(t=[]){this.keys=t,this._keysMap={},t.forEach((n,r)=>{this._keysMap[n.id]=r})}create(){this.isCreated||!this.docs.length||(this.isCreated=!0,te(this.docs[0])?this.docs.forEach((t,n)=>{this._addString(t,n)}):this.docs.forEach((t,n)=>{this._addObject(t,n)}),this.norm.clear())}add(t){const n=this.size();te(t)?this._addString(t,n):this._addObject(t,n)}removeAt(t){this.records.splice(t,1);for(let n=t,r=this.size();n<r;n+=1)this.records[n].i-=1}getValueForItemAtKeyId(t,n){return t[this._keysMap[n]]}size(){return this.records.length}_addString(t,n){if(!K(t)||on(t))return;let r={v:t,i:n,n:this.norm.get(t)};this.records.push(r)}_addObject(t,n){let r={i:n,$:{}};this.keys.forEach((i,o)=>{let a=i.getFn?i.getFn(t):this.getFn(t,i.path);if(K(a)){if(de(a)){let l=[];const u=[{nestedArrIndex:-1,value:a}];for(;u.length;){const{nestedArrIndex:f,value:h}=u.pop();if(K(h))if(te(h)&&!on(h)){let p={v:h,i:f,n:this.norm.get(h)};l.push(p)}else de(h)&&h.forEach((p,y)=>{u.push({nestedArrIndex:y,value:p})})}r.$[o]=l}else if(te(a)&&!on(a)){let l={v:a,n:this.norm.get(a)};r.$[o]=l}}}),this.records.push(r)}toJSON(){return{keys:this.keys,records:this.records}}}function Tr(e,t,{getFn:n=A.getFn,fieldNormWeight:r=A.fieldNormWeight}={}){const i=new Rn({getFn:n,fieldNormWeight:r});return i.setKeys(e.map(Dr)),i.setSources(t),i.create(),i}function na(e,{getFn:t=A.getFn,fieldNormWeight:n=A.fieldNormWeight}={}){const{keys:r,records:i}=e,o=new Rn({getFn:t,fieldNormWeight:n});return o.setKeys(r),o.setIndexRecords(i),o}function vt(e,{errors:t=0,currentLocation:n=0,expectedLocation:r=0,distance:i=A.distance,ignoreLocation:o=A.ignoreLocation}={}){const a=t/e.length;if(o)return a;const l=Math.abs(r-n);return i?a+l/i:l?1:a}function ra(e=[],t=A.minMatchCharLength){let n=[],r=-1,i=-1,o=0;for(let a=e.length;o<a;o+=1){let l=e[o];l&&r===-1?r=o:!l&&r!==-1&&(i=o-1,i-r+1>=t&&n.push([r,i]),r=-1)}return e[o-1]&&o-r>=t&&n.push([r,o-1]),n}const Ee=32;function ia(e,t,n,{location:r=A.location,distance:i=A.distance,threshold:o=A.threshold,findAllMatches:a=A.findAllMatches,minMatchCharLength:l=A.minMatchCharLength,includeMatches:u=A.includeMatches,ignoreLocation:f=A.ignoreLocation}={}){if(t.length>Ee)throw new Error(Go(Ee));const h=t.length,p=e.length,y=Math.max(0,Math.min(r,p));let g=o,b=y;const v=l>1||u,S=v?Array(p):[];let M;for(;(M=e.indexOf(t,b))>-1;){let O=vt(t,{currentLocation:M,expectedLocation:y,distance:i,ignoreLocation:f});if(g=Math.min(O,g),b=M+h,v){let Z=0;for(;Z<h;)S[M+Z]=1,Z+=1}}b=-1;let $=[],L=1,R=h+p;const B=1<<h-1;for(let O=0;O<h;O+=1){let Z=0,U=R;for(;Z<U;)vt(t,{errors:O,currentLocation:y+U,expectedLocation:y,distance:i,ignoreLocation:f})<=g?Z=U:R=U,U=Math.floor((R-Z)/2+Z);R=U;let nt=Math.max(1,y-U+1),Ge=a?p:Math.min(y+U,p)+h,pe=Array(Ge+2);pe[Ge+1]=(1<<O)-1;for(let W=Ge;W>=nt;W-=1){let Te=W-1,rt=n[e.charAt(Te)];if(v&&(S[Te]=+!!rt),pe[W]=(pe[W+1]<<1|1)&rt,O&&(pe[W]|=($[W+1]|$[W])<<1|1|$[W+1]),pe[W]&B&&(L=vt(t,{errors:O,currentLocation:Te,expectedLocation:y,distance:i,ignoreLocation:f}),L<=g)){if(g=L,b=Te,b<=y)break;nt=Math.max(1,2*y-b)}}if(vt(t,{errors:O+1,currentLocation:y,expectedLocation:y,distance:i,ignoreLocation:f})>g)break;$=pe}const oe={isMatch:b>=0,score:Math.max(.001,L)};if(v){const O=ra(S,l);O.length?u&&(oe.indices=O):oe.isMatch=!1}return oe}function sa(e){let t={};for(let n=0,r=e.length;n<r;n+=1){const i=e.charAt(n);t[i]=(t[i]||0)|1<<r-n-1}return t}const St=String.prototype.normalize?e=>e.normalize("NFD").replace(/[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D3-\u08E1\u08E3-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B62\u0B63\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0C00-\u0C04\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D00-\u0D03\u0D3B\u0D3C\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D82\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EB9\u0EBB\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F\u109A-\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4-\u17D3\u17DD\u180B-\u180D\u1885\u1886\u18A9\u1920-\u192B\u1930-\u193B\u1A17-\u1A1B\u1A55-\u1A5E\u1A60-\u1A7C\u1A7F\u1AB0-\u1ABE\u1B00-\u1B04\u1B34-\u1B44\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAD\u1BE6-\u1BF3\u1C24-\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF2-\u1CF4\u1CF7-\u1CF9\u1DC0-\u1DF9\u1DFB-\u1DFF\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA880\uA881\uA8B4-\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA953\uA980-\uA983\uA9B3-\uA9C0\uA9E5\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEB-\uAAEF\uAAF5\uAAF6\uABE3-\uABEA\uABEC\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F]/g,""):e=>e;class Br{constructor(t,{location:n=A.location,threshold:r=A.threshold,distance:i=A.distance,includeMatches:o=A.includeMatches,findAllMatches:a=A.findAllMatches,minMatchCharLength:l=A.minMatchCharLength,isCaseSensitive:u=A.isCaseSensitive,ignoreDiacritics:f=A.ignoreDiacritics,ignoreLocation:h=A.ignoreLocation}={}){if(this.options={location:n,threshold:r,distance:i,includeMatches:o,findAllMatches:a,minMatchCharLength:l,isCaseSensitive:u,ignoreDiacritics:f,ignoreLocation:h},t=u?t:t.toLowerCase(),t=f?St(t):t,this.pattern=t,this.chunks=[],!this.pattern.length)return;const p=(g,b)=>{this.chunks.push({pattern:g,alphabet:sa(g),startIndex:b})},y=this.pattern.length;if(y>Ee){let g=0;const b=y%Ee,v=y-b;for(;g<v;)p(this.pattern.substr(g,Ee),g),g+=Ee;if(b){const S=y-Ee;p(this.pattern.substr(S),S)}}else p(this.pattern,0)}searchIn(t){const{isCaseSensitive:n,ignoreDiacritics:r,includeMatches:i}=this.options;if(t=n?t:t.toLowerCase(),t=r?St(t):t,this.pattern===t){let v={isMatch:!0,score:0};return i&&(v.indices=[[0,t.length-1]]),v}const{location:o,distance:a,threshold:l,findAllMatches:u,minMatchCharLength:f,ignoreLocation:h}=this.options;let p=[],y=0,g=!1;this.chunks.forEach(({pattern:v,alphabet:S,startIndex:M})=>{const{isMatch:$,score:L,indices:R}=ia(t,v,S,{location:o+M,distance:a,threshold:l,findAllMatches:u,minMatchCharLength:f,includeMatches:i,ignoreLocation:h});$&&(g=!0),y+=L,$&&R&&(p=[...p,...R])});let b={isMatch:g,score:g?y/this.chunks.length:1};return g&&i&&(b.indices=p),b}}class Ae{constructor(t){this.pattern=t}static isMultiMatch(t){return dr(t,this.multiRegex)}static isSingleMatch(t){return dr(t,this.singleRegex)}search(){}}function dr(e,t){const n=e.match(t);return n?n[1]:null}class oa extends Ae{constructor(t){super(t)}static get type(){return"exact"}static get multiRegex(){return/^="(.*)"$/}static get singleRegex(){return/^=(.*)$/}search(t){const n=t===this.pattern;return{isMatch:n,score:n?0:1,indices:[0,this.pattern.length-1]}}}class aa extends Ae{constructor(t){super(t)}static get type(){return"inverse-exact"}static get multiRegex(){return/^!"(.*)"$/}static get singleRegex(){return/^!(.*)$/}search(t){const r=t.indexOf(this.pattern)===-1;return{isMatch:r,score:r?0:1,indices:[0,t.length-1]}}}class la extends Ae{constructor(t){super(t)}static get type(){return"prefix-exact"}static get multiRegex(){return/^\^"(.*)"$/}static get singleRegex(){return/^\^(.*)$/}search(t){const n=t.startsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,this.pattern.length-1]}}}class ca extends Ae{constructor(t){super(t)}static get type(){return"inverse-prefix-exact"}static get multiRegex(){return/^!\^"(.*)"$/}static get singleRegex(){return/^!\^(.*)$/}search(t){const n=!t.startsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,t.length-1]}}}class ua extends Ae{constructor(t){super(t)}static get type(){return"suffix-exact"}static get multiRegex(){return/^"(.*)"\$$/}static get singleRegex(){return/^(.*)\$$/}search(t){const n=t.endsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[t.length-this.pattern.length,t.length-1]}}}class fa extends Ae{constructor(t){super(t)}static get type(){return"inverse-suffix-exact"}static get multiRegex(){return/^!"(.*)"\$$/}static get singleRegex(){return/^!(.*)\$$/}search(t){const n=!t.endsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,t.length-1]}}}class kr extends Ae{constructor(t,{location:n=A.location,threshold:r=A.threshold,distance:i=A.distance,includeMatches:o=A.includeMatches,findAllMatches:a=A.findAllMatches,minMatchCharLength:l=A.minMatchCharLength,isCaseSensitive:u=A.isCaseSensitive,ignoreDiacritics:f=A.ignoreDiacritics,ignoreLocation:h=A.ignoreLocation}={}){super(t),this._bitapSearch=new Br(t,{location:n,threshold:r,distance:i,includeMatches:o,findAllMatches:a,minMatchCharLength:l,isCaseSensitive:u,ignoreDiacritics:f,ignoreLocation:h})}static get type(){return"fuzzy"}static get multiRegex(){return/^"(.*)"$/}static get singleRegex(){return/^(.*)$/}search(t){return this._bitapSearch.searchIn(t)}}class Or extends Ae{constructor(t){super(t)}static get type(){return"include"}static get multiRegex(){return/^'"(.*)"$/}static get singleRegex(){return/^'(.*)$/}search(t){let n=0,r;const i=[],o=this.pattern.length;for(;(r=t.indexOf(this.pattern,n))>-1;)n=r+o,i.push([r,n-1]);const a=!!i.length;return{isMatch:a,score:a?0:1,indices:i}}}const hn=[oa,Or,la,ca,fa,ua,aa,kr],pr=hn.length,ha=/ +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/,da="|";function pa(e,t={}){return e.split(da).map(n=>{let r=n.trim().split(ha).filter(o=>o&&!!o.trim()),i=[];for(let o=0,a=r.length;o<a;o+=1){const l=r[o];let u=!1,f=-1;for(;!u&&++f<pr;){const h=hn[f];let p=h.isMultiMatch(l);p&&(i.push(new h(p,t)),u=!0)}if(!u)for(f=-1;++f<pr;){const h=hn[f];let p=h.isSingleMatch(l);if(p){i.push(new h(p,t));break}}}return i})}const ga=new Set([kr.type,Or.type]);class ya{constructor(t,{isCaseSensitive:n=A.isCaseSensitive,ignoreDiacritics:r=A.ignoreDiacritics,includeMatches:i=A.includeMatches,minMatchCharLength:o=A.minMatchCharLength,ignoreLocation:a=A.ignoreLocation,findAllMatches:l=A.findAllMatches,location:u=A.location,threshold:f=A.threshold,distance:h=A.distance}={}){this.query=null,this.options={isCaseSensitive:n,ignoreDiacritics:r,includeMatches:i,minMatchCharLength:o,findAllMatches:l,ignoreLocation:a,location:u,threshold:f,distance:h},t=n?t:t.toLowerCase(),t=r?St(t):t,this.pattern=t,this.query=pa(this.pattern,this.options)}static condition(t,n){return n.useExtendedSearch}searchIn(t){const n=this.query;if(!n)return{isMatch:!1,score:1};const{includeMatches:r,isCaseSensitive:i,ignoreDiacritics:o}=this.options;t=i?t:t.toLowerCase(),t=o?St(t):t;let a=0,l=[],u=0;for(let f=0,h=n.length;f<h;f+=1){const p=n[f];l.length=0,a=0;for(let y=0,g=p.length;y<g;y+=1){const b=p[y],{isMatch:v,indices:S,score:M}=b.search(t);if(v){if(a+=1,u+=M,r){const $=b.constructor.type;ga.has($)?l=[...l,...S]:l.push(S)}}else{u=0,a=0,l.length=0;break}}if(a){let y={isMatch:!0,score:u/a};return r&&(y.indices=l),y}}return{isMatch:!1,score:1}}}const dn=[];function ma(...e){dn.push(...e)}function pn(e,t){for(let n=0,r=dn.length;n<r;n+=1){let i=dn[n];if(i.condition(e,t))return new i(e,t)}return new Br(e,t)}const Et={AND:"$and",OR:"$or"},gn={PATH:"$path",PATTERN:"$val"},yn=e=>!!(e[Et.AND]||e[Et.OR]),ba=e=>!!e[gn.PATH],wa=e=>!de(e)&&Rr(e)&&!yn(e),gr=e=>({[Et.AND]:Object.keys(e).map(t=>({[t]:e[t]}))});function jr(e,t,{auto:n=!0}={}){const r=i=>{let o=Object.keys(i);const a=ba(i);if(!a&&o.length>1&&!yn(i))return r(gr(i));if(wa(i)){const u=a?i[gn.PATH]:o[0],f=a?i[gn.PATTERN]:i[u];if(!te(f))throw new Error(Wo(u));const h={keyId:fn(u),pattern:f};return n&&(h.searcher=pn(f,t)),h}let l={children:[],operator:o[0]};return o.forEach(u=>{const f=i[u];de(f)&&f.forEach(h=>{l.children.push(r(h))})}),l};return yn(e)||(e=gr(e)),r(e)}function va(e,{ignoreFieldNorm:t=A.ignoreFieldNorm}){e.forEach(n=>{let r=1;n.matches.forEach(({key:i,norm:o,score:a})=>{const l=i?i.weight:null;r*=Math.pow(a===0&&l?Number.EPSILON:a,(l||1)*(t?1:o))}),n.score=r})}function xa(e,t){const n=e.matches;t.matches=[],K(n)&&n.forEach(r=>{if(!K(r.indices)||!r.indices.length)return;const{indices:i,value:o}=r;let a={indices:i,value:o};r.key&&(a.key=r.key.src),r.idx>-1&&(a.refIndex=r.idx),t.matches.push(a)})}function Aa(e,t){t.score=e.score}function _a(e,t,{includeMatches:n=A.includeMatches,includeScore:r=A.includeScore}={}){const i=[];return n&&i.push(xa),r&&i.push(Aa),e.map(o=>{const{idx:a}=o,l={item:t[a],refIndex:a};return i.length&&i.forEach(u=>{u(o,l)}),l})}class _e{constructor(t,n={},r){this.options={...A,...n},this.options.useExtendedSearch,this._keyStore=new Vo(this.options.keys),this.setCollection(t,r)}setCollection(t,n){if(this._docs=t,n&&!(n instanceof Rn))throw new Error(Uo);this._myIndex=n||Tr(this.options.keys,this._docs,{getFn:this.options.getFn,fieldNormWeight:this.options.fieldNormWeight})}add(t){K(t)&&(this._docs.push(t),this._myIndex.add(t))}remove(t=()=>!1){const n=[];for(let r=0,i=this._docs.length;r<i;r+=1){const o=this._docs[r];t(o,r)&&(this.removeAt(r),r-=1,i-=1,n.push(o))}return n}removeAt(t){this._docs.splice(t,1),this._myIndex.removeAt(t)}getIndex(){return this._myIndex}search(t,{limit:n=-1}={}){const{includeMatches:r,includeScore:i,shouldSort:o,sortFn:a,ignoreFieldNorm:l}=this.options;let u=te(t)?te(this._docs[0])?this._searchStringList(t):this._searchObjectList(t):this._searchLogical(t);return va(u,{ignoreFieldNorm:l}),o&&u.sort(a),$r(n)&&n>-1&&(u=u.slice(0,n)),_a(u,this._docs,{includeMatches:r,includeScore:i})}_searchStringList(t){const n=pn(t,this.options),{records:r}=this._myIndex,i=[];return r.forEach(({v:o,i:a,n:l})=>{if(!K(o))return;const{isMatch:u,score:f,indices:h}=n.searchIn(o);u&&i.push({item:o,idx:a,matches:[{score:f,value:o,norm:l,indices:h}]})}),i}_searchLogical(t){const n=jr(t,this.options),r=(l,u,f)=>{if(!l.children){const{keyId:p,searcher:y}=l,g=this._findMatches({key:this._keyStore.get(p),value:this._myIndex.getValueForItemAtKeyId(u,p),searcher:y});return g&&g.length?[{idx:f,item:u,matches:g}]:[]}const h=[];for(let p=0,y=l.children.length;p<y;p+=1){const g=l.children[p],b=r(g,u,f);if(b.length)h.push(...b);else if(l.operator===Et.AND)return[]}return h},i=this._myIndex.records,o={},a=[];return i.forEach(({$:l,i:u})=>{if(K(l)){let f=r(n,l,u);f.length&&(o[u]||(o[u]={idx:u,item:l,matches:[]},a.push(o[u])),f.forEach(({matches:h})=>{o[u].matches.push(...h)}))}}),a}_searchObjectList(t){const n=pn(t,this.options),{keys:r,records:i}=this._myIndex,o=[];return i.forEach(({$:a,i:l})=>{if(!K(a))return;let u=[];r.forEach((f,h)=>{u.push(...this._findMatches({key:f,value:a[h],searcher:n}))}),u.length&&o.push({idx:l,item:a,matches:u})}),o}_findMatches({key:t,value:n,searcher:r}){if(!K(n))return[];let i=[];if(de(n))n.forEach(({v:o,i:a,n:l})=>{if(!K(o))return;const{isMatch:u,score:f,indices:h}=r.searchIn(o);u&&i.push({score:f,key:t,value:o,idx:a,norm:l,indices:h})});else{const{v:o,n:a}=n,{isMatch:l,score:u,indices:f}=r.searchIn(o);l&&i.push({score:u,key:t,value:o,norm:a,indices:f})}return i}}_e.version="7.1.0";_e.createIndex=Tr;_e.parseIndex=na;_e.config=A;_e.parseQuery=jr;ma(ya);function Ir(e,t){const n=new _e(t.filterProperties,{keys:["title"]});if(!(e.target instanceof HTMLInputElement))return;const r=e.target.value,o=n.search(r).map(a=>a.item.key||a.item.keys.join("|"));Object.keys(t.filters).forEach(a=>{t.querySelector(`[data-details="${a}"]`).parentElement.style.display=o.includes(a)||!r?"":"none"})}function Ca(e,t){if(!(e.target instanceof HTMLElement))return;const n=e.target.getAttribute("data-close").replace("|","-");t.querySelector(`#filter-${n}`).reset(),t.dispatchEvent(new CustomEvent("filter")),t.requestUpdate()}const mn=Math.min,Oe=Math.max,Lt=Math.round,xt=Math.floor,ne=e=>({x:e,y:e});function Nr(e){return e.split("-")[0]}function Ma(e){return e.split("-")[1]}function Sa(e){return e==="x"?"y":"x"}function Ea(e){return e==="y"?"height":"width"}function Hr(e){return["top","bottom"].includes(Nr(e))?"y":"x"}function La(e){return Sa(Hr(e))}function Fr(e){const{x:t,y:n,width:r,height:i}=e;return{width:r,height:i,top:n,left:t,right:t+r,bottom:n+i,x:t,y:n}}function yr(e,t,n){let{reference:r,floating:i}=e;const o=Hr(t),a=La(t),l=Ea(a),u=Nr(t),f=o==="y",h=r.x+r.width/2-i.width/2,p=r.y+r.height/2-i.height/2,y=r[l]/2-i[l]/2;let g;switch(u){case"top":g={x:h,y:r.y-i.height};break;case"bottom":g={x:h,y:r.y+r.height};break;case"right":g={x:r.x+r.width,y:p};break;case"left":g={x:r.x-i.width,y:p};break;default:g={x:r.x,y:r.y}}switch(Ma(t)){case"start":g[a]-=y*(n&&f?-1:1);break;case"end":g[a]+=y*(n&&f?-1:1);break}return g}const $a=async(e,t,n)=>{const{placement:r="bottom",strategy:i="absolute",middleware:o=[],platform:a}=n,l=o.filter(Boolean),u=await(a.isRTL==null?void 0:a.isRTL(t));let f=await a.getElementRects({reference:e,floating:t,strategy:i}),{x:h,y:p}=yr(f,r,u),y=r,g={},b=0;for(let v=0;v<l.length;v++){const{name:S,fn:M}=l[v],{x:$,y:L,data:R,reset:B}=await M({x:h,y:p,initialPlacement:r,placement:y,strategy:i,middlewareData:g,rects:f,platform:a,elements:{reference:e,floating:t}});h=$??h,p=L??p,g={...g,[S]:{...g[S],...R}},B&&b<=50&&(b++,typeof B=="object"&&(B.placement&&(y=B.placement),B.rects&&(f=B.rects===!0?await a.getElementRects({reference:e,floating:t,strategy:i}):B.rects),{x:h,y:p}=yr(f,y,u)),v=-1)}return{x:h,y:p,placement:y,strategy:i,middlewareData:g}};function Ht(){return typeof window<"u"}function qe(e){return qr(e)?(e.nodeName||"").toLowerCase():"#document"}function z(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function se(e){var t;return(t=(qr(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function qr(e){return Ht()?e instanceof Node||e instanceof z(e).Node:!1}function Q(e){return Ht()?e instanceof Element||e instanceof z(e).Element:!1}function re(e){return Ht()?e instanceof HTMLElement||e instanceof z(e).HTMLElement:!1}function mr(e){return!Ht()||typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof z(e).ShadowRoot}function tt(e){const{overflow:t,overflowX:n,overflowY:r,display:i}=ee(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+n)&&!["inline","contents"].includes(i)}function Ra(e){return["table","td","th"].includes(qe(e))}function Ft(e){return[":popover-open",":modal"].some(t=>{try{return e.matches(t)}catch{return!1}})}function Pn(e){const t=Dn(),n=Q(e)?ee(e):e;return["transform","translate","scale","rotate","perspective"].some(r=>n[r]?n[r]!=="none":!1)||(n.containerType?n.containerType!=="normal":!1)||!t&&(n.backdropFilter?n.backdropFilter!=="none":!1)||!t&&(n.filter?n.filter!=="none":!1)||["transform","translate","scale","rotate","perspective","filter"].some(r=>(n.willChange||"").includes(r))||["paint","layout","strict","content"].some(r=>(n.contain||"").includes(r))}function Pa(e){let t=we(e);for(;re(t)&&!Ne(t);){if(Pn(t))return t;if(Ft(t))return null;t=we(t)}return null}function Dn(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function Ne(e){return["html","body","#document"].includes(qe(e))}function ee(e){return z(e).getComputedStyle(e)}function qt(e){return Q(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function we(e){if(qe(e)==="html")return e;const t=e.assignedSlot||e.parentNode||mr(e)&&e.host||se(e);return mr(t)?t.host:t}function Ur(e){const t=we(e);return Ne(t)?e.ownerDocument?e.ownerDocument.body:e.body:re(t)&&tt(t)?t:Ur(t)}function Xe(e,t,n){var r;t===void 0&&(t=[]),n===void 0&&(n=!0);const i=Ur(e),o=i===((r=e.ownerDocument)==null?void 0:r.body),a=z(i);if(o){const l=bn(a);return t.concat(a,a.visualViewport||[],tt(i)?i:[],l&&n?Xe(l):[])}return t.concat(i,Xe(i,[],n))}function bn(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function Wr(e){const t=ee(e);let n=parseFloat(t.width)||0,r=parseFloat(t.height)||0;const i=re(e),o=i?e.offsetWidth:n,a=i?e.offsetHeight:r,l=Lt(n)!==o||Lt(r)!==a;return l&&(n=o,r=a),{width:n,height:r,$:l}}function Tn(e){return Q(e)?e:e.contextElement}function je(e){const t=Tn(e);if(!re(t))return ne(1);const n=t.getBoundingClientRect(),{width:r,height:i,$:o}=Wr(t);let a=(o?Lt(n.width):n.width)/r,l=(o?Lt(n.height):n.height)/i;return(!a||!Number.isFinite(a))&&(a=1),(!l||!Number.isFinite(l))&&(l=1),{x:a,y:l}}const Da=ne(0);function Gr(e){const t=z(e);return!Dn()||!t.visualViewport?Da:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function Ta(e,t,n){return t===void 0&&(t=!1),!n||t&&n!==z(e)?!1:t}function Le(e,t,n,r){t===void 0&&(t=!1),n===void 0&&(n=!1);const i=e.getBoundingClientRect(),o=Tn(e);let a=ne(1);t&&(r?Q(r)&&(a=je(r)):a=je(e));const l=Ta(o,n,r)?Gr(o):ne(0);let u=(i.left+l.x)/a.x,f=(i.top+l.y)/a.y,h=i.width/a.x,p=i.height/a.y;if(o){const y=z(o),g=r&&Q(r)?z(r):r;let b=y,v=bn(b);for(;v&&r&&g!==b;){const S=je(v),M=v.getBoundingClientRect(),$=ee(v),L=M.left+(v.clientLeft+parseFloat($.paddingLeft))*S.x,R=M.top+(v.clientTop+parseFloat($.paddingTop))*S.y;u*=S.x,f*=S.y,h*=S.x,p*=S.y,u+=L,f+=R,b=z(v),v=bn(b)}}return Fr({width:h,height:p,x:u,y:f})}function Bn(e,t){const n=qt(e).scrollLeft;return t?t.left+n:Le(se(e)).left+n}function Kr(e,t,n){n===void 0&&(n=!1);const r=e.getBoundingClientRect(),i=r.left+t.scrollLeft-(n?0:Bn(e,r)),o=r.top+t.scrollTop;return{x:i,y:o}}function Ba(e){let{elements:t,rect:n,offsetParent:r,strategy:i}=e;const o=i==="fixed",a=se(r),l=t?Ft(t.floating):!1;if(r===a||l&&o)return n;let u={scrollLeft:0,scrollTop:0},f=ne(1);const h=ne(0),p=re(r);if((p||!p&&!o)&&((qe(r)!=="body"||tt(a))&&(u=qt(r)),re(r))){const g=Le(r);f=je(r),h.x=g.x+r.clientLeft,h.y=g.y+r.clientTop}const y=a&&!p&&!o?Kr(a,u,!0):ne(0);return{width:n.width*f.x,height:n.height*f.y,x:n.x*f.x-u.scrollLeft*f.x+h.x+y.x,y:n.y*f.y-u.scrollTop*f.y+h.y+y.y}}function ka(e){return Array.from(e.getClientRects())}function Oa(e){const t=se(e),n=qt(e),r=e.ownerDocument.body,i=Oe(t.scrollWidth,t.clientWidth,r.scrollWidth,r.clientWidth),o=Oe(t.scrollHeight,t.clientHeight,r.scrollHeight,r.clientHeight);let a=-n.scrollLeft+Bn(e);const l=-n.scrollTop;return ee(r).direction==="rtl"&&(a+=Oe(t.clientWidth,r.clientWidth)-i),{width:i,height:o,x:a,y:l}}function ja(e,t){const n=z(e),r=se(e),i=n.visualViewport;let o=r.clientWidth,a=r.clientHeight,l=0,u=0;if(i){o=i.width,a=i.height;const f=Dn();(!f||f&&t==="fixed")&&(l=i.offsetLeft,u=i.offsetTop)}return{width:o,height:a,x:l,y:u}}function Ia(e,t){const n=Le(e,!0,t==="fixed"),r=n.top+e.clientTop,i=n.left+e.clientLeft,o=re(e)?je(e):ne(1),a=e.clientWidth*o.x,l=e.clientHeight*o.y,u=i*o.x,f=r*o.y;return{width:a,height:l,x:u,y:f}}function br(e,t,n){let r;if(t==="viewport")r=ja(e,n);else if(t==="document")r=Oa(se(e));else if(Q(t))r=Ia(t,n);else{const i=Gr(e);r={x:t.x-i.x,y:t.y-i.y,width:t.width,height:t.height}}return Fr(r)}function zr(e,t){const n=we(e);return n===t||!Q(n)||Ne(n)?!1:ee(n).position==="fixed"||zr(n,t)}function Na(e,t){const n=t.get(e);if(n)return n;let r=Xe(e,[],!1).filter(l=>Q(l)&&qe(l)!=="body"),i=null;const o=ee(e).position==="fixed";let a=o?we(e):e;for(;Q(a)&&!Ne(a);){const l=ee(a),u=Pn(a);!u&&l.position==="fixed"&&(i=null),(o?!u&&!i:!u&&l.position==="static"&&!!i&&["absolute","fixed"].includes(i.position)||tt(a)&&!u&&zr(e,a))?r=r.filter(h=>h!==a):i=l,a=we(a)}return t.set(e,r),r}function Ha(e){let{element:t,boundary:n,rootBoundary:r,strategy:i}=e;const a=[...n==="clippingAncestors"?Ft(t)?[]:Na(t,this._c):[].concat(n),r],l=a[0],u=a.reduce((f,h)=>{const p=br(t,h,i);return f.top=Oe(p.top,f.top),f.right=mn(p.right,f.right),f.bottom=mn(p.bottom,f.bottom),f.left=Oe(p.left,f.left),f},br(t,l,i));return{width:u.right-u.left,height:u.bottom-u.top,x:u.left,y:u.top}}function Fa(e){const{width:t,height:n}=Wr(e);return{width:t,height:n}}function qa(e,t,n){const r=re(t),i=se(t),o=n==="fixed",a=Le(e,!0,o,t);let l={scrollLeft:0,scrollTop:0};const u=ne(0);if(r||!r&&!o)if((qe(t)!=="body"||tt(i))&&(l=qt(t)),r){const y=Le(t,!0,o,t);u.x=y.x+t.clientLeft,u.y=y.y+t.clientTop}else i&&(u.x=Bn(i));const f=i&&!r&&!o?Kr(i,l):ne(0),h=a.left+l.scrollLeft-u.x-f.x,p=a.top+l.scrollTop-u.y-f.y;return{x:h,y:p,width:a.width,height:a.height}}function an(e){return ee(e).position==="static"}function wr(e,t){if(!re(e)||ee(e).position==="fixed")return null;if(t)return t(e);let n=e.offsetParent;return se(e)===n&&(n=n.ownerDocument.body),n}function Vr(e,t){const n=z(e);if(Ft(e))return n;if(!re(e)){let i=we(e);for(;i&&!Ne(i);){if(Q(i)&&!an(i))return i;i=we(i)}return n}let r=wr(e,t);for(;r&&Ra(r)&&an(r);)r=wr(r,t);return r&&Ne(r)&&an(r)&&!Pn(r)?n:r||Pa(e)||n}const Ua=async function(e){const t=this.getOffsetParent||Vr,n=this.getDimensions,r=await n(e.floating);return{reference:qa(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:r.width,height:r.height}}};function Wa(e){return ee(e).direction==="rtl"}const Ga={convertOffsetParentRelativeRectToViewportRelativeRect:Ba,getDocumentElement:se,getClippingRect:Ha,getOffsetParent:Vr,getElementRects:Ua,getClientRects:ka,getDimensions:Fa,getScale:je,isElement:Q,isRTL:Wa};function Yr(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function Ka(e,t){let n=null,r;const i=se(e);function o(){var l;clearTimeout(r),(l=n)==null||l.disconnect(),n=null}function a(l,u){l===void 0&&(l=!1),u===void 0&&(u=1),o();const f=e.getBoundingClientRect(),{left:h,top:p,width:y,height:g}=f;if(l||t(),!y||!g)return;const b=xt(p),v=xt(i.clientWidth-(h+y)),S=xt(i.clientHeight-(p+g)),M=xt(h),L={rootMargin:-b+"px "+-v+"px "+-S+"px "+-M+"px",threshold:Oe(0,mn(1,u))||1};let R=!0;function B(oe){const O=oe[0].intersectionRatio;if(O!==u){if(!R)return a();O?a(!1,O):r=setTimeout(()=>{a(!1,1e-7)},1e3)}O===1&&!Yr(f,e.getBoundingClientRect())&&a(),R=!1}try{n=new IntersectionObserver(B,{...L,root:i.ownerDocument})}catch{n=new IntersectionObserver(B,L)}n.observe(e)}return a(!0),o}function za(e,t,n,r){r===void 0&&(r={});const{ancestorScroll:i=!0,ancestorResize:o=!0,elementResize:a=typeof ResizeObserver=="function",layoutShift:l=typeof IntersectionObserver=="function",animationFrame:u=!1}=r,f=Tn(e),h=i||o?[...f?Xe(f):[],...Xe(t)]:[];h.forEach(M=>{i&&M.addEventListener("scroll",n,{passive:!0}),o&&M.addEventListener("resize",n)});const p=f&&l?Ka(f,n):null;let y=-1,g=null;a&&(g=new ResizeObserver(M=>{let[$]=M;$&&$.target===f&&g&&(g.unobserve(t),cancelAnimationFrame(y),y=requestAnimationFrame(()=>{var L;(L=g)==null||L.observe(t)})),n()}),f&&!u&&g.observe(f),g.observe(t));let b,v=u?Le(e):null;u&&S();function S(){const M=Le(e);v&&!Yr(v,M)&&n(),v=M,b=requestAnimationFrame(S)}return n(),()=>{var M;h.forEach($=>{i&&$.removeEventListener("scroll",n),o&&$.removeEventListener("resize",n)}),p==null||p(),(M=g)==null||M.disconnect(),g=null,u&&cancelAnimationFrame(b)}}const Va=(e,t,n)=>{const r=new Map,i={platform:Ga,...n},o={...i.platform,_c:r};return $a(e,t,{...i,platform:o})};function Ya(e){const t=e.renderRoot.querySelector(".inline-container-wrapper"),n=e.renderRoot.querySelector("[popover]");return za(t,n,()=>{n.matches(":popover-open")&&Va(t,n,{strategy:"fixed"}).then(({x:i,y:o})=>{Object.assign(n.style,{left:`${i}px`,top:`${o}px`,width:`${t.getBoundingClientRect().width}px`})})},{animationFrame:!0})}function Xr(e){e.renderRoot.querySelector("#eox-itemfilter-input-search").value="",Ir({target:{value:""}},e)}function Xa(e,t){t.inlineMode&&e.stopPropagation()}function Ja(e){e.inlineMode&&(e.showDropdown=!0)}function Za(e,t){t.inlineMode&&(e.stopPropagation(),t.showDropdown=!0)}function Qa(e,t){t.inlineMode&&e.key==="Escape"&&t.showDropdown&&(Xr(t),t.showDropdown=!1)}function el(e,t){t.inlineMode&&e.target instanceof HTMLElement&&e.target.tagName!=="DROPDOWN-FORM"&&e.target.tagName!=="EOX-ITEMFILTER"&&t.showDropdown&&(Xr(t),t.showDropdown=!1)}function tl(e,t){var n,r,i=0,o,a,l,u,f,h,p,y=e[0],g=e[1],b=t.length;for(n=0;n<b;n++){r=0;var v=t[n],S=v.length-1;if(h=v[0],h[0]!==v[S][0]&&h[1]!==v[S][1])throw new Error("First and last coordinates in a ring must be the same");for(a=h[0]-y,l=h[1]-g,r;r<S;r++){if(p=v[r+1],u=p[0]-y,f=p[1]-g,l===0&&f===0){if(u<=0&&a>=0||a<=0&&u>=0)return 0}else if(f>=0&&l<=0||f<=0&&l>=0){if(o=Eo(a,u,l,f,0,0),o===0)return 0;(o>0&&f>0&&l<=0||o<0&&f<=0&&l>0)&&i++}h=p,l=f,a=u}}return i%2!==0}function Jr(e){if(!e)throw new Error("coord is required");if(!Array.isArray(e)){if(e.type==="Feature"&&e.geometry!==null&&e.geometry.type==="Point")return[...e.geometry.coordinates];if(e.type==="Point")return[...e.coordinates]}if(Array.isArray(e)&&e.length>=2&&!Array.isArray(e[0])&&!Array.isArray(e[1]))return[...e];throw new Error("coord must be GeoJSON Point or an Array of numbers")}function nl(e){if(Array.isArray(e))return e;if(e.type==="Feature"){if(e.geometry!==null)return e.geometry.coordinates}else if(e.coordinates)return e.coordinates;throw new Error("coords must be GeoJSON Feature, Geometry Object or an Array")}function He(e){return e.type==="Feature"?e.geometry:e}function J(e,t,n={}){if(!e)throw new Error("point is required");if(!t)throw new Error("polygon is required");const r=Jr(e),i=He(t),o=i.type,a=t.bbox;let l=i.coordinates;if(a&&rl(r,a)===!1)return!1;o==="Polygon"&&(l=[l]);let u=!1;for(var f=0;f<l.length;++f){const h=tl(r,l[f]);if(h===0)return!n.ignoreBoundary;h&&(u=!0)}return u}function rl(e,t){return t[0]<=e[0]&&t[1]<=e[1]&&t[2]>=e[0]&&t[3]>=e[1]}class Zr{constructor(t=[],n=il){if(this.data=t,this.length=this.data.length,this.compare=n,this.length>0)for(let r=(this.length>>1)-1;r>=0;r--)this._down(r)}push(t){this.data.push(t),this.length++,this._up(this.length-1)}pop(){if(this.length===0)return;const t=this.data[0],n=this.data.pop();return this.length--,this.length>0&&(this.data[0]=n,this._down(0)),t}peek(){return this.data[0]}_up(t){const{data:n,compare:r}=this,i=n[t];for(;t>0;){const o=t-1>>1,a=n[o];if(r(i,a)>=0)break;n[t]=a,t=o}n[t]=i}_down(t){const{data:n,compare:r}=this,i=this.length>>1,o=n[t];for(;t<i;){let a=(t<<1)+1,l=n[a];const u=a+1;if(u<this.length&&r(n[u],l)<0&&(a=u,l=n[u]),r(l,o)>=0)break;n[t]=l,t=a}n[t]=o}}function il(e,t){return e<t?-1:e>t?1:0}function Qr(e,t){return e.p.x>t.p.x?1:e.p.x<t.p.x?-1:e.p.y!==t.p.y?e.p.y>t.p.y?1:-1:1}function sl(e,t){return e.rightSweepEvent.p.x>t.rightSweepEvent.p.x?1:e.rightSweepEvent.p.x<t.rightSweepEvent.p.x?-1:e.rightSweepEvent.p.y!==t.rightSweepEvent.p.y?e.rightSweepEvent.p.y<t.rightSweepEvent.p.y?1:-1:1}class vr{constructor(t,n,r,i){this.p={x:t[0],y:t[1]},this.featureId=n,this.ringId=r,this.eventId=i,this.otherEvent=null,this.isLeftEndpoint=null}isSamePoint(t){return this.p.x===t.p.x&&this.p.y===t.p.y}}function ol(e,t){if(e.type==="FeatureCollection"){const n=e.features;for(let r=0;r<n.length;r++)xr(n[r],t)}else xr(e,t)}let At=0,_t=0,Ct=0;function xr(e,t){const n=e.type==="Feature"?e.geometry:e;let r=n.coordinates;(n.type==="Polygon"||n.type==="MultiLineString")&&(r=[r]),n.type==="LineString"&&(r=[[r]]);for(let i=0;i<r.length;i++)for(let o=0;o<r[i].length;o++){let a=r[i][o][0],l=null;_t=_t+1;for(let u=0;u<r[i][o].length-1;u++){l=r[i][o][u+1];const f=new vr(a,At,_t,Ct),h=new vr(l,At,_t,Ct+1);f.otherEvent=h,h.otherEvent=f,Qr(f,h)>0?(h.isLeftEndpoint=!0,f.isLeftEndpoint=!1):(f.isLeftEndpoint=!0,h.isLeftEndpoint=!1),t.push(f),t.push(h),a=l,Ct=Ct+1}}At=At+1}class al{constructor(t){this.leftSweepEvent=t,this.rightSweepEvent=t.otherEvent}}function ll(e,t){if(e===null||t===null||e.leftSweepEvent.ringId===t.leftSweepEvent.ringId&&(e.rightSweepEvent.isSamePoint(t.leftSweepEvent)||e.rightSweepEvent.isSamePoint(t.leftSweepEvent)||e.rightSweepEvent.isSamePoint(t.rightSweepEvent)||e.leftSweepEvent.isSamePoint(t.leftSweepEvent)||e.leftSweepEvent.isSamePoint(t.rightSweepEvent)))return!1;const n=e.leftSweepEvent.p.x,r=e.leftSweepEvent.p.y,i=e.rightSweepEvent.p.x,o=e.rightSweepEvent.p.y,a=t.leftSweepEvent.p.x,l=t.leftSweepEvent.p.y,u=t.rightSweepEvent.p.x,f=t.rightSweepEvent.p.y,h=(f-l)*(i-n)-(u-a)*(o-r),p=(u-a)*(r-l)-(f-l)*(n-a),y=(i-n)*(r-l)-(o-r)*(n-a);if(h===0)return!1;const g=p/h,b=y/h;if(g>=0&&g<=1&&b>=0&&b<=1){const v=n+g*(i-n),S=r+g*(o-r);return[v,S]}return!1}function cl(e,t){t=t||!1;const n=[],r=new Zr([],sl);for(;e.length;){const i=e.pop();if(i.isLeftEndpoint){const o=new al(i);for(let a=0;a<r.data.length;a++){const l=r.data[a];if(t&&l.leftSweepEvent.featureId===i.featureId)continue;const u=ll(o,l);u!==!1&&n.push(u)}r.push(o)}else i.isLeftEndpoint===!1&&r.pop()}return n}function ul(e,t){const n=new Zr([],Qr);return ol(e,n),cl(n,t)}var fl=ul;function kn(e,t,n={}){const{removeDuplicates:r=!0,ignoreSelfIntersections:i=!0}=n;let o=[];e.type==="FeatureCollection"?o=o.concat(e.features):e.type==="Feature"?o.push(e):(e.type==="LineString"||e.type==="Polygon"||e.type==="MultiLineString"||e.type==="MultiPolygon")&&o.push(Mt(e)),t.type==="FeatureCollection"?o=o.concat(t.features):t.type==="Feature"?o.push(t):(t.type==="LineString"||t.type==="Polygon"||t.type==="MultiLineString"||t.type==="MultiPolygon")&&o.push(Mt(t));const a=fl(un(o),i);let l=[];if(r){const u={};a.forEach(f=>{const h=f.join(",");u[h]||(u[h]=!0,l.push(f))})}else l=a;return un(l.map(u=>Lo(u)))}function ei(e,t,n){if(e!==null)for(var r,i,o,a,l,u,f,h=0,p=0,y,g=e.type,b=g==="FeatureCollection",v=g==="Feature",S=b?e.features.length:1,M=0;M<S;M++){f=b?e.features[M].geometry:v?e.geometry:e,y=f?f.type==="GeometryCollection":!1,l=y?f.geometries.length:1;for(var $=0;$<l;$++){var L=0,R=0;if(a=y?f.geometries[$]:f,a!==null){u=a.coordinates;var B=a.type;switch(h=0,B){case null:break;case"Point":if(t(u,p,M,L,R)===!1)return!1;p++,L++;break;case"LineString":case"MultiPoint":for(r=0;r<u.length;r++){if(t(u[r],p,M,L,R)===!1)return!1;p++,B==="MultiPoint"&&L++}B==="LineString"&&L++;break;case"Polygon":case"MultiLineString":for(r=0;r<u.length;r++){for(i=0;i<u[r].length-h;i++){if(t(u[r][i],p,M,L,R)===!1)return!1;p++}B==="MultiLineString"&&L++,B==="Polygon"&&R++}B==="Polygon"&&L++;break;case"MultiPolygon":for(r=0;r<u.length;r++){for(R=0,i=0;i<u[r].length;i++){for(o=0;o<u[r][i].length-h;o++){if(t(u[r][i][o],p,M,L,R)===!1)return!1;p++}R++}L++}break;case"GeometryCollection":for(r=0;r<a.geometries.length;r++)if(ei(a.geometries[r],t)===!1)return!1;break;default:throw new Error("Unknown Geometry Type")}}}}}function hl(e,t){var n,r,i,o,a,l,u,f,h,p,y=0,g=e.type==="FeatureCollection",b=e.type==="Feature",v=g?e.features.length:1;for(n=0;n<v;n++){for(l=g?e.features[n].geometry:b?e.geometry:e,f=g?e.features[n].properties:b?e.properties:{},h=g?e.features[n].bbox:b?e.bbox:void 0,p=g?e.features[n].id:b?e.id:void 0,u=l?l.type==="GeometryCollection":!1,a=u?l.geometries.length:1,i=0;i<a;i++){if(o=u?l.geometries[i]:l,o===null){if(t(null,y,f,h,p)===!1)return!1;continue}switch(o.type){case"Point":case"LineString":case"MultiPoint":case"Polygon":case"MultiLineString":case"MultiPolygon":{if(t(o,y,f,h,p)===!1)return!1;break}case"GeometryCollection":{for(r=0;r<o.geometries.length;r++)if(t(o.geometries[r],y,f,h,p)===!1)return!1;break}default:throw new Error("Unknown Geometry Type")}}y++}}function $t(e,t){hl(e,function(n,r,i,o,a){var l=n===null?null:n.type;switch(l){case null:case"Point":case"LineString":case"Polygon":return t(Mt(n,i,{bbox:o,id:a}),r,0)===!1?!1:void 0}var u;switch(l){case"MultiPoint":u="Point";break;case"MultiLineString":u="LineString";break;case"MultiPolygon":u="Polygon";break}for(var f=0;f<n.coordinates.length;f++){var h=n.coordinates[f],p={type:u,coordinates:h};if(t(Mt(p,i),r,f)===!1)return!1}})}function wn(e,t={}){const n=He(e);switch(!t.properties&&e.type==="Feature"&&(t.properties=e.properties),n.type){case"Polygon":return dl(n,t);case"MultiPolygon":return pl(n,t);default:throw new Error("invalid poly")}}function dl(e,t={}){const r=He(e).coordinates,i=t.properties?t.properties:e.type==="Feature"?e.properties:{};return ti(r,i)}function pl(e,t={}){const r=He(e).coordinates,i=t.properties?t.properties:e.type==="Feature"?e.properties:{},o=[];return r.forEach(a=>{o.push(ti(a,i))}),un(o)}function ti(e,t){return e.length>1?$o(e,t):Ro(e[0],t)}function gl(e,t,{ignoreSelfIntersections:n=!0}={ignoreSelfIntersections:!0}){let r=!0;return $t(e,i=>{$t(t,o=>{if(r===!1)return!1;r=yl(i.geometry,o.geometry,n)})}),r}function yl(e,t,n){switch(e.type){case"Point":switch(t.type){case"Point":return!vl(e.coordinates,t.coordinates);case"LineString":return!Ar(t,e);case"Polygon":return!J(e,t)}break;case"LineString":switch(t.type){case"Point":return!Ar(e,t);case"LineString":return!ml(e,t,n);case"Polygon":return!_r(t,e,n)}break;case"Polygon":switch(t.type){case"Point":return!J(t,e);case"LineString":return!_r(e,t,n);case"Polygon":return!bl(t,e,n)}}return!1}function Ar(e,t){for(let n=0;n<e.coordinates.length-1;n++)if(wl(e.coordinates[n],e.coordinates[n+1],t.coordinates))return!0;return!1}function ml(e,t,n){return kn(e,t,{ignoreSelfIntersections:n}).features.length>0}function _r(e,t,n){for(const i of t.coordinates)if(J(i,e))return!0;return kn(t,wn(e),{ignoreSelfIntersections:n}).features.length>0}function bl(e,t,n){for(const i of e.coordinates[0])if(J(i,t))return!0;for(const i of t.coordinates[0])if(J(i,e))return!0;return kn(wn(e),wn(t),{ignoreSelfIntersections:n}).features.length>0}function wl(e,t,n){const r=n[0]-e[0],i=n[1]-e[1],o=t[0]-e[0],a=t[1]-e[1];return r*a-i*o!==0?!1:Math.abs(o)>=Math.abs(a)?o>0?e[0]<=n[0]&&n[0]<=t[0]:t[0]<=n[0]&&n[0]<=e[0]:a>0?e[1]<=n[1]&&n[1]<=t[1]:t[1]<=n[1]&&n[1]<=e[1]}function vl(e,t){return e[0]===t[0]&&e[1]===t[1]}function xl(e,t,{ignoreSelfIntersections:n=!0}={}){let r=!1;return $t(e,i=>{$t(t,o=>{if(r===!0)return!0;r=!gl(i.geometry,o.geometry,{ignoreSelfIntersections:n})})}),r}var Al=xl;function Rt(e,t={}){if(e.bbox!=null&&t.recompute!==!0)return e.bbox;const n=[1/0,1/0,-1/0,-1/0];return ei(e,r=>{n[0]>r[0]&&(n[0]=r[0]),n[1]>r[1]&&(n[1]=r[1]),n[2]<r[0]&&(n[2]=r[0]),n[3]<r[1]&&(n[3]=r[1])}),n}function Pt(e,t,n={}){const r=Jr(e),i=nl(t);for(let o=0;o<i.length-1;o++){let a=!1;if(n.ignoreEndVertices&&(o===0&&(a="start"),o===i.length-2&&(a="end"),o===0&&o+1===i.length-1&&(a="both")),_l(i[o],i[o+1],r,a,typeof n.epsilon>"u"?null:n.epsilon))return!0}return!1}function _l(e,t,n,r,i){const o=n[0],a=n[1],l=e[0],u=e[1],f=t[0],h=t[1],p=n[0]-l,y=n[1]-u,g=f-l,b=h-u,v=p*b-y*g;if(i!==null){if(Math.abs(v)>i)return!1}else if(v!==0)return!1;if(Math.abs(g)===Math.abs(b)&&Math.abs(g)===0)return r?!1:n[0]===e[0]&&n[1]===e[1];if(r){if(r==="start")return Math.abs(g)>=Math.abs(b)?g>0?l<o&&o<=f:f<=o&&o<l:b>0?u<a&&a<=h:h<=a&&a<u;if(r==="end")return Math.abs(g)>=Math.abs(b)?g>0?l<=o&&o<f:f<o&&o<=l:b>0?u<=a&&a<h:h<a&&a<=u;if(r==="both")return Math.abs(g)>=Math.abs(b)?g>0?l<o&&o<f:f<o&&o<l:b>0?u<a&&a<h:h<a&&a<u}else return Math.abs(g)>=Math.abs(b)?g>0?l<=o&&o<=f:f<=o&&o<=l:b>0?u<=a&&a<=h:h<=a&&a<=u;return!1}function Cl(e,t){var n=He(e),r=He(t),i=n.type,o=r.type;switch(i){case"Point":switch(o){case"MultiPoint":return Ml(n,r);case"LineString":return Pt(n,r,{ignoreEndVertices:!0});case"Polygon":case"MultiPolygon":return J(n,r,{ignoreBoundary:!0});default:throw new Error("feature2 "+o+" geometry not supported")}case"MultiPoint":switch(o){case"MultiPoint":return Sl(n,r);case"LineString":return El(n,r);case"Polygon":case"MultiPolygon":return Ll(n,r);default:throw new Error("feature2 "+o+" geometry not supported")}case"LineString":switch(o){case"LineString":return $l(n,r);case"Polygon":case"MultiPolygon":return Rl(n,r);default:throw new Error("feature2 "+o+" geometry not supported")}case"Polygon":switch(o){case"Polygon":case"MultiPolygon":return Pl(n,r);default:throw new Error("feature2 "+o+" geometry not supported")}default:throw new Error("feature1 "+i+" geometry not supported")}}function Ml(e,t){var n,r=!1;for(n=0;n<t.coordinates.length;n++)if(ri(t.coordinates[n],e.coordinates)){r=!0;break}return r}function Sl(e,t){for(var n=0;n<e.coordinates.length;n++){for(var r=!1,i=0;i<t.coordinates.length;i++)ri(e.coordinates[n],t.coordinates[i])&&(r=!0);if(!r)return!1}return!0}function El(e,t){for(var n=!1,r=0;r<e.coordinates.length;r++){if(!Pt(e.coordinates[r],t))return!1;n||(n=Pt(e.coordinates[r],t,{ignoreEndVertices:!0}))}return n}function Ll(e,t){for(var n=!0,r=!1,i=0;i<e.coordinates.length;i++){if(r=J(e.coordinates[i],t),!r){n=!1;break}r=J(e.coordinates[i],t,{ignoreBoundary:!0})}return n&&r}function $l(e,t){for(var n=0;n<e.coordinates.length;n++)if(!Pt(e.coordinates[n],t))return!1;return!0}function Rl(e,t){var n=Rt(t),r=Rt(e);if(!ni(n,r))return!1;for(var i=!1,o=0;o<e.coordinates.length;o++){if(!J(e.coordinates[o],t))return!1;if(i||(i=J(e.coordinates[o],t,{ignoreBoundary:!0})),!i&&o<e.coordinates.length-1){var a=Dl(e.coordinates[o],e.coordinates[o+1]);i=J(a,t,{ignoreBoundary:!0})}}return i}function Pl(e,t){var n=Rt(e),r=Rt(t);if(!ni(r,n))return!1;for(var i=0;i<e.coordinates[0].length;i++)if(!J(e.coordinates[0][i],t))return!1;return!0}function ni(e,t){return!(e[0]>t[0]||e[2]<t[2]||e[1]>t[1]||e[3]<t[3])}function ri(e,t){return e[0]===t[0]&&e[1]===t[1]}function Dl(e,t){return[(e[0]+t[0])/2,(e[1]+t[1])/2]}var Tl=Cl;const Bl=(e,t)=>t?Al(e,t):!0,kl=(e,t)=>t?Tl(e,t):!0;function Ol(e,t="highlight",n="title"){const r=(o,a,l)=>{const u=a.split(".");let f;for(f=0;f<u.length-1;f++)o=o[u[f]];o[u[f]]=l},i=(o,a=[])=>{let l="",u=0;return a.forEach(f=>{const h=f[1]+1;l+=[o.substring(u,f[0]),`<mark class="${t}">`,o.substring(f[0],h),"</mark>"].join(""),u=h}),l+=o.substring(u),l};return e.filter(({matches:o})=>o&&o.length).map(({item:o,matches:a})=>{const l={...o};return a.forEach(u=>{u.key===n&&r(l,u.key,i(u.value,u.indices))}),l})}let ii;const jl=(e,t)=>{ii=new _e(e,{threshold:.4,distance:50,includeMatches:!0,useExtendedSearch:!0,...t})},Il=async(e,t,n)=>{const r=Object.entries(t).filter(([,l])=>l.type==="text"||l.type==="select"||l.type==="multiselect").reduce((l,[u,f])=>{const h="$or",p=[],y=(g,b)=>{const v={};f.type==="text"?v[g]=`${b}`:v[u]=`="${g}"`,p.push(v)};return Object.entries(f.state).filter(([,g])=>g).forEach(([g,b])=>y(g,b)),p.length>0&&l.push({[h]:p}),l},[]);let i;if(!(r.length>0)&&n.matchAllWhenEmpty!==!1)i=e;else{const l={$and:[...r]},u=ii.search(l);i=n.enableHighlighting?Ol(u,"highlight",n.titleProperty):u.map(f=>f.item)}const o=Object.entries(t).filter(([,l])=>l.type==="range").reduce((l,[u,f])=>(l[u]={min:f.state.min,max:f.state.max,format:f.format},l),{});if(Object.keys(o).length>0){const l=[];for(let u=0;u<i.length;u++){const f={};for(const[h,p]of Object.entries(o)){const y=b=>p.format==="date"?Ye(b).unix():b,g=Je(h,i[u]);g?Array.isArray(g)?f[h]=o[h].min<=y(g[1])&&y(g[0])<=o[h].max:y(g)>=o[h].min&&y(g)<=o[h].max?f[h]=!0:f[h]=!1:f[h]=!0}Object.values(f).every(h=>!!h)&&l.push(i[u])}i=[...l]}const a=Object.entries(t).filter(([,l])=>l.type==="spatial").reduce((l,[u,f])=>(l[u]={geometry:f.state.geometry,mode:f.state.mode},l),{});if(Object.values(a).map(l=>l.geometry).filter(l=>!!l).length>0){const l=[];for(let u=0;u<i.length;u++){const f={};for(const h of Object.keys(a)){const p=Je(h,i[u]),y=a[h].mode||"within";p&&(y==="within"?kl(p,a[h].geometry):Bl(p,a[h].geometry))?f[h]=!0:f[h]=!1}Object.values(f).every(h=>!!h)&&l.push(i[u])}i=[...l]}return i};function Nl(e,t){return[{type:"Vector",properties:{id:"draw"},source:{type:"Vector",...e&&{format:"GeoJSON"},...e&&{url:t}},zIndex:1,interactions:[{type:"draw",options:{id:"drawInteraction",type:"Box",modify:!0}}]},{type:"Tile",source:{type:"XYZ",url:"https://tiles.maps.eox.at/wmts/1.0.0/osm_3857/default/g/{z}/{y}/{x}.jpg",attribution:"{ OSM: Data &copy; OpenStreetMap contributors and others, Rendering &copy; EOX }"}}]}function Ut(e){if(!e.dirty)return null;switch(e.type){case"multiselect":for(const n in e.state)e.state.hasOwnProperty(n)&&(e.state[n]=!1);break;case"range":e.state.min=e.min,e.state.max=e.max;break;case"select":for(const n in e.state)e.state.hasOwnProperty(n)&&(e.state[n]=!1);break;case"spatial":e.state.geometry=void 0;break;case"text":e.keys.forEach(n=>{e.state[n]=void 0});break}return delete e.stringifiedState,delete e.dirty,e}function Cr(e,t){return e*2+t}function Hl(e){return Object.keys(e).map(t=>({title:_`${e[t].title||e[t].key}:
        <strong>${e[t].stringifiedState}</strong>`,key:t})).filter(t=>e[t.key].dirty)}function vn(e){return Object.values(e).map(t=>t.dirty).filter(t=>t).length>0}async function Fl(e,t,n){return await(await fetch(`${n.externalFilter(e,t)}`)).json()}function si(e,t,n){let r;if(e.detail?r=e.detail.target:r=e.target,r!=null&&r.classList.contains("details-filter")){if(!r.open||t!=null&&t.expandMultipleFilters)return;n.shadowRoot.querySelectorAll("eox-itemfilter-expandcontainer").forEach(i=>{const o=i.shadowRoot.querySelector(".details-filter");o&&o!==r&&o.removeAttribute("open")})}else{if(!(r!=null&&r.open)||t!=null&&t.expandMultipleResults)return;n.querySelectorAll("details").forEach(i=>{i!==r&&i.removeAttribute("open")})}}function Je(e,t){return e!=null&&e.includes(".")?e.split(".").reduce((n,r)=>n&&n[r],t):t[e]}var P,oi,xn,An,ai,_n,Cn,li,Mn,ci,ui;class ql extends ie{constructor(){super();q(this,P);this.filterProperties={},this.unstyled=!1,this.inlineMode=!1,this.filters={},this._handleClickOutside=E(this,P,ai).bind(this),this._handleKeyDown=E(this,P,_n).bind(this)}static get properties(){return{filterProperties:{attribute:!1,type:Object},inlineMode:{attribute:"inline-mode",type:Boolean},unstyled:{type:Boolean},filters:{state:!0,type:Object}}}set showDropdown(n){this.renderRoot.querySelector("[popover]").togglePopover(n)}get showDropdown(){var n;return(n=this.renderRoot.querySelector("[popover]"))==null?void 0:n.matches(":popover-open")}connectedCallback(){super.connectedCallback(),this.inlineMode&&E(this,P,xn).call(this)}disconnectedCallback(){this.inlineMode&&E(this,P,An).call(this),super.disconnectedCallback()}_overlayCleanup(){}updateInline(){this.inlineMode&&this.requestUpdate()}updated(n){n.has("inlineMode")&&(this.inlineMode?E(this,P,xn).call(this):E(this,P,An).call(this))}render(){return _`
      <style>
        ${!this.unstyled&&et}
      </style>
      ${this.inlineMode?_`
            <div
              class="inline-container-wrapper"
              @click="${E(this,P,Cn)}"
            >
              <div class="inline-container" part="container">
                <div class="chip-container">
                  <div class="chip-wrapper">
                    <eox-itemfilter-chips
                      .items=${Hl(this.filters)}
                      .controller=${{remove:n=>E(this,P,ci).call(this,n)}}
                    >
                    </eox-itemfilter-chips>
                  </div>

                  ${I(vn(this.filters),()=>_`
                      <span
                        class="chip-close"
                        @click=${()=>this.dispatchEvent(new CustomEvent("reset"))}
                      ></span>
                    `)}
                </div>
                <div
                  class="input-container ${vn(this.filters)?"dirty-filter-input":""}"
                >
                  <input
                    autocomplete="off"
                    id="eox-itemfilter-input-search"
                    type="text"
                    @click="${E(this,P,Cn)}"
                    @focus="${E(this,P,li)}"
                    @input="${E(this,P,ui)}"
                    placeholder="Search and add filter"
                    aria-haspopup="true"
                    aria-expanded="${this.showDropdown}"
                  />
                </div>
              </div>
              <div popover="manual">
                <div
                  class="inline-content"
                  slot="content"
                  @keydown="${E(this,P,_n)}"
                  @click="${E(this,P,Mn)}"
                  @focus="${E(this,P,Mn)}"
                >
                  <slot name="section"></slot>
                </div>
              </div>
            </div>
          `:_`<slot name="section"></slot>`}
    `}}P=new WeakSet,oi=function(){setTimeout(()=>this._overlayCleanup=Ya(this))},xn=function(){document.addEventListener("click",this._handleClickOutside),document.addEventListener("focusout",this._handleClickOutside),document.addEventListener("keydown",this._handleKeyDown),E(this,P,oi).call(this)},An=function(){document.removeEventListener("click",this._handleClickOutside),document.removeEventListener("focusout",this._handleClickOutside),document.removeEventListener("keydown",this._handleKeyDown),this._overlayCleanup()},ai=function(n){el(n,this)},_n=function(n){Qa(n,this)},Cn=function(n){Za(n,this)},li=function(){Ja(this)},Mn=function(n){Xa(n,this)},ci=function(n){Ca(n,this)},ui=function(n){Ir(n,this)};customElements.define("eox-itemfilter-container",ql);function Ul(e){const t=e.renderRoot.querySelector("input[type='text']");t.value="",Ut(e.filterObject),e.requestUpdate()}function Wl(e){const t=e.renderRoot.querySelector("input[type='text']");e.isValid=t.checkValidity(),e.filterObject.keys.forEach(n=>{e.filterObject.state[n]=t.value}),e.filterObject.dirty=!0,e.filterObject.stringifiedState=t.value,e.dispatchEvent(new CustomEvent("filter")),t.value===""&&e.reset()}const Sn="ddd, D MMM YYYY HH:mm:ss";function Gl(e){if(e.filterObject=Ut(e.filterObject),e.filterObject){const t=e.querySelector("tc-range-slider"),n=e.filterObject.min,r=e.filterObject.max;t.value1!==n&&(t.value1=n),t.value2!==r&&(t.value2=r)}e.requestUpdate()}function Kl(e,t){const[n,r]=e.detail.values;(n!==t.filterObject.state.min||r!==t.filterObject.state.max)&&([t.filterObject.state.min,t.filterObject.state.max]=[n,r],t.filterObject.dirty=!0),t.filterObject.dirty&&(t.filterObject.stringifiedState=t.filterObject.format==="date"?`${Ye.unix(n).format(Sn)} - ${Ye.unix(r).format(Sn)}`:`${n} - ${r}`),t.dispatchEvent(new CustomEvent("filter")),n===t.filterObject.min&&r===t.filterObject.max?t.reset():t.requestUpdate()}function zl(e,t,n){const r=n.filterObject.format==="date",i=n.filterObject.state[e],o=r?Ye.unix(i).format(Sn):i;return _`<div class="range-${t}">${o}</div>`}function Vl(e){Yl(-1,e),Ut(e.filterObject),e.requestUpdate()}function Yl(e,t){t.selectedItems=[],On(t),hi(t)}function fi(e,t){const n=t.selectedItems.indexOf(e);n>=0?t.selectedItems=t.selectedItems.filter((r,i)=>i!==n):t.type==="multiselect"?t.selectedItems=[...t.selectedItems,e]:(t.selectedItems=[e],t.showSuggestions=!1),On(t),hi(t)}function Xl(e,t){e.target instanceof HTMLInputElement&&(t.query=e.target.value,t.showSuggestions=!0)}function Jl(e,t){switch(e.key){case"ArrowDown":t.highlightedIndex=Math.min(t.highlightedIndex+1,t.filteredSuggestions.length-1);break;case"ArrowUp":t.highlightedIndex=Math.max(t.highlightedIndex-1,0);break;case"Enter":t.highlightedIndex>=0&&fi(t.filteredSuggestions[t.highlightedIndex],t);break;case"Escape":t.showSuggestions=!1;break}}function Zl(e,t){(e.has("suggestions")||e.has("query"))&&On(t)}function Ql(e,t){var r;const n=((r=e.filterObject)==null?void 0:r.sort)||((i,o)=>i.localeCompare(o));return t.sort(n).map(i=>i)}function On(e){var n,r,i;let t;e.query&&(t=new _e(e.suggestions,{threshold:.4}).search(e.query).map(a=>a.item)),e.filteredSuggestions=Ql(e,t||e.suggestions),(n=e.filterObject)!=null&&n.filterKeys&&(e.filteredSuggestions=(r=e.filterObject)==null?void 0:r.filterKeys.map(o=>`${o}`),e.filterObject.state=(i=e.filterObject)==null?void 0:i.filterKeys.map(o=>`${o}`).reduce((o,a)=>(a in o||(o[a]=void 0),o),e.filterObject.state)),e.highlightedIndex=-1}function hi(e){Object.keys(e.filterObject.state).forEach(t=>{e.filterObject.state[t]=e.selectedItems.includes(t)}),e.filterObject.stringifiedState=Object.keys(e.filterObject.state).filter(t=>e.filterObject.state[t]).join(", ")||"",e.filterObject.dirty=e.filterObject.stringifiedState.length>0,e.dispatchEvent(new CustomEvent("filter")),e.requestUpdate()}function ec(e){Ut(e.filterObject),e.renderRoot.querySelector("eox-itemfilter-spatial-filter").reset(),e.requestUpdate()}function tc(e){e.renderRoot.querySelector("#eox-map").innerHTML="",di(e)}function nc(e,t){t.filterObject.state.mode=e;const n=new CustomEvent("filter",{detail:{[t.filterObject.key]:{}}});t.dispatchEvent(n)}function di(e){const t=e.renderRoot.querySelector("#eox-map");t.innerHTML===""&&(t.innerHTML='<eox-map part="map" style="height: 400px"></eox-map>');const n=e.geometry&&rc(e.geometry),r=Nl(e.geometry,n);e.eoxMap=e.renderRoot.querySelector("eox-map"),setTimeout(()=>{e.eoxMap.layers=r;const i=o=>{const a=new CustomEvent("filter",{detail:{geometry:{type:"Polygon",coordinates:o.getGeometry().clone().transform("EPSG:3857","EPSG:4326").getCoordinates()}}});e.dispatchEvent(a)};e.eoxMap.interactions.drawInteraction.on("drawend",o=>{i(o.feature),e.eoxMap.removeInteraction("drawInteraction")}),e.eoxMap.interactions.drawInteraction_modify.on("modifyend",o=>{i(o.features.getArray()[0])})},1e3)}function rc(e){return`data:text/json,${encodeURIComponent(JSON.stringify({type:"FeatureCollection",features:[{type:"Feature",properties:null,geometry:e}]}))}`}var kt;class ic extends ie{constructor(){super();q(this,kt,()=>{Wl(this)});Ve(this,"debouncedInputHandler",Nt(G(this,kt),500,{leading:!0}));this.filterObject={},this.unstyled=!1,this.tabIndex=0,this.isValid=!1}static get properties(){return{filterObject:{attribute:!1,type:Object},tabIndex:{attribute:!1,type:Number},unstyled:{type:Boolean},isValid:{state:!0,type:Boolean}}}reset(){Ul(this)}createRenderRoot(){return this}render(){return I(this.filterObject,()=>{var n;return _`
        <style></style>
        <div class="text-container">
          <div class="text-container-wrapper">
            <input
              type="text"
              placeholder=${this.filterObject.placeholder}
              data-cy="search"
              class="text-input"
              part="input-search"
              value="${Object.values(this.filterObject.state)[0]}"
              tabindex=${this.tabIndex}
              pattern="${((n=this.filterObject.validation)==null?void 0:n.pattern)||".*"}"
              @input="${this.debouncedInputHandler}"
              @click=${r=>r.stopPropagation()}
            />
          </div>
        </div>
        <small class="error-validation"
          >${this.filterObject.validation&&this.isValid===!1?this.filterObject.validation.message:""}</small
        >
      `})}}kt=new WeakMap;customElements.define("eox-itemfilter-text",ic);function sc(e,t,n){return e.filter(r=>{const i=r[n.config.aggregateResults];let o;return n.filters[n.config.aggregateResults]&&(o=Object.keys(n.filters[n.config.aggregateResults]).filter(l=>n.filters[n.config.aggregateResults].state[l])),(o!=null&&o.length?o.includes(t):!0)&&Array.isArray(i)?i.includes(t):i===t})}function oc(e,t){return _`
    <details
      class="details-results"
      @toggle=${t.handleAccordion}
      ?open=${t.config.expandResults||xe}
    >
      <summary>
        <span class="title">
          ${e}
          <span class="count"
            >${t.aggregateResults(t.results,e).length}</span
          >
        </span>
      </summary>
      <div>
        ${pi(t,e)}
      </div>
    </details>
  `}function pi(e,t){const n=e.results,r=t?e.aggregateResults(n,t):n,i=e.config,o=a=>{var l;return((l=e.selectedResult)==null?void 0:l[i.idProperty])===a[i.idProperty]?"highlighted":xe};return _`
    <ul class=${e.resultType}>
      ${Co(r,a=>a.id,a=>_`
          <li
            class=${o(a)}
            @click=${()=>{e.selectedResult===a?e.selectedResult=null:e.selectedResult=a,e.dispatchEvent(new CustomEvent("result",{detail:e.selectedResult}))}}
          >
            <span id="${a.id}">
              ${I(i.subTitleProperty||i.imageProperty,()=>_`
                  ${Je(i.imageProperty,a)?_`
                        <img
                          class="image"
                          src="${Je(i.imageProperty,a)}"
                        />
                      `:_`
                        <svg
                          class="image"
                          width="800"
                          height="600"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            width="800"
                            height="600"
                            fill="var(--primary-color)"
                          />
                        </svg>
                      `}
                  <div class="title-container">
                    <span class="title"
                      >${wt(a[i.titleProperty])}</span
                    >
                    <span class="subtitle"
                      >${wt(a[i.subTitleProperty])}</span
                    >
                  </div>
                `,()=>_`
                  <span class="title"
                    >${wt(a[i.titleProperty])}</span
                  >
                `)}
            </span>
            ${I(e.enableResultAction,()=>_`
                <span
                  class="result-action"
                  @click=${l=>{l.stopPropagation(),e.dispatchEvent(new CustomEvent("click:result-action",{detail:a}))}}
                  >${wt(e.resultActionIcon)}</span
                >
              `)}
          </li>
        `)}
    </ul>
  `}var Re,En,gi;class ac extends ie{constructor(){super();q(this,Re);this.config=null,this.results=null,this.filters={},this.resultAggregation=[],this.selectedResult=null,this.resultType="list",this.resultActionIcon=void 0}static get properties(){return{config:{attribute:!1,type:Object},results:{state:!0,type:Array},filters:{state:!0,type:Object},resultAggregation:{attribute:!1,type:Array},selectedResult:{state:!0,type:Object},resultType:{attribute:"result-type",type:String},resultActionIcon:{attribute:!1,type:String}}}aggregateResults(n,r){return sc(n,r,this)}createRenderRoot(){return this}handleAccordion(n){si(n,this.config,this)}render(){return _`
      <section id="section-results">
        <div slot="resultstitle"></div>
        <div id="container-results" class="scroll">
          ${I(this.results.length<1,()=>_`<small class="no-results">No matching items</small>`,()=>xe)}
          <ul id="results" part="results">
            ${I(this.config.aggregateResults,()=>It(this.resultAggregation.filter(n=>this.aggregateResults(this.results,n).length),n=>_`${I(this.aggregateResults(this.results,n).length===1&&this.config.autoSpreadSingle,()=>_`<div style="margin-left: -8px">
                          ${E(this,Re,En).call(this,n)}
                        </div>`,()=>E(this,Re,gi).call(this,n))}`),()=>E(this,Re,En).call(this))}
          </ul>
        </div>
      </section>
    `}}Re=new WeakSet,En=function(n){return pi(this,n)},gi=function(n){return oc(n,this)};customElements.define("eox-itemfilter-results",ac);var ve,mi,bi,wi;class yi extends ie{constructor(){super();q(this,ve);Ve(this,"debouncedInputHandler",Nt(E(this,ve,wi),500,{leading:!0}));this.filterObject={},this.suggestions=[],this.selectedItems=[],this.query="",this.showSuggestions=!1,this.highlightedIndex=-1,this.filteredSuggestions=[],this.type="select",this.unstyled=!1,this.tabIndex=0,this.inlineMode=!1}updated(n){Zl(n,this)}reset(){Vl(this)}firstUpdated(){this.filterObject.state&&(this.selectedItems=Object.keys(this.filterObject.state).map(n=>this.filterObject.state[n]?n:null).filter(n=>!!n),this.filterObject.stringifiedState=this.selectedItems.join(", ")||"",this.requestUpdate())}render(){const n=this.type.includes("multi")?"checkbox":"radio",r=this.filteredSuggestions.length>5?"select-overflow":xe;return _`
      <style>
        ${!this.unstyled&&et}
        ${!this.unstyled&&Mo}
        ${!this.unstyled&&So}
      </style>
      ${I(this.suggestions.length>10,()=>_`<div class="autocomplete-container">
            <div class="autocomplete-container-wrapper">
              <input
                autocomplete="off"
                tabindex=${this.tabIndex}
                class="autocomplete-input"
                type="text"
                .value=${this.query}
                placeholder="${this.filterObject.placeholder||""}"
                @input=${E(this,ve,mi)}
                @keydown=${E(this,ve,bi)}
                @blur=${()=>this.showSuggestions=!1}
                @focus=${()=>this.showSuggestions=!0}
              />
            </div>
          </div>`)}
      <div class="select-container ${r}">
        <ul class="${this.type}">
          ${this.filteredSuggestions.map(i=>_`
              <li
                data-identifier="${i.toString().toLowerCase()}"
                data-title="${i}"
              >
                <label>
                  <input
                    type="${n}"
                    name=${i}
                    .checked=${this.selectedItems.includes(i)}
                    @change=${()=>this.debouncedInputHandler(i)}
                    @keydown=${o=>{o.key===" "&&this.inlineMode&&this.debouncedInputHandler(i)}}
                    tabindex=${this.tabIndex+1}
                  />
                  <span class="title">${i}</span>
                </label>
              </li>
            `)}
        </ul>
      </div>
    `}}ve=new WeakSet,mi=function(n){Xl(n,this)},bi=function(n){Jl(n,this)},wi=function(n){fi(n,this)},Ve(yi,"properties",{filterObject:{attribute:!1,type:Object},suggestions:{attribute:!1,type:Array},selectedItems:{state:!0,type:Array},query:{state:!0,type:String},showSuggestions:{state:!0,type:Boolean},highlightedIndex:{state:!0,type:Number},filteredSuggestions:{state:!0,type:Array},type:{attribute:!0,type:String},unstyled:{type:Boolean},tabIndex:{attribute:!1,type:Number},inlineMode:{attribute:"inline-mode",type:Boolean}});customElements.define("eox-itemfilter-select",yi);var Pe,xi,Ln;class vi extends ie{constructor(){super();q(this,Pe);this.filterObject={},this.tabIndex=0,this.inputHandler=E(this,Pe,xi).bind(this),this.debouncedInputHandler=Nt(this.inputHandler,500,{leading:!1})}reset(){Gl(this)}createRenderRoot(){return this}render(){return I(this.filterObject,()=>_`
        ${E(this,Pe,Ln).call(this,"min","before")}
        <tc-range-slider
          min="${this.filterObject.min}"
          max="${this.filterObject.max}"
          value1="${this.filterObject.state.min||this.filterObject.min}"
          value2="${this.filterObject.state.max||this.filterObject.max}"
          step="${this.filterObject.step||1}"
          @change=${this.debouncedInputHandler}
        ></tc-range-slider>
        ${E(this,Pe,Ln).call(this,"max","after")}
      `)}}Pe=new WeakSet,xi=function(n){Kl(n,this)},Ln=function(n,r){return zl(n,r,this)},Ve(vi,"properties",{filterObject:{attribute:!1,type:Object},tabIndex:{attribute:!1,type:Number}});customElements.define("eox-itemfilter-range",vi);var Ot,Ai;class lc extends ie{constructor(){super();q(this,Ot);this.filterObject={},this.tabIndex=0}static get properties(){return{filterObject:{type:Object},tabIndex:{attribute:!1,type:Number}}}reset(){ec(this)}createRenderRoot(){return this}render(){return I(this.filterObject,()=>{var n;return _`
        <form style="display: inline">
          ${It(["intersects","within"],r=>_`
              <label>
                <input
                  tabindex=${this.tabIndex}
                  type="radio"
                  name="mode"
                  .checked="${(this.filterObject.state.mode||"")===r||xe}"
                  value="${r}"
                  @click=${()=>E(this,Ot,Ai).call(this,r)}
                />
                <small>${r} filter geometry</small>
              </label>
            `)}
        </form>
        <eox-itemfilter-spatial-filter
          exportparts="map: spatial-filter-map"
          .geometry="${(n=this.filterObject.state)==null?void 0:n.geometry}"
          @filter="${r=>{this.filterObject.state.geometry=r.detail.geometry,this.filterObject.dirty=!0,this.filterObject.stringifiedState="Polygon",this.dispatchEvent(new CustomEvent("filter"))}}"
        ></eox-itemfilter-spatial>
      `})}}Ot=new WeakSet,Ai=function(n){nc(n,this)};customElements.define("eox-itemfilter-spatial",lc);var jt,_i;class cc extends ie{constructor(){super();q(this,jt);this.geometry=null,this.eoxMap=null}static get properties(){return{geometry:{type:Object},eoxMap:{type:Object}}}firstUpdated(){E(this,jt,_i).call(this)}reset(){tc(this)}render(){return _`<div id="eox-map"></div>`}}jt=new WeakSet,_i=function(){di(this)};customElements.define("eox-itemfilter-spatial-filter",cc);function uc(e,t){t.renderRoot.querySelectorAll(".chip").forEach(n=>{n.classList.remove("highlighted")}),e.target instanceof HTMLElement&&e.target.classList.add("highlighted"),t.requestUpdate()}function fc(e,t){const{code:n,target:r}=e;r instanceof HTMLElement&&r.id!=="eox-itemfilter-input-search"||t.parentElement.classList.contains("hidden")&&["ArrowLeft","ArrowRight","Backspace"].includes(n)||(n==="Space"&&e.preventDefault(),["Escape","Space","Enter"].includes(n)||e.stopPropagation(),["ArrowLeft","ArrowRight","Escape","Backspace"].includes(n)&&hc(n,e.target.value??"",t))}function hc(e,t,n){const r=n.renderRoot.querySelector(".chip.highlighted");if((e==="Escape"||t)&&r&&r.classList.remove("highlighted"),e==="Backspace"&&!t){if(n.items.length){r&&(r.querySelector(".chip-item-close").click(),n.items.splice(Array.from(n.renderRoot.querySelectorAll(".chip")).indexOf(r),1));const i=n.renderRoot.querySelectorAll(".chip")[n.renderRoot.querySelectorAll(".chip").length-1];i.classList.contains("highlighted")||i.classList.add("highlighted"),n.requestUpdate()}n._dispatchEvent()}if((e==="ArrowLeft"||e==="ArrowRight")&&!t){if(n.renderRoot.querySelectorAll(".chip").length<1)return;let i=0;const o=n.renderRoot.querySelector(".chip.highlighted");o&&(i=Array.from(n.renderRoot.querySelectorAll(".chip")).indexOf(o),o.classList.remove("highlighted")),i=i+(e==="ArrowLeft"?-1:1),e==="ArrowLeft"&&i<0&&(i=n.renderRoot.querySelectorAll(".chip").length-1),e==="ArrowRight"&&i>n.renderRoot.querySelectorAll(".chip").length-1&&(i=0),Array.from(n.renderRoot.querySelectorAll(".chip"))[i].classList.add("highlighted")}}var De,$n,Ci;class dc extends ie{constructor(){super();q(this,De);this.items={},this.controller={}}static get properties(){return{items:{attribute:!1,type:Object},controller:{attribute:!1,type:Object}}}connectedCallback(){super.connectedCallback(),this.getRootNode().addEventListener("keydown",E(this,De,$n).bind(this))}disconnectedCallback(){super.disconnectedCallback(),this.getRootNode().removeEventListener("keydown",E(this,De,$n).bind(this))}_dispatchEvent(){this.dispatchEvent(new CustomEvent("items-selected",{detail:this.items}))}render(){return _`
      <style>
        ${et}
      </style>
      <span class="chip-container">
        ${It(this.items,n=>_`
            <span class="chip" @click=${E(this,De,Ci).bind(this)}>
              <span class="chip-title">${n.title}</span>
                <span
                  class="chip-item-close hidden"
                  data-close=${n.key}
                  @click=${r=>{r.stopPropagation(),this.controller.remove(r),this.requestUpdate()}}
                ></span>
            </span>
            </span>
          `)}
      </span>
    `}}De=new WeakSet,$n=function(n){fc(n,this)},Ci=function(n){uc(n,this)};customElements.define("eox-itemfilter-chips",dc);const pc=Object.freeze({aggregateResults:void 0,autoSpreadSingle:!1,enableHighlighting:!1,externalFilter:()=>{},filterProperties:[],fuseConfig:{},inlineMode:!1,matchAllWhenEmpty:!0,showResults:!0,idProperty:"id",titleProperty:"title",subTitleProperty:void 0,imageProperty:void 0,expandMultipleFilters:!0,expandResults:!0,expandMultipleResults:!0}),Mr=["aggregateResults","autoSpreadSingle","enableHighlighting","externalFilter","filterProperties","fuseConfig","inlineMode","matchAllWhenEmpty","showResults","titleProperty","subTitleProperty","imageProperty","idProperty","expandMultipleFilters","expandResults","expandMultipleResults","items"];var gc=200,jn="__lodash_hash_undefined__",yc=1/0,mc="[object Function]",bc="[object GeneratorFunction]",wc=/[\\^$.*+?()[\]{}|]/g,vc=/^\[object .+?Constructor\]$/,xc=typeof be=="object"&&be&&be.Object===Object&&be,Ac=typeof self=="object"&&self&&self.Object===Object&&self,In=xc||Ac||Function("return this")();function _c(e,t){var n=e?e.length:0;return!!n&&Mc(e,t,0)>-1}function Cc(e,t,n,r){for(var i=e.length,o=n+-1;++o<i;)if(t(e[o],o,e))return o;return-1}function Mc(e,t,n){if(t!==t)return Cc(e,Sc,n);for(var r=n-1,i=e.length;++r<i;)if(e[r]===t)return r;return-1}function Sc(e){return e!==e}function Ec(e,t){return e.has(t)}function Lc(e,t){return e==null?void 0:e[t]}function $c(e){var t=!1;if(e!=null&&typeof e.toString!="function")try{t=!!(e+"")}catch{}return t}function Mi(e){var t=-1,n=Array(e.size);return e.forEach(function(r){n[++t]=r}),n}var Rc=Array.prototype,Pc=Function.prototype,Si=Object.prototype,ln=In["__core-js_shared__"],Sr=function(){var e=/[^.]+$/.exec(ln&&ln.keys&&ln.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}(),Ei=Pc.toString,Nn=Si.hasOwnProperty,Dc=Si.toString,Tc=RegExp("^"+Ei.call(Nn).replace(wc,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Bc=Rc.splice,kc=Hn(In,"Map"),cn=Hn(In,"Set"),Ze=Hn(Object,"create");function $e(e){var t=-1,n=e?e.length:0;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function Oc(){this.__data__=Ze?Ze(null):{}}function jc(e){return this.has(e)&&delete this.__data__[e]}function Ic(e){var t=this.__data__;if(Ze){var n=t[e];return n===jn?void 0:n}return Nn.call(t,e)?t[e]:void 0}function Nc(e){var t=this.__data__;return Ze?t[e]!==void 0:Nn.call(t,e)}function Hc(e,t){var n=this.__data__;return n[e]=Ze&&t===void 0?jn:t,this}$e.prototype.clear=Oc;$e.prototype.delete=jc;$e.prototype.get=Ic;$e.prototype.has=Nc;$e.prototype.set=Hc;function Ue(e){var t=-1,n=e?e.length:0;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function Fc(){this.__data__=[]}function qc(e){var t=this.__data__,n=Wt(t,e);if(n<0)return!1;var r=t.length-1;return n==r?t.pop():Bc.call(t,n,1),!0}function Uc(e){var t=this.__data__,n=Wt(t,e);return n<0?void 0:t[n][1]}function Wc(e){return Wt(this.__data__,e)>-1}function Gc(e,t){var n=this.__data__,r=Wt(n,e);return r<0?n.push([e,t]):n[r][1]=t,this}Ue.prototype.clear=Fc;Ue.prototype.delete=qc;Ue.prototype.get=Uc;Ue.prototype.has=Wc;Ue.prototype.set=Gc;function We(e){var t=-1,n=e?e.length:0;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function Kc(){this.__data__={hash:new $e,map:new(kc||Ue),string:new $e}}function zc(e){return Gt(this,e).delete(e)}function Vc(e){return Gt(this,e).get(e)}function Yc(e){return Gt(this,e).has(e)}function Xc(e,t){return Gt(this,e).set(e,t),this}We.prototype.clear=Kc;We.prototype.delete=zc;We.prototype.get=Vc;We.prototype.has=Yc;We.prototype.set=Xc;function Dt(e){var t=-1,n=e?e.length:0;for(this.__data__=new We;++t<n;)this.add(e[t])}function Jc(e){return this.__data__.set(e,jn),this}function Zc(e){return this.__data__.has(e)}Dt.prototype.add=Dt.prototype.push=Jc;Dt.prototype.has=Zc;function Wt(e,t){for(var n=e.length;n--;)if(ou(e[n][0],t))return n;return-1}function Qc(e){if(!Li(e)||ru(e))return!1;var t=au(e)||$c(e)?Tc:vc;return t.test(iu(e))}function eu(e,t,n){var r=-1,i=_c,o=e.length,a=!0,l=[],u=l;if(o>=gc){var f=tu(e);if(f)return Mi(f);a=!1,i=Ec,u=new Dt}else u=l;e:for(;++r<o;){var h=e[r],p=h;if(h=h!==0?h:0,a&&p===p){for(var y=u.length;y--;)if(u[y]===p)continue e;l.push(h)}else i(u,p,n)||(u!==l&&u.push(p),l.push(h))}return l}var tu=cn&&1/Mi(new cn([,-0]))[1]==yc?function(e){return new cn(e)}:lu;function Gt(e,t){var n=e.__data__;return nu(t)?n[typeof t=="string"?"string":"hash"]:n.map}function Hn(e,t){var n=Lc(e,t);return Qc(n)?n:void 0}function nu(e){var t=typeof e;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?e!=="__proto__":e===null}function ru(e){return!!Sr&&Sr in e}function iu(e){if(e!=null){try{return Ei.call(e)}catch{}try{return e+""}catch{}}return""}function su(e){return e&&e.length?eu(e):[]}function ou(e,t){return e===t||e!==e&&t!==t}function au(e){var t=Li(e)?Dc.call(e):"";return t==mc||t==bc}function Li(e){var t=typeof e;return!!e&&(t=="object"||t=="function")}function lu(){}var cu=su;const $i=Er(cu);var Tt={exports:{}};Tt.exports;(function(e,t){var n=200,r="Expected a function",i="__lodash_hash_undefined__",o=1,a=2,l=9007199254740991,u="[object Arguments]",f="[object Array]",h="[object Boolean]",p="[object Date]",y="[object Error]",g="[object Function]",b="[object GeneratorFunction]",v="[object Map]",S="[object Number]",M="[object Object]",$="[object Promise]",L="[object RegExp]",R="[object Set]",B="[object String]",oe="[object Symbol]",O="[object WeakMap]",Z="[object ArrayBuffer]",U="[object DataView]",nt="[object Float32Array]",Ge="[object Float64Array]",pe="[object Int8Array]",Fn="[object Int16Array]",W="[object Int32Array]",Te="[object Uint8Array]",rt="[object Uint8ClampedArray]",Ti="[object Uint16Array]",Bi="[object Uint32Array]",ki=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Oi=/^\w*$/,ji=/^\./,Ii=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Ni=/[\\^$.*+?()[\]{}|]/g,Hi=/\\(\\)?/g,Fi=/^\[object .+?Constructor\]$/,qi=/^(?:0|[1-9]\d*)$/,D={};D[nt]=D[Ge]=D[pe]=D[Fn]=D[W]=D[Te]=D[rt]=D[Ti]=D[Bi]=!0,D[u]=D[f]=D[Z]=D[h]=D[U]=D[p]=D[y]=D[g]=D[v]=D[S]=D[M]=D[L]=D[R]=D[B]=D[O]=!1;var qn=typeof be=="object"&&be&&be.Object===Object&&be,Ui=typeof self=="object"&&self&&self.Object===Object&&self,ge=qn||Ui||Function("return this")(),Un=t&&!t.nodeType&&t,Wn=Un&&!0&&e&&!e.nodeType&&e,Wi=Wn&&Wn.exports===Un,Gn=Wi&&qn.process,Kn=function(){try{return Gn&&Gn.binding("util")}catch{}}(),zn=Kn&&Kn.isTypedArray;function Gi(s,c){for(var d=-1,m=s?s.length:0,x=Array(m);++d<m;)x[d]=c(s[d],d,s);return x}function Ki(s,c){for(var d=-1,m=c.length,x=s.length;++d<m;)s[x+d]=c[d];return s}function zi(s,c){for(var d=-1,m=s?s.length:0;++d<m;)if(c(s[d],d,s))return!0;return!1}function Vi(s){return function(c){return c==null?void 0:c[s]}}function Yi(s,c){for(var d=-1,m=Array(s);++d<s;)m[d]=c(d);return m}function Xi(s){return function(c){return s(c)}}function Ji(s,c){return s==null?void 0:s[c]}function Kt(s){var c=!1;if(s!=null&&typeof s.toString!="function")try{c=!!(s+"")}catch{}return c}function Zi(s){var c=-1,d=Array(s.size);return s.forEach(function(m,x){d[++c]=[x,m]}),d}function Qi(s,c){return function(d){return s(c(d))}}function es(s){var c=-1,d=Array(s.size);return s.forEach(function(m){d[++c]=m}),d}var ts=Array.prototype,ns=Function.prototype,it=Object.prototype,zt=ge["__core-js_shared__"],Vn=function(){var s=/[^.]+$/.exec(zt&&zt.keys&&zt.keys.IE_PROTO||"");return s?"Symbol(src)_1."+s:""}(),Yn=ns.toString,ae=it.hasOwnProperty,Be=it.toString,rs=RegExp("^"+Yn.call(ae).replace(Ni,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),st=ge.Symbol,Xn=ge.Uint8Array,is=it.propertyIsEnumerable,ss=ts.splice,Jn=st?st.isConcatSpreadable:void 0,os=Qi(Object.keys,Object),Vt=ke(ge,"DataView"),Ke=ke(ge,"Map"),Yt=ke(ge,"Promise"),Xt=ke(ge,"Set"),Jt=ke(ge,"WeakMap"),ze=ke(Object,"create"),as=Me(Vt),ls=Me(Ke),cs=Me(Yt),us=Me(Xt),fs=Me(Jt),ot=st?st.prototype:void 0,Zt=ot?ot.valueOf:void 0,Zn=ot?ot.toString:void 0;function Ce(s){var c=-1,d=s?s.length:0;for(this.clear();++c<d;){var m=s[c];this.set(m[0],m[1])}}function hs(){this.__data__=ze?ze(null):{}}function ds(s){return this.has(s)&&delete this.__data__[s]}function ps(s){var c=this.__data__;if(ze){var d=c[s];return d===i?void 0:d}return ae.call(c,s)?c[s]:void 0}function gs(s){var c=this.__data__;return ze?c[s]!==void 0:ae.call(c,s)}function ys(s,c){var d=this.__data__;return d[s]=ze&&c===void 0?i:c,this}Ce.prototype.clear=hs,Ce.prototype.delete=ds,Ce.prototype.get=ps,Ce.prototype.has=gs,Ce.prototype.set=ys;function le(s){var c=-1,d=s?s.length:0;for(this.clear();++c<d;){var m=s[c];this.set(m[0],m[1])}}function ms(){this.__data__=[]}function bs(s){var c=this.__data__,d=lt(c,s);if(d<0)return!1;var m=c.length-1;return d==m?c.pop():ss.call(c,d,1),!0}function ws(s){var c=this.__data__,d=lt(c,s);return d<0?void 0:c[d][1]}function vs(s){return lt(this.__data__,s)>-1}function xs(s,c){var d=this.__data__,m=lt(d,s);return m<0?d.push([s,c]):d[m][1]=c,this}le.prototype.clear=ms,le.prototype.delete=bs,le.prototype.get=ws,le.prototype.has=vs,le.prototype.set=xs;function ce(s){var c=-1,d=s?s.length:0;for(this.clear();++c<d;){var m=s[c];this.set(m[0],m[1])}}function As(){this.__data__={hash:new Ce,map:new(Ke||le),string:new Ce}}function _s(s){return ct(this,s).delete(s)}function Cs(s){return ct(this,s).get(s)}function Ms(s){return ct(this,s).has(s)}function Ss(s,c){return ct(this,s).set(s,c),this}ce.prototype.clear=As,ce.prototype.delete=_s,ce.prototype.get=Cs,ce.prototype.has=Ms,ce.prototype.set=Ss;function at(s){var c=-1,d=s?s.length:0;for(this.__data__=new ce;++c<d;)this.add(s[c])}function Es(s){return this.__data__.set(s,i),this}function Ls(s){return this.__data__.has(s)}at.prototype.add=at.prototype.push=Es,at.prototype.has=Ls;function ue(s){this.__data__=new le(s)}function $s(){this.__data__=new le}function Rs(s){return this.__data__.delete(s)}function Ps(s){return this.__data__.get(s)}function Ds(s){return this.__data__.has(s)}function Ts(s,c){var d=this.__data__;if(d instanceof le){var m=d.__data__;if(!Ke||m.length<n-1)return m.push([s,c]),this;d=this.__data__=new ce(m)}return d.set(s,c),this}ue.prototype.clear=$s,ue.prototype.delete=Rs,ue.prototype.get=Ps,ue.prototype.has=Ds,ue.prototype.set=Ts;function Bs(s,c){var d=fe(s)||tn(s)?Yi(s.length,String):[],m=d.length,x=!!m;for(var w in s)ae.call(s,w)&&!(x&&(w=="length"||nr(w,m)))&&d.push(w);return d}function lt(s,c){for(var d=s.length;d--;)if(sr(s[d][0],c))return d;return-1}var ks=Zs(Is);function Os(s,c,d,m,x){var w=-1,C=s.length;for(d||(d=io),x||(x=[]);++w<C;){var T=s[w];d(T)?Ki(x,T):x[x.length]=T}return x}var js=Qs();function Is(s,c){return s&&js(s,c,gt)}function Qn(s,c){c=ut(c,s)?[c]:er(c);for(var d=0,m=c.length;s!=null&&d<m;)s=s[ft(c[d++])];return d&&d==m?s:void 0}function Ns(s){return Be.call(s)}function Hs(s,c){return s!=null&&c in Object(s)}function Qt(s,c,d,m,x){return s===c?!0:s==null||c==null||!dt(s)&&!pt(c)?s!==s&&c!==c:Fs(s,c,Qt,d,m,x)}function Fs(s,c,d,m,x,w){var C=fe(s),T=fe(c),k=f,j=f;C||(k=ye(s),k=k==u?M:k),T||(j=ye(c),j=j==u?M:j);var H=k==M&&!Kt(s),F=j==M&&!Kt(c),N=k==j;if(N&&!H)return w||(w=new ue),C||ho(s)?tr(s,c,d,m,x,w):eo(s,c,k,d,m,x,w);if(!(x&a)){var V=H&&ae.call(s,"__wrapped__"),Y=F&&ae.call(c,"__wrapped__");if(V||Y){var me=V?s.value():s,he=Y?c.value():c;return w||(w=new ue),d(me,he,m,x,w)}}return N?(w||(w=new ue),to(s,c,d,m,x,w)):!1}function qs(s,c,d,m){var x=d.length,w=x;if(s==null)return!w;for(s=Object(s);x--;){var C=d[x];if(C[2]?C[1]!==s[C[0]]:!(C[0]in s))return!1}for(;++x<w;){C=d[x];var T=C[0],k=s[T],j=C[1];if(C[2]){if(k===void 0&&!(T in s))return!1}else{var H=new ue,F;if(!(F===void 0?Qt(j,k,m,o|a,H):F))return!1}}return!0}function Us(s){if(!dt(s)||oo(s))return!1;var c=or(s)||Kt(s)?rs:Fi;return c.test(Me(s))}function Ws(s){return pt(s)&&nn(s.length)&&!!D[Be.call(s)]}function Gs(s){return typeof s=="function"?s:s==null?mo:typeof s=="object"?fe(s)?Ys(s[0],s[1]):Vs(s):bo(s)}function Ks(s){if(!ao(s))return os(s);var c=[];for(var d in Object(s))ae.call(s,d)&&d!="constructor"&&c.push(d);return c}function zs(s,c){var d=-1,m=ht(s)?Array(s.length):[];return ks(s,function(x,w,C){m[++d]=c(x,w,C)}),m}function Vs(s){var c=no(s);return c.length==1&&c[0][2]?ir(c[0][0],c[0][1]):function(d){return d===s||qs(d,s,c)}}function Ys(s,c){return ut(s)&&rr(c)?ir(ft(s),c):function(d){var m=go(d,s);return m===void 0&&m===c?yo(d,s):Qt(c,m,void 0,o|a)}}function Xs(s){return function(c){return Qn(c,s)}}function Js(s){if(typeof s=="string")return s;if(rn(s))return Zn?Zn.call(s):"";var c=s+"";return c=="0"&&1/s==-1/0?"-0":c}function er(s){return fe(s)?s:lo(s)}function Zs(s,c){return function(d,m){if(d==null)return d;if(!ht(d))return s(d,m);for(var x=d.length,w=-1,C=Object(d);++w<x&&m(C[w],w,C)!==!1;);return d}}function Qs(s){return function(c,d,m){for(var x=-1,w=Object(c),C=m(c),T=C.length;T--;){var k=C[++x];if(d(w[k],k,w)===!1)break}return c}}function tr(s,c,d,m,x,w){var C=x&a,T=s.length,k=c.length;if(T!=k&&!(C&&k>T))return!1;var j=w.get(s);if(j&&w.get(c))return j==c;var H=-1,F=!0,N=x&o?new at:void 0;for(w.set(s,c),w.set(c,s);++H<T;){var V=s[H],Y=c[H];if(m)var me=C?m(Y,V,H,c,s,w):m(V,Y,H,s,c,w);if(me!==void 0){if(me)continue;F=!1;break}if(N){if(!zi(c,function(he,Se){if(!N.has(Se)&&(V===he||d(V,he,m,x,w)))return N.add(Se)})){F=!1;break}}else if(!(V===Y||d(V,Y,m,x,w))){F=!1;break}}return w.delete(s),w.delete(c),F}function eo(s,c,d,m,x,w,C){switch(d){case U:if(s.byteLength!=c.byteLength||s.byteOffset!=c.byteOffset)return!1;s=s.buffer,c=c.buffer;case Z:return!(s.byteLength!=c.byteLength||!m(new Xn(s),new Xn(c)));case h:case p:case S:return sr(+s,+c);case y:return s.name==c.name&&s.message==c.message;case L:case B:return s==c+"";case v:var T=Zi;case R:var k=w&a;if(T||(T=es),s.size!=c.size&&!k)return!1;var j=C.get(s);if(j)return j==c;w|=o,C.set(s,c);var H=tr(T(s),T(c),m,x,w,C);return C.delete(s),H;case oe:if(Zt)return Zt.call(s)==Zt.call(c)}return!1}function to(s,c,d,m,x,w){var C=x&a,T=gt(s),k=T.length,j=gt(c),H=j.length;if(k!=H&&!C)return!1;for(var F=k;F--;){var N=T[F];if(!(C?N in c:ae.call(c,N)))return!1}var V=w.get(s);if(V&&w.get(c))return V==c;var Y=!0;w.set(s,c),w.set(c,s);for(var me=C;++F<k;){N=T[F];var he=s[N],Se=c[N];if(m)var ar=C?m(Se,he,N,c,s,w):m(he,Se,N,s,c,w);if(!(ar===void 0?he===Se||d(he,Se,m,x,w):ar)){Y=!1;break}me||(me=N=="constructor")}if(Y&&!me){var yt=s.constructor,mt=c.constructor;yt!=mt&&"constructor"in s&&"constructor"in c&&!(typeof yt=="function"&&yt instanceof yt&&typeof mt=="function"&&mt instanceof mt)&&(Y=!1)}return w.delete(s),w.delete(c),Y}function ct(s,c){var d=s.__data__;return so(c)?d[typeof c=="string"?"string":"hash"]:d.map}function no(s){for(var c=gt(s),d=c.length;d--;){var m=c[d],x=s[m];c[d]=[m,x,rr(x)]}return c}function ke(s,c){var d=Ji(s,c);return Us(d)?d:void 0}var ye=Ns;(Vt&&ye(new Vt(new ArrayBuffer(1)))!=U||Ke&&ye(new Ke)!=v||Yt&&ye(Yt.resolve())!=$||Xt&&ye(new Xt)!=R||Jt&&ye(new Jt)!=O)&&(ye=function(s){var c=Be.call(s),d=c==M?s.constructor:void 0,m=d?Me(d):void 0;if(m)switch(m){case as:return U;case ls:return v;case cs:return $;case us:return R;case fs:return O}return c});function ro(s,c,d){c=ut(c,s)?[c]:er(c);for(var m,x=-1,C=c.length;++x<C;){var w=ft(c[x]);if(!(m=s!=null&&d(s,w)))break;s=s[w]}if(m)return m;var C=s?s.length:0;return!!C&&nn(C)&&nr(w,C)&&(fe(s)||tn(s))}function io(s){return fe(s)||tn(s)||!!(Jn&&s&&s[Jn])}function nr(s,c){return c=c??l,!!c&&(typeof s=="number"||qi.test(s))&&s>-1&&s%1==0&&s<c}function ut(s,c){if(fe(s))return!1;var d=typeof s;return d=="number"||d=="symbol"||d=="boolean"||s==null||rn(s)?!0:Oi.test(s)||!ki.test(s)||c!=null&&s in Object(c)}function so(s){var c=typeof s;return c=="string"||c=="number"||c=="symbol"||c=="boolean"?s!=="__proto__":s===null}function oo(s){return!!Vn&&Vn in s}function ao(s){var c=s&&s.constructor,d=typeof c=="function"&&c.prototype||it;return s===d}function rr(s){return s===s&&!dt(s)}function ir(s,c){return function(d){return d==null?!1:d[s]===c&&(c!==void 0||s in Object(d))}}var lo=en(function(s){s=po(s);var c=[];return ji.test(s)&&c.push(""),s.replace(Ii,function(d,m,x,w){c.push(x?w.replace(Hi,"$1"):m||d)}),c});function ft(s){if(typeof s=="string"||rn(s))return s;var c=s+"";return c=="0"&&1/s==-1/0?"-0":c}function Me(s){if(s!=null){try{return Yn.call(s)}catch{}try{return s+""}catch{}}return""}function co(s,c){return Os(uo(s,c))}function uo(s,c){var d=fe(s)?Gi:zs;return d(s,Gs(c))}function en(s,c){if(typeof s!="function"||c&&typeof c!="function")throw new TypeError(r);var d=function(){var m=arguments,x=c?c.apply(this,m):m[0],w=d.cache;if(w.has(x))return w.get(x);var C=s.apply(this,m);return d.cache=w.set(x,C),C};return d.cache=new(en.Cache||ce),d}en.Cache=ce;function sr(s,c){return s===c||s!==s&&c!==c}function tn(s){return fo(s)&&ae.call(s,"callee")&&(!is.call(s,"callee")||Be.call(s)==u)}var fe=Array.isArray;function ht(s){return s!=null&&nn(s.length)&&!or(s)}function fo(s){return pt(s)&&ht(s)}function or(s){var c=dt(s)?Be.call(s):"";return c==g||c==b}function nn(s){return typeof s=="number"&&s>-1&&s%1==0&&s<=l}function dt(s){var c=typeof s;return!!s&&(c=="object"||c=="function")}function pt(s){return!!s&&typeof s=="object"}function rn(s){return typeof s=="symbol"||pt(s)&&Be.call(s)==oe}var ho=zn?Xi(zn):Ws;function po(s){return s==null?"":Js(s)}function go(s,c,d){var m=s==null?void 0:Qn(s,c);return m===void 0?d:m}function yo(s,c){return s!=null&&ro(s,c,Hs)}function gt(s){return ht(s)?Bs(s):Ks(s)}function mo(s){return s}function bo(s){return ut(s)?Vi(ft(s)):Xs(s)}e.exports=co})(Tt,Tt.exports);var uu=Tt.exports;const Ri=Er(uu);function fu(e,t,n){let r=[];e.filterProperties.length&&e.filterProperties.forEach(o=>{const a={},l=f=>o.format==="date"?Ye(f).unix():parseFloat(f);t.forEach(f=>{var h,p;if(o.type==="range"){const y=Je(o.key,f);if(Array.isArray(y)){const g=[l(y[0]),l(y[1])];a.min=a.min!==void 0?Math.min(a.min,g[0]):g[0],a.max=a.max!==void 0?Math.max(a.max,g[1]):g[1]}else{const g=l(y);a.min=a.min!==void 0?Math.min(a.min,g):g,a.max=a.max!==void 0?Math.max(a.max,g):g}return}Array.isArray(f[o.key])?f[o.key].forEach(y=>{a[y]=void 0}):o.type==="spatial"?(a.geometry=((h=o==null?void 0:o.state)==null?void 0:h.geometry)||void 0,a.geometry&&(o.stringifiedState=a.geometry.type),a.mode=o.mode||"intersects"):(p=o.key)!=null&&p.includes(".")?$i(Ri(n.items,o.key)).filter(y=>y).forEach(y=>{a[y]=void 0}):a[f[o.key]]=void 0});const u=o.key||o.keys.join("|");n.filters[u]=Object.assign({type:o.type||"multiselect",dirty:o.state?Object.values(o.state).some(f=>f):void 0,key:u},o.type==="range"?{min:a.min,max:a.max,format:o.format}:{},o),n.filters[u].state=Object.assign({},a,o.state)}),e.matchAllWhenEmpty!==!1&&(n.results=n.sortResults(t),n.requestUpdate()),e.aggregateResults&&(r=Array.from(new Set(t.reduce((o,a)=>o.concat(a[e.aggregateResults]),[]))).sort((o,a)=>o.localeCompare(a)));const i=[];return Object.values(n.filters).forEach(o=>{o.type==="text"?o.keys.forEach(a=>{i.includes(a)||i.push(a)}):(o.type==="select"||o.type==="multiselect")&&(i.includes(o.key)||i.push(o.key))}),jl(t,Object.assign({keys:i},e.fuseConfig)),r}async function hu(e,t,n){let r;n.externalFilter?r=await Fl(t,n.filters,e):r=await Il(t,n.filters,e),n.results=n.sortResults(r)}function du(e,t,n){const r=`filter-${e.key}`.replace("|","-");switch(e.type){case"text":return _`<eox-itemfilter-text
        data-type="filter"
        data-cy="text-filter"
        slot="filter"
        id="${r}"
        .tabIndex=${t}
        .filterObject=${e}
        .unstyled=${n.unstyled}
        @filter=${()=>n.search()}
      ></eox-itemfilter-text>`;case"multiselect":case"select":return _`
        <eox-itemfilter-select
          .inlineMode=${n.inlineMode||!1}
          data-type="filter"
          id="${r}"
          .tabIndex=${t}
          .filterObject=${e}
          slot="filter"
          .suggestions="${$i(Ri(n.items,e.key)).filter(i=>i)}"
          type="${e.type}"
          .unstyled=${n.unstyled}
          @filter=${()=>n.search()}
        ></eox-itemfilter-select>
      `;case"range":return _`
        <eox-itemfilter-range
          id="${r}"
          data-type="filter"
          .tabIndex=${t}
          .filterObject=${e}
          slot="filter"
          .unstyled=${n.unstyled}
          @filter=${()=>n.search()}
        ></eox-itemfilter-range>
      `;case"spatial":return _`
        <eox-itemfilter-spatial
          id="${r}"
          data-type="filter"
          .tabIndex=${t}
          .filterObject=${e}
          slot="filter"
          @filter=${()=>n.search()}
        ></eox-itemfilter-spatial>
      `;default:return _``}}function pu(e,t){return[...e].sort((n,r)=>n[t.titleProperty].localeCompare(r[t.titleProperty]))}function gu(e,t,n){return _`
    ${I(e.dirty,()=>_`
        <button
          type="button"
          tabindex=${t}
          slot="reset-button"
          class="reset-icon icon"
          @click=${r=>{const i=r.target.parentElement.querySelector("[slot=filter]");i&&typeof i.reset=="function"&&i.reset(),n.search(),n.requestUpdate()}}
        >
          ${n.unstyled?"Reset":xe}
        </button>
      `)}
  `}function yu(e){e.renderRoot.querySelectorAll("[data-type='filter']").forEach(t=>{typeof t.reset=="function"&&t.reset()}),e.search()}var Qe,Ie,X,Fe,Pi,Di;class mu extends ie{constructor(){super();q(this,Fe);q(this,Qe,[]);q(this,Ie,[]);q(this,X,pc);this.items=null,this.filters={},this.results=[],this.selectedResult=null,this.search=Nt(this.searchHandler,100,{leading:!0}),this.aggregateResults=void 0,this.autoSpreadSingle=!1,this.enableHighlighting=!1,this.externalFilter=null,this.filterProperties=[],this.fuseConfig={},this.inlineMode=!1,this.matchAllWhenEmpty=!0,this.showResults=!0,this.titleProperty="title",this.subTitleProperty=void 0,this.imageProperty=void 0,this.idProperty="id",this.expandMultipleFilters=!0,this.expandResults=!0,this.expandMultipleResults=!0,this.resultType="list",this.enableResultAction=!1,this.resultActionIcon='<svg style="width: 24px;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>click me!</title><path fill="#004170" d="M11.5,11L17.88,16.37L17,16.55L16.36,16.67C15.73,16.8 15.37,17.5 15.65,18.07L15.92,18.65L17.28,21.59L15.86,22.25L14.5,19.32L14.24,18.74C13.97,18.15 13.22,17.97 12.72,18.38L12.21,18.78L11.5,19.35V11M10.76,8.69A0.76,0.76 0 0,0 10,9.45V20.9C10,21.32 10.34,21.66 10.76,21.66C10.95,21.66 11.11,21.6 11.24,21.5L13.15,19.95L14.81,23.57C14.94,23.84 15.21,24 15.5,24C15.61,24 15.72,24 15.83,23.92L18.59,22.64C18.97,22.46 19.15,22 18.95,21.63L17.28,18L19.69,17.55C19.85,17.5 20,17.43 20.12,17.29C20.39,16.97 20.35,16.5 20,16.21L11.26,8.86L11.25,8.87C11.12,8.76 10.95,8.69 10.76,8.69M15,10V8H20V10H15M13.83,4.76L16.66,1.93L18.07,3.34L15.24,6.17L13.83,4.76M10,0H12V5H10V0M3.93,14.66L6.76,11.83L8.17,13.24L5.34,16.07L3.93,14.66M3.93,3.34L5.34,1.93L8.17,4.76L6.76,6.17L3.93,3.34M7,10H2V8H7V10" /></svg>',this.styleOverride="",this.unstyled=!1}static get properties(){return{items:{attribute:!1,type:Object},results:{state:!0,attribute:!1,type:Object},filters:{state:!0,attribute:!1,type:Object},selectedResult:{attribute:!1,type:Object},aggregateResults:{attribute:"aggregate-results",type:String},autoSpreadSingle:{attribute:"auto-spread-single",type:Boolean},enableHighlighting:{attribute:"enable-highlighting",type:Boolean},filterProperties:{attribute:!1,type:Array},fuseConfig:{attribute:!1,type:Object},inlineMode:{attribute:"inline-mode",type:Boolean},matchAllWhenEmpty:{attribute:"match-all-when-empty",type:Boolean},showResults:{attribute:"show-result",type:Boolean},idProperty:{attribute:"id-property",type:String},titleProperty:{attribute:"title-property",type:String},subTitleProperty:{attribute:"sub-title-property",type:String},imageProperty:{attribute:"image-property",type:String},expandMultipleFilters:{attribute:"enable-multiple-filter",type:Boolean},expandResults:{attribute:"expand-result",type:Boolean},expandMultipleResults:{attribute:"expand-multiple-results",type:Boolean},externalFilter:{attribute:!1,type:Function},resultType:{attribute:"result-type",type:String},enableResultAction:{attribute:!1,type:Boolean},resultActionIcon:{attribute:!1,type:String},styleOverride:{type:String},unstyled:{type:Boolean}}}apply(){bt(this,Qe,fu(G(this,X),G(this,Ie),this)),this.search()}async searchHandler(){await hu(G(this,X),G(this,Ie),this),this.dispatchEvent(new CustomEvent("filter",{detail:{results:this.results,filters:this.filters},bubbles:!0,composed:!0})),this.inlineMode&&this.renderRoot.querySelector("eox-itemfilter-container").updateInline(),this.requestUpdate()}sortResults(n){return pu(n,G(this,X))}resetFilters(){yu(this)}firstUpdated(n){var i;let r={};Mr.map(o=>{r={...r,[o]:this[o]}}),bt(this,X,r),bt(this,Ie,((i=this.items)==null?void 0:i.map((o,a)=>Object.assign({id:o[this.idProperty]||`item-${a}`},o)))||[]),this.apply()}updated(n){Mr.map(r=>n.has(r)?(this.firstUpdated(void 0),!0):!1)}updateResult(n){this.selectedResult=n.detail,this.dispatchEvent(new CustomEvent("select",{detail:this.selectedResult,bubbles:!0,composed:!0})),this.requestUpdate()}emitResultAction(n){this.dispatchEvent(new CustomEvent("click:result-action",{detail:n.detail,bubbles:!0,composed:!0}))}render(){var n;return _`
      <style>
        ${jo}
        ${!this.unstyled&&et}
        ${!this.unstyled&&_o}
        ${this.styleOverride}
      </style>
      <form
        id="itemfilter"
        class=${this.inlineMode?"inline":xe}
        @submit="${r=>r.preventDefault()}"
      >
        ${I(this.filterProperties,()=>_`
            <eox-itemfilter-container
              .filters=${this.filters}
              .filterProperties=${this.filterProperties}
              .inlineMode=${this.inlineMode||!1}
              @reset=${()=>this.resetFilters()}
              @filter=${()=>this.search()}
            >
              <section slot="section">
                ${I(!this.inlineMode,()=>_`
                    <slot name="filterstitle"
                      ><h6 class="main-heading">Filters</h6></slot
                    >
                  `)}
                <ul id="filters">
                  ${It(Object.values(this.filters),(r,i)=>_` <li>
                        <eox-itemfilter-expandcontainer
                          .filterObject=${r}
                          @details-toggled=${o=>si(o,G(this,X),this)}
                          data-details="${r.key}"
                        >
                          ${E(this,Fe,Di).call(this,r,Cr(i,1))}
                          ${E(this,Fe,Pi).call(this,r,Cr(i,2))}
                        </eox-itemfilter-expandcontainer>
                      </li>`)}
                </ul>
                ${I(!this.inlineMode&&G(this,X).filterProperties&&!this.inlineMode&&G(this,X).filterProperties&&vn(this.filters),()=>_`
                    <button
                      type="button"
                      id="filter-reset"
                      class="outline small icon-text reset-icon"
                      data-cy="filter-reset"
                      @click=${()=>this.resetFilters()}
                    >
                      Reset all
                    </a>
                  `)}
              </section>
            </eox-itemfilter-container>
          `)}
        ${I(((n=G(this,X))==null?void 0:n.showResults)&&this.results,()=>_`
            <eox-itemfilter-results
              .config=${G(this,X)}
              .results=${this.results}
              .filters=${this.filters}
              .resultAggregation=${G(this,Qe)}
              .selectedResult=${this.selectedResult}
              .resultType=${this.resultType}
              .enableResultAction=${this.enableResultAction}
              .resultActionIcon=${this.resultActionIcon}
              @result=${this.updateResult}
              @click:result-action=${this.emitResultAction}
            >
              <slot name="resultstitle"
                ><h6 class="main-heading">Results</h6></slot
              >
            </eox-itemfilter-results>
          `)}
      </form>
    `}}Qe=new WeakMap,Ie=new WeakMap,X=new WeakMap,Fe=new WeakSet,Pi=function(n,r){return du(n,r,this)},Di=function(n,r){return gu(n,r,this)};customElements.define("eox-itemfilter",mu);const bu=[".items"],wu={slot:"filterstitle",style:{margin:"14px 8px"}},vu={slot:"resultstitle",style:{margin:"14px 8px"}},Ou={__name:"EodashItemFilter",props:{enableCompare:{type:Boolean,default:!1},filtersTitle:{type:String,default:"Indicators"},resultsTitle:{type:String,default:"Results"},titleProperty:{type:String,default:"title"},aggregateResults:{type:String,default:void 0},imageProperty:{type:String,default:""},subTitleProperty:{type:String,default:""},resultType:{type:String,default:""},cssVars:{type:[String,Object],default:""},enableHighlighting:{type:Boolean,default:!0},expandMultipleFilters:{type:Boolean,default:!0},expandMultipleResults:{type:Boolean,default:!0},filterProperties:{type:Array,default:()=>[{keys:["title","themes","description"],title:"Search",type:"text"},{key:"themes",title:"Theme Filter",type:"multiselect"}]}},emits:["select"],setup(e,{emit:t}){const n=t,r=e,i=async p=>{p?(h.resetSelectedCompareSTAC(),await h.loadSelectedSTAC(p.href),n("select",p)):h.selectedStac=null},o=p=>{p&&(h.loadSelectedCompareSTAC(p.href),n("select",p))},a=async p=>{const y=p.detail;r.enableCompare?o(y):i(y)},{smAndDown:l}=xo(),u=Po(()=>({titleProperty:r.titleProperty,enableHighlighting:r.enableHighlighting,expandMultipleFilters:r.expandMultipleFilters,expandMultipleResults:r.expandMultipleResults,subTitleProperty:r.subTitleProperty,resultType:r.resultType,imageProperty:r.imageProperty,aggregateResults:r.aggregateResults,style:r.cssVars,filterProperties:l.value?"":r.filterProperties})),f=Do(null),h=Ao();return(p,y)=>{var g;return Bo(),To("eox-itemfilter",ko({class:"fill-height"},u.value,{ref_key:"eoxItemFilter",ref:f,style:{overflow:"auto","--background-color":"none"},onSelect:a,".items":(g=Oo(h).stac)==null?void 0:g.filter(b=>b.rel==="child")}),[cr("h4",wu,ur(e.filtersTitle),1),cr("h4",vu,ur(e.resultsTitle),1)],48,bu)}}};export{Ou as default};
