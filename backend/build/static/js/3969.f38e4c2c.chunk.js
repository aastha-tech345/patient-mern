"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[3969],{63043:(e,t,a)=>{a.d(t,{E8:()=>o,Hl:()=>r,J4:()=>s});var n=a(77154);const s=async e=>{try{const t=localStorage.getItem("token");return await(0,n.A)({method:"get",url:"".concat(e),headers:{Authorization:"Bearer ".concat(t),"Content-Type":"application/json"}})}catch(t){return console.log(t),t}},o=async(e,t)=>{try{const a=localStorage.getItem("token"),s=await(0,n.A)({method:"put",url:"".concat(e),headers:{Authorization:"Bearer ".concat(a),"Content-Type":"application/json"},data:t});if(s)return s}catch(s){var a;return 401===(null===s||void 0===s||null===(a=s.response)||void 0===a?void 0:a.status)?401:s.response}},r=async(e,t)=>{try{const a=localStorage.getItem("token"),s=await(0,n.A)({method:"post",url:"".concat(e),headers:{Authorization:"Bearer ".concat(a),"Content-Type":"application/json"},data:t});if(s)return null===s||void 0===s?void 0:s.data}catch(s){var a;return 401===(null===s||void 0===s||null===(a=s.response)||void 0===a?void 0:a.status)?401:s}}},24721:(e,t,a)=>{a.r(t),a.d(t,{default:()=>h});var n=a(65043),s=a(73216),o=a(93946),r=a(6145),c=a(3550),l=a(85961),i=a(63043),d=a(91036),u=(a(92342),a(70579));const h=()=>{(0,s.Zp)();const[e,t]=(0,n.useState)({email:"",password:""}),a=a=>{const{name:n,value:s}=a.target;t({...e,[n]:s})};return(0,u.jsxs)("div",{className:"bg-light min-vh-100 d-flex flex-row align-items-center",children:[(0,u.jsx)(o.T5,{children:(0,u.jsx)(o.sK,{className:"justify-content-center",children:(0,u.jsx)(o.UF,{md:5,children:(0,u.jsx)(o.x$,{children:(0,u.jsx)(o.E$,{className:"p-4",children:(0,u.jsx)(o.W6,{children:(0,u.jsxs)(o.qI,{children:[(0,u.jsx)("h2",{children:"Login"}),(0,u.jsx)("p",{className:"text-medium-emphasis",children:"Sign In to your account"}),(0,u.jsxs)(o.BG,{className:"mb-3",children:[(0,u.jsx)(o.sk,{children:(0,u.jsx)(r.A,{icon:c.o})}),(0,u.jsx)(o.OG,{placeholder:"Email",autoComplete:"email",name:"email",value:e.email,onChange:a})]}),(0,u.jsxs)(o.BG,{className:"mb-4",children:[(0,u.jsx)(o.sk,{children:(0,u.jsx)(r.A,{icon:l.q})}),(0,u.jsx)(o.OG,{type:"password",placeholder:"Password",autoComplete:"current-password",name:"password",value:e.password,onChange:a})]}),(0,u.jsx)(o.sK,{children:(0,u.jsx)(o.UF,{xs:12,style:{textAlign:"center"},children:(0,u.jsx)(o.Q_,{color:"primary",className:"px-5",onClick:async t=>{try{var a,n;t.preventDefault();const s=await(0,i.Hl)("".concat("http://18.204.141.1:8090","/api/user/login"),e);console.log("data",s),1==s.success&&(d.oR.success("Login successfully"),localStorage.setItem("token",s.token),localStorage.setItem("patientRecord",JSON.stringify(null===s||void 0===s?void 0:s.user)),setTimeout((()=>{window.location.reload()}),1e3)),!1===(null===s||void 0===s||null===(a=s.response)||void 0===a||null===(n=a.data)||void 0===n?void 0:n.success)&&d.oR.warning("Invalid Credentials")}catch(s){d.oR.warning("Something went wrong"),console.log(s)}},children:"Login"})})})]})})})})})})}),(0,u.jsx)(d.N9,{})]})}}}]);
//# sourceMappingURL=3969.f38e4c2c.chunk.js.map