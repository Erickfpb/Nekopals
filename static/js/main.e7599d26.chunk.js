(this.webpackJsonpnekofriends=this.webpackJsonpnekofriends||[]).push([[0],{11:function(e,t,n){},13:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n(4),a=n.n(s),r=(n(9),n(3)),i=n(0),o=function(e){var t=e.name,n=e.email,c=e.id;return Object(i.jsxs)("div",{className:"tc grow bg-light-pink br3 pa3 ma2 dib bw2 shadow-5",children:[Object(i.jsx)("img",{alt:"robots",src:"https://robohash.org/set_set4/".concat(c,"?size=200x200")}),Object(i.jsxs)("div",{children:[Object(i.jsx)("h2",{children:t}),Object(i.jsx)("p",{children:n})]})]})},h=function(e){var t=e.robots;return Object(i.jsx)("div",{children:t.map((function(e,n){return Object(i.jsx)(o,{id:t[n].id,name:t[n].name,email:t[n].email},n)}))})},l=function(e){e.searchfield;var t=e.searchChange;return Object(i.jsx)("div",{className:"pa3",children:Object(i.jsx)("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"Search Kittens",onChange:t})})},d=function(e){return Object(i.jsx)("div",{style:{overflow:"scroll",border:"5px solid black",height:"800px"},children:e.children})};n(11);var j=function(){var e=Object(c.useState)([]),t=Object(r.a)(e,2),n=t[0],s=t[1],a=Object(c.useState)(""),o=Object(r.a)(a,2),j=o[0],b=o[1];Object(c.useEffect)((function(){fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(e){s(e)}))}),[]);var u=n.filter((function(e){return e.name.toLowerCase().includes(j.toLowerCase())}));return n.length?Object(i.jsxs)("div",{className:"tc",children:[Object(i.jsx)("h1",{className:"f1",children:"NEKOFRIENDS"}),Object(i.jsx)(l,{searchChange:function(e){b(e.target.value)}}),Object(i.jsxs)(d,{children:[Object(i.jsx)(h,{robots:u}),Object(i.jsx)("a",{href:"https://www.linkedin.com/in/efpba/",children:"Made with React Hooks by Erick Fernando Perez Barcenas"})]})]}):Object(i.jsx)("h1",{children:"Loading"})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(12);a.a.render(Object(i.jsx)(j,{}),document.getElementById("root"))},9:function(e,t,n){}},[[13,1,2]]]);
//# sourceMappingURL=main.e7599d26.chunk.js.map