(this["webpackJsonpwebsite-stories"]=this["webpackJsonpwebsite-stories"]||[]).push([[26],{450:function(e,t,a){},451:function(e,t,a){},550:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return j}));var n=a(0),c=a(94),r=a(65),i=a(55),o=a(48),s=(a(450),a(1));function d(e){var t=Object(r.a)().moveToProduct,a="vid"===e.data.type?e.data.thumbnail:e.data.src;return Object(s.jsx)(s.Fragment,{children:Object(s.jsx)(o.b,{to:"/product",children:Object(s.jsx)("div",{className:"catalog-element",onClick:function(){return t(e.index)},style:{backgroundImage:'url("'.concat(a,'")')}})})})}a(451);function u(e){var t=e.data?e.data:[];return Object(s.jsx)(s.Fragment,{children:Object(s.jsx)("div",{className:"catalog-container",children:t.map((function(e,t){return Object(s.jsx)(d,{data:e,index:"".concat(t)},t)}))})})}function j(){var e=Object(i.a)((function(e){return e.goods})),t=e.goods,a=e.loading,o=e.error,d=Object(r.a)().fetchGoods;return Object(n.useEffect)((function(){d(),JSON.parse(sessionStorage.getItem("isVerified")||"false")||alert("After verification, the order menu will be available to you. Please wait for data verification")}),[]),a?Object(s.jsx)(c.a,{}):o?Object(s.jsx)("h1",{children:o}):t.length?Object(s.jsx)(s.Fragment,{children:Object(s.jsx)(u,{data:t})}):Object(s.jsx)("h1",{children:o})}}}]);
//# sourceMappingURL=26.81398f16.chunk.js.map