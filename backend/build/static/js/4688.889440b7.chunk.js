"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[4688],{84688:(e,t,n)=>{n.r(t),n.d(t,{default:()=>xe});var a=n(65043),s=n(63043),l=(n(62377),n(77154)),r=n(70579);const i=e=>{let{diagnosis:t,desc:n}=e;const[s,i]=(0,a.useState)([]),[o,c]=(0,a.useState)({});(0,a.useEffect)((()=>{t&&Array.isArray(t)&&i([...t].reverse())}),[t]);const d=e=>!!/^\d{13}_/.test(e);return(0,r.jsx)("div",{style:{maxHeight:"300px",overflowY:"scroll",overflowX:"hidden",marginTop:"20px"},children:null===s||void 0===s?void 0:s.map(((e,t)=>{var n;const a=null===e||void 0===e?void 0:e.date,s=new Date(a).toLocaleDateString("en-IN",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",hour12:!0}).replace(/\//g,"/");return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("div",{children:(0,r.jsxs)("div",{className:"row",children:[(0,r.jsxs)("div",{style:{margin:"1rem auto 1rem 1rem",overflow:"auto !important"},children:[(0,r.jsxs)("h5",{children:["Diagnose Date : ",s]}),(0,r.jsxs)("table",{className:"table",style:{width:"90%",border:"1px solid",fontFamily:"ui-rounded",borderRadius:"10px"},children:[(0,r.jsxs)("colgroup",{children:[(0,r.jsx)("col",{style:{width:"20%"}}),(0,r.jsx)("col",{style:{width:"20%"}}),(0,r.jsx)("col",{style:{width:"20%"}}),(0,r.jsx)("col",{style:{width:"20%"}}),(0,r.jsx)("col",{style:{width:"20%"}})]}),(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{scope:"col",style:{background:"#FBF295"},children:"Problems"}),(0,r.jsx)("th",{scope:"col",style:{background:"#FBF295"},children:"Test"}),(0,r.jsx)("th",{scope:"col",style:{background:"#FBF295"},children:"Test value"}),(0,r.jsx)("th",{scope:"col",style:{background:"#FBF295"},children:"Scale"}),(0,r.jsx)("th",{scope:"col",style:{background:"#FBF295"},children:"Scale value"})]})}),null===e||void 0===e||null===(n=e.diagnosData)||void 0===n?void 0:n.map(((e,t)=>{let{problem:n,scale:a,test:s,testInput:i,value:m}=e;return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("tbody",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{style:{fontWeight:"bolder"},children:n}),(0,r.jsx)("td",{style:{fontWeight:"bolder"},children:""===s?"-":s}),(0,r.jsx)("td",{style:{fontWeight:"bolder"},children:""===i?"-":d(i)?(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("button",{className:"btn btn-light",onClick:()=>(async(e,t)=>{c((e=>({...e,[t]:!0})));try{const t=await l.A.get("".concat("http://18.204.141.1:8090","/api/user/getPatientReport/").concat(e),{responseType:"blob"}),n=new Blob([t.data],{type:t.headers["content-type"]}),a=URL.createObjectURL(n);window.open(a)}catch(n){console.error("Error fetching image:",n)}finally{c((e=>({...e,[t]:!1})))}})(i,t),disabled:o[t],children:o[t]?"Please Wait...":"Show Report"})}):i}),(0,r.jsx)("td",{style:{fontWeight:"bolder"},children:""===a?"-":a}),(0,r.jsx)("td",{style:{fontWeight:"bolder"},children:""===m?"-":m})]})},t)})}))]}),(0,r.jsx)("div",{className:"row",children:(0,r.jsx)("div",{style:{margin:"1rem auto 1rem 1rem"},children:(0,r.jsxs)("div",{className:"row",style:{marginTop:"1rem"},children:[(0,r.jsx)("div",{className:"col-md-2 d-flex align-items-center",children:(0,r.jsx)("h5",{children:"Notes:"})}),(0,r.jsx)("div",{className:"col-md-10 d-flex align-items-center",children:(0,r.jsx)("div",{className:"card",style:{width:"87%",padding:"1rem 2rem"},children:(0,r.jsx)("p",{style:{margin:"0"},children:""===e.desc?"-":e.desc})})})]})})})]}),(0,r.jsx)("hr",{})]})},t)})}))})};var o=n(14182),c=n(66921),d=n(58390),m=n(98572),h=n(91036),u=(n(92342),{cm:!0,mm:!0,in:!0,px:!0,pt:!0,pc:!0,em:!0,ex:!0,ch:!0,rem:!0,vw:!0,vh:!0,vmin:!0,vmax:!0,"%":!0});function p(e){var t=function(e){if("number"===typeof e)return{value:e,unit:"px"};var t,n=(e.match(/^[0-9.]*/)||"").toString();t=n.includes(".")?parseFloat(n):parseInt(n,10);var a=(e.match(/[^0-9]*$/)||"").toString();return u[a]?{value:t,unit:a}:(console.warn("React Spinners: ".concat(e," is not a valid css value. Defaulting to ").concat(t,"px.")),{value:t,unit:"px"})}(e);return"".concat(t.value).concat(t.unit)}var v,x=function(e,t,n){var a="react-spinners-".concat(e,"-").concat(n);if("undefined"==typeof window||!window.document)return a;var s=document.createElement("style");document.head.appendChild(s);var l=s.sheet,r="\n    @keyframes ".concat(a," {\n      ").concat(t,"\n    }\n  ");return l&&l.insertRule(r,0),a};!function(e){e.maroon="#800000",e.red="#FF0000",e.orange="#FFA500",e.yellow="#FFFF00",e.olive="#808000",e.green="#008000",e.purple="#800080",e.fuchsia="#FF00FF",e.lime="#00FF00",e.teal="#008080",e.aqua="#00FFFF",e.blue="#0000FF",e.navy="#000080",e.black="#000000",e.gray="#808080",e.silver="#C0C0C0",e.white="#FFFFFF"}(v||(v={}));var g=function(e,t){if(Object.keys(v).includes(e)&&(e=v[e]),"#"===e[0]&&(e=e.slice(1)),3===e.length){var n="";e.split("").forEach((function(e){n+=e,n+=e})),e=n}var a=(e.match(/.{2}/g)||[]).map((function(e){return parseInt(e,16)})).join(", ");return"rgba(".concat(a,", ").concat(t,")")},j=function(){return j=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var s in t=arguments[n])Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s]);return e},j.apply(this,arguments)},f=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var s=0;for(a=Object.getOwnPropertySymbols(e);s<a.length;s++)t.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(n[a[s]]=e[a[s]])}return n},y=x("BarLoader","0% {left: -35%;right: 100%} 60% {left: 100%;right: -90%} 100% {left: 100%;right: -90%}","long"),b=x("BarLoader","0% {left: -200%;right: 100%} 60% {left: 107%;right: -8%} 100% {left: 107%;right: -8%}","short");const N=function(e){var t=e.loading,n=void 0===t||t,s=e.color,l=void 0===s?"#000000":s,r=e.speedMultiplier,i=void 0===r?1:r,o=e.cssOverride,c=void 0===o?{}:o,d=e.height,m=void 0===d?4:d,h=e.width,u=void 0===h?100:h,v=f(e,["loading","color","speedMultiplier","cssOverride","height","width"]),x=j({display:"inherit",position:"relative",width:p(u),height:p(m),overflow:"hidden",backgroundColor:g(l,.2),backgroundClip:"padding-box"},c),N=function(e){return{position:"absolute",height:p(m),overflow:"hidden",backgroundColor:l,backgroundClip:"padding-box",display:"block",borderRadius:2,willChange:"left, right",animationFillMode:"forwards",animation:"".concat(1===e?y:b," ").concat(2.1/i,"s ").concat(2===e?"".concat(1.15/i,"s"):""," ").concat(1===e?"cubic-bezier(0.65, 0.815, 0.735, 0.395)":"cubic-bezier(0.165, 0.84, 0.44, 1)"," infinite")}};return n?a.createElement("span",j({style:x},v),a.createElement("span",{style:N(1)}),a.createElement("span",{style:N(2)})):null},w=e=>({position:"fixed",top:0,left:0,width:"100%",height:"100%",backgroundColor:"rgba(255, 255, 255, 0.7)",display:e?"flex":"none",justifyContent:"center",alignItems:"center",zIndex:9999}),S=e=>(0,r.jsx)("div",{style:w(e),children:(0,r.jsx)(N,{loading:e,color:"#36D7B7"})}),C=e=>{var t;let{_id:n,getSearchByPatient:l,setIsAddNewDiagnosis:i,setIsDetailed:u}=e,p="http://18.204.141.1:8090",v=localStorage.getItem("patientRecord"),x=JSON.parse(v);const[g,j]=a.useState(null),[f,y]=(0,a.useState)({}),[b,N]=(0,a.useState)(""),[w,C]=(0,a.useState)({diagnosis:[],desc:""}),[k,A]=(0,a.useState)([]);let[F,D]=(0,a.useState)(!1);const[P,R]=(0,a.useState)([]),[I,E]=(0,a.useState)([]),[T,_]=(0,a.useState)([]);(0,a.useEffect)((()=>{O()}),[]);const O=async()=>{try{var e,t;const n=await(0,s.J4)("".concat(p,"/api/problem/").concat(null===x||void 0===x||null===(e=x.department_id)||void 0===e?void 0:e._id)),a=null===n||void 0===n||null===(t=n.data)||void 0===t?void 0:t.data[0];if(a){const e=a.problemName.filter((e=>"problem"===e.type)).map((e=>e.name)),t=a.problemName.filter((e=>"scale"===e.type)).map((e=>e.name)),n=a.problemName.filter((e=>"test"===e.type)).map((e=>{let{name:t,inputType:n}=e;return{name:t,inputType:n}}));E(n),_(t),R(e)}}catch(n){console.error("Error fetching problems:",n)}};(0,a.useEffect)((()=>{f.desc&&C((e=>({...e,desc:f.desc})))}),[f]),(0,a.useEffect)((()=>{(async()=>{try{const e=await(0,s.J4)("".concat(p,"/api/patient/").concat(n));y(e.data.data)}catch(e){console.log(e)}})()}),[]);let[B,M]=(0,a.useState)(!1);const[L,W]=(0,a.useState)([{problem:"",test:"",testInput:"",scale:"",value:""}]),z=(e,t)=>{const{name:n,value:a}=t.target,s=[...L];s[e][n]=a,W(s)},H=()=>{W([...L,{problem:"",test:"",testInput:"",scale:"",value:""}])},J=e=>{const t=[...L];t.splice(e,1),W(t)};return(0,a.useEffect)((()=>{L.length>1?M(!0):M(!1)}),[J,H,z]),(0,r.jsxs)(r.Fragment,{children:[F&&(0,r.jsx)(S,{loading:F}),(0,r.jsxs)("div",{style:{margin:"1rem auto 1rem 1rem"},children:[(0,r.jsx)("div",{style:{margin:"1rem auto 1rem 0"},children:(0,r.jsxs)("h4",{children:["Diagnosis: (",null===x||void 0===x||null===(t=x.department_id)||void 0===t?void 0:t.departmentName,")"]})}),(0,r.jsxs)("form",{onSubmit:async e=>{if(e.preventDefault(),1===L.length&&""===L[0].problem)return h.oR.warning("Please select at least one Chief complaint");for(const n of L){if(""!==(null===n||void 0===n?void 0:n.test)&&""===(null===n||void 0===n?void 0:n.testInput))return void h.oR.warning("Please give input for selected test");if(""!==(null===n||void 0===n?void 0:n.scale)&&""===(null===n||void 0===n?void 0:n.value))return void h.oR.warning("Please give input for selected scale");console.log("data",n)}D(!0);try{await Promise.all(L.map((async(e,t)=>{if("string"!==typeof e.testInput){const n=e.testInput,a=new FormData;a.append("file",n);const l=await(0,s.De)("".concat(p,"/api/user/uploadPatientReport"),a);l&&(L[t].testInput=null===l||void 0===l?void 0:l.fileName)}}))),D(!1)}catch(t){D(!1),console.error("Error submitting data:",t)}try{const e={...w,diagnosis:[{diagnosData:L,date:Date(),desc:b}],nextApointmentDate:g};await(0,s.E8)("".concat(p,"/api/patient/update/").concat(n),e)&&(A([]),N(""),h.oR.success("Patient Updated Successfully",{autoClose:1e3}),setTimeout((()=>{i(!1),u(!0),W([{problem:"",test:"",testInput:"",scale:"",value:""}])}),2e3),l())}catch(t){console.log(t)}},children:[(0,r.jsxs)("form",{className:"mb-2",children:[null===L||void 0===L?void 0:L.map(((e,t)=>(0,r.jsxs)("div",{className:"row mt-1 mb-2",children:[(0,r.jsx)("div",{className:"col-md-2",children:(0,r.jsx)("label",{children:(0,r.jsxs)("select",{className:"form-control ",style:{width:"10rem",appearance:"auto",height:"38px"},name:"problem",value:e.problem,onChange:e=>z(t,e),children:[(0,r.jsx)("option",{value:"",children:"Chief complaint"}),null===P||void 0===P?void 0:P.map(((e,t)=>(0,r.jsx)("option",{value:e,children:e},t)))]})})}),(0,r.jsx)("div",{className:"col-md-2",children:(0,r.jsx)("label",{children:(0,r.jsxs)("select",{className:"form-control ",style:{width:"10rem",appearance:"auto",height:"38px"},name:"test",value:e.test,onChange:e=>z(t,e),children:[(0,r.jsx)("option",{value:"",children:"Select Test"}),null===I||void 0===I?void 0:I.map(((e,t)=>(0,r.jsx)("option",{value:e.name,children:e.name},t)))]})})}),""===(null===e||void 0===e?void 0:e.test)?"":(0,r.jsx)("div",{className:"col-md-2",children:null===I||void 0===I?void 0:I.map(((n,a)=>{if(n.name===e.test){if("text"===(null===n||void 0===n?void 0:n.inputType))return(0,r.jsx)("label",{children:(0,r.jsx)("input",{className:"form-control",style:{width:"10rem"},placeholder:"Enter test Value",type:"text",name:"testInput",value:e.testInput,onChange:e=>z(t,e)})},a);if("file"===(null===n||void 0===n?void 0:n.inputType))return(0,r.jsx)("label",{children:(0,r.jsx)("input",{className:"form-control",style:{width:"10rem"},type:"file",name:"testInput",onChange:e=>((e,t)=>{const{name:n,files:a}=t.target,s=[...L];s[e][n]=a[0],W(s),console.log("Guarv",L)})(t,e)})},a)}return null}))}),(0,r.jsx)("div",{className:"col-md-2",children:(0,r.jsx)("label",{children:(0,r.jsxs)("select",{className:"form-control ",style:{width:"10rem",appearance:"auto",height:"38px"},name:"scale",value:e.scale,onChange:e=>z(t,e),children:[(0,r.jsx)("option",{value:"",children:"Select Scale"}),null===T||void 0===T?void 0:T.map(((e,t)=>(0,r.jsx)("option",{value:e,children:e},t)))]})})}),(0,r.jsx)("div",{className:"col-md-2",children:(0,r.jsx)("label",{children:(0,r.jsx)("input",{className:"form-control ",style:{width:"10rem",appearance:"auto"},placeholder:"Enter Scale Value",type:"text",name:"value",value:e.value,onChange:e=>z(t,e)})})}),(0,r.jsx)("div",{className:"col-md-2 d-flex justify-content-center",children:B&&(0,r.jsx)("button",{className:"btn btn-danger",type:"button",onClick:()=>J(t),children:"Remove"})})]},t))),(0,r.jsx)("div",{className:"d-flex justify-content-end",children:(0,r.jsx)("button",{className:"btn btn-primary me-4",type:"button",onClick:H,children:"Add More"})})]}),(0,r.jsx)("div",{children:(0,r.jsx)("textarea",{rows:4,className:"form-control col-12",placeholder:"Notes (Optional)",name:"desc",value:b,onChange:e=>N(e.target.value)})}),(0,r.jsx)("div",{className:"d-flex mt-2",children:(0,r.jsx)("div",{className:"w-auto",children:(0,r.jsx)(d.$,{dateAdapter:c.R,children:(0,r.jsx)(o.j,{components:["DateTimePicker"],children:(0,r.jsx)(m.K,{label:"Next Appointment Date",value:g,onChange:e=>{j(e)}})})})})}),(0,r.jsxs)("div",{className:"text-end",children:[(0,r.jsx)("button",{type:"submit",className:"btn btn-primary mt-4",style:{width:"10rem"},children:"Submit"}),(0,r.jsx)("button",{type:"submit",className:"btn btn-danger mt-4 ms-2",style:{width:"10rem"},onClick:()=>(i(!1),void u(!0)),children:"Close"})]})]}),(0,r.jsx)(h.N9,{})]})]})},k=e=>{let{patientSearch:t,getSearchByPatient:n}=e;const[s,l]=(0,a.useState)(!1),[o,c]=(0,a.useState)(!1),[d,m]=(0,a.useState)(""),[h,u]=(0,a.useState)("");return(0,r.jsx)("div",{children:null===t||void 0===t?void 0:t.map((e=>{const{name:t,crn:a,phone:p,age:v,sex:x,diagnosis:g,_id:j,desc:f,nextApointmentDate:y}=e,b=d===j,N=h===j,w=new Date(y).toLocaleString("en-IN",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",hour12:!0}).replace(/\//g,"/");return(0,r.jsx)("div",{className:"row",children:(0,r.jsx)("div",{style:{marginTop:"2rem"},children:(0,r.jsx)("div",{className:"card",style:{width:"100%"},children:(0,r.jsxs)("div",{className:"card-body overflow-auto ",children:[(0,r.jsxs)("h5",{className:"card-title",children:[" CR No : ",a]}),(0,r.jsx)("h6",{className:"card-subtitle mt-2",children:(0,r.jsxs)("h5",{children:["Name : ",t]})}),(0,r.jsxs)("div",{style:{display:"flex",marginTop:"1rem"},children:[(0,r.jsxs)("span",{style:{display:"flex"},children:[(0,r.jsx)("h6",{children:"Phone No. \xa0"})," ",(0,r.jsx)("h6",{style:{fontWeight:"normal"},children:p})]}),(0,r.jsxs)("span",{style:{display:"flex",marginLeft:"2rem"},children:[(0,r.jsx)("h6",{children:"Age. \xa0"})," ",(0,r.jsx)("h6",{style:{fontWeight:"normal"},children:v})]}),(0,r.jsxs)("span",{style:{display:"flex",marginLeft:"2rem"},children:[(0,r.jsx)("h6",{children:" Sex. \xa0"})," ",(0,r.jsx)("h6",{style:{fontWeight:"normal"},children:x})]}),(0,r.jsxs)("span",{style:{display:"flex",marginLeft:"2rem"},children:[(0,r.jsx)("h6",{children:"Next Appointment Date. \xa0"})," ",(0,r.jsx)("h6",{style:{fontWeight:"normal"},children:y?w:"-"})]})]}),(0,r.jsxs)("div",{className:"text-end",children:[(0,r.jsx)("button",{type:"button",className:"btn btn-success",onClick:()=>{return e=j,m((t=>t===e?"":e)),u(""),void c(!0);var e},children:"Show Diagnosis"}),(0,r.jsx)("button",{type:"button",className:"btn btn-warning",style:{marginLeft:"2rem"},onClick:()=>{return u(e=j),m(e),l(!0),void c(!1);var e},children:"Add New Diagnosis"})]}),b&&o&&(0,r.jsx)("div",{children:(0,r.jsx)(i,{diagnosis:g,desc:f})}),N&&s&&(0,r.jsx)("div",{children:(0,r.jsx)(C,{_id:j,getSearchByPatient:n,setIsAddNewDiagnosis:l,setIsDetailed:c})})]})})})},j)}))})};n(83910);var A=n(57528),F=n(98587),D=n(58168),P=n(58387),R=n(68606),I=n(83290),E=n(6803),T=n(72876),_=n(34535),O=n(57056),B=n(32400);function M(e){return(0,B.Ay)("MuiCircularProgress",e)}(0,O.A)("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]);var L,W,z,H;const J=["className","color","disableShrink","size","style","thickness","value","variant"];let U,V,$,q;const K=44,G=(0,I.i7)(U||(U=L||(L=(0,A.A)(["\n  0% {\n    transform: rotate(0deg);\n  }\n\n  100% {\n    transform: rotate(360deg);\n  }\n"])))),X=(0,I.i7)(V||(V=W||(W=(0,A.A)(["\n  0% {\n    stroke-dasharray: 1px, 200px;\n    stroke-dashoffset: 0;\n  }\n\n  50% {\n    stroke-dasharray: 100px, 200px;\n    stroke-dashoffset: -15px;\n  }\n\n  100% {\n    stroke-dasharray: 100px, 200px;\n    stroke-dashoffset: -125px;\n  }\n"])))),Y=(0,_.Ay)("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[n.variant],t["color".concat((0,E.A)(n.color))]]}})((e=>{let{ownerState:t,theme:n}=e;return(0,D.A)({display:"inline-block"},"determinate"===t.variant&&{transition:n.transitions.create("transform")},"inherit"!==t.color&&{color:(n.vars||n).palette[t.color].main})}),(e=>{let{ownerState:t}=e;return"indeterminate"===t.variant&&(0,I.AH)($||($=z||(z=(0,A.A)(["\n      animation: "," 1.4s linear infinite;\n    "]))),G)})),Q=(0,_.Ay)("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:(e,t)=>t.svg})({display:"block"}),Z=(0,_.Ay)("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.circle,t["circle".concat((0,E.A)(n.variant))],n.disableShrink&&t.circleDisableShrink]}})((e=>{let{ownerState:t,theme:n}=e;return(0,D.A)({stroke:"currentColor"},"determinate"===t.variant&&{transition:n.transitions.create("stroke-dashoffset")},"indeterminate"===t.variant&&{strokeDasharray:"80px, 200px",strokeDashoffset:0})}),(e=>{let{ownerState:t}=e;return"indeterminate"===t.variant&&!t.disableShrink&&(0,I.AH)(q||(q=H||(H=(0,A.A)(["\n      animation: "," 1.4s ease-in-out infinite;\n    "]))),X)})),ee=a.forwardRef((function(e,t){const n=(0,T.A)({props:e,name:"MuiCircularProgress"}),{className:a,color:s="primary",disableShrink:l=!1,size:i=40,style:o,thickness:c=3.6,value:d=0,variant:m="indeterminate"}=n,h=(0,F.A)(n,J),u=(0,D.A)({},n,{color:s,disableShrink:l,size:i,thickness:c,value:d,variant:m}),p=(e=>{const{classes:t,variant:n,color:a,disableShrink:s}=e,l={root:["root",n,"color".concat((0,E.A)(a))],svg:["svg"],circle:["circle","circle".concat((0,E.A)(n)),s&&"circleDisableShrink"]};return(0,R.A)(l,M,t)})(u),v={},x={},g={};if("determinate"===m){const e=2*Math.PI*((K-c)/2);v.strokeDasharray=e.toFixed(3),g["aria-valuenow"]=Math.round(d),v.strokeDashoffset="".concat(((100-d)/100*e).toFixed(3),"px"),x.transform="rotate(-90deg)"}return(0,r.jsx)(Y,(0,D.A)({className:(0,P.A)(p.root,a),style:(0,D.A)({width:i,height:i},x,o),ownerState:u,ref:t,role:"progressbar"},g,h,{children:(0,r.jsx)(Q,{className:p.svg,ownerState:u,viewBox:"".concat(22," ").concat(22," ").concat(K," ").concat(K),children:(0,r.jsx)(Z,{className:p.circle,style:v,ownerState:u,cx:K,cy:K,r:(K-c)/2,fill:"none",strokeWidth:c})})}))}));var te=n(54984),ne=n(58812),ae=n(18698),se=n(45527);const le=["className","component"];var re=n(25430),ie=n(88279),oe=n(13375);const ce=(0,O.A)("MuiBox",["root"]),de=(0,ie.A)(),me=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{themeId:t,defaultTheme:n,defaultClassName:s="MuiBox-root",generateClassName:l}=e,i=(0,te.default)("div",{shouldForwardProp:e=>"theme"!==e&&"sx"!==e&&"as"!==e})(ne.A);return a.forwardRef((function(e,a){const o=(0,se.A)(n),c=(0,ae.A)(e),{className:d,component:m="div"}=c,h=(0,F.A)(c,le);return(0,r.jsx)(i,(0,D.A)({as:m,ref:a,className:(0,P.A)(d,l?l(s):s),theme:t&&o[t]||o},h))}))}({themeId:oe.A,defaultTheme:de,defaultClassName:ce.root,generateClassName:re.A.generate}),he=me;function ue(){return(0,r.jsx)(he,{style:{width:"100%",height:"20vh",lineHeight:"20vh",textAlign:"center",backgroundColor:"white",marginTop:"10px"},children:(0,r.jsx)(ee,{})})}const pe=()=>(0,r.jsx)(he,{style:{width:"100%",height:"100%",lineHeight:"20vh",textAlign:"center",marginTop:"10px"},children:(0,r.jsx)(ee,{})});var ve=n(73216);const xe=()=>{var e,t;const n=(0,ve.zy)();console.log("location",Number(null===n||void 0===n||null===(e=n.state)||void 0===e?void 0:e.crn));let l="http://18.204.141.1:8090",i=localStorage.getItem("patientRecord"),u=JSON.parse(i);const[p,v]=(0,a.useState)(!1),[x,g]=(0,a.useState)(!1),[j,f]=(0,a.useState)(!1),[y,b]=a.useState(null),[N,w]=(0,a.useState)(!1),[C,A]=(0,a.useState)(""),[F,D]=(0,a.useState)([]),[P,R]=(0,a.useState)([]),[I,E]=(0,a.useState)([]),[T,_]=(0,a.useState)([]);let[O,B]=(0,a.useState)(!1);const[M,L]=(0,a.useState)(""),[W,z]=(0,a.useState)({name:"",age:"",sex:"male",phone:"",crn:"",diagnosis:[],desc:"",doctor_id:null===u||void 0===u?void 0:u._id});console.log("value date",y),(0,a.useEffect)((()=>{A(""),H()}),[]);const H=async()=>{try{var e,t;const n=await(0,s.J4)("".concat(l,"/api/problem/").concat(null===u||void 0===u||null===(e=u.department_id)||void 0===e?void 0:e._id)),a=null===n||void 0===n||null===(t=n.data)||void 0===t?void 0:t.data[0];if(a){const e=a.problemName.filter((e=>"problem"===e.type)).map((e=>e.name)),t=a.problemName.filter((e=>"scale"===e.type)).map((e=>e.name)),n=a.problemName.filter((e=>"test"===e.type)).map((e=>{let{name:t,inputType:n}=e;return{name:t,inputType:n}}));E(n),_(t),R(e)}}catch(n){console.error("Error fetching problems:",n)}};console.log("problems",P);const J=async()=>{try{var e,t;let a=C||(null===n||void 0===n||null===(e=n.state)||void 0===e?void 0:e.crn);if(0===(null===a||void 0===a?void 0:a.length))return;g(!0);const r=await(0,s.J4)("".concat(l,"/api/patient/").concat(a));console.log("searchData",r),D(null===r||void 0===r||null===(t=r.data)||void 0===t?void 0:t.data),setTimeout((()=>{g(!1)}),3e3)}catch(a){console.log(a)}};(0,a.useEffect)((()=>{!0===p&&J()}),[p]);let[U,V]=(0,a.useState)(new Date);(0,a.useEffect)((()=>{var e,t;null!==n&&void 0!==n&&null!==(e=n.state)&&void 0!==e&&e.crn&&(A(null===n||void 0===n||null===(t=n.state)||void 0===t?void 0:t.crn),J())}),[n]);let[$,q]=(0,a.useState)(!1);const[K,G]=(0,a.useState)([{problem:"",test:"",testInput:"",scale:"",value:""}]),X=(e,t)=>{const{name:n,value:a}=t.target,s=[...K];s[e][n]=a,G(s)},Y=()=>{G([...K,{problem:"",test:"",testInput:"",scale:"",value:""}])},Q=e=>{const t=[...K];t.splice(e,1),G(t)};return(0,a.useEffect)((()=>{K.length>1?q(!0):q(!1)}),[Q,Y,X]),(0,a.useEffect)((()=>{console.log("Updated inputs:",K)}),[K]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{children:[N||j?"":(0,r.jsxs)("div",{children:[(0,r.jsx)("p",{style:{fontWeight:"bolder"},children:"Search Patient"}),(0,r.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[(0,r.jsxs)("div",{className:"d-flex",children:[(0,r.jsx)("input",{style:{paddingLeft:"5px"},className:"form-control",placeholder:"CR no. or Phone no.",type:"text",name:"search",value:C,onKeyPress:e=>{"Enter"===e.key&&(e.preventDefault(),J())},onChange:e=>A(e.target.value)}),(0,r.jsx)("button",{className:"btn btn-primary",style:{marginLeft:"1rem",borderRadius:"5px"},type:"button",onClick:J,children:"Search"}),null!==C&&void 0!==C&&C.length?(0,r.jsx)("button",{className:"btn btn-danger text-light",style:{marginLeft:"1rem",borderRadius:"5px"},type:"button",onClick:()=>{try{A(""),D([])}catch(e){console.log(e)}},children:"Clear"}):""]}),(0,r.jsx)("div",{children:(0,r.jsx)("button",{style:{marginLeft:"1rem",borderRadius:"5px"},type:"button",onClick:()=>w(!0),className:"btn btn-outline-dark",children:"Add a Patient"})})]})]}),null===F||void 0===F||!F.length||N||j?(0,r.jsx)("div",{children:N?(0,r.jsxs)(r.Fragment,{children:[O&&(0,r.jsx)(S,{loading:O}),(0,r.jsx)("div",{className:"content-to-be-blurred",children:(0,r.jsxs)("div",{style:{marginTop:"1rem"},children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("hr",{}),(0,r.jsx)("h4",{children:"Patient Details"}),(0,r.jsxs)("div",{children:[(0,r.jsxs)("div",{className:"row",children:[(0,r.jsx)("div",{className:"col-md-4",children:(0,r.jsxs)("div",{children:[(0,r.jsxs)("label",{className:"col-sm-4 mt-2 patientNamediv",children:["Name ",(0,r.jsx)("span",{style:{color:"red"},children:"*"})]}),(0,r.jsx)("div",{className:"col-sm-8",children:(0,r.jsx)("input",{type:"text",className:"form-control ",name:"name",value:W.name,onChange:e=>z({...W,name:e.target.value})})})]})}),(0,r.jsx)("div",{className:"col-md-4",children:(0,r.jsxs)("div",{children:[(0,r.jsxs)("label",{className:"col-sm-4 mt-2 patientNamediv",children:["Age ",(0,r.jsx)("span",{style:{color:"red"},children:"*"})]}),(0,r.jsx)("div",{className:"col-sm-8",children:(0,r.jsx)("input",{type:"number",className:"form-control ",name:"age",value:W.age,onChange:e=>z({...W,age:e.target.value})})})]})}),(0,r.jsx)("div",{className:"col-md-4",children:(0,r.jsxs)("div",{children:[(0,r.jsxs)("label",{className:"col-sm-4 mt-2 patientNamediv",children:["Sex ",(0,r.jsx)("span",{style:{color:"red"},children:"*"})]}),(0,r.jsx)("div",{className:"col-sm-8",children:(0,r.jsxs)("select",{className:"form-control ",name:"sex",value:W.sex,onChange:e=>z({...W,sex:e.target.value}),children:[(0,r.jsx)("option",{value:"male",children:"Male"}),(0,r.jsx)("option",{value:"female",children:"Female"}),(0,r.jsx)("option",{value:"other",children:"Other"})]})})]})})]}),(0,r.jsxs)("div",{className:"row ",children:[(0,r.jsx)("div",{className:"col-md-4 mt-4",children:(0,r.jsxs)("div",{children:[(0,r.jsxs)("label",{className:"col-lg-4 patientNamediv",children:["Phone No ",(0,r.jsx)("span",{style:{color:"red"},children:"*"})]}),(0,r.jsx)("div",{className:" col-lg-8 col-sm-8",children:(0,r.jsx)("input",{className:"form-control ",type:"text",name:"phone",value:W.phone,onChange:e=>{(/^\d*$/.test(e.target.value)||""===e.target.value)&&z({...W,phone:e.target.value})},required:!0})})]})}),(0,r.jsx)("div",{className:"col-md-4 mt-4",children:(0,r.jsxs)("div",{children:[(0,r.jsxs)("label",{className:"col-sm-4  patientNamediv",children:["CR No ",(0,r.jsx)("span",{style:{color:"red"},children:"*"})]}),(0,r.jsx)("div",{className:"col-sm-8",children:(0,r.jsx)("input",{className:"form-control ",type:"test",name:"crn",value:W.crn,onChange:e=>z({...W,crn:e.target.value}),required:!0})})]})})]})]}),(0,r.jsx)("hr",{}),(0,r.jsx)("div",{style:{margin:"1rem auto 1rem 0"},children:(0,r.jsxs)("h4",{children:["Diagnosis: (",null===u||void 0===u||null===(t=u.department_id)||void 0===t?void 0:t.departmentName,")"]})}),(0,r.jsx)("div",{children:(0,r.jsxs)("form",{className:"mb-3",children:[K.map(((e,t)=>(0,r.jsxs)("div",{className:"row mt-1 mb-2",children:[(0,r.jsx)("div",{className:"col-md-2",children:(0,r.jsx)("label",{children:(0,r.jsxs)("select",{className:"form-control ",style:{width:"10rem",appearance:"auto",height:"38px"},name:"problem",value:e.problem,onChange:e=>X(t,e),children:[(0,r.jsx)("option",{value:"",children:"Chief complaint"}),P.map(((e,t)=>(0,r.jsx)("option",{value:e,children:e},t)))]})})}),(0,r.jsx)("div",{className:"col-md-2",children:(0,r.jsx)("label",{children:(0,r.jsxs)("select",{className:"form-control ",style:{width:"10rem",appearance:"auto",height:"38px"},name:"test",value:e.test,onChange:e=>X(t,e),children:[(0,r.jsx)("option",{value:"",children:"Select Test"}),I.map(((e,t)=>(0,r.jsx)("option",{value:e.name,children:e.name},t)))]})})}),""===e.test?"":(0,r.jsx)("div",{className:"col-md-2",children:I.map(((n,a)=>{if(n.name===e.test){if("text"===n.inputType)return(0,r.jsx)("label",{children:(0,r.jsx)("input",{className:"form-control",style:{width:"10rem"},placeholder:"Enter test Value",type:"text",name:"testInput",value:e.testInput,onChange:e=>X(t,e)})},a);if("file"===n.inputType)return(0,r.jsx)("label",{children:(0,r.jsx)("input",{className:"form-control",style:{width:"10rem"},type:"file",name:"testInput",onChange:e=>((e,t)=>{const{name:n,files:a}=t.target,s=[...K];s[e][n]=a[0],G(s),console.log("Guarv",K)})(t,e)})},a)}return null}))}),(0,r.jsx)("div",{className:"col-md-2",children:(0,r.jsx)("label",{children:(0,r.jsxs)("select",{className:"form-control ",style:{width:"10rem",appearance:"auto",height:"38px"},name:"scale",value:e.scale,onChange:e=>X(t,e),children:[(0,r.jsx)("option",{value:"",children:"Select Scale"}),T.map(((e,t)=>(0,r.jsx)("option",{value:e,children:e},t)))]})})}),(0,r.jsx)("div",{className:"col-md-2",children:(0,r.jsx)("label",{children:(0,r.jsx)("input",{className:"form-control ",style:{width:"10rem",appearance:"auto"},placeholder:"Enter Scale Value",type:"text",name:"value",value:e.value,onChange:e=>X(t,e)})})}),(0,r.jsx)("div",{className:"col-md-2 d-flex justify-content-center",children:$&&(0,r.jsx)("button",{className:"btn btn-danger",type:"button",onClick:()=>Q(t),children:"Remove"})})]},t))),(0,r.jsx)("div",{className:"d-flex justify-content-end",children:(0,r.jsx)("button",{className:"btn btn-primary me-4",type:"button",onClick:Y,children:"Add More"})})]})}),(0,r.jsx)("div",{children:(0,r.jsx)("textarea",{rows:4,className:"form-control col-12",placeholder:"Notes (Optional)",name:"desc",value:M,onChange:e=>L(e.target.value)})})]}),(0,r.jsx)("div",{children:(0,r.jsx)("div",{className:"d-flex mt-2",children:(0,r.jsx)("div",{className:"w-auto",children:(0,r.jsx)(d.$,{dateAdapter:c.R,children:(0,r.jsx)(o.j,{components:["DateTimePicker"],children:(0,r.jsx)(m.K,{label:"Next Appointment Date",value:y,onChange:e=>{b(e)}})})})})})}),(0,r.jsxs)("div",{className:"text-end m-4",children:[(0,r.jsx)("button",{className:"btn btn-info mt-3 mx-2 w-auto",onClick:async()=>{if(A(""),!W.name||!W.age||!W.sex||!W.phone||!W.crn)return h.oR.warning("Please fill all Patient details");if(1===K.length&&""===K[0].problem)return h.oR.warning("Please select at least one Chief complaint");for(const a of K){if(""!==a.test&&""===a.testInput)return void h.oR.warning("Please give input for selected test");if(""!==a.scale&&""===a.value)return void h.oR.warning("Please give input for selected scale");console.log("data",a)}B(!0);try{await Promise.all(K.map((async(e,t)=>{if("string"!==typeof e.testInput){const n=e.testInput,a=new FormData;a.append("file",n);const r=await(0,s.De)("".concat(l,"/api/user/uploadPatientReport"),a);r&&(K[t].testInput=null===r||void 0===r?void 0:r.fileName)}})))}catch(n){B(!1),console.error("Error submitting data:",n)}const e={...W,diagnosis:[{diagnosData:K,date:Date(),desc:M}],nextApointmentDate:y};try{var t;const n=await(0,s.Hl)("".concat(l,"/api/patient/create"),e);!0===n.success&&(h.oR.success("Patient Created Successfully",{autoClose:2e3}),f(!0),w(!1),setTimeout((()=>{v(!0),f(!1),L(""),b(null),G([{problem:"",test:"",testInput:"",scale:"",value:""}])}),2e3),z({name:"",age:"",sex:"male",phone:"",crn:"",diagnosis:[],desc:"",doctor_id:null===u||void 0===u?void 0:u._id})),"phone Already Exists"==n.message&&(h.oR.warning("phone Already Exists"),B(!1)),"Crn Already Exists"==n.message&&(h.oR.warning("Crn Already Exists"),B(!1)),console.log("data",n),A(null===n||void 0===n||null===(t=n.data)||void 0===t?void 0:t.crn)}catch(n){h.oR.warning("Something went wrong"),B(!1),console.error("Error submitting data:",n)}},children:"Submit"}),(0,r.jsx)("button",{className:"btn btn-info mt-3 w-auto",onClick:()=>w(!1),children:"Close"})]})]})})]}):(0,r.jsx)("div",{children:j?"":(0,r.jsx)("div",{style:{width:"100%",height:"20vh",lineHeight:"20vh",textAlign:"center",backgroundColor:"white",marginTop:"10px"},children:x?(0,r.jsx)(ue,{}):"No Data"})})}):(0,r.jsx)(k,{patientSearch:F,setData:w,getSearchByPatient:J})]}),j?(0,r.jsx)(pe,{}):"",(0,r.jsx)(h.N9,{})]})}},62377:()=>{}}]);
//# sourceMappingURL=4688.889440b7.chunk.js.map