(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[25,32],{122:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return x}));var a=n(21),o=n(0),r=n.n(o),i=n(5),s=n(65),c=n(320),d=n(321),l=n(324),p=n(319),u=n(303),m=n(277),f=Object(i.a)({alternativeLabel:{top:22},active:{backgroundColor:"green","& $line":{backgroundColor:"green"}},completed:{backgroundColor:"green","& $line":{backgroundColor:"green"}},line:{height:3,border:0,backgroundColor:"green",borderRadius:12}})(p.a),b=Object(i.a)((function(e){return{badge:{backgroundColor:"#44b700",color:"#44b700",boxShadow:"0 0 0 2px ".concat(e.palette.background.paper),"&::after":{position:"absolute",top:0,left:0,width:"100%",height:"100%",borderRadius:"50%",animation:"$ripple 1.2s infinite ease-in-out",border:"1px solid currentColor",content:'""'}},"@keyframes ripple":{"0%":{transform:"scale(.8)",opacity:1},"100%":{transform:"scale(2.4)",opacity:0}}}}))(m.a);function g(e){var t=e.icon,n=e.active,a=Object(s.a)({avatar:{color:n?"#1a941f":"#fff",background:n?"#fff":"#1a941f",border:n?"1px solid #1a941f":"1px solid #fff",padding:30},span:{fontSize:14},badge:{}})();return r.a.createElement(b,{overlap:"circle",anchorOrigin:{vertical:"bottom",horizontal:"right"},className:a.badge,variant:n?"dot":"standard"},r.a.createElement(u.a,{className:a.avatar},1===t&&r.a.createElement("span",{className:a.span}," 01 "),2===t&&r.a.createElement("span",{className:a.span}," 02 "),3===t&&r.a.createElement("span",{className:a.span}," 03 "),4===t&&r.a.createElement("span",{className:a.span}," 04 ")))}var y=Object(s.a)((function(e){return{root:Object(a.a)({userSelect:"none",outline:"none",outlineStyle:"none"},e.breakpoints.up("sm"),{width:"100%"}),step:{cursor:"pointer",userSelect:"none",outline:"none",outlineStyle:"none"}}}));function x(e){var t=y(),n=e.activeStep,a=e.onSelectActiveStep,o=e.steps;return r.a.createElement("div",{className:t.root},r.a.createElement(c.a,{nonLinear:!0,activeStep:n},o.map((function(e){return r.a.createElement(d.a,{key:e.id,connector:r.a.createElement(f,null),onClick:function(){return a(e.id)}},r.a.createElement(l.a,{className:t.step,active:n===e.id,icon:e.id,StepIconComponent:g}))}))))}},126:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return m}));var a=n(34),o=n(21),r=n(0),i=n.n(r),s=n(65),c=n(182),d=n(290),l=n(122),p=[{id:1,key:"01",body:"Select your farmshare and complete reservation form."},{id:2,key:"02",body:"Want to do business with us? Reach out to get connected to farmers looking to trade in bulk."},{id:3,key:"03",body:"Consumers are highly considered. Purchase from farmers"},{id:4,key:"04",body:"Look around and help a farmer to help you also! Lets grow Together... INVEST NOW"}],u=Object(s.a)((function(e){return{root:{height:"inherit"},first:Object(o.a)({display:"flex",flex:1,flexDirection:"column",padding:120,paddingBottom:5,justifyContent:"center",alignItems:"center"},e.breakpoints.down("sm"),{padding:5,paddingTop:40}),header:{textAlign:"center"},subheader:Object(o.a)({textAlign:"center",padding:"5px 140px"},e.breakpoints.down("sm"),{padding:"5px 30px",fontSize:13}),stepBodyWrapper:Object(o.a)({display:"flex",flexDirection:"row",padding:"5px 150px"},e.breakpoints.down("sm"),{flexDirection:"column",padding:"5px 10px"}),stepBody1:Object(o.a)({flex:1,color:"#44b700",fontSize:25,fontWeight:500,padding:"10px 100px"},e.breakpoints.down("sm"),{fontSize:22,textAlign:"center",padding:"5px 10px",fontWeight:400}),stepBody2:Object(o.a)({flex:1,fontSize:25,fontWeight:500,padding:"10px 100px",width:"100%"},e.breakpoints.down("sm"),{display:"none"})}}));function m(){var e=u(),t=i.a.useState(1),n=Object(a.a)(t,2),o=n[0],r=n[1];return i.a.createElement("div",{className:e.root},i.a.createElement("div",{className:e.first},i.a.createElement(c.a,{gutterBottom:!0,variant:"h4",className:e.header},"How it works"),i.a.createElement(c.a,{gutterBottom:!0,variant:"body1",className:e.subheader},"Take your pick from the supply chain and participate in agribusiness projects that are backed up only by Agromart, but also by the best land family heritage innovation and overall superior expertise"),i.a.createElement(l.default,{activeStep:o,onSelectActiveStep:function(e){r(e)},steps:p})),i.a.createElement("div",{className:e.stepBodyWrapper},1===o&&i.a.createElement(f,{classes:e,checked:!0,text:p[0].body}),2===o&&i.a.createElement(f,{classes:e,checked:!0,text:p[1].body}),3===o&&i.a.createElement(f,{classes:e,checked:!0,text:p[2].body}),4===o&&i.a.createElement(f,{classes:e,checked:!0,text:p[3].body}),i.a.createElement(c.a,{className:e.stepBody2,gutterBottom:!0},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt .")))}var f=function(e){var t=e.classes,n=e.checked,a=e.text;return i.a.createElement(d.a,{in:n,style:{transitionDelay:"300ms"}},i.a.createElement(c.a,{className:t.stepBody1,gutterBottom:!0},a))}},290:function(e,t,n){"use strict";var a=n(1),o=n(38),r=n(2),i=n(0),s=(n(4),n(119)),c=n(46),d=n(35),l=n(28),p=n(11),u={entering:{transform:"none"},entered:{transform:"none"}},m={enter:c.b.enteringScreen,exit:c.b.leavingScreen},f=i.forwardRef((function(e,t){var n=e.children,c=e.disableStrictModeCompat,f=void 0!==c&&c,b=e.in,g=e.onEnter,y=e.onEntered,x=e.onEntering,h=e.onExit,v=e.onExited,E=e.onExiting,k=e.style,j=e.timeout,O=void 0===j?m:j,S=e.TransitionComponent,w=void 0===S?s.a:S,N=Object(r.a)(e,["children","disableStrictModeCompat","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"]),C=Object(d.a)(),B=C.unstable_strictMode&&!f,T=i.useRef(null),W=Object(p.a)(n.ref,t),z=Object(p.a)(B?T:void 0,W),A=function(e){return function(t,n){if(e){var a=B?[T.current,t]:[t,n],r=Object(o.a)(a,2),i=r[0],s=r[1];void 0===s?e(i):e(i,s)}}},R=A(x),L=A((function(e,t){Object(l.b)(e);var n=Object(l.a)({style:k,timeout:O},{mode:"enter"});e.style.webkitTransition=C.transitions.create("transform",n),e.style.transition=C.transitions.create("transform",n),g&&g(e,t)})),D=A(y),I=A(E),M=A((function(e){var t=Object(l.a)({style:k,timeout:O},{mode:"exit"});e.style.webkitTransition=C.transitions.create("transform",t),e.style.transition=C.transitions.create("transform",t),h&&h(e)})),$=A(v);return i.createElement(w,Object(a.a)({appear:!0,in:b,nodeRef:B?T:void 0,onEnter:L,onEntered:D,onEntering:R,onExit:M,onExited:$,onExiting:I,timeout:O},N),(function(e,t){return i.cloneElement(n,Object(a.a)({style:Object(a.a)({transform:"scale(0)",visibility:"exited"!==e||b?void 0:"hidden"},u[e],k,n.props.style),ref:z},t))}))}));t.a=f}}]);
//# sourceMappingURL=25.2c6b3875.chunk.js.map