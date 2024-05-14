"use strict";(self.webpackChunkSelfie_Admin=self.webpackChunkSelfie_Admin||[]).push([[881],{37644:(e,t,o)=>{o.d(t,{A:()=>l});var n=o(58168),c=o(65043);const a={icon:{tag:"svg",attrs:{viewBox:"0 0 1024 1024",focusable:"false"},children:[{tag:"path",attrs:{d:"M912 192H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM104 228a56 56 0 10112 0 56 56 0 10-112 0zm0 284a56 56 0 10112 0 56 56 0 10-112 0zm0 284a56 56 0 10112 0 56 56 0 10-112 0z"}}]},name:"bars",theme:"outlined"};var r=o(51835),i=function(e,t){return c.createElement(r.A,(0,n.A)({},e,{ref:t,icon:a}))};const l=c.forwardRef(i)},682:(e,t,o)=>{o.d(t,{A:()=>l});var n=o(58168),c=o(65043);const a={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 000 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z"}}]},name:"left",theme:"outlined"};var r=o(51835),i=function(e,t){return c.createElement(r.A,(0,n.A)({},e,{ref:t,icon:a}))};const l=c.forwardRef(i)},99905:(e,t,o)=>{o.d(t,{A:()=>l});var n=o(58168),c=o(65043);const a={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z"}}]},name:"right",theme:"outlined"};var r=o(51835),i=function(e,t){return c.createElement(r.A,(0,n.A)({},e,{ref:t,icon:a}))};const l=c.forwardRef(i)},46090:(e,t,o)=>{o.d(t,{P:()=>b,A:()=>h});var n=o(65043),c=o(37644),a=o(682),r=o(99905),i=o(98139),l=o.n(i),s=o(18574);const d=e=>!isNaN(parseFloat(e))&&isFinite(e);var m=o(35296),u=o(26396),p=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var c=0;for(n=Object.getOwnPropertySymbols(e);c<n.length;c++)t.indexOf(n[c])<0&&Object.prototype.propertyIsEnumerable.call(e,n[c])&&(o[n[c]]=e[n[c]])}return o};const g={xs:"479.98px",sm:"575.98px",md:"767.98px",lg:"991.98px",xl:"1199.98px",xxl:"1599.98px"},b=n.createContext({}),v=(()=>{let e=0;return function(){return e+=1,"".concat(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"").concat(e)}})();const h=n.forwardRef(((e,t)=>{const{prefixCls:o,className:i,trigger:h,children:f,defaultCollapsed:I=!1,theme:C="dark",style:S={},collapsible:B=!1,reverseArrow:x=!1,width:y=200,collapsedWidth:O=80,zeroWidthTriggerStyle:w,breakpoint:z,onCollapse:k,onBreakpoint:A}=e,j=p(e,["prefixCls","className","trigger","children","defaultCollapsed","theme","style","collapsible","reverseArrow","width","collapsedWidth","zeroWidthTriggerStyle","breakpoint","onCollapse","onBreakpoint"]),{siderHook:E}=(0,n.useContext)(u.M),[H,T]=(0,n.useState)("collapsed"in e?e.collapsed:I),[M,D]=(0,n.useState)(!1);(0,n.useEffect)((()=>{"collapsed"in e&&T(e.collapsed)}),[e.collapsed]);const N=(t,o)=>{"collapsed"in e||T(t),null===k||void 0===k||k(t,o)},P=(0,n.useRef)();P.current=e=>{D(e.matches),null===A||void 0===A||A(e.matches),H!==e.matches&&N(e.matches,"responsive")},(0,n.useEffect)((()=>{function e(e){return P.current(e)}let t;if("undefined"!==typeof window){const{matchMedia:n}=window;if(n&&z&&z in g){t=n("screen and (max-width: ".concat(g[z],")"));try{t.addEventListener("change",e)}catch(o){t.addListener(e)}e(t)}}return()=>{try{null===t||void 0===t||t.removeEventListener("change",e)}catch(o){null===t||void 0===t||t.removeListener(e)}}}),[z]),(0,n.useEffect)((()=>{const e=v("ant-sider-");return E.addSider(e),()=>E.removeSider(e)}),[]);const R=()=>{N(!H,"clickTrigger")},{getPrefixCls:W}=(0,n.useContext)(m.QO),L=n.useMemo((()=>({siderCollapsed:H})),[H]);return n.createElement(b.Provider,{value:L},(()=>{const e=W("layout-sider",o),m=(0,s.A)(j,["collapsed"]),u=H?O:y,p=d(u)?"".concat(u,"px"):String(u),g=0===parseFloat(String(O||0))?n.createElement("span",{onClick:R,className:l()("".concat(e,"-zero-width-trigger"),"".concat(e,"-zero-width-trigger-").concat(x?"right":"left")),style:w},h||n.createElement(c.A,null)):null,b={expanded:x?n.createElement(r.A,null):n.createElement(a.A,null),collapsed:x?n.createElement(a.A,null):n.createElement(r.A,null)}[H?"collapsed":"expanded"],v=null!==h?g||n.createElement("div",{className:"".concat(e,"-trigger"),onClick:R,style:{width:p}},h||b):null,I=Object.assign(Object.assign({},S),{flex:"0 0 ".concat(p),maxWidth:p,minWidth:p,width:p}),z=l()(e,"".concat(e,"-").concat(C),{["".concat(e,"-collapsed")]:!!H,["".concat(e,"-has-trigger")]:B&&null!==h&&!g,["".concat(e,"-below")]:!!M,["".concat(e,"-zero-width")]:0===parseFloat(p)},i);return n.createElement("aside",Object.assign({className:z},m,{style:I,ref:t}),n.createElement("div",{className:"".concat(e,"-children")},f),B||M&&g?v:null)})())}))},26396:(e,t,o)=>{o.d(t,{M:()=>n});const n=o(65043).createContext({siderHook:{addSider:()=>null,removeSider:()=>null}})},2405:(e,t,o)=>{o.d(t,{A:()=>l,h:()=>s});var n=o(65043),c=o(87483),a=o(45132),r=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var c=0;for(n=Object.getOwnPropertySymbols(e);c<n.length;c++)t.indexOf(n[c])<0&&Object.prototype.propertyIsEnumerable.call(e,n[c])&&(o[n[c]]=e[n[c]])}return o};const i=n.createContext(null),l=n.forwardRef(((e,t)=>{const{children:o}=e,l=r(e,["children"]),s=n.useContext(i),d=n.useMemo((()=>Object.assign(Object.assign({},s),l)),[s,l.prefixCls,l.mode,l.selectable,l.rootClassName]),m=(0,c.H3)(o),u=(0,c.xK)(t,m?o.ref:null);return n.createElement(i.Provider,{value:d},n.createElement(a.K6,null,m?n.cloneElement(o,{ref:u}):o))})),s=i},10881:(e,t,o)=>{o.d(t,{A:()=>U});var n=o(65043),c=o(80244),a=o(46090),r=o(84235),i=o(98139),l=o.n(i),s=o(87483),d=o(18574),m=o(83290),u=o(12701),p=o(35296),g=o(78887),b=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var c=0;for(n=Object.getOwnPropertySymbols(e);c<n.length;c++)t.indexOf(n[c])<0&&Object.prototype.propertyIsEnumerable.call(e,n[c])&&(o[n[c]]=e[n[c]])}return o};const v=e=>{const{prefixCls:t,className:o,dashed:a}=e,r=b(e,["prefixCls","className","dashed"]),{getPrefixCls:i}=n.useContext(p.QO),s=i("menu",t),d=l()({["".concat(s,"-item-divider-dashed")]:!!a},o);return n.createElement(c.cG,Object.assign({className:d},r))};var h=o(62149),f=o(96651);const I=(0,n.createContext)({prefixCls:"",firstLevel:!0,inlineCollapsed:!1}),C=e=>{var t;const{className:o,children:r,icon:i,title:s,danger:m}=e,{prefixCls:p,firstLevel:g,direction:b,disableMenuItemTitleTooltip:v,inlineCollapsed:C}=n.useContext(I),{siderCollapsed:S}=n.useContext(a.P);let B=s;"undefined"===typeof s?B=g?r:"":!1===s&&(B="");const x={title:B};S||C||(x.title=null,x.open=!1);const y=(0,h.A)(r).length;let O=n.createElement(c.q7,Object.assign({},(0,d.A)(e,["title","icon","danger"]),{className:l()({["".concat(p,"-item-danger")]:m,["".concat(p,"-item-only-child")]:1===(i?y+1:y)},o),title:"string"===typeof s?s:void 0}),(0,u.Ob)(i,{className:l()(n.isValidElement(i)?null===(t=i.props)||void 0===t?void 0:t.className:"","".concat(p,"-item-icon"))}),(e=>{const t=n.createElement("span",{className:"".concat(p,"-title-content")},r);return(!i||n.isValidElement(r)&&"span"===r.type)&&r&&e&&g&&"string"===typeof r?n.createElement("div",{className:"".concat(p,"-inline-collapsed-noicon")},r.charAt(0)):t})(C));return v||(O=n.createElement(f.A,Object.assign({},x,{placement:"rtl"===b?"left":"right",overlayClassName:"".concat(p,"-inline-collapsed-tooltip")}),O)),O};var S=o(64980);const B=e=>{var t;const{popupClassName:o,icon:a,title:r,theme:i}=e,s=n.useContext(I),{prefixCls:m,inlineCollapsed:p,theme:g}=s,b=(0,c.Wj)();let v;if(a){const e=n.isValidElement(r)&&"span"===r.type;v=n.createElement(n.Fragment,null,(0,u.Ob)(a,{className:l()(n.isValidElement(a)?null===(t=a.props)||void 0===t?void 0:t.className:"","".concat(m,"-item-icon"))}),e?r:n.createElement("span",{className:"".concat(m,"-title-content")},r))}else v=p&&!b.length&&r&&"string"===typeof r?n.createElement("div",{className:"".concat(m,"-inline-collapsed-noicon")},r.charAt(0)):n.createElement("span",{className:"".concat(m,"-title-content")},r);const h=n.useMemo((()=>Object.assign(Object.assign({},s),{firstLevel:!1})),[s]),[f]=(0,S.YK)("Menu");return n.createElement(I.Provider,{value:h},n.createElement(c.g8,Object.assign({},(0,d.A)(e,["icon"]),{title:v,popupClassName:l()(m,o,"".concat(m,"-").concat(i||g)),popupStyle:{zIndex:f}})))};var x=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var c=0;for(n=Object.getOwnPropertySymbols(e);c<n.length;c++)t.indexOf(n[c])<0&&Object.prototype.propertyIsEnumerable.call(e,n[c])&&(o[n[c]]=e[n[c]])}return o};function y(e){return(e||[]).map(((e,t)=>{if(e&&"object"===typeof e){const o=e,{label:a,children:r,key:i,type:l}=o,s=x(o,["label","children","key","type"]),d=null!==i&&void 0!==i?i:"tmp-".concat(t);return r||"group"===l?"group"===l?n.createElement(c.te,Object.assign({key:d},s,{title:a}),y(r)):n.createElement(B,Object.assign({key:d},s,{title:a}),y(r)):"divider"===l?n.createElement(v,Object.assign({key:d},s)):n.createElement(C,Object.assign({key:d},s),a)}return null})).filter((e=>e))}function O(e){return n.useMemo((()=>e?y(e):e),[e])}var w=o(2405),z=o(99310),k=o(50097),A=o(94414),j=o(37770),E=o(24760),H=o(85814),T=o(41383),M=o(78365);const D=e=>{const{componentCls:t,motionDurationSlow:o,horizontalLineHeight:n,colorSplit:c,lineWidth:a,lineType:r,itemPaddingInline:i}=e;return{["".concat(t,"-horizontal")]:{lineHeight:n,border:0,borderBottom:"".concat((0,z.zA)(a)," ").concat(r," ").concat(c),boxShadow:"none","&::after":{display:"block",clear:"both",height:0,content:'"\\20"'},["".concat(t,"-item, ").concat(t,"-submenu")]:{position:"relative",display:"inline-block",verticalAlign:"bottom",paddingInline:i},["> ".concat(t,"-item:hover,\n        > ").concat(t,"-item-active,\n        > ").concat(t,"-submenu ").concat(t,"-submenu-title:hover")]:{backgroundColor:"transparent"},["".concat(t,"-item, ").concat(t,"-submenu-title")]:{transition:["border-color ".concat(o),"background ".concat(o)].join(",")},["".concat(t,"-submenu-arrow")]:{display:"none"}}}},N=e=>{let{componentCls:t,menuArrowOffset:o,calc:n}=e;return{["".concat(t,"-rtl")]:{direction:"rtl"},["".concat(t,"-submenu-rtl")]:{transformOrigin:"100% 0"},["".concat(t,"-rtl").concat(t,"-vertical,\n    ").concat(t,"-submenu-rtl ").concat(t,"-vertical")]:{["".concat(t,"-submenu-arrow")]:{"&::before":{transform:"rotate(-45deg) translateY(".concat((0,z.zA)(n(o).mul(-1).equal()),")")},"&::after":{transform:"rotate(45deg) translateY(".concat((0,z.zA)(o),")")}}}}},P=e=>Object.assign({},(0,A.jk)(e)),R=(e,t)=>{const{componentCls:o,itemColor:n,itemSelectedColor:c,groupTitleColor:a,itemBg:r,subMenuItemBg:i,itemSelectedBg:l,activeBarHeight:s,activeBarWidth:d,activeBarBorderWidth:m,motionDurationSlow:u,motionEaseInOut:p,motionEaseOut:g,itemPaddingInline:b,motionDurationMid:v,itemHoverColor:h,lineType:f,colorSplit:I,itemDisabledColor:C,dangerItemColor:S,dangerItemHoverColor:B,dangerItemSelectedColor:x,dangerItemActiveBg:y,dangerItemSelectedBg:O,popupBg:w,itemHoverBg:k,itemActiveBg:A,menuSubMenuBg:j,horizontalItemSelectedColor:E,horizontalItemSelectedBg:H,horizontalItemBorderRadius:T,horizontalItemHoverBg:M}=e;return{["".concat(o,"-").concat(t,", ").concat(o,"-").concat(t," > ").concat(o)]:{color:n,background:r,["&".concat(o,"-root:focus-visible")]:Object.assign({},P(e)),["".concat(o,"-item-group-title")]:{color:a},["".concat(o,"-submenu-selected")]:{["> ".concat(o,"-submenu-title")]:{color:c}},["".concat(o,"-item, ").concat(o,"-submenu-title")]:{color:n,["&:not(".concat(o,"-item-disabled):focus-visible")]:Object.assign({},P(e))},["".concat(o,"-item-disabled, ").concat(o,"-submenu-disabled")]:{color:"".concat(C," !important")},["".concat(o,"-item:not(").concat(o,"-item-selected):not(").concat(o,"-submenu-selected)")]:{["&:hover, > ".concat(o,"-submenu-title:hover")]:{color:h}},["&:not(".concat(o,"-horizontal)")]:{["".concat(o,"-item:not(").concat(o,"-item-selected)")]:{"&:hover":{backgroundColor:k},"&:active":{backgroundColor:A}},["".concat(o,"-submenu-title")]:{"&:hover":{backgroundColor:k},"&:active":{backgroundColor:A}}},["".concat(o,"-item-danger")]:{color:S,["&".concat(o,"-item:hover")]:{["&:not(".concat(o,"-item-selected):not(").concat(o,"-submenu-selected)")]:{color:B}},["&".concat(o,"-item:active")]:{background:y}},["".concat(o,"-item a")]:{"&, &:hover":{color:"inherit"}},["".concat(o,"-item-selected")]:{color:c,["&".concat(o,"-item-danger")]:{color:x},"a, a:hover":{color:"inherit"}},["& ".concat(o,"-item-selected")]:{backgroundColor:l,["&".concat(o,"-item-danger")]:{backgroundColor:O}},["&".concat(o,"-submenu > ").concat(o)]:{backgroundColor:j},["&".concat(o,"-popup > ").concat(o)]:{backgroundColor:w},["&".concat(o,"-submenu-popup > ").concat(o)]:{backgroundColor:w},["&".concat(o,"-horizontal")]:Object.assign(Object.assign({},"dark"===t?{borderBottom:0}:{}),{["> ".concat(o,"-item, > ").concat(o,"-submenu")]:{top:m,marginTop:e.calc(m).mul(-1).equal(),marginBottom:0,borderRadius:T,"&::after":{position:"absolute",insetInline:b,bottom:0,borderBottom:"".concat((0,z.zA)(s)," solid transparent"),transition:"border-color ".concat(u," ").concat(p),content:'""'},"&:hover, &-active, &-open":{background:M,"&::after":{borderBottomWidth:s,borderBottomColor:E}},"&-selected":{color:E,backgroundColor:H,"&:hover":{backgroundColor:H},"&::after":{borderBottomWidth:s,borderBottomColor:E}}}}),["&".concat(o,"-root")]:{["&".concat(o,"-inline, &").concat(o,"-vertical")]:{borderInlineEnd:"".concat((0,z.zA)(m)," ").concat(f," ").concat(I)}},["&".concat(o,"-inline")]:{["".concat(o,"-sub").concat(o,"-inline")]:{background:i},["".concat(o,"-item")]:{position:"relative","&::after":{position:"absolute",insetBlock:0,insetInlineEnd:0,borderInlineEnd:"".concat((0,z.zA)(d)," solid ").concat(c),transform:"scaleY(0.0001)",opacity:0,transition:["transform ".concat(v," ").concat(g),"opacity ".concat(v," ").concat(g)].join(","),content:'""'},["&".concat(o,"-item-danger")]:{"&::after":{borderInlineEndColor:x}}},["".concat(o,"-selected, ").concat(o,"-item-selected")]:{"&::after":{transform:"scaleY(1)",opacity:1,transition:["transform ".concat(v," ").concat(p),"opacity ".concat(v," ").concat(p)].join(",")}}}}}},W=e=>{const{componentCls:t,itemHeight:o,itemMarginInline:n,padding:c,menuArrowSize:a,marginXS:r,itemMarginBlock:i,itemWidth:l}=e,s=e.calc(a).add(c).add(r).equal();return{["".concat(t,"-item")]:{position:"relative",overflow:"hidden"},["".concat(t,"-item, ").concat(t,"-submenu-title")]:{height:o,lineHeight:(0,z.zA)(o),paddingInline:c,overflow:"hidden",textOverflow:"ellipsis",marginInline:n,marginBlock:i,width:l},["> ".concat(t,"-item,\n            > ").concat(t,"-submenu > ").concat(t,"-submenu-title")]:{height:o,lineHeight:(0,z.zA)(o)},["".concat(t,"-item-group-list ").concat(t,"-submenu-title,\n            ").concat(t,"-submenu-title")]:{paddingInlineEnd:s}}},L=e=>{const{componentCls:t,iconCls:o,itemHeight:n,colorTextLightSolid:c,dropdownWidth:a,controlHeightLG:r,motionDurationMid:i,motionEaseOut:l,paddingXL:s,itemMarginInline:d,fontSizeLG:m,motionDurationSlow:u,paddingXS:p,boxShadowSecondary:g,collapsedWidth:b,collapsedIconSize:v}=e,h={height:n,lineHeight:(0,z.zA)(n),listStylePosition:"inside",listStyleType:"disc"};return[{[t]:{"&-inline, &-vertical":Object.assign({["&".concat(t,"-root")]:{boxShadow:"none"}},W(e))},["".concat(t,"-submenu-popup")]:{["".concat(t,"-vertical")]:Object.assign(Object.assign({},W(e)),{boxShadow:g})}},{["".concat(t,"-submenu-popup ").concat(t,"-vertical").concat(t,"-sub")]:{minWidth:a,maxHeight:"calc(100vh - ".concat((0,z.zA)(e.calc(r).mul(2.5).equal()),")"),padding:"0",overflow:"hidden",borderInlineEnd:0,"&:not([class*='-active'])":{overflowX:"hidden",overflowY:"auto"}}},{["".concat(t,"-inline")]:{width:"100%",["&".concat(t,"-root")]:{["".concat(t,"-item, ").concat(t,"-submenu-title")]:{display:"flex",alignItems:"center",transition:["border-color ".concat(u),"background ".concat(u),"padding ".concat(i," ").concat(l)].join(","),["> ".concat(t,"-title-content")]:{flex:"auto",minWidth:0,overflow:"hidden",textOverflow:"ellipsis"},"> *":{flex:"none"}}},["".concat(t,"-sub").concat(t,"-inline")]:{padding:0,border:0,borderRadius:0,boxShadow:"none",["& > ".concat(t,"-submenu > ").concat(t,"-submenu-title")]:h,["& ".concat(t,"-item-group-title")]:{paddingInlineStart:s}},["".concat(t,"-item")]:h}},{["".concat(t,"-inline-collapsed")]:{width:b,["&".concat(t,"-root")]:{["".concat(t,"-item, ").concat(t,"-submenu ").concat(t,"-submenu-title")]:{["> ".concat(t,"-inline-collapsed-noicon")]:{fontSize:m,textAlign:"center"}}},["> ".concat(t,"-item,\n          > ").concat(t,"-item-group > ").concat(t,"-item-group-list > ").concat(t,"-item,\n          > ").concat(t,"-item-group > ").concat(t,"-item-group-list > ").concat(t,"-submenu > ").concat(t,"-submenu-title,\n          > ").concat(t,"-submenu > ").concat(t,"-submenu-title")]:{insetInlineStart:0,paddingInline:"calc(50% - ".concat((0,z.zA)(e.calc(m).div(2).equal())," - ").concat((0,z.zA)(d),")"),textOverflow:"clip",["\n            ".concat(t,"-submenu-arrow,\n            ").concat(t,"-submenu-expand-icon\n          ")]:{opacity:0},["".concat(t,"-item-icon, ").concat(o)]:{margin:0,fontSize:v,lineHeight:(0,z.zA)(n),"+ span":{display:"inline-block",opacity:0}}},["".concat(t,"-item-icon, ").concat(o)]:{display:"inline-block"},"&-tooltip":{pointerEvents:"none",["".concat(t,"-item-icon, ").concat(o)]:{display:"none"},"a, a:hover":{color:c}},["".concat(t,"-item-group-title")]:Object.assign(Object.assign({},A.L9),{paddingInline:p})}}]},q=e=>{const{componentCls:t,motionDurationSlow:o,motionDurationMid:n,motionEaseInOut:c,motionEaseOut:a,iconCls:r,iconSize:i,iconMarginInlineEnd:l}=e;return{["".concat(t,"-item, ").concat(t,"-submenu-title")]:{position:"relative",display:"block",margin:0,whiteSpace:"nowrap",cursor:"pointer",transition:["border-color ".concat(o),"background ".concat(o),"padding ".concat(o," ").concat(c)].join(","),["".concat(t,"-item-icon, ").concat(r)]:{minWidth:i,fontSize:i,transition:["font-size ".concat(n," ").concat(a),"margin ".concat(o," ").concat(c),"color ".concat(o)].join(","),"+ span":{marginInlineStart:l,opacity:1,transition:["opacity ".concat(o," ").concat(c),"margin ".concat(o),"color ".concat(o)].join(",")}},["".concat(t,"-item-icon")]:Object.assign({},(0,A.Nk)()),["&".concat(t,"-item-only-child")]:{["> ".concat(r,", > ").concat(t,"-item-icon")]:{marginInlineEnd:0}}},["".concat(t,"-item-disabled, ").concat(t,"-submenu-disabled")]:{background:"none !important",cursor:"not-allowed","&::after":{borderColor:"transparent !important"},a:{color:"inherit !important"},["> ".concat(t,"-submenu-title")]:{color:"inherit !important",cursor:"not-allowed"}}}},X=e=>{const{componentCls:t,motionDurationSlow:o,motionEaseInOut:n,borderRadius:c,menuArrowSize:a,menuArrowOffset:r}=e;return{["".concat(t,"-submenu")]:{"&-expand-icon, &-arrow":{position:"absolute",top:"50%",insetInlineEnd:e.margin,width:a,color:"currentcolor",transform:"translateY(-50%)",transition:"transform ".concat(o," ").concat(n,", opacity ").concat(o)},"&-arrow":{"&::before, &::after":{position:"absolute",width:e.calc(a).mul(.6).equal(),height:e.calc(a).mul(.15).equal(),backgroundColor:"currentcolor",borderRadius:c,transition:["background ".concat(o," ").concat(n),"transform ".concat(o," ").concat(n),"top ".concat(o," ").concat(n),"color ".concat(o," ").concat(n)].join(","),content:'""'},"&::before":{transform:"rotate(45deg) translateY(".concat((0,z.zA)(e.calc(r).mul(-1).equal()),")")},"&::after":{transform:"rotate(-45deg) translateY(".concat((0,z.zA)(r),")")}}}}},G=e=>{const{antCls:t,componentCls:o,fontSize:n,motionDurationSlow:c,motionDurationMid:a,motionEaseInOut:r,paddingXS:i,padding:l,colorSplit:s,lineWidth:d,zIndexPopup:m,borderRadiusLG:u,subMenuItemBorderRadius:p,menuArrowSize:g,menuArrowOffset:b,lineType:v,groupTitleLineHeight:h,groupTitleFontSize:f}=e;return[{"":{["".concat(o)]:Object.assign(Object.assign({},(0,A.t6)()),{"&-hidden":{display:"none"}})},["".concat(o,"-submenu-hidden")]:{display:"none"}},{[o]:Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},(0,A.dF)(e)),(0,A.t6)()),{marginBottom:0,paddingInlineStart:0,fontSize:n,lineHeight:0,listStyle:"none",outline:"none",transition:"width ".concat(c," cubic-bezier(0.2, 0, 0, 1) 0s"),"ul, ol":{margin:0,padding:0,listStyle:"none"},"&-overflow":{display:"flex",["".concat(o,"-item")]:{flex:"none"}},["".concat(o,"-item, ").concat(o,"-submenu, ").concat(o,"-submenu-title")]:{borderRadius:e.itemBorderRadius},["".concat(o,"-item-group-title")]:{padding:"".concat((0,z.zA)(i)," ").concat((0,z.zA)(l)),fontSize:f,lineHeight:h,transition:"all ".concat(c)},["&-horizontal ".concat(o,"-submenu")]:{transition:["border-color ".concat(c," ").concat(r),"background ".concat(c," ").concat(r)].join(",")},["".concat(o,"-submenu, ").concat(o,"-submenu-inline")]:{transition:["border-color ".concat(c," ").concat(r),"background ".concat(c," ").concat(r),"padding ".concat(a," ").concat(r)].join(",")},["".concat(o,"-submenu ").concat(o,"-sub")]:{cursor:"initial",transition:["background ".concat(c," ").concat(r),"padding ".concat(c," ").concat(r)].join(",")},["".concat(o,"-title-content")]:{transition:"color ".concat(c),["> ".concat(t,"-typography-ellipsis-single-line")]:{display:"inline",verticalAlign:"unset"}},["".concat(o,"-item a")]:{"&::before":{position:"absolute",inset:0,backgroundColor:"transparent",content:'""'}},["".concat(o,"-item-divider")]:{overflow:"hidden",lineHeight:0,borderColor:s,borderStyle:v,borderWidth:0,borderTopWidth:d,marginBlock:d,padding:0,"&-dashed":{borderStyle:"dashed"}}}),q(e)),{["".concat(o,"-item-group")]:{["".concat(o,"-item-group-list")]:{margin:0,padding:0,["".concat(o,"-item, ").concat(o,"-submenu-title")]:{paddingInline:"".concat((0,z.zA)(e.calc(n).mul(2).equal())," ").concat((0,z.zA)(l))}}},"&-submenu":{"&-popup":{position:"absolute",zIndex:m,borderRadius:u,boxShadow:"none",transformOrigin:"0 0",["&".concat(o,"-submenu")]:{background:"transparent"},"&::before":{position:"absolute",inset:0,zIndex:-1,width:"100%",height:"100%",opacity:0,content:'""'},["> ".concat(o)]:Object.assign(Object.assign(Object.assign({borderRadius:u},q(e)),X(e)),{["".concat(o,"-item, ").concat(o,"-submenu > ").concat(o,"-submenu-title")]:{borderRadius:p},["".concat(o,"-submenu-title::after")]:{transition:"transform ".concat(c," ").concat(r)}})},"\n          &-placement-leftTop,\n          &-placement-bottomRight,\n          ":{transformOrigin:"100% 0"},"\n          &-placement-leftBottom,\n          &-placement-topRight,\n          ":{transformOrigin:"100% 100%"},"\n          &-placement-rightBottom,\n          &-placement-topLeft,\n          ":{transformOrigin:"0 100%"},"\n          &-placement-bottomLeft,\n          &-placement-rightTop,\n          ":{transformOrigin:"0 0"},"\n          &-placement-leftTop,\n          &-placement-leftBottom\n          ":{paddingInlineEnd:e.paddingXS},"\n          &-placement-rightTop,\n          &-placement-rightBottom\n          ":{paddingInlineStart:e.paddingXS},"\n          &-placement-topRight,\n          &-placement-topLeft\n          ":{paddingBottom:e.paddingXS},"\n          &-placement-bottomRight,\n          &-placement-bottomLeft\n          ":{paddingTop:e.paddingXS}}}),X(e)),{["&-inline-collapsed ".concat(o,"-submenu-arrow,\n        &-inline ").concat(o,"-submenu-arrow")]:{"&::before":{transform:"rotate(-45deg) translateX(".concat((0,z.zA)(b),")")},"&::after":{transform:"rotate(45deg) translateX(".concat((0,z.zA)(e.calc(b).mul(-1).equal()),")")}},["".concat(o,"-submenu-open").concat(o,"-submenu-inline > ").concat(o,"-submenu-title > ").concat(o,"-submenu-arrow")]:{transform:"translateY(".concat((0,z.zA)(e.calc(g).mul(.2).mul(-1).equal()),")"),"&::after":{transform:"rotate(-45deg) translateX(".concat((0,z.zA)(e.calc(b).mul(-1).equal()),")")},"&::before":{transform:"rotate(45deg) translateX(".concat((0,z.zA)(b),")")}}})},{["".concat(t,"-layout-header")]:{[o]:{lineHeight:"inherit"}}}]},F=e=>{var t,o,n;const{colorPrimary:c,colorError:a,colorTextDisabled:r,colorErrorBg:i,colorText:l,colorTextDescription:s,colorBgContainer:d,colorFillAlter:m,colorFillContent:u,lineWidth:p,lineWidthBold:g,controlItemBgActive:b,colorBgTextHover:v,controlHeightLG:h,lineHeight:f,colorBgElevated:I,marginXXS:C,padding:S,fontSize:B,controlHeightSM:x,fontSizeLG:y,colorTextLightSolid:O,colorErrorHover:w}=e,z=null!==(t=e.activeBarWidth)&&void 0!==t?t:0,A=null!==(o=e.activeBarBorderWidth)&&void 0!==o?o:p,j=null!==(n=e.itemMarginInline)&&void 0!==n?n:e.marginXXS,E=new k.q(O).setAlpha(.65).toRgbString();return{dropdownWidth:160,zIndexPopup:e.zIndexPopupBase+50,radiusItem:e.borderRadiusLG,itemBorderRadius:e.borderRadiusLG,radiusSubMenuItem:e.borderRadiusSM,subMenuItemBorderRadius:e.borderRadiusSM,colorItemText:l,itemColor:l,colorItemTextHover:l,itemHoverColor:l,colorItemTextHoverHorizontal:c,horizontalItemHoverColor:c,colorGroupTitle:s,groupTitleColor:s,colorItemTextSelected:c,itemSelectedColor:c,colorItemTextSelectedHorizontal:c,horizontalItemSelectedColor:c,colorItemBg:d,itemBg:d,colorItemBgHover:v,itemHoverBg:v,colorItemBgActive:u,itemActiveBg:b,colorSubItemBg:m,subMenuItemBg:m,colorItemBgSelected:b,itemSelectedBg:b,colorItemBgSelectedHorizontal:"transparent",horizontalItemSelectedBg:"transparent",colorActiveBarWidth:0,activeBarWidth:z,colorActiveBarHeight:g,activeBarHeight:g,colorActiveBarBorderSize:p,activeBarBorderWidth:A,colorItemTextDisabled:r,itemDisabledColor:r,colorDangerItemText:a,dangerItemColor:a,colorDangerItemTextHover:a,dangerItemHoverColor:a,colorDangerItemTextSelected:a,dangerItemSelectedColor:a,colorDangerItemBgActive:i,dangerItemActiveBg:i,colorDangerItemBgSelected:i,dangerItemSelectedBg:i,itemMarginInline:j,horizontalItemBorderRadius:0,horizontalItemHoverBg:"transparent",itemHeight:h,groupTitleLineHeight:f,collapsedWidth:2*h,popupBg:I,itemMarginBlock:C,itemPaddingInline:S,horizontalLineHeight:"".concat(1.15*h,"px"),iconSize:B,iconMarginInlineEnd:x-B,collapsedIconSize:y,groupTitleFontSize:B,darkItemDisabledColor:new k.q(O).setAlpha(.25).toRgbString(),darkItemColor:E,darkDangerItemColor:a,darkItemBg:"#001529",darkPopupBg:"#001529",darkSubMenuItemBg:"#000c17",darkItemSelectedColor:O,darkItemSelectedBg:c,darkDangerItemSelectedBg:a,darkItemHoverBg:"transparent",darkGroupTitleColor:E,darkItemHoverColor:O,darkDangerItemHoverColor:w,darkDangerItemSelectedColor:O,darkDangerItemActiveBg:a,itemWidth:z?"calc(100% + ".concat(A,"px)"):"calc(100% - ".concat(2*j,"px)")}},Y=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e,o=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return(0,T.OF)("Menu",(e=>{const{colorBgElevated:t,controlHeightLG:o,fontSize:n,darkItemColor:c,darkDangerItemColor:a,darkItemBg:r,darkSubMenuItemBg:i,darkItemSelectedColor:l,darkItemSelectedBg:s,darkDangerItemSelectedBg:d,darkItemHoverBg:m,darkGroupTitleColor:u,darkItemHoverColor:p,darkItemDisabledColor:g,darkDangerItemHoverColor:b,darkDangerItemSelectedColor:v,darkDangerItemActiveBg:h,popupBg:f,darkPopupBg:I}=e,C=e.calc(n).div(7).mul(5).equal(),S=(0,M.h1)(e,{menuArrowSize:C,menuHorizontalHeight:e.calc(o).mul(1.15).equal(),menuArrowOffset:e.calc(C).mul(.25).equal(),menuSubMenuBg:t,calc:e.calc,popupBg:f}),B=(0,M.h1)(S,{itemColor:c,itemHoverColor:p,groupTitleColor:u,itemSelectedColor:l,itemBg:r,popupBg:I,subMenuItemBg:i,itemActiveBg:"transparent",itemSelectedBg:s,activeBarHeight:0,activeBarBorderWidth:0,itemHoverBg:m,itemDisabledColor:g,dangerItemColor:a,dangerItemHoverColor:b,dangerItemSelectedColor:v,dangerItemActiveBg:h,dangerItemSelectedBg:d,menuSubMenuBg:i,horizontalItemSelectedColor:l,horizontalItemSelectedBg:s});return[G(S),D(S),L(S),R(S,"light"),R(B,"dark"),N(S),(0,j.A)(S),(0,E._j)(S,"slide-up"),(0,E._j)(S,"slide-down"),(0,H.aB)(S,"zoom-big")]}),F,{deprecatedTokens:[["colorGroupTitle","groupTitleColor"],["radiusItem","itemBorderRadius"],["radiusSubMenuItem","subMenuItemBorderRadius"],["colorItemText","itemColor"],["colorItemTextHover","itemHoverColor"],["colorItemTextHoverHorizontal","horizontalItemHoverColor"],["colorItemTextSelected","itemSelectedColor"],["colorItemTextSelectedHorizontal","horizontalItemSelectedColor"],["colorItemTextDisabled","itemDisabledColor"],["colorDangerItemText","dangerItemColor"],["colorDangerItemTextHover","dangerItemHoverColor"],["colorDangerItemTextSelected","dangerItemSelectedColor"],["colorDangerItemBgActive","dangerItemActiveBg"],["colorDangerItemBgSelected","dangerItemSelectedBg"],["colorItemBg","itemBg"],["colorItemBgHover","itemHoverBg"],["colorSubItemBg","subMenuItemBg"],["colorItemBgActive","itemActiveBg"],["colorItemBgSelectedHorizontal","horizontalItemSelectedBg"],["colorActiveBarWidth","activeBarWidth"],["colorActiveBarHeight","activeBarHeight"],["colorActiveBarBorderSize","activeBarBorderWidth"],["colorItemBgSelected","itemSelectedBg"]],injectStyle:o,unitless:{groupTitleLineHeight:!0}})(e,t)};var V=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var c=0;for(n=Object.getOwnPropertySymbols(e);c<n.length;c++)t.indexOf(n[c])<0&&Object.prototype.propertyIsEnumerable.call(e,n[c])&&(o[n[c]]=e[n[c]])}return o};function _(e){return null===e||!1===e}const K=(0,n.forwardRef)(((e,t)=>{var o;const a=n.useContext(w.h),i=a||{},{getPrefixCls:b,getPopupContainer:v,direction:h,menu:f}=n.useContext(p.QO),C=b(),{prefixCls:S,className:B,style:x,theme:y="light",expandIcon:z,_internalDisableMenuItemTitleTooltip:k,inlineCollapsed:A,siderCollapsed:j,items:E,children:H,rootClassName:T,mode:M,selectable:D,onClick:N,overflowedIndicatorPopupClassName:P}=e,R=V(e,["prefixCls","className","style","theme","expandIcon","_internalDisableMenuItemTitleTooltip","inlineCollapsed","siderCollapsed","items","children","rootClassName","mode","selectable","onClick","overflowedIndicatorPopupClassName"]),W=(0,d.A)(R,["collapsedWidth"]),L=O(E)||H;null===(o=i.validator)||void 0===o||o.call(i,{mode:M});const q=(0,s._q)((function(){var e;null===N||void 0===N||N.apply(void 0,arguments),null===(e=i.onClick)||void 0===e||e.call(i)})),X=i.mode||M,G=null!==D&&void 0!==D?D:i.selectable,F=n.useMemo((()=>void 0!==j?j:A),[A,j]),K={horizontal:{motionName:"".concat(C,"-slide-up")},inline:(0,m.A)(C),other:{motionName:"".concat(C,"-zoom-big")}},Q=b("menu",S||i.prefixCls),J=(0,g.A)(Q),[U,Z,$]=Y(Q,J,!a),ee=l()("".concat(Q,"-").concat(y),null===f||void 0===f?void 0:f.className,B),te=n.useMemo((()=>{var e,t;if("function"===typeof z||_(z))return z||null;if("function"===typeof i.expandIcon||_(i.expandIcon))return i.expandIcon||null;if("function"===typeof(null===f||void 0===f?void 0:f.expandIcon)||_(null===f||void 0===f?void 0:f.expandIcon))return(null===f||void 0===f?void 0:f.expandIcon)||null;const o=null!==(e=null!==z&&void 0!==z?z:null===i||void 0===i?void 0:i.expandIcon)&&void 0!==e?e:null===f||void 0===f?void 0:f.expandIcon;return(0,u.Ob)(o,{className:l()("".concat(Q,"-submenu-expand-icon"),n.isValidElement(o)?null===(t=o.props)||void 0===t?void 0:t.className:void 0)})}),[z,null===i||void 0===i?void 0:i.expandIcon,null===f||void 0===f?void 0:f.expandIcon,Q]),oe=n.useMemo((()=>({prefixCls:Q,inlineCollapsed:F||!1,direction:h,firstLevel:!0,theme:y,mode:X,disableMenuItemTitleTooltip:k})),[Q,F,h,k,y]);return U(n.createElement(w.h.Provider,{value:null},n.createElement(I.Provider,{value:oe},n.createElement(c.Ay,Object.assign({getPopupContainer:v,overflowedIndicator:n.createElement(r.A,null),overflowedIndicatorPopupClassName:l()(Q,"".concat(Q,"-").concat(y),P),mode:X,selectable:G,onClick:q},W,{inlineCollapsed:F,style:Object.assign(Object.assign({},null===f||void 0===f?void 0:f.style),x),className:ee,prefixCls:Q,direction:h,defaultMotions:K,expandIcon:te,ref:t,rootClassName:l()(T,Z,i.rootClassName,$,J)}),L))))})),Q=K,J=(0,n.forwardRef)(((e,t)=>{const o=(0,n.useRef)(null),c=n.useContext(a.P);return(0,n.useImperativeHandle)(t,(()=>({menu:o.current,focus:e=>{var t;null===(t=o.current)||void 0===t||t.focus(e)}}))),n.createElement(Q,Object.assign({ref:o},e,c))}));J.Item=C,J.SubMenu=B,J.Divider=v,J.ItemGroup=c.te;const U=J},37770:(e,t,o)=>{o.d(t,{A:()=>n});const n=e=>({[e.componentCls]:{["".concat(e.antCls,"-motion-collapse-legacy")]:{overflow:"hidden","&-active":{transition:"height ".concat(e.motionDurationMid," ").concat(e.motionEaseInOut,",\n        opacity ").concat(e.motionDurationMid," ").concat(e.motionEaseInOut," !important")}},["".concat(e.antCls,"-motion-collapse")]:{overflow:"hidden",transition:"height ".concat(e.motionDurationMid," ").concat(e.motionEaseInOut,",\n        opacity ").concat(e.motionDurationMid," ").concat(e.motionEaseInOut," !important")}}})}}]);
//# sourceMappingURL=881.5e630edd.chunk.js.map