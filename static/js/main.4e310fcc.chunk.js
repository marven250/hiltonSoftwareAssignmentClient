(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{121:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(9),c=n.n(r),i=(n(91),n(23)),s=(n(92),n(161)),o=n(162),l=n(156),u=n(165),d=n(160),j=n(17),p=n(150),b=Object(p.a)((function(e){return{selectedPage:{color:"red"},otherPages:{color:""}}})),m=n(3);var f=function(e){for(var t=e.postsPerPage,n=e.totalPosts,a=e.paginate,r=e.currentPage,c=e.setCurrentPage,i=[],s=b(),o=1;o<=Math.ceil(n/t);o++)i.push(o);return Object(m.jsx)("nav",{id:"pagination",children:Object(m.jsxs)("ul",{className:"pagination",children:[Object(m.jsx)("li",{className:"page-item",children:Object(m.jsx)("span",{onClick:function(){c(r>1?r-1:r)},className:"page-link",children:"\xab"})}),i.map((function(e){var t=r==e?s.selectedPage:s.otherPages;if(1==e||e==i.length||e>=r-2&&e<=r+2)return Object(m.jsx)("li",{className:"page-item",children:Object(m.jsx)("span",{onClick:function(){return a(e)},className:t+" page-link",children:e})},e)})),Object(m.jsx)("li",{className:"page-item",children:Object(m.jsx)("span",{onClick:function(){r<i.length?c(r+1):c(r)},className:"page-link",children:"\xbb"})})]})})},h=n(15),x=n.n(h),O=n(24),g=n(44),v=n.n(g),y="https://blooming-spire-52990.herokuapp.com/volcanoes",C=function(){return v.a.get(y)},N=function(e,t){return v.a.put(y+"/"+e,t)},k=function(e){return v.a.delete(y+"/"+e)},P=function(){var e=Object(O.a)(x.a.mark((function e(t){var n,a;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C();case 2:return n=e.sent,a=n.data.filter((function(e){return e.name.toLowerCase().includes(t.name.toLowerCase())})),e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),w=function(){return function(){var e=Object(O.a)(x.a.mark((function e(t){var n,a;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,C();case 3:n=e.sent,(a=n.data)&&t({type:"FETCH_ALL",payload:a}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()},S=function(e){return function(){var t=Object(O.a)(x.a.mark((function t(n){var a;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,P(e);case 3:(a=t.sent)&&n({type:"SEARCH",payload:a}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.error(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()},E=n(159),A=n(153),B=n(155),L=n(157),D=n(158),T=n(164),F=n(75),W=n.n(F),I=n(74),z=n.n(I),R=Object(p.a)((function(e){return{media:{height:0,paddingTop:"56.25%",backgroundColor:"rgba(0, 0, 0, 0.5)",backgroundBlendMode:"darken"},border:{border:"solid"},fullHeightCard:{height:"100%"},card:{display:"flex",flexDirection:"column",justifyContent:"space-between",borderRadius:"15px",height:"100%",position:"relative",margin:"20px"},overlay:{position:"absolute",top:"40px",color:"white",left:"40px"},details:{display:"flex",justifyContent:"space-between",margin:"20px"},title:{padding:"0 16px"},cardActions:{padding:"0 16px 8px 16px",display:"flex",justifyContent:"space-between"}}})),_=n.p+"static/media/VolcanoErupt.7107718b.png",H=function(e){var t=e.volcano,n=e.setCurrentName,a=e.setSearchBoolean,r=R(),c=Object(j.b)(),i=function(e){c(function(e){return function(){var t=Object(O.a)(x.a.mark((function t(n){return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,console.log("in delete action",e),t.next=4,k(e);case 4:n({type:"DELETE",payload:e}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.error(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()}(e)),c(w())};return Object(m.jsxs)(A.a,{className:r.card,children:[Object(m.jsx)(B.a,{className:r.media,image:_,title:t.name}),Object(m.jsxs)("div",{className:r.overlay,children:[Object(m.jsxs)(l.a,{vartiant:"h5",children:["Name: ",t.name]}),Object(m.jsxs)(l.a,{variant:"h6",children:["Type: ",t.type]})]}),Object(m.jsxs)(L.a,{children:[Object(m.jsxs)(l.a,{className:r.details,variant:"body2",color:"textPrimary",children:["isActive: ",JSON.stringify(t.isActive)]}),Object(m.jsxs)(l.a,{className:r.details,variant:"body2",color:"textPrimary",children:["Population: ",t.population]}),Object(m.jsxs)(l.a,{className:r.details,variant:"body2",color:"textPrimary",children:["Description: ",t.description]}),Object(m.jsxs)(l.a,{className:r.details,variant:"body2",color:"textPrimary",children:["Discovered: ",t.discovered]}),Object(m.jsxs)(l.a,{className:r.details,variant:"body2",color:"textPrimary",children:["Latitude: ",t.latitude]}),Object(m.jsxs)(l.a,{className:r.details,variant:"body2",color:"textPrimary",children:["Longitude: ",t.longitude]})]}),Object(m.jsxs)(D.a,{className:r.cardActions,children:[Object(m.jsxs)(T.a,{size:"small",color:"primary",onClick:function(){n(t.name),a(!1)},children:[Object(m.jsx)(z.a,{}),"Edit"]}),Object(m.jsxs)(T.a,{size:"small",color:"secondary",onClick:function(){i(t.name)},children:[Object(m.jsx)(W.a,{fontSize:"small"}),"Delete"]})]})]})},V=Object(p.a)((function(e){return{mainContainer:{display:"flex",alignItems:"center"},smMargin:{margin:e.spacing(1)},actionDiv:{textAlign:"center"}}})),M=function(e){var t=e.setCurrentName,n=e.setSearchBoolean,r=Object(j.c)((function(e){return e.posts})),c=V(),s=Object(a.useState)(1),o=Object(i.a)(s,2),l=o[0],u=o[1],p=Object(a.useState)(6),b=Object(i.a)(p,2),h=b[0],x=(b[1],l*h),O=x-h,g=r.slice(O,x);return g.length?Object(m.jsxs)(d.a,{className:c.containter,container:!0,alignItems:"stretch",spacing:"5",children:[g.map((function(e){return Object(m.jsx)(d.a,{item:!0,xs:12,sm:6,children:Object(m.jsx)(H,{setSearchBoolean:n,volcano:e,setCurrentName:t})},e._id)})),Object(m.jsx)(f,{setCurrentPage:u,currentPage:l,postsPerPage:h,totalPosts:r.length,paginate:function(e){return u(e)}})]}):Object(m.jsx)(E.a,{})},J=n(14),U=n(82),q=n(163),G=Object(p.a)((function(e){return{root:{"& .MuiTextField-root":{margin:e.spacing(1)}},paper:{padding:e.spacing(2),marginTop:"30px"},form:{display:"flex",flexWrap:"wrap",justifyContent:"center"},fileInput:{width:"97%",margin:"10px 0"},buttonSubmit:{marginBottom:10}}})),K=n(76),Q=n.n(K),X=n(77),Y=n.n(X),Z=n(78),$=n.n(Z),ee=function(e){var t=e.currentName,n=e.setCurrentName,r=e.searchBoolean,c=e.setSearchBoolean,s=G(),o=Object(j.b)(),u=Object(j.c)((function(e){return t?e.posts.find((function(e){return e.name==t})):null})),d=Object(a.useState)({_id:"",index:null,isActive:null,population:"",name:"",description:"",discovered:"",latitude:null,longitude:null,type:""}),p=Object(i.a)(d,2),b=p[0],f=p[1];Object(a.useEffect)((function(){u&&f(u)}),[u]);var h=function(){n(null),f({_id:"",index:"",isActive:"",population:"",name:"",description:"",discovered:"",latitude:"",longitude:"",type:""})},g=function(){o(S({name:""}))},C=function(){c(!r)};return Object(m.jsxs)(U.a,{className:s.paper,children:[r?Object(m.jsx)(Q.a,{onClick:C}):Object(m.jsx)(Y.a,{onClick:C}),Object(m.jsx)($.a,{onClick:g}),Object(m.jsxs)("form",{autoComplete:"off",noValidate:!0,className:"".concat(s.form," ").concat(s.root),onSubmit:function(e){var n,a,c;e.preventDefault(),console.log("this is search Boolean",r),t?(o((a=t,c=b,function(){var e=Object(O.a)(x.a.mark((function e(t){var n,r;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,N(a,c);case 3:n=e.sent,(r=n.data)&&t({type:"UPDATE",payload:r}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}())),g()):r?o(S(b)):(o((n=b,function(){var e=Object(O.a)(x.a.mark((function e(t){var a,r;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c=n,v.a.post(y,c);case 3:a=e.sent,(r=a.data)&&t({type:"CREATE",payload:r}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}var c}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}())),g()),h()},children:[Object(m.jsxs)(l.a,{variant:"h6",children:[t?"Editing":r?"Searching":"Creating"," a Volcano"]}),r?Object(m.jsx)(m.Fragment,{}):Object(m.jsx)(q.a,{name:"isActive",variant:"outlined",label:"isActive",fullWidth:!0,value:b.isActive,onChange:function(e){return f(Object(J.a)(Object(J.a)({},b),{},{isActive:e.target.value}))}}),r?Object(m.jsx)(m.Fragment,{}):Object(m.jsx)(q.a,{name:"population",variant:"outlined",label:"Population",fullWidth:!0,value:b.population,onChange:function(e){return f(Object(J.a)(Object(J.a)({},b),{},{population:e.target.value}))}}),Object(m.jsx)(q.a,{name:"name",variant:"outlined",label:"Name",fullWidth:!0,value:b.name,onChange:function(e){return f(Object(J.a)(Object(J.a)({},b),{},{name:e.target.value}))}}),r?Object(m.jsx)(m.Fragment,{}):Object(m.jsx)(q.a,{name:"description",variant:"outlined",label:"Description",fullWidth:!0,value:b.description,onChange:function(e){return f(Object(J.a)(Object(J.a)({},b),{},{description:e.target.value}))}}),r?Object(m.jsx)(m.Fragment,{}):Object(m.jsx)(q.a,{name:"discovered",variant:"outlined",label:"Discovered",fullWidth:!0,value:b.discovered,onChange:function(e){return f(Object(J.a)(Object(J.a)({},b),{},{discovered:e.target.value}))}}),r?Object(m.jsx)(m.Fragment,{}):Object(m.jsx)(q.a,{name:"latitude",variant:"outlined",label:"Latitude",fullWidth:!0,value:b.latitude,onChange:function(e){return f(Object(J.a)(Object(J.a)({},b),{},{latitude:e.target.value}))}}),r?Object(m.jsx)(m.Fragment,{}):Object(m.jsx)(q.a,{name:"longitude",variant:"outlined",label:"Longitude",fullWidth:!0,value:b.longitude,onChange:function(e){return f(Object(J.a)(Object(J.a)({},b),{},{longitude:e.target.value}))}}),r?Object(m.jsx)(T.a,{className:s.buttonSubmit,variant:"contained",color:"primary",size:"small",type:"submit",fullWidth:!0,children:"Search"}):Object(m.jsx)(T.a,{className:s.buttonSubmit,variant:"contained",color:"primary",size:"large",fullWidth:!0,type:"submit",children:"Submit"}),Object(m.jsx)(T.a,{className:s.buttonSubmit,variant:"contained",color:"secondary",size:"small",onClick:h,fullWidth:!0,children:"Clear"})]})]})},te=n.p+"static/media/volcano.9fa67366.png",ne=Object(p.a)((function(){return{appBar:{borderRadius:15,margin:"30px 0",display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center"},heading:{color:"black"},image:{marginLeft:"15 px"}}}));var ae=function(){var e=ne(),t=Object(j.b)(),n=Object(a.useState)(null),r=Object(i.a)(n,2),c=r[0],p=r[1],b=Object(a.useState)(!1),f=Object(i.a)(b,2),h=f[0],x=f[1];return Object(a.useEffect)((function(){t(w())}),[t,c]),Object(m.jsxs)(s.a,{maxWidth:"lg",children:[Object(m.jsxs)(o.a,{className:e.AppBar,position:"static",color:"inherit",children:[Object(m.jsx)(l.a,{className:e.heading,variant:"h2",align:"center",children:"Volcanoes"}),Object(m.jsx)("img",{className:e.image,src:te,alt:"Volcanoes",height:"80"})]}),Object(m.jsx)(u.a,{in:!0,children:Object(m.jsx)(s.a,{children:Object(m.jsxs)(d.a,{container:!0,justify:"space-between",alignItems:"stretch",spacing:3,children:[Object(m.jsx)(d.a,{item:!0,xs:12,sm:7,children:Object(m.jsx)(M,{setSearchBoolean:x,setCurrentName:p})}),Object(m.jsx)(d.a,{item:!0,xs:12,sm:4,children:Object(m.jsx)(ee,{searchBoolean:h,setSearchBoolean:x,currentName:c,setCurrentName:p})})]})})})]})},re=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,166)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),c(e),i(e)}))},ce=n(36),ie=n(79),se=n(80),oe=Object(ce.b)({posts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_ALL":case"SEARCH":return t.payload;case"CREATE":return[].concat(Object(se.a)(e),[t.payload]);case"UPDATE":return e.map((function(e){return e.name==t.payload._name?t.payload:e}));case"DELETE":return e.filter((function(e){return e.name===t.payload}));default:return e}}}),le=Object(ce.d)(oe,Object(ce.c)(Object(ce.a)(ie.a)));c.a.render(Object(m.jsx)(j.a,{store:le,children:Object(m.jsx)(ae,{})}),document.getElementById("root")),re()},91:function(e,t,n){},92:function(e,t,n){}},[[121,1,2]]]);
//# sourceMappingURL=main.4e310fcc.chunk.js.map