"use strict";exports.id=987,exports.ids=[987],exports.modules={9464:(e,t,r)=>{r.d(t,{Z:()=>Projects_Projects});var o=r(784),a=r(902),i=r(9885),n=r(9817),l=r(3258),s=r(345),d=r(2959),c=r(4894);let m=n.ZP.form`
  max-height: 80vh; 
  overflow-y: auto;
  padding: 15px;
  width: 100%;
  padding: 2rem;
  background: #fff;
  box-shadow: ${e=>e.theme.shadow7};
  border-radius: 1rem;

  h1 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    text-align: center;
    color: #202a45;
  }

  .input-control {
    margin-bottom: 1rem;

    label {
      display: block;
      font-size: 1rem;
      margin-bottom: 0.5rem;
      color: #202a45;
    }

    input,
    textarea {
      width: 100%;
      padding: 0.5rem;
      border-radius: 0.5rem;
      border: 1px solid #ccc;
    }

    textarea {
      resize: none;
    }
  }

  .relative {
    position: relative;
  }

  .absolute {
    position: absolute;
  }

  .flex {
    display: flex;
  }

  .items-center {
    align-items: center;
  }

  .mt-1 {
    margin-top: 0.25rem;
  }

  .mt-2 {
    margin-top: 0.5rem;
  }

  .p-2 {
    padding: 0.5rem;
  }

  .text-white {
    color: #fff;
  }

  .rounded-full {
    border-radius: 9999px;
  }

  .top-1\/2 {
    top: 50%;
  }

  .right-4 {
    right: 1rem;
  }

  .-translate-y-1\/2 {
    transform: translateY(-50%);
  }

  .bg-gray-200 {
    background-color: #e2e8f0;
  }

  .rounded-md {
    border-radius: 0.375rem;
  }

  .text-red-500 {
    color: #ef4444;
  }

  .toggler {
    display: flex;
    align-items: center;
    justify-content: space-between;

    cursor: pointer;

    label {
      flex: 1;
    }

    input {
      width: initial;
    }
  }

  .submit-btn {
    display: flex;
    justify-content: center;
    margin-top: 2rem;

    button {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.5rem 1rem;
      background-color: #798da7;
      color: #fff;
      border: none;
      border-radius: 0.5rem;
      cursor: pointer;
      transition: background-color 0.3s;

      &:hover {
        background-color: #657d94;
      }
    }
  }
`,Modals_CreateContent=function({projectData:e,closeModal:t}){let[r,n]=(0,i.useState)(""),[p,h]=(0,i.useState)(""),[u,x]=(0,i.useState)([]),[g,b]=(0,i.useState)(""),[j,f]=(0,i.useState)(""),[v,w]=(0,i.useState)(!1),[k,y]=(0,i.useState)(!1),{theme:C,allProjects:P,editProject:N}=(0,a.j1)();(0,i.useEffect)(()=>{e?(n(e.title),h(e.description),x(e.materials),f(e.date),w(e.completed),y(e.important)):(n(""),h(""),x([]),f(""),w(!1),y(!1))},[e]);let handleChange=e=>t=>{switch(e){case"title":n(t.target.value);break;case"description":h(t.target.value);break;case"date":f(t.target.value);break;case"completed":w(t.target.checked);break;case"important":y(t.target.checked)}},removeMaterial=e=>{x(u.filter((t,r)=>r!==e))},handleSubmit=async o=>{o.preventDefault();let a={id:e?e.id:void 0,title:r,description:p,materials:u,date:j,completed:v,important:k};try{let r;(r=e?await l.Z.put(`/api/projects/${e.id}`,a):await l.Z.post("/api/projects",a)).data.error?s.ZP.error(r.data.error):(s.ZP.success(e?"Project updated successfully.":"Project created successfully."),P(),t())}catch(e){s.ZP.error("Something went wrong."),console.log(a),console.log(e)}};return(0,o.jsxs)(m,{onSubmit:handleSubmit,theme:C,children:[o.jsx("h1",{children:e?"Edit Project":"Create a Project"}),(0,o.jsxs)("div",{className:"input-control",children:[o.jsx("label",{htmlFor:"title",children:"Title"}),o.jsx("input",{type:"text",id:"title",value:r,name:"title",onChange:handleChange("title"),placeholder:"e.g, Odette Corsette Dress"})]}),(0,o.jsxs)("div",{className:"input-control",children:[o.jsx("label",{htmlFor:"description",children:"Description"}),o.jsx("textarea",{value:p,onChange:handleChange("description"),name:"description",id:"description",rows:1,placeholder:"e.g, A dress for Megan's Birthday"})]}),(0,o.jsxs)("div",{className:"input-control",children:[o.jsx("label",{htmlFor:"materials",children:"Materials"}),(0,o.jsxs)("div",{className:"relative flex items-center",children:[o.jsx("input",{type:"text",value:g,onChange:e=>{b(e.target.value)},placeholder:"Add a new material"}),o.jsx("button",{className:"absolute p-2 text-black -translate-y-1/2 rounded-full top-1/2 right-4",type:"button",onClick:()=>{g.trim()&&(x([...u,g]),b(""))},style:{backgroundColor:"#798DA7"},children:o.jsx("svg",{className:"w-6 h-6",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M12 4v16m8-8H4"})})})]}),o.jsx("ul",{className:"mt-2",children:u.map((e,t)=>(0,o.jsxs)("li",{className:"flex items-center justify-between p-2 mt-1 bg-gray-200 rounded-md",children:[e,o.jsx("button",{type:"button",onClick:()=>removeMaterial(t),className:"text-red-500",children:o.jsx("svg",{className:"w-4 h-4",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M6 18L18 6M6 6l12 12"})})})]},t))})]}),(0,o.jsxs)("div",{className:"input-control",children:[o.jsx("label",{htmlFor:"date",children:"Date"}),o.jsx("input",{type:"date",value:j,onChange:handleChange("date"),id:"date"})]}),(0,o.jsxs)("div",{className:"input-control toggler",children:[o.jsx("label",{htmlFor:"important",children:"Mark as Important"}),o.jsx("input",{onChange:handleChange("important"),type:"checkbox",name:"important",id:"important"})]}),o.jsx("div",{className:"submit-btn",children:o.jsx(d.Z,{name:e?"Update Project":"Create Project",icon:e?c.IH:c.PD,background:"#798DA7",color:"#fff"})})]})},p=r(4731),utils_formatDate=e=>p(e).format("DD/MM/YYYY"),h=n.ZP.div`
  padding: 1.2rem 1rem;
  border-radius: 1rem;
  background-color: #798da7;
  box-shadow: ${e=>e.theme.shadow7};
  border: 2px solid #1d2b44;

  height: 16rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  .date {
    margin-top: auto;
    font-size: 1rem;
  }

  > h1 {
    font-size: 1.5rem;
    font-weight: 600;
  }

  .project-footer {
    display: flex;
    align-items: center;
    gap: 1.2rem;

    button {
      border: none;
      outline: none;
      cursor: pointer;

      i {
        font-size: 1.4rem;
        color: #202a45;
      }
    }

    .edit {
      margin-left: auto;
    }

    .completed,
    .incomplete {
      display: inline-block;
      padding: 0.4rem 1rem;
      background: #f7c9a8; //ORANGE TOWN
      border-radius: 30px;
    }

    .completed {
      background: #acbcb7 !important;
    }
  }
`,ProjectItem_ProjectItem=function({title:e,description:t,materials:r,date:i,isCompleted:n,id:l,onEdit:s}){let{theme:d,deleteProject:m,updateProject:p,editProject:u}=(0,a.j1)();return(0,o.jsxs)(h,{theme:d,children:[o.jsx("h1",{children:e}),o.jsx("p",{children:t}),o.jsx("hr",{}),o.jsx("p",{className:"materials",children:"Materials: •  "+r.join(" • ")+" •"}),o.jsx("hr",{}),o.jsx("p",{className:"date",children:utils_formatDate(i)}),(0,o.jsxs)("div",{className:"project-footer",children:[n?o.jsx("button",{className:"completed",onClick:()=>{p({id:l,isCompleted:!n})},children:"Completed"}):o.jsx("button",{className:"incomplete",onClick:()=>{p({id:l,isCompleted:!n})},children:"Incomplete"}),o.jsx("button",{className:"edit",onClick:()=>{s({id:l,title:e,description:t,materials:r,date:i,isCompleted:n})},children:c.eP}),o.jsx("button",{className:"delete",onClick:()=>{m(l)},children:c._I})]})]})},u=n.ZP.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 100;

  display: flex;
  justify-content: center;
  align-items: center;

  .modal-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.45);
    filter: blur(4px);
  }

  .modal-content {
    margin: 0 1rem;

    padding: 2rem;
    position: relative;
    max-width: 630px;
    width: 100%;
    z-index: 100;

    border-radius: 1rem;
    background-color: #AABAB5;
    box-shadow: 0 0 1rem rgba(0, 0, 0, 0.3);
    border-radius: ${e=>e.theme.borderRadiusMd2};

    @media screen and (max-width: 450px) {
      font-size: 90%;
    }
  }
