(this.webpackJsonpCLIPNOTES=this.webpackJsonpCLIPNOTES||[]).push([[10],{658:function(e,t,n){"use strict";n.r(t),n.d(t,"Bookmarks",(function(){return w}));var i=n(16),o=(n(608),n(609)),r=n.n(o),s=n(71),a=n.n(s),c=(n(278),n(148)),l=n.n(c),u=n(87),d=n(41),p=n(191),f=(n(190),n(90)),v=n.n(f),b=(n(639),n(641)),h=n.n(b),j=n(0),O=n(77),y=n(42),g=n(129),m=n(2),x=h.a.TabPane,k=v.a.Title,w=function(e){var t,n,o,s,c;Object(p.a)(e);var f=Object(j.useContext)(g.b),v=Object(y.g)(),b=Object(d.a)(v,1)[0],w=b.data,A=b.fetching,C=Object(y.c)(),R=Object(d.a)(C,2)[1],S=Object(y.d)(),B=Object(d.a)(S,2)[1],D=Object(y.f)(),F=Object(d.a)(D,1)[0],N=F.data,P=F.fetching,T=function(){var e=Object(u.a)(a.a.mark((function e(t){var n,i;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R({id:t});case 2:i=e.sent,f.hide(),null!==i&&void 0!==i&&null!==(n=i.data)&&void 0!==n&&n.deleteBookmark&&l.a.success({message:"Success",description:"Article was successfully removed from your clipped notes."});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),J=function(){var e=Object(u.a)(a.a.mark((function e(t){var n,i;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B({id:t});case 2:i=e.sent,f.hide(),null!==i&&void 0!==i&&null!==(n=i.data)&&void 0!==n&&n.deleteRepository&&l.a.success({message:"Success",description:"Repository was successfully removed from your clipped notes."});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),L=function(){var e=Object(u.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:f.setModalConfig({title:"Are you sure you?",content:"A small chance of possibility for theis repository to appear again in the trending list. Removing this repository will delete it permanently from your list.",onCancelFunction:function(){return f.hide()},onOkFunction:function(){return J(t)}}),f.show();case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(m.jsxs)("div",{children:[Object(m.jsxs)("div",{className:"page-title",children:[Object(m.jsx)(k,{level:3,children:"Clipped notes"}),Object(m.jsxs)("span",{style:{color:"rgba(0, 0, 0, 0.45)"},children:["List of repositories/articles you've save on your notes."," "]})]}),Object(m.jsx)(r.a,{}),Object(m.jsxs)(h.a,{tabPosition:"left",defaultActiveKey:"1",children:[Object(m.jsx)(x,{tab:"Repositories",children:Object(m.jsx)(O.e,{listData:P?[]:null===N||void 0===N?void 0:N.getRepositories,total:null===N||void 0===N||null===(t=N.getRepositories)||void 0===t?void 0:t.length,onDeleteBookmark:L})},"1"),Object(m.jsx)(x,{tab:"Articles",children:Object(m.jsx)(O.e,{listData:A?[]:null===w||void 0===w||null===(n=w.getUserArticles)||void 0===n||null===(o=n.articles)||void 0===o?void 0:o.map((function(e){return Object(i.a)(Object(i.a)({},e),{},{description:e.author,tag_list:JSON.parse(e.tags)})})),total:null===w||void 0===w||null===(s=w.getUserArticles)||void 0===s||null===(c=s.articles)||void 0===c?void 0:c.length,onDeleteBookmark:function(e){f.setModalConfig({title:"Are you sure you?",content:"A small chance of possibility for this article to appear again in the trending list. Removing this article will delete it permanently from your list.",onCancelFunction:function(){return f.hide()},onOkFunction:function(){return T(e)}}),f.show()}})},"2")]})]})};t.default=w}}]);
//# sourceMappingURL=10.ebf35f1a.chunk.js.map