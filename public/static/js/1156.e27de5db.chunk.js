"use strict";(self.webpackChunkSelfie_Admin=self.webpackChunkSelfie_Admin||[]).push([[1156],{77726:(e,n,o)=>{o.d(n,{A:()=>d});var a,l=o(57528),t=o(45903),r=o(77170),i=o(70579);const{useToken:c}=r.A,s=(0,t.A)("div")(a||(a=(0,l.A)(["\n    background-color:",";\n    padding: ",";\n    border:  ",";\n    border-radius: ","px;\n    padding-top: 0;\n    overflow-x: auto;\n\n    p {\n        line-height: 1.8;\n    }\n\n    code {\n        margin: 0 1px;\n        background: #f7f7f8;\n        padding: 0.2em 0.4em;\n        border-radius: 3px;\n        font-size: .9em;\n        color: #ff6b72;\n        border: 1px solid ",";\n    }\n\n    .api-title {\n        margin-top: 24px;\n        font-size: ",";\n        margin-bottom: 0.5rem;\n        line-height: 1.5;\n\n        &.when-to-use {\n            margin-top: 24px;\n        }\n\n        &.api {\n            margin-top: 24px;\n\n            &.h2 {\n                border-bottom: 1px solid ",';\n                padding-bottom: 8px;\n                margin-bottom: 24px;\n            }\n        }\n    }\n\n    ul {\n        padding-left: 0;\n        \n        >li {\n            margin-left: 20px;\n            padding-left: 4px;\n            list-style-type: circle;\n        }\n    }\n\n    > hr {\n        display: none;\n    }\n\n    img {\n        max-width: 100%;\n    }\n\n    .api-code-highligher {\n        margin-bottom: 16px;\n\n        code {\n            margin: 0;\n            background: transparent;\n            padding: 0;\n            border-radius: 0;\n            font-size: 14px;\n            border: 0;\n            color: inherit;\n        }\n    }\n\n    table {\n        min-width: 720px;\n        width: 100%;\n        margin-bottom: 2.5em;\n        margin-top: 0.8rem;\n        font-size: 13px;\n        font-family: "SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace;\n        line-height: 1.5;\n        border: 1px solid ',";\n        border-collapse: collapse;\n        border-spacing: 0;\n\n        th {\n            padding-top: 14px;\n            border-width: 0 0 2px 0;\n            color: #5c6b77;\n            font-weight: 500;\n            white-space: nowrap;\n            background: rgba(0, 0, 0, 0.02);\n        }\n\n        td:first-of-type {\n            width: 20%;\n            font-weight: 600;\n        }\n\n        th,\n        td {\n            padding: 12px;\n            border-color: ",";\n            border-width: 1px 0;\n            border-style: solid;\n        }\n\n        tbody tr {\n            transition: all 0.3s ease;\n\n            &:hover {\n                background: rgba(60, 90, 100, 0.04);\n            }\n        }\n    }\n"])),(e=>{let{token:n}=e;return n.colorBgContainer}),(e=>{let{token:n,gutterLess:o}=e;return o?"0px":"".concat(n.paddingLG,"px")}),(e=>{let{token:n,gutterLess:o}=e;return o?"0":"1px solid "+n.colorBorderSecondary}),(e=>{let{token:n}=e;return n.borderRadiusLG}),(e=>{let{token:n}=e;return n.colorBorderSecondary}),(e=>{let{token:n}=e;return"".concat(n.fontSizeHeading2,"px")}),(e=>{let{token:n}=e;return n.colorBorderSecondary}),(e=>{let{token:n}=e;return n.colorBorderSecondary}),(e=>{let{token:n}=e;return n.colorBorderSecondary})),d=e=>{let{children:n,gutterLess:o=!1}=e;const{token:a}=c();return(0,i.jsx)(s,{token:a,gutterLess:o,children:n})}},90572:(e,n,o)=>{o.d(n,{A:()=>d});var a=o(65043),l=o(80971),t=o(3707);const r={hljs:{display:"block",overflowX:"auto",padding:"0.5em",background:"#1E1E1E",color:"#DCDCDC"},"hljs-keyword":{color:"#569CD6"},"hljs-literal":{color:"#569CD6"},"hljs-symbol":{color:"#569CD6"},"hljs-name":{color:"#569CD6"},"hljs-link":{color:"#569CD6",textDecoration:"underline"},"hljs-built_in":{color:"#4EC9B0"},"hljs-type":{color:"#4EC9B0"},"hljs-number":{color:"#B8D7A3"},"hljs-class":{color:"#B8D7A3"},"hljs-string":{color:"#D69D85"},"hljs-meta-string":{color:"#D69D85"},"hljs-regexp":{color:"#9A5334"},"hljs-template-tag":{color:"#9A5334"},"hljs-subst":{color:"#DCDCDC"},"hljs-function":{color:"#DCDCDC"},"hljs-title":{color:"#DCDCDC"},"hljs-params":{color:"#DCDCDC"},"hljs-formula":{color:"#DCDCDC"},"hljs-comment":{color:"#57A64A",fontStyle:"italic"},"hljs-quote":{color:"#57A64A",fontStyle:"italic"},"hljs-doctag":{color:"#608B4E"},"hljs-meta":{color:"#9B9B9B"},"hljs-meta-keyword":{color:"#9B9B9B"},"hljs-tag":{color:"#9B9B9B"},"hljs-variable":{color:"#BD63C5"},"hljs-template-variable":{color:"#BD63C5"},"hljs-attr":{color:"#9CDCFE"},"hljs-attribute":{color:"#9CDCFE"},"hljs-builtin-name":{color:"#9CDCFE"},"hljs-section":{color:"gold"},"hljs-emphasis":{fontStyle:"italic"},"hljs-strong":{fontWeight:"bold"},"hljs-bullet":{color:"#D7BA7D"},"hljs-selector-tag":{color:"#D7BA7D"},"hljs-selector-id":{color:"#D7BA7D"},"hljs-selector-class":{color:"#D7BA7D"},"hljs-selector-attr":{color:"#D7BA7D"},"hljs-selector-pseudo":{color:"#D7BA7D"},"hljs-addition":{backgroundColor:"#144212",display:"inline-block",width:"100%"},"hljs-deletion":{backgroundColor:"#600",display:"inline-block",width:"100%"}};var i=o(2607),c=o(77726),s=o(70579);const d=e=>{const{code:n}=e,[o,d]=(0,a.useState)("");return(0,a.useEffect)((()=>{let e=!0;return fetch(n).then((e=>e.text())).then((n=>{e&&d(n)})),()=>{e=!1}}),[n]),(0,s.jsx)(c.A,{children:o&&(0,s.jsx)(l.$,{children:o,remarkPlugins:[i.A],components:{h2:e=>(0,s.jsx)("div",{className:"api-title h".concat(e.level," ").concat(e.children[0].includes("title: ")?"":e.children[0].split("").join("").replace(/\s/g,"-").toLowerCase()),children:e.children[0].includes("title: ")?/title:(.+)/.exec(e.children[0])[1]:e.children}),pre:e=>{const n=e.children[0].props,o=/language-(\w+)/.exec(n.className||"")||[];let a="";return o.length>0&&(a=o[1]),(0,s.jsx)("div",{className:"api-code-highligher",children:(0,s.jsx)(t.A,{language:a,style:r,children:n.children})})}}})})}},94551:(e,n,o)=>{o.d(n,{A:()=>Y});var a=o(65043),l=o(80971),t=o(62481);const r={'code[class*="language-"]':{color:"#a9b7c6",fontFamily:"Consolas, Monaco, 'Andale Mono', monospace",direction:"ltr",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none"},'pre[class*="language-"]':{color:"#a9b7c6",fontFamily:"Consolas, Monaco, 'Andale Mono', monospace",direction:"ltr",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",padding:"1em",margin:".5em 0",overflow:"auto",background:"#2b2b2b"},'pre[class*="language-"]::-moz-selection':{color:"inherit",background:"rgba(33,66,131,.85)"},'pre[class*="language-"] ::-moz-selection':{color:"inherit",background:"rgba(33,66,131,.85)"},'code[class*="language-"]::-moz-selection':{color:"inherit",background:"rgba(33,66,131,.85)"},'code[class*="language-"] ::-moz-selection':{color:"inherit",background:"rgba(33,66,131,.85)"},'pre[class*="language-"]::selection':{color:"inherit",background:"rgba(33,66,131,.85)"},'pre[class*="language-"] ::selection':{color:"inherit",background:"rgba(33,66,131,.85)"},'code[class*="language-"]::selection':{color:"inherit",background:"rgba(33,66,131,.85)"},'code[class*="language-"] ::selection':{color:"inherit",background:"rgba(33,66,131,.85)"},':not(pre) > code[class*="language-"]':{background:"#2b2b2b",padding:".1em",borderRadius:".3em"},comment:{color:"#808080"},prolog:{color:"#808080"},cdata:{color:"#808080"},delimiter:{color:"#cc7832"},boolean:{color:"#cc7832"},keyword:{color:"#cc7832"},selector:{color:"#cc7832"},important:{color:"#cc7832"},atrule:{color:"#cc7832"},operator:{color:"#a9b7c6"},punctuation:{color:"#a9b7c6"},"attr-name":{color:"#a9b7c6"},tag:{color:"#e8bf6a"},"tag .punctuation":{color:"#e8bf6a"},doctype:{color:"#e8bf6a"},builtin:{color:"#e8bf6a"},entity:{color:"#6897bb"},number:{color:"#6897bb"},symbol:{color:"#6897bb"},property:{color:"#9876aa"},constant:{color:"#9876aa"},variable:{color:"#9876aa"},string:{color:"#6a8759"},char:{color:"#6a8759"},"attr-value":{color:"#a5c261"},"attr-value .punctuation":{color:"#a5c261"},"attr-value .punctuation:first-child":{color:"#a9b7c6"},url:{color:"#287bde",textDecoration:"underline"},function:{color:"#ffc66d"},regex:{background:"#364135"},bold:{fontWeight:"bold"},italic:{fontStyle:"italic"},inserted:{background:"#294436"},deleted:{background:"#484a4a"},"code.language-css .token.property":{color:"#a9b7c6"},"code.language-css .token.property + .token.punctuation":{color:"#a9b7c6"},"code.language-css .token.id":{color:"#ffc66d"},"code.language-css .token.selector > .token.class":{color:"#ffc66d"},"code.language-css .token.selector > .token.attribute":{color:"#ffc66d"},"code.language-css .token.selector > .token.pseudo-class":{color:"#ffc66d"},"code.language-css .token.selector > .token.pseudo-element":{color:"#ffc66d"}};var i,c,s,d,h,g,u=o(61476),p=o(63390),b=o(61702),m=o(90723),x=o(18189),j=o(77170),f=o(96651),v=o(57528),C=o(60909);const k=e=>(0,C.AH)(i||(i=(0,v.A)(["\n\tposition: relative;\n\tdisplay: inline-block;\n\twidth: 100%;\n\tmargin: 0 0 16px;\n\tborder: 1px solid ",";\n\tborder-radius: ","px;\n\tbackground-color: ",";\n\n    .code-box-title {\n        font-size:  ","px;\n    }\n"])),e.colorBorderSecondary,e.borderRadiusLG,e.colorBgContainer,e.fontSizeHeading4),A=e=>(0,C.AH)(c||(c=(0,v.A)(["\n\tpadding: 42px 24px 50px;\n\tborder-bottom: 1px solid ","px;\n\n\tiframe {\n\t\tborder: 0px;\n\t\twidth: 100%;\n\t}\n\n\t.config-provider {\n        .site-config-provider-calendar-wrapper {\n            width: 319px;\n            border: 1px solid ",";\n            border-radius: 2px;\n        }\n        \n        .locale-components {\n            border-top: 1px solid ",";\n            padding-top: 16px;\n        }\n        \n        .example {\n            margin: 16px 0;\n        }\n        \n        .example > * {\n            margin-right: 8px;\n        }\n        \n        .change-locale {\n            margin-bottom: 16px;\n        }\n\n        .button-demo .ant-btn,\n        .button-demo .ant-btn-group {\n            margin-right: 8px;\n            margin-bottom: 12px;\n        }\n        .button-demo .ant-btn-group > .ant-btn,\n        .button-demo .ant-btn-group > span > .ant-btn {\n            margin-right: 0;\n            margin-left: 0;\n        }\n\n        .head-example {\n            display: inline-block;\n            width: 42px;\n            height: 42px;\n            vertical-align: middle;\n            background: #eee;\n            border-radius: 4px;\n        }\n\n        .ant-badge:not(.ant-badge-not-a-wrapper) {\n            margin-right: 20px;\n        }\n        .ant-badge-rtl:not(.ant-badge-not-a-wrapper) {\n            margin-right: 0;\n            margin-left: 20px;\n        }\n    }\n"])),e.colorBorderSecondary,e.colorBorderSecondary,e.colorBorderSecondary),z=(0,C.AH)(s||(s=(0,v.A)(["\n    padding: 16px;\n"]))),y=(e,n)=>(0,C.AH)(d||(d=(0,v.A)(["\n    margin-top: 16px;\n    display: ",";\n\n    code {\n        margin: 0;\n        background: transparent;\n        padding: 0;\n        border-radius: 0;\n        font-size: ",";\n        border: 0;\n        color: inherit;\n    }\n\n    pre {\n        margin-bottom: 0px;\n    }\n"])),n?"block":"none",e.fontSize),D=(e,n)=>(0,C.AH)(h||(h=(0,v.A)(["\n    cursor: pointer;\n    ","\n"])),n?"color:"+e.colorSuccess+";":""),S=e=>(0,C.AH)(g||(g=(0,v.A)(["\n    margin-top: 12px;\n    padding-top: 12px;\n    text-align: right;\n    border-top: 1px dashed ",";\n    font-size: 18px;\n    display: flex;\n    align-items: center;\n    justify-content: end;\n    gap: 10px;\n"])),e.colorBorderSecondary);var w=o(98590);const{useToken:H}=j.A,B=e=>{let{code:n,expand:o,isExpand:l}=e;const[t,r]=(0,a.useState)(!1),[i,c]=(0,a.useState)(!1),{token:s}=H();return(0,w.FD)("div",{css:S(s),children:[(0,w.Y)("span",{css:D(s,t&&i),children:(0,w.Y)(f.A,{title:t?"Copied":"Copy code",open:i,onOpenChange:e=>{c(e),e&&r(!1)},children:(0,w.Y)(u.CopyToClipboard,{text:n,onCopy:()=>{r(!0)},children:t?(0,w.Y)(p.A,{}):(0,w.Y)(b.A,{})})})}),(0,w.Y)("span",{css:D(s),onClick:o,children:(0,w.Y)(f.A,{title:l?"Hide code":"Show code",children:l?(0,w.Y)(m.A,{}):(0,w.Y)(x.A,{})})})]})},{useToken:L}=j.A,Z=e=>{let{language:n,children:o}=e;const[l,i]=(0,a.useState)(!1),{token:c}=L();return(0,w.FD)(w.FK,{children:[(0,w.Y)(B,{code:o,expand:()=>{i(!l)},isExpand:l}),(0,w.Y)("div",{css:y(c,l),children:(0,w.Y)(t.A,{language:n,style:r,children:o})})]})},{useToken:M}=j.A,Y=e=>{const{code:n,children:o}=e,[t,r]=(0,a.useState)(""),{token:i}=M();return(0,a.useEffect)((()=>{let e=!0;return fetch(n).then((e=>e.text())).then((n=>{e&&r(n)})),()=>{e=!1}}),[n]),(0,w.FD)("div",{css:k(i),children:[(0,w.Y)("section",{css:A(i),children:o}),(0,w.Y)("section",{css:z,children:t&&(0,w.Y)(l.$,{children:t,components:{h2:e=>{const n=e.children[0].includes("en-US")&&e.children[0].includes("zh-CN"),o=n?e.children[0]:"";return n?(0,w.Y)("h4",{className:"code-box-title",children:/en-US:(.+)/.exec(o)[1]}):(0,w.Y)(w.FK,{})},hr:()=>(0,w.Y)(w.FK,{}),p:e=>"string"===typeof e.children[0]&&e.children[0].match(/[\u4e00-\u9faf]/)?"":(0,w.Y)("p",{children:e.children}),pre:e=>{const n=e.children[0].props,o=/language-(\w+)/.exec(n.className||"")||[];let a="";return o.length>0&&(a=o[1]),(0,w.Y)(Z,{language:a,children:n.children})}}})})]})}},79701:(e,n,o)=>{o.r(n),o.d(n,{CascaderComponent:()=>je,default:()=>fe});var a=o(65043),l=o(94551),t=o(90572),r=o(47419),i=o(11645);const c=o.p+"static/media/index.en-US.3f667feb427f0970ee9c.md",s=o.p+"static/media/basic.b66c45deae34f570efdb.md",d=o.p+"static/media/change-on-select.4f6ade747bf79065e64e.md",h=o.p+"static/media/custom-render.b9b50e3dabd1fb739ff4.md",g=o.p+"static/media/custom-trigger.b8912b78e241bae8d92b.md",u=o.p+"static/media/default-value.3ae087a0272dd67fc45d.md",p=o.p+"static/media/disabled-option.a019c031b0a4f0828033.md",b=o.p+"static/media/fields-name.277b8bed7d8d9fc75de8.md",m=o.p+"static/media/hover.a9c59203c38e385172db.md",x=o.p+"static/media/lazy.d1b266d4d47c1dea5fd4.md",j=o.p+"static/media/search.d59ef48c0de2ba2692cb.md",f=o.p+"static/media/size.0f63bac0f79d02f907b0.md",v=o.p+"static/media/suffix.0f49f9e20ca058bcf35a.md";var C=o(49196),k=o(70579);const A=[{value:"zhejiang",label:"Zhejiang",children:[{value:"hangzhou",label:"Hangzhou",children:[{value:"xihu",label:"West Lake"}]}]},{value:"jiangsu",label:"Jiangsu",children:[{value:"nanjing",label:"Nanjing",children:[{value:"zhonghuamen",label:"Zhong Hua Men"}]}]}];function z(e){console.log(e)}class y extends a.Component{render(){return(0,k.jsx)(C.A,{options:A,onChange:z,placeholder:"Please select"})}}const D=y,S=[{value:"zhejiang",label:"Zhejiang",children:[{value:"hangzhou",label:"Hanzhou",children:[{value:"xihu",label:"West Lake"}]}]},{value:"jiangsu",label:"Jiangsu",children:[{value:"nanjing",label:"Nanjing",children:[{value:"zhonghuamen",label:"Zhong Hua Men"}]}]}];function w(e){console.log(e)}class H extends a.Component{render(){return(0,k.jsx)(C.A,{options:S,onChange:w,changeOnSelect:!0})}}const B=H,L=[{value:"zhejiang",label:"Zhejiang",children:[{value:"hangzhou",label:"Hangzhou",children:[{value:"xihu",label:"West Lake",code:752100}]}]},{value:"jiangsu",label:"Jiangsu",children:[{value:"nanjing",label:"Nanjing",children:[{value:"zhonghuamen",label:"Zhong Hua Men",code:453400}]}]}];const Z=(e,n)=>e.map(((o,a)=>{const l=n[a];return a===e.length-1?(0,k.jsxs)("span",{children:[o," (",(0,k.jsx)("a",{onClick:e=>function(e,n,o){e.stopPropagation(),console.log("clicked",n,o)}(e,o,l),children:l.code}),")"]},l.value):(0,k.jsxs)("span",{children:[o," / "]},l.value)}));class M extends a.Component{render(){return(0,k.jsx)(C.A,{options:L,defaultValue:["zhejiang","hangzhou","xihu"],displayRender:Z,style:{width:"100%"}})}}const Y=M,N=[{value:"zhejiang",label:"Zhejiang",children:[{value:"hangzhou",label:"Hangzhou"}]},{value:"jiangsu",label:"Jiangsu",children:[{value:"nanjing",label:"Nanjing"}]}];class W extends a.Component{constructor(){super(...arguments),this.state={text:"Unselect"},this.onChange=(e,n)=>{this.setState({text:n.map((e=>e.label)).join(", ")})}}render(){return(0,k.jsxs)("span",{children:[this.state.text,"\xa0",(0,k.jsx)(C.A,{options:N,onChange:this.onChange,children:(0,k.jsx)("a",{href:"/#",children:"Change city"})})]})}}const E=W,F=[{value:"zhejiang",label:"Zhejiang",children:[{value:"hangzhou",label:"Hangzhou",children:[{value:"xihu",label:"West Lake"}]}]},{value:"jiangsu",label:"Jiangsu",children:[{value:"nanjing",label:"Nanjing",children:[{value:"zhonghuamen",label:"Zhong Hua Men"}]}]}];function J(e){console.log(e)}class T extends a.Component{render(){return(0,k.jsx)(C.A,{defaultValue:["zhejiang","hangzhou","xihu"],options:F,onChange:J})}}const P=T,R=[{value:"zhejiang",label:"Zhejiang",children:[{value:"hangzhou",label:"Hangzhou",children:[{value:"xihu",label:"West Lake"}]}]},{value:"jiangsu",label:"Jiangsu",disabled:!0,children:[{value:"nanjing",label:"Nanjing",children:[{value:"zhonghuamen",label:"Zhong Hua Men"}]}]}];function O(e){console.log(e)}class U extends a.Component{render(){return(0,k.jsx)(C.A,{options:R,onChange:O})}}const G=U,K=[{code:"zhejiang",name:"Zhejiang",items:[{code:"hangzhou",name:"Hangzhou",items:[{code:"xihu",name:"West Lake"}]}]},{code:"jiangsu",name:"Jiangsu",items:[{code:"nanjing",name:"Nanjing",items:[{code:"zhonghuamen",name:"Zhong Hua Men"}]}]}];function _(e){console.log(e)}class I extends a.Component{render(){return(0,k.jsx)(C.A,{fieldNames:{label:"name",value:"code",children:"items"},options:K,onChange:_,placeholder:"Please select"})}}const V=I,X=[{value:"zhejiang",label:"Zhejiang",children:[{value:"hangzhou",label:"Hangzhou",children:[{value:"xihu",label:"West Lake"}]}]},{value:"jiangsu",label:"Jiangsu",children:[{value:"nanjing",label:"Nanjing",children:[{value:"zhonghuamen",label:"Zhong Hua Men"}]}]}];function $(e){console.log(e)}function q(e){return e[e.length-1]}class Q extends a.Component{render(){return(0,k.jsx)(C.A,{options:X,expandTrigger:"hover",displayRender:q,onChange:$})}}const ee=Q,ne=[{value:"zhejiang",label:"Zhejiang",isLeaf:!1},{value:"jiangsu",label:"Jiangsu",isLeaf:!1}];class oe extends a.Component{constructor(){super(...arguments),this.state={options:ne},this.onChange=(e,n)=>{console.log(e,n)},this.loadData=e=>{const n=e[e.length-1];n.loading=!0,setTimeout((()=>{n.loading=!1,n.children=[{label:"".concat(n.label," Dynamic 1"),value:"dynamic1"},{label:"".concat(n.label," Dynamic 2"),value:"dynamic2"}],this.setState({options:[...this.state.options]})}),1e3)}}render(){return(0,k.jsx)(C.A,{options:this.state.options,loadData:this.loadData,onChange:this.onChange,changeOnSelect:!0})}}const ae=oe,le=[{value:"zhejiang",label:"Zhejiang",children:[{value:"hangzhou",label:"Hangzhou",children:[{value:"xihu",label:"West Lake"},{value:"xiasha",label:"Xia Sha",disabled:!0}]}]},{value:"jiangsu",label:"Jiangsu",children:[{value:"nanjing",label:"Nanjing",children:[{value:"zhonghuamen",label:"Zhong Hua men"}]}]}];function te(e,n){console.log(e,n)}function re(e,n){return n.some((n=>n.label.toLowerCase().indexOf(e.toLowerCase())>-1))}class ie extends a.Component{render(){return(0,k.jsx)(C.A,{options:le,onChange:te,placeholder:"Please select",showSearch:{filter:re}})}}const ce=ie,se=[{value:"zhejiang",label:"Zhejiang",children:[{value:"hangzhou",label:"Hangzhou",children:[{value:"xihu",label:"West Lake"}]}]},{value:"jiangsu",label:"Jiangsu",children:[{value:"nanjing",label:"Nanjing",children:[{value:"zhonghuamen",label:"Zhong Hua Men"}]}]}];function de(e){console.log(e)}class he extends a.Component{render(){return(0,k.jsxs)("div",{children:[(0,k.jsx)(C.A,{size:"large",options:se,onChange:de}),(0,k.jsx)("br",{}),(0,k.jsx)("br",{}),(0,k.jsx)(C.A,{options:se,onChange:de}),(0,k.jsx)("br",{}),(0,k.jsx)("br",{}),(0,k.jsx)(C.A,{size:"small",options:se,onChange:de}),(0,k.jsx)("br",{}),(0,k.jsx)("br",{})]})}}const ge=he;var ue=o(52297);const pe=[{value:"zhejiang",label:"Zhejiang",children:[{value:"hangzhou",label:"Hangzhou",children:[{value:"xihu",label:"West Lake"}]}]},{value:"jiangsu",label:"Jiangsu",children:[{value:"nanjing",label:"Nanjing",children:[{value:"zhonghuamen",label:"Zhong Hua Men"}]}]}];function be(e){console.log(e)}class me extends a.Component{render(){return(0,k.jsxs)("div",{children:[(0,k.jsx)(C.A,{suffixIcon:(0,k.jsx)(ue.A,{}),style:{marginRight:"1rem"},options:pe,onChange:be,placeholder:"Please select"}),(0,k.jsx)(C.A,{suffixIcon:"ab",style:{marginTop:"1rem"},options:pe,onChange:be,placeholder:"Please select"})]})}}const xe=me;class je extends a.Component{render(){return(0,k.jsxs)(a.Fragment,{children:[(0,k.jsxs)(r.A,{gutter:16,type:"flex",children:[(0,k.jsxs)(i.A,{sm:24,md:24,lg:12,children:[(0,k.jsx)(l.A,{code:s,children:(0,k.jsx)(D,{})}),(0,k.jsx)(l.A,{code:g,children:(0,k.jsx)(E,{})}),(0,k.jsx)(l.A,{code:p,children:(0,k.jsx)(G,{})}),(0,k.jsx)(l.A,{code:f,children:(0,k.jsx)(ge,{})}),(0,k.jsx)(l.A,{code:j,children:(0,k.jsx)(ce,{})}),(0,k.jsx)(l.A,{code:b,children:(0,k.jsx)(V,{})})]}),(0,k.jsxs)(i.A,{sm:24,md:24,lg:12,children:[(0,k.jsx)(l.A,{code:u,children:(0,k.jsx)(P,{})}),(0,k.jsx)(l.A,{code:m,children:(0,k.jsx)(ee,{})}),(0,k.jsx)(l.A,{code:d,children:(0,k.jsx)(B,{})}),(0,k.jsx)(l.A,{code:h,children:(0,k.jsx)(Y,{})}),(0,k.jsx)(l.A,{code:x,children:(0,k.jsx)(ae,{})}),(0,k.jsx)(l.A,{code:v,children:(0,k.jsx)(xe,{})})]})]}),(0,k.jsx)(t.A,{code:c})]})}}const fe=je}}]);
//# sourceMappingURL=1156.e27de5db.chunk.js.map