(this["webpackJsonpwebsite-stories"]=this["webpackJsonpwebsite-stories"]||[]).push([[23],{441:function(e,t,n){},442:function(e,t,n){},444:function(e,t,n){},445:function(e,t,n){},541:function(e,t,n){"use strict";n.r(t);var a=n(14),s=n(0),c=n(4),i=n.n(c),r=n(10),o=n(277),l=n(530),u=n(531),b=n(525),j=n(538),m=n.p+"static/media/MaskGroup.40df2b6f.svg",p=n.p+"static/media/Vector.d2b5b58d.svg",h=n(264);function d(){return h.c().min(8,"Must be at least 8 characters long").max(128,"Maximum length is 128 characters").matches(/^[ -~]+$/,"Must be only latin letters, numbers, special\xa0characters").matches(/^[^ ].+[^ ]$/,"There should be no spaces at the beginning and at the end").required("Required")}var x=h.a({newPassword:d(),repeatPassword:h.c().oneOf([h.b("newPassword"),null],"Passwords must match")}),O={newPassword:"",repeatPassword:""},g=[{name:"At least 8 characters",validation:/^.{8,}$/}],f=h.a({phoneNumber:h.c().matches(/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,"Phone number is not valid").required("Required"),newPassword:d()}),N=n(1),w=function(e){var t=e.type,n=e.onClickFunction,a=e.className,s=e.text;return Object(N.jsx)("button",{type:t,className:a,onClick:n,children:Object(N.jsx)("span",{children:s})})},v=function(e){var t=e.firstText,n=e.secondText,a=e.onClickFunction;return Object(N.jsxs)(b.a,{className:"main-page-text",children:[t,Object(N.jsx)("span",{className:"main-page-underline-text",onClick:a,children:n})]})},S=n(67),k=n(55),y=(n(441),function(e){var t=e.btnTheme,n=e.changeForm,c=Object(s.useState)(""),j=Object(a.a)(c,2),m=j[0],h=j[1],d=Object(s.useState)(""),f=Object(a.a)(d,2),y=f[0],P=f[1],F=Object(s.useState)(""),C=Object(a.a)(F,2),I=(C[0],C[1]),R=Object(k.a)((function(e){return e.newFile})).file,A=function(){var e=Object(r.a)(i.a.mark((function e(t){var n,a,s,c,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,n=sessionStorage.getItem("newPhoneNumber"),a=t.newPassword,s=sessionStorage.getItem("tgID"),c="USER",!(n&&a&&s&&R)){e.next=14;break}return(r=new FormData).append("telephone_number",n),r.append("password",a),r.append("telegram_user_id",s),r.append("role",c),r.append("img",R),e.next=14,Object(S.f)(r).then((function(){alert("Registration completed successfully. Please wait for data verification"),h("signin")}));case 14:e.next=19;break;case 16:e.prev=16,e.t0=e.catch(0),alert(e.t0);case 19:case"end":return e.stop()}}),e,null,[[0,16]])})));return function(t){return e.apply(this,arguments)}}();return"signin"===m?Object(N.jsx)(B,{btnTheme:t,changeForm:n}):"attachPhoto"===y?Object(N.jsx)(T,{btnTheme:t,changeForm:n}):Object(N.jsx)(l.a,{className:"main-grid",children:Object(N.jsx)(u.a,{className:"main-page-paperStyle",children:Object(N.jsxs)(l.a,{className:"signin-textContainer",children:[Object(N.jsx)(b.a,{className:"backBtn",children:Object(N.jsx)("i",{className:"fas fa-arrow-left",onClick:function(){return P("attachPhoto")}})}),Object(N.jsx)("h1",{className:"auth-bold-white-text",children:"Step 3"}),Object(N.jsx)(b.a,{className:"signin-whiteText",variant:"caption",gutterBottom:!0,children:"Enter your password"}),Object(N.jsx)(o.d,{initialValues:O,validationSchema:x,validateOnMount:!0,onSubmit:function(e,t){var n=t.setSubmitting;A(e),n(!1)},children:function(e){return Object(N.jsxs)(o.c,{children:[Object(N.jsxs)("div",{className:"signin-login",children:[Object(N.jsx)(o.b,{name:"newPassword",type:"password",label:"New Password",secureTextEntry:!0,formikProps:e,infoValidation:g,className:"input-base"}),Object(N.jsx)(o.a,{name:"newPassword",className:"error-red",component:"div"}),Object(N.jsx)("img",{src:p,id:"lock",alt:"Lock"})]}),Object(N.jsxs)("div",{className:"signin-login",children:[Object(N.jsx)(o.b,{name:"repeatPassword",label:"Repeat Password",type:"password",secureTextEntry:!0,formikProps:e,infoValidation:!0,className:"input-base"}),Object(N.jsx)(o.a,{name:"repeatPassword",className:"error-red",component:"div"}),Object(N.jsx)("img",{src:p,id:"lock",alt:"Lock"})]}),Object(N.jsx)(w,{type:"submit",onClickFunction:function(){return I("nextStep")},className:"sign-btnStyle-pressed",text:"Registration"})]})}}),Object(N.jsx)(v,{firstText:"Already have an account?  ",secondText:"Sign in",onClickFunction:function(){return h("signin")}})]})})})}),P=n(65),T=(n(442),function(e){var t=e.btnTheme,n=e.changeForm,c=Object(s.useState)(""),i=Object(a.a)(c,2),r=i[0],o=i[1],p=Object(s.useState)(""),h=Object(a.a)(p,2),d=h[0],x=h[1],O=Object(s.useState)(""),g=Object(a.a)(O,2),f=g[0],S=g[1],k=Object(s.useState)(),T=Object(a.a)(k,2),F=T[0],C=T[1],R=Object(P.a)().setNewFile,A=function(e){e.preventDefault(),F&&S("nextStep")};return"signin"===r?Object(N.jsx)(B,{btnTheme:t,changeForm:n}):"nextStep"===f?Object(N.jsx)(y,{btnTheme:t,changeForm:n}):"signup"===d?Object(N.jsx)(I,{btnTheme:t,changeForm:n}):Object(N.jsx)(l.a,{className:"main-grid",children:Object(N.jsx)(u.a,{className:"main-page-paperStyle",children:Object(N.jsxs)(l.a,{className:"attachPhoto-Container",children:[Object(N.jsx)(b.a,{className:"backBtn",children:Object(N.jsx)("i",{className:"fas fa-arrow-left",onClick:function(){return x("signup")}})}),Object(N.jsx)("h1",{className:"auth-bold-white-text",children:"Step 2"}),Object(N.jsx)(b.a,{className:"signin-whiteText",variant:"caption",gutterBottom:!0,children:"Attach a selfie with a document, as shown at the picture"}),Object(N.jsxs)("form",{onSubmit:function(e){return A(e)},children:[Object(N.jsxs)("div",{className:"step2-attach-photo",children:[Object(N.jsx)("input",{className:"fileInput",type:"file",onChange:function(e){return function(e){e.preventDefault();var t=e.nativeEvent.target.files[0],n=t.name.split(".").pop().toLowerCase();["jpg","jpeg","png","bmp","webp"].includes(n)?(R(t),C(t),console.log(t)):alert("Attach the photo file")}(e)}}),Object(N.jsx)(j.a,{fullWidth:!0,placeholder:F?F.name:"Attach the photo",className:"field"}),Object(N.jsx)("button",{type:"submit",onClick:function(e){return A(e)},className:"submitButton",children:Object(N.jsx)("i",{id:"rotate",className:"fas fa-paperclip text-color"})})]}),Object(N.jsx)("img",{src:m,alt:"man",className:"step2-mate"}),Object(N.jsx)(w,{type:"button",onClickFunction:function(){S(F?"nextStep":"")},className:"step2-btnStyle-attach-photo",text:"Next step"}),Object(N.jsx)(v,{firstText:"Already have an account?  ",secondText:"Sign in",onClickFunction:function(){return o("signin")}})]})]})})})}),F=h.a({phoneNumber:h.c().matches(/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,"Phone number is not valid").required("Required")}),C=(n(444),n.p+"static/media/Vector_tel.a3cd1643.svg"),I=function(e){var t=e.btnTheme,n=e.changeForm,c=Object(s.useState)(""),j=Object(a.a)(c,2),m=j[0],p=j[1],h=Object(s.useState)(""),d=Object(a.a)(h,2),x=d[0],O=d[1],g=function(){var e=Object(r.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(S.b)(t.phoneNumber);case 3:if(200!==(n=e.sent).status){e.next=9;break}return sessionStorage.setItem("newPhoneNumber",t.phoneNumber),O("nextStep"),p(""),e.abrupt("return");case 9:alert(n.message),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),alert(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t){return e.apply(this,arguments)}}();return"signin"===m?Object(N.jsx)(B,{btnTheme:t,changeForm:n}):"nextStep"===x?Object(N.jsx)(T,{btnTheme:t,changeForm:n}):Object(N.jsx)(l.a,{className:"main-grid",children:Object(N.jsx)(u.a,{className:"main-page-paperStyle",children:Object(N.jsxs)(l.a,{className:"signin-textContainer",children:[Object(N.jsx)("h1",{className:"auth-bold-white-text",children:"Let's get started!"}),Object(N.jsx)(b.a,{className:"signin-whiteText",variant:"caption",gutterBottom:!0,children:"Enter your phone"}),Object(N.jsx)(o.d,{initialValues:{phoneNumber:""},validationSchema:F,validateOnMount:!0,onSubmit:function(e,t){var n=t.setSubmitting;g(e),n(!1)},children:function(e){return Object(N.jsxs)(o.c,{children:[Object(N.jsxs)("div",{className:"signin-login",children:[Object(N.jsx)(o.b,{name:"phoneNumber",label:"phoneNumber",placeholder:" your phone number",autoCapitalize:"none",className:"input-base",formikProps:e}),Object(N.jsx)(o.a,{name:"phoneNumber",className:"error-red",component:"div"}),Object(N.jsx)("img",{src:C,id:"login",alt:"phone"}),Object(N.jsx)("i",{id:"login-plus",className:"fas fa-plus text-color"})]}),Object(N.jsx)(w,{type:"submit",onClickFunction:function(){return n(t)},className:"sign-btnStyle-phone-page",text:"Next step"}),Object(N.jsx)(v,{firstText:"Already have an account?  ",secondText:"Sign in",onClickFunction:function(){return p("signin")}})]})}})]})})})},R=n.p+"static/media/Vector_lock.d2b5b58d.svg",A=n(108),B=(n(445),function(e){var t=e.btnTheme,n=e.changeForm,c=Object(s.useState)(""),j=Object(a.a)(c,2),m=j[0],p=j[1],h=Object(P.a)().setIsAuthTrue;try{var d=window.location.search,x=new URLSearchParams(d).get("tgID");x&&sessionStorage.setItem("tgID",x)}catch(k){console.log(k)}var O=function(){var e=Object(r.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(S.e)(t.phoneNumber,t.newPassword);case 3:if((n=e.sent).error){e.next=7;break}return n.verification?h():alert("Please, wait verification"),e.abrupt("return");case 7:alert(n.data.message),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),alert(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}();return"registration"===m?Object(N.jsx)(I,{btnTheme:t,changeForm:n}):Object(N.jsx)(l.a,{className:"main-grid",children:Object(N.jsx)(u.a,{className:"main-page-paperStyle",children:Object(N.jsxs)(l.a,{className:"signin-textContainer",children:[Object(N.jsx)("div",{className:"auth-logo",children:Object(N.jsx)("img",{src:A.a,alt:"logo"})}),Object(N.jsx)("h1",{className:"auth-bold-white-text",children:"Welcome Back!"}),Object(N.jsx)(b.a,{className:"signin-whiteText",variant:"caption",gutterBottom:!0,children:"Log in to your existant account"}),Object(N.jsx)(o.d,{initialValues:{phoneNumber:"",newPassword:""},validationSchema:f,validateOnMount:!0,onSubmit:function(e,t){var n=t.setSubmitting;O(e),n(!1)},children:function(e){return Object(N.jsxs)(o.c,{className:"signin-form",children:[Object(N.jsxs)("div",{className:"signin-login",children:[Object(N.jsx)(o.b,{name:"phoneNumber",label:"phoneNumber",inputmask:"+9999999999",placeholder:" phone number",autoCapitalize:"none",className:"input-base",formikprops:e}),Object(N.jsx)(o.a,{name:"phoneNumber",component:"div",className:"error-red"}),Object(N.jsx)("img",{src:C,id:"login",alt:"phone"}),Object(N.jsx)("i",{id:"login-plus",className:"fas fa-plus text-color"})]}),Object(N.jsxs)("div",{className:"signin-login",children:[Object(N.jsx)(o.b,{name:"newPassword",label:"New Password",type:"password",placeholder:" password",securetextentry:"true",formikprops:e,infovalidation:g,className:"input-base"}),Object(N.jsx)(o.a,{name:"newPassword",component:"div",className:"error-red"}),Object(N.jsx)("img",{src:R,id:"login",alt:"phone"})]}),Object(N.jsx)(l.a,{children:Object(N.jsx)("div",{className:"signin-underline-text",children:"Forgot password?"})}),Object(N.jsx)(w,{type:"submit",onClickFunction:function(){return n(t)},className:"sign-btnStyle-pressed",text:"Sign in"})]})}}),Object(N.jsx)(v,{firstText:"Haven\u2019t an account?  ",secondText:"Registration",onClickFunction:function(){p("registration")}})]})})})}),V=function(){var e=Object(s.useState)("initial"),t=Object(a.a)(e,2),n=t[0],c=t[1];return Object(N.jsx)(B,{btnTheme:n,changeForm:function(e){"initial"===e&&c("pressed")}})};t.default=V}}]);
//# sourceMappingURL=23.2749c0d5.chunk.js.map