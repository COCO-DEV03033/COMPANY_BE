"use strict";(self.webpackChunkSelfie_Admin=self.webpackChunkSelfie_Admin||[]).push([[8627],{38627:(e,o,n)=>{n.r(o),n.d(o,{default:()=>l});n(65043);var t=n(62481),r=n(10801),a=n(70579);const l=()=>(0,a.jsxs)("div",{children:[(0,a.jsx)("h2",{children:"Template Setting"}),(0,a.jsx)("p",{children:"Emilus comes with a variety of different theme & layout, you can try them from quick view panel in our demo and copy the config to your project."}),(0,a.jsxs)("div",{className:"mt-4",children:[(0,a.jsx)("h4",{className:"font-weight-bold",children:"Config Template basic"}),(0,a.jsxs)("p",{children:["You can change your template basic setup at ",(0,a.jsx)("code",{children:"src/configs/AppConfigs.js"})]}),(0,a.jsx)(t.A,{className:"hl-code",language:"javascript",style:r.A,children:"import { SIDE_NAV_LIGHT, NAV_TYPE_SIDE, DIR_LTR } from 'constants/ThemeConstant';\nimport { env } from './EnvironmentConfig'\n\nexport const APP_NAME = 'Emilus';\nexport const API_BASE_URL = env.API_ENDPOINT_URL\nexport const APP_PREFIX_PATH = '/app';\nexport const AUTH_PREFIX_PATH = '/auth';\nexport const REDIRECT_URL_KEY = 'redirect'\nexport const AUTHENTICATED_ENTRY = '/app/dashboards/default';\nexport const UNAUTHENTICATED_ENTRY = '/login'\n\nexport const THEME_CONFIG = {\n\tnavCollapsed: false,\n\tsideNavTheme: SIDE_NAV_LIGHT,\n\tlocale: 'en',\n\tnavType: NAV_TYPE_SIDE,\n\ttopNavColor: '#3e82f7',\n\theaderNavColor: '',\n\tmobileNav: false,\n\tcurrentTheme: 'light',\n\tdirection: DIR_LTR,\n\tblankLayout: false\n};\n"})]}),(0,a.jsxs)("div",{className:"mt-4",children:[(0,a.jsx)("h4",{className:"font-weight-bold",children:"Config Theme"}),(0,a.jsxs)("p",{children:["You can config theme colors & antd base styling at ",(0,a.jsx)("code",{children:"src/configs/ThemeConfig.js"})]}),(0,a.jsx)(t.A,{className:"hl-code",language:"javascript",style:r.A,children:"export const baseTheme = {\n    borderRadius: 10,\n    colorPrimary: THEME_COLOR.BLUE,\n    colorSuccess: THEME_COLOR.CYAN,\n    colorWarning: THEME_COLOR.GOLD,\n    colorError: THEME_COLOR.VOLCANO,\n    colorInfo: THEME_COLOR.BLUE,\n    colorText: GRAY_SCALE.GRAY,\n    colorBorder: BORDER.BASE_COLOR,\n    colorBgBody: BODY_BACKGROUND,\n    controlHeight: 40,\n    controlHeightLG: 48,\n    controlHeightSM: 36,\n    fontFamily: 'Roboto', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, 'Helvetica Neue', Arial,\n    'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',\n    'Noto Color Emoji',\n    fontSizeHeading2: 22,\n    fontSizeHeading4: 17\n}\n"})]}),(0,a.jsxs)("div",{className:"mt-4",children:[(0,a.jsx)("h4",{className:"font-weight-bold",children:"Use Dark Theme"}),(0,a.jsxs)("p",{children:["Dark theme can be set via ",(0,a.jsx)("code",{children:"src/configs/AppConfigs.js"}),"."]}),(0,a.jsx)(t.A,{className:"hl-code",language:"javascript",style:r.A,children:"\nexport const THEME_CONFIG = {\n\tnavCollapsed: false,\n\tsideNavTheme: SIDE_NAV_LIGHT,\n\tlocale: 'en',\n\tnavType: NAV_TYPE_SIDE,\n\ttopNavColor: '#3e82f7',\n\theaderNavColor: '',\n\tmobileNav: false,\n\tcurrentTheme: 'dark',\n\tdirection: DIR_LTR\n};\n"})]}),(0,a.jsxs)("div",{className:"mt-4",children:[(0,a.jsx)("h4",{className:"font-weight-bold",children:"Direction"}),(0,a.jsxs)("p",{children:["Direction can be set by value ",(0,a.jsx)("code",{children:"ltr"})," or ",(0,a.jsx)("code",{children:"rtl"})," in ",(0,a.jsx)("code",{children:"src/configs/AppConfigs.js"}),"."]}),(0,a.jsx)(t.A,{className:"hl-code",language:"javascript",style:r.A,children:"\nexport const THEME_CONFIG = {\n\tnavCollapsed: false,\n\tsideNavTheme: SIDE_NAV_LIGHT,\n\tlocale: 'en',\n\tnavType: NAV_TYPE_SIDE,\n\ttopNavColor: '#3e82f7',\n\theaderNavColor: '',\n\tmobileNav: false,\n\tcurrentTheme: 'light',\n\tdirection: DIR_RTL,\n\tblankLayout: false\n}\n"})]})]})},10801:(e,o,n)=>{n.d(o,{A:()=>t});const t={'code[class*="language-"]':{color:"#c5c8c6",textShadow:"0 1px rgba(0, 0, 0, 0.3)",fontFamily:"Inconsolata, Monaco, Consolas, 'Courier New', Courier, monospace",direction:"ltr",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none"},'pre[class*="language-"]':{color:"#c5c8c6",textShadow:"0 1px rgba(0, 0, 0, 0.3)",fontFamily:"Inconsolata, Monaco, Consolas, 'Courier New', Courier, monospace",direction:"ltr",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",padding:"1em",margin:".5em 0",overflow:"auto",borderRadius:"0.3em",background:"#1d1f21"},':not(pre) > code[class*="language-"]':{background:"#1d1f21",padding:".1em",borderRadius:".3em"},comment:{color:"#7C7C7C"},prolog:{color:"#7C7C7C"},doctype:{color:"#7C7C7C"},cdata:{color:"#7C7C7C"},punctuation:{color:"#c5c8c6"},".namespace":{Opacity:".7"},property:{color:"#96CBFE"},keyword:{color:"#96CBFE"},tag:{color:"#96CBFE"},"class-name":{color:"#FFFFB6",textDecoration:"underline"},boolean:{color:"#99CC99"},constant:{color:"#99CC99"},symbol:{color:"#f92672"},deleted:{color:"#f92672"},number:{color:"#FF73FD"},selector:{color:"#A8FF60"},"attr-name":{color:"#A8FF60"},string:{color:"#A8FF60"},char:{color:"#A8FF60"},builtin:{color:"#A8FF60"},inserted:{color:"#A8FF60"},variable:{color:"#C6C5FE"},operator:{color:"#EDEDED"},entity:{color:"#FFFFB6",cursor:"help"},url:{color:"#96CBFE"},".language-css .token.string":{color:"#87C38A"},".style .token.string":{color:"#87C38A"},atrule:{color:"#F9EE98"},"attr-value":{color:"#F9EE98"},function:{color:"#DAD085"},regex:{color:"#E9C062"},important:{color:"#fd971f",fontWeight:"bold"},bold:{fontWeight:"bold"},italic:{fontStyle:"italic"}}}}]);
//# sourceMappingURL=8627.171c3e6f.chunk.js.map