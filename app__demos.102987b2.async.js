"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[3811],{682582:function(j,l,t){t.d(l,{Z:function(){return V}});var P=t(97857),s=t.n(P),c=t(805574),a=t.n(c),n=t(294184),f=t.n(n),o=t(667294),i=t(73287),m=t(215570),d=t(578898),u=t(890887),r=o.createContext({}),v=o.createContext({message:{},notification:{},modal:{}}),g=v,C=t(9783),W=t.n(C),H=t(141035),z=function(e){var A=e.componentCls,y=e.colorText,E=e.fontSize,O=e.lineHeight,p=e.fontFamily;return W()({},A,{color:y,fontSize:E,lineHeight:O,fontFamily:p})},F=(0,H.Z)("App",function(M){return[z(M)]}),h=t(785893),$=function(){return o.useContext(g)},N=function(e){var A=e.prefixCls,y=e.children,E=e.className,O=e.rootClassName,p=e.message,Z=e.notification,G=e.style,J=(0,o.useContext)(i.E_),Q=J.getPrefixCls,T=Q("app",A),X=F(T),L=a()(X,2),Y=L[0],w=L[1],b=f()(w,T,E,O),x=(0,o.useContext)(r),D=o.useMemo(function(){return{message:s()(s()({},x.message),p),notification:s()(s()({},x.notification),Z)}},[p,Z,x.message,x.notification]),k=(0,m.Z)(D.message),S=a()(k,2),B=S[0],q=S[1],_=(0,u.Z)(D.notification),I=a()(_,2),R=I[0],tt=I[1],nt=(0,d.Z)(),K=a()(nt,2),U=K[0],et=K[1],at=o.useMemo(function(){return{message:B,notification:R,modal:U}},[B,R,U]);return Y((0,h.jsx)(g.Provider,{value:at,children:(0,h.jsx)(r.Provider,{value:D,children:(0,h.jsxs)("div",{className:b,style:G,children:[et,q,tt,y]})})}))};N.useApp=$;var V=N},192888:function(j,l,t){t.r(l);var P=t(667294),s=t(682582),c=t(945016),a=t(905303),n=t(785893),f=function(){var i=s.Z.useApp(),m=i.message,d=i.modal,u=i.notification,r=function(){m.success("Success!")},v=function(){d.warning({title:"This is a warning message",content:"some messages...some messages..."})},g=function(){u.info({message:"Notification topLeft",description:"Hello, Ant Design!!",placement:"topLeft"})};return(0,n.jsxs)(c.Z,{children:[(0,n.jsx)(a.ZP,{type:"primary",onClick:r,children:"Open message"}),(0,n.jsx)(a.ZP,{type:"primary",onClick:v,children:"Open modal"}),(0,n.jsx)(a.ZP,{type:"primary",onClick:g,children:"Open notification"})]})};l.default=function(){return(0,n.jsx)(s.Z,{children:(0,n.jsx)(f,{})})}},798294:function(j,l,t){t.r(l);var P=t(667294),s=t(682582),c=t(945016),a=t(905303),n=t(785893),f=function(){var i=s.Z.useApp(),m=i.message,d=i.notification,u=function(){m.success("Success!")},r=function(){d.info({message:"Notification",description:"Hello, Ant Design!!"})};return(0,n.jsxs)(c.Z,{children:[(0,n.jsx)(a.ZP,{type:"primary",onClick:u,children:"Message for only one"}),(0,n.jsx)(a.ZP,{type:"primary",onClick:r,children:"Notification for bottomLeft"})]})};l.default=function(){return(0,n.jsx)(s.Z,{message:{maxCount:1},notification:{placement:"bottomLeft"},children:(0,n.jsx)(f,{})})}}}]);
