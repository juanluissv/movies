(this.webpackJsonpmovies=this.webpackJsonpmovies||[]).push([[0],{63:function(e,t,n){},64:function(e,t,n){},92:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(21),c=n.n(r),o=(n(63),n(64),n(6)),s=n(25),i=n(53),l="MOVIES_LIST_REQUEST",u="MOVIES_LIST_SUCCESS",d="MOVIES_LIST_FAIL",p="MOVIES_DETAILS_REQUEST",j="MOVIES_DETAILS_SUCCESS",b="MOVIES_DETAILS_FAIL",h="SEARCH_MOVIE_REQUEST",O="SEARCH_MOVIE_SUCCESS",m="SEARCH_MOVIE_FAIL",f="ADD_MOVIE_FAVORITE_REQUEST",v="ADD_MOVIE_FAVORITE_SUCCESS",g="ADD_MOVIE_FAVORITE_FAIL",x="LIST_MOVIE_FAVORITE_REQUEST",y="LIST_MOVIE_FAVORITE_SUCCESS",E="LIST_MOVIE_FAVORITE_FAIL",S="REMOVE_MOVIE_FAVORITE_REQUEST",I="REMOVE_MOVIE_FAVORITE_SUCCESS",_="REMOVE_MOVIE_FAVORITE_FAIL",L="GENDER_LIST_REQUEST",C="GENDER_LIST_SUCCESS",k="GENDER_LIST_FAIL",R=n(41),w="USER_REGISTER_REQUEST",T="USER_REGISTER_SUCCESS",N="USER_REGISTER_FAIL",A="USER_LOGIN_REQUEST",M="USER_LOGIN_SUCCESS",U="USER_LOGIN_FAIL",F="USER_LOGOUT",D="USER_DETAILS_REQUEST",V="USER_DETAILS_SUCCESS",G="USER_DETAILS_FAIL",B="USER_DETAILS_RESET",P=n(54),Q=Object(s.combineReducers)({movieList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{movies:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l:return{loading:!0,movies:[]};case u:return{loading:!1,movies:t.payload};case d:return{loading:!1,error:t.payload};default:return e}},movieDetails:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{movie:{}},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p:return{loading:!0};case j:return{loading:!1,movie:t.payload};case b:return{loading:!1,error:t.payload};default:return e}},searchMovies:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{movies:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h:return{loading:!0,movies:[]};case O:return{loading:!1,movies:t.payload};case m:return{loading:!1,error:t.payload};default:return e}},genderList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{movies:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case L:return{loading:!0,movies:[]};case C:return{loading:!1,movies:t.payload};case k:return{loading:!1,error:t.payload};default:return e}},userRegister:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case w:return{loading:!0};case T:return{loading:!1,userInfo:t.payload};case N:return{loading:!1,error:t.payload};default:return e}},userLogin:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case A:return{loading:!0};case M:return{loading:!1,userInfo:t.payload};case U:return{loading:!1,error:t.payload};case F:return{};default:return e}},userDetails:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{user:{}},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case D:return Object(R.a)(Object(R.a)({},e),{},{loading:!0});case V:return{loading:!1,user:t.payload};case G:return{loading:!1,error:t.payload};case B:return{user:{}};default:return e}},addMovieFavorites:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f:return{loading:!0};case v:return{loading:!1,favoriteMovie:t.payload};case g:return{loading:!1,error:t.payload};default:return e}},listMyFavorites:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{favoriteMovies:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case x:return{loading2:!0};case y:return{loading2:!1,favoriteMovies:t.payload};case E:return{error:t.payload};default:return e}},removeMovieFavorites:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case S:return{loading:!0};case I:return{loading:!1,favoriteMovie:t.payload};case _:return{loading:!1,error:t.payload};default:return e}}}),z={userLogin:{userInfo:localStorage.getItem("userInfo")?JSON.parse(localStorage.getItem("userInfo")):null}},H=[i.a],J=Object(s.createStore)(Q,z,Object(P.composeWithDevTools)(s.applyMiddleware.apply(void 0,H))),q=n(12),W=n(8),K=n(94),X=n(23),Y=n(99),Z=n(101),$=n(1),ee=function(){Object(o.b)();var e=Object(o.c)((function(e){return e.userLogin})).userInfo;return Object($.jsx)("div",{children:Object($.jsx)("header",{children:Object($.jsx)(Y.a,{expand:"lg",collapseOnSelect:!0,className:"navbar-dark bg-dark nav1",children:Object($.jsxs)(K.a,{children:[Object($.jsx)(X.LinkContainer,{to:"/",children:Object($.jsx)(Y.a.Brand,{children:Object($.jsx)("h4",{className:"logofont",children:"Discover Movies"})})}),Object($.jsx)(Y.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object($.jsx)(Y.a.Collapse,{id:"basic-navbar-nav",children:Object($.jsxs)(Z.a,{className:"ml-auto headtext",children:[Object($.jsx)(X.LinkContainer,{to:"/search",children:Object($.jsx)(Z.a.Link,{children:"SEARCH"})}),Object($.jsx)(X.LinkContainer,{to:"/genre",children:Object($.jsx)(Z.a.Link,{children:"GENRE"})}),e?Object($.jsxs)($.Fragment,{children:[Object($.jsx)(X.LinkContainer,{to:"/favorites",children:Object($.jsx)(Z.a.Link,{children:"FAVORITES"})}),Object($.jsx)(X.LinkContainer,{to:"/profile",children:Object($.jsx)(Z.a.Link,{children:"PROFILE"})})]}):Object($.jsx)(X.LinkContainer,{to:"/login",children:Object($.jsx)(Z.a.Link,{children:"LOGIN"})})]})})]})})})})},te=n(102),ne=n(7),ae=n.n(ne),re=n(16),ce=n(17),oe=n.n(ce),se=function(){return function(){var e=Object(re.a)(ae.a.mark((function e(t,n){var a,r,c,o,s;return ae.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:x}),a=n(),r=a.userLogin.userInfo,c={headers:{Authorization:"Bearer ".concat(r.token)}},e.next=6,oe.a.get("/api/favorites/myfavorites",c);case 6:o=e.sent,s=o.data,t({type:y,payload:s}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),t({type:E,payload:e.t0.response});case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t,n){return e.apply(this,arguments)}}()},ie=function(e){var t=e.movie;return Object($.jsx)(te.a,{className:"my-4 p3 dounded",style:{background:"black"},children:Object($.jsx)(q.Link,{to:"/movie/".concat(t.id),children:Object($.jsx)(te.a.Img,{src:"https://image.tmdb.org/t/p/w185_and_h278_bestv2/".concat(t.poster_path),className:"cardImg"})})})},le=n(95),ue=function(){return Object($.jsx)(le.a,{animation:"border",role:"status",style:{width:"300px",height:"300px",margin:"auto",display:"block"},children:Object($.jsx)("span",{className:"sr-only",children:"Loading..."})})},de=n(96),pe=n(57),je=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.movieList})),n=t.loading,r=t.movies;return Object(a.useEffect)((function(){e(function(){var e=Object(re.a)(ae.a.mark((function e(t){var n,a;return ae.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:l}),e.next=4,oe.a.get("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=805be512078ad6fc74aec232fda73689&language=en-US&page=1&include_adult=false");case 4:n=e.sent,a=n.data,t({type:u,payload:a.results}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),t({type:d,payload:e.t0.response});case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}())}),[e]),Object($.jsx)($.Fragment,{children:n?Object($.jsx)(ue,{}):Object($.jsx)(de.a,{children:r.filter((function(e){return e.poster_path})).map((function(e){return Object($.jsx)(pe.a,{sm:12,md:6,lg:4,xl:3,children:Object($.jsx)(ie,{movie:e})},e.id)}))})})},be=n(58),he=n(97),Oe=n(98),me=function(e){var t,n=e.match,r=e.history,c=Object(o.b)(),s=Object(o.c)((function(e){return e.movieDetails})),i=s.movie,l=s.loading,u=Object(o.c)((function(e){return e.listMyFavorites})),d=u.favoriteMovies,h=u.loading2,O=Object(o.c)((function(e){return e.userLogin})).userInfo;Object(a.useEffect)((function(){O||r.push("/login")}),[r,O]),Object(a.useEffect)((function(){var e;c((e=n.params.id,function(){var t=Object(re.a)(ae.a.mark((function t(n){var a,r;return ae.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n({type:p}),t.next=4,oe.a.get("https://api.themoviedb.org/3/movie/".concat(e,"?api_key=805be512078ad6fc74aec232fda73689&language=en-US"));case 4:a=t.sent,r=a.data,n({type:j,payload:r}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),n({type:b,payload:t.t0.response});case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}())),c(se())}),[c,n]);var m=function(e){var t={id:n.params.id,poster_path:i.poster_path};c(function(e){return function(){var t=Object(re.a)(ae.a.mark((function t(n,a){var r,c,o,s,i;return ae.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n({type:f}),r=a(),c=r.userLogin.userInfo,o={headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(c.token)}},t.next=6,oe.a.post("/api/favorites",e,o);case 6:s=t.sent,i=s.data,n({type:v,payload:i}),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),n({type:g,payload:t.t0.response});case 14:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e,n){return t.apply(this,arguments)}}()}(t)),r.push("/favorites")},x=function(e){c(function(e){return function(){var t=Object(re.a)(ae.a.mark((function t(n,a){var r,c,o,s,i;return ae.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n({type:S}),r=a(),c=r.userLogin.userInfo,o={headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(c.token)}},t.next=6,oe.a.delete("/api/favorites/myfavorites/".concat(e),o);case 6:s=t.sent,i=s.data,n({type:I,payload:i}),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),n({type:_,payload:t.t0.response});case 14:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e,n){return t.apply(this,arguments)}}()}(e)),r.push("/favorites")};if(0==h){var y,E=Object(be.a)(d);try{for(E.s();!(y=E.n()).done;){if(y.value.id==n.params.id){t=!0;break}t=!1}}catch(L){E.e(L)}finally{E.f()}}return Object($.jsx)($.Fragment,{children:l?Object($.jsx)(ue,{}):Object($.jsxs)(de.a,{children:[Object($.jsx)(pe.a,{md:6,children:Object($.jsx)(he.a,{src:"https://image.tmdb.org/t/p/original/".concat(i.poster_path),fluid:!0,className:"movieImage"})}),Object($.jsxs)(pe.a,{md:6,children:[Object($.jsx)("h3",{className:"movieDetailTitle",children:i.title}),Object($.jsx)("p",{className:"movieDetailDescription",children:i.overview}),Object($.jsxs)("p",{className:"movieDetailDescription",children:["Rating: ",i.vote_average]}),Object($.jsx)("p",{className:"movieDetailDescription",children:Object($.jsx)("a",{target:"_blank",href:"https://www.youtube.com/results?search_query=".concat(i.title,"+trailer"),children:"Trailer"})}),t?Object($.jsx)(Oe.a,{onClick:function(){return x(i.id)},className:"btn btn-primary btn-lg favButton2",children:"Remove from Favorites"}):Object($.jsx)(Oe.a,{onClick:function(){return m()},className:"btn btn-primary btn-lg favButton",children:"Add To Favorites"})]})]})})},fe=function(e){var t=e.history,n=Object(o.b)(),r=Object(o.c)((function(e){return e.userLogin})).userInfo,c=Object(o.c)((function(e){return e.listMyFavorites})),s=c.favoriteMovies,i=c.loading2;return Object(a.useEffect)((function(){r?n(se()):t.push("/login")}),[n,t,r]),Object($.jsx)($.Fragment,{children:i?Object($.jsx)(ue,{}):Object($.jsx)(de.a,{children:s.map((function(e){return Object($.jsx)(pe.a,{sm:12,md:6,lg:4,xl:3,children:Object($.jsx)(ie,{movie:e})},e.id)}))})})},ve=n(13),ge=n(100),xe=function(){var e=Object(o.b)(),t=Object(a.useState)(""),n=Object(ve.a)(t,2),r=n[0],c=n[1],s=Object(o.c)((function(e){return e.searchMovies})),i=s.loading,l=s.movies;return Object($.jsxs)("div",{children:[Object($.jsx)(de.a,{children:Object($.jsx)(pe.a,{children:Object($.jsxs)(ge.a,{onSubmit:function(t){t.preventDefault(),e(function(e){return function(){var t=Object(re.a)(ae.a.mark((function t(n){var a,r;return ae.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n({type:h}),t.next=4,oe.a.get("https://api.themoviedb.org/3/search/movie?api_key=805be512078ad6fc74aec232fda73689&language=en-US&query=".concat(e));case 4:a=t.sent,r=a.data,n({type:O,payload:r.results}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),n({type:m,payload:t.t0.response});case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}()}(r))},className:"searchForm",children:[Object($.jsx)(ge.a.Group,{controlId:"name",children:Object($.jsx)(ge.a.Control,{type:"title",name:"title",placeholder:"Please enter Movie Name",value:r,onChange:function(e){return c(e.target.value)}})}),Object($.jsx)(Oe.a,{type:"submit",variant:"outline-primary",size:"lg",className:"searchButton",children:"Search"})]})})}),i?Object($.jsx)(ue,{}):Object($.jsx)(de.a,{children:l.filter((function(e){return e.poster_path})).map((function(e){return Object($.jsx)(pe.a,{sm:12,md:6,lg:4,xl:3,children:Object($.jsx)(ie,{movie:e})},e.id)}))})]})},ye=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.genderList})),n=t.loading,a=t.movies,r=function(t){e(function(e){return function(){var t=Object(re.a)(ae.a.mark((function t(n){var a,r;return ae.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n({type:L}),t.next=4,oe.a.get("https://api.themoviedb.org/3/discover/movie?api_key=805be512078ad6fc74aec232fda73689&with_genres=".concat(e,"&language=en-US"));case 4:a=t.sent,r=a.data,n({type:C,payload:r.results}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),n({type:k,payload:t.t0.response});case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}()}(t))};return Object($.jsxs)($.Fragment,{children:[Object($.jsxs)("div",{children:[Object($.jsx)("img",{src:"../images/action.png",onClick:function(){return r("28")},className:""}),Object($.jsx)("img",{src:"../images/animated.png",onClick:function(){return r("16")},className:"imageGender"}),Object($.jsx)("img",{src:"../images/comedy.png",onClick:function(){return r("35")},className:"imageGender"}),Object($.jsx)("img",{src:"../images/crime.png",onClick:function(){return r("80")},className:"imageGender"}),Object($.jsx)("img",{src:"../images/documentary.png",onClick:function(){return r("99")},className:"imageGender"}),Object($.jsx)("img",{src:"../images/drama.png",onClick:function(){return r("18")},className:"imageGender2"}),Object($.jsx)("img",{src:"../images/horror.png",onClick:function(){return r("27")},className:"imageGender"}),Object($.jsx)("img",{src:"../images/kids.png",onClick:function(){return r("10751")},className:"imageGender"}),Object($.jsx)("img",{src:"../images/romance.png",onClick:function(){return r("10749")},className:"imageGender"}),Object($.jsx)("img",{src:"../images/science.png",onClick:function(){return r("878")},className:"imageGender"})]}),n?Object($.jsx)(ue,{}):Object($.jsx)(de.a,{className:"genreImages",children:a.map((function(e){return Object($.jsx)(pe.a,{sm:12,md:6,lg:4,xl:3,children:Object($.jsx)(ie,{movie:e})},e.id)}))})]})},Ee=function(e){e.location;var t=e.history,n=Object(a.useState)(""),r=Object(ve.a)(n,2),c=r[0],s=r[1],i=Object(a.useState)(""),l=Object(ve.a)(i,2),u=l[0],d=l[1],p=Object(a.useState)(""),j=Object(ve.a)(p,2),b=j[0],h=j[1],O=Object(a.useState)(""),m=Object(ve.a)(O,2),f=m[0],v=m[1],g=Object(o.b)(),x=Object(o.c)((function(e){return e.userRegister})),y=(x.loading,x.userInfo);Object(a.useEffect)((function(){y&&t.push("/profile")}),[t,y]);return Object($.jsxs)("div",{className:"registerForm",children:[Object($.jsx)("h2",{className:"text-center",children:"Sign Up"}),Object($.jsxs)(ge.a,{onSubmit:function(e){e.preventDefault(),b!==f?console.log("password do not match"):g(function(e,t,n){return function(){var a=Object(re.a)(ae.a.mark((function a(r){var c,o,s;return ae.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,r({type:w}),c={headers:{"Content-Type":"application/json"}},a.next=5,oe.a.post("/api/users",{name:e,email:t,password:n},c);case 5:o=a.sent,s=o.data,r({type:T,payload:s}),r({type:M,payload:s}),localStorage.setItem("userInfo",JSON.stringify(s)),a.next=15;break;case 12:a.prev=12,a.t0=a.catch(0),r({type:N,payload:a.t0.response});case 15:case"end":return a.stop()}}),a,null,[[0,12]])})));return function(e){return a.apply(this,arguments)}}()}(c,u,b))},children:[Object($.jsxs)(ge.a.Group,{controlId:"name",children:[Object($.jsx)(ge.a.Label,{children:"Name"}),Object($.jsx)(ge.a.Control,{type:"name",placeholder:"Enter name",value:c,onChange:function(e){return s(e.target.value)}})]}),Object($.jsxs)(ge.a.Group,{controlId:"email",children:[Object($.jsx)(ge.a.Label,{children:"Email"}),Object($.jsx)(ge.a.Control,{type:"email",placeholder:"Enter email",value:u,onChange:function(e){return d(e.target.value)}})]}),Object($.jsxs)(ge.a.Group,{controlId:"password",children:[Object($.jsx)(ge.a.Label,{children:"Password"}),Object($.jsx)(ge.a.Control,{type:"password",placeholder:"Enter Password",value:b,onChange:function(e){return h(e.target.value)}})]}),Object($.jsxs)(ge.a.Group,{controlId:"confirmPassword",children:[Object($.jsx)(ge.a.Label,{children:"Confirm Password"}),Object($.jsx)(ge.a.Control,{type:"password",placeholder:"Confirm Password",value:f,onChange:function(e){return v(e.target.value)}})]}),Object($.jsx)(Oe.a,{type:"submit",variant:"primary",children:"Register"})]}),Object($.jsx)(de.a,{className:"py-3",children:Object($.jsxs)(pe.a,{children:["Have and Account?"," ",Object($.jsx)(q.Link,{to:"/login",children:"Login"})]})})]})},Se=function(e){e.location;var t=e.history,n=Object(a.useState)(""),r=Object(ve.a)(n,2),c=r[0],s=r[1],i=Object(a.useState)(""),l=Object(ve.a)(i,2),u=l[0],d=l[1],p=Object(o.b)(),j=Object(o.c)((function(e){return e.userLogin})),b=(j.loading,j.userInfo);Object(a.useEffect)((function(){b&&t.push("/favorites")}),[t,b]);return Object($.jsxs)("div",{className:"registerForm",children:[Object($.jsx)("h2",{children:"Sign In"}),Object($.jsxs)(ge.a,{onSubmit:function(e){e.preventDefault(),p(function(e,t){return function(){var n=Object(re.a)(ae.a.mark((function n(a){var r,c,o;return ae.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,a({type:A}),r={headers:{"Content-Type":"application/json"}},n.next=5,oe.a.post("/api/users/login",{email:e,password:t},r);case 5:c=n.sent,o=c.data,a({type:M,payload:o}),localStorage.setItem("userInfo",JSON.stringify(o)),n.next=14;break;case 11:n.prev=11,n.t0=n.catch(0),a({type:U,payload:n.t0.response});case 14:case"end":return n.stop()}}),n,null,[[0,11]])})));return function(e){return n.apply(this,arguments)}}()}(c,u))},children:[Object($.jsxs)(ge.a.Group,{controlId:"email",children:[Object($.jsxs)(ge.a.Label,{children:["EMAIL: ",Object($.jsx)("small",{children:"demo@demo.com"})]}),Object($.jsx)(ge.a.Control,{type:"email",placeholder:"Enter Email",value:c,onChange:function(e){return s(e.target.value)}})]}),Object($.jsxs)(ge.a.Group,{controlId:"password",children:[Object($.jsxs)(ge.a.Label,{children:["PASSWORD: ",Object($.jsx)("small",{children:"demo"})]}),Object($.jsx)(ge.a.Control,{type:"password",placeholder:"Enter Password",value:u,onChange:function(e){return d(e.target.value)}})]}),Object($.jsx)(Oe.a,{type:"submit",variant:"primary",children:"Sign in"})]}),Object($.jsx)(de.a,{className:"py-3",children:Object($.jsxs)(pe.a,{children:["New Customer?"," ",Object($.jsx)(q.Link,{to:"/register",children:"Register"})]})})]})},Ie=function(e){e.location;var t=e.history,n=Object(a.useState)(""),r=Object(ve.a)(n,2),c=r[0],s=r[1],i=Object(a.useState)(""),l=Object(ve.a)(i,2),u=l[0],d=l[1],p=Object(o.b)(),j=Object(o.c)((function(e){return e.userDetails})),b=(j.loading,j.user),h=Object(o.c)((function(e){return e.userLogin})).userInfo;Object(a.useEffect)((function(){h?b.name?(s(b.name),d(b.email)):p(function(){var e=Object(re.a)(ae.a.mark((function e(t,n){var a,r,c,o,s;return ae.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:D}),a=n(),r=a.userLogin.userInfo,c={headers:{"Content-Type":"applocation/json",Authorization:"Bearer ".concat(r.token)}},e.next=6,oe.a.get("/api/users/profile",c);case 6:o=e.sent,s=o.data,t({type:V,payload:s}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),t({type:G,payload:e.t0.response});case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t,n){return e.apply(this,arguments)}}()):t.push("/login")}),[p,t,h,b]);return Object($.jsxs)("div",{className:"registerForm",children:[Object($.jsx)("h2",{children:"User Profile"}),Object($.jsxs)(ge.a,{children:[Object($.jsxs)(ge.a.Group,{controlId:"name",children:[Object($.jsx)(ge.a.Label,{children:"Name"}),Object($.jsx)(ge.a.Control,{type:"name",placeholder:"Enter name",value:c,onChange:function(e){return s(e.target.value)}})]}),Object($.jsxs)(ge.a.Group,{controlId:"email",children:[Object($.jsx)(ge.a.Label,{children:"Email"}),Object($.jsx)(ge.a.Control,{type:"email",placeholder:"Enter email",value:u,onChange:function(e){return d(e.target.value)}})]})]}),Object($.jsx)(Oe.a,{type:"submit",variant:"info",className:"logoutButton",onClick:function(){p((function(e){localStorage.removeItem("userInfo"),e({type:F}),e({type:B})})),t.push("/login")},children:"Logout"})]})};var _e=function(){return Object($.jsxs)(q.BrowserRouter,{children:[Object($.jsx)(ee,{}),Object($.jsx)("main",{className:"py-3",children:Object($.jsxs)(K.a,{children:[Object($.jsx)(W.d,{path:"/",component:je,exact:!0}),Object($.jsx)(W.d,{path:"/movie/:id",component:me}),Object($.jsx)(W.d,{path:"/favorites",component:fe}),Object($.jsx)(W.d,{path:"/search",component:xe}),Object($.jsx)(W.d,{path:"/genre",component:ye}),Object($.jsx)(W.d,{path:"/register",component:Ee}),Object($.jsx)(W.d,{path:"/login",component:Se}),Object($.jsx)(W.d,{path:"/profile",component:Ie})]})})]})};c.a.render(Object($.jsx)(o.a,{store:J,children:Object($.jsx)(_e,{})}),document.getElementById("root"))}},[[92,1,2]]]);
//# sourceMappingURL=main.f957fbf0.chunk.js.map