"use strict";(self.webpackChunkSelfie_Admin=self.webpackChunkSelfie_Admin||[]).push([[8195],{8572:(e,t,a)=>{a.d(t,{A:()=>n});const n=a(45903).A.div((e=>{let{justifyContent:t,alignItems:a,flexDirection:n,gap:s,padding:r,margin:i}=e;const o={display:"flex",justifyContent:t,alignItems:a,gap:"number"===typeof s?"".concat(s,"px"):s};return n&&(o.flexDirection=n),r&&(o.padding=r),i&&(o.margin=i),{...o}}))},6382:(e,t,a)=>{a.d(t,{A:()=>p});a(65043);var n=a(89330),s=a(7615),r=a(25496),i=a(46784),o=a(68600),l=a(75958),m=a(22474),c=a(6051),d=a(70579);const p=e=>{const t=()=>{fetch(e.src).then((e=>e.blob())).then((e=>{const t=URL.createObjectURL(new Blob([e])),a=document.createElement("a");a.href=t,a.download="image.png",document.body.appendChild(a),a.click(),URL.revokeObjectURL(t),a.remove()}))};return(0,d.jsx)(m.A,{src:e.src,preview:{toolbarRender:(e,a)=>{let{transform:{scale:m},actions:{onFlipY:p,onFlipX:h,onRotateLeft:g,onRotateRight:u,onZoomOut:x,onZoomIn:b}}=a;return(0,d.jsxs)(c.A,{size:12,className:"toolbar-wrapper",children:[(0,d.jsx)(n.A,{onClick:t}),(0,d.jsx)(s.A,{rotate:90,onClick:p}),(0,d.jsx)(s.A,{onClick:h}),(0,d.jsx)(r.A,{onClick:g}),(0,d.jsx)(i.A,{onClick:u}),(0,d.jsx)(o.A,{disabled:1===m,onClick:x}),(0,d.jsx)(l.A,{disabled:50===m,onClick:b})]})}},width:e.width})}},99185:(e,t,a)=>{a.d(t,{A:()=>u});a(65043);a(61476);var n,s,r,i=a(77170),o=a(57528),l=a(60909);const m=e=>(0,l.AH)(n||(n=(0,o.A)(["\n\tposition: relative;\n\tdisplay: inline-block;\n\twidth: 100%;\n\tmargin: 0 0 16px;\n\tborder: 1px solid ",";\n\tborder-radius: ","px;\n\tbackground-color: ",";\n\n    .code-box-title {\n        font-size:  ","px;\n    }\n"])),e.colorBorderSecondary,e.borderRadiusLG,e.colorBgContainer,e.fontSizeHeading4),c=e=>(0,l.AH)(s||(s=(0,o.A)(["\n\tpadding: 42px 24px 50px;\n\tborder-bottom: 1px solid ","px;\n\n\tiframe {\n\t\tborder: 0px;\n\t\twidth: 100%;\n\t}\n\n\t.config-provider {\n        .site-config-provider-calendar-wrapper {\n            width: 319px;\n            border: 1px solid ",";\n            border-radius: 2px;\n        }\n        \n        .locale-components {\n            border-top: 1px solid ",";\n            padding-top: 16px;\n        }\n        \n        .example {\n            margin: 16px 0;\n        }\n        \n        .example > * {\n            margin-right: 8px;\n        }\n        \n        .change-locale {\n            margin-bottom: 16px;\n        }\n\n        .button-demo .ant-btn,\n        .button-demo .ant-btn-group {\n            margin-right: 8px;\n            margin-bottom: 12px;\n        }\n        .button-demo .ant-btn-group > .ant-btn,\n        .button-demo .ant-btn-group > span > .ant-btn {\n            margin-right: 0;\n            margin-left: 0;\n        }\n\n        .head-example {\n            display: inline-block;\n            width: 42px;\n            height: 42px;\n            vertical-align: middle;\n            background: #eee;\n            border-radius: 4px;\n        }\n\n        .ant-badge:not(.ant-badge-not-a-wrapper) {\n            margin-right: 20px;\n        }\n        .ant-badge-rtl:not(.ant-badge-not-a-wrapper) {\n            margin-right: 0;\n            margin-left: 20px;\n        }\n    }\n"])),e.colorBorderSecondary,e.colorBorderSecondary,e.colorBorderSecondary),{useToken:d}=((0,l.AH)(r||(r=(0,o.A)(["\n    padding: 16px;\n"]))),i.A),{useToken:p}=i.A;var h=a(98590);const{useToken:g}=i.A,u=e=>{const{code:t,children:a}=e,{token:n}=g();return(0,h.Y)("div",{css:m(n),children:(0,h.Y)("section",{css:c(n),children:a})})}},67706:(e,t,a)=>{a.d(t,{A:()=>y});var n,s=a(57528),r=a(65043),i=a(18205),o=a(48677),l=a(89073),m=a(22030),c=a(1919),d=a(45903),p=a(60909),h=a(79951),g=a(97508),u=a(98590);const{useBreakpoint:x}=i.Ay,b=d.A.div((e=>{let{hasPageHeader:t,gutter:a}=e;const n={minHeight:"calc(100vh - ".concat(h.nE.CONTENT_HEIGHT_OFFSET,"px - ").concat(h.nE.LAYOUT_CONTENT_GUTTER,"px * 2  - 2px);"),width:"100%",padding:a?24:0};return t&&(n.minHeight="75vh"),n})),f=e=>{const{sideContent:t,sideContentWidth:a=250,border:n}=e,s=(0,g.d4)((e=>e.theme.currentTheme));return(0,u.Y)("div",{style:{width:"".concat(a,"px"),borderInlineEnd:"1px solid ".concat("dark"===s?h.ZI.BORDER_BASE_COLOR:h.XE.BASE_COLOR)},children:t})},j=e=>{const{sideContent:t,visible:a,onSideContentClose:n}=e;return(0,u.Y)(o.A,{width:320,placement:"left",closable:!1,onClose:n,open:a,bodyStyle:{paddingLeft:0,paddingRight:0},children:(0,u.Y)("div",{className:"h-100",children:t})})},y=e=>{const{mainContent:t,pageHeader:a,sideContentGutter:i=!0}=e,o=!m.A.getBreakPoint(x()).includes("lg"),[d,h]=(0,r.useState)(!1);return(0,u.FD)(l.A,{className:"mb-0",css:(0,p.AH)(n||(n=(0,s.A)(["\n\t\t\t>.ant-card-body {\n\t\t\t\tdisplay: flex;\n\t\t\t\tpadding: 0px;\n\t\t\t}\n\t\t"]))),children:[o?(0,u.Y)(j,{visible:d,onSideContentClose:e=>{h(!1)},...e}):(0,u.Y)(f,{...e}),(0,u.FD)(b,{hasPageHeader:a,gutter:i,children:[o?(0,u.Y)("div",{className:"font-size-lg mb-3 ".concat(i?"":"pt-3 px-3"),children:(0,u.Y)(c.A,{onClick:()=>{h(!0)}})}):null,t]})]})}},22030:(e,t,a)=>{a.d(t,{A:()=>n});const n=class{static getNameInitial(e){let t=e.match(/\b\w/g)||[];return((t.shift()||"")+(t.pop()||"")).toUpperCase()}static getRouteInfo(e,t){if(e.path===t)return e;let a;for(let n in e)if(e.hasOwnProperty(n)&&"object"===typeof e[n]&&(a=this.getRouteInfo(e[n],t),a))return a;return a}static getColorContrast(e){if(!e)return"dark";const t=parseInt(s(e).substring(0,2),16);const a=function(e){return parseInt(s(e).substring(2,4),16)}(e),n=function(e){return parseInt(s(e).substring(4,6),16)}(e);function s(e){return"#"===e.charAt(0)?e.substring(1,7):e}return(299*t+587*a+114*n)/1e3>130?"dark":"light"}static shadeColor(e,t){let a=parseInt(e.substring(1,3),16),n=parseInt(e.substring(3,5),16),s=parseInt(e.substring(5,7),16);a=parseInt(a*(100+t)/100),n=parseInt(n*(100+t)/100),s=parseInt(s*(100+t)/100),a=a<255?a:255,n=n<255?n:255,s=s<255?s:255;const r=1===a.toString(16).length?"0".concat(a.toString(16)):a.toString(16),i=1===n.toString(16).length?"0".concat(n.toString(16)):n.toString(16),o=1===s.toString(16).length?"0".concat(s.toString(16)):s.toString(16);return"#".concat(r).concat(i).concat(o)}static rgbaToHex(e){const t=e=>e.replace(/^\s+|\s+$/gm,""),a=e.substring(e.indexOf("(")).split(","),n=parseInt(t(a[0].substring(1)),10),s=parseInt(t(a[1]),10),r=parseInt(t(a[2]),10),i=parseFloat(t(a[3].substring(0,a[3].length-1))).toFixed(2),o=[n.toString(16),s.toString(16),r.toString(16),Math.round(255*i).toString(16).substring(0,2)];return o.forEach((function(e,t){1===e.length&&(o[t]="0"+e)})),"#".concat(o.join(""))}static getSignNum(e,t,a){return e>0?t:e<0?a:null}static antdTableSorter(e,t,a){return"number"===typeof e[a]&&"number"===typeof t[a]?e[a]-t[a]:"string"===typeof e[a]&&"string"===typeof t[a]?(e=e[a].toLowerCase())>(t=t[a].toLowerCase())?-1:t>e?1:0:void 0}static filterArray(e,t,a){let n=e;return e&&(n=e.filter((e=>e[t]===a))),n}static deleteArrayRow(e,t,a){let n=e;return e&&(n=e.filter((e=>e[t]!==a))),n}static wildCardSearch(e,t){return e=e.filter((e=>(e=>{for(let a in e)if(null!=e[a]&&-1!==e[a].toString().toUpperCase().indexOf(t.toString().toUpperCase()))return!0})(e)))}static getBreakPoint(e){let t=[];for(const a in e)if(e.hasOwnProperty(a)){e[a]&&t.push(a)}return t}}},32905:(e,t,a)=>{a.d(t,{AB:()=>s,QN:()=>r,b6:()=>n,eV:()=>i,gT:()=>o,wC:()=>l});const n={series:[{name:"Session Duration",data:[45,52,38,24,33,26,21,20,6,8,15,10]},{name:"Page Views",data:[35,41,62,42,13,18,29,37,36,51,32,35]}],categories:["01 Jan","02 Jan","03 Jan","04 Jan","05 Jan","06 Jan","07 Jan","08 Jan","09 Jan","10 Jan","11 Jan","12 Jan"]},s=[{title:"Total Users",value:"14,256",status:11.4,subtitle:"Compare to last year (2023)"},{title:"Total Selfies",value:"643,982",status:8.2,subtitle:"Compare to last year (2023)"},{title:"Total Referrals",value:"18,310",status:-.7,subtitle:"Compare to last year (2023)"},{title:"Total Revenue",value:"\u20ac54,236",status:.3,subtitle:"Compare to last year (2023)"}],r=[{title:"Pending Payments",value:"15 (\u20ac34.5)",status:6,subtitle:"Compare to last day"},{title:"Pending Selfies",value:"156",status:-97,subtitle:"Compare to last day"},{title:"Pending Identify",value:"135",status:56,subtitle:"Compare to last day"}],i=[{name:"Members",data:[25,15,41,25,44,12,36,19,54]}],o=[{img:"/img/avatars/thumb-2.jpg",title:"Software Engineer",name:"Terrance Moreno"},{img:"/img/avatars/thumb-3.jpg",title:"UI/UX Designer",name:"Ron Vargas"},{img:"/img/avatars/thumb-4.jpg",title:"HR Executive",name:"Luke Cook"},{img:"/img/avatars/thumb-5.jpg",title:"Frontend Developer",name:"Joyce Freeman"},{img:"/img/avatars/thumb-6.jpg",title:"Compliance Manager",name:"Samantha Phillips"}],l=[{id:"#5331",name:"Clayton Bates",userId:"eileenHorton-1153",date:"8 May 2020",amount:"$137.00",status:"Approved",avatarColor:"#04d182"},{id:"#5332",name:"Gabriel Frazier",userId:"eileenHorton-1153",date:"6 May 2020",amount:"$322.00",status:"Approved",avatarColor:"#fa8c16"},{id:"#5333",name:"Eileen Horton",userId:"eileenHorton-1153",date:"1 May 2020",amount:"$543.00",status:"Pending",avatarColor:"#1890ff"},{id:"#5334",name:"Stacey Ward",userId:"eileenHorton-1153",date:"28 April 2020",amount:"$876.00",status:"Rejected",avatarColor:"#ffc542"},{id:"#5335",name:"Troy Alexander",userId:"eileenHorton-1153",date:"28 April 2020",amount:"$241.00",status:"Approved",avatarColor:"#ff6b72"}]},58195:(e,t,a)=>{a.r(t),a.d(t,{default:()=>je});var n=a(65043),s=a(40854),r=a.n(s),i=a(35475),o=a(73216),l=a(53722),m=a(34332),c=a(94471),d=a(61831),p=a(39760),h=(a(94742),a(10881)),g=a(67706),u=a(2761),x=a(34496),b=a(47419),f=a(11645),j=a(85578),y=a(79951),A=a(8572),v=a(70579);class C extends n.Component{constructor(e){super(e),this.avatarEndpoint="https://run.mocky.io/v3/af3b8fc9-ebac-488d-b4fd-0c3942496866",this.state={avatarUrl:"/img/avatars/artem.png",name:"Artem Panchina",email:"skyangel0421@gmail.com",userName:"Artem",dateOfBirth:null,phoneNumber:"+1 (1532) 135 1235",website:"https://brainwavehq.org/",address:"30 N Gould St Ste R, Sheridan, WY 82801, US",city:"WY",postcode:"82801"}}getBase64(e,t){const a=new FileReader;a.addEventListener("load",(()=>t(a.result))),a.readAsDataURL(e)}getDateFormat(e){if(void 0!==e){var t=e.split("/");return t[2]+"-"+t[1]+"-"+t[0]}return"1990-01-01"}render(){const{firstname:e,lastname:t,email:a,userName:n,address:s,postcode:r,img:i,birthday:o,country:m,phoneNumber:c,website:d}=this.props.user;return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(A.A,{alignItems:"center",mobileFlex:!1,className:"text-center text-md-left",children:(0,v.jsx)(u.A,{size:90,src:i,icon:(0,v.jsx)(l.A,{})})}),(0,v.jsx)("div",{className:"mt-4",children:(0,v.jsx)(x.A,{name:"basicInformation",layout:"vertical",initialValues:{name:e+" "+t,email:a,username:n,dateOfBirth:this.getDateFormat(o),phoneNumber:c,address:s,city:m,postcode:r},children:(0,v.jsx)(b.A,{children:(0,v.jsx)(f.A,{xs:24,sm:24,md:24,lg:16,children:(0,v.jsxs)(b.A,{gutter:y.x7,children:[(0,v.jsx)(f.A,{xs:24,sm:24,md:12,children:(0,v.jsx)(x.A.Item,{label:"Name",name:"name",rules:[{required:!0,message:"Please input your name!"}],children:(0,v.jsx)(j.A,{readOnly:!0})})}),(0,v.jsx)(f.A,{xs:24,sm:24,md:12,children:(0,v.jsx)(x.A.Item,{label:"Username",name:"username",rules:[{required:!0,message:"Please input your username!"}],children:(0,v.jsx)(j.A,{readOnly:!0})})}),(0,v.jsx)(f.A,{xs:24,sm:24,md:12,children:(0,v.jsx)(x.A.Item,{label:"Email",name:"email",rules:[{required:!0,type:"email",message:"Please enter a valid email!"}],children:(0,v.jsx)(j.A,{readOnly:!0})})}),(0,v.jsx)(f.A,{xs:24,sm:24,md:12,children:(0,v.jsx)(x.A.Item,{label:"Date of Birth",name:"dateOfBirth",children:(0,v.jsx)(j.A,{className:"w-100",readOnly:!0})})}),(0,v.jsx)(f.A,{xs:24,sm:24,md:12,children:(0,v.jsx)(x.A.Item,{label:"Phone Number",name:"phoneNumber",children:(0,v.jsx)(j.A,{readOnly:!0})})}),(0,v.jsx)(f.A,{xs:24,sm:24,md:12,children:(0,v.jsx)(x.A.Item,{label:"Website",name:"website",children:(0,v.jsx)(j.A,{readOnly:!0})})}),(0,v.jsx)(f.A,{xs:24,sm:24,md:24,children:(0,v.jsx)(x.A.Item,{label:"Address",name:"address",children:(0,v.jsx)(j.A,{readOnly:!0})})}),(0,v.jsx)(f.A,{xs:24,sm:24,md:12,children:(0,v.jsx)(x.A.Item,{label:"City",name:"city",children:(0,v.jsx)(j.A,{readOnly:!0})})}),(0,v.jsx)(f.A,{xs:24,sm:24,md:12,children:(0,v.jsx)(x.A.Item,{label:"Post code",name:"postcode",children:(0,v.jsx)(j.A,{readOnly:!0})})})]})})})})})]})}}const k=C;var w=a(30703),I=a(63942),N=a(96651),S=a(81210),T=a(62878);const{Column:O}=w.A,U=e=>{let{visible:t,onCreate:a,onCancel:n}=e;const[s]=x.A.useForm();return(0,v.jsx)(I.A,{title:"Add new card",visible:t,okText:"Save card",onCancel:n,onOk:()=>{s.validateFields().then((e=>{s.resetFields(),a(e)})).catch((e=>{console.log("Validate Failed:",e)}))},children:(0,v.jsxs)(x.A,{form:s,name:"addCardForm",layout:"vertical",children:[(0,v.jsx)(x.A.Item,{label:"Card holder name",name:"cardHolderName",rules:[{require:!0,message:"Please enter card holder name!"}],children:(0,v.jsx)(j.A,{suffix:(0,v.jsx)(m.A,{}),placeholder:"Card holder name"})}),(0,v.jsx)(x.A.Item,{label:"Card number",name:"cardNumber",hasFeedback:!0,rules:[{pattern:/(\d{4}[-. ]?){4}|\d{4}[-. ]?\d{6}[-. ]?\d{5}/g,message:"Please enter a valid credit card number!"}],children:(0,v.jsx)(j.A,{suffix:(0,v.jsx)(m.A,{}),placeholder:"0000 0000 0000 00"})}),(0,v.jsxs)(b.A,{gutter:y.x7,children:[(0,v.jsx)(f.A,{xs:24,sm:24,md:12,children:(0,v.jsx)(x.A.Item,{label:"Expiry date",name:"exp",rules:[{pattern:/^(0[1-9]|1[0-2])[- /.]\d{2}/,message:"Please enter a valid date format!"}],children:(0,v.jsx)(j.A,{suffix:(0,v.jsx)(S.A,{}),placeholder:"MM/YY"})})}),(0,v.jsx)(f.A,{xs:24,sm:24,md:12,children:(0,v.jsx)(x.A.Item,{label:"CVV code",name:"cvv",rules:[{pattern:/^[0-9]{3,4}$/,message:"Please enter a CVV code format!"}],children:(0,v.jsx)(j.A,{suffix:(0,v.jsx)(N.A,{title:"The last three digits printed on the back of the card",children:(0,v.jsx)(T.A,{className:"cursor-pointer"})}),placeholder:"000"})})})]})]})})};class F extends n.Component{constructor(e){super(e),this.onSelectChange=(e,t)=>{this.setState({selectedRowKeys:e})},this.showModal=()=>{this.setState({modalVisible:!0})},this.closeModal=()=>{this.setState({modalVisible:!1})},this.addCard=e=>{const{cardNumber:t,exp:a}=e,n=[{img:"/img/others/img-8.png",type:"Visa"},{img:"/img/others/cepa.png",type:"Master"}],s=n[Math.floor(Math.random()*n.length)],r={key:"card-".concat(this.state.creditCards.length+1),cardType:s.type,cardTypeImg:s.img,cardNumber:t.replace(/\b(?:\d{4}[ -]?){3}(?=\d{4}\b)/gm,"\u2022\u2022\u2022\u2022 \u2022\u2022\u2022\u2022 \u2022\u2022\u2022\u2022 "),exp:a};this.setState({modalVisible:!1,creditCards:[...this.state.creditCards,r]})},this.state={selectedRowKeys:["card-1"],creditCards:[{key:"card-1",cardType:"Visa",cardTypeImg:"/img/others/img-8.png",cardNumber:"\u2022\u2022\u2022\u2022 \u2022\u2022\u2022\u2022 \u2022\u2022\u2022\u2022 7260",exp:"06/22"},{key:"card-2",cardType:"Master",cardTypeImg:"/img/others/cepa.png",cardNumber:"\u2022\u2022\u2022\u2022 \u2022\u2022\u2022\u2022 \u2022\u2022\u2022\u2022 1272",exp:"04/21"}],modalVisible:!1,newCreditCardInfo:{cardHolderName:"",cardNumber:"",exp:"06/22"}}}componentDidMount(){const{paymentDetail:e}=this.props.user;if(e){const t=Object.entries(e).map((e=>{let[t,a]=e;return{key:"card-".concat(t),cardType:t,cardTypeImg:"/img/others/".concat(t,".png"),cardNumber:"\u2022\u2022\u2022\u2022 \u2022\u2022\u2022\u2022 \u2022\u2022\u2022\u2022 ".concat(a.slice(-4)),exp:"06/22"}}));this.setState({creditCards:t})}else this.setState({creditCards:[]})}render(){const{selectedRowKeys:e,creditCards:t,modalVisible:a}=this.state,n={selectedRowKeys:e,type:"radio",onChange:this.onSelectChange},s={emptyText:(0,v.jsxs)("div",{className:"text-center my-4",children:[(0,v.jsx)("img",{src:"/img/others/img-7.png",alt:"Add credit card",style:{maxWidth:"90px"}}),(0,v.jsx)("h3",{className:"mt-3 font-weight-light",children:"Please add a credit card!"})]})};return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)("h2",{className:"mb-4",children:"Billing"}),(0,v.jsxs)(w.A,{locale:s,dataSource:t,rowSelection:n,pagination:!1,children:[(0,v.jsx)(O,{title:"Card type",render:(e,t)=>(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)("img",{src:t.cardTypeImg,alt:t.cardType,style:{height:"25px",width:"auto"}}),(0,v.jsx)("span",{className:"ml-2",children:t.cardType})]})},"cardType"),(0,v.jsx)(O,{title:"Card Number",dataIndex:"cardNumber"},"cardNumber"),(0,v.jsx)(O,{title:"Expires on",dataIndex:"exp"},"exp")]}),(0,v.jsx)(U,{visible:a,onCreate:this.addCard,onCancel:this.closeModal})]})}}const R=F;var P=a(99185),M=a(15546),E=a(48943),H=a(54522),L=a(76399),B=a(6382);const{Header:D,Footer:Y,Sider:V,Content:z}=M.A,{Text:J}=E.A;class _ extends n.Component{constructor(e){super(e),this.state={lists:Array(16).fill("pending"),viewStyle:1,isModalOpen:!1,selectedList:0},this.handleStatusChange=(e,t)=>{const a=[...this.state.lists];a[e]=t,this.setState({lists:a}),console.log(this.state.lists)}}render(){return(0,v.jsx)(v.Fragment,{children:(0,v.jsx)(P.A,{children:(0,v.jsx)(H.A,{itemLayout:"horizontal",dataSource:this.state.lists,renderItem:(e,t)=>(0,v.jsxs)(H.A.Item,{children:[(0,v.jsx)(B.A,{alt:"example",src:"https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp",width:"120px"}),(0,v.jsx)(H.A.Item.Meta,{avatar:(0,v.jsx)(u.A,{src:this.props.user.img}),title:(0,v.jsx)("a",{href:"javascript:void(0);",children:"Face, half body"}),description:this.props.user.name,style:{marginBottom:"10px",marginLeft:"20px"}}),(0,v.jsx)(L.A,{color:"active"===e?"cyan":"rejected"===e?"red":"orange",children:e})]})})})})}}const K=_;var q=a(86178),W=a.n(q),G=a(30326),$=a(87021),X=a(89073),Z=(a(32905),a(90617)),Q=a(94834),ee=a(12959),te=a(84235),ae=a(22030);const{Header:ne,Footer:se,Sider:re,Content:ie}=M.A,{Text:oe}=E.A,le=()=>{console.log("pay"),alert("Paid!")},me=[{key:"Refresh",label:(0,v.jsxs)(A.A,{alignItems:"center",gap:y.fN[2],children:[(0,v.jsx)(Z.A,{}),(0,v.jsx)("span",{className:"ml-2",children:"Refresh"})]})},{key:"Print",label:(0,v.jsxs)(A.A,{alignItems:"center",gap:y.fN[2],children:[(0,v.jsx)(Q.A,{}),(0,v.jsx)("span",{className:"ml-2",children:"Print"})]})},{key:"Export",label:(0,v.jsxs)(A.A,{alignItems:"center",gap:y.fN[2],children:[(0,v.jsx)(ee.A,{}),(0,v.jsx)("span",{className:"ml-2",children:"Export"})]})}],ce=e=>{let{items:t}=e;return(0,v.jsx)(G.A,{menu:{items:t},trigger:["click"],placement:"bottomRight",children:(0,v.jsx)("a",{href:"/#",className:"text-gray font-size-lg",onClick:e=>e.preventDefault(),children:(0,v.jsx)(te.A,{})})})};class de extends n.Component{constructor(e){super(e),this.state={transactions:[]}}componentDidMount(){r().post("http://localhost:5000/api/management/getTrxs",{userId:this.props.user.referNumber}).then((e=>{console.log(e),this.setState({transactions:e.data.transactions})}))}render(){const e=[{title:"Customer",dataIndex:"name",key:"name",render:(e,t)=>(0,v.jsxs)("div",{className:"d-flex align-items-center",children:[(0,v.jsx)(u.A,{size:30,className:"font-size-sm",src:t.image,style:{backgroundColor:t.avatarColor},children:ae.A.getNameInitial(e)}),(0,v.jsx)("span",{className:"ml-2",children:e})]})},{title:"Date",dataIndex:"date",key:"date",render:(e,t)=>(0,v.jsx)("span",{children:W().unix(e).format("D MMM YYYY, HH:mm")})},{title:"Amount $",dataIndex:"amount",key:"amount"},{title:(0,v.jsx)("div",{className:"text-center",children:"Method"}),dataIndex:"paymentType",key:"paymentType",render:(e,t)=>(0,v.jsx)("div",{className:"text-center",children:(0,v.jsx)(u.A,{src:""!==t.paymentType?"/img/others/"+t.paymentType+".png":"/img/avatars/default.png",alt:t.paymentType,preview:!1,style:{height:"25px",width:"auto"}})})},{title:()=>(0,v.jsx)("div",{className:"text-right",children:"Status"}),key:"status",render:(e,t)=>(0,v.jsx)("div",{className:"text-right",children:(0,v.jsx)(L.A,{className:"mr-0",color:"Pending"===t.paymentStatus?"cyan":"Paid"===t.paymentStatus?"blue":"volcano",children:t.paymentStatus})})},{title:()=>(0,v.jsx)("div",{className:"text-right",children:"Action"}),dataIndex:"action",key:"action",render:(e,t)=>(0,v.jsx)("div",{className:"text-right d-flex justify-content-end",children:(0,v.jsx)(N.A,{title:"Pay",children:(0,v.jsx)($.Ay,{type:"primary",onClick:le,icon:(0,v.jsx)(m.A,{}),size:"small",children:"Pay"})})})}];return(0,v.jsx)(v.Fragment,{children:(0,v.jsx)(b.A,{children:(0,v.jsx)(f.A,{xs:24,sm:24,md:24,lg:24,children:(0,v.jsx)(X.A,{title:"Pending Transactions",extra:(0,v.jsx)(ce,{items:me}),children:(0,v.jsx)(w.A,{className:"no-border-last",columns:e,dataSource:this.state.transactions,rowKey:"id",pagination:!1})})})})})}}const pe=de;var he=a(22474);class ge extends n.Component{constructor(e){super(e)}render(){const{IDCardUrl:e}=this.props.user;return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(A.A,{alignItems:"center",mobileFlex:!1,className:"text-center text-md-left"}),(0,v.jsx)("div",{className:"mt-4",children:(0,v.jsx)(b.A,{style:{width:"100%"},children:(0,v.jsx)(X.A,{title:"ID Card",children:(0,v.jsx)(he.A,{src:e})})})})]})}}const ue=ge,xe=e=>{let{id:t,icon:a,path:n,label:s}=e;return(0,v.jsxs)(v.Fragment,{children:[a,(0,v.jsx)("span",{children:s}),(0,v.jsx)(i.N_,{to:"".concat("/app/pages/user-detail","/").concat(t,"/").concat(n)})]})},be=()=>{const e=(0,o.zy)(),{id:t}=(0,o.g)(),a=e.pathname.split("/"),n=a[a.length-1];return(0,v.jsx)(h.A,{mode:"inline",selectedKeys:[n],items:[{key:"personal-info",label:(0,v.jsx)(xe,{id:t,label:"Personal Info",icon:(0,v.jsx)(l.A,{}),path:"personal-info"})},{key:"billing",label:(0,v.jsx)(xe,{id:t,label:"Billing",icon:(0,v.jsx)(m.A,{}),path:"billing"})},{key:"selfies",label:(0,v.jsx)(xe,{id:t,label:"Selfies",icon:(0,v.jsx)(c.A,{}),path:"selfies"})},{key:"payment-information",label:(0,v.jsx)(xe,{id:t,label:"Payment Information",icon:(0,v.jsx)(m.A,{}),path:"payment-information"})},{key:"id-info",label:(0,v.jsx)(xe,{id:t,label:"ID Information",icon:(0,v.jsx)(d.A,{}),path:"id-info"})},{key:"legal-info",label:(0,v.jsx)(xe,{id:t,label:"Legal Information",icon:(0,v.jsx)(p.A,{}),path:"legal-info"})}]})};class fe extends n.Component{constructor(e){super(e),this.state={user:""}}componentDidMount(){r().post("http://localhost:5000/api/management/getUser",{id:this.props.id}).then((e=>{this.setState({user:e.data.user})}))}render(){const e=()=>(0,v.jsxs)(o.BV,{children:[(0,v.jsx)(o.qh,{path:"personal-info",element:(0,v.jsx)(k,{user:this.state.user})}),(0,v.jsx)(o.qh,{path:"billing",element:(0,v.jsx)(pe,{user:this.state.user})}),(0,v.jsx)(o.qh,{path:"selfies",element:(0,v.jsx)(K,{user:this.state.user})}),(0,v.jsx)(o.qh,{path:"payment-information",element:(0,v.jsx)(R,{user:this.state.user})}),(0,v.jsx)(o.qh,{path:"id-info",element:(0,v.jsx)(ue,{user:this.state.user})}),(0,v.jsx)(o.qh,{path:"legal-info",element:(0,v.jsx)(k,{user:this.state.user})}),(0,v.jsx)(o.qh,{path:"*",element:(0,v.jsx)(o.C5,{to:"personal-info",replace:!0})})]});return(0,v.jsx)(g.A,{sideContentWidth:320,sideContent:(0,v.jsx)(be,{}),mainContent:(0,v.jsx)(e,{})})}}const je=()=>{const{id:e}=(0,o.g)();return(0,v.jsx)(fe,{id:e})}},94742:e=>{e.exports=JSON.parse('[{"id":"eileenHorton-1153","name":"Eileen Horton","email":"eileen_h@hotmail.com","img":"/img/avatars/thumb-1.jpg","role":"Admin","lastOnline":1573430400,"status":"pending","personalInfo":{"location":"New York, US","title":"Product Manager","birthday":"10/10/1992","phoneNumber":"+12-123-1234","facebook":"facebook.com/sample","twitter":"twitter.com/sample","instagram":"instagram.com/sample","site":"samplesite.com"},"rejectReason":""},{"id":"terranceMoreno-1322","name":"Terrance Moreno","email":"","img":"/img/avatars/thumb-2.jpg","role":"User","lastOnline":1572393600,"status":"pending","personalInfo":{"location":"New York, US","title":"Software Engineer","birthday":"03/02/1984","phoneNumber":"+12-123-1234","facebook":"facebook.com/sample","twitter":"twitter.com/sample","instagram":"instagram.com/sample","site":"samplesite.com"}},{"id":"ronVargas7653","name":"Ron Vargas","email":"ronnie_vergas@infotech.io","img":"/img/avatars/thumb-3.jpg","role":"User","lastOnline":1572393600,"status":"blocked","personalInfo":{"location":"New York, US","title":"UI/UX Designer","birthday":"07/11/1987","phoneNumber":"+12-123-1234","facebook":"facebook.com/sample","twitter":"twitter.com/sample","instagram":"instagram.com/sample","site":"samplesite.com"}},{"id":"lukeCook4721","name":"Luke Cook","email":"cookie_lukie@hotmail.com","img":"/img/avatars/thumb-4.jpg","role":"Admin","lastOnline":1579132800,"status":"active","personalInfo":{"location":"New York, US","title":"HR Executive","birthday":"07/11/1987","phoneNumber":"+12-123-1234","facebook":"facebook.com/sample","twitter":"twitter.com/sample","instagram":"instagram.com/sample","site":"samplesite.com"}},{"id":"joyceFreeman1384","name":"Joyce Freeman","email":"joyce991@infotech.io","img":"/img/avatars/thumb-5.jpg","role":"User","lastOnline":1582416000,"status":"active","personalInfo":{"location":"New York, US","title":"Frontend Developer","birthday":"17/11/1993","phoneNumber":"+12-123-1234","facebook":"facebook.com/sample","twitter":"twitter.com/sample","instagram":"instagram.com/sample","site":"samplesite.com"}},{"id":"samanthaPhillips8493","name":"Samantha Phillips","email":"samanthaphil@infotech.io","img":"/img/avatars/thumb-6.jpg","role":"User","lastOnline":1583107200,"status":"active","personalInfo":{"location":"London, UK","title":"Compliance Manager","birthday":"17/11/1993","phoneNumber":"+12-123-1234","facebook":"facebook.com/sample","twitter":"twitter.com/sample","instagram":"instagram.com/sample","site":"samplesite.com"}},{"id":"taraFletcher1263","name":"Tara Fletcher","email":"taratarara@imaze.edu.du","img":"/img/avatars/thumb-7.jpg","role":"User","lastOnline":1582761600,"status":"active","personalInfo":{"location":"London, UK","title":"Compliance Manager","birthday":"17/11/1993","phoneNumber":"+12-123-1234","facebook":"facebook.com/sample","twitter":"twitter.com/sample","instagram":"instagram.com/sample","site":"samplesite.com"}},{"id":"frederickAdams6532","name":"Frederick Adams","email":"iamfred@imaze.infotech.io","img":"/img/avatars/thumb-8.jpg","role":"User","lastOnline":1579219200,"status":"blocked","personalInfo":{"location":"London, UK","title":"Compliance Manager","birthday":"17/11/1993","phoneNumber":"+12-123-1234","facebook":"facebook.com/sample","twitter":"twitter.com/sample","instagram":"instagram.com/sample","site":"samplesite.com"}},{"id":"carolynHanson7953","name":"Carolyn Hanson","email":"carolyn_h@gmail.com","img":"/img/avatars/thumb-9.jpg","role":"User","lastOnline":1584489600,"status":"blocked","personalInfo":{"location":"Texas, US","title":"Compliance Manager","birthday":"03/06/1991","phoneNumber":"+12-123-1234","facebook":"facebook.com/sample","twitter":"twitter.com/sample","instagram":"instagram.com/sample","site":"samplesite.com"}},{"id":"brittanyHale3683","name":"Brittany Hale","email":"brittany1134@gmail.com","img":"/img/avatars/thumb-10.jpg","role":"User","lastOnline":1583452800,"status":"active","personalInfo":{"location":"Texas, US","title":"Compliance Manager","birthday":"03/06/1991","phoneNumber":"+12-123-1234","facebook":"facebook.com/sample","twitter":"twitter.com/sample","instagram":"instagram.com/sample","site":"samplesite.com"}},{"id":"lloydObrien1564","name":"Lloyd Obrien","email":"handsome-obrien@hotmail.com","img":"/img/avatars/thumb-11.jpg","role":"User","lastOnline":1584576000,"status":"active","personalInfo":{"location":"London, UK","title":"Software Engineer","birthday":"03/06/1991","phoneNumber":"+12-123-1234","facebook":"facebook.com/sample","twitter":"twitter.com/sample","instagram":"instagram.com/sample","site":"samplesite.com"}},{"id":"gabriellaMay2850","name":"Gabriella May","email":"maymaymay12@infotech.io","img":"/img/avatars/thumb-12.jpg","role":"User","lastOnline":1574208000,"status":"blocked","personalInfo":{"location":"London, UK","title":"Software Engineer","birthday":"03/06/1991","phoneNumber":"+12-123-1234","facebook":"facebook.com/sample","twitter":"twitter.com/sample","instagram":"instagram.com/sample","site":"samplesite.com"}},{"id":"leeWheeler1941","name":"Lee Wheeler","email":"","img":"/img/avatars/thumb-13.jpg","role":"User","lastOnline":1586649600,"status":"active","personalInfo":{"location":"London, UK","title":"Software Engineer","birthday":"03/06/1991","phoneNumber":"+12-123-1234","facebook":"facebook.com/sample","twitter":"twitter.com/sample","instagram":"instagram.com/sample","site":"samplesite.com"}},{"id":"gailBarnes7615","name":"Gail Barnes","email":"gailby0116@infotech.io","img":"/img/avatars/thumb-14.jpg","role":"User","lastOnline":1583020800,"status":"active","personalInfo":{"location":"London, UK","title":"Software Engineer","birthday":"03/06/1991","phoneNumber":"+12-123-1234","facebook":"facebook.com/sample","twitter":"twitter.com/sample","instagram":"instagram.com/sample","site":"samplesite.com"}},{"id":"ellaRobinson1093","name":"Ella Robinson","email":"ella_robinson@infotech.io","img":"/img/avatars/thumb-15.jpg","role":"User","lastOnline":1586217600,"status":"active","personalInfo":{"location":"London, UK","title":"Software Engineer","birthday":"03/06/1991","phoneNumber":"+12-123-1234","facebook":"facebook.com/sample","twitter":"twitter.com/sample","instagram":"instagram.com/sample","site":"samplesite.com"}}]')}}]);
//# sourceMappingURL=8195.5e3ed59d.chunk.js.map