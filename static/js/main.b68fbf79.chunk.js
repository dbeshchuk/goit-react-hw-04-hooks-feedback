(this["webpackJsonpgoit-react-hw-04-hooks-feedback"]=this["webpackJsonpgoit-react-hw-04-hooks-feedback"]||[]).push([[0],{10:function(e,t,c){},12:function(e,t,c){"use strict";c.r(t);var n=c(1),i=c.n(n),s=c(4),r=c.n(s),a=(c(9),c(2)),o=(c(10),c(0)),l=function(e){var t=e.title,c=e.children;return Object(o.jsxs)("section",{className:"container",children:[Object(o.jsx)("h2",{children:t}),c]})},j=function(e){var t=e.good,c=e.neutral,n=e.bad,i=e.total,s=e.positivePercentage;return Object(o.jsxs)("div",{className:"statistics-list",children:[Object(o.jsxs)("p",{children:["Good: ",t]}),Object(o.jsxs)("p",{children:["Neutral: ",c]}),Object(o.jsxs)("p",{children:["Bad: ",n]}),Object(o.jsxs)("p",{children:["Total: ",i]}),Object(o.jsxs)("p",{children:["Positive feedback: ",s,"%"]})]})},d=function(e){var t=e.onGoodClick,c=e.onNeutralClick,n=e.onBadClick;return Object(o.jsxs)("ul",{className:"feedback-list",children:[Object(o.jsx)("li",{children:Object(o.jsx)("button",{onClick:t,children:"Good"})}),Object(o.jsx)("li",{children:Object(o.jsx)("button",{onClick:c,children:"Neutral"})}),Object(o.jsx)("li",{children:Object(o.jsx)("button",{onClick:n,children:"Bad"})})]})},b=function(e){var t=e.message;return Object(o.jsx)("p",{children:t})};var u=function(){var e=Object(n.useState)(0),t=Object(a.a)(e,2),c=t[0],i=t[1],s=Object(n.useState)(0),r=Object(a.a)(s,2),u=r[0],h=r[1],O=Object(n.useState)(0),x=Object(a.a)(O,2),f=x[0],k=x[1];function g(){return c+u+f}return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("div",{className:"container",children:Object(o.jsx)("h1",{children:"Feedback"})}),Object(o.jsx)(l,{title:"Please leave feedback",children:Object(o.jsx)(d,{onGoodClick:function(){return i(c+1)},onNeutralClick:function(){return h(u+1)},onBadClick:function(){return k(f+1)}})}),Object(o.jsx)(l,{title:"Statistics:",children:g()?Object(o.jsx)(j,{good:c,neutral:u,bad:f,total:g(),positivePercentage:Math.round(c/(c+u+f)*100)}):Object(o.jsx)(b,{message:"No feedback given"})})]})},h=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,13)).then((function(t){var c=t.getCLS,n=t.getFID,i=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),n(e),i(e),s(e),r(e)}))};r.a.render(Object(o.jsx)(i.a.StrictMode,{children:Object(o.jsx)(u,{})}),document.getElementById("root")),h()},9:function(e,t,c){}},[[12,1,2]]]);
//# sourceMappingURL=main.b68fbf79.chunk.js.map