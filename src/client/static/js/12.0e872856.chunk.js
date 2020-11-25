(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[12,22,37],{128:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return h}));var n=a(21),r=a(0),i=a.n(r),l=a(3),o=a(65),c=a(177),s=a(182),d=a(322),m=a(289),u=a(272),f=a.n(u),p=a(234),g=a(277),b=Object(o.a)((function(e){return{grow:Object(n.a)({margin:20,padding:20,display:"flex",flex:1,width:"100%",flexDirection:"row",justifyContent:"start"},e.breakpoints.down("sm"),{marginTop:20,flexDirection:"column",marginLeft:-10}),title:Object(n.a)({marginRight:30,float:"left"},e.breakpoints.down("sm"),{marginBottom:15,fontSize:20,flex:1,textAlign:"left"}),wrap_1:{display:"flex",flex:1,flexDirection:"row",alignItems:"center",justifyContent:"start"},wrap_2:{display:"flex",flex:1,float:"right"},white:{color:"black"}}}));function h(e){var t=e.number,a=b();return i.a.createElement(i.a.Fragment,null,i.a.createElement(c.a,{elevation:0,className:a.grow},i.a.createElement("div",{className:a.wrap_1},i.a.createElement(s.a,{className:Object(l.a)(a.title,a.white),variant:"h4",noWrap:!0},"Market Data"," "),i.a.createElement(g.a,{badgeContent:t,color:"secondary",style:{marginRight:10}})),i.a.createElement(d.a,{id:"outlined-basic",variant:"outlined",size:"small",className:a.wrap_2,InputProps:{startAdornment:i.a.createElement(m.a,{position:"start"},i.a.createElement(f.a,null))}})),i.a.createElement(p.a,null))}},129:function(e,t,a){"use strict";a.r(t),function(e){a.d(t,"default",(function(){return b}));var n=a(34),r=a(21),i=a(0),l=a.n(i),o=a(65),c=a(182),s=a(118),d=a(20),m=a(176),u=a(224),f=a(79),p=(a(194),Object(f.a)()),g=Object(o.a)((function(e){return{root:{display:"flex",flexWrap:"wrap",justifyContent:"space-around",overflow:"hidden",backgroundColor:e.palette.background.paper},gridList:{width:"100%",height:600},tile:{width:10},icon:{color:"rgba(255, 255, 255, 0.54)",marginRight:5,borderColor:"rgba(255, 255, 255, 0.54)"},paper:Object(r.a)({width:"100%",height:140,display:"flex",flex:1,flexDirection:"column",alignItems:"center",justifyContent:"flex-end",fontSize:14,textAlign:"center"},e.breakpoints.down("sm"),{fontSize:9}),btn:{height:27,margin:"3px 5px",fontSize:9,marginBottom:10},prodDetails:{display:"flex",flex:1,flexDirection:"column",justifyContent:"space-between",color:"black",fontSize:12,margin:"10px 5px",textAlign:"center"},grid:Object(r.a)({marginTop:20},e.breakpoints.down("sm"),{marginTop:10}),items_style:{fontSize:12,fontFamily:"monospace",color:"green","&>b":{color:"#b31d1d",fontFamily:"inherit"}},items_style_farm:{fontSize:12,fontFamily:"monospace",whiteSpace:"nowrap",width:"100%",overflow:"hidden",textOverflow:"ellipsis",color:"gray",padding:"0px 5px",paddingLeft:15,paddingBottom:15,marginTop:-10,textAlign:"left"}}}));function b(e){var t=g(),a=e.data;return console.log(a),l.a.createElement("div",{className:t.root},a.length?l.a.createElement(m.a,{container:!0,spacing:3,style:{padding:20}},a.map((function(e){return l.a.createElement(h,{item:e,key:Math.random()})}))):l.a.createElement("div",null,"No Product Has Been Added To The Database"))}var h=function(t){var a=t.item,r=g(),i=a.pic,o=l.a.useState("/img/singleProductDefault.jpg"),m=Object(n.a)(o,2),f=m[0],b=m[1],h=p.API_URL+"/api/product/stats/"+a._id,E=p.API_URL+"/api/farm/get/"+a.farm,w=Object(u.a)({url:h}),x=w.data,y=w.error,v=w.isValidating,j=Object(u.a)({url:E}).data;return l.a.useEffect((function(){if(i){var t=e.from(i.data,"binary").toString("base64"),a="data:".concat(i.contentType,";base64,").concat(t);b(a)}}),[i]),l.a.createElement("div",{className:"responsive"},l.a.createElement("div",{className:"gallery"},l.a.createElement("img",{src:f,alt:"Cinque Terre",width:"600",height:"400"}),l.a.createElement("div",{className:"desc"},l.a.createElement("div",null,l.a.createElement(c.a,{style:{textTransform:"capitalize",whiteSpace:"nowrap",width:"100%",overflow:"hidden",fontSize:12,textOverflow:"ellipsis"}},a.name),l.a.createElement(d.a,{className:r.btn,variant:"outlined",color:"secondary",size:"small"},"open product")),l.a.createElement("div",{className:r.prodDetails},y?l.a.createElement(l.a.Fragment,null,"GET error!"):l.a.createElement(l.a.Fragment,null,v?l.a.createElement(s.a,{size:20}):l.a.createElement(l.a.Fragment,null,x?l.a.createElement(l.a.Fragment,null,l.a.createElement(c.a,{className:r.items_style},l.a.createElement("b",null,"Quantity"),": ",x.response.quantity),l.a.createElement(c.a,{className:r.items_style},l.a.createElement("b",null,"Price"),": ",x.response.sold)):null)))),j&&j.response&&j.response.name&&l.a.createElement(c.a,{className:r.items_style_farm},"Available @ ",j.response.name,"dddddddddddddddddddddddddddddd")))}}.call(this,a(236).Buffer)},194:function(e,t,a){},224:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var n=a(19),r=a(55),i=a(241),l=a(78),o=a.n(l),c=a(0);function s(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=t.initialData,l=Object(r.a)(t,["initialData"]),s=Object(i.a)(e&&JSON.stringify(e),(function(){return o()(e||{})}),Object(n.a)(Object(n.a)({},l),{},{initialData:a&&{status:200,statusText:"InitialData",headers:a.headers?Object(n.a)({},a.headers):{},data:a}})),d=s.data,m=s.error,u=s.isValidating,f=s.revalidate,p=s.mutate;return Object(c.useMemo)((function(){return{data:d&&d.data,response:d,error:m,isValidating:u,revalidate:f,mutate:p}}),[d,m,u,f,p])}},240:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(291),l=a(182);t.a=function(e){var t=e.color;return r.a.createElement(l.a,{variant:"body2",color:"textSecondary",align:"center",style:{color:t||"black"}},"Copyright \xa9 ",r.a.createElement(i.a,{color:"inherit",href:" "},"Our Team"),(new Date).getFullYear(),".")}},70:function(e,t,a){"use strict";a.r(t);var n=a(21),r=a(0),i=a.n(r),l=a(10),o=a(22),c=a(279),s=a(65),d=a(267),m=a(240),u=a(128),f=a(129),p=a(224),g=a(82),b=a(27),h=a(79),E=Object(h.a)(),w=Object(s.a)((function(e){return{root:Object(n.a)({display:"flex",flex:1,flexDirection:"row"},e.breakpoints.down("sm"),{}),container:Object(n.a)({flex:1,width:"50%"},e.breakpoints.down("sm"),{width:"100%"})}}));t.default=Object(o.b)((function(e){return{user:e.auth.user}}))(Object(l.i)((function(e){var t=w(),a=e.user.token,n=E.API_URL+"/api/product/getall",r=Object(p.a)({url:n,headers:Object(g.a)(a)}),l=r.data,o=r.isValidating,s=0;return l&&l.response&&(s=l.response.length),i.a.createElement("div",{className:t.root},i.a.createElement(d.a,{component:"div",maxWidth:"lg",className:t.container},i.a.createElement(u.default,{number:s}),o?i.a.createElement(b.a,null):i.a.createElement(i.a.Fragment,null,l?i.a.createElement(f.default,{data:l.response}):i.a.createElement(b.a,null)),i.a.createElement(c.a,{mt:8},i.a.createElement(m.a,null))))})))}}]);
//# sourceMappingURL=12.0e872856.chunk.js.map