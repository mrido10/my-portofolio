(this["webpackJsonpmy-portofolio"]=this["webpackJsonpmy-portofolio"]||[]).push([[0],{32:function(e,t,a){},38:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),i=a(26),s=a.n(i),o=(a(32),a(14)),d=a(3),l=a(8),r=a(9),m=a(11),j=a(10),b=a(15),h=a(12),u=(a(38),a(0)),x=function(e){Object(m.a)(a,e);var t=Object(j.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).navbarItem=function(e){var t="/"+e.toLowerCase();return"/home"===t&&(t=""),Object(u.jsx)(o.b,{to:t,children:Object(u.jsx)("div",{className:"item",children:e})})},n.handleActiveNavbarTogle=function(){n.setState({navbarActive:!n.state.navbarActive},(function(){var e=document.getElementById("itemBoxNavbar");n.state.navbarActive?e.className+=" active":e.className="itemBoxNavbar"}))},n.handleKeepNavbar=function(){document.getElementById("itemBoxNavbar").className="itemBoxNavbar active"},n.handleHideNavbar=function(){document.body.addEventListener("mouseup",(function(){document.getElementById("itemBoxNavbar").className="itemBoxNavbar"}))},n.componentDidMount=function(){n.handleHideNavbar()},n.state={navbar:["Home","Profile","Resume","Portofolio","Contact"],navbarActive:!1},n}return Object(r.a)(a,[{key:"render",value:function(){var e=this;return Object(u.jsx)("div",{id:"navbarBG",children:Object(u.jsxs)("div",{id:"navbarBox",children:[Object(u.jsx)("div",{className:"togle",id:"togle",onClick:this.handleActiveNavbarTogle,children:Object(u.jsx)(h.a,{id:"menu",icon:b.a})}),Object(u.jsx)("div",{id:"itemBoxNavbar",className:"itemBoxNavbar",onClick:this.handleKeepNavbar,children:this.state.navbar.map((function(t){return e.navbarItem(t)}))})]})})}}]),a}(n.Component),v=a(16),O=a.n(v),f=(a(25),a(42),function(e){Object(m.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,c=new Array(n),i=0;i<n;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).state={widthImage:"",displayContent:""},e.handleShowImage=function(){var e=window.matchMedia("(max-width: 700px)"),t=document.getElementById("boxContent"),a=document.getElementById("boxImg"),n=document.getElementById("boxContentChild");e.matches&&(t.style.top="50%",t.style.transform="translate(0, -50%)",a.style.width="100vw",a.style.height="100vw",a.style.borderRadius="0",n.style.display="none")},e.handleBackImage=function(){var t=document.getElementById("boxImg"),a=document.getElementById("boxContentChild"),n=window.matchMedia("(max-width: 700px)");document.body.addEventListener("mouseup",(function(){t.style.width=e.state.widthImage,t.style.height=e.state.widthImage,a.style.display=e.state.displayContent,n.matches?t.style.borderRadius="50%":t.style.borderRadius="0 50% 50% 50%"}))},e.componentDidMount=function(){O.a.init({duration:400}),O.a.refresh(),e.handleBackImage();var t=document.getElementById("boxImg"),a=window.getComputedStyle(t).getPropertyValue("width"),n=document.getElementById("boxContentChild"),c=window.getComputedStyle(n).getPropertyValue("display");e.setState({widthImage:a,displayContent:c},(function(){console.log(e.state.widthImage)}))},e}return Object(r.a)(a,[{key:"render",value:function(){return Object(u.jsxs)("div",{id:"container",children:[Object(u.jsx)(x,{}),Object(u.jsxs)("div",{id:"boxContent","data-aos":"fade",children:[Object(u.jsx)("div",{id:"boxImg",onClick:this.handleShowImage}),Object(u.jsxs)("div",{id:"boxContentChild",children:[Object(u.jsx)("h3",{className:"hello",children:"Hello, I'am"}),Object(u.jsx)("h1",{className:"name",children:"Muhammad Rido"}),Object(u.jsx)("h2",{className:"job",children:"Web Developer"}),Object(u.jsx)("p",{className:"about",children:'"Experienced in IT field since 2020. Skilled in Java, Golang, Javascript (React Js), Arduino, Database (mySql), HTML5, CSS3"'}),Object(u.jsx)(o.b,{className:"download",to:"file/Muhammad_Rido_CV.pdf",target:"_blank",download:!0,disabled:!0,children:"Download CV"})]})]})]})}}]),a}(n.Component)),N=a(17),y=(a.p,a(43),a(44),a(45),function(e){Object(m.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,c=new Array(n),i=0;i<n;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).state={aboutMe:[{icon:b.d,title:"Name",content:"Muhammad Rido"},{icon:N.a,title:"Day of Birth",content:"November, 10th 1995"},{icon:N.c,title:"Email",content:"muhammadrido19@gmail.com"},{icon:b.b,title:"Web",content:"mrido10.github.io"},{icon:b.c,title:"Address",content:"Tangerang Selatan, Indonesia"}],formalEdu:[{year:"2019",school:"Universitas Jambi, (S1) Program Studi Fisika"},{year:"2014",school:"SMAN 3 Merangin"},{year:"2011",school:"SMPN 23 Merangin"},{year:"2008",school:"SDN 249 / VI Rawa Jaya I"},{year:"2002"}],inFormalEdu:[{year:"March 2020 - May 2020",school:"G2Academy (Fullstack Programmer Bootcamp)"}]},e.showAboutMe=function(e){return Object(u.jsxs)("div",{className:"aboutMe",children:[Object(u.jsx)(h.a,{icon:e.icon,"data-aos":"fade-up"}),Object(u.jsx)("div",{className:"content","data-aos":"fade-up",children:e.content})]})},e.showFormalEducation=function(t,a){return a===e.state.formalEdu.length-1?Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("div",{className:"empty"}),Object(u.jsx)("div",{className:"point",children:Object(u.jsx)(h.a,{icon:N.b})}),Object(u.jsx)("div",{className:"year",children:t.year})]}):Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("div",{className:"empty"}),Object(u.jsx)("div",{className:"point",children:Object(u.jsx)(h.a,{icon:N.b})}),Object(u.jsx)("div",{className:"year",children:t.year}),Object(u.jsx)("div",{className:"school",children:t.school}),Object(u.jsx)("div",{className:"line",children:Object(u.jsx)("div",{})}),Object(u.jsx)("div",{className:"empty"})]})},e.showInformalEducation=function(e){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("div",{className:"school",children:e.school}),Object(u.jsx)("div",{className:"point",children:Object(u.jsx)(h.a,{icon:N.b})}),Object(u.jsx)("div",{className:"year",children:e.year})]})},e.componentDidMount=function(){O.a.init({duration:1e3}),O.a.refresh()},e}return Object(r.a)(a,[{key:"render",value:function(){var e=this;return Object(u.jsxs)("div",{id:"container",children:[Object(u.jsx)(x,{}),Object(u.jsx)("div",{className:"containerContent abt","data-aos":"fade","data-aos-delay":"300",children:Object(u.jsxs)("div",{className:"contentBox aboutMeBox",children:[Object(u.jsxs)("div",{className:"titleBox left",children:[Object(u.jsx)("h2",{className:"title","data-aos":"fade-right",children:"About"}),Object(u.jsx)("h2",{className:"title","data-aos":"fade-right",children:"Me"})]}),Object(u.jsx)("div",{className:"contentBox2",children:this.state.aboutMe.map((function(t){return e.showAboutMe(t)}))})]})}),Object(u.jsx)("div",{className:"containerContent edu","data-aos":"fade",children:Object(u.jsxs)("div",{className:"contentBox eduBox",children:[Object(u.jsxs)("div",{className:"contentBox2",children:[Object(u.jsxs)("div",{className:"subtitle formal",children:[Object(u.jsx)("h3",{className:"formalEdu",children:"Formal"}),Object(u.jsx)("div",{className:"line",children:Object(u.jsx)("div",{className:"lineStretch"})}),Object(u.jsx)("div",{className:"line",children:Object(u.jsx)("div",{className:"boxRounded"})})]}),Object(u.jsx)("div",{className:"contentBox3 formalEdu",children:this.state.formalEdu.map((function(t,a){return e.showFormalEducation(t,a)}))}),Object(u.jsxs)("div",{className:"subtitle in",children:[Object(u.jsx)("h3",{className:"informalEdu",children:"In Formal"}),Object(u.jsx)("div",{className:"line",children:Object(u.jsx)("div",{className:"lineStretch"})}),Object(u.jsx)("div",{className:"line",children:Object(u.jsx)("div",{className:"boxRounded"})})]}),Object(u.jsx)("div",{className:"contentBox3 informalEdu",children:this.state.inFormalEdu.map((function(t){return e.showInformalEducation(t)}))})]}),Object(u.jsxs)("div",{className:"titleBox right",children:[Object(u.jsx)("h2",{className:"title",children:"My"}),Object(u.jsx)("h2",{className:"title",children:"Education"})]})]})})]})}}]),a}(n.Component)),g=(a(46),function(e){Object(m.a)(a,e);var t=Object(j.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return Object(u.jsx)("div",{id:"container2",children:Object(u.jsx)(x,{})})}}]),a}(n.Component)),p=function(){return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("div",{children:"Page Not Found"})})};var w=function(){var e=[{link:"/",page:f},{link:"/profile",page:y},{link:"/resume",page:g}];return Object(u.jsx)(o.a,{children:Object(u.jsxs)(d.c,{children:[e.map((function(e){return Object(u.jsx)(d.a,{path:e.link,exact:!0,component:e.page})})),Object(u.jsx)(d.a,{component:p})]})})},B=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,48)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,i=t.getLCP,s=t.getTTFB;a(e),n(e),c(e),i(e),s(e)}))};s.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(w,{})}),document.getElementById("root")),B()}},[[47,1,2]]]);
//# sourceMappingURL=main.37c3bb76.chunk.js.map