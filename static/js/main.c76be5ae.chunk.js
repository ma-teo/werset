(this.webpackJsonpwerset=this.webpackJsonpwerset||[]).push([[0],{13:function(e,n,t){},14:function(e,n,t){"use strict";t.r(n);var o=t(0),c=t(1),r=t(5),a=t(4),i=t.n(a),s=t(6),l=t(2),u=function(){return Object(o.jsx)("div",{className:"spinner"})},d=function(e){var n=e.verse,t=e.def;return Object(o.jsxs)("p",{className:"verse",children:[n,Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),"(",t,")"]})},h=function(){var e=Object(c.useState)(),n=Object(l.a)(e,2),t=(n[0],n[1]),r=Object(c.useState)(),a=Object(l.a)(r,2),h=a[0],f=a[1],b=Object(c.useState)(),w=Object(l.a)(b,2),p=w[0],j=w[1];return Object(c.useEffect)(Object(s.a)(i.a.mark((function e(){var n,o,c,r,a,s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://biblia-api.kosciolwroclaw.pl"));case 2:return e.next=4,e.sent.json();case 4:return n=e.sent,t(n),o=Math.round(Math.random()*(n.books.length-1)),c=Math.round(Math.random()*(n.chapters[o]-1)),e.next=10,fetch("".concat("https://biblia-api.kosciolwroclaw.pl","/0/").concat(o,"/").concat(c));case 10:return e.next=12,e.sent.json();case 12:r=e.sent,a=Math.round(Math.random()*(r.length-1)),s=r[a],f(s),j("".concat(n.books[o]," ").concat(c+1,":").concat(a+1));case 17:case"end":return e.stop()}}),e)}))),[]),Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("img",{className:"image",src:"https://picsum.photos/".concat(window.innerWidth,"/").concat(window.innerHeight),alt:""}),h&&p?Object(o.jsx)(d,{verse:h,def:p}):Object(o.jsx)(u,{})]})},f=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function b(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}t(13);Object(r.render)(Object(o.jsx)(c.StrictMode,{children:Object(o.jsx)(h,{})}),document.getElementById("app")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("","/service-worker.js");f?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var o=t.headers.get("content-type");404===t.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):b(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):b(n,e)}))}}()}},[[14,1,2]]]);
//# sourceMappingURL=main.c76be5ae.chunk.js.map