`,Modals_Modal=function({content:e}){let{closeModal:t}=(0,a.j1)(),{theme:r}=(0,a.j1)();return(0,o.jsxs)(u,{theme:r,children:[o.jsx("div",{className:"modal-overlay",onClick:t}),o.jsx("div",{className:"modal-content",children:e})]})},x=n.ZP.main`
  position: relative;
  padding: 2rem;
  width: 100%;
  background-color: #fff;
  border: 2px solid #202a45;
  border-radius: 1rem;
  height: 100%;
  color: #202a45;

  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 0.5rem;
  }

  .btn-rounded {
    position: fixed;
    top: 4.9rem;
    right: 5.1rem;
    width: 3rem;
    height: 3rem;
    border-radius: 50%;

    background-color: #788ba5;
    border: 9px solid #788ba5;
    box-shadow: 0 3px 15px rgba(0, 0, 0, 0.3);
    color: #202a45;
    font-size: 1.4rem;

    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 768px) {
      top: 3rem;
      right: 3.5rem;
    }
  }

  .projects {
    margin: 2rem 0;
  }

  > h1 {
    font-size: clamp(1.5rem, 2vw, 2rem);
    font-weight: 800;
    position: relative;

    &::after {
      content: "";
      position: absolute;
      bottom: -0.5rem;
      left: 0;
      width: 3rem;
      height: 0.2rem;
      background-color: #abbbb6;
      border-radius: 0.5rem;
    }
  }

  .create-project {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    height: 16rem;
    color: #7a8da7;
    font-weight: 600;
    cursor: pointer;
    border-radius: 1rem;
    border: 3px dashed #202a45;
    transition: all 0.3s ease;

    i {
      font-size: 1.5rem;
      margin-right: 0.2rem;
    }

    &:hover {
      background-color: #7a8da7;
      color: #202a45;
    }
  }
