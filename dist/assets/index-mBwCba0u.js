function pp(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const l=Object.getOwnPropertyDescriptor(r,o);l&&Object.defineProperty(e,o,l.get?l:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const i of l.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(o){if(o.ep)return;o.ep=!0;const l=n(o);fetch(o.href,l)}})();function hp(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var fc={exports:{}},il={},pc={exports:{}},U={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ar=Symbol.for("react.element"),mp=Symbol.for("react.portal"),gp=Symbol.for("react.fragment"),yp=Symbol.for("react.strict_mode"),xp=Symbol.for("react.profiler"),vp=Symbol.for("react.provider"),kp=Symbol.for("react.context"),wp=Symbol.for("react.forward_ref"),Sp=Symbol.for("react.suspense"),bp=Symbol.for("react.memo"),Ep=Symbol.for("react.lazy"),ba=Symbol.iterator;function jp(e){return e===null||typeof e!="object"?null:(e=ba&&e[ba]||e["@@iterator"],typeof e=="function"?e:null)}var hc={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},mc=Object.assign,gc={};function $n(e,t,n){this.props=e,this.context=t,this.refs=gc,this.updater=n||hc}$n.prototype.isReactComponent={};$n.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};$n.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function yc(){}yc.prototype=$n.prototype;function ps(e,t,n){this.props=e,this.context=t,this.refs=gc,this.updater=n||hc}var hs=ps.prototype=new yc;hs.constructor=ps;mc(hs,$n.prototype);hs.isPureReactComponent=!0;var Ea=Array.isArray,xc=Object.prototype.hasOwnProperty,ms={current:null},vc={key:!0,ref:!0,__self:!0,__source:!0};function kc(e,t,n){var r,o={},l=null,i=null;if(t!=null)for(r in t.ref!==void 0&&(i=t.ref),t.key!==void 0&&(l=""+t.key),t)xc.call(t,r)&&!vc.hasOwnProperty(r)&&(o[r]=t[r]);var s=arguments.length-2;if(s===1)o.children=n;else if(1<s){for(var u=Array(s),c=0;c<s;c++)u[c]=arguments[c+2];o.children=u}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)o[r]===void 0&&(o[r]=s[r]);return{$$typeof:Ar,type:e,key:l,ref:i,props:o,_owner:ms.current}}function Cp(e,t){return{$$typeof:Ar,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function gs(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ar}function Np(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var ja=/\/+/g;function Rl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Np(""+e.key):t.toString(36)}function mo(e,t,n,r,o){var l=typeof e;(l==="undefined"||l==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(l){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case Ar:case mp:i=!0}}if(i)return i=e,o=o(i),e=r===""?"."+Rl(i,0):r,Ea(o)?(n="",e!=null&&(n=e.replace(ja,"$&/")+"/"),mo(o,t,n,"",function(c){return c})):o!=null&&(gs(o)&&(o=Cp(o,n+(!o.key||i&&i.key===o.key?"":(""+o.key).replace(ja,"$&/")+"/")+e)),t.push(o)),1;if(i=0,r=r===""?".":r+":",Ea(e))for(var s=0;s<e.length;s++){l=e[s];var u=r+Rl(l,s);i+=mo(l,t,n,u,o)}else if(u=jp(e),typeof u=="function")for(e=u.call(e),s=0;!(l=e.next()).done;)l=l.value,u=r+Rl(l,s++),i+=mo(l,t,n,u,o);else if(l==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function Jr(e,t,n){if(e==null)return e;var r=[],o=0;return mo(e,r,"","",function(l){return t.call(n,l,o++)}),r}function Rp(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ce={current:null},go={transition:null},_p={ReactCurrentDispatcher:Ce,ReactCurrentBatchConfig:go,ReactCurrentOwner:ms};function wc(){throw Error("act(...) is not supported in production builds of React.")}U.Children={map:Jr,forEach:function(e,t,n){Jr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Jr(e,function(){t++}),t},toArray:function(e){return Jr(e,function(t){return t})||[]},only:function(e){if(!gs(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};U.Component=$n;U.Fragment=gp;U.Profiler=xp;U.PureComponent=ps;U.StrictMode=yp;U.Suspense=Sp;U.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=_p;U.act=wc;U.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=mc({},e.props),o=e.key,l=e.ref,i=e._owner;if(t!=null){if(t.ref!==void 0&&(l=t.ref,i=ms.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(u in t)xc.call(t,u)&&!vc.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&s!==void 0?s[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){s=Array(u);for(var c=0;c<u;c++)s[c]=arguments[c+2];r.children=s}return{$$typeof:Ar,type:e.type,key:o,ref:l,props:r,_owner:i}};U.createContext=function(e){return e={$$typeof:kp,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:vp,_context:e},e.Consumer=e};U.createElement=kc;U.createFactory=function(e){var t=kc.bind(null,e);return t.type=e,t};U.createRef=function(){return{current:null}};U.forwardRef=function(e){return{$$typeof:wp,render:e}};U.isValidElement=gs;U.lazy=function(e){return{$$typeof:Ep,_payload:{_status:-1,_result:e},_init:Rp}};U.memo=function(e,t){return{$$typeof:bp,type:e,compare:t===void 0?null:t}};U.startTransition=function(e){var t=go.transition;go.transition={};try{e()}finally{go.transition=t}};U.unstable_act=wc;U.useCallback=function(e,t){return Ce.current.useCallback(e,t)};U.useContext=function(e){return Ce.current.useContext(e)};U.useDebugValue=function(){};U.useDeferredValue=function(e){return Ce.current.useDeferredValue(e)};U.useEffect=function(e,t){return Ce.current.useEffect(e,t)};U.useId=function(){return Ce.current.useId()};U.useImperativeHandle=function(e,t,n){return Ce.current.useImperativeHandle(e,t,n)};U.useInsertionEffect=function(e,t){return Ce.current.useInsertionEffect(e,t)};U.useLayoutEffect=function(e,t){return Ce.current.useLayoutEffect(e,t)};U.useMemo=function(e,t){return Ce.current.useMemo(e,t)};U.useReducer=function(e,t,n){return Ce.current.useReducer(e,t,n)};U.useRef=function(e){return Ce.current.useRef(e)};U.useState=function(e){return Ce.current.useState(e)};U.useSyncExternalStore=function(e,t,n){return Ce.current.useSyncExternalStore(e,t,n)};U.useTransition=function(){return Ce.current.useTransition()};U.version="18.3.1";pc.exports=U;var b=pc.exports;const Sc=hp(b),Pp=pp({__proto__:null,default:Sc},[b]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tp=b,zp=Symbol.for("react.element"),Op=Symbol.for("react.fragment"),Lp=Object.prototype.hasOwnProperty,Ip=Tp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Mp={key:!0,ref:!0,__self:!0,__source:!0};function bc(e,t,n){var r,o={},l=null,i=null;n!==void 0&&(l=""+n),t.key!==void 0&&(l=""+t.key),t.ref!==void 0&&(i=t.ref);for(r in t)Lp.call(t,r)&&!Mp.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:zp,type:e,key:l,ref:i,props:o,_owner:Ip.current}}il.Fragment=Op;il.jsx=bc;il.jsxs=bc;fc.exports=il;var a=fc.exports,di={},Ec={exports:{}},Be={},jc={exports:{}},Cc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(j,z){var I=j.length;j.push(z);e:for(;0<I;){var $=I-1>>>1,F=j[$];if(0<o(F,z))j[$]=z,j[I]=F,I=$;else break e}}function n(j){return j.length===0?null:j[0]}function r(j){if(j.length===0)return null;var z=j[0],I=j.pop();if(I!==z){j[0]=I;e:for(var $=0,F=j.length,Y=F>>>1;$<Y;){var ne=2*($+1)-1,lt=j[ne],Qt=ne+1,qr=j[Qt];if(0>o(lt,I))Qt<F&&0>o(qr,lt)?(j[$]=qr,j[Qt]=I,$=Qt):(j[$]=lt,j[ne]=I,$=ne);else if(Qt<F&&0>o(qr,I))j[$]=qr,j[Qt]=I,$=Qt;else break e}}return z}function o(j,z){var I=j.sortIndex-z.sortIndex;return I!==0?I:j.id-z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;e.unstable_now=function(){return l.now()}}else{var i=Date,s=i.now();e.unstable_now=function(){return i.now()-s}}var u=[],c=[],d=1,p=null,y=3,S=!1,g=!1,x=!1,v=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(j){for(var z=n(c);z!==null;){if(z.callback===null)r(c);else if(z.startTime<=j)r(c),z.sortIndex=z.expirationTime,t(u,z);else break;z=n(c)}}function w(j){if(x=!1,m(j),!g)if(n(u)!==null)g=!0,E(N);else{var z=n(c);z!==null&&O(w,z.startTime-j)}}function N(j,z){g=!1,x&&(x=!1,h(T),T=-1),S=!0;var I=y;try{for(m(z),p=n(u);p!==null&&(!(p.expirationTime>z)||j&&!oe());){var $=p.callback;if(typeof $=="function"){p.callback=null,y=p.priorityLevel;var F=$(p.expirationTime<=z);z=e.unstable_now(),typeof F=="function"?p.callback=F:p===n(u)&&r(u),m(z)}else r(u);p=n(u)}if(p!==null)var Y=!0;else{var ne=n(c);ne!==null&&O(w,ne.startTime-z),Y=!1}return Y}finally{p=null,y=I,S=!1}}var _=!1,P=null,T=-1,D=5,A=-1;function oe(){return!(e.unstable_now()-A<D)}function Q(){if(P!==null){var j=e.unstable_now();A=j;var z=!0;try{z=P(!0,j)}finally{z?pe():(_=!1,P=null)}}else _=!1}var pe;if(typeof f=="function")pe=function(){f(Q)};else if(typeof MessageChannel<"u"){var he=new MessageChannel,$e=he.port2;he.port1.onmessage=Q,pe=function(){$e.postMessage(null)}}else pe=function(){v(Q,0)};function E(j){P=j,_||(_=!0,pe())}function O(j,z){T=v(function(){j(e.unstable_now())},z)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(j){j.callback=null},e.unstable_continueExecution=function(){g||S||(g=!0,E(N))},e.unstable_forceFrameRate=function(j){0>j||125<j?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):D=0<j?Math.floor(1e3/j):5},e.unstable_getCurrentPriorityLevel=function(){return y},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(j){switch(y){case 1:case 2:case 3:var z=3;break;default:z=y}var I=y;y=z;try{return j()}finally{y=I}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(j,z){switch(j){case 1:case 2:case 3:case 4:case 5:break;default:j=3}var I=y;y=j;try{return z()}finally{y=I}},e.unstable_scheduleCallback=function(j,z,I){var $=e.unstable_now();switch(typeof I=="object"&&I!==null?(I=I.delay,I=typeof I=="number"&&0<I?$+I:$):I=$,j){case 1:var F=-1;break;case 2:F=250;break;case 5:F=1073741823;break;case 4:F=1e4;break;default:F=5e3}return F=I+F,j={id:d++,callback:z,priorityLevel:j,startTime:I,expirationTime:F,sortIndex:-1},I>$?(j.sortIndex=I,t(c,j),n(u)===null&&j===n(c)&&(x?(h(T),T=-1):x=!0,O(w,I-$))):(j.sortIndex=F,t(u,j),g||S||(g=!0,E(N))),j},e.unstable_shouldYield=oe,e.unstable_wrapCallback=function(j){var z=y;return function(){var I=y;y=z;try{return j.apply(this,arguments)}finally{y=I}}}})(Cc);jc.exports=Cc;var Ap=jc.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fp=b,De=Ap;function R(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Nc=new Set,xr={};function cn(e,t){On(e,t),On(e+"Capture",t)}function On(e,t){for(xr[e]=t,e=0;e<t.length;e++)Nc.add(t[e])}var gt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),fi=Object.prototype.hasOwnProperty,Dp=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ca={},Na={};function Bp(e){return fi.call(Na,e)?!0:fi.call(Ca,e)?!1:Dp.test(e)?Na[e]=!0:(Ca[e]=!0,!1)}function Up(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function $p(e,t,n,r){if(t===null||typeof t>"u"||Up(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ne(e,t,n,r,o,l,i){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=l,this.removeEmptyString=i}var ye={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ye[e]=new Ne(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ye[t]=new Ne(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ye[e]=new Ne(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ye[e]=new Ne(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ye[e]=new Ne(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ye[e]=new Ne(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ye[e]=new Ne(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ye[e]=new Ne(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ye[e]=new Ne(e,5,!1,e.toLowerCase(),null,!1,!1)});var ys=/[\-:]([a-z])/g;function xs(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(ys,xs);ye[t]=new Ne(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(ys,xs);ye[t]=new Ne(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(ys,xs);ye[t]=new Ne(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ye[e]=new Ne(e,1,!1,e.toLowerCase(),null,!1,!1)});ye.xlinkHref=new Ne("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ye[e]=new Ne(e,1,!1,e.toLowerCase(),null,!0,!0)});function vs(e,t,n,r){var o=ye.hasOwnProperty(t)?ye[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&($p(t,n,o,r)&&(n=null),r||o===null?Bp(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var kt=Fp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Xr=Symbol.for("react.element"),hn=Symbol.for("react.portal"),mn=Symbol.for("react.fragment"),ks=Symbol.for("react.strict_mode"),pi=Symbol.for("react.profiler"),Rc=Symbol.for("react.provider"),_c=Symbol.for("react.context"),ws=Symbol.for("react.forward_ref"),hi=Symbol.for("react.suspense"),mi=Symbol.for("react.suspense_list"),Ss=Symbol.for("react.memo"),bt=Symbol.for("react.lazy"),Pc=Symbol.for("react.offscreen"),Ra=Symbol.iterator;function Yn(e){return e===null||typeof e!="object"?null:(e=Ra&&e[Ra]||e["@@iterator"],typeof e=="function"?e:null)}var te=Object.assign,_l;function or(e){if(_l===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);_l=t&&t[1]||""}return`
`+_l+e}var Pl=!1;function Tl(e,t){if(!e||Pl)return"";Pl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var o=c.stack.split(`
`),l=r.stack.split(`
`),i=o.length-1,s=l.length-1;1<=i&&0<=s&&o[i]!==l[s];)s--;for(;1<=i&&0<=s;i--,s--)if(o[i]!==l[s]){if(i!==1||s!==1)do if(i--,s--,0>s||o[i]!==l[s]){var u=`
`+o[i].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=i&&0<=s);break}}}finally{Pl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?or(e):""}function Wp(e){switch(e.tag){case 5:return or(e.type);case 16:return or("Lazy");case 13:return or("Suspense");case 19:return or("SuspenseList");case 0:case 2:case 15:return e=Tl(e.type,!1),e;case 11:return e=Tl(e.type.render,!1),e;case 1:return e=Tl(e.type,!0),e;default:return""}}function gi(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case mn:return"Fragment";case hn:return"Portal";case pi:return"Profiler";case ks:return"StrictMode";case hi:return"Suspense";case mi:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case _c:return(e.displayName||"Context")+".Consumer";case Rc:return(e._context.displayName||"Context")+".Provider";case ws:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ss:return t=e.displayName||null,t!==null?t:gi(e.type)||"Memo";case bt:t=e._payload,e=e._init;try{return gi(e(t))}catch{}}return null}function Hp(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return gi(t);case 8:return t===ks?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Dt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Tc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Vp(e){var t=Tc(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,l=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(i){r=""+i,l.call(this,i)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(i){r=""+i},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Gr(e){e._valueTracker||(e._valueTracker=Vp(e))}function zc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Tc(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function zo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function yi(e,t){var n=t.checked;return te({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function _a(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Dt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Oc(e,t){t=t.checked,t!=null&&vs(e,"checked",t,!1)}function xi(e,t){Oc(e,t);var n=Dt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?vi(e,t.type,n):t.hasOwnProperty("defaultValue")&&vi(e,t.type,Dt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Pa(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function vi(e,t,n){(t!=="number"||zo(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var lr=Array.isArray;function Nn(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Dt(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function ki(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(R(91));return te({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ta(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(R(92));if(lr(n)){if(1<n.length)throw Error(R(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Dt(n)}}function Lc(e,t){var n=Dt(t.value),r=Dt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function za(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Ic(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function wi(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Ic(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Zr,Mc=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Zr=Zr||document.createElement("div"),Zr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Zr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function vr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var ar={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Qp=["Webkit","ms","Moz","O"];Object.keys(ar).forEach(function(e){Qp.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),ar[t]=ar[e]})});function Ac(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||ar.hasOwnProperty(e)&&ar[e]?(""+t).trim():t+"px"}function Fc(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=Ac(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var Kp=te({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Si(e,t){if(t){if(Kp[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(R(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(R(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(R(61))}if(t.style!=null&&typeof t.style!="object")throw Error(R(62))}}function bi(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ei=null;function bs(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ji=null,Rn=null,_n=null;function Oa(e){if(e=Br(e)){if(typeof ji!="function")throw Error(R(280));var t=e.stateNode;t&&(t=dl(t),ji(e.stateNode,e.type,t))}}function Dc(e){Rn?_n?_n.push(e):_n=[e]:Rn=e}function Bc(){if(Rn){var e=Rn,t=_n;if(_n=Rn=null,Oa(e),t)for(e=0;e<t.length;e++)Oa(t[e])}}function Uc(e,t){return e(t)}function $c(){}var zl=!1;function Wc(e,t,n){if(zl)return e(t,n);zl=!0;try{return Uc(e,t,n)}finally{zl=!1,(Rn!==null||_n!==null)&&($c(),Bc())}}function kr(e,t){var n=e.stateNode;if(n===null)return null;var r=dl(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(R(231,t,typeof n));return n}var Ci=!1;if(gt)try{var qn={};Object.defineProperty(qn,"passive",{get:function(){Ci=!0}}),window.addEventListener("test",qn,qn),window.removeEventListener("test",qn,qn)}catch{Ci=!1}function Yp(e,t,n,r,o,l,i,s,u){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(d){this.onError(d)}}var ur=!1,Oo=null,Lo=!1,Ni=null,qp={onError:function(e){ur=!0,Oo=e}};function Jp(e,t,n,r,o,l,i,s,u){ur=!1,Oo=null,Yp.apply(qp,arguments)}function Xp(e,t,n,r,o,l,i,s,u){if(Jp.apply(this,arguments),ur){if(ur){var c=Oo;ur=!1,Oo=null}else throw Error(R(198));Lo||(Lo=!0,Ni=c)}}function dn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Hc(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function La(e){if(dn(e)!==e)throw Error(R(188))}function Gp(e){var t=e.alternate;if(!t){if(t=dn(e),t===null)throw Error(R(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var l=o.alternate;if(l===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===l.child){for(l=o.child;l;){if(l===n)return La(o),e;if(l===r)return La(o),t;l=l.sibling}throw Error(R(188))}if(n.return!==r.return)n=o,r=l;else{for(var i=!1,s=o.child;s;){if(s===n){i=!0,n=o,r=l;break}if(s===r){i=!0,r=o,n=l;break}s=s.sibling}if(!i){for(s=l.child;s;){if(s===n){i=!0,n=l,r=o;break}if(s===r){i=!0,r=l,n=o;break}s=s.sibling}if(!i)throw Error(R(189))}}if(n.alternate!==r)throw Error(R(190))}if(n.tag!==3)throw Error(R(188));return n.stateNode.current===n?e:t}function Vc(e){return e=Gp(e),e!==null?Qc(e):null}function Qc(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Qc(e);if(t!==null)return t;e=e.sibling}return null}var Kc=De.unstable_scheduleCallback,Ia=De.unstable_cancelCallback,Zp=De.unstable_shouldYield,eh=De.unstable_requestPaint,le=De.unstable_now,th=De.unstable_getCurrentPriorityLevel,Es=De.unstable_ImmediatePriority,Yc=De.unstable_UserBlockingPriority,Io=De.unstable_NormalPriority,nh=De.unstable_LowPriority,qc=De.unstable_IdlePriority,sl=null,ut=null;function rh(e){if(ut&&typeof ut.onCommitFiberRoot=="function")try{ut.onCommitFiberRoot(sl,e,void 0,(e.current.flags&128)===128)}catch{}}var tt=Math.clz32?Math.clz32:ih,oh=Math.log,lh=Math.LN2;function ih(e){return e>>>=0,e===0?32:31-(oh(e)/lh|0)|0}var eo=64,to=4194304;function ir(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Mo(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,l=e.pingedLanes,i=n&268435455;if(i!==0){var s=i&~o;s!==0?r=ir(s):(l&=i,l!==0&&(r=ir(l)))}else i=n&~o,i!==0?r=ir(i):l!==0&&(r=ir(l));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,l=t&-t,o>=l||o===16&&(l&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-tt(t),o=1<<n,r|=e[n],t&=~o;return r}function sh(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ah(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,l=e.pendingLanes;0<l;){var i=31-tt(l),s=1<<i,u=o[i];u===-1?(!(s&n)||s&r)&&(o[i]=sh(s,t)):u<=t&&(e.expiredLanes|=s),l&=~s}}function Ri(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Jc(){var e=eo;return eo<<=1,!(eo&4194240)&&(eo=64),e}function Ol(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Fr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-tt(t),e[t]=n}function uh(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-tt(n),l=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~l}}function js(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-tt(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var V=0;function Xc(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Gc,Cs,Zc,ed,td,_i=!1,no=[],Pt=null,Tt=null,zt=null,wr=new Map,Sr=new Map,jt=[],ch="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ma(e,t){switch(e){case"focusin":case"focusout":Pt=null;break;case"dragenter":case"dragleave":Tt=null;break;case"mouseover":case"mouseout":zt=null;break;case"pointerover":case"pointerout":wr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Sr.delete(t.pointerId)}}function Jn(e,t,n,r,o,l){return e===null||e.nativeEvent!==l?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:l,targetContainers:[o]},t!==null&&(t=Br(t),t!==null&&Cs(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function dh(e,t,n,r,o){switch(t){case"focusin":return Pt=Jn(Pt,e,t,n,r,o),!0;case"dragenter":return Tt=Jn(Tt,e,t,n,r,o),!0;case"mouseover":return zt=Jn(zt,e,t,n,r,o),!0;case"pointerover":var l=o.pointerId;return wr.set(l,Jn(wr.get(l)||null,e,t,n,r,o)),!0;case"gotpointercapture":return l=o.pointerId,Sr.set(l,Jn(Sr.get(l)||null,e,t,n,r,o)),!0}return!1}function nd(e){var t=Jt(e.target);if(t!==null){var n=dn(t);if(n!==null){if(t=n.tag,t===13){if(t=Hc(n),t!==null){e.blockedOn=t,td(e.priority,function(){Zc(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function yo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Pi(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Ei=r,n.target.dispatchEvent(r),Ei=null}else return t=Br(n),t!==null&&Cs(t),e.blockedOn=n,!1;t.shift()}return!0}function Aa(e,t,n){yo(e)&&n.delete(t)}function fh(){_i=!1,Pt!==null&&yo(Pt)&&(Pt=null),Tt!==null&&yo(Tt)&&(Tt=null),zt!==null&&yo(zt)&&(zt=null),wr.forEach(Aa),Sr.forEach(Aa)}function Xn(e,t){e.blockedOn===t&&(e.blockedOn=null,_i||(_i=!0,De.unstable_scheduleCallback(De.unstable_NormalPriority,fh)))}function br(e){function t(o){return Xn(o,e)}if(0<no.length){Xn(no[0],e);for(var n=1;n<no.length;n++){var r=no[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Pt!==null&&Xn(Pt,e),Tt!==null&&Xn(Tt,e),zt!==null&&Xn(zt,e),wr.forEach(t),Sr.forEach(t),n=0;n<jt.length;n++)r=jt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<jt.length&&(n=jt[0],n.blockedOn===null);)nd(n),n.blockedOn===null&&jt.shift()}var Pn=kt.ReactCurrentBatchConfig,Ao=!0;function ph(e,t,n,r){var o=V,l=Pn.transition;Pn.transition=null;try{V=1,Ns(e,t,n,r)}finally{V=o,Pn.transition=l}}function hh(e,t,n,r){var o=V,l=Pn.transition;Pn.transition=null;try{V=4,Ns(e,t,n,r)}finally{V=o,Pn.transition=l}}function Ns(e,t,n,r){if(Ao){var o=Pi(e,t,n,r);if(o===null)Wl(e,t,r,Fo,n),Ma(e,r);else if(dh(o,e,t,n,r))r.stopPropagation();else if(Ma(e,r),t&4&&-1<ch.indexOf(e)){for(;o!==null;){var l=Br(o);if(l!==null&&Gc(l),l=Pi(e,t,n,r),l===null&&Wl(e,t,r,Fo,n),l===o)break;o=l}o!==null&&r.stopPropagation()}else Wl(e,t,r,null,n)}}var Fo=null;function Pi(e,t,n,r){if(Fo=null,e=bs(r),e=Jt(e),e!==null)if(t=dn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Hc(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Fo=e,null}function rd(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(th()){case Es:return 1;case Yc:return 4;case Io:case nh:return 16;case qc:return 536870912;default:return 16}default:return 16}}var Nt=null,Rs=null,xo=null;function od(){if(xo)return xo;var e,t=Rs,n=t.length,r,o="value"in Nt?Nt.value:Nt.textContent,l=o.length;for(e=0;e<n&&t[e]===o[e];e++);var i=n-e;for(r=1;r<=i&&t[n-r]===o[l-r];r++);return xo=o.slice(e,1<r?1-r:void 0)}function vo(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ro(){return!0}function Fa(){return!1}function Ue(e){function t(n,r,o,l,i){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=l,this.target=i,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(l):l[s]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?ro:Fa,this.isPropagationStopped=Fa,this}return te(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ro)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ro)},persist:function(){},isPersistent:ro}),t}var Wn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},_s=Ue(Wn),Dr=te({},Wn,{view:0,detail:0}),mh=Ue(Dr),Ll,Il,Gn,al=te({},Dr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ps,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Gn&&(Gn&&e.type==="mousemove"?(Ll=e.screenX-Gn.screenX,Il=e.screenY-Gn.screenY):Il=Ll=0,Gn=e),Ll)},movementY:function(e){return"movementY"in e?e.movementY:Il}}),Da=Ue(al),gh=te({},al,{dataTransfer:0}),yh=Ue(gh),xh=te({},Dr,{relatedTarget:0}),Ml=Ue(xh),vh=te({},Wn,{animationName:0,elapsedTime:0,pseudoElement:0}),kh=Ue(vh),wh=te({},Wn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Sh=Ue(wh),bh=te({},Wn,{data:0}),Ba=Ue(bh),Eh={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},jh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ch={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Nh(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Ch[e])?!!t[e]:!1}function Ps(){return Nh}var Rh=te({},Dr,{key:function(e){if(e.key){var t=Eh[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=vo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?jh[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ps,charCode:function(e){return e.type==="keypress"?vo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?vo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),_h=Ue(Rh),Ph=te({},al,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ua=Ue(Ph),Th=te({},Dr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ps}),zh=Ue(Th),Oh=te({},Wn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Lh=Ue(Oh),Ih=te({},al,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Mh=Ue(Ih),Ah=[9,13,27,32],Ts=gt&&"CompositionEvent"in window,cr=null;gt&&"documentMode"in document&&(cr=document.documentMode);var Fh=gt&&"TextEvent"in window&&!cr,ld=gt&&(!Ts||cr&&8<cr&&11>=cr),$a=" ",Wa=!1;function id(e,t){switch(e){case"keyup":return Ah.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function sd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var gn=!1;function Dh(e,t){switch(e){case"compositionend":return sd(t);case"keypress":return t.which!==32?null:(Wa=!0,$a);case"textInput":return e=t.data,e===$a&&Wa?null:e;default:return null}}function Bh(e,t){if(gn)return e==="compositionend"||!Ts&&id(e,t)?(e=od(),xo=Rs=Nt=null,gn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return ld&&t.locale!=="ko"?null:t.data;default:return null}}var Uh={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ha(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Uh[e.type]:t==="textarea"}function ad(e,t,n,r){Dc(r),t=Do(t,"onChange"),0<t.length&&(n=new _s("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var dr=null,Er=null;function $h(e){vd(e,0)}function ul(e){var t=vn(e);if(zc(t))return e}function Wh(e,t){if(e==="change")return t}var ud=!1;if(gt){var Al;if(gt){var Fl="oninput"in document;if(!Fl){var Va=document.createElement("div");Va.setAttribute("oninput","return;"),Fl=typeof Va.oninput=="function"}Al=Fl}else Al=!1;ud=Al&&(!document.documentMode||9<document.documentMode)}function Qa(){dr&&(dr.detachEvent("onpropertychange",cd),Er=dr=null)}function cd(e){if(e.propertyName==="value"&&ul(Er)){var t=[];ad(t,Er,e,bs(e)),Wc($h,t)}}function Hh(e,t,n){e==="focusin"?(Qa(),dr=t,Er=n,dr.attachEvent("onpropertychange",cd)):e==="focusout"&&Qa()}function Vh(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ul(Er)}function Qh(e,t){if(e==="click")return ul(t)}function Kh(e,t){if(e==="input"||e==="change")return ul(t)}function Yh(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var rt=typeof Object.is=="function"?Object.is:Yh;function jr(e,t){if(rt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!fi.call(t,o)||!rt(e[o],t[o]))return!1}return!0}function Ka(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ya(e,t){var n=Ka(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ka(n)}}function dd(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?dd(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function fd(){for(var e=window,t=zo();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=zo(e.document)}return t}function zs(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function qh(e){var t=fd(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&dd(n.ownerDocument.documentElement,n)){if(r!==null&&zs(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,l=Math.min(r.start,o);r=r.end===void 0?l:Math.min(r.end,o),!e.extend&&l>r&&(o=r,r=l,l=o),o=Ya(n,l);var i=Ya(n,r);o&&i&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),l>r?(e.addRange(t),e.extend(i.node,i.offset)):(t.setEnd(i.node,i.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Jh=gt&&"documentMode"in document&&11>=document.documentMode,yn=null,Ti=null,fr=null,zi=!1;function qa(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;zi||yn==null||yn!==zo(r)||(r=yn,"selectionStart"in r&&zs(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),fr&&jr(fr,r)||(fr=r,r=Do(Ti,"onSelect"),0<r.length&&(t=new _s("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=yn)))}function oo(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var xn={animationend:oo("Animation","AnimationEnd"),animationiteration:oo("Animation","AnimationIteration"),animationstart:oo("Animation","AnimationStart"),transitionend:oo("Transition","TransitionEnd")},Dl={},pd={};gt&&(pd=document.createElement("div").style,"AnimationEvent"in window||(delete xn.animationend.animation,delete xn.animationiteration.animation,delete xn.animationstart.animation),"TransitionEvent"in window||delete xn.transitionend.transition);function cl(e){if(Dl[e])return Dl[e];if(!xn[e])return e;var t=xn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in pd)return Dl[e]=t[n];return e}var hd=cl("animationend"),md=cl("animationiteration"),gd=cl("animationstart"),yd=cl("transitionend"),xd=new Map,Ja="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ut(e,t){xd.set(e,t),cn(t,[e])}for(var Bl=0;Bl<Ja.length;Bl++){var Ul=Ja[Bl],Xh=Ul.toLowerCase(),Gh=Ul[0].toUpperCase()+Ul.slice(1);Ut(Xh,"on"+Gh)}Ut(hd,"onAnimationEnd");Ut(md,"onAnimationIteration");Ut(gd,"onAnimationStart");Ut("dblclick","onDoubleClick");Ut("focusin","onFocus");Ut("focusout","onBlur");Ut(yd,"onTransitionEnd");On("onMouseEnter",["mouseout","mouseover"]);On("onMouseLeave",["mouseout","mouseover"]);On("onPointerEnter",["pointerout","pointerover"]);On("onPointerLeave",["pointerout","pointerover"]);cn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));cn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));cn("onBeforeInput",["compositionend","keypress","textInput","paste"]);cn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));cn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));cn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var sr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Zh=new Set("cancel close invalid load scroll toggle".split(" ").concat(sr));function Xa(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Xp(r,t,void 0,e),e.currentTarget=null}function vd(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var l=void 0;if(t)for(var i=r.length-1;0<=i;i--){var s=r[i],u=s.instance,c=s.currentTarget;if(s=s.listener,u!==l&&o.isPropagationStopped())break e;Xa(o,s,c),l=u}else for(i=0;i<r.length;i++){if(s=r[i],u=s.instance,c=s.currentTarget,s=s.listener,u!==l&&o.isPropagationStopped())break e;Xa(o,s,c),l=u}}}if(Lo)throw e=Ni,Lo=!1,Ni=null,e}function q(e,t){var n=t[Ai];n===void 0&&(n=t[Ai]=new Set);var r=e+"__bubble";n.has(r)||(kd(t,e,2,!1),n.add(r))}function $l(e,t,n){var r=0;t&&(r|=4),kd(n,e,r,t)}var lo="_reactListening"+Math.random().toString(36).slice(2);function Cr(e){if(!e[lo]){e[lo]=!0,Nc.forEach(function(n){n!=="selectionchange"&&(Zh.has(n)||$l(n,!1,e),$l(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[lo]||(t[lo]=!0,$l("selectionchange",!1,t))}}function kd(e,t,n,r){switch(rd(t)){case 1:var o=ph;break;case 4:o=hh;break;default:o=Ns}n=o.bind(null,t,n,e),o=void 0,!Ci||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function Wl(e,t,n,r,o){var l=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var i=r.tag;if(i===3||i===4){var s=r.stateNode.containerInfo;if(s===o||s.nodeType===8&&s.parentNode===o)break;if(i===4)for(i=r.return;i!==null;){var u=i.tag;if((u===3||u===4)&&(u=i.stateNode.containerInfo,u===o||u.nodeType===8&&u.parentNode===o))return;i=i.return}for(;s!==null;){if(i=Jt(s),i===null)return;if(u=i.tag,u===5||u===6){r=l=i;continue e}s=s.parentNode}}r=r.return}Wc(function(){var c=l,d=bs(n),p=[];e:{var y=xd.get(e);if(y!==void 0){var S=_s,g=e;switch(e){case"keypress":if(vo(n)===0)break e;case"keydown":case"keyup":S=_h;break;case"focusin":g="focus",S=Ml;break;case"focusout":g="blur",S=Ml;break;case"beforeblur":case"afterblur":S=Ml;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":S=Da;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":S=yh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":S=zh;break;case hd:case md:case gd:S=kh;break;case yd:S=Lh;break;case"scroll":S=mh;break;case"wheel":S=Mh;break;case"copy":case"cut":case"paste":S=Sh;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":S=Ua}var x=(t&4)!==0,v=!x&&e==="scroll",h=x?y!==null?y+"Capture":null:y;x=[];for(var f=c,m;f!==null;){m=f;var w=m.stateNode;if(m.tag===5&&w!==null&&(m=w,h!==null&&(w=kr(f,h),w!=null&&x.push(Nr(f,w,m)))),v)break;f=f.return}0<x.length&&(y=new S(y,g,null,n,d),p.push({event:y,listeners:x}))}}if(!(t&7)){e:{if(y=e==="mouseover"||e==="pointerover",S=e==="mouseout"||e==="pointerout",y&&n!==Ei&&(g=n.relatedTarget||n.fromElement)&&(Jt(g)||g[yt]))break e;if((S||y)&&(y=d.window===d?d:(y=d.ownerDocument)?y.defaultView||y.parentWindow:window,S?(g=n.relatedTarget||n.toElement,S=c,g=g?Jt(g):null,g!==null&&(v=dn(g),g!==v||g.tag!==5&&g.tag!==6)&&(g=null)):(S=null,g=c),S!==g)){if(x=Da,w="onMouseLeave",h="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(x=Ua,w="onPointerLeave",h="onPointerEnter",f="pointer"),v=S==null?y:vn(S),m=g==null?y:vn(g),y=new x(w,f+"leave",S,n,d),y.target=v,y.relatedTarget=m,w=null,Jt(d)===c&&(x=new x(h,f+"enter",g,n,d),x.target=m,x.relatedTarget=v,w=x),v=w,S&&g)t:{for(x=S,h=g,f=0,m=x;m;m=fn(m))f++;for(m=0,w=h;w;w=fn(w))m++;for(;0<f-m;)x=fn(x),f--;for(;0<m-f;)h=fn(h),m--;for(;f--;){if(x===h||h!==null&&x===h.alternate)break t;x=fn(x),h=fn(h)}x=null}else x=null;S!==null&&Ga(p,y,S,x,!1),g!==null&&v!==null&&Ga(p,v,g,x,!0)}}e:{if(y=c?vn(c):window,S=y.nodeName&&y.nodeName.toLowerCase(),S==="select"||S==="input"&&y.type==="file")var N=Wh;else if(Ha(y))if(ud)N=Kh;else{N=Vh;var _=Hh}else(S=y.nodeName)&&S.toLowerCase()==="input"&&(y.type==="checkbox"||y.type==="radio")&&(N=Qh);if(N&&(N=N(e,c))){ad(p,N,n,d);break e}_&&_(e,y,c),e==="focusout"&&(_=y._wrapperState)&&_.controlled&&y.type==="number"&&vi(y,"number",y.value)}switch(_=c?vn(c):window,e){case"focusin":(Ha(_)||_.contentEditable==="true")&&(yn=_,Ti=c,fr=null);break;case"focusout":fr=Ti=yn=null;break;case"mousedown":zi=!0;break;case"contextmenu":case"mouseup":case"dragend":zi=!1,qa(p,n,d);break;case"selectionchange":if(Jh)break;case"keydown":case"keyup":qa(p,n,d)}var P;if(Ts)e:{switch(e){case"compositionstart":var T="onCompositionStart";break e;case"compositionend":T="onCompositionEnd";break e;case"compositionupdate":T="onCompositionUpdate";break e}T=void 0}else gn?id(e,n)&&(T="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(T="onCompositionStart");T&&(ld&&n.locale!=="ko"&&(gn||T!=="onCompositionStart"?T==="onCompositionEnd"&&gn&&(P=od()):(Nt=d,Rs="value"in Nt?Nt.value:Nt.textContent,gn=!0)),_=Do(c,T),0<_.length&&(T=new Ba(T,e,null,n,d),p.push({event:T,listeners:_}),P?T.data=P:(P=sd(n),P!==null&&(T.data=P)))),(P=Fh?Dh(e,n):Bh(e,n))&&(c=Do(c,"onBeforeInput"),0<c.length&&(d=new Ba("onBeforeInput","beforeinput",null,n,d),p.push({event:d,listeners:c}),d.data=P))}vd(p,t)})}function Nr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Do(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,l=o.stateNode;o.tag===5&&l!==null&&(o=l,l=kr(e,n),l!=null&&r.unshift(Nr(e,l,o)),l=kr(e,t),l!=null&&r.push(Nr(e,l,o))),e=e.return}return r}function fn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ga(e,t,n,r,o){for(var l=t._reactName,i=[];n!==null&&n!==r;){var s=n,u=s.alternate,c=s.stateNode;if(u!==null&&u===r)break;s.tag===5&&c!==null&&(s=c,o?(u=kr(n,l),u!=null&&i.unshift(Nr(n,u,s))):o||(u=kr(n,l),u!=null&&i.push(Nr(n,u,s)))),n=n.return}i.length!==0&&e.push({event:t,listeners:i})}var em=/\r\n?/g,tm=/\u0000|\uFFFD/g;function Za(e){return(typeof e=="string"?e:""+e).replace(em,`
`).replace(tm,"")}function io(e,t,n){if(t=Za(t),Za(e)!==t&&n)throw Error(R(425))}function Bo(){}var Oi=null,Li=null;function Ii(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Mi=typeof setTimeout=="function"?setTimeout:void 0,nm=typeof clearTimeout=="function"?clearTimeout:void 0,eu=typeof Promise=="function"?Promise:void 0,rm=typeof queueMicrotask=="function"?queueMicrotask:typeof eu<"u"?function(e){return eu.resolve(null).then(e).catch(om)}:Mi;function om(e){setTimeout(function(){throw e})}function Hl(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),br(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);br(t)}function Ot(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function tu(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Hn=Math.random().toString(36).slice(2),at="__reactFiber$"+Hn,Rr="__reactProps$"+Hn,yt="__reactContainer$"+Hn,Ai="__reactEvents$"+Hn,lm="__reactListeners$"+Hn,im="__reactHandles$"+Hn;function Jt(e){var t=e[at];if(t)return t;for(var n=e.parentNode;n;){if(t=n[yt]||n[at]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=tu(e);e!==null;){if(n=e[at])return n;e=tu(e)}return t}e=n,n=e.parentNode}return null}function Br(e){return e=e[at]||e[yt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function vn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(R(33))}function dl(e){return e[Rr]||null}var Fi=[],kn=-1;function $t(e){return{current:e}}function X(e){0>kn||(e.current=Fi[kn],Fi[kn]=null,kn--)}function K(e,t){kn++,Fi[kn]=e.current,e.current=t}var Bt={},be=$t(Bt),Te=$t(!1),rn=Bt;function Ln(e,t){var n=e.type.contextTypes;if(!n)return Bt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},l;for(l in n)o[l]=t[l];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function ze(e){return e=e.childContextTypes,e!=null}function Uo(){X(Te),X(be)}function nu(e,t,n){if(be.current!==Bt)throw Error(R(168));K(be,t),K(Te,n)}function wd(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(R(108,Hp(e)||"Unknown",o));return te({},n,r)}function $o(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Bt,rn=be.current,K(be,e),K(Te,Te.current),!0}function ru(e,t,n){var r=e.stateNode;if(!r)throw Error(R(169));n?(e=wd(e,t,rn),r.__reactInternalMemoizedMergedChildContext=e,X(Te),X(be),K(be,e)):X(Te),K(Te,n)}var ft=null,fl=!1,Vl=!1;function Sd(e){ft===null?ft=[e]:ft.push(e)}function sm(e){fl=!0,Sd(e)}function Wt(){if(!Vl&&ft!==null){Vl=!0;var e=0,t=V;try{var n=ft;for(V=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}ft=null,fl=!1}catch(o){throw ft!==null&&(ft=ft.slice(e+1)),Kc(Es,Wt),o}finally{V=t,Vl=!1}}return null}var wn=[],Sn=0,Wo=null,Ho=0,He=[],Ve=0,on=null,pt=1,ht="";function Kt(e,t){wn[Sn++]=Ho,wn[Sn++]=Wo,Wo=e,Ho=t}function bd(e,t,n){He[Ve++]=pt,He[Ve++]=ht,He[Ve++]=on,on=e;var r=pt;e=ht;var o=32-tt(r)-1;r&=~(1<<o),n+=1;var l=32-tt(t)+o;if(30<l){var i=o-o%5;l=(r&(1<<i)-1).toString(32),r>>=i,o-=i,pt=1<<32-tt(t)+o|n<<o|r,ht=l+e}else pt=1<<l|n<<o|r,ht=e}function Os(e){e.return!==null&&(Kt(e,1),bd(e,1,0))}function Ls(e){for(;e===Wo;)Wo=wn[--Sn],wn[Sn]=null,Ho=wn[--Sn],wn[Sn]=null;for(;e===on;)on=He[--Ve],He[Ve]=null,ht=He[--Ve],He[Ve]=null,pt=He[--Ve],He[Ve]=null}var Fe=null,Ae=null,G=!1,et=null;function Ed(e,t){var n=Qe(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function ou(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Fe=e,Ae=Ot(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Fe=e,Ae=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=on!==null?{id:pt,overflow:ht}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Qe(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Fe=e,Ae=null,!0):!1;default:return!1}}function Di(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Bi(e){if(G){var t=Ae;if(t){var n=t;if(!ou(e,t)){if(Di(e))throw Error(R(418));t=Ot(n.nextSibling);var r=Fe;t&&ou(e,t)?Ed(r,n):(e.flags=e.flags&-4097|2,G=!1,Fe=e)}}else{if(Di(e))throw Error(R(418));e.flags=e.flags&-4097|2,G=!1,Fe=e}}}function lu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Fe=e}function so(e){if(e!==Fe)return!1;if(!G)return lu(e),G=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Ii(e.type,e.memoizedProps)),t&&(t=Ae)){if(Di(e))throw jd(),Error(R(418));for(;t;)Ed(e,t),t=Ot(t.nextSibling)}if(lu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(R(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ae=Ot(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ae=null}}else Ae=Fe?Ot(e.stateNode.nextSibling):null;return!0}function jd(){for(var e=Ae;e;)e=Ot(e.nextSibling)}function In(){Ae=Fe=null,G=!1}function Is(e){et===null?et=[e]:et.push(e)}var am=kt.ReactCurrentBatchConfig;function Zn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(R(309));var r=n.stateNode}if(!r)throw Error(R(147,e));var o=r,l=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===l?t.ref:(t=function(i){var s=o.refs;i===null?delete s[l]:s[l]=i},t._stringRef=l,t)}if(typeof e!="string")throw Error(R(284));if(!n._owner)throw Error(R(290,e))}return e}function ao(e,t){throw e=Object.prototype.toString.call(t),Error(R(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function iu(e){var t=e._init;return t(e._payload)}function Cd(e){function t(h,f){if(e){var m=h.deletions;m===null?(h.deletions=[f],h.flags|=16):m.push(f)}}function n(h,f){if(!e)return null;for(;f!==null;)t(h,f),f=f.sibling;return null}function r(h,f){for(h=new Map;f!==null;)f.key!==null?h.set(f.key,f):h.set(f.index,f),f=f.sibling;return h}function o(h,f){return h=At(h,f),h.index=0,h.sibling=null,h}function l(h,f,m){return h.index=m,e?(m=h.alternate,m!==null?(m=m.index,m<f?(h.flags|=2,f):m):(h.flags|=2,f)):(h.flags|=1048576,f)}function i(h){return e&&h.alternate===null&&(h.flags|=2),h}function s(h,f,m,w){return f===null||f.tag!==6?(f=Gl(m,h.mode,w),f.return=h,f):(f=o(f,m),f.return=h,f)}function u(h,f,m,w){var N=m.type;return N===mn?d(h,f,m.props.children,w,m.key):f!==null&&(f.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===bt&&iu(N)===f.type)?(w=o(f,m.props),w.ref=Zn(h,f,m),w.return=h,w):(w=Co(m.type,m.key,m.props,null,h.mode,w),w.ref=Zn(h,f,m),w.return=h,w)}function c(h,f,m,w){return f===null||f.tag!==4||f.stateNode.containerInfo!==m.containerInfo||f.stateNode.implementation!==m.implementation?(f=Zl(m,h.mode,w),f.return=h,f):(f=o(f,m.children||[]),f.return=h,f)}function d(h,f,m,w,N){return f===null||f.tag!==7?(f=tn(m,h.mode,w,N),f.return=h,f):(f=o(f,m),f.return=h,f)}function p(h,f,m){if(typeof f=="string"&&f!==""||typeof f=="number")return f=Gl(""+f,h.mode,m),f.return=h,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Xr:return m=Co(f.type,f.key,f.props,null,h.mode,m),m.ref=Zn(h,null,f),m.return=h,m;case hn:return f=Zl(f,h.mode,m),f.return=h,f;case bt:var w=f._init;return p(h,w(f._payload),m)}if(lr(f)||Yn(f))return f=tn(f,h.mode,m,null),f.return=h,f;ao(h,f)}return null}function y(h,f,m,w){var N=f!==null?f.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return N!==null?null:s(h,f,""+m,w);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Xr:return m.key===N?u(h,f,m,w):null;case hn:return m.key===N?c(h,f,m,w):null;case bt:return N=m._init,y(h,f,N(m._payload),w)}if(lr(m)||Yn(m))return N!==null?null:d(h,f,m,w,null);ao(h,m)}return null}function S(h,f,m,w,N){if(typeof w=="string"&&w!==""||typeof w=="number")return h=h.get(m)||null,s(f,h,""+w,N);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Xr:return h=h.get(w.key===null?m:w.key)||null,u(f,h,w,N);case hn:return h=h.get(w.key===null?m:w.key)||null,c(f,h,w,N);case bt:var _=w._init;return S(h,f,m,_(w._payload),N)}if(lr(w)||Yn(w))return h=h.get(m)||null,d(f,h,w,N,null);ao(f,w)}return null}function g(h,f,m,w){for(var N=null,_=null,P=f,T=f=0,D=null;P!==null&&T<m.length;T++){P.index>T?(D=P,P=null):D=P.sibling;var A=y(h,P,m[T],w);if(A===null){P===null&&(P=D);break}e&&P&&A.alternate===null&&t(h,P),f=l(A,f,T),_===null?N=A:_.sibling=A,_=A,P=D}if(T===m.length)return n(h,P),G&&Kt(h,T),N;if(P===null){for(;T<m.length;T++)P=p(h,m[T],w),P!==null&&(f=l(P,f,T),_===null?N=P:_.sibling=P,_=P);return G&&Kt(h,T),N}for(P=r(h,P);T<m.length;T++)D=S(P,h,T,m[T],w),D!==null&&(e&&D.alternate!==null&&P.delete(D.key===null?T:D.key),f=l(D,f,T),_===null?N=D:_.sibling=D,_=D);return e&&P.forEach(function(oe){return t(h,oe)}),G&&Kt(h,T),N}function x(h,f,m,w){var N=Yn(m);if(typeof N!="function")throw Error(R(150));if(m=N.call(m),m==null)throw Error(R(151));for(var _=N=null,P=f,T=f=0,D=null,A=m.next();P!==null&&!A.done;T++,A=m.next()){P.index>T?(D=P,P=null):D=P.sibling;var oe=y(h,P,A.value,w);if(oe===null){P===null&&(P=D);break}e&&P&&oe.alternate===null&&t(h,P),f=l(oe,f,T),_===null?N=oe:_.sibling=oe,_=oe,P=D}if(A.done)return n(h,P),G&&Kt(h,T),N;if(P===null){for(;!A.done;T++,A=m.next())A=p(h,A.value,w),A!==null&&(f=l(A,f,T),_===null?N=A:_.sibling=A,_=A);return G&&Kt(h,T),N}for(P=r(h,P);!A.done;T++,A=m.next())A=S(P,h,T,A.value,w),A!==null&&(e&&A.alternate!==null&&P.delete(A.key===null?T:A.key),f=l(A,f,T),_===null?N=A:_.sibling=A,_=A);return e&&P.forEach(function(Q){return t(h,Q)}),G&&Kt(h,T),N}function v(h,f,m,w){if(typeof m=="object"&&m!==null&&m.type===mn&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case Xr:e:{for(var N=m.key,_=f;_!==null;){if(_.key===N){if(N=m.type,N===mn){if(_.tag===7){n(h,_.sibling),f=o(_,m.props.children),f.return=h,h=f;break e}}else if(_.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===bt&&iu(N)===_.type){n(h,_.sibling),f=o(_,m.props),f.ref=Zn(h,_,m),f.return=h,h=f;break e}n(h,_);break}else t(h,_);_=_.sibling}m.type===mn?(f=tn(m.props.children,h.mode,w,m.key),f.return=h,h=f):(w=Co(m.type,m.key,m.props,null,h.mode,w),w.ref=Zn(h,f,m),w.return=h,h=w)}return i(h);case hn:e:{for(_=m.key;f!==null;){if(f.key===_)if(f.tag===4&&f.stateNode.containerInfo===m.containerInfo&&f.stateNode.implementation===m.implementation){n(h,f.sibling),f=o(f,m.children||[]),f.return=h,h=f;break e}else{n(h,f);break}else t(h,f);f=f.sibling}f=Zl(m,h.mode,w),f.return=h,h=f}return i(h);case bt:return _=m._init,v(h,f,_(m._payload),w)}if(lr(m))return g(h,f,m,w);if(Yn(m))return x(h,f,m,w);ao(h,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,f!==null&&f.tag===6?(n(h,f.sibling),f=o(f,m),f.return=h,h=f):(n(h,f),f=Gl(m,h.mode,w),f.return=h,h=f),i(h)):n(h,f)}return v}var Mn=Cd(!0),Nd=Cd(!1),Vo=$t(null),Qo=null,bn=null,Ms=null;function As(){Ms=bn=Qo=null}function Fs(e){var t=Vo.current;X(Vo),e._currentValue=t}function Ui(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Tn(e,t){Qo=e,Ms=bn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Pe=!0),e.firstContext=null)}function Ye(e){var t=e._currentValue;if(Ms!==e)if(e={context:e,memoizedValue:t,next:null},bn===null){if(Qo===null)throw Error(R(308));bn=e,Qo.dependencies={lanes:0,firstContext:e}}else bn=bn.next=e;return t}var Xt=null;function Ds(e){Xt===null?Xt=[e]:Xt.push(e)}function Rd(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,Ds(t)):(n.next=o.next,o.next=n),t.interleaved=n,xt(e,r)}function xt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Et=!1;function Bs(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function _d(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function mt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Lt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,W&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,xt(e,n)}return o=r.interleaved,o===null?(t.next=t,Ds(r)):(t.next=o.next,o.next=t),r.interleaved=t,xt(e,n)}function ko(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,js(e,n)}}function su(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,l=null;if(n=n.firstBaseUpdate,n!==null){do{var i={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};l===null?o=l=i:l=l.next=i,n=n.next}while(n!==null);l===null?o=l=t:l=l.next=t}else o=l=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:l,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Ko(e,t,n,r){var o=e.updateQueue;Et=!1;var l=o.firstBaseUpdate,i=o.lastBaseUpdate,s=o.shared.pending;if(s!==null){o.shared.pending=null;var u=s,c=u.next;u.next=null,i===null?l=c:i.next=c,i=u;var d=e.alternate;d!==null&&(d=d.updateQueue,s=d.lastBaseUpdate,s!==i&&(s===null?d.firstBaseUpdate=c:s.next=c,d.lastBaseUpdate=u))}if(l!==null){var p=o.baseState;i=0,d=c=u=null,s=l;do{var y=s.lane,S=s.eventTime;if((r&y)===y){d!==null&&(d=d.next={eventTime:S,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var g=e,x=s;switch(y=t,S=n,x.tag){case 1:if(g=x.payload,typeof g=="function"){p=g.call(S,p,y);break e}p=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=x.payload,y=typeof g=="function"?g.call(S,p,y):g,y==null)break e;p=te({},p,y);break e;case 2:Et=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,y=o.effects,y===null?o.effects=[s]:y.push(s))}else S={eventTime:S,lane:y,tag:s.tag,payload:s.payload,callback:s.callback,next:null},d===null?(c=d=S,u=p):d=d.next=S,i|=y;if(s=s.next,s===null){if(s=o.shared.pending,s===null)break;y=s,s=y.next,y.next=null,o.lastBaseUpdate=y,o.shared.pending=null}}while(!0);if(d===null&&(u=p),o.baseState=u,o.firstBaseUpdate=c,o.lastBaseUpdate=d,t=o.shared.interleaved,t!==null){o=t;do i|=o.lane,o=o.next;while(o!==t)}else l===null&&(o.shared.lanes=0);sn|=i,e.lanes=i,e.memoizedState=p}}function au(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(R(191,o));o.call(r)}}}var Ur={},ct=$t(Ur),_r=$t(Ur),Pr=$t(Ur);function Gt(e){if(e===Ur)throw Error(R(174));return e}function Us(e,t){switch(K(Pr,t),K(_r,e),K(ct,Ur),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:wi(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=wi(t,e)}X(ct),K(ct,t)}function An(){X(ct),X(_r),X(Pr)}function Pd(e){Gt(Pr.current);var t=Gt(ct.current),n=wi(t,e.type);t!==n&&(K(_r,e),K(ct,n))}function $s(e){_r.current===e&&(X(ct),X(_r))}var Z=$t(0);function Yo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ql=[];function Ws(){for(var e=0;e<Ql.length;e++)Ql[e]._workInProgressVersionPrimary=null;Ql.length=0}var wo=kt.ReactCurrentDispatcher,Kl=kt.ReactCurrentBatchConfig,ln=0,ee=null,ue=null,de=null,qo=!1,pr=!1,Tr=0,um=0;function ve(){throw Error(R(321))}function Hs(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!rt(e[n],t[n]))return!1;return!0}function Vs(e,t,n,r,o,l){if(ln=l,ee=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,wo.current=e===null||e.memoizedState===null?pm:hm,e=n(r,o),pr){l=0;do{if(pr=!1,Tr=0,25<=l)throw Error(R(301));l+=1,de=ue=null,t.updateQueue=null,wo.current=mm,e=n(r,o)}while(pr)}if(wo.current=Jo,t=ue!==null&&ue.next!==null,ln=0,de=ue=ee=null,qo=!1,t)throw Error(R(300));return e}function Qs(){var e=Tr!==0;return Tr=0,e}function st(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return de===null?ee.memoizedState=de=e:de=de.next=e,de}function qe(){if(ue===null){var e=ee.alternate;e=e!==null?e.memoizedState:null}else e=ue.next;var t=de===null?ee.memoizedState:de.next;if(t!==null)de=t,ue=e;else{if(e===null)throw Error(R(310));ue=e,e={memoizedState:ue.memoizedState,baseState:ue.baseState,baseQueue:ue.baseQueue,queue:ue.queue,next:null},de===null?ee.memoizedState=de=e:de=de.next=e}return de}function zr(e,t){return typeof t=="function"?t(e):t}function Yl(e){var t=qe(),n=t.queue;if(n===null)throw Error(R(311));n.lastRenderedReducer=e;var r=ue,o=r.baseQueue,l=n.pending;if(l!==null){if(o!==null){var i=o.next;o.next=l.next,l.next=i}r.baseQueue=o=l,n.pending=null}if(o!==null){l=o.next,r=r.baseState;var s=i=null,u=null,c=l;do{var d=c.lane;if((ln&d)===d)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var p={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(s=u=p,i=r):u=u.next=p,ee.lanes|=d,sn|=d}c=c.next}while(c!==null&&c!==l);u===null?i=r:u.next=s,rt(r,t.memoizedState)||(Pe=!0),t.memoizedState=r,t.baseState=i,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do l=o.lane,ee.lanes|=l,sn|=l,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function ql(e){var t=qe(),n=t.queue;if(n===null)throw Error(R(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,l=t.memoizedState;if(o!==null){n.pending=null;var i=o=o.next;do l=e(l,i.action),i=i.next;while(i!==o);rt(l,t.memoizedState)||(Pe=!0),t.memoizedState=l,t.baseQueue===null&&(t.baseState=l),n.lastRenderedState=l}return[l,r]}function Td(){}function zd(e,t){var n=ee,r=qe(),o=t(),l=!rt(r.memoizedState,o);if(l&&(r.memoizedState=o,Pe=!0),r=r.queue,Ks(Id.bind(null,n,r,e),[e]),r.getSnapshot!==t||l||de!==null&&de.memoizedState.tag&1){if(n.flags|=2048,Or(9,Ld.bind(null,n,r,o,t),void 0,null),fe===null)throw Error(R(349));ln&30||Od(n,t,o)}return o}function Od(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ee.updateQueue,t===null?(t={lastEffect:null,stores:null},ee.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Ld(e,t,n,r){t.value=n,t.getSnapshot=r,Md(t)&&Ad(e)}function Id(e,t,n){return n(function(){Md(t)&&Ad(e)})}function Md(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!rt(e,n)}catch{return!0}}function Ad(e){var t=xt(e,1);t!==null&&nt(t,e,1,-1)}function uu(e){var t=st();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:zr,lastRenderedState:e},t.queue=e,e=e.dispatch=fm.bind(null,ee,e),[t.memoizedState,e]}function Or(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ee.updateQueue,t===null?(t={lastEffect:null,stores:null},ee.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Fd(){return qe().memoizedState}function So(e,t,n,r){var o=st();ee.flags|=e,o.memoizedState=Or(1|t,n,void 0,r===void 0?null:r)}function pl(e,t,n,r){var o=qe();r=r===void 0?null:r;var l=void 0;if(ue!==null){var i=ue.memoizedState;if(l=i.destroy,r!==null&&Hs(r,i.deps)){o.memoizedState=Or(t,n,l,r);return}}ee.flags|=e,o.memoizedState=Or(1|t,n,l,r)}function cu(e,t){return So(8390656,8,e,t)}function Ks(e,t){return pl(2048,8,e,t)}function Dd(e,t){return pl(4,2,e,t)}function Bd(e,t){return pl(4,4,e,t)}function Ud(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function $d(e,t,n){return n=n!=null?n.concat([e]):null,pl(4,4,Ud.bind(null,t,e),n)}function Ys(){}function Wd(e,t){var n=qe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Hs(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Hd(e,t){var n=qe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Hs(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Vd(e,t,n){return ln&21?(rt(n,t)||(n=Jc(),ee.lanes|=n,sn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Pe=!0),e.memoizedState=n)}function cm(e,t){var n=V;V=n!==0&&4>n?n:4,e(!0);var r=Kl.transition;Kl.transition={};try{e(!1),t()}finally{V=n,Kl.transition=r}}function Qd(){return qe().memoizedState}function dm(e,t,n){var r=Mt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Kd(e))Yd(t,n);else if(n=Rd(e,t,n,r),n!==null){var o=je();nt(n,e,r,o),qd(n,t,r)}}function fm(e,t,n){var r=Mt(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Kd(e))Yd(t,o);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=t.lastRenderedReducer,l!==null))try{var i=t.lastRenderedState,s=l(i,n);if(o.hasEagerState=!0,o.eagerState=s,rt(s,i)){var u=t.interleaved;u===null?(o.next=o,Ds(t)):(o.next=u.next,u.next=o),t.interleaved=o;return}}catch{}finally{}n=Rd(e,t,o,r),n!==null&&(o=je(),nt(n,e,r,o),qd(n,t,r))}}function Kd(e){var t=e.alternate;return e===ee||t!==null&&t===ee}function Yd(e,t){pr=qo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function qd(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,js(e,n)}}var Jo={readContext:Ye,useCallback:ve,useContext:ve,useEffect:ve,useImperativeHandle:ve,useInsertionEffect:ve,useLayoutEffect:ve,useMemo:ve,useReducer:ve,useRef:ve,useState:ve,useDebugValue:ve,useDeferredValue:ve,useTransition:ve,useMutableSource:ve,useSyncExternalStore:ve,useId:ve,unstable_isNewReconciler:!1},pm={readContext:Ye,useCallback:function(e,t){return st().memoizedState=[e,t===void 0?null:t],e},useContext:Ye,useEffect:cu,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,So(4194308,4,Ud.bind(null,t,e),n)},useLayoutEffect:function(e,t){return So(4194308,4,e,t)},useInsertionEffect:function(e,t){return So(4,2,e,t)},useMemo:function(e,t){var n=st();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=st();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=dm.bind(null,ee,e),[r.memoizedState,e]},useRef:function(e){var t=st();return e={current:e},t.memoizedState=e},useState:uu,useDebugValue:Ys,useDeferredValue:function(e){return st().memoizedState=e},useTransition:function(){var e=uu(!1),t=e[0];return e=cm.bind(null,e[1]),st().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ee,o=st();if(G){if(n===void 0)throw Error(R(407));n=n()}else{if(n=t(),fe===null)throw Error(R(349));ln&30||Od(r,t,n)}o.memoizedState=n;var l={value:n,getSnapshot:t};return o.queue=l,cu(Id.bind(null,r,l,e),[e]),r.flags|=2048,Or(9,Ld.bind(null,r,l,n,t),void 0,null),n},useId:function(){var e=st(),t=fe.identifierPrefix;if(G){var n=ht,r=pt;n=(r&~(1<<32-tt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Tr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=um++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},hm={readContext:Ye,useCallback:Wd,useContext:Ye,useEffect:Ks,useImperativeHandle:$d,useInsertionEffect:Dd,useLayoutEffect:Bd,useMemo:Hd,useReducer:Yl,useRef:Fd,useState:function(){return Yl(zr)},useDebugValue:Ys,useDeferredValue:function(e){var t=qe();return Vd(t,ue.memoizedState,e)},useTransition:function(){var e=Yl(zr)[0],t=qe().memoizedState;return[e,t]},useMutableSource:Td,useSyncExternalStore:zd,useId:Qd,unstable_isNewReconciler:!1},mm={readContext:Ye,useCallback:Wd,useContext:Ye,useEffect:Ks,useImperativeHandle:$d,useInsertionEffect:Dd,useLayoutEffect:Bd,useMemo:Hd,useReducer:ql,useRef:Fd,useState:function(){return ql(zr)},useDebugValue:Ys,useDeferredValue:function(e){var t=qe();return ue===null?t.memoizedState=e:Vd(t,ue.memoizedState,e)},useTransition:function(){var e=ql(zr)[0],t=qe().memoizedState;return[e,t]},useMutableSource:Td,useSyncExternalStore:zd,useId:Qd,unstable_isNewReconciler:!1};function Ge(e,t){if(e&&e.defaultProps){t=te({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function $i(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:te({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var hl={isMounted:function(e){return(e=e._reactInternals)?dn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=je(),o=Mt(e),l=mt(r,o);l.payload=t,n!=null&&(l.callback=n),t=Lt(e,l,o),t!==null&&(nt(t,e,o,r),ko(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=je(),o=Mt(e),l=mt(r,o);l.tag=1,l.payload=t,n!=null&&(l.callback=n),t=Lt(e,l,o),t!==null&&(nt(t,e,o,r),ko(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=je(),r=Mt(e),o=mt(n,r);o.tag=2,t!=null&&(o.callback=t),t=Lt(e,o,r),t!==null&&(nt(t,e,r,n),ko(t,e,r))}};function du(e,t,n,r,o,l,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,l,i):t.prototype&&t.prototype.isPureReactComponent?!jr(n,r)||!jr(o,l):!0}function Jd(e,t,n){var r=!1,o=Bt,l=t.contextType;return typeof l=="object"&&l!==null?l=Ye(l):(o=ze(t)?rn:be.current,r=t.contextTypes,l=(r=r!=null)?Ln(e,o):Bt),t=new t(n,l),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=hl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=l),t}function fu(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&hl.enqueueReplaceState(t,t.state,null)}function Wi(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},Bs(e);var l=t.contextType;typeof l=="object"&&l!==null?o.context=Ye(l):(l=ze(t)?rn:be.current,o.context=Ln(e,l)),o.state=e.memoizedState,l=t.getDerivedStateFromProps,typeof l=="function"&&($i(e,t,l,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&hl.enqueueReplaceState(o,o.state,null),Ko(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function Fn(e,t){try{var n="",r=t;do n+=Wp(r),r=r.return;while(r);var o=n}catch(l){o=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:t,stack:o,digest:null}}function Jl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Hi(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var gm=typeof WeakMap=="function"?WeakMap:Map;function Xd(e,t,n){n=mt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Go||(Go=!0,es=r),Hi(e,t)},n}function Gd(e,t,n){n=mt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){Hi(e,t)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(n.callback=function(){Hi(e,t),typeof r!="function"&&(It===null?It=new Set([this]):It.add(this));var i=t.stack;this.componentDidCatch(t.value,{componentStack:i!==null?i:""})}),n}function pu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new gm;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=Pm.bind(null,e,t,n),t.then(e,e))}function hu(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function mu(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=mt(-1,1),t.tag=2,Lt(n,t,1))),n.lanes|=1),e)}var ym=kt.ReactCurrentOwner,Pe=!1;function Ee(e,t,n,r){t.child=e===null?Nd(t,null,n,r):Mn(t,e.child,n,r)}function gu(e,t,n,r,o){n=n.render;var l=t.ref;return Tn(t,o),r=Vs(e,t,n,r,l,o),n=Qs(),e!==null&&!Pe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,vt(e,t,o)):(G&&n&&Os(t),t.flags|=1,Ee(e,t,r,o),t.child)}function yu(e,t,n,r,o){if(e===null){var l=n.type;return typeof l=="function"&&!na(l)&&l.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=l,Zd(e,t,l,r,o)):(e=Co(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(l=e.child,!(e.lanes&o)){var i=l.memoizedProps;if(n=n.compare,n=n!==null?n:jr,n(i,r)&&e.ref===t.ref)return vt(e,t,o)}return t.flags|=1,e=At(l,r),e.ref=t.ref,e.return=t,t.child=e}function Zd(e,t,n,r,o){if(e!==null){var l=e.memoizedProps;if(jr(l,r)&&e.ref===t.ref)if(Pe=!1,t.pendingProps=r=l,(e.lanes&o)!==0)e.flags&131072&&(Pe=!0);else return t.lanes=e.lanes,vt(e,t,o)}return Vi(e,t,n,r,o)}function ef(e,t,n){var r=t.pendingProps,o=r.children,l=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},K(jn,Me),Me|=n;else{if(!(n&1073741824))return e=l!==null?l.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,K(jn,Me),Me|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=l!==null?l.baseLanes:n,K(jn,Me),Me|=r}else l!==null?(r=l.baseLanes|n,t.memoizedState=null):r=n,K(jn,Me),Me|=r;return Ee(e,t,o,n),t.child}function tf(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Vi(e,t,n,r,o){var l=ze(n)?rn:be.current;return l=Ln(t,l),Tn(t,o),n=Vs(e,t,n,r,l,o),r=Qs(),e!==null&&!Pe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,vt(e,t,o)):(G&&r&&Os(t),t.flags|=1,Ee(e,t,n,o),t.child)}function xu(e,t,n,r,o){if(ze(n)){var l=!0;$o(t)}else l=!1;if(Tn(t,o),t.stateNode===null)bo(e,t),Jd(t,n,r),Wi(t,n,r,o),r=!0;else if(e===null){var i=t.stateNode,s=t.memoizedProps;i.props=s;var u=i.context,c=n.contextType;typeof c=="object"&&c!==null?c=Ye(c):(c=ze(n)?rn:be.current,c=Ln(t,c));var d=n.getDerivedStateFromProps,p=typeof d=="function"||typeof i.getSnapshotBeforeUpdate=="function";p||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s!==r||u!==c)&&fu(t,i,r,c),Et=!1;var y=t.memoizedState;i.state=y,Ko(t,r,i,o),u=t.memoizedState,s!==r||y!==u||Te.current||Et?(typeof d=="function"&&($i(t,n,d,r),u=t.memoizedState),(s=Et||du(t,n,s,r,y,u,c))?(p||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),i.props=r,i.state=u,i.context=c,r=s):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{i=t.stateNode,_d(e,t),s=t.memoizedProps,c=t.type===t.elementType?s:Ge(t.type,s),i.props=c,p=t.pendingProps,y=i.context,u=n.contextType,typeof u=="object"&&u!==null?u=Ye(u):(u=ze(n)?rn:be.current,u=Ln(t,u));var S=n.getDerivedStateFromProps;(d=typeof S=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s!==p||y!==u)&&fu(t,i,r,u),Et=!1,y=t.memoizedState,i.state=y,Ko(t,r,i,o);var g=t.memoizedState;s!==p||y!==g||Te.current||Et?(typeof S=="function"&&($i(t,n,S,r),g=t.memoizedState),(c=Et||du(t,n,c,r,y,g,u)||!1)?(d||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(r,g,u),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(r,g,u)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||s===e.memoizedProps&&y===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&y===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=g),i.props=r,i.state=g,i.context=u,r=c):(typeof i.componentDidUpdate!="function"||s===e.memoizedProps&&y===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&y===e.memoizedState||(t.flags|=1024),r=!1)}return Qi(e,t,n,r,l,o)}function Qi(e,t,n,r,o,l){tf(e,t);var i=(t.flags&128)!==0;if(!r&&!i)return o&&ru(t,n,!1),vt(e,t,l);r=t.stateNode,ym.current=t;var s=i&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&i?(t.child=Mn(t,e.child,null,l),t.child=Mn(t,null,s,l)):Ee(e,t,s,l),t.memoizedState=r.state,o&&ru(t,n,!0),t.child}function nf(e){var t=e.stateNode;t.pendingContext?nu(e,t.pendingContext,t.pendingContext!==t.context):t.context&&nu(e,t.context,!1),Us(e,t.containerInfo)}function vu(e,t,n,r,o){return In(),Is(o),t.flags|=256,Ee(e,t,n,r),t.child}var Ki={dehydrated:null,treeContext:null,retryLane:0};function Yi(e){return{baseLanes:e,cachePool:null,transitions:null}}function rf(e,t,n){var r=t.pendingProps,o=Z.current,l=!1,i=(t.flags&128)!==0,s;if((s=i)||(s=e!==null&&e.memoizedState===null?!1:(o&2)!==0),s?(l=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),K(Z,o&1),e===null)return Bi(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(i=r.children,e=r.fallback,l?(r=t.mode,l=t.child,i={mode:"hidden",children:i},!(r&1)&&l!==null?(l.childLanes=0,l.pendingProps=i):l=yl(i,r,0,null),e=tn(e,r,n,null),l.return=t,e.return=t,l.sibling=e,t.child=l,t.child.memoizedState=Yi(n),t.memoizedState=Ki,e):qs(t,i));if(o=e.memoizedState,o!==null&&(s=o.dehydrated,s!==null))return xm(e,t,i,r,s,o,n);if(l){l=r.fallback,i=t.mode,o=e.child,s=o.sibling;var u={mode:"hidden",children:r.children};return!(i&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=At(o,u),r.subtreeFlags=o.subtreeFlags&14680064),s!==null?l=At(s,l):(l=tn(l,i,n,null),l.flags|=2),l.return=t,r.return=t,r.sibling=l,t.child=r,r=l,l=t.child,i=e.child.memoizedState,i=i===null?Yi(n):{baseLanes:i.baseLanes|n,cachePool:null,transitions:i.transitions},l.memoizedState=i,l.childLanes=e.childLanes&~n,t.memoizedState=Ki,r}return l=e.child,e=l.sibling,r=At(l,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function qs(e,t){return t=yl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function uo(e,t,n,r){return r!==null&&Is(r),Mn(t,e.child,null,n),e=qs(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function xm(e,t,n,r,o,l,i){if(n)return t.flags&256?(t.flags&=-257,r=Jl(Error(R(422))),uo(e,t,i,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(l=r.fallback,o=t.mode,r=yl({mode:"visible",children:r.children},o,0,null),l=tn(l,o,i,null),l.flags|=2,r.return=t,l.return=t,r.sibling=l,t.child=r,t.mode&1&&Mn(t,e.child,null,i),t.child.memoizedState=Yi(i),t.memoizedState=Ki,l);if(!(t.mode&1))return uo(e,t,i,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var s=r.dgst;return r=s,l=Error(R(419)),r=Jl(l,r,void 0),uo(e,t,i,r)}if(s=(i&e.childLanes)!==0,Pe||s){if(r=fe,r!==null){switch(i&-i){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|i)?0:o,o!==0&&o!==l.retryLane&&(l.retryLane=o,xt(e,o),nt(r,e,o,-1))}return ta(),r=Jl(Error(R(421))),uo(e,t,i,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=Tm.bind(null,e),o._reactRetry=t,null):(e=l.treeContext,Ae=Ot(o.nextSibling),Fe=t,G=!0,et=null,e!==null&&(He[Ve++]=pt,He[Ve++]=ht,He[Ve++]=on,pt=e.id,ht=e.overflow,on=t),t=qs(t,r.children),t.flags|=4096,t)}function ku(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ui(e.return,t,n)}function Xl(e,t,n,r,o){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(l.isBackwards=t,l.rendering=null,l.renderingStartTime=0,l.last=r,l.tail=n,l.tailMode=o)}function of(e,t,n){var r=t.pendingProps,o=r.revealOrder,l=r.tail;if(Ee(e,t,r.children,n),r=Z.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ku(e,n,t);else if(e.tag===19)ku(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(K(Z,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&Yo(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),Xl(t,!1,o,n,l);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&Yo(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}Xl(t,!0,n,null,l);break;case"together":Xl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function bo(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function vt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),sn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(R(153));if(t.child!==null){for(e=t.child,n=At(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=At(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function vm(e,t,n){switch(t.tag){case 3:nf(t),In();break;case 5:Pd(t);break;case 1:ze(t.type)&&$o(t);break;case 4:Us(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;K(Vo,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(K(Z,Z.current&1),t.flags|=128,null):n&t.child.childLanes?rf(e,t,n):(K(Z,Z.current&1),e=vt(e,t,n),e!==null?e.sibling:null);K(Z,Z.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return of(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),K(Z,Z.current),r)break;return null;case 22:case 23:return t.lanes=0,ef(e,t,n)}return vt(e,t,n)}var lf,qi,sf,af;lf=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};qi=function(){};sf=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,Gt(ct.current);var l=null;switch(n){case"input":o=yi(e,o),r=yi(e,r),l=[];break;case"select":o=te({},o,{value:void 0}),r=te({},r,{value:void 0}),l=[];break;case"textarea":o=ki(e,o),r=ki(e,r),l=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Bo)}Si(n,r);var i;n=null;for(c in o)if(!r.hasOwnProperty(c)&&o.hasOwnProperty(c)&&o[c]!=null)if(c==="style"){var s=o[c];for(i in s)s.hasOwnProperty(i)&&(n||(n={}),n[i]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(xr.hasOwnProperty(c)?l||(l=[]):(l=l||[]).push(c,null));for(c in r){var u=r[c];if(s=o!=null?o[c]:void 0,r.hasOwnProperty(c)&&u!==s&&(u!=null||s!=null))if(c==="style")if(s){for(i in s)!s.hasOwnProperty(i)||u&&u.hasOwnProperty(i)||(n||(n={}),n[i]="");for(i in u)u.hasOwnProperty(i)&&s[i]!==u[i]&&(n||(n={}),n[i]=u[i])}else n||(l||(l=[]),l.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,s=s?s.__html:void 0,u!=null&&s!==u&&(l=l||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(l=l||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(xr.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&q("scroll",e),l||s===u||(l=[])):(l=l||[]).push(c,u))}n&&(l=l||[]).push("style",n);var c=l;(t.updateQueue=c)&&(t.flags|=4)}};af=function(e,t,n,r){n!==r&&(t.flags|=4)};function er(e,t){if(!G)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ke(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function km(e,t,n){var r=t.pendingProps;switch(Ls(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ke(t),null;case 1:return ze(t.type)&&Uo(),ke(t),null;case 3:return r=t.stateNode,An(),X(Te),X(be),Ws(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(so(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,et!==null&&(rs(et),et=null))),qi(e,t),ke(t),null;case 5:$s(t);var o=Gt(Pr.current);if(n=t.type,e!==null&&t.stateNode!=null)sf(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(R(166));return ke(t),null}if(e=Gt(ct.current),so(t)){r=t.stateNode,n=t.type;var l=t.memoizedProps;switch(r[at]=t,r[Rr]=l,e=(t.mode&1)!==0,n){case"dialog":q("cancel",r),q("close",r);break;case"iframe":case"object":case"embed":q("load",r);break;case"video":case"audio":for(o=0;o<sr.length;o++)q(sr[o],r);break;case"source":q("error",r);break;case"img":case"image":case"link":q("error",r),q("load",r);break;case"details":q("toggle",r);break;case"input":_a(r,l),q("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!l.multiple},q("invalid",r);break;case"textarea":Ta(r,l),q("invalid",r)}Si(n,l),o=null;for(var i in l)if(l.hasOwnProperty(i)){var s=l[i];i==="children"?typeof s=="string"?r.textContent!==s&&(l.suppressHydrationWarning!==!0&&io(r.textContent,s,e),o=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(l.suppressHydrationWarning!==!0&&io(r.textContent,s,e),o=["children",""+s]):xr.hasOwnProperty(i)&&s!=null&&i==="onScroll"&&q("scroll",r)}switch(n){case"input":Gr(r),Pa(r,l,!0);break;case"textarea":Gr(r),za(r);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(r.onclick=Bo)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{i=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Ic(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=i.createElement(n,{is:r.is}):(e=i.createElement(n),n==="select"&&(i=e,r.multiple?i.multiple=!0:r.size&&(i.size=r.size))):e=i.createElementNS(e,n),e[at]=t,e[Rr]=r,lf(e,t,!1,!1),t.stateNode=e;e:{switch(i=bi(n,r),n){case"dialog":q("cancel",e),q("close",e),o=r;break;case"iframe":case"object":case"embed":q("load",e),o=r;break;case"video":case"audio":for(o=0;o<sr.length;o++)q(sr[o],e);o=r;break;case"source":q("error",e),o=r;break;case"img":case"image":case"link":q("error",e),q("load",e),o=r;break;case"details":q("toggle",e),o=r;break;case"input":_a(e,r),o=yi(e,r),q("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=te({},r,{value:void 0}),q("invalid",e);break;case"textarea":Ta(e,r),o=ki(e,r),q("invalid",e);break;default:o=r}Si(n,o),s=o;for(l in s)if(s.hasOwnProperty(l)){var u=s[l];l==="style"?Fc(e,u):l==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Mc(e,u)):l==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&vr(e,u):typeof u=="number"&&vr(e,""+u):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(xr.hasOwnProperty(l)?u!=null&&l==="onScroll"&&q("scroll",e):u!=null&&vs(e,l,u,i))}switch(n){case"input":Gr(e),Pa(e,r,!1);break;case"textarea":Gr(e),za(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Dt(r.value));break;case"select":e.multiple=!!r.multiple,l=r.value,l!=null?Nn(e,!!r.multiple,l,!1):r.defaultValue!=null&&Nn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=Bo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ke(t),null;case 6:if(e&&t.stateNode!=null)af(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(R(166));if(n=Gt(Pr.current),Gt(ct.current),so(t)){if(r=t.stateNode,n=t.memoizedProps,r[at]=t,(l=r.nodeValue!==n)&&(e=Fe,e!==null))switch(e.tag){case 3:io(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&io(r.nodeValue,n,(e.mode&1)!==0)}l&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[at]=t,t.stateNode=r}return ke(t),null;case 13:if(X(Z),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(G&&Ae!==null&&t.mode&1&&!(t.flags&128))jd(),In(),t.flags|=98560,l=!1;else if(l=so(t),r!==null&&r.dehydrated!==null){if(e===null){if(!l)throw Error(R(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(R(317));l[at]=t}else In(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ke(t),l=!1}else et!==null&&(rs(et),et=null),l=!0;if(!l)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Z.current&1?ce===0&&(ce=3):ta())),t.updateQueue!==null&&(t.flags|=4),ke(t),null);case 4:return An(),qi(e,t),e===null&&Cr(t.stateNode.containerInfo),ke(t),null;case 10:return Fs(t.type._context),ke(t),null;case 17:return ze(t.type)&&Uo(),ke(t),null;case 19:if(X(Z),l=t.memoizedState,l===null)return ke(t),null;if(r=(t.flags&128)!==0,i=l.rendering,i===null)if(r)er(l,!1);else{if(ce!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(i=Yo(e),i!==null){for(t.flags|=128,er(l,!1),r=i.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)l=n,e=r,l.flags&=14680066,i=l.alternate,i===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=i.childLanes,l.lanes=i.lanes,l.child=i.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=i.memoizedProps,l.memoizedState=i.memoizedState,l.updateQueue=i.updateQueue,l.type=i.type,e=i.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return K(Z,Z.current&1|2),t.child}e=e.sibling}l.tail!==null&&le()>Dn&&(t.flags|=128,r=!0,er(l,!1),t.lanes=4194304)}else{if(!r)if(e=Yo(i),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),er(l,!0),l.tail===null&&l.tailMode==="hidden"&&!i.alternate&&!G)return ke(t),null}else 2*le()-l.renderingStartTime>Dn&&n!==1073741824&&(t.flags|=128,r=!0,er(l,!1),t.lanes=4194304);l.isBackwards?(i.sibling=t.child,t.child=i):(n=l.last,n!==null?n.sibling=i:t.child=i,l.last=i)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=le(),t.sibling=null,n=Z.current,K(Z,r?n&1|2:n&1),t):(ke(t),null);case 22:case 23:return ea(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Me&1073741824&&(ke(t),t.subtreeFlags&6&&(t.flags|=8192)):ke(t),null;case 24:return null;case 25:return null}throw Error(R(156,t.tag))}function wm(e,t){switch(Ls(t),t.tag){case 1:return ze(t.type)&&Uo(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return An(),X(Te),X(be),Ws(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return $s(t),null;case 13:if(X(Z),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(R(340));In()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return X(Z),null;case 4:return An(),null;case 10:return Fs(t.type._context),null;case 22:case 23:return ea(),null;case 24:return null;default:return null}}var co=!1,we=!1,Sm=typeof WeakSet=="function"?WeakSet:Set,L=null;function En(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){re(e,t,r)}else n.current=null}function Ji(e,t,n){try{n()}catch(r){re(e,t,r)}}var wu=!1;function bm(e,t){if(Oi=Ao,e=fd(),zs(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,l=r.focusNode;r=r.focusOffset;try{n.nodeType,l.nodeType}catch{n=null;break e}var i=0,s=-1,u=-1,c=0,d=0,p=e,y=null;t:for(;;){for(var S;p!==n||o!==0&&p.nodeType!==3||(s=i+o),p!==l||r!==0&&p.nodeType!==3||(u=i+r),p.nodeType===3&&(i+=p.nodeValue.length),(S=p.firstChild)!==null;)y=p,p=S;for(;;){if(p===e)break t;if(y===n&&++c===o&&(s=i),y===l&&++d===r&&(u=i),(S=p.nextSibling)!==null)break;p=y,y=p.parentNode}p=S}n=s===-1||u===-1?null:{start:s,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Li={focusedElem:e,selectionRange:n},Ao=!1,L=t;L!==null;)if(t=L,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,L=e;else for(;L!==null;){t=L;try{var g=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var x=g.memoizedProps,v=g.memoizedState,h=t.stateNode,f=h.getSnapshotBeforeUpdate(t.elementType===t.type?x:Ge(t.type,x),v);h.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(R(163))}}catch(w){re(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,L=e;break}L=t.return}return g=wu,wu=!1,g}function hr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var l=o.destroy;o.destroy=void 0,l!==void 0&&Ji(t,n,l)}o=o.next}while(o!==r)}}function ml(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Xi(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function uf(e){var t=e.alternate;t!==null&&(e.alternate=null,uf(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[at],delete t[Rr],delete t[Ai],delete t[lm],delete t[im])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function cf(e){return e.tag===5||e.tag===3||e.tag===4}function Su(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||cf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Gi(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Bo));else if(r!==4&&(e=e.child,e!==null))for(Gi(e,t,n),e=e.sibling;e!==null;)Gi(e,t,n),e=e.sibling}function Zi(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Zi(e,t,n),e=e.sibling;e!==null;)Zi(e,t,n),e=e.sibling}var me=null,Ze=!1;function wt(e,t,n){for(n=n.child;n!==null;)df(e,t,n),n=n.sibling}function df(e,t,n){if(ut&&typeof ut.onCommitFiberUnmount=="function")try{ut.onCommitFiberUnmount(sl,n)}catch{}switch(n.tag){case 5:we||En(n,t);case 6:var r=me,o=Ze;me=null,wt(e,t,n),me=r,Ze=o,me!==null&&(Ze?(e=me,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):me.removeChild(n.stateNode));break;case 18:me!==null&&(Ze?(e=me,n=n.stateNode,e.nodeType===8?Hl(e.parentNode,n):e.nodeType===1&&Hl(e,n),br(e)):Hl(me,n.stateNode));break;case 4:r=me,o=Ze,me=n.stateNode.containerInfo,Ze=!0,wt(e,t,n),me=r,Ze=o;break;case 0:case 11:case 14:case 15:if(!we&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var l=o,i=l.destroy;l=l.tag,i!==void 0&&(l&2||l&4)&&Ji(n,t,i),o=o.next}while(o!==r)}wt(e,t,n);break;case 1:if(!we&&(En(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){re(n,t,s)}wt(e,t,n);break;case 21:wt(e,t,n);break;case 22:n.mode&1?(we=(r=we)||n.memoizedState!==null,wt(e,t,n),we=r):wt(e,t,n);break;default:wt(e,t,n)}}function bu(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Sm),t.forEach(function(r){var o=zm.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function Je(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var l=e,i=t,s=i;e:for(;s!==null;){switch(s.tag){case 5:me=s.stateNode,Ze=!1;break e;case 3:me=s.stateNode.containerInfo,Ze=!0;break e;case 4:me=s.stateNode.containerInfo,Ze=!0;break e}s=s.return}if(me===null)throw Error(R(160));df(l,i,o),me=null,Ze=!1;var u=o.alternate;u!==null&&(u.return=null),o.return=null}catch(c){re(o,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)ff(t,e),t=t.sibling}function ff(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Je(t,e),it(e),r&4){try{hr(3,e,e.return),ml(3,e)}catch(x){re(e,e.return,x)}try{hr(5,e,e.return)}catch(x){re(e,e.return,x)}}break;case 1:Je(t,e),it(e),r&512&&n!==null&&En(n,n.return);break;case 5:if(Je(t,e),it(e),r&512&&n!==null&&En(n,n.return),e.flags&32){var o=e.stateNode;try{vr(o,"")}catch(x){re(e,e.return,x)}}if(r&4&&(o=e.stateNode,o!=null)){var l=e.memoizedProps,i=n!==null?n.memoizedProps:l,s=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{s==="input"&&l.type==="radio"&&l.name!=null&&Oc(o,l),bi(s,i);var c=bi(s,l);for(i=0;i<u.length;i+=2){var d=u[i],p=u[i+1];d==="style"?Fc(o,p):d==="dangerouslySetInnerHTML"?Mc(o,p):d==="children"?vr(o,p):vs(o,d,p,c)}switch(s){case"input":xi(o,l);break;case"textarea":Lc(o,l);break;case"select":var y=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!l.multiple;var S=l.value;S!=null?Nn(o,!!l.multiple,S,!1):y!==!!l.multiple&&(l.defaultValue!=null?Nn(o,!!l.multiple,l.defaultValue,!0):Nn(o,!!l.multiple,l.multiple?[]:"",!1))}o[Rr]=l}catch(x){re(e,e.return,x)}}break;case 6:if(Je(t,e),it(e),r&4){if(e.stateNode===null)throw Error(R(162));o=e.stateNode,l=e.memoizedProps;try{o.nodeValue=l}catch(x){re(e,e.return,x)}}break;case 3:if(Je(t,e),it(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{br(t.containerInfo)}catch(x){re(e,e.return,x)}break;case 4:Je(t,e),it(e);break;case 13:Je(t,e),it(e),o=e.child,o.flags&8192&&(l=o.memoizedState!==null,o.stateNode.isHidden=l,!l||o.alternate!==null&&o.alternate.memoizedState!==null||(Gs=le())),r&4&&bu(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(we=(c=we)||d,Je(t,e),we=c):Je(t,e),it(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!d&&e.mode&1)for(L=e,d=e.child;d!==null;){for(p=L=d;L!==null;){switch(y=L,S=y.child,y.tag){case 0:case 11:case 14:case 15:hr(4,y,y.return);break;case 1:En(y,y.return);var g=y.stateNode;if(typeof g.componentWillUnmount=="function"){r=y,n=y.return;try{t=r,g.props=t.memoizedProps,g.state=t.memoizedState,g.componentWillUnmount()}catch(x){re(r,n,x)}}break;case 5:En(y,y.return);break;case 22:if(y.memoizedState!==null){ju(p);continue}}S!==null?(S.return=y,L=S):ju(p)}d=d.sibling}e:for(d=null,p=e;;){if(p.tag===5){if(d===null){d=p;try{o=p.stateNode,c?(l=o.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(s=p.stateNode,u=p.memoizedProps.style,i=u!=null&&u.hasOwnProperty("display")?u.display:null,s.style.display=Ac("display",i))}catch(x){re(e,e.return,x)}}}else if(p.tag===6){if(d===null)try{p.stateNode.nodeValue=c?"":p.memoizedProps}catch(x){re(e,e.return,x)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;d===p&&(d=null),p=p.return}d===p&&(d=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Je(t,e),it(e),r&4&&bu(e);break;case 21:break;default:Je(t,e),it(e)}}function it(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(cf(n)){var r=n;break e}n=n.return}throw Error(R(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(vr(o,""),r.flags&=-33);var l=Su(e);Zi(e,l,o);break;case 3:case 4:var i=r.stateNode.containerInfo,s=Su(e);Gi(e,s,i);break;default:throw Error(R(161))}}catch(u){re(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Em(e,t,n){L=e,pf(e)}function pf(e,t,n){for(var r=(e.mode&1)!==0;L!==null;){var o=L,l=o.child;if(o.tag===22&&r){var i=o.memoizedState!==null||co;if(!i){var s=o.alternate,u=s!==null&&s.memoizedState!==null||we;s=co;var c=we;if(co=i,(we=u)&&!c)for(L=o;L!==null;)i=L,u=i.child,i.tag===22&&i.memoizedState!==null?Cu(o):u!==null?(u.return=i,L=u):Cu(o);for(;l!==null;)L=l,pf(l),l=l.sibling;L=o,co=s,we=c}Eu(e)}else o.subtreeFlags&8772&&l!==null?(l.return=o,L=l):Eu(e)}}function Eu(e){for(;L!==null;){var t=L;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:we||ml(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!we)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:Ge(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var l=t.updateQueue;l!==null&&au(t,l,r);break;case 3:var i=t.updateQueue;if(i!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}au(t,i,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var p=d.dehydrated;p!==null&&br(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(R(163))}we||t.flags&512&&Xi(t)}catch(y){re(t,t.return,y)}}if(t===e){L=null;break}if(n=t.sibling,n!==null){n.return=t.return,L=n;break}L=t.return}}function ju(e){for(;L!==null;){var t=L;if(t===e){L=null;break}var n=t.sibling;if(n!==null){n.return=t.return,L=n;break}L=t.return}}function Cu(e){for(;L!==null;){var t=L;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{ml(4,t)}catch(u){re(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(u){re(t,o,u)}}var l=t.return;try{Xi(t)}catch(u){re(t,l,u)}break;case 5:var i=t.return;try{Xi(t)}catch(u){re(t,i,u)}}}catch(u){re(t,t.return,u)}if(t===e){L=null;break}var s=t.sibling;if(s!==null){s.return=t.return,L=s;break}L=t.return}}var jm=Math.ceil,Xo=kt.ReactCurrentDispatcher,Js=kt.ReactCurrentOwner,Ke=kt.ReactCurrentBatchConfig,W=0,fe=null,ae=null,ge=0,Me=0,jn=$t(0),ce=0,Lr=null,sn=0,gl=0,Xs=0,mr=null,_e=null,Gs=0,Dn=1/0,dt=null,Go=!1,es=null,It=null,fo=!1,Rt=null,Zo=0,gr=0,ts=null,Eo=-1,jo=0;function je(){return W&6?le():Eo!==-1?Eo:Eo=le()}function Mt(e){return e.mode&1?W&2&&ge!==0?ge&-ge:am.transition!==null?(jo===0&&(jo=Jc()),jo):(e=V,e!==0||(e=window.event,e=e===void 0?16:rd(e.type)),e):1}function nt(e,t,n,r){if(50<gr)throw gr=0,ts=null,Error(R(185));Fr(e,n,r),(!(W&2)||e!==fe)&&(e===fe&&(!(W&2)&&(gl|=n),ce===4&&Ct(e,ge)),Oe(e,r),n===1&&W===0&&!(t.mode&1)&&(Dn=le()+500,fl&&Wt()))}function Oe(e,t){var n=e.callbackNode;ah(e,t);var r=Mo(e,e===fe?ge:0);if(r===0)n!==null&&Ia(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Ia(n),t===1)e.tag===0?sm(Nu.bind(null,e)):Sd(Nu.bind(null,e)),rm(function(){!(W&6)&&Wt()}),n=null;else{switch(Xc(r)){case 1:n=Es;break;case 4:n=Yc;break;case 16:n=Io;break;case 536870912:n=qc;break;default:n=Io}n=wf(n,hf.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function hf(e,t){if(Eo=-1,jo=0,W&6)throw Error(R(327));var n=e.callbackNode;if(zn()&&e.callbackNode!==n)return null;var r=Mo(e,e===fe?ge:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=el(e,r);else{t=r;var o=W;W|=2;var l=gf();(fe!==e||ge!==t)&&(dt=null,Dn=le()+500,en(e,t));do try{Rm();break}catch(s){mf(e,s)}while(!0);As(),Xo.current=l,W=o,ae!==null?t=0:(fe=null,ge=0,t=ce)}if(t!==0){if(t===2&&(o=Ri(e),o!==0&&(r=o,t=ns(e,o))),t===1)throw n=Lr,en(e,0),Ct(e,r),Oe(e,le()),n;if(t===6)Ct(e,r);else{if(o=e.current.alternate,!(r&30)&&!Cm(o)&&(t=el(e,r),t===2&&(l=Ri(e),l!==0&&(r=l,t=ns(e,l))),t===1))throw n=Lr,en(e,0),Ct(e,r),Oe(e,le()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(R(345));case 2:Yt(e,_e,dt);break;case 3:if(Ct(e,r),(r&130023424)===r&&(t=Gs+500-le(),10<t)){if(Mo(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){je(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Mi(Yt.bind(null,e,_e,dt),t);break}Yt(e,_e,dt);break;case 4:if(Ct(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var i=31-tt(r);l=1<<i,i=t[i],i>o&&(o=i),r&=~l}if(r=o,r=le()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*jm(r/1960))-r,10<r){e.timeoutHandle=Mi(Yt.bind(null,e,_e,dt),r);break}Yt(e,_e,dt);break;case 5:Yt(e,_e,dt);break;default:throw Error(R(329))}}}return Oe(e,le()),e.callbackNode===n?hf.bind(null,e):null}function ns(e,t){var n=mr;return e.current.memoizedState.isDehydrated&&(en(e,t).flags|=256),e=el(e,t),e!==2&&(t=_e,_e=n,t!==null&&rs(t)),e}function rs(e){_e===null?_e=e:_e.push.apply(_e,e)}function Cm(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],l=o.getSnapshot;o=o.value;try{if(!rt(l(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Ct(e,t){for(t&=~Xs,t&=~gl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-tt(t),r=1<<n;e[n]=-1,t&=~r}}function Nu(e){if(W&6)throw Error(R(327));zn();var t=Mo(e,0);if(!(t&1))return Oe(e,le()),null;var n=el(e,t);if(e.tag!==0&&n===2){var r=Ri(e);r!==0&&(t=r,n=ns(e,r))}if(n===1)throw n=Lr,en(e,0),Ct(e,t),Oe(e,le()),n;if(n===6)throw Error(R(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Yt(e,_e,dt),Oe(e,le()),null}function Zs(e,t){var n=W;W|=1;try{return e(t)}finally{W=n,W===0&&(Dn=le()+500,fl&&Wt())}}function an(e){Rt!==null&&Rt.tag===0&&!(W&6)&&zn();var t=W;W|=1;var n=Ke.transition,r=V;try{if(Ke.transition=null,V=1,e)return e()}finally{V=r,Ke.transition=n,W=t,!(W&6)&&Wt()}}function ea(){Me=jn.current,X(jn)}function en(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,nm(n)),ae!==null)for(n=ae.return;n!==null;){var r=n;switch(Ls(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Uo();break;case 3:An(),X(Te),X(be),Ws();break;case 5:$s(r);break;case 4:An();break;case 13:X(Z);break;case 19:X(Z);break;case 10:Fs(r.type._context);break;case 22:case 23:ea()}n=n.return}if(fe=e,ae=e=At(e.current,null),ge=Me=t,ce=0,Lr=null,Xs=gl=sn=0,_e=mr=null,Xt!==null){for(t=0;t<Xt.length;t++)if(n=Xt[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,l=n.pending;if(l!==null){var i=l.next;l.next=o,r.next=i}n.pending=r}Xt=null}return e}function mf(e,t){do{var n=ae;try{if(As(),wo.current=Jo,qo){for(var r=ee.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}qo=!1}if(ln=0,de=ue=ee=null,pr=!1,Tr=0,Js.current=null,n===null||n.return===null){ce=1,Lr=t,ae=null;break}e:{var l=e,i=n.return,s=n,u=t;if(t=ge,s.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,d=s,p=d.tag;if(!(d.mode&1)&&(p===0||p===11||p===15)){var y=d.alternate;y?(d.updateQueue=y.updateQueue,d.memoizedState=y.memoizedState,d.lanes=y.lanes):(d.updateQueue=null,d.memoizedState=null)}var S=hu(i);if(S!==null){S.flags&=-257,mu(S,i,s,l,t),S.mode&1&&pu(l,c,t),t=S,u=c;var g=t.updateQueue;if(g===null){var x=new Set;x.add(u),t.updateQueue=x}else g.add(u);break e}else{if(!(t&1)){pu(l,c,t),ta();break e}u=Error(R(426))}}else if(G&&s.mode&1){var v=hu(i);if(v!==null){!(v.flags&65536)&&(v.flags|=256),mu(v,i,s,l,t),Is(Fn(u,s));break e}}l=u=Fn(u,s),ce!==4&&(ce=2),mr===null?mr=[l]:mr.push(l),l=i;do{switch(l.tag){case 3:l.flags|=65536,t&=-t,l.lanes|=t;var h=Xd(l,u,t);su(l,h);break e;case 1:s=u;var f=l.type,m=l.stateNode;if(!(l.flags&128)&&(typeof f.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(It===null||!It.has(m)))){l.flags|=65536,t&=-t,l.lanes|=t;var w=Gd(l,s,t);su(l,w);break e}}l=l.return}while(l!==null)}xf(n)}catch(N){t=N,ae===n&&n!==null&&(ae=n=n.return);continue}break}while(!0)}function gf(){var e=Xo.current;return Xo.current=Jo,e===null?Jo:e}function ta(){(ce===0||ce===3||ce===2)&&(ce=4),fe===null||!(sn&268435455)&&!(gl&268435455)||Ct(fe,ge)}function el(e,t){var n=W;W|=2;var r=gf();(fe!==e||ge!==t)&&(dt=null,en(e,t));do try{Nm();break}catch(o){mf(e,o)}while(!0);if(As(),W=n,Xo.current=r,ae!==null)throw Error(R(261));return fe=null,ge=0,ce}function Nm(){for(;ae!==null;)yf(ae)}function Rm(){for(;ae!==null&&!Zp();)yf(ae)}function yf(e){var t=kf(e.alternate,e,Me);e.memoizedProps=e.pendingProps,t===null?xf(e):ae=t,Js.current=null}function xf(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=wm(n,t),n!==null){n.flags&=32767,ae=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ce=6,ae=null;return}}else if(n=km(n,t,Me),n!==null){ae=n;return}if(t=t.sibling,t!==null){ae=t;return}ae=t=e}while(t!==null);ce===0&&(ce=5)}function Yt(e,t,n){var r=V,o=Ke.transition;try{Ke.transition=null,V=1,_m(e,t,n,r)}finally{Ke.transition=o,V=r}return null}function _m(e,t,n,r){do zn();while(Rt!==null);if(W&6)throw Error(R(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(R(177));e.callbackNode=null,e.callbackPriority=0;var l=n.lanes|n.childLanes;if(uh(e,l),e===fe&&(ae=fe=null,ge=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||fo||(fo=!0,wf(Io,function(){return zn(),null})),l=(n.flags&15990)!==0,n.subtreeFlags&15990||l){l=Ke.transition,Ke.transition=null;var i=V;V=1;var s=W;W|=4,Js.current=null,bm(e,n),ff(n,e),qh(Li),Ao=!!Oi,Li=Oi=null,e.current=n,Em(n),eh(),W=s,V=i,Ke.transition=l}else e.current=n;if(fo&&(fo=!1,Rt=e,Zo=o),l=e.pendingLanes,l===0&&(It=null),rh(n.stateNode),Oe(e,le()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(Go)throw Go=!1,e=es,es=null,e;return Zo&1&&e.tag!==0&&zn(),l=e.pendingLanes,l&1?e===ts?gr++:(gr=0,ts=e):gr=0,Wt(),null}function zn(){if(Rt!==null){var e=Xc(Zo),t=Ke.transition,n=V;try{if(Ke.transition=null,V=16>e?16:e,Rt===null)var r=!1;else{if(e=Rt,Rt=null,Zo=0,W&6)throw Error(R(331));var o=W;for(W|=4,L=e.current;L!==null;){var l=L,i=l.child;if(L.flags&16){var s=l.deletions;if(s!==null){for(var u=0;u<s.length;u++){var c=s[u];for(L=c;L!==null;){var d=L;switch(d.tag){case 0:case 11:case 15:hr(8,d,l)}var p=d.child;if(p!==null)p.return=d,L=p;else for(;L!==null;){d=L;var y=d.sibling,S=d.return;if(uf(d),d===c){L=null;break}if(y!==null){y.return=S,L=y;break}L=S}}}var g=l.alternate;if(g!==null){var x=g.child;if(x!==null){g.child=null;do{var v=x.sibling;x.sibling=null,x=v}while(x!==null)}}L=l}}if(l.subtreeFlags&2064&&i!==null)i.return=l,L=i;else e:for(;L!==null;){if(l=L,l.flags&2048)switch(l.tag){case 0:case 11:case 15:hr(9,l,l.return)}var h=l.sibling;if(h!==null){h.return=l.return,L=h;break e}L=l.return}}var f=e.current;for(L=f;L!==null;){i=L;var m=i.child;if(i.subtreeFlags&2064&&m!==null)m.return=i,L=m;else e:for(i=f;L!==null;){if(s=L,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:ml(9,s)}}catch(N){re(s,s.return,N)}if(s===i){L=null;break e}var w=s.sibling;if(w!==null){w.return=s.return,L=w;break e}L=s.return}}if(W=o,Wt(),ut&&typeof ut.onPostCommitFiberRoot=="function")try{ut.onPostCommitFiberRoot(sl,e)}catch{}r=!0}return r}finally{V=n,Ke.transition=t}}return!1}function Ru(e,t,n){t=Fn(n,t),t=Xd(e,t,1),e=Lt(e,t,1),t=je(),e!==null&&(Fr(e,1,t),Oe(e,t))}function re(e,t,n){if(e.tag===3)Ru(e,e,n);else for(;t!==null;){if(t.tag===3){Ru(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(It===null||!It.has(r))){e=Fn(n,e),e=Gd(t,e,1),t=Lt(t,e,1),e=je(),t!==null&&(Fr(t,1,e),Oe(t,e));break}}t=t.return}}function Pm(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=je(),e.pingedLanes|=e.suspendedLanes&n,fe===e&&(ge&n)===n&&(ce===4||ce===3&&(ge&130023424)===ge&&500>le()-Gs?en(e,0):Xs|=n),Oe(e,t)}function vf(e,t){t===0&&(e.mode&1?(t=to,to<<=1,!(to&130023424)&&(to=4194304)):t=1);var n=je();e=xt(e,t),e!==null&&(Fr(e,t,n),Oe(e,n))}function Tm(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),vf(e,n)}function zm(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(R(314))}r!==null&&r.delete(t),vf(e,n)}var kf;kf=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Te.current)Pe=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Pe=!1,vm(e,t,n);Pe=!!(e.flags&131072)}else Pe=!1,G&&t.flags&1048576&&bd(t,Ho,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;bo(e,t),e=t.pendingProps;var o=Ln(t,be.current);Tn(t,n),o=Vs(null,t,r,e,o,n);var l=Qs();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ze(r)?(l=!0,$o(t)):l=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Bs(t),o.updater=hl,t.stateNode=o,o._reactInternals=t,Wi(t,r,e,n),t=Qi(null,t,r,!0,l,n)):(t.tag=0,G&&l&&Os(t),Ee(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(bo(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=Lm(r),e=Ge(r,e),o){case 0:t=Vi(null,t,r,e,n);break e;case 1:t=xu(null,t,r,e,n);break e;case 11:t=gu(null,t,r,e,n);break e;case 14:t=yu(null,t,r,Ge(r.type,e),n);break e}throw Error(R(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Ge(r,o),Vi(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Ge(r,o),xu(e,t,r,o,n);case 3:e:{if(nf(t),e===null)throw Error(R(387));r=t.pendingProps,l=t.memoizedState,o=l.element,_d(e,t),Ko(t,r,null,n);var i=t.memoizedState;if(r=i.element,l.isDehydrated)if(l={element:r,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},t.updateQueue.baseState=l,t.memoizedState=l,t.flags&256){o=Fn(Error(R(423)),t),t=vu(e,t,r,n,o);break e}else if(r!==o){o=Fn(Error(R(424)),t),t=vu(e,t,r,n,o);break e}else for(Ae=Ot(t.stateNode.containerInfo.firstChild),Fe=t,G=!0,et=null,n=Nd(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(In(),r===o){t=vt(e,t,n);break e}Ee(e,t,r,n)}t=t.child}return t;case 5:return Pd(t),e===null&&Bi(t),r=t.type,o=t.pendingProps,l=e!==null?e.memoizedProps:null,i=o.children,Ii(r,o)?i=null:l!==null&&Ii(r,l)&&(t.flags|=32),tf(e,t),Ee(e,t,i,n),t.child;case 6:return e===null&&Bi(t),null;case 13:return rf(e,t,n);case 4:return Us(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Mn(t,null,r,n):Ee(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Ge(r,o),gu(e,t,r,o,n);case 7:return Ee(e,t,t.pendingProps,n),t.child;case 8:return Ee(e,t,t.pendingProps.children,n),t.child;case 12:return Ee(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,l=t.memoizedProps,i=o.value,K(Vo,r._currentValue),r._currentValue=i,l!==null)if(rt(l.value,i)){if(l.children===o.children&&!Te.current){t=vt(e,t,n);break e}}else for(l=t.child,l!==null&&(l.return=t);l!==null;){var s=l.dependencies;if(s!==null){i=l.child;for(var u=s.firstContext;u!==null;){if(u.context===r){if(l.tag===1){u=mt(-1,n&-n),u.tag=2;var c=l.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?u.next=u:(u.next=d.next,d.next=u),c.pending=u}}l.lanes|=n,u=l.alternate,u!==null&&(u.lanes|=n),Ui(l.return,n,t),s.lanes|=n;break}u=u.next}}else if(l.tag===10)i=l.type===t.type?null:l.child;else if(l.tag===18){if(i=l.return,i===null)throw Error(R(341));i.lanes|=n,s=i.alternate,s!==null&&(s.lanes|=n),Ui(i,n,t),i=l.sibling}else i=l.child;if(i!==null)i.return=l;else for(i=l;i!==null;){if(i===t){i=null;break}if(l=i.sibling,l!==null){l.return=i.return,i=l;break}i=i.return}l=i}Ee(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,Tn(t,n),o=Ye(o),r=r(o),t.flags|=1,Ee(e,t,r,n),t.child;case 14:return r=t.type,o=Ge(r,t.pendingProps),o=Ge(r.type,o),yu(e,t,r,o,n);case 15:return Zd(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Ge(r,o),bo(e,t),t.tag=1,ze(r)?(e=!0,$o(t)):e=!1,Tn(t,n),Jd(t,r,o),Wi(t,r,o,n),Qi(null,t,r,!0,e,n);case 19:return of(e,t,n);case 22:return ef(e,t,n)}throw Error(R(156,t.tag))};function wf(e,t){return Kc(e,t)}function Om(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Qe(e,t,n,r){return new Om(e,t,n,r)}function na(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Lm(e){if(typeof e=="function")return na(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ws)return 11;if(e===Ss)return 14}return 2}function At(e,t){var n=e.alternate;return n===null?(n=Qe(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Co(e,t,n,r,o,l){var i=2;if(r=e,typeof e=="function")na(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case mn:return tn(n.children,o,l,t);case ks:i=8,o|=8;break;case pi:return e=Qe(12,n,t,o|2),e.elementType=pi,e.lanes=l,e;case hi:return e=Qe(13,n,t,o),e.elementType=hi,e.lanes=l,e;case mi:return e=Qe(19,n,t,o),e.elementType=mi,e.lanes=l,e;case Pc:return yl(n,o,l,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Rc:i=10;break e;case _c:i=9;break e;case ws:i=11;break e;case Ss:i=14;break e;case bt:i=16,r=null;break e}throw Error(R(130,e==null?e:typeof e,""))}return t=Qe(i,n,t,o),t.elementType=e,t.type=r,t.lanes=l,t}function tn(e,t,n,r){return e=Qe(7,e,r,t),e.lanes=n,e}function yl(e,t,n,r){return e=Qe(22,e,r,t),e.elementType=Pc,e.lanes=n,e.stateNode={isHidden:!1},e}function Gl(e,t,n){return e=Qe(6,e,null,t),e.lanes=n,e}function Zl(e,t,n){return t=Qe(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Im(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ol(0),this.expirationTimes=Ol(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ol(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function ra(e,t,n,r,o,l,i,s,u){return e=new Im(e,t,n,s,u),t===1?(t=1,l===!0&&(t|=8)):t=0,l=Qe(3,null,null,t),e.current=l,l.stateNode=e,l.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Bs(l),e}function Mm(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:hn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Sf(e){if(!e)return Bt;e=e._reactInternals;e:{if(dn(e)!==e||e.tag!==1)throw Error(R(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ze(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(R(171))}if(e.tag===1){var n=e.type;if(ze(n))return wd(e,n,t)}return t}function bf(e,t,n,r,o,l,i,s,u){return e=ra(n,r,!0,e,o,l,i,s,u),e.context=Sf(null),n=e.current,r=je(),o=Mt(n),l=mt(r,o),l.callback=t??null,Lt(n,l,o),e.current.lanes=o,Fr(e,o,r),Oe(e,r),e}function xl(e,t,n,r){var o=t.current,l=je(),i=Mt(o);return n=Sf(n),t.context===null?t.context=n:t.pendingContext=n,t=mt(l,i),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Lt(o,t,i),e!==null&&(nt(e,o,i,l),ko(e,o,i)),i}function tl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function _u(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function oa(e,t){_u(e,t),(e=e.alternate)&&_u(e,t)}function Am(){return null}var Ef=typeof reportError=="function"?reportError:function(e){console.error(e)};function la(e){this._internalRoot=e}vl.prototype.render=la.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(R(409));xl(e,t,null,null)};vl.prototype.unmount=la.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;an(function(){xl(null,e,null,null)}),t[yt]=null}};function vl(e){this._internalRoot=e}vl.prototype.unstable_scheduleHydration=function(e){if(e){var t=ed();e={blockedOn:null,target:e,priority:t};for(var n=0;n<jt.length&&t!==0&&t<jt[n].priority;n++);jt.splice(n,0,e),n===0&&nd(e)}};function ia(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function kl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Pu(){}function Fm(e,t,n,r,o){if(o){if(typeof r=="function"){var l=r;r=function(){var c=tl(i);l.call(c)}}var i=bf(t,r,e,0,null,!1,!1,"",Pu);return e._reactRootContainer=i,e[yt]=i.current,Cr(e.nodeType===8?e.parentNode:e),an(),i}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var s=r;r=function(){var c=tl(u);s.call(c)}}var u=ra(e,0,!1,null,null,!1,!1,"",Pu);return e._reactRootContainer=u,e[yt]=u.current,Cr(e.nodeType===8?e.parentNode:e),an(function(){xl(t,u,n,r)}),u}function wl(e,t,n,r,o){var l=n._reactRootContainer;if(l){var i=l;if(typeof o=="function"){var s=o;o=function(){var u=tl(i);s.call(u)}}xl(t,i,e,o)}else i=Fm(n,t,e,o,r);return tl(i)}Gc=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=ir(t.pendingLanes);n!==0&&(js(t,n|1),Oe(t,le()),!(W&6)&&(Dn=le()+500,Wt()))}break;case 13:an(function(){var r=xt(e,1);if(r!==null){var o=je();nt(r,e,1,o)}}),oa(e,1)}};Cs=function(e){if(e.tag===13){var t=xt(e,134217728);if(t!==null){var n=je();nt(t,e,134217728,n)}oa(e,134217728)}};Zc=function(e){if(e.tag===13){var t=Mt(e),n=xt(e,t);if(n!==null){var r=je();nt(n,e,t,r)}oa(e,t)}};ed=function(){return V};td=function(e,t){var n=V;try{return V=e,t()}finally{V=n}};ji=function(e,t,n){switch(t){case"input":if(xi(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=dl(r);if(!o)throw Error(R(90));zc(r),xi(r,o)}}}break;case"textarea":Lc(e,n);break;case"select":t=n.value,t!=null&&Nn(e,!!n.multiple,t,!1)}};Uc=Zs;$c=an;var Dm={usingClientEntryPoint:!1,Events:[Br,vn,dl,Dc,Bc,Zs]},tr={findFiberByHostInstance:Jt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Bm={bundleType:tr.bundleType,version:tr.version,rendererPackageName:tr.rendererPackageName,rendererConfig:tr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:kt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Vc(e),e===null?null:e.stateNode},findFiberByHostInstance:tr.findFiberByHostInstance||Am,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var po=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!po.isDisabled&&po.supportsFiber)try{sl=po.inject(Bm),ut=po}catch{}}Be.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Dm;Be.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ia(t))throw Error(R(200));return Mm(e,t,null,n)};Be.createRoot=function(e,t){if(!ia(e))throw Error(R(299));var n=!1,r="",o=Ef;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=ra(e,1,!1,null,null,n,!1,r,o),e[yt]=t.current,Cr(e.nodeType===8?e.parentNode:e),new la(t)};Be.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(R(188)):(e=Object.keys(e).join(","),Error(R(268,e)));return e=Vc(t),e=e===null?null:e.stateNode,e};Be.flushSync=function(e){return an(e)};Be.hydrate=function(e,t,n){if(!kl(t))throw Error(R(200));return wl(null,e,t,!0,n)};Be.hydrateRoot=function(e,t,n){if(!ia(e))throw Error(R(405));var r=n!=null&&n.hydratedSources||null,o=!1,l="",i=Ef;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),t=bf(t,null,e,1,n??null,o,!1,l,i),e[yt]=t.current,Cr(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new vl(t)};Be.render=function(e,t,n){if(!kl(t))throw Error(R(200));return wl(null,e,t,!1,n)};Be.unmountComponentAtNode=function(e){if(!kl(e))throw Error(R(40));return e._reactRootContainer?(an(function(){wl(null,null,e,!1,function(){e._reactRootContainer=null,e[yt]=null})}),!0):!1};Be.unstable_batchedUpdates=Zs;Be.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!kl(n))throw Error(R(200));if(e==null||e._reactInternals===void 0)throw Error(R(38));return wl(e,t,n,!1,r)};Be.version="18.3.1-next-f1338f8080-20240426";function jf(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(jf)}catch(e){console.error(e)}}jf(),Ec.exports=Be;var Um=Ec.exports,Tu=Um;di.createRoot=Tu.createRoot,di.hydrateRoot=Tu.hydrateRoot;/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ir(){return Ir=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ir.apply(this,arguments)}var _t;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(_t||(_t={}));const zu="popstate";function $m(e){e===void 0&&(e={});function t(r,o){let{pathname:l,search:i,hash:s}=r.location;return os("",{pathname:l,search:i,hash:s},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(r,o){return typeof o=="string"?o:nl(o)}return Hm(t,n,null,e)}function ie(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function sa(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Wm(){return Math.random().toString(36).substr(2,8)}function Ou(e,t){return{usr:e.state,key:e.key,idx:t}}function os(e,t,n,r){return n===void 0&&(n=null),Ir({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Vn(t):t,{state:n,key:t&&t.key||r||Wm()})}function nl(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Vn(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function Hm(e,t,n,r){r===void 0&&(r={});let{window:o=document.defaultView,v5Compat:l=!1}=r,i=o.history,s=_t.Pop,u=null,c=d();c==null&&(c=0,i.replaceState(Ir({},i.state,{idx:c}),""));function d(){return(i.state||{idx:null}).idx}function p(){s=_t.Pop;let v=d(),h=v==null?null:v-c;c=v,u&&u({action:s,location:x.location,delta:h})}function y(v,h){s=_t.Push;let f=os(x.location,v,h);c=d()+1;let m=Ou(f,c),w=x.createHref(f);try{i.pushState(m,"",w)}catch(N){if(N instanceof DOMException&&N.name==="DataCloneError")throw N;o.location.assign(w)}l&&u&&u({action:s,location:x.location,delta:1})}function S(v,h){s=_t.Replace;let f=os(x.location,v,h);c=d();let m=Ou(f,c),w=x.createHref(f);i.replaceState(m,"",w),l&&u&&u({action:s,location:x.location,delta:0})}function g(v){let h=o.location.origin!=="null"?o.location.origin:o.location.href,f=typeof v=="string"?v:nl(v);return f=f.replace(/ $/,"%20"),ie(h,"No window.location.(origin|href) available to create URL for href: "+f),new URL(f,h)}let x={get action(){return s},get location(){return e(o,i)},listen(v){if(u)throw new Error("A history only accepts one active listener");return o.addEventListener(zu,p),u=v,()=>{o.removeEventListener(zu,p),u=null}},createHref(v){return t(o,v)},createURL:g,encodeLocation(v){let h=g(v);return{pathname:h.pathname,search:h.search,hash:h.hash}},push:y,replace:S,go(v){return i.go(v)}};return x}var Lu;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Lu||(Lu={}));function Vm(e,t,n){return n===void 0&&(n="/"),Qm(e,t,n)}function Qm(e,t,n,r){let o=typeof t=="string"?Vn(t):t,l=aa(o.pathname||"/",n);if(l==null)return null;let i=Cf(e);Km(i);let s=null;for(let u=0;s==null&&u<i.length;++u){let c=l0(l);s=n0(i[u],c)}return s}function Cf(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let o=(l,i,s)=>{let u={relativePath:s===void 0?l.path||"":s,caseSensitive:l.caseSensitive===!0,childrenIndex:i,route:l};u.relativePath.startsWith("/")&&(ie(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let c=Ft([r,u.relativePath]),d=n.concat(u);l.children&&l.children.length>0&&(ie(l.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),Cf(l.children,t,d,c)),!(l.path==null&&!l.index)&&t.push({path:c,score:e0(c,l.index),routesMeta:d})};return e.forEach((l,i)=>{var s;if(l.path===""||!((s=l.path)!=null&&s.includes("?")))o(l,i);else for(let u of Nf(l.path))o(l,i,u)}),t}function Nf(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,o=n.endsWith("?"),l=n.replace(/\?$/,"");if(r.length===0)return o?[l,""]:[l];let i=Nf(r.join("/")),s=[];return s.push(...i.map(u=>u===""?l:[l,u].join("/"))),o&&s.push(...i),s.map(u=>e.startsWith("/")&&u===""?"/":u)}function Km(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:t0(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Ym=/^:[\w-]+$/,qm=3,Jm=2,Xm=1,Gm=10,Zm=-2,Iu=e=>e==="*";function e0(e,t){let n=e.split("/"),r=n.length;return n.some(Iu)&&(r+=Zm),t&&(r+=Jm),n.filter(o=>!Iu(o)).reduce((o,l)=>o+(Ym.test(l)?qm:l===""?Xm:Gm),r)}function t0(e,t){return e.length===t.length&&e.slice(0,-1).every((r,o)=>r===t[o])?e[e.length-1]-t[t.length-1]:0}function n0(e,t,n){let{routesMeta:r}=e,o={},l="/",i=[];for(let s=0;s<r.length;++s){let u=r[s],c=s===r.length-1,d=l==="/"?t:t.slice(l.length)||"/",p=r0({path:u.relativePath,caseSensitive:u.caseSensitive,end:c},d),y=u.route;if(!p)return null;Object.assign(o,p.params),i.push({params:o,pathname:Ft([l,p.pathname]),pathnameBase:c0(Ft([l,p.pathnameBase])),route:y}),p.pathnameBase!=="/"&&(l=Ft([l,p.pathnameBase]))}return i}function r0(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=o0(e.path,e.caseSensitive,e.end),o=t.match(n);if(!o)return null;let l=o[0],i=l.replace(/(.)\/+$/,"$1"),s=o.slice(1);return{params:r.reduce((c,d,p)=>{let{paramName:y,isOptional:S}=d;if(y==="*"){let x=s[p]||"";i=l.slice(0,l.length-x.length).replace(/(.)\/+$/,"$1")}const g=s[p];return S&&!g?c[y]=void 0:c[y]=(g||"").replace(/%2F/g,"/"),c},{}),pathname:l,pathnameBase:i,pattern:e}}function o0(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),sa(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(i,s,u)=>(r.push({paramName:s,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),r]}function l0(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return sa(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function aa(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}const i0=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,s0=e=>i0.test(e);function a0(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:o=""}=typeof e=="string"?Vn(e):e,l;if(n)if(s0(n))l=n;else{if(n.includes("//")){let i=n;n=n.replace(/\/\/+/g,"/"),sa(!1,"Pathnames cannot have embedded double slashes - normalizing "+(i+" -> "+n))}n.startsWith("/")?l=Mu(n.substring(1),"/"):l=Mu(n,t)}else l=t;return{pathname:l,search:d0(r),hash:f0(o)}}function Mu(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function ei(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function u0(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function ua(e,t){let n=u0(e);return t?n.map((r,o)=>o===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function ca(e,t,n,r){r===void 0&&(r=!1);let o;typeof e=="string"?o=Vn(e):(o=Ir({},e),ie(!o.pathname||!o.pathname.includes("?"),ei("?","pathname","search",o)),ie(!o.pathname||!o.pathname.includes("#"),ei("#","pathname","hash",o)),ie(!o.search||!o.search.includes("#"),ei("#","search","hash",o)));let l=e===""||o.pathname==="",i=l?"/":o.pathname,s;if(i==null)s=n;else{let p=t.length-1;if(!r&&i.startsWith("..")){let y=i.split("/");for(;y[0]==="..";)y.shift(),p-=1;o.pathname=y.join("/")}s=p>=0?t[p]:"/"}let u=a0(o,s),c=i&&i!=="/"&&i.endsWith("/"),d=(l||i===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(c||d)&&(u.pathname+="/"),u}const Ft=e=>e.join("/").replace(/\/\/+/g,"/"),c0=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),d0=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,f0=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function p0(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Rf=["post","put","patch","delete"];new Set(Rf);const h0=["get",...Rf];new Set(h0);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Mr(){return Mr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Mr.apply(this,arguments)}const da=b.createContext(null),m0=b.createContext(null),Ht=b.createContext(null),Sl=b.createContext(null),Vt=b.createContext({outlet:null,matches:[],isDataRoute:!1}),_f=b.createContext(null);function g0(e,t){let{relative:n}=t===void 0?{}:t;Qn()||ie(!1);let{basename:r,navigator:o}=b.useContext(Ht),{hash:l,pathname:i,search:s}=Tf(e,{relative:n}),u=i;return r!=="/"&&(u=i==="/"?r:Ft([r,i])),o.createHref({pathname:u,search:s,hash:l})}function Qn(){return b.useContext(Sl)!=null}function $r(){return Qn()||ie(!1),b.useContext(Sl).location}function Pf(e){b.useContext(Ht).static||b.useLayoutEffect(e)}function Wr(){let{isDataRoute:e}=b.useContext(Vt);return e?_0():y0()}function y0(){Qn()||ie(!1);let e=b.useContext(da),{basename:t,future:n,navigator:r}=b.useContext(Ht),{matches:o}=b.useContext(Vt),{pathname:l}=$r(),i=JSON.stringify(ua(o,n.v7_relativeSplatPath)),s=b.useRef(!1);return Pf(()=>{s.current=!0}),b.useCallback(function(c,d){if(d===void 0&&(d={}),!s.current)return;if(typeof c=="number"){r.go(c);return}let p=ca(c,JSON.parse(i),l,d.relative==="path");e==null&&t!=="/"&&(p.pathname=p.pathname==="/"?t:Ft([t,p.pathname])),(d.replace?r.replace:r.push)(p,d.state,d)},[t,r,i,l,e])}function Tf(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=b.useContext(Ht),{matches:o}=b.useContext(Vt),{pathname:l}=$r(),i=JSON.stringify(ua(o,r.v7_relativeSplatPath));return b.useMemo(()=>ca(e,JSON.parse(i),l,n==="path"),[e,i,l,n])}function x0(e,t){return v0(e,t)}function v0(e,t,n,r){Qn()||ie(!1);let{navigator:o}=b.useContext(Ht),{matches:l}=b.useContext(Vt),i=l[l.length-1],s=i?i.params:{};i&&i.pathname;let u=i?i.pathnameBase:"/";i&&i.route;let c=$r(),d;if(t){var p;let v=typeof t=="string"?Vn(t):t;u==="/"||(p=v.pathname)!=null&&p.startsWith(u)||ie(!1),d=v}else d=c;let y=d.pathname||"/",S=y;if(u!=="/"){let v=u.replace(/^\//,"").split("/");S="/"+y.replace(/^\//,"").split("/").slice(v.length).join("/")}let g=Vm(e,{pathname:S}),x=E0(g&&g.map(v=>Object.assign({},v,{params:Object.assign({},s,v.params),pathname:Ft([u,o.encodeLocation?o.encodeLocation(v.pathname).pathname:v.pathname]),pathnameBase:v.pathnameBase==="/"?u:Ft([u,o.encodeLocation?o.encodeLocation(v.pathnameBase).pathname:v.pathnameBase])})),l,n,r);return t&&x?b.createElement(Sl.Provider,{value:{location:Mr({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:_t.Pop}},x):x}function k0(){let e=R0(),t=p0(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return b.createElement(b.Fragment,null,b.createElement("h2",null,"Unexpected Application Error!"),b.createElement("h3",{style:{fontStyle:"italic"}},t),n?b.createElement("pre",{style:o},n):null,null)}const w0=b.createElement(k0,null);class S0 extends b.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?b.createElement(Vt.Provider,{value:this.props.routeContext},b.createElement(_f.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function b0(e){let{routeContext:t,match:n,children:r}=e,o=b.useContext(da);return o&&o.static&&o.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=n.route.id),b.createElement(Vt.Provider,{value:t},r)}function E0(e,t,n,r){var o;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var l;if(!n)return null;if(n.errors)e=n.matches;else if((l=r)!=null&&l.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let i=e,s=(o=n)==null?void 0:o.errors;if(s!=null){let d=i.findIndex(p=>p.route.id&&(s==null?void 0:s[p.route.id])!==void 0);d>=0||ie(!1),i=i.slice(0,Math.min(i.length,d+1))}let u=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<i.length;d++){let p=i[d];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(c=d),p.route.id){let{loaderData:y,errors:S}=n,g=p.route.loader&&y[p.route.id]===void 0&&(!S||S[p.route.id]===void 0);if(p.route.lazy||g){u=!0,c>=0?i=i.slice(0,c+1):i=[i[0]];break}}}return i.reduceRight((d,p,y)=>{let S,g=!1,x=null,v=null;n&&(S=s&&p.route.id?s[p.route.id]:void 0,x=p.route.errorElement||w0,u&&(c<0&&y===0?(P0("route-fallback"),g=!0,v=null):c===y&&(g=!0,v=p.route.hydrateFallbackElement||null)));let h=t.concat(i.slice(0,y+1)),f=()=>{let m;return S?m=x:g?m=v:p.route.Component?m=b.createElement(p.route.Component,null):p.route.element?m=p.route.element:m=d,b.createElement(b0,{match:p,routeContext:{outlet:d,matches:h,isDataRoute:n!=null},children:m})};return n&&(p.route.ErrorBoundary||p.route.errorElement||y===0)?b.createElement(S0,{location:n.location,revalidation:n.revalidation,component:x,error:S,children:f(),routeContext:{outlet:null,matches:h,isDataRoute:!0}}):f()},null)}var zf=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(zf||{}),Of=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Of||{});function j0(e){let t=b.useContext(da);return t||ie(!1),t}function C0(e){let t=b.useContext(m0);return t||ie(!1),t}function N0(e){let t=b.useContext(Vt);return t||ie(!1),t}function Lf(e){let t=N0(),n=t.matches[t.matches.length-1];return n.route.id||ie(!1),n.route.id}function R0(){var e;let t=b.useContext(_f),n=C0(),r=Lf();return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function _0(){let{router:e}=j0(zf.UseNavigateStable),t=Lf(Of.UseNavigateStable),n=b.useRef(!1);return Pf(()=>{n.current=!0}),b.useCallback(function(o,l){l===void 0&&(l={}),n.current&&(typeof o=="number"?e.navigate(o):e.navigate(o,Mr({fromRouteId:t},l)))},[e,t])}const Au={};function P0(e,t,n){Au[e]||(Au[e]=!0)}function T0(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function Bn(e){let{to:t,replace:n,state:r,relative:o}=e;Qn()||ie(!1);let{future:l,static:i}=b.useContext(Ht),{matches:s}=b.useContext(Vt),{pathname:u}=$r(),c=Wr(),d=ca(t,ua(s,l.v7_relativeSplatPath),u,o==="path"),p=JSON.stringify(d);return b.useEffect(()=>c(JSON.parse(p),{replace:n,state:r,relative:o}),[c,p,o,n,r]),null}function qt(e){ie(!1)}function z0(e){let{basename:t="/",children:n=null,location:r,navigationType:o=_t.Pop,navigator:l,static:i=!1,future:s}=e;Qn()&&ie(!1);let u=t.replace(/^\/*/,"/"),c=b.useMemo(()=>({basename:u,navigator:l,static:i,future:Mr({v7_relativeSplatPath:!1},s)}),[u,s,l,i]);typeof r=="string"&&(r=Vn(r));let{pathname:d="/",search:p="",hash:y="",state:S=null,key:g="default"}=r,x=b.useMemo(()=>{let v=aa(d,u);return v==null?null:{location:{pathname:v,search:p,hash:y,state:S,key:g},navigationType:o}},[u,d,p,y,S,g,o]);return x==null?null:b.createElement(Ht.Provider,{value:c},b.createElement(Sl.Provider,{children:n,value:x}))}function O0(e){let{children:t,location:n}=e;return x0(ls(t),n)}new Promise(()=>{});function ls(e,t){t===void 0&&(t=[]);let n=[];return b.Children.forEach(e,(r,o)=>{if(!b.isValidElement(r))return;let l=[...t,o];if(r.type===b.Fragment){n.push.apply(n,ls(r.props.children,l));return}r.type!==qt&&ie(!1),!r.props.index||!r.props.children||ie(!1);let i={id:r.props.id||l.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(i.children=ls(r.props.children,l)),n.push(i)}),n}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function is(){return is=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},is.apply(this,arguments)}function L0(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,l;for(l=0;l<r.length;l++)o=r[l],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function I0(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function M0(e,t){return e.button===0&&(!t||t==="_self")&&!I0(e)}const A0=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],F0="6";try{window.__reactRouterVersion=F0}catch{}const D0="startTransition",Fu=Pp[D0];function B0(e){let{basename:t,children:n,future:r,window:o}=e,l=b.useRef();l.current==null&&(l.current=$m({window:o,v5Compat:!0}));let i=l.current,[s,u]=b.useState({action:i.action,location:i.location}),{v7_startTransition:c}=r||{},d=b.useCallback(p=>{c&&Fu?Fu(()=>u(p)):u(p)},[u,c]);return b.useLayoutEffect(()=>i.listen(d),[i,d]),b.useEffect(()=>T0(r),[r]),b.createElement(z0,{basename:t,children:n,location:s.location,navigationType:s.action,navigator:i,future:r})}const U0=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",$0=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,yr=b.forwardRef(function(t,n){let{onClick:r,relative:o,reloadDocument:l,replace:i,state:s,target:u,to:c,preventScrollReset:d,viewTransition:p}=t,y=L0(t,A0),{basename:S}=b.useContext(Ht),g,x=!1;if(typeof c=="string"&&$0.test(c)&&(g=c,U0))try{let m=new URL(window.location.href),w=c.startsWith("//")?new URL(m.protocol+c):new URL(c),N=aa(w.pathname,S);w.origin===m.origin&&N!=null?c=N+w.search+w.hash:x=!0}catch{}let v=g0(c,{relative:o}),h=W0(c,{replace:i,state:s,target:u,preventScrollReset:d,relative:o,viewTransition:p});function f(m){r&&r(m),m.defaultPrevented||h(m)}return b.createElement("a",is({},y,{href:g||v,onClick:x||l?r:f,ref:n,target:u}))});var Du;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Du||(Du={}));var Bu;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Bu||(Bu={}));function W0(e,t){let{target:n,replace:r,state:o,preventScrollReset:l,relative:i,viewTransition:s}=t===void 0?{}:t,u=Wr(),c=$r(),d=Tf(e,{relative:i});return b.useCallback(p=>{if(M0(p,n)){p.preventDefault();let y=r!==void 0?r:nl(c)===nl(d);u(e,{replace:y,state:o,preventScrollReset:l,relative:i,viewTransition:s})}},[c,u,d,r,o,n,e,l,i,s])}const H0=(e,t)=>{localStorage.setItem("token",e),localStorage.setItem("user",JSON.stringify(t))},V0=()=>localStorage.getItem("token"),fa=()=>{const e=localStorage.getItem("user");return e?JSON.parse(e):null},pa=()=>{const e=fa();return(e==null?void 0:e.role)||null},ha=()=>!!V0(),Q0=()=>{localStorage.removeItem("token"),localStorage.removeItem("user")};function K0({children:e}){return ha()?e:a.jsx(Bn,{to:"/login",replace:!0})}function Y0({children:e}){return ha()?pa()!=="admin"?a.jsx(Bn,{to:"/dashboard",replace:!0}):e:a.jsx(Bn,{to:"/login",replace:!0})}let Xe=null;const B={success:e=>Xe==null?void 0:Xe({msg:e,type:"success"}),error:e=>Xe==null?void 0:Xe({msg:e,type:"error"}),info:e=>Xe==null?void 0:Xe({msg:e,type:"info"})};function q0(){const[e,t]=b.useState([]);return b.useEffect(()=>(Xe=({msg:n,type:r})=>{const o=Date.now();t(l=>[...l,{id:o,msg:n,type:r}]),setTimeout(()=>t(l=>l.filter(i=>i.id!==o)),3500)},()=>{Xe=null}),[]),a.jsxs("div",{style:{position:"fixed",bottom:24,right:24,zIndex:9999,display:"flex",flexDirection:"column",gap:10},children:[e.map(n=>a.jsx("div",{style:{padding:"12px 20px",borderRadius:12,color:"#fff",fontSize:14,fontWeight:500,boxShadow:"0 8px 30px rgba(0,0,0,0.15)",background:n.type==="success"?"#10b981":n.type==="error"?"#ef4444":"#6366f1",animation:"slideIn 0.3s ease",maxWidth:320,lineHeight:1.4},children:n.msg},n.id)),a.jsx("style",{children:`
        @keyframes slideIn {
          from { opacity: 0; transform: translateX(30px); }
          to { opacity: 1; transform: translateX(0); }
        }
      `})]})}function If(e,t){return function(){return e.apply(t,arguments)}}const{toString:J0}=Object.prototype,{getPrototypeOf:ma}=Object,{iterator:bl,toStringTag:Mf}=Symbol,El=(e=>t=>{const n=J0.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),ot=e=>(e=e.toLowerCase(),t=>El(t)===e),jl=e=>t=>typeof t===e,{isArray:Kn}=Array,Un=jl("undefined");function Hr(e){return e!==null&&!Un(e)&&e.constructor!==null&&!Un(e.constructor)&&Le(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const Af=ot("ArrayBuffer");function X0(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&Af(e.buffer),t}const G0=jl("string"),Le=jl("function"),Ff=jl("number"),Vr=e=>e!==null&&typeof e=="object",Z0=e=>e===!0||e===!1,No=e=>{if(El(e)!=="object")return!1;const t=ma(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Mf in e)&&!(bl in e)},eg=e=>{if(!Vr(e)||Hr(e))return!1;try{return Object.keys(e).length===0&&Object.getPrototypeOf(e)===Object.prototype}catch{return!1}},tg=ot("Date"),ng=ot("File"),rg=e=>!!(e&&typeof e.uri<"u"),og=e=>e&&typeof e.getParts<"u",lg=ot("Blob"),ig=ot("FileList"),sg=e=>Vr(e)&&Le(e.pipe);function ag(){return typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}}const Uu=ag(),$u=typeof Uu.FormData<"u"?Uu.FormData:void 0,ug=e=>{let t;return e&&($u&&e instanceof $u||Le(e.append)&&((t=El(e))==="formdata"||t==="object"&&Le(e.toString)&&e.toString()==="[object FormData]"))},cg=ot("URLSearchParams"),[dg,fg,pg,hg]=["ReadableStream","Request","Response","Headers"].map(ot),mg=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Qr(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,o;if(typeof e!="object"&&(e=[e]),Kn(e))for(r=0,o=e.length;r<o;r++)t.call(null,e[r],r,e);else{if(Hr(e))return;const l=n?Object.getOwnPropertyNames(e):Object.keys(e),i=l.length;let s;for(r=0;r<i;r++)s=l[r],t.call(null,e[s],s,e)}}function Df(e,t){if(Hr(e))return null;t=t.toLowerCase();const n=Object.keys(e);let r=n.length,o;for(;r-- >0;)if(o=n[r],t===o.toLowerCase())return o;return null}const Zt=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,Bf=e=>!Un(e)&&e!==Zt;function ss(){const{caseless:e,skipUndefined:t}=Bf(this)&&this||{},n={},r=(o,l)=>{if(l==="__proto__"||l==="constructor"||l==="prototype")return;const i=e&&Df(n,l)||l;No(n[i])&&No(o)?n[i]=ss(n[i],o):No(o)?n[i]=ss({},o):Kn(o)?n[i]=o.slice():(!t||!Un(o))&&(n[i]=o)};for(let o=0,l=arguments.length;o<l;o++)arguments[o]&&Qr(arguments[o],r);return n}const gg=(e,t,n,{allOwnKeys:r}={})=>(Qr(t,(o,l)=>{n&&Le(o)?Object.defineProperty(e,l,{value:If(o,n),writable:!0,enumerable:!0,configurable:!0}):Object.defineProperty(e,l,{value:o,writable:!0,enumerable:!0,configurable:!0})},{allOwnKeys:r}),e),yg=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),xg=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),Object.defineProperty(e.prototype,"constructor",{value:e,writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},vg=(e,t,n,r)=>{let o,l,i;const s={};if(t=t||{},e==null)return t;do{for(o=Object.getOwnPropertyNames(e),l=o.length;l-- >0;)i=o[l],(!r||r(i,e,t))&&!s[i]&&(t[i]=e[i],s[i]=!0);e=n!==!1&&ma(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},kg=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},wg=e=>{if(!e)return null;if(Kn(e))return e;let t=e.length;if(!Ff(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},Sg=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&ma(Uint8Array)),bg=(e,t)=>{const r=(e&&e[bl]).call(e);let o;for(;(o=r.next())&&!o.done;){const l=o.value;t.call(e,l[0],l[1])}},Eg=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},jg=ot("HTMLFormElement"),Cg=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,o){return r.toUpperCase()+o}),Wu=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),Ng=ot("RegExp"),Uf=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};Qr(n,(o,l)=>{let i;(i=t(o,l,e))!==!1&&(r[l]=i||o)}),Object.defineProperties(e,r)},Rg=e=>{Uf(e,(t,n)=>{if(Le(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(Le(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},_g=(e,t)=>{const n={},r=o=>{o.forEach(l=>{n[l]=!0})};return Kn(e)?r(e):r(String(e).split(t)),n},Pg=()=>{},Tg=(e,t)=>e!=null&&Number.isFinite(e=+e)?e:t;function zg(e){return!!(e&&Le(e.append)&&e[Mf]==="FormData"&&e[bl])}const Og=e=>{const t=new Array(10),n=(r,o)=>{if(Vr(r)){if(t.indexOf(r)>=0)return;if(Hr(r))return r;if(!("toJSON"in r)){t[o]=r;const l=Kn(r)?[]:{};return Qr(r,(i,s)=>{const u=n(i,o+1);!Un(u)&&(l[s]=u)}),t[o]=void 0,l}}return r};return n(e,0)},Lg=ot("AsyncFunction"),Ig=e=>e&&(Vr(e)||Le(e))&&Le(e.then)&&Le(e.catch),$f=((e,t)=>e?setImmediate:t?((n,r)=>(Zt.addEventListener("message",({source:o,data:l})=>{o===Zt&&l===n&&r.length&&r.shift()()},!1),o=>{r.push(o),Zt.postMessage(n,"*")}))(`axios@${Math.random()}`,[]):n=>setTimeout(n))(typeof setImmediate=="function",Le(Zt.postMessage)),Mg=typeof queueMicrotask<"u"?queueMicrotask.bind(Zt):typeof process<"u"&&process.nextTick||$f,Ag=e=>e!=null&&Le(e[bl]),k={isArray:Kn,isArrayBuffer:Af,isBuffer:Hr,isFormData:ug,isArrayBufferView:X0,isString:G0,isNumber:Ff,isBoolean:Z0,isObject:Vr,isPlainObject:No,isEmptyObject:eg,isReadableStream:dg,isRequest:fg,isResponse:pg,isHeaders:hg,isUndefined:Un,isDate:tg,isFile:ng,isReactNativeBlob:rg,isReactNative:og,isBlob:lg,isRegExp:Ng,isFunction:Le,isStream:sg,isURLSearchParams:cg,isTypedArray:Sg,isFileList:ig,forEach:Qr,merge:ss,extend:gg,trim:mg,stripBOM:yg,inherits:xg,toFlatObject:vg,kindOf:El,kindOfTest:ot,endsWith:kg,toArray:wg,forEachEntry:bg,matchAll:Eg,isHTMLForm:jg,hasOwnProperty:Wu,hasOwnProp:Wu,reduceDescriptors:Uf,freezeMethods:Rg,toObjectSet:_g,toCamelCase:Cg,noop:Pg,toFiniteNumber:Tg,findKey:Df,global:Zt,isContextDefined:Bf,isSpecCompliantForm:zg,toJSONObject:Og,isAsyncFn:Lg,isThenable:Ig,setImmediate:$f,asap:Mg,isIterable:Ag};let M=class Wf extends Error{static from(t,n,r,o,l,i){const s=new Wf(t.message,n||t.code,r,o,l);return s.cause=t,s.name=t.name,t.status!=null&&s.status==null&&(s.status=t.status),i&&Object.assign(s,i),s}constructor(t,n,r,o,l){super(t),Object.defineProperty(this,"message",{value:t,enumerable:!0,writable:!0,configurable:!0}),this.name="AxiosError",this.isAxiosError=!0,n&&(this.code=n),r&&(this.config=r),o&&(this.request=o),l&&(this.response=l,this.status=l.status)}toJSON(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:k.toJSONObject(this.config),code:this.code,status:this.status}}};M.ERR_BAD_OPTION_VALUE="ERR_BAD_OPTION_VALUE";M.ERR_BAD_OPTION="ERR_BAD_OPTION";M.ECONNABORTED="ECONNABORTED";M.ETIMEDOUT="ETIMEDOUT";M.ERR_NETWORK="ERR_NETWORK";M.ERR_FR_TOO_MANY_REDIRECTS="ERR_FR_TOO_MANY_REDIRECTS";M.ERR_DEPRECATED="ERR_DEPRECATED";M.ERR_BAD_RESPONSE="ERR_BAD_RESPONSE";M.ERR_BAD_REQUEST="ERR_BAD_REQUEST";M.ERR_CANCELED="ERR_CANCELED";M.ERR_NOT_SUPPORT="ERR_NOT_SUPPORT";M.ERR_INVALID_URL="ERR_INVALID_URL";const Fg=null;function as(e){return k.isPlainObject(e)||k.isArray(e)}function Hf(e){return k.endsWith(e,"[]")?e.slice(0,-2):e}function ti(e,t,n){return e?e.concat(t).map(function(o,l){return o=Hf(o),!n&&l?"["+o+"]":o}).join(n?".":""):t}function Dg(e){return k.isArray(e)&&!e.some(as)}const Bg=k.toFlatObject(k,{},null,function(t){return/^is[A-Z]/.test(t)});function Cl(e,t,n){if(!k.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=k.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(x,v){return!k.isUndefined(v[x])});const r=n.metaTokens,o=n.visitor||d,l=n.dots,i=n.indexes,u=(n.Blob||typeof Blob<"u"&&Blob)&&k.isSpecCompliantForm(t);if(!k.isFunction(o))throw new TypeError("visitor must be a function");function c(g){if(g===null)return"";if(k.isDate(g))return g.toISOString();if(k.isBoolean(g))return g.toString();if(!u&&k.isBlob(g))throw new M("Blob is not supported. Use a Buffer instead.");return k.isArrayBuffer(g)||k.isTypedArray(g)?u&&typeof Blob=="function"?new Blob([g]):Buffer.from(g):g}function d(g,x,v){let h=g;if(k.isReactNative(t)&&k.isReactNativeBlob(g))return t.append(ti(v,x,l),c(g)),!1;if(g&&!v&&typeof g=="object"){if(k.endsWith(x,"{}"))x=r?x:x.slice(0,-2),g=JSON.stringify(g);else if(k.isArray(g)&&Dg(g)||(k.isFileList(g)||k.endsWith(x,"[]"))&&(h=k.toArray(g)))return x=Hf(x),h.forEach(function(m,w){!(k.isUndefined(m)||m===null)&&t.append(i===!0?ti([x],w,l):i===null?x:x+"[]",c(m))}),!1}return as(g)?!0:(t.append(ti(v,x,l),c(g)),!1)}const p=[],y=Object.assign(Bg,{defaultVisitor:d,convertValue:c,isVisitable:as});function S(g,x){if(!k.isUndefined(g)){if(p.indexOf(g)!==-1)throw Error("Circular reference detected in "+x.join("."));p.push(g),k.forEach(g,function(h,f){(!(k.isUndefined(h)||h===null)&&o.call(t,h,k.isString(f)?f.trim():f,x,y))===!0&&S(h,x?x.concat(f):[f])}),p.pop()}}if(!k.isObject(e))throw new TypeError("data must be an object");return S(e),t}function Hu(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function ga(e,t){this._pairs=[],e&&Cl(e,this,t)}const Vf=ga.prototype;Vf.append=function(t,n){this._pairs.push([t,n])};Vf.toString=function(t){const n=t?function(r){return t.call(this,r,Hu)}:Hu;return this._pairs.map(function(o){return n(o[0])+"="+n(o[1])},"").join("&")};function Ug(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+")}function Qf(e,t,n){if(!t)return e;const r=n&&n.encode||Ug,o=k.isFunction(n)?{serialize:n}:n,l=o&&o.serialize;let i;if(l?i=l(t,o):i=k.isURLSearchParams(t)?t.toString():new ga(t,o).toString(r),i){const s=e.indexOf("#");s!==-1&&(e=e.slice(0,s)),e+=(e.indexOf("?")===-1?"?":"&")+i}return e}class Vu{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){k.forEach(this.handlers,function(r){r!==null&&t(r)})}}const ya={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1,legacyInterceptorReqResOrdering:!0},$g=typeof URLSearchParams<"u"?URLSearchParams:ga,Wg=typeof FormData<"u"?FormData:null,Hg=typeof Blob<"u"?Blob:null,Vg={isBrowser:!0,classes:{URLSearchParams:$g,FormData:Wg,Blob:Hg},protocols:["http","https","file","blob","url","data"]},xa=typeof window<"u"&&typeof document<"u",us=typeof navigator=="object"&&navigator||void 0,Qg=xa&&(!us||["ReactNative","NativeScript","NS"].indexOf(us.product)<0),Kg=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",Yg=xa&&window.location.href||"http://localhost",qg=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:xa,hasStandardBrowserEnv:Qg,hasStandardBrowserWebWorkerEnv:Kg,navigator:us,origin:Yg},Symbol.toStringTag,{value:"Module"})),Se={...qg,...Vg};function Jg(e,t){return Cl(e,new Se.classes.URLSearchParams,{visitor:function(n,r,o,l){return Se.isNode&&k.isBuffer(n)?(this.append(r,n.toString("base64")),!1):l.defaultVisitor.apply(this,arguments)},...t})}function Xg(e){return k.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function Gg(e){const t={},n=Object.keys(e);let r;const o=n.length;let l;for(r=0;r<o;r++)l=n[r],t[l]=e[l];return t}function Kf(e){function t(n,r,o,l){let i=n[l++];if(i==="__proto__")return!0;const s=Number.isFinite(+i),u=l>=n.length;return i=!i&&k.isArray(o)?o.length:i,u?(k.hasOwnProp(o,i)?o[i]=[o[i],r]:o[i]=r,!s):((!o[i]||!k.isObject(o[i]))&&(o[i]=[]),t(n,r,o[i],l)&&k.isArray(o[i])&&(o[i]=Gg(o[i])),!s)}if(k.isFormData(e)&&k.isFunction(e.entries)){const n={};return k.forEachEntry(e,(r,o)=>{t(Xg(r),o,n,0)}),n}return null}function Zg(e,t,n){if(k.isString(e))try{return(t||JSON.parse)(e),k.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const Kr={transitional:ya,adapter:["xhr","http","fetch"],transformRequest:[function(t,n){const r=n.getContentType()||"",o=r.indexOf("application/json")>-1,l=k.isObject(t);if(l&&k.isHTMLForm(t)&&(t=new FormData(t)),k.isFormData(t))return o?JSON.stringify(Kf(t)):t;if(k.isArrayBuffer(t)||k.isBuffer(t)||k.isStream(t)||k.isFile(t)||k.isBlob(t)||k.isReadableStream(t))return t;if(k.isArrayBufferView(t))return t.buffer;if(k.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let s;if(l){if(r.indexOf("application/x-www-form-urlencoded")>-1)return Jg(t,this.formSerializer).toString();if((s=k.isFileList(t))||r.indexOf("multipart/form-data")>-1){const u=this.env&&this.env.FormData;return Cl(s?{"files[]":t}:t,u&&new u,this.formSerializer)}}return l||o?(n.setContentType("application/json",!1),Zg(t)):t}],transformResponse:[function(t){const n=this.transitional||Kr.transitional,r=n&&n.forcedJSONParsing,o=this.responseType==="json";if(k.isResponse(t)||k.isReadableStream(t))return t;if(t&&k.isString(t)&&(r&&!this.responseType||o)){const i=!(n&&n.silentJSONParsing)&&o;try{return JSON.parse(t,this.parseReviver)}catch(s){if(i)throw s.name==="SyntaxError"?M.from(s,M.ERR_BAD_RESPONSE,this,null,this.response):s}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Se.classes.FormData,Blob:Se.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};k.forEach(["delete","get","head","post","put","patch"],e=>{Kr.headers[e]={}});const e1=k.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),t1=e=>{const t={};let n,r,o;return e&&e.split(`
`).forEach(function(i){o=i.indexOf(":"),n=i.substring(0,o).trim().toLowerCase(),r=i.substring(o+1).trim(),!(!n||t[n]&&e1[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},Qu=Symbol("internals");function nr(e){return e&&String(e).trim().toLowerCase()}function Ro(e){return e===!1||e==null?e:k.isArray(e)?e.map(Ro):String(e)}function n1(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const r1=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function ni(e,t,n,r,o){if(k.isFunction(r))return r.call(this,t,n);if(o&&(t=n),!!k.isString(t)){if(k.isString(r))return t.indexOf(r)!==-1;if(k.isRegExp(r))return r.test(t)}}function o1(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function l1(e,t){const n=k.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(o,l,i){return this[r].call(this,t,o,l,i)},configurable:!0})})}let Ie=class{constructor(t){t&&this.set(t)}set(t,n,r){const o=this;function l(s,u,c){const d=nr(u);if(!d)throw new Error("header name must be a non-empty string");const p=k.findKey(o,d);(!p||o[p]===void 0||c===!0||c===void 0&&o[p]!==!1)&&(o[p||u]=Ro(s))}const i=(s,u)=>k.forEach(s,(c,d)=>l(c,d,u));if(k.isPlainObject(t)||t instanceof this.constructor)i(t,n);else if(k.isString(t)&&(t=t.trim())&&!r1(t))i(t1(t),n);else if(k.isObject(t)&&k.isIterable(t)){let s={},u,c;for(const d of t){if(!k.isArray(d))throw TypeError("Object iterator must return a key-value pair");s[c=d[0]]=(u=s[c])?k.isArray(u)?[...u,d[1]]:[u,d[1]]:d[1]}i(s,n)}else t!=null&&l(n,t,r);return this}get(t,n){if(t=nr(t),t){const r=k.findKey(this,t);if(r){const o=this[r];if(!n)return o;if(n===!0)return n1(o);if(k.isFunction(n))return n.call(this,o,r);if(k.isRegExp(n))return n.exec(o);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=nr(t),t){const r=k.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||ni(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let o=!1;function l(i){if(i=nr(i),i){const s=k.findKey(r,i);s&&(!n||ni(r,r[s],s,n))&&(delete r[s],o=!0)}}return k.isArray(t)?t.forEach(l):l(t),o}clear(t){const n=Object.keys(this);let r=n.length,o=!1;for(;r--;){const l=n[r];(!t||ni(this,this[l],l,t,!0))&&(delete this[l],o=!0)}return o}normalize(t){const n=this,r={};return k.forEach(this,(o,l)=>{const i=k.findKey(r,l);if(i){n[i]=Ro(o),delete n[l];return}const s=t?o1(l):String(l).trim();s!==l&&delete n[l],n[s]=Ro(o),r[s]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return k.forEach(this,(r,o)=>{r!=null&&r!==!1&&(n[o]=t&&k.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(o=>r.set(o)),r}static accessor(t){const r=(this[Qu]=this[Qu]={accessors:{}}).accessors,o=this.prototype;function l(i){const s=nr(i);r[s]||(l1(o,i),r[s]=!0)}return k.isArray(t)?t.forEach(l):l(t),this}};Ie.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);k.reduceDescriptors(Ie.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(r){this[n]=r}}});k.freezeMethods(Ie);function ri(e,t){const n=this||Kr,r=t||n,o=Ie.from(r.headers);let l=r.data;return k.forEach(e,function(s){l=s.call(n,l,o.normalize(),t?t.status:void 0)}),o.normalize(),l}function Yf(e){return!!(e&&e.__CANCEL__)}let Yr=class extends M{constructor(t,n,r){super(t??"canceled",M.ERR_CANCELED,n,r),this.name="CanceledError",this.__CANCEL__=!0}};function qf(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new M("Request failed with status code "+n.status,[M.ERR_BAD_REQUEST,M.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}function i1(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function s1(e,t){e=e||10;const n=new Array(e),r=new Array(e);let o=0,l=0,i;return t=t!==void 0?t:1e3,function(u){const c=Date.now(),d=r[l];i||(i=c),n[o]=u,r[o]=c;let p=l,y=0;for(;p!==o;)y+=n[p++],p=p%e;if(o=(o+1)%e,o===l&&(l=(l+1)%e),c-i<t)return;const S=d&&c-d;return S?Math.round(y*1e3/S):void 0}}function a1(e,t){let n=0,r=1e3/t,o,l;const i=(c,d=Date.now())=>{n=d,o=null,l&&(clearTimeout(l),l=null),e(...c)};return[(...c)=>{const d=Date.now(),p=d-n;p>=r?i(c,d):(o=c,l||(l=setTimeout(()=>{l=null,i(o)},r-p)))},()=>o&&i(o)]}const rl=(e,t,n=3)=>{let r=0;const o=s1(50,250);return a1(l=>{const i=l.loaded,s=l.lengthComputable?l.total:void 0,u=i-r,c=o(u),d=i<=s;r=i;const p={loaded:i,total:s,progress:s?i/s:void 0,bytes:u,rate:c||void 0,estimated:c&&s&&d?(s-i)/c:void 0,event:l,lengthComputable:s!=null,[t?"download":"upload"]:!0};e(p)},n)},Ku=(e,t)=>{const n=e!=null;return[r=>t[0]({lengthComputable:n,total:e,loaded:r}),t[1]]},Yu=e=>(...t)=>k.asap(()=>e(...t)),u1=Se.hasStandardBrowserEnv?((e,t)=>n=>(n=new URL(n,Se.origin),e.protocol===n.protocol&&e.host===n.host&&(t||e.port===n.port)))(new URL(Se.origin),Se.navigator&&/(msie|trident)/i.test(Se.navigator.userAgent)):()=>!0,c1=Se.hasStandardBrowserEnv?{write(e,t,n,r,o,l,i){if(typeof document>"u")return;const s=[`${e}=${encodeURIComponent(t)}`];k.isNumber(n)&&s.push(`expires=${new Date(n).toUTCString()}`),k.isString(r)&&s.push(`path=${r}`),k.isString(o)&&s.push(`domain=${o}`),l===!0&&s.push("secure"),k.isString(i)&&s.push(`SameSite=${i}`),document.cookie=s.join("; ")},read(e){if(typeof document>"u")return null;const t=document.cookie.match(new RegExp("(?:^|; )"+e+"=([^;]*)"));return t?decodeURIComponent(t[1]):null},remove(e){this.write(e,"",Date.now()-864e5,"/")}}:{write(){},read(){return null},remove(){}};function d1(e){return typeof e!="string"?!1:/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function f1(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}function Jf(e,t,n){let r=!d1(t);return e&&(r||n==!1)?f1(e,t):t}const qu=e=>e instanceof Ie?{...e}:e;function un(e,t){t=t||{};const n={};function r(c,d,p,y){return k.isPlainObject(c)&&k.isPlainObject(d)?k.merge.call({caseless:y},c,d):k.isPlainObject(d)?k.merge({},d):k.isArray(d)?d.slice():d}function o(c,d,p,y){if(k.isUndefined(d)){if(!k.isUndefined(c))return r(void 0,c,p,y)}else return r(c,d,p,y)}function l(c,d){if(!k.isUndefined(d))return r(void 0,d)}function i(c,d){if(k.isUndefined(d)){if(!k.isUndefined(c))return r(void 0,c)}else return r(void 0,d)}function s(c,d,p){if(p in t)return r(c,d);if(p in e)return r(void 0,c)}const u={url:l,method:l,data:l,baseURL:i,transformRequest:i,transformResponse:i,paramsSerializer:i,timeout:i,timeoutMessage:i,withCredentials:i,withXSRFToken:i,adapter:i,responseType:i,xsrfCookieName:i,xsrfHeaderName:i,onUploadProgress:i,onDownloadProgress:i,decompress:i,maxContentLength:i,maxBodyLength:i,beforeRedirect:i,transport:i,httpAgent:i,httpsAgent:i,cancelToken:i,socketPath:i,responseEncoding:i,validateStatus:s,headers:(c,d,p)=>o(qu(c),qu(d),p,!0)};return k.forEach(Object.keys({...e,...t}),function(d){if(d==="__proto__"||d==="constructor"||d==="prototype")return;const p=k.hasOwnProp(u,d)?u[d]:o,y=p(e[d],t[d],d);k.isUndefined(y)&&p!==s||(n[d]=y)}),n}const Xf=e=>{const t=un({},e);let{data:n,withXSRFToken:r,xsrfHeaderName:o,xsrfCookieName:l,headers:i,auth:s}=t;if(t.headers=i=Ie.from(i),t.url=Qf(Jf(t.baseURL,t.url,t.allowAbsoluteUrls),e.params,e.paramsSerializer),s&&i.set("Authorization","Basic "+btoa((s.username||"")+":"+(s.password?unescape(encodeURIComponent(s.password)):""))),k.isFormData(n)){if(Se.hasStandardBrowserEnv||Se.hasStandardBrowserWebWorkerEnv)i.setContentType(void 0);else if(k.isFunction(n.getHeaders)){const u=n.getHeaders(),c=["content-type","content-length"];Object.entries(u).forEach(([d,p])=>{c.includes(d.toLowerCase())&&i.set(d,p)})}}if(Se.hasStandardBrowserEnv&&(r&&k.isFunction(r)&&(r=r(t)),r||r!==!1&&u1(t.url))){const u=o&&l&&c1.read(l);u&&i.set(o,u)}return t},p1=typeof XMLHttpRequest<"u",h1=p1&&function(e){return new Promise(function(n,r){const o=Xf(e);let l=o.data;const i=Ie.from(o.headers).normalize();let{responseType:s,onUploadProgress:u,onDownloadProgress:c}=o,d,p,y,S,g;function x(){S&&S(),g&&g(),o.cancelToken&&o.cancelToken.unsubscribe(d),o.signal&&o.signal.removeEventListener("abort",d)}let v=new XMLHttpRequest;v.open(o.method.toUpperCase(),o.url,!0),v.timeout=o.timeout;function h(){if(!v)return;const m=Ie.from("getAllResponseHeaders"in v&&v.getAllResponseHeaders()),N={data:!s||s==="text"||s==="json"?v.responseText:v.response,status:v.status,statusText:v.statusText,headers:m,config:e,request:v};qf(function(P){n(P),x()},function(P){r(P),x()},N),v=null}"onloadend"in v?v.onloadend=h:v.onreadystatechange=function(){!v||v.readyState!==4||v.status===0&&!(v.responseURL&&v.responseURL.indexOf("file:")===0)||setTimeout(h)},v.onabort=function(){v&&(r(new M("Request aborted",M.ECONNABORTED,e,v)),v=null)},v.onerror=function(w){const N=w&&w.message?w.message:"Network Error",_=new M(N,M.ERR_NETWORK,e,v);_.event=w||null,r(_),v=null},v.ontimeout=function(){let w=o.timeout?"timeout of "+o.timeout+"ms exceeded":"timeout exceeded";const N=o.transitional||ya;o.timeoutErrorMessage&&(w=o.timeoutErrorMessage),r(new M(w,N.clarifyTimeoutError?M.ETIMEDOUT:M.ECONNABORTED,e,v)),v=null},l===void 0&&i.setContentType(null),"setRequestHeader"in v&&k.forEach(i.toJSON(),function(w,N){v.setRequestHeader(N,w)}),k.isUndefined(o.withCredentials)||(v.withCredentials=!!o.withCredentials),s&&s!=="json"&&(v.responseType=o.responseType),c&&([y,g]=rl(c,!0),v.addEventListener("progress",y)),u&&v.upload&&([p,S]=rl(u),v.upload.addEventListener("progress",p),v.upload.addEventListener("loadend",S)),(o.cancelToken||o.signal)&&(d=m=>{v&&(r(!m||m.type?new Yr(null,e,v):m),v.abort(),v=null)},o.cancelToken&&o.cancelToken.subscribe(d),o.signal&&(o.signal.aborted?d():o.signal.addEventListener("abort",d)));const f=i1(o.url);if(f&&Se.protocols.indexOf(f)===-1){r(new M("Unsupported protocol "+f+":",M.ERR_BAD_REQUEST,e));return}v.send(l||null)})},m1=(e,t)=>{const{length:n}=e=e?e.filter(Boolean):[];if(t||n){let r=new AbortController,o;const l=function(c){if(!o){o=!0,s();const d=c instanceof Error?c:this.reason;r.abort(d instanceof M?d:new Yr(d instanceof Error?d.message:d))}};let i=t&&setTimeout(()=>{i=null,l(new M(`timeout of ${t}ms exceeded`,M.ETIMEDOUT))},t);const s=()=>{e&&(i&&clearTimeout(i),i=null,e.forEach(c=>{c.unsubscribe?c.unsubscribe(l):c.removeEventListener("abort",l)}),e=null)};e.forEach(c=>c.addEventListener("abort",l));const{signal:u}=r;return u.unsubscribe=()=>k.asap(s),u}},g1=function*(e,t){let n=e.byteLength;if(n<t){yield e;return}let r=0,o;for(;r<n;)o=r+t,yield e.slice(r,o),r=o},y1=async function*(e,t){for await(const n of x1(e))yield*g1(n,t)},x1=async function*(e){if(e[Symbol.asyncIterator]){yield*e;return}const t=e.getReader();try{for(;;){const{done:n,value:r}=await t.read();if(n)break;yield r}}finally{await t.cancel()}},Ju=(e,t,n,r)=>{const o=y1(e,t);let l=0,i,s=u=>{i||(i=!0,r&&r(u))};return new ReadableStream({async pull(u){try{const{done:c,value:d}=await o.next();if(c){s(),u.close();return}let p=d.byteLength;if(n){let y=l+=p;n(y)}u.enqueue(new Uint8Array(d))}catch(c){throw s(c),c}},cancel(u){return s(u),o.return()}},{highWaterMark:2})},Xu=64*1024,{isFunction:ho}=k,v1=(({Request:e,Response:t})=>({Request:e,Response:t}))(k.global),{ReadableStream:Gu,TextEncoder:Zu}=k.global,ec=(e,...t)=>{try{return!!e(...t)}catch{return!1}},k1=e=>{e=k.merge.call({skipUndefined:!0},v1,e);const{fetch:t,Request:n,Response:r}=e,o=t?ho(t):typeof fetch=="function",l=ho(n),i=ho(r);if(!o)return!1;const s=o&&ho(Gu),u=o&&(typeof Zu=="function"?(g=>x=>g.encode(x))(new Zu):async g=>new Uint8Array(await new n(g).arrayBuffer())),c=l&&s&&ec(()=>{let g=!1;const x=new n(Se.origin,{body:new Gu,method:"POST",get duplex(){return g=!0,"half"}}).headers.has("Content-Type");return g&&!x}),d=i&&s&&ec(()=>k.isReadableStream(new r("").body)),p={stream:d&&(g=>g.body)};o&&["text","arrayBuffer","blob","formData","stream"].forEach(g=>{!p[g]&&(p[g]=(x,v)=>{let h=x&&x[g];if(h)return h.call(x);throw new M(`Response type '${g}' is not supported`,M.ERR_NOT_SUPPORT,v)})});const y=async g=>{if(g==null)return 0;if(k.isBlob(g))return g.size;if(k.isSpecCompliantForm(g))return(await new n(Se.origin,{method:"POST",body:g}).arrayBuffer()).byteLength;if(k.isArrayBufferView(g)||k.isArrayBuffer(g))return g.byteLength;if(k.isURLSearchParams(g)&&(g=g+""),k.isString(g))return(await u(g)).byteLength},S=async(g,x)=>{const v=k.toFiniteNumber(g.getContentLength());return v??y(x)};return async g=>{let{url:x,method:v,data:h,signal:f,cancelToken:m,timeout:w,onDownloadProgress:N,onUploadProgress:_,responseType:P,headers:T,withCredentials:D="same-origin",fetchOptions:A}=Xf(g),oe=t||fetch;P=P?(P+"").toLowerCase():"text";let Q=m1([f,m&&m.toAbortSignal()],w),pe=null;const he=Q&&Q.unsubscribe&&(()=>{Q.unsubscribe()});let $e;try{if(_&&c&&v!=="get"&&v!=="head"&&($e=await S(T,h))!==0){let $=new n(x,{method:"POST",body:h,duplex:"half"}),F;if(k.isFormData(h)&&(F=$.headers.get("content-type"))&&T.setContentType(F),$.body){const[Y,ne]=Ku($e,rl(Yu(_)));h=Ju($.body,Xu,Y,ne)}}k.isString(D)||(D=D?"include":"omit");const E=l&&"credentials"in n.prototype,O={...A,signal:Q,method:v.toUpperCase(),headers:T.normalize().toJSON(),body:h,duplex:"half",credentials:E?D:void 0};pe=l&&new n(x,O);let j=await(l?oe(pe,A):oe(x,O));const z=d&&(P==="stream"||P==="response");if(d&&(N||z&&he)){const $={};["status","statusText","headers"].forEach(lt=>{$[lt]=j[lt]});const F=k.toFiniteNumber(j.headers.get("content-length")),[Y,ne]=N&&Ku(F,rl(Yu(N),!0))||[];j=new r(Ju(j.body,Xu,Y,()=>{ne&&ne(),he&&he()}),$)}P=P||"text";let I=await p[k.findKey(p,P)||"text"](j,g);return!z&&he&&he(),await new Promise(($,F)=>{qf($,F,{data:I,headers:Ie.from(j.headers),status:j.status,statusText:j.statusText,config:g,request:pe})})}catch(E){throw he&&he(),E&&E.name==="TypeError"&&/Load failed|fetch/i.test(E.message)?Object.assign(new M("Network Error",M.ERR_NETWORK,g,pe,E&&E.response),{cause:E.cause||E}):M.from(E,E&&E.code,g,pe,E&&E.response)}}},w1=new Map,Gf=e=>{let t=e&&e.env||{};const{fetch:n,Request:r,Response:o}=t,l=[r,o,n];let i=l.length,s=i,u,c,d=w1;for(;s--;)u=l[s],c=d.get(u),c===void 0&&d.set(u,c=s?new Map:k1(t)),d=c;return c};Gf();const va={http:Fg,xhr:h1,fetch:{get:Gf}};k.forEach(va,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const tc=e=>`- ${e}`,S1=e=>k.isFunction(e)||e===null||e===!1;function b1(e,t){e=k.isArray(e)?e:[e];const{length:n}=e;let r,o;const l={};for(let i=0;i<n;i++){r=e[i];let s;if(o=r,!S1(r)&&(o=va[(s=String(r)).toLowerCase()],o===void 0))throw new M(`Unknown adapter '${s}'`);if(o&&(k.isFunction(o)||(o=o.get(t))))break;l[s||"#"+i]=o}if(!o){const i=Object.entries(l).map(([u,c])=>`adapter ${u} `+(c===!1?"is not supported by the environment":"is not available in the build"));let s=n?i.length>1?`since :
`+i.map(tc).join(`
`):" "+tc(i[0]):"as no adapter specified";throw new M("There is no suitable adapter to dispatch the request "+s,"ERR_NOT_SUPPORT")}return o}const Zf={getAdapter:b1,adapters:va};function oi(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new Yr(null,e)}function nc(e){return oi(e),e.headers=Ie.from(e.headers),e.data=ri.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),Zf.getAdapter(e.adapter||Kr.adapter,e)(e).then(function(r){return oi(e),r.data=ri.call(e,e.transformResponse,r),r.headers=Ie.from(r.headers),r},function(r){return Yf(r)||(oi(e),r&&r.response&&(r.response.data=ri.call(e,e.transformResponse,r.response),r.response.headers=Ie.from(r.response.headers))),Promise.reject(r)})}const ep="1.13.6",Nl={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{Nl[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const rc={};Nl.transitional=function(t,n,r){function o(l,i){return"[Axios v"+ep+"] Transitional option '"+l+"'"+i+(r?". "+r:"")}return(l,i,s)=>{if(t===!1)throw new M(o(i," has been removed"+(n?" in "+n:"")),M.ERR_DEPRECATED);return n&&!rc[i]&&(rc[i]=!0,console.warn(o(i," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(l,i,s):!0}};Nl.spelling=function(t){return(n,r)=>(console.warn(`${r} is likely a misspelling of ${t}`),!0)};function E1(e,t,n){if(typeof e!="object")throw new M("options must be an object",M.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let o=r.length;for(;o-- >0;){const l=r[o],i=t[l];if(i){const s=e[l],u=s===void 0||i(s,l,e);if(u!==!0)throw new M("option "+l+" must be "+u,M.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new M("Unknown option "+l,M.ERR_BAD_OPTION)}}const _o={assertOptions:E1,validators:Nl},We=_o.validators;let nn=class{constructor(t){this.defaults=t||{},this.interceptors={request:new Vu,response:new Vu}}async request(t,n){try{return await this._request(t,n)}catch(r){if(r instanceof Error){let o={};Error.captureStackTrace?Error.captureStackTrace(o):o=new Error;const l=o.stack?o.stack.replace(/^.+\n/,""):"";try{r.stack?l&&!String(r.stack).endsWith(l.replace(/^.+\n.+\n/,""))&&(r.stack+=`
`+l):r.stack=l}catch{}}throw r}}_request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=un(this.defaults,n);const{transitional:r,paramsSerializer:o,headers:l}=n;r!==void 0&&_o.assertOptions(r,{silentJSONParsing:We.transitional(We.boolean),forcedJSONParsing:We.transitional(We.boolean),clarifyTimeoutError:We.transitional(We.boolean),legacyInterceptorReqResOrdering:We.transitional(We.boolean)},!1),o!=null&&(k.isFunction(o)?n.paramsSerializer={serialize:o}:_o.assertOptions(o,{encode:We.function,serialize:We.function},!0)),n.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?n.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:n.allowAbsoluteUrls=!0),_o.assertOptions(n,{baseUrl:We.spelling("baseURL"),withXsrfToken:We.spelling("withXSRFToken")},!0),n.method=(n.method||this.defaults.method||"get").toLowerCase();let i=l&&k.merge(l.common,l[n.method]);l&&k.forEach(["delete","get","head","post","put","patch","common"],g=>{delete l[g]}),n.headers=Ie.concat(i,l);const s=[];let u=!0;this.interceptors.request.forEach(function(x){if(typeof x.runWhen=="function"&&x.runWhen(n)===!1)return;u=u&&x.synchronous;const v=n.transitional||ya;v&&v.legacyInterceptorReqResOrdering?s.unshift(x.fulfilled,x.rejected):s.push(x.fulfilled,x.rejected)});const c=[];this.interceptors.response.forEach(function(x){c.push(x.fulfilled,x.rejected)});let d,p=0,y;if(!u){const g=[nc.bind(this),void 0];for(g.unshift(...s),g.push(...c),y=g.length,d=Promise.resolve(n);p<y;)d=d.then(g[p++],g[p++]);return d}y=s.length;let S=n;for(;p<y;){const g=s[p++],x=s[p++];try{S=g(S)}catch(v){x.call(this,v);break}}try{d=nc.call(this,S)}catch(g){return Promise.reject(g)}for(p=0,y=c.length;p<y;)d=d.then(c[p++],c[p++]);return d}getUri(t){t=un(this.defaults,t);const n=Jf(t.baseURL,t.url,t.allowAbsoluteUrls);return Qf(n,t.params,t.paramsSerializer)}};k.forEach(["delete","get","head","options"],function(t){nn.prototype[t]=function(n,r){return this.request(un(r||{},{method:t,url:n,data:(r||{}).data}))}});k.forEach(["post","put","patch"],function(t){function n(r){return function(l,i,s){return this.request(un(s||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:l,data:i}))}}nn.prototype[t]=n(),nn.prototype[t+"Form"]=n(!0)});let j1=class tp{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(l){n=l});const r=this;this.promise.then(o=>{if(!r._listeners)return;let l=r._listeners.length;for(;l-- >0;)r._listeners[l](o);r._listeners=null}),this.promise.then=o=>{let l;const i=new Promise(s=>{r.subscribe(s),l=s}).then(o);return i.cancel=function(){r.unsubscribe(l)},i},t(function(l,i,s){r.reason||(r.reason=new Yr(l,i,s),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}toAbortSignal(){const t=new AbortController,n=r=>{t.abort(r)};return this.subscribe(n),t.signal.unsubscribe=()=>this.unsubscribe(n),t.signal}static source(){let t;return{token:new tp(function(o){t=o}),cancel:t}}};function C1(e){return function(n){return e.apply(null,n)}}function N1(e){return k.isObject(e)&&e.isAxiosError===!0}const cs={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511,WebServerIsDown:521,ConnectionTimedOut:522,OriginIsUnreachable:523,TimeoutOccurred:524,SslHandshakeFailed:525,InvalidSslCertificate:526};Object.entries(cs).forEach(([e,t])=>{cs[t]=e});function np(e){const t=new nn(e),n=If(nn.prototype.request,t);return k.extend(n,nn.prototype,t,{allOwnKeys:!0}),k.extend(n,t,null,{allOwnKeys:!0}),n.create=function(o){return np(un(e,o))},n}const se=np(Kr);se.Axios=nn;se.CanceledError=Yr;se.CancelToken=j1;se.isCancel=Yf;se.VERSION=ep;se.toFormData=Cl;se.AxiosError=M;se.Cancel=se.CanceledError;se.all=function(t){return Promise.all(t)};se.spread=C1;se.isAxiosError=N1;se.mergeConfig=un;se.AxiosHeaders=Ie;se.formToJSON=e=>Kf(k.isHTMLForm(e)?new FormData(e):e);se.getAdapter=Zf.getAdapter;se.HttpStatusCode=cs;se.default=se;const{Axios:ux,AxiosError:cx,CanceledError:dx,isCancel:fx,CancelToken:px,VERSION:hx,all:mx,Cancel:gx,isAxiosError:yx,spread:xx,toFormData:vx,AxiosHeaders:kx,HttpStatusCode:wx,formToJSON:Sx,getAdapter:bx,mergeConfig:Ex}=se,xe=se.create({baseURL:void 0,headers:{"Content-Type":"application/json"}});xe.interceptors.request.use(e=>{const t=localStorage.getItem("token");return t&&(e.headers.Authorization=`Bearer ${t}`),e});xe.interceptors.response.use(e=>e,e=>{var t;return((t=e.response)==null?void 0:t.status)===401&&(localStorage.removeItem("token"),localStorage.removeItem("user"),window.location.pathname!=="/login"&&(window.location.href="/login")),Promise.reject(e)});const R1=e=>xe.post("/auth/signup",e),_1=e=>xe.post("/auth/login",e),rp=()=>xe.get("/slots"),P1=(e,t)=>xe.post("/slots/book",{slotId:e,durationMinutes:t}),ka=e=>xe.post("/slots/unbook",{slotId:e}),T1=()=>xe.get("/slots/my-booking"),z1=()=>xe.post("/slots/expire-check"),op=(e,t)=>xe.patch("/slots/extend",{slotId:e,additionalMinutes:t}),O1=e=>xe.post("/admin/slot",{slotNumber:e}),L1=(e,t)=>xe.patch(`/admin/slot/${e}`,t),I1=e=>xe.delete(`/admin/slot/${e}`),M1=()=>xe.get("/admin/bookings"),A1=()=>xe.get("/admin/stats"),F1=()=>xe.get("/admin/users"),oc=e=>xe.post("/admin/promote-user",{email:e}),D1=`
  @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;600;700;800&family=IBM+Plex+Mono:wght@400;500&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(16px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes spin {
    to { transform: rotate(360deg); }
  }

  .ps-root {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #0d0d0d;
    font-family: 'Sora', sans-serif;
    color: #f0ede8;
    padding: 24px;
  }

  .ps-card {
    width: 100%;
    max-width: 420px;
    display: flex;
    flex-direction: column;
    gap: 32px;
  }

  .ps-logo {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .ps-logo-icon {
    width: 32px;
    height: 32px;
    background: #d4a847;
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  .ps-logo-text {
    font-size: 14px;
    font-weight: 700;
    letter-spacing: -0.02em;
    color: #f0ede8;
    line-height: 1.3;
  }

  .ps-header {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .ps-header h1 {
    font-size: 28px;
    font-weight: 800;
    letter-spacing: -0.03em;
    color: #f0ede8;
    line-height: 1.1;
  }

  .ps-header p {
    font-size: 13px;
    color: #575757;
    line-height: 1.6;
  }

  .ps-form {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .ps-field {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .ps-field-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .ps-label {
    font-size: 11px;
    font-weight: 500;
    font-family: 'IBM Plex Mono', monospace;
    color: #919191;
    letter-spacing: 0.06em;
    text-transform: uppercase;
  }

  .ps-forgot {
    font-size: 11px;
    font-family: 'IBM Plex Mono', monospace;
    color: #3a3a3a;
    text-decoration: none;
    transition: color 0.15s;
  }
  .ps-forgot:hover { color: #d4a847; }

  .ps-input-wrap {
    position: relative;
  }

  .ps-input {
    width: 100%;
    padding: 13px 16px;
    background: #141414;
    border: 1px solid #2e2e2e;
    border-radius: 8px;
    color: #f0ede8;
    font-family: 'Sora', sans-serif;
    font-size: 14px;
    outline: none;
    transition: border-color 0.2s, box-shadow 0.2s;
    caret-color: #d4a847;
  }
  .ps-input::placeholder { color: #3a3a3a; }
  .ps-input:focus {
    border-color: #d4a847;
    box-shadow: 0 0 0 3px rgba(212,168,71,0.08);
  }
  .ps-input--padded { padding-right: 46px; }

  .ps-toggle-pass {
    position: absolute;
    right: 14px;
    top: 50%;
    transform: translateY(-50%);
    background: none;
    border: none;
    cursor: pointer;
    color: #4a4a4a;
    padding: 4px;
    display: flex;
    align-items: center;
    line-height: 0;
    transition: color 0.15s;
  }
  .ps-toggle-pass:hover { color: #d4a847; }

  .ps-btn {
    width: 100%;
    padding: 14px;
    background: #d4a847;
    border: none;
    border-radius: 8px;
    color: #0d0d0d;
    font-family: 'Sora', sans-serif;
    font-size: 14px;
    font-weight: 700;
    letter-spacing: 0.04em;
    cursor: pointer;
    transition: background 0.2s, transform 0.15s, opacity 0.2s;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    margin-top: 8px;
  }
  .ps-btn:hover:not(:disabled) { background: #e0b856; transform: translateY(-1px); }
  .ps-btn:active:not(:disabled) { transform: translateY(0); }
  .ps-btn:disabled { opacity: 0.5; cursor: not-allowed; }

  .ps-footer {
    text-align: center;
    font-size: 13px;
    color: #4a4a4a;
  }

  .ps-link {
    color: #d4a847;
    font-weight: 600;
    text-decoration: none;
    transition: opacity 0.15s;
  }
  .ps-link:hover { opacity: 0.75; text-decoration: underline; }

  /* Staggered entrance */
  .fade-1 { animation: fadeUp 0.45s ease both 0.05s; }
  .fade-2 { animation: fadeUp 0.45s ease both 0.12s; }
  .fade-3 { animation: fadeUp 0.45s ease both 0.19s; }
  .fade-4 { animation: fadeUp 0.45s ease both 0.26s; }
  .fade-5 { animation: fadeUp 0.45s ease both 0.33s; }
  .fade-6 { animation: fadeUp 0.45s ease both 0.40s; }
`,B1=()=>a.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",children:[a.jsx("path",{d:"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"}),a.jsx("circle",{cx:"12",cy:"12",r:"3"})]}),U1=()=>a.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",children:[a.jsx("path",{d:"M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"}),a.jsx("path",{d:"M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"}),a.jsx("line",{x1:"1",y1:"1",x2:"23",y2:"23"})]}),$1=()=>a.jsx("span",{style:{width:15,height:15,borderRadius:"50%",border:"2px solid rgba(13,13,13,0.25)",borderTopColor:"#0d0d0d",animation:"spin 0.65s linear infinite",display:"inline-block",flexShrink:0}});function W1(){const e=Wr(),[t,n]=b.useState({email:"",password:""}),[r,o]=b.useState(!1),[l,i]=b.useState(!1),s=c=>n({...t,[c.target.name]:c.target.value}),u=async c=>{var d,p;if(c.preventDefault(),!t.email||!t.password){B.error("Please enter your credentials.");return}o(!0);try{const y=await _1(t),{token:S,user:g}=y.data.data;H0(S,g),B.success(`Welcome back, ${g.name.split(" ")[0]}.`),e(g.role==="admin"?"/admin":"/dashboard")}catch(y){B.error(((p=(d=y.response)==null?void 0:d.data)==null?void 0:p.message)||"Invalid credentials. Try again.")}finally{o(!1)}};return a.jsxs(a.Fragment,{children:[a.jsx("style",{children:D1}),a.jsx("div",{className:"ps-root",children:a.jsxs("div",{className:"ps-card",children:[a.jsxs("div",{className:"ps-logo fade-1",children:[a.jsx("div",{className:"ps-logo-icon",children:a.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"#0d0d0d",children:a.jsx("path",{d:"M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"})})}),a.jsx("span",{className:"ps-logo-text",children:"IoT Based · Smart Parking"})]}),a.jsxs("div",{className:"ps-header fade-2",children:[a.jsx("h1",{children:"Sign in"}),a.jsx("p",{children:"Enter your details to book a parking slot."})]}),a.jsxs("form",{className:"ps-form",onSubmit:u,children:[a.jsxs("div",{className:"ps-field fade-3",children:[a.jsx("label",{className:"ps-label",children:"Email Address"}),a.jsx("div",{className:"ps-input-wrap",children:a.jsx("input",{className:"ps-input",name:"email",type:"email",placeholder:"you@company.com",value:t.email,onChange:s,autoComplete:"email"})})]}),a.jsxs("div",{className:"ps-field fade-4",children:[a.jsxs("div",{className:"ps-field-header",children:[a.jsx("label",{className:"ps-label",children:"Password"}),a.jsx("a",{href:"#",className:"ps-forgot",children:"Forgot?"})]}),a.jsxs("div",{className:"ps-input-wrap",children:[a.jsx("input",{className:"ps-input ps-input--padded",name:"password",type:l?"text":"password",placeholder:"••••••••",value:t.password,onChange:s,autoComplete:"current-password"}),a.jsx("button",{type:"button",className:"ps-toggle-pass",onClick:()=>i(!l),tabIndex:-1,"aria-label":l?"Hide password":"Show password",children:l?a.jsx(U1,{}):a.jsx(B1,{})})]})]}),a.jsx("button",{type:"submit",className:"ps-btn fade-5",disabled:r,children:r?a.jsxs(a.Fragment,{children:[a.jsx($1,{})," Signing in…"]}):"Sign In"})]}),a.jsxs("p",{className:"ps-footer fade-6",children:["No account? ",a.jsx(yr,{to:"/signup",className:"ps-link",children:"Create one"})]})]})})]})}const H1=`
  @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700;800&family=IBM+Plex+Mono:wght@400;500;600&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(16px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes spin {
    to { transform: rotate(360deg); }
  }

  .sp-root {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #0d0d0d;
    font-family: 'Sora', sans-serif;
    color: #f0ede8;
    padding: 24px;
  }

  .sp-card {
    width: 100%;
    max-width: 420px;
    display: flex;
    flex-direction: column;
    gap: 32px;
  }

  /* Logo */
  .sp-logo {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .sp-logo-icon {
    width: 32px;
    height: 32px;
    background: #d4a847;
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  .sp-logo-text {
    font-size: 14px;
    font-weight: 700;
    letter-spacing: -0.02em;
    color: #f0ede8;
  }

  /* Header */
  .sp-header {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .sp-header h1 {
    font-size: 28px;
    font-weight: 800;
    letter-spacing: -0.03em;
    color: #f0ede8;
    line-height: 1.1;
  }

  .sp-header p {
    font-size: 13px;
    color: #575757;
    line-height: 1.6;
  }

  /* Form */
  .sp-form {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .sp-field {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .sp-label {
    font-size: 11px;
    font-weight: 500;
    font-family: 'IBM Plex Mono', monospace;
    color: #919191;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    transition: color 0.15s;
  }

  .sp-label.active { color: #d4a847; }

  .sp-input-wrap {
    position: relative;
  }

  .sp-input {
    width: 100%;
    padding: 13px 16px;
    background: #141414;
    border: 1px solid #2e2e2e;
    border-radius: 8px;
    color: #f0ede8;
    font-family: 'Sora', sans-serif;
    font-size: 14px;
    outline: none;
    transition: border-color 0.2s, box-shadow 0.2s;
    caret-color: #d4a847;
    -webkit-appearance: none;
  }
  .sp-input::placeholder { color: #3a3a3a; }
  .sp-input:focus {
    border-color: #d4a847;
    box-shadow: 0 0 0 3px rgba(212,168,71,0.08);
  }
  .sp-input--padded { padding-right: 46px; }

  .sp-toggle-pass {
    position: absolute;
    right: 14px;
    top: 50%;
    transform: translateY(-50%);
    background: none;
    border: none;
    cursor: pointer;
    color: #4a4a4a;
    padding: 4px;
    display: flex;
    align-items: center;
    line-height: 0;
    transition: color 0.15s;
  }
  .sp-toggle-pass:hover { color: #d4a847; }

  /* Admin note */
  .sp-notice {
    padding: 13px 15px;
    background: rgba(212,168,71,0.06);
    border: 1px solid rgba(212,168,71,0.18);
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .sp-notice-label {
    font-family: 'IBM Plex Mono', monospace;
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: #d4a847;
  }

  .sp-notice-text {
    font-size: 12px;
    color: #6a6a6a;
    line-height: 1.55;
  }

  /* Button */
  .sp-btn {
    width: 100%;
    padding: 14px;
    background: #d4a847;
    border: none;
    border-radius: 8px;
    color: #0d0d0d;
    font-family: 'Sora', sans-serif;
    font-size: 14px;
    font-weight: 700;
    letter-spacing: 0.04em;
    cursor: pointer;
    transition: background 0.2s, transform 0.15s, opacity 0.2s;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    margin-top: 4px;
  }
  .sp-btn:hover:not(:disabled) { background: #e0b856; transform: translateY(-1px); }
  .sp-btn:active:not(:disabled) { transform: translateY(0); }
  .sp-btn:disabled { opacity: 0.5; cursor: not-allowed; }

  /* Footer */
  .sp-footer {
    text-align: center;
    font-size: 13px;
    color: #4a4a4a;
  }

  .sp-link {
    color: #d4a847;
    font-weight: 600;
    text-decoration: none;
    transition: opacity 0.15s;
  }
  .sp-link:hover { opacity: 0.75; text-decoration: underline; }

  /* Spinner */
  .sp-spinner {
    width: 15px;
    height: 15px;
    border-radius: 50%;
    border: 2px solid rgba(13,13,13,0.25);
    border-top-color: #0d0d0d;
    animation: spin 0.65s linear infinite;
    display: inline-block;
    flex-shrink: 0;
  }

  /* Staggered entrance */
  .fade-1 { animation: fadeUp 0.45s ease both 0.05s; }
  .fade-2 { animation: fadeUp 0.45s ease both 0.12s; }
  .fade-3 { animation: fadeUp 0.45s ease both 0.19s; }
  .fade-4 { animation: fadeUp 0.45s ease both 0.26s; }
  .fade-5 { animation: fadeUp 0.45s ease both 0.33s; }
  .fade-6 { animation: fadeUp 0.45s ease both 0.40s; }
`,V1=()=>a.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",children:[a.jsx("path",{d:"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"}),a.jsx("circle",{cx:"12",cy:"12",r:"3"})]}),Q1=()=>a.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",children:[a.jsx("path",{d:"M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"}),a.jsx("path",{d:"M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"}),a.jsx("line",{x1:"1",y1:"1",x2:"23",y2:"23"})]}),K1=()=>a.jsxs("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.2",strokeLinecap:"round",strokeLinejoin:"round",children:[a.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"}),a.jsx("polyline",{points:"12 5 19 12 12 19"})]});function Y1(){const e=Wr(),[t,n]=b.useState({name:"",email:"",password:""}),[r,o]=b.useState(!1),[l,i]=b.useState(!1),[s,u]=b.useState(null),c=p=>n({...t,[p.target.name]:p.target.value}),d=async p=>{var y,S;if(p.preventDefault(),!t.name||!t.email||!t.password){B.error("Please fill in all fields.");return}o(!0);try{await R1(t),B.success("Account created! Please log in."),e("/login")}catch(g){B.error(((S=(y=g.response)==null?void 0:y.data)==null?void 0:S.message)||"Signup failed. Try again.")}finally{o(!1)}};return a.jsxs(a.Fragment,{children:[a.jsx("style",{children:H1}),a.jsx("div",{className:"sp-root",children:a.jsxs("div",{className:"sp-card",children:[a.jsxs("div",{className:"sp-logo fade-1",children:[a.jsx("div",{className:"sp-logo-icon",children:a.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"#0d0d0d",children:a.jsx("path",{d:"M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"})})}),a.jsx("span",{className:"sp-logo-text",children:"IoT Based · Smart Parking"})]}),a.jsxs("div",{className:"sp-header fade-2",children:[a.jsx("h1",{children:"Create account"}),a.jsx("p",{children:"Sign up to access booking parking slots."})]}),a.jsxs("form",{className:"sp-form",onSubmit:d,children:[a.jsxs("div",{className:"sp-field fade-3",children:[a.jsx("label",{className:`sp-label${s==="name"?" active":""}`,children:"Full Name"}),a.jsx("div",{className:"sp-input-wrap",children:a.jsx("input",{className:"sp-input",name:"name",placeholder:"John Doe",value:t.name,onChange:c,onFocus:()=>u("name"),onBlur:()=>u(null),autoComplete:"name"})})]}),a.jsxs("div",{className:"sp-field fade-4",children:[a.jsx("label",{className:`sp-label${s==="email"?" active":""}`,children:"Email Address"}),a.jsx("div",{className:"sp-input-wrap",children:a.jsx("input",{className:"sp-input",name:"email",type:"email",placeholder:"you@company.com",value:t.email,onChange:c,onFocus:()=>u("email"),onBlur:()=>u(null),autoComplete:"email"})})]}),a.jsxs("div",{className:"sp-field fade-5",children:[a.jsx("label",{className:`sp-label${s==="password"?" active":""}`,children:"Password"}),a.jsxs("div",{className:"sp-input-wrap",children:[a.jsx("input",{className:"sp-input sp-input--padded",name:"password",type:l?"text":"password",placeholder:"Min. 8 characters",value:t.password,onChange:c,onFocus:()=>u("password"),onBlur:()=>u(null),autoComplete:"new-password"}),a.jsx("button",{type:"button",className:"sp-toggle-pass",onClick:()=>i(!l),tabIndex:-1,"aria-label":l?"Hide password":"Show password",children:l?a.jsx(Q1,{}):a.jsx(V1,{})})]})]}),a.jsx("button",{type:"submit",className:"sp-btn fade-6",disabled:r,children:r?a.jsxs(a.Fragment,{children:[a.jsx("span",{className:"sp-spinner"})," Creating account…"]}):a.jsxs(a.Fragment,{children:["Create Account ",a.jsx(K1,{})]})})]}),a.jsxs("p",{className:"sp-footer fade-6",children:["Already have an account? ",a.jsx(yr,{to:"/login",className:"sp-link",children:"Sign in"})]})]})})]})}/**
 * @license lucide-react v1.6.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lp=(...e)=>e.filter((t,n,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===n).join(" ").trim();/**
 * @license lucide-react v1.6.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q1=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v1.6.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J1=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,n,r)=>r?r.toUpperCase():n.toLowerCase());/**
 * @license lucide-react v1.6.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lc=e=>{const t=J1(e);return t.charAt(0).toUpperCase()+t.slice(1)};/**
 * @license lucide-react v1.6.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var li={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v1.6.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X1=e=>{for(const t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0;return!1},G1=b.createContext({}),Z1=()=>b.useContext(G1),ey=b.forwardRef(({color:e,size:t,strokeWidth:n,absoluteStrokeWidth:r,className:o="",children:l,iconNode:i,...s},u)=>{const{size:c=24,strokeWidth:d=2,absoluteStrokeWidth:p=!1,color:y="currentColor",className:S=""}=Z1()??{},g=r??p?Number(n??d)*24/Number(t??c):n??d;return b.createElement("svg",{ref:u,...li,width:t??c??li.width,height:t??c??li.height,stroke:e??y,strokeWidth:g,className:lp("lucide",S,o),...!l&&!X1(s)&&{"aria-hidden":"true"},...s},[...i.map(([x,v])=>b.createElement(x,v)),...Array.isArray(l)?l:[l]])});/**
 * @license lucide-react v1.6.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H=(e,t)=>{const n=b.forwardRef(({className:r,...o},l)=>b.createElement(ey,{ref:l,iconNode:t,className:lp(`lucide-${q1(lc(e))}`,`lucide-${e}`,r),...o}));return n.displayName=lc(e),n};/**
 * @license lucide-react v1.6.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ty=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M4.929 4.929 19.07 19.071",key:"196cmz"}]],ic=H("ban",ty);/**
 * @license lucide-react v1.6.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ny=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],ry=H("calendar",ny);/**
 * @license lucide-react v1.6.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oy=[["path",{d:"M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2",key:"5owen"}],["circle",{cx:"7",cy:"17",r:"2",key:"u2ysq9"}],["path",{d:"M9 17h6",key:"r8uit2"}],["circle",{cx:"17",cy:"17",r:"2",key:"axvx0g"}]],ip=H("car",oy);/**
 * @license lucide-react v1.6.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ly=[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]],iy=H("chart-column",ly);/**
 * @license lucide-react v1.6.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sy=[["path",{d:"M5 21v-6",key:"1hz6c0"}],["path",{d:"M12 21V3",key:"1lcnhd"}],["path",{d:"M19 21V9",key:"unv183"}]],ay=H("chart-no-axes-column",sy);/**
 * @license lucide-react v1.6.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uy=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],cy=H("chevron-down",uy);/**
 * @license lucide-react v1.6.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dy=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],sp=H("chevron-up",dy);/**
 * @license lucide-react v1.6.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fy=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],ds=H("circle-check-big",fy);/**
 * @license lucide-react v1.6.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const py=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],ap=H("circle-check",py);/**
 * @license lucide-react v1.6.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hy=[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"M12 11h4",key:"1jrz19"}],["path",{d:"M12 16h4",key:"n85exb"}],["path",{d:"M8 11h.01",key:"1dfujw"}],["path",{d:"M8 16h.01",key:"18s6g9"}]],ii=H("clipboard-list",hy);/**
 * @license lucide-react v1.6.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const my=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 6v6l4 2",key:"mmk7yg"}]],Po=H("clock",my);/**
 * @license lucide-react v1.6.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gy=[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]],yy=H("layout-dashboard",gy);/**
 * @license lucide-react v1.6.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xy=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],vy=H("loader-circle",xy);/**
 * @license lucide-react v1.6.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ky=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],sc=H("lock",ky);/**
 * @license lucide-react v1.6.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wy=[["path",{d:"m16 17 5-5-5-5",key:"1bji2h"}],["path",{d:"M21 12H9",key:"dn1m92"}],["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}]],wa=H("log-out",wy);/**
 * @license lucide-react v1.6.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sy=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],up=H("map-pin",Sy);/**
 * @license lucide-react v1.6.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const by=[["path",{d:"M13 21h8",key:"1jsn5i"}],["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}]],Ey=H("pen-line",by);/**
 * @license lucide-react v1.6.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jy=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],Sa=H("plus",jy);/**
 * @license lucide-react v1.6.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cy=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]],Ny=H("refresh-cw",Cy);/**
 * @license lucide-react v1.6.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ry=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]],_y=H("rotate-ccw",Ry);/**
 * @license lucide-react v1.6.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Py=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],Ty=H("shield-check",Py);/**
 * @license lucide-react v1.6.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zy=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]],Oy=H("shield",zy);/**
 * @license lucide-react v1.6.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ly=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 17V7h4a3 3 0 0 1 0 6H9",key:"1dfk2c"}]],To=H("square-parking",Ly);/**
 * @license lucide-react v1.6.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iy=[["path",{d:"M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z",key:"qn84l0"}],["path",{d:"M13 5v2",key:"dyzc3o"}],["path",{d:"M13 17v2",key:"1ont0d"}],["path",{d:"M13 11v2",key:"1wjjxi"}]],fs=H("ticket",Iy);/**
 * @license lucide-react v1.6.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const My=[["line",{x1:"10",x2:"14",y1:"2",y2:"2",key:"14vaq8"}],["line",{x1:"12",x2:"15",y1:"14",y2:"11",key:"17fdiu"}],["circle",{cx:"12",cy:"14",r:"8",key:"1e1u0o"}]],Ay=H("timer",My);/**
 * @license lucide-react v1.6.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fy=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],Dy=H("trash-2",Fy);/**
 * @license lucide-react v1.6.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const By=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],ol=H("triangle-alert",By);/**
 * @license lucide-react v1.6.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uy=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],si=H("users",Uy);/**
 * @license lucide-react v1.6.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $y=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Wy=H("x",$y);/**
 * @license lucide-react v1.6.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hy=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],cp=H("zap",Hy);function dp(){var l,i,s;const e=Wr(),t=fa(),n=pa(),r=n==="admin",o=()=>{Q0(),e("/login")};return a.jsxs(a.Fragment,{children:[a.jsx("style",{children:`
        .nav-link {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 6px 10px;
          border-radius: 7px;
          font-size: 13px;
          font-weight: 600;
          color: #6a6a6a;
          text-decoration: none;
          transition: color 0.15s, background 0.15s;
          white-space: nowrap;
        }
        .nav-link:hover {
          color: #f0ede8;
          background: rgba(255,255,255,0.05);
        }
        .nav-logout {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 6px 10px;
          border-radius: 7px;
          font-size: 13px;
          font-weight: 600;
          color: #6a6a6a;
          background: transparent;
          border: none;
          cursor: pointer;
          transition: color 0.15s, background 0.15s;
          white-space: nowrap;
          font-family: inherit;
        }
        .nav-logout:hover {
          color: #f0ede8;
          background: rgba(255,255,255,0.05);
        }
        /* Hide nav text labels on small screens, show only icons */
        @media (max-width: 520px) {
          .nav-label { display: none; }
          .nav-link, .nav-logout { padding: 6px 8px; }
          .user-name { display: none; }
          .nav-divider { display: none; }
        }
      `}),a.jsxs("nav",{style:{position:"sticky",top:0,zIndex:50,height:56,display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0 16px",background:"#0d0d0d",borderBottom:"1px solid rgba(255,255,255,0.06)",gap:8,minWidth:0},children:[a.jsxs(yr,{to:r?"/admin":"/dashboard",style:{display:"flex",alignItems:"center",gap:8,textDecoration:"none",flexShrink:0},children:[a.jsx("div",{style:{width:30,height:30,borderRadius:7,background:"#d4a847",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:a.jsx(up,{size:14,color:"#0d0d0d",strokeWidth:2.5})}),a.jsx("span",{style:{fontSize:13,fontWeight:700,letterSpacing:"-0.02em",color:"#f0ede8",lineHeight:1.2,whiteSpace:"nowrap"},className:"nav-label",children:"IoT Based · Smart Parking"})]}),a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:2,minWidth:0,flexShrink:0},children:[r&&a.jsxs(yr,{to:"/admin",className:"nav-link",children:[a.jsx(Ty,{size:14,strokeWidth:2}),a.jsx("span",{className:"nav-label",children:"Admin Panel"})]}),a.jsxs(yr,{to:"/dashboard",className:"nav-link",children:[a.jsx(yy,{size:14,strokeWidth:2}),a.jsx("span",{className:"nav-label",children:"Slots"})]}),a.jsx("div",{className:"nav-divider",style:{width:1,height:18,background:"rgba(255,255,255,0.08)",margin:"0 4px"}}),a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6,padding:"5px 10px",borderRadius:7,background:"rgba(255,255,255,0.04)",border:"1px solid rgba(255,255,255,0.06)",flexShrink:0},children:[a.jsx("div",{style:{width:22,height:22,borderRadius:"50%",background:"#d4a847",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:a.jsx("span",{style:{fontSize:10,fontWeight:700,color:"#0d0d0d"},children:((i=(l=t==null?void 0:t.name)==null?void 0:l[0])==null?void 0:i.toUpperCase())||"U"})}),a.jsx("span",{className:"user-name",style:{fontSize:13,fontWeight:600,color:"#c4bfb5",whiteSpace:"nowrap"},children:(s=t==null?void 0:t.name)==null?void 0:s.split(" ")[0]}),a.jsx("span",{style:{fontSize:9,fontWeight:700,letterSpacing:"0.08em",textTransform:"uppercase",padding:"2px 7px",borderRadius:999,...r?{background:"rgba(212,168,71,0.15)",color:"#d4a847",border:"1px solid rgba(212,168,71,0.25)"}:{background:"rgba(255,255,255,0.06)",color:"#6a6a6a",border:"1px solid rgba(255,255,255,0.08)"}},children:n})]}),a.jsxs("button",{onClick:o,className:"nav-logout",children:[a.jsx(wa,{size:14,strokeWidth:2}),a.jsx("span",{className:"nav-label",children:"Logout"})]})]})]})]})}const Vy=[{label:"30 min",minutes:30,Icon:cp},{label:"1 hour",minutes:60,Icon:Po},{label:"2 hours",minutes:120,Icon:Po},{label:"4 hours",minutes:240,Icon:Po},{label:"8 hours",minutes:480,Icon:ry},{label:"Custom",minutes:null,Icon:Ey}];function Qy({slot:e,onClose:t,onBooked:n}){const[r,o]=b.useState(60),[l,i]=b.useState(""),[s,u]=b.useState(!1),[c,d]=b.useState(!1),p=s?parseInt(l)||0:r,y=p>0?new Date(Date.now()+p*60*1e3):null,S=h=>h?h.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})+", "+h.toLocaleDateString([],{month:"short",day:"numeric"}):"—",g=h=>{if(!h)return"—";if(h<60)return`${h} min`;const f=Math.floor(h/60),m=h%60;return m>0?`${f}h ${m}m`:`${f} hour${f>1?"s":""}`},x=async()=>{var f,m;const h=p;if(!h||h<15){B.error("Minimum booking duration is 15 minutes.");return}if(h>1440){B.error("Maximum booking duration is 24 hours.");return}d(!0);try{const w=await P1(e.id,h);B.success(`Slot ${e.slotNumber} booked for ${g(h)}! 🎉`),n==null||n(w.data.data),t()}catch(w){B.error(((m=(f=w.response)==null?void 0:f.data)==null?void 0:m.message)||"Booking failed.")}finally{d(!1)}},v=c||p<15;return a.jsxs("div",{style:{position:"fixed",inset:0,zIndex:2e3,background:"rgba(0,0,0,0.78)",backdropFilter:"blur(6px)",display:"flex",alignItems:"center",justifyContent:"center",padding:16},onClick:h=>h.target===h.currentTarget&&t(),children:[a.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700;800&family=IBM+Plex+Mono:wght@400;500&display=swap');
        .bm * { box-sizing: border-box; }
        .bm { font-family: 'Sora', sans-serif; }
        .mono { font-family: 'IBM Plex Mono', monospace; }
        @keyframes bmIn { from { opacity:0; transform:translateY(14px) scale(0.98); } to { opacity:1; transform:translateY(0) scale(1); } }
        .bm-panel { animation: bmIn 0.32s cubic-bezier(0.16,1,0.3,1) both; }
        .dur-pill { transition: border-color 0.13s, background 0.13s; }
        .dur-pill:hover:not(.dp-on) { border-color: rgba(212,168,71,0.45) !important; }
        .xbtn:hover { background: rgba(255,255,255,0.09) !important; }
        .cbtn { transition: opacity 0.13s, transform 0.09s; }
        .cbtn:hover:not([disabled]) { opacity: 0.86; }
        .cbtn:active:not([disabled]) { transform: scale(0.982); }
        .cinput:focus { outline: none; border-color: #d4a847 !important; }
        input[type=number]::-webkit-inner-spin-button,
        input[type=number]::-webkit-outer-spin-button { -webkit-appearance:none; margin:0; }
        @keyframes spin { to { transform:rotate(360deg); } }
      `}),a.jsxs("div",{className:"bm bm-panel",style:{width:"100%",maxWidth:380,background:"#0d0d0d",border:"1px solid #222",borderRadius:18,overflow:"hidden"},children:[a.jsxs("div",{style:{padding:"18px 20px 14px",borderBottom:"1px solid #1a1a1a",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10},children:[a.jsx("div",{style:{width:34,height:34,borderRadius:9,background:"#141414",border:"1px solid #252525",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:a.jsx(up,{size:14,strokeWidth:1.5,color:"#d4a847"})}),a.jsxs("div",{children:[a.jsx("p",{className:"mono",style:{margin:0,fontSize:9,color:"#444",letterSpacing:"0.11em"},children:"PARKING RESERVATION"}),a.jsxs("p",{style:{margin:0,fontSize:18,fontWeight:800,color:"#f2f2f2",letterSpacing:"-0.025em",lineHeight:1.15},children:["Slot ",e.slotNumber]})]})]}),a.jsx("button",{className:"xbtn",onClick:t,style:{width:30,height:30,borderRadius:"50%",background:"transparent",border:"1px solid #252525",color:"#555",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:a.jsx(Wy,{size:13,strokeWidth:2})})]}),a.jsxs("div",{style:{padding:"16px 20px 20px"},children:[a.jsx("p",{className:"mono",style:{margin:"0 0 9px",fontSize:9,color:"#444",letterSpacing:"0.11em"},children:"DURATION"}),a.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:7,marginBottom:14},children:Vy.map(({label:h,minutes:f,Icon:m})=>{const w=f===null,N=w?s:!s&&r===f;return a.jsxs("button",{className:`dur-pill${N?" dp-on":""}`,onClick:()=>{w?u(!0):(u(!1),o(f))},style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:5,padding:"9px 4px",borderRadius:9,border:`1px solid ${N?"#d4a847":"#1e1e1e"}`,background:N?"rgba(212,168,71,0.07)":"#111",cursor:"pointer"},children:[a.jsx(m,{size:13,strokeWidth:1.5,color:N?"#d4a847":"#383838"}),a.jsx("span",{className:"mono",style:{fontSize:10,letterSpacing:"0.02em",color:N?"#d4a847":"#484848",fontWeight:N?500:400,whiteSpace:"nowrap"},children:h})]},h)})}),s&&a.jsxs("div",{style:{marginBottom:14},children:[a.jsx("p",{className:"mono",style:{margin:"0 0 7px",fontSize:9,color:"#444",letterSpacing:"0.11em"},children:"MINUTES · 15–1440"}),a.jsxs("div",{style:{display:"flex",gap:10,alignItems:"center"},children:[a.jsx("input",{type:"number",min:"15",max:"1440",value:l,onChange:h=>i(h.target.value),placeholder:"e.g. 90",autoFocus:!0,className:"cinput mono",style:{flex:1,background:"#111",border:"1px solid #252525",borderRadius:8,padding:"9px 12px",color:"#f0f0f0",fontSize:14,fontWeight:500}}),a.jsxs("span",{className:"mono",style:{fontSize:11,color:"#555",whiteSpace:"nowrap"},children:["= ",g(parseInt(l)||0)]})]}),a.jsx("p",{className:"mono",style:{margin:"5px 0 0",fontSize:9,color:"#333"},children:"Min 15 min · Max 24 hours (1440 min)"})]}),a.jsx("div",{style:{background:"#111",border:"1px solid #1a1a1a",borderRadius:11,padding:"12px 14px",marginBottom:14},children:a.jsx("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",rowGap:12},children:[{label:"SLOT",value:e.slotNumber,amber:!1},{label:"DURATION",value:g(p),amber:!1},{label:"START",value:new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}),amber:!1},{label:"EXPIRES",value:S(y),amber:!0}].map(({label:h,value:f,amber:m})=>a.jsxs("div",{children:[a.jsx("p",{className:"mono",style:{margin:"0 0 3px",fontSize:8,color:"#333",letterSpacing:"0.12em"},children:h}),a.jsx("p",{className:"mono",style:{margin:0,fontSize:12,fontWeight:500,color:m?"#d4a847":"#b8b8b8",letterSpacing:"0.01em"},children:f})]},h))})}),a.jsx("button",{className:"cbtn",onClick:x,disabled:v,style:{width:"100%",display:"flex",alignItems:"center",justifyContent:"center",gap:8,padding:"13px 16px",borderRadius:11,border:"none",background:v?"#151515":"#d4a847",color:v?"#2a2a2a":"#0d0d0d",fontFamily:"'Sora', sans-serif",fontWeight:700,fontSize:13,letterSpacing:"-0.01em",cursor:v?"not-allowed":"pointer"},children:c?a.jsxs(a.Fragment,{children:[a.jsx(vy,{size:14,strokeWidth:2,style:{animation:"spin 0.8s linear infinite"}}),a.jsx("span",{children:"Confirming..."})]}):a.jsxs(a.Fragment,{children:[a.jsx(ds,{size:14,strokeWidth:2}),a.jsxs("span",{children:["Confirm Booking · ",g(p)]})]})})]})]})]})}const Ky=`
  @keyframes spin { to { transform: rotate(360deg); } }
  @keyframes pulse-dot { 0%,100% { opacity:1; } 50% { opacity:0.3; } }

  .sc-card {
    position: relative;
    border-radius: 12px;
    border: 1px solid;
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    font-family: 'Sora', sans-serif;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
    overflow: hidden;
  }
  .sc-card:hover { transform: translateY(-2px); }

  .sc-card-free {
    background: #141414;
    border-color: rgba(255,255,255,0.08);
  }
  .sc-card-free:hover { border-color: rgba(255,255,255,0.14); }

  .sc-card-mine {
    background: #141414;
    border-color: rgba(212,168,71,0.3);
  }

  .sc-card-taken {
    background: #111;
    border-color: rgba(255,255,255,0.04);
  }

  .sc-card-blocked {
    background: #111;
    border-color: rgba(255,255,255,0.04);
  }

  /* Ribbon */
  .sc-ribbon {
    position: absolute;
    top: 12px;
    right: -22px;
    width: 88px;
    background: #d4a847;
    color: #0d0d0d;
    font-size: 9px;
    font-weight: 900;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    padding: 3px 0;
    text-align: center;
    transform: rotate(35deg);
  }

  /* Header row */
  .sc-header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  }

  .sc-slot-label {
    font-family: 'IBM Plex Mono', monospace;
    font-size: 10px;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: #4a4a4a;
    margin-bottom: 4px;
  }

  .sc-slot-number {
    font-size: 28px;
    font-weight: 900;
    letter-spacing: -0.03em;
    line-height: 1;
  }

  .sc-badge {
    display: flex;
    align-items: center;
    gap: 5px;
    padding: 4px 10px;
    border-radius: 999px;
    font-size: 11px;
    font-weight: 700;
    border: 1px solid;
  }

  .sc-badge-dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
  }

  .sc-badge-dot-pulse { animation: pulse-dot 2s ease-in-out infinite; }

  /* Icon area */
  .sc-icon-area {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 44px;
  }

  .sc-icon-box {
    width: 40px;
    height: 40px;
    border-radius: 10px;
    border: 1px solid;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Action buttons */
  .sc-btn {
    width: 100%;
    padding: 10px;
    border-radius: 8px;
    border: none;
    font-size: 13px;
    font-weight: 700;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 7px;
    font-family: 'Sora', sans-serif;
    transition: all 0.15s;
  }

  .sc-btn-book {
    background: #d4a847;
    color: #0d0d0d;
  }
  .sc-btn-book:hover { background: #e0b856; }

  .sc-btn-unbook {
    background: transparent;
    color: #6a6a6a;
    border: 1px solid rgba(255,255,255,0.08) !important;
  }
  .sc-btn-unbook:hover { background: rgba(255,255,255,0.04); color: #f0ede8; }
  .sc-btn-unbook:disabled { opacity: 0.4; cursor: not-allowed; }

  .sc-info-box {
    width: 100%;
    padding: 10px;
    border-radius: 8px;
    font-size: 12px;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    font-family: 'Sora', sans-serif;
  }

  .sc-info-blocked {
    border: 1px dashed rgba(255,255,255,0.08);
    color: #3a3a3a;
    background: transparent;
  }

  .sc-info-taken {
    background: rgba(127,29,29,0.15);
    border: 1px solid rgba(153,27,27,0.2);
    color: #7f1d1d;
  }

  .sc-spinner {
    width: 13px;
    height: 13px;
    border-radius: 50%;
    border: 2px solid rgba(13,13,13,0.25);
    border-top-color: #0d0d0d;
    animation: spin 0.65s linear infinite;
    display: inline-block;
    flex-shrink: 0;
  }
`;function Yy({slot:e,currentUserId:t,hasActiveBooking:n,onRefresh:r}){const[o,l]=b.useState(!1),[i,s]=b.useState(null),[u,c]=b.useState(!1),d=i??e.status,p=d==="free",y=d==="occupied"&&e.bookedBy===t,S=p&&!n,g=p&&n,x=!p&&!y,v=()=>{s("occupied"),r==null||r()},h=async()=>{var T,D;if(!u){c(!0),s("free");try{await ka(e.id),B.success(`Slot ${e.slotNumber} released.`),r==null||r()}catch(A){s(null),B.error(((D=(T=A.response)==null?void 0:T.data)==null?void 0:D.message)||"Failed to release slot.")}finally{c(!1)}}},f=y?"sc-card sc-card-mine":S?"sc-card sc-card-free":x?"sc-card sc-card-taken":"sc-card sc-card-blocked",m=y?{background:"rgba(212,168,71,0.12)",borderColor:"rgba(212,168,71,0.25)",color:"#d4a847"}:S?{background:"rgba(16,185,129,0.1)",borderColor:"rgba(16,185,129,0.25)",color:"#34d399"}:x?{background:"rgba(127,29,29,0.15)",borderColor:"rgba(153,27,27,0.25)",color:"#f87171"}:{background:"rgba(255,255,255,0.03)",borderColor:"rgba(255,255,255,0.06)",color:"#3a3a3a"},w=y?"Yours":S?"Free":x?"Taken":"Locked",N=y?"#d4a847":S?"#34d399":x?"#f87171":"#3a3a3a",_=y?"#d4a847":S?"#f0ede8":"#3a3a3a",P=y?{background:"rgba(212,168,71,0.08)",borderColor:"rgba(212,168,71,0.2)"}:S?{background:"rgba(16,185,129,0.08)",borderColor:"rgba(16,185,129,0.2)"}:x?{background:"rgba(127,29,29,0.15)",borderColor:"rgba(153,27,27,0.2)"}:{background:"rgba(255,255,255,0.03)",borderColor:"rgba(255,255,255,0.06)"};return a.jsxs(a.Fragment,{children:[a.jsx("style",{children:Ky}),a.jsxs("div",{className:f,style:{opacity:u?.6:1},children:[y&&a.jsx("div",{className:"sc-ribbon",children:"Mine"}),a.jsxs("div",{className:"sc-header",children:[a.jsxs("div",{children:[a.jsx("div",{className:"sc-slot-label",children:"Slot"}),a.jsx("div",{className:"sc-slot-number",style:{color:_},children:e.slotNumber})]}),a.jsxs("div",{className:"sc-badge",style:m,children:[a.jsx("span",{className:"sc-badge-dot",style:{background:N,animation:S?"pulse-dot 2s ease-in-out infinite":"none"}}),w]})]}),a.jsx("div",{className:"sc-icon-area",children:u?a.jsx("span",{className:"sc-spinner",style:{borderTopColor:"#d4a847",borderColor:"rgba(212,168,71,0.2)"}}):a.jsxs("div",{className:"sc-icon-box",style:P,children:[y&&a.jsx(fs,{size:17,color:"#d4a847",strokeWidth:1.8}),S&&a.jsx("div",{style:{width:10,height:10,borderRadius:"50%",background:"#34d399"}}),x&&a.jsx(ic,{size:15,color:"#7f1d1d",strokeWidth:1.8}),g&&a.jsx(sc,{size:14,color:"#3a3a3a",strokeWidth:1.8})]})}),a.jsxs("div",{children:[S&&a.jsxs("button",{className:"sc-btn sc-btn-book",onClick:()=>l(!0),children:[a.jsx(fs,{size:14,strokeWidth:2.5}),"Book & Get Ticket"]}),g&&a.jsxs("div",{className:"sc-info-box sc-info-blocked",children:[a.jsx(sc,{size:12,strokeWidth:2}),"Release your slot first"]}),y&&a.jsx("button",{className:"sc-btn sc-btn-unbook",onClick:h,disabled:u,children:u?a.jsxs(a.Fragment,{children:[a.jsx("span",{className:"sc-spinner",style:{borderTopColor:"#6a6a6a",borderColor:"rgba(106,106,106,0.2)"}})," Releasing…"]}):a.jsxs(a.Fragment,{children:[a.jsx(_y,{size:13,strokeWidth:2.5})," Unbook Slot"]})}),x&&a.jsxs("div",{className:"sc-info-box sc-info-taken",children:[a.jsx(ic,{size:12,strokeWidth:2}),"Not Available"]})]})]}),o&&a.jsx(Qy,{slot:e,onClose:()=>l(!1),onBooked:v})]})}const qy=`
  @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;600;700;800&family=IBM+Plex+Mono:wght@400;500;600&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  @keyframes spin        { to { transform: rotate(360deg); } }
  @keyframes urgentPulse { 0%,100% { opacity:1; } 50% { opacity:0.5; } }
  @keyframes fadeIn      { from { opacity:0; } to { opacity:1; } }
  @keyframes modalIn     { from { opacity:0; transform:scale(0.95) translateY(10px); } to { opacity:1; transform:scale(1) translateY(0); } }

  .tk-root {
    max-width: 480px;
    margin: 0 auto;
    background: #0d0d0d;
    border: 1px solid rgba(255,255,255,0.07);
    border-radius: 20px;
    overflow: hidden;
    font-family: 'Sora', sans-serif;
  }

  /* Header */
  .tk-header {
    background: #141414;
    border-bottom: 1px solid rgba(255,255,255,0.06);
    padding: 20px 24px;
  }

  .tk-header-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 14px;
  }

  .tk-logo {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .tk-logo-icon {
    width: 32px;
    height: 32px;
    border-radius: 8px;
    background: #d4a847;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  .tk-logo-sup {
    font-family: 'IBM Plex Mono', monospace;
    font-size: 10px;
    color: #4a4a4a;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    margin-bottom: 2px;
  }

  .tk-logo-title {
    font-size: 15px;
    font-weight: 800;
    color: #f0ede8;
    letter-spacing: -0.02em;
  }

  .tk-status-badge {
    display: flex;
    align-items: center;
    gap: 5px;
    padding: 4px 10px;
    border-radius: 999px;
    font-size: 11px;
    font-weight: 700;
    border: 1px solid;
  }

  .tk-ticket-num {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: rgba(255,255,255,0.04);
    border: 1px solid rgba(255,255,255,0.06);
    padding: 6px 12px;
    border-radius: 8px;
  }

  .tk-ticket-num-label {
    font-family: 'IBM Plex Mono', monospace;
    font-size: 10px;
    color: #4a4a4a;
    text-transform: uppercase;
    letter-spacing: 0.12em;
  }

  .tk-ticket-num-val {
    font-family: 'IBM Plex Mono', monospace;
    font-size: 13px;
    font-weight: 900;
    color: #f0ede8;
    letter-spacing: 0.08em;
  }

  .tk-ext-badge {
    display: inline-flex;
    align-items: center;
    background: rgba(212,168,71,0.1);
    border: 1px solid rgba(212,168,71,0.2);
    padding: 4px 10px;
    border-radius: 8px;
    font-family: 'IBM Plex Mono', monospace;
    font-size: 11px;
    color: #d4a847;
    margin-left: 8px;
  }

  /* Zigzag */
  .tk-tear {
    position: relative;
    height: 16px;
    background: #0d0d0d;
    overflow: hidden;
  }

  /* Body */
  .tk-body {
    padding: 20px 24px 24px;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  /* Slot + Duration */
  .tk-slot-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    border: 1px solid rgba(255,255,255,0.06);
    border-radius: 12px;
    overflow: hidden;
  }

  .tk-slot-cell {
    padding: 14px 16px;
    text-align: center;
  }

  .tk-slot-cell:first-child {
    background: rgba(255,255,255,0.02);
    border-right: 1px solid rgba(255,255,255,0.06);
  }

  .tk-cell-label {
    font-family: 'IBM Plex Mono', monospace;
    font-size: 10px;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: #4a4a4a;
    margin-bottom: 6px;
  }

  .tk-slot-number {
    font-size: 36px;
    font-weight: 900;
    letter-spacing: -0.03em;
    line-height: 1;
    color: #f0ede8;
  }

  .tk-duration-value {
    font-size: 22px;
    font-weight: 900;
    letter-spacing: -0.02em;
    color: #d4a847;
    line-height: 1;
  }

  .tk-duration-sub {
    font-family: 'IBM Plex Mono', monospace;
    font-size: 11px;
    color: #4a4a4a;
    margin-top: 3px;
  }

  /* Time cards */
  .tk-times {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
  }

  .tk-time-card {
    background: #141414;
    border: 1px solid rgba(255,255,255,0.06);
    border-radius: 10px;
    padding: 12px 14px;
  }

  .tk-time-card-label {
    display: flex;
    align-items: center;
    gap: 6px;
    font-family: 'IBM Plex Mono', monospace;
    font-size: 10px;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: #4a4a4a;
    margin-bottom: 6px;
  }

  .tk-time-card-value {
    font-size: 13px;
    font-weight: 700;
    color: #f0ede8;
  }

  /* Countdown */
  .tk-countdown {
    border-radius: 12px;
    border: 1px solid;
    padding: 16px;
    text-align: center;
  }

  .tk-countdown-label {
    font-family: 'IBM Plex Mono', monospace;
    font-size: 10px;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    margin-bottom: 12px;
  }

  .tk-countdown-time {
    font-family: 'IBM Plex Mono', monospace;
    font-size: 44px;
    font-weight: 900;
    letter-spacing: -0.03em;
    line-height: 1;
    font-variant-numeric: tabular-nums;
  }

  .tk-countdown-expired {
    font-size: 18px;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
  }

  .tk-progress-track {
    margin-top: 14px;
    height: 4px;
    background: rgba(255,255,255,0.06);
    border-radius: 999px;
    overflow: hidden;
  }

  .tk-progress-bar {
    height: 100%;
    border-radius: 999px;
    transition: width 1s linear;
  }

  .tk-progress-pct {
    font-family: 'IBM Plex Mono', monospace;
    font-size: 10px;
    color: #4a4a4a;
    margin-top: 6px;
  }

  .tk-urgent { animation: urgentPulse 1s ease-in-out infinite; }

  /* Barcode */
  .tk-barcode {
    display: flex;
    align-items: flex-end;
    justify-content: center;
    gap: 2px;
    height: 24px;
    opacity: 0.08;
  }

  .tk-barcode-bar {
    width: 2px;
    border-radius: 1px;
    background: #f0ede8;
  }

  /* Actions */
  .tk-actions {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .tk-btn {
    width: 100%;
    padding: 13px;
    border-radius: 10px;
    border: none;
    font-size: 14px;
    font-weight: 700;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 7px;
    font-family: 'Sora', sans-serif;
    transition: all 0.15s;
  }

  .tk-btn-extend {
    background: #d4a847;
    color: #0d0d0d;
  }
  .tk-btn-extend:hover:not(:disabled) { background: #e0b856; }
  .tk-btn-extend:disabled { opacity: 0.5; cursor: not-allowed; }

  .tk-btn-release {
    background: transparent;
    color: #6a6a6a;
    border: 1px solid rgba(255,255,255,0.08) !important;
  }
  .tk-btn-release:hover:not(:disabled) { background: rgba(255,255,255,0.04); color: #f0ede8; }
  .tk-btn-release:disabled { opacity: 0.4; cursor: not-allowed; }

  .tk-spinner {
    width: 14px; height: 14px;
    border-radius: 50%;
    display: inline-block;
    flex-shrink: 0;
    animation: spin 0.65s linear infinite;
  }

  /* Expiry Dialog */
  .tk-overlay {
    position: fixed;
    inset: 0;
    z-index: 3000;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    font-family: 'Sora', sans-serif;
    animation: fadeIn 0.2s ease;
  }

  .tk-dialog {
    width: 100%;
    max-width: 380px;
    background: #0d0d0d;
    border: 1px solid rgba(255,255,255,0.08);
    border-radius: 20px;
    overflow: hidden;
    animation: modalIn 0.25s ease;
  }

  .tk-dialog-header {
    background: #141414;
    border-bottom: 1px solid rgba(255,255,255,0.06);
    padding: 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 14px;
  }

  .tk-ring-wrap { position: relative; width: 72px; height: 72px; }

  .tk-ring-center {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    font-weight: 900;
  }

  .tk-dialog-title {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 18px;
    font-weight: 800;
    color: #f0ede8;
  }

  .tk-dialog-sub {
    font-family: 'IBM Plex Mono', monospace;
    font-size: 12px;
    color: #6a6a6a;
    text-align: center;
  }

  .tk-dialog-body {
    padding: 20px 24px;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .tk-dialog-desc {
    font-size: 13px;
    color: #6a6a6a;
    text-align: center;
    line-height: 1.6;
  }

  .tk-dialog-desc em {
    font-style: normal;
    color: #d4a847;
    font-weight: 600;
  }

  .tk-dialog-actions {
    display: flex;
    gap: 10px;
  }

  .tk-dialog-btn {
    flex: 1;
    padding: 12px;
    border-radius: 10px;
    font-size: 13px;
    font-weight: 700;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 7px;
    font-family: 'Sora', sans-serif;
    transition: all 0.15s;
  }

  .tk-dialog-btn-out {
    background: transparent;
    border: 1px solid rgba(255,255,255,0.08);
    color: #6a6a6a;
  }
  .tk-dialog-btn-out:hover:not(:disabled) { color: #f0ede8; border-color: rgba(255,255,255,0.18); }

  .tk-dialog-btn-extend {
    background: #d4a847;
    border: none;
    color: #0d0d0d;
  }
  .tk-dialog-btn-extend:hover:not(:disabled) { background: #e0b856; }

  .tk-dialog-btn:disabled { opacity: 0.4; cursor: not-allowed; }
`;function Jy(e){const t=b.useCallback(()=>{const o=new Date(e).getTime()-Date.now();return o<=0?{total:0,hours:0,minutes:0,seconds:0,expired:!0}:{total:o,hours:Math.floor(o/36e5),minutes:Math.floor(o%36e5/6e4),seconds:Math.floor(o%6e4/1e3),expired:!1}},[e]),[n,r]=b.useState(t);return b.useEffect(()=>{r(t());const o=setInterval(()=>r(t()),1e3);return()=>clearInterval(o)},[t]),n}function ll({color:e="#0d0d0d"}){return a.jsx("span",{className:"tk-spinner",style:{border:`2px solid ${e}40`,borderTopColor:e}})}const ac=30,rr=30;function Xy({slotId:e,slotNumber:t,onExtended:n,onClockOut:r}){const[o,l]=b.useState(ac),[i,s]=b.useState(!1),u=b.useRef(!1);b.useEffect(()=>{const x=setInterval(()=>{l(v=>v<=1?(clearInterval(x),0):v-1)},1e3);return()=>clearInterval(x)},[]),b.useEffect(()=>{o===0&&!u.current&&c(!0)},[o]);const c=async(x=!1)=>{var v,h;if(!u.current){u.current=!0,s(!0);try{const f=await op(e,rr);B.success(x?`No response — auto-added ${rr} min to Slot ${t}.`:`+${rr} min added to Slot ${t}.`),n(f.data.data)}catch(f){B.error(((h=(v=f.response)==null?void 0:v.data)==null?void 0:h.message)||"Failed to extend."),u.current=!1,s(!1)}}},d=async()=>{var x,v;if(!u.current){u.current=!0,s(!0);try{await ka(e),B.success("Clocked out. Slot released."),r()}catch(h){B.error(((v=(x=h.response)==null?void 0:x.data)==null?void 0:v.message)||"Failed to release."),u.current=!1,s(!1)}}},p=o/ac,y=28,S=2*Math.PI*y,g=o<=10;return a.jsx("div",{className:"tk-overlay",style:{background:"rgba(6,4,18,0.88)",backdropFilter:"blur(12px)"},children:a.jsxs("div",{className:"tk-dialog",children:[a.jsxs("div",{className:"tk-dialog-header",children:[a.jsxs("div",{className:"tk-ring-wrap",children:[a.jsxs("svg",{width:"72",height:"72",style:{transform:"rotate(-90deg)"},children:[a.jsx("circle",{cx:"36",cy:"36",r:y,fill:"none",stroke:"#1e1e1e",strokeWidth:"4"}),a.jsx("circle",{cx:"36",cy:"36",r:y,fill:"none",stroke:g?"#ef4444":"#d4a847",strokeWidth:"4",strokeDasharray:`${S*p} ${S}`,strokeLinecap:"round",style:{transition:"stroke-dasharray 1s linear"}})]}),a.jsx("div",{className:"tk-ring-center",style:{color:g?"#ef4444":"#d4a847",animation:g?"urgentPulse 0.8s infinite":"none"},children:o})]}),a.jsxs("div",{className:"tk-dialog-title",children:[a.jsx(ol,{size:18,color:"#d4a847",strokeWidth:2.5}),"Time's Up!"]}),a.jsxs("p",{className:"tk-dialog-sub",children:["Slot ",a.jsx("strong",{style:{color:"#f0ede8"},children:t})," · ","Auto-extending in"," ",a.jsxs("strong",{style:{color:g?"#ef4444":"#d4a847"},children:[o,"s"]})]})]}),a.jsxs("div",{className:"tk-dialog-body",children:[a.jsxs("p",{className:"tk-dialog-desc",children:["Your parking time has expired. Extend or clock out.",a.jsx("br",{}),"No response = ",a.jsxs("em",{children:["+",rr," min auto-added"]})]}),a.jsxs("div",{className:"tk-dialog-actions",children:[a.jsxs("button",{onClick:d,disabled:i,className:"tk-dialog-btn tk-dialog-btn-out",children:[i?a.jsx(ll,{color:"#6a6a6a"}):a.jsx(wa,{size:14,strokeWidth:2.5}),"Clock Out"]}),a.jsxs("button",{onClick:()=>c(!1),disabled:i,className:"tk-dialog-btn tk-dialog-btn-extend",children:[i?a.jsx(ll,{color:"#0d0d0d"}):a.jsx(Sa,{size:14,strokeWidth:3}),"+",rr," Min"]})]})]})]})})}function Gy({booking:e,onUnbooked:t,onExtended:n}){var z,I,$;const[r,o]=b.useState(e),[l,i]=b.useState(!1),[s,u]=b.useState(!1),[c,d]=b.useState(!1),p=b.useRef(!1);b.useEffect(()=>{o(e)},[e]);const y=Jy(r.expiresAt),{hours:S,minutes:g,seconds:x,expired:v,total:h}=y;b.useEffect(()=>{v&&!p.current&&(p.current=!0,d(!0))},[v]);const f=r.durationMinutes*60*1e3,m=v?100:Math.max(0,Math.min(100,(f-h)/f*100)),w=h>0&&h<5*60*1e3,N=h>0&&h<15*60*1e3,_=F=>String(F).padStart(2,"0"),P=F=>new Date(F).toLocaleString([],{month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"}),T=F=>{const Y=Math.floor(F/60),ne=F%60;return ne>0?`${Y}h ${ne}m`:Y>0?`${Y}h`:`${F}m`},D=v?"#ef4444":w?"#f97316":N?"#f59e0b":"#d4a847",A=v?{background:"rgba(127,29,29,0.2)",borderColor:"rgba(153,27,27,0.3)"}:w?{background:"rgba(124,45,18,0.2)",borderColor:"rgba(154,52,18,0.3)"}:N?{background:"rgba(120,53,15,0.15)",borderColor:"rgba(146,64,14,0.3)"}:{background:"rgba(212,168,71,0.06)",borderColor:"rgba(212,168,71,0.2)"},oe=v?"#ef4444":w?"#f97316":N?"#f59e0b":"#d4a847",Q={background:`${D}18`,borderColor:`${D}35`,color:D,animation:w&&!v?"urgentPulse 1s infinite":"none"},pe=v?a.jsx(ol,{size:12,strokeWidth:2.5}):w?a.jsx(cp,{size:12,strokeWidth:2.5}):N?a.jsx(Ay,{size:12,strokeWidth:2.5}):a.jsx(ds,{size:12,strokeWidth:2.5}),he=v?"Expired":w?"Urgent":N?"Ending Soon":"Active",$e=F=>{d(!1),p.current=!1;const Y={...r,expiresAt:F.newExpiresAt,durationMinutes:F.newDurationMinutes};o(Y),n==null||n(Y)},E=()=>{d(!1),t==null||t()},O=async()=>{var F,Y,ne;u(!0);try{const lt=await op(r.slotId,30);B.success(`+30 min added to Slot ${(F=r.slot)==null?void 0:F.slotNumber}.`),$e(lt.data.data)}catch(lt){B.error(((ne=(Y=lt.response)==null?void 0:Y.data)==null?void 0:ne.message)||"Extension failed.")}finally{u(!1)}},j=async()=>{var F,Y;i(!0);try{await ka(r.slotId),B.success("Slot released early."),t==null||t()}catch(ne){B.error(((Y=(F=ne.response)==null?void 0:F.data)==null?void 0:Y.message)||"Failed to release slot."),i(!1)}};return a.jsxs(a.Fragment,{children:[a.jsx("style",{children:qy}),a.jsxs("div",{className:"tk-root",children:[a.jsxs("div",{className:"tk-header",children:[a.jsxs("div",{className:"tk-header-row",children:[a.jsxs("div",{className:"tk-logo",children:[a.jsx("div",{className:"tk-logo-icon",children:a.jsx("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"#0d0d0d",children:a.jsx("path",{d:"M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"})})}),a.jsxs("div",{children:[a.jsx("div",{className:"tk-logo-sup",children:"Smart Parking"}),a.jsx("div",{className:"tk-logo-title",children:"Parking Ticket"})]})]}),a.jsxs("div",{className:"tk-status-badge",style:Q,children:[pe,he]})]}),a.jsxs("div",{style:{display:"flex",alignItems:"center",flexWrap:"wrap",gap:6},children:[a.jsxs("div",{className:"tk-ticket-num",children:[a.jsx("span",{className:"tk-ticket-num-label",children:"Ticket"}),a.jsx("span",{className:"tk-ticket-num-val",children:r.ticketNumber||((z=r.bookingId)==null?void 0:z.slice(0,12).toUpperCase())})]}),r.extensionCount>0&&a.jsxs("span",{className:"tk-ext-badge",children:["Extended ×",r.extensionCount]})]})]}),a.jsx("div",{className:"tk-tear",children:a.jsx("svg",{viewBox:"0 0 480 16",preserveAspectRatio:"none",style:{width:"100%",height:"100%",display:"block"},children:a.jsx("path",{d:"M0,0 L0,16 L480,16 L480,0 Q472,14 464,0 Q456,14 448,0 Q440,14 432,0 Q424,14 416,0 Q408,14 400,0 Q392,14 384,0 Q376,14 368,0 Q360,14 352,0 Q344,14 336,0 Q328,14 320,0 Q312,14 304,0 Q296,14 288,0 Q280,14 272,0 Q264,14 256,0 Q248,14 240,0 Q232,14 224,0 Q216,14 208,0 Q200,14 192,0 Q184,14 176,0 Q168,14 160,0 Q152,14 144,0 Q136,14 128,0 Q120,14 112,0 Q104,14 96,0 Q88,14 80,0 Q72,14 64,0 Q56,14 48,0 Q40,14 32,0 Q24,14 16,0 Q8,14 0,0Z",fill:"#141414"})})}),a.jsxs("div",{className:"tk-body",children:[a.jsxs("div",{className:"tk-slot-row",children:[a.jsxs("div",{className:"tk-slot-cell",children:[a.jsx("div",{className:"tk-cell-label",children:"Slot"}),a.jsx("div",{className:"tk-slot-number",children:((I=r.slot)==null?void 0:I.slotNumber)||"—"})]}),a.jsxs("div",{className:"tk-slot-cell",children:[a.jsx("div",{className:"tk-cell-label",children:"Duration"}),a.jsx("div",{className:"tk-duration-value",children:T(r.durationMinutes)}),a.jsxs("div",{className:"tk-duration-sub",children:[r.durationMinutes," min"]})]})]}),a.jsx("div",{className:"tk-times",children:[{label:"Booked At",value:P(r.bookingTime),icon:a.jsx(ds,{size:11,color:"#34d399",strokeWidth:2.5})},{label:"Expires At",value:P(r.expiresAt),icon:a.jsx(Po,{size:11,color:"#d4a847",strokeWidth:2.5})}].map(({label:F,value:Y,icon:ne})=>a.jsxs("div",{className:"tk-time-card",children:[a.jsxs("div",{className:"tk-time-card-label",children:[ne," ",F]}),a.jsx("div",{className:"tk-time-card-value",children:Y})]},F))}),a.jsxs("div",{className:"tk-countdown",style:A,children:[a.jsx("div",{className:"tk-countdown-label",style:{color:D},children:v?"Time Expired":"Time Remaining"}),v?a.jsxs("div",{className:"tk-countdown-expired",style:{color:D},children:[a.jsx(ol,{size:18,strokeWidth:2.5}),"Checking with you…"]}):a.jsxs("div",{className:`tk-countdown-time ${w?"tk-urgent":""}`,style:{color:D},children:[_(S),":",_(g),":",_(x)]}),a.jsx("div",{className:"tk-progress-track",children:a.jsx("div",{className:"tk-progress-bar",style:{width:`${m}%`,background:oe}})}),a.jsxs("div",{className:"tk-progress-pct",children:[Math.round(m),"% elapsed"]})]}),a.jsx("div",{className:"tk-barcode",children:[3,6,4,8,3,5,9,4,6,3,7,5,4,8,3,6,4,9,5,3,7,4,6,8,3,5,4,9,6,3,7,5,4,8,3,6,4,7,5,3].map((F,Y)=>a.jsx("div",{className:"tk-barcode-bar",style:{height:F*3}},Y))}),!v&&a.jsxs("div",{className:"tk-actions",children:[a.jsxs("button",{onClick:O,disabled:s,className:"tk-btn tk-btn-extend",children:[s?a.jsx(ll,{color:"#0d0d0d"}):a.jsx(Sa,{size:16,strokeWidth:3}),"Add 30 Min"]}),a.jsxs("button",{onClick:j,disabled:l,className:"tk-btn tk-btn-release",children:[l?a.jsx(ll,{color:"#6a6a6a"}):a.jsx(wa,{size:14,strokeWidth:2.5}),l?"Releasing…":"Release Slot Early"]})]})]})]}),c&&a.jsx(Xy,{slotId:r.slotId,slotNumber:($=r.slot)==null?void 0:$.slotNumber,onExtended:$e,onClockOut:E})]})}const Zy=`
  @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;600;700;800&family=IBM+Plex+Mono:wght@400;500&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  @keyframes shimmer {
    0%   { background-position: 200% 0; }
    100% { background-position: -200% 0; }
  }
  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(12px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes spin { to { transform: rotate(360deg); } }

  .db-root {
    min-height: 100vh;
    background: #0d0d0d;
    font-family: 'Sora', sans-serif;
    color: #f0ede8;
  }

  .db-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 40px 24px;
  }

  .db-eyebrow {
    font-family: 'IBM Plex Mono', monospace;
    font-size: 11px;
    font-weight: 500;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: #d4a847;
    margin-bottom: 12px;
    animation: fadeUp 0.4s ease both 0.05s;
  }

  .db-heading {
    font-size: 32px;
    font-weight: 800;
    letter-spacing: -0.03em;
    line-height: 1.1;
    color: #f0ede8;
    margin-bottom: 8px;
    animation: fadeUp 0.4s ease both 0.1s;
  }

  .db-heading-accent { color: #d4a847; }

  .db-subheading {
    font-size: 14px;
    color: #575757;
    margin-bottom: 36px;
    animation: fadeUp 0.4s ease both 0.15s;
  }

  .db-stats {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 12px;
    margin-bottom: 32px;
    animation: fadeUp 0.4s ease both 0.2s;
  }

  @media (max-width: 768px) {
    .db-stats { grid-template-columns: repeat(2, 1fr); }
    .db-container { padding: 24px 16px; }
  }

  .db-stat-card {
    background: #141414;
    border: 1px solid rgba(255,255,255,0.06);
    border-radius: 12px;
    padding: 16px;
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .db-stat-icon {
    width: 36px;
    height: 36px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  .db-stat-value {
    font-size: 22px;
    font-weight: 900;
    letter-spacing: -0.03em;
    line-height: 1;
  }

  .db-stat-label {
    font-family: 'IBM Plex Mono', monospace;
    font-size: 10px;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: #4a4a4a;
    margin-top: 3px;
  }

  /* Booking banner */
  .db-banner {
    border-radius: 12px;
    border: 1px solid;
    padding: 14px 16px;
    display: flex;
    align-items: center;
    gap: 14px;
    margin-bottom: 20px;
  }

  .db-banner-icon {
    width: 40px;
    height: 40px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  .db-banner-flex { flex: 1; min-width: 0; }

  .db-banner-title {
    font-size: 14px;
    font-weight: 700;
    margin-bottom: 3px;
  }

  .db-banner-sub {
    font-family: 'IBM Plex Mono', monospace;
    font-size: 11px;
  }

  .db-banner-btn {
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 7px 12px;
    border-radius: 8px;
    border: none;
    font-size: 12px;
    font-weight: 700;
    cursor: pointer;
    flex-shrink: 0;
    font-family: 'Sora', sans-serif;
    transition: opacity 0.15s;
    background: none;
  }
  .db-banner-btn:hover { opacity: 0.75; }

  /* Filter bar */
  .db-filter-bar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
    flex-wrap: wrap;
    gap: 12px;
  }

  .db-filter-group { display: flex; gap: 8px; }

  .db-filter-btn {
    padding: 7px 16px;
    border-radius: 999px;
    border: 1px solid;
    font-size: 12px;
    font-weight: 700;
    cursor: pointer;
    font-family: 'Sora', sans-serif;
    text-transform: capitalize;
    transition: all 0.15s;
  }

  .db-filter-btn-active {
    background: #d4a847;
    color: #0d0d0d;
    border-color: #d4a847;
  }

  .db-filter-btn-inactive {
    background: transparent;
    color: #6a6a6a;
    border-color: rgba(255,255,255,0.08);
  }
  .db-filter-btn-inactive:hover {
    color: #f0ede8;
    border-color: rgba(255,255,255,0.18);
  }

  .db-refresh-area { display: flex; align-items: center; gap: 12px; }

  .db-timestamp {
    font-family: 'IBM Plex Mono', monospace;
    font-size: 11px;
    color: #3a3a3a;
  }

  .db-refresh-btn {
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 7px 12px;
    border-radius: 8px;
    border: 1px solid rgba(255,255,255,0.08);
    background: transparent;
    color: #6a6a6a;
    font-size: 12px;
    font-weight: 600;
    cursor: pointer;
    font-family: 'Sora', sans-serif;
    transition: all 0.15s;
  }
  .db-refresh-btn:hover { color: #f0ede8; border-color: rgba(255,255,255,0.18); }
  .db-refresh-btn:disabled { opacity: 0.4; cursor: not-allowed; }

  .db-spin { animation: spin 0.65s linear infinite; }

  /* Grid */
  .db-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(210px, 1fr));
    gap: 16px;
  }

  /* Shimmer */
  .db-shimmer {
    border-radius: 12px;
    height: 200px;
    background: linear-gradient(90deg, #1a1a1a 25%, #222 50%, #1a1a1a 75%);
    background-size: 200% 100%;
    animation: shimmer 1.5s infinite;
  }

  /* Empty state */
  .db-empty {
    text-align: center;
    padding: 80px 20px;
    background: #141414;
    border: 1px solid rgba(255,255,255,0.06);
    border-radius: 16px;
  }

  .db-empty-icon { font-size: 48px; margin-bottom: 16px; }
  .db-empty-title { font-size: 16px; font-weight: 700; color: #f0ede8; margin-bottom: 6px; }
  .db-empty-sub { font-size: 13px; color: #4a4a4a; }
`;function ex(){const e=new Date().getHours();return e<12?"morning":e<17?"afternoon":"evening"}function tx(){var he,$e,E;const[e,t]=b.useState([]),[n,r]=b.useState(null),[o,l]=b.useState(!0),[i,s]=b.useState("all"),[u,c]=b.useState(new Date),[d,p]=b.useState(!1),[y,S]=b.useState(!1),g=fa(),x=g==null?void 0:g.userId,v=b.useRef(!1),h=b.useRef(null),f=b.useCallback(async(O=!1)=>{O||l(!0);try{const j=await rp();t(j.data.data||[]),c(new Date)}catch{O||B.error("Failed to load slots.")}finally{O||l(!1)}},[]),m=b.useCallback(async()=>{try{const j=(await T1()).data.data||null;r(j),j&&!v.current&&(v.current=!0,p(!0))}catch{}},[]),w=b.useCallback(async()=>{var O,j;if(!(h.current&&Date.now()-h.current<9e4))try{const z=await z1();((O=z.data.data)==null?void 0:O.expired)>0&&(f(!0),m(),(j=B.info)==null||j.call(B,`${z.data.data.expired} slot(s) auto-released.`))}catch{}},[f,m]);b.useEffect(()=>{(async()=>{l(!0),await Promise.all([f(!0),m()]),l(!1)})();const j=setInterval(()=>f(!0),8e3),z=setInterval(()=>m(),1e4),I=setInterval(()=>w(),3e4);return()=>{clearInterval(j),clearInterval(z),clearInterval(I)}},[f,m,w]);const N=b.useCallback(()=>{r(null),p(!1),v.current=!1,h.current=null,f(!0)},[f]),_=b.useCallback(O=>{h.current=Date.now(),r(j=>j&&{...j,...O}),f(!0)},[f]),P=async()=>{S(!0),await Promise.all([f(!0),m()]),S(!1)},T=i==="all"?e:e.filter(O=>O.status===i),D=e.filter(O=>O.status==="free").length,A=e.filter(O=>O.status==="occupied").length,oe=e.length?Math.round(A/e.length*100):0,Q=(n==null?void 0:n.expiresAt)&&new Date(n.expiresAt)<=new Date,pe=[{label:"Total Slots",value:e.length,icon:To,amber:!1},{label:"Available",value:D,icon:ap,amber:!0},{label:"Occupied",value:A,icon:ip,amber:!1},{label:"Occupancy",value:`${oe}%`,icon:iy,amber:oe>70}];return a.jsxs(a.Fragment,{children:[a.jsx("style",{children:Zy}),a.jsxs("div",{className:"db-root",children:[a.jsx(dp,{}),a.jsxs("div",{className:"db-container",children:[a.jsx("p",{className:"db-eyebrow",children:"Dashboard"}),a.jsxs("h1",{className:"db-heading",children:["Good ",ex(),","," ",a.jsx("span",{className:"db-heading-accent",children:(he=g==null?void 0:g.name)==null?void 0:he.split(" ")[0]})]}),a.jsx("p",{className:"db-subheading",children:"Find and book your parking slot below."}),a.jsx("div",{className:"db-stats",children:pe.map(({label:O,value:j,icon:z,amber:I})=>a.jsxs("div",{className:"db-stat-card",children:[a.jsx("div",{className:"db-stat-icon",style:{background:I?"rgba(212,168,71,0.12)":"rgba(255,255,255,0.04)"},children:a.jsx(z,{size:16,strokeWidth:2,color:I?"#d4a847":"#4a4a4a"})}),a.jsxs("div",{children:[a.jsx("div",{className:"db-stat-value",style:{color:I?"#d4a847":"#f0ede8"},children:j}),a.jsx("div",{className:"db-stat-label",children:O})]})]},O))}),n&&a.jsxs("div",{className:"db-banner",style:{background:Q?"rgba(127,29,29,0.2)":"rgba(212,168,71,0.06)",borderColor:Q?"rgba(153,27,27,0.4)":"rgba(212,168,71,0.2)"},children:[a.jsx("div",{className:"db-banner-icon",style:{background:Q?"rgba(153,27,27,0.3)":"rgba(212,168,71,0.12)"},children:a.jsx(fs,{size:18,strokeWidth:2,color:Q?"#f87171":"#d4a847"})}),a.jsxs("div",{className:"db-banner-flex",children:[a.jsx("div",{className:"db-banner-title",style:{color:Q?"#fca5a5":"#f0ede8"},children:Q?`Slot ${($e=n.slot)==null?void 0:$e.slotNumber} — Booking Expired`:`Active Booking — Slot ${(E=n.slot)==null?void 0:E.slotNumber}`}),a.jsx("div",{className:"db-banner-sub",style:{color:Q?"#ef4444":"#d4a847"},children:Q?"Your time is up. Respond to the dialog to extend or clock out.":`${n.ticketNumber} · Expires ${new Date(n.expiresAt).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}`})]}),a.jsx("button",{onClick:()=>p(O=>!O),className:"db-banner-btn",style:{background:Q?"rgba(153,27,27,0.35)":"rgba(212,168,71,0.12)",color:Q?"#fca5a5":"#d4a847"},children:d?a.jsxs(a.Fragment,{children:[a.jsx(sp,{size:13})," Hide"]}):a.jsxs(a.Fragment,{children:[a.jsx(cy,{size:13})," View Ticket"]})})]}),d&&n&&a.jsx("div",{style:{marginBottom:32},children:a.jsx(Gy,{booking:n,onUnbooked:N,onExtended:_})}),a.jsxs("div",{className:"db-filter-bar",children:[a.jsx("div",{className:"db-filter-group",children:["all","free","occupied"].map(O=>a.jsx("button",{onClick:()=>s(O),className:`db-filter-btn ${i===O?"db-filter-btn-active":"db-filter-btn-inactive"}`,children:O},O))}),a.jsxs("div",{className:"db-refresh-area",children:[a.jsx("span",{className:"db-timestamp",children:u.toLocaleTimeString()}),a.jsxs("button",{onClick:P,disabled:y,className:"db-refresh-btn",children:[a.jsx(Ny,{size:12,strokeWidth:2.5,style:y?{animation:"spin 0.65s linear infinite"}:{}}),"Refresh"]})]})]}),o?a.jsx("div",{className:"db-grid",children:[...Array(6)].map((O,j)=>a.jsx("div",{className:"db-shimmer"},j))}):T.length===0?a.jsxs("div",{className:"db-empty",children:[a.jsx("div",{className:"db-empty-icon",children:i==="free"?"😔":i==="occupied"?"🎉":"🅿️"}),a.jsx("p",{className:"db-empty-title",children:i==="free"?"No free slots":i==="occupied"?"No occupied slots!":"No slots yet"}),a.jsx("p",{className:"db-empty-sub",children:i==="free"?"All slots are currently taken.":"All clear!"})]}):a.jsx("div",{className:"db-grid",children:T.map(O=>a.jsx(Yy,{slot:O,currentUserId:x,hasActiveBooking:!!n,onRefresh:()=>{f(!0),m()}},O.id))})]})]})]})}const C={bg:"#0a0a0a",surface:"#111111",border:"#1e1e1e",border2:"#2a2a2a",text:"#f0f0f0",muted:"#4a4a4a",dim:"#2e2e2e",amber:"#d4a847",amberBg:"rgba(212,168,71,0.08)",green:"#22c55e",greenBg:"rgba(34,197,94,0.1)",red:"#ef4444",redBg:"rgba(239,68,68,0.1)",blue:"#38bdf8",blueBg:"rgba(56,189,248,0.1)"},Cn="'Sora', sans-serif",J="'IBM Plex Mono', monospace",pn=(e,t,n)=>a.jsx("span",{style:{padding:"3px 10px",borderRadius:999,fontSize:11,fontFamily:J,fontWeight:500,letterSpacing:"0.04em",background:e,color:t},children:n}),uc=e=>e?(e._seconds?new Date(e._seconds*1e3):new Date(e)).toLocaleString("en-IN",{day:"2-digit",month:"short",year:"numeric",hour:"numeric",minute:"2-digit",hour12:!0}):"—";function nx({children:e,style:t={}}){return a.jsx("p",{style:{margin:0,fontFamily:J,fontSize:9,color:C.muted,letterSpacing:"0.11em",...t},children:e})}function St({children:e,style:t={}}){return a.jsx("div",{style:{background:C.surface,border:`1px solid ${C.border}`,borderRadius:14,overflow:"hidden",...t},children:e})}function ai({children:e}){return a.jsx("th",{style:{padding:"12px 18px",textAlign:"left",fontFamily:J,fontSize:9,color:C.muted,letterSpacing:"0.1em",borderBottom:`1px solid ${C.border}`,whiteSpace:"nowrap"},children:e})}function Re({children:e,style:t={}}){return a.jsx("td",{style:{padding:"13px 18px",borderBottom:`1px solid ${C.border}`,fontSize:13,color:C.text,verticalAlign:"middle",...t},children:e})}function cc({value:e,onChange:t,onKeyDown:n,onFocus:r,onBlur:o,placeholder:l,type:i="text",style:s={}}){return a.jsx("input",{value:e,onChange:t,onKeyDown:n,type:i,placeholder:l,onFocus:u=>{u.target.style.borderColor=C.amber,r&&r(u)},onBlur:u=>{u.target.style.borderColor=C.border2,o&&o(u)},style:{background:C.bg,border:`1px solid ${C.border2}`,borderRadius:9,padding:"9px 13px",color:C.text,fontFamily:J,fontSize:13,outline:"none",transition:"border-color 0.15s",...s}})}function dc({onClick:e,disabled:t,loading:n,children:r,style:o={}}){return a.jsxs("button",{onClick:e,disabled:t,style:{display:"flex",alignItems:"center",gap:7,padding:"9px 18px",borderRadius:9,border:"none",background:t?C.dim:C.amber,color:t?C.muted:"#0a0a0a",fontFamily:Cn,fontWeight:700,fontSize:13,cursor:t?"not-allowed":"pointer",transition:"opacity 0.15s",whiteSpace:"nowrap",...o},children:[n&&a.jsx(fp,{}),r]})}function fp(){return a.jsx("span",{style:{width:13,height:13,borderRadius:"50%",border:"2px solid rgba(10,10,10,0.3)",borderTopColor:"#0a0a0a",display:"inline-block",animation:"spin 0.7s linear infinite",flexShrink:0}})}function ui(){return a.jsx("div",{style:{display:"flex",flexDirection:"column",gap:10},children:[...Array(5)].map((e,t)=>a.jsx("div",{style:{height:50,borderRadius:10,background:`linear-gradient(90deg, ${C.surface} 25%, ${C.border} 50%, ${C.surface} 75%)`,backgroundSize:"200% 100%",animation:"shimmer 1.5s infinite"}},t))})}function ci({Icon:e,title:t,desc:n}){return a.jsxs("div",{style:{textAlign:"center",padding:"60px 20px"},children:[a.jsx(e,{size:40,strokeWidth:1,color:C.muted,style:{marginBottom:12}}),a.jsx("p",{style:{fontFamily:Cn,fontWeight:700,fontSize:16,color:C.text,margin:"0 0 6px"},children:t}),a.jsx("p",{style:{fontFamily:J,fontSize:11,color:C.muted,margin:0},children:n})]})}function rx(){const[e,t]=b.useState([]),[n,r]=b.useState([]),[o,l]=b.useState([]),[i,s]=b.useState(null),[u,c]=b.useState(!0),[d,p]=b.useState("slots"),[y,S]=b.useState(""),[g,x]=b.useState(!1),[v,h]=b.useState(null),[f,m]=b.useState(null),[w,N]=b.useState(""),[_,P]=b.useState(null),T=b.useCallback(async()=>{c(!0);try{const[E,O,j,z]=await Promise.all([rp(),M1(),A1(),F1()]);t(E.data.data||[]),r(O.data.data||[]),s(j.data.data||null),l(z.data.data||[])}catch{B.error("Failed to load dashboard data.")}finally{c(!1)}},[]);b.useEffect(()=>{T();const E=setInterval(()=>T(),1e4);return()=>clearInterval(E)},[T]);const D=async()=>{var E,O;if(!y.trim()){B.error("Enter a slot number.");return}x(!0);try{await O1(y.trim().toUpperCase()),B.success(`Slot ${y.toUpperCase()} added!`),S(""),T()}catch(j){B.error(((O=(E=j.response)==null?void 0:E.data)==null?void 0:O.message)||"Failed to add slot.")}finally{x(!1)}},A=async(E,O)=>{m(E.id);try{await L1(E.id,{status:O}),B.success(`Slot ${E.slotNumber} → ${O}`),T()}catch{B.error("Update failed.")}finally{m(null)}},oe=async E=>{try{await I1(E.id),B.success(`Slot ${E.slotNumber} deleted.`),h(null),T()}catch{B.error("Delete failed.")}},Q=async()=>{var E,O;if(!w.trim()){B.error("Enter an email address.");return}P("manual");try{const j=await oc(w.trim());B.success(j.data.message||"User promoted to admin!"),N(""),T()}catch(j){B.error(((O=(E=j.response)==null?void 0:E.data)==null?void 0:O.message)||"Promotion failed.")}finally{P(null)}},pe=async E=>{var O,j;P(E.userId);try{const z=await oc(E.email);B.success(z.data.message||`${E.name} promoted to admin!`),T()}catch(z){B.error(((j=(O=z.response)==null?void 0:O.data)==null?void 0:j.message)||"Promotion failed.")}finally{P(null)}},he=[{id:"slots",label:"Slots",Icon:To},{id:"bookings",label:"Bookings",Icon:ii},{id:"users",label:"Users",Icon:si}],$e=i?[{label:"TOTAL SLOTS",value:i.totalSlots,Icon:To,color:C.amber,bg:C.amberBg},{label:"FREE",value:i.freeSlots,Icon:ap,color:C.green,bg:C.greenBg},{label:"OCCUPIED",value:i.occupiedSlots,Icon:ip,color:C.red,bg:C.redBg},{label:"OCCUPANCY",value:i.occupancyRate,Icon:ay,color:C.amber,bg:C.amberBg},{label:"BOOKINGS",value:i.totalBookings,Icon:ii,color:C.blue,bg:C.blueBg},{label:"USERS",value:o.length,Icon:si,color:C.blue,bg:C.blueBg}]:[];return a.jsxs("div",{style:{minHeight:"100vh",background:C.bg,fontFamily:Cn},children:[a.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700;800&family=IBM+Plex+Mono:wght@400;500&display=swap');
        * { box-sizing: border-box; }
        @keyframes spin { to { transform: rotate(360deg); } }
        @keyframes shimmer { 0%{background-position:200% 0} 100%{background-position:-200% 0} }
        .tab-btn:hover { border-color: ${C.amber} !important; color: ${C.amber} !important; }
        .row-hover:hover td { background: #161616 !important; }
        .del-btn:hover { border-color: ${C.red} !important; color: ${C.red} !important; }
        select option { background: ${C.surface}; color: ${C.text}; }
        @media (max-width: 640px) {
          .stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .tab-bar { gap: 6px !important; }
          .tab-btn { padding: 8px 12px !important; font-size: 12px !important; }
          .add-row { flex-direction: column !important; align-items: stretch !important; }
          .add-row input { max-width: 100% !important; }
          .promote-row { flex-direction: column !important; }
          .promote-row input { max-width: 100% !important; }
          .overflow-x { overflow-x: auto; -webkit-overflow-scrolling: touch; }
        }
      `}),a.jsx(dp,{}),a.jsxs("div",{style:{maxWidth:1300,margin:"0 auto",padding:"28px 16px"},children:[a.jsxs("div",{style:{marginBottom:28},children:[a.jsx("span",{style:{display:"inline-block",padding:"3px 12px",borderRadius:999,fontFamily:J,fontSize:10,letterSpacing:"0.1em",background:C.amberBg,color:C.amber,border:"1px solid rgba(212,168,71,0.25)",marginBottom:10},children:"ADMIN PANEL"}),a.jsx("h1",{style:{margin:0,fontSize:28,fontWeight:800,color:C.text,letterSpacing:"-0.04em",lineHeight:1.1},children:"Control Center"}),a.jsx("p",{style:{margin:"6px 0 0",fontFamily:J,fontSize:11,color:C.muted},children:"Manage parking slots · View bookings · Administer users"})]}),i&&a.jsx("div",{className:"stats-grid",style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(140px, 1fr))",gap:10,marginBottom:28},children:$e.map(({label:E,value:O,Icon:j,color:z,bg:I})=>a.jsxs("div",{style:{background:C.surface,border:`1px solid ${C.border}`,borderRadius:12,padding:"14px 16px"},children:[a.jsx("div",{style:{width:28,height:28,borderRadius:7,background:I,display:"flex",alignItems:"center",justifyContent:"center",marginBottom:10},children:a.jsx(j,{size:14,strokeWidth:1.5,color:z})}),a.jsx("div",{style:{fontSize:22,fontWeight:800,color:z,letterSpacing:"-0.03em",lineHeight:1},children:O}),a.jsx(nx,{style:{marginTop:4},children:E})]},E))}),a.jsx("div",{className:"tab-bar",style:{display:"flex",gap:8,marginBottom:20,flexWrap:"wrap"},children:he.map(({id:E,label:O,Icon:j})=>{const z=d===E;return a.jsxs("button",{className:"tab-btn",onClick:()=>p(E),style:{display:"flex",alignItems:"center",gap:7,padding:"9px 18px",borderRadius:9,border:`1px solid ${z?C.amber:C.border2}`,background:z?C.amberBg:"transparent",color:z?C.amber:C.muted,fontFamily:Cn,fontWeight:700,fontSize:13,cursor:"pointer",transition:"border-color 0.15s, color 0.15s"},children:[a.jsx(j,{size:13,strokeWidth:1.5}),O]},E)})}),d==="slots"&&a.jsxs("div",{children:[a.jsx(St,{style:{marginBottom:14,overflow:"visible"},children:a.jsxs("div",{className:"add-row",style:{padding:"16px 20px",display:"flex",alignItems:"center",gap:12,flexWrap:"wrap"},children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,flexShrink:0},children:[a.jsx(Sa,{size:14,strokeWidth:2,color:C.amber}),a.jsx("span",{style:{fontFamily:J,fontSize:11,color:C.amber,letterSpacing:"0.08em"},children:"ADD SLOT"})]}),a.jsx(cc,{value:y,onChange:E=>S(E.target.value),onKeyDown:E=>E.key==="Enter"&&D(),placeholder:"e.g. A-101",style:{flex:1,minWidth:140,maxWidth:220}}),a.jsx(dc,{onClick:D,disabled:g,loading:g,children:g?"Adding…":"Add Slot"})]})}),u?a.jsx(ui,{}):e.length===0?a.jsx(St,{children:a.jsx(ci,{Icon:To,title:"No slots yet",desc:"Add your first parking slot above."})}):a.jsx(St,{children:a.jsx("div",{className:"overflow-x",children:a.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",minWidth:560},children:[a.jsx("thead",{children:a.jsx("tr",{children:["SLOT","STATUS","BOOKED BY","LAST UPDATED","ACTIONS"].map(E=>a.jsx(ai,{children:E},E))})}),a.jsx("tbody",{children:e.map(E=>a.jsxs("tr",{className:"row-hover",children:[a.jsx(Re,{children:a.jsx("span",{style:{fontFamily:J,fontWeight:500,color:C.amber,fontSize:13},children:E.slotNumber})}),a.jsx(Re,{children:E.status==="free"?pn(C.greenBg,C.green,"FREE"):pn(C.redBg,C.red,"OCCUPIED")}),a.jsx(Re,{style:{fontFamily:J,fontSize:12,color:C.muted},children:E.bookedBy||"—"}),a.jsx(Re,{style:{fontFamily:J,fontSize:11,color:C.muted},children:uc(E.updatedAt)}),a.jsx(Re,{children:a.jsxs("div",{style:{display:"flex",gap:8,alignItems:"center"},children:[a.jsxs("select",{value:E.status,disabled:f===E.id,onChange:O=>A(E,O.target.value),style:{background:C.bg,border:`1px solid ${C.border2}`,borderRadius:7,padding:"5px 9px",fontFamily:J,fontSize:11,color:E.status==="free"?C.green:C.red,cursor:"pointer",outline:"none"},children:[a.jsx("option",{value:"free",children:"Free"}),a.jsx("option",{value:"occupied",children:"Occupied"})]}),a.jsx("button",{className:"del-btn",onClick:()=>h(E),style:{display:"flex",alignItems:"center",justifyContent:"center",width:30,height:30,borderRadius:7,border:`1px solid ${C.border2}`,background:"transparent",color:C.muted,cursor:"pointer",transition:"border-color 0.15s, color 0.15s"},children:a.jsx(Dy,{size:13,strokeWidth:1.5})})]})})]},E.id))})]})})})]}),d==="bookings"&&a.jsx("div",{children:u?a.jsx(ui,{}):n.length===0?a.jsx(St,{children:a.jsx(ci,{Icon:ii,title:"No bookings yet",desc:"Bookings will appear here when users book slots."})}):a.jsx(St,{children:a.jsx("div",{className:"overflow-x",children:a.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",minWidth:480},children:[a.jsx("thead",{children:a.jsx("tr",{children:["SLOT ID","USER","BOOKED AT","STATUS"].map(E=>a.jsx(ai,{children:E},E))})}),a.jsx("tbody",{children:n.map(E=>{var O;return a.jsxs("tr",{className:"row-hover",children:[a.jsx(Re,{children:a.jsx("span",{style:{fontFamily:J,color:C.amber,fontSize:12},children:E.slotId})}),a.jsxs(Re,{children:[a.jsx("div",{style:{fontWeight:700,fontSize:13,color:C.text},children:E.userName||"—"}),a.jsx("div",{style:{fontFamily:J,fontSize:10,color:C.muted,marginTop:2},children:E.userId})]}),a.jsx(Re,{style:{fontFamily:J,fontSize:11,color:C.muted},children:uc(E.bookingTime)}),a.jsx(Re,{children:E.status==="active"?pn(C.greenBg,C.green,"ACTIVE"):pn(C.dim,C.muted,(O=E.status)==null?void 0:O.toUpperCase())})]},E.id)})})]})})})}),d==="users"&&a.jsxs("div",{children:[a.jsxs(St,{style:{marginBottom:14,overflow:"visible"},children:[a.jsxs("div",{style:{padding:"16px 20px",borderBottom:`1px solid ${C.border}`},children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,marginBottom:3},children:[a.jsx(Oy,{size:13,strokeWidth:1.5,color:C.amber}),a.jsx("span",{style:{fontFamily:J,fontSize:11,color:C.amber,letterSpacing:"0.08em"},children:"PROMOTE TO ADMIN"})]}),a.jsx("p",{style:{margin:0,fontFamily:J,fontSize:10,color:C.muted},children:"Grant admin privileges by email address"})]}),a.jsxs("div",{className:"promote-row",style:{padding:"14px 20px",display:"flex",gap:12,flexWrap:"wrap"},children:[a.jsx(cc,{value:w,onChange:E=>N(E.target.value),onKeyDown:E=>E.key==="Enter"&&Q(),placeholder:"user@example.com",type:"email",style:{flex:1,minWidth:200,maxWidth:320}}),a.jsx(dc,{onClick:Q,disabled:_==="manual",loading:_==="manual",children:_==="manual"?"Promoting…":"Promote"})]})]}),u?a.jsx(ui,{}):o.length===0?a.jsx(St,{children:a.jsx(ci,{Icon:si,title:"No users yet",desc:"Users will appear here after they sign up."})}):a.jsxs(St,{children:[a.jsxs("div",{style:{padding:"12px 18px",borderBottom:`1px solid ${C.border}`,display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:8},children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10},children:[a.jsx("span",{style:{fontWeight:700,fontSize:14,color:C.text},children:"All Users"}),a.jsx("span",{style:{fontFamily:J,fontSize:10,color:C.amber,background:C.amberBg,padding:"2px 8px",borderRadius:999},children:o.length})]}),a.jsxs("span",{style:{fontFamily:J,fontSize:10,color:C.muted},children:[o.filter(E=>E.role==="admin").length," admin · ",o.filter(E=>E.role==="user").length," user"]})]}),a.jsx("div",{className:"overflow-x",children:a.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",minWidth:520},children:[a.jsx("thead",{children:a.jsx("tr",{children:["USER","EMAIL","ROLE","JOINED","ACTIONS"].map(E=>a.jsx(ai,{children:E},E))})}),a.jsx("tbody",{children:o.map(E=>{var O,j;return a.jsxs("tr",{className:"row-hover",children:[a.jsx(Re,{children:a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10},children:[a.jsx("div",{style:{width:32,height:32,borderRadius:"50%",flexShrink:0,background:E.role==="admin"?C.amberBg:C.blueBg,border:`1px solid ${E.role==="admin"?"rgba(212,168,71,0.3)":"rgba(56,189,248,0.3)"}`,display:"flex",alignItems:"center",justifyContent:"center",fontFamily:J,fontWeight:500,fontSize:12,color:E.role==="admin"?C.amber:C.blue},children:((j=(O=E.name)==null?void 0:O[0])==null?void 0:j.toUpperCase())||"?"}),a.jsx("span",{style:{fontWeight:700,fontSize:13,color:C.text},children:E.name})]})}),a.jsx(Re,{style:{fontFamily:J,fontSize:11,color:C.muted},children:E.email}),a.jsx(Re,{children:E.role==="admin"?pn(C.amberBg,C.amber,"ADMIN"):pn(C.blueBg,C.blue,"USER")}),a.jsx(Re,{style:{fontFamily:J,fontSize:11,color:C.muted},children:E.createdAt?E.createdAt._seconds?new Date(E.createdAt._seconds*1e3).toLocaleDateString():new Date(E.createdAt).toLocaleDateString():"—"}),a.jsx(Re,{children:E.role!=="admin"?a.jsxs("button",{onClick:()=>pe(E),disabled:_===E.userId,style:{display:"flex",alignItems:"center",gap:6,padding:"5px 12px",borderRadius:7,border:`1px solid ${_===E.userId?C.border2:"rgba(212,168,71,0.4)"}`,background:"transparent",color:_===E.userId?C.muted:C.amber,fontFamily:J,fontSize:11,cursor:_===E.userId?"not-allowed":"pointer",transition:"all 0.15s"},children:[_===E.userId?a.jsx(fp,{}):a.jsx(sp,{size:11,strokeWidth:2}),_===E.userId?"Promoting…":"Make Admin"]}):a.jsx("span",{style:{fontFamily:J,fontSize:10,color:C.muted,fontStyle:"italic"},children:"Already admin"})})]},E.userId)})})]})})]})]})]}),v&&a.jsx("div",{style:{position:"fixed",inset:0,zIndex:1e3,background:"rgba(0,0,0,0.8)",backdropFilter:"blur(6px)",display:"flex",alignItems:"center",justifyContent:"center",padding:16},children:a.jsxs("div",{style:{background:C.surface,border:`1px solid ${C.border}`,borderRadius:16,padding:"28px 24px",maxWidth:340,width:"100%",textAlign:"center"},children:[a.jsx("div",{style:{width:44,height:44,borderRadius:12,background:C.redBg,display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 16px"},children:a.jsx(ol,{size:20,strokeWidth:1.5,color:C.red})}),a.jsx("h3",{style:{margin:"0 0 8px",fontSize:17,fontWeight:800,color:C.text,letterSpacing:"-0.02em"},children:"Delete Slot?"}),a.jsxs("p",{style:{fontFamily:J,fontSize:11,color:C.muted,marginBottom:24,lineHeight:1.6},children:["Are you sure you want to delete slot"," ",a.jsx("span",{style:{color:C.amber},children:v.slotNumber}),"? This cannot be undone."]}),a.jsxs("div",{style:{display:"flex",gap:10},children:[a.jsx("button",{onClick:()=>h(null),style:{flex:1,padding:"11px",borderRadius:9,border:`1px solid ${C.border2}`,background:"transparent",color:C.muted,fontFamily:Cn,fontWeight:700,fontSize:13,cursor:"pointer"},children:"Cancel"}),a.jsx("button",{onClick:()=>oe(v),style:{flex:1,padding:"11px",borderRadius:9,border:"none",background:C.red,color:"#fff",fontFamily:Cn,fontWeight:700,fontSize:13,cursor:"pointer"},children:"Delete"})]})]})})]})}function ox(){return ha()?a.jsx(Bn,{to:pa()==="admin"?"/admin":"/dashboard",replace:!0}):a.jsx(Bn,{to:"/login",replace:!0})}function lx(){return a.jsxs(B0,{children:[a.jsx(q0,{}),a.jsxs(O0,{children:[a.jsx(qt,{path:"/",element:a.jsx(ox,{})}),a.jsx(qt,{path:"/login",element:a.jsx(W1,{})}),a.jsx(qt,{path:"/signup",element:a.jsx(Y1,{})}),a.jsx(qt,{path:"/dashboard",element:a.jsx(K0,{children:a.jsx(tx,{})})}),a.jsx(qt,{path:"/admin",element:a.jsx(Y0,{children:a.jsx(rx,{})})}),a.jsx(qt,{path:"*",element:a.jsx(Bn,{to:"/",replace:!0})})]})]})}di.createRoot(document.getElementById("root")).render(a.jsx(Sc.StrictMode,{children:a.jsx(lx,{})}));
