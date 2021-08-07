(this.webpackJsonpCLIPNOTES=this.webpackJsonpCLIPNOTES||[]).push([[2],{126:function(e,n,t){"use strict";t.d(n,"a",(function(){return o}));var c=t(41),i=t(0),a=t(2),r=Object(i.createContext)(""),o=function(e){var n=e.children,t=Object(i.useState)(!1),o=Object(c.a)(t,2),s=o[0],l=o[1];return Object(a.jsx)(r.Provider,{value:{show:function(){l(!0)},hide:function(){l(!1)},open:s},children:n})};n.b=r},129:function(e,n,t){"use strict";t.d(n,"a",(function(){return o}));var c=t(41),i=t(0),a=t(2),r=Object(i.createContext)(null),o=function(e){var n=e.children,t=Object(i.useState)(!1),o=Object(c.a)(t,2),s=o[0],l=o[1],u=Object(i.useState)({title:null,content:null,onCancelFunction:function(){},onOkFunction:function(){}}),d=Object(c.a)(u,2),j=d[0],b=d[1];return Object(a.jsx)(r.Provider,{value:{open:s,show:function(){l(!0)},hide:function(){l(!1)},setModalConfig:b,modalConfig:j},children:n})};n.b=r},293:function(e,n,t){},296:function(e,n,t){},300:function(e,n,t){},42:function(e,n,t){"use strict";t.d(n,"l",(function(){return A})),t.d(n,"c",(function(){return z})),t.d(n,"d",(function(){return F})),t.d(n,"h",(function(){return $})),t.d(n,"i",(function(){return E})),t.d(n,"k",(function(){return _})),t.d(n,"m",(function(){return Q})),t.d(n,"n",(function(){return H})),t.d(n,"a",(function(){return K})),t.d(n,"g",(function(){return W})),t.d(n,"e",(function(){return V})),t.d(n,"f",(function(){return Z})),t.d(n,"b",(function(){return ee})),t.d(n,"j",(function(){return ne}));var c,i,a,r,o,s,l,u,d,j,b,O,m,f,p,h,x,g,v=t(16),k=t(35),y=t(36),N=t.n(y),C=(t(0),t(29)),I=(t(2),N()(c||(c=Object(k.a)(["\n    fragment Article on Article {\n  id\n  href\n  idno\n  title\n  author\n  tags\n  content\n  avatar\n}\n    "])))),S=N()(i||(i=Object(k.a)(["\n    fragment Interest on Interest {\n  id\n  interest\n}\n    "]))),P=N()(a||(a=Object(k.a)(["\n    fragment Language on Language {\n  id\n  language\n  color\n  value\n}\n    "]))),L=N()(r||(r=Object(k.a)(["\n    fragment Repository on Repository {\n  id\n  title\n  description\n  href\n}\n    "]))),R=N()(o||(o=Object(k.a)(["\n    fragment Response on Res {\n  code\n  message\n}\n    "]))),q=N()(s||(s=Object(k.a)(["\n    fragment User on User {\n  id\n  email\n  first_name\n  last_name\n  avatar\n}\n    "]))),w=N()(l||(l=Object(k.a)(["\n    mutation PostBookmark($input: inputBookmark!) {\n  postBookmark(input: $input) {\n    code\n    message\n    data {\n      ...Article\n    }\n  }\n}\n    ",""])),I);function A(){return C.d(w)}var T=N()(u||(u=Object(k.a)(["\n    mutation DeleteBookmark($id: Int!) {\n  deleteBookmark(id: $id) {\n    code\n    message\n    data {\n      ...Article\n    }\n  }\n}\n    ",""])),I);function z(){return C.d(T)}var B=N()(d||(d=Object(k.a)(["\n    mutation DeleteRepository($id: Int!) {\n  deleteRepository(id: $id)\n}\n    "])));function F(){return C.d(B)}var U=N()(j||(j=Object(k.a)(["\n    mutation Login($options: inputLogin!) {\n  login(options: $options) {\n    user {\n      ...User\n      interests {\n        ...Interest\n      }\n    }\n    errors {\n      field\n      message\n    }\n  }\n}\n    ","\n",""])),q,S);function $(){return C.d(U)}var D=N()(b||(b=Object(k.a)(["\n    mutation Logout {\n  logout\n}\n    "])));function E(){return C.d(D)}var M=N()(O||(O=Object(k.a)(["\n    mutation PatchProfile($options: inputPatchUser!) {\n  patchProfile(options: $options) {\n    user {\n      ...User\n      interests {\n        ...Interest\n      }\n      language {\n        ...Language\n      }\n    }\n  }\n}\n    ","\n","\n",""])),q,S,P);function _(){return C.d(M)}var G=N()(m||(m=Object(k.a)(["\n    mutation PostFeedback($message: String!) {\n  postFeedback(message: $message) {\n    ...Response\n  }\n}\n    ",""])),R);function Q(){return C.d(G)}var Y=N()(f||(f=Object(k.a)(["\n    mutation PostRepository($input: inputRepository!) {\n  postRepository(input: $input) {\n    code\n    message\n    data {\n      ...Repository\n    }\n  }\n}\n    ",""])),L);function H(){return C.d(Y)}var K=N()(p||(p=Object(k.a)(["\n    query GetUserArticles {\n  getUserArticles {\n    articles {\n      ...Article\n    }\n  }\n}\n    ",""])),I);function W(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return C.e(Object(v.a)({query:K},e))}var J=N()(h||(h=Object(k.a)(["\n    query GetLanguage {\n  getLanguages {\n    ...Language\n  }\n}\n    ",""])),P);function V(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return C.e(Object(v.a)({query:J},e))}var X=N()(x||(x=Object(k.a)(["\n    query GetRepositories {\n  getRepositories {\n    ...Repository\n  }\n}\n    ",""])),L);function Z(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return C.e(Object(v.a)({query:X},e))}var ee=N()(g||(g=Object(k.a)(["\n    query Me {\n  me {\n    ...User\n    interests {\n      ...Interest\n    }\n    language {\n      ...Language\n    }\n  }\n}\n    ","\n","\n",""])),q,S,P);function ne(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return C.e(Object(v.a)({query:ee},e))}},457:function(e,n,t){},551:function(e,n,t){},563:function(e,n,t){},581:function(e,n,t){},582:function(e,n,t){},584:function(e,n,t){},585:function(e,n,t){},586:function(e,n,t){},589:function(e,n,t){"use strict";t.r(n);var c=t(0),i=t.n(c),a=t(34),r=t.n(a),o=(t(293),t(294),t(50)),s=t(38),l=(t(65),t(39)),u=t.n(l),d=t(70),j=t.n(d),b=t(87),O=t(41),m=(t(296),t(604)),f=t(77),p=t(42),h=t(273),x=t.n(h),g=t(2),v="".concat("/","images/logo.png"),k=function(e){e.history;var n=Object(p.h)(),t=Object(O.a)(n,2)[1],c=Object(p.j)(),i=Object(O.a)(c,1)[0],a=i.data;if(i.fetching)return Object(g.jsx)(f.f,{});if(null!==a&&void 0!==a&&a.me)return Object(g.jsx)(s.a,{to:"/repositories"});var r=function(){var e=Object(b.a)(j.a.mark((function e(n){var c,i;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:c=n.tokenId,i=n.profileObj,t({options:{email:i.email,tokenId:c}});case 2:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return Object(g.jsx)("div",{className:"login-container",children:Object(g.jsxs)("div",{className:"login-form-container",children:[Object(g.jsx)("div",{className:"logo-container",children:Object(g.jsx)("img",{src:v,alt:"CLIPNOTES"})}),Object(g.jsxs)("div",{className:"login-google",children:[Object(g.jsx)("div",{className:"login-note",children:"Please sign-in using your google account."}),Object(g.jsx)("div",{className:"btn-container",children:Object(g.jsx)(x.a,{clientId:"424430029604-5uck1djtnrj68vp070rf86m1rromhudt.apps.googleusercontent.com",onSuccess:r,onFailure:function(){},render:function(e){return Object(g.jsx)(u.a,{type:"primary",block:!0,size:"large",icon:Object(g.jsx)(m.a,{}),disabled:e.disabled,onClick:e.onClick,children:"Sign in with google"})},buttonText:"Login",cookiePolicy:"single_host_origin"})})]})]})})},y=t(35),N=t(130),C=t(274),I=t(48);function S(e,n,t,c){return e.updateQuery(n,(function(e){return c(t,e)}))}var P,L,R=t(36),q=t.n(R),w=Object(I.a)({url:"".concat("http://localhost:5000","/graphql"),fetchOptions:{credentials:"include"},exchanges:[I.b,Object(C.a)({updates:{Mutation:{login:function(e,n,t,c){S(t,{query:p.b},e,(function(e,n){return e.login.errors?n:{me:e.login.user}}))},patchProfile:function(e,n,t,c){S(t,{query:p.b},e,(function(e,n){return{me:e.patchProfile.user}}))},postBookmark:function(e,n,t,c){S(t,{query:p.a},e,(function(n,c){return null!==e&&void 0!==e&&e.postBookmark.data&&t.updateQuery({query:p.a},(function(n){var t;return n.getUserArticles.articles.push(null===e||void 0===e||null===(t=e.postBookmark)||void 0===t?void 0:t.data),n})),{getUserArticles:{articles:[].concat(Object(N.a)(c.getUserArticles.articles),[n.postBookmark.data])}}}))},deleteBookmark:function(e,n,t,c){S(t,{query:p.a},e,(function(n,c){var i;return null!==e&&void 0!==e&&null!==(i=e.deleteBookmark)&&void 0!==i&&i.data&&t.updateQuery({query:p.a},(function(n){var t=n.getUserArticles.articles.filter((function(n){var t,c;return n.id!==(null===e||void 0===e||null===(t=e.deleteBookmark)||void 0===t||null===(c=t.data)||void 0===c?void 0:c.id)}));return n.getUserArticles.articles=t,n})),{getUserArticles:{articles:c.getUserArticles.articles.filter((function(n){var t,c;return n.id!==(null===e||void 0===e||null===(t=e.deleteBookmark)||void 0===t||null===(c=t.data)||void 0===c?void 0:c.id)}))}}}))},postRepository:function(e,n,t,c){var i=q()(P||(P=Object(y.a)(["\n              query GetRepositories {\n                getRepositories {\n                  ...GetRepositoriesQueryVariables\n                }\n              }\n            "])));t.updateQuery({query:i},(function(n){var t;return null===n||void 0===n||null===(t=n.getRepositories)||void 0===t||t.push(null===e||void 0===e?void 0:e.postRepository),n}))},deleteRepository:function(e,n,t,c){var i=q()(L||(L=Object(y.a)(["\n              query GetRepositories {\n                getRepositories {\n                  id\n                  title\n                  description\n                  href\n                }\n              }\n            "])));t.updateQuery({query:i},(function(e){var t,c,i=null===e||void 0===e||null===(t=e.getRepositories)||void 0===t?void 0:t.findIndex((function(e){return e.id===(null===n||void 0===n?void 0:n.id)}));return null===e||void 0===e||null===(c=e.getRepositories)||void 0===c||c.splice(i,1),e}))}}}}),I.c]}),A=t(29),T=t(129),z=t(126),B=(t(585),i.a.lazy((function(){return Promise.all([t.e(0),t.e(1),t.e(9)]).then(t.bind(null,656))}))),F=i.a.lazy((function(){return Promise.all([t.e(0),t.e(1),t.e(8)]).then(t.bind(null,657))})),U=i.a.lazy((function(){return Promise.all([t.e(6),t.e(10)]).then(t.bind(null,658))})),$=i.a.lazy((function(){return Promise.all([t.e(0),t.e(5)]).then(t.bind(null,659))})),D=i.a.lazy((function(){return t.e(7).then(t.bind(null,660))})),E=function(){return Object(g.jsx)(c.Suspense,{fallback:Object(g.jsx)(f.i,{}),children:Object(g.jsx)(T.a,{children:Object(g.jsx)(z.a,{children:Object(g.jsx)(o.a,{basename:"/",children:Object(g.jsx)(A.b,{value:w,children:Object(g.jsxs)(s.d,{children:[Object(g.jsx)(s.b,{exact:!0,component:k,path:"/"}),Object(g.jsx)(f.j,{exact:!0,component:B,path:"/repositories"}),Object(g.jsx)(f.j,{exact:!0,component:F,path:"/articles"}),Object(g.jsx)(f.j,{exact:!0,component:U,path:"/clipped-notes"}),Object(g.jsx)(f.j,{exact:!0,component:$,path:"/profile"}),Object(g.jsx)(s.b,{component:D})]})})})})})})},M=function(e){e&&e instanceof Function&&t.e(11).then(t.bind(null,661)).then((function(n){var t=n.getCLS,c=n.getFID,i=n.getFCP,a=n.getLCP,r=n.getTTFB;t(e),c(e),i(e),a(e),r(e)}))};t(586);r.a.render(Object(g.jsx)(i.a.StrictMode,{children:Object(g.jsx)(E,{})}),document.getElementById("root")),M()},77:function(e,n,t){"use strict";t.d(n,"h",(function(){return y})),t.d(n,"f",(function(){return P})),t.d(n,"a",(function(){return q})),t.d(n,"e",(function(){return G})),t.d(n,"g",(function(){return H})),t.d(n,"b",(function(){return K})),t.d(n,"c",(function(){return ee})),t.d(n,"i",(function(){return ce})),t.d(n,"j",(function(){return de})),t.d(n,"d",(function(){return we}));var c=t(16),i=t(70),a=t.n(i),r=t(87),o=t(41),s=(t(197),t(71)),l=t.n(s),u=(t(154),t(85)),d=t.n(u),j=t(0),b=t(38),O=t(50),m=(t(300),t(595)),f=t(596),p=t(597),h=t(42),x=t(2),g=d.a.Header,v=l.a.SubMenu,k="".concat("/","images/logo.png"),y=function(e){var n,t,i=e.menus,s=e.submenus,u=Object(b.g)(),d=Object(h.i)(),j=Object(o.a)(d,2)[1],y=Object(h.j)(),N=Object(o.a)(y,1)[0].data,C=function(){var e=Object(r.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j();case 2:window.location.href="/";case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(x.jsxs)(g,{style:{position:"fixed",zIndex:1,width:"100%"},children:[Object(x.jsx)("div",{className:"logo",children:Object(x.jsx)("img",{src:k,alt:"CLIPNOTES"})}),Object(x.jsxs)(l.a,Object(c.a)(Object(c.a)({mode:"horizontal",defaultSelectedKeys:i.some((function(e){return e.link===u.pathname}))?i[i.findIndex((function(e){return e.link===u.pathname}))].label:"bookmarks"},i.findIndex((function(e){return e.link===u.pathname}))>-1?{activeKey:i[i.findIndex((function(e){return e.link===u.pathname}))].label}:{}),{},{children:[i.map((function(e){return Object(x.jsx)(l.a.Item,{icon:e.icon,children:Object(x.jsx)(O.b,{to:e.link,children:e.label})},e.label)})),Object(x.jsxs)(v,{icon:Object(x.jsx)(m.a,{}),title:"".concat(null===N||void 0===N||null===(n=N.me)||void 0===n?void 0:n.first_name," ").concat(null===N||void 0===N||null===(t=N.me)||void 0===t?void 0:t.last_name),style:{float:"right"},className:"profile-submenu",children:[s.map((function(e){return Object(x.jsx)(l.a.Item,{children:Object(x.jsxs)(O.b,{to:e.link,children:[Object(x.jsx)(f.a,{})," ",e.label]})},e.link)})),Object(x.jsxs)(l.a.Item,{onClick:function(){return C()},children:[Object(x.jsx)(p.a,{})," Logout"]},"setting:4")]},"SubMenu")]}))]})},N=(t(280),t(221),t(165),t(144)),C=t.n(N),I=(t(275),t(174),t(128)),S=t.n(I),P=(t(457),function(e){return e.open?Object(x.jsx)("div",{className:"loader-overlay",children:Object(x.jsxs)("div",{className:"loader-container",children:[Object(x.jsx)(S.a,{size:"large"}),Object(x.jsx)("div",{children:"Loading..."})]})}):null}),L=(t(281),t(145)),R=t.n(L),q=function(e){var n=e.menus,t=e.submenus,c=Object(b.g)();return Object(x.jsxs)(R.a,{style:{margin:"16px 0"},children:[Object(x.jsx)(R.a.Item,{children:"Home"}),"/"!==c.pathname&&Object(x.jsx)(R.a.Item,{children:Object(x.jsx)("a",{href:c.pathname,children:n.some((function(e){return e.link===c.pathname}))?n.find((function(e){return e.link===c.pathname})).label:t.find((function(e){return e.link===c.pathname})).label})})]})},w=(t(474),t(272),t(284),t(105)),A=t.n(w),T=(t(276),t(194)),z=t.n(T),B=(t(65),t(39)),F=t.n(B),U=(t(277),t(193)),$=t.n(U),D=t(130),E=t(598),M=t(599),_=t(600),G=(t(551),function(e){var n=e.listData,t=e.onClickBookmark,i=e.articles,a=e.onChangePage,r=e.total,o=e.onDeleteBookmark,s=e.page,l=Object(b.g)(),u=function(e){return i&&i.some((function(n){return n.idno==e.id}))};return Object(x.jsx)(A.a,{itemLayout:"vertical",size:"large",pagination:!!(r&&r>10)&&{onChange:function(e){return a(e)},pageSize:10,total:r||0,current:s,pageSizeOptions:["10"]},locale:{emptyText:Object(x.jsx)(ee,{title:"We can't found any data!",subtitle:"We can't found any articles/repositories that you bookmark."})},dataSource:n,renderItem:function(e){return Object(x.jsxs)(A.a.Item,{className:"list-item",actions:[Object(D.a)(e&&e.tag_list?e.tag_list.map((function(e){return Object(x.jsx)($.a,{color:"geekblue-inverse",children:e},e)})):[])],extra:"/clipped-notes"!==l.pathname?Object(x.jsx)(F.a,Object(c.a)(Object(c.a)(Object(c.a)({type:"link"},u(e)?{className:"btn-warning cursor-default"}:{}),{},{icon:Object(x.jsx)(E.a,{})},t&&!u(e)?{onClick:function(){return t(e)}}:{}),{},{children:u(e)?"Saved":"Save to notes"})):Object(x.jsx)(F.a,{type:"link",icon:Object(x.jsx)(M.a,{}),danger:!0,onClick:function(){o&&o(e.id)},children:"Delete"}),children:[Object(x.jsx)(A.a.Item.Meta,{avatar:e.avatar?Object(x.jsx)(z.a,{src:e.avatar}):Object(x.jsx)(_.a,{}),title:Object(x.jsx)("a",{href:e.href,target:"_blank",rel:"noreferrer",className:"list-title",children:Object(x.jsx)("strong",{children:e.title})}),description:e.description}),e.content]},e.id)}})}),Q=(t(262),t(146)),Y=t.n(Q),H=function(e){var n=e.toggleModal,t=e.onCancel,i=e.title,a=e.open,r=e.content;return Object(x.jsx)(Y.a,Object(c.a)(Object(c.a)({},i?{title:i}:{}),{},{visible:a,onCancel:function(){return t()},footer:[Object(x.jsx)(F.a,{onClick:function(){return n()},children:"OK"},"okay")],children:Object(x.jsx)("p",{children:r})}))},K=function(e){var n=e.title,t=e.content,i=e.open,a=e.onOkFunction,r=e.onCancelFunction;return Object(x.jsx)(Y.a,Object(c.a)(Object(c.a)({},n?{title:n}:{}),{},{visible:i,onCancel:function(){return r()},footer:[Object(x.jsx)(F.a,{onClick:function(){return r()},children:"Cancel"},"cancel"),Object(x.jsx)(F.a,{onClick:function(){return a()},danger:!0,children:"Yes"},"okay")],children:Object(x.jsx)("p",{children:t})}))},W=(t(190),t(90)),J=t.n(W),V=(t(563),J.a.Title),X=J.a.Text,Z="".concat("/","svgs/empty.svg"),ee=function(e){var n=e.title,t=e.subtitle;return Object(x.jsx)("div",{className:"empty-data-container",children:Object(x.jsxs)("div",{className:"emptyImg-container",children:[Object(x.jsx)("img",{src:Z,alt:"Empty data"}),Object(x.jsxs)("div",{className:"empty-text",children:[Object(x.jsx)(V,{level:5,children:n||"No data found!"}),Object(x.jsx)(X,{type:"secondary",children:t||"We can't found any articles that you bookmark."})]})]})})},ne=t(191),te=(t(581),"".concat("/","images/logo.png")),ce=function(e){return Object(ne.a)(e),Object(x.jsx)("div",{className:"page-loader-container",children:Object(x.jsxs)("div",{className:"page-loader",children:[Object(x.jsx)("img",{src:te,alt:"CLIPNOTES"}),Object(x.jsxs)("div",{className:"sk-circle",children:[Object(x.jsx)("div",{className:"sk-circle1 sk-child"}),Object(x.jsx)("div",{className:"sk-circle2 sk-child"}),Object(x.jsx)("div",{className:"sk-circle3 sk-child"}),Object(x.jsx)("div",{className:"sk-circle4 sk-child"}),Object(x.jsx)("div",{className:"sk-circle5 sk-child"}),Object(x.jsx)("div",{className:"sk-circle6 sk-child"}),Object(x.jsx)("div",{className:"sk-circle7 sk-child"}),Object(x.jsx)("div",{className:"sk-circle8 sk-child"}),Object(x.jsx)("div",{className:"sk-circle9 sk-child"}),Object(x.jsx)("div",{className:"sk-circle10 sk-child"}),Object(x.jsx)("div",{className:"sk-circle11 sk-child"}),Object(x.jsx)("div",{className:"sk-circle12 sk-child"})]})]})})},ie=(t(582),t(601)),ae=t(129),re=t(126),oe=d.a.Content,se=[{label:"Repositories",link:"/repositories",icon:Object(x.jsx)(_.a,{})},{label:"Articles",link:"/articles",icon:Object(x.jsx)(ie.a,{})}],le=[{link:"/profile",label:"Profile",icon:Object(x.jsx)(f.a,{})},{link:"/clipped-notes",label:"Clipped notes",icon:Object(x.jsx)(E.a,{})}],ue=function(e){var n=Object(j.useContext)(ae.b),t=Object(j.useContext)(re.b);return Object(x.jsxs)("div",{children:[Object(x.jsx)(P,{open:t.open}),Object(x.jsxs)(d.a,{children:[Object(x.jsx)(K,Object(c.a)({open:n.open},n.modalConfig)),Object(x.jsx)(y,{menus:se,submenus:le}),Object(x.jsxs)(oe,{className:"site-layout",style:{padding:"0 50px",marginTop:64},children:[Object(x.jsx)(q,{menus:se,submenus:le}),Object(x.jsx)("div",{className:"site-layout-background",style:{padding:24,minHeight:380},children:e.children})]})]}),Object(x.jsx)(we,{})]})},de=function(e){var n=e.component,t=e.path,c=Object(h.j)(),i=Object(o.a)(c,1)[0],a=i.data;return i.fetching?Object(x.jsx)(P,{}):null!==a&&void 0!==a&&a.me?Object(x.jsx)(ue,{children:Object(x.jsx)(b.b,{path:t,component:n})}):Object(x.jsx)(b.a,{to:"/"})},je=(t(286),t(268)),be=t.n(je),Oe=(t(287),t(147)),me=t.n(Oe),fe=(t(97),t(64)),pe=t.n(fe),he=(t(278),t(148)),xe=t.n(he),ge=t(267),ve=t.n(ge),ke=t(602),ye=t(603),Ne=t(604),Ce=t(605),Ie=t(606),Se=(t(584),d.a.Footer),Pe=J.a.Paragraph,Le=J.a.Text,Re=C.a.TextArea,qe="".concat("/","images/logo.png"),we=function(){var e=Object(j.useState)(""),n=Object(o.a)(e,2),t=n[0],c=n[1],i=Object(h.m)(),s=Object(o.a)(i,2)[1],l=Object(j.useState)(!1),u=Object(o.a)(l,2),d=u[0],b=u[1],m=function(){var e=Object(r.a)(a.a.mark((function e(n){var i,r,o,l,u,d,j;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),""!==t&&null!==t&&void 0!==t){e.next=3;break}return e.abrupt("return",!1);case 3:return b(!0),e.next=6,s({message:t});case 6:j=e.sent,b(!1),c(""),xe.a[0===(null===j||void 0===j||null===(i=j.data)||void 0===i||null===(r=i.postFeedback)||void 0===r?void 0:r.code)?"warning":"success"]({message:0===(null===j||void 0===j||null===(o=j.data)||void 0===o||null===(l=o.postFeedback)||void 0===l?void 0:l.code)?"Oops! Your feedback was not sent.":"Success!",description:null===j||void 0===j||null===(u=j.data)||void 0===u||null===(d=u.postFeedback)||void 0===d?void 0:d.message});case 10:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(Se,{style:{textAlign:"center"},children:Object(x.jsx)("div",{className:"footer-container",children:Object(x.jsxs)(be.a,{children:[Object(x.jsx)(me.a,{span:8,xs:24,md:12,lg:8,className:"center",children:Object(x.jsxs)("div",{className:"column-container",children:[Object(x.jsx)("div",{className:"footer-logo-container",children:Object(x.jsx)("div",{className:"img-container margin-auto",children:Object(x.jsx)("img",{src:qe,alt:"CLIPNOTES LOGO"})})}),Object(x.jsx)("div",{className:"clipnotes-footer-description",children:Object(x.jsx)(Pe,{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus quos dignissimos veniam ea, corporis repudiandae aperiam animi deserunt nobis nostrum numquam dicta adipisci sint quibusdam quidem itaque repellendus amet illum."})}),Object(x.jsxs)("div",{className:"social-medias-container",children:[Object(x.jsx)(pe.a,{title:"Facebook",children:Object(x.jsx)(F.a,{size:"large",type:"default",shape:"circle",icon:Object(x.jsx)(ke.a,{})})}),Object(x.jsx)(pe.a,{title:"Twitter",children:Object(x.jsx)(F.a,{size:"large",type:"default",shape:"circle",icon:Object(x.jsx)(ye.a,{})})}),Object(x.jsx)(pe.a,{title:"Gmail",children:Object(x.jsx)(F.a,{size:"large",type:"default",shape:"circle",icon:Object(x.jsx)(Ne.a,{})})}),Object(x.jsx)(pe.a,{title:"LinkedIn",children:Object(x.jsx)(F.a,{size:"large",type:"default",shape:"circle",icon:Object(x.jsx)(Ce.a,{})})})]})]})}),Object(x.jsx)(me.a,{span:4,xs:24,md:12,lg:4,children:Object(x.jsxs)("div",{className:"column-container footer-text-align",children:[Object(x.jsx)("div",{className:"navigate-container",children:Object(x.jsx)(Le,{className:"navigate-title",children:"Navigate"})}),Object(x.jsx)("div",{className:"navigate-link",children:Object(x.jsx)(Le,{children:Object(x.jsx)(O.b,{to:"/repositories",children:"Repositories"})})}),Object(x.jsx)("div",{className:"navigate-link",children:Object(x.jsx)(Le,{children:Object(x.jsx)(O.b,{to:"/articles",children:"Articles"})})})]})}),Object(x.jsx)(me.a,{span:12,xs:24,md:12,lg:12,children:Object(x.jsx)("form",{onSubmit:m,children:Object(x.jsxs)("div",{className:"column-container footer-text-align",children:[Object(x.jsx)("div",{className:"navigate-container",children:Object(x.jsx)(Le,{className:"navigate-title",children:"Share your thoughts!"})}),Object(x.jsx)("div",{children:Object(x.jsx)(Re,{maxLength:200,rows:5,showCount:!1,placeholder:"Share me your thoughts about the clipnotes...",onChange:function(e){return function(e){c(e.target.value)}(e)},value:t})}),Object(x.jsx)("div",{className:"submit-container",children:Object(x.jsx)(F.a,{type:"default",icon:Object(x.jsx)(Ie.a,{}),htmlType:"submit",loading:d,children:"Submit"})})]})})})]})})}),Object(x.jsxs)("div",{className:"bottom-footer",children:[Object(x.jsxs)("div",{className:"app-name",children:["\xa9 ",ve()().format("YYYY")," CLIPNOTES"]}),Object(x.jsx)("div",{className:"app-dev",children:"Developed by Lizandro Mayonado."})]})]})}}},[[589,3,4]]]);
//# sourceMappingURL=main.dcedb871.chunk.js.map