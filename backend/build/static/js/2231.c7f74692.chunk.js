"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[2231],{22231:(e,l,s)=>{s.r(l),s.d(l,{default:()=>g});var a=s(65043),t=s(63043),n=s(70579);const i=e=>{let{diagnosis:l,desc:s}=e;console.log("dia",l);const[t,i]=(0,a.useState)([]);return(0,a.useEffect)((()=>{l&&Array.isArray(l)&&i([...l].reverse())}),[l]),(0,n.jsx)("div",{style:{maxHeight:"300px",overflowY:"scroll",overflowX:"hidden",marginTop:"20px"},children:null===t||void 0===t?void 0:t.map((e=>{const l=null===e||void 0===e?void 0:e.date,s=new Date(l).toLocaleDateString("en-IN",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",hour12:!0}).replace(/\//g,"/");return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("div",{className:"row",children:[(0,n.jsxs)("div",{style:{margin:"1rem auto 1rem 1rem"},children:[(0,n.jsxs)("h5",{children:["Diagnose Date : ",s]}),(0,n.jsxs)("table",{className:"table",style:{width:"90%",border:"1px solid",fontFamily:"ui-rounded",borderRadius:"10px"},children:[(0,n.jsxs)("colgroup",{children:[(0,n.jsx)("col",{style:{width:"31%"}}),(0,n.jsx)("col",{style:{width:"23%"}}),(0,n.jsx)("col",{style:{width:"23%"}}),(0,n.jsx)("col",{style:{width:"23%"}})]}),(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{scope:"col",style:{background:"#FBF295"},children:"Problems"}),(0,n.jsx)("th",{scope:"col",style:{background:"#FBF295"},children:"VAS"}),(0,n.jsx)("th",{scope:"col",style:{background:"#FBF295"},children:"ODI"}),(0,n.jsx)("th",{scope:"col",style:{background:"#FBF295"},children:"MPSI"})]})}),e.problem.map((e=>{let{name:l,scale1:s,scale2:a,scale3:t}=e;return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("tbody",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{style:{fontWeight:"bolder"},children:l}),(0,n.jsx)("td",{style:{fontWeight:"bolder"},children:s}),(0,n.jsx)("td",{style:{fontWeight:"bolder"},children:a}),(0,n.jsx)("td",{style:{fontWeight:"bolder"},children:t})]})})})}))]}),(0,n.jsx)("div",{className:"row",children:(0,n.jsx)("div",{style:{margin:"1rem auto 1rem 1rem"},children:(0,n.jsxs)("div",{className:"row",style:{marginTop:"1rem"},children:[(0,n.jsx)("div",{className:"col-md-2 d-flex align-items-center",children:(0,n.jsx)("h5",{children:"Prescription:"})}),(0,n.jsx)("div",{className:"col-md-10 d-flex align-items-center",children:(0,n.jsx)("div",{className:"card",style:{width:"87%",padding:"1rem 2rem"},children:(0,n.jsx)("p",{style:{margin:"0"},children:e.desc})})})]})})})]}),(0,n.jsx)("hr",{})]})})}))})};var r=s(52455),d=s(66921),c=s(58390),o=s(84643),m=s(91036);s(92342);const h=e=>{var l;let{_id:s,getSearchByPatient:i,setIsAddNewDiagnosis:h,setIsDetailed:x}=e,p="http://18.204.141.1:8090",u=localStorage.getItem("patientRecord"),v=JSON.parse(u);const[j,g]=a.useState(null),[b,y]=(0,a.useState)({}),[N,f]=(0,a.useState)(""),[w,S]=(0,a.useState)({diagnosis:[],desc:""}),[C,A]=(0,a.useState)([]),[D,k]=(0,a.useState)([]);(0,a.useEffect)((()=>{P()}),[]);const P=async()=>{try{var e,l,s;const a=await(0,t.J4)("".concat(p,"/api/problem/").concat(null===v||void 0===v||null===(e=v.department_id)||void 0===e?void 0:e._id));k(null===a||void 0===a||null===(l=a.data)||void 0===l||null===(s=l.data[0])||void 0===s?void 0:s.problemName)}catch(a){console.error("Error fetching problems:",a)}},_=(e,l,s)=>{A((a=>a.map((a=>a.problem.name===e?{...a,problem:{...a.problem,[l]:s}}:a))))};return(0,a.useEffect)((()=>{b.desc&&S((e=>({...e,desc:b.desc})))}),[b]),(0,a.useEffect)((()=>{(async()=>{try{const e=await(0,t.J4)("".concat(p,"/api/patient/").concat(s));y(e.data.data)}catch(e){console.log(e)}})()}),[]),(0,n.jsxs)("div",{style:{margin:"1rem auto 1rem 1rem"},children:[(0,n.jsxs)("div",{style:{margin:"1rem auto 1rem 0"},children:[(0,n.jsxs)("h4",{children:["Diagnosis: (",null===v||void 0===v||null===(l=v.department_id)||void 0===l?void 0:l.departmentName,")"]}),(0,n.jsx)("div",{className:"row",children:(0,n.jsxs)("div",{className:"row",children:[(0,n.jsx)("div",{className:"col-md-4 alignCenterAndMiddle",style:{border:"1px solid black"},children:(0,n.jsx)("h5",{style:{marginTop:"0.5rem"},children:"Problems"})}),(0,n.jsx)("div",{className:"col-md-8",children:(0,n.jsxs)("div",{className:"row",style:{border:"1px solid black"},children:[(0,n.jsx)("div",{className:"col-md-4 alignCenterAndMiddle",children:(0,n.jsx)("h5",{style:{marginTop:"0.5rem"},children:"VAS"})}),(0,n.jsx)("div",{className:"col-md-4 alignCenterAndMiddle",children:(0,n.jsx)("h5",{style:{marginTop:"0.5rem"},children:"ODI"})}),(0,n.jsx)("div",{className:"col-md-4 alignCenterAndMiddle",children:(0,n.jsx)("h5",{style:{marginTop:"0.5rem"},children:"MPSI"})})]})})]})})]}),(0,n.jsxs)("form",{onSubmit:async e=>{if(e.preventDefault(),0===C.length)return m.oR.warning("Please select at least one problem");try{let e=[];null===C||void 0===C||C.map((l=>{e.push(l.problem)}));const l={...w,diagnosis:[{problem:e,date:Date(),desc:N}],nextApointmentDate:j};console.log("updatedFormData",l);const a=await(0,t.E8)("".concat(p,"/api/patient/update/").concat(s),l);console.log("Gaurav",a),a&&(A([]),f(""),m.oR.success("Patient Updated Successfully",{autoClose:1e3}),setTimeout((()=>{h(!1),x(!0)}),2e3),i())}catch(l){console.log(l)}},children:[D.map(((e,l)=>{var s,a,t;return(0,n.jsx)("div",{style:{alignItems:"center",marginBottom:"10px"},children:(0,n.jsxs)("div",{className:"row",children:[(0,n.jsxs)("div",{className:"col-md-4",children:[(0,n.jsx)("input",{type:"checkbox",value:e.name,onChange:l=>{return s=e.name,a=l.target.checked,console.log("dateHere",Date.now()),void A(a?e=>[...e,{problem:{name:s,scale1:"",scale2:"",scale3:""},date:Date.now()}]:e=>e.filter((e=>e.problem.name!==s)));var s,a}}),(0,n.jsxs)("label",{children:["\xa0",e.name]})]}),(0,n.jsx)("div",{className:"col-sm-8",children:(0,n.jsxs)("div",{className:"row",children:[(0,n.jsx)("div",{className:"col-sm-4",children:(0,n.jsx)("input",{className:"form-control",type:"text",placeholder:"Scale 1",value:(null===(s=C.find((l=>l.problem.name===e.name)))||void 0===s?void 0:s.problem.scale1)||"",onChange:l=>_(e.name,"scale1",l.target.value)})}),(0,n.jsx)("div",{className:"col-sm-4",children:(0,n.jsx)("input",{className:"form-control",type:"text",placeholder:"Scale 2",value:(null===(a=C.find((l=>l.problem.name===e.name)))||void 0===a?void 0:a.problem.scale2)||"",onChange:l=>_(e.name,"scale2",l.target.value)})}),(0,n.jsx)("div",{className:"col-sm-4",children:(0,n.jsx)("input",{className:"form-control",type:"text",placeholder:"Scale 3",value:(null===(t=C.find((l=>l.problem.name===e.name)))||void 0===t?void 0:t.problem.scale3)||"",onChange:l=>_(e.name,"scale3",l.target.value)})})]})})]})},l)})),(0,n.jsx)("div",{children:(0,n.jsx)("textarea",{rows:4,className:"form-control col-12",placeholder:"Prescription",name:"desc",value:N,onChange:e=>f(e.target.value)})}),(0,n.jsx)("div",{className:"d-flex mt-2",children:(0,n.jsx)("div",{className:"w-50",children:(0,n.jsx)(c.$,{dateAdapter:d.R,children:(0,n.jsx)(r.j,{components:["DateTimePicker"],children:(0,n.jsx)(o.K,{label:"Next Appointment Date",value:j,onChange:e=>{g(e)}})})})})}),(0,n.jsxs)("div",{className:"text-end",children:[(0,n.jsx)("button",{type:"submit",className:"btn btn-primary mt-4",style:{width:"10rem"},children:"Submit"}),(0,n.jsx)("button",{type:"submit",className:"btn btn-danger mt-4 ms-2",style:{width:"10rem"},onClick:()=>(h(!1),void x(!0)),children:"Close"})]})]}),(0,n.jsx)(m.N9,{})]})},x=e=>{let{patientSearch:l,getSearchByPatient:s}=e;const[t,r]=(0,a.useState)(!1),[d,c]=(0,a.useState)(!1),[o,m]=(0,a.useState)(""),[x,p]=(0,a.useState)("");return(0,n.jsx)("div",{children:null===l||void 0===l?void 0:l.map((e=>{const{name:l,crn:a,phone:u,age:v,sex:j,diagnosis:g,_id:b,desc:y,nextApointmentDate:N}=e,f=o===b,w=x===b,S=new Date(N).toLocaleString("en-IN",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",hour12:!0}).replace(/\//g,"/");return(0,n.jsx)("div",{className:"row",children:(0,n.jsx)("div",{style:{marginTop:"2rem"},children:(0,n.jsx)("div",{className:"card",style:{width:"100%"},children:(0,n.jsxs)("div",{className:"card-body",children:[(0,n.jsxs)("h5",{className:"card-title",children:["Patient CR No : ",a]}),(0,n.jsx)("h6",{className:"card-subtitle mt-2",children:(0,n.jsxs)("h5",{children:["Name : ",l]})}),(0,n.jsxs)("div",{style:{display:"flex",marginTop:"1rem"},children:[(0,n.jsxs)("span",{style:{display:"flex"},children:[(0,n.jsx)("h6",{children:"Phone No. \xa0"})," ",(0,n.jsx)("h6",{style:{fontWeight:"normal"},children:u})]}),(0,n.jsxs)("span",{style:{display:"flex",marginLeft:"2rem"},children:[(0,n.jsx)("h6",{children:"Age. \xa0"})," ",(0,n.jsx)("h6",{style:{fontWeight:"normal"},children:v})]}),(0,n.jsxs)("span",{style:{display:"flex",marginLeft:"2rem"},children:[(0,n.jsx)("h6",{children:" Sex. \xa0"})," ",(0,n.jsx)("h6",{style:{fontWeight:"normal"},children:j})]}),(0,n.jsxs)("span",{style:{display:"flex",marginLeft:"2rem"},children:[(0,n.jsx)("h6",{children:"Next Appointment Date. \xa0"})," ",(0,n.jsx)("h6",{style:{fontWeight:"normal"},children:S})]})]}),(0,n.jsxs)("div",{style:{textAlign:"end"},children:[(0,n.jsx)("button",{type:"button",className:"btn btn-success",onClick:()=>{return e=b,m((l=>l===e?"":e)),p(""),void c(!0);var e},children:"Show Details"}),(0,n.jsx)("button",{type:"button",className:"btn btn-warning",style:{marginLeft:"2rem"},onClick:()=>{return p(e=b),m(e),r(!0),void c(!1);var e},children:"Add New Diagnosis"})]}),f&&d&&(0,n.jsx)("div",{children:(0,n.jsx)(i,{diagnosis:g,desc:y})}),w&&t&&(0,n.jsx)("div",{children:(0,n.jsx)(h,{_id:b,getSearchByPatient:s,setIsAddNewDiagnosis:r,setIsDetailed:c})})]})})})},b)}))})};s(83910);var p=s(81637),u=s(96446);function v(){return(0,n.jsx)(u.A,{style:{width:"100%",height:"20vh",lineHeight:"20vh",textAlign:"center",backgroundColor:"white",marginTop:"10px"},children:(0,n.jsx)(p.A,{})})}const j=()=>(0,n.jsx)(u.A,{style:{width:"100%",height:"100%",lineHeight:"20vh",textAlign:"center",marginTop:"10px"},children:(0,n.jsx)(p.A,{})}),g=()=>{var e;let l="http://18.204.141.1:8090",s=localStorage.getItem("patientRecord"),i=JSON.parse(s);const[h,p]=(0,a.useState)(!1),[u,g]=(0,a.useState)(!1),[b,y]=(0,a.useState)(!1),[N,f]=a.useState(null),[w,S]=(0,a.useState)(!1),[C,A]=(0,a.useState)(""),[D,k]=(0,a.useState)([]),[P,_]=(0,a.useState)([]),[T,R]=(0,a.useState)(""),[I,E]=(0,a.useState)({name:"",age:"",sex:"male",phone:"",crn:"",diagnosis:[],desc:"",doctor_id:null===i||void 0===i?void 0:i._id}),[F,M]=(0,a.useState)([]);console.log("value date",N),(0,a.useEffect)((()=>{A(""),B()}),[]);const B=async()=>{try{var e,s,a;const n=await(0,t.J4)("".concat(l,"/api/problem/").concat(null===i||void 0===i||null===(e=i.department_id)||void 0===e?void 0:e._id));_(null===n||void 0===n||null===(s=n.data)||void 0===s||null===(a=s.data[0])||void 0===a?void 0:a.problemName)}catch(n){console.error("Error fetching problems:",n)}};console.log("problems",P);const L=(e,l,s)=>{M((a=>a.map((a=>a.problem.name===e?{...a,problem:{...a.problem,[l]:s}}:a))))},W=async()=>{try{var e;g(!0);const s=await(0,t.J4)("".concat(l,"/api/patient/").concat(C));console.log("searchData",s),k(null===s||void 0===s||null===(e=s.data)||void 0===e?void 0:e.data),setTimeout((()=>{g(!1)}),3e3)}catch(s){console.log(s)}};(0,a.useEffect)((()=>{!0===h&&W()}),[h]);let[H,J]=(0,a.useState)(new Date);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{children:[w||b?"":(0,n.jsxs)("div",{children:[(0,n.jsx)("p",{style:{fontWeight:"bolder"},children:"Search Patient"}),(0,n.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[(0,n.jsxs)("div",{className:"d-flex",children:[(0,n.jsx)("input",{style:{paddingLeft:"5px"},className:"form-control",placeholder:"CR no. or Phone no.",type:"text",name:"search",value:C,onKeyPress:e=>{"Enter"===e.key&&(e.preventDefault(),W())},onChange:e=>A(e.target.value)}),(0,n.jsx)("button",{className:"btn btn-primary",style:{marginLeft:"1rem",borderRadius:"5px"},type:"button",onClick:W,children:"Search"}),null!==C&&void 0!==C&&C.length?(0,n.jsx)("button",{className:"btn btn-danger text-light",style:{marginLeft:"1rem",borderRadius:"5px"},type:"button",onClick:()=>{try{A(""),k([])}catch(e){console.log(e)}},children:"Clear"}):""]}),(0,n.jsx)("div",{children:(0,n.jsx)("button",{style:{marginLeft:"1rem",borderRadius:"5px"},type:"button",onClick:()=>S(!0),className:"btn btn-outline-dark",children:"Add a Patient"})})]})]}),null===D||void 0===D||!D.length||w||b?(0,n.jsx)("div",{children:w?(0,n.jsxs)("div",{style:{marginTop:"1rem"},children:[(0,n.jsxs)("div",{children:[(0,n.jsx)("hr",{}),(0,n.jsx)("h4",{children:"Patient Details"}),(0,n.jsxs)("div",{className:"row",children:[(0,n.jsx)("div",{className:"col-md-4",children:(0,n.jsxs)("div",{children:[(0,n.jsx)("label",{className:"col-sm-2 mt-2 patientNamediv",children:"Name*"}),(0,n.jsx)("div",{className:"col-sm-8",children:(0,n.jsx)("input",{type:"text",className:"form-control",name:"name",value:I.name,onChange:e=>E({...I,name:e.target.value})})})]})}),(0,n.jsx)("div",{className:"col-md-4",children:(0,n.jsxs)("div",{children:[(0,n.jsx)("label",{className:"col-sm-2 mt-2 patientNamediv",children:"Age*"}),(0,n.jsx)("div",{className:"col-sm-8",children:(0,n.jsx)("input",{type:"number",className:"form-control",name:"age",value:I.age,onChange:e=>E({...I,age:e.target.value})})})]})}),(0,n.jsx)("div",{className:"col-md-4",children:(0,n.jsxs)("div",{children:[(0,n.jsx)("label",{className:"col-sm-2 mt-2 patientNamediv",children:"Sex*"}),(0,n.jsx)("div",{className:"col-sm-8",children:(0,n.jsxs)("select",{className:"form-control",name:"sex",value:I.sex,onChange:e=>E({...I,sex:e.target.value}),children:[(0,n.jsx)("option",{value:"male",children:"Male"}),(0,n.jsx)("option",{value:"female",children:"Female"}),(0,n.jsx)("option",{value:"other",children:"Other"})]})})]})}),(0,n.jsxs)("div",{className:"row mt-4",children:[(0,n.jsx)("div",{className:"col-md-5",children:(0,n.jsxs)("div",{children:[(0,n.jsx)("label",{className:"col-sm-4 mt-2 patientNamediv",children:"Phone Number*"}),(0,n.jsx)("div",{className:"col-sm-7",children:(0,n.jsx)("input",{className:"form-control",type:"text",name:"phone",value:I.phone,onChange:e=>{(/^\d*$/.test(e.target.value)||""===e.target.value)&&E({...I,phone:e.target.value})},required:!0})})]})}),(0,n.jsx)("div",{className:"col-md-5",children:(0,n.jsxs)("div",{children:[(0,n.jsx)("label",{className:"col-sm-4 mt-2 patientNamediv",children:"CR Number*"}),(0,n.jsx)("div",{className:"col-sm-7",children:(0,n.jsx)("input",{className:"form-control",type:"test",name:"crn",value:I.crn,onChange:e=>E({...I,crn:e.target.value}),required:!0})})]})})]})]}),(0,n.jsx)("hr",{}),(0,n.jsxs)("div",{style:{margin:"1rem auto 1rem 0"},children:[(0,n.jsxs)("h4",{children:["Diagnosis: (",null===i||void 0===i||null===(e=i.department_id)||void 0===e?void 0:e.departmentName,")"]}),(0,n.jsx)("div",{className:"row",children:(0,n.jsxs)("div",{className:"row",children:[(0,n.jsx)("div",{className:"col-md-4 alignCenterAndMiddle",style:{border:"1px solid black"},children:(0,n.jsx)("h5",{style:{marginTop:"0.5rem"},children:"Problems"})}),(0,n.jsx)("div",{className:"col-md-8",children:(0,n.jsxs)("div",{className:"row",style:{border:"1px solid black"},children:[(0,n.jsx)("div",{className:"col-md-4 alignCenterAndMiddle",children:(0,n.jsx)("h5",{style:{marginTop:"0.5rem"},children:"VAS"})}),(0,n.jsx)("div",{className:"col-md-4 alignCenterAndMiddle",children:(0,n.jsx)("h5",{style:{marginTop:"0.5rem"},children:"ODI"})}),(0,n.jsx)("div",{className:"col-md-4 alignCenterAndMiddle",children:(0,n.jsx)("h5",{style:{marginTop:"0.5rem"},children:"MPSI"})})]})})]})})]}),(0,n.jsx)("form",{children:P.map(((e,l)=>{var s,a,t;return(0,n.jsx)("div",{style:{alignItems:"center",marginBottom:"10px"},children:(0,n.jsxs)("div",{className:"row",children:[(0,n.jsxs)("div",{className:"col-md-4 ",children:[(0,n.jsx)("input",{type:"checkbox",value:e.name,onChange:l=>{return s=e.name,a=l.target.checked,void M(a?e=>[...e,{problem:{name:s,scale1:"",scale2:"",scale3:""}}]:e=>e.filter((e=>e.problem.name!==s)));var s,a}}),(0,n.jsxs)("label",{children:["\xa0",e.name]})]}),(0,n.jsx)("div",{className:"col-sm-8",children:(0,n.jsxs)("div",{className:"row",children:[(0,n.jsx)("div",{className:"col-sm-4",children:(0,n.jsx)("input",{className:"form-control",type:"text",placeholder:"Scale 1",value:(null===(s=F.find((l=>l.problem.name===e.name)))||void 0===s?void 0:s.problem.scale1)||"",onChange:l=>L(e.name,"scale1",l.target.value),disabled:!F.some((l=>l.problem.name===e.name))})}),(0,n.jsx)("div",{className:"col-sm-4",children:(0,n.jsx)("input",{className:"form-control",type:"text",placeholder:"Scale 2",value:(null===(a=F.find((l=>l.problem.name===e.name)))||void 0===a?void 0:a.problem.scale2)||"",onChange:l=>L(e.name,"scale2",l.target.value),disabled:!F.some((l=>l.problem.name===e.name))})}),(0,n.jsx)("div",{className:"col-sm-4",children:(0,n.jsx)("input",{className:"form-control",type:"text",placeholder:"Scale 3",value:(null===(t=F.find((l=>l.problem.name===e.name)))||void 0===t?void 0:t.problem.scale3)||"",onChange:l=>L(e.name,"scale3",l.target.value),disabled:!F.some((l=>l.problem.name===e.name))})})]})})]})},l)}))}),(0,n.jsx)("div",{children:(0,n.jsx)("textarea",{rows:4,className:"form-control col-12",placeholder:"Prescription",name:"desc",value:T,onChange:e=>R(e.target.value)})})]}),(0,n.jsx)("div",{children:(0,n.jsx)("div",{className:"d-flex mt-2",children:(0,n.jsx)("div",{className:"w-50",children:(0,n.jsx)(c.$,{dateAdapter:d.R,children:(0,n.jsx)(r.j,{components:["DateTimePicker"],children:(0,n.jsx)(o.K,{label:"Next Appointment Date",value:N,onChange:e=>{f(e)}})})})})})}),(0,n.jsxs)("div",{className:"text-end m-4",children:[(0,n.jsx)("button",{className:"btn btn-info mt-3 mx-2",style:{width:"10%"},onClick:async()=>{if(console.log("hello"),A(""),!I.name||!I.age||!I.sex||!I.phone||!I.crn)return m.oR.warning("Please fill all Patient details");if(0===F.length)return m.oR.warning("Please select at least one problem");let e=[];null===F||void 0===F||F.map((l=>{e.push(l.problem)}));const s={...I,diagnosis:[{problem:e,date:Date(),desc:T}],nextApointmentDate:N};console.log("updatedFormData",s);try{var a;console.log("pre",s);const e=await(0,t.Hl)("".concat(l,"/api/patient/create"),s);console.log("Data",e),!0===e.success&&(m.oR.success("Patient Created Successfully",{autoClose:2e3}),y(!0),S(!1),setTimeout((()=>{p(!0),y(!1),M([]),R(""),f(null)}),2e3),E({name:"",age:"",sex:"male",phone:"",crn:"",diagnosis:[],desc:"",doctor_id:null===i||void 0===i?void 0:i._id})),"phone Already Exists"==e.message&&m.oR.warning("phone Already Exists"),"Crn Already Exists"==e.message&&m.oR.warning("Crn Already Exists"),console.log("data",e),A(null===e||void 0===e||null===(a=e.data)||void 0===a?void 0:a.crn)}catch(n){m.oR.warning("Something went wrong"),console.error("Error submitting data:",n)}},children:"Submit"}),(0,n.jsx)("button",{className:"btn btn-info mt-3",style:{width:"10%"},onClick:()=>S(!1),children:"Close"})]})]}):(0,n.jsx)("div",{children:b?"":(0,n.jsx)("div",{style:{width:"100%",height:"20vh",lineHeight:"20vh",textAlign:"center",backgroundColor:"white",marginTop:"10px"},children:u?(0,n.jsx)(v,{}):"No Data"})})}):(0,n.jsx)(x,{patientSearch:D,setData:S,getSearchByPatient:W})]}),b?(0,n.jsx)(j,{}):"",(0,n.jsx)(m.N9,{})]})}}}]);
//# sourceMappingURL=2231.c7f74692.chunk.js.map