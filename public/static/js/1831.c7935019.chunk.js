(self.webpackChunkSelfie_Admin=self.webpackChunkSelfie_Admin||[]).push([[1831],{76396:(e,t,a)=>{"use strict";a.d(t,{A:()=>i});a(65043);var s=a(2761),n=a(70579);const r=e=>(0,n.jsx)(s.A,{...e,className:"ant-avatar-".concat(e.type),children:e.text}),i=e=>{const{name:t,suffix:a,subTitle:s,id:i,type:o,src:l,icon:c,size:m,shape:u,gap:d,text:h,onNameClick:p}=e;return(0,n.jsxs)("div",{className:"avatar-status d-flex align-items-center",children:[r({icon:c,src:l,type:o,size:m,shape:u,gap:d,text:h}),(0,n.jsxs)("div",{className:"ml-2",children:[(0,n.jsxs)("div",{children:[p?(0,n.jsx)("div",{onClick:()=>p({name:t,subTitle:s,src:l,id:i}),className:"avatar-status-name clickable",children:t}):(0,n.jsx)("div",{className:"avatar-status-name",children:t}),(0,n.jsx)("span",{children:a})]}),(0,n.jsx)("div",{className:"text-muted avatar-status-subtitle",children:s})]})]})}},90792:(e,t,a)=>{"use strict";a.r(t),a.d(t,{PaymentInfo:()=>C,default:()=>U});var s=a(65043),n=a(40854),r=a.n(n),i=a(15546),o=a(85578),l=a(16569),c=a(96651),m=a(76399),u=a(87021),d=a(89073),h=a(30703),p=a(63942),f=a(48943),g=a(22474),y=a(74040),b=a(76191),v=a(60446),x=a.n(v),w=a(76396),S=a(94742),j=a(70579);const{Header:k,Footer:$,Sider:M,Content:D}=i.A,{TextArea:A}=o.A;class C extends s.Component{constructor(){super(...arguments),this.state={users:S,userProfileVisible:!1,selectedUser:null,isModalOpen:!1,radioValue:null,rejectReasonValue:""},this.handleStatus=(e,t)=>{this.setState((a=>({users:a.users.map(((a,s)=>a._id===e._id?(console.log(a,e._id,this.state.rejectReasonValue),{...a,paymentStatus:t,paymentStatusComment:this.state.rejectReasonValue}):a))})))},this.handleRejectReason=(e,t)=>{this.setState((a=>({users:a.users.map((a=>a.id===e.id?{...a,rejectReason:t}:a))})))},this.showModal=e=>{var t;console.log(e.status),this.setState({isModalOpen:!0,selectedUser:e,radioValue:e.paymentStatus,rejectReasonValue:null!==(t=e.paymentStatusComment)&&void 0!==t?t:""})},this.handleOk=()=>{this.setState({selectedUser:{...this.state.selectedUser,paymentStatus:this.state.radioValue,paymentStatusComment:this.state.rejectReasonValue},isModalOpen:!1}),r().post("http://localhost:5000/api/management/changePaymentStatus",{...this.state.selectedUser,paymentStatus:this.state.radioValue,paymentStatusComment:this.state.rejectReasonValue}).then((e=>{this.handleStatus(this.state.selectedUser,this.state.radioValue),console.log(e.data)})).catch((e=>{console.log(e)}))},this.handleCancel=()=>{this.setState({isModalOpen:!1})},this.deleteUser=e=>{this.setState({users:this.state.users.filter((t=>t.id!==e))}),l.Ay.success({content:"Deleted user ".concat(e),duration:2})},this.handleStatusChange=(e,t)=>{const a=[...this.state.lists];a[e]=t,this.setState({lists:a}),console.log(this.state.lists)},this.onChangeRadio=e=>{console.log("radio checked",e.target.value),this.setState({radioValue:e.target.value})},this.onChangeRejectReason=e=>{this.setState({rejectReasonValue:e.target.value}),this.handleRejectReason(this.state.selectedUser,this.state.rejectReasonValue)}}componentDidMount(){r().get("http://localhost:5000/api/management/allUsers").then((e=>{this.setState({users:e.data.allUser})}))}render(){var e,t,a,s,n,r;const{users:o,userProfileVisible:l,selectedUser:v}=this.state,S=[{title:"User",dataIndex:"name",render:(e,t)=>(0,j.jsx)("div",{className:"d-flex",children:(0,j.jsx)(w.A,{src:""!==t.avatar?t.avatar:"/img/avatars/default.png",name:t.firstname+" "+t.lastname,subTitle:t.email})}),sorter:{compare:(e,t)=>(e=e.firstname.toLowerCase())>(t=t.firstname.toLowerCase())?-1:t>e?1:0}},{title:"Last online",dataIndex:"lastOnline",render:e=>(0,j.jsxs)("span",{children:[x().unix(e).format("MM/DD/YYYY")," "]}),sorter:(e,t)=>x()(e.lastOnline).unix()-x()(t.lastOnline).unix()},{title:"Status",dataIndex:"status",render:(e,t)=>!1===t.paymentStatus?(0,j.jsx)(c.A,{title:t.paymentStatusComment,children:(0,j.jsx)(m.A,{className:"text-capitalize",color:"red",children:"rejected"})}):(0,j.jsx)(m.A,{className:"text-capitalize",color:!0===t.paymentStatus?"cyan":"orange",children:!0===t.paymentStatus?"approved":"pending"}),sorter:{compare:(e,t)=>e.paymentStatus.length-t.paymentStatus.length}},{title:"Actions",dataIndex:"actions",render:(e,t)=>(0,j.jsx)("div",{className:"text-right d-flex justify-content-end",children:(0,j.jsx)(c.A,{title:"View",children:(0,j.jsx)(u.Ay,{type:"primary",className:"mr-2",icon:(0,j.jsx)(b.A,{}),onClick:()=>this.showModal(t),size:"small"})})})}];return(0,j.jsxs)(d.A,{bodyStyle:{padding:"0px"},children:[(0,j.jsx)("div",{className:"table-responsive",children:(0,j.jsx)(h.A,{columns:S,dataSource:o,rowKey:"id"})}),(0,j.jsx)(p.A,{open:this.state.isModalOpen,onOk:this.handleOk,onCancel:this.handleCancel,okButtonProps:{disabled:!1===this.state.radioValue&&""===this.state.rejectReasonValue},centered:!0,width:"40%",children:(0,j.jsxs)(i.A,{children:[(0,j.jsx)(k,{style:{padding:"0 20px"},children:(0,j.jsx)("p",{style:{fontSize:"28px",marginBottom:"0px"},children:"Payment Information"})}),(0,j.jsxs)(D,{style:{padding:"0 50px",background:"none"},children:[(0,j.jsxs)(f.A,{style:{marginBottom:"10px"},children:[(0,j.jsx)(g.A,{src:"/img/others/payoneer.png",alt:"payoneer",preview:!1,style:{height:"25px",width:"auto",margin:"0 17.5px"}}),(0,j.jsx)(f.A.Text,{style:{fontSize:"18px",paddingLeft:"20px"},children:null===(e=this.state.selectedUser)||void 0===e||null===(t=e.paymentDetail)||void 0===t?void 0:t.payoneer})]}),(0,j.jsxs)(f.A,{style:{marginBottom:"10px"},children:[(0,j.jsx)(g.A,{src:"/img/others/cepa.png",alt:"cepa",preview:!1}),(0,j.jsx)(f.A.Text,{style:{fontSize:"18px",paddingLeft:"20px"},children:null===(a=this.state.selectedUser)||void 0===a||null===(s=a.paymentDetail)||void 0===s?void 0:s.cepa})]}),(0,j.jsxs)(f.A,{style:{marginBottom:"10px"},children:[(0,j.jsx)(g.A,{src:"/img/others/tether.png",alt:"tether",preview:!1,style:{height:"25px",width:"auto",margin:"0 17.5px"}}),(0,j.jsx)(f.A.Text,{style:{fontSize:"18px",paddingLeft:"20px"},children:null===(n=this.state.selectedUser)||void 0===n||null===(r=n.paymentDetail)||void 0===r?void 0:r.tether})]}),(0,j.jsx)(f.A,{style:{margin:"20px"},children:(0,j.jsxs)(y.Ay.Group,{onChange:this.onChangeRadio,value:this.state.radioValue,children:[(0,j.jsx)(y.Ay,{value:!0,children:"Approve"}),(0,j.jsx)(y.Ay,{value:!1,children:"Reject"})]})}),!1===this.state.radioValue?(0,j.jsx)(A,{value:this.state.rejectReasonValue,onChange:this.onChangeRejectReason,placeholder:"Please enter the reject reason.",autoSize:{minRows:3,maxRows:5}}):null]})]})})]})}}const U=C},12499:(e,t,a)=>{"use strict";a.d(t,{A:()=>l});var s=a(58168),n=a(65043);const r={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 01-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z"}}]},name:"check-circle",theme:"filled"};var i=a(51835),o=function(e,t){return n.createElement(i.A,(0,s.A)({},e,{ref:t,icon:r}))};const l=n.forwardRef(o)},63390:(e,t,a)=>{"use strict";a.d(t,{A:()=>l});var s=a(58168),n=a(65043);const r={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"}}]},name:"check",theme:"outlined"};var i=a(51835),o=function(e,t){return n.createElement(i.A,(0,s.A)({},e,{ref:t,icon:r}))};const l=n.forwardRef(o)},51376:(e,t,a)=>{"use strict";a.d(t,{A:()=>l});var s=a(58168),n=a(65043);const r={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm-32 232c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V296zm32 440a48.01 48.01 0 010-96 48.01 48.01 0 010 96z"}}]},name:"exclamation-circle",theme:"filled"};var i=a(51835),o=function(e,t){return n.createElement(i.A,(0,s.A)({},e,{ref:t,icon:r}))};const l=n.forwardRef(o)},75270:(e,t,a)=>{"use strict";var s=a(40139),n={"text/plain":"Text","text/html":"Url",default:"Text"};e.exports=function(e,t){var a,r,i,o,l,c,m=!1;t||(t={}),a=t.debug||!1;try{if(i=s(),o=document.createRange(),l=document.getSelection(),(c=document.createElement("span")).textContent=e,c.ariaHidden="true",c.style.all="unset",c.style.position="fixed",c.style.top=0,c.style.clip="rect(0, 0, 0, 0)",c.style.whiteSpace="pre",c.style.webkitUserSelect="text",c.style.MozUserSelect="text",c.style.msUserSelect="text",c.style.userSelect="text",c.addEventListener("copy",(function(s){if(s.stopPropagation(),t.format)if(s.preventDefault(),"undefined"===typeof s.clipboardData){a&&console.warn("unable to use e.clipboardData"),a&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var r=n[t.format]||n.default;window.clipboardData.setData(r,e)}else s.clipboardData.clearData(),s.clipboardData.setData(t.format,e);t.onCopy&&(s.preventDefault(),t.onCopy(s.clipboardData))})),document.body.appendChild(c),o.selectNodeContents(c),l.addRange(o),!document.execCommand("copy"))throw new Error("copy command was unsuccessful");m=!0}catch(u){a&&console.error("unable to copy using execCommand: ",u),a&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),m=!0}catch(u){a&&console.error("unable to copy using clipboardData: ",u),a&&console.error("falling back to prompt"),r=function(e){var t=(/mac os x/i.test(navigator.userAgent)?"\u2318":"Ctrl")+"+C";return e.replace(/#{\s*key\s*}/g,t)}("message"in t?t.message:"Copy to clipboard: #{key}, Enter"),window.prompt(r,e)}}finally{l&&("function"==typeof l.removeRange?l.removeRange(o):l.removeAllRanges()),c&&document.body.removeChild(c),i()}return m}},60446:function(e){e.exports=function(){"use strict";var e=1e3,t=6e4,a=36e5,s="millisecond",n="second",r="minute",i="hour",o="day",l="week",c="month",m="quarter",u="year",d="date",h="Invalid Date",p=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,f=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,g={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],a=e%100;return"["+e+(t[(a-20)%10]||t[a]||t[0])+"]"}},y=function(e,t,a){var s=String(e);return!s||s.length>=t?e:""+Array(t+1-s.length).join(a)+e},b={s:y,z:function(e){var t=-e.utcOffset(),a=Math.abs(t),s=Math.floor(a/60),n=a%60;return(t<=0?"+":"-")+y(s,2,"0")+":"+y(n,2,"0")},m:function e(t,a){if(t.date()<a.date())return-e(a,t);var s=12*(a.year()-t.year())+(a.month()-t.month()),n=t.clone().add(s,c),r=a-n<0,i=t.clone().add(s+(r?-1:1),c);return+(-(s+(a-n)/(r?n-i:i-n))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:c,y:u,w:l,d:o,D:d,h:i,m:r,s:n,ms:s,Q:m}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},v="en",x={};x[v]=g;var w="$isDayjsObject",S=function(e){return e instanceof M||!(!e||!e[w])},j=function e(t,a,s){var n;if(!t)return v;if("string"==typeof t){var r=t.toLowerCase();x[r]&&(n=r),a&&(x[r]=a,n=r);var i=t.split("-");if(!n&&i.length>1)return e(i[0])}else{var o=t.name;x[o]=t,n=o}return!s&&n&&(v=n),n||!s&&v},k=function(e,t){if(S(e))return e.clone();var a="object"==typeof t?t:{};return a.date=e,a.args=arguments,new M(a)},$=b;$.l=j,$.i=S,$.w=function(e,t){return k(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var M=function(){function g(e){this.$L=j(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[w]=!0}var y=g.prototype;return y.parse=function(e){this.$d=function(e){var t=e.date,a=e.utc;if(null===t)return new Date(NaN);if($.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var s=t.match(p);if(s){var n=s[2]-1||0,r=(s[7]||"0").substring(0,3);return a?new Date(Date.UTC(s[1],n,s[3]||1,s[4]||0,s[5]||0,s[6]||0,r)):new Date(s[1],n,s[3]||1,s[4]||0,s[5]||0,s[6]||0,r)}}return new Date(t)}(e),this.init()},y.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},y.$utils=function(){return $},y.isValid=function(){return!(this.$d.toString()===h)},y.isSame=function(e,t){var a=k(e);return this.startOf(t)<=a&&a<=this.endOf(t)},y.isAfter=function(e,t){return k(e)<this.startOf(t)},y.isBefore=function(e,t){return this.endOf(t)<k(e)},y.$g=function(e,t,a){return $.u(e)?this[t]:this.set(a,e)},y.unix=function(){return Math.floor(this.valueOf()/1e3)},y.valueOf=function(){return this.$d.getTime()},y.startOf=function(e,t){var a=this,s=!!$.u(t)||t,m=$.p(e),h=function(e,t){var n=$.w(a.$u?Date.UTC(a.$y,t,e):new Date(a.$y,t,e),a);return s?n:n.endOf(o)},p=function(e,t){return $.w(a.toDate()[e].apply(a.toDate("s"),(s?[0,0,0,0]:[23,59,59,999]).slice(t)),a)},f=this.$W,g=this.$M,y=this.$D,b="set"+(this.$u?"UTC":"");switch(m){case u:return s?h(1,0):h(31,11);case c:return s?h(1,g):h(0,g+1);case l:var v=this.$locale().weekStart||0,x=(f<v?f+7:f)-v;return h(s?y-x:y+(6-x),g);case o:case d:return p(b+"Hours",0);case i:return p(b+"Minutes",1);case r:return p(b+"Seconds",2);case n:return p(b+"Milliseconds",3);default:return this.clone()}},y.endOf=function(e){return this.startOf(e,!1)},y.$set=function(e,t){var a,l=$.p(e),m="set"+(this.$u?"UTC":""),h=(a={},a[o]=m+"Date",a[d]=m+"Date",a[c]=m+"Month",a[u]=m+"FullYear",a[i]=m+"Hours",a[r]=m+"Minutes",a[n]=m+"Seconds",a[s]=m+"Milliseconds",a)[l],p=l===o?this.$D+(t-this.$W):t;if(l===c||l===u){var f=this.clone().set(d,1);f.$d[h](p),f.init(),this.$d=f.set(d,Math.min(this.$D,f.daysInMonth())).$d}else h&&this.$d[h](p);return this.init(),this},y.set=function(e,t){return this.clone().$set(e,t)},y.get=function(e){return this[$.p(e)]()},y.add=function(s,m){var d,h=this;s=Number(s);var p=$.p(m),f=function(e){var t=k(h);return $.w(t.date(t.date()+Math.round(e*s)),h)};if(p===c)return this.set(c,this.$M+s);if(p===u)return this.set(u,this.$y+s);if(p===o)return f(1);if(p===l)return f(7);var g=(d={},d[r]=t,d[i]=a,d[n]=e,d)[p]||1,y=this.$d.getTime()+s*g;return $.w(y,this)},y.subtract=function(e,t){return this.add(-1*e,t)},y.format=function(e){var t=this,a=this.$locale();if(!this.isValid())return a.invalidDate||h;var s=e||"YYYY-MM-DDTHH:mm:ssZ",n=$.z(this),r=this.$H,i=this.$m,o=this.$M,l=a.weekdays,c=a.months,m=a.meridiem,u=function(e,a,n,r){return e&&(e[a]||e(t,s))||n[a].slice(0,r)},d=function(e){return $.s(r%12||12,e,"0")},p=m||function(e,t,a){var s=e<12?"AM":"PM";return a?s.toLowerCase():s};return s.replace(f,(function(e,s){return s||function(e){switch(e){case"YY":return String(t.$y).slice(-2);case"YYYY":return $.s(t.$y,4,"0");case"M":return o+1;case"MM":return $.s(o+1,2,"0");case"MMM":return u(a.monthsShort,o,c,3);case"MMMM":return u(c,o);case"D":return t.$D;case"DD":return $.s(t.$D,2,"0");case"d":return String(t.$W);case"dd":return u(a.weekdaysMin,t.$W,l,2);case"ddd":return u(a.weekdaysShort,t.$W,l,3);case"dddd":return l[t.$W];case"H":return String(r);case"HH":return $.s(r,2,"0");case"h":return d(1);case"hh":return d(2);case"a":return p(r,i,!0);case"A":return p(r,i,!1);case"m":return String(i);case"mm":return $.s(i,2,"0");case"s":return String(t.$s);case"ss":return $.s(t.$s,2,"0");case"SSS":return $.s(t.$ms,3,"0");case"Z":return n}return null}(e)||n.replace(":","")}))},y.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},y.diff=function(s,d,h){var p,f=this,g=$.p(d),y=k(s),b=(y.utcOffset()-this.utcOffset())*t,v=this-y,x=function(){return $.m(f,y)};switch(g){case u:p=x()/12;break;case c:p=x();break;case m:p=x()/3;break;case l:p=(v-b)/6048e5;break;case o:p=(v-b)/864e5;break;case i:p=v/a;break;case r:p=v/t;break;case n:p=v/e;break;default:p=v}return h?p:$.a(p)},y.daysInMonth=function(){return this.endOf(c).$D},y.$locale=function(){return x[this.$L]},y.locale=function(e,t){if(!e)return this.$L;var a=this.clone(),s=j(e,t,!0);return s&&(a.$L=s),a},y.clone=function(){return $.w(this.$d,this)},y.toDate=function(){return new Date(this.valueOf())},y.toJSON=function(){return this.isValid()?this.toISOString():null},y.toISOString=function(){return this.$d.toISOString()},y.toString=function(){return this.$d.toUTCString()},g}(),D=M.prototype;return k.prototype=D,[["$ms",s],["$s",n],["$m",r],["$H",i],["$W",o],["$M",c],["$y",u],["$D",d]].forEach((function(e){D[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),k.extend=function(e,t){return e.$i||(e(t,M,k),e.$i=!0),k},k.locale=j,k.isDayjs=S,k.unix=function(e){return k(1e3*e)},k.en=x[v],k.Ls=x,k.p={},k}()},40139:e=>{e.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,a=[],s=0;s<e.rangeCount;s++)a.push(e.getRangeAt(s));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||a.forEach((function(t){e.addRange(t)})),t&&t.focus()}}},94742:e=>{"use strict";e.exports=JSON.parse('[{"id":"eileenHorton-1153","name":"Eileen Horton","email":"eileen_h@hotmail.com","img":"/img/avatars/thumb-1.jpg","role":"Admin","lastOnline":1573430400,"status":"pending","personalInfo":{"location":"New York, US","title":"Product Manager","birthday":"10/10/1992","phoneNumber":"+12-123-1234","facebook":"facebook.com/sample","twitter":"twitter.com/sample","instagram":"instagram.com/sample","site":"samplesite.com"},"rejectReason":""},{"id":"terranceMoreno-1322","name":"Terrance Moreno","email":"","img":"/img/avatars/thumb-2.jpg","role":"User","lastOnline":1572393600,"status":"pending","personalInfo":{"location":"New York, US","title":"Software Engineer","birthday":"03/02/1984","phoneNumber":"+12-123-1234","facebook":"facebook.com/sample","twitter":"twitter.com/sample","instagram":"instagram.com/sample","site":"samplesite.com"}},{"id":"ronVargas7653","name":"Ron Vargas","email":"ronnie_vergas@infotech.io","img":"/img/avatars/thumb-3.jpg","role":"User","lastOnline":1572393600,"status":"blocked","personalInfo":{"location":"New York, US","title":"UI/UX Designer","birthday":"07/11/1987","phoneNumber":"+12-123-1234","facebook":"facebook.com/sample","twitter":"twitter.com/sample","instagram":"instagram.com/sample","site":"samplesite.com"}},{"id":"lukeCook4721","name":"Luke Cook","email":"cookie_lukie@hotmail.com","img":"/img/avatars/thumb-4.jpg","role":"Admin","lastOnline":1579132800,"status":"active","personalInfo":{"location":"New York, US","title":"HR Executive","birthday":"07/11/1987","phoneNumber":"+12-123-1234","facebook":"facebook.com/sample","twitter":"twitter.com/sample","instagram":"instagram.com/sample","site":"samplesite.com"}},{"id":"joyceFreeman1384","name":"Joyce Freeman","email":"joyce991@infotech.io","img":"/img/avatars/thumb-5.jpg","role":"User","lastOnline":1582416000,"status":"active","personalInfo":{"location":"New York, US","title":"Frontend Developer","birthday":"17/11/1993","phoneNumber":"+12-123-1234","facebook":"facebook.com/sample","twitter":"twitter.com/sample","instagram":"instagram.com/sample","site":"samplesite.com"}},{"id":"samanthaPhillips8493","name":"Samantha Phillips","email":"samanthaphil@infotech.io","img":"/img/avatars/thumb-6.jpg","role":"User","lastOnline":1583107200,"status":"active","personalInfo":{"location":"London, UK","title":"Compliance Manager","birthday":"17/11/1993","phoneNumber":"+12-123-1234","facebook":"facebook.com/sample","twitter":"twitter.com/sample","instagram":"instagram.com/sample","site":"samplesite.com"}},{"id":"taraFletcher1263","name":"Tara Fletcher","email":"taratarara@imaze.edu.du","img":"/img/avatars/thumb-7.jpg","role":"User","lastOnline":1582761600,"status":"active","personalInfo":{"location":"London, UK","title":"Compliance Manager","birthday":"17/11/1993","phoneNumber":"+12-123-1234","facebook":"facebook.com/sample","twitter":"twitter.com/sample","instagram":"instagram.com/sample","site":"samplesite.com"}},{"id":"frederickAdams6532","name":"Frederick Adams","email":"iamfred@imaze.infotech.io","img":"/img/avatars/thumb-8.jpg","role":"User","lastOnline":1579219200,"status":"blocked","personalInfo":{"location":"London, UK","title":"Compliance Manager","birthday":"17/11/1993","phoneNumber":"+12-123-1234","facebook":"facebook.com/sample","twitter":"twitter.com/sample","instagram":"instagram.com/sample","site":"samplesite.com"}},{"id":"carolynHanson7953","name":"Carolyn Hanson","email":"carolyn_h@gmail.com","img":"/img/avatars/thumb-9.jpg","role":"User","lastOnline":1584489600,"status":"blocked","personalInfo":{"location":"Texas, US","title":"Compliance Manager","birthday":"03/06/1991","phoneNumber":"+12-123-1234","facebook":"facebook.com/sample","twitter":"twitter.com/sample","instagram":"instagram.com/sample","site":"samplesite.com"}},{"id":"brittanyHale3683","name":"Brittany Hale","email":"brittany1134@gmail.com","img":"/img/avatars/thumb-10.jpg","role":"User","lastOnline":1583452800,"status":"active","personalInfo":{"location":"Texas, US","title":"Compliance Manager","birthday":"03/06/1991","phoneNumber":"+12-123-1234","facebook":"facebook.com/sample","twitter":"twitter.com/sample","instagram":"instagram.com/sample","site":"samplesite.com"}},{"id":"lloydObrien1564","name":"Lloyd Obrien","email":"handsome-obrien@hotmail.com","img":"/img/avatars/thumb-11.jpg","role":"User","lastOnline":1584576000,"status":"active","personalInfo":{"location":"London, UK","title":"Software Engineer","birthday":"03/06/1991","phoneNumber":"+12-123-1234","facebook":"facebook.com/sample","twitter":"twitter.com/sample","instagram":"instagram.com/sample","site":"samplesite.com"}},{"id":"gabriellaMay2850","name":"Gabriella May","email":"maymaymay12@infotech.io","img":"/img/avatars/thumb-12.jpg","role":"User","lastOnline":1574208000,"status":"blocked","personalInfo":{"location":"London, UK","title":"Software Engineer","birthday":"03/06/1991","phoneNumber":"+12-123-1234","facebook":"facebook.com/sample","twitter":"twitter.com/sample","instagram":"instagram.com/sample","site":"samplesite.com"}},{"id":"leeWheeler1941","name":"Lee Wheeler","email":"","img":"/img/avatars/thumb-13.jpg","role":"User","lastOnline":1586649600,"status":"active","personalInfo":{"location":"London, UK","title":"Software Engineer","birthday":"03/06/1991","phoneNumber":"+12-123-1234","facebook":"facebook.com/sample","twitter":"twitter.com/sample","instagram":"instagram.com/sample","site":"samplesite.com"}},{"id":"gailBarnes7615","name":"Gail Barnes","email":"gailby0116@infotech.io","img":"/img/avatars/thumb-14.jpg","role":"User","lastOnline":1583020800,"status":"active","personalInfo":{"location":"London, UK","title":"Software Engineer","birthday":"03/06/1991","phoneNumber":"+12-123-1234","facebook":"facebook.com/sample","twitter":"twitter.com/sample","instagram":"instagram.com/sample","site":"samplesite.com"}},{"id":"ellaRobinson1093","name":"Ella Robinson","email":"ella_robinson@infotech.io","img":"/img/avatars/thumb-15.jpg","role":"User","lastOnline":1586217600,"status":"active","personalInfo":{"location":"London, UK","title":"Software Engineer","birthday":"03/06/1991","phoneNumber":"+12-123-1234","facebook":"facebook.com/sample","twitter":"twitter.com/sample","instagram":"instagram.com/sample","site":"samplesite.com"}}]')}}]);
//# sourceMappingURL=1831.c7935019.chunk.js.map