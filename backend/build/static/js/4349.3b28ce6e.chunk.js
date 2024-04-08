"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[4349],{4349:(e,t,l)=>{l.r(t),l.d(t,{default:()=>w});var s=l(65043),a=l(63043),n=l(77154),i=l(6145),o=l(96026),r=l(91036),c=l(84086),d=l(70579);const m=e=>{let{diagnosis:t}=e;const[l,a]=(0,s.useState)([]),[m,u]=(0,s.useState)(!1),[p,h]=(0,s.useState)({});(0,s.useEffect)((()=>{if(t&&Array.isArray(t)){const e=[...t].reverse();a(e)}}),[t]);const[x,v]=(0,s.useState)(null);return(0,d.jsxs)("div",{style:{maxHeight:"300px",marginTop:"20px"},children:[null===l||void 0===l?void 0:l.map(((e,t)=>{var l;const s=new Date(e.date).toLocaleDateString("en-IN",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",hour12:!0}).replace(/\//g,"/");return(0,d.jsx)("div",{children:(0,d.jsxs)("div",{className:"row",children:[(0,d.jsxs)("div",{style:{margin:"1rem auto 1rem 1rem",overflow:"auto !important"},children:[(0,d.jsxs)("h5",{children:["Diagnose Date: ",s]}),(0,d.jsxs)("table",{className:"table",style:{width:"90%",border:"1px solid",fontFamily:"ui-rounded",borderRadius:"10px"},children:[(0,d.jsxs)("colgroup",{children:[(0,d.jsx)("col",{style:{width:"20%"}}),(0,d.jsx)("col",{style:{width:"20%"}}),(0,d.jsx)("col",{style:{width:"20%"}}),(0,d.jsx)("col",{style:{width:"20%"}}),(0,d.jsx)("col",{style:{width:"20%"}})]}),(0,d.jsx)("thead",{children:(0,d.jsxs)("tr",{children:[(0,d.jsx)("th",{scope:"col",style:{background:"#FBF295"},children:"Problems"}),(0,d.jsx)("th",{scope:"col",style:{background:"#FBF295"},children:"Test"}),(0,d.jsx)("th",{scope:"col",style:{background:"#FBF295"},children:"Test value"}),(0,d.jsx)("th",{scope:"col",style:{background:"#FBF295"},children:"Scale"}),(0,d.jsx)("th",{scope:"col",style:{background:"#FBF295"},children:"Scale value"})]})}),null===e||void 0===e||null===(l=e.diagnosData)||void 0===l?void 0:l.map(((e,t)=>{var l;const{problem:s,scale:a,test:r,testInput:p,value:h}=e;return(0,d.jsxs)("tbody",{children:[m&&(0,d.jsx)(c.A,{message:"loading"}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{style:{fontWeight:"bolder"},children:s}),(0,d.jsx)("td",{style:{fontWeight:"bolder"},children:""===r?"-":r}),(0,d.jsx)("td",{style:{fontWeight:"bolder"},children:""===r?"-":null!==p&&void 0!==p&&p.text?p.text:(0,d.jsx)("div",{style:{display:"flex"},children:null===p||void 0===p||null===(l=p.files)||void 0===l?void 0:l.map(((e,t)=>(0,d.jsx)("div",{value:e.fileName,style:{display:"flex",alignItems:"center",marginRight:"10px"},onMouseEnter:()=>(e=>{const t=(e=>{if(e){const t=e,l=t.split("_");return l.length>1?l.slice(1).join("_").split(".")[0]:t}return""})(e);v(t)})(e.fileName),onMouseLeave:()=>{v(null)},onClick:()=>(async(e,t)=>{try{u(!0);const t=await n.A.get("".concat("http://18.204.141.1:8090","/api/user/getPatientReport/").concat(e),{responseType:"blob"}),l=new Blob([t.data],{type:t.headers["content-type"]}),s=URL.createObjectURL(l);window.open(s)}catch(l){u(!1),console.error("Error fetching report:",l)}finally{u(!1)}})(null===e||void 0===e?void 0:e.fileName),children:(0,d.jsx)("button",{type:"button",className:"btn btn-sm btn-primary","data-toggle":"popover",title:x,style:{margin:"0"},children:(0,d.jsx)(i.A,{icon:o.I})})},t)))})}),console.log("Guarav",p),(0,d.jsx)("td",{style:{fontWeight:"bolder"},children:""===a?"-":a}),(0,d.jsx)("td",{style:{fontWeight:"bolder"},children:""===h?"-":h})]})]},t)}))]}),(0,d.jsx)("div",{className:"row",children:(0,d.jsx)("div",{style:{margin:"1rem auto 1rem 1rem"},children:(0,d.jsxs)("div",{className:"row",style:{marginTop:"1rem"},children:[(0,d.jsx)("div",{className:"col-md-2 d-flex align-items-center",children:(0,d.jsx)("h5",{children:"Notes:"})}),(0,d.jsx)("div",{className:"col-md-10 d-flex align-items-center",children:(0,d.jsx)("div",{className:"card",style:{width:"87%",padding:"1rem 2rem"},children:(0,d.jsx)("p",{style:{margin:"0"},children:""===e.desc?"-":e.desc})})})]})})})]}),(0,d.jsx)("hr",{})]})},t)})),(0,d.jsx)(r.N9,{})]})};var u=l(14182),p=l(66921),h=l(58390),x=l(98572);l(92342);const v=e=>{var t;let{_id:l,getSearchByPatient:n,setIsAddNewDiagnosis:i,setIsDetailed:o,diagnosisProp:m}=e,v="http://18.204.141.1:8090",g=localStorage.getItem("patientRecord"),j=JSON.parse(g);const[f,y]=(0,s.useState)([{problem:"",test:"",testInput:{files:"",text:""},scale:"",value:""}]),[b,N]=(0,s.useState)("");(0,s.useEffect)((()=>{const e=m[m.length-1],t=null===e||void 0===e?void 0:e.diagnosData[(null===e||void 0===e?void 0:e.diagnosData.length)-1];y([{problem:t.problem||"",test:"",testInput:{files:"",text:""},scale:"",value:""}])}),[]);const[w,S]=s.useState(null),[C,D]=(0,s.useState)({}),[R,A]=(0,s.useState)(""),[I,P]=(0,s.useState)({diagnosis:[],desc:""}),[E,_]=(0,s.useState)([]);let[k,T]=(0,s.useState)(!1);const[F,L]=(0,s.useState)([]),[B,W]=(0,s.useState)([]),[O,J]=(0,s.useState)([]),[M,U]=(0,s.useState)(!1);(0,s.useEffect)((()=>{z()}),[]);const z=async()=>{try{var e,t;const l=await(0,a.J4)("".concat(v,"/api/problem/").concat(null===j||void 0===j||null===(e=j.department_id)||void 0===e?void 0:e._id)),s=null===l||void 0===l||null===(t=l.data)||void 0===t?void 0:t.data[0];if(s){const e=s.problemName.filter((e=>"problem"===e.type)).map((e=>e.name)),t=s.problemName.filter((e=>"scale"===e.type)).map((e=>e.name)),l=s.problemName.filter((e=>"test"===e.type)).map((e=>{let{name:t,inputType:l}=e;return{name:t,inputType:l}}));W(l),J(t),L(e)}}catch(l){console.error("Error fetching problems:",l)}};(0,s.useEffect)((()=>{C.desc&&P((e=>({...e,desc:C.desc})))}),[C]),(0,s.useEffect)((()=>{(async()=>{try{const e=await(0,a.J4)("".concat(v,"/api/patient/").concat(l));D(e.data.data)}catch(e){console.log(e)}})()}),[]);let[H,V]=(0,s.useState)(!1);const K=(e,t)=>{const{name:l,value:s}=t.target,a=[...f];a[e][l]=s,y(a)},$=()=>{y([...f,{problem:"",test:"",testInput:{files:"",text:""},scale:"",value:""}])},q=e=>{const t=[...f];t.splice(e,1),y(t)};return(0,s.useEffect)((()=>{f.length>1?V(!0):V(!1)}),[q,$,K]),(0,d.jsxs)(d.Fragment,{children:[k&&(0,d.jsx)(c.A,{loading:k,message:"Uploading Files"}),M&&(0,d.jsx)(c.A,{message:"Adding Diagnosis"}),(0,d.jsxs)("div",{style:{margin:"1rem auto 1rem 1rem"},children:[(0,d.jsx)("div",{style:{margin:"1rem auto 1rem 0"},children:(0,d.jsxs)("h4",{children:["Diagnosis: (",null===j||void 0===j||null===(t=j.department_id)||void 0===t?void 0:t.departmentName,")"]})}),(0,d.jsxs)("form",{onSubmit:async e=>{if(e.preventDefault(),1===f.length&&""===f[0].problem)return r.oR.warning("Please select at least one Chief complaint");for(const l of f){if(""!==(null===l||void 0===l?void 0:l.test)&&""===(null===l||void 0===l?void 0:l.testInput))return void r.oR.warning("Please give input for selected test");if(""!==(null===l||void 0===l?void 0:l.scale)&&""===(null===l||void 0===l?void 0:l.value))return void r.oR.warning("Please give input for selected scale");console.log("data",l)}T(!0);try{await Promise.all(f.map((async(e,t)=>{if(e.testInput.files){const l=e.testInput.files;if(l.length>0){const e=new FormData;if(l.forEach((t=>{["image/jpeg","image/png","application/pdf"].includes(t.type)?e.append("files",t):console.warn("File type not allowed:",t.type)})),e.has("files")){const l=await(0,a.De)("".concat(v,"/api/user/uploadPatientReport"),e);l&&(T(!1),f[t].testInput.files=l.filesInfo)}else console.warn("No valid files to upload")}}else f[t].testInput.files=null})))}catch(t){return T(!1),void console.error("Error uploading files:",t)}try{U(!0);const e={...I,diagnosis:[{diagnosData:f,date:Date(),desc:R}],nextApointmentDate:w};await(0,a.E8)("".concat(v,"/api/patient/update/").concat(l),e)&&(_([]),A(""),r.oR.success("Patient Updated Successfully",{autoClose:1e3}),setTimeout((()=>{i(!1),o(!0),y([{problem:"",test:"",testInput:{files:"",text:""},scale:"",value:""}]),U(!1)}),2e3),n())}catch(t){console.log(t)}},children:[(0,d.jsxs)("form",{className:"mb-3",children:[f.map(((e,t)=>(0,d.jsxs)("div",{className:"row mt-1 mb-2",children:[(0,d.jsx)("div",{className:"col-md-2",children:(0,d.jsx)("label",{children:(0,d.jsxs)("select",{className:"form-control ",style:{width:"10rem",appearance:"auto",height:"38px"},name:"problem",value:e.problem,onChange:e=>K(t,e),children:[(0,d.jsx)("option",{value:"",children:"Chief complaint"}),F.map(((e,t)=>(0,d.jsx)("option",{value:e,children:e},t)))]})})}),(0,d.jsx)("div",{className:"col-md-2",children:(0,d.jsx)("label",{children:(0,d.jsxs)("select",{className:"form-control ",style:{width:"10rem",appearance:"auto",height:"38px"},name:"test",value:e.test,onChange:e=>K(t,e),children:[(0,d.jsx)("option",{value:"",children:"Select Test"}),B.map(((e,t)=>(0,d.jsx)("option",{value:e.name,children:e.name},t)))]})})}),""===e.test?(0,d.jsx)("div",{className:"col-md-2",children:(0,d.jsx)("label",{children:(0,d.jsx)("input",{className:"form-control ",style:{width:"10rem",appearance:"auto"},placeholder:"Select a Test",type:"text",disabled:"true"})})}):(0,d.jsx)("div",{className:"col-md-2",children:B.map(((l,s)=>{if(l.name===e.test){if("text"===l.inputType)return(0,d.jsx)("label",{children:(0,d.jsx)("input",{className:"form-control",style:{width:"10rem"},placeholder:"Enter test Value",type:"text",name:"testInput",value:e.testInput.text,onChange:e=>((e,t)=>{const{name:l,value:s}=t.target,a=[...f];a[e][l]={text:s},y(a)})(t,e)})},s);if("file"===l.inputType)return(0,d.jsx)("label",{children:(0,d.jsx)("input",{className:"form-control",style:{width:"10rem"},type:"file",multiple:!0,name:"testInput",accept:"image/jpeg, image/png, application/pdf",onChange:e=>((e,t)=>{const{name:l,files:s}=t.target,a=["image/jpeg","image/png","application/pdf"];if(s.length>3)return t.target.value="",void r.oR.warning("You can only upload up to 3 files",{autoClose:1500});const n=[...f],i=Array.from(s).filter((e=>e.size>31457280?(r.oR.warning("File size should be less than 30 MB",{autoClose:1500}),!1):!!a.includes(e.type)||(r.oR.warning("Only images and PDFs are allowed",{autoClose:1500}),!1)));n[e][l]={files:i},y(n)})(t,e)})},s)}return null}))}),(0,d.jsx)("div",{className:"col-md-2",children:(0,d.jsx)("label",{children:(0,d.jsxs)("select",{className:"form-control ",style:{width:"10rem",appearance:"auto",height:"38px"},name:"scale",value:e.scale,onChange:e=>K(t,e),children:[(0,d.jsx)("option",{value:"",children:"Select Scale"}),O.map(((e,t)=>(0,d.jsx)("option",{value:e,children:e},t)))]})})}),(0,d.jsx)("div",{className:"col-md-2",children:(0,d.jsx)("label",{children:(0,d.jsx)("input",{className:"form-control ",style:{width:"10rem",appearance:"auto"},placeholder:"Enter Scale Value",type:"text",name:"value",value:e.value,onChange:e=>K(t,e)})})}),(0,d.jsx)("div",{className:"col-md-2 d-flex justify-content-center",children:H&&(0,d.jsx)("button",{className:"btn btn-danger",type:"button",onClick:()=>q(t),children:"Remove"})})]},t))),(0,d.jsx)("div",{className:"d-flex justify-content-end",children:(0,d.jsx)("button",{className:"btn btn-primary me-4",type:"button",onClick:$,children:"Add More"})})]}),(0,d.jsx)("div",{children:(0,d.jsx)("textarea",{rows:4,className:"form-control col-12",placeholder:"Notes (Optional)",name:"desc",value:R,onChange:e=>A(e.target.value)})}),(0,d.jsx)("div",{className:"d-flex mt-2",children:(0,d.jsx)("div",{className:"w-auto",children:(0,d.jsx)(h.$,{dateAdapter:p.R,children:(0,d.jsx)(u.j,{components:["DateTimePicker"],children:(0,d.jsx)(x.K,{label:"Next Appointment Date",value:w,onChange:e=>{S(e)}})})})})}),(0,d.jsxs)("div",{className:"text-end",children:[(0,d.jsx)("button",{type:"submit",className:"btn btn-primary mt-4",style:{width:"10rem"},children:"Submit"}),(0,d.jsx)("button",{type:"submit",className:"btn btn-danger mt-4 ms-2",style:{width:"10rem"},onClick:()=>(i(!1),void o(!0)),children:"Close"})]})]}),(0,d.jsx)(r.N9,{})]})]})},g=e=>{let{patientSearch:t,getSearchByPatient:l}=e;const[a,n]=(0,s.useState)(!1),[i,o]=(0,s.useState)(!1),[r,c]=(0,s.useState)(""),[u,p]=(0,s.useState)("");return(0,d.jsx)("div",{children:null===t||void 0===t?void 0:t.map((e=>{const{name:t,crn:s,phone:h,age:x,sex:g,diagnosis:j,_id:f,desc:y,nextApointmentDate:b}=e,N=r===f,w=u===f,S=j,C=new Date(b).toLocaleString("en-IN",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",hour12:!0}).replace(/\//g,"/");return(0,d.jsx)("div",{className:"row",children:(0,d.jsx)("div",{style:{marginTop:"2rem"},children:(0,d.jsx)("div",{className:"card",style:{width:"100%"},children:(0,d.jsxs)("div",{className:"card-body overflow-auto ",children:[(0,d.jsxs)("h5",{className:"card-title",children:[" CR No : ",s]}),(0,d.jsx)("h6",{className:"card-subtitle mt-2",children:(0,d.jsxs)("h5",{children:["Name : ",t]})}),(0,d.jsxs)("div",{style:{display:"flex",marginTop:"1rem"},children:[(0,d.jsxs)("span",{style:{display:"flex"},children:[(0,d.jsx)("h6",{children:"Phone No. \xa0"})," ",(0,d.jsx)("h6",{style:{fontWeight:"normal"},children:h})]}),(0,d.jsxs)("span",{style:{display:"flex",marginLeft:"2rem"},children:[(0,d.jsx)("h6",{children:"Age. \xa0"})," ",(0,d.jsx)("h6",{style:{fontWeight:"normal"},children:x})]}),(0,d.jsxs)("span",{style:{display:"flex",marginLeft:"2rem"},children:[(0,d.jsx)("h6",{children:" Sex. \xa0"})," ",(0,d.jsx)("h6",{style:{fontWeight:"normal"},children:g})]}),(0,d.jsxs)("span",{style:{display:"flex",marginLeft:"2rem"},children:[(0,d.jsx)("h6",{children:"Next Appointment Date. \xa0"})," ",(0,d.jsx)("h6",{style:{fontWeight:"normal"},children:b?C:"-"})]})]}),(0,d.jsxs)("div",{className:"text-end",children:[(0,d.jsx)("button",{type:"button",className:"btn btn-success",onClick:()=>{return e=f,c((t=>t===e?"":e)),p(""),void o(!0);var e},children:"Show Diagnosis"}),(0,d.jsx)("button",{type:"button",className:"btn btn-warning",style:{marginLeft:"2rem"},onClick:()=>{return p(e=f),c(e),n(!0),void o(!1);var e},children:j?"Add New Follow-Up":"Add New Diagnosis"})]}),N&&i&&(0,d.jsx)("div",{children:(0,d.jsx)(m,{diagnosis:j,desc:y})}),w&&a&&(0,d.jsx)("div",{children:(0,d.jsx)(v,{_id:f,getSearchByPatient:l,setIsAddNewDiagnosis:n,setIsDetailed:o,diagnosisProp:S})})]})})})},f)}))})};l(83910);var j=l(63483),f=l(81637),y=l(96446);const b=()=>(0,d.jsx)(y.A,{style:{width:"100%",height:"100%",lineHeight:"20vh",textAlign:"center",marginTop:"10px"},children:(0,d.jsx)(f.A,{})});var N=l(73216);const w=()=>{var e,t;const l=(0,N.zy)();console.log("location",Number(null===l||void 0===l||null===(e=l.state)||void 0===e?void 0:e.crn));let n="http://18.204.141.1:8090",i=localStorage.getItem("patientRecord"),o=JSON.parse(i);const[m,v]=(0,s.useState)(!1),[f,y]=(0,s.useState)(!1),[w,S]=(0,s.useState)(!1),[C,D]=s.useState(null),[R,A]=(0,s.useState)(!1),[I,P]=(0,s.useState)(""),[E,_]=(0,s.useState)([]),[k,T]=(0,s.useState)([]),[F,L]=(0,s.useState)([]),[B,W]=(0,s.useState)([]);let[O,J]=(0,s.useState)(!1);const[M,U]=(0,s.useState)(""),[z,H]=(0,s.useState)({name:"",age:"",sex:"male",phone:"",crn:"",diagnosis:[],desc:"",doctor_id:null===o||void 0===o?void 0:o._id});console.log("value date",C),(0,s.useEffect)((()=>{P(""),V()}),[]);const V=async()=>{try{var e,t;const l=await(0,a.J4)("".concat(n,"/api/problem/").concat(null===o||void 0===o||null===(e=o.department_id)||void 0===e?void 0:e._id)),s=null===l||void 0===l||null===(t=l.data)||void 0===t?void 0:t.data[0];if(s){const e=s.problemName.filter((e=>"problem"===e.type)).map((e=>e.name)),t=s.problemName.filter((e=>"scale"===e.type)).map((e=>e.name)),l=s.problemName.filter((e=>"test"===e.type)).map((e=>{let{name:t,inputType:l}=e;return{name:t,inputType:l}}));L(l),W(t),T(e)}}catch(l){console.error("Error fetching problems:",l)}};console.log("problems",k);const K=async()=>{try{var e,t;let s=I||(null===l||void 0===l||null===(e=l.state)||void 0===e?void 0:e.crn);if(0===(null===s||void 0===s?void 0:s.length))return;y(!0);const i=await(0,a.J4)("".concat(n,"/api/patient/").concat(s));console.log("searchData",i),_(null===i||void 0===i||null===(t=i.data)||void 0===t?void 0:t.data),setTimeout((()=>{y(!1)}),3e3)}catch(s){console.log(s)}};(0,s.useEffect)((()=>{console.log("before",Q)}));(0,s.useEffect)((()=>{!0===m&&K()}),[m]);let[$,q]=(0,s.useState)(new Date);(0,s.useEffect)((()=>{var e,t;null!==l&&void 0!==l&&null!==(e=l.state)&&void 0!==e&&e.crn&&(P(null===l||void 0===l||null===(t=l.state)||void 0===t?void 0:t.crn),K())}),[l]);let[Y,G]=(0,s.useState)(!1);const[Q,X]=(0,s.useState)([{problem:"",test:"",testInput:{files:"",text:""},scale:"",value:""}]),Z=(e,t)=>{const{name:l,value:s}=t.target,a=[...Q];a[e][l]=s,X(a)},ee=()=>{X([...Q,{problem:"",test:"",testInput:{files:"",text:""},scale:"",value:""}])},te=e=>{const t=[...Q];t.splice(e,1),X(t)};return(0,s.useEffect)((()=>{Q.length>1?G(!0):G(!1)}),[te,ee,Z]),(0,s.useEffect)((()=>{console.log("Updated inputs:",Q)}),[Q]),(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)("div",{children:[R||w?"":(0,d.jsxs)("div",{children:[(0,d.jsx)("p",{style:{fontWeight:"bolder"},children:"Search Patient"}),(0,d.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[(0,d.jsxs)("div",{className:"d-flex",children:[(0,d.jsx)("input",{style:{paddingLeft:"5px"},className:"form-control",placeholder:"CR no. or Phone no.",type:"text",name:"search",value:I,onKeyPress:e=>{"Enter"===e.key&&(e.preventDefault(),K())},onChange:e=>P(e.target.value)}),(0,d.jsx)("button",{className:"btn btn-primary",style:{marginLeft:"1rem",borderRadius:"5px"},type:"button",onClick:K,children:"Search"}),null!==I&&void 0!==I&&I.length?(0,d.jsx)("button",{className:"btn btn-danger text-light",style:{marginLeft:"1rem",borderRadius:"5px"},type:"button",onClick:()=>{try{P(""),_([])}catch(e){console.log(e)}},children:"Clear"}):""]}),(0,d.jsx)("div",{children:(0,d.jsx)("button",{style:{marginLeft:"1rem",borderRadius:"5px"},type:"button",onClick:()=>A(!0),className:"btn btn-outline-dark",children:"Add a Patient"})})]})]}),null===E||void 0===E||!E.length||R||w?(0,d.jsx)("div",{children:R?(0,d.jsxs)(d.Fragment,{children:[O&&(0,d.jsx)(c.A,{loading:O}),(0,d.jsx)("div",{className:"content-to-be-blurred",children:(0,d.jsxs)("div",{style:{marginTop:"1rem"},children:[(0,d.jsxs)("div",{children:[(0,d.jsx)("hr",{}),(0,d.jsx)("h4",{children:"Patient Details"}),(0,d.jsxs)("div",{children:[(0,d.jsxs)("div",{className:"row",children:[(0,d.jsx)("div",{className:"col-md-4",children:(0,d.jsxs)("div",{children:[(0,d.jsxs)("label",{className:"col-sm-4 mt-2 patientNamediv",children:["Name ",(0,d.jsx)("span",{style:{color:"red"},children:"*"})]}),(0,d.jsx)("div",{className:"col-sm-8",children:(0,d.jsx)("input",{type:"text",className:"form-control ",name:"name",value:z.name,onChange:e=>H({...z,name:e.target.value})})})]})}),(0,d.jsx)("div",{className:"col-md-4",children:(0,d.jsxs)("div",{children:[(0,d.jsxs)("label",{className:"col-sm-4 mt-2 patientNamediv",children:["Age ",(0,d.jsx)("span",{style:{color:"red"},children:"*"})]}),(0,d.jsx)("div",{className:"col-sm-8",children:(0,d.jsx)("input",{type:"number",className:"form-control ",name:"age",value:z.age,onChange:e=>H({...z,age:e.target.value})})})]})}),(0,d.jsx)("div",{className:"col-md-4",children:(0,d.jsxs)("div",{children:[(0,d.jsxs)("label",{className:"col-sm-4 mt-2 patientNamediv",children:["Sex ",(0,d.jsx)("span",{style:{color:"red"},children:"*"})]}),(0,d.jsx)("div",{className:"col-sm-8",children:(0,d.jsxs)("select",{className:"form-control ",name:"sex",value:z.sex,onChange:e=>H({...z,sex:e.target.value}),children:[(0,d.jsx)("option",{value:"male",children:"Male"}),(0,d.jsx)("option",{value:"female",children:"Female"}),(0,d.jsx)("option",{value:"other",children:"Other"})]})})]})})]}),(0,d.jsxs)("div",{className:"row ",children:[(0,d.jsx)("div",{className:"col-md-4 mt-4",children:(0,d.jsxs)("div",{children:[(0,d.jsxs)("label",{className:"col-lg-4 patientNamediv",children:["Phone No ",(0,d.jsx)("span",{style:{color:"red"},children:"*"})]}),(0,d.jsx)("div",{className:" col-lg-8 col-sm-8",children:(0,d.jsx)("input",{className:"form-control ",type:"text",name:"phone",value:z.phone,onChange:e=>{(/^\d*$/.test(e.target.value)||""===e.target.value)&&H({...z,phone:e.target.value})},required:!0})})]})}),(0,d.jsx)("div",{className:"col-md-4 mt-4",children:(0,d.jsxs)("div",{children:[(0,d.jsxs)("label",{className:"col-sm-4  patientNamediv",children:["CR No ",(0,d.jsx)("span",{style:{color:"red"},children:"*"})]}),(0,d.jsx)("div",{className:"col-sm-8",children:(0,d.jsx)("input",{className:"form-control ",type:"test",name:"crn",value:z.crn,onChange:e=>H({...z,crn:e.target.value}),required:!0})})]})})]})]}),(0,d.jsx)("hr",{}),(0,d.jsx)("div",{style:{margin:"1rem auto 1rem 0"},children:(0,d.jsxs)("h4",{children:["Diagnosis: (",null===o||void 0===o||null===(t=o.department_id)||void 0===t?void 0:t.departmentName,")"]})}),(0,d.jsx)("div",{children:(0,d.jsxs)("form",{className:"mb-3",children:[Q.map(((e,t)=>(0,d.jsxs)("div",{className:"row mt-1 mb-2",children:[(0,d.jsx)("div",{className:"col-md-2",children:(0,d.jsx)("label",{children:(0,d.jsxs)("select",{className:"form-control ",style:{width:"10rem",appearance:"auto",height:"38px"},name:"problem",value:e.problem,onChange:e=>Z(t,e),children:[(0,d.jsx)("option",{value:"",children:"Chief complaint"}),k.map(((e,t)=>(0,d.jsx)("option",{value:e,children:e},t)))]})})}),(0,d.jsx)("div",{className:"col-md-2",children:(0,d.jsx)("label",{children:(0,d.jsxs)("select",{className:"form-control ",style:{width:"10rem",appearance:"auto",height:"38px"},name:"test",value:e.test,onChange:e=>Z(t,e),children:[(0,d.jsx)("option",{value:"",children:"Select Test"}),F.map(((e,t)=>(0,d.jsx)("option",{value:e.name,children:e.name},t)))]})})}),""===e.test?(0,d.jsx)("div",{className:"col-md-2",children:(0,d.jsx)("label",{children:(0,d.jsx)("input",{className:"form-control ",style:{width:"10rem",appearance:"auto"},placeholder:"Select a Test",type:"text",disabled:"true"})})}):(0,d.jsx)("div",{className:"col-md-2",children:F.map(((l,s)=>{if(l.name===e.test){if("text"===l.inputType)return(0,d.jsx)("label",{children:(0,d.jsx)("input",{className:"form-control",style:{width:"10rem"},placeholder:"Enter test Value",type:"text",name:"testInput",value:e.testInput.text,onChange:e=>((e,t)=>{const{name:l,value:s}=t.target,a=[...Q];a[e][l]={text:s},X(a)})(t,e)})},s);if("file"===l.inputType)return(0,d.jsx)("label",{children:(0,d.jsx)("input",{className:"form-control",style:{width:"10rem"},type:"file",multiple:!0,name:"testInput",accept:"image/jpeg, image/png, application/pdf",onChange:e=>((e,t)=>{const{name:l,files:s}=t.target,a=["image/jpeg","image/png","application/pdf"];if(s.length>3)return t.target.value="",void r.oR.warning("You can only upload up to 3 files",{autoClose:1500});const n=[...Q],i=Array.from(s).filter((e=>e.size>31457280?(r.oR.warning("File size should be less than 30 MB",{autoClose:1500}),!1):!!a.includes(e.type)||(r.oR.warning("Only images and PDFs are allowed",{autoClose:1500}),!1)));n[e][l]={files:i},X(n)})(t,e)})},s)}return null}))}),(0,d.jsx)("div",{className:"col-md-2",children:(0,d.jsx)("label",{children:(0,d.jsxs)("select",{className:"form-control ",style:{width:"10rem",appearance:"auto",height:"38px"},name:"scale",value:e.scale,onChange:e=>Z(t,e),children:[(0,d.jsx)("option",{value:"",children:"Select Scale"}),B.map(((e,t)=>(0,d.jsx)("option",{value:e,children:e},t)))]})})}),(0,d.jsx)("div",{className:"col-md-2",children:(0,d.jsx)("label",{children:(0,d.jsx)("input",{className:"form-control ",style:{width:"10rem",appearance:"auto"},placeholder:"Enter Scale Value",type:"text",name:"value",value:e.value,onChange:e=>Z(t,e)})})}),(0,d.jsx)("div",{className:"col-md-2 d-flex justify-content-center",children:Y&&(0,d.jsx)("button",{className:"btn btn-danger",type:"button",onClick:()=>te(t),children:"Remove"})})]},t))),(0,d.jsx)("div",{className:"d-flex justify-content-end",children:(0,d.jsx)("button",{className:"btn btn-primary me-4",type:"button",onClick:ee,children:"Add More"})})]})}),(0,d.jsx)("div",{children:(0,d.jsx)("textarea",{rows:4,className:"form-control col-12",placeholder:"Notes (Optional)",name:"desc",value:M,onChange:e=>U(e.target.value)})})]}),(0,d.jsx)("div",{children:(0,d.jsx)("div",{className:"d-flex mt-2",children:(0,d.jsx)("div",{className:"w-auto",children:(0,d.jsx)(h.$,{dateAdapter:p.R,children:(0,d.jsx)(u.j,{components:["DateTimePicker"],children:(0,d.jsx)(x.K,{label:"Next Appointment Date",value:C,onChange:e=>{D(e)}})})})})})}),(0,d.jsxs)("div",{className:"text-end m-4",children:[(0,d.jsx)("button",{className:"btn btn-info mt-3 mx-2 w-auto",onClick:async()=>{if(console.log("updatedFormData",Q),P(""),!z.name||!z.age||!z.sex||!z.phone||!z.crn)return r.oR.warning("Please fill all Patient details");if(1===Q.length&&""===Q[0].problem)return r.oR.warning("Please select at least one Chief complaint");for(const a of Q){if(""!==a.test&&""===a.testInput)return void r.oR.warning("Please give input for selected test");if(""!==a.scale&&""===a.value)return void r.oR.warning("Please give input for selected scale");console.log("data",a)}J(!0);try{await Promise.all(Q.map((async(e,t)=>{if(e.testInput.files){const l=e.testInput.files;if(l.length>0){const e=new FormData;if(l.forEach((t=>{["image/jpeg","image/png","application/pdf"].includes(t.type)?e.append("files",t):console.warn("File type not allowed:",t.type)})),e.has("files")){const l=await(0,a.De)("".concat(n,"/api/user/uploadPatientReport"),e);l&&(J(!1),Q[t].testInput.files=l.filesInfo)}else J(!1),console.warn("No valid files to upload")}}else Q[t].testInput.files=null,J(!1)})))}catch(s){return J(!1),void console.error("Error uploading files:",s)}const e={...z,diagnosis:[{diagnosData:Q,date:Date(),desc:M}],nextApointmentDate:C};try{var t,l;const s=await localStorage.getItem("patientRecord"),i=null===(t=JSON.parse(s))||void 0===t?void 0:t._id,c=await(0,a.Hl)("".concat(n,"/api/patient/create/").concat(i),e);!0===c.success&&(r.oR.success("Patient Created Successfully",{autoClose:2e3}),S(!0),A(!1),setTimeout((()=>{v(!0),S(!1),U(""),D(null),X([{problem:"",test:"",testInput:{files:"",text:""},scale:"",value:""}])}),2e3),H({name:"",age:"",sex:"male",phone:"",crn:"",diagnosis:[],desc:"",doctor_id:null===o||void 0===o?void 0:o._id})),"phone Already Exists"===c.message&&(r.oR.warning("phone Already Exists"),J(!1)),"Crn Already Exists"===c.message&&(r.oR.warning("Crn Already Exists"),J(!1)),console.log("data",c),P(null===c||void 0===c||null===(l=c.data)||void 0===l?void 0:l.crn)}catch(s){r.oR.warning("Something went wrong"),J(!1),console.error("Error submitting data:",s)}},children:"Submit"}),(0,d.jsx)("button",{className:"btn btn-info mt-3 w-auto",onClick:()=>A(!1),children:"Close"})]})]})})]}):(0,d.jsx)("div",{children:w?"":(0,d.jsx)("div",{style:{width:"100%",height:"20vh",lineHeight:"20vh",textAlign:"center",backgroundColor:"white",marginTop:"10px"},children:f?(0,d.jsx)(j.A,{}):"No Data"})})}):(0,d.jsx)(g,{patientSearch:E,setData:A,getSearchByPatient:K})]}),w?(0,d.jsx)(b,{}):"",(0,d.jsx)(r.N9,{})]})}}}]);
//# sourceMappingURL=4349.3b28ce6e.chunk.js.map