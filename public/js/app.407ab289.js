(function(e){function n(n){for(var r,a,i=n[0],c=n[1],s=n[2],l=0,p=[];l<i.length;l++)a=i[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&p.push(o[a][0]),o[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);f&&f(n);while(p.length)p.shift()();return u.push.apply(u,s||[]),t()}function t(){for(var e,n=0;n<u.length;n++){for(var t=u[n],r=!0,a=1;a<t.length;a++){var c=t[a];0!==o[c]&&(r=!1)}r&&(u.splice(n--,1),e=i(i.s=t[0]))}return e}var r={},o={app:0},u=[];function a(e){return i.p+"js/"+({about:"about"}[e]||e)+"."+{about:"d4101675"}[e]+".js"}function i(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.e=function(e){var n=[],t=o[e];if(0!==t)if(t)n.push(t[2]);else{var r=new Promise((function(n,r){t=o[e]=[n,r]}));n.push(t[2]=r);var u,c=document.createElement("script");c.charset="utf-8",c.timeout=120,i.nc&&c.setAttribute("nonce",i.nc),c.src=a(e);var s=new Error;u=function(n){c.onerror=c.onload=null,clearTimeout(l);var t=o[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),u=n&&n.target&&n.target.src;s.message="Loading chunk "+e+" failed.\n("+r+": "+u+")",s.name="ChunkLoadError",s.type=r,s.request=u,t[1](s)}o[e]=void 0}};var l=setTimeout((function(){u({type:"timeout",target:c})}),12e4);c.onerror=c.onload=u,document.head.appendChild(c)}return Promise.all(n)},i.m=e,i.c=r,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)i.d(t,r,function(n){return e[n]}.bind(null,r));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="/",i.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=n,c=c.slice();for(var l=0;l<c.length;l++)n(c[l]);var f=s;u.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var r=t("2b0e"),o=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("v-app",[t("v-main",[t("router-view")],1)],1)},u=[],a={name:"App",data:function(){return{}}},i=a,c=t("2877"),s=Object(c["a"])(i,o,u,!1,null,null,null),l=s.exports,f=(t("d3b7"),t("8c4f"));r["default"].use(f["a"]);var p=[{path:"/",name:"Home",component:function(){return t.e("about").then(t.bind(null,"bb51"))}},{path:"/profile",name:"Profile",component:function(){return t.e("about").then(t.bind(null,"c66d"))}},{path:"/professor/courses",name:"Professor courses",component:function(){return t.e("about").then(t.bind(null,"c084"))}},{path:"/professor/assignments/:id_c",name:"Professor assignments",component:function(){return t.e("about").then(t.bind(null,"b066"))}},{path:"/student/courses",name:"All courses",component:function(){return t.e("about").then(t.bind(null,"b537"))}},{path:"/student/my-courses",name:"My courses",component:function(){return t.e("about").then(t.bind(null,"79bb"))}},{path:"/student/assignments/:id_c",name:"Assignments",component:function(){return t.e("about").then(t.bind(null,"974c"))}}],d=new f["a"]({mode:"history",base:"/",routes:p}),b=d,m=t("bc3a"),h=t.n(m),v=t("a7fe"),y=t.n(v),g=t("ce5b"),w=t.n(g);t("bf40");r["default"].use(w.a);var j=new w.a({});r["default"].use(y.a,h.a),h.a.defaults.baseURL="http://localhost:3000/",r["default"].config.productionTip=!1,new r["default"]({router:b,vuetify:j,render:function(e){return e(l)}}).$mount("#app")}});
//# sourceMappingURL=app.407ab289.js.map