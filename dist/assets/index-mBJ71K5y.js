function cy(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function dy(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Ep={exports:{}},gl={},Sp={exports:{}},U={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _s=Symbol.for("react.element"),hy=Symbol.for("react.portal"),fy=Symbol.for("react.fragment"),py=Symbol.for("react.strict_mode"),my=Symbol.for("react.profiler"),gy=Symbol.for("react.provider"),_y=Symbol.for("react.context"),vy=Symbol.for("react.forward_ref"),yy=Symbol.for("react.suspense"),wy=Symbol.for("react.memo"),Ey=Symbol.for("react.lazy"),$d=Symbol.iterator;function Sy(t){return t===null||typeof t!="object"?null:(t=$d&&t[$d]||t["@@iterator"],typeof t=="function"?t:null)}var Cp={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ip=Object.assign,Tp={};function Kr(t,e,n){this.props=t,this.context=e,this.refs=Tp,this.updater=n||Cp}Kr.prototype.isReactComponent={};Kr.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Kr.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function kp(){}kp.prototype=Kr.prototype;function Xu(t,e,n){this.props=t,this.context=e,this.refs=Tp,this.updater=n||Cp}var Zu=Xu.prototype=new kp;Zu.constructor=Xu;Ip(Zu,Kr.prototype);Zu.isPureReactComponent=!0;var Gd=Array.isArray,Np=Object.prototype.hasOwnProperty,ec={current:null},Pp={key:!0,ref:!0,__self:!0,__source:!0};function Rp(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Np.call(e,r)&&!Pp.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var a=Array(l),u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:_s,type:t,key:s,ref:o,props:i,_owner:ec.current}}function Cy(t,e){return{$$typeof:_s,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function tc(t){return typeof t=="object"&&t!==null&&t.$$typeof===_s}function Iy(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Kd=/\/+/g;function Ql(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Iy(""+t.key):e.toString(36)}function io(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case _s:case hy:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Ql(o,0):r,Gd(i)?(n="",t!=null&&(n=t.replace(Kd,"$&/")+"/"),io(i,e,n,"",function(u){return u})):i!=null&&(tc(i)&&(i=Cy(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Kd,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Gd(t))for(var l=0;l<t.length;l++){s=t[l];var a=r+Ql(s,l);o+=io(s,e,n,a,i)}else if(a=Sy(t),typeof a=="function")for(t=a.call(t),l=0;!(s=t.next()).done;)s=s.value,a=r+Ql(s,l++),o+=io(s,e,n,a,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Us(t,e,n){if(t==null)return t;var r=[],i=0;return io(t,r,"","",function(s){return e.call(n,s,i++)}),r}function Ty(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var xe={current:null},so={transition:null},ky={ReactCurrentDispatcher:xe,ReactCurrentBatchConfig:so,ReactCurrentOwner:ec};function xp(){throw Error("act(...) is not supported in production builds of React.")}U.Children={map:Us,forEach:function(t,e,n){Us(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Us(t,function(){e++}),e},toArray:function(t){return Us(t,function(e){return e})||[]},only:function(t){if(!tc(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};U.Component=Kr;U.Fragment=fy;U.Profiler=my;U.PureComponent=Xu;U.StrictMode=py;U.Suspense=yy;U.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ky;U.act=xp;U.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Ip({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=ec.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(a in e)Np.call(e,a)&&!Pp.hasOwnProperty(a)&&(r[a]=e[a]===void 0&&l!==void 0?l[a]:e[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){l=Array(a);for(var u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:_s,type:t.type,key:i,ref:s,props:r,_owner:o}};U.createContext=function(t){return t={$$typeof:_y,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:gy,_context:t},t.Consumer=t};U.createElement=Rp;U.createFactory=function(t){var e=Rp.bind(null,t);return e.type=t,e};U.createRef=function(){return{current:null}};U.forwardRef=function(t){return{$$typeof:vy,render:t}};U.isValidElement=tc;U.lazy=function(t){return{$$typeof:Ey,_payload:{_status:-1,_result:t},_init:Ty}};U.memo=function(t,e){return{$$typeof:wy,type:t,compare:e===void 0?null:e}};U.startTransition=function(t){var e=so.transition;so.transition={};try{t()}finally{so.transition=e}};U.unstable_act=xp;U.useCallback=function(t,e){return xe.current.useCallback(t,e)};U.useContext=function(t){return xe.current.useContext(t)};U.useDebugValue=function(){};U.useDeferredValue=function(t){return xe.current.useDeferredValue(t)};U.useEffect=function(t,e){return xe.current.useEffect(t,e)};U.useId=function(){return xe.current.useId()};U.useImperativeHandle=function(t,e,n){return xe.current.useImperativeHandle(t,e,n)};U.useInsertionEffect=function(t,e){return xe.current.useInsertionEffect(t,e)};U.useLayoutEffect=function(t,e){return xe.current.useLayoutEffect(t,e)};U.useMemo=function(t,e){return xe.current.useMemo(t,e)};U.useReducer=function(t,e,n){return xe.current.useReducer(t,e,n)};U.useRef=function(t){return xe.current.useRef(t)};U.useState=function(t){return xe.current.useState(t)};U.useSyncExternalStore=function(t,e,n){return xe.current.useSyncExternalStore(t,e,n)};U.useTransition=function(){return xe.current.useTransition()};U.version="18.3.1";Sp.exports=U;var E=Sp.exports;const lr=dy(E),Ny=cy({__proto__:null,default:lr},[E]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Py=E,Ry=Symbol.for("react.element"),xy=Symbol.for("react.fragment"),Ay=Object.prototype.hasOwnProperty,Oy=Py.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Ly={key:!0,ref:!0,__self:!0,__source:!0};function Ap(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)Ay.call(e,r)&&!Ly.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:Ry,type:t,key:s,ref:o,props:i,_owner:Oy.current}}gl.Fragment=xy;gl.jsx=Ap;gl.jsxs=Ap;Ep.exports=gl;var v=Ep.exports,Op={exports:{}},He={},Lp={exports:{}},Dp={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(N,L){var D=N.length;N.push(L);e:for(;0<D;){var re=D-1>>>1,de=N[re];if(0<i(de,L))N[re]=L,N[D]=de,D=re;else break e}}function n(N){return N.length===0?null:N[0]}function r(N){if(N.length===0)return null;var L=N[0],D=N.pop();if(D!==L){N[0]=D;e:for(var re=0,de=N.length,bs=de>>>1;re<bs;){var An=2*(re+1)-1,Kl=N[An],On=An+1,Fs=N[On];if(0>i(Kl,D))On<de&&0>i(Fs,Kl)?(N[re]=Fs,N[On]=D,re=On):(N[re]=Kl,N[An]=D,re=An);else if(On<de&&0>i(Fs,D))N[re]=Fs,N[On]=D,re=On;else break e}}return L}function i(N,L){var D=N.sortIndex-L.sortIndex;return D!==0?D:N.id-L.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var a=[],u=[],d=1,c=null,h=3,g=!1,_=!1,y=!1,C=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(N){for(var L=n(u);L!==null;){if(L.callback===null)r(u);else if(L.startTime<=N)r(u),L.sortIndex=L.expirationTime,e(a,L);else break;L=n(u)}}function w(N){if(y=!1,m(N),!_)if(n(a)!==null)_=!0,$l(T);else{var L=n(u);L!==null&&Gl(w,L.startTime-N)}}function T(N,L){_=!1,y&&(y=!1,p(x),x=-1),g=!0;var D=h;try{for(m(L),c=n(a);c!==null&&(!(c.expirationTime>L)||N&&!Xe());){var re=c.callback;if(typeof re=="function"){c.callback=null,h=c.priorityLevel;var de=re(c.expirationTime<=L);L=t.unstable_now(),typeof de=="function"?c.callback=de:c===n(a)&&r(a),m(L)}else r(a);c=n(a)}if(c!==null)var bs=!0;else{var An=n(u);An!==null&&Gl(w,An.startTime-L),bs=!1}return bs}finally{c=null,h=D,g=!1}}var P=!1,R=null,x=-1,K=5,b=-1;function Xe(){return!(t.unstable_now()-b<K)}function si(){if(R!==null){var N=t.unstable_now();b=N;var L=!0;try{L=R(!0,N)}finally{L?oi():(P=!1,R=null)}}else P=!1}var oi;if(typeof f=="function")oi=function(){f(si)};else if(typeof MessageChannel<"u"){var Hd=new MessageChannel,uy=Hd.port2;Hd.port1.onmessage=si,oi=function(){uy.postMessage(null)}}else oi=function(){C(si,0)};function $l(N){R=N,P||(P=!0,oi())}function Gl(N,L){x=C(function(){N(t.unstable_now())},L)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(N){N.callback=null},t.unstable_continueExecution=function(){_||g||(_=!0,$l(T))},t.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):K=0<N?Math.floor(1e3/N):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(a)},t.unstable_next=function(N){switch(h){case 1:case 2:case 3:var L=3;break;default:L=h}var D=h;h=L;try{return N()}finally{h=D}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(N,L){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var D=h;h=N;try{return L()}finally{h=D}},t.unstable_scheduleCallback=function(N,L,D){var re=t.unstable_now();switch(typeof D=="object"&&D!==null?(D=D.delay,D=typeof D=="number"&&0<D?re+D:re):D=re,N){case 1:var de=-1;break;case 2:de=250;break;case 5:de=1073741823;break;case 4:de=1e4;break;default:de=5e3}return de=D+de,N={id:d++,callback:L,priorityLevel:N,startTime:D,expirationTime:de,sortIndex:-1},D>re?(N.sortIndex=D,e(u,N),n(a)===null&&N===n(u)&&(y?(p(x),x=-1):y=!0,Gl(w,D-re))):(N.sortIndex=de,e(a,N),_||g||(_=!0,$l(T))),N},t.unstable_shouldYield=Xe,t.unstable_wrapCallback=function(N){var L=h;return function(){var D=h;h=L;try{return N.apply(this,arguments)}finally{h=D}}}})(Dp);Lp.exports=Dp;var Dy=Lp.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var My=E,Ve=Dy;function S(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Mp=new Set,zi={};function tr(t,e){Mr(t,e),Mr(t+"Capture",e)}function Mr(t,e){for(zi[t]=e,t=0;t<e.length;t++)Mp.add(e[t])}var At=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ma=Object.prototype.hasOwnProperty,by=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Qd={},qd={};function Fy(t){return Ma.call(qd,t)?!0:Ma.call(Qd,t)?!1:by.test(t)?qd[t]=!0:(Qd[t]=!0,!1)}function Uy(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function jy(t,e,n,r){if(e===null||typeof e>"u"||Uy(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Ae(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var ye={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){ye[t]=new Ae(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];ye[e]=new Ae(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){ye[t]=new Ae(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){ye[t]=new Ae(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){ye[t]=new Ae(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){ye[t]=new Ae(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){ye[t]=new Ae(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){ye[t]=new Ae(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){ye[t]=new Ae(t,5,!1,t.toLowerCase(),null,!1,!1)});var nc=/[\-:]([a-z])/g;function rc(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(nc,rc);ye[e]=new Ae(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(nc,rc);ye[e]=new Ae(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(nc,rc);ye[e]=new Ae(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){ye[t]=new Ae(t,1,!1,t.toLowerCase(),null,!1,!1)});ye.xlinkHref=new Ae("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){ye[t]=new Ae(t,1,!1,t.toLowerCase(),null,!0,!0)});function ic(t,e,n,r){var i=ye.hasOwnProperty(e)?ye[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(jy(e,n,i,r)&&(n=null),r||i===null?Fy(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Ut=My.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,js=Symbol.for("react.element"),ar=Symbol.for("react.portal"),ur=Symbol.for("react.fragment"),sc=Symbol.for("react.strict_mode"),ba=Symbol.for("react.profiler"),bp=Symbol.for("react.provider"),Fp=Symbol.for("react.context"),oc=Symbol.for("react.forward_ref"),Fa=Symbol.for("react.suspense"),Ua=Symbol.for("react.suspense_list"),lc=Symbol.for("react.memo"),$t=Symbol.for("react.lazy"),Up=Symbol.for("react.offscreen"),Yd=Symbol.iterator;function li(t){return t===null||typeof t!="object"?null:(t=Yd&&t[Yd]||t["@@iterator"],typeof t=="function"?t:null)}var te=Object.assign,ql;function yi(t){if(ql===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);ql=e&&e[1]||""}return`
`+ql+t}var Yl=!1;function Jl(t,e){if(!t||Yl)return"";Yl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var a=`
`+i[o].replace(" at new "," at ");return t.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",t.displayName)),a}while(1<=o&&0<=l);break}}}finally{Yl=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?yi(t):""}function By(t){switch(t.tag){case 5:return yi(t.type);case 16:return yi("Lazy");case 13:return yi("Suspense");case 19:return yi("SuspenseList");case 0:case 2:case 15:return t=Jl(t.type,!1),t;case 11:return t=Jl(t.type.render,!1),t;case 1:return t=Jl(t.type,!0),t;default:return""}}function ja(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ur:return"Fragment";case ar:return"Portal";case ba:return"Profiler";case sc:return"StrictMode";case Fa:return"Suspense";case Ua:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Fp:return(t.displayName||"Context")+".Consumer";case bp:return(t._context.displayName||"Context")+".Provider";case oc:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case lc:return e=t.displayName||null,e!==null?e:ja(t.type)||"Memo";case $t:e=t._payload,t=t._init;try{return ja(t(e))}catch{}}return null}function zy(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ja(e);case 8:return e===sc?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function vn(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function jp(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Wy(t){var e=jp(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Bs(t){t._valueTracker||(t._valueTracker=Wy(t))}function Bp(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=jp(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function So(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Ba(t,e){var n=e.checked;return te({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Jd(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=vn(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function zp(t,e){e=e.checked,e!=null&&ic(t,"checked",e,!1)}function za(t,e){zp(t,e);var n=vn(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Wa(t,e.type,n):e.hasOwnProperty("defaultValue")&&Wa(t,e.type,vn(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Xd(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Wa(t,e,n){(e!=="number"||So(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var wi=Array.isArray;function Ir(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+vn(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Va(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(S(91));return te({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Zd(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(S(92));if(wi(n)){if(1<n.length)throw Error(S(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:vn(n)}}function Wp(t,e){var n=vn(e.value),r=vn(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function eh(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Vp(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ha(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Vp(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var zs,Hp=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(zs=zs||document.createElement("div"),zs.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=zs.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Wi(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ti={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Vy=["Webkit","ms","Moz","O"];Object.keys(Ti).forEach(function(t){Vy.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ti[e]=Ti[t]})});function $p(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ti.hasOwnProperty(t)&&Ti[t]?(""+e).trim():e+"px"}function Gp(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=$p(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var Hy=te({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function $a(t,e){if(e){if(Hy[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(S(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(S(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(S(61))}if(e.style!=null&&typeof e.style!="object")throw Error(S(62))}}function Ga(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ka=null;function ac(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Qa=null,Tr=null,kr=null;function th(t){if(t=ws(t)){if(typeof Qa!="function")throw Error(S(280));var e=t.stateNode;e&&(e=El(e),Qa(t.stateNode,t.type,e))}}function Kp(t){Tr?kr?kr.push(t):kr=[t]:Tr=t}function Qp(){if(Tr){var t=Tr,e=kr;if(kr=Tr=null,th(t),e)for(t=0;t<e.length;t++)th(e[t])}}function qp(t,e){return t(e)}function Yp(){}var Xl=!1;function Jp(t,e,n){if(Xl)return t(e,n);Xl=!0;try{return qp(t,e,n)}finally{Xl=!1,(Tr!==null||kr!==null)&&(Yp(),Qp())}}function Vi(t,e){var n=t.stateNode;if(n===null)return null;var r=El(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(S(231,e,typeof n));return n}var qa=!1;if(At)try{var ai={};Object.defineProperty(ai,"passive",{get:function(){qa=!0}}),window.addEventListener("test",ai,ai),window.removeEventListener("test",ai,ai)}catch{qa=!1}function $y(t,e,n,r,i,s,o,l,a){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(d){this.onError(d)}}var ki=!1,Co=null,Io=!1,Ya=null,Gy={onError:function(t){ki=!0,Co=t}};function Ky(t,e,n,r,i,s,o,l,a){ki=!1,Co=null,$y.apply(Gy,arguments)}function Qy(t,e,n,r,i,s,o,l,a){if(Ky.apply(this,arguments),ki){if(ki){var u=Co;ki=!1,Co=null}else throw Error(S(198));Io||(Io=!0,Ya=u)}}function nr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Xp(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function nh(t){if(nr(t)!==t)throw Error(S(188))}function qy(t){var e=t.alternate;if(!e){if(e=nr(t),e===null)throw Error(S(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return nh(i),t;if(s===r)return nh(i),e;s=s.sibling}throw Error(S(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(S(189))}}if(n.alternate!==r)throw Error(S(190))}if(n.tag!==3)throw Error(S(188));return n.stateNode.current===n?t:e}function Zp(t){return t=qy(t),t!==null?em(t):null}function em(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=em(t);if(e!==null)return e;t=t.sibling}return null}var tm=Ve.unstable_scheduleCallback,rh=Ve.unstable_cancelCallback,Yy=Ve.unstable_shouldYield,Jy=Ve.unstable_requestPaint,ie=Ve.unstable_now,Xy=Ve.unstable_getCurrentPriorityLevel,uc=Ve.unstable_ImmediatePriority,nm=Ve.unstable_UserBlockingPriority,To=Ve.unstable_NormalPriority,Zy=Ve.unstable_LowPriority,rm=Ve.unstable_IdlePriority,_l=null,mt=null;function ew(t){if(mt&&typeof mt.onCommitFiberRoot=="function")try{mt.onCommitFiberRoot(_l,t,void 0,(t.current.flags&128)===128)}catch{}}var ot=Math.clz32?Math.clz32:rw,tw=Math.log,nw=Math.LN2;function rw(t){return t>>>=0,t===0?32:31-(tw(t)/nw|0)|0}var Ws=64,Vs=4194304;function Ei(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function ko(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=Ei(l):(s&=o,s!==0&&(r=Ei(s)))}else o=n&~i,o!==0?r=Ei(o):s!==0&&(r=Ei(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-ot(e),i=1<<n,r|=t[n],e&=~i;return r}function iw(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function sw(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-ot(s),l=1<<o,a=i[o];a===-1?(!(l&n)||l&r)&&(i[o]=iw(l,e)):a<=e&&(t.expiredLanes|=l),s&=~l}}function Ja(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function im(){var t=Ws;return Ws<<=1,!(Ws&4194240)&&(Ws=64),t}function Zl(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function vs(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-ot(e),t[e]=n}function ow(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-ot(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function cc(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-ot(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var W=0;function sm(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var om,dc,lm,am,um,Xa=!1,Hs=[],nn=null,rn=null,sn=null,Hi=new Map,$i=new Map,Kt=[],lw="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ih(t,e){switch(t){case"focusin":case"focusout":nn=null;break;case"dragenter":case"dragleave":rn=null;break;case"mouseover":case"mouseout":sn=null;break;case"pointerover":case"pointerout":Hi.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":$i.delete(e.pointerId)}}function ui(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=ws(e),e!==null&&dc(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function aw(t,e,n,r,i){switch(e){case"focusin":return nn=ui(nn,t,e,n,r,i),!0;case"dragenter":return rn=ui(rn,t,e,n,r,i),!0;case"mouseover":return sn=ui(sn,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Hi.set(s,ui(Hi.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,$i.set(s,ui($i.get(s)||null,t,e,n,r,i)),!0}return!1}function cm(t){var e=Fn(t.target);if(e!==null){var n=nr(e);if(n!==null){if(e=n.tag,e===13){if(e=Xp(n),e!==null){t.blockedOn=e,um(t.priority,function(){lm(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function oo(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Za(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Ka=r,n.target.dispatchEvent(r),Ka=null}else return e=ws(n),e!==null&&dc(e),t.blockedOn=n,!1;e.shift()}return!0}function sh(t,e,n){oo(t)&&n.delete(e)}function uw(){Xa=!1,nn!==null&&oo(nn)&&(nn=null),rn!==null&&oo(rn)&&(rn=null),sn!==null&&oo(sn)&&(sn=null),Hi.forEach(sh),$i.forEach(sh)}function ci(t,e){t.blockedOn===e&&(t.blockedOn=null,Xa||(Xa=!0,Ve.unstable_scheduleCallback(Ve.unstable_NormalPriority,uw)))}function Gi(t){function e(i){return ci(i,t)}if(0<Hs.length){ci(Hs[0],t);for(var n=1;n<Hs.length;n++){var r=Hs[n];r.blockedOn===t&&(r.blockedOn=null)}}for(nn!==null&&ci(nn,t),rn!==null&&ci(rn,t),sn!==null&&ci(sn,t),Hi.forEach(e),$i.forEach(e),n=0;n<Kt.length;n++)r=Kt[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Kt.length&&(n=Kt[0],n.blockedOn===null);)cm(n),n.blockedOn===null&&Kt.shift()}var Nr=Ut.ReactCurrentBatchConfig,No=!0;function cw(t,e,n,r){var i=W,s=Nr.transition;Nr.transition=null;try{W=1,hc(t,e,n,r)}finally{W=i,Nr.transition=s}}function dw(t,e,n,r){var i=W,s=Nr.transition;Nr.transition=null;try{W=4,hc(t,e,n,r)}finally{W=i,Nr.transition=s}}function hc(t,e,n,r){if(No){var i=Za(t,e,n,r);if(i===null)ua(t,e,r,Po,n),ih(t,r);else if(aw(i,t,e,n,r))r.stopPropagation();else if(ih(t,r),e&4&&-1<lw.indexOf(t)){for(;i!==null;){var s=ws(i);if(s!==null&&om(s),s=Za(t,e,n,r),s===null&&ua(t,e,r,Po,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else ua(t,e,r,null,n)}}var Po=null;function Za(t,e,n,r){if(Po=null,t=ac(r),t=Fn(t),t!==null)if(e=nr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Xp(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Po=t,null}function dm(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Xy()){case uc:return 1;case nm:return 4;case To:case Zy:return 16;case rm:return 536870912;default:return 16}default:return 16}}var Zt=null,fc=null,lo=null;function hm(){if(lo)return lo;var t,e=fc,n=e.length,r,i="value"in Zt?Zt.value:Zt.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return lo=i.slice(t,1<r?1-r:void 0)}function ao(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function $s(){return!0}function oh(){return!1}function $e(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?$s:oh,this.isPropagationStopped=oh,this}return te(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=$s)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=$s)},persist:function(){},isPersistent:$s}),e}var Qr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},pc=$e(Qr),ys=te({},Qr,{view:0,detail:0}),hw=$e(ys),ea,ta,di,vl=te({},ys,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:mc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==di&&(di&&t.type==="mousemove"?(ea=t.screenX-di.screenX,ta=t.screenY-di.screenY):ta=ea=0,di=t),ea)},movementY:function(t){return"movementY"in t?t.movementY:ta}}),lh=$e(vl),fw=te({},vl,{dataTransfer:0}),pw=$e(fw),mw=te({},ys,{relatedTarget:0}),na=$e(mw),gw=te({},Qr,{animationName:0,elapsedTime:0,pseudoElement:0}),_w=$e(gw),vw=te({},Qr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),yw=$e(vw),ww=te({},Qr,{data:0}),ah=$e(ww),Ew={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Sw={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Cw={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Iw(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Cw[t])?!!e[t]:!1}function mc(){return Iw}var Tw=te({},ys,{key:function(t){if(t.key){var e=Ew[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=ao(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Sw[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:mc,charCode:function(t){return t.type==="keypress"?ao(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ao(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),kw=$e(Tw),Nw=te({},vl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),uh=$e(Nw),Pw=te({},ys,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:mc}),Rw=$e(Pw),xw=te({},Qr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Aw=$e(xw),Ow=te({},vl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Lw=$e(Ow),Dw=[9,13,27,32],gc=At&&"CompositionEvent"in window,Ni=null;At&&"documentMode"in document&&(Ni=document.documentMode);var Mw=At&&"TextEvent"in window&&!Ni,fm=At&&(!gc||Ni&&8<Ni&&11>=Ni),ch=" ",dh=!1;function pm(t,e){switch(t){case"keyup":return Dw.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function mm(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var cr=!1;function bw(t,e){switch(t){case"compositionend":return mm(e);case"keypress":return e.which!==32?null:(dh=!0,ch);case"textInput":return t=e.data,t===ch&&dh?null:t;default:return null}}function Fw(t,e){if(cr)return t==="compositionend"||!gc&&pm(t,e)?(t=hm(),lo=fc=Zt=null,cr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return fm&&e.locale!=="ko"?null:e.data;default:return null}}var Uw={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function hh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Uw[t.type]:e==="textarea"}function gm(t,e,n,r){Kp(r),e=Ro(e,"onChange"),0<e.length&&(n=new pc("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Pi=null,Ki=null;function jw(t){Nm(t,0)}function yl(t){var e=fr(t);if(Bp(e))return t}function Bw(t,e){if(t==="change")return e}var _m=!1;if(At){var ra;if(At){var ia="oninput"in document;if(!ia){var fh=document.createElement("div");fh.setAttribute("oninput","return;"),ia=typeof fh.oninput=="function"}ra=ia}else ra=!1;_m=ra&&(!document.documentMode||9<document.documentMode)}function ph(){Pi&&(Pi.detachEvent("onpropertychange",vm),Ki=Pi=null)}function vm(t){if(t.propertyName==="value"&&yl(Ki)){var e=[];gm(e,Ki,t,ac(t)),Jp(jw,e)}}function zw(t,e,n){t==="focusin"?(ph(),Pi=e,Ki=n,Pi.attachEvent("onpropertychange",vm)):t==="focusout"&&ph()}function Ww(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return yl(Ki)}function Vw(t,e){if(t==="click")return yl(e)}function Hw(t,e){if(t==="input"||t==="change")return yl(e)}function $w(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ut=typeof Object.is=="function"?Object.is:$w;function Qi(t,e){if(ut(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Ma.call(e,i)||!ut(t[i],e[i]))return!1}return!0}function mh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function gh(t,e){var n=mh(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=mh(n)}}function ym(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?ym(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function wm(){for(var t=window,e=So();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=So(t.document)}return e}function _c(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Gw(t){var e=wm(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&ym(n.ownerDocument.documentElement,n)){if(r!==null&&_c(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=gh(n,s);var o=gh(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Kw=At&&"documentMode"in document&&11>=document.documentMode,dr=null,eu=null,Ri=null,tu=!1;function _h(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;tu||dr==null||dr!==So(r)||(r=dr,"selectionStart"in r&&_c(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ri&&Qi(Ri,r)||(Ri=r,r=Ro(eu,"onSelect"),0<r.length&&(e=new pc("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=dr)))}function Gs(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var hr={animationend:Gs("Animation","AnimationEnd"),animationiteration:Gs("Animation","AnimationIteration"),animationstart:Gs("Animation","AnimationStart"),transitionend:Gs("Transition","TransitionEnd")},sa={},Em={};At&&(Em=document.createElement("div").style,"AnimationEvent"in window||(delete hr.animationend.animation,delete hr.animationiteration.animation,delete hr.animationstart.animation),"TransitionEvent"in window||delete hr.transitionend.transition);function wl(t){if(sa[t])return sa[t];if(!hr[t])return t;var e=hr[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Em)return sa[t]=e[n];return t}var Sm=wl("animationend"),Cm=wl("animationiteration"),Im=wl("animationstart"),Tm=wl("transitionend"),km=new Map,vh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function In(t,e){km.set(t,e),tr(e,[t])}for(var oa=0;oa<vh.length;oa++){var la=vh[oa],Qw=la.toLowerCase(),qw=la[0].toUpperCase()+la.slice(1);In(Qw,"on"+qw)}In(Sm,"onAnimationEnd");In(Cm,"onAnimationIteration");In(Im,"onAnimationStart");In("dblclick","onDoubleClick");In("focusin","onFocus");In("focusout","onBlur");In(Tm,"onTransitionEnd");Mr("onMouseEnter",["mouseout","mouseover"]);Mr("onMouseLeave",["mouseout","mouseover"]);Mr("onPointerEnter",["pointerout","pointerover"]);Mr("onPointerLeave",["pointerout","pointerover"]);tr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));tr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));tr("onBeforeInput",["compositionend","keypress","textInput","paste"]);tr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));tr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));tr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Si="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Yw=new Set("cancel close invalid load scroll toggle".split(" ").concat(Si));function yh(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,Qy(r,e,void 0,t),t.currentTarget=null}function Nm(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],a=l.instance,u=l.currentTarget;if(l=l.listener,a!==s&&i.isPropagationStopped())break e;yh(i,l,u),s=a}else for(o=0;o<r.length;o++){if(l=r[o],a=l.instance,u=l.currentTarget,l=l.listener,a!==s&&i.isPropagationStopped())break e;yh(i,l,u),s=a}}}if(Io)throw t=Ya,Io=!1,Ya=null,t}function Q(t,e){var n=e[ou];n===void 0&&(n=e[ou]=new Set);var r=t+"__bubble";n.has(r)||(Pm(e,t,2,!1),n.add(r))}function aa(t,e,n){var r=0;e&&(r|=4),Pm(n,t,r,e)}var Ks="_reactListening"+Math.random().toString(36).slice(2);function qi(t){if(!t[Ks]){t[Ks]=!0,Mp.forEach(function(n){n!=="selectionchange"&&(Yw.has(n)||aa(n,!1,t),aa(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ks]||(e[Ks]=!0,aa("selectionchange",!1,e))}}function Pm(t,e,n,r){switch(dm(e)){case 1:var i=cw;break;case 4:i=dw;break;default:i=hc}n=i.bind(null,e,n,t),i=void 0,!qa||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function ua(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var a=o.tag;if((a===3||a===4)&&(a=o.stateNode.containerInfo,a===i||a.nodeType===8&&a.parentNode===i))return;o=o.return}for(;l!==null;){if(o=Fn(l),o===null)return;if(a=o.tag,a===5||a===6){r=s=o;continue e}l=l.parentNode}}r=r.return}Jp(function(){var u=s,d=ac(n),c=[];e:{var h=km.get(t);if(h!==void 0){var g=pc,_=t;switch(t){case"keypress":if(ao(n)===0)break e;case"keydown":case"keyup":g=kw;break;case"focusin":_="focus",g=na;break;case"focusout":_="blur",g=na;break;case"beforeblur":case"afterblur":g=na;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=lh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=pw;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=Rw;break;case Sm:case Cm:case Im:g=_w;break;case Tm:g=Aw;break;case"scroll":g=hw;break;case"wheel":g=Lw;break;case"copy":case"cut":case"paste":g=yw;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=uh}var y=(e&4)!==0,C=!y&&t==="scroll",p=y?h!==null?h+"Capture":null:h;y=[];for(var f=u,m;f!==null;){m=f;var w=m.stateNode;if(m.tag===5&&w!==null&&(m=w,p!==null&&(w=Vi(f,p),w!=null&&y.push(Yi(f,w,m)))),C)break;f=f.return}0<y.length&&(h=new g(h,_,null,n,d),c.push({event:h,listeners:y}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",h&&n!==Ka&&(_=n.relatedTarget||n.fromElement)&&(Fn(_)||_[Ot]))break e;if((g||h)&&(h=d.window===d?d:(h=d.ownerDocument)?h.defaultView||h.parentWindow:window,g?(_=n.relatedTarget||n.toElement,g=u,_=_?Fn(_):null,_!==null&&(C=nr(_),_!==C||_.tag!==5&&_.tag!==6)&&(_=null)):(g=null,_=u),g!==_)){if(y=lh,w="onMouseLeave",p="onMouseEnter",f="mouse",(t==="pointerout"||t==="pointerover")&&(y=uh,w="onPointerLeave",p="onPointerEnter",f="pointer"),C=g==null?h:fr(g),m=_==null?h:fr(_),h=new y(w,f+"leave",g,n,d),h.target=C,h.relatedTarget=m,w=null,Fn(d)===u&&(y=new y(p,f+"enter",_,n,d),y.target=m,y.relatedTarget=C,w=y),C=w,g&&_)t:{for(y=g,p=_,f=0,m=y;m;m=sr(m))f++;for(m=0,w=p;w;w=sr(w))m++;for(;0<f-m;)y=sr(y),f--;for(;0<m-f;)p=sr(p),m--;for(;f--;){if(y===p||p!==null&&y===p.alternate)break t;y=sr(y),p=sr(p)}y=null}else y=null;g!==null&&wh(c,h,g,y,!1),_!==null&&C!==null&&wh(c,C,_,y,!0)}}e:{if(h=u?fr(u):window,g=h.nodeName&&h.nodeName.toLowerCase(),g==="select"||g==="input"&&h.type==="file")var T=Bw;else if(hh(h))if(_m)T=Hw;else{T=Ww;var P=zw}else(g=h.nodeName)&&g.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(T=Vw);if(T&&(T=T(t,u))){gm(c,T,n,d);break e}P&&P(t,h,u),t==="focusout"&&(P=h._wrapperState)&&P.controlled&&h.type==="number"&&Wa(h,"number",h.value)}switch(P=u?fr(u):window,t){case"focusin":(hh(P)||P.contentEditable==="true")&&(dr=P,eu=u,Ri=null);break;case"focusout":Ri=eu=dr=null;break;case"mousedown":tu=!0;break;case"contextmenu":case"mouseup":case"dragend":tu=!1,_h(c,n,d);break;case"selectionchange":if(Kw)break;case"keydown":case"keyup":_h(c,n,d)}var R;if(gc)e:{switch(t){case"compositionstart":var x="onCompositionStart";break e;case"compositionend":x="onCompositionEnd";break e;case"compositionupdate":x="onCompositionUpdate";break e}x=void 0}else cr?pm(t,n)&&(x="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(x="onCompositionStart");x&&(fm&&n.locale!=="ko"&&(cr||x!=="onCompositionStart"?x==="onCompositionEnd"&&cr&&(R=hm()):(Zt=d,fc="value"in Zt?Zt.value:Zt.textContent,cr=!0)),P=Ro(u,x),0<P.length&&(x=new ah(x,t,null,n,d),c.push({event:x,listeners:P}),R?x.data=R:(R=mm(n),R!==null&&(x.data=R)))),(R=Mw?bw(t,n):Fw(t,n))&&(u=Ro(u,"onBeforeInput"),0<u.length&&(d=new ah("onBeforeInput","beforeinput",null,n,d),c.push({event:d,listeners:u}),d.data=R))}Nm(c,e)})}function Yi(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Ro(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Vi(t,n),s!=null&&r.unshift(Yi(t,s,i)),s=Vi(t,e),s!=null&&r.push(Yi(t,s,i))),t=t.return}return r}function sr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function wh(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,a=l.alternate,u=l.stateNode;if(a!==null&&a===r)break;l.tag===5&&u!==null&&(l=u,i?(a=Vi(n,s),a!=null&&o.unshift(Yi(n,a,l))):i||(a=Vi(n,s),a!=null&&o.push(Yi(n,a,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var Jw=/\r\n?/g,Xw=/\u0000|\uFFFD/g;function Eh(t){return(typeof t=="string"?t:""+t).replace(Jw,`
`).replace(Xw,"")}function Qs(t,e,n){if(e=Eh(e),Eh(t)!==e&&n)throw Error(S(425))}function xo(){}var nu=null,ru=null;function iu(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var su=typeof setTimeout=="function"?setTimeout:void 0,Zw=typeof clearTimeout=="function"?clearTimeout:void 0,Sh=typeof Promise=="function"?Promise:void 0,e0=typeof queueMicrotask=="function"?queueMicrotask:typeof Sh<"u"?function(t){return Sh.resolve(null).then(t).catch(t0)}:su;function t0(t){setTimeout(function(){throw t})}function ca(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Gi(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Gi(e)}function on(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Ch(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var qr=Math.random().toString(36).slice(2),ft="__reactFiber$"+qr,Ji="__reactProps$"+qr,Ot="__reactContainer$"+qr,ou="__reactEvents$"+qr,n0="__reactListeners$"+qr,r0="__reactHandles$"+qr;function Fn(t){var e=t[ft];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Ot]||n[ft]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Ch(t);t!==null;){if(n=t[ft])return n;t=Ch(t)}return e}t=n,n=t.parentNode}return null}function ws(t){return t=t[ft]||t[Ot],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function fr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(S(33))}function El(t){return t[Ji]||null}var lu=[],pr=-1;function Tn(t){return{current:t}}function Y(t){0>pr||(t.current=lu[pr],lu[pr]=null,pr--)}function G(t,e){pr++,lu[pr]=t.current,t.current=e}var yn={},Ie=Tn(yn),Me=Tn(!1),Vn=yn;function br(t,e){var n=t.type.contextTypes;if(!n)return yn;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function be(t){return t=t.childContextTypes,t!=null}function Ao(){Y(Me),Y(Ie)}function Ih(t,e,n){if(Ie.current!==yn)throw Error(S(168));G(Ie,e),G(Me,n)}function Rm(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(S(108,zy(t)||"Unknown",i));return te({},n,r)}function Oo(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||yn,Vn=Ie.current,G(Ie,t),G(Me,Me.current),!0}function Th(t,e,n){var r=t.stateNode;if(!r)throw Error(S(169));n?(t=Rm(t,e,Vn),r.__reactInternalMemoizedMergedChildContext=t,Y(Me),Y(Ie),G(Ie,t)):Y(Me),G(Me,n)}var Et=null,Sl=!1,da=!1;function xm(t){Et===null?Et=[t]:Et.push(t)}function i0(t){Sl=!0,xm(t)}function kn(){if(!da&&Et!==null){da=!0;var t=0,e=W;try{var n=Et;for(W=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Et=null,Sl=!1}catch(i){throw Et!==null&&(Et=Et.slice(t+1)),tm(uc,kn),i}finally{W=e,da=!1}}return null}var mr=[],gr=0,Lo=null,Do=0,Ge=[],Ke=0,Hn=null,St=1,Ct="";function Ln(t,e){mr[gr++]=Do,mr[gr++]=Lo,Lo=t,Do=e}function Am(t,e,n){Ge[Ke++]=St,Ge[Ke++]=Ct,Ge[Ke++]=Hn,Hn=t;var r=St;t=Ct;var i=32-ot(r)-1;r&=~(1<<i),n+=1;var s=32-ot(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,St=1<<32-ot(e)+i|n<<i|r,Ct=s+t}else St=1<<s|n<<i|r,Ct=t}function vc(t){t.return!==null&&(Ln(t,1),Am(t,1,0))}function yc(t){for(;t===Lo;)Lo=mr[--gr],mr[gr]=null,Do=mr[--gr],mr[gr]=null;for(;t===Hn;)Hn=Ge[--Ke],Ge[Ke]=null,Ct=Ge[--Ke],Ge[Ke]=null,St=Ge[--Ke],Ge[Ke]=null}var ze=null,Be=null,J=!1,nt=null;function Om(t,e){var n=Qe(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function kh(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,ze=t,Be=on(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,ze=t,Be=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Hn!==null?{id:St,overflow:Ct}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Qe(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,ze=t,Be=null,!0):!1;default:return!1}}function au(t){return(t.mode&1)!==0&&(t.flags&128)===0}function uu(t){if(J){var e=Be;if(e){var n=e;if(!kh(t,e)){if(au(t))throw Error(S(418));e=on(n.nextSibling);var r=ze;e&&kh(t,e)?Om(r,n):(t.flags=t.flags&-4097|2,J=!1,ze=t)}}else{if(au(t))throw Error(S(418));t.flags=t.flags&-4097|2,J=!1,ze=t}}}function Nh(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;ze=t}function qs(t){if(t!==ze)return!1;if(!J)return Nh(t),J=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!iu(t.type,t.memoizedProps)),e&&(e=Be)){if(au(t))throw Lm(),Error(S(418));for(;e;)Om(t,e),e=on(e.nextSibling)}if(Nh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(S(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Be=on(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Be=null}}else Be=ze?on(t.stateNode.nextSibling):null;return!0}function Lm(){for(var t=Be;t;)t=on(t.nextSibling)}function Fr(){Be=ze=null,J=!1}function wc(t){nt===null?nt=[t]:nt.push(t)}var s0=Ut.ReactCurrentBatchConfig;function hi(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(S(309));var r=n.stateNode}if(!r)throw Error(S(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(S(284));if(!n._owner)throw Error(S(290,t))}return t}function Ys(t,e){throw t=Object.prototype.toString.call(e),Error(S(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Ph(t){var e=t._init;return e(t._payload)}function Dm(t){function e(p,f){if(t){var m=p.deletions;m===null?(p.deletions=[f],p.flags|=16):m.push(f)}}function n(p,f){if(!t)return null;for(;f!==null;)e(p,f),f=f.sibling;return null}function r(p,f){for(p=new Map;f!==null;)f.key!==null?p.set(f.key,f):p.set(f.index,f),f=f.sibling;return p}function i(p,f){return p=cn(p,f),p.index=0,p.sibling=null,p}function s(p,f,m){return p.index=m,t?(m=p.alternate,m!==null?(m=m.index,m<f?(p.flags|=2,f):m):(p.flags|=2,f)):(p.flags|=1048576,f)}function o(p){return t&&p.alternate===null&&(p.flags|=2),p}function l(p,f,m,w){return f===null||f.tag!==6?(f=va(m,p.mode,w),f.return=p,f):(f=i(f,m),f.return=p,f)}function a(p,f,m,w){var T=m.type;return T===ur?d(p,f,m.props.children,w,m.key):f!==null&&(f.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===$t&&Ph(T)===f.type)?(w=i(f,m.props),w.ref=hi(p,f,m),w.return=p,w):(w=go(m.type,m.key,m.props,null,p.mode,w),w.ref=hi(p,f,m),w.return=p,w)}function u(p,f,m,w){return f===null||f.tag!==4||f.stateNode.containerInfo!==m.containerInfo||f.stateNode.implementation!==m.implementation?(f=ya(m,p.mode,w),f.return=p,f):(f=i(f,m.children||[]),f.return=p,f)}function d(p,f,m,w,T){return f===null||f.tag!==7?(f=Wn(m,p.mode,w,T),f.return=p,f):(f=i(f,m),f.return=p,f)}function c(p,f,m){if(typeof f=="string"&&f!==""||typeof f=="number")return f=va(""+f,p.mode,m),f.return=p,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case js:return m=go(f.type,f.key,f.props,null,p.mode,m),m.ref=hi(p,null,f),m.return=p,m;case ar:return f=ya(f,p.mode,m),f.return=p,f;case $t:var w=f._init;return c(p,w(f._payload),m)}if(wi(f)||li(f))return f=Wn(f,p.mode,m,null),f.return=p,f;Ys(p,f)}return null}function h(p,f,m,w){var T=f!==null?f.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return T!==null?null:l(p,f,""+m,w);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case js:return m.key===T?a(p,f,m,w):null;case ar:return m.key===T?u(p,f,m,w):null;case $t:return T=m._init,h(p,f,T(m._payload),w)}if(wi(m)||li(m))return T!==null?null:d(p,f,m,w,null);Ys(p,m)}return null}function g(p,f,m,w,T){if(typeof w=="string"&&w!==""||typeof w=="number")return p=p.get(m)||null,l(f,p,""+w,T);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case js:return p=p.get(w.key===null?m:w.key)||null,a(f,p,w,T);case ar:return p=p.get(w.key===null?m:w.key)||null,u(f,p,w,T);case $t:var P=w._init;return g(p,f,m,P(w._payload),T)}if(wi(w)||li(w))return p=p.get(m)||null,d(f,p,w,T,null);Ys(f,w)}return null}function _(p,f,m,w){for(var T=null,P=null,R=f,x=f=0,K=null;R!==null&&x<m.length;x++){R.index>x?(K=R,R=null):K=R.sibling;var b=h(p,R,m[x],w);if(b===null){R===null&&(R=K);break}t&&R&&b.alternate===null&&e(p,R),f=s(b,f,x),P===null?T=b:P.sibling=b,P=b,R=K}if(x===m.length)return n(p,R),J&&Ln(p,x),T;if(R===null){for(;x<m.length;x++)R=c(p,m[x],w),R!==null&&(f=s(R,f,x),P===null?T=R:P.sibling=R,P=R);return J&&Ln(p,x),T}for(R=r(p,R);x<m.length;x++)K=g(R,p,x,m[x],w),K!==null&&(t&&K.alternate!==null&&R.delete(K.key===null?x:K.key),f=s(K,f,x),P===null?T=K:P.sibling=K,P=K);return t&&R.forEach(function(Xe){return e(p,Xe)}),J&&Ln(p,x),T}function y(p,f,m,w){var T=li(m);if(typeof T!="function")throw Error(S(150));if(m=T.call(m),m==null)throw Error(S(151));for(var P=T=null,R=f,x=f=0,K=null,b=m.next();R!==null&&!b.done;x++,b=m.next()){R.index>x?(K=R,R=null):K=R.sibling;var Xe=h(p,R,b.value,w);if(Xe===null){R===null&&(R=K);break}t&&R&&Xe.alternate===null&&e(p,R),f=s(Xe,f,x),P===null?T=Xe:P.sibling=Xe,P=Xe,R=K}if(b.done)return n(p,R),J&&Ln(p,x),T;if(R===null){for(;!b.done;x++,b=m.next())b=c(p,b.value,w),b!==null&&(f=s(b,f,x),P===null?T=b:P.sibling=b,P=b);return J&&Ln(p,x),T}for(R=r(p,R);!b.done;x++,b=m.next())b=g(R,p,x,b.value,w),b!==null&&(t&&b.alternate!==null&&R.delete(b.key===null?x:b.key),f=s(b,f,x),P===null?T=b:P.sibling=b,P=b);return t&&R.forEach(function(si){return e(p,si)}),J&&Ln(p,x),T}function C(p,f,m,w){if(typeof m=="object"&&m!==null&&m.type===ur&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case js:e:{for(var T=m.key,P=f;P!==null;){if(P.key===T){if(T=m.type,T===ur){if(P.tag===7){n(p,P.sibling),f=i(P,m.props.children),f.return=p,p=f;break e}}else if(P.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===$t&&Ph(T)===P.type){n(p,P.sibling),f=i(P,m.props),f.ref=hi(p,P,m),f.return=p,p=f;break e}n(p,P);break}else e(p,P);P=P.sibling}m.type===ur?(f=Wn(m.props.children,p.mode,w,m.key),f.return=p,p=f):(w=go(m.type,m.key,m.props,null,p.mode,w),w.ref=hi(p,f,m),w.return=p,p=w)}return o(p);case ar:e:{for(P=m.key;f!==null;){if(f.key===P)if(f.tag===4&&f.stateNode.containerInfo===m.containerInfo&&f.stateNode.implementation===m.implementation){n(p,f.sibling),f=i(f,m.children||[]),f.return=p,p=f;break e}else{n(p,f);break}else e(p,f);f=f.sibling}f=ya(m,p.mode,w),f.return=p,p=f}return o(p);case $t:return P=m._init,C(p,f,P(m._payload),w)}if(wi(m))return _(p,f,m,w);if(li(m))return y(p,f,m,w);Ys(p,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,f!==null&&f.tag===6?(n(p,f.sibling),f=i(f,m),f.return=p,p=f):(n(p,f),f=va(m,p.mode,w),f.return=p,p=f),o(p)):n(p,f)}return C}var Ur=Dm(!0),Mm=Dm(!1),Mo=Tn(null),bo=null,_r=null,Ec=null;function Sc(){Ec=_r=bo=null}function Cc(t){var e=Mo.current;Y(Mo),t._currentValue=e}function cu(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Pr(t,e){bo=t,Ec=_r=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Le=!0),t.firstContext=null)}function Ye(t){var e=t._currentValue;if(Ec!==t)if(t={context:t,memoizedValue:e,next:null},_r===null){if(bo===null)throw Error(S(308));_r=t,bo.dependencies={lanes:0,firstContext:t}}else _r=_r.next=t;return e}var Un=null;function Ic(t){Un===null?Un=[t]:Un.push(t)}function bm(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Ic(e)):(n.next=i.next,i.next=n),e.interleaved=n,Lt(t,r)}function Lt(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Gt=!1;function Tc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Fm(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Pt(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function ln(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,B&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Lt(t,n)}return i=r.interleaved,i===null?(e.next=e,Ic(r)):(e.next=i.next,i.next=e),r.interleaved=e,Lt(t,n)}function uo(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,cc(t,n)}}function Rh(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Fo(t,e,n,r){var i=t.updateQueue;Gt=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var a=l,u=a.next;a.next=null,o===null?s=u:o.next=u,o=a;var d=t.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==o&&(l===null?d.firstBaseUpdate=u:l.next=u,d.lastBaseUpdate=a))}if(s!==null){var c=i.baseState;o=0,d=u=a=null,l=s;do{var h=l.lane,g=l.eventTime;if((r&h)===h){d!==null&&(d=d.next={eventTime:g,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var _=t,y=l;switch(h=e,g=n,y.tag){case 1:if(_=y.payload,typeof _=="function"){c=_.call(g,c,h);break e}c=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=y.payload,h=typeof _=="function"?_.call(g,c,h):_,h==null)break e;c=te({},c,h);break e;case 2:Gt=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,h=i.effects,h===null?i.effects=[l]:h.push(l))}else g={eventTime:g,lane:h,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(u=d=g,a=c):d=d.next=g,o|=h;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;h=l,l=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(!0);if(d===null&&(a=c),i.baseState=a,i.firstBaseUpdate=u,i.lastBaseUpdate=d,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Gn|=o,t.lanes=o,t.memoizedState=c}}function xh(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(S(191,i));i.call(r)}}}var Es={},gt=Tn(Es),Xi=Tn(Es),Zi=Tn(Es);function jn(t){if(t===Es)throw Error(S(174));return t}function kc(t,e){switch(G(Zi,e),G(Xi,t),G(gt,Es),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Ha(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Ha(e,t)}Y(gt),G(gt,e)}function jr(){Y(gt),Y(Xi),Y(Zi)}function Um(t){jn(Zi.current);var e=jn(gt.current),n=Ha(e,t.type);e!==n&&(G(Xi,t),G(gt,n))}function Nc(t){Xi.current===t&&(Y(gt),Y(Xi))}var X=Tn(0);function Uo(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var ha=[];function Pc(){for(var t=0;t<ha.length;t++)ha[t]._workInProgressVersionPrimary=null;ha.length=0}var co=Ut.ReactCurrentDispatcher,fa=Ut.ReactCurrentBatchConfig,$n=0,ee=null,le=null,fe=null,jo=!1,xi=!1,es=0,o0=0;function we(){throw Error(S(321))}function Rc(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!ut(t[n],e[n]))return!1;return!0}function xc(t,e,n,r,i,s){if($n=s,ee=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,co.current=t===null||t.memoizedState===null?c0:d0,t=n(r,i),xi){s=0;do{if(xi=!1,es=0,25<=s)throw Error(S(301));s+=1,fe=le=null,e.updateQueue=null,co.current=h0,t=n(r,i)}while(xi)}if(co.current=Bo,e=le!==null&&le.next!==null,$n=0,fe=le=ee=null,jo=!1,e)throw Error(S(300));return t}function Ac(){var t=es!==0;return es=0,t}function ht(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return fe===null?ee.memoizedState=fe=t:fe=fe.next=t,fe}function Je(){if(le===null){var t=ee.alternate;t=t!==null?t.memoizedState:null}else t=le.next;var e=fe===null?ee.memoizedState:fe.next;if(e!==null)fe=e,le=t;else{if(t===null)throw Error(S(310));le=t,t={memoizedState:le.memoizedState,baseState:le.baseState,baseQueue:le.baseQueue,queue:le.queue,next:null},fe===null?ee.memoizedState=fe=t:fe=fe.next=t}return fe}function ts(t,e){return typeof e=="function"?e(t):e}function pa(t){var e=Je(),n=e.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=t;var r=le,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,a=null,u=s;do{var d=u.lane;if(($n&d)===d)a!==null&&(a=a.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var c={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};a===null?(l=a=c,o=r):a=a.next=c,ee.lanes|=d,Gn|=d}u=u.next}while(u!==null&&u!==s);a===null?o=r:a.next=l,ut(r,e.memoizedState)||(Le=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=a,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,ee.lanes|=s,Gn|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function ma(t){var e=Je(),n=e.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);ut(s,e.memoizedState)||(Le=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function jm(){}function Bm(t,e){var n=ee,r=Je(),i=e(),s=!ut(r.memoizedState,i);if(s&&(r.memoizedState=i,Le=!0),r=r.queue,Oc(Vm.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||fe!==null&&fe.memoizedState.tag&1){if(n.flags|=2048,ns(9,Wm.bind(null,n,r,i,e),void 0,null),me===null)throw Error(S(349));$n&30||zm(n,e,i)}return i}function zm(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ee.updateQueue,e===null?(e={lastEffect:null,stores:null},ee.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Wm(t,e,n,r){e.value=n,e.getSnapshot=r,Hm(e)&&$m(t)}function Vm(t,e,n){return n(function(){Hm(e)&&$m(t)})}function Hm(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!ut(t,n)}catch{return!0}}function $m(t){var e=Lt(t,1);e!==null&&lt(e,t,1,-1)}function Ah(t){var e=ht();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ts,lastRenderedState:t},e.queue=t,t=t.dispatch=u0.bind(null,ee,t),[e.memoizedState,t]}function ns(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=ee.updateQueue,e===null?(e={lastEffect:null,stores:null},ee.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Gm(){return Je().memoizedState}function ho(t,e,n,r){var i=ht();ee.flags|=t,i.memoizedState=ns(1|e,n,void 0,r===void 0?null:r)}function Cl(t,e,n,r){var i=Je();r=r===void 0?null:r;var s=void 0;if(le!==null){var o=le.memoizedState;if(s=o.destroy,r!==null&&Rc(r,o.deps)){i.memoizedState=ns(e,n,s,r);return}}ee.flags|=t,i.memoizedState=ns(1|e,n,s,r)}function Oh(t,e){return ho(8390656,8,t,e)}function Oc(t,e){return Cl(2048,8,t,e)}function Km(t,e){return Cl(4,2,t,e)}function Qm(t,e){return Cl(4,4,t,e)}function qm(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Ym(t,e,n){return n=n!=null?n.concat([t]):null,Cl(4,4,qm.bind(null,e,t),n)}function Lc(){}function Jm(t,e){var n=Je();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Rc(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Xm(t,e){var n=Je();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Rc(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function Zm(t,e,n){return $n&21?(ut(n,e)||(n=im(),ee.lanes|=n,Gn|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Le=!0),t.memoizedState=n)}function l0(t,e){var n=W;W=n!==0&&4>n?n:4,t(!0);var r=fa.transition;fa.transition={};try{t(!1),e()}finally{W=n,fa.transition=r}}function eg(){return Je().memoizedState}function a0(t,e,n){var r=un(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},tg(t))ng(e,n);else if(n=bm(t,e,n,r),n!==null){var i=Pe();lt(n,t,r,i),rg(n,e,r)}}function u0(t,e,n){var r=un(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(tg(t))ng(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,ut(l,o)){var a=e.interleaved;a===null?(i.next=i,Ic(e)):(i.next=a.next,a.next=i),e.interleaved=i;return}}catch{}finally{}n=bm(t,e,i,r),n!==null&&(i=Pe(),lt(n,t,r,i),rg(n,e,r))}}function tg(t){var e=t.alternate;return t===ee||e!==null&&e===ee}function ng(t,e){xi=jo=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function rg(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,cc(t,n)}}var Bo={readContext:Ye,useCallback:we,useContext:we,useEffect:we,useImperativeHandle:we,useInsertionEffect:we,useLayoutEffect:we,useMemo:we,useReducer:we,useRef:we,useState:we,useDebugValue:we,useDeferredValue:we,useTransition:we,useMutableSource:we,useSyncExternalStore:we,useId:we,unstable_isNewReconciler:!1},c0={readContext:Ye,useCallback:function(t,e){return ht().memoizedState=[t,e===void 0?null:e],t},useContext:Ye,useEffect:Oh,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,ho(4194308,4,qm.bind(null,e,t),n)},useLayoutEffect:function(t,e){return ho(4194308,4,t,e)},useInsertionEffect:function(t,e){return ho(4,2,t,e)},useMemo:function(t,e){var n=ht();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=ht();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=a0.bind(null,ee,t),[r.memoizedState,t]},useRef:function(t){var e=ht();return t={current:t},e.memoizedState=t},useState:Ah,useDebugValue:Lc,useDeferredValue:function(t){return ht().memoizedState=t},useTransition:function(){var t=Ah(!1),e=t[0];return t=l0.bind(null,t[1]),ht().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=ee,i=ht();if(J){if(n===void 0)throw Error(S(407));n=n()}else{if(n=e(),me===null)throw Error(S(349));$n&30||zm(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Oh(Vm.bind(null,r,s,t),[t]),r.flags|=2048,ns(9,Wm.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=ht(),e=me.identifierPrefix;if(J){var n=Ct,r=St;n=(r&~(1<<32-ot(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=es++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=o0++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},d0={readContext:Ye,useCallback:Jm,useContext:Ye,useEffect:Oc,useImperativeHandle:Ym,useInsertionEffect:Km,useLayoutEffect:Qm,useMemo:Xm,useReducer:pa,useRef:Gm,useState:function(){return pa(ts)},useDebugValue:Lc,useDeferredValue:function(t){var e=Je();return Zm(e,le.memoizedState,t)},useTransition:function(){var t=pa(ts)[0],e=Je().memoizedState;return[t,e]},useMutableSource:jm,useSyncExternalStore:Bm,useId:eg,unstable_isNewReconciler:!1},h0={readContext:Ye,useCallback:Jm,useContext:Ye,useEffect:Oc,useImperativeHandle:Ym,useInsertionEffect:Km,useLayoutEffect:Qm,useMemo:Xm,useReducer:ma,useRef:Gm,useState:function(){return ma(ts)},useDebugValue:Lc,useDeferredValue:function(t){var e=Je();return le===null?e.memoizedState=t:Zm(e,le.memoizedState,t)},useTransition:function(){var t=ma(ts)[0],e=Je().memoizedState;return[t,e]},useMutableSource:jm,useSyncExternalStore:Bm,useId:eg,unstable_isNewReconciler:!1};function et(t,e){if(t&&t.defaultProps){e=te({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function du(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:te({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Il={isMounted:function(t){return(t=t._reactInternals)?nr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Pe(),i=un(t),s=Pt(r,i);s.payload=e,n!=null&&(s.callback=n),e=ln(t,s,i),e!==null&&(lt(e,t,i,r),uo(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Pe(),i=un(t),s=Pt(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=ln(t,s,i),e!==null&&(lt(e,t,i,r),uo(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Pe(),r=un(t),i=Pt(n,r);i.tag=2,e!=null&&(i.callback=e),e=ln(t,i,r),e!==null&&(lt(e,t,r,n),uo(e,t,r))}};function Lh(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Qi(n,r)||!Qi(i,s):!0}function ig(t,e,n){var r=!1,i=yn,s=e.contextType;return typeof s=="object"&&s!==null?s=Ye(s):(i=be(e)?Vn:Ie.current,r=e.contextTypes,s=(r=r!=null)?br(t,i):yn),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Il,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Dh(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Il.enqueueReplaceState(e,e.state,null)}function hu(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},Tc(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Ye(s):(s=be(e)?Vn:Ie.current,i.context=br(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(du(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Il.enqueueReplaceState(i,i.state,null),Fo(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Br(t,e){try{var n="",r=e;do n+=By(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function ga(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function fu(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var f0=typeof WeakMap=="function"?WeakMap:Map;function sg(t,e,n){n=Pt(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Wo||(Wo=!0,Cu=r),fu(t,e)},n}function og(t,e,n){n=Pt(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){fu(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){fu(t,e),typeof r!="function"&&(an===null?an=new Set([this]):an.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Mh(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new f0;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=N0.bind(null,t,e,n),e.then(t,t))}function bh(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Fh(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Pt(-1,1),e.tag=2,ln(n,e,1))),n.lanes|=1),t)}var p0=Ut.ReactCurrentOwner,Le=!1;function ke(t,e,n,r){e.child=t===null?Mm(e,null,n,r):Ur(e,t.child,n,r)}function Uh(t,e,n,r,i){n=n.render;var s=e.ref;return Pr(e,i),r=xc(t,e,n,r,s,i),n=Ac(),t!==null&&!Le?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Dt(t,e,i)):(J&&n&&vc(e),e.flags|=1,ke(t,e,r,i),e.child)}function jh(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!zc(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,lg(t,e,s,r,i)):(t=go(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Qi,n(o,r)&&t.ref===e.ref)return Dt(t,e,i)}return e.flags|=1,t=cn(s,r),t.ref=e.ref,t.return=e,e.child=t}function lg(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Qi(s,r)&&t.ref===e.ref)if(Le=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Le=!0);else return e.lanes=t.lanes,Dt(t,e,i)}return pu(t,e,n,r,i)}function ag(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},G(yr,je),je|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,G(yr,je),je|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,G(yr,je),je|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,G(yr,je),je|=r;return ke(t,e,i,n),e.child}function ug(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function pu(t,e,n,r,i){var s=be(n)?Vn:Ie.current;return s=br(e,s),Pr(e,i),n=xc(t,e,n,r,s,i),r=Ac(),t!==null&&!Le?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Dt(t,e,i)):(J&&r&&vc(e),e.flags|=1,ke(t,e,n,i),e.child)}function Bh(t,e,n,r,i){if(be(n)){var s=!0;Oo(e)}else s=!1;if(Pr(e,i),e.stateNode===null)fo(t,e),ig(e,n,r),hu(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var a=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Ye(u):(u=be(n)?Vn:Ie.current,u=br(e,u));var d=n.getDerivedStateFromProps,c=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";c||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||a!==u)&&Dh(e,o,r,u),Gt=!1;var h=e.memoizedState;o.state=h,Fo(e,r,o,i),a=e.memoizedState,l!==r||h!==a||Me.current||Gt?(typeof d=="function"&&(du(e,n,d,r),a=e.memoizedState),(l=Gt||Lh(e,n,l,r,h,a,u))?(c||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=a),o.props=r,o.state=a,o.context=u,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,Fm(t,e),l=e.memoizedProps,u=e.type===e.elementType?l:et(e.type,l),o.props=u,c=e.pendingProps,h=o.context,a=n.contextType,typeof a=="object"&&a!==null?a=Ye(a):(a=be(n)?Vn:Ie.current,a=br(e,a));var g=n.getDerivedStateFromProps;(d=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==c||h!==a)&&Dh(e,o,r,a),Gt=!1,h=e.memoizedState,o.state=h,Fo(e,r,o,i);var _=e.memoizedState;l!==c||h!==_||Me.current||Gt?(typeof g=="function"&&(du(e,n,g,r),_=e.memoizedState),(u=Gt||Lh(e,n,u,r,h,_,a)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,_,a),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,_,a)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=_),o.props=r,o.state=_,o.context=a,r=u):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),r=!1)}return mu(t,e,n,r,s,i)}function mu(t,e,n,r,i,s){ug(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Th(e,n,!1),Dt(t,e,s);r=e.stateNode,p0.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Ur(e,t.child,null,s),e.child=Ur(e,null,l,s)):ke(t,e,l,s),e.memoizedState=r.state,i&&Th(e,n,!0),e.child}function cg(t){var e=t.stateNode;e.pendingContext?Ih(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Ih(t,e.context,!1),kc(t,e.containerInfo)}function zh(t,e,n,r,i){return Fr(),wc(i),e.flags|=256,ke(t,e,n,r),e.child}var gu={dehydrated:null,treeContext:null,retryLane:0};function _u(t){return{baseLanes:t,cachePool:null,transitions:null}}function dg(t,e,n){var r=e.pendingProps,i=X.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),G(X,i&1),t===null)return uu(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Nl(o,r,0,null),t=Wn(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=_u(n),e.memoizedState=gu,t):Dc(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return m0(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var a={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=a,e.deletions=null):(r=cn(i,a),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=cn(l,s):(s=Wn(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?_u(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=gu,r}return s=t.child,t=s.sibling,r=cn(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Dc(t,e){return e=Nl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Js(t,e,n,r){return r!==null&&wc(r),Ur(e,t.child,null,n),t=Dc(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function m0(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=ga(Error(S(422))),Js(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Nl({mode:"visible",children:r.children},i,0,null),s=Wn(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Ur(e,t.child,null,o),e.child.memoizedState=_u(o),e.memoizedState=gu,s);if(!(e.mode&1))return Js(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(S(419)),r=ga(s,r,void 0),Js(t,e,o,r)}if(l=(o&t.childLanes)!==0,Le||l){if(r=me,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Lt(t,i),lt(r,t,i,-1))}return Bc(),r=ga(Error(S(421))),Js(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=P0.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Be=on(i.nextSibling),ze=e,J=!0,nt=null,t!==null&&(Ge[Ke++]=St,Ge[Ke++]=Ct,Ge[Ke++]=Hn,St=t.id,Ct=t.overflow,Hn=e),e=Dc(e,r.children),e.flags|=4096,e)}function Wh(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),cu(t.return,e,n)}function _a(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function hg(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(ke(t,e,r.children,n),r=X.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Wh(t,n,e);else if(t.tag===19)Wh(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(G(X,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Uo(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),_a(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Uo(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}_a(e,!0,n,null,s);break;case"together":_a(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function fo(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Dt(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Gn|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(S(153));if(e.child!==null){for(t=e.child,n=cn(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=cn(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function g0(t,e,n){switch(e.tag){case 3:cg(e),Fr();break;case 5:Um(e);break;case 1:be(e.type)&&Oo(e);break;case 4:kc(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;G(Mo,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(G(X,X.current&1),e.flags|=128,null):n&e.child.childLanes?dg(t,e,n):(G(X,X.current&1),t=Dt(t,e,n),t!==null?t.sibling:null);G(X,X.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return hg(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),G(X,X.current),r)break;return null;case 22:case 23:return e.lanes=0,ag(t,e,n)}return Dt(t,e,n)}var fg,vu,pg,mg;fg=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};vu=function(){};pg=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,jn(gt.current);var s=null;switch(n){case"input":i=Ba(t,i),r=Ba(t,r),s=[];break;case"select":i=te({},i,{value:void 0}),r=te({},r,{value:void 0}),s=[];break;case"textarea":i=Va(t,i),r=Va(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=xo)}$a(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(zi.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var a=r[u];if(l=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&a!==l&&(a!=null||l!=null))if(u==="style")if(l){for(o in l)!l.hasOwnProperty(o)||a&&a.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in a)a.hasOwnProperty(o)&&l[o]!==a[o]&&(n||(n={}),n[o]=a[o])}else n||(s||(s=[]),s.push(u,n)),n=a;else u==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,l=l?l.__html:void 0,a!=null&&l!==a&&(s=s||[]).push(u,a)):u==="children"?typeof a!="string"&&typeof a!="number"||(s=s||[]).push(u,""+a):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(zi.hasOwnProperty(u)?(a!=null&&u==="onScroll"&&Q("scroll",t),s||l===a||(s=[])):(s=s||[]).push(u,a))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};mg=function(t,e,n,r){n!==r&&(e.flags|=4)};function fi(t,e){if(!J)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Ee(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function _0(t,e,n){var r=e.pendingProps;switch(yc(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ee(e),null;case 1:return be(e.type)&&Ao(),Ee(e),null;case 3:return r=e.stateNode,jr(),Y(Me),Y(Ie),Pc(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(qs(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,nt!==null&&(ku(nt),nt=null))),vu(t,e),Ee(e),null;case 5:Nc(e);var i=jn(Zi.current);if(n=e.type,t!==null&&e.stateNode!=null)pg(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(S(166));return Ee(e),null}if(t=jn(gt.current),qs(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[ft]=e,r[Ji]=s,t=(e.mode&1)!==0,n){case"dialog":Q("cancel",r),Q("close",r);break;case"iframe":case"object":case"embed":Q("load",r);break;case"video":case"audio":for(i=0;i<Si.length;i++)Q(Si[i],r);break;case"source":Q("error",r);break;case"img":case"image":case"link":Q("error",r),Q("load",r);break;case"details":Q("toggle",r);break;case"input":Jd(r,s),Q("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Q("invalid",r);break;case"textarea":Zd(r,s),Q("invalid",r)}$a(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&Qs(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&Qs(r.textContent,l,t),i=["children",""+l]):zi.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&Q("scroll",r)}switch(n){case"input":Bs(r),Xd(r,s,!0);break;case"textarea":Bs(r),eh(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=xo)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Vp(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[ft]=e,t[Ji]=r,fg(t,e,!1,!1),e.stateNode=t;e:{switch(o=Ga(n,r),n){case"dialog":Q("cancel",t),Q("close",t),i=r;break;case"iframe":case"object":case"embed":Q("load",t),i=r;break;case"video":case"audio":for(i=0;i<Si.length;i++)Q(Si[i],t);i=r;break;case"source":Q("error",t),i=r;break;case"img":case"image":case"link":Q("error",t),Q("load",t),i=r;break;case"details":Q("toggle",t),i=r;break;case"input":Jd(t,r),i=Ba(t,r),Q("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=te({},r,{value:void 0}),Q("invalid",t);break;case"textarea":Zd(t,r),i=Va(t,r),Q("invalid",t);break;default:i=r}$a(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var a=l[s];s==="style"?Gp(t,a):s==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&Hp(t,a)):s==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&Wi(t,a):typeof a=="number"&&Wi(t,""+a):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(zi.hasOwnProperty(s)?a!=null&&s==="onScroll"&&Q("scroll",t):a!=null&&ic(t,s,a,o))}switch(n){case"input":Bs(t),Xd(t,r,!1);break;case"textarea":Bs(t),eh(t);break;case"option":r.value!=null&&t.setAttribute("value",""+vn(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Ir(t,!!r.multiple,s,!1):r.defaultValue!=null&&Ir(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=xo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ee(e),null;case 6:if(t&&e.stateNode!=null)mg(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(S(166));if(n=jn(Zi.current),jn(gt.current),qs(e)){if(r=e.stateNode,n=e.memoizedProps,r[ft]=e,(s=r.nodeValue!==n)&&(t=ze,t!==null))switch(t.tag){case 3:Qs(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Qs(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[ft]=e,e.stateNode=r}return Ee(e),null;case 13:if(Y(X),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(J&&Be!==null&&e.mode&1&&!(e.flags&128))Lm(),Fr(),e.flags|=98560,s=!1;else if(s=qs(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(S(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(S(317));s[ft]=e}else Fr(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Ee(e),s=!1}else nt!==null&&(ku(nt),nt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||X.current&1?ce===0&&(ce=3):Bc())),e.updateQueue!==null&&(e.flags|=4),Ee(e),null);case 4:return jr(),vu(t,e),t===null&&qi(e.stateNode.containerInfo),Ee(e),null;case 10:return Cc(e.type._context),Ee(e),null;case 17:return be(e.type)&&Ao(),Ee(e),null;case 19:if(Y(X),s=e.memoizedState,s===null)return Ee(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)fi(s,!1);else{if(ce!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Uo(t),o!==null){for(e.flags|=128,fi(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return G(X,X.current&1|2),e.child}t=t.sibling}s.tail!==null&&ie()>zr&&(e.flags|=128,r=!0,fi(s,!1),e.lanes=4194304)}else{if(!r)if(t=Uo(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),fi(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!J)return Ee(e),null}else 2*ie()-s.renderingStartTime>zr&&n!==1073741824&&(e.flags|=128,r=!0,fi(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=ie(),e.sibling=null,n=X.current,G(X,r?n&1|2:n&1),e):(Ee(e),null);case 22:case 23:return jc(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?je&1073741824&&(Ee(e),e.subtreeFlags&6&&(e.flags|=8192)):Ee(e),null;case 24:return null;case 25:return null}throw Error(S(156,e.tag))}function v0(t,e){switch(yc(e),e.tag){case 1:return be(e.type)&&Ao(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return jr(),Y(Me),Y(Ie),Pc(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Nc(e),null;case 13:if(Y(X),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(S(340));Fr()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Y(X),null;case 4:return jr(),null;case 10:return Cc(e.type._context),null;case 22:case 23:return jc(),null;case 24:return null;default:return null}}var Xs=!1,Se=!1,y0=typeof WeakSet=="function"?WeakSet:Set,k=null;function vr(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ne(t,e,r)}else n.current=null}function yu(t,e,n){try{n()}catch(r){ne(t,e,r)}}var Vh=!1;function w0(t,e){if(nu=No,t=wm(),_c(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,a=-1,u=0,d=0,c=t,h=null;t:for(;;){for(var g;c!==n||i!==0&&c.nodeType!==3||(l=o+i),c!==s||r!==0&&c.nodeType!==3||(a=o+r),c.nodeType===3&&(o+=c.nodeValue.length),(g=c.firstChild)!==null;)h=c,c=g;for(;;){if(c===t)break t;if(h===n&&++u===i&&(l=o),h===s&&++d===r&&(a=o),(g=c.nextSibling)!==null)break;c=h,h=c.parentNode}c=g}n=l===-1||a===-1?null:{start:l,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(ru={focusedElem:t,selectionRange:n},No=!1,k=e;k!==null;)if(e=k,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,k=t;else for(;k!==null;){e=k;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var y=_.memoizedProps,C=_.memoizedState,p=e.stateNode,f=p.getSnapshotBeforeUpdate(e.elementType===e.type?y:et(e.type,y),C);p.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var m=e.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(S(163))}}catch(w){ne(e,e.return,w)}if(t=e.sibling,t!==null){t.return=e.return,k=t;break}k=e.return}return _=Vh,Vh=!1,_}function Ai(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&yu(e,n,s)}i=i.next}while(i!==r)}}function Tl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function wu(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function gg(t){var e=t.alternate;e!==null&&(t.alternate=null,gg(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[ft],delete e[Ji],delete e[ou],delete e[n0],delete e[r0])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function _g(t){return t.tag===5||t.tag===3||t.tag===4}function Hh(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||_g(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Eu(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=xo));else if(r!==4&&(t=t.child,t!==null))for(Eu(t,e,n),t=t.sibling;t!==null;)Eu(t,e,n),t=t.sibling}function Su(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Su(t,e,n),t=t.sibling;t!==null;)Su(t,e,n),t=t.sibling}var ge=null,tt=!1;function Wt(t,e,n){for(n=n.child;n!==null;)vg(t,e,n),n=n.sibling}function vg(t,e,n){if(mt&&typeof mt.onCommitFiberUnmount=="function")try{mt.onCommitFiberUnmount(_l,n)}catch{}switch(n.tag){case 5:Se||vr(n,e);case 6:var r=ge,i=tt;ge=null,Wt(t,e,n),ge=r,tt=i,ge!==null&&(tt?(t=ge,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):ge.removeChild(n.stateNode));break;case 18:ge!==null&&(tt?(t=ge,n=n.stateNode,t.nodeType===8?ca(t.parentNode,n):t.nodeType===1&&ca(t,n),Gi(t)):ca(ge,n.stateNode));break;case 4:r=ge,i=tt,ge=n.stateNode.containerInfo,tt=!0,Wt(t,e,n),ge=r,tt=i;break;case 0:case 11:case 14:case 15:if(!Se&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&yu(n,e,o),i=i.next}while(i!==r)}Wt(t,e,n);break;case 1:if(!Se&&(vr(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){ne(n,e,l)}Wt(t,e,n);break;case 21:Wt(t,e,n);break;case 22:n.mode&1?(Se=(r=Se)||n.memoizedState!==null,Wt(t,e,n),Se=r):Wt(t,e,n);break;default:Wt(t,e,n)}}function $h(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new y0),e.forEach(function(r){var i=R0.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Ze(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:ge=l.stateNode,tt=!1;break e;case 3:ge=l.stateNode.containerInfo,tt=!0;break e;case 4:ge=l.stateNode.containerInfo,tt=!0;break e}l=l.return}if(ge===null)throw Error(S(160));vg(s,o,i),ge=null,tt=!1;var a=i.alternate;a!==null&&(a.return=null),i.return=null}catch(u){ne(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)yg(e,t),e=e.sibling}function yg(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Ze(e,t),dt(t),r&4){try{Ai(3,t,t.return),Tl(3,t)}catch(y){ne(t,t.return,y)}try{Ai(5,t,t.return)}catch(y){ne(t,t.return,y)}}break;case 1:Ze(e,t),dt(t),r&512&&n!==null&&vr(n,n.return);break;case 5:if(Ze(e,t),dt(t),r&512&&n!==null&&vr(n,n.return),t.flags&32){var i=t.stateNode;try{Wi(i,"")}catch(y){ne(t,t.return,y)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,a=t.updateQueue;if(t.updateQueue=null,a!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&zp(i,s),Ga(l,o);var u=Ga(l,s);for(o=0;o<a.length;o+=2){var d=a[o],c=a[o+1];d==="style"?Gp(i,c):d==="dangerouslySetInnerHTML"?Hp(i,c):d==="children"?Wi(i,c):ic(i,d,c,u)}switch(l){case"input":za(i,s);break;case"textarea":Wp(i,s);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?Ir(i,!!s.multiple,g,!1):h!==!!s.multiple&&(s.defaultValue!=null?Ir(i,!!s.multiple,s.defaultValue,!0):Ir(i,!!s.multiple,s.multiple?[]:"",!1))}i[Ji]=s}catch(y){ne(t,t.return,y)}}break;case 6:if(Ze(e,t),dt(t),r&4){if(t.stateNode===null)throw Error(S(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(y){ne(t,t.return,y)}}break;case 3:if(Ze(e,t),dt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Gi(e.containerInfo)}catch(y){ne(t,t.return,y)}break;case 4:Ze(e,t),dt(t);break;case 13:Ze(e,t),dt(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Fc=ie())),r&4&&$h(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(Se=(u=Se)||d,Ze(e,t),Se=u):Ze(e,t),dt(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!d&&t.mode&1)for(k=t,d=t.child;d!==null;){for(c=k=d;k!==null;){switch(h=k,g=h.child,h.tag){case 0:case 11:case 14:case 15:Ai(4,h,h.return);break;case 1:vr(h,h.return);var _=h.stateNode;if(typeof _.componentWillUnmount=="function"){r=h,n=h.return;try{e=r,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(y){ne(r,n,y)}}break;case 5:vr(h,h.return);break;case 22:if(h.memoizedState!==null){Kh(c);continue}}g!==null?(g.return=h,k=g):Kh(c)}d=d.sibling}e:for(d=null,c=t;;){if(c.tag===5){if(d===null){d=c;try{i=c.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=c.stateNode,a=c.memoizedProps.style,o=a!=null&&a.hasOwnProperty("display")?a.display:null,l.style.display=$p("display",o))}catch(y){ne(t,t.return,y)}}}else if(c.tag===6){if(d===null)try{c.stateNode.nodeValue=u?"":c.memoizedProps}catch(y){ne(t,t.return,y)}}else if((c.tag!==22&&c.tag!==23||c.memoizedState===null||c===t)&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===t)break e;for(;c.sibling===null;){if(c.return===null||c.return===t)break e;d===c&&(d=null),c=c.return}d===c&&(d=null),c.sibling.return=c.return,c=c.sibling}}break;case 19:Ze(e,t),dt(t),r&4&&$h(t);break;case 21:break;default:Ze(e,t),dt(t)}}function dt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(_g(n)){var r=n;break e}n=n.return}throw Error(S(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Wi(i,""),r.flags&=-33);var s=Hh(t);Su(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=Hh(t);Eu(t,l,o);break;default:throw Error(S(161))}}catch(a){ne(t,t.return,a)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function E0(t,e,n){k=t,wg(t)}function wg(t,e,n){for(var r=(t.mode&1)!==0;k!==null;){var i=k,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Xs;if(!o){var l=i.alternate,a=l!==null&&l.memoizedState!==null||Se;l=Xs;var u=Se;if(Xs=o,(Se=a)&&!u)for(k=i;k!==null;)o=k,a=o.child,o.tag===22&&o.memoizedState!==null?Qh(i):a!==null?(a.return=o,k=a):Qh(i);for(;s!==null;)k=s,wg(s),s=s.sibling;k=i,Xs=l,Se=u}Gh(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,k=s):Gh(t)}}function Gh(t){for(;k!==null;){var e=k;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Se||Tl(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Se)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:et(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&xh(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}xh(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var a=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var c=d.dehydrated;c!==null&&Gi(c)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(S(163))}Se||e.flags&512&&wu(e)}catch(h){ne(e,e.return,h)}}if(e===t){k=null;break}if(n=e.sibling,n!==null){n.return=e.return,k=n;break}k=e.return}}function Kh(t){for(;k!==null;){var e=k;if(e===t){k=null;break}var n=e.sibling;if(n!==null){n.return=e.return,k=n;break}k=e.return}}function Qh(t){for(;k!==null;){var e=k;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Tl(4,e)}catch(a){ne(e,n,a)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(a){ne(e,i,a)}}var s=e.return;try{wu(e)}catch(a){ne(e,s,a)}break;case 5:var o=e.return;try{wu(e)}catch(a){ne(e,o,a)}}}catch(a){ne(e,e.return,a)}if(e===t){k=null;break}var l=e.sibling;if(l!==null){l.return=e.return,k=l;break}k=e.return}}var S0=Math.ceil,zo=Ut.ReactCurrentDispatcher,Mc=Ut.ReactCurrentOwner,qe=Ut.ReactCurrentBatchConfig,B=0,me=null,oe=null,ve=0,je=0,yr=Tn(0),ce=0,rs=null,Gn=0,kl=0,bc=0,Oi=null,Oe=null,Fc=0,zr=1/0,wt=null,Wo=!1,Cu=null,an=null,Zs=!1,en=null,Vo=0,Li=0,Iu=null,po=-1,mo=0;function Pe(){return B&6?ie():po!==-1?po:po=ie()}function un(t){return t.mode&1?B&2&&ve!==0?ve&-ve:s0.transition!==null?(mo===0&&(mo=im()),mo):(t=W,t!==0||(t=window.event,t=t===void 0?16:dm(t.type)),t):1}function lt(t,e,n,r){if(50<Li)throw Li=0,Iu=null,Error(S(185));vs(t,n,r),(!(B&2)||t!==me)&&(t===me&&(!(B&2)&&(kl|=n),ce===4&&Qt(t,ve)),Fe(t,r),n===1&&B===0&&!(e.mode&1)&&(zr=ie()+500,Sl&&kn()))}function Fe(t,e){var n=t.callbackNode;sw(t,e);var r=ko(t,t===me?ve:0);if(r===0)n!==null&&rh(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&rh(n),e===1)t.tag===0?i0(qh.bind(null,t)):xm(qh.bind(null,t)),e0(function(){!(B&6)&&kn()}),n=null;else{switch(sm(r)){case 1:n=uc;break;case 4:n=nm;break;case 16:n=To;break;case 536870912:n=rm;break;default:n=To}n=Pg(n,Eg.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Eg(t,e){if(po=-1,mo=0,B&6)throw Error(S(327));var n=t.callbackNode;if(Rr()&&t.callbackNode!==n)return null;var r=ko(t,t===me?ve:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Ho(t,r);else{e=r;var i=B;B|=2;var s=Cg();(me!==t||ve!==e)&&(wt=null,zr=ie()+500,zn(t,e));do try{T0();break}catch(l){Sg(t,l)}while(!0);Sc(),zo.current=s,B=i,oe!==null?e=0:(me=null,ve=0,e=ce)}if(e!==0){if(e===2&&(i=Ja(t),i!==0&&(r=i,e=Tu(t,i))),e===1)throw n=rs,zn(t,0),Qt(t,r),Fe(t,ie()),n;if(e===6)Qt(t,r);else{if(i=t.current.alternate,!(r&30)&&!C0(i)&&(e=Ho(t,r),e===2&&(s=Ja(t),s!==0&&(r=s,e=Tu(t,s))),e===1))throw n=rs,zn(t,0),Qt(t,r),Fe(t,ie()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(S(345));case 2:Dn(t,Oe,wt);break;case 3:if(Qt(t,r),(r&130023424)===r&&(e=Fc+500-ie(),10<e)){if(ko(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Pe(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=su(Dn.bind(null,t,Oe,wt),e);break}Dn(t,Oe,wt);break;case 4:if(Qt(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-ot(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=ie()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*S0(r/1960))-r,10<r){t.timeoutHandle=su(Dn.bind(null,t,Oe,wt),r);break}Dn(t,Oe,wt);break;case 5:Dn(t,Oe,wt);break;default:throw Error(S(329))}}}return Fe(t,ie()),t.callbackNode===n?Eg.bind(null,t):null}function Tu(t,e){var n=Oi;return t.current.memoizedState.isDehydrated&&(zn(t,e).flags|=256),t=Ho(t,e),t!==2&&(e=Oe,Oe=n,e!==null&&ku(e)),t}function ku(t){Oe===null?Oe=t:Oe.push.apply(Oe,t)}function C0(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!ut(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Qt(t,e){for(e&=~bc,e&=~kl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-ot(e),r=1<<n;t[n]=-1,e&=~r}}function qh(t){if(B&6)throw Error(S(327));Rr();var e=ko(t,0);if(!(e&1))return Fe(t,ie()),null;var n=Ho(t,e);if(t.tag!==0&&n===2){var r=Ja(t);r!==0&&(e=r,n=Tu(t,r))}if(n===1)throw n=rs,zn(t,0),Qt(t,e),Fe(t,ie()),n;if(n===6)throw Error(S(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Dn(t,Oe,wt),Fe(t,ie()),null}function Uc(t,e){var n=B;B|=1;try{return t(e)}finally{B=n,B===0&&(zr=ie()+500,Sl&&kn())}}function Kn(t){en!==null&&en.tag===0&&!(B&6)&&Rr();var e=B;B|=1;var n=qe.transition,r=W;try{if(qe.transition=null,W=1,t)return t()}finally{W=r,qe.transition=n,B=e,!(B&6)&&kn()}}function jc(){je=yr.current,Y(yr)}function zn(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Zw(n)),oe!==null)for(n=oe.return;n!==null;){var r=n;switch(yc(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ao();break;case 3:jr(),Y(Me),Y(Ie),Pc();break;case 5:Nc(r);break;case 4:jr();break;case 13:Y(X);break;case 19:Y(X);break;case 10:Cc(r.type._context);break;case 22:case 23:jc()}n=n.return}if(me=t,oe=t=cn(t.current,null),ve=je=e,ce=0,rs=null,bc=kl=Gn=0,Oe=Oi=null,Un!==null){for(e=0;e<Un.length;e++)if(n=Un[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Un=null}return t}function Sg(t,e){do{var n=oe;try{if(Sc(),co.current=Bo,jo){for(var r=ee.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}jo=!1}if($n=0,fe=le=ee=null,xi=!1,es=0,Mc.current=null,n===null||n.return===null){ce=1,rs=e,oe=null;break}e:{var s=t,o=n.return,l=n,a=e;if(e=ve,l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var u=a,d=l,c=d.tag;if(!(d.mode&1)&&(c===0||c===11||c===15)){var h=d.alternate;h?(d.updateQueue=h.updateQueue,d.memoizedState=h.memoizedState,d.lanes=h.lanes):(d.updateQueue=null,d.memoizedState=null)}var g=bh(o);if(g!==null){g.flags&=-257,Fh(g,o,l,s,e),g.mode&1&&Mh(s,u,e),e=g,a=u;var _=e.updateQueue;if(_===null){var y=new Set;y.add(a),e.updateQueue=y}else _.add(a);break e}else{if(!(e&1)){Mh(s,u,e),Bc();break e}a=Error(S(426))}}else if(J&&l.mode&1){var C=bh(o);if(C!==null){!(C.flags&65536)&&(C.flags|=256),Fh(C,o,l,s,e),wc(Br(a,l));break e}}s=a=Br(a,l),ce!==4&&(ce=2),Oi===null?Oi=[s]:Oi.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var p=sg(s,a,e);Rh(s,p);break e;case 1:l=a;var f=s.type,m=s.stateNode;if(!(s.flags&128)&&(typeof f.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(an===null||!an.has(m)))){s.flags|=65536,e&=-e,s.lanes|=e;var w=og(s,l,e);Rh(s,w);break e}}s=s.return}while(s!==null)}Tg(n)}catch(T){e=T,oe===n&&n!==null&&(oe=n=n.return);continue}break}while(!0)}function Cg(){var t=zo.current;return zo.current=Bo,t===null?Bo:t}function Bc(){(ce===0||ce===3||ce===2)&&(ce=4),me===null||!(Gn&268435455)&&!(kl&268435455)||Qt(me,ve)}function Ho(t,e){var n=B;B|=2;var r=Cg();(me!==t||ve!==e)&&(wt=null,zn(t,e));do try{I0();break}catch(i){Sg(t,i)}while(!0);if(Sc(),B=n,zo.current=r,oe!==null)throw Error(S(261));return me=null,ve=0,ce}function I0(){for(;oe!==null;)Ig(oe)}function T0(){for(;oe!==null&&!Yy();)Ig(oe)}function Ig(t){var e=Ng(t.alternate,t,je);t.memoizedProps=t.pendingProps,e===null?Tg(t):oe=e,Mc.current=null}function Tg(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=v0(n,e),n!==null){n.flags&=32767,oe=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{ce=6,oe=null;return}}else if(n=_0(n,e,je),n!==null){oe=n;return}if(e=e.sibling,e!==null){oe=e;return}oe=e=t}while(e!==null);ce===0&&(ce=5)}function Dn(t,e,n){var r=W,i=qe.transition;try{qe.transition=null,W=1,k0(t,e,n,r)}finally{qe.transition=i,W=r}return null}function k0(t,e,n,r){do Rr();while(en!==null);if(B&6)throw Error(S(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(S(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(ow(t,s),t===me&&(oe=me=null,ve=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Zs||(Zs=!0,Pg(To,function(){return Rr(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=qe.transition,qe.transition=null;var o=W;W=1;var l=B;B|=4,Mc.current=null,w0(t,n),yg(n,t),Gw(ru),No=!!nu,ru=nu=null,t.current=n,E0(n),Jy(),B=l,W=o,qe.transition=s}else t.current=n;if(Zs&&(Zs=!1,en=t,Vo=i),s=t.pendingLanes,s===0&&(an=null),ew(n.stateNode),Fe(t,ie()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Wo)throw Wo=!1,t=Cu,Cu=null,t;return Vo&1&&t.tag!==0&&Rr(),s=t.pendingLanes,s&1?t===Iu?Li++:(Li=0,Iu=t):Li=0,kn(),null}function Rr(){if(en!==null){var t=sm(Vo),e=qe.transition,n=W;try{if(qe.transition=null,W=16>t?16:t,en===null)var r=!1;else{if(t=en,en=null,Vo=0,B&6)throw Error(S(331));var i=B;for(B|=4,k=t.current;k!==null;){var s=k,o=s.child;if(k.flags&16){var l=s.deletions;if(l!==null){for(var a=0;a<l.length;a++){var u=l[a];for(k=u;k!==null;){var d=k;switch(d.tag){case 0:case 11:case 15:Ai(8,d,s)}var c=d.child;if(c!==null)c.return=d,k=c;else for(;k!==null;){d=k;var h=d.sibling,g=d.return;if(gg(d),d===u){k=null;break}if(h!==null){h.return=g,k=h;break}k=g}}}var _=s.alternate;if(_!==null){var y=_.child;if(y!==null){_.child=null;do{var C=y.sibling;y.sibling=null,y=C}while(y!==null)}}k=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,k=o;else e:for(;k!==null;){if(s=k,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Ai(9,s,s.return)}var p=s.sibling;if(p!==null){p.return=s.return,k=p;break e}k=s.return}}var f=t.current;for(k=f;k!==null;){o=k;var m=o.child;if(o.subtreeFlags&2064&&m!==null)m.return=o,k=m;else e:for(o=f;k!==null;){if(l=k,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Tl(9,l)}}catch(T){ne(l,l.return,T)}if(l===o){k=null;break e}var w=l.sibling;if(w!==null){w.return=l.return,k=w;break e}k=l.return}}if(B=i,kn(),mt&&typeof mt.onPostCommitFiberRoot=="function")try{mt.onPostCommitFiberRoot(_l,t)}catch{}r=!0}return r}finally{W=n,qe.transition=e}}return!1}function Yh(t,e,n){e=Br(n,e),e=sg(t,e,1),t=ln(t,e,1),e=Pe(),t!==null&&(vs(t,1,e),Fe(t,e))}function ne(t,e,n){if(t.tag===3)Yh(t,t,n);else for(;e!==null;){if(e.tag===3){Yh(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(an===null||!an.has(r))){t=Br(n,t),t=og(e,t,1),e=ln(e,t,1),t=Pe(),e!==null&&(vs(e,1,t),Fe(e,t));break}}e=e.return}}function N0(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Pe(),t.pingedLanes|=t.suspendedLanes&n,me===t&&(ve&n)===n&&(ce===4||ce===3&&(ve&130023424)===ve&&500>ie()-Fc?zn(t,0):bc|=n),Fe(t,e)}function kg(t,e){e===0&&(t.mode&1?(e=Vs,Vs<<=1,!(Vs&130023424)&&(Vs=4194304)):e=1);var n=Pe();t=Lt(t,e),t!==null&&(vs(t,e,n),Fe(t,n))}function P0(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),kg(t,n)}function R0(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(S(314))}r!==null&&r.delete(e),kg(t,n)}var Ng;Ng=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Me.current)Le=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Le=!1,g0(t,e,n);Le=!!(t.flags&131072)}else Le=!1,J&&e.flags&1048576&&Am(e,Do,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;fo(t,e),t=e.pendingProps;var i=br(e,Ie.current);Pr(e,n),i=xc(null,e,r,t,i,n);var s=Ac();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,be(r)?(s=!0,Oo(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Tc(e),i.updater=Il,e.stateNode=i,i._reactInternals=e,hu(e,r,t,n),e=mu(null,e,r,!0,s,n)):(e.tag=0,J&&s&&vc(e),ke(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(fo(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=A0(r),t=et(r,t),i){case 0:e=pu(null,e,r,t,n);break e;case 1:e=Bh(null,e,r,t,n);break e;case 11:e=Uh(null,e,r,t,n);break e;case 14:e=jh(null,e,r,et(r.type,t),n);break e}throw Error(S(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:et(r,i),pu(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:et(r,i),Bh(t,e,r,i,n);case 3:e:{if(cg(e),t===null)throw Error(S(387));r=e.pendingProps,s=e.memoizedState,i=s.element,Fm(t,e),Fo(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Br(Error(S(423)),e),e=zh(t,e,r,n,i);break e}else if(r!==i){i=Br(Error(S(424)),e),e=zh(t,e,r,n,i);break e}else for(Be=on(e.stateNode.containerInfo.firstChild),ze=e,J=!0,nt=null,n=Mm(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Fr(),r===i){e=Dt(t,e,n);break e}ke(t,e,r,n)}e=e.child}return e;case 5:return Um(e),t===null&&uu(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,iu(r,i)?o=null:s!==null&&iu(r,s)&&(e.flags|=32),ug(t,e),ke(t,e,o,n),e.child;case 6:return t===null&&uu(e),null;case 13:return dg(t,e,n);case 4:return kc(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Ur(e,null,r,n):ke(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:et(r,i),Uh(t,e,r,i,n);case 7:return ke(t,e,e.pendingProps,n),e.child;case 8:return ke(t,e,e.pendingProps.children,n),e.child;case 12:return ke(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,G(Mo,r._currentValue),r._currentValue=o,s!==null)if(ut(s.value,o)){if(s.children===i.children&&!Me.current){e=Dt(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var a=l.firstContext;a!==null;){if(a.context===r){if(s.tag===1){a=Pt(-1,n&-n),a.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?a.next=a:(a.next=d.next,d.next=a),u.pending=a}}s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),cu(s.return,n,e),l.lanes|=n;break}a=a.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(S(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),cu(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}ke(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Pr(e,n),i=Ye(i),r=r(i),e.flags|=1,ke(t,e,r,n),e.child;case 14:return r=e.type,i=et(r,e.pendingProps),i=et(r.type,i),jh(t,e,r,i,n);case 15:return lg(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:et(r,i),fo(t,e),e.tag=1,be(r)?(t=!0,Oo(e)):t=!1,Pr(e,n),ig(e,r,i),hu(e,r,i,n),mu(null,e,r,!0,t,n);case 19:return hg(t,e,n);case 22:return ag(t,e,n)}throw Error(S(156,e.tag))};function Pg(t,e){return tm(t,e)}function x0(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Qe(t,e,n,r){return new x0(t,e,n,r)}function zc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function A0(t){if(typeof t=="function")return zc(t)?1:0;if(t!=null){if(t=t.$$typeof,t===oc)return 11;if(t===lc)return 14}return 2}function cn(t,e){var n=t.alternate;return n===null?(n=Qe(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function go(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")zc(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case ur:return Wn(n.children,i,s,e);case sc:o=8,i|=8;break;case ba:return t=Qe(12,n,e,i|2),t.elementType=ba,t.lanes=s,t;case Fa:return t=Qe(13,n,e,i),t.elementType=Fa,t.lanes=s,t;case Ua:return t=Qe(19,n,e,i),t.elementType=Ua,t.lanes=s,t;case Up:return Nl(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case bp:o=10;break e;case Fp:o=9;break e;case oc:o=11;break e;case lc:o=14;break e;case $t:o=16,r=null;break e}throw Error(S(130,t==null?t:typeof t,""))}return e=Qe(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Wn(t,e,n,r){return t=Qe(7,t,r,e),t.lanes=n,t}function Nl(t,e,n,r){return t=Qe(22,t,r,e),t.elementType=Up,t.lanes=n,t.stateNode={isHidden:!1},t}function va(t,e,n){return t=Qe(6,t,null,e),t.lanes=n,t}function ya(t,e,n){return e=Qe(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function O0(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Zl(0),this.expirationTimes=Zl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Zl(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Wc(t,e,n,r,i,s,o,l,a){return t=new O0(t,e,n,l,a),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Qe(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Tc(s),t}function L0(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ar,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Rg(t){if(!t)return yn;t=t._reactInternals;e:{if(nr(t)!==t||t.tag!==1)throw Error(S(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(be(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(S(171))}if(t.tag===1){var n=t.type;if(be(n))return Rm(t,n,e)}return e}function xg(t,e,n,r,i,s,o,l,a){return t=Wc(n,r,!0,t,i,s,o,l,a),t.context=Rg(null),n=t.current,r=Pe(),i=un(n),s=Pt(r,i),s.callback=e??null,ln(n,s,i),t.current.lanes=i,vs(t,i,r),Fe(t,r),t}function Pl(t,e,n,r){var i=e.current,s=Pe(),o=un(i);return n=Rg(n),e.context===null?e.context=n:e.pendingContext=n,e=Pt(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=ln(i,e,o),t!==null&&(lt(t,i,o,s),uo(t,i,o)),o}function $o(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Jh(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Vc(t,e){Jh(t,e),(t=t.alternate)&&Jh(t,e)}function D0(){return null}var Ag=typeof reportError=="function"?reportError:function(t){console.error(t)};function Hc(t){this._internalRoot=t}Rl.prototype.render=Hc.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(S(409));Pl(t,e,null,null)};Rl.prototype.unmount=Hc.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Kn(function(){Pl(null,t,null,null)}),e[Ot]=null}};function Rl(t){this._internalRoot=t}Rl.prototype.unstable_scheduleHydration=function(t){if(t){var e=am();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Kt.length&&e!==0&&e<Kt[n].priority;n++);Kt.splice(n,0,t),n===0&&cm(t)}};function $c(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function xl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Xh(){}function M0(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=$o(o);s.call(u)}}var o=xg(e,r,t,0,null,!1,!1,"",Xh);return t._reactRootContainer=o,t[Ot]=o.current,qi(t.nodeType===8?t.parentNode:t),Kn(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var u=$o(a);l.call(u)}}var a=Wc(t,0,!1,null,null,!1,!1,"",Xh);return t._reactRootContainer=a,t[Ot]=a.current,qi(t.nodeType===8?t.parentNode:t),Kn(function(){Pl(e,a,n,r)}),a}function Al(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var a=$o(o);l.call(a)}}Pl(e,o,t,i)}else o=M0(n,e,t,i,r);return $o(o)}om=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ei(e.pendingLanes);n!==0&&(cc(e,n|1),Fe(e,ie()),!(B&6)&&(zr=ie()+500,kn()))}break;case 13:Kn(function(){var r=Lt(t,1);if(r!==null){var i=Pe();lt(r,t,1,i)}}),Vc(t,1)}};dc=function(t){if(t.tag===13){var e=Lt(t,134217728);if(e!==null){var n=Pe();lt(e,t,134217728,n)}Vc(t,134217728)}};lm=function(t){if(t.tag===13){var e=un(t),n=Lt(t,e);if(n!==null){var r=Pe();lt(n,t,e,r)}Vc(t,e)}};am=function(){return W};um=function(t,e){var n=W;try{return W=t,e()}finally{W=n}};Qa=function(t,e,n){switch(e){case"input":if(za(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=El(r);if(!i)throw Error(S(90));Bp(r),za(r,i)}}}break;case"textarea":Wp(t,n);break;case"select":e=n.value,e!=null&&Ir(t,!!n.multiple,e,!1)}};qp=Uc;Yp=Kn;var b0={usingClientEntryPoint:!1,Events:[ws,fr,El,Kp,Qp,Uc]},pi={findFiberByHostInstance:Fn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},F0={bundleType:pi.bundleType,version:pi.version,rendererPackageName:pi.rendererPackageName,rendererConfig:pi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ut.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Zp(t),t===null?null:t.stateNode},findFiberByHostInstance:pi.findFiberByHostInstance||D0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var eo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!eo.isDisabled&&eo.supportsFiber)try{_l=eo.inject(F0),mt=eo}catch{}}He.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=b0;He.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!$c(e))throw Error(S(200));return L0(t,e,null,n)};He.createRoot=function(t,e){if(!$c(t))throw Error(S(299));var n=!1,r="",i=Ag;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Wc(t,1,!1,null,null,n,!1,r,i),t[Ot]=e.current,qi(t.nodeType===8?t.parentNode:t),new Hc(e)};He.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(S(188)):(t=Object.keys(t).join(","),Error(S(268,t)));return t=Zp(e),t=t===null?null:t.stateNode,t};He.flushSync=function(t){return Kn(t)};He.hydrate=function(t,e,n){if(!xl(e))throw Error(S(200));return Al(null,t,e,!0,n)};He.hydrateRoot=function(t,e,n){if(!$c(t))throw Error(S(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=Ag;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=xg(e,null,t,1,n??null,i,!1,s,o),t[Ot]=e.current,qi(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Rl(e)};He.render=function(t,e,n){if(!xl(e))throw Error(S(200));return Al(null,t,e,!1,n)};He.unmountComponentAtNode=function(t){if(!xl(t))throw Error(S(40));return t._reactRootContainer?(Kn(function(){Al(null,null,t,!1,function(){t._reactRootContainer=null,t[Ot]=null})}),!0):!1};He.unstable_batchedUpdates=Uc;He.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!xl(n))throw Error(S(200));if(t==null||t._reactInternals===void 0)throw Error(S(38));return Al(t,e,n,!1,r)};He.version="18.3.1-next-f1338f8080-20240426";function Og(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Og)}catch(t){console.error(t)}}Og(),Op.exports=He;var U0=Op.exports,Lg,Zh=U0;Lg=Zh.createRoot,Zh.hydrateRoot;/**
 * @remix-run/router v1.20.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function is(){return is=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},is.apply(this,arguments)}var tn;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(tn||(tn={}));const ef="popstate";function j0(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:l}=r.location;return Nu("",{pathname:s,search:o,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Go(i)}return z0(e,n,null,t)}function se(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Dg(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function B0(){return Math.random().toString(36).substr(2,8)}function tf(t,e){return{usr:t.state,key:t.key,idx:e}}function Nu(t,e,n,r){return n===void 0&&(n=null),is({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Yr(e):e,{state:n,key:e&&e.key||r||B0()})}function Go(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Yr(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function z0(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,l=tn.Pop,a=null,u=d();u==null&&(u=0,o.replaceState(is({},o.state,{idx:u}),""));function d(){return(o.state||{idx:null}).idx}function c(){l=tn.Pop;let C=d(),p=C==null?null:C-u;u=C,a&&a({action:l,location:y.location,delta:p})}function h(C,p){l=tn.Push;let f=Nu(y.location,C,p);u=d()+1;let m=tf(f,u),w=y.createHref(f);try{o.pushState(m,"",w)}catch(T){if(T instanceof DOMException&&T.name==="DataCloneError")throw T;i.location.assign(w)}s&&a&&a({action:l,location:y.location,delta:1})}function g(C,p){l=tn.Replace;let f=Nu(y.location,C,p);u=d();let m=tf(f,u),w=y.createHref(f);o.replaceState(m,"",w),s&&a&&a({action:l,location:y.location,delta:0})}function _(C){let p=i.location.origin!=="null"?i.location.origin:i.location.href,f=typeof C=="string"?C:Go(C);return f=f.replace(/ $/,"%20"),se(p,"No window.location.(origin|href) available to create URL for href: "+f),new URL(f,p)}let y={get action(){return l},get location(){return t(i,o)},listen(C){if(a)throw new Error("A history only accepts one active listener");return i.addEventListener(ef,c),a=C,()=>{i.removeEventListener(ef,c),a=null}},createHref(C){return e(i,C)},createURL:_,encodeLocation(C){let p=_(C);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:h,replace:g,go(C){return o.go(C)}};return y}var nf;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(nf||(nf={}));function W0(t,e,n){return n===void 0&&(n="/"),V0(t,e,n,!1)}function V0(t,e,n,r){let i=typeof e=="string"?Yr(e):e,s=Gc(i.pathname||"/",n);if(s==null)return null;let o=Mg(t);H0(o);let l=null;for(let a=0;l==null&&a<o.length;++a){let u=tE(s);l=Z0(o[a],u,r)}return l}function Mg(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,l)=>{let a={relativePath:l===void 0?s.path||"":l,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};a.relativePath.startsWith("/")&&(se(a.relativePath.startsWith(r),'Absolute route path "'+a.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),a.relativePath=a.relativePath.slice(r.length));let u=dn([r,a.relativePath]),d=n.concat(a);s.children&&s.children.length>0&&(se(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Mg(s.children,e,d,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:J0(u,s.index),routesMeta:d})};return t.forEach((s,o)=>{var l;if(s.path===""||!((l=s.path)!=null&&l.includes("?")))i(s,o);else for(let a of bg(s.path))i(s,o,a)}),e}function bg(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=bg(r.join("/")),l=[];return l.push(...o.map(a=>a===""?s:[s,a].join("/"))),i&&l.push(...o),l.map(a=>t.startsWith("/")&&a===""?"/":a)}function H0(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:X0(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const $0=/^:[\w-]+$/,G0=3,K0=2,Q0=1,q0=10,Y0=-2,rf=t=>t==="*";function J0(t,e){let n=t.split("/"),r=n.length;return n.some(rf)&&(r+=Y0),e&&(r+=K0),n.filter(i=>!rf(i)).reduce((i,s)=>i+($0.test(s)?G0:s===""?Q0:q0),r)}function X0(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function Z0(t,e,n){let{routesMeta:r}=t,i={},s="/",o=[];for(let l=0;l<r.length;++l){let a=r[l],u=l===r.length-1,d=s==="/"?e:e.slice(s.length)||"/",c=sf({path:a.relativePath,caseSensitive:a.caseSensitive,end:u},d),h=a.route;if(!c&&u&&n&&!r[r.length-1].route.index&&(c=sf({path:a.relativePath,caseSensitive:a.caseSensitive,end:!1},d)),!c)return null;Object.assign(i,c.params),o.push({params:i,pathname:dn([s,c.pathname]),pathnameBase:sE(dn([s,c.pathnameBase])),route:h}),c.pathnameBase!=="/"&&(s=dn([s,c.pathnameBase]))}return o}function sf(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=eE(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((u,d,c)=>{let{paramName:h,isOptional:g}=d;if(h==="*"){let y=l[c]||"";o=s.slice(0,s.length-y.length).replace(/(.)\/+$/,"$1")}const _=l[c];return g&&!_?u[h]=void 0:u[h]=(_||"").replace(/%2F/g,"/"),u},{}),pathname:s,pathnameBase:o,pattern:t}}function eE(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Dg(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,l,a)=>(r.push({paramName:l,isOptional:a!=null}),a?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function tE(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Dg(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Gc(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function nE(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Yr(t):t;return{pathname:n?n.startsWith("/")?n:rE(n,e):e,search:oE(r),hash:lE(i)}}function rE(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function wa(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function iE(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Kc(t,e){let n=iE(t);return e?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Qc(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Yr(t):(i=is({},t),se(!i.pathname||!i.pathname.includes("?"),wa("?","pathname","search",i)),se(!i.pathname||!i.pathname.includes("#"),wa("#","pathname","hash",i)),se(!i.search||!i.search.includes("#"),wa("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,l;if(o==null)l=n;else{let c=e.length-1;if(!r&&o.startsWith("..")){let h=o.split("/");for(;h[0]==="..";)h.shift(),c-=1;i.pathname=h.join("/")}l=c>=0?e[c]:"/"}let a=nE(i,l),u=o&&o!=="/"&&o.endsWith("/"),d=(s||o===".")&&n.endsWith("/");return!a.pathname.endsWith("/")&&(u||d)&&(a.pathname+="/"),a}const dn=t=>t.join("/").replace(/\/\/+/g,"/"),sE=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),oE=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,lE=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function aE(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const Fg=["post","put","patch","delete"];new Set(Fg);const uE=["get",...Fg];new Set(uE);/**
 * React Router v6.27.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ss(){return ss=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},ss.apply(this,arguments)}const qc=E.createContext(null),cE=E.createContext(null),Nn=E.createContext(null),Ol=E.createContext(null),jt=E.createContext({outlet:null,matches:[],isDataRoute:!1}),Ug=E.createContext(null);function dE(t,e){let{relative:n}=e===void 0?{}:e;Jr()||se(!1);let{basename:r,navigator:i}=E.useContext(Nn),{hash:s,pathname:o,search:l}=Bg(t,{relative:n}),a=o;return r!=="/"&&(a=o==="/"?r:dn([r,o])),i.createHref({pathname:a,search:l,hash:s})}function Jr(){return E.useContext(Ol)!=null}function Ss(){return Jr()||se(!1),E.useContext(Ol).location}function jg(t){E.useContext(Nn).static||E.useLayoutEffect(t)}function Ll(){let{isDataRoute:t}=E.useContext(jt);return t?kE():hE()}function hE(){Jr()||se(!1);let t=E.useContext(qc),{basename:e,future:n,navigator:r}=E.useContext(Nn),{matches:i}=E.useContext(jt),{pathname:s}=Ss(),o=JSON.stringify(Kc(i,n.v7_relativeSplatPath)),l=E.useRef(!1);return jg(()=>{l.current=!0}),E.useCallback(function(u,d){if(d===void 0&&(d={}),!l.current)return;if(typeof u=="number"){r.go(u);return}let c=Qc(u,JSON.parse(o),s,d.relative==="path");t==null&&e!=="/"&&(c.pathname=c.pathname==="/"?e:dn([e,c.pathname])),(d.replace?r.replace:r.push)(c,d.state,d)},[e,r,o,s,t])}const fE=E.createContext(null);function pE(t){let e=E.useContext(jt).outlet;return e&&E.createElement(fE.Provider,{value:t},e)}function Bg(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=E.useContext(Nn),{matches:i}=E.useContext(jt),{pathname:s}=Ss(),o=JSON.stringify(Kc(i,r.v7_relativeSplatPath));return E.useMemo(()=>Qc(t,JSON.parse(o),s,n==="path"),[t,o,s,n])}function mE(t,e){return gE(t,e)}function gE(t,e,n,r){Jr()||se(!1);let{navigator:i}=E.useContext(Nn),{matches:s}=E.useContext(jt),o=s[s.length-1],l=o?o.params:{};o&&o.pathname;let a=o?o.pathnameBase:"/";o&&o.route;let u=Ss(),d;if(e){var c;let C=typeof e=="string"?Yr(e):e;a==="/"||(c=C.pathname)!=null&&c.startsWith(a)||se(!1),d=C}else d=u;let h=d.pathname||"/",g=h;if(a!=="/"){let C=a.replace(/^\//,"").split("/");g="/"+h.replace(/^\//,"").split("/").slice(C.length).join("/")}let _=W0(t,{pathname:g}),y=EE(_&&_.map(C=>Object.assign({},C,{params:Object.assign({},l,C.params),pathname:dn([a,i.encodeLocation?i.encodeLocation(C.pathname).pathname:C.pathname]),pathnameBase:C.pathnameBase==="/"?a:dn([a,i.encodeLocation?i.encodeLocation(C.pathnameBase).pathname:C.pathnameBase])})),s,n,r);return e&&y?E.createElement(Ol.Provider,{value:{location:ss({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:tn.Pop}},y):y}function _E(){let t=TE(),e=aE(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return E.createElement(E.Fragment,null,E.createElement("h2",null,"Unexpected Application Error!"),E.createElement("h3",{style:{fontStyle:"italic"}},e),n?E.createElement("pre",{style:i},n):null,null)}const vE=E.createElement(_E,null);class yE extends E.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?E.createElement(jt.Provider,{value:this.props.routeContext},E.createElement(Ug.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function wE(t){let{routeContext:e,match:n,children:r}=t,i=E.useContext(qc);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),E.createElement(jt.Provider,{value:e},r)}function EE(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=r)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,l=(i=n)==null?void 0:i.errors;if(l!=null){let d=o.findIndex(c=>c.route.id&&(l==null?void 0:l[c.route.id])!==void 0);d>=0||se(!1),o=o.slice(0,Math.min(o.length,d+1))}let a=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<o.length;d++){let c=o[d];if((c.route.HydrateFallback||c.route.hydrateFallbackElement)&&(u=d),c.route.id){let{loaderData:h,errors:g}=n,_=c.route.loader&&h[c.route.id]===void 0&&(!g||g[c.route.id]===void 0);if(c.route.lazy||_){a=!0,u>=0?o=o.slice(0,u+1):o=[o[0]];break}}}return o.reduceRight((d,c,h)=>{let g,_=!1,y=null,C=null;n&&(g=l&&c.route.id?l[c.route.id]:void 0,y=c.route.errorElement||vE,a&&(u<0&&h===0?(_=!0,C=null):u===h&&(_=!0,C=c.route.hydrateFallbackElement||null)));let p=e.concat(o.slice(0,h+1)),f=()=>{let m;return g?m=y:_?m=C:c.route.Component?m=E.createElement(c.route.Component,null):c.route.element?m=c.route.element:m=d,E.createElement(wE,{match:c,routeContext:{outlet:d,matches:p,isDataRoute:n!=null},children:m})};return n&&(c.route.ErrorBoundary||c.route.errorElement||h===0)?E.createElement(yE,{location:n.location,revalidation:n.revalidation,component:y,error:g,children:f(),routeContext:{outlet:null,matches:p,isDataRoute:!0}}):f()},null)}var zg=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(zg||{}),Ko=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(Ko||{});function SE(t){let e=E.useContext(qc);return e||se(!1),e}function CE(t){let e=E.useContext(cE);return e||se(!1),e}function IE(t){let e=E.useContext(jt);return e||se(!1),e}function Wg(t){let e=IE(),n=e.matches[e.matches.length-1];return n.route.id||se(!1),n.route.id}function TE(){var t;let e=E.useContext(Ug),n=CE(Ko.UseRouteError),r=Wg(Ko.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function kE(){let{router:t}=SE(zg.UseNavigateStable),e=Wg(Ko.UseNavigateStable),n=E.useRef(!1);return jg(()=>{n.current=!0}),E.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,ss({fromRouteId:e},s)))},[t,e])}function Vg(t){let{to:e,replace:n,state:r,relative:i}=t;Jr()||se(!1);let{future:s,static:o}=E.useContext(Nn),{matches:l}=E.useContext(jt),{pathname:a}=Ss(),u=Ll(),d=Qc(e,Kc(l,s.v7_relativeSplatPath),a,i==="path"),c=JSON.stringify(d);return E.useEffect(()=>u(JSON.parse(c),{replace:n,state:r,relative:i}),[u,c,i,n,r]),null}function Hg(t){return pE(t.context)}function Ht(t){se(!1)}function NE(t){let{basename:e="/",children:n=null,location:r,navigationType:i=tn.Pop,navigator:s,static:o=!1,future:l}=t;Jr()&&se(!1);let a=e.replace(/^\/*/,"/"),u=E.useMemo(()=>({basename:a,navigator:s,static:o,future:ss({v7_relativeSplatPath:!1},l)}),[a,l,s,o]);typeof r=="string"&&(r=Yr(r));let{pathname:d="/",search:c="",hash:h="",state:g=null,key:_="default"}=r,y=E.useMemo(()=>{let C=Gc(d,a);return C==null?null:{location:{pathname:C,search:c,hash:h,state:g,key:_},navigationType:i}},[a,d,c,h,g,_,i]);return y==null?null:E.createElement(Nn.Provider,{value:u},E.createElement(Ol.Provider,{children:n,value:y}))}function PE(t){let{children:e,location:n}=t;return mE(Pu(e),n)}new Promise(()=>{});function Pu(t,e){e===void 0&&(e=[]);let n=[];return E.Children.forEach(t,(r,i)=>{if(!E.isValidElement(r))return;let s=[...e,i];if(r.type===E.Fragment){n.push.apply(n,Pu(r.props.children,s));return}r.type!==Ht&&se(!1),!r.props.index||!r.props.children||se(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Pu(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.27.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ru(){return Ru=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Ru.apply(this,arguments)}function RE(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function xE(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function AE(t,e){return t.button===0&&(!e||e==="_self")&&!xE(t)}const OE=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],LE="6";try{window.__reactRouterVersion=LE}catch{}const DE="startTransition",of=Ny[DE];function ME(t){let{basename:e,children:n,future:r,window:i}=t,s=E.useRef();s.current==null&&(s.current=j0({window:i,v5Compat:!0}));let o=s.current,[l,a]=E.useState({action:o.action,location:o.location}),{v7_startTransition:u}=r||{},d=E.useCallback(c=>{u&&of?of(()=>a(c)):a(c)},[a,u]);return E.useLayoutEffect(()=>o.listen(d),[o,d]),E.createElement(NE,{basename:e,children:n,location:l.location,navigationType:l.action,navigator:o,future:r})}const bE=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",FE=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Qn=E.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:l,target:a,to:u,preventScrollReset:d,viewTransition:c}=e,h=RE(e,OE),{basename:g}=E.useContext(Nn),_,y=!1;if(typeof u=="string"&&FE.test(u)&&(_=u,bE))try{let m=new URL(window.location.href),w=u.startsWith("//")?new URL(m.protocol+u):new URL(u),T=Gc(w.pathname,g);w.origin===m.origin&&T!=null?u=T+w.search+w.hash:y=!0}catch{}let C=dE(u,{relative:i}),p=UE(u,{replace:o,state:l,target:a,preventScrollReset:d,relative:i,viewTransition:c});function f(m){r&&r(m),m.defaultPrevented||p(m)}return E.createElement("a",Ru({},h,{href:_||C,onClick:y||s?r:f,ref:n,target:a}))});var lf;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(lf||(lf={}));var af;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(af||(af={}));function UE(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,viewTransition:l}=e===void 0?{}:e,a=Ll(),u=Ss(),d=Bg(t,{relative:o});return E.useCallback(c=>{if(AE(c,n)){c.preventDefault();let h=r!==void 0?r:Go(u)===Go(d);a(t,{replace:h,state:i,preventScrollReset:s,relative:o,viewTransition:l})}},[u,a,d,r,i,n,t,s,o,l])}var uf={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $g={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I=function(t,e){if(!t)throw Xr(e)},Xr=function(t){return new Error("Firebase Database ("+$g.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gg=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},jE=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],a=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(a>>10)),e[r++]=String.fromCharCode(56320+(a&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Yc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,a=i+2<t.length,u=a?t[i+2]:0,d=s>>2,c=(s&3)<<4|l>>4;let h=(l&15)<<2|u>>6,g=u&63;a||(g=64,o||(h=64)),r.push(n[d],n[c],n[h],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Gg(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):jE(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const c=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||u==null||c==null)throw new BE;const h=s<<2|l>>4;if(r.push(h),u!==64){const g=l<<4&240|u>>2;if(r.push(g),c!==64){const _=u<<6&192|c;r.push(_)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class BE extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Kg=function(t){const e=Gg(t);return Yc.encodeByteArray(e,!0)},Qo=function(t){return Kg(t).replace(/\./g,"")},qo=function(t){try{return Yc.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zE(t){return Qg(void 0,t)}function Qg(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!WE(n)||(t[n]=Qg(t[n],e[n]));return t}function WE(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VE(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HE=()=>VE().__FIREBASE_DEFAULTS__,$E=()=>{if(typeof process>"u"||typeof uf>"u")return;const t=uf.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},GE=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&qo(t[1]);return e&&JSON.parse(e)},Jc=()=>{try{return HE()||$E()||GE()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},qg=t=>{var e,n;return(n=(e=Jc())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},KE=t=>{const e=qg(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Yg=()=>{var t;return(t=Jc())===null||t===void 0?void 0:t.config},Jg=t=>{var e;return(e=Jc())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xc{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QE(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Qo(JSON.stringify(n)),Qo(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Re(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Zc(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Re())}function qE(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function YE(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Xg(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function JE(){const t=Re();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Zg(){return $g.NODE_ADMIN===!0}function XE(){try{return typeof indexedDB=="object"}catch{return!1}}function ZE(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eS="FirebaseError";class Pn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=eS,Object.setPrototypeOf(this,Pn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Cs.prototype.create)}}class Cs{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?tS(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new Pn(i,l,r)}}function tS(t,e){return t.replace(nS,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const nS=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function os(t){return JSON.parse(t)}function ae(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e_=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=os(qo(s[0])||""),n=os(qo(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},rS=function(t){const e=e_(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},iS=function(t){const e=e_(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yt(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Wr(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function xu(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Yo(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function Jo(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(cf(s)&&cf(o)){if(!Jo(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function cf(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zr(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Ci(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Ii(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sS{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let c=0;c<16;c++)r[c]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let c=0;c<16;c++)r[c]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let c=16;c<80;c++){const h=r[c-3]^r[c-8]^r[c-14]^r[c-16];r[c]=(h<<1|h>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],l=this.chain_[3],a=this.chain_[4],u,d;for(let c=0;c<80;c++){c<40?c<20?(u=l^s&(o^l),d=1518500249):(u=s^o^l,d=1859775393):c<60?(u=s&o|l&(s|o),d=2400959708):(u=s^o^l,d=3395469782);const h=(i<<5|i>>>27)+u+a+d+r[c]&4294967295;a=l,l=o,o=(s<<30|s>>>2)&4294967295,s=i,i=h}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+a&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function oS(t,e){const n=new lS(t,e);return n.subscribe.bind(n)}class lS{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");aS(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Ea),i.error===void 0&&(i.error=Ea),i.complete===void 0&&(i.complete=Ea);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function aS(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Ea(){}function ed(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uS=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,I(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Dl=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Te(t){return t&&t._delegate?t._delegate:t}class qn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cS{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Xc;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(hS(e))try{this.getOrInitializeService({instanceIdentifier:Mn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Mn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Mn){return this.instances.has(e)}getOptions(e=Mn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:dS(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Mn){return this.component?this.component.multipleInstances?e:Mn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function dS(t){return t===Mn?void 0:t}function hS(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fS{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new cS(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var V;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(V||(V={}));const pS={debug:V.DEBUG,verbose:V.VERBOSE,info:V.INFO,warn:V.WARN,error:V.ERROR,silent:V.SILENT},mS=V.INFO,gS={[V.DEBUG]:"log",[V.VERBOSE]:"log",[V.INFO]:"info",[V.WARN]:"warn",[V.ERROR]:"error"},_S=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=gS[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class td{constructor(e){this.name=e,this._logLevel=mS,this._logHandler=_S,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in V))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?pS[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,V.DEBUG,...e),this._logHandler(this,V.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,V.VERBOSE,...e),this._logHandler(this,V.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,V.INFO,...e),this._logHandler(this,V.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,V.WARN,...e),this._logHandler(this,V.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,V.ERROR,...e),this._logHandler(this,V.ERROR,...e)}}const vS=(t,e)=>e.some(n=>t instanceof n);let df,hf;function yS(){return df||(df=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function wS(){return hf||(hf=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const t_=new WeakMap,Au=new WeakMap,n_=new WeakMap,Sa=new WeakMap,nd=new WeakMap;function ES(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(hn(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&t_.set(n,t)}).catch(()=>{}),nd.set(e,t),e}function SS(t){if(Au.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Au.set(t,e)}let Ou={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Au.get(t);if(e==="objectStoreNames")return t.objectStoreNames||n_.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return hn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function CS(t){Ou=t(Ou)}function IS(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Ca(this),e,...n);return n_.set(r,e.sort?e.sort():[e]),hn(r)}:wS().includes(t)?function(...e){return t.apply(Ca(this),e),hn(t_.get(this))}:function(...e){return hn(t.apply(Ca(this),e))}}function TS(t){return typeof t=="function"?IS(t):(t instanceof IDBTransaction&&SS(t),vS(t,yS())?new Proxy(t,Ou):t)}function hn(t){if(t instanceof IDBRequest)return ES(t);if(Sa.has(t))return Sa.get(t);const e=TS(t);return e!==t&&(Sa.set(t,e),nd.set(e,t)),e}const Ca=t=>nd.get(t);function kS(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=hn(o);return r&&o.addEventListener("upgradeneeded",a=>{r(hn(o.result),a.oldVersion,a.newVersion,hn(o.transaction),a)}),n&&o.addEventListener("blocked",a=>n(a.oldVersion,a.newVersion,a)),l.then(a=>{s&&a.addEventListener("close",()=>s()),i&&a.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),l}const NS=["get","getKey","getAll","getAllKeys","count"],PS=["put","add","delete","clear"],Ia=new Map;function ff(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ia.get(e))return Ia.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=PS.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||NS.includes(n)))return;const s=async function(o,...l){const a=this.transaction(o,i?"readwrite":"readonly");let u=a.store;return r&&(u=u.index(l.shift())),(await Promise.all([u[n](...l),i&&a.done]))[0]};return Ia.set(e,s),s}CS(t=>({...t,get:(e,n,r)=>ff(e,n)||t.get(e,n,r),has:(e,n)=>!!ff(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RS{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(xS(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function xS(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Lu="@firebase/app",pf="0.10.15";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mt=new td("@firebase/app"),AS="@firebase/app-compat",OS="@firebase/analytics-compat",LS="@firebase/analytics",DS="@firebase/app-check-compat",MS="@firebase/app-check",bS="@firebase/auth",FS="@firebase/auth-compat",US="@firebase/database",jS="@firebase/data-connect",BS="@firebase/database-compat",zS="@firebase/functions",WS="@firebase/functions-compat",VS="@firebase/installations",HS="@firebase/installations-compat",$S="@firebase/messaging",GS="@firebase/messaging-compat",KS="@firebase/performance",QS="@firebase/performance-compat",qS="@firebase/remote-config",YS="@firebase/remote-config-compat",JS="@firebase/storage",XS="@firebase/storage-compat",ZS="@firebase/firestore",eC="@firebase/vertexai",tC="@firebase/firestore-compat",nC="firebase",rC="11.0.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Du="[DEFAULT]",iC={[Lu]:"fire-core",[AS]:"fire-core-compat",[LS]:"fire-analytics",[OS]:"fire-analytics-compat",[MS]:"fire-app-check",[DS]:"fire-app-check-compat",[bS]:"fire-auth",[FS]:"fire-auth-compat",[US]:"fire-rtdb",[jS]:"fire-data-connect",[BS]:"fire-rtdb-compat",[zS]:"fire-fn",[WS]:"fire-fn-compat",[VS]:"fire-iid",[HS]:"fire-iid-compat",[$S]:"fire-fcm",[GS]:"fire-fcm-compat",[KS]:"fire-perf",[QS]:"fire-perf-compat",[qS]:"fire-rc",[YS]:"fire-rc-compat",[JS]:"fire-gcs",[XS]:"fire-gcs-compat",[ZS]:"fire-fst",[tC]:"fire-fst-compat",[eC]:"fire-vertex","fire-js":"fire-js",[nC]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xo=new Map,sC=new Map,Mu=new Map;function mf(t,e){try{t.container.addComponent(e)}catch(n){Mt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Vr(t){const e=t.name;if(Mu.has(e))return Mt.debug(`There were multiple attempts to register component ${e}.`),!1;Mu.set(e,t);for(const n of Xo.values())mf(n,t);for(const n of sC.values())mf(n,t);return!0}function rd(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function pt(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oC={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},fn=new Cs("app","Firebase",oC);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lC{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new qn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw fn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ei=rC;function r_(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Du,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw fn.create("bad-app-name",{appName:String(i)});if(n||(n=Yg()),!n)throw fn.create("no-options");const s=Xo.get(i);if(s){if(Jo(n,s.options)&&Jo(r,s.config))return s;throw fn.create("duplicate-app",{appName:i})}const o=new fS(i);for(const a of Mu.values())o.addComponent(a);const l=new lC(n,r,o);return Xo.set(i,l),l}function i_(t=Du){const e=Xo.get(t);if(!e&&t===Du&&Yg())return r_();if(!e)throw fn.create("no-app",{appName:t});return e}function pn(t,e,n){var r;let i=(r=iC[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Mt.warn(l.join(" "));return}Vr(new qn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aC="firebase-heartbeat-database",uC=1,ls="firebase-heartbeat-store";let Ta=null;function s_(){return Ta||(Ta=kS(aC,uC,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(ls)}catch(n){console.warn(n)}}}}).catch(t=>{throw fn.create("idb-open",{originalErrorMessage:t.message})})),Ta}async function cC(t){try{const n=(await s_()).transaction(ls),r=await n.objectStore(ls).get(o_(t));return await n.done,r}catch(e){if(e instanceof Pn)Mt.warn(e.message);else{const n=fn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Mt.warn(n.message)}}}async function gf(t,e){try{const r=(await s_()).transaction(ls,"readwrite");await r.objectStore(ls).put(e,o_(t)),await r.done}catch(n){if(n instanceof Pn)Mt.warn(n.message);else{const r=fn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Mt.warn(r.message)}}}function o_(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dC=1024,hC=30*24*60*60*1e3;class fC{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new mC(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=_f();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=hC}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Mt.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=_f(),{heartbeatsToSend:r,unsentEntries:i}=pC(this._heartbeatsCache.heartbeats),s=Qo(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return Mt.warn(n),""}}}function _f(){return new Date().toISOString().substring(0,10)}function pC(t,e=dC){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),vf(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),vf(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class mC{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return XE()?ZE().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await cC(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return gf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return gf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function vf(t){return Qo(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gC(t){Vr(new qn("platform-logger",e=>new RS(e),"PRIVATE")),Vr(new qn("heartbeat",e=>new fC(e),"PRIVATE")),pn(Lu,pf,t),pn(Lu,pf,"esm2017"),pn("fire-js","")}gC("");var _C="firebase",vC="11.0.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */pn(_C,vC,"app");const yC={apiKey:"AIzaSyA9x-RrnPcGEUmmP3NBHkQPKamknN7NHE8",authDomain:"munns-quiz.firebaseapp.com",projectId:"munns-quiz",storageBucket:"munns-quiz.appspot.com",messagingSenderId:"334237009811",appId:"1:334237009811:web:bdfc75522b5e1f7c850a66",databaseURL:"https://munns-quiz-default-rtdb.asia-southeast1.firebasedatabase.app"};r_(yC);function id(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function l_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const wC=l_,a_=new Cs("auth","Firebase",l_());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zo=new td("@firebase/auth");function EC(t,...e){Zo.logLevel<=V.WARN&&Zo.warn(`Auth (${ei}): ${t}`,...e)}function _o(t,...e){Zo.logLevel<=V.ERROR&&Zo.error(`Auth (${ei}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ct(t,...e){throw sd(t,...e)}function _t(t,...e){return sd(t,...e)}function u_(t,e,n){const r=Object.assign(Object.assign({},wC()),{[e]:n});return new Cs("auth","Firebase",r).create(e,{appName:t.name})}function Rt(t){return u_(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function sd(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return a_.create(t,...e)}function O(t,e,...n){if(!t)throw sd(e,...n)}function It(t){const e="INTERNAL ASSERTION FAILED: "+t;throw _o(e),new Error(e)}function bt(t,e){t||It(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bu(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function SC(){return yf()==="http:"||yf()==="https:"}function yf(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CC(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(SC()||YE()||"connection"in navigator)?navigator.onLine:!0}function IC(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Is{constructor(e,n){this.shortDelay=e,this.longDelay=n,bt(n>e,"Short delay should be less than long delay!"),this.isMobile=Zc()||Xg()}get(){return CC()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function od(t,e){bt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c_{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;It("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;It("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;It("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TC={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kC=new Is(3e4,6e4);function Rn(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Bt(t,e,n,r,i={}){return d_(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=Zr(Object.assign({key:t.config.apiKey},o)).slice(1),a=await t._getAdditionalHeaders();a["Content-Type"]="application/json",t.languageCode&&(a["X-Firebase-Locale"]=t.languageCode);const u=Object.assign({method:e,headers:a},s);return qE()||(u.referrerPolicy="no-referrer"),c_.fetch()(h_(t,t.config.apiHost,n,l),u)})}async function d_(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},TC),e);try{const i=new PC(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw to(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[a,u]=l.split(" : ");if(a==="FEDERATED_USER_ID_ALREADY_LINKED")throw to(t,"credential-already-in-use",o);if(a==="EMAIL_EXISTS")throw to(t,"email-already-in-use",o);if(a==="USER_DISABLED")throw to(t,"user-disabled",o);const d=r[a]||a.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw u_(t,d,u);ct(t,d)}}catch(i){if(i instanceof Pn)throw i;ct(t,"network-request-failed",{message:String(i)})}}async function Ts(t,e,n,r,i={}){const s=await Bt(t,e,n,r,i);return"mfaPendingCredential"in s&&ct(t,"multi-factor-auth-required",{_serverResponse:s}),s}function h_(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?od(t.config,i):`${t.config.apiScheme}://${i}`}function NC(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class PC{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(_t(this.auth,"network-request-failed")),kC.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function to(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=_t(t,e,r);return i.customData._tokenResponse=n,i}function wf(t){return t!==void 0&&t.enterprise!==void 0}class RC{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return NC(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function xC(t,e){return Bt(t,"GET","/v2/recaptchaConfig",Rn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function AC(t,e){return Bt(t,"POST","/v1/accounts:delete",e)}async function f_(t,e){return Bt(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Di(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function OC(t,e=!1){const n=Te(t),r=await n.getIdToken(e),i=ld(r);O(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Di(ka(i.auth_time)),issuedAtTime:Di(ka(i.iat)),expirationTime:Di(ka(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function ka(t){return Number(t)*1e3}function ld(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return _o("JWT malformed, contained fewer than 3 sections"),null;try{const i=qo(n);return i?JSON.parse(i):(_o("Failed to decode base64 JWT payload"),null)}catch(i){return _o("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Ef(t){const e=ld(t);return O(e,"internal-error"),O(typeof e.exp<"u","internal-error"),O(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hr(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Pn&&LC(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function LC({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DC{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fu{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Di(this.lastLoginAt),this.creationTime=Di(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function el(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Hr(t,f_(n,{idToken:r}));O(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?p_(s.providerUserInfo):[],l=bC(t.providerData,o),a=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(l!=null&&l.length),d=a?u:!1,c={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new Fu(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(t,c)}async function MC(t){const e=Te(t);await el(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function bC(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function p_(t){return t.map(e=>{var{providerId:n}=e,r=id(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function FC(t,e){const n=await d_(t,{},async()=>{const r=Zr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=h_(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",c_.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function UC(t,e){return Bt(t,"POST","/v2/accounts:revokeToken",Rn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){O(e.idToken,"internal-error"),O(typeof e.idToken<"u","internal-error"),O(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Ef(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){O(e.length!==0,"internal-error");const n=Ef(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(O(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await FC(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new xr;return r&&(O(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(O(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(O(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new xr,this.toJSON())}_performRefresh(){return It("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vt(t,e){O(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Tt{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=id(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new DC(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Fu(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Hr(this,this.stsTokenManager.getToken(this.auth,e));return O(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return OC(this,e)}reload(){return MC(this)}_assign(e){this!==e&&(O(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Tt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){O(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await el(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(pt(this.auth.app))return Promise.reject(Rt(this.auth));const e=await this.getIdToken();return await Hr(this,AC(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,l,a,u,d;const c=(r=n.displayName)!==null&&r!==void 0?r:void 0,h=(i=n.email)!==null&&i!==void 0?i:void 0,g=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,_=(o=n.photoURL)!==null&&o!==void 0?o:void 0,y=(l=n.tenantId)!==null&&l!==void 0?l:void 0,C=(a=n._redirectEventId)!==null&&a!==void 0?a:void 0,p=(u=n.createdAt)!==null&&u!==void 0?u:void 0,f=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:m,emailVerified:w,isAnonymous:T,providerData:P,stsTokenManager:R}=n;O(m&&R,e,"internal-error");const x=xr.fromJSON(this.name,R);O(typeof m=="string",e,"internal-error"),Vt(c,e.name),Vt(h,e.name),O(typeof w=="boolean",e,"internal-error"),O(typeof T=="boolean",e,"internal-error"),Vt(g,e.name),Vt(_,e.name),Vt(y,e.name),Vt(C,e.name),Vt(p,e.name),Vt(f,e.name);const K=new Tt({uid:m,auth:e,email:h,emailVerified:w,displayName:c,isAnonymous:T,photoURL:_,phoneNumber:g,tenantId:y,stsTokenManager:x,createdAt:p,lastLoginAt:f});return P&&Array.isArray(P)&&(K.providerData=P.map(b=>Object.assign({},b))),C&&(K._redirectEventId=C),K}static async _fromIdTokenResponse(e,n,r=!1){const i=new xr;i.updateFromServerResponse(n);const s=new Tt({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await el(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];O(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?p_(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new xr;l.updateFromIdToken(r);const a=new Tt({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),u={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Fu(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(a,u),a}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sf=new Map;function kt(t){bt(t instanceof Function,"Expected a class definition");let e=Sf.get(t);return e?(bt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Sf.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}m_.type="NONE";const Cf=m_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vo(t,e,n){return`firebase:${t}:${e}:${n}`}class Ar{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=vo(this.userKey,i.apiKey,s),this.fullPersistenceKey=vo("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Tt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Ar(kt(Cf),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||kt(Cf);const o=vo(r,e.config.apiKey,e.name);let l=null;for(const u of n)try{const d=await u._get(o);if(d){const c=Tt._fromJSON(e,d);u!==s&&(l=c),s=u;break}}catch{}const a=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!a.length?new Ar(s,e,r):(s=a[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new Ar(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function If(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(y_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(g_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(E_(e))return"Blackberry";if(S_(e))return"Webos";if(__(e))return"Safari";if((e.includes("chrome/")||v_(e))&&!e.includes("edge/"))return"Chrome";if(w_(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function g_(t=Re()){return/firefox\//i.test(t)}function __(t=Re()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function v_(t=Re()){return/crios\//i.test(t)}function y_(t=Re()){return/iemobile/i.test(t)}function w_(t=Re()){return/android/i.test(t)}function E_(t=Re()){return/blackberry/i.test(t)}function S_(t=Re()){return/webos/i.test(t)}function ad(t=Re()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function jC(t=Re()){var e;return ad(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function BC(){return JE()&&document.documentMode===10}function C_(t=Re()){return ad(t)||w_(t)||S_(t)||E_(t)||/windows phone/i.test(t)||y_(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I_(t,e=[]){let n;switch(t){case"Browser":n=If(Re());break;case"Worker":n=`${If(Re())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ei}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zC{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const a=e(s);o(a)}catch(a){l(a)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function WC(t,e={}){return Bt(t,"GET","/v2/passwordPolicy",Rn(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VC=6;class HC{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:VC,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,l;const a={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,a),this.validatePasswordCharacterOptions(e,a),a.isValid&&(a.isValid=(n=a.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),a.isValid&&(a.isValid=(r=a.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),a.isValid&&(a.isValid=(i=a.containsLowercaseLetter)!==null&&i!==void 0?i:!0),a.isValid&&(a.isValid=(s=a.containsUppercaseLetter)!==null&&s!==void 0?s:!0),a.isValid&&(a.isValid=(o=a.containsNumericCharacter)!==null&&o!==void 0?o:!0),a.isValid&&(a.isValid=(l=a.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),a}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $C{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Tf(this),this.idTokenSubscription=new Tf(this),this.beforeStateQueue=new zC(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=a_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=kt(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Ar.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await f_(this,{idToken:e}),r=await Tt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(pt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,a=await this.tryRedirectSignIn(e);(!o||o===l)&&(a!=null&&a.user)&&(i=a.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return O(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await el(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=IC()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(pt(this.app))return Promise.reject(Rt(this));const n=e?Te(e):null;return n&&O(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&O(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return pt(this.app)?Promise.reject(Rt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return pt(this.app)?Promise.reject(Rt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(kt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await WC(this),n=new HC(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Cs("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await UC(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&kt(e)||this._popupRedirectResolver;O(n,this,"argument-error"),this.redirectPersistenceManager=await Ar.create(this,[kt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(O(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const a=e.addObserver(n,r,i);return()=>{o=!0,a()}}else{const a=e.addObserver(n);return()=>{o=!0,a()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return O(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=I_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&EC(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function rr(t){return Te(t)}class Tf{constructor(e){this.auth=e,this.observer=null,this.addObserver=oS(n=>this.observer=n)}get next(){return O(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ml={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function GC(t){Ml=t}function T_(t){return Ml.loadJS(t)}function KC(){return Ml.recaptchaEnterpriseScript}function QC(){return Ml.gapiScript}function qC(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class YC{constructor(){this.enterprise=new JC}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class JC{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const XC="recaptcha-enterprise",k_="NO_RECAPTCHA";class ZC{constructor(e){this.type=XC,this.auth=rr(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,l)=>{xC(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(a=>{if(a.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const u=new RC(a);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(a=>{l(a)})})}function i(s,o,l){const a=window.grecaptcha;wf(a)?a.enterprise.ready(()=>{a.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(k_)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new YC().execute("siteKey",{action:"verify"}):new Promise((s,o)=>{r(this.auth).then(l=>{if(!n&&wf(window.grecaptcha))i(l,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let a=KC();a.length!==0&&(a+=l),T_(a).then(()=>{i(l,s,o)}).catch(u=>{o(u)})}}).catch(l=>{o(l)})})}}async function kf(t,e,n,r=!1,i=!1){const s=new ZC(t);let o;if(i)o=k_;else try{o=await s.verify(n)}catch{o=await s.verify(n,!0)}const l=Object.assign({},e);if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const a=l.phoneEnrollmentInfo.phoneNumber,u=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:a,recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const a=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:a,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return r?Object.assign(l,{captchaResp:o}):Object.assign(l,{captchaResponse:o}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function Uu(t,e,n,r,i){var s;if(!((s=t._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await kf(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const l=await kf(t,e,n,n==="getOobCode");return r(t,l)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eI(t,e){const n=rd(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Jo(s,e??{}))return i;ct(i,"already-initialized")}return n.initialize({options:e})}function tI(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(kt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function nI(t,e,n){const r=rr(t);O(r._canInitEmulator,r,"emulator-config-failed"),O(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=N_(e),{host:o,port:l}=rI(e),a=l===null?"":`:${l}`;r.config.emulator={url:`${s}//${o}${a}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),iI()}function N_(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function rI(t){const e=N_(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Nf(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Nf(o)}}}function Nf(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function iI(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ud{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return It("not implemented")}_getIdTokenResponse(e){return It("not implemented")}_linkToIdToken(e,n){return It("not implemented")}_getReauthenticationResolver(e){return It("not implemented")}}async function sI(t,e){return Bt(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oI(t,e){return Ts(t,"POST","/v1/accounts:signInWithPassword",Rn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lI(t,e){return Ts(t,"POST","/v1/accounts:signInWithEmailLink",Rn(t,e))}async function aI(t,e){return Ts(t,"POST","/v1/accounts:signInWithEmailLink",Rn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class as extends ud{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new as(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new as(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Uu(e,n,"signInWithPassword",oI);case"emailLink":return lI(e,{email:this._email,oobCode:this._password});default:ct(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Uu(e,r,"signUpPassword",sI);case"emailLink":return aI(e,{idToken:n,email:this._email,oobCode:this._password});default:ct(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Or(t,e){return Ts(t,"POST","/v1/accounts:signInWithIdp",Rn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uI="http://localhost";class Yn extends ud{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Yn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):ct("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=id(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Yn(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Or(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Or(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Or(e,n)}buildRequest(){const e={requestUri:uI,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Zr(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cI(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function dI(t){const e=Ci(Ii(t)).link,n=e?Ci(Ii(e)).deep_link_id:null,r=Ci(Ii(t)).deep_link_id;return(r?Ci(Ii(r)).link:null)||r||n||e||t}class cd{constructor(e){var n,r,i,s,o,l;const a=Ci(Ii(e)),u=(n=a.apiKey)!==null&&n!==void 0?n:null,d=(r=a.oobCode)!==null&&r!==void 0?r:null,c=cI((i=a.mode)!==null&&i!==void 0?i:null);O(u&&d&&c,"argument-error"),this.apiKey=u,this.operation=c,this.code=d,this.continueUrl=(s=a.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=a.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(l=a.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=dI(e);try{return new cd(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti{constructor(){this.providerId=ti.PROVIDER_ID}static credential(e,n){return as._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=cd.parseLink(n);return O(r,"argument-error"),as._fromEmailAndCode(e,r.code,r.tenantId)}}ti.PROVIDER_ID="password";ti.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ti.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P_{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ks extends P_{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt extends ks{constructor(){super("facebook.com")}static credential(e){return Yn._fromParams({providerId:qt.PROVIDER_ID,signInMethod:qt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return qt.credentialFromTaggedObject(e)}static credentialFromError(e){return qt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return qt.credential(e.oauthAccessToken)}catch{return null}}}qt.FACEBOOK_SIGN_IN_METHOD="facebook.com";qt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt extends ks{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Yn._fromParams({providerId:Yt.PROVIDER_ID,signInMethod:Yt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Yt.credentialFromTaggedObject(e)}static credentialFromError(e){return Yt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Yt.credential(n,r)}catch{return null}}}Yt.GOOGLE_SIGN_IN_METHOD="google.com";Yt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt extends ks{constructor(){super("github.com")}static credential(e){return Yn._fromParams({providerId:Jt.PROVIDER_ID,signInMethod:Jt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Jt.credentialFromTaggedObject(e)}static credentialFromError(e){return Jt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Jt.credential(e.oauthAccessToken)}catch{return null}}}Jt.GITHUB_SIGN_IN_METHOD="github.com";Jt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt extends ks{constructor(){super("twitter.com")}static credential(e,n){return Yn._fromParams({providerId:Xt.PROVIDER_ID,signInMethod:Xt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Xt.credentialFromTaggedObject(e)}static credentialFromError(e){return Xt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Xt.credential(n,r)}catch{return null}}}Xt.TWITTER_SIGN_IN_METHOD="twitter.com";Xt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hI(t,e){return Ts(t,"POST","/v1/accounts:signUp",Rn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Tt._fromIdTokenResponse(e,r,i),o=Pf(r);return new Jn({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Pf(r);return new Jn({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Pf(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tl extends Pn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,tl.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new tl(e,n,r,i)}}function R_(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?tl._fromErrorAndOperation(t,s,e,r):s})}async function fI(t,e,n=!1){const r=await Hr(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Jn._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pI(t,e,n=!1){const{auth:r}=t;if(pt(r.app))return Promise.reject(Rt(r));const i="reauthenticate";try{const s=await Hr(t,R_(r,i,e,t),n);O(s.idToken,r,"internal-error");const o=ld(s.idToken);O(o,r,"internal-error");const{sub:l}=o;return O(t.uid===l,r,"user-mismatch"),Jn._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&ct(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function x_(t,e,n=!1){if(pt(t.app))return Promise.reject(Rt(t));const r="signIn",i=await R_(t,r,e),s=await Jn._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function mI(t,e){return x_(rr(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function A_(t){const e=rr(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function gI(t,e,n){if(pt(t.app))return Promise.reject(Rt(t));const r=rr(t),o=await Uu(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",hI).catch(a=>{throw a.code==="auth/password-does-not-meet-requirements"&&A_(t),a}),l=await Jn._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function _I(t,e,n){return pt(t.app)?Promise.reject(Rt(t)):mI(Te(t),ti.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&A_(t),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vI(t,e){return Bt(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yI(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=Te(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await Hr(r,vI(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const l=r.providerData.find(({providerId:a})=>a==="password");l&&(l.displayName=r.displayName,l.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function wI(t,e,n,r){return Te(t).onIdTokenChanged(e,n,r)}function EI(t,e,n){return Te(t).beforeAuthStateChanged(e,n)}function SI(t,e,n,r){return Te(t).onAuthStateChanged(e,n,r)}function CI(t){return Te(t).signOut()}const nl="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O_{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(nl,"1"),this.storage.removeItem(nl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const II=1e3,TI=10;class L_ extends O_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=C_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,a)=>{this.notifyListeners(o,a)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);BC()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,TI):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},II)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}L_.type="LOCAL";const kI=L_;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D_ extends O_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}D_.type="SESSION";const M_=D_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NI(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bl{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new bl(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async u=>u(n.origin,s)),a=await NI(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:a})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}bl.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dd(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PI{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,a)=>{const u=dd("",20);i.port1.start();const d=setTimeout(()=>{a(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(c){const h=c;if(h.data.eventId===u)switch(h.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(h.data.response);break;default:clearTimeout(d),clearTimeout(s),a(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vt(){return window}function RI(t){vt().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b_(){return typeof vt().WorkerGlobalScope<"u"&&typeof vt().importScripts=="function"}async function xI(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function AI(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function OI(){return b_()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F_="firebaseLocalStorageDb",LI=1,rl="firebaseLocalStorage",U_="fbase_key";class Ns{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Fl(t,e){return t.transaction([rl],e?"readwrite":"readonly").objectStore(rl)}function DI(){const t=indexedDB.deleteDatabase(F_);return new Ns(t).toPromise()}function ju(){const t=indexedDB.open(F_,LI);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(rl,{keyPath:U_})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(rl)?e(r):(r.close(),await DI(),e(await ju()))})})}async function Rf(t,e,n){const r=Fl(t,!0).put({[U_]:e,value:n});return new Ns(r).toPromise()}async function MI(t,e){const n=Fl(t,!1).get(e),r=await new Ns(n).toPromise();return r===void 0?null:r.value}function xf(t,e){const n=Fl(t,!0).delete(e);return new Ns(n).toPromise()}const bI=800,FI=3;class j_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ju(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>FI)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return b_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=bl._getInstance(OI()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await xI(),!this.activeServiceWorker)return;this.sender=new PI(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||AI()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ju();return await Rf(e,nl,"1"),await xf(e,nl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Rf(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>MI(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>xf(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Fl(i,!1).getAll();return new Ns(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),bI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}j_.type="LOCAL";const UI=j_;new Is(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jI(t,e){return e?kt(e):(O(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hd extends ud{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Or(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Or(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Or(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function BI(t){return x_(t.auth,new hd(t),t.bypassAuthState)}function zI(t){const{auth:e,user:n}=t;return O(n,e,"internal-error"),pI(n,new hd(t),t.bypassAuthState)}async function WI(t){const{auth:e,user:n}=t;return O(n,e,"internal-error"),fI(n,new hd(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B_{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const a={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(a))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return BI;case"linkViaPopup":case"linkViaRedirect":return WI;case"reauthViaPopup":case"reauthViaRedirect":return zI;default:ct(this.auth,"internal-error")}}resolve(e){bt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){bt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VI=new Is(2e3,1e4);class wr extends B_{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,wr.currentPopupAction&&wr.currentPopupAction.cancel(),wr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return O(e,this.auth,"internal-error"),e}async onExecution(){bt(this.filter.length===1,"Popup operations only handle one event");const e=dd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(_t(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(_t(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,wr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(_t(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,VI.get())};e()}}wr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HI="pendingRedirect",yo=new Map;class $I extends B_{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=yo.get(this.auth._key());if(!e){try{const r=await GI(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}yo.set(this.auth._key(),e)}return this.bypassAuthState||yo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function GI(t,e){const n=qI(e),r=QI(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function KI(t,e){yo.set(t._key(),e)}function QI(t){return kt(t._redirectPersistence)}function qI(t){return vo(HI,t.config.apiKey,t.name)}async function YI(t,e,n=!1){if(pt(t.app))return Promise.reject(Rt(t));const r=rr(t),i=jI(r,e),o=await new $I(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JI=10*60*1e3;class XI{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!ZI(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!z_(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(_t(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=JI&&this.cachedEventUids.clear(),this.cachedEventUids.has(Af(e))}saveEventToCache(e){this.cachedEventUids.add(Af(e)),this.lastProcessedEventTime=Date.now()}}function Af(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function z_({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function ZI(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return z_(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eT(t,e={}){return Bt(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tT=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,nT=/^https?/;async function rT(t){if(t.config.emulator)return;const{authorizedDomains:e}=await eT(t);for(const n of e)try{if(iT(n))return}catch{}ct(t,"unauthorized-domain")}function iT(t){const e=bu(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!nT.test(n))return!1;if(tT.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sT=new Is(3e4,6e4);function Of(){const t=vt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function oT(t){return new Promise((e,n)=>{var r,i,s;function o(){Of(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Of(),n(_t(t,"network-request-failed"))},timeout:sT.get()})}if(!((i=(r=vt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=vt().gapi)===null||s===void 0)&&s.load)o();else{const l=qC("iframefcb");return vt()[l]=()=>{gapi.load?o():n(_t(t,"network-request-failed"))},T_(`${QC()}?onload=${l}`).catch(a=>n(a))}}).catch(e=>{throw wo=null,e})}let wo=null;function lT(t){return wo=wo||oT(t),wo}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aT=new Is(5e3,15e3),uT="__/auth/iframe",cT="emulator/auth/iframe",dT={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},hT=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function fT(t){const e=t.config;O(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?od(e,cT):`https://${t.config.authDomain}/${uT}`,r={apiKey:e.apiKey,appName:t.name,v:ei},i=hT.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Zr(r).slice(1)}`}async function pT(t){const e=await lT(t),n=vt().gapi;return O(n,t,"internal-error"),e.open({where:document.body,url:fT(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:dT,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=_t(t,"network-request-failed"),l=vt().setTimeout(()=>{s(o)},aT.get());function a(){vt().clearTimeout(l),i(r)}r.ping(a).then(a,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mT={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},gT=500,_T=600,vT="_blank",yT="http://localhost";class Lf{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function wT(t,e,n,r=gT,i=_T){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const a=Object.assign(Object.assign({},mT),{width:r.toString(),height:i.toString(),top:s,left:o}),u=Re().toLowerCase();n&&(l=v_(u)?vT:n),g_(u)&&(e=e||yT,a.scrollbars="yes");const d=Object.entries(a).reduce((h,[g,_])=>`${h}${g}=${_},`,"");if(jC(u)&&l!=="_self")return ET(e||"",l),new Lf(null);const c=window.open(e||"",l,d);O(c,t,"popup-blocked");try{c.focus()}catch{}return new Lf(c)}function ET(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ST="__/auth/handler",CT="emulator/auth/handler",IT=encodeURIComponent("fac");async function Df(t,e,n,r,i,s){O(t.config.authDomain,t,"auth-domain-config-required"),O(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ei,eventId:i};if(e instanceof P_){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",xu(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,c]of Object.entries({}))o[d]=c}if(e instanceof ks){const d=e.getScopes().filter(c=>c!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const d of Object.keys(l))l[d]===void 0&&delete l[d];const a=await t._getAppCheckToken(),u=a?`#${IT}=${encodeURIComponent(a)}`:"";return`${TT(t)}?${Zr(l).slice(1)}${u}`}function TT({config:t}){return t.emulator?od(t,CT):`https://${t.authDomain}/${ST}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Na="webStorageSupport";class kT{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=M_,this._completeRedirectFn=YI,this._overrideRedirectResult=KI}async _openPopup(e,n,r,i){var s;bt((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Df(e,n,r,bu(),i);return wT(e,o,dd())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Df(e,n,r,bu(),i);return RI(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(bt(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await pT(e),r=new XI(e);return n.register("authEvent",i=>(O(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Na,{type:Na},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Na];o!==void 0&&n(!!o),ct(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=rT(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return C_()||__()||ad()}}const NT=kT;var Mf="@firebase/auth",bf="1.8.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PT{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){O(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RT(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function xT(t){Vr(new qn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;O(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const a={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:I_(t)},u=new $C(r,i,s,a);return tI(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Vr(new qn("auth-internal",e=>{const n=rr(e.getProvider("auth").getImmediate());return(r=>new PT(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),pn(Mf,bf,RT(t)),pn(Mf,bf,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AT=5*60,OT=Jg("authIdTokenMaxAge")||AT;let Ff=null;const LT=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>OT)return;const i=n==null?void 0:n.token;Ff!==i&&(Ff=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function DT(t=i_()){const e=rd(t,"auth");if(e.isInitialized())return e.getImmediate();const n=eI(t,{popupRedirectResolver:NT,persistence:[UI,kI,M_]}),r=Jg("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=LT(s.toString());EI(n,o,()=>o(n.currentUser)),wI(n,l=>o(l))}}const i=qg("auth");return i&&nI(n,`http://${i}`),n}function MT(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}GC({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=_t("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",MT().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});xT("Browser");const W_=lr.createContext();function Ps(){return E.useContext(W_)}function bT({children:t}){const[e,n]=E.useState(!0),[r,i]=E.useState(null),s=DT();E.useEffect(()=>SI(s,c=>{i(c),n(!1)}),[s]);async function o(d,c,h){try{await gI(s,d,c),await yI(s.currentUser,{displayName:h}),i(s.currentUser)}catch(g){throw console.error("Signup Error:",g.message),g}}async function l(d,c){try{await _I(s,d,c),i(s.currentUser)}catch(h){throw console.error("Login Error:",h.message),h}}function a(){return CI(s)}const u={currentUser:r,signup:o,login:l,logout:a};return v.jsx(W_.Provider,{value:u,children:!e&&t})}const FT=()=>{const{currentUser:t,logout:e}=Ps();return v.jsx("div",{className:"account",children:t?v.jsxs(v.Fragment,{children:[v.jsx("span",{children:t.displayName||"User"})," ",v.jsx("span",{className:"material-icons-outlined",title:"Account",children:"account_circle"}),v.jsx("span",{className:"material-icons-outlined",title:"Logout",onClick:e,style:{cursor:"pointer"},children:"logout"})]}):v.jsxs(v.Fragment,{children:[v.jsx(Qn,{to:"/signup",children:"Signup"}),v.jsx(Qn,{to:"/login",children:"Login"})]})})},UT="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAADEtJREFUeNrsXV9sFMcZ37OgUWlqkJ0KaME2D6aNXQUQVIVWkCOtAukLBxXOQ1sFYirUJ7ArtS+pbKtRpVYKB08VKgRbbR9q1OTy0kLVFGMeIAoophJOGz9gx25DlIAcJ3Wl5qXzG+Y7zc7N7M7+vT17P2l1d3u3f25+8/2+fzOzjpNLLrnkkksuuSwJKTTSzR4fL69hL1vFR/k9ybTYIPNn9/RN5IDE1/ho7CLbtrCtQ7wPIwTSVbYBoDEG1HwOiF3vL7HtgGj8NQlejgPDtpGsaVEhA0AcESCU6nQL0J4Rtg0zcKaXJSAMBFAQgDgRRRMWZh44ny7+r/q5ub3FWbnqM1FurcK2MwyYsWUBiABiQIBhJfffvuc8ePs9Z/GDT5z/sm1h5r4LBJM8BOcRp7VrndPc1sI+tzqf/cKjtpcFIEP1AKaQEhDQgpMCDN9e//6tGefezRn+Pk4BIK2Pr3fWbW9zWrrW22hT6sAUUgADtuGCFzWh589dm3Jmx6f4+7Rkw55ODs7aHe1+Pz0tgJlvWECEVlzwMtago7uX7jjvM22op0BzNu3v5gB5aA3AOMpAqTQcIH5aASCm/vgWe30vUzEAwNj0TLfTwcDxACZRbSkkAEZZ2AstNd0+ey1zQOg0ZvOhbVxjPOKYg0m4yYUYgfCkqKlX3nLeYVrRSAIHYMvx3SbvDBqyN+7AshAjGFec2twS95Runx2P3WNKk8Y6v7uN2xiDwK4MZwYQLzDmmNc0+ds3rOKGrAs8MWiLwbbEBkohKTBgKwDIUhIEm1uO7+GvSYFSiBsMaMOtU69n3nBHobCdL3wnMVAKcYNx48U/Nay9CAJK1w++bvLC9kaJ7JtCHndhuYJB/9WDkl8VtZx0AGEXG1Rd2+UEhmonNf+Zu/+CRZIFhF2k6GgShIYbayyD3fz5UMcZOiI0pJwoIFLg5xK4tfXORUWV7q4vO6OjL/PXMPR1s/xXnWt/RBTfEtMQgNEh7wAQSA42qmzY8EVncOAnzqVLFzkYzaubQ50HKSF4lhopixqQtawIQFUl9SZAVXHTxsLCx76NuHHjl7Tfzc7+y5mb+7fx3N3dX+HHo/F37vpajUbs2rnDuX79zVD3Djcf6aHOQ9tUewLqOhgrIDqqAhhxRuCHDx/gDdL/45+5GnHfvqf4/i7WmGEoJU1Brm7t9nY1RimhQ9u6wisstGNQpSrQVJyB3y7WW0+99HOn59neKhDHer/v9LItrLENS2HRPa9xZ/cvSroOvSmyDRGG/IRqxKZiztr2Pv89/gq6gBZcZpze1/ejVMHggBioMIjA49LY1Q5bA+9n1E86SpEpiWQhGVNoBLydOHpqPQUdVtNGA5EA0WkHr30nmDCEx5O2ViQVyWtYxEpLvGxISdWOd16Jh6pgwDdKWpA1EPoZXZ4q/zrSOUBbqKEoxS1oyXBYyhpISjsuX/4bBwF2AltWvKc55jZfEvYrlvNdm9JpSTEwIOKgjiS0gxs+FmsMDv3KOfbDk6k3ulecA81F57gz+c9YrnX3z3d0tuS5MBrynMqJcadHSEPSlPPnf2dFj37BaRBbomm3I16JxxUe9sOVIonbs0Kc4UVVaBS4wZOst6LH4rNNJF59L86NiByfV7Pt+o2b3JPzk8k7/4jtf8KWaOomJZMtKRjo6oq872b59cAaMvvu30P9ATQaejLsTBKCIBSaieg/iJSZkQ9r6J863aMa9wqL3A/aUtaBpOnKpBFIm/T0PJ8YGBR84hoXL76WGlXeu1XTfsUgNqSo0lUaYMDAp9lIAD9J4N1t+K66a42pqtikCQZdP8Swz6QFVBA2yxopEGWeXhqCvJ/GBhdtNGSr7mSRaYLZhY1tT1Q3fCaBwYbNqEvcwRwEVUv27z/M75ESnbGxQG1V8UkbQIqq/Uh6ekCaNKX1qKSYA+DEFYOo8qC2Y2+1cXvbfVCNDYQbgqLS4nGTjEod4lyCmnp/8p7TecgdtdsA0uGD6pLQCpW2ouatbGTxw4+1GRG1cOVpQz79T+OPyc2K2FK/qiFr0qAsL1Fr5lG9LzmC504Ei8LjSo2EAUUJEGGzx7SAhB3YFYdQyRbJPbU4hcaDnQGtmNImOsG5eg3pGZzv/Mu/T93VXvzwE9+ZwE1eVh9TkJMWuWSrqxQCLDQufoNXG3BRdUSN3pQrw8CJ0T+c5wWxrInnIIek53XQADXKwCJfBK8HmkDgIPdElUQ0spdTQGAQENAEnBOuLL4j+qIaDA2ikEe61Fua6nnxl069WB2LhYBMpiWAcO7cGd6ou76xvxofYL+p5t4vFbvQyEjH0HGkZShC4VoEKvZDY9IQDeM8mQogNjUHKgZB5Iar8vxfrlQ1CIKEIMDiPVpTRwFIlFqHVqhaRHEPaZCcy7KhrrTKzE1JgEGNWO0ZHy1oASH60RnXfU/vddEa5bzoWLWBesT5THEF1UVkWqNcFsBUtUS9517hdERqm/ZWddfVQIAEXchF5XDKVakcDbtA9QhogpZ+2DGkNatFQ8pRPR/piPOI7WnRoKbIH/kyWWswBgvg0TXQAWQq1N03bFhUUIIY9QkdokGSi+B8GQzYBlCN7Pf3i4ENclyg5VtxLADGCBWAQg3Ie7eBZuTEpQ5kVcNuiMF52MdHw7Q94coo4Nry/QIU3EdSLnNVQ+JYmWBo8JeuxsefVhvuowBBGYEyyxpgYPCnsdgvgIKGJo9NvZ7qBaolXxPF2siqxx61B0TIvFtDWgJdEL1X1Qj0OhkUlTrkKNoLlP7+F1y1cvA/pfPhNRH12AwpAig4hmwLOQLdX/2my0mQXXICI4qLrAkKx/wAcdHWys8FXwyMQJGlS2l07oIKrrcZdABQQBNkePFZrqHgmrIba+MREfXJMYssSN/I58H3MYNhpSHT8oeWx9eHurhNTYGMOYy7TRxAk2tMhpv2mdxiUxxEnpnfPU9GrJOseqy2k+imKKiAzEShrCDCuVgYYPC5FygAAw4DBZE6txaNWhb7oXVeoFDUL9Nf0oKV7bw6vwmQMdXtDbAsXmA5duwEb2A00LnfnK4Bhrypy2LKGfG/KcnIa/MCZHhGsAEyhVHwKOfFkhxy5MM2Eza5rJofYUWcuQ+SGfEOMJAWodiFXE/TbxHR+3k4ABkg0owsHu9oPCrSjLTq+Rq2ue2rIcL1nXADsi7Z/I7IY8mBoI6KAJyNu1kd3/Vsr7bn43vQJc6XFhjo1Joge8w224sfVlPxfD3CmCd3mmwKeUo0IzZKMQngEYBU9PIaipqkrN3Rpu6aN8051AGCVjkp2xGAkuZc9LhHfgCEegBBsm57u5V2aHNZArl59wnbnFzC2w6NY/SaNSBCKm6Va4+6YvSyFcNKdJWggIyo7q/F2ra5KGJot2GvvKG2hAvaOj5eRuDSQfuwSmfYKW1yTSOrorrccRSkDOsAj3gd41VTH3KkFRzAg7hAGFDw54LOx0hbkGaP+x41dDXtt6KDV4Gqohr3ze51PHLxAUNjzIf8jjMCInjujLyPtCQXf9uBpWU12jHsd6zfWidYVtv1jA+sNWgz5zDu4fxJy6iU7NQJgkpr7XhGu1T5kM2xvotgisVnXHPWMZERS2zkoo87NIvPQDuiLz4jqAuATKv82BqyVrLUBev6auSo7fG2w4CO1l54dx4sKrKZ2Q1NVrcSZNlYK0DECSuqgQcouTwUMEZnrRcKx6gvyHmCDJQ7qrrBiEI9FqlfNoLOub3/W7qv+oI+0sIaEOEG10x2h9e1nNMqoO0dfd/W0XclzLLjgYaSCuoa0tmTJOvvWRbDOvATQQx5aEAkr6ui9hKPBeqXsEel7Yj0rKr5VACR7MnEcgUF/xVgGLIWB6M8dSd/XEUIMDL3uAoFlLuO5mls+QNd6gCIAKWDvbzq5I88Go7jOvlDwSwoqqEeCqaAAk0p6r7PH5uXMiASMPmDJbMEiAAlf/RqlgCxoTACJn84cUqA2GoLUVnGH98No93X0I/v1mhL/oD7rACixCwA5YjtMaA1rNu1yDQH2oPVEGziGgRvK1c9wifKNLe18BnFAea6pA5EXQBRgDkhgAm9CpG6QOdDECJVMesGRF0BUcABKBgyWKrTLcB1haE+k4Qb23CAKHamJMApRtEcC5kQ2jASd2C3ZADRALRVALPFeTjGuBhBA7BdJSDS8JaWHCAeWkT5sppFn0WsQD1+Pmu9P5cGlP8LMABaGl2iQleu4gAAAABJRU5ErkJggg==",jT=()=>v.jsx("ul",{children:v.jsx("li",{children:v.jsxs(Qn,{to:"/",className:"brand",children:[v.jsx("img",{src:UT,alt:"Learn with Munna Logo"}),v.jsx("h3",{children:"Learn with Munna"})]})})}),BT=()=>v.jsx("div",{children:v.jsxs("nav",{className:"nav",children:[v.jsx(jT,{}),v.jsx(FT,{})]})}),zT=({children:t})=>v.jsxs("div",{children:[v.jsx(BT,{}),v.jsx("main",{className:"main",children:v.jsx("div",{className:"container",children:t})})]}),V_=({className:t,text:e,...n})=>v.jsxs("label",{className:t,children:[v.jsx("input",{type:"checkbox",...n}),v.jsxs("span",{children:[" ",e," "]})]}),H_=()=>v.jsx("div",{className:"answers",children:v.jsx(V_,{className:"answer",text:"test answer"})}),WT="/assets/3-CPb-twgY.jpg",VT=()=>v.jsxs("div",{className:"miniPlayer floatingBtn",children:[v.jsx("span",{className:"material-icons-outlined open",children:" play_circle_filled "}),v.jsx("span",{className:"material-icons-outlined close",children:" close "}),v.jsx("img",{src:WT,alt:"image"}),v.jsx("p",{children:"#23 React Hooks Bangla - React useReducer hook Bangla"})]}),fd=({className:t,children:e})=>v.jsx("button",{style:{padding:"0",background:"transparent",border:"none"},children:v.jsx("div",{className:`${t} button`,children:e})}),HT=()=>v.jsxs("div",{className:"progressBar",children:[v.jsx("div",{className:"backButton",children:v.jsx("span",{className:"material-icons-outlined",children:" arrow_back "})}),v.jsxs("div",{className:"rangeArea",children:[v.jsx("div",{className:"tooltip",children:"24% Cimplete!"}),v.jsx("div",{className:"rangeBody",children:v.jsx("div",{className:"progress",style:{width:"20%"}})})]}),v.jsx(Qn,{to:"/result",children:v.jsxs(fd,{className:"next",children:[v.jsx("span",{children:"Next Question"}),v.jsx("span",{className:"material-icons-outlined",children:" arrow_forward "})]})})]}),$T=()=>v.jsxs("div",{children:[v.jsx("h1",{children:"Pick three of your favorite Star Wars Flims"}),v.jsx("h4",{children:"Question can have multiple answers"}),v.jsx(H_,{}),v.jsx(HT,{}),v.jsx(VT,{})]}),GT=()=>v.jsxs("div",{className:"question",children:[v.jsxs("div",{className:"qtitle",children:[v.jsx("span",{className:"material-icons-outlined",children:" help_outline "}),"Here goes the question from Learn with Sumit?"]}),v.jsx(H_,{})]}),KT=()=>v.jsxs("div",{className:"analysis",children:[v.jsx("h1",{children:"Question Analysis"}),v.jsx("h4",{children:"You answerd 5 out of 10 questions correctly"}),v.jsxs("div",{className:"question",children:[v.jsxs("div",{className:"qtitle",children:[v.jsx("span",{className:"material-icons-outlined",children:" help_outline "}),"Here goes the question from Learn with Sumit?"]}),v.jsx(GT,{})]})]}),QT="/assets/success-W0v6xHCi.png",qT=()=>v.jsx("div",{children:v.jsxs("div",{className:"summary",children:[v.jsx("div",{className:"point",children:v.jsxs("p",{className:"score",children:["Your score is ",v.jsx("br",{}),"5 out of 10"]})}),v.jsx("div",{className:"badge",children:v.jsx("img",{src:QT,alt:"Success"})})]})}),YT=()=>v.jsxs("div",{children:[v.jsx(qT,{}),v.jsx(KT,{})]}),JT="/assets/signup-B5xDSIlp.svg",$_=()=>v.jsx("div",{children:v.jsx("div",{className:"illustration",children:v.jsx("img",{src:JT,alt:"Signup"})})}),G_=({children:t,...e})=>v.jsx("div",{children:v.jsx("form",{className:"signup form",...e,children:t})}),Er=({icon:t,...e})=>v.jsx("div",{children:v.jsxs("div",{className:"textInput",children:[v.jsx("input",{...e}),v.jsxs("span",{className:"material-icons-outlined",children:[" ",t," "]})]})}),XT=()=>{const[t,e]=E.useState(""),[n,r]=E.useState(""),[i,s]=E.useState(""),[o,l]=E.useState(""),[a,u]=E.useState(!1),[d,c]=E.useState(""),[h,g]=E.useState(!1),_=Ll(),{signup:y}=Ps();async function C(p){if(p.preventDefault(),!a)return c("You must agree to the terms and conditions");if(i!==o)return c("Passwords do not match");try{c(""),g(!0),await y(n,i,t),_("/")}catch(f){console.error(f),g(!1),c("Failed to create an account")}}return v.jsxs(G_,{onSubmit:C,children:[v.jsx(Er,{type:"text",placeholder:"Name",icon:"person",value:t,onChange:p=>e(p.target.value),required:!0}),v.jsx(Er,{type:"email",placeholder:"Email",icon:"email",value:n,onChange:p=>r(p.target.value),required:!0}),v.jsx(Er,{type:"password",placeholder:"Password",icon:"lock",value:i,onChange:p=>s(p.target.value),required:!0}),v.jsx(Er,{type:"password",placeholder:"Confirm Password",icon:"lock_clock",value:o,onChange:p=>l(p.target.value),required:!0}),v.jsx(V_,{text:"I agree to the terms",checked:a,onChange:p=>u(p.target.checked)}),v.jsx(fd,{disabled:h,type:"submit",children:v.jsx("span",{children:"Sign Up"})}),d&&v.jsx("p",{className:"error",children:d}),v.jsxs("div",{className:"info",children:["Already have an account? ",v.jsx(Qn,{to:"/login",children:"Login"})]})]})};function ZT(){return v.jsxs("div",{children:[v.jsx("h1",{children:"Create an account"}),v.jsxs("div",{className:"column",children:[v.jsx($_,{}),v.jsx(XT,{})]})]})}const ek=()=>{const[t,e]=E.useState(""),[n,r]=E.useState(""),[i,s]=E.useState(""),[o,l]=E.useState(!1),a=Ll(),{login:u}=Ps();async function d(c){c.preventDefault();try{s(""),l(!0),await u(t,n),a("/")}catch(h){console.error(h),l(!1),s("Failed to log in")}}return v.jsxs(G_,{onSubmit:d,children:[v.jsx(Er,{type:"email",placeholder:"Email",icon:"email",value:t,onChange:c=>e(c.target.value),required:!0}),v.jsx(Er,{type:"password",placeholder:"Password",icon:"lock",value:n,onChange:c=>r(c.target.value),required:!0}),v.jsx(fd,{disabled:o,type:"submit",children:v.jsx("span",{children:"Login"})}),i&&v.jsx("p",{className:"error",children:i}),v.jsxs("div",{className:"info",children:["Dont have an account? ",v.jsx(Qn,{to:"/signup",children:"Sign Up"})]})]})};function tk(){return v.jsxs("div",{children:[v.jsx("h1",{children:"Login to an account"}),v.jsxs("div",{className:"column",children:[v.jsx($_,{}),v.jsx(ek,{})]})]})}const nk=({title:t,id:e,noq:n})=>v.jsxs("div",{className:"video",children:[v.jsx("img",{src:`http://img.youtube.com/vi/${e}/maxresdefault.jpg`,alt:t}),v.jsxs("p",{children:[" ",t," "]}),v.jsxs("div",{className:"qmeta",children:[v.jsxs("p",{children:[" ",n," Questions"]}),v.jsxs("p",{children:["Total points : ",n*5," "]})]})]});var Uf={};const jf="@firebase/database",Bf="1.0.9";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let K_="";function rk(t){K_=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ik{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),ae(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:os(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sk{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return yt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q_=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new ik(e)}}catch{}return new sk},Bn=Q_("localStorage"),ok=Q_("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lr=new td("@firebase/database"),lk=function(){let t=1;return function(){return t++}}(),q_=function(t){const e=uS(t),n=new sS;n.update(e);const r=n.digest();return Yc.encodeByteArray(r)},Rs=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=Rs.apply(null,r):typeof r=="object"?e+=ae(r):e+=r,e+=" "}return e};let Mi=null,zf=!0;const ak=function(t,e){I(!e,"Can't turn on custom loggers persistently."),Lr.logLevel=V.VERBOSE,Mi=Lr.log.bind(Lr)},Ce=function(...t){if(zf===!0&&(zf=!1,Mi===null&&ok.get("logging_enabled")===!0&&ak()),Mi){const e=Rs.apply(null,t);Mi(e)}},xs=function(t){return function(...e){Ce(t,...e)}},Bu=function(...t){const e="FIREBASE INTERNAL ERROR: "+Rs(...t);Lr.error(e)},Ft=function(...t){const e=`FIREBASE FATAL ERROR: ${Rs(...t)}`;throw Lr.error(e),new Error(e)},We=function(...t){const e="FIREBASE WARNING: "+Rs(...t);Lr.warn(e)},uk=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&We("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},pd=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},ck=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Xn="[MIN_NAME]",wn="[MAX_NAME]",ni=function(t,e){if(t===e)return 0;if(t===Xn||e===wn)return-1;if(e===Xn||t===wn)return 1;{const n=Wf(t),r=Wf(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},dk=function(t,e){return t===e?0:t<e?-1:1},mi=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+ae(e))},md=function(t){if(typeof t!="object"||t===null)return ae(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=ae(e[r]),n+=":",n+=md(t[e[r]]);return n+="}",n},Y_=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function Ue(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const J_=function(t){I(!pd(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,l,a;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(l=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=l+r,o=Math.round(t*Math.pow(2,n-l)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const u=[];for(a=n;a;a-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(a=e;a;a-=1)u.push(s%2?1:0),s=Math.floor(s/2);u.push(i?1:0),u.reverse();const d=u.join("");let c="";for(a=0;a<64;a+=8){let h=parseInt(d.substr(a,8),2).toString(16);h.length===1&&(h="0"+h),c=c+h}return c.toLowerCase()},hk=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},fk=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function pk(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const mk=new RegExp("^-?(0*)\\d{1,10}$"),gk=-2147483648,_k=2147483647,Wf=function(t){if(mk.test(t)){const e=Number(t);if(e>=gk&&e<=_k)return e}return null},As=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw We("Exception was thrown by user callback.",n),e},Math.floor(0))}},vk=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},bi=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yk{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){We(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wk{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Ce("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',We(e)}}class Eo{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Eo.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gd="5",X_="v",Z_="s",ev="r",tv="f",nv=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,rv="ls",iv="p",zu="ac",sv="websocket",ov="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lv{constructor(e,n,r,i,s=!1,o="",l=!1,a=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this.isUsingEmulator=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Bn.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Bn.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function Ek(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function av(t,e,n){I(typeof e=="string","typeof type must == string"),I(typeof n=="object","typeof params must == object");let r;if(e===sv)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===ov)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);Ek(t)&&(n.ns=t.namespace);const i=[];return Ue(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sk{constructor(){this.counters_={}}incrementCounter(e,n=1){yt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return zE(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pa={},Ra={};function _d(t){const e=t.toString();return Pa[e]||(Pa[e]=new Sk),Pa[e]}function Ck(t,e){const n=t.toString();return Ra[n]||(Ra[n]=e()),Ra[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ik{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&As(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vf="start",Tk="close",kk="pLPCommand",Nk="pRTLPCB",uv="id",cv="pw",dv="ser",Pk="cb",Rk="seg",xk="ts",Ak="d",Ok="dframe",hv=1870,fv=30,Lk=hv-fv,Dk=25e3,Mk=3e4;class Sr{constructor(e,n,r,i,s,o,l){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=xs(e),this.stats_=_d(n),this.urlFn=a=>(this.appCheckToken&&(a[zu]=this.appCheckToken),av(n,ov,a))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new Ik(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Mk)),ck(()=>{if(this.isClosed_)return;this.scriptTagHolder=new vd((...s)=>{const[o,l,a,u,d]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Vf)this.id=l,this.password=a;else if(o===Tk)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,l]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const r={};r[Vf]="t",r[dv]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[Pk]=this.scriptTagHolder.uniqueCallbackIdentifier),r[X_]=gd,this.transportSessionId&&(r[Z_]=this.transportSessionId),this.lastSessionId&&(r[rv]=this.lastSessionId),this.applicationId&&(r[iv]=this.applicationId),this.appCheckToken&&(r[zu]=this.appCheckToken),typeof location<"u"&&location.hostname&&nv.test(location.hostname)&&(r[ev]=tv);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Sr.forceAllow_=!0}static forceDisallow(){Sr.forceDisallow_=!0}static isAvailable(){return Sr.forceAllow_?!0:!Sr.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!hk()&&!fk()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=ae(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=Kg(n),i=Y_(r,Lk);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[Ok]="t",r[uv]=e,r[cv]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=ae(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class vd{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=lk(),window[kk+this.uniqueCallbackIdentifier]=e,window[Nk+this.uniqueCallbackIdentifier]=n,this.myIFrame=vd.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){Ce("frame writing exception"),l.stack&&Ce(l.stack),Ce(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Ce("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[uv]=this.myID,e[cv]=this.myPW,e[dv]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+fv+r.length<=hv;){const o=this.pendingSegs.shift();r=r+"&"+Rk+i+"="+o.seg+"&"+xk+i+"="+o.ts+"&"+Ak+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(Dk)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{Ce("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bk=16384,Fk=45e3;let il=null;typeof MozWebSocket<"u"?il=MozWebSocket:typeof WebSocket<"u"&&(il=WebSocket);class rt{constructor(e,n,r,i,s,o,l){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=xs(this.connId),this.stats_=_d(n),this.connURL=rt.connectionURL_(n,o,l,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[X_]=gd,typeof location<"u"&&location.hostname&&nv.test(location.hostname)&&(o[ev]=tv),n&&(o[Z_]=n),r&&(o[rv]=r),i&&(o[zu]=i),s&&(o[iv]=s),av(e,sv,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Bn.set("previous_websocket_failure",!0);try{let r;Zg(),this.mySock=new il(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){rt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&il!==null&&!rt.forceDisallow_}static previouslyFailed(){return Bn.isInMemoryStorage||Bn.get("previous_websocket_failure")===!0}markConnectionHealthy(){Bn.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=os(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(I(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=ae(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=Y_(n,bk);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Fk))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}rt.responsesRequiredToBeHealthy=2;rt.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class us{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Sr,rt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=rt&&rt.isAvailable();let r=n&&!rt.previouslyFailed();if(e.webSocketOnly&&(n||We("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[rt];else{const i=this.transports_=[];for(const s of us.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);us.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}us.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uk=6e4,jk=5e3,Bk=10*1024,zk=100*1024,xa="t",Hf="d",Wk="s",$f="r",Vk="e",Gf="o",Kf="a",Qf="n",qf="p",Hk="h";class $k{constructor(e,n,r,i,s,o,l,a,u,d){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=a,this.onKill_=u,this.lastSessionId=d,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=xs("c:"+this.id+":"),this.transportManager_=new us(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=bi(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>zk?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Bk?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(xa in e){const n=e[xa];n===Kf?this.upgradeIfSecondaryHealthy_():n===$f?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Gf&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=mi("t",e),r=mi("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:qf,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Kf,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Qf,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=mi("t",e),r=mi("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=mi(xa,e);if(Hf in e){const r=e[Hf];if(n===Hk){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===Qf){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===Wk?this.onConnectionShutdown_(r):n===$f?this.onReset_(r):n===Vk?Bu("Server Error: "+r):n===Gf?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Bu("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),gd!==r&&We("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),bi(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(Uk))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):bi(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(jk))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:qf,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Bn.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pv{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mv{constructor(e){this.allowedEvents_=e,this.listeners_={},I(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){I(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sl extends mv{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Zc()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new sl}getInitialEvent(e){return I(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yf=32,Jf=768;class H{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function z(){return new H("")}function j(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function En(t){return t.pieces_.length-t.pieceNum_}function $(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new H(t.pieces_,e)}function gv(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function Gk(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function _v(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function vv(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new H(e,0)}function ue(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof H)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new H(n,0)}function F(t){return t.pieceNum_>=t.pieces_.length}function Ne(t,e){const n=j(t),r=j(e);if(n===null)return e;if(n===r)return Ne($(t),$(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function yv(t,e){if(En(t)!==En(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function it(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(En(t)>En(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class Kk{constructor(e,n){this.errorPrefix_=n,this.parts_=_v(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=Dl(this.parts_[r]);wv(this)}}function Qk(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Dl(e),wv(t)}function qk(t){const e=t.parts_.pop();t.byteLength_-=Dl(e),t.parts_.length>0&&(t.byteLength_-=1)}function wv(t){if(t.byteLength_>Jf)throw new Error(t.errorPrefix_+"has a key path longer than "+Jf+" bytes ("+t.byteLength_+").");if(t.parts_.length>Yf)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Yf+") or object contains a cycle "+bn(t))}function bn(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yd extends mv{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new yd}getInitialEvent(e){return I(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gi=1e3,Yk=60*5*1e3,Xf=30*1e3,Jk=1.3,Xk=3e4,Zk="server_kill",Zf=3;class xt extends pv{constructor(e,n,r,i,s,o,l,a){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=a,this.id=xt.nextPersistentConnectionId_++,this.log_=xs("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=gi,this.maxReconnectDelay_=Yk,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!Zg())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");yd.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&sl.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(ae(s)),I(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new Xc,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const l=o.d;o.s==="ok"?n.resolve(l):n.reject(l)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),I(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),I(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const l={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,l=>{const a=l.d,u=l.s;xt.warnOnListenWarnings_(a,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",l),u!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(u,a))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&yt(e,"w")){const r=Wr(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();We(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||iS(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Xf)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=rS(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),I(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+ae(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Bu("Unrecognized action received from server: "+ae(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){I(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=gi,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=gi,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>Xk&&(this.reconnectDelay_=gi),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Jk)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+xt.nextConnectionId_++,s=this.lastSessionId;let o=!1,l=null;const a=function(){l?l.close():(o=!0,r())},u=function(c){I(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(c)};this.realtime_={close:a,sendRequest:u};const d=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[c,h]=await Promise.all([this.authTokenProvider_.getToken(d),this.appCheckTokenProvider_.getToken(d)]);o?Ce("getToken() completed but was canceled"):(Ce("getToken() completed. Creating connection."),this.authToken_=c&&c.accessToken,this.appCheckToken_=h&&h.token,l=new $k(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,g=>{We(g+" ("+this.repoInfo_.toString()+")"),this.interrupt(Zk)},s))}catch(c){this.log_("Failed to get token: "+c),o||(this.repoInfo_.nodeAdmin&&We(c),a())}}}interrupt(e){Ce("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Ce("Resuming connection for reason: "+e),delete this.interruptReasons_[e],xu(this.interruptReasons_)&&(this.reconnectDelay_=gi,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>md(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new H(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){Ce("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Zf&&(this.reconnectDelay_=Xf,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Ce("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Zf&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+K_.replace(/\./g,"-")]=1,Zc()?e["framework.cordova"]=1:Xg()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=sl.getInstance().currentlyOnline();return xu(this.interruptReasons_)&&e}}xt.nextPersistentConnectionId_=0;xt.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new M(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ul{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new M(Xn,e),i=new M(Xn,n);return this.compare(r,i)!==0}minPost(){return M.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let no;class Ev extends Ul{static get __EMPTY_NODE(){return no}static set __EMPTY_NODE(e){no=e}compare(e,n){return ni(e.name,n.name)}isDefinedOn(e){throw Xr("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return M.MIN}maxPost(){return new M(wn,no)}makePost(e,n){return I(typeof e=="string","KeyIndex indexValue must always be a string."),new M(e,no)}toString(){return".key"}}const mn=new Ev;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ro{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class pe{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??pe.RED,this.left=i??De.EMPTY_NODE,this.right=s??De.EMPTY_NODE}copy(e,n,r,i,s){return new pe(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return De.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return De.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,pe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,pe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}pe.RED=!0;pe.BLACK=!1;class e1{copy(e,n,r,i,s){return this}insert(e,n,r){return new pe(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class De{constructor(e,n=De.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new De(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,pe.BLACK,null,null))}remove(e){return new De(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,pe.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new ro(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new ro(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new ro(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new ro(this.root_,null,this.comparator_,!0,e)}}De.EMPTY_NODE=new e1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function t1(t,e){return ni(t.name,e.name)}function wd(t,e){return ni(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Wu;function n1(t){Wu=t}const Sv=function(t){return typeof t=="number"?"number:"+J_(t):"string:"+t},Cv=function(t){if(t.isLeafNode()){const e=t.val();I(typeof e=="string"||typeof e=="number"||typeof e=="object"&&yt(e,".sv"),"Priority must be a string or number.")}else I(t===Wu||t.isEmpty(),"priority of unexpected type.");I(t===Wu||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ep;class he{constructor(e,n=he.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,I(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Cv(this.priorityNode_)}static set __childrenNodeConstructor(e){ep=e}static get __childrenNodeConstructor(){return ep}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new he(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:he.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return F(e)?this:j(e)===".priority"?this.priorityNode_:he.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:he.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=j(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(I(r!==".priority"||En(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,he.__childrenNodeConstructor.EMPTY_NODE.updateChild($(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Sv(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=J_(this.value_):e+=this.value_,this.lazyHash_=q_(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===he.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof he.__childrenNodeConstructor?-1:(I(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=he.VALUE_TYPE_ORDER.indexOf(n),s=he.VALUE_TYPE_ORDER.indexOf(r);return I(i>=0,"Unknown leaf type: "+n),I(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}he.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Iv,Tv;function r1(t){Iv=t}function i1(t){Tv=t}class s1 extends Ul{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?ni(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return M.MIN}maxPost(){return new M(wn,new he("[PRIORITY-POST]",Tv))}makePost(e,n){const r=Iv(e);return new M(n,new he("[PRIORITY-POST]",r))}toString(){return".priority"}}const Z=new s1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o1=Math.log(2);class l1{constructor(e){const n=s=>parseInt(Math.log(s)/o1,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const ol=function(t,e,n,r){t.sort(e);const i=function(a,u){const d=u-a;let c,h;if(d===0)return null;if(d===1)return c=t[a],h=n?n(c):c,new pe(h,c.node,pe.BLACK,null,null);{const g=parseInt(d/2,10)+a,_=i(a,g),y=i(g+1,u);return c=t[g],h=n?n(c):c,new pe(h,c.node,pe.BLACK,_,y)}},s=function(a){let u=null,d=null,c=t.length;const h=function(_,y){const C=c-_,p=c;c-=_;const f=i(C+1,p),m=t[C],w=n?n(m):m;g(new pe(w,m.node,y,null,f))},g=function(_){u?(u.left=_,u=_):(d=_,u=_)};for(let _=0;_<a.count;++_){const y=a.nextBitIsOne(),C=Math.pow(2,a.count-(_+1));y?h(C,pe.BLACK):(h(C,pe.BLACK),h(C,pe.RED))}return d},o=new l1(t.length),l=s(o);return new De(r||e,l)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Aa;const or={};class Nt{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return I(or&&Z,"ChildrenNode.ts has not been loaded"),Aa=Aa||new Nt({".priority":or},{".priority":Z}),Aa}get(e){const n=Wr(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof De?n:null}hasIndex(e){return yt(this.indexSet_,e.toString())}addIndex(e,n){I(e!==mn,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(M.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let l;i?l=ol(r,e.getCompare()):l=or;const a=e.toString(),u=Object.assign({},this.indexSet_);u[a]=e;const d=Object.assign({},this.indexes_);return d[a]=l,new Nt(d,u)}addToIndexes(e,n){const r=Yo(this.indexes_,(i,s)=>{const o=Wr(this.indexSet_,s);if(I(o,"Missing index implementation for "+s),i===or)if(o.isDefinedOn(e.node)){const l=[],a=n.getIterator(M.Wrap);let u=a.getNext();for(;u;)u.name!==e.name&&l.push(u),u=a.getNext();return l.push(e),ol(l,o.getCompare())}else return or;else{const l=n.get(e.name);let a=i;return l&&(a=a.remove(new M(e.name,l))),a.insert(e,e.node)}});return new Nt(r,this.indexSet_)}removeFromIndexes(e,n){const r=Yo(this.indexes_,i=>{if(i===or)return i;{const s=n.get(e.name);return s?i.remove(new M(e.name,s)):i}});return new Nt(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _i;class A{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&Cv(this.priorityNode_),this.children_.isEmpty()&&I(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return _i||(_i=new A(new De(wd),null,Nt.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||_i}updatePriority(e){return this.children_.isEmpty()?this:new A(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?_i:n}}getChild(e){const n=j(e);return n===null?this:this.getImmediateChild(n).getChild($(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(I(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new M(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?_i:this.priorityNode_;return new A(i,o,s)}}updateChild(e,n){const r=j(e);if(r===null)return n;{I(j(e)!==".priority"||En(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild($(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(Z,(o,l)=>{n[o]=l.val(e),r++,s&&A.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const l in n)o[l]=n[l];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Sv(this.getPriority().val())+":"),this.forEachChild(Z,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":q_(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new M(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new M(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new M(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,M.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,M.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Os?-1:0}withIndex(e){if(e===mn||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new A(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===mn||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(Z),i=n.getIterator(Z);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===mn?null:this.indexMap_.get(e.toString())}}A.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class a1 extends A{constructor(){super(new De(wd),A.EMPTY_NODE,Nt.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return A.EMPTY_NODE}isEmpty(){return!1}}const Os=new a1;Object.defineProperties(M,{MIN:{value:new M(Xn,A.EMPTY_NODE)},MAX:{value:new M(wn,Os)}});Ev.__EMPTY_NODE=A.EMPTY_NODE;he.__childrenNodeConstructor=A;n1(Os);i1(Os);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u1=!0;function _e(t,e=null){if(t===null)return A.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),I(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new he(n,_e(e))}if(!(t instanceof Array)&&u1){const n=[];let r=!1;if(Ue(t,(o,l)=>{if(o.substring(0,1)!=="."){const a=_e(l);a.isEmpty()||(r=r||!a.getPriority().isEmpty(),n.push(new M(o,a)))}}),n.length===0)return A.EMPTY_NODE;const s=ol(n,t1,o=>o.name,wd);if(r){const o=ol(n,Z.getCompare());return new A(s,_e(e),new Nt({".priority":o},{".priority":Z}))}else return new A(s,_e(e),Nt.Default)}else{let n=A.EMPTY_NODE;return Ue(t,(r,i)=>{if(yt(t,r)&&r.substring(0,1)!=="."){const s=_e(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(_e(e))}}r1(_e);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kv extends Ul{constructor(e){super(),this.indexPath_=e,I(!F(e)&&j(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?ni(e.name,n.name):s}makePost(e,n){const r=_e(e),i=A.EMPTY_NODE.updateChild(this.indexPath_,r);return new M(n,i)}maxPost(){const e=A.EMPTY_NODE.updateChild(this.indexPath_,Os);return new M(wn,e)}toString(){return _v(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c1 extends Ul{compare(e,n){const r=e.node.compareTo(n.node);return r===0?ni(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return M.MIN}maxPost(){return M.MAX}makePost(e,n){const r=_e(e);return new M(n,r)}toString(){return".value"}}const Nv=new c1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pv(t){return{type:"value",snapshotNode:t}}function $r(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function cs(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function ds(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function d1(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ed{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){I(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const l=e.getImmediateChild(n);return l.getChild(i).equals(r.getChild(i))&&l.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(cs(n,l)):I(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):l.isEmpty()?o.trackChildChange($r(n,r)):o.trackChildChange(ds(n,r,l))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(Z,(i,s)=>{n.hasChild(i)||r.trackChildChange(cs(i,s))}),n.isLeafNode()||n.forEachChild(Z,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(ds(i,s,o))}else r.trackChildChange($r(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?A.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hs{constructor(e){this.indexedFilter_=new Ed(e.getIndex()),this.index_=e.getIndex(),this.startPost_=hs.getStartPost_(e),this.endPost_=hs.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,i,s,o){return this.matches(new M(n,r))||(r=A.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=A.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(A.EMPTY_NODE);const s=this;return n.forEachChild(Z,(o,l)=>{s.matches(new M(o,l))||(i=i.updateImmediateChild(o,A.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h1{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new hs(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new M(n,r))||(r=A.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=A.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=A.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const l=s.getNext();if(this.withinDirectionalStart(l))if(this.withinDirectionalEnd(l))i=i.updateImmediateChild(l.name,l.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(A.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let o=0;for(;s.hasNext();){const l=s.getNext();o<this.limit_&&this.withinDirectionalStart(l)&&this.withinDirectionalEnd(l)?o++:i=i.updateImmediateChild(l.name,A.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const c=this.index_.getCompare();o=(h,g)=>c(g,h)}else o=this.index_.getCompare();const l=e;I(l.numChildren()===this.limit_,"");const a=new M(n,r),u=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),d=this.rangedFilter_.matches(a);if(l.hasChild(n)){const c=l.getImmediateChild(n);let h=i.getChildAfterChild(this.index_,u,this.reverse_);for(;h!=null&&(h.name===n||l.hasChild(h.name));)h=i.getChildAfterChild(this.index_,h,this.reverse_);const g=h==null?1:o(h,a);if(d&&!r.isEmpty()&&g>=0)return s!=null&&s.trackChildChange(ds(n,r,c)),l.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(cs(n,c));const y=l.updateImmediateChild(n,A.EMPTY_NODE);return h!=null&&this.rangedFilter_.matches(h)?(s!=null&&s.trackChildChange($r(h.name,h.node)),y.updateImmediateChild(h.name,h.node)):y}}else return r.isEmpty()?e:d&&o(u,a)>=0?(s!=null&&(s.trackChildChange(cs(u.name,u.node)),s.trackChildChange($r(n,r))),l.updateImmediateChild(n,r).updateImmediateChild(u.name,A.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sd{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Z}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return I(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return I(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Xn}hasEnd(){return this.endSet_}getIndexEndValue(){return I(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return I(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:wn}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return I(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Z}copy(){const e=new Sd;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function f1(t){return t.loadsAllData()?new Ed(t.getIndex()):t.hasLimit()?new h1(t):new hs(t)}function p1(t,e){const n=t.copy();return n.limitSet_=!0,n.limit_=e,n.viewFrom_="l",n}function m1(t,e,n){const r=t.copy();return r.startSet_=!0,e===void 0&&(e=null),r.indexStartValue_=e,n!=null?(r.startNameSet_=!0,r.indexStartName_=n):(r.startNameSet_=!1,r.indexStartName_=""),r}function g1(t,e){const n=t.copy();return n.index_=e,n}function tp(t){const e={};if(t.isDefault())return e;let n;if(t.index_===Z?n="$priority":t.index_===Nv?n="$value":t.index_===mn?n="$key":(I(t.index_ instanceof kv,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=ae(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=ae(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+ae(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=ae(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+ae(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function np(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==Z&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ll extends pv{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=xs("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(I(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=ll.getListenId_(e,r),l={};this.listens_[o]=l;const a=tp(e._queryParams);this.restRequest_(s+".json",a,(u,d)=>{let c=d;if(u===404&&(c=null,u=null),u===null&&this.onDataUpdate_(s,c,!1,r),Wr(this.listens_,o)===l){let h;u?u===401?h="permission_denied":h="rest_error:"+u:h="ok",i(h,null)}})}unlisten(e,n){const r=ll.getListenId_(e,n);delete this.listens_[r]}get(e){const n=tp(e._queryParams),r=e._path.toString(),i=new Xc;return this.restRequest_(r+".json",n,(s,o)=>{let l=o;s===404&&(l=null,s=null),s===null?(this.onDataUpdate_(r,l,!1,null),i.resolve(l)):i.reject(new Error(l))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Zr(n);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(r&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let a=null;if(l.status>=200&&l.status<300){try{a=os(l.responseText)}catch{We("Failed to parse JSON response for "+o+": "+l.responseText)}r(null,a)}else l.status!==401&&l.status!==404&&We("Got unsuccessful REST response for "+o+" Status: "+l.status),r(l.status);r=null}},l.open("GET",o,!0),l.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _1{constructor(){this.rootNode_=A.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function al(){return{value:null,children:new Map}}function Rv(t,e,n){if(F(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=j(e);t.children.has(r)||t.children.set(r,al());const i=t.children.get(r);e=$(e),Rv(i,e,n)}}function Vu(t,e,n){t.value!==null?n(e,t.value):v1(t,(r,i)=>{const s=new H(e.toString()+"/"+r);Vu(i,s,n)})}function v1(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y1{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Ue(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rp=10*1e3,w1=30*1e3,E1=5*60*1e3;class S1{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new y1(e);const r=rp+(w1-rp)*Math.random();bi(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;Ue(e,(i,s)=>{s>0&&yt(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),bi(this.reportStats_.bind(this),Math.floor(Math.random()*2*E1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var st;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(st||(st={}));function xv(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Cd(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Id(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ul{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=st.ACK_USER_WRITE,this.source=xv()}operationForChild(e){if(F(this.path)){if(this.affectedTree.value!=null)return I(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new H(e));return new ul(z(),n,this.revert)}}else return I(j(this.path)===e,"operationForChild called for unrelated child."),new ul($(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fs{constructor(e,n){this.source=e,this.path=n,this.type=st.LISTEN_COMPLETE}operationForChild(e){return F(this.path)?new fs(this.source,z()):new fs(this.source,$(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zn{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=st.OVERWRITE}operationForChild(e){return F(this.path)?new Zn(this.source,z(),this.snap.getImmediateChild(e)):new Zn(this.source,$(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ps{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=st.MERGE}operationForChild(e){if(F(this.path)){const n=this.children.subtree(new H(e));return n.isEmpty()?null:n.value?new Zn(this.source,z(),n.value):new ps(this.source,z(),n)}else return I(j(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new ps(this.source,$(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sn{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(F(e))return this.isFullyInitialized()&&!this.filtered_;const n=j(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C1{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function I1(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(d1(o.childName,o.snapshotNode))}),vi(t,i,"child_removed",e,r,n),vi(t,i,"child_added",e,r,n),vi(t,i,"child_moved",s,r,n),vi(t,i,"child_changed",e,r,n),vi(t,i,"value",e,r,n),i}function vi(t,e,n,r,i,s){const o=r.filter(l=>l.type===n);o.sort((l,a)=>k1(t,l,a)),o.forEach(l=>{const a=T1(t,l,s);i.forEach(u=>{u.respondsTo(l.type)&&e.push(u.createEvent(a,t.query_))})})}function T1(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function k1(t,e,n){if(e.childName==null||n.childName==null)throw Xr("Should only compare child_ events.");const r=new M(e.childName,e.snapshotNode),i=new M(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jl(t,e){return{eventCache:t,serverCache:e}}function Fi(t,e,n,r){return jl(new Sn(e,n,r),t.serverCache)}function Av(t,e,n,r){return jl(t.eventCache,new Sn(e,n,r))}function cl(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function er(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Oa;const N1=()=>(Oa||(Oa=new De(dk)),Oa);class q{constructor(e,n=N1()){this.value=e,this.children=n}static fromObject(e){let n=new q(null);return Ue(e,(r,i)=>{n=n.set(new H(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:z(),value:this.value};if(F(e))return null;{const r=j(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue($(e),n);return s!=null?{path:ue(new H(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(F(e))return this;{const n=j(e),r=this.children.get(n);return r!==null?r.subtree($(e)):new q(null)}}set(e,n){if(F(e))return new q(n,this.children);{const r=j(e),s=(this.children.get(r)||new q(null)).set($(e),n),o=this.children.insert(r,s);return new q(this.value,o)}}remove(e){if(F(e))return this.children.isEmpty()?new q(null):new q(null,this.children);{const n=j(e),r=this.children.get(n);if(r){const i=r.remove($(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new q(null):new q(this.value,s)}else return this}}get(e){if(F(e))return this.value;{const n=j(e),r=this.children.get(n);return r?r.get($(e)):null}}setTree(e,n){if(F(e))return n;{const r=j(e),s=(this.children.get(r)||new q(null)).setTree($(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new q(this.value,o)}}fold(e){return this.fold_(z(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(ue(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,z(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(F(e))return null;{const s=j(e),o=this.children.get(s);return o?o.findOnPath_($(e),ue(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,z(),n)}foreachOnPath_(e,n,r){if(F(e))return this;{this.value&&r(n,this.value);const i=j(e),s=this.children.get(i);return s?s.foreachOnPath_($(e),ue(n,i),r):new q(null)}}foreach(e){this.foreach_(z(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(ue(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(e){this.writeTree_=e}static empty(){return new at(new q(null))}}function Ui(t,e,n){if(F(e))return new at(new q(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=Ne(i,e);return s=s.updateChild(o,n),new at(t.writeTree_.set(i,s))}else{const i=new q(n),s=t.writeTree_.setTree(e,i);return new at(s)}}}function ip(t,e,n){let r=t;return Ue(n,(i,s)=>{r=Ui(r,ue(e,i),s)}),r}function sp(t,e){if(F(e))return at.empty();{const n=t.writeTree_.setTree(e,new q(null));return new at(n)}}function Hu(t,e){return ir(t,e)!=null}function ir(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Ne(n.path,e)):null}function op(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Z,(r,i)=>{e.push(new M(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new M(r,i.value))}),e}function gn(t,e){if(F(e))return t;{const n=ir(t,e);return n!=null?new at(new q(n)):new at(t.writeTree_.subtree(e))}}function $u(t){return t.writeTree_.isEmpty()}function Gr(t,e){return Ov(z(),t.writeTree_,e)}function Ov(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(I(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=Ov(ue(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(ue(t,".priority"),r)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bl(t,e){return bv(e,t)}function P1(t,e,n,r,i){I(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=Ui(t.visibleWrites,e,n)),t.lastWriteId=r}function R1(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function x1(t,e){const n=t.allWrites.findIndex(l=>l.writeId===e);I(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const l=t.allWrites[o];l.visible&&(o>=n&&A1(l,r.path)?i=!1:it(r.path,l.path)&&(s=!0)),o--}if(i){if(s)return O1(t),!0;if(r.snap)t.visibleWrites=sp(t.visibleWrites,r.path);else{const l=r.children;Ue(l,a=>{t.visibleWrites=sp(t.visibleWrites,ue(r.path,a))})}return!0}else return!1}function A1(t,e){if(t.snap)return it(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&it(ue(t.path,n),e))return!0;return!1}function O1(t){t.visibleWrites=Lv(t.allWrites,L1,z()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function L1(t){return t.visible}function Lv(t,e,n){let r=at.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let l;if(s.snap)it(n,o)?(l=Ne(n,o),r=Ui(r,l,s.snap)):it(o,n)&&(l=Ne(o,n),r=Ui(r,z(),s.snap.getChild(l)));else if(s.children){if(it(n,o))l=Ne(n,o),r=ip(r,l,s.children);else if(it(o,n))if(l=Ne(o,n),F(l))r=ip(r,z(),s.children);else{const a=Wr(s.children,j(l));if(a){const u=a.getChild($(l));r=Ui(r,z(),u)}}}else throw Xr("WriteRecord should have .snap or .children")}}return r}function Dv(t,e,n,r,i){if(!r&&!i){const s=ir(t.visibleWrites,e);if(s!=null)return s;{const o=gn(t.visibleWrites,e);if($u(o))return n;if(n==null&&!Hu(o,z()))return null;{const l=n||A.EMPTY_NODE;return Gr(o,l)}}}else{const s=gn(t.visibleWrites,e);if(!i&&$u(s))return n;if(!i&&n==null&&!Hu(s,z()))return null;{const o=function(u){return(u.visible||i)&&(!r||!~r.indexOf(u.writeId))&&(it(u.path,e)||it(e,u.path))},l=Lv(t.allWrites,o,e),a=n||A.EMPTY_NODE;return Gr(l,a)}}}function D1(t,e,n){let r=A.EMPTY_NODE;const i=ir(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(Z,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=gn(t.visibleWrites,e);return n.forEachChild(Z,(o,l)=>{const a=Gr(gn(s,new H(o)),l);r=r.updateImmediateChild(o,a)}),op(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=gn(t.visibleWrites,e);return op(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function M1(t,e,n,r,i){I(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=ue(e,n);if(Hu(t.visibleWrites,s))return null;{const o=gn(t.visibleWrites,s);return $u(o)?i.getChild(n):Gr(o,i.getChild(n))}}function b1(t,e,n,r){const i=ue(e,n),s=ir(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=gn(t.visibleWrites,i);return Gr(o,r.getNode().getImmediateChild(n))}else return null}function F1(t,e){return ir(t.visibleWrites,e)}function U1(t,e,n,r,i,s,o){let l;const a=gn(t.visibleWrites,e),u=ir(a,z());if(u!=null)l=u;else if(n!=null)l=Gr(a,n);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const d=[],c=o.getCompare(),h=s?l.getReverseIteratorFrom(r,o):l.getIteratorFrom(r,o);let g=h.getNext();for(;g&&d.length<i;)c(g,r)!==0&&d.push(g),g=h.getNext();return d}else return[]}function j1(){return{visibleWrites:at.empty(),allWrites:[],lastWriteId:-1}}function dl(t,e,n,r){return Dv(t.writeTree,t.treePath,e,n,r)}function Td(t,e){return D1(t.writeTree,t.treePath,e)}function lp(t,e,n,r){return M1(t.writeTree,t.treePath,e,n,r)}function hl(t,e){return F1(t.writeTree,ue(t.treePath,e))}function B1(t,e,n,r,i,s){return U1(t.writeTree,t.treePath,e,n,r,i,s)}function kd(t,e,n){return b1(t.writeTree,t.treePath,e,n)}function Mv(t,e){return bv(ue(t.treePath,e),t.writeTree)}function bv(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z1{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;I(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),I(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,ds(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,cs(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,$r(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,ds(r,e.snapshotNode,i.oldSnap));else throw Xr("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W1{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const Fv=new W1;class Nd{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new Sn(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return kd(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:er(this.viewCache_),s=B1(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V1(t){return{filter:t}}function H1(t,e){I(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),I(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function $1(t,e,n,r,i){const s=new z1;let o,l;if(n.type===st.OVERWRITE){const u=n;u.source.fromUser?o=Gu(t,e,u.path,u.snap,r,i,s):(I(u.source.fromServer,"Unknown source."),l=u.source.tagged||e.serverCache.isFiltered()&&!F(u.path),o=fl(t,e,u.path,u.snap,r,i,l,s))}else if(n.type===st.MERGE){const u=n;u.source.fromUser?o=K1(t,e,u.path,u.children,r,i,s):(I(u.source.fromServer,"Unknown source."),l=u.source.tagged||e.serverCache.isFiltered(),o=Ku(t,e,u.path,u.children,r,i,l,s))}else if(n.type===st.ACK_USER_WRITE){const u=n;u.revert?o=Y1(t,e,u.path,r,i,s):o=Q1(t,e,u.path,u.affectedTree,r,i,s)}else if(n.type===st.LISTEN_COMPLETE)o=q1(t,e,n.path,r,s);else throw Xr("Unknown operation type: "+n.type);const a=s.getChanges();return G1(e,o,a),{viewCache:o,changes:a}}function G1(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=cl(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(Pv(cl(e)))}}function Uv(t,e,n,r,i,s){const o=e.eventCache;if(hl(r,n)!=null)return e;{let l,a;if(F(n))if(I(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=er(e),d=u instanceof A?u:A.EMPTY_NODE,c=Td(r,d);l=t.filter.updateFullNode(e.eventCache.getNode(),c,s)}else{const u=dl(r,er(e));l=t.filter.updateFullNode(e.eventCache.getNode(),u,s)}else{const u=j(n);if(u===".priority"){I(En(n)===1,"Can't have a priority with additional path components");const d=o.getNode();a=e.serverCache.getNode();const c=lp(r,n,d,a);c!=null?l=t.filter.updatePriority(d,c):l=o.getNode()}else{const d=$(n);let c;if(o.isCompleteForChild(u)){a=e.serverCache.getNode();const h=lp(r,n,o.getNode(),a);h!=null?c=o.getNode().getImmediateChild(u).updateChild(d,h):c=o.getNode().getImmediateChild(u)}else c=kd(r,u,e.serverCache);c!=null?l=t.filter.updateChild(o.getNode(),u,c,d,i,s):l=o.getNode()}}return Fi(e,l,o.isFullyInitialized()||F(n),t.filter.filtersNodes())}}function fl(t,e,n,r,i,s,o,l){const a=e.serverCache;let u;const d=o?t.filter:t.filter.getIndexedFilter();if(F(n))u=d.updateFullNode(a.getNode(),r,null);else if(d.filtersNodes()&&!a.isFiltered()){const g=a.getNode().updateChild(n,r);u=d.updateFullNode(a.getNode(),g,null)}else{const g=j(n);if(!a.isCompleteForPath(n)&&En(n)>1)return e;const _=$(n),C=a.getNode().getImmediateChild(g).updateChild(_,r);g===".priority"?u=d.updatePriority(a.getNode(),C):u=d.updateChild(a.getNode(),g,C,_,Fv,null)}const c=Av(e,u,a.isFullyInitialized()||F(n),d.filtersNodes()),h=new Nd(i,c,s);return Uv(t,c,n,i,h,l)}function Gu(t,e,n,r,i,s,o){const l=e.eventCache;let a,u;const d=new Nd(i,e,s);if(F(n))u=t.filter.updateFullNode(e.eventCache.getNode(),r,o),a=Fi(e,u,!0,t.filter.filtersNodes());else{const c=j(n);if(c===".priority")u=t.filter.updatePriority(e.eventCache.getNode(),r),a=Fi(e,u,l.isFullyInitialized(),l.isFiltered());else{const h=$(n),g=l.getNode().getImmediateChild(c);let _;if(F(h))_=r;else{const y=d.getCompleteChild(c);y!=null?gv(h)===".priority"&&y.getChild(vv(h)).isEmpty()?_=y:_=y.updateChild(h,r):_=A.EMPTY_NODE}if(g.equals(_))a=e;else{const y=t.filter.updateChild(l.getNode(),c,_,h,d,o);a=Fi(e,y,l.isFullyInitialized(),t.filter.filtersNodes())}}}return a}function ap(t,e){return t.eventCache.isCompleteForChild(e)}function K1(t,e,n,r,i,s,o){let l=e;return r.foreach((a,u)=>{const d=ue(n,a);ap(e,j(d))&&(l=Gu(t,l,d,u,i,s,o))}),r.foreach((a,u)=>{const d=ue(n,a);ap(e,j(d))||(l=Gu(t,l,d,u,i,s,o))}),l}function up(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function Ku(t,e,n,r,i,s,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let a=e,u;F(n)?u=r:u=new q(null).setTree(n,r);const d=e.serverCache.getNode();return u.children.inorderTraversal((c,h)=>{if(d.hasChild(c)){const g=e.serverCache.getNode().getImmediateChild(c),_=up(t,g,h);a=fl(t,a,new H(c),_,i,s,o,l)}}),u.children.inorderTraversal((c,h)=>{const g=!e.serverCache.isCompleteForChild(c)&&h.value===null;if(!d.hasChild(c)&&!g){const _=e.serverCache.getNode().getImmediateChild(c),y=up(t,_,h);a=fl(t,a,new H(c),y,i,s,o,l)}}),a}function Q1(t,e,n,r,i,s,o){if(hl(i,n)!=null)return e;const l=e.serverCache.isFiltered(),a=e.serverCache;if(r.value!=null){if(F(n)&&a.isFullyInitialized()||a.isCompleteForPath(n))return fl(t,e,n,a.getNode().getChild(n),i,s,l,o);if(F(n)){let u=new q(null);return a.getNode().forEachChild(mn,(d,c)=>{u=u.set(new H(d),c)}),Ku(t,e,n,u,i,s,l,o)}else return e}else{let u=new q(null);return r.foreach((d,c)=>{const h=ue(n,d);a.isCompleteForPath(h)&&(u=u.set(d,a.getNode().getChild(h)))}),Ku(t,e,n,u,i,s,l,o)}}function q1(t,e,n,r,i){const s=e.serverCache,o=Av(e,s.getNode(),s.isFullyInitialized()||F(n),s.isFiltered());return Uv(t,o,n,r,Fv,i)}function Y1(t,e,n,r,i,s){let o;if(hl(r,n)!=null)return e;{const l=new Nd(r,e,i),a=e.eventCache.getNode();let u;if(F(n)||j(n)===".priority"){let d;if(e.serverCache.isFullyInitialized())d=dl(r,er(e));else{const c=e.serverCache.getNode();I(c instanceof A,"serverChildren would be complete if leaf node"),d=Td(r,c)}d=d,u=t.filter.updateFullNode(a,d,s)}else{const d=j(n);let c=kd(r,d,e.serverCache);c==null&&e.serverCache.isCompleteForChild(d)&&(c=a.getImmediateChild(d)),c!=null?u=t.filter.updateChild(a,d,c,$(n),l,s):e.eventCache.getNode().hasChild(d)?u=t.filter.updateChild(a,d,A.EMPTY_NODE,$(n),l,s):u=a,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=dl(r,er(e)),o.isLeafNode()&&(u=t.filter.updateFullNode(u,o,s)))}return o=e.serverCache.isFullyInitialized()||hl(r,z())!=null,Fi(e,u,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J1{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new Ed(r.getIndex()),s=f1(r);this.processor_=V1(s);const o=n.serverCache,l=n.eventCache,a=i.updateFullNode(A.EMPTY_NODE,o.getNode(),null),u=s.updateFullNode(A.EMPTY_NODE,l.getNode(),null),d=new Sn(a,o.isFullyInitialized(),i.filtersNodes()),c=new Sn(u,l.isFullyInitialized(),s.filtersNodes());this.viewCache_=jl(c,d),this.eventGenerator_=new C1(this.query_)}get query(){return this.query_}}function X1(t){return t.viewCache_.serverCache.getNode()}function Z1(t){return cl(t.viewCache_)}function eN(t,e){const n=er(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!F(e)&&!n.getImmediateChild(j(e)).isEmpty())?n.getChild(e):null}function cp(t){return t.eventRegistrations_.length===0}function tN(t,e){t.eventRegistrations_.push(e)}function dp(t,e,n){const r=[];if(n){I(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function hp(t,e,n,r){e.type===st.MERGE&&e.source.queryId!==null&&(I(er(t.viewCache_),"We should always have a full cache before handling merges"),I(cl(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=$1(t.processor_,i,e,n,r);return H1(t.processor_,s.viewCache),I(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,jv(t,s.changes,s.viewCache.eventCache.getNode(),null)}function nN(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(Z,(s,o)=>{r.push($r(s,o))}),n.isFullyInitialized()&&r.push(Pv(n.getNode())),jv(t,r,n.getNode(),e)}function jv(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return I1(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let pl;class Bv{constructor(){this.views=new Map}}function rN(t){I(!pl,"__referenceConstructor has already been defined"),pl=t}function iN(){return I(pl,"Reference.ts has not been loaded"),pl}function sN(t){return t.views.size===0}function Pd(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return I(s!=null,"SyncTree gave us an op for an invalid query."),hp(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(hp(o,e,n,r));return s}}function zv(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let l=dl(n,i?r:null),a=!1;l?a=!0:r instanceof A?(l=Td(n,r),a=!1):(l=A.EMPTY_NODE,a=!1);const u=jl(new Sn(l,a,!1),new Sn(r,i,!1));return new J1(e,u)}return o}function oN(t,e,n,r,i,s){const o=zv(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),tN(o,n),nN(o,n)}function lN(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const l=Cn(t);if(i==="default")for(const[a,u]of t.views.entries())o=o.concat(dp(u,n,r)),cp(u)&&(t.views.delete(a),u.query._queryParams.loadsAllData()||s.push(u.query));else{const a=t.views.get(i);a&&(o=o.concat(dp(a,n,r)),cp(a)&&(t.views.delete(i),a.query._queryParams.loadsAllData()||s.push(a.query)))}return l&&!Cn(t)&&s.push(new(iN())(e._repo,e._path)),{removed:s,events:o}}function Wv(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function _n(t,e){let n=null;for(const r of t.views.values())n=n||eN(r,e);return n}function Vv(t,e){if(e._queryParams.loadsAllData())return zl(t);{const r=e._queryIdentifier;return t.views.get(r)}}function Hv(t,e){return Vv(t,e)!=null}function Cn(t){return zl(t)!=null}function zl(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ml;function aN(t){I(!ml,"__referenceConstructor has already been defined"),ml=t}function uN(){return I(ml,"Reference.ts has not been loaded"),ml}let cN=1;class fp{constructor(e){this.listenProvider_=e,this.syncPointTree_=new q(null),this.pendingWriteTree_=j1(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function dN(t,e,n,r,i){return P1(t.pendingWriteTree_,e,n,r,i),i?Ds(t,new Zn(xv(),e,n)):[]}function Cr(t,e,n=!1){const r=R1(t.pendingWriteTree_,e);if(x1(t.pendingWriteTree_,e)){let s=new q(null);return r.snap!=null?s=s.set(z(),!0):Ue(r.children,o=>{s=s.set(new H(o),!0)}),Ds(t,new ul(r.path,s,n))}else return[]}function Ls(t,e,n){return Ds(t,new Zn(Cd(),e,n))}function hN(t,e,n){const r=q.fromObject(n);return Ds(t,new ps(Cd(),e,r))}function fN(t,e){return Ds(t,new fs(Cd(),e))}function pN(t,e,n){const r=Rd(t,n);if(r){const i=xd(r),s=i.path,o=i.queryId,l=Ne(s,e),a=new fs(Id(o),l);return Ad(t,s,a)}else return[]}function $v(t,e,n,r,i=!1){const s=e._path,o=t.syncPointTree_.get(s);let l=[];if(o&&(e._queryIdentifier==="default"||Hv(o,e))){const a=lN(o,e,n,r);sN(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const u=a.removed;if(l=a.events,!i){const d=u.findIndex(h=>h._queryParams.loadsAllData())!==-1,c=t.syncPointTree_.findOnPath(s,(h,g)=>Cn(g));if(d&&!c){const h=t.syncPointTree_.subtree(s);if(!h.isEmpty()){const g=vN(h);for(let _=0;_<g.length;++_){const y=g[_],C=y.query,p=Yv(t,y);t.listenProvider_.startListening(ji(C),ms(t,C),p.hashFn,p.onComplete)}}}!c&&u.length>0&&!r&&(d?t.listenProvider_.stopListening(ji(e),null):u.forEach(h=>{const g=t.queryToTagMap.get(Wl(h));t.listenProvider_.stopListening(ji(h),g)}))}yN(t,u)}return l}function Gv(t,e,n,r){const i=Rd(t,r);if(i!=null){const s=xd(i),o=s.path,l=s.queryId,a=Ne(o,e),u=new Zn(Id(l),a,n);return Ad(t,o,u)}else return[]}function mN(t,e,n,r){const i=Rd(t,r);if(i){const s=xd(i),o=s.path,l=s.queryId,a=Ne(o,e),u=q.fromObject(n),d=new ps(Id(l),a,u);return Ad(t,o,d)}else return[]}function gN(t,e,n,r=!1){const i=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(i,(h,g)=>{const _=Ne(h,i);s=s||_n(g,_),o=o||Cn(g)});let l=t.syncPointTree_.get(i);l?(o=o||Cn(l),s=s||_n(l,z())):(l=new Bv,t.syncPointTree_=t.syncPointTree_.set(i,l));let a;s!=null?a=!0:(a=!1,s=A.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((g,_)=>{const y=_n(_,z());y&&(s=s.updateImmediateChild(g,y))}));const u=Hv(l,e);if(!u&&!e._queryParams.loadsAllData()){const h=Wl(e);I(!t.queryToTagMap.has(h),"View does not exist, but we have a tag");const g=wN();t.queryToTagMap.set(h,g),t.tagToQueryMap.set(g,h)}const d=Bl(t.pendingWriteTree_,i);let c=oN(l,e,n,d,s,a);if(!u&&!o&&!r){const h=Vv(l,e);c=c.concat(EN(t,e,h))}return c}function Kv(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,l)=>{const a=Ne(o,e),u=_n(l,a);if(u)return u});return Dv(i,e,s,n,!0)}function _N(t,e){const n=e._path;let r=null;t.syncPointTree_.foreachOnPath(n,(u,d)=>{const c=Ne(u,n);r=r||_n(d,c)});let i=t.syncPointTree_.get(n);i?r=r||_n(i,z()):(i=new Bv,t.syncPointTree_=t.syncPointTree_.set(n,i));const s=r!=null,o=s?new Sn(r,!0,!1):null,l=Bl(t.pendingWriteTree_,e._path),a=zv(i,e,l,s?o.getNode():A.EMPTY_NODE,s);return Z1(a)}function Ds(t,e){return Qv(e,t.syncPointTree_,null,Bl(t.pendingWriteTree_,z()))}function Qv(t,e,n,r){if(F(t.path))return qv(t,e,n,r);{const i=e.get(z());n==null&&i!=null&&(n=_n(i,z()));let s=[];const o=j(t.path),l=t.operationForChild(o),a=e.children.get(o);if(a&&l){const u=n?n.getImmediateChild(o):null,d=Mv(r,o);s=s.concat(Qv(l,a,u,d))}return i&&(s=s.concat(Pd(i,t,r,n))),s}}function qv(t,e,n,r){const i=e.get(z());n==null&&i!=null&&(n=_n(i,z()));let s=[];return e.children.inorderTraversal((o,l)=>{const a=n?n.getImmediateChild(o):null,u=Mv(r,o),d=t.operationForChild(o);d&&(s=s.concat(qv(d,l,a,u)))}),i&&(s=s.concat(Pd(i,t,r,n))),s}function Yv(t,e){const n=e.query,r=ms(t,n);return{hashFn:()=>(X1(e)||A.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?pN(t,n._path,r):fN(t,n._path);{const s=pk(i,n);return $v(t,n,null,s)}}}}function ms(t,e){const n=Wl(e);return t.queryToTagMap.get(n)}function Wl(t){return t._path.toString()+"$"+t._queryIdentifier}function Rd(t,e){return t.tagToQueryMap.get(e)}function xd(t){const e=t.indexOf("$");return I(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new H(t.substr(0,e))}}function Ad(t,e,n){const r=t.syncPointTree_.get(e);I(r,"Missing sync point for query tag that we're tracking");const i=Bl(t.pendingWriteTree_,e);return Pd(r,n,i,null)}function vN(t){return t.fold((e,n,r)=>{if(n&&Cn(n))return[zl(n)];{let i=[];return n&&(i=Wv(n)),Ue(r,(s,o)=>{i=i.concat(o)}),i}})}function ji(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(uN())(t._repo,t._path):t}function yN(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=Wl(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function wN(){return cN++}function EN(t,e,n){const r=e._path,i=ms(t,e),s=Yv(t,n),o=t.listenProvider_.startListening(ji(e),i,s.hashFn,s.onComplete),l=t.syncPointTree_.subtree(r);if(i)I(!Cn(l.value),"If we're adding a query, it shouldn't be shadowed");else{const a=l.fold((u,d,c)=>{if(!F(u)&&d&&Cn(d))return[zl(d).query];{let h=[];return d&&(h=h.concat(Wv(d).map(g=>g.query))),Ue(c,(g,_)=>{h=h.concat(_)}),h}});for(let u=0;u<a.length;++u){const d=a[u];t.listenProvider_.stopListening(ji(d),ms(t,d))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Od{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Od(n)}node(){return this.node_}}class Ld{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=ue(this.path_,e);return new Ld(this.syncTree_,n)}node(){return Kv(this.syncTree_,this.path_)}}const SN=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},pp=function(t,e,n){if(!t||typeof t!="object")return t;if(I(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return CN(t[".sv"],e,n);if(typeof t[".sv"]=="object")return IN(t[".sv"],e);I(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},CN=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:I(!1,"Unexpected server value: "+t)}},IN=function(t,e,n){t.hasOwnProperty("increment")||I(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&I(!1,"Unexpected increment value: "+r);const i=e.node();if(I(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},TN=function(t,e,n,r){return Dd(e,new Ld(n,t),r)},kN=function(t,e,n){return Dd(t,new Od(e),n)};function Dd(t,e,n){const r=t.getPriority().val(),i=pp(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,l=pp(o.getValue(),e,n);return l!==o.getValue()||i!==o.getPriority().val()?new he(l,_e(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new he(i))),o.forEachChild(Z,(l,a)=>{const u=Dd(a,e.getImmediateChild(l),n);u!==a&&(s=s.updateImmediateChild(l,u))}),s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Md{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function bd(t,e){let n=e instanceof H?e:new H(e),r=t,i=j(n);for(;i!==null;){const s=Wr(r.node.children,i)||{children:{},childCount:0};r=new Md(i,r,s),n=$(n),i=j(n)}return r}function ri(t){return t.node.value}function Jv(t,e){t.node.value=e,Qu(t)}function Xv(t){return t.node.childCount>0}function NN(t){return ri(t)===void 0&&!Xv(t)}function Vl(t,e){Ue(t.node.children,(n,r)=>{e(new Md(n,t,r))})}function Zv(t,e,n,r){n&&!r&&e(t),Vl(t,i=>{Zv(i,e,!0,r)}),n&&r&&e(t)}function PN(t,e,n){let r=t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function Ms(t){return new H(t.parent===null?t.name:Ms(t.parent)+"/"+t.name)}function Qu(t){t.parent!==null&&RN(t.parent,t.name,t)}function RN(t,e,n){const r=NN(n),i=yt(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,Qu(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,Qu(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xN=/[\[\].#$\/\u0000-\u001F\u007F]/,AN=/[\[\].#$\u0000-\u001F\u007F]/,La=10*1024*1024,ey=function(t){return typeof t=="string"&&t.length!==0&&!xN.test(t)},ty=function(t){return typeof t=="string"&&t.length!==0&&!AN.test(t)},ON=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),ty(t)},mp=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!pd(t)||t&&typeof t=="object"&&yt(t,".sv")},LN=function(t,e,n,r){e!==void 0&&Fd(ed(t,"value"),e,n)},Fd=function(t,e,n){const r=n instanceof H?new Kk(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+bn(r));if(typeof e=="function")throw new Error(t+"contains a function "+bn(r)+" with contents = "+e.toString());if(pd(e))throw new Error(t+"contains "+e.toString()+" "+bn(r));if(typeof e=="string"&&e.length>La/3&&Dl(e)>La)throw new Error(t+"contains a string greater than "+La+" utf8 bytes "+bn(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(Ue(e,(o,l)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!ey(o)))throw new Error(t+" contains an invalid key ("+o+") "+bn(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);Qk(r,o),Fd(t,l,r),qk(r)}),i&&s)throw new Error(t+' contains ".value" child '+bn(r)+" in addition to actual children.")}},ny=function(t,e,n,r){if(!ty(n))throw new Error(ed(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},DN=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),ny(t,e,n)},MN=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!ey(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!ON(n))throw new Error(ed(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bN{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function FN(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!yv(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function xn(t,e,n){FN(t,n),UN(t,r=>it(r,e)||it(e,r))}function UN(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(jN(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function jN(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();Mi&&Ce("event: "+n.toString()),As(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BN="repo_interrupt",zN=25;class WN{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new bN,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=al(),this.transactionQueueTree_=new Md,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function VN(t,e,n){if(t.stats_=_d(t.repoInfo_),t.forceRestClient_||vk())t.server_=new ll(t.repoInfo_,(r,i,s,o)=>{gp(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>_p(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{ae(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new xt(t.repoInfo_,e,(r,i,s,o)=>{gp(t,r,i,s,o)},r=>{_p(t,r)},r=>{$N(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=Ck(t.repoInfo_,()=>new S1(t.stats_,t.server_)),t.infoData_=new _1,t.infoSyncTree_=new fp({startListening:(r,i,s,o)=>{let l=[];const a=t.infoData_.getNode(r._path);return a.isEmpty()||(l=Ls(t.infoSyncTree_,r._path,a),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),Ud(t,"connected",!1),t.serverSyncTree_=new fp({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(l,a)=>{const u=o(l,a);xn(t.eventQueue_,r._path,u)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function HN(t){const n=t.infoData_.getNode(new H(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function ry(t){return SN({timestamp:HN(t)})}function gp(t,e,n,r,i){t.dataUpdateCount++;const s=new H(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const a=Yo(n,u=>_e(u));o=mN(t.serverSyncTree_,s,a,i)}else{const a=_e(n);o=Gv(t.serverSyncTree_,s,a,i)}else if(r){const a=Yo(n,u=>_e(u));o=hN(t.serverSyncTree_,s,a)}else{const a=_e(n);o=Ls(t.serverSyncTree_,s,a)}let l=s;o.length>0&&(l=zd(t,s)),xn(t.eventQueue_,l,o)}function _p(t,e){Ud(t,"connected",e),e===!1&&QN(t)}function $N(t,e){Ue(e,(n,r)=>{Ud(t,n,r)})}function Ud(t,e,n){const r=new H("/.info/"+e),i=_e(n);t.infoData_.updateSnapshot(r,i);const s=Ls(t.infoSyncTree_,r,i);xn(t.eventQueue_,r,s)}function GN(t){return t.nextWriteId_++}function KN(t,e,n){const r=_N(t.serverSyncTree_,e);return r!=null?Promise.resolve(r):t.server_.get(e).then(i=>{const s=_e(i).withIndex(e._queryParams.getIndex());gN(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=Ls(t.serverSyncTree_,e._path,s);else{const l=ms(t.serverSyncTree_,e);o=Gv(t.serverSyncTree_,e._path,s,l)}return xn(t.eventQueue_,e._path,o),$v(t.serverSyncTree_,e,n,null,!0),s},i=>(jd(t,"get for query "+ae(e)+" failed: "+i),Promise.reject(new Error(i))))}function QN(t){jd(t,"onDisconnectEvents");const e=ry(t),n=al();Vu(t.onDisconnect_,z(),(i,s)=>{const o=TN(i,s,t.serverSyncTree_,e);Rv(n,i,o)});let r=[];Vu(n,z(),(i,s)=>{r=r.concat(Ls(t.serverSyncTree_,i,s));const o=XN(t,i);zd(t,o)}),t.onDisconnect_=al(),xn(t.eventQueue_,z(),r)}function qN(t){t.persistentConnection_&&t.persistentConnection_.interrupt(BN)}function jd(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Ce(n,...e)}function iy(t,e,n){return Kv(t.serverSyncTree_,e,n)||A.EMPTY_NODE}function Bd(t,e=t.transactionQueueTree_){if(e||Hl(t,e),ri(e)){const n=oy(t,e);I(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&YN(t,Ms(e),n)}else Xv(e)&&Vl(e,n=>{Bd(t,n)})}function YN(t,e,n){const r=n.map(u=>u.currentWriteId),i=iy(t,e,r);let s=i;const o=i.hash();for(let u=0;u<n.length;u++){const d=n[u];I(d.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),d.status=1,d.retryCount++;const c=Ne(e,d.path);s=s.updateChild(c,d.currentOutputSnapshotRaw)}const l=s.val(!0),a=e;t.server_.put(a.toString(),l,u=>{jd(t,"transaction put response",{path:a.toString(),status:u});let d=[];if(u==="ok"){const c=[];for(let h=0;h<n.length;h++)n[h].status=2,d=d.concat(Cr(t.serverSyncTree_,n[h].currentWriteId)),n[h].onComplete&&c.push(()=>n[h].onComplete(null,!0,n[h].currentOutputSnapshotResolved)),n[h].unwatcher();Hl(t,bd(t.transactionQueueTree_,e)),Bd(t,t.transactionQueueTree_),xn(t.eventQueue_,e,d);for(let h=0;h<c.length;h++)As(c[h])}else{if(u==="datastale")for(let c=0;c<n.length;c++)n[c].status===3?n[c].status=4:n[c].status=0;else{We("transaction at "+a.toString()+" failed: "+u);for(let c=0;c<n.length;c++)n[c].status=4,n[c].abortReason=u}zd(t,e)}},o)}function zd(t,e){const n=sy(t,e),r=Ms(n),i=oy(t,n);return JN(t,i,r),r}function JN(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const a=e[l],u=Ne(n,a.path);let d=!1,c;if(I(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),a.status===4)d=!0,c=a.abortReason,i=i.concat(Cr(t.serverSyncTree_,a.currentWriteId,!0));else if(a.status===0)if(a.retryCount>=zN)d=!0,c="maxretry",i=i.concat(Cr(t.serverSyncTree_,a.currentWriteId,!0));else{const h=iy(t,a.path,o);a.currentInputSnapshot=h;const g=e[l].update(h.val());if(g!==void 0){Fd("transaction failed: Data returned ",g,a.path);let _=_e(g);typeof g=="object"&&g!=null&&yt(g,".priority")||(_=_.updatePriority(h.getPriority()));const C=a.currentWriteId,p=ry(t),f=kN(_,h,p);a.currentOutputSnapshotRaw=_,a.currentOutputSnapshotResolved=f,a.currentWriteId=GN(t),o.splice(o.indexOf(C),1),i=i.concat(dN(t.serverSyncTree_,a.path,f,a.currentWriteId,a.applyLocally)),i=i.concat(Cr(t.serverSyncTree_,C,!0))}else d=!0,c="nodata",i=i.concat(Cr(t.serverSyncTree_,a.currentWriteId,!0))}xn(t.eventQueue_,n,i),i=[],d&&(e[l].status=2,function(h){setTimeout(h,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(c==="nodata"?r.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):r.push(()=>e[l].onComplete(new Error(c),!1,null))))}Hl(t,t.transactionQueueTree_);for(let l=0;l<r.length;l++)As(r[l]);Bd(t,t.transactionQueueTree_)}function sy(t,e){let n,r=t.transactionQueueTree_;for(n=j(e);n!==null&&ri(r)===void 0;)r=bd(r,n),e=$(e),n=j(e);return r}function oy(t,e){const n=[];return ly(t,e,n),n.sort((r,i)=>r.order-i.order),n}function ly(t,e,n){const r=ri(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);Vl(e,i=>{ly(t,i,n)})}function Hl(t,e){const n=ri(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,Jv(e,n.length>0?n:void 0)}Vl(e,r=>{Hl(t,r)})}function XN(t,e){const n=Ms(sy(t,e)),r=bd(t.transactionQueueTree_,e);return PN(r,i=>{Da(t,i)}),Da(t,r),Zv(r,i=>{Da(t,i)}),n}function Da(t,e){const n=ri(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(I(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(I(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(Cr(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?Jv(e,void 0):n.length=s+1,xn(t.eventQueue_,Ms(e),i);for(let o=0;o<r.length;o++)As(r[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZN(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function eP(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):We(`Invalid query segment '${n}' in query '${t}'`)}return e}const vp=function(t,e){const n=tP(t),r=n.namespace;n.domain==="firebase.com"&&Ft(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&Ft("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||uk();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new lv(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new H(n.pathString)}},tP=function(t){let e="",n="",r="",i="",s="",o=!0,l="https",a=443;if(typeof t=="string"){let u=t.indexOf("//");u>=0&&(l=t.substring(0,u-1),t=t.substring(u+2));let d=t.indexOf("/");d===-1&&(d=t.length);let c=t.indexOf("?");c===-1&&(c=t.length),e=t.substring(0,Math.min(d,c)),d<c&&(i=ZN(t.substring(d,c)));const h=eP(t.substring(Math.min(t.length,c)));u=e.indexOf(":"),u>=0?(o=l==="https"||l==="wss",a=parseInt(e.substring(u+1),10)):u=e.length;const g=e.slice(0,u);if(g.toLowerCase()==="localhost")n="localhost";else if(g.split(".").length<=2)n=g;else{const _=e.indexOf(".");r=e.substring(0,_).toLowerCase(),n=e.substring(_+1),s=r}"ns"in h&&(s=h.ns)}return{host:e,port:a,domain:n,subdomain:r,secure:o,scheme:l,pathString:i,namespace:s}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nP{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+ae(this.snapshot.exportVal())}}class rP{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iP{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return I(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return F(this._path)?null:gv(this._path)}get ref(){return new zt(this._repo,this._path)}get _queryIdentifier(){const e=np(this._queryParams),n=md(e);return n==="{}"?"default":n}get _queryObject(){return np(this._queryParams)}isEqual(e){if(e=Te(e),!(e instanceof ii))return!1;const n=this._repo===e._repo,r=yv(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+Gk(this._path)}}function sP(t,e){if(t._orderByCalled===!0)throw new Error(e+": You can't combine multiple orderBy calls.")}function ay(t){let e=null,n=null;if(t.hasStart()&&(e=t.getIndexStartValue()),t.hasEnd()&&(n=t.getIndexEndValue()),t.getIndex()===mn){const r="Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().",i="Query: When ordering by key, the argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() must be a string.";if(t.hasStart()){if(t.getIndexStartName()!==Xn)throw new Error(r);if(typeof e!="string")throw new Error(i)}if(t.hasEnd()){if(t.getIndexEndName()!==wn)throw new Error(r);if(typeof n!="string")throw new Error(i)}}else if(t.getIndex()===Z){if(e!=null&&!mp(e)||n!=null&&!mp(n))throw new Error("Query: When ordering by priority, the first argument passed to startAt(), startAfter() endAt(), endBefore(), or equalTo() must be a valid priority value (null, a number, or a string).")}else if(I(t.getIndex()instanceof kv||t.getIndex()===Nv,"unknown index type."),e!=null&&typeof e=="object"||n!=null&&typeof n=="object")throw new Error("Query: First argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() cannot be an object.")}function oP(t){if(t.hasStart()&&t.hasEnd()&&t.hasLimit()&&!t.hasAnchoredLimit())throw new Error("Query: Can't combine startAt(), startAfter(), endAt(), endBefore(), and limit(). Use limitToFirst() or limitToLast() instead.")}class zt extends ii{constructor(e,n){super(e,n,new Sd,!1)}get parent(){const e=vv(this._path);return e===null?null:new zt(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class gs{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new H(e),r=qu(this.ref,e);return new gs(this._node.getChild(n),r,Z)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new gs(i,qu(this.ref,r),Z)))}hasChild(e){const n=new H(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function lP(t,e){return t=Te(t),t._checkNotDeleted("ref"),qu(t._root,e)}function qu(t,e){return t=Te(t),j(t._path)===null?DN("child","path",e):ny("child","path",e),new zt(t._repo,ue(t._path,e))}function aP(t){t=Te(t);const e=new iP(()=>{}),n=new Wd(e);return KN(t._repo,t,n).then(r=>new gs(r,new zt(t._repo,t._path),t._queryParams.getIndex()))}class Wd{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new nP("value",this,new gs(e.snapshotNode,new zt(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new rP(this,e,n):null}matches(e){return e instanceof Wd?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class Vd{}class uP extends Vd{constructor(e,n){super(),this._value=e,this._key=n,this.type="startAt"}_apply(e){LN("startAt",this._value,e._path);const n=m1(e._queryParams,this._value,this._key);if(oP(n),ay(n),e._queryParams.hasStart())throw new Error("startAt: Starting point was already set (by another call to startAt, startBefore or equalTo).");return new ii(e._repo,e._path,n,e._orderByCalled)}}function cP(t=null,e){return new uP(t,e)}class dP extends Vd{constructor(e){super(),this._limit=e,this.type="limitToFirst"}_apply(e){if(e._queryParams.hasLimit())throw new Error("limitToFirst: Limit was already set (by another call to limitToFirst or limitToLast).");return new ii(e._repo,e._path,p1(e._queryParams,this._limit),e._orderByCalled)}}function hP(t){if(Math.floor(t)!==t||t<=0)throw new Error("limitToFirst: First argument must be a positive integer.");return new dP(t)}class fP extends Vd{constructor(){super(...arguments),this.type="orderByKey"}_apply(e){sP(e,"orderByKey");const n=g1(e._queryParams,mn);return ay(n),new ii(e._repo,e._path,n,!0)}}function pP(){return new fP}function mP(t,...e){let n=Te(t);for(const r of e)n=r._apply(n);return n}rN(zt);aN(zt);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gP="FIREBASE_DATABASE_EMULATOR_HOST",Yu={};let _P=!1;function vP(t,e,n,r){t.repoInfo_=new lv(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),r&&(t.authTokenProvider_=r)}function yP(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||Ft("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Ce("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=vp(s,i),l=o.repoInfo,a;typeof process<"u"&&Uf&&(a=Uf[gP]),a?(s=`http://${a}?ns=${l.namespace}`,o=vp(s,i),l=o.repoInfo):o.repoInfo.secure;const u=new wk(t.name,t.options,e);MN("Invalid Firebase Database URL",o),F(o.path)||Ft("Database URL must point to the root of a Firebase Database (not including a child path).");const d=EP(l,t,u,new yk(t.name,n));return new SP(d,t)}function wP(t,e){const n=Yu[e];(!n||n[t.key]!==t)&&Ft(`Database ${e}(${t.repoInfo_}) has already been deleted.`),qN(t),delete n[t.key]}function EP(t,e,n,r){let i=Yu[e.name];i||(i={},Yu[e.name]=i);let s=i[t.toURLString()];return s&&Ft("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new WN(t,_P,n,r),i[t.toURLString()]=s,s}class SP{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(VN(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new zt(this._repo,z())),this._rootInternal}_delete(){return this._rootInternal!==null&&(wP(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Ft("Cannot call "+e+" on a deleted database.")}}function CP(t=i_(),e){const n=rd(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=KE("database");r&&IP(n,...r)}return n}function IP(t,e,n,r={}){t=Te(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&Ft("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let s;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&Ft('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new Eo(Eo.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:QE(r.mockUserToken,t.app.options.projectId);s=new Eo(o)}vP(i,e,n,s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TP(t){rk(ei),Vr(new qn("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return yP(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),pn(jf,Bf,t),pn(jf,Bf,"esm2017")}xt.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};xt.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};TP();const kP=t=>{const[e,n]=E.useState(!0),[r,i]=E.useState(!1),[s,o]=E.useState([]),[l,a]=E.useState(!0);return E.useEffect(()=>{async function u(){const d=CP(),c=lP(d,"videos"),h=mP(c,pP(),cP(""+t*8),hP(8));try{i(!1),n(!0);const g=await aP(h);if(n(!1),g.exists()){const _=Object.values(g.val());o(y=>[...y,..._]),_.length<8&&a(!1)}else a(!1)}catch(g){console.error("Error fetching videos:",g),n(!1),i(!0)}}u()},[t]),{loading:e,err:r,videos:s,hasMore:l}};/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */var Ju=function(t,e){return Ju=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,r){n.__proto__=r}||function(n,r){for(var i in r)r.hasOwnProperty(i)&&(n[i]=r[i])},Ju(t,e)};function NP(t,e){Ju(t,e);function n(){this.constructor=t}t.prototype=e===null?Object.create(e):(n.prototype=e.prototype,new n)}var Bi=function(){return Bi=Object.assign||function(e){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},Bi.apply(this,arguments)};function PP(t,e,n,r){var i,s=!1,o=0;function l(){i&&clearTimeout(i)}function a(){l(),s=!0}typeof e!="boolean"&&(r=n,n=e,e=void 0);function u(){var d=this,c=Date.now()-o,h=arguments;if(s)return;function g(){o=Date.now(),n.apply(d,h)}function _(){i=void 0}r&&!i&&g(),l(),r===void 0&&c>t?g():e!==!0&&(i=setTimeout(r?_:g,r===void 0?t-c:t))}return u.cancel=a,u}var Dr={Pixel:"Pixel",Percent:"Percent"},yp={unit:Dr.Percent,value:.8};function wp(t){return typeof t=="number"?{unit:Dr.Percent,value:t*100}:typeof t=="string"?t.match(/^(\d*(\.\d+)?)px$/)?{unit:Dr.Pixel,value:parseFloat(t)}:t.match(/^(\d*(\.\d+)?)%$/)?{unit:Dr.Percent,value:parseFloat(t)}:(console.warn('scrollThreshold format is invalid. Valid formats: "120px", "50%"...'),yp):(console.warn("scrollThreshold should be string or number"),yp)}var RP=function(t){NP(e,t);function e(n){var r=t.call(this,n)||this;return r.lastScrollTop=0,r.actionTriggered=!1,r.startY=0,r.currentY=0,r.dragging=!1,r.maxPullDownDistance=0,r.getScrollableTarget=function(){return r.props.scrollableTarget instanceof HTMLElement?r.props.scrollableTarget:typeof r.props.scrollableTarget=="string"?document.getElementById(r.props.scrollableTarget):(r.props.scrollableTarget===null&&console.warn(`You are trying to pass scrollableTarget but it is null. This might
        happen because the element may not have been added to DOM yet.
        See https://github.com/ankeetmaini/react-infinite-scroll-component/issues/59 for more info.
      `),null)},r.onStart=function(i){r.lastScrollTop||(r.dragging=!0,i instanceof MouseEvent?r.startY=i.pageY:i instanceof TouchEvent&&(r.startY=i.touches[0].pageY),r.currentY=r.startY,r._infScroll&&(r._infScroll.style.willChange="transform",r._infScroll.style.transition="transform 0.2s cubic-bezier(0,0,0.31,1)"))},r.onMove=function(i){r.dragging&&(i instanceof MouseEvent?r.currentY=i.pageY:i instanceof TouchEvent&&(r.currentY=i.touches[0].pageY),!(r.currentY<r.startY)&&(r.currentY-r.startY>=Number(r.props.pullDownToRefreshThreshold)&&r.setState({pullToRefreshThresholdBreached:!0}),!(r.currentY-r.startY>r.maxPullDownDistance*1.5)&&r._infScroll&&(r._infScroll.style.overflow="visible",r._infScroll.style.transform="translate3d(0px, "+(r.currentY-r.startY)+"px, 0px)")))},r.onEnd=function(){r.startY=0,r.currentY=0,r.dragging=!1,r.state.pullToRefreshThresholdBreached&&(r.props.refreshFunction&&r.props.refreshFunction(),r.setState({pullToRefreshThresholdBreached:!1})),requestAnimationFrame(function(){r._infScroll&&(r._infScroll.style.overflow="auto",r._infScroll.style.transform="none",r._infScroll.style.willChange="unset")})},r.onScrollListener=function(i){typeof r.props.onScroll=="function"&&setTimeout(function(){return r.props.onScroll&&r.props.onScroll(i)},0);var s=r.props.height||r._scrollableNode?i.target:document.documentElement.scrollTop?document.documentElement:document.body;if(!r.actionTriggered){var o=r.props.inverse?r.isElementAtTop(s,r.props.scrollThreshold):r.isElementAtBottom(s,r.props.scrollThreshold);o&&r.props.hasMore&&(r.actionTriggered=!0,r.setState({showLoader:!0}),r.props.next&&r.props.next()),r.lastScrollTop=s.scrollTop}},r.state={showLoader:!1,pullToRefreshThresholdBreached:!1,prevDataLength:n.dataLength},r.throttledOnScrollListener=PP(150,r.onScrollListener).bind(r),r.onStart=r.onStart.bind(r),r.onMove=r.onMove.bind(r),r.onEnd=r.onEnd.bind(r),r}return e.prototype.componentDidMount=function(){if(typeof this.props.dataLength>"u")throw new Error('mandatory prop "dataLength" is missing. The prop is needed when loading more content. Check README.md for usage');if(this._scrollableNode=this.getScrollableTarget(),this.el=this.props.height?this._infScroll:this._scrollableNode||window,this.el&&this.el.addEventListener("scroll",this.throttledOnScrollListener),typeof this.props.initialScrollY=="number"&&this.el&&this.el instanceof HTMLElement&&this.el.scrollHeight>this.props.initialScrollY&&this.el.scrollTo(0,this.props.initialScrollY),this.props.pullDownToRefresh&&this.el&&(this.el.addEventListener("touchstart",this.onStart),this.el.addEventListener("touchmove",this.onMove),this.el.addEventListener("touchend",this.onEnd),this.el.addEventListener("mousedown",this.onStart),this.el.addEventListener("mousemove",this.onMove),this.el.addEventListener("mouseup",this.onEnd),this.maxPullDownDistance=this._pullDown&&this._pullDown.firstChild&&this._pullDown.firstChild.getBoundingClientRect().height||0,this.forceUpdate(),typeof this.props.refreshFunction!="function"))throw new Error(`Mandatory prop "refreshFunction" missing.
          Pull Down To Refresh functionality will not work
          as expected. Check README.md for usage'`)},e.prototype.componentWillUnmount=function(){this.el&&(this.el.removeEventListener("scroll",this.throttledOnScrollListener),this.props.pullDownToRefresh&&(this.el.removeEventListener("touchstart",this.onStart),this.el.removeEventListener("touchmove",this.onMove),this.el.removeEventListener("touchend",this.onEnd),this.el.removeEventListener("mousedown",this.onStart),this.el.removeEventListener("mousemove",this.onMove),this.el.removeEventListener("mouseup",this.onEnd)))},e.prototype.componentDidUpdate=function(n){this.props.dataLength!==n.dataLength&&(this.actionTriggered=!1,this.setState({showLoader:!1}))},e.getDerivedStateFromProps=function(n,r){var i=n.dataLength!==r.prevDataLength;return i?Bi(Bi({},r),{prevDataLength:n.dataLength}):null},e.prototype.isElementAtTop=function(n,r){r===void 0&&(r=.8);var i=n===document.body||n===document.documentElement?window.screen.availHeight:n.clientHeight,s=wp(r);return s.unit===Dr.Pixel?n.scrollTop<=s.value+i-n.scrollHeight+1:n.scrollTop<=s.value/100+i-n.scrollHeight+1},e.prototype.isElementAtBottom=function(n,r){r===void 0&&(r=.8);var i=n===document.body||n===document.documentElement?window.screen.availHeight:n.clientHeight,s=wp(r);return s.unit===Dr.Pixel?n.scrollTop+i>=n.scrollHeight-s.value:n.scrollTop+i>=s.value/100*n.scrollHeight},e.prototype.render=function(){var n=this,r=Bi({height:this.props.height||"auto",overflow:"auto",WebkitOverflowScrolling:"touch"},this.props.style),i=this.props.hasChildren||!!(this.props.children&&this.props.children instanceof Array&&this.props.children.length),s=this.props.pullDownToRefresh&&this.props.height?{overflow:"auto"}:{};return lr.createElement("div",{style:s,className:"infinite-scroll-component__outerdiv"},lr.createElement("div",{className:"infinite-scroll-component "+(this.props.className||""),ref:function(o){return n._infScroll=o},style:r},this.props.pullDownToRefresh&&lr.createElement("div",{style:{position:"relative"},ref:function(o){return n._pullDown=o}},lr.createElement("div",{style:{position:"absolute",left:0,right:0,top:-1*this.maxPullDownDistance}},this.state.pullToRefreshThresholdBreached?this.props.releaseToRefreshContent:this.props.pullDownToRefreshContent)),this.props.children,!this.state.showLoader&&!i&&this.props.hasMore&&this.props.loader,this.state.showLoader&&this.props.hasMore&&this.props.loader,!this.props.hasMore&&this.props.endMessage))},e}(E.Component);const xP=()=>{const[t,e]=E.useState(0),{loading:n,err:r,videos:i,hasMore:s}=kP(t),[o,l]=E.useState([]),a=()=>{s&&setTimeout(()=>{e(u=>u+1)},1e3)};return E.useEffect(()=>{i.length>0&&l(u=>[...u,...i])},[i]),v.jsxs("div",{className:"videos",children:[n&&v.jsxs("div",{children:["Video is loading! ",v.jsx("br",{}),"Please wait..."]}),r&&v.jsx("div",{children:"There was an error loading videos. Please try again later."}),o.length>0&&v.jsx(RP,{dataLength:o.length,next:a,hasMore:s,loader:v.jsx("h4",{children:"Loading more videos..."}),children:o.map(u=>v.jsx(Qn,{to:"/",children:v.jsxs("div",{className:"fade-in",children:[" ",v.jsx(nk,{title:u.title,id:u.youtubeID,noq:u.noq})]})},u.youtubeID))}),o.length===0&&!n&&!r&&v.jsx("div",{children:"No videos found."})]})},AP=()=>v.jsx("div",{children:v.jsx(xP,{})}),OP=()=>{const{currentUser:t}=Ps();return t?v.jsx(Hg,{}):v.jsx(Vg,{to:"/login"})},LP=()=>{const{currentUser:t}=Ps();return t?v.jsx(Vg,{to:"/",children:" "}):v.jsx(Hg,{})};function DP(){return v.jsx(ME,{children:v.jsx(bT,{children:v.jsx(zT,{children:v.jsxs(PE,{children:[v.jsx(Ht,{path:"/",element:v.jsx(AP,{})}),v.jsxs(Ht,{element:v.jsx(LP,{}),children:[v.jsx(Ht,{path:"/signup",element:v.jsx(ZT,{})}),v.jsx(Ht,{path:"/login",element:v.jsx(tk,{})})]}),v.jsxs(Ht,{element:v.jsx(OP,{}),children:[v.jsx(Ht,{path:"/quiz",element:v.jsx($T,{})}),v.jsx(Ht,{path:"/result",element:v.jsx(YT,{})})]})]})})})})}Lg(document.getElementById("root")).render(v.jsx(E.StrictMode,{children:v.jsx(DP,{})}));
