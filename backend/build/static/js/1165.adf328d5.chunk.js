"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[1165],{71165:(e,t,a)=>{a.r(t),a.d(t,{default:()=>g});var n=a(65043),o=a(63043),s=a(79287),l=a(41339),i=a(14182),c=a(66921),d=a(58390),r=a(60446),m=a.n(r),u=a(98572),p=(a(52316),a(73216)),v=a(59135),h=a(27642),x=a(70579);const g=()=>{let e="http://18.204.141.1:8090",t=localStorage.getItem("patientRecord"),a=JSON.parse(t);const[r,g]=n.useState(1),[j,f]=(0,n.useState)(1),[y,D]=(0,n.useState)(""),[b,N]=(0,n.useState)([]),[w,A]=(0,n.useState)("");(0,n.useEffect)((()=>{(async()=>{try{var t,a,n,s,l;const i=await(0,o.J4)("".concat(e,"/api/patient/patientByDoctor"));console.log("dasRes",null===i||void 0===i||null===(t=i.data)||void 0===t?void 0:t.data),D(null===i||void 0===i||null===(a=i.data)||void 0===a?void 0:a.count),N(null===i||void 0===i||null===(n=i.data)||void 0===n?void 0:n.data);const c=new Date,d=await(0,o.J4)("".concat(e,"/api/patient/nextAppointmentDate?startDate=").concat(c,"&endDate=").concat(c,"&page=").concat(r));A(null===d||void 0===d||null===(s=d.data)||void 0===s||null===(l=s.data)||void 0===l?void 0:l.length)}catch(i){console.error("Error fetching data:",i)}})()}),[]);const[S,C]=(0,n.useState)([]),[k,_]=(0,n.useState)([]),[F,I]=(0,n.useState)([]),P=m()(),[Y,E]=(0,n.useState)(P),[R,T]=(0,n.useState)(P),[M,O]=(0,n.useState)(!1),U=async t=>{try{var a,n,s,l;if(R.isBefore(Y))return void alert("End date cannot be earlier than start date");const t=new Date(Y),i=new Date(R);console.log(t,i);const c=await(0,o.J4)("".concat(e,"/api/patient/nextAppointmentDate?startDate=").concat(t,"&endDate=").concat(i,"&page=").concat(r));console.log("Gaurav",null===c||void 0===c||null===(a=c.data)||void 0===a?void 0:a.success),C(null===c||void 0===c||null===(n=c.data)||void 0===n?void 0:n.data),_(null===c||void 0===c||null===(s=c.data)||void 0===s?void 0:s.count),f(null===c||void 0===c||null===(l=c.data)||void 0===l?void 0:l.pageCount)}catch(i){console.log(i)}};(0,n.useEffect)((()=>{E(P),T(P)}),[]),(0,n.useEffect)((()=>{U()}),[M,r]);(0,n.useEffect)((()=>{(()=>{try{const e=new Date(Y);console.log("today",e);const t=null===e||void 0===e?void 0:e.getFullYear(),a=null===e||void 0===e?void 0:e.getMonth(),n=null===e||void 0===e?void 0:e.getDate(),o=b.filter((e=>{const o=new Date(null===e||void 0===e?void 0:e.nextApointmentDate),s=null===o||void 0===o?void 0:o.getFullYear(),l=null===o||void 0===o?void 0:o.getMonth(),i=null===o||void 0===o?void 0:o.getDate();return t===s&&a===l&&n===i}));I(o)}catch(e){console.log(e)}})()}),[Y]),console.log("dateValue",Y);const[J,K]=(0,n.useState)("checkbox"),L=(0,p.Zp)(),W=[{title:"CR no",dataIndex:"crn"},{title:"Phone no",dataIndex:"phone",render:e=>(0,x.jsx)("a",{children:e})},{title:"Name",dataIndex:"name",render:e=>(0,x.jsx)("a",{children:e}),sorter:(e,t)=>e.name.localeCompare(t.name)},{title:"Age",dataIndex:"age",sorter:(e,t)=>e.age-t.age},{title:"Sex",dataIndex:"sex",sorter:(e,t)=>e.sex.localeCompare(t.sex)},{title:"Appointment",dataIndex:"nextApointmentDate",render:e=>new Date(e).toLocaleString("en-IN",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",hour12:!0}).replace(/\//g,"/"),sorter:(e,t)=>e.nextApointmentDate.localeCompare(t.nextApointmentDate)},{title:"Action",render:e=>(0,x.jsx)("button",{className:"btn btn-primary",onClick:t=>L("/patientPage",{state:e}),children:"View"})}],z={onChange:(e,t)=>{console.log("selectedRowKeys: ".concat(e),"selectedRows: ",t)},getCheckboxProps:e=>({disabled:"Disabled User"===e.name,name:e.name})};return console.log("appointmentDataList",S),(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)("div",{className:"mb-5 mt-2",style:{textAlign:"center"},children:(0,x.jsxs)("h2",{children:["Welcome, ",null===a||void 0===a?void 0:a.name," "]})}),(0,x.jsx)(l.A,{numberOfPatient:y,appointmentDataList:F,numberOfTodaysAppointment:w}),(0,x.jsxs)("div",{className:"row",children:[(0,x.jsx)("div",{className:"col-sm-2",children:(0,x.jsx)("div",{style:{fontFamily:"sans-serif",marginTop:"1rem"},children:(0,x.jsxs)("h4",{children:["Appointments:",k]})})}),(0,x.jsx)("div",{className:"col-sm-10 ",children:(0,x.jsxs)("div",{className:"row justify-content-center",children:[(0,x.jsxs)("div",{className:"col-sm-4",children:[" ",(0,x.jsx)("div",{children:(0,x.jsx)(d.$,{dateAdapter:c.R,children:(0,x.jsx)(i.j,{components:["DateTimePicker"],children:(0,x.jsx)(u.K,{label:"From",value:Y,onChange:e=>{E(e)},inputFormat:"YYYY-MM-DD",ampm:!1,ampmInClock:!1,views:["year","month","day"],style:{overflowX:"hidden !important"}})})})})]}),(0,x.jsxs)("div",{className:"col-sm-4 ",children:[" ",(0,x.jsx)("div",{children:(0,x.jsx)(d.$,{dateAdapter:c.R,children:(0,x.jsx)(i.j,{components:["DateTimePicker"],children:(0,x.jsx)(u.K,{label:"To",value:R,onChange:e=>{T(e)},inputFormat:"YYYY-MM-DD",ampm:!1,ampmInClock:!1,views:["year","month","day"]})})})})]}),(0,x.jsxs)("div",{className:"col-sm-2 d-flex  mb-3",children:[(0,x.jsx)("button",{className:"btn btn-primary mt-3 me-2",onClick:U,children:"Search"}),(0,x.jsx)("button",{className:"btn btn-primary mt-3 ",onClick:()=>{E(P),T(P),O(!M)},children:"Reset"})]})]})})]}),(0,x.jsx)("div",{className:"mt-2 table-responsive",children:(0,x.jsx)(s.A,{rowSelection:{type:J,...z},columns:W,dataSource:S,pagination:!1})}),(0,x.jsx)("div",{className:"d-flex justify-content-end mt-2",children:(0,x.jsx)(h.A,{spacing:2,children:(0,x.jsx)(v.A,{count:j,page:r,onChange:(e,t)=>{g(t)}})})})]})}},41339:(e,t,a)=>{a.d(t,{A:()=>i});a(65043);var n=a(93946),o=a(90504),s=(a(6145),a(73216)),l=a(70579);const i=e=>{let{numberOfPatient:t,appointmentDataList:a,numberOfTodaysAppointment:i}=e;const c=(0,s.Zp)();return(0,l.jsxs)(n.sK,{children:[(0,l.jsx)(n.UF,{sm:6,lg:3,children:(0,l.jsx)(n.Uz,{className:"mb-4",color:"primary",value:(0,l.jsxs)(l.Fragment,{children:["Patient"," ",(0,l.jsxs)("div",{className:"fs-6 fw-normal",children:["Number of Patients : ",t||0]})]}),onClick:()=>c("/patientPage"),style:{cursor:"pointer"},chart:(0,l.jsx)(o.WE,{className:"mt-3 mx-3",style:{height:"70px"}})})}),(0,l.jsx)(n.UF,{sm:6,lg:3,children:(0,l.jsx)(n.Uz,{className:"mb-4",color:"primary",value:(0,l.jsxs)(l.Fragment,{children:["Appointments"," ",(0,l.jsxs)("div",{className:"fs-6 fw-normal",children:["Today's Appointment : ",i||0]})]}),chart:(0,l.jsx)(o.WE,{className:"mt-3 mx-3",style:{height:"70px"}})})})]})}}}]);
//# sourceMappingURL=1165.adf328d5.chunk.js.map