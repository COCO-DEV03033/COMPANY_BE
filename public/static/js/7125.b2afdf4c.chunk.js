(self.webpackChunkSelfie_Admin=self.webpackChunkSelfie_Admin||[]).push([[7125],{76396:(e,t,n)=>{"use strict";n.d(t,{A:()=>i});n(65043);var a=n(2761),r=n(70579);const o=e=>(0,r.jsx)(a.A,{...e,className:"ant-avatar-".concat(e.type),children:e.text}),i=e=>{const{name:t,suffix:n,subTitle:a,id:i,type:s,src:l,icon:c,size:d,shape:m,gap:u,text:h,onNameClick:f}=e;return(0,r.jsxs)("div",{className:"avatar-status d-flex align-items-center",children:[o({icon:c,src:l,type:s,size:d,shape:m,gap:u,text:h}),(0,r.jsxs)("div",{className:"ml-2",children:[(0,r.jsxs)("div",{children:[f?(0,r.jsx)("div",{onClick:()=>f({name:t,subTitle:a,src:l,id:i}),className:"avatar-status-name clickable",children:t}):(0,r.jsx)("div",{className:"avatar-status-name",children:t}),(0,r.jsx)("span",{children:n})]}),(0,r.jsx)("div",{className:"text-muted avatar-status-subtitle",children:a})]})]})}},86414:(e,t,n)=>{"use strict";n.r(t),n.d(t,{UserList:()=>I,default:()=>z});var a=n(65043),r=n(16569),o=n(76399),i=n(96651),s=n(87021),l=n(89073),c=n(30703),d=n(76191),m=n(61966),u=n(60446),h=n.n(u),f=n(48677),p=n(2761),g=n(8354),b=n(53722),v=n(81210),x=n(92543),y=n(75388),k=n(28137),w=n(32458),j=n(7130),S=n(42229),C=n(10454),O=n(70579);class $ extends a.Component{render(){const{data:e,visible:t,close:n}=this.props;return(0,O.jsxs)(f.A,{width:300,placement:"right",onClose:n,closable:!1,open:t,children:[(0,O.jsxs)("div",{className:"text-center mt-3",children:[(0,O.jsx)(p.A,{size:80,src:null===e||void 0===e?void 0:e.img}),(0,O.jsx)("h3",{className:"mt-2 mb-0",children:null===e||void 0===e?void 0:e.name}),(0,O.jsx)("span",{className:"text-muted",children:null===e||void 0===e?void 0:e.personalInfo.title})]}),(0,O.jsx)(g.A,{dashed:!0}),(0,O.jsxs)("div",{className:"",children:[(0,O.jsx)("h6",{className:"text-muted text-uppercase mb-3",children:"Account details"}),(0,O.jsxs)("p",{children:[(0,O.jsx)(b.A,{}),(0,O.jsxs)("span",{className:"ml-3 text-dark",children:["id: ",null===e||void 0===e?void 0:e.id]})]}),(0,O.jsxs)("p",{children:[(0,O.jsx)(v.A,{}),(0,O.jsxs)("span",{className:"ml-3 text-dark",children:["Born in ",null===e||void 0===e?void 0:e.personalInfo.birthday]})]})]}),(0,O.jsxs)("div",{className:"mt-5",children:[(0,O.jsx)("h6",{className:"text-muted text-uppercase mb-3",children:"CONTACT"}),(0,O.jsxs)("p",{children:[(0,O.jsx)(x.A,{}),(0,O.jsx)("span",{className:"ml-3 text-dark",children:null===e||void 0===e?void 0:e.personalInfo.phoneNumber})]}),(0,O.jsxs)("p",{children:[(0,O.jsx)(y.A,{}),(0,O.jsx)("span",{className:"ml-3 text-dark",children:null!==e&&void 0!==e&&e.email?null===e||void 0===e?void 0:e.email:"-"})]}),(0,O.jsxs)("p",{children:[(0,O.jsx)(k.A,{}),(0,O.jsx)("span",{className:"ml-3 text-dark",children:null===e||void 0===e?void 0:e.personalInfo.location})]})]}),(0,O.jsxs)("div",{className:"mt-5",children:[(0,O.jsx)("h6",{className:"text-muted text-uppercase mb-3",children:"Social profiles"}),(0,O.jsxs)("p",{children:[(0,O.jsx)(w.A,{}),(0,O.jsx)("a",{href:"/#",className:"ml-3 text-dark",children:null!==e&&void 0!==e&&e.personalInfo.facebook?null===e||void 0===e?void 0:e.personalInfo.facebook:"-"})]}),(0,O.jsxs)("p",{children:[(0,O.jsx)(j.A,{}),(0,O.jsx)("a",{href:"/#",className:"ml-3 text-dark",children:null!==e&&void 0!==e&&e.personalInfo.twitter?null===e||void 0===e?void 0:e.personalInfo.twitter:"-"})]}),(0,O.jsxs)("p",{children:[(0,O.jsx)(S.A,{}),(0,O.jsx)("a",{href:"/#",className:"ml-3 text-dark",children:null!==e&&void 0!==e&&e.personalInfo.instagram?null===e||void 0===e?void 0:e.personalInfo.instagram:"-"})]}),(0,O.jsxs)("p",{children:[(0,O.jsx)(C.A,{}),(0,O.jsx)("a",{href:"/#",className:"ml-3 text-dark",children:null!==e&&void 0!==e&&e.personalInfo.site?null===e||void 0===e?void 0:e.personalInfo.site:"-"})]})]})]})}}const M=$;var N=n(76396),A=n(94742);class I extends a.Component{constructor(){super(...arguments),this.state={users:A,userProfileVisible:!1,selectedUser:null},this.deleteUser=e=>{this.setState({users:this.state.users.filter((t=>t.id!==e))}),r.Ay.success({content:"Deleted user ".concat(e),duration:2})},this.showUserProfile=e=>{this.setState({userProfileVisible:!0,selectedUser:e})},this.closeUserProfile=()=>{this.setState({userProfileVisible:!1,selectedUser:null})}}render(){const{users:e,userProfileVisible:t,selectedUser:n}=this.state,a=[{title:"User",dataIndex:"name",render:(e,t)=>(0,O.jsx)("div",{className:"d-flex",children:(0,O.jsx)(N.A,{src:t.img,name:t.name,subTitle:t.email})}),sorter:{compare:(e,t)=>(e=e.name.toLowerCase())>(t=t.name.toLowerCase())?-1:t>e?1:0}},{title:"Role",dataIndex:"role",sorter:{compare:(e,t)=>e.role.length-t.role.length}},{title:"Last online",dataIndex:"lastOnline",render:e=>(0,O.jsxs)("span",{children:[h().unix(e).format("MM/DD/YYYY")," "]}),sorter:(e,t)=>h()(e.lastOnline).unix()-h()(t.lastOnline).unix()},{title:"Status",dataIndex:"status",render:e=>(0,O.jsx)(o.A,{className:"text-capitalize",color:"active"===e?"cyan":"pending"===e?"blue":"red",children:e}),sorter:{compare:(e,t)=>e.status.length-t.status.length}},{title:"",dataIndex:"actions",render:(e,t)=>(0,O.jsxs)("div",{className:"text-right d-flex justify-content-end",children:[(0,O.jsx)(i.A,{title:"View",children:(0,O.jsx)(s.Ay,{type:"primary",className:"mr-2",icon:(0,O.jsx)(d.A,{}),onClick:()=>{this.showUserProfile(t)},size:"small"})}),(0,O.jsx)(i.A,{title:"Delete",children:(0,O.jsx)(s.Ay,{danger:!0,icon:(0,O.jsx)(m.A,{}),onClick:()=>{this.deleteUser(t.id)},size:"small"})})]})}];return(0,O.jsxs)(l.A,{bodyStyle:{padding:"0px"},children:[(0,O.jsx)("div",{className:"table-responsive",children:(0,O.jsx)(c.A,{columns:a,dataSource:e,rowKey:"id"})}),(0,O.jsx)(M,{data:n,visible:t,close:()=>{this.closeUserProfile()}})]})}}const z=I},12499:(e,t,n)=>{"use strict";n.d(t,{A:()=>l});var a=n(58168),r=n(65043);const o={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 01-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z"}}]},name:"check-circle",theme:"filled"};var i=n(51835),s=function(e,t){return r.createElement(i.A,(0,a.A)({},e,{ref:t,icon:o}))};const l=r.forwardRef(s)},63390:(e,t,n)=>{"use strict";n.d(t,{A:()=>l});var a=n(58168),r=n(65043);const o={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"}}]},name:"check",theme:"outlined"};var i=n(51835),s=function(e,t){return r.createElement(i.A,(0,a.A)({},e,{ref:t,icon:o}))};const l=r.forwardRef(s)},51376:(e,t,n)=>{"use strict";n.d(t,{A:()=>l});var a=n(58168),r=n(65043);const o={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm-32 232c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V296zm32 440a48.01 48.01 0 010-96 48.01 48.01 0 010 96z"}}]},name:"exclamation-circle",theme:"filled"};var i=n(51835),s=function(e,t){return r.createElement(i.A,(0,a.A)({},e,{ref:t,icon:o}))};const l=r.forwardRef(s)},55391:(e,t,n)=>{"use strict";n.d(t,{A:()=>d,d:()=>i});var a=n(65043),r=n(53727),o=n(48060);function i(e){if(e)return{closable:e.closable,closeIcon:e.closeIcon}}function s(e){const{closable:t,closeIcon:n}=e||{};return a.useMemo((()=>{if(!t&&(!1===t||!1===n||null===n))return!1;if(void 0===t&&void 0===n)return null;let e={closeIcon:"boolean"!==typeof n&&null!==n?n:void 0};return t&&"object"===typeof t&&(e=Object.assign(Object.assign({},e),t)),e}),[t,n])}function l(){const e={};for(var t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];return n.forEach((t=>{t&&Object.keys(t).forEach((n=>{void 0!==t[n]&&(e[n]=t[n])}))})),e}const c={};function d(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:c;const i=s(e),d=s(t),m=a.useMemo((()=>Object.assign({closeIcon:a.createElement(r.A,null)},n)),[n]),u=a.useMemo((()=>!1!==i&&(i?l(m,d,i):!1!==d&&(d?l(m,d):!!m.closable&&m))),[i,d,m]);return a.useMemo((()=>{if(!1===u)return[!1,null];const{closeIconRender:e}=m,{closeIcon:t}=u;let n=t;if(null!==n&&void 0!==n){e&&(n=e(t));const r=(0,o.A)(u,!0);Object.keys(r).length&&(n=a.isValidElement(n)?a.cloneElement(n,r):a.createElement("span",Object.assign({},r),n))}return[!0,n]}),[u,m])}},8354:(e,t,n)=>{"use strict";n.d(t,{A:()=>f});var a=n(65043),r=n(98139),o=n.n(r),i=n(35296),s=n(99310),l=n(94414),c=n(41383),d=n(78365);const m=e=>{const{componentCls:t,sizePaddingEdgeHorizontal:n,colorSplit:a,lineWidth:r,textPaddingInline:o,orientationMargin:i,verticalMarginInline:c}=e;return{[t]:Object.assign(Object.assign({},(0,l.dF)(e)),{borderBlockStart:"".concat((0,s.zA)(r)," solid ").concat(a),"&-vertical":{position:"relative",top:"-0.06em",display:"inline-block",height:"0.9em",marginInline:c,marginBlock:0,verticalAlign:"middle",borderTop:0,borderInlineStart:"".concat((0,s.zA)(r)," solid ").concat(a)},"&-horizontal":{display:"flex",clear:"both",width:"100%",minWidth:"100%",margin:"".concat((0,s.zA)(e.dividerHorizontalGutterMargin)," 0")},["&-horizontal".concat(t,"-with-text")]:{display:"flex",alignItems:"center",margin:"".concat((0,s.zA)(e.dividerHorizontalWithTextGutterMargin)," 0"),color:e.colorTextHeading,fontWeight:500,fontSize:e.fontSizeLG,whiteSpace:"nowrap",textAlign:"center",borderBlockStart:"0 ".concat(a),"&::before, &::after":{position:"relative",width:"50%",borderBlockStart:"".concat((0,s.zA)(r)," solid transparent"),borderBlockStartColor:"inherit",borderBlockEnd:0,transform:"translateY(50%)",content:"''"}},["&-horizontal".concat(t,"-with-text-left")]:{"&::before":{width:"calc(".concat(i," * 100%)")},"&::after":{width:"calc(100% - ".concat(i," * 100%)")}},["&-horizontal".concat(t,"-with-text-right")]:{"&::before":{width:"calc(100% - ".concat(i," * 100%)")},"&::after":{width:"calc(".concat(i," * 100%)")}},["".concat(t,"-inner-text")]:{display:"inline-block",paddingBlock:0,paddingInline:o},"&-dashed":{background:"none",borderColor:a,borderStyle:"dashed",borderWidth:"".concat((0,s.zA)(r)," 0 0")},["&-horizontal".concat(t,"-with-text").concat(t,"-dashed")]:{"&::before, &::after":{borderStyle:"dashed none none"}},["&-vertical".concat(t,"-dashed")]:{borderInlineStartWidth:r,borderInlineEnd:0,borderBlockStart:0,borderBlockEnd:0},["&-plain".concat(t,"-with-text")]:{color:e.colorText,fontWeight:"normal",fontSize:e.fontSize},["&-horizontal".concat(t,"-with-text-left").concat(t,"-no-default-orientation-margin-left")]:{"&::before":{width:0},"&::after":{width:"100%"},["".concat(t,"-inner-text")]:{paddingInlineStart:n}},["&-horizontal".concat(t,"-with-text-right").concat(t,"-no-default-orientation-margin-right")]:{"&::before":{width:"100%"},"&::after":{width:0},["".concat(t,"-inner-text")]:{paddingInlineEnd:n}}})}},u=(0,c.OF)("Divider",(e=>{const t=(0,d.h1)(e,{dividerHorizontalWithTextGutterMargin:e.margin,dividerHorizontalGutterMargin:e.marginLG,sizePaddingEdgeHorizontal:0});return[m(t)]}),(e=>({textPaddingInline:"1em",orientationMargin:.05,verticalMarginInline:e.marginXS})),{unitless:{orientationMargin:!0}});var h=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n};const f=e=>{const{getPrefixCls:t,direction:n,divider:r}=a.useContext(i.QO),{prefixCls:s,type:l="horizontal",orientation:c="center",orientationMargin:d,className:m,rootClassName:f,children:p,dashed:g,plain:b,style:v}=e,x=h(e,["prefixCls","type","orientation","orientationMargin","className","rootClassName","children","dashed","plain","style"]),y=t("divider",s),[k,w,j]=u(y),S=c.length>0?"-".concat(c):c,C=!!p,O="left"===c&&null!=d,$="right"===c&&null!=d,M=o()(y,null===r||void 0===r?void 0:r.className,w,j,"".concat(y,"-").concat(l),{["".concat(y,"-with-text")]:C,["".concat(y,"-with-text").concat(S)]:C,["".concat(y,"-dashed")]:!!g,["".concat(y,"-plain")]:!!b,["".concat(y,"-rtl")]:"rtl"===n,["".concat(y,"-no-default-orientation-margin-left")]:O,["".concat(y,"-no-default-orientation-margin-right")]:$},m,f),N=a.useMemo((()=>"number"===typeof d?d:/^\d+$/.test(d)?Number(d):d),[d]),A=Object.assign(Object.assign({},O&&{marginLeft:N}),$&&{marginRight:N});return k(a.createElement("div",Object.assign({className:M,style:Object.assign(Object.assign({},null===r||void 0===r?void 0:r.style),v)},x,{role:"separator"}),p&&"vertical"!==l&&a.createElement("span",{className:"".concat(y,"-inner-text"),style:A},p)))}},76399:(e,t,n)=>{"use strict";n.d(t,{A:()=>A});var a=n(65043),r=n(98139),o=n.n(r),i=n(18574),s=n(11128),l=n(55391),c=n(12701),d=n(12366),m=n(35296),u=n(99310),h=n(50097),f=n(94414),p=n(78365),g=n(41383);const b=e=>{const{lineWidth:t,fontSizeIcon:n,calc:a}=e,r=e.fontSizeSM;return(0,p.h1)(e,{tagFontSize:r,tagLineHeight:(0,u.zA)(a(e.lineHeightSM).mul(r).equal()),tagIconSize:a(n).sub(a(t).mul(2)).equal(),tagPaddingHorizontal:8,tagBorderlessBg:e.defaultBg})},v=e=>({defaultBg:new h.q(e.colorFillQuaternary).onBackground(e.colorBgContainer).toHexString(),defaultColor:e.colorText}),x=(0,g.OF)("Tag",(e=>(e=>{const{paddingXXS:t,lineWidth:n,tagPaddingHorizontal:a,componentCls:r,calc:o}=e,i=o(a).sub(n).equal(),s=o(t).sub(n).equal();return{[r]:Object.assign(Object.assign({},(0,f.dF)(e)),{display:"inline-block",height:"auto",marginInlineEnd:e.marginXS,paddingInline:i,fontSize:e.tagFontSize,lineHeight:e.tagLineHeight,whiteSpace:"nowrap",background:e.defaultBg,border:"".concat((0,u.zA)(e.lineWidth)," ").concat(e.lineType," ").concat(e.colorBorder),borderRadius:e.borderRadiusSM,opacity:1,transition:"all ".concat(e.motionDurationMid),textAlign:"start",position:"relative",["&".concat(r,"-rtl")]:{direction:"rtl"},"&, a, a:hover":{color:e.defaultColor},["".concat(r,"-close-icon")]:{marginInlineStart:s,fontSize:e.tagIconSize,color:e.colorTextDescription,cursor:"pointer",transition:"all ".concat(e.motionDurationMid),"&:hover":{color:e.colorTextHeading}},["&".concat(r,"-has-color")]:{borderColor:"transparent",["&, a, a:hover, ".concat(e.iconCls,"-close, ").concat(e.iconCls,"-close:hover")]:{color:e.colorTextLightSolid}},"&-checkable":{backgroundColor:"transparent",borderColor:"transparent",cursor:"pointer",["&:not(".concat(r,"-checkable-checked):hover")]:{color:e.colorPrimary,backgroundColor:e.colorFillSecondary},"&:active, &-checked":{color:e.colorTextLightSolid},"&-checked":{backgroundColor:e.colorPrimary,"&:hover":{backgroundColor:e.colorPrimaryHover}},"&:active":{backgroundColor:e.colorPrimaryActive}},"&-hidden":{display:"none"},["> ".concat(e.iconCls," + span, > span + ").concat(e.iconCls)]:{marginInlineStart:i}}),["".concat(r,"-borderless")]:{borderColor:"transparent",background:e.tagBorderlessBg}}})(b(e))),v);var y=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n};const k=a.forwardRef(((e,t)=>{const{prefixCls:n,style:r,className:i,checked:s,onChange:l,onClick:c}=e,d=y(e,["prefixCls","style","className","checked","onChange","onClick"]),{getPrefixCls:u,tag:h}=a.useContext(m.QO),f=u("tag",n),[p,g,b]=x(f),v=o()(f,"".concat(f,"-checkable"),{["".concat(f,"-checkable-checked")]:s},null===h||void 0===h?void 0:h.className,i,g,b);return p(a.createElement("span",Object.assign({},d,{ref:t,style:Object.assign(Object.assign({},r),null===h||void 0===h?void 0:h.style),className:v,onClick:e=>{null===l||void 0===l||l(!s),null===c||void 0===c||c(e)}})))})),w=k;var j=n(8835);const S=(0,g.bf)(["Tag","preset"],(e=>(e=>(0,j.A)(e,((t,n)=>{let{textColor:a,lightBorderColor:r,lightColor:o,darkColor:i}=n;return{["".concat(e.componentCls).concat(e.componentCls,"-").concat(t)]:{color:a,background:o,borderColor:r,"&-inverse":{color:e.colorTextLightSolid,background:i,borderColor:i},["&".concat(e.componentCls,"-borderless")]:{borderColor:"transparent"}}}})))(b(e))),v);const C=(e,t,n)=>{const a="string"!==typeof(r=n)?r:r.charAt(0).toUpperCase()+r.slice(1);var r;return{["".concat(e.componentCls).concat(e.componentCls,"-").concat(t)]:{color:e["color".concat(n)],background:e["color".concat(a,"Bg")],borderColor:e["color".concat(a,"Border")],["&".concat(e.componentCls,"-borderless")]:{borderColor:"transparent"}}}},O=(0,g.bf)(["Tag","status"],(e=>{const t=b(e);return[C(t,"success","Success"),C(t,"processing","Info"),C(t,"error","Error"),C(t,"warning","Warning")]}),v);var $=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n};const M=(e,t)=>{const{prefixCls:n,className:r,rootClassName:u,style:h,children:f,icon:p,color:g,onClose:b,bordered:v=!0,visible:y}=e,k=$(e,["prefixCls","className","rootClassName","style","children","icon","color","onClose","bordered","visible"]),{getPrefixCls:w,direction:j,tag:C}=a.useContext(m.QO),[M,N]=a.useState(!0),A=(0,i.A)(k,["closeIcon","closable"]);a.useEffect((()=>{void 0!==y&&N(y)}),[y]);const I=(0,s.nP)(g),z=(0,s.ZZ)(g),D=I||z,U=Object.assign(Object.assign({backgroundColor:g&&!D?g:void 0},null===C||void 0===C?void 0:C.style),h),E=w("tag",n),[T,H,P]=x(E),L=o()(E,null===C||void 0===C?void 0:C.className,{["".concat(E,"-").concat(g)]:D,["".concat(E,"-has-color")]:g&&!D,["".concat(E,"-hidden")]:!M,["".concat(E,"-rtl")]:"rtl"===j,["".concat(E,"-borderless")]:!v},r,u,H,P),B=e=>{e.stopPropagation(),null===b||void 0===b||b(e),e.defaultPrevented||N(!1)},[,_]=(0,l.A)((0,l.d)(e),(0,l.d)(C),{closable:!1,closeIconRender:e=>{const t=a.createElement("span",{className:"".concat(E,"-close-icon"),onClick:B},e);return(0,c.fx)(e,t,(e=>({onClick:t=>{var n;null===(n=null===e||void 0===e?void 0:e.onClick)||void 0===n||n.call(e,t),B(t)},className:o()(null===e||void 0===e?void 0:e.className,"".concat(E,"-close-icon"))})))}}),W="function"===typeof k.onClick||f&&"a"===f.type,Y=p||null,F=Y?a.createElement(a.Fragment,null,Y,f&&a.createElement("span",null,f)):f,R=a.createElement("span",Object.assign({},A,{ref:t,className:L,style:U}),F,_,I&&a.createElement(S,{key:"preset",prefixCls:E}),z&&a.createElement(O,{key:"status",prefixCls:E}));return T(W?a.createElement(d.A,{component:"Tag"},R):R)},N=a.forwardRef(M);N.CheckableTag=w;const A=N},99114:(e,t,n)=>{"use strict";n.d(t,{f:()=>s});var a=n(87483),r=n(65043);function o(){}const i=r.createContext({add:o,remove:o});function s(e){const t=r.useContext(i),n=r.useRef();return(0,a._q)((a=>{if(a){const r=e?a.querySelector(e):a;t.add(r),n.current=r}else t.remove(n.current)}))}},60446:function(e){e.exports=function(){"use strict";var e=1e3,t=6e4,n=36e5,a="millisecond",r="second",o="minute",i="hour",s="day",l="week",c="month",d="quarter",m="year",u="date",h="Invalid Date",f=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,p=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,g={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],n=e%100;return"["+e+(t[(n-20)%10]||t[n]||t[0])+"]"}},b=function(e,t,n){var a=String(e);return!a||a.length>=t?e:""+Array(t+1-a.length).join(n)+e},v={s:b,z:function(e){var t=-e.utcOffset(),n=Math.abs(t),a=Math.floor(n/60),r=n%60;return(t<=0?"+":"-")+b(a,2,"0")+":"+b(r,2,"0")},m:function e(t,n){if(t.date()<n.date())return-e(n,t);var a=12*(n.year()-t.year())+(n.month()-t.month()),r=t.clone().add(a,c),o=n-r<0,i=t.clone().add(a+(o?-1:1),c);return+(-(a+(n-r)/(o?r-i:i-r))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:c,y:m,w:l,d:s,D:u,h:i,m:o,s:r,ms:a,Q:d}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},x="en",y={};y[x]=g;var k="$isDayjsObject",w=function(e){return e instanceof O||!(!e||!e[k])},j=function e(t,n,a){var r;if(!t)return x;if("string"==typeof t){var o=t.toLowerCase();y[o]&&(r=o),n&&(y[o]=n,r=o);var i=t.split("-");if(!r&&i.length>1)return e(i[0])}else{var s=t.name;y[s]=t,r=s}return!a&&r&&(x=r),r||!a&&x},S=function(e,t){if(w(e))return e.clone();var n="object"==typeof t?t:{};return n.date=e,n.args=arguments,new O(n)},C=v;C.l=j,C.i=w,C.w=function(e,t){return S(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var O=function(){function g(e){this.$L=j(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[k]=!0}var b=g.prototype;return b.parse=function(e){this.$d=function(e){var t=e.date,n=e.utc;if(null===t)return new Date(NaN);if(C.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var a=t.match(f);if(a){var r=a[2]-1||0,o=(a[7]||"0").substring(0,3);return n?new Date(Date.UTC(a[1],r,a[3]||1,a[4]||0,a[5]||0,a[6]||0,o)):new Date(a[1],r,a[3]||1,a[4]||0,a[5]||0,a[6]||0,o)}}return new Date(t)}(e),this.init()},b.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},b.$utils=function(){return C},b.isValid=function(){return!(this.$d.toString()===h)},b.isSame=function(e,t){var n=S(e);return this.startOf(t)<=n&&n<=this.endOf(t)},b.isAfter=function(e,t){return S(e)<this.startOf(t)},b.isBefore=function(e,t){return this.endOf(t)<S(e)},b.$g=function(e,t,n){return C.u(e)?this[t]:this.set(n,e)},b.unix=function(){return Math.floor(this.valueOf()/1e3)},b.valueOf=function(){return this.$d.getTime()},b.startOf=function(e,t){var n=this,a=!!C.u(t)||t,d=C.p(e),h=function(e,t){var r=C.w(n.$u?Date.UTC(n.$y,t,e):new Date(n.$y,t,e),n);return a?r:r.endOf(s)},f=function(e,t){return C.w(n.toDate()[e].apply(n.toDate("s"),(a?[0,0,0,0]:[23,59,59,999]).slice(t)),n)},p=this.$W,g=this.$M,b=this.$D,v="set"+(this.$u?"UTC":"");switch(d){case m:return a?h(1,0):h(31,11);case c:return a?h(1,g):h(0,g+1);case l:var x=this.$locale().weekStart||0,y=(p<x?p+7:p)-x;return h(a?b-y:b+(6-y),g);case s:case u:return f(v+"Hours",0);case i:return f(v+"Minutes",1);case o:return f(v+"Seconds",2);case r:return f(v+"Milliseconds",3);default:return this.clone()}},b.endOf=function(e){return this.startOf(e,!1)},b.$set=function(e,t){var n,l=C.p(e),d="set"+(this.$u?"UTC":""),h=(n={},n[s]=d+"Date",n[u]=d+"Date",n[c]=d+"Month",n[m]=d+"FullYear",n[i]=d+"Hours",n[o]=d+"Minutes",n[r]=d+"Seconds",n[a]=d+"Milliseconds",n)[l],f=l===s?this.$D+(t-this.$W):t;if(l===c||l===m){var p=this.clone().set(u,1);p.$d[h](f),p.init(),this.$d=p.set(u,Math.min(this.$D,p.daysInMonth())).$d}else h&&this.$d[h](f);return this.init(),this},b.set=function(e,t){return this.clone().$set(e,t)},b.get=function(e){return this[C.p(e)]()},b.add=function(a,d){var u,h=this;a=Number(a);var f=C.p(d),p=function(e){var t=S(h);return C.w(t.date(t.date()+Math.round(e*a)),h)};if(f===c)return this.set(c,this.$M+a);if(f===m)return this.set(m,this.$y+a);if(f===s)return p(1);if(f===l)return p(7);var g=(u={},u[o]=t,u[i]=n,u[r]=e,u)[f]||1,b=this.$d.getTime()+a*g;return C.w(b,this)},b.subtract=function(e,t){return this.add(-1*e,t)},b.format=function(e){var t=this,n=this.$locale();if(!this.isValid())return n.invalidDate||h;var a=e||"YYYY-MM-DDTHH:mm:ssZ",r=C.z(this),o=this.$H,i=this.$m,s=this.$M,l=n.weekdays,c=n.months,d=n.meridiem,m=function(e,n,r,o){return e&&(e[n]||e(t,a))||r[n].slice(0,o)},u=function(e){return C.s(o%12||12,e,"0")},f=d||function(e,t,n){var a=e<12?"AM":"PM";return n?a.toLowerCase():a};return a.replace(p,(function(e,a){return a||function(e){switch(e){case"YY":return String(t.$y).slice(-2);case"YYYY":return C.s(t.$y,4,"0");case"M":return s+1;case"MM":return C.s(s+1,2,"0");case"MMM":return m(n.monthsShort,s,c,3);case"MMMM":return m(c,s);case"D":return t.$D;case"DD":return C.s(t.$D,2,"0");case"d":return String(t.$W);case"dd":return m(n.weekdaysMin,t.$W,l,2);case"ddd":return m(n.weekdaysShort,t.$W,l,3);case"dddd":return l[t.$W];case"H":return String(o);case"HH":return C.s(o,2,"0");case"h":return u(1);case"hh":return u(2);case"a":return f(o,i,!0);case"A":return f(o,i,!1);case"m":return String(i);case"mm":return C.s(i,2,"0");case"s":return String(t.$s);case"ss":return C.s(t.$s,2,"0");case"SSS":return C.s(t.$ms,3,"0");case"Z":return r}return null}(e)||r.replace(":","")}))},b.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},b.diff=function(a,u,h){var f,p=this,g=C.p(u),b=S(a),v=(b.utcOffset()-this.utcOffset())*t,x=this-b,y=function(){return C.m(p,b)};switch(g){case m:f=y()/12;break;case c:f=y();break;case d:f=y()/3;break;case l:f=(x-v)/6048e5;break;case s:f=(x-v)/864e5;break;case i:f=x/n;break;case o:f=x/t;break;case r:f=x/e;break;default:f=x}return h?f:C.a(f)},b.daysInMonth=function(){return this.endOf(c).$D},b.$locale=function(){return y[this.$L]},b.locale=function(e,t){if(!e)return this.$L;var n=this.clone(),a=j(e,t,!0);return a&&(n.$L=a),n},b.clone=function(){return C.w(this.$d,this)},b.toDate=function(){return new Date(this.valueOf())},b.toJSON=function(){return this.isValid()?this.toISOString():null},b.toISOString=function(){return this.$d.toISOString()},b.toString=function(){return this.$d.toUTCString()},g}(),$=O.prototype;return S.prototype=$,[["$ms",a],["$s",r],["$m",o],["$H",i],["$W",s],["$M",c],["$y",m],["$D",u]].forEach((function(e){$[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),S.extend=function(e,t){return e.$i||(e(t,O,S),e.$i=!0),S},S.locale=j,S.isDayjs=w,S.unix=function(e){return S(1e3*e)},S.en=y[x],S.Ls=y,S.p={},S}()},94742:e=>{"use strict";e.exports=JSON.parse('[{"id":"eileenHorton-1153","name":"Eileen Horton","email":"eileen_h@hotmail.com","img":"/img/avatars/thumb-1.jpg","role":"Admin","lastOnline":1573430400,"status":"pending","personalInfo":{"location":"New York, US","title":"Product Manager","birthday":"10/10/1992","phoneNumber":"+12-123-1234","facebook":"facebook.com/sample","twitter":"twitter.com/sample","instagram":"instagram.com/sample","site":"samplesite.com"},"rejectReason":""},{"id":"terranceMoreno-1322","name":"Terrance Moreno","email":"","img":"/img/avatars/thumb-2.jpg","role":"User","lastOnline":1572393600,"status":"pending","personalInfo":{"location":"New York, US","title":"Software Engineer","birthday":"03/02/1984","phoneNumber":"+12-123-1234","facebook":"facebook.com/sample","twitter":"twitter.com/sample","instagram":"instagram.com/sample","site":"samplesite.com"}},{"id":"ronVargas7653","name":"Ron Vargas","email":"ronnie_vergas@infotech.io","img":"/img/avatars/thumb-3.jpg","role":"User","lastOnline":1572393600,"status":"blocked","personalInfo":{"location":"New York, US","title":"UI/UX Designer","birthday":"07/11/1987","phoneNumber":"+12-123-1234","facebook":"facebook.com/sample","twitter":"twitter.com/sample","instagram":"instagram.com/sample","site":"samplesite.com"}},{"id":"lukeCook4721","name":"Luke Cook","email":"cookie_lukie@hotmail.com","img":"/img/avatars/thumb-4.jpg","role":"Admin","lastOnline":1579132800,"status":"active","personalInfo":{"location":"New York, US","title":"HR Executive","birthday":"07/11/1987","phoneNumber":"+12-123-1234","facebook":"facebook.com/sample","twitter":"twitter.com/sample","instagram":"instagram.com/sample","site":"samplesite.com"}},{"id":"joyceFreeman1384","name":"Joyce Freeman","email":"joyce991@infotech.io","img":"/img/avatars/thumb-5.jpg","role":"User","lastOnline":1582416000,"status":"active","personalInfo":{"location":"New York, US","title":"Frontend Developer","birthday":"17/11/1993","phoneNumber":"+12-123-1234","facebook":"facebook.com/sample","twitter":"twitter.com/sample","instagram":"instagram.com/sample","site":"samplesite.com"}},{"id":"samanthaPhillips8493","name":"Samantha Phillips","email":"samanthaphil@infotech.io","img":"/img/avatars/thumb-6.jpg","role":"User","lastOnline":1583107200,"status":"active","personalInfo":{"location":"London, UK","title":"Compliance Manager","birthday":"17/11/1993","phoneNumber":"+12-123-1234","facebook":"facebook.com/sample","twitter":"twitter.com/sample","instagram":"instagram.com/sample","site":"samplesite.com"}},{"id":"taraFletcher1263","name":"Tara Fletcher","email":"taratarara@imaze.edu.du","img":"/img/avatars/thumb-7.jpg","role":"User","lastOnline":1582761600,"status":"active","personalInfo":{"location":"London, UK","title":"Compliance Manager","birthday":"17/11/1993","phoneNumber":"+12-123-1234","facebook":"facebook.com/sample","twitter":"twitter.com/sample","instagram":"instagram.com/sample","site":"samplesite.com"}},{"id":"frederickAdams6532","name":"Frederick Adams","email":"iamfred@imaze.infotech.io","img":"/img/avatars/thumb-8.jpg","role":"User","lastOnline":1579219200,"status":"blocked","personalInfo":{"location":"London, UK","title":"Compliance Manager","birthday":"17/11/1993","phoneNumber":"+12-123-1234","facebook":"facebook.com/sample","twitter":"twitter.com/sample","instagram":"instagram.com/sample","site":"samplesite.com"}},{"id":"carolynHanson7953","name":"Carolyn Hanson","email":"carolyn_h@gmail.com","img":"/img/avatars/thumb-9.jpg","role":"User","lastOnline":1584489600,"status":"blocked","personalInfo":{"location":"Texas, US","title":"Compliance Manager","birthday":"03/06/1991","phoneNumber":"+12-123-1234","facebook":"facebook.com/sample","twitter":"twitter.com/sample","instagram":"instagram.com/sample","site":"samplesite.com"}},{"id":"brittanyHale3683","name":"Brittany Hale","email":"brittany1134@gmail.com","img":"/img/avatars/thumb-10.jpg","role":"User","lastOnline":1583452800,"status":"active","personalInfo":{"location":"Texas, US","title":"Compliance Manager","birthday":"03/06/1991","phoneNumber":"+12-123-1234","facebook":"facebook.com/sample","twitter":"twitter.com/sample","instagram":"instagram.com/sample","site":"samplesite.com"}},{"id":"lloydObrien1564","name":"Lloyd Obrien","email":"handsome-obrien@hotmail.com","img":"/img/avatars/thumb-11.jpg","role":"User","lastOnline":1584576000,"status":"active","personalInfo":{"location":"London, UK","title":"Software Engineer","birthday":"03/06/1991","phoneNumber":"+12-123-1234","facebook":"facebook.com/sample","twitter":"twitter.com/sample","instagram":"instagram.com/sample","site":"samplesite.com"}},{"id":"gabriellaMay2850","name":"Gabriella May","email":"maymaymay12@infotech.io","img":"/img/avatars/thumb-12.jpg","role":"User","lastOnline":1574208000,"status":"blocked","personalInfo":{"location":"London, UK","title":"Software Engineer","birthday":"03/06/1991","phoneNumber":"+12-123-1234","facebook":"facebook.com/sample","twitter":"twitter.com/sample","instagram":"instagram.com/sample","site":"samplesite.com"}},{"id":"leeWheeler1941","name":"Lee Wheeler","email":"","img":"/img/avatars/thumb-13.jpg","role":"User","lastOnline":1586649600,"status":"active","personalInfo":{"location":"London, UK","title":"Software Engineer","birthday":"03/06/1991","phoneNumber":"+12-123-1234","facebook":"facebook.com/sample","twitter":"twitter.com/sample","instagram":"instagram.com/sample","site":"samplesite.com"}},{"id":"gailBarnes7615","name":"Gail Barnes","email":"gailby0116@infotech.io","img":"/img/avatars/thumb-14.jpg","role":"User","lastOnline":1583020800,"status":"active","personalInfo":{"location":"London, UK","title":"Software Engineer","birthday":"03/06/1991","phoneNumber":"+12-123-1234","facebook":"facebook.com/sample","twitter":"twitter.com/sample","instagram":"instagram.com/sample","site":"samplesite.com"}},{"id":"ellaRobinson1093","name":"Ella Robinson","email":"ella_robinson@infotech.io","img":"/img/avatars/thumb-15.jpg","role":"User","lastOnline":1586217600,"status":"active","personalInfo":{"location":"London, UK","title":"Software Engineer","birthday":"03/06/1991","phoneNumber":"+12-123-1234","facebook":"facebook.com/sample","twitter":"twitter.com/sample","instagram":"instagram.com/sample","site":"samplesite.com"}}]')}}]);
//# sourceMappingURL=7125.b2afdf4c.chunk.js.map