(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(t,e,n){"use strict";(function(t){var r=n(27),o=n.n(r),a=n(12),u=function(t){return function(e){return function(n){return t.state.isLoading(!1),e(n.response)}}},c=function(t){return function(e){return function(n){return t.state.isLoading(!1),e(n)}}},i=function(){return window.sessionStorage.getItem("user-token")?window.sessionStorage.getItem("user-token"):""},s={postQl:function(e){return function(n){return e.state.isLoading(!0),new o.a(function(r,o){return t.request({method:"POST",withCredentials:!1,data:(a=n,JSON.parse(JSON.stringify(a))),headers:{Authorization:"Bearer ".concat(e.state.token),"cache-control":"no-cache","x-apikey":"64fecd3f0cbb54d46d7f7260b86b8ad45d31b","content-type":"application/json"}}).then(function(t){return function(e){var n=e.data,r=e.errors;return t.state.isLoading(!1),r?Promise.reject(r):Promise.resolve(n)}}(e)).then(c(e)(o),u(e)(r));var a})}},postTask:function(e){return function(n){return function(r){var s=r.dto;return e.state.isLoading(!0),new o.a(function(r,o){return t.request({method:"POST",url:"".concat(a.c,"/").concat(a.b,"/").concat(a.a,"/").concat(n),data:s,headers:{"user-token":i()},withCredentials:!1}).then(c(e)(o),u(e)(r))})}}},getTask:function(e){return function(n){return e.state.isLoading(!0),new o.a(function(r,o){return t.request({method:"GET",url:"".concat(a.c,"/").concat(a.b,"/").concat(a.a,"/").concat(n),headers:{"user-token":i()},withCredentials:!1}).then(c(e)(o),u(e)(r))})}},putTask:function(e){return function(n){return function(r){var s=r.dto;return e.state.isLoading(!0),new o.a(function(r,o){return t.request({method:"PUT",url:"".concat(a.c,"/").concat(a.b,"/").concat(a.a,"/").concat(n),data:s,headers:{"user-token":i()},withCredentials:!1}).then(c(e)(o),u(e)(r))})}}},deleteTask:function(e){return function(n){return function(r){return e.state.isLoading(!0),new o.a(function(o,s){return t.request({method:"DELETE",url:"".concat(a.c,"/").concat(a.b,"/").concat(a.a,"/").concat(n,"/").concat(r),headers:{"user-token":i()},withCredentials:!1}).then(c(e)(s),u(e)(o))})}}}};e.a=s}).call(this,n(0))},12:function(t,e,n){"use strict";n.d(e,"a",function(){return r}),n.d(e,"b",function(){return o}),n.d(e,"c",function(){return a});var r="3AA68F17-E271-EE57-FF46-EB6E95626600",o="72F4AE0D-0876-A16A-FF0F-A2D7A65AE300",a="https://api.backendless.com"},254:function(t,e){},256:function(t,e){},288:function(t,e){},289:function(t,e){},335:function(t,e,n){},336:function(t,e,n){},337:function(t,e,n){},338:function(t,e,n){"use strict";n.r(e);var r=n(0),o=n(9),a={reload:function(){},isLoading:Object(o.a)(!1),profile:"",tabsShowing:!1,route:Object(o.a)(""),group:{id:Object(o.a)(""),name:Object(o.a)("")},event:{id:Object(o.a)(""),name:Object(o.a)("")},invite:{id:Object(o.a)(""),name:Object(o.a)("")},errors:Object(o.a)("")},u={"groups-modal":Object(o.a)(!1),"events-modal":Object(o.a)(!1),"invites-modal":Object(o.a)(!1)},c={events:Object(o.a)([]),groups:Object(o.a)([]),pages:["login","logout","createEvent",""],user:{objectId:"",name:""},state:a,showTabs:function(t){return t.state.tabsShowing=!t.state.tabsShowing},errors:null,getState:function(t){return u[t]()},toggleState:function(t){return u[t](!u[t]())}},i=function(t){var e=t.attrs.model,n="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z",o="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z",a=function(t){return r.default.render(t,Object(r.default)("path",{xmlns:"http://www.w3.org/2000/svg",d:e.state.tabsShowing?n:o}))};return{oncreate:function(t){var e=t.dom;return a(e)},onupdate:function(t){var e=t.dom;return a(e)},view:function(t){var e=t.attrs.model;return Object(r.default)("svg.btn.hamburger",{style:{fill:e.state.tabsShowing?"white":"inherit"},onclick:function(){return e.showTabs(e)}})}}};var s=function(t){var e=t.dom;e.style.opacity=0,e.classList.toggle("slideRight"),e.style.opacity=1},d=function(t){return function(e){var n=e.dom;n.style.opacity=0,setTimeout(function(){n.classList.toggle("slideDown"),n.style.opacity=1},200*(t+1))}},l=function(t){return function(e){var n=e.dom;n.style.opacity=0,setTimeout(function(){n.classList.toggle(t),n.style.opacity=1},200)}},f=n(343),b=n(339),m=n(340),g=n(341),p=n(342),j=Object(f.a)(Object(b.a)("-"),Object(m.a)(" "),Object(g.a)(),Object(p.a)()),v={view:function(t){var e=t.attrs,n=e.action,o=e.label;return[Object(r.default)("button.Btn",{onclick:function(){return n()}},o)]}},O={view:function(t){var e=t.attrs,n=e.action,o=e.label;return[Object(r.default)("button.btn-close",{onclick:function(){return n()}},o)]}},w={groups:function(t){return[Object(r.default)(v,{action:function(){return t.toggleState("groups-modal")},label:"Add Group"})]},landing:function(){return["LANDING PAGE"]},login:function(){return["Log in"]},register:function(){return["Register"]},home:function(){return["LANDING PAGE"]},events:function(t){return[Object(r.default)(v,{action:function(){t.state.group.name(""),t.state.group.id(""),r.default.route.set("/".concat(j(t.user.name),"/groups"))},label:"Back to Groups"}),Object(r.default)(v,{action:function(){return t.toggleState("events-modal")},label:"Add Event"})]},newGroup:function(t){return[Object(r.default)(v,{action:function(){t.state.group.name(""),t.state.group.id(""),r.default.route.set("/".concat(j(t.user.name),"/groups"))},label:"Back to Groups"})]},newEvent:function(t){return[Object(r.default)(v,{action:function(){return r.default.route.set("/".concat(t.user.name,"/groups").concat(j(t.state.group.name())))},label:"Back to Group"})]}},h={view:function(t){var e=t.attrs.model;return Object(r.default)(".actions",w[e.state.route()](e))}},k={oncreate:l("slideDown"),view:function(t){var e=t.attrs.model;return Object(r.default)("header.header",{id:"header"},[Object(r.default)(i,{model:e}),Object(r.default)(h,{model:e})])}},y={oncreate:l("slideUp"),view:function(){return Object(r.default)("footer.footer",{oncreate:d,id:"footer"},"by Boaz Blake")}},S=function(t){var e=t.attrs.key;return{oncreate:s,view:function(t){var n=t.attrs.tab;return Object(r.default)("a.tab",{key:e,id:"".concat(n),href:"".concat(n),oncreate:r.default.route.link},n)}}},L=function(t){var e=t.attrs.model.pages;return{oncreate:s,view:function(t){var n=t.attrs.model;return Object(r.default)("aside.sidebar slide-left",{id:"sidebar"},e.map(function(t,e){return Object(r.default)(S,{key:e,active:n.state.route()==t,tab:t})}))}}},E={oncreate:s,onbeforeremove:function(t){var e=t.dom;return new Promise(function(){return e.classList.remove("slideRight"),setTimeout(function(){e.classList.add("reverseAnimation","slideRight")},200)})},view:function(t){var e=t.children;return Object(r.default)(".navigationMenu",e)}},T={view:function(t){var e=t.attrs.children;return Object(r.default)("section.content",{id:"content"},e)}},I=function(t){var e=t.attrs.model;return{view:function(t){var n=t.children;return Object(r.default)("section.layout",{id:"layout"},n?[Object(r.default)(k,{model:e}),"phone"==e.state.profile?e.state.tabsShowing?Object(r.default)(E,Object(r.default)(L,{model:e})):null:Object(r.default)(L,{model:e}),Object(r.default)(T,{model:e,children:n}),Object(r.default)(y,{model:e})]:[])}}},G=n(11),A=function(t){return encodeURI("where=members.objectId = '".concat(t,"'"))},C=function(t){return Object(f.a)(function(t){return function(e){return G.a.getTask(t)("data/Groups?".concat(e,"&loadRelations=members"))}}(t),A)},P={view:function(t){var e=t.attrs,n=e.reload,o=e.model,a=e.g,u=a.objectId,c=a.name,i=a.members;return Object(r.default)(".group",[Object(r.default)("button.btn",{onclick:function(){o.state.group.id(u),o.state.group.name(c),r.default.route.set("/".concat(j(o.user.name),"/").concat(j(c),"/events"))}},Object(r.default)("p.title",c)),Object(r.default)("button.btn",{onclick:function(){o.state.group.id(u),o.state.group.name(c),o.toggleState("groups-modal")}},Object(r.default)("p.title","Edit")),Object(r.default)("p.groupSize",i.length),Object(r.default)("button.btn-delete",{onclick:function(){return function(t){return function(e){return G.a.deleteTask(t)("data/groups")(e)}}(o)(u).fork(function(t){return function(e){console.warn("errors",e,t)}}(o),function(t){return function(e){console.log("success",e),t()}}(n))}})])}},D=function(){var t,e,n={view:function(){return e}};return{oncreate:function(o){e=o.children,(t=document.createElement("div")).className="modal",document.body.appendChild(t),r.default.mount(t,n)},onbeforeupdate:function(t){e=t.children},onbeforeremove:function(){return t.classList.add("hide"),new Promise(function(e){t.addEventListener("animationend",e)})},onremove:function(){r.default.mount(t,null),document.body.removeChild(t)},view:function(){}}},z=n(145),B=function(t){return{dto:t}},F=function(t){return function(e){return G.a.postTask(t)("data/Groups")(B({name:e}))}},N=function(t){return function(e,n){return G.a.putTask(t)("data/Groups/".concat(e))(B({name:n}))}},R=function(t){return function(e){return function(n){var r=n.objectId;return G.a.putTask(t)("data/Groups/".concat(r,"/members"))(B([e]))}}},x=function(t){return function(e){var n=e.message;return t.error=n}},q=function(t){return function(e){return function(n){return function(){e.state.group.id(""),e.state.group.name(""),t.error=null,e.toggleState("groups-modal"),n()}}}},W={group:function(t){return[Object(r.default)("fieldset.fieldset",[Object(r.default)("legend","Create Group"),Object(r.default)(".fields",[Object(r.default)("label",{for:"name"},"name"),Object(r.default)("input",{type:"text",id:"name",name:"name",value:t.data.name,onchange:function(e){t.data.name=e.target.value}})]),t.errors?Object(r.default)("p.error",t.errors[0]):""])]},event:function(t){return[Object(r.default)("fieldset.fieldset",[Object(r.default)("legend","Create Event"),Object(r.default)(".fields",[Object(r.default)("label",{for:"title"},"title"),Object(r.default)("input",{type:"text",id:"title",name:"title",onchange:function(e){t.data.title=e.target.value}})]),Object(r.default)(".fields",[Object(r.default)("label",{for:"description"},"description"),Object(r.default)("input",{type:"textarea",id:"description",name:"description",onchange:function(e){t.data.description=e.target.value}})]),Object(r.default)(".fields",[Object(r.default)("label",{for:"location"},"location"),Object(r.default)("input",{type:"textarea",id:"location",name:"location",onchange:function(e){t.data.location=e.target.value}})]),Object(r.default)(".fields",[Object(r.default)("label",{for:"date"},"date"),Object(r.default)("input",{type:"date",id:"date",name:"date",onchange:function(e){t.data.date=Object(z.format)(e.target.value,"GG")}})]),t.errors?Object(r.default)("p.error",t.errors[0]):""])]}},J={oninit:function(t){var e=t.attrs,n=e.model,r=e.page,o=t.state;return o.form=W[r],o.data={},o.userId=n.user.id,n.state.group.id()?o.data.name=n.state.group.name():o.data={},o},view:function(t){var e=t.attrs,n=e.model,o=e.reload,a=t.state;return Object(r.default)("form.form",{onsubmit:function(t){n.error=null,t.preventDefault(),a.data&&function(t){return function(e){return function(n){return"groups"==t.state.route()?t.state.group.id()?N(t)(t.state.group.id(),e.data.name).fork(x(e),q(e)(t)(n)):F(t)(e.data.name).chain(R(t)(t.user.objectId)).fork(x(e),q(e)(t)(n)):"events"==t.state.route()?t.state.event.id()?N(t)(t.state.group.id(),e.data.name).fork(x(e),q(e)(t)(n)):F(t)(e.data.name).chain(R(t)(t.user.objectId)).fork(x(e),q(e)(t)(n)):(t.state.route(),t.state.route(),e)}}}(n)(a)(o)}},a.form(a),a.error?Object(r.default)("p.error",a.error):"",Object(r.default)("button[type=submit]",{class:n.state.isLoading()?"submitting":"submit"},n.state.isLoading()?"Submitting":"Submit"))}},U={oninit:function(t){var e=t.attrs.model;e.state.reload=function(){return C(e)(e.user.objectId).fork(function(t){return function(e){return t.state.errors(e)}}(e),function(t){return function(e){return t.groups(e)}}(e))}},oncreate:function(t){return t.attrs.model.state.reload()},view:function(t){var e=t.attrs.model;return[Object(r.default)(".groups",e.groups()?e.groups().map(function(t,n){return Object(r.default)(P,{reload:e.state.reload,model:e,g:t,key:n},"id: ".concat(n))}):"add a group"),e.getState("groups-modal")?Object(r.default)(D,Object(r.default)(".modal-content",[Object(r.default)(J,{model:e,page:"group",id:e.state.group.id(),reload:e.state.reload}),Object(r.default)(O,{action:function(){e.state.group.id(""),e.toggleState("groups-modal")},label:"Close"})])):""]}},H=function(t){return encodeURI("where=members.objectId = '".concat(t,"'"))},M=function(t){return function(e){return Object(f.a)(function(t){return function(e){return function(n){return G.a.getTask(t)("data/Groups/".concat(e,"?").concat(n,"&loadRelations=events"))}}}(t)(e),H)}},V={view:function(t){var e=t.attrs,n=e.reload,o=e.model,a=e.i,u=a.objectId,c=a.name,i=a.response;return Object(r.default)(".event",[Object(r.default)("button.btn",{onclick:function(){return r.default.route.set("/".concat(j(o.user.name),"/").concat(j(c),"/events"))}},Object(r.default)("p.title",c)),Object(r.default)("button.btn",{onclick:function(){o.state.group.id(u),o.state.group.name(c),o.toggleState("groups-modal")}},Object(r.default)("p.title","Edit")),Object(r.default)("p.groupSize",i),Object(r.default)("button.btn-delete",{onclick:function(){return function(t){return function(e){return G.a.deleteTask(t)("data/Events")(e)}}(o)(u).fork(function(t){return function(e){console.warn("errors",e,t)}}(o),function(t){return function(e){console.log("success",e),t()}}(n))}})])}},Q={oninit:function(t){var e=t.attrs.model;e.state.reload=function(){return M(e)(e.state.group.id())(e.user.objectId).fork(function(t){return function(e){return t.state.errors(e)}}(e),function(t){return function(e){var n=e.events;return t.events(n)}}(e))}},oncreate:function(t){return t.attrs.model.state.reload()},view:function(t){var e=t.attrs.model;return[Object(r.default)(".events",e.events()?e.events().map(function(t,n){return Object(r.default)(V,{reload:e.state.reload,model:e,i:t,key:n},"id: ".concat(n))}):"No Events Yet"),e.getState("events-modal")?Object(r.default)(D,Object(r.default)(".modal-content",[Object(r.default)(J,{model:e,page:"event",id:e.state.event.id(),reload:e.state.reload}),Object(r.default)(O,{action:function(){e.state.event.id(""),e.toggleState("events-modal")},label:"Close"})])):""]}},Y=function(t){var e=t.email,n=t.password;return!!e&&!!n},K=function(t){return function(e){var n={login:e.email,password:e.password};return G.a.postTask(t)("users/login")({dto:n})}},X=function(t){return function(e){return function(n){window.sessionStorage.setItem("user-token",n["user-token"]),e.user=n,t.errors=null,function(t){return function(e){return r.default.route(document.body,e,ct(t))}}(e)("/".concat(j(e.user.name),"/groups"))}}},Z=function(t){return function(e){var n=e.message;return t.errors=n,console.log(t),t}},$=function(t){return function(e){return function(t){return function(e){return G.a.postTask(t)("users/register")({dto:e})}}(t)(e).chain(function(){return K(t)(e)}).fork(Z(e),X(e)(t))}},_={view:function(t){var e=t.attrs.model,n=t.state;return Object(r.default)("form.form",{onsubmit:function(t){n.errors=null,t.preventDefault(),Y(n)&&function(t){return function(e){return K(t)(e).fork(Z(e),X(e)(t))}}(e)(n)}},[Object(r.default)("fieldset.fieldset",[Object(r.default)("legend","Login"),Object(r.default)(".fields",[Object(r.default)("label",{for:"email"},"email"),Object(r.default)("input",{type:"email",id:"email",name:"login",onchange:function(t){return n.email=t.target.value}}),Object(r.default)("label",{for:"password"},"Password"),Object(r.default)("input",{type:"password",id:"password",name:"login",onchange:function(t){return n.password=t.target.value}})]),Object(r.default)("button[type=submit]",{class:e.state.isLoading()?"submitting":"submit"},e.state.isLoading()?"Submitting":"Submit"),n.errors?Object(r.default)("p.error",n.errors):""]),Object(r.default)("a",{oncreate:r.default.route.link,href:"/register"},"register")])}},tt={view:function(t){var e=t.attrs.model,n=t.state;return Object(r.default)("form.form",{onsubmit:function(t){n.errors=null,t.preventDefault(),Y(n)&&$(e)(n)}},[Object(r.default)("fieldset.fieldset",[Object(r.default)("legend","register"),Object(r.default)(".fields",[Object(r.default)("label",{for:"email"},"email"),Object(r.default)("input",{type:"email",id:"email",name:"register",onchange:function(t){return n.email=t.target.value}}),Object(r.default)("label",{for:"name"},"name"),Object(r.default)("input",{type:"text",id:"name",name:"register",onchange:function(t){return n.name=t.target.value}}),Object(r.default)("label",{for:"password"},"Password"),Object(r.default)("input",{type:"password",id:"password",name:"register",onchange:function(t){return n.password=t.target.value}})]),Object(r.default)("button[type=submit]",{class:e.state.isLoading()?"submitting":"submit"},e.state.isLoading()?"Submitting":"Submit"),n.errors?Object(r.default)("p.error",n.errors):""]),Object(r.default)("a",{oncreate:r.default.route.link,href:"/login"},"login")])}},et={view:function(t){var e=t.attrs.model;return Object(r.default)(".component",Object(r.default)(_,{model:e}))}},nt={view:function(t){var e=t.attrs.model;return Object(r.default)(".component",Object(r.default)(tt,{model:e}))}},rt=function(t){return{"/login":{onmatch:function(){t.state.route("login")},render:function(){return Object(r.default)(I,{model:t},Object(r.default)(et,{model:t}))}},"/register":{onmatch:function(){t.state.route("register")},render:function(){return Object(r.default)(I,{model:t},Object(r.default)(nt,{model:t}))}}}},ot=(n(146),function(t){var e=t.user.id&&window.sessionStorage.getItem("user-token")==t.user["user-token"];return console.log("userLogedIn",e,t.user,window.sessionStorage.getItem("user-token")),e}),at={view:function(t){var e=t.attrs.model;return Object(r.default)(".component",Object(r.default)(U,{model:e}))}},ut={view:function(t){var e=t.attrs.model;return Object(r.default)(".component",Object(r.default)(Q,{model:e}))}},ct=function(t){return{"/:username/groups":{onmatch:function(){t.state.route("groups"),ot(t)},render:function(){return Object(r.default)(I,{model:t},Object(r.default)(at,{model:t}))}},"/:username/:group/events":{onmatch:function(e,n){console.log("args, path",e,n),t.state.route("events"),ot(t)},render:function(){return Object(r.default)(I,{model:t},Object(r.default)(ut,{model:t}))}},"/logout":{onmatch:function(){t.user={},ot(t)},render:function(){return r.default.route(document.body,"/login",rt(t))}}}},it=(n(335),n(336),n(337),document.body);function st(t){return t<668?"phone":t<920?"tablet":"desktop"}var dt=window.innerWidth;c.state.profile=st(dt),"serviceWorker"in navigator&&window.addEventListener("load",function(){navigator.serviceWorker.register("./service-worker.js").then(function(t){console.log("🧟 SW registered: ",t)}).catch(function(t){console.log("⚙️ SW registration failed: ",t)})}),function t(){var e=window.innerWidth;if(dt!==e){dt=e;var n=c.state.profile;c.state.profile=st(e),n!=c.state.profile&&r.default.redraw()}requestAnimationFrame(t)}(),c.user.id?r.default.route(document.body,"/".concat(j(c.user.name),"/groups"),ct(c)):r.default.route(it,"/login",rt(c))}},[[338,1,2]]]);
//# sourceMappingURL=main-0d6454696b41d2e7d9db-chunk.js.map