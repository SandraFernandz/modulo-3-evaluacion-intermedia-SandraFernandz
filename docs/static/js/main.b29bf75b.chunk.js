(this["webpackJsonpreact-starter-kit"]=this["webpackJsonpreact-starter-kit"]||[]).push([[0],{13:function(e,n,t){},15:function(e,n,t){"use strict";t.r(n);var c=t(1),a=t(6),s=t.n(a),r=t(8),l=t(3),o=(t(13),t(7)),j=t(0);var i=function(){var e=Object(c.useState)(o),n=Object(l.a)(e,2),t=n[0],a=n[1],s=Object(c.useState)(""),i=Object(l.a)(s,2),b=i[0],d=i[1],O=Object(c.useState)(""),u=Object(l.a)(O,2),h=u[0],p=u[1],m=Object(c.useState)(""),x=Object(l.a)(m,2),k=x[0],f=x[1],W=t.map((function(e,n){return Object(j.jsxs)("li",{children:[Object(j.jsxs)("h3",{children:["# ".concat(n," "),e.name]}),Object(j.jsxs)("p",{children:["Abierto entre semana:",!0===e.openOnWeekdays?"S\xed":"No"]}),Object(j.jsxs)("p",{children:["Abierto el fin de semana:",!0===e.openOnWeekend?"S\xed":"No"]})]},n)}));return Object(j.jsxs)("div",{children:[Object(j.jsxs)("header",{children:[Object(j.jsx)("h1",{children:"Mis Clubs"}),Object(j.jsx)("span",{children:Object(j.jsx)("h3",{children:"A\xf1adir un nuevo club"})}),Object(j.jsx)("span",{children:Object(j.jsxs)("select",{name:"selectOption",id:"selectOption",children:[Object(j.jsx)("option",{value:"",children:"todos"}),Object(j.jsx)("option",{value:"",children:"los que abren entre semana"}),Object(j.jsx)("option",{value:"",children:"los que abren el fin de semana"})]})})]}),Object(j.jsx)("main",{children:Object(j.jsx)("ul",{children:W})}),Object(j.jsx)("footer",{children:Object(j.jsxs)("form",{action:"",children:[Object(j.jsxs)("p",{children:[Object(j.jsx)("label",{htmlFor:"name",children:"Nombre del club "}),Object(j.jsx)("input",{type:"text",name:"name",id:"name",placeholder:"Nombre del Club",onChange:function(e){d(e.currentTarget.value)}})]}),Object(j.jsxs)("p",{children:[Object(j.jsx)("label",{htmlFor:"nameWeekDays",children:"\xbfAbre entre semana?"}),Object(j.jsx)("input",{type:"checkbox",checked:h,name:"nameWeekDays",id:"nameWeekDays",onChange:function(e){p(e.currentTarget.checked)}})]}),Object(j.jsxs)("p",{children:[Object(j.jsx)("label",{htmlFor:"nameWeekEnds",children:"\xbfAbre los fines de semana"}),Object(j.jsx)("input",{type:"checkBox",checked:k,name:"nameWeekEnds",id:"nameWeekEnds",onChange:function(e){f(e.currentTarget.checked)}})]}),Object(j.jsx)("input",{type:"submit",value:"A\xf1adir un nuevo club",name:"",id:"",onClick:function(e){e.preventDefault();var n={name:b,openOnWeekDays:h,openOnWeekEnds:k};a([].concat(Object(r.a)(t),[n]))}})]})})]})};s.a.render(Object(j.jsx)(i,{}),document.getElementById("root"))},7:function(e){e.exports=JSON.parse('[{"name":"Book club","openOnWeekdays":true,"openOnWeekend":true},{"name":"Chess club","openOnWeekdays":false,"openOnWeekend":true},{"name":"Escape room club","openOnWeekdays":false,"openOnWeekend":false},{"name":"Debate club","openOnWeekdays":true,"openOnWeekend":false}]')}},[[15,1,2]]]);
//# sourceMappingURL=main.b29bf75b.chunk.js.map