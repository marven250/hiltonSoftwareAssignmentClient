(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{121:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a(9),c=a.n(r),i=(a(91),a(23)),s=(a(92),a(161)),o=a(162),l=a(156),u=a(165),d=a(160),j=a(19),p=a(150),b=Object(p.a)((function(e){return{selectedPage:{color:"red"},otherPages:{color:""}}})),m=a(3);var f=function(e){for(var t=e.postsPerPage,a=e.totalPosts,n=e.paginate,r=e.currentPage,c=e.setCurrentPage,i=[],s=b(),o=1;o<=Math.ceil(a/t);o++)i.push(o);return Object(m.jsx)("nav",{id:"pagination",children:Object(m.jsxs)("ul",{className:"pagination",children:[Object(m.jsx)("li",{className:"page-item",children:Object(m.jsx)("span",{onClick:function(){c(r>1?r-1:r)},className:"page-link",children:"\xab"})}),i.map((function(e){var t=r==e?s.selectedPage:s.otherPages;if(1==e||e==i.length||e>=r-2&&e<=r+2)return Object(m.jsx)("li",{className:"page-item",children:Object(m.jsx)("span",{onClick:function(){return n(e)},className:t+" page-link",children:e})},e)})),Object(m.jsx)("li",{className:"page-item",children:Object(m.jsx)("span",{onClick:function(){r<i.length?c(r+1):c(r)},className:"page-link",children:"\xbb"})})]})})},h=a(15),x=a.n(h),g=a(24),O=a(44),v=a.n(O),y="https://blooming-spire-52990.herokuapp.com/volcanoes",C=function(){return v.a.get(y)},N=function(e,t){return v.a.put(y+"/"+e,t)},P=function(e){return v.a.delete(y+"/"+e)},k=function(){var e=Object(g.a)(x.a.mark((function e(t){var a,n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C();case 2:return a=e.sent,n=a.data.filter((function(e){return e.name.toLowerCase()==t.name.toLowerCase()})),e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),w=function(){return function(){var e=Object(g.a)(x.a.mark((function e(t){var a,n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,C();case 3:a=e.sent,(n=a.data)&&t({type:"FETCH_ALL",payload:n}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.error(e.t0);case 12:case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}()},S=a(159),A=a(153),E=a(155),B=a(157),L=a(158),D=a(164),F=a(75),T=a.n(F),W=a(74),I=a.n(W),z=Object(p.a)((function(e){return{media:{height:0,paddingTop:"56.25%",backgroundColor:"rgba(0, 0, 0, 0.5)",backgroundBlendMode:"darken"},border:{border:"solid"},fullHeightCard:{height:"100%"},card:{display:"flex",flexDirection:"column",justifyContent:"space-between",borderRadius:"15px",height:"100%",position:"relative",margin:"20px"},overlay:{position:"absolute",top:"40px",color:"white",left:"40px"},details:{display:"flex",justifyContent:"space-between",margin:"20px"},title:{padding:"0 16px"},cardActions:{padding:"0 16px 8px 16px",display:"flex",justifyContent:"space-between"}}})),R=a.p+"static/media/VolcanoErupt.7107718b.png",_=function(e){var t=e.volcano,a=e.setCurrentName,n=e.setSearchBoolean,r=e.getPosts,c=z(),i=Object(j.b)(),s=function(e){i(function(e){return function(){var t=Object(g.a)(x.a.mark((function t(a){return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,P(e);case 3:a({type:"DELETE",payload:e}),t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),console.error(t.t0);case 9:case 10:case"end":return t.stop()}}),t,null,[[0,6]])})));return function(e){return t.apply(this,arguments)}}()}(e)),i(r())};return Object(m.jsxs)(A.a,{className:c.card,children:[Object(m.jsx)(E.a,{className:c.media,image:R,title:t.name}),Object(m.jsxs)("div",{className:c.overlay,children:[Object(m.jsxs)(l.a,{vartiant:"h5",children:["Name: ",t.name]}),Object(m.jsxs)(l.a,{variant:"h6",children:["Type: ",t.type]})]}),Object(m.jsxs)(B.a,{children:[Object(m.jsxs)(l.a,{className:c.details,variant:"body2",color:"textPrimary",children:["isActive: ",JSON.stringify(t.isActive)]}),Object(m.jsxs)(l.a,{className:c.details,variant:"body2",color:"textPrimary",children:["Population: ",t.population]}),Object(m.jsxs)(l.a,{className:c.details,variant:"body2",color:"textPrimary",children:["Description: ",t.description]}),Object(m.jsxs)(l.a,{className:c.details,variant:"body2",color:"textPrimary",children:["Discovered: ",t.discovered]}),Object(m.jsxs)(l.a,{className:c.details,variant:"body2",color:"textPrimary",children:["Latitude: ",t.latitude]}),Object(m.jsxs)(l.a,{className:c.details,variant:"body2",color:"textPrimary",children:["Longitude: ",t.longitude]})]}),Object(m.jsxs)(L.a,{className:c.cardActions,children:[Object(m.jsxs)(D.a,{href:"#form",size:"small",color:"primary",onClick:function(){a(t.name),n(!1)},children:[Object(m.jsx)(I.a,{}),"Edit"]}),Object(m.jsxs)(D.a,{size:"small",color:"secondary",onClick:function(){s(t.name)},children:[Object(m.jsx)(T.a,{fontSize:"small"}),"Delete"]})]})]})},H=Object(p.a)((function(e){return{mainContainer:{display:"flex",alignItems:"center"},smMargin:{margin:e.spacing(1)},actionDiv:{textAlign:"center"}}})),V=function(e){var t=e.setCurrentName,a=e.setSearchBoolean,r=e.getPosts,c=Object(j.c)((function(e){return e.posts})),s=H(),o=Object(n.useState)(1),l=Object(i.a)(o,2),u=l[0],p=l[1],b=Object(n.useState)(6),h=Object(i.a)(b,2),x=h[0],g=(h[1],u*x),O=g-x,v=c.slice(O,g);return v.length?Object(m.jsxs)(d.a,{className:s.containter,container:!0,alignItems:"stretch",spacing:"5",children:[v.map((function(e){return Object(m.jsx)(d.a,{item:!0,xs:12,sm:6,children:Object(m.jsx)(_,{getPosts:r,setSearchBoolean:a,volcano:e,setCurrentName:t})},e._id)})),Object(m.jsx)(f,{setCurrentPage:p,currentPage:u,postsPerPage:x,totalPosts:c.length,paginate:function(e){return p(e)}})]}):Object(m.jsx)(S.a,{})},M=a(14),J=a(82),U=a(163),q=Object(p.a)((function(e){return{root:{"& .MuiTextField-root":{margin:e.spacing(1)}},paper:{padding:e.spacing(2),marginTop:"30px"},form:{display:"flex",flexWrap:"wrap",justifyContent:"center"},fileInput:{width:"97%",margin:"10px 0"},buttonSubmit:{marginBottom:10}}})),G=a(76),K=a.n(G),Q=a(77),X=a.n(Q),Y=a(78),Z=a.n(Y),$=function(e){var t=e.currentName,a=e.setCurrentName,r=e.searchBoolean,c=e.setSearchBoolean,s=e.getPosts,o=q(),u=Object(j.b)(),d=Object(j.c)((function(e){return t?e.posts.find((function(e){return e.name==t})):null})),p=Object(n.useState)({_id:"",index:null,isActive:null,population:"",name:"",description:"",discovered:"",latitude:null,longitude:null,type:""}),b=Object(i.a)(p,2),f=b[0],h=b[1];Object(n.useEffect)((function(){d&&h(d)}),[d]);var O=function(){a(null),h({_id:"",index:"",isActive:"",population:"",name:"",description:"",discovered:"",latitude:"",longitude:"",type:""})},C=function(){u(s())},P=function(){c(!r)};return Object(m.jsxs)(J.a,{id:"form",className:o.paper,children:[r?Object(m.jsx)(K.a,{onClick:P}):Object(m.jsx)(X.a,{onClick:P}),Object(m.jsx)(Z.a,{onClick:C}),Object(m.jsxs)("form",{autoComplete:"off",noValidate:!0,className:"".concat(o.form," ").concat(o.root),onSubmit:function(e){var a,n,c;e.preventDefault(),t?(u((n=t,c=f,function(){var e=Object(g.a)(x.a.mark((function e(t){var a,r;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,N(n,c);case 3:a=e.sent,(r=a.data)&&t({type:"UPDATE",payload:r}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.error(e.t0);case 12:case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}())),C()):r?u((a=f,function(){var e=Object(g.a)(x.a.mark((function e(t){var n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k(a);case 3:(n=e.sent)&&t({type:"SEARCH",payload:n}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}())):(u(function(e){return function(){var t=Object(g.a)(x.a.mark((function t(a){var n,r;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c=e,v.a.post(y,c);case 3:n=t.sent,(r=n.data)&&a({type:"CREATE",payload:r}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),console.error(t.t0);case 12:case 13:case"end":return t.stop()}var c}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}()}(f)),C()),O()},children:[Object(m.jsxs)(l.a,{variant:"h6",children:[t?"Editing":r?"Searching":"Creating"," a Volcano"]}),r?Object(m.jsx)(m.Fragment,{}):Object(m.jsx)(U.a,{name:"isActive",variant:"outlined",label:"isActive",fullWidth:!0,value:f.isActive,onChange:function(e){return h(Object(M.a)(Object(M.a)({},f),{},{isActive:e.target.value}))}}),r?Object(m.jsx)(m.Fragment,{}):Object(m.jsx)(U.a,{name:"population",variant:"outlined",label:"Population",fullWidth:!0,value:f.population,onChange:function(e){return h(Object(M.a)(Object(M.a)({},f),{},{population:e.target.value}))}}),Object(m.jsx)(U.a,{name:"name",variant:"outlined",label:"Name",fullWidth:!0,value:f.name,onChange:function(e){return h(Object(M.a)(Object(M.a)({},f),{},{name:e.target.value}))}}),r?Object(m.jsx)(m.Fragment,{}):Object(m.jsx)(U.a,{name:"description",variant:"outlined",label:"Description",fullWidth:!0,value:f.description,onChange:function(e){return h(Object(M.a)(Object(M.a)({},f),{},{description:e.target.value}))}}),r?Object(m.jsx)(m.Fragment,{}):Object(m.jsx)(U.a,{name:"discovered",variant:"outlined",label:"Discovered",fullWidth:!0,value:f.discovered,onChange:function(e){return h(Object(M.a)(Object(M.a)({},f),{},{discovered:e.target.value}))}}),r?Object(m.jsx)(m.Fragment,{}):Object(m.jsx)(U.a,{name:"latitude",variant:"outlined",label:"Latitude",fullWidth:!0,value:f.latitude,onChange:function(e){return h(Object(M.a)(Object(M.a)({},f),{},{latitude:e.target.value}))}}),r?Object(m.jsx)(m.Fragment,{}):Object(m.jsx)(U.a,{name:"longitude",variant:"outlined",label:"Longitude",fullWidth:!0,value:f.longitude,onChange:function(e){return h(Object(M.a)(Object(M.a)({},f),{},{longitude:e.target.value}))}}),r?Object(m.jsx)(D.a,{className:o.buttonSubmit,variant:"contained",color:"primary",size:"small",type:"submit",fullWidth:!0,children:"Search"}):Object(m.jsx)(D.a,{className:o.buttonSubmit,variant:"contained",color:"primary",size:"large",fullWidth:!0,type:"submit",children:"Submit"}),Object(m.jsx)(D.a,{className:o.buttonSubmit,variant:"contained",color:"secondary",size:"small",onClick:O,fullWidth:!0,children:"Clear"})]})]})},ee=a.p+"static/media/volcano.9fa67366.png",te=Object(p.a)((function(){return{appBar:{borderRadius:15,margin:"30px 0",display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center"},heading:{color:"black"},image:{marginLeft:"15 px"}}}));var ae=function(){var e=te(),t=Object(j.b)(),a=Object(n.useState)(null),r=Object(i.a)(a,2),c=r[0],p=r[1],b=Object(n.useState)(!1),f=Object(i.a)(b,2),h=f[0],x=f[1];return Object(n.useEffect)((function(){t(w())}),[t,c]),Object(m.jsxs)(s.a,{maxWidth:"lg",children:[Object(m.jsxs)(o.a,{className:e.AppBar,position:"static",color:"inherit",children:[Object(m.jsx)(l.a,{className:e.heading,variant:"h2",align:"center",children:"Volcanoes"}),Object(m.jsx)("img",{className:e.image,src:ee,alt:"Volcanoes",height:"80"})]}),Object(m.jsx)(u.a,{in:!0,children:Object(m.jsx)(s.a,{children:Object(m.jsxs)(d.a,{container:!0,justify:"space-between",alignItems:"stretch",spacing:3,children:[Object(m.jsx)(d.a,{item:!0,xs:12,sm:7,children:Object(m.jsx)(V,{getPosts:w,setSearchBoolean:x,setCurrentName:p})}),Object(m.jsx)(d.a,{item:!0,xs:12,sm:4,children:Object(m.jsx)($,{getPosts:w,searchBoolean:h,setSearchBoolean:x,currentName:c,setCurrentName:p})})]})})})]})},ne=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,166)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;a(e),n(e),r(e),c(e),i(e)}))},re=a(36),ce=a(79),ie=a(80),se=Object(re.b)({posts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_ALL":case"SEARCH":return t.payload;case"CREATE":return[].concat(Object(ie.a)(e),[t.payload]);case"UPDATE":return e.map((function(e){return e.name==t.payload._name?t.payload:e}));default:return e}}}),oe=Object(re.d)(se,Object(re.c)(Object(re.a)(ce.a)));c.a.render(Object(m.jsx)(j.a,{store:oe,children:Object(m.jsx)(ae,{})}),document.getElementById("root")),ne()},91:function(e,t,a){},92:function(e,t,a){}},[[121,1,2]]]);
//# sourceMappingURL=main.c5eb97a3.chunk.js.map