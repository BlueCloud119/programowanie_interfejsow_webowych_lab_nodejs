(this.webpackJsonplab5_248878=this.webpackJsonplab5_248878||[]).push([[0],{26:function(e,t,n){},27:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t);var a=n(1),s=n.n(a),i=n(20),r=n.n(i),c=(n(26),n(27),n(9)),l=n(10),o=n(12),j=n(11),d=n(2),u=n(0),h=function(e){for(var t=e.list,n=0,a=0;a<t.length;a++)n++;return Object(u.jsx)("div",{children:Object(u.jsxs)("p",{children:["Wyswietlone pozycje: ",n]})})};var b=function(e){var t=0;if(0==e.length)return t;for(var n=0;n<e.length;n++){t=(t<<5)-t+e.charCodeAt(n),t&=t}return t},m=function(e){var t=e.list.map((function(e){return Object(u.jsxs)("li",{style:{listStyleType:"none"},className:"border",children:[Object(u.jsxs)("p",{className:"listElement",children:["Imie i nazwisko: ",e.name]}),Object(u.jsxs)("p",{className:"listElement",children:["Opis: ",e.description]}),Object(u.jsxs)("p",{className:"listElement",children:["E-mail: ",e.email]})]},b(e.name))}));return Object(u.jsx)("ul",{children:t})},p=function(e){Object(o.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,s=new Array(a),i=0;i<a;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).state={filteredDescriptions:e.props.filteredList},e.h2Text="Wyszukiwanie student\xf3w po opisach",e.getFilteredContent=function(t){return e.props.filteredList.filter((function(e){return e.description.toLowerCase().includes(t.toLowerCase())}))},e.handleNewEntry=function(t){var n=t.currentTarget.value,a=e.getFilteredContent(n);e.setState({filteredDescriptions:a})},e}return Object(l.a)(n,[{key:"render",value:function(){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("div",{className:"borderSearch",children:[Object(u.jsx)("p",{children:this.h2Text}),Object(u.jsx)("input",{type:"search",name:"newSearchValue",value:this.state.newSearchValue,onChange:this.handleNewEntry}),Object(u.jsx)(h,{list:this.state.filteredDescriptions})]}),Object(u.jsx)(m,{list:this.state.filteredDescriptions})]})}}]),n}(s.a.Component),O=n(7),w=function(e){Object(o.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,s=new Array(a),i=0;i<a;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).state={newListElement:{name:"",description:"",email:""},newNameValue:"",newEmailValue:"",newDescriptionValue:"",warning:!1},e.classText="Dodaj nowego studenta:",e.nameText="Prosz\u0119 poda\u0107 Imi\u0119:",e.descriptionText="Prosz\u0119 poda\u0107 Opis:",e.emailText="Prosz\u0119 poda\u0107 Email:",e.errorMessage="Jedno, lub wi\u0119cej p\xf3l s\u0105 puste",e.handleNewEntryN=function(t){e.setState({newNameValue:t.target.value})},e.handleNewEntryEm=function(t){e.setState({newEmailValue:t.target.value})},e.handleNewEntryDesc=function(t){e.setState({newDescriptionValue:t.target.value})},e.handleOnClick=function(){var t;""===e.state.newNameValue||""===e.state.newEmailValue||""===e.state.newDescriptionValue?e.setState({warning:!0}):(e.setState((t={newListElement:e.state.newListElement.name=e.state.newNameValue},Object(O.a)(t,"newListElement",e.state.newListElement.description=e.state.newDescriptionValue),Object(O.a)(t,"newListElement",e.state.newListElement.email=e.state.newEmailValue),Object(O.a)(t,"newListElement",{}),Object(O.a)(t,"newNameValue",""),Object(O.a)(t,"newEmailValue",""),Object(O.a)(t,"newDescriptionValue",""),Object(O.a)(t,"warning",!1),t)),e.props.main(e.state.newListElement))},e}return Object(l.a)(n,[{key:"render",value:function(){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h2",{children:this.props.dummyText}),this.state.warning&&Object(u.jsx)("h2",{className:"borderWarning",children:this.errorMessage}),Object(u.jsxs)("div",{className:"borderAdd",children:[Object(u.jsx)("p",{children:this.classText}),Object(u.jsx)("p",{children:this.nameText}),Object(u.jsx)("input",{type:"text",name:"newNameValue",value:this.state.newNameValue,onChange:this.handleNewEntryN}),Object(u.jsx)("br",{}),Object(u.jsx)("p",{children:this.descriptionText}),Object(u.jsx)("input",{type:"text",name:"newDescriptionValue",value:this.state.newDescriptionValue,onChange:this.handleNewEntryDesc}),Object(u.jsx)("br",{}),Object(u.jsx)("p",{children:this.emailText}),Object(u.jsx)("input",{type:"text",name:"newEmailValue",value:this.state.newEmailValue,onChange:this.handleNewEntryEm}),Object(u.jsx)("br",{}),Object(u.jsx)("button",{type:"button",name:"Dodaj",onClick:this.handleOnClick,className:"buttonMargin btn btn-success",children:"Dodaj"})]})]})}}]),n}(s.a.Component),x=function(e){Object(o.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,s=new Array(a),i=0;i<a;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).state={list:[{name:"Marek Kurek",description:"student",email:"@@"},{name:"Jacek Jackowski",description:"c++ docker java",email:"@@"},{name:"Joanna Nowak",description:"pracowita sumienna programistka",email:"@@"},{name:"Pawe\u0142 Piotrowicz",description:"informatyk",email:"@@"}]},e.updateList=function(t){e.setState({list:e.state.list.concat({name:t.name,description:t.description,email:t.email})})},e}return Object(l.a)(n,[{key:"render",value:function(){return console.log(this.state.list),Object(u.jsxs)(d.c,{children:[Object(u.jsx)(d.a,{path:"/",exact:!0,children:Object(u.jsx)("section",{children:Object(u.jsx)(p,{filteredList:this.state.list})})}),Object(u.jsx)(d.a,{path:"/dod",children:Object(u.jsx)("section",{children:Object(u.jsx)(w,{main:this.updateList})})}),Object(u.jsx)(d.a,{children:Object(u.jsx)("section",{children:Object(u.jsx)("h1",{children:"Error 404 - not found"})})})]})}}]),n}(a.Component),f=n(14);var y=function(){return Object(u.jsxs)(f.a,{basename:"/programowanie_interfejsow_webowych_lab_nodejs",children:[Object(u.jsx)("header",{children:"Wyszukiwarka grup"}),Object(u.jsxs)("main",{children:[Object(u.jsxs)("nav",{children:[Object(u.jsx)(f.b,{to:"/",exact:!0,children:"Lista wszytkich"}),Object(u.jsx)(f.b,{to:"/dod",children:"Dodaj nowy"})]}),Object(u.jsx)(x,{})]})]})};r.a.render(Object(u.jsx)(s.a.StrictMode,{children:Object(u.jsx)(y,{})}),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.cf2979ca.chunk.js.map