`,Projects_Projects=function({title:e,projects:t}){let{theme:r,isLoading:n,openModal:l,closeModal:s,modal:d}=(0,a.j1)(),[m,p]=(0,i.useState)(null),handleOpenModal=e=>{p(e||null),l()};return(0,o.jsxs)(x,{theme:r,children:[d&&o.jsx(Modals_Modal,{content:o.jsx(Modals_CreateContent,{projectData:m,closeModal:()=>{p(null),s()}})}),o.jsx("h1",{children:e}),o.jsx("button",{className:"btn-rounded",onClick:()=>handleOpenModal(),children:c.PD}),(0,o.jsxs)("div",{className:"projects grid",children:[t.map(e=>o.jsx(ProjectItem_ProjectItem,{title:e.title,materials:e.materials,description:e.description,date:e.date,isCompleted:e.isCompleted,id:e.id,onEdit:handleOpenModal},e.id)),(0,o.jsxs)("button",{className:"create-project",onClick:()=>handleOpenModal(),children:[c.IH,"Add New Project"]})]})]})}},7481:(e,t,r)=>{r.r(t),r.d(t,{default:()=>__WEBPACK_DEFAULT_EXPORT__});var o=r(8531);let __WEBPACK_DEFAULT_EXPORT__=e=>{let t=(0,o.fillMetadataSegment)(".",e.params,"favicon.ico");return[{type:"image/x-icon",sizes:"512x512",url:t+""}]}}};