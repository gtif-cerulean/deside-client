import{o as a,b as r,w as u,j as g,k as o,N as d,c as i,aC as h,I as m,K as y,e as b,F as f,C as x,T as _}from"./framework.DvYN4D0M.js";import{D as v,ba as w}from"./eo-dash.D5X-Ch81.js";import{V as k}from"./VMain-BUs3kDTd.XZZfYuIu.js";import"./theme.BR9QJcCc.js";import"./commonjsHelpers.BosuxZz1.js";import"./ssrBoot-BP7SYRyC.ajvsUmS7.js";class C extends HTMLElement{static get observedAttributes(){return["gap"]}constructor(){super(),this.attachShadow({mode:"open"}),this.render()}render(){this.shadowRoot.innerHTML=`
    <style>
      :host {
        display: grid;
        padding: ${this.getAttribute("gap")||0}px;
        height: 100%;
        box-sizing: border-box;
        gap: ${this.getAttribute("gap")||"0"}px;
        grid-template-columns: repeat(12, 1fr);
        grid-template-rows: repeat(12, 1fr);
      }
    </style>
    <slot></slot>
  `}attributeChangedCallback(s,n,t){n!==t&&(this[s]=t),this.render()}}class L extends HTMLElement{static get observedAttributes(){return["x","y","w","h"]}constructor(){super(),this.attachShadow({mode:"open"}),this.render()}render(){this.shadowRoot.innerHTML=`
      <style>
        :host {
          overflow: hidden;

          grid-column: ${parseInt(this.getAttribute("x"))+1} / span ${this.getAttribute("w")};
          grid-row: ${parseInt(this.getAttribute("y"))+1} / span ${this.getAttribute("h")};
        }
      </style>
      <slot></slot>
    `}attributeChangedCallback(s,n,t){n!==t&&(this[s]=t),this.render()}}customElements.define("eox-layout",C);customElements.define("eox-layout-item",L);const A=["gap"],$=["id","h","w","x","y"],E={__name:"DashboardLayout",setup(p){const{bgWidget:s,importedWidgets:n,gap:t}=w();return(T,D)=>(a(),r(k,null,{default:u(()=>{var c;return[g("eox-layout",{gap:o(t),style:d(`padding: ${o(t)}px`)},[(c=o(s))!=null&&c.component?(a(),i("eox-layout-item",{key:0,class:"bg-panel bg-surface",style:d(`margin: -${o(t)+1}px;`),x:"0",y:"0",h:"12",w:"12"},[(a(),r(h,{suspensible:""},{default:u(()=>{var e,l;return[(a(),r(m((e=o(s))==null?void 0:e.component),y({id:"bg-widget"},(l=o(s))==null?void 0:l.props),null,16))]}),_:1}))],4)):b("v-if",!0),(a(!0),i(f,null,x(o(n),(e,l)=>(a(),r(_,{key:l,name:"fade"},{default:u(()=>[e.value.component?(a(),i("eox-layout-item",{id:e.value.id.toString(),key:e.value.id,class:"panel bg-surface",h:e.value.layout.h,w:e.value.layout.w,x:e.value.layout.x,y:e.value.layout.y},[(a(),r(h,{suspensible:""},{default:u(()=>[(a(),r(m(e.value.component),y({key:e.value.id,ref_for:!0},e.value.props),null,16))]),_:2},1024))],8,$)):b("v-if",!0)]),_:2},1024))),128))],12,A)]}),_:1}))}},z=v(E,[["__scopeId","data-v-ebeeb1d1"]]);export{z as default};
