(this.webpackJsonpbookmark=this.webpackJsonpbookmark||[]).push([[5],{604:function(e,t,n){"use strict";n(605),n(273),n(272)},605:function(e,t,n){},606:function(e,t,n){"use strict";var a=n(3),l=n(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=l(n(13)),r=l(n(18)),c=a(n(0)),o=l(n(4)),u=l(n(607)),s=l(n(610)),d=l(n(41)),f=n(14),v=l(n(121)),m=l(n(184)),b=l(n(274)),j=l(n(81)),g=function(e,t,n){return t&&n?c.createElement(j.default,{componentName:"PageHeader"},(function(a){var l=a.back;return c.createElement("div",{className:"".concat(e,"-back")},c.createElement(b.default,{onClick:function(e){null===n||void 0===n||n(e)},className:"".concat(e,"-back-button"),"aria-label":l},t))})):null},h=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"ltr";return void 0!==e.backIcon?e.backIcon:"rtl"===t?c.createElement(s.default,null):c.createElement(u.default,null)},p=function(e){var t=c.useState(!1),n=(0,r.default)(t,2),a=n[0],l=n[1],u=function(e){var t=e.width;l(t<768)};return c.createElement(f.ConfigConsumer,null,(function(t){var n,l=t.getPrefixCls,r=t.pageHeader,s=t.direction,f=e.prefixCls,b=e.style,j=e.footer,p=e.children,O=e.breadcrumb,x=e.breadcrumbRender,_=e.className,y=!0;"ghost"in e?y=e.ghost:r&&"ghost"in r&&(y=r.ghost);var E=l("page-header",f),w=function(){var e;return(null===(e=O)||void 0===e?void 0:e.routes)?function(e){return c.createElement(v.default,e)}(O):null}(),k=(null===x||void 0===x?void 0:x(e,w))||w,N=(0,o.default)(E,_,(n={"has-breadcrumb":!!k,"has-footer":!!j},(0,i.default)(n,"".concat(E,"-ghost"),y),(0,i.default)(n,"".concat(E,"-rtl"),"rtl"===s),(0,i.default)(n,"".concat(E,"-compact"),a),n));return c.createElement(d.default,{onResize:u},c.createElement("div",{className:N,style:b},k,function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"ltr",a=t.title,l=t.avatar,i=t.subTitle,r=t.tags,o=t.extra,u=t.onBack,s="".concat(e,"-heading"),d=a||i||r||o;if(!d)return null;var f=h(t,n),v=g(e,f,u),b=v||l||d;return c.createElement("div",{className:s},b&&c.createElement("div",{className:"".concat(s,"-left")},v,l&&c.createElement(m.default,l),a&&c.createElement("span",{className:"".concat(s,"-title"),title:"string"===typeof a?a:void 0},a),i&&c.createElement("span",{className:"".concat(s,"-sub-title"),title:"string"===typeof i?i:void 0},i),r&&c.createElement("span",{className:"".concat(s,"-tags")},r)),o&&c.createElement("span",{className:"".concat(s,"-extra")},o))}(E,e,s),p&&function(e,t){return c.createElement("div",{className:"".concat(e,"-content")},t)}(E,p),function(e,t){return t?c.createElement("div",{className:"".concat(e,"-footer")},t):null}(E,j)))}))};t.default=p},607:function(e,t,n){"use strict";var a;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=(a=n(608))&&a.__esModule?a:{default:a};t.default=l,e.exports=l},608:function(e,t,n){"use strict";var a=n(2),l=n(3);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=l(n(0)),r=a(n(609)),c=a(n(28)),o=function(e,t){return i.createElement(c.default,Object.assign({},e,{ref:t,icon:r.default}))};o.displayName="ArrowLeftOutlined";var u=i.forwardRef(o);t.default=u},609:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M872 474H286.9l350.2-304c5.6-4.9 2.2-14-5.2-14h-88.5c-3.9 0-7.6 1.4-10.5 3.9L155 487.8a31.96 31.96 0 000 48.3L535.1 866c1.5 1.3 3.3 2 5.2 2h91.5c7.4 0 10.8-9.2 5.2-14L286.9 550H872c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"}}]},name:"arrow-left",theme:"outlined"}},610:function(e,t,n){"use strict";var a;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=(a=n(611))&&a.__esModule?a:{default:a};t.default=l,e.exports=l},611:function(e,t,n){"use strict";var a=n(2),l=n(3);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=l(n(0)),r=a(n(612)),c=a(n(28)),o=function(e,t){return i.createElement(c.default,Object.assign({},e,{ref:t,icon:r.default}))};o.displayName="ArrowRightOutlined";var u=i.forwardRef(o);t.default=u},612:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 000-48.4z"}}]},name:"arrow-right",theme:"outlined"}},613:function(e,t,n){"use strict";n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return r}));var a=n(17),l=function(e,t){return Object(a.a)(Object(a.a)({},e),t)},i=n(615),r=n.n(i).a.create({baseURL:"http://3.1.73.78/bkmrk-web",headers:{"Content-Type":"application/json"}})},647:function(e,t,n){"use strict";n(32),n(186)},648:function(e,t,n){"use strict";n(32),n(186)},649:function(e,t,n){"use strict";n(32),n(650)},650:function(e,t,n){},651:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(187).Row;t.default=a},652:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(187).Col;t.default=a},658:function(e,t,n){"use strict";n.r(t);n(647);var a=n(651),l=n.n(a),i=(n(72),n(44)),r=n.n(i),c=(n(278),n(190)),o=n.n(c),u=(n(188),n(232)),s=n.n(u),d=(n(648),n(652)),f=n.n(d),v=(n(272),n(184)),m=n.n(v),b=(n(602),n(603)),j=n.n(b),g=(n(604),n(606)),h=n.n(g),p=n(192),O=n(84),x=n.n(O),_=(n(649),n(189)),y=n.n(_),E=n(17),w=n(109),k=(n(280),n(257)),N=n.n(k),I=(n(276),n(217)),L=n.n(I),C=n(49),M=n(601),P=n(0),R=n(45),S=n(613),z=n(5);t.default=function(e){var t,n,a,i,c,u,d,v;Object(M.a)(e);var b=L.a.useForm(),g=Object(C.a)(b,1)[0],O=Object(R.j)(),_=Object(C.a)(O,1)[0],k=_.data,I=(_.fetching,Object(R.e)()),F=Object(C.a)(I,1)[0],H=F.data,A=(F.fetching,Object(R.k)()),B=Object(C.a)(A,2)[1],T=Object(P.useState)(!1),D=Object(C.a)(T,2),J=D[0],q=D[1],U=Object(P.useState)(!1),V=Object(C.a)(U,2),Y=V[0],G=V[1],K=Object(P.useState)({email:null===k||void 0===k||null===(t=k.me)||void 0===t?void 0:t.email,first_name:null===k||void 0===k||null===(n=k.me)||void 0===n?void 0:n.first_name,last_name:null===k||void 0===k||null===(a=k.me)||void 0===a?void 0:a.last_name,interests:null===k||void 0===k||null===(i=k.me)||void 0===i?void 0:i.interests.map((function(e){return e.interest})),languageId:null===k||void 0===k||null===(c=k.me)||void 0===c||null===(u=c.language)||void 0===u?void 0:u.id}),Q=Object(C.a)(K,2),W=Q[0],X=Q[1];Object(P.useEffect)((function(){var e,t,n,a,l,i;g.setFieldsValue({email:null===k||void 0===k||null===(e=k.me)||void 0===e?void 0:e.email,first_name:null===k||void 0===k||null===(t=k.me)||void 0===t?void 0:t.first_name,last_name:null===k||void 0===k||null===(n=k.me)||void 0===n?void 0:n.last_name,interests:null===k||void 0===k||null===(a=k.me)||void 0===a?void 0:a.interests.map((function(e){return e.interest})),languageId:null===k||void 0===k||null===(l=k.me)||void 0===l||null===(i=l.language)||void 0===i?void 0:i.id}),console.log(k)}),[]);var Z=function(){var e=Object(w.a)(x.a.mark((function e(){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(J){e.next=4;break}q(!J),e.next=10;break;case 4:return G(!0),e.next=7,B({options:Object(E.a)({},W)});case 7:y.a.success("Your profile was successfully updated."),G(!1),q(!J);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),$=function(e,t){var n=Object(S.b)(W,Object(p.a)({},t,"languageId"===t?e:e.target.value));X(n)};return Object(z.jsxs)("div",{children:[Object(z.jsx)(h.a,{className:"site-page-header",title:"Profile"}),Object(z.jsx)(j.a,{}),Object(z.jsx)(l.a,{children:Object(z.jsx)(f.a,{offset:2,span:16,children:Object(z.jsx)(L.a,{layout:"vertical",onFinish:function(){return Z()},form:g,children:Object(z.jsxs)(l.a,{children:[Object(z.jsx)(f.a,{span:4,children:Object(z.jsx)(m.a,{size:{xs:24,sm:32,md:40,lg:64,xl:80,xxl:100},shape:"square",src:null===k||void 0===k||null===(d=k.me)||void 0===d?void 0:d.avatar})}),Object(z.jsx)(f.a,{span:12,children:Object(z.jsxs)(l.a,{children:[Object(z.jsx)(f.a,{span:24,children:Object(z.jsx)(L.a.Item,{name:"email",label:"Email",children:Object(z.jsx)(s.a,{size:"middle",readOnly:!0,value:null===k||void 0===k||null===(v=k.me)||void 0===v?void 0:v.email,onChange:function(e){return $(e,"email")}})})}),Object(z.jsx)(f.a,{span:24,children:Object(z.jsx)(L.a.Item,{name:"first_name",label:"First Name",children:Object(z.jsx)(s.a,{size:"middle",readOnly:!J,value:null===W||void 0===W?void 0:W.first_name,onChange:function(e){return $(e,"firstname")}})})}),Object(z.jsx)(f.a,{span:24,children:Object(z.jsx)(L.a.Item,{name:"last_name",label:"Last Name",children:Object(z.jsx)(s.a,{readOnly:!J,value:null===W||void 0===W?void 0:W.last_name,onChange:function(e){return $(e,"lastname")}})})}),Object(z.jsx)(f.a,{span:24,children:Object(z.jsx)(L.a.Item,{name:"interests",label:"Interested in",children:Object(z.jsx)(o.a,{mode:"multiple",showArrow:!0,tagRender:function(e){e.label;var t=e.value,n=e.closable,a=e.onClose;e.color,e.text;return Object(z.jsx)(N.a,{color:null===H||void 0===H?void 0:H.getLanguages[null===H||void 0===H?void 0:H.getLanguages.findIndex((function(e){return e.value===t}))].color,onMouseDown:function(e){e.preventDefault(),e.stopPropagation()},closable:n,onClose:a,style:{marginRight:3},children:null===H||void 0===H?void 0:H.getLanguages[null===H||void 0===H?void 0:H.getLanguages.findIndex((function(e){return e.value===t}))].language})},placeholder:"Select programming language to filter in articles",value:null===W||void 0===W?void 0:W.interests.map((function(e){return e.interest})),onChange:function(e){return function(e){var t=Object(S.b)(W,{interests:e});X(t)}(e)},style:{width:"100%"},options:null===H||void 0===H?void 0:H.getLanguages.map((function(e){return{text:e.language,value:e.value}})),disabled:!J})})}),Object(z.jsx)(f.a,{span:24,children:Object(z.jsx)(L.a.Item,{name:"languageId",children:Object(z.jsx)(o.a,{showSearch:!0,style:{width:"100%"},placeholder:"Select programming language to filter in repositories",optionFilterProp:"children",disabled:!J,value:null===W||void 0===W?void 0:W.languageId,onChange:function(e){return $(e,"languageId")},children:null===H||void 0===H?void 0:H.getLanguages.map((function(e){return Object(z.jsx)(o.a.Option,{value:e.id,children:e.language},e.id)}))})})}),Object(z.jsx)(f.a,{span:24,children:Object(z.jsx)(L.a.Item,{children:Object(z.jsx)(r.a,{type:"primary",htmlType:"submit",loading:Y,children:J?"Save changes":"Edit profile"})})})]})})]})})})})]})}}}]);
//# sourceMappingURL=5.bef0b10d.chunk.js.map