(this.webpackJsonphw=this.webpackJsonphw||[]).push([[0],[,,,,,function(e,a,t){e.exports={nav:"Header_nav__3wmpN",menu:"Header_menu__gUlil",loader:"Header_loader__3pgYM",burger:"Header_burger__1-xbo",link:"Header_link__tGwtm"}},,,,function(e,a,t){e.exports={message:"Message_message__2oU0q",block:"Message_block__27_KC",name:"Message_name__Moyus",time:"Message_time__3tOzS"}},function(e,a,t){e.exports={superInput:"SuperInputText_superInput__2y_UX",errorInput:"SuperInputText_errorInput__2fAkQ",error:"SuperInputText_error__2ClcW"}},function(e,a,t){e.exports={someClass:"Affairs_someClass__1ri7z",high:"Affairs_high__1KvIA",middle:"Affairs_middle__1oEAJ",low:"Affairs_low__srE7l"}},function(e,a,t){e.exports={someClass:"Greeting_someClass__3rpMr",error:"Greeting_error__rJrsw"}},function(e,a,t){e.exports={blue:"HW4_blue__1ipYq",column:"HW4_column__1JFKm",testSpanError:"HW4_testSpanError__1j9y8"}},function(e,a,t){e.exports={default:"SuperButton_default__222NT",red:"SuperButton_red__2TLar"}},function(e,a,t){e.exports={checkbox:"SuperCheckbox_checkbox__2DA1T",spanClassName:"SuperCheckbox_spanClassName__3G09K"}},,,function(e,a,t){e.exports={App:"App_App__BMeZ0"}},,function(e,a,t){e.exports=t(26)},,,,,function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(17),c=t.n(l),o=(t(25),t(18)),s=t.n(o),u=t(4),m=t(5),i=t.n(m);var E=function(){return r.a.createElement("div",{className:i.a.nav},r.a.createElement("div",{className:i.a.burger},"\u041c\u0435\u043d\u044e"),r.a.createElement("div",{className:i.a.menu},r.a.createElement(u.b,{to:"/pre-junior",className:i.a.link},"PreJunior"),r.a.createElement(u.b,{to:"/junior",className:i.a.link},"Junior"),r.a.createElement(u.b,{to:"/junior_plus",className:i.a.link},"Junior+")))},d=t(1);var p=function(){return r.a.createElement("div",null,r.a.createElement("div",null,"404"),r.a.createElement("div",null,"Page not found!"),r.a.createElement("div",null,"\u2014\u0e05/\u1420.\u032b .\u141f\\\u0e05\u2014"))},_=t(9),f=t.n(_);function h(e){return r.a.createElement("div",{className:f.a.message},r.a.createElement("img",{src:e.avatar,alt:"avatar"}),r.a.createElement("div",{className:f.a.block},r.a.createElement("span",{className:f.a.name},e.name),r.a.createElement("p",null,e.message),r.a.createElement("span",{className:f.a.time},e.time)))}var v="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",b="Some Name",g="Some text \u043c\u043d\u043e\u0433\u043e \u043c\u043d\u043e\u0433\u043e \u0441\u0430\u043c\u043e \u0442\u0435\u043a\u0441\u0442\u0430, \u043e\u0447\u0435\u043d\u044c \u043c\u043d\u043e\u0433\u043e \u0440\u0430\u0437\u043d\u043e\u0433\u043e \u0442\u0435\u043a\u0441\u0442\u0430 \u0430\u0433\u0430 \u043e\u0433\u043e\u0438\u0442\u044c\u0438",C="22:00";var k=function(){return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 1",r.a.createElement(h,{avatar:v,name:b,message:g,time:C}),r.a.createElement(h,{avatar:v,name:b,message:"some text",time:C}))},N=t(2),j=t(11),x=t.n(j);var w=function(e){return r.a.createElement("div",{className:x.a.someClass},r.a.createElement("span",null,e.affair._id,"."),r.a.createElement("span",{className:x.a[e.affair.priority]}," ",e.affair.name),r.a.createElement("button",{onClick:function(){e.deleteAffairCallback(e.affair._id)}},"X"))};var O=function(e){var a=e.data.map((function(a){return r.a.createElement(w,{key:a._id,affair:a,deleteAffairCallback:e.deleteAffairCallback})}));return r.a.createElement("div",null,a,r.a.createElement("button",{onClick:function(){e.setFilter("all")}},"All"),r.a.createElement("button",{onClick:function(){e.setFilter("high")}},"High"),r.a.createElement("button",{onClick:function(){e.setFilter("middle")}},"Middle"),r.a.createElement("button",{onClick:function(){e.setFilter("low")}},"Low"))},S=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var y=function(){var e=Object(n.useState)(S),a=Object(N.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)("all"),o=Object(N.a)(c,2),s=o[0],u=o[1],m=function(e,a){return"all"===a?e:e.filter((function(e){return e.priority===a}))}(t,s);return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 2",r.a.createElement(O,{data:m,setFilter:u,deleteAffairCallback:function(e){return l(function(e,a){return e.filter((function(e){return e._id!==a}))}(t,e))}}),r.a.createElement("hr",null),r.a.createElement("hr",null))},A=t(19),T=t(12),H=t.n(T),I=function(e){var a=e.name,t=e.setNameCallback,n=e.addUser,l=e.error,c=e.totalUsers,o=l?H.a.error:"";return r.a.createElement("div",{className:H.a.someClass},r.a.createElement("input",{value:a,onChange:function(e){return t(e)},className:o}),r.a.createElement("span",null,l),r.a.createElement("button",{onClick:n},"add"),r.a.createElement("span",null,c))},J=function(e){var a=e.users,t=e.addUserCallback,l=Object(n.useState)(""),c=Object(N.a)(l,2),o=c[0],s=c[1],u=Object(n.useState)(""),m=Object(N.a)(u,2),i=m[0],E=m[1],d=a.length;return r.a.createElement(I,{name:o,setNameCallback:function(e){s(e.currentTarget.value)},addUser:function(){o?(t(o),E(""),alert("Hello ".concat(o," !")),s("")):E("\u042d\u0442\u043e \u043f\u043e\u043b\u0435 \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043f\u0443\u0441\u0442\u044b\u043c. \u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f.")},error:i,totalUsers:d})};var M=function(){var e=Object(n.useState)([]),a=Object(N.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 3",r.a.createElement(J,{users:t,addUserCallback:function(e){l([{_id:t.length+1,name:e}].concat(Object(A.a)(t)))}}),r.a.createElement("hr",null),r.a.createElement("hr",null))},U=t(7),F=t(10),W=t.n(F),K=["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"],B=function(e){e.type;var a=e.onChange,t=e.onChangeText,n=e.onKeyPress,l=e.onEnter,c=e.error,o=e.className,s=e.spanClassName,u=Object(U.a)(e,K),m="".concat(W.a.error," ").concat(s||""),i="".concat(o," ").concat(c?W.a.errorInput:W.a.superInput);return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",Object.assign({type:"text",onChange:function(e){a&&a(e),t&&t(e.currentTarget.value)},onKeyPress:function(e){n&&n(e),l&&"Enter"===e.key&&l()},className:i},u)),c&&r.a.createElement("span",{className:m},c))},P=t(13),G=t.n(P),q=t(14),X=t.n(q),Y=["red","className"],z=function(e){var a=e.red,t=e.className,n=Object(U.a)(e,Y),l="".concat(a?X.a.red:X.a.default," ").concat(t);return r.a.createElement("button",Object.assign({className:l},n))},L=t(15),Z=t.n(L),D=["type","onChange","onChangeChecked","className","spanClassName","children"],Q=function(e){e.type;var a=e.onChange,t=e.onChangeChecked,n=e.className,l=(e.spanClassName,e.children),c=Object(U.a)(e,D),o="".concat(Z.a.checkbox," ").concat(n||"");return r.a.createElement("label",null,r.a.createElement("input",Object.assign({type:"checkbox",onChange:function(e){t&&t(e.currentTarget.checked),a&&a(e)},className:o},c)),l&&r.a.createElement("span",{className:Z.a.spanClassName},l))};var R=function(){var e=Object(n.useState)(""),a=Object(N.a)(e,2),t=a[0],l=a[1],c=t?"":"error",o=function(){c?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(t)},s=Object(n.useState)(!1),u=Object(N.a)(s,2),m=u[0],i=u[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 4",r.a.createElement("div",{className:G.a.column},r.a.createElement(B,{value:t,onChangeText:l,onEnter:o,error:c}),r.a.createElement(B,{className:G.a.blue}),r.a.createElement(z,null,"default"),r.a.createElement(z,{red:!0,onClick:o},"delete "),r.a.createElement(z,{disabled:!0},"disabled"),r.a.createElement(Q,{checked:m,onChangeChecked:i},"some text "),r.a.createElement(Q,{checked:m,onChange:function(e){return i(e.currentTarget.checked)}})),r.a.createElement("hr",null),r.a.createElement("hr",null))};var $=function(){return r.a.createElement("div",null,r.a.createElement(k,null),r.a.createElement(y,null),r.a.createElement(M,null),r.a.createElement(R,null))};var V=function(){return r.a.createElement("div",null,"Junior")};var ee=function(){return r.a.createElement("div",null,"Junior+")},ae="/pre-junior",te="/junior",ne="/junior_plus";var re=function(){return r.a.createElement("div",null,r.a.createElement(d.d,null,r.a.createElement(d.b,{path:"/",element:r.a.createElement(d.a,{to:ae})}),r.a.createElement(d.b,{path:ae,element:r.a.createElement($,null)}),r.a.createElement(d.b,{path:te,element:r.a.createElement(V,null)}),r.a.createElement(d.b,{path:ne,element:r.a.createElement(ee,null)}),r.a.createElement(d.b,{path:"/*",element:r.a.createElement(p,null)})))};var le=function(){return r.a.createElement("div",null,r.a.createElement(u.a,null,r.a.createElement(E,null),r.a.createElement(re,null)))};var ce=function(){return r.a.createElement("div",{className:s.a.App},r.a.createElement("div",null,"react homeworks:"),r.a.createElement(le,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(ce,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[20,1,2]]]);
//# sourceMappingURL=main.958eb349.chunk.js.map