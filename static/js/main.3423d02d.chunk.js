(this.webpackJsonphw=this.webpackJsonphw||[]).push([[0],[,,,,,,function(e,a,t){e.exports={nav:"Header_nav__3wmpN",menu:"Header_menu__gUlil",loader:"Header_loader__3pgYM",burger:"Header_burger__1-xbo",link:"Header_link__tGwtm"}},,,,function(e,a,t){e.exports={message:"Message_message__2oU0q",block:"Message_block__27_KC",name:"Message_name__Moyus",time:"Message_time__3tOzS"}},function(e,a,t){e.exports={superInput:"SuperInputText_superInput__2y_UX",errorInput:"SuperInputText_errorInput__2fAkQ",error:"SuperInputText_error__2ClcW"}},function(e,a,t){e.exports={someClass:"Affairs_someClass__1ri7z",high:"Affairs_high__1KvIA",middle:"Affairs_middle__1oEAJ",low:"Affairs_low__srE7l"}},function(e,a,t){e.exports={someClass:"Greeting_someClass__3rpMr",error:"Greeting_error__rJrsw"}},function(e,a,t){e.exports={blue:"HW4_blue__1ipYq",column:"HW4_column__1JFKm",testSpanError:"HW4_testSpanError__1j9y8"}},function(e,a,t){e.exports={default:"SuperButton_default__222NT",red:"SuperButton_red__2TLar"}},function(e,a,t){e.exports={checkbox:"SuperCheckbox_checkbox__2DA1T",spanClassName:"SuperCheckbox_spanClassName__3G09K"}},,,function(e,a,t){e.exports={App:"App_App__BMeZ0"}},function(e,a,t){e.exports=t(26)},,,,,function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(18),c=t.n(l),o=(t(25),t(19)),u=t.n(o),i=t(5),m=t(6),s=t.n(m);var E=function(){return r.a.createElement("div",{className:s.a.nav},r.a.createElement("div",{className:s.a.burger},"\u041c\u0435\u043d\u044e"),r.a.createElement("div",{className:s.a.menu},r.a.createElement(i.b,{to:"/pre-junior",className:s.a.link},"PreJunior"),r.a.createElement(i.b,{to:"/junior",className:s.a.link},"Junior"),r.a.createElement(i.b,{to:"/junior_plus",className:s.a.link},"Junior+")))},d=t(1);var p=function(){return r.a.createElement("div",null,r.a.createElement("div",null,"404"),r.a.createElement("div",null,"Page not found!"),r.a.createElement("div",null,"\u2014\u0e05/\u1420.\u032b .\u141f\\\u0e05\u2014"))},f=t(10),h=t.n(f);function v(e){return r.a.createElement("div",{className:h.a.message},r.a.createElement("img",{src:e.avatar,alt:"avatar"}),r.a.createElement("div",{className:h.a.block},r.a.createElement("span",{className:h.a.name},e.name),r.a.createElement("p",null,e.message),r.a.createElement("span",{className:h.a.time},e.time)))}var _="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",b="Some Name",g="Some text \u043c\u043d\u043e\u0433\u043e \u043c\u043d\u043e\u0433\u043e \u0441\u0430\u043c\u043e \u0442\u0435\u043a\u0441\u0442\u0430, \u043e\u0447\u0435\u043d\u044c \u043c\u043d\u043e\u0433\u043e \u0440\u0430\u0437\u043d\u043e\u0433\u043e \u0442\u0435\u043a\u0441\u0442\u0430 \u0430\u0433\u0430 \u043e\u0433\u043e\u0438\u0442\u044c\u0438",C="22:00";var k=function(){return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 1",r.a.createElement(v,{avatar:_,name:b,message:g,time:C}),r.a.createElement(v,{avatar:_,name:b,message:"some text",time:C}))},O=t(2),j=t(12),N=t.n(j);var y=function(e){return r.a.createElement("div",{className:N.a.someClass},r.a.createElement("span",null,e.affair._id,"."),r.a.createElement("span",{className:N.a[e.affair.priority]}," ",e.affair.name),r.a.createElement("button",{onClick:function(){e.deleteAffairCallback(e.affair._id)}},"X"))};var S=function(e){var a=e.data.map((function(a){return r.a.createElement(y,{key:a._id,affair:a,deleteAffairCallback:e.deleteAffairCallback})}));return r.a.createElement("div",null,a,r.a.createElement("button",{onClick:function(){e.setFilter("all")}},"All"),r.a.createElement("button",{onClick:function(){e.setFilter("high")}},"High"),r.a.createElement("button",{onClick:function(){e.setFilter("middle")}},"Middle"),r.a.createElement("button",{onClick:function(){e.setFilter("low")}},"Low"))},w=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var x=function(){var e=Object(n.useState)(w),a=Object(O.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)("all"),o=Object(O.a)(c,2),u=o[0],i=o[1],m=function(e,a){return"all"===a?e:e.filter((function(e){return e.priority===a}))}(t,u);return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 2",r.a.createElement(S,{data:m,setFilter:i,deleteAffairCallback:function(e){return l(function(e,a){return e.filter((function(e){return e._id!==a}))}(t,e))}}),r.a.createElement("hr",null),r.a.createElement("hr",null))},A=t(9),T=t(13),I=t.n(T),F=function(e){var a=e.name,t=e.setNameCallback,n=e.addUser,l=e.error,c=e.totalUsers,o=l?I.a.error:"";return r.a.createElement("div",{className:I.a.someClass},r.a.createElement("input",{value:a,onChange:function(e){return t(e)},className:o}),r.a.createElement("span",null,l),r.a.createElement("button",{onClick:n},"add"),r.a.createElement("span",null,c))},J=function(e){var a=e.users,t=e.addUserCallback,l=Object(n.useState)(""),c=Object(O.a)(l,2),o=c[0],u=c[1],i=Object(n.useState)(""),m=Object(O.a)(i,2),s=m[0],E=m[1],d=a.length;return r.a.createElement(F,{name:o,setNameCallback:function(e){u(e.currentTarget.value)},addUser:function(){o?(t(o),E(""),alert("Hello ".concat(o," !")),u("")):E("\u042d\u0442\u043e \u043f\u043e\u043b\u0435 \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043f\u0443\u0441\u0442\u044b\u043c. \u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f.")},error:s,totalUsers:d})};var M=function(){var e=Object(n.useState)([]),a=Object(O.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 3",r.a.createElement(J,{users:t,addUserCallback:function(e){l([{_id:t.length+1,name:e}].concat(Object(A.a)(t)))}}),r.a.createElement("hr",null),r.a.createElement("hr",null))},H=t(4),B=t(11),P=t.n(B),U=["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"],W=function(e){e.type;var a=e.onChange,t=e.onChangeText,n=e.onKeyPress,l=e.onEnter,c=e.error,o=e.className,u=e.spanClassName,i=Object(H.a)(e,U),m="".concat(P.a.error," ").concat(u||""),s="".concat(o," ").concat(c?P.a.errorInput:P.a.superInput);return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",Object.assign({type:"text",onChange:function(e){a&&a(e),t&&t(e.currentTarget.value)},onKeyPress:function(e){n&&n(e),l&&"Enter"===e.key&&l()},className:s},i)),c&&r.a.createElement("span",{className:m},c))},D=t(14),K=t.n(D),G=t(15),L=t.n(G),q=["red","className"],z=function(e){var a=e.red,t=e.className,n=Object(H.a)(e,q),l="".concat(a?L.a.red:L.a.default," ").concat(t);return r.a.createElement("button",Object.assign({className:l},n))},X=t(16),Y=t.n(X),Z=["type","onChange","onChangeChecked","className","spanClassName","children"],Q=function(e){e.type;var a=e.onChange,t=e.onChangeChecked,n=e.className,l=(e.spanClassName,e.children),c=Object(H.a)(e,Z),o="".concat(Y.a.checkbox," ").concat(n||"");return r.a.createElement("label",null,r.a.createElement("input",Object.assign({type:"checkbox",onChange:function(e){t&&t(e.currentTarget.checked),a&&a(e)},className:o},c)),l&&r.a.createElement("span",{className:Y.a.spanClassName},l))};var R=function(){var e=Object(n.useState)(""),a=Object(O.a)(e,2),t=a[0],l=a[1],c=t?"":"error",o=function(){c?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(t)},u=Object(n.useState)(!1),i=Object(O.a)(u,2),m=i[0],s=i[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 4",r.a.createElement("div",{className:K.a.column},r.a.createElement(W,{value:t,onChangeText:l,onEnter:o,error:c}),r.a.createElement(W,{className:K.a.blue}),r.a.createElement(z,null,"default"),r.a.createElement(z,{red:!0,onClick:o},"delete "),r.a.createElement(z,{disabled:!0},"disabled"),r.a.createElement(Q,{checked:m,onChangeChecked:s},"some text "),r.a.createElement(Q,{checked:m,onChange:function(e){return s(e.currentTarget.checked)}})),r.a.createElement("hr",null),r.a.createElement("hr",null))},$=["autoFocus","onBlur","onEnter","spanProps"],V=["children","onDoubleClick","className"],ee=function(e){e.autoFocus;var a=e.onBlur,t=e.onEnter,l=e.spanProps,c=Object(H.a)(e,$),o=Object(n.useState)(!1),u=Object(O.a)(o,2),i=u[0],m=u[1],s=l||{},E=s.children,d=s.onDoubleClick,p=s.className,f=Object(H.a)(s,V),h="\u0441\u0434\u0435\u043b\u0430\u0442\u044c \u043a\u0440\u0430\u0441\u0438\u0432\u044b\u0439 \u0441\u0442\u0438\u043b\u044c \u0434\u043b\u044f \u0441\u043f\u0430\u043d\u0430".concat(" ",p);return r.a.createElement(r.a.Fragment,null,i?r.a.createElement(W,Object.assign({autoFocus:!0,onBlur:function(e){m(!1),a&&a(e)},onEnter:function(){m(!1),t&&t()}},c)):r.a.createElement("span",Object.assign({onDoubleClick:function(e){m(!0),d&&d(e)},className:h},f),E||c.value))};function ae(e,a){var t=JSON.stringify(a);localStorage.setItem(e,t)}function te(e,a){var t=a,n=localStorage.getItem(e);return null!==n&&(t=JSON.parse(n)),t}ae("test",{x:"A",y:1});te("test",{x:"",y:0});var ne=function(){var e=Object(n.useState)(""),a=Object(O.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 6",r.a.createElement("div",null,r.a.createElement(ee,{value:t,onChangeText:l,spanProps:{children:t?void 0:"enter text..."},error:t?"":"error"})),r.a.createElement(z,{onClick:function(){ae("editable-span-value",t)}},"save"),r.a.createElement(z,{onClick:function(){l(te("editable-span-value",t))}},"restore"),r.a.createElement("hr",null),r.a.createElement("hr",null))};var re=function(){return r.a.createElement("div",null,r.a.createElement(k,null),r.a.createElement(x,null),r.a.createElement(M,null),r.a.createElement(R,null),r.a.createElement(ne,null))},le=["options","onChange","onChangeOption"],ce=function(e){var a=e.options,t=(e.onChange,e.onChangeOption),n=Object(H.a)(e,le),l=[null===a||void 0===a?void 0:a.map((function(e,a){return r.a.createElement("option",{key:a,value:e},e)}))];return r.a.createElement("select",Object.assign({onChange:function(e){t&&t(e.currentTarget.value)}},n),l)},oe=["type","name","options","value","onChange","onChangeOption"],ue=function(e){e.type;var a=e.name,t=e.options,n=e.value,l=(e.onChange,e.onChangeOption),c=(Object(H.a)(e,oe),function(e){l&&l(e.currentTarget.value)}),o=t?t.map((function(e,t){return r.a.createElement("label",{key:a+"-"+t},r.a.createElement("input",{type:"radio",value:e,name:a,onChange:c,checked:n===e}),e)})):[];return r.a.createElement(r.a.Fragment,null,o)},ie=["x","y","z"];var me=function(){var e=Object(n.useState)(ie[1]),a=Object(O.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 7",r.a.createElement("div",null,r.a.createElement(ce,{options:ie,value:t,onChangeOption:l})),r.a.createElement("div",null,r.a.createElement(ue,{name:"radio",options:ie,value:t,onChangeOption:l})),r.a.createElement("hr",null),r.a.createElement("hr",null))},se=function(e,a){switch(a.type){case"sort":return"up"===a.payload?Object(A.a)(e).sort((function(e,a){return e.name<a.name?-1:1})):Object(A.a)(e).sort((function(e,a){return e.name>a.name?-1:1}));case"check":return e.filter((function(e){return e.age>=a.payload}));default:return e}},Ee=[{_id:0,name:"\u041a\u043e\u0442",age:3},{_id:1,name:"\u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440",age:66},{_id:2,name:"\u041a\u043e\u043b\u044f",age:16},{_id:3,name:"\u0412\u0438\u043a\u0442\u043e\u0440",age:44},{_id:4,name:"\u0414\u043c\u0438\u0442\u0440\u0438\u0439",age:40},{_id:5,name:"\u0418\u0440\u0438\u043d\u0430",age:55}];var de=function(){var e=Object(n.useState)(Ee),a=Object(O.a)(e,2),t=a[0],l=a[1],c=t.map((function(e){return r.a.createElement("div",{key:e._id},e.name," - ",e.age)}));return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 8",c,r.a.createElement("div",null,r.a.createElement(z,{onClick:function(){return l(se(Ee,{type:"sort",payload:"up"}))}},"sort up")),r.a.createElement("div",null,r.a.createElement(z,{onClick:function(){return l(se(Ee,{type:"sort",payload:"down"}))}},"sort down")),r.a.createElement("div",null,r.a.createElement(z,{onClick:function(){return l(se(Ee,{type:"check",payload:18}))}},"check 18")),r.a.createElement("hr",null),r.a.createElement("hr",null))};var pe=function(){var e=Object(n.useState)(0),a=Object(O.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)(new Date),o=Object(O.a)(c,2),u=o[0],i=o[1],m=Object(n.useState)(!1),s=Object(O.a)(m,2),E=s[0],d=s[1],p=function(){clearInterval(t)},f=u.toLocaleTimeString(),h=u.toLocaleDateString();return r.a.createElement("div",null,r.a.createElement("div",{onMouseEnter:function(){d(!0)},onMouseLeave:function(){d(!1)}},f),E&&r.a.createElement("div",null,h),r.a.createElement(z,{onClick:function(){p();var e=window.setInterval((function(){i(new Date)}),1e3);l(e)}},"start"),r.a.createElement(z,{onClick:p},"stop"))};var fe=function(){return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 9",r.a.createElement(pe,null),r.a.createElement("hr",null),r.a.createElement("hr",null))};var he=function(){return r.a.createElement("div",null,r.a.createElement(me,null),r.a.createElement(de,null),r.a.createElement(fe,null))};var ve=function(){return r.a.createElement("div",null,"Junior+")},_e="/pre-junior",be="/junior",ge="/junior_plus";var Ce=function(){return r.a.createElement("div",null,r.a.createElement(d.d,null,r.a.createElement(d.b,{path:"/",element:r.a.createElement(d.a,{to:_e})}),r.a.createElement(d.b,{path:_e,element:r.a.createElement(re,null)}),r.a.createElement(d.b,{path:be,element:r.a.createElement(he,null)}),r.a.createElement(d.b,{path:ge,element:r.a.createElement(ve,null)}),r.a.createElement(d.b,{path:"/*",element:r.a.createElement(p,null)})))};var ke=function(){return r.a.createElement("div",null,r.a.createElement(i.a,null,r.a.createElement(E,null),r.a.createElement(Ce,null)))};var Oe=function(){return r.a.createElement("div",{className:u.a.App},r.a.createElement("div",null,"react homeworks:"),r.a.createElement(ke,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Oe,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[20,1,2]]]);
//# sourceMappingURL=main.3423d02d.chunk.js.map