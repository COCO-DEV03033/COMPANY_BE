"use strict";(self.webpackChunkSelfie_Admin=self.webpackChunkSelfie_Admin||[]).push([[940],{77726:(n,e,o)=>{o.d(e,{A:()=>d});var t,r=o(57528),l=o(45903),a=o(77170),c=o(70579);const{useToken:i}=a.A,s=(0,l.A)("div")(t||(t=(0,r.A)(["\n    background-color:",";\n    padding: ",";\n    border:  ",";\n    border-radius: ","px;\n    padding-top: 0;\n    overflow-x: auto;\n\n    p {\n        line-height: 1.8;\n    }\n\n    code {\n        margin: 0 1px;\n        background: #f7f7f8;\n        padding: 0.2em 0.4em;\n        border-radius: 3px;\n        font-size: .9em;\n        color: #ff6b72;\n        border: 1px solid ",";\n    }\n\n    .api-title {\n        margin-top: 24px;\n        font-size: ",";\n        margin-bottom: 0.5rem;\n        line-height: 1.5;\n\n        &.when-to-use {\n            margin-top: 24px;\n        }\n\n        &.api {\n            margin-top: 24px;\n\n            &.h2 {\n                border-bottom: 1px solid ",';\n                padding-bottom: 8px;\n                margin-bottom: 24px;\n            }\n        }\n    }\n\n    ul {\n        padding-left: 0;\n        \n        >li {\n            margin-left: 20px;\n            padding-left: 4px;\n            list-style-type: circle;\n        }\n    }\n\n    > hr {\n        display: none;\n    }\n\n    img {\n        max-width: 100%;\n    }\n\n    .api-code-highligher {\n        margin-bottom: 16px;\n\n        code {\n            margin: 0;\n            background: transparent;\n            padding: 0;\n            border-radius: 0;\n            font-size: 14px;\n            border: 0;\n            color: inherit;\n        }\n    }\n\n    table {\n        min-width: 720px;\n        width: 100%;\n        margin-bottom: 2.5em;\n        margin-top: 0.8rem;\n        font-size: 13px;\n        font-family: "SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace;\n        line-height: 1.5;\n        border: 1px solid ',";\n        border-collapse: collapse;\n        border-spacing: 0;\n\n        th {\n            padding-top: 14px;\n            border-width: 0 0 2px 0;\n            color: #5c6b77;\n            font-weight: 500;\n            white-space: nowrap;\n            background: rgba(0, 0, 0, 0.02);\n        }\n\n        td:first-of-type {\n            width: 20%;\n            font-weight: 600;\n        }\n\n        th,\n        td {\n            padding: 12px;\n            border-color: ",";\n            border-width: 1px 0;\n            border-style: solid;\n        }\n\n        tbody tr {\n            transition: all 0.3s ease;\n\n            &:hover {\n                background: rgba(60, 90, 100, 0.04);\n            }\n        }\n    }\n"])),(n=>{let{token:e}=n;return e.colorBgContainer}),(n=>{let{token:e,gutterLess:o}=n;return o?"0px":"".concat(e.paddingLG,"px")}),(n=>{let{token:e,gutterLess:o}=n;return o?"0":"1px solid "+e.colorBorderSecondary}),(n=>{let{token:e}=n;return e.borderRadiusLG}),(n=>{let{token:e}=n;return e.colorBorderSecondary}),(n=>{let{token:e}=n;return"".concat(e.fontSizeHeading2,"px")}),(n=>{let{token:e}=n;return e.colorBorderSecondary}),(n=>{let{token:e}=n;return e.colorBorderSecondary}),(n=>{let{token:e}=n;return e.colorBorderSecondary})),d=n=>{let{children:e,gutterLess:o=!1}=n;const{token:t}=i();return(0,c.jsx)(s,{token:t,gutterLess:o,children:e})}},90572:(n,e,o)=>{o.d(e,{A:()=>d});var t=o(65043),r=o(80971),l=o(3707);const a={hljs:{display:"block",overflowX:"auto",padding:"0.5em",background:"#1E1E1E",color:"#DCDCDC"},"hljs-keyword":{color:"#569CD6"},"hljs-literal":{color:"#569CD6"},"hljs-symbol":{color:"#569CD6"},"hljs-name":{color:"#569CD6"},"hljs-link":{color:"#569CD6",textDecoration:"underline"},"hljs-built_in":{color:"#4EC9B0"},"hljs-type":{color:"#4EC9B0"},"hljs-number":{color:"#B8D7A3"},"hljs-class":{color:"#B8D7A3"},"hljs-string":{color:"#D69D85"},"hljs-meta-string":{color:"#D69D85"},"hljs-regexp":{color:"#9A5334"},"hljs-template-tag":{color:"#9A5334"},"hljs-subst":{color:"#DCDCDC"},"hljs-function":{color:"#DCDCDC"},"hljs-title":{color:"#DCDCDC"},"hljs-params":{color:"#DCDCDC"},"hljs-formula":{color:"#DCDCDC"},"hljs-comment":{color:"#57A64A",fontStyle:"italic"},"hljs-quote":{color:"#57A64A",fontStyle:"italic"},"hljs-doctag":{color:"#608B4E"},"hljs-meta":{color:"#9B9B9B"},"hljs-meta-keyword":{color:"#9B9B9B"},"hljs-tag":{color:"#9B9B9B"},"hljs-variable":{color:"#BD63C5"},"hljs-template-variable":{color:"#BD63C5"},"hljs-attr":{color:"#9CDCFE"},"hljs-attribute":{color:"#9CDCFE"},"hljs-builtin-name":{color:"#9CDCFE"},"hljs-section":{color:"gold"},"hljs-emphasis":{fontStyle:"italic"},"hljs-strong":{fontWeight:"bold"},"hljs-bullet":{color:"#D7BA7D"},"hljs-selector-tag":{color:"#D7BA7D"},"hljs-selector-id":{color:"#D7BA7D"},"hljs-selector-class":{color:"#D7BA7D"},"hljs-selector-attr":{color:"#D7BA7D"},"hljs-selector-pseudo":{color:"#D7BA7D"},"hljs-addition":{backgroundColor:"#144212",display:"inline-block",width:"100%"},"hljs-deletion":{backgroundColor:"#600",display:"inline-block",width:"100%"}};var c=o(2607),i=o(77726),s=o(70579);const d=n=>{const{code:e}=n,[o,d]=(0,t.useState)("");return(0,t.useEffect)((()=>{let n=!0;return fetch(e).then((n=>n.text())).then((e=>{n&&d(e)})),()=>{n=!1}}),[e]),(0,s.jsx)(i.A,{children:o&&(0,s.jsx)(r.$,{children:o,remarkPlugins:[c.A],components:{h2:n=>(0,s.jsx)("div",{className:"api-title h".concat(n.level," ").concat(n.children[0].includes("title: ")?"":n.children[0].split("").join("").replace(/\s/g,"-").toLowerCase()),children:n.children[0].includes("title: ")?/title:(.+)/.exec(n.children[0])[1]:n.children}),pre:n=>{const e=n.children[0].props,o=/language-(\w+)/.exec(e.className||"")||[];let t="";return o.length>0&&(t=o[1]),(0,s.jsx)("div",{className:"api-code-highligher",children:(0,s.jsx)(l.A,{language:t,style:a,children:e.children})})}}})})}},94551:(n,e,o)=>{o.d(e,{A:()=>E});var t=o(65043),r=o(80971),l=o(62481);const a={'code[class*="language-"]':{color:"#a9b7c6",fontFamily:"Consolas, Monaco, 'Andale Mono', monospace",direction:"ltr",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none"},'pre[class*="language-"]':{color:"#a9b7c6",fontFamily:"Consolas, Monaco, 'Andale Mono', monospace",direction:"ltr",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",padding:"1em",margin:".5em 0",overflow:"auto",background:"#2b2b2b"},'pre[class*="language-"]::-moz-selection':{color:"inherit",background:"rgba(33,66,131,.85)"},'pre[class*="language-"] ::-moz-selection':{color:"inherit",background:"rgba(33,66,131,.85)"},'code[class*="language-"]::-moz-selection':{color:"inherit",background:"rgba(33,66,131,.85)"},'code[class*="language-"] ::-moz-selection':{color:"inherit",background:"rgba(33,66,131,.85)"},'pre[class*="language-"]::selection':{color:"inherit",background:"rgba(33,66,131,.85)"},'pre[class*="language-"] ::selection':{color:"inherit",background:"rgba(33,66,131,.85)"},'code[class*="language-"]::selection':{color:"inherit",background:"rgba(33,66,131,.85)"},'code[class*="language-"] ::selection':{color:"inherit",background:"rgba(33,66,131,.85)"},':not(pre) > code[class*="language-"]':{background:"#2b2b2b",padding:".1em",borderRadius:".3em"},comment:{color:"#808080"},prolog:{color:"#808080"},cdata:{color:"#808080"},delimiter:{color:"#cc7832"},boolean:{color:"#cc7832"},keyword:{color:"#cc7832"},selector:{color:"#cc7832"},important:{color:"#cc7832"},atrule:{color:"#cc7832"},operator:{color:"#a9b7c6"},punctuation:{color:"#a9b7c6"},"attr-name":{color:"#a9b7c6"},tag:{color:"#e8bf6a"},"tag .punctuation":{color:"#e8bf6a"},doctype:{color:"#e8bf6a"},builtin:{color:"#e8bf6a"},entity:{color:"#6897bb"},number:{color:"#6897bb"},symbol:{color:"#6897bb"},property:{color:"#9876aa"},constant:{color:"#9876aa"},variable:{color:"#9876aa"},string:{color:"#6a8759"},char:{color:"#6a8759"},"attr-value":{color:"#a5c261"},"attr-value .punctuation":{color:"#a5c261"},"attr-value .punctuation:first-child":{color:"#a9b7c6"},url:{color:"#287bde",textDecoration:"underline"},function:{color:"#ffc66d"},regex:{background:"#364135"},bold:{fontWeight:"bold"},italic:{fontStyle:"italic"},inserted:{background:"#294436"},deleted:{background:"#484a4a"},"code.language-css .token.property":{color:"#a9b7c6"},"code.language-css .token.property + .token.punctuation":{color:"#a9b7c6"},"code.language-css .token.id":{color:"#ffc66d"},"code.language-css .token.selector > .token.class":{color:"#ffc66d"},"code.language-css .token.selector > .token.attribute":{color:"#ffc66d"},"code.language-css .token.selector > .token.pseudo-class":{color:"#ffc66d"},"code.language-css .token.selector > .token.pseudo-element":{color:"#ffc66d"}};var c,i,s,d,p,h,g=o(61476),u=o(63390),b=o(61702),m=o(90723),x=o(18189),f=o(77170),C=o(96651),k=o(57528),A=o(60909);const j=n=>(0,A.AH)(c||(c=(0,k.A)(["\n\tposition: relative;\n\tdisplay: inline-block;\n\twidth: 100%;\n\tmargin: 0 0 16px;\n\tborder: 1px solid ",";\n\tborder-radius: ","px;\n\tbackground-color: ",";\n\n    .code-box-title {\n        font-size:  ","px;\n    }\n"])),n.colorBorderSecondary,n.borderRadiusLG,n.colorBgContainer,n.fontSizeHeading4),y=n=>(0,A.AH)(i||(i=(0,k.A)(["\n\tpadding: 42px 24px 50px;\n\tborder-bottom: 1px solid ","px;\n\n\tiframe {\n\t\tborder: 0px;\n\t\twidth: 100%;\n\t}\n\n\t.config-provider {\n        .site-config-provider-calendar-wrapper {\n            width: 319px;\n            border: 1px solid ",";\n            border-radius: 2px;\n        }\n        \n        .locale-components {\n            border-top: 1px solid ",";\n            padding-top: 16px;\n        }\n        \n        .example {\n            margin: 16px 0;\n        }\n        \n        .example > * {\n            margin-right: 8px;\n        }\n        \n        .change-locale {\n            margin-bottom: 16px;\n        }\n\n        .button-demo .ant-btn,\n        .button-demo .ant-btn-group {\n            margin-right: 8px;\n            margin-bottom: 12px;\n        }\n        .button-demo .ant-btn-group > .ant-btn,\n        .button-demo .ant-btn-group > span > .ant-btn {\n            margin-right: 0;\n            margin-left: 0;\n        }\n\n        .head-example {\n            display: inline-block;\n            width: 42px;\n            height: 42px;\n            vertical-align: middle;\n            background: #eee;\n            border-radius: 4px;\n        }\n\n        .ant-badge:not(.ant-badge-not-a-wrapper) {\n            margin-right: 20px;\n        }\n        .ant-badge-rtl:not(.ant-badge-not-a-wrapper) {\n            margin-right: 0;\n            margin-left: 20px;\n        }\n    }\n"])),n.colorBorderSecondary,n.colorBorderSecondary,n.colorBorderSecondary),D=(0,A.AH)(s||(s=(0,k.A)(["\n    padding: 16px;\n"]))),S=(n,e)=>(0,A.AH)(d||(d=(0,k.A)(["\n    margin-top: 16px;\n    display: ",";\n\n    code {\n        margin: 0;\n        background: transparent;\n        padding: 0;\n        border-radius: 0;\n        font-size: ",";\n        border: 0;\n        color: inherit;\n    }\n\n    pre {\n        margin-bottom: 0px;\n    }\n"])),e?"block":"none",n.fontSize),w=(n,e)=>(0,A.AH)(p||(p=(0,k.A)(["\n    cursor: pointer;\n    ","\n"])),e?"color:"+n.colorSuccess+";":""),Y=n=>(0,A.AH)(h||(h=(0,k.A)(["\n    margin-top: 12px;\n    padding-top: 12px;\n    text-align: right;\n    border-top: 1px dashed ",";\n    font-size: 18px;\n    display: flex;\n    align-items: center;\n    justify-content: end;\n    gap: 10px;\n"])),n.colorBorderSecondary);var v=o(98590);const{useToken:B}=f.A,z=n=>{let{code:e,expand:o,isExpand:r}=n;const[l,a]=(0,t.useState)(!1),[c,i]=(0,t.useState)(!1),{token:s}=B();return(0,v.FD)("div",{css:Y(s),children:[(0,v.Y)("span",{css:w(s,l&&c),children:(0,v.Y)(C.A,{title:l?"Copied":"Copy code",open:c,onOpenChange:n=>{i(n),n&&a(!1)},children:(0,v.Y)(g.CopyToClipboard,{text:e,onCopy:()=>{a(!0)},children:l?(0,v.Y)(u.A,{}):(0,v.Y)(b.A,{})})})}),(0,v.Y)("span",{css:w(s),onClick:o,children:(0,v.Y)(C.A,{title:r?"Hide code":"Show code",children:r?(0,v.Y)(m.A,{}):(0,v.Y)(x.A,{})})})]})},{useToken:H}=f.A,F=n=>{let{language:e,children:o}=n;const[r,c]=(0,t.useState)(!1),{token:i}=H();return(0,v.FD)(v.FK,{children:[(0,v.Y)(z,{code:o,expand:()=>{c(!r)},isExpand:r}),(0,v.Y)("div",{css:S(i,r),children:(0,v.Y)(l.A,{language:e,style:a,children:o})})]})},{useToken:T}=f.A,E=n=>{const{code:e,children:o}=n,[l,a]=(0,t.useState)(""),{token:c}=T();return(0,t.useEffect)((()=>{let n=!0;return fetch(e).then((n=>n.text())).then((e=>{n&&a(e)})),()=>{n=!1}}),[e]),(0,v.FD)("div",{css:j(c),children:[(0,v.Y)("section",{css:y(c),children:o}),(0,v.Y)("section",{css:D,children:l&&(0,v.Y)(r.$,{children:l,components:{h2:n=>{const e=n.children[0].includes("en-US")&&n.children[0].includes("zh-CN"),o=e?n.children[0]:"";return e?(0,v.Y)("h4",{className:"code-box-title",children:/en-US:(.+)/.exec(o)[1]}):(0,v.Y)(v.FK,{})},hr:()=>(0,v.Y)(v.FK,{}),p:n=>"string"===typeof n.children[0]&&n.children[0].match(/[\u4e00-\u9faf]/)?"":(0,v.Y)("p",{children:n.children}),pre:n=>{const e=n.children[0].props,o=/language-(\w+)/.exec(e.className||"")||[];let t="";return o.length>0&&(t=o[1]),(0,v.Y)(F,{language:t,children:e.children})}}})})]})}},25213:(n,e,o)=>{o.r(e),o.d(e,{PaginationComponent:()=>O,default:()=>Q});var t=o(57528),r=o(65043),l=o(94551),a=o(90572);const c=o.p+"static/media/index.en-US.eaa3aa74619e8c028c93.md",i=o.p+"static/media/basic.bf8d1bd71594733f8ff8.md",s=o.p+"static/media/changer.f7d82a934d92ce00aac9.md",d=o.p+"static/media/controlled.6a020909b964c8f21f2b.md",p=o.p+"static/media/itemRender.81713afe971282dacf1d.md",h=o.p+"static/media/jump.7d4a977cfd09822f8145.md",g=o.p+"static/media/mini.5aacbb01e78047c689a9.md",u=o.p+"static/media/more.19eee05a4c76dfe570d2.md",b=o.p+"static/media/simple.8a4efc444410b5d0fb70.md",m=o.p+"static/media/total.a3c7de3c0b39c475f722.md";var x=o(55588),f=o(70579);class C extends r.Component{render(){return(0,f.jsx)(x.A,{defaultCurrent:1,total:50})}}const k=C;function A(n,e){console.log(n,e)}class j extends r.Component{render(){return(0,f.jsxs)("div",{children:[(0,f.jsx)(x.A,{showSizeChanger:!0,onShowSizeChange:A,defaultCurrent:3,total:500}),(0,f.jsx)("br",{}),(0,f.jsx)(x.A,{showSizeChanger:!0,onShowSizeChange:A,defaultCurrent:3,total:500,disabled:!0})]})}}const y=j;class D extends r.Component{constructor(){super(...arguments),this.state={current:3},this.onChange=n=>{console.log(n),this.setState({current:n})}}render(){return(0,f.jsx)(x.A,{current:this.state.current,onChange:this.onChange,total:50})}}const S=D;function w(n,e,o){return"prev"===e?(0,f.jsx)("a",{children:"Previous"}):"next"===e?(0,f.jsx)("a",{children:"Next"}):o}class Y extends r.Component{render(){return(0,f.jsx)(x.A,{total:500,itemRender:w})}}const v=Y;function B(n){console.log("Page: ",n)}class z extends r.Component{render(){return(0,f.jsxs)("div",{children:[(0,f.jsx)(x.A,{showQuickJumper:!0,defaultCurrent:2,total:500,onChange:B}),(0,f.jsx)("br",{}),(0,f.jsx)(x.A,{showQuickJumper:!0,defaultCurrent:2,total:500,onChange:B,disabled:!0})]})}}const H=z;function F(n){return"Total ".concat(n," items")}class T extends r.Component{render(){return(0,f.jsxs)("div",{children:[(0,f.jsx)(x.A,{size:"small",total:50}),(0,f.jsx)(x.A,{size:"small",total:50,showSizeChanger:!0,showQuickJumper:!0}),(0,f.jsx)(x.A,{size:"small",total:50,showTotal:F})]})}}const E=T;class M extends r.Component{render(){return(0,f.jsx)(x.A,{defaultCurrent:6,total:500})}}const L=M;class N extends r.Component{render(){return(0,f.jsx)(x.A,{simple:!0,defaultCurrent:2,total:50})}}const R=N;class K extends r.Component{render(){return(0,f.jsxs)("div",{children:[(0,f.jsx)(x.A,{total:85,showTotal:n=>"Total ".concat(n," items"),pageSize:20,defaultCurrent:1}),(0,f.jsx)("br",{}),(0,f.jsx)(x.A,{total:85,showTotal:(n,e)=>"".concat(e[0],"-").concat(e[1]," of ").concat(n," items"),pageSize:20,defaultCurrent:1})]})}}const P=K;var W,G=o(60909),J=o(98590);class O extends r.Component{render(){return(0,J.FD)(J.FK,{children:[(0,J.Y)(l.A,{code:i,children:(0,J.Y)(k,{})}),(0,J.Y)(l.A,{code:u,children:(0,J.Y)(L,{})}),(0,J.Y)(l.A,{code:s,children:(0,J.Y)(y,{})}),(0,J.Y)(l.A,{code:h,children:(0,J.Y)(H,{})}),(0,J.Y)("div",{css:(0,G.AH)(W||(W=(0,t.A)(["\n\t\t\t\t\t.ant-pagination:not(:last-child) {\n\t\t\t\t\t\tmargin-bottom: 24px;\n\t\t\t\t\t}\n\t\t\t\t"]))),children:(0,J.Y)(l.A,{code:g,children:(0,J.Y)(E,{})})}),(0,J.Y)(l.A,{code:b,children:(0,J.Y)(R,{})}),(0,J.Y)(l.A,{code:d,children:(0,J.Y)(S,{})}),(0,J.Y)(l.A,{code:m,children:(0,J.Y)(P,{})}),(0,J.Y)(l.A,{code:p,children:(0,J.Y)(v,{})}),(0,J.Y)(a.A,{code:c})]})}}const Q=O}}]);
//# sourceMappingURL=940.0a328d9c.chunk.js.map