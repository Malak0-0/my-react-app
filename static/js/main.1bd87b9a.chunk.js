(this["webpackJsonpmy-react-app"]=this["webpackJsonpmy-react-app"]||[]).push([[0],{24:function(e,t,c){},33:function(e,t,c){},36:function(e,t,c){},37:function(e,t,c){},46:function(e,t,c){},47:function(e,t,c){},48:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),s=c(25),r=c.n(s),i=(c(33),c(12)),o=c(26),l=c(23),d=c(18),j=c(8),u=c(9),b=c(10),m=c(11),h=c(21),O=c.n(h),x=c(7),p=c(2),f=c(0),v=function(e){Object(b.a)(c,e);var t=Object(m.a)(c);function c(){return Object(j.a)(this,c),t.apply(this,arguments)}return Object(u.a)(c,[{key:"render",value:function(){return Object(f.jsxs)("div",{children:["Current Balance: ",this.props.accountBalance]})}}]),c}(n.Component),N=v,g=(c(36),c(37),function(){return Object(f.jsxs)("nav",{className:"navbar",children:[Object(f.jsx)("h1",{className:"bank-name",children:"Bank of React"}),Object(f.jsxs)("div",{className:"nav-links",children:[Object(f.jsx)(x.b,{to:"/",children:"Home"}),Object(f.jsx)(x.b,{to:"/userProfile",children:"User Profile"}),Object(f.jsx)(x.b,{to:"/login",children:"Login"}),Object(f.jsx)(x.b,{to:"/credits",children:"Credits"}),Object(f.jsx)(x.b,{to:"/debits",children:"Debits"})]})]})}),y=function(e){Object(b.a)(c,e);var t=Object(m.a)(c);function c(){return Object(j.a)(this,c),t.apply(this,arguments)}return Object(u.a)(c,[{key:"render",value:function(){return Object(f.jsxs)("div",{className:"home-container",children:[Object(f.jsx)(g,{}),Object(f.jsx)("main",{className:"home-content",children:Object(f.jsxs)("div",{className:"card-container",children:[Object(f.jsx)("h2",{children:"Welcome back!"}),Object(f.jsx)(N,{accountBalance:this.props.accountBalance})]})})]})}}]),c}(n.Component),S=y,C=(c(46),function(e){Object(b.a)(c,e);var t=Object(m.a)(c);function c(){return Object(j.a)(this,c),t.apply(this,arguments)}return Object(u.a)(c,[{key:"render",value:function(){return Object(f.jsxs)("div",{className:"home-container",children:[Object(f.jsx)(g,{}),Object(f.jsx)("main",{className:"home-content",children:Object(f.jsxs)("div",{className:"profile-card",children:[Object(f.jsx)("h1",{className:"profile-title",children:"User Profile"}),Object(f.jsxs)("div",{className:"profile-info",children:[Object(f.jsxs)("div",{className:"info-row",children:[Object(f.jsx)("span",{className:"label",children:"Username:"}),Object(f.jsx)("span",{children:this.props.userName})]}),Object(f.jsxs)("div",{className:"info-row",children:[Object(f.jsx)("span",{className:"label",children:"Member Since:"}),Object(f.jsx)("span",{children:this.props.memberSince})]})]})]})})]})}}]),c}(n.Component)),B=C,k=(c(47),function(e){Object(b.a)(c,e);var t=Object(m.a)(c);function c(e){var n;return Object(j.a)(this,c),(n=t.call(this,e)).handleChange=function(e){var t=Object(d.a)({},n.state.user);t.userName=e.target.value,n.setState({user:t})},n.handleSubmit=function(e){e.preventDefault(),n.props.mockLogIn(n.state.user),n.setState({redirect:!0})},n.state={user:{userName:n.props.user.userName,password:""},redirect:!1},n}return Object(u.a)(c,[{key:"render",value:function(){return this.state.redirect?Object(f.jsx)(p.a,{to:"/userProfile"}):Object(f.jsxs)("div",{className:"home-container",children:[Object(f.jsx)(g,{}),Object(f.jsx)("main",{className:"home-content",children:Object(f.jsxs)("div",{className:"card-container login-card",children:[Object(f.jsx)("h2",{className:"login-heading",children:"Login"}),Object(f.jsxs)("form",{onSubmit:this.handleSubmit,className:"login-form",children:[Object(f.jsxs)("div",{className:"form-group",children:[Object(f.jsx)("label",{children:"User Name"}),Object(f.jsx)("input",{type:"text",name:"userName",defaultValue:this.props.user.userName,onChange:this.handleChange})]}),Object(f.jsxs)("div",{className:"form-group",children:[Object(f.jsx)("label",{children:"Password"}),Object(f.jsx)("input",{type:"password",name:"password"})]}),Object(f.jsx)("button",{className:"login-button",children:"Log In"})]})]})})]})}}]),c}(n.Component)),L=(c(24),function(e){var t=e.credits,c=e.accountBalance,a=e.addCredit,s=Object(n.useState)(""),r=Object(i.a)(s,2),o=r[0],l=r[1],d=Object(n.useState)(""),j=Object(i.a)(d,2),u=j[0],b=j[1],m=function(e){var t=e.target,c=t.name,n=t.value;"description"===c?l(n):"amount"===c&&b(n)};return Object(f.jsxs)("div",{className:"home-container",children:[Object(f.jsx)(g,{}),Object(f.jsx)("main",{className:"home-content",children:Object(f.jsxs)("div",{className:"credit-card-container",children:[Object(f.jsx)("h1",{className:"page-title",children:"Credits"}),Object(f.jsx)("hr",{className:"section-divider"}),Object(f.jsx)("h2",{className:"credit-balance-title",children:Object(f.jsx)(N,{accountBalance:c})}),Object(f.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t=(new Date).toISOString().slice(0,10);a({description:o,amount:u,date:t}),l(""),b("")},className:"credit-form",children:[Object(f.jsxs)("div",{className:"form-row",children:[Object(f.jsx)("label",{htmlFor:"amount",className:"form-label",children:"Amount"}),Object(f.jsx)("input",{type:"number",name:"amount",id:"amount",value:u,onChange:m,className:"form-input",required:!0,min:"0.01",step:"0.01",inputMode:"decimal"})]}),Object(f.jsxs)("div",{className:"form-row",children:[Object(f.jsx)("label",{htmlFor:"description",className:"form-label",children:"Description"}),Object(f.jsx)("input",{type:"text",name:"description",id:"description",value:o,onChange:m,className:"form-input",required:!0})]}),Object(f.jsx)("button",{type:"submit",className:"form-button",children:"Add Credit"})]}),Object(f.jsxs)("div",{className:"credit-history",children:[Object(f.jsx)("h3",{children:"Credit History"}),Object(f.jsx)("ul",{className:"credit-list",children:t.slice().reverse().map((function(e){return Object(f.jsxs)("li",{className:"credit-card",children:[Object(f.jsx)("div",{className:"credit-amount",children:e.amount}),Object(f.jsx)("div",{className:"credit-description",children:e.description}),Object(f.jsx)("div",{className:"credit-date",children:e.date.slice(0,10)})]},e.id)}))})]}),Object(f.jsx)(x.b,{className:"profile-link",to:"/",children:"\u2190 Return to Home"})]})})]})}),D=function(e){var t=e.debits,c=e.accountBalance,a=e.addDebit,s=Object(n.useState)(""),r=Object(i.a)(s,2),o=r[0],l=r[1],d=Object(n.useState)(""),j=Object(i.a)(d,2),u=j[0],b=j[1],m=function(e){var t=e.target,c=t.name,n=t.value;"description"===c?l(n):"amount"===c&&b(n)};return Object(f.jsxs)("div",{className:"home-container",children:[Object(f.jsx)(g,{}),Object(f.jsx)("main",{className:"home-content",children:Object(f.jsxs)("div",{className:"credit-card-container",children:[Object(f.jsx)("h1",{className:"page-title",children:"Debits"}),Object(f.jsx)("hr",{className:"section-divider"}),Object(f.jsx)("h2",{className:"credit-balance-title",children:Object(f.jsx)(N,{accountBalance:c})}),Object(f.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t=(new Date).toISOString().slice(0,10),c={description:o.trim(),amount:parseFloat(u),date:t};a(c),l(""),b("")},className:"credit-form",children:[Object(f.jsxs)("div",{className:"form-row",children:[Object(f.jsx)("label",{htmlFor:"amount",className:"form-label",children:"Amount"}),Object(f.jsx)("input",{type:"number",name:"amount",id:"amount",value:u,onChange:m,className:"form-input",required:!0,min:"0.01",step:"0.01"})]}),Object(f.jsxs)("div",{className:"form-row",children:[Object(f.jsx)("label",{htmlFor:"description",className:"form-label",children:"Description"}),Object(f.jsx)("input",{type:"text",name:"description",id:"description",value:o,onChange:m,className:"form-input",required:!0})]}),Object(f.jsx)("button",{type:"submit",className:"form-button",children:"Add Debit"})]}),Object(f.jsxs)("div",{className:"credit-history",children:[Object(f.jsx)("h3",{children:"Debit History"}),Object(f.jsx)("ul",{className:"credit-list",children:t.slice().reverse().map((function(e,t){return Object(f.jsxs)("li",{className:"credit-card",children:[Object(f.jsxs)("div",{className:"credit-amount",children:["-$",parseFloat(e.amount).toFixed(2)]}),Object(f.jsx)("div",{className:"credit-description",children:e.description}),Object(f.jsx)("div",{className:"credit-date",children:e.date.slice(0,10)})]},e.id||t)}))})]})]})})]})},w=function(e){Object(b.a)(c,e);var t=Object(m.a)(c);function c(){var e;return Object(j.a)(this,c),(e=t.call(this)).mockLogIn=function(t){var c=Object(d.a)({},e.state.currentUser);c.userName=t.userName,e.setState({currentUser:c})},e.addCredit=function(t){var c=[].concat(Object(l.a)(e.state.creditList),[t]);e.setState({creditList:c,accountBalance:e.state.accountBalance+Number(t.amount)})},e.addDebit=function(t){var c=[].concat(Object(l.a)(e.state.debitList),[t]);e.setState({debitList:c,accountBalance:e.state.accountBalance-Number(t.amount)})},e.state={accountBalance:1234567.89,creditList:[],debitList:[],currentUser:{userName:"Joe Smith",memberSince:"11/22/99"}},e}return Object(u.a)(c,[{key:"componentDidMount",value:function(){var e=Object(o.a)(O.a.mark((function e(){var t,c,n,a,s,r,o,l,d,j;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Promise.all([fetch("https://johnnylaicode.github.io/api/credits.json"),fetch("https://johnnylaicode.github.io/api/debits.json")]);case 3:return t=e.sent,c=Object(i.a)(t,2),n=c[0],a=c[1],e.next=9,Promise.all([n.json(),a.json()]);case 9:s=e.sent,r=Object(i.a)(s,2),o=r[0],l=r[1],d=o.reduce((function(e,t){return e+t.amount}),0),j=l.reduce((function(e,t){return e+t.amount}),0),this.setState({creditList:o,debitList:l,accountBalance:d-j}),e.next=21;break;case 18:e.prev=18,e.t0=e.catch(0),console.error("Error fetching data:",e.t0);case 21:case"end":return e.stop()}}),e,this,[[0,18]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return Object(f.jsx)(x.a,{basename:"/my-react-app",children:Object(f.jsxs)("div",{children:[Object(f.jsx)(p.b,{exact:!0,path:"/",render:function(){return Object(f.jsx)(S,{accountBalance:e.state.accountBalance})}}),Object(f.jsx)(p.b,{exact:!0,path:"/userProfile",render:function(){return Object(f.jsx)(B,{userName:e.state.currentUser.userName,memberSince:e.state.currentUser.memberSince})}}),Object(f.jsx)(p.b,{exact:!0,path:"/login",render:function(){return Object(f.jsx)(k,{user:e.state.currentUser,mockLogIn:e.mockLogIn})}}),Object(f.jsx)(p.b,{exact:!0,path:"/credits",render:function(){return Object(f.jsx)(L,{credits:e.state.creditList,addCredit:e.addCredit,accountBalance:e.state.accountBalance})}}),Object(f.jsx)(p.b,{exact:!0,path:"/debits",render:function(){return Object(f.jsx)(D,{debits:e.state.debitList,addDebit:e.addDebit,accountBalance:e.state.accountBalance})}})]})})}}]),c}(n.Component),F=w,P=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,49)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),n(e),a(e),s(e),r(e)}))};r.a.render(Object(f.jsx)(a.a.StrictMode,{children:Object(f.jsx)(F,{})}),document.getElementById("root")),P()}},[[48,1,2]]]);
//# sourceMappingURL=main.1bd87b9a.chunk.js.map