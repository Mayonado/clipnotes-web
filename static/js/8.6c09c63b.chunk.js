(this.webpackJsonpCLIPNOTES=this.webpackJsonpCLIPNOTES||[]).push([[8],{610:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"a",(function(){return r}));var a=n(16),i=function(t,e){return Object(a.a)(Object(a.a)({},t),e)},c=n(612),r=n.n(c).a.create({baseURL:"http://localhost:5000",headers:{"Content-Type":"application/json"}})},657:function(t,e,n){"use strict";n.r(e),n.d(e,"Articles",(function(){return A}));n(608);var a=n(609),i=n.n(a),c=(n(277),n(193)),r=n.n(c),l=n(70),o=n.n(l),s=n(87),u=n(41),d=n(191),v=(n(190),n(90)),j=n.n(v),b=n(0),f=n(267),O=n.n(f),g=n(610),h=n(77),p=n(42),m=n(621),x=n.n(m),y=n(126),C=n(2),k=j.a.Title,A=function(t){var e,n,a,c,l;Object(d.a)(t);var v=Object(b.useContext)(y.b),j=Object(p.j)(),f=Object(u.a)(j,1)[0].data,m=Object(b.useState)(!1),A=Object(u.a)(m,2),M=A[0],S=A[1],w=Object(p.l)(),T=Object(u.a)(w,2)[1],U=Object(p.g)(),Y=Object(u.a)(U,1)[0],_=Y.data,L=Y.fetching,N=Object(b.useState)([]),D=Object(u.a)(N,2),E=D[0],I=D[1],J=function(){var t=Object(s.a)(o.a.mark((function t(){var e,n,a,i;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return v.show(),t.next=3,g.a.get("/get-articles?userId=".concat(null===f||void 0===f||null===(e=f.me)||void 0===e?void 0:e.id),{headers:{"Content-Type":"application/json"}});case 3:(n=t.sent)&&n.data&&(i=null===n||void 0===n||null===(a=n.data)||void 0===a?void 0:a.articles.map((function(t){var e,n;return{id:t.id,href:t.url,title:t.title,avatar:null===t||void 0===t||null===(e=t.user)||void 0===e?void 0:e.profile_image,description:"".concat(null===t||void 0===t||null===(n=t.user)||void 0===n?void 0:n.name," - ").concat(O()(t.published_at).format("MMMM DD, YYYY")),content:t.description,tag_list:t.tag_list}})),I(i)),v.hide();case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();Object(b.useEffect)((function(){J()}),[]);var P=function(t){_&&_.getUserArticles&&_.getUserArticles.articles&&(null===_||void 0===_?void 0:_.getUserArticles.articles.length)>10?S(!M):T({input:{href:t.href,idno:t.id.toString(),title:t.title,author:t.description,content:t.content,tags:JSON.stringify(t.tag_list),avatar:t.avatar}})},B=Object(b.useMemo)((function(){return x.a.throttle(P,1e3)}),[]),F=function(){S(!M)};return Object(C.jsxs)("div",{children:[Object(C.jsxs)("div",{className:"page-title",children:[Object(C.jsx)(k,{level:3,children:"Articles"}),Object(C.jsxs)("span",{style:{color:"rgba(0, 0, 0, 0.45)"},children:["List of trending articles in dev to "," "]}),null!==f&&void 0!==f&&null!==(e=f.me)&&void 0!==e&&null!==(n=e.language)&&void 0!==n&&n.value?Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)("span",{style:{color:"rgba(0, 0, 0, 0.45)"},children:"filtered by\xa0"}),Object(C.jsx)(r.a,{children:null===f||void 0===f||null===(a=f.me)||void 0===a||null===(c=a.language)||void 0===c?void 0:c.language})]}):""]}),Object(C.jsx)(i.a,{}),Object(C.jsx)(h.g,{toggleModal:function(){return F()},open:M,content:"You've already reached the maximum number of articles to be save.",title:"Cannot save",onCancel:F}),L?Object(C.jsx)(h.f,{}):Object(C.jsx)(h.e,{listData:E,onClickBookmark:B,articles:null===_||void 0===_||null===(l=_.getUserArticles)||void 0===l?void 0:l.articles})]})};e.default=A}}]);
//# sourceMappingURL=8.6c09c63b.chunk.js.map