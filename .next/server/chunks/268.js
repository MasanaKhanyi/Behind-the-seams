exports.id=268,exports.ids=[268],exports.modules={5114:(e,r,o)=>{Promise.resolve().then(o.bind(o,6099)),Promise.resolve().then(o.bind(o,5571)),Promise.resolve().then(o.bind(o,1955)),Promise.resolve().then(o.bind(o,4290)),Promise.resolve().then(o.bind(o,2990)),Promise.resolve().then(o.bind(o,4102)),Promise.resolve().then(o.bind(o,4390)),Promise.resolve().then(o.t.bind(o,6800,23)),Promise.resolve().then(o.t.bind(o,5578,23))},1259:(e,r,o)=>{Promise.resolve().then(o.t.bind(o,3724,23)),Promise.resolve().then(o.t.bind(o,5365,23)),Promise.resolve().then(o.t.bind(o,4900,23)),Promise.resolve().then(o.t.bind(o,4714,23)),Promise.resolve().then(o.t.bind(o,5392,23)),Promise.resolve().then(o.t.bind(o,8898,23))},2959:(e,r,o)=>{"use strict";o.d(r,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var t=o(784),a=o(902);o(9885);var i=o(9817);let l=i.ZP.button`
  position: relative;
  display: flex;
  align-items: center;
  color: #1E2B44;
  z-index: 5;
  cursor: pointer;

  transition: all 0.55s ease-in-out;

  i {
    margin-right: 1rem;
    color: #1E2B44;;
    font-size: 1.5rem;
    transition: all 0.55s ease-in-out;
  }

  &:hover {
    color: #798DA7;
    i {
      color: #1E2B44;
    }
  }
`,__WEBPACK_DEFAULT_EXPORT__=function({icon:e,name:r,background:o,padding:i,borderRad:s,fw:n,fs:d,click:c,type:g,border:m,color:b}){let{theme:p}=(0,a.j1)();return(0,t.jsxs)(l,{type:g,style:{background:o,padding:i||"0.5rem 1rem",borderRadius:s||"0.5rem",fontWeight:n||"500",fontSize:d,border:m||"none",color:b||"#1E2B44"},theme:p,onClick:c,children:[e&&e,r]})}},6099:(e,r,o)=>{"use strict";o.r(r),o.d(r,{default:()=>Sidebar_Sidebar});var t=o(784);o(9885);var a=o(9817),i=o(902),l=o(2451),s=o.n(l),n=o(4894);let d=[{id:1,title:"All Projects",icon:n.LE,link:"/"},{id:2,title:"Important!",icon:n.pb,link:"/important"},{id:3,title:"Completed",icon:n.BF,link:"/completed"},{id:4,title:"In Progress",icon:n.ys,link:"/incomplete"}];var c=o(1440),g=o.n(c),m=o(7114),b=o(2959),p=o(8421);let h=a.ZP.nav`
  position: relative;
  width: ${e=>e.theme.sidebarWidth};
  background-color: ${e=>e.theme.colorBg2};
  border: 2px solid #202A45;
  border-radius: 1rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  color: ${e=>e.theme.colorGrey3};

  @media screen and (max-width: 768px) {
    position: fixed;
    height: calc(100vh - 2rem);
    z-index: 100;

    transition: all 0.3s cubic-bezier(0.53, 0.21, 0, 1);
    transform: ${e=>e.collapsed?"translateX(-107%)":"translateX(0)"};

    .toggle-nav {
      display: block !important;
    }
  }

  .toggle-nav {
    display: none;
    padding: 0.8rem 0.9rem;
    position: absolute;
    right: -69px;
    top: 1.8rem;

    border-top-right-radius: 1rem;
    border-bottom-right-radius: 1rem;

    background-color: ${e=>e.theme.colorBg2};
    border-right: 2px solid ${e=>e.theme.borderColor2};
    border-top: 2px solid ${e=>e.theme.borderColor2};
    border-bottom: 2px solid ${e=>e.theme.borderColor2};
  }

  .user-btn {
    .cl-rootBox {
      width: 100%;
      height: 100%;

      .cl-userButtonBox {
        width: 100%;
        height: 100%;

        .cl-userButtonTrigger {
          width: 100%;
          height: 100%;
          opacity: 0;
        }
      }
    }
  }

  .profile {
    margin: 1.5rem;
    padding: 1rem 0.8rem;
    position: relative;

    border-radius: 1rem;
    cursor: pointer;

    font-weight: 500;
    color: #202945;

    display: flex;
    align-items: center;

    .profile-overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      backdrop-filter: blur(10px);
      z-index: 0;
      background: #E7E7E7;
      transition: all 0.55s linear;
      border-radius: 1rem;
      border: 2px solid #202A45;

    }

    h1 {
      font-size: 1.2rem;
      display: flex;
      flex-direction: column;

      line-height: 1.4rem;
    }

    .image,
    h1 {
      position: relative;
      z-index: 1;
    }

    .image {
      flex-shrink: 0;
      display: inline-block;
      overflow: hidden;
      transition: all 0.5s ease;
      border-radius: 100%;

      width: 70px;
      height: 70px;

      img {
        border-radius: 100%;
        transition: all 0.5s ease;
      }
    }

    > h1 {
      margin-left: 0.8rem;
      font-size: clamp(1.2rem, 4vw, 1.4rem);
      line-height: 100%;
    }

    &:hover {
      .profile-overlay {
        opacity: 1;
        border: 2px solid ${e=>e.theme.borderColor2};
      }

      img {
        transform: scale(1.1);
      }
    }
  }

  .nav-item {
    position: relative;
    padding: 0.8rem 1rem 0.9rem 2.1rem;
    margin: 0.3rem 0;

    display: grid;
    grid-template-columns: 40px 1fr;
    cursor: pointer;
    align-items: center;

    &::after {
      position: absolute;
      content: "";
      left: 0;
      top: 0;
      width: 0;
      height: 100%;
      background-color: #AABAB5;
      z-index: 1;
      transition: all 0.3s ease-in-out;
    }

    &::before {
      position: absolute;
      content: "";
      right: 0;
      top: 0;
      width: 0%;
      height: 100%;
      background-color:#AABAB5;

      border-bottom-left-radius: 5px;
      border-top-left-radius: 5px;
    }

    a {
      font-weight: 500;
      transition: all 0.3s ease-in-out;
      z-index: 2;
      line-height: 0;
    }

    i {
      display: flex;
      align-items: center;
      color: #202A45;
    }

    &:hover {
      &::after {
        width: 100%;
      }
    }
  }

  .active {
    background-color: #D8E2DC;

    i,
    a {
      color: #202A45;
    }
  }

  .active::before {
    width: 0.3rem;
  }

  > button {
    margin: 1.5rem;
  }
`,Sidebar_Sidebar=function(){let{theme:e,collapsed:r,collapseMenu:o}=(0,i.j1)(),{signOut:a}=(0,p.ll)(),{user:l}=(0,p.aF)(),{firstName:c,lastName:u,imageUrl:x}=l||{firstName:"",lastName:"",imageUrl:""},f=(0,m.useRouter)(),v=(0,m.usePathname)(),handleClick=e=>{f.push(e)};return(0,t.jsxs)(h,{theme:e,collapsed:r,children:[t.jsx("button",{className:"toggle-nav",onClick:o,children:r?n.M3:n.e2}),(0,t.jsxs)("div",{className:"profile",children:[t.jsx("div",{className:"profile-overlay"}),t.jsx("div",{className:"image",children:t.jsx(s(),{width:70,height:70,src:x,alt:"profile"})}),t.jsx("div",{className:"user-btn absolute z-20 top-0 w-full h-full",children:t.jsx(p.l8,{})}),(0,t.jsxs)("h1",{className:"capitalize",children:[c," ",u]})]}),t.jsx("ul",{className:"nav-items",children:d.map(e=>{let r=e.link;return(0,t.jsxs)("li",{className:`nav-item ${v===r?"active":""}`,onClick:()=>{handleClick(r)},children:[e.icon,t.jsx(g(),{href:r,children:e.title})]},e.id)})}),t.jsx("div",{className:"sign-out relative m-6",children:t.jsx(b.Z,{name:"Sign Out",type:"submit",padding:"0.4rem 0.8rem",borderRad:"0.8rem",fw:"500",fs:"1.2rem",icon:n.kS,click:()=>{a(()=>f.push("/signin"))}})})]})}},902:(e,r,o)=>{"use strict";o.d(r,{R:()=>GlobalProvider,j1:()=>useGlobalState});var t=o(784),a=o(9885),i=o.n(a);let l=[{name:"default",colorBg:"#8ECAE6",colorBg2:"#FFF",colorBg3:"#181818",colorBg4:"#1A1A1A",colorButton:"#3A3B3C",colorDanger:"#fe6854",colorFontPrimary:"#e5e7eb",colorTextSecondary:"#B0B3B8",colorTextPrimary:"#FFFFFF",colorTextLight:"#f8f8f8",colorbackground:"#FBFBFD",colorGradient:"linear-gradient(110.42deg, #CF57A3 29.2%, #4731B6 63.56%)",colorGreenDark:"#27AE60",colorGreenLight:"#dbe1e8",activeNavLink:"rgba(249,249,249, 0.08)",activeNavLinkHover:"rgba(249,249,249, 0.03)",colorPrimary:"#7263F3",colorPrimary2:"#705DF2",colorGreyDark:"#131313",colorGrey0:"#202A45",colorGrey1:"#202A45",colorGrey2:"#202A45",colorGrey3:"#202A45",colorGrey4:"#202A45",colorGrey5:"#7A8DA7",colorGrey6:"#202A45",colorWhite:"#fff",colorPrimaryGreen:"#F4ACB7",borderColor:"rgba(32,42,69,0.08)",borderColor2:"rgba(32,42,69, 0.08)",shadow7:"1px 7px 12px rgba(8, 18, 69, 0.1)",sidebarWidth:"15rem",sidebarCollapsed:"5.4rem",fH4:"19px",fontSmall:"14px",fontSmall2:"15px",gridGap:"2rem",padLRSm:"0 2rem",colorIcons:"rgba(121,141,167)",colorIcons2:"rgba(249,249,249, 0.75)",colorIcons3:"rgba(249,249,249, 0.08)",colorIcons4:"rgba(0,0,0, 0.3)",marLRSm:"0 1rem"},{name:"light",colorBg:"#fff",colorBg2:"#F9F9F9",colorBg3:"#7A8DA7",colorBg4:"#1A1A1A",colorButton:"#3A3B3C",colorDanger:"#fe6854",colorTextSecondary:"#B0B3B8",colorFontPrimary:"#6c7983",colorTextPrimary:"#FFFFFF",colorTextLight:"#f8f8f8",colorbackground:"#FBFBFD",colorGradient:"linear-gradient(110.42deg, #CF57A3 29.2%, #4731B6 63.56%)",colorGreenDark:"#7A8DA7",colorGreenLight:"#7A8DA7",activeNavLink:"rgba(230,230,230, .87)",activeNavLinkHover:"#7A8DA7",colorPrimary:"#7A8DA7",colorPrimary2:"#705DF2",colorGreyDark:"#131313",colorGrey0:"#7A8DA7",colorGrey1:"#7A8DA7",colorGrey2:"7A8DA7",colorGrey3:"#7A8DA7",colorGrey4:"#7A8DA7",colorGrey5:"#7A8DA7",colorGrey6:"#7A8DA7",colorWhite:"#fff",buttonGradient1:"linear-gradient(110.42deg, rgba(107, 190, 146, 0.7) 29.2%, rgba(245, 102, 146, 0.7) 63.56%)",buttonGradient2:"linear-gradient(110.42deg, rgba(25, 151, 222, 0.7) 29.2%, rgba(168, 85, 247, 0.7) 63.56%)",buttonGradient3:"linear-gradient(110.42deg, rgba(25, 151, 222, 0.7) 29.2%, rgba(168, 85, 247, 0.7) 63.56%)",buttonGradient4:"linear-gradient(110.42deg, rgba(168, 85, 247, 0.7) 29.2%, rgba(245, 102, 146, 0.7) 63.56%)",buttonGradient5:"linear-gradient(110.42deg, rgba(25, 151, 222, 0.7) 29.2%, rgba(168, 85, 247, 0.7) 63.56%)",buttonGradient6:"linear-gradient(110.42deg, rgba(25, 151, 222, 0.7) 29.2%, rgba(168, 85, 247, 0.7) 63.56%)",buttonGradient7:"linear-gradient(110.42deg, rgba(41, 25, 222, 0.7) 29.2%, rgba(235, 87, 87, 0.7) 63.56%)",buttonGradient8:"linear-gradient(110.42deg, rgba(25, 151, 222, 0.7) 29.2%, rgba(168, 85, 247, 0.7) 63.56%)",buttonGradient9:"linear-gradient(110.42deg, rgba(226, 195, 33, 0.7) 29.2%, rgba(247, 104, 85, 0.7) 63.56%)",buttonGradient10:"linear-gradient(110.42deg, rgba(235, 87, 87, 0.7) 29.2%, rgba(189, 68, 166, 0.7) 53.82%, rgba(247, 85, 143, 0.1) 63.56%)",buttonGradient11:"linear-gradient(110.42deg, rgba(25, 151, 222, 0.7) 29.2%, rgba(168, 85, 247, 0.7) 63.56%)",buttonGradient12:"linear-gradient(110.42deg, rgba(226, 195, 33, 0.7) 29.2%, rgba(247, 104, 85, 0.7) 63.56%)",buttonGradient13:"linear-gradient(110.42deg, rgba(226, 195, 33, 0.7) 29.2%, rgba(99, 3, 255, 0.7) 63.56%)",buttonGradient14:"linear-gradient(110.42deg, rgba(41, 25, 222, 0.7) 29.2%, rgba(235, 87, 87, 0.7) 63.56%)",borderRadiusMd:"12px",borderRadiusMd2:"15px",borderRadiusSm:"8px",borderColor:"rgba(249,249,249, 0.08)",borderColor2:"rgba(249,249,249, 0.08)",shadow1:"4px 4px 84px rgba(16, 10, 86, 0.04)",shadow2:"0px 48px 77px rgba(8, 18, 69, 0.07)",shadow3:"0 14px 40px rgb(0 0 0 / 25%)",shadow7:"0px 48px 77px rgba(8, 18, 69, 0.16)",shadow5:"0px 4px 0px rgba(249,249,249, 0.35)",shadow6:"0px 6px 20px rgba(0, 0, 0, 0.15), 0px -3px 20px rgba(0, 0, 0, 0.1)",sidebarWidth:"15rem",sidebarCollapsed:"5.4rem",fH4:"19px",fontSmall:"14px",fontSmall2:"15px",gridGap:"2rem",padLRSm:"0 2rem",colorIcons:"#999999",colorIcons2:"#181818",colorIcons3:"rgba(157, 129, 137, 0.08)",colorIcons4:"rgba(0,0,0, 0.3)",marLRSm:"0 1rem"}];var s=o(3258),n=o(345),d=o(8421);let c=(0,a.createContext)(),g=(0,a.createContext)(),GlobalProvider=({children:e})=>{let{user:r}=(0,d.aF)(),[o,m]=(0,a.useState)(0),[b,p]=(0,a.useState)(!1),[h,u]=(0,a.useState)(!1),[x,f]=(0,a.useState)(!1),[v,y]=(0,a.useState)([]),A=l[o],allProjects=async()=>{p(!0);try{let e=await s.Z.get("/api/projects"),r=e.data.sort((e,r)=>new Date(r.createdAt).getTime()-new Date(e.createdAt).getTime());y(r),p(!1)}catch(e){console.log(e)}},deleteProject=async e=>{try{await s.Z.delete(`/api/projects/${e}`),n.ZP.success("Project deleted"),allProjects()}catch(e){console.log(e),n.ZP.error("Something went wrong")}},updateProject=async e=>{try{await s.Z.put("/api/projects",e),n.ZP.success("Project updated"),allProjects()}catch(e){console.log(e),n.ZP.error("Something went wrong")}},P=v.filter(e=>!0===e.isCompleted),j=v.filter(e=>!0===e.isImportant),B=v.filter(e=>!1===e.isCompleted);return i().useEffect(()=>{r&&allProjects()},[r]),t.jsx(c.Provider,{value:{theme:A,projects:v,deleteProject,isLoading:b,completedProjects:P,importantProjects:j,incompleteProjects:B,updateProject,modal:h,openModal:()=>{u(!0)},closeModal:()=>{u(!1)},allProjects,collapsed:x,collapseMenu:()=>{f(!x)}},children:t.jsx(g.Provider,{value:{},children:e})})},useGlobalState=()=>(0,a.useContext)(c)},5571:(e,r,o)=>{"use strict";o.r(r),o.d(r,{default:()=>__WEBPACK_DEFAULT_EXPORT__});var t=o(784),a=o(9885),i=o.n(a),l=o(902),s=o(345);let __WEBPACK_DEFAULT_EXPORT__=function({children:e}){let[r,o]=i().useState(!1);return(i().useEffect(()=>{setTimeout(()=>{o(!0)},250)},[]),r)?(0,t.jsxs)(l.R,{children:[t.jsx(s.x7,{}),e]}):t.jsx("div",{className:"w-full h-full flex items-center justify-center",children:t.jsx("span",{className:"loader"})})}},1955:(e,r,o)=>{"use strict";o.r(r),o.d(r,{default:()=>__WEBPACK_DEFAULT_EXPORT__});var t=o(784);o(9885);var a=o(9817);let i=a.ZP.div`
  padding: 2.5rem;
  display: flex;
  gap: 2.5rem;
  height: 100%;
  transition: all 0.3s ease-in-out;

  @media screen and (max-width: 768px) {
    padding: 1rem;
    gap: 1rem;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 1.5rem;
  }
`,__WEBPACK_DEFAULT_EXPORT__=function({children:e}){return t.jsx(i,{children:e})}},4894:(e,r,o)=>{"use strict";o.d(r,{BF:()=>d,IH:()=>l,LE:()=>s,M3:()=>a,PD:()=>p,_I:()=>b,e2:()=>i,eP:()=>g,kS:()=>c,pb:()=>n,ys:()=>m});var t=o(784);let a=t.jsx("i",{className:"fa-solid fa-bars fa-beat"}),i=t.jsx("i",{className:"fa-solid fa-arrow-left fa-beat"}),l=t.jsx("i",{className:"fa-solid fa-plus"}),s=t.jsx("i",{className:"fa-solid fa-house"}),n=t.jsx("i",{className:"fa-solid fa-list-check"}),d=t.jsx("i",{className:"fa-solid fa-check"}),c=t.jsx("i",{className:"fa-solid fa-right-from-bracket"}),g=t.jsx("i",{className:"fa-solid fa-file-pen"}),m=t.jsx("i",{className:"fa-solid fa-clipboard-list"}),b=t.jsx("i",{className:"fa-solid fa-trash"}),p=t.jsx("i",{className:"fa-solid fa-plus fa-beat-fade"})},1612:(e,r,o)=>{"use strict";o.r(r),o.d(r,{default:()=>RootLayout,metadata:()=>P});var t=o(4656),a=o(1775),i=o.n(a),l=o(5513);o(7272);var s=o(5153);let n=(0,s.createProxy)(String.raw`/Users/michellekhanyi/Desktop/Side Projects/Behind-the-seams/app/Components/Sidebar/Sidebar.tsx`),{__esModule:d,$$typeof:c}=n,g=n.default,m=(0,s.createProxy)(String.raw`/Users/michellekhanyi/Desktop/Side Projects/Behind-the-seams/app/providers/GlobalStyleProvider.tsx`),{__esModule:b,$$typeof:p}=m,h=m.default,u=(0,s.createProxy)(String.raw`/Users/michellekhanyi/Desktop/Side Projects/Behind-the-seams/app/providers/ContextProvider.tsx`),{__esModule:x,$$typeof:f}=u,v=u.default;var y=o(3567),A=o.n(y);let P={title:"Behind the Seams",description:"Generated by create next app"};function RootLayout({children:e}){let{userId:r}=(0,l.I8)();return t.jsx(l.El,{children:(0,t.jsxs)("html",{lang:"en",children:[t.jsx("head",{children:t.jsx("link",{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css",integrity:"sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA==",crossOrigin:"anonymous",referrerPolicy:"no-referrer"})}),(0,t.jsxs)("body",{className:i().className,children:[t.jsx(A(),{height:3,color:"#1E2B44",easing:"cubic-bezier(0.53,0.21,0,1)"}),t.jsx(v,{children:(0,t.jsxs)(h,{children:[r&&t.jsx(g,{}),t.jsx("div",{className:"w-full",children:e})]})})]})]})})}},7272:()=>{}};