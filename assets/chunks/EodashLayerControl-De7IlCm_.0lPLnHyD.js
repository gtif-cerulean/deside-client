var ao=Object.defineProperty;var Pi=e=>{throw TypeError(e)};var so=(e,t,i)=>t in e?ao(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i;var k=(e,t,i)=>so(e,typeof t!="symbol"?t+"":t,i),ii=(e,t,i)=>t.has(e)||Pi("Cannot "+i);var $=(e,t,i)=>(ii(e,t,"read from private field"),i?i.call(e):t.get(e)),_=(e,t,i)=>t.has(e)?Pi("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,i),Pt=(e,t,i,n)=>(ii(e,t,"write to private field"),n?n.call(e,i):t.set(e,i),i),M=(e,t,i)=>(ii(e,t,"access private method"),i);import{x as m,E as nt,T as Kt,r as ot,i as Ci,b as ht,u as lo,f as co}from"./lit-element.Cu4xVypU.js";import{n as F}from"./when.BR7zwNJC.js";import{c as uo,d as zt}from"./repeat.BiCh9U-B.js";import{e as en,i as nn,t as kt}from"./directive.CF8sV3Lr.js";import{f as ho,m as po}from"./directive-helpers.Hs5M0JDY.js";import{o as be,a as fo}from"./map.Co3hxIo-.js";import{c as Ht,g as $i}from"./commonjsHelpers.BosuxZz1.js";import{b as on,r as go,c as rn,s as mo}from"./slider.C9BfjtDw.js";import{_ as yo}from"./index.D_Wsj7oq.js";import{g as mi}from"./getElement.D3H5zNCD.js";import{s as vo,l as yi,i as an,q as bo,t as wo,o as xo,p as So,f as Eo}from"./sequential.C7XBCmdy.js";import{L as Ii}from"./Group.DmZitiGT.js";import"./all.style.BXiFe-7i.js";import{s as Co,u as $o,f as To,e as _o,g as Vi,h as Bi,j as Ao}from"./eo-dash.D5X-Ch81.js";import{h as Lo,p as Do,c as Ni,K as Ro,k as ko,e as Mo,o as Hi}from"./framework.DvYN4D0M.js";import"./index.BlmzfcAG.js";import"./theme.BR9QJcCc.js";/**
 * wms-capabilities @0.6.0
 * @description WMS service Capabilities > JSON, based on openlayers 
 * @license BSD-2-Clause
 * @preserve
 */var S=e=>e!==void 0,sn=(e,t,i)=>t in e?e[t]:e[t]=i;const se={ELEMENT:1,ATTRIBUTE:2,TEXT:3,CDATA_SECTION:4,ENTITY_REFERENCE:5,ENTITY:6,PROCESSING_INSTRUCTION:7,COMMENT:8,DOCUMENT:9,DOCUMENT_TYPE:10,DOCUMENT_FRAGMENT:11,NOTATION:12};class Oo{constructor(t){this._parser=new t}toDocument(t){return this._parser.parseFromString(t,"application/xml")}getAllTextContent(t,i){return ti(t,i).join("")}}function ti(e,t){return ln(e,t,[]).join("")}function ln(e,t,i){if(e.nodeType===se.CDATA_SECTION||e.nodeType===se.TEXT)t?i.push(String(e.nodeValue).replace(/(\r\n|\r|\n)/g,"")):i.push(e.nodeValue);else{var n;for(n=e.firstChild;n;n=n.nextSibling)ln(n,t,i)}return i}function Po(e,t,i,n){for(var o=Io(t);o;o=Vo(o)){var r=o.namespaceURI||null,a=e[r];if(S(a)){var s=a[o.localName];S(s)&&s.call(n,o,i)}}}function Io(e){let t=e.firstElementChild||e.firstChild;for(;t&&t.nodeType!==se.ELEMENT;)t=t.nextSibling;return t}function Vo(e){let t=e.nextElementSibling||e.nextSibling;for(;t&&t.nodeType!==se.ELEMENT;)t=t.nextSibling;return t}function Z(e,t,i){return Bo(e,t,i)}function Bo(e,t,i){var n=S(i)?i:{},o,r;for(o=0,r=e.length;o<r;++o)n[e[o]]=t;return n}function cn(e,t){return function(i,n){var o=e.call(S(t)?t:this,i,n);if(S(o)){var r=n[n.length-1];r.push(o)}}}function j(e,t,i,n,o){return n.push(e),Po(t,i,n,o),n.pop()}function f(e,t,i){return function(n,o){let r=e.call(S(i)?i:this,n,o);if(S(r)){var a=o[o.length-1],s=S(t)?t:n.localName;a[s]=r}}}function et(e,t,i){return function(n,o){var r=e.call(S(i)?i:this,n,o);if(S(r)){var a=o[o.length-1],s=S(t)?t:n.localName,l=sn(a,s,[]);l.push(r)}}}const No=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;function Ho(e){return e.replace(No,"")}function Ot(e){const t=/^\s*(true|1)|(false|0)\s*$/.exec(e);if(t)return S(t[1])||!1}function Ft(e){return vt(ti(e,!1))}function vt(e){const t=/^\s*([+\-]?\d*\.?\d+(?:e[+\-]?\d+)?)\s*$/i.exec(e);if(t)return parseFloat(t[1])}function ni(e){return Te(ti(e,!1))}function Te(e){const t=/^\s*(\d+)\s*$/.exec(e);if(t)return parseInt(t[1],10)}function T(e){return Ho(ti(e,!1))}const Fo="http://www.w3.org/1999/xlink";function Ti(e){return e.getAttributeNS(Fo,"href")}function Uo(e,t){return j({},gr,e,t)}function dn(e){return[vt(e.getAttribute("minx")),vt(e.getAttribute("miny")),vt(e.getAttribute("maxx")),vt(e.getAttribute("maxy"))]}function zo(e,t){const i=dn(e),n=[vt(e.getAttribute("resx")),vt(e.getAttribute("resy"))];return{crs:e.getAttribute("CRS")||e.getAttribute("SRS"),extent:i,res:n}}function jo(e,t){const i=dn(e);if(!(!S(i[0])||!S(i[1])||!S(i[2])||!S(i[3])))return i}function Yo(e,t){const i=parseFloat(e.getAttribute("min")),n=parseFloat(e.getAttribute("max"));return{min:i,max:n}}function qo(e,t){const i=j({},mr,e,t);if(!S(i))return;const n=i.westBoundLongitude,o=i.southBoundLatitude,r=i.eastBoundLongitude,a=i.northBoundLatitude;if(!(!S(n)||!S(o)||!S(r)||!S(a)))return[n,o,r,a]}function Zo(e,t){return j({},cr,e,t)}function Xo(e,t){return j({},dr,e,t)}function Wo(e,t){return j({},ur,e,t)}function Go(e,t){return j({},hr,e,t)}function Jo(e,t){return j({},pr,e,t)}function Ko(e,t){return j([],fr,e,t)}function Qo(e,t){const i=Ot(e.getAttribute("queryable"));return j({queryable:S(i)?i:!1},pn,e,t)}function tr(e,t){var i=t[t.length-1];const n=j({},pn,e,t);if(!S(n))return;let o=Ot(e.getAttribute("queryable"));S(o)||(o=i.queryable),n.queryable=S(o)?o:!1;let r=Te(e.getAttribute("cascaded"));S(r)||(r=i.cascaded),n.cascaded=r;let a=Ot(e.getAttribute("opaque"));S(a)||(a=i.opaque),n.opaque=S(a)?a:!1;let s=Ot(e.getAttribute("noSubsets"));S(s)||(s=i.noSubsets),n.noSubsets=S(s)?s:!1;let l=vt(e.getAttribute("fixedWidth"));S(l)||(l=i.fixedWidth),n.fixedWidth=l;let c=vt(e.getAttribute("fixedHeight"));S(c)||(c=i.fixedHeight),n.fixedHeight=c;const u=["Style","CRS","AuthorityURL"];for(let p=0,g=u.length;p<g;p++){const y=u[p],v=i[y];if(S(v)){let L=sn(n,y,[]);L=L.concat(v),n[y]=L}}const d=["EX_GeographicBoundingBox","BoundingBox","Dimension","Attribution","MinScaleDenominator","MaxScaleDenominator"];for(let p=0,g=d.length;p<g;p++){const y=d[p],v=n[y];if(!S(v)){const L=i[y];n[y]=L}}return n}function er(e,t){return{name:e.getAttribute("name"),units:e.getAttribute("units"),unitSymbol:e.getAttribute("unitSymbol"),default:e.getAttribute("default"),multipleValues:Ot(e.getAttribute("multipleValues")),nearestValue:Ot(e.getAttribute("nearestValue")),current:Ot(e.getAttribute("current")),values:T(e)}}function wt(e,t){return j({},Sr,e,t)}function ir(e,t){return j({},yr,e,t)}function nr(e,t){return j({},br,e,t)}function or(e,t){return j({},wr,e,t)}function oi(e,t){return j({},vr,e,t)}function un(e,t){var i=wt(e,t);if(S(i)){const n=[Te(e.getAttribute("width")),Te(e.getAttribute("height"))];return i.size=n,i}}function rr(e,t){var i=wt(e,t);if(S(i))return i.name=e.getAttribute("name"),i}function ar(e,t){var i=wt(e,t);if(S(i))return i.type=e.getAttribute("type"),i}function sr(e,t){return j({},xr,e,t)}function hn(e,t){return j([],Er,e,t)}const X=[null,"http://www.opengis.net/wms"],lr=Z(X,{Service:f(Xo),Capability:f(Zo)}),cr=Z(X,{Request:f(ir),Exception:f(Ko),Layer:f(Qo)}),dr=Z(X,{Name:f(T),Title:f(T),Abstract:f(T),KeywordList:f(hn),OnlineResource:f(Ti),ContactInformation:f(Wo),Fees:f(T),AccessConstraints:f(T),LayerLimit:f(ni),MaxWidth:f(ni),MaxHeight:f(ni)}),ur=Z(X,{ContactPersonPrimary:f(Go),ContactPosition:f(T),ContactAddress:f(Jo),ContactVoiceTelephone:f(T),ContactFacsimileTelephone:f(T),ContactElectronicMailAddress:f(T)}),hr=Z(X,{ContactPerson:f(T),ContactOrganization:f(T)}),pr=Z(X,{AddressType:f(T),Address:f(T),City:f(T),StateOrProvince:f(T),PostCode:f(T),Country:f(T)}),fr=Z(X,{Format:cn(T)}),pn=Z(X,{Name:f(T),Title:f(T),Abstract:f(T),KeywordList:f(hn),CRS:et(T),SRS:et(T),EX_GeographicBoundingBox:f(qo),LatLonBoundingBox:f(jo),BoundingBox:et(zo),Dimension:et(er),Attribution:f(Uo),AuthorityURL:et(rr),Identifier:et(T),MetadataURL:et(ar),DataURL:et(wt),FeatureListURL:et(wt),Style:et(sr),MinScaleDenominator:f(Ft),MaxScaleDenominator:f(Ft),ScaleHint:f(Yo),Layer:et(tr)}),gr=Z(X,{Title:f(T),OnlineResource:f(Ti),LogoURL:f(un)}),mr=Z(X,{westBoundLongitude:f(Ft),eastBoundLongitude:f(Ft),southBoundLatitude:f(Ft),northBoundLatitude:f(Ft)}),yr=Z(X,{GetCapabilities:f(oi),GetMap:f(oi),GetFeatureInfo:f(oi)}),vr=Z(X,{Format:et(T),DCPType:et(nr)}),br=Z(X,{HTTP:f(or)}),wr=Z(X,{Get:f(wt),Post:f(wt)}),xr=Z(X,{Name:f(T),Title:f(T),Abstract:f(T),LegendURL:et(un),StyleSheetURL:f(wt),StyleURL:f(wt)}),Sr=Z(X,{Format:f(T),OnlineResource:f(Ti)}),Er=Z(X,{Keyword:cn(T)});class Cr{constructor(t,i){!i&&typeof window<"u"&&(i=window.DOMParser),this.version=void 0,this._parser=new Oo(i),this._data=t}data(t){return this._data=t,this}toJSON(t){return t=t||this._data,this.parse(t)}parse(t){return this.readFromDocument(this._parser.toDocument(t))}readFromDocument(t){for(let i=t.firstChild;i;i=i.nextSibling)if(i.nodeType==se.ELEMENT)return this.readFromNode(i);return null}readFromNode(t){return this.version=t.getAttribute("version"),j({version:this.version},lr,t,[])||null}}async function $r(e){let t=new URL(e),i=t.searchParams;i.set("SERVICE","WMS"),i.set("REQUEST","GetCapabilities");let n=t.toString();const o=await fetch(n);if(o.ok){const r=await o.text();return new Cr(r).toJSON()}else throw new Error(`Error: ${o.status}`)}function _i(e){const t=/\b(?:wms|ows)\b/i,i=/{(?:z|x|y-?)}\/{(?:z|x|y-?)}\/{(?:z|x|y-?)}/i;return t.test(e)?"TileWMS":i.test(e)?"XYZ":!1}function Tr(e){const i=/^(?:(?:https?|ftp):\/\/|\/\/)?(?:localhost|\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}|(?:\w+[\w-]*\.)+\w+)(?::\d+)?(?:\/\S*)?$/.test(e),n=_i(e);return!!(e&&i&&n)}function fn(e){return e.replace(/(['"])?([a-zA-Z0-9_]+)(['"])?:/g,'"$2": ').replace(/,\s*}/g,"}").replace(/,\s*]/g,"]").replace(/\s*(\{|}|\[|\]|,)\s*/g,"$1").replaceAll('": //',"://")}function _r(e){try{return JSON.parse(fn(e)),!!e}catch{return!1}}function Ar(e,t){const i=new URL(e).searchParams;Object.entries(t).forEach(([a,s])=>{typeof s=="object"&&!Array.isArray(s)&&s!==null?Object.keys(s).forEach(l=>{i.set(l,s[l])}):i.set(a,s)});const n=e.split("?")[0],o=i.toString();return`${n}?${o}`}/**!
 * Sortable 1.15.6
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */function Fi(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),i.push.apply(i,n)}return i}function gt(e){for(var t=1;t<arguments.length;t++){var i=arguments[t]!=null?arguments[t]:{};t%2?Fi(Object(i),!0).forEach(function(n){Lr(e,n,i[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):Fi(Object(i)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))})}return e}function we(e){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?we=function(t){return typeof t}:we=function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},we(e)}function Lr(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function xt(){return xt=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e},xt.apply(this,arguments)}function Dr(e,t){if(e==null)return{};var i={},n=Object.keys(e),o,r;for(r=0;r<n.length;r++)o=n[r],!(t.indexOf(o)>=0)&&(i[o]=e[o]);return i}function Rr(e,t){if(e==null)return{};var i=Dr(e,t),n,o;if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var kr="1.15.6";function bt(e){if(typeof window<"u"&&window.navigator)return!!navigator.userAgent.match(e)}var St=bt(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i),ue=bt(/Edge/i),Ui=bt(/firefox/i),ie=bt(/safari/i)&&!bt(/chrome/i)&&!bt(/android/i),Ai=bt(/iP(ad|od|hone)/i),gn=bt(/chrome/i)&&bt(/android/i),mn={capture:!1,passive:!1};function C(e,t,i){e.addEventListener(t,i,!St&&mn)}function E(e,t,i){e.removeEventListener(t,i,!St&&mn)}function _e(e,t){if(t){if(t[0]===">"&&(t=t.substring(1)),e)try{if(e.matches)return e.matches(t);if(e.msMatchesSelector)return e.msMatchesSelector(t);if(e.webkitMatchesSelector)return e.webkitMatchesSelector(t)}catch{return!1}return!1}}function yn(e){return e.host&&e!==document&&e.host.nodeType?e.host:e.parentNode}function ut(e,t,i,n){if(e){i=i||document;do{if(t!=null&&(t[0]===">"?e.parentNode===i&&_e(e,t):_e(e,t))||n&&e===i)return e;if(e===i)break}while(e=yn(e))}return null}var zi=/\s+/g;function rt(e,t,i){if(e&&t)if(e.classList)e.classList[i?"add":"remove"](t);else{var n=(" "+e.className+" ").replace(zi," ").replace(" "+t+" "," ");e.className=(n+(i?" "+t:"")).replace(zi," ")}}function b(e,t,i){var n=e&&e.style;if(n){if(i===void 0)return document.defaultView&&document.defaultView.getComputedStyle?i=document.defaultView.getComputedStyle(e,""):e.currentStyle&&(i=e.currentStyle),t===void 0?i:i[t];!(t in n)&&t.indexOf("webkit")===-1&&(t="-webkit-"+t),n[t]=i+(typeof i=="string"?"":"px")}}function jt(e,t){var i="";if(typeof e=="string")i=e;else do{var n=b(e,"transform");n&&n!=="none"&&(i=n+" "+i)}while(!t&&(e=e.parentNode));var o=window.DOMMatrix||window.WebKitCSSMatrix||window.CSSMatrix||window.MSCSSMatrix;return o&&new o(i)}function vn(e,t,i){if(e){var n=e.getElementsByTagName(t),o=0,r=n.length;if(i)for(;o<r;o++)i(n[o],o);return n}return[]}function ft(){var e=document.scrollingElement;return e||document.documentElement}function H(e,t,i,n,o){if(!(!e.getBoundingClientRect&&e!==window)){var r,a,s,l,c,u,d;if(e!==window&&e.parentNode&&e!==ft()?(r=e.getBoundingClientRect(),a=r.top,s=r.left,l=r.bottom,c=r.right,u=r.height,d=r.width):(a=0,s=0,l=window.innerHeight,c=window.innerWidth,u=window.innerHeight,d=window.innerWidth),(t||i)&&e!==window&&(o=o||e.parentNode,!St))do if(o&&o.getBoundingClientRect&&(b(o,"transform")!=="none"||i&&b(o,"position")!=="static")){var p=o.getBoundingClientRect();a-=p.top+parseInt(b(o,"border-top-width")),s-=p.left+parseInt(b(o,"border-left-width")),l=a+r.height,c=s+r.width;break}while(o=o.parentNode);if(n&&e!==window){var g=jt(o||e),y=g&&g.a,v=g&&g.d;g&&(a/=v,s/=y,d/=y,u/=v,l=a+u,c=s+d)}return{top:a,left:s,bottom:l,right:c,width:d,height:u}}}function ji(e,t,i){for(var n=At(e,!0),o=H(e)[t];n;){var r=H(n)[i],a=void 0;if(a=o>=r,!a)return n;if(n===ft())break;n=At(n,!1)}return!1}function qt(e,t,i,n){for(var o=0,r=0,a=e.children;r<a.length;){if(a[r].style.display!=="none"&&a[r]!==w.ghost&&(n||a[r]!==w.dragged)&&ut(a[r],i.draggable,e,!1)){if(o===t)return a[r];o++}r++}return null}function Li(e,t){for(var i=e.lastElementChild;i&&(i===w.ghost||b(i,"display")==="none"||t&&!_e(i,t));)i=i.previousElementSibling;return i||null}function st(e,t){var i=0;if(!e||!e.parentNode)return-1;for(;e=e.previousElementSibling;)e.nodeName.toUpperCase()!=="TEMPLATE"&&e!==w.clone&&(!t||_e(e,t))&&i++;return i}function Yi(e){var t=0,i=0,n=ft();if(e)do{var o=jt(e),r=o.a,a=o.d;t+=e.scrollLeft*r,i+=e.scrollTop*a}while(e!==n&&(e=e.parentNode));return[t,i]}function Mr(e,t){for(var i in e)if(e.hasOwnProperty(i)){for(var n in t)if(t.hasOwnProperty(n)&&t[n]===e[i][n])return Number(i)}return-1}function At(e,t){if(!e||!e.getBoundingClientRect)return ft();var i=e,n=!1;do if(i.clientWidth<i.scrollWidth||i.clientHeight<i.scrollHeight){var o=b(i);if(i.clientWidth<i.scrollWidth&&(o.overflowX=="auto"||o.overflowX=="scroll")||i.clientHeight<i.scrollHeight&&(o.overflowY=="auto"||o.overflowY=="scroll")){if(!i.getBoundingClientRect||i===document.body)return ft();if(n||t)return i;n=!0}}while(i=i.parentNode);return ft()}function Or(e,t){if(e&&t)for(var i in t)t.hasOwnProperty(i)&&(e[i]=t[i]);return e}function ri(e,t){return Math.round(e.top)===Math.round(t.top)&&Math.round(e.left)===Math.round(t.left)&&Math.round(e.height)===Math.round(t.height)&&Math.round(e.width)===Math.round(t.width)}var ne;function bn(e,t){return function(){if(!ne){var i=arguments,n=this;i.length===1?e.call(n,i[0]):e.apply(n,i),ne=setTimeout(function(){ne=void 0},t)}}}function Pr(){clearTimeout(ne),ne=void 0}function wn(e,t,i){e.scrollLeft+=t,e.scrollTop+=i}function xn(e){var t=window.Polymer,i=window.jQuery||window.Zepto;return t&&t.dom?t.dom(e).cloneNode(!0):i?i(e).clone(!0)[0]:e.cloneNode(!0)}function Sn(e,t,i){var n={};return Array.from(e.children).forEach(function(o){var r,a,s,l;if(!(!ut(o,t.draggable,e,!1)||o.animated||o===i)){var c=H(o);n.left=Math.min((r=n.left)!==null&&r!==void 0?r:1/0,c.left),n.top=Math.min((a=n.top)!==null&&a!==void 0?a:1/0,c.top),n.right=Math.max((s=n.right)!==null&&s!==void 0?s:-1/0,c.right),n.bottom=Math.max((l=n.bottom)!==null&&l!==void 0?l:-1/0,c.bottom)}}),n.width=n.right-n.left,n.height=n.bottom-n.top,n.x=n.left,n.y=n.top,n}var it="Sortable"+new Date().getTime();function Ir(){var e=[],t;return{captureAnimationState:function(){if(e=[],!!this.options.animation){var n=[].slice.call(this.el.children);n.forEach(function(o){if(!(b(o,"display")==="none"||o===w.ghost)){e.push({target:o,rect:H(o)});var r=gt({},e[e.length-1].rect);if(o.thisAnimationDuration){var a=jt(o,!0);a&&(r.top-=a.f,r.left-=a.e)}o.fromRect=r}})}},addAnimationState:function(n){e.push(n)},removeAnimationState:function(n){e.splice(Mr(e,{target:n}),1)},animateAll:function(n){var o=this;if(!this.options.animation){clearTimeout(t),typeof n=="function"&&n();return}var r=!1,a=0;e.forEach(function(s){var l=0,c=s.target,u=c.fromRect,d=H(c),p=c.prevFromRect,g=c.prevToRect,y=s.rect,v=jt(c,!0);v&&(d.top-=v.f,d.left-=v.e),c.toRect=d,c.thisAnimationDuration&&ri(p,d)&&!ri(u,d)&&(y.top-d.top)/(y.left-d.left)===(u.top-d.top)/(u.left-d.left)&&(l=Br(y,p,g,o.options)),ri(d,u)||(c.prevFromRect=u,c.prevToRect=d,l||(l=o.options.animation),o.animate(c,y,d,l)),l&&(r=!0,a=Math.max(a,l),clearTimeout(c.animationResetTimer),c.animationResetTimer=setTimeout(function(){c.animationTime=0,c.prevFromRect=null,c.fromRect=null,c.prevToRect=null,c.thisAnimationDuration=null},l),c.thisAnimationDuration=l)}),clearTimeout(t),r?t=setTimeout(function(){typeof n=="function"&&n()},a):typeof n=="function"&&n(),e=[]},animate:function(n,o,r,a){if(a){b(n,"transition",""),b(n,"transform","");var s=jt(this.el),l=s&&s.a,c=s&&s.d,u=(o.left-r.left)/(l||1),d=(o.top-r.top)/(c||1);n.animatingX=!!u,n.animatingY=!!d,b(n,"transform","translate3d("+u+"px,"+d+"px,0)"),this.forRepaintDummy=Vr(n),b(n,"transition","transform "+a+"ms"+(this.options.easing?" "+this.options.easing:"")),b(n,"transform","translate3d(0,0,0)"),typeof n.animated=="number"&&clearTimeout(n.animated),n.animated=setTimeout(function(){b(n,"transition",""),b(n,"transform",""),n.animated=!1,n.animatingX=!1,n.animatingY=!1},a)}}}}function Vr(e){return e.offsetWidth}function Br(e,t,i,n){return Math.sqrt(Math.pow(t.top-e.top,2)+Math.pow(t.left-e.left,2))/Math.sqrt(Math.pow(t.top-i.top,2)+Math.pow(t.left-i.left,2))*n.animation}var It=[],ai={initializeByDefault:!0},he={mount:function(t){for(var i in ai)ai.hasOwnProperty(i)&&!(i in t)&&(t[i]=ai[i]);It.forEach(function(n){if(n.pluginName===t.pluginName)throw"Sortable: Cannot mount plugin ".concat(t.pluginName," more than once")}),It.push(t)},pluginEvent:function(t,i,n){var o=this;this.eventCanceled=!1,n.cancel=function(){o.eventCanceled=!0};var r=t+"Global";It.forEach(function(a){i[a.pluginName]&&(i[a.pluginName][r]&&i[a.pluginName][r](gt({sortable:i},n)),i.options[a.pluginName]&&i[a.pluginName][t]&&i[a.pluginName][t](gt({sortable:i},n)))})},initializePlugins:function(t,i,n,o){It.forEach(function(s){var l=s.pluginName;if(!(!t.options[l]&&!s.initializeByDefault)){var c=new s(t,i,t.options);c.sortable=t,c.options=t.options,t[l]=c,xt(n,c.defaults)}});for(var r in t.options)if(t.options.hasOwnProperty(r)){var a=this.modifyOption(t,r,t.options[r]);typeof a<"u"&&(t.options[r]=a)}},getEventProperties:function(t,i){var n={};return It.forEach(function(o){typeof o.eventProperties=="function"&&xt(n,o.eventProperties.call(i[o.pluginName],t))}),n},modifyOption:function(t,i,n){var o;return It.forEach(function(r){t[r.pluginName]&&r.optionListeners&&typeof r.optionListeners[i]=="function"&&(o=r.optionListeners[i].call(t[r.pluginName],n))}),o}};function Nr(e){var t=e.sortable,i=e.rootEl,n=e.name,o=e.targetEl,r=e.cloneEl,a=e.toEl,s=e.fromEl,l=e.oldIndex,c=e.newIndex,u=e.oldDraggableIndex,d=e.newDraggableIndex,p=e.originalEvent,g=e.putSortable,y=e.extraEventProperties;if(t=t||i&&i[it],!!t){var v,L=t.options,P="on"+n.charAt(0).toUpperCase()+n.substr(1);window.CustomEvent&&!St&&!ue?v=new CustomEvent(n,{bubbles:!0,cancelable:!0}):(v=document.createEvent("Event"),v.initEvent(n,!0,!0)),v.to=a||i,v.from=s||i,v.item=o||i,v.clone=r,v.oldIndex=l,v.newIndex=c,v.oldDraggableIndex=u,v.newDraggableIndex=d,v.originalEvent=p,v.pullMode=g?g.lastPutMode:void 0;var I=gt(gt({},y),he.getEventProperties(n,t));for(var B in I)v[B]=I[B];i&&i.dispatchEvent(v),L[P]&&L[P].call(t,v)}}var Hr=["evt"],tt=function(t,i){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},o=n.evt,r=Rr(n,Hr);he.pluginEvent.bind(w)(t,i,gt({dragEl:h,parentEl:O,ghostEl:x,rootEl:D,nextEl:Mt,lastDownEl:xe,cloneEl:R,cloneHidden:Tt,dragStarted:Qt,putSortable:Y,activeSortable:w.active,originalEvent:o,oldIndex:Ut,oldDraggableIndex:oe,newIndex:at,newDraggableIndex:$t,hideGhostForTarget:Tn,unhideGhostForTarget:_n,cloneNowHidden:function(){Tt=!0},cloneNowShown:function(){Tt=!1},dispatchSortableEvent:function(s){Q({sortable:i,name:s,originalEvent:o})}},r))};function Q(e){Nr(gt({putSortable:Y,cloneEl:R,targetEl:h,rootEl:D,oldIndex:Ut,oldDraggableIndex:oe,newIndex:at,newDraggableIndex:$t},e))}var h,O,x,D,Mt,xe,R,Tt,Ut,at,oe,$t,fe,Y,Bt=!1,Ae=!1,Le=[],Dt,dt,si,li,qi,Zi,Qt,Vt,re,ae=!1,ge=!1,Se,K,ci=[],vi=!1,De=[],ei=typeof document<"u",me=Ai,Xi=ue||St?"cssFloat":"float",Fr=ei&&!gn&&!Ai&&"draggable"in document.createElement("div"),En=function(){if(ei){if(St)return!1;var e=document.createElement("x");return e.style.cssText="pointer-events:auto",e.style.pointerEvents==="auto"}}(),Cn=function(t,i){var n=b(t),o=parseInt(n.width)-parseInt(n.paddingLeft)-parseInt(n.paddingRight)-parseInt(n.borderLeftWidth)-parseInt(n.borderRightWidth),r=qt(t,0,i),a=qt(t,1,i),s=r&&b(r),l=a&&b(a),c=s&&parseInt(s.marginLeft)+parseInt(s.marginRight)+H(r).width,u=l&&parseInt(l.marginLeft)+parseInt(l.marginRight)+H(a).width;if(n.display==="flex")return n.flexDirection==="column"||n.flexDirection==="column-reverse"?"vertical":"horizontal";if(n.display==="grid")return n.gridTemplateColumns.split(" ").length<=1?"vertical":"horizontal";if(r&&s.float&&s.float!=="none"){var d=s.float==="left"?"left":"right";return a&&(l.clear==="both"||l.clear===d)?"vertical":"horizontal"}return r&&(s.display==="block"||s.display==="flex"||s.display==="table"||s.display==="grid"||c>=o&&n[Xi]==="none"||a&&n[Xi]==="none"&&c+u>o)?"vertical":"horizontal"},Ur=function(t,i,n){var o=n?t.left:t.top,r=n?t.right:t.bottom,a=n?t.width:t.height,s=n?i.left:i.top,l=n?i.right:i.bottom,c=n?i.width:i.height;return o===s||r===l||o+a/2===s+c/2},zr=function(t,i){var n;return Le.some(function(o){var r=o[it].options.emptyInsertThreshold;if(!(!r||Li(o))){var a=H(o),s=t>=a.left-r&&t<=a.right+r,l=i>=a.top-r&&i<=a.bottom+r;if(s&&l)return n=o}}),n},$n=function(t){function i(r,a){return function(s,l,c,u){var d=s.options.group.name&&l.options.group.name&&s.options.group.name===l.options.group.name;if(r==null&&(a||d))return!0;if(r==null||r===!1)return!1;if(a&&r==="clone")return r;if(typeof r=="function")return i(r(s,l,c,u),a)(s,l,c,u);var p=(a?s:l).options.group.name;return r===!0||typeof r=="string"&&r===p||r.join&&r.indexOf(p)>-1}}var n={},o=t.group;(!o||we(o)!="object")&&(o={name:o}),n.name=o.name,n.checkPull=i(o.pull,!0),n.checkPut=i(o.put),n.revertClone=o.revertClone,t.group=n},Tn=function(){!En&&x&&b(x,"display","none")},_n=function(){!En&&x&&b(x,"display","")};ei&&!gn&&document.addEventListener("click",function(e){if(Ae)return e.preventDefault(),e.stopPropagation&&e.stopPropagation(),e.stopImmediatePropagation&&e.stopImmediatePropagation(),Ae=!1,!1},!0);var Rt=function(t){if(h){t=t.touches?t.touches[0]:t;var i=zr(t.clientX,t.clientY);if(i){var n={};for(var o in t)t.hasOwnProperty(o)&&(n[o]=t[o]);n.target=n.rootEl=i,n.preventDefault=void 0,n.stopPropagation=void 0,i[it]._onDragOver(n)}}},jr=function(t){h&&h.parentNode[it]._isOutsideThisEl(t.target)};function w(e,t){if(!(e&&e.nodeType&&e.nodeType===1))throw"Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(e));this.el=e,this.options=t=xt({},t),e[it]=this;var i={group:null,sort:!0,disabled:!1,store:null,handle:null,draggable:/^[uo]l$/i.test(e.nodeName)?">li":">*",swapThreshold:1,invertSwap:!1,invertedSwapThreshold:null,removeCloneOnHide:!0,direction:function(){return Cn(e,this.options)},ghostClass:"sortable-ghost",chosenClass:"sortable-chosen",dragClass:"sortable-drag",ignore:"a, img",filter:null,preventOnFilter:!0,animation:0,easing:null,setData:function(a,s){a.setData("Text",s.textContent)},dropBubble:!1,dragoverBubble:!1,dataIdAttr:"data-id",delay:0,delayOnTouchOnly:!1,touchStartThreshold:(Number.parseInt?Number:window).parseInt(window.devicePixelRatio,10)||1,forceFallback:!1,fallbackClass:"sortable-fallback",fallbackOnBody:!1,fallbackTolerance:0,fallbackOffset:{x:0,y:0},supportPointer:w.supportPointer!==!1&&"PointerEvent"in window&&(!ie||Ai),emptyInsertThreshold:5};he.initializePlugins(this,e,i);for(var n in i)!(n in t)&&(t[n]=i[n]);$n(t);for(var o in this)o.charAt(0)==="_"&&typeof this[o]=="function"&&(this[o]=this[o].bind(this));this.nativeDraggable=t.forceFallback?!1:Fr,this.nativeDraggable&&(this.options.touchStartThreshold=1),t.supportPointer?C(e,"pointerdown",this._onTapStart):(C(e,"mousedown",this._onTapStart),C(e,"touchstart",this._onTapStart)),this.nativeDraggable&&(C(e,"dragover",this),C(e,"dragenter",this)),Le.push(this.el),t.store&&t.store.get&&this.sort(t.store.get(this)||[]),xt(this,Ir())}w.prototype={constructor:w,_isOutsideThisEl:function(t){!this.el.contains(t)&&t!==this.el&&(Vt=null)},_getDirection:function(t,i){return typeof this.options.direction=="function"?this.options.direction.call(this,t,i,h):this.options.direction},_onTapStart:function(t){if(t.cancelable){var i=this,n=this.el,o=this.options,r=o.preventOnFilter,a=t.type,s=t.touches&&t.touches[0]||t.pointerType&&t.pointerType==="touch"&&t,l=(s||t).target,c=t.target.shadowRoot&&(t.path&&t.path[0]||t.composedPath&&t.composedPath()[0])||l,u=o.filter;if(Kr(n),!h&&!(/mousedown|pointerdown/.test(a)&&t.button!==0||o.disabled)&&!c.isContentEditable&&!(!this.nativeDraggable&&ie&&l&&l.tagName.toUpperCase()==="SELECT")&&(l=ut(l,o.draggable,n,!1),!(l&&l.animated)&&xe!==l)){if(Ut=st(l),oe=st(l,o.draggable),typeof u=="function"){if(u.call(this,t,l,this)){Q({sortable:i,rootEl:c,name:"filter",targetEl:l,toEl:n,fromEl:n}),tt("filter",i,{evt:t}),r&&t.preventDefault();return}}else if(u&&(u=u.split(",").some(function(d){if(d=ut(c,d.trim(),n,!1),d)return Q({sortable:i,rootEl:d,name:"filter",targetEl:l,fromEl:n,toEl:n}),tt("filter",i,{evt:t}),!0}),u)){r&&t.preventDefault();return}o.handle&&!ut(c,o.handle,n,!1)||this._prepareDragStart(t,s,l)}}},_prepareDragStart:function(t,i,n){var o=this,r=o.el,a=o.options,s=r.ownerDocument,l;if(n&&!h&&n.parentNode===r){var c=H(n);if(D=r,h=n,O=h.parentNode,Mt=h.nextSibling,xe=n,fe=a.group,w.dragged=h,Dt={target:h,clientX:(i||t).clientX,clientY:(i||t).clientY},qi=Dt.clientX-c.left,Zi=Dt.clientY-c.top,this._lastX=(i||t).clientX,this._lastY=(i||t).clientY,h.style["will-change"]="all",l=function(){if(tt("delayEnded",o,{evt:t}),w.eventCanceled){o._onDrop();return}o._disableDelayedDragEvents(),!Ui&&o.nativeDraggable&&(h.draggable=!0),o._triggerDragStart(t,i),Q({sortable:o,name:"choose",originalEvent:t}),rt(h,a.chosenClass,!0)},a.ignore.split(",").forEach(function(u){vn(h,u.trim(),di)}),C(s,"dragover",Rt),C(s,"mousemove",Rt),C(s,"touchmove",Rt),a.supportPointer?(C(s,"pointerup",o._onDrop),!this.nativeDraggable&&C(s,"pointercancel",o._onDrop)):(C(s,"mouseup",o._onDrop),C(s,"touchend",o._onDrop),C(s,"touchcancel",o._onDrop)),Ui&&this.nativeDraggable&&(this.options.touchStartThreshold=4,h.draggable=!0),tt("delayStart",this,{evt:t}),a.delay&&(!a.delayOnTouchOnly||i)&&(!this.nativeDraggable||!(ue||St))){if(w.eventCanceled){this._onDrop();return}a.supportPointer?(C(s,"pointerup",o._disableDelayedDrag),C(s,"pointercancel",o._disableDelayedDrag)):(C(s,"mouseup",o._disableDelayedDrag),C(s,"touchend",o._disableDelayedDrag),C(s,"touchcancel",o._disableDelayedDrag)),C(s,"mousemove",o._delayedDragTouchMoveHandler),C(s,"touchmove",o._delayedDragTouchMoveHandler),a.supportPointer&&C(s,"pointermove",o._delayedDragTouchMoveHandler),o._dragStartTimer=setTimeout(l,a.delay)}else l()}},_delayedDragTouchMoveHandler:function(t){var i=t.touches?t.touches[0]:t;Math.max(Math.abs(i.clientX-this._lastX),Math.abs(i.clientY-this._lastY))>=Math.floor(this.options.touchStartThreshold/(this.nativeDraggable&&window.devicePixelRatio||1))&&this._disableDelayedDrag()},_disableDelayedDrag:function(){h&&di(h),clearTimeout(this._dragStartTimer),this._disableDelayedDragEvents()},_disableDelayedDragEvents:function(){var t=this.el.ownerDocument;E(t,"mouseup",this._disableDelayedDrag),E(t,"touchend",this._disableDelayedDrag),E(t,"touchcancel",this._disableDelayedDrag),E(t,"pointerup",this._disableDelayedDrag),E(t,"pointercancel",this._disableDelayedDrag),E(t,"mousemove",this._delayedDragTouchMoveHandler),E(t,"touchmove",this._delayedDragTouchMoveHandler),E(t,"pointermove",this._delayedDragTouchMoveHandler)},_triggerDragStart:function(t,i){i=i||t.pointerType=="touch"&&t,!this.nativeDraggable||i?this.options.supportPointer?C(document,"pointermove",this._onTouchMove):i?C(document,"touchmove",this._onTouchMove):C(document,"mousemove",this._onTouchMove):(C(h,"dragend",this),C(D,"dragstart",this._onDragStart));try{document.selection?Ee(function(){document.selection.empty()}):window.getSelection().removeAllRanges()}catch{}},_dragStarted:function(t,i){if(Bt=!1,D&&h){tt("dragStarted",this,{evt:i}),this.nativeDraggable&&C(document,"dragover",jr);var n=this.options;!t&&rt(h,n.dragClass,!1),rt(h,n.ghostClass,!0),w.active=this,t&&this._appendGhost(),Q({sortable:this,name:"start",originalEvent:i})}else this._nulling()},_emulateDragOver:function(){if(dt){this._lastX=dt.clientX,this._lastY=dt.clientY,Tn();for(var t=document.elementFromPoint(dt.clientX,dt.clientY),i=t;t&&t.shadowRoot&&(t=t.shadowRoot.elementFromPoint(dt.clientX,dt.clientY),t!==i);)i=t;if(h.parentNode[it]._isOutsideThisEl(t),i)do{if(i[it]){var n=void 0;if(n=i[it]._onDragOver({clientX:dt.clientX,clientY:dt.clientY,target:t,rootEl:i}),n&&!this.options.dragoverBubble)break}t=i}while(i=yn(i));_n()}},_onTouchMove:function(t){if(Dt){var i=this.options,n=i.fallbackTolerance,o=i.fallbackOffset,r=t.touches?t.touches[0]:t,a=x&&jt(x,!0),s=x&&a&&a.a,l=x&&a&&a.d,c=me&&K&&Yi(K),u=(r.clientX-Dt.clientX+o.x)/(s||1)+(c?c[0]-ci[0]:0)/(s||1),d=(r.clientY-Dt.clientY+o.y)/(l||1)+(c?c[1]-ci[1]:0)/(l||1);if(!w.active&&!Bt){if(n&&Math.max(Math.abs(r.clientX-this._lastX),Math.abs(r.clientY-this._lastY))<n)return;this._onDragStart(t,!0)}if(x){a?(a.e+=u-(si||0),a.f+=d-(li||0)):a={a:1,b:0,c:0,d:1,e:u,f:d};var p="matrix(".concat(a.a,",").concat(a.b,",").concat(a.c,",").concat(a.d,",").concat(a.e,",").concat(a.f,")");b(x,"webkitTransform",p),b(x,"mozTransform",p),b(x,"msTransform",p),b(x,"transform",p),si=u,li=d,dt=r}t.cancelable&&t.preventDefault()}},_appendGhost:function(){if(!x){var t=this.options.fallbackOnBody?document.body:D,i=H(h,!0,me,!0,t),n=this.options;if(me){for(K=t;b(K,"position")==="static"&&b(K,"transform")==="none"&&K!==document;)K=K.parentNode;K!==document.body&&K!==document.documentElement?(K===document&&(K=ft()),i.top+=K.scrollTop,i.left+=K.scrollLeft):K=ft(),ci=Yi(K)}x=h.cloneNode(!0),rt(x,n.ghostClass,!1),rt(x,n.fallbackClass,!0),rt(x,n.dragClass,!0),b(x,"transition",""),b(x,"transform",""),b(x,"box-sizing","border-box"),b(x,"margin",0),b(x,"top",i.top),b(x,"left",i.left),b(x,"width",i.width),b(x,"height",i.height),b(x,"opacity","0.8"),b(x,"position",me?"absolute":"fixed"),b(x,"zIndex","100000"),b(x,"pointerEvents","none"),w.ghost=x,t.appendChild(x),b(x,"transform-origin",qi/parseInt(x.style.width)*100+"% "+Zi/parseInt(x.style.height)*100+"%")}},_onDragStart:function(t,i){var n=this,o=t.dataTransfer,r=n.options;if(tt("dragStart",this,{evt:t}),w.eventCanceled){this._onDrop();return}tt("setupClone",this),w.eventCanceled||(R=xn(h),R.removeAttribute("id"),R.draggable=!1,R.style["will-change"]="",this._hideClone(),rt(R,this.options.chosenClass,!1),w.clone=R),n.cloneId=Ee(function(){tt("clone",n),!w.eventCanceled&&(n.options.removeCloneOnHide||D.insertBefore(R,h),n._hideClone(),Q({sortable:n,name:"clone"}))}),!i&&rt(h,r.dragClass,!0),i?(Ae=!0,n._loopId=setInterval(n._emulateDragOver,50)):(E(document,"mouseup",n._onDrop),E(document,"touchend",n._onDrop),E(document,"touchcancel",n._onDrop),o&&(o.effectAllowed="move",r.setData&&r.setData.call(n,o,h)),C(document,"drop",n),b(h,"transform","translateZ(0)")),Bt=!0,n._dragStartId=Ee(n._dragStarted.bind(n,i,t)),C(document,"selectstart",n),Qt=!0,window.getSelection().removeAllRanges(),ie&&b(document.body,"user-select","none")},_onDragOver:function(t){var i=this.el,n=t.target,o,r,a,s=this.options,l=s.group,c=w.active,u=fe===l,d=s.sort,p=Y||c,g,y=this,v=!1;if(vi)return;function L(Jt,oo){tt(Jt,y,gt({evt:t,isOwner:u,axis:g?"vertical":"horizontal",revert:a,dragRect:o,targetRect:r,canSort:d,fromSortable:p,target:n,completed:I,onMove:function(Oi,ro){return ye(D,i,h,o,Oi,H(Oi),t,ro)},changed:B},oo))}function P(){L("dragOverAnimationCapture"),y.captureAnimationState(),y!==p&&p.captureAnimationState()}function I(Jt){return L("dragOverCompleted",{insertion:Jt}),Jt&&(u?c._hideClone():c._showClone(y),y!==p&&(rt(h,Y?Y.options.ghostClass:c.options.ghostClass,!1),rt(h,s.ghostClass,!0)),Y!==y&&y!==w.active?Y=y:y===w.active&&Y&&(Y=null),p===y&&(y._ignoreWhileAnimating=n),y.animateAll(function(){L("dragOverAnimationComplete"),y._ignoreWhileAnimating=null}),y!==p&&(p.animateAll(),p._ignoreWhileAnimating=null)),(n===h&&!h.animated||n===i&&!n.animated)&&(Vt=null),!s.dragoverBubble&&!t.rootEl&&n!==document&&(h.parentNode[it]._isOutsideThisEl(t.target),!Jt&&Rt(t)),!s.dragoverBubble&&t.stopPropagation&&t.stopPropagation(),v=!0}function B(){at=st(h),$t=st(h,s.draggable),Q({sortable:y,name:"change",toEl:i,newIndex:at,newDraggableIndex:$t,originalEvent:t})}if(t.preventDefault!==void 0&&t.cancelable&&t.preventDefault(),n=ut(n,s.draggable,i,!0),L("dragOver"),w.eventCanceled)return v;if(h.contains(t.target)||n.animated&&n.animatingX&&n.animatingY||y._ignoreWhileAnimating===n)return I(!1);if(Ae=!1,c&&!s.disabled&&(u?d||(a=O!==D):Y===this||(this.lastPutMode=fe.checkPull(this,c,h,t))&&l.checkPut(this,c,h,t))){if(g=this._getDirection(t,n)==="vertical",o=H(h),L("dragOverValid"),w.eventCanceled)return v;if(a)return O=D,P(),this._hideClone(),L("revert"),w.eventCanceled||(Mt?D.insertBefore(h,Mt):D.appendChild(h)),I(!0);var z=Li(i,s.draggable);if(!z||Xr(t,g,this)&&!z.animated){if(z===h)return I(!1);if(z&&i===t.target&&(n=z),n&&(r=H(n)),ye(D,i,h,o,n,r,t,!!n)!==!1)return P(),z&&z.nextSibling?i.insertBefore(h,z.nextSibling):i.appendChild(h),O=i,B(),I(!0)}else if(z&&Zr(t,g,this)){var lt=qt(i,0,s,!0);if(lt===h)return I(!1);if(n=lt,r=H(n),ye(D,i,h,o,n,r,t,!1)!==!1)return P(),i.insertBefore(h,lt),O=i,B(),I(!0)}else if(n.parentNode===i){r=H(n);var A=0,G,ct=h.parentNode!==i,J=!Ur(h.animated&&h.toRect||o,n.animated&&n.toRect||r,g),Xt=g?"top":"left",Et=ji(n,"top","top")||ji(h,"top","top"),Wt=Et?Et.scrollTop:void 0;Vt!==n&&(G=r[Xt],ae=!1,ge=!J&&s.invertSwap||ct),A=Wr(t,n,r,g,J?1:s.swapThreshold,s.invertedSwapThreshold==null?s.swapThreshold:s.invertedSwapThreshold,ge,Vt===n);var mt;if(A!==0){var Lt=st(h);do Lt-=A,mt=O.children[Lt];while(mt&&(b(mt,"display")==="none"||mt===x))}if(A===0||mt===n)return I(!1);Vt=n,re=A;var Gt=n.nextElementSibling,Ct=!1;Ct=A===1;var pe=ye(D,i,h,o,n,r,t,Ct);if(pe!==!1)return(pe===1||pe===-1)&&(Ct=pe===1),vi=!0,setTimeout(qr,30),P(),Ct&&!Gt?i.appendChild(h):n.parentNode.insertBefore(h,Ct?Gt:n),Et&&wn(Et,0,Wt-Et.scrollTop),O=h.parentNode,G!==void 0&&!ge&&(Se=Math.abs(G-H(n)[Xt])),B(),I(!0)}if(i.contains(h))return I(!1)}return!1},_ignoreWhileAnimating:null,_offMoveEvents:function(){E(document,"mousemove",this._onTouchMove),E(document,"touchmove",this._onTouchMove),E(document,"pointermove",this._onTouchMove),E(document,"dragover",Rt),E(document,"mousemove",Rt),E(document,"touchmove",Rt)},_offUpEvents:function(){var t=this.el.ownerDocument;E(t,"mouseup",this._onDrop),E(t,"touchend",this._onDrop),E(t,"pointerup",this._onDrop),E(t,"pointercancel",this._onDrop),E(t,"touchcancel",this._onDrop),E(document,"selectstart",this)},_onDrop:function(t){var i=this.el,n=this.options;if(at=st(h),$t=st(h,n.draggable),tt("drop",this,{evt:t}),O=h&&h.parentNode,at=st(h),$t=st(h,n.draggable),w.eventCanceled){this._nulling();return}Bt=!1,ge=!1,ae=!1,clearInterval(this._loopId),clearTimeout(this._dragStartTimer),bi(this.cloneId),bi(this._dragStartId),this.nativeDraggable&&(E(document,"drop",this),E(i,"dragstart",this._onDragStart)),this._offMoveEvents(),this._offUpEvents(),ie&&b(document.body,"user-select",""),b(h,"transform",""),t&&(Qt&&(t.cancelable&&t.preventDefault(),!n.dropBubble&&t.stopPropagation()),x&&x.parentNode&&x.parentNode.removeChild(x),(D===O||Y&&Y.lastPutMode!=="clone")&&R&&R.parentNode&&R.parentNode.removeChild(R),h&&(this.nativeDraggable&&E(h,"dragend",this),di(h),h.style["will-change"]="",Qt&&!Bt&&rt(h,Y?Y.options.ghostClass:this.options.ghostClass,!1),rt(h,this.options.chosenClass,!1),Q({sortable:this,name:"unchoose",toEl:O,newIndex:null,newDraggableIndex:null,originalEvent:t}),D!==O?(at>=0&&(Q({rootEl:O,name:"add",toEl:O,fromEl:D,originalEvent:t}),Q({sortable:this,name:"remove",toEl:O,originalEvent:t}),Q({rootEl:O,name:"sort",toEl:O,fromEl:D,originalEvent:t}),Q({sortable:this,name:"sort",toEl:O,originalEvent:t})),Y&&Y.save()):at!==Ut&&at>=0&&(Q({sortable:this,name:"update",toEl:O,originalEvent:t}),Q({sortable:this,name:"sort",toEl:O,originalEvent:t})),w.active&&((at==null||at===-1)&&(at=Ut,$t=oe),Q({sortable:this,name:"end",toEl:O,originalEvent:t}),this.save()))),this._nulling()},_nulling:function(){tt("nulling",this),D=h=O=x=Mt=R=xe=Tt=Dt=dt=Qt=at=$t=Ut=oe=Vt=re=Y=fe=w.dragged=w.ghost=w.clone=w.active=null,De.forEach(function(t){t.checked=!0}),De.length=si=li=0},handleEvent:function(t){switch(t.type){case"drop":case"dragend":this._onDrop(t);break;case"dragenter":case"dragover":h&&(this._onDragOver(t),Yr(t));break;case"selectstart":t.preventDefault();break}},toArray:function(){for(var t=[],i,n=this.el.children,o=0,r=n.length,a=this.options;o<r;o++)i=n[o],ut(i,a.draggable,this.el,!1)&&t.push(i.getAttribute(a.dataIdAttr)||Jr(i));return t},sort:function(t,i){var n={},o=this.el;this.toArray().forEach(function(r,a){var s=o.children[a];ut(s,this.options.draggable,o,!1)&&(n[r]=s)},this),i&&this.captureAnimationState(),t.forEach(function(r){n[r]&&(o.removeChild(n[r]),o.appendChild(n[r]))}),i&&this.animateAll()},save:function(){var t=this.options.store;t&&t.set&&t.set(this)},closest:function(t,i){return ut(t,i||this.options.draggable,this.el,!1)},option:function(t,i){var n=this.options;if(i===void 0)return n[t];var o=he.modifyOption(this,t,i);typeof o<"u"?n[t]=o:n[t]=i,t==="group"&&$n(n)},destroy:function(){tt("destroy",this);var t=this.el;t[it]=null,E(t,"mousedown",this._onTapStart),E(t,"touchstart",this._onTapStart),E(t,"pointerdown",this._onTapStart),this.nativeDraggable&&(E(t,"dragover",this),E(t,"dragenter",this)),Array.prototype.forEach.call(t.querySelectorAll("[draggable]"),function(i){i.removeAttribute("draggable")}),this._onDrop(),this._disableDelayedDragEvents(),Le.splice(Le.indexOf(this.el),1),this.el=t=null},_hideClone:function(){if(!Tt){if(tt("hideClone",this),w.eventCanceled)return;b(R,"display","none"),this.options.removeCloneOnHide&&R.parentNode&&R.parentNode.removeChild(R),Tt=!0}},_showClone:function(t){if(t.lastPutMode!=="clone"){this._hideClone();return}if(Tt){if(tt("showClone",this),w.eventCanceled)return;h.parentNode==D&&!this.options.group.revertClone?D.insertBefore(R,h):Mt?D.insertBefore(R,Mt):D.appendChild(R),this.options.group.revertClone&&this.animate(h,R),b(R,"display",""),Tt=!1}}};function Yr(e){e.dataTransfer&&(e.dataTransfer.dropEffect="move"),e.cancelable&&e.preventDefault()}function ye(e,t,i,n,o,r,a,s){var l,c=e[it],u=c.options.onMove,d;return window.CustomEvent&&!St&&!ue?l=new CustomEvent("move",{bubbles:!0,cancelable:!0}):(l=document.createEvent("Event"),l.initEvent("move",!0,!0)),l.to=t,l.from=e,l.dragged=i,l.draggedRect=n,l.related=o||t,l.relatedRect=r||H(t),l.willInsertAfter=s,l.originalEvent=a,e.dispatchEvent(l),u&&(d=u.call(c,l,a)),d}function di(e){e.draggable=!1}function qr(){vi=!1}function Zr(e,t,i){var n=H(qt(i.el,0,i.options,!0)),o=Sn(i.el,i.options,x),r=10;return t?e.clientX<o.left-r||e.clientY<n.top&&e.clientX<n.right:e.clientY<o.top-r||e.clientY<n.bottom&&e.clientX<n.left}function Xr(e,t,i){var n=H(Li(i.el,i.options.draggable)),o=Sn(i.el,i.options,x),r=10;return t?e.clientX>o.right+r||e.clientY>n.bottom&&e.clientX>n.left:e.clientY>o.bottom+r||e.clientX>n.right&&e.clientY>n.top}function Wr(e,t,i,n,o,r,a,s){var l=n?e.clientY:e.clientX,c=n?i.height:i.width,u=n?i.top:i.left,d=n?i.bottom:i.right,p=!1;if(!a){if(s&&Se<c*o){if(!ae&&(re===1?l>u+c*r/2:l<d-c*r/2)&&(ae=!0),ae)p=!0;else if(re===1?l<u+Se:l>d-Se)return-re}else if(l>u+c*(1-o)/2&&l<d-c*(1-o)/2)return Gr(t)}return p=p||a,p&&(l<u+c*r/2||l>d-c*r/2)?l>u+c/2?1:-1:0}function Gr(e){return st(h)<st(e)?1:-1}function Jr(e){for(var t=e.tagName+e.className+e.src+e.href+e.textContent,i=t.length,n=0;i--;)n+=t.charCodeAt(i);return n.toString(36)}function Kr(e){De.length=0;for(var t=e.getElementsByTagName("input"),i=t.length;i--;){var n=t[i];n.checked&&De.push(n)}}function Ee(e){return setTimeout(e,0)}function bi(e){return clearTimeout(e)}ei&&C(document,"touchmove",function(e){(w.active||Bt)&&e.cancelable&&e.preventDefault()});w.utils={on:C,off:E,css:b,find:vn,is:function(t,i){return!!ut(t,i,t,!1)},extend:Or,throttle:bn,closest:ut,toggleClass:rt,clone:xn,index:st,nextTick:Ee,cancelNextTick:bi,detectDirection:Cn,getChild:qt,expando:it};w.get=function(e){return e[it]};w.mount=function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];t[0].constructor===Array&&(t=t[0]),t.forEach(function(n){if(!n.prototype||!n.prototype.constructor)throw"Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(n));n.utils&&(w.utils=gt(gt({},w.utils),n.utils)),he.mount(n)})};w.create=function(e,t){return new w(e,t)};w.version=kr;var N=[],te,wi,xi=!1,ui,hi,Re,ee;function Qr(){function e(){this.defaults={scroll:!0,forceAutoScrollFallback:!1,scrollSensitivity:30,scrollSpeed:10,bubbleScroll:!0};for(var t in this)t.charAt(0)==="_"&&typeof this[t]=="function"&&(this[t]=this[t].bind(this))}return e.prototype={dragStarted:function(i){var n=i.originalEvent;this.sortable.nativeDraggable?C(document,"dragover",this._handleAutoScroll):this.options.supportPointer?C(document,"pointermove",this._handleFallbackAutoScroll):n.touches?C(document,"touchmove",this._handleFallbackAutoScroll):C(document,"mousemove",this._handleFallbackAutoScroll)},dragOverCompleted:function(i){var n=i.originalEvent;!this.options.dragOverBubble&&!n.rootEl&&this._handleAutoScroll(n)},drop:function(){this.sortable.nativeDraggable?E(document,"dragover",this._handleAutoScroll):(E(document,"pointermove",this._handleFallbackAutoScroll),E(document,"touchmove",this._handleFallbackAutoScroll),E(document,"mousemove",this._handleFallbackAutoScroll)),Wi(),Ce(),Pr()},nulling:function(){Re=wi=te=xi=ee=ui=hi=null,N.length=0},_handleFallbackAutoScroll:function(i){this._handleAutoScroll(i,!0)},_handleAutoScroll:function(i,n){var o=this,r=(i.touches?i.touches[0]:i).clientX,a=(i.touches?i.touches[0]:i).clientY,s=document.elementFromPoint(r,a);if(Re=i,n||this.options.forceAutoScrollFallback||ue||St||ie){pi(i,this.options,s,n);var l=At(s,!0);xi&&(!ee||r!==ui||a!==hi)&&(ee&&Wi(),ee=setInterval(function(){var c=At(document.elementFromPoint(r,a),!0);c!==l&&(l=c,Ce()),pi(i,o.options,c,n)},10),ui=r,hi=a)}else{if(!this.options.bubbleScroll||At(s,!0)===ft()){Ce();return}pi(i,this.options,At(s,!1),!1)}}},xt(e,{pluginName:"scroll",initializeByDefault:!0})}function Ce(){N.forEach(function(e){clearInterval(e.pid)}),N=[]}function Wi(){clearInterval(ee)}var pi=bn(function(e,t,i,n){if(t.scroll){var o=(e.touches?e.touches[0]:e).clientX,r=(e.touches?e.touches[0]:e).clientY,a=t.scrollSensitivity,s=t.scrollSpeed,l=ft(),c=!1,u;wi!==i&&(wi=i,Ce(),te=t.scroll,u=t.scrollFn,te===!0&&(te=At(i,!0)));var d=0,p=te;do{var g=p,y=H(g),v=y.top,L=y.bottom,P=y.left,I=y.right,B=y.width,z=y.height,lt=void 0,A=void 0,G=g.scrollWidth,ct=g.scrollHeight,J=b(g),Xt=g.scrollLeft,Et=g.scrollTop;g===l?(lt=B<G&&(J.overflowX==="auto"||J.overflowX==="scroll"||J.overflowX==="visible"),A=z<ct&&(J.overflowY==="auto"||J.overflowY==="scroll"||J.overflowY==="visible")):(lt=B<G&&(J.overflowX==="auto"||J.overflowX==="scroll"),A=z<ct&&(J.overflowY==="auto"||J.overflowY==="scroll"));var Wt=lt&&(Math.abs(I-o)<=a&&Xt+B<G)-(Math.abs(P-o)<=a&&!!Xt),mt=A&&(Math.abs(L-r)<=a&&Et+z<ct)-(Math.abs(v-r)<=a&&!!Et);if(!N[d])for(var Lt=0;Lt<=d;Lt++)N[Lt]||(N[Lt]={});(N[d].vx!=Wt||N[d].vy!=mt||N[d].el!==g)&&(N[d].el=g,N[d].vx=Wt,N[d].vy=mt,clearInterval(N[d].pid),(Wt!=0||mt!=0)&&(c=!0,N[d].pid=setInterval((function(){n&&this.layer===0&&w.active._onTouchMove(Re);var Gt=N[this.layer].vy?N[this.layer].vy*s:0,Ct=N[this.layer].vx?N[this.layer].vx*s:0;typeof u=="function"&&u.call(w.dragged.parentNode[it],Ct,Gt,e,Re,N[this.layer].el)!=="continue"||wn(N[this.layer].el,Ct,Gt)}).bind({layer:d}),24))),d++}while(t.bubbleScroll&&p!==l&&(p=At(p,!1)));xi=c}},30),An=function(t){var i=t.originalEvent,n=t.putSortable,o=t.dragEl,r=t.activeSortable,a=t.dispatchSortableEvent,s=t.hideGhostForTarget,l=t.unhideGhostForTarget;if(i){var c=n||r;s();var u=i.changedTouches&&i.changedTouches.length?i.changedTouches[0]:i,d=document.elementFromPoint(u.clientX,u.clientY);l(),c&&!c.el.contains(d)&&(a("spill"),this.onSpill({dragEl:o,putSortable:n}))}};function Di(){}Di.prototype={startIndex:null,dragStart:function(t){var i=t.oldDraggableIndex;this.startIndex=i},onSpill:function(t){var i=t.dragEl,n=t.putSortable;this.sortable.captureAnimationState(),n&&n.captureAnimationState();var o=qt(this.sortable.el,this.startIndex,this.options);o?this.sortable.el.insertBefore(i,o):this.sortable.el.appendChild(i),this.sortable.animateAll(),n&&n.animateAll()},drop:An};xt(Di,{pluginName:"revertOnSpill"});function Ri(){}Ri.prototype={onSpill:function(t){var i=t.dragEl,n=t.putSortable,o=n||this.sortable;o.captureAnimationState(),i.parentNode&&i.parentNode.removeChild(i),o.animateAll()},drop:An};xt(Ri,{pluginName:"removeOnSpill"});w.mount(new Qr);w.mount(Ri,Di);const ta=e=>{const t=e.item;let i=Array.prototype.slice.call(t.parentNode.childNodes);return i=i.filter(n=>n.nodeType!=Node.ELEMENT_NODE||!n.classList.contains("sortable-fallback")),i},ea=(e,t,i,n,o,r)=>{const s=e.item.parentNode;for(const v of i)s.appendChild(v);if(e.oldIndex==e.newIndex)return;const l=n.getArray(),c=e.item.querySelector("eox-layercontrol-layer").layer.get(o),u=l.find(v=>v.get(o)===c),d=r.dataset.layer,p=l.find(v=>v.get(o)==d);let g,y;for(g=0;g<l.length;g++)if(l[g]==u){n.removeAt(g);break}for(y=0;y<l.length;y++)if(l[y]===p){g>y?n.insertAt(y,u):n.insertAt(y+1,u);break}t.requestUpdate()};function ia(e,t,i,n){let o=[],r=null;e._sortable=w.create(e,{handle:".drag-handle",filter:".drag-handle.disabled",swapThreshold:.5,animation:150,easing:"cubic-bezier(1, 0, 0, 1)",onStart:a=>o=ta(a),onMove:a=>{r=a.related},onEnd:a=>ea(a,n,o,t,i,r)})}function na(e,t,i,n){const o=e.getArray();let r=!1;o.forEach(a=>{const s=a.ol_uid;a.get(t)||(a.set(t,s),r=!0),a.get(i)||(a.set(i,`layer ${s}`),r=!0),r&&n.requestUpdate()})}function ki(e,t,i){let n=[];const o=(r,a,s)=>{n=[...n,...r.filter(c=>c.get(a)===s)];const l=r.filter(c=>c.getLayers);return l.length>0&&l.forEach(c=>o(c.getLayers().getArray(),a,s)),n};return o(e,t,i),n}function oa(e,t,i){if(!e||!t)return!1;if(!Ln(e,i))return!0;const n=e.get("minZoom"),o=e.get("maxZoom"),r=t.getView().getZoom();return r>n&&r<o}function Ln(e,t){const i=e.get("minZoom"),n=e.get("maxZoom");return!!(t&&(i!==-1/0||n!==1/0))}function ra(e,t){var o,r,a;return!e||!t?void 0:e.getLayers?"group":((a=(o=t.getInteractions().getArray().filter(s=>s.freehand_!==void 0).map(s=>s.source_))==null?void 0:o.ol_uid)==null?void 0:a.includes(e.getSource?(r=e.getSource())==null?void 0:r.ol_uid:void 0))?"draw":e.declutter_!==void 0?"vector":"raster"}const aa=(e,t,i)=>{let n=t;return i.layer.getSource().getTileUrlFunction()&&(n||(n=i.layer.getSource().getTileUrlFunction()),i.layer.getSource().setTileUrlFunction((...o)=>Ar(n(...o),e)),i.layer.getSource().setKey(new Date)),n};function sa(e,t,i){const n="updateStyleVariables"in t,o="setStyle"in t,r=n?t.style_:i.style;let a=r==null?void 0:r.variables;if(a){const s=Mi(e);if(r.variables={...a,...s},n)t.updateStyleVariables(s);else if(o){const l=la(r);t.setStyle(l)}}}const Mi=e=>{const t={};for(const i in e)if(typeof e[i]=="object"&&e[i]!==null){const n=Mi(e[i]);for(const o in n)t[o]=n==null?void 0:n[o]}else t[i]=e==null?void 0:e[i];return t};function la(e){let t=e;if("variables"in e){let i=JSON.stringify(e);const{variables:n}=e;for(const o in n)typeof n[o]=="number"?i=i.replaceAll(`["var","${o}"]`,n[o]):i=i.replaceAll(`["var","${o}"]`,`"${n[o]}"`);t=JSON.parse(i)}return t}const ca=(e,t)=>{var i;if(e)return!("domainProperties"in e)||"domain"in e?{...e}:(i=Object.keys(e))==null?void 0:i.reduce((n,o)=>{if(o==="domainProperties"){const r=Mi(t);n.domain=e[o].map(a=>r[a])}else n[o]=e[o];return n},{})};function Dn(e,t){var n;let i={};for(const o in e){const r=e[o].type;if(r&&r!=="object")i[o]=r==="number"?Number(t[o]):t[o];else if(typeof e[o]=="object"&&((n=e[o])!=null&&n.properties)){const a=Dn(e[o].properties,t);Object.keys(a).length>0&&(i[o]=a)}}return i}function da(e,t){var r,a,s,l,c;if(!t)return null;let i={},n="updateStyleVariables"in e?(r=e.style_)==null?void 0:r.variables:(a=t.style)==null?void 0:a.variables;if((t.type==="style"||t.style)&&n)i=n;else if((l=(s=e.getSource())==null?void 0:s.getTileUrlFunction)!=null&&l.call(s)){const u=new URL(e.getSource().getTileUrlFunction()([0,0,0]));i=Object.fromEntries(u.searchParams.entries())}else return null;const o=Dn(((c=t.schema)==null?void 0:c.properties)||t.schema,i);return Object.keys(o).length?o:null}const ua=(e,t)=>e==null?void 0:e.filter(i=>["remove","sort"].filter(n=>t!=null&&t.get("layerControlDisable")?n!=="sort":!0).includes(i)),ha=(e,t)=>e==null?void 0:e.filter(i=>{let n=!0;return["remove","sort"].includes(i)&&(n=!1),i==="info"&&(n=t.get("description")),i==="config"&&(n=t.get("layerConfig")),i==="datetime"&&(n=t.get("layerDatetime")),i==="legend"&&(n=t.get("layerLegend")),n}),pa=(e,t)=>m`
  <button slot="${e}-icon" class="icon">${t?e:nt}</button>
`,fa=e=>m`
  <button
    class="remove-icon icon"
    @click=${()=>{const{layer:t}=e;t==null||t.set("layerControlOptional",!0),t==null||t.setVisible(!1),e.dispatchEvent(new CustomEvent("changed",{detail:t,bubbles:!0}))}}
  >
    ${e.unstyled?"x":nt}
  </button>
`,ga=e=>m`
  <span class="button sort-icon icon drag-handle">
    ${e?"═":nt}
  </span>
`,Rn=e=>{var i;const t=["layerControlHide","layerControlOptional"];return(i=e==null?void 0:e.getArray())==null?void 0:i.filter(n=>t.every(o=>!n.get(o)))};/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const kn=en(class extends nn{constructor(e){if(super(e),e.type!==kt.PROPERTY&&e.type!==kt.ATTRIBUTE&&e.type!==kt.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!ho(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===Kt||t===nt)return t;const i=e.element,n=e.name;if(e.type===kt.PROPERTY){if(t===i[n])return Kt}else if(e.type===kt.BOOLEAN_ATTRIBUTE){if(!!t===i.hasAttribute(n))return Kt}else if(e.type===kt.ATTRIBUTE&&i.getAttribute(n)===t+"")return Kt;return po(e),t}});var Mn="Expected a function",Gi=NaN,ma="[object Symbol]",ya=/^\s+|\s+$/g,va=/^[-+]0x[0-9a-f]+$/i,ba=/^0b[01]+$/i,wa=/^0o[0-7]+$/i,xa=parseInt,Sa=typeof Ht=="object"&&Ht&&Ht.Object===Object&&Ht,Ea=typeof self=="object"&&self&&self.Object===Object&&self,Ca=Sa||Ea||Function("return this")(),$a=Object.prototype,Ta=$a.toString,_a=Math.max,Aa=Math.min,fi=function(){return Ca.Date.now()};function La(e,t,i){var n,o,r,a,s,l,c=0,u=!1,d=!1,p=!0;if(typeof e!="function")throw new TypeError(Mn);t=Ji(t)||0,ke(i)&&(u=!!i.leading,d="maxWait"in i,r=d?_a(Ji(i.maxWait)||0,t):r,p="trailing"in i?!!i.trailing:p);function g(A){var G=n,ct=o;return n=o=void 0,c=A,a=e.apply(ct,G),a}function y(A){return c=A,s=setTimeout(P,t),u?g(A):a}function v(A){var G=A-l,ct=A-c,J=t-G;return d?Aa(J,r-ct):J}function L(A){var G=A-l,ct=A-c;return l===void 0||G>=t||G<0||d&&ct>=r}function P(){var A=fi();if(L(A))return I(A);s=setTimeout(P,v(A))}function I(A){return s=void 0,p&&n?g(A):(n=o=void 0,a)}function B(){s!==void 0&&clearTimeout(s),c=0,n=l=o=s=void 0}function z(){return s===void 0?a:I(fi())}function lt(){var A=fi(),G=L(A);if(n=arguments,o=this,l=A,G){if(s===void 0)return y(l);if(d)return s=setTimeout(P,t),g(l)}return s===void 0&&(s=setTimeout(P,t)),a}return lt.cancel=B,lt.flush=z,lt}function Da(e,t,i){var n=!0,o=!0;if(typeof e!="function")throw new TypeError(Mn);return ke(i)&&(n="leading"in i?!!i.leading:n,o="trailing"in i?!!i.trailing:o),La(e,t,{leading:n,maxWait:t,trailing:o})}function ke(e){var t=typeof e;return!!e&&(t=="object"||t=="function")}function Ra(e){return!!e&&typeof e=="object"}function ka(e){return typeof e=="symbol"||Ra(e)&&Ta.call(e)==ma}function Ji(e){if(typeof e=="number")return e;if(ka(e))return Gi;if(ke(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=ke(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=e.replace(ya,"");var i=ba.test(e);return i||wa.test(e)?xa(e.slice(2),i?2:8):va.test(e)?Gi:+e}var Ma=Da;const Ki=$i(Ma);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ve=e=>e??nt;var Me,Oe;class On extends ot{constructor(){super();_(this,Me,Ci`
    color-legend {
      --cle-background: transparent;
      --cle-font-family: inherit;
      --cle-font-size: inherit;
      --cle-font-weight: inherit --cle-letter-spacing: inherit;
      --cle-letter-spacing-title: inherit;
      --cle-padding: 0;
    }
  `);_(this,Oe,"");this.unstyled=!1,this.noShadow=!1,this.layerLegend=null,this.layer=null}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}firstUpdated(){this.layerLegend.width||new ResizeObserver(()=>{this.offsetWidth!==this.layerLegend.width&&(this.layerLegend.width=this.offsetWidth,this.requestUpdate())}).observe(this.renderRoot.querySelector(".legend-container"))}render(){return customElements.get("color-legend")||console.error("Please import `color-legend-element` in order to use layerLegend"),m`
      <style>
        ${$(this,Me)}
        ${!this.unstyled&&$(this,Oe)}
      </style>
      ${F(this.layerLegend,()=>m`
          <div class="legend-container">
            <!-- Render color-legend-->
            <color-legend
              id="${this.layer.get("id")}"
              width=${this.layerLegend.width??325}
              scaleType="${ve(this.layerLegend.scaleType)}"
              markType="${ve(this.layerLegend.markType)}"
              titleText="${ve(this.layerLegend.title)}"
              .range=${this.layerLegend.range}
              .domain=${this.layerLegend.domain}
              tickFormat="${ve(this.layerLegend.tickFormat)}"
              .ticks=${this.layerLegend.ticks??5}
              .tickValues=${this.layerLegend.tickValues}
              .marginLeft=${0}
              .marginRight=${0}
            >
            </color-legend>
          </div>
        `)}
    `}}Me=new WeakMap,Oe=new WeakMap,k(On,"properties",{unstyled:{type:Boolean},noShadow:{type:Boolean},layerLegend:{attribute:!1},layer:{attribute:!1}});customElements.define("eox-layercontrol-layer-legend",On);var yt,Yt,le,ce,Si,Pe,Ie;class Pn extends ot{constructor(){super();_(this,ce);_(this,yt,{});_(this,Yt,null);_(this,le);_(this,Pe,Ci`
    color-legend {
      --cle-background: transparent;
      --cle-font-family: inherit;
      --cle-font-size: inherit;
      --cle-font-weight: inherit --cle-letter-spacing: inherit;
      --cle-letter-spacing-title: inherit;
    }
  `);_(this,Ie,"");this.layer=null,this.unstyled=!1,this.noShadow=!1,this.layerConfig=null,this.throttleDataChange=Ki(M(this,ce,Si),1e3)}updated(i){if(i.has("layerConfig")){const n=this.layerConfig.type==="style"||this.layerConfig.style?100:1e3;this.throttleDataChange=Ki(M(this,ce,Si),n),this.requestUpdate()}}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}render(){Pt(this,Yt,da(this.layer,this.layerConfig)),Object.keys($(this,yt)).length!==0&&Pt(this,Yt,$(this,yt)),customElements.get("eox-jsonform")||console.error("Please import @eox/jsonform in order to use layerconfig");const i={disable_edit_json:!0,disable_collapse:!0,disable_properties:!0};return m`
      <style>
        ${$(this,Pe)}
        ${!this.unstyled&&$(this,Ie)}
      </style>
      ${F(this.layerConfig,()=>m`
          ${F(this.layerConfig.legend,()=>m`
              <eox-layercontrol-layer-legend
                .noShadow=${!0}
                .unstyled=${this.unstyled}
                .layer=${this.layer}
                .layerLegend=${ca(this.layerConfig.legend,$(this,yt))}
              ></eox-layercontrol-layer-legend>
            `)}
          <!-- Render a JSON form for layer configuration -->
          <eox-jsonform
            .schema=${this.layerConfig.schema}
            .value=${$(this,Yt)}
            .options=${i}
            @change=${this.throttleDataChange}
          ></eox-jsonform>
        `)}
    `}}yt=new WeakMap,Yt=new WeakMap,le=new WeakMap,ce=new WeakSet,Si=function(i){Pt(this,yt,i.detail),this.layerConfig.type==="style"||this.layerConfig.style?"setStyle"in this.layer||"updateStyleVariables"in this.layer?sa($(this,yt),this.layer,this.layerConfig):console.error(`Layer type ${this.layer.get("type")??""} does not support styles configuration`):Pt(this,le,aa($(this,yt),$(this,le),this)),this.requestUpdate()},Pe=new WeakMap,Ie=new WeakMap,k(Pn,"properties",{layer:{attribute:!1},unstyled:{type:Boolean},noShadow:{type:Boolean},layerConfig:{attribute:!1}});customElements.define("eox-layercontrol-layerconfig",Pn);var Ve,Vn,Be,Ne;class In extends ot{constructor(){super();_(this,Ve);_(this,Be,"");_(this,Ne,"");this.unstyled=!1,this.noShadow=!1,this.layerDatetime=null,this.layer=null}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}render(){return customElements.get("eox-timecontrol")||console.error("Please import @eox/timecontrol in order to use layerDatetime"),m`
      <style>
        ${$(this,Be)}
        ${!this.unstyled&&$(this,Ne)}
      </style>
      ${F(this.layerDatetime,()=>m`
          <!-- Render a Timecontrol for layer date time -->
          <eox-timecontrol
            ?unstyled=${this.unstyled}
            .for=${void 0}
            .layer=${void 0}
            .navigation=${this.layerDatetime.navigation??!1}
            .slider=${this.layerDatetime.slider??!1}
            .play=${this.layerDatetime.play??!1}
            .controlValues=${this.layerDatetime.controlValues}
            .controlProperty=${void 0}
            current-step=${this.layerDatetime.currentStep}
            .displayFormat=${this.layerDatetime.displayFormat}
            @stepchange=${M(this,Ve,Vn)}
          ></eox-timecontrol>
        `)}
    `}}Ve=new WeakSet,Vn=function(i){this.dispatchEvent(new CustomEvent("datetime:updated",{bubbles:!0,detail:{datetime:i.detail.currentStep,layer:this.layer}})),this.layerDatetime.currentStep=i.detail.currentStep,this.requestUpdate()},Be=new WeakMap,Ne=new WeakMap,k(In,"properties",{unstyled:{type:Boolean},noShadow:{type:Boolean},layerDatetime:{attribute:!1},layer:{attribute:!1}});customElements.define("eox-layercontrol-layer-datetime",In);var de,He,Fe;class Bn extends ot{constructor(){super();_(this,de,i=>(this.selectedTab===i||this.toolsAsList)&&"highlighted");_(this,He,`
    .tabbed figure,
    .listed figure {
      margin: 0;
    }
    .tabbed nav,
    .listed nav {
      display: flex;
      justify-content: space-between;
    }
    .tabbed nav div,
    .listed nav div {
      display: flex;
    }
    .tabbed .tab,
    .listed .tab {
      display: none;
    }
    .tabbed .tab.highlighted,
    .listed .tab.highlighted {
      display: block;
    }
  `);_(this,Fe,`
    .listed label {
      display: flex;
      justify-content: start;
      align-items: center;
      background: var(--background-color) !important;
    }
    .listed label:not(:first-of-type) {
      margin-top: 10px;
    }
    .listed label span {
      text-transform: capitalize;
      font-weight: 300;
    }
    .tabbed, .listed {
      font-size: small;
    }
    .tabbed label.highlighted {
      border: 1px solid #0041701a;
      border-radius: 2px;
      border-bottom: none;
      pointer-events: none;
    }
    nav div label,
    nav div span {
      width: 20px;
      height: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
    }
    figure {
      background: var(--background-color);
      border: 1px solid #0041701a;
      border-radius: 2px;
      padding: var(--padding-vertical) var(--padding);
    }
  `);this.actions=[],this.selectedTab=0,this.tabs=[],this.unstyled=!1,this.noShadow=!1,this.toolsAsList=!1}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}render(){const i=this.tabs,n=this.actions,o=n.length+i.length>1;return m`
      <style>
        ${$(this,He)}
        ${!this.unstyled&&$(this,Fe)}
      </style>
      <div class="${this.toolsAsList?"listed":"tabbed"}">
        <!-- Navigation for tabs and actions -->
        ${F(o,()=>m`
            <nav>
              ${F(!this.toolsAsList,()=>m`
                  <div>
                    <!-- Labels for tabs -->
                    ${be(i,(r,a)=>m`
                        <label
                          class=${$(this,de).call(this,a)}
                          @click=${()=>this.selectedTab=a}
                        >
                          <!-- Customizable icon for each tab -->
                          <slot name=${`${r}-icon`}>${r}</slot>
                        </label>
                      `)}
                  </div>
                  <div>
                    <!-- Icons for actions -->
                    ${be(n,r=>m`
                        <span>
                          <!-- Customizable icon for each action -->
                          <slot name=${`${r}-icon`}>${r}</slot>
                        </span>
                      `)}
                  </div>
                `)}
            </nav>
          `)}
        <figure>
          <!-- Content for each tab -->
          ${be(i,(r,a)=>m`
              ${F(this.toolsAsList,()=>m`
                  <label>
                    <!-- Customizable icon for each tab -->
                    <slot name=${`${r}-icon`}>${r}</slot>
                    <span>${r}</span>
                  </label>
                `)}
              <div class="tab ${$(this,de).call(this,a)}">
                <!-- Content slot for each tab -->
                <slot name=${`${r}-content`}>${r}</slot>
              </div>
            `)}
        </figure>
      </div>
    `}}de=new WeakMap,He=new WeakMap,Fe=new WeakMap,k(Bn,"properties",{actions:{attribute:!1},selectedTab:{state:!0},tabs:{attribute:!1},unstyled:{type:Boolean},noShadow:{type:Boolean},toolsAsList:{type:Boolean}});customElements.define("eox-layercontrol-tools-items",Bn);var Ue,ze;class Nn extends ot{constructor(){super();k(this,"_removeButton",()=>fa(this));k(this,"_sortButton",()=>ga(this.unstyled));k(this,"_button",i=>pa(i,this.unstyled));k(this,"_getDefaultTools",()=>{var i;return m`
      <div slot="info-content">
        ${fo(this.layer.get("description"))}
      </div>
      <div slot="opacity-content">
        <!-- Input for opacity -->
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value=${kn((i=this.layer)==null?void 0:i.getOpacity())}
          @input=${n=>this.layer.setOpacity(parseFloat(n.target.value))}
        />
      </div>
      <div slot="config-content">
        <!-- Layer configuration -->
        ${F(this.layer.get("layerConfig"),()=>m`
            <eox-layercontrol-layerconfig
              slot="config-content"
              .layer=${this.layer}
              .noShadow=${!0}
              .layerConfig=${this.layer.get("layerConfig")}
              .unstyled=${this.unstyled}
              @changed=${()=>this.requestUpdate()}
            ></eox-layercontrol-layerconfig>
          `)}
      </div>
      <div slot="datetime-content">
        <!-- Layer datetime -->
        ${F(this.layer.get("layerDatetime"),()=>m`
            <eox-layercontrol-layer-datetime
              slot="datetime-content"
              .noShadow=${!0}
              .layerDatetime=${this.layer.get("layerDatetime")}
              .layer=${this.layer}
              .unstyled=${this.unstyled}
              @changed=${()=>this.requestUpdate()}
            ></eox-layercontrol-layer-datetime>
          `)}
      </div>
      <div slot="legend-content">
        <!-- Layer legend -->
        ${F(this.layer.get("layerLegend"),()=>m`
            <eox-layercontrol-layer-legend
              slot="legend-content"
              .noShadow=${!0}
              .layerLegend=${this.layer.get("layerLegend")}
              .layer=${this.layer}
              .unstyled=${this.unstyled}
              @changed=${()=>this.requestUpdate()}
            ></eox-layercontrol-layer-legend>
          `)}
      </div>
      <div slot="remove-icon">${this._removeButton()}</div>
      <div slot="sort-icon">${this._sortButton()}</div>
    `});_(this,Ue,"");_(this,ze,`
    ${on}  
    ${go}
    ${rn}
    ${mo}
    .drag-handle {
      cursor: n-resize;
    }
    .single-action-container,
    details.tools {
      position: relative;
    }
    eox-layercontrol-layer details summary::before {
      content: "";
    }
    details.tools[open] {
      /*border-top: 1px solid #0041703a;*/
    }
    .single-action {
      position: relative;
    }
    details.tools summary .icon {
      pointer-events: none;
    }
    .single-action,
    details.tools summary {
      position: absolute;
      right: 0;
      top: -24px;
      height: 24px;
      cursor: pointer;
      display: var(--layer-tools-button-visibility);
    }
    .single-action .icon::before,
    details.tools summary .icon::before {
      content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23004170' viewBox='0 0 24 24'%3E%3Ctitle%3Edots-vertical%3C/title%3E%3Cpath d='M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z' /%3E%3C/svg%3E");
    }
    .single-action,
    details.tools summary,
    eox-layercontrol-tools-items button.icon {
      transition: opacity .2s;
    }
    .single-action,
    details.tools summary {
      opacity: .5;
    }
    eox-layercontrol-tools-items button.icon {
      opacity: .7;
    }
    eox-layercontrol-tools-items.tools-list button.icon {
      cursor: auto;
    }
    .single-action:hover,
    details.tools summary:hover,
    eox-layercontrol-tools-items button.icon:hover {
      opacity: 1;
    }
    eox-layercontrol-tools-items.tools-list button.icon:hover {
      opacity: .7;
    }
    .tools-placeholder,
    .single-action .icon,
    .single-action .icon::before,
    details.tools summary .icon,
    details.tools summary .icon::before {
      height: 16px;
      width: 16px;
      margin-right: var(--padding);
    }
    eox-layercontrol-tools-items button.icon,
    eox-layercontrol-tools-items .button.icon {
      display: flex;
      justify-content: center;
    }
    eox-layercontrol-tools-items.tools-list button.icon,
    eox-layercontrol-tools-items.tools-list .button.icon {
      margin-left: -6px;
    }
    eox-layercontrol-tools-items button.icon::before,
    eox-layercontrol-tools-items .button.icon::before {
      width: 16px;
      height: 16px;
    }
    details.tools summary .info-icon,
    button.icon[slot=info-icon]::before {
      content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23004170' viewBox='0 0 24 24'%3E%3Ctitle%3Einformation-outline%3C/title%3E%3Cpath d='M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z' /%3E%3C/svg%3E");
    }
    details.tools summary .opacity-icon,
    button.icon[slot=opacity-icon]::before {
      content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23004170' viewBox='0 0 24 24'%3E%3Ctitle%3Eopacity%3C/title%3E%3Cpath d='M17.66,8L12,2.35L6.34,8C4.78,9.56 4,11.64 4,13.64C4,15.64 4.78,17.75 6.34,19.31C7.9,20.87 9.95,21.66 12,21.66C14.05,21.66 16.1,20.87 17.66,19.31C19.22,17.75 20,15.64 20,13.64C20,11.64 19.22,9.56 17.66,8M6,14C6,12 6.62,10.73 7.76,9.6L12,5.27L16.24,9.65C17.38,10.77 18,12 18,14H6Z' /%3E%3C/svg%3E");
    }
    details.tools summary .config-icon,
    button.icon[slot=config-icon]::before {
      content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23004170' viewBox='0 0 24 24'%3E%3Ctitle%3Etune%3C/title%3E%3Cpath d='M3,17V19H9V17H3M3,5V7H13V5H3M13,21V19H21V17H13V15H11V21H13M7,9V11H3V13H7V15H9V9H7M21,13V11H11V13H21M15,9H17V7H21V5H17V3H15V9Z' /%3E%3C/svg%3E");
    }
    details.tools summary .datetime-icon,
    button.icon[slot=datetime-icon]::before {
      content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Ctitle%3Eclock-outline%3C/title%3E%3Cpath d='M12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22C6.47,22 2,17.5 2,12A10,10 0 0,1 12,2M12.5,7V12.25L17,14.92L16.25,16.15L11,13V7H12.5Z' /%3E%3C/svg%3E");
    }
    details.tools summary .legend-icon,
    button.icon[slot=legend-icon]::before {
      content: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Ctitle%3Emap-legend%3C%2Ftitle%3E%3Cpath%20d%3D%22M9%2C3L3.36%2C4.9C3.15%2C4.97%203%2C5.15%203%2C5.38V20.5A0.5%2C0.5%200%200%2C0%203.5%2C21L3.66%2C20.97L9%2C18.9L15%2C21L20.64%2C19.1C20.85%2C19.03%2021%2C18.85%2021%2C18.62V3.5A0.5%2C0.5%200%200%2C0%2020.5%2C3L20.34%2C3.03L15%2C5.1L9%2C3M8%2C5.45V17.15L5%2C18.31V6.46L8%2C5.45M10%2C5.47L14%2C6.87V18.53L10%2C17.13V5.47M19%2C5.7V17.54L16%2C18.55V6.86L19%2C5.7M7.46%2C6.3L5.57%2C6.97V9.12L7.46%2C8.45V6.3M7.46%2C9.05L5.57%2C9.72V11.87L7.46%2C11.2V9.05M7.46%2C11.8L5.57%2C12.47V14.62L7.46%2C13.95V11.8M7.46%2C14.55L5.57%2C15.22V17.37L7.46%2C16.7V14.55Z%22%20%2F%3E%3C%2Fsvg%3E");
    }
    .single-action .remove-icon::before,
    [slot=remove-icon] button.icon::before {
      content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23ff0000' viewBox='0 0 24 24'%3E%3Ctitle%3Edelete-outline%3C/title%3E%3Cpath d='M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19M8,9H16V19H8V9M15.5,4L14.5,3H9.5L8.5,4H5V6H19V4H15.5Z' /%3E%3C/svg%3E");
    }
    .single-action .sort-icon::before,
    [slot=sort-icon] .button.icon::before {
      content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23004170' viewBox='0 0 24 24'%3E%3Ctitle%3Edrag-horizontal-variant%3C/title%3E%3Cpath d='M21 11H3V9H21V11M21 13H3V15H21V13Z' /%3E%3C/svg%3E");
    }
    [slot=info-content],
    [slot=opacity-content],
    [slot=config-content],
    [slot=datetime-content],
    [slot=legend-content] {
      padding: 6px 0;
    }
    [slot=info-content] * {
      max-width: 100%;
    }
  `);this.layer=null,this.tools=[],this.unstyled=!1,this.noShadow=!1,this.toolsAsList=!1}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}render(){var l;const i=ua(this.tools,this.layer),n=ha(this.tools,this.layer),o=this[`_${i==null?void 0:i[0]}Button`]?this[`_${i==null?void 0:i[0]}Button`]():nt,r=((l=this.tools)==null?void 0:l.length)===1?`${this.tools[0]}-icon`:"",a=i==null?void 0:i.length,s=n==null?void 0:n.length;return m`
      <style>
        ${$(this,Ue)}
        ${!this.unstyled&&$(this,ze)}
      </style>
      ${F(a+s>0,()=>m`
          ${F(a===1&&s===0,()=>m`
              <div class="single-action-container">
                <div class="single-action">${o}</div>
              </div>
            `,()=>m`
              <details
                class="tools"
                open=${this.layer.get("layerControlToolsExpand")||nt}
              >
                <summary>
                  <button class="icon ${r}">Tools</button>
                </summary>
                <eox-layercontrol-tools-items
                  class="${this.toolsAsList?"tools-list":"tools-tab"}"
                  .noShadow=${!1}
                  .actions=${i}
                  .tabs=${n}
                  .unstyled=${this.unstyled}
                  .toolsAsList=${this.toolsAsList}
                >
                  <!-- Rendering tabs and content -->
                  ${be(n,c=>this._button(c))}
                  <!-- Including default tools -->
                  ${this._getDefaultTools()}
                </eox-layercontrol-tools-items>
              </details>
            `)}
        `)}
    `}}Ue=new WeakMap,ze=new WeakMap,k(Nn,"properties",{layer:{attribute:!1},tools:{attribute:!1},unstyled:{type:Boolean},noShadow:{type:Boolean},toolsAsList:{type:Boolean}});customElements.define("eox-layercontrol-layer-tools",Nn);const Oa=e=>{const t=()=>{const i=oa(e.layer,e.map,e.showLayerZoomState);let n=!1;!i&&e.currLayerVisibilityBasedOnZoom?(e.currLayerVisibilityBasedOnZoom=!1,n=!0):i&&!e.currLayerVisibilityBasedOnZoom&&(e.currLayerVisibilityBasedOnZoom=!0,n=!0),n&&(e.requestUpdate(),e.dispatchEvent(new CustomEvent("change:resolution",{bubbles:!0})))};Ln(e.layer,e.showLayerZoomState)&&(t(),e.map.getView().on("change:resolution",()=>t()))},Pa=(e,t)=>{const i=t.layer;i.setVisible(e.target.checked),e.target.checked&&i.get("layerControlExclusive")&&t.closest(".layers > ul").querySelectorAll("eox-layercontrol-layer").forEach(o=>{var r;o.layer!==i&&((r=o.layer)!=null&&r.get("layerControlExclusive"))&&(o.layer.setVisible(!1),o.requestUpdate())}),t.dispatchEvent(new CustomEvent("changed",{bubbles:!0,detail:i})),t.requestUpdate()};var pt,Nt,Fn,je,Ye;class Hn extends ot{constructor(){super();_(this,pt);k(this,"currLayerVisibilityBasedOnZoom",!0);_(this,je,"");_(this,Ye,`
    ${rn}
    eox-layercontrol-layer {
      width: 100%;
      position: relative;
    }
    .layer input[type=checkbox],
    .layer input[type=radio] {
      display: var(--layer-input-visibility);
    }
    .layer.zoom-state-invisible {
      background: #d2e2ee;
      opacity: 0.3;
    }
    .layer {
      width: 100%;
      align-items: center;
      justify-content: space-between;
      padding: var(--padding-vertical) 0;
      display: var(--layer-visibility);
    }
    label, span {
      display: flex;
      align-items: center;
      cursor: pointer;
    }
    .title {
      display: var(--layer-title-visibility);
    }
    [data-type] .title::before {
      width: 20px;
      min-width: 20px;
      height: 20px;
      margin-right: 6px;
      display: var(--layer-type-visibility);
    }
    [data-type] .title.color-swatch::before {
      background: var(--layer-color);
      border-radius: 3px;
      content: "" !important;
      width: 16px;
      min-width: 16px;
      height: 16px;
    }
    [data-type=group] .title::before {
      content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%230041703a' viewBox='0 0 24 24'%3E%3Ctitle%3Efolder-outline%3C/title%3E%3Cpath d='M20,18H4V8H20M20,6H12L10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6Z' /%3E%3C/svg%3E");
    }
    [data-type=group] > eox-layercontrol-layer-group > details[open] > summary > eox-layercontrol-layer > .layer > label > .title::before {
      content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%230041703a' viewBox='0 0 24 24'%3E%3Ctitle%3Efolder-open-outline%3C/title%3E%3Cpath d='M6.1,10L4,18V8H21A2,2 0 0,0 19,6H12L10,4H4A2,2 0 0,0 2,6V18A2,2 0 0,0 4,20H19C19.9,20 20.7,19.4 20.9,18.5L23.2,10H6.1M19,18H6L7.6,12H20.6L19,18Z' /%3E%3C/svg%3E");
    }
    [data-type=raster] .title::before {
      content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%230041703a' viewBox='0 0 24 24'%3E%3Ctitle%3Echeckerboard%3C/title%3E%3Cpath d='M2 2V22H22V2H2M20 12H16V16H20V20H16V16H12V20H8V16H4V12H8V8H4V4H8V8H12V4H16V8H20V12M16 8V12H12V8H16M12 12V16H8V12H12Z' /%3E%3C/svg%3E");
    }
    [data-type=vector] .title::before {
      content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%230041703a' viewBox='0 0 24 24'%3E%3Ctitle%3Eshape-outline%3C/title%3E%3Cpath d='M11,13.5V21.5H3V13.5H11M9,15.5H5V19.5H9V15.5M12,2L17.5,11H6.5L12,2M12,5.86L10.08,9H13.92L12,5.86M17.5,13C20,13 22,15 22,17.5C22,20 20,22 17.5,22C15,22 13,20 13,17.5C13,15 15,13 17.5,13M17.5,15A2.5,2.5 0 0,0 15,17.5A2.5,2.5 0 0,0 17.5,20A2.5,2.5 0 0,0 20,17.5A2.5,2.5 0 0,0 17.5,15Z' /%3E%3C/svg%3E");
    }
    [data-type=draw] .title::before {
      content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%230041703a' viewBox='0 0 24 24'%3E%3Ctitle%3Evector-square-edit%3C/title%3E%3Cpath d='M22.7 14.4L21.7 15.4L19.6 13.3L20.6 12.3C20.8 12.1 21.2 12.1 21.4 12.3L22.7 13.6C22.9 13.8 22.9 14.1 22.7 14.4M13 19.9L19.1 13.8L21.2 15.9L15.1 22H13V19.9M11 19.9V19.1L11.6 18.5L12.1 18H8V16H6V8H8V6H16V8H18V12.1L19.1 11L19.3 10.8C19.5 10.6 19.8 10.4 20.1 10.3V8H22.1V2H16.1V4H8V2H2V8H4V16H2V22H8V20L11 19.9M18 4H20V6H18V4M4 4H6V6H4V4M6 20H4V18H6V20Z' /%3E%3C/svg%3E");
    }
  `);this.layer=null,this.map=null,this.titleProperty="title",this.showLayerZoomState=!1,this.tools=[],this.unstyled=!1,this.noShadow=!1,this.toolsAsList=!1}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}firstUpdated(){Oa(this)}render(){var l;const i=this.layer.getVisible(),n=i?"visible":"",o=this.currLayerVisibilityBasedOnZoom?"":"zoom-state-invisible",r=M(this,pt,Nt).call(this,"layerControlDisable")?"disabled":"",a=M(this,pt,Nt).call(this,"layerControlExclusive")?"radio":"checkbox",s=((l=this.tools)==null?void 0:l.length)>0;return m`
      <style>
        ${$(this,je)}
        ${!this.unstyled&&$(this,Ye)}
      </style>
      ${F(this.layer,()=>m`
          <!-- Render the layer -->
          <div class="layer ${n} ${o}">
            <label class="drag-handle ${r}">
              <!-- Input element for layer visibility -->
              <input
                type=${a}
                .checked=${kn(i)}
                @click=${M(this,pt,Fn)}
              />

              <!-- Layer title -->
              <span
                class="title ${M(this,pt,Nt).call(this,"color")?"color-swatch":""}"
                style="--layer-color: ${M(this,pt,Nt).call(this,"color")}"
              >
                ${M(this,pt,Nt).call(this,this.titleProperty)}
              </span>
              ${F(s,()=>m`<span class="tools-placeholder"></span>`)}
            </label>
          </div>

          <!-- Render layer tools -->
          <eox-layercontrol-layer-tools
            .noShadow=${!0}
            .layer=${this.layer}
            .tools=${this.tools}
            .unstyled=${this.unstyled}
            .toolsAsList=${this.toolsAsList}
          ></eox-layercontrol-layer-tools>
        `)}
    `}}pt=new WeakSet,Nt=function(i){var n;return(n=this.layer)==null?void 0:n.get(i)},Fn=function(i){Pa(i,this)},je=new WeakMap,Ye=new WeakMap,k(Hn,"properties",{layer:{attribute:!1},map:{attribute:!1,state:!0},titleProperty:{attribute:"title-property",type:String},showLayerZoomState:{attribute:"show-layer-zoom-state",type:Boolean},tools:{attribute:!1},unstyled:{type:Boolean},noShadow:{type:Boolean},toolsAsList:{type:Boolean}});customElements.define("eox-layercontrol-layer",Hn);var qe,Ze;class Un extends ot{constructor(){super();_(this,qe,"");_(this,Ze,`
    details summary {
      cursor: pointer;
      display: var(--layer-summary-visibility);
    }
    details summary { list-style-type: none; } /* Firefox */
    details summary::-webkit-details-marker { display: none; } /* Chrome */
    details summary::marker { display: none; }
    details summary::before {
      display: var(--layer-visibility);
      content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23004170' viewBox='0 0 24 24'%3E%3Ctitle%3Echevron-right%3C/title%3E%3Cpath d='M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z' /%3E%3C/svg%3E");
      font-size: 13px;
      width: 24px;
      height: 24px;
      margin: 4px 0;
      transform-origin: center;
      transition: transform 0.1s ease-in-out;
    }
    details[open] > summary:before {
      transform: rotate(90deg);
    }
    details[data-children-length="0"] summary::before {
      display: none;
    }
  `);this.group=null,this.idProperty="id",this.map=null,this.titleProperty="title",this.showLayerZoomState=!1,this.tools=[],this.unstyled=!1,this.noShadow=!1,this.toolsAsList=!1}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}render(){var o,r;const i=!!((o=this.group)!=null&&o.get("layerControlExpand")),n=(r=Rn(this.group.getLayers()))==null?void 0:r.length;return m`
      <style>
        ${$(this,qe)}
        ${!this.unstyled&&$(this,Ze)}
      </style>
      ${F(this.group,()=>m`
          <!-- Render the details element with the layer control -->
          <details
            open=${i||nt}
            data-children-length=${n}
          >
            <summary>
              <!-- Render the layer control within the summary -->
              <eox-layercontrol-layer
                .noShadow=${!0}
                .layer=${this.group}
                .map=${this.map}
                .titleProperty=${this.titleProperty}
                .showLayerZoomState=${this.showLayerZoomState}
                .tools=${this.tools}
                .unstyled=${this.unstyled}
                .toolsAsList=${this.toolsAsList}
                @changed=${()=>this.requestUpdate()}
              ></eox-layercontrol-layer>
            </summary>

            <!-- Render the list of layers within the details -->
            <eox-layercontrol-layer-list
              .noShadow=${!0}
              .idProperty=${this.idProperty}
              .layers=${this.group.getLayers()}
              .map=${this.map}
              .titleProperty=${this.titleProperty}
              .showLayerZoomState=${this.showLayerZoomState}
              .tools=${this.tools}
              .unstyled=${this.unstyled}
              .toolsAsList=${this.toolsAsList}
              @changed=${()=>this.requestUpdate()}
            ></eox-layercontrol-layer-list>
          </details>
        `)}
    `}}qe=new WeakMap,Ze=new WeakMap,k(Un,"properties",{group:{attribute:!1},idProperty:{attribute:"id-property"},map:{attribute:!1,state:!0},titleProperty:{attribute:"title-property",type:String},showLayerZoomState:{attribute:"show-layer-zoom-state",type:Boolean},tools:{attribute:!1},unstyled:{type:Boolean},noShadow:{type:Boolean},toolsAsList:{type:Boolean}});customElements.define("eox-layercontrol-layer-group",Un);const Ia=e=>{const{layers:t,idProperty:i,titleProperty:n,renderRoot:o}=e,r=yo(()=>{e.requestUpdate(),e.dispatchEvent(new CustomEvent("changed",{bubbles:!0}))},50),a=()=>r();if(t&&(t.hasListener("change:length")&&(t==null||t.un("change:length",a)),t.on("change:length",a),t)){const s=o.querySelector("ul");na(t,i,n,e),ia(s,t,i,e)}};var Xe,We;class zn extends ot{constructor(){super();_(this,Xe,"");_(this,We,`
    ul {
      padding: 0;
      margin: 0;
    }
    ul ul {
      padding-left: var(--list-padding);
    }
    li:not(li li) {
      padding-left: var(--padding);
    }
    li {
      list-style: none;
      border-bottom: 1px solid #0041703a;
      border: var(--layer-visibility);
    }
    li:last-child {
      border: none;
    }
    li.sortable-chosen {
      background: #eeea;
    }
    li.sortable-drag {
      opacity: 0;
    }
    li.sortable-ghost {
    }
  `);this.idProperty="id",this.layers=null,this.map=null,this.tools=void 0,this.titleProperty="title",this.showLayerZoomState=!1,this.unstyled=!1,this.noShadow=!1,this.toolsAsList=!1}firstUpdated(){Ia(this)}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}render(){const i=this.layers?Rn(this.layers).reverse():[];return m`
      <style>
        ${$(this,Xe)}
        ${!this.unstyled&&$(this,We)}
      </style>
      <ul>
        ${F(this.layers,()=>m`
            ${uo(i,n=>n,n=>m`
                <li
                  data-layer="${n.get(this.idProperty)}"
                  data-type="${ra(n,this.map)}"
                >
                  ${n.getLayers?m`
                          <eox-layercontrol-layer-group
                            .noShadow=${!0}
                            .group=${n}
                            .idProperty=${this.idProperty}
                            .map=${this.map}
                            .titleProperty=${this.titleProperty}
                            .showLayerZoomState=${this.showLayerZoomState}
                            .tools=${this.tools}
                            .unstyled=${this.unstyled}
                            .toolsAsList=${this.toolsAsList}
                            @changed=${()=>this.requestUpdate()}
                          >
                          </eox-layercontrol-layer-group>
                        `:m`
                          <eox-layercontrol-layer
                            .noShadow=${!0}
                            .layer=${n}
                            .map=${this.map}
                            .titleProperty=${this.titleProperty}
                            .showLayerZoomState=${this.showLayerZoomState}
                            .tools=${this.tools}
                            .unstyled=${this.unstyled}
                            .toolsAsList=${this.toolsAsList}
                            @changed=${()=>this.requestUpdate()}
                          ></eox-layercontrol-layer>
                        `}
                </li>
              `)}
          `)}
      </ul>
    `}}Xe=new WeakMap,We=new WeakMap,k(zn,"properties",{idProperty:{attribute:"id-property"},layers:{attribute:!1},map:{attribute:!1,state:!0},titleProperty:{attribute:"title-property",type:String},showLayerZoomState:{attribute:"show-layer-zoom-state",type:Boolean},tools:{attribute:!1},unstyled:{type:Boolean},noShadow:{type:Boolean},toolsAsList:{type:Boolean}});customElements.define("eox-layercontrol-layer-list",zn);const Va=e=>{const t=e.querySelector("select[name=optional]"),i=t?t.value:null,n=ki(e.layers.getArray(),"layerControlOptional",!0).find(o=>(o.get(e.idProperty)||o.ol_uid)===i);n==null||n.set("layerControlOptional",!1),n==null||n.setVisible(!0),e.dispatchEvent(new CustomEvent("changed",{bubbles:!0})),e.renderRoot.parentNode.querySelectorAll("eox-layercontrol-layer-list").forEach(o=>o.requestUpdate()),e.requestUpdate()};var Ge,Yn;class jn extends ot{constructor(){super();_(this,Ge);this.idProperty="id",this.layers=null,this.titleProperty="title",this.unstyled=!1,this.noShadow=!1}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}render(){const i=ki(this.layers.getArray(),"layerControlOptional",!0);return m`
      <!-- Label for the dropdown -->
      <label for="optional">Optional layers</label>

      <!-- Dropdown select element -->
      <select name="optional" data-cy="optionalLayers">
        <!-- Default placeholder option -->
        <option disabled selected value>
          -- select an optional layer to add --
        </option>

        <!-- Mapping through filtered layers list to generate dropdown options -->
        ${i.map(n=>{const o=n.get(this.idProperty)||n.ol_uid,r=n.get(this.titleProperty),a=`layer ${n.get(this.idProperty)}`;return m` <option value="${o}">${r||a}</option> `})}
      </select>

      <!-- Button to handle adding layers -->
      <button @click="${M(this,Ge,Yn)}">add</button>
    `}}Ge=new WeakSet,Yn=function(){Va(this)},k(jn,"properties",{idProperty:{attribute:"id-property"},layers:{attribute:!1},titleProperty:{attribute:"title-property",type:String},unstyled:{type:Boolean},noShadow:{type:Boolean}});customElements.define("eox-layercontrol-optional-list",jn);const Ba=(e,t)=>{t.jsonInput=e.target.value,t.requestUpdate()},Qi=e=>{const t=JSON.parse(`{"data":${fn(e.jsonInput)}}`);Array.isArray(t.data)?t.data.forEach(i=>{e.eoxMap.addOrUpdateLayer(i)}):e.eoxMap.addOrUpdateLayer(t.data),e.jsonInput=null,e.requestUpdate()},Na=(e,t)=>{t.urlInput=e.target.value,t.requestUpdate()};async function Ha(e){const t=e.urlInput;if(e.wmsCapabilities=null,e.searchLoad=!0,e.requestUpdate(),!t)return!1;if(_i(t)==="XYZ")return{Name:t};try{const i=await $r(t);e.wmsCapabilities=i}catch{}finally{e.searchLoad=!1,e.requestUpdate()}return!1}const Fa=(e,t)=>{const{Name:i}=e,n=_i(t.urlInput)||"XYZ",o={type:"Tile",properties:{id:i,title:i},source:{type:n,url:t.urlInput,params:{LAYERS:i}}};t.jsonInput=JSON.stringify(o)},Ua=(e,t)=>{t.open=e||null,t.urlInput=null,t.jsonInput=null,t.wmsCapabilities=null,t.requestUpdate()};var q,Zn,Xn,Ei,Wn,Gn,$e,Je,Ke;class qn extends ot{constructor(){super();_(this,q);k(this,"urlInput",null);k(this,"jsonInput",null);k(this,"open",null);k(this,"searchLoad",!1);k(this,"wmsCapabilities",null);_(this,Je,`
    .eox-add-layer-main .open {
      position: relative;
    }
    .eox-add-layer-main .close {
      display: none;
    }
  `);_(this,Ke,`
    .eox-add {
      background: #f0f2f5;
      border-top: 1px solid #0041701a;
      padding: 0.5rem;
      font-size: small;
    }
    .eox-add-layer-col, .eox-add-layer-tab {
      display: flex;
      width: 100%;
    }
    .eox-add-layer-main .close {
      display: none;
    }
    .eox-add-layer-main .open {
      position: relative;
    }
    button.icon.add-icon {
      flex-grow: 1;
    }
    .eox-add-layer-tab li {
      border: 0 !important;
      font-size: smaller;
      padding: 0.2rem 0.7rem;
      background: #f0f2f5;
      border-radius: 4px 4px 0px 0px;
      font-size: 0.8rem;
      font-weight: 500;
      cursor: pointer;
    }
    .eox-add-layer-tab li.active {
      background: #204270;
      color: white;
      font-weight: 700;
    }
    .relative {
      position: relative
    }
    .eox-add-layer-col.justify-end {
      justify-content: end;
    }
    .eox-add ul {
      max-height: 120px;
      overflow: scroll;
    }
    .eox-add ul li {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0.1rem 0.2rem;
    }
    button.icon {
      justify-content: end;
      transition: opacity .2s;
      opacity: .7;
    }
    button.icon:hover {
      opacity: 1;
    }
    button.icon.add-layer-icon::before {
      width: 16px;
      min-width: 16px;
      height: 16px;
    }
    button.icon.add-icon::before {
      width: 18px;
      min-width: 18px;
      height: 18px;
    }
    .add-icon.icon::before {
      content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath xmlns='http://www.w3.org/2000/svg' d='M17,14H19V17H22V19H19V22H17V19H14V17H17V14M11,16L2,9L11,2L20,9L11,16M11,18.54L12,17.75V18C12,18.71 12.12,19.39 12.35,20L11,21.07L2,14.07L3.62,12.81L11,18.54Z' fill='%23004270'/%3E%3C/svg%3E");
    }
    .add-layer-icon::before {
      content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Ctitle%3Eplus-thick%3C/title%3E%3Cpath fill='%23004270' d='M20 14H14V20H10V14H4V10H10V4H14V10H20V14Z' /%3E%3C/svg%3E");
    }
    .json-add-layer {
      content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Ctitle%3Eplus-thick%3C/title%3E%3Cpath fill='white' d='M20 14H14V20H10V14H4V10H10V4H14V10H20V14Z' /%3E%3C/svg%3E");
    }
    .search-icon::after {
      content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Ctitle%3Emagnify%3C/title%3E%3Cpath d='M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z' fill='white' /%3E%3C/svg%3E");
    }
    .search-icon::after, .json-add-layer::before {
      width: 14px;
      min-width: 14px;
      height: 14px;
      display:flex
      margin-right: 6px;
      color: white;
    }
    .search-icon, .json-add-layer {
      padding: 4px 6px;
      height: 28px;
      border-radius: 0px 4px 4px 0px;
      box-shadow: none;
    }
    .json-add-layer {
      position: absolute;
      bottom: 16px;
      right: 14px;
      border-radius: 4px;
      height: 24px;
      padding: 4px;
    }
    input.add-url, textarea.add-layer-input {
      box-sizing: border-box !important;
      width: 100%;
      height: 28px;
      padding: 5px 7px !important;
      border: 1px solid #0004 !important;
      font-size: smaller;
      border-radius: 4px 0px 0px 4px;
    }
    textarea.add-layer-input {
      height: 90px;
      resize: none;
      border-radius: 4px;
    }
    .divider {
      margin: 1rem 0px;
      height: 1px;
      border-top: 1.5px solid #00417059;
      text-align: center;
      position: relative;
    }
    .divider span {
      position: relative;
      top: -.6em;
      padding: 0px 0.5rem;
      background: #f0f2f5;
      color: #00417059;
      font-weight: bold;
      display: inline-block;
    }
  `);this.eoxMap=null,this.unstyled=!1,this.noShadow=!1}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}render(){const i=this.open?"open":"close",n=this.open==="url",o=this.open==="json",r=!Tr(this.urlInput)||this.searchLoad?!0:nt;return m`
      <style>
        ${$(this,Je)}
        ${!this.unstyled&&$(this,Ke)}
      </style>
      <div class="eox-add-layer-main">
        <div class="eox-add-layer-col">
          <!-- Tabbed interface for URL and JSON -->
          <ul class="eox-add-layer-tab ${i}">
            <li
              @click=${()=>M(this,q,$e).call(this,"url")}
              class="${n?"active":""}"
            >
              URL
            </li>
            <li
              @click=${()=>M(this,q,$e).call(this,"json")}
              class="${o?"active":""}"
            >
              JSON
            </li>
          </ul>

          <!-- Button to toggle tabs -->
          <button
            class="add-icon icon"
            @click=${()=>M(this,q,$e).call(this,this.open?null:"url")}
          >
            ${this.unstyled?"Add Layer":""}
          </button>
        </div>
        <div class="eox-add ${i}">
          ${n?m`
              <!-- Input field for URL -->
              <div class="eox-add-layer-col">
                <input 
                  type="text" 
                  class="add-url" 
                  placeholder="Add URL (WMS/XYZ)" 
                  .value="${this.urlInput}" 
                  @input=${M(this,q,Zn)}
                >
                </input>
                <!-- Search button for URL -->
                <button 
                  class="search-icon" 
                  disabled=${r} 
                  @click=${M(this,q,Xn)}
                >
                  ${this.unstyled?"Search":""}
                </button>
              </div>

              <!-- Display layers for WMS capabilities -->
              ${this.wmsCapabilities?m`<ul class="search-lists">
                      ${this.wmsCapabilities.Capability.Layer.Layer.map(a=>{const s=a.Name;return m`
                            <li class="search-list">
                              ${s}
                              <!-- Button to add layer -->
                              <button
                                class="add-layer-icon icon"
                                @click=${()=>M(this,q,Ei).call(this,a)}
                              >
                                ${this.unstyled?"+":""}
                              </button>
                            </li>
                          `})}
                    </ul>`:nt}
            `:m`
                <!-- Textarea for JSON input -->
                <textarea
                  class="add-layer-input"
                  placeholder="Please put a valid eox-map layer JSON."
                  @input=${M(this,q,Gn)}
                  .value=${this.jsonInput}
                ></textarea>

                <!-- Button to add JSON layer -->
                <button
                  class="add-layer-icon json-add-layer"
                  disabled=${_r(this.jsonInput)?nt:!0}
                  @click=${M(this,q,Wn)}
                >
                  ${this.unstyled?"Add JSON":""}
                </button>
              `}
        </div>
      </div>
    `}}q=new WeakSet,Zn=function(i){Na(i,this)},Xn=async function(){const i=await Ha(this);i&&M(this,q,Ei).call(this,i)},Ei=function(i){Fa(i,this),Qi(this)},Wn=function(){Qi(this)},Gn=function(i){Ba(i,this)},$e=function(i){Ua(i,this)},Je=new WeakMap,Ke=new WeakMap,k(qn,"properties",{eoxMap:{attribute:!1,state:!0},unstyled:{type:Boolean},noShadow:{type:Boolean}});customElements.define("eox-layercontrol-add-layers",qn);const za=(e,t)=>{if(t.requestUpdate(),e.target.tagName==="EOX-LAYERCONTROL-LAYER-TOOLS"){const i=t.renderRoot.querySelector("eox-layercontrol-optional-list");i==null||i.requestUpdate()}},tn=e=>{const t=mi(e.for);return t&&t.map!==e.map&&(e.map=t.map),t};var _t,Zt,Kn,Qn,Qe;class Jn extends ot{constructor(){super();_(this,Zt);_(this,_t);_(this,Qe,`
    :host, :root {
      font-family: Roboto, sans-serif;
      --padding: 0.5rem;
      --padding-vertical: .2rem;
      --list-padding: 48px;
      --layer-input-visibility: flex;
      --layer-summary-visibility: flex;
      --layer-type-visibility: block;
      --layer-title-visibility: flex;
      --layer-visibility: block;
      --layer-tools-button-visibility: flex;

      display: block;
      padding: var(--padding) 0;
      --background-color: var(--eox-background-color, transparent);
      background-color: var(--background-color, transparent);
    }
    select {
      background-color: var(--background-color);
    }
  `);this.for="eox-map",this.idProperty="id",this.map=null,this.titleProperty="title",this.showLayerZoomState=!1,this.tools=["info","opacity","datetime","config","remove","sort"],this.addExternalLayers=!1,this.unstyled=!1,this.styleOverride="",this.toolsAsList=!1}firstUpdated(){this.eoxMap=tn(this)}updated(i){i.has("for")&&(this.eoxMap=tn(this))}get eoxMap(){return $(this,_t)}set eoxMap(i){const n=$(this,_t);Pt(this,_t,i),this.requestUpdate("eoxMap",n)}render(){var o,r,a;const i=(o=this.map)==null?void 0:o.getLayers().getArray(),n=i&&((r=ki(i,"layerControlOptional",!0))==null?void 0:r.length)>0;return m`
      <style>
        ${!this.unstyled&&$(this,Qe)}
        ${this.styleOverride}
      </style>

      <!-- Conditional rendering of add layers component -->
      ${F(this.addExternalLayers&&((a=$(this,_t))==null?void 0:a.addOrUpdateLayer),()=>m`
          <eox-layercontrol-add-layers
            .noShadow=${!0}
            .eoxMap=${$(this,_t)}
            .unstyled=${this.unstyled}
          ></eox-layercontrol-add-layers>
        `)}

      <!-- Conditional rendering of layer list component -->
      ${F(this.map,()=>m`
          <eox-layercontrol-layer-list
            .noShadow=${!0}
            class="layers"
            .idProperty=${this.idProperty}
            .layers=${this.map.getLayers()}
            .map=${this.map}
            .titleProperty=${this.titleProperty}
            .showLayerZoomState=${this.showLayerZoomState}
            .tools=${this.tools}
            .unstyled=${this.unstyled}
            .toolsAsList=${this.toolsAsList}
            @changed=${M(this,Zt,Kn)}
            @datetime:updated=${M(this,Zt,Qn)}
          ></eox-layercontrol-layer-list>
        `)}

      <!-- Conditional rendering of optional list component -->
      ${F(n,()=>m`
          <eox-layercontrol-optional-list
            .noShadow=${!0}
            .idProperty=${this.idProperty}
            .layers=${this.map.getLayers()}
            .titleProperty=${this.titleProperty}
            @changed=${()=>this.requestUpdate()}
          ></eox-layercontrol-optional-list>
        `)}
    `}}_t=new WeakMap,Zt=new WeakSet,Kn=function(i){za(i,this),this.dispatchEvent(new CustomEvent("layerchange",{detail:i.detail}))},Qn=function(i){this.dispatchEvent(new CustomEvent("datetime:updated",{detail:i.detail}))},Qe=new WeakMap,k(Jn,"properties",{for:{type:String},idProperty:{attribute:"id-property"},map:{attribute:!1,state:!0},titleProperty:{attribute:"title-property",type:String},showLayerZoomState:{attribute:"show-layer-zoom-state",type:Boolean},tools:{attribute:!1},addExternalLayers:{attribute:!1},unstyled:{type:Boolean},styleOverride:{type:String},toolsAsList:{type:Boolean}});customElements.define("eox-layercontrol",Jn);const ja=`
:host {
  display: block;
}
`,Ya=`
:host, :root {
  --navigation-button-display: inline-flex;
}

* {
  font-family: Roboto, sans-serif;
}

${on}

[part=controls] {
  display: flex;
  align-items: center;
  gap: 8px;
}

button.icon-text.play:before {
  content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Ctitle%3Eplay%3C/title%3E%3Cpath d='M8,5.14V19.14L19,12.14L8,5.14Z' fill='%23fff' /%3E%3C/svg%3E");
}

button.icon-text.pause:before {
  content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Ctitle%3Epause%3C/title%3E%3Cpath d='M14,19H18V5H14M6,19H10V5H6V19Z' fill='%23fff' /%3E%3C/svg%3E");
}

button.icon.previous,
button.icon.next {
  display: var(--navigation-button-display);
}

button.icon.previous:before {
  content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Ctitle%3Echevron-left-circle%3C/title%3E%3Cpath fill='%23004170' d='M22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12M15.4,16.6L10.8,12L15.4,7.4L14,6L8,12L14,18L15.4,16.6Z' /%3E%3C/svg%3E");
}

button.icon.next:before {
  content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Ctitle%3Echevron-right-circle%3C/title%3E%3Cpath fill='%23004170' d='M22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12M10,18L16,12L10,6L8.6,7.4L13.2,12L8.6,16.6L10,18Z' /%3E%3C/svg%3E");
}
`;class qa extends ot{static get properties(){return{width:{type:Number},steps:{type:Array}}}constructor(){super(),this.width=0,this.steps=[],this.height=6,this.svgWidth=0,this._yearMarks=[],this._years=[],this._sliderTicks=[]}connectedCallback(){super.connectedCallback(),window.addEventListener("resize",this.handleResize.bind(this))}disconnectedCallback(){window.removeEventListener("resize",this.handleResize.bind(this)),super.disconnectedCallback()}firstUpdated(){this.yearMarks=this.calculateYearMarks(),this.sliderTicks=this.calculateSliderTicks(),this.handleResize()}updated(t){t.has("steps")&&(this.yearMarks=this.calculateYearMarks(),this.sliderTicks=this.calculateSliderTicks(),this.handleResize())}handleResize(){this.svgWidth=this.shadowRoot.querySelector("svg").clientWidth,this.height=this.shadowRoot.querySelector("svg").clientHeight}groupDatesByYear(){const t=[];return this.steps.forEach(i=>{const o=zt(i).year();let r=t.find(a=>a.year===o);r||(r={year:o,dates:[]},t.push(r)),r.dates.push(i)}),t}preprocessDates(){const t=[];this.steps.forEach(i=>{const o=zt(i).year();let r=t.find(a=>a.year===o);r||(r={year:o,ratio:0,dates:[]},t.push(r)),r.dates.push({date:i,isYearMarker:r.dates.length===0})});for(let i of t)i.ratio=i.dates.length/this.steps.length;return t}get sliderTicks(){return this._sliderTicks}set sliderTicks(t){this._sliderTicks=t,this.requestUpdate()}calculateYearBars(){return this._years.flatMap((n,o)=>{const r=this.steps.indexOf(n.dates[0].date)/(this.steps.length-1)*this.width,a=this.steps.indexOf(n.dates[n.dates.length-1].date)/(this.steps.length-1)*this.width,s=Math.max(0,a-r-2),l=[];return l.push(ht`
            <rect
              key=${o}
              x=${r+2/2} // Add half the spacing to the start position
              y="0"
              width=${s}
              height="6"
              fill="#7596A2"
            ></rect>
        `),s>=30&&l.push(ht`
                <text
                  key=${`label-${o}`}
                  x=${r+16}
                  y="26"
                  fill="#555"
                  font-size="14"
                  text-anchor="middle"
                >
                  ${n.year}
                </text>
            `),l})}calculateIndividualTicks(){return this._years.flatMap((t,i)=>{const n=this.steps.length,o=Math.max(1,Math.floor(n/this.width));return t.dates.filter((r,a)=>a%o===0).map((r,a)=>{const l=this.steps.indexOf(r.date)/(this.steps.length-1)*this.width,c=[];return c.push(ht`
                <line
                  key=${i}-${a}
                  x1=${l}
                  y1="0"
                  x2=${l}
                  y2=${r.isYearMarker?12:6}
                  stroke=${r.isYearMarker?"#222":"#7596A2"}
                  stroke-width="1"
                ></line>
              `),r.isYearMarker&&this.density>.03&&this.density<.5&&i%2==0&&c.push(ht`
                  <text
                    key=${`label-${i}`}
                    x=${l+16}
                    y="30"
                    fill="#555"
                    font-size="14"
                    text-anchor="middle"
                  >
                    ${t.year}
                  </text>
                `),c})})}get density(){return this.steps.length/this.width}calculateSliderTicks(){if(this.density<=.5)return this.calculateIndividualTicks();if(this.density>.5&&this.density<10)return this.calculateYearBars();if(this.density>=10)return this.calculateDecadeBars()}calculateDecadeBars(){const n=this._years.reduce((r,a)=>{const s=Math.floor(a.year/10)*10;return r[s]||(r[s]=[]),r[s].push(...a.dates),r},{});return Object.keys(n).flatMap((r,a)=>{const s=this.steps.indexOf(n[r][0].date)/(this.steps.length-1)*this.width,l=this.steps.indexOf(n[r][n[r].length-1].date)/(this.steps.length-1)*this.width,c=Math.max(0,l-s-2),u=[];return u.push(ht`
            <rect
              key=${`decade-${a}`}
              x=${s+2/2}
              y="0"
              width=${c}
              height="6"
              fill="#555"
            ></rect>
        `),c>=30&&u.push(ht`
                <text
                  key=${`decade-label-${a}`}
                  x=${s+18}
                  y="26"
                  fill="#333"
                  font-size="14"
                  text-anchor="middle"
                >
                  ${r}
                </text>
            `),u})}get lines(){const t=this.numLines>this.width/2?this.width/2:this.numLines,i=this.width/(t-1);return Array.from({length:this.numLines},(n,o)=>o*i)}get numLines(){return this.steps?this.steps.length:0}get yearMarks(){return this._yearMarks}set yearMarks(t){this._yearMarks=t,this.requestUpdate()}get years(){return this._years}set years(t){this._years=t,this.requestUpdate()}calculateYearMarks(){this._years=this.preprocessDates(),this.lines.forEach((t,i)=>{zt(this.steps[i]).year()})}isYearLine(t){return this._yearMarks.some(n=>Math.abs(n.position-t)<1)}render(){return m`
      <div class="fill-width" style="margin-top: 3px;">
        <svg
          style="width: ${this.width}px; height: 30px;"
          viewBox="-1 0 ${this.width+2} ${this.height}"
        >
          ${this.sliderTicks}
        </svg>
      </div>
    `}}customElements.define("eox-sliderticks",qa);var to={exports:{}};(function(e,t){(function(i,n){e.exports=n()})(Ht,function(){return function(i,n,o){n.prototype.dayOfYear=function(r){var a=Math.round((o(this).startOf("day")-o(this).startOf("year"))/864e5)+1;return r==null?a:this.add(r-a,"day")}}})})(to);var Za=to.exports;const Xa=$i(Za);var eo={exports:{}};(function(e,t){(function(i,n){e.exports=n()})(Ht,function(){var i="day";return function(n,o,r){var a=function(c){return c.add(4-c.isoWeekday(),i)},s=o.prototype;s.isoWeekYear=function(){return a(this).year()},s.isoWeek=function(c){if(!this.$utils().u(c))return this.add(7*(c-this.isoWeek()),i);var u,d,p,g,y=a(this),v=(u=this.isoWeekYear(),d=this.$u,p=(d?r.utc:r)().year(u).startOf("year"),g=4-p.isoWeekday(),p.isoWeekday()>4&&(g+=7),p.add(g,i));return y.diff(v,"week")+1},s.isoWeekday=function(c){return this.$utils().u(c)?this.day()||7:this.day(this.day()%7?c:c-7)};var l=s.startOf;s.startOf=function(c,u){var d=this.$utils(),p=!!d.u(u)||u;return d.p(c)==="isoweek"?p?this.date(this.date()-(this.isoWeekday()-1)).startOf("day"):this.date(this.date()-1-(this.isoWeekday()-1)+7).endOf("day"):l.bind(this)(c,u)}}})})(eo);var Wa=eo.exports;const Ga=$i(Wa);zt.extend(Xa);zt.extend(Ga);class Ja extends ot{static get properties(){return{controlProperty:{type:String,attribute:"control-property"},controlValues:{type:Array,attribute:"control-values"},for:{type:String},layer:{type:String},slider:{type:Boolean},navigation:{type:Boolean},_originalParams:{type:Object},play:{type:Boolean,attribute:"play"},displayFormat:{type:String,attribute:"display-format"},currentStep:{type:String,attribute:"current-step"},_animationInterval:{state:!0},_controlSource:{state:!0},_isAnimationPlaying:{state:!0},_newStepIndex:{state:!0},_eoxMap:{state:!0},_width:{state:!0},unstyled:{type:Boolean}}}constructor(){super(),this.controlValues=[],this._newStepIndex=0,this.unstyled=!1,this.play=!1,this.navigation=!0,this.slider=!1,this.for="eox-map",this.layer="",this.controlProperty=void 0,this._eoxMap=void 0,this._width=300,window.addEventListener("resize",()=>{this._width=this.clientWidth}),this.displayFormat=void 0}next(){this._updateStep(1)}previous(){this._updateStep(-1)}playAnimation(t){t?this._animationInterval=setInterval(()=>this._updateStep(1),500):clearInterval(this._animationInterval),this._isAnimationPlaying=t,this.requestUpdate()}setConfig(t){this.layer=t.layer??this.layer,this.controlProperty=t.controlProperty??this.controlProperty,this.controlValues=t.controlValues??this.controlValues,this.requestUpdate(),this._updateStep(0)}get currentStep(){return this.controlValues[this._newStepIndex]}set currentStep(t){const i=this.controlValues.findIndex(n=>n===t);i>-1?this._newStepIndex=i:console.error(`Unable to find step "${t}" in available times!`)}firstUpdated(){this.updateMap()}updated(t){t.has("for")&&this.updateMap()}updateMap(){const t=mi(this.for);if(t){const i=t;this.eoxMap=i}}get eoxMap(){return this._eoxMap}set eoxMap(t){const i=this._eoxMap;this._eoxMap=t,this.requestUpdate("eoxMap",i)}_updateStep(t=1){var i;t&&(this._newStepIndex=this._newStepIndex+t,this._newStepIndex>this.controlValues.length-1&&(this._newStepIndex=0),this._newStepIndex<0&&(this._newStepIndex=this.controlValues.length-1),this.layer&&this.for&&((i=this._controlSource)==null||i.updateParams({[this.controlProperty]:this.controlValues[this._newStepIndex]})),this.requestUpdate(),this.dispatchEvent(new CustomEvent("stepchange",{detail:{currentStep:this.currentStep}})))}getFlatLayersArray(t){const i=[];i.push(...t);let n=i.filter(o=>o instanceof Ii);for(;n.length;){const o=[];for(let r=0,a=n.length;r<a;r++){const s=n[r].getLayers().getArray();i.push(...s),o.push(...s.filter(l=>l instanceof Ii))}n=o}return i}render(){if(this.layer&&this.for){const i=mi(this.for).map;i.once("loadend",()=>{if(!this._originalParams){const o=this.getFlatLayersArray(i.getLayers().getArray()).find(r=>r.get("id")===this.layer);this._controlSource=o.getSource(),this._originalParams=this._controlSource.getParams()}})}return m`
      <style>
        ${ja}
        ${!this.unstyled&&Ya}
      </style>
      <main>
        <div id="controls" part="controls">
          ${this.navigation?m`
                <button
                  part="previous"
                  class="icon previous"
                  @click="${()=>this.previous()}"
                >
                  <
                </button>
              `:nt}
          <span part="current">
            ${this.displayFormat?zt(this.controlValues[this._newStepIndex]).format(this.displayFormat):this.controlValues[this._newStepIndex]}
          </span>
          ${this.navigation?m`
                <button
                  part="next"
                  class="icon next"
                  @click="${()=>this.next()}"
                >
                  >
                </button>
              `:nt}
          ${this.play?m`
                <button
                  part="play"
                  class="small icon-text ${this._isAnimationPlaying?"pause":"play"}"
                  @click="${()=>this.playAnimation(!this._isAnimationPlaying)}"
                >
                  ${this._isAnimationPlaying?"Pause":"Play"}
                </button>
              `:nt}
        </div>
        <div>
          ${this.slider?m`
                <div class="slider-col">
                  <tc-range-slider
                    data="${this.controlValues}"
                    part="slider"
                    value="${this.controlValues[this._newStepIndex]}"
                    style="display: inline-block;"
                    @change="${t=>this._updateStep(this.controlValues.findIndex(i=>i===t.detail.value)-this._newStepIndex)}"
                  ></tc-range-slider>

                  <eox-sliderticks
                    .width="${this._width}"
                    .steps="${this.controlValues}"
                  ></eox-sliderticks>
                </div>
              `:""}
        </div>
      </main>
    `}}customElements.define("eox-timecontrol",Ja);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ka=e=>(t,i)=>{i!==void 0?i.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Qa={attribute:!0,type:String,converter:lo,reflect:!1,hasChanged:co},ts=(e=Qa,t,i)=>{const{kind:n,metadata:o}=i;let r=globalThis.litPropertyMetadata.get(o);if(r===void 0&&globalThis.litPropertyMetadata.set(o,r=new Map),r.set(i.name,e),n==="accessor"){const{name:a}=i;return{set(s){const l=t.get.call(this);t.set.call(this,s),this.requestUpdate(a,l,e)},init(s){return s!==void 0&&this.P(a,void 0,e),s}}}if(n==="setter"){const{name:a}=i;return function(s){const l=this[a];t.call(this,s),this.requestUpdate(a,l,e)}}throw Error("Unsupported decorator location: "+n)};function W(e){return(t,i)=>typeof i=="object"?ts(e,t,i):((n,o,r)=>{const a=o.hasOwnProperty(r);return o.constructor.createProperty(r,a?{...n,wrapped:!0}:n),a?Object.getOwnPropertyDescriptor(o,r):void 0})(e,t,i)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const es=(e,t,i)=>(i.configurable=!0,i.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(e,t,i),i);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function is(e,t){return(i,n,o)=>{const r=a=>{var s;return((s=a.renderRoot)==null?void 0:s.querySelector(e))??null};return es(i,n,{get(){return r(this)}})}}class ns{constructor(t){this.cle=t}setColorScale(){switch(this.cle.scaleType){case"continuous":this.setContinousColorScale();break;case"discrete":this.setDiscreteColorScale();break;case"threshold":this.setThresholdColorScale();break;case"categorical":this.setCategoricalColorScale();break;default:this.invalidScaleType(this.cle.scaleType)}}setContinousColorScale(){const{interpolator:t,domain:i,range:n}=this.cle;this.colorScale=t?vo(t).domain(i):yi().range(n).domain(i).interpolate(an)}setDiscreteColorScale(){this.colorScale=bo().domain(this.cle.domain).range(this.cle.range)}setThresholdColorScale(){const t=this.cle.domain;this.colorScale=wo().domain(t.slice(1,t.length-1)).range(this.cle.range)}setCategoricalColorScale(){this.colorScale=xo().domain(this.cle.domain).range(this.cle.range)}invalidScaleType(t){throw new Error(`invalid property scaletype: ${t}.
      Must be one of "categorical", "continuous", "discrete", "threshold".`)}}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const gi=en(class extends nn{constructor(e){var t;if(super(e),e.type!==kt.ATTRIBUTE||e.name!=="class"||((t=e.strings)==null?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){var n,o;if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(r=>r!=="")));for(const r in t)t[r]&&!((n=this.nt)!=null&&n.has(r))&&this.st.add(r);return this.render(t)}const i=e.element.classList;for(const r of this.st)r in t||(i.remove(r),this.st.delete(r));for(const r in t){const a=!!t[r];a===this.st.has(r)||(o=this.nt)!=null&&o.has(r)||(a?(i.add(r),this.st.add(r)):(i.remove(r),this.st.delete(r)))}return Kt}});class os{constructor(t){this.cle=t}render(){const t=this.cle.titleText?m`<p class="legend-title">${this.cle.titleText}</p>`:"",i={hidden:this.cle.scaleType==="categorical"},n={hidden:this.cle.scaleType!=="categorical","categorical-container":!0};return m`<div
      class="cle-container"
      style="width:${this.cle.width}px; height:auto;"
    >
      ${t}
      <slot name="subtitle"></slot>
      <svg
        class=${gi(i)}
        width=${this.cle.width}
        height=${this.cle.height}
      >
        <!-- discrete and threshold -->
        <g class="rects">${this.renderDiscreteThreshold()}</g>
        <!-- continuous -->
        ${this.renderContinuous()}
        <!-- axis ticks -->
        ${this.renderAxis()}
      </svg>
      <ul class=${gi(n)}>
        ${this.renderCategorical()}
      </ul>
      <slot name="footer"></slot>
    </div>`}renderCategorical(){if(this.cle.scaleType!=="categorical")return"";const{markType:t,colorScale:i,domain:n}=this.cle,o={"legend-item":!0,line:t==="line",circle:t==="circle"};return m`${n.map(r=>m`<li
          class=${gi(o)}
          style="--color:${i(r)}"
        >
          ${r}
        </li>`)}`}renderContinuous(){var d;if(this.cle.scaleType!=="continuous"||this.cle.colorScale===null)return"";const{colorScale:t,marginTop:i,marginLeft:n,marginRight:o,tickSize:r,width:a,range:s}=this.cle,l=this.cle.marginBottom+r,c=this.cle.height+r,u=((d=t.interpolator)==null?void 0:d.call(t))||So(an,s);return ht`<image
      x=${n}
      y=${i}
      width=${a-o-n}
      height=${c-i-l}
      preserveAspectRatio="none"
      href=${this.getColorRamp(u).toDataURL()}
    ></image>`}renderDiscreteThreshold(){if(this.cle.scaleType!=="discrete"&&this.cle.scaleType!=="threshold")return"";const{tickSize:t,marginTop:i,marginLeft:n,colorScale:o,xScale:r}=this.cle,a=this.cle.height+t,s=this.cle.marginBottom+t,l=o.range(),c=d=>o.invertExtent(d).map(r)[0]||n,u=d=>{let[p,g]=o.invertExtent(d).map(r);return p=p||0,g=g||r.range()[1],g-p};return ht`${l.map(d=>ht`<rect x=${c(d)} y=${i} width=${u(d)} height=${a-i-s} fill=${d}></rect>`)}`}renderAxis(){if(!this.cle.xScale||this.cle.scaleType==="categorical")return"";const{ticks:t,tickSize:i,tickFormat:n,tickFormatter:o,tickValues:r,xScale:a,marginTop:s}=this.cle,l=this.cle.height+i,c=this.cle.marginBottom+i,u=r!=null&&r.length?r:a.ticks.apply(a,[t,n]),d=Math.max(i,0)+3,p=()=>u.map(g=>ht`<g class="tick" transform='translate(${a(g)},0)'>
      <line stroke="currentColor" y2="${i}" y1="${s+c-l}"></line>
      <text fill="currentColor" y="${d}" dy="0.71em">${o(g)}</text>
      </g>`);return ht`<g
      class="x-axis"
      transform="translate(0, ${l-c})"
      text-anchor="middle"
    >${p()}</g>`}getColorRamp(t,i=256){const n=document.createElement("canvas");n.setAttribute("height","1"),n.setAttribute("width",`${i}`);const o=n.getContext("2d");for(let r=0;r<i;r++)o.fillStyle=t(r/(i-1)),o.fillRect(r,0,1,1);return n}}const rs=325,as=32,ss=6,ls=12,cs=16,ds=12,io=5,us=6,no=".1f",hs=[0,1],ps=["#ffffcc","#a1dab4","#41b6c4","#2c7fb8","#253494"],fs="Color Legend Element",gs="circle",ms="continuous",ys=["domain","range","interpolator","scaleType"],vs=["scaleType","ticks","tickSize","tickValues","tickFormat","tickFormatter","domain","range","marginLeft","marginRight","marginBottom","marginTop","width","height"];class bs{constructor(t){this.cle=t}setXScale(){const{scaleType:t,marginLeft:i,width:n,marginRight:o}=this.cle;switch(t){case"continuous":this.xScale=yi().domain(this.cle.domain).range([i,n-o]);break;case"discrete":case"threshold":this.xScale=yi().domain([this.cle.domain[0],this.cle.domain[this.cle.domain.length-1]]).rangeRound([i,n-o]);break;case"categorical":this.xScale=null;break;default:throw new Error(`Unrecognized scaleType: ${t}`)}}handleAxisTicks(){var t,i,n;if((this.cle.scaleType==="discrete"||this.cle.scaleType==="threshold")&&!this.cle.tickValues){const[o,r]=this.xScale.domain();this.cle.tickValues=[o,...((i=(t=this.cle.colorScale)==null?void 0:t.thresholds)==null?void 0:i.call(t))||this.cle.colorScale.domain(),r]}typeof this.cle.tickFormatter!="function"&&((n=this.cle.tickFormat)!=null&&n.length?this.cle.tickFormatter=Eo(this.cle.tickFormat):this.cle.tickFormatter=this.xScale.tickFormat(this.cle.ticks||io,this.cle.tickFormat||no))}}const ws=Ci`
  :host {
    --cle-font-family: sans-serif;
    --cle-font-family-title: var(--cle-font-family);
    --cle-font-size: 0.75rem;
    --cle-font-size-title: 0.875rem;
    --cle-letter-spacing: 0.3px;
    --cle-letter-spacing-title: 0.25px;
    --cle-font-weight: 400;
    --cle-font-weight-title: 500;
    --cle-color: currentColor;
    --cle-background: #fff;
    --cle-padding: 0.375rem;
    --cle-border: none;
    --cle-border-radius: 0;
    --cle-box-sizing: content-box;
    --cle-columns: 2;
    --cle-column-width: auto;
    --cle-item-margin: 0.375rem 0.75rem 0 0;
    --cle-line-width: 24px;
    --cle-line-height: 2px;
    --cle-swatch-size: 10px;
    --cle-swatch-width: var(--cle-swatch-size);
    --cle-swatch-height: var(--cle-swatch-size);
    --cle-swatch-margin: 0 0.5rem 0 0;
  }

  :host([hidden]),
  .hidden {
    display: none !important;
  }

  div.cle-container {
    font-family: var(--cle-font-family);
    font-size: var(--cle-font-size);
    font-weight: var(--cle-font-weight);
    letter-spacing: var(--cle-letter-spacing);
    color: var(--cle-color);
    background: var(--cle-background);
    display: inline-block;
    padding: var(--cle-padding);
    border: var(--cle-border);
    border-radius: var(--cle-border-radius);
    box-sizing: var(--cle-box-sizing);
  }

  svg {
    display: block;
    overflow: visible;
  }

  svg text {
    font-family: var(--cle-font-family);
    font-size: var(--cle-font-size);
    fill: var(--cle-color);
  }

  p.legend-title {
    margin: 0;
    font-family: var(--cle-font-family-title);
    font-size: var(--cle-font-size-title);
    font-weight: var(--cle-font-weight-title);
    letter-spacing: var(--cle-letter-spacing-title);
  }

  ul.categorical-container {
    padding: 0;
    margin: 0;
    column-count: var(--cle-columns);
    column-width: var(--cle-column-width);
  }

  .legend-item {
    display: inline-flex;
    align-items: center;
    margin: var(--cle-item-margin);
  }

  .legend-item::before {
    content: "";
    width: var(--cle-swatch-width);
    height: var(--cle-swatch-height);
    margin: var(--cle-swatch-margin);
    background: var(--color);
  }

  .legend-item.line::before {
    width: var(--cle-line-width);
    height: var(--cle-line-height);
  }

  .legend-item.circle::before {
    border-radius: 50%;
  }
`;var U=function(e,t,i,n){var o=arguments.length,r=o<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,i):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(e,t,i,n);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(r=(o<3?a(r):o>3?a(t,i,r):a(t,i))||r);return o>3&&r&&Object.defineProperty(t,i,r),r};let V=class extends ot{constructor(){super(...arguments),this.titleText=fs,this.width=rs,this.height=as,this.marginTop=ss,this.marginRight=ls,this.marginBottom=cs,this.marginLeft=ds,this.scaleType=ms,this.domain=hs,this.range=ps,this.markType=gs,this.ticks=io,this.tickFormat=no,this.tickSize=us,this.colorScaleSetter=new ns(this),this.axisTickSetter=new bs(this),this.renderer=new os(this)}get interpolator(){return this._interpolator}set interpolator(t){if(typeof t=="function"){const i=this.interpolator;this._interpolator=t,this.requestUpdate("interpolator",i)}else throw new Error("interpolator must be a function.")}get tickFormatter(){return this._tickFormatter}set tickFormatter(t){if(typeof t=="function"){const i=this.tickFormatter;this._tickFormatter=t,this.requestUpdate("tickFormatter",i)}else throw new Error("tickFormatter must be a function.")}get colorScale(){return this.colorScaleSetter.colorScale}get xScale(){return this.axisTickSetter.xScale}render(){return this.renderer.render()}willUpdate(t){ys.some(i=>t.has(i))&&this.colorScaleSetter.setColorScale(),vs.some(i=>t.has(i))&&(this.axisTickSetter.setXScale(),this.axisTickSetter.handleAxisTicks())}};V.styles=[ws];U([W({type:String})],V.prototype,"titleText",void 0);U([W({type:Number})],V.prototype,"width",void 0);U([W({type:Number})],V.prototype,"height",void 0);U([W({type:Number})],V.prototype,"marginTop",void 0);U([W({type:Number})],V.prototype,"marginRight",void 0);U([W({type:Number})],V.prototype,"marginBottom",void 0);U([W({type:Number})],V.prototype,"marginLeft",void 0);U([W({type:String})],V.prototype,"scaleType",void 0);U([W({type:Array})],V.prototype,"domain",void 0);U([W({type:Array})],V.prototype,"range",void 0);U([W({type:String})],V.prototype,"markType",void 0);U([W({type:Number})],V.prototype,"ticks",void 0);U([W({type:String})],V.prototype,"tickFormat",void 0);U([W({type:Number})],V.prototype,"tickSize",void 0);U([W({type:Array})],V.prototype,"tickValues",void 0);U([is("svg")],V.prototype,"svg",void 0);U([W({attribute:!1})],V.prototype,"interpolator",null);U([W({attribute:!1})],V.prototype,"tickFormatter",null);V=U([Ka("color-legend")],V);const xs={class:"d-flex flex-column fill-height overflow-auto"},Ss=["for"],zs={__name:"EodashLayerControl",props:{map:{type:String,default:"first"},tools:{type:Array,default:()=>["datetime","info","config","legend","opacity"]},cssVars:{type:Object}},setup(e){const t=e,i={tools:t.tools,style:t.cssVars},{selectedCompareStac:n,selectedStac:o}=Co($o()),r=Lo(()=>t.map==="second"?Vi.value!==null&&n.value!==null:Bi.value!==null&&o.value!==null),a=t.map==="second"?To:_o,s=t.map==="second"?Vi:Bi,l=Do(null),c=async p=>{var I;const{layer:g,datetime:y}=p.detail,v=await Ao(a,g);let L=[];v&&(await v.fetchCollection(),L=await v.updateLayerJson(y,g.get("id"),t.map));const P=(I=L==null?void 0:L.find(B=>{var z;return((z=B==null?void 0:B.properties)==null?void 0:z.id)==="AnalysisGroup"}))==null?void 0:I.layers;P!=null&&P.length&&(P==null||P.forEach(B=>{B.properties.layerControlExpand=!0,B.properties.layerControlToolsExpand=!0}),s.value.layers=L)};let u;const d=p=>{clearTimeout(u),u=setTimeout(()=>{c(p)},500)};return(p,g)=>(Hi(),Ni("span",xs,[r.value?(Hi(),Ni("eox-layercontrol",Ro({key:0},i,{for:ko(s),"onDatetime:updated":d,class:"fill-height",toolsAsList:"true",style:{"--eox-background-color":"transparent"},ref_key:"eoxLayercontrol",ref:l}),null,16,Ss)):Mo("v-if",!0)]))}};export{zs as default};
