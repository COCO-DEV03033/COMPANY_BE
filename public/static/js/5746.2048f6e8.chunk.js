(self.webpackChunkSelfie_Admin=self.webpackChunkSelfie_Admin||[]).push([[5746],{76396:(e,t,a)=>{"use strict";a.d(t,{A:()=>o});a(65043);var r=a(2761),n=a(70579);const s=e=>(0,n.jsx)(r.A,{...e,className:"ant-avatar-".concat(e.type),children:e.text}),o=e=>{const{name:t,suffix:a,subTitle:r,id:o,type:i,src:l,icon:c,size:d,shape:u,gap:m,text:h,onNameClick:g}=e;return(0,n.jsxs)("div",{className:"avatar-status d-flex align-items-center",children:[s({icon:c,src:l,type:i,size:d,shape:u,gap:m,text:h}),(0,n.jsxs)("div",{className:"ml-2",children:[(0,n.jsxs)("div",{children:[g?(0,n.jsx)("div",{onClick:()=>g({name:t,subTitle:r,src:l,id:o}),className:"avatar-status-name clickable",children:t}):(0,n.jsx)("div",{className:"avatar-status-name",children:t}),(0,n.jsx)("span",{children:a})]}),(0,n.jsx)("div",{className:"text-muted avatar-status-subtitle",children:r})]})]})}},30126:(e,t,a)=>{"use strict";a.r(t),a.d(t,{LegalDocument:()=>$,default:()=>D});var r=a(65043),n=a(40854),s=a.n(n),o=a(15546),i=a(85578),l=a(96651),c=a(76399),d=a(87021),u=a(89073),m=a(30703),h=a(63942),g=a(48943),f=a(74040),p=a(76191),b=a(60446),y=a.n(b),v=a(76396),x=(a(94742),a(70579));const{Header:w,Footer:S,Sider:k,Content:C}=o.A,{TextArea:j}=i.A;class $ extends r.Component{constructor(){super(...arguments),this.state={users:[],userProfileVisible:!1,selectedUser:null,isModalOpen:!1,radioValue:"",rejectReasonValue:""},this.handleStatus=(e,t)=>{this.setState((a=>({users:a.users.map((a=>a._id===e._id?{...a,legalDocStatus:t,legalDocStatusComment:this.state.rejectReasonValue}:a))})))},this.handleRejectReason=(e,t)=>{this.setState((a=>({users:a.users.map((a=>a.id===e.id?{...a,rejectReason:t}:a))})))},this.showModal=e=>{console.log(e.status),this.setState({isModalOpen:!0,selectedUser:e,radioValue:e.legalDocStatus,rejectReasonValue:e.legalDocStatusComment})},this.handleOk=()=>{this.setState({isModalOpen:!1}),s().post("http://localhost:5000/api/management/changeLegalDocStatus",{...this.state.selectedUser,legalDocStatus:this.state.radioValue,legalDocStatusComment:this.state.rejectReasonValue}).then((e=>{this.handleStatus(this.state.selectedUser,this.state.radioValue),console.log(e.data)})).catch((e=>{console.log(e)}))},this.handleCancel=()=>{this.setState({isModalOpen:!1})},this.handleStatusChange=(e,t)=>{const a=[...this.state.lists];a[e]=t,this.setState({lists:a}),console.log(this.state.lists)},this.onChangeRadio=e=>{console.log("radio checked",e.target.value),this.setState({radioValue:e.target.value}),this.handleStatus(this.state.selectedUser,this.state.radioValue)},this.onChangeRejectReason=e=>{this.setState({rejectReasonValue:e.target.value}),this.handleRejectReason(this.state.selectedUser,this.state.rejectReasonValue)}}componentDidMount(){s().get("http://localhost:5000/api/management/allUsers").then((e=>{this.setState({users:e.data.allUser})}))}render(){var e;const{users:t,userProfileVisible:a,selectedUser:r}=this.state,n=[{title:"User",dataIndex:"name",render:(e,t)=>(0,x.jsx)("div",{className:"d-flex",children:(0,x.jsx)(v.A,{src:""!==t.avatar?t.avatar:"/img/avatars/default.png",name:t.firstname+" "+t.lastname,subTitle:t.email})}),sorter:{compare:(e,t)=>(e=e.firstname.toLowerCase())>(t=t.firstname.toLowerCase())?-1:t>e?1:0}},{title:"Last online",dataIndex:"lastOnline",render:e=>(0,x.jsxs)("span",{children:[y().unix(e).format("MM/DD/YYYY")," "]}),sorter:(e,t)=>y()(e.lastOnline).unix()-y()(t.lastOnline).unix()},{title:"Status",dataIndex:"status",render:(e,t)=>!1===t.legalDocStatus?(0,x.jsx)(l.A,{title:t.legalDocStatusComment,children:(0,x.jsx)(c.A,{className:"text-capitalize",color:"red",children:"rejected"})}):(0,x.jsx)(c.A,{className:"text-capitalize",color:!0===t.legalDocStatus?"cyan":"orange",children:!0===t.legalDocStatus?"approved":"pending"}),sorter:{compare:(e,t)=>e.legalDocStatus.length-t.legalDocStatus.length}},{title:"Actions",dataIndex:"actions",render:(e,t)=>(0,x.jsx)("div",{className:"text-right d-flex justify-content-end",children:(0,x.jsx)(l.A,{title:"View",children:(0,x.jsx)(d.Ay,{type:"primary",className:"mr-2",icon:(0,x.jsx)(p.A,{}),onClick:()=>this.showModal(t),size:"small"})})})}];return(0,x.jsxs)(u.A,{bodyStyle:{padding:"0px"},children:[(0,x.jsx)("div",{className:"table-responsive",children:(0,x.jsx)(m.A,{columns:n,dataSource:t,rowKey:"id"})}),(0,x.jsx)(h.A,{open:this.state.isModalOpen,onOk:this.handleOk,onCancel:this.handleCancel,okButtonProps:{disabled:!1===this.state.radioValue&&""===this.state.rejectReasonValue},centered:!0,width:"60%",children:(0,x.jsxs)(o.A,{children:[(0,x.jsx)(w,{style:{padding:"0 20px"},children:(0,x.jsx)("p",{style:{fontSize:"28px",marginBottom:"0px"},children:"Legal Document"})}),(0,x.jsxs)(C,{style:{padding:"0 50px",background:"none"},children:[(0,x.jsx)(g.A,{style:{marginBottom:"10px"},children:(0,x.jsx)("embed",{src:null===(e=this.state.selectedUser)||void 0===e?void 0:e.legalDocUrl,style:{width:"100%",height:"100%",border:"none"}})}),(0,x.jsx)(g.A,{style:{margin:"20px"},children:(0,x.jsxs)(f.Ay.Group,{onChange:this.onChangeRadio,value:this.state.radioValue,children:[(0,x.jsx)(f.Ay,{value:!0,children:"Approve"}),(0,x.jsx)(f.Ay,{value:!1,children:"Reject"})]})}),!1===this.state.radioValue?(0,x.jsx)(j,{value:this.state.rejectReasonValue,onChange:this.onChangeRejectReason,placeholder:"Please enter the reject reason.",autoSize:{minRows:3,maxRows:5}}):null]})]})})]})}}const D=$},12499:(e,t,a)=>{"use strict";a.d(t,{A:()=>l});var r=a(58168),n=a(65043);const s={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 01-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z"}}]},name:"check-circle",theme:"filled"};var o=a(51835),i=function(e,t){return n.createElement(o.A,(0,r.A)({},e,{ref:t,icon:s}))};const l=n.forwardRef(i)},63390:(e,t,a)=>{"use strict";a.d(t,{A:()=>l});var r=a(58168),n=a(65043);const s={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"}}]},name:"check",theme:"outlined"};var o=a(51835),i=function(e,t){return n.createElement(o.A,(0,r.A)({},e,{ref:t,icon:s}))};const l=n.forwardRef(i)},51376:(e,t,a)=>{"use strict";a.d(t,{A:()=>l});var r=a(58168),n=a(65043);const s={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm-32 232c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V296zm32 440a48.01 48.01 0 010-96 48.01 48.01 0 010 96z"}}]},name:"exclamation-circle",theme:"filled"};var o=a(51835),i=function(e,t){return n.createElement(o.A,(0,r.A)({},e,{ref:t,icon:s}))};const l=n.forwardRef(i)},13888:(e,t,a)=>{"use strict";a.d(t,{A:()=>l});var r=a(58168),n=a(65043);const s={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm32 664c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272zm-32-344a48.01 48.01 0 010-96 48.01 48.01 0 010 96z"}}]},name:"info-circle",theme:"filled"};var o=a(51835),i=function(e,t){return n.createElement(o.A,(0,r.A)({},e,{ref:t,icon:s}))};const l=n.forwardRef(i)},15546:(e,t,a)=>{"use strict";a.d(t,{A:()=>$});var r=a(60436),n=a(65043),s=a(98139),o=a.n(s),i=a(18574),l=a(35296),c=a(26396),d=a(62149),u=a(46090);var m=a(99310),h=a(41383);const g=e=>{const{componentCls:t,bodyBg:a,lightSiderBg:r,lightTriggerBg:n,lightTriggerColor:s}=e;return{["".concat(t,"-sider-light")]:{background:r,["".concat(t,"-sider-trigger")]:{color:s,background:n},["".concat(t,"-sider-zero-width-trigger")]:{color:s,background:n,border:"1px solid ".concat(a),borderInlineStart:0}}}},f=e=>{const{antCls:t,componentCls:a,colorText:r,triggerColor:n,footerBg:s,triggerBg:o,headerHeight:i,headerPadding:l,headerColor:c,footerPadding:d,triggerHeight:u,zeroTriggerHeight:h,zeroTriggerWidth:f,motionDurationMid:p,motionDurationSlow:b,fontSize:y,borderRadius:v,bodyBg:x,headerBg:w,siderBg:S}=e;return{[a]:Object.assign(Object.assign({display:"flex",flex:"auto",flexDirection:"column",minHeight:0,background:x,"&, *":{boxSizing:"border-box"},["&".concat(a,"-has-sider")]:{flexDirection:"row",["> ".concat(a,", > ").concat(a,"-content")]:{width:0}},["".concat(a,"-header, &").concat(a,"-footer")]:{flex:"0 0 auto"},["".concat(a,"-sider")]:{position:"relative",minWidth:0,background:S,transition:"all ".concat(p,", background 0s"),"&-children":{height:"100%",marginTop:-.1,paddingTop:.1,["".concat(t,"-menu").concat(t,"-menu-inline-collapsed")]:{width:"auto"}},"&-has-trigger":{paddingBottom:u},"&-right":{order:1},"&-trigger":{position:"fixed",bottom:0,zIndex:1,height:u,color:n,lineHeight:(0,m.zA)(u),textAlign:"center",background:o,cursor:"pointer",transition:"all ".concat(p)},"&-zero-width":{"> *":{overflow:"hidden"},"&-trigger":{position:"absolute",top:i,insetInlineEnd:e.calc(f).mul(-1).equal(),zIndex:1,width:f,height:h,color:n,fontSize:e.fontSizeXL,display:"flex",alignItems:"center",justifyContent:"center",background:S,borderStartStartRadius:0,borderStartEndRadius:v,borderEndEndRadius:v,borderEndStartRadius:0,cursor:"pointer",transition:"background ".concat(b," ease"),"&::after":{position:"absolute",inset:0,background:"transparent",transition:"all ".concat(b),content:'""'},"&:hover::after":{background:"rgba(255, 255, 255, 0.2)"},"&-right":{insetInlineStart:e.calc(f).mul(-1).equal(),borderStartStartRadius:v,borderStartEndRadius:0,borderEndEndRadius:0,borderEndStartRadius:v}}}}},g(e)),{"&-rtl":{direction:"rtl"}}),["".concat(a,"-header")]:{height:i,padding:l,color:c,lineHeight:(0,m.zA)(i),background:w,["".concat(t,"-menu")]:{lineHeight:"inherit"}},["".concat(a,"-footer")]:{padding:d,color:r,fontSize:y,background:s},["".concat(a,"-content")]:{flex:"auto",color:r,minHeight:0}}},p=(0,h.OF)("Layout",(e=>[f(e)]),(e=>{const{colorBgLayout:t,controlHeight:a,controlHeightLG:r,colorText:n,controlHeightSM:s,marginXXS:o,colorTextLightSolid:i,colorBgContainer:l}=e,c=1.25*r;return{colorBgHeader:"#001529",colorBgBody:t,colorBgTrigger:"#002140",bodyBg:t,headerBg:"#001529",headerHeight:2*a,headerPadding:"0 ".concat(c,"px"),headerColor:n,footerPadding:"".concat(s,"px ").concat(c,"px"),footerBg:t,siderBg:"#001529",triggerHeight:r+2*o,triggerBg:"#002140",triggerColor:i,zeroTriggerWidth:r,zeroTriggerHeight:r,lightSiderBg:l,lightTriggerBg:l,lightTriggerColor:n}}),{deprecatedTokens:[["colorBgBody","bodyBg"],["colorBgHeader","headerBg"],["colorBgTrigger","triggerBg"]]});var b=function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var n=0;for(r=Object.getOwnPropertySymbols(e);n<r.length;n++)t.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(a[r[n]]=e[r[n]])}return a};function y(e){let{suffixCls:t,tagName:a,displayName:r}=e;return e=>n.forwardRef(((r,s)=>n.createElement(e,Object.assign({ref:s,suffixCls:t,tagName:a},r))))}const v=n.forwardRef(((e,t)=>{const{prefixCls:a,suffixCls:r,className:s,tagName:i}=e,c=b(e,["prefixCls","suffixCls","className","tagName"]),{getPrefixCls:d}=n.useContext(l.QO),u=d("layout",a),[m,h,g]=p(u),f=r?"".concat(u,"-").concat(r):u;return m(n.createElement(i,Object.assign({className:o()(a||f,s,h,g),ref:t},c)))})),x=n.forwardRef(((e,t)=>{const{direction:a}=n.useContext(l.QO),[s,m]=n.useState([]),{prefixCls:h,className:g,rootClassName:f,children:y,hasSider:v,tagName:x,style:w}=e,S=b(e,["prefixCls","className","rootClassName","children","hasSider","tagName","style"]),k=(0,i.A)(S,["suffixCls"]),{getPrefixCls:C,layout:j}=n.useContext(l.QO),$=C("layout",h),D=function(e,t,a){return"boolean"===typeof a?a:!!e.length||(0,d.A)(t).some((e=>e.type===u.A))}(s,y,v),[M,O,N]=p($),A=o()($,{["".concat($,"-has-sider")]:D,["".concat($,"-rtl")]:"rtl"===a},null===j||void 0===j?void 0:j.className,g,f,O,N),R=n.useMemo((()=>({siderHook:{addSider:e=>{m((t=>[].concat((0,r.A)(t),[e])))},removeSider:e=>{m((t=>t.filter((t=>t!==e))))}}})),[]);return M(n.createElement(c.M.Provider,{value:R},n.createElement(x,Object.assign({ref:t,className:A,style:Object.assign(Object.assign({},null===j||void 0===j?void 0:j.style),w)},k),y)))})),w=y({tagName:"div",displayName:"Layout"})(x),S=y({suffixCls:"header",tagName:"header",displayName:"Header"})(v),k=y({suffixCls:"footer",tagName:"footer",displayName:"Footer"})(v),C=y({suffixCls:"content",tagName:"main",displayName:"Content"})(v),j=w;j.Header=S,j.Footer=k,j.Content=C,j.Sider=u.A,j._InternalSiderContext=u.P;const $=j},75270:(e,t,a)=>{"use strict";var r=a(40139),n={"text/plain":"Text","text/html":"Url",default:"Text"};e.exports=function(e,t){var a,s,o,i,l,c,d=!1;t||(t={}),a=t.debug||!1;try{if(o=r(),i=document.createRange(),l=document.getSelection(),(c=document.createElement("span")).textContent=e,c.ariaHidden="true",c.style.all="unset",c.style.position="fixed",c.style.top=0,c.style.clip="rect(0, 0, 0, 0)",c.style.whiteSpace="pre",c.style.webkitUserSelect="text",c.style.MozUserSelect="text",c.style.msUserSelect="text",c.style.userSelect="text",c.addEventListener("copy",(function(r){if(r.stopPropagation(),t.format)if(r.preventDefault(),"undefined"===typeof r.clipboardData){a&&console.warn("unable to use e.clipboardData"),a&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var s=n[t.format]||n.default;window.clipboardData.setData(s,e)}else r.clipboardData.clearData(),r.clipboardData.setData(t.format,e);t.onCopy&&(r.preventDefault(),t.onCopy(r.clipboardData))})),document.body.appendChild(c),i.selectNodeContents(c),l.addRange(i),!document.execCommand("copy"))throw new Error("copy command was unsuccessful");d=!0}catch(u){a&&console.error("unable to copy using execCommand: ",u),a&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),d=!0}catch(u){a&&console.error("unable to copy using clipboardData: ",u),a&&console.error("falling back to prompt"),s=function(e){var t=(/mac os x/i.test(navigator.userAgent)?"\u2318":"Ctrl")+"+C";return e.replace(/#{\s*key\s*}/g,t)}("message"in t?t.message:"Copy to clipboard: #{key}, Enter"),window.prompt(s,e)}}finally{l&&("function"==typeof l.removeRange?l.removeRange(i):l.removeAllRanges()),c&&document.body.removeChild(c),o()}return d}},60446:function(e){e.exports=function(){"use strict";var e=1e3,t=6e4,a=36e5,r="millisecond",n="second",s="minute",o="hour",i="day",l="week",c="month",d="quarter",u="year",m="date",h="Invalid Date",g=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,f=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,p={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],a=e%100;return"["+e+(t[(a-20)%10]||t[a]||t[0])+"]"}},b=function(e,t,a){var r=String(e);return!r||r.length>=t?e:""+Array(t+1-r.length).join(a)+e},y={s:b,z:function(e){var t=-e.utcOffset(),a=Math.abs(t),r=Math.floor(a/60),n=a%60;return(t<=0?"+":"-")+b(r,2,"0")+":"+b(n,2,"0")},m:function e(t,a){if(t.date()<a.date())return-e(a,t);var r=12*(a.year()-t.year())+(a.month()-t.month()),n=t.clone().add(r,c),s=a-n<0,o=t.clone().add(r+(s?-1:1),c);return+(-(r+(a-n)/(s?n-o:o-n))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:c,y:u,w:l,d:i,D:m,h:o,m:s,s:n,ms:r,Q:d}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},v="en",x={};x[v]=p;var w="$isDayjsObject",S=function(e){return e instanceof $||!(!e||!e[w])},k=function e(t,a,r){var n;if(!t)return v;if("string"==typeof t){var s=t.toLowerCase();x[s]&&(n=s),a&&(x[s]=a,n=s);var o=t.split("-");if(!n&&o.length>1)return e(o[0])}else{var i=t.name;x[i]=t,n=i}return!r&&n&&(v=n),n||!r&&v},C=function(e,t){if(S(e))return e.clone();var a="object"==typeof t?t:{};return a.date=e,a.args=arguments,new $(a)},j=y;j.l=k,j.i=S,j.w=function(e,t){return C(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var $=function(){function p(e){this.$L=k(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[w]=!0}var b=p.prototype;return b.parse=function(e){this.$d=function(e){var t=e.date,a=e.utc;if(null===t)return new Date(NaN);if(j.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var r=t.match(g);if(r){var n=r[2]-1||0,s=(r[7]||"0").substring(0,3);return a?new Date(Date.UTC(r[1],n,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],n,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(t)}(e),this.init()},b.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},b.$utils=function(){return j},b.isValid=function(){return!(this.$d.toString()===h)},b.isSame=function(e,t){var a=C(e);return this.startOf(t)<=a&&a<=this.endOf(t)},b.isAfter=function(e,t){return C(e)<this.startOf(t)},b.isBefore=function(e,t){return this.endOf(t)<C(e)},b.$g=function(e,t,a){return j.u(e)?this[t]:this.set(a,e)},b.unix=function(){return Math.floor(this.valueOf()/1e3)},b.valueOf=function(){return this.$d.getTime()},b.startOf=function(e,t){var a=this,r=!!j.u(t)||t,d=j.p(e),h=function(e,t){var n=j.w(a.$u?Date.UTC(a.$y,t,e):new Date(a.$y,t,e),a);return r?n:n.endOf(i)},g=function(e,t){return j.w(a.toDate()[e].apply(a.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(t)),a)},f=this.$W,p=this.$M,b=this.$D,y="set"+(this.$u?"UTC":"");switch(d){case u:return r?h(1,0):h(31,11);case c:return r?h(1,p):h(0,p+1);case l:var v=this.$locale().weekStart||0,x=(f<v?f+7:f)-v;return h(r?b-x:b+(6-x),p);case i:case m:return g(y+"Hours",0);case o:return g(y+"Minutes",1);case s:return g(y+"Seconds",2);case n:return g(y+"Milliseconds",3);default:return this.clone()}},b.endOf=function(e){return this.startOf(e,!1)},b.$set=function(e,t){var a,l=j.p(e),d="set"+(this.$u?"UTC":""),h=(a={},a[i]=d+"Date",a[m]=d+"Date",a[c]=d+"Month",a[u]=d+"FullYear",a[o]=d+"Hours",a[s]=d+"Minutes",a[n]=d+"Seconds",a[r]=d+"Milliseconds",a)[l],g=l===i?this.$D+(t-this.$W):t;if(l===c||l===u){var f=this.clone().set(m,1);f.$d[h](g),f.init(),this.$d=f.set(m,Math.min(this.$D,f.daysInMonth())).$d}else h&&this.$d[h](g);return this.init(),this},b.set=function(e,t){return this.clone().$set(e,t)},b.get=function(e){return this[j.p(e)]()},b.add=function(r,d){var m,h=this;r=Number(r);var g=j.p(d),f=function(e){var t=C(h);return j.w(t.date(t.date()+Math.round(e*r)),h)};if(g===c)return this.set(c,this.$M+r);if(g===u)return this.set(u,this.$y+r);if(g===i)return f(1);if(g===l)return f(7);var p=(m={},m[s]=t,m[o]=a,m[n]=e,m)[g]||1,b=this.$d.getTime()+r*p;return j.w(b,this)},b.subtract=function(e,t){return this.add(-1*e,t)},b.format=function(e){var t=this,a=this.$locale();if(!this.isValid())return a.invalidDate||h;var r=e||"YYYY-MM-DDTHH:mm:ssZ",n=j.z(this),s=this.$H,o=this.$m,i=this.$M,l=a.weekdays,c=a.months,d=a.meridiem,u=function(e,a,n,s){return e&&(e[a]||e(t,r))||n[a].slice(0,s)},m=function(e){return j.s(s%12||12,e,"0")},g=d||function(e,t,a){var r=e<12?"AM":"PM";return a?r.toLowerCase():r};return r.replace(f,(function(e,r){return r||function(e){switch(e){case"YY":return String(t.$y).slice(-2);case"YYYY":return j.s(t.$y,4,"0");case"M":return i+1;case"MM":return j.s(i+1,2,"0");case"MMM":return u(a.monthsShort,i,c,3);case"MMMM":return u(c,i);case"D":return t.$D;case"DD":return j.s(t.$D,2,"0");case"d":return String(t.$W);case"dd":return u(a.weekdaysMin,t.$W,l,2);case"ddd":return u(a.weekdaysShort,t.$W,l,3);case"dddd":return l[t.$W];case"H":return String(s);case"HH":return j.s(s,2,"0");case"h":return m(1);case"hh":return m(2);case"a":return g(s,o,!0);case"A":return g(s,o,!1);case"m":return String(o);case"mm":return j.s(o,2,"0");case"s":return String(t.$s);case"ss":return j.s(t.$s,2,"0");case"SSS":return j.s(t.$ms,3,"0");case"Z":return n}return null}(e)||n.replace(":","")}))},b.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},b.diff=function(r,m,h){var g,f=this,p=j.p(m),b=C(r),y=(b.utcOffset()-this.utcOffset())*t,v=this-b,x=function(){return j.m(f,b)};switch(p){case u:g=x()/12;break;case c:g=x();break;case d:g=x()/3;break;case l:g=(v-y)/6048e5;break;case i:g=(v-y)/864e5;break;case o:g=v/a;break;case s:g=v/t;break;case n:g=v/e;break;default:g=v}return h?g:j.a(g)},b.daysInMonth=function(){return this.endOf(c).$D},b.$locale=function(){return x[this.$L]},b.locale=function(e,t){if(!e)return this.$L;var a=this.clone(),r=k(e,t,!0);return r&&(a.$L=r),a},b.clone=function(){return j.w(this.$d,this)},b.toDate=function(){return new Date(this.valueOf())},b.toJSON=function(){return this.isValid()?this.toISOString():null},b.toISOString=function(){return this.$d.toISOString()},b.toString=function(){return this.$d.toUTCString()},p}(),D=$.prototype;return C.prototype=D,[["$ms",r],["$s",n],["$m",s],["$H",o],["$W",i],["$M",c],["$y",u],["$D",m]].forEach((function(e){D[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),C.extend=function(e,t){return e.$i||(e(t,$,C),e.$i=!0),C},C.locale=k,C.isDayjs=S,C.unix=function(e){return C(1e3*e)},C.en=x[v],C.Ls=x,C.p={},C}()},40139:e=>{e.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,a=[],r=0;r<e.rangeCount;r++)a.push(e.getRangeAt(r));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||a.forEach((function(t){e.addRange(t)})),t&&t.focus()}}},94742:e=>{"use strict";e.exports=JSON.parse('[{"id":"eileenHorton-1153","name":"Eileen Horton","email":"eileen_h@hotmail.com","img":"/img/avatars/thumb-1.jpg","role":"Admin","lastOnline":1573430400,"status":"pending","personalInfo":{"location":"New York, US","title":"Product Manager","birthday":"10/10/1992","phoneNumber":"+12-123-1234","facebook":"facebook.com/sample","twitter":"twitter.com/sample","instagram":"instagram.com/sample","site":"samplesite.com"},"rejectReason":""},{"id":"terranceMoreno-1322","name":"Terrance Moreno","email":"","img":"/img/avatars/thumb-2.jpg","role":"User","lastOnline":1572393600,"status":"pending","personalInfo":{"location":"New York, US","title":"Software Engineer","birthday":"03/02/1984","phoneNumber":"+12-123-1234","facebook":"facebook.com/sample","twitter":"twitter.com/sample","instagram":"instagram.com/sample","site":"samplesite.com"}},{"id":"ronVargas7653","name":"Ron Vargas","email":"ronnie_vergas@infotech.io","img":"/img/avatars/thumb-3.jpg","role":"User","lastOnline":1572393600,"status":"blocked","personalInfo":{"location":"New York, US","title":"UI/UX Designer","birthday":"07/11/1987","phoneNumber":"+12-123-1234","facebook":"facebook.com/sample","twitter":"twitter.com/sample","instagram":"instagram.com/sample","site":"samplesite.com"}},{"id":"lukeCook4721","name":"Luke Cook","email":"cookie_lukie@hotmail.com","img":"/img/avatars/thumb-4.jpg","role":"Admin","lastOnline":1579132800,"status":"active","personalInfo":{"location":"New York, US","title":"HR Executive","birthday":"07/11/1987","phoneNumber":"+12-123-1234","facebook":"facebook.com/sample","twitter":"twitter.com/sample","instagram":"instagram.com/sample","site":"samplesite.com"}},{"id":"joyceFreeman1384","name":"Joyce Freeman","email":"joyce991@infotech.io","img":"/img/avatars/thumb-5.jpg","role":"User","lastOnline":1582416000,"status":"active","personalInfo":{"location":"New York, US","title":"Frontend Developer","birthday":"17/11/1993","phoneNumber":"+12-123-1234","facebook":"facebook.com/sample","twitter":"twitter.com/sample","instagram":"instagram.com/sample","site":"samplesite.com"}},{"id":"samanthaPhillips8493","name":"Samantha Phillips","email":"samanthaphil@infotech.io","img":"/img/avatars/thumb-6.jpg","role":"User","lastOnline":1583107200,"status":"active","personalInfo":{"location":"London, UK","title":"Compliance Manager","birthday":"17/11/1993","phoneNumber":"+12-123-1234","facebook":"facebook.com/sample","twitter":"twitter.com/sample","instagram":"instagram.com/sample","site":"samplesite.com"}},{"id":"taraFletcher1263","name":"Tara Fletcher","email":"taratarara@imaze.edu.du","img":"/img/avatars/thumb-7.jpg","role":"User","lastOnline":1582761600,"status":"active","personalInfo":{"location":"London, UK","title":"Compliance Manager","birthday":"17/11/1993","phoneNumber":"+12-123-1234","facebook":"facebook.com/sample","twitter":"twitter.com/sample","instagram":"instagram.com/sample","site":"samplesite.com"}},{"id":"frederickAdams6532","name":"Frederick Adams","email":"iamfred@imaze.infotech.io","img":"/img/avatars/thumb-8.jpg","role":"User","lastOnline":1579219200,"status":"blocked","personalInfo":{"location":"London, UK","title":"Compliance Manager","birthday":"17/11/1993","phoneNumber":"+12-123-1234","facebook":"facebook.com/sample","twitter":"twitter.com/sample","instagram":"instagram.com/sample","site":"samplesite.com"}},{"id":"carolynHanson7953","name":"Carolyn Hanson","email":"carolyn_h@gmail.com","img":"/img/avatars/thumb-9.jpg","role":"User","lastOnline":1584489600,"status":"blocked","personalInfo":{"location":"Texas, US","title":"Compliance Manager","birthday":"03/06/1991","phoneNumber":"+12-123-1234","facebook":"facebook.com/sample","twitter":"twitter.com/sample","instagram":"instagram.com/sample","site":"samplesite.com"}},{"id":"brittanyHale3683","name":"Brittany Hale","email":"brittany1134@gmail.com","img":"/img/avatars/thumb-10.jpg","role":"User","lastOnline":1583452800,"status":"active","personalInfo":{"location":"Texas, US","title":"Compliance Manager","birthday":"03/06/1991","phoneNumber":"+12-123-1234","facebook":"facebook.com/sample","twitter":"twitter.com/sample","instagram":"instagram.com/sample","site":"samplesite.com"}},{"id":"lloydObrien1564","name":"Lloyd Obrien","email":"handsome-obrien@hotmail.com","img":"/img/avatars/thumb-11.jpg","role":"User","lastOnline":1584576000,"status":"active","personalInfo":{"location":"London, UK","title":"Software Engineer","birthday":"03/06/1991","phoneNumber":"+12-123-1234","facebook":"facebook.com/sample","twitter":"twitter.com/sample","instagram":"instagram.com/sample","site":"samplesite.com"}},{"id":"gabriellaMay2850","name":"Gabriella May","email":"maymaymay12@infotech.io","img":"/img/avatars/thumb-12.jpg","role":"User","lastOnline":1574208000,"status":"blocked","personalInfo":{"location":"London, UK","title":"Software Engineer","birthday":"03/06/1991","phoneNumber":"+12-123-1234","facebook":"facebook.com/sample","twitter":"twitter.com/sample","instagram":"instagram.com/sample","site":"samplesite.com"}},{"id":"leeWheeler1941","name":"Lee Wheeler","email":"","img":"/img/avatars/thumb-13.jpg","role":"User","lastOnline":1586649600,"status":"active","personalInfo":{"location":"London, UK","title":"Software Engineer","birthday":"03/06/1991","phoneNumber":"+12-123-1234","facebook":"facebook.com/sample","twitter":"twitter.com/sample","instagram":"instagram.com/sample","site":"samplesite.com"}},{"id":"gailBarnes7615","name":"Gail Barnes","email":"gailby0116@infotech.io","img":"/img/avatars/thumb-14.jpg","role":"User","lastOnline":1583020800,"status":"active","personalInfo":{"location":"London, UK","title":"Software Engineer","birthday":"03/06/1991","phoneNumber":"+12-123-1234","facebook":"facebook.com/sample","twitter":"twitter.com/sample","instagram":"instagram.com/sample","site":"samplesite.com"}},{"id":"ellaRobinson1093","name":"Ella Robinson","email":"ella_robinson@infotech.io","img":"/img/avatars/thumb-15.jpg","role":"User","lastOnline":1586217600,"status":"active","personalInfo":{"location":"London, UK","title":"Software Engineer","birthday":"03/06/1991","phoneNumber":"+12-123-1234","facebook":"facebook.com/sample","twitter":"twitter.com/sample","instagram":"instagram.com/sample","site":"samplesite.com"}}]')}}]);
//# sourceMappingURL=5746.2048f6e8.chunk.js.map