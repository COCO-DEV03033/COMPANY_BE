"use strict";(self.webpackChunkSelfie_Admin=self.webpackChunkSelfie_Admin||[]).push([[975],{50975:(e,t,o)=>{o.r(t),o.d(t,{default:()=>s});o(65043);var n=o(62481),r=o(10801),a=o(70579);const s=()=>(0,a.jsxs)("div",{children:[(0,a.jsx)("h2",{children:"Mock Api"}),(0,a.jsxs)("p",{children:["Emilus uses ",(0,a.jsx)("a",{href:"https://miragejs.com/",target:"_blank",rel:"noreferrer",children:"miragejs"})," for mocking API calls, all the api interaction in our demo are work under miragejs."]}),(0,a.jsxs)("div",{className:"mt-4",children:[(0,a.jsx)("h4",{children:"Using mock api"}),(0,a.jsx)("p",{class:"mt-1",children:"If you have wish to use mock api, you can follow the steps below to create a fake db data & api"}),(0,a.jsxs)("ol",{children:[(0,a.jsxs)("li",{children:[(0,a.jsx)("strong",{children:"Setup"}),(0,a.jsxs)("p",{class:"mt-1",children:["Visit ",(0,a.jsx)("code",{children:"src/mock/index.js"}),", and here is the overall configuration of mirage"]}),(0,a.jsx)(n.A,{className:"hl-code",language:"javascript",style:r.A,children:"export default function mockServer({ environment = 'test' }) {\n\treturn createServer({\n\t\tenvironment,\n\t\tseeds(server) {\n\t\t\tserver.db.loadData({\n\t\t\t\t...\n\t\t\t})\n\t\t},\n\t\troutes() {\n\t\t\t...\n\t\t},\n\t})\n}"})]}),(0,a.jsxs)("li",{className:"mt-3",children:[(0,a.jsx)("strong",{children:"Add static data"}),(0,a.jsx)("p",{children:"Now we can add some data to the fake db"}),(0,a.jsx)(n.A,{className:"hl-code",language:"javascript",style:r.A,children:"return createServer({\n\t\tenvironment,\n\t\tseeds(server) {\n\t\t\tserver.db.loadData({\n\t\t\t\tusersData: [\n\t\t\t\t\t{\n\t\t\t\t\t\tid: '1',\n\t\t\t\t\t\tname: 'Carolyn Perkins',\n\t\t\t\t\t},\n\t\t\t\t\t{\n\t\t\t\t\t\tid: '2',\n\t\t\t\t\t\tname: 'Terrance Moreno',\n\t\t\t\t\t},\n\t\t\t\t\t{\n\t\t\t\t\t\tid: '3',\n\t\t\t\t\t\tname: 'Ron Vargas',\n\t\t\t\t\t},\n\t\t\t\t]\n\t\t\t})\n\t\t},\n\t\t...\n\t})\n}"})]}),(0,a.jsxs)("li",{className:"mt-3",children:[(0,a.jsx)("strong",{children:"Create mock api "}),(0,a.jsx)("p",{children:"Create a mock api under route"}),(0,a.jsx)(n.A,{className:"hl-code",language:"javascript",style:r.A,children:"return createServer({\n\t\t...\n\t\troutes() {\n\t\t\tthis.get('api/getUsers', schema => schema.db.usersData)\n\t\t},\n})"})]})]}),(0,a.jsxs)("p",{children:["And now you will get the mock data as response when you make request to ",(0,a.jsx)("code",{children:"api/getUsers"})]})]}),(0,a.jsxs)("div",{className:"mt-4",children:[(0,a.jsx)("h4",{children:"Disable mock api"}),(0,a.jsxs)("p",{children:["Mock api was enable by default in our starter-kit, you can turn it off by remove code below in ",(0,a.jsx)("code",{children:"App.js"})]}),(0,a.jsx)(n.A,{className:"hl-code",language:"javascript",style:r.A,children:"// Remove this block\nif (environment !== 'production') {\n\tmockServer({ environment }) \n}"})]})]})},10801:(e,t,o)=>{o.d(t,{A:()=>n});const n={'code[class*="language-"]':{color:"#c5c8c6",textShadow:"0 1px rgba(0, 0, 0, 0.3)",fontFamily:"Inconsolata, Monaco, Consolas, 'Courier New', Courier, monospace",direction:"ltr",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none"},'pre[class*="language-"]':{color:"#c5c8c6",textShadow:"0 1px rgba(0, 0, 0, 0.3)",fontFamily:"Inconsolata, Monaco, Consolas, 'Courier New', Courier, monospace",direction:"ltr",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",padding:"1em",margin:".5em 0",overflow:"auto",borderRadius:"0.3em",background:"#1d1f21"},':not(pre) > code[class*="language-"]':{background:"#1d1f21",padding:".1em",borderRadius:".3em"},comment:{color:"#7C7C7C"},prolog:{color:"#7C7C7C"},doctype:{color:"#7C7C7C"},cdata:{color:"#7C7C7C"},punctuation:{color:"#c5c8c6"},".namespace":{Opacity:".7"},property:{color:"#96CBFE"},keyword:{color:"#96CBFE"},tag:{color:"#96CBFE"},"class-name":{color:"#FFFFB6",textDecoration:"underline"},boolean:{color:"#99CC99"},constant:{color:"#99CC99"},symbol:{color:"#f92672"},deleted:{color:"#f92672"},number:{color:"#FF73FD"},selector:{color:"#A8FF60"},"attr-name":{color:"#A8FF60"},string:{color:"#A8FF60"},char:{color:"#A8FF60"},builtin:{color:"#A8FF60"},inserted:{color:"#A8FF60"},variable:{color:"#C6C5FE"},operator:{color:"#EDEDED"},entity:{color:"#FFFFB6",cursor:"help"},url:{color:"#96CBFE"},".language-css .token.string":{color:"#87C38A"},".style .token.string":{color:"#87C38A"},atrule:{color:"#F9EE98"},"attr-value":{color:"#F9EE98"},function:{color:"#DAD085"},regex:{color:"#E9C062"},important:{color:"#fd971f",fontWeight:"bold"},bold:{fontWeight:"bold"},italic:{fontStyle:"italic"}}}}]);
//# sourceMappingURL=975.c224af03.chunk.js.map