(self.webpackChunkSelfie_Admin=self.webpackChunkSelfie_Admin||[]).push([[9379],{63390:(e,t,r)=>{"use strict";r.d(t,{A:()=>l});var n=r(58168),o=r(65043);const c={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"}}]},name:"check",theme:"outlined"};var a=r(51835),i=function(e,t){return o.createElement(a.A,(0,n.A)({},e,{ref:t,icon:c}))};const l=o.forwardRef(i)},60909:(e,t,r)=>{"use strict";r.d(t,{AH:()=>o});r(65043),r(69436);var n=r(12830);r(53111),r(80219);function o(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,n.J)(t)}},98590:(e,t,r)=>{"use strict";r.d(t,{FD:()=>i,FK:()=>c,Y:()=>a});var n=r(70579),o=r(55756),c=(r(65043),r(53111),r(80219),r(12830),r(69436),n.Fragment);function a(e,t,r){return o.h.call(t,"css")?n.jsx(o.E,(0,o.c)(e,t),r):n.jsx(e,t,r)}function i(e,t,r){return o.h.call(t,"css")?n.jsxs(o.E,(0,o.c)(e,t),r):n.jsxs(e,t,r)}},75270:(e,t,r)=>{"use strict";var n=r(40139),o={"text/plain":"Text","text/html":"Url",default:"Text"};e.exports=function(e,t){var r,c,a,i,l,u,s=!1;t||(t={}),r=t.debug||!1;try{if(a=n(),i=document.createRange(),l=document.getSelection(),(u=document.createElement("span")).textContent=e,u.ariaHidden="true",u.style.all="unset",u.style.position="fixed",u.style.top=0,u.style.clip="rect(0, 0, 0, 0)",u.style.whiteSpace="pre",u.style.webkitUserSelect="text",u.style.MozUserSelect="text",u.style.msUserSelect="text",u.style.userSelect="text",u.addEventListener("copy",(function(n){if(n.stopPropagation(),t.format)if(n.preventDefault(),"undefined"===typeof n.clipboardData){r&&console.warn("unable to use e.clipboardData"),r&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var c=o[t.format]||o.default;window.clipboardData.setData(c,e)}else n.clipboardData.clearData(),n.clipboardData.setData(t.format,e);t.onCopy&&(n.preventDefault(),t.onCopy(n.clipboardData))})),document.body.appendChild(u),i.selectNodeContents(u),l.addRange(i),!document.execCommand("copy"))throw new Error("copy command was unsuccessful");s=!0}catch(f){r&&console.error("unable to copy using execCommand: ",f),r&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),s=!0}catch(f){r&&console.error("unable to copy using clipboardData: ",f),r&&console.error("falling back to prompt"),c=function(e){var t=(/mac os x/i.test(navigator.userAgent)?"\u2318":"Ctrl")+"+C";return e.replace(/#{\s*key\s*}/g,t)}("message"in t?t.message:"Copy to clipboard: #{key}, Enter"),window.prompt(c,e)}}finally{l&&("function"==typeof l.removeRange?l.removeRange(i):l.removeAllRanges()),u&&document.body.removeChild(u),a()}return s}},2099:(e,t,r)=>{"use strict";function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.CopyToClipboard=void 0;var o=i(r(65043)),c=i(r(75270)),a=["text","onCopy","options","children"];function i(e){return e&&e.__esModule?e:{default:e}}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){m(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function f(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function p(e,t){return p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},p(e,t)}function y(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,o=b(e);if(t){var c=b(this).constructor;r=Reflect.construct(o,arguments,c)}else r=o.apply(this,arguments);return function(e,t){if(t&&("object"===n(t)||"function"===typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return d(e)}(this,r)}}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function b(e){return b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},b(e)}function m(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var v=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&p(e,t)}(l,e);var t,r,n,i=y(l);function l(){var e;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,l);for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return m(d(e=i.call.apply(i,[this].concat(r))),"onClick",(function(t){var r=e.props,n=r.text,a=r.onCopy,i=r.children,l=r.options,u=o.default.Children.only(i),s=(0,c.default)(n,l);a&&a(n,s),u&&u.props&&"function"===typeof u.props.onClick&&u.props.onClick(t)})),e}return t=l,(r=[{key:"render",value:function(){var e=this.props,t=(e.text,e.onCopy,e.options,e.children),r=s(e,a),n=o.default.Children.only(t);return o.default.cloneElement(n,u(u({},r),{},{onClick:this.onClick}))}}])&&f(t.prototype,r),n&&f(t,n),Object.defineProperty(t,"prototype",{writable:!1}),l}(o.default.PureComponent);t.CopyToClipboard=v,m(v,"defaultProps",{onCopy:void 0,options:void 0})},61476:(e,t,r)=>{"use strict";var n=r(2099).CopyToClipboard;n.CopyToClipboard=n,e.exports=n},40139:e=>{e.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,r=[],n=0;n<e.rangeCount;n++)r.push(e.getRangeAt(n));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||r.forEach((function(t){e.addRange(t)})),t&&t.focus()}}}}]);
//# sourceMappingURL=9379.3f430efd.chunk.js.map