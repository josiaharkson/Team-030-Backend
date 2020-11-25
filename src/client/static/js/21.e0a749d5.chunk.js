(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[21],{128:function(t,e,a){"use strict";a.r(e),a.d(e,"default",(function(){return u}));var n=a(21),r=a(0),i=a.n(r),o=a(3),l=a(65),s=a(177),c=a(182),d=a(322),m=a(289),f=a(272),g=a.n(f),p=a(234),h=a(277),b=Object(l.a)((function(t){return{grow:Object(n.a)({margin:20,padding:20,display:"flex",flex:1,width:"100%",flexDirection:"row",justifyContent:"start"},t.breakpoints.down("sm"),{marginTop:20,flexDirection:"column",marginLeft:-10}),title:Object(n.a)({marginRight:30,float:"left"},t.breakpoints.down("sm"),{marginBottom:15,fontSize:20,flex:1,textAlign:"left"}),wrap_1:{display:"flex",flex:1,flexDirection:"row",alignItems:"center",justifyContent:"start"},wrap_2:{display:"flex",flex:1,float:"right"},white:{color:"black"}}}));function u(t){var e=t.number,a=b();return i.a.createElement(i.a.Fragment,null,i.a.createElement(s.a,{elevation:0,className:a.grow},i.a.createElement("div",{className:a.wrap_1},i.a.createElement(c.a,{className:Object(o.a)(a.title,a.white),variant:"h4",noWrap:!0},"Market Data"," "),i.a.createElement(h.a,{badgeContent:e,color:"secondary",style:{marginRight:10}})),i.a.createElement(d.a,{id:"outlined-basic",variant:"outlined",size:"small",className:a.wrap_2,InputProps:{startAdornment:i.a.createElement(m.a,{position:"start"},i.a.createElement(g.a,null))}})),i.a.createElement(p.a,null))}},234:function(t,e,a){"use strict";var n=a(1),r=a(2),i=a(0),o=(a(4),a(3)),l=a(5),s=a(13),c=i.forwardRef((function(t,e){var a=t.absolute,l=void 0!==a&&a,s=t.classes,c=t.className,d=t.component,m=void 0===d?"hr":d,f=t.flexItem,g=void 0!==f&&f,p=t.light,h=void 0!==p&&p,b=t.orientation,u=void 0===b?"horizontal":b,v=t.role,O=void 0===v?"hr"!==m?"separator":void 0:v,x=t.variant,y=void 0===x?"fullWidth":x,j=Object(r.a)(t,["absolute","classes","className","component","flexItem","light","orientation","role","variant"]);return i.createElement(m,Object(n.a)({className:Object(o.a)(s.root,c,"fullWidth"!==y&&s[y],l&&s.absolute,g&&s.flexItem,h&&s.light,"vertical"===u&&s.vertical),role:O,ref:e},j))}));e.a=Object(l.a)((function(t){return{root:{height:1,margin:0,border:"none",flexShrink:0,backgroundColor:t.palette.divider},absolute:{position:"absolute",bottom:0,left:0,width:"100%"},inset:{marginLeft:72},light:{backgroundColor:Object(s.c)(t.palette.divider,.08)},middle:{marginLeft:t.spacing(2),marginRight:t.spacing(2)},vertical:{height:"100%",width:1},flexItem:{alignSelf:"stretch",height:"auto"}}}),{name:"MuiDivider"})(c)},272:function(t,e,a){"use strict";var n=a(45);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n(a(0)),i=(0,n(a(52)).default)(r.default.createElement("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}),"Search");e.default=i},277:function(t,e,a){"use strict";var n=a(1),r=a(2),i=a(0),o=(a(4),a(3)),l=a(5),s=a(6),c=i.forwardRef((function(t,e){var a=t.anchorOrigin,l=void 0===a?{vertical:"top",horizontal:"right"}:a,c=t.badgeContent,d=t.children,m=t.classes,f=t.className,g=t.color,p=void 0===g?"default":g,h=t.component,b=void 0===h?"span":h,u=t.invisible,v=t.max,O=void 0===v?99:v,x=t.overlap,y=void 0===x?"rectangle":x,j=t.showZero,w=void 0!==j&&j,E=t.variant,C=void 0===E?"standard":E,R=Object(r.a)(t,["anchorOrigin","badgeContent","children","classes","className","color","component","invisible","max","overlap","showZero","variant"]),S=u;null==u&&(0===c&&!w||null==c&&"dot"!==C)&&(S=!0);var N="";return"dot"!==C&&(N=c>O?"".concat(O,"+"):c),i.createElement(b,Object(n.a)({className:Object(o.a)(m.root,f),ref:e},R),d,i.createElement("span",{className:Object(o.a)(m.badge,m["".concat(l.horizontal).concat(Object(s.a)(l.vertical),"}")],m["anchorOrigin".concat(Object(s.a)(l.vertical)).concat(Object(s.a)(l.horizontal)).concat(Object(s.a)(y))],"default"!==p&&m["color".concat(Object(s.a)(p))],S&&m.invisible,"dot"===C&&m.dot)},N))}));e.a=Object(l.a)((function(t){return{root:{position:"relative",display:"inline-flex",verticalAlign:"middle",flexShrink:0},badge:{display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"center",alignContent:"center",alignItems:"center",position:"absolute",boxSizing:"border-box",fontFamily:t.typography.fontFamily,fontWeight:t.typography.fontWeightMedium,fontSize:t.typography.pxToRem(12),minWidth:20,lineHeight:1,padding:"0 6px",height:20,borderRadius:10,zIndex:1,transition:t.transitions.create("transform",{easing:t.transitions.easing.easeInOut,duration:t.transitions.duration.enteringScreen})},colorPrimary:{backgroundColor:t.palette.primary.main,color:t.palette.primary.contrastText},colorSecondary:{backgroundColor:t.palette.secondary.main,color:t.palette.secondary.contrastText},colorError:{backgroundColor:t.palette.error.main,color:t.palette.error.contrastText},dot:{borderRadius:4,height:8,minWidth:8,padding:0},anchorOriginTopRightRectangle:{top:0,right:0,transform:"scale(1) translate(50%, -50%)",transformOrigin:"100% 0%","&$invisible":{transform:"scale(0) translate(50%, -50%)"}},anchorOriginBottomRightRectangle:{bottom:0,right:0,transform:"scale(1) translate(50%, 50%)",transformOrigin:"100% 100%","&$invisible":{transform:"scale(0) translate(50%, 50%)"}},anchorOriginTopLeftRectangle:{top:0,left:0,transform:"scale(1) translate(-50%, -50%)",transformOrigin:"0% 0%","&$invisible":{transform:"scale(0) translate(-50%, -50%)"}},anchorOriginBottomLeftRectangle:{bottom:0,left:0,transform:"scale(1) translate(-50%, 50%)",transformOrigin:"0% 100%","&$invisible":{transform:"scale(0) translate(-50%, 50%)"}},anchorOriginTopRightCircle:{top:"14%",right:"14%",transform:"scale(1) translate(50%, -50%)",transformOrigin:"100% 0%","&$invisible":{transform:"scale(0) translate(50%, -50%)"}},anchorOriginBottomRightCircle:{bottom:"14%",right:"14%",transform:"scale(1) translate(50%, 50%)",transformOrigin:"100% 100%","&$invisible":{transform:"scale(0) translate(50%, 50%)"}},anchorOriginTopLeftCircle:{top:"14%",left:"14%",transform:"scale(1) translate(-50%, -50%)",transformOrigin:"0% 0%","&$invisible":{transform:"scale(0) translate(-50%, -50%)"}},anchorOriginBottomLeftCircle:{bottom:"14%",left:"14%",transform:"scale(1) translate(-50%, 50%)",transformOrigin:"0% 100%","&$invisible":{transform:"scale(0) translate(-50%, 50%)"}},invisible:{transition:t.transitions.create("transform",{easing:t.transitions.easing.easeInOut,duration:t.transitions.duration.leavingScreen})}}}),{name:"MuiBadge"})(c)},289:function(t,e,a){"use strict";var n=a(1),r=a(2),i=a(0),o=(a(4),a(3)),l=a(182),s=a(5),c=a(249),d=i.forwardRef((function(t,e){var a=t.children,s=t.classes,d=t.className,m=t.component,f=void 0===m?"div":m,g=t.disablePointerEvents,p=void 0!==g&&g,h=t.disableTypography,b=void 0!==h&&h,u=t.position,v=t.variant,O=Object(r.a)(t,["children","classes","className","component","disablePointerEvents","disableTypography","position","variant"]),x=Object(c.b)()||{},y=v;return v&&x.variant,x&&!y&&(y=x.variant),i.createElement(c.a.Provider,{value:null},i.createElement(f,Object(n.a)({className:Object(o.a)(s.root,d,p&&s.disablePointerEvents,x.hiddenLabel&&s.hiddenLabel,"filled"===y&&s.filled,{start:s.positionStart,end:s.positionEnd}[u],"dense"===x.margin&&s.marginDense),ref:e},O),"string"!==typeof a||b?a:i.createElement(l.a,{color:"textSecondary"},a)))}));e.a=Object(s.a)({root:{display:"flex",height:"0.01em",maxHeight:"2em",alignItems:"center",whiteSpace:"nowrap"},filled:{"&$positionStart:not($hiddenLabel)":{marginTop:16}},positionStart:{marginRight:8},positionEnd:{marginLeft:8},disablePointerEvents:{pointerEvents:"none"},hiddenLabel:{},marginDense:{}},{name:"MuiInputAdornment"})(d)}}]);
//# sourceMappingURL=21.e0a749d5.chunk.js.map