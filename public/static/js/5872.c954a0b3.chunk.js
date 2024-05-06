"use strict";(self.webpackChunkSelfie_Admin=self.webpackChunkSelfie_Admin||[]).push([[5872],{45872:(e,n,t)=>{t.r(n),t.d(n,{default:()=>i});t(65043);var o=t(62481),a=t(10801),r=t(37632),l=t(70579);const{DirectoryTree:c}=r.A,s=[{title:"entries",key:"0-0",children:[]},{title:"locales",key:"0-1",children:[]},{title:"index.js",key:"0-2",isLeaf:!0}],i=()=>(0,l.jsxs)("div",{children:[(0,l.jsx)("h2",{children:"Localization"}),(0,l.jsxs)("p",{children:["Emilus implement localization through ",(0,l.jsx)("code",{children:"react-i18n-next"}),", corresponding files can be found in ",(0,l.jsx)("code",{children:"src/lang/"}),", folder structure as below"]}),(0,l.jsx)("div",{className:"mb-4",children:(0,l.jsx)(c,{multiple:!0,treeData:s})}),(0,l.jsxs)("div",{className:"mt-5",children:[(0,l.jsx)("h4",{children:"Set new locale"}),(0,l.jsxs)("p",{children:[(0,l.jsx)("code",{children:"locales"})," folder is the place we store language key. Add your language as JSON format in this folder."]}),(0,l.jsx)(o.A,{className:"hl-code",language:"json",style:a.A,children:'{\n\t"sidenav.dashboard": "Dashboard"\n}'}),(0,l.jsxs)("p",{className:"mt-3",children:["Create a config file for your new added language at ",(0,l.jsx)("code",{children:"entries"})," folder, please also include antd language to the configuration."]}),(0,l.jsx)(o.A,{className:"hl-code",language:"javascript",style:a.A,children:"import antdEnUS from 'antd/es/locale/en_US';\nimport enMsg from \"../locales/en_US.json\";\n\nconst EnLang = {\n  antd: antdEnUS,\n  locale: 'en-US',\n  messages: {\n    ...enMsg\n  },\n};\nexport default EnLang;"}),(0,l.jsxs)("p",{className:"mt-3",children:["Add your configuration to the ",(0,l.jsx)("code",{children:"index.js"}),", which is the entry file of i18n. Setup a key with your language config as value in ",(0,l.jsx)("code",{children:"resources"}),"."]}),(0,l.jsx)(o.A,{className:"hl-code",language:"javascript",style:a.A,children:"import antdEnUS from 'antd/es/locale/en_US';\nimport antdZhCn from 'antd/es/locale/zh_CN';\nimport antdFrFR from 'antd/es/locale/fr_FR';\nimport antdJaJP from 'antd/es/locale/ja_JP';\nimport en from './locales/en_US.json'\nimport zh from './locales/zh_CN.json'\nimport fr from './locales/fr_FR.json'\nimport ja from './locales/ja_JP.json'\nimport i18n from 'i18next'\nimport { initReactI18next } from 'react-i18next'\nimport { THEME_CONFIG } from 'configs/AppConfig';\n\nexport const resources = {\n    en: {\n        translation: en,\n        antd: antdEnUS\n    },\n    zh: {\n        translation: zh,\n        antd: antdZhCn\n    },\n    fr: {\n        translation: fr,\n        antd: antdFrFR\n    },\n    ja: {\n        translation: ja,\n        antd: antdJaJP\n    },\n}\n\ni18n.use(initReactI18next).init({\n    resources,\n    fallbackLng: THEME_CONFIG.locale,\n    lng: THEME_CONFIG.locale,\n    interpolation: {\n        escapeValue: false \n    }\n})\n\nexport default i18n;"}),(0,l.jsxs)("p",{className:"mt-3",children:["Now, with ",(0,l.jsx)("code",{children:"IntlMessage"})," component, you can translate your language with your language key"]}),(0,l.jsx)(o.A,{className:"hl-code",language:"jsx",style:a.A,children:"import IntlMessage from 'components/util-components/IntlMessage';\n\nconst MyComponent = () => {\n\treturn (\n\t\t<IntlMessage id=\"sidenav.dashboard\" />\n\t\t// output: Dashboard\n\t)\n"})]})]})},46989:(e,n,t)=>{t.d(n,{A:()=>s});var o=t(58168),a=t(65043);const r={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M928 444H820V330.4c0-17.7-14.3-32-32-32H473L355.7 186.2a8.15 8.15 0 00-5.5-2.2H96c-17.7 0-32 14.3-32 32v592c0 17.7 14.3 32 32 32h698c13 0 24.8-7.9 29.7-20l134-332c1.5-3.8 2.3-7.9 2.3-12 0-17.7-14.3-32-32-32zM136 256h188.5l119.6 114.4H748V444H238c-13 0-24.8 7.9-29.7 20L136 643.2V256zm635.3 512H159l103.3-256h612.4L771.3 768z"}}]},name:"folder-open",theme:"outlined"};var l=t(51835),c=function(e,n){return a.createElement(l.A,(0,o.A)({},e,{ref:n,icon:r}))};const s=a.forwardRef(c)},24762:(e,n,t)=>{t.d(n,{A:()=>s});var o=t(58168),a=t(65043);const r={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M880 298.4H521L403.7 186.2a8.15 8.15 0 00-5.5-2.2H144c-17.7 0-32 14.3-32 32v592c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V330.4c0-17.7-14.3-32-32-32zM840 768H184V256h188.5l119.6 114.4H840V768z"}}]},name:"folder",theme:"outlined"};var l=t(51835),c=function(e,n){return a.createElement(l.A,(0,o.A)({},e,{ref:n,icon:r}))};const s=a.forwardRef(c)},52871:(e,n,t)=>{t.d(n,{A:()=>s});var o=t(58168),a=t(65043);const r={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M300 276.5a56 56 0 1056-97 56 56 0 00-56 97zm0 284a56 56 0 1056-97 56 56 0 00-56 97zM640 228a56 56 0 10112 0 56 56 0 00-112 0zm0 284a56 56 0 10112 0 56 56 0 00-112 0zM300 844.5a56 56 0 1056-97 56 56 0 00-56 97zM640 796a56 56 0 10112 0 56 56 0 00-112 0z"}}]},name:"holder",theme:"outlined"};var l=t(51835),c=function(e,n){return a.createElement(l.A,(0,o.A)({},e,{ref:n,icon:r}))};const s=a.forwardRef(c)},37632:(e,n,t)=>{t.d(n,{A:()=>M});var o=t(71804),a=t(60436),r=t(65043),l=t(16523),c=t(46989),s=t(24762),i=t(98139),d=t.n(i),u=t(32123),f=t(72041),p=t(35296),h=t(52871),m=t(83290),g=t(65875);function y(e){const{dropPosition:n,dropLevelOffset:t,prefixCls:o,indent:a,direction:l="ltr"}=e,c="ltr"===l?"left":"right",s={[c]:-t*a+4,["ltr"===l?"right":"left"]:0};switch(n){case-1:s.top=-3;break;case 1:s.bottom=-3;break;default:s.bottom=-3,s[c]=a+4}return r.createElement("div",{style:s,className:"".concat(o,"-drop-indicator")})}var x=t(12174),b=t(80167);const v=r.forwardRef(((e,n)=>{var t;const{getPrefixCls:a,direction:l,virtual:c,tree:s}=r.useContext(p.QO),{prefixCls:i,className:u,showIcon:f=!1,showLine:v,switcherIcon:A,blockNode:E=!1,children:j,checkable:C=!1,selectable:w=!0,draggable:S,motion:F,style:N}=e,k=a("tree",i),O=a(),z=null!==F&&void 0!==F?F:Object.assign(Object.assign({},(0,m.A)(O)),{motionAppear:!1}),M=Object.assign(Object.assign({},e),{checkable:C,selectable:w,showIcon:f,motion:z,blockNode:E,showLine:Boolean(v),dropIndicatorRender:y}),[H,K,I]=(0,g.Ay)(k),[,D]=(0,b.Ay)(),R=D.paddingXS/2+((null===(t=D.Tree)||void 0===t?void 0:t.titleHeight)||D.controlHeightSM),_=r.useMemo((()=>{if(!S)return!1;let e={};switch(typeof S){case"function":e.nodeDraggable=S;break;case"object":e=Object.assign({},S)}return!1!==e.icon&&(e.icon=e.icon||r.createElement(h.A,null)),e}),[S]);return H(r.createElement(o.A,Object.assign({itemHeight:R,ref:n,virtual:c},M,{style:Object.assign(Object.assign({},null===s||void 0===s?void 0:s.style),N),prefixCls:k,className:d()({["".concat(k,"-icon-hide")]:!f,["".concat(k,"-block-node")]:E,["".concat(k,"-unselectable")]:!w,["".concat(k,"-rtl")]:"rtl"===l},null===s||void 0===s?void 0:s.className,u,K,I),direction:l,checkable:C?r.createElement("span",{className:"".concat(k,"-checkbox-inner")}):C,selectable:w,switcherIcon:e=>r.createElement(x.A,{prefixCls:k,switcherIcon:A,treeNodeProps:e,showLine:v}),draggable:_}),j))}));const A=v;var E;function j(e,n,t){const{key:o,children:a}=t;e.forEach((function(e){const r=e[o],l=e[a];!1!==n(r,e)&&j(l||[],n,t)}))}function C(e){let{treeData:n,expandedKeys:t,startKey:o,endKey:a,fieldNames:r}=e;const l=[];let c=E.None;if(o&&o===a)return[o];if(!o||!a)return[];return j(n,(e=>{if(c===E.End)return!1;if(function(e){return e===o||e===a}(e)){if(l.push(e),c===E.None)c=E.Start;else if(c===E.Start)return c=E.End,!1}else c===E.Start&&l.push(e);return t.includes(e)}),(0,f.AZ)(r)),l}function w(e,n,t){const o=(0,a.A)(n),r=[];return j(e,((e,n)=>{const t=o.indexOf(e);return-1!==t&&(r.push(n),o.splice(t,1)),!!o.length}),(0,f.AZ)(t)),r}!function(e){e[e.None=0]="None",e[e.Start=1]="Start",e[e.End=2]="End"}(E||(E={}));var S=function(e,n){var t={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&n.indexOf(o)<0&&(t[o]=e[o]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(o=Object.getOwnPropertySymbols(e);a<o.length;a++)n.indexOf(o[a])<0&&Object.prototype.propertyIsEnumerable.call(e,o[a])&&(t[o[a]]=e[o[a]])}return t};function F(e){const{isLeaf:n,expanded:t}=e;return n?r.createElement(l.A,null):t?r.createElement(c.A,null):r.createElement(s.A,null)}function N(e){let{treeData:n,children:t}=e;return n||(0,f.vH)(t)}const k=(e,n)=>{var{defaultExpandAll:t,defaultExpandParent:o,defaultExpandedKeys:l}=e,c=S(e,["defaultExpandAll","defaultExpandParent","defaultExpandedKeys"]);const s=r.useRef(),i=r.useRef(),[h,m]=r.useState(c.selectedKeys||c.defaultSelectedKeys||[]),[g,y]=r.useState((()=>(()=>{const{keyEntities:e}=(0,f.cG)(N(c));let n;return n=t?Object.keys(e):o?(0,u.hr)(c.expandedKeys||l||[],e):c.expandedKeys||l||[],n})()));r.useEffect((()=>{"selectedKeys"in c&&m(c.selectedKeys)}),[c.selectedKeys]),r.useEffect((()=>{"expandedKeys"in c&&y(c.expandedKeys)}),[c.expandedKeys]);const{getPrefixCls:x,direction:b}=r.useContext(p.QO),{prefixCls:v,className:E,showIcon:j=!0,expandAction:k="click"}=c,O=S(c,["prefixCls","className","showIcon","expandAction"]),z=x("tree",v),M=d()("".concat(z,"-directory"),{["".concat(z,"-directory-rtl")]:"rtl"===b},E);return r.createElement(A,Object.assign({icon:F,ref:n,blockNode:!0},O,{showIcon:j,expandAction:k,prefixCls:z,className:M,expandedKeys:g,selectedKeys:h,onSelect:(e,n)=>{var t;const{multiple:o,fieldNames:r}=c,{node:l,nativeEvent:d}=n,{key:u=""}=l,f=N(c),p=Object.assign(Object.assign({},n),{selected:!0}),h=(null===d||void 0===d?void 0:d.ctrlKey)||(null===d||void 0===d?void 0:d.metaKey),y=null===d||void 0===d?void 0:d.shiftKey;let x;o&&h?(x=e,s.current=u,i.current=x,p.selectedNodes=w(f,x,r)):o&&y?(x=Array.from(new Set([].concat((0,a.A)(i.current||[]),(0,a.A)(C({treeData:f,expandedKeys:g,startKey:u,endKey:s.current,fieldNames:r}))))),p.selectedNodes=w(f,x,r)):(x=[u],s.current=u,i.current=x,p.selectedNodes=w(f,x,r)),null===(t=c.onSelect)||void 0===t||t.call(c,x,p),"selectedKeys"in c||m(x)},onExpand:(e,n)=>{var t;return"expandedKeys"in c||y(e),null===(t=c.onExpand)||void 0===t?void 0:t.call(c,e,n)}}))};const O=r.forwardRef(k),z=A;z.DirectoryTree=O,z.TreeNode=o.n;const M=z},10801:(e,n,t)=>{t.d(n,{A:()=>o});const o={'code[class*="language-"]':{color:"#c5c8c6",textShadow:"0 1px rgba(0, 0, 0, 0.3)",fontFamily:"Inconsolata, Monaco, Consolas, 'Courier New', Courier, monospace",direction:"ltr",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none"},'pre[class*="language-"]':{color:"#c5c8c6",textShadow:"0 1px rgba(0, 0, 0, 0.3)",fontFamily:"Inconsolata, Monaco, Consolas, 'Courier New', Courier, monospace",direction:"ltr",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",padding:"1em",margin:".5em 0",overflow:"auto",borderRadius:"0.3em",background:"#1d1f21"},':not(pre) > code[class*="language-"]':{background:"#1d1f21",padding:".1em",borderRadius:".3em"},comment:{color:"#7C7C7C"},prolog:{color:"#7C7C7C"},doctype:{color:"#7C7C7C"},cdata:{color:"#7C7C7C"},punctuation:{color:"#c5c8c6"},".namespace":{Opacity:".7"},property:{color:"#96CBFE"},keyword:{color:"#96CBFE"},tag:{color:"#96CBFE"},"class-name":{color:"#FFFFB6",textDecoration:"underline"},boolean:{color:"#99CC99"},constant:{color:"#99CC99"},symbol:{color:"#f92672"},deleted:{color:"#f92672"},number:{color:"#FF73FD"},selector:{color:"#A8FF60"},"attr-name":{color:"#A8FF60"},string:{color:"#A8FF60"},char:{color:"#A8FF60"},builtin:{color:"#A8FF60"},inserted:{color:"#A8FF60"},variable:{color:"#C6C5FE"},operator:{color:"#EDEDED"},entity:{color:"#FFFFB6",cursor:"help"},url:{color:"#96CBFE"},".language-css .token.string":{color:"#87C38A"},".style .token.string":{color:"#87C38A"},atrule:{color:"#F9EE98"},"attr-value":{color:"#F9EE98"},function:{color:"#DAD085"},regex:{color:"#E9C062"},important:{color:"#fd971f",fontWeight:"bold"},bold:{fontWeight:"bold"},italic:{fontStyle:"italic"}}}}]);
//# sourceMappingURL=5872.c954a0b3.chunk.js.map