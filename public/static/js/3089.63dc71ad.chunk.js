/*! For license information please see 3089.63dc71ad.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkSelfie_Admin=self.webpackChunkSelfie_Admin||[]).push([[3089],{8572:(t,e,r)=>{r.d(e,{A:()=>n});const n=r(45903).A.div((t=>{let{justifyContent:e,alignItems:r,flexDirection:n,gap:o,padding:i,margin:a}=t;const c={display:"flex",justifyContent:e,alignItems:r,gap:"number"===typeof o?"".concat(o,"px"):o};return n&&(c.flexDirection=n),i&&(c.padding=i),a&&(c.margin=a),{...c}}))},57861:(t,e,r)=>{r.r(e),r.d(e,{default:()=>s});r(65043);var n=r(87021),o=r(42053),i=r(35475),a=r(8572),c=r(97508),l=r(70579);const s=()=>{const t=(0,c.d4)((t=>t.theme.currentTheme));return(0,l.jsx)("div",{className:"h-100 ".concat("light"===t?"bg-white":""),children:(0,l.jsxs)("div",{className:"container-fluid d-flex flex-column justify-content-between h-100 px-md-4 pb-md-4 pt-md-1",children:[(0,l.jsx)("div",{children:(0,l.jsx)("img",{className:"img-fluid",src:"/img/".concat("light"===t?"logo.png":"logo-white.png"),alt:""})}),(0,l.jsx)("div",{className:"container",children:(0,l.jsxs)("div",{className:"text-center mb-5",children:[(0,l.jsx)("img",{className:"img-fluid",src:"/img/others/img-21.png",alt:""}),(0,l.jsx)("h1",{className:"font-weight-bold mb-4",children:"Sorry, something goes wrong"}),(0,l.jsx)(i.N_,{to:"/app",children:(0,l.jsx)(n.Ay,{type:"primary",children:"Back to Home"})})]})}),(0,l.jsxs)(a.A,{mobileFlex:!1,justifyContent:"space-between",children:[(0,l.jsxs)("span",{children:["Copyright  \xa9  ","".concat((new Date).getFullYear())," ",(0,l.jsx)("span",{className:"font-weight-semibold",children:"".concat(o.C3)})]}),(0,l.jsxs)("div",{children:[(0,l.jsx)("a",{className:"text-gray",href:"/#",onClick:t=>t.preventDefault(),children:"Term & Conditions"}),(0,l.jsx)("span",{className:"mx-2 text-muted",children:" | "}),(0,l.jsx)("a",{className:"text-gray",href:"/#",onClick:t=>t.preventDefault(),children:"Privacy & Policy"})]})]})]})})}},89122:(t,e,r)=>{r.d(e,{A:()=>i});var n=r(65043),o=r(87063);const i=t=>{const e=n.useContext(o.A);return n.useMemo((()=>t?"string"===typeof t?null!==t&&void 0!==t?t:e:t instanceof Function?t(e):e:e),[t,e])}},45132:(t,e,r)=>{r.d(e,{Ay:()=>m,K6:()=>p,RQ:()=>f});var n=r(98139),o=r.n(n),i=r(62149),a=r(65043),c=r(35296),l=r(89122),s=r(78309),u=function(t,e){var r={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(t);o<n.length;o++)e.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(t,n[o])&&(r[n[o]]=t[n[o]])}return r};const h=a.createContext(null),f=(t,e)=>{const r=a.useContext(h),n=a.useMemo((()=>{if(!r)return"";const{compactDirection:n,isFirstItem:i,isLastItem:a}=r,c="vertical"===n?"-vertical-":"-";return o()("".concat(t,"-compact").concat(c,"item"),{["".concat(t,"-compact").concat(c,"first-item")]:i,["".concat(t,"-compact").concat(c,"last-item")]:a,["".concat(t,"-compact").concat(c,"item-rtl")]:"rtl"===e})}),[t,e,r]);return{compactSize:null===r||void 0===r?void 0:r.compactSize,compactDirection:null===r||void 0===r?void 0:r.compactDirection,compactItemClassnames:n}},p=t=>{let{children:e}=t;return a.createElement(h.Provider,{value:null},e)},d=t=>{var{children:e}=t,r=u(t,["children"]);return a.createElement(h.Provider,{value:r},e)},m=t=>{const{getPrefixCls:e,direction:r}=a.useContext(c.QO),{size:n,direction:f,block:p,prefixCls:m,className:g,rootClassName:v,children:y}=t,x=u(t,["size","direction","block","prefixCls","className","rootClassName","children"]),w=(0,l.A)((t=>null!==n&&void 0!==n?n:t)),b=e("space-compact",m),[j,L]=(0,s.A)(b),E=o()(b,L,{["".concat(b,"-rtl")]:"rtl"===r,["".concat(b,"-block")]:p,["".concat(b,"-vertical")]:"vertical"===f},g,v),S=a.useContext(h),C=(0,i.A)(y),O=a.useMemo((()=>C.map(((t,e)=>{const r=t&&t.key||"".concat(b,"-item-").concat(e);return a.createElement(d,{key:r,compactSize:w,compactDirection:f,isFirstItem:0===e&&(!S||(null===S||void 0===S?void 0:S.isFirstItem)),isLastItem:e===C.length-1&&(!S||(null===S||void 0===S?void 0:S.isLastItem))},t)}))),[n,C,S]);return 0===C.length?null:j(a.createElement("div",Object.assign({className:E},x),O))}},78309:(t,e,r)=>{r.d(e,{A:()=>l});var n=r(41383),o=r(78365);const i=t=>{const{componentCls:e}=t;return{[e]:{"&-block":{display:"flex",width:"100%"},"&-vertical":{flexDirection:"column"}}}},a=t=>{const{componentCls:e,antCls:r}=t;return{[e]:{display:"inline-flex","&-rtl":{direction:"rtl"},"&-vertical":{flexDirection:"column"},"&-align":{flexDirection:"column","&-center":{alignItems:"center"},"&-start":{alignItems:"flex-start"},"&-end":{alignItems:"flex-end"},"&-baseline":{alignItems:"baseline"}},["".concat(e,"-item:empty")]:{display:"none"},["".concat(e,"-item > ").concat(r,"-badge-not-a-wrapper:only-child")]:{display:"block"}}}},c=t=>{const{componentCls:e}=t;return{[e]:{"&-gap-row-small":{rowGap:t.spaceGapSmallSize},"&-gap-row-middle":{rowGap:t.spaceGapMiddleSize},"&-gap-row-large":{rowGap:t.spaceGapLargeSize},"&-gap-col-small":{columnGap:t.spaceGapSmallSize},"&-gap-col-middle":{columnGap:t.spaceGapMiddleSize},"&-gap-col-large":{columnGap:t.spaceGapLargeSize}}}},l=(0,n.OF)("Space",(t=>{const e=(0,o.h1)(t,{spaceGapSmallSize:t.paddingXS,spaceGapMiddleSize:t.padding,spaceGapLargeSize:t.paddingLG});return[a(e),c(e),i(e)]}),(()=>({})),{resetStyle:!1})},62149:(t,e,r)=>{r.d(e,{A:()=>i});var n=r(65043),o=r(36816);function i(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=[];return n.Children.forEach(t,(function(t){(void 0!==t&&null!==t||e.keepEmpty)&&(Array.isArray(t)?r=r.concat(i(t)):(0,o.isFragment)(t)&&t.props?r=r.concat(i(t.props.children,e)):r.push(t))})),r}},76590:(t,e,r)=>{r.d(e,{A:()=>n});const n=function(t){if(!t)return!1;if(t instanceof Element){if(t.offsetParent)return!0;if(t.getBBox){var e=t.getBBox(),r=e.width,n=e.height;if(r||n)return!0}if(t.getBoundingClientRect){var o=t.getBoundingClientRect(),i=o.width,a=o.height;if(i||a)return!0}}return!1}},10467:(t,e,r)=>{function n(t,e,r,n,o,i,a){try{var c=t[i](a),l=c.value}catch(s){return void r(s)}c.done?e(l):Promise.resolve(l).then(n,o)}function o(t){return function(){var e=this,r=arguments;return new Promise((function(o,i){var a=t.apply(e,r);function c(t){n(a,o,i,c,l,"next",t)}function l(t){n(a,o,i,c,l,"throw",t)}c(void 0)}))}}r.d(e,{A:()=>o})},90675:(t,e,r)=>{r.d(e,{A:()=>o});var n=r(82284);function o(){o=function(){return e};var t,e={},r=Object.prototype,i=r.hasOwnProperty,a=Object.defineProperty||function(t,e,r){t[e]=r.value},c="function"==typeof Symbol?Symbol:{},l=c.iterator||"@@iterator",s=c.asyncIterator||"@@asyncIterator",u=c.toStringTag||"@@toStringTag";function h(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{h({},"")}catch(t){h=function(t,e,r){return t[e]=r}}function f(t,e,r,n){var o=e&&e.prototype instanceof x?e:x,i=Object.create(o.prototype),c=new P(n||[]);return a(i,"_invoke",{value:N(t,r,c)}),i}function p(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=f;var d="suspendedStart",m="suspendedYield",g="executing",v="completed",y={};function x(){}function w(){}function b(){}var j={};h(j,l,(function(){return this}));var L=Object.getPrototypeOf,E=L&&L(L(_([])));E&&E!==r&&i.call(E,l)&&(j=E);var S=b.prototype=x.prototype=Object.create(j);function C(t){["next","throw","return"].forEach((function(e){h(t,e,(function(t){return this._invoke(e,t)}))}))}function O(t,e){function r(o,a,c,l){var s=p(t[o],t,a);if("throw"!==s.type){var u=s.arg,h=u.value;return h&&"object"==(0,n.A)(h)&&i.call(h,"__await")?e.resolve(h.__await).then((function(t){r("next",t,c,l)}),(function(t){r("throw",t,c,l)})):e.resolve(h).then((function(t){u.value=t,c(u)}),(function(t){return r("throw",t,c,l)}))}l(s.arg)}var o;a(this,"_invoke",{value:function(t,n){function i(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(i,i):i()}})}function N(e,r,n){var o=d;return function(i,a){if(o===g)throw Error("Generator is already running");if(o===v){if("throw"===i)throw a;return{value:t,done:!0}}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var l=G(c,n);if(l){if(l===y)continue;return l}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===d)throw o=v,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=g;var s=p(e,r,n);if("normal"===s.type){if(o=n.done?v:m,s.arg===y)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(o=v,n.method="throw",n.arg=s.arg)}}}function G(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,G(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),y;var i=p(o,e.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,y;var a=i.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,y):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,y)}function k(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function A(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function P(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(k,this),this.reset(!0)}function _(e){if(e||""===e){var r=e[l];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,a=function r(){for(;++o<e.length;)if(i.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return a.next=a}}throw new TypeError((0,n.A)(e)+" is not iterable")}return w.prototype=b,a(S,"constructor",{value:b,configurable:!0}),a(b,"constructor",{value:w,configurable:!0}),w.displayName=h(b,u,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===w||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,h(t,u,"GeneratorFunction")),t.prototype=Object.create(S),t},e.awrap=function(t){return{__await:t}},C(O.prototype),h(O.prototype,s,(function(){return this})),e.AsyncIterator=O,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new O(f(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},C(S),h(S,u,"Generator"),h(S,l,(function(){return this})),h(S,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=_,P.prototype={constructor:P,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(A),!e)for(var r in this)"t"===r.charAt(0)&&i.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function n(n,o){return c.type="throw",c.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],c=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var l=i.call(a,"catchLoc"),s=i.call(a,"finallyLoc");if(l&&s){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(l){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!s)throw Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&i.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,y):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),y},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),A(r),y}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;A(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:_(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),y}},e}}}]);
//# sourceMappingURL=3089.63dc71ad.chunk.js.map