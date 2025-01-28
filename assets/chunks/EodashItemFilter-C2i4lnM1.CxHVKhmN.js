var vo=Object.defineProperty;var ar=e=>{throw TypeError(e)};var xo=(e,t,n)=>t in e?vo(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var Xe=(e,t,n)=>xo(e,typeof t!="symbol"?t+"":t,n),nn=(e,t,n)=>t.has(e)||ar("Cannot "+n);var G=(e,t,n)=>(nn(e,t,"read from private field"),n?n.call(e):t.get(e)),U=(e,t,n)=>t.has(e)?ar("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,n),wt=(e,t,n,r)=>(nn(e,t,"write to private field"),r?r.call(e,n):t.set(e,n),n),L=(e,t,n)=>(nn(e,t,"access private method"),n);import{u as _o,a as Mo}from"./eo-dash.BU7FIqgH.js";import{r as ie,x as S,E as xe}from"./lit-element.Cu4xVypU.js";import{a as rn,o as Nt}from"./map.Co3hxIo-.js";import{n as B}from"./when.BR7zwNJC.js";import{s as So}from"./all.style.T4I2W3dO.js";import{d as Je,c as $o}from"./repeat.BiCh9U-B.js";import{_ as Dt,s as Ao,a as Lo}from"./index.BQu02oSp.js";import"./toolcool-range-slider.min.BBXDELo7.js";import{o as Co}from"./orient2d.DArCjZZA.js";import{c as be,g as Lr}from"./commonjsHelpers.BosuxZz1.js";import{h as Eo,p as Ro,c as Po,j as lr,t as cr,K as To,k as ko,o as Oo}from"./framework.c24lRxR4.js";import"./theme.DvORrVRG.js";import"./directive.CF8sV3Lr.js";import"./directive-helpers.Hs5M0JDY.js";const jo=`
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
`,nt=`
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
`;var Tt,Cr;class No extends ie{constructor(){super();U(this,Tt);this.filterObject={},this.unstyled=!1}static get properties(){return{filterObject:{attribute:!1,type:Object},unstyled:{type:Boolean}}}render(){return S`
      <style>
        ${!this.unstyled&&nt}
      </style>

      ${B(this.filterObject.featured,()=>S`<slot name="filter"></slot>`,()=>S`<details
            @toggle="${L(this,Tt,Cr)}"
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
    `}}Tt=new WeakSet,Cr=function(n){this.dispatchEvent(new CustomEvent("details-toggled",{detail:n,bubbles:!0,composed:!0}))};customElements.define("eox-itemfilter-expandcontainer",No);function de(e){return Array.isArray?Array.isArray(e):Pr(e)==="[object Array]"}const Do=1/0;function Io(e){if(typeof e=="string")return e;let t=e+"";return t=="0"&&1/e==-Do?"-0":t}function Bo(e){return e==null?"":Io(e)}function te(e){return typeof e=="string"}function Er(e){return typeof e=="number"}function Ho(e){return e===!0||e===!1||qo(e)&&Pr(e)=="[object Boolean]"}function Rr(e){return typeof e=="object"}function qo(e){return Rr(e)&&e!==null}function K(e){return e!=null}function sn(e){return!e.trim().length}function Pr(e){return e==null?e===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(e)}const Uo="Incorrect 'index' type",Wo=e=>`Invalid value for key ${e}`,Go=e=>`Pattern length exceeds max of ${e}.`,Ko=e=>`Missing ${e} property in key`,zo=e=>`Property 'weight' in key '${e}' must be a positive integer`,ur=Object.prototype.hasOwnProperty;class Vo{constructor(t){this._keys=[],this._keyMap={};let n=0;t.forEach(r=>{let i=Tr(r);this._keys.push(i),this._keyMap[i.id]=i,n+=i.weight}),this._keys.forEach(r=>{r.weight/=n})}get(t){return this._keyMap[t]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}}function Tr(e){let t=null,n=null,r=null,i=1,o=null;if(te(e)||de(e))r=e,t=fr(e),n=cn(e);else{if(!ur.call(e,"name"))throw new Error(Ko("name"));const a=e.name;if(r=a,ur.call(e,"weight")&&(i=e.weight,i<=0))throw new Error(zo(a));t=fr(a),n=cn(a),o=e.getFn}return{path:t,id:n,weight:i,src:r,getFn:o}}function fr(e){return de(e)?e:e.split(".")}function cn(e){return de(e)?e.join("."):e}function Yo(e,t){let n=[],r=!1;const i=(o,a,l)=>{if(K(o))if(!a[l])n.push(o);else{let u=a[l];const f=o[u];if(!K(f))return;if(l===a.length-1&&(te(f)||Er(f)||Ho(f)))n.push(Bo(f));else if(de(f)){r=!0;for(let h=0,p=f.length;h<p;h+=1)i(f[h],a,l+1)}else a.length&&i(f,a,l+1)}};return i(e,te(t)?t.split("."):t,0),r?n:n[0]}const Fo={includeMatches:!1,findAllMatches:!1,minMatchCharLength:1},Xo={isCaseSensitive:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(e,t)=>e.score===t.score?e.idx<t.idx?-1:1:e.score<t.score?-1:1},Jo={location:0,threshold:.6,distance:100},Zo={useExtendedSearch:!1,getFn:Yo,ignoreLocation:!1,ignoreFieldNorm:!1,fieldNormWeight:1};var _={...Xo,...Fo,...Jo,...Zo};const Qo=/[^ ]+/g;function ea(e=1,t=3){const n=new Map,r=Math.pow(10,t);return{get(i){const o=i.match(Qo).length;if(n.has(o))return n.get(o);const a=1/Math.pow(o,.5*e),l=parseFloat(Math.round(a*r)/r);return n.set(o,l),l},clear(){n.clear()}}}class En{constructor({getFn:t=_.getFn,fieldNormWeight:n=_.fieldNormWeight}={}){this.norm=ea(n,3),this.getFn=t,this.isCreated=!1,this.setIndexRecords()}setSources(t=[]){this.docs=t}setIndexRecords(t=[]){this.records=t}setKeys(t=[]){this.keys=t,this._keysMap={},t.forEach((n,r)=>{this._keysMap[n.id]=r})}create(){this.isCreated||!this.docs.length||(this.isCreated=!0,te(this.docs[0])?this.docs.forEach((t,n)=>{this._addString(t,n)}):this.docs.forEach((t,n)=>{this._addObject(t,n)}),this.norm.clear())}add(t){const n=this.size();te(t)?this._addString(t,n):this._addObject(t,n)}removeAt(t){this.records.splice(t,1);for(let n=t,r=this.size();n<r;n+=1)this.records[n].i-=1}getValueForItemAtKeyId(t,n){return t[this._keysMap[n]]}size(){return this.records.length}_addString(t,n){if(!K(t)||sn(t))return;let r={v:t,i:n,n:this.norm.get(t)};this.records.push(r)}_addObject(t,n){let r={i:n,$:{}};this.keys.forEach((i,o)=>{let a=i.getFn?i.getFn(t):this.getFn(t,i.path);if(K(a)){if(de(a)){let l=[];const u=[{nestedArrIndex:-1,value:a}];for(;u.length;){const{nestedArrIndex:f,value:h}=u.pop();if(K(h))if(te(h)&&!sn(h)){let p={v:h,i:f,n:this.norm.get(h)};l.push(p)}else de(h)&&h.forEach((p,y)=>{u.push({nestedArrIndex:y,value:p})})}r.$[o]=l}else if(te(a)&&!sn(a)){let l={v:a,n:this.norm.get(a)};r.$[o]=l}}}),this.records.push(r)}toJSON(){return{keys:this.keys,records:this.records}}}function kr(e,t,{getFn:n=_.getFn,fieldNormWeight:r=_.fieldNormWeight}={}){const i=new En({getFn:n,fieldNormWeight:r});return i.setKeys(e.map(Tr)),i.setSources(t),i.create(),i}function ta(e,{getFn:t=_.getFn,fieldNormWeight:n=_.fieldNormWeight}={}){const{keys:r,records:i}=e,o=new En({getFn:t,fieldNormWeight:n});return o.setKeys(r),o.setIndexRecords(i),o}function vt(e,{errors:t=0,currentLocation:n=0,expectedLocation:r=0,distance:i=_.distance,ignoreLocation:o=_.ignoreLocation}={}){const a=t/e.length;if(o)return a;const l=Math.abs(r-n);return i?a+l/i:l?1:a}function na(e=[],t=_.minMatchCharLength){let n=[],r=-1,i=-1,o=0;for(let a=e.length;o<a;o+=1){let l=e[o];l&&r===-1?r=o:!l&&r!==-1&&(i=o-1,i-r+1>=t&&n.push([r,i]),r=-1)}return e[o-1]&&o-r>=t&&n.push([r,o-1]),n}const Ce=32;function ra(e,t,n,{location:r=_.location,distance:i=_.distance,threshold:o=_.threshold,findAllMatches:a=_.findAllMatches,minMatchCharLength:l=_.minMatchCharLength,includeMatches:u=_.includeMatches,ignoreLocation:f=_.ignoreLocation}={}){if(t.length>Ce)throw new Error(Go(Ce));const h=t.length,p=e.length,y=Math.max(0,Math.min(r,p));let g=o,b=y;const x=l>1||u,A=x?Array(p):[];let $;for(;($=e.indexOf(t,b))>-1;){let N=vt(t,{currentLocation:$,expectedLocation:y,distance:i,ignoreLocation:f});if(g=Math.min(N,g),b=$+h,x){let V=0;for(;V<h;)A[$+V]=1,V+=1}}b=-1;let E=[],C=1,O=h+p;const T=1<<h-1;for(let N=0;N<h;N+=1){let V=0,Z=O;for(;V<Z;)vt(t,{errors:N,currentLocation:y+Z,expectedLocation:y,distance:i,ignoreLocation:f})<=g?V=Z:O=Z,Z=Math.floor((O-V)/2+V);O=Z;let Se=Math.max(1,y-Z+1),Ve=a?p:Math.min(y+Z,p)+h,pe=Array(Ve+2);pe[Ve+1]=(1<<N)-1;for(let W=Ve;W>=Se;W-=1){let je=W-1,it=n[e.charAt(je)];if(x&&(A[je]=+!!it),pe[W]=(pe[W+1]<<1|1)&it,N&&(pe[W]|=(E[W+1]|E[W])<<1|1|E[W+1]),pe[W]&T&&(C=vt(t,{errors:N,currentLocation:je,expectedLocation:y,distance:i,ignoreLocation:f}),C<=g)){if(g=C,b=je,b<=y)break;Se=Math.max(1,2*y-b)}}if(vt(t,{errors:N+1,currentLocation:y,expectedLocation:y,distance:i,ignoreLocation:f})>g)break;E=pe}const oe={isMatch:b>=0,score:Math.max(.001,C)};if(x){const N=na(A,l);N.length?u&&(oe.indices=N):oe.isMatch=!1}return oe}function ia(e){let t={};for(let n=0,r=e.length;n<r;n+=1){const i=e.charAt(n);t[i]=(t[i]||0)|1<<r-n-1}return t}class Or{constructor(t,{location:n=_.location,threshold:r=_.threshold,distance:i=_.distance,includeMatches:o=_.includeMatches,findAllMatches:a=_.findAllMatches,minMatchCharLength:l=_.minMatchCharLength,isCaseSensitive:u=_.isCaseSensitive,ignoreLocation:f=_.ignoreLocation}={}){if(this.options={location:n,threshold:r,distance:i,includeMatches:o,findAllMatches:a,minMatchCharLength:l,isCaseSensitive:u,ignoreLocation:f},this.pattern=u?t:t.toLowerCase(),this.chunks=[],!this.pattern.length)return;const h=(y,g)=>{this.chunks.push({pattern:y,alphabet:ia(y),startIndex:g})},p=this.pattern.length;if(p>Ce){let y=0;const g=p%Ce,b=p-g;for(;y<b;)h(this.pattern.substr(y,Ce),y),y+=Ce;if(g){const x=p-Ce;h(this.pattern.substr(x),x)}}else h(this.pattern,0)}searchIn(t){const{isCaseSensitive:n,includeMatches:r}=this.options;if(n||(t=t.toLowerCase()),this.pattern===t){let b={isMatch:!0,score:0};return r&&(b.indices=[[0,t.length-1]]),b}const{location:i,distance:o,threshold:a,findAllMatches:l,minMatchCharLength:u,ignoreLocation:f}=this.options;let h=[],p=0,y=!1;this.chunks.forEach(({pattern:b,alphabet:x,startIndex:A})=>{const{isMatch:$,score:E,indices:C}=ra(t,b,x,{location:i+A,distance:o,threshold:a,findAllMatches:l,minMatchCharLength:u,includeMatches:r,ignoreLocation:f});$&&(y=!0),p+=E,$&&C&&(h=[...h,...C])});let g={isMatch:y,score:y?p/this.chunks.length:1};return y&&r&&(g.indices=h),g}}class _e{constructor(t){this.pattern=t}static isMultiMatch(t){return hr(t,this.multiRegex)}static isSingleMatch(t){return hr(t,this.singleRegex)}search(){}}function hr(e,t){const n=e.match(t);return n?n[1]:null}class sa extends _e{constructor(t){super(t)}static get type(){return"exact"}static get multiRegex(){return/^="(.*)"$/}static get singleRegex(){return/^=(.*)$/}search(t){const n=t===this.pattern;return{isMatch:n,score:n?0:1,indices:[0,this.pattern.length-1]}}}class oa extends _e{constructor(t){super(t)}static get type(){return"inverse-exact"}static get multiRegex(){return/^!"(.*)"$/}static get singleRegex(){return/^!(.*)$/}search(t){const r=t.indexOf(this.pattern)===-1;return{isMatch:r,score:r?0:1,indices:[0,t.length-1]}}}class aa extends _e{constructor(t){super(t)}static get type(){return"prefix-exact"}static get multiRegex(){return/^\^"(.*)"$/}static get singleRegex(){return/^\^(.*)$/}search(t){const n=t.startsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,this.pattern.length-1]}}}class la extends _e{constructor(t){super(t)}static get type(){return"inverse-prefix-exact"}static get multiRegex(){return/^!\^"(.*)"$/}static get singleRegex(){return/^!\^(.*)$/}search(t){const n=!t.startsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,t.length-1]}}}class ca extends _e{constructor(t){super(t)}static get type(){return"suffix-exact"}static get multiRegex(){return/^"(.*)"\$$/}static get singleRegex(){return/^(.*)\$$/}search(t){const n=t.endsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[t.length-this.pattern.length,t.length-1]}}}class ua extends _e{constructor(t){super(t)}static get type(){return"inverse-suffix-exact"}static get multiRegex(){return/^!"(.*)"\$$/}static get singleRegex(){return/^!(.*)\$$/}search(t){const n=!t.endsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,t.length-1]}}}class jr extends _e{constructor(t,{location:n=_.location,threshold:r=_.threshold,distance:i=_.distance,includeMatches:o=_.includeMatches,findAllMatches:a=_.findAllMatches,minMatchCharLength:l=_.minMatchCharLength,isCaseSensitive:u=_.isCaseSensitive,ignoreLocation:f=_.ignoreLocation}={}){super(t),this._bitapSearch=new Or(t,{location:n,threshold:r,distance:i,includeMatches:o,findAllMatches:a,minMatchCharLength:l,isCaseSensitive:u,ignoreLocation:f})}static get type(){return"fuzzy"}static get multiRegex(){return/^"(.*)"$/}static get singleRegex(){return/^(.*)$/}search(t){return this._bitapSearch.searchIn(t)}}class Nr extends _e{constructor(t){super(t)}static get type(){return"include"}static get multiRegex(){return/^'"(.*)"$/}static get singleRegex(){return/^'(.*)$/}search(t){let n=0,r;const i=[],o=this.pattern.length;for(;(r=t.indexOf(this.pattern,n))>-1;)n=r+o,i.push([r,n-1]);const a=!!i.length;return{isMatch:a,score:a?0:1,indices:i}}}const un=[sa,Nr,aa,la,ua,ca,oa,jr],dr=un.length,fa=/ +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/,ha="|";function da(e,t={}){return e.split(ha).map(n=>{let r=n.trim().split(fa).filter(o=>o&&!!o.trim()),i=[];for(let o=0,a=r.length;o<a;o+=1){const l=r[o];let u=!1,f=-1;for(;!u&&++f<dr;){const h=un[f];let p=h.isMultiMatch(l);p&&(i.push(new h(p,t)),u=!0)}if(!u)for(f=-1;++f<dr;){const h=un[f];let p=h.isSingleMatch(l);if(p){i.push(new h(p,t));break}}}return i})}const pa=new Set([jr.type,Nr.type]);class ga{constructor(t,{isCaseSensitive:n=_.isCaseSensitive,includeMatches:r=_.includeMatches,minMatchCharLength:i=_.minMatchCharLength,ignoreLocation:o=_.ignoreLocation,findAllMatches:a=_.findAllMatches,location:l=_.location,threshold:u=_.threshold,distance:f=_.distance}={}){this.query=null,this.options={isCaseSensitive:n,includeMatches:r,minMatchCharLength:i,findAllMatches:a,ignoreLocation:o,location:l,threshold:u,distance:f},this.pattern=n?t:t.toLowerCase(),this.query=da(this.pattern,this.options)}static condition(t,n){return n.useExtendedSearch}searchIn(t){const n=this.query;if(!n)return{isMatch:!1,score:1};const{includeMatches:r,isCaseSensitive:i}=this.options;t=i?t:t.toLowerCase();let o=0,a=[],l=0;for(let u=0,f=n.length;u<f;u+=1){const h=n[u];a.length=0,o=0;for(let p=0,y=h.length;p<y;p+=1){const g=h[p],{isMatch:b,indices:x,score:A}=g.search(t);if(b){if(o+=1,l+=A,r){const $=g.constructor.type;pa.has($)?a=[...a,...x]:a.push(x)}}else{l=0,o=0,a.length=0;break}}if(o){let p={isMatch:!0,score:l/o};return r&&(p.indices=a),p}}return{isMatch:!1,score:1}}}const fn=[];function ya(...e){fn.push(...e)}function hn(e,t){for(let n=0,r=fn.length;n<r;n+=1){let i=fn[n];if(i.condition(e,t))return new i(e,t)}return new Or(e,t)}const $t={AND:"$and",OR:"$or"},dn={PATH:"$path",PATTERN:"$val"},pn=e=>!!(e[$t.AND]||e[$t.OR]),ma=e=>!!e[dn.PATH],ba=e=>!de(e)&&Rr(e)&&!pn(e),pr=e=>({[$t.AND]:Object.keys(e).map(t=>({[t]:e[t]}))});function Dr(e,t,{auto:n=!0}={}){const r=i=>{let o=Object.keys(i);const a=ma(i);if(!a&&o.length>1&&!pn(i))return r(pr(i));if(ba(i)){const u=a?i[dn.PATH]:o[0],f=a?i[dn.PATTERN]:i[u];if(!te(f))throw new Error(Wo(u));const h={keyId:cn(u),pattern:f};return n&&(h.searcher=hn(f,t)),h}let l={children:[],operator:o[0]};return o.forEach(u=>{const f=i[u];de(f)&&f.forEach(h=>{l.children.push(r(h))})}),l};return pn(e)||(e=pr(e)),r(e)}function wa(e,{ignoreFieldNorm:t=_.ignoreFieldNorm}){e.forEach(n=>{let r=1;n.matches.forEach(({key:i,norm:o,score:a})=>{const l=i?i.weight:null;r*=Math.pow(a===0&&l?Number.EPSILON:a,(l||1)*(t?1:o))}),n.score=r})}function va(e,t){const n=e.matches;t.matches=[],K(n)&&n.forEach(r=>{if(!K(r.indices)||!r.indices.length)return;const{indices:i,value:o}=r;let a={indices:i,value:o};r.key&&(a.key=r.key.src),r.idx>-1&&(a.refIndex=r.idx),t.matches.push(a)})}function xa(e,t){t.score=e.score}function _a(e,t,{includeMatches:n=_.includeMatches,includeScore:r=_.includeScore}={}){const i=[];return n&&i.push(va),r&&i.push(xa),e.map(o=>{const{idx:a}=o,l={item:t[a],refIndex:a};return i.length&&i.forEach(u=>{u(o,l)}),l})}class Me{constructor(t,n={},r){this.options={..._,...n},this.options.useExtendedSearch,this._keyStore=new Vo(this.options.keys),this.setCollection(t,r)}setCollection(t,n){if(this._docs=t,n&&!(n instanceof En))throw new Error(Uo);this._myIndex=n||kr(this.options.keys,this._docs,{getFn:this.options.getFn,fieldNormWeight:this.options.fieldNormWeight})}add(t){K(t)&&(this._docs.push(t),this._myIndex.add(t))}remove(t=()=>!1){const n=[];for(let r=0,i=this._docs.length;r<i;r+=1){const o=this._docs[r];t(o,r)&&(this.removeAt(r),r-=1,i-=1,n.push(o))}return n}removeAt(t){this._docs.splice(t,1),this._myIndex.removeAt(t)}getIndex(){return this._myIndex}search(t,{limit:n=-1}={}){const{includeMatches:r,includeScore:i,shouldSort:o,sortFn:a,ignoreFieldNorm:l}=this.options;let u=te(t)?te(this._docs[0])?this._searchStringList(t):this._searchObjectList(t):this._searchLogical(t);return wa(u,{ignoreFieldNorm:l}),o&&u.sort(a),Er(n)&&n>-1&&(u=u.slice(0,n)),_a(u,this._docs,{includeMatches:r,includeScore:i})}_searchStringList(t){const n=hn(t,this.options),{records:r}=this._myIndex,i=[];return r.forEach(({v:o,i:a,n:l})=>{if(!K(o))return;const{isMatch:u,score:f,indices:h}=n.searchIn(o);u&&i.push({item:o,idx:a,matches:[{score:f,value:o,norm:l,indices:h}]})}),i}_searchLogical(t){const n=Dr(t,this.options),r=(l,u,f)=>{if(!l.children){const{keyId:p,searcher:y}=l,g=this._findMatches({key:this._keyStore.get(p),value:this._myIndex.getValueForItemAtKeyId(u,p),searcher:y});return g&&g.length?[{idx:f,item:u,matches:g}]:[]}const h=[];for(let p=0,y=l.children.length;p<y;p+=1){const g=l.children[p],b=r(g,u,f);if(b.length)h.push(...b);else if(l.operator===$t.AND)return[]}return h},i=this._myIndex.records,o={},a=[];return i.forEach(({$:l,i:u})=>{if(K(l)){let f=r(n,l,u);f.length&&(o[u]||(o[u]={idx:u,item:l,matches:[]},a.push(o[u])),f.forEach(({matches:h})=>{o[u].matches.push(...h)}))}}),a}_searchObjectList(t){const n=hn(t,this.options),{keys:r,records:i}=this._myIndex,o=[];return i.forEach(({$:a,i:l})=>{if(!K(a))return;let u=[];r.forEach((f,h)=>{u.push(...this._findMatches({key:f,value:a[h],searcher:n}))}),u.length&&o.push({idx:l,item:a,matches:u})}),o}_findMatches({key:t,value:n,searcher:r}){if(!K(n))return[];let i=[];if(de(n))n.forEach(({v:o,i:a,n:l})=>{if(!K(o))return;const{isMatch:u,score:f,indices:h}=r.searchIn(o);u&&i.push({score:f,key:t,value:o,idx:a,norm:l,indices:h})});else{const{v:o,n:a}=n,{isMatch:l,score:u,indices:f}=r.searchIn(o);l&&i.push({score:u,key:t,value:o,norm:a,indices:f})}return i}}Me.version="7.0.0";Me.createIndex=kr;Me.parseIndex=ta;Me.config=_;Me.parseQuery=Dr;ya(ga);function Ir(e,t){const n=new Me(t.filterProperties,{keys:["title"]}),r=e.target.value,o=n.search(r).map(a=>a.item.key||a.item.keys.join("|"));Object.keys(t.filters).forEach(a=>{t.querySelector(`[data-details="${a}"]`).parentElement.style.display=o.includes(a)||!r?"":"none"})}function Ma(e,t){const n=e.target.getAttribute("data-close").replace("|","-");t.querySelector(`#filter-${n}`).reset(),t.dispatchEvent(new CustomEvent("filter")),t.requestUpdate()}const gn=Math.min,Ie=Math.max,At=Math.round,xt=Math.floor,ne=e=>({x:e,y:e});function Br(e){return e.split("-")[0]}function Sa(e){return e.split("-")[1]}function $a(e){return e==="x"?"y":"x"}function Aa(e){return e==="y"?"height":"width"}function Hr(e){return["top","bottom"].includes(Br(e))?"y":"x"}function La(e){return $a(Hr(e))}function qr(e){const{x:t,y:n,width:r,height:i}=e;return{width:r,height:i,top:n,left:t,right:t+r,bottom:n+i,x:t,y:n}}function gr(e,t,n){let{reference:r,floating:i}=e;const o=Hr(t),a=La(t),l=Aa(a),u=Br(t),f=o==="y",h=r.x+r.width/2-i.width/2,p=r.y+r.height/2-i.height/2,y=r[l]/2-i[l]/2;let g;switch(u){case"top":g={x:h,y:r.y-i.height};break;case"bottom":g={x:h,y:r.y+r.height};break;case"right":g={x:r.x+r.width,y:p};break;case"left":g={x:r.x-i.width,y:p};break;default:g={x:r.x,y:r.y}}switch(Sa(t)){case"start":g[a]-=y*(n&&f?-1:1);break;case"end":g[a]+=y*(n&&f?-1:1);break}return g}const Ca=async(e,t,n)=>{const{placement:r="bottom",strategy:i="absolute",middleware:o=[],platform:a}=n,l=o.filter(Boolean),u=await(a.isRTL==null?void 0:a.isRTL(t));let f=await a.getElementRects({reference:e,floating:t,strategy:i}),{x:h,y:p}=gr(f,r,u),y=r,g={},b=0;for(let x=0;x<l.length;x++){const{name:A,fn:$}=l[x],{x:E,y:C,data:O,reset:T}=await $({x:h,y:p,initialPlacement:r,placement:y,strategy:i,middlewareData:g,rects:f,platform:a,elements:{reference:e,floating:t}});h=E??h,p=C??p,g={...g,[A]:{...g[A],...O}},T&&b<=50&&(b++,typeof T=="object"&&(T.placement&&(y=T.placement),T.rects&&(f=T.rects===!0?await a.getElementRects({reference:e,floating:t,strategy:i}):T.rects),{x:h,y:p}=gr(f,y,u)),x=-1)}return{x:h,y:p,placement:y,strategy:i,middlewareData:g}};function It(){return typeof window<"u"}function Ge(e){return Ur(e)?(e.nodeName||"").toLowerCase():"#document"}function z(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function se(e){var t;return(t=(Ur(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function Ur(e){return It()?e instanceof Node||e instanceof z(e).Node:!1}function Q(e){return It()?e instanceof Element||e instanceof z(e).Element:!1}function re(e){return It()?e instanceof HTMLElement||e instanceof z(e).HTMLElement:!1}function yr(e){return!It()||typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof z(e).ShadowRoot}function rt(e){const{overflow:t,overflowX:n,overflowY:r,display:i}=ee(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+n)&&!["inline","contents"].includes(i)}function Ea(e){return["table","td","th"].includes(Ge(e))}function Bt(e){return[":popover-open",":modal"].some(t=>{try{return e.matches(t)}catch{return!1}})}function Rn(e){const t=Pn(),n=Q(e)?ee(e):e;return["transform","translate","scale","rotate","perspective"].some(r=>n[r]?n[r]!=="none":!1)||(n.containerType?n.containerType!=="normal":!1)||!t&&(n.backdropFilter?n.backdropFilter!=="none":!1)||!t&&(n.filter?n.filter!=="none":!1)||["transform","translate","scale","rotate","perspective","filter"].some(r=>(n.willChange||"").includes(r))||["paint","layout","strict","content"].some(r=>(n.contain||"").includes(r))}function Ra(e){let t=we(e);for(;re(t)&&!qe(t);){if(Rn(t))return t;if(Bt(t))return null;t=we(t)}return null}function Pn(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function qe(e){return["html","body","#document"].includes(Ge(e))}function ee(e){return z(e).getComputedStyle(e)}function Ht(e){return Q(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function we(e){if(Ge(e)==="html")return e;const t=e.assignedSlot||e.parentNode||yr(e)&&e.host||se(e);return yr(t)?t.host:t}function Wr(e){const t=we(e);return qe(t)?e.ownerDocument?e.ownerDocument.body:e.body:re(t)&&rt(t)?t:Wr(t)}function Ze(e,t,n){var r;t===void 0&&(t=[]),n===void 0&&(n=!0);const i=Wr(e),o=i===((r=e.ownerDocument)==null?void 0:r.body),a=z(i);if(o){const l=yn(a);return t.concat(a,a.visualViewport||[],rt(i)?i:[],l&&n?Ze(l):[])}return t.concat(i,Ze(i,[],n))}function yn(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function Gr(e){const t=ee(e);let n=parseFloat(t.width)||0,r=parseFloat(t.height)||0;const i=re(e),o=i?e.offsetWidth:n,a=i?e.offsetHeight:r,l=At(n)!==o||At(r)!==a;return l&&(n=o,r=a),{width:n,height:r,$:l}}function Tn(e){return Q(e)?e:e.contextElement}function Be(e){const t=Tn(e);if(!re(t))return ne(1);const n=t.getBoundingClientRect(),{width:r,height:i,$:o}=Gr(t);let a=(o?At(n.width):n.width)/r,l=(o?At(n.height):n.height)/i;return(!a||!Number.isFinite(a))&&(a=1),(!l||!Number.isFinite(l))&&(l=1),{x:a,y:l}}const Pa=ne(0);function Kr(e){const t=z(e);return!Pn()||!t.visualViewport?Pa:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function Ta(e,t,n){return t===void 0&&(t=!1),!n||t&&n!==z(e)?!1:t}function Ee(e,t,n,r){t===void 0&&(t=!1),n===void 0&&(n=!1);const i=e.getBoundingClientRect(),o=Tn(e);let a=ne(1);t&&(r?Q(r)&&(a=Be(r)):a=Be(e));const l=Ta(o,n,r)?Kr(o):ne(0);let u=(i.left+l.x)/a.x,f=(i.top+l.y)/a.y,h=i.width/a.x,p=i.height/a.y;if(o){const y=z(o),g=r&&Q(r)?z(r):r;let b=y,x=yn(b);for(;x&&r&&g!==b;){const A=Be(x),$=x.getBoundingClientRect(),E=ee(x),C=$.left+(x.clientLeft+parseFloat(E.paddingLeft))*A.x,O=$.top+(x.clientTop+parseFloat(E.paddingTop))*A.y;u*=A.x,f*=A.y,h*=A.x,p*=A.y,u+=C,f+=O,b=z(x),x=yn(b)}}return qr({width:h,height:p,x:u,y:f})}function kn(e,t){const n=Ht(e).scrollLeft;return t?t.left+n:Ee(se(e)).left+n}function zr(e,t,n){n===void 0&&(n=!1);const r=e.getBoundingClientRect(),i=r.left+t.scrollLeft-(n?0:kn(e,r)),o=r.top+t.scrollTop;return{x:i,y:o}}function ka(e){let{elements:t,rect:n,offsetParent:r,strategy:i}=e;const o=i==="fixed",a=se(r),l=t?Bt(t.floating):!1;if(r===a||l&&o)return n;let u={scrollLeft:0,scrollTop:0},f=ne(1);const h=ne(0),p=re(r);if((p||!p&&!o)&&((Ge(r)!=="body"||rt(a))&&(u=Ht(r)),re(r))){const g=Ee(r);f=Be(r),h.x=g.x+r.clientLeft,h.y=g.y+r.clientTop}const y=a&&!p&&!o?zr(a,u,!0):ne(0);return{width:n.width*f.x,height:n.height*f.y,x:n.x*f.x-u.scrollLeft*f.x+h.x+y.x,y:n.y*f.y-u.scrollTop*f.y+h.y+y.y}}function Oa(e){return Array.from(e.getClientRects())}function ja(e){const t=se(e),n=Ht(e),r=e.ownerDocument.body,i=Ie(t.scrollWidth,t.clientWidth,r.scrollWidth,r.clientWidth),o=Ie(t.scrollHeight,t.clientHeight,r.scrollHeight,r.clientHeight);let a=-n.scrollLeft+kn(e);const l=-n.scrollTop;return ee(r).direction==="rtl"&&(a+=Ie(t.clientWidth,r.clientWidth)-i),{width:i,height:o,x:a,y:l}}function Na(e,t){const n=z(e),r=se(e),i=n.visualViewport;let o=r.clientWidth,a=r.clientHeight,l=0,u=0;if(i){o=i.width,a=i.height;const f=Pn();(!f||f&&t==="fixed")&&(l=i.offsetLeft,u=i.offsetTop)}return{width:o,height:a,x:l,y:u}}function Da(e,t){const n=Ee(e,!0,t==="fixed"),r=n.top+e.clientTop,i=n.left+e.clientLeft,o=re(e)?Be(e):ne(1),a=e.clientWidth*o.x,l=e.clientHeight*o.y,u=i*o.x,f=r*o.y;return{width:a,height:l,x:u,y:f}}function mr(e,t,n){let r;if(t==="viewport")r=Na(e,n);else if(t==="document")r=ja(se(e));else if(Q(t))r=Da(t,n);else{const i=Kr(e);r={x:t.x-i.x,y:t.y-i.y,width:t.width,height:t.height}}return qr(r)}function Vr(e,t){const n=we(e);return n===t||!Q(n)||qe(n)?!1:ee(n).position==="fixed"||Vr(n,t)}function Ia(e,t){const n=t.get(e);if(n)return n;let r=Ze(e,[],!1).filter(l=>Q(l)&&Ge(l)!=="body"),i=null;const o=ee(e).position==="fixed";let a=o?we(e):e;for(;Q(a)&&!qe(a);){const l=ee(a),u=Rn(a);!u&&l.position==="fixed"&&(i=null),(o?!u&&!i:!u&&l.position==="static"&&!!i&&["absolute","fixed"].includes(i.position)||rt(a)&&!u&&Vr(e,a))?r=r.filter(h=>h!==a):i=l,a=we(a)}return t.set(e,r),r}function Ba(e){let{element:t,boundary:n,rootBoundary:r,strategy:i}=e;const a=[...n==="clippingAncestors"?Bt(t)?[]:Ia(t,this._c):[].concat(n),r],l=a[0],u=a.reduce((f,h)=>{const p=mr(t,h,i);return f.top=Ie(p.top,f.top),f.right=gn(p.right,f.right),f.bottom=gn(p.bottom,f.bottom),f.left=Ie(p.left,f.left),f},mr(t,l,i));return{width:u.right-u.left,height:u.bottom-u.top,x:u.left,y:u.top}}function Ha(e){const{width:t,height:n}=Gr(e);return{width:t,height:n}}function qa(e,t,n){const r=re(t),i=se(t),o=n==="fixed",a=Ee(e,!0,o,t);let l={scrollLeft:0,scrollTop:0};const u=ne(0);if(r||!r&&!o)if((Ge(t)!=="body"||rt(i))&&(l=Ht(t)),r){const y=Ee(t,!0,o,t);u.x=y.x+t.clientLeft,u.y=y.y+t.clientTop}else i&&(u.x=kn(i));const f=i&&!r&&!o?zr(i,l):ne(0),h=a.left+l.scrollLeft-u.x-f.x,p=a.top+l.scrollTop-u.y-f.y;return{x:h,y:p,width:a.width,height:a.height}}function on(e){return ee(e).position==="static"}function br(e,t){if(!re(e)||ee(e).position==="fixed")return null;if(t)return t(e);let n=e.offsetParent;return se(e)===n&&(n=n.ownerDocument.body),n}function Yr(e,t){const n=z(e);if(Bt(e))return n;if(!re(e)){let i=we(e);for(;i&&!qe(i);){if(Q(i)&&!on(i))return i;i=we(i)}return n}let r=br(e,t);for(;r&&Ea(r)&&on(r);)r=br(r,t);return r&&qe(r)&&on(r)&&!Rn(r)?n:r||Ra(e)||n}const Ua=async function(e){const t=this.getOffsetParent||Yr,n=this.getDimensions,r=await n(e.floating);return{reference:qa(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:r.width,height:r.height}}};function Wa(e){return ee(e).direction==="rtl"}const Ga={convertOffsetParentRelativeRectToViewportRelativeRect:ka,getDocumentElement:se,getClippingRect:Ba,getOffsetParent:Yr,getElementRects:Ua,getClientRects:Oa,getDimensions:Ha,getScale:Be,isElement:Q,isRTL:Wa};function Fr(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function Ka(e,t){let n=null,r;const i=se(e);function o(){var l;clearTimeout(r),(l=n)==null||l.disconnect(),n=null}function a(l,u){l===void 0&&(l=!1),u===void 0&&(u=1),o();const f=e.getBoundingClientRect(),{left:h,top:p,width:y,height:g}=f;if(l||t(),!y||!g)return;const b=xt(p),x=xt(i.clientWidth-(h+y)),A=xt(i.clientHeight-(p+g)),$=xt(h),C={rootMargin:-b+"px "+-x+"px "+-A+"px "+-$+"px",threshold:Ie(0,gn(1,u))||1};let O=!0;function T(oe){const N=oe[0].intersectionRatio;if(N!==u){if(!O)return a();N?a(!1,N):r=setTimeout(()=>{a(!1,1e-7)},1e3)}N===1&&!Fr(f,e.getBoundingClientRect())&&a(),O=!1}try{n=new IntersectionObserver(T,{...C,root:i.ownerDocument})}catch{n=new IntersectionObserver(T,C)}n.observe(e)}return a(!0),o}function za(e,t,n,r){r===void 0&&(r={});const{ancestorScroll:i=!0,ancestorResize:o=!0,elementResize:a=typeof ResizeObserver=="function",layoutShift:l=typeof IntersectionObserver=="function",animationFrame:u=!1}=r,f=Tn(e),h=i||o?[...f?Ze(f):[],...Ze(t)]:[];h.forEach($=>{i&&$.addEventListener("scroll",n,{passive:!0}),o&&$.addEventListener("resize",n)});const p=f&&l?Ka(f,n):null;let y=-1,g=null;a&&(g=new ResizeObserver($=>{let[E]=$;E&&E.target===f&&g&&(g.unobserve(t),cancelAnimationFrame(y),y=requestAnimationFrame(()=>{var C;(C=g)==null||C.observe(t)})),n()}),f&&!u&&g.observe(f),g.observe(t));let b,x=u?Ee(e):null;u&&A();function A(){const $=Ee(e);x&&!Fr(x,$)&&n(),x=$,b=requestAnimationFrame(A)}return n(),()=>{var $;h.forEach(E=>{i&&E.removeEventListener("scroll",n),o&&E.removeEventListener("resize",n)}),p==null||p(),($=g)==null||$.disconnect(),g=null,u&&cancelAnimationFrame(b)}}const Va=(e,t,n)=>{const r=new Map,i={platform:Ga,...n},o={...i.platform,_c:r};return Ca(e,t,{...i,platform:o})};function Ya(e){const t=e.renderRoot.querySelector(".inline-container-wrapper"),n=e.renderRoot.querySelector("[popover]");return za(t,n,()=>{n.matches(":popover-open")&&Va(t,n,{strategy:"fixed"}).then(({x:i,y:o})=>{Object.assign(n.style,{left:`${i}px`,top:`${o}px`,width:`${t.getBoundingClientRect().width}px`})})},{animationFrame:!0})}function Xr(e){e.renderRoot.querySelector("#eox-itemfilter-input-search").value="",Ir({target:{value:""}},e)}function Fa(e,t){t.inlineMode&&e.stopPropagation()}function Xa(e){e.inlineMode&&(e.showDropdown=!0)}function Ja(e,t){t.inlineMode&&(e.stopPropagation(),t.showDropdown=!0)}function Za(e,t){t.inlineMode&&e.key==="Escape"&&t.showDropdown&&(Xr(t),t.showDropdown=!1)}function Qa(e,t){t.inlineMode&&e.target.tagName!=="DROPDOWN-FORM"&&e.target.tagName!=="EOX-ITEMFILTER"&&t.showDropdown&&(Xr(t),t.showDropdown=!1)}function el(e,t){var n,r,i=0,o,a,l,u,f,h,p,y=e[0],g=e[1],b=t.length;for(n=0;n<b;n++){r=0;var x=t[n],A=x.length-1;if(h=x[0],h[0]!==x[A][0]&&h[1]!==x[A][1])throw new Error("First and last coordinates in a ring must be the same");for(a=h[0]-y,l=h[1]-g,r;r<A;r++){if(p=x[r+1],u=p[0]-y,f=p[1]-g,l===0&&f===0){if(u<=0&&a>=0||a<=0&&u>=0)return 0}else if(f>=0&&l<=0||f<=0&&l>=0){if(o=Co(a,u,l,f,0,0),o===0)return 0;(o>0&&f>0&&l<=0||o<0&&f<=0&&l>0)&&i++}h=p,l=f,a=u}}return i%2!==0}function Re(e,t,n={}){const r={type:"Feature"};return(n.id===0||n.id)&&(r.id=n.id),n.bbox&&(r.bbox=n.bbox),r.properties=t||{},r.geometry=e,r}function tl(e,t,n={}){if(!e)throw new Error("coordinates is required");if(!Array.isArray(e))throw new Error("coordinates must be an Array");if(e.length<2)throw new Error("coordinates must be at least 2 numbers long");if(!wr(e[0])||!wr(e[1]))throw new Error("coordinates must contain numbers");return Re({type:"Point",coordinates:e},t,n)}function nl(e,t,n={}){if(e.length<2)throw new Error("coordinates must be an array of two or more positions");return Re({type:"LineString",coordinates:e},t,n)}function mn(e,t={}){const n={type:"FeatureCollection"};return t.id&&(n.id=t.id),t.bbox&&(n.bbox=t.bbox),n.features=e,n}function rl(e,t,n={}){return Re({type:"MultiLineString",coordinates:e},t,n)}function wr(e){return!isNaN(e)&&e!==null&&!Array.isArray(e)}function Jr(e){if(!e)throw new Error("coord is required");if(!Array.isArray(e)){if(e.type==="Feature"&&e.geometry!==null&&e.geometry.type==="Point")return[...e.geometry.coordinates];if(e.type==="Point")return[...e.coordinates]}if(Array.isArray(e)&&e.length>=2&&!Array.isArray(e[0])&&!Array.isArray(e[1]))return[...e];throw new Error("coord must be GeoJSON Point or an Array of numbers")}function il(e){if(Array.isArray(e))return e;if(e.type==="Feature"){if(e.geometry!==null)return e.geometry.coordinates}else if(e.coordinates)return e.coordinates;throw new Error("coords must be GeoJSON Feature, Geometry Object or an Array")}function Ue(e){return e.type==="Feature"?e.geometry:e}function J(e,t,n={}){if(!e)throw new Error("point is required");if(!t)throw new Error("polygon is required");const r=Jr(e),i=Ue(t),o=i.type,a=t.bbox;let l=i.coordinates;if(a&&sl(r,a)===!1)return!1;o==="Polygon"&&(l=[l]);let u=!1;for(var f=0;f<l.length;++f){const h=el(r,l[f]);if(h===0)return!n.ignoreBoundary;h&&(u=!0)}return u}function sl(e,t){return t[0]<=e[0]&&t[1]<=e[1]&&t[2]>=e[0]&&t[3]>=e[1]}class Zr{constructor(t=[],n=ol){if(this.data=t,this.length=this.data.length,this.compare=n,this.length>0)for(let r=(this.length>>1)-1;r>=0;r--)this._down(r)}push(t){this.data.push(t),this.length++,this._up(this.length-1)}pop(){if(this.length===0)return;const t=this.data[0],n=this.data.pop();return this.length--,this.length>0&&(this.data[0]=n,this._down(0)),t}peek(){return this.data[0]}_up(t){const{data:n,compare:r}=this,i=n[t];for(;t>0;){const o=t-1>>1,a=n[o];if(r(i,a)>=0)break;n[t]=a,t=o}n[t]=i}_down(t){const{data:n,compare:r}=this,i=this.length>>1,o=n[t];for(;t<i;){let a=(t<<1)+1,l=n[a];const u=a+1;if(u<this.length&&r(n[u],l)<0&&(a=u,l=n[u]),r(l,o)>=0)break;n[t]=l,t=a}n[t]=o}}function ol(e,t){return e<t?-1:e>t?1:0}function Qr(e,t){return e.p.x>t.p.x?1:e.p.x<t.p.x?-1:e.p.y!==t.p.y?e.p.y>t.p.y?1:-1:1}function al(e,t){return e.rightSweepEvent.p.x>t.rightSweepEvent.p.x?1:e.rightSweepEvent.p.x<t.rightSweepEvent.p.x?-1:e.rightSweepEvent.p.y!==t.rightSweepEvent.p.y?e.rightSweepEvent.p.y<t.rightSweepEvent.p.y?1:-1:1}class vr{constructor(t,n,r,i){this.p={x:t[0],y:t[1]},this.featureId=n,this.ringId=r,this.eventId=i,this.otherEvent=null,this.isLeftEndpoint=null}isSamePoint(t){return this.p.x===t.p.x&&this.p.y===t.p.y}}function ll(e,t){if(e.type==="FeatureCollection"){const n=e.features;for(let r=0;r<n.length;r++)xr(n[r],t)}else xr(e,t)}let _t=0,Mt=0,St=0;function xr(e,t){const n=e.type==="Feature"?e.geometry:e;let r=n.coordinates;(n.type==="Polygon"||n.type==="MultiLineString")&&(r=[r]),n.type==="LineString"&&(r=[[r]]);for(let i=0;i<r.length;i++)for(let o=0;o<r[i].length;o++){let a=r[i][o][0],l=null;Mt=Mt+1;for(let u=0;u<r[i][o].length-1;u++){l=r[i][o][u+1];const f=new vr(a,_t,Mt,St),h=new vr(l,_t,Mt,St+1);f.otherEvent=h,h.otherEvent=f,Qr(f,h)>0?(h.isLeftEndpoint=!0,f.isLeftEndpoint=!1):(f.isLeftEndpoint=!0,h.isLeftEndpoint=!1),t.push(f),t.push(h),a=l,St=St+1}}_t=_t+1}class cl{constructor(t){this.leftSweepEvent=t,this.rightSweepEvent=t.otherEvent}}function ul(e,t){if(e===null||t===null||e.leftSweepEvent.ringId===t.leftSweepEvent.ringId&&(e.rightSweepEvent.isSamePoint(t.leftSweepEvent)||e.rightSweepEvent.isSamePoint(t.leftSweepEvent)||e.rightSweepEvent.isSamePoint(t.rightSweepEvent)||e.leftSweepEvent.isSamePoint(t.leftSweepEvent)||e.leftSweepEvent.isSamePoint(t.rightSweepEvent)))return!1;const n=e.leftSweepEvent.p.x,r=e.leftSweepEvent.p.y,i=e.rightSweepEvent.p.x,o=e.rightSweepEvent.p.y,a=t.leftSweepEvent.p.x,l=t.leftSweepEvent.p.y,u=t.rightSweepEvent.p.x,f=t.rightSweepEvent.p.y,h=(f-l)*(i-n)-(u-a)*(o-r),p=(u-a)*(r-l)-(f-l)*(n-a),y=(i-n)*(r-l)-(o-r)*(n-a);if(h===0)return!1;const g=p/h,b=y/h;if(g>=0&&g<=1&&b>=0&&b<=1){const x=n+g*(i-n),A=r+g*(o-r);return[x,A]}return!1}function fl(e,t){t=t||!1;const n=[],r=new Zr([],al);for(;e.length;){const i=e.pop();if(i.isLeftEndpoint){const o=new cl(i);for(let a=0;a<r.data.length;a++){const l=r.data[a];if(t&&l.leftSweepEvent.featureId===i.featureId)continue;const u=ul(o,l);u!==!1&&n.push(u)}r.push(o)}else i.isLeftEndpoint===!1&&r.pop()}return n}function hl(e,t){const n=new Zr([],Qr);return ll(e,n),fl(n,t)}var dl=hl;function On(e,t,n={}){const{removeDuplicates:r=!0,ignoreSelfIntersections:i=!0}=n;let o=[];e.type==="FeatureCollection"?o=o.concat(e.features):e.type==="Feature"?o.push(e):(e.type==="LineString"||e.type==="Polygon"||e.type==="MultiLineString"||e.type==="MultiPolygon")&&o.push(Re(e)),t.type==="FeatureCollection"?o=o.concat(t.features):t.type==="Feature"?o.push(t):(t.type==="LineString"||t.type==="Polygon"||t.type==="MultiLineString"||t.type==="MultiPolygon")&&o.push(Re(t));const a=dl(mn(o),i);let l=[];if(r){const u={};a.forEach(f=>{const h=f.join(",");u[h]||(u[h]=!0,l.push(f))})}else l=a;return mn(l.map(u=>tl(u)))}function ei(e,t,n){if(e!==null)for(var r,i,o,a,l,u,f,h=0,p=0,y,g=e.type,b=g==="FeatureCollection",x=g==="Feature",A=b?e.features.length:1,$=0;$<A;$++){f=b?e.features[$].geometry:x?e.geometry:e,y=f?f.type==="GeometryCollection":!1,l=y?f.geometries.length:1;for(var E=0;E<l;E++){var C=0,O=0;if(a=y?f.geometries[E]:f,a!==null){u=a.coordinates;var T=a.type;switch(h=0,T){case null:break;case"Point":if(t(u,p,$,C,O)===!1)return!1;p++,C++;break;case"LineString":case"MultiPoint":for(r=0;r<u.length;r++){if(t(u[r],p,$,C,O)===!1)return!1;p++,T==="MultiPoint"&&C++}T==="LineString"&&C++;break;case"Polygon":case"MultiLineString":for(r=0;r<u.length;r++){for(i=0;i<u[r].length-h;i++){if(t(u[r][i],p,$,C,O)===!1)return!1;p++}T==="MultiLineString"&&C++,T==="Polygon"&&O++}T==="Polygon"&&C++;break;case"MultiPolygon":for(r=0;r<u.length;r++){for(O=0,i=0;i<u[r].length;i++){for(o=0;o<u[r][i].length-h;o++){if(t(u[r][i][o],p,$,C,O)===!1)return!1;p++}O++}C++}break;case"GeometryCollection":for(r=0;r<a.geometries.length;r++)if(ei(a.geometries[r],t)===!1)return!1;break;default:throw new Error("Unknown Geometry Type")}}}}}function pl(e,t){var n,r,i,o,a,l,u,f,h,p,y=0,g=e.type==="FeatureCollection",b=e.type==="Feature",x=g?e.features.length:1;for(n=0;n<x;n++){for(l=g?e.features[n].geometry:b?e.geometry:e,f=g?e.features[n].properties:b?e.properties:{},h=g?e.features[n].bbox:b?e.bbox:void 0,p=g?e.features[n].id:b?e.id:void 0,u=l?l.type==="GeometryCollection":!1,a=u?l.geometries.length:1,i=0;i<a;i++){if(o=u?l.geometries[i]:l,o===null){if(t(null,y,f,h,p)===!1)return!1;continue}switch(o.type){case"Point":case"LineString":case"MultiPoint":case"Polygon":case"MultiLineString":case"MultiPolygon":{if(t(o,y,f,h,p)===!1)return!1;break}case"GeometryCollection":{for(r=0;r<o.geometries.length;r++)if(t(o.geometries[r],y,f,h,p)===!1)return!1;break}default:throw new Error("Unknown Geometry Type")}}y++}}function Lt(e,t){pl(e,function(n,r,i,o,a){var l=n===null?null:n.type;switch(l){case null:case"Point":case"LineString":case"Polygon":return t(Re(n,i,{bbox:o,id:a}),r,0)===!1?!1:void 0}var u;switch(l){case"MultiPoint":u="Point";break;case"MultiLineString":u="LineString";break;case"MultiPolygon":u="Polygon";break}for(var f=0;f<n.coordinates.length;f++){var h=n.coordinates[f],p={type:u,coordinates:h};if(t(Re(p,i),r,f)===!1)return!1}})}function bn(e,t={}){const n=Ue(e);switch(!t.properties&&e.type==="Feature"&&(t.properties=e.properties),n.type){case"Polygon":return gl(n,t);case"MultiPolygon":return yl(n,t);default:throw new Error("invalid poly")}}function gl(e,t={}){const r=Ue(e).coordinates,i=t.properties?t.properties:e.type==="Feature"?e.properties:{};return ti(r,i)}function yl(e,t={}){const r=Ue(e).coordinates,i=t.properties?t.properties:e.type==="Feature"?e.properties:{},o=[];return r.forEach(a=>{o.push(ti(a,i))}),mn(o)}function ti(e,t){return e.length>1?rl(e,t):nl(e[0],t)}function ml(e,t,{ignoreSelfIntersections:n=!0}={ignoreSelfIntersections:!0}){let r=!0;return Lt(e,i=>{Lt(t,o=>{if(r===!1)return!1;r=bl(i.geometry,o.geometry,n)})}),r}function bl(e,t,n){switch(e.type){case"Point":switch(t.type){case"Point":return!_l(e.coordinates,t.coordinates);case"LineString":return!_r(t,e);case"Polygon":return!J(e,t)}break;case"LineString":switch(t.type){case"Point":return!_r(e,t);case"LineString":return!wl(e,t,n);case"Polygon":return!Mr(t,e,n)}break;case"Polygon":switch(t.type){case"Point":return!J(t,e);case"LineString":return!Mr(e,t,n);case"Polygon":return!vl(t,e,n)}}return!1}function _r(e,t){for(let n=0;n<e.coordinates.length-1;n++)if(xl(e.coordinates[n],e.coordinates[n+1],t.coordinates))return!0;return!1}function wl(e,t,n){return On(e,t,{ignoreSelfIntersections:n}).features.length>0}function Mr(e,t,n){for(const i of t.coordinates)if(J(i,e))return!0;return On(t,bn(e),{ignoreSelfIntersections:n}).features.length>0}function vl(e,t,n){for(const i of e.coordinates[0])if(J(i,t))return!0;for(const i of t.coordinates[0])if(J(i,e))return!0;return On(bn(e),bn(t),{ignoreSelfIntersections:n}).features.length>0}function xl(e,t,n){const r=n[0]-e[0],i=n[1]-e[1],o=t[0]-e[0],a=t[1]-e[1];return r*a-i*o!==0?!1:Math.abs(o)>=Math.abs(a)?o>0?e[0]<=n[0]&&n[0]<=t[0]:t[0]<=n[0]&&n[0]<=e[0]:a>0?e[1]<=n[1]&&n[1]<=t[1]:t[1]<=n[1]&&n[1]<=e[1]}function _l(e,t){return e[0]===t[0]&&e[1]===t[1]}function Ml(e,t,{ignoreSelfIntersections:n=!0}={}){let r=!1;return Lt(e,i=>{Lt(t,o=>{if(r===!0)return!0;r=!ml(i.geometry,o.geometry,{ignoreSelfIntersections:n})})}),r}var Sl=Ml;function Ct(e,t={}){if(e.bbox!=null&&t.recompute!==!0)return e.bbox;const n=[1/0,1/0,-1/0,-1/0];return ei(e,r=>{n[0]>r[0]&&(n[0]=r[0]),n[1]>r[1]&&(n[1]=r[1]),n[2]<r[0]&&(n[2]=r[0]),n[3]<r[1]&&(n[3]=r[1])}),n}function Et(e,t,n={}){const r=Jr(e),i=il(t);for(let o=0;o<i.length-1;o++){let a=!1;if(n.ignoreEndVertices&&(o===0&&(a="start"),o===i.length-2&&(a="end"),o===0&&o+1===i.length-1&&(a="both")),$l(i[o],i[o+1],r,a,typeof n.epsilon>"u"?null:n.epsilon))return!0}return!1}function $l(e,t,n,r,i){const o=n[0],a=n[1],l=e[0],u=e[1],f=t[0],h=t[1],p=n[0]-l,y=n[1]-u,g=f-l,b=h-u,x=p*b-y*g;if(i!==null){if(Math.abs(x)>i)return!1}else if(x!==0)return!1;if(Math.abs(g)===Math.abs(b)&&Math.abs(g)===0)return r?!1:n[0]===e[0]&&n[1]===e[1];if(r){if(r==="start")return Math.abs(g)>=Math.abs(b)?g>0?l<o&&o<=f:f<=o&&o<l:b>0?u<a&&a<=h:h<=a&&a<u;if(r==="end")return Math.abs(g)>=Math.abs(b)?g>0?l<=o&&o<f:f<o&&o<=l:b>0?u<=a&&a<h:h<a&&a<=u;if(r==="both")return Math.abs(g)>=Math.abs(b)?g>0?l<o&&o<f:f<o&&o<l:b>0?u<a&&a<h:h<a&&a<u}else return Math.abs(g)>=Math.abs(b)?g>0?l<=o&&o<=f:f<=o&&o<=l:b>0?u<=a&&a<=h:h<=a&&a<=u;return!1}function Al(e,t){var n=Ue(e),r=Ue(t),i=n.type,o=r.type;switch(i){case"Point":switch(o){case"MultiPoint":return Ll(n,r);case"LineString":return Et(n,r,{ignoreEndVertices:!0});case"Polygon":case"MultiPolygon":return J(n,r,{ignoreBoundary:!0});default:throw new Error("feature2 "+o+" geometry not supported")}case"MultiPoint":switch(o){case"MultiPoint":return Cl(n,r);case"LineString":return El(n,r);case"Polygon":case"MultiPolygon":return Rl(n,r);default:throw new Error("feature2 "+o+" geometry not supported")}case"LineString":switch(o){case"LineString":return Pl(n,r);case"Polygon":case"MultiPolygon":return Tl(n,r);default:throw new Error("feature2 "+o+" geometry not supported")}case"Polygon":switch(o){case"Polygon":case"MultiPolygon":return kl(n,r);default:throw new Error("feature2 "+o+" geometry not supported")}default:throw new Error("feature1 "+i+" geometry not supported")}}function Ll(e,t){var n,r=!1;for(n=0;n<t.coordinates.length;n++)if(ri(t.coordinates[n],e.coordinates)){r=!0;break}return r}function Cl(e,t){for(var n=0;n<e.coordinates.length;n++){for(var r=!1,i=0;i<t.coordinates.length;i++)ri(e.coordinates[n],t.coordinates[i])&&(r=!0);if(!r)return!1}return!0}function El(e,t){for(var n=!1,r=0;r<e.coordinates.length;r++){if(!Et(e.coordinates[r],t))return!1;n||(n=Et(e.coordinates[r],t,{ignoreEndVertices:!0}))}return n}function Rl(e,t){for(var n=!0,r=!1,i=0;i<e.coordinates.length;i++){if(r=J(e.coordinates[i],t),!r){n=!1;break}r=J(e.coordinates[i],t,{ignoreBoundary:!0})}return n&&r}function Pl(e,t){for(var n=0;n<e.coordinates.length;n++)if(!Et(e.coordinates[n],t))return!1;return!0}function Tl(e,t){var n=Ct(t),r=Ct(e);if(!ni(n,r))return!1;for(var i=!1,o=0;o<e.coordinates.length;o++){if(!J(e.coordinates[o],t))return!1;if(i||(i=J(e.coordinates[o],t,{ignoreBoundary:!0})),!i&&o<e.coordinates.length-1){var a=Ol(e.coordinates[o],e.coordinates[o+1]);i=J(a,t,{ignoreBoundary:!0})}}return i}function kl(e,t){var n=Ct(e),r=Ct(t);if(!ni(r,n))return!1;for(var i=0;i<e.coordinates[0].length;i++)if(!J(e.coordinates[0][i],t))return!1;return!0}function ni(e,t){return!(e[0]>t[0]||e[2]<t[2]||e[1]>t[1]||e[3]<t[3])}function ri(e,t){return e[0]===t[0]&&e[1]===t[1]}function Ol(e,t){return[(e[0]+t[0])/2,(e[1]+t[1])/2]}var jl=Al;const Nl=(e,t)=>t?Sl(e,t):!0,Dl=(e,t)=>t?jl(e,t):!0;function Il(e,t="highlight",n="title"){const r=(o,a,l)=>{const u=a.split(".");let f;for(f=0;f<u.length-1;f++)o=o[u[f]];o[u[f]]=l},i=(o,a=[])=>{let l="",u=0;return a.forEach(f=>{const h=f[1]+1;l+=[o.substring(u,f[0]),`<mark class="${t}">`,o.substring(f[0],h),"</mark>"].join(""),u=h}),l+=o.substring(u),l};return e.filter(({matches:o})=>o&&o.length).map(({item:o,matches:a})=>{const l={...o};return a.forEach(u=>{u.key===n&&r(l,u.key,i(u.value,u.indices))}),l})}let ii;const Bl=(e,t)=>{ii=new Me(e,{threshold:.4,distance:50,includeMatches:!0,useExtendedSearch:!0,...t})},Hl=async(e,t,n)=>{const r=Object.entries(t).filter(([,l])=>l.type==="text"||l.type==="select"||l.type==="multiselect").reduce((l,[u,f])=>{const h="$or",p=[],y=(g,b)=>{const x={};f.type==="text"?x[g]=`${b}`:x[u]=`="${g}"`,p.push(x)};return Object.entries(f.state).filter(([,g])=>g).forEach(([g,b])=>y(g,b)),p.length>0&&l.push({[h]:p}),l},[]);let i;if(!(r.length>0)&&n.matchAllWhenEmpty!==!1)i=e;else{const l={$and:[...r]},u=ii.search(l);i=n.enableHighlighting?Il(u,"highlight",n.titleProperty):u.map(f=>f.item)}const o=Object.entries(t).filter(([,l])=>l.type==="range").reduce((l,[u,f])=>(l[u]={min:f.state.min,max:f.state.max,format:f.format},l),{});if(Object.keys(o).length>0){const l=[];for(let u=0;u<i.length;u++){const f={};for(const[h,p]of Object.entries(o)){const y=b=>p.format==="date"?Je(b).unix():b,g=Qe(h,i[u]);g?Array.isArray(g)?f[h]=o[h].min<=y(g[1])&&y(g[0])<=o[h].max:y(g)>=o[h].min&&y(g)<=o[h].max?f[h]=!0:f[h]=!1:f[h]=!0}Object.values(f).every(h=>!!h)&&l.push(i[u])}i=[...l]}const a=Object.entries(t).filter(([,l])=>l.type==="spatial").reduce((l,[u,f])=>(l[u]={geometry:f.state.geometry,mode:f.state.mode},l),{});if(Object.values(a).map(l=>l.geometry).filter(l=>!!l).length>0){const l=[];for(let u=0;u<i.length;u++){const f={};for(const h of Object.keys(a)){const p=Qe(h,i[u]),y=a[h].mode||"within";p&&(y==="within"?Dl(p,a[h].geometry):Nl(p,a[h].geometry))?f[h]=!0:f[h]=!1}Object.values(f).every(h=>!!h)&&l.push(i[u])}i=[...l]}return i};function ql(e,t){return[{type:"Vector",properties:{id:"draw"},source:{type:"Vector",...e&&{format:"GeoJSON"},...e&&{url:t}},zIndex:1,interactions:[{type:"draw",options:{id:"drawInteraction",type:"Box",modify:!0}}]},{type:"Tile",source:{type:"XYZ",url:"https://tiles.maps.eox.at/wmts/1.0.0/osm_3857/default/g/{z}/{y}/{x}.jpg",attribution:"{ OSM: Data &copy; OpenStreetMap contributors and others, Rendering &copy; EOX }"}}]}function qt(e){if(!e.dirty)return null;switch(e.type){case"multiselect":for(const n in e.state)e.state.hasOwnProperty(n)&&(e.state[n]=!1);break;case"range":e.state.min=e.min,e.state.max=e.max;break;case"select":for(const n in e.state)e.state.hasOwnProperty(n)&&(e.state[n]=!1);break;case"spatial":e.state.geometry=void 0;break;case"text":e.keys.forEach(n=>{e.state[n]=void 0});break}return delete e.stringifiedState,delete e.dirty,e}function Sr(e,t){return e*2+t}function Ul(e){return Object.keys(e).map(t=>({title:S`${e[t].title||e[t].key}:
        <strong>${e[t].stringifiedState}</strong>`,key:t})).filter(t=>e[t.key].dirty)}function wn(e){return Object.values(e).map(t=>t.dirty).filter(t=>t).length>0}async function Wl(e,t,n){return await(await fetch(`${n.externalFilter(e,t)}`)).json()}function si(e,t,n){let r;if(e.detail?r=e.detail.target:r=e.target,r!=null&&r.classList.contains("details-filter")){if(!r.open||t!=null&&t.expandMultipleFilters)return;n.shadowRoot.querySelectorAll("eox-itemfilter-expandcontainer").forEach(i=>{const o=i.shadowRoot.querySelector(".details-filter");o&&o!==r&&o.removeAttribute("open")})}else{if(!(r!=null&&r.open)||t!=null&&t.expandMultipleResults)return;n.querySelectorAll("details").forEach(i=>{i!==r&&i.removeAttribute("open")})}}function Qe(e,t){return e!=null&&e.includes(".")?e.split(".").reduce((n,r)=>n&&n[r],t):t[e]}var R,oi,vn,xn,ai,_n,Mn,li,Sn,ci,ui;class Gl extends ie{constructor(){super();U(this,R);this.filterProperties={},this.unstyled=!1,this.inlineMode=!1,this.filters={},this._handleClickOutside=L(this,R,ai).bind(this),this._handleKeyDown=L(this,R,_n).bind(this)}static get properties(){return{filterProperties:{attribute:!1,type:Object},inlineMode:{attribute:"inline-mode",type:Boolean},unstyled:{type:Boolean},filters:{state:!0,type:Object}}}set showDropdown(n){this.renderRoot.querySelector("[popover]").togglePopover(n)}get showDropdown(){var n;return(n=this.renderRoot.querySelector("[popover]"))==null?void 0:n.matches(":popover-open")}connectedCallback(){super.connectedCallback(),this.inlineMode&&L(this,R,vn).call(this)}disconnectedCallback(){this.inlineMode&&L(this,R,xn).call(this),super.disconnectedCallback()}_overlayCleanup(){}updateInline(){this.inlineMode&&this.requestUpdate()}updated(n){n.has("inlineMode")&&(this.inlineMode?L(this,R,vn).call(this):L(this,R,xn).call(this))}render(){return S`
      <style>
        ${!this.unstyled&&nt}
      </style>
      ${this.inlineMode?S`
            <div
              class="inline-container-wrapper"
              @click="${L(this,R,Mn)}"
            >
              <div class="inline-container" part="container">
                <div class="chip-container">
                  <div class="chip-wrapper">
                    <eox-itemfilter-chips
                      .items=${Ul(this.filters)}
                      .controller=${{remove:n=>L(this,R,ci).call(this,n)}}
                    >
                    </eox-itemfilter-chips>
                  </div>

                  ${B(wn(this.filters),()=>S`
                      <span
                        class="chip-close"
                        @click=${()=>this.dispatchEvent(new CustomEvent("reset"))}
                      ></span>
                    `)}
                </div>
                <div
                  class="input-container ${wn(this.filters)?"dirty-filter-input":""}"
                >
                  <input
                    autocomplete="off"
                    id="eox-itemfilter-input-search"
                    type="text"
                    @click="${L(this,R,Mn)}"
                    @focus="${L(this,R,li)}"
                    @input="${L(this,R,ui)}"
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
                  @keydown="${L(this,R,_n)}"
                  @click="${L(this,R,Sn)}"
                  @focus="${L(this,R,Sn)}"
                >
                  <slot name="section"></slot>
                </div>
              </div>
            </div>
          `:S`<slot name="section"></slot>`}
    `}}R=new WeakSet,oi=function(){setTimeout(()=>this._overlayCleanup=Ya(this))},vn=function(){document.addEventListener("click",this._handleClickOutside),document.addEventListener("focusout",this._handleClickOutside),document.addEventListener("keydown",this._handleKeyDown),L(this,R,oi).call(this)},xn=function(){document.removeEventListener("click",this._handleClickOutside),document.removeEventListener("focusout",this._handleClickOutside),document.removeEventListener("keydown",this._handleKeyDown),this._overlayCleanup()},ai=function(n){Qa(n,this)},_n=function(n){Za(n,this)},Mn=function(n){Ja(n,this)},li=function(){Xa(this)},Sn=function(n){Fa(n,this)},ci=function(n){Ma(n,this)},ui=function(n){Ir(n,this)};customElements.define("eox-itemfilter-container",Gl);function Kl(e){const t=e.renderRoot.querySelector("input[type='text']");t.value="",qt(e.filterObject),e.requestUpdate()}function zl(e){const t=e.renderRoot.querySelector("input[type='text']");e.isValid=t.checkValidity(),e.filterObject.keys.forEach(n=>{e.filterObject.state[n]=t.value}),e.filterObject.dirty=!0,e.filterObject.stringifiedState=t.value,e.dispatchEvent(new CustomEvent("filter")),t.value===""&&e.reset()}const $n="ddd, D MMM YYYY HH:mm:ss";function Vl(e){if(e.filterObject=qt(e.filterObject),e.filterObject){const t=e.querySelector("tc-range-slider"),n=e.filterObject.min,r=e.filterObject.max;t.value1!==n&&(t.value1=n),t.value2!==r&&(t.value2=r)}e.requestUpdate()}function Yl(e,t){const[n,r]=e.detail.values;(n!==t.filterObject.state.min||r!==t.filterObject.state.max)&&([t.filterObject.state.min,t.filterObject.state.max]=[n,r],t.filterObject.dirty=!0),t.filterObject.dirty&&(t.filterObject.stringifiedState=t.filterObject.format==="date"?`${Je.unix(n).format($n)} - ${Je.unix(r).format($n)}`:`${n} - ${r}`),t.dispatchEvent(new CustomEvent("filter")),n===t.filterObject.min&&r===t.filterObject.max?t.reset():t.requestUpdate()}function Fl(e,t,n){const r=n.filterObject.format==="date",i=n.filterObject.state[e],o=r?Je.unix(i).format($n):i;return S`<div class="range-${t}">${o}</div>`}function Xl(e){Jl(-1,e),qt(e.filterObject),e.requestUpdate()}function Jl(e,t){t.selectedItems=[],jn(t),hi(t)}function fi(e,t){const n=t.selectedItems.indexOf(e);n>=0?t.selectedItems=t.selectedItems.filter((r,i)=>i!==n):t.type==="multiselect"?t.selectedItems=[...t.selectedItems,e]:(t.selectedItems=[e],t.showSuggestions=!1),jn(t),hi(t)}function Zl(e,t){t.query=e.target.value,t.showSuggestions=!0}function Ql(e,t){switch(e.key){case"ArrowDown":t.highlightedIndex=Math.min(t.highlightedIndex+1,t.filteredSuggestions.length-1);break;case"ArrowUp":t.highlightedIndex=Math.max(t.highlightedIndex-1,0);break;case"Enter":t.highlightedIndex>=0&&fi(t.filteredSuggestions[t.highlightedIndex],t);break;case"Escape":t.showSuggestions=!1;break}}function ec(e,t){(e.has("suggestions")||e.has("query"))&&jn(t)}function tc(e,t){var r;const n=((r=e.filterObject)==null?void 0:r.sort)||((i,o)=>i.localeCompare(o));return t.sort(n).map(i=>i)}function jn(e){var n,r,i;let t;e.query&&(t=new Me(e.suggestions,{threshold:.4}).search(e.query).map(a=>a.item)),e.filteredSuggestions=tc(e,t||e.suggestions),(n=e.filterObject)!=null&&n.filterKeys&&(e.filteredSuggestions=(r=e.filterObject)==null?void 0:r.filterKeys.map(o=>`${o}`),e.filterObject.state=(i=e.filterObject)==null?void 0:i.filterKeys.map(o=>`${o}`).reduce((o,a)=>(a in o||(o[a]=void 0),o),e.filterObject.state)),e.highlightedIndex=-1}function hi(e){Object.keys(e.filterObject.state).forEach(t=>{e.filterObject.state[t]=e.selectedItems.includes(t)}),e.filterObject.stringifiedState=Object.keys(e.filterObject.state).filter(t=>e.filterObject.state[t]).join(", ")||"",e.filterObject.dirty=e.filterObject.stringifiedState.length>0,e.dispatchEvent(new CustomEvent("filter")),e.requestUpdate()}function nc(e){qt(e.filterObject),e.renderRoot.querySelector("eox-itemfilter-spatial-filter").reset(),e.requestUpdate()}function rc(e){e.renderRoot.querySelector("#eox-map").innerHTML="",di(e)}function ic(e,t){t.filterObject.state.mode=e;const n=new CustomEvent("filter",{detail:{[t.filterObject.key]:{}}});t.dispatchEvent(n)}function di(e){const t=e.renderRoot.querySelector("#eox-map");t.innerHTML===""&&(t.innerHTML='<eox-map part="map" style="height: 400px"></eox-map>');const n=e.geometry&&sc(e.geometry),r=ql(e.geometry,n);e.eoxMap=e.renderRoot.querySelector("eox-map"),setTimeout(()=>{e.eoxMap.layers=r;const i=o=>{const a=new CustomEvent("filter",{detail:{geometry:{type:"Polygon",coordinates:o.getGeometry().clone().transform("EPSG:3857","EPSG:4326").getCoordinates()}}});e.dispatchEvent(a)};e.eoxMap.interactions.drawInteraction.on("drawend",o=>{i(o.feature),e.eoxMap.removeInteraction("drawInteraction")}),e.eoxMap.interactions.drawInteraction_modify.on("modifyend",o=>{i(o.features.getArray()[0])})},1e3)}function sc(e){return`data:text/json,${encodeURIComponent(JSON.stringify({type:"FeatureCollection",features:[{type:"Feature",properties:null,geometry:e}]}))}`}var kt;class oc extends ie{constructor(){super();U(this,kt,()=>{zl(this)});Xe(this,"debouncedInputHandler",Dt(G(this,kt),500,{leading:!0}));this.filterObject={},this.unstyled=!1,this.tabIndex=0,this.unstyled=!1}static get properties(){return{filterObject:{attribute:!1,type:Object},tabIndex:{attribute:!1,type:Number},unstyled:{type:Boolean},isValid:{state:!0,type:Boolean}}}reset(){Kl(this)}createRenderRoot(){return this}render(){return B(this.filterObject,()=>{var n;return S`
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
      `})}}kt=new WeakMap;customElements.define("eox-itemfilter-text",oc);function ac(e,t,n){return e.filter(r=>{const i=r[n.config.aggregateResults];let o;return n.filters[n.config.aggregateResults]&&(o=Object.keys(n.filters[n.config.aggregateResults]).filter(l=>n.filters[n.config.aggregateResults].state[l])),(o!=null&&o.length?o.includes(t):!0)&&Array.isArray(i)?i.includes(t):i===t})}function lc(e,t){return S`
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
        ${pi(e,t)}
      </div>
    </details>
  `}function pi(e,t){const n=t.results,r=e?t.aggregateResults(n,e):n,i=t.config,o=a=>{var l;return((l=t.selectedResult)==null?void 0:l[i.idProperty])===a[i.idProperty]?"highlighted":xe};return S`
    <ul class=${t.resultType}>
      ${$o(r,a=>a.id,a=>S`
          <li
            class=${o(a)}
            @click=${()=>{t.selectedResult===a?t.selectedResult=null:t.selectedResult=a,t.dispatchEvent(new CustomEvent("result",{detail:t.selectedResult}))}}
          >
            <span id="${a.id}">
              ${B(i.subTitleProperty||i.imageProperty,()=>S`
                  ${Qe(i.imageProperty,a)?S`
                        <img
                          class="image"
                          src="${Qe(i.imageProperty,a)}"
                        />
                      `:S`
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
                      >${rn(a[i.titleProperty])}</span
                    >
                    <span class="subtitle"
                      >${rn(a[i.subTitleProperty])}</span
                    >
                  </div>
                `,()=>S`
                  <span class="title"
                    >${rn(a[i.titleProperty])}</span
                  >
                `)}
            </span>
          </li>
        `)}
    </ul>
  `}var Te,An,gi;class cc extends ie{constructor(){super();U(this,Te);this.config=null,this.filters={},this.resultAggregation=[],this.selectedResult=null,this.resultType="list"}static get properties(){return{config:{attribute:!1,type:Object},results:{state:!0,type:Object},filters:{state:!0,type:Object},resultAggregation:{attribute:!1,type:Array},selectedResult:{state:!0,type:Object},resultType:{attribute:"result-type",type:String}}}aggregateResults(n,r){return ac(n,r,this)}createRenderRoot(){return this}handleAccordion(n){si(n,this.config,this)}render(){return S`
      <section id="section-results">
        <div slot="resultstitle"></div>
        <div id="container-results" class="scroll">
          ${B(this.results.length<1,()=>S`<small class="no-results">No matching items</small>`,()=>xe)}
          <ul id="results" part="results">
            ${B(this.config.aggregateResults,()=>Nt(this.resultAggregation.filter(n=>this.aggregateResults(this.results,n).length),n=>S`${B(this.aggregateResults(this.results,n).length===1&&this.config.autoSpreadSingle,()=>S`<div style="margin-left: -8px">
                          ${L(this,Te,An).call(this,n)}
                        </div>`,()=>L(this,Te,gi).call(this,n))}`),()=>L(this,Te,An).call(this))}
          </ul>
        </div>
      </section>
    `}}Te=new WeakSet,An=function(n){return pi(n,this)},gi=function(n){return lc(n,this)};customElements.define("eox-itemfilter-results",cc);var ve,mi,bi,wi;class yi extends ie{constructor(){super();U(this,ve);Xe(this,"debouncedInputHandler",Dt(L(this,ve,wi),500,{leading:!0}));this.filterObject={},this.suggestions=[],this.selectedItems=[],this.query="",this.showSuggestions=!1,this.highlightedIndex=-1,this.filteredSuggestions=[],this.type="select",this.unstyled=!1,this.tabIndex=0,this.inlineMode=!1}updated(n){ec(n,this)}reset(){Xl(this)}firstUpdated(){this.filterObject.state&&(this.selectedItems=Object.keys(this.filterObject.state).map(n=>this.filterObject.state[n]?n:null).filter(n=>!!n),this.filterObject.stringifiedState=this.selectedItems.join(", ")||"",this.requestUpdate())}render(){const n=this.type.includes("multi")?"checkbox":"radio",r=this.filteredSuggestions.length>5?"select-overflow":xe;return S`
      <style>
        ${!this.unstyled&&nt}
        ${!this.unstyled&&Ao}
        ${!this.unstyled&&Lo}
      </style>
      ${B(this.suggestions.length>10,()=>S`<div class="autocomplete-container">
            <div class="autocomplete-container-wrapper">
              <input
                autocomplete="off"
                tabindex=${this.tabIndex}
                class="autocomplete-input"
                type="text"
                .value=${this.query}
                placeholder="${this.filterObject.placeholder||""}"
                @input=${L(this,ve,mi)}
                @keydown=${L(this,ve,bi)}
                @blur=${()=>this.showSuggestions=!1}
                @focus=${()=>this.showSuggestions=!0}
              />
            </div>
          </div>`)}
      <div class="select-container ${r}">
        <ul class="${this.type}">
          ${this.filteredSuggestions.map(i=>S`
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
    `}}ve=new WeakSet,mi=function(n){Zl(n,this)},bi=function(n){Ql(n,this)},wi=function(n){fi(n,this)},Xe(yi,"properties",{filterObject:{attribute:!1,type:Object},suggestions:{attribute:!1,type:Array},selectedItems:{state:!0,type:Array},query:{state:!0,type:String},showSuggestions:{state:!0,type:Boolean},highlightedIndex:{state:!0,type:Number},filteredSuggestions:{state:!0,type:Array},type:{attribute:!0,type:String},unstyled:{type:Boolean},tabIndex:{attribute:!1,type:Number},inlineMode:{attribute:"inline-mode",type:Boolean}});customElements.define("eox-itemfilter-select",yi);var ke,xi,Ln;class vi extends ie{constructor(){super();U(this,ke);this.filterObject={},this.tabIndex=0,this.inputHandler=L(this,ke,xi).bind(this),this.debouncedInputHandler=Dt(this.inputHandler,500,{leading:!1})}reset(){Vl(this)}createRenderRoot(){return this}render(){return B(this.filterObject,()=>S`
        ${L(this,ke,Ln).call(this,"min","before")}
        <tc-range-slider
          min="${this.filterObject.min}"
          max="${this.filterObject.max}"
          value1="${this.filterObject.state.min||this.filterObject.min}"
          value2="${this.filterObject.state.max||this.filterObject.max}"
          step="${this.filterObject.step||1}"
          @change=${this.debouncedInputHandler}
        ></tc-range-slider>
        ${L(this,ke,Ln).call(this,"max","after")}
      `)}}ke=new WeakSet,xi=function(n){Yl(n,this)},Ln=function(n,r){return Fl(n,r,this)},Xe(vi,"properties",{filterObject:{attribute:!1,type:Object},tabIndex:{attribute:!1,type:Number}});customElements.define("eox-itemfilter-range",vi);var Ot,_i;class uc extends ie{constructor(){super();U(this,Ot);this.filterObject={},this.tabIndex=0}static get properties(){return{filterObject:{type:Object},tabIndex:{attribute:!1,type:Number}}}reset(){nc(this)}createRenderRoot(){return this}render(){return B(this.filterObject,()=>{var n;return S`
        <form style="display: inline">
          ${Nt(["intersects","within"],r=>S`
              <label>
                <input
                  tabindex=${this.tabIndex}
                  type="radio"
                  name="mode"
                  .checked="${(this.filterObject.state.mode||"")===r||xe}"
                  value="${r}"
                  @click=${()=>L(this,Ot,_i).call(this,r)}
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
      `})}}Ot=new WeakSet,_i=function(n){ic(n,this)};customElements.define("eox-itemfilter-spatial",uc);var jt,Mi;class fc extends ie{constructor(){super();U(this,jt);this.geometry=null,this.eoxMap=null}static get properties(){return{geometry:{type:Object},eoxMap:{type:Object}}}firstUpdated(){L(this,jt,Mi).call(this)}reset(){rc(this)}render(){return S`<div id="eox-map"></div>`}}jt=new WeakSet,Mi=function(){di(this)};customElements.define("eox-itemfilter-spatial-filter",fc);function hc(e,t){t.renderRoot.querySelectorAll(".chip").forEach(n=>{n.classList.remove("highlighted")}),e.target.classList.add("highlighted"),t.requestUpdate()}function dc(e,t){const{code:n,target:r}=e;r.id==="eox-itemfilter-input-search"&&(t.parentElement.classList.contains("hidden")&&["ArrowLeft","ArrowRight","Backspace"].includes(n)||(n==="Space"&&e.preventDefault(),["Escape","Space","Enter"].includes(n)||e.stopPropagation(),["ArrowLeft","ArrowRight","Escape","Backspace"].includes(n)&&pc(n,e.target.value??"",t)))}function pc(e,t,n){const r=n.renderRoot.querySelector(".chip.highlighted");if((e==="Escape"||t)&&r&&r.classList.remove("highlighted"),e==="Backspace"&&!t){if(n.items.length){r&&(r.querySelector(".chip-item-close").click(),n.items.splice(Array.from(n.renderRoot.querySelectorAll(".chip")).indexOf(r),1));const i=n.renderRoot.querySelectorAll(".chip")[n.renderRoot.querySelectorAll(".chip").length-1];i.classList.contains("highlighted")||i.classList.add("highlighted"),n.requestUpdate()}n._dispatchEvent()}if((e==="ArrowLeft"||e==="ArrowRight")&&!t){if(n.renderRoot.querySelectorAll(".chip").length<1)return;let i=0;const o=n.renderRoot.querySelector(".chip.highlighted");o&&(i=Array.from(n.renderRoot.querySelectorAll(".chip")).indexOf(o),o.classList.remove("highlighted")),i=i+(e==="ArrowLeft"?-1:1),e==="ArrowLeft"&&i<0&&(i=n.renderRoot.querySelectorAll(".chip").length-1),e==="ArrowRight"&&i>n.renderRoot.querySelectorAll(".chip").length-1&&(i=0),Array.from(n.renderRoot.querySelectorAll(".chip"))[i].classList.add("highlighted")}}var Oe,Cn,Si;class gc extends ie{constructor(){super();U(this,Oe);this.items={},this.controller={}}static get properties(){return{items:{attribute:!1,type:Object},controller:{attribute:!1,type:Object}}}connectedCallback(){super.connectedCallback(),this.getRootNode().addEventListener("keydown",L(this,Oe,Cn).bind(this))}disconnectedCallback(){super.disconnectedCallback(),this.getRootNode().removeEventListener("keydown",L(this,Oe,Cn).bind(this))}_dispatchEvent(){this.dispatchEvent(new CustomEvent("items-selected",{detail:this.items}))}render(){return S`
      <style>
        ${nt}
      </style>
      <span class="chip-container">
        ${Nt(this.items,n=>S`
            <span class="chip" @click=${L(this,Oe,Si).bind(this)}>
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
    `}}Oe=new WeakSet,Cn=function(n){dc(n,this)},Si=function(n){hc(n,this)};customElements.define("eox-itemfilter-chips",gc);const yc=Object.freeze({aggregateResults:void 0,autoSpreadSingle:!1,enableHighlighting:!1,externalFilter:()=>{},filterProperties:[],fuseConfig:{},inlineMode:!1,matchAllWhenEmpty:!0,showResults:!0,idProperty:"id",titleProperty:"title",subTitleProperty:void 0,imageProperty:void 0,expandMultipleFilters:!0,expandResults:!0,expandMultipleResults:!0}),$r=["aggregateResults","autoSpreadSingle","enableHighlighting","externalFilter","filterProperties","fuseConfig","inlineMode","matchAllWhenEmpty","showResults","titleProperty","subTitleProperty","imageProperty","idProperty","expandMultipleFilters","expandResults","expandMultipleResults","items"];var mc=200,Nn="__lodash_hash_undefined__",bc=1/0,wc="[object Function]",vc="[object GeneratorFunction]",xc=/[\\^$.*+?()[\]{}|]/g,_c=/^\[object .+?Constructor\]$/,Mc=typeof be=="object"&&be&&be.Object===Object&&be,Sc=typeof self=="object"&&self&&self.Object===Object&&self,Dn=Mc||Sc||Function("return this")();function $c(e,t){var n=e?e.length:0;return!!n&&Lc(e,t,0)>-1}function Ac(e,t,n,r){for(var i=e.length,o=n+-1;++o<i;)if(t(e[o],o,e))return o;return-1}function Lc(e,t,n){if(t!==t)return Ac(e,Cc,n);for(var r=n-1,i=e.length;++r<i;)if(e[r]===t)return r;return-1}function Cc(e){return e!==e}function Ec(e,t){return e.has(t)}function Rc(e,t){return e==null?void 0:e[t]}function Pc(e){var t=!1;if(e!=null&&typeof e.toString!="function")try{t=!!(e+"")}catch{}return t}function $i(e){var t=-1,n=Array(e.size);return e.forEach(function(r){n[++t]=r}),n}var Tc=Array.prototype,kc=Function.prototype,Ai=Object.prototype,an=Dn["__core-js_shared__"],Ar=function(){var e=/[^.]+$/.exec(an&&an.keys&&an.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}(),Li=kc.toString,In=Ai.hasOwnProperty,Oc=Ai.toString,jc=RegExp("^"+Li.call(In).replace(xc,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Nc=Tc.splice,Dc=Bn(Dn,"Map"),ln=Bn(Dn,"Set"),et=Bn(Object,"create");function Pe(e){var t=-1,n=e?e.length:0;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function Ic(){this.__data__=et?et(null):{}}function Bc(e){return this.has(e)&&delete this.__data__[e]}function Hc(e){var t=this.__data__;if(et){var n=t[e];return n===Nn?void 0:n}return In.call(t,e)?t[e]:void 0}function qc(e){var t=this.__data__;return et?t[e]!==void 0:In.call(t,e)}function Uc(e,t){var n=this.__data__;return n[e]=et&&t===void 0?Nn:t,this}Pe.prototype.clear=Ic;Pe.prototype.delete=Bc;Pe.prototype.get=Hc;Pe.prototype.has=qc;Pe.prototype.set=Uc;function Ke(e){var t=-1,n=e?e.length:0;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function Wc(){this.__data__=[]}function Gc(e){var t=this.__data__,n=Ut(t,e);if(n<0)return!1;var r=t.length-1;return n==r?t.pop():Nc.call(t,n,1),!0}function Kc(e){var t=this.__data__,n=Ut(t,e);return n<0?void 0:t[n][1]}function zc(e){return Ut(this.__data__,e)>-1}function Vc(e,t){var n=this.__data__,r=Ut(n,e);return r<0?n.push([e,t]):n[r][1]=t,this}Ke.prototype.clear=Wc;Ke.prototype.delete=Gc;Ke.prototype.get=Kc;Ke.prototype.has=zc;Ke.prototype.set=Vc;function ze(e){var t=-1,n=e?e.length:0;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function Yc(){this.__data__={hash:new Pe,map:new(Dc||Ke),string:new Pe}}function Fc(e){return Wt(this,e).delete(e)}function Xc(e){return Wt(this,e).get(e)}function Jc(e){return Wt(this,e).has(e)}function Zc(e,t){return Wt(this,e).set(e,t),this}ze.prototype.clear=Yc;ze.prototype.delete=Fc;ze.prototype.get=Xc;ze.prototype.has=Jc;ze.prototype.set=Zc;function Rt(e){var t=-1,n=e?e.length:0;for(this.__data__=new ze;++t<n;)this.add(e[t])}function Qc(e){return this.__data__.set(e,Nn),this}function eu(e){return this.__data__.has(e)}Rt.prototype.add=Rt.prototype.push=Qc;Rt.prototype.has=eu;function Ut(e,t){for(var n=e.length;n--;)if(lu(e[n][0],t))return n;return-1}function tu(e){if(!Ci(e)||su(e))return!1;var t=cu(e)||Pc(e)?jc:_c;return t.test(ou(e))}function nu(e,t,n){var r=-1,i=$c,o=e.length,a=!0,l=[],u=l;if(o>=mc){var f=ru(e);if(f)return $i(f);a=!1,i=Ec,u=new Rt}else u=l;e:for(;++r<o;){var h=e[r],p=h;if(h=h!==0?h:0,a&&p===p){for(var y=u.length;y--;)if(u[y]===p)continue e;l.push(h)}else i(u,p,n)||(u!==l&&u.push(p),l.push(h))}return l}var ru=ln&&1/$i(new ln([,-0]))[1]==bc?function(e){return new ln(e)}:uu;function Wt(e,t){var n=e.__data__;return iu(t)?n[typeof t=="string"?"string":"hash"]:n.map}function Bn(e,t){var n=Rc(e,t);return tu(n)?n:void 0}function iu(e){var t=typeof e;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?e!=="__proto__":e===null}function su(e){return!!Ar&&Ar in e}function ou(e){if(e!=null){try{return Li.call(e)}catch{}try{return e+""}catch{}}return""}function au(e){return e&&e.length?nu(e):[]}function lu(e,t){return e===t||e!==e&&t!==t}function cu(e){var t=Ci(e)?Oc.call(e):"";return t==wc||t==vc}function Ci(e){var t=typeof e;return!!e&&(t=="object"||t=="function")}function uu(){}var fu=au;const Ei=Lr(fu);var Pt={exports:{}};Pt.exports;(function(e,t){var n=200,r="Expected a function",i="__lodash_hash_undefined__",o=1,a=2,l=1/0,u=9007199254740991,f="[object Arguments]",h="[object Array]",p="[object Boolean]",y="[object Date]",g="[object Error]",b="[object Function]",x="[object GeneratorFunction]",A="[object Map]",$="[object Number]",E="[object Object]",C="[object Promise]",O="[object RegExp]",T="[object Set]",oe="[object String]",N="[object Symbol]",V="[object WeakMap]",Z="[object ArrayBuffer]",Se="[object DataView]",Ve="[object Float32Array]",pe="[object Float64Array]",Hn="[object Int8Array]",W="[object Int16Array]",je="[object Int32Array]",it="[object Uint8Array]",ki="[object Uint8ClampedArray]",Oi="[object Uint16Array]",ji="[object Uint32Array]",Ni=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Di=/^\w*$/,Ii=/^\./,Bi=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Hi=/[\\^$.*+?()[\]{}|]/g,qi=/\\(\\)?/g,Ui=/^\[object .+?Constructor\]$/,Wi=/^(?:0|[1-9]\d*)$/,P={};P[Ve]=P[pe]=P[Hn]=P[W]=P[je]=P[it]=P[ki]=P[Oi]=P[ji]=!0,P[f]=P[h]=P[Z]=P[p]=P[Se]=P[y]=P[g]=P[b]=P[A]=P[$]=P[E]=P[O]=P[T]=P[oe]=P[V]=!1;var qn=typeof be=="object"&&be&&be.Object===Object&&be,Gi=typeof self=="object"&&self&&self.Object===Object&&self,ge=qn||Gi||Function("return this")(),Un=t&&!t.nodeType&&t,Wn=Un&&!0&&e&&!e.nodeType&&e,Ki=Wn&&Wn.exports===Un,Gn=Ki&&qn.process,Kn=function(){try{return Gn&&Gn.binding("util")}catch{}}(),zn=Kn&&Kn.isTypedArray;function zi(s,c){for(var d=-1,m=s?s.length:0,v=Array(m);++d<m;)v[d]=c(s[d],d,s);return v}function Vi(s,c){for(var d=-1,m=c.length,v=s.length;++d<m;)s[v+d]=c[d];return s}function Yi(s,c){for(var d=-1,m=s?s.length:0;++d<m;)if(c(s[d],d,s))return!0;return!1}function Fi(s){return function(c){return c==null?void 0:c[s]}}function Xi(s,c){for(var d=-1,m=Array(s);++d<s;)m[d]=c(d);return m}function Ji(s){return function(c){return s(c)}}function Zi(s,c){return s==null?void 0:s[c]}function Gt(s){var c=!1;if(s!=null&&typeof s.toString!="function")try{c=!!(s+"")}catch{}return c}function Qi(s){var c=-1,d=Array(s.size);return s.forEach(function(m,v){d[++c]=[v,m]}),d}function es(s,c){return function(d){return s(c(d))}}function ts(s){var c=-1,d=Array(s.size);return s.forEach(function(m){d[++c]=m}),d}var ns=Array.prototype,rs=Function.prototype,st=Object.prototype,Kt=ge["__core-js_shared__"],Vn=function(){var s=/[^.]+$/.exec(Kt&&Kt.keys&&Kt.keys.IE_PROTO||"");return s?"Symbol(src)_1."+s:""}(),Yn=rs.toString,ae=st.hasOwnProperty,Ne=st.toString,is=RegExp("^"+Yn.call(ae).replace(Hi,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),ot=ge.Symbol,Fn=ge.Uint8Array,ss=st.propertyIsEnumerable,os=ns.splice,Xn=ot?ot.isConcatSpreadable:void 0,as=es(Object.keys,Object),zt=De(ge,"DataView"),Ye=De(ge,"Map"),Vt=De(ge,"Promise"),Yt=De(ge,"Set"),Ft=De(ge,"WeakMap"),Fe=De(Object,"create"),ls=Ae(zt),cs=Ae(Ye),us=Ae(Vt),fs=Ae(Yt),hs=Ae(Ft),at=ot?ot.prototype:void 0,Xt=at?at.valueOf:void 0,Jn=at?at.toString:void 0;function $e(s){var c=-1,d=s?s.length:0;for(this.clear();++c<d;){var m=s[c];this.set(m[0],m[1])}}function ds(){this.__data__=Fe?Fe(null):{}}function ps(s){return this.has(s)&&delete this.__data__[s]}function gs(s){var c=this.__data__;if(Fe){var d=c[s];return d===i?void 0:d}return ae.call(c,s)?c[s]:void 0}function ys(s){var c=this.__data__;return Fe?c[s]!==void 0:ae.call(c,s)}function ms(s,c){var d=this.__data__;return d[s]=Fe&&c===void 0?i:c,this}$e.prototype.clear=ds,$e.prototype.delete=ps,$e.prototype.get=gs,$e.prototype.has=ys,$e.prototype.set=ms;function le(s){var c=-1,d=s?s.length:0;for(this.clear();++c<d;){var m=s[c];this.set(m[0],m[1])}}function bs(){this.__data__=[]}function ws(s){var c=this.__data__,d=ct(c,s);if(d<0)return!1;var m=c.length-1;return d==m?c.pop():os.call(c,d,1),!0}function vs(s){var c=this.__data__,d=ct(c,s);return d<0?void 0:c[d][1]}function xs(s){return ct(this.__data__,s)>-1}function _s(s,c){var d=this.__data__,m=ct(d,s);return m<0?d.push([s,c]):d[m][1]=c,this}le.prototype.clear=bs,le.prototype.delete=ws,le.prototype.get=vs,le.prototype.has=xs,le.prototype.set=_s;function ce(s){var c=-1,d=s?s.length:0;for(this.clear();++c<d;){var m=s[c];this.set(m[0],m[1])}}function Ms(){this.__data__={hash:new $e,map:new(Ye||le),string:new $e}}function Ss(s){return ut(this,s).delete(s)}function $s(s){return ut(this,s).get(s)}function As(s){return ut(this,s).has(s)}function Ls(s,c){return ut(this,s).set(s,c),this}ce.prototype.clear=Ms,ce.prototype.delete=Ss,ce.prototype.get=$s,ce.prototype.has=As,ce.prototype.set=Ls;function lt(s){var c=-1,d=s?s.length:0;for(this.__data__=new ce;++c<d;)this.add(s[c])}function Cs(s){return this.__data__.set(s,i),this}function Es(s){return this.__data__.has(s)}lt.prototype.add=lt.prototype.push=Cs,lt.prototype.has=Es;function ue(s){this.__data__=new le(s)}function Rs(){this.__data__=new le}function Ps(s){return this.__data__.delete(s)}function Ts(s){return this.__data__.get(s)}function ks(s){return this.__data__.has(s)}function Os(s,c){var d=this.__data__;if(d instanceof le){var m=d.__data__;if(!Ye||m.length<n-1)return m.push([s,c]),this;d=this.__data__=new ce(m)}return d.set(s,c),this}ue.prototype.clear=Rs,ue.prototype.delete=Ps,ue.prototype.get=Ts,ue.prototype.has=ks,ue.prototype.set=Os;function js(s,c){var d=fe(s)||Qt(s)?Xi(s.length,String):[],m=d.length,v=!!m;for(var w in s)ae.call(s,w)&&!(v&&(w=="length"||tr(w,m)))&&d.push(w);return d}function ct(s,c){for(var d=s.length;d--;)if(ir(s[d][0],c))return d;return-1}var Ns=Qs(Bs);function Ds(s,c,d,m,v){var w=-1,M=s.length;for(d||(d=so),v||(v=[]);++w<M;){var k=s[w];d(k)?Vi(v,k):v[v.length]=k}return v}var Is=eo();function Bs(s,c){return s&&Is(s,c,yt)}function Zn(s,c){c=ft(c,s)?[c]:Qn(c);for(var d=0,m=c.length;s!=null&&d<m;)s=s[ht(c[d++])];return d&&d==m?s:void 0}function Hs(s){return Ne.call(s)}function qs(s,c){return s!=null&&c in Object(s)}function Jt(s,c,d,m,v){return s===c?!0:s==null||c==null||!pt(s)&&!gt(c)?s!==s&&c!==c:Us(s,c,Jt,d,m,v)}function Us(s,c,d,m,v,w){var M=fe(s),k=fe(c),j=h,D=h;M||(j=ye(s),j=j==f?E:j),k||(D=ye(c),D=D==f?E:D);var H=j==E&&!Gt(s),q=D==E&&!Gt(c),I=j==D;if(I&&!H)return w||(w=new ue),M||po(s)?er(s,c,d,m,v,w):to(s,c,j,d,m,v,w);if(!(v&a)){var Y=H&&ae.call(s,"__wrapped__"),F=q&&ae.call(c,"__wrapped__");if(Y||F){var me=Y?s.value():s,he=F?c.value():c;return w||(w=new ue),d(me,he,m,v,w)}}return I?(w||(w=new ue),no(s,c,d,m,v,w)):!1}function Ws(s,c,d,m){var v=d.length,w=v;if(s==null)return!w;for(s=Object(s);v--;){var M=d[v];if(M[2]?M[1]!==s[M[0]]:!(M[0]in s))return!1}for(;++v<w;){M=d[v];var k=M[0],j=s[k],D=M[1];if(M[2]){if(j===void 0&&!(k in s))return!1}else{var H=new ue,q;if(!(q===void 0?Jt(D,j,m,o|a,H):q))return!1}}return!0}function Gs(s){if(!pt(s)||ao(s))return!1;var c=sr(s)||Gt(s)?is:Ui;return c.test(Ae(s))}function Ks(s){return gt(s)&&en(s.length)&&!!P[Ne.call(s)]}function zs(s){return typeof s=="function"?s:s==null?bo:typeof s=="object"?fe(s)?Xs(s[0],s[1]):Fs(s):wo(s)}function Vs(s){if(!lo(s))return as(s);var c=[];for(var d in Object(s))ae.call(s,d)&&d!="constructor"&&c.push(d);return c}function Ys(s,c){var d=-1,m=dt(s)?Array(s.length):[];return Ns(s,function(v,w,M){m[++d]=c(v,w,M)}),m}function Fs(s){var c=ro(s);return c.length==1&&c[0][2]?rr(c[0][0],c[0][1]):function(d){return d===s||Ws(d,s,c)}}function Xs(s,c){return ft(s)&&nr(c)?rr(ht(s),c):function(d){var m=yo(d,s);return m===void 0&&m===c?mo(d,s):Jt(c,m,void 0,o|a)}}function Js(s){return function(c){return Zn(c,s)}}function Zs(s){if(typeof s=="string")return s;if(tn(s))return Jn?Jn.call(s):"";var c=s+"";return c=="0"&&1/s==-l?"-0":c}function Qn(s){return fe(s)?s:co(s)}function Qs(s,c){return function(d,m){if(d==null)return d;if(!dt(d))return s(d,m);for(var v=d.length,w=-1,M=Object(d);++w<v&&m(M[w],w,M)!==!1;);return d}}function eo(s){return function(c,d,m){for(var v=-1,w=Object(c),M=m(c),k=M.length;k--;){var j=M[++v];if(d(w[j],j,w)===!1)break}return c}}function er(s,c,d,m,v,w){var M=v&a,k=s.length,j=c.length;if(k!=j&&!(M&&j>k))return!1;var D=w.get(s);if(D&&w.get(c))return D==c;var H=-1,q=!0,I=v&o?new lt:void 0;for(w.set(s,c),w.set(c,s);++H<k;){var Y=s[H],F=c[H];if(m)var me=M?m(F,Y,H,c,s,w):m(Y,F,H,s,c,w);if(me!==void 0){if(me)continue;q=!1;break}if(I){if(!Yi(c,function(he,Le){if(!I.has(Le)&&(Y===he||d(Y,he,m,v,w)))return I.add(Le)})){q=!1;break}}else if(!(Y===F||d(Y,F,m,v,w))){q=!1;break}}return w.delete(s),w.delete(c),q}function to(s,c,d,m,v,w,M){switch(d){case Se:if(s.byteLength!=c.byteLength||s.byteOffset!=c.byteOffset)return!1;s=s.buffer,c=c.buffer;case Z:return!(s.byteLength!=c.byteLength||!m(new Fn(s),new Fn(c)));case p:case y:case $:return ir(+s,+c);case g:return s.name==c.name&&s.message==c.message;case O:case oe:return s==c+"";case A:var k=Qi;case T:var j=w&a;if(k||(k=ts),s.size!=c.size&&!j)return!1;var D=M.get(s);if(D)return D==c;w|=o,M.set(s,c);var H=er(k(s),k(c),m,v,w,M);return M.delete(s),H;case N:if(Xt)return Xt.call(s)==Xt.call(c)}return!1}function no(s,c,d,m,v,w){var M=v&a,k=yt(s),j=k.length,D=yt(c),H=D.length;if(j!=H&&!M)return!1;for(var q=j;q--;){var I=k[q];if(!(M?I in c:ae.call(c,I)))return!1}var Y=w.get(s);if(Y&&w.get(c))return Y==c;var F=!0;w.set(s,c),w.set(c,s);for(var me=M;++q<j;){I=k[q];var he=s[I],Le=c[I];if(m)var or=M?m(Le,he,I,c,s,w):m(he,Le,I,s,c,w);if(!(or===void 0?he===Le||d(he,Le,m,v,w):or)){F=!1;break}me||(me=I=="constructor")}if(F&&!me){var mt=s.constructor,bt=c.constructor;mt!=bt&&"constructor"in s&&"constructor"in c&&!(typeof mt=="function"&&mt instanceof mt&&typeof bt=="function"&&bt instanceof bt)&&(F=!1)}return w.delete(s),w.delete(c),F}function ut(s,c){var d=s.__data__;return oo(c)?d[typeof c=="string"?"string":"hash"]:d.map}function ro(s){for(var c=yt(s),d=c.length;d--;){var m=c[d],v=s[m];c[d]=[m,v,nr(v)]}return c}function De(s,c){var d=Zi(s,c);return Gs(d)?d:void 0}var ye=Hs;(zt&&ye(new zt(new ArrayBuffer(1)))!=Se||Ye&&ye(new Ye)!=A||Vt&&ye(Vt.resolve())!=C||Yt&&ye(new Yt)!=T||Ft&&ye(new Ft)!=V)&&(ye=function(s){var c=Ne.call(s),d=c==E?s.constructor:void 0,m=d?Ae(d):void 0;if(m)switch(m){case ls:return Se;case cs:return A;case us:return C;case fs:return T;case hs:return V}return c});function io(s,c,d){c=ft(c,s)?[c]:Qn(c);for(var m,v=-1,M=c.length;++v<M;){var w=ht(c[v]);if(!(m=s!=null&&d(s,w)))break;s=s[w]}if(m)return m;var M=s?s.length:0;return!!M&&en(M)&&tr(w,M)&&(fe(s)||Qt(s))}function so(s){return fe(s)||Qt(s)||!!(Xn&&s&&s[Xn])}function tr(s,c){return c=c??u,!!c&&(typeof s=="number"||Wi.test(s))&&s>-1&&s%1==0&&s<c}function ft(s,c){if(fe(s))return!1;var d=typeof s;return d=="number"||d=="symbol"||d=="boolean"||s==null||tn(s)?!0:Di.test(s)||!Ni.test(s)||c!=null&&s in Object(c)}function oo(s){var c=typeof s;return c=="string"||c=="number"||c=="symbol"||c=="boolean"?s!=="__proto__":s===null}function ao(s){return!!Vn&&Vn in s}function lo(s){var c=s&&s.constructor,d=typeof c=="function"&&c.prototype||st;return s===d}function nr(s){return s===s&&!pt(s)}function rr(s,c){return function(d){return d==null?!1:d[s]===c&&(c!==void 0||s in Object(d))}}var co=Zt(function(s){s=go(s);var c=[];return Ii.test(s)&&c.push(""),s.replace(Bi,function(d,m,v,w){c.push(v?w.replace(qi,"$1"):m||d)}),c});function ht(s){if(typeof s=="string"||tn(s))return s;var c=s+"";return c=="0"&&1/s==-l?"-0":c}function Ae(s){if(s!=null){try{return Yn.call(s)}catch{}try{return s+""}catch{}}return""}function uo(s,c){return Ds(fo(s,c))}function fo(s,c){var d=fe(s)?zi:Ys;return d(s,zs(c))}function Zt(s,c){if(typeof s!="function"||c&&typeof c!="function")throw new TypeError(r);var d=function(){var m=arguments,v=c?c.apply(this,m):m[0],w=d.cache;if(w.has(v))return w.get(v);var M=s.apply(this,m);return d.cache=w.set(v,M),M};return d.cache=new(Zt.Cache||ce),d}Zt.Cache=ce;function ir(s,c){return s===c||s!==s&&c!==c}function Qt(s){return ho(s)&&ae.call(s,"callee")&&(!ss.call(s,"callee")||Ne.call(s)==f)}var fe=Array.isArray;function dt(s){return s!=null&&en(s.length)&&!sr(s)}function ho(s){return gt(s)&&dt(s)}function sr(s){var c=pt(s)?Ne.call(s):"";return c==b||c==x}function en(s){return typeof s=="number"&&s>-1&&s%1==0&&s<=u}function pt(s){var c=typeof s;return!!s&&(c=="object"||c=="function")}function gt(s){return!!s&&typeof s=="object"}function tn(s){return typeof s=="symbol"||gt(s)&&Ne.call(s)==N}var po=zn?Ji(zn):Ks;function go(s){return s==null?"":Zs(s)}function yo(s,c,d){var m=s==null?void 0:Zn(s,c);return m===void 0?d:m}function mo(s,c){return s!=null&&io(s,c,qs)}function yt(s){return dt(s)?js(s):Vs(s)}function bo(s){return s}function wo(s){return ft(s)?Fi(ht(s)):Js(s)}e.exports=uo})(Pt,Pt.exports);var hu=Pt.exports;const Ri=Lr(hu);function du(e,t,n){let r=[];e.filterProperties.length&&e.filterProperties.forEach(o=>{const a={},l=f=>o.format==="date"?Je(f).unix():parseFloat(f);t.forEach(f=>{var h,p;if(o.type==="range"){const y=Qe(o.key,f);if(Array.isArray(y)){const g=[l(y[0]),l(y[1])];a.min=a.min!==void 0?Math.min(a.min,g[0]):g[0],a.max=a.max!==void 0?Math.max(a.max,g[1]):g[1]}else{const g=l(y);a.min=a.min!==void 0?Math.min(a.min,g):g,a.max=a.max!==void 0?Math.max(a.max,g):g}return}Array.isArray(f[o.key])?f[o.key].forEach(y=>{a[y]=void 0}):o.type==="spatial"?(a.geometry=((h=o==null?void 0:o.state)==null?void 0:h.geometry)||void 0,a.geometry&&(o.stringifiedState=a.geometry.type),a.mode=o.mode||"intersects"):(p=o.key)!=null&&p.includes(".")?Ei(Ri(n.items,o.key)).filter(y=>y).forEach(y=>{a[y]=void 0}):a[f[o.key]]=void 0});const u=o.key||o.keys.join("|");n.filters[u]=Object.assign({type:o.type||"multiselect",dirty:o.state?Object.values(o.state).some(f=>f):void 0,key:u},o.type==="range"?{min:a.min,max:a.max,format:o.format}:{},o),n.filters[u].state=Object.assign({},a,o.state)}),e.matchAllWhenEmpty!==!1&&(n.results=n.sortResults(t),n.requestUpdate()),e.aggregateResults&&(r=Array.from(new Set(t.reduce((o,a)=>o.concat(a[e.aggregateResults]),[]))).sort((o,a)=>o.localeCompare(a)));const i=[];return Object.values(n.filters).forEach(o=>{o.type==="text"?o.keys.forEach(a=>{i.includes(a)||i.push(a)}):(o.type==="select"||o.type==="multiselect")&&(i.includes(o.key)||i.push(o.key))}),Bl(t,Object.assign({keys:i},e.fuseConfig)),r}async function pu(e,t,n){let r;n.externalFilter?r=await Wl(t,n.filters,e):r=await Hl(t,n.filters,e),n.results=n.sortResults(r)}function gu(e,t,n){const r=`filter-${e.key}`.replace("|","-");switch(e.type){case"text":return S`<eox-itemfilter-text
        data-type="filter"
        data-cy="text-filter"
        slot="filter"
        id="${r}"
        .tabIndex=${t}
        .filterObject=${e}
        .unstyled=${n.unstyled}
        @filter=${()=>n.search()}
      ></eox-itemfilter-text>`;case"multiselect":case"select":return S`
        <eox-itemfilter-select
          .inlineMode=${n.inlineMode||!1}
          data-type="filter"
          id="${r}"
          .tabIndex=${t}
          .filterObject=${e}
          slot="filter"
          .suggestions="${Ei(Ri(n.items,e.key)).filter(i=>i)}"
          type="${e.type}"
          .unstyled=${n.unstyled}
          @filter=${()=>n.search()}
        ></eox-itemfilter-select>
      `;case"range":return S`
        <eox-itemfilter-range
          id="${r}"
          data-type="filter"
          .tabIndex=${t}
          .filterObject=${e}
          slot="filter"
          .unstyled=${n.unstyled}
          @filter=${()=>n.search()}
        ></eox-itemfilter-range>
      `;case"spatial":return S`
        <eox-itemfilter-spatial
          id="${r}"
          data-type="filter"
          .tabIndex=${t}
          .filterObject=${e}
          slot="filter"
          @filter=${()=>n.search()}
        ></eox-itemfilter-spatial>
      `;default:return S``}}function yu(e,t){return[...e].sort((n,r)=>n[t.titleProperty].localeCompare(r[t.titleProperty]))}function mu(e,t,n){return S`
    ${B(e.dirty,()=>S`
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
  `}function bu(e){e.renderRoot.querySelectorAll("[data-type='filter']").forEach(t=>{typeof t.reset=="function"&&t.reset()}),e.search()}var tt,He,X,We,Pi,Ti;class wu extends ie{constructor(){super();U(this,We);U(this,tt,[]);U(this,He,[]);U(this,X,yc);this.items=null,this.filters={},this.results=[],this.selectedResult=null,this.search=Dt(this.searchHandler,100,{leading:!0}),this.aggregateResults=void 0,this.autoSpreadSingle=!1,this.enableHighlighting=!1,this.externalFilter=null,this.filterProperties=[],this.fuseConfig={},this.inlineMode=!1,this.matchAllWhenEmpty=!0,this.showResults=!0,this.titleProperty="title",this.subTitleProperty=void 0,this.imageProperty=void 0,this.idProperty="id",this.expandMultipleFilters=!0,this.expandResults=!0,this.expandMultipleResults=!0,this.resultType="list",this.unstyled=!1}static get properties(){return{items:{attribute:!1,type:Object},results:{state:!0,attribute:!1,type:Object},filters:{state:!0,attribute:!1,type:Object},selectedResult:{attribute:!1,type:Object},aggregateResults:{attribute:"aggregate-results",type:String},autoSpreadSingle:{attribute:"auto-spread-single",type:Boolean},enableHighlighting:{attribute:"enable-highlighting",type:Boolean},filterProperties:{attribute:!1,type:Array},fuseConfig:{attribute:!1,type:Object},inlineMode:{attribute:"inline-mode",type:Boolean},matchAllWhenEmpty:{attribute:"match-all-when-empty",type:Boolean},showResults:{attribute:"show-result",type:Boolean},idProperty:{attribute:"id-property",type:String},titleProperty:{attribute:"title-property",type:String},subTitleProperty:{attribute:"sub-title-property",type:String},imageProperty:{attribute:"image-property",type:String},expandMultipleFilters:{attribute:"enable-multiple-filter",type:Boolean},expandResults:{attribute:"expand-result",type:Boolean},expandMultipleResults:{attribute:"expand-multiple-results",type:Boolean},externalFilter:{attribute:!1,type:Function},resultType:{attribute:"result-type",type:String},unstyled:{type:Boolean}}}apply(){wt(this,tt,du(G(this,X),G(this,He),this)),this.search()}async searchHandler(){await pu(G(this,X),G(this,He),this),this.dispatchEvent(new CustomEvent("filter",{detail:{results:this.results,filters:this.filters},bubbles:!0,composed:!0})),this.inlineMode&&this.renderRoot.querySelector("eox-itemfilter-container").updateInline(),this.requestUpdate()}sortResults(n){return yu(n,G(this,X))}resetFilters(){bu(this)}firstUpdated(n){var i;let r={};$r.map(o=>{r={...r,[o]:this[o]}}),wt(this,X,r),wt(this,He,((i=this.items)==null?void 0:i.map((o,a)=>Object.assign({id:o[this.idProperty]||`item-${a}`},o)))||[]),this.apply()}updated(n){$r.map(r=>{if(n.has(r))return this.firstUpdated(),!0})}updateResult(n){this.selectedResult=n.detail,this.dispatchEvent(new CustomEvent("select",{detail:this.selectedResult,bubbles:!0,composed:!0})),this.requestUpdate()}render(){var n;return S`
      <style>
        ${jo}
        ${!this.unstyled&&nt}
        ${!this.unstyled&&So}
        ${this.styleOverride}
      </style>
      <form
        id="itemfilter"
        class=${this.inlineMode?"inline":xe}
        @submit="${r=>r.preventDefault()}"
      >
        ${B(this.filterProperties,()=>S`
            <eox-itemfilter-container
              .filters=${this.filters}
              .filterProperties=${this.filterProperties}
              .inlineMode=${this.inlineMode||!1}
              @reset=${()=>this.resetFilters()}
              @filter=${()=>this.search()}
            >
              <section slot="section">
                ${B(!this.inlineMode,()=>S`
                    <slot name="filterstitle"
                      ><h6 class="main-heading">Filters</h6></slot
                    >
                  `)}
                <ul id="filters">
                  ${Nt(Object.values(this.filters),(r,i)=>S` <li>
                        <eox-itemfilter-expandcontainer
                          .filterObject=${r}
                          @details-toggled=${o=>si(o,G(this,X),this)}
                          data-details="${r.key}"
                        >
                          ${L(this,We,Ti).call(this,r,Sr(i,1))}
                          ${L(this,We,Pi).call(this,r,Sr(i,2))}
                        </eox-itemfilter-expandcontainer>
                      </li>`)}
                </ul>
                ${B(!this.inlineMode&&G(this,X).filterProperties&&!this.inlineMode&&G(this,X).filterProperties&&wn(this.filters),()=>S`
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
        ${B(((n=G(this,X))==null?void 0:n.showResults)&&this.results,()=>S`
            <eox-itemfilter-results
              .config=${G(this,X)}
              .results=${this.results}
              .filters=${this.filters}
              .resultAggregation=${G(this,tt)}
              .selectedResult=${this.selectedResult}
              .resultType=${this.resultType}
              @result=${this.updateResult}
            >
              <slot name="resultstitle"
                ><h6 class="main-heading">Results</h6></slot
              >
            </eox-itemfilter-results>
          `)}
      </form>
    `}}tt=new WeakMap,He=new WeakMap,X=new WeakMap,We=new WeakSet,Pi=function(n,r){return gu(n,r,this)},Ti=function(n,r){return mu(n,r,this)};customElements.define("eox-itemfilter",wu);const vu=[".items"],xu={slot:"filterstitle",style:{margin:"14px 8px"}},_u={slot:"resultstitle",style:{margin:"14px 8px"}},Iu={__name:"EodashItemFilter",props:{enableCompare:{type:Boolean,default:!1},filtersTitle:{type:String,default:"Indicators"},resultsTitle:{type:String,default:"Results"},titleProperty:{type:String,default:"title"},aggregateResults:{type:String,default:void 0},imageProperty:{type:String,default:""},subTitleProperty:{type:String,default:""},resultType:{type:String,default:""},cssVars:{type:[String,Object],default:""},enableHighlighting:{type:Boolean,default:!0},expandMultipleFilters:{type:Boolean,default:!0},expandMultipleResults:{type:Boolean,default:!0},filterProperties:{type:Array,default:()=>[{keys:["title","themes","description"],title:"Search",type:"text"},{key:"themes",title:"Theme Filter",type:"multiselect"}]}},emits:["select"],setup(e,{emit:t}){const n=t,r=e,i=async p=>{p?(h.resetSelectedCompareSTAC(),await h.loadSelectedSTAC(p.href),n("select",p)):h.selectedStac=null},o=p=>{p&&(h.loadSelectedCompareSTAC(p.href),n("select",p))},a=async p=>{const y=p.detail;r.enableCompare?o(y):i(y)},{smAndDown:l}=_o(),u=Eo(()=>({titleProperty:r.titleProperty,enableHighlighting:r.enableHighlighting,expandMultipleFilters:r.expandMultipleFilters,expandMultipleResults:r.expandMultipleResults,subTitleProperty:r.subTitleProperty,resultType:r.resultType,imageProperty:r.imageProperty,aggregateResults:r.aggregateResults,style:r.cssVars,filterProperties:l.value?"":r.filterProperties})),f=Ro(null),h=Mo();return(p,y)=>{var g;return Oo(),Po("eox-itemfilter",To({class:"fill-height"},u.value,{ref_key:"eoxItemFilter",ref:f,style:{overflow:"auto","--background-color":"none"},onSelect:a,".items":(g=ko(h).stac)==null?void 0:g.filter(b=>b.rel==="child")}),[lr("h4",xu,cr(e.filtersTitle),1),lr("h4",_u,cr(e.resultsTitle),1)],48,vu)}}};export{Iu as default};
