"use strict";(self.webpackChunkSelfie_Admin=self.webpackChunkSelfie_Admin||[]).push([[1547],{77726:(e,n,o)=>{o.d(n,{A:()=>d});var t,r=o(57528),l=o(45903),c=o(77170),a=o(70579);const{useToken:s}=c.A,i=(0,l.A)("div")(t||(t=(0,r.A)(["\n    background-color:",";\n    padding: ",";\n    border:  ",";\n    border-radius: ","px;\n    padding-top: 0;\n    overflow-x: auto;\n\n    p {\n        line-height: 1.8;\n    }\n\n    code {\n        margin: 0 1px;\n        background: #f7f7f8;\n        padding: 0.2em 0.4em;\n        border-radius: 3px;\n        font-size: .9em;\n        color: #ff6b72;\n        border: 1px solid ",";\n    }\n\n    .api-title {\n        margin-top: 24px;\n        font-size: ",";\n        margin-bottom: 0.5rem;\n        line-height: 1.5;\n\n        &.when-to-use {\n            margin-top: 24px;\n        }\n\n        &.api {\n            margin-top: 24px;\n\n            &.h2 {\n                border-bottom: 1px solid ",';\n                padding-bottom: 8px;\n                margin-bottom: 24px;\n            }\n        }\n    }\n\n    ul {\n        padding-left: 0;\n        \n        >li {\n            margin-left: 20px;\n            padding-left: 4px;\n            list-style-type: circle;\n        }\n    }\n\n    > hr {\n        display: none;\n    }\n\n    img {\n        max-width: 100%;\n    }\n\n    .api-code-highligher {\n        margin-bottom: 16px;\n\n        code {\n            margin: 0;\n            background: transparent;\n            padding: 0;\n            border-radius: 0;\n            font-size: 14px;\n            border: 0;\n            color: inherit;\n        }\n    }\n\n    table {\n        min-width: 720px;\n        width: 100%;\n        margin-bottom: 2.5em;\n        margin-top: 0.8rem;\n        font-size: 13px;\n        font-family: "SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace;\n        line-height: 1.5;\n        border: 1px solid ',";\n        border-collapse: collapse;\n        border-spacing: 0;\n\n        th {\n            padding-top: 14px;\n            border-width: 0 0 2px 0;\n            color: #5c6b77;\n            font-weight: 500;\n            white-space: nowrap;\n            background: rgba(0, 0, 0, 0.02);\n        }\n\n        td:first-of-type {\n            width: 20%;\n            font-weight: 600;\n        }\n\n        th,\n        td {\n            padding: 12px;\n            border-color: ",";\n            border-width: 1px 0;\n            border-style: solid;\n        }\n\n        tbody tr {\n            transition: all 0.3s ease;\n\n            &:hover {\n                background: rgba(60, 90, 100, 0.04);\n            }\n        }\n    }\n"])),(e=>{let{token:n}=e;return n.colorBgContainer}),(e=>{let{token:n,gutterLess:o}=e;return o?"0px":"".concat(n.paddingLG,"px")}),(e=>{let{token:n,gutterLess:o}=e;return o?"0":"1px solid "+n.colorBorderSecondary}),(e=>{let{token:n}=e;return n.borderRadiusLG}),(e=>{let{token:n}=e;return n.colorBorderSecondary}),(e=>{let{token:n}=e;return"".concat(n.fontSizeHeading2,"px")}),(e=>{let{token:n}=e;return n.colorBorderSecondary}),(e=>{let{token:n}=e;return n.colorBorderSecondary}),(e=>{let{token:n}=e;return n.colorBorderSecondary})),d=e=>{let{children:n,gutterLess:o=!1}=e;const{token:t}=s();return(0,a.jsx)(i,{token:t,gutterLess:o,children:n})}},90572:(e,n,o)=>{o.d(n,{A:()=>d});var t=o(65043),r=o(80971),l=o(3707);const c={hljs:{display:"block",overflowX:"auto",padding:"0.5em",background:"#1E1E1E",color:"#DCDCDC"},"hljs-keyword":{color:"#569CD6"},"hljs-literal":{color:"#569CD6"},"hljs-symbol":{color:"#569CD6"},"hljs-name":{color:"#569CD6"},"hljs-link":{color:"#569CD6",textDecoration:"underline"},"hljs-built_in":{color:"#4EC9B0"},"hljs-type":{color:"#4EC9B0"},"hljs-number":{color:"#B8D7A3"},"hljs-class":{color:"#B8D7A3"},"hljs-string":{color:"#D69D85"},"hljs-meta-string":{color:"#D69D85"},"hljs-regexp":{color:"#9A5334"},"hljs-template-tag":{color:"#9A5334"},"hljs-subst":{color:"#DCDCDC"},"hljs-function":{color:"#DCDCDC"},"hljs-title":{color:"#DCDCDC"},"hljs-params":{color:"#DCDCDC"},"hljs-formula":{color:"#DCDCDC"},"hljs-comment":{color:"#57A64A",fontStyle:"italic"},"hljs-quote":{color:"#57A64A",fontStyle:"italic"},"hljs-doctag":{color:"#608B4E"},"hljs-meta":{color:"#9B9B9B"},"hljs-meta-keyword":{color:"#9B9B9B"},"hljs-tag":{color:"#9B9B9B"},"hljs-variable":{color:"#BD63C5"},"hljs-template-variable":{color:"#BD63C5"},"hljs-attr":{color:"#9CDCFE"},"hljs-attribute":{color:"#9CDCFE"},"hljs-builtin-name":{color:"#9CDCFE"},"hljs-section":{color:"gold"},"hljs-emphasis":{fontStyle:"italic"},"hljs-strong":{fontWeight:"bold"},"hljs-bullet":{color:"#D7BA7D"},"hljs-selector-tag":{color:"#D7BA7D"},"hljs-selector-id":{color:"#D7BA7D"},"hljs-selector-class":{color:"#D7BA7D"},"hljs-selector-attr":{color:"#D7BA7D"},"hljs-selector-pseudo":{color:"#D7BA7D"},"hljs-addition":{backgroundColor:"#144212",display:"inline-block",width:"100%"},"hljs-deletion":{backgroundColor:"#600",display:"inline-block",width:"100%"}};var a=o(2607),s=o(77726),i=o(70579);const d=e=>{const{code:n}=e,[o,d]=(0,t.useState)("");return(0,t.useEffect)((()=>{let e=!0;return fetch(n).then((e=>e.text())).then((n=>{e&&d(n)})),()=>{e=!1}}),[n]),(0,i.jsx)(s.A,{children:o&&(0,i.jsx)(r.$,{children:o,remarkPlugins:[a.A],components:{h2:e=>(0,i.jsx)("div",{className:"api-title h".concat(e.level," ").concat(e.children[0].includes("title: ")?"":e.children[0].split("").join("").replace(/\s/g,"-").toLowerCase()),children:e.children[0].includes("title: ")?/title:(.+)/.exec(e.children[0])[1]:e.children}),pre:e=>{const n=e.children[0].props,o=/language-(\w+)/.exec(n.className||"")||[];let t="";return o.length>0&&(t=o[1]),(0,i.jsx)("div",{className:"api-code-highligher",children:(0,i.jsx)(l.A,{language:t,style:c,children:n.children})})}}})})}},94551:(e,n,o)=>{o.d(n,{A:()=>F});var t=o(65043),r=o(80971),l=o(62481);const c={'code[class*="language-"]':{color:"#a9b7c6",fontFamily:"Consolas, Monaco, 'Andale Mono', monospace",direction:"ltr",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none"},'pre[class*="language-"]':{color:"#a9b7c6",fontFamily:"Consolas, Monaco, 'Andale Mono', monospace",direction:"ltr",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",padding:"1em",margin:".5em 0",overflow:"auto",background:"#2b2b2b"},'pre[class*="language-"]::-moz-selection':{color:"inherit",background:"rgba(33,66,131,.85)"},'pre[class*="language-"] ::-moz-selection':{color:"inherit",background:"rgba(33,66,131,.85)"},'code[class*="language-"]::-moz-selection':{color:"inherit",background:"rgba(33,66,131,.85)"},'code[class*="language-"] ::-moz-selection':{color:"inherit",background:"rgba(33,66,131,.85)"},'pre[class*="language-"]::selection':{color:"inherit",background:"rgba(33,66,131,.85)"},'pre[class*="language-"] ::selection':{color:"inherit",background:"rgba(33,66,131,.85)"},'code[class*="language-"]::selection':{color:"inherit",background:"rgba(33,66,131,.85)"},'code[class*="language-"] ::selection':{color:"inherit",background:"rgba(33,66,131,.85)"},':not(pre) > code[class*="language-"]':{background:"#2b2b2b",padding:".1em",borderRadius:".3em"},comment:{color:"#808080"},prolog:{color:"#808080"},cdata:{color:"#808080"},delimiter:{color:"#cc7832"},boolean:{color:"#cc7832"},keyword:{color:"#cc7832"},selector:{color:"#cc7832"},important:{color:"#cc7832"},atrule:{color:"#cc7832"},operator:{color:"#a9b7c6"},punctuation:{color:"#a9b7c6"},"attr-name":{color:"#a9b7c6"},tag:{color:"#e8bf6a"},"tag .punctuation":{color:"#e8bf6a"},doctype:{color:"#e8bf6a"},builtin:{color:"#e8bf6a"},entity:{color:"#6897bb"},number:{color:"#6897bb"},symbol:{color:"#6897bb"},property:{color:"#9876aa"},constant:{color:"#9876aa"},variable:{color:"#9876aa"},string:{color:"#6a8759"},char:{color:"#6a8759"},"attr-value":{color:"#a5c261"},"attr-value .punctuation":{color:"#a5c261"},"attr-value .punctuation:first-child":{color:"#a9b7c6"},url:{color:"#287bde",textDecoration:"underline"},function:{color:"#ffc66d"},regex:{background:"#364135"},bold:{fontWeight:"bold"},italic:{fontStyle:"italic"},inserted:{background:"#294436"},deleted:{background:"#484a4a"},"code.language-css .token.property":{color:"#a9b7c6"},"code.language-css .token.property + .token.punctuation":{color:"#a9b7c6"},"code.language-css .token.id":{color:"#ffc66d"},"code.language-css .token.selector > .token.class":{color:"#ffc66d"},"code.language-css .token.selector > .token.attribute":{color:"#ffc66d"},"code.language-css .token.selector > .token.pseudo-class":{color:"#ffc66d"},"code.language-css .token.selector > .token.pseudo-element":{color:"#ffc66d"}};var a,s,i,d,h,p,g=o(61476),b=o(63390),u=o(61702),x=o(90723),m=o(18189),k=o(77170),j=o(96651),A=o(57528),f=o(60909);const C=e=>(0,f.AH)(a||(a=(0,A.A)(["\n\tposition: relative;\n\tdisplay: inline-block;\n\twidth: 100%;\n\tmargin: 0 0 16px;\n\tborder: 1px solid ",";\n\tborder-radius: ","px;\n\tbackground-color: ",";\n\n    .code-box-title {\n        font-size:  ","px;\n    }\n"])),e.colorBorderSecondary,e.borderRadiusLG,e.colorBgContainer,e.fontSizeHeading4),y=e=>(0,f.AH)(s||(s=(0,A.A)(["\n\tpadding: 42px 24px 50px;\n\tborder-bottom: 1px solid ","px;\n\n\tiframe {\n\t\tborder: 0px;\n\t\twidth: 100%;\n\t}\n\n\t.config-provider {\n        .site-config-provider-calendar-wrapper {\n            width: 319px;\n            border: 1px solid ",";\n            border-radius: 2px;\n        }\n        \n        .locale-components {\n            border-top: 1px solid ",";\n            padding-top: 16px;\n        }\n        \n        .example {\n            margin: 16px 0;\n        }\n        \n        .example > * {\n            margin-right: 8px;\n        }\n        \n        .change-locale {\n            margin-bottom: 16px;\n        }\n\n        .button-demo .ant-btn,\n        .button-demo .ant-btn-group {\n            margin-right: 8px;\n            margin-bottom: 12px;\n        }\n        .button-demo .ant-btn-group > .ant-btn,\n        .button-demo .ant-btn-group > span > .ant-btn {\n            margin-right: 0;\n            margin-left: 0;\n        }\n\n        .head-example {\n            display: inline-block;\n            width: 42px;\n            height: 42px;\n            vertical-align: middle;\n            background: #eee;\n            border-radius: 4px;\n        }\n\n        .ant-badge:not(.ant-badge-not-a-wrapper) {\n            margin-right: 20px;\n        }\n        .ant-badge-rtl:not(.ant-badge-not-a-wrapper) {\n            margin-right: 0;\n            margin-left: 20px;\n        }\n    }\n"])),e.colorBorderSecondary,e.colorBorderSecondary,e.colorBorderSecondary),D=(0,f.AH)(i||(i=(0,A.A)(["\n    padding: 16px;\n"]))),v=(e,n)=>(0,f.AH)(d||(d=(0,A.A)(["\n    margin-top: 16px;\n    display: ",";\n\n    code {\n        margin: 0;\n        background: transparent;\n        padding: 0;\n        border-radius: 0;\n        font-size: ",";\n        border: 0;\n        color: inherit;\n    }\n\n    pre {\n        margin-bottom: 0px;\n    }\n"])),n?"block":"none",e.fontSize),S=(e,n)=>(0,f.AH)(h||(h=(0,A.A)(["\n    cursor: pointer;\n    ","\n"])),n?"color:"+e.colorSuccess+";":""),B=e=>(0,f.AH)(p||(p=(0,A.A)(["\n    margin-top: 12px;\n    padding-top: 12px;\n    text-align: right;\n    border-top: 1px dashed ",";\n    font-size: 18px;\n    display: flex;\n    align-items: center;\n    justify-content: end;\n    gap: 10px;\n"])),e.colorBorderSecondary);var w=o(98590);const{useToken:z}=k.A,E=e=>{let{code:n,expand:o,isExpand:r}=e;const[l,c]=(0,t.useState)(!1),[a,s]=(0,t.useState)(!1),{token:i}=z();return(0,w.FD)("div",{css:B(i),children:[(0,w.Y)("span",{css:S(i,l&&a),children:(0,w.Y)(j.A,{title:l?"Copied":"Copy code",open:a,onOpenChange:e=>{s(e),e&&c(!1)},children:(0,w.Y)(g.CopyToClipboard,{text:n,onCopy:()=>{c(!0)},children:l?(0,w.Y)(b.A,{}):(0,w.Y)(u.A,{})})})}),(0,w.Y)("span",{css:S(i),onClick:o,children:(0,w.Y)(j.A,{title:r?"Hide code":"Show code",children:r?(0,w.Y)(x.A,{}):(0,w.Y)(m.A,{})})})]})},{useToken:Y}=k.A,H=e=>{let{language:n,children:o}=e;const[r,a]=(0,t.useState)(!1),{token:s}=Y();return(0,w.FD)(w.FK,{children:[(0,w.Y)(E,{code:o,expand:()=>{a(!r)},isExpand:r}),(0,w.Y)("div",{css:v(s,r),children:(0,w.Y)(l.A,{language:n,style:c,children:o})})]})},{useToken:L}=k.A,F=e=>{const{code:n,children:o}=e,[l,c]=(0,t.useState)(""),{token:a}=L();return(0,t.useEffect)((()=>{let e=!0;return fetch(n).then((e=>e.text())).then((n=>{e&&c(n)})),()=>{e=!1}}),[n]),(0,w.FD)("div",{css:C(a),children:[(0,w.Y)("section",{css:y(a),children:o}),(0,w.Y)("section",{css:D,children:l&&(0,w.Y)(r.$,{children:l,components:{h2:e=>{const n=e.children[0].includes("en-US")&&e.children[0].includes("zh-CN"),o=n?e.children[0]:"";return n?(0,w.Y)("h4",{className:"code-box-title",children:/en-US:(.+)/.exec(o)[1]}):(0,w.Y)(w.FK,{})},hr:()=>(0,w.Y)(w.FK,{}),p:e=>"string"===typeof e.children[0]&&e.children[0].match(/[\u4e00-\u9faf]/)?"":(0,w.Y)("p",{children:e.children}),pre:e=>{const n=e.children[0].props,o=/language-(\w+)/.exec(n.className||"")||[];let t="";return o.length>0&&(t=o[1]),(0,w.Y)(H,{language:t,children:n.children})}}})})]})}},977:(e,n,o)=>{o.r(n),o.d(n,{CheckboxComponent:()=>P,default:()=>N});var t=o(65043),r=o(94551),l=o(90572),c=o(47419),a=o(11645);const s=o.p+"static/media/index.en-US.e7b78ebe38b7a75b0cd6.md",i=o.p+"static/media/basic.0c31e078554adc0a3182.md",d=o.p+"static/media/check-all.20ded5d151547b87a523.md",h=o.p+"static/media/controller.94e82e6b77e3eb807296.md",p=o.p+"static/media/disabled.7a7431e6443f99834d1f.md",g=o.p+"static/media/group.e4f7bba95dc8bd84519e.md",b=o.p+"static/media/layout.fa9a1b8508e7856f114e.md";var u=o(32513),x=o(70579);function m(e){console.log("checked = ".concat(e.target.checked))}class k extends t.Component{render(){return(0,x.jsx)(u.A,{onChange:m,children:"Checkbox"})}}const j=k,A=u.A.Group,f=["Apple","Pear","Orange"],C=["Apple","Orange"];class y extends t.Component{constructor(){super(...arguments),this.state={checkedList:C,indeterminate:!0,checkAll:!1},this.onChange=e=>{this.setState({checkedList:e,indeterminate:!!e.length&&e.length<f.length,checkAll:e.length===f.length})},this.onCheckAllChange=e=>{this.setState({checkedList:e.target.checked?f:[],indeterminate:!1,checkAll:e.target.checked})}}render(){return(0,x.jsxs)("div",{children:[(0,x.jsx)("div",{style:{borderBottom:"1px solid #E9E9E9"},children:(0,x.jsx)(u.A,{indeterminate:this.state.indeterminate,onChange:this.onCheckAllChange,checked:this.state.checkAll,children:"Check all"})}),(0,x.jsx)("br",{}),(0,x.jsx)(A,{options:f,value:this.state.checkedList,onChange:this.onChange})]})}}const D=y;var v=o(87021);class S extends t.Component{constructor(){super(...arguments),this.state={checked:!0,disabled:!1},this.toggleChecked=()=>{this.setState({checked:!this.state.checked})},this.toggleDisable=()=>{this.setState({disabled:!this.state.disabled})},this.onChange=e=>{console.log("checked = ",e.target.checked),this.setState({checked:e.target.checked})}}render(){const e="".concat(this.state.checked?"Checked":"Unchecked","-").concat(this.state.disabled?"Disabled":"Enabled");return(0,x.jsxs)("div",{children:[(0,x.jsx)("p",{style:{marginBottom:"20px"},children:(0,x.jsx)(u.A,{checked:this.state.checked,disabled:this.state.disabled,onChange:this.onChange,children:e})}),(0,x.jsxs)("p",{children:[(0,x.jsx)(v.Ay,{type:"primary",size:"small",onClick:this.toggleChecked,children:this.state.checked?"Uncheck":"Check"}),(0,x.jsx)(v.Ay,{style:{marginLeft:"10px"},type:"primary",size:"small",onClick:this.toggleDisable,children:this.state.disabled?"Enable":"Disable"})]})]})}}const B=S;class w extends t.Component{render(){return(0,x.jsxs)("div",{children:[(0,x.jsx)(u.A,{defaultChecked:!1,disabled:!0}),(0,x.jsx)("br",{}),(0,x.jsx)(u.A,{defaultChecked:!0,disabled:!0})]})}}const z=w;function E(e){console.log("checked = ",e)}const Y=["Apple","Pear","Orange"],H=[{label:"Apple",value:"Apple"},{label:"Pear",value:"Pear"},{label:"Orange",value:"Orange"}],L=[{label:"Apple",value:"Apple"},{label:"Pear",value:"Pear"},{label:"Orange",value:"Orange",disabled:!1}];class F extends t.Component{render(){return(0,x.jsxs)("div",{children:[(0,x.jsx)(u.A.Group,{options:Y,defaultValue:["Apple"],onChange:E}),(0,x.jsx)("br",{}),(0,x.jsx)("br",{}),(0,x.jsx)(u.A.Group,{options:H,defaultValue:["Pear"],onChange:E}),(0,x.jsx)("br",{}),(0,x.jsx)("br",{}),(0,x.jsx)(u.A.Group,{options:L,disabled:!0,defaultValue:["Apple"],onChange:E})]})}}const M=F;function O(e){console.log("checked = ",e)}class T extends t.Component{render(){return(0,x.jsx)(u.A.Group,{style:{width:"100%"},onChange:O,children:(0,x.jsxs)(c.A,{children:[(0,x.jsx)(a.A,{span:8,children:(0,x.jsx)(u.A,{value:"A",children:"A"})}),(0,x.jsx)(a.A,{span:8,children:(0,x.jsx)(u.A,{value:"B",children:"B"})}),(0,x.jsx)(a.A,{span:8,children:(0,x.jsx)(u.A,{value:"C",children:"C"})}),(0,x.jsx)(a.A,{span:8,children:(0,x.jsx)(u.A,{value:"D",children:"D"})}),(0,x.jsx)(a.A,{span:8,children:(0,x.jsx)(u.A,{value:"E",children:"E"})})]})})}}const G=T;class P extends t.Component{render(){return(0,x.jsxs)(t.Fragment,{children:[(0,x.jsxs)(c.A,{gutter:16,type:"flex",children:[(0,x.jsxs)(a.A,{sm:24,md:24,lg:12,children:[(0,x.jsx)(r.A,{code:i,children:(0,x.jsx)(j,{})}),(0,x.jsx)(r.A,{code:h,children:(0,x.jsx)(B,{})}),(0,x.jsx)(r.A,{code:d,children:(0,x.jsx)(D,{})})]}),(0,x.jsxs)(a.A,{sm:24,md:24,lg:12,children:[(0,x.jsx)(r.A,{code:p,children:(0,x.jsx)(z,{})}),(0,x.jsx)(r.A,{code:g,children:(0,x.jsx)(M,{})}),(0,x.jsx)(r.A,{code:b,children:(0,x.jsx)(G,{})})]})]}),(0,x.jsx)(l.A,{code:s})]})}}const N=P}}]);
//# sourceMappingURL=1547.d36ffdff.chunk.js.map