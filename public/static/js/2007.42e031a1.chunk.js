"use strict";(self.webpackChunkSelfie_Admin=self.webpackChunkSelfie_Admin||[]).push([[2007],{76396:(t,e,a)=>{a.d(e,{A:()=>i});a(65043);var s=a(2761),r=a(70579);const n=t=>(0,r.jsx)(s.A,{...t,className:"ant-avatar-".concat(t.type),children:t.text}),i=t=>{const{name:e,suffix:a,subTitle:s,id:i,type:o,src:m,icon:l,size:c,shape:d,gap:p,text:g,onNameClick:h}=t;return(0,r.jsxs)("div",{className:"avatar-status d-flex align-items-center",children:[n({icon:l,src:m,type:o,size:c,shape:d,gap:p,text:g}),(0,r.jsxs)("div",{className:"ml-2",children:[(0,r.jsxs)("div",{children:[h?(0,r.jsx)("div",{onClick:()=>h({name:e,subTitle:s,src:m,id:i}),className:"avatar-status-name clickable",children:e}):(0,r.jsx)("div",{className:"avatar-status-name",children:e}),(0,r.jsx)("span",{children:a})]}),(0,r.jsx)("div",{className:"text-muted avatar-status-subtitle",children:s})]})]})}},45613:(t,e,a)=>{a.d(e,{A:()=>m});a(65043);var s=a(30326),r=a(10881),n=a(84235),i=a(70579);const o=t=>(0,i.jsx)(s.A,{overlay:t.menu,placement:t.placement,trigger:["click"],children:(0,i.jsx)("div",{className:"ellipsis-dropdown",children:(0,i.jsx)(n.A,{})})});o.defaultProps={trigger:"click",placement:"bottomRight",menu:(0,i.jsx)(r.A,{})};const m=o},8572:(t,e,a)=>{a.d(e,{A:()=>s});const s=a(45903).A.div((t=>{let{justifyContent:e,alignItems:a,flexDirection:s,gap:r,padding:n,margin:i}=t;const o={display:"flex",justifyContent:e,alignItems:a,gap:"number"===typeof r?"".concat(r,"px"):r};return s&&(o.flexDirection=s),n&&(o.padding=n),i&&(o.margin=i),{...o}}))},38558:(t,e,a)=>{a.d(e,{B1:()=>n,Hm:()=>i,Kz:()=>c,Qc:()=>o,V3:()=>d,cZ:()=>p,ck:()=>g,g9:()=>s,lm:()=>m,nR:()=>r,op:()=>l,rA:()=>u,vX:()=>h});const s="#3e82f7",r="#04d182",n="#ffc107",i="rgba(62, 130, 247, 0.15)",o="rgba(4, 209, 130, 0.1)",m=[s,r,"#ff6b72",n,"#a461d8","#fa8c16","#17bcff"],l="#edf2f9",c="#455560",d={chart:{zoom:{enabled:!1},toolbar:{show:!1}},colors:[...m],dataLabels:{enabled:!1},stroke:{width:3,curve:"smooth",lineCap:"round"},legend:{position:"top",horizontalAlign:"right",offsetY:-15,itemMargin:{vertical:20},tooltipHoverFormatter:function(t,e){return t+" - "+e.w.globals.series[e.seriesIndex][e.dataPointIndex]}},xaxis:{categories:[]},grid:{xaxis:{lines:{show:!0}},yaxis:{lines:{show:!1}}}},p={...d},g={chart:{zoom:{enabled:!1},toolbar:{show:!1}},plotOptions:{bar:{horizontal:!1,columnWidth:"25px",startingShapre:"rounded",endingShape:"rounded"}},colors:[...m],dataLabels:{enabled:!1},stroke:{show:!0,width:6,curve:"smooth",colors:["transparent"]},legend:{position:"top",horizontalAlign:"right",offsetY:-15,inverseOrder:!0,itemMargin:{vertical:20},tooltipHoverFormatter:function(t,e){return t+" - "+e.w.globals.series[e.seriesIndex][e.dataPointIndex]}},xaxis:{categories:[]},fill:{opacity:1},tooltip:{y:{formatter:t=>"".concat(t)}}},h={colors:[...m],plotOptions:{pie:{size:50,donut:{labels:{show:!0,total:{show:!0,showAlways:!0,label:"",fontSize:"18px",fontFamily:"Roboto",fontWeight:"bold",color:"#1a3353",formatter:function(t){return t.globals.seriesTotals.reduce(((t,e)=>t+e),0)}}},size:"87%"}}},labels:[],dataLabels:{enabled:!1},legend:{show:!1}},u={chart:{type:"line",sparkline:{enabled:!0}},stroke:{width:2,curve:"smooth"},tooltip:{fixed:{enabled:!1},x:{show:!1},y:{title:{formatter:function(t){return""}}},marker:{show:!1}}}},67706:(t,e,a)=>{a.d(e,{A:()=>b});var s,r=a(57528),n=a(65043),i=a(18205),o=a(48677),m=a(89073),l=a(22030),c=a(1919),d=a(45903),p=a(60909),g=a(79951),h=a(97508),u=a(98590);const{useBreakpoint:x}=i.Ay,f=d.A.div((t=>{let{hasPageHeader:e,gutter:a}=t;const s={minHeight:"calc(100vh - ".concat(g.nE.CONTENT_HEIGHT_OFFSET,"px - ").concat(g.nE.LAYOUT_CONTENT_GUTTER,"px * 2  - 2px);"),width:"100%",padding:a?24:0};return e&&(s.minHeight="75vh"),s})),v=t=>{const{sideContent:e,sideContentWidth:a=250,border:s}=t,r=(0,h.d4)((t=>t.theme.currentTheme));return(0,u.Y)("div",{style:{width:"".concat(a,"px"),borderInlineEnd:"1px solid ".concat("dark"===r?g.ZI.BORDER_BASE_COLOR:g.XE.BASE_COLOR)},children:e})},y=t=>{const{sideContent:e,visible:a,onSideContentClose:s}=t;return(0,u.Y)(o.A,{width:320,placement:"left",closable:!1,onClose:s,open:a,bodyStyle:{paddingLeft:0,paddingRight:0},children:(0,u.Y)("div",{className:"h-100",children:e})})},b=t=>{const{mainContent:e,pageHeader:a,sideContentGutter:i=!0}=t,o=!l.A.getBreakPoint(x()).includes("lg"),[d,g]=(0,n.useState)(!1);return(0,u.FD)(m.A,{className:"mb-0",css:(0,p.AH)(s||(s=(0,r.A)(["\n\t\t\t>.ant-card-body {\n\t\t\t\tdisplay: flex;\n\t\t\t\tpadding: 0px;\n\t\t\t}\n\t\t"]))),children:[o?(0,u.Y)(y,{visible:d,onSideContentClose:t=>{g(!1)},...t}):(0,u.Y)(v,{...t}),(0,u.FD)(f,{hasPageHeader:a,gutter:i,children:[o?(0,u.Y)("div",{className:"font-size-lg mb-3 ".concat(i?"":"pt-3 px-3"),children:(0,u.Y)(c.A,{onClick:()=>{g(!0)}})}):null,e]})]})}},22030:(t,e,a)=>{a.d(e,{A:()=>s});const s=class{static getNameInitial(t){let e=t.match(/\b\w/g)||[];return((e.shift()||"")+(e.pop()||"")).toUpperCase()}static getRouteInfo(t,e){if(t.path===e)return t;let a;for(let s in t)if(t.hasOwnProperty(s)&&"object"===typeof t[s]&&(a=this.getRouteInfo(t[s],e),a))return a;return a}static getColorContrast(t){if(!t)return"dark";const e=parseInt(r(t).substring(0,2),16);const a=function(t){return parseInt(r(t).substring(2,4),16)}(t),s=function(t){return parseInt(r(t).substring(4,6),16)}(t);function r(t){return"#"===t.charAt(0)?t.substring(1,7):t}return(299*e+587*a+114*s)/1e3>130?"dark":"light"}static shadeColor(t,e){let a=parseInt(t.substring(1,3),16),s=parseInt(t.substring(3,5),16),r=parseInt(t.substring(5,7),16);a=parseInt(a*(100+e)/100),s=parseInt(s*(100+e)/100),r=parseInt(r*(100+e)/100),a=a<255?a:255,s=s<255?s:255,r=r<255?r:255;const n=1===a.toString(16).length?"0".concat(a.toString(16)):a.toString(16),i=1===s.toString(16).length?"0".concat(s.toString(16)):s.toString(16),o=1===r.toString(16).length?"0".concat(r.toString(16)):r.toString(16);return"#".concat(n).concat(i).concat(o)}static rgbaToHex(t){const e=t=>t.replace(/^\s+|\s+$/gm,""),a=t.substring(t.indexOf("(")).split(","),s=parseInt(e(a[0].substring(1)),10),r=parseInt(e(a[1]),10),n=parseInt(e(a[2]),10),i=parseFloat(e(a[3].substring(0,a[3].length-1))).toFixed(2),o=[s.toString(16),r.toString(16),n.toString(16),Math.round(255*i).toString(16).substring(0,2)];return o.forEach((function(t,e){1===t.length&&(o[e]="0"+t)})),"#".concat(o.join(""))}static getSignNum(t,e,a){return t>0?e:t<0?a:null}static antdTableSorter(t,e,a){return"number"===typeof t[a]&&"number"===typeof e[a]?t[a]-e[a]:"string"===typeof t[a]&&"string"===typeof e[a]?(t=t[a].toLowerCase())>(e=e[a].toLowerCase())?-1:e>t?1:0:void 0}static filterArray(t,e,a){let s=t;return t&&(s=t.filter((t=>t[e]===a))),s}static deleteArrayRow(t,e,a){let s=t;return t&&(s=t.filter((t=>t[e]!==a))),s}static wildCardSearch(t,e){return t=t.filter((t=>(t=>{for(let a in t)if(null!=t[a]&&-1!==t[a].toString().toUpperCase().indexOf(e.toString().toUpperCase()))return!0})(t)))}static getBreakPoint(t){let e=[];for(const a in t)if(t.hasOwnProperty(a)){t[a]&&e.push(a)}return e}}},92007:(t,e,a)=>{a.r(e),a.d(e,{default:()=>M});var s=a(65043),r=a(67706),n=a(73216);const i=JSON.parse('[{"id":1,"name":"Eileen Horton","avatar":"/img/avatars/thumb-1.jpg","unread":3,"time":"4:16PM","msg":[{"avatar":"/img/avatars/thumb-1.jpg","text":"Hey, Bro...","from":"opposite","time":"","msgType":"text"},{"avatar":"","text":"Hey","from":"me","time":"","msgType":"text"},{"avatar":"","text":"","from":"","time":"7:57PM","msgType":"date"},{"avatar":"/img/avatars/thumb-1.jpg","text":"Did you check out our latest product?","from":"opposite","time":"","msgType":"text"},{"avatar":"/img/avatars/thumb-1.jpg","text":"Its awesome!","from":"opposite","time":"","msgType":"text"},{"avatar":"/img/avatars/thumb-1.jpg","text":"You would probably love it","from":"opposite","time":"","msgType":"text"},{"avatar":"","text":"Wow, that was cool!","from":"me","time":"","msgType":"text"}]},{"id":2,"name":"Terrance Moreno","avatar":"/img/avatars/thumb-2.jpg","time":"18/04/2020","unread":2,"msg":[{"avatar":"","text":"","from":"","time":"7:57PM","msgType":"date"},{"avatar":"/img/avatars/thumb-2.jpg","text":"Hello Jason ","from":"opposite","time":"","msgType":"text"},{"avatar":"","text":"Hello, how are you ","from":"me","time":"","msgType":"text"},{"avatar":"/img/avatars/thumb-2.jpg","text":"Remember our previous discussion?","from":"opposite","time":"","msgType":"text"},{"avatar":"","text":"Yeah, sure!","from":"me","time":"","msgType":"text"},{"avatar":"/img/avatars/thumb-2.jpg","text":"This is the finalize version.","from":"opposite","time":"","msgType":"text"},{"avatar":"","text":"Application-United.pdf","from":"opposite","time":"","msgType":"file"},{"avatar":"","text":"Okay! Thank you","from":"me","time":"","msgType":"text"}]},{"id":3,"name":"Ron Vargas","avatar":"/img/avatars/thumb-3.jpg","time":"17/04/2020","unread":5,"msg":[{"avatar":"","text":"","from":"","time":"7:57PM","msgType":"date"},{"avatar":"/img/avatars/thumb-3.jpg","text":"Your great aunt just passed away. LOL","from":"opposite","time":"","msgType":"text"},{"avatar":"","text":"Why is that funny?","from":"me","time":"","msgType":"text"},{"avatar":"/img/avatars/thumb-3.jpg","text":"Its not funny at all","from":"opposite","time":"","msgType":"text"},{"avatar":"","text":"Why do you think funny?","from":"opposite","time":"","msgType":"text"},{"avatar":"","text":"LOL mean laughing out loud","from":"me","time":"","msgType":"text"},{"avatar":"","text":"","from":"","time":"7:59PM","msgType":"date"},{"avatar":"/img/avatars/thumb-3.jpg","text":"OMG! I send that to everyone","from":"opposite","time":"","msgType":"text"}]},{"id":4,"name":"Luke Cook","avatar":"/img/avatars/thumb-4.jpg","time":"14/04/2020","unread":0,"msg":[{"avatar":"","text":"","from":"","time":"8:08PM","msgType":"date"},{"avatar":"/img/avatars/thumb-4.jpg","text":"Dude are you ready to party?","from":"opposite","time":"","msgType":"text"},{"avatar":"","text":"Umm who are you","from":"me","time":"","msgType":"text"},{"avatar":"/img/avatars/thumb-4.jpg","text":"Oh sorry wrong chat","from":"opposite","time":"","msgType":"text"},{"avatar":"/img/avatars/thumb-4.jpg","text":"Bye","from":"opposite","time":"","msgType":"text"},{"avatar":"","text":"...but I wan to party","from":"me","time":"","msgType":"text"}]},{"id":5,"name":"Tara Fletcher","avatar":"/img/avatars/thumb-7.jpg","time":"21/03/2020","unread":0,"msg":[{"avatar":"/img/avatars/thumb-7.jpg","text":"Oh yeah? well I enjoy a nice steak. how about you?","from":"opposite","time":"","msgType":"text"},{"avatar":"","text":"We\u2019 d have steak and ice cream three times every day!","from":"me","time":"","msgType":"text"},{"avatar":"/img/avatars/thumb-7.jpg","text":"I eat all the steak and chicken too, even bacon","from":"opposite","time":"","msgType":"text"},{"avatar":"","text":"That was great!","from":"me","time":"","msgType":"text"},{"avatar":"/img/avatars/thumb-7.jpg","text":"yeah you said that already","from":"opposite","time":"","msgType":"text"},{"avatar":"","text":"Dynamic structure can absorb shock.","from":"me","time":"","msgType":"text"},{"avatar":"/img/avatars/thumb-7.jpg","text":"yes it can. I know about that as a bodybuilder","from":"opposite","time":"","msgType":"text"},{"avatar":"","text":"The strongest man in the world is blowing up a hot water bottle.","from":"me","time":"","msgType":"text"}]}]');var o=a(10881),m=a(2761),l=a(8354),c=a(34496),d=a(85578),p=a(87021),g=a(53722),h=a(27966),u=a(61966),x=a(16523),f=a(52297),v=a(46833),y=a(4394),b=a(43360),j=a(8572),T=a(45613),w=a(70579);const A=()=>(0,w.jsxs)(o.A,{children:[(0,w.jsxs)(o.A.Item,{children:[(0,w.jsx)(g.A,{}),(0,w.jsx)("span",{children:"User Info"})]},"0"),(0,w.jsxs)(o.A.Item,{children:[(0,w.jsx)(h.A,{}),(0,w.jsx)("span",{children:"Mute Chat"})]},"1"),(0,w.jsx)(o.A.Divider,{}),(0,w.jsxs)(o.A.Item,{children:[(0,w.jsx)(u.A,{}),(0,w.jsx)("span",{children:"Delete Chat"})]},"3")]}),C=()=>{const t=(0,s.useRef)(),e=(0,s.useRef)(),a=(0,n.g)(),[r,o]=(0,s.useState)({}),[g,h]=(0,s.useState)([]),{id:u}=a,C=t=>{switch(t.msgType){case"text":return(0,w.jsx)("span",{children:t.text});case"image":return(0,w.jsx)("img",{src:t.text,alt:t.text});case"file":return(0,w.jsxs)(j.A,{alignItems:"center",className:"msg-file",children:[(0,w.jsx)(x.A,{className:"font-size-md"}),(0,w.jsx)("span",{className:"ml-2 font-weight-semibold text-link pointer",children:(0,w.jsx)("u",{children:t.text})})]});default:return null}},N=e=>{if(e.newMsg){const a={avatar:"",from:"me",msgType:"text",text:e.newMsg,time:""};t.current.setFieldsValue({newMsg:""}),h([...g,a])}},k=t=>{t.preventDefault()};(0,s.useEffect)((()=>{(t=>{const e=i.filter((e=>e.id===t));o(e[0]),h(e[0].msg)})(parseInt(parseInt(u))),e.current.scrollToBottom()}),[u]);return(0,w.jsxs)("div",{className:"chat-content",children:[(I=r.name,(0,w.jsxs)("div",{className:"chat-content-header",children:[(0,w.jsx)("h4",{className:"mb-0",children:I}),(0,w.jsx)("div",{children:(0,w.jsx)(T.A,{menu:A})})]})),((t,a)=>(0,w.jsx)("div",{className:"chat-content-body",children:(0,w.jsx)(b.ur,{ref:e,autoHide:!0,children:t.map(((t,e)=>(0,w.jsxs)("div",{className:"msg ".concat("date"===t.msgType?"datetime":""," ").concat("opposite"===t.from?"msg-recipient":"me"===t.from?"msg-sent":""),children:[t.avatar?(0,w.jsx)("div",{className:"mr-2",children:(0,w.jsx)(m.A,{src:t.avatar})}):null,t.text?(0,w.jsx)("div",{className:"bubble ".concat(t.avatar?"":"ml-5"),children:(0,w.jsx)("div",{className:"bubble-wrapper",children:C(t)})}):null,"date"===t.msgType?(0,w.jsx)(l.A,{children:t.time}):null]},"msg-".concat(a,"-").concat(e))))})}))(g,a.id),(0,w.jsx)("div",{className:"chat-content-footer",children:(0,w.jsx)(c.A,{name:"msgInput",ref:t,onFinish:N,className:"w-100",children:(0,w.jsx)(c.A.Item,{name:"newMsg",className:"mb-0",children:(0,w.jsx)(d.A,{autoComplete:"off",placeholder:"Type a message...",suffix:(0,w.jsxs)("div",{className:"d-flex align-items-center",children:[(0,w.jsx)("a",{href:"/#",className:"text-dark font-size-lg mr-3",onClick:k,children:(0,w.jsx)(f.A,{})}),(0,w.jsx)("a",{href:"/#",className:"text-dark font-size-lg mr-3",onClick:k,children:(0,w.jsx)(v.A,{})}),(0,w.jsx)(p.Ay,{shape:"circle",type:"primary",size:"small",onClick:N,htmlType:"submit",children:(0,w.jsx)(y.A,{})})]})})})})})]});var I},N=()=>(0,w.jsx)("div",{className:"chat-content-empty",children:(0,w.jsxs)("div",{className:"text-center",children:[(0,w.jsx)("img",{src:"/img/others/img-11.png",alt:"Start a Conversation"}),(0,w.jsx)("h1",{className:"font-weight-light",children:"Start a conversation"})]})}),k=()=>(0,w.jsxs)(n.BV,{children:[(0,w.jsx)(n.qh,{path:":id",element:(0,w.jsx)(C,{})}),(0,w.jsx)(n.qh,{path:"/",element:(0,w.jsx)(N,{})})]});var I=a(37490),S=a(76396),O=a(38558),z=a(62058);const H=()=>{const[t,e]=(0,s.useState)(i),a=(0,n.zy)();let r=(0,n.Zp)();const o=parseInt(a.pathname.match(/\/([^/]+)\/?$/)[1]);return(0,w.jsxs)("div",{className:"chat-menu",children:[(0,w.jsx)("div",{className:"chat-menu-toolbar",children:(0,w.jsx)(d.A,{placeholder:"Search",onChange:t=>{const a=t.target.value,s=i.filter((t=>""===a?t:t.name.toLowerCase().includes(a)));e(s)},prefix:(0,w.jsx)(z.A,{className:"font-size-lg mr-2"})})}),(0,w.jsx)("div",{className:"chat-menu-list",children:t.map(((a,s)=>(0,w.jsxs)("div",{onClick:()=>(a=>{const s=t.map((t=>(t.id===a&&(t.unread=0),t)));e(s),r("".concat(a))})(a.id),className:"chat-menu-list-item ".concat(s===t.length-1?"last":""," ").concat(a.id===o?"selected":""),children:[(0,w.jsx)(S.A,{src:a.avatar,name:a.name,subTitle:a.msg[a.msg.length-1].text}),(0,w.jsxs)("div",{className:"text-right",children:[(0,w.jsx)("div",{className:"chat-menu-list-item-time",children:a.time}),0===a.unread?(0,w.jsx)("span",{}):(0,w.jsx)(I.A,{count:a.unread,style:{backgroundColor:O.g9}})]})]},"chat-item-".concat(a.id))))})]})},M=t=>(0,w.jsx)("div",{className:"chat",children:(0,w.jsx)(r.A,{sideContent:(0,w.jsx)(H,{...t}),mainContent:(0,w.jsx)(k,{...t}),sideContentWidth:450,sideContentGutter:!1,border:!0})})}}]);
//# sourceMappingURL=2007.42e031a1.chunk.js.map