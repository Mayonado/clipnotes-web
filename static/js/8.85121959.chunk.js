(this.webpackJsonpCLIPNOTES=this.webpackJsonpCLIPNOTES||[]).push([[8],{616:function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"a",(function(){return o}));var c=n(16),a=function(t,e){return Object(c.a)(Object(c.a)({},t),e)},i=n(618),o=n.n(i).a.create({baseURL:"http://ec2-3-1-73-78.ap-southeast-1.compute.amazonaws.com:5000",headers:{"Content-Type":"application/json"}})},663:function(t,e,n){"use strict";n.r(e),n.d(e,"Articles",(function(){return S}));n(614);var c=n(615),a=n.n(c),i=(n(277),n(195)),o=n.n(i),r=n(71),s=n.n(r),l=n(16),u=n(87),d=n(46),j=n(191),b=(n(192),n(91)),v=n.n(b),p=n(0),O=n(267),f=n.n(O),g=n(616),h=n(78),m=n(41),_=n(636),x=n.n(_),y=n(2),C=v.a.Title,S=function(t){var e,n,c,i,r;Object(j.a)(t);var b=Object(m.j)(),v=Object(d.a)(b,1)[0].data,O=Object(p.useState)(!1),_=Object(d.a)(O,2),S=_[0],k=_[1],A=Object(p.useState)(!1),M=Object(d.a)(A,2),w=M[0],T=M[1],U=Object(p.useState)(1),Y=Object(d.a)(U,2),L=Y[0],D=Y[1],E=Object(m.l)(),I=Object(d.a)(E,2)[1],P=Object(m.g)(),J=Object(d.a)(P,1)[0],N=J.data,z=J.fetching,B=Object(p.useState)([]),F=Object(d.a)(B,2),R=F[0],q=F[1],G=function(){var t=Object(u.a)(s.a.mark((function t(){var e,n,c,a,i,o=arguments;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=o.length>0&&void 0!==o[0]?o[0]:1,T(!0),t.next=4,g.a.get("/get-articles?page=".concat(n,"&userId=").concat(null===v||void 0===v||null===(e=v.me)||void 0===e?void 0:e.id),{headers:{"Content-Type":"application/json"}});case 4:(c=t.sent)&&c.data&&(i=null===c||void 0===c||null===(a=c.data)||void 0===a?void 0:a.articles.map((function(t){var e,n;return Object(l.a)({href:t.url,title:t.title,avatar:null===t||void 0===t||null===(e=t.user)||void 0===e?void 0:e.profile_image,description:"".concat(null===t||void 0===t||null===(n=t.user)||void 0===n?void 0:n.name," - ").concat(f()(t.published_at).format("MMMM DD, YYYY")),content:t.description,user:Object(l.a)({},t.user),comments_count:t.comments_count,tag_list:t.tag_list,public_reactions_count:t.public_reactions_count,positive_reactions_count:t.positive_reactions_count},t)})),q(i)),T(!1);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();Object(p.useEffect)((function(){G(L)}),[L]);var H=function(t){N&&N.getUserArticles&&N.getUserArticles.articles&&(null===N||void 0===N?void 0:N.getUserArticles.articles.length)>10?k(!S):I({input:{href:t.href,idno:t.id.toString(),title:t.title,description:t.description,content:t.content,comments_count:t.comments_count,public_reactions_count:t.public_reactions_count,positive_reactions_count:t.positive_reactions_count,avatar:t.avatar}})},K=Object(p.useMemo)((function(){return x.a.throttle(H,1e3)}),[]),Q=function(){k(!S)};return w?Object(y.jsx)(h.f,{}):Object(y.jsxs)("div",{children:[Object(y.jsxs)("div",{style:{padding:"0 16px"},children:[Object(y.jsx)(C,{level:3,children:"Articles"}),Object(y.jsxs)("span",{style:{color:"rgba(0, 0, 0, 0.45)"},children:["List of articles"," "]}),null!==v&&void 0!==v&&null!==(e=v.me)&&void 0!==e&&null!==(n=e.language)&&void 0!==n&&n.value?Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)("span",{style:{color:"rgba(0, 0, 0, 0.45)"},children:"filtered by\xa0"}),Object(y.jsx)(o.a,{children:null===v||void 0===v||null===(c=v.me)||void 0===c||null===(i=c.language)||void 0===i?void 0:i.language})]}):""]}),Object(y.jsx)(a.a,{}),Object(y.jsx)(h.g,{toggleModal:function(){return Q()},open:S,content:"You've already reached the maximum number of articles to be save.",title:"Cannot save",onCancel:Q}),z?Object(y.jsx)(h.f,{}):Object(y.jsx)(h.e,{listData:R,onClickBookmark:K,articles:null===N||void 0===N||null===(r=N.getUserArticles)||void 0===r?void 0:r.articles,onChangePage:function(t){D(t)},total:100,page:L})]})};e.default=S}}]);
//# sourceMappingURL=8.85121959.chunk.js.map