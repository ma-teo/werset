(this.webpackJsonpwerset=this.webpackJsonpwerset||[]).push([[0],{14:function(e,n,t){},15:function(e,n,t){"use strict";t.r(n);var o=t(0),c=t(1),r=t(4),a=t(7),i=t(3),s=t.n(i),l=t(5),u=t(6),d=function(){return Object(o.jsx)("div",{className:"spinner"})},h=function(e){var n=e.text,t=e.def;return Object(o.jsxs)("p",{className:"verse",children:[n,Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),t]})},f=function(){var e=Object(c.useState)(),n=Object(u.a)(e,2),t=n[0],r=n[1];return Object(c.useEffect)(Object(l.a)(s.a.mark((function e(){var n,t,o,c,a,i,l,u;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://biblia-api.kosciolwroclaw.pl","/0"));case 2:return e.next=4,e.sent.json();case 4:return n=e.sent,t=n.books,o=n.verses,c=Math.round(Math.random()*(o.length-1)),a=Math.round(Math.random()*(o[c].length-1)),i=Math.round(Math.random()*(o[c][a]-1)),e.next=12,fetch("".concat("https://biblia-api.kosciolwroclaw.pl","/0/").concat(c,"/").concat(a,"/").concat(i));case 12:return e.next=14,e.sent.json();case 14:l=e.sent,u=l.verse,r({text:u,def:"".concat(t[c]," ").concat(a+1,":").concat(i+1)});case 17:case"end":return e.stop()}}),e)}))),[]),Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("img",{className:"image",src:"https://picsum.photos/".concat(window.innerWidth,"/").concat(window.innerHeight),alt:""}),t?Object(o.jsx)(h,Object(a.a)({},t)):Object(o.jsx)(d,{})]})},w=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function p(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}t(14);Object(r.render)(Object(o.jsx)(c.StrictMode,{children:Object(o.jsx)(f,{})}),document.getElementById("app")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("","/service-worker.js");w?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var o=t.headers.get("content-type");404===t.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):p(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):p(n,e)}))}}()}},[[15,1,2]]]);
//# sourceMappingURL=main.f22e4cf6.chunk.js.map