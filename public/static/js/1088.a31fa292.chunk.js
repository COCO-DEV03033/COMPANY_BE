"use strict";(self.webpackChunkSelfie_Admin=self.webpackChunkSelfie_Admin||[]).push([[1088],{76396:(e,t,s)=>{s.d(t,{A:()=>i});s(65043);var a=s(2761),r=s(70579);const n=e=>(0,r.jsx)(a.A,{...e,className:"ant-avatar-".concat(e.type),children:e.text}),i=e=>{const{name:t,suffix:s,subTitle:a,id:i,type:l,src:o,icon:c,size:d,shape:h,gap:m,text:u,onNameClick:x}=e;return(0,r.jsxs)("div",{className:"avatar-status d-flex align-items-center",children:[n({icon:c,src:o,type:l,size:d,shape:h,gap:m,text:u}),(0,r.jsxs)("div",{className:"ml-2",children:[(0,r.jsxs)("div",{children:[x?(0,r.jsx)("div",{onClick:()=>x({name:t,subTitle:a,src:o,id:i}),className:"avatar-status-name clickable",children:t}):(0,r.jsx)("div",{className:"avatar-status-name",children:t}),(0,r.jsx)("span",{children:s})]}),(0,r.jsx)("div",{className:"text-muted avatar-status-subtitle",children:a})]})]})}},54861:(e,t,s)=>{s.d(t,{A:()=>n});var a=s(89073),r=s(70579);const n=e=>{let{style:t,...s}=e;return(0,r.jsx)(a.A,{style:{marginBottom:20},...s})}},47605:(e,t,s)=>{s.d(t,{A:()=>u});var a=s(65043),r=s(54861),n=s(22019),i=s(38558),l=s(82937),o=s(79951),c=s(70579);const d={position:"absolute",zIndex:"1"},h={position:"absolute",zIndex:"1",right:"0",top:"-2px"},m=e=>{let{title:t,series:s,width:m,height:u,xAxis:x,customOptions:g,card:p,type:j,extra:b,direction:f,bodyClass:v}=e,A=JSON.parse(JSON.stringify((e=>{switch(e){case"line":default:return i.V3;case"bar":return i.ck;case"area":return i.cZ}})(j)));const y=window.innerWidth<768,S=()=>{if(N.current){var e;const t=N.current.querySelectorAll("div.apexcharts-legend")[0];t.style.marginRight="".concat(y?0:null===(e=w.current)||void 0===e?void 0:e.offsetWidth,"px"),f===o.$f&&(t.style.right="auto",t.style.left="0"),y&&(t.style.position="relative",t.style.top=0,t.style.justifyContent="start",t.style.padding=0)}};(0,a.useEffect)((()=>{S()}),[]);const w=(0,a.useRef)(null),N=(0,a.useRef)();A.xaxis.categories=x,g&&(A={...A,...g});const{ref:k}=(0,l.uZ)({onResize:()=>{setTimeout((()=>{S()}),600)}}),C=()=>(0,c.jsx)("div",{ref:k,children:(0,c.jsx)("div",{style:f===o.$f?{direction:"ltr"}:{},className:"chartRef",ref:N,children:(0,c.jsx)(n.A,{options:A,type:j,series:s,width:m,height:u})})});return(0,c.jsx)(c.Fragment,{children:p?(0,c.jsx)(r.A,{children:(0,c.jsxs)("div",{className:"position-relative ".concat(v),children:[(0,c.jsx)("div",{style:y?{}:d,children:t})&&(0,c.jsx)("h4",{className:"font-weight-bold",style:y?{}:d,children:t}),b&&(0,c.jsx)("div",{ref:w,style:y?{}:h,children:b}),C()]})}):C()})};m.defaultProps={series:[],height:300,width:"100%",card:!0,type:"line"};const u=m},2678:(e,t,s)=>{s.d(t,{A:()=>i});s(65043);var a=s(70579);const r=e=>{let t;switch(e.size){case"lg":t=(0,a.jsx)("h1",{className:"mb-0 font-weight-bold",children:e.value});break;case"md":t=(0,a.jsx)("h2",{className:"mb-0 font-weight-bold",children:e.value});break;default:t=(0,a.jsx)("h3",{className:"mb-0 font-weight-bold",children:e.value})}return t},n=e=>{const{size:t,value:s,title:n}=e;return(0,a.jsxs)("div",{children:[(0,a.jsx)(r,{value:s,size:t}),(0,a.jsx)("p",{className:"mb-0 text-muted",children:n})]})};n.defaultProps={size:"md"};const i=n},82887:(e,t,s)=>{s.d(t,{A:()=>c});s(65043);var a=s(89073),r=s(2761),n=s(8572),i=s(2678),l=s(70579);const o=e=>{const{size:t,value:s,title:o,icon:c,color:d,avatarSize:h,vertical:m}=e,u={size:t,value:s,title:o};return(0,l.jsx)(a.A,{children:(0,l.jsxs)(n.A,{alignItems:"center",flexDirection:m?"column":"row",children:[(0,l.jsx)(r.A,{size:h,shape:"square",icon:c,className:"ant-avatar-".concat(d)}),(0,l.jsx)("div",{className:m?"mt-3 text-center":"ml-3",children:(0,l.jsx)(i.A,{...u})})]})})};o.defaultProps={avatarSize:50,vertical:!1};const c=o},44059:(e,t,s)=>{s.d(t,{A:()=>d});s(65043);var a=s(89073),r=s(22019),n=s(38558),i=s(70579);const l=n.vX,o=e=>(0,i.jsx)(r.A,{...e}),c=e=>{const{series:t,customOptions:s,labels:r,width:n,height:c,title:d,extra:h,bodyClass:m}=e;let u=JSON.parse(JSON.stringify(l));return u.labels=r,u.plotOptions.pie.donut.labels.total.label=d,d||(u.plotOptions.pie.donut.labels.show=!1),s&&(u={...u,...s}),(0,i.jsx)(a.A,{children:(0,i.jsxs)("div",{className:"text-center ".concat(m),children:[(0,i.jsx)(o,{type:"donut",options:u,series:t,width:n,height:c}),h]})})};c.defaultProps={series:[],labels:[],title:"",height:250,width:"100%"};const d=c},8572:(e,t,s)=>{s.d(t,{A:()=>a});const a=s(45903).A.div((e=>{let{justifyContent:t,alignItems:s,flexDirection:a,gap:r,padding:n,margin:i}=e;const l={display:"flex",justifyContent:t,alignItems:s,gap:"number"===typeof r?"".concat(r,"px"):r};return a&&(l.flexDirection=a),n&&(l.padding=n),i&&(l.margin=i),{...l}}))},38558:(e,t,s)=>{s.d(t,{B1:()=>n,Hm:()=>i,Kz:()=>d,Qc:()=>l,V3:()=>h,cZ:()=>m,ck:()=>u,g9:()=>a,lm:()=>o,nR:()=>r,op:()=>c,rA:()=>g,vX:()=>x});const a="#3e82f7",r="#04d182",n="#ffc107",i="rgba(62, 130, 247, 0.15)",l="rgba(4, 209, 130, 0.1)",o=[a,r,"#ff6b72",n,"#a461d8","#fa8c16","#17bcff"],c="#edf2f9",d="#455560",h={chart:{zoom:{enabled:!1},toolbar:{show:!1}},colors:[...o],dataLabels:{enabled:!1},stroke:{width:3,curve:"smooth",lineCap:"round"},legend:{position:"top",horizontalAlign:"right",offsetY:-15,itemMargin:{vertical:20},tooltipHoverFormatter:function(e,t){return e+" - "+t.w.globals.series[t.seriesIndex][t.dataPointIndex]}},xaxis:{categories:[]},grid:{xaxis:{lines:{show:!0}},yaxis:{lines:{show:!1}}}},m={...h},u={chart:{zoom:{enabled:!1},toolbar:{show:!1}},plotOptions:{bar:{horizontal:!1,columnWidth:"25px",startingShapre:"rounded",endingShape:"rounded"}},colors:[...o],dataLabels:{enabled:!1},stroke:{show:!0,width:6,curve:"smooth",colors:["transparent"]},legend:{position:"top",horizontalAlign:"right",offsetY:-15,inverseOrder:!0,itemMargin:{vertical:20},tooltipHoverFormatter:function(e,t){return e+" - "+t.w.globals.series[t.seriesIndex][t.dataPointIndex]}},xaxis:{categories:[]},fill:{opacity:1},tooltip:{y:{formatter:e=>"".concat(e)}}},x={colors:[...o],plotOptions:{pie:{size:50,donut:{labels:{show:!0,total:{show:!0,showAlways:!0,label:"",fontSize:"18px",fontFamily:"Roboto",fontWeight:"bold",color:"#1a3353",formatter:function(e){return e.globals.seriesTotals.reduce(((e,t)=>e+t),0)}}},size:"87%"}}},labels:[],dataLabels:{enabled:!1},legend:{show:!1}},g={chart:{type:"line",sparkline:{enabled:!0}},stroke:{width:2,curve:"smooth"},tooltip:{fixed:{enabled:!1},x:{show:!1},y:{title:{formatter:function(e){return""}}},marker:{show:!1}}}},50560:(e,t,s)=>{s.d(t,{eL:()=>a});const a="DD-MM-YYYY"},22030:(e,t,s)=>{s.d(t,{A:()=>a});const a=class{static getNameInitial(e){let t=e.match(/\b\w/g)||[];return((t.shift()||"")+(t.pop()||"")).toUpperCase()}static getRouteInfo(e,t){if(e.path===t)return e;let s;for(let a in e)if(e.hasOwnProperty(a)&&"object"===typeof e[a]&&(s=this.getRouteInfo(e[a],t),s))return s;return s}static getColorContrast(e){if(!e)return"dark";const t=parseInt(r(e).substring(0,2),16);const s=function(e){return parseInt(r(e).substring(2,4),16)}(e),a=function(e){return parseInt(r(e).substring(4,6),16)}(e);function r(e){return"#"===e.charAt(0)?e.substring(1,7):e}return(299*t+587*s+114*a)/1e3>130?"dark":"light"}static shadeColor(e,t){let s=parseInt(e.substring(1,3),16),a=parseInt(e.substring(3,5),16),r=parseInt(e.substring(5,7),16);s=parseInt(s*(100+t)/100),a=parseInt(a*(100+t)/100),r=parseInt(r*(100+t)/100),s=s<255?s:255,a=a<255?a:255,r=r<255?r:255;const n=1===s.toString(16).length?"0".concat(s.toString(16)):s.toString(16),i=1===a.toString(16).length?"0".concat(a.toString(16)):a.toString(16),l=1===r.toString(16).length?"0".concat(r.toString(16)):r.toString(16);return"#".concat(n).concat(i).concat(l)}static rgbaToHex(e){const t=e=>e.replace(/^\s+|\s+$/gm,""),s=e.substring(e.indexOf("(")).split(","),a=parseInt(t(s[0].substring(1)),10),r=parseInt(t(s[1]),10),n=parseInt(t(s[2]),10),i=parseFloat(t(s[3].substring(0,s[3].length-1))).toFixed(2),l=[a.toString(16),r.toString(16),n.toString(16),Math.round(255*i).toString(16).substring(0,2)];return l.forEach((function(e,t){1===e.length&&(l[t]="0"+e)})),"#".concat(l.join(""))}static getSignNum(e,t,s){return e>0?t:e<0?s:null}static antdTableSorter(e,t,s){return"number"===typeof e[s]&&"number"===typeof t[s]?e[s]-t[s]:"string"===typeof e[s]&&"string"===typeof t[s]?(e=e[s].toLowerCase())>(t=t[s].toLowerCase())?-1:t>e?1:0:void 0}static filterArray(e,t,s){let a=e;return e&&(a=e.filter((e=>e[t]===s))),a}static deleteArrayRow(e,t,s){let a=e;return e&&(a=e.filter((e=>e[t]!==s))),a}static wildCardSearch(e,t){return e=e.filter((e=>(e=>{for(let s in e)if(null!=e[s]&&-1!==e[s].toString().toUpperCase().indexOf(t.toString().toUpperCase()))return!0})(e)))}static getBreakPoint(e){let t=[];for(const s in e)if(e.hasOwnProperty(s)){e[s]&&t.push(s)}return t}}},91088:(e,t,s)=>{s.r(t),s.d(t,{default:()=>U});s(65043);var a=s(36497),r=s(89073),n=s(47419),i=s(11645),l=s(87021),o=s(37490),c=s(76399),d=s(30703),h=s(8572),m=s(76396),u=s(82887),x=s(44059),g=s(89577),p=s(46959),j=s(82148),b=s(95717),f=s(1199),v=s(35534),A=s(10716),y=s(69312),S=s(47605),w=s(38558);const N={series:[{name:"Earning",data:[45,52,38,24,33,26,21]}],categories:["08 Jul","09 Jul","10 Jul","11 Jul","12 Jul","13 Jul","14 Jul"]},k=[{name:"Blue Jacket",image:"/img/thumbs/thumb-7.jpg",category:"Cloths",sales:5930,status:"up"},{name:"White Sneaker",image:"/img/thumbs/thumb-12.jpg",category:"Cloths",sales:5177,status:"up"},{name:"Red Beat Headphone",image:"/img/thumbs/thumb-14.jpg",category:"Devices",sales:4701,status:"down"},{name:"Apple Watch",image:"/img/thumbs/thumb-17.jpg",category:"Devices",sales:2833,status:"up"},{name:"Blue Backpack",image:"/img/thumbs/thumb-11.jpg",category:"Bags",sales:1692,status:"down"}],C=[{name:"Store Customers",data:[28,25,64,40,75,45,70]},{name:"Online Customers",data:[25,15,41,25,44,12,36]}],I=[w.lm[0],w.lm[1],w.lm[3],w.lm[5]],z=[3561,1443,2462,1693],T=["Cloths","Devices","Bags","Watches"],O=(()=>{let e=[];for(let t=0;t<z.length;t++){const s=z[t],a=T[t],r=I[t];e=[...e,{data:s,label:a,color:r}]}return e})(),P=[{id:"#5331",name:"Eileen Horton",image:"/img/avatars/thumb-1.jpg",date:1573430400,amount:677,paymentStatus:"Paid",orderStatus:"Ready"},{id:"#5328",name:"Terrance Moreno",image:"/img/avatars/thumb-2.jpg",date:1572393600,amount:1328.35,paymentStatus:"Paid",orderStatus:"Ready"},{id:"#5321",name:"Ron Vargas",image:"/img/avatars/thumb-3.jpg",date:1593949805,amount:629,paymentStatus:"Paid",orderStatus:"Shipped"},{id:"#5287",name:"Luke Cook",image:"/img/avatars/thumb-4.jpg",date:1579132800,amount:25.9,paymentStatus:"Paid",orderStatus:"Shipped"},{id:"#5351",name:"Joyce Freeman",image:"/img/avatars/thumb-5.jpg",date:1591286400,amount:817.5,paymentStatus:"Pending",orderStatus:"Ready"}];var R=s(60446),J=s.n(R),D=s(50560),W=s(22030),F=s(97508),B=s(70579);const{Option:M}=a.A,L=()=>{const{direction:e}=(0,F.d4)((e=>e.theme));return(0,B.jsx)(r.A,{children:(0,B.jsxs)(n.A,{gutter:16,children:[(0,B.jsx)(i.A,{xs:24,sm:24,md:24,lg:8,children:(0,B.jsxs)(h.A,{className:"h-100",flexDirection:"column",justifyContent:"space-between",children:[(0,B.jsxs)("div",{children:[(0,B.jsx)("h4",{className:"mb-0",children:"Weekly Revenue"}),(0,B.jsx)("span",{className:"text-muted",children:"8 - 15 Jul, 2020"})]}),(0,B.jsxs)("div",{className:"mb-4",children:[(0,B.jsx)("h1",{className:"font-weight-bold",children:"$27,188.00"}),(0,B.jsxs)("p",{className:"text-success",children:[(0,B.jsxs)("span",{children:[(0,B.jsx)(p.A,{}),(0,B.jsx)("span",{children:" 17% "})]}),(0,B.jsx)("span",{children:"growth from last week"})]}),(0,B.jsx)("p",{children:"Total gross income figure based from the date range given above."})]})]})}),(0,B.jsxs)(i.A,{xs:24,sm:24,md:24,lg:16,children:[(0,B.jsx)("div",{className:"mb-3 text-right",children:(0,B.jsx)(l.Ay,{icon:(0,B.jsx)(j.A,{}),children:"Download Report"})}),(0,B.jsx)(S.A,{card:!1,series:N.series,xAxis:N.categories,title:"Unique Visitors",height:250,type:"bar",customOptions:{colors:w.lm},direction:e})]})]})})},Y=()=>(0,B.jsxs)(n.A,{gutter:16,children:[(0,B.jsxs)(i.A,{xs:24,sm:24,md:24,lg:12,xl:12,xxl:12,children:[(0,B.jsx)(u.A,{icon:(0,B.jsx)(b.A,{}),value:"11,831",title:"Total order",color:"cyan",vertical:!0,avatarSize:55}),(0,B.jsx)(u.A,{icon:(0,B.jsx)(f.A,{}),value:"$6,922",title:"Total profit",color:"gold",vertical:!0,avatarSize:55})]}),(0,B.jsxs)(i.A,{xs:24,sm:24,md:24,lg:12,xl:12,xxl:12,children:[(0,B.jsx)(u.A,{icon:(0,B.jsx)(v.A,{}),value:"26.9%",title:"Conversion rate",color:"blue",vertical:!0,avatarSize:55}),(0,B.jsx)(u.A,{icon:(0,B.jsx)(A.A,{}),value:"873",title:"Daily visitors",color:"volcano",vertical:!0,avatarSize:55})]})]}),$=()=>(0,B.jsx)(r.A,{title:"Top Product",extra:(0,B.jsxs)(a.A,{defaultValue:"week",size:"small",style:{minWidth:110},children:[(0,B.jsx)(M,{value:"week",children:"This Week"}),(0,B.jsx)(M,{value:"month",children:"This Month"}),(0,B.jsx)(M,{value:"year",children:"This Year"})]}),children:k.map((e=>(0,B.jsxs)(h.A,{className:"w-100 py-3",justifyContent:"space-between",alignItems:"center",children:[(0,B.jsx)(m.A,{shape:"square",src:e.image,name:e.name,subTitle:e.category}),(0,B.jsx)(h.A,{children:(0,B.jsxs)("div",{className:"mr-3 text-right",children:[(0,B.jsx)("span",{className:"text-muted",children:"Sales"}),(0,B.jsxs)("div",{className:"mb-0 h5 font-weight-bold",children:[(0,B.jsx)(g.A,{prefix:"$",value:e.sales,thousandSeparator:!0,displayType:"text"}),"up"===e.status?(0,B.jsx)(p.A,{className:"text-success"}):(0,B.jsx)(y.A,{className:"text-danger"})]})]})})]},e.name)))}),H=()=>(0,B.jsx)(x.A,{series:z,labels:T,title:"Sales by Category",customOptions:{colors:I},bodyClass:"mb-2 mt-3",extra:(0,B.jsx)(n.A,{justify:"center",children:(0,B.jsx)(i.A,{xs:20,sm:20,md:20,lg:24,children:(0,B.jsx)("div",{className:"mt-4 mx-auto",style:{maxWidth:200},children:O.map((e=>(0,B.jsxs)(h.A,{alignItems:"center",justifyContent:"space-between",className:"mb-3",children:[(0,B.jsxs)(h.A,{gap:5,children:[(0,B.jsx)(o.A,{color:e.color}),(0,B.jsx)("span",{className:"text-gray-light",children:e.label})]}),(0,B.jsx)("span",{className:"font-weight-bold text-dark",children:e.data})]},e.label)))})})})}),V=()=>{const{direction:e}=(0,F.d4)((e=>e.theme));return(0,B.jsxs)(r.A,{title:"Customers",extra:(0,B.jsxs)(a.A,{defaultValue:"week",size:"small",style:{minWidth:110},children:[(0,B.jsx)(M,{value:"week",children:"This Week"}),(0,B.jsx)(M,{value:"month",children:"This Month"}),(0,B.jsx)(M,{value:"year",children:"This Year"})]}),children:[(0,B.jsxs)(h.A,{children:[(0,B.jsxs)("div",{className:"mr-5",children:[(0,B.jsx)("h2",{className:"font-weight-bold mb-1",children:"523,201"}),(0,B.jsxs)("p",{children:[(0,B.jsx)(o.A,{color:w.lm[6]}),(0,B.jsx)("span",{className:"mx-2",children:"Store Customers"})]})]}),(0,B.jsxs)("div",{children:[(0,B.jsx)("h2",{className:"font-weight-bold mb-1",children:"379,237"}),(0,B.jsxs)("p",{children:[(0,B.jsx)(o.A,{color:w.lm[0]}),(0,B.jsx)("span",{className:"mx-2",children:"Online Customers"})]})]})]}),(0,B.jsx)("div",{children:(0,B.jsx)(S.A,{card:!1,series:C,xAxis:N.categories,height:280,direction:e,customOptions:{colors:[w.lm[6],w.lm[0]],legend:{show:!1},stroke:{width:2.5,curve:"smooth"}}})})]})},E=[{title:"ID",dataIndex:"id"},{title:"Product",dataIndex:"name",render:(e,t)=>(0,B.jsx)(h.A,{children:(0,B.jsx)(m.A,{size:30,src:t.image,name:t.name})}),sorter:(e,t)=>W.A.antdTableSorter(e,t,"name")},{title:"Date",dataIndex:"date",render:(e,t)=>(0,B.jsx)("span",{children:J().unix(t.date).format(D.eL)}),sorter:(e,t)=>W.A.antdTableSorter(e,t,"date")},{title:"Order status",dataIndex:"orderStatus",render:(e,t)=>{return(0,B.jsx)(B.Fragment,{children:(0,B.jsx)(c.A,{color:(s=t.orderStatus,"Ready"===s?"blue":"Shipped"===s?"cyan":""),children:t.orderStatus})});var s},sorter:(e,t)=>W.A.antdTableSorter(e,t,"orderStatus")},{title:"Payment status",dataIndex:"paymentStatus",render:(e,t)=>{return(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)(o.A,{status:(s=t.paymentStatus,"Paid"===s?"success":"Pending"===s?"warning":"Expired"===s?"error":"")}),(0,B.jsx)("span",{className:"mx-2",children:t.paymentStatus})]});var s},sorter:(e,t)=>W.A.antdTableSorter(e,t,"paymentStatus")},{title:"Total",dataIndex:"amount",render:(e,t)=>(0,B.jsx)("span",{className:"font-weight-semibold",children:(0,B.jsx)(g.A,{displayType:"text",value:(Math.round(100*t.amount)/100).toFixed(2),prefix:"$",thousandSeparator:!0})}),sorter:(e,t)=>W.A.antdTableSorter(e,t,"amount")}],q=()=>(0,B.jsx)(r.A,{title:"Recent Order",children:(0,B.jsx)(d.A,{pagination:!1,columns:E,dataSource:P,rowKey:"id"})}),U=()=>(0,B.jsxs)(B.Fragment,{children:[(0,B.jsxs)(n.A,{gutter:16,children:[(0,B.jsx)(i.A,{xs:24,sm:24,md:24,lg:16,xl:15,xxl:14,children:(0,B.jsx)(L,{})}),(0,B.jsx)(i.A,{xs:24,sm:24,md:24,lg:8,xl:9,xxl:10,children:(0,B.jsx)(Y,{})})]}),(0,B.jsxs)(n.A,{gutter:16,children:[(0,B.jsx)(i.A,{xs:24,sm:24,md:24,lg:12,xl:12,xxl:7,children:(0,B.jsx)($,{})}),(0,B.jsx)(i.A,{xs:24,sm:24,md:24,lg:12,xl:12,xxl:7,children:(0,B.jsx)(H,{})}),(0,B.jsx)(i.A,{xs:24,sm:24,md:24,lg:24,xl:24,xxl:10,children:(0,B.jsx)(V,{})})]}),(0,B.jsx)(n.A,{gutter:16,children:(0,B.jsx)(i.A,{xs:24,sm:24,md:24,lg:24,children:(0,B.jsx)(q,{})})})]})}}]);
//# sourceMappingURL=1088.a31fa292.chunk.js.map