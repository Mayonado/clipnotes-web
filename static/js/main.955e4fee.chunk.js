(this.webpackJsonpbookmark=this.webpackJsonpbookmark||[]).push([[1],{126:function(n,e,t){"use strict";t.d(e,"a",(function(){return a}));var i=t(49),o=t(0),r=t(5),c=Object(o.createContext)(null),a=function(n){var e=n.children,t=Object(o.useState)(!1),a=Object(i.a)(t,2),s=a[0],l=a[1],u=Object(o.useState)({title:null,content:null,onCancelFunction:function(){},onOkFunction:function(){}}),d=Object(i.a)(u,2),j=d[0],b=d[1];return Object(r.jsx)(c.Provider,{value:{open:s,show:function(){l(!0)},hide:function(){l(!1)},setModalConfig:b,modalConfig:j},children:e})};e.b=c},286:function(n,e,t){},292:function(n,e,t){},295:function(n,e,t){},45:function(n,e,t){"use strict";t.d(e,"l",(function(){return B})),t.d(e,"c",(function(){return L})),t.d(e,"d",(function(){return S})),t.d(e,"h",(function(){return $})),t.d(e,"i",(function(){return F})),t.d(e,"k",(function(){return T})),t.d(e,"m",(function(){return Q})),t.d(e,"a",(function(){return D})),t.d(e,"g",(function(){return Y})),t.d(e,"e",(function(){return H})),t.d(e,"f",(function(){return W})),t.d(e,"b",(function(){return J})),t.d(e,"j",(function(){return V}));var i,o,r,c,a,s,l,u,d,j,b,f,O,m,p,g,h,v=t(17),x=t(37),k=t(38),y=t.n(k),I=(t(0),t(30)),C=(t(5),y()(i||(i=Object(x.a)(["\n    fragment Article on Article {\n  id\n  href\n  idno\n  title\n  description\n  content\n  comments_count\n  public_reactions_count\n  positive_reactions_count\n  avatar\n}\n    "])))),R=y()(o||(o=Object(x.a)(["\n    fragment Interest on Interest {\n  id\n  interest\n}\n    "]))),_=y()(r||(r=Object(x.a)(["\n    fragment Language on Language {\n  id\n  language\n  color\n  value\n}\n    "]))),q=y()(c||(c=Object(x.a)(["\n    fragment Repository on Repository {\n  id\n  title\n  description\n  href\n}\n    "]))),N=(y()(a||(a=Object(x.a)(["\n    fragment Response on Response {\n  code\n  message\n}\n    "]))),y()(s||(s=Object(x.a)(["\n    fragment User on User {\n  id\n  email\n  first_name\n  last_name\n  avatar\n}\n    "])))),P=y()(l||(l=Object(x.a)(["\n    mutation PostBookmark($input: inputBookmark!) {\n  postBookmark(input: $input) {\n    code\n    message\n    data {\n      ...Article\n    }\n  }\n}\n    ",""])),C);function B(){return I.d(P)}var w=y()(u||(u=Object(x.a)(["\n    mutation DeleteBookmark($id: Int!) {\n  deleteBookmark(id: $id) {\n    code\n    message\n    data {\n      ...Article\n    }\n  }\n}\n    ",""])),C);function L(){return I.d(w)}var A=y()(d||(d=Object(x.a)(["\n    mutation DeleteRepository($id: Int!) {\n  deleteRepository(id: $id)\n}\n    "])));function S(){return I.d(A)}var U=y()(j||(j=Object(x.a)(["\n    mutation Login($options: inputLogin!) {\n  login(options: $options) {\n    user {\n      ...User\n      interests {\n        ...Interest\n      }\n    }\n    errors {\n      field\n      message\n    }\n  }\n}\n    ","\n",""])),N,R);function $(){return I.d(U)}var z=y()(b||(b=Object(x.a)(["\n    mutation Logout {\n  logout\n}\n    "])));function F(){return I.d(z)}var M=y()(f||(f=Object(x.a)(["\n    mutation PatchProfile($options: inputPatchUser!) {\n  patchProfile(options: $options) {\n    user {\n      ...User\n      interests {\n        ...Interest\n      }\n      language {\n        ...Language\n      }\n    }\n  }\n}\n    ","\n","\n",""])),N,R,_);function T(){return I.d(M)}var G=y()(O||(O=Object(x.a)(["\n    mutation PostRepository($input: inputRepository!) {\n  postRepository(input: $input) {\n    code\n    message\n    data {\n      ...Repository\n    }\n  }\n}\n    ",""])),q);function Q(){return I.d(G)}var D=y()(m||(m=Object(x.a)(["\n    query GetUserArticles {\n  getUserArticles {\n    articles {\n      ...Article\n    }\n  }\n}\n    ",""])),C);function Y(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return I.e(Object(v.a)({query:D},n))}var E=y()(p||(p=Object(x.a)(["\n    query GetLanguage {\n  getLanguages {\n    ...Language\n  }\n}\n    ",""])),_);function H(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return I.e(Object(v.a)({query:E},n))}var K=y()(g||(g=Object(x.a)(["\n    query GetRepositories {\n  getRepositories {\n    ...Repository\n  }\n}\n    ",""])),q);function W(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return I.e(Object(v.a)({query:K},n))}var J=y()(h||(h=Object(x.a)(["\n    query Me {\n  me {\n    ...User\n    interests {\n      ...Interest\n    }\n    language {\n      ...Language\n    }\n  }\n}\n    ","\n","\n",""])),N,R,_);function V(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return I.e(Object(v.a)({query:J},n))}},452:function(n,e,t){},548:function(n,e,t){},560:function(n,e,t){},578:function(n,e,t){},579:function(n,e,t){},580:function(n,e,t){},583:function(n,e,t){"use strict";t.r(e);var i=t(0),o=t.n(i),r=t(33),c=t.n(r),a=(t(286),t(287),t(61)),s=t(36),l=(t(72),t(44)),u=t.n(l),d=t(84),j=t.n(d),b=t(109),f=t(49),O=(t(185),t(101)),m=t.n(O),p=(t(292),t(598)),g=t(64),h=t(45),v=t(270),x=t.n(v),k=t(5),y=(m.a.Title,"".concat("/bkmrk-web/","images/logo.png")),I=function(n){n.history;var e=Object(i.useState)({email:null,tokenId:null}),t=Object(f.a)(e,2),o=(t[0],t[1],Object(h.h)()),r=Object(f.a)(o,2)[1],c=Object(h.j)(),a=Object(f.a)(c,1)[0],l=a.data;if(a.fetching)return Object(k.jsx)(g.e,{});if(null!==l&&void 0!==l&&l.me)return Object(k.jsx)(s.a,{to:"/repositories"});var d=function(){var n=Object(b.a)(j.a.mark((function n(e){var t,i;return j.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:t=e.tokenId,i=e.profileObj,e.accessToken,r({options:{email:i.email,tokenId:t}});case 2:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return Object(k.jsxs)("div",{className:"login-container",children:[Object(k.jsx)("div",{className:"login-header"}),Object(k.jsxs)("div",{className:"login-form-container",children:[Object(k.jsx)("div",{className:"logo-container",children:Object(k.jsx)("img",{src:y})}),Object(k.jsxs)("div",{className:"login-google",children:[Object(k.jsx)("div",{className:"login-note",children:"Please sign-in using your google account."}),Object(k.jsx)("div",{className:"btn-container",children:Object(k.jsx)(x.a,{clientId:"424430029604-5uck1djtnrj68vp070rf86m1rromhudt.apps.googleusercontent.com",onSuccess:d,onFailure:function(){},render:function(n){return Object(k.jsx)(u.a,{type:"primary",block:!0,size:"large",icon:Object(k.jsx)(p.a,{}),disabled:n.disabled,onClick:n.onClick,children:"Sign in with google"})},buttonText:"Login",cookiePolicy:"single_host_origin"})})]})]}),Object(k.jsx)("div",{className:"login-footer",children:"C"})]})},C=t(37),R=t(127),_=t(271),q=t(47);function N(n,e,t,i){return n.updateQuery(e,(function(n){return i(t,n)}))}var P,B,w=t(38),L=t.n(w),A=Object(q.a)({url:"".concat("http://3.1.73.78/bkmrk-web","/graphql"),fetchOptions:{credentials:"include"},exchanges:[q.b,Object(_.a)({updates:{Mutation:{login:function(n,e,t,i){N(t,{query:h.b},n,(function(n,e){return n.login.errors?e:(console.log(n.login.user),{me:n.login.user})}))},patchProfile:function(n,e,t,i){N(t,{query:h.b},n,(function(n,e){return console.log(n),{me:n.patchProfile.user}}))},postBookmark:function(n,e,t,i){N(t,{query:h.a},n,(function(e,i){return null!==n&&void 0!==n&&n.postBookmark.data&&t.updateQuery({query:h.a},(function(e){var t;return e.getUserArticles.articles.push(null===n||void 0===n||null===(t=n.postBookmark)||void 0===t?void 0:t.data),e})),{getUserArticles:{articles:[].concat(Object(R.a)(i.getUserArticles.articles),[e.postBookmark.data])}}}))},deleteBookmark:function(n,e,t,i){N(t,{query:h.a},n,(function(e,i){var o;return null!==n&&void 0!==n&&null!==(o=n.deleteBookmark)&&void 0!==o&&o.data&&t.updateQuery({query:h.a},(function(e){var t=e.getUserArticles.articles.filter((function(e){var t,i;return e.id!==(null===n||void 0===n||null===(t=n.deleteBookmark)||void 0===t||null===(i=t.data)||void 0===i?void 0:i.id)}));return e.getUserArticles.articles=t,e})),{getUserArticles:{articles:i.getUserArticles.articles.filter((function(e){var t,i;return e.id!==(null===n||void 0===n||null===(t=n.deleteBookmark)||void 0===t||null===(i=t.data)||void 0===i?void 0:i.id)}))}}}))},postRepository:function(n,e,t,i){var o=L()(P||(P=Object(C.a)(["\n              query GetRepositories {\n                getRepositories {\n                  ...GetRepositoriesQueryVariables\n                }\n              }\n            "])));t.updateQuery({query:o},(function(e){var t;return null===e||void 0===e||null===(t=e.getRepositories)||void 0===t||t.push(null===n||void 0===n?void 0:n.postRepository),e}))},deleteRepository:function(n,e,t,i){var o=L()(B||(B=Object(C.a)(["\n              query GetRepositories {\n                getRepositories {\n                  id\n                  title\n                  description\n                  href\n                }\n              }\n            "])));t.updateQuery({query:o},(function(n){var t,i,o=null===n||void 0===n||null===(t=n.getRepositories)||void 0===t?void 0:t.findIndex((function(n){return n.id===(null===e||void 0===e?void 0:e.id)}));return null===n||void 0===n||null===(i=n.getRepositories)||void 0===i||i.splice(o,1),n}))}}}}),q.c]}),S=t(30),U=t(17),$=(t(194),t(92)),z=t.n($),F=(t(578),t(265)),M=t.n(F),T=t(597),G=t(599),Q=t(126),D=z.a.Content,Y=z.a.Footer,E=[{label:"Repositories",link:"/repositories",icon:Object(k.jsx)(T.a,{})},{label:"Articles",link:"/articles",icon:Object(k.jsx)(G.a,{})}],H=function(n){var e=Object(i.useContext)(Q.b);return Object(k.jsxs)(z.a,{children:[Object(k.jsx)(g.b,Object(U.a)({open:e.open},e.modalConfig)),Object(k.jsx)(g.g,{menus:E}),Object(k.jsxs)(D,{className:"site-layout",style:{padding:"0 50px",marginTop:64},children:[Object(k.jsx)(g.a,{menus:E}),Object(k.jsx)("div",{className:"site-layout-background",style:{padding:24,minHeight:380},children:n.children})]}),Object(k.jsxs)(Y,{style:{textAlign:"center"},children:["\xa9 ",M()().format("YYYY")," CLIPNOTES"]})]})},K=function(n){var e=n.component,t=n.path,i=Object(h.j)(),o=Object(f.a)(i,1)[0],r=o.data;return o.fetching?Object(k.jsx)(g.e,{}):null!==r&&void 0!==r&&r.me?Object(k.jsx)(H,{children:Object(k.jsx)(s.b,{path:t,component:e})}):Object(k.jsx)(s.a,{to:"/"})},W=(t(579),o.a.lazy((function(){return Promise.all([t.e(0),t.e(8)]).then(t.bind(null,655))}))),J=o.a.lazy((function(){return Promise.all([t.e(0),t.e(6)]).then(t.bind(null,656))})),V=o.a.lazy((function(){return Promise.all([t.e(4),t.e(9)]).then(t.bind(null,657))})),X=o.a.lazy((function(){return Promise.all([t.e(0),t.e(5)]).then(t.bind(null,658))})),Z=o.a.lazy((function(){return t.e(7).then(t.bind(null,659))})),nn=function(){return Object(k.jsx)(i.Suspense,{fallback:Object(k.jsx)(g.e,{}),children:Object(k.jsx)(Q.a,{children:Object(k.jsx)(a.a,{basename:"/bkmrk-web/",children:Object(k.jsx)(S.b,{value:A,children:Object(k.jsxs)(s.d,{children:[Object(k.jsx)(s.b,{exact:!0,component:I,path:"/"}),Object(k.jsx)(K,{component:W,path:"/repositories"}),Object(k.jsx)(K,{component:J,path:"/articles"}),Object(k.jsx)(K,{component:V,path:"/bookmarks"}),Object(k.jsx)(K,{component:X,path:"/profile"}),Object(k.jsx)(s.b,{component:Z})]})})})})})},en=function(n){n&&n instanceof Function&&t.e(10).then(t.bind(null,660)).then((function(e){var t=e.getCLS,i=e.getFID,o=e.getFCP,r=e.getLCP,c=e.getTTFB;t(n),i(n),o(n),r(n),c(n)}))};t(580);c.a.render(Object(k.jsx)(o.a.StrictMode,{children:Object(k.jsx)(nn,{})}),document.getElementById("root")),en()},64:function(n,e,t){"use strict";t.d(e,"g",(function(){return R})),t.d(e,"e",(function(){return N})),t.d(e,"a",(function(){return w})),t.d(e,"d",(function(){return W})),t.d(e,"f",(function(){return X})),t.d(e,"b",(function(){return Z})),t.d(e,"c",(function(){return cn}));var i=t(17),o=t(84),r=t.n(o),c=t(109),a=t(49),s=t(142),l=(t(193),t(65)),u=t.n(l),d=(t(194),t(92)),j=t.n(d),b=t(0),f=t.n(b),O=t(36),m=t(61),p=(t(295),t(589)),g=t(590),h=t(591),v=t(592),x=t(45),k=t(5),y=j.a.Header,I=u.a.SubMenu,C="".concat("/bkmrk-web/","images/logo.png"),R=function(n){var e,t,o=n.menus,l=(Object(s.a)(n,["menus"]),Object(O.g)()),d=Object(b.useState)(!1),j=Object(a.a)(d,2),f=(j[0],j[1],Object(x.i)()),R=Object(a.a)(f,2),_=(R[0].fetching,R[1]),q=Object(x.j)(),N=Object(a.a)(q,1)[0],P=N.data,B=(N.fetching,function(){var n=Object(c.a)(r.a.mark((function n(){return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,_();case 2:window.location.reload();case 3:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}());return Object(k.jsxs)(y,{style:{position:"fixed",zIndex:1,width:"100%"},children:[Object(k.jsx)("div",{className:"logo",children:Object(k.jsx)("img",{src:C})}),Object(k.jsxs)(u.a,Object(i.a)(Object(i.a)({mode:"horizontal",defaultSelectedKeys:o.some((function(n){return n.link===l.pathname}))?o[o.findIndex((function(n){return n.link===l.pathname}))].label:"bookmarks"},o.findIndex((function(n){return n.link===l.pathname}))>-1?{activeKey:o[o.findIndex((function(n){return n.link===l.pathname}))].label}:{}),{},{children:[o.map((function(n){return Object(k.jsx)(u.a.Item,{icon:n.icon,children:Object(k.jsx)(m.b,{to:n.link,children:n.label})},n.label)})),Object(k.jsxs)(I,{icon:Object(k.jsx)(p.a,{}),title:"".concat(null===P||void 0===P||null===(e=P.me)||void 0===e?void 0:e.first_name," ").concat(null===P||void 0===P||null===(t=P.me)||void 0===t?void 0:t.last_name),style:{float:"right"},children:[Object(k.jsx)(u.a.Item,{children:Object(k.jsxs)(m.b,{to:"/profile",children:[Object(k.jsx)(g.a,{})," My profile"]})},"profile"),Object(k.jsx)(u.a.Item,{children:Object(k.jsxs)(m.b,{to:"/bookmarks",children:[Object(k.jsx)(h.a,{})," My bookmarks"]})},"bookmarks"),Object(k.jsxs)(u.a.Item,{onClick:function(){return B()},children:[Object(k.jsx)(v.a,{})," Logout"]},"setting:4")]},"SubMenu")]}))]})},_=(t(276),t(217),t(188),t(232),t(167),t(125)),q=t.n(_),N=(t(452),function(n){n.open;return Object(k.jsx)("div",{className:"loader-overlay",children:Object(k.jsxs)("div",{className:"loader-container",children:[Object(k.jsx)(q.a,{size:"large"}),Object(k.jsx)("div",{children:"Loading..."})]})})}),P=(t(273),t(121)),B=t.n(P),w=function(n){var e=n.menus,t=Object(O.g)();return Object(k.jsxs)(B.a,{style:{margin:"16px 0"},children:[Object(k.jsx)(B.a.Item,{children:"Home"}),"/"!==t.pathname&&Object(k.jsx)(B.a.Item,{children:Object(k.jsx)("a",{href:t.pathname,children:e.some((function(n){return n.link===t.pathname}))?e.find((function(n){return n.link===t.pathname})).label:"Bookmarks"})})]})},L=(t(469),t(269),t(279),t(103)),A=t.n(L),S=(t(272),t(184)),U=t.n(S),$=(t(72),t(44)),z=t.n($),F=(t(280),t(257)),M=t.n(F),T=t(127),G=(t(546),t(179)),Q=t.n(G),D=t(593),Y=t(594),E=t(595),H=t(596),K=t(597),W=(t(548),function(n){var e=n.listData,t=n.onClickBookmark,o=n.articles,r=n.onChangePage,c=n.total,a=n.onDeleteBookmark,s=n.page,l=Object(O.g)(),u=function(n){return Object(k.jsxs)(Q.a,{children:[f.a.createElement(n.icon),n.text]})};return Object(k.jsx)(A.a,{itemLayout:"vertical",size:"large",pagination:!!(c&&c>10)&&{onChange:function(n){return r(n)},pageSize:10,total:c||0,current:s},locale:{emptyText:Object(k.jsx)(cn,{title:"We can't found any data!",subtitle:"We can't found any articles/repositories that you bookmark."})},dataSource:e,renderItem:function(n){return Object(k.jsx)(A.a.Item,{actions:[Object(k.jsx)(u,{icon:D.a,text:(null===n||void 0===n?void 0:n.public_reactions_count)||0},"list-vertical-star-o"),Object(k.jsx)(u,{icon:Y.a,text:(null===n||void 0===n?void 0:n.positive_reactions_count)||0},"list-vertical-like-o"),Object(k.jsx)(u,{icon:E.a,text:"".concat(n.comments_count?n.comments_count:0)},"list-vertical-message"),Object(T.a)(n&&n.tag_list?n.tag_list.map((function(n){return Object(k.jsx)(M.a,{color:"geekblue-inverse",children:n},n)})):[])],extra:"/bookmarks"!==l.pathname?Object(k.jsx)(z.a,Object(i.a)(Object(i.a)(Object(i.a)({type:"link"},o&&o.some((function(e){return e.idno==n.id}))?{className:"btn-warning"}:{}),{},{icon:Object(k.jsx)(h.a,{})},t?{onClick:function(){return t(n)}}:{}),{},{children:o&&o.some((function(e){return e.idno==n.id}))?"bookmarked":"bookmark"})):Object(k.jsx)(z.a,{type:"link",icon:Object(k.jsx)(H.a,{}),danger:!0,onClick:function(){a&&a(n.id)}}),children:Object(k.jsx)(A.a.Item.Meta,{avatar:n.avatar?Object(k.jsx)(U.a,{src:n.avatar}):Object(k.jsx)(K.a,{}),title:Object(k.jsx)("a",{href:n.href,target:"_blank",children:n.title}),description:n.description})},n.id)}})}),J=(t(260),t(141)),V=t.n(J),X=function(n){var e=n.toggleModal,t=n.onCancel,o=n.title,r=n.open,c=n.content;return Object(k.jsx)(V.a,Object(i.a)(Object(i.a)({},o?{title:o}:{}),{},{visible:r,onCancel:function(){return t()},footer:[Object(k.jsx)(z.a,{onClick:function(){return e()},children:"OK"},"okay")],children:Object(k.jsx)("p",{children:c})}))},Z=function(n){var e=n.title,t=n.content,o=n.open,r=n.onOkFunction,c=n.onCancelFunction;return Object(k.jsx)(V.a,Object(i.a)(Object(i.a)({},e?{title:e}:{}),{},{visible:o,onCancel:function(){return c()},footer:[Object(k.jsx)(z.a,{onClick:function(){return c()},children:"Cancel"},"cancel"),Object(k.jsx)(z.a,{onClick:function(){return r()},danger:!0,children:"Yes"},"okay")],children:Object(k.jsx)("p",{children:t})}))},nn=(t(185),t(101)),en=t.n(nn),tn=(t(560),en.a.Title),on=en.a.Text,rn="".concat("/bkmrk-web/","svgs/empty.svg"),cn=function(n){var e=n.title,t=n.subtitle;return console.log("this is the title",e),Object(k.jsx)("div",{className:"empty-data-container",children:Object(k.jsxs)("div",{className:"emptyImg-container",children:[Object(k.jsx)("img",{src:rn}),Object(k.jsxs)("div",{className:"empty-text",children:[Object(k.jsx)(tn,{level:5,children:e||"No data found!"}),Object(k.jsx)(on,{type:"secondary",children:t||"We can't found any articles that you bookmark."})]})]})})}}},[[583,2,3]]]);
//# sourceMappingURL=main.955e4fee.chunk.js.map