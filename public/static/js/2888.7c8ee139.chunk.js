"use strict";(self.webpackChunkSelfie_Admin=self.webpackChunkSelfie_Admin||[]).push([[2888],{76396:(e,t,s)=>{s.d(t,{A:()=>i});s(65043);var a=s(2761),n=s(70579);const r=e=>(0,n.jsx)(a.A,{...e,className:"ant-avatar-".concat(e.type),children:e.text}),i=e=>{const{name:t,suffix:s,subTitle:a,id:i,type:l,src:o,icon:c,size:d,shape:u,gap:m,text:h,onNameClick:x}=e;return(0,n.jsxs)("div",{className:"avatar-status d-flex align-items-center",children:[r({icon:c,src:o,type:l,size:d,shape:u,gap:m,text:h}),(0,n.jsxs)("div",{className:"ml-2",children:[(0,n.jsxs)("div",{children:[x?(0,n.jsx)("div",{onClick:()=>x({name:t,subTitle:a,src:o,id:i}),className:"avatar-status-name clickable",children:t}):(0,n.jsx)("div",{className:"avatar-status-name",children:t}),(0,n.jsx)("span",{children:s})]}),(0,n.jsx)("div",{className:"text-muted avatar-status-subtitle",children:a})]})]})}},54861:(e,t,s)=>{s.d(t,{A:()=>r});var a=s(89073),n=s(70579);const r=e=>{let{style:t,...s}=e;return(0,n.jsx)(a.A,{style:{marginBottom:20},...s})}},47605:(e,t,s)=>{s.d(t,{A:()=>h});var a=s(65043),n=s(54861),r=s(22019),i=s(38558),l=s(82937),o=s(79951),c=s(70579);const d={position:"absolute",zIndex:"1"},u={position:"absolute",zIndex:"1",right:"0",top:"-2px"},m=e=>{let{title:t,series:s,width:m,height:h,xAxis:x,customOptions:g,card:p,type:f,extra:j,direction:b,bodyClass:v}=e,y=JSON.parse(JSON.stringify((e=>{switch(e){case"line":default:return i.V3;case"bar":return i.ck;case"area":return i.cZ}})(f)));const A=window.innerWidth<768,N=()=>{if(S.current){var e;const t=S.current.querySelectorAll("div.apexcharts-legend")[0];t.style.marginRight="".concat(A?0:null===(e=w.current)||void 0===e?void 0:e.offsetWidth,"px"),b===o.$f&&(t.style.right="auto",t.style.left="0"),A&&(t.style.position="relative",t.style.top=0,t.style.justifyContent="start",t.style.padding=0)}};(0,a.useEffect)((()=>{N()}),[]);const w=(0,a.useRef)(null),S=(0,a.useRef)();y.xaxis.categories=x,g&&(y={...y,...g});const{ref:C}=(0,l.uZ)({onResize:()=>{setTimeout((()=>{N()}),600)}}),I=()=>(0,c.jsx)("div",{ref:C,children:(0,c.jsx)("div",{style:b===o.$f?{direction:"ltr"}:{},className:"chartRef",ref:S,children:(0,c.jsx)(r.A,{options:y,type:f,series:s,width:m,height:h})})});return(0,c.jsx)(c.Fragment,{children:p?(0,c.jsx)(n.A,{children:(0,c.jsxs)("div",{className:"position-relative ".concat(v),children:[(0,c.jsx)("div",{style:A?{}:d,children:t})&&(0,c.jsx)("h4",{className:"font-weight-bold",style:A?{}:d,children:t}),j&&(0,c.jsx)("div",{ref:w,style:A?{}:u,children:j}),I()]})}):I()})};m.defaultProps={series:[],height:300,width:"100%",card:!0,type:"line"};const h=m},8572:(e,t,s)=>{s.d(t,{A:()=>a});const a=s(45903).A.div((e=>{let{justifyContent:t,alignItems:s,flexDirection:a,gap:n,padding:r,margin:i}=e;const l={display:"flex",justifyContent:t,alignItems:s,gap:"number"===typeof n?"".concat(n,"px"):n};return a&&(l.flexDirection=a),r&&(l.padding=r),i&&(l.margin=i),{...l}}))},16280:(e,t,s)=>{s.d(t,{h:()=>l});s(65043);var a=s(57692),n=s(54861),r=s(70579);const i=e=>{let{title:t,value:s,size:i,subtitle:l,strokeWidth:o,extra:c}=e;return(0,r.jsx)(n.A,{children:(0,r.jsxs)("div",{className:"text-center",children:[t&&(0,r.jsx)("h4",{className:"mb-3 font-weight-bold",children:t}),(0,r.jsx)(a.A,{type:"dashboard",percent:s,size:i,strokeWidth:o}),(0,r.jsx)("div",{className:"mt-2 mx-auto text-muted ".concat(c?"mb-3":""),style:{maxWidth:"".concat(i+30,"px")},children:l}),c]})})};i.defaultProps={strokeWidth:4,size:150};const l=i},39311:(e,t,s)=>{s.d(t,{A:()=>l});s(65043);var a=s(54861),n=s(46959),r=s(69312),i=s(70579);const l=e=>{let{title:t,value:s,status:l,subtitle:o,prefix:c}=e;return(0,i.jsxs)(a.A,{children:[t&&(0,i.jsx)("h4",{className:"mb-0",children:t}),(0,i.jsxs)("div",{className:"".concat(c?"d-flex":""," ").concat(t?"mt-3":""),children:[c?(0,i.jsx)("div",{className:"mr-2",children:c}):null,(0,i.jsxs)("div",{children:[(0,i.jsxs)("div",{className:"d-flex align-items-center",children:[(0,i.jsx)("h1",{className:"mb-0 font-weight-bold",children:s}),l?(0,i.jsxs)("span",{className:"font-size-md font-weight-bold ml-3 ".concat(0!==l&&l>0?"text-success":"text-danger"),children:[l,"%",0!==l&&l>0?(0,i.jsx)(n.A,{}):(0,i.jsx)(r.A,{})]}):null]}),o&&(0,i.jsx)("div",{className:"text-gray-light mt-1",children:o})]})]})]})}},38558:(e,t,s)=>{s.d(t,{B1:()=>r,Hm:()=>i,Kz:()=>d,Qc:()=>l,V3:()=>u,cZ:()=>m,ck:()=>h,g9:()=>a,lm:()=>o,nR:()=>n,op:()=>c,rA:()=>g,vX:()=>x});const a="#3e82f7",n="#04d182",r="#ffc107",i="rgba(62, 130, 247, 0.15)",l="rgba(4, 209, 130, 0.1)",o=[a,n,"#ff6b72",r,"#a461d8","#fa8c16","#17bcff"],c="#edf2f9",d="#455560",u={chart:{zoom:{enabled:!1},toolbar:{show:!1}},colors:[...o],dataLabels:{enabled:!1},stroke:{width:3,curve:"smooth",lineCap:"round"},legend:{position:"top",horizontalAlign:"right",offsetY:-15,itemMargin:{vertical:20},tooltipHoverFormatter:function(e,t){return e+" - "+t.w.globals.series[t.seriesIndex][t.dataPointIndex]}},xaxis:{categories:[]},grid:{xaxis:{lines:{show:!0}},yaxis:{lines:{show:!1}}}},m={...u},h={chart:{zoom:{enabled:!1},toolbar:{show:!1}},plotOptions:{bar:{horizontal:!1,columnWidth:"25px",startingShapre:"rounded",endingShape:"rounded"}},colors:[...o],dataLabels:{enabled:!1},stroke:{show:!0,width:6,curve:"smooth",colors:["transparent"]},legend:{position:"top",horizontalAlign:"right",offsetY:-15,inverseOrder:!0,itemMargin:{vertical:20},tooltipHoverFormatter:function(e,t){return e+" - "+t.w.globals.series[t.seriesIndex][t.dataPointIndex]}},xaxis:{categories:[]},fill:{opacity:1},tooltip:{y:{formatter:e=>"".concat(e)}}},x={colors:[...o],plotOptions:{pie:{size:50,donut:{labels:{show:!0,total:{show:!0,showAlways:!0,label:"",fontSize:"18px",fontFamily:"Roboto",fontWeight:"bold",color:"#1a3353",formatter:function(e){return e.globals.seriesTotals.reduce(((e,t)=>e+t),0)}}},size:"87%"}}},labels:[],dataLabels:{enabled:!1},legend:{show:!1}},g={chart:{type:"line",sparkline:{enabled:!0}},stroke:{width:2,curve:"smooth"},tooltip:{fixed:{enabled:!1},x:{show:!1},y:{title:{formatter:function(e){return""}}},marker:{show:!1}}}},22030:(e,t,s)=>{s.d(t,{A:()=>a});const a=class{static getNameInitial(e){let t=e.match(/\b\w/g)||[];return((t.shift()||"")+(t.pop()||"")).toUpperCase()}static getRouteInfo(e,t){if(e.path===t)return e;let s;for(let a in e)if(e.hasOwnProperty(a)&&"object"===typeof e[a]&&(s=this.getRouteInfo(e[a],t),s))return s;return s}static getColorContrast(e){if(!e)return"dark";const t=parseInt(n(e).substring(0,2),16);const s=function(e){return parseInt(n(e).substring(2,4),16)}(e),a=function(e){return parseInt(n(e).substring(4,6),16)}(e);function n(e){return"#"===e.charAt(0)?e.substring(1,7):e}return(299*t+587*s+114*a)/1e3>130?"dark":"light"}static shadeColor(e,t){let s=parseInt(e.substring(1,3),16),a=parseInt(e.substring(3,5),16),n=parseInt(e.substring(5,7),16);s=parseInt(s*(100+t)/100),a=parseInt(a*(100+t)/100),n=parseInt(n*(100+t)/100),s=s<255?s:255,a=a<255?a:255,n=n<255?n:255;const r=1===s.toString(16).length?"0".concat(s.toString(16)):s.toString(16),i=1===a.toString(16).length?"0".concat(a.toString(16)):a.toString(16),l=1===n.toString(16).length?"0".concat(n.toString(16)):n.toString(16);return"#".concat(r).concat(i).concat(l)}static rgbaToHex(e){const t=e=>e.replace(/^\s+|\s+$/gm,""),s=e.substring(e.indexOf("(")).split(","),a=parseInt(t(s[0].substring(1)),10),n=parseInt(t(s[1]),10),r=parseInt(t(s[2]),10),i=parseFloat(t(s[3].substring(0,s[3].length-1))).toFixed(2),l=[a.toString(16),n.toString(16),r.toString(16),Math.round(255*i).toString(16).substring(0,2)];return l.forEach((function(e,t){1===e.length&&(l[t]="0"+e)})),"#".concat(l.join(""))}static getSignNum(e,t,s){return e>0?t:e<0?s:null}static antdTableSorter(e,t,s){return"number"===typeof e[s]&&"number"===typeof t[s]?e[s]-t[s]:"string"===typeof e[s]&&"string"===typeof t[s]?(e=e[s].toLowerCase())>(t=t[s].toLowerCase())?-1:t>e?1:0:void 0}static filterArray(e,t,s){let a=e;return e&&(a=e.filter((e=>e[t]===s))),a}static deleteArrayRow(e,t,s){let a=e;return e&&(a=e.filter((e=>e[t]!==s))),a}static wildCardSearch(e,t){return e=e.filter((e=>(e=>{for(let s in e)if(null!=e[s]&&-1!==e[s].toString().toUpperCase().indexOf(t.toString().toUpperCase()))return!0})(e)))}static getBreakPoint(e){let t=[];for(const s in e)if(e.hasOwnProperty(s)){e[s]&&t.push(s)}return t}}},32905:(e,t,s)=>{s.d(t,{AB:()=>n,QN:()=>r,b6:()=>a,eV:()=>i,gT:()=>l,wC:()=>o});const a={series:[{name:"Session Duration",data:[45,52,38,24,33,26,21,20,6,8,15,10]},{name:"Page Views",data:[35,41,62,42,13,18,29,37,36,51,32,35]}],categories:["01 Jan","02 Jan","03 Jan","04 Jan","05 Jan","06 Jan","07 Jan","08 Jan","09 Jan","10 Jan","11 Jan","12 Jan"]},n=[{title:"Total Users",value:"14,256",status:11.4,subtitle:"Compare to last year (2023)"},{title:"Total Selfies",value:"643,982",status:8.2,subtitle:"Compare to last year (2023)"},{title:"Total Referrals",value:"18,310",status:-.7,subtitle:"Compare to last year (2023)"},{title:"Total Revenue",value:"\u20ac54,236",status:.3,subtitle:"Compare to last year (2023)"}],r=[{title:"Pending Payments",value:"15 (\u20ac34.5)",status:6,subtitle:"Compare to last day"},{title:"Pending Selfies",value:"156",status:-97,subtitle:"Compare to last day"},{title:"Pending Identify",value:"135",status:56,subtitle:"Compare to last day"}],i=[{name:"Members",data:[25,15,41,25,44,12,36,19,54]}],l=[{img:"/img/avatars/thumb-2.jpg",title:"Software Engineer",name:"Terrance Moreno"},{img:"/img/avatars/thumb-3.jpg",title:"UI/UX Designer",name:"Ron Vargas"},{img:"/img/avatars/thumb-4.jpg",title:"HR Executive",name:"Luke Cook"},{img:"/img/avatars/thumb-5.jpg",title:"Frontend Developer",name:"Joyce Freeman"},{img:"/img/avatars/thumb-6.jpg",title:"Compliance Manager",name:"Samantha Phillips"}],o=[{id:"#5331",name:"Clayton Bates",userId:"eileenHorton-1153",date:"8 May 2020",amount:"$137.00",status:"Approved",avatarColor:"#04d182"},{id:"#5332",name:"Gabriel Frazier",userId:"eileenHorton-1153",date:"6 May 2020",amount:"$322.00",status:"Approved",avatarColor:"#fa8c16"},{id:"#5333",name:"Eileen Horton",userId:"eileenHorton-1153",date:"1 May 2020",amount:"$543.00",status:"Pending",avatarColor:"#1890ff"},{id:"#5334",name:"Stacey Ward",userId:"eileenHorton-1153",date:"28 April 2020",amount:"$876.00",status:"Rejected",avatarColor:"#ffc542"},{id:"#5335",name:"Troy Alexander",userId:"eileenHorton-1153",date:"28 April 2020",amount:"$241.00",status:"Approved",avatarColor:"#ff6b72"}]},2888:(e,t,s)=>{s.r(t),s.d(t,{DefaultDashboard:()=>V,default:()=>$});var a=s(65043),n=s(30326),r=s(2761),i=s(76399),l=s(47419),o=s(11645),c=s(87021),d=s(30703),u=s(39311),m=s(54861),h=s(46959),x=s(69312),g=s(70579);const p=e=>{let{title:t,value:s,status:a,subtitle:n,prefix:r}=e;return(0,g.jsxs)(m.A,{children:[t&&(0,g.jsx)("h4",{className:"mb-0",children:t}),(0,g.jsxs)("div",{className:"".concat(r?"d-flex":""," ").concat(t?"mt-3":""),children:[r?(0,g.jsx)("div",{className:"mr-2",children:r}):null,(0,g.jsxs)("div",{children:[(0,g.jsxs)("div",{className:"d-flex align-items-center",children:[(0,g.jsx)("h1",{className:"mb-0 font-weight-bold",children:s}),a?(0,g.jsxs)("span",{className:"font-size-md font-weight-bold ml-3 ".concat(0!==a&&a>0?"text-success":"text-danger"),children:[a,0!==a&&a>0?(0,g.jsx)(h.A,{}):(0,g.jsx)(x.A,{})]}):null]}),n&&(0,g.jsx)("div",{className:"text-gray-light mt-1",children:n})]})]})]})};var f=s(47605),j=s(76396),b=s(16280),v=s(8572),y=s(32905),A=s(22019),N=s(38558),w=s(79951),S=s(90617),C=s(94834),I=s(12959),k=s(75337),z=s(80599),R=s(84235),P=s(67177),T=s(22030),J=s(97508);const M=e=>(0,g.jsx)(A.A,{...e}),D={...N.V3,chart:{sparkline:{enabled:!0}},colors:[N.nR]},H=[{key:"Refresh",label:(0,g.jsxs)(v.A,{alignItems:"center",gap:w.fN[2],children:[(0,g.jsx)(S.A,{}),(0,g.jsx)("span",{className:"ml-2",children:"Refresh"})]})},{key:"Print",label:(0,g.jsxs)(v.A,{alignItems:"center",gap:w.fN[2],children:[(0,g.jsx)(C.A,{}),(0,g.jsx)("span",{className:"ml-2",children:"Print"})]})},{key:"Export",label:(0,g.jsxs)(v.A,{alignItems:"center",gap:w.fN[2],children:[(0,g.jsx)(I.A,{}),(0,g.jsx)("span",{className:"ml-2",children:"Export"})]})}],F=[{key:"Add all",label:(0,g.jsxs)(v.A,{alignItems:"center",gap:w.fN[2],children:[(0,g.jsx)(k.A,{}),(0,g.jsx)("span",{className:"ml-2",children:"Add all"})]})},{key:"Disable all",label:(0,g.jsxs)(v.A,{alignItems:"center",gap:w.fN[2],children:[(0,g.jsx)(z.A,{}),(0,g.jsx)("span",{className:"ml-2",children:"Disable all"})]})}],O=e=>{let{items:t}=e;return(0,g.jsx)(n.A,{menu:{items:t},trigger:["click"],placement:"bottomRight",children:(0,g.jsx)("a",{href:"/#",className:"text-gray font-size-lg",onClick:e=>e.preventDefault(),children:(0,g.jsx)(R.A,{})})})},W=[{title:"Customer",dataIndex:"name",key:"name",render:(e,t)=>(0,g.jsxs)("div",{className:"d-flex align-items-center",children:[(0,g.jsx)(r.A,{size:30,className:"font-size-sm",style:{backgroundColor:t.avatarColor},children:T.A.getNameInitial(e)}),(0,g.jsx)("span",{className:"ml-2",children:e})]})},{title:"Date",dataIndex:"date",key:"date"},{title:"Amount",dataIndex:"amount",key:"amount"},{title:()=>(0,g.jsx)("div",{className:"text-right",children:"Status"}),key:"status",render:(e,t)=>(0,g.jsx)("div",{className:"text-right",children:(0,g.jsx)(i.A,{className:"mr-0",color:"Approved"===t.status?"cyan":"Pending"===t.status?"blue":"volcano",children:t.status})})}],V=()=>{const[e]=(0,a.useState)(y.b6),[t]=(0,a.useState)(y.AB),[s]=(0,a.useState)(y.QN),[n]=(0,a.useState)(y.eV),[r]=(0,a.useState)(y.gT),[i]=(0,a.useState)(y.wC),{direction:h}=(0,J.d4)((e=>e.theme));return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)(l.A,{gutter:16,children:[(0,g.jsxs)(o.A,{xs:24,sm:24,md:24,lg:18,children:[(0,g.jsx)(l.A,{gutter:16,children:t.map(((e,t)=>(0,g.jsx)(o.A,{xs:24,sm:24,md:24,lg:24,xl:6,children:(0,g.jsx)(u.A,{title:e.title,value:e.value,status:e.status,subtitle:e.subtitle})},t)))}),(0,g.jsx)(l.A,{gutter:16,children:s.map(((e,t)=>(0,g.jsx)(o.A,{xs:24,sm:24,md:24,lg:24,xl:8,children:(0,g.jsx)(p,{title:e.title,value:e.value,status:e.status,subtitle:e.subtitle})},t)))}),(0,g.jsx)(l.A,{gutter:16,children:(0,g.jsx)(o.A,{span:24,children:(0,g.jsx)(f.A,{title:"Unique Visitors",series:e.series,xAxis:e.categories,height:"400px",direction:h})})})]}),(0,g.jsxs)(o.A,{xs:24,sm:24,md:24,lg:6,children:[(0,g.jsx)(b.h,{title:"Monthly Target",value:87,subtitle:"You need abit more effort to hit monthly target",extra:(0,g.jsx)(c.Ay,{type:"primary",children:"Learn More"})}),(0,g.jsx)(u.A,{title:(0,g.jsx)(M,{options:D,series:n,height:145}),value:"17,329",status:3.7,subtitle:"Active members"})]})]}),(0,g.jsxs)(l.A,{gutter:16,children:[(0,g.jsx)(o.A,{xs:24,sm:24,md:24,lg:7,children:(0,g.jsx)(m.A,{title:"New Join Member",extra:(0,g.jsx)(O,{items:F}),children:(0,g.jsx)("div",{className:"mt-3",children:r.map(((e,t)=>(0,g.jsxs)("div",{className:"d-flex align-items-center justify-content-between mb-4",children:[(0,g.jsx)(j.A,{id:t,src:e.img,name:e.name,subTitle:e.title}),(0,g.jsx)("div",{children:(0,g.jsx)(c.Ay,{icon:(0,g.jsx)(P.A,{}),type:"default",size:"small",children:"Add"})})]},t)))})})}),(0,g.jsx)(o.A,{xs:24,sm:24,md:24,lg:17,children:(0,g.jsx)(m.A,{title:"All Transactions",extra:(0,g.jsx)(O,{items:H}),children:(0,g.jsx)(d.A,{className:"no-border-last",columns:W,dataSource:i,rowKey:"id",pagination:!1})})})]})]})},$=V}}]);
//# sourceMappingURL=2888.7c8ee139.chunk.js.map