(this.webpackJsonpreact=this.webpackJsonpreact||[]).push([[0],{58:function(e,t,n){},59:function(e,t,n){},90:function(e,t,n){"use strict";n.r(t);var s=n(25),r=n.n(s),c=n(7),a=(n(58),n(0)),o=n.n(a),i=n(8),l=n(6),j=n(18),d=n(44);function u(e){var t=Object(a.useState)(e),n=Object(c.a)(t,2),s=n[0],r=n[1];return[s,function(e){r(Object(d.a)(Object(d.a)({},s),{},{[e.target.id]:e.target.value}))}]}n(59);var h=n(11),b=n.n(h),x=function(e){var t=document.cookie&&document.cookie.split("; ").find((function(t){return t.startsWith(e+"=")})).split("=")[1];return t.length>0?t:null},O="https://fast-falls-96051.herokuapp.com/",m=n(1);function f(){var e=Object(i.f)(),t=u({username:"",password:""}),n=Object(c.a)(t,2),s=n[0],r=n[1];return Object(m.jsx)("div",{className:"Login",children:Object(m.jsxs)(l.a,{onSubmit:function(t){t.preventDefault(),console.log("subited");var n={username:s.username,password:s.password};b.a.post(O+"users/login",n).then((function(t){console.log(t),200===t.status?(console.log(t.data),document.cookie="user_id="+t.data.userid,document.cookie="username="+s.username,e.push("/")):(alert(t.data),console.log("failure"),e.push("/login"))}),(function(e){return alert("Some error occured. "+e)})),console.log("what is happening")},children:[Object(m.jsxs)(l.a.Group,{size:"lg",controlId:"username",children:[Object(m.jsx)(l.a.Label,{children:"Username"}),Object(m.jsx)(l.a.Control,{autoFocus:!0,type:"text",value:s.username,onChange:r})]}),Object(m.jsxs)(l.a.Group,{size:"lg",controlId:"password",children:[Object(m.jsx)(l.a.Label,{children:"Password"}),Object(m.jsx)(l.a.Control,{type:"password",value:s.password,onChange:r})]}),Object(m.jsx)(j.a,{block:!0,size:"lg",type:"submit",disabled:!(s.username.length>0&&s.password.length>0),children:"Login"})]})})}var g={username:"",password:"",confirmPassword:"",firstname:"",lastname:""};function v(){var e=u(g),t=Object(c.a)(e,2),n=t[0],s=t[1],r=Object(i.f)();function a(e){e.preventDefault();var t={username:n.username,password:n.password,firstname:n.firstname,lastname:n.lastname};b.a.post(O+"users/register",t).then((function(e){if(console.log(e),200===e.status)console.log("suceess"),r.push("/login");else{var t="Some error occured. Try after some time!";401===e.status&&(t="User with the email already exists"),alert(t),console.log("failure"),r.push("/signup")}}),(function(e){return console.log(e)}))}return Object(m.jsx)("div",{className:"Signup",children:Object(m.jsxs)(l.a,{onSubmit:a,children:[Object(m.jsxs)(l.a.Group,{controlId:"firstname",size:"lg",children:[Object(m.jsx)(l.a.Label,{children:"First Name"}),Object(m.jsx)(l.a.Control,{autoFocus:!0,type:"text",value:n.firstname,onChange:s})]}),Object(m.jsxs)(l.a.Group,{controlId:"lastname",size:"lg",children:[Object(m.jsx)(l.a.Label,{children:"Last Name"}),Object(m.jsx)(l.a.Control,{type:"text",value:n.lastname,onChange:s})]}),Object(m.jsxs)(l.a.Group,{controlId:"username",size:"lg",children:[Object(m.jsx)(l.a.Label,{children:"Username"}),Object(m.jsx)(l.a.Control,{type:"text",value:n.username,onChange:s})]}),Object(m.jsxs)(l.a.Group,{controlId:"password",size:"lg",children:[Object(m.jsx)(l.a.Label,{children:"Password"}),Object(m.jsx)(l.a.Control,{type:"password",value:n.password,onChange:s})]}),Object(m.jsxs)(l.a.Group,{controlId:"confirmPassword",size:"lg",children:[Object(m.jsx)(l.a.Label,{children:"Confirm Password"}),Object(m.jsx)(l.a.Control,{type:"password",onChange:s,value:n.confirmPassword})]}),Object(m.jsx)(j.a,{block:!0,size:"lg",type:"submit",disabled:!(n.username.length>0&&n.password.length>0&&n.firstname.length>0&&n.password===n.confirmPassword),children:"Signup"})]})})}var p=n(32),w=n(33),y=n(24),S=n(9),N=["Read More","Show less"],C=[1,2,3,4,5,6,7,8,9,10],L=function(e){var t=u({rating:1,review:""}),n=Object(c.a)(t,2),s=n[0],r=n[1],a=o.a.useState(!1),i=Object(c.a)(a,2),j=i[0],d=i[1];return Object(m.jsxs)(l.a,{children:[Object(m.jsxs)(l.a.Group,{controlId:"rating",children:[Object(m.jsx)(l.a.Label,{children:"Your rating"}),Object(m.jsx)(l.a.Control,{size:"sm",as:"select",onChange:r,value:s.rating,children:C.map((function(e){return Object(m.jsx)("option",{children:e})}))})]}),Object(m.jsxs)(l.a.Group,{controlId:"review",children:[Object(m.jsx)(l.a.Label,{children:"Your Review"}),Object(m.jsx)(l.a.Control,{as:"textarea",rows:2,onChange:r,value:s.review})]}),Object(m.jsx)(S.a.Link,{onClick:function(){d(!0);var t={userid:x("user_id"),movieid:parseInt(e.movieId),rating:s.rating,review:s.review};console.log(t),console.log(typeof t.movieid),console.log(typeof t.rating),console.log(typeof t.review),b.a.post(O+"users/addmovie",t).then((function(e){d(!1),e.data.error?alert(e.data.error):alert("Successfully added")}),(function(e){return alert("Some error occured try after some time")})).catch((function(e){return console.log(e)})),console.log(s.rating),console.log(s.review)},children:"Add to list"}),j&&Object(m.jsx)(p.a,{animation:"border"})]})},k=function(e){var t,n,s=e.movie.poster_url,r="",a="";e.movie.genres.map((function(e,t){a+=t?", "+e:e})),t=e.movie.overview.length,n=e.movie.overview.substr(0,Math.min(70,t)),t>70&&(r=e.movie.overview.substr(70,t-70+1));var i=o.a.useState(1),l=Object(c.a)(i,2),j=l[0],d=l[1];return Object(m.jsxs)(S.a,{style:{width:"18rem",marginTop:"1rem"},children:[Object(m.jsx)(S.a.Img,{variant:"top",src:s,style:{height:"12rem",objectFit:"cover"}}),Object(m.jsxs)(S.a.Body,{children:[Object(m.jsxs)(S.a.Title,{children:[e.movie.title," (",e.movie.release_date,")"]}),Object(m.jsx)(S.a.Subtitle,{className:"mb-2 text-muted",children:a}),Object(m.jsx)(S.a.Subtitle,{className:"mb-2 text-muted",children:e.movie.language}),Object(m.jsxs)(S.a.Text,{children:[n+(j?"":r),Object(m.jsx)(S.a.Link,{onClick:function(){return d(1-j)},children:N[1-j]})]}),e.show&&Object(m.jsx)(L,{movieId:e.movie.id}),!e.show&&Object(m.jsxs)(S.a.Text,{children:["Your Score : ",e.rating]}),!e.show&&Object(m.jsxs)(S.a.Text,{children:["Your Review : ",e.review]})]})]})},z=function(){var e=u({movieName:""}),t=Object(c.a)(e,2),n=t[0],s=t[1],r=Object(i.f)(),d=o.a.useState([]),h=Object(c.a)(d,2),f=h[0],g=h[1],v=o.a.useState(!1),S=Object(c.a)(v,2),N=S[0],C=S[1];Object(a.useEffect)((function(){var e=x("user_id");e?console.log("inside",e):r.push("/login")}),[]);return Object(m.jsxs)("div",{children:[Object(m.jsxs)(l.a,{onSubmit:function(e){e.preventDefault(),console.log(n.movieName),C(!0);var t=O+"movies/search/"+n.movieName;b.a.get(t).then((function(e){console.log(e),g(e.data),C(!1)}),(function(e){console.log(e)}))},children:[Object(m.jsxs)(l.a.Group,{controlId:"movieName",size:"lg",children:[Object(m.jsx)(l.a.Label,{children:"Enter the Movie Name"}),Object(m.jsx)(l.a.Control,{autoFocus:!0,type:"text",value:n.movieName,onChange:s})]}),Object(m.jsx)(j.a,{type:"submit",disabled:!(n.movieName.length>0),children:"Search"}),N&&Object(m.jsx)(p.a,{animation:"border"})]}),Object(m.jsx)("div",{children:Object(m.jsx)(w.a,{children:f&&f.length>0&&f.map((function(e){return Object(m.jsx)(y.a,{xs:6,md:4,children:Object(m.jsx)(k,{movie:e,show:!0})})}))})})]})};function I(){return Object(m.jsx)("div",{className:"NotFound text-center",children:Object(m.jsx)("h3",{children:"Sorry, page not found!"})})}var _=function(){var e=Object(i.f)(),t="/"+x("username");return x("user_id")?location.href=t:e.push("/login"),Object(m.jsx)("div",{children:"Not to be displayed"})},F=n(12),T=n(34),G=function(){var e=Object(i.g)().username,t=o.a.useState([]),n=Object(c.a)(t,2),s=n[0],r=n[1];o.a.useEffect((function(){console.log(typeof e);var t=O+"users/"+e+"/followers";b.a.get(t).then((function(e){console.log(e),r(e.data)}),(function(e){return console.log(e)}))}),[]);return Object(m.jsx)("div",{children:Object(m.jsxs)(T.a,{striped:!0,bordered:!0,hover:!0,variant:"dark",children:[Object(m.jsx)("thead",{children:Object(m.jsxs)("tr",{children:[Object(m.jsx)("th",{children:"#"}),Object(m.jsx)("th",{children:"First Name"}),Object(m.jsx)("th",{children:"Last Name"}),Object(m.jsx)("th",{children:"Username"})]})}),Object(m.jsx)("tbody",{children:s&&s.map((function(e,t){var n="/"+e.username;return Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{children:t+1}),Object(m.jsx)("td",{children:e.firstname}),Object(m.jsx)("td",{children:e.lastname}),Object(m.jsx)("td",{children:Object(m.jsx)(F.b,{to:n,children:e.username})})]})}))})]})})},E=function(){var e=Object(i.g)().username,t=o.a.useState([]),n=Object(c.a)(t,2),s=n[0],r=n[1];o.a.useEffect((function(){console.log(typeof e);var t=O+"users/"+e+"/following";b.a.get(t).then((function(e){console.log(e),r(e.data)}),(function(e){return console.log(e)}))}),[]);return Object(m.jsxs)("div",{children:["Following",Object(m.jsxs)(T.a,{striped:!0,bordered:!0,hover:!0,variant:"dark",children:[Object(m.jsx)("thead",{children:Object(m.jsxs)("tr",{children:[Object(m.jsx)("th",{children:"#"}),Object(m.jsx)("th",{children:"First Name"}),Object(m.jsx)("th",{children:"Last Name"}),Object(m.jsx)("th",{children:"Username"})]})}),Object(m.jsx)("tbody",{children:s&&s.map((function(e,t){var n="/"+e.username;return Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{children:t+1}),Object(m.jsx)("td",{children:e.firstname}),Object(m.jsx)("td",{children:e.lastname}),Object(m.jsx)("td",{children:Object(m.jsx)(F.b,{to:n,children:e.username})})]})}))})]})]})},M=function(){var e=Object(i.g)().username,t=o.a.useState([]),n=Object(c.a)(t,2),s=n[0],r=n[1],a={username:e,firstname:"firstname",lastname:"lastname",movies_count:0,followers_count:0,following_count:0},l=o.a.useState(a),j=Object(c.a)(l,2),d=j[0],u=j[1];return o.a.useEffect((function(){var t=O+"users/"+e;b.a.get(t).then((function(e){console.log(e),u(e.data[0])}),(function(e){return console.log(e)}));var n=O+"users/"+e+"/movielist";b.a.get(n).then((function(e){r(e.data),console.log(e)}),(function(e){console.log(e)}))}),[]),Object(m.jsxs)("div",{children:[Object(m.jsxs)("div",{style:{display:"flex",justifyContent:"space-evenly"},children:[Object(m.jsxs)("div",{children:[Object(m.jsxs)("h1",{style:{fontSize:"200%"},children:[d?d.firstname+" "+d.lastname:""," "]}),Object(m.jsxs)("h5",{style:{fontSize:"100%"},children:["@",d?d.username:""]})]}),Object(m.jsxs)("div",{style:{marginLeft:"auto",display:"flex",flexDirection:"column",alignItems:"center"},children:[Object(m.jsx)("h2",{style:{fontSize:"200%"},children:d?d.movies_count:0}),Object(m.jsx)("h4",{style:{fontSize:"100%"},children:"Movies"})]}),Object(m.jsxs)("div",{style:{marginLeft:"20px",display:"flex",flexDirection:"column",alignItems:"center"},children:[Object(m.jsx)("a",{href:(d?d.username:"")+"/followers",children:Object(m.jsx)("h2",{style:{fontSize:"200%"},children:d?d.followers_count:0})}),Object(m.jsx)("h4",{style:{fontSize:"100%"},children:"Followers"})]}),Object(m.jsxs)("div",{style:{marginLeft:"10px",display:"flex",flexDirection:"column",alignItems:"center"},children:[Object(m.jsxs)("a",{href:(d?d.username:"")+"/following",children:[Object(m.jsx)("h2",{style:{fontSize:"200%"},children:d?d.following_count:0})," "]}),Object(m.jsx)("h4",{style:{fontSize:"100%"},children:"Following"})]})]}),Object(m.jsx)(w.a,{children:s&&s.length>0&&s.map((function(e){return Object(m.jsx)(y.a,{xs:12,md:4,children:Object(m.jsx)(k,{movie:e.movie,show:!1,review:e.review,rating:e.rating})})}))})]})},D=function(){o.a.useEffect((function(){var e=x("user_id");e?console.log("inside",e):r.push("/login")}),[]);var e=u({userName:""}),t=Object(c.a)(e,2),n=t[0],s=t[1],r=Object(i.f)(),a=o.a.useState(!1),d=Object(c.a)(a,2),h=d[0],f=d[1],g=o.a.useState([]),v=Object(c.a)(g,2),p=v[0],w=v[1];return Object(m.jsxs)("div",{children:[Object(m.jsxs)(l.a,{onSubmit:function(e){e.preventDefault(),console.log(n.userName);var t=O+"users/"+n.userName;b.a.get(t).then((function(e){console.log(e.data),e.data.length>0?(w(e.data[0]),f(!0)):alert("No users found")}),(function(e){alert("Some error occured ! Try after some time"),console.log(e)}))},children:[Object(m.jsxs)(l.a.Group,{controlId:"userName",size:"lg",children:[Object(m.jsx)(l.a.Label,{children:"Enter the User Name"}),Object(m.jsx)(l.a.Control,{autoFocus:!0,type:"text",value:n.userName,onChange:s})]}),Object(m.jsx)(j.a,{type:"submit",disabled:!(n.userName.length>0),children:"Search"})]}),h&&Object(m.jsx)("div",{children:Object(m.jsxs)(S.a,{children:[Object(m.jsxs)(S.a.Header,{children:["@",p.username]}),Object(m.jsxs)(S.a.Body,{children:[Object(m.jsxs)(S.a.Title,{children:[p.firstname," ",p.lastname]}),Object(m.jsxs)(S.a.Text,{children:["Movies : ",p.movies_count]}),Object(m.jsxs)(S.a.Text,{children:["Followers : ",p.followers_count]}),Object(m.jsxs)(S.a.Text,{children:["Following : ",p.following_count]}),Object(m.jsx)(j.a,{variant:"primary",onClick:function(){var e="";p&&(e=p.username);var t=x("user_id");b.a.post("https://fast-falls-96051.herokuapp.com/users/follow",{userid:t,username:e}).then((function(e){e.data.error?alert(e.data.error):alert("Added successfully !"),console.log(e)}),(function(e){return console.log(e)}))},children:"Follow"})]})]})})]})};function P(){return Object(m.jsxs)(i.c,{children:[Object(m.jsx)(i.a,{exact:!0,path:"/",children:Object(m.jsx)(_,{})}),Object(m.jsx)(i.a,{path:"/:username/followers",children:Object(m.jsx)(G,{})}),Object(m.jsx)(i.a,{path:"/:username/following",children:Object(m.jsx)(E,{})}),Object(m.jsx)(i.a,{path:"/addmovie",children:Object(m.jsx)(z,{})}),Object(m.jsx)(i.a,{path:"/login",children:Object(m.jsx)(f,{})}),Object(m.jsx)(i.a,{path:"/signup",children:Object(m.jsx)(v,{})}),Object(m.jsx)(i.a,{path:"/addfollower",children:Object(m.jsx)(D,{})}),Object(m.jsx)(i.a,{path:"/:username",children:Object(m.jsx)(M,{})}),Object(m.jsx)(i.a,{children:Object(m.jsx)(I,{})})]})}var U=n(28),A=n(23);function B(){var e=o.a.useState(!1),t=Object(c.a)(e,2),n=t[0],s=t[1],r=Object(i.f)();o.a.useEffect((function(){x("user_id")?s(!0):s(!1),console.log("hojo")}),[]);return Object(m.jsxs)("div",{className:"App container py-3",children:[Object(m.jsxs)(U.a,{collapseOnSelect:!0,bg:"light",expand:"md",className:"mb-3",children:[Object(m.jsx)(U.a.Brand,{href:"/",className:"font-weight-bold text-muted",children:"My Movie List"}),Object(m.jsx)(U.a.Toggle,{}),Object(m.jsx)(U.a.Collapse,{className:"justify-content-end",children:Object(m.jsxs)(A.a,{children:[!n&&Object(m.jsx)(A.a.Link,{href:"/signup",children:"Signup"}),!n&&Object(m.jsx)(A.a.Link,{href:"/login",children:"Login"}),n&&Object(m.jsx)(A.a.Link,{href:"/addfollower",children:"Find Friend"}),n&&Object(m.jsx)(A.a.Link,{href:"/addmovie",children:"Add Movie"}),n&&Object(m.jsx)(A.a.Link,{onClick:function(){s(!1),document.cookie="user_id=",document.cookie="username=",r.push("/login")},children:"Logout"})]})})]}),Object(m.jsx)(P,{})]})}var Y=document.getElementById("root");r.a.render(Object(m.jsx)(F.a,{children:Object(m.jsx)(B,{})}),Y)}},[[90,1,2]]]);
//# sourceMappingURL=main.f6e2a8d1.chunk.js.map