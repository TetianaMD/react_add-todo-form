(this["webpackJsonpreact_add-todo-form"]=this["webpackJsonpreact_add-todo-form"]||[]).push([[0],{13:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(8),i=a.n(n),r=a(5),c=a(2),s=a(7),o=(a(13),a(1)),l=[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz"},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv"},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net"},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org"},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca"},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info"},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz"},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me"},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io"},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz"}];function d(e){return l.find((function(t){return t.id===e}))||null}var u=a(0),m=function(e){var t=e.user;return Object(u.jsx)("a",{className:"UserInfo",href:"mailto:".concat(null===t||void 0===t?void 0:t.email),children:null===t||void 0===t?void 0:t.name})},j=function(e){var t=e.todo;return Object(u.jsxs)("article",{className:"TodoInfo ".concat(t.completed?"TodoInfo--completed":""),children:[Object(u.jsx)("h2",{className:"TodoInfo__title",children:t.title}),Object(u.jsx)(m,{user:t.user})]})},b=function(e){var t=e.onAdd,a=e.todos,n=Object(o.useState)(""),i=Object(c.a)(n,2),s=i[0],m=i[1],b=Object(o.useState)(!1),h=Object(c.a)(b,2),O=h[0],f=h[1],p=Object(o.useState)(0),x=Object(c.a)(p,2),v=x[0],y=x[1],S=Object(o.useState)(!1),N=Object(c.a)(S,2),I=N[0],g=N[1],C=function(){return""===s.trim()&&0===v};return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsxs)("form",{action:"/api/todos",method:"POST",onSubmit:function(e){if(e.preventDefault(),C())return f(""===s.trim()),void g(0===v);O||I||(t({id:Math.max.apply(Math,Object(r.a)(a.map((function(e){return e.id}))))+1,title:s,completed:!1,userId:v,user:d(v)}),m(""),y(0))},children:[Object(u.jsx)("div",{className:"field",children:Object(u.jsxs)("label",{htmlFor:"titleInput",children:["Title:\xa0",Object(u.jsx)("input",{type:"text","data-cy":"titleInput",value:s,onChange:function(e){m(e.target.value),f(!1)},placeholder:"Please enter a title"}),O&&Object(u.jsx)("span",{className:"error",children:"Please enter a title"})]})}),Object(u.jsxs)("div",{className:"field",children:[Object(u.jsxs)("label",{htmlFor:"userSelect",children:["User:\xa0",Object(u.jsxs)("select",{"data-cy":"userSelect",value:v,onChange:function(e){y(+e.target.value),g(!1)},children:[Object(u.jsx)("option",{value:"0",disabled:!0,children:"Choose a user"}),l.map((function(e){return Object(u.jsx)("option",{value:e.id,children:e.name},e.id)}))]})]}),I&&Object(u.jsx)("span",{className:"error",children:"Please choose a user"})]}),Object(u.jsx)("button",{type:"submit","data-cy":"submitButton",disabled:!C(),children:"Add"})]}),Object(u.jsx)("section",{className:"TodoList",children:a.map((function(e){return Object(u.jsx)("article",{"data-id":"1",children:Object(u.jsx)(j,{todo:e})},e.id)}))})]})},h=[{id:1,title:"delectus aut autem",completed:!0,userId:1},{id:15,title:"some other todo",completed:!1,userId:1},{id:2,title:"quis ut nam facilis et officia qui",completed:!1,userId:4}].map((function(e){return Object(s.a)(Object(s.a)({},e),{},{user:d(e.userId)})})),O=function(){var e=Object(o.useState)(h),t=Object(c.a)(e,2),a=t[0],n=t[1];return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("h1",{children:"Add todo form"}),Object(u.jsx)(b,{todos:a,onAdd:function(e){n((function(t){return[].concat(Object(r.a)(t),[e])}))}})]})};i.a.render(Object(u.jsx)(O,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.8ee789da.chunk.js.map