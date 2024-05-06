"use strict";(self.webpackChunkSelfie_Admin=self.webpackChunkSelfie_Admin||[]).push([[7951],{77726:(e,t,n)=>{n.d(t,{A:()=>d});var o,r=n(57528),i=n(45903),s=n(77170),a=n(70579);const{useToken:l}=s.A,c=(0,i.A)("div")(o||(o=(0,r.A)(["\n    background-color:",";\n    padding: ",";\n    border:  ",";\n    border-radius: ","px;\n    padding-top: 0;\n    overflow-x: auto;\n\n    p {\n        line-height: 1.8;\n    }\n\n    code {\n        margin: 0 1px;\n        background: #f7f7f8;\n        padding: 0.2em 0.4em;\n        border-radius: 3px;\n        font-size: .9em;\n        color: #ff6b72;\n        border: 1px solid ",";\n    }\n\n    .api-title {\n        margin-top: 24px;\n        font-size: ",";\n        margin-bottom: 0.5rem;\n        line-height: 1.5;\n\n        &.when-to-use {\n            margin-top: 24px;\n        }\n\n        &.api {\n            margin-top: 24px;\n\n            &.h2 {\n                border-bottom: 1px solid ",';\n                padding-bottom: 8px;\n                margin-bottom: 24px;\n            }\n        }\n    }\n\n    ul {\n        padding-left: 0;\n        \n        >li {\n            margin-left: 20px;\n            padding-left: 4px;\n            list-style-type: circle;\n        }\n    }\n\n    > hr {\n        display: none;\n    }\n\n    img {\n        max-width: 100%;\n    }\n\n    .api-code-highligher {\n        margin-bottom: 16px;\n\n        code {\n            margin: 0;\n            background: transparent;\n            padding: 0;\n            border-radius: 0;\n            font-size: 14px;\n            border: 0;\n            color: inherit;\n        }\n    }\n\n    table {\n        min-width: 720px;\n        width: 100%;\n        margin-bottom: 2.5em;\n        margin-top: 0.8rem;\n        font-size: 13px;\n        font-family: "SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace;\n        line-height: 1.5;\n        border: 1px solid ',";\n        border-collapse: collapse;\n        border-spacing: 0;\n\n        th {\n            padding-top: 14px;\n            border-width: 0 0 2px 0;\n            color: #5c6b77;\n            font-weight: 500;\n            white-space: nowrap;\n            background: rgba(0, 0, 0, 0.02);\n        }\n\n        td:first-of-type {\n            width: 20%;\n            font-weight: 600;\n        }\n\n        th,\n        td {\n            padding: 12px;\n            border-color: ",";\n            border-width: 1px 0;\n            border-style: solid;\n        }\n\n        tbody tr {\n            transition: all 0.3s ease;\n\n            &:hover {\n                background: rgba(60, 90, 100, 0.04);\n            }\n        }\n    }\n"])),(e=>{let{token:t}=e;return t.colorBgContainer}),(e=>{let{token:t,gutterLess:n}=e;return n?"0px":"".concat(t.paddingLG,"px")}),(e=>{let{token:t,gutterLess:n}=e;return n?"0":"1px solid "+t.colorBorderSecondary}),(e=>{let{token:t}=e;return t.borderRadiusLG}),(e=>{let{token:t}=e;return t.colorBorderSecondary}),(e=>{let{token:t}=e;return"".concat(t.fontSizeHeading2,"px")}),(e=>{let{token:t}=e;return t.colorBorderSecondary}),(e=>{let{token:t}=e;return t.colorBorderSecondary}),(e=>{let{token:t}=e;return t.colorBorderSecondary})),d=e=>{let{children:t,gutterLess:n=!1}=e;const{token:o}=l();return(0,a.jsx)(c,{token:o,gutterLess:n,children:t})}},27951:(e,t,n)=>{n.r(t),n.d(t,{default:()=>a});n(65043);var o=n(62481),r=n(10801),i=n(77726),s=n(70579);const a=()=>(0,s.jsxs)("div",{children:[(0,s.jsx)("h2",{children:"Routing"}),(0,s.jsxs)("p",{children:["Emilus use ",(0,s.jsx)("a",{href:"https://reactrouter.com/",target:"_blank",rel:"noopener noreferrer",children:"react-router"})," as base routing system. To add a new route in the template, you can follow the steps below."]}),(0,s.jsxs)("div",{className:"mt-4",children:[(0,s.jsx)("h4",{className:"font-weight-bold",children:"Overview"}),(0,s.jsxs)("p",{class:"my-1",children:["You can find the template's router configuration in ",(0,s.jsx)("code",{children:"src/configs/RoutesConfig.js"}),", there's 2 type of route group as following."]}),(0,s.jsxs)("ul",{children:[(0,s.jsxs)("li",{children:[(0,s.jsx)("strong",{children:"publicRoutes"}),(0,s.jsx)("p",{class:"mt-1",children:"this routes group included all routes that open to all users."})]}),(0,s.jsxs)("li",{children:[(0,s.jsx)("strong",{children:"protectedRoutes"}),(0,s.jsx)("p",{class:"mt-1",children:"This routes group included all routes that required authentication."})]})]})]}),(0,s.jsxs)("div",{className:"mt-4",children:[(0,s.jsx)("h4",{className:"font-weight-bold",children:"Adding a new route"}),(0,s.jsx)("p",{class:"mt-1",children:"You can add the following code to any of the routing groups, depending on the authority you wish to. Refer below mentioned code to create a route:"}),(0,s.jsx)(o.A,{className:"hl-code",language:"jsx",style:r.A,children:"export const protectedRoutes = [\n\t{\n\t\tkey: 'a-unique-id-for-this-view'\n        path: 'my-new-view-path',\n        component: React.lazy(() => import('views/MyNewComponent')),\n        meta: {\n            blankLayout: false\n        }\n    },\t\t\t\n]\n"})]}),(0,s.jsxs)("div",{className:"mt-4",children:[(0,s.jsx)("h4",{className:"font-weight-bold",children:"Meta"}),(0,s.jsxs)("p",{className:"mt-1",children:[(0,s.jsx)("code",{children:"meta"})," field allow us to carry addtional information to the ",(0,s.jsx)("code",{children:"AppRoute"})," or the view component under this route."]}),(0,s.jsx)(o.A,{className:"hl-code",language:"jsx",style:r.A,children:"export const protectedRoutes = [\n\t{\n\t\t...\n        meta: {\n            blankLayout: false\n        }\n    },\t\t\t\n]"})]}),(0,s.jsx)(i.A,{gutterLess:!0,children:(0,s.jsxs)("table",{children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:"Property"}),(0,s.jsx)("th",{children:"Description"}),(0,s.jsx)("th",{children:"Type"})]})}),(0,s.jsx)("tbody",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"blankLayout"}),(0,s.jsx)("td",{children:"Whether to display this view without template."}),(0,s.jsx)("td",{children:"boolean"})]})})]})}),(0,s.jsx)("h2",{className:"mt-4",children:"Menu Navigation"}),(0,s.jsxs)("div",{className:"mt-4",children:[(0,s.jsx)("h4",{className:"font-weight-bold",children:"Navigating"}),(0,s.jsxs)("p",{children:["You can config your navigation bar in ",(0,s.jsx)("code",{children:"configs/NavigationConfig.js"}),". We grouped up the navigation tree as an array, add object as the code below to the array for new menu item."]}),(0,s.jsx)(o.A,{className:"hl-code",language:"javascript",style:r.A,children:"import { DashboardOutlined } from '@ant-design/icons'\n\nconst navigationConfig = [\n  {\n\t\tkey: 'new-component-key',\n\t\tpath: '/app/new-component-path',\n\t\ttitle: 'myNewComponent',\n\t\ticon: DashboardOutlined,\n\t\tbreadcrumb: false,\n\t\tsubmenu: []\n\t}\n]\n\nexport default navigationConfig;\n"}),(0,s.jsx)("h4",{className:"font-weight-bold mt-4",children:"Nested"}),(0,s.jsx)("p",{children:"Refer below code to create a nested menu item:"}),(0,s.jsx)(o.A,{className:"hl-code",language:"javascript",style:r.A,children:"import { DashboardOutlined } from '@ant-design/icons'\n\nconst navigationConfig = [\n  {\n\t\tkey: 'new-component-key',\n\t\tpath: '',\n\t\ttitle: 'myNewComponent',\n\t\ticon: DashboardOutlined,\n\t\tbreadcrumb: false,\n\t\tsubmenu: [\n\t\t\t{\n\t\t\t\tkey: 'new-component-child-key',\n\t\t\t\tpath: '',\n\t\t\t\ttitle: 'myNewComponentFirstLevel',\n\t\t\t\ticon: DashboardOutlined,\n\t\t\t\tbreadcrumb: true,\n\t\t\t\tsubmenu: [\n\t\t\t\t\t{\n\t\t\t\t\t\tkey: 'new-component-child-key-1',\n\t\t\t\t\t\tpath: '/app/new-component-path-1',\n\t\t\t\t\t\ttitle: 'myNewComponentSecondLevelOne',\n\t\t\t\t\t\ticon: DashboardOutlined,\n\t\t\t\t\t\tbreadcrumb: true,\n\t\t\t\t\t\tsubmenu: []\n\t\t\t\t\t}\n\t\t\t\t\t{\n\t\t\t\t\t\tkey: 'new-component-child-key-2',\n\t\t\t\t\t\tpath: '/app/new-component-path-2',\n\t\t\t\t\t\ttitle: 'myNewComponentSecondLevelTwo',\n\t\t\t\t\t\ticon: DashboardOutlined,\n\t\t\t\t\t\tbreadcrumb: true,\n\t\t\t\t\t\tsubmenu: []\n\t\t\t\t\t}\n\t\t\t\t]\n\t\t\t}\n\t\t]\n\t}\n]\n\nexport default navigationConfig;\n"})]}),(0,s.jsx)("br",{}),(0,s.jsx)("br",{}),(0,s.jsxs)(i.A,{gutterLess:!0,children:[(0,s.jsx)("p",{children:"The properties of config are as follows:"}),(0,s.jsxs)("table",{children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:"Property"}),(0,s.jsx)("th",{children:"Description"}),(0,s.jsx)("th",{children:"Type"})]})}),(0,s.jsxs)("tbody",{children:[(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"key"}),(0,s.jsx)("td",{children:"The unique identifier of menu item"}),(0,s.jsx)("td",{children:"string | number"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"path"}),(0,s.jsx)("td",{children:"Path to destination page"}),(0,s.jsx)("td",{children:"string"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"title"}),(0,s.jsx)("td",{children:"Menu item title, accept IntlMessage key"}),(0,s.jsx)("td",{children:"string"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"icon"}),(0,s.jsx)("td",{children:"Set icon beside menu title"}),(0,s.jsx)("td",{children:"ReactNode"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"breadcrumb"}),(0,s.jsx)("td",{children:"Displaay breadcrumb on page"}),(0,s.jsx)("td",{children:"boolean"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"submenu"}),(0,s.jsx)("td",{children:"Whether have child in this menu item, only accept properties in this table"}),(0,s.jsx)("td",{children:"array"})]})]})]})]})]})},77170:(e,t,n)=>{n.d(t,{A:()=>w});var o=n(99310),r=n(944),i=n(64580),s=n(22339);const a=e=>{const t=(null===e||void 0===e?void 0:e.algorithm)?(0,o.an)(e.algorithm):(0,o.an)(r.A),n=Object.assign(Object.assign({},i.A),null===e||void 0===e?void 0:e.token);return(0,o.lO)(n,{override:null===e||void 0===e?void 0:e.token},t,s.A)};var l=n(80167),c=n(33405),d=n(355);var h=n(52411);const p=(e,t)=>{const n=null!==t&&void 0!==t?t:(0,r.A)(e),o=n.fontSizeSM,i=n.controlHeight-4;return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},n),function(e){const{sizeUnit:t,sizeStep:n}=e,o=n-2;return{sizeXXL:t*(o+10),sizeXL:t*(o+6),sizeLG:t*(o+2),sizeMD:t*(o+2),sizeMS:t*(o+1),size:t*o,sizeSM:t*o,sizeXS:t*(o-1),sizeXXS:t*(o-1)}}(null!==t&&void 0!==t?t:e)),(0,h.A)(o)),{controlHeight:i}),(0,d.A)(Object.assign(Object.assign({},n),{controlHeight:i})))};var u=n(96983),g=n(26925),m=n(50097);const b=(e,t)=>new m.q(e).setAlpha(t).toRgbString(),x=(e,t)=>new m.q(e).lighten(t).toHexString(),j=e=>{const t=(0,u.generate)(e,{theme:"dark"});return{1:t[0],2:t[1],3:t[2],4:t[3],5:t[6],6:t[5],7:t[4],8:t[6],9:t[5],10:t[4]}},f=(e,t)=>{const n=e||"#000",o=t||"#fff";return{colorBgBase:n,colorTextBase:o,colorText:b(o,.85),colorTextSecondary:b(o,.65),colorTextTertiary:b(o,.45),colorTextQuaternary:b(o,.25),colorFill:b(o,.18),colorFillSecondary:b(o,.12),colorFillTertiary:b(o,.08),colorFillQuaternary:b(o,.04),colorBgElevated:x(n,12),colorBgContainer:x(n,8),colorBgLayout:x(n,0),colorBgSpotlight:x(n,26),colorBgBlur:b(o,.04),colorBorder:x(n,26),colorBorderSecondary:x(n,19)}},y=(e,t)=>{const n=Object.keys(i.r).map((t=>{const n=(0,u.generate)(e[t],{theme:"dark"});return new Array(10).fill(1).reduce(((e,o,r)=>(e["".concat(t,"-").concat(r+1)]=n[r],e["".concat(t).concat(r+1)]=n[r],e)),{})})).reduce(((e,t)=>e=Object.assign(Object.assign({},e),t)),{}),o=null!==t&&void 0!==t?t:(0,r.A)(e);return Object.assign(Object.assign(Object.assign({},o),n),(0,g.A)(e,{generateColorPalettes:j,generateNeutralColorPalettes:f}))};const w={defaultConfig:c.sb,defaultSeed:c.sb.token,useToken:function(){const[e,t,n]=(0,l.Ay)();return{theme:e,token:t,hashId:n}},defaultAlgorithm:r.A,darkAlgorithm:y,compactAlgorithm:p,getDesignToken:a}},10801:(e,t,n)=>{n.d(t,{A:()=>o});const o={'code[class*="language-"]':{color:"#c5c8c6",textShadow:"0 1px rgba(0, 0, 0, 0.3)",fontFamily:"Inconsolata, Monaco, Consolas, 'Courier New', Courier, monospace",direction:"ltr",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none"},'pre[class*="language-"]':{color:"#c5c8c6",textShadow:"0 1px rgba(0, 0, 0, 0.3)",fontFamily:"Inconsolata, Monaco, Consolas, 'Courier New', Courier, monospace",direction:"ltr",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",padding:"1em",margin:".5em 0",overflow:"auto",borderRadius:"0.3em",background:"#1d1f21"},':not(pre) > code[class*="language-"]':{background:"#1d1f21",padding:".1em",borderRadius:".3em"},comment:{color:"#7C7C7C"},prolog:{color:"#7C7C7C"},doctype:{color:"#7C7C7C"},cdata:{color:"#7C7C7C"},punctuation:{color:"#c5c8c6"},".namespace":{Opacity:".7"},property:{color:"#96CBFE"},keyword:{color:"#96CBFE"},tag:{color:"#96CBFE"},"class-name":{color:"#FFFFB6",textDecoration:"underline"},boolean:{color:"#99CC99"},constant:{color:"#99CC99"},symbol:{color:"#f92672"},deleted:{color:"#f92672"},number:{color:"#FF73FD"},selector:{color:"#A8FF60"},"attr-name":{color:"#A8FF60"},string:{color:"#A8FF60"},char:{color:"#A8FF60"},builtin:{color:"#A8FF60"},inserted:{color:"#A8FF60"},variable:{color:"#C6C5FE"},operator:{color:"#EDEDED"},entity:{color:"#FFFFB6",cursor:"help"},url:{color:"#96CBFE"},".language-css .token.string":{color:"#87C38A"},".style .token.string":{color:"#87C38A"},atrule:{color:"#F9EE98"},"attr-value":{color:"#F9EE98"},function:{color:"#DAD085"},regex:{color:"#E9C062"},important:{color:"#fd971f",fontWeight:"bold"},bold:{fontWeight:"bold"},italic:{fontStyle:"italic"}}}}]);
//# sourceMappingURL=7951.0475776a.chunk.js.map