(this.webpackJsonphw=this.webpackJsonphw||[]).push([[0],[,,,,,,,,,function(e,a,t){e.exports={nav:"Header_nav__3wmpN",menu:"Header_menu__gUlil",loader:"Header_loader__3pgYM",burger:"Header_burger__1-xbo",link:"Header_link__tGwtm"}},,function(e,a,t){e.exports={range:"SuperRange_range__-6C_l",wrapper:"SuperRange_wrapper__1cjnO",container:"SuperRange_container__3e_Of"}},,function(e,a,t){e.exports={message:"Message_message__2oU0q",block:"Message_block__27_KC",name:"Message_name__Moyus",time:"Message_time__3tOzS"}},,function(e,a,t){e.exports={superInput:"SuperInputText_superInput__2y_UX",errorInput:"SuperInputText_errorInput__2fAkQ",error:"SuperInputText_error__2ClcW"}},,,function(e,a,t){e.exports={someClass:"Affairs_someClass__1ri7z",high:"Affairs_high__1KvIA",middle:"Affairs_middle__1oEAJ",low:"Affairs_low__srE7l"}},function(e,a,t){e.exports={someClass:"Greeting_someClass__3rpMr",error:"Greeting_error__rJrsw"}},function(e,a,t){e.exports={blue:"HW4_blue__1ipYq",column:"HW4_column__1JFKm",testSpanError:"HW4_testSpanError__1j9y8"}},function(e,a,t){e.exports={default:"SuperButton_default__222NT",red:"SuperButton_red__2TLar"}},function(e,a,t){e.exports={checkbox:"SuperCheckbox_checkbox__2DA1T",spanClassName:"SuperCheckbox_spanClassName__3G09K"}},function(e,a,t){e.exports={dark:"HW12_dark__11rMt","dark-text":"HW12_dark-text__1GM1i",red:"HW12_red__1iiuz","red-text":"HW12_red-text__2fWjF",some:"HW12_some__1cc9B","some-text":"HW12_some-text__ukDdR"}},,,,,,function(e,a,t){e.exports={App:"App_App__BMeZ0"}},function(e,a,t){e.exports=t.p+"static/media/loading.465f5518.gif"},function(e,a,t){e.exports=t.p+"static/media/loading8.e89a9bfe.gif"},function(e,a,t){e.exports=t(43)},,,,,,,,,,function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(14),c=t.n(l),o=t(6),u=(t(42),t(29)),i=t.n(u),m=t(8),s=t(9),E=t.n(s);var d=function(){return r.a.createElement("div",{className:E.a.nav},r.a.createElement("div",{className:E.a.burger},"\u041c\u0435\u043d\u044e"),r.a.createElement("div",{className:E.a.menu},r.a.createElement(m.b,{to:"/pre-junior",className:E.a.link},"PreJunior"),r.a.createElement(m.b,{to:"/junior",className:E.a.link},"Junior"),r.a.createElement(m.b,{to:"/junior_plus",className:E.a.link},"Junior+")))},p=t(1);var f=function(){return r.a.createElement("div",null,r.a.createElement("div",null,"404"),r.a.createElement("div",null,"Page not found!"),r.a.createElement("div",null,"\u2014\u0e05/\u1420.\u032b .\u141f\\\u0e05\u2014"))},h=t(13),g=t.n(h);function v(e){return r.a.createElement("div",{className:g.a.message},r.a.createElement("img",{src:e.avatar,alt:"avatar"}),r.a.createElement("div",{className:g.a.block},r.a.createElement("span",{className:g.a.name},e.name),r.a.createElement("p",null,e.message),r.a.createElement("span",{className:g.a.time},e.time)))}var _="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",b="Some Name",C="Some text \u043c\u043d\u043e\u0433\u043e \u043c\u043d\u043e\u0433\u043e \u0441\u0430\u043c\u043e \u0442\u0435\u043a\u0441\u0442\u0430, \u043e\u0447\u0435\u043d\u044c \u043c\u043d\u043e\u0433\u043e \u0440\u0430\u0437\u043d\u043e\u0433\u043e \u0442\u0435\u043a\u0441\u0442\u0430 \u0430\u0433\u0430 \u043e\u0433\u043e\u0438\u0442\u044c\u0438",k="22:00";var O=function(){return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 1",r.a.createElement(v,{avatar:_,name:b,message:C,time:k}),r.a.createElement(v,{avatar:_,name:b,message:"some text",time:k}))},j=t(2),N=t(18),y=t.n(N);var x=function(e){return r.a.createElement("div",{className:y.a.someClass},r.a.createElement("span",null,e.affair._id,"."),r.a.createElement("span",{className:y.a[e.affair.priority]}," ",e.affair.name),r.a.createElement("button",{onClick:function(){e.deleteAffairCallback(e.affair._id)}},"X"))};var w=function(e){var a=e.data.map((function(a){return r.a.createElement(x,{key:a._id,affair:a,deleteAffairCallback:e.deleteAffairCallback})}));return r.a.createElement("div",null,a,r.a.createElement("button",{onClick:function(){e.setFilter("all")}},"All"),r.a.createElement("button",{onClick:function(){e.setFilter("high")}},"High"),r.a.createElement("button",{onClick:function(){e.setFilter("middle")}},"Middle"),r.a.createElement("button",{onClick:function(){e.setFilter("low")}},"Low"))},S=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var A=function(){var e=Object(n.useState)(S),a=Object(j.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)("all"),o=Object(j.a)(c,2),u=o[0],i=o[1],m=function(e,a){return"all"===a?e:e.filter((function(e){return e.priority===a}))}(t,u);return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 2",r.a.createElement(w,{data:m,setFilter:i,deleteAffairCallback:function(e){return l(function(e,a){return e.filter((function(e){return e._id!==a}))}(t,e))}}),r.a.createElement("hr",null),r.a.createElement("hr",null))},T=t(7),H=t(19),I=t.n(H),M=function(e){var a=e.name,t=e.setNameCallback,n=e.addUser,l=e.error,c=e.totalUsers,o=l?I.a.error:"";return r.a.createElement("div",{className:I.a.someClass},r.a.createElement("input",{value:a,onChange:function(e){return t(e)},className:o}),r.a.createElement("span",null,l),r.a.createElement("button",{onClick:n},"add"),r.a.createElement("span",null,c))},F=function(e){var a=e.users,t=e.addUserCallback,l=Object(n.useState)(""),c=Object(j.a)(l,2),o=c[0],u=c[1],i=Object(n.useState)(""),m=Object(j.a)(i,2),s=m[0],E=m[1],d=a.length;return r.a.createElement(M,{name:o,setNameCallback:function(e){u(e.currentTarget.value)},addUser:function(){o?(t(o),E(""),alert("Hello ".concat(o," !")),u("")):E("\u042d\u0442\u043e \u043f\u043e\u043b\u0435 \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043f\u0443\u0441\u0442\u044b\u043c. \u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f.")},error:s,totalUsers:d})};var W=function(){var e=Object(n.useState)([]),a=Object(j.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 3",r.a.createElement(F,{users:t,addUserCallback:function(e){l([{_id:t.length+1,name:e}].concat(Object(T.a)(t)))}}),r.a.createElement("hr",null),r.a.createElement("hr",null))},G=t(4),J=t(15),L=t.n(J),D=["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"],B=function(e){e.type;var a=e.onChange,t=e.onChangeText,n=e.onKeyPress,l=e.onEnter,c=e.error,o=e.className,u=e.spanClassName,i=Object(G.a)(e,D),m="".concat(L.a.error," ").concat(u||""),s="".concat(o," ").concat(c?L.a.errorInput:L.a.superInput);return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",Object.assign({type:"text",onChange:function(e){a&&a(e),t&&t(e.currentTarget.value)},onKeyPress:function(e){n&&n(e),l&&"Enter"===e.key&&l()},className:s},i)),c&&r.a.createElement("span",{className:m},c))},R=t(20),P=t.n(R),U=t(21),K=t.n(U),z=["red","className"],q=function(e){var a=e.red,t=e.className,n=Object(G.a)(e,z),l="".concat(a?K.a.red:K.a.default," ").concat(t);return r.a.createElement("button",Object.assign({className:l},n))},X=t(22),Y=t.n(X),Z=["type","onChange","onChangeChecked","className","spanClassName","children"],Q=function(e){e.type;var a=e.onChange,t=e.onChangeChecked,n=e.className,l=(e.spanClassName,e.children),c=Object(G.a)(e,Z),o="".concat(Y.a.checkbox," ").concat(n||"");return r.a.createElement("label",null,r.a.createElement("input",Object.assign({type:"checkbox",onChange:function(e){t&&t(e.currentTarget.checked),a&&a(e)},className:o},c)),l&&r.a.createElement("span",{className:Y.a.spanClassName},l))};var $=function(){var e=Object(n.useState)(""),a=Object(j.a)(e,2),t=a[0],l=a[1],c=t?"":"error",o=function(){c?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(t)},u=Object(n.useState)(!1),i=Object(j.a)(u,2),m=i[0],s=i[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 4",r.a.createElement("div",{className:P.a.column},r.a.createElement(B,{value:t,onChangeText:l,onEnter:o,error:c}),r.a.createElement(B,{className:P.a.blue}),r.a.createElement(q,null,"default"),r.a.createElement(q,{red:!0,onClick:o},"delete "),r.a.createElement(q,{disabled:!0},"disabled"),r.a.createElement(Q,{checked:m,onChangeChecked:s},"some text "),r.a.createElement(Q,{checked:m,onChange:function(e){return s(e.currentTarget.checked)}})),r.a.createElement("hr",null),r.a.createElement("hr",null))},V=["autoFocus","onBlur","onEnter","spanProps"],ee=["children","onDoubleClick","className"],ae=function(e){e.autoFocus;var a=e.onBlur,t=e.onEnter,l=e.spanProps,c=Object(G.a)(e,V),o=Object(n.useState)(!1),u=Object(j.a)(o,2),i=u[0],m=u[1],s=l||{},E=s.children,d=s.onDoubleClick,p=s.className,f=Object(G.a)(s,ee),h="\u0441\u0434\u0435\u043b\u0430\u0442\u044c \u043a\u0440\u0430\u0441\u0438\u0432\u044b\u0439 \u0441\u0442\u0438\u043b\u044c \u0434\u043b\u044f \u0441\u043f\u0430\u043d\u0430".concat(" ",p);return r.a.createElement(r.a.Fragment,null,i?r.a.createElement(B,Object.assign({autoFocus:!0,onBlur:function(e){m(!1),a&&a(e)},onEnter:function(){m(!1),t&&t()}},c)):r.a.createElement("span",Object.assign({onDoubleClick:function(e){m(!0),d&&d(e)},className:h},f),E||c.value))};function te(e,a){var t=JSON.stringify(a);localStorage.setItem(e,t)}function ne(e,a){var t=a,n=localStorage.getItem(e);return null!==n&&(t=JSON.parse(n)),t}te("test",{x:"A",y:1});ne("test",{x:"",y:0});var re=function(){var e=Object(n.useState)(""),a=Object(j.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 6",r.a.createElement("div",null,r.a.createElement(ae,{value:t,onChangeText:l,spanProps:{children:t?void 0:"enter text..."},error:t?"":"error"})),r.a.createElement(q,{onClick:function(){te("editable-span-value",t)}},"save"),r.a.createElement(q,{onClick:function(){l(ne("editable-span-value",t))}},"restore"),r.a.createElement("hr",null),r.a.createElement("hr",null))};var le=function(){return r.a.createElement("div",null,r.a.createElement(O,null),r.a.createElement(A,null),r.a.createElement(W,null),r.a.createElement($,null),r.a.createElement(re,null))},ce=["options","onChange","onChangeOption"],oe=function(e){var a=e.options,t=(e.onChange,e.onChangeOption),n=Object(G.a)(e,ce),l=[null===a||void 0===a?void 0:a.map((function(e,a){return r.a.createElement("option",{key:a,value:e},e)}))];return r.a.createElement("select",Object.assign({onChange:function(e){t&&t(e.currentTarget.value)}},n),l)},ue=["type","name","options","value","onChange","onChangeOption"],ie=function(e){e.type;var a=e.name,t=e.options,n=e.value,l=(e.onChange,e.onChangeOption),c=(Object(G.a)(e,ue),function(e){l&&l(e.currentTarget.value)}),o=t?t.map((function(e,t){return r.a.createElement("label",{key:a+"-"+t},r.a.createElement("input",{type:"radio",value:e,name:a,onChange:c,checked:n===e}),e)})):[];return r.a.createElement(r.a.Fragment,null,o)},me=["x","y","z"];var se=function(){var e=Object(n.useState)(me[1]),a=Object(j.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 7",r.a.createElement("div",null,r.a.createElement(oe,{options:me,value:t,onChangeOption:l})),r.a.createElement("div",null,r.a.createElement(ie,{name:"radio",options:me,value:t,onChangeOption:l})),r.a.createElement("hr",null),r.a.createElement("hr",null))},Ee=function(e,a){switch(a.type){case"sort":return"up"===a.payload?Object(T.a)(e).sort((function(e,a){return e.name<a.name?-1:1})):Object(T.a)(e).sort((function(e,a){return e.name>a.name?-1:1}));case"check":return e.filter((function(e){return e.age>=a.payload}));default:return e}},de=[{_id:0,name:"\u041a\u043e\u0442",age:3},{_id:1,name:"\u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440",age:66},{_id:2,name:"\u041a\u043e\u043b\u044f",age:16},{_id:3,name:"\u0412\u0438\u043a\u0442\u043e\u0440",age:44},{_id:4,name:"\u0414\u043c\u0438\u0442\u0440\u0438\u0439",age:40},{_id:5,name:"\u0418\u0440\u0438\u043d\u0430",age:55}];var pe=function(){var e=Object(n.useState)(de),a=Object(j.a)(e,2),t=a[0],l=a[1],c=t.map((function(e){return r.a.createElement("div",{key:e._id},e.name," - ",e.age)}));return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 8",c,r.a.createElement("div",null,r.a.createElement(q,{onClick:function(){return l(Ee(de,{type:"sort",payload:"up"}))}},"sort up")),r.a.createElement("div",null,r.a.createElement(q,{onClick:function(){return l(Ee(de,{type:"sort",payload:"down"}))}},"sort down")),r.a.createElement("div",null,r.a.createElement(q,{onClick:function(){return l(Ee(de,{type:"check",payload:18}))}},"check 18")),r.a.createElement("hr",null),r.a.createElement("hr",null))};var fe=function(){var e=Object(n.useState)(0),a=Object(j.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)(new Date),o=Object(j.a)(c,2),u=o[0],i=o[1],m=Object(n.useState)(!1),s=Object(j.a)(m,2),E=s[0],d=s[1],p=function(){clearInterval(t)},f=u.toLocaleTimeString(),h=u.toLocaleDateString();return r.a.createElement("div",null,r.a.createElement("div",{onMouseEnter:function(){d(!0)},onMouseLeave:function(){d(!1)}},f),E&&r.a.createElement("div",null,h),r.a.createElement(q,{onClick:function(){p();var e=window.setInterval((function(){i(new Date)}),1e3);l(e)}},"start"),r.a.createElement(q,{onClick:p},"stop"))};var he=function(){return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 9",r.a.createElement(fe,null),r.a.createElement("hr",null),r.a.createElement("hr",null))},ge=t(25),ve={isLoading:!1},_e=t(30),be=t.n(_e),Ce=t(31),ke=t.n(Ce);var Oe=function(){var e=Object(o.c)((function(e){return e.loading.isLoading})),a=Object(o.b)();return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 10",e?r.a.createElement("div",null,r.a.createElement("img",{src:be.a,alt:"loading...",style:{height:"100px"}}),r.a.createElement("img",{src:ke.a,alt:"loading...",style:{height:"100px"}})):r.a.createElement("div",null,r.a.createElement(q,{onClick:function(){a({type:"CHANGE_IS_LOADING"}),setTimeout((function(){return a({type:"CHANGE_IS_LOADING"})}),5e3),console.log("loading...")}},"set loading...")),r.a.createElement("hr",null),r.a.createElement("hr",null))},je=t(11),Ne=t.n(je),ye=["type","onChange","onChangeRange","className"],xe=function(e){e.type;var a=e.onChange,t=e.onChangeRange,n=e.className,l=Object(G.a)(e,ye),c="".concat(Ne.a.range," ").concat(n||"");return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",Object.assign({name:"min",type:"range",onChange:function(e){a&&a(e),t&&t(e.currentTarget.name,+e.currentTarget.value)},className:c},l)))},we=function(e){var a=e.onChangeRange,t=e.min,n=e.max,l=function(e){e.currentTarget&&a(e.currentTarget.name,+e.currentTarget.value)};return r.a.createElement("span",{className:Ne.a.container},r.a.createElement("input",{name:"min",type:"range",value:t,onChange:l}),r.a.createElement("input",{name:"max",type:"range",value:n,onChange:l}))};var Se=function(){var e=Object(n.useState)(0),a=Object(j.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)(100),o=Object(j.a)(c,2),u=o[0],i=o[1],m=function(e,a){"min"===e&&a<=u?l(a):"max"===e&&a>=t&&i(a)};return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 11",r.a.createElement("div",null,r.a.createElement("span",null,t),r.a.createElement(xe,{value:t,onChangeRange:m})),r.a.createElement("div",{className:Ne.a.wrapper},r.a.createElement("span",null,t),r.a.createElement(we,{min:t,max:u,onChangeRange:m}),r.a.createElement("span",null,u)),r.a.createElement("hr",null),r.a.createElement("hr",null))},Ae=t(23),Te=t.n(Ae),He=["dark","red","some"];var Ie=function(){var e=Object(o.c)((function(e){return e.theme})),a=Object(o.b)();return r.a.createElement("div",{className:Te.a[e]},r.a.createElement("hr",null),r.a.createElement("span",{className:Te.a[e+"-text"]},"homeworks 12"),r.a.createElement(oe,{options:He,value:e,onChangeOption:function(e){a(function(e){return{type:"CHANGE_THEME",theme:e}}(e))}}),r.a.createElement("hr",null))};var Me=function(){return r.a.createElement("div",null,r.a.createElement(se,null),r.a.createElement(pe,null),r.a.createElement(he,null),r.a.createElement(Oe,null),r.a.createElement(Se,null),r.a.createElement(Ie,null))};var Fe=function(){return r.a.createElement("div",null,"Junior+")},We="/pre-junior",Ge="/junior",Je="/junior_plus";var Le=function(){return r.a.createElement("div",null,r.a.createElement(p.d,null,r.a.createElement(p.b,{path:"/",element:r.a.createElement(p.a,{to:We})}),r.a.createElement(p.b,{path:We,element:r.a.createElement(le,null)}),r.a.createElement(p.b,{path:Ge,element:r.a.createElement(Me,null)}),r.a.createElement(p.b,{path:Je,element:r.a.createElement(Fe,null)}),r.a.createElement(p.b,{path:"/*",element:r.a.createElement(f,null)})))};var De=function(){return r.a.createElement("div",null,r.a.createElement(m.a,null,r.a.createElement(d,null),r.a.createElement(Le,null)))};var Be=function(){return r.a.createElement("div",{className:i.a.App},r.a.createElement("div",null,"react homeworks:"),r.a.createElement(De,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Re=t(24),Pe=Object(Re.a)({loading:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ve,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"CHANGE_IS_LOADING":return Object(ge.a)(Object(ge.a)({},e),{},{isLoading:!e.isLoading});default:return e}},theme:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"dark",a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"CHANGE_THEME":return a.theme;default:return e}}}),Ue=Object(Re.b)(Pe),Ke=Ue;window.store=Ue,c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(o.a,{store:Ke},r.a.createElement(Be,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[32,1,2]]]);
//# sourceMappingURL=main.f02194b3.chunk.js.map