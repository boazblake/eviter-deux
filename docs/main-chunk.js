(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,function(t,e,n){"use strict";(function(r){n.d(e,"a",function(){return t});var t={reqs:{urls:["/posts","/comments","/albums","/photos","/todos","/users"].reduce(function(t,e){var n;return t[e]=(n=e,function(t,e){return"https://jsonplaceholder.typicode.com".concat(n,"?_start=").concat(t,"&_limit=").concat(e)}),t},{}),http:function(n){return function(t){return function(e){return r.request({url:t,method:"GET",extract:function(t){return n.data[e].limit=parseInt(t.getResponseHeader("x-total-count")),JSON.parse(t.responseText)}}).then(function(t){return n.data[e].data=n.data[e].data.concat(t),n})}}}},limits:[30,40,50,60,70,80,90,100],data:{},state:{url:"",route:"",scrollPos:1,limit:30,profile:"",tabsShowing:!1,showLimits:!1},toggleLimits:function(t){return t.state.showLimits=!t.state.showLimits},showTabs:function(t){return t.state.tabsShowing=!t.state.tabsShowing}}}).call(this,n(0))},function(t,e){},function(t,e){},function(t,e){},function(t,e,n){"use strict";n.r(e);var s=n(0),r=n(1),a=function(t){var e=t.attrs.model,n="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z",r="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z",a=function(t){return s.default.render(t,Object(s.default)("path",{xmlns:"http://www.w3.org/2000/svg",d:e.state.tabsShowing?n:r}))};return{oncreate:function(t){var e=t.dom;return a(e)},onupdate:function(t){var e=t.dom;return a(e)},view:function(t){var e=t.attrs.model;return Object(s.default)("svg.btn.hamburger",{style:{fill:e.state.tabsShowing?"white":"inherit"},onclick:function(){return e.showTabs(e)}})}}};function o(t){return function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var i=function(t){var e=t.dom;e.style.opacity=0,e.classList.toggle("slideRight"),e.style.opacity=1},u=function(n){return function(t){var e=t.dom;e.style.opacity=0,setTimeout(function(){e.classList.toggle("slideDown"),e.style.opacity=1},200*(n+1))}},c=function(n){return function(t){var e=t.dom;e.style.opacity=0,setTimeout(function(){e.classList.toggle(n),e.style.opacity=1},200)}},l={onbeforeremove:function(t){var e=t.dom;return new Promise(function(){o(e.children).reverse().map(function(t,e){return setTimeout(function(){t.style.display="none"},100*e)})})},view:function(t){var n=t.attrs.model;return Object(s.default)(".limits",n.limits.map(function(t,e){return Object(s.default)("button.btn.limit",{oncreate:u(e),onclick:function(){n.state.limit=t,n.state.showLimits=!1},key:e},t)}))}},d={view:function(t){var e=t.attrs.model;return Object(s.default)(".changeLimits",[Object(s.default)("button.changeLimitBtn",{onclick:function(){return e.toggleLimits(e)}},"Change Limit"),e.state.showLimits&&Object(s.default)(l,{model:e})])}},f={oncreate:c("slideDown"),view:function(t){var e=t.attrs.model;return Object(s.default)("header.header",{id:"header"},[Object(s.default)(a,{model:e}),Object(s.default)(d,{model:e})])}},m={oncreate:c("slideUp"),view:function(){return Object(s.default)("footer.footer",{oncreate:u,id:"footer"},"Footer")}},b=function(t){var n=t.attrs.key;return{oncreate:i,view:function(t){var e=t.attrs.tab;return Object(s.default)("a.tab",{key:n,id:"".concat(e),href:"".concat(e),oncreate:s.default.route.link},e.split("/")[1])}}},p=function(t){var e=t.attrs.model,r=Object.keys(e.reqs.urls);return{oncreate:i,view:function(t){var n=t.attrs.model;return Object(s.default)("aside.sidebar slide-left",{id:"sidebar"},r.map(function(t,e){return Object(s.default)(b,{key:e,active:n.state.route==t,tab:t})}))}}},h={oncreate:i,onbeforeremove:function(t){var e=t.dom;return new Promise(function(){return e.classList.remove("slideRight"),setTimeout(function(){e.classList.add("reverseAnimation","slideRight")},200)})},view:function(t){var e=t.children;return Object(s.default)(".navigationModal",e)}},v=function(t){var n=t.attrs.model;return{view:function(t){var e=t.children;return Object(s.default)("section.layout",{id:"layout"},e?[Object(s.default)(f,{model:n}),"phone"==n.state.profile?n.state.tabsShowing?Object(s.default)(h,Object(s.default)(p,{model:n})):null:Object(s.default)(p,{model:n}),Object(s.default)("section.content",{id:"content"},e),Object(s.default)(m,{model:n})]:[])}}},j=function(n){return function(t){n.state.route=t,n.data[t]?n.data[t]:n.data[t]={data:[],limit:1};var e=n.data[t].data.length;n.reqs.http(n)(n.reqs.urls[t](e,n.state.limit))(t)}},O=Object(s.default)(".holder",[Object(s.default)(".preloader",[Object(s.default)("div"),Object(s.default)("div"),Object(s.default)("div"),Object(s.default)("div"),Object(s.default)("div"),Object(s.default)("div"),Object(s.default)("div")])]),w={view:function(t){var e=t.attrs,n=e.key,r=e.item,a=r.title,o=r.body;return Object(s.default)(".grid-item.row.post",{id:"post-".concat(n)},[Object(s.default)("h1.left",a),Object(s.default)("p.right",o)])}},g={view:function(t){var e=t.attrs,n=e.key,r=e.item,a=r.email,o=r.name,i=r.body;return Object(s.default)(".grid-item.row.comment",{id:"comment-".concat(n)},[Object(s.default)("h1.left",o),Object(s.default)("p.left",a),Object(s.default)("p.left",i)])}},y={view:function(t){var e=t.attrs,n=e.key,r=e.item.title;return Object(s.default)(".grid-item.album",{id:"album-".concat(n)},[Object(s.default)("h1",r)])}},k={view:function(t){var e=t.attrs,n=e.key,r=e.item,a=r.title,o=r.thumbnailUrl;return Object(s.default)(".grid-item.photo",{id:"photo-".concat(n)},[Object(s.default)("h1",{style:{padding:"4px",right:"auto",flex:3}},a),Object(s.default)("img.left",{src:o})])}},L=function(t){var a=t.attrs.item.completed;return{view:function(t){var e=t.attrs,n=e.key,r=e.item.title;return Object(s.default)(".grid-item.todo",{id:"todo-".concat(n),key:n},[Object(s.default)("h1.left",r),Object(s.default)("input[type=checkbox].right",{onclick:function(){a=!a},checked:a},"Done")])}}},T={view:function(){return Object(s.default)("")},oncreate:function(t){var e=t.dom,n=t.attrs,r=n.key,a=n.item,o=a.email,i=a.name,u=a.phone,c=a.username,l=a.website;s.default.render(e,Object(s.default)(".grid-item.user",{id:"user-".concat(r),key:r},[Object(s.default)(".row",[Object(s.default)("p.left",{for:"name"},"name"),Object(s.default)("p.right.bold",{name:"name"},i)]),Object(s.default)(".row",[Object(s.default)("p.left",{for:"email"},"email"),Object(s.default)("p.right.bold",{name:"email"},o)]),Object(s.default)(".row",[Object(s.default)("p.left",{for:"phone"},"phone"),Object(s.default)("p.right.bold",{name:"phone"},u)]),Object(s.default)(".row",[Object(s.default)("p.left",{for:"username"},"username"),Object(s.default)("p.right.bold",{name:"username"},c)]),Object(s.default)(".row",[Object(s.default)("p.left",{for:"website"},"website"),Object(s.default)("p.right.bold",{name:"website"},l)])]))}},S={view:function(t){var a,r=t.attrs.model,e=r.state.route,o=function(t){switch(t){case"/posts":return w;case"/comments":return g;case"/albums":return y;case"/photos":return k;case"/todos":return L;case"/users":return T}}(e),n=r.data[e].data;return Object(s.default)("section.component",{id:"component",route:r.state.route,onscroll:(a=r,function(t){var e=a.state.route,n=a.data[e].data.length,r=10*n*a.state.scrollPos;t.target.scrollTop-a.state.scrollPos>=r&&(a.state.scrollPos++,t.target.scrollTop,n<a.data[e].limit&&j(a)(e))})},0==n.length?Object(s.default)(".loader",O):n.map(function(t,e){return Object(s.default)(o,{oncreate:(n=e,function(t){var e=t.dom;return e.style.opacity=0,setTimeout(function(){e.classList.toggle("stretchRight"),e.style.opacity=1},100*n+20)}),key:e,item:t,model:r});var n}))}},x=function(a){return{onmatch:function(t,e){return n=e,(r=a).state.scrollPos=1,r.state.tabsShowing=!1,j(r)(n);var n,r},render:function(){return Object(s.default)(v,{model:a},Object(s.default)(S,{model:a}))}}},A=(n(2),n(3),n(4),document.body);function P(t){return t<668?"phone":t<920?"tablet":"desktop"}var q,R=window.innerWidth;r.a.state.profile=P(R),function t(){var e=window.innerWidth;if(R!==e){R=e;var n=r.a.state.profile;r.a.state.profile=P(e),n!=r.a.state.profile&&s.default.redraw()}requestAnimationFrame(t)}(),s.default.route(A,"/posts",(q=r.a,{"/posts":x(q),"/comments":x(q),"/albums":x(q),"/photos":x(q),"/todos":x(q),"/users":x(q)}))}],[[5,1,2]]]);
//# sourceMappingURL=main-chunk.js.map