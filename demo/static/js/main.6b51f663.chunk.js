(this["webpackJsonpsbl-test"]=this["webpackJsonpsbl-test"]||[]).push([[0],{14:function(e,t,n){e.exports=n(24)},19:function(e,t,n){},23:function(e,t,n){},24:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(9),o=n.n(r),c=(n(19),n(2)),s=n.n(c),l=n(3),d=n(6),p=n(13),m=n(1),u=m.a.div.withConfig({displayName:"styles__ImgCont",componentId:"dt8rcd-0"})(["position:relative;width:100%;height:0;padding-bottom:56.49717514124294%;background-size:cover;"]),f=m.a.time.withConfig({displayName:"styles__TimeLabel",componentId:"dt8rcd-1"})(["position:absolute;left:0;bottom:0;display:inline-block;padding:5px 6px 5px 24px;background:#fff;font-size:16px;color:#1E212A;@media (min-width:431px){padding:2px 4px 2px 14px;font-size:12px;}@media (min-width:650px){padding:5px 6px 5px 24px;font-size:16px;}@media (min-width:1900px){font-size:0.84vw;}"]),x=m.a.article.withConfig({displayName:"styles__Main",componentId:"dt8rcd-2"})(["box-sizing:border-box;flex:0 0 98%;background:#2B2F3B;border:solid 2px #464B5E;text-align:left;font-family:'Roboto Condensed',sans-serif;a{display:flex;flex-direction:column;text-decoration:none;}h1{margin:0;padding:6.78% 5.36% 11.58%;font-size:23px;color:#fff;text-decoration:none;font-weight:400;text-transform:uppercase;}@media (min-width:431px){flex:0 0 48%;h1{font-size:18px;}}@media (min-width:650px){h1{font-size:23px;}}@media (min-width:1020px){flex:0 0 31%;}@media (min-width:1440px){flex:0 0 23%;}@media (min-width:1900px){flex:0 0 18%;h1{font-size:1.58vw;}}"]),h=function(e){var t=e.data;return i.a.createElement(x,null,i.a.createElement("a",{href:t.url,target:"_blank",rel:"noopener noreferrer"},i.a.createElement(u,{style:{backgroundImage:"url(".concat(t.image,")")}},t.runningTime&&i.a.createElement(f,null,t.runningTime," MINS")),i.a.createElement("h1",null,t.title)))},g=m.a.section.withConfig({displayName:"styles__StateLabel",componentId:"pfn43m-0"})([""]),b=m.a.section.withConfig({displayName:"styles__Main",componentId:"pfn43m-1"})(["display:flex;flex-wrap:wrap;article{margin:1%;}"]),w=function(e){var t=e.data;return i.a.createElement(b,null,t.map((function(e,t){return i.a.createElement(h,{data:e})})))},v=function(){var e=Object(l.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.jsonbin.io/b/5e95bd3c5fa47104cea035df");case 3:return t=e.sent,e.abrupt("return",t.json());case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",{status:-1,message:e.t0.message});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),y=function(){var e=Object(a.useState)({data:[],loading:!1}),t=Object(p.a)(e,2),n=t[0],r=t[1];Object(a.useEffect)((function(){r(Object(d.a)({},n,{loading:!0})),function(){var e=Object(l.a)(s.a.mark((function e(){var t,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v();case 2:t=e.sent,a=Object(d.a)({},n,{loading:!1}),200===t.status&&t.items?a.data=t.items:(a.data=[],a.error=t.message),r(a);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[]);var o=n.data;return n.loading?i.a.createElement(g,null,"Loading..."):n.error?i.a.createElement(g,null,n.error):i.a.createElement(w,{data:o})};n(23);var E=function(){return i.a.createElement("main",{className:"App"},i.a.createElement(y,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[14,1,2]]]);
//# sourceMappingURL=main.6b51f663.chunk.js.map