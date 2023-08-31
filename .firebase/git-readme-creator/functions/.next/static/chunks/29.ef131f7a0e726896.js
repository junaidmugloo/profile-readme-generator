"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[29],{8394:function(e,t,r){r.d(t,{M:function(){return b}});var n=r(29),i=r(7794),s=r.n(i),c=r(7294),a=r(2905),o=r(2134),u=r(7742),l=r(186),p=r(6204),f=r(2312),d=c.forwardRef((function(e,t){return c.createElement(f.r,(0,p.Z)({iconAttrs:{fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"},iconVerticalAlign:"middle",iconViewBox:"0 0 24 24"},e,{ref:t}),c.createElement("circle",{cx:12,cy:12,r:10}),c.createElement("line",{x1:12,x2:12,y1:8,y2:12}),c.createElement("line",{x1:12,x2:12.01,y1:16,y2:16}))}));d.displayName="AlertCircle";var g=r(1368),h=l.ZP.form.withConfig({displayName:"styles__Container",componentId:"sc-18s8kwg-0"})(["",""],(function(e){var t=e.theme;return(0,l.iv)(["width:min(100%,30rem);margin-inline:auto;text-align:center;display:grid;grid:'icon text' 'input input' / 2.4rem 1fr;row-gap:",";"],t.spacings.large)})),m=(0,l.ZP)(d).withConfig({displayName:"styles__AlertIcon",componentId:"sc-18s8kwg-1"})(["",""],(function(e){var t=e.theme;return(0,l.iv)(["color:",";grid-area:icon;"],t.colors.tertiary)})),v=l.ZP.p.withConfig({displayName:"styles__Text",componentId:"sc-18s8kwg-2"})(["grid-area:text;"]),y=(0,l.ZP)(g.Jc).withConfig({displayName:"styles__Input",componentId:"sc-18s8kwg-3"})(["grid-area:input;"]),w=r(5893),b=function(e){var t=e.children,r=e.sectionId,i=(0,c.useRef)(null),l=(0,c.useState)(""),p=l[0],f=l[1],d=(0,c.useState)(!1),g=d[0],b=d[1],x=(0,o.$P)().previewMode,j=(0,o.rV)().settings.user.github,O=function(){var e=(0,n.Z)(s().mark((function e(t){var r,n,c,o;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),r=i.current,n=r.value,c=void 0===n?"":n){e.next=4;break}return e.abrupt("return");case 4:return b(!0),e.next=7,fetch("".concat("https://api.github.com/users/").concat(c));case 7:if(o=e.sent,b(!1),o.ok){e.next=12;break}return f("User not found"),e.abrupt("return");case 12:a.U.settings.edit({path:"user.github",value:c});case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return(0,c.useEffect)((function(){if(!x){var e=j?u.CanvasStatesEnum.DEFAULT:u.CanvasStatesEnum.ALERT;setTimeout((function(){a.U.canvas.edit({id:r,path:"state",value:e})}))}}),[j]),(0,w.jsx)(w.Fragment,{children:j?(0,w.jsx)(w.Fragment,{children:t}):(0,w.jsxs)(h,{onSubmit:O,children:[(0,w.jsx)(m,{size:24}),(0,w.jsxs)(v,{children:["To use this section, please tell us your",(0,w.jsx)("br",{}),"github username."]}),(0,w.jsx)(y,{error:p,ref:i,label:"Github username",placeholder:"Your github username",disabled:g})]})})}},6029:function(e,t,r){r.r(t),r.d(t,{StatsSection:function(){return h}});var n=r(9499),i=r(4730),s=r(6835),c=r(8394),a=r(2134),o=r(2908),u=r(186),l=u.ZP.div.withConfig({displayName:"styles__Container",componentId:"sc-1yygg0c-0"})(["",""],(function(e){var t=e.theme,r=e.align,n=void 0===r?"center":r,i=e.direction,s=void 0===i?"row":i;return(0,u.iv)(["display:flex;flex-wrap:wrap;justify-content:",";flex-direction:",";gap:",";img{max-width:100%;}"],n,s,t.spacings.xsmall)})),p=r(5893),f=["height","show"];function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function g(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var h=function(e){var t=e.id,r=e.content,n=e.styles,u=(0,a.rV)().settings,d=r.graphs,h=u.user.github;return(0,p.jsx)(c.M,{sectionId:t,children:(0,p.jsx)(l,g(g({},n),{},{children:Object.entries(d).map((function(e){var t=(0,s.Z)(e,2),r=t[0],n=t[1],c=(0,o.rs)(r,h),a=g({},n),u=a.height,l=void 0===u?"":u,d=a.show,m=void 0!==d&&d,v=(0,i.Z)(a,f);if(!r||!m)return null;var y="".concat(c,"&").concat((0,o._A)(v));return(0,p.jsx)("img",{height:l||150,src:y,alt:"".concat(r," graph")},r)}))}))})}}}]);