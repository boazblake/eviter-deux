(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{160:function(t,e){},162:function(t,e){},194:function(t,e){},195:function(t,e){},31:function(t,e,n){"use strict";n.d(e,"c",function(){return r}),n.d(e,"d",function(){return o}),n.d(e,"a",function(){return a}),n.d(e,"b",function(){return u});var r="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1NTUyODM4NTksIm5iZiI6MTU1NTI4Mzg1OSwiZXhwIjoxNTU1MzcwMjU5fQ.jwZa642QeexFDfAA2nUcZe5QXqTf6PtMSSAGY9Bw5Es",o="https://us1.prisma.sh/boaz-blake-8951e1/shindigit/dev",a="dee0eca430c29232f457",u="b659022d58d1c4618afc81585a0d532db3e7d43a"},344:function(t,e){},345:function(t,e){},346:function(t,e){},347:function(t,e,n){"use strict";n.r(e);var r=n(0),o={pages:["login","logout","createEvent",""],user:{id:"",username:""},state:{isLoading:!1,profile:"",tabsShowing:!1,modalShowing:!1,route:"",group:{id:"",name:""},event:{id:"",name:""}},showTabs:function(t){return t.state.tabsShowing=!t.state.tabsShowing},showModal:function(t){return t.state.modalShowing=!t.state.modalShowing},errors:null},a=(n(42),n(348)),u=n(357),i=function(t){return console.warn("checking Auth",{id:t.user.id},Object(a.a)(Object(u.a)(t.user.id))),Object(a.a)(Object(u.a)(t.user.id))},c=function(t){var e=t.attrs.model,n="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z",o="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z",a=function(t){return r.default.render(t,Object(r.default)("path",{xmlns:"http://www.w3.org/2000/svg",d:e.state.tabsShowing?n:o}))};return{oncreate:function(t){var e=t.dom;return a(e)},onupdate:function(t){var e=t.dom;return a(e)},view:function(t){var e=t.attrs.model;return Object(r.default)("svg.btn.hamburger",{style:{fill:e.state.tabsShowing?"white":"inherit"},onclick:function(){return e.showTabs(e)}})}}};var s=function(t){var e=t.dom;e.style.opacity=0,e.classList.toggle("slideRight"),e.style.opacity=1},d=function(t){return function(e){var n=e.dom;n.style.opacity=0,setTimeout(function(){n.classList.toggle("slideDown"),n.style.opacity=1},200*(t+1))}},l=function(t){return function(e){var n=e.dom;n.style.opacity=0,setTimeout(function(){n.classList.toggle(t),n.style.opacity=1},200)}},f=n(355),m=n(349),b=n(350),p=n(351),g=n(352),v=Object(f.a)(Object(m.a)("-"),Object(b.a)(" "),Object(p.a)(),Object(g.a)()),O={view:function(t){var e=t.attrs,n=e.route,o=e.label;return[Object(r.default)("button.Btn",{onclick:function(){return r.default.route.set(n)}},o)]}},j={groups:function(t){return[Object(r.default)(O,{route:"/".concat(t.user.username,"/new-group"),label:"Add Group"})]},landing:function(){return["LANDING PAGE"]},home:function(){return["LANDING PAGE"]},events:function(t){return[Object(r.default)(O,{route:"/".concat(t.user.username,"/groups"),label:"Back to Groups"}),Object(r.default)(O,{route:"/".concat(t.user.username,"/").concat(v(t.state.group.name),"/new-event"),label:"Add Event"})]},newGroup:function(t){return[Object(r.default)(O,{route:"/".concat(t.user.username,"/groups"),label:"Back to Groups"})]},newEvent:function(t){return[Object(r.default)(O,{route:"/".concat(t.user.username,"/groups").concat(v(t.state.group.name)),label:"Back to Group"})]}},h={view:function(t){var e=t.attrs.model;return Object(r.default)(".actions",j[e.state.route](e))}},y={oncreate:l("slideDown"),view:function(t){var e=t.attrs.model;return Object(r.default)("header.header",{id:"header"},[Object(r.default)(c,{model:e}),Object(r.default)(h,{model:e})])}},w={oncreate:l("slideUp"),view:function(){return Object(r.default)("footer.footer",{oncreate:d,id:"footer"},"by Boaz Blake")}},S=function(t){var e=t.attrs.key;return{oncreate:s,view:function(t){var n=t.attrs.tab;return Object(r.default)("a.tab",{key:e,id:"".concat(n),href:"".concat(n),oncreate:r.default.route.link},n)}}},k=function(t){var e=t.attrs.model.pages;return{oncreate:s,view:function(t){var n=t.attrs.model;return Object(r.default)("aside.sidebar slide-left",{id:"sidebar"},e.map(function(t,e){return Object(r.default)(S,{key:e,active:n.state.route==t,tab:t})}))}}},N={oncreate:s,onbeforeremove:function(t){var e=t.dom;return new Promise(function(){return e.classList.remove("slideRight"),setTimeout(function(){e.classList.add("reverseAnimation","slideRight")},200)})},view:function(t){var e=t.children;return Object(r.default)(".navigationModal",e)}},J={view:function(t){var e=t.attrs.children;return Object(r.default)("section.content",{id:"content"},e)}},I=function(t){var e=t.attrs.model;return{view:function(t){var n=t.children;return Object(r.default)("section.layout",{id:"layout"},n?[Object(r.default)(y,{model:e}),"phone"==e.state.profile?e.state.tabsShowing?Object(r.default)(N,Object(r.default)(k,{model:e})):null:Object(r.default)(k,{model:e}),Object(r.default)(J,{model:e,children:n}),Object(r.default)(w,{model:e})]:[])}}},G=n(8),L=n(353),z=n(354),q=n(356),T=function(t){var e=t.email,n=t.password;return Object(a.a)(Object(L.a)(Object(z.a)(e),Object(z.a)(n)))},A=function(t){return function(e){return t.errors=Object(q.a)("message",e)}},B=function(t){return function(e){return Object(G.h)(t)(e).fork(A(t),function(t){return function(e){var n=e.signinUser.user,o=n.id,a=n.username;t.user.id=o,t.user.username=a,t.errors=null,r.default.route.set("/".concat(t.user.username,"/groups/"))}}(t))}},E={view:function(t){var e=t.attrs.model,n=t.state;return Object(r.default)("form.form",{onsubmit:function(t){e.errors=null,t.preventDefault(),T(n)&&B(e)(n)}},[Object(r.default)("fieldset.fieldset",[Object(r.default)("legend","Login"),Object(r.default)("button.card-btn",{id:"btn-login"},"LOGIN"),Object(r.default)(".fields",[Object(r.default)("label",{for:"email"},"email"),Object(r.default)("input",{type:"email",id:"email",name:"login",onchange:function(t){return n.email=t.target.value}}),Object(r.default)("label",{for:"password"},"Password"),Object(r.default)("input",{type:"password",id:"password",name:"login",onchange:function(t){return n.password=t.target.value}})]),Object(r.default)("button[type=submit]",{class:e.state.isLoading?"submitting":"submit"},e.state.isLoading?"Submitting":"Submit"),e.errors?Object(r.default)("p.error",e.errors[0]):""]),Object(r.default)("a",{oncreate:r.default.route.link,href:"/register"},"register")])}},M={oninit:function(t){var e=t.attrs,n=e.model,r=e.key,o=t.state;o.group={},Object(G.e)(n)(r).fork(function(t){return function(e){return t.errors=e}}(o),function(t){return function(e){return function(n){var r=n.Group;return e.group=r,t.state.group=r,e}}}(n)(o))},view:function(t){var e=t.attrs.model,n=t.state;if(n.group.id)return Object(r.default)(".group",{onclick:function(){return r.default.route.set("/".concat(e.user.username,"/").concat(v(n.group.name),"/events"))}},[Object(r.default)("p.title",n.group.name),Object(r.default)("p.groupSize",n.group.members.length)])}},U={oninit:function(t){var e=t.attrs.model,n=t.state;return n.groups=[],function(t){return Object(G.c)(t)}(e).fork(function(t){return function(e){return t.errors=e}}(n),function(t){return function(e){var n=e.allGroups;return t.groups=n}}(n))},view:function(t){var e=t.attrs.model,n=t.state;return Object(r.default)(".groups",n.groups.map(function(t){var n=t.id;return Object(r.default)(M,{model:e,key:n},"id: ".concat(n))}))}},D=n(55),P=["Yes","No","Maybe"],W={oninit:function(t){var e=t.attrs,n=e.key,r=e.model,o=t.state;return Object(G.f)(r)(n).fork(function(t){return function(e){t.err=e,console.log("fail",t)}}(o),function(t){return function(e){var n=e.Invitation,r=n.response,o=n.partySize,a=n.event,u=a.id,i=a.title,c=a.date,s=a.hostedBy.email;return t.invite={response:r,partySize:o,title:i,date:Object(D.format)(c,"MM-DD-YYYY"),email:s,eventId:u},t}}(o))},view:function(t){var e=t.attrs,n=e.key,o=e.model,a=t.state;return a.invite?Object(r.default)(".invite",[Object(r.default)("p.title",a.invite.title),Object(r.default)("p.email",a.invite.email),Object(r.default)("p.date",a.invite.date),Object(r.default)(".rsvps",P.map(function(t){return Object(r.default)("button.button".concat(a.invite.response==t?".isSelected":""),{onclick:function(){a.invite.response=t,function(t){return function(e){return function(n){return Object(G.j)(t)(e)(n)}}}(o)(n)(t)}},t)})),Object(r.default)("p.partySize",a.invite.partySize)]):""}},Y={oninit:function(t){var e=t.attrs.model,n=t.state;n.invites=[],n.errors={},Object(G.d)(e).fork(function(t){return function(e){t.error=e,console.log("fail",t)}}(n),function(t){return function(e){var n=e.allInvitations;return t.invites=n}}(n))},view:function(t){var e=t.attrs.model,n=t.state;return console.log("state",n),Object(r.default)(".attendaces",n.invites.map(function(t){var n=t.id;return Object(r.default)(W,{model:e,key:n},"id: ".concat(n))}))}},x=function(t){return function(e){t.error=e,console.error("error",t)}},C=function(t){return function(e){return console.log("save form",t.state,t.user,e),"newGroup"==t.state.route?Object(G.b)(t)(e).fork(x(e),function(t){return function(e){console.log("saved",t,e),r.default.route.set("/".concat(t.user.username,"/groups"))}}(t)):"newEvent"==t.state.route?Object(G.a)(t)(e).chain(Object(G.g)(t)).fork(x(e),function(t){return function(e){console.log("saved",t,e,"route","/".concat(t.user.username,"/").concat(v(t.state.group.name),"/events")),r.default.route.set("/".concat(t.user.username,"/").concat(v(t.state.group.name),"/events"))}}(t)):(t.state.route,t.state.route,e)}},H={group:function(t){return[Object(r.default)("fieldset.fieldset",[Object(r.default)("legend","Create Group"),Object(r.default)(".fields",[Object(r.default)("label",{for:"name"},"name"),Object(r.default)("input",{type:"text",id:"name",name:"name",onchange:function(e){t.data.name=e.target.value}})]),t.errors?Object(r.default)("p.error",t.errors[0]):""])]},event:function(t){return[Object(r.default)("fieldset.fieldset",[Object(r.default)("legend","Create Event"),Object(r.default)(".fields",[Object(r.default)("label",{for:"title"},"title"),Object(r.default)("input",{type:"text",id:"title",name:"title",onchange:function(e){t.data.title=e.target.value}})]),Object(r.default)(".fields",[Object(r.default)("label",{for:"description"},"description"),Object(r.default)("input",{type:"textarea",id:"description",name:"description",onchange:function(e){t.data.description=e.target.value}})]),Object(r.default)(".fields",[Object(r.default)("label",{for:"location"},"location"),Object(r.default)("input",{type:"textarea",id:"location",name:"location",onchange:function(e){t.data.location=e.target.value}})]),Object(r.default)(".fields",[Object(r.default)("label",{for:"date"},"date"),Object(r.default)("input",{type:"date",id:"date",name:"date",onchange:function(e){t.data.date=Object(D.format)(e.target.value,"GG")}})]),t.errors?Object(r.default)("p.error",t.errors[0]):""])]}},Q={oninit:function(t){var e=t.attrs,n=e.model,r=e.page,o=e.id,a=t.state;return a.form=H[r],a.data={},a.userId=n.user.id,o&&function(t){return function(e){return Object(G.e)(t)(e)}}(n)(o).fork(x(a),function(t){return function(e){return t.data=e}}(a)),a},view:function(t){var e=t.attrs.model,n=t.state;return Object(r.default)("form.form",{onsubmit:function(t){e.errors=null,t.preventDefault(),n.data&&C(e)(n)}},n.form(n),Object(r.default)("button[type=submit]",{class:e.state.isLoading?"submitting":"submit"},e.state.isLoading?"Submitting":"Submit"))}},Z=n(155),X=(n(54),{view:function(t){t.attrs.model;return Object(r.default)(".container",Object(r.default)("button.card-btn",{onclick:function(){return t=new Z.a.WebAuth({domain:"boazblake.auth0.com",clientID:"wly12TyM6CBy5rA90BfNTbh14dgN9KyZ",responseType:"token id_token",scope:"openid",redirectUri:"http://localhost:3000/#!/landing"}),console.log(t),void t.authorize();var t}},"LOG IN WITH GITHUB"))}}),R={view:function(t){var e=t.attrs.model;return Object(r.default)(".component",Object(r.default)(X,{model:e}))}},V={view:function(t){var e=t.attrs.model;return Object(r.default)(".component",Object(r.default)(U,{model:e}))}},_={view:function(t){var e=t.attrs.model;return Object(r.default)(".component",Object(r.default)(Y,{model:e}))}},F={view:function(t){var e=t.attrs,n=e.model,o=e.page,a=e.id;return Object(r.default)(".component",Object(r.default)(Q,{model:n,page:o,id:a}))}},K=(n(344),n(345),n(346),document.body);function $(t){return t<668?"phone":t<920?"tablet":"desktop"}var tt,et=window.innerWidth;o.state.profile=$(et),"serviceWorker"in navigator&&window.addEventListener("load",function(){navigator.serviceWorker.register("./service-worker.js").then(function(t){console.log("🧟 SW registered: ",t)}).catch(function(t){console.log("⚙️ SW registration failed: ",t)})}),function t(){var e=window.innerWidth;if(et!==e){et=e;var n=o.state.profile;o.state.profile=$(e),n!=o.state.profile&&r.default.redraw()}requestAnimationFrame(t)}(),r.default.route(K,"/home",(tt=o,{"/:username/groups":{onmatch:function(t,e){console.log("args, path",t,e),tt.state.route="groups",i(tt)},render:function(){return Object(r.default)(I,{model:tt},Object(r.default)(V,{model:tt}))}},"/:username/new-group":{onmatch:function(t,e){console.log("args, path",t,e),tt.state.route="Event",i(tt)},render:function(){return Object(r.default)(I,{model:tt},Object(r.default)(F,{model:tt,page:"group",id:null}))}},"/:username/edit/:group":{onmatch:function(t,e){console.log("args, path",t,e),tt.state.route="editGroup",i(tt)},render:function(){return Object(r.default)(I,{model:tt},Object(r.default)(F,{model:tt,page:"group",id:"groupId"}))}},"/:username/:group/events":{onmatch:function(t,e){console.log("args, path",t,e),tt.state.route="events",i(tt)},render:function(){return Object(r.default)(I,{model:tt},Object(r.default)(_,{model:tt}))}},"/:username/:group/new-event":{onmatch:function(t,e){console.log("args, path",t,e),tt.state.route="newEvent",i(tt)},render:function(){return Object(r.default)(I,{model:tt},Object(r.default)(F,{model:tt,page:"event",id:null}))}},"/:username/:group/edit/:event":{onmatch:function(t,e){console.log("args, path",t,e),tt.state.route="editEvent",i(tt)},render:function(){return Object(r.default)(I,{model:tt},Object(r.default)(F,{model:tt,page:"event",id:"eventID"}))}},"/logout":{onmatch:function(){tt.user={},i(tt)},render:function(){return Object(r.default)(I,{model:tt},Object(r.default)(E,{model:tt}))}},"/home":{onmatch:function(t,e){return tt.state.route="home",console.log("landed home",t,e)},render:function(){return Object(r.default)(I,{model:tt},Object(r.default)(R,{model:tt}))}}}))},8:function(t,e,n){"use strict";(function(t){n.d(e,"h",function(){return l}),n.d(e,"i",function(){return f}),n.d(e,"c",function(){return m}),n.d(e,"d",function(){return b}),n.d(e,"e",function(){return p}),n.d(e,"b",function(){return g}),n.d(e,"a",function(){return v}),n.d(e,"g",function(){return O}),n.d(e,"f",function(){return j}),n.d(e,"j",function(){return h});var r=n(54),o=n.n(r),a=n(42),u=n.n(a),i=n(31),c="Bearer ".concat(i.c),s=function(t){return function(e){var n=e.data,r=e.errors;return t.state.isLoading=!1,r?Promise.reject(r):Promise.resolve(n)}},d=function(e){return function(n){return e.state.isLoading=!0,new o.a(function(r,o){return t.request({method:"POST",url:i.d,withCredentials:!1,data:(a=n,JSON.parse(JSON.stringify(a))),headers:{Authorization:c}}).then(s(e)).then(o,r);var a})}},l=function(t){return function(e){var n=e.email,r=e.password,o="\n  mutation{signinUser(email:{email:".concat(JSON.stringify(n),",password:").concat(JSON.stringify(r),"}){user{id,username}}}\n  ");return d(t)({query:o})}},f=function(t){return function(e){var n=e.email,r=e.password,o=e.username,a=u.a.genSaltSync(10),i=u.a.hash(r,a),c="mutation CreateUserMutation($email:String!,$passwordHash:String!) {\n  createUser(email:".concat(JSON.stringify(n),",password:").concat(JSON.stringify(i),",username:").concat(JSON.stringify(o),"){id,username}}");return d(t)({query:c})}},m=function(t){var e="query{allGroups(filter:{members_every:{id:".concat(JSON.stringify(t.user.id),"}}){id}}");return d(t)({query:e})},b=function(t){var e="query{allInvitations(filter:{groups_some:{id:".concat(JSON.stringify(t.state.group.id),"}}){id}}");return d(t)({query:e})},p=function(t){return function(e){var n="query{Group(id:".concat(JSON.stringify(e),"){id, name, members {id}}}");return d(t)({query:n})}},g=function(t){return function(e){var n=e.data.name,r="mutation{createGroup(name:".concat(JSON.stringify(n),", membersIds:[").concat(JSON.stringify(t.user.id),"]){id, name, members{id}}}");return d(t)({query:r})}},v=function(t){return function(e){var n=e.data,r=n.title,o=n.description,a=n.location,u=n.date,i="mutation{createEvent(hostedById:".concat(JSON.stringify(t.user.id),",title:").concat(JSON.stringify(r),",description:").concat(JSON.stringify(o),",location:").concat(JSON.stringify(a),",date:").concat(JSON.stringify(u),"){id}}");return d(t)({query:i})}},O=function(t){return function(e){var n=e.createEvent.id,r="mutation{createInvitation(userId:".concat(JSON.stringify(t.user.id),",eventId:").concat(JSON.stringify(n),",partySize:1,response:Yes){id}}");return d(t)({query:r})}},j=function(t){return function(e){var n="query{Invitation(id:".concat(JSON.stringify(e),"){id,partySize,response,event{id, date, title, hostedBy{email} invites{partySize, response}}}}");return d(t)({query:n})}},h=function(t){return function(e){return function(n){var r="mutation{updateInvitation(id:".concat(JSON.stringify(e),",response:").concat(n,"){id,partySize,response,event{id,date,title,hostedBy{email}, invites{partySize, response}}}}");return d(t)({query:r})}}}}).call(this,n(0))}},[[347,1,2]]]);
//# sourceMappingURL=main-da8a386c67b1e2f6b7ca-chunk.js.map